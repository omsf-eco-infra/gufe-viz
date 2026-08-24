const cr = {
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
    colorCore: "0xaaaaaa",
    colorUniqueA: "0xff4d4d",
    colorUniqueB: "0x4dff88",
    linesMolA: "0xff8888",
    linesMolB: "0x88ffaa",
    linesDash: "0xffee55",
    overlayMolA: "0xff6666",
    overlayMolB: "0x66ff99",
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
    colorCore: "0x888888",
    colorUniqueA: "0xd62828",
    colorUniqueB: "0x2a9d4a",
    linesMolA: "0xd62828",
    linesMolB: "0x2a9d4a",
    linesDash: "0xd9a300",
    overlayMolA: "0xd62828",
    overlayMolB: "0x2a9d4a",
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
function $i() {
  try {
    return globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches ?? !1;
  } catch {
    return !1;
  }
}
const P = $i() ? cr.dark : cr.light;
function j(e, t, n) {
  const o = document.createElement(e);
  return t && (o.style.cssText = t), n != null && (o.textContent = n), o;
}
function Ne(e) {
  return String(e ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function ge(e) {
  if (e == null) return "unknown error";
  const t = e.message;
  if (typeof t == "string" && t) return t;
  const n = String(e);
  return n === "[object Object]" ? e.name || "unknown error" : n;
}
const nt = (e) => e.toLocaleString("en-US"), Ze = "-", Be = `background:${P.btnBg};color:${P.btnFg};border:1px solid ${P.btnBorder};padding:4px 9px;font-size:11px;font-weight:bold;border-radius:3px;cursor:pointer;font-family:inherit;`, dn = `background:${P.selectBg};color:${P.textPrimary};border:1px solid ${P.selectBorder};border-radius:6px;padding:4px 8px;font-size:12px;cursor:pointer;font-family:inherit;`;
function mn(e, t, n) {
  const o = j("div", "display:flex;gap:4px;"), i = e.map((r) => {
    const c = j("button", Be, r.label);
    return c.title = r.title || r.label, c.onmouseover = () => {
      c.style.background = P.btnBgHover;
    }, c.onmouseout = () => {
      c.style.background = t === r.id ? P.btnBgActive : P.btnBg;
    }, c.onclick = () => {
      o.setActive(r.id), n(r.id);
    }, o.appendChild(c), { id: r.id, btn: c };
  });
  return o.setActive = (r) => {
    t = r, i.forEach((c) => {
      c.btn.style.background = c.id === t ? P.btnBgActive : P.btnBg;
    });
  }, o.setActive(t), o;
}
function ce(e, t, n) {
  const o = j("span", "display:inline-flex;align-items:center;gap:5px;white-space:nowrap;");
  n && o.appendChild(
    j("span", `width:8px;height:8px;border-radius:50%;background:${n};display:inline-block;`)
  );
  const i = j("span");
  return i.innerHTML = `${Ne(e)} <b style="color:${P.textPrimary};">${Ne(t)}</b>`, o.appendChild(i), o;
}
function qe(e, t) {
  const n = j("div", "", `⚠ ${t}`);
  return n.style.cssText = `position:absolute;top:10px;left:50%;transform:translateX(-50%);max-width:90%;z-index:20;padding:6px 14px;border-radius:6px;font-size:12px;background:${P.warnBg};color:${P.warnFg};border:1px solid ${P.warnBorder};`, e.appendChild(n), n;
}
function ae(e, t = !1) {
  return j(
    "div",
    `flex:1;display:flex;align-items:center;justify-content:center;text-align:center;padding:24px;font-size:13px;color:${t ? P.errorFg : P.textMuted2};`,
    e
  );
}
function Te(e, t) {
  const n = j(
    "div",
    `display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;padding:9px 14px;flex-shrink:0;background:${P.toolbarBg};border-bottom:1px solid ${P.toolbarBorder};`
  );
  return n.titleEl = j("span", `font-weight:700;font-size:15px;color:${P.titleColor};letter-spacing:.02em;`, e), n.subtitleEl = j("span", `font-size:12px;color:${P.textMuted2};`, t || ""), n.statsEl = j(
    "div",
    `display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-left:auto;font-size:11px;color:${P.textMuted};`
  ), n.toggleEl = j("div", "display:flex;align-items:center;flex-shrink:0;"), n.appendChild(n.toggleEl), n.appendChild(n.titleEl), n.appendChild(n.subtitleEl), n.appendChild(n.statsEl), n;
}
function Pe(e, t, n = !1) {
  const o = j("div", "display:flex;gap:12px;align-items:baseline;padding:5px 0;min-width:0;");
  o.appendChild(
    j(
      "span",
      `flex:0 0 128px;font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:${P.textMuted2};`,
      e
    )
  );
  const i = j(
    "span",
    `flex:1;min-width:0;user-select:text;cursor:text;overflow-wrap:anywhere;color:${P.textPrimary};` + (n ? "font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:11px;" : "font-size:12px;"),
    t
  );
  return i.title = t, o.appendChild(i), o;
}
function lt(e) {
  return j(
    "span",
    `padding:1px 7px;border-radius:10px;font-size:10px;font-weight:700;letter-spacing:.04em;white-space:nowrap;background:${P.badgeBg};color:${P.badgeFg};`,
    e
  );
}
function un() {
  return j(
    "div",
    `display:flex;flex-direction:column;gap:2px;padding:14px 18px;border-radius:10px;background:${P.cardBg};border:1px solid ${P.cardBorder};`
  );
}
function Xo() {
  const e = j("div", "flex:1;position:relative;min-height:0;min-width:0;"), t = j("div", "position:absolute;inset:0;");
  return t.dataset.gufeViewer = "", e.appendChild(t), { wrap: e, container: t };
}
const bi = !1;
function wi() {
  const e = j("span", "display:inline-flex;flex-direction:column;gap:2px;justify-content:center;");
  for (let t = 0; t < 3; t++)
    e.appendChild(j("span", `display:block;width:11px;height:1.5px;border-radius:1px;background:${P.btnFg};`));
  return e;
}
function _i(e, t, n = {}) {
  let o = n.open ?? bi, i = !1;
  const r = j("div", "flex-shrink:0;"), c = j("button", `${Be}display:inline-flex;align-items:center;gap:6px;padding:4px 8px;`);
  c.appendChild(wi()), c.setAttribute("aria-label", n.label || "Toggle menu");
  const s = () => {
    o && !i && (i = !0, r.appendChild(t())), r.style.display = o ? "" : "none", c.style.background = o ? P.btnBgActive : P.btnBg, c.setAttribute("aria-expanded", String(o));
  }, d = (y) => {
    y !== o && (o = y, s(), n.onToggle?.(o));
  };
  return c.onclick = () => d(!o), c.onmouseover = () => {
    c.style.background = o ? P.btnBgActive : P.btnBgHover;
  }, c.onmouseout = () => {
    c.style.background = o ? P.btnBgActive : P.btnBg;
  }, e.toggleEl.style.marginRight = "2px", e.toggleEl.appendChild(c), s(), {
    panel: r,
    isOpen: () => o,
    setOpen: d
  };
}
const Si = ["debug", "gufe-debug"], Ci = "debug", ki = "GUFE_VIZ_DEBUG";
function xi() {
  return !!globalThis[ki];
}
function Ei() {
  try {
    const e = globalThis.location?.search;
    if (!e) return !1;
    const t = new URLSearchParams(e);
    return Si.some((n) => t.has(n));
  } catch {
    return !1;
  }
}
function Pi(e) {
  return e?.hasAttribute?.(Ci) ? !0 : xi() || Ei();
}
function Ai(e) {
  try {
    return JSON.stringify(e, null, 2) ?? String(e);
  } catch (t) {
    return `<could not be stringified: ${ge(t)}>`;
  }
}
function Ri(e, t, n) {
  if (!Pi(n)) return;
  const o = Ai(t), i = t?.type, r = `[gufe-viz] ${e}${typeof i == "string" ? ` ${i}` : ""} (${o.length} chars)`, c = typeof console.groupCollapsed == "function";
  c ? console.groupCollapsed(r) : console.log(r), console.log(o), console.log(t), c && console.groupEnd?.();
}
const Mi = 150;
class Se extends HTMLElement {
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
    this.style.display = "block", this.style.width = this.style.width || "100%", this.style.height = this.style.height || "100%", this.style.background = P.appBg, this.style.color = P.textPrimary, this.style.fontFamily = "'Inter',system-ui,sans-serif", typeof ResizeObserver < "u" && !this.#n && (this.#n = new ResizeObserver(() => {
      this.#o && clearTimeout(this.#o), this.#o = setTimeout(() => this.#e?.onResize?.(), Mi);
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
    return this.#s(), this.#r = j(
      "div",
      `width:100%;height:100%;display:flex;flex-direction:column;overflow:hidden;background:${P.appBg};`
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
      t.appendChild(ae(this.placeholder()));
      return;
    }
    let o;
    try {
      o = this.renderView(t, this.#t);
    } catch (i) {
      this.#l(t, n, i);
      return;
    }
    o instanceof Promise ? o.then(
      (i) => this.#c(i, n),
      (i) => this.#l(t, n, i)
    ) : this.#c(o, n);
  }
  /** Take ownership of a view's handle, unless it belongs to a dead render. */
  #c(t, n) {
    if (n !== this.#i || !this.isConnected) {
      try {
        t?.cleanup?.();
      } catch (o) {
        console.warn("[gufe-viz] cleanup of a superseded view failed:", o);
      }
      return;
    }
    this.#e = t || null;
  }
  #l(t, n, o) {
    n === this.#i && (console.warn("[gufe-viz] render failed:", o), t.replaceChildren(ae(`Failed to render: ${ge(o)}`, !0)));
  }
  /** Force a resize pass - for hosts that know they resized us. */
  resize() {
    this.#e?.onResize?.();
  }
}
function Ce(e, t) {
  typeof customElements > "u" || customElements.get(e) || customElements.define(e, t);
}
function Fi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ut = { exports: {} }, kn = {}, Re = {}, ze = {}, xn = {}, En = {}, Pn = {}, lr;
function fn() {
  return lr || (lr = 1, (function(e) {
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
    class o extends t {
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
        return (u = this._str) !== null && u !== void 0 ? u : this._str = this._items.reduce((h, C) => `${h}${C}`, "");
      }
      get names() {
        var u;
        return (u = this._names) !== null && u !== void 0 ? u : this._names = this._items.reduce((h, C) => (C instanceof n && (h[C.str] = (h[C.str] || 0) + 1), h), {});
      }
    }
    e._Code = o, e.nil = new o("");
    function i(g, ...u) {
      const h = [g[0]];
      let C = 0;
      for (; C < u.length; )
        s(h, u[C]), h.push(g[++C]);
      return new o(h);
    }
    e._ = i;
    const r = new o("+");
    function c(g, ...u) {
      const h = [v(g[0])];
      let C = 0;
      for (; C < u.length; )
        h.push(r), s(h, u[C]), h.push(r, v(g[++C]));
      return d(h), new o(h);
    }
    e.str = c;
    function s(g, u) {
      u instanceof o ? g.push(...u._items) : u instanceof n ? g.push(u) : g.push(S(u));
    }
    e.addCodeArg = s;
    function d(g) {
      let u = 1;
      for (; u < g.length - 1; ) {
        if (g[u] === r) {
          const h = y(g[u - 1], g[u + 1]);
          if (h !== void 0) {
            g.splice(u - 1, 3, h);
            continue;
          }
          g[u++] = "+";
        }
        u++;
      }
    }
    function y(g, u) {
      if (u === '""')
        return g;
      if (g === '""')
        return u;
      if (typeof g == "string")
        return u instanceof n || g[g.length - 1] !== '"' ? void 0 : typeof u != "string" ? `${g.slice(0, -1)}${u}"` : u[0] === '"' ? g.slice(0, -1) + u.slice(1) : void 0;
      if (typeof u == "string" && u[0] === '"' && !(g instanceof n))
        return `"${g}${u.slice(1)}`;
    }
    function m(g, u) {
      return u.emptyStr() ? g : g.emptyStr() ? u : c`${g}${u}`;
    }
    e.strConcat = m;
    function S(g) {
      return typeof g == "number" || typeof g == "boolean" || g === null ? g : v(Array.isArray(g) ? g.join(",") : g);
    }
    function w(g) {
      return new o(v(g));
    }
    e.stringify = w;
    function v(g) {
      return JSON.stringify(g).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    e.safeStringify = v;
    function _(g) {
      return typeof g == "string" && e.IDENTIFIER.test(g) ? new o(`.${g}`) : i`[${g}]`;
    }
    e.getProperty = _;
    function b(g) {
      if (typeof g == "string" && e.IDENTIFIER.test(g))
        return new o(`${g}`);
      throw new Error(`CodeGen: invalid export name: ${g}, use explicit $id name mapping`);
    }
    e.getEsmExportName = b;
    function f(g) {
      return new o(g.toString());
    }
    e.regexpCode = f;
  })(Pn)), Pn;
}
var An = {}, dr;
function ur() {
  return dr || (dr = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0;
    const t = /* @__PURE__ */ fn();
    class n extends Error {
      constructor(y) {
        super(`CodeGen: "code" for ${y} not defined`), this.value = y.value;
      }
    }
    var o;
    (function(d) {
      d[d.Started = 0] = "Started", d[d.Completed = 1] = "Completed";
    })(o || (e.UsedValueState = o = {})), e.varKinds = {
      const: new t.Name("const"),
      let: new t.Name("let"),
      var: new t.Name("var")
    };
    class i {
      constructor({ prefixes: y, parent: m } = {}) {
        this._names = {}, this._prefixes = y, this._parent = m;
      }
      toName(y) {
        return y instanceof t.Name ? y : this.name(y);
      }
      name(y) {
        return new t.Name(this._newName(y));
      }
      _newName(y) {
        const m = this._names[y] || this._nameGroup(y);
        return `${y}${m.index++}`;
      }
      _nameGroup(y) {
        var m, S;
        if (!((S = (m = this._parent) === null || m === void 0 ? void 0 : m._prefixes) === null || S === void 0) && S.has(y) || this._prefixes && !this._prefixes.has(y))
          throw new Error(`CodeGen: prefix "${y}" is not allowed in this scope`);
        return this._names[y] = { prefix: y, index: 0 };
      }
    }
    e.Scope = i;
    class r extends t.Name {
      constructor(y, m) {
        super(m), this.prefix = y;
      }
      setValue(y, { property: m, itemIndex: S }) {
        this.value = y, this.scopePath = (0, t._)`.${new t.Name(m)}[${S}]`;
      }
    }
    e.ValueScopeName = r;
    const c = (0, t._)`\n`;
    class s extends i {
      constructor(y) {
        super(y), this._values = {}, this._scope = y.scope, this.opts = { ...y, _n: y.lines ? c : t.nil };
      }
      get() {
        return this._scope;
      }
      name(y) {
        return new r(y, this._newName(y));
      }
      value(y, m) {
        var S;
        if (m.ref === void 0)
          throw new Error("CodeGen: ref must be passed in value");
        const w = this.toName(y), { prefix: v } = w, _ = (S = m.key) !== null && S !== void 0 ? S : m.ref;
        let b = this._values[v];
        if (b) {
          const u = b.get(_);
          if (u)
            return u;
        } else
          b = this._values[v] = /* @__PURE__ */ new Map();
        b.set(_, w);
        const f = this._scope[v] || (this._scope[v] = []), g = f.length;
        return f[g] = m.ref, w.setValue(m, { property: v, itemIndex: g }), w;
      }
      getValue(y, m) {
        const S = this._values[y];
        if (S)
          return S.get(m);
      }
      scopeRefs(y, m = this._values) {
        return this._reduceValues(m, (S) => {
          if (S.scopePath === void 0)
            throw new Error(`CodeGen: name "${S}" has no value`);
          return (0, t._)`${y}${S.scopePath}`;
        });
      }
      scopeCode(y = this._values, m, S) {
        return this._reduceValues(y, (w) => {
          if (w.value === void 0)
            throw new Error(`CodeGen: name "${w}" has no value`);
          return w.value.code;
        }, m, S);
      }
      _reduceValues(y, m, S = {}, w) {
        let v = t.nil;
        for (const _ in y) {
          const b = y[_];
          if (!b)
            continue;
          const f = S[_] = S[_] || /* @__PURE__ */ new Map();
          b.forEach((g) => {
            if (f.has(g))
              return;
            f.set(g, o.Started);
            let u = m(g);
            if (u) {
              const h = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
              v = (0, t._)`${v}${h} ${g} = ${u};${this.opts._n}`;
            } else if (u = w?.(g))
              v = (0, t._)`${v}${u}${this.opts._n}`;
            else
              throw new n(g);
            f.set(g, o.Completed);
          });
        }
        return v;
      }
    }
    e.ValueScope = s;
  })(An)), An;
}
var fr;
function Q() {
  return fr || (fr = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
    const t = /* @__PURE__ */ fn(), n = /* @__PURE__ */ ur();
    var o = /* @__PURE__ */ fn();
    Object.defineProperty(e, "_", { enumerable: !0, get: function() {
      return o._;
    } }), Object.defineProperty(e, "str", { enumerable: !0, get: function() {
      return o.str;
    } }), Object.defineProperty(e, "strConcat", { enumerable: !0, get: function() {
      return o.strConcat;
    } }), Object.defineProperty(e, "nil", { enumerable: !0, get: function() {
      return o.nil;
    } }), Object.defineProperty(e, "getProperty", { enumerable: !0, get: function() {
      return o.getProperty;
    } }), Object.defineProperty(e, "stringify", { enumerable: !0, get: function() {
      return o.stringify;
    } }), Object.defineProperty(e, "regexpCode", { enumerable: !0, get: function() {
      return o.regexpCode;
    } }), Object.defineProperty(e, "Name", { enumerable: !0, get: function() {
      return o.Name;
    } });
    var i = /* @__PURE__ */ ur();
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
    class r {
      optimizeNodes() {
        return this;
      }
      optimizeNames($, k) {
        return this;
      }
    }
    class c extends r {
      constructor($, k, I) {
        super(), this.varKind = $, this.name = k, this.rhs = I;
      }
      render({ es5: $, _n: k }) {
        const I = $ ? n.varKinds.var : this.varKind, H = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
        return `${I} ${this.name}${H};` + k;
      }
      optimizeNames($, k) {
        if ($[this.name.str])
          return this.rhs && (this.rhs = J(this.rhs, $, k)), this;
      }
      get names() {
        return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
      }
    }
    class s extends r {
      constructor($, k, I) {
        super(), this.lhs = $, this.rhs = k, this.sideEffects = I;
      }
      render({ _n: $ }) {
        return `${this.lhs} = ${this.rhs};` + $;
      }
      optimizeNames($, k) {
        if (!(this.lhs instanceof t.Name && !$[this.lhs.str] && !this.sideEffects))
          return this.rhs = J(this.rhs, $, k), this;
      }
      get names() {
        const $ = this.lhs instanceof t.Name ? {} : { ...this.lhs.names };
        return T($, this.rhs);
      }
    }
    class d extends s {
      constructor($, k, I, H) {
        super($, I, H), this.op = k;
      }
      render({ _n: $ }) {
        return `${this.lhs} ${this.op}= ${this.rhs};` + $;
      }
    }
    class y extends r {
      constructor($) {
        super(), this.label = $, this.names = {};
      }
      render({ _n: $ }) {
        return `${this.label}:` + $;
      }
    }
    class m extends r {
      constructor($) {
        super(), this.label = $, this.names = {};
      }
      render({ _n: $ }) {
        return `break${this.label ? ` ${this.label}` : ""};` + $;
      }
    }
    class S extends r {
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
    class w extends r {
      constructor($) {
        super(), this.code = $;
      }
      render({ _n: $ }) {
        return `${this.code};` + $;
      }
      optimizeNodes() {
        return `${this.code}` ? this : void 0;
      }
      optimizeNames($, k) {
        return this.code = J(this.code, $, k), this;
      }
      get names() {
        return this.code instanceof t._CodeOrName ? this.code.names : {};
      }
    }
    class v extends r {
      constructor($ = []) {
        super(), this.nodes = $;
      }
      render($) {
        return this.nodes.reduce((k, I) => k + I.render($), "");
      }
      optimizeNodes() {
        const { nodes: $ } = this;
        let k = $.length;
        for (; k--; ) {
          const I = $[k].optimizeNodes();
          Array.isArray(I) ? $.splice(k, 1, ...I) : I ? $[k] = I : $.splice(k, 1);
        }
        return $.length > 0 ? this : void 0;
      }
      optimizeNames($, k) {
        const { nodes: I } = this;
        let H = I.length;
        for (; H--; ) {
          const W = I[H];
          W.optimizeNames($, k) || (Z($, W.names), I.splice(H, 1));
        }
        return I.length > 0 ? this : void 0;
      }
      get names() {
        return this.nodes.reduce(($, k) => A($, k.names), {});
      }
    }
    class _ extends v {
      render($) {
        return "{" + $._n + super.render($) + "}" + $._n;
      }
    }
    class b extends v {
    }
    class f extends _ {
    }
    f.kind = "else";
    class g extends _ {
      constructor($, k) {
        super(k), this.condition = $;
      }
      render($) {
        let k = `if(${this.condition})` + super.render($);
        return this.else && (k += "else " + this.else.render($)), k;
      }
      optimizeNodes() {
        super.optimizeNodes();
        const $ = this.condition;
        if ($ === !0)
          return this.nodes;
        let k = this.else;
        if (k) {
          const I = k.optimizeNodes();
          k = this.else = Array.isArray(I) ? new f(I) : I;
        }
        if (k)
          return $ === !1 ? k instanceof g ? k : k.nodes : this.nodes.length ? this : new g(L($), k instanceof g ? [k] : k.nodes);
        if (!($ === !1 || !this.nodes.length))
          return this;
      }
      optimizeNames($, k) {
        var I;
        if (this.else = (I = this.else) === null || I === void 0 ? void 0 : I.optimizeNames($, k), !!(super.optimizeNames($, k) || this.else))
          return this.condition = J(this.condition, $, k), this;
      }
      get names() {
        const $ = super.names;
        return T($, this.condition), this.else && A($, this.else.names), $;
      }
    }
    g.kind = "if";
    class u extends _ {
    }
    u.kind = "for";
    class h extends u {
      constructor($) {
        super(), this.iteration = $;
      }
      render($) {
        return `for(${this.iteration})` + super.render($);
      }
      optimizeNames($, k) {
        if (super.optimizeNames($, k))
          return this.iteration = J(this.iteration, $, k), this;
      }
      get names() {
        return A(super.names, this.iteration.names);
      }
    }
    class C extends u {
      constructor($, k, I, H) {
        super(), this.varKind = $, this.name = k, this.from = I, this.to = H;
      }
      render($) {
        const k = $.es5 ? n.varKinds.var : this.varKind, { name: I, from: H, to: W } = this;
        return `for(${k} ${I}=${H}; ${I}<${W}; ${I}++)` + super.render($);
      }
      get names() {
        const $ = T(super.names, this.from);
        return T($, this.to);
      }
    }
    class a extends u {
      constructor($, k, I, H) {
        super(), this.loop = $, this.varKind = k, this.name = I, this.iterable = H;
      }
      render($) {
        return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render($);
      }
      optimizeNames($, k) {
        if (super.optimizeNames($, k))
          return this.iterable = J(this.iterable, $, k), this;
      }
      get names() {
        return A(super.names, this.iterable.names);
      }
    }
    class l extends _ {
      constructor($, k, I) {
        super(), this.name = $, this.args = k, this.async = I;
      }
      render($) {
        return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render($);
      }
    }
    l.kind = "func";
    class p extends v {
      render($) {
        return "return " + super.render($);
      }
    }
    p.kind = "return";
    class x extends _ {
      render($) {
        let k = "try" + super.render($);
        return this.catch && (k += this.catch.render($)), this.finally && (k += this.finally.render($)), k;
      }
      optimizeNodes() {
        var $, k;
        return super.optimizeNodes(), ($ = this.catch) === null || $ === void 0 || $.optimizeNodes(), (k = this.finally) === null || k === void 0 || k.optimizeNodes(), this;
      }
      optimizeNames($, k) {
        var I, H;
        return super.optimizeNames($, k), (I = this.catch) === null || I === void 0 || I.optimizeNames($, k), (H = this.finally) === null || H === void 0 || H.optimizeNames($, k), this;
      }
      get names() {
        const $ = super.names;
        return this.catch && A($, this.catch.names), this.finally && A($, this.finally.names), $;
      }
    }
    class E extends _ {
      constructor($) {
        super(), this.error = $;
      }
      render($) {
        return `catch(${this.error})` + super.render($);
      }
    }
    E.kind = "catch";
    class N extends _ {
      render($) {
        return "finally" + super.render($);
      }
    }
    N.kind = "finally";
    class z {
      constructor($, k = {}) {
        this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ...k, _n: k.lines ? `
` : "" }, this._extScope = $, this._scope = new n.Scope({ parent: $ }), this._nodes = [new b()];
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
      scopeValue($, k) {
        const I = this._extScope.value($, k);
        return (this._values[I.prefix] || (this._values[I.prefix] = /* @__PURE__ */ new Set())).add(I), I;
      }
      getScopeValue($, k) {
        return this._extScope.getValue($, k);
      }
      // return code that assigns values in the external scope to the names that are used internally
      // (same names that were returned by gen.scopeName or gen.scopeValue)
      scopeRefs($) {
        return this._extScope.scopeRefs($, this._values);
      }
      scopeCode() {
        return this._extScope.scopeCode(this._values);
      }
      _def($, k, I, H) {
        const W = this._scope.toName(k);
        return I !== void 0 && H && (this._constants[W.str] = I), this._leafNode(new c($, W, I)), W;
      }
      // `const` declaration (`var` in es5 mode)
      const($, k, I) {
        return this._def(n.varKinds.const, $, k, I);
      }
      // `let` declaration with optional assignment (`var` in es5 mode)
      let($, k, I) {
        return this._def(n.varKinds.let, $, k, I);
      }
      // `var` declaration with optional assignment
      var($, k, I) {
        return this._def(n.varKinds.var, $, k, I);
      }
      // assignment code
      assign($, k, I) {
        return this._leafNode(new s($, k, I));
      }
      // `+=` code
      add($, k) {
        return this._leafNode(new d($, e.operators.ADD, k));
      }
      // appends passed SafeExpr to code or executes Block
      code($) {
        return typeof $ == "function" ? $() : $ !== t.nil && this._leafNode(new w($)), this;
      }
      // returns code for object literal for the passed argument list of key-value pairs
      object(...$) {
        const k = ["{"];
        for (const [I, H] of $)
          k.length > 1 && k.push(","), k.push(I), (I !== H || this.opts.es5) && (k.push(":"), (0, t.addCodeArg)(k, H));
        return k.push("}"), new t._Code(k);
      }
      // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
      if($, k, I) {
        if (this._blockNode(new g($)), k && I)
          this.code(k).else().code(I).endIf();
        else if (k)
          this.code(k).endIf();
        else if (I)
          throw new Error('CodeGen: "else" body without "then" body');
        return this;
      }
      // `else if` clause - invalid without `if` or after `else` clauses
      elseIf($) {
        return this._elseNode(new g($));
      }
      // `else` clause - only valid after `if` or `else if` clauses
      else() {
        return this._elseNode(new f());
      }
      // end `if` statement (needed if gen.if was used only with condition)
      endIf() {
        return this._endBlockNode(g, f);
      }
      _for($, k) {
        return this._blockNode($), k && this.code(k).endFor(), this;
      }
      // a generic `for` clause (or statement if `forBody` is passed)
      for($, k) {
        return this._for(new h($), k);
      }
      // `for` statement for a range of values
      forRange($, k, I, H, W = this.opts.es5 ? n.varKinds.var : n.varKinds.let) {
        const oe = this._scope.toName($);
        return this._for(new C(W, oe, k, I), () => H(oe));
      }
      // `for-of` statement (in es5 mode replace with a normal for loop)
      forOf($, k, I, H = n.varKinds.const) {
        const W = this._scope.toName($);
        if (this.opts.es5) {
          const oe = k instanceof t.Name ? k : this.var("_arr", k);
          return this.forRange("_i", 0, (0, t._)`${oe}.length`, (re) => {
            this.var(W, (0, t._)`${oe}[${re}]`), I(W);
          });
        }
        return this._for(new a("of", H, W, k), () => I(W));
      }
      // `for-in` statement.
      // With option `ownProperties` replaced with a `for-of` loop for object keys
      forIn($, k, I, H = this.opts.es5 ? n.varKinds.var : n.varKinds.const) {
        if (this.opts.ownProperties)
          return this.forOf($, (0, t._)`Object.keys(${k})`, I);
        const W = this._scope.toName($);
        return this._for(new a("in", H, W, k), () => I(W));
      }
      // end `for` loop
      endFor() {
        return this._endBlockNode(u);
      }
      // `label` statement
      label($) {
        return this._leafNode(new y($));
      }
      // `break` statement
      break($) {
        return this._leafNode(new m($));
      }
      // `return` statement
      return($) {
        const k = new p();
        if (this._blockNode(k), this.code($), k.nodes.length !== 1)
          throw new Error('CodeGen: "return" should have one node');
        return this._endBlockNode(p);
      }
      // `try` statement
      try($, k, I) {
        if (!k && !I)
          throw new Error('CodeGen: "try" without "catch" and "finally"');
        const H = new x();
        if (this._blockNode(H), this.code($), k) {
          const W = this.name("e");
          this._currNode = H.catch = new E(W), k(W);
        }
        return I && (this._currNode = H.finally = new N(), this.code(I)), this._endBlockNode(E, N);
      }
      // `throw` statement
      throw($) {
        return this._leafNode(new S($));
      }
      // start self-balancing block
      block($, k) {
        return this._blockStarts.push(this._nodes.length), $ && this.code($).endBlock(k), this;
      }
      // end the current self-balancing block
      endBlock($) {
        const k = this._blockStarts.pop();
        if (k === void 0)
          throw new Error("CodeGen: not in self-balancing block");
        const I = this._nodes.length - k;
        if (I < 0 || $ !== void 0 && I !== $)
          throw new Error(`CodeGen: wrong number of nodes: ${I} vs ${$} expected`);
        return this._nodes.length = k, this;
      }
      // `function` heading (or definition if funcBody is passed)
      func($, k = t.nil, I, H) {
        return this._blockNode(new l($, k, I)), H && this.code(H).endFunc(), this;
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
      _endBlockNode($, k) {
        const I = this._currNode;
        if (I instanceof $ || k && I instanceof k)
          return this._nodes.pop(), this;
        throw new Error(`CodeGen: not in block "${k ? `${$.kind}/${k.kind}` : $.kind}"`);
      }
      _elseNode($) {
        const k = this._currNode;
        if (!(k instanceof g))
          throw new Error('CodeGen: "else" without "if"');
        return this._currNode = k.else = $, this;
      }
      get _root() {
        return this._nodes[0];
      }
      get _currNode() {
        const $ = this._nodes;
        return $[$.length - 1];
      }
      set _currNode($) {
        const k = this._nodes;
        k[k.length - 1] = $;
      }
    }
    e.CodeGen = z;
    function A(F, $) {
      for (const k in $)
        F[k] = (F[k] || 0) + ($[k] || 0);
      return F;
    }
    function T(F, $) {
      return $ instanceof t._CodeOrName ? A(F, $.names) : F;
    }
    function J(F, $, k) {
      if (F instanceof t.Name)
        return I(F);
      if (!H(F))
        return F;
      return new t._Code(F._items.reduce((W, oe) => (oe instanceof t.Name && (oe = I(oe)), oe instanceof t._Code ? W.push(...oe._items) : W.push(oe), W), []));
      function I(W) {
        const oe = k[W.str];
        return oe === void 0 || $[W.str] !== 1 ? W : (delete $[W.str], oe);
      }
      function H(W) {
        return W instanceof t._Code && W._items.some((oe) => oe instanceof t.Name && $[oe.str] === 1 && k[oe.str] !== void 0);
      }
    }
    function Z(F, $) {
      for (const k in $)
        F[k] = (F[k] || 0) - ($[k] || 0);
    }
    function L(F) {
      return typeof F == "boolean" || typeof F == "number" || F === null ? !F : (0, t._)`!${D(F)}`;
    }
    e.not = L;
    const G = R(e.operators.AND);
    function U(...F) {
      return F.reduce(G);
    }
    e.and = U;
    const Y = R(e.operators.OR);
    function V(...F) {
      return F.reduce(Y);
    }
    e.or = V;
    function R(F) {
      return ($, k) => $ === t.nil ? k : k === t.nil ? $ : (0, t._)`${D($)} ${F} ${D(k)}`;
    }
    function D(F) {
      return F instanceof t.Name ? F : (0, t._)`(${F})`;
    }
  })(En)), En;
}
var ee = {}, pr;
function ne() {
  if (pr) return ee;
  pr = 1, Object.defineProperty(ee, "__esModule", { value: !0 }), ee.checkStrictMode = ee.getErrorPath = ee.Type = ee.useFunc = ee.setEvaluated = ee.evaluatedPropsToName = ee.mergeEvaluated = ee.eachItem = ee.unescapeJsonPointer = ee.escapeJsonPointer = ee.escapeFragment = ee.unescapeFragment = ee.schemaRefOrVal = ee.schemaHasRulesButRef = ee.schemaHasRules = ee.checkUnknownRules = ee.alwaysValidSchema = ee.toHash = void 0;
  const e = /* @__PURE__ */ Q(), t = /* @__PURE__ */ fn();
  function n(a) {
    const l = {};
    for (const p of a)
      l[p] = !0;
    return l;
  }
  ee.toHash = n;
  function o(a, l) {
    return typeof l == "boolean" ? l : Object.keys(l).length === 0 ? !0 : (i(a, l), !r(l, a.self.RULES.all));
  }
  ee.alwaysValidSchema = o;
  function i(a, l = a.schema) {
    const { opts: p, self: x } = a;
    if (!p.strictSchema || typeof l == "boolean")
      return;
    const E = x.RULES.keywords;
    for (const N in l)
      E[N] || C(a, `unknown keyword: "${N}"`);
  }
  ee.checkUnknownRules = i;
  function r(a, l) {
    if (typeof a == "boolean")
      return !a;
    for (const p in a)
      if (l[p])
        return !0;
    return !1;
  }
  ee.schemaHasRules = r;
  function c(a, l) {
    if (typeof a == "boolean")
      return !a;
    for (const p in a)
      if (p !== "$ref" && l.all[p])
        return !0;
    return !1;
  }
  ee.schemaHasRulesButRef = c;
  function s({ topSchemaRef: a, schemaPath: l }, p, x, E) {
    if (!E) {
      if (typeof p == "number" || typeof p == "boolean")
        return p;
      if (typeof p == "string")
        return (0, e._)`${p}`;
    }
    return (0, e._)`${a}${l}${(0, e.getProperty)(x)}`;
  }
  ee.schemaRefOrVal = s;
  function d(a) {
    return S(decodeURIComponent(a));
  }
  ee.unescapeFragment = d;
  function y(a) {
    return encodeURIComponent(m(a));
  }
  ee.escapeFragment = y;
  function m(a) {
    return typeof a == "number" ? `${a}` : a.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  ee.escapeJsonPointer = m;
  function S(a) {
    return a.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  ee.unescapeJsonPointer = S;
  function w(a, l) {
    if (Array.isArray(a))
      for (const p of a)
        l(p);
    else
      l(a);
  }
  ee.eachItem = w;
  function v({ mergeNames: a, mergeToName: l, mergeValues: p, resultToName: x }) {
    return (E, N, z, A) => {
      const T = z === void 0 ? N : z instanceof e.Name ? (N instanceof e.Name ? a(E, N, z) : l(E, N, z), z) : N instanceof e.Name ? (l(E, z, N), N) : p(N, z);
      return A === e.Name && !(T instanceof e.Name) ? x(E, T) : T;
    };
  }
  ee.mergeEvaluated = {
    props: v({
      mergeNames: (a, l, p) => a.if((0, e._)`${p} !== true && ${l} !== undefined`, () => {
        a.if((0, e._)`${l} === true`, () => a.assign(p, !0), () => a.assign(p, (0, e._)`${p} || {}`).code((0, e._)`Object.assign(${p}, ${l})`));
      }),
      mergeToName: (a, l, p) => a.if((0, e._)`${p} !== true`, () => {
        l === !0 ? a.assign(p, !0) : (a.assign(p, (0, e._)`${p} || {}`), b(a, p, l));
      }),
      mergeValues: (a, l) => a === !0 ? !0 : { ...a, ...l },
      resultToName: _
    }),
    items: v({
      mergeNames: (a, l, p) => a.if((0, e._)`${p} !== true && ${l} !== undefined`, () => a.assign(p, (0, e._)`${l} === true ? true : ${p} > ${l} ? ${p} : ${l}`)),
      mergeToName: (a, l, p) => a.if((0, e._)`${p} !== true`, () => a.assign(p, l === !0 ? !0 : (0, e._)`${p} > ${l} ? ${p} : ${l}`)),
      mergeValues: (a, l) => a === !0 ? !0 : Math.max(a, l),
      resultToName: (a, l) => a.var("items", l)
    })
  };
  function _(a, l) {
    if (l === !0)
      return a.var("props", !0);
    const p = a.var("props", (0, e._)`{}`);
    return l !== void 0 && b(a, p, l), p;
  }
  ee.evaluatedPropsToName = _;
  function b(a, l, p) {
    Object.keys(p).forEach((x) => a.assign((0, e._)`${l}${(0, e.getProperty)(x)}`, !0));
  }
  ee.setEvaluated = b;
  const f = {};
  function g(a, l) {
    return a.scopeValue("func", {
      ref: l,
      code: f[l.code] || (f[l.code] = new t._Code(l.code))
    });
  }
  ee.useFunc = g;
  var u;
  (function(a) {
    a[a.Num = 0] = "Num", a[a.Str = 1] = "Str";
  })(u || (ee.Type = u = {}));
  function h(a, l, p) {
    if (a instanceof e.Name) {
      const x = l === u.Num;
      return p ? x ? (0, e._)`"[" + ${a} + "]"` : (0, e._)`"['" + ${a} + "']"` : x ? (0, e._)`"/" + ${a}` : (0, e._)`"/" + ${a}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return p ? (0, e.getProperty)(a).toString() : "/" + m(a);
  }
  ee.getErrorPath = h;
  function C(a, l, p = a.opts.strictSchema) {
    if (p) {
      if (l = `strict mode: ${l}`, p === !0)
        throw new Error(l);
      a.self.logger.warn(l);
    }
  }
  return ee.checkStrictMode = C, ee;
}
var ft = {}, hr;
function ke() {
  if (hr) return ft;
  hr = 1, Object.defineProperty(ft, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Q(), t = {
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
  return ft.default = t, ft;
}
var mr;
function gn() {
  return mr || (mr = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
    const t = /* @__PURE__ */ Q(), n = /* @__PURE__ */ ne(), o = /* @__PURE__ */ ke();
    e.keywordError = {
      message: ({ keyword: f }) => (0, t.str)`must pass "${f}" keyword validation`
    }, e.keyword$DataError = {
      message: ({ keyword: f, schemaType: g }) => g ? (0, t.str)`"${f}" keyword must be ${g} ($data)` : (0, t.str)`"${f}" keyword is invalid ($data)`
    };
    function i(f, g = e.keywordError, u, h) {
      const { it: C } = f, { gen: a, compositeRule: l, allErrors: p } = C, x = S(f, g, u);
      h ?? (l || p) ? d(a, x) : y(C, (0, t._)`[${x}]`);
    }
    e.reportError = i;
    function r(f, g = e.keywordError, u) {
      const { it: h } = f, { gen: C, compositeRule: a, allErrors: l } = h, p = S(f, g, u);
      d(C, p), a || l || y(h, o.default.vErrors);
    }
    e.reportExtraError = r;
    function c(f, g) {
      f.assign(o.default.errors, g), f.if((0, t._)`${o.default.vErrors} !== null`, () => f.if(g, () => f.assign((0, t._)`${o.default.vErrors}.length`, g), () => f.assign(o.default.vErrors, null)));
    }
    e.resetErrorsCount = c;
    function s({ gen: f, keyword: g, schemaValue: u, data: h, errsCount: C, it: a }) {
      if (C === void 0)
        throw new Error("ajv implementation error");
      const l = f.name("err");
      f.forRange("i", C, o.default.errors, (p) => {
        f.const(l, (0, t._)`${o.default.vErrors}[${p}]`), f.if((0, t._)`${l}.instancePath === undefined`, () => f.assign((0, t._)`${l}.instancePath`, (0, t.strConcat)(o.default.instancePath, a.errorPath))), f.assign((0, t._)`${l}.schemaPath`, (0, t.str)`${a.errSchemaPath}/${g}`), a.opts.verbose && (f.assign((0, t._)`${l}.schema`, u), f.assign((0, t._)`${l}.data`, h));
      });
    }
    e.extendErrors = s;
    function d(f, g) {
      const u = f.const("err", g);
      f.if((0, t._)`${o.default.vErrors} === null`, () => f.assign(o.default.vErrors, (0, t._)`[${u}]`), (0, t._)`${o.default.vErrors}.push(${u})`), f.code((0, t._)`${o.default.errors}++`);
    }
    function y(f, g) {
      const { gen: u, validateName: h, schemaEnv: C } = f;
      C.$async ? u.throw((0, t._)`new ${f.ValidationError}(${g})`) : (u.assign((0, t._)`${h}.errors`, g), u.return(!1));
    }
    const m = {
      keyword: new t.Name("keyword"),
      schemaPath: new t.Name("schemaPath"),
      // also used in JTD errors
      params: new t.Name("params"),
      propertyName: new t.Name("propertyName"),
      message: new t.Name("message"),
      schema: new t.Name("schema"),
      parentSchema: new t.Name("parentSchema")
    };
    function S(f, g, u) {
      const { createErrors: h } = f.it;
      return h === !1 ? (0, t._)`{}` : w(f, g, u);
    }
    function w(f, g, u = {}) {
      const { gen: h, it: C } = f, a = [
        v(C, u),
        _(f, u)
      ];
      return b(f, g, a), h.object(...a);
    }
    function v({ errorPath: f }, { instancePath: g }) {
      const u = g ? (0, t.str)`${f}${(0, n.getErrorPath)(g, n.Type.Str)}` : f;
      return [o.default.instancePath, (0, t.strConcat)(o.default.instancePath, u)];
    }
    function _({ keyword: f, it: { errSchemaPath: g } }, { schemaPath: u, parentSchema: h }) {
      let C = h ? g : (0, t.str)`${g}/${f}`;
      return u && (C = (0, t.str)`${C}${(0, n.getErrorPath)(u, n.Type.Str)}`), [m.schemaPath, C];
    }
    function b(f, { params: g, message: u }, h) {
      const { keyword: C, data: a, schemaValue: l, it: p } = f, { opts: x, propertyName: E, topSchemaRef: N, schemaPath: z } = p;
      h.push([m.keyword, C], [m.params, typeof g == "function" ? g(f) : g || (0, t._)`{}`]), x.messages && h.push([m.message, typeof u == "function" ? u(f) : u]), x.verbose && h.push([m.schema, l], [m.parentSchema, (0, t._)`${N}${z}`], [o.default.data, a]), E && h.push([m.propertyName, E]);
    }
  })(xn)), xn;
}
var gr;
function Ni() {
  if (gr) return ze;
  gr = 1, Object.defineProperty(ze, "__esModule", { value: !0 }), ze.boolOrEmptySchema = ze.topBoolOrEmptySchema = void 0;
  const e = /* @__PURE__ */ gn(), t = /* @__PURE__ */ Q(), n = /* @__PURE__ */ ke(), o = {
    message: "boolean schema is false"
  };
  function i(s) {
    const { gen: d, schema: y, validateName: m } = s;
    y === !1 ? c(s, !1) : typeof y == "object" && y.$async === !0 ? d.return(n.default.data) : (d.assign((0, t._)`${m}.errors`, null), d.return(!0));
  }
  ze.topBoolOrEmptySchema = i;
  function r(s, d) {
    const { gen: y, schema: m } = s;
    m === !1 ? (y.var(d, !1), c(s)) : y.var(d, !0);
  }
  ze.boolOrEmptySchema = r;
  function c(s, d) {
    const { gen: y, data: m } = s, S = {
      gen: y,
      keyword: "false schema",
      data: m,
      schema: !1,
      schemaCode: !1,
      schemaValue: !1,
      params: {},
      it: s
    };
    (0, e.reportError)(S, o, void 0, d);
  }
  return ze;
}
var ue = {}, Ie = {}, yr;
function Zo() {
  if (yr) return Ie;
  yr = 1, Object.defineProperty(Ie, "__esModule", { value: !0 }), Ie.getRules = Ie.isJSONType = void 0;
  const e = ["string", "number", "integer", "boolean", "null", "object", "array"], t = new Set(e);
  function n(i) {
    return typeof i == "string" && t.has(i);
  }
  Ie.isJSONType = n;
  function o() {
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
  return Ie.getRules = o, Ie;
}
var Me = {}, vr;
function Qo() {
  if (vr) return Me;
  vr = 1, Object.defineProperty(Me, "__esModule", { value: !0 }), Me.shouldUseRule = Me.shouldUseGroup = Me.schemaHasRulesForType = void 0;
  function e({ schema: o, self: i }, r) {
    const c = i.RULES.types[r];
    return c && c !== !0 && t(o, c);
  }
  Me.schemaHasRulesForType = e;
  function t(o, i) {
    return i.rules.some((r) => n(o, r));
  }
  Me.shouldUseGroup = t;
  function n(o, i) {
    var r;
    return o[i.keyword] !== void 0 || ((r = i.definition.implements) === null || r === void 0 ? void 0 : r.some((c) => o[c] !== void 0));
  }
  return Me.shouldUseRule = n, Me;
}
var $r;
function pn() {
  if ($r) return ue;
  $r = 1, Object.defineProperty(ue, "__esModule", { value: !0 }), ue.reportTypeError = ue.checkDataTypes = ue.checkDataType = ue.coerceAndCheckDataType = ue.getJSONTypes = ue.getSchemaTypes = ue.DataType = void 0;
  const e = /* @__PURE__ */ Zo(), t = /* @__PURE__ */ Qo(), n = /* @__PURE__ */ gn(), o = /* @__PURE__ */ Q(), i = /* @__PURE__ */ ne();
  var r;
  (function(u) {
    u[u.Correct = 0] = "Correct", u[u.Wrong = 1] = "Wrong";
  })(r || (ue.DataType = r = {}));
  function c(u) {
    const h = s(u.type);
    if (h.includes("null")) {
      if (u.nullable === !1)
        throw new Error("type: null contradicts nullable: false");
    } else {
      if (!h.length && u.nullable !== void 0)
        throw new Error('"nullable" cannot be used without "type"');
      u.nullable === !0 && h.push("null");
    }
    return h;
  }
  ue.getSchemaTypes = c;
  function s(u) {
    const h = Array.isArray(u) ? u : u ? [u] : [];
    if (h.every(e.isJSONType))
      return h;
    throw new Error("type must be JSONType or JSONType[]: " + h.join(","));
  }
  ue.getJSONTypes = s;
  function d(u, h) {
    const { gen: C, data: a, opts: l } = u, p = m(h, l.coerceTypes), x = h.length > 0 && !(p.length === 0 && h.length === 1 && (0, t.schemaHasRulesForType)(u, h[0]));
    if (x) {
      const E = _(h, a, l.strictNumbers, r.Wrong);
      C.if(E, () => {
        p.length ? S(u, h, p) : f(u);
      });
    }
    return x;
  }
  ue.coerceAndCheckDataType = d;
  const y = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
  function m(u, h) {
    return h ? u.filter((C) => y.has(C) || h === "array" && C === "array") : [];
  }
  function S(u, h, C) {
    const { gen: a, data: l, opts: p } = u, x = a.let("dataType", (0, o._)`typeof ${l}`), E = a.let("coerced", (0, o._)`undefined`);
    p.coerceTypes === "array" && a.if((0, o._)`${x} == 'object' && Array.isArray(${l}) && ${l}.length == 1`, () => a.assign(l, (0, o._)`${l}[0]`).assign(x, (0, o._)`typeof ${l}`).if(_(h, l, p.strictNumbers), () => a.assign(E, l))), a.if((0, o._)`${E} !== undefined`);
    for (const z of C)
      (y.has(z) || z === "array" && p.coerceTypes === "array") && N(z);
    a.else(), f(u), a.endIf(), a.if((0, o._)`${E} !== undefined`, () => {
      a.assign(l, E), w(u, E);
    });
    function N(z) {
      switch (z) {
        case "string":
          a.elseIf((0, o._)`${x} == "number" || ${x} == "boolean"`).assign(E, (0, o._)`"" + ${l}`).elseIf((0, o._)`${l} === null`).assign(E, (0, o._)`""`);
          return;
        case "number":
          a.elseIf((0, o._)`${x} == "boolean" || ${l} === null
              || (${x} == "string" && ${l} && ${l} == +${l})`).assign(E, (0, o._)`+${l}`);
          return;
        case "integer":
          a.elseIf((0, o._)`${x} === "boolean" || ${l} === null
              || (${x} === "string" && ${l} && ${l} == +${l} && !(${l} % 1))`).assign(E, (0, o._)`+${l}`);
          return;
        case "boolean":
          a.elseIf((0, o._)`${l} === "false" || ${l} === 0 || ${l} === null`).assign(E, !1).elseIf((0, o._)`${l} === "true" || ${l} === 1`).assign(E, !0);
          return;
        case "null":
          a.elseIf((0, o._)`${l} === "" || ${l} === 0 || ${l} === false`), a.assign(E, null);
          return;
        case "array":
          a.elseIf((0, o._)`${x} === "string" || ${x} === "number"
              || ${x} === "boolean" || ${l} === null`).assign(E, (0, o._)`[${l}]`);
      }
    }
  }
  function w({ gen: u, parentData: h, parentDataProperty: C }, a) {
    u.if((0, o._)`${h} !== undefined`, () => u.assign((0, o._)`${h}[${C}]`, a));
  }
  function v(u, h, C, a = r.Correct) {
    const l = a === r.Correct ? o.operators.EQ : o.operators.NEQ;
    let p;
    switch (u) {
      case "null":
        return (0, o._)`${h} ${l} null`;
      case "array":
        p = (0, o._)`Array.isArray(${h})`;
        break;
      case "object":
        p = (0, o._)`${h} && typeof ${h} == "object" && !Array.isArray(${h})`;
        break;
      case "integer":
        p = x((0, o._)`!(${h} % 1) && !isNaN(${h})`);
        break;
      case "number":
        p = x();
        break;
      default:
        return (0, o._)`typeof ${h} ${l} ${u}`;
    }
    return a === r.Correct ? p : (0, o.not)(p);
    function x(E = o.nil) {
      return (0, o.and)((0, o._)`typeof ${h} == "number"`, E, C ? (0, o._)`isFinite(${h})` : o.nil);
    }
  }
  ue.checkDataType = v;
  function _(u, h, C, a) {
    if (u.length === 1)
      return v(u[0], h, C, a);
    let l;
    const p = (0, i.toHash)(u);
    if (p.array && p.object) {
      const x = (0, o._)`typeof ${h} != "object"`;
      l = p.null ? x : (0, o._)`!${h} || ${x}`, delete p.null, delete p.array, delete p.object;
    } else
      l = o.nil;
    p.number && delete p.integer;
    for (const x in p)
      l = (0, o.and)(l, v(x, h, C, a));
    return l;
  }
  ue.checkDataTypes = _;
  const b = {
    message: ({ schema: u }) => `must be ${u}`,
    params: ({ schema: u, schemaValue: h }) => typeof u == "string" ? (0, o._)`{type: ${u}}` : (0, o._)`{type: ${h}}`
  };
  function f(u) {
    const h = g(u);
    (0, n.reportError)(h, b);
  }
  ue.reportTypeError = f;
  function g(u) {
    const { gen: h, data: C, schema: a } = u, l = (0, i.schemaRefOrVal)(u, a, "type");
    return {
      gen: h,
      keyword: "type",
      data: C,
      schema: a.type,
      schemaCode: l,
      schemaValue: l,
      parentSchema: a,
      params: {},
      it: u
    };
  }
  return ue;
}
var rt = {}, br;
function ji() {
  if (br) return rt;
  br = 1, Object.defineProperty(rt, "__esModule", { value: !0 }), rt.assignDefaults = void 0;
  const e = /* @__PURE__ */ Q(), t = /* @__PURE__ */ ne();
  function n(i, r) {
    const { properties: c, items: s } = i.schema;
    if (r === "object" && c)
      for (const d in c)
        o(i, d, c[d].default);
    else r === "array" && Array.isArray(s) && s.forEach((d, y) => o(i, y, d.default));
  }
  rt.assignDefaults = n;
  function o(i, r, c) {
    const { gen: s, compositeRule: d, data: y, opts: m } = i;
    if (c === void 0)
      return;
    const S = (0, e._)`${y}${(0, e.getProperty)(r)}`;
    if (d) {
      (0, t.checkStrictMode)(i, `default is ignored for: ${S}`);
      return;
    }
    let w = (0, e._)`${S} === undefined`;
    m.useDefaults === "empty" && (w = (0, e._)`${w} || ${S} === null || ${S} === ""`), s.if(w, (0, e._)`${S} = ${(0, e.stringify)(c)}`);
  }
  return rt;
}
var we = {}, se = {}, wr;
function xe() {
  if (wr) return se;
  wr = 1, Object.defineProperty(se, "__esModule", { value: !0 }), se.validateUnion = se.validateArray = se.usePattern = se.callValidateCode = se.schemaProperties = se.allSchemaProperties = se.noPropertyInData = se.propertyInData = se.isOwnProperty = se.hasPropFunc = se.reportMissingProp = se.checkMissingProp = se.checkReportMissingProp = void 0;
  const e = /* @__PURE__ */ Q(), t = /* @__PURE__ */ ne(), n = /* @__PURE__ */ ke(), o = /* @__PURE__ */ ne();
  function i(u, h) {
    const { gen: C, data: a, it: l } = u;
    C.if(m(C, a, h, l.opts.ownProperties), () => {
      u.setParams({ missingProperty: (0, e._)`${h}` }, !0), u.error();
    });
  }
  se.checkReportMissingProp = i;
  function r({ gen: u, data: h, it: { opts: C } }, a, l) {
    return (0, e.or)(...a.map((p) => (0, e.and)(m(u, h, p, C.ownProperties), (0, e._)`${l} = ${p}`)));
  }
  se.checkMissingProp = r;
  function c(u, h) {
    u.setParams({ missingProperty: h }, !0), u.error();
  }
  se.reportMissingProp = c;
  function s(u) {
    return u.scopeValue("func", {
      // eslint-disable-next-line @typescript-eslint/unbound-method
      ref: Object.prototype.hasOwnProperty,
      code: (0, e._)`Object.prototype.hasOwnProperty`
    });
  }
  se.hasPropFunc = s;
  function d(u, h, C) {
    return (0, e._)`${s(u)}.call(${h}, ${C})`;
  }
  se.isOwnProperty = d;
  function y(u, h, C, a) {
    const l = (0, e._)`${h}${(0, e.getProperty)(C)} !== undefined`;
    return a ? (0, e._)`${l} && ${d(u, h, C)}` : l;
  }
  se.propertyInData = y;
  function m(u, h, C, a) {
    const l = (0, e._)`${h}${(0, e.getProperty)(C)} === undefined`;
    return a ? (0, e.or)(l, (0, e.not)(d(u, h, C))) : l;
  }
  se.noPropertyInData = m;
  function S(u) {
    return u ? Object.keys(u).filter((h) => h !== "__proto__") : [];
  }
  se.allSchemaProperties = S;
  function w(u, h) {
    return S(h).filter((C) => !(0, t.alwaysValidSchema)(u, h[C]));
  }
  se.schemaProperties = w;
  function v({ schemaCode: u, data: h, it: { gen: C, topSchemaRef: a, schemaPath: l, errorPath: p }, it: x }, E, N, z) {
    const A = z ? (0, e._)`${u}, ${h}, ${a}${l}` : h, T = [
      [n.default.instancePath, (0, e.strConcat)(n.default.instancePath, p)],
      [n.default.parentData, x.parentData],
      [n.default.parentDataProperty, x.parentDataProperty],
      [n.default.rootData, n.default.rootData]
    ];
    x.opts.dynamicRef && T.push([n.default.dynamicAnchors, n.default.dynamicAnchors]);
    const J = (0, e._)`${A}, ${C.object(...T)}`;
    return N !== e.nil ? (0, e._)`${E}.call(${N}, ${J})` : (0, e._)`${E}(${J})`;
  }
  se.callValidateCode = v;
  const _ = (0, e._)`new RegExp`;
  function b({ gen: u, it: { opts: h } }, C) {
    const a = h.unicodeRegExp ? "u" : "", { regExp: l } = h.code, p = l(C, a);
    return u.scopeValue("pattern", {
      key: p.toString(),
      ref: p,
      code: (0, e._)`${l.code === "new RegExp" ? _ : (0, o.useFunc)(u, l)}(${C}, ${a})`
    });
  }
  se.usePattern = b;
  function f(u) {
    const { gen: h, data: C, keyword: a, it: l } = u, p = h.name("valid");
    if (l.allErrors) {
      const E = h.let("valid", !0);
      return x(() => h.assign(E, !1)), E;
    }
    return h.var(p, !0), x(() => h.break()), p;
    function x(E) {
      const N = h.const("len", (0, e._)`${C}.length`);
      h.forRange("i", 0, N, (z) => {
        u.subschema({
          keyword: a,
          dataProp: z,
          dataPropType: t.Type.Num
        }, p), h.if((0, e.not)(p), E);
      });
    }
  }
  se.validateArray = f;
  function g(u) {
    const { gen: h, schema: C, keyword: a, it: l } = u;
    if (!Array.isArray(C))
      throw new Error("ajv implementation error");
    if (C.some((N) => (0, t.alwaysValidSchema)(l, N)) && !l.opts.unevaluated)
      return;
    const x = h.let("valid", !1), E = h.name("_valid");
    h.block(() => C.forEach((N, z) => {
      const A = u.subschema({
        keyword: a,
        schemaProp: z,
        compositeRule: !0
      }, E);
      h.assign(x, (0, e._)`${x} || ${E}`), u.mergeValidEvaluated(A, E) || h.if((0, e.not)(x));
    })), u.result(x, () => u.reset(), () => u.error(!0));
  }
  return se.validateUnion = g, se;
}
var _r;
function Oi() {
  if (_r) return we;
  _r = 1, Object.defineProperty(we, "__esModule", { value: !0 }), we.validateKeywordUsage = we.validSchemaType = we.funcKeywordCode = we.macroKeywordCode = void 0;
  const e = /* @__PURE__ */ Q(), t = /* @__PURE__ */ ke(), n = /* @__PURE__ */ xe(), o = /* @__PURE__ */ gn();
  function i(w, v) {
    const { gen: _, keyword: b, schema: f, parentSchema: g, it: u } = w, h = v.macro.call(u.self, f, g, u), C = y(_, b, h);
    u.opts.validateSchema !== !1 && u.self.validateSchema(h, !0);
    const a = _.name("valid");
    w.subschema({
      schema: h,
      schemaPath: e.nil,
      errSchemaPath: `${u.errSchemaPath}/${b}`,
      topSchemaRef: C,
      compositeRule: !0
    }, a), w.pass(a, () => w.error(!0));
  }
  we.macroKeywordCode = i;
  function r(w, v) {
    var _;
    const { gen: b, keyword: f, schema: g, parentSchema: u, $data: h, it: C } = w;
    d(C, v);
    const a = !h && v.compile ? v.compile.call(C.self, g, u, C) : v.validate, l = y(b, f, a), p = b.let("valid");
    w.block$data(p, x), w.ok((_ = v.valid) !== null && _ !== void 0 ? _ : p);
    function x() {
      if (v.errors === !1)
        z(), v.modifying && c(w), A(() => w.error());
      else {
        const T = v.async ? E() : N();
        v.modifying && c(w), A(() => s(w, T));
      }
    }
    function E() {
      const T = b.let("ruleErrs", null);
      return b.try(() => z((0, e._)`await `), (J) => b.assign(p, !1).if((0, e._)`${J} instanceof ${C.ValidationError}`, () => b.assign(T, (0, e._)`${J}.errors`), () => b.throw(J))), T;
    }
    function N() {
      const T = (0, e._)`${l}.errors`;
      return b.assign(T, null), z(e.nil), T;
    }
    function z(T = v.async ? (0, e._)`await ` : e.nil) {
      const J = C.opts.passContext ? t.default.this : t.default.self, Z = !("compile" in v && !h || v.schema === !1);
      b.assign(p, (0, e._)`${T}${(0, n.callValidateCode)(w, l, J, Z)}`, v.modifying);
    }
    function A(T) {
      var J;
      b.if((0, e.not)((J = v.valid) !== null && J !== void 0 ? J : p), T);
    }
  }
  we.funcKeywordCode = r;
  function c(w) {
    const { gen: v, data: _, it: b } = w;
    v.if(b.parentData, () => v.assign(_, (0, e._)`${b.parentData}[${b.parentDataProperty}]`));
  }
  function s(w, v) {
    const { gen: _ } = w;
    _.if((0, e._)`Array.isArray(${v})`, () => {
      _.assign(t.default.vErrors, (0, e._)`${t.default.vErrors} === null ? ${v} : ${t.default.vErrors}.concat(${v})`).assign(t.default.errors, (0, e._)`${t.default.vErrors}.length`), (0, o.extendErrors)(w);
    }, () => w.error());
  }
  function d({ schemaEnv: w }, v) {
    if (v.async && !w.$async)
      throw new Error("async keyword in sync schema");
  }
  function y(w, v, _) {
    if (_ === void 0)
      throw new Error(`keyword "${v}" failed to compile`);
    return w.scopeValue("keyword", typeof _ == "function" ? { ref: _ } : { ref: _, code: (0, e.stringify)(_) });
  }
  function m(w, v, _ = !1) {
    return !v.length || v.some((b) => b === "array" ? Array.isArray(w) : b === "object" ? w && typeof w == "object" && !Array.isArray(w) : typeof w == b || _ && typeof w > "u");
  }
  we.validSchemaType = m;
  function S({ schema: w, opts: v, self: _, errSchemaPath: b }, f, g) {
    if (Array.isArray(f.keyword) ? !f.keyword.includes(g) : f.keyword !== g)
      throw new Error("ajv implementation error");
    const u = f.dependencies;
    if (u?.some((h) => !Object.prototype.hasOwnProperty.call(w, h)))
      throw new Error(`parent schema must have dependencies of ${g}: ${u.join(",")}`);
    if (f.validateSchema && !f.validateSchema(w[g])) {
      const C = `keyword "${g}" value is invalid at path "${b}": ` + _.errorsText(f.validateSchema.errors);
      if (v.validateSchema === "log")
        _.logger.error(C);
      else
        throw new Error(C);
    }
  }
  return we.validateKeywordUsage = S, we;
}
var Fe = {}, Sr;
function Ti() {
  if (Sr) return Fe;
  Sr = 1, Object.defineProperty(Fe, "__esModule", { value: !0 }), Fe.extendSubschemaMode = Fe.extendSubschemaData = Fe.getSubschema = void 0;
  const e = /* @__PURE__ */ Q(), t = /* @__PURE__ */ ne();
  function n(r, { keyword: c, schemaProp: s, schema: d, schemaPath: y, errSchemaPath: m, topSchemaRef: S }) {
    if (c !== void 0 && d !== void 0)
      throw new Error('both "keyword" and "schema" passed, only one allowed');
    if (c !== void 0) {
      const w = r.schema[c];
      return s === void 0 ? {
        schema: w,
        schemaPath: (0, e._)`${r.schemaPath}${(0, e.getProperty)(c)}`,
        errSchemaPath: `${r.errSchemaPath}/${c}`
      } : {
        schema: w[s],
        schemaPath: (0, e._)`${r.schemaPath}${(0, e.getProperty)(c)}${(0, e.getProperty)(s)}`,
        errSchemaPath: `${r.errSchemaPath}/${c}/${(0, t.escapeFragment)(s)}`
      };
    }
    if (d !== void 0) {
      if (y === void 0 || m === void 0 || S === void 0)
        throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
      return {
        schema: d,
        schemaPath: y,
        topSchemaRef: S,
        errSchemaPath: m
      };
    }
    throw new Error('either "keyword" or "schema" must be passed');
  }
  Fe.getSubschema = n;
  function o(r, c, { dataProp: s, dataPropType: d, data: y, dataTypes: m, propertyName: S }) {
    if (y !== void 0 && s !== void 0)
      throw new Error('both "data" and "dataProp" passed, only one allowed');
    const { gen: w } = c;
    if (s !== void 0) {
      const { errorPath: _, dataPathArr: b, opts: f } = c, g = w.let("data", (0, e._)`${c.data}${(0, e.getProperty)(s)}`, !0);
      v(g), r.errorPath = (0, e.str)`${_}${(0, t.getErrorPath)(s, d, f.jsPropertySyntax)}`, r.parentDataProperty = (0, e._)`${s}`, r.dataPathArr = [...b, r.parentDataProperty];
    }
    if (y !== void 0) {
      const _ = y instanceof e.Name ? y : w.let("data", y, !0);
      v(_), S !== void 0 && (r.propertyName = S);
    }
    m && (r.dataTypes = m);
    function v(_) {
      r.data = _, r.dataLevel = c.dataLevel + 1, r.dataTypes = [], c.definedProperties = /* @__PURE__ */ new Set(), r.parentData = c.data, r.dataNames = [...c.dataNames, _];
    }
  }
  Fe.extendSubschemaData = o;
  function i(r, { jtdDiscriminator: c, jtdMetadata: s, compositeRule: d, createErrors: y, allErrors: m }) {
    d !== void 0 && (r.compositeRule = d), y !== void 0 && (r.createErrors = y), m !== void 0 && (r.allErrors = m), r.jtdDiscriminator = c, r.jtdMetadata = s;
  }
  return Fe.extendSubschemaMode = i, Fe;
}
var fe = {}, Rn, Cr;
function ei() {
  return Cr || (Cr = 1, Rn = function e(t, n) {
    if (t === n) return !0;
    if (t && n && typeof t == "object" && typeof n == "object") {
      if (t.constructor !== n.constructor) return !1;
      var o, i, r;
      if (Array.isArray(t)) {
        if (o = t.length, o != n.length) return !1;
        for (i = o; i-- !== 0; )
          if (!e(t[i], n[i])) return !1;
        return !0;
      }
      if (t.constructor === RegExp) return t.source === n.source && t.flags === n.flags;
      if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === n.valueOf();
      if (t.toString !== Object.prototype.toString) return t.toString() === n.toString();
      if (r = Object.keys(t), o = r.length, o !== Object.keys(n).length) return !1;
      for (i = o; i-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(n, r[i])) return !1;
      for (i = o; i-- !== 0; ) {
        var c = r[i];
        if (!e(t[c], n[c])) return !1;
      }
      return !0;
    }
    return t !== t && n !== n;
  }), Rn;
}
var Mn = { exports: {} }, kr;
function zi() {
  if (kr) return Mn.exports;
  kr = 1;
  var e = Mn.exports = function(o, i, r) {
    typeof i == "function" && (r = i, i = {}), r = i.cb || r;
    var c = typeof r == "function" ? r : r.pre || function() {
    }, s = r.post || function() {
    };
    t(i, c, s, o, "", o);
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
  function t(o, i, r, c, s, d, y, m, S, w) {
    if (c && typeof c == "object" && !Array.isArray(c)) {
      i(c, s, d, y, m, S, w);
      for (var v in c) {
        var _ = c[v];
        if (Array.isArray(_)) {
          if (v in e.arrayKeywords)
            for (var b = 0; b < _.length; b++)
              t(o, i, r, _[b], s + "/" + v + "/" + b, d, s, v, c, b);
        } else if (v in e.propsKeywords) {
          if (_ && typeof _ == "object")
            for (var f in _)
              t(o, i, r, _[f], s + "/" + v + "/" + n(f), d, s, v, c, f);
        } else (v in e.keywords || o.allKeys && !(v in e.skipKeywords)) && t(o, i, r, _, s + "/" + v, d, s, v, c);
      }
      r(c, s, d, y, m, S, w);
    }
  }
  function n(o) {
    return o.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  return Mn.exports;
}
var xr;
function yn() {
  if (xr) return fe;
  xr = 1, Object.defineProperty(fe, "__esModule", { value: !0 }), fe.getSchemaRefs = fe.resolveUrl = fe.normalizeId = fe._getFullPath = fe.getFullPath = fe.inlineRef = void 0;
  const e = /* @__PURE__ */ ne(), t = ei(), n = zi(), o = /* @__PURE__ */ new Set([
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
  function i(b, f = !0) {
    return typeof b == "boolean" ? !0 : f === !0 ? !c(b) : f ? s(b) <= f : !1;
  }
  fe.inlineRef = i;
  const r = /* @__PURE__ */ new Set([
    "$ref",
    "$recursiveRef",
    "$recursiveAnchor",
    "$dynamicRef",
    "$dynamicAnchor"
  ]);
  function c(b) {
    for (const f in b) {
      if (r.has(f))
        return !0;
      const g = b[f];
      if (Array.isArray(g) && g.some(c) || typeof g == "object" && c(g))
        return !0;
    }
    return !1;
  }
  function s(b) {
    let f = 0;
    for (const g in b) {
      if (g === "$ref")
        return 1 / 0;
      if (f++, !o.has(g) && (typeof b[g] == "object" && (0, e.eachItem)(b[g], (u) => f += s(u)), f === 1 / 0))
        return 1 / 0;
    }
    return f;
  }
  function d(b, f = "", g) {
    g !== !1 && (f = S(f));
    const u = b.parse(f);
    return y(b, u);
  }
  fe.getFullPath = d;
  function y(b, f) {
    return b.serialize(f).split("#")[0] + "#";
  }
  fe._getFullPath = y;
  const m = /#\/?$/;
  function S(b) {
    return b ? b.replace(m, "") : "";
  }
  fe.normalizeId = S;
  function w(b, f, g) {
    return g = S(g), b.resolve(f, g);
  }
  fe.resolveUrl = w;
  const v = /^[a-z_][-a-z0-9._]*$/i;
  function _(b, f) {
    if (typeof b == "boolean")
      return {};
    const { schemaId: g, uriResolver: u } = this.opts, h = S(b[g] || f), C = { "": h }, a = d(u, h, !1), l = {}, p = /* @__PURE__ */ new Set();
    return n(b, { allKeys: !0 }, (N, z, A, T) => {
      if (T === void 0)
        return;
      const J = a + z;
      let Z = C[T];
      typeof N[g] == "string" && (Z = L.call(this, N[g])), G.call(this, N.$anchor), G.call(this, N.$dynamicAnchor), C[z] = Z;
      function L(U) {
        const Y = this.opts.uriResolver.resolve;
        if (U = S(Z ? Y(Z, U) : U), p.has(U))
          throw E(U);
        p.add(U);
        let V = this.refs[U];
        return typeof V == "string" && (V = this.refs[V]), typeof V == "object" ? x(N, V.schema, U) : U !== S(J) && (U[0] === "#" ? (x(N, l[U], U), l[U] = N) : this.refs[U] = J), U;
      }
      function G(U) {
        if (typeof U == "string") {
          if (!v.test(U))
            throw new Error(`invalid anchor "${U}"`);
          L.call(this, `#${U}`);
        }
      }
    }), l;
    function x(N, z, A) {
      if (z !== void 0 && !t(N, z))
        throw E(A);
    }
    function E(N) {
      return new Error(`reference "${N}" resolves to more than one schema`);
    }
  }
  return fe.getSchemaRefs = _, fe;
}
var Er;
function vn() {
  if (Er) return Re;
  Er = 1, Object.defineProperty(Re, "__esModule", { value: !0 }), Re.getData = Re.KeywordCxt = Re.validateFunctionCode = void 0;
  const e = /* @__PURE__ */ Ni(), t = /* @__PURE__ */ pn(), n = /* @__PURE__ */ Qo(), o = /* @__PURE__ */ pn(), i = /* @__PURE__ */ ji(), r = /* @__PURE__ */ Oi(), c = /* @__PURE__ */ Ti(), s = /* @__PURE__ */ Q(), d = /* @__PURE__ */ ke(), y = /* @__PURE__ */ yn(), m = /* @__PURE__ */ ne(), S = /* @__PURE__ */ gn();
  function w(M) {
    if (a(M) && (p(M), C(M))) {
      f(M);
      return;
    }
    v(M, () => (0, e.topBoolOrEmptySchema)(M));
  }
  Re.validateFunctionCode = w;
  function v({ gen: M, validateName: O, schema: B, schemaEnv: K, opts: X }, te) {
    X.code.es5 ? M.func(O, (0, s._)`${d.default.data}, ${d.default.valCxt}`, K.$async, () => {
      M.code((0, s._)`"use strict"; ${u(B, X)}`), b(M, X), M.code(te);
    }) : M.func(O, (0, s._)`${d.default.data}, ${_(X)}`, K.$async, () => M.code(u(B, X)).code(te));
  }
  function _(M) {
    return (0, s._)`{${d.default.instancePath}="", ${d.default.parentData}, ${d.default.parentDataProperty}, ${d.default.rootData}=${d.default.data}${M.dynamicRef ? (0, s._)`, ${d.default.dynamicAnchors}={}` : s.nil}}={}`;
  }
  function b(M, O) {
    M.if(d.default.valCxt, () => {
      M.var(d.default.instancePath, (0, s._)`${d.default.valCxt}.${d.default.instancePath}`), M.var(d.default.parentData, (0, s._)`${d.default.valCxt}.${d.default.parentData}`), M.var(d.default.parentDataProperty, (0, s._)`${d.default.valCxt}.${d.default.parentDataProperty}`), M.var(d.default.rootData, (0, s._)`${d.default.valCxt}.${d.default.rootData}`), O.dynamicRef && M.var(d.default.dynamicAnchors, (0, s._)`${d.default.valCxt}.${d.default.dynamicAnchors}`);
    }, () => {
      M.var(d.default.instancePath, (0, s._)`""`), M.var(d.default.parentData, (0, s._)`undefined`), M.var(d.default.parentDataProperty, (0, s._)`undefined`), M.var(d.default.rootData, d.default.data), O.dynamicRef && M.var(d.default.dynamicAnchors, (0, s._)`{}`);
    });
  }
  function f(M) {
    const { schema: O, opts: B, gen: K } = M;
    v(M, () => {
      B.$comment && O.$comment && T(M), N(M), K.let(d.default.vErrors, null), K.let(d.default.errors, 0), B.unevaluated && g(M), x(M), J(M);
    });
  }
  function g(M) {
    const { gen: O, validateName: B } = M;
    M.evaluated = O.const("evaluated", (0, s._)`${B}.evaluated`), O.if((0, s._)`${M.evaluated}.dynamicProps`, () => O.assign((0, s._)`${M.evaluated}.props`, (0, s._)`undefined`)), O.if((0, s._)`${M.evaluated}.dynamicItems`, () => O.assign((0, s._)`${M.evaluated}.items`, (0, s._)`undefined`));
  }
  function u(M, O) {
    const B = typeof M == "object" && M[O.schemaId];
    return B && (O.code.source || O.code.process) ? (0, s._)`/*# sourceURL=${B} */` : s.nil;
  }
  function h(M, O) {
    if (a(M) && (p(M), C(M))) {
      l(M, O);
      return;
    }
    (0, e.boolOrEmptySchema)(M, O);
  }
  function C({ schema: M, self: O }) {
    if (typeof M == "boolean")
      return !M;
    for (const B in M)
      if (O.RULES.all[B])
        return !0;
    return !1;
  }
  function a(M) {
    return typeof M.schema != "boolean";
  }
  function l(M, O) {
    const { schema: B, gen: K, opts: X } = M;
    X.$comment && B.$comment && T(M), z(M), A(M);
    const te = K.const("_errs", d.default.errors);
    x(M, te), K.var(O, (0, s._)`${te} === ${d.default.errors}`);
  }
  function p(M) {
    (0, m.checkUnknownRules)(M), E(M);
  }
  function x(M, O) {
    if (M.opts.jtd)
      return L(M, [], !1, O);
    const B = (0, t.getSchemaTypes)(M.schema), K = (0, t.coerceAndCheckDataType)(M, B);
    L(M, B, !K, O);
  }
  function E(M) {
    const { schema: O, errSchemaPath: B, opts: K, self: X } = M;
    O.$ref && K.ignoreKeywordsWithRef && (0, m.schemaHasRulesButRef)(O, X.RULES) && X.logger.warn(`$ref: keywords ignored in schema at path "${B}"`);
  }
  function N(M) {
    const { schema: O, opts: B } = M;
    O.default !== void 0 && B.useDefaults && B.strictSchema && (0, m.checkStrictMode)(M, "default is ignored in the schema root");
  }
  function z(M) {
    const O = M.schema[M.opts.schemaId];
    O && (M.baseId = (0, y.resolveUrl)(M.opts.uriResolver, M.baseId, O));
  }
  function A(M) {
    if (M.schema.$async && !M.schemaEnv.$async)
      throw new Error("async schema in sync schema");
  }
  function T({ gen: M, schemaEnv: O, schema: B, errSchemaPath: K, opts: X }) {
    const te = B.$comment;
    if (X.$comment === !0)
      M.code((0, s._)`${d.default.self}.logger.log(${te})`);
    else if (typeof X.$comment == "function") {
      const le = (0, s.str)`${K}/$comment`, be = M.scopeValue("root", { ref: O.root });
      M.code((0, s._)`${d.default.self}.opts.$comment(${te}, ${le}, ${be}.schema)`);
    }
  }
  function J(M) {
    const { gen: O, schemaEnv: B, validateName: K, ValidationError: X, opts: te } = M;
    B.$async ? O.if((0, s._)`${d.default.errors} === 0`, () => O.return(d.default.data), () => O.throw((0, s._)`new ${X}(${d.default.vErrors})`)) : (O.assign((0, s._)`${K}.errors`, d.default.vErrors), te.unevaluated && Z(M), O.return((0, s._)`${d.default.errors} === 0`));
  }
  function Z({ gen: M, evaluated: O, props: B, items: K }) {
    B instanceof s.Name && M.assign((0, s._)`${O}.props`, B), K instanceof s.Name && M.assign((0, s._)`${O}.items`, K);
  }
  function L(M, O, B, K) {
    const { gen: X, schema: te, data: le, allErrors: be, opts: he, self: me } = M, { RULES: de } = me;
    if (te.$ref && (he.ignoreKeywordsWithRef || !(0, m.schemaHasRulesButRef)(te, de))) {
      X.block(() => H(M, "$ref", de.all.$ref.definition));
      return;
    }
    he.jtd || U(M, O), X.block(() => {
      for (const ve of de.rules)
        Ue(ve);
      Ue(de.post);
    });
    function Ue(ve) {
      (0, n.shouldUseGroup)(te, ve) && (ve.type ? (X.if((0, o.checkDataType)(ve.type, le, he.strictNumbers)), G(M, ve), O.length === 1 && O[0] === ve.type && B && (X.else(), (0, o.reportTypeError)(M)), X.endIf()) : G(M, ve), be || X.if((0, s._)`${d.default.errors} === ${K || 0}`));
    }
  }
  function G(M, O) {
    const { gen: B, schema: K, opts: { useDefaults: X } } = M;
    X && (0, i.assignDefaults)(M, O.type), B.block(() => {
      for (const te of O.rules)
        (0, n.shouldUseRule)(K, te) && H(M, te.keyword, te.definition, O.type);
    });
  }
  function U(M, O) {
    M.schemaEnv.meta || !M.opts.strictTypes || (Y(M, O), M.opts.allowUnionTypes || V(M, O), R(M, M.dataTypes));
  }
  function Y(M, O) {
    if (O.length) {
      if (!M.dataTypes.length) {
        M.dataTypes = O;
        return;
      }
      O.forEach((B) => {
        F(M.dataTypes, B) || k(M, `type "${B}" not allowed by context "${M.dataTypes.join(",")}"`);
      }), $(M, O);
    }
  }
  function V(M, O) {
    O.length > 1 && !(O.length === 2 && O.includes("null")) && k(M, "use allowUnionTypes to allow union type keyword");
  }
  function R(M, O) {
    const B = M.self.RULES.all;
    for (const K in B) {
      const X = B[K];
      if (typeof X == "object" && (0, n.shouldUseRule)(M.schema, X)) {
        const { type: te } = X.definition;
        te.length && !te.some((le) => D(O, le)) && k(M, `missing type "${te.join(",")}" for keyword "${K}"`);
      }
    }
  }
  function D(M, O) {
    return M.includes(O) || O === "number" && M.includes("integer");
  }
  function F(M, O) {
    return M.includes(O) || O === "integer" && M.includes("number");
  }
  function $(M, O) {
    const B = [];
    for (const K of M.dataTypes)
      F(O, K) ? B.push(K) : O.includes("integer") && K === "number" && B.push("integer");
    M.dataTypes = B;
  }
  function k(M, O) {
    const B = M.schemaEnv.baseId + M.errSchemaPath;
    O += ` at "${B}" (strictTypes)`, (0, m.checkStrictMode)(M, O, M.opts.strictTypes);
  }
  class I {
    constructor(O, B, K) {
      if ((0, r.validateKeywordUsage)(O, B, K), this.gen = O.gen, this.allErrors = O.allErrors, this.keyword = K, this.data = O.data, this.schema = O.schema[K], this.$data = B.$data && O.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, m.schemaRefOrVal)(O, this.schema, K, this.$data), this.schemaType = B.schemaType, this.parentSchema = O.schema, this.params = {}, this.it = O, this.def = B, this.$data)
        this.schemaCode = O.gen.const("vSchema", re(this.$data, O));
      else if (this.schemaCode = this.schemaValue, !(0, r.validSchemaType)(this.schema, B.schemaType, B.allowUndefined))
        throw new Error(`${K} value must be ${JSON.stringify(B.schemaType)}`);
      ("code" in B ? B.trackErrors : B.errors !== !1) && (this.errsCount = O.gen.const("_errs", d.default.errors));
    }
    result(O, B, K) {
      this.failResult((0, s.not)(O), B, K);
    }
    failResult(O, B, K) {
      this.gen.if(O), K ? K() : this.error(), B ? (this.gen.else(), B(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    pass(O, B) {
      this.failResult((0, s.not)(O), void 0, B);
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
      this.fail((0, s._)`${B} !== undefined && (${(0, s.or)(this.invalid$data(), O)})`);
    }
    error(O, B, K) {
      if (B) {
        this.setParams(B), this._error(O, K), this.setParams({});
        return;
      }
      this._error(O, K);
    }
    _error(O, B) {
      (O ? S.reportExtraError : S.reportError)(this, this.def.error, B);
    }
    $dataError() {
      (0, S.reportError)(this, this.def.$dataError || S.keyword$DataError);
    }
    reset() {
      if (this.errsCount === void 0)
        throw new Error('add "trackErrors" to keyword definition');
      (0, S.resetErrorsCount)(this.gen, this.errsCount);
    }
    ok(O) {
      this.allErrors || this.gen.if(O);
    }
    setParams(O, B) {
      B ? Object.assign(this.params, O) : this.params = O;
    }
    block$data(O, B, K = s.nil) {
      this.gen.block(() => {
        this.check$data(O, K), B();
      });
    }
    check$data(O = s.nil, B = s.nil) {
      if (!this.$data)
        return;
      const { gen: K, schemaCode: X, schemaType: te, def: le } = this;
      K.if((0, s.or)((0, s._)`${X} === undefined`, B)), O !== s.nil && K.assign(O, !0), (te.length || le.validateSchema) && (K.elseIf(this.invalid$data()), this.$dataError(), O !== s.nil && K.assign(O, !1)), K.else();
    }
    invalid$data() {
      const { gen: O, schemaCode: B, schemaType: K, def: X, it: te } = this;
      return (0, s.or)(le(), be());
      function le() {
        if (K.length) {
          if (!(B instanceof s.Name))
            throw new Error("ajv implementation error");
          const he = Array.isArray(K) ? K : [K];
          return (0, s._)`${(0, o.checkDataTypes)(he, B, te.opts.strictNumbers, o.DataType.Wrong)}`;
        }
        return s.nil;
      }
      function be() {
        if (X.validateSchema) {
          const he = O.scopeValue("validate$data", { ref: X.validateSchema });
          return (0, s._)`!${he}(${B})`;
        }
        return s.nil;
      }
    }
    subschema(O, B) {
      const K = (0, c.getSubschema)(this.it, O);
      (0, c.extendSubschemaData)(K, this.it, O), (0, c.extendSubschemaMode)(K, O);
      const X = { ...this.it, ...K, items: void 0, props: void 0 };
      return h(X, B), X;
    }
    mergeEvaluated(O, B) {
      const { it: K, gen: X } = this;
      K.opts.unevaluated && (K.props !== !0 && O.props !== void 0 && (K.props = m.mergeEvaluated.props(X, O.props, K.props, B)), K.items !== !0 && O.items !== void 0 && (K.items = m.mergeEvaluated.items(X, O.items, K.items, B)));
    }
    mergeValidEvaluated(O, B) {
      const { it: K, gen: X } = this;
      if (K.opts.unevaluated && (K.props !== !0 || K.items !== !0))
        return X.if(B, () => this.mergeEvaluated(O, s.Name)), !0;
    }
  }
  Re.KeywordCxt = I;
  function H(M, O, B, K) {
    const X = new I(M, B, O);
    "code" in B ? B.code(X, K) : X.$data && B.validate ? (0, r.funcKeywordCode)(X, B) : "macro" in B ? (0, r.macroKeywordCode)(X, B) : (B.compile || B.validate) && (0, r.funcKeywordCode)(X, B);
  }
  const W = /^\/(?:[^~]|~0|~1)*$/, oe = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function re(M, { dataLevel: O, dataNames: B, dataPathArr: K }) {
    let X, te;
    if (M === "")
      return d.default.rootData;
    if (M[0] === "/") {
      if (!W.test(M))
        throw new Error(`Invalid JSON-pointer: ${M}`);
      X = M, te = d.default.rootData;
    } else {
      const me = oe.exec(M);
      if (!me)
        throw new Error(`Invalid JSON-pointer: ${M}`);
      const de = +me[1];
      if (X = me[2], X === "#") {
        if (de >= O)
          throw new Error(he("property/index", de));
        return K[O - de];
      }
      if (de > O)
        throw new Error(he("data", de));
      if (te = B[O - de], !X)
        return te;
    }
    let le = te;
    const be = X.split("/");
    for (const me of be)
      me && (te = (0, s._)`${te}${(0, s.getProperty)((0, m.unescapeJsonPointer)(me))}`, le = (0, s._)`${le} && ${te}`);
    return le;
    function he(me, de) {
      return `Cannot access ${me} ${de} levels up, current level is ${O}`;
    }
  }
  return Re.getData = re, Re;
}
var pt = {}, Pr;
function Kn() {
  if (Pr) return pt;
  Pr = 1, Object.defineProperty(pt, "__esModule", { value: !0 });
  class e extends Error {
    constructor(n) {
      super("validation failed"), this.errors = n, this.ajv = this.validation = !0;
    }
  }
  return pt.default = e, pt;
}
var ht = {}, Ar;
function $n() {
  if (Ar) return ht;
  Ar = 1, Object.defineProperty(ht, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ yn();
  class t extends Error {
    constructor(o, i, r, c) {
      super(c || `can't resolve reference ${r} from id ${i}`), this.missingRef = (0, e.resolveUrl)(o, i, r), this.missingSchema = (0, e.normalizeId)((0, e.getFullPath)(o, this.missingRef));
    }
  }
  return ht.default = t, ht;
}
var ye = {}, Rr;
function bn() {
  if (Rr) return ye;
  Rr = 1, Object.defineProperty(ye, "__esModule", { value: !0 }), ye.resolveSchema = ye.getCompilingSchema = ye.resolveRef = ye.compileSchema = ye.SchemaEnv = void 0;
  const e = /* @__PURE__ */ Q(), t = /* @__PURE__ */ Kn(), n = /* @__PURE__ */ ke(), o = /* @__PURE__ */ yn(), i = /* @__PURE__ */ ne(), r = /* @__PURE__ */ vn();
  class c {
    constructor(g) {
      var u;
      this.refs = {}, this.dynamicAnchors = {};
      let h;
      typeof g.schema == "object" && (h = g.schema), this.schema = g.schema, this.schemaId = g.schemaId, this.root = g.root || this, this.baseId = (u = g.baseId) !== null && u !== void 0 ? u : (0, o.normalizeId)(h?.[g.schemaId || "$id"]), this.schemaPath = g.schemaPath, this.localRefs = g.localRefs, this.meta = g.meta, this.$async = h?.$async, this.refs = {};
    }
  }
  ye.SchemaEnv = c;
  function s(f) {
    const g = m.call(this, f);
    if (g)
      return g;
    const u = (0, o.getFullPath)(this.opts.uriResolver, f.root.baseId), { es5: h, lines: C } = this.opts.code, { ownProperties: a } = this.opts, l = new e.CodeGen(this.scope, { es5: h, lines: C, ownProperties: a });
    let p;
    f.$async && (p = l.scopeValue("Error", {
      ref: t.default,
      code: (0, e._)`require("ajv/dist/runtime/validation_error").default`
    }));
    const x = l.scopeName("validate");
    f.validateName = x;
    const E = {
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
      validateName: x,
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
    let N;
    try {
      this._compilations.add(f), (0, r.validateFunctionCode)(E), l.optimize(this.opts.code.optimize);
      const z = l.toString();
      N = `${l.scopeRefs(n.default.scope)}return ${z}`, this.opts.code.process && (N = this.opts.code.process(N, f));
      const T = new Function(`${n.default.self}`, `${n.default.scope}`, N)(this, this.scope.get());
      if (this.scope.value(x, { ref: T }), T.errors = null, T.schema = f.schema, T.schemaEnv = f, f.$async && (T.$async = !0), this.opts.code.source === !0 && (T.source = { validateName: x, validateCode: z, scopeValues: l._values }), this.opts.unevaluated) {
        const { props: J, items: Z } = E;
        T.evaluated = {
          props: J instanceof e.Name ? void 0 : J,
          items: Z instanceof e.Name ? void 0 : Z,
          dynamicProps: J instanceof e.Name,
          dynamicItems: Z instanceof e.Name
        }, T.source && (T.source.evaluated = (0, e.stringify)(T.evaluated));
      }
      return f.validate = T, f;
    } catch (z) {
      throw delete f.validate, delete f.validateName, N && this.logger.error("Error compiling schema, function code:", N), z;
    } finally {
      this._compilations.delete(f);
    }
  }
  ye.compileSchema = s;
  function d(f, g, u) {
    var h;
    u = (0, o.resolveUrl)(this.opts.uriResolver, g, u);
    const C = f.refs[u];
    if (C)
      return C;
    let a = w.call(this, f, u);
    if (a === void 0) {
      const l = (h = f.localRefs) === null || h === void 0 ? void 0 : h[u], { schemaId: p } = this.opts;
      l && (a = new c({ schema: l, schemaId: p, root: f, baseId: g }));
    }
    if (a !== void 0)
      return f.refs[u] = y.call(this, a);
  }
  ye.resolveRef = d;
  function y(f) {
    return (0, o.inlineRef)(f.schema, this.opts.inlineRefs) ? f.schema : f.validate ? f : s.call(this, f);
  }
  function m(f) {
    for (const g of this._compilations)
      if (S(g, f))
        return g;
  }
  ye.getCompilingSchema = m;
  function S(f, g) {
    return f.schema === g.schema && f.root === g.root && f.baseId === g.baseId;
  }
  function w(f, g) {
    let u;
    for (; typeof (u = this.refs[g]) == "string"; )
      g = u;
    return u || this.schemas[g] || v.call(this, f, g);
  }
  function v(f, g) {
    const u = this.opts.uriResolver.parse(g), h = (0, o._getFullPath)(this.opts.uriResolver, u);
    let C = (0, o.getFullPath)(this.opts.uriResolver, f.baseId, void 0);
    if (Object.keys(f.schema).length > 0 && h === C)
      return b.call(this, u, f);
    const a = (0, o.normalizeId)(h), l = this.refs[a] || this.schemas[a];
    if (typeof l == "string") {
      const p = v.call(this, f, l);
      return typeof p?.schema != "object" ? void 0 : b.call(this, u, p);
    }
    if (typeof l?.schema == "object") {
      if (l.validate || s.call(this, l), a === (0, o.normalizeId)(g)) {
        const { schema: p } = l, { schemaId: x } = this.opts, E = p[x];
        return E && (C = (0, o.resolveUrl)(this.opts.uriResolver, C, E)), new c({ schema: p, schemaId: x, root: f, baseId: C });
      }
      return b.call(this, u, l);
    }
  }
  ye.resolveSchema = v;
  const _ = /* @__PURE__ */ new Set([
    "properties",
    "patternProperties",
    "enum",
    "dependencies",
    "definitions"
  ]);
  function b(f, { baseId: g, schema: u, root: h }) {
    var C;
    if (((C = f.fragment) === null || C === void 0 ? void 0 : C[0]) !== "/")
      return;
    for (const p of f.fragment.slice(1).split("/")) {
      if (typeof u == "boolean")
        return;
      const x = u[(0, i.unescapeFragment)(p)];
      if (x === void 0)
        return;
      u = x;
      const E = typeof u == "object" && u[this.opts.schemaId];
      !_.has(p) && E && (g = (0, o.resolveUrl)(this.opts.uriResolver, g, E));
    }
    let a;
    if (typeof u != "boolean" && u.$ref && !(0, i.schemaHasRulesButRef)(u, this.RULES)) {
      const p = (0, o.resolveUrl)(this.opts.uriResolver, g, u.$ref);
      a = v.call(this, h, p);
    }
    const { schemaId: l } = this.opts;
    if (a = a || new c({ schema: u, schemaId: l, root: h, baseId: g }), a.schema !== a.root.schema)
      return a;
  }
  return ye;
}
const Ii = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", Di = "Meta-schema for $data reference (JSON AnySchema extension proposal)", qi = "object", Vi = ["$data"], Bi = { $data: { type: "string", anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] } }, Li = !1, Ui = {
  $id: Ii,
  description: Di,
  type: qi,
  required: Vi,
  properties: Bi,
  additionalProperties: Li
};
var mt = {}, ot = { exports: {} }, Fn, Mr;
function ti() {
  if (Mr) return Fn;
  Mr = 1;
  const e = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu), t = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u), n = RegExp.prototype.test.bind(/^[\da-f]{2}$/iu), o = RegExp.prototype.test.bind(/^[\da-z\-._~]$/iu), i = RegExp.prototype.test.bind(/^[\da-z\-._~!$&'()*+,;=:@/]$/iu);
  function r(a) {
    let l = "", p = 0, x = 0;
    for (x = 0; x < a.length; x++)
      if (p = a[x].charCodeAt(0), p !== 48) {
        if (!(p >= 48 && p <= 57 || p >= 65 && p <= 70 || p >= 97 && p <= 102))
          return "";
        l += a[x];
        break;
      }
    for (x += 1; x < a.length; x++) {
      if (p = a[x].charCodeAt(0), !(p >= 48 && p <= 57 || p >= 65 && p <= 70 || p >= 97 && p <= 102))
        return "";
      l += a[x];
    }
    return l;
  }
  const c = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
  function s(a) {
    return a.length = 0, !0;
  }
  function d(a, l, p) {
    if (a.length) {
      const x = r(a);
      if (x !== "")
        l.push(x);
      else
        return p.error = !0, !1;
      a.length = 0;
    }
    return !0;
  }
  function y(a) {
    let l = 0;
    const p = { error: !1, address: "", zone: "" }, x = [], E = [];
    let N = !1, z = !1, A = d;
    for (let T = 0; T < a.length; T++) {
      const J = a[T];
      if (!(J === "[" || J === "]"))
        if (J === ":") {
          if (N === !0 && (z = !0), !A(E, x, p))
            break;
          if (++l > 7) {
            p.error = !0;
            break;
          }
          T > 0 && a[T - 1] === ":" && (N = !0), x.push(":");
          continue;
        } else if (J === "%") {
          if (!A(E, x, p))
            break;
          A = s;
        } else {
          E.push(J);
          continue;
        }
    }
    return E.length && (A === s ? p.zone = E.join("") : z ? x.push(E.join("")) : x.push(r(E))), p.address = x.join(""), p;
  }
  function m(a) {
    if (S(a, ":") < 2)
      return { host: a, isIPV6: !1 };
    const l = y(a);
    if (l.error)
      return { host: a, isIPV6: !1 };
    {
      let p = l.address, x = l.address;
      return l.zone && (p += "%" + l.zone, x += "%25" + l.zone), { host: p, isIPV6: !0, escapedHost: x };
    }
  }
  function S(a, l) {
    let p = 0;
    for (let x = 0; x < a.length; x++)
      a[x] === l && p++;
    return p;
  }
  function w(a) {
    let l = a;
    const p = [];
    let x = -1, E = 0;
    for (; E = l.length; ) {
      if (E === 1) {
        if (l === ".")
          break;
        if (l === "/") {
          p.push("/");
          break;
        } else {
          p.push(l);
          break;
        }
      } else if (E === 2) {
        if (l[0] === ".") {
          if (l[1] === ".")
            break;
          if (l[1] === "/") {
            l = l.slice(2);
            continue;
          }
        } else if (l[0] === "/" && (l[1] === "." || l[1] === "/")) {
          p.push("/");
          break;
        }
      } else if (E === 3 && l === "/..") {
        p.length !== 0 && p.pop(), p.push("/");
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
          l = l.slice(3), p.length !== 0 && p.pop();
          continue;
        }
      }
      if ((x = l.indexOf("/", 1)) === -1) {
        p.push(l);
        break;
      } else
        p.push(l.slice(0, x)), l = l.slice(x);
    }
    return p.join("");
  }
  const v = { "@": "%40", "/": "%2F", "?": "%3F", "#": "%23", ":": "%3A" }, _ = /[@/?#:]/g, b = /[@/?#]/g;
  function f(a, l) {
    const p = l ? b : _;
    return p.lastIndex = 0, a.replace(p, (x) => v[x]);
  }
  function g(a, l = !1) {
    if (a.indexOf("%") === -1)
      return a;
    let p = "";
    for (let x = 0; x < a.length; x++) {
      if (a[x] === "%" && x + 2 < a.length) {
        const E = a.slice(x + 1, x + 3);
        if (n(E)) {
          const N = E.toUpperCase(), z = String.fromCharCode(parseInt(N, 16));
          l && o(z) ? p += z : p += "%" + N, x += 2;
          continue;
        }
      }
      p += a[x];
    }
    return p;
  }
  function u(a) {
    let l = "";
    for (let p = 0; p < a.length; p++) {
      if (a[p] === "%" && p + 2 < a.length) {
        const x = a.slice(p + 1, p + 3);
        if (n(x)) {
          const E = x.toUpperCase(), N = String.fromCharCode(parseInt(E, 16));
          N !== "." && o(N) ? l += N : l += "%" + E, p += 2;
          continue;
        }
      }
      i(a[p]) ? l += a[p] : l += escape(a[p]);
    }
    return l;
  }
  function h(a) {
    let l = "";
    for (let p = 0; p < a.length; p++) {
      if (a[p] === "%" && p + 2 < a.length) {
        const x = a.slice(p + 1, p + 3);
        if (n(x)) {
          l += "%" + x.toUpperCase(), p += 2;
          continue;
        }
      }
      l += escape(a[p]);
    }
    return l;
  }
  function C(a) {
    const l = [];
    if (a.userinfo !== void 0 && (l.push(a.userinfo), l.push("@")), a.host !== void 0) {
      let p = unescape(a.host);
      if (!t(p)) {
        const x = m(p);
        x.isIPV6 === !0 ? p = `[${x.escapedHost}]` : p = f(p, !1);
      }
      l.push(p);
    }
    return (typeof a.port == "number" || typeof a.port == "string") && (l.push(":"), l.push(String(a.port))), l.length ? l.join("") : void 0;
  }
  return Fn = {
    nonSimpleDomain: c,
    recomposeAuthority: C,
    reescapeHostDelimiters: f,
    normalizePercentEncoding: g,
    normalizePathEncoding: u,
    escapePreservingEscapes: h,
    removeDotSegments: w,
    isIPv4: t,
    isUUID: e,
    normalizeIPv6: m,
    stringArrayToHexStripped: r
  }, Fn;
}
var Nn, Fr;
function Ki() {
  if (Fr) return Nn;
  Fr = 1;
  const { isUUID: e } = ti(), t = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu, n = (
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
  function o(a) {
    return n.indexOf(
      /** @type {*} */
      a
    ) !== -1;
  }
  function i(a) {
    return a.secure === !0 ? !0 : a.secure === !1 ? !1 : a.scheme ? a.scheme.length === 3 && (a.scheme[0] === "w" || a.scheme[0] === "W") && (a.scheme[1] === "s" || a.scheme[1] === "S") && (a.scheme[2] === "s" || a.scheme[2] === "S") : !1;
  }
  function r(a) {
    return a.host || (a.error = a.error || "HTTP URIs must have a host."), a;
  }
  function c(a) {
    const l = String(a.scheme).toLowerCase() === "https";
    return (a.port === (l ? 443 : 80) || a.port === "") && (a.port = void 0), a.path || (a.path = "/"), a;
  }
  function s(a) {
    return a.secure = i(a), a.resourceName = (a.path || "/") + (a.query ? "?" + a.query : ""), a.path = void 0, a.query = void 0, a;
  }
  function d(a) {
    if ((a.port === (i(a) ? 443 : 80) || a.port === "") && (a.port = void 0), typeof a.secure == "boolean" && (a.scheme = a.secure ? "wss" : "ws", a.secure = void 0), a.resourceName) {
      const [l, p] = a.resourceName.split("?");
      a.path = l && l !== "/" ? l : void 0, a.query = p, a.resourceName = void 0;
    }
    return a.fragment = void 0, a;
  }
  function y(a, l) {
    if (!a.path)
      return a.error = "URN can not be parsed", a;
    const p = a.path.match(t);
    if (p) {
      const x = l.scheme || a.scheme || "urn";
      a.nid = p[1].toLowerCase(), a.nss = p[2];
      const E = `${x}:${l.nid || a.nid}`, N = C(E);
      a.path = void 0, N && (a = N.parse(a, l));
    } else
      a.error = a.error || "URN can not be parsed.";
    return a;
  }
  function m(a, l) {
    if (a.nid === void 0)
      throw new Error("URN without nid cannot be serialized");
    const p = l.scheme || a.scheme || "urn", x = a.nid.toLowerCase(), E = `${p}:${l.nid || x}`, N = C(E);
    N && (a = N.serialize(a, l));
    const z = a, A = a.nss;
    return z.path = `${x || l.nid}:${A}`, l.skipEscape = !0, z;
  }
  function S(a, l) {
    const p = a;
    return p.uuid = p.nss, p.nss = void 0, !l.tolerant && (!p.uuid || !e(p.uuid)) && (p.error = p.error || "UUID is not valid."), p;
  }
  function w(a) {
    const l = a;
    return l.nss = (a.uuid || "").toLowerCase(), l;
  }
  const v = (
    /** @type {SchemeHandler} */
    {
      scheme: "http",
      domainHost: !0,
      parse: r,
      serialize: c
    }
  ), _ = (
    /** @type {SchemeHandler} */
    {
      scheme: "https",
      domainHost: v.domainHost,
      parse: r,
      serialize: c
    }
  ), b = (
    /** @type {SchemeHandler} */
    {
      scheme: "ws",
      domainHost: !0,
      parse: s,
      serialize: d
    }
  ), f = (
    /** @type {SchemeHandler} */
    {
      scheme: "wss",
      domainHost: b.domainHost,
      parse: b.parse,
      serialize: b.serialize
    }
  ), h = (
    /** @type {Record<SchemeName, SchemeHandler>} */
    {
      http: v,
      https: _,
      ws: b,
      wss: f,
      urn: (
        /** @type {SchemeHandler} */
        {
          scheme: "urn",
          parse: y,
          serialize: m,
          skipNormalize: !0
        }
      ),
      "urn:uuid": (
        /** @type {SchemeHandler} */
        {
          scheme: "urn:uuid",
          parse: S,
          serialize: w,
          skipNormalize: !0
        }
      )
    }
  );
  Object.setPrototypeOf(h, null);
  function C(a) {
    return a && (h[
      /** @type {SchemeName} */
      a
    ] || h[
      /** @type {SchemeName} */
      a.toLowerCase()
    ]) || void 0;
  }
  return Nn = {
    wsIsSecure: i,
    SCHEMES: h,
    isValidSchemeName: o,
    getSchemeHandler: C
  }, Nn;
}
var Nr;
function Gi() {
  if (Nr) return ot.exports;
  Nr = 1;
  const { normalizeIPv6: e, removeDotSegments: t, recomposeAuthority: n, normalizePercentEncoding: o, normalizePathEncoding: i, escapePreservingEscapes: r, reescapeHostDelimiters: c, isIPv4: s, nonSimpleDomain: d } = ti(), { SCHEMES: y, getSchemeHandler: m } = Ki();
  function S(E, N) {
    return typeof E == "string" ? E = /** @type {T} */
    a(E, N) : typeof E == "object" && (E = /** @type {T} */
    C(b(E, N), N)), E;
  }
  function w(E, N, z) {
    const A = z ? Object.assign({ scheme: "null" }, z) : { scheme: "null" }, T = v(C(E, A), C(N, A), A, !0);
    return A.skipEscape = !0, b(T, A);
  }
  function v(E, N, z, A) {
    const T = {};
    return A || (E = C(b(E, z), z), N = C(b(N, z), z)), z = z || {}, !z.tolerant && N.scheme ? (T.scheme = N.scheme, T.userinfo = N.userinfo, T.host = N.host, T.port = N.port, T.path = t(N.path || ""), T.query = N.query) : (N.userinfo !== void 0 || N.host !== void 0 || N.port !== void 0 ? (T.userinfo = N.userinfo, T.host = N.host, T.port = N.port, T.path = t(N.path || ""), T.query = N.query) : (N.path ? (N.path[0] === "/" ? T.path = t(N.path) : ((E.userinfo !== void 0 || E.host !== void 0 || E.port !== void 0) && !E.path ? T.path = "/" + N.path : E.path ? T.path = E.path.slice(0, E.path.lastIndexOf("/") + 1) + N.path : T.path = N.path, T.path = t(T.path)), T.query = N.query) : (T.path = E.path, N.query !== void 0 ? T.query = N.query : T.query = E.query), T.userinfo = E.userinfo, T.host = E.host, T.port = E.port), T.scheme = E.scheme), T.fragment = N.fragment, T;
  }
  function _(E, N, z) {
    const A = p(E, z), T = p(N, z);
    return A !== void 0 && T !== void 0 && A.toLowerCase() === T.toLowerCase();
  }
  function b(E, N) {
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
    }, A = Object.assign({}, N), T = [], J = m(A.scheme || z.scheme);
    J && J.serialize && J.serialize(z, A), z.path !== void 0 && (A.skipEscape ? z.path = o(z.path) : (z.path = r(z.path), z.scheme !== void 0 && (z.path = z.path.split("%3A").join(":")))), A.reference !== "suffix" && z.scheme && T.push(z.scheme, ":");
    const Z = n(z);
    if (Z !== void 0 && (A.reference !== "suffix" && T.push("//"), T.push(Z), z.path && z.path[0] !== "/" && T.push("/")), z.path !== void 0) {
      let L = z.path;
      !A.absolutePath && (!J || !J.absolutePath) && (L = t(L)), Z === void 0 && L[0] === "/" && L[1] === "/" && (L = "/%2F" + L.slice(2)), T.push(L);
    }
    return z.query !== void 0 && T.push("?", z.query), z.fragment !== void 0 && T.push("#", z.fragment), T.join("");
  }
  const f = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u, g = /^(?:[^#/:?]+:)?\/\/([^/?#]*)/;
  function u(E, N) {
    if (N[2] !== void 0 && E.path && E.path[0] !== "/")
      return 'URI path must start with "/" when authority is present.';
    if (typeof E.port == "number" && (E.port < 0 || E.port > 65535))
      return "URI port is malformed.";
  }
  function h(E, N) {
    const z = Object.assign({}, N), A = {
      scheme: void 0,
      userinfo: void 0,
      host: "",
      port: void 0,
      path: "",
      query: void 0,
      fragment: void 0
    };
    let T = !1, J = !1;
    z.reference === "suffix" && (z.scheme ? E = z.scheme + ":" + E : E = "//" + E);
    const Z = E.match(g);
    Z !== null && Z[1].indexOf("\\") !== -1 && (A.error = "URI authority must not contain a literal backslash.", T = !0);
    const L = E.match(f);
    if (L) {
      A.scheme = L[1], A.userinfo = L[3], A.host = L[4], A.port = parseInt(L[5], 10), A.path = L[6] || "", A.query = L[7], A.fragment = L[8], isNaN(A.port) && (A.port = L[5]);
      const G = u(A, L);
      if (G !== void 0 && (A.error = A.error || G, T = !0), A.host)
        if (s(A.host) === !1) {
          const V = e(A.host);
          A.host = V.host.toLowerCase(), J = V.isIPV6;
        } else
          J = !0;
      A.scheme === void 0 && A.userinfo === void 0 && A.host === void 0 && A.port === void 0 && A.query === void 0 && !A.path ? A.reference = "same-document" : A.scheme === void 0 ? A.reference = "relative" : A.fragment === void 0 ? A.reference = "absolute" : A.reference = "uri", z.reference && z.reference !== "suffix" && z.reference !== A.reference && (A.error = A.error || "URI is not a " + z.reference + " reference.");
      const U = m(z.scheme || A.scheme);
      if (!z.unicodeSupport && (!U || !U.unicodeSupport) && A.host && (z.domainHost || U && U.domainHost) && J === !1 && d(A.host))
        try {
          A.host = new URL("http://" + A.host).hostname;
        } catch (Y) {
          A.error = A.error || "Host's domain name can not be converted to ASCII: " + Y;
        }
      if ((!U || U && !U.skipNormalize) && (E.indexOf("%") !== -1 && (A.scheme !== void 0 && (A.scheme = unescape(A.scheme)), A.host !== void 0 && (A.host = c(unescape(A.host), J))), A.path && (A.path = i(A.path)), A.fragment))
        try {
          A.fragment = encodeURI(decodeURIComponent(A.fragment));
        } catch {
          A.error = A.error || "URI malformed";
        }
      U && U.parse && U.parse(A, z);
    } else
      A.error = A.error || "URI can not be parsed.";
    return { parsed: A, malformedAuthorityOrPort: T };
  }
  function C(E, N) {
    return h(E, N).parsed;
  }
  function a(E, N) {
    return l(E, N).normalized;
  }
  function l(E, N) {
    const { parsed: z, malformedAuthorityOrPort: A } = h(E, N);
    return {
      normalized: A ? E : b(z, N),
      malformedAuthorityOrPort: A
    };
  }
  function p(E, N) {
    if (typeof E == "string") {
      const { normalized: z, malformedAuthorityOrPort: A } = l(E, N);
      return A ? void 0 : z;
    }
    if (typeof E == "object")
      return b(E, N);
  }
  const x = {
    SCHEMES: y,
    normalize: S,
    resolve: w,
    resolveComponent: v,
    equal: _,
    serialize: b,
    parse: C
  };
  return ot.exports = x, ot.exports.default = x, ot.exports.fastUri = x, ot.exports;
}
var jr;
function Hi() {
  if (jr) return mt;
  jr = 1, Object.defineProperty(mt, "__esModule", { value: !0 });
  const e = Gi();
  return e.code = 'require("ajv/dist/runtime/uri").default', mt.default = e, mt;
}
var Or;
function Ji() {
  return Or || (Or = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = void 0;
    var t = /* @__PURE__ */ vn();
    Object.defineProperty(e, "KeywordCxt", { enumerable: !0, get: function() {
      return t.KeywordCxt;
    } });
    var n = /* @__PURE__ */ Q();
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
    const o = /* @__PURE__ */ Kn(), i = /* @__PURE__ */ $n(), r = /* @__PURE__ */ Zo(), c = /* @__PURE__ */ bn(), s = /* @__PURE__ */ Q(), d = /* @__PURE__ */ yn(), y = /* @__PURE__ */ pn(), m = /* @__PURE__ */ ne(), S = Ui, w = /* @__PURE__ */ Hi(), v = (V, R) => new RegExp(V, R);
    v.code = "new RegExp";
    const _ = ["removeAdditional", "useDefaults", "coerceTypes"], b = /* @__PURE__ */ new Set([
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
    }, g = {
      ignoreKeywordsWithRef: "",
      jsPropertySyntax: "",
      unicode: '"minLength"/"maxLength" account for unicode characters by default.'
    }, u = 200;
    function h(V) {
      var R, D, F, $, k, I, H, W, oe, re, M, O, B, K, X, te, le, be, he, me, de, Ue, ve, _n, Sn;
      const tt = V.strict, Cn = (R = V.code) === null || R === void 0 ? void 0 : R.optimize, sr = Cn === !0 || Cn === void 0 ? 1 : Cn || 0, ar = (F = (D = V.code) === null || D === void 0 ? void 0 : D.regExp) !== null && F !== void 0 ? F : v, vi = ($ = V.uriResolver) !== null && $ !== void 0 ? $ : w.default;
      return {
        strictSchema: (I = (k = V.strictSchema) !== null && k !== void 0 ? k : tt) !== null && I !== void 0 ? I : !0,
        strictNumbers: (W = (H = V.strictNumbers) !== null && H !== void 0 ? H : tt) !== null && W !== void 0 ? W : !0,
        strictTypes: (re = (oe = V.strictTypes) !== null && oe !== void 0 ? oe : tt) !== null && re !== void 0 ? re : "log",
        strictTuples: (O = (M = V.strictTuples) !== null && M !== void 0 ? M : tt) !== null && O !== void 0 ? O : "log",
        strictRequired: (K = (B = V.strictRequired) !== null && B !== void 0 ? B : tt) !== null && K !== void 0 ? K : !1,
        code: V.code ? { ...V.code, optimize: sr, regExp: ar } : { optimize: sr, regExp: ar },
        loopRequired: (X = V.loopRequired) !== null && X !== void 0 ? X : u,
        loopEnum: (te = V.loopEnum) !== null && te !== void 0 ? te : u,
        meta: (le = V.meta) !== null && le !== void 0 ? le : !0,
        messages: (be = V.messages) !== null && be !== void 0 ? be : !0,
        inlineRefs: (he = V.inlineRefs) !== null && he !== void 0 ? he : !0,
        schemaId: (me = V.schemaId) !== null && me !== void 0 ? me : "$id",
        addUsedSchema: (de = V.addUsedSchema) !== null && de !== void 0 ? de : !0,
        validateSchema: (Ue = V.validateSchema) !== null && Ue !== void 0 ? Ue : !0,
        validateFormats: (ve = V.validateFormats) !== null && ve !== void 0 ? ve : !0,
        unicodeRegExp: (_n = V.unicodeRegExp) !== null && _n !== void 0 ? _n : !0,
        int32range: (Sn = V.int32range) !== null && Sn !== void 0 ? Sn : !0,
        uriResolver: vi
      };
    }
    class C {
      constructor(R = {}) {
        this.schemas = {}, this.refs = {}, this.formats = /* @__PURE__ */ Object.create(null), this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), R = this.opts = { ...R, ...h(R) };
        const { es5: D, lines: F } = this.opts.code;
        this.scope = new s.ValueScope({ scope: {}, prefixes: b, es5: D, lines: F }), this.logger = A(R.logger);
        const $ = R.validateFormats;
        R.validateFormats = !1, this.RULES = (0, r.getRules)(), a.call(this, f, R, "NOT SUPPORTED"), a.call(this, g, R, "DEPRECATED", "warn"), this._metaOpts = N.call(this), R.formats && x.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), R.keywords && E.call(this, R.keywords), typeof R.meta == "object" && this.addMetaSchema(R.meta), p.call(this), R.validateFormats = $;
      }
      _addVocabularies() {
        this.addKeyword("$async");
      }
      _addDefaultMetaSchema() {
        const { $data: R, meta: D, schemaId: F } = this.opts;
        let $ = S;
        F === "id" && ($ = { ...S }, $.id = $.$id, delete $.$id), D && R && this.addMetaSchema($, $[F], !1);
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
        const $ = F(D);
        return "$async" in F || (this.errors = F.errors), $;
      }
      compile(R, D) {
        const F = this._addSchema(R, D);
        return F.validate || this._compileSchemaEnv(F);
      }
      compileAsync(R, D) {
        if (typeof this.opts.loadSchema != "function")
          throw new Error("options.loadSchema should be a function");
        const { loadSchema: F } = this.opts;
        return $.call(this, R, D);
        async function $(re, M) {
          await k.call(this, re.$schema);
          const O = this._addSchema(re, M);
          return O.validate || I.call(this, O);
        }
        async function k(re) {
          re && !this.getSchema(re) && await $.call(this, { $ref: re }, !0);
        }
        async function I(re) {
          try {
            return this._compileSchemaEnv(re);
          } catch (M) {
            if (!(M instanceof i.default))
              throw M;
            return H.call(this, M), await W.call(this, M.missingSchema), I.call(this, re);
          }
        }
        function H({ missingSchema: re, missingRef: M }) {
          if (this.refs[re])
            throw new Error(`AnySchema ${re} is loaded but ${M} cannot be resolved`);
        }
        async function W(re) {
          const M = await oe.call(this, re);
          this.refs[re] || await k.call(this, M.$schema), this.refs[re] || this.addSchema(M, re, D);
        }
        async function oe(re) {
          const M = this._loading[re];
          if (M)
            return M;
          try {
            return await (this._loading[re] = F(re));
          } finally {
            delete this._loading[re];
          }
        }
      }
      // Adds schema to the instance
      addSchema(R, D, F, $ = this.opts.validateSchema) {
        if (Array.isArray(R)) {
          for (const I of R)
            this.addSchema(I, void 0, F, $);
          return this;
        }
        let k;
        if (typeof R == "object") {
          const { schemaId: I } = this.opts;
          if (k = R[I], k !== void 0 && typeof k != "string")
            throw new Error(`schema ${I} must be string`);
        }
        return D = (0, d.normalizeId)(D || k), this._checkUnique(D), this.schemas[D] = this._addSchema(R, F, D, $, !0), this;
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
        const $ = this.validate(F, R);
        if (!$ && D) {
          const k = "schema is invalid: " + this.errorsText();
          if (this.opts.validateSchema === "log")
            this.logger.error(k);
          else
            throw new Error(k);
        }
        return $;
      }
      // Get compiled schema by `key` or `ref`.
      // (`key` that was passed to `addSchema` or full schema reference - `schema.$id` or resolved id)
      getSchema(R) {
        let D;
        for (; typeof (D = l.call(this, R)) == "string"; )
          R = D;
        if (D === void 0) {
          const { schemaId: F } = this.opts, $ = new c.SchemaEnv({ schema: {}, schemaId: F });
          if (D = c.resolveSchema.call(this, $, R), !D)
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
            const D = l.call(this, R);
            return typeof D == "object" && this._cache.delete(D.schema), delete this.schemas[R], delete this.refs[R], this;
          }
          case "object": {
            const D = R;
            this._cache.delete(D);
            let F = R[this.opts.schemaId];
            return F && (F = (0, d.normalizeId)(F), delete this.schemas[F], delete this.refs[F]), this;
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
        if (J.call(this, F, D), !D)
          return (0, m.eachItem)(F, (k) => Z.call(this, k)), this;
        G.call(this, D);
        const $ = {
          ...D,
          type: (0, y.getJSONTypes)(D.type),
          schemaType: (0, y.getJSONTypes)(D.schemaType)
        };
        return (0, m.eachItem)(F, $.type.length === 0 ? (k) => Z.call(this, k, $) : (k) => $.type.forEach((I) => Z.call(this, k, $, I))), this;
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
          const $ = F.rules.findIndex((k) => k.keyword === R);
          $ >= 0 && F.rules.splice($, 1);
        }
        return this;
      }
      // Add format
      addFormat(R, D) {
        return typeof D == "string" && (D = new RegExp(D)), this.formats[R] = D, this;
      }
      errorsText(R = this.errors, { separator: D = ", ", dataVar: F = "data" } = {}) {
        return !R || R.length === 0 ? "No errors" : R.map(($) => `${F}${$.instancePath} ${$.message}`).reduce(($, k) => $ + D + k);
      }
      $dataMetaSchema(R, D) {
        const F = this.RULES.all;
        R = JSON.parse(JSON.stringify(R));
        for (const $ of D) {
          const k = $.split("/").slice(1);
          let I = R;
          for (const H of k)
            I = I[H];
          for (const H in F) {
            const W = F[H];
            if (typeof W != "object")
              continue;
            const { $data: oe } = W.definition, re = I[H];
            oe && re && (I[H] = Y(re));
          }
        }
        return R;
      }
      _removeAllSchemas(R, D) {
        for (const F in R) {
          const $ = R[F];
          (!D || D.test(F)) && (typeof $ == "string" ? delete R[F] : $ && !$.meta && (this._cache.delete($.schema), delete R[F]));
        }
      }
      _addSchema(R, D, F, $ = this.opts.validateSchema, k = this.opts.addUsedSchema) {
        let I;
        const { schemaId: H } = this.opts;
        if (typeof R == "object")
          I = R[H];
        else {
          if (this.opts.jtd)
            throw new Error("schema must be object");
          if (typeof R != "boolean")
            throw new Error("schema must be object or boolean");
        }
        let W = this._cache.get(R);
        if (W !== void 0)
          return W;
        F = (0, d.normalizeId)(I || F);
        const oe = d.getSchemaRefs.call(this, R, F);
        return W = new c.SchemaEnv({ schema: R, schemaId: H, meta: D, baseId: F, localRefs: oe }), this._cache.set(W.schema, W), k && !F.startsWith("#") && (F && this._checkUnique(F), this.refs[F] = W), $ && this.validateSchema(R, !0), W;
      }
      _checkUnique(R) {
        if (this.schemas[R] || this.refs[R])
          throw new Error(`schema with key or id "${R}" already exists`);
      }
      _compileSchemaEnv(R) {
        if (R.meta ? this._compileMetaSchema(R) : c.compileSchema.call(this, R), !R.validate)
          throw new Error("ajv implementation error");
        return R.validate;
      }
      _compileMetaSchema(R) {
        const D = this.opts;
        this.opts = this._metaOpts;
        try {
          c.compileSchema.call(this, R);
        } finally {
          this.opts = D;
        }
      }
    }
    C.ValidationError = o.default, C.MissingRefError = i.default, e.default = C;
    function a(V, R, D, F = "error") {
      for (const $ in V) {
        const k = $;
        k in R && this.logger[F](`${D}: option ${$}. ${V[k]}`);
      }
    }
    function l(V) {
      return V = (0, d.normalizeId)(V), this.schemas[V] || this.refs[V];
    }
    function p() {
      const V = this.opts.schemas;
      if (V)
        if (Array.isArray(V))
          this.addSchema(V);
        else
          for (const R in V)
            this.addSchema(V[R], R);
    }
    function x() {
      for (const V in this.opts.formats) {
        const R = this.opts.formats[V];
        R && this.addFormat(V, R);
      }
    }
    function E(V) {
      if (Array.isArray(V)) {
        this.addVocabulary(V);
        return;
      }
      this.logger.warn("keywords option as map is deprecated, pass array");
      for (const R in V) {
        const D = V[R];
        D.keyword || (D.keyword = R), this.addKeyword(D);
      }
    }
    function N() {
      const V = { ...this.opts };
      for (const R of _)
        delete V[R];
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
    const T = /^[a-z_$][a-z0-9_$:-]*$/i;
    function J(V, R) {
      const { RULES: D } = this;
      if ((0, m.eachItem)(V, (F) => {
        if (D.keywords[F])
          throw new Error(`Keyword ${F} is already defined`);
        if (!T.test(F))
          throw new Error(`Keyword ${F} has invalid name`);
      }), !!R && R.$data && !("code" in R || "validate" in R))
        throw new Error('$data keyword must have "code" or "validate" function');
    }
    function Z(V, R, D) {
      var F;
      const $ = R?.post;
      if (D && $)
        throw new Error('keyword with "post" flag cannot have "type"');
      const { RULES: k } = this;
      let I = $ ? k.post : k.rules.find(({ type: W }) => W === D);
      if (I || (I = { type: D, rules: [] }, k.rules.push(I)), k.keywords[V] = !0, !R)
        return;
      const H = {
        keyword: V,
        definition: {
          ...R,
          type: (0, y.getJSONTypes)(R.type),
          schemaType: (0, y.getJSONTypes)(R.schemaType)
        }
      };
      R.before ? L.call(this, I, H, R.before) : I.rules.push(H), k.all[V] = H, (F = R.implements) === null || F === void 0 || F.forEach((W) => this.addKeyword(W));
    }
    function L(V, R, D) {
      const F = V.rules.findIndex(($) => $.keyword === D);
      F >= 0 ? V.rules.splice(F, 0, R) : (V.rules.push(R), this.logger.warn(`rule ${D} is not defined`));
    }
    function G(V) {
      let { metaSchema: R } = V;
      R !== void 0 && (V.$data && this.opts.$data && (R = Y(R)), V.validateSchema = this.compile(R, !0));
    }
    const U = {
      $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
    };
    function Y(V) {
      return { anyOf: [V, U] };
    }
  })(kn)), kn;
}
var gt = {}, yt = {}, vt = {}, Tr;
function Wi() {
  if (Tr) return vt;
  Tr = 1, Object.defineProperty(vt, "__esModule", { value: !0 });
  const e = {
    keyword: "id",
    code() {
      throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
    }
  };
  return vt.default = e, vt;
}
var je = {}, zr;
function Gn() {
  if (zr) return je;
  zr = 1, Object.defineProperty(je, "__esModule", { value: !0 }), je.callRef = je.getValidate = void 0;
  const e = /* @__PURE__ */ $n(), t = /* @__PURE__ */ xe(), n = /* @__PURE__ */ Q(), o = /* @__PURE__ */ ke(), i = /* @__PURE__ */ bn(), r = /* @__PURE__ */ ne(), c = {
    keyword: "$ref",
    schemaType: "string",
    code(y) {
      const { gen: m, schema: S, it: w } = y, { baseId: v, schemaEnv: _, validateName: b, opts: f, self: g } = w, { root: u } = _;
      if ((S === "#" || S === "#/") && v === u.baseId)
        return C();
      const h = i.resolveRef.call(g, u, v, S);
      if (h === void 0)
        throw new e.default(w.opts.uriResolver, v, S);
      if (h instanceof i.SchemaEnv)
        return a(h);
      return l(h);
      function C() {
        if (_ === u)
          return d(y, b, _, _.$async);
        const p = m.scopeValue("root", { ref: u });
        return d(y, (0, n._)`${p}.validate`, u, u.$async);
      }
      function a(p) {
        const x = s(y, p);
        d(y, x, p, p.$async);
      }
      function l(p) {
        const x = m.scopeValue("schema", f.code.source === !0 ? { ref: p, code: (0, n.stringify)(p) } : { ref: p }), E = m.name("valid"), N = y.subschema({
          schema: p,
          dataTypes: [],
          schemaPath: n.nil,
          topSchemaRef: x,
          errSchemaPath: S
        }, E);
        y.mergeEvaluated(N), y.ok(E);
      }
    }
  };
  function s(y, m) {
    const { gen: S } = y;
    return m.validate ? S.scopeValue("validate", { ref: m.validate }) : (0, n._)`${S.scopeValue("wrapper", { ref: m })}.validate`;
  }
  je.getValidate = s;
  function d(y, m, S, w) {
    const { gen: v, it: _ } = y, { allErrors: b, schemaEnv: f, opts: g } = _, u = g.passContext ? o.default.this : n.nil;
    w ? h() : C();
    function h() {
      if (!f.$async)
        throw new Error("async schema referenced by sync schema");
      const p = v.let("valid");
      v.try(() => {
        v.code((0, n._)`await ${(0, t.callValidateCode)(y, m, u)}`), l(m), b || v.assign(p, !0);
      }, (x) => {
        v.if((0, n._)`!(${x} instanceof ${_.ValidationError})`, () => v.throw(x)), a(x), b || v.assign(p, !1);
      }), y.ok(p);
    }
    function C() {
      y.result((0, t.callValidateCode)(y, m, u), () => l(m), () => a(m));
    }
    function a(p) {
      const x = (0, n._)`${p}.errors`;
      v.assign(o.default.vErrors, (0, n._)`${o.default.vErrors} === null ? ${x} : ${o.default.vErrors}.concat(${x})`), v.assign(o.default.errors, (0, n._)`${o.default.vErrors}.length`);
    }
    function l(p) {
      var x;
      if (!_.opts.unevaluated)
        return;
      const E = (x = S?.validate) === null || x === void 0 ? void 0 : x.evaluated;
      if (_.props !== !0)
        if (E && !E.dynamicProps)
          E.props !== void 0 && (_.props = r.mergeEvaluated.props(v, E.props, _.props));
        else {
          const N = v.var("props", (0, n._)`${p}.evaluated.props`);
          _.props = r.mergeEvaluated.props(v, N, _.props, n.Name);
        }
      if (_.items !== !0)
        if (E && !E.dynamicItems)
          E.items !== void 0 && (_.items = r.mergeEvaluated.items(v, E.items, _.items));
        else {
          const N = v.var("items", (0, n._)`${p}.evaluated.items`);
          _.items = r.mergeEvaluated.items(v, N, _.items, n.Name);
        }
    }
  }
  return je.callRef = d, je.default = c, je;
}
var Ir;
function Yi() {
  if (Ir) return yt;
  Ir = 1, Object.defineProperty(yt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Wi(), t = /* @__PURE__ */ Gn(), n = [
    "$schema",
    "$id",
    "$defs",
    "$vocabulary",
    { keyword: "$comment" },
    "definitions",
    e.default,
    t.default
  ];
  return yt.default = n, yt;
}
var $t = {}, bt = {}, Dr;
function Xi() {
  if (Dr) return bt;
  Dr = 1, Object.defineProperty(bt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Q(), t = e.operators, n = {
    maximum: { okStr: "<=", ok: t.LTE, fail: t.GT },
    minimum: { okStr: ">=", ok: t.GTE, fail: t.LT },
    exclusiveMaximum: { okStr: "<", ok: t.LT, fail: t.GTE },
    exclusiveMinimum: { okStr: ">", ok: t.GT, fail: t.LTE }
  }, o = {
    message: ({ keyword: r, schemaCode: c }) => (0, e.str)`must be ${n[r].okStr} ${c}`,
    params: ({ keyword: r, schemaCode: c }) => (0, e._)`{comparison: ${n[r].okStr}, limit: ${c}}`
  }, i = {
    keyword: Object.keys(n),
    type: "number",
    schemaType: "number",
    $data: !0,
    error: o,
    code(r) {
      const { keyword: c, data: s, schemaCode: d } = r;
      r.fail$data((0, e._)`${s} ${n[c].fail} ${d} || isNaN(${s})`);
    }
  };
  return bt.default = i, bt;
}
var wt = {}, qr;
function Zi() {
  if (qr) return wt;
  qr = 1, Object.defineProperty(wt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Q(), n = {
    keyword: "multipleOf",
    type: "number",
    schemaType: "number",
    $data: !0,
    error: {
      message: ({ schemaCode: o }) => (0, e.str)`must be multiple of ${o}`,
      params: ({ schemaCode: o }) => (0, e._)`{multipleOf: ${o}}`
    },
    code(o) {
      const { gen: i, data: r, schemaCode: c, it: s } = o, d = s.opts.multipleOfPrecision, y = i.let("res"), m = d ? (0, e._)`Math.abs(Math.round(${y}) - ${y}) > 1e-${d}` : (0, e._)`${y} !== parseInt(${y})`;
      o.fail$data((0, e._)`(${c} === 0 || (${y} = ${r}/${c}, ${m}))`);
    }
  };
  return wt.default = n, wt;
}
var _t = {}, St = {}, Vr;
function Qi() {
  if (Vr) return St;
  Vr = 1, Object.defineProperty(St, "__esModule", { value: !0 });
  function e(t) {
    const n = t.length;
    let o = 0, i = 0, r;
    for (; i < n; )
      o++, r = t.charCodeAt(i++), r >= 55296 && r <= 56319 && i < n && (r = t.charCodeAt(i), (r & 64512) === 56320 && i++);
    return o;
  }
  return St.default = e, e.code = 'require("ajv/dist/runtime/ucs2length").default', St;
}
var Br;
function es() {
  if (Br) return _t;
  Br = 1, Object.defineProperty(_t, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Q(), t = /* @__PURE__ */ ne(), n = /* @__PURE__ */ Qi(), i = {
    keyword: ["maxLength", "minLength"],
    type: "string",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: r, schemaCode: c }) {
        const s = r === "maxLength" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${s} than ${c} characters`;
      },
      params: ({ schemaCode: r }) => (0, e._)`{limit: ${r}}`
    },
    code(r) {
      const { keyword: c, data: s, schemaCode: d, it: y } = r, m = c === "maxLength" ? e.operators.GT : e.operators.LT, S = y.opts.unicode === !1 ? (0, e._)`${s}.length` : (0, e._)`${(0, t.useFunc)(r.gen, n.default)}(${s})`;
      r.fail$data((0, e._)`${S} ${m} ${d}`);
    }
  };
  return _t.default = i, _t;
}
var Ct = {}, Lr;
function ts() {
  if (Lr) return Ct;
  Lr = 1, Object.defineProperty(Ct, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ xe(), t = /* @__PURE__ */ ne(), n = /* @__PURE__ */ Q(), i = {
    keyword: "pattern",
    type: "string",
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: r }) => (0, n.str)`must match pattern "${r}"`,
      params: ({ schemaCode: r }) => (0, n._)`{pattern: ${r}}`
    },
    code(r) {
      const { gen: c, data: s, $data: d, schema: y, schemaCode: m, it: S } = r, w = S.opts.unicodeRegExp ? "u" : "";
      if (d) {
        const { regExp: v } = S.opts.code, _ = v.code === "new RegExp" ? (0, n._)`new RegExp` : (0, t.useFunc)(c, v), b = c.let("valid");
        c.try(() => c.assign(b, (0, n._)`${_}(${m}, ${w}).test(${s})`), () => c.assign(b, !1)), r.fail$data((0, n._)`!${b}`);
      } else {
        const v = (0, e.usePattern)(r, y);
        r.fail$data((0, n._)`!${v}.test(${s})`);
      }
    }
  };
  return Ct.default = i, Ct;
}
var kt = {}, Ur;
function ns() {
  if (Ur) return kt;
  Ur = 1, Object.defineProperty(kt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Q(), n = {
    keyword: ["maxProperties", "minProperties"],
    type: "object",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: o, schemaCode: i }) {
        const r = o === "maxProperties" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${r} than ${i} properties`;
      },
      params: ({ schemaCode: o }) => (0, e._)`{limit: ${o}}`
    },
    code(o) {
      const { keyword: i, data: r, schemaCode: c } = o, s = i === "maxProperties" ? e.operators.GT : e.operators.LT;
      o.fail$data((0, e._)`Object.keys(${r}).length ${s} ${c}`);
    }
  };
  return kt.default = n, kt;
}
var xt = {}, Kr;
function rs() {
  if (Kr) return xt;
  Kr = 1, Object.defineProperty(xt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ xe(), t = /* @__PURE__ */ Q(), n = /* @__PURE__ */ ne(), i = {
    keyword: "required",
    type: "object",
    schemaType: "array",
    $data: !0,
    error: {
      message: ({ params: { missingProperty: r } }) => (0, t.str)`must have required property '${r}'`,
      params: ({ params: { missingProperty: r } }) => (0, t._)`{missingProperty: ${r}}`
    },
    code(r) {
      const { gen: c, schema: s, schemaCode: d, data: y, $data: m, it: S } = r, { opts: w } = S;
      if (!m && s.length === 0)
        return;
      const v = s.length >= w.loopRequired;
      if (S.allErrors ? _() : b(), w.strictRequired) {
        const u = r.parentSchema.properties, { definedProperties: h } = r.it;
        for (const C of s)
          if (u?.[C] === void 0 && !h.has(C)) {
            const a = S.schemaEnv.baseId + S.errSchemaPath, l = `required property "${C}" is not defined at "${a}" (strictRequired)`;
            (0, n.checkStrictMode)(S, l, S.opts.strictRequired);
          }
      }
      function _() {
        if (v || m)
          r.block$data(t.nil, f);
        else
          for (const u of s)
            (0, e.checkReportMissingProp)(r, u);
      }
      function b() {
        const u = c.let("missing");
        if (v || m) {
          const h = c.let("valid", !0);
          r.block$data(h, () => g(u, h)), r.ok(h);
        } else
          c.if((0, e.checkMissingProp)(r, s, u)), (0, e.reportMissingProp)(r, u), c.else();
      }
      function f() {
        c.forOf("prop", d, (u) => {
          r.setParams({ missingProperty: u }), c.if((0, e.noPropertyInData)(c, y, u, w.ownProperties), () => r.error());
        });
      }
      function g(u, h) {
        r.setParams({ missingProperty: u }), c.forOf(u, d, () => {
          c.assign(h, (0, e.propertyInData)(c, y, u, w.ownProperties)), c.if((0, t.not)(h), () => {
            r.error(), c.break();
          });
        }, t.nil);
      }
    }
  };
  return xt.default = i, xt;
}
var Et = {}, Gr;
function os() {
  if (Gr) return Et;
  Gr = 1, Object.defineProperty(Et, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Q(), n = {
    keyword: ["maxItems", "minItems"],
    type: "array",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: o, schemaCode: i }) {
        const r = o === "maxItems" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${r} than ${i} items`;
      },
      params: ({ schemaCode: o }) => (0, e._)`{limit: ${o}}`
    },
    code(o) {
      const { keyword: i, data: r, schemaCode: c } = o, s = i === "maxItems" ? e.operators.GT : e.operators.LT;
      o.fail$data((0, e._)`${r}.length ${s} ${c}`);
    }
  };
  return Et.default = n, Et;
}
var Pt = {}, At = {}, Hr;
function Hn() {
  if (Hr) return At;
  Hr = 1, Object.defineProperty(At, "__esModule", { value: !0 });
  const e = ei();
  return e.code = 'require("ajv/dist/runtime/equal").default', At.default = e, At;
}
var Jr;
function is() {
  if (Jr) return Pt;
  Jr = 1, Object.defineProperty(Pt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ pn(), t = /* @__PURE__ */ Q(), n = /* @__PURE__ */ ne(), o = /* @__PURE__ */ Hn(), r = {
    keyword: "uniqueItems",
    type: "array",
    schemaType: "boolean",
    $data: !0,
    error: {
      message: ({ params: { i: c, j: s } }) => (0, t.str)`must NOT have duplicate items (items ## ${s} and ${c} are identical)`,
      params: ({ params: { i: c, j: s } }) => (0, t._)`{i: ${c}, j: ${s}}`
    },
    code(c) {
      const { gen: s, data: d, $data: y, schema: m, parentSchema: S, schemaCode: w, it: v } = c;
      if (!y && !m)
        return;
      const _ = s.let("valid"), b = S.items ? (0, e.getSchemaTypes)(S.items) : [];
      c.block$data(_, f, (0, t._)`${w} === false`), c.ok(_);
      function f() {
        const C = s.let("i", (0, t._)`${d}.length`), a = s.let("j");
        c.setParams({ i: C, j: a }), s.assign(_, !0), s.if((0, t._)`${C} > 1`, () => (g() ? u : h)(C, a));
      }
      function g() {
        return b.length > 0 && !b.some((C) => C === "object" || C === "array");
      }
      function u(C, a) {
        const l = s.name("item"), p = (0, e.checkDataTypes)(b, l, v.opts.strictNumbers, e.DataType.Wrong), x = s.const("indices", (0, t._)`{}`);
        s.for((0, t._)`;${C}--;`, () => {
          s.let(l, (0, t._)`${d}[${C}]`), s.if(p, (0, t._)`continue`), b.length > 1 && s.if((0, t._)`typeof ${l} == "string"`, (0, t._)`${l} += "_"`), s.if((0, t._)`typeof ${x}[${l}] == "number"`, () => {
            s.assign(a, (0, t._)`${x}[${l}]`), c.error(), s.assign(_, !1).break();
          }).code((0, t._)`${x}[${l}] = ${C}`);
        });
      }
      function h(C, a) {
        const l = (0, n.useFunc)(s, o.default), p = s.name("outer");
        s.label(p).for((0, t._)`;${C}--;`, () => s.for((0, t._)`${a} = ${C}; ${a}--;`, () => s.if((0, t._)`${l}(${d}[${C}], ${d}[${a}])`, () => {
          c.error(), s.assign(_, !1).break(p);
        })));
      }
    }
  };
  return Pt.default = r, Pt;
}
var Rt = {}, Wr;
function ss() {
  if (Wr) return Rt;
  Wr = 1, Object.defineProperty(Rt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Q(), t = /* @__PURE__ */ ne(), n = /* @__PURE__ */ Hn(), i = {
    keyword: "const",
    $data: !0,
    error: {
      message: "must be equal to constant",
      params: ({ schemaCode: r }) => (0, e._)`{allowedValue: ${r}}`
    },
    code(r) {
      const { gen: c, data: s, $data: d, schemaCode: y, schema: m } = r;
      d || m && typeof m == "object" ? r.fail$data((0, e._)`!${(0, t.useFunc)(c, n.default)}(${s}, ${y})`) : r.fail((0, e._)`${m} !== ${s}`);
    }
  };
  return Rt.default = i, Rt;
}
var Mt = {}, Yr;
function as() {
  if (Yr) return Mt;
  Yr = 1, Object.defineProperty(Mt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Q(), t = /* @__PURE__ */ ne(), n = /* @__PURE__ */ Hn(), i = {
    keyword: "enum",
    schemaType: "array",
    $data: !0,
    error: {
      message: "must be equal to one of the allowed values",
      params: ({ schemaCode: r }) => (0, e._)`{allowedValues: ${r}}`
    },
    code(r) {
      const { gen: c, data: s, $data: d, schema: y, schemaCode: m, it: S } = r;
      if (!d && y.length === 0)
        throw new Error("enum must have non-empty array");
      const w = y.length >= S.opts.loopEnum;
      let v;
      const _ = () => v ?? (v = (0, t.useFunc)(c, n.default));
      let b;
      if (w || d)
        b = c.let("valid"), r.block$data(b, f);
      else {
        if (!Array.isArray(y))
          throw new Error("ajv implementation error");
        const u = c.const("vSchema", m);
        b = (0, e.or)(...y.map((h, C) => g(u, C)));
      }
      r.pass(b);
      function f() {
        c.assign(b, !1), c.forOf("v", m, (u) => c.if((0, e._)`${_()}(${s}, ${u})`, () => c.assign(b, !0).break()));
      }
      function g(u, h) {
        const C = y[h];
        return typeof C == "object" && C !== null ? (0, e._)`${_()}(${s}, ${u}[${h}])` : (0, e._)`${s} === ${C}`;
      }
    }
  };
  return Mt.default = i, Mt;
}
var Xr;
function cs() {
  if (Xr) return $t;
  Xr = 1, Object.defineProperty($t, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Xi(), t = /* @__PURE__ */ Zi(), n = /* @__PURE__ */ es(), o = /* @__PURE__ */ ts(), i = /* @__PURE__ */ ns(), r = /* @__PURE__ */ rs(), c = /* @__PURE__ */ os(), s = /* @__PURE__ */ is(), d = /* @__PURE__ */ ss(), y = /* @__PURE__ */ as(), m = [
    // number
    e.default,
    t.default,
    // string
    n.default,
    o.default,
    // object
    i.default,
    r.default,
    // array
    c.default,
    s.default,
    // any
    { keyword: "type", schemaType: ["string", "array"] },
    { keyword: "nullable", schemaType: "boolean" },
    d.default,
    y.default
  ];
  return $t.default = m, $t;
}
var Ft = {}, Ke = {}, Zr;
function ni() {
  if (Zr) return Ke;
  Zr = 1, Object.defineProperty(Ke, "__esModule", { value: !0 }), Ke.validateAdditionalItems = void 0;
  const e = /* @__PURE__ */ Q(), t = /* @__PURE__ */ ne(), o = {
    keyword: "additionalItems",
    type: "array",
    schemaType: ["boolean", "object"],
    before: "uniqueItems",
    error: {
      message: ({ params: { len: r } }) => (0, e.str)`must NOT have more than ${r} items`,
      params: ({ params: { len: r } }) => (0, e._)`{limit: ${r}}`
    },
    code(r) {
      const { parentSchema: c, it: s } = r, { items: d } = c;
      if (!Array.isArray(d)) {
        (0, t.checkStrictMode)(s, '"additionalItems" is ignored when "items" is not an array of schemas');
        return;
      }
      i(r, d);
    }
  };
  function i(r, c) {
    const { gen: s, schema: d, data: y, keyword: m, it: S } = r;
    S.items = !0;
    const w = s.const("len", (0, e._)`${y}.length`);
    if (d === !1)
      r.setParams({ len: c.length }), r.pass((0, e._)`${w} <= ${c.length}`);
    else if (typeof d == "object" && !(0, t.alwaysValidSchema)(S, d)) {
      const _ = s.var("valid", (0, e._)`${w} <= ${c.length}`);
      s.if((0, e.not)(_), () => v(_)), r.ok(_);
    }
    function v(_) {
      s.forRange("i", c.length, w, (b) => {
        r.subschema({ keyword: m, dataProp: b, dataPropType: t.Type.Num }, _), S.allErrors || s.if((0, e.not)(_), () => s.break());
      });
    }
  }
  return Ke.validateAdditionalItems = i, Ke.default = o, Ke;
}
var Nt = {}, Ge = {}, Qr;
function ri() {
  if (Qr) return Ge;
  Qr = 1, Object.defineProperty(Ge, "__esModule", { value: !0 }), Ge.validateTuple = void 0;
  const e = /* @__PURE__ */ Q(), t = /* @__PURE__ */ ne(), n = /* @__PURE__ */ xe(), o = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "array", "boolean"],
    before: "uniqueItems",
    code(r) {
      const { schema: c, it: s } = r;
      if (Array.isArray(c))
        return i(r, "additionalItems", c);
      s.items = !0, !(0, t.alwaysValidSchema)(s, c) && r.ok((0, n.validateArray)(r));
    }
  };
  function i(r, c, s = r.schema) {
    const { gen: d, parentSchema: y, data: m, keyword: S, it: w } = r;
    b(y), w.opts.unevaluated && s.length && w.items !== !0 && (w.items = t.mergeEvaluated.items(d, s.length, w.items));
    const v = d.name("valid"), _ = d.const("len", (0, e._)`${m}.length`);
    s.forEach((f, g) => {
      (0, t.alwaysValidSchema)(w, f) || (d.if((0, e._)`${_} > ${g}`, () => r.subschema({
        keyword: S,
        schemaProp: g,
        dataProp: g
      }, v)), r.ok(v));
    });
    function b(f) {
      const { opts: g, errSchemaPath: u } = w, h = s.length, C = h === f.minItems && (h === f.maxItems || f[c] === !1);
      if (g.strictTuples && !C) {
        const a = `"${S}" is ${h}-tuple, but minItems or maxItems/${c} are not specified or different at path "${u}"`;
        (0, t.checkStrictMode)(w, a, g.strictTuples);
      }
    }
  }
  return Ge.validateTuple = i, Ge.default = o, Ge;
}
var eo;
function ls() {
  if (eo) return Nt;
  eo = 1, Object.defineProperty(Nt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ri(), t = {
    keyword: "prefixItems",
    type: "array",
    schemaType: ["array"],
    before: "uniqueItems",
    code: (n) => (0, e.validateTuple)(n, "items")
  };
  return Nt.default = t, Nt;
}
var jt = {}, to;
function ds() {
  if (to) return jt;
  to = 1, Object.defineProperty(jt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Q(), t = /* @__PURE__ */ ne(), n = /* @__PURE__ */ xe(), o = /* @__PURE__ */ ni(), r = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    error: {
      message: ({ params: { len: c } }) => (0, e.str)`must NOT have more than ${c} items`,
      params: ({ params: { len: c } }) => (0, e._)`{limit: ${c}}`
    },
    code(c) {
      const { schema: s, parentSchema: d, it: y } = c, { prefixItems: m } = d;
      y.items = !0, !(0, t.alwaysValidSchema)(y, s) && (m ? (0, o.validateAdditionalItems)(c, m) : c.ok((0, n.validateArray)(c)));
    }
  };
  return jt.default = r, jt;
}
var Ot = {}, no;
function us() {
  if (no) return Ot;
  no = 1, Object.defineProperty(Ot, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Q(), t = /* @__PURE__ */ ne(), o = {
    keyword: "contains",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    trackErrors: !0,
    error: {
      message: ({ params: { min: i, max: r } }) => r === void 0 ? (0, e.str)`must contain at least ${i} valid item(s)` : (0, e.str)`must contain at least ${i} and no more than ${r} valid item(s)`,
      params: ({ params: { min: i, max: r } }) => r === void 0 ? (0, e._)`{minContains: ${i}}` : (0, e._)`{minContains: ${i}, maxContains: ${r}}`
    },
    code(i) {
      const { gen: r, schema: c, parentSchema: s, data: d, it: y } = i;
      let m, S;
      const { minContains: w, maxContains: v } = s;
      y.opts.next ? (m = w === void 0 ? 1 : w, S = v) : m = 1;
      const _ = r.const("len", (0, e._)`${d}.length`);
      if (i.setParams({ min: m, max: S }), S === void 0 && m === 0) {
        (0, t.checkStrictMode)(y, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
        return;
      }
      if (S !== void 0 && m > S) {
        (0, t.checkStrictMode)(y, '"minContains" > "maxContains" is always invalid'), i.fail();
        return;
      }
      if ((0, t.alwaysValidSchema)(y, c)) {
        let h = (0, e._)`${_} >= ${m}`;
        S !== void 0 && (h = (0, e._)`${h} && ${_} <= ${S}`), i.pass(h);
        return;
      }
      y.items = !0;
      const b = r.name("valid");
      S === void 0 && m === 1 ? g(b, () => r.if(b, () => r.break())) : m === 0 ? (r.let(b, !0), S !== void 0 && r.if((0, e._)`${d}.length > 0`, f)) : (r.let(b, !1), f()), i.result(b, () => i.reset());
      function f() {
        const h = r.name("_valid"), C = r.let("count", 0);
        g(h, () => r.if(h, () => u(C)));
      }
      function g(h, C) {
        r.forRange("i", 0, _, (a) => {
          i.subschema({
            keyword: "contains",
            dataProp: a,
            dataPropType: t.Type.Num,
            compositeRule: !0
          }, h), C();
        });
      }
      function u(h) {
        r.code((0, e._)`${h}++`), S === void 0 ? r.if((0, e._)`${h} >= ${m}`, () => r.assign(b, !0).break()) : (r.if((0, e._)`${h} > ${S}`, () => r.assign(b, !1).break()), m === 1 ? r.assign(b, !0) : r.if((0, e._)`${h} >= ${m}`, () => r.assign(b, !0)));
      }
    }
  };
  return Ot.default = o, Ot;
}
var jn = {}, ro;
function Jn() {
  return ro || (ro = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
    const t = /* @__PURE__ */ Q(), n = /* @__PURE__ */ ne(), o = /* @__PURE__ */ xe();
    e.error = {
      message: ({ params: { property: d, depsCount: y, deps: m } }) => {
        const S = y === 1 ? "property" : "properties";
        return (0, t.str)`must have ${S} ${m} when property ${d} is present`;
      },
      params: ({ params: { property: d, depsCount: y, deps: m, missingProperty: S } }) => (0, t._)`{property: ${d},
    missingProperty: ${S},
    depsCount: ${y},
    deps: ${m}}`
      // TODO change to reference
    };
    const i = {
      keyword: "dependencies",
      type: "object",
      schemaType: "object",
      error: e.error,
      code(d) {
        const [y, m] = r(d);
        c(d, y), s(d, m);
      }
    };
    function r({ schema: d }) {
      const y = {}, m = {};
      for (const S in d) {
        if (S === "__proto__")
          continue;
        const w = Array.isArray(d[S]) ? y : m;
        w[S] = d[S];
      }
      return [y, m];
    }
    function c(d, y = d.schema) {
      const { gen: m, data: S, it: w } = d;
      if (Object.keys(y).length === 0)
        return;
      const v = m.let("missing");
      for (const _ in y) {
        const b = y[_];
        if (b.length === 0)
          continue;
        const f = (0, o.propertyInData)(m, S, _, w.opts.ownProperties);
        d.setParams({
          property: _,
          depsCount: b.length,
          deps: b.join(", ")
        }), w.allErrors ? m.if(f, () => {
          for (const g of b)
            (0, o.checkReportMissingProp)(d, g);
        }) : (m.if((0, t._)`${f} && (${(0, o.checkMissingProp)(d, b, v)})`), (0, o.reportMissingProp)(d, v), m.else());
      }
    }
    e.validatePropertyDeps = c;
    function s(d, y = d.schema) {
      const { gen: m, data: S, keyword: w, it: v } = d, _ = m.name("valid");
      for (const b in y)
        (0, n.alwaysValidSchema)(v, y[b]) || (m.if(
          (0, o.propertyInData)(m, S, b, v.opts.ownProperties),
          () => {
            const f = d.subschema({ keyword: w, schemaProp: b }, _);
            d.mergeValidEvaluated(f, _);
          },
          () => m.var(_, !0)
          // TODO var
        ), d.ok(_));
    }
    e.validateSchemaDeps = s, e.default = i;
  })(jn)), jn;
}
var Tt = {}, oo;
function fs() {
  if (oo) return Tt;
  oo = 1, Object.defineProperty(Tt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Q(), t = /* @__PURE__ */ ne(), o = {
    keyword: "propertyNames",
    type: "object",
    schemaType: ["object", "boolean"],
    error: {
      message: "property name must be valid",
      params: ({ params: i }) => (0, e._)`{propertyName: ${i.propertyName}}`
    },
    code(i) {
      const { gen: r, schema: c, data: s, it: d } = i;
      if ((0, t.alwaysValidSchema)(d, c))
        return;
      const y = r.name("valid");
      r.forIn("key", s, (m) => {
        i.setParams({ propertyName: m }), i.subschema({
          keyword: "propertyNames",
          data: m,
          dataTypes: ["string"],
          propertyName: m,
          compositeRule: !0
        }, y), r.if((0, e.not)(y), () => {
          i.error(!0), d.allErrors || r.break();
        });
      }), i.ok(y);
    }
  };
  return Tt.default = o, Tt;
}
var zt = {}, io;
function oi() {
  if (io) return zt;
  io = 1, Object.defineProperty(zt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ xe(), t = /* @__PURE__ */ Q(), n = /* @__PURE__ */ ke(), o = /* @__PURE__ */ ne(), r = {
    keyword: "additionalProperties",
    type: ["object"],
    schemaType: ["boolean", "object"],
    allowUndefined: !0,
    trackErrors: !0,
    error: {
      message: "must NOT have additional properties",
      params: ({ params: c }) => (0, t._)`{additionalProperty: ${c.additionalProperty}}`
    },
    code(c) {
      const { gen: s, schema: d, parentSchema: y, data: m, errsCount: S, it: w } = c;
      if (!S)
        throw new Error("ajv implementation error");
      const { allErrors: v, opts: _ } = w;
      if (w.props = !0, _.removeAdditional !== "all" && (0, o.alwaysValidSchema)(w, d))
        return;
      const b = (0, e.allSchemaProperties)(y.properties), f = (0, e.allSchemaProperties)(y.patternProperties);
      g(), c.ok((0, t._)`${S} === ${n.default.errors}`);
      function g() {
        s.forIn("key", m, (l) => {
          !b.length && !f.length ? C(l) : s.if(u(l), () => C(l));
        });
      }
      function u(l) {
        let p;
        if (b.length > 8) {
          const x = (0, o.schemaRefOrVal)(w, y.properties, "properties");
          p = (0, e.isOwnProperty)(s, x, l);
        } else b.length ? p = (0, t.or)(...b.map((x) => (0, t._)`${l} === ${x}`)) : p = t.nil;
        return f.length && (p = (0, t.or)(p, ...f.map((x) => (0, t._)`${(0, e.usePattern)(c, x)}.test(${l})`))), (0, t.not)(p);
      }
      function h(l) {
        s.code((0, t._)`delete ${m}[${l}]`);
      }
      function C(l) {
        if (_.removeAdditional === "all" || _.removeAdditional && d === !1) {
          h(l);
          return;
        }
        if (d === !1) {
          c.setParams({ additionalProperty: l }), c.error(), v || s.break();
          return;
        }
        if (typeof d == "object" && !(0, o.alwaysValidSchema)(w, d)) {
          const p = s.name("valid");
          _.removeAdditional === "failing" ? (a(l, p, !1), s.if((0, t.not)(p), () => {
            c.reset(), h(l);
          })) : (a(l, p), v || s.if((0, t.not)(p), () => s.break()));
        }
      }
      function a(l, p, x) {
        const E = {
          keyword: "additionalProperties",
          dataProp: l,
          dataPropType: o.Type.Str
        };
        x === !1 && Object.assign(E, {
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }), c.subschema(E, p);
      }
    }
  };
  return zt.default = r, zt;
}
var It = {}, so;
function ps() {
  if (so) return It;
  so = 1, Object.defineProperty(It, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ vn(), t = /* @__PURE__ */ xe(), n = /* @__PURE__ */ ne(), o = /* @__PURE__ */ oi(), i = {
    keyword: "properties",
    type: "object",
    schemaType: "object",
    code(r) {
      const { gen: c, schema: s, parentSchema: d, data: y, it: m } = r;
      m.opts.removeAdditional === "all" && d.additionalProperties === void 0 && o.default.code(new e.KeywordCxt(m, o.default, "additionalProperties"));
      const S = (0, t.allSchemaProperties)(s);
      for (const f of S)
        m.definedProperties.add(f);
      m.opts.unevaluated && S.length && m.props !== !0 && (m.props = n.mergeEvaluated.props(c, (0, n.toHash)(S), m.props));
      const w = S.filter((f) => !(0, n.alwaysValidSchema)(m, s[f]));
      if (w.length === 0)
        return;
      const v = c.name("valid");
      for (const f of w)
        _(f) ? b(f) : (c.if((0, t.propertyInData)(c, y, f, m.opts.ownProperties)), b(f), m.allErrors || c.else().var(v, !0), c.endIf()), r.it.definedProperties.add(f), r.ok(v);
      function _(f) {
        return m.opts.useDefaults && !m.compositeRule && s[f].default !== void 0;
      }
      function b(f) {
        r.subschema({
          keyword: "properties",
          schemaProp: f,
          dataProp: f
        }, v);
      }
    }
  };
  return It.default = i, It;
}
var Dt = {}, ao;
function hs() {
  if (ao) return Dt;
  ao = 1, Object.defineProperty(Dt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ xe(), t = /* @__PURE__ */ Q(), n = /* @__PURE__ */ ne(), o = /* @__PURE__ */ ne(), i = {
    keyword: "patternProperties",
    type: "object",
    schemaType: "object",
    code(r) {
      const { gen: c, schema: s, data: d, parentSchema: y, it: m } = r, { opts: S } = m, w = (0, e.allSchemaProperties)(s), v = w.filter((C) => (0, n.alwaysValidSchema)(m, s[C]));
      if (w.length === 0 || v.length === w.length && (!m.opts.unevaluated || m.props === !0))
        return;
      const _ = S.strictSchema && !S.allowMatchingProperties && y.properties, b = c.name("valid");
      m.props !== !0 && !(m.props instanceof t.Name) && (m.props = (0, o.evaluatedPropsToName)(c, m.props));
      const { props: f } = m;
      g();
      function g() {
        for (const C of w)
          _ && u(C), m.allErrors ? h(C) : (c.var(b, !0), h(C), c.if(b));
      }
      function u(C) {
        for (const a in _)
          new RegExp(C).test(a) && (0, n.checkStrictMode)(m, `property ${a} matches pattern ${C} (use allowMatchingProperties)`);
      }
      function h(C) {
        c.forIn("key", d, (a) => {
          c.if((0, t._)`${(0, e.usePattern)(r, C)}.test(${a})`, () => {
            const l = v.includes(C);
            l || r.subschema({
              keyword: "patternProperties",
              schemaProp: C,
              dataProp: a,
              dataPropType: o.Type.Str
            }, b), m.opts.unevaluated && f !== !0 ? c.assign((0, t._)`${f}[${a}]`, !0) : !l && !m.allErrors && c.if((0, t.not)(b), () => c.break());
          });
        });
      }
    }
  };
  return Dt.default = i, Dt;
}
var qt = {}, co;
function ms() {
  if (co) return qt;
  co = 1, Object.defineProperty(qt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = {
    keyword: "not",
    schemaType: ["object", "boolean"],
    trackErrors: !0,
    code(n) {
      const { gen: o, schema: i, it: r } = n;
      if ((0, e.alwaysValidSchema)(r, i)) {
        n.fail();
        return;
      }
      const c = o.name("valid");
      n.subschema({
        keyword: "not",
        compositeRule: !0,
        createErrors: !1,
        allErrors: !1
      }, c), n.failResult(c, () => n.reset(), () => n.error());
    },
    error: { message: "must NOT be valid" }
  };
  return qt.default = t, qt;
}
var Vt = {}, lo;
function gs() {
  if (lo) return Vt;
  lo = 1, Object.defineProperty(Vt, "__esModule", { value: !0 });
  const t = {
    keyword: "anyOf",
    schemaType: "array",
    trackErrors: !0,
    code: (/* @__PURE__ */ xe()).validateUnion,
    error: { message: "must match a schema in anyOf" }
  };
  return Vt.default = t, Vt;
}
var Bt = {}, uo;
function ys() {
  if (uo) return Bt;
  uo = 1, Object.defineProperty(Bt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Q(), t = /* @__PURE__ */ ne(), o = {
    keyword: "oneOf",
    schemaType: "array",
    trackErrors: !0,
    error: {
      message: "must match exactly one schema in oneOf",
      params: ({ params: i }) => (0, e._)`{passingSchemas: ${i.passing}}`
    },
    code(i) {
      const { gen: r, schema: c, parentSchema: s, it: d } = i;
      if (!Array.isArray(c))
        throw new Error("ajv implementation error");
      if (d.opts.discriminator && s.discriminator)
        return;
      const y = c, m = r.let("valid", !1), S = r.let("passing", null), w = r.name("_valid");
      i.setParams({ passing: S }), r.block(v), i.result(m, () => i.reset(), () => i.error(!0));
      function v() {
        y.forEach((_, b) => {
          let f;
          (0, t.alwaysValidSchema)(d, _) ? r.var(w, !0) : f = i.subschema({
            keyword: "oneOf",
            schemaProp: b,
            compositeRule: !0
          }, w), b > 0 && r.if((0, e._)`${w} && ${m}`).assign(m, !1).assign(S, (0, e._)`[${S}, ${b}]`).else(), r.if(w, () => {
            r.assign(m, !0), r.assign(S, b), f && i.mergeEvaluated(f, e.Name);
          });
        });
      }
    }
  };
  return Bt.default = o, Bt;
}
var Lt = {}, fo;
function vs() {
  if (fo) return Lt;
  fo = 1, Object.defineProperty(Lt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = {
    keyword: "allOf",
    schemaType: "array",
    code(n) {
      const { gen: o, schema: i, it: r } = n;
      if (!Array.isArray(i))
        throw new Error("ajv implementation error");
      const c = o.name("valid");
      i.forEach((s, d) => {
        if ((0, e.alwaysValidSchema)(r, s))
          return;
        const y = n.subschema({ keyword: "allOf", schemaProp: d }, c);
        n.ok(c), n.mergeEvaluated(y);
      });
    }
  };
  return Lt.default = t, Lt;
}
var Ut = {}, po;
function $s() {
  if (po) return Ut;
  po = 1, Object.defineProperty(Ut, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Q(), t = /* @__PURE__ */ ne(), o = {
    keyword: "if",
    schemaType: ["object", "boolean"],
    trackErrors: !0,
    error: {
      message: ({ params: r }) => (0, e.str)`must match "${r.ifClause}" schema`,
      params: ({ params: r }) => (0, e._)`{failingKeyword: ${r.ifClause}}`
    },
    code(r) {
      const { gen: c, parentSchema: s, it: d } = r;
      s.then === void 0 && s.else === void 0 && (0, t.checkStrictMode)(d, '"if" without "then" and "else" is ignored');
      const y = i(d, "then"), m = i(d, "else");
      if (!y && !m)
        return;
      const S = c.let("valid", !0), w = c.name("_valid");
      if (v(), r.reset(), y && m) {
        const b = c.let("ifClause");
        r.setParams({ ifClause: b }), c.if(w, _("then", b), _("else", b));
      } else y ? c.if(w, _("then")) : c.if((0, e.not)(w), _("else"));
      r.pass(S, () => r.error(!0));
      function v() {
        const b = r.subschema({
          keyword: "if",
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }, w);
        r.mergeEvaluated(b);
      }
      function _(b, f) {
        return () => {
          const g = r.subschema({ keyword: b }, w);
          c.assign(S, w), r.mergeValidEvaluated(g, S), f ? c.assign(f, (0, e._)`${b}`) : r.setParams({ ifClause: b });
        };
      }
    }
  };
  function i(r, c) {
    const s = r.schema[c];
    return s !== void 0 && !(0, t.alwaysValidSchema)(r, s);
  }
  return Ut.default = o, Ut;
}
var Kt = {}, ho;
function bs() {
  if (ho) return Kt;
  ho = 1, Object.defineProperty(Kt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = {
    keyword: ["then", "else"],
    schemaType: ["object", "boolean"],
    code({ keyword: n, parentSchema: o, it: i }) {
      o.if === void 0 && (0, e.checkStrictMode)(i, `"${n}" without "if" is ignored`);
    }
  };
  return Kt.default = t, Kt;
}
var mo;
function ws() {
  if (mo) return Ft;
  mo = 1, Object.defineProperty(Ft, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ni(), t = /* @__PURE__ */ ls(), n = /* @__PURE__ */ ri(), o = /* @__PURE__ */ ds(), i = /* @__PURE__ */ us(), r = /* @__PURE__ */ Jn(), c = /* @__PURE__ */ fs(), s = /* @__PURE__ */ oi(), d = /* @__PURE__ */ ps(), y = /* @__PURE__ */ hs(), m = /* @__PURE__ */ ms(), S = /* @__PURE__ */ gs(), w = /* @__PURE__ */ ys(), v = /* @__PURE__ */ vs(), _ = /* @__PURE__ */ $s(), b = /* @__PURE__ */ bs();
  function f(g = !1) {
    const u = [
      // any
      m.default,
      S.default,
      w.default,
      v.default,
      _.default,
      b.default,
      // object
      c.default,
      s.default,
      r.default,
      d.default,
      y.default
    ];
    return g ? u.push(t.default, o.default) : u.push(e.default, n.default), u.push(i.default), u;
  }
  return Ft.default = f, Ft;
}
var Gt = {}, He = {}, go;
function ii() {
  if (go) return He;
  go = 1, Object.defineProperty(He, "__esModule", { value: !0 }), He.dynamicAnchor = void 0;
  const e = /* @__PURE__ */ Q(), t = /* @__PURE__ */ ke(), n = /* @__PURE__ */ bn(), o = /* @__PURE__ */ Gn(), i = {
    keyword: "$dynamicAnchor",
    schemaType: "string",
    code: (s) => r(s, s.schema)
  };
  function r(s, d) {
    const { gen: y, it: m } = s;
    m.schemaEnv.root.dynamicAnchors[d] = !0;
    const S = (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(d)}`, w = m.errSchemaPath === "#" ? m.validateName : c(s);
    y.if((0, e._)`!${S}`, () => y.assign(S, w));
  }
  He.dynamicAnchor = r;
  function c(s) {
    const { schemaEnv: d, schema: y, self: m } = s.it, { root: S, baseId: w, localRefs: v, meta: _ } = d.root, { schemaId: b } = m.opts, f = new n.SchemaEnv({ schema: y, schemaId: b, root: S, baseId: w, localRefs: v, meta: _ });
    return n.compileSchema.call(m, f), (0, o.getValidate)(s, f);
  }
  return He.default = i, He;
}
var Je = {}, yo;
function si() {
  if (yo) return Je;
  yo = 1, Object.defineProperty(Je, "__esModule", { value: !0 }), Je.dynamicRef = void 0;
  const e = /* @__PURE__ */ Q(), t = /* @__PURE__ */ ke(), n = /* @__PURE__ */ Gn(), o = {
    keyword: "$dynamicRef",
    schemaType: "string",
    code: (r) => i(r, r.schema)
  };
  function i(r, c) {
    const { gen: s, keyword: d, it: y } = r;
    if (c[0] !== "#")
      throw new Error(`"${d}" only supports hash fragment reference`);
    const m = c.slice(1);
    if (y.allErrors)
      S();
    else {
      const v = s.let("valid", !1);
      S(v), r.ok(v);
    }
    function S(v) {
      if (y.schemaEnv.root.dynamicAnchors[m]) {
        const _ = s.let("_v", (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(m)}`);
        s.if(_, w(_, v), w(y.validateName, v));
      } else
        w(y.validateName, v)();
    }
    function w(v, _) {
      return _ ? () => s.block(() => {
        (0, n.callRef)(r, v), s.let(_, !0);
      }) : () => (0, n.callRef)(r, v);
    }
  }
  return Je.dynamicRef = i, Je.default = o, Je;
}
var Ht = {}, vo;
function _s() {
  if (vo) return Ht;
  vo = 1, Object.defineProperty(Ht, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ii(), t = /* @__PURE__ */ ne(), n = {
    keyword: "$recursiveAnchor",
    schemaType: "boolean",
    code(o) {
      o.schema ? (0, e.dynamicAnchor)(o, "") : (0, t.checkStrictMode)(o.it, "$recursiveAnchor: false is ignored");
    }
  };
  return Ht.default = n, Ht;
}
var Jt = {}, $o;
function Ss() {
  if ($o) return Jt;
  $o = 1, Object.defineProperty(Jt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ si(), t = {
    keyword: "$recursiveRef",
    schemaType: "string",
    code: (n) => (0, e.dynamicRef)(n, n.schema)
  };
  return Jt.default = t, Jt;
}
var bo;
function Cs() {
  if (bo) return Gt;
  bo = 1, Object.defineProperty(Gt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ii(), t = /* @__PURE__ */ si(), n = /* @__PURE__ */ _s(), o = /* @__PURE__ */ Ss(), i = [e.default, t.default, n.default, o.default];
  return Gt.default = i, Gt;
}
var Wt = {}, Yt = {}, wo;
function ks() {
  if (wo) return Yt;
  wo = 1, Object.defineProperty(Yt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Jn(), t = {
    keyword: "dependentRequired",
    type: "object",
    schemaType: "object",
    error: e.error,
    code: (n) => (0, e.validatePropertyDeps)(n)
  };
  return Yt.default = t, Yt;
}
var Xt = {}, _o;
function xs() {
  if (_o) return Xt;
  _o = 1, Object.defineProperty(Xt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Jn(), t = {
    keyword: "dependentSchemas",
    type: "object",
    schemaType: "object",
    code: (n) => (0, e.validateSchemaDeps)(n)
  };
  return Xt.default = t, Xt;
}
var Zt = {}, So;
function Es() {
  if (So) return Zt;
  So = 1, Object.defineProperty(Zt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = {
    keyword: ["maxContains", "minContains"],
    type: "array",
    schemaType: "number",
    code({ keyword: n, parentSchema: o, it: i }) {
      o.contains === void 0 && (0, e.checkStrictMode)(i, `"${n}" without "contains" is ignored`);
    }
  };
  return Zt.default = t, Zt;
}
var Co;
function Ps() {
  if (Co) return Wt;
  Co = 1, Object.defineProperty(Wt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ks(), t = /* @__PURE__ */ xs(), n = /* @__PURE__ */ Es(), o = [e.default, t.default, n.default];
  return Wt.default = o, Wt;
}
var Qt = {}, en = {}, ko;
function As() {
  if (ko) return en;
  ko = 1, Object.defineProperty(en, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Q(), t = /* @__PURE__ */ ne(), n = /* @__PURE__ */ ke(), i = {
    keyword: "unevaluatedProperties",
    type: "object",
    schemaType: ["boolean", "object"],
    trackErrors: !0,
    error: {
      message: "must NOT have unevaluated properties",
      params: ({ params: r }) => (0, e._)`{unevaluatedProperty: ${r.unevaluatedProperty}}`
    },
    code(r) {
      const { gen: c, schema: s, data: d, errsCount: y, it: m } = r;
      if (!y)
        throw new Error("ajv implementation error");
      const { allErrors: S, props: w } = m;
      w instanceof e.Name ? c.if((0, e._)`${w} !== true`, () => c.forIn("key", d, (f) => c.if(_(w, f), () => v(f)))) : w !== !0 && c.forIn("key", d, (f) => w === void 0 ? v(f) : c.if(b(w, f), () => v(f))), m.props = !0, r.ok((0, e._)`${y} === ${n.default.errors}`);
      function v(f) {
        if (s === !1) {
          r.setParams({ unevaluatedProperty: f }), r.error(), S || c.break();
          return;
        }
        if (!(0, t.alwaysValidSchema)(m, s)) {
          const g = c.name("valid");
          r.subschema({
            keyword: "unevaluatedProperties",
            dataProp: f,
            dataPropType: t.Type.Str
          }, g), S || c.if((0, e.not)(g), () => c.break());
        }
      }
      function _(f, g) {
        return (0, e._)`!${f} || !${f}[${g}]`;
      }
      function b(f, g) {
        const u = [];
        for (const h in f)
          f[h] === !0 && u.push((0, e._)`${g} !== ${h}`);
        return (0, e.and)(...u);
      }
    }
  };
  return en.default = i, en;
}
var tn = {}, xo;
function Rs() {
  if (xo) return tn;
  xo = 1, Object.defineProperty(tn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Q(), t = /* @__PURE__ */ ne(), o = {
    keyword: "unevaluatedItems",
    type: "array",
    schemaType: ["boolean", "object"],
    error: {
      message: ({ params: { len: i } }) => (0, e.str)`must NOT have more than ${i} items`,
      params: ({ params: { len: i } }) => (0, e._)`{limit: ${i}}`
    },
    code(i) {
      const { gen: r, schema: c, data: s, it: d } = i, y = d.items || 0;
      if (y === !0)
        return;
      const m = r.const("len", (0, e._)`${s}.length`);
      if (c === !1)
        i.setParams({ len: y }), i.fail((0, e._)`${m} > ${y}`);
      else if (typeof c == "object" && !(0, t.alwaysValidSchema)(d, c)) {
        const w = r.var("valid", (0, e._)`${m} <= ${y}`);
        r.if((0, e.not)(w), () => S(w, y)), i.ok(w);
      }
      d.items = !0;
      function S(w, v) {
        r.forRange("i", v, m, (_) => {
          i.subschema({ keyword: "unevaluatedItems", dataProp: _, dataPropType: t.Type.Num }, w), d.allErrors || r.if((0, e.not)(w), () => r.break());
        });
      }
    }
  };
  return tn.default = o, tn;
}
var Eo;
function Ms() {
  if (Eo) return Qt;
  Eo = 1, Object.defineProperty(Qt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ As(), t = /* @__PURE__ */ Rs(), n = [e.default, t.default];
  return Qt.default = n, Qt;
}
var nn = {}, rn = {}, Po;
function Fs() {
  if (Po) return rn;
  Po = 1, Object.defineProperty(rn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Q(), n = {
    keyword: "format",
    type: ["number", "string"],
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: o }) => (0, e.str)`must match format "${o}"`,
      params: ({ schemaCode: o }) => (0, e._)`{format: ${o}}`
    },
    code(o, i) {
      const { gen: r, data: c, $data: s, schema: d, schemaCode: y, it: m } = o, { opts: S, errSchemaPath: w, schemaEnv: v, self: _ } = m;
      if (!S.validateFormats)
        return;
      s ? b() : f();
      function b() {
        const g = r.scopeValue("formats", {
          ref: _.formats,
          code: S.code.formats
        }), u = r.const("fDef", (0, e._)`${g}[${y}]`), h = r.let("fType"), C = r.let("format");
        r.if((0, e._)`typeof ${u} == "object" && !(${u} instanceof RegExp)`, () => r.assign(h, (0, e._)`${u}.type || "string"`).assign(C, (0, e._)`${u}.validate`), () => r.assign(h, (0, e._)`"string"`).assign(C, u)), o.fail$data((0, e.or)(a(), l()));
        function a() {
          return S.strictSchema === !1 ? e.nil : (0, e._)`${y} && !${C}`;
        }
        function l() {
          const p = v.$async ? (0, e._)`(${u}.async ? await ${C}(${c}) : ${C}(${c}))` : (0, e._)`${C}(${c})`, x = (0, e._)`(typeof ${C} == "function" ? ${p} : ${C}.test(${c}))`;
          return (0, e._)`${C} && ${C} !== true && ${h} === ${i} && !${x}`;
        }
      }
      function f() {
        const g = _.formats[d];
        if (!g) {
          a();
          return;
        }
        if (g === !0)
          return;
        const [u, h, C] = l(g);
        u === i && o.pass(p());
        function a() {
          if (S.strictSchema === !1) {
            _.logger.warn(x());
            return;
          }
          throw new Error(x());
          function x() {
            return `unknown format "${d}" ignored in schema at path "${w}"`;
          }
        }
        function l(x) {
          const E = x instanceof RegExp ? (0, e.regexpCode)(x) : S.code.formats ? (0, e._)`${S.code.formats}${(0, e.getProperty)(d)}` : void 0, N = r.scopeValue("formats", { key: d, ref: x, code: E });
          return typeof x == "object" && !(x instanceof RegExp) ? [x.type || "string", x.validate, (0, e._)`${N}.validate`] : ["string", x, N];
        }
        function p() {
          if (typeof g == "object" && !(g instanceof RegExp) && g.async) {
            if (!v.$async)
              throw new Error("async format in sync schema");
            return (0, e._)`await ${C}(${c})`;
          }
          return typeof h == "function" ? (0, e._)`${C}(${c})` : (0, e._)`${C}.test(${c})`;
        }
      }
    }
  };
  return rn.default = n, rn;
}
var Ao;
function Ns() {
  if (Ao) return nn;
  Ao = 1, Object.defineProperty(nn, "__esModule", { value: !0 });
  const t = [(/* @__PURE__ */ Fs()).default];
  return nn.default = t, nn;
}
var De = {}, Ro;
function js() {
  return Ro || (Ro = 1, Object.defineProperty(De, "__esModule", { value: !0 }), De.contentVocabulary = De.metadataVocabulary = void 0, De.metadataVocabulary = [
    "title",
    "description",
    "default",
    "deprecated",
    "readOnly",
    "writeOnly",
    "examples"
  ], De.contentVocabulary = [
    "contentMediaType",
    "contentEncoding",
    "contentSchema"
  ]), De;
}
var Mo;
function Os() {
  if (Mo) return gt;
  Mo = 1, Object.defineProperty(gt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Yi(), t = /* @__PURE__ */ cs(), n = /* @__PURE__ */ ws(), o = /* @__PURE__ */ Cs(), i = /* @__PURE__ */ Ps(), r = /* @__PURE__ */ Ms(), c = /* @__PURE__ */ Ns(), s = /* @__PURE__ */ js(), d = [
    o.default,
    e.default,
    t.default,
    (0, n.default)(!0),
    c.default,
    s.metadataVocabulary,
    s.contentVocabulary,
    i.default,
    r.default
  ];
  return gt.default = d, gt;
}
var on = {}, it = {}, Fo;
function Ts() {
  if (Fo) return it;
  Fo = 1, Object.defineProperty(it, "__esModule", { value: !0 }), it.DiscrError = void 0;
  var e;
  return (function(t) {
    t.Tag = "tag", t.Mapping = "mapping";
  })(e || (it.DiscrError = e = {})), it;
}
var No;
function zs() {
  if (No) return on;
  No = 1, Object.defineProperty(on, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Q(), t = /* @__PURE__ */ Ts(), n = /* @__PURE__ */ bn(), o = /* @__PURE__ */ $n(), i = /* @__PURE__ */ ne(), c = {
    keyword: "discriminator",
    type: "object",
    schemaType: "object",
    error: {
      message: ({ params: { discrError: s, tagName: d } }) => s === t.DiscrError.Tag ? `tag "${d}" must be string` : `value of tag "${d}" must be in oneOf`,
      params: ({ params: { discrError: s, tag: d, tagName: y } }) => (0, e._)`{error: ${s}, tag: ${y}, tagValue: ${d}}`
    },
    code(s) {
      const { gen: d, data: y, schema: m, parentSchema: S, it: w } = s, { oneOf: v } = S;
      if (!w.opts.discriminator)
        throw new Error("discriminator: requires discriminator option");
      const _ = m.propertyName;
      if (typeof _ != "string")
        throw new Error("discriminator: requires propertyName");
      if (m.mapping)
        throw new Error("discriminator: mapping is not supported");
      if (!v)
        throw new Error("discriminator: requires oneOf keyword");
      const b = d.let("valid", !1), f = d.const("tag", (0, e._)`${y}${(0, e.getProperty)(_)}`);
      d.if((0, e._)`typeof ${f} == "string"`, () => g(), () => s.error(!1, { discrError: t.DiscrError.Tag, tag: f, tagName: _ })), s.ok(b);
      function g() {
        const C = h();
        d.if(!1);
        for (const a in C)
          d.elseIf((0, e._)`${f} === ${a}`), d.assign(b, u(C[a]));
        d.else(), s.error(!1, { discrError: t.DiscrError.Mapping, tag: f, tagName: _ }), d.endIf();
      }
      function u(C) {
        const a = d.name("valid"), l = s.subschema({ keyword: "oneOf", schemaProp: C }, a);
        return s.mergeEvaluated(l, e.Name), a;
      }
      function h() {
        var C;
        const a = {}, l = x(S);
        let p = !0;
        for (let z = 0; z < v.length; z++) {
          let A = v[z];
          if (A?.$ref && !(0, i.schemaHasRulesButRef)(A, w.self.RULES)) {
            const J = A.$ref;
            if (A = n.resolveRef.call(w.self, w.schemaEnv.root, w.baseId, J), A instanceof n.SchemaEnv && (A = A.schema), A === void 0)
              throw new o.default(w.opts.uriResolver, w.baseId, J);
          }
          const T = (C = A?.properties) === null || C === void 0 ? void 0 : C[_];
          if (typeof T != "object")
            throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${_}"`);
          p = p && (l || x(A)), E(T, z);
        }
        if (!p)
          throw new Error(`discriminator: "${_}" must be required`);
        return a;
        function x({ required: z }) {
          return Array.isArray(z) && z.includes(_);
        }
        function E(z, A) {
          if (z.const)
            N(z.const, A);
          else if (z.enum)
            for (const T of z.enum)
              N(T, A);
          else
            throw new Error(`discriminator: "properties/${_}" must have "const" or "enum"`);
        }
        function N(z, A) {
          if (typeof z != "string" || z in a)
            throw new Error(`discriminator: "${_}" values must be unique strings`);
          a[z] = A;
        }
      }
    }
  };
  return on.default = c, on;
}
var sn = {};
const Is = "https://json-schema.org/draft/2020-12/schema", Ds = "https://json-schema.org/draft/2020-12/schema", qs = { "https://json-schema.org/draft/2020-12/vocab/core": !0, "https://json-schema.org/draft/2020-12/vocab/applicator": !0, "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0, "https://json-schema.org/draft/2020-12/vocab/validation": !0, "https://json-schema.org/draft/2020-12/vocab/meta-data": !0, "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0, "https://json-schema.org/draft/2020-12/vocab/content": !0 }, Vs = "meta", Bs = "Core and Validation specifications meta-schema", Ls = [{ $ref: "meta/core" }, { $ref: "meta/applicator" }, { $ref: "meta/unevaluated" }, { $ref: "meta/validation" }, { $ref: "meta/meta-data" }, { $ref: "meta/format-annotation" }, { $ref: "meta/content" }], Us = ["object", "boolean"], Ks = "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.", Gs = { definitions: { $comment: '"definitions" has been replaced by "$defs".', type: "object", additionalProperties: { $dynamicRef: "#meta" }, deprecated: !0, default: {} }, dependencies: { $comment: '"dependencies" has been split and replaced by "dependentSchemas" and "dependentRequired" in order to serve their differing semantics.', type: "object", additionalProperties: { anyOf: [{ $dynamicRef: "#meta" }, { $ref: "meta/validation#/$defs/stringArray" }] }, deprecated: !0, default: {} }, $recursiveAnchor: { $comment: '"$recursiveAnchor" has been replaced by "$dynamicAnchor".', $ref: "meta/core#/$defs/anchorString", deprecated: !0 }, $recursiveRef: { $comment: '"$recursiveRef" has been replaced by "$dynamicRef".', $ref: "meta/core#/$defs/uriReferenceString", deprecated: !0 } }, Hs = {
  $schema: Is,
  $id: Ds,
  $vocabulary: qs,
  $dynamicAnchor: Vs,
  title: Bs,
  allOf: Ls,
  type: Us,
  $comment: Ks,
  properties: Gs
}, Js = "https://json-schema.org/draft/2020-12/schema", Ws = "https://json-schema.org/draft/2020-12/meta/applicator", Ys = { "https://json-schema.org/draft/2020-12/vocab/applicator": !0 }, Xs = "meta", Zs = "Applicator vocabulary meta-schema", Qs = ["object", "boolean"], ea = { prefixItems: { $ref: "#/$defs/schemaArray" }, items: { $dynamicRef: "#meta" }, contains: { $dynamicRef: "#meta" }, additionalProperties: { $dynamicRef: "#meta" }, properties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, propertyNames: { format: "regex" }, default: {} }, dependentSchemas: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, propertyNames: { $dynamicRef: "#meta" }, if: { $dynamicRef: "#meta" }, then: { $dynamicRef: "#meta" }, else: { $dynamicRef: "#meta" }, allOf: { $ref: "#/$defs/schemaArray" }, anyOf: { $ref: "#/$defs/schemaArray" }, oneOf: { $ref: "#/$defs/schemaArray" }, not: { $dynamicRef: "#meta" } }, ta = { schemaArray: { type: "array", minItems: 1, items: { $dynamicRef: "#meta" } } }, na = {
  $schema: Js,
  $id: Ws,
  $vocabulary: Ys,
  $dynamicAnchor: Xs,
  title: Zs,
  type: Qs,
  properties: ea,
  $defs: ta
}, ra = "https://json-schema.org/draft/2020-12/schema", oa = "https://json-schema.org/draft/2020-12/meta/unevaluated", ia = { "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0 }, sa = "meta", aa = "Unevaluated applicator vocabulary meta-schema", ca = ["object", "boolean"], la = { unevaluatedItems: { $dynamicRef: "#meta" }, unevaluatedProperties: { $dynamicRef: "#meta" } }, da = {
  $schema: ra,
  $id: oa,
  $vocabulary: ia,
  $dynamicAnchor: sa,
  title: aa,
  type: ca,
  properties: la
}, ua = "https://json-schema.org/draft/2020-12/schema", fa = "https://json-schema.org/draft/2020-12/meta/content", pa = { "https://json-schema.org/draft/2020-12/vocab/content": !0 }, ha = "meta", ma = "Content vocabulary meta-schema", ga = ["object", "boolean"], ya = { contentEncoding: { type: "string" }, contentMediaType: { type: "string" }, contentSchema: { $dynamicRef: "#meta" } }, va = {
  $schema: ua,
  $id: fa,
  $vocabulary: pa,
  $dynamicAnchor: ha,
  title: ma,
  type: ga,
  properties: ya
}, $a = "https://json-schema.org/draft/2020-12/schema", ba = "https://json-schema.org/draft/2020-12/meta/core", wa = { "https://json-schema.org/draft/2020-12/vocab/core": !0 }, _a = "meta", Sa = "Core vocabulary meta-schema", Ca = ["object", "boolean"], ka = { $id: { $ref: "#/$defs/uriReferenceString", $comment: "Non-empty fragments not allowed.", pattern: "^[^#]*#?$" }, $schema: { $ref: "#/$defs/uriString" }, $ref: { $ref: "#/$defs/uriReferenceString" }, $anchor: { $ref: "#/$defs/anchorString" }, $dynamicRef: { $ref: "#/$defs/uriReferenceString" }, $dynamicAnchor: { $ref: "#/$defs/anchorString" }, $vocabulary: { type: "object", propertyNames: { $ref: "#/$defs/uriString" }, additionalProperties: { type: "boolean" } }, $comment: { type: "string" }, $defs: { type: "object", additionalProperties: { $dynamicRef: "#meta" } } }, xa = { anchorString: { type: "string", pattern: "^[A-Za-z_][-A-Za-z0-9._]*$" }, uriString: { type: "string", format: "uri" }, uriReferenceString: { type: "string", format: "uri-reference" } }, Ea = {
  $schema: $a,
  $id: ba,
  $vocabulary: wa,
  $dynamicAnchor: _a,
  title: Sa,
  type: Ca,
  properties: ka,
  $defs: xa
}, Pa = "https://json-schema.org/draft/2020-12/schema", Aa = "https://json-schema.org/draft/2020-12/meta/format-annotation", Ra = { "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0 }, Ma = "meta", Fa = "Format vocabulary meta-schema for annotation results", Na = ["object", "boolean"], ja = { format: { type: "string" } }, Oa = {
  $schema: Pa,
  $id: Aa,
  $vocabulary: Ra,
  $dynamicAnchor: Ma,
  title: Fa,
  type: Na,
  properties: ja
}, Ta = "https://json-schema.org/draft/2020-12/schema", za = "https://json-schema.org/draft/2020-12/meta/meta-data", Ia = { "https://json-schema.org/draft/2020-12/vocab/meta-data": !0 }, Da = "meta", qa = "Meta-data vocabulary meta-schema", Va = ["object", "boolean"], Ba = { title: { type: "string" }, description: { type: "string" }, default: !0, deprecated: { type: "boolean", default: !1 }, readOnly: { type: "boolean", default: !1 }, writeOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 } }, La = {
  $schema: Ta,
  $id: za,
  $vocabulary: Ia,
  $dynamicAnchor: Da,
  title: qa,
  type: Va,
  properties: Ba
}, Ua = "https://json-schema.org/draft/2020-12/schema", Ka = "https://json-schema.org/draft/2020-12/meta/validation", Ga = { "https://json-schema.org/draft/2020-12/vocab/validation": !0 }, Ha = "meta", Ja = "Validation vocabulary meta-schema", Wa = ["object", "boolean"], Ya = { type: { anyOf: [{ $ref: "#/$defs/simpleTypes" }, { type: "array", items: { $ref: "#/$defs/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, const: !0, enum: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/$defs/nonNegativeInteger" }, minLength: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, maxItems: { $ref: "#/$defs/nonNegativeInteger" }, minItems: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, maxContains: { $ref: "#/$defs/nonNegativeInteger" }, minContains: { $ref: "#/$defs/nonNegativeInteger", default: 1 }, maxProperties: { $ref: "#/$defs/nonNegativeInteger" }, minProperties: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, required: { $ref: "#/$defs/stringArray" }, dependentRequired: { type: "object", additionalProperties: { $ref: "#/$defs/stringArray" } } }, Xa = { nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { $ref: "#/$defs/nonNegativeInteger", default: 0 }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, Za = {
  $schema: Ua,
  $id: Ka,
  $vocabulary: Ga,
  $dynamicAnchor: Ha,
  title: Ja,
  type: Wa,
  properties: Ya,
  $defs: Xa
};
var jo;
function Qa() {
  if (jo) return sn;
  jo = 1, Object.defineProperty(sn, "__esModule", { value: !0 });
  const e = Hs, t = na, n = da, o = va, i = Ea, r = Oa, c = La, s = Za, d = ["/properties"];
  function y(m) {
    return [
      e,
      t,
      n,
      o,
      i,
      S(this, r),
      c,
      S(this, s)
    ].forEach((w) => this.addMetaSchema(w, void 0, !1)), this;
    function S(w, v) {
      return m ? w.$dataMetaSchema(v, d) : v;
    }
  }
  return sn.default = y, sn;
}
var Oo;
function ec() {
  return Oo || (Oo = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv2020 = void 0;
    const n = /* @__PURE__ */ Ji(), o = /* @__PURE__ */ Os(), i = /* @__PURE__ */ zs(), r = /* @__PURE__ */ Qa(), c = "https://json-schema.org/draft/2020-12/schema";
    class s extends n.default {
      constructor(v = {}) {
        super({
          ...v,
          dynamicRef: !0,
          next: !0,
          unevaluated: !0
        });
      }
      _addVocabularies() {
        super._addVocabularies(), o.default.forEach((v) => this.addVocabulary(v)), this.opts.discriminator && this.addKeyword(i.default);
      }
      _addDefaultMetaSchema() {
        super._addDefaultMetaSchema();
        const { $data: v, meta: _ } = this.opts;
        _ && (r.default.call(this, v), this.refs["http://json-schema.org/schema"] = c);
      }
      defaultMeta() {
        return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(c) ? c : void 0);
      }
    }
    t.Ajv2020 = s, e.exports = t = s, e.exports.Ajv2020 = s, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = s;
    var d = /* @__PURE__ */ vn();
    Object.defineProperty(t, "KeywordCxt", { enumerable: !0, get: function() {
      return d.KeywordCxt;
    } });
    var y = /* @__PURE__ */ Q();
    Object.defineProperty(t, "_", { enumerable: !0, get: function() {
      return y._;
    } }), Object.defineProperty(t, "str", { enumerable: !0, get: function() {
      return y.str;
    } }), Object.defineProperty(t, "stringify", { enumerable: !0, get: function() {
      return y.stringify;
    } }), Object.defineProperty(t, "nil", { enumerable: !0, get: function() {
      return y.nil;
    } }), Object.defineProperty(t, "Name", { enumerable: !0, get: function() {
      return y.Name;
    } }), Object.defineProperty(t, "CodeGen", { enumerable: !0, get: function() {
      return y.CodeGen;
    } });
    var m = /* @__PURE__ */ Kn();
    Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
      return m.default;
    } });
    var S = /* @__PURE__ */ $n();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return S.default;
    } });
  })(ut, ut.exports)), ut.exports;
}
var tc = /* @__PURE__ */ ec();
const nc = /* @__PURE__ */ Fi(tc), rc = "https://json-schema.org/draft/2020-12/schema", oc = "https://raw.githubusercontent.com/omsf-eco-infra/gufe-viz/main/schema/gufe-viz.schema.json", ic = "gufe-viz payload", sc = "Python-to-TypeScript contract bridge for gufe visualizations. Source of truth both languages are downstream of it. This schema is not strictly versioned or published as it is only internally consumed by this codebase. Schema description: one schema object per gufe class: every $def named *Viz is the visualization form of exactly one GufeTokenizable, it carries that object's `gufe-key`. Every reference from one gufe object to another is that object's gufe key, and the objects themselves live in the `registry` on the root payload. So a ligand network's nodes are keys, a chemical system's components and a transformation's protocol are keys and each one resolves to a complete, drawable object. An alchemical network whose forty systems share one protein carries that PDB once and points at it forty times, and the browser can still drill into it, because what it points at is a whole ProteinComponentViz. This is a single-shot dump rather than a conversation with a server, so the registry travels with the payload.", ac = [{ $ref: "#/$defs/SmallMoleculeComponentViz" }, { $ref: "#/$defs/ProteinComponentViz" }, { $ref: "#/$defs/SolvatedPDBComponentViz" }, { $ref: "#/$defs/ProteinMembraneComponentViz" }, { $ref: "#/$defs/SolventComponentViz" }, { $ref: "#/$defs/UnknownComponentViz" }, { $ref: "#/$defs/ProtocolViz" }, { $ref: "#/$defs/LigandAtomMappingViz" }, { $ref: "#/$defs/LigandNetworkViz" }, { $ref: "#/$defs/ChemicalSystemViz" }, { $ref: "#/$defs/TransformationViz" }, { $ref: "#/$defs/AlchemicalNetworkViz" }], cc = /* @__PURE__ */ JSON.parse('{"GufeKey":{"title":"GufeKey","description":"A gufe key: the identity of a GufeTokenizable, of the form \'ClassName-<hex digest>\'. It is deterministic and repeatable within a software environment. Only its non-emptiness is checked","type":"string","minLength":1},"ComponentKey":{"title":"ComponentKey","description":"A gufe key naming a ComponentViz in the registry. Identical to GufeKey at validation time: JSON Schema has no way to say \'this string is the gufe-key of an entry in that array, and that entry has this type\', because that is a join across two parts of the document. What the name buys is that the referent\'s type is stated in the contract and carried into the generated TypeScript, instead of living only in a test and a view.","$ref":"#/$defs/GufeKey"},"SmallMoleculeComponentKey":{"title":"SmallMoleculeComponentKey","description":"A gufe key naming a SmallMoleculeComponentViz in the registry. Resolving it yields the whole molecule, SDF included. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ChemicalSystemKey":{"title":"ChemicalSystemKey","description":"A gufe key naming a ChemicalSystemViz in the registry. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ProtocolKey":{"title":"ProtocolKey","description":"A gufe key naming a ProtocolViz in the registry. Every transformation of a network usually names the same one. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"Registry":{"title":"Registry","description":"The pool of gufe objects this payload refers to by key, each a complete payload object in its own right. Entries are unique by `gufe-key` and sorted by (type, gufe-key) so a committed fixture is byte-stable. JSON Schema cannot express \'unique by a property\' or \'every reference resolves\', so both are covered by tests on the Python side and degraded over by the views.","type":"array","items":{"oneOf":[{"$ref":"#/$defs/ComponentViz"},{"$ref":"#/$defs/ProtocolViz"},{"$ref":"#/$defs/ChemicalSystemViz"}]}},"ComponentViz":{"title":"ComponentViz","description":"Any single chemical-system component","oneOf":[{"$ref":"#/$defs/SmallMoleculeComponentViz"},{"$ref":"#/$defs/ProteinComponentViz"},{"$ref":"#/$defs/SolvatedPDBComponentViz"},{"$ref":"#/$defs/ProteinMembraneComponentViz"},{"$ref":"#/$defs/SolventComponentViz"},{"$ref":"#/$defs/UnknownComponentViz"}]},"SmallMoleculeComponentViz":{"title":"SmallMoleculeComponentViz","description":"A small molecule, carried as a complete SDF record.","type":"object","properties":{"type":{"const":"SmallMoleculeComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"sdf":{"type":"string","minLength":1,"description":"Complete inline SDF record, including the conformer."},"smiles":{"type":"string"},"total_charge":{"type":"integer","description":"Net formal charge. Displayed, never recomputed from the SDF."}},"required":["type","gufe-key","name","sdf","smiles","total_charge"],"additionalProperties":false},"ProteinComponentViz":{"title":"ProteinComponentViz","description":"A protein, carried as a complete PDB record.","type":"object","properties":{"type":{"const":"ProteinComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolvatedPDBComponentViz":{"title":"SolvatedPDBComponentViz","description":"A protein with explicit solvent. A distinct type rather than a flag on ProteinComponentViz, because the discriminator is what a view dispatches on and the presence of waters changes what a sensible default representation is.","type":"object","properties":{"type":{"const":"SolvatedPDBComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation, including explicit solvent."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"ProteinMembraneComponentViz":{"title":"ProteinMembraneComponentViz","description":"A protein embedded in a membrane.","type":"object","properties":{"type":{"const":"ProteinMembraneComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation of the protein and membrane system."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolventComponentViz":{"title":"SolventComponentViz","description":"Bulk solvent settings. There is no structure to draw, so these are flat fields suitable for rendering as a settings card.","type":"object","properties":{"type":{"const":"SolventComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"smiles":{"type":"string","minLength":1},"positive_ion":{"type":"string"},"negative_ion":{"type":"string"},"neutralize":{"type":"boolean"},"ion_concentration":{"type":"string","description":"Display-form concentration with units, for example \'0.15 molar\'. A string rather than a number because the unit is part of the value and the view only ever prints it."}},"required":["type","gufe-key","name","smiles","positive_ion","negative_ion","neutralize","ion_concentration"],"additionalProperties":false},"UnknownComponentViz":{"title":"UnknownComponentViz","description":"The graceful fallback for a component type this build does not recognize. gufe supports custom Component subclasses, so meeting one is an expected outcome rather than an error, and the browser answers it with \'sorry, there is no visualization for this\'. This covers an unrecognized type only: a recognized component whose serializer fails is a bug, and raises in Python rather than arriving here wearing a disguise.","type":"object","properties":{"type":{"const":"UnknownComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The gufe class name, so the panel can say which type it could not draw."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ProtocolViz":{"title":"ProtocolViz","description":"A gufe Protocol, named. Every transformation in an alchemical network usually shares one, so this is a registry entry that many edges point at rather than a class name repeated per edge. Settings are deliberately absent for now: they are large, deeply nested, and nothing draws them yet, adding a `settings` field later is additive and breaks nothing.","type":"object","properties":{"type":{"const":"ProtocolViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The Protocol\'s class name, which is what identifies it to a reader, a Protocol has no name of its own, so `name` is usually empty."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ChemicalSystemViz":{"title":"ChemicalSystemViz","description":"A gufe ChemicalSystem: labels mapped to the gufe keys of its components.","type":"object","properties":{"type":{"const":"ChemicalSystemViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"components":{"type":"object","description":"ChemicalSystem labels mapped to the gufe keys of the components in the registry.","additionalProperties":{"$ref":"#/$defs/ComponentKey"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","components"],"additionalProperties":false},"AtomMapping":{"title":"AtomMapping","description":"Atom index correspondence from molecule A to molecule B, as a list of index pairs. A list rather than an object keyed by A\'s index, because JSON object keys can only be strings: keying by index would put decimal strings such as \'12\' in the payload and leave both languages casting them back to integers, and it is Python\'s dict-of-int shape only by resemblance. As a list, both indices stay integers, and \'an entry has a B index for every A index\' becomes a `required` the schema states rather than a convention a reader has to trust. Pairs are ordered by `index_A` so a committed fixture is byte-stable.","type":"array","items":{"type":"object","properties":{"index_A":{"type":"integer","minimum":0,"description":"An atom index in molecule A."},"index_B":{"type":"integer","minimum":0,"description":"The atom index in molecule B that it maps to."}},"required":["index_A","index_B"],"additionalProperties":false}},"Annotations":{"title":"Annotations","description":"Free-form mapping metadata. gufe puts nothing here by design and every mapper picks its own keys, so this is deliberately open. Values are whatever survived being made JSON-safe. Displayed but never interpreted, with the single exception of \'score\'.","type":"object"},"LigandAtomMappingViz":{"title":"LigandAtomMappingViz","description":"One atom mapping between two small molecules. This is also what an edge of a ligand network is because the two endpoints are gufe keys either way: standalone they resolve in this object\'s own registry, and in a network they resolve in the network\'s, where they are the same entries the nodes name. `componentA` and `componentB` are the molecules the two sides of `componentA_to_componentB` index into: an `index_A` is an atom of the SmallMoleculeComponentViz that `componentA` names, and an `index_B` an atom of `componentB`\'s.","type":"object","properties":{"type":{"const":"LigandAtomMappingViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"componentA":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentB":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentA_to_componentB":{"$ref":"#/$defs/AtomMapping"},"score":{"type":["number","null"],"description":"The \'score\' annotation when it is a plain number, otherwise null. This is the one annotation key that is interpreted rather than displayed: it drives the edge colouring and the force layout\'s link distance."},"annotations":{"$ref":"#/$defs/Annotations"},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","componentA","componentB","componentA_to_componentB","score","annotations"],"additionalProperties":false},"LigandNetworkViz":{"title":"LigandNetworkViz","description":"A ligand network: the ligands in the registry, the nodes as keys into it, and the mappings as edges. Deliberately not gufe\'s GraphML: that format embeds a gufe to_json moldict per node, so forwarding it would relocate the decoding problem into the browser rather than avoid it.","type":"object","properties":{"type":{"const":"LigandNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ligand, resolved in `registry`.","items":{"$ref":"#/$defs/SmallMoleculeComponentKey"}},"edges":{"type":"array","description":"The mappings, whose `componentA` and `componentB` name nodes of this network. JSON Schema cannot express that referential constraint, so a Python test covers it, and the view drops a dangling edge with a banner rather than failing.","items":{"$ref":"#/$defs/LigandAtomMappingViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false},"TransformationViz":{"title":"TransformationViz","description":"A transformation between two chemical systems, both named by gufe key, as is its protocol: `stateA` is the system it starts from, `stateB` the one it ends at, and every edge of a network usually names the same protocol. This is also what an edge of an alchemical network is (there is no separate edge type) because `stateA` and `stateB` are keys either way, and in a network they are the keys the nodes name. NonTransformation uses this type too: it exposes the same stateA and stateB properties, both its single system, so it renders as a diff with no differences.","type":"object","properties":{"type":{"const":"TransformationViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"protocol":{"$ref":"#/$defs/ProtocolKey"},"stateA":{"$ref":"#/$defs/ChemicalSystemKey"},"stateB":{"$ref":"#/$defs/ChemicalSystemKey"},"mappings":{"type":"array","items":{"$ref":"#/$defs/LigandAtomMappingViz"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","protocol","stateA","stateB","mappings"],"additionalProperties":false},"AlchemicalNetworkViz":{"title":"AlchemicalNetworkViz","description":"A graph of chemical systems joined by transformations. What repeats here is not the nodes and edges themselves but what they are made of: in practice every system shares one protein and every transformation shares one protocol. Both live in the registry, once, as whole objects so this view can show composition and topology while still letting a reader open a node and see the protein.","type":"object","properties":{"type":{"const":"AlchemicalNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ChemicalSystem, resolved in `registry`.","items":{"$ref":"#/$defs/ChemicalSystemKey"}},"edges":{"type":"array","description":"The transformations, whose `stateA` and `stateB` name nodes of this network.","items":{"$ref":"#/$defs/TransformationViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false}}'), Wn = {
  $schema: rc,
  $id: oc,
  title: ic,
  description: sc,
  oneOf: ac,
  $defs: cc
}, Dl = [
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
], Yn = Wn.$id, Xn = new nc({ allErrors: !0, strict: !1 });
Xn.addSchema(Wn, Yn);
const To = Xn.getSchema(Yn), ai = Object.entries(Wn.$defs).filter(
  ([e, t]) => t.properties?.type?.const === e
).map(([e]) => e).sort(), ql = ai, Zn = /* @__PURE__ */ new Map();
for (const e of ai) {
  const t = Xn.getSchema(`${Yn}#/$defs/${e}`);
  t && Zn.set(e, t);
}
const qn = { valid: !0, issues: [] };
function Vn(e) {
  return (e ?? []).map((t) => ({
    path: t.instancePath || "",
    message: t.keyword === "additionalProperties" ? `unknown property ${JSON.stringify(t.params.additionalProperty)}` : t.message ?? "is invalid"
  }));
}
function lc(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return {
      valid: !1,
      issues: [{ path: "", message: "must be a JSON object" }]
    };
  const t = e.type, n = typeof t == "string" ? Zn.get(t) : void 0;
  return n ? n(e) ? qn : { valid: !1, issues: Vn(n.errors) } : To(e) ? qn : { valid: !1, issues: Vn(To.errors) };
}
function Vl(e, t) {
  const n = Zn.get(e);
  return n ? n(t) ? qn : { valid: !1, issues: Vn(n.errors) } : {
    valid: !1,
    issues: [
      { path: "", message: `unknown payload type ${JSON.stringify(e)}` }
    ]
  };
}
function dc(e, t = 8) {
  const n = e.slice(0, t).map((o) => `${o.path || "(root)"}: ${o.message}`);
  return e.length > t && n.push(`... and ${e.length - t} more`), n.join(`
`);
}
const Qn = {
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
function ci(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return {
      message: "This does not look like a gufe-viz payload (expected a JSON object)."
    };
  const { type: t } = e;
  if (typeof t != "string" || !t)
    return {
      message: "This payload has no `type`, so there is nothing to say what it is."
    };
  if (!Qn[t]) return uc(t);
  const { valid: n, issues: o } = lc(e);
  return n ? null : {
    message: `This payload says it is a ${t}, but it does not match the gufe-viz schema.`,
    detail: dc(o)
  };
}
function uc(e) {
  const t = Object.keys(Qn).sort().join(", ");
  return {
    message: `Sorry, there is no visualization for ${e} yet. This build can draw: ${t}.`
  };
}
function Bl(e) {
  return ci(e)?.message ?? null;
}
class fc extends Se {
  placeholder() {
    return "Waiting for data...";
  }
  renderView(t, n) {
    Ri("payload", n, this);
    const o = ci(n);
    if (o)
      return t.appendChild(pc(o, n)), {};
    const i = n.type, r = Qn[i], c = document.createElement(r);
    return c.style.cssText = "flex:1;min-height:0;min-width:0;", c.payload = n, t.appendChild(c), {
      onResize: () => c.resize?.(),
      // Removing the child fires its own `disconnectedCallback`, which is where
      // its viewers and observers are released
      cleanup: () => c.remove()
    };
  }
}
function pc(e, t) {
  const n = j(
    "div",
    "flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:32px;"
  );
  n.appendChild(ae(e.message));
  const o = (r, c) => j(
    "div",
    "max-width:640px;padding:8px 12px;border-radius:6px;font-size:11px;white-space:pre-wrap;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;overflow-wrap:anywhere;" + (c ? `background:${P.warnBg};color:${P.warnFg};border:1px solid ${P.warnBorder};` : `background:${P.panelBg};color:${P.textMuted2};border:1px solid ${P.cardBorder};`),
    r
  );
  e.detail && n.appendChild(o(e.detail, !0));
  const i = hc(t);
  return i && n.appendChild(o(i, !1)), n;
}
function hc(e) {
  if (e == null || typeof e != "object") return null;
  const t = e, n = [];
  typeof t.type == "string" && n.push(`type: ${Ne(t.type)}`), typeof t.name == "string" && t.name && n.push(`name: ${Ne(t.name)}`);
  const o = Object.keys(e);
  return o.length && n.push(
    `keys: ${o.slice(0, 12).join(", ")}${o.length > 12 ? ", ..." : ""}`
  ), n.length ? n.join(`
`) : null;
}
Ce("gufe-view", fc);
const er = {
  threeDmol: "https://3dmol.org/build/3Dmol-min.js",
  rdkit: "https://unpkg.com/@rdkit/rdkit/dist/RDKit_minimal.js",
  d3: "https://cdn.jsdelivr.net/npm/d3@7/+esm"
};
function tr(e) {
  const t = globalThis.__gufeEngines?.[e];
  return t ? Promise.resolve(t) : null;
}
function li(e, t) {
  return new Promise((n, o) => {
    const i = document.createElement("script");
    i.src = e, i.onload = () => n(), i.onerror = () => o(new Error(`Failed to load ${t}`)), document.head.appendChild(i);
  });
}
let Ve = null, We = null;
function nr() {
  if (We) return We;
  const e = tr("threeDmol");
  return e ? (We = e.then((t) => Ve = t || window.$3Dmol), We) : (We = (async () => {
    if (window.$3Dmol) return Ve = window.$3Dmol;
    if (await li(er.threeDmol, "3Dmol.js"), !window.$3Dmol) throw new Error("3Dmol.js loaded but $3Dmol is undefined");
    return Ve = window.$3Dmol;
  })(), We);
}
let Ye = null;
function rr() {
  if (Ye) return Ye;
  const e = tr("rdkit");
  return e ? (Ye = e.then((t) => window.RDKit = t), Ye) : (Ye = (async () => {
    if (window.RDKit) return window.RDKit;
    if (await li(er.rdkit, "RDKit"), !window.initRDKitModule) throw new Error("RDKit loaded but initRDKitModule is undefined");
    return window.RDKit = await window.initRDKitModule();
  })(), Ye);
}
let On = null;
function di() {
  if (!On) {
    const e = er.d3;
    On = tr("d3") ?? import(
      /* @vite-ignore */
      e
    );
  }
  return On;
}
function or(e, t) {
  let n = !1, o = !1;
  const i = () => {
    n = !0;
  }, r = () => {
    n = !1;
  }, c = (s) => {
    if (s.stopPropagation(), n || s.ctrlKey || s.metaKey) {
      s.preventDefault(), t.onZoom(s);
      return;
    }
    t.hint && !o && (o = !0, gc(e, t.hint));
  };
  return e.addEventListener("wheel", c, { passive: !1, capture: !0 }), e.addEventListener("pointerdown", i), e.addEventListener("pointerenter", i), e.addEventListener("pointerleave", r), {
    cleanup() {
      e.removeEventListener("wheel", c, { capture: !0 }), e.removeEventListener("pointerdown", i), e.removeEventListener("pointerenter", i), e.removeEventListener("pointerleave", r);
    }
  };
}
const mc = 1600;
function gc(e, t) {
  const n = j(
    "div",
    "position:absolute;bottom:12px;left:50%;transform:translateX(-50%);z-index:30;pointer-events:none;padding:5px 12px;border-radius:6px;font-size:11px;white-space:nowrap;background:rgba(0,0,0,0.72);color:#ffffff;transition:opacity .3s ease;",
    t
  );
  e.appendChild(n), setTimeout(() => {
    n.style.opacity = "0", setTimeout(() => n.remove(), 300);
  }, mc);
}
const yc = { min: 0.25, max: 12 };
function vc(e, t = yc) {
  let n = 1;
  return {
    zoomBy(o) {
      const i = Math.min(t.max, Math.max(t.min, n * o));
      if (i === n) return;
      const r = i / n;
      n = i, e.zoom(r), e.render();
    },
    reset() {
      n = 1, e.zoomTo(), e.render();
    },
    level: () => n
  };
}
const $c = 2e-3;
function bc(e) {
  return Math.exp(-e.deltaY * $c);
}
function ui(e, t, n = {}) {
  const o = vc(t, n.bounds), i = or(e, {
    hint: n.hint ?? "Click or hold Ctrl to zoom",
    onZoom: (r) => o.zoomBy(bc(r))
  });
  return { ...o, cleanup: i.cleanup };
}
function ir(e, t = "Reset view") {
  const n = j("button", Be, "Reset");
  return n.title = t, n.setAttribute("aria-label", t), n.onclick = e, n;
}
const ct = {
  elementChange: "#005AB5",
  uniqueAtom: "#DC3220",
  elementChange3D: "0x005AB5",
  uniqueAtom3D: "0xDC3220"
}, Ll = [
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
], Ul = "hsv", q = [0, 0, 0], wc = {
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
}, _c = {
  atomColourPalette: wc,
  addAtomIndices: !0,
  continuousHighlight: !1
}, wn = `
`, Bn = "$$$$";
function zo(e, t) {
  if (!e || !e.trim()) throw new Error("empty SDF");
  const n = e.replace(/\r/g, "").split(wn);
  if (n.length < 4) throw new Error("SDF too short");
  const o = n[3];
  if (o.indexOf("V3000") !== -1) throw new Error("V3000 molfiles are not supported");
  const i = parseInt(o.substring(0, 3), 10), r = parseInt(o.substring(3, 6), 10);
  if (!isFinite(i) || i <= 0) throw new Error(`bad counts line: ${o}`);
  const c = [], s = [];
  for (let m = 0; m < i; m++) {
    const S = n[4 + m];
    if (S == null) throw new Error("truncated atom block");
    c.push([
      parseFloat(S.substring(0, 10)) || 0,
      parseFloat(S.substring(10, 20)) || 0,
      parseFloat(S.substring(20, 30)) || 0
    ]), s.push(S.substring(31, 34).trim() || "X");
  }
  const d = [];
  for (let m = 0; m < (isFinite(r) ? r : 0); m++) {
    const S = n[4 + i + m];
    if (S == null) break;
    const w = parseInt(S.substring(0, 3), 10), v = parseInt(S.substring(3, 6), 10), _ = parseInt(S.substring(6, 9), 10);
    !isFinite(w) || !isFinite(v) || d.push([w - 1, v - 1, isFinite(_) ? _ : 1]);
  }
  return { name: (n[0] || "").trim() || t || "molecule", symbols: s, bonds: d, coords: c };
}
function Sc(e) {
  const t = e.symbols.length, n = e.bonds.length, o = [
    e.name || "",
    "  Generated",
    "",
    `${String(t).padStart(3)}${String(n).padStart(3)}  0  0  0  0  0  0  0  0999 V2000`
  ];
  for (let i = 0; i < t; i++) {
    const r = e.coords[i];
    o.push(
      r[0].toFixed(4).padStart(10) + r[1].toFixed(4).padStart(10) + r[2].toFixed(4).padStart(10) + ` ${e.symbols[i].padEnd(3)} 0  0  0  0  0  0  0  0  0  0  0  0`
    );
  }
  for (let i = 0; i < n; i++) {
    const r = e.bonds[i], c = r[2] === 12 ? 4 : r[2];
    o.push(
      String(r[0] + 1).padStart(3) + String(r[1] + 1).padStart(3) + String(c).padStart(3) + "  0  0  0  0"
    );
  }
  return o.push("M  END"), o.join(wn);
}
const Cc = (e) => `${Sc(e)}${wn}${Bn}`, kc = (e) => e.indexOf(Bn) >= 0 ? e : `${e}${wn}${Bn}`;
function xc(e) {
  const t = String(e).split(/\r?\n/);
  if (t.length < 4) return null;
  const n = parseInt(t[3].slice(0, 3), 10), o = parseInt(t[3].slice(3, 6), 10);
  return isNaN(n) || isNaN(o) ? null : { atoms: n, bonds: o };
}
function fi(e, t, n) {
  let o = null;
  try {
    if (o = e.get_mol(t, JSON.stringify({ removeHs: !0 })), !o) return null;
    try {
      o.set_new_coords(!0);
    } catch {
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
function pi(e, t, n) {
  e.innerHTML = t;
  const o = e.querySelector("svg");
  o && (o.removeAttribute("width"), o.removeAttribute("height"), o.getAttribute("viewBox") || o.setAttribute("viewBox", `0 0 ${n} ${n}`), o.setAttribute("preserveAspectRatio", "xMidYMid meet"), o.setAttribute("style", "width:100%;height:100%;max-width:100%;max-height:100%;"));
}
function Ec(e, t, n, o, i = {}) {
  let r = null;
  try {
    return r = e.get_mol(t, JSON.stringify({ removeHs: !1 })), r ? r.get_svg_with_highlights ? r.get_svg_with_highlights(
      JSON.stringify({
        atoms: o,
        width: n,
        height: n,
        // Everything gufe sets, mirrored: a black-and-white element palette,
        // atom indices, and outline rather than filled highlights. Getting
        // the highlight colours right while missing these still produces a
        // picture that does not match what gufe draws.
        ..._c,
        highlightAtomColors: i
      })
    ) || null : r.get_svg(n, n) || null : null;
  } catch (c) {
    return console.warn("[gufe-viz] depictHighlightedSVG threw -", ge(c)), null;
  } finally {
    if (r)
      try {
        r.delete();
      } catch {
      }
  }
}
const Pc = [
  { id: "stick", label: "Stick", title: "Sticks only" },
  { id: "ball", label: "Ball+Stick", title: "Ball and stick" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" }
], Io = {
  stick: { stick: { radius: 0.15, colorscheme: "Jmol" } },
  ball: { stick: { radius: 0.12, colorscheme: "Jmol" }, sphere: { scale: 0.28, colorscheme: "Jmol" } },
  sphere: { sphere: { scale: 1, colorscheme: "Jmol" } }
}, Do = 400;
class Ac extends Se {
  placeholder() {
    return "Waiting for a SmallMoleculeComponent payload...";
  }
  renderView(t, n) {
    const o = n.sdf, i = n.name ?? "", r = n.smiles, c = n.total_charge;
    t.appendChild(Te(i || "Unnamed molecule", "SmallMoleculeComponent"));
    const s = j("div", "flex:1;display:flex;flex-direction:row;overflow:hidden;min-height:0;");
    t.appendChild(s);
    const d = j("div", "flex:1 1 50%;min-width:0;display:flex;flex-direction:column;"), y = j("div", "flex:1 1 50%;min-width:0;display:flex;flex-direction:column;position:relative;");
    s.appendChild(d), s.appendChild(j("div", `width:1px;flex-shrink:0;background:${P.splitBorder};`)), s.appendChild(y);
    const m = (p) => j("div", `flex-shrink:0;padding:4px 10px;font-size:12px;font-weight:bold;color:${P.labelFg};background:${P.labelBg};`, p);
    d.appendChild(m("2D"));
    const S = j(
      "div",
      `flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:8px;background:${P.canvas2DBg};`
    );
    d.appendChild(S), y.appendChild(m("3D"));
    const w = Xo();
    y.appendChild(w.wrap);
    const v = j(
      "div",
      `flex-shrink:0;display:flex;flex-wrap:wrap;align-items:baseline;gap:6px 20px;padding:8px 16px;font-size:12px;background:${P.toolbarBg};border-top:1px solid ${P.toolbarBorder};color:${P.textPrimary};`
    );
    t.appendChild(v);
    const _ = o ? xc(o) : null, b = [
      ["Name", i || Ze, !1],
      ["SMILES", r || Ze, !0],
      ["Charge", c == null ? Ze : String(c), !1],
      ["Atoms", _ ? String(_.atoms) : Ze, !1],
      ["Bonds", _ ? String(_.bonds) : Ze, !1]
    ];
    for (const [p, x, E] of b) {
      const N = j("div", "display:flex;align-items:baseline;gap:6px;min-width:0;");
      N.appendChild(
        j(
          "span",
          `font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;flex-shrink:0;color:${P.textMuted2};`,
          p
        )
      );
      const z = j(
        "span",
        `user-select:text;cursor:text;color:${P.textPrimary}` + (E ? ";font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:11px;overflow-wrap:anywhere;" : ""),
        x
      );
      z.title = x, N.appendChild(z), v.appendChild(N);
    }
    if (!o || !o.trim())
      return S.appendChild(ae("No molecule provided")), w.container.appendChild(ae("No molecule provided")), {};
    S.appendChild(ae("Loading 2D depiction...")), rr().then((p) => {
      const x = fi(p, o, Do);
      x ? pi(S, x, Do) : S.replaceChildren(ae("Failed to parse molecule", !0));
    }).catch((p) => {
      S.replaceChildren(ae(`RDKit failed to load: ${ge(p)}`, !0));
    });
    let f = null, g = null, u = "stick", h = !1;
    const C = j(
      "div",
      `position:absolute;bottom:10px;right:10px;display:flex;gap:4px;padding:4px;border-radius:6px;z-index:10;background:${P.switcherBg};box-shadow:0 2px 8px rgba(0,0,0,0.25);`
    );
    C.appendChild(
      mn(Pc, u, (p) => {
        u = p, f && (f.setStyle({}, Io[p]), f.render());
      })
    );
    const a = j("button", `${Be}margin-left:4px;`, "Spin");
    a.title = "Toggle continuous rotation", a.onclick = () => {
      h = !h, a.style.background = h ? P.btnBgActive : P.btnBg;
      try {
        f?.spin(h ? "y" : !1);
      } catch {
      }
    }, C.appendChild(a);
    const l = ir(() => g?.reset());
    return l.style.marginLeft = "4px", C.appendChild(l), y.appendChild(C), w.container.appendChild(ae("Loading 3D viewer...")), nr().then(() => {
      w.container.replaceChildren(), f = Ve.createViewer(w.container, { backgroundColor: P.viewerBg }), f.addModel(kc(o), "sdf"), f.setStyle({}, Io[u]), f.zoomTo(), f.render(), g = ui(w.container, f);
    }).catch((p) => {
      w.container.replaceChildren(ae(`3D render failed: ${ge(p)}`, !0));
    }), {
      onResize() {
        f && (f.resize(), f.render());
      },
      cleanup() {
        if (g?.cleanup(), g = null, !!f) {
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
Ce("gufe-small-molecule", Ac);
const hi = ["HOH", "WAT", "SOL", "TIP3"], qo = { hetflag: !1 }, Rc = { hetflag: !0 }, Mc = { resn: hi }, Oe = {
  stick: { radius: 0.15 },
  sphere: { scale: 0.3 },
  hetero: { stickRadius: 0.2, sphereScale: 0.28 },
  water: { stickRadius: 0.05, sphereScale: 0.18 },
  surfaceOpacity: 0.85,
  /** Above this many atoms a surface is slow enough to be worth warning about. */
  surfaceAtomWarn: 4e4
};
function Fc(e) {
  const t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
  let o = 0, i = 0, r = 0, c = 1 / 0, s = -1 / 0;
  for (const d of e.split(/\r?\n/)) {
    const y = d.slice(0, 6);
    if (y === "ENDMDL") break;
    if (y !== "ATOM  " && y !== "HETATM") continue;
    o++, y === "HETATM" && i++;
    const m = d.slice(17, 20).trim(), S = d.slice(21, 22).trim() || "_", w = d.slice(22, 26).trim(), v = d.slice(26, 27).trim();
    hi.indexOf(m) !== -1 && r++, t.add(S), n.add(`${S}|${w}${v}|${m}`);
    const _ = parseInt(w, 10);
    isNaN(_) || (_ < c && (c = _), _ > s && (s = _));
  }
  return {
    chains: t.size,
    residues: n.size,
    atoms: o,
    hetatms: i,
    waters: r,
    heteroNonWater: i - r,
    resiMin: c === 1 / 0 ? 0 : c,
    resiMax: s === -1 / 0 ? 0 : s
  };
}
function Nc(e) {
  return `${nt(e.chains)} chains · ${nt(e.residues)} residues · ${nt(e.atoms)} atoms · ${nt(e.hetatms)} HETATM` + (e.waters > 0 ? ` (${nt(e.waters)} water)` : "");
}
function jc(e, t) {
  return e === "chain" ? { colorscheme: "chain" } : e === "ss" ? { colorscheme: "ssJmol" } : e === "spectrum" && t && t.resiMax > t.resiMin ? { colorscheme: { prop: "resi", gradient: "roygb", min: t.resiMin, max: t.resiMax } } : { colorscheme: "Jmol" };
}
function Vo(e, t, n, o) {
  const i = o || (() => {
  }), r = jc(t.color, n);
  try {
    e.removeAllSurfaces();
  } catch {
  }
  if (e.setStyle({}, {}), e.setStyle(
    qo,
    t.rep === "stick" ? { stick: { radius: Oe.stick.radius, ...r } } : t.rep === "sphere" ? { sphere: { scale: Oe.sphere.scale, ...r } } : (
      // For 'surface' the shell is added separately; leave the atoms bare so
      // it is not cluttered from the inside.
      t.rep === "surface" ? {} : { cartoon: { ...r } }
    )
  ), e.setStyle(
    Rc,
    t.hetero ? {
      stick: { radius: Oe.hetero.stickRadius, colorscheme: "Jmol" },
      sphere: { scale: Oe.hetero.sphereScale, colorscheme: "Jmol" }
    } : {}
  ), e.setStyle(
    Mc,
    t.waters ? {
      stick: { radius: Oe.water.stickRadius, colorscheme: "Jmol" },
      sphere: { scale: Oe.water.sphereScale, colorscheme: "Jmol" }
    } : {}
  ), t.rep !== "surface") {
    i(null), e.render();
    return;
  }
  i(
    n && n.atoms > Oe.surfaceAtomWarn ? "Computing surface (large structure, this may take a while)..." : "Computing surface..."
  ), e.render(), setTimeout(() => {
    try {
      Promise.resolve(
        e.addSurface(Ve.SurfaceType.VDW, { opacity: Oe.surfaceOpacity, ...r }, qo)
      ).then(() => {
        i(null), e.render();
      }).catch((c) => i(`Surface failed: ${ge(c)}`, "error"));
    } catch (c) {
      i(`Surface failed: ${ge(c)}`, "error");
    }
  }, 30);
}
const Oc = [
  { id: "cartoon", label: "Cartoon", title: "Ribbon / cartoon backbone" },
  { id: "surface", label: "Surface", title: "Molecular (VDW) surface" },
  { id: "stick", label: "Stick", title: "All-atom sticks" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" }
], Tc = [
  { id: "chain", label: "Chain" },
  { id: "spectrum", label: "Spectrum" },
  { id: "ss", label: "Secondary structure" },
  { id: "element", label: "Element" }
], zc = {
  ProteinComponentViz: "ProteinComponent",
  SolvatedPDBComponentViz: "SolvatedPDBComponent",
  ProteinMembraneComponentViz: "ProteinMembraneComponent"
};
class Ic extends Se {
  placeholder() {
    return "Waiting for a ProteinComponent payload...";
  }
  renderView(t, n) {
    const o = n.pdb, i = n.name ?? "", r = zc[n.type] ?? "ProteinComponent", s = { rep: "cartoon", color: "chain", waters: n.type !== "ProteinComponentViz", hetero: !0 };
    let d = null, y = null, m = null;
    const S = j(
      "div",
      `display:flex;align-items:center;gap:14px;flex-wrap:wrap;padding:8px 14px;flex-shrink:0;font-size:12px;background:${P.toolbarBg};border-bottom:1px solid ${P.toolbarBorder};color:${P.textPrimary};`
    );
    t.appendChild(S), S.appendChild(
      j("span", `font-weight:700;font-size:14px;letter-spacing:.02em;color:${P.titleColor};`, i || "Protein")
    ), S.appendChild(j("span", `font-size:11px;color:${P.textMuted2};`, r));
    const w = (a) => j("span", `font-size:11px;color:${P.textMuted};`, a);
    S.appendChild(w("Style:")), S.appendChild(
      mn(Oc, s.rep, (a) => {
        s.rep = a, C();
      })
    ), S.appendChild(w("Color:"));
    const v = j("select", dn);
    for (const a of Tc) {
      const l = j("option", "", a.label);
      l.value = a.id, v.appendChild(l);
    }
    v.value = s.color, v.addEventListener("change", () => {
      s.color = v.value, C();
    }), S.appendChild(v);
    const _ = j("div", "display:flex;gap:4px;");
    S.appendChild(_);
    const b = [
      ["waters", "Waters", "Show water molecules", () => C()],
      ["hetero", "Hetero", "Show hetero atoms / ligands / ions / lipids", () => C()],
      ["spin", "Spin", "Rotate the view continuously", () => d?.spin(s.spin ? "y" : !1)]
    ];
    for (const [a, l, p, x] of b) {
      const E = j("button", Be, l);
      E.title = p, E.style.background = s[a] ? P.btnBgActive : P.btnBg, E.onclick = () => {
        s[a] = !s[a], E.style.background = s[a] ? P.btnBgActive : P.btnBg, x();
      }, _.appendChild(E);
    }
    _.appendChild(ir(() => y?.reset()));
    const f = j("span", `margin-left:auto;font-size:11px;white-space:nowrap;color:${P.textMuted2};`);
    S.appendChild(f);
    const g = Xo();
    t.appendChild(g.wrap);
    const u = j(
      "div",
      "position:absolute;top:12px;left:50%;transform:translateX(-50%);padding:6px 14px;border-radius:6px;font-size:12px;z-index:20;display:none;pointer-events:none;"
    );
    g.wrap.appendChild(u);
    const h = (a, l) => {
      if (a == null) {
        u.style.display = "none";
        return;
      }
      u.textContent = a, u.style.display = "block";
      const p = l === "error";
      u.style.background = p ? P.warnBg : P.toolbarBg, u.style.color = p ? P.warnFg : P.textMuted, u.style.border = `1px solid ${p ? P.warnBorder : P.toolbarBorder}`;
    };
    function C() {
      d && Vo(d, s, m, h);
    }
    if (!o || !o.trim())
      return h("No protein data - waiting for a PDB payload."), {};
    try {
      m = Fc(o), f.textContent = Nc(m);
    } catch (a) {
      h(`⚠ PDB parse error: ${ge(a)}`, "error");
    }
    return h("Loading 3D viewer..."), nr().then(() => {
      d = Ve.createViewer(g.container, { backgroundColor: P.viewerBg }), d.addModel(o, "pdb"), Vo(d, s, m, h), d.zoomTo(), d.spin(s.spin ? "y" : !1), d.render(), y = ui(g.container, d);
    }).catch((a) => {
      h(`⚠ Failed to render structure: ${ge(a)}`, "error");
    }), {
      onResize() {
        d && (d.resize(), d.render());
      },
      cleanup() {
        if (y?.cleanup(), y = null, !!d) {
          try {
            d.spin(!1);
          } catch {
          }
          try {
            d.clear();
          } catch {
          }
          d = null;
        }
      }
    };
  }
}
Ce("gufe-protein", Ic);
const mi = "http://www.w3.org/2000/svg";
function ie(e, t = {}) {
  const n = document.createElementNS(mi, e);
  for (const [o, i] of Object.entries(t)) n.setAttribute(o, String(i));
  return n;
}
function hn(e, t) {
  const n = document.createElementNS(mi, "title");
  return n.textContent = t, e.appendChild(n), e;
}
function dt(e) {
  const t = /* @__PURE__ */ new Map();
  return Ln(e, t, /* @__PURE__ */ new Set()), t;
}
function Ln(e, t, n) {
  if (e == null || typeof e != "object" || n.has(e)) return;
  if (n.add(e), Array.isArray(e)) {
    for (const i of e) Ln(i, t, n);
    return;
  }
  const o = e.registry;
  if (Array.isArray(o))
    for (const i of o) {
      const r = i["gufe-key"];
      typeof r == "string" && r && !t.has(r) && t.set(r, i);
    }
  for (const i of Object.values(e)) Ln(i, t, n);
}
function Le(e, t) {
  return t ? e.get(t) : void 0;
}
function Ae(e, t, n) {
  const o = Le(e, t);
  return o?.type === n ? o : void 0;
}
function et(e) {
  return e.name ? e.name : (e["gufe-key"].split("-").pop() ?? e["gufe-key"]).slice(0, 6);
}
function an(e, t) {
  const n = new Array(9);
  for (let o = 0; o < 3; o++)
    for (let i = 0; i < 3; i++)
      n[o * 3 + i] = e[o * 3] * t[i] + e[o * 3 + 1] * t[3 + i] + e[o * 3 + 2] * t[6 + i];
  return n;
}
function Bo(e) {
  return [e[0], e[3], e[6], e[1], e[4], e[7], e[2], e[5], e[8]];
}
function Dc(e) {
  return e[0] * (e[4] * e[8] - e[5] * e[7]) - e[1] * (e[3] * e[8] - e[5] * e[6]) + e[2] * (e[3] * e[7] - e[4] * e[6]);
}
function Lo(e) {
  const t = e.slice(), n = [1, 0, 0, 0, 1, 0, 0, 0, 1];
  for (let o = 0; o < 50 && !(Math.abs(t[1]) + Math.abs(t[2]) + Math.abs(t[5]) < 1e-12); o++) {
    const r = [[0, 1], [0, 2], [1, 2]];
    for (let c = 0; c < 3; c++) {
      const s = r[c][0], d = r[c][1], y = t[s * 3 + d];
      if (Math.abs(y) < 1e-14) continue;
      const m = t[s * 3 + s], S = t[d * 3 + d], w = (S - m) / (2 * y);
      let v;
      Math.abs(w) > 1e10 ? v = 1 / (2 * w) : v = (w >= 0 ? 1 : -1) / (Math.abs(w) + Math.sqrt(w * w + 1));
      const _ = 1 / Math.sqrt(1 + v * v), b = v * _;
      t[s * 3 + s] = m - v * y, t[d * 3 + d] = S + v * y, t[s * 3 + d] = 0, t[d * 3 + s] = 0;
      for (let f = 0; f < 3; f++)
        if (f !== s && f !== d) {
          const g = t[f * 3 + s], u = t[f * 3 + d];
          t[f * 3 + s] = _ * g - b * u, t[s * 3 + f] = t[f * 3 + s], t[f * 3 + d] = b * g + _ * u, t[d * 3 + f] = t[f * 3 + d];
        }
      for (let f = 0; f < 3; f++) {
        const g = n[f * 3 + s], u = n[f * 3 + d];
        n[f * 3 + s] = _ * g - b * u, n[f * 3 + d] = b * g + _ * u;
      }
    }
  }
  return { values: [t[0], t[4], t[8]], vectors: n };
}
function qc(e, t) {
  const n = Math.min(e.length, t.length);
  if (n < 1) return null;
  const o = [0, 0, 0], i = [0, 0, 0];
  for (let h = 0; h < n; h++)
    o[0] += e[h][0], o[1] += e[h][1], o[2] += e[h][2], i[0] += t[h][0], i[1] += t[h][1], i[2] += t[h][2];
  if (o[0] /= n, o[1] /= n, o[2] /= n, i[0] /= n, i[1] /= n, i[2] /= n, n < 3)
    return { R: [1, 0, 0, 0, 1, 0, 0, 0, 1], t: [o[0] - i[0], o[1] - i[1], o[2] - i[2]] };
  const r = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let h = 0; h < n; h++) {
    const C = e[h][0] - o[0], a = e[h][1] - o[1], l = e[h][2] - o[2], p = t[h][0] - i[0], x = t[h][1] - i[1], E = t[h][2] - i[2];
    r[0] += C * p, r[1] += C * x, r[2] += C * E, r[3] += a * p, r[4] += a * x, r[5] += a * E, r[6] += l * p, r[7] += l * x, r[8] += l * E;
  }
  const c = Bo(r), s = an(c, r), d = an(r, c);
  let y = Lo(s), m = Lo(d);
  function S(h) {
    const C = [0, 1, 2].sort((l, p) => h.values[p] - h.values[l]), a = new Array(9);
    for (let l = 0; l < 3; l++) {
      const p = C[l];
      a[l] = h.vectors[p], a[3 + l] = h.vectors[3 + p], a[6 + l] = h.vectors[6 + p];
    }
    return {
      values: [h.values[C[0]], h.values[C[1]], h.values[C[2]]],
      vectors: a
    };
  }
  y = S(y), m = S(m);
  const w = y.vectors, v = m.vectors;
  for (let h = 0; h < 3; h++) {
    const C = w[h], a = w[3 + h], l = w[6 + h], p = r[0] * C + r[1] * a + r[2] * l, x = r[3] * C + r[4] * a + r[5] * l, E = r[6] * C + r[7] * a + r[8] * l, N = v[h], z = v[3 + h], A = v[6 + h];
    p * N + x * z + E * A < 0 && (v[h] = -N, v[3 + h] = -z, v[6 + h] = -A);
  }
  const _ = Bo(w);
  let b = an(v, _);
  Dc(b) < 0 && (v[2] = -v[2], v[5] = -v[5], v[8] = -v[8], b = an(v, _));
  const f = b[0] * i[0] + b[1] * i[1] + b[2] * i[2], g = b[3] * i[0] + b[4] * i[1] + b[5] * i[2], u = b[6] * i[0] + b[7] * i[1] + b[8] * i[2];
  return { R: b, t: [o[0] - f, o[1] - g, o[2] - u] };
}
function Vc(e, t, n) {
  const o = e[0], i = e[1], r = e[2];
  return [
    t[0] * o + t[1] * i + t[2] * r + n[0],
    t[3] * o + t[4] * i + t[5] * r + n[1],
    t[6] * o + t[7] * i + t[8] * r + n[2]
  ];
}
const Bc = [
  { id: "plain", label: "3D", title: "Plain 3D view" },
  { id: "colored", label: "3D-Map", title: "Colour-coded by mapping" },
  { id: "lines", label: "Pairs", title: "Dashed lines between mapped atoms" },
  { id: "overlay", label: "Overlay", title: "Both molecules superimposed" },
  { id: "2d", label: "2D", title: "2D depictions with highlights" },
  { id: "info", label: "Info", title: "The mapping in numbers" }
], Uo = 420, pe = {
  stick: 0.15,
  sphere: 0.25,
  uniqueStick: 0.18,
  uniqueSphere: 0.32,
  pairSphere: 0.22,
  overlayOpacity: 0.7,
  lineRadius: 0.04
}, Tn = { gap: 2.5, minLiftFraction: 0.6 };
function gi(e) {
  const t = parseInt(e.replace("#", ""), 16);
  return [(t >> 16 & 255) / 255, (t >> 8 & 255) / 255, (t & 255) / 255];
}
const Lc = gi(ct.elementChange), Uc = gi(ct.uniqueAtom);
function Ko(e, t, n) {
  const o = [], i = [], r = [];
  for (let c = 0; c < t.length; c++) {
    const s = e.get(c);
    s === void 0 ? o.push(c) : t[c] !== n[s] ? i.push(c) : r.push(c);
  }
  return { atoms: o, elements: i, mapped: r };
}
function Kc(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e.componentA_to_componentB ?? [])
    Number.isInteger(n?.index_A) && Number.isInteger(n?.index_B) && t.set(n.index_A, n.index_B);
  return t;
}
function yi(e, t) {
  const n = Ae(t, e.componentA, "SmallMoleculeComponentViz"), o = Ae(t, e.componentB, "SmallMoleculeComponentViz");
  return !n || !o ? null : { ...e, registry: n["gufe-key"] === o["gufe-key"] ? [n] : [n, o] };
}
function Go(e) {
  const t = [1 / 0, 1 / 0, 1 / 0], n = [-1 / 0, -1 / 0, -1 / 0];
  for (const o of e)
    for (let i = 0; i < 3; i++)
      o[i] < t[i] && (t[i] = o[i]), o[i] > n[i] && (n[i] = o[i]);
  return { min: t, max: n, span: [n[0] - t[0], n[1] - t[1], n[2] - t[2]] };
}
function Gc(e, t) {
  const n = Go(e), o = Go(t);
  let i = 0;
  n.span[1] < n.span[i] && (i = 1), n.span[2] < n.span[i] && (i = 2);
  const r = Math.max(n.span[0], n.span[1], n.span[2]), c = n.max[i] - o.min[i] + Tn.gap, s = Tn.minLiftFraction * r + Tn.gap;
  return { axis: i, lift: Math.max(c, s) };
}
class Hc extends Se {
  placeholder() {
    return "Waiting for a LigandAtomMapping payload...";
  }
  renderView(t, n) {
    const o = dt(n), i = Ae(o, n.componentA, "SmallMoleculeComponentViz"), r = Ae(o, n.componentB, "SmallMoleculeComponentViz");
    if (!i || !r)
      return t.appendChild(
        ae("This mapping names two molecules, and its registry does not hold them.")
      ), {};
    const c = et(i), s = et(r), d = Kc(n);
    let y, m;
    try {
      y = zo(i.sdf, c), m = zo(r.sdf, s);
    } catch (L) {
      return t.appendChild(ae(`Could not read a molecule: ${ge(L)}`, !0)), {};
    }
    const S = /* @__PURE__ */ new Map();
    for (const [L, G] of d) S.set(G, L);
    const w = Ko(d, y.symbols, m.symbols), v = Ko(S, m.symbols, y.symbols), _ = j("div", "position:relative;flex:1;min-height:0;display:flex;flex-direction:column;");
    t.appendChild(_);
    const b = j("div", "flex:1;display:flex;flex-direction:column;min-height:0;");
    _.appendChild(b);
    let f = "plain";
    const g = j(
      "div",
      `position:absolute;bottom:10px;right:10px;display:flex;gap:4px;padding:4px;border-radius:6px;z-index:10;background:${P.switcherBg};box-shadow:0 2px 8px rgba(0,0,0,0.25);`
    );
    g.appendChild(
      mn(Bc, f, (L) => {
        f = L, Z();
      })
    ), _.appendChild(g);
    let u = [], h = 0, C = !0;
    const a = () => {
      h && cancelAnimationFrame(h), h = 0;
      for (const L of u) {
        L.guard?.cleanup();
        try {
          L.viewer?.clear();
        } catch {
        }
      }
      u = [], b.replaceChildren();
    }, l = (L) => {
      const G = j("div", "flex:1;display:flex;flex-direction:column;position:relative;min-height:0;");
      G.appendChild(
        j(
          "div",
          `padding:4px 10px;font-size:13px;font-weight:bold;color:${P.labelFg};background:${P.labelBg};`,
          L
        )
      );
      const U = j("div", "flex:1;position:relative;min-height:0;");
      U.dataset.gufeViewer = "", G.appendChild(U), b.appendChild(G);
      const Y = { container: U, viewer: null, guard: null };
      return u.push(Y), Y;
    }, p = () => {
      if (u.length < 2) return;
      const L = u.map(() => "");
      let G = !1;
      const U = () => {
        if (C) {
          if (!G)
            for (let Y = 0; Y < u.length; Y++) {
              const V = u[Y].viewer;
              if (!V) continue;
              const R = JSON.stringify(V.getView());
              if (R !== L[Y]) {
                G = !0;
                for (let D = 0; D < u.length; D++)
                  D !== Y && u[D].viewer && (u[D].viewer.setView(V.getView()), u[D].viewer.render()), L[D] = R;
                G = !1;
                break;
              }
            }
          h = requestAnimationFrame(U);
        }
      };
      h = requestAnimationFrame(U);
    }, x = (L, G) => {
      const U = Ve.createViewer(L.container, { backgroundColor: P.viewerBg });
      for (const { mol: Y } of G) U.addModel(Cc(Y), "sdf");
      return L.viewer = U, L.guard = or(L.container, {
        hint: "Click or hold Ctrl to zoom",
        onZoom: () => {
        }
      }), U;
    }, E = () => {
      for (const L of [y, m]) {
        const G = l(L.name), U = x(G, [{ mol: L }]);
        U.setStyle(
          {},
          { stick: { radius: pe.stick, colorscheme: "Jmol" }, sphere: { scale: pe.sphere, colorscheme: "Jmol" } }
        ), U.zoomTo(), U.render();
      }
      p();
    }, N = () => {
      const L = [
        { mol: y, uniques: w, colour: P.colorUniqueA },
        { mol: m, uniques: v, colour: P.colorUniqueB }
      ];
      for (const G of L) {
        const U = l(G.mol.name), Y = x(U, [{ mol: G.mol }]);
        Y.setStyle(
          {},
          { stick: { radius: pe.stick, color: P.colorCore }, sphere: { scale: pe.sphere, color: P.colorCore } }
        );
        for (const V of G.uniques.atoms)
          Y.addStyle(
            { serial: V + 1 },
            {
              stick: { radius: pe.uniqueStick, color: G.colour },
              sphere: { scale: pe.uniqueSphere, color: G.colour }
            }
          );
        Y.zoomTo(), Y.render();
      }
      p();
    }, z = () => {
      const L = l(`${c} to ${s}  (${d.size} mapped pairs)`), G = [], U = [];
      for (const [k, I] of d) {
        const H = y.coords[k], W = m.coords[I];
        H && W && (G.push(H), U.push(W));
      }
      const Y = qc(G, U), V = m.coords.map((k) => Y ? Vc(k, Y.R, Y.t) : [...k]), { axis: R, lift: D } = Gc(y.coords, V), F = {
        ...m,
        coords: V.map((k) => {
          const I = [k[0], k[1], k[2]];
          return I[R] += D, I;
        })
      }, $ = x(L, [{ mol: y }, { mol: F }]);
      $.setStyle(
        { model: 0 },
        { stick: { radius: pe.stick, color: P.linesMolA }, sphere: { scale: pe.pairSphere, color: P.linesMolA } }
      ), $.setStyle(
        { model: 1 },
        { stick: { radius: pe.stick, color: P.linesMolB }, sphere: { scale: pe.pairSphere, color: P.linesMolB } }
      );
      for (const [k, I] of d) {
        const H = y.coords[k], W = F.coords[I];
        !H || !W || $.addCylinder({
          start: { x: H[0], y: H[1], z: H[2] },
          end: { x: W[0], y: W[1], z: W[2] },
          radius: pe.lineRadius,
          dashed: !0,
          fromCap: "round",
          toCap: "round",
          color: P.linesDash
        });
      }
      $.zoomTo(), R === 2 ? $.rotate(90, "x") : R === 0 && $.rotate(-90, "z"), $.render();
    }, A = () => {
      const L = l(`${c} + ${s}  (overlay)`), G = x(L, [{ mol: y }, { mol: m }]);
      for (const [U, Y] of [
        [0, P.overlayMolA],
        [1, P.overlayMolB]
      ])
        G.setStyle(
          { model: U },
          {
            stick: { radius: pe.stick, color: Y, opacity: pe.overlayOpacity },
            sphere: { scale: pe.pairSphere, color: Y, opacity: pe.overlayOpacity }
          }
        );
      G.zoomTo(), G.render();
    }, T = () => {
      const G = [
        { mol: y, sdf: i.sdf, uniques: w },
        { mol: m, sdf: r.sdf, uniques: v }
      ].map((U) => {
        const Y = j("div", "flex:1;display:flex;flex-direction:column;min-height:0;");
        Y.appendChild(
          j(
            "div",
            `padding:4px 10px;font-size:13px;font-weight:bold;color:${P.labelFg};background:${P.labelBg};`,
            U.mol.name
          )
        );
        const V = j(
          "div",
          `flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:8px;background:${P.canvas2DBg};`
        );
        return V.appendChild(ae("Loading 2D depiction...")), Y.appendChild(V), b.appendChild(Y), { box: V, side: U };
      });
      rr().then((U) => {
        for (const { box: Y, side: V } of G) {
          const R = {};
          for (const $ of V.uniques.elements) R[$] = Lc;
          for (const $ of V.uniques.atoms) R[$] = Uc;
          const D = [...V.uniques.elements, ...V.uniques.atoms], F = Ec(U, V.sdf, Uo, D, R);
          Y.replaceChildren(), F ? pi(Y, F, Uo) : Y.appendChild(ae("Failed to parse molecule", !0));
        }
      }).catch((U) => {
        for (const { box: Y } of G)
          Y.replaceChildren(ae(`RDKit failed to load: ${ge(U)}`, !0));
      });
    }, J = () => {
      const L = j("div", "flex:1;min-height:0;overflow:auto;padding:14px;display:flex;flex-direction:column;gap:14px;");
      b.appendChild(L);
      const G = j("div", "display:flex;flex-direction:column;gap:2px;");
      G.appendChild(
        j(
          "div",
          `font-size:15px;font-weight:700;color:${P.titleColor};`,
          n.name || `${c} to ${s}`
        )
      ), G.appendChild(j("div", `font-size:12px;color:${P.textMuted2};`, "LigandAtomMapping")), L.appendChild(G);
      const U = j("div", "display:flex;flex-wrap:wrap;gap:8px 16px;font-size:11px;");
      U.appendChild(ce("mapped atoms", String(d.size))), U.appendChild(
        ce("element changes", String(w.elements.length), ct.elementChange)
      ), U.appendChild(ce(`unique to ${c}`, String(w.atoms.length), ct.uniqueAtom)), U.appendChild(ce(`unique to ${s}`, String(v.atoms.length), ct.uniqueAtom)), U.appendChild(ce(`atoms in ${c}`, String(y.symbols.length))), U.appendChild(ce(`atoms in ${s}`, String(m.symbols.length))), U.appendChild(ce("score", n.score == null ? Ze : n.score.toFixed(3))), L.appendChild(U);
      const Y = j("div", `font-size:11px;font-weight:700;color:${P.textMuted2};`, "CORRESPONDENCE");
      L.appendChild(Y);
      const V = j(
        "div",
        `font-size:11px;line-height:1.7;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;color:${P.textMuted};`
      );
      V.textContent = d.size ? Array.from(d, ([D, F]) => `${D} -> ${F}`).join("   ") : "This mapping relates no atoms at all.", L.appendChild(V);
      const R = Object.entries(n.annotations ?? {}).filter(([D]) => D !== "score");
      if (R.length) {
        L.appendChild(j("div", `font-size:11px;font-weight:700;color:${P.textMuted2};`, "ANNOTATIONS"));
        const D = j(
          "div",
          `font-size:11px;line-height:1.7;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;color:${P.textMuted2};`
        );
        for (const [F, $] of R)
          D.appendChild(j("div", "", `${F}: ${String($)}`));
        L.appendChild(D);
      }
      L.appendChild(
        j(
          "div",
          `font-size:11px;color:${P.textMuted2};overflow-wrap:anywhere;`,
          `gufe key: ${n["gufe-key"]}`
        )
      );
    }, Z = () => {
      if (a(), f === "info") {
        J();
        return;
      }
      if (f === "2d") {
        T();
        return;
      }
      b.appendChild(ae("Loading 3D viewer...")), nr().then(() => {
        C && (b.replaceChildren(), f === "colored" ? N() : f === "lines" ? z() : f === "overlay" ? A() : E());
      }).catch((L) => {
        b.replaceChildren(ae(`3D render failed: ${ge(L)}`, !0));
      });
    };
    return Z(), {
      onResize() {
        for (const L of u)
          L.viewer && (L.viewer.resize(), L.viewer.render());
      },
      cleanup() {
        C = !1, a();
      }
    };
  }
}
Ce("gufe-atom-mapping", Hc);
const Jc = ["Force-directed", "Circular", "Radial"], Qe = 38, cn = 200, Wc = 4, Yc = 14, Xc = 18, Ho = 1.5, Zc = 6.5, Qc = 0.9, el = 14, zn = { size: 8, clearance: 8 }, In = { fontSize: 10, padding: 3, backgroundOpacity: 0.92 }, tl = { padding: 4 }, Jo = { captions: 0.5, depictions: 1.1 }, ln = 200, nl = 24, Dn = { node: 0.12, edge: 0.06 }, rl = 1.2, $e = {
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
function ol(e) {
  const t = j(
    "div",
    `position:absolute;z-index:30;pointer-events:none;opacity:0;transition:opacity .12s ease;padding:7px 10px;border-radius:6px;font-size:11px;line-height:1.5;max-width:260px;background:${P.tooltipBg};border:1px solid ${P.tooltipBorder};color:${P.textPrimary};box-shadow:0 4px 14px rgba(0,0,0,0.28);`
  );
  return e.appendChild(t), {
    show(n, o, i) {
      t.innerHTML = n, t.style.left = `${o + 14}px`, t.style.top = `${i - 10}px`, t.style.opacity = "1";
    },
    hide() {
      t.style.opacity = "0";
    },
    remove() {
      t.remove();
    }
  };
}
function il(e) {
  const t = /* @__PURE__ */ new Map();
  return (n) => {
    const o = t.get(n);
    if (o) return o;
    const i = `arrow-${n.replace(/[^a-zA-Z0-9]/g, "")}`;
    t.set(n, i);
    const r = ie("marker", {
      id: i,
      viewBox: "0 -5 10 10",
      // Pushes the head back along the line so it stops at the node's edge
      // rather than under it.
      refX: Qe + zn.clearance,
      refY: 0,
      markerUnits: "userSpaceOnUse",
      markerWidth: zn.size,
      markerHeight: zn.size,
      orient: "auto"
    });
    return r.appendChild(ie("path", { d: "M0,-5L10,0L0,5", fill: n })), e.appendChild(r), i;
  };
}
function sl(e) {
  const t = parseInt(e.replace("#", ""), 16);
  return [t >> 16 & 255, t >> 8 & 255, t & 255];
}
function al(e) {
  const [t, n] = P.netEdgeRamp.map(sl), o = Math.max(0, Math.min(1, e ?? 0.5));
  return `rgb(${t.map((r, c) => Math.round(r + (n[c] - r) * o)).join(",")})`;
}
const Ee = et, cl = (e, t) => e.length > t ? `${e.slice(0, t - 1)}...` : e;
function ll(e) {
  const t = /* @__PURE__ */ new Set();
  let n = /* @__PURE__ */ new Set();
  const o = (r, c) => {
    if (t.has(c) || n.has(c)) return;
    const s = e.nodes[c], d = s.sdf && fi(r, s.sdf, cn);
    if (!d) {
      n.add(c);
      return;
    }
    const y = new DOMParser().parseFromString(d, "image/svg+xml").documentElement;
    if (!y || y.nodeName.toLowerCase() === "parsererror") {
      n.add(c);
      return;
    }
    const m = (Qe - Wc) * 2 / cn, S = e.depictionGroups[c];
    S.setAttribute(
      "transform",
      `translate(${-m * cn / 2},${-m * cn / 2}) scale(${m})`
    );
    let w = 0;
    for (const v of Array.from(y.childNodes)) {
      if (v.nodeType !== 1) continue;
      const _ = v.nodeName.toLowerCase();
      if (!(_ === "defs" || _ === "metadata" || _ === "title")) {
        if (_ === "rect") {
          const b = (v.getAttribute("fill") ?? "").toLowerCase();
          if (b === "#ffffff" || b === "white" || b === "rgb(255,255,255)") continue;
        }
        S.appendChild(document.importNode(v, !0)), w++;
      }
    }
    w ? t.add(c) : n.add(c);
  };
  return { apply: (r, c, s) => {
    const d = r >= Jo.captions;
    for (const v of e.captions)
      v.setAttribute("display", d ? "inline" : "none");
    const y = r >= Jo.depictions;
    for (let v = 0; v < e.nodes.length; v++) {
      const _ = y && t.has(v);
      e.depictionGroups[v].setAttribute("display", _ ? "inline" : "none"), e.initials[v].setAttribute("display", _ ? "none" : "inline");
    }
    if (!y) return;
    const { width: m, height: S } = e.viewport(), w = [];
    e.nodes.forEach((v, _) => {
      if (t.has(_) || n.has(_)) return;
      const b = v.x * r + c, f = v.y * r + s;
      b < -ln || f < -ln || b > m + ln || f > S + ln || w.push(_);
    }), w.length && e.rdkit().then((v) => {
      if (v)
        for (const _ of w) {
          o(v, _);
          const b = t.has(_);
          e.depictionGroups[_].setAttribute("display", b ? "inline" : "none"), e.initials[_].setAttribute("display", b ? "none" : "inline");
        }
    }).catch(() => {
    });
  }, drawn: () => t.size };
}
function dl(e, t, n, o, i) {
  const r = (c) => i === "keys" ? c["gufe-key"] : Ee(c);
  return o === "ligands" ? e.filter((c) => n.has(c["gufe-key"])).map(r).join(", ") : t.filter((c) => n.has(c.from["gufe-key"]) && n.has(c.to["gufe-key"])).map((c) => `${r(c.from)}, ${r(c.to)}`).join(`
`);
}
function ul(e, t) {
  navigator.clipboard?.writeText(e).catch(() => Wo(e, t)), navigator.clipboard || Wo(e, t);
}
function Wo(e, t) {
  const n = j("textarea", "width:100%;height:80px;font-size:11px;box-sizing:border-box;");
  n.value = e, n.readOnly = !0, t.appendChild(n), n.select();
}
function fl(e, t) {
  const n = URL.createObjectURL(new Blob([e], { type: "text/plain" })), o = j("a", "display:none;");
  o.href = n, o.download = t, document.body.appendChild(o), o.click(), o.remove(), URL.revokeObjectURL(n);
}
function pl(e) {
  const t = j(
    "div",
    `display:flex;flex-direction:column;gap:8px;width:236px;padding:10px;min-height:0;background:${P.panelBg};border-right:1px solid ${P.splitBorder};`
  ), n = j("input", `${dn}width:100%;box-sizing:border-box;`);
  n.type = "search", n.placeholder = "Search ligands", n.setAttribute("aria-label", "Search ligands by name, SMILES or gufe key"), t.appendChild(n);
  const o = j("div", `display:flex;align-items:center;gap:8px;font-size:11px;color:${P.textMuted};`), i = j("span", `min-width:28px;color:${P.textPrimary};`, "0.00"), r = j("input", "flex:1;");
  r.type = "range", r.min = "0", r.max = "1", r.step = "0.01", r.value = "0", r.setAttribute("aria-label", "Hide mappings scoring below this"), o.appendChild(j("span", "", "score >=")), o.appendChild(r), o.appendChild(i), t.appendChild(o);
  const c = j("div", `font-size:11px;color:${P.textMuted2};`);
  t.appendChild(c);
  const s = j("div", "flex:1;min-height:0;overflow:auto;display:flex;flex-direction:column;gap:3px;");
  t.appendChild(s);
  const d = j("div", "display:flex;flex-direction:column;gap:6px;"), y = j("div", `display:flex;align-items:center;gap:6px;font-size:11px;color:${P.textMuted};`);
  y.appendChild(j("span", "", "copy as"));
  const m = j("select", `${dn}flex:1;`);
  for (const [f, g] of [
    ["names", "names"],
    ["keys", "gufe keys"]
  ]) {
    const u = j("option", "", g);
    u.value = f, m.appendChild(u);
  }
  y.appendChild(m), d.appendChild(y);
  const S = j("div", "display:flex;gap:4px;"), w = [
    ["Ligands", "ligands", "Copy the selected ligand names, comma separated"],
    ["Edges", "edges", "Copy the selected edges, one pair per line"]
  ];
  for (const [f, g, u] of w) {
    const h = j("button", `${Be}flex:1;`, f);
    h.title = u, h.onclick = (C) => {
      const a = m.value, l = dl(e.nodes, e.edges, e.selected, g, a);
      l && (C.shiftKey ? fl(l, `selected-${g}.txt`) : ul(l, d));
    }, S.appendChild(h);
  }
  d.appendChild(S), d.appendChild(
    j("div", `font-size:10px;color:${P.textMuted2};`, "Shift-click to save as a file instead.")
  ), t.appendChild(d);
  const v = j("button", `${Be}width:100%;`, "Clear selection");
  v.onclick = () => {
    e.selected.clear(), b(), e.refresh();
  }, t.appendChild(v);
  const _ = (f) => {
    const g = e.query.text.trim().toLowerCase();
    return g ? Ee(f).toLowerCase().includes(g) || (f.smiles ?? "").toLowerCase().includes(g) || f["gufe-key"].toLowerCase().includes(g) : !0;
  }, b = () => {
    s.replaceChildren();
    const f = e.nodes.map((g, u) => ({ node: g, index: u })).filter(({ node: g }) => _(g));
    c.textContent = `${f.length} of ${e.nodes.length} ligands`;
    for (const { node: g, index: u } of f) {
      const h = g["gufe-key"], C = j(
        "button",
        `display:flex;align-items:center;gap:6px;padding:5px 8px;border-radius:6px;text-align:left;font-family:inherit;font-size:11px;cursor:pointer;width:100%;min-width:0;border:1px solid ${e.selected.has(h) ? P.cardBorderActive : P.cardBorder};background:${e.selected.has(h) ? P.cardBgActive : P.cardBg};color:${P.textPrimary};`
      ), a = j("span", "flex:1;min-width:0;overflow-wrap:anywhere;", Ee(g));
      a.title = `${Ee(g)}
${g.smiles ?? ""}`, C.appendChild(a), C.onclick = (l) => {
        l.shiftKey || l.metaKey || l.ctrlKey ? e.selected.has(h) ? e.selected.delete(h) : e.selected.add(h) : (e.selected.clear(), e.selected.add(h), e.focus(u)), b(), e.refresh();
      }, s.appendChild(C);
    }
    f.length || s.appendChild(j("div", `font-size:11px;padding:8px;color:${P.textMuted2};`, "Nothing matches."));
  };
  return n.oninput = () => {
    e.query.text = n.value, b(), e.refresh();
  }, r.oninput = () => {
    e.filter.minScore = Number(r.value), i.textContent = e.filter.minScore.toFixed(2), e.refresh();
  }, b(), t;
}
class hl extends Se {
  placeholder() {
    return "Waiting for a LigandNetwork payload...";
  }
  renderView(t, n) {
    const o = dt(n), i = [];
    let r = 0;
    for (const G of n.nodes ?? []) {
      const U = Ae(o, G, "SmallMoleculeComponentViz");
      if (!U) {
        r++;
        continue;
      }
      i.push({ ...U, x: 0, y: 0 });
    }
    const c = new Map(i.map((G) => [G["gufe-key"], G])), s = [];
    let d = 0;
    for (const G of n.edges ?? []) {
      const U = c.get(G.componentA), Y = c.get(G.componentB);
      if (!U || !Y) {
        d++;
        continue;
      }
      s.push({ ...G, index: s.length, from: U, to: Y });
    }
    const y = Te(n.name || "Ligand network", "LigandNetwork");
    y.statsEl.appendChild(ce("ligands", String(i.length))), y.statsEl.appendChild(ce("mappings", String(s.length))), t.appendChild(y);
    const m = j("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    t.appendChild(m);
    const S = /* @__PURE__ */ new Set(), w = { minScore: 0 }, v = { text: "" };
    let _ = () => {
    };
    const b = _i(
      y,
      () => pl({
        nodes: i,
        edges: s,
        selected: S,
        filter: w,
        query: v,
        refresh: () => _(),
        focus: (G) => p(G)
      }),
      { label: "Search, filter and select ligands", onToggle: () => L() }
    );
    m.appendChild(b.panel);
    const f = j("div", `flex:1 1 58%;min-width:0;display:flex;flex-direction:column;background:${P.netCanvasBg};`), g = j("div", `flex:1 1 42%;min-width:0;display:flex;flex-direction:column;background:${P.appBg};`);
    m.appendChild(f), m.appendChild(j("div", `width:1px;flex-shrink:0;background:${P.splitBorder};`)), m.appendChild(g);
    const u = j("div", `flex:1;position:relative;overflow:hidden;min-height:0;background:${P.netCanvasBg};`);
    f.appendChild(u);
    const h = this.#t(
      (G) => L(G),
      () => J()
    );
    f.appendChild(h.bar);
    const C = this.#e(g, o);
    if (!i.length)
      return u.appendChild(
        ae(
          r ? "None of this network's ligands are in its registry." : "This network has no ligands."
        )
      ), C.message("Nothing to show."), {};
    r && qe(
      u,
      `${r} ligand${r === 1 ? "" : "s"} named by this network are not in its registry`
    ), d && qe(u, `${d} mapping${d === 1 ? "" : "s"} name a ligand this network does not contain`);
    const a = rr().catch((G) => (console.warn("[gufe-viz] RDKit failed to load:", ge(G)), null)), l = ol(u);
    let p = () => {
    }, x = s.length ? 0 : -1, E = null, N = "Force-directed", z = !1, A = !0, T = () => {
    }, J = () => {
    };
    const Z = (G) => {
      x = G, C.show(s[G] ?? null), T();
    }, L = (G = N) => {
      N = G, E?.(), E = null, u.querySelector("svg")?.remove();
      const U = u.clientWidth || 800, Y = u.clientHeight || 600;
      ml(i, U, Y, N, s);
      const V = () => {
        if (!A) return;
        const R = this.#r(u, i, s, U, Y, Z, a, l);
        T = () => R.setSelected(x), J = R.reset, E = R.cleanup, p = (D) => R.focusOn(D), _ = () => {
          const D = v.text.trim().toLowerCase(), F = S.size > 0 || D.length > 0, $ = /* @__PURE__ */ new Set();
          for (const H of i) {
            const W = H["gufe-key"], oe = S.has(W) || D.length > 0 && (Ee(H).toLowerCase().includes(D) || (H.smiles ?? "").toLowerCase().includes(D) || W.toLowerCase().includes(D));
            (!F || oe) && $.add(W);
          }
          const k = /* @__PURE__ */ new Set();
          s.forEach((H, W) => {
            (H.score ?? 0) < w.minScore || !$.has(H.from["gufe-key"]) || !$.has(H.to["gufe-key"]) || k.add(W);
          });
          const I = F || w.minScore > 0;
          R.setEmphasis(I ? $ : null, I ? k : null);
        }, T(), _(), R.fit();
      };
      if (N !== "Force-directed" || z) {
        V();
        return;
      }
      gl(i, s, U, Y).then((R) => {
        if (A) {
          if (R) {
            V();
            return;
          }
          z = !0, h.picker.value = "Circular", qe(u, "d3 could not be loaded - showing the circular layout instead"), L("Circular");
        }
      }, V);
    };
    return L(), C.show(s[x] ?? null), {
      onResize: () => L(),
      cleanup: () => {
        A = !1, l.remove(), E?.();
      }
    };
  }
  #t(t, n) {
    const o = j(
      "div",
      `display:flex;align-items:center;gap:10px;flex-wrap:wrap;padding:8px 14px;flex-shrink:0;background:${P.toolbarBg};border-top:1px solid ${P.toolbarBorder};`
    ), i = j("div", `display:flex;align-items:center;gap:6px;font-size:11px;color:${P.textMuted};`);
    i.appendChild(j("span", "", "score")), i.appendChild(
      j(
        "span",
        `width:40px;height:4px;border-radius:2px;background:linear-gradient(to right,${P.netEdgeRamp.join(",")});`
      )
    ), i.appendChild(j("span", "", "0 -> 1")), o.appendChild(i), o.appendChild(j("label", `font-size:12px;margin-left:auto;color:${P.textMuted};`, "Layout"));
    const r = j("select", dn);
    for (const c of Jc) {
      const s = j("option", "", c);
      s.value = c, r.appendChild(s);
    }
    return r.onchange = () => t(r.value), o.appendChild(r), o.appendChild(ir(n, "Reset pan and zoom")), { bar: o, picker: r };
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
    const o = j("div", "flex:1;min-height:0;display:flex;flex-direction:column;");
    t.appendChild(o);
    const i = (c) => o.replaceChildren(ae(c));
    return { show: (c) => {
      if (!c) {
        i("Click an edge to see its mapping.");
        return;
      }
      const s = document.createElement("gufe-atom-mapping");
      s.style.cssText = "flex:1;min-width:0;min-height:0;display:flex;", s.payload = yi(c, n), o.replaceChildren(s);
    }, message: i };
  }
  /** Build the SVG for the current node positions. Returns the handles the
   * caller needs afterwards: selection, depictions, and teardown. */
  #r(t, n, o, i, r, c, s, d) {
    const y = ie("svg", { width: i, height: r, style: "display:block;touch-action:none;" }), m = ie("g");
    y.appendChild(m), t.appendChild(y);
    const S = ie("defs"), w = il(S);
    y.appendChild(S);
    const v = [], _ = ie("g"), b = ie("g"), f = ie("g", { "pointer-events": "none" }), g = [], u = [], h = ie("g");
    m.append(_, b, f, h);
    for (const A of o) {
      const T = al(A.score), J = Ho + (A.score ?? 0.5) * (Zc - Ho), Z = ie("line", {
        stroke: P.netHaloColor,
        // Sized from the edge underneath, so a thick edge does not outgrow its
        // own halo and a thin one is not swamped by it.
        "stroke-width": J + tl.padding * 2,
        "stroke-linecap": "round",
        opacity: 0,
        "pointer-events": "none"
      }), L = ie("line", {
        stroke: T,
        "stroke-width": J,
        "stroke-opacity": Qc,
        // A mapping runs from A to B, and the arrow is what says which is which.
        "marker-end": `url(#${w(T)})`,
        "pointer-events": "none"
      }), G = ie("line", { stroke: "transparent", "stroke-width": el, style: "cursor:pointer;" });
      G.addEventListener("click", (R) => {
        R.stopPropagation(), c(A.index);
      }), G.addEventListener("mousemove", (R) => {
        d.show(
          `<div style="font-weight:700;color:${P.titleColor};">${Ne(Ee(A.from))} -&gt; ${Ne(Ee(A.to))}</div>` + (A.score == null ? `<div style="color:${P.textMuted2};">no score</div>` : `<div style="margin-top:4px;">score <b>${A.score.toFixed(3)}</b></div>`) + `<div style="margin-top:4px;font-size:10px;color:${P.textMuted2};">Click to see the mapping</div>`,
          R.offsetX,
          R.offsetY
        );
      }), G.addEventListener("mouseleave", () => d.hide()), v.push(Z), _.append(Z, L), b.appendChild(G);
      const U = ie("rect", {
        fill: P.netLabelBg,
        opacity: A.score == null ? 0 : In.backgroundOpacity,
        rx: 3,
        ry: 3
      }), Y = ie("text", {
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        "font-size": In.fontSize,
        "font-weight": 600,
        fill: P.netEdgeLabel
      });
      Y.textContent = A.score == null ? "" : A.score.toFixed(2);
      const V = ie("g", { class: "gufe-edge-label" });
      V.append(U, Y), f.appendChild(V), g.push(U), u.push(Y);
    }
    const C = [], a = [], l = [], p = n.map((A) => {
      const T = ie("g", { class: "gufe-node", style: "cursor:grab;" });
      T.addEventListener("mousemove", (G) => {
        d.show(
          `<div style="font-weight:700;color:${P.titleColor};">${Ne(Ee(A))}</div>` + (A.smiles ? `<div style="margin-top:3px;font-family:ui-monospace,Menlo,monospace;overflow-wrap:anywhere;">${Ne(A.smiles)}</div>` : "") + `<div style="margin-top:3px;font-size:10px;color:${P.textMuted2};overflow-wrap:anywhere;">${Ne(A["gufe-key"])}</div>`,
          G.offsetX,
          G.offsetY
        );
      }), T.addEventListener("mouseleave", () => d.hide()), T.appendChild(
        ie("circle", {
          r: Qe,
          fill: P.netNodeFill,
          stroke: P.netNodeStroke,
          "stroke-width": 1.5
        })
      );
      const J = ie("g", { class: "gufe-node-depiction", "pointer-events": "none" });
      T.appendChild(J), C.push(J);
      const Z = ie("text", {
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        "font-size": Xc,
        "font-weight": 700,
        fill: P.netInitials,
        "pointer-events": "none"
      });
      Z.textContent = Ee(A).slice(0, 2).toUpperCase(), T.appendChild(Z), a.push(Z);
      const L = ie("text", {
        class: "gufe-node-caption",
        "text-anchor": "middle",
        y: Qe + 14,
        "font-size": 11,
        "font-weight": 600,
        fill: P.netNodeLabel,
        "pointer-events": "none"
      });
      return L.textContent = cl(Ee(A), Yc), L.setAttribute("display", "none"), l.push(L), T.appendChild(L), h.appendChild(T), T;
    }), x = () => {
      u.forEach((A, T) => {
        if (!A.textContent) return;
        let J;
        try {
          J = A.getBBox();
        } catch {
          return;
        }
        const Z = In.padding;
        g[T].setAttribute("x", String(J.x - Z)), g[T].setAttribute("y", String(J.y - Z)), g[T].setAttribute("width", String(J.width + Z * 2)), g[T].setAttribute("height", String(J.height + Z * 2));
      });
    }, E = () => {
      o.forEach((A, T) => {
        for (const Z of [v[T], _.children[T * 2 + 1], b.children[T]]) {
          const L = Z;
          L.setAttribute("x1", String(A.from.x)), L.setAttribute("y1", String(A.from.y)), L.setAttribute("x2", String(A.to.x)), L.setAttribute("y2", String(A.to.y));
        }
        f.children[T].setAttribute(
          "transform",
          `translate(${(A.from.x + A.to.x) / 2},${(A.from.y + A.to.y) / 2 - 8})`
        );
      }), n.forEach((A, T) => p[T].setAttribute("transform", `translate(${A.x},${A.y})`));
    };
    E(), x();
    const N = ll({
      nodes: n,
      captions: l,
      initials: a,
      depictionGroups: C,
      rdkit: () => s,
      viewport: () => ({ width: i, height: r })
    }), z = this.#n(y, m, n, p, E, N.apply);
    return {
      setSelected(A) {
        v.forEach((T, J) => T.setAttribute("opacity", J === A ? "0.95" : "0"));
      },
      /**
       * Dim what is not emphasised rather than hiding it.
       *
       * Asked for directly: you want to see what is *not* selected too, because
       * a filter that removes the rest answers a different question from one
       * that fades it.
       */
      setEmphasis(A, T) {
        p.forEach((J, Z) => {
          const L = !A || A.has(n[Z]["gufe-key"]);
          J.setAttribute("opacity", L ? "1" : String(Dn.node));
        }), o.forEach((J, Z) => {
          const L = !T || T.has(Z), G = L ? "0.9" : String(Dn.edge);
          _.children[Z * 2 + 1].setAttribute("stroke-opacity", G), f.children[Z].setAttribute("opacity", L ? "1" : String(Dn.edge));
        });
      },
      focusOn(A) {
        const T = n[A];
        T && z.centreOn(T.x, T.y);
      },
      setDetail: N.apply,
      depictionsDrawn: () => N.drawn(),
      fit: z.fit,
      reset: z.reset,
      cleanup: z.cleanup
    };
  }
  /** Wheel zoom, background pan, node drag - ~40 lines instead of d3-zoom and
   * d3-drag, and they keep working when d3 is unreachable. */
  #n(t, n, o, i, r, c) {
    let s = 1, d = 0, y = 0;
    const m = () => {
      n.setAttribute("transform", `translate(${d},${y}) scale(${s})`), c(s, d, y);
    }, S = () => {
      const h = t.getBoundingClientRect();
      return {
        width: h.width || Number(t.getAttribute("width")) || t.clientWidth || 800,
        height: h.height || Number(t.getAttribute("height")) || t.clientHeight || 600
      };
    }, w = () => {
      let h = 1 / 0, C = 1 / 0, a = -1 / 0, l = -1 / 0;
      for (const N of o)
        h = Math.min(h, N.x), C = Math.min(C, N.y), a = Math.max(a, N.x), l = Math.max(l, N.y);
      if (s = 1, d = 0, y = 0, !Number.isFinite(h)) {
        m();
        return;
      }
      const p = Qe + nl, { width: x, height: E } = S();
      s = Math.min(1, x / (a - h + p * 2), E / (l - C + p * 2)), d = x / 2 - (h + a) / 2 * s, y = E / 2 - (C + l) / 2 * s, m();
    }, _ = or(t, {
      onZoom: (h) => {
        const C = t.getBoundingClientRect(), a = h.clientX - C.left, l = h.clientY - C.top, p = Math.min(5 / s, Math.max(0.15 / s, Math.exp(-h.deltaY * 2e-3)));
        d = a - (a - d) * p, y = l - (l - y) * p, s *= p, m();
      },
      hint: "Click the graph or hold Ctrl to zoom"
    });
    let b = null;
    const f = (h) => {
      b = { x: h.clientX - d, y: h.clientY - y };
    }, g = (h) => {
      b && (d = h.clientX - b.x, y = h.clientY - b.y, m());
    }, u = () => {
      b = null;
    };
    return t.addEventListener("pointerdown", f), t.addEventListener("pointermove", g), t.addEventListener("pointerup", u), t.addEventListener("pointercancel", u), t.addEventListener("pointerleave", u), i.forEach((h, C) => {
      let a = null;
      h.addEventListener("pointerdown", (p) => {
        p.stopPropagation(), a = { x: p.clientX - o[C].x * s, y: p.clientY - o[C].y * s }, h.setPointerCapture(p.pointerId);
      }), h.addEventListener("pointermove", (p) => {
        a && (o[C].x = o[C].fx = (p.clientX - a.x) / s, o[C].y = o[C].fy = (p.clientY - a.y) / s, r());
      });
      const l = () => {
        a = null;
      };
      h.addEventListener("pointerup", l), h.addEventListener("pointercancel", l);
    }), {
      fit: w,
      // Back to the view it opened on, which is the framed one. An identity
      // transform would be "reset" only in the sense that a blank canvas is.
      reset: w,
      /** Bring a graph point to the middle, zooming in enough to read it. */
      centreOn(h, C) {
        const { width: a, height: l } = S();
        s = Math.max(s, rl), d = a / 2 - h * s, y = l / 2 - C * s, m();
      },
      cleanup() {
        _.cleanup(), t.removeEventListener("pointerdown", f), t.removeEventListener("pointermove", g), t.removeEventListener("pointerup", u), t.removeEventListener("pointercancel", u), t.removeEventListener("pointerleave", u);
      }
    };
  }
}
function ml(e, t, n, o, i) {
  const r = t / 2, c = n / 2, s = (d, y) => {
    d.forEach((m, S) => {
      const w = 2 * Math.PI * S / Math.max(1, d.length) - Math.PI / 2;
      m.x = r + y * Math.cos(w), m.y = c + y * Math.sin(w), m.fx = o === "Force-directed" ? void 0 : m.x, m.fy = o === "Force-directed" ? void 0 : m.y;
    });
  };
  if (o === "Radial" && e.length) {
    const d = new Map(e.map((b) => [b["gufe-key"], []]));
    for (const b of i)
      d.get(b.from["gufe-key"]).push(b.to["gufe-key"]), d.get(b.to["gufe-key"]).push(b.from["gufe-key"]);
    const y = new Map(e.map((b) => [b["gufe-key"], b])), m = e.reduce(
      (b, f) => d.get(f["gufe-key"]).length > d.get(b["gufe-key"]).length ? f : b
    ), S = /* @__PURE__ */ new Set([m["gufe-key"]]);
    let w = [m["gufe-key"]], v = 0;
    const _ = Math.min(t, n) * 0.18;
    for (; w.length; ) {
      s(
        w.map((f) => y.get(f)),
        v === 0 ? 0 : v * _ + 40
      );
      const b = [];
      for (const f of w)
        for (const g of d.get(f))
          S.has(g) || (S.add(g), b.push(g));
      w = b, v++;
    }
    s(e.filter((b) => !S.has(b["gufe-key"])), Math.min(t, n) * 0.45);
    return;
  }
  s(e, Math.min(t, n) * 0.34);
}
async function gl(e, t, n, o) {
  let i;
  try {
    if (i = await di(), typeof i?.forceSimulation != "function") return !1;
  } catch {
    return !1;
  }
  const r = t.map((d) => ({ source: d.from["gufe-key"], target: d.to["gufe-key"], score: d.score })), c = i.forceSimulation(e).force(
    "link",
    i.forceLink(r).id((d) => d["gufe-key"]).distance((d) => $e.linkBaseDistance + (1 - (d.score ?? 0.5)) * $e.linkScoreBonus).strength($e.linkStrength)
  ).force(
    "charge",
    i.forceManyBody().strength($e.chargeStrength).distanceMin($e.chargeDistanceMin).distanceMax($e.chargeDistanceMax)
  ).force("center", i.forceCenter(n / 2, o / 2).strength($e.centerStrength)).force("collision", i.forceCollide(Qe + $e.collisionPadding).iterations($e.collisionIterations)).force("x", i.forceX(n / 2).strength($e.drift)).force("y", i.forceY(o / 2).strength($e.drift)).stop(), s = Math.ceil(Math.log(c.alphaMin()) / Math.log(1 - c.alphaDecay()));
  for (let d = 0; d < s * $e.tickMultiplier; d++) c.tick();
  return !0;
}
Ce("gufe-ligand-network", hl);
const st = { width: 148, height: 46, radius: 10 }, Xe = {
  linkDistance: 220,
  linkStrength: 0.4,
  chargeStrength: -1200,
  collisionRadius: 110,
  collisionIterations: 3,
  tickMultiplier: 2
}, at = et;
function yl(e, t) {
  return e.length > t ? `${e.slice(0, t - 1)}...` : e;
}
function vl(e, t, n) {
  const o = Math.max(90, Math.min(t, n) * 0.36);
  e.forEach((i, r) => {
    const c = 2 * Math.PI * r / Math.max(1, e.length) - Math.PI / 2;
    i.x = t / 2 + o * Math.cos(c), i.y = n / 2 + o * Math.sin(c);
  });
}
async function $l(e, t, n, o) {
  let i;
  try {
    if (i = await di(), typeof i?.forceSimulation != "function") return !1;
  } catch {
    return !1;
  }
  const r = t.map((d) => ({ source: d.from["gufe-key"], target: d.to["gufe-key"] })), c = i.forceSimulation(e).force(
    "link",
    i.forceLink(r).id((d) => d["gufe-key"]).distance(Xe.linkDistance).strength(Xe.linkStrength)
  ).force("charge", i.forceManyBody().strength(Xe.chargeStrength)).force("center", i.forceCenter(n / 2, o / 2)).force("collision", i.forceCollide(Xe.collisionRadius).iterations(Xe.collisionIterations)).stop(), s = Math.ceil(Math.log(c.alphaMin()) / Math.log(1 - c.alphaDecay()));
  for (let d = 0; d < s * Xe.tickMultiplier; d++) c.tick();
  return !0;
}
class bl extends Se {
  placeholder() {
    return "Waiting for an AlchemicalNetwork payload...";
  }
  renderView(t, n) {
    const o = dt(n), i = [];
    let r = 0;
    for (const l of n.nodes ?? []) {
      const p = Ae(o, l, "ChemicalSystemViz");
      if (!p) {
        r++;
        continue;
      }
      i.push({ ...p, x: 0, y: 0 });
    }
    const c = new Map(i.map((l) => [l["gufe-key"], l])), s = [];
    let d = 0;
    for (const l of n.edges ?? []) {
      const p = c.get(l.stateA), x = c.get(l.stateB);
      if (!p || !x) {
        d++;
        continue;
      }
      s.push({ ...l, index: s.length, from: p, to: x });
    }
    const y = (l) => {
      const p = Ae(o, l.protocol, "ProtocolViz");
      return p?.gufe_type || p?.name || "";
    }, m = new Set(s.map(y).filter(Boolean)), S = Te(n.name || "Alchemical network", "AlchemicalNetwork");
    S.statsEl.appendChild(ce("systems", String(i.length))), S.statsEl.appendChild(ce("transformations", String(s.length))), m.size && S.statsEl.appendChild(ce("protocol", [...m].join(", "))), t.appendChild(S);
    const w = j("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    t.appendChild(w);
    const v = j("div", `flex:1 1 62%;min-width:0;position:relative;overflow:hidden;background:${P.netCanvasBg};`);
    w.appendChild(v), w.appendChild(j("div", `width:1px;flex-shrink:0;background:${P.splitBorder};`));
    const _ = j("div", `flex:1 1 38%;min-width:0;display:flex;flex-direction:column;background:${P.appBg};`);
    w.appendChild(_);
    const b = this.#t(_, o, y);
    if (!i.length)
      return v.appendChild(
        ae(
          r ? "None of this network's chemical systems are in its registry." : "This network has no chemical systems."
        )
      ), b.message("Nothing to show."), {};
    r && qe(
      v,
      `${r} chemical system${r === 1 ? "" : "s"} named by this network are not in its registry`
    ), d && qe(
      v,
      `${d} transformation${d === 1 ? "" : "s"} name a system this network does not contain`
    );
    let f = !0, g = !1, u = null, h = () => {
    };
    const C = (l, p) => {
      u = { kind: l, index: p }, b.show(l === "node" ? i[p] : s[p], l), h();
    }, a = () => {
      v.querySelector("svg")?.remove();
      const l = v.clientWidth || 800, p = v.clientHeight || 600;
      vl(i, l, p);
      const x = () => {
        if (!f) return;
        const E = this.#e(v, i, s, l, p, C);
        h = () => E.setSelected(u), h();
      };
      if (g) {
        x();
        return;
      }
      $l(i, s, l, p).then((E) => {
        f && (E || (g = !0, qe(v, "d3 could not be loaded - showing the circular layout instead")), x());
      }, x);
    };
    return a(), C("node", 0), {
      onResize: () => a(),
      cleanup: () => {
        f = !1;
      }
    };
  }
  /** The right-hand pane: what the selected system or transformation is. */
  #t(t, n, o) {
    t.appendChild(
      j(
        "div",
        `flex-shrink:0;padding:4px 10px;font-size:12px;font-weight:bold;color:${P.labelFg};background:${P.labelBg};`,
        "Selected"
      )
    );
    const i = j("div", "flex:1;min-height:0;overflow:auto;display:flex;flex-direction:column;");
    t.appendChild(i);
    const r = (d) => i.replaceChildren(ae(d)), c = (d, y) => {
      const m = j(
        "div",
        `padding:10px 14px;border-bottom:1px solid ${P.toolbarBorder};display:flex;flex-direction:column;gap:4px;`
      );
      return m.appendChild(j("div", `font-size:13px;font-weight:600;color:${P.textPrimary};`, d)), m.appendChild(j("div", `font-size:11px;color:${P.textMuted2};`, y)), m;
    };
    return { show: (d, y) => {
      if (i.replaceChildren(), y === "node") {
        const w = d;
        i.appendChild(c(at(w), "ChemicalSystem"));
        const v = j("div", "display:flex;flex-direction:column;gap:6px;padding:12px 14px;"), _ = Object.entries(w.components ?? {});
        for (const [b, f] of _) {
          const g = Le(n, f), u = j(
            "div",
            `display:flex;align-items:center;gap:8px;padding:7px 10px;border-radius:8px;min-width:0;background:${P.cardBg};border:1px solid ${P.cardBorder};`
          );
          u.appendChild(j("span", `font-size:12px;font-weight:700;color:${P.textPrimary};`, b)), u.appendChild(
            j(
              "span",
              `font-size:11px;color:${P.textMuted};overflow-wrap:anywhere;min-width:0;`,
              g ? g.name || "(unnamed)" : "(not in the registry)"
            )
          );
          const h = lt(
            g ? g.type === "UnknownComponentViz" ? g.gufe_type : g.type.replace(/Viz$/, "") : "missing"
          );
          h.style.marginLeft = "auto", u.appendChild(h), v.appendChild(u);
        }
        _.length || v.appendChild(j("div", `font-size:12px;color:${P.textMuted2};`, "This system lists no components.")), i.appendChild(v), i.appendChild(
          j(
            "div",
            `padding:0 14px 12px;font-size:11px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;color:${P.textMuted2};overflow-wrap:anywhere;`,
            w["gufe-key"]
          )
        );
        return;
      }
      const m = d;
      i.appendChild(c(m.name || "Unnamed transformation", "Transformation"));
      const S = j("div", "display:flex;flex-direction:column;gap:8px;padding:12px 14px;");
      for (const [w, v] of [
        ["State A", at(m.from)],
        ["State B", at(m.to)],
        ["Protocol", o(m) || "-"]
      ]) {
        const _ = j("div", "display:flex;gap:10px;align-items:baseline;min-width:0;");
        _.appendChild(
          j(
            "span",
            `flex:0 0 76px;font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:${P.textMuted2};`,
            w
          )
        ), _.appendChild(j("span", `flex:1;min-width:0;font-size:12px;color:${P.textPrimary};overflow-wrap:anywhere;`, v)), S.appendChild(_);
      }
      i.appendChild(S), i.appendChild(
        j(
          "div",
          `padding:0 14px 12px;font-size:11px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;color:${P.textMuted2};overflow-wrap:anywhere;`,
          m["gufe-key"]
        )
      );
    }, message: r };
  }
  /** Build the SVG for the current positions, and hand back the selection hook. */
  #e(t, n, o, i, r, c) {
    const s = ie("svg", { width: i, height: r, style: "display:block;" });
    t.appendChild(s);
    const d = ie("g"), y = ie("g");
    s.append(d, y);
    const m = [];
    o.forEach((w, v) => {
      const _ = ie("line", {
        x1: w.from.x,
        y1: w.from.y,
        x2: w.to.x,
        y2: w.to.y,
        stroke: P.netEdgeLine,
        "stroke-width": 2,
        "stroke-linecap": "round",
        style: "cursor:pointer;"
      });
      hn(_, w.name || "transformation"), _.addEventListener("click", () => c("edge", v)), d.appendChild(_), m.push(_);
      const b = ie("line", {
        x1: w.from.x,
        y1: w.from.y,
        x2: w.to.x,
        y2: w.to.y,
        stroke: "transparent",
        "stroke-width": 16,
        style: "cursor:pointer;"
      });
      b.addEventListener("click", () => c("edge", v)), d.appendChild(b);
    });
    const S = [];
    return n.forEach((w, v) => {
      const _ = ie("g", { style: "cursor:pointer;" }), b = ie("rect", {
        x: w.x - st.width / 2,
        y: w.y - st.height / 2,
        width: st.width,
        height: st.height,
        rx: st.radius,
        fill: P.cardBg,
        stroke: P.cardBorder,
        "stroke-width": 2
      });
      _.appendChild(b), S.push(b);
      const f = ie("text", {
        x: w.x,
        y: w.y - 2,
        "text-anchor": "middle",
        fill: P.netNodeLabel,
        "font-size": 12,
        "font-weight": 700,
        "font-family": "ui-sans-serif,system-ui,sans-serif"
      });
      f.textContent = yl(at(w), 20), _.appendChild(f);
      const g = Object.keys(w.components ?? {}).length, u = ie("text", {
        x: w.x,
        y: w.y + 14,
        "text-anchor": "middle",
        fill: P.netInitials,
        "font-size": 10,
        "font-family": "ui-sans-serif,system-ui,sans-serif"
      });
      u.textContent = `${g} component${g === 1 ? "" : "s"}`, _.appendChild(u), hn(_, at(w)), _.addEventListener("click", () => c("node", v)), y.appendChild(_);
    }), {
      setSelected(w) {
        S.forEach((v, _) => {
          const b = w?.kind === "node" && w.index === _;
          v.setAttribute("stroke", b ? P.cardBorderActive : P.cardBorder), v.setAttribute("stroke-width", b ? "3" : "2");
        }), m.forEach((v, _) => {
          const b = w?.kind === "edge" && w.index === _;
          v.setAttribute("stroke", b ? P.netHaloColor : P.netEdgeLine), v.setAttribute("stroke-width", b ? "4" : "2");
        });
      }
    };
  }
}
Ce("gufe-alchemical-network", bl);
function wl(e) {
  return e.name || e.type.replace(/Viz$/, "");
}
function _l(e) {
  return e.type === "UnknownComponentViz" ? e.gufe_type : e.type.replace(/Viz$/, "");
}
class Sl extends Se {
  placeholder() {
    return "Waiting for a ChemicalSystem payload...";
  }
  renderView(t, n) {
    const o = dt(n), i = [], r = [];
    for (const [_, b] of Object.entries(n.components ?? {})) {
      const f = Le(o, b);
      f ? i.push([_, f]) : r.push(_);
    }
    const c = Te(n.name || "Chemical system", "ChemicalSystem");
    if (c.statsEl.appendChild(ce("components", String(i.length))), t.appendChild(c), !i.length)
      return t.appendChild(
        ae(
          r.length ? "None of this system's components are in its registry." : "This chemical system has no components."
        )
      ), {};
    const s = j("div", "flex:1;min-height:0;position:relative;display:flex;flex-direction:row;");
    t.appendChild(s), r.length && qe(
      s,
      `${r.length} component${r.length === 1 ? "" : "s"} named by this system (${r.join(", ")}) are not in its registry`
    );
    const d = j(
      "div",
      `flex:0 0 220px;min-width:0;overflow:auto;display:flex;flex-direction:column;gap:6px;padding:10px;background:${P.panelBg};border-right:1px solid ${P.splitBorder};`
    );
    s.appendChild(d);
    const y = j("div", "flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;");
    s.appendChild(y);
    const m = j("div", "flex:1;min-height:0;display:flex;");
    y.appendChild(m);
    const S = document.createElement("gufe-view");
    S.style.cssText = "flex:1;min-width:0;min-height:0;", m.appendChild(S);
    const w = [], v = (_) => {
      w.forEach((b, f) => {
        const g = f === _;
        b.style.background = g ? P.cardBgActive : P.cardBg, b.style.borderColor = g ? P.cardBorderActive : P.cardBorder;
      }), S.payload = i[_][1];
    };
    return i.forEach(([_, b], f) => {
      const g = j(
        "button",
        `display:flex;flex-direction:column;align-items:flex-start;gap:4px;padding:8px 10px;text-align:left;border:1px solid ${P.cardBorder};border-radius:8px;background:${P.cardBg};cursor:pointer;font-family:inherit;font-size:12px;width:100%;`
      );
      g.appendChild(j("span", `font-weight:700;color:${P.textPrimary};`, _)), g.appendChild(j("span", `font-size:11px;color:${P.textMuted};`, wl(b))), g.appendChild(lt(_l(b))), g.onclick = () => v(f), w.push(g), d.appendChild(g);
    }), v(0), {
      onResize: () => S.resize?.(),
      // Removing the nested view fires its own `disconnectedCallback`, which is
      // where whatever it mounted releases its viewers.
      cleanup: () => S.remove()
    };
  }
}
Ce("gufe-chemical-system", Sl);
class Cl extends Se {
  placeholder() {
    return "Waiting for a Protocol payload...";
  }
  renderView(t, n) {
    const o = Te(n.gufe_type || n.name || "Protocol", "Protocol");
    o.statsEl.appendChild(lt(n.gufe_type)), t.appendChild(o);
    const i = j(
      "div",
      "flex:1;min-height:0;overflow:auto;display:flex;align-items:center;justify-content:center;padding:24px;"
    );
    t.appendChild(i);
    const r = un();
    return r.style.maxWidth = "460px", r.appendChild(Pe("gufe class", n.gufe_type, !0)), n.name && r.appendChild(Pe("Name", n.name)), r.appendChild(Pe("gufe key", n["gufe-key"], !0)), r.appendChild(
      j(
        "div",
        `padding-top:10px;font-size:11px;line-height:1.6;color:${P.textMuted2};`,
        "A Protocol's settings are not carried in this payload: they are large, deeply nested, and nothing draws them yet."
      )
    ), i.appendChild(r), {};
  }
}
Ce("gufe-protocol", Cl);
const _e = { width: 340, height: 260, padding: 14, radius: 12 }, kl = 150, xl = 40, El = 24;
function Pl(e) {
  let t = e >>> 0;
  return () => (t = t * 1664525 + 1013904223 >>> 0, t / 4294967296);
}
function Al(e) {
  const t = /-?\d+(\.\d+)?([eE][-+]?\d+)?/.exec(e ?? "");
  if (!t) return null;
  const n = Number(t[0]);
  return Number.isFinite(n) ? n : null;
}
function Rl(e) {
  return e == null || e <= 0 ? 0 : Math.max(1, Math.min(El, Math.round(e * xl)));
}
function Ml(e) {
  const t = ie("svg", {
    viewBox: `0 0 ${_e.width} ${_e.height}`,
    style: "width:100%;height:100%;max-width:100%;",
    role: "img"
  });
  hn(t, `${e.smiles || "solvent"} box`), t.appendChild(
    ie("rect", {
      x: 1,
      y: 1,
      width: _e.width - 2,
      height: _e.height - 2,
      rx: _e.radius,
      fill: P.boxFill,
      stroke: P.boxStroke,
      "stroke-width": 1.5
    })
  );
  const n = Pl(1597463007), o = () => ({
    x: _e.padding + n() * (_e.width - 2 * _e.padding),
    y: _e.padding + n() * (_e.height - 2 * _e.padding)
  });
  for (let c = 0; c < kl; c++) {
    const { x: s, y: d } = o();
    t.appendChild(ie("circle", { cx: s, cy: d, r: 2.4, fill: P.textMuted2, "fill-opacity": 0.45 }));
  }
  const i = Rl(Al(e.ion_concentration)), r = [
    [e.positive_ion, P.diffAdded],
    [e.negative_ion, P.diffRemoved]
  ];
  for (const [c, s] of r)
    for (let d = 0; d < i; d++) {
      const { x: y, y: m } = o(), S = ie("circle", { cx: y, cy: m, r: 5.5, fill: s, "fill-opacity": 0.85 });
      t.appendChild(hn(S, c));
    }
  return t;
}
class Fl extends Se {
  placeholder() {
    return "Waiting for a SolventComponent payload...";
  }
  renderView(t, n) {
    const o = Te(n.name || "Solvent", "SolventComponent");
    o.statsEl.appendChild(ce("neutralized", n.neutralize ? "yes" : "no")), o.statsEl.appendChild(ce(n.positive_ion, "", P.diffAdded)), o.statsEl.appendChild(ce(n.negative_ion, "", P.diffRemoved)), t.appendChild(o);
    const i = j(
      "div",
      "flex:1;min-height:0;display:flex;flex-wrap:wrap;gap:16px;padding:16px;overflow:auto;align-items:flex-start;"
    );
    t.appendChild(i);
    const r = un();
    r.style.flex = "1 1 320px", r.appendChild(Pe("SMILES", n.smiles, !0)), r.appendChild(Pe("Positive ion", n.positive_ion)), r.appendChild(Pe("Negative ion", n.negative_ion)), r.appendChild(Pe("Ion concentration", n.ion_concentration)), r.appendChild(Pe("Neutralize", n.neutralize ? "yes" : "no")), i.appendChild(r);
    const c = un();
    return c.style.flex = "1 1 340px", c.style.alignItems = "center", c.appendChild(Ml(n)), c.appendChild(
      j(
        "div",
        `padding-top:10px;font-size:11px;text-align:center;color:${P.textMuted2};`,
        "Schematic only: the dots show which ions are present, not how many."
      )
    ), i.appendChild(c), {};
  }
}
Ce("gufe-solvent", Fl);
const Un = {
  unchanged: P.diffUnchanged,
  changed: P.diffChanged,
  added: P.diffAdded,
  removed: P.diffRemoved
};
function Nl(e, t) {
  return e && !t ? "removed" : !e && t ? "added" : e === t ? "unchanged" : "changed";
}
function jl(e, t) {
  return [.../* @__PURE__ */ new Set([...Object.keys(e.components ?? {}), ...Object.keys(t.components ?? {})])].sort();
}
function Ol(e) {
  if (!e) return null;
  const t = e.type === "UnknownComponentViz" ? e.gufe_type : e.type.replace(/Viz$/, "");
  return { name: e.name || "(unnamed)", type: t };
}
function Yo(e, t) {
  const n = j(
    "div",
    `flex:1 1 50%;min-width:0;display:flex;flex-direction:column;gap:4px;padding:8px 10px;border-radius:8px;background:${P.cardBg};border:1px solid ${P.cardBorder};`
  ), o = Ol(e);
  return o ? (n.style.borderColor = t === "unchanged" ? P.cardBorder : Un[t], n.appendChild(j("span", `font-size:12px;font-weight:600;color:${P.textPrimary};`, o.name)), n.appendChild(lt(o.type)), n) : (n.style.background = "transparent", n.style.borderStyle = "dashed", n.appendChild(j("span", `font-size:12px;color:${P.textMuted2};`, "absent")), n);
}
function Tl(e, t) {
  const n = Le(t, e.componentA), o = Le(t, e.componentB);
  return `${n ? et(n) : "A"} to ${o ? et(o) : "B"}`;
}
class zl extends Se {
  placeholder() {
    return "Waiting for a Transformation payload...";
  }
  renderView(t, n) {
    const o = dt(n), i = Ae(o, n.stateA, "ChemicalSystemViz"), r = Ae(o, n.stateB, "ChemicalSystemViz"), c = Ae(o, n.protocol, "ProtocolViz"), s = n.mappings ?? [], d = Te(n.name || "Transformation", "Transformation");
    if (d.statsEl.appendChild(ce("protocol", c?.gufe_type || c?.name || "-")), d.statsEl.appendChild(ce("mappings", String(s.length))), t.appendChild(d), !i || !r)
      return t.appendChild(
        ae("This transformation names two chemical systems, and its registry does not hold them.")
      ), {};
    const y = jl(i, r), m = j("div", "flex:0 0 auto;max-height:45%;overflow:auto;padding:12px 14px;");
    t.appendChild(m);
    const S = j("div", "display:flex;gap:10px;padding:0 0 6px 120px;");
    for (const [f, g] of [
      ["State A", i],
      ["State B", r]
    ])
      S.appendChild(
        j(
          "div",
          `flex:1 1 50%;min-width:0;font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:${P.textMuted2};`,
          `${f}${g.name ? ` - ${g.name}` : ""}`
        )
      );
    m.appendChild(S);
    for (const f of y) {
      const g = i.components?.[f], u = r.components?.[f], h = Nl(g, u), C = Le(o, g), a = Le(o, u), l = j("div", "display:flex;align-items:stretch;gap:10px;padding:4px 0;"), p = j("div", "flex:0 0 110px;display:flex;align-items:center;gap:6px;min-width:0;");
      p.appendChild(
        j("span", `width:8px;height:8px;border-radius:50%;flex-shrink:0;background:${Un[h]};`)
      );
      const x = j("span", `font-size:12px;font-weight:700;color:${P.textPrimary};overflow-wrap:anywhere;`, f);
      x.title = h, p.appendChild(x), l.appendChild(p), l.appendChild(Yo(C, h)), l.appendChild(Yo(a, h)), m.appendChild(l);
    }
    const w = j(
      "div",
      `display:flex;flex-wrap:wrap;gap:12px;padding:8px 0 0;font-size:11px;color:${P.textMuted};`
    );
    for (const f of ["unchanged", "changed", "added", "removed"])
      w.appendChild(ce(f, "", Un[f]));
    m.appendChild(w);
    const v = j(
      "div",
      `flex-shrink:0;padding:4px 10px;font-size:12px;font-weight:bold;color:${P.labelFg};background:${P.labelBg};`,
      "Atom mapping"
    );
    if (t.appendChild(v), !s.length)
      return t.appendChild(
        ae(
          "This transformation carries no atom mapping - nothing here maps one small molecule onto another."
        )
      ), {};
    const _ = document.createElement("gufe-atom-mapping");
    _.style.cssText = "flex:1;min-height:0;min-width:0;";
    const b = (f) => {
      _.payload = yi(s[f], o);
    };
    if (b(0), s.length > 1) {
      const f = j(
        "div",
        `display:flex;align-items:center;gap:8px;padding:6px 10px;flex-shrink:0;font-size:11px;background:${P.toolbarBg};border-bottom:1px solid ${P.toolbarBorder};color:${P.textMuted};`
      );
      f.appendChild(
        mn(
          s.map((g, u) => ({
            id: String(u),
            label: g.name || Tl(g, o)
          })),
          "0",
          (g) => b(Number(g))
        )
      ), t.appendChild(f);
    }
    return t.appendChild(_), {
      onResize: () => _.resize?.(),
      cleanup: () => _.remove()
    };
  }
}
Ce("gufe-transformation", zl);
class Il extends Se {
  placeholder() {
    return "Waiting for a component payload...";
  }
  renderView(t, n) {
    const o = Te(n.name || "Unnamed component", "Component");
    o.statsEl.appendChild(lt(n.gufe_type)), t.appendChild(o);
    const i = j("div", "flex:1;min-height:0;overflow:auto;display:flex;align-items:center;justify-content:center;padding:24px;");
    t.appendChild(i);
    const r = un();
    return r.style.maxWidth = "460px", r.appendChild(
      j(
        "div",
        `font-size:14px;font-weight:600;padding-bottom:6px;color:${P.textPrimary};`,
        `There is no visualization for ${n.gufe_type}.`
      )
    ), r.appendChild(
      j(
        "div",
        `font-size:12px;line-height:1.6;padding-bottom:10px;color:${P.textMuted};`,
        "gufe lets a project define its own Component subclasses, so this is a component this build has never been taught to draw - not a broken payload. Everything gufe knows about it that survives serialization is below."
      )
    ), r.appendChild(Pe("Name", n.name || "(unnamed)")), r.appendChild(Pe("gufe class", n.gufe_type, !0)), i.appendChild(r), {};
  }
}
Ce("gufe-unknown-component", Il);
function Kl(e, t) {
  let n = e.querySelector("gufe-view");
  return n || (n = document.createElement("gufe-view"), n.style.cssText = "display:block;width:100%;height:100%;", e.appendChild(n)), t !== void 0 && (n.payload = t), n;
}
export {
  bi as CHROME_OPEN_BY_DEFAULT,
  Ci as DEBUG_ATTRIBUTE,
  ki as DEBUG_GLOBAL,
  yc as DEFAULT_ZOOM_BOUNDS,
  bl as GufeAlchemicalNetwork,
  Hc as GufeAtomMapping,
  Sl as GufeChemicalSystem,
  Se as GufeElement,
  hl as GufeLigandNetwork,
  Ic as GufeProtein,
  Cl as GufeProtocol,
  Ac as GufeSmallMolecule,
  Fl as GufeSolvent,
  zl as GufeTransformation,
  Il as GufeUnknownComponent,
  fc as GufeView,
  ct as MAPPING_COLORS,
  Ll as MAPPING_RAMP_3D,
  Ul as MAPPING_RAMP_NAME,
  Dl as PAYLOAD_TYPES,
  ql as SCHEMA_TYPES,
  Qn as VIEW_TAGS,
  Vc as applyRT,
  vc as boundedZoom,
  dt as buildRegistry,
  _i as chromeMenu,
  Pi as debugEnabled,
  Ce as defineElement,
  ci as describeProblem,
  Nl as diffStatus,
  Bl as dispatchProblem,
  et as entryLabel,
  dc as formatIssues,
  or as guardWheel,
  qc as kabsch,
  Gc as liftFor,
  Ri as logPayload,
  Le as lookup,
  Ae as lookupOfType,
  yi as mappingPayloadFor,
  Kl as mount,
  Al as parseConcentration,
  Ai as payloadJson,
  ir as resetControl,
  dl as selectionText,
  Ko as uniqueAtoms,
  Vl as validateAs,
  lc as validatePayload,
  ui as viewerInteraction,
  bc as wheelFactor
};
