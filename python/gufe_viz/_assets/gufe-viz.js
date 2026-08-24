const kr = {
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
function Li() {
  try {
    return globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches ?? !1;
  } catch {
    return !1;
  }
}
const F = Li() ? kr.dark : kr.light, X = {
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
}, Je = {
  bold: "700"
}, ce = {
  xs: "2px",
  sm: "4px",
  md: "6px",
  lg: "8px",
  xl: "10px",
  xxl: "14px"
}, lt = {
  sm: "3px",
  md: "6px",
  xl: "10px"
}, Oe = {
  title: F.titleColor,
  primary: F.textPrimary,
  muted: F.textMuted,
  faint: F.textMuted2,
  error: F.errorFg
}, vt = {
  /** Where a 3D engine draws. Interface, not chemistry: it is the paper. */
  viewer: F.viewerBg,
  /** Where a 2D depiction is placed, for the same reason. */
  canvas2D: F.canvas2DBg
}, de = {
  base: `background:${F.btnBg};color:${F.btnFg};border:1px solid ${F.btnBorder};padding:${ce.sm} 9px;font-size:${X.small};font-weight:${Je.bold};border-radius:${lt.sm};cursor:pointer;font-family:inherit;`,
  bg: F.btnBg,
  bgHover: F.btnBgHover,
  bgActive: F.btnBgActive
}, Ui = `background:${F.selectBg};color:${F.textPrimary};border:1px solid ${F.selectBorder};border-radius:${lt.md};padding:${ce.sm} ${ce.lg};font-size:${X.body};cursor:pointer;font-family:inherit;`, Ki = `display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;padding:9px ${ce.xxl};flex-shrink:0;background:${F.toolbarBg};border-bottom:1px solid ${F.toolbarBorder};`, yi = {
  top: `display:flex;align-items:center;gap:${ce.xl};flex-wrap:wrap;padding:${ce.lg} ${ce.xxl};flex-shrink:0;font-size:${X.body};background:${F.toolbarBg};border-bottom:1px solid ${F.toolbarBorder};color:${F.textPrimary};`,
  bottom: `display:flex;align-items:center;gap:${ce.xl};flex-wrap:wrap;padding:${ce.lg} ${ce.xxl};flex-shrink:0;background:${F.toolbarBg};border-top:1px solid ${F.toolbarBorder};`
}, $t = `flex-shrink:0;padding:${ce.sm} ${ce.xl};font-size:${X.heading};font-weight:${Je.bold};color:${F.labelFg};background:${F.labelBg};`, Hi = `display:flex;flex-direction:column;gap:${ce.xs};padding:${ce.xxl} 18px;border-radius:${lt.xl};background:${F.cardBg};border:1px solid ${F.cardBorder};`, vi = `position:absolute;bottom:${ce.xl};right:${ce.xl};display:flex;gap:${ce.sm};padding:${ce.sm};border-radius:${lt.md};z-index:10;background:${F.switcherBg};box-shadow:0 2px 8px rgba(0,0,0,0.25);`, Er = `font-family:${X.mono};font-size:${X.small};line-height:1.7;color:${F.textMuted};`, xr = `font-size:${X.small};font-weight:${Je.bold};letter-spacing:.08em;text-transform:uppercase;color:${F.textMuted2};`, Gi = `font-size:${X.small};line-height:1.6;color:${F.textMuted2};`;
function M(e, t, n) {
  const r = document.createElement(e);
  return t && (r.style.cssText = t), n != null && (r.textContent = n), r;
}
function Ie(e) {
  return String(e ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function $e(e) {
  if (e == null) return "unknown error";
  const t = e.message;
  if (typeof t == "string" && t) return t;
  const n = String(e);
  return n === "[object Object]" ? e.name || "unknown error" : n;
}
const ut = (e) => e.toLocaleString("en-US"), it = "-", at = de.base, Cn = Ui;
function An(e, t, n) {
  const r = M("div", "display:flex;gap:4px;"), i = e.map((o) => {
    const s = M("button", at, o.label);
    return s.title = o.title || o.label, s.onmouseover = () => {
      s.style.background = de.bgHover;
    }, s.onmouseout = () => {
      s.style.background = t === o.id ? de.bgActive : de.bg;
    }, s.onclick = () => {
      r.setActive(o.id), n(o.id);
    }, r.appendChild(s), { id: o.id, btn: s };
  });
  return r.setActive = (o) => {
    t = o, i.forEach((s) => {
      s.btn.style.background = s.id === t ? de.bgActive : de.bg;
    });
  }, r.setActive(t), r;
}
function ue(e, t, n) {
  const r = M("span", "display:inline-flex;align-items:center;gap:5px;white-space:nowrap;");
  n && r.appendChild(
    M("span", `width:8px;height:8px;border-radius:50%;background:${n};display:inline-block;`)
  );
  const i = M("span");
  return i.innerHTML = `${Ie(e)} <b style="color:${Oe.primary};">${Ie(t)}</b>`, r.appendChild(i), r;
}
function He(e, t) {
  const n = M("div", "", `⚠ ${t}`);
  return n.style.cssText = `position:absolute;top:${ce.xl};left:50%;transform:translateX(-50%);max-width:90%;z-index:20;padding:${ce.md} ${ce.xxl};border-radius:${lt.md};font-size:${X.body};background:${F.warnBg};color:${F.warnFg};border:1px solid ${F.warnBorder};`, e.appendChild(n), n;
}
function le(e, t = !1) {
  return M(
    "div",
    `flex:1;display:flex;align-items:center;justify-content:center;text-align:center;padding:24px;font-size:${X.heading};color:${t ? Oe.error : Oe.faint};`,
    e
  );
}
function Be(e) {
  const t = M("div", Ki);
  return t.className = "gufe-header", t.titleEl = M(
    "span",
    `font-weight:${Je.bold};font-size:${X.title};color:${Oe.title};letter-spacing:.02em;`,
    e
  ), t.statsEl = M(
    "div",
    `display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-left:auto;font-size:${X.small};color:${Oe.muted};`
  ), t.toggleEl = M("div", "display:flex;align-items:center;align-self:center;flex-shrink:0;"), t.appendChild(t.toggleEl), t.appendChild(t.titleEl), t.appendChild(t.statsEl), t;
}
function Fe(e, t, n = !1) {
  const r = M("div", "display:flex;gap:12px;align-items:baseline;padding:5px 0;min-width:0;");
  r.appendChild(
    M(
      "span",
      `flex:0 0 128px;font-size:${X.tiny};font-weight:${Je.bold};letter-spacing:.08em;text-transform:uppercase;color:${Oe.faint};`,
      e
    )
  );
  const i = M(
    "span",
    `flex:1;min-width:0;user-select:text;cursor:text;overflow-wrap:anywhere;color:${Oe.primary};` + (n ? `font-family:${X.mono};font-size:${X.small};` : `font-size:${X.body};`),
    t
  );
  return i.title = t, r.appendChild(i), r;
}
function bt(e) {
  return M(
    "span",
    `padding:1px 7px;border-radius:${lt.xl};font-size:${X.tiny};font-weight:${Je.bold};letter-spacing:.04em;white-space:nowrap;background:${F.badgeBg};color:${F.badgeFg};`,
    e
  );
}
function kn() {
  return M("div", Hi);
}
function $i() {
  const e = M("div", "flex:1;position:relative;min-height:0;min-width:0;"), t = M("div", "position:absolute;inset:0;");
  return t.dataset.gufeViewer = "", e.appendChild(t), { wrap: e, container: t };
}
const Wi = !1;
function Ji() {
  const e = M("span", `display:inline-flex;flex-direction:column;gap:${ce.xs};justify-content:center;`);
  for (let t = 0; t < 3; t++)
    e.appendChild(M("span", `display:block;width:11px;height:1.5px;border-radius:1px;background:${F.btnFg};`));
  return e;
}
function Yi(e, t, n = {}) {
  let r = n.open ?? Wi, i = !1;
  const o = M("div", "flex-shrink:0;"), s = M("button", `${de.base}display:inline-flex;align-items:center;gap:${ce.md};padding:${ce.sm} ${ce.lg};`);
  s.appendChild(Ji()), s.setAttribute("aria-label", n.label || "Toggle menu");
  const a = () => {
    r && !i && (i = !0, o.appendChild(t())), o.style.display = r ? "" : "none", s.style.background = r ? de.bgActive : de.bg, s.setAttribute("aria-expanded", String(r));
  }, d = (g) => {
    g !== r && (r = g, a(), n.onToggle?.(r));
  };
  return s.onclick = () => d(!r), s.onmouseover = () => {
    s.style.background = r ? de.bgActive : de.bgHover;
  }, s.onmouseout = () => {
    s.style.background = r ? de.bgActive : de.bg;
  }, e.toggleEl.style.marginRight = "2px", e.toggleEl.appendChild(s), a(), {
    panel: o,
    isOpen: () => r,
    setOpen: d
  };
}
const Xi = ["debug", "gufe-debug"], Zi = "debug", Qi = "GUFE_VIZ_DEBUG";
function es() {
  return !!globalThis[Qi];
}
function ts() {
  try {
    const e = globalThis.location?.search;
    if (!e) return !1;
    const t = new URLSearchParams(e);
    return Xi.some((n) => t.has(n));
  } catch {
    return !1;
  }
}
function ns(e) {
  return e?.hasAttribute?.(Zi) ? !0 : es() || ts();
}
function rs(e) {
  try {
    return JSON.stringify(e, null, 2) ?? String(e);
  } catch (t) {
    return `<could not be stringified: ${$e(t)}>`;
  }
}
function os(e, t, n) {
  if (!ns(n)) return;
  const r = rs(t), i = t?.type, o = `[gufe-viz] ${e}${typeof i == "string" ? ` ${i}` : ""} (${r.length} chars)`, s = typeof console.groupCollapsed == "function";
  s ? console.groupCollapsed(o) : console.log(o), console.log(r), console.log(t), s && console.groupEnd?.();
}
const is = 150;
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
    this.style.display = "block", this.style.width = this.style.width || "100%", this.style.height = this.style.height || "100%", this.style.background = F.appBg, this.style.color = F.textPrimary, this.style.fontFamily = "'Inter',system-ui,sans-serif", typeof ResizeObserver < "u" && !this.#n && (this.#n = new ResizeObserver(() => {
      this.#o && clearTimeout(this.#o), this.#o = setTimeout(() => this.#e?.onResize?.(), is);
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
    return this.#s(), this.#r = M(
      "div",
      `width:100%;height:100%;display:flex;flex-direction:column;overflow:hidden;background:${F.appBg};`
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
    n === this.#i && (console.warn("[gufe-viz] render failed:", r), t.replaceChildren(le(`Failed to render: ${$e(r)}`, !0)));
  }
  /** Force a resize pass - for hosts that know they resized us. */
  resize() {
    this.#e?.onResize?.();
  }
}
function Pe(e, t) {
  typeof customElements > "u" || customElements.get(e) || customElements.define(e, t);
}
function ss(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var _t = { exports: {} }, Dn = {}, Te = {}, Le = {}, qn = {}, Vn = {}, Bn = {}, Pr;
function En() {
  return Pr || (Pr = 1, (function(e) {
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
      return d(m), new r(m);
    }
    e.str = s;
    function a(y, u) {
      u instanceof r ? y.push(...u._items) : u instanceof n ? y.push(u) : y.push(_(u));
    }
    e.addCodeArg = a;
    function d(y) {
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
    function p(y, u) {
      return u.emptyStr() ? y : y.emptyStr() ? u : s`${y}${u}`;
    }
    e.strConcat = p;
    function _(y) {
      return typeof y == "number" || typeof y == "boolean" || y === null ? y : v(Array.isArray(y) ? y.join(",") : y);
    }
    function b(y) {
      return new r(v(y));
    }
    e.stringify = b;
    function v(y) {
      return JSON.stringify(y).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    e.safeStringify = v;
    function S(y) {
      return typeof y == "string" && e.IDENTIFIER.test(y) ? new r(`.${y}`) : i`[${y}]`;
    }
    e.getProperty = S;
    function w(y) {
      if (typeof y == "string" && e.IDENTIFIER.test(y))
        return new r(`${y}`);
      throw new Error(`CodeGen: invalid export name: ${y}, use explicit $id name mapping`);
    }
    e.getEsmExportName = w;
    function f(y) {
      return new r(y.toString());
    }
    e.regexpCode = f;
  })(Bn)), Bn;
}
var Ln = {}, Ar;
function Rr() {
  return Ar || (Ar = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0;
    const t = /* @__PURE__ */ En();
    class n extends Error {
      constructor(g) {
        super(`CodeGen: "code" for ${g} not defined`), this.value = g.value;
      }
    }
    var r;
    (function(d) {
      d[d.Started = 0] = "Started", d[d.Completed = 1] = "Completed";
    })(r || (e.UsedValueState = r = {})), e.varKinds = {
      const: new t.Name("const"),
      let: new t.Name("let"),
      var: new t.Name("var")
    };
    class i {
      constructor({ prefixes: g, parent: p } = {}) {
        this._names = {}, this._prefixes = g, this._parent = p;
      }
      toName(g) {
        return g instanceof t.Name ? g : this.name(g);
      }
      name(g) {
        return new t.Name(this._newName(g));
      }
      _newName(g) {
        const p = this._names[g] || this._nameGroup(g);
        return `${g}${p.index++}`;
      }
      _nameGroup(g) {
        var p, _;
        if (!((_ = (p = this._parent) === null || p === void 0 ? void 0 : p._prefixes) === null || _ === void 0) && _.has(g) || this._prefixes && !this._prefixes.has(g))
          throw new Error(`CodeGen: prefix "${g}" is not allowed in this scope`);
        return this._names[g] = { prefix: g, index: 0 };
      }
    }
    e.Scope = i;
    class o extends t.Name {
      constructor(g, p) {
        super(p), this.prefix = g;
      }
      setValue(g, { property: p, itemIndex: _ }) {
        this.value = g, this.scopePath = (0, t._)`.${new t.Name(p)}[${_}]`;
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
      value(g, p) {
        var _;
        if (p.ref === void 0)
          throw new Error("CodeGen: ref must be passed in value");
        const b = this.toName(g), { prefix: v } = b, S = (_ = p.key) !== null && _ !== void 0 ? _ : p.ref;
        let w = this._values[v];
        if (w) {
          const u = w.get(S);
          if (u)
            return u;
        } else
          w = this._values[v] = /* @__PURE__ */ new Map();
        w.set(S, b);
        const f = this._scope[v] || (this._scope[v] = []), y = f.length;
        return f[y] = p.ref, b.setValue(p, { property: v, itemIndex: y }), b;
      }
      getValue(g, p) {
        const _ = this._values[g];
        if (_)
          return _.get(p);
      }
      scopeRefs(g, p = this._values) {
        return this._reduceValues(p, (_) => {
          if (_.scopePath === void 0)
            throw new Error(`CodeGen: name "${_}" has no value`);
          return (0, t._)`${g}${_.scopePath}`;
        });
      }
      scopeCode(g = this._values, p, _) {
        return this._reduceValues(g, (b) => {
          if (b.value === void 0)
            throw new Error(`CodeGen: name "${b}" has no value`);
          return b.value.code;
        }, p, _);
      }
      _reduceValues(g, p, _ = {}, b) {
        let v = t.nil;
        for (const S in g) {
          const w = g[S];
          if (!w)
            continue;
          const f = _[S] = _[S] || /* @__PURE__ */ new Map();
          w.forEach((y) => {
            if (f.has(y))
              return;
            f.set(y, r.Started);
            let u = p(y);
            if (u) {
              const m = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
              v = (0, t._)`${v}${m} ${y} = ${u};${this.opts._n}`;
            } else if (u = b?.(y))
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
  })(Ln)), Ln;
}
var Nr;
function ee() {
  return Nr || (Nr = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
    const t = /* @__PURE__ */ En(), n = /* @__PURE__ */ Rr();
    var r = /* @__PURE__ */ En();
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
    var i = /* @__PURE__ */ Rr();
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
      optimizeNames($, E) {
        return this;
      }
    }
    class s extends o {
      constructor($, E, D) {
        super(), this.varKind = $, this.name = E, this.rhs = D;
      }
      render({ es5: $, _n: E }) {
        const D = $ ? n.varKinds.var : this.varKind, H = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
        return `${D} ${this.name}${H};` + E;
      }
      optimizeNames($, E) {
        if ($[this.name.str])
          return this.rhs && (this.rhs = W(this.rhs, $, E)), this;
      }
      get names() {
        return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
      }
    }
    class a extends o {
      constructor($, E, D) {
        super(), this.lhs = $, this.rhs = E, this.sideEffects = D;
      }
      render({ _n: $ }) {
        return `${this.lhs} = ${this.rhs};` + $;
      }
      optimizeNames($, E) {
        if (!(this.lhs instanceof t.Name && !$[this.lhs.str] && !this.sideEffects))
          return this.rhs = W(this.rhs, $, E), this;
      }
      get names() {
        const $ = this.lhs instanceof t.Name ? {} : { ...this.lhs.names };
        return j($, this.rhs);
      }
    }
    class d extends a {
      constructor($, E, D, H) {
        super($, D, H), this.op = E;
      }
      render({ _n: $ }) {
        return `${this.lhs} ${this.op}= ${this.rhs};` + $;
      }
    }
    class g extends o {
      constructor($) {
        super(), this.label = $, this.names = {};
      }
      render({ _n: $ }) {
        return `${this.label}:` + $;
      }
    }
    class p extends o {
      constructor($) {
        super(), this.label = $, this.names = {};
      }
      render({ _n: $ }) {
        return `break${this.label ? ` ${this.label}` : ""};` + $;
      }
    }
    class _ extends o {
      constructor($) {
        super(), this.error = $;
      }
      render({ _n: $ }) {
        return `throw ${this.error};` + $;
      }
      get names() {
        return this.error.names;
      }
    }
    class b extends o {
      constructor($) {
        super(), this.code = $;
      }
      render({ _n: $ }) {
        return `${this.code};` + $;
      }
      optimizeNodes() {
        return `${this.code}` ? this : void 0;
      }
      optimizeNames($, E) {
        return this.code = W(this.code, $, E), this;
      }
      get names() {
        return this.code instanceof t._CodeOrName ? this.code.names : {};
      }
    }
    class v extends o {
      constructor($ = []) {
        super(), this.nodes = $;
      }
      render($) {
        return this.nodes.reduce((E, D) => E + D.render($), "");
      }
      optimizeNodes() {
        const { nodes: $ } = this;
        let E = $.length;
        for (; E--; ) {
          const D = $[E].optimizeNodes();
          Array.isArray(D) ? $.splice(E, 1, ...D) : D ? $[E] = D : $.splice(E, 1);
        }
        return $.length > 0 ? this : void 0;
      }
      optimizeNames($, E) {
        const { nodes: D } = this;
        let H = D.length;
        for (; H--; ) {
          const J = D[H];
          J.optimizeNames($, E) || (Z($, J.names), D.splice(H, 1));
        }
        return D.length > 0 ? this : void 0;
      }
      get names() {
        return this.nodes.reduce(($, E) => A($, E.names), {});
      }
    }
    class S extends v {
      render($) {
        return "{" + $._n + super.render($) + "}" + $._n;
      }
    }
    class w extends v {
    }
    class f extends S {
    }
    f.kind = "else";
    class y extends S {
      constructor($, E) {
        super(E), this.condition = $;
      }
      render($) {
        let E = `if(${this.condition})` + super.render($);
        return this.else && (E += "else " + this.else.render($)), E;
      }
      optimizeNodes() {
        super.optimizeNodes();
        const $ = this.condition;
        if ($ === !0)
          return this.nodes;
        let E = this.else;
        if (E) {
          const D = E.optimizeNodes();
          E = this.else = Array.isArray(D) ? new f(D) : D;
        }
        if (E)
          return $ === !1 ? E instanceof y ? E : E.nodes : this.nodes.length ? this : new y(L($), E instanceof y ? [E] : E.nodes);
        if (!($ === !1 || !this.nodes.length))
          return this;
      }
      optimizeNames($, E) {
        var D;
        if (this.else = (D = this.else) === null || D === void 0 ? void 0 : D.optimizeNames($, E), !!(super.optimizeNames($, E) || this.else))
          return this.condition = W(this.condition, $, E), this;
      }
      get names() {
        const $ = super.names;
        return j($, this.condition), this.else && A($, this.else.names), $;
      }
    }
    y.kind = "if";
    class u extends S {
    }
    u.kind = "for";
    class m extends u {
      constructor($) {
        super(), this.iteration = $;
      }
      render($) {
        return `for(${this.iteration})` + super.render($);
      }
      optimizeNames($, E) {
        if (super.optimizeNames($, E))
          return this.iteration = W(this.iteration, $, E), this;
      }
      get names() {
        return A(super.names, this.iteration.names);
      }
    }
    class C extends u {
      constructor($, E, D, H) {
        super(), this.varKind = $, this.name = E, this.from = D, this.to = H;
      }
      render($) {
        const E = $.es5 ? n.varKinds.var : this.varKind, { name: D, from: H, to: J } = this;
        return `for(${E} ${D}=${H}; ${D}<${J}; ${D}++)` + super.render($);
      }
      get names() {
        const $ = j(super.names, this.from);
        return j($, this.to);
      }
    }
    class c extends u {
      constructor($, E, D, H) {
        super(), this.loop = $, this.varKind = E, this.name = D, this.iterable = H;
      }
      render($) {
        return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render($);
      }
      optimizeNames($, E) {
        if (super.optimizeNames($, E))
          return this.iterable = W(this.iterable, $, E), this;
      }
      get names() {
        return A(super.names, this.iterable.names);
      }
    }
    class l extends S {
      constructor($, E, D) {
        super(), this.name = $, this.args = E, this.async = D;
      }
      render($) {
        return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render($);
      }
    }
    l.kind = "func";
    class h extends v {
      render($) {
        return "return " + super.render($);
      }
    }
    h.kind = "return";
    class k extends S {
      render($) {
        let E = "try" + super.render($);
        return this.catch && (E += this.catch.render($)), this.finally && (E += this.finally.render($)), E;
      }
      optimizeNodes() {
        var $, E;
        return super.optimizeNodes(), ($ = this.catch) === null || $ === void 0 || $.optimizeNodes(), (E = this.finally) === null || E === void 0 || E.optimizeNodes(), this;
      }
      optimizeNames($, E) {
        var D, H;
        return super.optimizeNames($, E), (D = this.catch) === null || D === void 0 || D.optimizeNames($, E), (H = this.finally) === null || H === void 0 || H.optimizeNames($, E), this;
      }
      get names() {
        const $ = super.names;
        return this.catch && A($, this.catch.names), this.finally && A($, this.finally.names), $;
      }
    }
    class x extends S {
      constructor($) {
        super(), this.error = $;
      }
      render($) {
        return `catch(${this.error})` + super.render($);
      }
    }
    x.kind = "catch";
    class O extends S {
      render($) {
        return "finally" + super.render($);
      }
    }
    O.kind = "finally";
    class z {
      constructor($, E = {}) {
        this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ...E, _n: E.lines ? `
` : "" }, this._extScope = $, this._scope = new n.Scope({ parent: $ }), this._nodes = [new w()];
      }
      toString() {
        return this._root.render(this.opts);
      }
      // returns unique name in the internal scope
      name($) {
        return this._scope.name($);
      }
      // reserves unique name in the external scope
      scopeName($) {
        return this._extScope.name($);
      }
      // reserves unique name in the external scope and assigns value to it
      scopeValue($, E) {
        const D = this._extScope.value($, E);
        return (this._values[D.prefix] || (this._values[D.prefix] = /* @__PURE__ */ new Set())).add(D), D;
      }
      getScopeValue($, E) {
        return this._extScope.getValue($, E);
      }
      // return code that assigns values in the external scope to the names that are used internally
      // (same names that were returned by gen.scopeName or gen.scopeValue)
      scopeRefs($) {
        return this._extScope.scopeRefs($, this._values);
      }
      scopeCode() {
        return this._extScope.scopeCode(this._values);
      }
      _def($, E, D, H) {
        const J = this._scope.toName(E);
        return D !== void 0 && H && (this._constants[J.str] = D), this._leafNode(new s($, J, D)), J;
      }
      // `const` declaration (`var` in es5 mode)
      const($, E, D) {
        return this._def(n.varKinds.const, $, E, D);
      }
      // `let` declaration with optional assignment (`var` in es5 mode)
      let($, E, D) {
        return this._def(n.varKinds.let, $, E, D);
      }
      // `var` declaration with optional assignment
      var($, E, D) {
        return this._def(n.varKinds.var, $, E, D);
      }
      // assignment code
      assign($, E, D) {
        return this._leafNode(new a($, E, D));
      }
      // `+=` code
      add($, E) {
        return this._leafNode(new d($, e.operators.ADD, E));
      }
      // appends passed SafeExpr to code or executes Block
      code($) {
        return typeof $ == "function" ? $() : $ !== t.nil && this._leafNode(new b($)), this;
      }
      // returns code for object literal for the passed argument list of key-value pairs
      object(...$) {
        const E = ["{"];
        for (const [D, H] of $)
          E.length > 1 && E.push(","), E.push(D), (D !== H || this.opts.es5) && (E.push(":"), (0, t.addCodeArg)(E, H));
        return E.push("}"), new t._Code(E);
      }
      // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
      if($, E, D) {
        if (this._blockNode(new y($)), E && D)
          this.code(E).else().code(D).endIf();
        else if (E)
          this.code(E).endIf();
        else if (D)
          throw new Error('CodeGen: "else" body without "then" body');
        return this;
      }
      // `else if` clause - invalid without `if` or after `else` clauses
      elseIf($) {
        return this._elseNode(new y($));
      }
      // `else` clause - only valid after `if` or `else if` clauses
      else() {
        return this._elseNode(new f());
      }
      // end `if` statement (needed if gen.if was used only with condition)
      endIf() {
        return this._endBlockNode(y, f);
      }
      _for($, E) {
        return this._blockNode($), E && this.code(E).endFor(), this;
      }
      // a generic `for` clause (or statement if `forBody` is passed)
      for($, E) {
        return this._for(new m($), E);
      }
      // `for` statement for a range of values
      forRange($, E, D, H, J = this.opts.es5 ? n.varKinds.var : n.varKinds.let) {
        const ie = this._scope.toName($);
        return this._for(new C(J, ie, E, D), () => H(ie));
      }
      // `for-of` statement (in es5 mode replace with a normal for loop)
      forOf($, E, D, H = n.varKinds.const) {
        const J = this._scope.toName($);
        if (this.opts.es5) {
          const ie = E instanceof t.Name ? E : this.var("_arr", E);
          return this.forRange("_i", 0, (0, t._)`${ie}.length`, (oe) => {
            this.var(J, (0, t._)`${ie}[${oe}]`), D(J);
          });
        }
        return this._for(new c("of", H, J, E), () => D(J));
      }
      // `for-in` statement.
      // With option `ownProperties` replaced with a `for-of` loop for object keys
      forIn($, E, D, H = this.opts.es5 ? n.varKinds.var : n.varKinds.const) {
        if (this.opts.ownProperties)
          return this.forOf($, (0, t._)`Object.keys(${E})`, D);
        const J = this._scope.toName($);
        return this._for(new c("in", H, J, E), () => D(J));
      }
      // end `for` loop
      endFor() {
        return this._endBlockNode(u);
      }
      // `label` statement
      label($) {
        return this._leafNode(new g($));
      }
      // `break` statement
      break($) {
        return this._leafNode(new p($));
      }
      // `return` statement
      return($) {
        const E = new h();
        if (this._blockNode(E), this.code($), E.nodes.length !== 1)
          throw new Error('CodeGen: "return" should have one node');
        return this._endBlockNode(h);
      }
      // `try` statement
      try($, E, D) {
        if (!E && !D)
          throw new Error('CodeGen: "try" without "catch" and "finally"');
        const H = new k();
        if (this._blockNode(H), this.code($), E) {
          const J = this.name("e");
          this._currNode = H.catch = new x(J), E(J);
        }
        return D && (this._currNode = H.finally = new O(), this.code(D)), this._endBlockNode(x, O);
      }
      // `throw` statement
      throw($) {
        return this._leafNode(new _($));
      }
      // start self-balancing block
      block($, E) {
        return this._blockStarts.push(this._nodes.length), $ && this.code($).endBlock(E), this;
      }
      // end the current self-balancing block
      endBlock($) {
        const E = this._blockStarts.pop();
        if (E === void 0)
          throw new Error("CodeGen: not in self-balancing block");
        const D = this._nodes.length - E;
        if (D < 0 || $ !== void 0 && D !== $)
          throw new Error(`CodeGen: wrong number of nodes: ${D} vs ${$} expected`);
        return this._nodes.length = E, this;
      }
      // `function` heading (or definition if funcBody is passed)
      func($, E = t.nil, D, H) {
        return this._blockNode(new l($, E, D)), H && this.code(H).endFunc(), this;
      }
      // end function definition
      endFunc() {
        return this._endBlockNode(l);
      }
      optimize($ = 1) {
        for (; $-- > 0; )
          this._root.optimizeNodes(), this._root.optimizeNames(this._root.names, this._constants);
      }
      _leafNode($) {
        return this._currNode.nodes.push($), this;
      }
      _blockNode($) {
        this._currNode.nodes.push($), this._nodes.push($);
      }
      _endBlockNode($, E) {
        const D = this._currNode;
        if (D instanceof $ || E && D instanceof E)
          return this._nodes.pop(), this;
        throw new Error(`CodeGen: not in block "${E ? `${$.kind}/${E.kind}` : $.kind}"`);
      }
      _elseNode($) {
        const E = this._currNode;
        if (!(E instanceof y))
          throw new Error('CodeGen: "else" without "if"');
        return this._currNode = E.else = $, this;
      }
      get _root() {
        return this._nodes[0];
      }
      get _currNode() {
        const $ = this._nodes;
        return $[$.length - 1];
      }
      set _currNode($) {
        const E = this._nodes;
        E[E.length - 1] = $;
      }
    }
    e.CodeGen = z;
    function A(N, $) {
      for (const E in $)
        N[E] = (N[E] || 0) + ($[E] || 0);
      return N;
    }
    function j(N, $) {
      return $ instanceof t._CodeOrName ? A(N, $.names) : N;
    }
    function W(N, $, E) {
      if (N instanceof t.Name)
        return D(N);
      if (!H(N))
        return N;
      return new t._Code(N._items.reduce((J, ie) => (ie instanceof t.Name && (ie = D(ie)), ie instanceof t._Code ? J.push(...ie._items) : J.push(ie), J), []));
      function D(J) {
        const ie = E[J.str];
        return ie === void 0 || $[J.str] !== 1 ? J : (delete $[J.str], ie);
      }
      function H(J) {
        return J instanceof t._Code && J._items.some((ie) => ie instanceof t.Name && $[ie.str] === 1 && E[ie.str] !== void 0);
      }
    }
    function Z(N, $) {
      for (const E in $)
        N[E] = (N[E] || 0) - ($[E] || 0);
    }
    function L(N) {
      return typeof N == "boolean" || typeof N == "number" || N === null ? !N : (0, t._)`!${I(N)}`;
    }
    e.not = L;
    const G = P(e.operators.AND);
    function U(...N) {
      return N.reduce(G);
    }
    e.and = U;
    const Q = P(e.operators.OR);
    function V(...N) {
      return N.reduce(Q);
    }
    e.or = V;
    function P(N) {
      return ($, E) => $ === t.nil ? E : E === t.nil ? $ : (0, t._)`${I($)} ${N} ${I(E)}`;
    }
    function I(N) {
      return N instanceof t.Name ? N : (0, t._)`(${N})`;
    }
  })(Vn)), Vn;
}
var te = {}, Fr;
function re() {
  if (Fr) return te;
  Fr = 1, Object.defineProperty(te, "__esModule", { value: !0 }), te.checkStrictMode = te.getErrorPath = te.Type = te.useFunc = te.setEvaluated = te.evaluatedPropsToName = te.mergeEvaluated = te.eachItem = te.unescapeJsonPointer = te.escapeJsonPointer = te.escapeFragment = te.unescapeFragment = te.schemaRefOrVal = te.schemaHasRulesButRef = te.schemaHasRules = te.checkUnknownRules = te.alwaysValidSchema = te.toHash = void 0;
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ En();
  function n(c) {
    const l = {};
    for (const h of c)
      l[h] = !0;
    return l;
  }
  te.toHash = n;
  function r(c, l) {
    return typeof l == "boolean" ? l : Object.keys(l).length === 0 ? !0 : (i(c, l), !o(l, c.self.RULES.all));
  }
  te.alwaysValidSchema = r;
  function i(c, l = c.schema) {
    const { opts: h, self: k } = c;
    if (!h.strictSchema || typeof l == "boolean")
      return;
    const x = k.RULES.keywords;
    for (const O in l)
      x[O] || C(c, `unknown keyword: "${O}"`);
  }
  te.checkUnknownRules = i;
  function o(c, l) {
    if (typeof c == "boolean")
      return !c;
    for (const h in c)
      if (l[h])
        return !0;
    return !1;
  }
  te.schemaHasRules = o;
  function s(c, l) {
    if (typeof c == "boolean")
      return !c;
    for (const h in c)
      if (h !== "$ref" && l.all[h])
        return !0;
    return !1;
  }
  te.schemaHasRulesButRef = s;
  function a({ topSchemaRef: c, schemaPath: l }, h, k, x) {
    if (!x) {
      if (typeof h == "number" || typeof h == "boolean")
        return h;
      if (typeof h == "string")
        return (0, e._)`${h}`;
    }
    return (0, e._)`${c}${l}${(0, e.getProperty)(k)}`;
  }
  te.schemaRefOrVal = a;
  function d(c) {
    return _(decodeURIComponent(c));
  }
  te.unescapeFragment = d;
  function g(c) {
    return encodeURIComponent(p(c));
  }
  te.escapeFragment = g;
  function p(c) {
    return typeof c == "number" ? `${c}` : c.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  te.escapeJsonPointer = p;
  function _(c) {
    return c.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  te.unescapeJsonPointer = _;
  function b(c, l) {
    if (Array.isArray(c))
      for (const h of c)
        l(h);
    else
      l(c);
  }
  te.eachItem = b;
  function v({ mergeNames: c, mergeToName: l, mergeValues: h, resultToName: k }) {
    return (x, O, z, A) => {
      const j = z === void 0 ? O : z instanceof e.Name ? (O instanceof e.Name ? c(x, O, z) : l(x, O, z), z) : O instanceof e.Name ? (l(x, z, O), O) : h(O, z);
      return A === e.Name && !(j instanceof e.Name) ? k(x, j) : j;
    };
  }
  te.mergeEvaluated = {
    props: v({
      mergeNames: (c, l, h) => c.if((0, e._)`${h} !== true && ${l} !== undefined`, () => {
        c.if((0, e._)`${l} === true`, () => c.assign(h, !0), () => c.assign(h, (0, e._)`${h} || {}`).code((0, e._)`Object.assign(${h}, ${l})`));
      }),
      mergeToName: (c, l, h) => c.if((0, e._)`${h} !== true`, () => {
        l === !0 ? c.assign(h, !0) : (c.assign(h, (0, e._)`${h} || {}`), w(c, h, l));
      }),
      mergeValues: (c, l) => c === !0 ? !0 : { ...c, ...l },
      resultToName: S
    }),
    items: v({
      mergeNames: (c, l, h) => c.if((0, e._)`${h} !== true && ${l} !== undefined`, () => c.assign(h, (0, e._)`${l} === true ? true : ${h} > ${l} ? ${h} : ${l}`)),
      mergeToName: (c, l, h) => c.if((0, e._)`${h} !== true`, () => c.assign(h, l === !0 ? !0 : (0, e._)`${h} > ${l} ? ${h} : ${l}`)),
      mergeValues: (c, l) => c === !0 ? !0 : Math.max(c, l),
      resultToName: (c, l) => c.var("items", l)
    })
  };
  function S(c, l) {
    if (l === !0)
      return c.var("props", !0);
    const h = c.var("props", (0, e._)`{}`);
    return l !== void 0 && w(c, h, l), h;
  }
  te.evaluatedPropsToName = S;
  function w(c, l, h) {
    Object.keys(h).forEach((k) => c.assign((0, e._)`${l}${(0, e.getProperty)(k)}`, !0));
  }
  te.setEvaluated = w;
  const f = {};
  function y(c, l) {
    return c.scopeValue("func", {
      ref: l,
      code: f[l.code] || (f[l.code] = new t._Code(l.code))
    });
  }
  te.useFunc = y;
  var u;
  (function(c) {
    c[c.Num = 0] = "Num", c[c.Str = 1] = "Str";
  })(u || (te.Type = u = {}));
  function m(c, l, h) {
    if (c instanceof e.Name) {
      const k = l === u.Num;
      return h ? k ? (0, e._)`"[" + ${c} + "]"` : (0, e._)`"['" + ${c} + "']"` : k ? (0, e._)`"/" + ${c}` : (0, e._)`"/" + ${c}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return h ? (0, e.getProperty)(c).toString() : "/" + p(c);
  }
  te.getErrorPath = m;
  function C(c, l, h = c.opts.strictSchema) {
    if (h) {
      if (l = `strict mode: ${l}`, h === !0)
        throw new Error(l);
      c.self.logger.warn(l);
    }
  }
  return te.checkStrictMode = C, te;
}
var St = {}, Or;
function Ae() {
  if (Or) return St;
  Or = 1, Object.defineProperty(St, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = {
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
  return St.default = t, St;
}
var Mr;
function Rn() {
  return Mr || (Mr = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
    const t = /* @__PURE__ */ ee(), n = /* @__PURE__ */ re(), r = /* @__PURE__ */ Ae();
    e.keywordError = {
      message: ({ keyword: f }) => (0, t.str)`must pass "${f}" keyword validation`
    }, e.keyword$DataError = {
      message: ({ keyword: f, schemaType: y }) => y ? (0, t.str)`"${f}" keyword must be ${y} ($data)` : (0, t.str)`"${f}" keyword is invalid ($data)`
    };
    function i(f, y = e.keywordError, u, m) {
      const { it: C } = f, { gen: c, compositeRule: l, allErrors: h } = C, k = _(f, y, u);
      m ?? (l || h) ? d(c, k) : g(C, (0, t._)`[${k}]`);
    }
    e.reportError = i;
    function o(f, y = e.keywordError, u) {
      const { it: m } = f, { gen: C, compositeRule: c, allErrors: l } = m, h = _(f, y, u);
      d(C, h), c || l || g(m, r.default.vErrors);
    }
    e.reportExtraError = o;
    function s(f, y) {
      f.assign(r.default.errors, y), f.if((0, t._)`${r.default.vErrors} !== null`, () => f.if(y, () => f.assign((0, t._)`${r.default.vErrors}.length`, y), () => f.assign(r.default.vErrors, null)));
    }
    e.resetErrorsCount = s;
    function a({ gen: f, keyword: y, schemaValue: u, data: m, errsCount: C, it: c }) {
      if (C === void 0)
        throw new Error("ajv implementation error");
      const l = f.name("err");
      f.forRange("i", C, r.default.errors, (h) => {
        f.const(l, (0, t._)`${r.default.vErrors}[${h}]`), f.if((0, t._)`${l}.instancePath === undefined`, () => f.assign((0, t._)`${l}.instancePath`, (0, t.strConcat)(r.default.instancePath, c.errorPath))), f.assign((0, t._)`${l}.schemaPath`, (0, t.str)`${c.errSchemaPath}/${y}`), c.opts.verbose && (f.assign((0, t._)`${l}.schema`, u), f.assign((0, t._)`${l}.data`, m));
      });
    }
    e.extendErrors = a;
    function d(f, y) {
      const u = f.const("err", y);
      f.if((0, t._)`${r.default.vErrors} === null`, () => f.assign(r.default.vErrors, (0, t._)`[${u}]`), (0, t._)`${r.default.vErrors}.push(${u})`), f.code((0, t._)`${r.default.errors}++`);
    }
    function g(f, y) {
      const { gen: u, validateName: m, schemaEnv: C } = f;
      C.$async ? u.throw((0, t._)`new ${f.ValidationError}(${y})`) : (u.assign((0, t._)`${m}.errors`, y), u.return(!1));
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
    function _(f, y, u) {
      const { createErrors: m } = f.it;
      return m === !1 ? (0, t._)`{}` : b(f, y, u);
    }
    function b(f, y, u = {}) {
      const { gen: m, it: C } = f, c = [
        v(C, u),
        S(f, u)
      ];
      return w(f, y, c), m.object(...c);
    }
    function v({ errorPath: f }, { instancePath: y }) {
      const u = y ? (0, t.str)`${f}${(0, n.getErrorPath)(y, n.Type.Str)}` : f;
      return [r.default.instancePath, (0, t.strConcat)(r.default.instancePath, u)];
    }
    function S({ keyword: f, it: { errSchemaPath: y } }, { schemaPath: u, parentSchema: m }) {
      let C = m ? y : (0, t.str)`${y}/${f}`;
      return u && (C = (0, t.str)`${C}${(0, n.getErrorPath)(u, n.Type.Str)}`), [p.schemaPath, C];
    }
    function w(f, { params: y, message: u }, m) {
      const { keyword: C, data: c, schemaValue: l, it: h } = f, { opts: k, propertyName: x, topSchemaRef: O, schemaPath: z } = h;
      m.push([p.keyword, C], [p.params, typeof y == "function" ? y(f) : y || (0, t._)`{}`]), k.messages && m.push([p.message, typeof u == "function" ? u(f) : u]), k.verbose && m.push([p.schema, l], [p.parentSchema, (0, t._)`${O}${z}`], [r.default.data, c]), x && m.push([p.propertyName, x]);
    }
  })(qn)), qn;
}
var Tr;
function as() {
  if (Tr) return Le;
  Tr = 1, Object.defineProperty(Le, "__esModule", { value: !0 }), Le.boolOrEmptySchema = Le.topBoolOrEmptySchema = void 0;
  const e = /* @__PURE__ */ Rn(), t = /* @__PURE__ */ ee(), n = /* @__PURE__ */ Ae(), r = {
    message: "boolean schema is false"
  };
  function i(a) {
    const { gen: d, schema: g, validateName: p } = a;
    g === !1 ? s(a, !1) : typeof g == "object" && g.$async === !0 ? d.return(n.default.data) : (d.assign((0, t._)`${p}.errors`, null), d.return(!0));
  }
  Le.topBoolOrEmptySchema = i;
  function o(a, d) {
    const { gen: g, schema: p } = a;
    p === !1 ? (g.var(d, !1), s(a)) : g.var(d, !0);
  }
  Le.boolOrEmptySchema = o;
  function s(a, d) {
    const { gen: g, data: p } = a, _ = {
      gen: g,
      keyword: "false schema",
      data: p,
      schema: !1,
      schemaCode: !1,
      schemaValue: !1,
      params: {},
      it: a
    };
    (0, e.reportError)(_, r, void 0, d);
  }
  return Le;
}
var he = {}, Ue = {}, jr;
function bi() {
  if (jr) return Ue;
  jr = 1, Object.defineProperty(Ue, "__esModule", { value: !0 }), Ue.getRules = Ue.isJSONType = void 0;
  const e = ["string", "number", "integer", "boolean", "null", "object", "array"], t = new Set(e);
  function n(i) {
    return typeof i == "string" && t.has(i);
  }
  Ue.isJSONType = n;
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
  return Ue.getRules = r, Ue;
}
var je = {}, zr;
function wi() {
  if (zr) return je;
  zr = 1, Object.defineProperty(je, "__esModule", { value: !0 }), je.shouldUseRule = je.shouldUseGroup = je.schemaHasRulesForType = void 0;
  function e({ schema: r, self: i }, o) {
    const s = i.RULES.types[o];
    return s && s !== !0 && t(r, s);
  }
  je.schemaHasRulesForType = e;
  function t(r, i) {
    return i.rules.some((o) => n(r, o));
  }
  je.shouldUseGroup = t;
  function n(r, i) {
    var o;
    return r[i.keyword] !== void 0 || ((o = i.definition.implements) === null || o === void 0 ? void 0 : o.some((s) => r[s] !== void 0));
  }
  return je.shouldUseRule = n, je;
}
var Ir;
function xn() {
  if (Ir) return he;
  Ir = 1, Object.defineProperty(he, "__esModule", { value: !0 }), he.reportTypeError = he.checkDataTypes = he.checkDataType = he.coerceAndCheckDataType = he.getJSONTypes = he.getSchemaTypes = he.DataType = void 0;
  const e = /* @__PURE__ */ bi(), t = /* @__PURE__ */ wi(), n = /* @__PURE__ */ Rn(), r = /* @__PURE__ */ ee(), i = /* @__PURE__ */ re();
  var o;
  (function(u) {
    u[u.Correct = 0] = "Correct", u[u.Wrong = 1] = "Wrong";
  })(o || (he.DataType = o = {}));
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
  he.getSchemaTypes = s;
  function a(u) {
    const m = Array.isArray(u) ? u : u ? [u] : [];
    if (m.every(e.isJSONType))
      return m;
    throw new Error("type must be JSONType or JSONType[]: " + m.join(","));
  }
  he.getJSONTypes = a;
  function d(u, m) {
    const { gen: C, data: c, opts: l } = u, h = p(m, l.coerceTypes), k = m.length > 0 && !(h.length === 0 && m.length === 1 && (0, t.schemaHasRulesForType)(u, m[0]));
    if (k) {
      const x = S(m, c, l.strictNumbers, o.Wrong);
      C.if(x, () => {
        h.length ? _(u, m, h) : f(u);
      });
    }
    return k;
  }
  he.coerceAndCheckDataType = d;
  const g = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
  function p(u, m) {
    return m ? u.filter((C) => g.has(C) || m === "array" && C === "array") : [];
  }
  function _(u, m, C) {
    const { gen: c, data: l, opts: h } = u, k = c.let("dataType", (0, r._)`typeof ${l}`), x = c.let("coerced", (0, r._)`undefined`);
    h.coerceTypes === "array" && c.if((0, r._)`${k} == 'object' && Array.isArray(${l}) && ${l}.length == 1`, () => c.assign(l, (0, r._)`${l}[0]`).assign(k, (0, r._)`typeof ${l}`).if(S(m, l, h.strictNumbers), () => c.assign(x, l))), c.if((0, r._)`${x} !== undefined`);
    for (const z of C)
      (g.has(z) || z === "array" && h.coerceTypes === "array") && O(z);
    c.else(), f(u), c.endIf(), c.if((0, r._)`${x} !== undefined`, () => {
      c.assign(l, x), b(u, x);
    });
    function O(z) {
      switch (z) {
        case "string":
          c.elseIf((0, r._)`${k} == "number" || ${k} == "boolean"`).assign(x, (0, r._)`"" + ${l}`).elseIf((0, r._)`${l} === null`).assign(x, (0, r._)`""`);
          return;
        case "number":
          c.elseIf((0, r._)`${k} == "boolean" || ${l} === null
              || (${k} == "string" && ${l} && ${l} == +${l})`).assign(x, (0, r._)`+${l}`);
          return;
        case "integer":
          c.elseIf((0, r._)`${k} === "boolean" || ${l} === null
              || (${k} === "string" && ${l} && ${l} == +${l} && !(${l} % 1))`).assign(x, (0, r._)`+${l}`);
          return;
        case "boolean":
          c.elseIf((0, r._)`${l} === "false" || ${l} === 0 || ${l} === null`).assign(x, !1).elseIf((0, r._)`${l} === "true" || ${l} === 1`).assign(x, !0);
          return;
        case "null":
          c.elseIf((0, r._)`${l} === "" || ${l} === 0 || ${l} === false`), c.assign(x, null);
          return;
        case "array":
          c.elseIf((0, r._)`${k} === "string" || ${k} === "number"
              || ${k} === "boolean" || ${l} === null`).assign(x, (0, r._)`[${l}]`);
      }
    }
  }
  function b({ gen: u, parentData: m, parentDataProperty: C }, c) {
    u.if((0, r._)`${m} !== undefined`, () => u.assign((0, r._)`${m}[${C}]`, c));
  }
  function v(u, m, C, c = o.Correct) {
    const l = c === o.Correct ? r.operators.EQ : r.operators.NEQ;
    let h;
    switch (u) {
      case "null":
        return (0, r._)`${m} ${l} null`;
      case "array":
        h = (0, r._)`Array.isArray(${m})`;
        break;
      case "object":
        h = (0, r._)`${m} && typeof ${m} == "object" && !Array.isArray(${m})`;
        break;
      case "integer":
        h = k((0, r._)`!(${m} % 1) && !isNaN(${m})`);
        break;
      case "number":
        h = k();
        break;
      default:
        return (0, r._)`typeof ${m} ${l} ${u}`;
    }
    return c === o.Correct ? h : (0, r.not)(h);
    function k(x = r.nil) {
      return (0, r.and)((0, r._)`typeof ${m} == "number"`, x, C ? (0, r._)`isFinite(${m})` : r.nil);
    }
  }
  he.checkDataType = v;
  function S(u, m, C, c) {
    if (u.length === 1)
      return v(u[0], m, C, c);
    let l;
    const h = (0, i.toHash)(u);
    if (h.array && h.object) {
      const k = (0, r._)`typeof ${m} != "object"`;
      l = h.null ? k : (0, r._)`!${m} || ${k}`, delete h.null, delete h.array, delete h.object;
    } else
      l = r.nil;
    h.number && delete h.integer;
    for (const k in h)
      l = (0, r.and)(l, v(k, m, C, c));
    return l;
  }
  he.checkDataTypes = S;
  const w = {
    message: ({ schema: u }) => `must be ${u}`,
    params: ({ schema: u, schemaValue: m }) => typeof u == "string" ? (0, r._)`{type: ${u}}` : (0, r._)`{type: ${m}}`
  };
  function f(u) {
    const m = y(u);
    (0, n.reportError)(m, w);
  }
  he.reportTypeError = f;
  function y(u) {
    const { gen: m, data: C, schema: c } = u, l = (0, i.schemaRefOrVal)(u, c, "type");
    return {
      gen: m,
      keyword: "type",
      data: C,
      schema: c.type,
      schemaCode: l,
      schemaValue: l,
      parentSchema: c,
      params: {},
      it: u
    };
  }
  return he;
}
var ft = {}, Dr;
function cs() {
  if (Dr) return ft;
  Dr = 1, Object.defineProperty(ft, "__esModule", { value: !0 }), ft.assignDefaults = void 0;
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ re();
  function n(i, o) {
    const { properties: s, items: a } = i.schema;
    if (o === "object" && s)
      for (const d in s)
        r(i, d, s[d].default);
    else o === "array" && Array.isArray(a) && a.forEach((d, g) => r(i, g, d.default));
  }
  ft.assignDefaults = n;
  function r(i, o, s) {
    const { gen: a, compositeRule: d, data: g, opts: p } = i;
    if (s === void 0)
      return;
    const _ = (0, e._)`${g}${(0, e.getProperty)(o)}`;
    if (d) {
      (0, t.checkStrictMode)(i, `default is ignored for: ${_}`);
      return;
    }
    let b = (0, e._)`${_} === undefined`;
    p.useDefaults === "empty" && (b = (0, e._)`${b} || ${_} === null || ${_} === ""`), a.if(b, (0, e._)`${_} = ${(0, e.stringify)(s)}`);
  }
  return ft;
}
var Ce = {}, ae = {}, qr;
function Re() {
  if (qr) return ae;
  qr = 1, Object.defineProperty(ae, "__esModule", { value: !0 }), ae.validateUnion = ae.validateArray = ae.usePattern = ae.callValidateCode = ae.schemaProperties = ae.allSchemaProperties = ae.noPropertyInData = ae.propertyInData = ae.isOwnProperty = ae.hasPropFunc = ae.reportMissingProp = ae.checkMissingProp = ae.checkReportMissingProp = void 0;
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ re(), n = /* @__PURE__ */ Ae(), r = /* @__PURE__ */ re();
  function i(u, m) {
    const { gen: C, data: c, it: l } = u;
    C.if(p(C, c, m, l.opts.ownProperties), () => {
      u.setParams({ missingProperty: (0, e._)`${m}` }, !0), u.error();
    });
  }
  ae.checkReportMissingProp = i;
  function o({ gen: u, data: m, it: { opts: C } }, c, l) {
    return (0, e.or)(...c.map((h) => (0, e.and)(p(u, m, h, C.ownProperties), (0, e._)`${l} = ${h}`)));
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
  function d(u, m, C) {
    return (0, e._)`${a(u)}.call(${m}, ${C})`;
  }
  ae.isOwnProperty = d;
  function g(u, m, C, c) {
    const l = (0, e._)`${m}${(0, e.getProperty)(C)} !== undefined`;
    return c ? (0, e._)`${l} && ${d(u, m, C)}` : l;
  }
  ae.propertyInData = g;
  function p(u, m, C, c) {
    const l = (0, e._)`${m}${(0, e.getProperty)(C)} === undefined`;
    return c ? (0, e.or)(l, (0, e.not)(d(u, m, C))) : l;
  }
  ae.noPropertyInData = p;
  function _(u) {
    return u ? Object.keys(u).filter((m) => m !== "__proto__") : [];
  }
  ae.allSchemaProperties = _;
  function b(u, m) {
    return _(m).filter((C) => !(0, t.alwaysValidSchema)(u, m[C]));
  }
  ae.schemaProperties = b;
  function v({ schemaCode: u, data: m, it: { gen: C, topSchemaRef: c, schemaPath: l, errorPath: h }, it: k }, x, O, z) {
    const A = z ? (0, e._)`${u}, ${m}, ${c}${l}` : m, j = [
      [n.default.instancePath, (0, e.strConcat)(n.default.instancePath, h)],
      [n.default.parentData, k.parentData],
      [n.default.parentDataProperty, k.parentDataProperty],
      [n.default.rootData, n.default.rootData]
    ];
    k.opts.dynamicRef && j.push([n.default.dynamicAnchors, n.default.dynamicAnchors]);
    const W = (0, e._)`${A}, ${C.object(...j)}`;
    return O !== e.nil ? (0, e._)`${x}.call(${O}, ${W})` : (0, e._)`${x}(${W})`;
  }
  ae.callValidateCode = v;
  const S = (0, e._)`new RegExp`;
  function w({ gen: u, it: { opts: m } }, C) {
    const c = m.unicodeRegExp ? "u" : "", { regExp: l } = m.code, h = l(C, c);
    return u.scopeValue("pattern", {
      key: h.toString(),
      ref: h,
      code: (0, e._)`${l.code === "new RegExp" ? S : (0, r.useFunc)(u, l)}(${C}, ${c})`
    });
  }
  ae.usePattern = w;
  function f(u) {
    const { gen: m, data: C, keyword: c, it: l } = u, h = m.name("valid");
    if (l.allErrors) {
      const x = m.let("valid", !0);
      return k(() => m.assign(x, !1)), x;
    }
    return m.var(h, !0), k(() => m.break()), h;
    function k(x) {
      const O = m.const("len", (0, e._)`${C}.length`);
      m.forRange("i", 0, O, (z) => {
        u.subschema({
          keyword: c,
          dataProp: z,
          dataPropType: t.Type.Num
        }, h), m.if((0, e.not)(h), x);
      });
    }
  }
  ae.validateArray = f;
  function y(u) {
    const { gen: m, schema: C, keyword: c, it: l } = u;
    if (!Array.isArray(C))
      throw new Error("ajv implementation error");
    if (C.some((O) => (0, t.alwaysValidSchema)(l, O)) && !l.opts.unevaluated)
      return;
    const k = m.let("valid", !1), x = m.name("_valid");
    m.block(() => C.forEach((O, z) => {
      const A = u.subschema({
        keyword: c,
        schemaProp: z,
        compositeRule: !0
      }, x);
      m.assign(k, (0, e._)`${k} || ${x}`), u.mergeValidEvaluated(A, x) || m.if((0, e.not)(k));
    })), u.result(k, () => u.reset(), () => u.error(!0));
  }
  return ae.validateUnion = y, ae;
}
var Vr;
function ls() {
  if (Vr) return Ce;
  Vr = 1, Object.defineProperty(Ce, "__esModule", { value: !0 }), Ce.validateKeywordUsage = Ce.validSchemaType = Ce.funcKeywordCode = Ce.macroKeywordCode = void 0;
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ Ae(), n = /* @__PURE__ */ Re(), r = /* @__PURE__ */ Rn();
  function i(b, v) {
    const { gen: S, keyword: w, schema: f, parentSchema: y, it: u } = b, m = v.macro.call(u.self, f, y, u), C = g(S, w, m);
    u.opts.validateSchema !== !1 && u.self.validateSchema(m, !0);
    const c = S.name("valid");
    b.subschema({
      schema: m,
      schemaPath: e.nil,
      errSchemaPath: `${u.errSchemaPath}/${w}`,
      topSchemaRef: C,
      compositeRule: !0
    }, c), b.pass(c, () => b.error(!0));
  }
  Ce.macroKeywordCode = i;
  function o(b, v) {
    var S;
    const { gen: w, keyword: f, schema: y, parentSchema: u, $data: m, it: C } = b;
    d(C, v);
    const c = !m && v.compile ? v.compile.call(C.self, y, u, C) : v.validate, l = g(w, f, c), h = w.let("valid");
    b.block$data(h, k), b.ok((S = v.valid) !== null && S !== void 0 ? S : h);
    function k() {
      if (v.errors === !1)
        z(), v.modifying && s(b), A(() => b.error());
      else {
        const j = v.async ? x() : O();
        v.modifying && s(b), A(() => a(b, j));
      }
    }
    function x() {
      const j = w.let("ruleErrs", null);
      return w.try(() => z((0, e._)`await `), (W) => w.assign(h, !1).if((0, e._)`${W} instanceof ${C.ValidationError}`, () => w.assign(j, (0, e._)`${W}.errors`), () => w.throw(W))), j;
    }
    function O() {
      const j = (0, e._)`${l}.errors`;
      return w.assign(j, null), z(e.nil), j;
    }
    function z(j = v.async ? (0, e._)`await ` : e.nil) {
      const W = C.opts.passContext ? t.default.this : t.default.self, Z = !("compile" in v && !m || v.schema === !1);
      w.assign(h, (0, e._)`${j}${(0, n.callValidateCode)(b, l, W, Z)}`, v.modifying);
    }
    function A(j) {
      var W;
      w.if((0, e.not)((W = v.valid) !== null && W !== void 0 ? W : h), j);
    }
  }
  Ce.funcKeywordCode = o;
  function s(b) {
    const { gen: v, data: S, it: w } = b;
    v.if(w.parentData, () => v.assign(S, (0, e._)`${w.parentData}[${w.parentDataProperty}]`));
  }
  function a(b, v) {
    const { gen: S } = b;
    S.if((0, e._)`Array.isArray(${v})`, () => {
      S.assign(t.default.vErrors, (0, e._)`${t.default.vErrors} === null ? ${v} : ${t.default.vErrors}.concat(${v})`).assign(t.default.errors, (0, e._)`${t.default.vErrors}.length`), (0, r.extendErrors)(b);
    }, () => b.error());
  }
  function d({ schemaEnv: b }, v) {
    if (v.async && !b.$async)
      throw new Error("async keyword in sync schema");
  }
  function g(b, v, S) {
    if (S === void 0)
      throw new Error(`keyword "${v}" failed to compile`);
    return b.scopeValue("keyword", typeof S == "function" ? { ref: S } : { ref: S, code: (0, e.stringify)(S) });
  }
  function p(b, v, S = !1) {
    return !v.length || v.some((w) => w === "array" ? Array.isArray(b) : w === "object" ? b && typeof b == "object" && !Array.isArray(b) : typeof b == w || S && typeof b > "u");
  }
  Ce.validSchemaType = p;
  function _({ schema: b, opts: v, self: S, errSchemaPath: w }, f, y) {
    if (Array.isArray(f.keyword) ? !f.keyword.includes(y) : f.keyword !== y)
      throw new Error("ajv implementation error");
    const u = f.dependencies;
    if (u?.some((m) => !Object.prototype.hasOwnProperty.call(b, m)))
      throw new Error(`parent schema must have dependencies of ${y}: ${u.join(",")}`);
    if (f.validateSchema && !f.validateSchema(b[y])) {
      const C = `keyword "${y}" value is invalid at path "${w}": ` + S.errorsText(f.validateSchema.errors);
      if (v.validateSchema === "log")
        S.logger.error(C);
      else
        throw new Error(C);
    }
  }
  return Ce.validateKeywordUsage = _, Ce;
}
var ze = {}, Br;
function ds() {
  if (Br) return ze;
  Br = 1, Object.defineProperty(ze, "__esModule", { value: !0 }), ze.extendSubschemaMode = ze.extendSubschemaData = ze.getSubschema = void 0;
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ re();
  function n(o, { keyword: s, schemaProp: a, schema: d, schemaPath: g, errSchemaPath: p, topSchemaRef: _ }) {
    if (s !== void 0 && d !== void 0)
      throw new Error('both "keyword" and "schema" passed, only one allowed');
    if (s !== void 0) {
      const b = o.schema[s];
      return a === void 0 ? {
        schema: b,
        schemaPath: (0, e._)`${o.schemaPath}${(0, e.getProperty)(s)}`,
        errSchemaPath: `${o.errSchemaPath}/${s}`
      } : {
        schema: b[a],
        schemaPath: (0, e._)`${o.schemaPath}${(0, e.getProperty)(s)}${(0, e.getProperty)(a)}`,
        errSchemaPath: `${o.errSchemaPath}/${s}/${(0, t.escapeFragment)(a)}`
      };
    }
    if (d !== void 0) {
      if (g === void 0 || p === void 0 || _ === void 0)
        throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
      return {
        schema: d,
        schemaPath: g,
        topSchemaRef: _,
        errSchemaPath: p
      };
    }
    throw new Error('either "keyword" or "schema" must be passed');
  }
  ze.getSubschema = n;
  function r(o, s, { dataProp: a, dataPropType: d, data: g, dataTypes: p, propertyName: _ }) {
    if (g !== void 0 && a !== void 0)
      throw new Error('both "data" and "dataProp" passed, only one allowed');
    const { gen: b } = s;
    if (a !== void 0) {
      const { errorPath: S, dataPathArr: w, opts: f } = s, y = b.let("data", (0, e._)`${s.data}${(0, e.getProperty)(a)}`, !0);
      v(y), o.errorPath = (0, e.str)`${S}${(0, t.getErrorPath)(a, d, f.jsPropertySyntax)}`, o.parentDataProperty = (0, e._)`${a}`, o.dataPathArr = [...w, o.parentDataProperty];
    }
    if (g !== void 0) {
      const S = g instanceof e.Name ? g : b.let("data", g, !0);
      v(S), _ !== void 0 && (o.propertyName = _);
    }
    p && (o.dataTypes = p);
    function v(S) {
      o.data = S, o.dataLevel = s.dataLevel + 1, o.dataTypes = [], s.definedProperties = /* @__PURE__ */ new Set(), o.parentData = s.data, o.dataNames = [...s.dataNames, S];
    }
  }
  ze.extendSubschemaData = r;
  function i(o, { jtdDiscriminator: s, jtdMetadata: a, compositeRule: d, createErrors: g, allErrors: p }) {
    d !== void 0 && (o.compositeRule = d), g !== void 0 && (o.createErrors = g), p !== void 0 && (o.allErrors = p), o.jtdDiscriminator = s, o.jtdMetadata = a;
  }
  return ze.extendSubschemaMode = i, ze;
}
var me = {}, Un, Lr;
function _i() {
  return Lr || (Lr = 1, Un = function e(t, n) {
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
  }), Un;
}
var Kn = { exports: {} }, Ur;
function us() {
  if (Ur) return Kn.exports;
  Ur = 1;
  var e = Kn.exports = function(r, i, o) {
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
  function t(r, i, o, s, a, d, g, p, _, b) {
    if (s && typeof s == "object" && !Array.isArray(s)) {
      i(s, a, d, g, p, _, b);
      for (var v in s) {
        var S = s[v];
        if (Array.isArray(S)) {
          if (v in e.arrayKeywords)
            for (var w = 0; w < S.length; w++)
              t(r, i, o, S[w], a + "/" + v + "/" + w, d, a, v, s, w);
        } else if (v in e.propsKeywords) {
          if (S && typeof S == "object")
            for (var f in S)
              t(r, i, o, S[f], a + "/" + v + "/" + n(f), d, a, v, s, f);
        } else (v in e.keywords || r.allKeys && !(v in e.skipKeywords)) && t(r, i, o, S, a + "/" + v, d, a, v, s);
      }
      o(s, a, d, g, p, _, b);
    }
  }
  function n(r) {
    return r.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  return Kn.exports;
}
var Kr;
function Nn() {
  if (Kr) return me;
  Kr = 1, Object.defineProperty(me, "__esModule", { value: !0 }), me.getSchemaRefs = me.resolveUrl = me.normalizeId = me._getFullPath = me.getFullPath = me.inlineRef = void 0;
  const e = /* @__PURE__ */ re(), t = _i(), n = us(), r = /* @__PURE__ */ new Set([
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
  function i(w, f = !0) {
    return typeof w == "boolean" ? !0 : f === !0 ? !s(w) : f ? a(w) <= f : !1;
  }
  me.inlineRef = i;
  const o = /* @__PURE__ */ new Set([
    "$ref",
    "$recursiveRef",
    "$recursiveAnchor",
    "$dynamicRef",
    "$dynamicAnchor"
  ]);
  function s(w) {
    for (const f in w) {
      if (o.has(f))
        return !0;
      const y = w[f];
      if (Array.isArray(y) && y.some(s) || typeof y == "object" && s(y))
        return !0;
    }
    return !1;
  }
  function a(w) {
    let f = 0;
    for (const y in w) {
      if (y === "$ref")
        return 1 / 0;
      if (f++, !r.has(y) && (typeof w[y] == "object" && (0, e.eachItem)(w[y], (u) => f += a(u)), f === 1 / 0))
        return 1 / 0;
    }
    return f;
  }
  function d(w, f = "", y) {
    y !== !1 && (f = _(f));
    const u = w.parse(f);
    return g(w, u);
  }
  me.getFullPath = d;
  function g(w, f) {
    return w.serialize(f).split("#")[0] + "#";
  }
  me._getFullPath = g;
  const p = /#\/?$/;
  function _(w) {
    return w ? w.replace(p, "") : "";
  }
  me.normalizeId = _;
  function b(w, f, y) {
    return y = _(y), w.resolve(f, y);
  }
  me.resolveUrl = b;
  const v = /^[a-z_][-a-z0-9._]*$/i;
  function S(w, f) {
    if (typeof w == "boolean")
      return {};
    const { schemaId: y, uriResolver: u } = this.opts, m = _(w[y] || f), C = { "": m }, c = d(u, m, !1), l = {}, h = /* @__PURE__ */ new Set();
    return n(w, { allKeys: !0 }, (O, z, A, j) => {
      if (j === void 0)
        return;
      const W = c + z;
      let Z = C[j];
      typeof O[y] == "string" && (Z = L.call(this, O[y])), G.call(this, O.$anchor), G.call(this, O.$dynamicAnchor), C[z] = Z;
      function L(U) {
        const Q = this.opts.uriResolver.resolve;
        if (U = _(Z ? Q(Z, U) : U), h.has(U))
          throw x(U);
        h.add(U);
        let V = this.refs[U];
        return typeof V == "string" && (V = this.refs[V]), typeof V == "object" ? k(O, V.schema, U) : U !== _(W) && (U[0] === "#" ? (k(O, l[U], U), l[U] = O) : this.refs[U] = W), U;
      }
      function G(U) {
        if (typeof U == "string") {
          if (!v.test(U))
            throw new Error(`invalid anchor "${U}"`);
          L.call(this, `#${U}`);
        }
      }
    }), l;
    function k(O, z, A) {
      if (z !== void 0 && !t(O, z))
        throw x(A);
    }
    function x(O) {
      return new Error(`reference "${O}" resolves to more than one schema`);
    }
  }
  return me.getSchemaRefs = S, me;
}
var Hr;
function Fn() {
  if (Hr) return Te;
  Hr = 1, Object.defineProperty(Te, "__esModule", { value: !0 }), Te.getData = Te.KeywordCxt = Te.validateFunctionCode = void 0;
  const e = /* @__PURE__ */ as(), t = /* @__PURE__ */ xn(), n = /* @__PURE__ */ wi(), r = /* @__PURE__ */ xn(), i = /* @__PURE__ */ cs(), o = /* @__PURE__ */ ls(), s = /* @__PURE__ */ ds(), a = /* @__PURE__ */ ee(), d = /* @__PURE__ */ Ae(), g = /* @__PURE__ */ Nn(), p = /* @__PURE__ */ re(), _ = /* @__PURE__ */ Rn();
  function b(R) {
    if (c(R) && (h(R), C(R))) {
      f(R);
      return;
    }
    v(R, () => (0, e.topBoolOrEmptySchema)(R));
  }
  Te.validateFunctionCode = b;
  function v({ gen: R, validateName: T, schema: B, schemaEnv: K, opts: Y }, ne) {
    Y.code.es5 ? R.func(T, (0, a._)`${d.default.data}, ${d.default.valCxt}`, K.$async, () => {
      R.code((0, a._)`"use strict"; ${u(B, Y)}`), w(R, Y), R.code(ne);
    }) : R.func(T, (0, a._)`${d.default.data}, ${S(Y)}`, K.$async, () => R.code(u(B, Y)).code(ne));
  }
  function S(R) {
    return (0, a._)`{${d.default.instancePath}="", ${d.default.parentData}, ${d.default.parentDataProperty}, ${d.default.rootData}=${d.default.data}${R.dynamicRef ? (0, a._)`, ${d.default.dynamicAnchors}={}` : a.nil}}={}`;
  }
  function w(R, T) {
    R.if(d.default.valCxt, () => {
      R.var(d.default.instancePath, (0, a._)`${d.default.valCxt}.${d.default.instancePath}`), R.var(d.default.parentData, (0, a._)`${d.default.valCxt}.${d.default.parentData}`), R.var(d.default.parentDataProperty, (0, a._)`${d.default.valCxt}.${d.default.parentDataProperty}`), R.var(d.default.rootData, (0, a._)`${d.default.valCxt}.${d.default.rootData}`), T.dynamicRef && R.var(d.default.dynamicAnchors, (0, a._)`${d.default.valCxt}.${d.default.dynamicAnchors}`);
    }, () => {
      R.var(d.default.instancePath, (0, a._)`""`), R.var(d.default.parentData, (0, a._)`undefined`), R.var(d.default.parentDataProperty, (0, a._)`undefined`), R.var(d.default.rootData, d.default.data), T.dynamicRef && R.var(d.default.dynamicAnchors, (0, a._)`{}`);
    });
  }
  function f(R) {
    const { schema: T, opts: B, gen: K } = R;
    v(R, () => {
      B.$comment && T.$comment && j(R), O(R), K.let(d.default.vErrors, null), K.let(d.default.errors, 0), B.unevaluated && y(R), k(R), W(R);
    });
  }
  function y(R) {
    const { gen: T, validateName: B } = R;
    R.evaluated = T.const("evaluated", (0, a._)`${B}.evaluated`), T.if((0, a._)`${R.evaluated}.dynamicProps`, () => T.assign((0, a._)`${R.evaluated}.props`, (0, a._)`undefined`)), T.if((0, a._)`${R.evaluated}.dynamicItems`, () => T.assign((0, a._)`${R.evaluated}.items`, (0, a._)`undefined`));
  }
  function u(R, T) {
    const B = typeof R == "object" && R[T.schemaId];
    return B && (T.code.source || T.code.process) ? (0, a._)`/*# sourceURL=${B} */` : a.nil;
  }
  function m(R, T) {
    if (c(R) && (h(R), C(R))) {
      l(R, T);
      return;
    }
    (0, e.boolOrEmptySchema)(R, T);
  }
  function C({ schema: R, self: T }) {
    if (typeof R == "boolean")
      return !R;
    for (const B in R)
      if (T.RULES.all[B])
        return !0;
    return !1;
  }
  function c(R) {
    return typeof R.schema != "boolean";
  }
  function l(R, T) {
    const { schema: B, gen: K, opts: Y } = R;
    Y.$comment && B.$comment && j(R), z(R), A(R);
    const ne = K.const("_errs", d.default.errors);
    k(R, ne), K.var(T, (0, a._)`${ne} === ${d.default.errors}`);
  }
  function h(R) {
    (0, p.checkUnknownRules)(R), x(R);
  }
  function k(R, T) {
    if (R.opts.jtd)
      return L(R, [], !1, T);
    const B = (0, t.getSchemaTypes)(R.schema), K = (0, t.coerceAndCheckDataType)(R, B);
    L(R, B, !K, T);
  }
  function x(R) {
    const { schema: T, errSchemaPath: B, opts: K, self: Y } = R;
    T.$ref && K.ignoreKeywordsWithRef && (0, p.schemaHasRulesButRef)(T, Y.RULES) && Y.logger.warn(`$ref: keywords ignored in schema at path "${B}"`);
  }
  function O(R) {
    const { schema: T, opts: B } = R;
    T.default !== void 0 && B.useDefaults && B.strictSchema && (0, p.checkStrictMode)(R, "default is ignored in the schema root");
  }
  function z(R) {
    const T = R.schema[R.opts.schemaId];
    T && (R.baseId = (0, g.resolveUrl)(R.opts.uriResolver, R.baseId, T));
  }
  function A(R) {
    if (R.schema.$async && !R.schemaEnv.$async)
      throw new Error("async schema in sync schema");
  }
  function j({ gen: R, schemaEnv: T, schema: B, errSchemaPath: K, opts: Y }) {
    const ne = B.$comment;
    if (Y.$comment === !0)
      R.code((0, a._)`${d.default.self}.logger.log(${ne})`);
    else if (typeof Y.$comment == "function") {
      const fe = (0, a.str)`${K}/$comment`, Se = R.scopeValue("root", { ref: T.root });
      R.code((0, a._)`${d.default.self}.opts.$comment(${ne}, ${fe}, ${Se}.schema)`);
    }
  }
  function W(R) {
    const { gen: T, schemaEnv: B, validateName: K, ValidationError: Y, opts: ne } = R;
    B.$async ? T.if((0, a._)`${d.default.errors} === 0`, () => T.return(d.default.data), () => T.throw((0, a._)`new ${Y}(${d.default.vErrors})`)) : (T.assign((0, a._)`${K}.errors`, d.default.vErrors), ne.unevaluated && Z(R), T.return((0, a._)`${d.default.errors} === 0`));
  }
  function Z({ gen: R, evaluated: T, props: B, items: K }) {
    B instanceof a.Name && R.assign((0, a._)`${T}.props`, B), K instanceof a.Name && R.assign((0, a._)`${T}.items`, K);
  }
  function L(R, T, B, K) {
    const { gen: Y, schema: ne, data: fe, allErrors: Se, opts: ye, self: ve } = R, { RULES: pe } = ve;
    if (ne.$ref && (ye.ignoreKeywordsWithRef || !(0, p.schemaHasRulesButRef)(ne, pe))) {
      Y.block(() => H(R, "$ref", pe.all.$ref.definition));
      return;
    }
    ye.jtd || U(R, T), Y.block(() => {
      for (const we of pe.rules)
        Ye(we);
      Ye(pe.post);
    });
    function Ye(we) {
      (0, n.shouldUseGroup)(ne, we) && (we.type ? (Y.if((0, r.checkDataType)(we.type, fe, ye.strictNumbers)), G(R, we), T.length === 1 && T[0] === we.type && B && (Y.else(), (0, r.reportTypeError)(R)), Y.endIf()) : G(R, we), Se || Y.if((0, a._)`${d.default.errors} === ${K || 0}`));
    }
  }
  function G(R, T) {
    const { gen: B, schema: K, opts: { useDefaults: Y } } = R;
    Y && (0, i.assignDefaults)(R, T.type), B.block(() => {
      for (const ne of T.rules)
        (0, n.shouldUseRule)(K, ne) && H(R, ne.keyword, ne.definition, T.type);
    });
  }
  function U(R, T) {
    R.schemaEnv.meta || !R.opts.strictTypes || (Q(R, T), R.opts.allowUnionTypes || V(R, T), P(R, R.dataTypes));
  }
  function Q(R, T) {
    if (T.length) {
      if (!R.dataTypes.length) {
        R.dataTypes = T;
        return;
      }
      T.forEach((B) => {
        N(R.dataTypes, B) || E(R, `type "${B}" not allowed by context "${R.dataTypes.join(",")}"`);
      }), $(R, T);
    }
  }
  function V(R, T) {
    T.length > 1 && !(T.length === 2 && T.includes("null")) && E(R, "use allowUnionTypes to allow union type keyword");
  }
  function P(R, T) {
    const B = R.self.RULES.all;
    for (const K in B) {
      const Y = B[K];
      if (typeof Y == "object" && (0, n.shouldUseRule)(R.schema, Y)) {
        const { type: ne } = Y.definition;
        ne.length && !ne.some((fe) => I(T, fe)) && E(R, `missing type "${ne.join(",")}" for keyword "${K}"`);
      }
    }
  }
  function I(R, T) {
    return R.includes(T) || T === "number" && R.includes("integer");
  }
  function N(R, T) {
    return R.includes(T) || T === "integer" && R.includes("number");
  }
  function $(R, T) {
    const B = [];
    for (const K of R.dataTypes)
      N(T, K) ? B.push(K) : T.includes("integer") && K === "number" && B.push("integer");
    R.dataTypes = B;
  }
  function E(R, T) {
    const B = R.schemaEnv.baseId + R.errSchemaPath;
    T += ` at "${B}" (strictTypes)`, (0, p.checkStrictMode)(R, T, R.opts.strictTypes);
  }
  class D {
    constructor(T, B, K) {
      if ((0, o.validateKeywordUsage)(T, B, K), this.gen = T.gen, this.allErrors = T.allErrors, this.keyword = K, this.data = T.data, this.schema = T.schema[K], this.$data = B.$data && T.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, p.schemaRefOrVal)(T, this.schema, K, this.$data), this.schemaType = B.schemaType, this.parentSchema = T.schema, this.params = {}, this.it = T, this.def = B, this.$data)
        this.schemaCode = T.gen.const("vSchema", oe(this.$data, T));
      else if (this.schemaCode = this.schemaValue, !(0, o.validSchemaType)(this.schema, B.schemaType, B.allowUndefined))
        throw new Error(`${K} value must be ${JSON.stringify(B.schemaType)}`);
      ("code" in B ? B.trackErrors : B.errors !== !1) && (this.errsCount = T.gen.const("_errs", d.default.errors));
    }
    result(T, B, K) {
      this.failResult((0, a.not)(T), B, K);
    }
    failResult(T, B, K) {
      this.gen.if(T), K ? K() : this.error(), B ? (this.gen.else(), B(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    pass(T, B) {
      this.failResult((0, a.not)(T), void 0, B);
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
      const { schemaCode: B } = this;
      this.fail((0, a._)`${B} !== undefined && (${(0, a.or)(this.invalid$data(), T)})`);
    }
    error(T, B, K) {
      if (B) {
        this.setParams(B), this._error(T, K), this.setParams({});
        return;
      }
      this._error(T, K);
    }
    _error(T, B) {
      (T ? _.reportExtraError : _.reportError)(this, this.def.error, B);
    }
    $dataError() {
      (0, _.reportError)(this, this.def.$dataError || _.keyword$DataError);
    }
    reset() {
      if (this.errsCount === void 0)
        throw new Error('add "trackErrors" to keyword definition');
      (0, _.resetErrorsCount)(this.gen, this.errsCount);
    }
    ok(T) {
      this.allErrors || this.gen.if(T);
    }
    setParams(T, B) {
      B ? Object.assign(this.params, T) : this.params = T;
    }
    block$data(T, B, K = a.nil) {
      this.gen.block(() => {
        this.check$data(T, K), B();
      });
    }
    check$data(T = a.nil, B = a.nil) {
      if (!this.$data)
        return;
      const { gen: K, schemaCode: Y, schemaType: ne, def: fe } = this;
      K.if((0, a.or)((0, a._)`${Y} === undefined`, B)), T !== a.nil && K.assign(T, !0), (ne.length || fe.validateSchema) && (K.elseIf(this.invalid$data()), this.$dataError(), T !== a.nil && K.assign(T, !1)), K.else();
    }
    invalid$data() {
      const { gen: T, schemaCode: B, schemaType: K, def: Y, it: ne } = this;
      return (0, a.or)(fe(), Se());
      function fe() {
        if (K.length) {
          if (!(B instanceof a.Name))
            throw new Error("ajv implementation error");
          const ye = Array.isArray(K) ? K : [K];
          return (0, a._)`${(0, r.checkDataTypes)(ye, B, ne.opts.strictNumbers, r.DataType.Wrong)}`;
        }
        return a.nil;
      }
      function Se() {
        if (Y.validateSchema) {
          const ye = T.scopeValue("validate$data", { ref: Y.validateSchema });
          return (0, a._)`!${ye}(${B})`;
        }
        return a.nil;
      }
    }
    subschema(T, B) {
      const K = (0, s.getSubschema)(this.it, T);
      (0, s.extendSubschemaData)(K, this.it, T), (0, s.extendSubschemaMode)(K, T);
      const Y = { ...this.it, ...K, items: void 0, props: void 0 };
      return m(Y, B), Y;
    }
    mergeEvaluated(T, B) {
      const { it: K, gen: Y } = this;
      K.opts.unevaluated && (K.props !== !0 && T.props !== void 0 && (K.props = p.mergeEvaluated.props(Y, T.props, K.props, B)), K.items !== !0 && T.items !== void 0 && (K.items = p.mergeEvaluated.items(Y, T.items, K.items, B)));
    }
    mergeValidEvaluated(T, B) {
      const { it: K, gen: Y } = this;
      if (K.opts.unevaluated && (K.props !== !0 || K.items !== !0))
        return Y.if(B, () => this.mergeEvaluated(T, a.Name)), !0;
    }
  }
  Te.KeywordCxt = D;
  function H(R, T, B, K) {
    const Y = new D(R, B, T);
    "code" in B ? B.code(Y, K) : Y.$data && B.validate ? (0, o.funcKeywordCode)(Y, B) : "macro" in B ? (0, o.macroKeywordCode)(Y, B) : (B.compile || B.validate) && (0, o.funcKeywordCode)(Y, B);
  }
  const J = /^\/(?:[^~]|~0|~1)*$/, ie = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function oe(R, { dataLevel: T, dataNames: B, dataPathArr: K }) {
    let Y, ne;
    if (R === "")
      return d.default.rootData;
    if (R[0] === "/") {
      if (!J.test(R))
        throw new Error(`Invalid JSON-pointer: ${R}`);
      Y = R, ne = d.default.rootData;
    } else {
      const ve = ie.exec(R);
      if (!ve)
        throw new Error(`Invalid JSON-pointer: ${R}`);
      const pe = +ve[1];
      if (Y = ve[2], Y === "#") {
        if (pe >= T)
          throw new Error(ye("property/index", pe));
        return K[T - pe];
      }
      if (pe > T)
        throw new Error(ye("data", pe));
      if (ne = B[T - pe], !Y)
        return ne;
    }
    let fe = ne;
    const Se = Y.split("/");
    for (const ve of Se)
      ve && (ne = (0, a._)`${ne}${(0, a.getProperty)((0, p.unescapeJsonPointer)(ve))}`, fe = (0, a._)`${fe} && ${ne}`);
    return fe;
    function ye(ve, pe) {
      return `Cannot access ${ve} ${pe} levels up, current level is ${T}`;
    }
  }
  return Te.getData = oe, Te;
}
var Ct = {}, Gr;
function ar() {
  if (Gr) return Ct;
  Gr = 1, Object.defineProperty(Ct, "__esModule", { value: !0 });
  class e extends Error {
    constructor(n) {
      super("validation failed"), this.errors = n, this.ajv = this.validation = !0;
    }
  }
  return Ct.default = e, Ct;
}
var kt = {}, Wr;
function On() {
  if (Wr) return kt;
  Wr = 1, Object.defineProperty(kt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Nn();
  class t extends Error {
    constructor(r, i, o, s) {
      super(s || `can't resolve reference ${o} from id ${i}`), this.missingRef = (0, e.resolveUrl)(r, i, o), this.missingSchema = (0, e.normalizeId)((0, e.getFullPath)(r, this.missingRef));
    }
  }
  return kt.default = t, kt;
}
var be = {}, Jr;
function Mn() {
  if (Jr) return be;
  Jr = 1, Object.defineProperty(be, "__esModule", { value: !0 }), be.resolveSchema = be.getCompilingSchema = be.resolveRef = be.compileSchema = be.SchemaEnv = void 0;
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ ar(), n = /* @__PURE__ */ Ae(), r = /* @__PURE__ */ Nn(), i = /* @__PURE__ */ re(), o = /* @__PURE__ */ Fn();
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
    const y = p.call(this, f);
    if (y)
      return y;
    const u = (0, r.getFullPath)(this.opts.uriResolver, f.root.baseId), { es5: m, lines: C } = this.opts.code, { ownProperties: c } = this.opts, l = new e.CodeGen(this.scope, { es5: m, lines: C, ownProperties: c });
    let h;
    f.$async && (h = l.scopeValue("Error", {
      ref: t.default,
      code: (0, e._)`require("ajv/dist/runtime/validation_error").default`
    }));
    const k = l.scopeName("validate");
    f.validateName = k;
    const x = {
      gen: l,
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
      topSchemaRef: l.scopeValue("schema", this.opts.code.source === !0 ? { ref: f.schema, code: (0, e.stringify)(f.schema) } : { ref: f.schema }),
      validateName: k,
      ValidationError: h,
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
    let O;
    try {
      this._compilations.add(f), (0, o.validateFunctionCode)(x), l.optimize(this.opts.code.optimize);
      const z = l.toString();
      O = `${l.scopeRefs(n.default.scope)}return ${z}`, this.opts.code.process && (O = this.opts.code.process(O, f));
      const j = new Function(`${n.default.self}`, `${n.default.scope}`, O)(this, this.scope.get());
      if (this.scope.value(k, { ref: j }), j.errors = null, j.schema = f.schema, j.schemaEnv = f, f.$async && (j.$async = !0), this.opts.code.source === !0 && (j.source = { validateName: k, validateCode: z, scopeValues: l._values }), this.opts.unevaluated) {
        const { props: W, items: Z } = x;
        j.evaluated = {
          props: W instanceof e.Name ? void 0 : W,
          items: Z instanceof e.Name ? void 0 : Z,
          dynamicProps: W instanceof e.Name,
          dynamicItems: Z instanceof e.Name
        }, j.source && (j.source.evaluated = (0, e.stringify)(j.evaluated));
      }
      return f.validate = j, f;
    } catch (z) {
      throw delete f.validate, delete f.validateName, O && this.logger.error("Error compiling schema, function code:", O), z;
    } finally {
      this._compilations.delete(f);
    }
  }
  be.compileSchema = a;
  function d(f, y, u) {
    var m;
    u = (0, r.resolveUrl)(this.opts.uriResolver, y, u);
    const C = f.refs[u];
    if (C)
      return C;
    let c = b.call(this, f, u);
    if (c === void 0) {
      const l = (m = f.localRefs) === null || m === void 0 ? void 0 : m[u], { schemaId: h } = this.opts;
      l && (c = new s({ schema: l, schemaId: h, root: f, baseId: y }));
    }
    if (c !== void 0)
      return f.refs[u] = g.call(this, c);
  }
  be.resolveRef = d;
  function g(f) {
    return (0, r.inlineRef)(f.schema, this.opts.inlineRefs) ? f.schema : f.validate ? f : a.call(this, f);
  }
  function p(f) {
    for (const y of this._compilations)
      if (_(y, f))
        return y;
  }
  be.getCompilingSchema = p;
  function _(f, y) {
    return f.schema === y.schema && f.root === y.root && f.baseId === y.baseId;
  }
  function b(f, y) {
    let u;
    for (; typeof (u = this.refs[y]) == "string"; )
      y = u;
    return u || this.schemas[y] || v.call(this, f, y);
  }
  function v(f, y) {
    const u = this.opts.uriResolver.parse(y), m = (0, r._getFullPath)(this.opts.uriResolver, u);
    let C = (0, r.getFullPath)(this.opts.uriResolver, f.baseId, void 0);
    if (Object.keys(f.schema).length > 0 && m === C)
      return w.call(this, u, f);
    const c = (0, r.normalizeId)(m), l = this.refs[c] || this.schemas[c];
    if (typeof l == "string") {
      const h = v.call(this, f, l);
      return typeof h?.schema != "object" ? void 0 : w.call(this, u, h);
    }
    if (typeof l?.schema == "object") {
      if (l.validate || a.call(this, l), c === (0, r.normalizeId)(y)) {
        const { schema: h } = l, { schemaId: k } = this.opts, x = h[k];
        return x && (C = (0, r.resolveUrl)(this.opts.uriResolver, C, x)), new s({ schema: h, schemaId: k, root: f, baseId: C });
      }
      return w.call(this, u, l);
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
  function w(f, { baseId: y, schema: u, root: m }) {
    var C;
    if (((C = f.fragment) === null || C === void 0 ? void 0 : C[0]) !== "/")
      return;
    for (const h of f.fragment.slice(1).split("/")) {
      if (typeof u == "boolean")
        return;
      const k = u[(0, i.unescapeFragment)(h)];
      if (k === void 0)
        return;
      u = k;
      const x = typeof u == "object" && u[this.opts.schemaId];
      !S.has(h) && x && (y = (0, r.resolveUrl)(this.opts.uriResolver, y, x));
    }
    let c;
    if (typeof u != "boolean" && u.$ref && !(0, i.schemaHasRulesButRef)(u, this.RULES)) {
      const h = (0, r.resolveUrl)(this.opts.uriResolver, y, u.$ref);
      c = v.call(this, m, h);
    }
    const { schemaId: l } = this.opts;
    if (c = c || new s({ schema: u, schemaId: l, root: m, baseId: y }), c.schema !== c.root.schema)
      return c;
  }
  return be;
}
const fs = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", ps = "Meta-schema for $data reference (JSON AnySchema extension proposal)", hs = "object", ms = ["$data"], gs = { $data: { type: "string", anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] } }, ys = !1, vs = {
  $id: fs,
  description: ps,
  type: hs,
  required: ms,
  properties: gs,
  additionalProperties: ys
};
var Et = {}, pt = { exports: {} }, Hn, Yr;
function Si() {
  if (Yr) return Hn;
  Yr = 1;
  const e = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu), t = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u), n = RegExp.prototype.test.bind(/^[\da-f]{2}$/iu), r = RegExp.prototype.test.bind(/^[\da-z\-._~]$/iu), i = RegExp.prototype.test.bind(/^[\da-z\-._~!$&'()*+,;=:@/]$/iu);
  function o(c) {
    let l = "", h = 0, k = 0;
    for (k = 0; k < c.length; k++)
      if (h = c[k].charCodeAt(0), h !== 48) {
        if (!(h >= 48 && h <= 57 || h >= 65 && h <= 70 || h >= 97 && h <= 102))
          return "";
        l += c[k];
        break;
      }
    for (k += 1; k < c.length; k++) {
      if (h = c[k].charCodeAt(0), !(h >= 48 && h <= 57 || h >= 65 && h <= 70 || h >= 97 && h <= 102))
        return "";
      l += c[k];
    }
    return l;
  }
  const s = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
  function a(c) {
    return c.length = 0, !0;
  }
  function d(c, l, h) {
    if (c.length) {
      const k = o(c);
      if (k !== "")
        l.push(k);
      else
        return h.error = !0, !1;
      c.length = 0;
    }
    return !0;
  }
  function g(c) {
    let l = 0;
    const h = { error: !1, address: "", zone: "" }, k = [], x = [];
    let O = !1, z = !1, A = d;
    for (let j = 0; j < c.length; j++) {
      const W = c[j];
      if (!(W === "[" || W === "]"))
        if (W === ":") {
          if (O === !0 && (z = !0), !A(x, k, h))
            break;
          if (++l > 7) {
            h.error = !0;
            break;
          }
          j > 0 && c[j - 1] === ":" && (O = !0), k.push(":");
          continue;
        } else if (W === "%") {
          if (!A(x, k, h))
            break;
          A = a;
        } else {
          x.push(W);
          continue;
        }
    }
    return x.length && (A === a ? h.zone = x.join("") : z ? k.push(x.join("")) : k.push(o(x))), h.address = k.join(""), h;
  }
  function p(c) {
    if (_(c, ":") < 2)
      return { host: c, isIPV6: !1 };
    const l = g(c);
    if (l.error)
      return { host: c, isIPV6: !1 };
    {
      let h = l.address, k = l.address;
      return l.zone && (h += "%" + l.zone, k += "%25" + l.zone), { host: h, isIPV6: !0, escapedHost: k };
    }
  }
  function _(c, l) {
    let h = 0;
    for (let k = 0; k < c.length; k++)
      c[k] === l && h++;
    return h;
  }
  function b(c) {
    let l = c;
    const h = [];
    let k = -1, x = 0;
    for (; x = l.length; ) {
      if (x === 1) {
        if (l === ".")
          break;
        if (l === "/") {
          h.push("/");
          break;
        } else {
          h.push(l);
          break;
        }
      } else if (x === 2) {
        if (l[0] === ".") {
          if (l[1] === ".")
            break;
          if (l[1] === "/") {
            l = l.slice(2);
            continue;
          }
        } else if (l[0] === "/" && (l[1] === "." || l[1] === "/")) {
          h.push("/");
          break;
        }
      } else if (x === 3 && l === "/..") {
        h.length !== 0 && h.pop(), h.push("/");
        break;
      }
      if (l[0] === ".") {
        if (l[1] === ".") {
          if (l[2] === "/") {
            l = l.slice(3);
            continue;
          }
        } else if (l[1] === "/") {
          l = l.slice(2);
          continue;
        }
      } else if (l[0] === "/" && l[1] === ".") {
        if (l[2] === "/") {
          l = l.slice(2);
          continue;
        } else if (l[2] === "." && l[3] === "/") {
          l = l.slice(3), h.length !== 0 && h.pop();
          continue;
        }
      }
      if ((k = l.indexOf("/", 1)) === -1) {
        h.push(l);
        break;
      } else
        h.push(l.slice(0, k)), l = l.slice(k);
    }
    return h.join("");
  }
  const v = { "@": "%40", "/": "%2F", "?": "%3F", "#": "%23", ":": "%3A" }, S = /[@/?#:]/g, w = /[@/?#]/g;
  function f(c, l) {
    const h = l ? w : S;
    return h.lastIndex = 0, c.replace(h, (k) => v[k]);
  }
  function y(c, l = !1) {
    if (c.indexOf("%") === -1)
      return c;
    let h = "";
    for (let k = 0; k < c.length; k++) {
      if (c[k] === "%" && k + 2 < c.length) {
        const x = c.slice(k + 1, k + 3);
        if (n(x)) {
          const O = x.toUpperCase(), z = String.fromCharCode(parseInt(O, 16));
          l && r(z) ? h += z : h += "%" + O, k += 2;
          continue;
        }
      }
      h += c[k];
    }
    return h;
  }
  function u(c) {
    let l = "";
    for (let h = 0; h < c.length; h++) {
      if (c[h] === "%" && h + 2 < c.length) {
        const k = c.slice(h + 1, h + 3);
        if (n(k)) {
          const x = k.toUpperCase(), O = String.fromCharCode(parseInt(x, 16));
          O !== "." && r(O) ? l += O : l += "%" + x, h += 2;
          continue;
        }
      }
      i(c[h]) ? l += c[h] : l += escape(c[h]);
    }
    return l;
  }
  function m(c) {
    let l = "";
    for (let h = 0; h < c.length; h++) {
      if (c[h] === "%" && h + 2 < c.length) {
        const k = c.slice(h + 1, h + 3);
        if (n(k)) {
          l += "%" + k.toUpperCase(), h += 2;
          continue;
        }
      }
      l += escape(c[h]);
    }
    return l;
  }
  function C(c) {
    const l = [];
    if (c.userinfo !== void 0 && (l.push(c.userinfo), l.push("@")), c.host !== void 0) {
      let h = unescape(c.host);
      if (!t(h)) {
        const k = p(h);
        k.isIPV6 === !0 ? h = `[${k.escapedHost}]` : h = f(h, !1);
      }
      l.push(h);
    }
    return (typeof c.port == "number" || typeof c.port == "string") && (l.push(":"), l.push(String(c.port))), l.length ? l.join("") : void 0;
  }
  return Hn = {
    nonSimpleDomain: s,
    recomposeAuthority: C,
    reescapeHostDelimiters: f,
    normalizePercentEncoding: y,
    normalizePathEncoding: u,
    escapePreservingEscapes: m,
    removeDotSegments: b,
    isIPv4: t,
    isUUID: e,
    normalizeIPv6: p,
    stringArrayToHexStripped: o
  }, Hn;
}
var Gn, Xr;
function $s() {
  if (Xr) return Gn;
  Xr = 1;
  const { isUUID: e } = Si(), t = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu, n = (
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
    const l = String(c.scheme).toLowerCase() === "https";
    return (c.port === (l ? 443 : 80) || c.port === "") && (c.port = void 0), c.path || (c.path = "/"), c;
  }
  function a(c) {
    return c.secure = i(c), c.resourceName = (c.path || "/") + (c.query ? "?" + c.query : ""), c.path = void 0, c.query = void 0, c;
  }
  function d(c) {
    if ((c.port === (i(c) ? 443 : 80) || c.port === "") && (c.port = void 0), typeof c.secure == "boolean" && (c.scheme = c.secure ? "wss" : "ws", c.secure = void 0), c.resourceName) {
      const [l, h] = c.resourceName.split("?");
      c.path = l && l !== "/" ? l : void 0, c.query = h, c.resourceName = void 0;
    }
    return c.fragment = void 0, c;
  }
  function g(c, l) {
    if (!c.path)
      return c.error = "URN can not be parsed", c;
    const h = c.path.match(t);
    if (h) {
      const k = l.scheme || c.scheme || "urn";
      c.nid = h[1].toLowerCase(), c.nss = h[2];
      const x = `${k}:${l.nid || c.nid}`, O = C(x);
      c.path = void 0, O && (c = O.parse(c, l));
    } else
      c.error = c.error || "URN can not be parsed.";
    return c;
  }
  function p(c, l) {
    if (c.nid === void 0)
      throw new Error("URN without nid cannot be serialized");
    const h = l.scheme || c.scheme || "urn", k = c.nid.toLowerCase(), x = `${h}:${l.nid || k}`, O = C(x);
    O && (c = O.serialize(c, l));
    const z = c, A = c.nss;
    return z.path = `${k || l.nid}:${A}`, l.skipEscape = !0, z;
  }
  function _(c, l) {
    const h = c;
    return h.uuid = h.nss, h.nss = void 0, !l.tolerant && (!h.uuid || !e(h.uuid)) && (h.error = h.error || "UUID is not valid."), h;
  }
  function b(c) {
    const l = c;
    return l.nss = (c.uuid || "").toLowerCase(), l;
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
  ), w = (
    /** @type {SchemeHandler} */
    {
      scheme: "ws",
      domainHost: !0,
      parse: a,
      serialize: d
    }
  ), f = (
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
      http: v,
      https: S,
      ws: w,
      wss: f,
      urn: (
        /** @type {SchemeHandler} */
        {
          scheme: "urn",
          parse: g,
          serialize: p,
          skipNormalize: !0
        }
      ),
      "urn:uuid": (
        /** @type {SchemeHandler} */
        {
          scheme: "urn:uuid",
          parse: _,
          serialize: b,
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
  return Gn = {
    wsIsSecure: i,
    SCHEMES: m,
    isValidSchemeName: r,
    getSchemeHandler: C
  }, Gn;
}
var Zr;
function bs() {
  if (Zr) return pt.exports;
  Zr = 1;
  const { normalizeIPv6: e, removeDotSegments: t, recomposeAuthority: n, normalizePercentEncoding: r, normalizePathEncoding: i, escapePreservingEscapes: o, reescapeHostDelimiters: s, isIPv4: a, nonSimpleDomain: d } = Si(), { SCHEMES: g, getSchemeHandler: p } = $s();
  function _(x, O) {
    return typeof x == "string" ? x = /** @type {T} */
    c(x, O) : typeof x == "object" && (x = /** @type {T} */
    C(w(x, O), O)), x;
  }
  function b(x, O, z) {
    const A = z ? Object.assign({ scheme: "null" }, z) : { scheme: "null" }, j = v(C(x, A), C(O, A), A, !0);
    return A.skipEscape = !0, w(j, A);
  }
  function v(x, O, z, A) {
    const j = {};
    return A || (x = C(w(x, z), z), O = C(w(O, z), z)), z = z || {}, !z.tolerant && O.scheme ? (j.scheme = O.scheme, j.userinfo = O.userinfo, j.host = O.host, j.port = O.port, j.path = t(O.path || ""), j.query = O.query) : (O.userinfo !== void 0 || O.host !== void 0 || O.port !== void 0 ? (j.userinfo = O.userinfo, j.host = O.host, j.port = O.port, j.path = t(O.path || ""), j.query = O.query) : (O.path ? (O.path[0] === "/" ? j.path = t(O.path) : ((x.userinfo !== void 0 || x.host !== void 0 || x.port !== void 0) && !x.path ? j.path = "/" + O.path : x.path ? j.path = x.path.slice(0, x.path.lastIndexOf("/") + 1) + O.path : j.path = O.path, j.path = t(j.path)), j.query = O.query) : (j.path = x.path, O.query !== void 0 ? j.query = O.query : j.query = x.query), j.userinfo = x.userinfo, j.host = x.host, j.port = x.port), j.scheme = x.scheme), j.fragment = O.fragment, j;
  }
  function S(x, O, z) {
    const A = h(x, z), j = h(O, z);
    return A !== void 0 && j !== void 0 && A.toLowerCase() === j.toLowerCase();
  }
  function w(x, O) {
    const z = {
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
    }, A = Object.assign({}, O), j = [], W = p(A.scheme || z.scheme);
    W && W.serialize && W.serialize(z, A), z.path !== void 0 && (A.skipEscape ? z.path = r(z.path) : (z.path = o(z.path), z.scheme !== void 0 && (z.path = z.path.split("%3A").join(":")))), A.reference !== "suffix" && z.scheme && j.push(z.scheme, ":");
    const Z = n(z);
    if (Z !== void 0 && (A.reference !== "suffix" && j.push("//"), j.push(Z), z.path && z.path[0] !== "/" && j.push("/")), z.path !== void 0) {
      let L = z.path;
      !A.absolutePath && (!W || !W.absolutePath) && (L = t(L)), Z === void 0 && L[0] === "/" && L[1] === "/" && (L = "/%2F" + L.slice(2)), j.push(L);
    }
    return z.query !== void 0 && j.push("?", z.query), z.fragment !== void 0 && j.push("#", z.fragment), j.join("");
  }
  const f = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u, y = /^(?:[^#/:?]+:)?\/\/([^/?#]*)/;
  function u(x, O) {
    if (O[2] !== void 0 && x.path && x.path[0] !== "/")
      return 'URI path must start with "/" when authority is present.';
    if (typeof x.port == "number" && (x.port < 0 || x.port > 65535))
      return "URI port is malformed.";
  }
  function m(x, O) {
    const z = Object.assign({}, O), A = {
      scheme: void 0,
      userinfo: void 0,
      host: "",
      port: void 0,
      path: "",
      query: void 0,
      fragment: void 0
    };
    let j = !1, W = !1;
    z.reference === "suffix" && (z.scheme ? x = z.scheme + ":" + x : x = "//" + x);
    const Z = x.match(y);
    Z !== null && Z[1].indexOf("\\") !== -1 && (A.error = "URI authority must not contain a literal backslash.", j = !0);
    const L = x.match(f);
    if (L) {
      A.scheme = L[1], A.userinfo = L[3], A.host = L[4], A.port = parseInt(L[5], 10), A.path = L[6] || "", A.query = L[7], A.fragment = L[8], isNaN(A.port) && (A.port = L[5]);
      const G = u(A, L);
      if (G !== void 0 && (A.error = A.error || G, j = !0), A.host)
        if (a(A.host) === !1) {
          const V = e(A.host);
          A.host = V.host.toLowerCase(), W = V.isIPV6;
        } else
          W = !0;
      A.scheme === void 0 && A.userinfo === void 0 && A.host === void 0 && A.port === void 0 && A.query === void 0 && !A.path ? A.reference = "same-document" : A.scheme === void 0 ? A.reference = "relative" : A.fragment === void 0 ? A.reference = "absolute" : A.reference = "uri", z.reference && z.reference !== "suffix" && z.reference !== A.reference && (A.error = A.error || "URI is not a " + z.reference + " reference.");
      const U = p(z.scheme || A.scheme);
      if (!z.unicodeSupport && (!U || !U.unicodeSupport) && A.host && (z.domainHost || U && U.domainHost) && W === !1 && d(A.host))
        try {
          A.host = new URL("http://" + A.host).hostname;
        } catch (Q) {
          A.error = A.error || "Host's domain name can not be converted to ASCII: " + Q;
        }
      if ((!U || U && !U.skipNormalize) && (x.indexOf("%") !== -1 && (A.scheme !== void 0 && (A.scheme = unescape(A.scheme)), A.host !== void 0 && (A.host = s(unescape(A.host), W))), A.path && (A.path = i(A.path)), A.fragment))
        try {
          A.fragment = encodeURI(decodeURIComponent(A.fragment));
        } catch {
          A.error = A.error || "URI malformed";
        }
      U && U.parse && U.parse(A, z);
    } else
      A.error = A.error || "URI can not be parsed.";
    return { parsed: A, malformedAuthorityOrPort: j };
  }
  function C(x, O) {
    return m(x, O).parsed;
  }
  function c(x, O) {
    return l(x, O).normalized;
  }
  function l(x, O) {
    const { parsed: z, malformedAuthorityOrPort: A } = m(x, O);
    return {
      normalized: A ? x : w(z, O),
      malformedAuthorityOrPort: A
    };
  }
  function h(x, O) {
    if (typeof x == "string") {
      const { normalized: z, malformedAuthorityOrPort: A } = l(x, O);
      return A ? void 0 : z;
    }
    if (typeof x == "object")
      return w(x, O);
  }
  const k = {
    SCHEMES: g,
    normalize: _,
    resolve: b,
    resolveComponent: v,
    equal: S,
    serialize: w,
    parse: C
  };
  return pt.exports = k, pt.exports.default = k, pt.exports.fastUri = k, pt.exports;
}
var Qr;
function ws() {
  if (Qr) return Et;
  Qr = 1, Object.defineProperty(Et, "__esModule", { value: !0 });
  const e = bs();
  return e.code = 'require("ajv/dist/runtime/uri").default', Et.default = e, Et;
}
var eo;
function _s() {
  return eo || (eo = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = void 0;
    var t = /* @__PURE__ */ Fn();
    Object.defineProperty(e, "KeywordCxt", { enumerable: !0, get: function() {
      return t.KeywordCxt;
    } });
    var n = /* @__PURE__ */ ee();
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
    const r = /* @__PURE__ */ ar(), i = /* @__PURE__ */ On(), o = /* @__PURE__ */ bi(), s = /* @__PURE__ */ Mn(), a = /* @__PURE__ */ ee(), d = /* @__PURE__ */ Nn(), g = /* @__PURE__ */ xn(), p = /* @__PURE__ */ re(), _ = vs, b = /* @__PURE__ */ ws(), v = (V, P) => new RegExp(V, P);
    v.code = "new RegExp";
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
    function m(V) {
      var P, I, N, $, E, D, H, J, ie, oe, R, T, B, K, Y, ne, fe, Se, ye, ve, pe, Ye, we, jn, zn;
      const dt = V.strict, In = (P = V.code) === null || P === void 0 ? void 0 : P.optimize, Sr = In === !0 || In === void 0 ? 1 : In || 0, Cr = (N = (I = V.code) === null || I === void 0 ? void 0 : I.regExp) !== null && N !== void 0 ? N : v, Bi = ($ = V.uriResolver) !== null && $ !== void 0 ? $ : b.default;
      return {
        strictSchema: (D = (E = V.strictSchema) !== null && E !== void 0 ? E : dt) !== null && D !== void 0 ? D : !0,
        strictNumbers: (J = (H = V.strictNumbers) !== null && H !== void 0 ? H : dt) !== null && J !== void 0 ? J : !0,
        strictTypes: (oe = (ie = V.strictTypes) !== null && ie !== void 0 ? ie : dt) !== null && oe !== void 0 ? oe : "log",
        strictTuples: (T = (R = V.strictTuples) !== null && R !== void 0 ? R : dt) !== null && T !== void 0 ? T : "log",
        strictRequired: (K = (B = V.strictRequired) !== null && B !== void 0 ? B : dt) !== null && K !== void 0 ? K : !1,
        code: V.code ? { ...V.code, optimize: Sr, regExp: Cr } : { optimize: Sr, regExp: Cr },
        loopRequired: (Y = V.loopRequired) !== null && Y !== void 0 ? Y : u,
        loopEnum: (ne = V.loopEnum) !== null && ne !== void 0 ? ne : u,
        meta: (fe = V.meta) !== null && fe !== void 0 ? fe : !0,
        messages: (Se = V.messages) !== null && Se !== void 0 ? Se : !0,
        inlineRefs: (ye = V.inlineRefs) !== null && ye !== void 0 ? ye : !0,
        schemaId: (ve = V.schemaId) !== null && ve !== void 0 ? ve : "$id",
        addUsedSchema: (pe = V.addUsedSchema) !== null && pe !== void 0 ? pe : !0,
        validateSchema: (Ye = V.validateSchema) !== null && Ye !== void 0 ? Ye : !0,
        validateFormats: (we = V.validateFormats) !== null && we !== void 0 ? we : !0,
        unicodeRegExp: (jn = V.unicodeRegExp) !== null && jn !== void 0 ? jn : !0,
        int32range: (zn = V.int32range) !== null && zn !== void 0 ? zn : !0,
        uriResolver: Bi
      };
    }
    class C {
      constructor(P = {}) {
        this.schemas = {}, this.refs = {}, this.formats = /* @__PURE__ */ Object.create(null), this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), P = this.opts = { ...P, ...m(P) };
        const { es5: I, lines: N } = this.opts.code;
        this.scope = new a.ValueScope({ scope: {}, prefixes: w, es5: I, lines: N }), this.logger = A(P.logger);
        const $ = P.validateFormats;
        P.validateFormats = !1, this.RULES = (0, o.getRules)(), c.call(this, f, P, "NOT SUPPORTED"), c.call(this, y, P, "DEPRECATED", "warn"), this._metaOpts = O.call(this), P.formats && k.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), P.keywords && x.call(this, P.keywords), typeof P.meta == "object" && this.addMetaSchema(P.meta), h.call(this), P.validateFormats = $;
      }
      _addVocabularies() {
        this.addKeyword("$async");
      }
      _addDefaultMetaSchema() {
        const { $data: P, meta: I, schemaId: N } = this.opts;
        let $ = _;
        N === "id" && ($ = { ..._ }, $.id = $.$id, delete $.$id), I && P && this.addMetaSchema($, $[N], !1);
      }
      defaultMeta() {
        const { meta: P, schemaId: I } = this.opts;
        return this.opts.defaultMeta = typeof P == "object" ? P[I] || P : void 0;
      }
      validate(P, I) {
        let N;
        if (typeof P == "string") {
          if (N = this.getSchema(P), !N)
            throw new Error(`no schema with key or ref "${P}"`);
        } else
          N = this.compile(P);
        const $ = N(I);
        return "$async" in N || (this.errors = N.errors), $;
      }
      compile(P, I) {
        const N = this._addSchema(P, I);
        return N.validate || this._compileSchemaEnv(N);
      }
      compileAsync(P, I) {
        if (typeof this.opts.loadSchema != "function")
          throw new Error("options.loadSchema should be a function");
        const { loadSchema: N } = this.opts;
        return $.call(this, P, I);
        async function $(oe, R) {
          await E.call(this, oe.$schema);
          const T = this._addSchema(oe, R);
          return T.validate || D.call(this, T);
        }
        async function E(oe) {
          oe && !this.getSchema(oe) && await $.call(this, { $ref: oe }, !0);
        }
        async function D(oe) {
          try {
            return this._compileSchemaEnv(oe);
          } catch (R) {
            if (!(R instanceof i.default))
              throw R;
            return H.call(this, R), await J.call(this, R.missingSchema), D.call(this, oe);
          }
        }
        function H({ missingSchema: oe, missingRef: R }) {
          if (this.refs[oe])
            throw new Error(`AnySchema ${oe} is loaded but ${R} cannot be resolved`);
        }
        async function J(oe) {
          const R = await ie.call(this, oe);
          this.refs[oe] || await E.call(this, R.$schema), this.refs[oe] || this.addSchema(R, oe, I);
        }
        async function ie(oe) {
          const R = this._loading[oe];
          if (R)
            return R;
          try {
            return await (this._loading[oe] = N(oe));
          } finally {
            delete this._loading[oe];
          }
        }
      }
      // Adds schema to the instance
      addSchema(P, I, N, $ = this.opts.validateSchema) {
        if (Array.isArray(P)) {
          for (const D of P)
            this.addSchema(D, void 0, N, $);
          return this;
        }
        let E;
        if (typeof P == "object") {
          const { schemaId: D } = this.opts;
          if (E = P[D], E !== void 0 && typeof E != "string")
            throw new Error(`schema ${D} must be string`);
        }
        return I = (0, d.normalizeId)(I || E), this._checkUnique(I), this.schemas[I] = this._addSchema(P, N, I, $, !0), this;
      }
      // Add schema that will be used to validate other schemas
      // options in META_IGNORE_OPTIONS are alway set to false
      addMetaSchema(P, I, N = this.opts.validateSchema) {
        return this.addSchema(P, I, !0, N), this;
      }
      //  Validate schema against its meta-schema
      validateSchema(P, I) {
        if (typeof P == "boolean")
          return !0;
        let N;
        if (N = P.$schema, N !== void 0 && typeof N != "string")
          throw new Error("$schema must be a string");
        if (N = N || this.opts.defaultMeta || this.defaultMeta(), !N)
          return this.logger.warn("meta-schema not available"), this.errors = null, !0;
        const $ = this.validate(N, P);
        if (!$ && I) {
          const E = "schema is invalid: " + this.errorsText();
          if (this.opts.validateSchema === "log")
            this.logger.error(E);
          else
            throw new Error(E);
        }
        return $;
      }
      // Get compiled schema by `key` or `ref`.
      // (`key` that was passed to `addSchema` or full schema reference - `schema.$id` or resolved id)
      getSchema(P) {
        let I;
        for (; typeof (I = l.call(this, P)) == "string"; )
          P = I;
        if (I === void 0) {
          const { schemaId: N } = this.opts, $ = new s.SchemaEnv({ schema: {}, schemaId: N });
          if (I = s.resolveSchema.call(this, $, P), !I)
            return;
          this.refs[P] = I;
        }
        return I.validate || this._compileSchemaEnv(I);
      }
      // Remove cached schema(s).
      // If no parameter is passed all schemas but meta-schemas are removed.
      // If RegExp is passed all schemas with key/id matching pattern but meta-schemas are removed.
      // Even if schema is referenced by other schemas it still can be removed as other schemas have local references.
      removeSchema(P) {
        if (P instanceof RegExp)
          return this._removeAllSchemas(this.schemas, P), this._removeAllSchemas(this.refs, P), this;
        switch (typeof P) {
          case "undefined":
            return this._removeAllSchemas(this.schemas), this._removeAllSchemas(this.refs), this._cache.clear(), this;
          case "string": {
            const I = l.call(this, P);
            return typeof I == "object" && this._cache.delete(I.schema), delete this.schemas[P], delete this.refs[P], this;
          }
          case "object": {
            const I = P;
            this._cache.delete(I);
            let N = P[this.opts.schemaId];
            return N && (N = (0, d.normalizeId)(N), delete this.schemas[N], delete this.refs[N]), this;
          }
          default:
            throw new Error("ajv.removeSchema: invalid parameter");
        }
      }
      // add "vocabulary" - a collection of keywords
      addVocabulary(P) {
        for (const I of P)
          this.addKeyword(I);
        return this;
      }
      addKeyword(P, I) {
        let N;
        if (typeof P == "string")
          N = P, typeof I == "object" && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), I.keyword = N);
        else if (typeof P == "object" && I === void 0) {
          if (I = P, N = I.keyword, Array.isArray(N) && !N.length)
            throw new Error("addKeywords: keyword must be string or non-empty array");
        } else
          throw new Error("invalid addKeywords parameters");
        if (W.call(this, N, I), !I)
          return (0, p.eachItem)(N, (E) => Z.call(this, E)), this;
        G.call(this, I);
        const $ = {
          ...I,
          type: (0, g.getJSONTypes)(I.type),
          schemaType: (0, g.getJSONTypes)(I.schemaType)
        };
        return (0, p.eachItem)(N, $.type.length === 0 ? (E) => Z.call(this, E, $) : (E) => $.type.forEach((D) => Z.call(this, E, $, D))), this;
      }
      getKeyword(P) {
        const I = this.RULES.all[P];
        return typeof I == "object" ? I.definition : !!I;
      }
      // Remove keyword
      removeKeyword(P) {
        const { RULES: I } = this;
        delete I.keywords[P], delete I.all[P];
        for (const N of I.rules) {
          const $ = N.rules.findIndex((E) => E.keyword === P);
          $ >= 0 && N.rules.splice($, 1);
        }
        return this;
      }
      // Add format
      addFormat(P, I) {
        return typeof I == "string" && (I = new RegExp(I)), this.formats[P] = I, this;
      }
      errorsText(P = this.errors, { separator: I = ", ", dataVar: N = "data" } = {}) {
        return !P || P.length === 0 ? "No errors" : P.map(($) => `${N}${$.instancePath} ${$.message}`).reduce(($, E) => $ + I + E);
      }
      $dataMetaSchema(P, I) {
        const N = this.RULES.all;
        P = JSON.parse(JSON.stringify(P));
        for (const $ of I) {
          const E = $.split("/").slice(1);
          let D = P;
          for (const H of E)
            D = D[H];
          for (const H in N) {
            const J = N[H];
            if (typeof J != "object")
              continue;
            const { $data: ie } = J.definition, oe = D[H];
            ie && oe && (D[H] = Q(oe));
          }
        }
        return P;
      }
      _removeAllSchemas(P, I) {
        for (const N in P) {
          const $ = P[N];
          (!I || I.test(N)) && (typeof $ == "string" ? delete P[N] : $ && !$.meta && (this._cache.delete($.schema), delete P[N]));
        }
      }
      _addSchema(P, I, N, $ = this.opts.validateSchema, E = this.opts.addUsedSchema) {
        let D;
        const { schemaId: H } = this.opts;
        if (typeof P == "object")
          D = P[H];
        else {
          if (this.opts.jtd)
            throw new Error("schema must be object");
          if (typeof P != "boolean")
            throw new Error("schema must be object or boolean");
        }
        let J = this._cache.get(P);
        if (J !== void 0)
          return J;
        N = (0, d.normalizeId)(D || N);
        const ie = d.getSchemaRefs.call(this, P, N);
        return J = new s.SchemaEnv({ schema: P, schemaId: H, meta: I, baseId: N, localRefs: ie }), this._cache.set(J.schema, J), E && !N.startsWith("#") && (N && this._checkUnique(N), this.refs[N] = J), $ && this.validateSchema(P, !0), J;
      }
      _checkUnique(P) {
        if (this.schemas[P] || this.refs[P])
          throw new Error(`schema with key or id "${P}" already exists`);
      }
      _compileSchemaEnv(P) {
        if (P.meta ? this._compileMetaSchema(P) : s.compileSchema.call(this, P), !P.validate)
          throw new Error("ajv implementation error");
        return P.validate;
      }
      _compileMetaSchema(P) {
        const I = this.opts;
        this.opts = this._metaOpts;
        try {
          s.compileSchema.call(this, P);
        } finally {
          this.opts = I;
        }
      }
    }
    C.ValidationError = r.default, C.MissingRefError = i.default, e.default = C;
    function c(V, P, I, N = "error") {
      for (const $ in V) {
        const E = $;
        E in P && this.logger[N](`${I}: option ${$}. ${V[E]}`);
      }
    }
    function l(V) {
      return V = (0, d.normalizeId)(V), this.schemas[V] || this.refs[V];
    }
    function h() {
      const V = this.opts.schemas;
      if (V)
        if (Array.isArray(V))
          this.addSchema(V);
        else
          for (const P in V)
            this.addSchema(V[P], P);
    }
    function k() {
      for (const V in this.opts.formats) {
        const P = this.opts.formats[V];
        P && this.addFormat(V, P);
      }
    }
    function x(V) {
      if (Array.isArray(V)) {
        this.addVocabulary(V);
        return;
      }
      this.logger.warn("keywords option as map is deprecated, pass array");
      for (const P in V) {
        const I = V[P];
        I.keyword || (I.keyword = P), this.addKeyword(I);
      }
    }
    function O() {
      const V = { ...this.opts };
      for (const P of S)
        delete V[P];
      return V;
    }
    const z = { log() {
    }, warn() {
    }, error() {
    } };
    function A(V) {
      if (V === !1)
        return z;
      if (V === void 0)
        return console;
      if (V.log && V.warn && V.error)
        return V;
      throw new Error("logger must implement log, warn and error methods");
    }
    const j = /^[a-z_$][a-z0-9_$:-]*$/i;
    function W(V, P) {
      const { RULES: I } = this;
      if ((0, p.eachItem)(V, (N) => {
        if (I.keywords[N])
          throw new Error(`Keyword ${N} is already defined`);
        if (!j.test(N))
          throw new Error(`Keyword ${N} has invalid name`);
      }), !!P && P.$data && !("code" in P || "validate" in P))
        throw new Error('$data keyword must have "code" or "validate" function');
    }
    function Z(V, P, I) {
      var N;
      const $ = P?.post;
      if (I && $)
        throw new Error('keyword with "post" flag cannot have "type"');
      const { RULES: E } = this;
      let D = $ ? E.post : E.rules.find(({ type: J }) => J === I);
      if (D || (D = { type: I, rules: [] }, E.rules.push(D)), E.keywords[V] = !0, !P)
        return;
      const H = {
        keyword: V,
        definition: {
          ...P,
          type: (0, g.getJSONTypes)(P.type),
          schemaType: (0, g.getJSONTypes)(P.schemaType)
        }
      };
      P.before ? L.call(this, D, H, P.before) : D.rules.push(H), E.all[V] = H, (N = P.implements) === null || N === void 0 || N.forEach((J) => this.addKeyword(J));
    }
    function L(V, P, I) {
      const N = V.rules.findIndex(($) => $.keyword === I);
      N >= 0 ? V.rules.splice(N, 0, P) : (V.rules.push(P), this.logger.warn(`rule ${I} is not defined`));
    }
    function G(V) {
      let { metaSchema: P } = V;
      P !== void 0 && (V.$data && this.opts.$data && (P = Q(P)), V.validateSchema = this.compile(P, !0));
    }
    const U = {
      $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
    };
    function Q(V) {
      return { anyOf: [V, U] };
    }
  })(Dn)), Dn;
}
var xt = {}, Pt = {}, At = {}, to;
function Ss() {
  if (to) return At;
  to = 1, Object.defineProperty(At, "__esModule", { value: !0 });
  const e = {
    keyword: "id",
    code() {
      throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
    }
  };
  return At.default = e, At;
}
var De = {}, no;
function cr() {
  if (no) return De;
  no = 1, Object.defineProperty(De, "__esModule", { value: !0 }), De.callRef = De.getValidate = void 0;
  const e = /* @__PURE__ */ On(), t = /* @__PURE__ */ Re(), n = /* @__PURE__ */ ee(), r = /* @__PURE__ */ Ae(), i = /* @__PURE__ */ Mn(), o = /* @__PURE__ */ re(), s = {
    keyword: "$ref",
    schemaType: "string",
    code(g) {
      const { gen: p, schema: _, it: b } = g, { baseId: v, schemaEnv: S, validateName: w, opts: f, self: y } = b, { root: u } = S;
      if ((_ === "#" || _ === "#/") && v === u.baseId)
        return C();
      const m = i.resolveRef.call(y, u, v, _);
      if (m === void 0)
        throw new e.default(b.opts.uriResolver, v, _);
      if (m instanceof i.SchemaEnv)
        return c(m);
      return l(m);
      function C() {
        if (S === u)
          return d(g, w, S, S.$async);
        const h = p.scopeValue("root", { ref: u });
        return d(g, (0, n._)`${h}.validate`, u, u.$async);
      }
      function c(h) {
        const k = a(g, h);
        d(g, k, h, h.$async);
      }
      function l(h) {
        const k = p.scopeValue("schema", f.code.source === !0 ? { ref: h, code: (0, n.stringify)(h) } : { ref: h }), x = p.name("valid"), O = g.subschema({
          schema: h,
          dataTypes: [],
          schemaPath: n.nil,
          topSchemaRef: k,
          errSchemaPath: _
        }, x);
        g.mergeEvaluated(O), g.ok(x);
      }
    }
  };
  function a(g, p) {
    const { gen: _ } = g;
    return p.validate ? _.scopeValue("validate", { ref: p.validate }) : (0, n._)`${_.scopeValue("wrapper", { ref: p })}.validate`;
  }
  De.getValidate = a;
  function d(g, p, _, b) {
    const { gen: v, it: S } = g, { allErrors: w, schemaEnv: f, opts: y } = S, u = y.passContext ? r.default.this : n.nil;
    b ? m() : C();
    function m() {
      if (!f.$async)
        throw new Error("async schema referenced by sync schema");
      const h = v.let("valid");
      v.try(() => {
        v.code((0, n._)`await ${(0, t.callValidateCode)(g, p, u)}`), l(p), w || v.assign(h, !0);
      }, (k) => {
        v.if((0, n._)`!(${k} instanceof ${S.ValidationError})`, () => v.throw(k)), c(k), w || v.assign(h, !1);
      }), g.ok(h);
    }
    function C() {
      g.result((0, t.callValidateCode)(g, p, u), () => l(p), () => c(p));
    }
    function c(h) {
      const k = (0, n._)`${h}.errors`;
      v.assign(r.default.vErrors, (0, n._)`${r.default.vErrors} === null ? ${k} : ${r.default.vErrors}.concat(${k})`), v.assign(r.default.errors, (0, n._)`${r.default.vErrors}.length`);
    }
    function l(h) {
      var k;
      if (!S.opts.unevaluated)
        return;
      const x = (k = _?.validate) === null || k === void 0 ? void 0 : k.evaluated;
      if (S.props !== !0)
        if (x && !x.dynamicProps)
          x.props !== void 0 && (S.props = o.mergeEvaluated.props(v, x.props, S.props));
        else {
          const O = v.var("props", (0, n._)`${h}.evaluated.props`);
          S.props = o.mergeEvaluated.props(v, O, S.props, n.Name);
        }
      if (S.items !== !0)
        if (x && !x.dynamicItems)
          x.items !== void 0 && (S.items = o.mergeEvaluated.items(v, x.items, S.items));
        else {
          const O = v.var("items", (0, n._)`${h}.evaluated.items`);
          S.items = o.mergeEvaluated.items(v, O, S.items, n.Name);
        }
    }
  }
  return De.callRef = d, De.default = s, De;
}
var ro;
function Cs() {
  if (ro) return Pt;
  ro = 1, Object.defineProperty(Pt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ss(), t = /* @__PURE__ */ cr(), n = [
    "$schema",
    "$id",
    "$defs",
    "$vocabulary",
    { keyword: "$comment" },
    "definitions",
    e.default,
    t.default
  ];
  return Pt.default = n, Pt;
}
var Rt = {}, Nt = {}, oo;
function ks() {
  if (oo) return Nt;
  oo = 1, Object.defineProperty(Nt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = e.operators, n = {
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
      const { keyword: s, data: a, schemaCode: d } = o;
      o.fail$data((0, e._)`${a} ${n[s].fail} ${d} || isNaN(${a})`);
    }
  };
  return Nt.default = i, Nt;
}
var Ft = {}, io;
function Es() {
  if (io) return Ft;
  io = 1, Object.defineProperty(Ft, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), n = {
    keyword: "multipleOf",
    type: "number",
    schemaType: "number",
    $data: !0,
    error: {
      message: ({ schemaCode: r }) => (0, e.str)`must be multiple of ${r}`,
      params: ({ schemaCode: r }) => (0, e._)`{multipleOf: ${r}}`
    },
    code(r) {
      const { gen: i, data: o, schemaCode: s, it: a } = r, d = a.opts.multipleOfPrecision, g = i.let("res"), p = d ? (0, e._)`Math.abs(Math.round(${g}) - ${g}) > 1e-${d}` : (0, e._)`${g} !== parseInt(${g})`;
      r.fail$data((0, e._)`(${s} === 0 || (${g} = ${o}/${s}, ${p}))`);
    }
  };
  return Ft.default = n, Ft;
}
var Ot = {}, Mt = {}, so;
function xs() {
  if (so) return Mt;
  so = 1, Object.defineProperty(Mt, "__esModule", { value: !0 });
  function e(t) {
    const n = t.length;
    let r = 0, i = 0, o;
    for (; i < n; )
      r++, o = t.charCodeAt(i++), o >= 55296 && o <= 56319 && i < n && (o = t.charCodeAt(i), (o & 64512) === 56320 && i++);
    return r;
  }
  return Mt.default = e, e.code = 'require("ajv/dist/runtime/ucs2length").default', Mt;
}
var ao;
function Ps() {
  if (ao) return Ot;
  ao = 1, Object.defineProperty(Ot, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ re(), n = /* @__PURE__ */ xs(), i = {
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
      const { keyword: s, data: a, schemaCode: d, it: g } = o, p = s === "maxLength" ? e.operators.GT : e.operators.LT, _ = g.opts.unicode === !1 ? (0, e._)`${a}.length` : (0, e._)`${(0, t.useFunc)(o.gen, n.default)}(${a})`;
      o.fail$data((0, e._)`${_} ${p} ${d}`);
    }
  };
  return Ot.default = i, Ot;
}
var Tt = {}, co;
function As() {
  if (co) return Tt;
  co = 1, Object.defineProperty(Tt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Re(), t = /* @__PURE__ */ re(), n = /* @__PURE__ */ ee(), i = {
    keyword: "pattern",
    type: "string",
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: o }) => (0, n.str)`must match pattern "${o}"`,
      params: ({ schemaCode: o }) => (0, n._)`{pattern: ${o}}`
    },
    code(o) {
      const { gen: s, data: a, $data: d, schema: g, schemaCode: p, it: _ } = o, b = _.opts.unicodeRegExp ? "u" : "";
      if (d) {
        const { regExp: v } = _.opts.code, S = v.code === "new RegExp" ? (0, n._)`new RegExp` : (0, t.useFunc)(s, v), w = s.let("valid");
        s.try(() => s.assign(w, (0, n._)`${S}(${p}, ${b}).test(${a})`), () => s.assign(w, !1)), o.fail$data((0, n._)`!${w}`);
      } else {
        const v = (0, e.usePattern)(o, g);
        o.fail$data((0, n._)`!${v}.test(${a})`);
      }
    }
  };
  return Tt.default = i, Tt;
}
var jt = {}, lo;
function Rs() {
  if (lo) return jt;
  lo = 1, Object.defineProperty(jt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), n = {
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
  return jt.default = n, jt;
}
var zt = {}, uo;
function Ns() {
  if (uo) return zt;
  uo = 1, Object.defineProperty(zt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Re(), t = /* @__PURE__ */ ee(), n = /* @__PURE__ */ re(), i = {
    keyword: "required",
    type: "object",
    schemaType: "array",
    $data: !0,
    error: {
      message: ({ params: { missingProperty: o } }) => (0, t.str)`must have required property '${o}'`,
      params: ({ params: { missingProperty: o } }) => (0, t._)`{missingProperty: ${o}}`
    },
    code(o) {
      const { gen: s, schema: a, schemaCode: d, data: g, $data: p, it: _ } = o, { opts: b } = _;
      if (!p && a.length === 0)
        return;
      const v = a.length >= b.loopRequired;
      if (_.allErrors ? S() : w(), b.strictRequired) {
        const u = o.parentSchema.properties, { definedProperties: m } = o.it;
        for (const C of a)
          if (u?.[C] === void 0 && !m.has(C)) {
            const c = _.schemaEnv.baseId + _.errSchemaPath, l = `required property "${C}" is not defined at "${c}" (strictRequired)`;
            (0, n.checkStrictMode)(_, l, _.opts.strictRequired);
          }
      }
      function S() {
        if (v || p)
          o.block$data(t.nil, f);
        else
          for (const u of a)
            (0, e.checkReportMissingProp)(o, u);
      }
      function w() {
        const u = s.let("missing");
        if (v || p) {
          const m = s.let("valid", !0);
          o.block$data(m, () => y(u, m)), o.ok(m);
        } else
          s.if((0, e.checkMissingProp)(o, a, u)), (0, e.reportMissingProp)(o, u), s.else();
      }
      function f() {
        s.forOf("prop", d, (u) => {
          o.setParams({ missingProperty: u }), s.if((0, e.noPropertyInData)(s, g, u, b.ownProperties), () => o.error());
        });
      }
      function y(u, m) {
        o.setParams({ missingProperty: u }), s.forOf(u, d, () => {
          s.assign(m, (0, e.propertyInData)(s, g, u, b.ownProperties)), s.if((0, t.not)(m), () => {
            o.error(), s.break();
          });
        }, t.nil);
      }
    }
  };
  return zt.default = i, zt;
}
var It = {}, fo;
function Fs() {
  if (fo) return It;
  fo = 1, Object.defineProperty(It, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), n = {
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
  return It.default = n, It;
}
var Dt = {}, qt = {}, po;
function lr() {
  if (po) return qt;
  po = 1, Object.defineProperty(qt, "__esModule", { value: !0 });
  const e = _i();
  return e.code = 'require("ajv/dist/runtime/equal").default', qt.default = e, qt;
}
var ho;
function Os() {
  if (ho) return Dt;
  ho = 1, Object.defineProperty(Dt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ xn(), t = /* @__PURE__ */ ee(), n = /* @__PURE__ */ re(), r = /* @__PURE__ */ lr(), o = {
    keyword: "uniqueItems",
    type: "array",
    schemaType: "boolean",
    $data: !0,
    error: {
      message: ({ params: { i: s, j: a } }) => (0, t.str)`must NOT have duplicate items (items ## ${a} and ${s} are identical)`,
      params: ({ params: { i: s, j: a } }) => (0, t._)`{i: ${s}, j: ${a}}`
    },
    code(s) {
      const { gen: a, data: d, $data: g, schema: p, parentSchema: _, schemaCode: b, it: v } = s;
      if (!g && !p)
        return;
      const S = a.let("valid"), w = _.items ? (0, e.getSchemaTypes)(_.items) : [];
      s.block$data(S, f, (0, t._)`${b} === false`), s.ok(S);
      function f() {
        const C = a.let("i", (0, t._)`${d}.length`), c = a.let("j");
        s.setParams({ i: C, j: c }), a.assign(S, !0), a.if((0, t._)`${C} > 1`, () => (y() ? u : m)(C, c));
      }
      function y() {
        return w.length > 0 && !w.some((C) => C === "object" || C === "array");
      }
      function u(C, c) {
        const l = a.name("item"), h = (0, e.checkDataTypes)(w, l, v.opts.strictNumbers, e.DataType.Wrong), k = a.const("indices", (0, t._)`{}`);
        a.for((0, t._)`;${C}--;`, () => {
          a.let(l, (0, t._)`${d}[${C}]`), a.if(h, (0, t._)`continue`), w.length > 1 && a.if((0, t._)`typeof ${l} == "string"`, (0, t._)`${l} += "_"`), a.if((0, t._)`typeof ${k}[${l}] == "number"`, () => {
            a.assign(c, (0, t._)`${k}[${l}]`), s.error(), a.assign(S, !1).break();
          }).code((0, t._)`${k}[${l}] = ${C}`);
        });
      }
      function m(C, c) {
        const l = (0, n.useFunc)(a, r.default), h = a.name("outer");
        a.label(h).for((0, t._)`;${C}--;`, () => a.for((0, t._)`${c} = ${C}; ${c}--;`, () => a.if((0, t._)`${l}(${d}[${C}], ${d}[${c}])`, () => {
          s.error(), a.assign(S, !1).break(h);
        })));
      }
    }
  };
  return Dt.default = o, Dt;
}
var Vt = {}, mo;
function Ms() {
  if (mo) return Vt;
  mo = 1, Object.defineProperty(Vt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ re(), n = /* @__PURE__ */ lr(), i = {
    keyword: "const",
    $data: !0,
    error: {
      message: "must be equal to constant",
      params: ({ schemaCode: o }) => (0, e._)`{allowedValue: ${o}}`
    },
    code(o) {
      const { gen: s, data: a, $data: d, schemaCode: g, schema: p } = o;
      d || p && typeof p == "object" ? o.fail$data((0, e._)`!${(0, t.useFunc)(s, n.default)}(${a}, ${g})`) : o.fail((0, e._)`${p} !== ${a}`);
    }
  };
  return Vt.default = i, Vt;
}
var Bt = {}, go;
function Ts() {
  if (go) return Bt;
  go = 1, Object.defineProperty(Bt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ re(), n = /* @__PURE__ */ lr(), i = {
    keyword: "enum",
    schemaType: "array",
    $data: !0,
    error: {
      message: "must be equal to one of the allowed values",
      params: ({ schemaCode: o }) => (0, e._)`{allowedValues: ${o}}`
    },
    code(o) {
      const { gen: s, data: a, $data: d, schema: g, schemaCode: p, it: _ } = o;
      if (!d && g.length === 0)
        throw new Error("enum must have non-empty array");
      const b = g.length >= _.opts.loopEnum;
      let v;
      const S = () => v ?? (v = (0, t.useFunc)(s, n.default));
      let w;
      if (b || d)
        w = s.let("valid"), o.block$data(w, f);
      else {
        if (!Array.isArray(g))
          throw new Error("ajv implementation error");
        const u = s.const("vSchema", p);
        w = (0, e.or)(...g.map((m, C) => y(u, C)));
      }
      o.pass(w);
      function f() {
        s.assign(w, !1), s.forOf("v", p, (u) => s.if((0, e._)`${S()}(${a}, ${u})`, () => s.assign(w, !0).break()));
      }
      function y(u, m) {
        const C = g[m];
        return typeof C == "object" && C !== null ? (0, e._)`${S()}(${a}, ${u}[${m}])` : (0, e._)`${a} === ${C}`;
      }
    }
  };
  return Bt.default = i, Bt;
}
var yo;
function js() {
  if (yo) return Rt;
  yo = 1, Object.defineProperty(Rt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ks(), t = /* @__PURE__ */ Es(), n = /* @__PURE__ */ Ps(), r = /* @__PURE__ */ As(), i = /* @__PURE__ */ Rs(), o = /* @__PURE__ */ Ns(), s = /* @__PURE__ */ Fs(), a = /* @__PURE__ */ Os(), d = /* @__PURE__ */ Ms(), g = /* @__PURE__ */ Ts(), p = [
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
    d.default,
    g.default
  ];
  return Rt.default = p, Rt;
}
var Lt = {}, Xe = {}, vo;
function Ci() {
  if (vo) return Xe;
  vo = 1, Object.defineProperty(Xe, "__esModule", { value: !0 }), Xe.validateAdditionalItems = void 0;
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ re(), r = {
    keyword: "additionalItems",
    type: "array",
    schemaType: ["boolean", "object"],
    before: "uniqueItems",
    error: {
      message: ({ params: { len: o } }) => (0, e.str)`must NOT have more than ${o} items`,
      params: ({ params: { len: o } }) => (0, e._)`{limit: ${o}}`
    },
    code(o) {
      const { parentSchema: s, it: a } = o, { items: d } = s;
      if (!Array.isArray(d)) {
        (0, t.checkStrictMode)(a, '"additionalItems" is ignored when "items" is not an array of schemas');
        return;
      }
      i(o, d);
    }
  };
  function i(o, s) {
    const { gen: a, schema: d, data: g, keyword: p, it: _ } = o;
    _.items = !0;
    const b = a.const("len", (0, e._)`${g}.length`);
    if (d === !1)
      o.setParams({ len: s.length }), o.pass((0, e._)`${b} <= ${s.length}`);
    else if (typeof d == "object" && !(0, t.alwaysValidSchema)(_, d)) {
      const S = a.var("valid", (0, e._)`${b} <= ${s.length}`);
      a.if((0, e.not)(S), () => v(S)), o.ok(S);
    }
    function v(S) {
      a.forRange("i", s.length, b, (w) => {
        o.subschema({ keyword: p, dataProp: w, dataPropType: t.Type.Num }, S), _.allErrors || a.if((0, e.not)(S), () => a.break());
      });
    }
  }
  return Xe.validateAdditionalItems = i, Xe.default = r, Xe;
}
var Ut = {}, Ze = {}, $o;
function ki() {
  if ($o) return Ze;
  $o = 1, Object.defineProperty(Ze, "__esModule", { value: !0 }), Ze.validateTuple = void 0;
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ re(), n = /* @__PURE__ */ Re(), r = {
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
    const { gen: d, parentSchema: g, data: p, keyword: _, it: b } = o;
    w(g), b.opts.unevaluated && a.length && b.items !== !0 && (b.items = t.mergeEvaluated.items(d, a.length, b.items));
    const v = d.name("valid"), S = d.const("len", (0, e._)`${p}.length`);
    a.forEach((f, y) => {
      (0, t.alwaysValidSchema)(b, f) || (d.if((0, e._)`${S} > ${y}`, () => o.subschema({
        keyword: _,
        schemaProp: y,
        dataProp: y
      }, v)), o.ok(v));
    });
    function w(f) {
      const { opts: y, errSchemaPath: u } = b, m = a.length, C = m === f.minItems && (m === f.maxItems || f[s] === !1);
      if (y.strictTuples && !C) {
        const c = `"${_}" is ${m}-tuple, but minItems or maxItems/${s} are not specified or different at path "${u}"`;
        (0, t.checkStrictMode)(b, c, y.strictTuples);
      }
    }
  }
  return Ze.validateTuple = i, Ze.default = r, Ze;
}
var bo;
function zs() {
  if (bo) return Ut;
  bo = 1, Object.defineProperty(Ut, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ki(), t = {
    keyword: "prefixItems",
    type: "array",
    schemaType: ["array"],
    before: "uniqueItems",
    code: (n) => (0, e.validateTuple)(n, "items")
  };
  return Ut.default = t, Ut;
}
var Kt = {}, wo;
function Is() {
  if (wo) return Kt;
  wo = 1, Object.defineProperty(Kt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ re(), n = /* @__PURE__ */ Re(), r = /* @__PURE__ */ Ci(), o = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    error: {
      message: ({ params: { len: s } }) => (0, e.str)`must NOT have more than ${s} items`,
      params: ({ params: { len: s } }) => (0, e._)`{limit: ${s}}`
    },
    code(s) {
      const { schema: a, parentSchema: d, it: g } = s, { prefixItems: p } = d;
      g.items = !0, !(0, t.alwaysValidSchema)(g, a) && (p ? (0, r.validateAdditionalItems)(s, p) : s.ok((0, n.validateArray)(s)));
    }
  };
  return Kt.default = o, Kt;
}
var Ht = {}, _o;
function Ds() {
  if (_o) return Ht;
  _o = 1, Object.defineProperty(Ht, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ re(), r = {
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
      const { gen: o, schema: s, parentSchema: a, data: d, it: g } = i;
      let p, _;
      const { minContains: b, maxContains: v } = a;
      g.opts.next ? (p = b === void 0 ? 1 : b, _ = v) : p = 1;
      const S = o.const("len", (0, e._)`${d}.length`);
      if (i.setParams({ min: p, max: _ }), _ === void 0 && p === 0) {
        (0, t.checkStrictMode)(g, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
        return;
      }
      if (_ !== void 0 && p > _) {
        (0, t.checkStrictMode)(g, '"minContains" > "maxContains" is always invalid'), i.fail();
        return;
      }
      if ((0, t.alwaysValidSchema)(g, s)) {
        let m = (0, e._)`${S} >= ${p}`;
        _ !== void 0 && (m = (0, e._)`${m} && ${S} <= ${_}`), i.pass(m);
        return;
      }
      g.items = !0;
      const w = o.name("valid");
      _ === void 0 && p === 1 ? y(w, () => o.if(w, () => o.break())) : p === 0 ? (o.let(w, !0), _ !== void 0 && o.if((0, e._)`${d}.length > 0`, f)) : (o.let(w, !1), f()), i.result(w, () => i.reset());
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
        o.code((0, e._)`${m}++`), _ === void 0 ? o.if((0, e._)`${m} >= ${p}`, () => o.assign(w, !0).break()) : (o.if((0, e._)`${m} > ${_}`, () => o.assign(w, !1).break()), p === 1 ? o.assign(w, !0) : o.if((0, e._)`${m} >= ${p}`, () => o.assign(w, !0)));
      }
    }
  };
  return Ht.default = r, Ht;
}
var Wn = {}, So;
function dr() {
  return So || (So = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
    const t = /* @__PURE__ */ ee(), n = /* @__PURE__ */ re(), r = /* @__PURE__ */ Re();
    e.error = {
      message: ({ params: { property: d, depsCount: g, deps: p } }) => {
        const _ = g === 1 ? "property" : "properties";
        return (0, t.str)`must have ${_} ${p} when property ${d} is present`;
      },
      params: ({ params: { property: d, depsCount: g, deps: p, missingProperty: _ } }) => (0, t._)`{property: ${d},
    missingProperty: ${_},
    depsCount: ${g},
    deps: ${p}}`
      // TODO change to reference
    };
    const i = {
      keyword: "dependencies",
      type: "object",
      schemaType: "object",
      error: e.error,
      code(d) {
        const [g, p] = o(d);
        s(d, g), a(d, p);
      }
    };
    function o({ schema: d }) {
      const g = {}, p = {};
      for (const _ in d) {
        if (_ === "__proto__")
          continue;
        const b = Array.isArray(d[_]) ? g : p;
        b[_] = d[_];
      }
      return [g, p];
    }
    function s(d, g = d.schema) {
      const { gen: p, data: _, it: b } = d;
      if (Object.keys(g).length === 0)
        return;
      const v = p.let("missing");
      for (const S in g) {
        const w = g[S];
        if (w.length === 0)
          continue;
        const f = (0, r.propertyInData)(p, _, S, b.opts.ownProperties);
        d.setParams({
          property: S,
          depsCount: w.length,
          deps: w.join(", ")
        }), b.allErrors ? p.if(f, () => {
          for (const y of w)
            (0, r.checkReportMissingProp)(d, y);
        }) : (p.if((0, t._)`${f} && (${(0, r.checkMissingProp)(d, w, v)})`), (0, r.reportMissingProp)(d, v), p.else());
      }
    }
    e.validatePropertyDeps = s;
    function a(d, g = d.schema) {
      const { gen: p, data: _, keyword: b, it: v } = d, S = p.name("valid");
      for (const w in g)
        (0, n.alwaysValidSchema)(v, g[w]) || (p.if(
          (0, r.propertyInData)(p, _, w, v.opts.ownProperties),
          () => {
            const f = d.subschema({ keyword: b, schemaProp: w }, S);
            d.mergeValidEvaluated(f, S);
          },
          () => p.var(S, !0)
          // TODO var
        ), d.ok(S));
    }
    e.validateSchemaDeps = a, e.default = i;
  })(Wn)), Wn;
}
var Gt = {}, Co;
function qs() {
  if (Co) return Gt;
  Co = 1, Object.defineProperty(Gt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ re(), r = {
    keyword: "propertyNames",
    type: "object",
    schemaType: ["object", "boolean"],
    error: {
      message: "property name must be valid",
      params: ({ params: i }) => (0, e._)`{propertyName: ${i.propertyName}}`
    },
    code(i) {
      const { gen: o, schema: s, data: a, it: d } = i;
      if ((0, t.alwaysValidSchema)(d, s))
        return;
      const g = o.name("valid");
      o.forIn("key", a, (p) => {
        i.setParams({ propertyName: p }), i.subschema({
          keyword: "propertyNames",
          data: p,
          dataTypes: ["string"],
          propertyName: p,
          compositeRule: !0
        }, g), o.if((0, e.not)(g), () => {
          i.error(!0), d.allErrors || o.break();
        });
      }), i.ok(g);
    }
  };
  return Gt.default = r, Gt;
}
var Wt = {}, ko;
function Ei() {
  if (ko) return Wt;
  ko = 1, Object.defineProperty(Wt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Re(), t = /* @__PURE__ */ ee(), n = /* @__PURE__ */ Ae(), r = /* @__PURE__ */ re(), o = {
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
      const { gen: a, schema: d, parentSchema: g, data: p, errsCount: _, it: b } = s;
      if (!_)
        throw new Error("ajv implementation error");
      const { allErrors: v, opts: S } = b;
      if (b.props = !0, S.removeAdditional !== "all" && (0, r.alwaysValidSchema)(b, d))
        return;
      const w = (0, e.allSchemaProperties)(g.properties), f = (0, e.allSchemaProperties)(g.patternProperties);
      y(), s.ok((0, t._)`${_} === ${n.default.errors}`);
      function y() {
        a.forIn("key", p, (l) => {
          !w.length && !f.length ? C(l) : a.if(u(l), () => C(l));
        });
      }
      function u(l) {
        let h;
        if (w.length > 8) {
          const k = (0, r.schemaRefOrVal)(b, g.properties, "properties");
          h = (0, e.isOwnProperty)(a, k, l);
        } else w.length ? h = (0, t.or)(...w.map((k) => (0, t._)`${l} === ${k}`)) : h = t.nil;
        return f.length && (h = (0, t.or)(h, ...f.map((k) => (0, t._)`${(0, e.usePattern)(s, k)}.test(${l})`))), (0, t.not)(h);
      }
      function m(l) {
        a.code((0, t._)`delete ${p}[${l}]`);
      }
      function C(l) {
        if (S.removeAdditional === "all" || S.removeAdditional && d === !1) {
          m(l);
          return;
        }
        if (d === !1) {
          s.setParams({ additionalProperty: l }), s.error(), v || a.break();
          return;
        }
        if (typeof d == "object" && !(0, r.alwaysValidSchema)(b, d)) {
          const h = a.name("valid");
          S.removeAdditional === "failing" ? (c(l, h, !1), a.if((0, t.not)(h), () => {
            s.reset(), m(l);
          })) : (c(l, h), v || a.if((0, t.not)(h), () => a.break()));
        }
      }
      function c(l, h, k) {
        const x = {
          keyword: "additionalProperties",
          dataProp: l,
          dataPropType: r.Type.Str
        };
        k === !1 && Object.assign(x, {
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }), s.subschema(x, h);
      }
    }
  };
  return Wt.default = o, Wt;
}
var Jt = {}, Eo;
function Vs() {
  if (Eo) return Jt;
  Eo = 1, Object.defineProperty(Jt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Fn(), t = /* @__PURE__ */ Re(), n = /* @__PURE__ */ re(), r = /* @__PURE__ */ Ei(), i = {
    keyword: "properties",
    type: "object",
    schemaType: "object",
    code(o) {
      const { gen: s, schema: a, parentSchema: d, data: g, it: p } = o;
      p.opts.removeAdditional === "all" && d.additionalProperties === void 0 && r.default.code(new e.KeywordCxt(p, r.default, "additionalProperties"));
      const _ = (0, t.allSchemaProperties)(a);
      for (const f of _)
        p.definedProperties.add(f);
      p.opts.unevaluated && _.length && p.props !== !0 && (p.props = n.mergeEvaluated.props(s, (0, n.toHash)(_), p.props));
      const b = _.filter((f) => !(0, n.alwaysValidSchema)(p, a[f]));
      if (b.length === 0)
        return;
      const v = s.name("valid");
      for (const f of b)
        S(f) ? w(f) : (s.if((0, t.propertyInData)(s, g, f, p.opts.ownProperties)), w(f), p.allErrors || s.else().var(v, !0), s.endIf()), o.it.definedProperties.add(f), o.ok(v);
      function S(f) {
        return p.opts.useDefaults && !p.compositeRule && a[f].default !== void 0;
      }
      function w(f) {
        o.subschema({
          keyword: "properties",
          schemaProp: f,
          dataProp: f
        }, v);
      }
    }
  };
  return Jt.default = i, Jt;
}
var Yt = {}, xo;
function Bs() {
  if (xo) return Yt;
  xo = 1, Object.defineProperty(Yt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Re(), t = /* @__PURE__ */ ee(), n = /* @__PURE__ */ re(), r = /* @__PURE__ */ re(), i = {
    keyword: "patternProperties",
    type: "object",
    schemaType: "object",
    code(o) {
      const { gen: s, schema: a, data: d, parentSchema: g, it: p } = o, { opts: _ } = p, b = (0, e.allSchemaProperties)(a), v = b.filter((C) => (0, n.alwaysValidSchema)(p, a[C]));
      if (b.length === 0 || v.length === b.length && (!p.opts.unevaluated || p.props === !0))
        return;
      const S = _.strictSchema && !_.allowMatchingProperties && g.properties, w = s.name("valid");
      p.props !== !0 && !(p.props instanceof t.Name) && (p.props = (0, r.evaluatedPropsToName)(s, p.props));
      const { props: f } = p;
      y();
      function y() {
        for (const C of b)
          S && u(C), p.allErrors ? m(C) : (s.var(w, !0), m(C), s.if(w));
      }
      function u(C) {
        for (const c in S)
          new RegExp(C).test(c) && (0, n.checkStrictMode)(p, `property ${c} matches pattern ${C} (use allowMatchingProperties)`);
      }
      function m(C) {
        s.forIn("key", d, (c) => {
          s.if((0, t._)`${(0, e.usePattern)(o, C)}.test(${c})`, () => {
            const l = v.includes(C);
            l || o.subschema({
              keyword: "patternProperties",
              schemaProp: C,
              dataProp: c,
              dataPropType: r.Type.Str
            }, w), p.opts.unevaluated && f !== !0 ? s.assign((0, t._)`${f}[${c}]`, !0) : !l && !p.allErrors && s.if((0, t.not)(w), () => s.break());
          });
        });
      }
    }
  };
  return Yt.default = i, Yt;
}
var Xt = {}, Po;
function Ls() {
  if (Po) return Xt;
  Po = 1, Object.defineProperty(Xt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ re(), t = {
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
  return Xt.default = t, Xt;
}
var Zt = {}, Ao;
function Us() {
  if (Ao) return Zt;
  Ao = 1, Object.defineProperty(Zt, "__esModule", { value: !0 });
  const t = {
    keyword: "anyOf",
    schemaType: "array",
    trackErrors: !0,
    code: (/* @__PURE__ */ Re()).validateUnion,
    error: { message: "must match a schema in anyOf" }
  };
  return Zt.default = t, Zt;
}
var Qt = {}, Ro;
function Ks() {
  if (Ro) return Qt;
  Ro = 1, Object.defineProperty(Qt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ re(), r = {
    keyword: "oneOf",
    schemaType: "array",
    trackErrors: !0,
    error: {
      message: "must match exactly one schema in oneOf",
      params: ({ params: i }) => (0, e._)`{passingSchemas: ${i.passing}}`
    },
    code(i) {
      const { gen: o, schema: s, parentSchema: a, it: d } = i;
      if (!Array.isArray(s))
        throw new Error("ajv implementation error");
      if (d.opts.discriminator && a.discriminator)
        return;
      const g = s, p = o.let("valid", !1), _ = o.let("passing", null), b = o.name("_valid");
      i.setParams({ passing: _ }), o.block(v), i.result(p, () => i.reset(), () => i.error(!0));
      function v() {
        g.forEach((S, w) => {
          let f;
          (0, t.alwaysValidSchema)(d, S) ? o.var(b, !0) : f = i.subschema({
            keyword: "oneOf",
            schemaProp: w,
            compositeRule: !0
          }, b), w > 0 && o.if((0, e._)`${b} && ${p}`).assign(p, !1).assign(_, (0, e._)`[${_}, ${w}]`).else(), o.if(b, () => {
            o.assign(p, !0), o.assign(_, w), f && i.mergeEvaluated(f, e.Name);
          });
        });
      }
    }
  };
  return Qt.default = r, Qt;
}
var en = {}, No;
function Hs() {
  if (No) return en;
  No = 1, Object.defineProperty(en, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ re(), t = {
    keyword: "allOf",
    schemaType: "array",
    code(n) {
      const { gen: r, schema: i, it: o } = n;
      if (!Array.isArray(i))
        throw new Error("ajv implementation error");
      const s = r.name("valid");
      i.forEach((a, d) => {
        if ((0, e.alwaysValidSchema)(o, a))
          return;
        const g = n.subschema({ keyword: "allOf", schemaProp: d }, s);
        n.ok(s), n.mergeEvaluated(g);
      });
    }
  };
  return en.default = t, en;
}
var tn = {}, Fo;
function Gs() {
  if (Fo) return tn;
  Fo = 1, Object.defineProperty(tn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ re(), r = {
    keyword: "if",
    schemaType: ["object", "boolean"],
    trackErrors: !0,
    error: {
      message: ({ params: o }) => (0, e.str)`must match "${o.ifClause}" schema`,
      params: ({ params: o }) => (0, e._)`{failingKeyword: ${o.ifClause}}`
    },
    code(o) {
      const { gen: s, parentSchema: a, it: d } = o;
      a.then === void 0 && a.else === void 0 && (0, t.checkStrictMode)(d, '"if" without "then" and "else" is ignored');
      const g = i(d, "then"), p = i(d, "else");
      if (!g && !p)
        return;
      const _ = s.let("valid", !0), b = s.name("_valid");
      if (v(), o.reset(), g && p) {
        const w = s.let("ifClause");
        o.setParams({ ifClause: w }), s.if(b, S("then", w), S("else", w));
      } else g ? s.if(b, S("then")) : s.if((0, e.not)(b), S("else"));
      o.pass(_, () => o.error(!0));
      function v() {
        const w = o.subschema({
          keyword: "if",
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }, b);
        o.mergeEvaluated(w);
      }
      function S(w, f) {
        return () => {
          const y = o.subschema({ keyword: w }, b);
          s.assign(_, b), o.mergeValidEvaluated(y, _), f ? s.assign(f, (0, e._)`${w}`) : o.setParams({ ifClause: w });
        };
      }
    }
  };
  function i(o, s) {
    const a = o.schema[s];
    return a !== void 0 && !(0, t.alwaysValidSchema)(o, a);
  }
  return tn.default = r, tn;
}
var nn = {}, Oo;
function Ws() {
  if (Oo) return nn;
  Oo = 1, Object.defineProperty(nn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ re(), t = {
    keyword: ["then", "else"],
    schemaType: ["object", "boolean"],
    code({ keyword: n, parentSchema: r, it: i }) {
      r.if === void 0 && (0, e.checkStrictMode)(i, `"${n}" without "if" is ignored`);
    }
  };
  return nn.default = t, nn;
}
var Mo;
function Js() {
  if (Mo) return Lt;
  Mo = 1, Object.defineProperty(Lt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ci(), t = /* @__PURE__ */ zs(), n = /* @__PURE__ */ ki(), r = /* @__PURE__ */ Is(), i = /* @__PURE__ */ Ds(), o = /* @__PURE__ */ dr(), s = /* @__PURE__ */ qs(), a = /* @__PURE__ */ Ei(), d = /* @__PURE__ */ Vs(), g = /* @__PURE__ */ Bs(), p = /* @__PURE__ */ Ls(), _ = /* @__PURE__ */ Us(), b = /* @__PURE__ */ Ks(), v = /* @__PURE__ */ Hs(), S = /* @__PURE__ */ Gs(), w = /* @__PURE__ */ Ws();
  function f(y = !1) {
    const u = [
      // any
      p.default,
      _.default,
      b.default,
      v.default,
      S.default,
      w.default,
      // object
      s.default,
      a.default,
      o.default,
      d.default,
      g.default
    ];
    return y ? u.push(t.default, r.default) : u.push(e.default, n.default), u.push(i.default), u;
  }
  return Lt.default = f, Lt;
}
var rn = {}, Qe = {}, To;
function xi() {
  if (To) return Qe;
  To = 1, Object.defineProperty(Qe, "__esModule", { value: !0 }), Qe.dynamicAnchor = void 0;
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ Ae(), n = /* @__PURE__ */ Mn(), r = /* @__PURE__ */ cr(), i = {
    keyword: "$dynamicAnchor",
    schemaType: "string",
    code: (a) => o(a, a.schema)
  };
  function o(a, d) {
    const { gen: g, it: p } = a;
    p.schemaEnv.root.dynamicAnchors[d] = !0;
    const _ = (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(d)}`, b = p.errSchemaPath === "#" ? p.validateName : s(a);
    g.if((0, e._)`!${_}`, () => g.assign(_, b));
  }
  Qe.dynamicAnchor = o;
  function s(a) {
    const { schemaEnv: d, schema: g, self: p } = a.it, { root: _, baseId: b, localRefs: v, meta: S } = d.root, { schemaId: w } = p.opts, f = new n.SchemaEnv({ schema: g, schemaId: w, root: _, baseId: b, localRefs: v, meta: S });
    return n.compileSchema.call(p, f), (0, r.getValidate)(a, f);
  }
  return Qe.default = i, Qe;
}
var et = {}, jo;
function Pi() {
  if (jo) return et;
  jo = 1, Object.defineProperty(et, "__esModule", { value: !0 }), et.dynamicRef = void 0;
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ Ae(), n = /* @__PURE__ */ cr(), r = {
    keyword: "$dynamicRef",
    schemaType: "string",
    code: (o) => i(o, o.schema)
  };
  function i(o, s) {
    const { gen: a, keyword: d, it: g } = o;
    if (s[0] !== "#")
      throw new Error(`"${d}" only supports hash fragment reference`);
    const p = s.slice(1);
    if (g.allErrors)
      _();
    else {
      const v = a.let("valid", !1);
      _(v), o.ok(v);
    }
    function _(v) {
      if (g.schemaEnv.root.dynamicAnchors[p]) {
        const S = a.let("_v", (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(p)}`);
        a.if(S, b(S, v), b(g.validateName, v));
      } else
        b(g.validateName, v)();
    }
    function b(v, S) {
      return S ? () => a.block(() => {
        (0, n.callRef)(o, v), a.let(S, !0);
      }) : () => (0, n.callRef)(o, v);
    }
  }
  return et.dynamicRef = i, et.default = r, et;
}
var on = {}, zo;
function Ys() {
  if (zo) return on;
  zo = 1, Object.defineProperty(on, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ xi(), t = /* @__PURE__ */ re(), n = {
    keyword: "$recursiveAnchor",
    schemaType: "boolean",
    code(r) {
      r.schema ? (0, e.dynamicAnchor)(r, "") : (0, t.checkStrictMode)(r.it, "$recursiveAnchor: false is ignored");
    }
  };
  return on.default = n, on;
}
var sn = {}, Io;
function Xs() {
  if (Io) return sn;
  Io = 1, Object.defineProperty(sn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Pi(), t = {
    keyword: "$recursiveRef",
    schemaType: "string",
    code: (n) => (0, e.dynamicRef)(n, n.schema)
  };
  return sn.default = t, sn;
}
var Do;
function Zs() {
  if (Do) return rn;
  Do = 1, Object.defineProperty(rn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ xi(), t = /* @__PURE__ */ Pi(), n = /* @__PURE__ */ Ys(), r = /* @__PURE__ */ Xs(), i = [e.default, t.default, n.default, r.default];
  return rn.default = i, rn;
}
var an = {}, cn = {}, qo;
function Qs() {
  if (qo) return cn;
  qo = 1, Object.defineProperty(cn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ dr(), t = {
    keyword: "dependentRequired",
    type: "object",
    schemaType: "object",
    error: e.error,
    code: (n) => (0, e.validatePropertyDeps)(n)
  };
  return cn.default = t, cn;
}
var ln = {}, Vo;
function ea() {
  if (Vo) return ln;
  Vo = 1, Object.defineProperty(ln, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ dr(), t = {
    keyword: "dependentSchemas",
    type: "object",
    schemaType: "object",
    code: (n) => (0, e.validateSchemaDeps)(n)
  };
  return ln.default = t, ln;
}
var dn = {}, Bo;
function ta() {
  if (Bo) return dn;
  Bo = 1, Object.defineProperty(dn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ re(), t = {
    keyword: ["maxContains", "minContains"],
    type: "array",
    schemaType: "number",
    code({ keyword: n, parentSchema: r, it: i }) {
      r.contains === void 0 && (0, e.checkStrictMode)(i, `"${n}" without "contains" is ignored`);
    }
  };
  return dn.default = t, dn;
}
var Lo;
function na() {
  if (Lo) return an;
  Lo = 1, Object.defineProperty(an, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Qs(), t = /* @__PURE__ */ ea(), n = /* @__PURE__ */ ta(), r = [e.default, t.default, n.default];
  return an.default = r, an;
}
var un = {}, fn = {}, Uo;
function ra() {
  if (Uo) return fn;
  Uo = 1, Object.defineProperty(fn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ re(), n = /* @__PURE__ */ Ae(), i = {
    keyword: "unevaluatedProperties",
    type: "object",
    schemaType: ["boolean", "object"],
    trackErrors: !0,
    error: {
      message: "must NOT have unevaluated properties",
      params: ({ params: o }) => (0, e._)`{unevaluatedProperty: ${o.unevaluatedProperty}}`
    },
    code(o) {
      const { gen: s, schema: a, data: d, errsCount: g, it: p } = o;
      if (!g)
        throw new Error("ajv implementation error");
      const { allErrors: _, props: b } = p;
      b instanceof e.Name ? s.if((0, e._)`${b} !== true`, () => s.forIn("key", d, (f) => s.if(S(b, f), () => v(f)))) : b !== !0 && s.forIn("key", d, (f) => b === void 0 ? v(f) : s.if(w(b, f), () => v(f))), p.props = !0, o.ok((0, e._)`${g} === ${n.default.errors}`);
      function v(f) {
        if (a === !1) {
          o.setParams({ unevaluatedProperty: f }), o.error(), _ || s.break();
          return;
        }
        if (!(0, t.alwaysValidSchema)(p, a)) {
          const y = s.name("valid");
          o.subschema({
            keyword: "unevaluatedProperties",
            dataProp: f,
            dataPropType: t.Type.Str
          }, y), _ || s.if((0, e.not)(y), () => s.break());
        }
      }
      function S(f, y) {
        return (0, e._)`!${f} || !${f}[${y}]`;
      }
      function w(f, y) {
        const u = [];
        for (const m in f)
          f[m] === !0 && u.push((0, e._)`${y} !== ${m}`);
        return (0, e.and)(...u);
      }
    }
  };
  return fn.default = i, fn;
}
var pn = {}, Ko;
function oa() {
  if (Ko) return pn;
  Ko = 1, Object.defineProperty(pn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ re(), r = {
    keyword: "unevaluatedItems",
    type: "array",
    schemaType: ["boolean", "object"],
    error: {
      message: ({ params: { len: i } }) => (0, e.str)`must NOT have more than ${i} items`,
      params: ({ params: { len: i } }) => (0, e._)`{limit: ${i}}`
    },
    code(i) {
      const { gen: o, schema: s, data: a, it: d } = i, g = d.items || 0;
      if (g === !0)
        return;
      const p = o.const("len", (0, e._)`${a}.length`);
      if (s === !1)
        i.setParams({ len: g }), i.fail((0, e._)`${p} > ${g}`);
      else if (typeof s == "object" && !(0, t.alwaysValidSchema)(d, s)) {
        const b = o.var("valid", (0, e._)`${p} <= ${g}`);
        o.if((0, e.not)(b), () => _(b, g)), i.ok(b);
      }
      d.items = !0;
      function _(b, v) {
        o.forRange("i", v, p, (S) => {
          i.subschema({ keyword: "unevaluatedItems", dataProp: S, dataPropType: t.Type.Num }, b), d.allErrors || o.if((0, e.not)(b), () => o.break());
        });
      }
    }
  };
  return pn.default = r, pn;
}
var Ho;
function ia() {
  if (Ho) return un;
  Ho = 1, Object.defineProperty(un, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ra(), t = /* @__PURE__ */ oa(), n = [e.default, t.default];
  return un.default = n, un;
}
var hn = {}, mn = {}, Go;
function sa() {
  if (Go) return mn;
  Go = 1, Object.defineProperty(mn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), n = {
    keyword: "format",
    type: ["number", "string"],
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: r }) => (0, e.str)`must match format "${r}"`,
      params: ({ schemaCode: r }) => (0, e._)`{format: ${r}}`
    },
    code(r, i) {
      const { gen: o, data: s, $data: a, schema: d, schemaCode: g, it: p } = r, { opts: _, errSchemaPath: b, schemaEnv: v, self: S } = p;
      if (!_.validateFormats)
        return;
      a ? w() : f();
      function w() {
        const y = o.scopeValue("formats", {
          ref: S.formats,
          code: _.code.formats
        }), u = o.const("fDef", (0, e._)`${y}[${g}]`), m = o.let("fType"), C = o.let("format");
        o.if((0, e._)`typeof ${u} == "object" && !(${u} instanceof RegExp)`, () => o.assign(m, (0, e._)`${u}.type || "string"`).assign(C, (0, e._)`${u}.validate`), () => o.assign(m, (0, e._)`"string"`).assign(C, u)), r.fail$data((0, e.or)(c(), l()));
        function c() {
          return _.strictSchema === !1 ? e.nil : (0, e._)`${g} && !${C}`;
        }
        function l() {
          const h = v.$async ? (0, e._)`(${u}.async ? await ${C}(${s}) : ${C}(${s}))` : (0, e._)`${C}(${s})`, k = (0, e._)`(typeof ${C} == "function" ? ${h} : ${C}.test(${s}))`;
          return (0, e._)`${C} && ${C} !== true && ${m} === ${i} && !${k}`;
        }
      }
      function f() {
        const y = S.formats[d];
        if (!y) {
          c();
          return;
        }
        if (y === !0)
          return;
        const [u, m, C] = l(y);
        u === i && r.pass(h());
        function c() {
          if (_.strictSchema === !1) {
            S.logger.warn(k());
            return;
          }
          throw new Error(k());
          function k() {
            return `unknown format "${d}" ignored in schema at path "${b}"`;
          }
        }
        function l(k) {
          const x = k instanceof RegExp ? (0, e.regexpCode)(k) : _.code.formats ? (0, e._)`${_.code.formats}${(0, e.getProperty)(d)}` : void 0, O = o.scopeValue("formats", { key: d, ref: k, code: x });
          return typeof k == "object" && !(k instanceof RegExp) ? [k.type || "string", k.validate, (0, e._)`${O}.validate`] : ["string", k, O];
        }
        function h() {
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
  return mn.default = n, mn;
}
var Wo;
function aa() {
  if (Wo) return hn;
  Wo = 1, Object.defineProperty(hn, "__esModule", { value: !0 });
  const t = [(/* @__PURE__ */ sa()).default];
  return hn.default = t, hn;
}
var Ke = {}, Jo;
function ca() {
  return Jo || (Jo = 1, Object.defineProperty(Ke, "__esModule", { value: !0 }), Ke.contentVocabulary = Ke.metadataVocabulary = void 0, Ke.metadataVocabulary = [
    "title",
    "description",
    "default",
    "deprecated",
    "readOnly",
    "writeOnly",
    "examples"
  ], Ke.contentVocabulary = [
    "contentMediaType",
    "contentEncoding",
    "contentSchema"
  ]), Ke;
}
var Yo;
function la() {
  if (Yo) return xt;
  Yo = 1, Object.defineProperty(xt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Cs(), t = /* @__PURE__ */ js(), n = /* @__PURE__ */ Js(), r = /* @__PURE__ */ Zs(), i = /* @__PURE__ */ na(), o = /* @__PURE__ */ ia(), s = /* @__PURE__ */ aa(), a = /* @__PURE__ */ ca(), d = [
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
  return xt.default = d, xt;
}
var gn = {}, ht = {}, Xo;
function da() {
  if (Xo) return ht;
  Xo = 1, Object.defineProperty(ht, "__esModule", { value: !0 }), ht.DiscrError = void 0;
  var e;
  return (function(t) {
    t.Tag = "tag", t.Mapping = "mapping";
  })(e || (ht.DiscrError = e = {})), ht;
}
var Zo;
function ua() {
  if (Zo) return gn;
  Zo = 1, Object.defineProperty(gn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ da(), n = /* @__PURE__ */ Mn(), r = /* @__PURE__ */ On(), i = /* @__PURE__ */ re(), s = {
    keyword: "discriminator",
    type: "object",
    schemaType: "object",
    error: {
      message: ({ params: { discrError: a, tagName: d } }) => a === t.DiscrError.Tag ? `tag "${d}" must be string` : `value of tag "${d}" must be in oneOf`,
      params: ({ params: { discrError: a, tag: d, tagName: g } }) => (0, e._)`{error: ${a}, tag: ${g}, tagValue: ${d}}`
    },
    code(a) {
      const { gen: d, data: g, schema: p, parentSchema: _, it: b } = a, { oneOf: v } = _;
      if (!b.opts.discriminator)
        throw new Error("discriminator: requires discriminator option");
      const S = p.propertyName;
      if (typeof S != "string")
        throw new Error("discriminator: requires propertyName");
      if (p.mapping)
        throw new Error("discriminator: mapping is not supported");
      if (!v)
        throw new Error("discriminator: requires oneOf keyword");
      const w = d.let("valid", !1), f = d.const("tag", (0, e._)`${g}${(0, e.getProperty)(S)}`);
      d.if((0, e._)`typeof ${f} == "string"`, () => y(), () => a.error(!1, { discrError: t.DiscrError.Tag, tag: f, tagName: S })), a.ok(w);
      function y() {
        const C = m();
        d.if(!1);
        for (const c in C)
          d.elseIf((0, e._)`${f} === ${c}`), d.assign(w, u(C[c]));
        d.else(), a.error(!1, { discrError: t.DiscrError.Mapping, tag: f, tagName: S }), d.endIf();
      }
      function u(C) {
        const c = d.name("valid"), l = a.subschema({ keyword: "oneOf", schemaProp: C }, c);
        return a.mergeEvaluated(l, e.Name), c;
      }
      function m() {
        var C;
        const c = {}, l = k(_);
        let h = !0;
        for (let z = 0; z < v.length; z++) {
          let A = v[z];
          if (A?.$ref && !(0, i.schemaHasRulesButRef)(A, b.self.RULES)) {
            const W = A.$ref;
            if (A = n.resolveRef.call(b.self, b.schemaEnv.root, b.baseId, W), A instanceof n.SchemaEnv && (A = A.schema), A === void 0)
              throw new r.default(b.opts.uriResolver, b.baseId, W);
          }
          const j = (C = A?.properties) === null || C === void 0 ? void 0 : C[S];
          if (typeof j != "object")
            throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${S}"`);
          h = h && (l || k(A)), x(j, z);
        }
        if (!h)
          throw new Error(`discriminator: "${S}" must be required`);
        return c;
        function k({ required: z }) {
          return Array.isArray(z) && z.includes(S);
        }
        function x(z, A) {
          if (z.const)
            O(z.const, A);
          else if (z.enum)
            for (const j of z.enum)
              O(j, A);
          else
            throw new Error(`discriminator: "properties/${S}" must have "const" or "enum"`);
        }
        function O(z, A) {
          if (typeof z != "string" || z in c)
            throw new Error(`discriminator: "${S}" values must be unique strings`);
          c[z] = A;
        }
      }
    }
  };
  return gn.default = s, gn;
}
var yn = {};
const fa = "https://json-schema.org/draft/2020-12/schema", pa = "https://json-schema.org/draft/2020-12/schema", ha = { "https://json-schema.org/draft/2020-12/vocab/core": !0, "https://json-schema.org/draft/2020-12/vocab/applicator": !0, "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0, "https://json-schema.org/draft/2020-12/vocab/validation": !0, "https://json-schema.org/draft/2020-12/vocab/meta-data": !0, "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0, "https://json-schema.org/draft/2020-12/vocab/content": !0 }, ma = "meta", ga = "Core and Validation specifications meta-schema", ya = [{ $ref: "meta/core" }, { $ref: "meta/applicator" }, { $ref: "meta/unevaluated" }, { $ref: "meta/validation" }, { $ref: "meta/meta-data" }, { $ref: "meta/format-annotation" }, { $ref: "meta/content" }], va = ["object", "boolean"], $a = "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.", ba = { definitions: { $comment: '"definitions" has been replaced by "$defs".', type: "object", additionalProperties: { $dynamicRef: "#meta" }, deprecated: !0, default: {} }, dependencies: { $comment: '"dependencies" has been split and replaced by "dependentSchemas" and "dependentRequired" in order to serve their differing semantics.', type: "object", additionalProperties: { anyOf: [{ $dynamicRef: "#meta" }, { $ref: "meta/validation#/$defs/stringArray" }] }, deprecated: !0, default: {} }, $recursiveAnchor: { $comment: '"$recursiveAnchor" has been replaced by "$dynamicAnchor".', $ref: "meta/core#/$defs/anchorString", deprecated: !0 }, $recursiveRef: { $comment: '"$recursiveRef" has been replaced by "$dynamicRef".', $ref: "meta/core#/$defs/uriReferenceString", deprecated: !0 } }, wa = {
  $schema: fa,
  $id: pa,
  $vocabulary: ha,
  $dynamicAnchor: ma,
  title: ga,
  allOf: ya,
  type: va,
  $comment: $a,
  properties: ba
}, _a = "https://json-schema.org/draft/2020-12/schema", Sa = "https://json-schema.org/draft/2020-12/meta/applicator", Ca = { "https://json-schema.org/draft/2020-12/vocab/applicator": !0 }, ka = "meta", Ea = "Applicator vocabulary meta-schema", xa = ["object", "boolean"], Pa = { prefixItems: { $ref: "#/$defs/schemaArray" }, items: { $dynamicRef: "#meta" }, contains: { $dynamicRef: "#meta" }, additionalProperties: { $dynamicRef: "#meta" }, properties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, propertyNames: { format: "regex" }, default: {} }, dependentSchemas: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, propertyNames: { $dynamicRef: "#meta" }, if: { $dynamicRef: "#meta" }, then: { $dynamicRef: "#meta" }, else: { $dynamicRef: "#meta" }, allOf: { $ref: "#/$defs/schemaArray" }, anyOf: { $ref: "#/$defs/schemaArray" }, oneOf: { $ref: "#/$defs/schemaArray" }, not: { $dynamicRef: "#meta" } }, Aa = { schemaArray: { type: "array", minItems: 1, items: { $dynamicRef: "#meta" } } }, Ra = {
  $schema: _a,
  $id: Sa,
  $vocabulary: Ca,
  $dynamicAnchor: ka,
  title: Ea,
  type: xa,
  properties: Pa,
  $defs: Aa
}, Na = "https://json-schema.org/draft/2020-12/schema", Fa = "https://json-schema.org/draft/2020-12/meta/unevaluated", Oa = { "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0 }, Ma = "meta", Ta = "Unevaluated applicator vocabulary meta-schema", ja = ["object", "boolean"], za = { unevaluatedItems: { $dynamicRef: "#meta" }, unevaluatedProperties: { $dynamicRef: "#meta" } }, Ia = {
  $schema: Na,
  $id: Fa,
  $vocabulary: Oa,
  $dynamicAnchor: Ma,
  title: Ta,
  type: ja,
  properties: za
}, Da = "https://json-schema.org/draft/2020-12/schema", qa = "https://json-schema.org/draft/2020-12/meta/content", Va = { "https://json-schema.org/draft/2020-12/vocab/content": !0 }, Ba = "meta", La = "Content vocabulary meta-schema", Ua = ["object", "boolean"], Ka = { contentEncoding: { type: "string" }, contentMediaType: { type: "string" }, contentSchema: { $dynamicRef: "#meta" } }, Ha = {
  $schema: Da,
  $id: qa,
  $vocabulary: Va,
  $dynamicAnchor: Ba,
  title: La,
  type: Ua,
  properties: Ka
}, Ga = "https://json-schema.org/draft/2020-12/schema", Wa = "https://json-schema.org/draft/2020-12/meta/core", Ja = { "https://json-schema.org/draft/2020-12/vocab/core": !0 }, Ya = "meta", Xa = "Core vocabulary meta-schema", Za = ["object", "boolean"], Qa = { $id: { $ref: "#/$defs/uriReferenceString", $comment: "Non-empty fragments not allowed.", pattern: "^[^#]*#?$" }, $schema: { $ref: "#/$defs/uriString" }, $ref: { $ref: "#/$defs/uriReferenceString" }, $anchor: { $ref: "#/$defs/anchorString" }, $dynamicRef: { $ref: "#/$defs/uriReferenceString" }, $dynamicAnchor: { $ref: "#/$defs/anchorString" }, $vocabulary: { type: "object", propertyNames: { $ref: "#/$defs/uriString" }, additionalProperties: { type: "boolean" } }, $comment: { type: "string" }, $defs: { type: "object", additionalProperties: { $dynamicRef: "#meta" } } }, ec = { anchorString: { type: "string", pattern: "^[A-Za-z_][-A-Za-z0-9._]*$" }, uriString: { type: "string", format: "uri" }, uriReferenceString: { type: "string", format: "uri-reference" } }, tc = {
  $schema: Ga,
  $id: Wa,
  $vocabulary: Ja,
  $dynamicAnchor: Ya,
  title: Xa,
  type: Za,
  properties: Qa,
  $defs: ec
}, nc = "https://json-schema.org/draft/2020-12/schema", rc = "https://json-schema.org/draft/2020-12/meta/format-annotation", oc = { "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0 }, ic = "meta", sc = "Format vocabulary meta-schema for annotation results", ac = ["object", "boolean"], cc = { format: { type: "string" } }, lc = {
  $schema: nc,
  $id: rc,
  $vocabulary: oc,
  $dynamicAnchor: ic,
  title: sc,
  type: ac,
  properties: cc
}, dc = "https://json-schema.org/draft/2020-12/schema", uc = "https://json-schema.org/draft/2020-12/meta/meta-data", fc = { "https://json-schema.org/draft/2020-12/vocab/meta-data": !0 }, pc = "meta", hc = "Meta-data vocabulary meta-schema", mc = ["object", "boolean"], gc = { title: { type: "string" }, description: { type: "string" }, default: !0, deprecated: { type: "boolean", default: !1 }, readOnly: { type: "boolean", default: !1 }, writeOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 } }, yc = {
  $schema: dc,
  $id: uc,
  $vocabulary: fc,
  $dynamicAnchor: pc,
  title: hc,
  type: mc,
  properties: gc
}, vc = "https://json-schema.org/draft/2020-12/schema", $c = "https://json-schema.org/draft/2020-12/meta/validation", bc = { "https://json-schema.org/draft/2020-12/vocab/validation": !0 }, wc = "meta", _c = "Validation vocabulary meta-schema", Sc = ["object", "boolean"], Cc = { type: { anyOf: [{ $ref: "#/$defs/simpleTypes" }, { type: "array", items: { $ref: "#/$defs/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, const: !0, enum: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/$defs/nonNegativeInteger" }, minLength: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, maxItems: { $ref: "#/$defs/nonNegativeInteger" }, minItems: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, maxContains: { $ref: "#/$defs/nonNegativeInteger" }, minContains: { $ref: "#/$defs/nonNegativeInteger", default: 1 }, maxProperties: { $ref: "#/$defs/nonNegativeInteger" }, minProperties: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, required: { $ref: "#/$defs/stringArray" }, dependentRequired: { type: "object", additionalProperties: { $ref: "#/$defs/stringArray" } } }, kc = { nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { $ref: "#/$defs/nonNegativeInteger", default: 0 }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, Ec = {
  $schema: vc,
  $id: $c,
  $vocabulary: bc,
  $dynamicAnchor: wc,
  title: _c,
  type: Sc,
  properties: Cc,
  $defs: kc
};
var Qo;
function xc() {
  if (Qo) return yn;
  Qo = 1, Object.defineProperty(yn, "__esModule", { value: !0 });
  const e = wa, t = Ra, n = Ia, r = Ha, i = tc, o = lc, s = yc, a = Ec, d = ["/properties"];
  function g(p) {
    return [
      e,
      t,
      n,
      r,
      i,
      _(this, o),
      s,
      _(this, a)
    ].forEach((b) => this.addMetaSchema(b, void 0, !1)), this;
    function _(b, v) {
      return p ? b.$dataMetaSchema(v, d) : v;
    }
  }
  return yn.default = g, yn;
}
var ei;
function Pc() {
  return ei || (ei = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv2020 = void 0;
    const n = /* @__PURE__ */ _s(), r = /* @__PURE__ */ la(), i = /* @__PURE__ */ ua(), o = /* @__PURE__ */ xc(), s = "https://json-schema.org/draft/2020-12/schema";
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
    var d = /* @__PURE__ */ Fn();
    Object.defineProperty(t, "KeywordCxt", { enumerable: !0, get: function() {
      return d.KeywordCxt;
    } });
    var g = /* @__PURE__ */ ee();
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
    var p = /* @__PURE__ */ ar();
    Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
      return p.default;
    } });
    var _ = /* @__PURE__ */ On();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return _.default;
    } });
  })(_t, _t.exports)), _t.exports;
}
var Ac = /* @__PURE__ */ Pc();
const Rc = /* @__PURE__ */ ss(Ac), Nc = "https://json-schema.org/draft/2020-12/schema", Fc = "https://raw.githubusercontent.com/omsf-eco-infra/gufe-viz/main/schema/gufe-viz.schema.json", Oc = "gufe-viz payload", Mc = "Python-to-TypeScript contract bridge for gufe visualizations. Source of truth both languages are downstream of it. This schema is not strictly versioned or published as it is only internally consumed by this codebase. Schema description: one schema object per gufe class: every $def named *Viz is the visualization form of exactly one GufeTokenizable, it carries that object's `gufe-key`. Every reference from one gufe object to another is that object's gufe key, and the objects themselves live in the `registry` on the root payload. So a ligand network's nodes are keys, a chemical system's components and a transformation's protocol are keys and each one resolves to a complete, drawable object. An alchemical network whose forty systems share one protein carries that PDB once and points at it forty times, and the browser can still drill into it, because what it points at is a whole ProteinComponentViz. This is a single-shot dump rather than a conversation with a server, so the registry travels with the payload.", Tc = [{ $ref: "#/$defs/SmallMoleculeComponentViz" }, { $ref: "#/$defs/ProteinComponentViz" }, { $ref: "#/$defs/SolvatedPDBComponentViz" }, { $ref: "#/$defs/ProteinMembraneComponentViz" }, { $ref: "#/$defs/SolventComponentViz" }, { $ref: "#/$defs/UnknownComponentViz" }, { $ref: "#/$defs/ProtocolViz" }, { $ref: "#/$defs/LigandAtomMappingViz" }, { $ref: "#/$defs/LigandNetworkViz" }, { $ref: "#/$defs/ChemicalSystemViz" }, { $ref: "#/$defs/TransformationViz" }, { $ref: "#/$defs/AlchemicalNetworkViz" }], jc = /* @__PURE__ */ JSON.parse('{"GufeKey":{"title":"GufeKey","description":"A gufe key: the identity of a GufeTokenizable, of the form \'ClassName-<hex digest>\'. It is deterministic and repeatable within a software environment. Only its non-emptiness is checked","type":"string","minLength":1},"ComponentKey":{"title":"ComponentKey","description":"A gufe key naming a ComponentViz in the registry. Identical to GufeKey at validation time: JSON Schema has no way to say \'this string is the gufe-key of an entry in that array, and that entry has this type\', because that is a join across two parts of the document. What the name buys is that the referent\'s type is stated in the contract and carried into the generated TypeScript, instead of living only in a test and a view.","$ref":"#/$defs/GufeKey"},"SmallMoleculeComponentKey":{"title":"SmallMoleculeComponentKey","description":"A gufe key naming a SmallMoleculeComponentViz in the registry. Resolving it yields the whole molecule, SDF included. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ChemicalSystemKey":{"title":"ChemicalSystemKey","description":"A gufe key naming a ChemicalSystemViz in the registry. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ProtocolKey":{"title":"ProtocolKey","description":"A gufe key naming a ProtocolViz in the registry. Every transformation of a network usually names the same one. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"Registry":{"title":"Registry","description":"The pool of gufe objects this payload refers to by key, each a complete payload object in its own right. Entries are unique by `gufe-key` and sorted by (type, gufe-key) so a committed fixture is byte-stable. JSON Schema cannot express \'unique by a property\' or \'every reference resolves\', so both are covered by tests on the Python side and degraded over by the views.","type":"array","items":{"oneOf":[{"$ref":"#/$defs/ComponentViz"},{"$ref":"#/$defs/ProtocolViz"},{"$ref":"#/$defs/ChemicalSystemViz"}]}},"ComponentViz":{"title":"ComponentViz","description":"Any single chemical-system component","oneOf":[{"$ref":"#/$defs/SmallMoleculeComponentViz"},{"$ref":"#/$defs/ProteinComponentViz"},{"$ref":"#/$defs/SolvatedPDBComponentViz"},{"$ref":"#/$defs/ProteinMembraneComponentViz"},{"$ref":"#/$defs/SolventComponentViz"},{"$ref":"#/$defs/UnknownComponentViz"}]},"SmallMoleculeComponentViz":{"title":"SmallMoleculeComponentViz","description":"A small molecule, carried as a complete SDF record.","type":"object","properties":{"type":{"const":"SmallMoleculeComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"sdf":{"type":"string","minLength":1,"description":"Complete inline SDF record, including the conformer."},"smiles":{"type":"string"},"total_charge":{"type":"integer","description":"Net formal charge. Displayed, never recomputed from the SDF."}},"required":["type","gufe-key","name","sdf","smiles","total_charge"],"additionalProperties":false},"ProteinComponentViz":{"title":"ProteinComponentViz","description":"A protein, carried as a complete PDB record.","type":"object","properties":{"type":{"const":"ProteinComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolvatedPDBComponentViz":{"title":"SolvatedPDBComponentViz","description":"A protein with explicit solvent. A distinct type rather than a flag on ProteinComponentViz, because the discriminator is what a view dispatches on and the presence of waters changes what a sensible default representation is.","type":"object","properties":{"type":{"const":"SolvatedPDBComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation, including explicit solvent."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"ProteinMembraneComponentViz":{"title":"ProteinMembraneComponentViz","description":"A protein embedded in a membrane.","type":"object","properties":{"type":{"const":"ProteinMembraneComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation of the protein and membrane system."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolventComponentViz":{"title":"SolventComponentViz","description":"Bulk solvent settings. There is no structure to draw, so these are flat fields suitable for rendering as a settings card.","type":"object","properties":{"type":{"const":"SolventComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"smiles":{"type":"string","minLength":1},"positive_ion":{"type":"string"},"negative_ion":{"type":"string"},"neutralize":{"type":"boolean"},"ion_concentration":{"type":"string","description":"Display-form concentration with units, for example \'0.15 molar\'. A string rather than a number because the unit is part of the value and the view only ever prints it."}},"required":["type","gufe-key","name","smiles","positive_ion","negative_ion","neutralize","ion_concentration"],"additionalProperties":false},"UnknownComponentViz":{"title":"UnknownComponentViz","description":"The graceful fallback for a component type this build does not recognize. gufe supports custom Component subclasses, so meeting one is an expected outcome rather than an error, and the browser answers it with \'sorry, there is no visualization for this\'. This covers an unrecognized type only: a recognized component whose serializer fails is a bug, and raises in Python rather than arriving here wearing a disguise.","type":"object","properties":{"type":{"const":"UnknownComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The gufe class name, so the panel can say which type it could not draw."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ProtocolViz":{"title":"ProtocolViz","description":"A gufe Protocol, named. Every transformation in an alchemical network usually shares one, so this is a registry entry that many edges point at rather than a class name repeated per edge. Settings are deliberately absent for now: they are large, deeply nested, and nothing draws them yet, adding a `settings` field later is additive and breaks nothing.","type":"object","properties":{"type":{"const":"ProtocolViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The Protocol\'s class name, which is what identifies it to a reader, a Protocol has no name of its own, so `name` is usually empty."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ChemicalSystemViz":{"title":"ChemicalSystemViz","description":"A gufe ChemicalSystem: labels mapped to the gufe keys of its components.","type":"object","properties":{"type":{"const":"ChemicalSystemViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"components":{"type":"object","description":"ChemicalSystem labels mapped to the gufe keys of the components in the registry.","additionalProperties":{"$ref":"#/$defs/ComponentKey"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","components"],"additionalProperties":false},"AtomMapping":{"title":"AtomMapping","description":"Atom index correspondence from molecule A to molecule B, as a list of index pairs. A list rather than an object keyed by A\'s index, because JSON object keys can only be strings: keying by index would put decimal strings such as \'12\' in the payload and leave both languages casting them back to integers, and it is Python\'s dict-of-int shape only by resemblance. As a list, both indices stay integers, and \'an entry has a B index for every A index\' becomes a `required` the schema states rather than a convention a reader has to trust. Pairs are ordered by `index_A` so a committed fixture is byte-stable.","type":"array","items":{"type":"object","properties":{"index_A":{"type":"integer","minimum":0,"description":"An atom index in molecule A."},"index_B":{"type":"integer","minimum":0,"description":"The atom index in molecule B that it maps to."}},"required":["index_A","index_B"],"additionalProperties":false}},"Annotations":{"title":"Annotations","description":"Free-form mapping metadata. gufe puts nothing here by design and every mapper picks its own keys, so this is deliberately open. Values are whatever survived being made JSON-safe. Displayed but never interpreted, with the single exception of \'score\'.","type":"object"},"LigandAtomMappingViz":{"title":"LigandAtomMappingViz","description":"One atom mapping between two small molecules. This is also what an edge of a ligand network is because the two endpoints are gufe keys either way: standalone they resolve in this object\'s own registry, and in a network they resolve in the network\'s, where they are the same entries the nodes name. `componentA` and `componentB` are the molecules the two sides of `componentA_to_componentB` index into: an `index_A` is an atom of the SmallMoleculeComponentViz that `componentA` names, and an `index_B` an atom of `componentB`\'s.","type":"object","properties":{"type":{"const":"LigandAtomMappingViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"componentA":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentB":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentA_to_componentB":{"$ref":"#/$defs/AtomMapping"},"score":{"type":["number","null"],"description":"The \'score\' annotation when it is a plain number, otherwise null. This is the one annotation key that is interpreted rather than displayed: it drives the edge colouring and the force layout\'s link distance."},"annotations":{"$ref":"#/$defs/Annotations"},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","componentA","componentB","componentA_to_componentB","score","annotations"],"additionalProperties":false},"LigandNetworkViz":{"title":"LigandNetworkViz","description":"A ligand network: the ligands in the registry, the nodes as keys into it, and the mappings as edges. Deliberately not gufe\'s GraphML: that format embeds a gufe to_json moldict per node, so forwarding it would relocate the decoding problem into the browser rather than avoid it.","type":"object","properties":{"type":{"const":"LigandNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ligand, resolved in `registry`.","items":{"$ref":"#/$defs/SmallMoleculeComponentKey"}},"edges":{"type":"array","description":"The mappings, whose `componentA` and `componentB` name nodes of this network. JSON Schema cannot express that referential constraint, so a Python test covers it, and the view drops a dangling edge with a banner rather than failing.","items":{"$ref":"#/$defs/LigandAtomMappingViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false},"TransformationViz":{"title":"TransformationViz","description":"A transformation between two chemical systems, both named by gufe key, as is its protocol: `stateA` is the system it starts from, `stateB` the one it ends at, and every edge of a network usually names the same protocol. This is also what an edge of an alchemical network is (there is no separate edge type) because `stateA` and `stateB` are keys either way, and in a network they are the keys the nodes name. NonTransformation uses this type too: it exposes the same stateA and stateB properties, both its single system, so it renders as a diff with no differences.","type":"object","properties":{"type":{"const":"TransformationViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"protocol":{"$ref":"#/$defs/ProtocolKey"},"stateA":{"$ref":"#/$defs/ChemicalSystemKey"},"stateB":{"$ref":"#/$defs/ChemicalSystemKey"},"mappings":{"type":"array","items":{"$ref":"#/$defs/LigandAtomMappingViz"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","protocol","stateA","stateB","mappings"],"additionalProperties":false},"AlchemicalNetworkViz":{"title":"AlchemicalNetworkViz","description":"A graph of chemical systems joined by transformations. What repeats here is not the nodes and edges themselves but what they are made of: in practice every system shares one protein and every transformation shares one protocol. Both live in the registry, once, as whole objects so this view can show composition and topology while still letting a reader open a node and see the protein.","type":"object","properties":{"type":{"const":"AlchemicalNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ChemicalSystem, resolved in `registry`.","items":{"$ref":"#/$defs/ChemicalSystemKey"}},"edges":{"type":"array","description":"The transformations, whose `stateA` and `stateB` name nodes of this network.","items":{"$ref":"#/$defs/TransformationViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false}}'), ur = {
  $schema: Nc,
  $id: Fc,
  title: Oc,
  description: Mc,
  oneOf: Tc,
  $defs: jc
}, tu = [
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
], fr = ur.$id, pr = new Rc({ allErrors: !0, strict: !1 });
pr.addSchema(ur, fr);
const ti = pr.getSchema(fr), Ai = Object.entries(ur.$defs).filter(
  ([e, t]) => t.properties?.type?.const === e
).map(([e]) => e).sort(), nu = Ai, hr = /* @__PURE__ */ new Map();
for (const e of Ai) {
  const t = pr.getSchema(`${fr}#/$defs/${e}`);
  t && hr.set(e, t);
}
const nr = { valid: !0, issues: [] };
function rr(e) {
  return (e ?? []).map((t) => ({
    path: t.instancePath || "",
    message: t.keyword === "additionalProperties" ? `unknown property ${JSON.stringify(t.params.additionalProperty)}` : t.message ?? "is invalid"
  }));
}
function zc(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return {
      valid: !1,
      issues: [{ path: "", message: "must be a JSON object" }]
    };
  const t = e.type, n = typeof t == "string" ? hr.get(t) : void 0;
  return n ? n(e) ? nr : { valid: !1, issues: rr(n.errors) } : ti(e) ? nr : { valid: !1, issues: rr(ti.errors) };
}
function ru(e, t) {
  const n = hr.get(e);
  return n ? n(t) ? nr : { valid: !1, issues: rr(n.errors) } : {
    valid: !1,
    issues: [
      { path: "", message: `unknown payload type ${JSON.stringify(e)}` }
    ]
  };
}
function Ic(e, t = 8) {
  const n = e.slice(0, t).map((r) => `${r.path || "(root)"}: ${r.message}`);
  return e.length > t && n.push(`... and ${e.length - t} more`), n.join(`
`);
}
const mr = {
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
function Ri(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return {
      message: "This does not look like a gufe-viz payload (expected a JSON object)."
    };
  const { type: t } = e;
  if (typeof t != "string" || !t)
    return {
      message: "This payload has no `type`, so there is nothing to say what it is."
    };
  if (!mr[t]) return Dc(t);
  const { valid: n, issues: r } = zc(e);
  return n ? null : {
    message: `This payload says it is a ${t}, but it does not match the gufe-viz schema.`,
    detail: Ic(r)
  };
}
function Dc(e) {
  const t = Object.keys(mr).sort().join(", ");
  return {
    message: `Sorry, there is no visualization for ${e} yet. This build can draw: ${t}.`
  };
}
function ou(e) {
  return Ri(e)?.message ?? null;
}
class qc extends xe {
  placeholder() {
    return "Waiting for data...";
  }
  renderView(t, n) {
    os("payload", n, this);
    const r = Ri(n);
    if (r)
      return t.appendChild(Vc(r, n)), {};
    const i = n.type, o = mr[i], s = document.createElement(o);
    return s.style.cssText = "flex:1;min-height:0;min-width:0;", s.payload = n, t.appendChild(s), {
      onResize: () => s.resize?.(),
      // Removing the child fires its own `disconnectedCallback`, which is where
      // its viewers and observers are released
      cleanup: () => s.remove()
    };
  }
}
function Vc(e, t) {
  const n = M(
    "div",
    "flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:32px;"
  );
  n.appendChild(le(e.message));
  const r = (o, s) => M(
    "div",
    "max-width:640px;padding:8px 12px;border-radius:6px;font-size:11px;white-space:pre-wrap;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;overflow-wrap:anywhere;" + (s ? `background:${F.warnBg};color:${F.warnFg};border:1px solid ${F.warnBorder};` : `background:${F.panelBg};color:${F.textMuted2};border:1px solid ${F.cardBorder};`),
    o
  );
  e.detail && n.appendChild(r(e.detail, !0));
  const i = Bc(t);
  return i && n.appendChild(r(i, !1)), n;
}
function Bc(e) {
  if (e == null || typeof e != "object") return null;
  const t = e, n = [];
  typeof t.type == "string" && n.push(`type: ${Ie(t.type)}`), typeof t.name == "string" && t.name && n.push(`name: ${Ie(t.name)}`);
  const r = Object.keys(e);
  return r.length && n.push(
    `keys: ${r.slice(0, 12).join(", ")}${r.length > 12 ? ", ..." : ""}`
  ), n.length ? n.join(`
`) : null;
}
Pe("gufe-view", qc);
const gr = {
  threeDmol: "https://3dmol.org/build/3Dmol-min.js",
  rdkit: "https://unpkg.com/@rdkit/rdkit/dist/RDKit_minimal.js",
  d3: "https://cdn.jsdelivr.net/npm/d3@7/+esm"
};
function yr(e) {
  const t = globalThis.__gufeEngines?.[e];
  return t ? Promise.resolve(t) : null;
}
function Ni(e, t) {
  return new Promise((n, r) => {
    const i = document.createElement("script");
    i.src = e, i.onload = () => n(), i.onerror = () => r(new Error(`Failed to load ${t}`)), document.head.appendChild(i);
  });
}
let Ge = null, tt = null;
function vr() {
  if (tt) return tt;
  const e = yr("threeDmol");
  return e ? (tt = e.then((t) => Ge = t || window.$3Dmol), tt) : (tt = (async () => {
    if (window.$3Dmol) return Ge = window.$3Dmol;
    if (await Ni(gr.threeDmol, "3Dmol.js"), !window.$3Dmol) throw new Error("3Dmol.js loaded but $3Dmol is undefined");
    return Ge = window.$3Dmol;
  })(), tt);
}
let nt = null;
function $r() {
  if (nt) return nt;
  const e = yr("rdkit");
  return e ? (nt = e.then((t) => window.RDKit = t), nt) : (nt = (async () => {
    if (window.RDKit) return window.RDKit;
    if (await Ni(gr.rdkit, "RDKit"), !window.initRDKitModule) throw new Error("RDKit loaded but initRDKitModule is undefined");
    return window.RDKit = await window.initRDKitModule();
  })(), nt);
}
let Jn = null;
function Fi() {
  if (!Jn) {
    const e = gr.d3;
    Jn = yr("d3") ?? import(
      /* @vite-ignore */
      e
    );
  }
  return Jn;
}
function br(e, t) {
  let n = !1, r = !1;
  const i = () => {
    n = !0;
  }, o = () => {
    n = !1;
  }, s = (a) => {
    if (a.stopPropagation(), n || a.ctrlKey || a.metaKey) {
      a.preventDefault(), t.onZoom(a);
      return;
    }
    t.hint && !r && (r = !0, Uc(e, t.hint));
  };
  return e.addEventListener("wheel", s, { passive: !1, capture: !0 }), e.addEventListener("pointerdown", i), e.addEventListener("pointerenter", i), e.addEventListener("pointerleave", o), {
    cleanup() {
      e.removeEventListener("wheel", s, { capture: !0 }), e.removeEventListener("pointerdown", i), e.removeEventListener("pointerenter", i), e.removeEventListener("pointerleave", o);
    }
  };
}
const Lc = 1600;
function Uc(e, t) {
  const n = M(
    "div",
    "position:absolute;bottom:12px;left:50%;transform:translateX(-50%);z-index:30;pointer-events:none;padding:5px 12px;border-radius:6px;font-size:11px;white-space:nowrap;background:rgba(0,0,0,0.72);color:#ffffff;transition:opacity .3s ease;",
    t
  );
  e.appendChild(n), setTimeout(() => {
    n.style.opacity = "0", setTimeout(() => n.remove(), 300);
  }, Lc);
}
const Kc = { min: 0.25, max: 12 };
function Hc(e, t = Kc) {
  let n = 1;
  return {
    zoomBy(r) {
      const i = Math.min(t.max, Math.max(t.min, n * r));
      if (i === n) return;
      const o = i / n;
      n = i, e.zoom(o), e.render();
    },
    reset() {
      n = 1, e.zoomTo(), e.render();
    },
    level: () => n
  };
}
const Gc = 2e-3;
function Wc(e) {
  return Math.exp(-e.deltaY * Gc);
}
function Oi(e, t, n = {}) {
  const r = Hc(t, n.bounds), i = br(e, {
    hint: n.hint ?? "Click or hold Ctrl to zoom",
    onZoom: (o) => r.zoomBy(Wc(o))
  });
  return { ...r, cleanup: i.cleanup };
}
function wr(e, t = "Reset view") {
  const n = M("button", at, "Reset");
  return n.title = t, n.setAttribute("aria-label", t), n.onclick = e, n;
}
const Tn = `
`, or = "$$$$";
function ni(e, t) {
  if (!e || !e.trim()) throw new Error("empty SDF");
  const n = e.replace(/\r/g, "").split(Tn);
  if (n.length < 4) throw new Error("SDF too short");
  const r = n[3];
  if (r.indexOf("V3000") !== -1) throw new Error("V3000 molfiles are not supported");
  const i = parseInt(r.substring(0, 3), 10), o = parseInt(r.substring(3, 6), 10);
  if (!isFinite(i) || i <= 0) throw new Error(`bad counts line: ${r}`);
  const s = [], a = [];
  for (let p = 0; p < i; p++) {
    const _ = n[4 + p];
    if (_ == null) throw new Error("truncated atom block");
    s.push([
      parseFloat(_.substring(0, 10)) || 0,
      parseFloat(_.substring(10, 20)) || 0,
      parseFloat(_.substring(20, 30)) || 0
    ]), a.push(_.substring(31, 34).trim() || "X");
  }
  const d = [];
  for (let p = 0; p < (isFinite(o) ? o : 0); p++) {
    const _ = n[4 + i + p];
    if (_ == null) break;
    const b = parseInt(_.substring(0, 3), 10), v = parseInt(_.substring(3, 6), 10), S = parseInt(_.substring(6, 9), 10);
    !isFinite(b) || !isFinite(v) || d.push([b - 1, v - 1, isFinite(S) ? S : 1]);
  }
  return { name: (n[0] || "").trim() || t || "molecule", symbols: a, bonds: d, coords: s };
}
function Jc(e) {
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
  return r.push("M  END"), r.join(Tn);
}
const Yc = (e) => `${Jc(e)}${Tn}${or}`, Xc = (e) => e.indexOf(or) >= 0 ? e : `${e}${Tn}${or}`;
function Zc(e) {
  const t = String(e).split(/\r?\n/);
  if (t.length < 4) return null;
  const n = parseInt(t[3].slice(0, 3), 10), r = parseInt(t[3].slice(3, 6), 10);
  return isNaN(n) || isNaN(r) ? null : { atoms: n, bonds: r };
}
function Mi(e, t, n) {
  let r = null;
  try {
    if (r = e.get_mol(t, JSON.stringify({ removeHs: !0 })), !r) return null;
    try {
      r.set_new_coords(!0);
    } catch {
    }
    return r.get_svg(n, n) || null;
  } catch (i) {
    return console.warn("[gufe-viz] depictSVG threw -", $e(i)), null;
  } finally {
    if (r)
      try {
        r.delete();
      } catch {
      }
  }
}
function Ti(e, t, n) {
  e.innerHTML = t;
  const r = e.querySelector("svg");
  r && (r.removeAttribute("width"), r.removeAttribute("height"), r.getAttribute("viewBox") || r.setAttribute("viewBox", `0 0 ${n} ${n}`), r.setAttribute("preserveAspectRatio", "xMidYMid meet"), r.setAttribute("style", "width:100%;height:100%;max-width:100%;max-height:100%;"));
}
const Qc = [
  { id: "stick", label: "Stick", title: "Sticks only" },
  { id: "ball", label: "Ball+Stick", title: "Ball and stick" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" }
], ri = {
  stick: { stick: { radius: 0.15, colorscheme: "Jmol" } },
  ball: { stick: { radius: 0.12, colorscheme: "Jmol" }, sphere: { scale: 0.28, colorscheme: "Jmol" } },
  sphere: { sphere: { scale: 1, colorscheme: "Jmol" } }
}, oi = 400;
class el extends xe {
  placeholder() {
    return "Waiting for a SmallMoleculeComponent payload...";
  }
  renderView(t, n) {
    const r = n.sdf, i = n.name ?? "", o = n.smiles, s = n.total_charge;
    t.appendChild(Be(i || "Unnamed molecule"));
    const a = M("div", "flex:1;display:flex;flex-direction:row;overflow:hidden;min-height:0;");
    t.appendChild(a);
    const d = M("div", "flex:1 1 50%;min-width:0;display:flex;flex-direction:column;"), g = M("div", "flex:1 1 50%;min-width:0;display:flex;flex-direction:column;position:relative;");
    a.appendChild(d), a.appendChild(M("div", `width:1px;flex-shrink:0;background:${F.splitBorder};`)), a.appendChild(g);
    const p = (h) => M("div", $t, h);
    d.appendChild(p("2D"));
    const _ = M(
      "div",
      `flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:8px;background:${vt.canvas2D};`
    );
    d.appendChild(_), g.appendChild(p("3D"));
    const b = $i();
    g.appendChild(b.wrap);
    const v = M(
      "div",
      `flex-shrink:0;display:flex;flex-wrap:wrap;align-items:baseline;gap:6px 20px;padding:8px 16px;font-size:\${FONT.body};background:${F.toolbarBg};border-top:1px solid ${F.toolbarBorder};color:${F.textPrimary};`
    );
    t.appendChild(v);
    const S = r ? Zc(r) : null, w = [
      ["Name", i || it, !1],
      ["SMILES", o || it, !0],
      ["Charge", s == null ? it : String(s), !1],
      ["Atoms", S ? String(S.atoms) : it, !1],
      ["Bonds", S ? String(S.bonds) : it, !1]
    ];
    for (const [h, k, x] of w) {
      const O = M("div", "display:flex;align-items:baseline;gap:6px;min-width:0;");
      O.appendChild(
        M(
          "span",
          `font-size:\${FONT.tiny};font-weight:700;letter-spacing:.08em;text-transform:uppercase;flex-shrink:0;color:${F.textMuted2};`,
          h
        )
      );
      const z = M(
        "span",
        `user-select:text;cursor:text;color:${F.textPrimary}` + (x ? ";font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:${FONT.small};overflow-wrap:anywhere;" : ""),
        k
      );
      z.title = k, O.appendChild(z), v.appendChild(O);
    }
    if (!r || !r.trim())
      return _.appendChild(le("No molecule provided")), b.container.appendChild(le("No molecule provided")), {};
    _.appendChild(le("Loading 2D depiction...")), $r().then((h) => {
      const k = Mi(h, r, oi);
      k ? Ti(_, k, oi) : _.replaceChildren(le("Failed to parse molecule", !0));
    }).catch((h) => {
      _.replaceChildren(le(`RDKit failed to load: ${$e(h)}`, !0));
    });
    let f = null, y = null, u = "stick", m = !1;
    const C = M(
      "div",
      vi
    );
    C.appendChild(
      An(Qc, u, (h) => {
        u = h, f && (f.setStyle({}, ri[h]), f.render());
      })
    );
    const c = M("button", `${at}margin-left:4px;`, "Spin");
    c.title = "Toggle continuous rotation", c.onclick = () => {
      m = !m, c.style.background = m ? de.bgActive : de.bg;
      try {
        f?.spin(m ? "y" : !1);
      } catch {
      }
    }, C.appendChild(c);
    const l = wr(() => y?.reset());
    return l.style.marginLeft = "4px", C.appendChild(l), g.appendChild(C), b.container.appendChild(le("Loading 3D viewer...")), vr().then(() => {
      b.container.replaceChildren(), f = Ge.createViewer(b.container, { backgroundColor: vt.viewer }), f.addModel(Xc(r), "sdf"), f.setStyle({}, ri[u]), f.zoomTo(), f.render(), y = Oi(b.container, f);
    }).catch((h) => {
      b.container.replaceChildren(le(`3D render failed: ${$e(h)}`, !0));
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
Pe("gufe-small-molecule", el);
const ji = ["HOH", "WAT", "SOL", "TIP3"], ii = { hetflag: !1 }, tl = { hetflag: !0 }, nl = { resn: ji }, qe = {
  stick: { radius: 0.15 },
  sphere: { scale: 0.3 },
  hetero: { stickRadius: 0.2, sphereScale: 0.28 },
  water: { stickRadius: 0.05, sphereScale: 0.18 },
  surfaceOpacity: 0.85,
  /** Above this many atoms a surface is slow enough to be worth warning about. */
  surfaceAtomWarn: 4e4
};
function rl(e) {
  const t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
  let r = 0, i = 0, o = 0, s = 1 / 0, a = -1 / 0;
  for (const d of e.split(/\r?\n/)) {
    const g = d.slice(0, 6);
    if (g === "ENDMDL") break;
    if (g !== "ATOM  " && g !== "HETATM") continue;
    r++, g === "HETATM" && i++;
    const p = d.slice(17, 20).trim(), _ = d.slice(21, 22).trim() || "_", b = d.slice(22, 26).trim(), v = d.slice(26, 27).trim();
    ji.indexOf(p) !== -1 && o++, t.add(_), n.add(`${_}|${b}${v}|${p}`);
    const S = parseInt(b, 10);
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
function ol(e) {
  return `${ut(e.chains)} chains · ${ut(e.residues)} residues · ${ut(e.atoms)} atoms · ${ut(e.hetatms)} HETATM` + (e.waters > 0 ? ` (${ut(e.waters)} water)` : "");
}
function il(e, t) {
  return e === "chain" ? { colorscheme: "chain" } : e === "ss" ? { colorscheme: "ssJmol" } : e === "spectrum" && t && t.resiMax > t.resiMin ? { colorscheme: { prop: "resi", gradient: "roygb", min: t.resiMin, max: t.resiMax } } : { colorscheme: "Jmol" };
}
function si(e, t, n, r) {
  const i = r || (() => {
  }), o = il(t.color, n);
  try {
    e.removeAllSurfaces();
  } catch {
  }
  if (e.setStyle({}, {}), e.setStyle(
    ii,
    t.rep === "stick" ? { stick: { radius: qe.stick.radius, ...o } } : t.rep === "sphere" ? { sphere: { scale: qe.sphere.scale, ...o } } : (
      // For 'surface' the shell is added separately; leave the atoms bare so
      // it is not cluttered from the inside.
      t.rep === "surface" ? {} : { cartoon: { ...o } }
    )
  ), e.setStyle(
    tl,
    t.hetero ? {
      stick: { radius: qe.hetero.stickRadius, colorscheme: "Jmol" },
      sphere: { scale: qe.hetero.sphereScale, colorscheme: "Jmol" }
    } : {}
  ), e.setStyle(
    nl,
    t.waters ? {
      stick: { radius: qe.water.stickRadius, colorscheme: "Jmol" },
      sphere: { scale: qe.water.sphereScale, colorscheme: "Jmol" }
    } : {}
  ), t.rep !== "surface") {
    i(null), e.render();
    return;
  }
  i(
    n && n.atoms > qe.surfaceAtomWarn ? "Computing surface (large structure, this may take a while)..." : "Computing surface..."
  ), e.render(), setTimeout(() => {
    try {
      Promise.resolve(
        e.addSurface(Ge.SurfaceType.VDW, { opacity: qe.surfaceOpacity, ...o }, ii)
      ).then(() => {
        i(null), e.render();
      }).catch((s) => i(`Surface failed: ${$e(s)}`, "error"));
    } catch (s) {
      i(`Surface failed: ${$e(s)}`, "error");
    }
  }, 30);
}
const sl = [
  { id: "cartoon", label: "Cartoon", title: "Ribbon / cartoon backbone" },
  { id: "surface", label: "Surface", title: "Molecular (VDW) surface" },
  { id: "stick", label: "Stick", title: "All-atom sticks" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" }
], al = [
  { id: "chain", label: "Chain" },
  { id: "spectrum", label: "Spectrum" },
  { id: "ss", label: "Secondary structure" },
  { id: "element", label: "Element" }
];
class cl extends xe {
  placeholder() {
    return "Waiting for a ProteinComponent payload...";
  }
  renderView(t, n) {
    const r = n.pdb, i = n.name ?? "", s = { rep: "cartoon", color: "chain", waters: n.type !== "ProteinComponentViz", hetero: !0 };
    let a = null, d = null, g = null;
    const p = M(
      "div",
      yi.top
    );
    t.appendChild(p), p.appendChild(
      M("span", `font-weight:700;font-size:${X.heading};letter-spacing:.02em;color:${F.titleColor};`, i || "Protein")
    );
    const _ = (C) => M("span", `font-size:${X.small};color:${F.textMuted};`, C);
    p.appendChild(_("Style:")), p.appendChild(
      An(sl, s.rep, (C) => {
        s.rep = C, m();
      })
    ), p.appendChild(_("Color:"));
    const b = M("select", Cn);
    for (const C of al) {
      const c = M("option", "", C.label);
      c.value = C.id, b.appendChild(c);
    }
    b.value = s.color, b.addEventListener("change", () => {
      s.color = b.value, m();
    }), p.appendChild(b);
    const v = M("div", "display:flex;gap:4px;");
    p.appendChild(v);
    const S = [
      ["waters", "Waters", "Show water molecules", () => m()],
      ["hetero", "Hetero", "Show hetero atoms / ligands / ions / lipids", () => m()],
      ["spin", "Spin", "Rotate the view continuously", () => a?.spin(s.spin ? "y" : !1)]
    ];
    for (const [C, c, l, h] of S) {
      const k = M("button", at, c);
      k.title = l, k.style.background = s[C] ? de.bgActive : de.bg, k.onclick = () => {
        s[C] = !s[C], k.style.background = s[C] ? de.bgActive : de.bg, h();
      }, v.appendChild(k);
    }
    v.appendChild(wr(() => d?.reset()));
    const w = M("span", `margin-left:auto;font-size:${X.small};white-space:nowrap;color:${F.textMuted2};`);
    p.appendChild(w);
    const f = $i();
    t.appendChild(f.wrap);
    const y = M(
      "div",
      "position:absolute;top:12px;left:50%;transform:translateX(-50%);padding:6px 14px;border-radius:6px;font-size:${FONT.body};z-index:20;display:none;pointer-events:none;"
    );
    f.wrap.appendChild(y);
    const u = (C, c) => {
      if (C == null) {
        y.style.display = "none";
        return;
      }
      y.textContent = C, y.style.display = "block";
      const l = c === "error";
      y.style.background = l ? F.warnBg : F.toolbarBg, y.style.color = l ? F.warnFg : F.textMuted, y.style.border = `1px solid ${l ? F.warnBorder : F.toolbarBorder}`;
    };
    function m() {
      a && si(a, s, g, u);
    }
    if (!r || !r.trim())
      return u("No protein data - waiting for a PDB payload."), {};
    try {
      g = rl(r), w.textContent = ol(g);
    } catch (C) {
      u(`⚠ PDB parse error: ${$e(C)}`, "error");
    }
    return u("Loading 3D viewer..."), vr().then(() => {
      a = Ge.createViewer(f.container, { backgroundColor: vt.viewer }), a.addModel(r, "pdb"), si(a, s, g, u), a.zoomTo(), a.spin(s.spin ? "y" : !1), a.render(), d = Oi(f.container, a);
    }).catch((C) => {
      u(`⚠ Failed to render structure: ${$e(C)}`, "error");
    }), {
      onResize() {
        a && (a.resize(), a.render());
      },
      cleanup() {
        if (d?.cleanup(), d = null, !!a) {
          try {
            a.spin(!1);
          } catch {
          }
          try {
            a.clear();
          } catch {
          }
          a = null;
        }
      }
    };
  }
}
Pe("gufe-protein", cl);
const zi = "http://www.w3.org/2000/svg";
function se(e, t = {}) {
  const n = document.createElementNS(zi, e);
  for (const [r, i] of Object.entries(t)) n.setAttribute(r, String(i));
  return n;
}
function Pn(e, t) {
  const n = document.createElementNS(zi, "title");
  return n.textContent = t, e.appendChild(n), e;
}
function wt(e) {
  const t = /* @__PURE__ */ new Map();
  return ir(e, t, /* @__PURE__ */ new Set()), t;
}
function ir(e, t, n) {
  if (e == null || typeof e != "object" || n.has(e)) return;
  if (n.add(e), Array.isArray(e)) {
    for (const i of e) ir(i, t, n);
    return;
  }
  const r = e.registry;
  if (Array.isArray(r))
    for (const i of r) {
      const o = i["gufe-key"];
      typeof o == "string" && o && !t.has(o) && t.set(o, i);
    }
  for (const i of Object.values(e)) ir(i, t, n);
}
function We(e, t) {
  return t ? e.get(t) : void 0;
}
function Me(e, t, n) {
  const r = We(e, t);
  return r?.type === n ? r : void 0;
}
function ct(e) {
  return e.name ? e.name : (e["gufe-key"].split("-").pop() ?? e["gufe-key"]).slice(0, 6);
}
function vn(e, t) {
  const n = new Array(9);
  for (let r = 0; r < 3; r++)
    for (let i = 0; i < 3; i++)
      n[r * 3 + i] = e[r * 3] * t[i] + e[r * 3 + 1] * t[3 + i] + e[r * 3 + 2] * t[6 + i];
  return n;
}
function ai(e) {
  return [e[0], e[3], e[6], e[1], e[4], e[7], e[2], e[5], e[8]];
}
function ll(e) {
  return e[0] * (e[4] * e[8] - e[5] * e[7]) - e[1] * (e[3] * e[8] - e[5] * e[6]) + e[2] * (e[3] * e[7] - e[4] * e[6]);
}
function ci(e) {
  const t = e.slice(), n = [1, 0, 0, 0, 1, 0, 0, 0, 1];
  for (let r = 0; r < 50 && !(Math.abs(t[1]) + Math.abs(t[2]) + Math.abs(t[5]) < 1e-12); r++) {
    const o = [[0, 1], [0, 2], [1, 2]];
    for (let s = 0; s < 3; s++) {
      const a = o[s][0], d = o[s][1], g = t[a * 3 + d];
      if (Math.abs(g) < 1e-14) continue;
      const p = t[a * 3 + a], _ = t[d * 3 + d], b = (_ - p) / (2 * g);
      let v;
      Math.abs(b) > 1e10 ? v = 1 / (2 * b) : v = (b >= 0 ? 1 : -1) / (Math.abs(b) + Math.sqrt(b * b + 1));
      const S = 1 / Math.sqrt(1 + v * v), w = v * S;
      t[a * 3 + a] = p - v * g, t[d * 3 + d] = _ + v * g, t[a * 3 + d] = 0, t[d * 3 + a] = 0;
      for (let f = 0; f < 3; f++)
        if (f !== a && f !== d) {
          const y = t[f * 3 + a], u = t[f * 3 + d];
          t[f * 3 + a] = S * y - w * u, t[a * 3 + f] = t[f * 3 + a], t[f * 3 + d] = w * y + S * u, t[d * 3 + f] = t[f * 3 + d];
        }
      for (let f = 0; f < 3; f++) {
        const y = n[f * 3 + a], u = n[f * 3 + d];
        n[f * 3 + a] = S * y - w * u, n[f * 3 + d] = w * y + S * u;
      }
    }
  }
  return { values: [t[0], t[4], t[8]], vectors: n };
}
function dl(e, t) {
  const n = Math.min(e.length, t.length);
  if (n < 1) return null;
  const r = [0, 0, 0], i = [0, 0, 0];
  for (let m = 0; m < n; m++)
    r[0] += e[m][0], r[1] += e[m][1], r[2] += e[m][2], i[0] += t[m][0], i[1] += t[m][1], i[2] += t[m][2];
  if (r[0] /= n, r[1] /= n, r[2] /= n, i[0] /= n, i[1] /= n, i[2] /= n, n < 3)
    return { R: [1, 0, 0, 0, 1, 0, 0, 0, 1], t: [r[0] - i[0], r[1] - i[1], r[2] - i[2]] };
  const o = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let m = 0; m < n; m++) {
    const C = e[m][0] - r[0], c = e[m][1] - r[1], l = e[m][2] - r[2], h = t[m][0] - i[0], k = t[m][1] - i[1], x = t[m][2] - i[2];
    o[0] += C * h, o[1] += C * k, o[2] += C * x, o[3] += c * h, o[4] += c * k, o[5] += c * x, o[6] += l * h, o[7] += l * k, o[8] += l * x;
  }
  const s = ai(o), a = vn(s, o), d = vn(o, s);
  let g = ci(a), p = ci(d);
  function _(m) {
    const C = [0, 1, 2].sort((l, h) => m.values[h] - m.values[l]), c = new Array(9);
    for (let l = 0; l < 3; l++) {
      const h = C[l];
      c[l] = m.vectors[h], c[3 + l] = m.vectors[3 + h], c[6 + l] = m.vectors[6 + h];
    }
    return {
      values: [m.values[C[0]], m.values[C[1]], m.values[C[2]]],
      vectors: c
    };
  }
  g = _(g), p = _(p);
  const b = g.vectors, v = p.vectors;
  for (let m = 0; m < 3; m++) {
    const C = b[m], c = b[3 + m], l = b[6 + m], h = o[0] * C + o[1] * c + o[2] * l, k = o[3] * C + o[4] * c + o[5] * l, x = o[6] * C + o[7] * c + o[8] * l, O = v[m], z = v[3 + m], A = v[6 + m];
    h * O + k * z + x * A < 0 && (v[m] = -O, v[3 + m] = -z, v[6 + m] = -A);
  }
  const S = ai(b);
  let w = vn(v, S);
  ll(w) < 0 && (v[2] = -v[2], v[5] = -v[5], v[8] = -v[8], w = vn(v, S));
  const f = w[0] * i[0] + w[1] * i[1] + w[2] * i[2], y = w[3] * i[0] + w[4] * i[1] + w[5] * i[2], u = w[6] * i[0] + w[7] * i[1] + w[8] * i[2];
  return { R: w, t: [r[0] - f, r[1] - y, r[2] - u] };
}
function ul(e, t, n) {
  const r = e[0], i = e[1], o = e[2];
  return [
    t[0] * r + t[1] * i + t[2] * o + n[0],
    t[3] * r + t[4] * i + t[5] * o + n[1],
    t[6] * r + t[7] * i + t[8] * o + n[2]
  ];
}
const Yn = {
  elementChange: "#005AB5",
  uniqueAtom: "#DC3220",
  elementChange3D: "0x005AB5",
  uniqueAtom3D: "0xDC3220"
}, iu = [
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
], su = "hsv", q = [0, 0, 0], fl = {
  0: q,
  1: q,
  2: q,
  3: q,
  4: q,
  5: q,
  6: q,
  7: q,
  8: q,
  9: q,
  10: q,
  11: q,
  12: q,
  13: q,
  14: q,
  15: q,
  16: q,
  17: q,
  18: q,
  19: q,
  20: q,
  21: q,
  22: q,
  23: q,
  24: q,
  25: q,
  26: q,
  27: q,
  28: q,
  29: q,
  30: q,
  31: q,
  32: q,
  33: q,
  34: q,
  35: q,
  36: q,
  37: q,
  38: q,
  39: q,
  40: q,
  41: q,
  42: q,
  43: q,
  44: q,
  45: q,
  46: q,
  47: q,
  48: q,
  49: q,
  50: q,
  51: q,
  52: q,
  53: q,
  54: q,
  55: q,
  56: q,
  57: q,
  58: q,
  59: q,
  60: q,
  61: q,
  62: q,
  63: q,
  64: q,
  65: q,
  66: q,
  67: q,
  68: q,
  69: q,
  70: q,
  71: q,
  72: q,
  73: q,
  74: q,
  75: q,
  76: q,
  77: q,
  78: q,
  79: q,
  80: q,
  81: q,
  82: q,
  83: q,
  84: q,
  85: q,
  86: q,
  87: q,
  88: q,
  89: q,
  90: q,
  91: q,
  92: q,
  93: q,
  94: q,
  95: q,
  96: q,
  97: q,
  98: q,
  99: q,
  100: q,
  101: q,
  102: q,
  103: q,
  104: q,
  105: q,
  106: q,
  107: q,
  108: q,
  109: q,
  110: q,
  111: q,
  112: q,
  113: q,
  114: q,
  115: q,
  116: q,
  117: q,
  118: q
}, pl = "rdkit", hl = !0, ml = !0, gl = "#DC3220", yl = "#DC3220", vl = "#005AB5", $l = !0, bl = "outline", wl = 0.3, _l = 1.2, Sl = "show", Cl = "mono", kl = !0, El = !1, xl = 0.5, Pl = 0.6, Al = 2, Rl = 2, Nl = 10, Fl = 0.35, Ol = "", Ml = "#7C3AED", Tl = {
  style: pl,
  createdDestroyed: hl,
  modified: ml,
  destroyedColor: gl,
  createdColor: yl,
  modifiedColor: vl,
  boundary: $l,
  circles: bl,
  circleRadius: wl,
  circleStroke: _l,
  hydrogens: Sl,
  elementColors: Cl,
  atomNumbers: kl,
  stereo: El,
  numScale: xl,
  labelScale: Pl,
  bondWidth: Al,
  markWidth: Rl,
  haloWidth: Nl,
  haloOpacity: Fl,
  customSpec: Ol,
  customColor: Ml
}, jl = {
  version: 1,
  style: "rdkit",
  createdDestroyed: !0,
  modified: !0,
  destroyedColor: Yn.uniqueAtom,
  createdColor: Yn.uniqueAtom,
  modifiedColor: Yn.elementChange,
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
}, zl = ["rdkit", "recolor", "halo"], Il = ["outline", "filled", "off"], Dl = ["show", "dim", "hide"], ql = ["cpk", "mono"], Vl = {
  circleRadius: [0.12, 0.6],
  circleStroke: [0.4, 4],
  numScale: [0.15, 0.9],
  labelScale: [0.3, 0.9],
  bondWidth: [0.5, 5],
  markWidth: [0.5, 6],
  haloWidth: [2, 26],
  haloOpacity: [0.1, 1]
}, Bl = /^#[0-9a-fA-F]{6}$/;
function $n(e, t, n) {
  return typeof e == "string" && t.includes(e) ? e : n;
}
function Ve(e, t, n) {
  if (typeof e != "number" || !isFinite(e)) return n;
  const r = Vl[t];
  return r ? Math.min(r[1], Math.max(r[0], e)) : e;
}
const mt = (e, t) => typeof e == "boolean" ? e : t, bn = (e, t) => typeof e == "string" && Bl.test(e) ? e : t;
function Ll(e) {
  const t = e && typeof e == "object" ? e : {}, n = jl;
  return {
    version: 1,
    style: $n(t.style, zl, n.style),
    createdDestroyed: mt(t.createdDestroyed, n.createdDestroyed),
    modified: mt(t.modified, n.modified),
    destroyedColor: bn(t.destroyedColor, n.destroyedColor),
    createdColor: bn(t.createdColor, n.createdColor),
    modifiedColor: bn(t.modifiedColor, n.modifiedColor),
    boundary: mt(t.boundary, n.boundary),
    circles: $n(t.circles, Il, n.circles),
    circleRadius: Ve(t.circleRadius, "circleRadius", n.circleRadius),
    circleStroke: Ve(t.circleStroke, "circleStroke", n.circleStroke),
    hydrogens: $n(t.hydrogens, Dl, n.hydrogens),
    elementColors: $n(t.elementColors, ql, n.elementColors),
    atomNumbers: mt(t.atomNumbers, n.atomNumbers),
    stereo: mt(t.stereo, n.stereo),
    numScale: Ve(t.numScale, "numScale", n.numScale),
    labelScale: Ve(t.labelScale, "labelScale", n.labelScale),
    bondWidth: Ve(t.bondWidth, "bondWidth", n.bondWidth),
    markWidth: Ve(t.markWidth, "markWidth", n.markWidth),
    haloWidth: Ve(t.haloWidth, "haloWidth", n.haloWidth),
    haloOpacity: Ve(t.haloOpacity, "haloOpacity", n.haloOpacity),
    customSpec: typeof t.customSpec == "string" ? t.customSpec : n.customSpec,
    customColor: bn(t.customColor, n.customColor)
  };
}
const wn = Ll(Tl);
function Ul(e) {
  const t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), r = 5e3;
  for (const i of String(e || "").split(/[,\s;]+/).filter(Boolean)) {
    const o = /^([LlRr])[:=](.*)$/.exec(i), s = o ? o[1].toLowerCase() === "l" ? "left" : "right" : "both", a = o ? o[2] : i, d = (p) => {
      s !== "right" && t.add(p), s !== "left" && n.add(p);
    }, g = /^(\d+)-(\d+)$/.exec(a);
    if (g) {
      const p = Math.min(+g[1], +g[2]), _ = Math.min(Math.max(+g[1], +g[2]), p + r - 1);
      for (let b = p; b <= _; b++) d(b);
    } else /^\d+$/.test(a) && d(+a);
  }
  return { left: t, right: n };
}
function Ii(e, t, n) {
  const r = [];
  for (let i = 0; i < e.bonds.length; i++) {
    const [o, s] = e.bonds[i], a = t.has(o), d = t.has(s);
    (n ? a || d : a && d) && r.push(i);
  }
  return r;
}
function li(e) {
  const t = e.replace("#", "");
  return [
    parseInt(t.slice(0, 2), 16) / 255,
    parseInt(t.slice(2, 4), 16) / 255,
    parseInt(t.slice(4, 6), 16) / 255
  ];
}
function Kl(e, t) {
  return [
    1 - (1 - e[0]) * (1 - t),
    1 - (1 - e[1]) * (1 - t),
    1 - (1 - e[2]) * (1 - t)
  ];
}
function Hl(e, t, n) {
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
let rt = null;
function Gl(e) {
  if (rt !== null) return rt;
  rt = !1;
  let t = null;
  try {
    t = e.get_mol("CC"), t && (rt = /class\s*=\s*['"][^'"]*bond-0/.test(t.get_svg(60, 60)));
  } catch {
  } finally {
    if (t)
      try {
        t.delete();
      } catch {
      }
  }
  return rt || console.warn("[gufe-viz] this RDKit build emits no bond/atom classes - drawing without bond marking"), rt;
}
function Wl(e, t) {
  return e.style === "rdkit" ? "rdkit" : Gl(t) ? e.style : "rdkit";
}
function Jl(e, t, n, r, i, o) {
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
  e.elementColors === "mono" && (s.atomColourPalette = fl), i === "rdkit" && (s.continuousHighlight = !1);
  const a = {}, d = {};
  for (const _ of n) {
    const b = li(_.color);
    if (i === "recolor" && e.circles === "off") continue;
    const v = i === "recolor" && e.circles === "filled" ? Kl(b, 0.7) : b;
    for (const S of _.atoms)
      a[S] = v, d[S] = e.circleRadius;
  }
  const g = li(e.customColor);
  for (const _ of r)
    _ < o && (a[_] = g, d[_] = e.circleRadius);
  const p = Object.keys(a).map(Number);
  return p.length && (s.atoms = p, s.highlightAtomColors = a, s.highlightAtomRadii = d), s;
}
function Yl(e, t, n, r) {
  let i = null;
  try {
    return i = e.get_mol(t, JSON.stringify({ removeHs: !1 })), i ? i.get_svg_with_highlights ? i.get_svg_with_highlights(JSON.stringify(r)) || null : i.get_svg(n, n) || null : null;
  } catch (o) {
    return console.warn("[gufe-viz] depictStyledSVG threw -", $e(o)), null;
  } finally {
    if (i)
      try {
        i.delete();
      } catch {
      }
  }
}
const Xl = "http://www.w3.org/2000/svg";
function Di(e, t) {
  return Array.from(e.querySelectorAll(`[class~="bond-${t}"]`));
}
function _r(e, t, n) {
  const r = [];
  for (const i of Array.from(e.querySelectorAll(`[class~="atom-${t}"]`))) {
    if (/(^|\s)bond-\d+(\s|$)/.test(i.getAttribute("class") || "")) continue;
    const o = i.tagName.toLowerCase();
    (o === "ellipse" || o === "circle" || o === "rect") === n && r.push(i);
  }
  return r;
}
function qi(e) {
  const n = e.style?.fill || e.getAttribute("fill") || "";
  return !!n && n !== "none";
}
function di(e, t, n, r, i, o, s) {
  for (const a of Ii(t, r, s))
    for (const d of Di(e, a)) {
      const g = d.style;
      qi(d) ? g.fill = i : (g.stroke = i, g.strokeWidth = `${n.markWidth}px`);
    }
  if (o)
    for (const a of r)
      for (const d of _r(e, a, !1)) d.style.fill = o;
}
function Zl(e, t, n, r, i, o) {
  const s = e.ownerDocument;
  if (!s) return;
  const a = s.createElementNS(Xl, "g");
  a.setAttribute("data-gufe-halo", "1"), a.style.opacity = String(n.haloOpacity);
  for (const g of Ii(t, r, o))
    for (const p of Di(e, g)) {
      if (qi(p)) continue;
      const _ = p.cloneNode(!0);
      _.removeAttribute("class"), _.style.fill = "none", _.style.stroke = i, _.style.strokeWidth = `${n.haloWidth}px`, _.style.strokeLinecap = "round", _.style.strokeLinejoin = "round", _.style.strokeOpacity = "1", a.appendChild(_);
    }
  if (!a.childNodes.length) return;
  const d = e.querySelector("rect");
  d?.nextSibling ? e.insertBefore(a, d.nextSibling) : d ? e.appendChild(a) : e.insertBefore(a, e.firstChild);
}
function Ql(e, t, n, r, i) {
  for (const o of n)
    if (!r.has(o))
      for (const s of _r(e, o, !0)) {
        const a = s.style;
        a.fill = "none", a.stroke = i, a.strokeWidth = `${t.circleStroke}px`;
      }
}
function ed(e, t, n, r, i) {
  for (const o of n)
    if (!r.has(o))
      for (const s of _r(e, o, !0)) {
        const a = s.style;
        a.stroke = i, a.strokeWidth = `${t.circleStroke}px`;
      }
}
function td(e, t, n) {
  if (n.hydrogens !== "show") {
    for (let r = 0; r < t.symbols.length; r++)
      if (t.symbols[r] === "H")
        for (const i of Array.from(e.querySelectorAll(`[class~="atom-${r}"]`))) {
          const o = i.style;
          n.hydrogens === "hide" ? o.display = "none" : o.opacity = "0.22";
        }
  }
}
function nd(e, t, n, r, i, o) {
  if (o !== "rdkit")
    for (const s of r)
      if (o === "recolor") {
        const a = n.circles === "filled";
        di(
          e,
          t,
          n,
          s.atoms,
          s.color,
          a && s.blackLabelOnFill ? "#000000" : s.color,
          s.boundary
        ), n.circles === "outline" ? Ql(e, n, s.atoms, i, s.color) : a && s.edgeOnFill && ed(e, n, s.atoms, i, s.color);
      } else
        Zl(e, t, n, s.atoms, s.color, s.boundary), di(e, t, n, s.atoms, s.color, null, s.boundary);
  td(e, t, n);
}
const rd = {
  core: "0xaaaaaa",
  uniqueA: "0xff4d4d",
  uniqueB: "0x4dff88",
  pairA: "0xff8888",
  pairB: "0x88ffaa",
  pairLine: "0xffee55",
  overlayA: "0xff6666",
  overlayB: "0x66ff99"
}, od = {
  core: "0x888888",
  uniqueA: "0xd62828",
  uniqueB: "0x2a9d4a",
  pairA: "0xd62828",
  pairB: "0x2a9d4a",
  pairLine: "0xd9a300",
  overlayA: "0xd62828",
  overlayB: "0x2a9d4a"
};
function id() {
  try {
    return globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches ?? !1;
  } catch {
    return !1;
  }
}
const ke = id() ? rd : od, sd = [
  { id: "plain", label: "3D", title: "Plain 3D view" },
  { id: "colored", label: "3D-Map", title: "Colour-coded by mapping" },
  { id: "lines", label: "Pairs", title: "Dashed lines between mapped atoms" },
  { id: "overlay", label: "Overlay", title: "Both molecules superimposed" },
  { id: "2d", label: "2D", title: "2D depictions with highlights" },
  { id: "info", label: "Info", title: "The mapping in numbers" }
], Xn = 420, ge = {
  stick: 0.15,
  sphere: 0.25,
  uniqueStick: 0.18,
  uniqueSphere: 0.32,
  pairSphere: 0.22,
  overlayOpacity: 0.7,
  lineRadius: 0.04
}, Zn = { gap: 2.5, minLiftFraction: 0.6 };
function ui(e, t, n) {
  const r = [], i = [], o = [];
  for (let s = 0; s < t.length; s++) {
    const a = e.get(s);
    a === void 0 ? r.push(s) : t[s] !== n[a] ? i.push(s) : o.push(s);
  }
  return { atoms: r, elements: i, mapped: o };
}
function ad(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e.componentA_to_componentB ?? [])
    Number.isInteger(n?.index_A) && Number.isInteger(n?.index_B) && t.set(n.index_A, n.index_B);
  return t;
}
function Vi(e, t) {
  const n = Me(t, e.componentA, "SmallMoleculeComponentViz"), r = Me(t, e.componentB, "SmallMoleculeComponentViz");
  return !n || !r ? null : { ...e, registry: n["gufe-key"] === r["gufe-key"] ? [n] : [n, r] };
}
function fi(e) {
  const t = [1 / 0, 1 / 0, 1 / 0], n = [-1 / 0, -1 / 0, -1 / 0];
  for (const r of e)
    for (let i = 0; i < 3; i++)
      r[i] < t[i] && (t[i] = r[i]), r[i] > n[i] && (n[i] = r[i]);
  return { min: t, max: n, span: [n[0] - t[0], n[1] - t[1], n[2] - t[2]] };
}
function cd(e, t) {
  const n = fi(e), r = fi(t);
  let i = 0;
  n.span[1] < n.span[i] && (i = 1), n.span[2] < n.span[i] && (i = 2);
  const o = Math.max(n.span[0], n.span[1], n.span[2]), s = n.max[i] - r.min[i] + Zn.gap, a = Zn.minLiftFraction * o + Zn.gap;
  return { axis: i, lift: Math.max(s, a) };
}
class ld extends xe {
  placeholder() {
    return "Waiting for a LigandAtomMapping payload...";
  }
  renderView(t, n) {
    const r = wt(n), i = Me(r, n.componentA, "SmallMoleculeComponentViz"), o = Me(r, n.componentB, "SmallMoleculeComponentViz");
    if (!i || !o)
      return t.appendChild(
        le("This mapping names two molecules, and its registry does not hold them.")
      ), {};
    const s = ct(i), a = ct(o), d = ad(n);
    let g, p;
    try {
      g = ni(i.sdf, s), p = ni(o.sdf, a);
    } catch (L) {
      return t.appendChild(le(`Could not read a molecule: ${$e(L)}`, !0)), {};
    }
    const _ = /* @__PURE__ */ new Map();
    for (const [L, G] of d) _.set(G, L);
    const b = ui(d, g.symbols, p.symbols), v = ui(_, p.symbols, g.symbols), S = M("div", "position:relative;flex:1;min-height:0;display:flex;flex-direction:column;");
    t.appendChild(S);
    const w = M("div", "flex:1;display:flex;flex-direction:column;min-height:0;");
    S.appendChild(w);
    let f = "plain";
    const y = M(
      "div",
      vi
    );
    y.appendChild(
      An(sd, f, (L) => {
        f = L, Z();
      })
    ), S.appendChild(y);
    let u = [], m = 0, C = !0;
    const c = () => {
      m && cancelAnimationFrame(m), m = 0;
      for (const L of u) {
        L.guard?.cleanup();
        try {
          L.viewer?.clear();
        } catch {
        }
      }
      u = [], w.replaceChildren();
    }, l = (L) => {
      const G = M("div", "flex:1;display:flex;flex-direction:column;position:relative;min-height:0;");
      G.appendChild(
        M(
          "div",
          $t,
          L
        )
      );
      const U = M("div", "flex:1;position:relative;min-height:0;");
      U.dataset.gufeViewer = "", G.appendChild(U), w.appendChild(G);
      const Q = { container: U, viewer: null, guard: null };
      return u.push(Q), Q;
    }, h = () => {
      if (u.length < 2) return;
      const L = u.map(() => "");
      let G = !1;
      const U = () => {
        if (C) {
          if (!G)
            for (let Q = 0; Q < u.length; Q++) {
              const V = u[Q].viewer;
              if (!V) continue;
              const P = JSON.stringify(V.getView());
              if (P !== L[Q]) {
                G = !0;
                for (let I = 0; I < u.length; I++)
                  I !== Q && u[I].viewer && (u[I].viewer.setView(V.getView()), u[I].viewer.render()), L[I] = P;
                G = !1;
                break;
              }
            }
          m = requestAnimationFrame(U);
        }
      };
      m = requestAnimationFrame(U);
    }, k = (L, G) => {
      const U = Ge.createViewer(L.container, { backgroundColor: vt.viewer });
      for (const { mol: Q } of G) U.addModel(Yc(Q), "sdf");
      return L.viewer = U, L.guard = br(L.container, {
        hint: "Click or hold Ctrl to zoom",
        onZoom: () => {
        }
      }), U;
    }, x = () => {
      for (const L of [g, p]) {
        const G = l(L.name), U = k(G, [{ mol: L }]);
        U.setStyle(
          {},
          { stick: { radius: ge.stick, colorscheme: "Jmol" }, sphere: { scale: ge.sphere, colorscheme: "Jmol" } }
        ), U.zoomTo(), U.render();
      }
      h();
    }, O = () => {
      const L = [
        { mol: g, uniques: b, colour: ke.uniqueA },
        { mol: p, uniques: v, colour: ke.uniqueB }
      ];
      for (const G of L) {
        const U = l(G.mol.name), Q = k(U, [{ mol: G.mol }]);
        Q.setStyle(
          {},
          { stick: { radius: ge.stick, color: ke.core }, sphere: { scale: ge.sphere, color: ke.core } }
        );
        for (const V of G.uniques.atoms)
          Q.addStyle(
            { serial: V + 1 },
            {
              stick: { radius: ge.uniqueStick, color: G.colour },
              sphere: { scale: ge.uniqueSphere, color: G.colour }
            }
          );
        Q.zoomTo(), Q.render();
      }
      h();
    }, z = () => {
      const L = l(`${s} to ${a}  (${d.size} mapped pairs)`), G = [], U = [];
      for (const [E, D] of d) {
        const H = g.coords[E], J = p.coords[D];
        H && J && (G.push(H), U.push(J));
      }
      const Q = dl(G, U), V = p.coords.map((E) => Q ? ul(E, Q.R, Q.t) : [...E]), { axis: P, lift: I } = cd(g.coords, V), N = {
        ...p,
        coords: V.map((E) => {
          const D = [E[0], E[1], E[2]];
          return D[P] += I, D;
        })
      }, $ = k(L, [{ mol: g }, { mol: N }]);
      $.setStyle(
        { model: 0 },
        { stick: { radius: ge.stick, color: ke.pairA }, sphere: { scale: ge.pairSphere, color: ke.pairA } }
      ), $.setStyle(
        { model: 1 },
        { stick: { radius: ge.stick, color: ke.pairB }, sphere: { scale: ge.pairSphere, color: ke.pairB } }
      );
      for (const [E, D] of d) {
        const H = g.coords[E], J = N.coords[D];
        !H || !J || $.addCylinder({
          start: { x: H[0], y: H[1], z: H[2] },
          end: { x: J[0], y: J[1], z: J[2] },
          radius: ge.lineRadius,
          dashed: !0,
          fromCap: "round",
          toCap: "round",
          color: ke.pairLine
        });
      }
      $.zoomTo(), P === 2 ? $.rotate(90, "x") : P === 0 && $.rotate(-90, "z"), $.render();
    }, A = () => {
      const L = l(`${s} + ${a}  (overlay)`), G = k(L, [{ mol: g }, { mol: p }]);
      for (const [U, Q] of [
        [0, ke.overlayA],
        [1, ke.overlayB]
      ])
        G.setStyle(
          { model: U },
          {
            stick: { radius: ge.stick, color: Q, opacity: ge.overlayOpacity },
            sphere: { scale: ge.pairSphere, color: Q, opacity: ge.overlayOpacity }
          }
        );
      G.zoomTo(), G.render();
    }, j = () => {
      const L = wn, G = Ul(L.customSpec), Q = [
        { mol: g, sdf: i.sdf, uniques: b, side: "left", custom: G.left },
        { mol: p, sdf: o.sdf, uniques: v, side: "right", custom: G.right }
      ].map((V) => {
        const P = M("div", "flex:1;display:flex;flex-direction:column;min-height:0;");
        P.appendChild(
          M(
            "div",
            $t,
            V.mol.name
          )
        );
        const I = M(
          "div",
          `flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:8px;background:${vt.canvas2D};`
        );
        return I.appendChild(le("Loading 2D depiction...")), P.appendChild(I), w.appendChild(P), { box: I, side: V };
      });
      $r().then((V) => {
        const P = Wl(L, V);
        for (const { box: I, side: N } of Q) {
          const $ = Hl(L, N.uniques, N.side), E = Jl(
            L,
            Xn,
            $,
            N.custom,
            P,
            N.mol.symbols.length
          ), D = Yl(V, N.sdf, Xn, E);
          if (I.replaceChildren(), !D) {
            I.appendChild(le("Failed to parse molecule", !0));
            continue;
          }
          Ti(I, D, Xn);
          const H = I.querySelector("svg");
          H && nd(H, N.mol, L, $, N.custom, P);
        }
      }).catch((V) => {
        for (const { box: P } of Q)
          P.replaceChildren(le(`RDKit failed to load: ${$e(V)}`, !0));
      });
    }, W = () => {
      const L = M("div", "flex:1;min-height:0;overflow:auto;padding:14px;display:flex;flex-direction:column;gap:14px;");
      w.appendChild(L);
      const G = M("div", "display:flex;flex-direction:column;gap:2px;");
      G.appendChild(
        M(
          "div",
          `font-size:${X.title};font-weight:${Je.bold};color:${Oe.title};`,
          n.name || `${s} to ${a}`
        )
      ), G.appendChild(M("div", `font-size:${X.body};color:${Oe.faint};`, "LigandAtomMapping")), L.appendChild(G);
      const U = M("div", `display:flex;flex-wrap:wrap;gap:${ce.lg} 16px;font-size:${X.small};`);
      U.appendChild(ue("mapped atoms", String(d.size))), U.appendChild(
        ue("element changes", String(b.elements.length), wn.modifiedColor)
      ), U.appendChild(ue(`unique to ${s}`, String(b.atoms.length), wn.destroyedColor)), U.appendChild(ue(`unique to ${a}`, String(v.atoms.length), wn.createdColor)), U.appendChild(ue(`atoms in ${s}`, String(g.symbols.length))), U.appendChild(ue(`atoms in ${a}`, String(p.symbols.length))), U.appendChild(ue("score", n.score == null ? it : n.score.toFixed(3))), L.appendChild(U);
      const Q = M("div", xr, "Correspondence");
      L.appendChild(Q);
      const V = M("div", Er);
      V.textContent = d.size ? Array.from(d, ([I, N]) => `${I} -> ${N}`).join("   ") : "This mapping relates no atoms at all.", L.appendChild(V);
      const P = Object.entries(n.annotations ?? {}).filter(([I]) => I !== "score");
      if (P.length) {
        L.appendChild(M("div", xr, "Annotations"));
        const I = M("div", `${Er}color:${Oe.faint};`);
        for (const [N, $] of P)
          I.appendChild(M("div", "", `${N}: ${String($)}`));
        L.appendChild(I);
      }
      L.appendChild(
        M(
          "div",
          `${Gi}overflow-wrap:anywhere;`,
          `gufe key: ${n["gufe-key"]}`
        )
      );
    }, Z = () => {
      if (c(), f === "info") {
        W();
        return;
      }
      if (f === "2d") {
        j();
        return;
      }
      w.appendChild(le("Loading 3D viewer...")), vr().then(() => {
        C && (w.replaceChildren(), f === "colored" ? O() : f === "lines" ? z() : f === "overlay" ? A() : x());
      }).catch((L) => {
        w.replaceChildren(le(`3D render failed: ${$e(L)}`, !0));
      });
    };
    return Z(), {
      onResize() {
        for (const L of u)
          L.viewer && (L.viewer.resize(), L.viewer.render());
      },
      cleanup() {
        C = !1, c();
      }
    };
  }
}
Pe("gufe-atom-mapping", ld);
const dd = ["Force-directed", "Circular", "Radial"], st = 38, _n = 200, ud = 4, fd = 14, pd = 18, pi = 1.5, hd = 6.5, md = 0.9, gd = 14, Qn = { size: 8, clearance: 8 }, er = { fontSize: 10, padding: 3, backgroundOpacity: 0.92 }, yd = { padding: 4 }, hi = { captions: 0.5, depictions: 1.1 }, Sn = 200, vd = 24, tr = { node: 0.12, edge: 0.06 }, $d = 1.2, _e = {
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
function bd(e) {
  const t = M(
    "div",
    `position:absolute;z-index:30;pointer-events:none;opacity:0;transition:opacity .12s ease;padding:7px 10px;border-radius:6px;font-size:\${FONT.small};line-height:1.5;max-width:260px;background:${F.tooltipBg};border:1px solid ${F.tooltipBorder};color:${F.textPrimary};box-shadow:0 4px 14px rgba(0,0,0,0.28);`
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
function wd(e) {
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
      refX: st + Qn.clearance,
      refY: 0,
      markerUnits: "userSpaceOnUse",
      markerWidth: Qn.size,
      markerHeight: Qn.size,
      orient: "auto"
    });
    return o.appendChild(se("path", { d: "M0,-5L10,0L0,5", fill: n })), e.appendChild(o), i;
  };
}
function _d(e) {
  const t = parseInt(e.replace("#", ""), 16);
  return [t >> 16 & 255, t >> 8 & 255, t & 255];
}
function Sd(e) {
  const [t, n] = F.netEdgeRamp.map(_d), r = Math.max(0, Math.min(1, e ?? 0.5));
  return `rgb(${t.map((o, s) => Math.round(o + (n[s] - o) * r)).join(",")})`;
}
const Ne = ct, Cd = (e, t) => e.length > t ? `${e.slice(0, t - 1)}...` : e;
function kd(e) {
  const t = /* @__PURE__ */ new Set();
  let n = /* @__PURE__ */ new Set();
  const r = (o, s) => {
    if (t.has(s) || n.has(s)) return;
    const a = e.nodes[s], d = a.sdf && Mi(o, a.sdf, _n);
    if (!d) {
      n.add(s);
      return;
    }
    const g = new DOMParser().parseFromString(d, "image/svg+xml").documentElement;
    if (!g || g.nodeName.toLowerCase() === "parsererror") {
      n.add(s);
      return;
    }
    const p = (st - ud) * 2 / _n, _ = e.depictionGroups[s];
    _.setAttribute(
      "transform",
      `translate(${-p * _n / 2},${-p * _n / 2}) scale(${p})`
    );
    let b = 0;
    for (const v of Array.from(g.childNodes)) {
      if (v.nodeType !== 1) continue;
      const S = v.nodeName.toLowerCase();
      if (!(S === "defs" || S === "metadata" || S === "title")) {
        if (S === "rect") {
          const w = (v.getAttribute("fill") ?? "").toLowerCase();
          if (w === "#ffffff" || w === "white" || w === "rgb(255,255,255)") continue;
        }
        _.appendChild(document.importNode(v, !0)), b++;
      }
    }
    b ? t.add(s) : n.add(s);
  };
  return { apply: (o, s, a) => {
    const d = o >= hi.captions;
    for (const v of e.captions)
      v.setAttribute("display", d ? "inline" : "none");
    const g = o >= hi.depictions;
    for (let v = 0; v < e.nodes.length; v++) {
      const S = g && t.has(v);
      e.depictionGroups[v].setAttribute("display", S ? "inline" : "none"), e.initials[v].setAttribute("display", S ? "none" : "inline");
    }
    if (!g) return;
    const { width: p, height: _ } = e.viewport(), b = [];
    e.nodes.forEach((v, S) => {
      if (t.has(S) || n.has(S)) return;
      const w = v.x * o + s, f = v.y * o + a;
      w < -Sn || f < -Sn || w > p + Sn || f > _ + Sn || b.push(S);
    }), b.length && e.rdkit().then((v) => {
      if (v)
        for (const S of b) {
          r(v, S);
          const w = t.has(S);
          e.depictionGroups[S].setAttribute("display", w ? "inline" : "none"), e.initials[S].setAttribute("display", w ? "none" : "inline");
        }
    }).catch(() => {
    });
  }, drawn: () => t.size };
}
function Ed(e, t, n, r, i) {
  const o = (s) => i === "keys" ? s["gufe-key"] : Ne(s);
  return r === "ligands" ? e.filter((s) => n.has(s["gufe-key"])).map(o).join(", ") : t.filter((s) => n.has(s.from["gufe-key"]) && n.has(s.to["gufe-key"])).map((s) => `${o(s.from)}, ${o(s.to)}`).join(`
`);
}
function xd(e, t) {
  navigator.clipboard?.writeText(e).catch(() => mi(e, t)), navigator.clipboard || mi(e, t);
}
function mi(e, t) {
  const n = M("textarea", "width:100%;height:80px;font-size:${FONT.small};box-sizing:border-box;");
  n.value = e, n.readOnly = !0, t.appendChild(n), n.select();
}
function Pd(e, t) {
  const n = URL.createObjectURL(new Blob([e], { type: "text/plain" })), r = M("a", "display:none;");
  r.href = n, r.download = t, document.body.appendChild(r), r.click(), r.remove(), URL.revokeObjectURL(n);
}
function Ad(e) {
  const t = M(
    "div",
    `display:flex;flex-direction:column;gap:8px;width:236px;padding:10px;min-height:0;background:${F.panelBg};border-right:1px solid ${F.splitBorder};`
  ), n = M("input", `${Cn}width:100%;box-sizing:border-box;`);
  n.type = "search", n.placeholder = "Search ligands", n.setAttribute("aria-label", "Search ligands by name, SMILES or gufe key"), t.appendChild(n);
  const r = M("div", `display:flex;align-items:center;gap:8px;font-size:${X.small};color:${F.textMuted};`), i = M("span", `min-width:28px;color:${F.textPrimary};`, "0.00"), o = M("input", "flex:1;");
  o.type = "range", o.min = "0", o.max = "1", o.step = "0.01", o.value = "0", o.setAttribute("aria-label", "Hide mappings scoring below this"), r.appendChild(M("span", "", "score >=")), r.appendChild(o), r.appendChild(i), t.appendChild(r);
  const s = M("div", `font-size:${X.small};color:${F.textMuted2};`);
  t.appendChild(s);
  const a = M("div", "flex:1;min-height:0;overflow:auto;display:flex;flex-direction:column;gap:3px;");
  t.appendChild(a);
  const d = M("div", "display:flex;flex-direction:column;gap:6px;"), g = M("div", `display:flex;align-items:center;gap:6px;font-size:${X.small};color:${F.textMuted};`);
  g.appendChild(M("span", "", "copy as"));
  const p = M("select", `${Cn}flex:1;`);
  for (const [f, y] of [
    ["names", "names"],
    ["keys", "gufe keys"]
  ]) {
    const u = M("option", "", y);
    u.value = f, p.appendChild(u);
  }
  g.appendChild(p), d.appendChild(g);
  const _ = M("div", "display:flex;gap:4px;"), b = [
    ["Ligands", "ligands", "Copy the selected ligand names, comma separated"],
    ["Edges", "edges", "Copy the selected edges, one pair per line"]
  ];
  for (const [f, y, u] of b) {
    const m = M("button", `${at}flex:1;`, f);
    m.title = u, m.onclick = (C) => {
      const c = p.value, l = Ed(e.nodes, e.edges, e.selected, y, c);
      l && (C.shiftKey ? Pd(l, `selected-${y}.txt`) : xd(l, d));
    }, _.appendChild(m);
  }
  d.appendChild(_), d.appendChild(
    M("div", `font-size:${X.tiny};color:${F.textMuted2};`, "Shift-click to save as a file instead.")
  ), t.appendChild(d);
  const v = M("button", `${at}width:100%;`, "Clear selection");
  v.onclick = () => {
    e.selected.clear(), w(), e.refresh();
  }, t.appendChild(v);
  const S = (f) => {
    const y = e.query.text.trim().toLowerCase();
    return y ? Ne(f).toLowerCase().includes(y) || (f.smiles ?? "").toLowerCase().includes(y) || f["gufe-key"].toLowerCase().includes(y) : !0;
  }, w = () => {
    a.replaceChildren();
    const f = e.nodes.map((y, u) => ({ node: y, index: u })).filter(({ node: y }) => S(y));
    s.textContent = `${f.length} of ${e.nodes.length} ligands`;
    for (const { node: y, index: u } of f) {
      const m = y["gufe-key"], C = M(
        "button",
        `display:flex;align-items:center;gap:6px;padding:5px 8px;border-radius:6px;text-align:left;font-family:inherit;font-size:\${FONT.small};cursor:pointer;width:100%;min-width:0;border:1px solid ${e.selected.has(m) ? F.cardBorderActive : F.cardBorder};background:${e.selected.has(m) ? F.cardBgActive : F.cardBg};color:${F.textPrimary};`
      ), c = M("span", "flex:1;min-width:0;overflow-wrap:anywhere;", Ne(y));
      c.title = `${Ne(y)}
${y.smiles ?? ""}`, C.appendChild(c), C.onclick = (l) => {
        l.shiftKey || l.metaKey || l.ctrlKey ? e.selected.has(m) ? e.selected.delete(m) : e.selected.add(m) : (e.selected.clear(), e.selected.add(m), e.focus(u)), w(), e.refresh();
      }, a.appendChild(C);
    }
    f.length || a.appendChild(M("div", `font-size:${X.small};padding:8px;color:${F.textMuted2};`, "Nothing matches."));
  };
  return n.oninput = () => {
    e.query.text = n.value, w(), e.refresh();
  }, o.oninput = () => {
    e.filter.minScore = Number(o.value), i.textContent = e.filter.minScore.toFixed(2), e.refresh();
  }, w(), t;
}
class Rd extends xe {
  placeholder() {
    return "Waiting for a LigandNetwork payload...";
  }
  renderView(t, n) {
    const r = wt(n), i = [];
    let o = 0;
    for (const G of n.nodes ?? []) {
      const U = Me(r, G, "SmallMoleculeComponentViz");
      if (!U) {
        o++;
        continue;
      }
      i.push({ ...U, x: 0, y: 0 });
    }
    const s = new Map(i.map((G) => [G["gufe-key"], G])), a = [];
    let d = 0;
    for (const G of n.edges ?? []) {
      const U = s.get(G.componentA), Q = s.get(G.componentB);
      if (!U || !Q) {
        d++;
        continue;
      }
      a.push({ ...G, index: a.length, from: U, to: Q });
    }
    const g = Be(n.name || "Ligand network");
    g.statsEl.appendChild(ue("ligands", String(i.length))), g.statsEl.appendChild(ue("mappings", String(a.length))), t.appendChild(g);
    const p = M("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    t.appendChild(p);
    const _ = /* @__PURE__ */ new Set(), b = { minScore: 0 }, v = { text: "" };
    let S = () => {
    };
    const w = Yi(
      g,
      () => Ad({
        nodes: i,
        edges: a,
        selected: _,
        filter: b,
        query: v,
        refresh: () => S(),
        focus: (G) => h(G)
      }),
      { label: "Search, filter and select ligands", onToggle: () => L() }
    );
    p.appendChild(w.panel);
    const f = M("div", `flex:1 1 58%;min-width:0;display:flex;flex-direction:column;background:${F.netCanvasBg};`), y = M("div", `flex:1 1 42%;min-width:0;display:flex;flex-direction:column;background:${F.appBg};`);
    p.appendChild(f), p.appendChild(M("div", `width:1px;flex-shrink:0;background:${F.splitBorder};`)), p.appendChild(y);
    const u = M("div", `flex:1;position:relative;overflow:hidden;min-height:0;background:${F.netCanvasBg};`);
    f.appendChild(u);
    const m = this.#t(
      (G) => L(G),
      () => W()
    );
    f.appendChild(m.bar);
    const C = this.#e(y, r);
    if (!i.length)
      return u.appendChild(
        le(
          o ? "None of this network's ligands are in its registry." : "This network has no ligands."
        )
      ), C.message("Nothing to show."), {};
    o && He(
      u,
      `${o} ligand${o === 1 ? "" : "s"} named by this network are not in its registry`
    ), d && He(u, `${d} mapping${d === 1 ? "" : "s"} name a ligand this network does not contain`);
    const c = $r().catch((G) => (console.warn("[gufe-viz] RDKit failed to load:", $e(G)), null)), l = bd(u);
    let h = () => {
    }, k = a.length ? 0 : -1, x = null, O = "Force-directed", z = !1, A = !0, j = () => {
    }, W = () => {
    };
    const Z = (G) => {
      k = G, C.show(a[G] ?? null), j();
    }, L = (G = O) => {
      O = G, x?.(), x = null, u.querySelector("svg")?.remove();
      const U = u.clientWidth || 800, Q = u.clientHeight || 600;
      Nd(i, U, Q, O, a);
      const V = () => {
        if (!A) return;
        const P = this.#r(u, i, a, U, Q, Z, c, l);
        j = () => P.setSelected(k), W = P.reset, x = P.cleanup, h = (I) => P.focusOn(I), S = () => {
          const I = v.text.trim().toLowerCase(), N = _.size > 0 || I.length > 0, $ = /* @__PURE__ */ new Set();
          for (const H of i) {
            const J = H["gufe-key"], ie = _.has(J) || I.length > 0 && (Ne(H).toLowerCase().includes(I) || (H.smiles ?? "").toLowerCase().includes(I) || J.toLowerCase().includes(I));
            (!N || ie) && $.add(J);
          }
          const E = /* @__PURE__ */ new Set();
          a.forEach((H, J) => {
            (H.score ?? 0) < b.minScore || !$.has(H.from["gufe-key"]) || !$.has(H.to["gufe-key"]) || E.add(J);
          });
          const D = N || b.minScore > 0;
          P.setEmphasis(D ? $ : null, D ? E : null);
        }, j(), S(), P.fit();
      };
      if (O !== "Force-directed" || z) {
        V();
        return;
      }
      Fd(i, a, U, Q).then((P) => {
        if (A) {
          if (P) {
            V();
            return;
          }
          z = !0, m.picker.value = "Circular", He(u, "d3 could not be loaded - showing the circular layout instead"), L("Circular");
        }
      }, V);
    };
    return L(), C.show(a[k] ?? null), {
      onResize: () => L(),
      cleanup: () => {
        A = !1, l.remove(), x?.();
      }
    };
  }
  #t(t, n) {
    const r = M(
      "div",
      yi.bottom
    ), i = M("div", `display:flex;align-items:center;gap:6px;font-size:${X.small};color:${F.textMuted};`);
    i.appendChild(M("span", "", "score")), i.appendChild(
      M(
        "span",
        `width:40px;height:4px;border-radius:2px;background:linear-gradient(to right,${F.netEdgeRamp.join(",")});`
      )
    ), i.appendChild(M("span", "", "0 -> 1")), r.appendChild(i), r.appendChild(M("label", `font-size:${X.body};margin-left:auto;color:${F.textMuted};`, "Layout"));
    const o = M("select", Cn);
    for (const s of dd) {
      const a = M("option", "", s);
      a.value = s, o.appendChild(a);
    }
    return o.onchange = () => t(o.value), r.appendChild(o), r.appendChild(wr(n, "Reset pan and zoom")), { bar: r, picker: o };
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
    const r = M("div", "flex:1;min-height:0;display:flex;flex-direction:column;");
    t.appendChild(r);
    const i = (s) => r.replaceChildren(le(s));
    return { show: (s) => {
      if (!s) {
        i("Click an edge to see its mapping.");
        return;
      }
      const a = document.createElement("gufe-atom-mapping");
      a.style.cssText = "flex:1;min-width:0;min-height:0;display:flex;", a.payload = Vi(s, n), r.replaceChildren(a);
    }, message: i };
  }
  /** Build the SVG for the current node positions. Returns the handles the
   * caller needs afterwards: selection, depictions, and teardown. */
  #r(t, n, r, i, o, s, a, d) {
    const g = se("svg", { width: i, height: o, style: "display:block;touch-action:none;" }), p = se("g");
    g.appendChild(p), t.appendChild(g);
    const _ = se("defs"), b = wd(_);
    g.appendChild(_);
    const v = [], S = se("g"), w = se("g"), f = se("g", { "pointer-events": "none" }), y = [], u = [], m = se("g");
    p.append(S, w, f, m);
    for (const A of r) {
      const j = Sd(A.score), W = pi + (A.score ?? 0.5) * (hd - pi), Z = se("line", {
        stroke: F.netHaloColor,
        // Sized from the edge underneath, so a thick edge does not outgrow its
        // own halo and a thin one is not swamped by it.
        "stroke-width": W + yd.padding * 2,
        "stroke-linecap": "round",
        opacity: 0,
        "pointer-events": "none"
      }), L = se("line", {
        stroke: j,
        "stroke-width": W,
        "stroke-opacity": md,
        // A mapping runs from A to B, and the arrow is what says which is which.
        "marker-end": `url(#${b(j)})`,
        "pointer-events": "none"
      }), G = se("line", { stroke: "transparent", "stroke-width": gd, style: "cursor:pointer;" });
      G.addEventListener("click", (P) => {
        P.stopPropagation(), s(A.index);
      }), G.addEventListener("mousemove", (P) => {
        d.show(
          `<div style="font-weight:700;color:${F.titleColor};">${Ie(Ne(A.from))} -&gt; ${Ie(Ne(A.to))}</div>` + (A.score == null ? `<div style="color:${F.textMuted2};">no score</div>` : `<div style="margin-top:4px;">score <b>${A.score.toFixed(3)}</b></div>`) + `<div style="margin-top:4px;font-size:${X.tiny};color:${F.textMuted2};">Click to see the mapping</div>`,
          P.offsetX,
          P.offsetY
        );
      }), G.addEventListener("mouseleave", () => d.hide()), v.push(Z), S.append(Z, L), w.appendChild(G);
      const U = se("rect", {
        fill: F.netLabelBg,
        opacity: A.score == null ? 0 : er.backgroundOpacity,
        rx: 3,
        ry: 3
      }), Q = se("text", {
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        "font-size": er.fontSize,
        "font-weight": 600,
        fill: F.netEdgeLabel
      });
      Q.textContent = A.score == null ? "" : A.score.toFixed(2);
      const V = se("g", { class: "gufe-edge-label" });
      V.append(U, Q), f.appendChild(V), y.push(U), u.push(Q);
    }
    const C = [], c = [], l = [], h = n.map((A) => {
      const j = se("g", { class: "gufe-node", style: "cursor:grab;" });
      j.addEventListener("mousemove", (G) => {
        d.show(
          `<div style="font-weight:700;color:${F.titleColor};">${Ie(Ne(A))}</div>` + (A.smiles ? `<div style="margin-top:3px;font-family:ui-monospace,Menlo,monospace;overflow-wrap:anywhere;">${Ie(A.smiles)}</div>` : "") + `<div style="margin-top:3px;font-size:${X.tiny};color:${F.textMuted2};overflow-wrap:anywhere;">${Ie(A["gufe-key"])}</div>`,
          G.offsetX,
          G.offsetY
        );
      }), j.addEventListener("mouseleave", () => d.hide()), j.appendChild(
        se("circle", {
          r: st,
          fill: F.netNodeFill,
          stroke: F.netNodeStroke,
          "stroke-width": 1.5
        })
      );
      const W = se("g", { class: "gufe-node-depiction", "pointer-events": "none" });
      j.appendChild(W), C.push(W);
      const Z = se("text", {
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        "font-size": pd,
        "font-weight": 700,
        fill: F.netInitials,
        "pointer-events": "none"
      });
      Z.textContent = Ne(A).slice(0, 2).toUpperCase(), j.appendChild(Z), c.push(Z);
      const L = se("text", {
        class: "gufe-node-caption",
        "text-anchor": "middle",
        y: st + 14,
        "font-size": 11,
        "font-weight": 600,
        fill: F.netNodeLabel,
        "pointer-events": "none"
      });
      return L.textContent = Cd(Ne(A), fd), L.setAttribute("display", "none"), l.push(L), j.appendChild(L), m.appendChild(j), j;
    }), k = () => {
      u.forEach((A, j) => {
        if (!A.textContent) return;
        let W;
        try {
          W = A.getBBox();
        } catch {
          return;
        }
        const Z = er.padding;
        y[j].setAttribute("x", String(W.x - Z)), y[j].setAttribute("y", String(W.y - Z)), y[j].setAttribute("width", String(W.width + Z * 2)), y[j].setAttribute("height", String(W.height + Z * 2));
      });
    }, x = () => {
      r.forEach((A, j) => {
        for (const Z of [v[j], S.children[j * 2 + 1], w.children[j]]) {
          const L = Z;
          L.setAttribute("x1", String(A.from.x)), L.setAttribute("y1", String(A.from.y)), L.setAttribute("x2", String(A.to.x)), L.setAttribute("y2", String(A.to.y));
        }
        f.children[j].setAttribute(
          "transform",
          `translate(${(A.from.x + A.to.x) / 2},${(A.from.y + A.to.y) / 2 - 8})`
        );
      }), n.forEach((A, j) => h[j].setAttribute("transform", `translate(${A.x},${A.y})`));
    };
    x(), k();
    const O = kd({
      nodes: n,
      captions: l,
      initials: c,
      depictionGroups: C,
      rdkit: () => a,
      viewport: () => ({ width: i, height: o })
    }), z = this.#n(g, p, n, h, x, O.apply);
    return {
      setSelected(A) {
        v.forEach((j, W) => j.setAttribute("opacity", W === A ? "0.95" : "0"));
      },
      /**
       * Dim what is not emphasised rather than hiding it.
       *
       * Asked for directly: you want to see what is *not* selected too, because
       * a filter that removes the rest answers a different question from one
       * that fades it.
       */
      setEmphasis(A, j) {
        h.forEach((W, Z) => {
          const L = !A || A.has(n[Z]["gufe-key"]);
          W.setAttribute("opacity", L ? "1" : String(tr.node));
        }), r.forEach((W, Z) => {
          const L = !j || j.has(Z), G = L ? "0.9" : String(tr.edge);
          S.children[Z * 2 + 1].setAttribute("stroke-opacity", G), f.children[Z].setAttribute("opacity", L ? "1" : String(tr.edge));
        });
      },
      focusOn(A) {
        const j = n[A];
        j && z.centreOn(j.x, j.y);
      },
      setDetail: O.apply,
      depictionsDrawn: () => O.drawn(),
      fit: z.fit,
      reset: z.reset,
      cleanup: z.cleanup
    };
  }
  /** Wheel zoom, background pan, node drag - ~40 lines instead of d3-zoom and
   * d3-drag, and they keep working when d3 is unreachable. */
  #n(t, n, r, i, o, s) {
    let a = 1, d = 0, g = 0;
    const p = () => {
      n.setAttribute("transform", `translate(${d},${g}) scale(${a})`), s(a, d, g);
    }, _ = () => {
      const m = t.getBoundingClientRect();
      return {
        width: m.width || Number(t.getAttribute("width")) || t.clientWidth || 800,
        height: m.height || Number(t.getAttribute("height")) || t.clientHeight || 600
      };
    }, b = () => {
      let m = 1 / 0, C = 1 / 0, c = -1 / 0, l = -1 / 0;
      for (const O of r)
        m = Math.min(m, O.x), C = Math.min(C, O.y), c = Math.max(c, O.x), l = Math.max(l, O.y);
      if (a = 1, d = 0, g = 0, !Number.isFinite(m)) {
        p();
        return;
      }
      const h = st + vd, { width: k, height: x } = _();
      a = Math.min(1, k / (c - m + h * 2), x / (l - C + h * 2)), d = k / 2 - (m + c) / 2 * a, g = x / 2 - (C + l) / 2 * a, p();
    }, S = br(t, {
      onZoom: (m) => {
        const C = t.getBoundingClientRect(), c = m.clientX - C.left, l = m.clientY - C.top, h = Math.min(5 / a, Math.max(0.15 / a, Math.exp(-m.deltaY * 2e-3)));
        d = c - (c - d) * h, g = l - (l - g) * h, a *= h, p();
      },
      hint: "Click the graph or hold Ctrl to zoom"
    });
    let w = null;
    const f = (m) => {
      w = { x: m.clientX - d, y: m.clientY - g };
    }, y = (m) => {
      w && (d = m.clientX - w.x, g = m.clientY - w.y, p());
    }, u = () => {
      w = null;
    };
    return t.addEventListener("pointerdown", f), t.addEventListener("pointermove", y), t.addEventListener("pointerup", u), t.addEventListener("pointercancel", u), t.addEventListener("pointerleave", u), i.forEach((m, C) => {
      let c = null;
      m.addEventListener("pointerdown", (h) => {
        h.stopPropagation(), c = { x: h.clientX - r[C].x * a, y: h.clientY - r[C].y * a }, m.setPointerCapture(h.pointerId);
      }), m.addEventListener("pointermove", (h) => {
        c && (r[C].x = r[C].fx = (h.clientX - c.x) / a, r[C].y = r[C].fy = (h.clientY - c.y) / a, o());
      });
      const l = () => {
        c = null;
      };
      m.addEventListener("pointerup", l), m.addEventListener("pointercancel", l);
    }), {
      fit: b,
      // Back to the view it opened on, which is the framed one. An identity
      // transform would be "reset" only in the sense that a blank canvas is.
      reset: b,
      /** Bring a graph point to the middle, zooming in enough to read it. */
      centreOn(m, C) {
        const { width: c, height: l } = _();
        a = Math.max(a, $d), d = c / 2 - m * a, g = l / 2 - C * a, p();
      },
      cleanup() {
        S.cleanup(), t.removeEventListener("pointerdown", f), t.removeEventListener("pointermove", y), t.removeEventListener("pointerup", u), t.removeEventListener("pointercancel", u), t.removeEventListener("pointerleave", u);
      }
    };
  }
}
function Nd(e, t, n, r, i) {
  const o = t / 2, s = n / 2, a = (d, g) => {
    d.forEach((p, _) => {
      const b = 2 * Math.PI * _ / Math.max(1, d.length) - Math.PI / 2;
      p.x = o + g * Math.cos(b), p.y = s + g * Math.sin(b), p.fx = r === "Force-directed" ? void 0 : p.x, p.fy = r === "Force-directed" ? void 0 : p.y;
    });
  };
  if (r === "Radial" && e.length) {
    const d = new Map(e.map((w) => [w["gufe-key"], []]));
    for (const w of i)
      d.get(w.from["gufe-key"]).push(w.to["gufe-key"]), d.get(w.to["gufe-key"]).push(w.from["gufe-key"]);
    const g = new Map(e.map((w) => [w["gufe-key"], w])), p = e.reduce(
      (w, f) => d.get(f["gufe-key"]).length > d.get(w["gufe-key"]).length ? f : w
    ), _ = /* @__PURE__ */ new Set([p["gufe-key"]]);
    let b = [p["gufe-key"]], v = 0;
    const S = Math.min(t, n) * 0.18;
    for (; b.length; ) {
      a(
        b.map((f) => g.get(f)),
        v === 0 ? 0 : v * S + 40
      );
      const w = [];
      for (const f of b)
        for (const y of d.get(f))
          _.has(y) || (_.add(y), w.push(y));
      b = w, v++;
    }
    a(e.filter((w) => !_.has(w["gufe-key"])), Math.min(t, n) * 0.45);
    return;
  }
  a(e, Math.min(t, n) * 0.34);
}
async function Fd(e, t, n, r) {
  let i;
  try {
    if (i = await Fi(), typeof i?.forceSimulation != "function") return !1;
  } catch {
    return !1;
  }
  const o = t.map((d) => ({ source: d.from["gufe-key"], target: d.to["gufe-key"], score: d.score })), s = i.forceSimulation(e).force(
    "link",
    i.forceLink(o).id((d) => d["gufe-key"]).distance((d) => _e.linkBaseDistance + (1 - (d.score ?? 0.5)) * _e.linkScoreBonus).strength(_e.linkStrength)
  ).force(
    "charge",
    i.forceManyBody().strength(_e.chargeStrength).distanceMin(_e.chargeDistanceMin).distanceMax(_e.chargeDistanceMax)
  ).force("center", i.forceCenter(n / 2, r / 2).strength(_e.centerStrength)).force("collision", i.forceCollide(st + _e.collisionPadding).iterations(_e.collisionIterations)).force("x", i.forceX(n / 2).strength(_e.drift)).force("y", i.forceY(r / 2).strength(_e.drift)).stop(), a = Math.ceil(Math.log(s.alphaMin()) / Math.log(1 - s.alphaDecay()));
  for (let d = 0; d < a * _e.tickMultiplier; d++) s.tick();
  return !0;
}
Pe("gufe-ligand-network", Rd);
const gt = { width: 148, height: 46, radius: 10 }, ot = {
  linkDistance: 220,
  linkStrength: 0.4,
  chargeStrength: -1200,
  collisionRadius: 110,
  collisionIterations: 3,
  tickMultiplier: 2
}, yt = ct;
function Od(e, t) {
  return e.length > t ? `${e.slice(0, t - 1)}...` : e;
}
function Md(e, t, n) {
  const r = Math.max(90, Math.min(t, n) * 0.36);
  e.forEach((i, o) => {
    const s = 2 * Math.PI * o / Math.max(1, e.length) - Math.PI / 2;
    i.x = t / 2 + r * Math.cos(s), i.y = n / 2 + r * Math.sin(s);
  });
}
async function Td(e, t, n, r) {
  let i;
  try {
    if (i = await Fi(), typeof i?.forceSimulation != "function") return !1;
  } catch {
    return !1;
  }
  const o = t.map((d) => ({ source: d.from["gufe-key"], target: d.to["gufe-key"] })), s = i.forceSimulation(e).force(
    "link",
    i.forceLink(o).id((d) => d["gufe-key"]).distance(ot.linkDistance).strength(ot.linkStrength)
  ).force("charge", i.forceManyBody().strength(ot.chargeStrength)).force("center", i.forceCenter(n / 2, r / 2)).force("collision", i.forceCollide(ot.collisionRadius).iterations(ot.collisionIterations)).stop(), a = Math.ceil(Math.log(s.alphaMin()) / Math.log(1 - s.alphaDecay()));
  for (let d = 0; d < a * ot.tickMultiplier; d++) s.tick();
  return !0;
}
class jd extends xe {
  placeholder() {
    return "Waiting for an AlchemicalNetwork payload...";
  }
  renderView(t, n) {
    const r = wt(n), i = [];
    let o = 0;
    for (const l of n.nodes ?? []) {
      const h = Me(r, l, "ChemicalSystemViz");
      if (!h) {
        o++;
        continue;
      }
      i.push({ ...h, x: 0, y: 0 });
    }
    const s = new Map(i.map((l) => [l["gufe-key"], l])), a = [];
    let d = 0;
    for (const l of n.edges ?? []) {
      const h = s.get(l.stateA), k = s.get(l.stateB);
      if (!h || !k) {
        d++;
        continue;
      }
      a.push({ ...l, index: a.length, from: h, to: k });
    }
    const g = (l) => {
      const h = Me(r, l.protocol, "ProtocolViz");
      return h?.gufe_type || h?.name || "";
    }, p = new Set(a.map(g).filter(Boolean)), _ = Be(n.name || "Alchemical network");
    _.statsEl.appendChild(ue("systems", String(i.length))), _.statsEl.appendChild(ue("transformations", String(a.length))), p.size && _.statsEl.appendChild(ue("protocol", [...p].join(", "))), t.appendChild(_);
    const b = M("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    t.appendChild(b);
    const v = M("div", `flex:1 1 62%;min-width:0;position:relative;overflow:hidden;background:${F.netCanvasBg};`);
    b.appendChild(v), b.appendChild(M("div", `width:1px;flex-shrink:0;background:${F.splitBorder};`));
    const S = M("div", `flex:1 1 38%;min-width:0;display:flex;flex-direction:column;background:${F.appBg};`);
    b.appendChild(S);
    const w = this.#t(S, r, g);
    if (!i.length)
      return v.appendChild(
        le(
          o ? "None of this network's chemical systems are in its registry." : "This network has no chemical systems."
        )
      ), w.message("Nothing to show."), {};
    o && He(
      v,
      `${o} chemical system${o === 1 ? "" : "s"} named by this network are not in its registry`
    ), d && He(
      v,
      `${d} transformation${d === 1 ? "" : "s"} name a system this network does not contain`
    );
    let f = !0, y = !1, u = null, m = () => {
    };
    const C = (l, h) => {
      u = { kind: l, index: h }, w.show(l === "node" ? i[h] : a[h], l), m();
    }, c = () => {
      v.querySelector("svg")?.remove();
      const l = v.clientWidth || 800, h = v.clientHeight || 600;
      Md(i, l, h);
      const k = () => {
        if (!f) return;
        const x = this.#e(v, i, a, l, h, C);
        m = () => x.setSelected(u), m();
      };
      if (y) {
        k();
        return;
      }
      Td(i, a, l, h).then((x) => {
        f && (x || (y = !0, He(v, "d3 could not be loaded - showing the circular layout instead")), k());
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
      M(
        "div",
        $t,
        "Selected"
      )
    );
    const i = M("div", "flex:1;min-height:0;overflow:auto;display:flex;flex-direction:column;");
    t.appendChild(i);
    const o = (d) => i.replaceChildren(le(d)), s = (d, g) => {
      const p = M(
        "div",
        `padding:10px 14px;border-bottom:1px solid ${F.toolbarBorder};display:flex;flex-direction:column;gap:4px;`
      );
      return p.appendChild(M("div", `font-size:${X.heading};font-weight:600;color:${F.textPrimary};`, d)), p.appendChild(M("div", `font-size:${X.small};color:${F.textMuted2};`, g)), p;
    };
    return { show: (d, g) => {
      if (i.replaceChildren(), g === "node") {
        const b = d;
        i.appendChild(s(yt(b), "ChemicalSystem"));
        const v = M("div", "display:flex;flex-direction:column;gap:6px;padding:12px 14px;"), S = Object.entries(b.components ?? {});
        for (const [w, f] of S) {
          const y = We(n, f), u = M(
            "div",
            `display:flex;align-items:center;gap:8px;padding:7px 10px;border-radius:8px;min-width:0;background:${F.cardBg};border:1px solid ${F.cardBorder};`
          );
          u.appendChild(M("span", `font-size:${X.body};font-weight:700;color:${F.textPrimary};`, w)), u.appendChild(
            M(
              "span",
              `font-size:${X.small};color:${F.textMuted};overflow-wrap:anywhere;min-width:0;`,
              y ? y.name || "(unnamed)" : "(not in the registry)"
            )
          );
          const m = bt(
            y ? y.type === "UnknownComponentViz" ? y.gufe_type : y.type.replace(/Viz$/, "") : "missing"
          );
          m.style.marginLeft = "auto", u.appendChild(m), v.appendChild(u);
        }
        S.length || v.appendChild(M("div", `font-size:${X.body};color:${F.textMuted2};`, "This system lists no components.")), i.appendChild(v), i.appendChild(
          M(
            "div",
            `padding:0 14px 12px;font-size:${X.small};font-family:ui-monospace,SFMono-Regular,Menlo,monospace;color:${F.textMuted2};overflow-wrap:anywhere;`,
            b["gufe-key"]
          )
        );
        return;
      }
      const p = d;
      i.appendChild(s(p.name || "Unnamed transformation", "Transformation"));
      const _ = M("div", "display:flex;flex-direction:column;gap:8px;padding:12px 14px;");
      for (const [b, v] of [
        ["State A", yt(p.from)],
        ["State B", yt(p.to)],
        ["Protocol", r(p) || "-"]
      ]) {
        const S = M("div", "display:flex;gap:10px;align-items:baseline;min-width:0;");
        S.appendChild(
          M(
            "span",
            `flex:0 0 76px;font-size:${X.tiny};font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:${F.textMuted2};`,
            b
          )
        ), S.appendChild(M("span", `flex:1;min-width:0;font-size:${X.body};color:${F.textPrimary};overflow-wrap:anywhere;`, v)), _.appendChild(S);
      }
      i.appendChild(_), i.appendChild(
        M(
          "div",
          `padding:0 14px 12px;font-size:${X.small};font-family:ui-monospace,SFMono-Regular,Menlo,monospace;color:${F.textMuted2};overflow-wrap:anywhere;`,
          p["gufe-key"]
        )
      );
    }, message: o };
  }
  /** Build the SVG for the current positions, and hand back the selection hook. */
  #e(t, n, r, i, o, s) {
    const a = se("svg", { width: i, height: o, style: "display:block;" });
    t.appendChild(a);
    const d = se("g"), g = se("g");
    a.append(d, g);
    const p = [];
    r.forEach((b, v) => {
      const S = se("line", {
        x1: b.from.x,
        y1: b.from.y,
        x2: b.to.x,
        y2: b.to.y,
        stroke: F.netEdgeLine,
        "stroke-width": 2,
        "stroke-linecap": "round",
        style: "cursor:pointer;"
      });
      Pn(S, b.name || "transformation"), S.addEventListener("click", () => s("edge", v)), d.appendChild(S), p.push(S);
      const w = se("line", {
        x1: b.from.x,
        y1: b.from.y,
        x2: b.to.x,
        y2: b.to.y,
        stroke: "transparent",
        "stroke-width": 16,
        style: "cursor:pointer;"
      });
      w.addEventListener("click", () => s("edge", v)), d.appendChild(w);
    });
    const _ = [];
    return n.forEach((b, v) => {
      const S = se("g", { style: "cursor:pointer;" }), w = se("rect", {
        x: b.x - gt.width / 2,
        y: b.y - gt.height / 2,
        width: gt.width,
        height: gt.height,
        rx: gt.radius,
        fill: F.cardBg,
        stroke: F.cardBorder,
        "stroke-width": 2
      });
      S.appendChild(w), _.push(w);
      const f = se("text", {
        x: b.x,
        y: b.y - 2,
        "text-anchor": "middle",
        fill: F.netNodeLabel,
        "font-size": 12,
        "font-weight": 700,
        "font-family": "ui-sans-serif,system-ui,sans-serif"
      });
      f.textContent = Od(yt(b), 20), S.appendChild(f);
      const y = Object.keys(b.components ?? {}).length, u = se("text", {
        x: b.x,
        y: b.y + 14,
        "text-anchor": "middle",
        fill: F.netInitials,
        "font-size": 10,
        "font-family": "ui-sans-serif,system-ui,sans-serif"
      });
      u.textContent = `${y} component${y === 1 ? "" : "s"}`, S.appendChild(u), Pn(S, yt(b)), S.addEventListener("click", () => s("node", v)), g.appendChild(S);
    }), {
      setSelected(b) {
        _.forEach((v, S) => {
          const w = b?.kind === "node" && b.index === S;
          v.setAttribute("stroke", w ? F.cardBorderActive : F.cardBorder), v.setAttribute("stroke-width", w ? "3" : "2");
        }), p.forEach((v, S) => {
          const w = b?.kind === "edge" && b.index === S;
          v.setAttribute("stroke", w ? F.netHaloColor : F.netEdgeLine), v.setAttribute("stroke-width", w ? "4" : "2");
        });
      }
    };
  }
}
Pe("gufe-alchemical-network", jd);
function zd(e) {
  return e.name || e.type.replace(/Viz$/, "");
}
function Id(e) {
  return e.type === "UnknownComponentViz" ? e.gufe_type : e.type.replace(/Viz$/, "");
}
class Dd extends xe {
  placeholder() {
    return "Waiting for a ChemicalSystem payload...";
  }
  renderView(t, n) {
    const r = wt(n), i = [], o = [];
    for (const [S, w] of Object.entries(n.components ?? {})) {
      const f = We(r, w);
      f ? i.push([S, f]) : o.push(S);
    }
    const s = Be(n.name || "Chemical system");
    if (s.statsEl.appendChild(ue("components", String(i.length))), t.appendChild(s), !i.length)
      return t.appendChild(
        le(
          o.length ? "None of this system's components are in its registry." : "This chemical system has no components."
        )
      ), {};
    const a = M("div", "flex:1;min-height:0;position:relative;display:flex;flex-direction:row;");
    t.appendChild(a), o.length && He(
      a,
      `${o.length} component${o.length === 1 ? "" : "s"} named by this system (${o.join(", ")}) are not in its registry`
    );
    const d = M(
      "div",
      `flex:0 0 220px;min-width:0;overflow:auto;display:flex;flex-direction:column;gap:6px;padding:10px;background:${F.panelBg};border-right:1px solid ${F.splitBorder};`
    );
    a.appendChild(d);
    const g = M("div", "flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;");
    a.appendChild(g);
    const p = M("div", "flex:1;min-height:0;display:flex;");
    g.appendChild(p);
    const _ = document.createElement("gufe-view");
    _.style.cssText = "flex:1;min-width:0;min-height:0;", p.appendChild(_);
    const b = [], v = (S) => {
      b.forEach((w, f) => {
        const y = f === S;
        w.style.background = y ? F.cardBgActive : F.cardBg, w.style.borderColor = y ? F.cardBorderActive : F.cardBorder;
      }), _.payload = i[S][1];
    };
    return i.forEach(([S, w], f) => {
      const y = M(
        "button",
        `display:flex;flex-direction:column;align-items:flex-start;gap:4px;padding:8px 10px;text-align:left;border:1px solid ${F.cardBorder};border-radius:8px;background:${F.cardBg};cursor:pointer;font-family:inherit;font-size:\${FONT.body};width:100%;`
      );
      y.appendChild(M("span", `font-weight:700;color:${F.textPrimary};`, S)), y.appendChild(M("span", `font-size:${X.small};color:${F.textMuted};`, zd(w))), y.appendChild(bt(Id(w))), y.onclick = () => v(f), b.push(y), d.appendChild(y);
    }), v(0), {
      onResize: () => _.resize?.(),
      // Removing the nested view fires its own `disconnectedCallback`, which is
      // where whatever it mounted releases its viewers.
      cleanup: () => _.remove()
    };
  }
}
Pe("gufe-chemical-system", Dd);
class qd extends xe {
  placeholder() {
    return "Waiting for a Protocol payload...";
  }
  renderView(t, n) {
    const r = Be(n.gufe_type || n.name || "Protocol");
    r.statsEl.appendChild(bt(n.gufe_type)), t.appendChild(r);
    const i = M(
      "div",
      "flex:1;min-height:0;overflow:auto;display:flex;align-items:center;justify-content:center;padding:24px;"
    );
    t.appendChild(i);
    const o = kn();
    return o.style.maxWidth = "460px", o.appendChild(Fe("gufe class", n.gufe_type, !0)), n.name && o.appendChild(Fe("Name", n.name)), o.appendChild(Fe("gufe key", n["gufe-key"], !0)), o.appendChild(
      M(
        "div",
        `padding-top:10px;font-size:${X.small};line-height:1.6;color:${F.textMuted2};`,
        "A Protocol's settings are not carried in this payload: they are large, deeply nested, and nothing draws them yet."
      )
    ), i.appendChild(o), {};
  }
}
Pe("gufe-protocol", qd);
const Ee = { width: 340, height: 260, padding: 14, radius: 12 }, Vd = 150, Bd = 40, Ld = 24;
function Ud(e) {
  let t = e >>> 0;
  return () => (t = t * 1664525 + 1013904223 >>> 0, t / 4294967296);
}
function Kd(e) {
  const t = /-?\d+(\.\d+)?([eE][-+]?\d+)?/.exec(e ?? "");
  if (!t) return null;
  const n = Number(t[0]);
  return Number.isFinite(n) ? n : null;
}
function Hd(e) {
  return e == null || e <= 0 ? 0 : Math.max(1, Math.min(Ld, Math.round(e * Bd)));
}
function Gd(e) {
  const t = se("svg", {
    viewBox: `0 0 ${Ee.width} ${Ee.height}`,
    style: "width:100%;height:100%;max-width:100%;",
    role: "img"
  });
  Pn(t, `${e.smiles || "solvent"} box`), t.appendChild(
    se("rect", {
      x: 1,
      y: 1,
      width: Ee.width - 2,
      height: Ee.height - 2,
      rx: Ee.radius,
      fill: F.boxFill,
      stroke: F.boxStroke,
      "stroke-width": 1.5
    })
  );
  const n = Ud(1597463007), r = () => ({
    x: Ee.padding + n() * (Ee.width - 2 * Ee.padding),
    y: Ee.padding + n() * (Ee.height - 2 * Ee.padding)
  });
  for (let s = 0; s < Vd; s++) {
    const { x: a, y: d } = r();
    t.appendChild(se("circle", { cx: a, cy: d, r: 2.4, fill: F.textMuted2, "fill-opacity": 0.45 }));
  }
  const i = Hd(Kd(e.ion_concentration)), o = [
    [e.positive_ion, F.diffAdded],
    [e.negative_ion, F.diffRemoved]
  ];
  for (const [s, a] of o)
    for (let d = 0; d < i; d++) {
      const { x: g, y: p } = r(), _ = se("circle", { cx: g, cy: p, r: 5.5, fill: a, "fill-opacity": 0.85 });
      t.appendChild(Pn(_, s));
    }
  return t;
}
class Wd extends xe {
  placeholder() {
    return "Waiting for a SolventComponent payload...";
  }
  renderView(t, n) {
    const r = Be(n.name || "Solvent");
    r.statsEl.appendChild(ue("neutralized", n.neutralize ? "yes" : "no")), r.statsEl.appendChild(ue(n.positive_ion, "", F.diffAdded)), r.statsEl.appendChild(ue(n.negative_ion, "", F.diffRemoved)), t.appendChild(r);
    const i = M(
      "div",
      "flex:1;min-height:0;display:flex;flex-wrap:wrap;gap:16px;padding:16px;overflow:auto;align-items:flex-start;"
    );
    t.appendChild(i);
    const o = kn();
    o.style.flex = "1 1 320px", o.appendChild(Fe("SMILES", n.smiles, !0)), o.appendChild(Fe("Positive ion", n.positive_ion)), o.appendChild(Fe("Negative ion", n.negative_ion)), o.appendChild(Fe("Ion concentration", n.ion_concentration)), o.appendChild(Fe("Neutralize", n.neutralize ? "yes" : "no")), i.appendChild(o);
    const s = kn();
    return s.style.flex = "1 1 340px", s.style.alignItems = "center", s.appendChild(Gd(n)), s.appendChild(
      M(
        "div",
        `padding-top:10px;font-size:${X.small};text-align:center;color:${F.textMuted2};`,
        "Schematic only: the dots show which ions are present, not how many."
      )
    ), i.appendChild(s), {};
  }
}
Pe("gufe-solvent", Wd);
const sr = {
  unchanged: F.diffUnchanged,
  changed: F.diffChanged,
  added: F.diffAdded,
  removed: F.diffRemoved
};
function Jd(e, t) {
  return e && !t ? "removed" : !e && t ? "added" : e === t ? "unchanged" : "changed";
}
function Yd(e, t) {
  return [.../* @__PURE__ */ new Set([...Object.keys(e.components ?? {}), ...Object.keys(t.components ?? {})])].sort();
}
function Xd(e) {
  if (!e) return null;
  const t = e.type === "UnknownComponentViz" ? e.gufe_type : e.type.replace(/Viz$/, "");
  return { name: e.name || "(unnamed)", type: t };
}
function gi(e, t) {
  const n = M(
    "div",
    `flex:1 1 50%;min-width:0;display:flex;flex-direction:column;gap:4px;padding:8px 10px;border-radius:8px;background:${F.cardBg};border:1px solid ${F.cardBorder};`
  ), r = Xd(e);
  return r ? (n.style.borderColor = t === "unchanged" ? F.cardBorder : sr[t], n.appendChild(M("span", `font-size:${X.body};font-weight:600;color:${F.textPrimary};`, r.name)), n.appendChild(bt(r.type)), n) : (n.style.background = "transparent", n.style.borderStyle = "dashed", n.appendChild(M("span", `font-size:${X.body};color:${F.textMuted2};`, "absent")), n);
}
function Zd(e, t) {
  const n = We(t, e.componentA), r = We(t, e.componentB);
  return `${n ? ct(n) : "A"} to ${r ? ct(r) : "B"}`;
}
class Qd extends xe {
  placeholder() {
    return "Waiting for a Transformation payload...";
  }
  renderView(t, n) {
    const r = wt(n), i = Me(r, n.stateA, "ChemicalSystemViz"), o = Me(r, n.stateB, "ChemicalSystemViz"), s = Me(r, n.protocol, "ProtocolViz"), a = n.mappings ?? [], d = Be(n.name || "Transformation");
    if (d.statsEl.appendChild(ue("protocol", s?.gufe_type || s?.name || "-")), d.statsEl.appendChild(ue("mappings", String(a.length))), t.appendChild(d), !i || !o)
      return t.appendChild(
        le("This transformation names two chemical systems, and its registry does not hold them.")
      ), {};
    const g = Yd(i, o), p = M("div", "flex:0 0 auto;max-height:45%;overflow:auto;padding:12px 14px;");
    t.appendChild(p);
    const _ = M("div", "display:flex;gap:10px;padding:0 0 6px 120px;");
    for (const [f, y] of [
      ["State A", i],
      ["State B", o]
    ])
      _.appendChild(
        M(
          "div",
          `flex:1 1 50%;min-width:0;font-size:${X.small};font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:${F.textMuted2};`,
          `${f}${y.name ? ` - ${y.name}` : ""}`
        )
      );
    p.appendChild(_);
    for (const f of g) {
      const y = i.components?.[f], u = o.components?.[f], m = Jd(y, u), C = We(r, y), c = We(r, u), l = M("div", "display:flex;align-items:stretch;gap:10px;padding:4px 0;"), h = M("div", "flex:0 0 110px;display:flex;align-items:center;gap:6px;min-width:0;");
      h.appendChild(
        M("span", `width:8px;height:8px;border-radius:50%;flex-shrink:0;background:${sr[m]};`)
      );
      const k = M("span", `font-size:${X.body};font-weight:700;color:${F.textPrimary};overflow-wrap:anywhere;`, f);
      k.title = m, h.appendChild(k), l.appendChild(h), l.appendChild(gi(C, m)), l.appendChild(gi(c, m)), p.appendChild(l);
    }
    const b = M(
      "div",
      `display:flex;flex-wrap:wrap;gap:12px;padding:8px 0 0;font-size:${X.small};color:${F.textMuted};`
    );
    for (const f of ["unchanged", "changed", "added", "removed"])
      b.appendChild(ue(f, "", sr[f]));
    p.appendChild(b);
    const v = M(
      "div",
      $t,
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
    const w = (f) => {
      S.payload = Vi(a[f], r);
    };
    if (w(0), a.length > 1) {
      const f = M(
        "div",
        `display:flex;align-items:center;gap:8px;padding:6px 10px;flex-shrink:0;font-size:\${FONT.small};background:${F.toolbarBg};border-bottom:1px solid ${F.toolbarBorder};color:${F.textMuted};`
      );
      f.appendChild(
        An(
          a.map((y, u) => ({
            id: String(u),
            label: y.name || Zd(y, r)
          })),
          "0",
          (y) => w(Number(y))
        )
      ), t.appendChild(f);
    }
    return t.appendChild(S), {
      onResize: () => S.resize?.(),
      cleanup: () => S.remove()
    };
  }
}
Pe("gufe-transformation", Qd);
class eu extends xe {
  placeholder() {
    return "Waiting for a component payload...";
  }
  renderView(t, n) {
    const r = Be(n.name || "Unnamed component");
    r.statsEl.appendChild(bt(n.gufe_type)), t.appendChild(r);
    const i = M("div", "flex:1;min-height:0;overflow:auto;display:flex;align-items:center;justify-content:center;padding:24px;");
    t.appendChild(i);
    const o = kn();
    return o.style.maxWidth = "460px", o.appendChild(
      M(
        "div",
        `font-size:${X.heading};font-weight:600;padding-bottom:6px;color:${F.textPrimary};`,
        `There is no visualization for ${n.gufe_type}.`
      )
    ), o.appendChild(
      M(
        "div",
        `font-size:${X.body};line-height:1.6;padding-bottom:10px;color:${F.textMuted};`,
        "gufe lets a project define its own Component subclasses, so this is a component this build has never been taught to draw - not a broken payload. Everything gufe knows about it that survives serialization is below."
      )
    ), o.appendChild(Fe("Name", n.name || "(unnamed)")), o.appendChild(Fe("gufe class", n.gufe_type, !0)), i.appendChild(o), {};
  }
}
Pe("gufe-unknown-component", eu);
function au(e, t) {
  let n = e.querySelector("gufe-view");
  return n || (n = document.createElement("gufe-view"), n.style.cssText = "display:block;width:100%;height:100%;", e.appendChild(n)), t !== void 0 && (n.payload = t), n;
}
export {
  Wi as CHROME_OPEN_BY_DEFAULT,
  Zi as DEBUG_ATTRIBUTE,
  Qi as DEBUG_GLOBAL,
  jl as DEFAULT_DEPICT_STYLE,
  Kc as DEFAULT_ZOOM_BOUNDS,
  wn as DEPICT_STYLE,
  Vl as DEPICT_STYLE_RANGES,
  jd as GufeAlchemicalNetwork,
  ld as GufeAtomMapping,
  Dd as GufeChemicalSystem,
  xe as GufeElement,
  Rd as GufeLigandNetwork,
  cl as GufeProtein,
  qd as GufeProtocol,
  el as GufeSmallMolecule,
  Wd as GufeSolvent,
  Qd as GufeTransformation,
  eu as GufeUnknownComponent,
  qc as GufeView,
  Yn as MAPPING_COLORS,
  iu as MAPPING_RAMP_3D,
  su as MAPPING_RAMP_NAME,
  tu as PAYLOAD_TYPES,
  nu as SCHEMA_TYPES,
  mr as VIEW_TAGS,
  ul as applyRT,
  Hc as boundedZoom,
  wt as buildRegistry,
  Yi as chromeMenu,
  ns as debugEnabled,
  Pe as defineElement,
  Ri as describeProblem,
  Jd as diffStatus,
  ou as dispatchProblem,
  ct as entryLabel,
  Ic as formatIssues,
  br as guardWheel,
  dl as kabsch,
  cd as liftFor,
  os as logPayload,
  We as lookup,
  Me as lookupOfType,
  Vi as mappingPayloadFor,
  Hl as markGroups,
  Ii as markedBonds,
  au as mount,
  Ll as normaliseDepictStyle,
  Ul as parseAtomSpec,
  Kd as parseConcentration,
  rs as payloadJson,
  wr as resetControl,
  Ed as selectionText,
  ui as uniqueAtoms,
  ru as validateAs,
  zc as validatePayload,
  Oi as viewerInteraction,
  Wc as wheelFactor
};
