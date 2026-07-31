const Nr = {
  dark: {
    appBg: "#1a1a2e",
    panelBg: "#16213e",
    cardBorder: "#2a4a7f",
    splitBorder: "#2a4a7f",
    toolbarBg: "#16213e",
    toolbarBorder: "#2a4a7f",
    titleColor: "#7ecfff",
    textPrimary: "#e6f3ff",
    textMuted: "#9bb8d6",
    textMuted2: "#7a96b8",
    selectBg: "#0f3460",
    selectBorder: "#2a4a7f",
    labelBg: "#16213e",
    labelFg: "#7ecfff",
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
    netCanvasBg: "#1a1a2e",
    netNodeFill: "#16213e",
    netNodeStroke: "#2a4a7f",
    netNodeLabel: "#cfe6ff",
    netInitials: "#7ecfff",
    netEdgeRamp: ["#3a4a6a", "#7ecfff"],
    netEdgeLabel: "#cfe6ff",
    netHaloColor: "#ff79c6"
  },
  light: {
    appBg: "#ffffff",
    panelBg: "#f8fafc",
    cardBorder: "#e2e8f0",
    splitBorder: "#e2e8f0",
    toolbarBg: "#f8fafc",
    toolbarBorder: "#e2e8f0",
    titleColor: "#0369a1",
    textPrimary: "#1e293b",
    textMuted: "#475569",
    textMuted2: "#64748b",
    selectBg: "#ffffff",
    selectBorder: "#cbd5e1",
    labelBg: "#f0f4fa",
    labelFg: "#1a4a8a",
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
    netCanvasBg: "#ffffff",
    netNodeFill: "#ffffff",
    netNodeStroke: "#ffffff",
    netNodeLabel: "#334155",
    netInitials: "#0369a1",
    netEdgeRamp: ["#cbd5e1", "#0f766e"],
    netEdgeLabel: "#334155",
    netHaloColor: "#fbcfe8"
  }
};
function Ia() {
  try {
    return globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches ?? !1;
  } catch {
    return !1;
  }
}
const z = Ia() ? Nr.dark : Nr.light;
function F(e, t, o) {
  const a = document.createElement(e);
  return t && (a.style.cssText = t), o != null && (a.textContent = o), a;
}
function He(e) {
  return String(e ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function _e(e) {
  if (e == null) return "unknown error";
  const t = e.message;
  if (typeof t == "string" && t) return t;
  const o = String(e);
  return o === "[object Object]" ? e.name || "unknown error" : o;
}
const Ve = (e) => e.toLocaleString("en-US"), ke = "—", gr = `background:${z.btnBg};color:${z.btnFg};border:1px solid ${z.btnBorder};padding:4px 9px;font-size:11px;font-weight:bold;border-radius:3px;cursor:pointer;font-family:inherit;`, ma = `background:${z.selectBg};color:${z.textPrimary};border:1px solid ${z.selectBorder};border-radius:6px;padding:4px 8px;font-size:12px;cursor:pointer;font-family:inherit;`;
function ya(e, t, o) {
  const a = F("div", "display:flex;gap:4px;"), h = e.map((r) => {
    const i = F("button", gr, r.label);
    return i.title = r.title || r.label, i.onmouseover = () => {
      i.style.background = z.btnBgHover;
    }, i.onmouseout = () => {
      i.style.background = t === r.id ? z.btnBgActive : z.btnBg;
    }, i.onclick = () => {
      a.setActive(r.id), o(r.id);
    }, a.appendChild(i), { id: r.id, btn: i };
  });
  return a.setActive = (r) => {
    t = r, h.forEach((i) => {
      i.btn.style.background = i.id === t ? z.btnBgActive : z.btnBg;
    });
  }, a.setActive(t), a;
}
function Te(e, t, o) {
  const a = F("span", "display:inline-flex;align-items:center;gap:5px;white-space:nowrap;");
  o && a.appendChild(
    F("span", `width:8px;height:8px;border-radius:50%;background:${o};display:inline-block;`)
  );
  const h = F("span");
  return h.innerHTML = `${He(e)} <b style="color:${z.textPrimary};">${He(t)}</b>`, a.appendChild(h), a;
}
function jr(e, t) {
  const o = F("div", "", `⚠ ${t}`);
  return o.style.cssText = `position:absolute;top:10px;left:50%;transform:translateX(-50%);max-width:90%;z-index:20;padding:6px 14px;border-radius:6px;font-size:12px;background:${z.warnBg};color:${z.warnFg};border:1px solid ${z.warnBorder};`, e.appendChild(o), o;
}
function ce(e, t = !1) {
  return F(
    "div",
    `flex:1;display:flex;align-items:center;justify-content:center;text-align:center;padding:24px;font-size:13px;color:${t ? z.errorFg : z.textMuted2};`,
    e
  );
}
function ga(e, t) {
  const o = F(
    "div",
    `display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;padding:9px 14px;flex-shrink:0;background:${z.toolbarBg};border-bottom:1px solid ${z.toolbarBorder};`
  );
  return o.titleEl = F("span", `font-weight:700;font-size:15px;color:${z.titleColor};letter-spacing:.02em;`, e), o.subtitleEl = F("span", `font-size:12px;color:${z.textMuted2};`, t || ""), o.statsEl = F(
    "div",
    `display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-left:auto;font-size:11px;color:${z.textMuted};`
  ), o.appendChild(o.titleEl), o.appendChild(o.subtitleEl), o.appendChild(o.statsEl), o;
}
function va() {
  const e = F("div", "flex:1;position:relative;min-height:0;min-width:0;"), t = F("div", "position:absolute;inset:0;");
  return e.appendChild(t), { wrap: e, container: t };
}
const qa = 150;
class Kt extends HTMLElement {
  #r = null;
  #e = null;
  #n = null;
  #t = null;
  #a = null;
  /**
   * Bumped by every teardown. A render captures it and refuses to adopt its
   * handle if it has moved on — which is what stops a slow view (3Dmol behind a
   * CDN fetch) from installing itself into an element that has since been given
   * a different payload, or removed from the document entirely.
   */
  #o = 0;
  /** The message shown before any payload arrives. */
  placeholder() {
    return "Waiting for data…";
  }
  set payload(t) {
    this.#r = t, this.isConnected && this.#i();
  }
  get payload() {
    return this.#r;
  }
  connectedCallback() {
    this.style.display = "block", this.style.width = this.style.width || "100%", this.style.height = this.style.height || "100%", this.style.background = z.appBg, this.style.color = z.textPrimary, this.style.fontFamily = "'Inter',system-ui,sans-serif", typeof ResizeObserver < "u" && !this.#t && (this.#t = new ResizeObserver(() => {
      this.#a && clearTimeout(this.#a), this.#a = setTimeout(() => this.#e?.onResize?.(), qa);
    }), this.#t.observe(this)), this.#i();
  }
  disconnectedCallback() {
    this.#s(), this.#t?.disconnect(), this.#t = null;
  }
  /** Release whatever the mounted view owns and empty the element. */
  #s() {
    if (this.#o++, this.#a && (clearTimeout(this.#a), this.#a = null), this.#e?.cleanup)
      try {
        this.#e.cleanup();
      } catch (t) {
        console.warn("[gufe-viz] cleanup failed:", t);
      }
    this.#e = null, this.replaceChildren(), this.#n = null;
  }
  /** Tear the mounted view down and hand back a fresh, empty shell. */
  #d() {
    return this.#s(), this.#n = F(
      "div",
      `width:100%;height:100%;display:flex;flex-direction:column;overflow:hidden;background:${z.appBg};`
    ), this.appendChild(this.#n), this.#n;
  }
  /**
   * Build the view for the current payload.
   *
   * Deliberately *not* an `async` method. A synchronous `renderView` — which is
   * what both Phase 1 views are — must install its handle before this returns,
   * or two `payload` assignments in a row would tear down nothing the first
   * time and leak the first view's viewer. An `await` here would defer that
   * assignment by a microtask and do exactly that.
   */
  #i() {
    const t = this.#d(), o = this.#o;
    if (this.#r == null) {
      t.appendChild(ce(this.placeholder()));
      return;
    }
    let a;
    try {
      a = this.renderView(t, this.#r);
    } catch (h) {
      this.#l(t, o, h);
      return;
    }
    a instanceof Promise ? a.then(
      (h) => this.#c(h, o),
      (h) => this.#l(t, o, h)
    ) : this.#c(a, o);
  }
  /** Take ownership of a view's handle, unless it belongs to a dead render. */
  #c(t, o) {
    if (o !== this.#o || !this.isConnected) {
      try {
        t?.cleanup?.();
      } catch (a) {
        console.warn("[gufe-viz] cleanup of a superseded view failed:", a);
      }
      return;
    }
    this.#e = t || null;
  }
  #l(t, o, a) {
    o === this.#o && (console.warn("[gufe-viz] render failed:", a), t.replaceChildren(ce(`Failed to render: ${_e(a)}`, !0)));
  }
  /** Force a resize pass — for hosts that know they resized us. */
  resize() {
    this.#e?.onResize?.();
  }
}
function Ht(e, t) {
  typeof customElements > "u" || customElements.get(e) || customElements.define(e, t);
}
function Da(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ge = { exports: {} }, rr = {}, be = {}, Re = {}, nr = {}, ar = {}, or = {}, Or;
function Ft() {
  return Or || (Or = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.regexpCode = e.getEsmExportName = e.getProperty = e.safeStringify = e.stringify = e.strConcat = e.addCodeArg = e.str = e._ = e.nil = e._Code = e.Name = e.IDENTIFIER = e._CodeOrName = void 0;
    class t {
    }
    e._CodeOrName = t, e.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
    class o extends t {
      constructor(c) {
        if (super(), !e.IDENTIFIER.test(c))
          throw new Error("CodeGen: name must be a valid identifier");
        this.str = c;
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
    e.Name = o;
    class a extends t {
      constructor(c) {
        super(), this._items = typeof c == "string" ? [c] : c;
      }
      toString() {
        return this.str;
      }
      emptyStr() {
        if (this._items.length > 1)
          return !1;
        const c = this._items[0];
        return c === "" || c === '""';
      }
      get str() {
        var c;
        return (c = this._str) !== null && c !== void 0 ? c : this._str = this._items.reduce((p, $) => `${p}${$}`, "");
      }
      get names() {
        var c;
        return (c = this._names) !== null && c !== void 0 ? c : this._names = this._items.reduce((p, $) => ($ instanceof o && (p[$.str] = (p[$.str] || 0) + 1), p), {});
      }
    }
    e._Code = a, e.nil = new a("");
    function h(m, ...c) {
      const p = [m[0]];
      let $ = 0;
      for (; $ < c.length; )
        l(p, c[$]), p.push(m[++$]);
      return new a(p);
    }
    e._ = h;
    const r = new a("+");
    function i(m, ...c) {
      const p = [w(m[0])];
      let $ = 0;
      for (; $ < c.length; )
        p.push(r), l(p, c[$]), p.push(r, w(m[++$]));
      return f(p), new a(p);
    }
    e.str = i;
    function l(m, c) {
      c instanceof a ? m.push(...c._items) : c instanceof o ? m.push(c) : m.push(b(c));
    }
    e.addCodeArg = l;
    function f(m) {
      let c = 1;
      for (; c < m.length - 1; ) {
        if (m[c] === r) {
          const p = v(m[c - 1], m[c + 1]);
          if (p !== void 0) {
            m.splice(c - 1, 3, p);
            continue;
          }
          m[c++] = "+";
        }
        c++;
      }
    }
    function v(m, c) {
      if (c === '""')
        return m;
      if (m === '""')
        return c;
      if (typeof m == "string")
        return c instanceof o || m[m.length - 1] !== '"' ? void 0 : typeof c != "string" ? `${m.slice(0, -1)}${c}"` : c[0] === '"' ? m.slice(0, -1) + c.slice(1) : void 0;
      if (typeof c == "string" && c[0] === '"' && !(m instanceof o))
        return `"${m}${c.slice(1)}`;
    }
    function g(m, c) {
      return c.emptyStr() ? m : m.emptyStr() ? c : i`${m}${c}`;
    }
    e.strConcat = g;
    function b(m) {
      return typeof m == "number" || typeof m == "boolean" || m === null ? m : w(Array.isArray(m) ? m.join(",") : m);
    }
    function S(m) {
      return new a(w(m));
    }
    e.stringify = S;
    function w(m) {
      return JSON.stringify(m).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    e.safeStringify = w;
    function P(m) {
      return typeof m == "string" && e.IDENTIFIER.test(m) ? new a(`.${m}`) : h`[${m}]`;
    }
    e.getProperty = P;
    function _(m) {
      if (typeof m == "string" && e.IDENTIFIER.test(m))
        return new a(`${m}`);
      throw new Error(`CodeGen: invalid export name: ${m}, use explicit $id name mapping`);
    }
    e.getEsmExportName = _;
    function d(m) {
      return new a(m.toString());
    }
    e.regexpCode = d;
  })(or)), or;
}
var sr = {}, Tr;
function Ar() {
  return Tr || (Tr = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0;
    const t = /* @__PURE__ */ Ft();
    class o extends Error {
      constructor(v) {
        super(`CodeGen: "code" for ${v} not defined`), this.value = v.value;
      }
    }
    var a;
    (function(f) {
      f[f.Started = 0] = "Started", f[f.Completed = 1] = "Completed";
    })(a || (e.UsedValueState = a = {})), e.varKinds = {
      const: new t.Name("const"),
      let: new t.Name("let"),
      var: new t.Name("var")
    };
    class h {
      constructor({ prefixes: v, parent: g } = {}) {
        this._names = {}, this._prefixes = v, this._parent = g;
      }
      toName(v) {
        return v instanceof t.Name ? v : this.name(v);
      }
      name(v) {
        return new t.Name(this._newName(v));
      }
      _newName(v) {
        const g = this._names[v] || this._nameGroup(v);
        return `${v}${g.index++}`;
      }
      _nameGroup(v) {
        var g, b;
        if (!((b = (g = this._parent) === null || g === void 0 ? void 0 : g._prefixes) === null || b === void 0) && b.has(v) || this._prefixes && !this._prefixes.has(v))
          throw new Error(`CodeGen: prefix "${v}" is not allowed in this scope`);
        return this._names[v] = { prefix: v, index: 0 };
      }
    }
    e.Scope = h;
    class r extends t.Name {
      constructor(v, g) {
        super(g), this.prefix = v;
      }
      setValue(v, { property: g, itemIndex: b }) {
        this.value = v, this.scopePath = (0, t._)`.${new t.Name(g)}[${b}]`;
      }
    }
    e.ValueScopeName = r;
    const i = (0, t._)`\n`;
    class l extends h {
      constructor(v) {
        super(v), this._values = {}, this._scope = v.scope, this.opts = { ...v, _n: v.lines ? i : t.nil };
      }
      get() {
        return this._scope;
      }
      name(v) {
        return new r(v, this._newName(v));
      }
      value(v, g) {
        var b;
        if (g.ref === void 0)
          throw new Error("CodeGen: ref must be passed in value");
        const S = this.toName(v), { prefix: w } = S, P = (b = g.key) !== null && b !== void 0 ? b : g.ref;
        let _ = this._values[w];
        if (_) {
          const c = _.get(P);
          if (c)
            return c;
        } else
          _ = this._values[w] = /* @__PURE__ */ new Map();
        _.set(P, S);
        const d = this._scope[w] || (this._scope[w] = []), m = d.length;
        return d[m] = g.ref, S.setValue(g, { property: w, itemIndex: m }), S;
      }
      getValue(v, g) {
        const b = this._values[v];
        if (b)
          return b.get(g);
      }
      scopeRefs(v, g = this._values) {
        return this._reduceValues(g, (b) => {
          if (b.scopePath === void 0)
            throw new Error(`CodeGen: name "${b}" has no value`);
          return (0, t._)`${v}${b.scopePath}`;
        });
      }
      scopeCode(v = this._values, g, b) {
        return this._reduceValues(v, (S) => {
          if (S.value === void 0)
            throw new Error(`CodeGen: name "${S}" has no value`);
          return S.value.code;
        }, g, b);
      }
      _reduceValues(v, g, b = {}, S) {
        let w = t.nil;
        for (const P in v) {
          const _ = v[P];
          if (!_)
            continue;
          const d = b[P] = b[P] || /* @__PURE__ */ new Map();
          _.forEach((m) => {
            if (d.has(m))
              return;
            d.set(m, a.Started);
            let c = g(m);
            if (c) {
              const p = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
              w = (0, t._)`${w}${p} ${m} = ${c};${this.opts._n}`;
            } else if (c = S?.(m))
              w = (0, t._)`${w}${c}${this.opts._n}`;
            else
              throw new o(m);
            d.set(m, a.Completed);
          });
        }
        return w;
      }
    }
    e.ValueScope = l;
  })(sr)), sr;
}
var Mr;
function G() {
  return Mr || (Mr = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
    const t = /* @__PURE__ */ Ft(), o = /* @__PURE__ */ Ar();
    var a = /* @__PURE__ */ Ft();
    Object.defineProperty(e, "_", { enumerable: !0, get: function() {
      return a._;
    } }), Object.defineProperty(e, "str", { enumerable: !0, get: function() {
      return a.str;
    } }), Object.defineProperty(e, "strConcat", { enumerable: !0, get: function() {
      return a.strConcat;
    } }), Object.defineProperty(e, "nil", { enumerable: !0, get: function() {
      return a.nil;
    } }), Object.defineProperty(e, "getProperty", { enumerable: !0, get: function() {
      return a.getProperty;
    } }), Object.defineProperty(e, "stringify", { enumerable: !0, get: function() {
      return a.stringify;
    } }), Object.defineProperty(e, "regexpCode", { enumerable: !0, get: function() {
      return a.regexpCode;
    } }), Object.defineProperty(e, "Name", { enumerable: !0, get: function() {
      return a.Name;
    } });
    var h = /* @__PURE__ */ Ar();
    Object.defineProperty(e, "Scope", { enumerable: !0, get: function() {
      return h.Scope;
    } }), Object.defineProperty(e, "ValueScope", { enumerable: !0, get: function() {
      return h.ValueScope;
    } }), Object.defineProperty(e, "ValueScopeName", { enumerable: !0, get: function() {
      return h.ValueScopeName;
    } }), Object.defineProperty(e, "varKinds", { enumerable: !0, get: function() {
      return h.varKinds;
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
      optimizeNames(y, E) {
        return this;
      }
    }
    class i extends r {
      constructor(y, E, I) {
        super(), this.varKind = y, this.name = E, this.rhs = I;
      }
      render({ es5: y, _n: E }) {
        const I = y ? o.varKinds.var : this.varKind, B = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
        return `${I} ${this.name}${B};` + E;
      }
      optimizeNames(y, E) {
        if (y[this.name.str])
          return this.rhs && (this.rhs = H(this.rhs, y, E)), this;
      }
      get names() {
        return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
      }
    }
    class l extends r {
      constructor(y, E, I) {
        super(), this.lhs = y, this.rhs = E, this.sideEffects = I;
      }
      render({ _n: y }) {
        return `${this.lhs} = ${this.rhs};` + y;
      }
      optimizeNames(y, E) {
        if (!(this.lhs instanceof t.Name && !y[this.lhs.str] && !this.sideEffects))
          return this.rhs = H(this.rhs, y, E), this;
      }
      get names() {
        const y = this.lhs instanceof t.Name ? {} : { ...this.lhs.names };
        return q(y, this.rhs);
      }
    }
    class f extends l {
      constructor(y, E, I, B) {
        super(y, I, B), this.op = E;
      }
      render({ _n: y }) {
        return `${this.lhs} ${this.op}= ${this.rhs};` + y;
      }
    }
    class v extends r {
      constructor(y) {
        super(), this.label = y, this.names = {};
      }
      render({ _n: y }) {
        return `${this.label}:` + y;
      }
    }
    class g extends r {
      constructor(y) {
        super(), this.label = y, this.names = {};
      }
      render({ _n: y }) {
        return `break${this.label ? ` ${this.label}` : ""};` + y;
      }
    }
    class b extends r {
      constructor(y) {
        super(), this.error = y;
      }
      render({ _n: y }) {
        return `throw ${this.error};` + y;
      }
      get names() {
        return this.error.names;
      }
    }
    class S extends r {
      constructor(y) {
        super(), this.code = y;
      }
      render({ _n: y }) {
        return `${this.code};` + y;
      }
      optimizeNodes() {
        return `${this.code}` ? this : void 0;
      }
      optimizeNames(y, E) {
        return this.code = H(this.code, y, E), this;
      }
      get names() {
        return this.code instanceof t._CodeOrName ? this.code.names : {};
      }
    }
    class w extends r {
      constructor(y = []) {
        super(), this.nodes = y;
      }
      render(y) {
        return this.nodes.reduce((E, I) => E + I.render(y), "");
      }
      optimizeNodes() {
        const { nodes: y } = this;
        let E = y.length;
        for (; E--; ) {
          const I = y[E].optimizeNodes();
          Array.isArray(I) ? y.splice(E, 1, ...I) : I ? y[E] = I : y.splice(E, 1);
        }
        return y.length > 0 ? this : void 0;
      }
      optimizeNames(y, E) {
        const { nodes: I } = this;
        let B = I.length;
        for (; B--; ) {
          const K = I[B];
          K.optimizeNames(y, E) || (ee(y, K.names), I.splice(B, 1));
        }
        return I.length > 0 ? this : void 0;
      }
      get names() {
        return this.nodes.reduce((y, E) => A(y, E.names), {});
      }
    }
    class P extends w {
      render(y) {
        return "{" + y._n + super.render(y) + "}" + y._n;
      }
    }
    class _ extends w {
    }
    class d extends P {
    }
    d.kind = "else";
    class m extends P {
      constructor(y, E) {
        super(E), this.condition = y;
      }
      render(y) {
        let E = `if(${this.condition})` + super.render(y);
        return this.else && (E += "else " + this.else.render(y)), E;
      }
      optimizeNodes() {
        super.optimizeNodes();
        const y = this.condition;
        if (y === !0)
          return this.nodes;
        let E = this.else;
        if (E) {
          const I = E.optimizeNodes();
          E = this.else = Array.isArray(I) ? new d(I) : I;
        }
        if (E)
          return y === !1 ? E instanceof m ? E : E.nodes : this.nodes.length ? this : new m(te(y), E instanceof m ? [E] : E.nodes);
        if (!(y === !1 || !this.nodes.length))
          return this;
      }
      optimizeNames(y, E) {
        var I;
        if (this.else = (I = this.else) === null || I === void 0 ? void 0 : I.optimizeNames(y, E), !!(super.optimizeNames(y, E) || this.else))
          return this.condition = H(this.condition, y, E), this;
      }
      get names() {
        const y = super.names;
        return q(y, this.condition), this.else && A(y, this.else.names), y;
      }
    }
    m.kind = "if";
    class c extends P {
    }
    c.kind = "for";
    class p extends c {
      constructor(y) {
        super(), this.iteration = y;
      }
      render(y) {
        return `for(${this.iteration})` + super.render(y);
      }
      optimizeNames(y, E) {
        if (super.optimizeNames(y, E))
          return this.iteration = H(this.iteration, y, E), this;
      }
      get names() {
        return A(super.names, this.iteration.names);
      }
    }
    class $ extends c {
      constructor(y, E, I, B) {
        super(), this.varKind = y, this.name = E, this.from = I, this.to = B;
      }
      render(y) {
        const E = y.es5 ? o.varKinds.var : this.varKind, { name: I, from: B, to: K } = this;
        return `for(${E} ${I}=${B}; ${I}<${K}; ${I}++)` + super.render(y);
      }
      get names() {
        const y = q(super.names, this.from);
        return q(y, this.to);
      }
    }
    class n extends c {
      constructor(y, E, I, B) {
        super(), this.loop = y, this.varKind = E, this.name = I, this.iterable = B;
      }
      render(y) {
        return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(y);
      }
      optimizeNames(y, E) {
        if (super.optimizeNames(y, E))
          return this.iterable = H(this.iterable, y, E), this;
      }
      get names() {
        return A(super.names, this.iterable.names);
      }
    }
    class s extends P {
      constructor(y, E, I) {
        super(), this.name = y, this.args = E, this.async = I;
      }
      render(y) {
        return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(y);
      }
    }
    s.kind = "func";
    class u extends w {
      render(y) {
        return "return " + super.render(y);
      }
    }
    u.kind = "return";
    class k extends P {
      render(y) {
        let E = "try" + super.render(y);
        return this.catch && (E += this.catch.render(y)), this.finally && (E += this.finally.render(y)), E;
      }
      optimizeNodes() {
        var y, E;
        return super.optimizeNodes(), (y = this.catch) === null || y === void 0 || y.optimizeNodes(), (E = this.finally) === null || E === void 0 || E.optimizeNodes(), this;
      }
      optimizeNames(y, E) {
        var I, B;
        return super.optimizeNames(y, E), (I = this.catch) === null || I === void 0 || I.optimizeNames(y, E), (B = this.finally) === null || B === void 0 || B.optimizeNames(y, E), this;
      }
      get names() {
        const y = super.names;
        return this.catch && A(y, this.catch.names), this.finally && A(y, this.finally.names), y;
      }
    }
    class R extends P {
      constructor(y) {
        super(), this.error = y;
      }
      render(y) {
        return `catch(${this.error})` + super.render(y);
      }
    }
    R.kind = "catch";
    class T extends P {
      render(y) {
        return "finally" + super.render(y);
      }
    }
    T.kind = "finally";
    class M {
      constructor(y, E = {}) {
        this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ...E, _n: E.lines ? `
` : "" }, this._extScope = y, this._scope = new o.Scope({ parent: y }), this._nodes = [new _()];
      }
      toString() {
        return this._root.render(this.opts);
      }
      // returns unique name in the internal scope
      name(y) {
        return this._scope.name(y);
      }
      // reserves unique name in the external scope
      scopeName(y) {
        return this._extScope.name(y);
      }
      // reserves unique name in the external scope and assigns value to it
      scopeValue(y, E) {
        const I = this._extScope.value(y, E);
        return (this._values[I.prefix] || (this._values[I.prefix] = /* @__PURE__ */ new Set())).add(I), I;
      }
      getScopeValue(y, E) {
        return this._extScope.getValue(y, E);
      }
      // return code that assigns values in the external scope to the names that are used internally
      // (same names that were returned by gen.scopeName or gen.scopeValue)
      scopeRefs(y) {
        return this._extScope.scopeRefs(y, this._values);
      }
      scopeCode() {
        return this._extScope.scopeCode(this._values);
      }
      _def(y, E, I, B) {
        const K = this._scope.toName(E);
        return I !== void 0 && B && (this._constants[K.str] = I), this._leafNode(new i(y, K, I)), K;
      }
      // `const` declaration (`var` in es5 mode)
      const(y, E, I) {
        return this._def(o.varKinds.const, y, E, I);
      }
      // `let` declaration with optional assignment (`var` in es5 mode)
      let(y, E, I) {
        return this._def(o.varKinds.let, y, E, I);
      }
      // `var` declaration with optional assignment
      var(y, E, I) {
        return this._def(o.varKinds.var, y, E, I);
      }
      // assignment code
      assign(y, E, I) {
        return this._leafNode(new l(y, E, I));
      }
      // `+=` code
      add(y, E) {
        return this._leafNode(new f(y, e.operators.ADD, E));
      }
      // appends passed SafeExpr to code or executes Block
      code(y) {
        return typeof y == "function" ? y() : y !== t.nil && this._leafNode(new S(y)), this;
      }
      // returns code for object literal for the passed argument list of key-value pairs
      object(...y) {
        const E = ["{"];
        for (const [I, B] of y)
          E.length > 1 && E.push(","), E.push(I), (I !== B || this.opts.es5) && (E.push(":"), (0, t.addCodeArg)(E, B));
        return E.push("}"), new t._Code(E);
      }
      // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
      if(y, E, I) {
        if (this._blockNode(new m(y)), E && I)
          this.code(E).else().code(I).endIf();
        else if (E)
          this.code(E).endIf();
        else if (I)
          throw new Error('CodeGen: "else" body without "then" body');
        return this;
      }
      // `else if` clause - invalid without `if` or after `else` clauses
      elseIf(y) {
        return this._elseNode(new m(y));
      }
      // `else` clause - only valid after `if` or `else if` clauses
      else() {
        return this._elseNode(new d());
      }
      // end `if` statement (needed if gen.if was used only with condition)
      endIf() {
        return this._endBlockNode(m, d);
      }
      _for(y, E) {
        return this._blockNode(y), E && this.code(E).endFor(), this;
      }
      // a generic `for` clause (or statement if `forBody` is passed)
      for(y, E) {
        return this._for(new p(y), E);
      }
      // `for` statement for a range of values
      forRange(y, E, I, B, K = this.opts.es5 ? o.varKinds.var : o.varKinds.let) {
        const Z = this._scope.toName(y);
        return this._for(new $(K, Z, E, I), () => B(Z));
      }
      // `for-of` statement (in es5 mode replace with a normal for loop)
      forOf(y, E, I, B = o.varKinds.const) {
        const K = this._scope.toName(y);
        if (this.opts.es5) {
          const Z = E instanceof t.Name ? E : this.var("_arr", E);
          return this.forRange("_i", 0, (0, t._)`${Z}.length`, (Q) => {
            this.var(K, (0, t._)`${Z}[${Q}]`), I(K);
          });
        }
        return this._for(new n("of", B, K, E), () => I(K));
      }
      // `for-in` statement.
      // With option `ownProperties` replaced with a `for-of` loop for object keys
      forIn(y, E, I, B = this.opts.es5 ? o.varKinds.var : o.varKinds.const) {
        if (this.opts.ownProperties)
          return this.forOf(y, (0, t._)`Object.keys(${E})`, I);
        const K = this._scope.toName(y);
        return this._for(new n("in", B, K, E), () => I(K));
      }
      // end `for` loop
      endFor() {
        return this._endBlockNode(c);
      }
      // `label` statement
      label(y) {
        return this._leafNode(new v(y));
      }
      // `break` statement
      break(y) {
        return this._leafNode(new g(y));
      }
      // `return` statement
      return(y) {
        const E = new u();
        if (this._blockNode(E), this.code(y), E.nodes.length !== 1)
          throw new Error('CodeGen: "return" should have one node');
        return this._endBlockNode(u);
      }
      // `try` statement
      try(y, E, I) {
        if (!E && !I)
          throw new Error('CodeGen: "try" without "catch" and "finally"');
        const B = new k();
        if (this._blockNode(B), this.code(y), E) {
          const K = this.name("e");
          this._currNode = B.catch = new R(K), E(K);
        }
        return I && (this._currNode = B.finally = new T(), this.code(I)), this._endBlockNode(R, T);
      }
      // `throw` statement
      throw(y) {
        return this._leafNode(new b(y));
      }
      // start self-balancing block
      block(y, E) {
        return this._blockStarts.push(this._nodes.length), y && this.code(y).endBlock(E), this;
      }
      // end the current self-balancing block
      endBlock(y) {
        const E = this._blockStarts.pop();
        if (E === void 0)
          throw new Error("CodeGen: not in self-balancing block");
        const I = this._nodes.length - E;
        if (I < 0 || y !== void 0 && I !== y)
          throw new Error(`CodeGen: wrong number of nodes: ${I} vs ${y} expected`);
        return this._nodes.length = E, this;
      }
      // `function` heading (or definition if funcBody is passed)
      func(y, E = t.nil, I, B) {
        return this._blockNode(new s(y, E, I)), B && this.code(B).endFunc(), this;
      }
      // end function definition
      endFunc() {
        return this._endBlockNode(s);
      }
      optimize(y = 1) {
        for (; y-- > 0; )
          this._root.optimizeNodes(), this._root.optimizeNames(this._root.names, this._constants);
      }
      _leafNode(y) {
        return this._currNode.nodes.push(y), this;
      }
      _blockNode(y) {
        this._currNode.nodes.push(y), this._nodes.push(y);
      }
      _endBlockNode(y, E) {
        const I = this._currNode;
        if (I instanceof y || E && I instanceof E)
          return this._nodes.pop(), this;
        throw new Error(`CodeGen: not in block "${E ? `${y.kind}/${E.kind}` : y.kind}"`);
      }
      _elseNode(y) {
        const E = this._currNode;
        if (!(E instanceof m))
          throw new Error('CodeGen: "else" without "if"');
        return this._currNode = E.else = y, this;
      }
      get _root() {
        return this._nodes[0];
      }
      get _currNode() {
        const y = this._nodes;
        return y[y.length - 1];
      }
      set _currNode(y) {
        const E = this._nodes;
        E[E.length - 1] = y;
      }
    }
    e.CodeGen = M;
    function A(O, y) {
      for (const E in y)
        O[E] = (O[E] || 0) + (y[E] || 0);
      return O;
    }
    function q(O, y) {
      return y instanceof t._CodeOrName ? A(O, y.names) : O;
    }
    function H(O, y, E) {
      if (O instanceof t.Name)
        return I(O);
      if (!B(O))
        return O;
      return new t._Code(O._items.reduce((K, Z) => (Z instanceof t.Name && (Z = I(Z)), Z instanceof t._Code ? K.push(...Z._items) : K.push(Z), K), []));
      function I(K) {
        const Z = E[K.str];
        return Z === void 0 || y[K.str] !== 1 ? K : (delete y[K.str], Z);
      }
      function B(K) {
        return K instanceof t._Code && K._items.some((Z) => Z instanceof t.Name && y[Z.str] === 1 && E[Z.str] !== void 0);
      }
    }
    function ee(O, y) {
      for (const E in y)
        O[E] = (O[E] || 0) - (y[E] || 0);
    }
    function te(O) {
      return typeof O == "boolean" || typeof O == "number" || O === null ? !O : (0, t._)`!${x(O)}`;
    }
    e.not = te;
    const fe = N(e.operators.AND);
    function Y(...O) {
      return O.reduce(fe);
    }
    e.and = Y;
    const me = N(e.operators.OR);
    function L(...O) {
      return O.reduce(me);
    }
    e.or = L;
    function N(O) {
      return (y, E) => y === t.nil ? E : E === t.nil ? y : (0, t._)`${x(y)} ${O} ${x(E)}`;
    }
    function x(O) {
      return O instanceof t.Name ? O : (0, t._)`(${O})`;
    }
  })(ar)), ar;
}
var J = {}, Ir;
function X() {
  if (Ir) return J;
  Ir = 1, Object.defineProperty(J, "__esModule", { value: !0 }), J.checkStrictMode = J.getErrorPath = J.Type = J.useFunc = J.setEvaluated = J.evaluatedPropsToName = J.mergeEvaluated = J.eachItem = J.unescapeJsonPointer = J.escapeJsonPointer = J.escapeFragment = J.unescapeFragment = J.schemaRefOrVal = J.schemaHasRulesButRef = J.schemaHasRules = J.checkUnknownRules = J.alwaysValidSchema = J.toHash = void 0;
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ Ft();
  function o(n) {
    const s = {};
    for (const u of n)
      s[u] = !0;
    return s;
  }
  J.toHash = o;
  function a(n, s) {
    return typeof s == "boolean" ? s : Object.keys(s).length === 0 ? !0 : (h(n, s), !r(s, n.self.RULES.all));
  }
  J.alwaysValidSchema = a;
  function h(n, s = n.schema) {
    const { opts: u, self: k } = n;
    if (!u.strictSchema || typeof s == "boolean")
      return;
    const R = k.RULES.keywords;
    for (const T in s)
      R[T] || $(n, `unknown keyword: "${T}"`);
  }
  J.checkUnknownRules = h;
  function r(n, s) {
    if (typeof n == "boolean")
      return !n;
    for (const u in n)
      if (s[u])
        return !0;
    return !1;
  }
  J.schemaHasRules = r;
  function i(n, s) {
    if (typeof n == "boolean")
      return !n;
    for (const u in n)
      if (u !== "$ref" && s.all[u])
        return !0;
    return !1;
  }
  J.schemaHasRulesButRef = i;
  function l({ topSchemaRef: n, schemaPath: s }, u, k, R) {
    if (!R) {
      if (typeof u == "number" || typeof u == "boolean")
        return u;
      if (typeof u == "string")
        return (0, e._)`${u}`;
    }
    return (0, e._)`${n}${s}${(0, e.getProperty)(k)}`;
  }
  J.schemaRefOrVal = l;
  function f(n) {
    return b(decodeURIComponent(n));
  }
  J.unescapeFragment = f;
  function v(n) {
    return encodeURIComponent(g(n));
  }
  J.escapeFragment = v;
  function g(n) {
    return typeof n == "number" ? `${n}` : n.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  J.escapeJsonPointer = g;
  function b(n) {
    return n.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  J.unescapeJsonPointer = b;
  function S(n, s) {
    if (Array.isArray(n))
      for (const u of n)
        s(u);
    else
      s(n);
  }
  J.eachItem = S;
  function w({ mergeNames: n, mergeToName: s, mergeValues: u, resultToName: k }) {
    return (R, T, M, A) => {
      const q = M === void 0 ? T : M instanceof e.Name ? (T instanceof e.Name ? n(R, T, M) : s(R, T, M), M) : T instanceof e.Name ? (s(R, M, T), T) : u(T, M);
      return A === e.Name && !(q instanceof e.Name) ? k(R, q) : q;
    };
  }
  J.mergeEvaluated = {
    props: w({
      mergeNames: (n, s, u) => n.if((0, e._)`${u} !== true && ${s} !== undefined`, () => {
        n.if((0, e._)`${s} === true`, () => n.assign(u, !0), () => n.assign(u, (0, e._)`${u} || {}`).code((0, e._)`Object.assign(${u}, ${s})`));
      }),
      mergeToName: (n, s, u) => n.if((0, e._)`${u} !== true`, () => {
        s === !0 ? n.assign(u, !0) : (n.assign(u, (0, e._)`${u} || {}`), _(n, u, s));
      }),
      mergeValues: (n, s) => n === !0 ? !0 : { ...n, ...s },
      resultToName: P
    }),
    items: w({
      mergeNames: (n, s, u) => n.if((0, e._)`${u} !== true && ${s} !== undefined`, () => n.assign(u, (0, e._)`${s} === true ? true : ${u} > ${s} ? ${u} : ${s}`)),
      mergeToName: (n, s, u) => n.if((0, e._)`${u} !== true`, () => n.assign(u, s === !0 ? !0 : (0, e._)`${u} > ${s} ? ${u} : ${s}`)),
      mergeValues: (n, s) => n === !0 ? !0 : Math.max(n, s),
      resultToName: (n, s) => n.var("items", s)
    })
  };
  function P(n, s) {
    if (s === !0)
      return n.var("props", !0);
    const u = n.var("props", (0, e._)`{}`);
    return s !== void 0 && _(n, u, s), u;
  }
  J.evaluatedPropsToName = P;
  function _(n, s, u) {
    Object.keys(u).forEach((k) => n.assign((0, e._)`${s}${(0, e.getProperty)(k)}`, !0));
  }
  J.setEvaluated = _;
  const d = {};
  function m(n, s) {
    return n.scopeValue("func", {
      ref: s,
      code: d[s.code] || (d[s.code] = new t._Code(s.code))
    });
  }
  J.useFunc = m;
  var c;
  (function(n) {
    n[n.Num = 0] = "Num", n[n.Str = 1] = "Str";
  })(c || (J.Type = c = {}));
  function p(n, s, u) {
    if (n instanceof e.Name) {
      const k = s === c.Num;
      return u ? k ? (0, e._)`"[" + ${n} + "]"` : (0, e._)`"['" + ${n} + "']"` : k ? (0, e._)`"/" + ${n}` : (0, e._)`"/" + ${n}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return u ? (0, e.getProperty)(n).toString() : "/" + g(n);
  }
  J.getErrorPath = p;
  function $(n, s, u = n.opts.strictSchema) {
    if (u) {
      if (s = `strict mode: ${s}`, u === !0)
        throw new Error(s);
      n.self.logger.warn(s);
    }
  }
  return J.checkStrictMode = $, J;
}
var Je = {}, qr;
function ve() {
  if (qr) return Je;
  qr = 1, Object.defineProperty(Je, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), t = {
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
  return Je.default = t, Je;
}
var Dr;
function Gt() {
  return Dr || (Dr = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
    const t = /* @__PURE__ */ G(), o = /* @__PURE__ */ X(), a = /* @__PURE__ */ ve();
    e.keywordError = {
      message: ({ keyword: d }) => (0, t.str)`must pass "${d}" keyword validation`
    }, e.keyword$DataError = {
      message: ({ keyword: d, schemaType: m }) => m ? (0, t.str)`"${d}" keyword must be ${m} ($data)` : (0, t.str)`"${d}" keyword is invalid ($data)`
    };
    function h(d, m = e.keywordError, c, p) {
      const { it: $ } = d, { gen: n, compositeRule: s, allErrors: u } = $, k = b(d, m, c);
      p ?? (s || u) ? f(n, k) : v($, (0, t._)`[${k}]`);
    }
    e.reportError = h;
    function r(d, m = e.keywordError, c) {
      const { it: p } = d, { gen: $, compositeRule: n, allErrors: s } = p, u = b(d, m, c);
      f($, u), n || s || v(p, a.default.vErrors);
    }
    e.reportExtraError = r;
    function i(d, m) {
      d.assign(a.default.errors, m), d.if((0, t._)`${a.default.vErrors} !== null`, () => d.if(m, () => d.assign((0, t._)`${a.default.vErrors}.length`, m), () => d.assign(a.default.vErrors, null)));
    }
    e.resetErrorsCount = i;
    function l({ gen: d, keyword: m, schemaValue: c, data: p, errsCount: $, it: n }) {
      if ($ === void 0)
        throw new Error("ajv implementation error");
      const s = d.name("err");
      d.forRange("i", $, a.default.errors, (u) => {
        d.const(s, (0, t._)`${a.default.vErrors}[${u}]`), d.if((0, t._)`${s}.instancePath === undefined`, () => d.assign((0, t._)`${s}.instancePath`, (0, t.strConcat)(a.default.instancePath, n.errorPath))), d.assign((0, t._)`${s}.schemaPath`, (0, t.str)`${n.errSchemaPath}/${m}`), n.opts.verbose && (d.assign((0, t._)`${s}.schema`, c), d.assign((0, t._)`${s}.data`, p));
      });
    }
    e.extendErrors = l;
    function f(d, m) {
      const c = d.const("err", m);
      d.if((0, t._)`${a.default.vErrors} === null`, () => d.assign(a.default.vErrors, (0, t._)`[${c}]`), (0, t._)`${a.default.vErrors}.push(${c})`), d.code((0, t._)`${a.default.errors}++`);
    }
    function v(d, m) {
      const { gen: c, validateName: p, schemaEnv: $ } = d;
      $.$async ? c.throw((0, t._)`new ${d.ValidationError}(${m})`) : (c.assign((0, t._)`${p}.errors`, m), c.return(!1));
    }
    const g = {
      keyword: new t.Name("keyword"),
      schemaPath: new t.Name("schemaPath"),
      // also used in JTD errors
      params: new t.Name("params"),
      propertyName: new t.Name("propertyName"),
      message: new t.Name("message"),
      schema: new t.Name("schema"),
      parentSchema: new t.Name("parentSchema")
    };
    function b(d, m, c) {
      const { createErrors: p } = d.it;
      return p === !1 ? (0, t._)`{}` : S(d, m, c);
    }
    function S(d, m, c = {}) {
      const { gen: p, it: $ } = d, n = [
        w($, c),
        P(d, c)
      ];
      return _(d, m, n), p.object(...n);
    }
    function w({ errorPath: d }, { instancePath: m }) {
      const c = m ? (0, t.str)`${d}${(0, o.getErrorPath)(m, o.Type.Str)}` : d;
      return [a.default.instancePath, (0, t.strConcat)(a.default.instancePath, c)];
    }
    function P({ keyword: d, it: { errSchemaPath: m } }, { schemaPath: c, parentSchema: p }) {
      let $ = p ? m : (0, t.str)`${m}/${d}`;
      return c && ($ = (0, t.str)`${$}${(0, o.getErrorPath)(c, o.Type.Str)}`), [g.schemaPath, $];
    }
    function _(d, { params: m, message: c }, p) {
      const { keyword: $, data: n, schemaValue: s, it: u } = d, { opts: k, propertyName: R, topSchemaRef: T, schemaPath: M } = u;
      p.push([g.keyword, $], [g.params, typeof m == "function" ? m(d) : m || (0, t._)`{}`]), k.messages && p.push([g.message, typeof c == "function" ? c(d) : c]), k.verbose && p.push([g.schema, s], [g.parentSchema, (0, t._)`${T}${M}`], [a.default.data, n]), R && p.push([g.propertyName, R]);
    }
  })(nr)), nr;
}
var xr;
function xa() {
  if (xr) return Re;
  xr = 1, Object.defineProperty(Re, "__esModule", { value: !0 }), Re.boolOrEmptySchema = Re.topBoolOrEmptySchema = void 0;
  const e = /* @__PURE__ */ Gt(), t = /* @__PURE__ */ G(), o = /* @__PURE__ */ ve(), a = {
    message: "boolean schema is false"
  };
  function h(l) {
    const { gen: f, schema: v, validateName: g } = l;
    v === !1 ? i(l, !1) : typeof v == "object" && v.$async === !0 ? f.return(o.default.data) : (f.assign((0, t._)`${g}.errors`, null), f.return(!0));
  }
  Re.topBoolOrEmptySchema = h;
  function r(l, f) {
    const { gen: v, schema: g } = l;
    g === !1 ? (v.var(f, !1), i(l)) : v.var(f, !0);
  }
  Re.boolOrEmptySchema = r;
  function i(l, f) {
    const { gen: v, data: g } = l, b = {
      gen: v,
      keyword: "false schema",
      data: g,
      schema: !1,
      schemaCode: !1,
      schemaValue: !1,
      params: {},
      it: l
    };
    (0, e.reportError)(b, a, void 0, f);
  }
  return Re;
}
var oe = {}, Ce = {}, Lr;
function $a() {
  if (Lr) return Ce;
  Lr = 1, Object.defineProperty(Ce, "__esModule", { value: !0 }), Ce.getRules = Ce.isJSONType = void 0;
  const e = ["string", "number", "integer", "boolean", "null", "object", "array"], t = new Set(e);
  function o(h) {
    return typeof h == "string" && t.has(h);
  }
  Ce.isJSONType = o;
  function a() {
    const h = {
      number: { type: "number", rules: [] },
      string: { type: "string", rules: [] },
      array: { type: "array", rules: [] },
      object: { type: "object", rules: [] }
    };
    return {
      types: { ...h, integer: !0, boolean: !0, null: !0 },
      rules: [{ rules: [] }, h.number, h.string, h.array, h.object],
      post: { rules: [] },
      all: {},
      keywords: {}
    };
  }
  return Ce.getRules = a, Ce;
}
var we = {}, zr;
function _a() {
  if (zr) return we;
  zr = 1, Object.defineProperty(we, "__esModule", { value: !0 }), we.shouldUseRule = we.shouldUseGroup = we.schemaHasRulesForType = void 0;
  function e({ schema: a, self: h }, r) {
    const i = h.RULES.types[r];
    return i && i !== !0 && t(a, i);
  }
  we.schemaHasRulesForType = e;
  function t(a, h) {
    return h.rules.some((r) => o(a, r));
  }
  we.shouldUseGroup = t;
  function o(a, h) {
    var r;
    return a[h.keyword] !== void 0 || ((r = h.definition.implements) === null || r === void 0 ? void 0 : r.some((i) => a[i] !== void 0));
  }
  return we.shouldUseRule = o, we;
}
var Vr;
function Ut() {
  if (Vr) return oe;
  Vr = 1, Object.defineProperty(oe, "__esModule", { value: !0 }), oe.reportTypeError = oe.checkDataTypes = oe.checkDataType = oe.coerceAndCheckDataType = oe.getJSONTypes = oe.getSchemaTypes = oe.DataType = void 0;
  const e = /* @__PURE__ */ $a(), t = /* @__PURE__ */ _a(), o = /* @__PURE__ */ Gt(), a = /* @__PURE__ */ G(), h = /* @__PURE__ */ X();
  var r;
  (function(c) {
    c[c.Correct = 0] = "Correct", c[c.Wrong = 1] = "Wrong";
  })(r || (oe.DataType = r = {}));
  function i(c) {
    const p = l(c.type);
    if (p.includes("null")) {
      if (c.nullable === !1)
        throw new Error("type: null contradicts nullable: false");
    } else {
      if (!p.length && c.nullable !== void 0)
        throw new Error('"nullable" cannot be used without "type"');
      c.nullable === !0 && p.push("null");
    }
    return p;
  }
  oe.getSchemaTypes = i;
  function l(c) {
    const p = Array.isArray(c) ? c : c ? [c] : [];
    if (p.every(e.isJSONType))
      return p;
    throw new Error("type must be JSONType or JSONType[]: " + p.join(","));
  }
  oe.getJSONTypes = l;
  function f(c, p) {
    const { gen: $, data: n, opts: s } = c, u = g(p, s.coerceTypes), k = p.length > 0 && !(u.length === 0 && p.length === 1 && (0, t.schemaHasRulesForType)(c, p[0]));
    if (k) {
      const R = P(p, n, s.strictNumbers, r.Wrong);
      $.if(R, () => {
        u.length ? b(c, p, u) : d(c);
      });
    }
    return k;
  }
  oe.coerceAndCheckDataType = f;
  const v = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
  function g(c, p) {
    return p ? c.filter(($) => v.has($) || p === "array" && $ === "array") : [];
  }
  function b(c, p, $) {
    const { gen: n, data: s, opts: u } = c, k = n.let("dataType", (0, a._)`typeof ${s}`), R = n.let("coerced", (0, a._)`undefined`);
    u.coerceTypes === "array" && n.if((0, a._)`${k} == 'object' && Array.isArray(${s}) && ${s}.length == 1`, () => n.assign(s, (0, a._)`${s}[0]`).assign(k, (0, a._)`typeof ${s}`).if(P(p, s, u.strictNumbers), () => n.assign(R, s))), n.if((0, a._)`${R} !== undefined`);
    for (const M of $)
      (v.has(M) || M === "array" && u.coerceTypes === "array") && T(M);
    n.else(), d(c), n.endIf(), n.if((0, a._)`${R} !== undefined`, () => {
      n.assign(s, R), S(c, R);
    });
    function T(M) {
      switch (M) {
        case "string":
          n.elseIf((0, a._)`${k} == "number" || ${k} == "boolean"`).assign(R, (0, a._)`"" + ${s}`).elseIf((0, a._)`${s} === null`).assign(R, (0, a._)`""`);
          return;
        case "number":
          n.elseIf((0, a._)`${k} == "boolean" || ${s} === null
              || (${k} == "string" && ${s} && ${s} == +${s})`).assign(R, (0, a._)`+${s}`);
          return;
        case "integer":
          n.elseIf((0, a._)`${k} === "boolean" || ${s} === null
              || (${k} === "string" && ${s} && ${s} == +${s} && !(${s} % 1))`).assign(R, (0, a._)`+${s}`);
          return;
        case "boolean":
          n.elseIf((0, a._)`${s} === "false" || ${s} === 0 || ${s} === null`).assign(R, !1).elseIf((0, a._)`${s} === "true" || ${s} === 1`).assign(R, !0);
          return;
        case "null":
          n.elseIf((0, a._)`${s} === "" || ${s} === 0 || ${s} === false`), n.assign(R, null);
          return;
        case "array":
          n.elseIf((0, a._)`${k} === "string" || ${k} === "number"
              || ${k} === "boolean" || ${s} === null`).assign(R, (0, a._)`[${s}]`);
      }
    }
  }
  function S({ gen: c, parentData: p, parentDataProperty: $ }, n) {
    c.if((0, a._)`${p} !== undefined`, () => c.assign((0, a._)`${p}[${$}]`, n));
  }
  function w(c, p, $, n = r.Correct) {
    const s = n === r.Correct ? a.operators.EQ : a.operators.NEQ;
    let u;
    switch (c) {
      case "null":
        return (0, a._)`${p} ${s} null`;
      case "array":
        u = (0, a._)`Array.isArray(${p})`;
        break;
      case "object":
        u = (0, a._)`${p} && typeof ${p} == "object" && !Array.isArray(${p})`;
        break;
      case "integer":
        u = k((0, a._)`!(${p} % 1) && !isNaN(${p})`);
        break;
      case "number":
        u = k();
        break;
      default:
        return (0, a._)`typeof ${p} ${s} ${c}`;
    }
    return n === r.Correct ? u : (0, a.not)(u);
    function k(R = a.nil) {
      return (0, a.and)((0, a._)`typeof ${p} == "number"`, R, $ ? (0, a._)`isFinite(${p})` : a.nil);
    }
  }
  oe.checkDataType = w;
  function P(c, p, $, n) {
    if (c.length === 1)
      return w(c[0], p, $, n);
    let s;
    const u = (0, h.toHash)(c);
    if (u.array && u.object) {
      const k = (0, a._)`typeof ${p} != "object"`;
      s = u.null ? k : (0, a._)`!${p} || ${k}`, delete u.null, delete u.array, delete u.object;
    } else
      s = a.nil;
    u.number && delete u.integer;
    for (const k in u)
      s = (0, a.and)(s, w(k, p, $, n));
    return s;
  }
  oe.checkDataTypes = P;
  const _ = {
    message: ({ schema: c }) => `must be ${c}`,
    params: ({ schema: c, schemaValue: p }) => typeof c == "string" ? (0, a._)`{type: ${c}}` : (0, a._)`{type: ${p}}`
  };
  function d(c) {
    const p = m(c);
    (0, o.reportError)(p, _);
  }
  oe.reportTypeError = d;
  function m(c) {
    const { gen: p, data: $, schema: n } = c, s = (0, h.schemaRefOrVal)(c, n, "type");
    return {
      gen: p,
      keyword: "type",
      data: $,
      schema: n.type,
      schemaCode: s,
      schemaValue: s,
      parentSchema: n,
      params: {},
      it: c
    };
  }
  return oe;
}
var Be = {}, Br;
function La() {
  if (Br) return Be;
  Br = 1, Object.defineProperty(Be, "__esModule", { value: !0 }), Be.assignDefaults = void 0;
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X();
  function o(h, r) {
    const { properties: i, items: l } = h.schema;
    if (r === "object" && i)
      for (const f in i)
        a(h, f, i[f].default);
    else r === "array" && Array.isArray(l) && l.forEach((f, v) => a(h, v, f.default));
  }
  Be.assignDefaults = o;
  function a(h, r, i) {
    const { gen: l, compositeRule: f, data: v, opts: g } = h;
    if (i === void 0)
      return;
    const b = (0, e._)`${v}${(0, e.getProperty)(r)}`;
    if (f) {
      (0, t.checkStrictMode)(h, `default is ignored for: ${b}`);
      return;
    }
    let S = (0, e._)`${b} === undefined`;
    g.useDefaults === "empty" && (S = (0, e._)`${S} || ${b} === null || ${b} === ""`), l.if(S, (0, e._)`${b} = ${(0, e.stringify)(i)}`);
  }
  return Be;
}
var ge = {}, re = {}, Fr;
function $e() {
  if (Fr) return re;
  Fr = 1, Object.defineProperty(re, "__esModule", { value: !0 }), re.validateUnion = re.validateArray = re.usePattern = re.callValidateCode = re.schemaProperties = re.allSchemaProperties = re.noPropertyInData = re.propertyInData = re.isOwnProperty = re.hasPropFunc = re.reportMissingProp = re.checkMissingProp = re.checkReportMissingProp = void 0;
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), o = /* @__PURE__ */ ve(), a = /* @__PURE__ */ X();
  function h(c, p) {
    const { gen: $, data: n, it: s } = c;
    $.if(g($, n, p, s.opts.ownProperties), () => {
      c.setParams({ missingProperty: (0, e._)`${p}` }, !0), c.error();
    });
  }
  re.checkReportMissingProp = h;
  function r({ gen: c, data: p, it: { opts: $ } }, n, s) {
    return (0, e.or)(...n.map((u) => (0, e.and)(g(c, p, u, $.ownProperties), (0, e._)`${s} = ${u}`)));
  }
  re.checkMissingProp = r;
  function i(c, p) {
    c.setParams({ missingProperty: p }, !0), c.error();
  }
  re.reportMissingProp = i;
  function l(c) {
    return c.scopeValue("func", {
      // eslint-disable-next-line @typescript-eslint/unbound-method
      ref: Object.prototype.hasOwnProperty,
      code: (0, e._)`Object.prototype.hasOwnProperty`
    });
  }
  re.hasPropFunc = l;
  function f(c, p, $) {
    return (0, e._)`${l(c)}.call(${p}, ${$})`;
  }
  re.isOwnProperty = f;
  function v(c, p, $, n) {
    const s = (0, e._)`${p}${(0, e.getProperty)($)} !== undefined`;
    return n ? (0, e._)`${s} && ${f(c, p, $)}` : s;
  }
  re.propertyInData = v;
  function g(c, p, $, n) {
    const s = (0, e._)`${p}${(0, e.getProperty)($)} === undefined`;
    return n ? (0, e.or)(s, (0, e.not)(f(c, p, $))) : s;
  }
  re.noPropertyInData = g;
  function b(c) {
    return c ? Object.keys(c).filter((p) => p !== "__proto__") : [];
  }
  re.allSchemaProperties = b;
  function S(c, p) {
    return b(p).filter(($) => !(0, t.alwaysValidSchema)(c, p[$]));
  }
  re.schemaProperties = S;
  function w({ schemaCode: c, data: p, it: { gen: $, topSchemaRef: n, schemaPath: s, errorPath: u }, it: k }, R, T, M) {
    const A = M ? (0, e._)`${c}, ${p}, ${n}${s}` : p, q = [
      [o.default.instancePath, (0, e.strConcat)(o.default.instancePath, u)],
      [o.default.parentData, k.parentData],
      [o.default.parentDataProperty, k.parentDataProperty],
      [o.default.rootData, o.default.rootData]
    ];
    k.opts.dynamicRef && q.push([o.default.dynamicAnchors, o.default.dynamicAnchors]);
    const H = (0, e._)`${A}, ${$.object(...q)}`;
    return T !== e.nil ? (0, e._)`${R}.call(${T}, ${H})` : (0, e._)`${R}(${H})`;
  }
  re.callValidateCode = w;
  const P = (0, e._)`new RegExp`;
  function _({ gen: c, it: { opts: p } }, $) {
    const n = p.unicodeRegExp ? "u" : "", { regExp: s } = p.code, u = s($, n);
    return c.scopeValue("pattern", {
      key: u.toString(),
      ref: u,
      code: (0, e._)`${s.code === "new RegExp" ? P : (0, a.useFunc)(c, s)}(${$}, ${n})`
    });
  }
  re.usePattern = _;
  function d(c) {
    const { gen: p, data: $, keyword: n, it: s } = c, u = p.name("valid");
    if (s.allErrors) {
      const R = p.let("valid", !0);
      return k(() => p.assign(R, !1)), R;
    }
    return p.var(u, !0), k(() => p.break()), u;
    function k(R) {
      const T = p.const("len", (0, e._)`${$}.length`);
      p.forRange("i", 0, T, (M) => {
        c.subschema({
          keyword: n,
          dataProp: M,
          dataPropType: t.Type.Num
        }, u), p.if((0, e.not)(u), R);
      });
    }
  }
  re.validateArray = d;
  function m(c) {
    const { gen: p, schema: $, keyword: n, it: s } = c;
    if (!Array.isArray($))
      throw new Error("ajv implementation error");
    if ($.some((T) => (0, t.alwaysValidSchema)(s, T)) && !s.opts.unevaluated)
      return;
    const k = p.let("valid", !1), R = p.name("_valid");
    p.block(() => $.forEach((T, M) => {
      const A = c.subschema({
        keyword: n,
        schemaProp: M,
        compositeRule: !0
      }, R);
      p.assign(k, (0, e._)`${k} || ${R}`), c.mergeValidEvaluated(A, R) || p.if((0, e.not)(k));
    })), c.result(k, () => c.reset(), () => c.error(!0));
  }
  return re.validateUnion = m, re;
}
var Ur;
function za() {
  if (Ur) return ge;
  Ur = 1, Object.defineProperty(ge, "__esModule", { value: !0 }), ge.validateKeywordUsage = ge.validSchemaType = ge.funcKeywordCode = ge.macroKeywordCode = void 0;
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ ve(), o = /* @__PURE__ */ $e(), a = /* @__PURE__ */ Gt();
  function h(S, w) {
    const { gen: P, keyword: _, schema: d, parentSchema: m, it: c } = S, p = w.macro.call(c.self, d, m, c), $ = v(P, _, p);
    c.opts.validateSchema !== !1 && c.self.validateSchema(p, !0);
    const n = P.name("valid");
    S.subschema({
      schema: p,
      schemaPath: e.nil,
      errSchemaPath: `${c.errSchemaPath}/${_}`,
      topSchemaRef: $,
      compositeRule: !0
    }, n), S.pass(n, () => S.error(!0));
  }
  ge.macroKeywordCode = h;
  function r(S, w) {
    var P;
    const { gen: _, keyword: d, schema: m, parentSchema: c, $data: p, it: $ } = S;
    f($, w);
    const n = !p && w.compile ? w.compile.call($.self, m, c, $) : w.validate, s = v(_, d, n), u = _.let("valid");
    S.block$data(u, k), S.ok((P = w.valid) !== null && P !== void 0 ? P : u);
    function k() {
      if (w.errors === !1)
        M(), w.modifying && i(S), A(() => S.error());
      else {
        const q = w.async ? R() : T();
        w.modifying && i(S), A(() => l(S, q));
      }
    }
    function R() {
      const q = _.let("ruleErrs", null);
      return _.try(() => M((0, e._)`await `), (H) => _.assign(u, !1).if((0, e._)`${H} instanceof ${$.ValidationError}`, () => _.assign(q, (0, e._)`${H}.errors`), () => _.throw(H))), q;
    }
    function T() {
      const q = (0, e._)`${s}.errors`;
      return _.assign(q, null), M(e.nil), q;
    }
    function M(q = w.async ? (0, e._)`await ` : e.nil) {
      const H = $.opts.passContext ? t.default.this : t.default.self, ee = !("compile" in w && !p || w.schema === !1);
      _.assign(u, (0, e._)`${q}${(0, o.callValidateCode)(S, s, H, ee)}`, w.modifying);
    }
    function A(q) {
      var H;
      _.if((0, e.not)((H = w.valid) !== null && H !== void 0 ? H : u), q);
    }
  }
  ge.funcKeywordCode = r;
  function i(S) {
    const { gen: w, data: P, it: _ } = S;
    w.if(_.parentData, () => w.assign(P, (0, e._)`${_.parentData}[${_.parentDataProperty}]`));
  }
  function l(S, w) {
    const { gen: P } = S;
    P.if((0, e._)`Array.isArray(${w})`, () => {
      P.assign(t.default.vErrors, (0, e._)`${t.default.vErrors} === null ? ${w} : ${t.default.vErrors}.concat(${w})`).assign(t.default.errors, (0, e._)`${t.default.vErrors}.length`), (0, a.extendErrors)(S);
    }, () => S.error());
  }
  function f({ schemaEnv: S }, w) {
    if (w.async && !S.$async)
      throw new Error("async keyword in sync schema");
  }
  function v(S, w, P) {
    if (P === void 0)
      throw new Error(`keyword "${w}" failed to compile`);
    return S.scopeValue("keyword", typeof P == "function" ? { ref: P } : { ref: P, code: (0, e.stringify)(P) });
  }
  function g(S, w, P = !1) {
    return !w.length || w.some((_) => _ === "array" ? Array.isArray(S) : _ === "object" ? S && typeof S == "object" && !Array.isArray(S) : typeof S == _ || P && typeof S > "u");
  }
  ge.validSchemaType = g;
  function b({ schema: S, opts: w, self: P, errSchemaPath: _ }, d, m) {
    if (Array.isArray(d.keyword) ? !d.keyword.includes(m) : d.keyword !== m)
      throw new Error("ajv implementation error");
    const c = d.dependencies;
    if (c?.some((p) => !Object.prototype.hasOwnProperty.call(S, p)))
      throw new Error(`parent schema must have dependencies of ${m}: ${c.join(",")}`);
    if (d.validateSchema && !d.validateSchema(S[m])) {
      const $ = `keyword "${m}" value is invalid at path "${_}": ` + P.errorsText(d.validateSchema.errors);
      if (w.validateSchema === "log")
        P.logger.error($);
      else
        throw new Error($);
    }
  }
  return ge.validateKeywordUsage = b, ge;
}
var Se = {}, Kr;
function Va() {
  if (Kr) return Se;
  Kr = 1, Object.defineProperty(Se, "__esModule", { value: !0 }), Se.extendSubschemaMode = Se.extendSubschemaData = Se.getSubschema = void 0;
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X();
  function o(r, { keyword: i, schemaProp: l, schema: f, schemaPath: v, errSchemaPath: g, topSchemaRef: b }) {
    if (i !== void 0 && f !== void 0)
      throw new Error('both "keyword" and "schema" passed, only one allowed');
    if (i !== void 0) {
      const S = r.schema[i];
      return l === void 0 ? {
        schema: S,
        schemaPath: (0, e._)`${r.schemaPath}${(0, e.getProperty)(i)}`,
        errSchemaPath: `${r.errSchemaPath}/${i}`
      } : {
        schema: S[l],
        schemaPath: (0, e._)`${r.schemaPath}${(0, e.getProperty)(i)}${(0, e.getProperty)(l)}`,
        errSchemaPath: `${r.errSchemaPath}/${i}/${(0, t.escapeFragment)(l)}`
      };
    }
    if (f !== void 0) {
      if (v === void 0 || g === void 0 || b === void 0)
        throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
      return {
        schema: f,
        schemaPath: v,
        topSchemaRef: b,
        errSchemaPath: g
      };
    }
    throw new Error('either "keyword" or "schema" must be passed');
  }
  Se.getSubschema = o;
  function a(r, i, { dataProp: l, dataPropType: f, data: v, dataTypes: g, propertyName: b }) {
    if (v !== void 0 && l !== void 0)
      throw new Error('both "data" and "dataProp" passed, only one allowed');
    const { gen: S } = i;
    if (l !== void 0) {
      const { errorPath: P, dataPathArr: _, opts: d } = i, m = S.let("data", (0, e._)`${i.data}${(0, e.getProperty)(l)}`, !0);
      w(m), r.errorPath = (0, e.str)`${P}${(0, t.getErrorPath)(l, f, d.jsPropertySyntax)}`, r.parentDataProperty = (0, e._)`${l}`, r.dataPathArr = [..._, r.parentDataProperty];
    }
    if (v !== void 0) {
      const P = v instanceof e.Name ? v : S.let("data", v, !0);
      w(P), b !== void 0 && (r.propertyName = b);
    }
    g && (r.dataTypes = g);
    function w(P) {
      r.data = P, r.dataLevel = i.dataLevel + 1, r.dataTypes = [], i.definedProperties = /* @__PURE__ */ new Set(), r.parentData = i.data, r.dataNames = [...i.dataNames, P];
    }
  }
  Se.extendSubschemaData = a;
  function h(r, { jtdDiscriminator: i, jtdMetadata: l, compositeRule: f, createErrors: v, allErrors: g }) {
    f !== void 0 && (r.compositeRule = f), v !== void 0 && (r.createErrors = v), g !== void 0 && (r.allErrors = g), r.jtdDiscriminator = i, r.jtdMetadata = l;
  }
  return Se.extendSubschemaMode = h, Se;
}
var ie = {}, ir, Hr;
function ba() {
  return Hr || (Hr = 1, ir = function e(t, o) {
    if (t === o) return !0;
    if (t && o && typeof t == "object" && typeof o == "object") {
      if (t.constructor !== o.constructor) return !1;
      var a, h, r;
      if (Array.isArray(t)) {
        if (a = t.length, a != o.length) return !1;
        for (h = a; h-- !== 0; )
          if (!e(t[h], o[h])) return !1;
        return !0;
      }
      if (t.constructor === RegExp) return t.source === o.source && t.flags === o.flags;
      if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === o.valueOf();
      if (t.toString !== Object.prototype.toString) return t.toString() === o.toString();
      if (r = Object.keys(t), a = r.length, a !== Object.keys(o).length) return !1;
      for (h = a; h-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(o, r[h])) return !1;
      for (h = a; h-- !== 0; ) {
        var i = r[h];
        if (!e(t[i], o[i])) return !1;
      }
      return !0;
    }
    return t !== t && o !== o;
  }), ir;
}
var cr = { exports: {} }, Gr;
function Ba() {
  if (Gr) return cr.exports;
  Gr = 1;
  var e = cr.exports = function(a, h, r) {
    typeof h == "function" && (r = h, h = {}), r = h.cb || r;
    var i = typeof r == "function" ? r : r.pre || function() {
    }, l = r.post || function() {
    };
    t(h, i, l, a, "", a);
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
  function t(a, h, r, i, l, f, v, g, b, S) {
    if (i && typeof i == "object" && !Array.isArray(i)) {
      h(i, l, f, v, g, b, S);
      for (var w in i) {
        var P = i[w];
        if (Array.isArray(P)) {
          if (w in e.arrayKeywords)
            for (var _ = 0; _ < P.length; _++)
              t(a, h, r, P[_], l + "/" + w + "/" + _, f, l, w, i, _);
        } else if (w in e.propsKeywords) {
          if (P && typeof P == "object")
            for (var d in P)
              t(a, h, r, P[d], l + "/" + w + "/" + o(d), f, l, w, i, d);
        } else (w in e.keywords || a.allKeys && !(w in e.skipKeywords)) && t(a, h, r, P, l + "/" + w, f, l, w, i);
      }
      r(i, l, f, v, g, b, S);
    }
  }
  function o(a) {
    return a.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  return cr.exports;
}
var Jr;
function Jt() {
  if (Jr) return ie;
  Jr = 1, Object.defineProperty(ie, "__esModule", { value: !0 }), ie.getSchemaRefs = ie.resolveUrl = ie.normalizeId = ie._getFullPath = ie.getFullPath = ie.inlineRef = void 0;
  const e = /* @__PURE__ */ X(), t = ba(), o = Ba(), a = /* @__PURE__ */ new Set([
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
  function h(_, d = !0) {
    return typeof _ == "boolean" ? !0 : d === !0 ? !i(_) : d ? l(_) <= d : !1;
  }
  ie.inlineRef = h;
  const r = /* @__PURE__ */ new Set([
    "$ref",
    "$recursiveRef",
    "$recursiveAnchor",
    "$dynamicRef",
    "$dynamicAnchor"
  ]);
  function i(_) {
    for (const d in _) {
      if (r.has(d))
        return !0;
      const m = _[d];
      if (Array.isArray(m) && m.some(i) || typeof m == "object" && i(m))
        return !0;
    }
    return !1;
  }
  function l(_) {
    let d = 0;
    for (const m in _) {
      if (m === "$ref")
        return 1 / 0;
      if (d++, !a.has(m) && (typeof _[m] == "object" && (0, e.eachItem)(_[m], (c) => d += l(c)), d === 1 / 0))
        return 1 / 0;
    }
    return d;
  }
  function f(_, d = "", m) {
    m !== !1 && (d = b(d));
    const c = _.parse(d);
    return v(_, c);
  }
  ie.getFullPath = f;
  function v(_, d) {
    return _.serialize(d).split("#")[0] + "#";
  }
  ie._getFullPath = v;
  const g = /#\/?$/;
  function b(_) {
    return _ ? _.replace(g, "") : "";
  }
  ie.normalizeId = b;
  function S(_, d, m) {
    return m = b(m), _.resolve(d, m);
  }
  ie.resolveUrl = S;
  const w = /^[a-z_][-a-z0-9._]*$/i;
  function P(_, d) {
    if (typeof _ == "boolean")
      return {};
    const { schemaId: m, uriResolver: c } = this.opts, p = b(_[m] || d), $ = { "": p }, n = f(c, p, !1), s = {}, u = /* @__PURE__ */ new Set();
    return o(_, { allKeys: !0 }, (T, M, A, q) => {
      if (q === void 0)
        return;
      const H = n + M;
      let ee = $[q];
      typeof T[m] == "string" && (ee = te.call(this, T[m])), fe.call(this, T.$anchor), fe.call(this, T.$dynamicAnchor), $[M] = ee;
      function te(Y) {
        const me = this.opts.uriResolver.resolve;
        if (Y = b(ee ? me(ee, Y) : Y), u.has(Y))
          throw R(Y);
        u.add(Y);
        let L = this.refs[Y];
        return typeof L == "string" && (L = this.refs[L]), typeof L == "object" ? k(T, L.schema, Y) : Y !== b(H) && (Y[0] === "#" ? (k(T, s[Y], Y), s[Y] = T) : this.refs[Y] = H), Y;
      }
      function fe(Y) {
        if (typeof Y == "string") {
          if (!w.test(Y))
            throw new Error(`invalid anchor "${Y}"`);
          te.call(this, `#${Y}`);
        }
      }
    }), s;
    function k(T, M, A) {
      if (M !== void 0 && !t(T, M))
        throw R(A);
    }
    function R(T) {
      return new Error(`reference "${T}" resolves to more than one schema`);
    }
  }
  return ie.getSchemaRefs = P, ie;
}
var Wr;
function Wt() {
  if (Wr) return be;
  Wr = 1, Object.defineProperty(be, "__esModule", { value: !0 }), be.getData = be.KeywordCxt = be.validateFunctionCode = void 0;
  const e = /* @__PURE__ */ xa(), t = /* @__PURE__ */ Ut(), o = /* @__PURE__ */ _a(), a = /* @__PURE__ */ Ut(), h = /* @__PURE__ */ La(), r = /* @__PURE__ */ za(), i = /* @__PURE__ */ Va(), l = /* @__PURE__ */ G(), f = /* @__PURE__ */ ve(), v = /* @__PURE__ */ Jt(), g = /* @__PURE__ */ X(), b = /* @__PURE__ */ Gt();
  function S(C) {
    if (n(C) && (u(C), $(C))) {
      d(C);
      return;
    }
    w(C, () => (0, e.topBoolOrEmptySchema)(C));
  }
  be.validateFunctionCode = S;
  function w({ gen: C, validateName: j, schema: D, schemaEnv: V, opts: U }, W) {
    U.code.es5 ? C.func(j, (0, l._)`${f.default.data}, ${f.default.valCxt}`, V.$async, () => {
      C.code((0, l._)`"use strict"; ${c(D, U)}`), _(C, U), C.code(W);
    }) : C.func(j, (0, l._)`${f.default.data}, ${P(U)}`, V.$async, () => C.code(c(D, U)).code(W));
  }
  function P(C) {
    return (0, l._)`{${f.default.instancePath}="", ${f.default.parentData}, ${f.default.parentDataProperty}, ${f.default.rootData}=${f.default.data}${C.dynamicRef ? (0, l._)`, ${f.default.dynamicAnchors}={}` : l.nil}}={}`;
  }
  function _(C, j) {
    C.if(f.default.valCxt, () => {
      C.var(f.default.instancePath, (0, l._)`${f.default.valCxt}.${f.default.instancePath}`), C.var(f.default.parentData, (0, l._)`${f.default.valCxt}.${f.default.parentData}`), C.var(f.default.parentDataProperty, (0, l._)`${f.default.valCxt}.${f.default.parentDataProperty}`), C.var(f.default.rootData, (0, l._)`${f.default.valCxt}.${f.default.rootData}`), j.dynamicRef && C.var(f.default.dynamicAnchors, (0, l._)`${f.default.valCxt}.${f.default.dynamicAnchors}`);
    }, () => {
      C.var(f.default.instancePath, (0, l._)`""`), C.var(f.default.parentData, (0, l._)`undefined`), C.var(f.default.parentDataProperty, (0, l._)`undefined`), C.var(f.default.rootData, f.default.data), j.dynamicRef && C.var(f.default.dynamicAnchors, (0, l._)`{}`);
    });
  }
  function d(C) {
    const { schema: j, opts: D, gen: V } = C;
    w(C, () => {
      D.$comment && j.$comment && q(C), T(C), V.let(f.default.vErrors, null), V.let(f.default.errors, 0), D.unevaluated && m(C), k(C), H(C);
    });
  }
  function m(C) {
    const { gen: j, validateName: D } = C;
    C.evaluated = j.const("evaluated", (0, l._)`${D}.evaluated`), j.if((0, l._)`${C.evaluated}.dynamicProps`, () => j.assign((0, l._)`${C.evaluated}.props`, (0, l._)`undefined`)), j.if((0, l._)`${C.evaluated}.dynamicItems`, () => j.assign((0, l._)`${C.evaluated}.items`, (0, l._)`undefined`));
  }
  function c(C, j) {
    const D = typeof C == "object" && C[j.schemaId];
    return D && (j.code.source || j.code.process) ? (0, l._)`/*# sourceURL=${D} */` : l.nil;
  }
  function p(C, j) {
    if (n(C) && (u(C), $(C))) {
      s(C, j);
      return;
    }
    (0, e.boolOrEmptySchema)(C, j);
  }
  function $({ schema: C, self: j }) {
    if (typeof C == "boolean")
      return !C;
    for (const D in C)
      if (j.RULES.all[D])
        return !0;
    return !1;
  }
  function n(C) {
    return typeof C.schema != "boolean";
  }
  function s(C, j) {
    const { schema: D, gen: V, opts: U } = C;
    U.$comment && D.$comment && q(C), M(C), A(C);
    const W = V.const("_errs", f.default.errors);
    k(C, W), V.var(j, (0, l._)`${W} === ${f.default.errors}`);
  }
  function u(C) {
    (0, g.checkUnknownRules)(C), R(C);
  }
  function k(C, j) {
    if (C.opts.jtd)
      return te(C, [], !1, j);
    const D = (0, t.getSchemaTypes)(C.schema), V = (0, t.coerceAndCheckDataType)(C, D);
    te(C, D, !V, j);
  }
  function R(C) {
    const { schema: j, errSchemaPath: D, opts: V, self: U } = C;
    j.$ref && V.ignoreKeywordsWithRef && (0, g.schemaHasRulesButRef)(j, U.RULES) && U.logger.warn(`$ref: keywords ignored in schema at path "${D}"`);
  }
  function T(C) {
    const { schema: j, opts: D } = C;
    j.default !== void 0 && D.useDefaults && D.strictSchema && (0, g.checkStrictMode)(C, "default is ignored in the schema root");
  }
  function M(C) {
    const j = C.schema[C.opts.schemaId];
    j && (C.baseId = (0, v.resolveUrl)(C.opts.uriResolver, C.baseId, j));
  }
  function A(C) {
    if (C.schema.$async && !C.schemaEnv.$async)
      throw new Error("async schema in sync schema");
  }
  function q({ gen: C, schemaEnv: j, schema: D, errSchemaPath: V, opts: U }) {
    const W = D.$comment;
    if (U.$comment === !0)
      C.code((0, l._)`${f.default.self}.logger.log(${W})`);
    else if (typeof U.$comment == "function") {
      const ne = (0, l.str)`${V}/$comment`, ye = C.scopeValue("root", { ref: j.root });
      C.code((0, l._)`${f.default.self}.opts.$comment(${W}, ${ne}, ${ye}.schema)`);
    }
  }
  function H(C) {
    const { gen: j, schemaEnv: D, validateName: V, ValidationError: U, opts: W } = C;
    D.$async ? j.if((0, l._)`${f.default.errors} === 0`, () => j.return(f.default.data), () => j.throw((0, l._)`new ${U}(${f.default.vErrors})`)) : (j.assign((0, l._)`${V}.errors`, f.default.vErrors), W.unevaluated && ee(C), j.return((0, l._)`${f.default.errors} === 0`));
  }
  function ee({ gen: C, evaluated: j, props: D, items: V }) {
    D instanceof l.Name && C.assign((0, l._)`${j}.props`, D), V instanceof l.Name && C.assign((0, l._)`${j}.items`, V);
  }
  function te(C, j, D, V) {
    const { gen: U, schema: W, data: ne, allErrors: ye, opts: le, self: de } = C, { RULES: ae } = de;
    if (W.$ref && (le.ignoreKeywordsWithRef || !(0, g.schemaHasRulesButRef)(W, ae))) {
      U.block(() => B(C, "$ref", ae.all.$ref.definition));
      return;
    }
    le.jtd || Y(C, j), U.block(() => {
      for (const pe of ae.rules)
        Oe(pe);
      Oe(ae.post);
    });
    function Oe(pe) {
      (0, o.shouldUseGroup)(W, pe) && (pe.type ? (U.if((0, a.checkDataType)(pe.type, ne, le.strictNumbers)), fe(C, pe), j.length === 1 && j[0] === pe.type && D && (U.else(), (0, a.reportTypeError)(C)), U.endIf()) : fe(C, pe), ye || U.if((0, l._)`${f.default.errors} === ${V || 0}`));
    }
  }
  function fe(C, j) {
    const { gen: D, schema: V, opts: { useDefaults: U } } = C;
    U && (0, h.assignDefaults)(C, j.type), D.block(() => {
      for (const W of j.rules)
        (0, o.shouldUseRule)(V, W) && B(C, W.keyword, W.definition, j.type);
    });
  }
  function Y(C, j) {
    C.schemaEnv.meta || !C.opts.strictTypes || (me(C, j), C.opts.allowUnionTypes || L(C, j), N(C, C.dataTypes));
  }
  function me(C, j) {
    if (j.length) {
      if (!C.dataTypes.length) {
        C.dataTypes = j;
        return;
      }
      j.forEach((D) => {
        O(C.dataTypes, D) || E(C, `type "${D}" not allowed by context "${C.dataTypes.join(",")}"`);
      }), y(C, j);
    }
  }
  function L(C, j) {
    j.length > 1 && !(j.length === 2 && j.includes("null")) && E(C, "use allowUnionTypes to allow union type keyword");
  }
  function N(C, j) {
    const D = C.self.RULES.all;
    for (const V in D) {
      const U = D[V];
      if (typeof U == "object" && (0, o.shouldUseRule)(C.schema, U)) {
        const { type: W } = U.definition;
        W.length && !W.some((ne) => x(j, ne)) && E(C, `missing type "${W.join(",")}" for keyword "${V}"`);
      }
    }
  }
  function x(C, j) {
    return C.includes(j) || j === "number" && C.includes("integer");
  }
  function O(C, j) {
    return C.includes(j) || j === "integer" && C.includes("number");
  }
  function y(C, j) {
    const D = [];
    for (const V of C.dataTypes)
      O(j, V) ? D.push(V) : j.includes("integer") && V === "number" && D.push("integer");
    C.dataTypes = D;
  }
  function E(C, j) {
    const D = C.schemaEnv.baseId + C.errSchemaPath;
    j += ` at "${D}" (strictTypes)`, (0, g.checkStrictMode)(C, j, C.opts.strictTypes);
  }
  class I {
    constructor(j, D, V) {
      if ((0, r.validateKeywordUsage)(j, D, V), this.gen = j.gen, this.allErrors = j.allErrors, this.keyword = V, this.data = j.data, this.schema = j.schema[V], this.$data = D.$data && j.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, g.schemaRefOrVal)(j, this.schema, V, this.$data), this.schemaType = D.schemaType, this.parentSchema = j.schema, this.params = {}, this.it = j, this.def = D, this.$data)
        this.schemaCode = j.gen.const("vSchema", Q(this.$data, j));
      else if (this.schemaCode = this.schemaValue, !(0, r.validSchemaType)(this.schema, D.schemaType, D.allowUndefined))
        throw new Error(`${V} value must be ${JSON.stringify(D.schemaType)}`);
      ("code" in D ? D.trackErrors : D.errors !== !1) && (this.errsCount = j.gen.const("_errs", f.default.errors));
    }
    result(j, D, V) {
      this.failResult((0, l.not)(j), D, V);
    }
    failResult(j, D, V) {
      this.gen.if(j), V ? V() : this.error(), D ? (this.gen.else(), D(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    pass(j, D) {
      this.failResult((0, l.not)(j), void 0, D);
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
      const { schemaCode: D } = this;
      this.fail((0, l._)`${D} !== undefined && (${(0, l.or)(this.invalid$data(), j)})`);
    }
    error(j, D, V) {
      if (D) {
        this.setParams(D), this._error(j, V), this.setParams({});
        return;
      }
      this._error(j, V);
    }
    _error(j, D) {
      (j ? b.reportExtraError : b.reportError)(this, this.def.error, D);
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
    setParams(j, D) {
      D ? Object.assign(this.params, j) : this.params = j;
    }
    block$data(j, D, V = l.nil) {
      this.gen.block(() => {
        this.check$data(j, V), D();
      });
    }
    check$data(j = l.nil, D = l.nil) {
      if (!this.$data)
        return;
      const { gen: V, schemaCode: U, schemaType: W, def: ne } = this;
      V.if((0, l.or)((0, l._)`${U} === undefined`, D)), j !== l.nil && V.assign(j, !0), (W.length || ne.validateSchema) && (V.elseIf(this.invalid$data()), this.$dataError(), j !== l.nil && V.assign(j, !1)), V.else();
    }
    invalid$data() {
      const { gen: j, schemaCode: D, schemaType: V, def: U, it: W } = this;
      return (0, l.or)(ne(), ye());
      function ne() {
        if (V.length) {
          if (!(D instanceof l.Name))
            throw new Error("ajv implementation error");
          const le = Array.isArray(V) ? V : [V];
          return (0, l._)`${(0, a.checkDataTypes)(le, D, W.opts.strictNumbers, a.DataType.Wrong)}`;
        }
        return l.nil;
      }
      function ye() {
        if (U.validateSchema) {
          const le = j.scopeValue("validate$data", { ref: U.validateSchema });
          return (0, l._)`!${le}(${D})`;
        }
        return l.nil;
      }
    }
    subschema(j, D) {
      const V = (0, i.getSubschema)(this.it, j);
      (0, i.extendSubschemaData)(V, this.it, j), (0, i.extendSubschemaMode)(V, j);
      const U = { ...this.it, ...V, items: void 0, props: void 0 };
      return p(U, D), U;
    }
    mergeEvaluated(j, D) {
      const { it: V, gen: U } = this;
      V.opts.unevaluated && (V.props !== !0 && j.props !== void 0 && (V.props = g.mergeEvaluated.props(U, j.props, V.props, D)), V.items !== !0 && j.items !== void 0 && (V.items = g.mergeEvaluated.items(U, j.items, V.items, D)));
    }
    mergeValidEvaluated(j, D) {
      const { it: V, gen: U } = this;
      if (V.opts.unevaluated && (V.props !== !0 || V.items !== !0))
        return U.if(D, () => this.mergeEvaluated(j, l.Name)), !0;
    }
  }
  be.KeywordCxt = I;
  function B(C, j, D, V) {
    const U = new I(C, D, j);
    "code" in D ? D.code(U, V) : U.$data && D.validate ? (0, r.funcKeywordCode)(U, D) : "macro" in D ? (0, r.macroKeywordCode)(U, D) : (D.compile || D.validate) && (0, r.funcKeywordCode)(U, D);
  }
  const K = /^\/(?:[^~]|~0|~1)*$/, Z = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function Q(C, { dataLevel: j, dataNames: D, dataPathArr: V }) {
    let U, W;
    if (C === "")
      return f.default.rootData;
    if (C[0] === "/") {
      if (!K.test(C))
        throw new Error(`Invalid JSON-pointer: ${C}`);
      U = C, W = f.default.rootData;
    } else {
      const de = Z.exec(C);
      if (!de)
        throw new Error(`Invalid JSON-pointer: ${C}`);
      const ae = +de[1];
      if (U = de[2], U === "#") {
        if (ae >= j)
          throw new Error(le("property/index", ae));
        return V[j - ae];
      }
      if (ae > j)
        throw new Error(le("data", ae));
      if (W = D[j - ae], !U)
        return W;
    }
    let ne = W;
    const ye = U.split("/");
    for (const de of ye)
      de && (W = (0, l._)`${W}${(0, l.getProperty)((0, g.unescapeJsonPointer)(de))}`, ne = (0, l._)`${ne} && ${W}`);
    return ne;
    function le(de, ae) {
      return `Cannot access ${de} ${ae} levels up, current level is ${j}`;
    }
  }
  return be.getData = Q, be;
}
var We = {}, Yr;
function vr() {
  if (Yr) return We;
  Yr = 1, Object.defineProperty(We, "__esModule", { value: !0 });
  class e extends Error {
    constructor(o) {
      super("validation failed"), this.errors = o, this.ajv = this.validation = !0;
    }
  }
  return We.default = e, We;
}
var Ye = {}, Xr;
function Yt() {
  if (Xr) return Ye;
  Xr = 1, Object.defineProperty(Ye, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Jt();
  class t extends Error {
    constructor(a, h, r, i) {
      super(i || `can't resolve reference ${r} from id ${h}`), this.missingRef = (0, e.resolveUrl)(a, h, r), this.missingSchema = (0, e.normalizeId)((0, e.getFullPath)(a, this.missingRef));
    }
  }
  return Ye.default = t, Ye;
}
var ue = {}, Qr;
function Xt() {
  if (Qr) return ue;
  Qr = 1, Object.defineProperty(ue, "__esModule", { value: !0 }), ue.resolveSchema = ue.getCompilingSchema = ue.resolveRef = ue.compileSchema = ue.SchemaEnv = void 0;
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ vr(), o = /* @__PURE__ */ ve(), a = /* @__PURE__ */ Jt(), h = /* @__PURE__ */ X(), r = /* @__PURE__ */ Wt();
  class i {
    constructor(m) {
      var c;
      this.refs = {}, this.dynamicAnchors = {};
      let p;
      typeof m.schema == "object" && (p = m.schema), this.schema = m.schema, this.schemaId = m.schemaId, this.root = m.root || this, this.baseId = (c = m.baseId) !== null && c !== void 0 ? c : (0, a.normalizeId)(p?.[m.schemaId || "$id"]), this.schemaPath = m.schemaPath, this.localRefs = m.localRefs, this.meta = m.meta, this.$async = p?.$async, this.refs = {};
    }
  }
  ue.SchemaEnv = i;
  function l(d) {
    const m = g.call(this, d);
    if (m)
      return m;
    const c = (0, a.getFullPath)(this.opts.uriResolver, d.root.baseId), { es5: p, lines: $ } = this.opts.code, { ownProperties: n } = this.opts, s = new e.CodeGen(this.scope, { es5: p, lines: $, ownProperties: n });
    let u;
    d.$async && (u = s.scopeValue("Error", {
      ref: t.default,
      code: (0, e._)`require("ajv/dist/runtime/validation_error").default`
    }));
    const k = s.scopeName("validate");
    d.validateName = k;
    const R = {
      gen: s,
      allErrors: this.opts.allErrors,
      data: o.default.data,
      parentData: o.default.parentData,
      parentDataProperty: o.default.parentDataProperty,
      dataNames: [o.default.data],
      dataPathArr: [e.nil],
      // TODO can its length be used as dataLevel if nil is removed?
      dataLevel: 0,
      dataTypes: [],
      definedProperties: /* @__PURE__ */ new Set(),
      topSchemaRef: s.scopeValue("schema", this.opts.code.source === !0 ? { ref: d.schema, code: (0, e.stringify)(d.schema) } : { ref: d.schema }),
      validateName: k,
      ValidationError: u,
      schema: d.schema,
      schemaEnv: d,
      rootId: c,
      baseId: d.baseId || c,
      schemaPath: e.nil,
      errSchemaPath: d.schemaPath || (this.opts.jtd ? "" : "#"),
      errorPath: (0, e._)`""`,
      opts: this.opts,
      self: this
    };
    let T;
    try {
      this._compilations.add(d), (0, r.validateFunctionCode)(R), s.optimize(this.opts.code.optimize);
      const M = s.toString();
      T = `${s.scopeRefs(o.default.scope)}return ${M}`, this.opts.code.process && (T = this.opts.code.process(T, d));
      const q = new Function(`${o.default.self}`, `${o.default.scope}`, T)(this, this.scope.get());
      if (this.scope.value(k, { ref: q }), q.errors = null, q.schema = d.schema, q.schemaEnv = d, d.$async && (q.$async = !0), this.opts.code.source === !0 && (q.source = { validateName: k, validateCode: M, scopeValues: s._values }), this.opts.unevaluated) {
        const { props: H, items: ee } = R;
        q.evaluated = {
          props: H instanceof e.Name ? void 0 : H,
          items: ee instanceof e.Name ? void 0 : ee,
          dynamicProps: H instanceof e.Name,
          dynamicItems: ee instanceof e.Name
        }, q.source && (q.source.evaluated = (0, e.stringify)(q.evaluated));
      }
      return d.validate = q, d;
    } catch (M) {
      throw delete d.validate, delete d.validateName, T && this.logger.error("Error compiling schema, function code:", T), M;
    } finally {
      this._compilations.delete(d);
    }
  }
  ue.compileSchema = l;
  function f(d, m, c) {
    var p;
    c = (0, a.resolveUrl)(this.opts.uriResolver, m, c);
    const $ = d.refs[c];
    if ($)
      return $;
    let n = S.call(this, d, c);
    if (n === void 0) {
      const s = (p = d.localRefs) === null || p === void 0 ? void 0 : p[c], { schemaId: u } = this.opts;
      s && (n = new i({ schema: s, schemaId: u, root: d, baseId: m }));
    }
    if (n !== void 0)
      return d.refs[c] = v.call(this, n);
  }
  ue.resolveRef = f;
  function v(d) {
    return (0, a.inlineRef)(d.schema, this.opts.inlineRefs) ? d.schema : d.validate ? d : l.call(this, d);
  }
  function g(d) {
    for (const m of this._compilations)
      if (b(m, d))
        return m;
  }
  ue.getCompilingSchema = g;
  function b(d, m) {
    return d.schema === m.schema && d.root === m.root && d.baseId === m.baseId;
  }
  function S(d, m) {
    let c;
    for (; typeof (c = this.refs[m]) == "string"; )
      m = c;
    return c || this.schemas[m] || w.call(this, d, m);
  }
  function w(d, m) {
    const c = this.opts.uriResolver.parse(m), p = (0, a._getFullPath)(this.opts.uriResolver, c);
    let $ = (0, a.getFullPath)(this.opts.uriResolver, d.baseId, void 0);
    if (Object.keys(d.schema).length > 0 && p === $)
      return _.call(this, c, d);
    const n = (0, a.normalizeId)(p), s = this.refs[n] || this.schemas[n];
    if (typeof s == "string") {
      const u = w.call(this, d, s);
      return typeof u?.schema != "object" ? void 0 : _.call(this, c, u);
    }
    if (typeof s?.schema == "object") {
      if (s.validate || l.call(this, s), n === (0, a.normalizeId)(m)) {
        const { schema: u } = s, { schemaId: k } = this.opts, R = u[k];
        return R && ($ = (0, a.resolveUrl)(this.opts.uriResolver, $, R)), new i({ schema: u, schemaId: k, root: d, baseId: $ });
      }
      return _.call(this, c, s);
    }
  }
  ue.resolveSchema = w;
  const P = /* @__PURE__ */ new Set([
    "properties",
    "patternProperties",
    "enum",
    "dependencies",
    "definitions"
  ]);
  function _(d, { baseId: m, schema: c, root: p }) {
    var $;
    if ((($ = d.fragment) === null || $ === void 0 ? void 0 : $[0]) !== "/")
      return;
    for (const u of d.fragment.slice(1).split("/")) {
      if (typeof c == "boolean")
        return;
      const k = c[(0, h.unescapeFragment)(u)];
      if (k === void 0)
        return;
      c = k;
      const R = typeof c == "object" && c[this.opts.schemaId];
      !P.has(u) && R && (m = (0, a.resolveUrl)(this.opts.uriResolver, m, R));
    }
    let n;
    if (typeof c != "boolean" && c.$ref && !(0, h.schemaHasRulesButRef)(c, this.RULES)) {
      const u = (0, a.resolveUrl)(this.opts.uriResolver, m, c.$ref);
      n = w.call(this, p, u);
    }
    const { schemaId: s } = this.opts;
    if (n = n || new i({ schema: c, schemaId: s, root: p, baseId: m }), n.schema !== n.root.schema)
      return n;
  }
  return ue;
}
const Fa = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", Ua = "Meta-schema for $data reference (JSON AnySchema extension proposal)", Ka = "object", Ha = ["$data"], Ga = { $data: { type: "string", anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] } }, Ja = !1, Wa = {
  $id: Fa,
  description: Ua,
  type: Ka,
  required: Ha,
  properties: Ga,
  additionalProperties: Ja
};
var Xe = {}, Fe = { exports: {} }, lr, Zr;
function wa() {
  if (Zr) return lr;
  Zr = 1;
  const e = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu), t = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u), o = RegExp.prototype.test.bind(/^[\da-f]{2}$/iu), a = RegExp.prototype.test.bind(/^[\da-z\-._~]$/iu), h = RegExp.prototype.test.bind(/^[\da-z\-._~!$&'()*+,;=:@/]$/iu);
  function r(n) {
    let s = "", u = 0, k = 0;
    for (k = 0; k < n.length; k++)
      if (u = n[k].charCodeAt(0), u !== 48) {
        if (!(u >= 48 && u <= 57 || u >= 65 && u <= 70 || u >= 97 && u <= 102))
          return "";
        s += n[k];
        break;
      }
    for (k += 1; k < n.length; k++) {
      if (u = n[k].charCodeAt(0), !(u >= 48 && u <= 57 || u >= 65 && u <= 70 || u >= 97 && u <= 102))
        return "";
      s += n[k];
    }
    return s;
  }
  const i = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
  function l(n) {
    return n.length = 0, !0;
  }
  function f(n, s, u) {
    if (n.length) {
      const k = r(n);
      if (k !== "")
        s.push(k);
      else
        return u.error = !0, !1;
      n.length = 0;
    }
    return !0;
  }
  function v(n) {
    let s = 0;
    const u = { error: !1, address: "", zone: "" }, k = [], R = [];
    let T = !1, M = !1, A = f;
    for (let q = 0; q < n.length; q++) {
      const H = n[q];
      if (!(H === "[" || H === "]"))
        if (H === ":") {
          if (T === !0 && (M = !0), !A(R, k, u))
            break;
          if (++s > 7) {
            u.error = !0;
            break;
          }
          q > 0 && n[q - 1] === ":" && (T = !0), k.push(":");
          continue;
        } else if (H === "%") {
          if (!A(R, k, u))
            break;
          A = l;
        } else {
          R.push(H);
          continue;
        }
    }
    return R.length && (A === l ? u.zone = R.join("") : M ? k.push(R.join("")) : k.push(r(R))), u.address = k.join(""), u;
  }
  function g(n) {
    if (b(n, ":") < 2)
      return { host: n, isIPV6: !1 };
    const s = v(n);
    if (s.error)
      return { host: n, isIPV6: !1 };
    {
      let u = s.address, k = s.address;
      return s.zone && (u += "%" + s.zone, k += "%25" + s.zone), { host: u, isIPV6: !0, escapedHost: k };
    }
  }
  function b(n, s) {
    let u = 0;
    for (let k = 0; k < n.length; k++)
      n[k] === s && u++;
    return u;
  }
  function S(n) {
    let s = n;
    const u = [];
    let k = -1, R = 0;
    for (; R = s.length; ) {
      if (R === 1) {
        if (s === ".")
          break;
        if (s === "/") {
          u.push("/");
          break;
        } else {
          u.push(s);
          break;
        }
      } else if (R === 2) {
        if (s[0] === ".") {
          if (s[1] === ".")
            break;
          if (s[1] === "/") {
            s = s.slice(2);
            continue;
          }
        } else if (s[0] === "/" && (s[1] === "." || s[1] === "/")) {
          u.push("/");
          break;
        }
      } else if (R === 3 && s === "/..") {
        u.length !== 0 && u.pop(), u.push("/");
        break;
      }
      if (s[0] === ".") {
        if (s[1] === ".") {
          if (s[2] === "/") {
            s = s.slice(3);
            continue;
          }
        } else if (s[1] === "/") {
          s = s.slice(2);
          continue;
        }
      } else if (s[0] === "/" && s[1] === ".") {
        if (s[2] === "/") {
          s = s.slice(2);
          continue;
        } else if (s[2] === "." && s[3] === "/") {
          s = s.slice(3), u.length !== 0 && u.pop();
          continue;
        }
      }
      if ((k = s.indexOf("/", 1)) === -1) {
        u.push(s);
        break;
      } else
        u.push(s.slice(0, k)), s = s.slice(k);
    }
    return u.join("");
  }
  const w = { "@": "%40", "/": "%2F", "?": "%3F", "#": "%23", ":": "%3A" }, P = /[@/?#:]/g, _ = /[@/?#]/g;
  function d(n, s) {
    const u = s ? _ : P;
    return u.lastIndex = 0, n.replace(u, (k) => w[k]);
  }
  function m(n, s = !1) {
    if (n.indexOf("%") === -1)
      return n;
    let u = "";
    for (let k = 0; k < n.length; k++) {
      if (n[k] === "%" && k + 2 < n.length) {
        const R = n.slice(k + 1, k + 3);
        if (o(R)) {
          const T = R.toUpperCase(), M = String.fromCharCode(parseInt(T, 16));
          s && a(M) ? u += M : u += "%" + T, k += 2;
          continue;
        }
      }
      u += n[k];
    }
    return u;
  }
  function c(n) {
    let s = "";
    for (let u = 0; u < n.length; u++) {
      if (n[u] === "%" && u + 2 < n.length) {
        const k = n.slice(u + 1, u + 3);
        if (o(k)) {
          const R = k.toUpperCase(), T = String.fromCharCode(parseInt(R, 16));
          T !== "." && a(T) ? s += T : s += "%" + R, u += 2;
          continue;
        }
      }
      h(n[u]) ? s += n[u] : s += escape(n[u]);
    }
    return s;
  }
  function p(n) {
    let s = "";
    for (let u = 0; u < n.length; u++) {
      if (n[u] === "%" && u + 2 < n.length) {
        const k = n.slice(u + 1, u + 3);
        if (o(k)) {
          s += "%" + k.toUpperCase(), u += 2;
          continue;
        }
      }
      s += escape(n[u]);
    }
    return s;
  }
  function $(n) {
    const s = [];
    if (n.userinfo !== void 0 && (s.push(n.userinfo), s.push("@")), n.host !== void 0) {
      let u = unescape(n.host);
      if (!t(u)) {
        const k = g(u);
        k.isIPV6 === !0 ? u = `[${k.escapedHost}]` : u = d(u, !1);
      }
      s.push(u);
    }
    return (typeof n.port == "number" || typeof n.port == "string") && (s.push(":"), s.push(String(n.port))), s.length ? s.join("") : void 0;
  }
  return lr = {
    nonSimpleDomain: i,
    recomposeAuthority: $,
    reescapeHostDelimiters: d,
    normalizePercentEncoding: m,
    normalizePathEncoding: c,
    escapePreservingEscapes: p,
    removeDotSegments: S,
    isIPv4: t,
    isUUID: e,
    normalizeIPv6: g,
    stringArrayToHexStripped: r
  }, lr;
}
var dr, en;
function Ya() {
  if (en) return dr;
  en = 1;
  const { isUUID: e } = wa(), t = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu, o = (
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
  function a(n) {
    return o.indexOf(
      /** @type {*} */
      n
    ) !== -1;
  }
  function h(n) {
    return n.secure === !0 ? !0 : n.secure === !1 ? !1 : n.scheme ? n.scheme.length === 3 && (n.scheme[0] === "w" || n.scheme[0] === "W") && (n.scheme[1] === "s" || n.scheme[1] === "S") && (n.scheme[2] === "s" || n.scheme[2] === "S") : !1;
  }
  function r(n) {
    return n.host || (n.error = n.error || "HTTP URIs must have a host."), n;
  }
  function i(n) {
    const s = String(n.scheme).toLowerCase() === "https";
    return (n.port === (s ? 443 : 80) || n.port === "") && (n.port = void 0), n.path || (n.path = "/"), n;
  }
  function l(n) {
    return n.secure = h(n), n.resourceName = (n.path || "/") + (n.query ? "?" + n.query : ""), n.path = void 0, n.query = void 0, n;
  }
  function f(n) {
    if ((n.port === (h(n) ? 443 : 80) || n.port === "") && (n.port = void 0), typeof n.secure == "boolean" && (n.scheme = n.secure ? "wss" : "ws", n.secure = void 0), n.resourceName) {
      const [s, u] = n.resourceName.split("?");
      n.path = s && s !== "/" ? s : void 0, n.query = u, n.resourceName = void 0;
    }
    return n.fragment = void 0, n;
  }
  function v(n, s) {
    if (!n.path)
      return n.error = "URN can not be parsed", n;
    const u = n.path.match(t);
    if (u) {
      const k = s.scheme || n.scheme || "urn";
      n.nid = u[1].toLowerCase(), n.nss = u[2];
      const R = `${k}:${s.nid || n.nid}`, T = $(R);
      n.path = void 0, T && (n = T.parse(n, s));
    } else
      n.error = n.error || "URN can not be parsed.";
    return n;
  }
  function g(n, s) {
    if (n.nid === void 0)
      throw new Error("URN without nid cannot be serialized");
    const u = s.scheme || n.scheme || "urn", k = n.nid.toLowerCase(), R = `${u}:${s.nid || k}`, T = $(R);
    T && (n = T.serialize(n, s));
    const M = n, A = n.nss;
    return M.path = `${k || s.nid}:${A}`, s.skipEscape = !0, M;
  }
  function b(n, s) {
    const u = n;
    return u.uuid = u.nss, u.nss = void 0, !s.tolerant && (!u.uuid || !e(u.uuid)) && (u.error = u.error || "UUID is not valid."), u;
  }
  function S(n) {
    const s = n;
    return s.nss = (n.uuid || "").toLowerCase(), s;
  }
  const w = (
    /** @type {SchemeHandler} */
    {
      scheme: "http",
      domainHost: !0,
      parse: r,
      serialize: i
    }
  ), P = (
    /** @type {SchemeHandler} */
    {
      scheme: "https",
      domainHost: w.domainHost,
      parse: r,
      serialize: i
    }
  ), _ = (
    /** @type {SchemeHandler} */
    {
      scheme: "ws",
      domainHost: !0,
      parse: l,
      serialize: f
    }
  ), d = (
    /** @type {SchemeHandler} */
    {
      scheme: "wss",
      domainHost: _.domainHost,
      parse: _.parse,
      serialize: _.serialize
    }
  ), p = (
    /** @type {Record<SchemeName, SchemeHandler>} */
    {
      http: w,
      https: P,
      ws: _,
      wss: d,
      urn: (
        /** @type {SchemeHandler} */
        {
          scheme: "urn",
          parse: v,
          serialize: g,
          skipNormalize: !0
        }
      ),
      "urn:uuid": (
        /** @type {SchemeHandler} */
        {
          scheme: "urn:uuid",
          parse: b,
          serialize: S,
          skipNormalize: !0
        }
      )
    }
  );
  Object.setPrototypeOf(p, null);
  function $(n) {
    return n && (p[
      /** @type {SchemeName} */
      n
    ] || p[
      /** @type {SchemeName} */
      n.toLowerCase()
    ]) || void 0;
  }
  return dr = {
    wsIsSecure: h,
    SCHEMES: p,
    isValidSchemeName: a,
    getSchemeHandler: $
  }, dr;
}
var tn;
function Xa() {
  if (tn) return Fe.exports;
  tn = 1;
  const { normalizeIPv6: e, removeDotSegments: t, recomposeAuthority: o, normalizePercentEncoding: a, normalizePathEncoding: h, escapePreservingEscapes: r, reescapeHostDelimiters: i, isIPv4: l, nonSimpleDomain: f } = wa(), { SCHEMES: v, getSchemeHandler: g } = Ya();
  function b(R, T) {
    return typeof R == "string" ? R = /** @type {T} */
    n(R, T) : typeof R == "object" && (R = /** @type {T} */
    $(_(R, T), T)), R;
  }
  function S(R, T, M) {
    const A = M ? Object.assign({ scheme: "null" }, M) : { scheme: "null" }, q = w($(R, A), $(T, A), A, !0);
    return A.skipEscape = !0, _(q, A);
  }
  function w(R, T, M, A) {
    const q = {};
    return A || (R = $(_(R, M), M), T = $(_(T, M), M)), M = M || {}, !M.tolerant && T.scheme ? (q.scheme = T.scheme, q.userinfo = T.userinfo, q.host = T.host, q.port = T.port, q.path = t(T.path || ""), q.query = T.query) : (T.userinfo !== void 0 || T.host !== void 0 || T.port !== void 0 ? (q.userinfo = T.userinfo, q.host = T.host, q.port = T.port, q.path = t(T.path || ""), q.query = T.query) : (T.path ? (T.path[0] === "/" ? q.path = t(T.path) : ((R.userinfo !== void 0 || R.host !== void 0 || R.port !== void 0) && !R.path ? q.path = "/" + T.path : R.path ? q.path = R.path.slice(0, R.path.lastIndexOf("/") + 1) + T.path : q.path = T.path, q.path = t(q.path)), q.query = T.query) : (q.path = R.path, T.query !== void 0 ? q.query = T.query : q.query = R.query), q.userinfo = R.userinfo, q.host = R.host, q.port = R.port), q.scheme = R.scheme), q.fragment = T.fragment, q;
  }
  function P(R, T, M) {
    const A = u(R, M), q = u(T, M);
    return A !== void 0 && q !== void 0 && A.toLowerCase() === q.toLowerCase();
  }
  function _(R, T) {
    const M = {
      host: R.host,
      scheme: R.scheme,
      userinfo: R.userinfo,
      port: R.port,
      path: R.path,
      query: R.query,
      nid: R.nid,
      nss: R.nss,
      uuid: R.uuid,
      fragment: R.fragment,
      reference: R.reference,
      resourceName: R.resourceName,
      secure: R.secure,
      error: ""
    }, A = Object.assign({}, T), q = [], H = g(A.scheme || M.scheme);
    H && H.serialize && H.serialize(M, A), M.path !== void 0 && (A.skipEscape ? M.path = a(M.path) : (M.path = r(M.path), M.scheme !== void 0 && (M.path = M.path.split("%3A").join(":")))), A.reference !== "suffix" && M.scheme && q.push(M.scheme, ":");
    const ee = o(M);
    if (ee !== void 0 && (A.reference !== "suffix" && q.push("//"), q.push(ee), M.path && M.path[0] !== "/" && q.push("/")), M.path !== void 0) {
      let te = M.path;
      !A.absolutePath && (!H || !H.absolutePath) && (te = t(te)), ee === void 0 && te[0] === "/" && te[1] === "/" && (te = "/%2F" + te.slice(2)), q.push(te);
    }
    return M.query !== void 0 && q.push("?", M.query), M.fragment !== void 0 && q.push("#", M.fragment), q.join("");
  }
  const d = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u, m = /^(?:[^#/:?]+:)?\/\/([^/?#]*)/;
  function c(R, T) {
    if (T[2] !== void 0 && R.path && R.path[0] !== "/")
      return 'URI path must start with "/" when authority is present.';
    if (typeof R.port == "number" && (R.port < 0 || R.port > 65535))
      return "URI port is malformed.";
  }
  function p(R, T) {
    const M = Object.assign({}, T), A = {
      scheme: void 0,
      userinfo: void 0,
      host: "",
      port: void 0,
      path: "",
      query: void 0,
      fragment: void 0
    };
    let q = !1, H = !1;
    M.reference === "suffix" && (M.scheme ? R = M.scheme + ":" + R : R = "//" + R);
    const ee = R.match(m);
    ee !== null && ee[1].indexOf("\\") !== -1 && (A.error = "URI authority must not contain a literal backslash.", q = !0);
    const te = R.match(d);
    if (te) {
      A.scheme = te[1], A.userinfo = te[3], A.host = te[4], A.port = parseInt(te[5], 10), A.path = te[6] || "", A.query = te[7], A.fragment = te[8], isNaN(A.port) && (A.port = te[5]);
      const fe = c(A, te);
      if (fe !== void 0 && (A.error = A.error || fe, q = !0), A.host)
        if (l(A.host) === !1) {
          const L = e(A.host);
          A.host = L.host.toLowerCase(), H = L.isIPV6;
        } else
          H = !0;
      A.scheme === void 0 && A.userinfo === void 0 && A.host === void 0 && A.port === void 0 && A.query === void 0 && !A.path ? A.reference = "same-document" : A.scheme === void 0 ? A.reference = "relative" : A.fragment === void 0 ? A.reference = "absolute" : A.reference = "uri", M.reference && M.reference !== "suffix" && M.reference !== A.reference && (A.error = A.error || "URI is not a " + M.reference + " reference.");
      const Y = g(M.scheme || A.scheme);
      if (!M.unicodeSupport && (!Y || !Y.unicodeSupport) && A.host && (M.domainHost || Y && Y.domainHost) && H === !1 && f(A.host))
        try {
          A.host = new URL("http://" + A.host).hostname;
        } catch (me) {
          A.error = A.error || "Host's domain name can not be converted to ASCII: " + me;
        }
      if ((!Y || Y && !Y.skipNormalize) && (R.indexOf("%") !== -1 && (A.scheme !== void 0 && (A.scheme = unescape(A.scheme)), A.host !== void 0 && (A.host = i(unescape(A.host), H))), A.path && (A.path = h(A.path)), A.fragment))
        try {
          A.fragment = encodeURI(decodeURIComponent(A.fragment));
        } catch {
          A.error = A.error || "URI malformed";
        }
      Y && Y.parse && Y.parse(A, M);
    } else
      A.error = A.error || "URI can not be parsed.";
    return { parsed: A, malformedAuthorityOrPort: q };
  }
  function $(R, T) {
    return p(R, T).parsed;
  }
  function n(R, T) {
    return s(R, T).normalized;
  }
  function s(R, T) {
    const { parsed: M, malformedAuthorityOrPort: A } = p(R, T);
    return {
      normalized: A ? R : _(M, T),
      malformedAuthorityOrPort: A
    };
  }
  function u(R, T) {
    if (typeof R == "string") {
      const { normalized: M, malformedAuthorityOrPort: A } = s(R, T);
      return A ? void 0 : M;
    }
    if (typeof R == "object")
      return _(R, T);
  }
  const k = {
    SCHEMES: v,
    normalize: b,
    resolve: S,
    resolveComponent: w,
    equal: P,
    serialize: _,
    parse: $
  };
  return Fe.exports = k, Fe.exports.default = k, Fe.exports.fastUri = k, Fe.exports;
}
var rn;
function Qa() {
  if (rn) return Xe;
  rn = 1, Object.defineProperty(Xe, "__esModule", { value: !0 });
  const e = Xa();
  return e.code = 'require("ajv/dist/runtime/uri").default', Xe.default = e, Xe;
}
var nn;
function Za() {
  return nn || (nn = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = void 0;
    var t = /* @__PURE__ */ Wt();
    Object.defineProperty(e, "KeywordCxt", { enumerable: !0, get: function() {
      return t.KeywordCxt;
    } });
    var o = /* @__PURE__ */ G();
    Object.defineProperty(e, "_", { enumerable: !0, get: function() {
      return o._;
    } }), Object.defineProperty(e, "str", { enumerable: !0, get: function() {
      return o.str;
    } }), Object.defineProperty(e, "stringify", { enumerable: !0, get: function() {
      return o.stringify;
    } }), Object.defineProperty(e, "nil", { enumerable: !0, get: function() {
      return o.nil;
    } }), Object.defineProperty(e, "Name", { enumerable: !0, get: function() {
      return o.Name;
    } }), Object.defineProperty(e, "CodeGen", { enumerable: !0, get: function() {
      return o.CodeGen;
    } });
    const a = /* @__PURE__ */ vr(), h = /* @__PURE__ */ Yt(), r = /* @__PURE__ */ $a(), i = /* @__PURE__ */ Xt(), l = /* @__PURE__ */ G(), f = /* @__PURE__ */ Jt(), v = /* @__PURE__ */ Ut(), g = /* @__PURE__ */ X(), b = Wa, S = /* @__PURE__ */ Qa(), w = (L, N) => new RegExp(L, N);
    w.code = "new RegExp";
    const P = ["removeAdditional", "useDefaults", "coerceTypes"], _ = /* @__PURE__ */ new Set([
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
    ]), d = {
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
    }, m = {
      ignoreKeywordsWithRef: "",
      jsPropertySyntax: "",
      unicode: '"minLength"/"maxLength" account for unicode characters by default.'
    }, c = 200;
    function p(L) {
      var N, x, O, y, E, I, B, K, Z, Q, C, j, D, V, U, W, ne, ye, le, de, ae, Oe, pe, Zt, er;
      const ze = L.strict, tr = (N = L.code) === null || N === void 0 ? void 0 : N.optimize, Rr = tr === !0 || tr === void 0 ? 1 : tr || 0, Cr = (O = (x = L.code) === null || x === void 0 ? void 0 : x.regExp) !== null && O !== void 0 ? O : w, Ma = (y = L.uriResolver) !== null && y !== void 0 ? y : S.default;
      return {
        strictSchema: (I = (E = L.strictSchema) !== null && E !== void 0 ? E : ze) !== null && I !== void 0 ? I : !0,
        strictNumbers: (K = (B = L.strictNumbers) !== null && B !== void 0 ? B : ze) !== null && K !== void 0 ? K : !0,
        strictTypes: (Q = (Z = L.strictTypes) !== null && Z !== void 0 ? Z : ze) !== null && Q !== void 0 ? Q : "log",
        strictTuples: (j = (C = L.strictTuples) !== null && C !== void 0 ? C : ze) !== null && j !== void 0 ? j : "log",
        strictRequired: (V = (D = L.strictRequired) !== null && D !== void 0 ? D : ze) !== null && V !== void 0 ? V : !1,
        code: L.code ? { ...L.code, optimize: Rr, regExp: Cr } : { optimize: Rr, regExp: Cr },
        loopRequired: (U = L.loopRequired) !== null && U !== void 0 ? U : c,
        loopEnum: (W = L.loopEnum) !== null && W !== void 0 ? W : c,
        meta: (ne = L.meta) !== null && ne !== void 0 ? ne : !0,
        messages: (ye = L.messages) !== null && ye !== void 0 ? ye : !0,
        inlineRefs: (le = L.inlineRefs) !== null && le !== void 0 ? le : !0,
        schemaId: (de = L.schemaId) !== null && de !== void 0 ? de : "$id",
        addUsedSchema: (ae = L.addUsedSchema) !== null && ae !== void 0 ? ae : !0,
        validateSchema: (Oe = L.validateSchema) !== null && Oe !== void 0 ? Oe : !0,
        validateFormats: (pe = L.validateFormats) !== null && pe !== void 0 ? pe : !0,
        unicodeRegExp: (Zt = L.unicodeRegExp) !== null && Zt !== void 0 ? Zt : !0,
        int32range: (er = L.int32range) !== null && er !== void 0 ? er : !0,
        uriResolver: Ma
      };
    }
    class $ {
      constructor(N = {}) {
        this.schemas = {}, this.refs = {}, this.formats = /* @__PURE__ */ Object.create(null), this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), N = this.opts = { ...N, ...p(N) };
        const { es5: x, lines: O } = this.opts.code;
        this.scope = new l.ValueScope({ scope: {}, prefixes: _, es5: x, lines: O }), this.logger = A(N.logger);
        const y = N.validateFormats;
        N.validateFormats = !1, this.RULES = (0, r.getRules)(), n.call(this, d, N, "NOT SUPPORTED"), n.call(this, m, N, "DEPRECATED", "warn"), this._metaOpts = T.call(this), N.formats && k.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), N.keywords && R.call(this, N.keywords), typeof N.meta == "object" && this.addMetaSchema(N.meta), u.call(this), N.validateFormats = y;
      }
      _addVocabularies() {
        this.addKeyword("$async");
      }
      _addDefaultMetaSchema() {
        const { $data: N, meta: x, schemaId: O } = this.opts;
        let y = b;
        O === "id" && (y = { ...b }, y.id = y.$id, delete y.$id), x && N && this.addMetaSchema(y, y[O], !1);
      }
      defaultMeta() {
        const { meta: N, schemaId: x } = this.opts;
        return this.opts.defaultMeta = typeof N == "object" ? N[x] || N : void 0;
      }
      validate(N, x) {
        let O;
        if (typeof N == "string") {
          if (O = this.getSchema(N), !O)
            throw new Error(`no schema with key or ref "${N}"`);
        } else
          O = this.compile(N);
        const y = O(x);
        return "$async" in O || (this.errors = O.errors), y;
      }
      compile(N, x) {
        const O = this._addSchema(N, x);
        return O.validate || this._compileSchemaEnv(O);
      }
      compileAsync(N, x) {
        if (typeof this.opts.loadSchema != "function")
          throw new Error("options.loadSchema should be a function");
        const { loadSchema: O } = this.opts;
        return y.call(this, N, x);
        async function y(Q, C) {
          await E.call(this, Q.$schema);
          const j = this._addSchema(Q, C);
          return j.validate || I.call(this, j);
        }
        async function E(Q) {
          Q && !this.getSchema(Q) && await y.call(this, { $ref: Q }, !0);
        }
        async function I(Q) {
          try {
            return this._compileSchemaEnv(Q);
          } catch (C) {
            if (!(C instanceof h.default))
              throw C;
            return B.call(this, C), await K.call(this, C.missingSchema), I.call(this, Q);
          }
        }
        function B({ missingSchema: Q, missingRef: C }) {
          if (this.refs[Q])
            throw new Error(`AnySchema ${Q} is loaded but ${C} cannot be resolved`);
        }
        async function K(Q) {
          const C = await Z.call(this, Q);
          this.refs[Q] || await E.call(this, C.$schema), this.refs[Q] || this.addSchema(C, Q, x);
        }
        async function Z(Q) {
          const C = this._loading[Q];
          if (C)
            return C;
          try {
            return await (this._loading[Q] = O(Q));
          } finally {
            delete this._loading[Q];
          }
        }
      }
      // Adds schema to the instance
      addSchema(N, x, O, y = this.opts.validateSchema) {
        if (Array.isArray(N)) {
          for (const I of N)
            this.addSchema(I, void 0, O, y);
          return this;
        }
        let E;
        if (typeof N == "object") {
          const { schemaId: I } = this.opts;
          if (E = N[I], E !== void 0 && typeof E != "string")
            throw new Error(`schema ${I} must be string`);
        }
        return x = (0, f.normalizeId)(x || E), this._checkUnique(x), this.schemas[x] = this._addSchema(N, O, x, y, !0), this;
      }
      // Add schema that will be used to validate other schemas
      // options in META_IGNORE_OPTIONS are alway set to false
      addMetaSchema(N, x, O = this.opts.validateSchema) {
        return this.addSchema(N, x, !0, O), this;
      }
      //  Validate schema against its meta-schema
      validateSchema(N, x) {
        if (typeof N == "boolean")
          return !0;
        let O;
        if (O = N.$schema, O !== void 0 && typeof O != "string")
          throw new Error("$schema must be a string");
        if (O = O || this.opts.defaultMeta || this.defaultMeta(), !O)
          return this.logger.warn("meta-schema not available"), this.errors = null, !0;
        const y = this.validate(O, N);
        if (!y && x) {
          const E = "schema is invalid: " + this.errorsText();
          if (this.opts.validateSchema === "log")
            this.logger.error(E);
          else
            throw new Error(E);
        }
        return y;
      }
      // Get compiled schema by `key` or `ref`.
      // (`key` that was passed to `addSchema` or full schema reference - `schema.$id` or resolved id)
      getSchema(N) {
        let x;
        for (; typeof (x = s.call(this, N)) == "string"; )
          N = x;
        if (x === void 0) {
          const { schemaId: O } = this.opts, y = new i.SchemaEnv({ schema: {}, schemaId: O });
          if (x = i.resolveSchema.call(this, y, N), !x)
            return;
          this.refs[N] = x;
        }
        return x.validate || this._compileSchemaEnv(x);
      }
      // Remove cached schema(s).
      // If no parameter is passed all schemas but meta-schemas are removed.
      // If RegExp is passed all schemas with key/id matching pattern but meta-schemas are removed.
      // Even if schema is referenced by other schemas it still can be removed as other schemas have local references.
      removeSchema(N) {
        if (N instanceof RegExp)
          return this._removeAllSchemas(this.schemas, N), this._removeAllSchemas(this.refs, N), this;
        switch (typeof N) {
          case "undefined":
            return this._removeAllSchemas(this.schemas), this._removeAllSchemas(this.refs), this._cache.clear(), this;
          case "string": {
            const x = s.call(this, N);
            return typeof x == "object" && this._cache.delete(x.schema), delete this.schemas[N], delete this.refs[N], this;
          }
          case "object": {
            const x = N;
            this._cache.delete(x);
            let O = N[this.opts.schemaId];
            return O && (O = (0, f.normalizeId)(O), delete this.schemas[O], delete this.refs[O]), this;
          }
          default:
            throw new Error("ajv.removeSchema: invalid parameter");
        }
      }
      // add "vocabulary" - a collection of keywords
      addVocabulary(N) {
        for (const x of N)
          this.addKeyword(x);
        return this;
      }
      addKeyword(N, x) {
        let O;
        if (typeof N == "string")
          O = N, typeof x == "object" && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), x.keyword = O);
        else if (typeof N == "object" && x === void 0) {
          if (x = N, O = x.keyword, Array.isArray(O) && !O.length)
            throw new Error("addKeywords: keyword must be string or non-empty array");
        } else
          throw new Error("invalid addKeywords parameters");
        if (H.call(this, O, x), !x)
          return (0, g.eachItem)(O, (E) => ee.call(this, E)), this;
        fe.call(this, x);
        const y = {
          ...x,
          type: (0, v.getJSONTypes)(x.type),
          schemaType: (0, v.getJSONTypes)(x.schemaType)
        };
        return (0, g.eachItem)(O, y.type.length === 0 ? (E) => ee.call(this, E, y) : (E) => y.type.forEach((I) => ee.call(this, E, y, I))), this;
      }
      getKeyword(N) {
        const x = this.RULES.all[N];
        return typeof x == "object" ? x.definition : !!x;
      }
      // Remove keyword
      removeKeyword(N) {
        const { RULES: x } = this;
        delete x.keywords[N], delete x.all[N];
        for (const O of x.rules) {
          const y = O.rules.findIndex((E) => E.keyword === N);
          y >= 0 && O.rules.splice(y, 1);
        }
        return this;
      }
      // Add format
      addFormat(N, x) {
        return typeof x == "string" && (x = new RegExp(x)), this.formats[N] = x, this;
      }
      errorsText(N = this.errors, { separator: x = ", ", dataVar: O = "data" } = {}) {
        return !N || N.length === 0 ? "No errors" : N.map((y) => `${O}${y.instancePath} ${y.message}`).reduce((y, E) => y + x + E);
      }
      $dataMetaSchema(N, x) {
        const O = this.RULES.all;
        N = JSON.parse(JSON.stringify(N));
        for (const y of x) {
          const E = y.split("/").slice(1);
          let I = N;
          for (const B of E)
            I = I[B];
          for (const B in O) {
            const K = O[B];
            if (typeof K != "object")
              continue;
            const { $data: Z } = K.definition, Q = I[B];
            Z && Q && (I[B] = me(Q));
          }
        }
        return N;
      }
      _removeAllSchemas(N, x) {
        for (const O in N) {
          const y = N[O];
          (!x || x.test(O)) && (typeof y == "string" ? delete N[O] : y && !y.meta && (this._cache.delete(y.schema), delete N[O]));
        }
      }
      _addSchema(N, x, O, y = this.opts.validateSchema, E = this.opts.addUsedSchema) {
        let I;
        const { schemaId: B } = this.opts;
        if (typeof N == "object")
          I = N[B];
        else {
          if (this.opts.jtd)
            throw new Error("schema must be object");
          if (typeof N != "boolean")
            throw new Error("schema must be object or boolean");
        }
        let K = this._cache.get(N);
        if (K !== void 0)
          return K;
        O = (0, f.normalizeId)(I || O);
        const Z = f.getSchemaRefs.call(this, N, O);
        return K = new i.SchemaEnv({ schema: N, schemaId: B, meta: x, baseId: O, localRefs: Z }), this._cache.set(K.schema, K), E && !O.startsWith("#") && (O && this._checkUnique(O), this.refs[O] = K), y && this.validateSchema(N, !0), K;
      }
      _checkUnique(N) {
        if (this.schemas[N] || this.refs[N])
          throw new Error(`schema with key or id "${N}" already exists`);
      }
      _compileSchemaEnv(N) {
        if (N.meta ? this._compileMetaSchema(N) : i.compileSchema.call(this, N), !N.validate)
          throw new Error("ajv implementation error");
        return N.validate;
      }
      _compileMetaSchema(N) {
        const x = this.opts;
        this.opts = this._metaOpts;
        try {
          i.compileSchema.call(this, N);
        } finally {
          this.opts = x;
        }
      }
    }
    $.ValidationError = a.default, $.MissingRefError = h.default, e.default = $;
    function n(L, N, x, O = "error") {
      for (const y in L) {
        const E = y;
        E in N && this.logger[O](`${x}: option ${y}. ${L[E]}`);
      }
    }
    function s(L) {
      return L = (0, f.normalizeId)(L), this.schemas[L] || this.refs[L];
    }
    function u() {
      const L = this.opts.schemas;
      if (L)
        if (Array.isArray(L))
          this.addSchema(L);
        else
          for (const N in L)
            this.addSchema(L[N], N);
    }
    function k() {
      for (const L in this.opts.formats) {
        const N = this.opts.formats[L];
        N && this.addFormat(L, N);
      }
    }
    function R(L) {
      if (Array.isArray(L)) {
        this.addVocabulary(L);
        return;
      }
      this.logger.warn("keywords option as map is deprecated, pass array");
      for (const N in L) {
        const x = L[N];
        x.keyword || (x.keyword = N), this.addKeyword(x);
      }
    }
    function T() {
      const L = { ...this.opts };
      for (const N of P)
        delete L[N];
      return L;
    }
    const M = { log() {
    }, warn() {
    }, error() {
    } };
    function A(L) {
      if (L === !1)
        return M;
      if (L === void 0)
        return console;
      if (L.log && L.warn && L.error)
        return L;
      throw new Error("logger must implement log, warn and error methods");
    }
    const q = /^[a-z_$][a-z0-9_$:-]*$/i;
    function H(L, N) {
      const { RULES: x } = this;
      if ((0, g.eachItem)(L, (O) => {
        if (x.keywords[O])
          throw new Error(`Keyword ${O} is already defined`);
        if (!q.test(O))
          throw new Error(`Keyword ${O} has invalid name`);
      }), !!N && N.$data && !("code" in N || "validate" in N))
        throw new Error('$data keyword must have "code" or "validate" function');
    }
    function ee(L, N, x) {
      var O;
      const y = N?.post;
      if (x && y)
        throw new Error('keyword with "post" flag cannot have "type"');
      const { RULES: E } = this;
      let I = y ? E.post : E.rules.find(({ type: K }) => K === x);
      if (I || (I = { type: x, rules: [] }, E.rules.push(I)), E.keywords[L] = !0, !N)
        return;
      const B = {
        keyword: L,
        definition: {
          ...N,
          type: (0, v.getJSONTypes)(N.type),
          schemaType: (0, v.getJSONTypes)(N.schemaType)
        }
      };
      N.before ? te.call(this, I, B, N.before) : I.rules.push(B), E.all[L] = B, (O = N.implements) === null || O === void 0 || O.forEach((K) => this.addKeyword(K));
    }
    function te(L, N, x) {
      const O = L.rules.findIndex((y) => y.keyword === x);
      O >= 0 ? L.rules.splice(O, 0, N) : (L.rules.push(N), this.logger.warn(`rule ${x} is not defined`));
    }
    function fe(L) {
      let { metaSchema: N } = L;
      N !== void 0 && (L.$data && this.opts.$data && (N = me(N)), L.validateSchema = this.compile(N, !0));
    }
    const Y = {
      $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
    };
    function me(L) {
      return { anyOf: [L, Y] };
    }
  })(rr)), rr;
}
var Qe = {}, Ze = {}, et = {}, an;
function eo() {
  if (an) return et;
  an = 1, Object.defineProperty(et, "__esModule", { value: !0 });
  const e = {
    keyword: "id",
    code() {
      throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
    }
  };
  return et.default = e, et;
}
var Pe = {}, on;
function $r() {
  if (on) return Pe;
  on = 1, Object.defineProperty(Pe, "__esModule", { value: !0 }), Pe.callRef = Pe.getValidate = void 0;
  const e = /* @__PURE__ */ Yt(), t = /* @__PURE__ */ $e(), o = /* @__PURE__ */ G(), a = /* @__PURE__ */ ve(), h = /* @__PURE__ */ Xt(), r = /* @__PURE__ */ X(), i = {
    keyword: "$ref",
    schemaType: "string",
    code(v) {
      const { gen: g, schema: b, it: S } = v, { baseId: w, schemaEnv: P, validateName: _, opts: d, self: m } = S, { root: c } = P;
      if ((b === "#" || b === "#/") && w === c.baseId)
        return $();
      const p = h.resolveRef.call(m, c, w, b);
      if (p === void 0)
        throw new e.default(S.opts.uriResolver, w, b);
      if (p instanceof h.SchemaEnv)
        return n(p);
      return s(p);
      function $() {
        if (P === c)
          return f(v, _, P, P.$async);
        const u = g.scopeValue("root", { ref: c });
        return f(v, (0, o._)`${u}.validate`, c, c.$async);
      }
      function n(u) {
        const k = l(v, u);
        f(v, k, u, u.$async);
      }
      function s(u) {
        const k = g.scopeValue("schema", d.code.source === !0 ? { ref: u, code: (0, o.stringify)(u) } : { ref: u }), R = g.name("valid"), T = v.subschema({
          schema: u,
          dataTypes: [],
          schemaPath: o.nil,
          topSchemaRef: k,
          errSchemaPath: b
        }, R);
        v.mergeEvaluated(T), v.ok(R);
      }
    }
  };
  function l(v, g) {
    const { gen: b } = v;
    return g.validate ? b.scopeValue("validate", { ref: g.validate }) : (0, o._)`${b.scopeValue("wrapper", { ref: g })}.validate`;
  }
  Pe.getValidate = l;
  function f(v, g, b, S) {
    const { gen: w, it: P } = v, { allErrors: _, schemaEnv: d, opts: m } = P, c = m.passContext ? a.default.this : o.nil;
    S ? p() : $();
    function p() {
      if (!d.$async)
        throw new Error("async schema referenced by sync schema");
      const u = w.let("valid");
      w.try(() => {
        w.code((0, o._)`await ${(0, t.callValidateCode)(v, g, c)}`), s(g), _ || w.assign(u, !0);
      }, (k) => {
        w.if((0, o._)`!(${k} instanceof ${P.ValidationError})`, () => w.throw(k)), n(k), _ || w.assign(u, !1);
      }), v.ok(u);
    }
    function $() {
      v.result((0, t.callValidateCode)(v, g, c), () => s(g), () => n(g));
    }
    function n(u) {
      const k = (0, o._)`${u}.errors`;
      w.assign(a.default.vErrors, (0, o._)`${a.default.vErrors} === null ? ${k} : ${a.default.vErrors}.concat(${k})`), w.assign(a.default.errors, (0, o._)`${a.default.vErrors}.length`);
    }
    function s(u) {
      var k;
      if (!P.opts.unevaluated)
        return;
      const R = (k = b?.validate) === null || k === void 0 ? void 0 : k.evaluated;
      if (P.props !== !0)
        if (R && !R.dynamicProps)
          R.props !== void 0 && (P.props = r.mergeEvaluated.props(w, R.props, P.props));
        else {
          const T = w.var("props", (0, o._)`${u}.evaluated.props`);
          P.props = r.mergeEvaluated.props(w, T, P.props, o.Name);
        }
      if (P.items !== !0)
        if (R && !R.dynamicItems)
          R.items !== void 0 && (P.items = r.mergeEvaluated.items(w, R.items, P.items));
        else {
          const T = w.var("items", (0, o._)`${u}.evaluated.items`);
          P.items = r.mergeEvaluated.items(w, T, P.items, o.Name);
        }
    }
  }
  return Pe.callRef = f, Pe.default = i, Pe;
}
var sn;
function to() {
  if (sn) return Ze;
  sn = 1, Object.defineProperty(Ze, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ eo(), t = /* @__PURE__ */ $r(), o = [
    "$schema",
    "$id",
    "$defs",
    "$vocabulary",
    { keyword: "$comment" },
    "definitions",
    e.default,
    t.default
  ];
  return Ze.default = o, Ze;
}
var tt = {}, rt = {}, cn;
function ro() {
  if (cn) return rt;
  cn = 1, Object.defineProperty(rt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), t = e.operators, o = {
    maximum: { okStr: "<=", ok: t.LTE, fail: t.GT },
    minimum: { okStr: ">=", ok: t.GTE, fail: t.LT },
    exclusiveMaximum: { okStr: "<", ok: t.LT, fail: t.GTE },
    exclusiveMinimum: { okStr: ">", ok: t.GT, fail: t.LTE }
  }, a = {
    message: ({ keyword: r, schemaCode: i }) => (0, e.str)`must be ${o[r].okStr} ${i}`,
    params: ({ keyword: r, schemaCode: i }) => (0, e._)`{comparison: ${o[r].okStr}, limit: ${i}}`
  }, h = {
    keyword: Object.keys(o),
    type: "number",
    schemaType: "number",
    $data: !0,
    error: a,
    code(r) {
      const { keyword: i, data: l, schemaCode: f } = r;
      r.fail$data((0, e._)`${l} ${o[i].fail} ${f} || isNaN(${l})`);
    }
  };
  return rt.default = h, rt;
}
var nt = {}, ln;
function no() {
  if (ln) return nt;
  ln = 1, Object.defineProperty(nt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), o = {
    keyword: "multipleOf",
    type: "number",
    schemaType: "number",
    $data: !0,
    error: {
      message: ({ schemaCode: a }) => (0, e.str)`must be multiple of ${a}`,
      params: ({ schemaCode: a }) => (0, e._)`{multipleOf: ${a}}`
    },
    code(a) {
      const { gen: h, data: r, schemaCode: i, it: l } = a, f = l.opts.multipleOfPrecision, v = h.let("res"), g = f ? (0, e._)`Math.abs(Math.round(${v}) - ${v}) > 1e-${f}` : (0, e._)`${v} !== parseInt(${v})`;
      a.fail$data((0, e._)`(${i} === 0 || (${v} = ${r}/${i}, ${g}))`);
    }
  };
  return nt.default = o, nt;
}
var at = {}, ot = {}, dn;
function ao() {
  if (dn) return ot;
  dn = 1, Object.defineProperty(ot, "__esModule", { value: !0 });
  function e(t) {
    const o = t.length;
    let a = 0, h = 0, r;
    for (; h < o; )
      a++, r = t.charCodeAt(h++), r >= 55296 && r <= 56319 && h < o && (r = t.charCodeAt(h), (r & 64512) === 56320 && h++);
    return a;
  }
  return ot.default = e, e.code = 'require("ajv/dist/runtime/ucs2length").default', ot;
}
var un;
function oo() {
  if (un) return at;
  un = 1, Object.defineProperty(at, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), o = /* @__PURE__ */ ao(), h = {
    keyword: ["maxLength", "minLength"],
    type: "string",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: r, schemaCode: i }) {
        const l = r === "maxLength" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${l} than ${i} characters`;
      },
      params: ({ schemaCode: r }) => (0, e._)`{limit: ${r}}`
    },
    code(r) {
      const { keyword: i, data: l, schemaCode: f, it: v } = r, g = i === "maxLength" ? e.operators.GT : e.operators.LT, b = v.opts.unicode === !1 ? (0, e._)`${l}.length` : (0, e._)`${(0, t.useFunc)(r.gen, o.default)}(${l})`;
      r.fail$data((0, e._)`${b} ${g} ${f}`);
    }
  };
  return at.default = h, at;
}
var st = {}, fn;
function so() {
  if (fn) return st;
  fn = 1, Object.defineProperty(st, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ $e(), t = /* @__PURE__ */ X(), o = /* @__PURE__ */ G(), h = {
    keyword: "pattern",
    type: "string",
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: r }) => (0, o.str)`must match pattern "${r}"`,
      params: ({ schemaCode: r }) => (0, o._)`{pattern: ${r}}`
    },
    code(r) {
      const { gen: i, data: l, $data: f, schema: v, schemaCode: g, it: b } = r, S = b.opts.unicodeRegExp ? "u" : "";
      if (f) {
        const { regExp: w } = b.opts.code, P = w.code === "new RegExp" ? (0, o._)`new RegExp` : (0, t.useFunc)(i, w), _ = i.let("valid");
        i.try(() => i.assign(_, (0, o._)`${P}(${g}, ${S}).test(${l})`), () => i.assign(_, !1)), r.fail$data((0, o._)`!${_}`);
      } else {
        const w = (0, e.usePattern)(r, v);
        r.fail$data((0, o._)`!${w}.test(${l})`);
      }
    }
  };
  return st.default = h, st;
}
var it = {}, pn;
function io() {
  if (pn) return it;
  pn = 1, Object.defineProperty(it, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), o = {
    keyword: ["maxProperties", "minProperties"],
    type: "object",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: a, schemaCode: h }) {
        const r = a === "maxProperties" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${r} than ${h} properties`;
      },
      params: ({ schemaCode: a }) => (0, e._)`{limit: ${a}}`
    },
    code(a) {
      const { keyword: h, data: r, schemaCode: i } = a, l = h === "maxProperties" ? e.operators.GT : e.operators.LT;
      a.fail$data((0, e._)`Object.keys(${r}).length ${l} ${i}`);
    }
  };
  return it.default = o, it;
}
var ct = {}, hn;
function co() {
  if (hn) return ct;
  hn = 1, Object.defineProperty(ct, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ $e(), t = /* @__PURE__ */ G(), o = /* @__PURE__ */ X(), h = {
    keyword: "required",
    type: "object",
    schemaType: "array",
    $data: !0,
    error: {
      message: ({ params: { missingProperty: r } }) => (0, t.str)`must have required property '${r}'`,
      params: ({ params: { missingProperty: r } }) => (0, t._)`{missingProperty: ${r}}`
    },
    code(r) {
      const { gen: i, schema: l, schemaCode: f, data: v, $data: g, it: b } = r, { opts: S } = b;
      if (!g && l.length === 0)
        return;
      const w = l.length >= S.loopRequired;
      if (b.allErrors ? P() : _(), S.strictRequired) {
        const c = r.parentSchema.properties, { definedProperties: p } = r.it;
        for (const $ of l)
          if (c?.[$] === void 0 && !p.has($)) {
            const n = b.schemaEnv.baseId + b.errSchemaPath, s = `required property "${$}" is not defined at "${n}" (strictRequired)`;
            (0, o.checkStrictMode)(b, s, b.opts.strictRequired);
          }
      }
      function P() {
        if (w || g)
          r.block$data(t.nil, d);
        else
          for (const c of l)
            (0, e.checkReportMissingProp)(r, c);
      }
      function _() {
        const c = i.let("missing");
        if (w || g) {
          const p = i.let("valid", !0);
          r.block$data(p, () => m(c, p)), r.ok(p);
        } else
          i.if((0, e.checkMissingProp)(r, l, c)), (0, e.reportMissingProp)(r, c), i.else();
      }
      function d() {
        i.forOf("prop", f, (c) => {
          r.setParams({ missingProperty: c }), i.if((0, e.noPropertyInData)(i, v, c, S.ownProperties), () => r.error());
        });
      }
      function m(c, p) {
        r.setParams({ missingProperty: c }), i.forOf(c, f, () => {
          i.assign(p, (0, e.propertyInData)(i, v, c, S.ownProperties)), i.if((0, t.not)(p), () => {
            r.error(), i.break();
          });
        }, t.nil);
      }
    }
  };
  return ct.default = h, ct;
}
var lt = {}, mn;
function lo() {
  if (mn) return lt;
  mn = 1, Object.defineProperty(lt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), o = {
    keyword: ["maxItems", "minItems"],
    type: "array",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: a, schemaCode: h }) {
        const r = a === "maxItems" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${r} than ${h} items`;
      },
      params: ({ schemaCode: a }) => (0, e._)`{limit: ${a}}`
    },
    code(a) {
      const { keyword: h, data: r, schemaCode: i } = a, l = h === "maxItems" ? e.operators.GT : e.operators.LT;
      a.fail$data((0, e._)`${r}.length ${l} ${i}`);
    }
  };
  return lt.default = o, lt;
}
var dt = {}, ut = {}, yn;
function _r() {
  if (yn) return ut;
  yn = 1, Object.defineProperty(ut, "__esModule", { value: !0 });
  const e = ba();
  return e.code = 'require("ajv/dist/runtime/equal").default', ut.default = e, ut;
}
var gn;
function uo() {
  if (gn) return dt;
  gn = 1, Object.defineProperty(dt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ut(), t = /* @__PURE__ */ G(), o = /* @__PURE__ */ X(), a = /* @__PURE__ */ _r(), r = {
    keyword: "uniqueItems",
    type: "array",
    schemaType: "boolean",
    $data: !0,
    error: {
      message: ({ params: { i, j: l } }) => (0, t.str)`must NOT have duplicate items (items ## ${l} and ${i} are identical)`,
      params: ({ params: { i, j: l } }) => (0, t._)`{i: ${i}, j: ${l}}`
    },
    code(i) {
      const { gen: l, data: f, $data: v, schema: g, parentSchema: b, schemaCode: S, it: w } = i;
      if (!v && !g)
        return;
      const P = l.let("valid"), _ = b.items ? (0, e.getSchemaTypes)(b.items) : [];
      i.block$data(P, d, (0, t._)`${S} === false`), i.ok(P);
      function d() {
        const $ = l.let("i", (0, t._)`${f}.length`), n = l.let("j");
        i.setParams({ i: $, j: n }), l.assign(P, !0), l.if((0, t._)`${$} > 1`, () => (m() ? c : p)($, n));
      }
      function m() {
        return _.length > 0 && !_.some(($) => $ === "object" || $ === "array");
      }
      function c($, n) {
        const s = l.name("item"), u = (0, e.checkDataTypes)(_, s, w.opts.strictNumbers, e.DataType.Wrong), k = l.const("indices", (0, t._)`{}`);
        l.for((0, t._)`;${$}--;`, () => {
          l.let(s, (0, t._)`${f}[${$}]`), l.if(u, (0, t._)`continue`), _.length > 1 && l.if((0, t._)`typeof ${s} == "string"`, (0, t._)`${s} += "_"`), l.if((0, t._)`typeof ${k}[${s}] == "number"`, () => {
            l.assign(n, (0, t._)`${k}[${s}]`), i.error(), l.assign(P, !1).break();
          }).code((0, t._)`${k}[${s}] = ${$}`);
        });
      }
      function p($, n) {
        const s = (0, o.useFunc)(l, a.default), u = l.name("outer");
        l.label(u).for((0, t._)`;${$}--;`, () => l.for((0, t._)`${n} = ${$}; ${n}--;`, () => l.if((0, t._)`${s}(${f}[${$}], ${f}[${n}])`, () => {
          i.error(), l.assign(P, !1).break(u);
        })));
      }
    }
  };
  return dt.default = r, dt;
}
var ft = {}, vn;
function fo() {
  if (vn) return ft;
  vn = 1, Object.defineProperty(ft, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), o = /* @__PURE__ */ _r(), h = {
    keyword: "const",
    $data: !0,
    error: {
      message: "must be equal to constant",
      params: ({ schemaCode: r }) => (0, e._)`{allowedValue: ${r}}`
    },
    code(r) {
      const { gen: i, data: l, $data: f, schemaCode: v, schema: g } = r;
      f || g && typeof g == "object" ? r.fail$data((0, e._)`!${(0, t.useFunc)(i, o.default)}(${l}, ${v})`) : r.fail((0, e._)`${g} !== ${l}`);
    }
  };
  return ft.default = h, ft;
}
var pt = {}, $n;
function po() {
  if ($n) return pt;
  $n = 1, Object.defineProperty(pt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), o = /* @__PURE__ */ _r(), h = {
    keyword: "enum",
    schemaType: "array",
    $data: !0,
    error: {
      message: "must be equal to one of the allowed values",
      params: ({ schemaCode: r }) => (0, e._)`{allowedValues: ${r}}`
    },
    code(r) {
      const { gen: i, data: l, $data: f, schema: v, schemaCode: g, it: b } = r;
      if (!f && v.length === 0)
        throw new Error("enum must have non-empty array");
      const S = v.length >= b.opts.loopEnum;
      let w;
      const P = () => w ?? (w = (0, t.useFunc)(i, o.default));
      let _;
      if (S || f)
        _ = i.let("valid"), r.block$data(_, d);
      else {
        if (!Array.isArray(v))
          throw new Error("ajv implementation error");
        const c = i.const("vSchema", g);
        _ = (0, e.or)(...v.map((p, $) => m(c, $)));
      }
      r.pass(_);
      function d() {
        i.assign(_, !1), i.forOf("v", g, (c) => i.if((0, e._)`${P()}(${l}, ${c})`, () => i.assign(_, !0).break()));
      }
      function m(c, p) {
        const $ = v[p];
        return typeof $ == "object" && $ !== null ? (0, e._)`${P()}(${l}, ${c}[${p}])` : (0, e._)`${l} === ${$}`;
      }
    }
  };
  return pt.default = h, pt;
}
var _n;
function ho() {
  if (_n) return tt;
  _n = 1, Object.defineProperty(tt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ro(), t = /* @__PURE__ */ no(), o = /* @__PURE__ */ oo(), a = /* @__PURE__ */ so(), h = /* @__PURE__ */ io(), r = /* @__PURE__ */ co(), i = /* @__PURE__ */ lo(), l = /* @__PURE__ */ uo(), f = /* @__PURE__ */ fo(), v = /* @__PURE__ */ po(), g = [
    // number
    e.default,
    t.default,
    // string
    o.default,
    a.default,
    // object
    h.default,
    r.default,
    // array
    i.default,
    l.default,
    // any
    { keyword: "type", schemaType: ["string", "array"] },
    { keyword: "nullable", schemaType: "boolean" },
    f.default,
    v.default
  ];
  return tt.default = g, tt;
}
var ht = {}, Ae = {}, bn;
function Sa() {
  if (bn) return Ae;
  bn = 1, Object.defineProperty(Ae, "__esModule", { value: !0 }), Ae.validateAdditionalItems = void 0;
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), a = {
    keyword: "additionalItems",
    type: "array",
    schemaType: ["boolean", "object"],
    before: "uniqueItems",
    error: {
      message: ({ params: { len: r } }) => (0, e.str)`must NOT have more than ${r} items`,
      params: ({ params: { len: r } }) => (0, e._)`{limit: ${r}}`
    },
    code(r) {
      const { parentSchema: i, it: l } = r, { items: f } = i;
      if (!Array.isArray(f)) {
        (0, t.checkStrictMode)(l, '"additionalItems" is ignored when "items" is not an array of schemas');
        return;
      }
      h(r, f);
    }
  };
  function h(r, i) {
    const { gen: l, schema: f, data: v, keyword: g, it: b } = r;
    b.items = !0;
    const S = l.const("len", (0, e._)`${v}.length`);
    if (f === !1)
      r.setParams({ len: i.length }), r.pass((0, e._)`${S} <= ${i.length}`);
    else if (typeof f == "object" && !(0, t.alwaysValidSchema)(b, f)) {
      const P = l.var("valid", (0, e._)`${S} <= ${i.length}`);
      l.if((0, e.not)(P), () => w(P)), r.ok(P);
    }
    function w(P) {
      l.forRange("i", i.length, S, (_) => {
        r.subschema({ keyword: g, dataProp: _, dataPropType: t.Type.Num }, P), b.allErrors || l.if((0, e.not)(P), () => l.break());
      });
    }
  }
  return Ae.validateAdditionalItems = h, Ae.default = a, Ae;
}
var mt = {}, Me = {}, wn;
function Pa() {
  if (wn) return Me;
  wn = 1, Object.defineProperty(Me, "__esModule", { value: !0 }), Me.validateTuple = void 0;
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), o = /* @__PURE__ */ $e(), a = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "array", "boolean"],
    before: "uniqueItems",
    code(r) {
      const { schema: i, it: l } = r;
      if (Array.isArray(i))
        return h(r, "additionalItems", i);
      l.items = !0, !(0, t.alwaysValidSchema)(l, i) && r.ok((0, o.validateArray)(r));
    }
  };
  function h(r, i, l = r.schema) {
    const { gen: f, parentSchema: v, data: g, keyword: b, it: S } = r;
    _(v), S.opts.unevaluated && l.length && S.items !== !0 && (S.items = t.mergeEvaluated.items(f, l.length, S.items));
    const w = f.name("valid"), P = f.const("len", (0, e._)`${g}.length`);
    l.forEach((d, m) => {
      (0, t.alwaysValidSchema)(S, d) || (f.if((0, e._)`${P} > ${m}`, () => r.subschema({
        keyword: b,
        schemaProp: m,
        dataProp: m
      }, w)), r.ok(w));
    });
    function _(d) {
      const { opts: m, errSchemaPath: c } = S, p = l.length, $ = p === d.minItems && (p === d.maxItems || d[i] === !1);
      if (m.strictTuples && !$) {
        const n = `"${b}" is ${p}-tuple, but minItems or maxItems/${i} are not specified or different at path "${c}"`;
        (0, t.checkStrictMode)(S, n, m.strictTuples);
      }
    }
  }
  return Me.validateTuple = h, Me.default = a, Me;
}
var Sn;
function mo() {
  if (Sn) return mt;
  Sn = 1, Object.defineProperty(mt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Pa(), t = {
    keyword: "prefixItems",
    type: "array",
    schemaType: ["array"],
    before: "uniqueItems",
    code: (o) => (0, e.validateTuple)(o, "items")
  };
  return mt.default = t, mt;
}
var yt = {}, Pn;
function yo() {
  if (Pn) return yt;
  Pn = 1, Object.defineProperty(yt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), o = /* @__PURE__ */ $e(), a = /* @__PURE__ */ Sa(), r = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    error: {
      message: ({ params: { len: i } }) => (0, e.str)`must NOT have more than ${i} items`,
      params: ({ params: { len: i } }) => (0, e._)`{limit: ${i}}`
    },
    code(i) {
      const { schema: l, parentSchema: f, it: v } = i, { prefixItems: g } = f;
      v.items = !0, !(0, t.alwaysValidSchema)(v, l) && (g ? (0, a.validateAdditionalItems)(i, g) : i.ok((0, o.validateArray)(i)));
    }
  };
  return yt.default = r, yt;
}
var gt = {}, En;
function go() {
  if (En) return gt;
  En = 1, Object.defineProperty(gt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), a = {
    keyword: "contains",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    trackErrors: !0,
    error: {
      message: ({ params: { min: h, max: r } }) => r === void 0 ? (0, e.str)`must contain at least ${h} valid item(s)` : (0, e.str)`must contain at least ${h} and no more than ${r} valid item(s)`,
      params: ({ params: { min: h, max: r } }) => r === void 0 ? (0, e._)`{minContains: ${h}}` : (0, e._)`{minContains: ${h}, maxContains: ${r}}`
    },
    code(h) {
      const { gen: r, schema: i, parentSchema: l, data: f, it: v } = h;
      let g, b;
      const { minContains: S, maxContains: w } = l;
      v.opts.next ? (g = S === void 0 ? 1 : S, b = w) : g = 1;
      const P = r.const("len", (0, e._)`${f}.length`);
      if (h.setParams({ min: g, max: b }), b === void 0 && g === 0) {
        (0, t.checkStrictMode)(v, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
        return;
      }
      if (b !== void 0 && g > b) {
        (0, t.checkStrictMode)(v, '"minContains" > "maxContains" is always invalid'), h.fail();
        return;
      }
      if ((0, t.alwaysValidSchema)(v, i)) {
        let p = (0, e._)`${P} >= ${g}`;
        b !== void 0 && (p = (0, e._)`${p} && ${P} <= ${b}`), h.pass(p);
        return;
      }
      v.items = !0;
      const _ = r.name("valid");
      b === void 0 && g === 1 ? m(_, () => r.if(_, () => r.break())) : g === 0 ? (r.let(_, !0), b !== void 0 && r.if((0, e._)`${f}.length > 0`, d)) : (r.let(_, !1), d()), h.result(_, () => h.reset());
      function d() {
        const p = r.name("_valid"), $ = r.let("count", 0);
        m(p, () => r.if(p, () => c($)));
      }
      function m(p, $) {
        r.forRange("i", 0, P, (n) => {
          h.subschema({
            keyword: "contains",
            dataProp: n,
            dataPropType: t.Type.Num,
            compositeRule: !0
          }, p), $();
        });
      }
      function c(p) {
        r.code((0, e._)`${p}++`), b === void 0 ? r.if((0, e._)`${p} >= ${g}`, () => r.assign(_, !0).break()) : (r.if((0, e._)`${p} > ${b}`, () => r.assign(_, !1).break()), g === 1 ? r.assign(_, !0) : r.if((0, e._)`${p} >= ${g}`, () => r.assign(_, !0)));
      }
    }
  };
  return gt.default = a, gt;
}
var ur = {}, kn;
function br() {
  return kn || (kn = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
    const t = /* @__PURE__ */ G(), o = /* @__PURE__ */ X(), a = /* @__PURE__ */ $e();
    e.error = {
      message: ({ params: { property: f, depsCount: v, deps: g } }) => {
        const b = v === 1 ? "property" : "properties";
        return (0, t.str)`must have ${b} ${g} when property ${f} is present`;
      },
      params: ({ params: { property: f, depsCount: v, deps: g, missingProperty: b } }) => (0, t._)`{property: ${f},
    missingProperty: ${b},
    depsCount: ${v},
    deps: ${g}}`
      // TODO change to reference
    };
    const h = {
      keyword: "dependencies",
      type: "object",
      schemaType: "object",
      error: e.error,
      code(f) {
        const [v, g] = r(f);
        i(f, v), l(f, g);
      }
    };
    function r({ schema: f }) {
      const v = {}, g = {};
      for (const b in f) {
        if (b === "__proto__")
          continue;
        const S = Array.isArray(f[b]) ? v : g;
        S[b] = f[b];
      }
      return [v, g];
    }
    function i(f, v = f.schema) {
      const { gen: g, data: b, it: S } = f;
      if (Object.keys(v).length === 0)
        return;
      const w = g.let("missing");
      for (const P in v) {
        const _ = v[P];
        if (_.length === 0)
          continue;
        const d = (0, a.propertyInData)(g, b, P, S.opts.ownProperties);
        f.setParams({
          property: P,
          depsCount: _.length,
          deps: _.join(", ")
        }), S.allErrors ? g.if(d, () => {
          for (const m of _)
            (0, a.checkReportMissingProp)(f, m);
        }) : (g.if((0, t._)`${d} && (${(0, a.checkMissingProp)(f, _, w)})`), (0, a.reportMissingProp)(f, w), g.else());
      }
    }
    e.validatePropertyDeps = i;
    function l(f, v = f.schema) {
      const { gen: g, data: b, keyword: S, it: w } = f, P = g.name("valid");
      for (const _ in v)
        (0, o.alwaysValidSchema)(w, v[_]) || (g.if(
          (0, a.propertyInData)(g, b, _, w.opts.ownProperties),
          () => {
            const d = f.subschema({ keyword: S, schemaProp: _ }, P);
            f.mergeValidEvaluated(d, P);
          },
          () => g.var(P, !0)
          // TODO var
        ), f.ok(P));
    }
    e.validateSchemaDeps = l, e.default = h;
  })(ur)), ur;
}
var vt = {}, Rn;
function vo() {
  if (Rn) return vt;
  Rn = 1, Object.defineProperty(vt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), a = {
    keyword: "propertyNames",
    type: "object",
    schemaType: ["object", "boolean"],
    error: {
      message: "property name must be valid",
      params: ({ params: h }) => (0, e._)`{propertyName: ${h.propertyName}}`
    },
    code(h) {
      const { gen: r, schema: i, data: l, it: f } = h;
      if ((0, t.alwaysValidSchema)(f, i))
        return;
      const v = r.name("valid");
      r.forIn("key", l, (g) => {
        h.setParams({ propertyName: g }), h.subschema({
          keyword: "propertyNames",
          data: g,
          dataTypes: ["string"],
          propertyName: g,
          compositeRule: !0
        }, v), r.if((0, e.not)(v), () => {
          h.error(!0), f.allErrors || r.break();
        });
      }), h.ok(v);
    }
  };
  return vt.default = a, vt;
}
var $t = {}, Cn;
function Ea() {
  if (Cn) return $t;
  Cn = 1, Object.defineProperty($t, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ $e(), t = /* @__PURE__ */ G(), o = /* @__PURE__ */ ve(), a = /* @__PURE__ */ X(), r = {
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
      const { gen: l, schema: f, parentSchema: v, data: g, errsCount: b, it: S } = i;
      if (!b)
        throw new Error("ajv implementation error");
      const { allErrors: w, opts: P } = S;
      if (S.props = !0, P.removeAdditional !== "all" && (0, a.alwaysValidSchema)(S, f))
        return;
      const _ = (0, e.allSchemaProperties)(v.properties), d = (0, e.allSchemaProperties)(v.patternProperties);
      m(), i.ok((0, t._)`${b} === ${o.default.errors}`);
      function m() {
        l.forIn("key", g, (s) => {
          !_.length && !d.length ? $(s) : l.if(c(s), () => $(s));
        });
      }
      function c(s) {
        let u;
        if (_.length > 8) {
          const k = (0, a.schemaRefOrVal)(S, v.properties, "properties");
          u = (0, e.isOwnProperty)(l, k, s);
        } else _.length ? u = (0, t.or)(..._.map((k) => (0, t._)`${s} === ${k}`)) : u = t.nil;
        return d.length && (u = (0, t.or)(u, ...d.map((k) => (0, t._)`${(0, e.usePattern)(i, k)}.test(${s})`))), (0, t.not)(u);
      }
      function p(s) {
        l.code((0, t._)`delete ${g}[${s}]`);
      }
      function $(s) {
        if (P.removeAdditional === "all" || P.removeAdditional && f === !1) {
          p(s);
          return;
        }
        if (f === !1) {
          i.setParams({ additionalProperty: s }), i.error(), w || l.break();
          return;
        }
        if (typeof f == "object" && !(0, a.alwaysValidSchema)(S, f)) {
          const u = l.name("valid");
          P.removeAdditional === "failing" ? (n(s, u, !1), l.if((0, t.not)(u), () => {
            i.reset(), p(s);
          })) : (n(s, u), w || l.if((0, t.not)(u), () => l.break()));
        }
      }
      function n(s, u, k) {
        const R = {
          keyword: "additionalProperties",
          dataProp: s,
          dataPropType: a.Type.Str
        };
        k === !1 && Object.assign(R, {
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }), i.subschema(R, u);
      }
    }
  };
  return $t.default = r, $t;
}
var _t = {}, Nn;
function $o() {
  if (Nn) return _t;
  Nn = 1, Object.defineProperty(_t, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Wt(), t = /* @__PURE__ */ $e(), o = /* @__PURE__ */ X(), a = /* @__PURE__ */ Ea(), h = {
    keyword: "properties",
    type: "object",
    schemaType: "object",
    code(r) {
      const { gen: i, schema: l, parentSchema: f, data: v, it: g } = r;
      g.opts.removeAdditional === "all" && f.additionalProperties === void 0 && a.default.code(new e.KeywordCxt(g, a.default, "additionalProperties"));
      const b = (0, t.allSchemaProperties)(l);
      for (const d of b)
        g.definedProperties.add(d);
      g.opts.unevaluated && b.length && g.props !== !0 && (g.props = o.mergeEvaluated.props(i, (0, o.toHash)(b), g.props));
      const S = b.filter((d) => !(0, o.alwaysValidSchema)(g, l[d]));
      if (S.length === 0)
        return;
      const w = i.name("valid");
      for (const d of S)
        P(d) ? _(d) : (i.if((0, t.propertyInData)(i, v, d, g.opts.ownProperties)), _(d), g.allErrors || i.else().var(w, !0), i.endIf()), r.it.definedProperties.add(d), r.ok(w);
      function P(d) {
        return g.opts.useDefaults && !g.compositeRule && l[d].default !== void 0;
      }
      function _(d) {
        r.subschema({
          keyword: "properties",
          schemaProp: d,
          dataProp: d
        }, w);
      }
    }
  };
  return _t.default = h, _t;
}
var bt = {}, jn;
function _o() {
  if (jn) return bt;
  jn = 1, Object.defineProperty(bt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ $e(), t = /* @__PURE__ */ G(), o = /* @__PURE__ */ X(), a = /* @__PURE__ */ X(), h = {
    keyword: "patternProperties",
    type: "object",
    schemaType: "object",
    code(r) {
      const { gen: i, schema: l, data: f, parentSchema: v, it: g } = r, { opts: b } = g, S = (0, e.allSchemaProperties)(l), w = S.filter(($) => (0, o.alwaysValidSchema)(g, l[$]));
      if (S.length === 0 || w.length === S.length && (!g.opts.unevaluated || g.props === !0))
        return;
      const P = b.strictSchema && !b.allowMatchingProperties && v.properties, _ = i.name("valid");
      g.props !== !0 && !(g.props instanceof t.Name) && (g.props = (0, a.evaluatedPropsToName)(i, g.props));
      const { props: d } = g;
      m();
      function m() {
        for (const $ of S)
          P && c($), g.allErrors ? p($) : (i.var(_, !0), p($), i.if(_));
      }
      function c($) {
        for (const n in P)
          new RegExp($).test(n) && (0, o.checkStrictMode)(g, `property ${n} matches pattern ${$} (use allowMatchingProperties)`);
      }
      function p($) {
        i.forIn("key", f, (n) => {
          i.if((0, t._)`${(0, e.usePattern)(r, $)}.test(${n})`, () => {
            const s = w.includes($);
            s || r.subschema({
              keyword: "patternProperties",
              schemaProp: $,
              dataProp: n,
              dataPropType: a.Type.Str
            }, _), g.opts.unevaluated && d !== !0 ? i.assign((0, t._)`${d}[${n}]`, !0) : !s && !g.allErrors && i.if((0, t.not)(_), () => i.break());
          });
        });
      }
    }
  };
  return bt.default = h, bt;
}
var wt = {}, On;
function bo() {
  if (On) return wt;
  On = 1, Object.defineProperty(wt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ X(), t = {
    keyword: "not",
    schemaType: ["object", "boolean"],
    trackErrors: !0,
    code(o) {
      const { gen: a, schema: h, it: r } = o;
      if ((0, e.alwaysValidSchema)(r, h)) {
        o.fail();
        return;
      }
      const i = a.name("valid");
      o.subschema({
        keyword: "not",
        compositeRule: !0,
        createErrors: !1,
        allErrors: !1
      }, i), o.failResult(i, () => o.reset(), () => o.error());
    },
    error: { message: "must NOT be valid" }
  };
  return wt.default = t, wt;
}
var St = {}, Tn;
function wo() {
  if (Tn) return St;
  Tn = 1, Object.defineProperty(St, "__esModule", { value: !0 });
  const t = {
    keyword: "anyOf",
    schemaType: "array",
    trackErrors: !0,
    code: (/* @__PURE__ */ $e()).validateUnion,
    error: { message: "must match a schema in anyOf" }
  };
  return St.default = t, St;
}
var Pt = {}, An;
function So() {
  if (An) return Pt;
  An = 1, Object.defineProperty(Pt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), a = {
    keyword: "oneOf",
    schemaType: "array",
    trackErrors: !0,
    error: {
      message: "must match exactly one schema in oneOf",
      params: ({ params: h }) => (0, e._)`{passingSchemas: ${h.passing}}`
    },
    code(h) {
      const { gen: r, schema: i, parentSchema: l, it: f } = h;
      if (!Array.isArray(i))
        throw new Error("ajv implementation error");
      if (f.opts.discriminator && l.discriminator)
        return;
      const v = i, g = r.let("valid", !1), b = r.let("passing", null), S = r.name("_valid");
      h.setParams({ passing: b }), r.block(w), h.result(g, () => h.reset(), () => h.error(!0));
      function w() {
        v.forEach((P, _) => {
          let d;
          (0, t.alwaysValidSchema)(f, P) ? r.var(S, !0) : d = h.subschema({
            keyword: "oneOf",
            schemaProp: _,
            compositeRule: !0
          }, S), _ > 0 && r.if((0, e._)`${S} && ${g}`).assign(g, !1).assign(b, (0, e._)`[${b}, ${_}]`).else(), r.if(S, () => {
            r.assign(g, !0), r.assign(b, _), d && h.mergeEvaluated(d, e.Name);
          });
        });
      }
    }
  };
  return Pt.default = a, Pt;
}
var Et = {}, Mn;
function Po() {
  if (Mn) return Et;
  Mn = 1, Object.defineProperty(Et, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ X(), t = {
    keyword: "allOf",
    schemaType: "array",
    code(o) {
      const { gen: a, schema: h, it: r } = o;
      if (!Array.isArray(h))
        throw new Error("ajv implementation error");
      const i = a.name("valid");
      h.forEach((l, f) => {
        if ((0, e.alwaysValidSchema)(r, l))
          return;
        const v = o.subschema({ keyword: "allOf", schemaProp: f }, i);
        o.ok(i), o.mergeEvaluated(v);
      });
    }
  };
  return Et.default = t, Et;
}
var kt = {}, In;
function Eo() {
  if (In) return kt;
  In = 1, Object.defineProperty(kt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), a = {
    keyword: "if",
    schemaType: ["object", "boolean"],
    trackErrors: !0,
    error: {
      message: ({ params: r }) => (0, e.str)`must match "${r.ifClause}" schema`,
      params: ({ params: r }) => (0, e._)`{failingKeyword: ${r.ifClause}}`
    },
    code(r) {
      const { gen: i, parentSchema: l, it: f } = r;
      l.then === void 0 && l.else === void 0 && (0, t.checkStrictMode)(f, '"if" without "then" and "else" is ignored');
      const v = h(f, "then"), g = h(f, "else");
      if (!v && !g)
        return;
      const b = i.let("valid", !0), S = i.name("_valid");
      if (w(), r.reset(), v && g) {
        const _ = i.let("ifClause");
        r.setParams({ ifClause: _ }), i.if(S, P("then", _), P("else", _));
      } else v ? i.if(S, P("then")) : i.if((0, e.not)(S), P("else"));
      r.pass(b, () => r.error(!0));
      function w() {
        const _ = r.subschema({
          keyword: "if",
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }, S);
        r.mergeEvaluated(_);
      }
      function P(_, d) {
        return () => {
          const m = r.subschema({ keyword: _ }, S);
          i.assign(b, S), r.mergeValidEvaluated(m, b), d ? i.assign(d, (0, e._)`${_}`) : r.setParams({ ifClause: _ });
        };
      }
    }
  };
  function h(r, i) {
    const l = r.schema[i];
    return l !== void 0 && !(0, t.alwaysValidSchema)(r, l);
  }
  return kt.default = a, kt;
}
var Rt = {}, qn;
function ko() {
  if (qn) return Rt;
  qn = 1, Object.defineProperty(Rt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ X(), t = {
    keyword: ["then", "else"],
    schemaType: ["object", "boolean"],
    code({ keyword: o, parentSchema: a, it: h }) {
      a.if === void 0 && (0, e.checkStrictMode)(h, `"${o}" without "if" is ignored`);
    }
  };
  return Rt.default = t, Rt;
}
var Dn;
function Ro() {
  if (Dn) return ht;
  Dn = 1, Object.defineProperty(ht, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Sa(), t = /* @__PURE__ */ mo(), o = /* @__PURE__ */ Pa(), a = /* @__PURE__ */ yo(), h = /* @__PURE__ */ go(), r = /* @__PURE__ */ br(), i = /* @__PURE__ */ vo(), l = /* @__PURE__ */ Ea(), f = /* @__PURE__ */ $o(), v = /* @__PURE__ */ _o(), g = /* @__PURE__ */ bo(), b = /* @__PURE__ */ wo(), S = /* @__PURE__ */ So(), w = /* @__PURE__ */ Po(), P = /* @__PURE__ */ Eo(), _ = /* @__PURE__ */ ko();
  function d(m = !1) {
    const c = [
      // any
      g.default,
      b.default,
      S.default,
      w.default,
      P.default,
      _.default,
      // object
      i.default,
      l.default,
      r.default,
      f.default,
      v.default
    ];
    return m ? c.push(t.default, a.default) : c.push(e.default, o.default), c.push(h.default), c;
  }
  return ht.default = d, ht;
}
var Ct = {}, Ie = {}, xn;
function ka() {
  if (xn) return Ie;
  xn = 1, Object.defineProperty(Ie, "__esModule", { value: !0 }), Ie.dynamicAnchor = void 0;
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ ve(), o = /* @__PURE__ */ Xt(), a = /* @__PURE__ */ $r(), h = {
    keyword: "$dynamicAnchor",
    schemaType: "string",
    code: (l) => r(l, l.schema)
  };
  function r(l, f) {
    const { gen: v, it: g } = l;
    g.schemaEnv.root.dynamicAnchors[f] = !0;
    const b = (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(f)}`, S = g.errSchemaPath === "#" ? g.validateName : i(l);
    v.if((0, e._)`!${b}`, () => v.assign(b, S));
  }
  Ie.dynamicAnchor = r;
  function i(l) {
    const { schemaEnv: f, schema: v, self: g } = l.it, { root: b, baseId: S, localRefs: w, meta: P } = f.root, { schemaId: _ } = g.opts, d = new o.SchemaEnv({ schema: v, schemaId: _, root: b, baseId: S, localRefs: w, meta: P });
    return o.compileSchema.call(g, d), (0, a.getValidate)(l, d);
  }
  return Ie.default = h, Ie;
}
var qe = {}, Ln;
function Ra() {
  if (Ln) return qe;
  Ln = 1, Object.defineProperty(qe, "__esModule", { value: !0 }), qe.dynamicRef = void 0;
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ ve(), o = /* @__PURE__ */ $r(), a = {
    keyword: "$dynamicRef",
    schemaType: "string",
    code: (r) => h(r, r.schema)
  };
  function h(r, i) {
    const { gen: l, keyword: f, it: v } = r;
    if (i[0] !== "#")
      throw new Error(`"${f}" only supports hash fragment reference`);
    const g = i.slice(1);
    if (v.allErrors)
      b();
    else {
      const w = l.let("valid", !1);
      b(w), r.ok(w);
    }
    function b(w) {
      if (v.schemaEnv.root.dynamicAnchors[g]) {
        const P = l.let("_v", (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(g)}`);
        l.if(P, S(P, w), S(v.validateName, w));
      } else
        S(v.validateName, w)();
    }
    function S(w, P) {
      return P ? () => l.block(() => {
        (0, o.callRef)(r, w), l.let(P, !0);
      }) : () => (0, o.callRef)(r, w);
    }
  }
  return qe.dynamicRef = h, qe.default = a, qe;
}
var Nt = {}, zn;
function Co() {
  if (zn) return Nt;
  zn = 1, Object.defineProperty(Nt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ka(), t = /* @__PURE__ */ X(), o = {
    keyword: "$recursiveAnchor",
    schemaType: "boolean",
    code(a) {
      a.schema ? (0, e.dynamicAnchor)(a, "") : (0, t.checkStrictMode)(a.it, "$recursiveAnchor: false is ignored");
    }
  };
  return Nt.default = o, Nt;
}
var jt = {}, Vn;
function No() {
  if (Vn) return jt;
  Vn = 1, Object.defineProperty(jt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ra(), t = {
    keyword: "$recursiveRef",
    schemaType: "string",
    code: (o) => (0, e.dynamicRef)(o, o.schema)
  };
  return jt.default = t, jt;
}
var Bn;
function jo() {
  if (Bn) return Ct;
  Bn = 1, Object.defineProperty(Ct, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ka(), t = /* @__PURE__ */ Ra(), o = /* @__PURE__ */ Co(), a = /* @__PURE__ */ No(), h = [e.default, t.default, o.default, a.default];
  return Ct.default = h, Ct;
}
var Ot = {}, Tt = {}, Fn;
function Oo() {
  if (Fn) return Tt;
  Fn = 1, Object.defineProperty(Tt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ br(), t = {
    keyword: "dependentRequired",
    type: "object",
    schemaType: "object",
    error: e.error,
    code: (o) => (0, e.validatePropertyDeps)(o)
  };
  return Tt.default = t, Tt;
}
var At = {}, Un;
function To() {
  if (Un) return At;
  Un = 1, Object.defineProperty(At, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ br(), t = {
    keyword: "dependentSchemas",
    type: "object",
    schemaType: "object",
    code: (o) => (0, e.validateSchemaDeps)(o)
  };
  return At.default = t, At;
}
var Mt = {}, Kn;
function Ao() {
  if (Kn) return Mt;
  Kn = 1, Object.defineProperty(Mt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ X(), t = {
    keyword: ["maxContains", "minContains"],
    type: "array",
    schemaType: "number",
    code({ keyword: o, parentSchema: a, it: h }) {
      a.contains === void 0 && (0, e.checkStrictMode)(h, `"${o}" without "contains" is ignored`);
    }
  };
  return Mt.default = t, Mt;
}
var Hn;
function Mo() {
  if (Hn) return Ot;
  Hn = 1, Object.defineProperty(Ot, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Oo(), t = /* @__PURE__ */ To(), o = /* @__PURE__ */ Ao(), a = [e.default, t.default, o.default];
  return Ot.default = a, Ot;
}
var It = {}, qt = {}, Gn;
function Io() {
  if (Gn) return qt;
  Gn = 1, Object.defineProperty(qt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), o = /* @__PURE__ */ ve(), h = {
    keyword: "unevaluatedProperties",
    type: "object",
    schemaType: ["boolean", "object"],
    trackErrors: !0,
    error: {
      message: "must NOT have unevaluated properties",
      params: ({ params: r }) => (0, e._)`{unevaluatedProperty: ${r.unevaluatedProperty}}`
    },
    code(r) {
      const { gen: i, schema: l, data: f, errsCount: v, it: g } = r;
      if (!v)
        throw new Error("ajv implementation error");
      const { allErrors: b, props: S } = g;
      S instanceof e.Name ? i.if((0, e._)`${S} !== true`, () => i.forIn("key", f, (d) => i.if(P(S, d), () => w(d)))) : S !== !0 && i.forIn("key", f, (d) => S === void 0 ? w(d) : i.if(_(S, d), () => w(d))), g.props = !0, r.ok((0, e._)`${v} === ${o.default.errors}`);
      function w(d) {
        if (l === !1) {
          r.setParams({ unevaluatedProperty: d }), r.error(), b || i.break();
          return;
        }
        if (!(0, t.alwaysValidSchema)(g, l)) {
          const m = i.name("valid");
          r.subschema({
            keyword: "unevaluatedProperties",
            dataProp: d,
            dataPropType: t.Type.Str
          }, m), b || i.if((0, e.not)(m), () => i.break());
        }
      }
      function P(d, m) {
        return (0, e._)`!${d} || !${d}[${m}]`;
      }
      function _(d, m) {
        const c = [];
        for (const p in d)
          d[p] === !0 && c.push((0, e._)`${m} !== ${p}`);
        return (0, e.and)(...c);
      }
    }
  };
  return qt.default = h, qt;
}
var Dt = {}, Jn;
function qo() {
  if (Jn) return Dt;
  Jn = 1, Object.defineProperty(Dt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), a = {
    keyword: "unevaluatedItems",
    type: "array",
    schemaType: ["boolean", "object"],
    error: {
      message: ({ params: { len: h } }) => (0, e.str)`must NOT have more than ${h} items`,
      params: ({ params: { len: h } }) => (0, e._)`{limit: ${h}}`
    },
    code(h) {
      const { gen: r, schema: i, data: l, it: f } = h, v = f.items || 0;
      if (v === !0)
        return;
      const g = r.const("len", (0, e._)`${l}.length`);
      if (i === !1)
        h.setParams({ len: v }), h.fail((0, e._)`${g} > ${v}`);
      else if (typeof i == "object" && !(0, t.alwaysValidSchema)(f, i)) {
        const S = r.var("valid", (0, e._)`${g} <= ${v}`);
        r.if((0, e.not)(S), () => b(S, v)), h.ok(S);
      }
      f.items = !0;
      function b(S, w) {
        r.forRange("i", w, g, (P) => {
          h.subschema({ keyword: "unevaluatedItems", dataProp: P, dataPropType: t.Type.Num }, S), f.allErrors || r.if((0, e.not)(S), () => r.break());
        });
      }
    }
  };
  return Dt.default = a, Dt;
}
var Wn;
function Do() {
  if (Wn) return It;
  Wn = 1, Object.defineProperty(It, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Io(), t = /* @__PURE__ */ qo(), o = [e.default, t.default];
  return It.default = o, It;
}
var xt = {}, Lt = {}, Yn;
function xo() {
  if (Yn) return Lt;
  Yn = 1, Object.defineProperty(Lt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), o = {
    keyword: "format",
    type: ["number", "string"],
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: a }) => (0, e.str)`must match format "${a}"`,
      params: ({ schemaCode: a }) => (0, e._)`{format: ${a}}`
    },
    code(a, h) {
      const { gen: r, data: i, $data: l, schema: f, schemaCode: v, it: g } = a, { opts: b, errSchemaPath: S, schemaEnv: w, self: P } = g;
      if (!b.validateFormats)
        return;
      l ? _() : d();
      function _() {
        const m = r.scopeValue("formats", {
          ref: P.formats,
          code: b.code.formats
        }), c = r.const("fDef", (0, e._)`${m}[${v}]`), p = r.let("fType"), $ = r.let("format");
        r.if((0, e._)`typeof ${c} == "object" && !(${c} instanceof RegExp)`, () => r.assign(p, (0, e._)`${c}.type || "string"`).assign($, (0, e._)`${c}.validate`), () => r.assign(p, (0, e._)`"string"`).assign($, c)), a.fail$data((0, e.or)(n(), s()));
        function n() {
          return b.strictSchema === !1 ? e.nil : (0, e._)`${v} && !${$}`;
        }
        function s() {
          const u = w.$async ? (0, e._)`(${c}.async ? await ${$}(${i}) : ${$}(${i}))` : (0, e._)`${$}(${i})`, k = (0, e._)`(typeof ${$} == "function" ? ${u} : ${$}.test(${i}))`;
          return (0, e._)`${$} && ${$} !== true && ${p} === ${h} && !${k}`;
        }
      }
      function d() {
        const m = P.formats[f];
        if (!m) {
          n();
          return;
        }
        if (m === !0)
          return;
        const [c, p, $] = s(m);
        c === h && a.pass(u());
        function n() {
          if (b.strictSchema === !1) {
            P.logger.warn(k());
            return;
          }
          throw new Error(k());
          function k() {
            return `unknown format "${f}" ignored in schema at path "${S}"`;
          }
        }
        function s(k) {
          const R = k instanceof RegExp ? (0, e.regexpCode)(k) : b.code.formats ? (0, e._)`${b.code.formats}${(0, e.getProperty)(f)}` : void 0, T = r.scopeValue("formats", { key: f, ref: k, code: R });
          return typeof k == "object" && !(k instanceof RegExp) ? [k.type || "string", k.validate, (0, e._)`${T}.validate`] : ["string", k, T];
        }
        function u() {
          if (typeof m == "object" && !(m instanceof RegExp) && m.async) {
            if (!w.$async)
              throw new Error("async format in sync schema");
            return (0, e._)`await ${$}(${i})`;
          }
          return typeof p == "function" ? (0, e._)`${$}(${i})` : (0, e._)`${$}.test(${i})`;
        }
      }
    }
  };
  return Lt.default = o, Lt;
}
var Xn;
function Lo() {
  if (Xn) return xt;
  Xn = 1, Object.defineProperty(xt, "__esModule", { value: !0 });
  const t = [(/* @__PURE__ */ xo()).default];
  return xt.default = t, xt;
}
var Ne = {}, Qn;
function zo() {
  return Qn || (Qn = 1, Object.defineProperty(Ne, "__esModule", { value: !0 }), Ne.contentVocabulary = Ne.metadataVocabulary = void 0, Ne.metadataVocabulary = [
    "title",
    "description",
    "default",
    "deprecated",
    "readOnly",
    "writeOnly",
    "examples"
  ], Ne.contentVocabulary = [
    "contentMediaType",
    "contentEncoding",
    "contentSchema"
  ]), Ne;
}
var Zn;
function Vo() {
  if (Zn) return Qe;
  Zn = 1, Object.defineProperty(Qe, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ to(), t = /* @__PURE__ */ ho(), o = /* @__PURE__ */ Ro(), a = /* @__PURE__ */ jo(), h = /* @__PURE__ */ Mo(), r = /* @__PURE__ */ Do(), i = /* @__PURE__ */ Lo(), l = /* @__PURE__ */ zo(), f = [
    a.default,
    e.default,
    t.default,
    (0, o.default)(!0),
    i.default,
    l.metadataVocabulary,
    l.contentVocabulary,
    h.default,
    r.default
  ];
  return Qe.default = f, Qe;
}
var zt = {}, Ue = {}, ea;
function Bo() {
  if (ea) return Ue;
  ea = 1, Object.defineProperty(Ue, "__esModule", { value: !0 }), Ue.DiscrError = void 0;
  var e;
  return (function(t) {
    t.Tag = "tag", t.Mapping = "mapping";
  })(e || (Ue.DiscrError = e = {})), Ue;
}
var ta;
function Fo() {
  if (ta) return zt;
  ta = 1, Object.defineProperty(zt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ Bo(), o = /* @__PURE__ */ Xt(), a = /* @__PURE__ */ Yt(), h = /* @__PURE__ */ X(), i = {
    keyword: "discriminator",
    type: "object",
    schemaType: "object",
    error: {
      message: ({ params: { discrError: l, tagName: f } }) => l === t.DiscrError.Tag ? `tag "${f}" must be string` : `value of tag "${f}" must be in oneOf`,
      params: ({ params: { discrError: l, tag: f, tagName: v } }) => (0, e._)`{error: ${l}, tag: ${v}, tagValue: ${f}}`
    },
    code(l) {
      const { gen: f, data: v, schema: g, parentSchema: b, it: S } = l, { oneOf: w } = b;
      if (!S.opts.discriminator)
        throw new Error("discriminator: requires discriminator option");
      const P = g.propertyName;
      if (typeof P != "string")
        throw new Error("discriminator: requires propertyName");
      if (g.mapping)
        throw new Error("discriminator: mapping is not supported");
      if (!w)
        throw new Error("discriminator: requires oneOf keyword");
      const _ = f.let("valid", !1), d = f.const("tag", (0, e._)`${v}${(0, e.getProperty)(P)}`);
      f.if((0, e._)`typeof ${d} == "string"`, () => m(), () => l.error(!1, { discrError: t.DiscrError.Tag, tag: d, tagName: P })), l.ok(_);
      function m() {
        const $ = p();
        f.if(!1);
        for (const n in $)
          f.elseIf((0, e._)`${d} === ${n}`), f.assign(_, c($[n]));
        f.else(), l.error(!1, { discrError: t.DiscrError.Mapping, tag: d, tagName: P }), f.endIf();
      }
      function c($) {
        const n = f.name("valid"), s = l.subschema({ keyword: "oneOf", schemaProp: $ }, n);
        return l.mergeEvaluated(s, e.Name), n;
      }
      function p() {
        var $;
        const n = {}, s = k(b);
        let u = !0;
        for (let M = 0; M < w.length; M++) {
          let A = w[M];
          if (A?.$ref && !(0, h.schemaHasRulesButRef)(A, S.self.RULES)) {
            const H = A.$ref;
            if (A = o.resolveRef.call(S.self, S.schemaEnv.root, S.baseId, H), A instanceof o.SchemaEnv && (A = A.schema), A === void 0)
              throw new a.default(S.opts.uriResolver, S.baseId, H);
          }
          const q = ($ = A?.properties) === null || $ === void 0 ? void 0 : $[P];
          if (typeof q != "object")
            throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${P}"`);
          u = u && (s || k(A)), R(q, M);
        }
        if (!u)
          throw new Error(`discriminator: "${P}" must be required`);
        return n;
        function k({ required: M }) {
          return Array.isArray(M) && M.includes(P);
        }
        function R(M, A) {
          if (M.const)
            T(M.const, A);
          else if (M.enum)
            for (const q of M.enum)
              T(q, A);
          else
            throw new Error(`discriminator: "properties/${P}" must have "const" or "enum"`);
        }
        function T(M, A) {
          if (typeof M != "string" || M in n)
            throw new Error(`discriminator: "${P}" values must be unique strings`);
          n[M] = A;
        }
      }
    }
  };
  return zt.default = i, zt;
}
var Vt = {};
const Uo = "https://json-schema.org/draft/2020-12/schema", Ko = "https://json-schema.org/draft/2020-12/schema", Ho = { "https://json-schema.org/draft/2020-12/vocab/core": !0, "https://json-schema.org/draft/2020-12/vocab/applicator": !0, "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0, "https://json-schema.org/draft/2020-12/vocab/validation": !0, "https://json-schema.org/draft/2020-12/vocab/meta-data": !0, "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0, "https://json-schema.org/draft/2020-12/vocab/content": !0 }, Go = "meta", Jo = "Core and Validation specifications meta-schema", Wo = [{ $ref: "meta/core" }, { $ref: "meta/applicator" }, { $ref: "meta/unevaluated" }, { $ref: "meta/validation" }, { $ref: "meta/meta-data" }, { $ref: "meta/format-annotation" }, { $ref: "meta/content" }], Yo = ["object", "boolean"], Xo = "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.", Qo = { definitions: { $comment: '"definitions" has been replaced by "$defs".', type: "object", additionalProperties: { $dynamicRef: "#meta" }, deprecated: !0, default: {} }, dependencies: { $comment: '"dependencies" has been split and replaced by "dependentSchemas" and "dependentRequired" in order to serve their differing semantics.', type: "object", additionalProperties: { anyOf: [{ $dynamicRef: "#meta" }, { $ref: "meta/validation#/$defs/stringArray" }] }, deprecated: !0, default: {} }, $recursiveAnchor: { $comment: '"$recursiveAnchor" has been replaced by "$dynamicAnchor".', $ref: "meta/core#/$defs/anchorString", deprecated: !0 }, $recursiveRef: { $comment: '"$recursiveRef" has been replaced by "$dynamicRef".', $ref: "meta/core#/$defs/uriReferenceString", deprecated: !0 } }, Zo = {
  $schema: Uo,
  $id: Ko,
  $vocabulary: Ho,
  $dynamicAnchor: Go,
  title: Jo,
  allOf: Wo,
  type: Yo,
  $comment: Xo,
  properties: Qo
}, es = "https://json-schema.org/draft/2020-12/schema", ts = "https://json-schema.org/draft/2020-12/meta/applicator", rs = { "https://json-schema.org/draft/2020-12/vocab/applicator": !0 }, ns = "meta", as = "Applicator vocabulary meta-schema", os = ["object", "boolean"], ss = { prefixItems: { $ref: "#/$defs/schemaArray" }, items: { $dynamicRef: "#meta" }, contains: { $dynamicRef: "#meta" }, additionalProperties: { $dynamicRef: "#meta" }, properties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, propertyNames: { format: "regex" }, default: {} }, dependentSchemas: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, propertyNames: { $dynamicRef: "#meta" }, if: { $dynamicRef: "#meta" }, then: { $dynamicRef: "#meta" }, else: { $dynamicRef: "#meta" }, allOf: { $ref: "#/$defs/schemaArray" }, anyOf: { $ref: "#/$defs/schemaArray" }, oneOf: { $ref: "#/$defs/schemaArray" }, not: { $dynamicRef: "#meta" } }, is = { schemaArray: { type: "array", minItems: 1, items: { $dynamicRef: "#meta" } } }, cs = {
  $schema: es,
  $id: ts,
  $vocabulary: rs,
  $dynamicAnchor: ns,
  title: as,
  type: os,
  properties: ss,
  $defs: is
}, ls = "https://json-schema.org/draft/2020-12/schema", ds = "https://json-schema.org/draft/2020-12/meta/unevaluated", us = { "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0 }, fs = "meta", ps = "Unevaluated applicator vocabulary meta-schema", hs = ["object", "boolean"], ms = { unevaluatedItems: { $dynamicRef: "#meta" }, unevaluatedProperties: { $dynamicRef: "#meta" } }, ys = {
  $schema: ls,
  $id: ds,
  $vocabulary: us,
  $dynamicAnchor: fs,
  title: ps,
  type: hs,
  properties: ms
}, gs = "https://json-schema.org/draft/2020-12/schema", vs = "https://json-schema.org/draft/2020-12/meta/content", $s = { "https://json-schema.org/draft/2020-12/vocab/content": !0 }, _s = "meta", bs = "Content vocabulary meta-schema", ws = ["object", "boolean"], Ss = { contentEncoding: { type: "string" }, contentMediaType: { type: "string" }, contentSchema: { $dynamicRef: "#meta" } }, Ps = {
  $schema: gs,
  $id: vs,
  $vocabulary: $s,
  $dynamicAnchor: _s,
  title: bs,
  type: ws,
  properties: Ss
}, Es = "https://json-schema.org/draft/2020-12/schema", ks = "https://json-schema.org/draft/2020-12/meta/core", Rs = { "https://json-schema.org/draft/2020-12/vocab/core": !0 }, Cs = "meta", Ns = "Core vocabulary meta-schema", js = ["object", "boolean"], Os = { $id: { $ref: "#/$defs/uriReferenceString", $comment: "Non-empty fragments not allowed.", pattern: "^[^#]*#?$" }, $schema: { $ref: "#/$defs/uriString" }, $ref: { $ref: "#/$defs/uriReferenceString" }, $anchor: { $ref: "#/$defs/anchorString" }, $dynamicRef: { $ref: "#/$defs/uriReferenceString" }, $dynamicAnchor: { $ref: "#/$defs/anchorString" }, $vocabulary: { type: "object", propertyNames: { $ref: "#/$defs/uriString" }, additionalProperties: { type: "boolean" } }, $comment: { type: "string" }, $defs: { type: "object", additionalProperties: { $dynamicRef: "#meta" } } }, Ts = { anchorString: { type: "string", pattern: "^[A-Za-z_][-A-Za-z0-9._]*$" }, uriString: { type: "string", format: "uri" }, uriReferenceString: { type: "string", format: "uri-reference" } }, As = {
  $schema: Es,
  $id: ks,
  $vocabulary: Rs,
  $dynamicAnchor: Cs,
  title: Ns,
  type: js,
  properties: Os,
  $defs: Ts
}, Ms = "https://json-schema.org/draft/2020-12/schema", Is = "https://json-schema.org/draft/2020-12/meta/format-annotation", qs = { "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0 }, Ds = "meta", xs = "Format vocabulary meta-schema for annotation results", Ls = ["object", "boolean"], zs = { format: { type: "string" } }, Vs = {
  $schema: Ms,
  $id: Is,
  $vocabulary: qs,
  $dynamicAnchor: Ds,
  title: xs,
  type: Ls,
  properties: zs
}, Bs = "https://json-schema.org/draft/2020-12/schema", Fs = "https://json-schema.org/draft/2020-12/meta/meta-data", Us = { "https://json-schema.org/draft/2020-12/vocab/meta-data": !0 }, Ks = "meta", Hs = "Meta-data vocabulary meta-schema", Gs = ["object", "boolean"], Js = { title: { type: "string" }, description: { type: "string" }, default: !0, deprecated: { type: "boolean", default: !1 }, readOnly: { type: "boolean", default: !1 }, writeOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 } }, Ws = {
  $schema: Bs,
  $id: Fs,
  $vocabulary: Us,
  $dynamicAnchor: Ks,
  title: Hs,
  type: Gs,
  properties: Js
}, Ys = "https://json-schema.org/draft/2020-12/schema", Xs = "https://json-schema.org/draft/2020-12/meta/validation", Qs = { "https://json-schema.org/draft/2020-12/vocab/validation": !0 }, Zs = "meta", ei = "Validation vocabulary meta-schema", ti = ["object", "boolean"], ri = { type: { anyOf: [{ $ref: "#/$defs/simpleTypes" }, { type: "array", items: { $ref: "#/$defs/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, const: !0, enum: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/$defs/nonNegativeInteger" }, minLength: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, maxItems: { $ref: "#/$defs/nonNegativeInteger" }, minItems: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, maxContains: { $ref: "#/$defs/nonNegativeInteger" }, minContains: { $ref: "#/$defs/nonNegativeInteger", default: 1 }, maxProperties: { $ref: "#/$defs/nonNegativeInteger" }, minProperties: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, required: { $ref: "#/$defs/stringArray" }, dependentRequired: { type: "object", additionalProperties: { $ref: "#/$defs/stringArray" } } }, ni = { nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { $ref: "#/$defs/nonNegativeInteger", default: 0 }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, ai = {
  $schema: Ys,
  $id: Xs,
  $vocabulary: Qs,
  $dynamicAnchor: Zs,
  title: ei,
  type: ti,
  properties: ri,
  $defs: ni
};
var ra;
function oi() {
  if (ra) return Vt;
  ra = 1, Object.defineProperty(Vt, "__esModule", { value: !0 });
  const e = Zo, t = cs, o = ys, a = Ps, h = As, r = Vs, i = Ws, l = ai, f = ["/properties"];
  function v(g) {
    return [
      e,
      t,
      o,
      a,
      h,
      b(this, r),
      i,
      b(this, l)
    ].forEach((S) => this.addMetaSchema(S, void 0, !1)), this;
    function b(S, w) {
      return g ? S.$dataMetaSchema(w, f) : w;
    }
  }
  return Vt.default = v, Vt;
}
var na;
function si() {
  return na || (na = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv2020 = void 0;
    const o = /* @__PURE__ */ Za(), a = /* @__PURE__ */ Vo(), h = /* @__PURE__ */ Fo(), r = /* @__PURE__ */ oi(), i = "https://json-schema.org/draft/2020-12/schema";
    class l extends o.default {
      constructor(w = {}) {
        super({
          ...w,
          dynamicRef: !0,
          next: !0,
          unevaluated: !0
        });
      }
      _addVocabularies() {
        super._addVocabularies(), a.default.forEach((w) => this.addVocabulary(w)), this.opts.discriminator && this.addKeyword(h.default);
      }
      _addDefaultMetaSchema() {
        super._addDefaultMetaSchema();
        const { $data: w, meta: P } = this.opts;
        P && (r.default.call(this, w), this.refs["http://json-schema.org/schema"] = i);
      }
      defaultMeta() {
        return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(i) ? i : void 0);
      }
    }
    t.Ajv2020 = l, e.exports = t = l, e.exports.Ajv2020 = l, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = l;
    var f = /* @__PURE__ */ Wt();
    Object.defineProperty(t, "KeywordCxt", { enumerable: !0, get: function() {
      return f.KeywordCxt;
    } });
    var v = /* @__PURE__ */ G();
    Object.defineProperty(t, "_", { enumerable: !0, get: function() {
      return v._;
    } }), Object.defineProperty(t, "str", { enumerable: !0, get: function() {
      return v.str;
    } }), Object.defineProperty(t, "stringify", { enumerable: !0, get: function() {
      return v.stringify;
    } }), Object.defineProperty(t, "nil", { enumerable: !0, get: function() {
      return v.nil;
    } }), Object.defineProperty(t, "Name", { enumerable: !0, get: function() {
      return v.Name;
    } }), Object.defineProperty(t, "CodeGen", { enumerable: !0, get: function() {
      return v.CodeGen;
    } });
    var g = /* @__PURE__ */ vr();
    Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
      return g.default;
    } });
    var b = /* @__PURE__ */ Yt();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return b.default;
    } });
  })(Ge, Ge.exports)), Ge.exports;
}
var ii = /* @__PURE__ */ si();
const ci = /* @__PURE__ */ Da(ii), li = "https://json-schema.org/draft/2020-12/schema", di = "https://github.com/omsf-eco-infra/viz/schema/gufe-viz.schema.json", ui = "gufe-viz payload", fi = "The Python-to-TypeScript contract for gufe visualizations, version 1.0. Generated from python/gufe_viz/schema.py — do not edit by hand. Kinds: SmallMoleculeComponent, ProteinComponent, SolventComponent, LigandAtomMapping, LigandNetwork, ChemicalSystem, Transformation, AlchemicalNetwork.", pi = /* @__PURE__ */ JSON.parse('{"AlchemicalEdge":{"additionalProperties":false,"properties":{"id":{"description":"The Transformation\'s gufe key.","type":"string"},"name":{"default":"","type":"string"},"source":{"description":"Node id of stateA.","type":"string"},"target":{"description":"Node id of stateB.","type":"string"},"protocol":{"default":"","type":"string"}},"required":["id","source","target"],"title":"AlchemicalEdge","type":"object"},"AlchemicalNetworkData":{"additionalProperties":false,"properties":{"name":{"default":"","type":"string"},"nodes":{"items":{"$ref":"#/$defs/AlchemicalNode"},"type":"array"},"edges":{"items":{"$ref":"#/$defs/AlchemicalEdge"},"type":"array"}},"title":"AlchemicalNetworkData","type":"object"},"AlchemicalNetworkPayload":{"additionalProperties":false,"properties":{"schema_version":{"default":"1.0","description":"Schema version. A reader that does not know this major must refuse the payload rather than render it wrongly.","pattern":"^1\\\\.(0|[1-9][0-9]*)$","type":"string"},"name":{"anyOf":[{"type":"string"},{"type":"null"}],"default":null,"description":"The object\'s name, for the title bar."},"extra":{"additionalProperties":true,"description":"Reserved forward-compatibility slot. The only place additional properties are permitted; V1 views ignore its contents entirely.","type":"object"},"kind":{"const":"AlchemicalNetwork","default":"AlchemicalNetwork","type":"string"},"data":{"$ref":"#/$defs/AlchemicalNetworkData"}},"required":["data","kind"],"title":"AlchemicalNetworkPayload","type":"object"},"AlchemicalNode":{"additionalProperties":false,"properties":{"id":{"description":"The ChemicalSystem\'s gufe key.","type":"string"},"name":{"default":"","type":"string"},"components":{"items":{"$ref":"#/$defs/ComponentSummary"},"type":"array"}},"required":["id"],"title":"AlchemicalNode","type":"object"},"ChemicalSystemData":{"additionalProperties":false,"description":"A ChemicalSystem is exactly its labelled components.","properties":{"name":{"default":"","type":"string"},"components":{"items":{"$ref":"#/$defs/ComponentDescriptor"},"type":"array"}},"title":"ChemicalSystemData","type":"object"},"ChemicalSystemFields":{"additionalProperties":false,"description":"The inner object shared by the chemical-system and transformation views.","properties":{"name":{"default":"","type":"string"},"components":{"items":{"$ref":"#/$defs/ComponentDescriptor"},"type":"array"}},"title":"ChemicalSystemFields","type":"object"},"ChemicalSystemPayload":{"additionalProperties":false,"properties":{"schema_version":{"default":"1.0","description":"Schema version. A reader that does not know this major must refuse the payload rather than render it wrongly.","pattern":"^1\\\\.(0|[1-9][0-9]*)$","type":"string"},"name":{"anyOf":[{"type":"string"},{"type":"null"}],"default":null,"description":"The object\'s name, for the title bar."},"extra":{"additionalProperties":true,"description":"Reserved forward-compatibility slot. The only place additional properties are permitted; V1 views ignore its contents entirely.","type":"object"},"kind":{"const":"ChemicalSystem","default":"ChemicalSystem","type":"string"},"data":{"$ref":"#/$defs/ChemicalSystemData"}},"required":["data","kind"],"title":"ChemicalSystemPayload","type":"object"},"ComponentDescriptor":{"additionalProperties":false,"description":"A summary plus whatever the viz needs to draw the component.\\n\\nExactly one of ``sdf`` / ``pdb`` / the solvent fields is populated, chosen by\\nwhat the component can serialize itself as. ``error`` is set instead when a\\ncomponent fails to serialize — one bad component must not take down the whole\\nview.","properties":{"label":{"description":"The component\'s key in its ChemicalSystem.","type":"string"},"type":{"description":"The gufe class name, e.g. \'SmallMoleculeComponent\'.","type":"string"},"name":{"default":"","type":"string"},"sdf":{"anyOf":[{"type":"string"},{"type":"null"}],"default":null},"smiles":{"anyOf":[{"type":"string"},{"type":"null"}],"default":null},"pdb":{"anyOf":[{"type":"string"},{"type":"null"}],"default":null},"positive_ion":{"anyOf":[{"type":"string"},{"type":"null"}],"default":null},"negative_ion":{"anyOf":[{"type":"string"},{"type":"null"}],"default":null},"neutralize":{"anyOf":[{"type":"boolean"},{"type":"null"}],"default":null},"ion_concentration":{"anyOf":[{"type":"string"},{"type":"null"}],"default":null,"description":"Stringified openff Quantity, e.g. \'0.15 molar\'."},"error":{"anyOf":[{"type":"string"},{"type":"null"}],"default":null}},"required":["label","type"],"title":"ComponentDescriptor","type":"object"},"ComponentSummary":{"additionalProperties":false,"description":"What a component *is*, with no structure data — topology only.","properties":{"label":{"description":"The component\'s key in its ChemicalSystem.","type":"string"},"type":{"description":"The gufe class name, e.g. \'SmallMoleculeComponent\'.","type":"string"},"name":{"default":"","type":"string"}},"required":["label","type"],"title":"ComponentSummary","type":"object"},"LigandAtomMappingPayload":{"additionalProperties":false,"properties":{"schema_version":{"default":"1.0","description":"Schema version. A reader that does not know this major must refuse the payload rather than render it wrongly.","pattern":"^1\\\\.(0|[1-9][0-9]*)$","type":"string"},"name":{"anyOf":[{"type":"string"},{"type":"null"}],"default":null,"description":"The object\'s name, for the title bar."},"extra":{"additionalProperties":true,"description":"Reserved forward-compatibility slot. The only place additional properties are permitted; V1 views ignore its contents entirely.","type":"object"},"kind":{"const":"LigandAtomMapping","default":"LigandAtomMapping","type":"string"},"data":{"$ref":"#/$defs/MappingData"}},"required":["data","kind"],"title":"LigandAtomMappingPayload","type":"object"},"LigandNetworkData":{"additionalProperties":false,"description":"A ligand network as nodes and edges, not as GraphML.\\n\\n``LigandNetwork.to_graphml()`` is gufe\'s canonical serialization and the\\nobvious thing to forward, but its node payloads *are* gufe\'s ``to_json``\\nmoldicts — atomic numbers, bond tuples and a base-1-per-char ``.npy``\\nconformer blob. Forwarding it makes the browser decode all of that to draw\\nanything, which is precisely the \\"lot of ugly TypeScript to maintain\\" R8\\nrules out. So Python walks the live network instead and hands over SDF plus\\nflat topology, and the GraphML does not cross the boundary at all.","properties":{"nodes":{"items":{"$ref":"#/$defs/LigandNetworkNode"},"type":"array"},"edges":{"items":{"$ref":"#/$defs/LigandNetworkEdge"},"type":"array"}},"required":["nodes","edges"],"title":"LigandNetworkData","type":"object"},"LigandNetworkEdge":{"additionalProperties":false,"description":"One :class:`gufe.LigandAtomMapping`, as a graph edge.\\n\\nThe endpoints are node ``id``s rather than inlined molecules: a network with\\nforty ligands and sixty edges would otherwise carry each SDF twice over. The\\natom correspondence rides along so the mapping viewer can be handed a\\n:class:`MappingData` assembled from the two endpoint nodes plus this edge —\\nwhich is how R14\'s \\"exact same component\\" is honoured without duplicating the\\nstructures.","properties":{"source":{"description":"Node id of componentA.","type":"string"},"target":{"description":"Node id of componentB.","type":"string"},"score":{"anyOf":[{"type":"number"},{"type":"null"}],"default":null,"description":"The mapping\'s score annotation, when it has one — usually LOMAP\'s 0–1."},"componentA_to_componentB":{"additionalProperties":{"type":"integer"},"type":"object"},"annotations":{"additionalProperties":true,"type":"object"}},"required":["source","target"],"title":"LigandNetworkEdge","type":"object"},"LigandNetworkNode":{"additionalProperties":false,"description":"One ligand in a :class:`gufe.LigandNetwork`.\\n\\n``id`` is the component\'s gufe key, which is what the edges reference. It is\\nan identity, not a label: gufe\'s own network fixtures have unnamed molecules,\\nso the view falls back to a short form of the key when ``name`` is empty.","properties":{"id":{"description":"The SmallMoleculeComponent\'s gufe key.","type":"string"},"name":{"default":"","type":"string"},"sdf":{"description":"SmallMoleculeComponent.to_sdf() output, verbatim.","type":"string"},"smiles":{"anyOf":[{"type":"string"},{"type":"null"}],"default":null}},"required":["id","sdf"],"title":"LigandNetworkNode","type":"object"},"LigandNetworkPayload":{"additionalProperties":false,"properties":{"schema_version":{"default":"1.0","description":"Schema version. A reader that does not know this major must refuse the payload rather than render it wrongly.","pattern":"^1\\\\.(0|[1-9][0-9]*)$","type":"string"},"name":{"anyOf":[{"type":"string"},{"type":"null"}],"default":null,"description":"The object\'s name, for the title bar."},"extra":{"additionalProperties":true,"description":"Reserved forward-compatibility slot. The only place additional properties are permitted; V1 views ignore its contents entirely.","type":"object"},"kind":{"const":"LigandNetwork","default":"LigandNetwork","type":"string"},"data":{"$ref":"#/$defs/LigandNetworkData"}},"required":["data","kind"],"title":"LigandNetworkPayload","type":"object"},"MappingData":{"additionalProperties":false,"description":"A :class:`gufe.LigandAtomMapping`: both endpoints plus the index map.\\n\\nBoth molecules go over as SDF and the correspondence as a plain\\n``{str(indexA): indexB}`` map, so the viewer can colour core and unique atoms\\nand draw the lines itself. JSON object keys must be strings, which is why the\\nA-side indices are stringified rather than left as integers.","properties":{"molA_sdf":{"type":"string"},"molB_sdf":{"type":"string"},"nameA":{"default":"","type":"string"},"nameB":{"default":"","type":"string"},"componentA_to_componentB":{"additionalProperties":{"type":"integer"},"type":"object"},"annotations":{"additionalProperties":true,"type":"object"}},"required":["molA_sdf","molB_sdf"],"title":"MappingData","type":"object"},"ProteinData":{"additionalProperties":false,"properties":{"pdb":{"description":"ProteinComponent.to_pdb_file() output, verbatim.","type":"string"}},"required":["pdb"],"title":"ProteinData","type":"object"},"ProteinPayload":{"additionalProperties":false,"properties":{"schema_version":{"default":"1.0","description":"Schema version. A reader that does not know this major must refuse the payload rather than render it wrongly.","pattern":"^1\\\\.(0|[1-9][0-9]*)$","type":"string"},"name":{"anyOf":[{"type":"string"},{"type":"null"}],"default":null,"description":"The object\'s name, for the title bar."},"extra":{"additionalProperties":true,"description":"Reserved forward-compatibility slot. The only place additional properties are permitted; V1 views ignore its contents entirely.","type":"object"},"kind":{"const":"ProteinComponent","default":"ProteinComponent","type":"string"},"data":{"$ref":"#/$defs/ProteinData"}},"required":["data","kind"],"title":"ProteinPayload","type":"object"},"SmallMoleculeData":{"additionalProperties":false,"properties":{"sdf":{"description":"SmallMoleculeComponent.to_sdf() output, verbatim.","type":"string"},"smiles":{"anyOf":[{"type":"string"},{"type":"null"}],"default":null},"total_charge":{"anyOf":[{"type":"integer"},{"type":"null"}],"default":null}},"required":["sdf"],"title":"SmallMoleculeData","type":"object"},"SmallMoleculePayload":{"additionalProperties":false,"properties":{"schema_version":{"default":"1.0","description":"Schema version. A reader that does not know this major must refuse the payload rather than render it wrongly.","pattern":"^1\\\\.(0|[1-9][0-9]*)$","type":"string"},"name":{"anyOf":[{"type":"string"},{"type":"null"}],"default":null,"description":"The object\'s name, for the title bar."},"extra":{"additionalProperties":true,"description":"Reserved forward-compatibility slot. The only place additional properties are permitted; V1 views ignore its contents entirely.","type":"object"},"kind":{"const":"SmallMoleculeComponent","default":"SmallMoleculeComponent","type":"string"},"data":{"$ref":"#/$defs/SmallMoleculeData"}},"required":["data","kind"],"title":"SmallMoleculePayload","type":"object"},"SolventData":{"additionalProperties":false,"properties":{"smiles":{"default":"O","type":"string"},"positive_ion":{"anyOf":[{"type":"string"},{"type":"null"}],"default":null},"negative_ion":{"anyOf":[{"type":"string"},{"type":"null"}],"default":null},"neutralize":{"anyOf":[{"type":"boolean"},{"type":"null"}],"default":null},"ion_concentration":{"anyOf":[{"type":"string"},{"type":"null"}],"default":null}},"title":"SolventData","type":"object"},"SolventPayload":{"additionalProperties":false,"properties":{"schema_version":{"default":"1.0","description":"Schema version. A reader that does not know this major must refuse the payload rather than render it wrongly.","pattern":"^1\\\\.(0|[1-9][0-9]*)$","type":"string"},"name":{"anyOf":[{"type":"string"},{"type":"null"}],"default":null,"description":"The object\'s name, for the title bar."},"extra":{"additionalProperties":true,"description":"Reserved forward-compatibility slot. The only place additional properties are permitted; V1 views ignore its contents entirely.","type":"object"},"kind":{"const":"SolventComponent","default":"SolventComponent","type":"string"},"data":{"$ref":"#/$defs/SolventData"}},"required":["data","kind"],"title":"SolventPayload","type":"object"},"TransformationData":{"additionalProperties":false,"properties":{"name":{"default":"","type":"string"},"protocol":{"default":"","description":"The Protocol\'s class name.","type":"string"},"stateA":{"$ref":"#/$defs/ChemicalSystemFields"},"stateB":{"$ref":"#/$defs/ChemicalSystemFields"},"mappings":{"items":{"$ref":"#/$defs/MappingData"},"type":"array"}},"required":["stateA","stateB"],"title":"TransformationData","type":"object"},"TransformationPayload":{"additionalProperties":false,"properties":{"schema_version":{"default":"1.0","description":"Schema version. A reader that does not know this major must refuse the payload rather than render it wrongly.","pattern":"^1\\\\.(0|[1-9][0-9]*)$","type":"string"},"name":{"anyOf":[{"type":"string"},{"type":"null"}],"default":null,"description":"The object\'s name, for the title bar."},"extra":{"additionalProperties":true,"description":"Reserved forward-compatibility slot. The only place additional properties are permitted; V1 views ignore its contents entirely.","type":"object"},"kind":{"const":"Transformation","default":"Transformation","type":"string"},"data":{"$ref":"#/$defs/TransformationData"}},"required":["data","kind"],"title":"TransformationPayload","type":"object"}}'), hi = { mapping: { AlchemicalNetwork: "#/$defs/AlchemicalNetworkPayload", ChemicalSystem: "#/$defs/ChemicalSystemPayload", LigandAtomMapping: "#/$defs/LigandAtomMappingPayload", LigandNetwork: "#/$defs/LigandNetworkPayload", ProteinComponent: "#/$defs/ProteinPayload", SmallMoleculeComponent: "#/$defs/SmallMoleculePayload", SolventComponent: "#/$defs/SolventPayload", Transformation: "#/$defs/TransformationPayload" }, propertyName: "kind" }, mi = [{ $ref: "#/$defs/SmallMoleculePayload" }, { $ref: "#/$defs/ProteinPayload" }, { $ref: "#/$defs/SolventPayload" }, { $ref: "#/$defs/LigandAtomMappingPayload" }, { $ref: "#/$defs/LigandNetworkPayload" }, { $ref: "#/$defs/ChemicalSystemPayload" }, { $ref: "#/$defs/TransformationPayload" }, { $ref: "#/$defs/AlchemicalNetworkPayload" }], Qt = {
  $schema: li,
  $id: di,
  title: ui,
  description: fi,
  $defs: pi,
  discriminator: hi,
  oneOf: mi
}, Hi = ["AlchemicalNetwork", "ChemicalSystem", "LigandAtomMapping", "LigandNetwork", "ProteinComponent", "SmallMoleculeComponent", "SolventComponent", "Transformation"], aa = 1, wr = Qt.$id, Sr = new ci({ allErrors: !0, strict: !1 });
Sr.addSchema(Qt, wr);
const oa = Sr.getSchema(wr), Ca = /* @__PURE__ */ new Map();
for (const [e, t] of Object.entries(Qt.discriminator?.mapping ?? {})) {
  const o = Sr.getSchema(`${wr}${t.replace(/^#/, "#")}`);
  o && Ca.set(e, o);
}
const Gi = Object.keys(
  Qt.discriminator?.mapping ?? {}
).sort(), sa = { valid: !0, issues: [] };
function ia(e) {
  return (e ?? []).map((t) => ({
    path: t.instancePath || "",
    message: t.keyword === "additionalProperties" ? `unknown property ${JSON.stringify(t.params.additionalProperty)}` : t.message ?? "is invalid"
  }));
}
function yi(e) {
  if (e == null || typeof e != "object") return null;
  const t = e.schema_version;
  if (typeof t != "string") return null;
  const o = Number.parseInt(t.split(".")[0], 10);
  return !Number.isFinite(o) || o <= aa ? null : `This file was written by a newer gufe-viz (schema ${t}); this build understands schema ${aa}.x. Upgrade gufe-viz to open it.`;
}
function gi(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return { valid: !1, issues: [{ path: "", message: "must be a JSON object" }] };
  const t = e.kind, o = typeof t == "string" ? Ca.get(t) : void 0;
  return o ? o(e) ? sa : { valid: !1, issues: ia(o.errors) } : oa(e) ? sa : { valid: !1, issues: ia(oa.errors) };
}
function vi(e, t = 8) {
  const o = e.slice(0, t).map((a) => `${a.path || "(root)"}: ${a.message}`);
  return e.length > t && o.push(`… and ${e.length - t} more`), o.join(`
`);
}
const Pr = {
  SmallMoleculeComponent: "gufe-small-molecule",
  ProteinComponent: "gufe-protein",
  LigandNetwork: "gufe-ligand-network"
};
function Na(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return { message: "This does not look like a gufe-viz payload (expected a JSON object)." };
  const t = yi(e);
  if (t) return { message: t };
  const { kind: o } = e;
  if (typeof o != "string" || !o)
    return { message: "This payload has no `kind`, so there is nothing to say what it is." };
  if (!Pr[o]) return $i(o);
  const { valid: a, issues: h } = gi(e);
  return a ? null : {
    message: `This payload says it is a ${o}, but it does not match the gufe-viz schema.`,
    detail: vi(h)
  };
}
function $i(e) {
  const t = Object.keys(Pr).sort().join(", ");
  return { message: `Sorry, there is no visualization for ${e} yet. This build can draw: ${t}.` };
}
function Ji(e) {
  return Na(e)?.message ?? null;
}
class _i extends Kt {
  placeholder() {
    return "Waiting for data…";
  }
  renderView(t, o) {
    const a = Na(o);
    if (a)
      return t.appendChild(bi(a, o)), {};
    const h = o.kind, r = Pr[h], i = document.createElement(r);
    return i.style.cssText = "flex:1;min-height:0;min-width:0;", i.payload = o, t.appendChild(i), {
      onResize: () => i.resize?.(),
      // Removing the child fires its own `disconnectedCallback`, which is where
      // its viewers and observers are released — no manual teardown here.
      cleanup: () => i.remove()
    };
  }
}
function bi(e, t) {
  const o = F(
    "div",
    "flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:32px;"
  );
  o.appendChild(ce(e.message));
  const a = (r, i) => F(
    "div",
    "max-width:640px;padding:8px 12px;border-radius:6px;font-size:11px;white-space:pre-wrap;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;overflow-wrap:anywhere;" + (i ? `background:${z.warnBg};color:${z.warnFg};border:1px solid ${z.warnBorder};` : `background:${z.panelBg};color:${z.textMuted2};border:1px solid ${z.cardBorder};`),
    r
  );
  e.detail && o.appendChild(a(e.detail, !0));
  const h = wi(t);
  return h && o.appendChild(a(h, !1)), o;
}
function wi(e) {
  if (e == null || typeof e != "object") return null;
  const t = e, o = [];
  typeof t.kind == "string" && o.push(`kind: ${He(t.kind)}`), typeof t.name == "string" && t.name && o.push(`name: ${He(t.name)}`), typeof t.schema_version == "string" && o.push(`schema_version: ${He(t.schema_version)}`);
  const a = Object.keys(e);
  return a.length && o.push(`keys: ${a.slice(0, 12).join(", ")}${a.length > 12 ? ", …" : ""}`), o.length ? o.join(`
`) : null;
}
Ht("gufe-view", _i);
const Er = {
  threeDmol: "https://3dmol.org/build/3Dmol-min.js",
  rdkit: "https://unpkg.com/@rdkit/rdkit/dist/RDKit_minimal.js",
  d3: "https://cdn.jsdelivr.net/npm/d3@7/+esm"
};
function kr(e) {
  const t = globalThis.__gufeEngines?.[e];
  return t ? Promise.resolve(t) : null;
}
function ja(e, t) {
  return new Promise((o, a) => {
    const h = document.createElement("script");
    h.src = e, h.onload = () => o(), h.onerror = () => a(new Error(`Failed to load ${t}`)), document.head.appendChild(h);
  });
}
let Le = null, De = null;
function Oa() {
  if (De) return De;
  const e = kr("threeDmol");
  return e ? (De = e.then((t) => Le = t || window.$3Dmol), De) : (De = (async () => {
    if (window.$3Dmol) return Le = window.$3Dmol;
    if (await ja(Er.threeDmol, "3Dmol.js"), !window.$3Dmol) throw new Error("3Dmol.js loaded but $3Dmol is undefined");
    return Le = window.$3Dmol;
  })(), De);
}
let xe = null;
function hr() {
  if (xe) return xe;
  const e = kr("rdkit");
  return e ? (xe = e.then((t) => window.RDKit = t), xe) : (xe = (async () => {
    if (window.RDKit) return window.RDKit;
    if (await ja(Er.rdkit, "RDKit"), !window.initRDKitModule) throw new Error("RDKit loaded but initRDKitModule is undefined");
    return window.RDKit = await window.initRDKitModule();
  })(), xe);
}
let fr = null;
function Si() {
  if (!fr) {
    const e = Er.d3;
    fr = kr("d3") ?? import(
      /* @vite-ignore */
      e
    );
  }
  return fr;
}
const Pi = `
`, ca = "$$$$", Ei = (e) => e.indexOf(ca) >= 0 ? e : `${e}${Pi}${ca}`;
function mr(e) {
  const t = String(e).split(/\r?\n/);
  if (t.length < 4) return null;
  const o = parseInt(t[3].slice(0, 3), 10), a = parseInt(t[3].slice(3, 6), 10);
  return isNaN(o) || isNaN(a) ? null : { atoms: o, bonds: a };
}
function yr(e, t, o) {
  let a = null;
  try {
    if (a = e.get_mol(t, JSON.stringify({ removeHs: !0 })), !a) return null;
    try {
      a.set_new_coords(!0);
    } catch {
    }
    return a.get_svg(o, o) || null;
  } catch (h) {
    return console.warn("[gufe-viz] depictSVG threw -", _e(h)), null;
  } finally {
    if (a)
      try {
        a.delete();
      } catch {
      }
  }
}
function ki(e, t, o) {
  e.innerHTML = t;
  const a = e.querySelector("svg");
  a && (a.removeAttribute("width"), a.removeAttribute("height"), a.getAttribute("viewBox") || a.setAttribute("viewBox", `0 0 ${o} ${o}`), a.setAttribute("preserveAspectRatio", "xMidYMid meet"), a.setAttribute("style", "width:100%;height:100%;max-width:100%;max-height:100%;"));
}
const Ri = [
  { id: "stick", label: "Stick", title: "Sticks only" },
  { id: "ball", label: "Ball+Stick", title: "Ball and stick" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" }
], la = {
  stick: { stick: { radius: 0.15, colorscheme: "Jmol" } },
  ball: { stick: { radius: 0.12, colorscheme: "Jmol" }, sphere: { scale: 0.28, colorscheme: "Jmol" } },
  sphere: { sphere: { scale: 1, colorscheme: "Jmol" } }
}, da = 400;
class Ci extends Kt {
  placeholder() {
    return "Waiting for a SmallMoleculeComponent payload…";
  }
  renderView(t, o) {
    const a = o.data.sdf, h = o.name ?? "", r = o.data.smiles ?? "", i = o.data.total_charge;
    t.appendChild(ga(h || "Unnamed molecule", "SmallMoleculeComponent"));
    const l = F("div", "flex:1;display:flex;flex-direction:row;overflow:hidden;min-height:0;");
    t.appendChild(l);
    const f = F("div", "flex:1 1 50%;min-width:0;display:flex;flex-direction:column;"), v = F("div", "flex:1 1 50%;min-width:0;display:flex;flex-direction:column;position:relative;");
    l.appendChild(f), l.appendChild(F("div", `width:1px;flex-shrink:0;background:${z.splitBorder};`)), l.appendChild(v);
    const g = (n) => F("div", `flex-shrink:0;padding:4px 10px;font-size:12px;font-weight:bold;color:${z.labelFg};background:${z.labelBg};`, n);
    f.appendChild(g("2D"));
    const b = F(
      "div",
      `flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:8px;background:${z.canvas2DBg};`
    );
    f.appendChild(b), v.appendChild(g("3D"));
    const S = va();
    v.appendChild(S.wrap);
    const w = F(
      "div",
      `flex-shrink:0;display:flex;flex-wrap:wrap;align-items:baseline;gap:6px 20px;padding:8px 16px;font-size:12px;background:${z.toolbarBg};border-top:1px solid ${z.toolbarBorder};color:${z.textPrimary};`
    );
    t.appendChild(w);
    const P = a ? mr(a) : null, _ = [
      ["Name", h || ke, !1],
      ["SMILES", r || ke, !0],
      ["Charge", i == null ? ke : String(i), !1],
      ["Atoms", P ? String(P.atoms) : ke, !1],
      ["Bonds", P ? String(P.bonds) : ke, !1]
    ];
    for (const [n, s, u] of _) {
      const k = F("div", "display:flex;align-items:baseline;gap:6px;min-width:0;");
      k.appendChild(
        F(
          "span",
          `font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;flex-shrink:0;color:${z.textMuted2};`,
          n
        )
      );
      const R = F(
        "span",
        `user-select:text;cursor:text;color:${z.textPrimary}` + (u ? ";font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:11px;overflow-wrap:anywhere;" : ""),
        s
      );
      R.title = s, k.appendChild(R), w.appendChild(k);
    }
    if (!a || !a.trim())
      return b.appendChild(ce("No molecule provided")), S.container.appendChild(ce("No molecule provided")), {};
    b.appendChild(ce("Loading 2D depiction…")), hr().then((n) => {
      const s = yr(n, a, da);
      s ? ki(b, s, da) : b.replaceChildren(ce("Failed to parse molecule", !0));
    }).catch((n) => {
      b.replaceChildren(ce(`RDKit failed to load: ${_e(n)}`, !0));
    });
    let d = null, m = "stick", c = !1;
    const p = F(
      "div",
      `position:absolute;bottom:10px;right:10px;display:flex;gap:4px;padding:4px;border-radius:6px;z-index:10;background:${z.switcherBg};box-shadow:0 2px 8px rgba(0,0,0,0.25);`
    );
    p.appendChild(
      ya(Ri, m, (n) => {
        m = n, d && (d.setStyle({}, la[n]), d.render());
      })
    );
    const $ = F("button", `${gr}margin-left:4px;`, "Spin");
    return $.title = "Toggle continuous rotation", $.onclick = () => {
      c = !c, $.style.background = c ? z.btnBgActive : z.btnBg;
      try {
        d?.spin(c ? "y" : !1);
      } catch {
      }
    }, p.appendChild($), v.appendChild(p), S.container.appendChild(ce("Loading 3D viewer…")), Oa().then(() => {
      S.container.replaceChildren(), d = Le.createViewer(S.container, { backgroundColor: z.viewerBg }), d.addModel(Ei(a), "sdf"), d.setStyle({}, la[m]), d.zoomTo(), d.render();
    }).catch((n) => {
      S.container.replaceChildren(ce(`3D render failed: ${_e(n)}`, !0));
    }), {
      onResize() {
        d && (d.resize(), d.render());
      },
      cleanup() {
        if (d) {
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
Ht("gufe-small-molecule", Ci);
const Ta = ["HOH", "WAT", "SOL", "TIP3"], ua = { hetflag: !1 }, Ni = { hetflag: !0 }, ji = { resn: Ta }, Ee = {
  stick: { radius: 0.15 },
  sphere: { scale: 0.3 },
  hetero: { stickRadius: 0.2, sphereScale: 0.28 },
  water: { stickRadius: 0.05, sphereScale: 0.18 },
  surfaceOpacity: 0.85,
  /** Above this many atoms a surface is slow enough to be worth warning about. */
  surfaceAtomWarn: 4e4
};
function Oi(e) {
  const t = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set();
  let a = 0, h = 0, r = 0, i = 1 / 0, l = -1 / 0;
  for (const f of e.split(/\r?\n/)) {
    const v = f.slice(0, 6);
    if (v === "ENDMDL") break;
    if (v !== "ATOM  " && v !== "HETATM") continue;
    a++, v === "HETATM" && h++;
    const g = f.slice(17, 20).trim(), b = f.slice(21, 22).trim() || "_", S = f.slice(22, 26).trim(), w = f.slice(26, 27).trim();
    Ta.indexOf(g) !== -1 && r++, t.add(b), o.add(`${b}|${S}${w}|${g}`);
    const P = parseInt(S, 10);
    isNaN(P) || (P < i && (i = P), P > l && (l = P));
  }
  return {
    chains: t.size,
    residues: o.size,
    atoms: a,
    hetatms: h,
    waters: r,
    heteroNonWater: h - r,
    resiMin: i === 1 / 0 ? 0 : i,
    resiMax: l === -1 / 0 ? 0 : l
  };
}
function Ti(e) {
  return `${Ve(e.chains)} chains · ${Ve(e.residues)} residues · ${Ve(e.atoms)} atoms · ${Ve(e.hetatms)} HETATM` + (e.waters > 0 ? ` (${Ve(e.waters)} water)` : "");
}
function Ai(e, t) {
  return e === "chain" ? { colorscheme: "chain" } : e === "ss" ? { colorscheme: "ssJmol" } : e === "spectrum" && t && t.resiMax > t.resiMin ? { colorscheme: { prop: "resi", gradient: "roygb", min: t.resiMin, max: t.resiMax } } : { colorscheme: "Jmol" };
}
function fa(e, t, o, a) {
  const h = a || (() => {
  }), r = Ai(t.color, o);
  try {
    e.removeAllSurfaces();
  } catch {
  }
  if (e.setStyle({}, {}), e.setStyle(
    ua,
    t.rep === "stick" ? { stick: { radius: Ee.stick.radius, ...r } } : t.rep === "sphere" ? { sphere: { scale: Ee.sphere.scale, ...r } } : (
      // For 'surface' the shell is added separately; leave the atoms bare so
      // it is not cluttered from the inside.
      t.rep === "surface" ? {} : { cartoon: { ...r } }
    )
  ), e.setStyle(
    Ni,
    t.hetero ? {
      stick: { radius: Ee.hetero.stickRadius, colorscheme: "Jmol" },
      sphere: { scale: Ee.hetero.sphereScale, colorscheme: "Jmol" }
    } : {}
  ), e.setStyle(
    ji,
    t.waters ? {
      stick: { radius: Ee.water.stickRadius, colorscheme: "Jmol" },
      sphere: { scale: Ee.water.sphereScale, colorscheme: "Jmol" }
    } : {}
  ), t.rep !== "surface") {
    h(null), e.render();
    return;
  }
  h(
    o && o.atoms > Ee.surfaceAtomWarn ? "Computing surface (large structure, this may take a while)…" : "Computing surface…"
  ), e.render(), setTimeout(() => {
    try {
      Promise.resolve(
        e.addSurface(Le.SurfaceType.VDW, { opacity: Ee.surfaceOpacity, ...r }, ua)
      ).then(() => {
        h(null), e.render();
      }).catch((i) => h(`Surface failed: ${_e(i)}`, "error"));
    } catch (i) {
      h(`Surface failed: ${_e(i)}`, "error");
    }
  }, 30);
}
const Mi = [
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
class qi extends Kt {
  placeholder() {
    return "Waiting for a ProteinComponent payload…";
  }
  renderView(t, o) {
    const a = o.data.pdb, h = o.name ?? "", r = { rep: "cartoon", color: "chain", waters: !1, hetero: !0 };
    let i = null, l = null;
    const f = F(
      "div",
      `display:flex;align-items:center;gap:14px;flex-wrap:wrap;padding:8px 14px;flex-shrink:0;font-size:12px;background:${z.toolbarBg};border-bottom:1px solid ${z.toolbarBorder};color:${z.textPrimary};`
    );
    t.appendChild(f), f.appendChild(
      F("span", `font-weight:700;font-size:14px;letter-spacing:.02em;color:${z.titleColor};`, h || "Protein")
    );
    const v = (c) => F("span", `font-size:11px;color:${z.textMuted};`, c);
    f.appendChild(v("Style:")), f.appendChild(
      ya(Mi, r.rep, (c) => {
        r.rep = c, m();
      })
    ), f.appendChild(v("Color:"));
    const g = F("select", ma);
    for (const c of Ii) {
      const p = F("option", "", c.label);
      p.value = c.id, g.appendChild(p);
    }
    g.value = r.color, g.addEventListener("change", () => {
      r.color = g.value, m();
    }), f.appendChild(g);
    const b = F("div", "display:flex;gap:4px;");
    f.appendChild(b);
    const S = [
      ["waters", "Waters", "Show water molecules", () => m()],
      ["hetero", "Hetero", "Show hetero atoms / ligands / ions / lipids", () => m()],
      ["spin", "Spin", "Rotate the view continuously", () => i?.spin(r.spin ? "y" : !1)]
    ];
    for (const [c, p, $, n] of S) {
      const s = F("button", gr, p);
      s.title = $, s.style.background = r[c] ? z.btnBgActive : z.btnBg, s.onclick = () => {
        r[c] = !r[c], s.style.background = r[c] ? z.btnBgActive : z.btnBg, n();
      }, b.appendChild(s);
    }
    const w = F("span", `margin-left:auto;font-size:11px;white-space:nowrap;color:${z.textMuted2};`);
    f.appendChild(w);
    const P = va();
    t.appendChild(P.wrap);
    const _ = F(
      "div",
      "position:absolute;top:12px;left:50%;transform:translateX(-50%);padding:6px 14px;border-radius:6px;font-size:12px;z-index:20;display:none;pointer-events:none;"
    );
    P.wrap.appendChild(_);
    const d = (c, p) => {
      if (c == null) {
        _.style.display = "none";
        return;
      }
      _.textContent = c, _.style.display = "block";
      const $ = p === "error";
      _.style.background = $ ? z.warnBg : z.toolbarBg, _.style.color = $ ? z.warnFg : z.textMuted, _.style.border = `1px solid ${$ ? z.warnBorder : z.toolbarBorder}`;
    };
    function m() {
      i && fa(i, r, l, d);
    }
    if (!a || !a.trim())
      return d("No protein data — waiting for a PDB payload."), {};
    try {
      l = Oi(a), w.textContent = Ti(l);
    } catch (c) {
      d(`⚠ PDB parse error: ${_e(c)}`, "error");
    }
    return d("Loading 3D viewer…"), Oa().then(() => {
      i = Le.createViewer(P.container, { backgroundColor: z.viewerBg }), i.addModel(a, "pdb"), fa(i, r, l, d), i.zoomTo(), i.spin(r.spin ? "y" : !1), i.render();
    }).catch((c) => {
      d(`⚠ Failed to render structure: ${_e(c)}`, "error");
    }), {
      onResize() {
        i && (i.resize(), i.render());
      },
      cleanup() {
        if (i) {
          try {
            i.spin(!1);
          } catch {
          }
          try {
            i.clear();
          } catch {
          }
          i = null;
        }
      }
    };
  }
}
Ht("gufe-protein", qi);
const Di = ["Force-directed", "Circular", "Radial"], Bt = 34, Ke = 200, pr = 1.5, xi = 6, Li = 16, he = {
  linkBaseDistance: 150,
  linkScoreBonus: 60,
  linkStrength: 0.5,
  chargeStrength: -2500,
  chargeDistanceMin: 20,
  chargeDistanceMax: 5e3,
  centerStrength: 0.08,
  collisionPadding: 12,
  collisionIterations: 4,
  drift: 0.04,
  tickMultiplier: 2
}, Aa = "http://www.w3.org/2000/svg";
function se(e, t = {}) {
  const o = document.createElementNS(Aa, e);
  for (const [a, h] of Object.entries(t)) o.setAttribute(a, String(h));
  return o;
}
function pa(e, t) {
  const o = document.createElementNS(Aa, "title");
  return o.textContent = t, e.appendChild(o), e;
}
function zi(e) {
  const t = parseInt(e.replace("#", ""), 16);
  return [t >> 16 & 255, t >> 8 & 255, t & 255];
}
function ha(e) {
  const [t, o] = z.netEdgeRamp.map(zi), a = Math.max(0, Math.min(1, e ?? 0.5));
  return `rgb(${t.map((r, i) => Math.round(r + (o[i] - r) * a)).join(",")})`;
}
function je(e) {
  return e.name ? e.name : (e.id.split("-").pop() ?? e.id).slice(0, 6);
}
const Vi = (e, t) => e.length > t ? `${e.slice(0, t - 1)}…` : e;
function Bi(e) {
  return {
    molA_sdf: e.from.sdf,
    molB_sdf: e.to.sdf,
    nameA: je(e.from),
    nameB: je(e.to),
    componentA_to_componentB: e.componentA_to_componentB ?? {},
    annotations: e.annotations ?? {}
  };
}
class Fi extends Kt {
  placeholder() {
    return "Waiting for a LigandNetwork payload…";
  }
  renderView(t, o) {
    const a = (o.data.nodes ?? []).map((u) => ({ ...u, x: 0, y: 0 })), h = new Map(a.map((u) => [u.id, u])), r = [];
    let i = 0;
    for (const u of o.data.edges ?? []) {
      const k = h.get(u.source), R = h.get(u.target);
      if (!k || !R) {
        i++;
        continue;
      }
      r.push({ ...u, index: r.length, from: k, to: R });
    }
    const l = ga(o.name || "Ligand network", "LigandNetwork");
    l.statsEl.appendChild(Te("ligands", String(a.length))), l.statsEl.appendChild(Te("mappings", String(r.length))), t.appendChild(l);
    const f = F("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    t.appendChild(f);
    const v = F("div", `flex:1 1 58%;min-width:0;display:flex;flex-direction:column;background:${z.netCanvasBg};`), g = F("div", `flex:1 1 42%;min-width:0;display:flex;flex-direction:column;background:${z.appBg};`);
    f.appendChild(v), f.appendChild(F("div", `width:1px;flex-shrink:0;background:${z.splitBorder};`)), f.appendChild(g);
    const b = F("div", `flex:1;position:relative;overflow:hidden;min-height:0;background:${z.netCanvasBg};`);
    v.appendChild(b);
    const S = this.#r((u) => s(u));
    v.appendChild(S.bar);
    const w = this.#e(g);
    if (!a.length)
      return b.appendChild(ce("This network has no ligands.")), w.message("Nothing to show."), {};
    i && jr(b, `${i} mapping${i === 1 ? "" : "s"} name a ligand this network does not contain`);
    const P = hr().catch((u) => (console.warn("[gufe-viz] RDKit failed to load:", _e(u)), null));
    let _ = r.length ? 0 : -1, d = null, m = "Force-directed", c = !1, p = !0, $ = () => {
    };
    const n = (u) => {
      _ = u, w.show(r[u] ?? null), $();
    }, s = (u = m) => {
      m = u, d?.(), d = null, b.querySelector("svg")?.remove();
      const k = b.clientWidth || 800, R = b.clientHeight || 600;
      Ui(a, k, R, m, r);
      const T = () => {
        if (!p) return;
        const M = this.#n(b, a, r, k, R, n);
        $ = () => M.setSelected(_), d = M.cleanup, $(), P.then((A) => A && M.depict(A)).catch(() => {
        });
      };
      if (m !== "Force-directed" || c) {
        T();
        return;
      }
      Ki(a, r, k, R).then((M) => {
        if (p) {
          if (M) {
            T();
            return;
          }
          c = !0, S.picker.value = "Circular", jr(b, "d3 could not be loaded — showing the circular layout instead"), s("Circular");
        }
      }, T);
    };
    return s(), w.show(r[_] ?? null), {
      onResize: () => s(),
      cleanup: () => {
        p = !1, d?.();
      }
    };
  }
  #r(t) {
    const o = F(
      "div",
      `display:flex;align-items:center;gap:10px;flex-wrap:wrap;padding:8px 14px;flex-shrink:0;background:${z.toolbarBg};border-top:1px solid ${z.toolbarBorder};`
    ), a = F("div", `display:flex;align-items:center;gap:6px;font-size:11px;color:${z.textMuted};`);
    a.appendChild(F("span", "", "score")), a.appendChild(
      F(
        "span",
        `width:40px;height:4px;border-radius:2px;background:linear-gradient(to right,${z.netEdgeRamp.join(",")});`
      )
    ), a.appendChild(F("span", "", "0 → 1")), o.appendChild(a), o.appendChild(F("label", `font-size:12px;margin-left:auto;color:${z.textMuted};`, "Layout"));
    const h = F("select", ma);
    for (const r of Di) {
      const i = F("option", "", r);
      i.value = r, h.appendChild(i);
    }
    return h.onchange = () => t(h.value), o.appendChild(h), { bar: o, picker: h };
  }
  /** The right-hand pane: what the selected mapping is, in words and pictures. */
  #e(t) {
    const o = F(
      "div",
      `flex-shrink:0;padding:4px 10px;font-size:12px;font-weight:bold;color:${z.labelFg};background:${z.labelBg};`,
      "Selected mapping"
    ), a = F("div", "flex:1;min-height:0;overflow:auto;display:flex;flex-direction:column;");
    t.appendChild(o), t.appendChild(a);
    const h = (i) => a.replaceChildren(ce(i));
    return { show: (i) => {
      if (!i) {
        h("Click an edge to see its mapping.");
        return;
      }
      const l = Bi(i);
      a.replaceChildren();
      const f = F(
        "div",
        `padding:10px 14px;font-size:13px;font-weight:600;color:${z.textPrimary};border-bottom:1px solid ${z.toolbarBorder};`,
        `${l.nameA} → ${l.nameB}`
      );
      a.appendChild(f);
      const v = F("div", "display:flex;flex-direction:row;min-height:180px;");
      a.appendChild(v);
      const g = [l.molA_sdf, l.molB_sdf].map((d, m) => {
        const c = F("div", "flex:1 1 50%;min-width:0;display:flex;flex-direction:column;");
        c.appendChild(
          F("div", `padding:4px 10px;font-size:11px;color:${z.textMuted2};`, m === 0 ? "A" : "B")
        );
        const p = F(
          "div",
          `flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:6px;background:${z.canvas2DBg};`
        );
        return p.appendChild(ce("…")), c.appendChild(p), v.appendChild(c), { box: p, sdf: d };
      }), b = Object.keys(l.componentA_to_componentB ?? {}).length, S = mr(l.molA_sdf), w = mr(l.molB_sdf), P = F(
        "div",
        `display:flex;flex-wrap:wrap;gap:8px 16px;padding:10px 14px;font-size:11px;color:${z.textMuted};border-top:1px solid ${z.toolbarBorder};`
      );
      P.appendChild(Te("score", i.score == null ? ke : i.score.toFixed(3), ha(i.score))), P.appendChild(Te("mapped atoms", String(b))), P.appendChild(Te("atoms A", S ? String(S.atoms) : ke)), P.appendChild(Te("atoms B", w ? String(w.atoms) : ke)), a.appendChild(P);
      const _ = Object.entries(l.annotations ?? {}).filter(([d]) => d !== "score");
      if (_.length) {
        const d = F(
          "div",
          `padding:0 14px 12px;font-size:11px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;color:${z.textMuted2};`
        );
        for (const [m, c] of _)
          d.appendChild(F("div", "", `${m}: ${String(c)}`));
        a.appendChild(d);
      }
      hr().then((d) => {
        for (const { box: m, sdf: c } of g) {
          const p = yr(d, c, Ke);
          if (m.replaceChildren(), p) {
            m.innerHTML = p;
            const $ = m.querySelector("svg");
            $?.removeAttribute("width"), $?.removeAttribute("height"), $?.setAttribute("style", "width:100%;height:100%;");
          } else
            m.appendChild(ce("Failed to parse molecule", !0));
        }
      }).catch((d) => {
        for (const { box: m } of g) m.replaceChildren(ce(`RDKit failed to load: ${_e(d)}`, !0));
      });
    }, message: h };
  }
  /** Build the SVG for the current node positions. Returns the handles the
   * caller needs afterwards: selection, depictions, and teardown. */
  #n(t, o, a, h, r, i) {
    const l = se("svg", { width: h, height: r, style: "display:block;touch-action:none;" }), f = se("g");
    l.appendChild(f), t.appendChild(l);
    const v = [], g = se("g"), b = se("g"), S = se("g", { "pointer-events": "none" }), w = se("g");
    f.append(g, b, S, w);
    for (const p of a) {
      const $ = ha(p.score), n = se("line", {
        stroke: z.netHaloColor,
        "stroke-width": pr + 12,
        "stroke-linecap": "round",
        opacity: 0,
        "pointer-events": "none"
      }), s = se("line", {
        stroke: $,
        "stroke-width": pr + (p.score ?? 0.5) * (xi - pr),
        "stroke-opacity": 0.9,
        "pointer-events": "none"
      }), u = pa(
        se("line", { stroke: "transparent", "stroke-width": Li, style: "cursor:pointer;" }),
        `${je(p.from)} → ${je(p.to)}${p.score == null ? "" : `
score ${p.score.toFixed(3)}`}`
      );
      if (u.addEventListener("click", (k) => {
        k.stopPropagation(), i(p.index);
      }), v.push(n), g.append(n, s), b.appendChild(u), p.score != null) {
        const k = se("text", {
          "text-anchor": "middle",
          "dominant-baseline": "middle",
          "font-size": 10,
          "font-weight": 600,
          fill: z.netEdgeLabel
        });
        k.textContent = p.score.toFixed(2), S.appendChild(k);
      } else
        S.appendChild(se("text"));
    }
    const P = [], _ = [], d = o.map((p) => {
      const $ = pa(se("g", { style: "cursor:grab;" }), `${je(p)}
${p.smiles ?? ""}
id: ${p.id}`);
      $.appendChild(
        se("circle", {
          r: Bt,
          fill: z.netNodeFill,
          stroke: z.netNodeStroke,
          "stroke-width": 1.5
        })
      );
      const n = se("g", { "pointer-events": "none" });
      $.appendChild(n), P.push(n);
      const s = se("text", {
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        "font-size": 16,
        "font-weight": 700,
        fill: z.netInitials,
        "pointer-events": "none"
      });
      s.textContent = je(p).slice(0, 2).toUpperCase(), $.appendChild(s), _.push(s);
      const u = se("text", {
        "text-anchor": "middle",
        y: Bt + 14,
        "font-size": 11,
        "font-weight": 600,
        fill: z.netNodeLabel,
        "pointer-events": "none"
      });
      return u.textContent = Vi(je(p), 16), $.appendChild(u), w.appendChild($), $;
    }), m = () => {
      a.forEach((p, $) => {
        for (const s of [v[$], g.children[$ * 2 + 1], b.children[$]]) {
          const u = s;
          u.setAttribute("x1", String(p.from.x)), u.setAttribute("y1", String(p.from.y)), u.setAttribute("x2", String(p.to.x)), u.setAttribute("y2", String(p.to.y));
        }
        const n = S.children[$];
        n.setAttribute("x", String((p.from.x + p.to.x) / 2)), n.setAttribute("y", String((p.from.y + p.to.y) / 2 - 8));
      }), o.forEach((p, $) => d[$].setAttribute("transform", `translate(${p.x},${p.y})`));
    };
    m();
    const c = this.#t(l, f, o, d, m);
    return {
      setSelected(p) {
        v.forEach(($, n) => $.setAttribute("opacity", n === p ? "0.95" : "0"));
      },
      depict(p) {
        const $ = (Bt - 4) * 2 / Ke, n = new DOMParser();
        let s = 0;
        return o.forEach((u, k) => {
          const R = u.sdf && yr(p, u.sdf, Ke);
          if (!R) return;
          const T = n.parseFromString(R, "image/svg+xml").documentElement;
          if (!T || T.nodeName.toLowerCase() === "parsererror") return;
          const M = P[k];
          M.setAttribute(
            "transform",
            `translate(${-$ * Ke / 2},${-$ * Ke / 2}) scale(${$})`
          );
          let A = 0;
          for (const q of Array.from(T.childNodes)) {
            if (q.nodeType !== 1) continue;
            const H = q.nodeName.toLowerCase();
            if (!(H === "defs" || H === "metadata" || H === "title")) {
              if (H === "rect") {
                const ee = (q.getAttribute("fill") ?? "").toLowerCase();
                if (ee === "#ffffff" || ee === "white" || ee === "rgb(255,255,255)") continue;
              }
              M.appendChild(document.importNode(q, !0)), A++;
            }
          }
          A && (_[k].setAttribute("display", "none"), s++);
        }), s;
      },
      cleanup: c.cleanup
    };
  }
  /** Wheel zoom, background pan, node drag — ~40 lines instead of d3-zoom and
   * d3-drag, and they keep working when d3 is unreachable. */
  #t(t, o, a, h, r) {
    let i = 1, l = 0, f = 0;
    const v = () => o.setAttribute("transform", `translate(${l},${f}) scale(${i})`), g = (_) => {
      _.preventDefault();
      const d = t.getBoundingClientRect(), m = _.clientX - d.left, c = _.clientY - d.top, p = Math.min(5 / i, Math.max(0.15 / i, Math.exp(-_.deltaY * 2e-3)));
      l = m - (m - l) * p, f = c - (c - f) * p, i *= p, v();
    };
    t.addEventListener("wheel", g, { passive: !1 });
    let b = null;
    const S = (_) => {
      b = { x: _.clientX - l, y: _.clientY - f };
    }, w = (_) => {
      b && (l = _.clientX - b.x, f = _.clientY - b.y, v());
    }, P = () => {
      b = null;
    };
    return t.addEventListener("pointerdown", S), t.addEventListener("pointermove", w), t.addEventListener("pointerup", P), t.addEventListener("pointercancel", P), t.addEventListener("pointerleave", P), h.forEach((_, d) => {
      let m = null;
      _.addEventListener("pointerdown", (p) => {
        p.stopPropagation(), m = { x: p.clientX - a[d].x * i, y: p.clientY - a[d].y * i }, _.setPointerCapture(p.pointerId);
      }), _.addEventListener("pointermove", (p) => {
        m && (a[d].x = a[d].fx = (p.clientX - m.x) / i, a[d].y = a[d].fy = (p.clientY - m.y) / i, r());
      });
      const c = () => {
        m = null;
      };
      _.addEventListener("pointerup", c), _.addEventListener("pointercancel", c);
    }), {
      cleanup() {
        t.removeEventListener("wheel", g), t.removeEventListener("pointerdown", S), t.removeEventListener("pointermove", w), t.removeEventListener("pointerup", P), t.removeEventListener("pointercancel", P), t.removeEventListener("pointerleave", P);
      }
    };
  }
}
function Ui(e, t, o, a, h) {
  const r = t / 2, i = o / 2, l = (f, v) => {
    f.forEach((g, b) => {
      const S = 2 * Math.PI * b / Math.max(1, f.length) - Math.PI / 2;
      g.x = r + v * Math.cos(S), g.y = i + v * Math.sin(S), g.fx = a === "Force-directed" ? void 0 : g.x, g.fy = a === "Force-directed" ? void 0 : g.y;
    });
  };
  if (a === "Radial" && e.length) {
    const f = new Map(e.map((_) => [_.id, []]));
    for (const _ of h)
      f.get(_.from.id).push(_.to.id), f.get(_.to.id).push(_.from.id);
    const v = new Map(e.map((_) => [_.id, _])), g = e.reduce(
      (_, d) => f.get(d.id).length > f.get(_.id).length ? d : _
    ), b = /* @__PURE__ */ new Set([g.id]);
    let S = [g.id], w = 0;
    const P = Math.min(t, o) * 0.18;
    for (; S.length; ) {
      l(
        S.map((d) => v.get(d)),
        w === 0 ? 0 : w * P + 40
      );
      const _ = [];
      for (const d of S)
        for (const m of f.get(d))
          b.has(m) || (b.add(m), _.push(m));
      S = _, w++;
    }
    l(e.filter((_) => !b.has(_.id)), Math.min(t, o) * 0.45);
    return;
  }
  l(e, Math.min(t, o) * 0.34);
}
async function Ki(e, t, o, a) {
  let h;
  try {
    if (h = await Si(), typeof h?.forceSimulation != "function") return !1;
  } catch {
    return !1;
  }
  const r = t.map((f) => ({ ...f, source: f.from.id, target: f.to.id })), i = h.forceSimulation(e).force(
    "link",
    h.forceLink(r).id((f) => f.id).distance((f) => he.linkBaseDistance + (1 - (f.score ?? 0.5)) * he.linkScoreBonus).strength(he.linkStrength)
  ).force(
    "charge",
    h.forceManyBody().strength(he.chargeStrength).distanceMin(he.chargeDistanceMin).distanceMax(he.chargeDistanceMax)
  ).force("center", h.forceCenter(o / 2, a / 2).strength(he.centerStrength)).force("collision", h.forceCollide(Bt + he.collisionPadding).iterations(he.collisionIterations)).force("x", h.forceX(o / 2).strength(he.drift)).force("y", h.forceY(a / 2).strength(he.drift)).stop(), l = Math.ceil(Math.log(i.alphaMin()) / Math.log(1 - i.alphaDecay()));
  for (let f = 0; f < l * he.tickMultiplier; f++) i.tick();
  return !0;
}
Ht("gufe-ligand-network", Fi);
function Wi(e, t) {
  let o = e.querySelector("gufe-view");
  return o || (o = document.createElement("gufe-view"), o.style.cssText = "display:block;width:100%;height:100%;", e.appendChild(o)), t !== void 0 && (o.payload = t), o;
}
export {
  Kt as GufeElement,
  Fi as GufeLigandNetwork,
  qi as GufeProtein,
  Ci as GufeSmallMolecule,
  _i as GufeView,
  Hi as PAYLOAD_KINDS,
  Gi as SCHEMA_KINDS,
  aa as SUPPORTED_SCHEMA_MAJOR,
  Pr as VIEW_TAGS,
  Ht as defineElement,
  Na as describeProblem,
  Ji as dispatchProblem,
  vi as formatIssues,
  Bi as mappingDataFor,
  Wi as mount,
  gi as validatePayload
};
