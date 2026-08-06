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
function qo() {
  try {
    return globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches ?? !1;
  } catch {
    return !1;
  }
}
const x = qo() ? Nr.dark : Nr.light;
function F(e, t, a) {
  const o = document.createElement(e);
  return t && (o.style.cssText = t), a != null && (o.textContent = a), o;
}
function Bt(e) {
  return String(e ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function _e(e) {
  if (e == null) return "unknown error";
  const t = e.message;
  if (typeof t == "string" && t) return t;
  const a = String(e);
  return a === "[object Object]" ? e.name || "unknown error" : a;
}
const Le = (e) => e.toLocaleString("en-US"), ke = "-", yr = `background:${x.btnBg};color:${x.btnFg};border:1px solid ${x.btnBorder};padding:4px 9px;font-size:11px;font-weight:bold;border-radius:3px;cursor:pointer;font-family:inherit;`, mo = `background:${x.selectBg};color:${x.textPrimary};border:1px solid ${x.selectBorder};border-radius:6px;padding:4px 8px;font-size:12px;cursor:pointer;font-family:inherit;`;
function yo(e, t, a) {
  const o = F("div", "display:flex;gap:4px;"), h = e.map((r) => {
    const i = F("button", yr, r.label);
    return i.title = r.title || r.label, i.onmouseover = () => {
      i.style.background = x.btnBgHover;
    }, i.onmouseout = () => {
      i.style.background = t === r.id ? x.btnBgActive : x.btnBg;
    }, i.onclick = () => {
      o.setActive(r.id), a(r.id);
    }, o.appendChild(i), { id: r.id, btn: i };
  });
  return o.setActive = (r) => {
    t = r, h.forEach((i) => {
      i.btn.style.background = i.id === t ? x.btnBgActive : x.btnBg;
    });
  }, o.setActive(t), o;
}
function Oe(e, t, a) {
  const o = F("span", "display:inline-flex;align-items:center;gap:5px;white-space:nowrap;");
  a && o.appendChild(
    F("span", `width:8px;height:8px;border-radius:50%;background:${a};display:inline-block;`)
  );
  const h = F("span");
  return h.innerHTML = `${Bt(e)} <b style="color:${x.textPrimary};">${Bt(t)}</b>`, o.appendChild(h), o;
}
function jr(e, t) {
  const a = F("div", "", `⚠ ${t}`);
  return a.style.cssText = `position:absolute;top:10px;left:50%;transform:translateX(-50%);max-width:90%;z-index:20;padding:6px 14px;border-radius:6px;font-size:12px;background:${x.warnBg};color:${x.warnFg};border:1px solid ${x.warnBorder};`, e.appendChild(a), a;
}
function ce(e, t = !1) {
  return F(
    "div",
    `flex:1;display:flex;align-items:center;justify-content:center;text-align:center;padding:24px;font-size:13px;color:${t ? x.errorFg : x.textMuted2};`,
    e
  );
}
function go(e, t) {
  const a = F(
    "div",
    `display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;padding:9px 14px;flex-shrink:0;background:${x.toolbarBg};border-bottom:1px solid ${x.toolbarBorder};`
  );
  return a.titleEl = F("span", `font-weight:700;font-size:15px;color:${x.titleColor};letter-spacing:.02em;`, e), a.subtitleEl = F("span", `font-size:12px;color:${x.textMuted2};`, t || ""), a.statsEl = F(
    "div",
    `display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-left:auto;font-size:11px;color:${x.textMuted};`
  ), a.appendChild(a.titleEl), a.appendChild(a.subtitleEl), a.appendChild(a.statsEl), a;
}
function vo() {
  const e = F("div", "flex:1;position:relative;min-height:0;min-width:0;"), t = F("div", "position:absolute;inset:0;");
  return e.appendChild(t), { wrap: e, container: t };
}
const Do = 150;
class Kt extends HTMLElement {
  #r = null;
  #e = null;
  #n = null;
  #t = null;
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
    this.#r = t, this.isConnected && this.#i();
  }
  get payload() {
    return this.#r;
  }
  connectedCallback() {
    this.style.display = "block", this.style.width = this.style.width || "100%", this.style.height = this.style.height || "100%", this.style.background = x.appBg, this.style.color = x.textPrimary, this.style.fontFamily = "'Inter',system-ui,sans-serif", typeof ResizeObserver < "u" && !this.#t && (this.#t = new ResizeObserver(() => {
      this.#o && clearTimeout(this.#o), this.#o = setTimeout(() => this.#e?.onResize?.(), Do);
    }), this.#t.observe(this)), this.#i();
  }
  disconnectedCallback() {
    this.#a(), this.#t?.disconnect(), this.#t = null;
  }
  /** Release whatever the mounted view owns and empty the element. */
  #a() {
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
    return this.#a(), this.#n = F(
      "div",
      `width:100%;height:100%;display:flex;flex-direction:column;overflow:hidden;background:${x.appBg};`
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
  #i() {
    const t = this.#d(), a = this.#s;
    if (this.#r == null) {
      t.appendChild(ce(this.placeholder()));
      return;
    }
    let o;
    try {
      o = this.renderView(t, this.#r);
    } catch (h) {
      this.#l(t, a, h);
      return;
    }
    o instanceof Promise ? o.then(
      (h) => this.#c(h, a),
      (h) => this.#l(t, a, h)
    ) : this.#c(o, a);
  }
  /** Take ownership of a view's handle, unless it belongs to a dead render. */
  #c(t, a) {
    if (a !== this.#s || !this.isConnected) {
      try {
        t?.cleanup?.();
      } catch (o) {
        console.warn("[gufe-viz] cleanup of a superseded view failed:", o);
      }
      return;
    }
    this.#e = t || null;
  }
  #l(t, a, o) {
    a === this.#s && (console.warn("[gufe-viz] render failed:", o), t.replaceChildren(ce(`Failed to render: ${_e(o)}`, !0)));
  }
  /** Force a resize pass - for hosts that know they resized us. */
  resize() {
    this.#e?.onResize?.();
  }
}
function Ht(e, t) {
  typeof customElements > "u" || customElements.get(e) || customElements.define(e, t);
}
function zo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var He = { exports: {} }, tr = {}, be = {}, Re = {}, rr = {}, nr = {}, or = {}, Ar;
function Ft() {
  return Ar || (Ar = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.regexpCode = e.getEsmExportName = e.getProperty = e.safeStringify = e.stringify = e.strConcat = e.addCodeArg = e.str = e._ = e.nil = e._Code = e.Name = e.IDENTIFIER = e._CodeOrName = void 0;
    class t {
    }
    e._CodeOrName = t, e.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
    class a extends t {
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
    e.Name = a;
    class o extends t {
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
        return (c = this._names) !== null && c !== void 0 ? c : this._names = this._items.reduce((p, $) => ($ instanceof a && (p[$.str] = (p[$.str] || 0) + 1), p), {});
      }
    }
    e._Code = o, e.nil = new o("");
    function h(m, ...c) {
      const p = [m[0]];
      let $ = 0;
      for (; $ < c.length; )
        l(p, c[$]), p.push(m[++$]);
      return new o(p);
    }
    e._ = h;
    const r = new o("+");
    function i(m, ...c) {
      const p = [w(m[0])];
      let $ = 0;
      for (; $ < c.length; )
        p.push(r), l(p, c[$]), p.push(r, w(m[++$]));
      return f(p), new o(p);
    }
    e.str = i;
    function l(m, c) {
      c instanceof o ? m.push(...c._items) : c instanceof a ? m.push(c) : m.push(b(c));
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
        return c instanceof a || m[m.length - 1] !== '"' ? void 0 : typeof c != "string" ? `${m.slice(0, -1)}${c}"` : c[0] === '"' ? m.slice(0, -1) + c.slice(1) : void 0;
      if (typeof c == "string" && c[0] === '"' && !(m instanceof a))
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
      return new o(w(m));
    }
    e.stringify = S;
    function w(m) {
      return JSON.stringify(m).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    e.safeStringify = w;
    function E(m) {
      return typeof m == "string" && e.IDENTIFIER.test(m) ? new o(`.${m}`) : h`[${m}]`;
    }
    e.getProperty = E;
    function _(m) {
      if (typeof m == "string" && e.IDENTIFIER.test(m))
        return new o(`${m}`);
      throw new Error(`CodeGen: invalid export name: ${m}, use explicit $id name mapping`);
    }
    e.getEsmExportName = _;
    function d(m) {
      return new o(m.toString());
    }
    e.regexpCode = d;
  })(or)), or;
}
var sr = {}, Or;
function Tr() {
  return Or || (Or = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0;
    const t = /* @__PURE__ */ Ft();
    class a extends Error {
      constructor(v) {
        super(`CodeGen: "code" for ${v} not defined`), this.value = v.value;
      }
    }
    var o;
    (function(f) {
      f[f.Started = 0] = "Started", f[f.Completed = 1] = "Completed";
    })(o || (e.UsedValueState = o = {})), e.varKinds = {
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
        const S = this.toName(v), { prefix: w } = S, E = (b = g.key) !== null && b !== void 0 ? b : g.ref;
        let _ = this._values[w];
        if (_) {
          const c = _.get(E);
          if (c)
            return c;
        } else
          _ = this._values[w] = /* @__PURE__ */ new Map();
        _.set(E, S);
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
        for (const E in v) {
          const _ = v[E];
          if (!_)
            continue;
          const d = b[E] = b[E] || /* @__PURE__ */ new Map();
          _.forEach((m) => {
            if (d.has(m))
              return;
            d.set(m, o.Started);
            let c = g(m);
            if (c) {
              const p = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
              w = (0, t._)`${w}${p} ${m} = ${c};${this.opts._n}`;
            } else if (c = S?.(m))
              w = (0, t._)`${w}${c}${this.opts._n}`;
            else
              throw new a(m);
            d.set(m, o.Completed);
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
    const t = /* @__PURE__ */ Ft(), a = /* @__PURE__ */ Tr();
    var o = /* @__PURE__ */ Ft();
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
    var h = /* @__PURE__ */ Tr();
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
      optimizeNames(y, P) {
        return this;
      }
    }
    class i extends r {
      constructor(y, P, I) {
        super(), this.varKind = y, this.name = P, this.rhs = I;
      }
      render({ es5: y, _n: P }) {
        const I = y ? a.varKinds.var : this.varKind, B = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
        return `${I} ${this.name}${B};` + P;
      }
      optimizeNames(y, P) {
        if (y[this.name.str])
          return this.rhs && (this.rhs = H(this.rhs, y, P)), this;
      }
      get names() {
        return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
      }
    }
    class l extends r {
      constructor(y, P, I) {
        super(), this.lhs = y, this.rhs = P, this.sideEffects = I;
      }
      render({ _n: y }) {
        return `${this.lhs} = ${this.rhs};` + y;
      }
      optimizeNames(y, P) {
        if (!(this.lhs instanceof t.Name && !y[this.lhs.str] && !this.sideEffects))
          return this.rhs = H(this.rhs, y, P), this;
      }
      get names() {
        const y = this.lhs instanceof t.Name ? {} : { ...this.lhs.names };
        return q(y, this.rhs);
      }
    }
    class f extends l {
      constructor(y, P, I, B) {
        super(y, I, B), this.op = P;
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
      optimizeNames(y, P) {
        return this.code = H(this.code, y, P), this;
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
        return this.nodes.reduce((P, I) => P + I.render(y), "");
      }
      optimizeNodes() {
        const { nodes: y } = this;
        let P = y.length;
        for (; P--; ) {
          const I = y[P].optimizeNodes();
          Array.isArray(I) ? y.splice(P, 1, ...I) : I ? y[P] = I : y.splice(P, 1);
        }
        return y.length > 0 ? this : void 0;
      }
      optimizeNames(y, P) {
        const { nodes: I } = this;
        let B = I.length;
        for (; B--; ) {
          const K = I[B];
          K.optimizeNames(y, P) || (ee(y, K.names), I.splice(B, 1));
        }
        return I.length > 0 ? this : void 0;
      }
      get names() {
        return this.nodes.reduce((y, P) => T(y, P.names), {});
      }
    }
    class E extends w {
      render(y) {
        return "{" + y._n + super.render(y) + "}" + y._n;
      }
    }
    class _ extends w {
    }
    class d extends E {
    }
    d.kind = "else";
    class m extends E {
      constructor(y, P) {
        super(P), this.condition = y;
      }
      render(y) {
        let P = `if(${this.condition})` + super.render(y);
        return this.else && (P += "else " + this.else.render(y)), P;
      }
      optimizeNodes() {
        super.optimizeNodes();
        const y = this.condition;
        if (y === !0)
          return this.nodes;
        let P = this.else;
        if (P) {
          const I = P.optimizeNodes();
          P = this.else = Array.isArray(I) ? new d(I) : I;
        }
        if (P)
          return y === !1 ? P instanceof m ? P : P.nodes : this.nodes.length ? this : new m(te(y), P instanceof m ? [P] : P.nodes);
        if (!(y === !1 || !this.nodes.length))
          return this;
      }
      optimizeNames(y, P) {
        var I;
        if (this.else = (I = this.else) === null || I === void 0 ? void 0 : I.optimizeNames(y, P), !!(super.optimizeNames(y, P) || this.else))
          return this.condition = H(this.condition, y, P), this;
      }
      get names() {
        const y = super.names;
        return q(y, this.condition), this.else && T(y, this.else.names), y;
      }
    }
    m.kind = "if";
    class c extends E {
    }
    c.kind = "for";
    class p extends c {
      constructor(y) {
        super(), this.iteration = y;
      }
      render(y) {
        return `for(${this.iteration})` + super.render(y);
      }
      optimizeNames(y, P) {
        if (super.optimizeNames(y, P))
          return this.iteration = H(this.iteration, y, P), this;
      }
      get names() {
        return T(super.names, this.iteration.names);
      }
    }
    class $ extends c {
      constructor(y, P, I, B) {
        super(), this.varKind = y, this.name = P, this.from = I, this.to = B;
      }
      render(y) {
        const P = y.es5 ? a.varKinds.var : this.varKind, { name: I, from: B, to: K } = this;
        return `for(${P} ${I}=${B}; ${I}<${K}; ${I}++)` + super.render(y);
      }
      get names() {
        const y = q(super.names, this.from);
        return q(y, this.to);
      }
    }
    class n extends c {
      constructor(y, P, I, B) {
        super(), this.loop = y, this.varKind = P, this.name = I, this.iterable = B;
      }
      render(y) {
        return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(y);
      }
      optimizeNames(y, P) {
        if (super.optimizeNames(y, P))
          return this.iterable = H(this.iterable, y, P), this;
      }
      get names() {
        return T(super.names, this.iterable.names);
      }
    }
    class s extends E {
      constructor(y, P, I) {
        super(), this.name = y, this.args = P, this.async = I;
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
    class k extends E {
      render(y) {
        let P = "try" + super.render(y);
        return this.catch && (P += this.catch.render(y)), this.finally && (P += this.finally.render(y)), P;
      }
      optimizeNodes() {
        var y, P;
        return super.optimizeNodes(), (y = this.catch) === null || y === void 0 || y.optimizeNodes(), (P = this.finally) === null || P === void 0 || P.optimizeNodes(), this;
      }
      optimizeNames(y, P) {
        var I, B;
        return super.optimizeNames(y, P), (I = this.catch) === null || I === void 0 || I.optimizeNames(y, P), (B = this.finally) === null || B === void 0 || B.optimizeNames(y, P), this;
      }
      get names() {
        const y = super.names;
        return this.catch && T(y, this.catch.names), this.finally && T(y, this.finally.names), y;
      }
    }
    class R extends E {
      constructor(y) {
        super(), this.error = y;
      }
      render(y) {
        return `catch(${this.error})` + super.render(y);
      }
    }
    R.kind = "catch";
    class O extends E {
      render(y) {
        return "finally" + super.render(y);
      }
    }
    O.kind = "finally";
    class M {
      constructor(y, P = {}) {
        this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ...P, _n: P.lines ? `
` : "" }, this._extScope = y, this._scope = new a.Scope({ parent: y }), this._nodes = [new _()];
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
      scopeValue(y, P) {
        const I = this._extScope.value(y, P);
        return (this._values[I.prefix] || (this._values[I.prefix] = /* @__PURE__ */ new Set())).add(I), I;
      }
      getScopeValue(y, P) {
        return this._extScope.getValue(y, P);
      }
      // return code that assigns values in the external scope to the names that are used internally
      // (same names that were returned by gen.scopeName or gen.scopeValue)
      scopeRefs(y) {
        return this._extScope.scopeRefs(y, this._values);
      }
      scopeCode() {
        return this._extScope.scopeCode(this._values);
      }
      _def(y, P, I, B) {
        const K = this._scope.toName(P);
        return I !== void 0 && B && (this._constants[K.str] = I), this._leafNode(new i(y, K, I)), K;
      }
      // `const` declaration (`var` in es5 mode)
      const(y, P, I) {
        return this._def(a.varKinds.const, y, P, I);
      }
      // `let` declaration with optional assignment (`var` in es5 mode)
      let(y, P, I) {
        return this._def(a.varKinds.let, y, P, I);
      }
      // `var` declaration with optional assignment
      var(y, P, I) {
        return this._def(a.varKinds.var, y, P, I);
      }
      // assignment code
      assign(y, P, I) {
        return this._leafNode(new l(y, P, I));
      }
      // `+=` code
      add(y, P) {
        return this._leafNode(new f(y, e.operators.ADD, P));
      }
      // appends passed SafeExpr to code or executes Block
      code(y) {
        return typeof y == "function" ? y() : y !== t.nil && this._leafNode(new S(y)), this;
      }
      // returns code for object literal for the passed argument list of key-value pairs
      object(...y) {
        const P = ["{"];
        for (const [I, B] of y)
          P.length > 1 && P.push(","), P.push(I), (I !== B || this.opts.es5) && (P.push(":"), (0, t.addCodeArg)(P, B));
        return P.push("}"), new t._Code(P);
      }
      // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
      if(y, P, I) {
        if (this._blockNode(new m(y)), P && I)
          this.code(P).else().code(I).endIf();
        else if (P)
          this.code(P).endIf();
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
      _for(y, P) {
        return this._blockNode(y), P && this.code(P).endFor(), this;
      }
      // a generic `for` clause (or statement if `forBody` is passed)
      for(y, P) {
        return this._for(new p(y), P);
      }
      // `for` statement for a range of values
      forRange(y, P, I, B, K = this.opts.es5 ? a.varKinds.var : a.varKinds.let) {
        const Q = this._scope.toName(y);
        return this._for(new $(K, Q, P, I), () => B(Q));
      }
      // `for-of` statement (in es5 mode replace with a normal for loop)
      forOf(y, P, I, B = a.varKinds.const) {
        const K = this._scope.toName(y);
        if (this.opts.es5) {
          const Q = P instanceof t.Name ? P : this.var("_arr", P);
          return this.forRange("_i", 0, (0, t._)`${Q}.length`, (Z) => {
            this.var(K, (0, t._)`${Q}[${Z}]`), I(K);
          });
        }
        return this._for(new n("of", B, K, P), () => I(K));
      }
      // `for-in` statement.
      // With option `ownProperties` replaced with a `for-of` loop for object keys
      forIn(y, P, I, B = this.opts.es5 ? a.varKinds.var : a.varKinds.const) {
        if (this.opts.ownProperties)
          return this.forOf(y, (0, t._)`Object.keys(${P})`, I);
        const K = this._scope.toName(y);
        return this._for(new n("in", B, K, P), () => I(K));
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
        const P = new u();
        if (this._blockNode(P), this.code(y), P.nodes.length !== 1)
          throw new Error('CodeGen: "return" should have one node');
        return this._endBlockNode(u);
      }
      // `try` statement
      try(y, P, I) {
        if (!P && !I)
          throw new Error('CodeGen: "try" without "catch" and "finally"');
        const B = new k();
        if (this._blockNode(B), this.code(y), P) {
          const K = this.name("e");
          this._currNode = B.catch = new R(K), P(K);
        }
        return I && (this._currNode = B.finally = new O(), this.code(I)), this._endBlockNode(R, O);
      }
      // `throw` statement
      throw(y) {
        return this._leafNode(new b(y));
      }
      // start self-balancing block
      block(y, P) {
        return this._blockStarts.push(this._nodes.length), y && this.code(y).endBlock(P), this;
      }
      // end the current self-balancing block
      endBlock(y) {
        const P = this._blockStarts.pop();
        if (P === void 0)
          throw new Error("CodeGen: not in self-balancing block");
        const I = this._nodes.length - P;
        if (I < 0 || y !== void 0 && I !== y)
          throw new Error(`CodeGen: wrong number of nodes: ${I} vs ${y} expected`);
        return this._nodes.length = P, this;
      }
      // `function` heading (or definition if funcBody is passed)
      func(y, P = t.nil, I, B) {
        return this._blockNode(new s(y, P, I)), B && this.code(B).endFunc(), this;
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
      _endBlockNode(y, P) {
        const I = this._currNode;
        if (I instanceof y || P && I instanceof P)
          return this._nodes.pop(), this;
        throw new Error(`CodeGen: not in block "${P ? `${y.kind}/${P.kind}` : y.kind}"`);
      }
      _elseNode(y) {
        const P = this._currNode;
        if (!(P instanceof m))
          throw new Error('CodeGen: "else" without "if"');
        return this._currNode = P.else = y, this;
      }
      get _root() {
        return this._nodes[0];
      }
      get _currNode() {
        const y = this._nodes;
        return y[y.length - 1];
      }
      set _currNode(y) {
        const P = this._nodes;
        P[P.length - 1] = y;
      }
    }
    e.CodeGen = M;
    function T(A, y) {
      for (const P in y)
        A[P] = (A[P] || 0) + (y[P] || 0);
      return A;
    }
    function q(A, y) {
      return y instanceof t._CodeOrName ? T(A, y.names) : A;
    }
    function H(A, y, P) {
      if (A instanceof t.Name)
        return I(A);
      if (!B(A))
        return A;
      return new t._Code(A._items.reduce((K, Q) => (Q instanceof t.Name && (Q = I(Q)), Q instanceof t._Code ? K.push(...Q._items) : K.push(Q), K), []));
      function I(K) {
        const Q = P[K.str];
        return Q === void 0 || y[K.str] !== 1 ? K : (delete y[K.str], Q);
      }
      function B(K) {
        return K instanceof t._Code && K._items.some((Q) => Q instanceof t.Name && y[Q.str] === 1 && P[Q.str] !== void 0);
      }
    }
    function ee(A, y) {
      for (const P in y)
        A[P] = (A[P] || 0) - (y[P] || 0);
    }
    function te(A) {
      return typeof A == "boolean" || typeof A == "number" || A === null ? !A : (0, t._)`!${z(A)}`;
    }
    e.not = te;
    const fe = N(e.operators.AND);
    function Y(...A) {
      return A.reduce(fe);
    }
    e.and = Y;
    const me = N(e.operators.OR);
    function V(...A) {
      return A.reduce(me);
    }
    e.or = V;
    function N(A) {
      return (y, P) => y === t.nil ? P : P === t.nil ? y : (0, t._)`${z(y)} ${A} ${z(P)}`;
    }
    function z(A) {
      return A instanceof t.Name ? A : (0, t._)`(${A})`;
    }
  })(nr)), nr;
}
var J = {}, Ir;
function X() {
  if (Ir) return J;
  Ir = 1, Object.defineProperty(J, "__esModule", { value: !0 }), J.checkStrictMode = J.getErrorPath = J.Type = J.useFunc = J.setEvaluated = J.evaluatedPropsToName = J.mergeEvaluated = J.eachItem = J.unescapeJsonPointer = J.escapeJsonPointer = J.escapeFragment = J.unescapeFragment = J.schemaRefOrVal = J.schemaHasRulesButRef = J.schemaHasRules = J.checkUnknownRules = J.alwaysValidSchema = J.toHash = void 0;
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ Ft();
  function a(n) {
    const s = {};
    for (const u of n)
      s[u] = !0;
    return s;
  }
  J.toHash = a;
  function o(n, s) {
    return typeof s == "boolean" ? s : Object.keys(s).length === 0 ? !0 : (h(n, s), !r(s, n.self.RULES.all));
  }
  J.alwaysValidSchema = o;
  function h(n, s = n.schema) {
    const { opts: u, self: k } = n;
    if (!u.strictSchema || typeof s == "boolean")
      return;
    const R = k.RULES.keywords;
    for (const O in s)
      R[O] || $(n, `unknown keyword: "${O}"`);
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
    return (R, O, M, T) => {
      const q = M === void 0 ? O : M instanceof e.Name ? (O instanceof e.Name ? n(R, O, M) : s(R, O, M), M) : O instanceof e.Name ? (s(R, M, O), O) : u(O, M);
      return T === e.Name && !(q instanceof e.Name) ? k(R, q) : q;
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
      resultToName: E
    }),
    items: w({
      mergeNames: (n, s, u) => n.if((0, e._)`${u} !== true && ${s} !== undefined`, () => n.assign(u, (0, e._)`${s} === true ? true : ${u} > ${s} ? ${u} : ${s}`)),
      mergeToName: (n, s, u) => n.if((0, e._)`${u} !== true`, () => n.assign(u, s === !0 ? !0 : (0, e._)`${u} > ${s} ? ${u} : ${s}`)),
      mergeValues: (n, s) => n === !0 ? !0 : Math.max(n, s),
      resultToName: (n, s) => n.var("items", s)
    })
  };
  function E(n, s) {
    if (s === !0)
      return n.var("props", !0);
    const u = n.var("props", (0, e._)`{}`);
    return s !== void 0 && _(n, u, s), u;
  }
  J.evaluatedPropsToName = E;
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
var Ge = {}, qr;
function ve() {
  if (qr) return Ge;
  qr = 1, Object.defineProperty(Ge, "__esModule", { value: !0 });
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
  return Ge.default = t, Ge;
}
var Dr;
function Gt() {
  return Dr || (Dr = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
    const t = /* @__PURE__ */ G(), a = /* @__PURE__ */ X(), o = /* @__PURE__ */ ve();
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
      f($, u), n || s || v(p, o.default.vErrors);
    }
    e.reportExtraError = r;
    function i(d, m) {
      d.assign(o.default.errors, m), d.if((0, t._)`${o.default.vErrors} !== null`, () => d.if(m, () => d.assign((0, t._)`${o.default.vErrors}.length`, m), () => d.assign(o.default.vErrors, null)));
    }
    e.resetErrorsCount = i;
    function l({ gen: d, keyword: m, schemaValue: c, data: p, errsCount: $, it: n }) {
      if ($ === void 0)
        throw new Error("ajv implementation error");
      const s = d.name("err");
      d.forRange("i", $, o.default.errors, (u) => {
        d.const(s, (0, t._)`${o.default.vErrors}[${u}]`), d.if((0, t._)`${s}.instancePath === undefined`, () => d.assign((0, t._)`${s}.instancePath`, (0, t.strConcat)(o.default.instancePath, n.errorPath))), d.assign((0, t._)`${s}.schemaPath`, (0, t.str)`${n.errSchemaPath}/${m}`), n.opts.verbose && (d.assign((0, t._)`${s}.schema`, c), d.assign((0, t._)`${s}.data`, p));
      });
    }
    e.extendErrors = l;
    function f(d, m) {
      const c = d.const("err", m);
      d.if((0, t._)`${o.default.vErrors} === null`, () => d.assign(o.default.vErrors, (0, t._)`[${c}]`), (0, t._)`${o.default.vErrors}.push(${c})`), d.code((0, t._)`${o.default.errors}++`);
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
        E(d, c)
      ];
      return _(d, m, n), p.object(...n);
    }
    function w({ errorPath: d }, { instancePath: m }) {
      const c = m ? (0, t.str)`${d}${(0, a.getErrorPath)(m, a.Type.Str)}` : d;
      return [o.default.instancePath, (0, t.strConcat)(o.default.instancePath, c)];
    }
    function E({ keyword: d, it: { errSchemaPath: m } }, { schemaPath: c, parentSchema: p }) {
      let $ = p ? m : (0, t.str)`${m}/${d}`;
      return c && ($ = (0, t.str)`${$}${(0, a.getErrorPath)(c, a.Type.Str)}`), [g.schemaPath, $];
    }
    function _(d, { params: m, message: c }, p) {
      const { keyword: $, data: n, schemaValue: s, it: u } = d, { opts: k, propertyName: R, topSchemaRef: O, schemaPath: M } = u;
      p.push([g.keyword, $], [g.params, typeof m == "function" ? m(d) : m || (0, t._)`{}`]), k.messages && p.push([g.message, typeof c == "function" ? c(d) : c]), k.verbose && p.push([g.schema, s], [g.parentSchema, (0, t._)`${O}${M}`], [o.default.data, n]), R && p.push([g.propertyName, R]);
    }
  })(rr)), rr;
}
var zr;
function Vo() {
  if (zr) return Re;
  zr = 1, Object.defineProperty(Re, "__esModule", { value: !0 }), Re.boolOrEmptySchema = Re.topBoolOrEmptySchema = void 0;
  const e = /* @__PURE__ */ Gt(), t = /* @__PURE__ */ G(), a = /* @__PURE__ */ ve(), o = {
    message: "boolean schema is false"
  };
  function h(l) {
    const { gen: f, schema: v, validateName: g } = l;
    v === !1 ? i(l, !1) : typeof v == "object" && v.$async === !0 ? f.return(a.default.data) : (f.assign((0, t._)`${g}.errors`, null), f.return(!0));
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
    (0, e.reportError)(b, o, void 0, f);
  }
  return Re;
}
var se = {}, Ce = {}, Vr;
function $o() {
  if (Vr) return Ce;
  Vr = 1, Object.defineProperty(Ce, "__esModule", { value: !0 }), Ce.getRules = Ce.isJSONType = void 0;
  const e = ["string", "number", "integer", "boolean", "null", "object", "array"], t = new Set(e);
  function a(h) {
    return typeof h == "string" && t.has(h);
  }
  Ce.isJSONType = a;
  function o() {
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
  return Ce.getRules = o, Ce;
}
var we = {}, xr;
function _o() {
  if (xr) return we;
  xr = 1, Object.defineProperty(we, "__esModule", { value: !0 }), we.shouldUseRule = we.shouldUseGroup = we.schemaHasRulesForType = void 0;
  function e({ schema: o, self: h }, r) {
    const i = h.RULES.types[r];
    return i && i !== !0 && t(o, i);
  }
  we.schemaHasRulesForType = e;
  function t(o, h) {
    return h.rules.some((r) => a(o, r));
  }
  we.shouldUseGroup = t;
  function a(o, h) {
    var r;
    return o[h.keyword] !== void 0 || ((r = h.definition.implements) === null || r === void 0 ? void 0 : r.some((i) => o[i] !== void 0));
  }
  return we.shouldUseRule = a, we;
}
var Lr;
function Ut() {
  if (Lr) return se;
  Lr = 1, Object.defineProperty(se, "__esModule", { value: !0 }), se.reportTypeError = se.checkDataTypes = se.checkDataType = se.coerceAndCheckDataType = se.getJSONTypes = se.getSchemaTypes = se.DataType = void 0;
  const e = /* @__PURE__ */ $o(), t = /* @__PURE__ */ _o(), a = /* @__PURE__ */ Gt(), o = /* @__PURE__ */ G(), h = /* @__PURE__ */ X();
  var r;
  (function(c) {
    c[c.Correct = 0] = "Correct", c[c.Wrong = 1] = "Wrong";
  })(r || (se.DataType = r = {}));
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
  se.getSchemaTypes = i;
  function l(c) {
    const p = Array.isArray(c) ? c : c ? [c] : [];
    if (p.every(e.isJSONType))
      return p;
    throw new Error("type must be JSONType or JSONType[]: " + p.join(","));
  }
  se.getJSONTypes = l;
  function f(c, p) {
    const { gen: $, data: n, opts: s } = c, u = g(p, s.coerceTypes), k = p.length > 0 && !(u.length === 0 && p.length === 1 && (0, t.schemaHasRulesForType)(c, p[0]));
    if (k) {
      const R = E(p, n, s.strictNumbers, r.Wrong);
      $.if(R, () => {
        u.length ? b(c, p, u) : d(c);
      });
    }
    return k;
  }
  se.coerceAndCheckDataType = f;
  const v = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
  function g(c, p) {
    return p ? c.filter(($) => v.has($) || p === "array" && $ === "array") : [];
  }
  function b(c, p, $) {
    const { gen: n, data: s, opts: u } = c, k = n.let("dataType", (0, o._)`typeof ${s}`), R = n.let("coerced", (0, o._)`undefined`);
    u.coerceTypes === "array" && n.if((0, o._)`${k} == 'object' && Array.isArray(${s}) && ${s}.length == 1`, () => n.assign(s, (0, o._)`${s}[0]`).assign(k, (0, o._)`typeof ${s}`).if(E(p, s, u.strictNumbers), () => n.assign(R, s))), n.if((0, o._)`${R} !== undefined`);
    for (const M of $)
      (v.has(M) || M === "array" && u.coerceTypes === "array") && O(M);
    n.else(), d(c), n.endIf(), n.if((0, o._)`${R} !== undefined`, () => {
      n.assign(s, R), S(c, R);
    });
    function O(M) {
      switch (M) {
        case "string":
          n.elseIf((0, o._)`${k} == "number" || ${k} == "boolean"`).assign(R, (0, o._)`"" + ${s}`).elseIf((0, o._)`${s} === null`).assign(R, (0, o._)`""`);
          return;
        case "number":
          n.elseIf((0, o._)`${k} == "boolean" || ${s} === null
              || (${k} == "string" && ${s} && ${s} == +${s})`).assign(R, (0, o._)`+${s}`);
          return;
        case "integer":
          n.elseIf((0, o._)`${k} === "boolean" || ${s} === null
              || (${k} === "string" && ${s} && ${s} == +${s} && !(${s} % 1))`).assign(R, (0, o._)`+${s}`);
          return;
        case "boolean":
          n.elseIf((0, o._)`${s} === "false" || ${s} === 0 || ${s} === null`).assign(R, !1).elseIf((0, o._)`${s} === "true" || ${s} === 1`).assign(R, !0);
          return;
        case "null":
          n.elseIf((0, o._)`${s} === "" || ${s} === 0 || ${s} === false`), n.assign(R, null);
          return;
        case "array":
          n.elseIf((0, o._)`${k} === "string" || ${k} === "number"
              || ${k} === "boolean" || ${s} === null`).assign(R, (0, o._)`[${s}]`);
      }
    }
  }
  function S({ gen: c, parentData: p, parentDataProperty: $ }, n) {
    c.if((0, o._)`${p} !== undefined`, () => c.assign((0, o._)`${p}[${$}]`, n));
  }
  function w(c, p, $, n = r.Correct) {
    const s = n === r.Correct ? o.operators.EQ : o.operators.NEQ;
    let u;
    switch (c) {
      case "null":
        return (0, o._)`${p} ${s} null`;
      case "array":
        u = (0, o._)`Array.isArray(${p})`;
        break;
      case "object":
        u = (0, o._)`${p} && typeof ${p} == "object" && !Array.isArray(${p})`;
        break;
      case "integer":
        u = k((0, o._)`!(${p} % 1) && !isNaN(${p})`);
        break;
      case "number":
        u = k();
        break;
      default:
        return (0, o._)`typeof ${p} ${s} ${c}`;
    }
    return n === r.Correct ? u : (0, o.not)(u);
    function k(R = o.nil) {
      return (0, o.and)((0, o._)`typeof ${p} == "number"`, R, $ ? (0, o._)`isFinite(${p})` : o.nil);
    }
  }
  se.checkDataType = w;
  function E(c, p, $, n) {
    if (c.length === 1)
      return w(c[0], p, $, n);
    let s;
    const u = (0, h.toHash)(c);
    if (u.array && u.object) {
      const k = (0, o._)`typeof ${p} != "object"`;
      s = u.null ? k : (0, o._)`!${p} || ${k}`, delete u.null, delete u.array, delete u.object;
    } else
      s = o.nil;
    u.number && delete u.integer;
    for (const k in u)
      s = (0, o.and)(s, w(k, p, $, n));
    return s;
  }
  se.checkDataTypes = E;
  const _ = {
    message: ({ schema: c }) => `must be ${c}`,
    params: ({ schema: c, schemaValue: p }) => typeof c == "string" ? (0, o._)`{type: ${c}}` : (0, o._)`{type: ${p}}`
  };
  function d(c) {
    const p = m(c);
    (0, a.reportError)(p, _);
  }
  se.reportTypeError = d;
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
  return se;
}
var Be = {}, Br;
function xo() {
  if (Br) return Be;
  Br = 1, Object.defineProperty(Be, "__esModule", { value: !0 }), Be.assignDefaults = void 0;
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X();
  function a(h, r) {
    const { properties: i, items: l } = h.schema;
    if (r === "object" && i)
      for (const f in i)
        o(h, f, i[f].default);
    else r === "array" && Array.isArray(l) && l.forEach((f, v) => o(h, v, f.default));
  }
  Be.assignDefaults = a;
  function o(h, r, i) {
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
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), a = /* @__PURE__ */ ve(), o = /* @__PURE__ */ X();
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
  function w({ schemaCode: c, data: p, it: { gen: $, topSchemaRef: n, schemaPath: s, errorPath: u }, it: k }, R, O, M) {
    const T = M ? (0, e._)`${c}, ${p}, ${n}${s}` : p, q = [
      [a.default.instancePath, (0, e.strConcat)(a.default.instancePath, u)],
      [a.default.parentData, k.parentData],
      [a.default.parentDataProperty, k.parentDataProperty],
      [a.default.rootData, a.default.rootData]
    ];
    k.opts.dynamicRef && q.push([a.default.dynamicAnchors, a.default.dynamicAnchors]);
    const H = (0, e._)`${T}, ${$.object(...q)}`;
    return O !== e.nil ? (0, e._)`${R}.call(${O}, ${H})` : (0, e._)`${R}(${H})`;
  }
  re.callValidateCode = w;
  const E = (0, e._)`new RegExp`;
  function _({ gen: c, it: { opts: p } }, $) {
    const n = p.unicodeRegExp ? "u" : "", { regExp: s } = p.code, u = s($, n);
    return c.scopeValue("pattern", {
      key: u.toString(),
      ref: u,
      code: (0, e._)`${s.code === "new RegExp" ? E : (0, o.useFunc)(c, s)}(${$}, ${n})`
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
      const O = p.const("len", (0, e._)`${$}.length`);
      p.forRange("i", 0, O, (M) => {
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
    if ($.some((O) => (0, t.alwaysValidSchema)(s, O)) && !s.opts.unevaluated)
      return;
    const k = p.let("valid", !1), R = p.name("_valid");
    p.block(() => $.forEach((O, M) => {
      const T = c.subschema({
        keyword: n,
        schemaProp: M,
        compositeRule: !0
      }, R);
      p.assign(k, (0, e._)`${k} || ${R}`), c.mergeValidEvaluated(T, R) || p.if((0, e.not)(k));
    })), c.result(k, () => c.reset(), () => c.error(!0));
  }
  return re.validateUnion = m, re;
}
var Ur;
function Lo() {
  if (Ur) return ge;
  Ur = 1, Object.defineProperty(ge, "__esModule", { value: !0 }), ge.validateKeywordUsage = ge.validSchemaType = ge.funcKeywordCode = ge.macroKeywordCode = void 0;
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ ve(), a = /* @__PURE__ */ $e(), o = /* @__PURE__ */ Gt();
  function h(S, w) {
    const { gen: E, keyword: _, schema: d, parentSchema: m, it: c } = S, p = w.macro.call(c.self, d, m, c), $ = v(E, _, p);
    c.opts.validateSchema !== !1 && c.self.validateSchema(p, !0);
    const n = E.name("valid");
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
    var E;
    const { gen: _, keyword: d, schema: m, parentSchema: c, $data: p, it: $ } = S;
    f($, w);
    const n = !p && w.compile ? w.compile.call($.self, m, c, $) : w.validate, s = v(_, d, n), u = _.let("valid");
    S.block$data(u, k), S.ok((E = w.valid) !== null && E !== void 0 ? E : u);
    function k() {
      if (w.errors === !1)
        M(), w.modifying && i(S), T(() => S.error());
      else {
        const q = w.async ? R() : O();
        w.modifying && i(S), T(() => l(S, q));
      }
    }
    function R() {
      const q = _.let("ruleErrs", null);
      return _.try(() => M((0, e._)`await `), (H) => _.assign(u, !1).if((0, e._)`${H} instanceof ${$.ValidationError}`, () => _.assign(q, (0, e._)`${H}.errors`), () => _.throw(H))), q;
    }
    function O() {
      const q = (0, e._)`${s}.errors`;
      return _.assign(q, null), M(e.nil), q;
    }
    function M(q = w.async ? (0, e._)`await ` : e.nil) {
      const H = $.opts.passContext ? t.default.this : t.default.self, ee = !("compile" in w && !p || w.schema === !1);
      _.assign(u, (0, e._)`${q}${(0, a.callValidateCode)(S, s, H, ee)}`, w.modifying);
    }
    function T(q) {
      var H;
      _.if((0, e.not)((H = w.valid) !== null && H !== void 0 ? H : u), q);
    }
  }
  ge.funcKeywordCode = r;
  function i(S) {
    const { gen: w, data: E, it: _ } = S;
    w.if(_.parentData, () => w.assign(E, (0, e._)`${_.parentData}[${_.parentDataProperty}]`));
  }
  function l(S, w) {
    const { gen: E } = S;
    E.if((0, e._)`Array.isArray(${w})`, () => {
      E.assign(t.default.vErrors, (0, e._)`${t.default.vErrors} === null ? ${w} : ${t.default.vErrors}.concat(${w})`).assign(t.default.errors, (0, e._)`${t.default.vErrors}.length`), (0, o.extendErrors)(S);
    }, () => S.error());
  }
  function f({ schemaEnv: S }, w) {
    if (w.async && !S.$async)
      throw new Error("async keyword in sync schema");
  }
  function v(S, w, E) {
    if (E === void 0)
      throw new Error(`keyword "${w}" failed to compile`);
    return S.scopeValue("keyword", typeof E == "function" ? { ref: E } : { ref: E, code: (0, e.stringify)(E) });
  }
  function g(S, w, E = !1) {
    return !w.length || w.some((_) => _ === "array" ? Array.isArray(S) : _ === "object" ? S && typeof S == "object" && !Array.isArray(S) : typeof S == _ || E && typeof S > "u");
  }
  ge.validSchemaType = g;
  function b({ schema: S, opts: w, self: E, errSchemaPath: _ }, d, m) {
    if (Array.isArray(d.keyword) ? !d.keyword.includes(m) : d.keyword !== m)
      throw new Error("ajv implementation error");
    const c = d.dependencies;
    if (c?.some((p) => !Object.prototype.hasOwnProperty.call(S, p)))
      throw new Error(`parent schema must have dependencies of ${m}: ${c.join(",")}`);
    if (d.validateSchema && !d.validateSchema(S[m])) {
      const $ = `keyword "${m}" value is invalid at path "${_}": ` + E.errorsText(d.validateSchema.errors);
      if (w.validateSchema === "log")
        E.logger.error($);
      else
        throw new Error($);
    }
  }
  return ge.validateKeywordUsage = b, ge;
}
var Se = {}, Kr;
function Bo() {
  if (Kr) return Se;
  Kr = 1, Object.defineProperty(Se, "__esModule", { value: !0 }), Se.extendSubschemaMode = Se.extendSubschemaData = Se.getSubschema = void 0;
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X();
  function a(r, { keyword: i, schemaProp: l, schema: f, schemaPath: v, errSchemaPath: g, topSchemaRef: b }) {
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
  Se.getSubschema = a;
  function o(r, i, { dataProp: l, dataPropType: f, data: v, dataTypes: g, propertyName: b }) {
    if (v !== void 0 && l !== void 0)
      throw new Error('both "data" and "dataProp" passed, only one allowed');
    const { gen: S } = i;
    if (l !== void 0) {
      const { errorPath: E, dataPathArr: _, opts: d } = i, m = S.let("data", (0, e._)`${i.data}${(0, e.getProperty)(l)}`, !0);
      w(m), r.errorPath = (0, e.str)`${E}${(0, t.getErrorPath)(l, f, d.jsPropertySyntax)}`, r.parentDataProperty = (0, e._)`${l}`, r.dataPathArr = [..._, r.parentDataProperty];
    }
    if (v !== void 0) {
      const E = v instanceof e.Name ? v : S.let("data", v, !0);
      w(E), b !== void 0 && (r.propertyName = b);
    }
    g && (r.dataTypes = g);
    function w(E) {
      r.data = E, r.dataLevel = i.dataLevel + 1, r.dataTypes = [], i.definedProperties = /* @__PURE__ */ new Set(), r.parentData = i.data, r.dataNames = [...i.dataNames, E];
    }
  }
  Se.extendSubschemaData = o;
  function h(r, { jtdDiscriminator: i, jtdMetadata: l, compositeRule: f, createErrors: v, allErrors: g }) {
    f !== void 0 && (r.compositeRule = f), v !== void 0 && (r.createErrors = v), g !== void 0 && (r.allErrors = g), r.jtdDiscriminator = i, r.jtdMetadata = l;
  }
  return Se.extendSubschemaMode = h, Se;
}
var ie = {}, ar, Hr;
function bo() {
  return Hr || (Hr = 1, ar = function e(t, a) {
    if (t === a) return !0;
    if (t && a && typeof t == "object" && typeof a == "object") {
      if (t.constructor !== a.constructor) return !1;
      var o, h, r;
      if (Array.isArray(t)) {
        if (o = t.length, o != a.length) return !1;
        for (h = o; h-- !== 0; )
          if (!e(t[h], a[h])) return !1;
        return !0;
      }
      if (t.constructor === RegExp) return t.source === a.source && t.flags === a.flags;
      if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === a.valueOf();
      if (t.toString !== Object.prototype.toString) return t.toString() === a.toString();
      if (r = Object.keys(t), o = r.length, o !== Object.keys(a).length) return !1;
      for (h = o; h-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(a, r[h])) return !1;
      for (h = o; h-- !== 0; ) {
        var i = r[h];
        if (!e(t[i], a[i])) return !1;
      }
      return !0;
    }
    return t !== t && a !== a;
  }), ar;
}
var ir = { exports: {} }, Gr;
function Fo() {
  if (Gr) return ir.exports;
  Gr = 1;
  var e = ir.exports = function(o, h, r) {
    typeof h == "function" && (r = h, h = {}), r = h.cb || r;
    var i = typeof r == "function" ? r : r.pre || function() {
    }, l = r.post || function() {
    };
    t(h, i, l, o, "", o);
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
  function t(o, h, r, i, l, f, v, g, b, S) {
    if (i && typeof i == "object" && !Array.isArray(i)) {
      h(i, l, f, v, g, b, S);
      for (var w in i) {
        var E = i[w];
        if (Array.isArray(E)) {
          if (w in e.arrayKeywords)
            for (var _ = 0; _ < E.length; _++)
              t(o, h, r, E[_], l + "/" + w + "/" + _, f, l, w, i, _);
        } else if (w in e.propsKeywords) {
          if (E && typeof E == "object")
            for (var d in E)
              t(o, h, r, E[d], l + "/" + w + "/" + a(d), f, l, w, i, d);
        } else (w in e.keywords || o.allKeys && !(w in e.skipKeywords)) && t(o, h, r, E, l + "/" + w, f, l, w, i);
      }
      r(i, l, f, v, g, b, S);
    }
  }
  function a(o) {
    return o.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  return ir.exports;
}
var Jr;
function Jt() {
  if (Jr) return ie;
  Jr = 1, Object.defineProperty(ie, "__esModule", { value: !0 }), ie.getSchemaRefs = ie.resolveUrl = ie.normalizeId = ie._getFullPath = ie.getFullPath = ie.inlineRef = void 0;
  const e = /* @__PURE__ */ X(), t = bo(), a = Fo(), o = /* @__PURE__ */ new Set([
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
      if (d++, !o.has(m) && (typeof _[m] == "object" && (0, e.eachItem)(_[m], (c) => d += l(c)), d === 1 / 0))
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
  function E(_, d) {
    if (typeof _ == "boolean")
      return {};
    const { schemaId: m, uriResolver: c } = this.opts, p = b(_[m] || d), $ = { "": p }, n = f(c, p, !1), s = {}, u = /* @__PURE__ */ new Set();
    return a(_, { allKeys: !0 }, (O, M, T, q) => {
      if (q === void 0)
        return;
      const H = n + M;
      let ee = $[q];
      typeof O[m] == "string" && (ee = te.call(this, O[m])), fe.call(this, O.$anchor), fe.call(this, O.$dynamicAnchor), $[M] = ee;
      function te(Y) {
        const me = this.opts.uriResolver.resolve;
        if (Y = b(ee ? me(ee, Y) : Y), u.has(Y))
          throw R(Y);
        u.add(Y);
        let V = this.refs[Y];
        return typeof V == "string" && (V = this.refs[V]), typeof V == "object" ? k(O, V.schema, Y) : Y !== b(H) && (Y[0] === "#" ? (k(O, s[Y], Y), s[Y] = O) : this.refs[Y] = H), Y;
      }
      function fe(Y) {
        if (typeof Y == "string") {
          if (!w.test(Y))
            throw new Error(`invalid anchor "${Y}"`);
          te.call(this, `#${Y}`);
        }
      }
    }), s;
    function k(O, M, T) {
      if (M !== void 0 && !t(O, M))
        throw R(T);
    }
    function R(O) {
      return new Error(`reference "${O}" resolves to more than one schema`);
    }
  }
  return ie.getSchemaRefs = E, ie;
}
var Wr;
function Wt() {
  if (Wr) return be;
  Wr = 1, Object.defineProperty(be, "__esModule", { value: !0 }), be.getData = be.KeywordCxt = be.validateFunctionCode = void 0;
  const e = /* @__PURE__ */ Vo(), t = /* @__PURE__ */ Ut(), a = /* @__PURE__ */ _o(), o = /* @__PURE__ */ Ut(), h = /* @__PURE__ */ xo(), r = /* @__PURE__ */ Lo(), i = /* @__PURE__ */ Bo(), l = /* @__PURE__ */ G(), f = /* @__PURE__ */ ve(), v = /* @__PURE__ */ Jt(), g = /* @__PURE__ */ X(), b = /* @__PURE__ */ Gt();
  function S(C) {
    if (n(C) && (u(C), $(C))) {
      d(C);
      return;
    }
    w(C, () => (0, e.topBoolOrEmptySchema)(C));
  }
  be.validateFunctionCode = S;
  function w({ gen: C, validateName: j, schema: D, schemaEnv: L, opts: U }, W) {
    U.code.es5 ? C.func(j, (0, l._)`${f.default.data}, ${f.default.valCxt}`, L.$async, () => {
      C.code((0, l._)`"use strict"; ${c(D, U)}`), _(C, U), C.code(W);
    }) : C.func(j, (0, l._)`${f.default.data}, ${E(U)}`, L.$async, () => C.code(c(D, U)).code(W));
  }
  function E(C) {
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
    const { schema: j, opts: D, gen: L } = C;
    w(C, () => {
      D.$comment && j.$comment && q(C), O(C), L.let(f.default.vErrors, null), L.let(f.default.errors, 0), D.unevaluated && m(C), k(C), H(C);
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
    const { schema: D, gen: L, opts: U } = C;
    U.$comment && D.$comment && q(C), M(C), T(C);
    const W = L.const("_errs", f.default.errors);
    k(C, W), L.var(j, (0, l._)`${W} === ${f.default.errors}`);
  }
  function u(C) {
    (0, g.checkUnknownRules)(C), R(C);
  }
  function k(C, j) {
    if (C.opts.jtd)
      return te(C, [], !1, j);
    const D = (0, t.getSchemaTypes)(C.schema), L = (0, t.coerceAndCheckDataType)(C, D);
    te(C, D, !L, j);
  }
  function R(C) {
    const { schema: j, errSchemaPath: D, opts: L, self: U } = C;
    j.$ref && L.ignoreKeywordsWithRef && (0, g.schemaHasRulesButRef)(j, U.RULES) && U.logger.warn(`$ref: keywords ignored in schema at path "${D}"`);
  }
  function O(C) {
    const { schema: j, opts: D } = C;
    j.default !== void 0 && D.useDefaults && D.strictSchema && (0, g.checkStrictMode)(C, "default is ignored in the schema root");
  }
  function M(C) {
    const j = C.schema[C.opts.schemaId];
    j && (C.baseId = (0, v.resolveUrl)(C.opts.uriResolver, C.baseId, j));
  }
  function T(C) {
    if (C.schema.$async && !C.schemaEnv.$async)
      throw new Error("async schema in sync schema");
  }
  function q({ gen: C, schemaEnv: j, schema: D, errSchemaPath: L, opts: U }) {
    const W = D.$comment;
    if (U.$comment === !0)
      C.code((0, l._)`${f.default.self}.logger.log(${W})`);
    else if (typeof U.$comment == "function") {
      const ne = (0, l.str)`${L}/$comment`, ye = C.scopeValue("root", { ref: j.root });
      C.code((0, l._)`${f.default.self}.opts.$comment(${W}, ${ne}, ${ye}.schema)`);
    }
  }
  function H(C) {
    const { gen: j, schemaEnv: D, validateName: L, ValidationError: U, opts: W } = C;
    D.$async ? j.if((0, l._)`${f.default.errors} === 0`, () => j.return(f.default.data), () => j.throw((0, l._)`new ${U}(${f.default.vErrors})`)) : (j.assign((0, l._)`${L}.errors`, f.default.vErrors), W.unevaluated && ee(C), j.return((0, l._)`${f.default.errors} === 0`));
  }
  function ee({ gen: C, evaluated: j, props: D, items: L }) {
    D instanceof l.Name && C.assign((0, l._)`${j}.props`, D), L instanceof l.Name && C.assign((0, l._)`${j}.items`, L);
  }
  function te(C, j, D, L) {
    const { gen: U, schema: W, data: ne, allErrors: ye, opts: le, self: de } = C, { RULES: oe } = de;
    if (W.$ref && (le.ignoreKeywordsWithRef || !(0, g.schemaHasRulesButRef)(W, oe))) {
      U.block(() => B(C, "$ref", oe.all.$ref.definition));
      return;
    }
    le.jtd || Y(C, j), U.block(() => {
      for (const pe of oe.rules)
        Ae(pe);
      Ae(oe.post);
    });
    function Ae(pe) {
      (0, a.shouldUseGroup)(W, pe) && (pe.type ? (U.if((0, o.checkDataType)(pe.type, ne, le.strictNumbers)), fe(C, pe), j.length === 1 && j[0] === pe.type && D && (U.else(), (0, o.reportTypeError)(C)), U.endIf()) : fe(C, pe), ye || U.if((0, l._)`${f.default.errors} === ${L || 0}`));
    }
  }
  function fe(C, j) {
    const { gen: D, schema: L, opts: { useDefaults: U } } = C;
    U && (0, h.assignDefaults)(C, j.type), D.block(() => {
      for (const W of j.rules)
        (0, a.shouldUseRule)(L, W) && B(C, W.keyword, W.definition, j.type);
    });
  }
  function Y(C, j) {
    C.schemaEnv.meta || !C.opts.strictTypes || (me(C, j), C.opts.allowUnionTypes || V(C, j), N(C, C.dataTypes));
  }
  function me(C, j) {
    if (j.length) {
      if (!C.dataTypes.length) {
        C.dataTypes = j;
        return;
      }
      j.forEach((D) => {
        A(C.dataTypes, D) || P(C, `type "${D}" not allowed by context "${C.dataTypes.join(",")}"`);
      }), y(C, j);
    }
  }
  function V(C, j) {
    j.length > 1 && !(j.length === 2 && j.includes("null")) && P(C, "use allowUnionTypes to allow union type keyword");
  }
  function N(C, j) {
    const D = C.self.RULES.all;
    for (const L in D) {
      const U = D[L];
      if (typeof U == "object" && (0, a.shouldUseRule)(C.schema, U)) {
        const { type: W } = U.definition;
        W.length && !W.some((ne) => z(j, ne)) && P(C, `missing type "${W.join(",")}" for keyword "${L}"`);
      }
    }
  }
  function z(C, j) {
    return C.includes(j) || j === "number" && C.includes("integer");
  }
  function A(C, j) {
    return C.includes(j) || j === "integer" && C.includes("number");
  }
  function y(C, j) {
    const D = [];
    for (const L of C.dataTypes)
      A(j, L) ? D.push(L) : j.includes("integer") && L === "number" && D.push("integer");
    C.dataTypes = D;
  }
  function P(C, j) {
    const D = C.schemaEnv.baseId + C.errSchemaPath;
    j += ` at "${D}" (strictTypes)`, (0, g.checkStrictMode)(C, j, C.opts.strictTypes);
  }
  class I {
    constructor(j, D, L) {
      if ((0, r.validateKeywordUsage)(j, D, L), this.gen = j.gen, this.allErrors = j.allErrors, this.keyword = L, this.data = j.data, this.schema = j.schema[L], this.$data = D.$data && j.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, g.schemaRefOrVal)(j, this.schema, L, this.$data), this.schemaType = D.schemaType, this.parentSchema = j.schema, this.params = {}, this.it = j, this.def = D, this.$data)
        this.schemaCode = j.gen.const("vSchema", Z(this.$data, j));
      else if (this.schemaCode = this.schemaValue, !(0, r.validSchemaType)(this.schema, D.schemaType, D.allowUndefined))
        throw new Error(`${L} value must be ${JSON.stringify(D.schemaType)}`);
      ("code" in D ? D.trackErrors : D.errors !== !1) && (this.errsCount = j.gen.const("_errs", f.default.errors));
    }
    result(j, D, L) {
      this.failResult((0, l.not)(j), D, L);
    }
    failResult(j, D, L) {
      this.gen.if(j), L ? L() : this.error(), D ? (this.gen.else(), D(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
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
    error(j, D, L) {
      if (D) {
        this.setParams(D), this._error(j, L), this.setParams({});
        return;
      }
      this._error(j, L);
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
    block$data(j, D, L = l.nil) {
      this.gen.block(() => {
        this.check$data(j, L), D();
      });
    }
    check$data(j = l.nil, D = l.nil) {
      if (!this.$data)
        return;
      const { gen: L, schemaCode: U, schemaType: W, def: ne } = this;
      L.if((0, l.or)((0, l._)`${U} === undefined`, D)), j !== l.nil && L.assign(j, !0), (W.length || ne.validateSchema) && (L.elseIf(this.invalid$data()), this.$dataError(), j !== l.nil && L.assign(j, !1)), L.else();
    }
    invalid$data() {
      const { gen: j, schemaCode: D, schemaType: L, def: U, it: W } = this;
      return (0, l.or)(ne(), ye());
      function ne() {
        if (L.length) {
          if (!(D instanceof l.Name))
            throw new Error("ajv implementation error");
          const le = Array.isArray(L) ? L : [L];
          return (0, l._)`${(0, o.checkDataTypes)(le, D, W.opts.strictNumbers, o.DataType.Wrong)}`;
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
      const L = (0, i.getSubschema)(this.it, j);
      (0, i.extendSubschemaData)(L, this.it, j), (0, i.extendSubschemaMode)(L, j);
      const U = { ...this.it, ...L, items: void 0, props: void 0 };
      return p(U, D), U;
    }
    mergeEvaluated(j, D) {
      const { it: L, gen: U } = this;
      L.opts.unevaluated && (L.props !== !0 && j.props !== void 0 && (L.props = g.mergeEvaluated.props(U, j.props, L.props, D)), L.items !== !0 && j.items !== void 0 && (L.items = g.mergeEvaluated.items(U, j.items, L.items, D)));
    }
    mergeValidEvaluated(j, D) {
      const { it: L, gen: U } = this;
      if (L.opts.unevaluated && (L.props !== !0 || L.items !== !0))
        return U.if(D, () => this.mergeEvaluated(j, l.Name)), !0;
    }
  }
  be.KeywordCxt = I;
  function B(C, j, D, L) {
    const U = new I(C, D, j);
    "code" in D ? D.code(U, L) : U.$data && D.validate ? (0, r.funcKeywordCode)(U, D) : "macro" in D ? (0, r.macroKeywordCode)(U, D) : (D.compile || D.validate) && (0, r.funcKeywordCode)(U, D);
  }
  const K = /^\/(?:[^~]|~0|~1)*$/, Q = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function Z(C, { dataLevel: j, dataNames: D, dataPathArr: L }) {
    let U, W;
    if (C === "")
      return f.default.rootData;
    if (C[0] === "/") {
      if (!K.test(C))
        throw new Error(`Invalid JSON-pointer: ${C}`);
      U = C, W = f.default.rootData;
    } else {
      const de = Q.exec(C);
      if (!de)
        throw new Error(`Invalid JSON-pointer: ${C}`);
      const oe = +de[1];
      if (U = de[2], U === "#") {
        if (oe >= j)
          throw new Error(le("property/index", oe));
        return L[j - oe];
      }
      if (oe > j)
        throw new Error(le("data", oe));
      if (W = D[j - oe], !U)
        return W;
    }
    let ne = W;
    const ye = U.split("/");
    for (const de of ye)
      de && (W = (0, l._)`${W}${(0, l.getProperty)((0, g.unescapeJsonPointer)(de))}`, ne = (0, l._)`${ne} && ${W}`);
    return ne;
    function le(de, oe) {
      return `Cannot access ${de} ${oe} levels up, current level is ${j}`;
    }
  }
  return be.getData = Z, be;
}
var Je = {}, Yr;
function gr() {
  if (Yr) return Je;
  Yr = 1, Object.defineProperty(Je, "__esModule", { value: !0 });
  class e extends Error {
    constructor(a) {
      super("validation failed"), this.errors = a, this.ajv = this.validation = !0;
    }
  }
  return Je.default = e, Je;
}
var We = {}, Xr;
function Yt() {
  if (Xr) return We;
  Xr = 1, Object.defineProperty(We, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Jt();
  class t extends Error {
    constructor(o, h, r, i) {
      super(i || `can't resolve reference ${r} from id ${h}`), this.missingRef = (0, e.resolveUrl)(o, h, r), this.missingSchema = (0, e.normalizeId)((0, e.getFullPath)(o, this.missingRef));
    }
  }
  return We.default = t, We;
}
var ue = {}, Zr;
function Xt() {
  if (Zr) return ue;
  Zr = 1, Object.defineProperty(ue, "__esModule", { value: !0 }), ue.resolveSchema = ue.getCompilingSchema = ue.resolveRef = ue.compileSchema = ue.SchemaEnv = void 0;
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ gr(), a = /* @__PURE__ */ ve(), o = /* @__PURE__ */ Jt(), h = /* @__PURE__ */ X(), r = /* @__PURE__ */ Wt();
  class i {
    constructor(m) {
      var c;
      this.refs = {}, this.dynamicAnchors = {};
      let p;
      typeof m.schema == "object" && (p = m.schema), this.schema = m.schema, this.schemaId = m.schemaId, this.root = m.root || this, this.baseId = (c = m.baseId) !== null && c !== void 0 ? c : (0, o.normalizeId)(p?.[m.schemaId || "$id"]), this.schemaPath = m.schemaPath, this.localRefs = m.localRefs, this.meta = m.meta, this.$async = p?.$async, this.refs = {};
    }
  }
  ue.SchemaEnv = i;
  function l(d) {
    const m = g.call(this, d);
    if (m)
      return m;
    const c = (0, o.getFullPath)(this.opts.uriResolver, d.root.baseId), { es5: p, lines: $ } = this.opts.code, { ownProperties: n } = this.opts, s = new e.CodeGen(this.scope, { es5: p, lines: $, ownProperties: n });
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
      data: a.default.data,
      parentData: a.default.parentData,
      parentDataProperty: a.default.parentDataProperty,
      dataNames: [a.default.data],
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
    let O;
    try {
      this._compilations.add(d), (0, r.validateFunctionCode)(R), s.optimize(this.opts.code.optimize);
      const M = s.toString();
      O = `${s.scopeRefs(a.default.scope)}return ${M}`, this.opts.code.process && (O = this.opts.code.process(O, d));
      const q = new Function(`${a.default.self}`, `${a.default.scope}`, O)(this, this.scope.get());
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
      throw delete d.validate, delete d.validateName, O && this.logger.error("Error compiling schema, function code:", O), M;
    } finally {
      this._compilations.delete(d);
    }
  }
  ue.compileSchema = l;
  function f(d, m, c) {
    var p;
    c = (0, o.resolveUrl)(this.opts.uriResolver, m, c);
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
    return (0, o.inlineRef)(d.schema, this.opts.inlineRefs) ? d.schema : d.validate ? d : l.call(this, d);
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
    const c = this.opts.uriResolver.parse(m), p = (0, o._getFullPath)(this.opts.uriResolver, c);
    let $ = (0, o.getFullPath)(this.opts.uriResolver, d.baseId, void 0);
    if (Object.keys(d.schema).length > 0 && p === $)
      return _.call(this, c, d);
    const n = (0, o.normalizeId)(p), s = this.refs[n] || this.schemas[n];
    if (typeof s == "string") {
      const u = w.call(this, d, s);
      return typeof u?.schema != "object" ? void 0 : _.call(this, c, u);
    }
    if (typeof s?.schema == "object") {
      if (s.validate || l.call(this, s), n === (0, o.normalizeId)(m)) {
        const { schema: u } = s, { schemaId: k } = this.opts, R = u[k];
        return R && ($ = (0, o.resolveUrl)(this.opts.uriResolver, $, R)), new i({ schema: u, schemaId: k, root: d, baseId: $ });
      }
      return _.call(this, c, s);
    }
  }
  ue.resolveSchema = w;
  const E = /* @__PURE__ */ new Set([
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
      !E.has(u) && R && (m = (0, o.resolveUrl)(this.opts.uriResolver, m, R));
    }
    let n;
    if (typeof c != "boolean" && c.$ref && !(0, h.schemaHasRulesButRef)(c, this.RULES)) {
      const u = (0, o.resolveUrl)(this.opts.uriResolver, m, c.$ref);
      n = w.call(this, p, u);
    }
    const { schemaId: s } = this.opts;
    if (n = n || new i({ schema: c, schemaId: s, root: p, baseId: m }), n.schema !== n.root.schema)
      return n;
  }
  return ue;
}
const Uo = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", Ko = "Meta-schema for $data reference (JSON AnySchema extension proposal)", Ho = "object", Go = ["$data"], Jo = { $data: { type: "string", anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] } }, Wo = !1, Yo = {
  $id: Uo,
  description: Ko,
  type: Ho,
  required: Go,
  properties: Jo,
  additionalProperties: Wo
};
var Ye = {}, Fe = { exports: {} }, cr, Qr;
function wo() {
  if (Qr) return cr;
  Qr = 1;
  const e = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu), t = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u), a = RegExp.prototype.test.bind(/^[\da-f]{2}$/iu), o = RegExp.prototype.test.bind(/^[\da-z\-._~]$/iu), h = RegExp.prototype.test.bind(/^[\da-z\-._~!$&'()*+,;=:@/]$/iu);
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
    let O = !1, M = !1, T = f;
    for (let q = 0; q < n.length; q++) {
      const H = n[q];
      if (!(H === "[" || H === "]"))
        if (H === ":") {
          if (O === !0 && (M = !0), !T(R, k, u))
            break;
          if (++s > 7) {
            u.error = !0;
            break;
          }
          q > 0 && n[q - 1] === ":" && (O = !0), k.push(":");
          continue;
        } else if (H === "%") {
          if (!T(R, k, u))
            break;
          T = l;
        } else {
          R.push(H);
          continue;
        }
    }
    return R.length && (T === l ? u.zone = R.join("") : M ? k.push(R.join("")) : k.push(r(R))), u.address = k.join(""), u;
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
  const w = { "@": "%40", "/": "%2F", "?": "%3F", "#": "%23", ":": "%3A" }, E = /[@/?#:]/g, _ = /[@/?#]/g;
  function d(n, s) {
    const u = s ? _ : E;
    return u.lastIndex = 0, n.replace(u, (k) => w[k]);
  }
  function m(n, s = !1) {
    if (n.indexOf("%") === -1)
      return n;
    let u = "";
    for (let k = 0; k < n.length; k++) {
      if (n[k] === "%" && k + 2 < n.length) {
        const R = n.slice(k + 1, k + 3);
        if (a(R)) {
          const O = R.toUpperCase(), M = String.fromCharCode(parseInt(O, 16));
          s && o(M) ? u += M : u += "%" + O, k += 2;
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
        if (a(k)) {
          const R = k.toUpperCase(), O = String.fromCharCode(parseInt(R, 16));
          O !== "." && o(O) ? s += O : s += "%" + R, u += 2;
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
        if (a(k)) {
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
  return cr = {
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
  }, cr;
}
var lr, en;
function Xo() {
  if (en) return lr;
  en = 1;
  const { isUUID: e } = wo(), t = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu, a = (
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
  function o(n) {
    return a.indexOf(
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
      const R = `${k}:${s.nid || n.nid}`, O = $(R);
      n.path = void 0, O && (n = O.parse(n, s));
    } else
      n.error = n.error || "URN can not be parsed.";
    return n;
  }
  function g(n, s) {
    if (n.nid === void 0)
      throw new Error("URN without nid cannot be serialized");
    const u = s.scheme || n.scheme || "urn", k = n.nid.toLowerCase(), R = `${u}:${s.nid || k}`, O = $(R);
    O && (n = O.serialize(n, s));
    const M = n, T = n.nss;
    return M.path = `${k || s.nid}:${T}`, s.skipEscape = !0, M;
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
  ), E = (
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
      https: E,
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
  return lr = {
    wsIsSecure: h,
    SCHEMES: p,
    isValidSchemeName: o,
    getSchemeHandler: $
  }, lr;
}
var tn;
function Zo() {
  if (tn) return Fe.exports;
  tn = 1;
  const { normalizeIPv6: e, removeDotSegments: t, recomposeAuthority: a, normalizePercentEncoding: o, normalizePathEncoding: h, escapePreservingEscapes: r, reescapeHostDelimiters: i, isIPv4: l, nonSimpleDomain: f } = wo(), { SCHEMES: v, getSchemeHandler: g } = Xo();
  function b(R, O) {
    return typeof R == "string" ? R = /** @type {T} */
    n(R, O) : typeof R == "object" && (R = /** @type {T} */
    $(_(R, O), O)), R;
  }
  function S(R, O, M) {
    const T = M ? Object.assign({ scheme: "null" }, M) : { scheme: "null" }, q = w($(R, T), $(O, T), T, !0);
    return T.skipEscape = !0, _(q, T);
  }
  function w(R, O, M, T) {
    const q = {};
    return T || (R = $(_(R, M), M), O = $(_(O, M), M)), M = M || {}, !M.tolerant && O.scheme ? (q.scheme = O.scheme, q.userinfo = O.userinfo, q.host = O.host, q.port = O.port, q.path = t(O.path || ""), q.query = O.query) : (O.userinfo !== void 0 || O.host !== void 0 || O.port !== void 0 ? (q.userinfo = O.userinfo, q.host = O.host, q.port = O.port, q.path = t(O.path || ""), q.query = O.query) : (O.path ? (O.path[0] === "/" ? q.path = t(O.path) : ((R.userinfo !== void 0 || R.host !== void 0 || R.port !== void 0) && !R.path ? q.path = "/" + O.path : R.path ? q.path = R.path.slice(0, R.path.lastIndexOf("/") + 1) + O.path : q.path = O.path, q.path = t(q.path)), q.query = O.query) : (q.path = R.path, O.query !== void 0 ? q.query = O.query : q.query = R.query), q.userinfo = R.userinfo, q.host = R.host, q.port = R.port), q.scheme = R.scheme), q.fragment = O.fragment, q;
  }
  function E(R, O, M) {
    const T = u(R, M), q = u(O, M);
    return T !== void 0 && q !== void 0 && T.toLowerCase() === q.toLowerCase();
  }
  function _(R, O) {
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
    }, T = Object.assign({}, O), q = [], H = g(T.scheme || M.scheme);
    H && H.serialize && H.serialize(M, T), M.path !== void 0 && (T.skipEscape ? M.path = o(M.path) : (M.path = r(M.path), M.scheme !== void 0 && (M.path = M.path.split("%3A").join(":")))), T.reference !== "suffix" && M.scheme && q.push(M.scheme, ":");
    const ee = a(M);
    if (ee !== void 0 && (T.reference !== "suffix" && q.push("//"), q.push(ee), M.path && M.path[0] !== "/" && q.push("/")), M.path !== void 0) {
      let te = M.path;
      !T.absolutePath && (!H || !H.absolutePath) && (te = t(te)), ee === void 0 && te[0] === "/" && te[1] === "/" && (te = "/%2F" + te.slice(2)), q.push(te);
    }
    return M.query !== void 0 && q.push("?", M.query), M.fragment !== void 0 && q.push("#", M.fragment), q.join("");
  }
  const d = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u, m = /^(?:[^#/:?]+:)?\/\/([^/?#]*)/;
  function c(R, O) {
    if (O[2] !== void 0 && R.path && R.path[0] !== "/")
      return 'URI path must start with "/" when authority is present.';
    if (typeof R.port == "number" && (R.port < 0 || R.port > 65535))
      return "URI port is malformed.";
  }
  function p(R, O) {
    const M = Object.assign({}, O), T = {
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
    ee !== null && ee[1].indexOf("\\") !== -1 && (T.error = "URI authority must not contain a literal backslash.", q = !0);
    const te = R.match(d);
    if (te) {
      T.scheme = te[1], T.userinfo = te[3], T.host = te[4], T.port = parseInt(te[5], 10), T.path = te[6] || "", T.query = te[7], T.fragment = te[8], isNaN(T.port) && (T.port = te[5]);
      const fe = c(T, te);
      if (fe !== void 0 && (T.error = T.error || fe, q = !0), T.host)
        if (l(T.host) === !1) {
          const V = e(T.host);
          T.host = V.host.toLowerCase(), H = V.isIPV6;
        } else
          H = !0;
      T.scheme === void 0 && T.userinfo === void 0 && T.host === void 0 && T.port === void 0 && T.query === void 0 && !T.path ? T.reference = "same-document" : T.scheme === void 0 ? T.reference = "relative" : T.fragment === void 0 ? T.reference = "absolute" : T.reference = "uri", M.reference && M.reference !== "suffix" && M.reference !== T.reference && (T.error = T.error || "URI is not a " + M.reference + " reference.");
      const Y = g(M.scheme || T.scheme);
      if (!M.unicodeSupport && (!Y || !Y.unicodeSupport) && T.host && (M.domainHost || Y && Y.domainHost) && H === !1 && f(T.host))
        try {
          T.host = new URL("http://" + T.host).hostname;
        } catch (me) {
          T.error = T.error || "Host's domain name can not be converted to ASCII: " + me;
        }
      if ((!Y || Y && !Y.skipNormalize) && (R.indexOf("%") !== -1 && (T.scheme !== void 0 && (T.scheme = unescape(T.scheme)), T.host !== void 0 && (T.host = i(unescape(T.host), H))), T.path && (T.path = h(T.path)), T.fragment))
        try {
          T.fragment = encodeURI(decodeURIComponent(T.fragment));
        } catch {
          T.error = T.error || "URI malformed";
        }
      Y && Y.parse && Y.parse(T, M);
    } else
      T.error = T.error || "URI can not be parsed.";
    return { parsed: T, malformedAuthorityOrPort: q };
  }
  function $(R, O) {
    return p(R, O).parsed;
  }
  function n(R, O) {
    return s(R, O).normalized;
  }
  function s(R, O) {
    const { parsed: M, malformedAuthorityOrPort: T } = p(R, O);
    return {
      normalized: T ? R : _(M, O),
      malformedAuthorityOrPort: T
    };
  }
  function u(R, O) {
    if (typeof R == "string") {
      const { normalized: M, malformedAuthorityOrPort: T } = s(R, O);
      return T ? void 0 : M;
    }
    if (typeof R == "object")
      return _(R, O);
  }
  const k = {
    SCHEMES: v,
    normalize: b,
    resolve: S,
    resolveComponent: w,
    equal: E,
    serialize: _,
    parse: $
  };
  return Fe.exports = k, Fe.exports.default = k, Fe.exports.fastUri = k, Fe.exports;
}
var rn;
function Qo() {
  if (rn) return Ye;
  rn = 1, Object.defineProperty(Ye, "__esModule", { value: !0 });
  const e = Zo();
  return e.code = 'require("ajv/dist/runtime/uri").default', Ye.default = e, Ye;
}
var nn;
function es() {
  return nn || (nn = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = void 0;
    var t = /* @__PURE__ */ Wt();
    Object.defineProperty(e, "KeywordCxt", { enumerable: !0, get: function() {
      return t.KeywordCxt;
    } });
    var a = /* @__PURE__ */ G();
    Object.defineProperty(e, "_", { enumerable: !0, get: function() {
      return a._;
    } }), Object.defineProperty(e, "str", { enumerable: !0, get: function() {
      return a.str;
    } }), Object.defineProperty(e, "stringify", { enumerable: !0, get: function() {
      return a.stringify;
    } }), Object.defineProperty(e, "nil", { enumerable: !0, get: function() {
      return a.nil;
    } }), Object.defineProperty(e, "Name", { enumerable: !0, get: function() {
      return a.Name;
    } }), Object.defineProperty(e, "CodeGen", { enumerable: !0, get: function() {
      return a.CodeGen;
    } });
    const o = /* @__PURE__ */ gr(), h = /* @__PURE__ */ Yt(), r = /* @__PURE__ */ $o(), i = /* @__PURE__ */ Xt(), l = /* @__PURE__ */ G(), f = /* @__PURE__ */ Jt(), v = /* @__PURE__ */ Ut(), g = /* @__PURE__ */ X(), b = Yo, S = /* @__PURE__ */ Qo(), w = (V, N) => new RegExp(V, N);
    w.code = "new RegExp";
    const E = ["removeAdditional", "useDefaults", "coerceTypes"], _ = /* @__PURE__ */ new Set([
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
    function p(V) {
      var N, z, A, y, P, I, B, K, Q, Z, C, j, D, L, U, W, ne, ye, le, de, oe, Ae, pe, Zt, Qt;
      const xe = V.strict, er = (N = V.code) === null || N === void 0 ? void 0 : N.optimize, Rr = er === !0 || er === void 0 ? 1 : er || 0, Cr = (A = (z = V.code) === null || z === void 0 ? void 0 : z.regExp) !== null && A !== void 0 ? A : w, Io = (y = V.uriResolver) !== null && y !== void 0 ? y : S.default;
      return {
        strictSchema: (I = (P = V.strictSchema) !== null && P !== void 0 ? P : xe) !== null && I !== void 0 ? I : !0,
        strictNumbers: (K = (B = V.strictNumbers) !== null && B !== void 0 ? B : xe) !== null && K !== void 0 ? K : !0,
        strictTypes: (Z = (Q = V.strictTypes) !== null && Q !== void 0 ? Q : xe) !== null && Z !== void 0 ? Z : "log",
        strictTuples: (j = (C = V.strictTuples) !== null && C !== void 0 ? C : xe) !== null && j !== void 0 ? j : "log",
        strictRequired: (L = (D = V.strictRequired) !== null && D !== void 0 ? D : xe) !== null && L !== void 0 ? L : !1,
        code: V.code ? { ...V.code, optimize: Rr, regExp: Cr } : { optimize: Rr, regExp: Cr },
        loopRequired: (U = V.loopRequired) !== null && U !== void 0 ? U : c,
        loopEnum: (W = V.loopEnum) !== null && W !== void 0 ? W : c,
        meta: (ne = V.meta) !== null && ne !== void 0 ? ne : !0,
        messages: (ye = V.messages) !== null && ye !== void 0 ? ye : !0,
        inlineRefs: (le = V.inlineRefs) !== null && le !== void 0 ? le : !0,
        schemaId: (de = V.schemaId) !== null && de !== void 0 ? de : "$id",
        addUsedSchema: (oe = V.addUsedSchema) !== null && oe !== void 0 ? oe : !0,
        validateSchema: (Ae = V.validateSchema) !== null && Ae !== void 0 ? Ae : !0,
        validateFormats: (pe = V.validateFormats) !== null && pe !== void 0 ? pe : !0,
        unicodeRegExp: (Zt = V.unicodeRegExp) !== null && Zt !== void 0 ? Zt : !0,
        int32range: (Qt = V.int32range) !== null && Qt !== void 0 ? Qt : !0,
        uriResolver: Io
      };
    }
    class $ {
      constructor(N = {}) {
        this.schemas = {}, this.refs = {}, this.formats = /* @__PURE__ */ Object.create(null), this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), N = this.opts = { ...N, ...p(N) };
        const { es5: z, lines: A } = this.opts.code;
        this.scope = new l.ValueScope({ scope: {}, prefixes: _, es5: z, lines: A }), this.logger = T(N.logger);
        const y = N.validateFormats;
        N.validateFormats = !1, this.RULES = (0, r.getRules)(), n.call(this, d, N, "NOT SUPPORTED"), n.call(this, m, N, "DEPRECATED", "warn"), this._metaOpts = O.call(this), N.formats && k.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), N.keywords && R.call(this, N.keywords), typeof N.meta == "object" && this.addMetaSchema(N.meta), u.call(this), N.validateFormats = y;
      }
      _addVocabularies() {
        this.addKeyword("$async");
      }
      _addDefaultMetaSchema() {
        const { $data: N, meta: z, schemaId: A } = this.opts;
        let y = b;
        A === "id" && (y = { ...b }, y.id = y.$id, delete y.$id), z && N && this.addMetaSchema(y, y[A], !1);
      }
      defaultMeta() {
        const { meta: N, schemaId: z } = this.opts;
        return this.opts.defaultMeta = typeof N == "object" ? N[z] || N : void 0;
      }
      validate(N, z) {
        let A;
        if (typeof N == "string") {
          if (A = this.getSchema(N), !A)
            throw new Error(`no schema with key or ref "${N}"`);
        } else
          A = this.compile(N);
        const y = A(z);
        return "$async" in A || (this.errors = A.errors), y;
      }
      compile(N, z) {
        const A = this._addSchema(N, z);
        return A.validate || this._compileSchemaEnv(A);
      }
      compileAsync(N, z) {
        if (typeof this.opts.loadSchema != "function")
          throw new Error("options.loadSchema should be a function");
        const { loadSchema: A } = this.opts;
        return y.call(this, N, z);
        async function y(Z, C) {
          await P.call(this, Z.$schema);
          const j = this._addSchema(Z, C);
          return j.validate || I.call(this, j);
        }
        async function P(Z) {
          Z && !this.getSchema(Z) && await y.call(this, { $ref: Z }, !0);
        }
        async function I(Z) {
          try {
            return this._compileSchemaEnv(Z);
          } catch (C) {
            if (!(C instanceof h.default))
              throw C;
            return B.call(this, C), await K.call(this, C.missingSchema), I.call(this, Z);
          }
        }
        function B({ missingSchema: Z, missingRef: C }) {
          if (this.refs[Z])
            throw new Error(`AnySchema ${Z} is loaded but ${C} cannot be resolved`);
        }
        async function K(Z) {
          const C = await Q.call(this, Z);
          this.refs[Z] || await P.call(this, C.$schema), this.refs[Z] || this.addSchema(C, Z, z);
        }
        async function Q(Z) {
          const C = this._loading[Z];
          if (C)
            return C;
          try {
            return await (this._loading[Z] = A(Z));
          } finally {
            delete this._loading[Z];
          }
        }
      }
      // Adds schema to the instance
      addSchema(N, z, A, y = this.opts.validateSchema) {
        if (Array.isArray(N)) {
          for (const I of N)
            this.addSchema(I, void 0, A, y);
          return this;
        }
        let P;
        if (typeof N == "object") {
          const { schemaId: I } = this.opts;
          if (P = N[I], P !== void 0 && typeof P != "string")
            throw new Error(`schema ${I} must be string`);
        }
        return z = (0, f.normalizeId)(z || P), this._checkUnique(z), this.schemas[z] = this._addSchema(N, A, z, y, !0), this;
      }
      // Add schema that will be used to validate other schemas
      // options in META_IGNORE_OPTIONS are alway set to false
      addMetaSchema(N, z, A = this.opts.validateSchema) {
        return this.addSchema(N, z, !0, A), this;
      }
      //  Validate schema against its meta-schema
      validateSchema(N, z) {
        if (typeof N == "boolean")
          return !0;
        let A;
        if (A = N.$schema, A !== void 0 && typeof A != "string")
          throw new Error("$schema must be a string");
        if (A = A || this.opts.defaultMeta || this.defaultMeta(), !A)
          return this.logger.warn("meta-schema not available"), this.errors = null, !0;
        const y = this.validate(A, N);
        if (!y && z) {
          const P = "schema is invalid: " + this.errorsText();
          if (this.opts.validateSchema === "log")
            this.logger.error(P);
          else
            throw new Error(P);
        }
        return y;
      }
      // Get compiled schema by `key` or `ref`.
      // (`key` that was passed to `addSchema` or full schema reference - `schema.$id` or resolved id)
      getSchema(N) {
        let z;
        for (; typeof (z = s.call(this, N)) == "string"; )
          N = z;
        if (z === void 0) {
          const { schemaId: A } = this.opts, y = new i.SchemaEnv({ schema: {}, schemaId: A });
          if (z = i.resolveSchema.call(this, y, N), !z)
            return;
          this.refs[N] = z;
        }
        return z.validate || this._compileSchemaEnv(z);
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
            const z = s.call(this, N);
            return typeof z == "object" && this._cache.delete(z.schema), delete this.schemas[N], delete this.refs[N], this;
          }
          case "object": {
            const z = N;
            this._cache.delete(z);
            let A = N[this.opts.schemaId];
            return A && (A = (0, f.normalizeId)(A), delete this.schemas[A], delete this.refs[A]), this;
          }
          default:
            throw new Error("ajv.removeSchema: invalid parameter");
        }
      }
      // add "vocabulary" - a collection of keywords
      addVocabulary(N) {
        for (const z of N)
          this.addKeyword(z);
        return this;
      }
      addKeyword(N, z) {
        let A;
        if (typeof N == "string")
          A = N, typeof z == "object" && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), z.keyword = A);
        else if (typeof N == "object" && z === void 0) {
          if (z = N, A = z.keyword, Array.isArray(A) && !A.length)
            throw new Error("addKeywords: keyword must be string or non-empty array");
        } else
          throw new Error("invalid addKeywords parameters");
        if (H.call(this, A, z), !z)
          return (0, g.eachItem)(A, (P) => ee.call(this, P)), this;
        fe.call(this, z);
        const y = {
          ...z,
          type: (0, v.getJSONTypes)(z.type),
          schemaType: (0, v.getJSONTypes)(z.schemaType)
        };
        return (0, g.eachItem)(A, y.type.length === 0 ? (P) => ee.call(this, P, y) : (P) => y.type.forEach((I) => ee.call(this, P, y, I))), this;
      }
      getKeyword(N) {
        const z = this.RULES.all[N];
        return typeof z == "object" ? z.definition : !!z;
      }
      // Remove keyword
      removeKeyword(N) {
        const { RULES: z } = this;
        delete z.keywords[N], delete z.all[N];
        for (const A of z.rules) {
          const y = A.rules.findIndex((P) => P.keyword === N);
          y >= 0 && A.rules.splice(y, 1);
        }
        return this;
      }
      // Add format
      addFormat(N, z) {
        return typeof z == "string" && (z = new RegExp(z)), this.formats[N] = z, this;
      }
      errorsText(N = this.errors, { separator: z = ", ", dataVar: A = "data" } = {}) {
        return !N || N.length === 0 ? "No errors" : N.map((y) => `${A}${y.instancePath} ${y.message}`).reduce((y, P) => y + z + P);
      }
      $dataMetaSchema(N, z) {
        const A = this.RULES.all;
        N = JSON.parse(JSON.stringify(N));
        for (const y of z) {
          const P = y.split("/").slice(1);
          let I = N;
          for (const B of P)
            I = I[B];
          for (const B in A) {
            const K = A[B];
            if (typeof K != "object")
              continue;
            const { $data: Q } = K.definition, Z = I[B];
            Q && Z && (I[B] = me(Z));
          }
        }
        return N;
      }
      _removeAllSchemas(N, z) {
        for (const A in N) {
          const y = N[A];
          (!z || z.test(A)) && (typeof y == "string" ? delete N[A] : y && !y.meta && (this._cache.delete(y.schema), delete N[A]));
        }
      }
      _addSchema(N, z, A, y = this.opts.validateSchema, P = this.opts.addUsedSchema) {
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
        A = (0, f.normalizeId)(I || A);
        const Q = f.getSchemaRefs.call(this, N, A);
        return K = new i.SchemaEnv({ schema: N, schemaId: B, meta: z, baseId: A, localRefs: Q }), this._cache.set(K.schema, K), P && !A.startsWith("#") && (A && this._checkUnique(A), this.refs[A] = K), y && this.validateSchema(N, !0), K;
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
        const z = this.opts;
        this.opts = this._metaOpts;
        try {
          i.compileSchema.call(this, N);
        } finally {
          this.opts = z;
        }
      }
    }
    $.ValidationError = o.default, $.MissingRefError = h.default, e.default = $;
    function n(V, N, z, A = "error") {
      for (const y in V) {
        const P = y;
        P in N && this.logger[A](`${z}: option ${y}. ${V[P]}`);
      }
    }
    function s(V) {
      return V = (0, f.normalizeId)(V), this.schemas[V] || this.refs[V];
    }
    function u() {
      const V = this.opts.schemas;
      if (V)
        if (Array.isArray(V))
          this.addSchema(V);
        else
          for (const N in V)
            this.addSchema(V[N], N);
    }
    function k() {
      for (const V in this.opts.formats) {
        const N = this.opts.formats[V];
        N && this.addFormat(V, N);
      }
    }
    function R(V) {
      if (Array.isArray(V)) {
        this.addVocabulary(V);
        return;
      }
      this.logger.warn("keywords option as map is deprecated, pass array");
      for (const N in V) {
        const z = V[N];
        z.keyword || (z.keyword = N), this.addKeyword(z);
      }
    }
    function O() {
      const V = { ...this.opts };
      for (const N of E)
        delete V[N];
      return V;
    }
    const M = { log() {
    }, warn() {
    }, error() {
    } };
    function T(V) {
      if (V === !1)
        return M;
      if (V === void 0)
        return console;
      if (V.log && V.warn && V.error)
        return V;
      throw new Error("logger must implement log, warn and error methods");
    }
    const q = /^[a-z_$][a-z0-9_$:-]*$/i;
    function H(V, N) {
      const { RULES: z } = this;
      if ((0, g.eachItem)(V, (A) => {
        if (z.keywords[A])
          throw new Error(`Keyword ${A} is already defined`);
        if (!q.test(A))
          throw new Error(`Keyword ${A} has invalid name`);
      }), !!N && N.$data && !("code" in N || "validate" in N))
        throw new Error('$data keyword must have "code" or "validate" function');
    }
    function ee(V, N, z) {
      var A;
      const y = N?.post;
      if (z && y)
        throw new Error('keyword with "post" flag cannot have "type"');
      const { RULES: P } = this;
      let I = y ? P.post : P.rules.find(({ type: K }) => K === z);
      if (I || (I = { type: z, rules: [] }, P.rules.push(I)), P.keywords[V] = !0, !N)
        return;
      const B = {
        keyword: V,
        definition: {
          ...N,
          type: (0, v.getJSONTypes)(N.type),
          schemaType: (0, v.getJSONTypes)(N.schemaType)
        }
      };
      N.before ? te.call(this, I, B, N.before) : I.rules.push(B), P.all[V] = B, (A = N.implements) === null || A === void 0 || A.forEach((K) => this.addKeyword(K));
    }
    function te(V, N, z) {
      const A = V.rules.findIndex((y) => y.keyword === z);
      A >= 0 ? V.rules.splice(A, 0, N) : (V.rules.push(N), this.logger.warn(`rule ${z} is not defined`));
    }
    function fe(V) {
      let { metaSchema: N } = V;
      N !== void 0 && (V.$data && this.opts.$data && (N = me(N)), V.validateSchema = this.compile(N, !0));
    }
    const Y = {
      $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
    };
    function me(V) {
      return { anyOf: [V, Y] };
    }
  })(tr)), tr;
}
var Xe = {}, Ze = {}, Qe = {}, on;
function ts() {
  if (on) return Qe;
  on = 1, Object.defineProperty(Qe, "__esModule", { value: !0 });
  const e = {
    keyword: "id",
    code() {
      throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
    }
  };
  return Qe.default = e, Qe;
}
var Ee = {}, sn;
function vr() {
  if (sn) return Ee;
  sn = 1, Object.defineProperty(Ee, "__esModule", { value: !0 }), Ee.callRef = Ee.getValidate = void 0;
  const e = /* @__PURE__ */ Yt(), t = /* @__PURE__ */ $e(), a = /* @__PURE__ */ G(), o = /* @__PURE__ */ ve(), h = /* @__PURE__ */ Xt(), r = /* @__PURE__ */ X(), i = {
    keyword: "$ref",
    schemaType: "string",
    code(v) {
      const { gen: g, schema: b, it: S } = v, { baseId: w, schemaEnv: E, validateName: _, opts: d, self: m } = S, { root: c } = E;
      if ((b === "#" || b === "#/") && w === c.baseId)
        return $();
      const p = h.resolveRef.call(m, c, w, b);
      if (p === void 0)
        throw new e.default(S.opts.uriResolver, w, b);
      if (p instanceof h.SchemaEnv)
        return n(p);
      return s(p);
      function $() {
        if (E === c)
          return f(v, _, E, E.$async);
        const u = g.scopeValue("root", { ref: c });
        return f(v, (0, a._)`${u}.validate`, c, c.$async);
      }
      function n(u) {
        const k = l(v, u);
        f(v, k, u, u.$async);
      }
      function s(u) {
        const k = g.scopeValue("schema", d.code.source === !0 ? { ref: u, code: (0, a.stringify)(u) } : { ref: u }), R = g.name("valid"), O = v.subschema({
          schema: u,
          dataTypes: [],
          schemaPath: a.nil,
          topSchemaRef: k,
          errSchemaPath: b
        }, R);
        v.mergeEvaluated(O), v.ok(R);
      }
    }
  };
  function l(v, g) {
    const { gen: b } = v;
    return g.validate ? b.scopeValue("validate", { ref: g.validate }) : (0, a._)`${b.scopeValue("wrapper", { ref: g })}.validate`;
  }
  Ee.getValidate = l;
  function f(v, g, b, S) {
    const { gen: w, it: E } = v, { allErrors: _, schemaEnv: d, opts: m } = E, c = m.passContext ? o.default.this : a.nil;
    S ? p() : $();
    function p() {
      if (!d.$async)
        throw new Error("async schema referenced by sync schema");
      const u = w.let("valid");
      w.try(() => {
        w.code((0, a._)`await ${(0, t.callValidateCode)(v, g, c)}`), s(g), _ || w.assign(u, !0);
      }, (k) => {
        w.if((0, a._)`!(${k} instanceof ${E.ValidationError})`, () => w.throw(k)), n(k), _ || w.assign(u, !1);
      }), v.ok(u);
    }
    function $() {
      v.result((0, t.callValidateCode)(v, g, c), () => s(g), () => n(g));
    }
    function n(u) {
      const k = (0, a._)`${u}.errors`;
      w.assign(o.default.vErrors, (0, a._)`${o.default.vErrors} === null ? ${k} : ${o.default.vErrors}.concat(${k})`), w.assign(o.default.errors, (0, a._)`${o.default.vErrors}.length`);
    }
    function s(u) {
      var k;
      if (!E.opts.unevaluated)
        return;
      const R = (k = b?.validate) === null || k === void 0 ? void 0 : k.evaluated;
      if (E.props !== !0)
        if (R && !R.dynamicProps)
          R.props !== void 0 && (E.props = r.mergeEvaluated.props(w, R.props, E.props));
        else {
          const O = w.var("props", (0, a._)`${u}.evaluated.props`);
          E.props = r.mergeEvaluated.props(w, O, E.props, a.Name);
        }
      if (E.items !== !0)
        if (R && !R.dynamicItems)
          R.items !== void 0 && (E.items = r.mergeEvaluated.items(w, R.items, E.items));
        else {
          const O = w.var("items", (0, a._)`${u}.evaluated.items`);
          E.items = r.mergeEvaluated.items(w, O, E.items, a.Name);
        }
    }
  }
  return Ee.callRef = f, Ee.default = i, Ee;
}
var an;
function rs() {
  if (an) return Ze;
  an = 1, Object.defineProperty(Ze, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ts(), t = /* @__PURE__ */ vr(), a = [
    "$schema",
    "$id",
    "$defs",
    "$vocabulary",
    { keyword: "$comment" },
    "definitions",
    e.default,
    t.default
  ];
  return Ze.default = a, Ze;
}
var et = {}, tt = {}, cn;
function ns() {
  if (cn) return tt;
  cn = 1, Object.defineProperty(tt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), t = e.operators, a = {
    maximum: { okStr: "<=", ok: t.LTE, fail: t.GT },
    minimum: { okStr: ">=", ok: t.GTE, fail: t.LT },
    exclusiveMaximum: { okStr: "<", ok: t.LT, fail: t.GTE },
    exclusiveMinimum: { okStr: ">", ok: t.GT, fail: t.LTE }
  }, o = {
    message: ({ keyword: r, schemaCode: i }) => (0, e.str)`must be ${a[r].okStr} ${i}`,
    params: ({ keyword: r, schemaCode: i }) => (0, e._)`{comparison: ${a[r].okStr}, limit: ${i}}`
  }, h = {
    keyword: Object.keys(a),
    type: "number",
    schemaType: "number",
    $data: !0,
    error: o,
    code(r) {
      const { keyword: i, data: l, schemaCode: f } = r;
      r.fail$data((0, e._)`${l} ${a[i].fail} ${f} || isNaN(${l})`);
    }
  };
  return tt.default = h, tt;
}
var rt = {}, ln;
function os() {
  if (ln) return rt;
  ln = 1, Object.defineProperty(rt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), a = {
    keyword: "multipleOf",
    type: "number",
    schemaType: "number",
    $data: !0,
    error: {
      message: ({ schemaCode: o }) => (0, e.str)`must be multiple of ${o}`,
      params: ({ schemaCode: o }) => (0, e._)`{multipleOf: ${o}}`
    },
    code(o) {
      const { gen: h, data: r, schemaCode: i, it: l } = o, f = l.opts.multipleOfPrecision, v = h.let("res"), g = f ? (0, e._)`Math.abs(Math.round(${v}) - ${v}) > 1e-${f}` : (0, e._)`${v} !== parseInt(${v})`;
      o.fail$data((0, e._)`(${i} === 0 || (${v} = ${r}/${i}, ${g}))`);
    }
  };
  return rt.default = a, rt;
}
var nt = {}, ot = {}, dn;
function ss() {
  if (dn) return ot;
  dn = 1, Object.defineProperty(ot, "__esModule", { value: !0 });
  function e(t) {
    const a = t.length;
    let o = 0, h = 0, r;
    for (; h < a; )
      o++, r = t.charCodeAt(h++), r >= 55296 && r <= 56319 && h < a && (r = t.charCodeAt(h), (r & 64512) === 56320 && h++);
    return o;
  }
  return ot.default = e, e.code = 'require("ajv/dist/runtime/ucs2length").default', ot;
}
var un;
function as() {
  if (un) return nt;
  un = 1, Object.defineProperty(nt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), a = /* @__PURE__ */ ss(), h = {
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
      const { keyword: i, data: l, schemaCode: f, it: v } = r, g = i === "maxLength" ? e.operators.GT : e.operators.LT, b = v.opts.unicode === !1 ? (0, e._)`${l}.length` : (0, e._)`${(0, t.useFunc)(r.gen, a.default)}(${l})`;
      r.fail$data((0, e._)`${b} ${g} ${f}`);
    }
  };
  return nt.default = h, nt;
}
var st = {}, fn;
function is() {
  if (fn) return st;
  fn = 1, Object.defineProperty(st, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ $e(), t = /* @__PURE__ */ X(), a = /* @__PURE__ */ G(), h = {
    keyword: "pattern",
    type: "string",
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: r }) => (0, a.str)`must match pattern "${r}"`,
      params: ({ schemaCode: r }) => (0, a._)`{pattern: ${r}}`
    },
    code(r) {
      const { gen: i, data: l, $data: f, schema: v, schemaCode: g, it: b } = r, S = b.opts.unicodeRegExp ? "u" : "";
      if (f) {
        const { regExp: w } = b.opts.code, E = w.code === "new RegExp" ? (0, a._)`new RegExp` : (0, t.useFunc)(i, w), _ = i.let("valid");
        i.try(() => i.assign(_, (0, a._)`${E}(${g}, ${S}).test(${l})`), () => i.assign(_, !1)), r.fail$data((0, a._)`!${_}`);
      } else {
        const w = (0, e.usePattern)(r, v);
        r.fail$data((0, a._)`!${w}.test(${l})`);
      }
    }
  };
  return st.default = h, st;
}
var at = {}, pn;
function cs() {
  if (pn) return at;
  pn = 1, Object.defineProperty(at, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), a = {
    keyword: ["maxProperties", "minProperties"],
    type: "object",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: o, schemaCode: h }) {
        const r = o === "maxProperties" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${r} than ${h} properties`;
      },
      params: ({ schemaCode: o }) => (0, e._)`{limit: ${o}}`
    },
    code(o) {
      const { keyword: h, data: r, schemaCode: i } = o, l = h === "maxProperties" ? e.operators.GT : e.operators.LT;
      o.fail$data((0, e._)`Object.keys(${r}).length ${l} ${i}`);
    }
  };
  return at.default = a, at;
}
var it = {}, hn;
function ls() {
  if (hn) return it;
  hn = 1, Object.defineProperty(it, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ $e(), t = /* @__PURE__ */ G(), a = /* @__PURE__ */ X(), h = {
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
      if (b.allErrors ? E() : _(), S.strictRequired) {
        const c = r.parentSchema.properties, { definedProperties: p } = r.it;
        for (const $ of l)
          if (c?.[$] === void 0 && !p.has($)) {
            const n = b.schemaEnv.baseId + b.errSchemaPath, s = `required property "${$}" is not defined at "${n}" (strictRequired)`;
            (0, a.checkStrictMode)(b, s, b.opts.strictRequired);
          }
      }
      function E() {
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
  return it.default = h, it;
}
var ct = {}, mn;
function ds() {
  if (mn) return ct;
  mn = 1, Object.defineProperty(ct, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), a = {
    keyword: ["maxItems", "minItems"],
    type: "array",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: o, schemaCode: h }) {
        const r = o === "maxItems" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${r} than ${h} items`;
      },
      params: ({ schemaCode: o }) => (0, e._)`{limit: ${o}}`
    },
    code(o) {
      const { keyword: h, data: r, schemaCode: i } = o, l = h === "maxItems" ? e.operators.GT : e.operators.LT;
      o.fail$data((0, e._)`${r}.length ${l} ${i}`);
    }
  };
  return ct.default = a, ct;
}
var lt = {}, dt = {}, yn;
function $r() {
  if (yn) return dt;
  yn = 1, Object.defineProperty(dt, "__esModule", { value: !0 });
  const e = bo();
  return e.code = 'require("ajv/dist/runtime/equal").default', dt.default = e, dt;
}
var gn;
function us() {
  if (gn) return lt;
  gn = 1, Object.defineProperty(lt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ut(), t = /* @__PURE__ */ G(), a = /* @__PURE__ */ X(), o = /* @__PURE__ */ $r(), r = {
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
      const E = l.let("valid"), _ = b.items ? (0, e.getSchemaTypes)(b.items) : [];
      i.block$data(E, d, (0, t._)`${S} === false`), i.ok(E);
      function d() {
        const $ = l.let("i", (0, t._)`${f}.length`), n = l.let("j");
        i.setParams({ i: $, j: n }), l.assign(E, !0), l.if((0, t._)`${$} > 1`, () => (m() ? c : p)($, n));
      }
      function m() {
        return _.length > 0 && !_.some(($) => $ === "object" || $ === "array");
      }
      function c($, n) {
        const s = l.name("item"), u = (0, e.checkDataTypes)(_, s, w.opts.strictNumbers, e.DataType.Wrong), k = l.const("indices", (0, t._)`{}`);
        l.for((0, t._)`;${$}--;`, () => {
          l.let(s, (0, t._)`${f}[${$}]`), l.if(u, (0, t._)`continue`), _.length > 1 && l.if((0, t._)`typeof ${s} == "string"`, (0, t._)`${s} += "_"`), l.if((0, t._)`typeof ${k}[${s}] == "number"`, () => {
            l.assign(n, (0, t._)`${k}[${s}]`), i.error(), l.assign(E, !1).break();
          }).code((0, t._)`${k}[${s}] = ${$}`);
        });
      }
      function p($, n) {
        const s = (0, a.useFunc)(l, o.default), u = l.name("outer");
        l.label(u).for((0, t._)`;${$}--;`, () => l.for((0, t._)`${n} = ${$}; ${n}--;`, () => l.if((0, t._)`${s}(${f}[${$}], ${f}[${n}])`, () => {
          i.error(), l.assign(E, !1).break(u);
        })));
      }
    }
  };
  return lt.default = r, lt;
}
var ut = {}, vn;
function fs() {
  if (vn) return ut;
  vn = 1, Object.defineProperty(ut, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), a = /* @__PURE__ */ $r(), h = {
    keyword: "const",
    $data: !0,
    error: {
      message: "must be equal to constant",
      params: ({ schemaCode: r }) => (0, e._)`{allowedValue: ${r}}`
    },
    code(r) {
      const { gen: i, data: l, $data: f, schemaCode: v, schema: g } = r;
      f || g && typeof g == "object" ? r.fail$data((0, e._)`!${(0, t.useFunc)(i, a.default)}(${l}, ${v})`) : r.fail((0, e._)`${g} !== ${l}`);
    }
  };
  return ut.default = h, ut;
}
var ft = {}, $n;
function ps() {
  if ($n) return ft;
  $n = 1, Object.defineProperty(ft, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), a = /* @__PURE__ */ $r(), h = {
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
      const E = () => w ?? (w = (0, t.useFunc)(i, a.default));
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
        i.assign(_, !1), i.forOf("v", g, (c) => i.if((0, e._)`${E()}(${l}, ${c})`, () => i.assign(_, !0).break()));
      }
      function m(c, p) {
        const $ = v[p];
        return typeof $ == "object" && $ !== null ? (0, e._)`${E()}(${l}, ${c}[${p}])` : (0, e._)`${l} === ${$}`;
      }
    }
  };
  return ft.default = h, ft;
}
var _n;
function hs() {
  if (_n) return et;
  _n = 1, Object.defineProperty(et, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ns(), t = /* @__PURE__ */ os(), a = /* @__PURE__ */ as(), o = /* @__PURE__ */ is(), h = /* @__PURE__ */ cs(), r = /* @__PURE__ */ ls(), i = /* @__PURE__ */ ds(), l = /* @__PURE__ */ us(), f = /* @__PURE__ */ fs(), v = /* @__PURE__ */ ps(), g = [
    // number
    e.default,
    t.default,
    // string
    a.default,
    o.default,
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
  return et.default = g, et;
}
var pt = {}, Te = {}, bn;
function So() {
  if (bn) return Te;
  bn = 1, Object.defineProperty(Te, "__esModule", { value: !0 }), Te.validateAdditionalItems = void 0;
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), o = {
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
      const E = l.var("valid", (0, e._)`${S} <= ${i.length}`);
      l.if((0, e.not)(E), () => w(E)), r.ok(E);
    }
    function w(E) {
      l.forRange("i", i.length, S, (_) => {
        r.subschema({ keyword: g, dataProp: _, dataPropType: t.Type.Num }, E), b.allErrors || l.if((0, e.not)(E), () => l.break());
      });
    }
  }
  return Te.validateAdditionalItems = h, Te.default = o, Te;
}
var ht = {}, Me = {}, wn;
function Eo() {
  if (wn) return Me;
  wn = 1, Object.defineProperty(Me, "__esModule", { value: !0 }), Me.validateTuple = void 0;
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), a = /* @__PURE__ */ $e(), o = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "array", "boolean"],
    before: "uniqueItems",
    code(r) {
      const { schema: i, it: l } = r;
      if (Array.isArray(i))
        return h(r, "additionalItems", i);
      l.items = !0, !(0, t.alwaysValidSchema)(l, i) && r.ok((0, a.validateArray)(r));
    }
  };
  function h(r, i, l = r.schema) {
    const { gen: f, parentSchema: v, data: g, keyword: b, it: S } = r;
    _(v), S.opts.unevaluated && l.length && S.items !== !0 && (S.items = t.mergeEvaluated.items(f, l.length, S.items));
    const w = f.name("valid"), E = f.const("len", (0, e._)`${g}.length`);
    l.forEach((d, m) => {
      (0, t.alwaysValidSchema)(S, d) || (f.if((0, e._)`${E} > ${m}`, () => r.subschema({
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
  return Me.validateTuple = h, Me.default = o, Me;
}
var Sn;
function ms() {
  if (Sn) return ht;
  Sn = 1, Object.defineProperty(ht, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Eo(), t = {
    keyword: "prefixItems",
    type: "array",
    schemaType: ["array"],
    before: "uniqueItems",
    code: (a) => (0, e.validateTuple)(a, "items")
  };
  return ht.default = t, ht;
}
var mt = {}, En;
function ys() {
  if (En) return mt;
  En = 1, Object.defineProperty(mt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), a = /* @__PURE__ */ $e(), o = /* @__PURE__ */ So(), r = {
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
      v.items = !0, !(0, t.alwaysValidSchema)(v, l) && (g ? (0, o.validateAdditionalItems)(i, g) : i.ok((0, a.validateArray)(i)));
    }
  };
  return mt.default = r, mt;
}
var yt = {}, Pn;
function gs() {
  if (Pn) return yt;
  Pn = 1, Object.defineProperty(yt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), o = {
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
      const E = r.const("len", (0, e._)`${f}.length`);
      if (h.setParams({ min: g, max: b }), b === void 0 && g === 0) {
        (0, t.checkStrictMode)(v, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
        return;
      }
      if (b !== void 0 && g > b) {
        (0, t.checkStrictMode)(v, '"minContains" > "maxContains" is always invalid'), h.fail();
        return;
      }
      if ((0, t.alwaysValidSchema)(v, i)) {
        let p = (0, e._)`${E} >= ${g}`;
        b !== void 0 && (p = (0, e._)`${p} && ${E} <= ${b}`), h.pass(p);
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
        r.forRange("i", 0, E, (n) => {
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
  return yt.default = o, yt;
}
var dr = {}, kn;
function _r() {
  return kn || (kn = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
    const t = /* @__PURE__ */ G(), a = /* @__PURE__ */ X(), o = /* @__PURE__ */ $e();
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
      for (const E in v) {
        const _ = v[E];
        if (_.length === 0)
          continue;
        const d = (0, o.propertyInData)(g, b, E, S.opts.ownProperties);
        f.setParams({
          property: E,
          depsCount: _.length,
          deps: _.join(", ")
        }), S.allErrors ? g.if(d, () => {
          for (const m of _)
            (0, o.checkReportMissingProp)(f, m);
        }) : (g.if((0, t._)`${d} && (${(0, o.checkMissingProp)(f, _, w)})`), (0, o.reportMissingProp)(f, w), g.else());
      }
    }
    e.validatePropertyDeps = i;
    function l(f, v = f.schema) {
      const { gen: g, data: b, keyword: S, it: w } = f, E = g.name("valid");
      for (const _ in v)
        (0, a.alwaysValidSchema)(w, v[_]) || (g.if(
          (0, o.propertyInData)(g, b, _, w.opts.ownProperties),
          () => {
            const d = f.subschema({ keyword: S, schemaProp: _ }, E);
            f.mergeValidEvaluated(d, E);
          },
          () => g.var(E, !0)
          // TODO var
        ), f.ok(E));
    }
    e.validateSchemaDeps = l, e.default = h;
  })(dr)), dr;
}
var gt = {}, Rn;
function vs() {
  if (Rn) return gt;
  Rn = 1, Object.defineProperty(gt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), o = {
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
  return gt.default = o, gt;
}
var vt = {}, Cn;
function Po() {
  if (Cn) return vt;
  Cn = 1, Object.defineProperty(vt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ $e(), t = /* @__PURE__ */ G(), a = /* @__PURE__ */ ve(), o = /* @__PURE__ */ X(), r = {
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
      const { allErrors: w, opts: E } = S;
      if (S.props = !0, E.removeAdditional !== "all" && (0, o.alwaysValidSchema)(S, f))
        return;
      const _ = (0, e.allSchemaProperties)(v.properties), d = (0, e.allSchemaProperties)(v.patternProperties);
      m(), i.ok((0, t._)`${b} === ${a.default.errors}`);
      function m() {
        l.forIn("key", g, (s) => {
          !_.length && !d.length ? $(s) : l.if(c(s), () => $(s));
        });
      }
      function c(s) {
        let u;
        if (_.length > 8) {
          const k = (0, o.schemaRefOrVal)(S, v.properties, "properties");
          u = (0, e.isOwnProperty)(l, k, s);
        } else _.length ? u = (0, t.or)(..._.map((k) => (0, t._)`${s} === ${k}`)) : u = t.nil;
        return d.length && (u = (0, t.or)(u, ...d.map((k) => (0, t._)`${(0, e.usePattern)(i, k)}.test(${s})`))), (0, t.not)(u);
      }
      function p(s) {
        l.code((0, t._)`delete ${g}[${s}]`);
      }
      function $(s) {
        if (E.removeAdditional === "all" || E.removeAdditional && f === !1) {
          p(s);
          return;
        }
        if (f === !1) {
          i.setParams({ additionalProperty: s }), i.error(), w || l.break();
          return;
        }
        if (typeof f == "object" && !(0, o.alwaysValidSchema)(S, f)) {
          const u = l.name("valid");
          E.removeAdditional === "failing" ? (n(s, u, !1), l.if((0, t.not)(u), () => {
            i.reset(), p(s);
          })) : (n(s, u), w || l.if((0, t.not)(u), () => l.break()));
        }
      }
      function n(s, u, k) {
        const R = {
          keyword: "additionalProperties",
          dataProp: s,
          dataPropType: o.Type.Str
        };
        k === !1 && Object.assign(R, {
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }), i.subschema(R, u);
      }
    }
  };
  return vt.default = r, vt;
}
var $t = {}, Nn;
function $s() {
  if (Nn) return $t;
  Nn = 1, Object.defineProperty($t, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Wt(), t = /* @__PURE__ */ $e(), a = /* @__PURE__ */ X(), o = /* @__PURE__ */ Po(), h = {
    keyword: "properties",
    type: "object",
    schemaType: "object",
    code(r) {
      const { gen: i, schema: l, parentSchema: f, data: v, it: g } = r;
      g.opts.removeAdditional === "all" && f.additionalProperties === void 0 && o.default.code(new e.KeywordCxt(g, o.default, "additionalProperties"));
      const b = (0, t.allSchemaProperties)(l);
      for (const d of b)
        g.definedProperties.add(d);
      g.opts.unevaluated && b.length && g.props !== !0 && (g.props = a.mergeEvaluated.props(i, (0, a.toHash)(b), g.props));
      const S = b.filter((d) => !(0, a.alwaysValidSchema)(g, l[d]));
      if (S.length === 0)
        return;
      const w = i.name("valid");
      for (const d of S)
        E(d) ? _(d) : (i.if((0, t.propertyInData)(i, v, d, g.opts.ownProperties)), _(d), g.allErrors || i.else().var(w, !0), i.endIf()), r.it.definedProperties.add(d), r.ok(w);
      function E(d) {
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
  return $t.default = h, $t;
}
var _t = {}, jn;
function _s() {
  if (jn) return _t;
  jn = 1, Object.defineProperty(_t, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ $e(), t = /* @__PURE__ */ G(), a = /* @__PURE__ */ X(), o = /* @__PURE__ */ X(), h = {
    keyword: "patternProperties",
    type: "object",
    schemaType: "object",
    code(r) {
      const { gen: i, schema: l, data: f, parentSchema: v, it: g } = r, { opts: b } = g, S = (0, e.allSchemaProperties)(l), w = S.filter(($) => (0, a.alwaysValidSchema)(g, l[$]));
      if (S.length === 0 || w.length === S.length && (!g.opts.unevaluated || g.props === !0))
        return;
      const E = b.strictSchema && !b.allowMatchingProperties && v.properties, _ = i.name("valid");
      g.props !== !0 && !(g.props instanceof t.Name) && (g.props = (0, o.evaluatedPropsToName)(i, g.props));
      const { props: d } = g;
      m();
      function m() {
        for (const $ of S)
          E && c($), g.allErrors ? p($) : (i.var(_, !0), p($), i.if(_));
      }
      function c($) {
        for (const n in E)
          new RegExp($).test(n) && (0, a.checkStrictMode)(g, `property ${n} matches pattern ${$} (use allowMatchingProperties)`);
      }
      function p($) {
        i.forIn("key", f, (n) => {
          i.if((0, t._)`${(0, e.usePattern)(r, $)}.test(${n})`, () => {
            const s = w.includes($);
            s || r.subschema({
              keyword: "patternProperties",
              schemaProp: $,
              dataProp: n,
              dataPropType: o.Type.Str
            }, _), g.opts.unevaluated && d !== !0 ? i.assign((0, t._)`${d}[${n}]`, !0) : !s && !g.allErrors && i.if((0, t.not)(_), () => i.break());
          });
        });
      }
    }
  };
  return _t.default = h, _t;
}
var bt = {}, An;
function bs() {
  if (An) return bt;
  An = 1, Object.defineProperty(bt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ X(), t = {
    keyword: "not",
    schemaType: ["object", "boolean"],
    trackErrors: !0,
    code(a) {
      const { gen: o, schema: h, it: r } = a;
      if ((0, e.alwaysValidSchema)(r, h)) {
        a.fail();
        return;
      }
      const i = o.name("valid");
      a.subschema({
        keyword: "not",
        compositeRule: !0,
        createErrors: !1,
        allErrors: !1
      }, i), a.failResult(i, () => a.reset(), () => a.error());
    },
    error: { message: "must NOT be valid" }
  };
  return bt.default = t, bt;
}
var wt = {}, On;
function ws() {
  if (On) return wt;
  On = 1, Object.defineProperty(wt, "__esModule", { value: !0 });
  const t = {
    keyword: "anyOf",
    schemaType: "array",
    trackErrors: !0,
    code: (/* @__PURE__ */ $e()).validateUnion,
    error: { message: "must match a schema in anyOf" }
  };
  return wt.default = t, wt;
}
var St = {}, Tn;
function Ss() {
  if (Tn) return St;
  Tn = 1, Object.defineProperty(St, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), o = {
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
        v.forEach((E, _) => {
          let d;
          (0, t.alwaysValidSchema)(f, E) ? r.var(S, !0) : d = h.subschema({
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
  return St.default = o, St;
}
var Et = {}, Mn;
function Es() {
  if (Mn) return Et;
  Mn = 1, Object.defineProperty(Et, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ X(), t = {
    keyword: "allOf",
    schemaType: "array",
    code(a) {
      const { gen: o, schema: h, it: r } = a;
      if (!Array.isArray(h))
        throw new Error("ajv implementation error");
      const i = o.name("valid");
      h.forEach((l, f) => {
        if ((0, e.alwaysValidSchema)(r, l))
          return;
        const v = a.subschema({ keyword: "allOf", schemaProp: f }, i);
        a.ok(i), a.mergeEvaluated(v);
      });
    }
  };
  return Et.default = t, Et;
}
var Pt = {}, In;
function Ps() {
  if (In) return Pt;
  In = 1, Object.defineProperty(Pt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), o = {
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
        r.setParams({ ifClause: _ }), i.if(S, E("then", _), E("else", _));
      } else v ? i.if(S, E("then")) : i.if((0, e.not)(S), E("else"));
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
      function E(_, d) {
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
  return Pt.default = o, Pt;
}
var kt = {}, qn;
function ks() {
  if (qn) return kt;
  qn = 1, Object.defineProperty(kt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ X(), t = {
    keyword: ["then", "else"],
    schemaType: ["object", "boolean"],
    code({ keyword: a, parentSchema: o, it: h }) {
      o.if === void 0 && (0, e.checkStrictMode)(h, `"${a}" without "if" is ignored`);
    }
  };
  return kt.default = t, kt;
}
var Dn;
function Rs() {
  if (Dn) return pt;
  Dn = 1, Object.defineProperty(pt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ So(), t = /* @__PURE__ */ ms(), a = /* @__PURE__ */ Eo(), o = /* @__PURE__ */ ys(), h = /* @__PURE__ */ gs(), r = /* @__PURE__ */ _r(), i = /* @__PURE__ */ vs(), l = /* @__PURE__ */ Po(), f = /* @__PURE__ */ $s(), v = /* @__PURE__ */ _s(), g = /* @__PURE__ */ bs(), b = /* @__PURE__ */ ws(), S = /* @__PURE__ */ Ss(), w = /* @__PURE__ */ Es(), E = /* @__PURE__ */ Ps(), _ = /* @__PURE__ */ ks();
  function d(m = !1) {
    const c = [
      // any
      g.default,
      b.default,
      S.default,
      w.default,
      E.default,
      _.default,
      // object
      i.default,
      l.default,
      r.default,
      f.default,
      v.default
    ];
    return m ? c.push(t.default, o.default) : c.push(e.default, a.default), c.push(h.default), c;
  }
  return pt.default = d, pt;
}
var Rt = {}, Ie = {}, zn;
function ko() {
  if (zn) return Ie;
  zn = 1, Object.defineProperty(Ie, "__esModule", { value: !0 }), Ie.dynamicAnchor = void 0;
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ ve(), a = /* @__PURE__ */ Xt(), o = /* @__PURE__ */ vr(), h = {
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
    const { schemaEnv: f, schema: v, self: g } = l.it, { root: b, baseId: S, localRefs: w, meta: E } = f.root, { schemaId: _ } = g.opts, d = new a.SchemaEnv({ schema: v, schemaId: _, root: b, baseId: S, localRefs: w, meta: E });
    return a.compileSchema.call(g, d), (0, o.getValidate)(l, d);
  }
  return Ie.default = h, Ie;
}
var qe = {}, Vn;
function Ro() {
  if (Vn) return qe;
  Vn = 1, Object.defineProperty(qe, "__esModule", { value: !0 }), qe.dynamicRef = void 0;
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ ve(), a = /* @__PURE__ */ vr(), o = {
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
        const E = l.let("_v", (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(g)}`);
        l.if(E, S(E, w), S(v.validateName, w));
      } else
        S(v.validateName, w)();
    }
    function S(w, E) {
      return E ? () => l.block(() => {
        (0, a.callRef)(r, w), l.let(E, !0);
      }) : () => (0, a.callRef)(r, w);
    }
  }
  return qe.dynamicRef = h, qe.default = o, qe;
}
var Ct = {}, xn;
function Cs() {
  if (xn) return Ct;
  xn = 1, Object.defineProperty(Ct, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ko(), t = /* @__PURE__ */ X(), a = {
    keyword: "$recursiveAnchor",
    schemaType: "boolean",
    code(o) {
      o.schema ? (0, e.dynamicAnchor)(o, "") : (0, t.checkStrictMode)(o.it, "$recursiveAnchor: false is ignored");
    }
  };
  return Ct.default = a, Ct;
}
var Nt = {}, Ln;
function Ns() {
  if (Ln) return Nt;
  Ln = 1, Object.defineProperty(Nt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ro(), t = {
    keyword: "$recursiveRef",
    schemaType: "string",
    code: (a) => (0, e.dynamicRef)(a, a.schema)
  };
  return Nt.default = t, Nt;
}
var Bn;
function js() {
  if (Bn) return Rt;
  Bn = 1, Object.defineProperty(Rt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ko(), t = /* @__PURE__ */ Ro(), a = /* @__PURE__ */ Cs(), o = /* @__PURE__ */ Ns(), h = [e.default, t.default, a.default, o.default];
  return Rt.default = h, Rt;
}
var jt = {}, At = {}, Fn;
function As() {
  if (Fn) return At;
  Fn = 1, Object.defineProperty(At, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ _r(), t = {
    keyword: "dependentRequired",
    type: "object",
    schemaType: "object",
    error: e.error,
    code: (a) => (0, e.validatePropertyDeps)(a)
  };
  return At.default = t, At;
}
var Ot = {}, Un;
function Os() {
  if (Un) return Ot;
  Un = 1, Object.defineProperty(Ot, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ _r(), t = {
    keyword: "dependentSchemas",
    type: "object",
    schemaType: "object",
    code: (a) => (0, e.validateSchemaDeps)(a)
  };
  return Ot.default = t, Ot;
}
var Tt = {}, Kn;
function Ts() {
  if (Kn) return Tt;
  Kn = 1, Object.defineProperty(Tt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ X(), t = {
    keyword: ["maxContains", "minContains"],
    type: "array",
    schemaType: "number",
    code({ keyword: a, parentSchema: o, it: h }) {
      o.contains === void 0 && (0, e.checkStrictMode)(h, `"${a}" without "contains" is ignored`);
    }
  };
  return Tt.default = t, Tt;
}
var Hn;
function Ms() {
  if (Hn) return jt;
  Hn = 1, Object.defineProperty(jt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ As(), t = /* @__PURE__ */ Os(), a = /* @__PURE__ */ Ts(), o = [e.default, t.default, a.default];
  return jt.default = o, jt;
}
var Mt = {}, It = {}, Gn;
function Is() {
  if (Gn) return It;
  Gn = 1, Object.defineProperty(It, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), a = /* @__PURE__ */ ve(), h = {
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
      S instanceof e.Name ? i.if((0, e._)`${S} !== true`, () => i.forIn("key", f, (d) => i.if(E(S, d), () => w(d)))) : S !== !0 && i.forIn("key", f, (d) => S === void 0 ? w(d) : i.if(_(S, d), () => w(d))), g.props = !0, r.ok((0, e._)`${v} === ${a.default.errors}`);
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
      function E(d, m) {
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
  return It.default = h, It;
}
var qt = {}, Jn;
function qs() {
  if (Jn) return qt;
  Jn = 1, Object.defineProperty(qt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), o = {
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
        r.forRange("i", w, g, (E) => {
          h.subschema({ keyword: "unevaluatedItems", dataProp: E, dataPropType: t.Type.Num }, S), f.allErrors || r.if((0, e.not)(S), () => r.break());
        });
      }
    }
  };
  return qt.default = o, qt;
}
var Wn;
function Ds() {
  if (Wn) return Mt;
  Wn = 1, Object.defineProperty(Mt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Is(), t = /* @__PURE__ */ qs(), a = [e.default, t.default];
  return Mt.default = a, Mt;
}
var Dt = {}, zt = {}, Yn;
function zs() {
  if (Yn) return zt;
  Yn = 1, Object.defineProperty(zt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), a = {
    keyword: "format",
    type: ["number", "string"],
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: o }) => (0, e.str)`must match format "${o}"`,
      params: ({ schemaCode: o }) => (0, e._)`{format: ${o}}`
    },
    code(o, h) {
      const { gen: r, data: i, $data: l, schema: f, schemaCode: v, it: g } = o, { opts: b, errSchemaPath: S, schemaEnv: w, self: E } = g;
      if (!b.validateFormats)
        return;
      l ? _() : d();
      function _() {
        const m = r.scopeValue("formats", {
          ref: E.formats,
          code: b.code.formats
        }), c = r.const("fDef", (0, e._)`${m}[${v}]`), p = r.let("fType"), $ = r.let("format");
        r.if((0, e._)`typeof ${c} == "object" && !(${c} instanceof RegExp)`, () => r.assign(p, (0, e._)`${c}.type || "string"`).assign($, (0, e._)`${c}.validate`), () => r.assign(p, (0, e._)`"string"`).assign($, c)), o.fail$data((0, e.or)(n(), s()));
        function n() {
          return b.strictSchema === !1 ? e.nil : (0, e._)`${v} && !${$}`;
        }
        function s() {
          const u = w.$async ? (0, e._)`(${c}.async ? await ${$}(${i}) : ${$}(${i}))` : (0, e._)`${$}(${i})`, k = (0, e._)`(typeof ${$} == "function" ? ${u} : ${$}.test(${i}))`;
          return (0, e._)`${$} && ${$} !== true && ${p} === ${h} && !${k}`;
        }
      }
      function d() {
        const m = E.formats[f];
        if (!m) {
          n();
          return;
        }
        if (m === !0)
          return;
        const [c, p, $] = s(m);
        c === h && o.pass(u());
        function n() {
          if (b.strictSchema === !1) {
            E.logger.warn(k());
            return;
          }
          throw new Error(k());
          function k() {
            return `unknown format "${f}" ignored in schema at path "${S}"`;
          }
        }
        function s(k) {
          const R = k instanceof RegExp ? (0, e.regexpCode)(k) : b.code.formats ? (0, e._)`${b.code.formats}${(0, e.getProperty)(f)}` : void 0, O = r.scopeValue("formats", { key: f, ref: k, code: R });
          return typeof k == "object" && !(k instanceof RegExp) ? [k.type || "string", k.validate, (0, e._)`${O}.validate`] : ["string", k, O];
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
  return zt.default = a, zt;
}
var Xn;
function Vs() {
  if (Xn) return Dt;
  Xn = 1, Object.defineProperty(Dt, "__esModule", { value: !0 });
  const t = [(/* @__PURE__ */ zs()).default];
  return Dt.default = t, Dt;
}
var Ne = {}, Zn;
function xs() {
  return Zn || (Zn = 1, Object.defineProperty(Ne, "__esModule", { value: !0 }), Ne.contentVocabulary = Ne.metadataVocabulary = void 0, Ne.metadataVocabulary = [
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
var Qn;
function Ls() {
  if (Qn) return Xe;
  Qn = 1, Object.defineProperty(Xe, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ rs(), t = /* @__PURE__ */ hs(), a = /* @__PURE__ */ Rs(), o = /* @__PURE__ */ js(), h = /* @__PURE__ */ Ms(), r = /* @__PURE__ */ Ds(), i = /* @__PURE__ */ Vs(), l = /* @__PURE__ */ xs(), f = [
    o.default,
    e.default,
    t.default,
    (0, a.default)(!0),
    i.default,
    l.metadataVocabulary,
    l.contentVocabulary,
    h.default,
    r.default
  ];
  return Xe.default = f, Xe;
}
var Vt = {}, Ue = {}, eo;
function Bs() {
  if (eo) return Ue;
  eo = 1, Object.defineProperty(Ue, "__esModule", { value: !0 }), Ue.DiscrError = void 0;
  var e;
  return (function(t) {
    t.Tag = "tag", t.Mapping = "mapping";
  })(e || (Ue.DiscrError = e = {})), Ue;
}
var to;
function Fs() {
  if (to) return Vt;
  to = 1, Object.defineProperty(Vt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ Bs(), a = /* @__PURE__ */ Xt(), o = /* @__PURE__ */ Yt(), h = /* @__PURE__ */ X(), i = {
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
      const E = g.propertyName;
      if (typeof E != "string")
        throw new Error("discriminator: requires propertyName");
      if (g.mapping)
        throw new Error("discriminator: mapping is not supported");
      if (!w)
        throw new Error("discriminator: requires oneOf keyword");
      const _ = f.let("valid", !1), d = f.const("tag", (0, e._)`${v}${(0, e.getProperty)(E)}`);
      f.if((0, e._)`typeof ${d} == "string"`, () => m(), () => l.error(!1, { discrError: t.DiscrError.Tag, tag: d, tagName: E })), l.ok(_);
      function m() {
        const $ = p();
        f.if(!1);
        for (const n in $)
          f.elseIf((0, e._)`${d} === ${n}`), f.assign(_, c($[n]));
        f.else(), l.error(!1, { discrError: t.DiscrError.Mapping, tag: d, tagName: E }), f.endIf();
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
          let T = w[M];
          if (T?.$ref && !(0, h.schemaHasRulesButRef)(T, S.self.RULES)) {
            const H = T.$ref;
            if (T = a.resolveRef.call(S.self, S.schemaEnv.root, S.baseId, H), T instanceof a.SchemaEnv && (T = T.schema), T === void 0)
              throw new o.default(S.opts.uriResolver, S.baseId, H);
          }
          const q = ($ = T?.properties) === null || $ === void 0 ? void 0 : $[E];
          if (typeof q != "object")
            throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${E}"`);
          u = u && (s || k(T)), R(q, M);
        }
        if (!u)
          throw new Error(`discriminator: "${E}" must be required`);
        return n;
        function k({ required: M }) {
          return Array.isArray(M) && M.includes(E);
        }
        function R(M, T) {
          if (M.const)
            O(M.const, T);
          else if (M.enum)
            for (const q of M.enum)
              O(q, T);
          else
            throw new Error(`discriminator: "properties/${E}" must have "const" or "enum"`);
        }
        function O(M, T) {
          if (typeof M != "string" || M in n)
            throw new Error(`discriminator: "${E}" values must be unique strings`);
          n[M] = T;
        }
      }
    }
  };
  return Vt.default = i, Vt;
}
var xt = {};
const Us = "https://json-schema.org/draft/2020-12/schema", Ks = "https://json-schema.org/draft/2020-12/schema", Hs = { "https://json-schema.org/draft/2020-12/vocab/core": !0, "https://json-schema.org/draft/2020-12/vocab/applicator": !0, "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0, "https://json-schema.org/draft/2020-12/vocab/validation": !0, "https://json-schema.org/draft/2020-12/vocab/meta-data": !0, "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0, "https://json-schema.org/draft/2020-12/vocab/content": !0 }, Gs = "meta", Js = "Core and Validation specifications meta-schema", Ws = [{ $ref: "meta/core" }, { $ref: "meta/applicator" }, { $ref: "meta/unevaluated" }, { $ref: "meta/validation" }, { $ref: "meta/meta-data" }, { $ref: "meta/format-annotation" }, { $ref: "meta/content" }], Ys = ["object", "boolean"], Xs = "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.", Zs = { definitions: { $comment: '"definitions" has been replaced by "$defs".', type: "object", additionalProperties: { $dynamicRef: "#meta" }, deprecated: !0, default: {} }, dependencies: { $comment: '"dependencies" has been split and replaced by "dependentSchemas" and "dependentRequired" in order to serve their differing semantics.', type: "object", additionalProperties: { anyOf: [{ $dynamicRef: "#meta" }, { $ref: "meta/validation#/$defs/stringArray" }] }, deprecated: !0, default: {} }, $recursiveAnchor: { $comment: '"$recursiveAnchor" has been replaced by "$dynamicAnchor".', $ref: "meta/core#/$defs/anchorString", deprecated: !0 }, $recursiveRef: { $comment: '"$recursiveRef" has been replaced by "$dynamicRef".', $ref: "meta/core#/$defs/uriReferenceString", deprecated: !0 } }, Qs = {
  $schema: Us,
  $id: Ks,
  $vocabulary: Hs,
  $dynamicAnchor: Gs,
  title: Js,
  allOf: Ws,
  type: Ys,
  $comment: Xs,
  properties: Zs
}, ea = "https://json-schema.org/draft/2020-12/schema", ta = "https://json-schema.org/draft/2020-12/meta/applicator", ra = { "https://json-schema.org/draft/2020-12/vocab/applicator": !0 }, na = "meta", oa = "Applicator vocabulary meta-schema", sa = ["object", "boolean"], aa = { prefixItems: { $ref: "#/$defs/schemaArray" }, items: { $dynamicRef: "#meta" }, contains: { $dynamicRef: "#meta" }, additionalProperties: { $dynamicRef: "#meta" }, properties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, propertyNames: { format: "regex" }, default: {} }, dependentSchemas: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, propertyNames: { $dynamicRef: "#meta" }, if: { $dynamicRef: "#meta" }, then: { $dynamicRef: "#meta" }, else: { $dynamicRef: "#meta" }, allOf: { $ref: "#/$defs/schemaArray" }, anyOf: { $ref: "#/$defs/schemaArray" }, oneOf: { $ref: "#/$defs/schemaArray" }, not: { $dynamicRef: "#meta" } }, ia = { schemaArray: { type: "array", minItems: 1, items: { $dynamicRef: "#meta" } } }, ca = {
  $schema: ea,
  $id: ta,
  $vocabulary: ra,
  $dynamicAnchor: na,
  title: oa,
  type: sa,
  properties: aa,
  $defs: ia
}, la = "https://json-schema.org/draft/2020-12/schema", da = "https://json-schema.org/draft/2020-12/meta/unevaluated", ua = { "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0 }, fa = "meta", pa = "Unevaluated applicator vocabulary meta-schema", ha = ["object", "boolean"], ma = { unevaluatedItems: { $dynamicRef: "#meta" }, unevaluatedProperties: { $dynamicRef: "#meta" } }, ya = {
  $schema: la,
  $id: da,
  $vocabulary: ua,
  $dynamicAnchor: fa,
  title: pa,
  type: ha,
  properties: ma
}, ga = "https://json-schema.org/draft/2020-12/schema", va = "https://json-schema.org/draft/2020-12/meta/content", $a = { "https://json-schema.org/draft/2020-12/vocab/content": !0 }, _a = "meta", ba = "Content vocabulary meta-schema", wa = ["object", "boolean"], Sa = { contentEncoding: { type: "string" }, contentMediaType: { type: "string" }, contentSchema: { $dynamicRef: "#meta" } }, Ea = {
  $schema: ga,
  $id: va,
  $vocabulary: $a,
  $dynamicAnchor: _a,
  title: ba,
  type: wa,
  properties: Sa
}, Pa = "https://json-schema.org/draft/2020-12/schema", ka = "https://json-schema.org/draft/2020-12/meta/core", Ra = { "https://json-schema.org/draft/2020-12/vocab/core": !0 }, Ca = "meta", Na = "Core vocabulary meta-schema", ja = ["object", "boolean"], Aa = { $id: { $ref: "#/$defs/uriReferenceString", $comment: "Non-empty fragments not allowed.", pattern: "^[^#]*#?$" }, $schema: { $ref: "#/$defs/uriString" }, $ref: { $ref: "#/$defs/uriReferenceString" }, $anchor: { $ref: "#/$defs/anchorString" }, $dynamicRef: { $ref: "#/$defs/uriReferenceString" }, $dynamicAnchor: { $ref: "#/$defs/anchorString" }, $vocabulary: { type: "object", propertyNames: { $ref: "#/$defs/uriString" }, additionalProperties: { type: "boolean" } }, $comment: { type: "string" }, $defs: { type: "object", additionalProperties: { $dynamicRef: "#meta" } } }, Oa = { anchorString: { type: "string", pattern: "^[A-Za-z_][-A-Za-z0-9._]*$" }, uriString: { type: "string", format: "uri" }, uriReferenceString: { type: "string", format: "uri-reference" } }, Ta = {
  $schema: Pa,
  $id: ka,
  $vocabulary: Ra,
  $dynamicAnchor: Ca,
  title: Na,
  type: ja,
  properties: Aa,
  $defs: Oa
}, Ma = "https://json-schema.org/draft/2020-12/schema", Ia = "https://json-schema.org/draft/2020-12/meta/format-annotation", qa = { "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0 }, Da = "meta", za = "Format vocabulary meta-schema for annotation results", Va = ["object", "boolean"], xa = { format: { type: "string" } }, La = {
  $schema: Ma,
  $id: Ia,
  $vocabulary: qa,
  $dynamicAnchor: Da,
  title: za,
  type: Va,
  properties: xa
}, Ba = "https://json-schema.org/draft/2020-12/schema", Fa = "https://json-schema.org/draft/2020-12/meta/meta-data", Ua = { "https://json-schema.org/draft/2020-12/vocab/meta-data": !0 }, Ka = "meta", Ha = "Meta-data vocabulary meta-schema", Ga = ["object", "boolean"], Ja = { title: { type: "string" }, description: { type: "string" }, default: !0, deprecated: { type: "boolean", default: !1 }, readOnly: { type: "boolean", default: !1 }, writeOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 } }, Wa = {
  $schema: Ba,
  $id: Fa,
  $vocabulary: Ua,
  $dynamicAnchor: Ka,
  title: Ha,
  type: Ga,
  properties: Ja
}, Ya = "https://json-schema.org/draft/2020-12/schema", Xa = "https://json-schema.org/draft/2020-12/meta/validation", Za = { "https://json-schema.org/draft/2020-12/vocab/validation": !0 }, Qa = "meta", ei = "Validation vocabulary meta-schema", ti = ["object", "boolean"], ri = { type: { anyOf: [{ $ref: "#/$defs/simpleTypes" }, { type: "array", items: { $ref: "#/$defs/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, const: !0, enum: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/$defs/nonNegativeInteger" }, minLength: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, maxItems: { $ref: "#/$defs/nonNegativeInteger" }, minItems: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, maxContains: { $ref: "#/$defs/nonNegativeInteger" }, minContains: { $ref: "#/$defs/nonNegativeInteger", default: 1 }, maxProperties: { $ref: "#/$defs/nonNegativeInteger" }, minProperties: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, required: { $ref: "#/$defs/stringArray" }, dependentRequired: { type: "object", additionalProperties: { $ref: "#/$defs/stringArray" } } }, ni = { nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { $ref: "#/$defs/nonNegativeInteger", default: 0 }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, oi = {
  $schema: Ya,
  $id: Xa,
  $vocabulary: Za,
  $dynamicAnchor: Qa,
  title: ei,
  type: ti,
  properties: ri,
  $defs: ni
};
var ro;
function si() {
  if (ro) return xt;
  ro = 1, Object.defineProperty(xt, "__esModule", { value: !0 });
  const e = Qs, t = ca, a = ya, o = Ea, h = Ta, r = La, i = Wa, l = oi, f = ["/properties"];
  function v(g) {
    return [
      e,
      t,
      a,
      o,
      h,
      b(this, r),
      i,
      b(this, l)
    ].forEach((S) => this.addMetaSchema(S, void 0, !1)), this;
    function b(S, w) {
      return g ? S.$dataMetaSchema(w, f) : w;
    }
  }
  return xt.default = v, xt;
}
var no;
function ai() {
  return no || (no = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv2020 = void 0;
    const a = /* @__PURE__ */ es(), o = /* @__PURE__ */ Ls(), h = /* @__PURE__ */ Fs(), r = /* @__PURE__ */ si(), i = "https://json-schema.org/draft/2020-12/schema";
    class l extends a.default {
      constructor(w = {}) {
        super({
          ...w,
          dynamicRef: !0,
          next: !0,
          unevaluated: !0
        });
      }
      _addVocabularies() {
        super._addVocabularies(), o.default.forEach((w) => this.addVocabulary(w)), this.opts.discriminator && this.addKeyword(h.default);
      }
      _addDefaultMetaSchema() {
        super._addDefaultMetaSchema();
        const { $data: w, meta: E } = this.opts;
        E && (r.default.call(this, w), this.refs["http://json-schema.org/schema"] = i);
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
    var g = /* @__PURE__ */ gr();
    Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
      return g.default;
    } });
    var b = /* @__PURE__ */ Yt();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return b.default;
    } });
  })(He, He.exports)), He.exports;
}
var ii = /* @__PURE__ */ ai();
const ci = /* @__PURE__ */ zo(ii), li = "https://json-schema.org/draft/2020-12/schema", di = "https://openfree.energy/schemas/gufe-viz/1.0/gufe-viz.schema.json", ui = "gufe-viz payload", fi = "The Python-to-TypeScript contract for gufe visualizations. Nothing generates this file, and both languages are downstream of it. A payload is its 'type' plus its own fields, flat, and it is the same object whether it stands alone or is nested inside another. The version lives in $id, not in the payload.", pi = [{ $ref: "#/$defs/SmallMoleculeComponentViz" }, { $ref: "#/$defs/ProteinComponentViz" }, { $ref: "#/$defs/SolvatedPDBComponentViz" }, { $ref: "#/$defs/ProteinMembraneComponentViz" }, { $ref: "#/$defs/SolventComponentViz" }, { $ref: "#/$defs/UnknownComponentViz" }, { $ref: "#/$defs/LigandAtomMappingViz" }, { $ref: "#/$defs/LigandNetworkViz" }, { $ref: "#/$defs/ChemicalSystemViz" }, { $ref: "#/$defs/TransformationViz" }, { $ref: "#/$defs/AlchemicalNetworkViz" }], hi = /* @__PURE__ */ JSON.parse(`{"ComponentViz":{"title":"ComponentViz","description":"Any single chemical-system component","oneOf":[{"$ref":"#/$defs/SmallMoleculeComponentViz"},{"$ref":"#/$defs/ProteinComponentViz"},{"$ref":"#/$defs/SolvatedPDBComponentViz"},{"$ref":"#/$defs/ProteinMembraneComponentViz"},{"$ref":"#/$defs/SolventComponentViz"},{"$ref":"#/$defs/UnknownComponentViz"}]},"SmallMoleculeComponentViz":{"title":"SmallMoleculeComponentViz","description":"A small molecule, carried as a complete SDF record. The SDF holds the conformer, so nothing downstream reconstructs coordinates.","type":"object","properties":{"type":{"const":"SmallMoleculeComponentViz"},"name":{"type":"string"},"sdf":{"type":"string","minLength":1,"description":"Complete inline SDF record, including the conformer."},"smiles":{"type":"string"},"total_charge":{"type":"integer","description":"Net formal charge. Displayed, never recomputed from the SDF."}},"required":["type","name","sdf","smiles","total_charge"],"additionalProperties":false},"ProteinComponentViz":{"title":"ProteinComponentViz","description":"A protein, carried as a complete PDB record.","type":"object","properties":{"type":{"const":"ProteinComponentViz"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation."}},"required":["type","name","pdb"],"additionalProperties":false},"SolvatedPDBComponentViz":{"title":"SolvatedPDBComponentViz","description":"A protein with explicit solvent. A distinct type rather than a flag on ProteinComponentViz, because the discriminator is what a view dispatches on and the presence of waters changes what a sensible default representation is.","type":"object","properties":{"type":{"const":"SolvatedPDBComponentViz"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation, including explicit solvent."}},"required":["type","name","pdb"],"additionalProperties":false},"ProteinMembraneComponentViz":{"title":"ProteinMembraneComponentViz","description":"A protein embedded in a membrane.","type":"object","properties":{"type":{"const":"ProteinMembraneComponentViz"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation of the protein and membrane system."}},"required":["type","name","pdb"],"additionalProperties":false},"SolventComponentViz":{"title":"SolventComponentViz","description":"Bulk solvent settings. There is no structure to draw, so these are flat fields suitable for rendering as a settings card.","type":"object","properties":{"type":{"const":"SolventComponentViz"},"name":{"type":"string"},"smiles":{"type":"string","minLength":1},"positive_ion":{"type":"string"},"negative_ion":{"type":"string"},"neutralize":{"type":"boolean"},"ion_concentration":{"type":"string","description":"Display-form concentration with units, for example '0.15 molar'. A string rather than a number because the unit is part of the value and the view only ever prints it."}},"required":["type","name","smiles","positive_ion","negative_ion","neutralize","ion_concentration"],"additionalProperties":false},"UnknownComponentViz":{"title":"UnknownComponentViz","description":"The graceful fallback for a component type this build does not recognize. gufe supports custom Component subclasses, so meeting one is an expected outcome rather than an error, and the browser answers it with 'sorry, there is no visualization for this'. This covers an unrecognized type only: a recognized component whose serializer fails is a bug, and raises in Python rather than arriving here wearing a disguise.","type":"object","properties":{"type":{"const":"UnknownComponentViz"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The gufe class name, so the panel can say which type it could not draw."}},"required":["type","name","gufe_type"],"additionalProperties":false},"ChemicalSystemViz":{"title":"ChemicalSystemViz","description":"Visualization-only representation of a GUFE 1.12 ChemicalSystem.","type":"object","properties":{"type":{"const":"ChemicalSystemViz"},"name":{"type":"string"},"components":{"type":"object","description":"ChemicalSystem labels mapped to component payloads.","additionalProperties":{"$ref":"#/$defs/ComponentViz"}}},"required":["type","name","components"],"additionalProperties":false},"AtomMapping":{"title":"AtomMapping","description":"Atom index correspondence from molecule A to molecule B. Keys are A's atom indices as decimal strings, because JSON object keys are always strings; values are B's indices as integers.","type":"object","propertyNames":{"pattern":"^(0|[1-9][0-9]*)$"},"additionalProperties":{"type":"integer","minimum":0}},"Annotations":{"title":"Annotations","description":"Free-form mapping metadata. gufe puts nothing here by design and every mapper picks its own keys, so this is deliberately open. Values are whatever survived being made JSON-safe. Displayed but never interpreted, with the single exception of 'score'.","type":"object"},"LigandAtomMappingViz":{"title":"LigandAtomMappingViz","description":"One atom mapping between two small molecules, standalone. The same object is what the ligand-network view hands to the embedded mapping viewer when an edge is clicked, so there is one mapping shape rather than a standalone one and an in-graph one.","type":"object","properties":{"type":{"const":"LigandAtomMappingViz"},"name":{"type":"string"},"molA_sdf":{"type":"string","minLength":1},"molB_sdf":{"type":"string","minLength":1},"nameA":{"type":"string"},"nameB":{"type":"string"},"componentA_to_componentB":{"$ref":"#/$defs/AtomMapping"},"annotations":{"$ref":"#/$defs/Annotations"}},"required":["type","name","molA_sdf","molB_sdf","nameA","nameB","componentA_to_componentB","annotations"],"additionalProperties":false},"LigandNetworkNodeViz":{"title":"LigandNetworkNodeViz","description":"One ligand in a network. Molecules live here rather than inlined per edge, because a forty-ligand network would otherwise carry each SDF several times over.","type":"object","properties":{"id":{"type":"string","minLength":1,"description":"The gufe key. An identity, not a label: gufe's own network fixtures have unnamed molecules, so the view falls back to a short form of this when name is empty."},"name":{"type":"string"},"sdf":{"type":"string","minLength":1},"smiles":{"type":"string"}},"required":["id","name","sdf","smiles"],"additionalProperties":false},"LigandNetworkEdgeViz":{"title":"LigandNetworkEdgeViz","description":"One mapping in a network, as topology only. Not a standalone payload: source and target name nodes in the same LigandNetworkViz, and the view reassembles a LigandAtomMappingViz from an edge plus its two endpoint nodes. JSON Schema cannot express that referential constraint, so a Python test covers it, and the view drops a dangling edge with a banner rather than failing.","type":"object","properties":{"source":{"type":"string","minLength":1},"target":{"type":"string","minLength":1},"score":{"type":["number","null"],"description":"The 'score' annotation when it is a plain number, otherwise null. This is the one annotation key that is interpreted rather than displayed: it drives the edge colouring."},"componentA_to_componentB":{"$ref":"#/$defs/AtomMapping"},"annotations":{"$ref":"#/$defs/Annotations"}},"required":["source","target","score","componentA_to_componentB","annotations"],"additionalProperties":false},"LigandNetworkViz":{"title":"LigandNetworkViz","description":"A ligand network as ligands plus topology. Deliberately not gufe's GraphML: that format embeds a gufe to_json moldict per node, so forwarding it would relocate the decoding problem into the browser rather than avoid it.","type":"object","properties":{"type":{"const":"LigandNetworkViz"},"name":{"type":"string"},"nodes":{"type":"array","items":{"$ref":"#/$defs/LigandNetworkNodeViz"}},"edges":{"type":"array","items":{"$ref":"#/$defs/LigandNetworkEdgeViz"}}},"required":["type","name","nodes","edges"],"additionalProperties":false},"TransformationViz":{"title":"TransformationViz","description":"A transformation between two chemical systems. NonTransformation uses this type too: it exposes the same stateA and stateB properties, both its single system, so it renders as a diff with no differences.","type":"object","properties":{"type":{"const":"TransformationViz"},"name":{"type":"string"},"protocol":{"type":"string","description":"The protocol class name. Named only, never inspected."},"stateA":{"$ref":"#/$defs/ChemicalSystemViz"},"stateB":{"$ref":"#/$defs/ChemicalSystemViz"},"mappings":{"type":"array","items":{"$ref":"#/$defs/LigandAtomMappingViz"}}},"required":["type","name","protocol","stateA","stateB","mappings"],"additionalProperties":false},"ComponentSummaryViz":{"title":"ComponentSummaryViz","description":"A component named but not drawn. This is deliberately not a ComponentViz and must not be mistaken for one: it carries no structure at all, because an alchemical network that inlined every system's SDF and PDB would be enormous, and this view shows composition and topology rather than chemistry.","type":"object","properties":{"label":{"type":"string"},"gufe_type":{"type":"string","minLength":1},"name":{"type":"string"}},"required":["label","gufe_type","name"],"additionalProperties":false},"AlchemicalNetworkNodeViz":{"title":"AlchemicalNetworkNodeViz","description":"One ChemicalSystem in an alchemical network, summarized.","type":"object","properties":{"id":{"type":"string","minLength":1,"description":"The ChemicalSystem's gufe key. Edges reference it."},"name":{"type":"string"},"components":{"type":"array","items":{"$ref":"#/$defs/ComponentSummaryViz"}}},"required":["id","name","components"],"additionalProperties":false},"AlchemicalNetworkEdgeViz":{"title":"AlchemicalNetworkEdgeViz","description":"One Transformation in an alchemical network.","type":"object","properties":{"id":{"type":"string","minLength":1,"description":"The Transformation's gufe key."},"name":{"type":"string"},"source":{"type":"string","minLength":1,"description":"Node id of stateA."},"target":{"type":"string","minLength":1,"description":"Node id of stateB."},"protocol":{"type":"string"}},"required":["id","name","source","target","protocol"],"additionalProperties":false},"AlchemicalNetworkViz":{"title":"AlchemicalNetworkViz","description":"A graph of chemical systems joined by transformations.","type":"object","properties":{"type":{"const":"AlchemicalNetworkViz"},"name":{"type":"string"},"nodes":{"type":"array","items":{"$ref":"#/$defs/AlchemicalNetworkNodeViz"}},"edges":{"type":"array","items":{"$ref":"#/$defs/AlchemicalNetworkEdgeViz"}}},"required":["type","name","nodes","edges"],"additionalProperties":false}}`), br = {
  $schema: li,
  $id: di,
  title: ui,
  description: fi,
  oneOf: pi,
  $defs: hi
}, Ui = ["AlchemicalNetworkViz", "ChemicalSystemViz", "LigandAtomMappingViz", "LigandNetworkViz", "ProteinComponentViz", "ProteinMembraneComponentViz", "SmallMoleculeComponentViz", "SolvatedPDBComponentViz", "SolventComponentViz", "TransformationViz", "UnknownComponentViz"], wr = br.$id, Sr = new ci({ allErrors: !0, strict: !1 });
Sr.addSchema(br, wr);
const oo = Sr.getSchema(wr), Co = Object.entries(br.$defs).filter(([e, t]) => t.properties?.type?.const === e).map(([e]) => e).sort(), Ki = Co, No = /* @__PURE__ */ new Map();
for (const e of Co) {
  const t = Sr.getSchema(`${wr}#/$defs/${e}`);
  t && No.set(e, t);
}
const so = { valid: !0, issues: [] };
function ao(e) {
  return (e ?? []).map((t) => ({
    path: t.instancePath || "",
    message: t.keyword === "additionalProperties" ? `unknown property ${JSON.stringify(t.params.additionalProperty)}` : t.message ?? "is invalid"
  }));
}
function mi(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return { valid: !1, issues: [{ path: "", message: "must be a JSON object" }] };
  const t = e.type, a = typeof t == "string" ? No.get(t) : void 0;
  return a ? a(e) ? so : { valid: !1, issues: ao(a.errors) } : oo(e) ? so : { valid: !1, issues: ao(oo.errors) };
}
function yi(e, t = 8) {
  const a = e.slice(0, t).map((o) => `${o.path || "(root)"}: ${o.message}`);
  return e.length > t && a.push(`... and ${e.length - t} more`), a.join(`
`);
}
const Er = {
  SmallMoleculeComponentViz: "gufe-small-molecule",
  ProteinComponentViz: "gufe-protein",
  LigandNetworkViz: "gufe-ligand-network"
};
function jo(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return { message: "This does not look like a gufe-viz payload (expected a JSON object)." };
  const { type: t } = e;
  if (typeof t != "string" || !t)
    return { message: "This payload has no `type`, so there is nothing to say what it is." };
  if (!Er[t]) return gi(t);
  const { valid: a, issues: o } = mi(e);
  return a ? null : {
    message: `This payload says it is a ${t}, but it does not match the gufe-viz schema.`,
    detail: yi(o)
  };
}
function gi(e) {
  const t = Object.keys(Er).sort().join(", ");
  return { message: `Sorry, there is no visualization for ${e} yet. This build can draw: ${t}.` };
}
function Hi(e) {
  return jo(e)?.message ?? null;
}
class vi extends Kt {
  placeholder() {
    return "Waiting for data...";
  }
  renderView(t, a) {
    const o = jo(a);
    if (o)
      return t.appendChild($i(o, a)), {};
    const h = a.type, r = Er[h], i = document.createElement(r);
    return i.style.cssText = "flex:1;min-height:0;min-width:0;", i.payload = a, t.appendChild(i), {
      onResize: () => i.resize?.(),
      // Removing the child fires its own `disconnectedCallback`, which is where
      // its viewers and observers are released - no manual teardown here.
      cleanup: () => i.remove()
    };
  }
}
function $i(e, t) {
  const a = F(
    "div",
    "flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:32px;"
  );
  a.appendChild(ce(e.message));
  const o = (r, i) => F(
    "div",
    "max-width:640px;padding:8px 12px;border-radius:6px;font-size:11px;white-space:pre-wrap;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;overflow-wrap:anywhere;" + (i ? `background:${x.warnBg};color:${x.warnFg};border:1px solid ${x.warnBorder};` : `background:${x.panelBg};color:${x.textMuted2};border:1px solid ${x.cardBorder};`),
    r
  );
  e.detail && a.appendChild(o(e.detail, !0));
  const h = _i(t);
  return h && a.appendChild(o(h, !1)), a;
}
function _i(e) {
  if (e == null || typeof e != "object") return null;
  const t = e, a = [];
  typeof t.type == "string" && a.push(`type: ${Bt(t.type)}`), typeof t.name == "string" && t.name && a.push(`name: ${Bt(t.name)}`);
  const o = Object.keys(e);
  return o.length && a.push(`keys: ${o.slice(0, 12).join(", ")}${o.length > 12 ? ", ..." : ""}`), a.length ? a.join(`
`) : null;
}
Ht("gufe-view", vi);
const Pr = {
  threeDmol: "https://3dmol.org/build/3Dmol-min.js",
  rdkit: "https://unpkg.com/@rdkit/rdkit/dist/RDKit_minimal.js",
  d3: "https://cdn.jsdelivr.net/npm/d3@7/+esm"
};
function kr(e) {
  const t = globalThis.__gufeEngines?.[e];
  return t ? Promise.resolve(t) : null;
}
function Ao(e, t) {
  return new Promise((a, o) => {
    const h = document.createElement("script");
    h.src = e, h.onload = () => a(), h.onerror = () => o(new Error(`Failed to load ${t}`)), document.head.appendChild(h);
  });
}
let Ve = null, De = null;
function Oo() {
  if (De) return De;
  const e = kr("threeDmol");
  return e ? (De = e.then((t) => Ve = t || window.$3Dmol), De) : (De = (async () => {
    if (window.$3Dmol) return Ve = window.$3Dmol;
    if (await Ao(Pr.threeDmol, "3Dmol.js"), !window.$3Dmol) throw new Error("3Dmol.js loaded but $3Dmol is undefined");
    return Ve = window.$3Dmol;
  })(), De);
}
let ze = null;
function pr() {
  if (ze) return ze;
  const e = kr("rdkit");
  return e ? (ze = e.then((t) => window.RDKit = t), ze) : (ze = (async () => {
    if (window.RDKit) return window.RDKit;
    if (await Ao(Pr.rdkit, "RDKit"), !window.initRDKitModule) throw new Error("RDKit loaded but initRDKitModule is undefined");
    return window.RDKit = await window.initRDKitModule();
  })(), ze);
}
let ur = null;
function bi() {
  if (!ur) {
    const e = Pr.d3;
    ur = kr("d3") ?? import(
      /* @vite-ignore */
      e
    );
  }
  return ur;
}
const wi = `
`, io = "$$$$", Si = (e) => e.indexOf(io) >= 0 ? e : `${e}${wi}${io}`;
function hr(e) {
  const t = String(e).split(/\r?\n/);
  if (t.length < 4) return null;
  const a = parseInt(t[3].slice(0, 3), 10), o = parseInt(t[3].slice(3, 6), 10);
  return isNaN(a) || isNaN(o) ? null : { atoms: a, bonds: o };
}
function mr(e, t, a) {
  let o = null;
  try {
    if (o = e.get_mol(t, JSON.stringify({ removeHs: !0 })), !o) return null;
    try {
      o.set_new_coords(!0);
    } catch {
    }
    return o.get_svg(a, a) || null;
  } catch (h) {
    return console.warn("[gufe-viz] depictSVG threw -", _e(h)), null;
  } finally {
    if (o)
      try {
        o.delete();
      } catch {
      }
  }
}
function Ei(e, t, a) {
  e.innerHTML = t;
  const o = e.querySelector("svg");
  o && (o.removeAttribute("width"), o.removeAttribute("height"), o.getAttribute("viewBox") || o.setAttribute("viewBox", `0 0 ${a} ${a}`), o.setAttribute("preserveAspectRatio", "xMidYMid meet"), o.setAttribute("style", "width:100%;height:100%;max-width:100%;max-height:100%;"));
}
const Pi = [
  { id: "stick", label: "Stick", title: "Sticks only" },
  { id: "ball", label: "Ball+Stick", title: "Ball and stick" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" }
], co = {
  stick: { stick: { radius: 0.15, colorscheme: "Jmol" } },
  ball: { stick: { radius: 0.12, colorscheme: "Jmol" }, sphere: { scale: 0.28, colorscheme: "Jmol" } },
  sphere: { sphere: { scale: 1, colorscheme: "Jmol" } }
}, lo = 400;
class ki extends Kt {
  placeholder() {
    return "Waiting for a SmallMoleculeComponent payload...";
  }
  renderView(t, a) {
    const o = a.sdf, h = a.name ?? "", r = a.smiles, i = a.total_charge;
    t.appendChild(go(h || "Unnamed molecule", "SmallMoleculeComponent"));
    const l = F("div", "flex:1;display:flex;flex-direction:row;overflow:hidden;min-height:0;");
    t.appendChild(l);
    const f = F("div", "flex:1 1 50%;min-width:0;display:flex;flex-direction:column;"), v = F("div", "flex:1 1 50%;min-width:0;display:flex;flex-direction:column;position:relative;");
    l.appendChild(f), l.appendChild(F("div", `width:1px;flex-shrink:0;background:${x.splitBorder};`)), l.appendChild(v);
    const g = (n) => F("div", `flex-shrink:0;padding:4px 10px;font-size:12px;font-weight:bold;color:${x.labelFg};background:${x.labelBg};`, n);
    f.appendChild(g("2D"));
    const b = F(
      "div",
      `flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:8px;background:${x.canvas2DBg};`
    );
    f.appendChild(b), v.appendChild(g("3D"));
    const S = vo();
    v.appendChild(S.wrap);
    const w = F(
      "div",
      `flex-shrink:0;display:flex;flex-wrap:wrap;align-items:baseline;gap:6px 20px;padding:8px 16px;font-size:12px;background:${x.toolbarBg};border-top:1px solid ${x.toolbarBorder};color:${x.textPrimary};`
    );
    t.appendChild(w);
    const E = o ? hr(o) : null, _ = [
      ["Name", h || ke, !1],
      ["SMILES", r || ke, !0],
      ["Charge", i == null ? ke : String(i), !1],
      ["Atoms", E ? String(E.atoms) : ke, !1],
      ["Bonds", E ? String(E.bonds) : ke, !1]
    ];
    for (const [n, s, u] of _) {
      const k = F("div", "display:flex;align-items:baseline;gap:6px;min-width:0;");
      k.appendChild(
        F(
          "span",
          `font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;flex-shrink:0;color:${x.textMuted2};`,
          n
        )
      );
      const R = F(
        "span",
        `user-select:text;cursor:text;color:${x.textPrimary}` + (u ? ";font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:11px;overflow-wrap:anywhere;" : ""),
        s
      );
      R.title = s, k.appendChild(R), w.appendChild(k);
    }
    if (!o || !o.trim())
      return b.appendChild(ce("No molecule provided")), S.container.appendChild(ce("No molecule provided")), {};
    b.appendChild(ce("Loading 2D depiction...")), pr().then((n) => {
      const s = mr(n, o, lo);
      s ? Ei(b, s, lo) : b.replaceChildren(ce("Failed to parse molecule", !0));
    }).catch((n) => {
      b.replaceChildren(ce(`RDKit failed to load: ${_e(n)}`, !0));
    });
    let d = null, m = "stick", c = !1;
    const p = F(
      "div",
      `position:absolute;bottom:10px;right:10px;display:flex;gap:4px;padding:4px;border-radius:6px;z-index:10;background:${x.switcherBg};box-shadow:0 2px 8px rgba(0,0,0,0.25);`
    );
    p.appendChild(
      yo(Pi, m, (n) => {
        m = n, d && (d.setStyle({}, co[n]), d.render());
      })
    );
    const $ = F("button", `${yr}margin-left:4px;`, "Spin");
    return $.title = "Toggle continuous rotation", $.onclick = () => {
      c = !c, $.style.background = c ? x.btnBgActive : x.btnBg;
      try {
        d?.spin(c ? "y" : !1);
      } catch {
      }
    }, p.appendChild($), v.appendChild(p), S.container.appendChild(ce("Loading 3D viewer...")), Oo().then(() => {
      S.container.replaceChildren(), d = Ve.createViewer(S.container, { backgroundColor: x.viewerBg }), d.addModel(Si(o), "sdf"), d.setStyle({}, co[m]), d.zoomTo(), d.render();
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
Ht("gufe-small-molecule", ki);
const To = ["HOH", "WAT", "SOL", "TIP3"], uo = { hetflag: !1 }, Ri = { hetflag: !0 }, Ci = { resn: To }, Pe = {
  stick: { radius: 0.15 },
  sphere: { scale: 0.3 },
  hetero: { stickRadius: 0.2, sphereScale: 0.28 },
  water: { stickRadius: 0.05, sphereScale: 0.18 },
  surfaceOpacity: 0.85,
  /** Above this many atoms a surface is slow enough to be worth warning about. */
  surfaceAtomWarn: 4e4
};
function Ni(e) {
  const t = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Set();
  let o = 0, h = 0, r = 0, i = 1 / 0, l = -1 / 0;
  for (const f of e.split(/\r?\n/)) {
    const v = f.slice(0, 6);
    if (v === "ENDMDL") break;
    if (v !== "ATOM  " && v !== "HETATM") continue;
    o++, v === "HETATM" && h++;
    const g = f.slice(17, 20).trim(), b = f.slice(21, 22).trim() || "_", S = f.slice(22, 26).trim(), w = f.slice(26, 27).trim();
    To.indexOf(g) !== -1 && r++, t.add(b), a.add(`${b}|${S}${w}|${g}`);
    const E = parseInt(S, 10);
    isNaN(E) || (E < i && (i = E), E > l && (l = E));
  }
  return {
    chains: t.size,
    residues: a.size,
    atoms: o,
    hetatms: h,
    waters: r,
    heteroNonWater: h - r,
    resiMin: i === 1 / 0 ? 0 : i,
    resiMax: l === -1 / 0 ? 0 : l
  };
}
function ji(e) {
  return `${Le(e.chains)} chains · ${Le(e.residues)} residues · ${Le(e.atoms)} atoms · ${Le(e.hetatms)} HETATM` + (e.waters > 0 ? ` (${Le(e.waters)} water)` : "");
}
function Ai(e, t) {
  return e === "chain" ? { colorscheme: "chain" } : e === "ss" ? { colorscheme: "ssJmol" } : e === "spectrum" && t && t.resiMax > t.resiMin ? { colorscheme: { prop: "resi", gradient: "roygb", min: t.resiMin, max: t.resiMax } } : { colorscheme: "Jmol" };
}
function fo(e, t, a, o) {
  const h = o || (() => {
  }), r = Ai(t.color, a);
  try {
    e.removeAllSurfaces();
  } catch {
  }
  if (e.setStyle({}, {}), e.setStyle(
    uo,
    t.rep === "stick" ? { stick: { radius: Pe.stick.radius, ...r } } : t.rep === "sphere" ? { sphere: { scale: Pe.sphere.scale, ...r } } : (
      // For 'surface' the shell is added separately; leave the atoms bare so
      // it is not cluttered from the inside.
      t.rep === "surface" ? {} : { cartoon: { ...r } }
    )
  ), e.setStyle(
    Ri,
    t.hetero ? {
      stick: { radius: Pe.hetero.stickRadius, colorscheme: "Jmol" },
      sphere: { scale: Pe.hetero.sphereScale, colorscheme: "Jmol" }
    } : {}
  ), e.setStyle(
    Ci,
    t.waters ? {
      stick: { radius: Pe.water.stickRadius, colorscheme: "Jmol" },
      sphere: { scale: Pe.water.sphereScale, colorscheme: "Jmol" }
    } : {}
  ), t.rep !== "surface") {
    h(null), e.render();
    return;
  }
  h(
    a && a.atoms > Pe.surfaceAtomWarn ? "Computing surface (large structure, this may take a while)..." : "Computing surface..."
  ), e.render(), setTimeout(() => {
    try {
      Promise.resolve(
        e.addSurface(Ve.SurfaceType.VDW, { opacity: Pe.surfaceOpacity, ...r }, uo)
      ).then(() => {
        h(null), e.render();
      }).catch((i) => h(`Surface failed: ${_e(i)}`, "error"));
    } catch (i) {
      h(`Surface failed: ${_e(i)}`, "error");
    }
  }, 30);
}
const Oi = [
  { id: "cartoon", label: "Cartoon", title: "Ribbon / cartoon backbone" },
  { id: "surface", label: "Surface", title: "Molecular (VDW) surface" },
  { id: "stick", label: "Stick", title: "All-atom sticks" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" }
], Ti = [
  { id: "chain", label: "Chain" },
  { id: "spectrum", label: "Spectrum" },
  { id: "ss", label: "Secondary structure" },
  { id: "element", label: "Element" }
];
class Mi extends Kt {
  placeholder() {
    return "Waiting for a ProteinComponent payload...";
  }
  renderView(t, a) {
    const o = a.pdb, h = a.name ?? "", r = { rep: "cartoon", color: "chain", waters: !1, hetero: !0 };
    let i = null, l = null;
    const f = F(
      "div",
      `display:flex;align-items:center;gap:14px;flex-wrap:wrap;padding:8px 14px;flex-shrink:0;font-size:12px;background:${x.toolbarBg};border-bottom:1px solid ${x.toolbarBorder};color:${x.textPrimary};`
    );
    t.appendChild(f), f.appendChild(
      F("span", `font-weight:700;font-size:14px;letter-spacing:.02em;color:${x.titleColor};`, h || "Protein")
    );
    const v = (c) => F("span", `font-size:11px;color:${x.textMuted};`, c);
    f.appendChild(v("Style:")), f.appendChild(
      yo(Oi, r.rep, (c) => {
        r.rep = c, m();
      })
    ), f.appendChild(v("Color:"));
    const g = F("select", mo);
    for (const c of Ti) {
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
      const s = F("button", yr, p);
      s.title = $, s.style.background = r[c] ? x.btnBgActive : x.btnBg, s.onclick = () => {
        r[c] = !r[c], s.style.background = r[c] ? x.btnBgActive : x.btnBg, n();
      }, b.appendChild(s);
    }
    const w = F("span", `margin-left:auto;font-size:11px;white-space:nowrap;color:${x.textMuted2};`);
    f.appendChild(w);
    const E = vo();
    t.appendChild(E.wrap);
    const _ = F(
      "div",
      "position:absolute;top:12px;left:50%;transform:translateX(-50%);padding:6px 14px;border-radius:6px;font-size:12px;z-index:20;display:none;pointer-events:none;"
    );
    E.wrap.appendChild(_);
    const d = (c, p) => {
      if (c == null) {
        _.style.display = "none";
        return;
      }
      _.textContent = c, _.style.display = "block";
      const $ = p === "error";
      _.style.background = $ ? x.warnBg : x.toolbarBg, _.style.color = $ ? x.warnFg : x.textMuted, _.style.border = `1px solid ${$ ? x.warnBorder : x.toolbarBorder}`;
    };
    function m() {
      i && fo(i, r, l, d);
    }
    if (!o || !o.trim())
      return d("No protein data - waiting for a PDB payload."), {};
    try {
      l = Ni(o), w.textContent = ji(l);
    } catch (c) {
      d(`⚠ PDB parse error: ${_e(c)}`, "error");
    }
    return d("Loading 3D viewer..."), Oo().then(() => {
      i = Ve.createViewer(E.container, { backgroundColor: x.viewerBg }), i.addModel(o, "pdb"), fo(i, r, l, d), i.zoomTo(), i.spin(r.spin ? "y" : !1), i.render();
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
Ht("gufe-protein", Mi);
const Ii = ["Force-directed", "Circular", "Radial"], Lt = 34, Ke = 200, fr = 1.5, qi = 6, Di = 16, he = {
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
}, Mo = "http://www.w3.org/2000/svg";
function ae(e, t = {}) {
  const a = document.createElementNS(Mo, e);
  for (const [o, h] of Object.entries(t)) a.setAttribute(o, String(h));
  return a;
}
function po(e, t) {
  const a = document.createElementNS(Mo, "title");
  return a.textContent = t, e.appendChild(a), e;
}
function zi(e) {
  const t = parseInt(e.replace("#", ""), 16);
  return [t >> 16 & 255, t >> 8 & 255, t & 255];
}
function ho(e) {
  const [t, a] = x.netEdgeRamp.map(zi), o = Math.max(0, Math.min(1, e ?? 0.5));
  return `rgb(${t.map((r, i) => Math.round(r + (a[i] - r) * o)).join(",")})`;
}
function je(e) {
  return e.name ? e.name : (e.id.split("-").pop() ?? e.id).slice(0, 6);
}
const Vi = (e, t) => e.length > t ? `${e.slice(0, t - 1)}...` : e;
function xi(e) {
  const t = je(e.from), a = je(e.to);
  return {
    type: "LigandAtomMappingViz",
    name: t || a ? `${t} -> ${a}` : "",
    molA_sdf: e.from.sdf,
    molB_sdf: e.to.sdf,
    nameA: t,
    nameB: a,
    componentA_to_componentB: e.componentA_to_componentB ?? {},
    annotations: e.annotations ?? {}
  };
}
class Li extends Kt {
  placeholder() {
    return "Waiting for a LigandNetwork payload...";
  }
  renderView(t, a) {
    const o = (a.nodes ?? []).map((u) => ({ ...u, x: 0, y: 0 })), h = new Map(o.map((u) => [u.id, u])), r = [];
    let i = 0;
    for (const u of a.edges ?? []) {
      const k = h.get(u.source), R = h.get(u.target);
      if (!k || !R) {
        i++;
        continue;
      }
      r.push({ ...u, index: r.length, from: k, to: R });
    }
    const l = go(a.name || "Ligand network", "LigandNetwork");
    l.statsEl.appendChild(Oe("ligands", String(o.length))), l.statsEl.appendChild(Oe("mappings", String(r.length))), t.appendChild(l);
    const f = F("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    t.appendChild(f);
    const v = F("div", `flex:1 1 58%;min-width:0;display:flex;flex-direction:column;background:${x.netCanvasBg};`), g = F("div", `flex:1 1 42%;min-width:0;display:flex;flex-direction:column;background:${x.appBg};`);
    f.appendChild(v), f.appendChild(F("div", `width:1px;flex-shrink:0;background:${x.splitBorder};`)), f.appendChild(g);
    const b = F("div", `flex:1;position:relative;overflow:hidden;min-height:0;background:${x.netCanvasBg};`);
    v.appendChild(b);
    const S = this.#r((u) => s(u));
    v.appendChild(S.bar);
    const w = this.#e(g);
    if (!o.length)
      return b.appendChild(ce("This network has no ligands.")), w.message("Nothing to show."), {};
    i && jr(b, `${i} mapping${i === 1 ? "" : "s"} name a ligand this network does not contain`);
    const E = pr().catch((u) => (console.warn("[gufe-viz] RDKit failed to load:", _e(u)), null));
    let _ = r.length ? 0 : -1, d = null, m = "Force-directed", c = !1, p = !0, $ = () => {
    };
    const n = (u) => {
      _ = u, w.show(r[u] ?? null), $();
    }, s = (u = m) => {
      m = u, d?.(), d = null, b.querySelector("svg")?.remove();
      const k = b.clientWidth || 800, R = b.clientHeight || 600;
      Bi(o, k, R, m, r);
      const O = () => {
        if (!p) return;
        const M = this.#n(b, o, r, k, R, n);
        $ = () => M.setSelected(_), d = M.cleanup, $(), E.then((T) => T && M.depict(T)).catch(() => {
        });
      };
      if (m !== "Force-directed" || c) {
        O();
        return;
      }
      Fi(o, r, k, R).then((M) => {
        if (p) {
          if (M) {
            O();
            return;
          }
          c = !0, S.picker.value = "Circular", jr(b, "d3 could not be loaded - showing the circular layout instead"), s("Circular");
        }
      }, O);
    };
    return s(), w.show(r[_] ?? null), {
      onResize: () => s(),
      cleanup: () => {
        p = !1, d?.();
      }
    };
  }
  #r(t) {
    const a = F(
      "div",
      `display:flex;align-items:center;gap:10px;flex-wrap:wrap;padding:8px 14px;flex-shrink:0;background:${x.toolbarBg};border-top:1px solid ${x.toolbarBorder};`
    ), o = F("div", `display:flex;align-items:center;gap:6px;font-size:11px;color:${x.textMuted};`);
    o.appendChild(F("span", "", "score")), o.appendChild(
      F(
        "span",
        `width:40px;height:4px;border-radius:2px;background:linear-gradient(to right,${x.netEdgeRamp.join(",")});`
      )
    ), o.appendChild(F("span", "", "0 -> 1")), a.appendChild(o), a.appendChild(F("label", `font-size:12px;margin-left:auto;color:${x.textMuted};`, "Layout"));
    const h = F("select", mo);
    for (const r of Ii) {
      const i = F("option", "", r);
      i.value = r, h.appendChild(i);
    }
    return h.onchange = () => t(h.value), a.appendChild(h), { bar: a, picker: h };
  }
  /** The right-hand pane: what the selected mapping is, in words and pictures. */
  #e(t) {
    const a = F(
      "div",
      `flex-shrink:0;padding:4px 10px;font-size:12px;font-weight:bold;color:${x.labelFg};background:${x.labelBg};`,
      "Selected mapping"
    ), o = F("div", "flex:1;min-height:0;overflow:auto;display:flex;flex-direction:column;");
    t.appendChild(a), t.appendChild(o);
    const h = (i) => o.replaceChildren(ce(i));
    return { show: (i) => {
      if (!i) {
        h("Click an edge to see its mapping.");
        return;
      }
      const l = xi(i);
      o.replaceChildren();
      const f = F(
        "div",
        `padding:10px 14px;font-size:13px;font-weight:600;color:${x.textPrimary};border-bottom:1px solid ${x.toolbarBorder};`,
        `${l.nameA} -> ${l.nameB}`
      );
      o.appendChild(f);
      const v = F("div", "display:flex;flex-direction:row;min-height:180px;");
      o.appendChild(v);
      const g = [l.molA_sdf, l.molB_sdf].map((d, m) => {
        const c = F("div", "flex:1 1 50%;min-width:0;display:flex;flex-direction:column;");
        c.appendChild(
          F("div", `padding:4px 10px;font-size:11px;color:${x.textMuted2};`, m === 0 ? "A" : "B")
        );
        const p = F(
          "div",
          `flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:6px;background:${x.canvas2DBg};`
        );
        return p.appendChild(ce("...")), c.appendChild(p), v.appendChild(c), { box: p, sdf: d };
      }), b = Object.keys(l.componentA_to_componentB ?? {}).length, S = hr(l.molA_sdf), w = hr(l.molB_sdf), E = F(
        "div",
        `display:flex;flex-wrap:wrap;gap:8px 16px;padding:10px 14px;font-size:11px;color:${x.textMuted};border-top:1px solid ${x.toolbarBorder};`
      );
      E.appendChild(Oe("score", i.score == null ? ke : i.score.toFixed(3), ho(i.score))), E.appendChild(Oe("mapped atoms", String(b))), E.appendChild(Oe("atoms A", S ? String(S.atoms) : ke)), E.appendChild(Oe("atoms B", w ? String(w.atoms) : ke)), o.appendChild(E);
      const _ = Object.entries(l.annotations ?? {}).filter(([d]) => d !== "score");
      if (_.length) {
        const d = F(
          "div",
          `padding:0 14px 12px;font-size:11px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;color:${x.textMuted2};`
        );
        for (const [m, c] of _)
          d.appendChild(F("div", "", `${m}: ${String(c)}`));
        o.appendChild(d);
      }
      pr().then((d) => {
        for (const { box: m, sdf: c } of g) {
          const p = mr(d, c, Ke);
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
  #n(t, a, o, h, r, i) {
    const l = ae("svg", { width: h, height: r, style: "display:block;touch-action:none;" }), f = ae("g");
    l.appendChild(f), t.appendChild(l);
    const v = [], g = ae("g"), b = ae("g"), S = ae("g", { "pointer-events": "none" }), w = ae("g");
    f.append(g, b, S, w);
    for (const p of o) {
      const $ = ho(p.score), n = ae("line", {
        stroke: x.netHaloColor,
        "stroke-width": fr + 12,
        "stroke-linecap": "round",
        opacity: 0,
        "pointer-events": "none"
      }), s = ae("line", {
        stroke: $,
        "stroke-width": fr + (p.score ?? 0.5) * (qi - fr),
        "stroke-opacity": 0.9,
        "pointer-events": "none"
      }), u = po(
        ae("line", { stroke: "transparent", "stroke-width": Di, style: "cursor:pointer;" }),
        `${je(p.from)} -> ${je(p.to)}${p.score == null ? "" : `
score ${p.score.toFixed(3)}`}`
      );
      if (u.addEventListener("click", (k) => {
        k.stopPropagation(), i(p.index);
      }), v.push(n), g.append(n, s), b.appendChild(u), p.score != null) {
        const k = ae("text", {
          "text-anchor": "middle",
          "dominant-baseline": "middle",
          "font-size": 10,
          "font-weight": 600,
          fill: x.netEdgeLabel
        });
        k.textContent = p.score.toFixed(2), S.appendChild(k);
      } else
        S.appendChild(ae("text"));
    }
    const E = [], _ = [], d = a.map((p) => {
      const $ = po(ae("g", { style: "cursor:grab;" }), `${je(p)}
${p.smiles ?? ""}
id: ${p.id}`);
      $.appendChild(
        ae("circle", {
          r: Lt,
          fill: x.netNodeFill,
          stroke: x.netNodeStroke,
          "stroke-width": 1.5
        })
      );
      const n = ae("g", { "pointer-events": "none" });
      $.appendChild(n), E.push(n);
      const s = ae("text", {
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        "font-size": 16,
        "font-weight": 700,
        fill: x.netInitials,
        "pointer-events": "none"
      });
      s.textContent = je(p).slice(0, 2).toUpperCase(), $.appendChild(s), _.push(s);
      const u = ae("text", {
        "text-anchor": "middle",
        y: Lt + 14,
        "font-size": 11,
        "font-weight": 600,
        fill: x.netNodeLabel,
        "pointer-events": "none"
      });
      return u.textContent = Vi(je(p), 16), $.appendChild(u), w.appendChild($), $;
    }), m = () => {
      o.forEach((p, $) => {
        for (const s of [v[$], g.children[$ * 2 + 1], b.children[$]]) {
          const u = s;
          u.setAttribute("x1", String(p.from.x)), u.setAttribute("y1", String(p.from.y)), u.setAttribute("x2", String(p.to.x)), u.setAttribute("y2", String(p.to.y));
        }
        const n = S.children[$];
        n.setAttribute("x", String((p.from.x + p.to.x) / 2)), n.setAttribute("y", String((p.from.y + p.to.y) / 2 - 8));
      }), a.forEach((p, $) => d[$].setAttribute("transform", `translate(${p.x},${p.y})`));
    };
    m();
    const c = this.#t(l, f, a, d, m);
    return {
      setSelected(p) {
        v.forEach(($, n) => $.setAttribute("opacity", n === p ? "0.95" : "0"));
      },
      depict(p) {
        const $ = (Lt - 4) * 2 / Ke, n = new DOMParser();
        let s = 0;
        return a.forEach((u, k) => {
          const R = u.sdf && mr(p, u.sdf, Ke);
          if (!R) return;
          const O = n.parseFromString(R, "image/svg+xml").documentElement;
          if (!O || O.nodeName.toLowerCase() === "parsererror") return;
          const M = E[k];
          M.setAttribute(
            "transform",
            `translate(${-$ * Ke / 2},${-$ * Ke / 2}) scale(${$})`
          );
          let T = 0;
          for (const q of Array.from(O.childNodes)) {
            if (q.nodeType !== 1) continue;
            const H = q.nodeName.toLowerCase();
            if (!(H === "defs" || H === "metadata" || H === "title")) {
              if (H === "rect") {
                const ee = (q.getAttribute("fill") ?? "").toLowerCase();
                if (ee === "#ffffff" || ee === "white" || ee === "rgb(255,255,255)") continue;
              }
              M.appendChild(document.importNode(q, !0)), T++;
            }
          }
          T && (_[k].setAttribute("display", "none"), s++);
        }), s;
      },
      cleanup: c.cleanup
    };
  }
  /** Wheel zoom, background pan, node drag - ~40 lines instead of d3-zoom and
   * d3-drag, and they keep working when d3 is unreachable. */
  #t(t, a, o, h, r) {
    let i = 1, l = 0, f = 0;
    const v = () => a.setAttribute("transform", `translate(${l},${f}) scale(${i})`), g = (_) => {
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
    }, E = () => {
      b = null;
    };
    return t.addEventListener("pointerdown", S), t.addEventListener("pointermove", w), t.addEventListener("pointerup", E), t.addEventListener("pointercancel", E), t.addEventListener("pointerleave", E), h.forEach((_, d) => {
      let m = null;
      _.addEventListener("pointerdown", (p) => {
        p.stopPropagation(), m = { x: p.clientX - o[d].x * i, y: p.clientY - o[d].y * i }, _.setPointerCapture(p.pointerId);
      }), _.addEventListener("pointermove", (p) => {
        m && (o[d].x = o[d].fx = (p.clientX - m.x) / i, o[d].y = o[d].fy = (p.clientY - m.y) / i, r());
      });
      const c = () => {
        m = null;
      };
      _.addEventListener("pointerup", c), _.addEventListener("pointercancel", c);
    }), {
      cleanup() {
        t.removeEventListener("wheel", g), t.removeEventListener("pointerdown", S), t.removeEventListener("pointermove", w), t.removeEventListener("pointerup", E), t.removeEventListener("pointercancel", E), t.removeEventListener("pointerleave", E);
      }
    };
  }
}
function Bi(e, t, a, o, h) {
  const r = t / 2, i = a / 2, l = (f, v) => {
    f.forEach((g, b) => {
      const S = 2 * Math.PI * b / Math.max(1, f.length) - Math.PI / 2;
      g.x = r + v * Math.cos(S), g.y = i + v * Math.sin(S), g.fx = o === "Force-directed" ? void 0 : g.x, g.fy = o === "Force-directed" ? void 0 : g.y;
    });
  };
  if (o === "Radial" && e.length) {
    const f = new Map(e.map((_) => [_.id, []]));
    for (const _ of h)
      f.get(_.from.id).push(_.to.id), f.get(_.to.id).push(_.from.id);
    const v = new Map(e.map((_) => [_.id, _])), g = e.reduce(
      (_, d) => f.get(d.id).length > f.get(_.id).length ? d : _
    ), b = /* @__PURE__ */ new Set([g.id]);
    let S = [g.id], w = 0;
    const E = Math.min(t, a) * 0.18;
    for (; S.length; ) {
      l(
        S.map((d) => v.get(d)),
        w === 0 ? 0 : w * E + 40
      );
      const _ = [];
      for (const d of S)
        for (const m of f.get(d))
          b.has(m) || (b.add(m), _.push(m));
      S = _, w++;
    }
    l(e.filter((_) => !b.has(_.id)), Math.min(t, a) * 0.45);
    return;
  }
  l(e, Math.min(t, a) * 0.34);
}
async function Fi(e, t, a, o) {
  let h;
  try {
    if (h = await bi(), typeof h?.forceSimulation != "function") return !1;
  } catch {
    return !1;
  }
  const r = t.map((f) => ({ ...f, source: f.from.id, target: f.to.id })), i = h.forceSimulation(e).force(
    "link",
    h.forceLink(r).id((f) => f.id).distance((f) => he.linkBaseDistance + (1 - (f.score ?? 0.5)) * he.linkScoreBonus).strength(he.linkStrength)
  ).force(
    "charge",
    h.forceManyBody().strength(he.chargeStrength).distanceMin(he.chargeDistanceMin).distanceMax(he.chargeDistanceMax)
  ).force("center", h.forceCenter(a / 2, o / 2).strength(he.centerStrength)).force("collision", h.forceCollide(Lt + he.collisionPadding).iterations(he.collisionIterations)).force("x", h.forceX(a / 2).strength(he.drift)).force("y", h.forceY(o / 2).strength(he.drift)).stop(), l = Math.ceil(Math.log(i.alphaMin()) / Math.log(1 - i.alphaDecay()));
  for (let f = 0; f < l * he.tickMultiplier; f++) i.tick();
  return !0;
}
Ht("gufe-ligand-network", Li);
function Gi(e, t) {
  let a = e.querySelector("gufe-view");
  return a || (a = document.createElement("gufe-view"), a.style.cssText = "display:block;width:100%;height:100%;", e.appendChild(a)), t !== void 0 && (a.payload = t), a;
}
export {
  Kt as GufeElement,
  Li as GufeLigandNetwork,
  Mi as GufeProtein,
  ki as GufeSmallMolecule,
  vi as GufeView,
  Ui as PAYLOAD_TYPES,
  Ki as SCHEMA_TYPES,
  Er as VIEW_TAGS,
  Ht as defineElement,
  jo as describeProblem,
  Hi as dispatchProblem,
  yi as formatIssues,
  xi as mappingDataFor,
  Gi as mount,
  mi as validatePayload
};
