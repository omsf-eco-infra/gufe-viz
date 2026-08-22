const Ir = {
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
function zo() {
  try {
    return globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches ?? !1;
  } catch {
    return !1;
  }
}
const V = zo() ? Ir.dark : Ir.light;
function F(e, t, s) {
  const o = document.createElement(e);
  return t && (o.style.cssText = t), s != null && (o.textContent = s), o;
}
function Bt(e) {
  return String(e ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function $e(e) {
  if (e == null) return "unknown error";
  const t = e.message;
  if (typeof t == "string" && t) return t;
  const s = String(e);
  return s === "[object Object]" ? e.name || "unknown error" : s;
}
const Le = (e) => e.toLocaleString("en-US"), ke = "-", br = `background:${V.btnBg};color:${V.btnFg};border:1px solid ${V.btnBorder};padding:4px 9px;font-size:11px;font-weight:bold;border-radius:3px;cursor:pointer;font-family:inherit;`, $o = `background:${V.selectBg};color:${V.textPrimary};border:1px solid ${V.selectBorder};border-radius:6px;padding:4px 8px;font-size:12px;cursor:pointer;font-family:inherit;`;
function vo(e, t, s) {
  const o = F("div", "display:flex;gap:4px;"), p = e.map((r) => {
    const a = F("button", br, r.label);
    return a.title = r.title || r.label, a.onmouseover = () => {
      a.style.background = V.btnBgHover;
    }, a.onmouseout = () => {
      a.style.background = t === r.id ? V.btnBgActive : V.btnBg;
    }, a.onclick = () => {
      o.setActive(r.id), s(r.id);
    }, o.appendChild(a), { id: r.id, btn: a };
  });
  return o.setActive = (r) => {
    t = r, p.forEach((a) => {
      a.btn.style.background = a.id === t ? V.btnBgActive : V.btnBg;
    });
  }, o.setActive(t), o;
}
function Oe(e, t, s) {
  const o = F("span", "display:inline-flex;align-items:center;gap:5px;white-space:nowrap;");
  s && o.appendChild(
    F("span", `width:8px;height:8px;border-radius:50%;background:${s};display:inline-block;`)
  );
  const p = F("span");
  return p.innerHTML = `${Bt(e)} <b style="color:${V.textPrimary};">${Bt(t)}</b>`, o.appendChild(p), o;
}
function tr(e, t) {
  const s = F("div", "", `⚠ ${t}`);
  return s.style.cssText = `position:absolute;top:10px;left:50%;transform:translateX(-50%);max-width:90%;z-index:20;padding:6px 14px;border-radius:6px;font-size:12px;background:${V.warnBg};color:${V.warnFg};border:1px solid ${V.warnBorder};`, e.appendChild(s), s;
}
function ce(e, t = !1) {
  return F(
    "div",
    `flex:1;display:flex;align-items:center;justify-content:center;text-align:center;padding:24px;font-size:13px;color:${t ? V.errorFg : V.textMuted2};`,
    e
  );
}
function _o(e, t) {
  const s = F(
    "div",
    `display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;padding:9px 14px;flex-shrink:0;background:${V.toolbarBg};border-bottom:1px solid ${V.toolbarBorder};`
  );
  return s.titleEl = F("span", `font-weight:700;font-size:15px;color:${V.titleColor};letter-spacing:.02em;`, e), s.subtitleEl = F("span", `font-size:12px;color:${V.textMuted2};`, t || ""), s.statsEl = F(
    "div",
    `display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-left:auto;font-size:11px;color:${V.textMuted};`
  ), s.appendChild(s.titleEl), s.appendChild(s.subtitleEl), s.appendChild(s.statsEl), s;
}
function bo() {
  const e = F("div", "flex:1;position:relative;min-height:0;min-width:0;"), t = F("div", "position:absolute;inset:0;");
  return e.appendChild(t), { wrap: e, container: t };
}
const xo = ["debug", "gufe-debug"], Vo = "debug", Lo = "GUFE_VIZ_DEBUG";
function Bo() {
  return !!globalThis[Lo];
}
function Fo() {
  try {
    const e = globalThis.location?.search;
    if (!e) return !1;
    const t = new URLSearchParams(e);
    return xo.some((s) => t.has(s));
  } catch {
    return !1;
  }
}
function Ko(e) {
  return e?.hasAttribute?.(Vo) ? !0 : Bo() || Fo();
}
function Uo(e) {
  try {
    return JSON.stringify(e, null, 2) ?? String(e);
  } catch (t) {
    return `<could not be stringified: ${$e(t)}>`;
  }
}
function Ho(e, t, s) {
  if (!Ko(s)) return;
  const o = Uo(t), p = t?.type, r = `[gufe-viz] ${e}${typeof p == "string" ? ` ${p}` : ""} (${o.length} chars)`, a = typeof console.groupCollapsed == "function";
  a ? console.groupCollapsed(r) : console.log(r), console.log(o), console.log(t), a && console.groupEnd?.();
}
const Go = 150;
class Ut extends HTMLElement {
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
    this.style.display = "block", this.style.width = this.style.width || "100%", this.style.height = this.style.height || "100%", this.style.background = V.appBg, this.style.color = V.textPrimary, this.style.fontFamily = "'Inter',system-ui,sans-serif", typeof ResizeObserver < "u" && !this.#t && (this.#t = new ResizeObserver(() => {
      this.#o && clearTimeout(this.#o), this.#o = setTimeout(() => this.#e?.onResize?.(), Go);
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
      `width:100%;height:100%;display:flex;flex-direction:column;overflow:hidden;background:${V.appBg};`
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
    const t = this.#d(), s = this.#s;
    if (this.#r == null) {
      t.appendChild(ce(this.placeholder()));
      return;
    }
    let o;
    try {
      o = this.renderView(t, this.#r);
    } catch (p) {
      this.#l(t, s, p);
      return;
    }
    o instanceof Promise ? o.then(
      (p) => this.#c(p, s),
      (p) => this.#l(t, s, p)
    ) : this.#c(o, s);
  }
  /** Take ownership of a view's handle, unless it belongs to a dead render. */
  #c(t, s) {
    if (s !== this.#s || !this.isConnected) {
      try {
        t?.cleanup?.();
      } catch (o) {
        console.warn("[gufe-viz] cleanup of a superseded view failed:", o);
      }
      return;
    }
    this.#e = t || null;
  }
  #l(t, s, o) {
    s === this.#s && (console.warn("[gufe-viz] render failed:", o), t.replaceChildren(ce(`Failed to render: ${$e(o)}`, !0)));
  }
  /** Force a resize pass - for hosts that know they resized us. */
  resize() {
    this.#e?.onResize?.();
  }
}
function Ht(e, t) {
  typeof customElements > "u" || customElements.get(e) || customElements.define(e, t);
}
function Jo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var He = { exports: {} }, rr = {}, be = {}, Ce = {}, nr = {}, or = {}, sr = {}, qr;
function Ft() {
  return qr || (qr = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.regexpCode = e.getEsmExportName = e.getProperty = e.safeStringify = e.stringify = e.strConcat = e.addCodeArg = e.str = e._ = e.nil = e._Code = e.Name = e.IDENTIFIER = e._CodeOrName = void 0;
    class t {
    }
    e._CodeOrName = t, e.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
    class s extends t {
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
    e.Name = s;
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
        return (c = this._str) !== null && c !== void 0 ? c : this._str = this._items.reduce((f, _) => `${f}${_}`, "");
      }
      get names() {
        var c;
        return (c = this._names) !== null && c !== void 0 ? c : this._names = this._items.reduce((f, _) => (_ instanceof s && (f[_.str] = (f[_.str] || 0) + 1), f), {});
      }
    }
    e._Code = o, e.nil = new o("");
    function p(y, ...c) {
      const f = [y[0]];
      let _ = 0;
      for (; _ < c.length; )
        l(f, c[_]), f.push(y[++_]);
      return new o(f);
    }
    e._ = p;
    const r = new o("+");
    function a(y, ...c) {
      const f = [b(y[0])];
      let _ = 0;
      for (; _ < c.length; )
        f.push(r), l(f, c[_]), f.push(r, b(y[++_]));
      return d(f), new o(f);
    }
    e.str = a;
    function l(y, c) {
      c instanceof o ? y.push(...c._items) : c instanceof s ? y.push(c) : y.push(w(c));
    }
    e.addCodeArg = l;
    function d(y) {
      let c = 1;
      for (; c < y.length - 1; ) {
        if (y[c] === r) {
          const f = $(y[c - 1], y[c + 1]);
          if (f !== void 0) {
            y.splice(c - 1, 3, f);
            continue;
          }
          y[c++] = "+";
        }
        c++;
      }
    }
    function $(y, c) {
      if (c === '""')
        return y;
      if (y === '""')
        return c;
      if (typeof y == "string")
        return c instanceof s || y[y.length - 1] !== '"' ? void 0 : typeof c != "string" ? `${y.slice(0, -1)}${c}"` : c[0] === '"' ? y.slice(0, -1) + c.slice(1) : void 0;
      if (typeof c == "string" && c[0] === '"' && !(y instanceof s))
        return `"${y}${c.slice(1)}`;
    }
    function g(y, c) {
      return c.emptyStr() ? y : y.emptyStr() ? c : a`${y}${c}`;
    }
    e.strConcat = g;
    function w(y) {
      return typeof y == "number" || typeof y == "boolean" || y === null ? y : b(Array.isArray(y) ? y.join(",") : y);
    }
    function S(y) {
      return new o(b(y));
    }
    e.stringify = S;
    function b(y) {
      return JSON.stringify(y).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    e.safeStringify = b;
    function E(y) {
      return typeof y == "string" && e.IDENTIFIER.test(y) ? new o(`.${y}`) : p`[${y}]`;
    }
    e.getProperty = E;
    function v(y) {
      if (typeof y == "string" && e.IDENTIFIER.test(y))
        return new o(`${y}`);
      throw new Error(`CodeGen: invalid export name: ${y}, use explicit $id name mapping`);
    }
    e.getEsmExportName = v;
    function u(y) {
      return new o(y.toString());
    }
    e.regexpCode = u;
  })(sr)), sr;
}
var ar = {}, Dr;
function zr() {
  return Dr || (Dr = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0;
    const t = /* @__PURE__ */ Ft();
    class s extends Error {
      constructor($) {
        super(`CodeGen: "code" for ${$} not defined`), this.value = $.value;
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
    class p {
      constructor({ prefixes: $, parent: g } = {}) {
        this._names = {}, this._prefixes = $, this._parent = g;
      }
      toName($) {
        return $ instanceof t.Name ? $ : this.name($);
      }
      name($) {
        return new t.Name(this._newName($));
      }
      _newName($) {
        const g = this._names[$] || this._nameGroup($);
        return `${$}${g.index++}`;
      }
      _nameGroup($) {
        var g, w;
        if (!((w = (g = this._parent) === null || g === void 0 ? void 0 : g._prefixes) === null || w === void 0) && w.has($) || this._prefixes && !this._prefixes.has($))
          throw new Error(`CodeGen: prefix "${$}" is not allowed in this scope`);
        return this._names[$] = { prefix: $, index: 0 };
      }
    }
    e.Scope = p;
    class r extends t.Name {
      constructor($, g) {
        super(g), this.prefix = $;
      }
      setValue($, { property: g, itemIndex: w }) {
        this.value = $, this.scopePath = (0, t._)`.${new t.Name(g)}[${w}]`;
      }
    }
    e.ValueScopeName = r;
    const a = (0, t._)`\n`;
    class l extends p {
      constructor($) {
        super($), this._values = {}, this._scope = $.scope, this.opts = { ...$, _n: $.lines ? a : t.nil };
      }
      get() {
        return this._scope;
      }
      name($) {
        return new r($, this._newName($));
      }
      value($, g) {
        var w;
        if (g.ref === void 0)
          throw new Error("CodeGen: ref must be passed in value");
        const S = this.toName($), { prefix: b } = S, E = (w = g.key) !== null && w !== void 0 ? w : g.ref;
        let v = this._values[b];
        if (v) {
          const c = v.get(E);
          if (c)
            return c;
        } else
          v = this._values[b] = /* @__PURE__ */ new Map();
        v.set(E, S);
        const u = this._scope[b] || (this._scope[b] = []), y = u.length;
        return u[y] = g.ref, S.setValue(g, { property: b, itemIndex: y }), S;
      }
      getValue($, g) {
        const w = this._values[$];
        if (w)
          return w.get(g);
      }
      scopeRefs($, g = this._values) {
        return this._reduceValues(g, (w) => {
          if (w.scopePath === void 0)
            throw new Error(`CodeGen: name "${w}" has no value`);
          return (0, t._)`${$}${w.scopePath}`;
        });
      }
      scopeCode($ = this._values, g, w) {
        return this._reduceValues($, (S) => {
          if (S.value === void 0)
            throw new Error(`CodeGen: name "${S}" has no value`);
          return S.value.code;
        }, g, w);
      }
      _reduceValues($, g, w = {}, S) {
        let b = t.nil;
        for (const E in $) {
          const v = $[E];
          if (!v)
            continue;
          const u = w[E] = w[E] || /* @__PURE__ */ new Map();
          v.forEach((y) => {
            if (u.has(y))
              return;
            u.set(y, o.Started);
            let c = g(y);
            if (c) {
              const f = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
              b = (0, t._)`${b}${f} ${y} = ${c};${this.opts._n}`;
            } else if (c = S?.(y))
              b = (0, t._)`${b}${c}${this.opts._n}`;
            else
              throw new s(y);
            u.set(y, o.Completed);
          });
        }
        return b;
      }
    }
    e.ValueScope = l;
  })(ar)), ar;
}
var xr;
function G() {
  return xr || (xr = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
    const t = /* @__PURE__ */ Ft(), s = /* @__PURE__ */ zr();
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
    var p = /* @__PURE__ */ zr();
    Object.defineProperty(e, "Scope", { enumerable: !0, get: function() {
      return p.Scope;
    } }), Object.defineProperty(e, "ValueScope", { enumerable: !0, get: function() {
      return p.ValueScope;
    } }), Object.defineProperty(e, "ValueScopeName", { enumerable: !0, get: function() {
      return p.ValueScopeName;
    } }), Object.defineProperty(e, "varKinds", { enumerable: !0, get: function() {
      return p.varKinds;
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
      optimizeNames(m, P) {
        return this;
      }
    }
    class a extends r {
      constructor(m, P, I) {
        super(), this.varKind = m, this.name = P, this.rhs = I;
      }
      render({ es5: m, _n: P }) {
        const I = m ? s.varKinds.var : this.varKind, B = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
        return `${I} ${this.name}${B};` + P;
      }
      optimizeNames(m, P) {
        if (m[this.name.str])
          return this.rhs && (this.rhs = K(this.rhs, m, P)), this;
      }
      get names() {
        return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
      }
    }
    class l extends r {
      constructor(m, P, I) {
        super(), this.lhs = m, this.rhs = P, this.sideEffects = I;
      }
      render({ _n: m }) {
        return `${this.lhs} = ${this.rhs};` + m;
      }
      optimizeNames(m, P) {
        if (!(this.lhs instanceof t.Name && !m[this.lhs.str] && !this.sideEffects))
          return this.rhs = K(this.rhs, m, P), this;
      }
      get names() {
        const m = this.lhs instanceof t.Name ? {} : { ...this.lhs.names };
        return q(m, this.rhs);
      }
    }
    class d extends l {
      constructor(m, P, I, B) {
        super(m, I, B), this.op = P;
      }
      render({ _n: m }) {
        return `${this.lhs} ${this.op}= ${this.rhs};` + m;
      }
    }
    class $ extends r {
      constructor(m) {
        super(), this.label = m, this.names = {};
      }
      render({ _n: m }) {
        return `${this.label}:` + m;
      }
    }
    class g extends r {
      constructor(m) {
        super(), this.label = m, this.names = {};
      }
      render({ _n: m }) {
        return `break${this.label ? ` ${this.label}` : ""};` + m;
      }
    }
    class w extends r {
      constructor(m) {
        super(), this.error = m;
      }
      render({ _n: m }) {
        return `throw ${this.error};` + m;
      }
      get names() {
        return this.error.names;
      }
    }
    class S extends r {
      constructor(m) {
        super(), this.code = m;
      }
      render({ _n: m }) {
        return `${this.code};` + m;
      }
      optimizeNodes() {
        return `${this.code}` ? this : void 0;
      }
      optimizeNames(m, P) {
        return this.code = K(this.code, m, P), this;
      }
      get names() {
        return this.code instanceof t._CodeOrName ? this.code.names : {};
      }
    }
    class b extends r {
      constructor(m = []) {
        super(), this.nodes = m;
      }
      render(m) {
        return this.nodes.reduce((P, I) => P + I.render(m), "");
      }
      optimizeNodes() {
        const { nodes: m } = this;
        let P = m.length;
        for (; P--; ) {
          const I = m[P].optimizeNodes();
          Array.isArray(I) ? m.splice(P, 1, ...I) : I ? m[P] = I : m.splice(P, 1);
        }
        return m.length > 0 ? this : void 0;
      }
      optimizeNames(m, P) {
        const { nodes: I } = this;
        let B = I.length;
        for (; B--; ) {
          const H = I[B];
          H.optimizeNames(m, P) || (ee(m, H.names), I.splice(B, 1));
        }
        return I.length > 0 ? this : void 0;
      }
      get names() {
        return this.nodes.reduce((m, P) => T(m, P.names), {});
      }
    }
    class E extends b {
      render(m) {
        return "{" + m._n + super.render(m) + "}" + m._n;
      }
    }
    class v extends b {
    }
    class u extends E {
    }
    u.kind = "else";
    class y extends E {
      constructor(m, P) {
        super(P), this.condition = m;
      }
      render(m) {
        let P = `if(${this.condition})` + super.render(m);
        return this.else && (P += "else " + this.else.render(m)), P;
      }
      optimizeNodes() {
        super.optimizeNodes();
        const m = this.condition;
        if (m === !0)
          return this.nodes;
        let P = this.else;
        if (P) {
          const I = P.optimizeNodes();
          P = this.else = Array.isArray(I) ? new u(I) : I;
        }
        if (P)
          return m === !1 ? P instanceof y ? P : P.nodes : this.nodes.length ? this : new y(te(m), P instanceof y ? [P] : P.nodes);
        if (!(m === !1 || !this.nodes.length))
          return this;
      }
      optimizeNames(m, P) {
        var I;
        if (this.else = (I = this.else) === null || I === void 0 ? void 0 : I.optimizeNames(m, P), !!(super.optimizeNames(m, P) || this.else))
          return this.condition = K(this.condition, m, P), this;
      }
      get names() {
        const m = super.names;
        return q(m, this.condition), this.else && T(m, this.else.names), m;
      }
    }
    y.kind = "if";
    class c extends E {
    }
    c.kind = "for";
    class f extends c {
      constructor(m) {
        super(), this.iteration = m;
      }
      render(m) {
        return `for(${this.iteration})` + super.render(m);
      }
      optimizeNames(m, P) {
        if (super.optimizeNames(m, P))
          return this.iteration = K(this.iteration, m, P), this;
      }
      get names() {
        return T(super.names, this.iteration.names);
      }
    }
    class _ extends c {
      constructor(m, P, I, B) {
        super(), this.varKind = m, this.name = P, this.from = I, this.to = B;
      }
      render(m) {
        const P = m.es5 ? s.varKinds.var : this.varKind, { name: I, from: B, to: H } = this;
        return `for(${P} ${I}=${B}; ${I}<${H}; ${I}++)` + super.render(m);
      }
      get names() {
        const m = q(super.names, this.from);
        return q(m, this.to);
      }
    }
    class n extends c {
      constructor(m, P, I, B) {
        super(), this.loop = m, this.varKind = P, this.name = I, this.iterable = B;
      }
      render(m) {
        return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(m);
      }
      optimizeNames(m, P) {
        if (super.optimizeNames(m, P))
          return this.iterable = K(this.iterable, m, P), this;
      }
      get names() {
        return T(super.names, this.iterable.names);
      }
    }
    class i extends E {
      constructor(m, P, I) {
        super(), this.name = m, this.args = P, this.async = I;
      }
      render(m) {
        return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(m);
      }
    }
    i.kind = "func";
    class h extends b {
      render(m) {
        return "return " + super.render(m);
      }
    }
    h.kind = "return";
    class C extends E {
      render(m) {
        let P = "try" + super.render(m);
        return this.catch && (P += this.catch.render(m)), this.finally && (P += this.finally.render(m)), P;
      }
      optimizeNodes() {
        var m, P;
        return super.optimizeNodes(), (m = this.catch) === null || m === void 0 || m.optimizeNodes(), (P = this.finally) === null || P === void 0 || P.optimizeNodes(), this;
      }
      optimizeNames(m, P) {
        var I, B;
        return super.optimizeNames(m, P), (I = this.catch) === null || I === void 0 || I.optimizeNames(m, P), (B = this.finally) === null || B === void 0 || B.optimizeNames(m, P), this;
      }
      get names() {
        const m = super.names;
        return this.catch && T(m, this.catch.names), this.finally && T(m, this.finally.names), m;
      }
    }
    class k extends E {
      constructor(m) {
        super(), this.error = m;
      }
      render(m) {
        return `catch(${this.error})` + super.render(m);
      }
    }
    k.kind = "catch";
    class A extends E {
      render(m) {
        return "finally" + super.render(m);
      }
    }
    A.kind = "finally";
    class M {
      constructor(m, P = {}) {
        this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ...P, _n: P.lines ? `
` : "" }, this._extScope = m, this._scope = new s.Scope({ parent: m }), this._nodes = [new v()];
      }
      toString() {
        return this._root.render(this.opts);
      }
      // returns unique name in the internal scope
      name(m) {
        return this._scope.name(m);
      }
      // reserves unique name in the external scope
      scopeName(m) {
        return this._extScope.name(m);
      }
      // reserves unique name in the external scope and assigns value to it
      scopeValue(m, P) {
        const I = this._extScope.value(m, P);
        return (this._values[I.prefix] || (this._values[I.prefix] = /* @__PURE__ */ new Set())).add(I), I;
      }
      getScopeValue(m, P) {
        return this._extScope.getValue(m, P);
      }
      // return code that assigns values in the external scope to the names that are used internally
      // (same names that were returned by gen.scopeName or gen.scopeValue)
      scopeRefs(m) {
        return this._extScope.scopeRefs(m, this._values);
      }
      scopeCode() {
        return this._extScope.scopeCode(this._values);
      }
      _def(m, P, I, B) {
        const H = this._scope.toName(P);
        return I !== void 0 && B && (this._constants[H.str] = I), this._leafNode(new a(m, H, I)), H;
      }
      // `const` declaration (`var` in es5 mode)
      const(m, P, I) {
        return this._def(s.varKinds.const, m, P, I);
      }
      // `let` declaration with optional assignment (`var` in es5 mode)
      let(m, P, I) {
        return this._def(s.varKinds.let, m, P, I);
      }
      // `var` declaration with optional assignment
      var(m, P, I) {
        return this._def(s.varKinds.var, m, P, I);
      }
      // assignment code
      assign(m, P, I) {
        return this._leafNode(new l(m, P, I));
      }
      // `+=` code
      add(m, P) {
        return this._leafNode(new d(m, e.operators.ADD, P));
      }
      // appends passed SafeExpr to code or executes Block
      code(m) {
        return typeof m == "function" ? m() : m !== t.nil && this._leafNode(new S(m)), this;
      }
      // returns code for object literal for the passed argument list of key-value pairs
      object(...m) {
        const P = ["{"];
        for (const [I, B] of m)
          P.length > 1 && P.push(","), P.push(I), (I !== B || this.opts.es5) && (P.push(":"), (0, t.addCodeArg)(P, B));
        return P.push("}"), new t._Code(P);
      }
      // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
      if(m, P, I) {
        if (this._blockNode(new y(m)), P && I)
          this.code(P).else().code(I).endIf();
        else if (P)
          this.code(P).endIf();
        else if (I)
          throw new Error('CodeGen: "else" body without "then" body');
        return this;
      }
      // `else if` clause - invalid without `if` or after `else` clauses
      elseIf(m) {
        return this._elseNode(new y(m));
      }
      // `else` clause - only valid after `if` or `else if` clauses
      else() {
        return this._elseNode(new u());
      }
      // end `if` statement (needed if gen.if was used only with condition)
      endIf() {
        return this._endBlockNode(y, u);
      }
      _for(m, P) {
        return this._blockNode(m), P && this.code(P).endFor(), this;
      }
      // a generic `for` clause (or statement if `forBody` is passed)
      for(m, P) {
        return this._for(new f(m), P);
      }
      // `for` statement for a range of values
      forRange(m, P, I, B, H = this.opts.es5 ? s.varKinds.var : s.varKinds.let) {
        const Q = this._scope.toName(m);
        return this._for(new _(H, Q, P, I), () => B(Q));
      }
      // `for-of` statement (in es5 mode replace with a normal for loop)
      forOf(m, P, I, B = s.varKinds.const) {
        const H = this._scope.toName(m);
        if (this.opts.es5) {
          const Q = P instanceof t.Name ? P : this.var("_arr", P);
          return this.forRange("_i", 0, (0, t._)`${Q}.length`, (Z) => {
            this.var(H, (0, t._)`${Q}[${Z}]`), I(H);
          });
        }
        return this._for(new n("of", B, H, P), () => I(H));
      }
      // `for-in` statement.
      // With option `ownProperties` replaced with a `for-of` loop for object keys
      forIn(m, P, I, B = this.opts.es5 ? s.varKinds.var : s.varKinds.const) {
        if (this.opts.ownProperties)
          return this.forOf(m, (0, t._)`Object.keys(${P})`, I);
        const H = this._scope.toName(m);
        return this._for(new n("in", B, H, P), () => I(H));
      }
      // end `for` loop
      endFor() {
        return this._endBlockNode(c);
      }
      // `label` statement
      label(m) {
        return this._leafNode(new $(m));
      }
      // `break` statement
      break(m) {
        return this._leafNode(new g(m));
      }
      // `return` statement
      return(m) {
        const P = new h();
        if (this._blockNode(P), this.code(m), P.nodes.length !== 1)
          throw new Error('CodeGen: "return" should have one node');
        return this._endBlockNode(h);
      }
      // `try` statement
      try(m, P, I) {
        if (!P && !I)
          throw new Error('CodeGen: "try" without "catch" and "finally"');
        const B = new C();
        if (this._blockNode(B), this.code(m), P) {
          const H = this.name("e");
          this._currNode = B.catch = new k(H), P(H);
        }
        return I && (this._currNode = B.finally = new A(), this.code(I)), this._endBlockNode(k, A);
      }
      // `throw` statement
      throw(m) {
        return this._leafNode(new w(m));
      }
      // start self-balancing block
      block(m, P) {
        return this._blockStarts.push(this._nodes.length), m && this.code(m).endBlock(P), this;
      }
      // end the current self-balancing block
      endBlock(m) {
        const P = this._blockStarts.pop();
        if (P === void 0)
          throw new Error("CodeGen: not in self-balancing block");
        const I = this._nodes.length - P;
        if (I < 0 || m !== void 0 && I !== m)
          throw new Error(`CodeGen: wrong number of nodes: ${I} vs ${m} expected`);
        return this._nodes.length = P, this;
      }
      // `function` heading (or definition if funcBody is passed)
      func(m, P = t.nil, I, B) {
        return this._blockNode(new i(m, P, I)), B && this.code(B).endFunc(), this;
      }
      // end function definition
      endFunc() {
        return this._endBlockNode(i);
      }
      optimize(m = 1) {
        for (; m-- > 0; )
          this._root.optimizeNodes(), this._root.optimizeNames(this._root.names, this._constants);
      }
      _leafNode(m) {
        return this._currNode.nodes.push(m), this;
      }
      _blockNode(m) {
        this._currNode.nodes.push(m), this._nodes.push(m);
      }
      _endBlockNode(m, P) {
        const I = this._currNode;
        if (I instanceof m || P && I instanceof P)
          return this._nodes.pop(), this;
        throw new Error(`CodeGen: not in block "${P ? `${m.kind}/${P.kind}` : m.kind}"`);
      }
      _elseNode(m) {
        const P = this._currNode;
        if (!(P instanceof y))
          throw new Error('CodeGen: "else" without "if"');
        return this._currNode = P.else = m, this;
      }
      get _root() {
        return this._nodes[0];
      }
      get _currNode() {
        const m = this._nodes;
        return m[m.length - 1];
      }
      set _currNode(m) {
        const P = this._nodes;
        P[P.length - 1] = m;
      }
    }
    e.CodeGen = M;
    function T(O, m) {
      for (const P in m)
        O[P] = (O[P] || 0) + (m[P] || 0);
      return O;
    }
    function q(O, m) {
      return m instanceof t._CodeOrName ? T(O, m.names) : O;
    }
    function K(O, m, P) {
      if (O instanceof t.Name)
        return I(O);
      if (!B(O))
        return O;
      return new t._Code(O._items.reduce((H, Q) => (Q instanceof t.Name && (Q = I(Q)), Q instanceof t._Code ? H.push(...Q._items) : H.push(Q), H), []));
      function I(H) {
        const Q = P[H.str];
        return Q === void 0 || m[H.str] !== 1 ? H : (delete m[H.str], Q);
      }
      function B(H) {
        return H instanceof t._Code && H._items.some((Q) => Q instanceof t.Name && m[Q.str] === 1 && P[Q.str] !== void 0);
      }
    }
    function ee(O, m) {
      for (const P in m)
        O[P] = (O[P] || 0) - (m[P] || 0);
    }
    function te(O) {
      return typeof O == "boolean" || typeof O == "number" || O === null ? !O : (0, t._)`!${z(O)}`;
    }
    e.not = te;
    const fe = j(e.operators.AND);
    function Y(...O) {
      return O.reduce(fe);
    }
    e.and = Y;
    const me = j(e.operators.OR);
    function x(...O) {
      return O.reduce(me);
    }
    e.or = x;
    function j(O) {
      return (m, P) => m === t.nil ? P : P === t.nil ? m : (0, t._)`${z(m)} ${O} ${z(P)}`;
    }
    function z(O) {
      return O instanceof t.Name ? O : (0, t._)`(${O})`;
    }
  })(or)), or;
}
var J = {}, Vr;
function X() {
  if (Vr) return J;
  Vr = 1, Object.defineProperty(J, "__esModule", { value: !0 }), J.checkStrictMode = J.getErrorPath = J.Type = J.useFunc = J.setEvaluated = J.evaluatedPropsToName = J.mergeEvaluated = J.eachItem = J.unescapeJsonPointer = J.escapeJsonPointer = J.escapeFragment = J.unescapeFragment = J.schemaRefOrVal = J.schemaHasRulesButRef = J.schemaHasRules = J.checkUnknownRules = J.alwaysValidSchema = J.toHash = void 0;
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ Ft();
  function s(n) {
    const i = {};
    for (const h of n)
      i[h] = !0;
    return i;
  }
  J.toHash = s;
  function o(n, i) {
    return typeof i == "boolean" ? i : Object.keys(i).length === 0 ? !0 : (p(n, i), !r(i, n.self.RULES.all));
  }
  J.alwaysValidSchema = o;
  function p(n, i = n.schema) {
    const { opts: h, self: C } = n;
    if (!h.strictSchema || typeof i == "boolean")
      return;
    const k = C.RULES.keywords;
    for (const A in i)
      k[A] || _(n, `unknown keyword: "${A}"`);
  }
  J.checkUnknownRules = p;
  function r(n, i) {
    if (typeof n == "boolean")
      return !n;
    for (const h in n)
      if (i[h])
        return !0;
    return !1;
  }
  J.schemaHasRules = r;
  function a(n, i) {
    if (typeof n == "boolean")
      return !n;
    for (const h in n)
      if (h !== "$ref" && i.all[h])
        return !0;
    return !1;
  }
  J.schemaHasRulesButRef = a;
  function l({ topSchemaRef: n, schemaPath: i }, h, C, k) {
    if (!k) {
      if (typeof h == "number" || typeof h == "boolean")
        return h;
      if (typeof h == "string")
        return (0, e._)`${h}`;
    }
    return (0, e._)`${n}${i}${(0, e.getProperty)(C)}`;
  }
  J.schemaRefOrVal = l;
  function d(n) {
    return w(decodeURIComponent(n));
  }
  J.unescapeFragment = d;
  function $(n) {
    return encodeURIComponent(g(n));
  }
  J.escapeFragment = $;
  function g(n) {
    return typeof n == "number" ? `${n}` : n.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  J.escapeJsonPointer = g;
  function w(n) {
    return n.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  J.unescapeJsonPointer = w;
  function S(n, i) {
    if (Array.isArray(n))
      for (const h of n)
        i(h);
    else
      i(n);
  }
  J.eachItem = S;
  function b({ mergeNames: n, mergeToName: i, mergeValues: h, resultToName: C }) {
    return (k, A, M, T) => {
      const q = M === void 0 ? A : M instanceof e.Name ? (A instanceof e.Name ? n(k, A, M) : i(k, A, M), M) : A instanceof e.Name ? (i(k, M, A), A) : h(A, M);
      return T === e.Name && !(q instanceof e.Name) ? C(k, q) : q;
    };
  }
  J.mergeEvaluated = {
    props: b({
      mergeNames: (n, i, h) => n.if((0, e._)`${h} !== true && ${i} !== undefined`, () => {
        n.if((0, e._)`${i} === true`, () => n.assign(h, !0), () => n.assign(h, (0, e._)`${h} || {}`).code((0, e._)`Object.assign(${h}, ${i})`));
      }),
      mergeToName: (n, i, h) => n.if((0, e._)`${h} !== true`, () => {
        i === !0 ? n.assign(h, !0) : (n.assign(h, (0, e._)`${h} || {}`), v(n, h, i));
      }),
      mergeValues: (n, i) => n === !0 ? !0 : { ...n, ...i },
      resultToName: E
    }),
    items: b({
      mergeNames: (n, i, h) => n.if((0, e._)`${h} !== true && ${i} !== undefined`, () => n.assign(h, (0, e._)`${i} === true ? true : ${h} > ${i} ? ${h} : ${i}`)),
      mergeToName: (n, i, h) => n.if((0, e._)`${h} !== true`, () => n.assign(h, i === !0 ? !0 : (0, e._)`${h} > ${i} ? ${h} : ${i}`)),
      mergeValues: (n, i) => n === !0 ? !0 : Math.max(n, i),
      resultToName: (n, i) => n.var("items", i)
    })
  };
  function E(n, i) {
    if (i === !0)
      return n.var("props", !0);
    const h = n.var("props", (0, e._)`{}`);
    return i !== void 0 && v(n, h, i), h;
  }
  J.evaluatedPropsToName = E;
  function v(n, i, h) {
    Object.keys(h).forEach((C) => n.assign((0, e._)`${i}${(0, e.getProperty)(C)}`, !0));
  }
  J.setEvaluated = v;
  const u = {};
  function y(n, i) {
    return n.scopeValue("func", {
      ref: i,
      code: u[i.code] || (u[i.code] = new t._Code(i.code))
    });
  }
  J.useFunc = y;
  var c;
  (function(n) {
    n[n.Num = 0] = "Num", n[n.Str = 1] = "Str";
  })(c || (J.Type = c = {}));
  function f(n, i, h) {
    if (n instanceof e.Name) {
      const C = i === c.Num;
      return h ? C ? (0, e._)`"[" + ${n} + "]"` : (0, e._)`"['" + ${n} + "']"` : C ? (0, e._)`"/" + ${n}` : (0, e._)`"/" + ${n}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return h ? (0, e.getProperty)(n).toString() : "/" + g(n);
  }
  J.getErrorPath = f;
  function _(n, i, h = n.opts.strictSchema) {
    if (h) {
      if (i = `strict mode: ${i}`, h === !0)
        throw new Error(i);
      n.self.logger.warn(i);
    }
  }
  return J.checkStrictMode = _, J;
}
var Ge = {}, Lr;
function ve() {
  if (Lr) return Ge;
  Lr = 1, Object.defineProperty(Ge, "__esModule", { value: !0 });
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
var Br;
function Gt() {
  return Br || (Br = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
    const t = /* @__PURE__ */ G(), s = /* @__PURE__ */ X(), o = /* @__PURE__ */ ve();
    e.keywordError = {
      message: ({ keyword: u }) => (0, t.str)`must pass "${u}" keyword validation`
    }, e.keyword$DataError = {
      message: ({ keyword: u, schemaType: y }) => y ? (0, t.str)`"${u}" keyword must be ${y} ($data)` : (0, t.str)`"${u}" keyword is invalid ($data)`
    };
    function p(u, y = e.keywordError, c, f) {
      const { it: _ } = u, { gen: n, compositeRule: i, allErrors: h } = _, C = w(u, y, c);
      f ?? (i || h) ? d(n, C) : $(_, (0, t._)`[${C}]`);
    }
    e.reportError = p;
    function r(u, y = e.keywordError, c) {
      const { it: f } = u, { gen: _, compositeRule: n, allErrors: i } = f, h = w(u, y, c);
      d(_, h), n || i || $(f, o.default.vErrors);
    }
    e.reportExtraError = r;
    function a(u, y) {
      u.assign(o.default.errors, y), u.if((0, t._)`${o.default.vErrors} !== null`, () => u.if(y, () => u.assign((0, t._)`${o.default.vErrors}.length`, y), () => u.assign(o.default.vErrors, null)));
    }
    e.resetErrorsCount = a;
    function l({ gen: u, keyword: y, schemaValue: c, data: f, errsCount: _, it: n }) {
      if (_ === void 0)
        throw new Error("ajv implementation error");
      const i = u.name("err");
      u.forRange("i", _, o.default.errors, (h) => {
        u.const(i, (0, t._)`${o.default.vErrors}[${h}]`), u.if((0, t._)`${i}.instancePath === undefined`, () => u.assign((0, t._)`${i}.instancePath`, (0, t.strConcat)(o.default.instancePath, n.errorPath))), u.assign((0, t._)`${i}.schemaPath`, (0, t.str)`${n.errSchemaPath}/${y}`), n.opts.verbose && (u.assign((0, t._)`${i}.schema`, c), u.assign((0, t._)`${i}.data`, f));
      });
    }
    e.extendErrors = l;
    function d(u, y) {
      const c = u.const("err", y);
      u.if((0, t._)`${o.default.vErrors} === null`, () => u.assign(o.default.vErrors, (0, t._)`[${c}]`), (0, t._)`${o.default.vErrors}.push(${c})`), u.code((0, t._)`${o.default.errors}++`);
    }
    function $(u, y) {
      const { gen: c, validateName: f, schemaEnv: _ } = u;
      _.$async ? c.throw((0, t._)`new ${u.ValidationError}(${y})`) : (c.assign((0, t._)`${f}.errors`, y), c.return(!1));
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
    function w(u, y, c) {
      const { createErrors: f } = u.it;
      return f === !1 ? (0, t._)`{}` : S(u, y, c);
    }
    function S(u, y, c = {}) {
      const { gen: f, it: _ } = u, n = [
        b(_, c),
        E(u, c)
      ];
      return v(u, y, n), f.object(...n);
    }
    function b({ errorPath: u }, { instancePath: y }) {
      const c = y ? (0, t.str)`${u}${(0, s.getErrorPath)(y, s.Type.Str)}` : u;
      return [o.default.instancePath, (0, t.strConcat)(o.default.instancePath, c)];
    }
    function E({ keyword: u, it: { errSchemaPath: y } }, { schemaPath: c, parentSchema: f }) {
      let _ = f ? y : (0, t.str)`${y}/${u}`;
      return c && (_ = (0, t.str)`${_}${(0, s.getErrorPath)(c, s.Type.Str)}`), [g.schemaPath, _];
    }
    function v(u, { params: y, message: c }, f) {
      const { keyword: _, data: n, schemaValue: i, it: h } = u, { opts: C, propertyName: k, topSchemaRef: A, schemaPath: M } = h;
      f.push([g.keyword, _], [g.params, typeof y == "function" ? y(u) : y || (0, t._)`{}`]), C.messages && f.push([g.message, typeof c == "function" ? c(u) : c]), C.verbose && f.push([g.schema, i], [g.parentSchema, (0, t._)`${A}${M}`], [o.default.data, n]), k && f.push([g.propertyName, k]);
    }
  })(nr)), nr;
}
var Fr;
function Wo() {
  if (Fr) return Ce;
  Fr = 1, Object.defineProperty(Ce, "__esModule", { value: !0 }), Ce.boolOrEmptySchema = Ce.topBoolOrEmptySchema = void 0;
  const e = /* @__PURE__ */ Gt(), t = /* @__PURE__ */ G(), s = /* @__PURE__ */ ve(), o = {
    message: "boolean schema is false"
  };
  function p(l) {
    const { gen: d, schema: $, validateName: g } = l;
    $ === !1 ? a(l, !1) : typeof $ == "object" && $.$async === !0 ? d.return(s.default.data) : (d.assign((0, t._)`${g}.errors`, null), d.return(!0));
  }
  Ce.topBoolOrEmptySchema = p;
  function r(l, d) {
    const { gen: $, schema: g } = l;
    g === !1 ? ($.var(d, !1), a(l)) : $.var(d, !0);
  }
  Ce.boolOrEmptySchema = r;
  function a(l, d) {
    const { gen: $, data: g } = l, w = {
      gen: $,
      keyword: "false schema",
      data: g,
      schema: !1,
      schemaCode: !1,
      schemaValue: !1,
      params: {},
      it: l
    };
    (0, e.reportError)(w, o, void 0, d);
  }
  return Ce;
}
var se = {}, Re = {}, Kr;
function wo() {
  if (Kr) return Re;
  Kr = 1, Object.defineProperty(Re, "__esModule", { value: !0 }), Re.getRules = Re.isJSONType = void 0;
  const e = ["string", "number", "integer", "boolean", "null", "object", "array"], t = new Set(e);
  function s(p) {
    return typeof p == "string" && t.has(p);
  }
  Re.isJSONType = s;
  function o() {
    const p = {
      number: { type: "number", rules: [] },
      string: { type: "string", rules: [] },
      array: { type: "array", rules: [] },
      object: { type: "object", rules: [] }
    };
    return {
      types: { ...p, integer: !0, boolean: !0, null: !0 },
      rules: [{ rules: [] }, p.number, p.string, p.array, p.object],
      post: { rules: [] },
      all: {},
      keywords: {}
    };
  }
  return Re.getRules = o, Re;
}
var we = {}, Ur;
function So() {
  if (Ur) return we;
  Ur = 1, Object.defineProperty(we, "__esModule", { value: !0 }), we.shouldUseRule = we.shouldUseGroup = we.schemaHasRulesForType = void 0;
  function e({ schema: o, self: p }, r) {
    const a = p.RULES.types[r];
    return a && a !== !0 && t(o, a);
  }
  we.schemaHasRulesForType = e;
  function t(o, p) {
    return p.rules.some((r) => s(o, r));
  }
  we.shouldUseGroup = t;
  function s(o, p) {
    var r;
    return o[p.keyword] !== void 0 || ((r = p.definition.implements) === null || r === void 0 ? void 0 : r.some((a) => o[a] !== void 0));
  }
  return we.shouldUseRule = s, we;
}
var Hr;
function Kt() {
  if (Hr) return se;
  Hr = 1, Object.defineProperty(se, "__esModule", { value: !0 }), se.reportTypeError = se.checkDataTypes = se.checkDataType = se.coerceAndCheckDataType = se.getJSONTypes = se.getSchemaTypes = se.DataType = void 0;
  const e = /* @__PURE__ */ wo(), t = /* @__PURE__ */ So(), s = /* @__PURE__ */ Gt(), o = /* @__PURE__ */ G(), p = /* @__PURE__ */ X();
  var r;
  (function(c) {
    c[c.Correct = 0] = "Correct", c[c.Wrong = 1] = "Wrong";
  })(r || (se.DataType = r = {}));
  function a(c) {
    const f = l(c.type);
    if (f.includes("null")) {
      if (c.nullable === !1)
        throw new Error("type: null contradicts nullable: false");
    } else {
      if (!f.length && c.nullable !== void 0)
        throw new Error('"nullable" cannot be used without "type"');
      c.nullable === !0 && f.push("null");
    }
    return f;
  }
  se.getSchemaTypes = a;
  function l(c) {
    const f = Array.isArray(c) ? c : c ? [c] : [];
    if (f.every(e.isJSONType))
      return f;
    throw new Error("type must be JSONType or JSONType[]: " + f.join(","));
  }
  se.getJSONTypes = l;
  function d(c, f) {
    const { gen: _, data: n, opts: i } = c, h = g(f, i.coerceTypes), C = f.length > 0 && !(h.length === 0 && f.length === 1 && (0, t.schemaHasRulesForType)(c, f[0]));
    if (C) {
      const k = E(f, n, i.strictNumbers, r.Wrong);
      _.if(k, () => {
        h.length ? w(c, f, h) : u(c);
      });
    }
    return C;
  }
  se.coerceAndCheckDataType = d;
  const $ = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
  function g(c, f) {
    return f ? c.filter((_) => $.has(_) || f === "array" && _ === "array") : [];
  }
  function w(c, f, _) {
    const { gen: n, data: i, opts: h } = c, C = n.let("dataType", (0, o._)`typeof ${i}`), k = n.let("coerced", (0, o._)`undefined`);
    h.coerceTypes === "array" && n.if((0, o._)`${C} == 'object' && Array.isArray(${i}) && ${i}.length == 1`, () => n.assign(i, (0, o._)`${i}[0]`).assign(C, (0, o._)`typeof ${i}`).if(E(f, i, h.strictNumbers), () => n.assign(k, i))), n.if((0, o._)`${k} !== undefined`);
    for (const M of _)
      ($.has(M) || M === "array" && h.coerceTypes === "array") && A(M);
    n.else(), u(c), n.endIf(), n.if((0, o._)`${k} !== undefined`, () => {
      n.assign(i, k), S(c, k);
    });
    function A(M) {
      switch (M) {
        case "string":
          n.elseIf((0, o._)`${C} == "number" || ${C} == "boolean"`).assign(k, (0, o._)`"" + ${i}`).elseIf((0, o._)`${i} === null`).assign(k, (0, o._)`""`);
          return;
        case "number":
          n.elseIf((0, o._)`${C} == "boolean" || ${i} === null
              || (${C} == "string" && ${i} && ${i} == +${i})`).assign(k, (0, o._)`+${i}`);
          return;
        case "integer":
          n.elseIf((0, o._)`${C} === "boolean" || ${i} === null
              || (${C} === "string" && ${i} && ${i} == +${i} && !(${i} % 1))`).assign(k, (0, o._)`+${i}`);
          return;
        case "boolean":
          n.elseIf((0, o._)`${i} === "false" || ${i} === 0 || ${i} === null`).assign(k, !1).elseIf((0, o._)`${i} === "true" || ${i} === 1`).assign(k, !0);
          return;
        case "null":
          n.elseIf((0, o._)`${i} === "" || ${i} === 0 || ${i} === false`), n.assign(k, null);
          return;
        case "array":
          n.elseIf((0, o._)`${C} === "string" || ${C} === "number"
              || ${C} === "boolean" || ${i} === null`).assign(k, (0, o._)`[${i}]`);
      }
    }
  }
  function S({ gen: c, parentData: f, parentDataProperty: _ }, n) {
    c.if((0, o._)`${f} !== undefined`, () => c.assign((0, o._)`${f}[${_}]`, n));
  }
  function b(c, f, _, n = r.Correct) {
    const i = n === r.Correct ? o.operators.EQ : o.operators.NEQ;
    let h;
    switch (c) {
      case "null":
        return (0, o._)`${f} ${i} null`;
      case "array":
        h = (0, o._)`Array.isArray(${f})`;
        break;
      case "object":
        h = (0, o._)`${f} && typeof ${f} == "object" && !Array.isArray(${f})`;
        break;
      case "integer":
        h = C((0, o._)`!(${f} % 1) && !isNaN(${f})`);
        break;
      case "number":
        h = C();
        break;
      default:
        return (0, o._)`typeof ${f} ${i} ${c}`;
    }
    return n === r.Correct ? h : (0, o.not)(h);
    function C(k = o.nil) {
      return (0, o.and)((0, o._)`typeof ${f} == "number"`, k, _ ? (0, o._)`isFinite(${f})` : o.nil);
    }
  }
  se.checkDataType = b;
  function E(c, f, _, n) {
    if (c.length === 1)
      return b(c[0], f, _, n);
    let i;
    const h = (0, p.toHash)(c);
    if (h.array && h.object) {
      const C = (0, o._)`typeof ${f} != "object"`;
      i = h.null ? C : (0, o._)`!${f} || ${C}`, delete h.null, delete h.array, delete h.object;
    } else
      i = o.nil;
    h.number && delete h.integer;
    for (const C in h)
      i = (0, o.and)(i, b(C, f, _, n));
    return i;
  }
  se.checkDataTypes = E;
  const v = {
    message: ({ schema: c }) => `must be ${c}`,
    params: ({ schema: c, schemaValue: f }) => typeof c == "string" ? (0, o._)`{type: ${c}}` : (0, o._)`{type: ${f}}`
  };
  function u(c) {
    const f = y(c);
    (0, s.reportError)(f, v);
  }
  se.reportTypeError = u;
  function y(c) {
    const { gen: f, data: _, schema: n } = c, i = (0, p.schemaRefOrVal)(c, n, "type");
    return {
      gen: f,
      keyword: "type",
      data: _,
      schema: n.type,
      schemaCode: i,
      schemaValue: i,
      parentSchema: n,
      params: {},
      it: c
    };
  }
  return se;
}
var Be = {}, Gr;
function Yo() {
  if (Gr) return Be;
  Gr = 1, Object.defineProperty(Be, "__esModule", { value: !0 }), Be.assignDefaults = void 0;
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X();
  function s(p, r) {
    const { properties: a, items: l } = p.schema;
    if (r === "object" && a)
      for (const d in a)
        o(p, d, a[d].default);
    else r === "array" && Array.isArray(l) && l.forEach((d, $) => o(p, $, d.default));
  }
  Be.assignDefaults = s;
  function o(p, r, a) {
    const { gen: l, compositeRule: d, data: $, opts: g } = p;
    if (a === void 0)
      return;
    const w = (0, e._)`${$}${(0, e.getProperty)(r)}`;
    if (d) {
      (0, t.checkStrictMode)(p, `default is ignored for: ${w}`);
      return;
    }
    let S = (0, e._)`${w} === undefined`;
    g.useDefaults === "empty" && (S = (0, e._)`${S} || ${w} === null || ${w} === ""`), l.if(S, (0, e._)`${w} = ${(0, e.stringify)(a)}`);
  }
  return Be;
}
var ge = {}, re = {}, Jr;
function _e() {
  if (Jr) return re;
  Jr = 1, Object.defineProperty(re, "__esModule", { value: !0 }), re.validateUnion = re.validateArray = re.usePattern = re.callValidateCode = re.schemaProperties = re.allSchemaProperties = re.noPropertyInData = re.propertyInData = re.isOwnProperty = re.hasPropFunc = re.reportMissingProp = re.checkMissingProp = re.checkReportMissingProp = void 0;
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), s = /* @__PURE__ */ ve(), o = /* @__PURE__ */ X();
  function p(c, f) {
    const { gen: _, data: n, it: i } = c;
    _.if(g(_, n, f, i.opts.ownProperties), () => {
      c.setParams({ missingProperty: (0, e._)`${f}` }, !0), c.error();
    });
  }
  re.checkReportMissingProp = p;
  function r({ gen: c, data: f, it: { opts: _ } }, n, i) {
    return (0, e.or)(...n.map((h) => (0, e.and)(g(c, f, h, _.ownProperties), (0, e._)`${i} = ${h}`)));
  }
  re.checkMissingProp = r;
  function a(c, f) {
    c.setParams({ missingProperty: f }, !0), c.error();
  }
  re.reportMissingProp = a;
  function l(c) {
    return c.scopeValue("func", {
      // eslint-disable-next-line @typescript-eslint/unbound-method
      ref: Object.prototype.hasOwnProperty,
      code: (0, e._)`Object.prototype.hasOwnProperty`
    });
  }
  re.hasPropFunc = l;
  function d(c, f, _) {
    return (0, e._)`${l(c)}.call(${f}, ${_})`;
  }
  re.isOwnProperty = d;
  function $(c, f, _, n) {
    const i = (0, e._)`${f}${(0, e.getProperty)(_)} !== undefined`;
    return n ? (0, e._)`${i} && ${d(c, f, _)}` : i;
  }
  re.propertyInData = $;
  function g(c, f, _, n) {
    const i = (0, e._)`${f}${(0, e.getProperty)(_)} === undefined`;
    return n ? (0, e.or)(i, (0, e.not)(d(c, f, _))) : i;
  }
  re.noPropertyInData = g;
  function w(c) {
    return c ? Object.keys(c).filter((f) => f !== "__proto__") : [];
  }
  re.allSchemaProperties = w;
  function S(c, f) {
    return w(f).filter((_) => !(0, t.alwaysValidSchema)(c, f[_]));
  }
  re.schemaProperties = S;
  function b({ schemaCode: c, data: f, it: { gen: _, topSchemaRef: n, schemaPath: i, errorPath: h }, it: C }, k, A, M) {
    const T = M ? (0, e._)`${c}, ${f}, ${n}${i}` : f, q = [
      [s.default.instancePath, (0, e.strConcat)(s.default.instancePath, h)],
      [s.default.parentData, C.parentData],
      [s.default.parentDataProperty, C.parentDataProperty],
      [s.default.rootData, s.default.rootData]
    ];
    C.opts.dynamicRef && q.push([s.default.dynamicAnchors, s.default.dynamicAnchors]);
    const K = (0, e._)`${T}, ${_.object(...q)}`;
    return A !== e.nil ? (0, e._)`${k}.call(${A}, ${K})` : (0, e._)`${k}(${K})`;
  }
  re.callValidateCode = b;
  const E = (0, e._)`new RegExp`;
  function v({ gen: c, it: { opts: f } }, _) {
    const n = f.unicodeRegExp ? "u" : "", { regExp: i } = f.code, h = i(_, n);
    return c.scopeValue("pattern", {
      key: h.toString(),
      ref: h,
      code: (0, e._)`${i.code === "new RegExp" ? E : (0, o.useFunc)(c, i)}(${_}, ${n})`
    });
  }
  re.usePattern = v;
  function u(c) {
    const { gen: f, data: _, keyword: n, it: i } = c, h = f.name("valid");
    if (i.allErrors) {
      const k = f.let("valid", !0);
      return C(() => f.assign(k, !1)), k;
    }
    return f.var(h, !0), C(() => f.break()), h;
    function C(k) {
      const A = f.const("len", (0, e._)`${_}.length`);
      f.forRange("i", 0, A, (M) => {
        c.subschema({
          keyword: n,
          dataProp: M,
          dataPropType: t.Type.Num
        }, h), f.if((0, e.not)(h), k);
      });
    }
  }
  re.validateArray = u;
  function y(c) {
    const { gen: f, schema: _, keyword: n, it: i } = c;
    if (!Array.isArray(_))
      throw new Error("ajv implementation error");
    if (_.some((A) => (0, t.alwaysValidSchema)(i, A)) && !i.opts.unevaluated)
      return;
    const C = f.let("valid", !1), k = f.name("_valid");
    f.block(() => _.forEach((A, M) => {
      const T = c.subschema({
        keyword: n,
        schemaProp: M,
        compositeRule: !0
      }, k);
      f.assign(C, (0, e._)`${C} || ${k}`), c.mergeValidEvaluated(T, k) || f.if((0, e.not)(C));
    })), c.result(C, () => c.reset(), () => c.error(!0));
  }
  return re.validateUnion = y, re;
}
var Wr;
function Xo() {
  if (Wr) return ge;
  Wr = 1, Object.defineProperty(ge, "__esModule", { value: !0 }), ge.validateKeywordUsage = ge.validSchemaType = ge.funcKeywordCode = ge.macroKeywordCode = void 0;
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ ve(), s = /* @__PURE__ */ _e(), o = /* @__PURE__ */ Gt();
  function p(S, b) {
    const { gen: E, keyword: v, schema: u, parentSchema: y, it: c } = S, f = b.macro.call(c.self, u, y, c), _ = $(E, v, f);
    c.opts.validateSchema !== !1 && c.self.validateSchema(f, !0);
    const n = E.name("valid");
    S.subschema({
      schema: f,
      schemaPath: e.nil,
      errSchemaPath: `${c.errSchemaPath}/${v}`,
      topSchemaRef: _,
      compositeRule: !0
    }, n), S.pass(n, () => S.error(!0));
  }
  ge.macroKeywordCode = p;
  function r(S, b) {
    var E;
    const { gen: v, keyword: u, schema: y, parentSchema: c, $data: f, it: _ } = S;
    d(_, b);
    const n = !f && b.compile ? b.compile.call(_.self, y, c, _) : b.validate, i = $(v, u, n), h = v.let("valid");
    S.block$data(h, C), S.ok((E = b.valid) !== null && E !== void 0 ? E : h);
    function C() {
      if (b.errors === !1)
        M(), b.modifying && a(S), T(() => S.error());
      else {
        const q = b.async ? k() : A();
        b.modifying && a(S), T(() => l(S, q));
      }
    }
    function k() {
      const q = v.let("ruleErrs", null);
      return v.try(() => M((0, e._)`await `), (K) => v.assign(h, !1).if((0, e._)`${K} instanceof ${_.ValidationError}`, () => v.assign(q, (0, e._)`${K}.errors`), () => v.throw(K))), q;
    }
    function A() {
      const q = (0, e._)`${i}.errors`;
      return v.assign(q, null), M(e.nil), q;
    }
    function M(q = b.async ? (0, e._)`await ` : e.nil) {
      const K = _.opts.passContext ? t.default.this : t.default.self, ee = !("compile" in b && !f || b.schema === !1);
      v.assign(h, (0, e._)`${q}${(0, s.callValidateCode)(S, i, K, ee)}`, b.modifying);
    }
    function T(q) {
      var K;
      v.if((0, e.not)((K = b.valid) !== null && K !== void 0 ? K : h), q);
    }
  }
  ge.funcKeywordCode = r;
  function a(S) {
    const { gen: b, data: E, it: v } = S;
    b.if(v.parentData, () => b.assign(E, (0, e._)`${v.parentData}[${v.parentDataProperty}]`));
  }
  function l(S, b) {
    const { gen: E } = S;
    E.if((0, e._)`Array.isArray(${b})`, () => {
      E.assign(t.default.vErrors, (0, e._)`${t.default.vErrors} === null ? ${b} : ${t.default.vErrors}.concat(${b})`).assign(t.default.errors, (0, e._)`${t.default.vErrors}.length`), (0, o.extendErrors)(S);
    }, () => S.error());
  }
  function d({ schemaEnv: S }, b) {
    if (b.async && !S.$async)
      throw new Error("async keyword in sync schema");
  }
  function $(S, b, E) {
    if (E === void 0)
      throw new Error(`keyword "${b}" failed to compile`);
    return S.scopeValue("keyword", typeof E == "function" ? { ref: E } : { ref: E, code: (0, e.stringify)(E) });
  }
  function g(S, b, E = !1) {
    return !b.length || b.some((v) => v === "array" ? Array.isArray(S) : v === "object" ? S && typeof S == "object" && !Array.isArray(S) : typeof S == v || E && typeof S > "u");
  }
  ge.validSchemaType = g;
  function w({ schema: S, opts: b, self: E, errSchemaPath: v }, u, y) {
    if (Array.isArray(u.keyword) ? !u.keyword.includes(y) : u.keyword !== y)
      throw new Error("ajv implementation error");
    const c = u.dependencies;
    if (c?.some((f) => !Object.prototype.hasOwnProperty.call(S, f)))
      throw new Error(`parent schema must have dependencies of ${y}: ${c.join(",")}`);
    if (u.validateSchema && !u.validateSchema(S[y])) {
      const _ = `keyword "${y}" value is invalid at path "${v}": ` + E.errorsText(u.validateSchema.errors);
      if (b.validateSchema === "log")
        E.logger.error(_);
      else
        throw new Error(_);
    }
  }
  return ge.validateKeywordUsage = w, ge;
}
var Se = {}, Yr;
function Zo() {
  if (Yr) return Se;
  Yr = 1, Object.defineProperty(Se, "__esModule", { value: !0 }), Se.extendSubschemaMode = Se.extendSubschemaData = Se.getSubschema = void 0;
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X();
  function s(r, { keyword: a, schemaProp: l, schema: d, schemaPath: $, errSchemaPath: g, topSchemaRef: w }) {
    if (a !== void 0 && d !== void 0)
      throw new Error('both "keyword" and "schema" passed, only one allowed');
    if (a !== void 0) {
      const S = r.schema[a];
      return l === void 0 ? {
        schema: S,
        schemaPath: (0, e._)`${r.schemaPath}${(0, e.getProperty)(a)}`,
        errSchemaPath: `${r.errSchemaPath}/${a}`
      } : {
        schema: S[l],
        schemaPath: (0, e._)`${r.schemaPath}${(0, e.getProperty)(a)}${(0, e.getProperty)(l)}`,
        errSchemaPath: `${r.errSchemaPath}/${a}/${(0, t.escapeFragment)(l)}`
      };
    }
    if (d !== void 0) {
      if ($ === void 0 || g === void 0 || w === void 0)
        throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
      return {
        schema: d,
        schemaPath: $,
        topSchemaRef: w,
        errSchemaPath: g
      };
    }
    throw new Error('either "keyword" or "schema" must be passed');
  }
  Se.getSubschema = s;
  function o(r, a, { dataProp: l, dataPropType: d, data: $, dataTypes: g, propertyName: w }) {
    if ($ !== void 0 && l !== void 0)
      throw new Error('both "data" and "dataProp" passed, only one allowed');
    const { gen: S } = a;
    if (l !== void 0) {
      const { errorPath: E, dataPathArr: v, opts: u } = a, y = S.let("data", (0, e._)`${a.data}${(0, e.getProperty)(l)}`, !0);
      b(y), r.errorPath = (0, e.str)`${E}${(0, t.getErrorPath)(l, d, u.jsPropertySyntax)}`, r.parentDataProperty = (0, e._)`${l}`, r.dataPathArr = [...v, r.parentDataProperty];
    }
    if ($ !== void 0) {
      const E = $ instanceof e.Name ? $ : S.let("data", $, !0);
      b(E), w !== void 0 && (r.propertyName = w);
    }
    g && (r.dataTypes = g);
    function b(E) {
      r.data = E, r.dataLevel = a.dataLevel + 1, r.dataTypes = [], a.definedProperties = /* @__PURE__ */ new Set(), r.parentData = a.data, r.dataNames = [...a.dataNames, E];
    }
  }
  Se.extendSubschemaData = o;
  function p(r, { jtdDiscriminator: a, jtdMetadata: l, compositeRule: d, createErrors: $, allErrors: g }) {
    d !== void 0 && (r.compositeRule = d), $ !== void 0 && (r.createErrors = $), g !== void 0 && (r.allErrors = g), r.jtdDiscriminator = a, r.jtdMetadata = l;
  }
  return Se.extendSubschemaMode = p, Se;
}
var ie = {}, ir, Xr;
function Eo() {
  return Xr || (Xr = 1, ir = function e(t, s) {
    if (t === s) return !0;
    if (t && s && typeof t == "object" && typeof s == "object") {
      if (t.constructor !== s.constructor) return !1;
      var o, p, r;
      if (Array.isArray(t)) {
        if (o = t.length, o != s.length) return !1;
        for (p = o; p-- !== 0; )
          if (!e(t[p], s[p])) return !1;
        return !0;
      }
      if (t.constructor === RegExp) return t.source === s.source && t.flags === s.flags;
      if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === s.valueOf();
      if (t.toString !== Object.prototype.toString) return t.toString() === s.toString();
      if (r = Object.keys(t), o = r.length, o !== Object.keys(s).length) return !1;
      for (p = o; p-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(s, r[p])) return !1;
      for (p = o; p-- !== 0; ) {
        var a = r[p];
        if (!e(t[a], s[a])) return !1;
      }
      return !0;
    }
    return t !== t && s !== s;
  }), ir;
}
var cr = { exports: {} }, Zr;
function Qo() {
  if (Zr) return cr.exports;
  Zr = 1;
  var e = cr.exports = function(o, p, r) {
    typeof p == "function" && (r = p, p = {}), r = p.cb || r;
    var a = typeof r == "function" ? r : r.pre || function() {
    }, l = r.post || function() {
    };
    t(p, a, l, o, "", o);
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
  function t(o, p, r, a, l, d, $, g, w, S) {
    if (a && typeof a == "object" && !Array.isArray(a)) {
      p(a, l, d, $, g, w, S);
      for (var b in a) {
        var E = a[b];
        if (Array.isArray(E)) {
          if (b in e.arrayKeywords)
            for (var v = 0; v < E.length; v++)
              t(o, p, r, E[v], l + "/" + b + "/" + v, d, l, b, a, v);
        } else if (b in e.propsKeywords) {
          if (E && typeof E == "object")
            for (var u in E)
              t(o, p, r, E[u], l + "/" + b + "/" + s(u), d, l, b, a, u);
        } else (b in e.keywords || o.allKeys && !(b in e.skipKeywords)) && t(o, p, r, E, l + "/" + b, d, l, b, a);
      }
      r(a, l, d, $, g, w, S);
    }
  }
  function s(o) {
    return o.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  return cr.exports;
}
var Qr;
function Jt() {
  if (Qr) return ie;
  Qr = 1, Object.defineProperty(ie, "__esModule", { value: !0 }), ie.getSchemaRefs = ie.resolveUrl = ie.normalizeId = ie._getFullPath = ie.getFullPath = ie.inlineRef = void 0;
  const e = /* @__PURE__ */ X(), t = Eo(), s = Qo(), o = /* @__PURE__ */ new Set([
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
  function p(v, u = !0) {
    return typeof v == "boolean" ? !0 : u === !0 ? !a(v) : u ? l(v) <= u : !1;
  }
  ie.inlineRef = p;
  const r = /* @__PURE__ */ new Set([
    "$ref",
    "$recursiveRef",
    "$recursiveAnchor",
    "$dynamicRef",
    "$dynamicAnchor"
  ]);
  function a(v) {
    for (const u in v) {
      if (r.has(u))
        return !0;
      const y = v[u];
      if (Array.isArray(y) && y.some(a) || typeof y == "object" && a(y))
        return !0;
    }
    return !1;
  }
  function l(v) {
    let u = 0;
    for (const y in v) {
      if (y === "$ref")
        return 1 / 0;
      if (u++, !o.has(y) && (typeof v[y] == "object" && (0, e.eachItem)(v[y], (c) => u += l(c)), u === 1 / 0))
        return 1 / 0;
    }
    return u;
  }
  function d(v, u = "", y) {
    y !== !1 && (u = w(u));
    const c = v.parse(u);
    return $(v, c);
  }
  ie.getFullPath = d;
  function $(v, u) {
    return v.serialize(u).split("#")[0] + "#";
  }
  ie._getFullPath = $;
  const g = /#\/?$/;
  function w(v) {
    return v ? v.replace(g, "") : "";
  }
  ie.normalizeId = w;
  function S(v, u, y) {
    return y = w(y), v.resolve(u, y);
  }
  ie.resolveUrl = S;
  const b = /^[a-z_][-a-z0-9._]*$/i;
  function E(v, u) {
    if (typeof v == "boolean")
      return {};
    const { schemaId: y, uriResolver: c } = this.opts, f = w(v[y] || u), _ = { "": f }, n = d(c, f, !1), i = {}, h = /* @__PURE__ */ new Set();
    return s(v, { allKeys: !0 }, (A, M, T, q) => {
      if (q === void 0)
        return;
      const K = n + M;
      let ee = _[q];
      typeof A[y] == "string" && (ee = te.call(this, A[y])), fe.call(this, A.$anchor), fe.call(this, A.$dynamicAnchor), _[M] = ee;
      function te(Y) {
        const me = this.opts.uriResolver.resolve;
        if (Y = w(ee ? me(ee, Y) : Y), h.has(Y))
          throw k(Y);
        h.add(Y);
        let x = this.refs[Y];
        return typeof x == "string" && (x = this.refs[x]), typeof x == "object" ? C(A, x.schema, Y) : Y !== w(K) && (Y[0] === "#" ? (C(A, i[Y], Y), i[Y] = A) : this.refs[Y] = K), Y;
      }
      function fe(Y) {
        if (typeof Y == "string") {
          if (!b.test(Y))
            throw new Error(`invalid anchor "${Y}"`);
          te.call(this, `#${Y}`);
        }
      }
    }), i;
    function C(A, M, T) {
      if (M !== void 0 && !t(A, M))
        throw k(T);
    }
    function k(A) {
      return new Error(`reference "${A}" resolves to more than one schema`);
    }
  }
  return ie.getSchemaRefs = E, ie;
}
var en;
function Wt() {
  if (en) return be;
  en = 1, Object.defineProperty(be, "__esModule", { value: !0 }), be.getData = be.KeywordCxt = be.validateFunctionCode = void 0;
  const e = /* @__PURE__ */ Wo(), t = /* @__PURE__ */ Kt(), s = /* @__PURE__ */ So(), o = /* @__PURE__ */ Kt(), p = /* @__PURE__ */ Yo(), r = /* @__PURE__ */ Xo(), a = /* @__PURE__ */ Zo(), l = /* @__PURE__ */ G(), d = /* @__PURE__ */ ve(), $ = /* @__PURE__ */ Jt(), g = /* @__PURE__ */ X(), w = /* @__PURE__ */ Gt();
  function S(R) {
    if (n(R) && (h(R), _(R))) {
      u(R);
      return;
    }
    b(R, () => (0, e.topBoolOrEmptySchema)(R));
  }
  be.validateFunctionCode = S;
  function b({ gen: R, validateName: N, schema: D, schemaEnv: L, opts: U }, W) {
    U.code.es5 ? R.func(N, (0, l._)`${d.default.data}, ${d.default.valCxt}`, L.$async, () => {
      R.code((0, l._)`"use strict"; ${c(D, U)}`), v(R, U), R.code(W);
    }) : R.func(N, (0, l._)`${d.default.data}, ${E(U)}`, L.$async, () => R.code(c(D, U)).code(W));
  }
  function E(R) {
    return (0, l._)`{${d.default.instancePath}="", ${d.default.parentData}, ${d.default.parentDataProperty}, ${d.default.rootData}=${d.default.data}${R.dynamicRef ? (0, l._)`, ${d.default.dynamicAnchors}={}` : l.nil}}={}`;
  }
  function v(R, N) {
    R.if(d.default.valCxt, () => {
      R.var(d.default.instancePath, (0, l._)`${d.default.valCxt}.${d.default.instancePath}`), R.var(d.default.parentData, (0, l._)`${d.default.valCxt}.${d.default.parentData}`), R.var(d.default.parentDataProperty, (0, l._)`${d.default.valCxt}.${d.default.parentDataProperty}`), R.var(d.default.rootData, (0, l._)`${d.default.valCxt}.${d.default.rootData}`), N.dynamicRef && R.var(d.default.dynamicAnchors, (0, l._)`${d.default.valCxt}.${d.default.dynamicAnchors}`);
    }, () => {
      R.var(d.default.instancePath, (0, l._)`""`), R.var(d.default.parentData, (0, l._)`undefined`), R.var(d.default.parentDataProperty, (0, l._)`undefined`), R.var(d.default.rootData, d.default.data), N.dynamicRef && R.var(d.default.dynamicAnchors, (0, l._)`{}`);
    });
  }
  function u(R) {
    const { schema: N, opts: D, gen: L } = R;
    b(R, () => {
      D.$comment && N.$comment && q(R), A(R), L.let(d.default.vErrors, null), L.let(d.default.errors, 0), D.unevaluated && y(R), C(R), K(R);
    });
  }
  function y(R) {
    const { gen: N, validateName: D } = R;
    R.evaluated = N.const("evaluated", (0, l._)`${D}.evaluated`), N.if((0, l._)`${R.evaluated}.dynamicProps`, () => N.assign((0, l._)`${R.evaluated}.props`, (0, l._)`undefined`)), N.if((0, l._)`${R.evaluated}.dynamicItems`, () => N.assign((0, l._)`${R.evaluated}.items`, (0, l._)`undefined`));
  }
  function c(R, N) {
    const D = typeof R == "object" && R[N.schemaId];
    return D && (N.code.source || N.code.process) ? (0, l._)`/*# sourceURL=${D} */` : l.nil;
  }
  function f(R, N) {
    if (n(R) && (h(R), _(R))) {
      i(R, N);
      return;
    }
    (0, e.boolOrEmptySchema)(R, N);
  }
  function _({ schema: R, self: N }) {
    if (typeof R == "boolean")
      return !R;
    for (const D in R)
      if (N.RULES.all[D])
        return !0;
    return !1;
  }
  function n(R) {
    return typeof R.schema != "boolean";
  }
  function i(R, N) {
    const { schema: D, gen: L, opts: U } = R;
    U.$comment && D.$comment && q(R), M(R), T(R);
    const W = L.const("_errs", d.default.errors);
    C(R, W), L.var(N, (0, l._)`${W} === ${d.default.errors}`);
  }
  function h(R) {
    (0, g.checkUnknownRules)(R), k(R);
  }
  function C(R, N) {
    if (R.opts.jtd)
      return te(R, [], !1, N);
    const D = (0, t.getSchemaTypes)(R.schema), L = (0, t.coerceAndCheckDataType)(R, D);
    te(R, D, !L, N);
  }
  function k(R) {
    const { schema: N, errSchemaPath: D, opts: L, self: U } = R;
    N.$ref && L.ignoreKeywordsWithRef && (0, g.schemaHasRulesButRef)(N, U.RULES) && U.logger.warn(`$ref: keywords ignored in schema at path "${D}"`);
  }
  function A(R) {
    const { schema: N, opts: D } = R;
    N.default !== void 0 && D.useDefaults && D.strictSchema && (0, g.checkStrictMode)(R, "default is ignored in the schema root");
  }
  function M(R) {
    const N = R.schema[R.opts.schemaId];
    N && (R.baseId = (0, $.resolveUrl)(R.opts.uriResolver, R.baseId, N));
  }
  function T(R) {
    if (R.schema.$async && !R.schemaEnv.$async)
      throw new Error("async schema in sync schema");
  }
  function q({ gen: R, schemaEnv: N, schema: D, errSchemaPath: L, opts: U }) {
    const W = D.$comment;
    if (U.$comment === !0)
      R.code((0, l._)`${d.default.self}.logger.log(${W})`);
    else if (typeof U.$comment == "function") {
      const ne = (0, l.str)`${L}/$comment`, ye = R.scopeValue("root", { ref: N.root });
      R.code((0, l._)`${d.default.self}.opts.$comment(${W}, ${ne}, ${ye}.schema)`);
    }
  }
  function K(R) {
    const { gen: N, schemaEnv: D, validateName: L, ValidationError: U, opts: W } = R;
    D.$async ? N.if((0, l._)`${d.default.errors} === 0`, () => N.return(d.default.data), () => N.throw((0, l._)`new ${U}(${d.default.vErrors})`)) : (N.assign((0, l._)`${L}.errors`, d.default.vErrors), W.unevaluated && ee(R), N.return((0, l._)`${d.default.errors} === 0`));
  }
  function ee({ gen: R, evaluated: N, props: D, items: L }) {
    D instanceof l.Name && R.assign((0, l._)`${N}.props`, D), L instanceof l.Name && R.assign((0, l._)`${N}.items`, L);
  }
  function te(R, N, D, L) {
    const { gen: U, schema: W, data: ne, allErrors: ye, opts: le, self: de } = R, { RULES: oe } = de;
    if (W.$ref && (le.ignoreKeywordsWithRef || !(0, g.schemaHasRulesButRef)(W, oe))) {
      U.block(() => B(R, "$ref", oe.all.$ref.definition));
      return;
    }
    le.jtd || Y(R, N), U.block(() => {
      for (const pe of oe.rules)
        Ae(pe);
      Ae(oe.post);
    });
    function Ae(pe) {
      (0, s.shouldUseGroup)(W, pe) && (pe.type ? (U.if((0, o.checkDataType)(pe.type, ne, le.strictNumbers)), fe(R, pe), N.length === 1 && N[0] === pe.type && D && (U.else(), (0, o.reportTypeError)(R)), U.endIf()) : fe(R, pe), ye || U.if((0, l._)`${d.default.errors} === ${L || 0}`));
    }
  }
  function fe(R, N) {
    const { gen: D, schema: L, opts: { useDefaults: U } } = R;
    U && (0, p.assignDefaults)(R, N.type), D.block(() => {
      for (const W of N.rules)
        (0, s.shouldUseRule)(L, W) && B(R, W.keyword, W.definition, N.type);
    });
  }
  function Y(R, N) {
    R.schemaEnv.meta || !R.opts.strictTypes || (me(R, N), R.opts.allowUnionTypes || x(R, N), j(R, R.dataTypes));
  }
  function me(R, N) {
    if (N.length) {
      if (!R.dataTypes.length) {
        R.dataTypes = N;
        return;
      }
      N.forEach((D) => {
        O(R.dataTypes, D) || P(R, `type "${D}" not allowed by context "${R.dataTypes.join(",")}"`);
      }), m(R, N);
    }
  }
  function x(R, N) {
    N.length > 1 && !(N.length === 2 && N.includes("null")) && P(R, "use allowUnionTypes to allow union type keyword");
  }
  function j(R, N) {
    const D = R.self.RULES.all;
    for (const L in D) {
      const U = D[L];
      if (typeof U == "object" && (0, s.shouldUseRule)(R.schema, U)) {
        const { type: W } = U.definition;
        W.length && !W.some((ne) => z(N, ne)) && P(R, `missing type "${W.join(",")}" for keyword "${L}"`);
      }
    }
  }
  function z(R, N) {
    return R.includes(N) || N === "number" && R.includes("integer");
  }
  function O(R, N) {
    return R.includes(N) || N === "integer" && R.includes("number");
  }
  function m(R, N) {
    const D = [];
    for (const L of R.dataTypes)
      O(N, L) ? D.push(L) : N.includes("integer") && L === "number" && D.push("integer");
    R.dataTypes = D;
  }
  function P(R, N) {
    const D = R.schemaEnv.baseId + R.errSchemaPath;
    N += ` at "${D}" (strictTypes)`, (0, g.checkStrictMode)(R, N, R.opts.strictTypes);
  }
  class I {
    constructor(N, D, L) {
      if ((0, r.validateKeywordUsage)(N, D, L), this.gen = N.gen, this.allErrors = N.allErrors, this.keyword = L, this.data = N.data, this.schema = N.schema[L], this.$data = D.$data && N.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, g.schemaRefOrVal)(N, this.schema, L, this.$data), this.schemaType = D.schemaType, this.parentSchema = N.schema, this.params = {}, this.it = N, this.def = D, this.$data)
        this.schemaCode = N.gen.const("vSchema", Z(this.$data, N));
      else if (this.schemaCode = this.schemaValue, !(0, r.validSchemaType)(this.schema, D.schemaType, D.allowUndefined))
        throw new Error(`${L} value must be ${JSON.stringify(D.schemaType)}`);
      ("code" in D ? D.trackErrors : D.errors !== !1) && (this.errsCount = N.gen.const("_errs", d.default.errors));
    }
    result(N, D, L) {
      this.failResult((0, l.not)(N), D, L);
    }
    failResult(N, D, L) {
      this.gen.if(N), L ? L() : this.error(), D ? (this.gen.else(), D(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    pass(N, D) {
      this.failResult((0, l.not)(N), void 0, D);
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
      const { schemaCode: D } = this;
      this.fail((0, l._)`${D} !== undefined && (${(0, l.or)(this.invalid$data(), N)})`);
    }
    error(N, D, L) {
      if (D) {
        this.setParams(D), this._error(N, L), this.setParams({});
        return;
      }
      this._error(N, L);
    }
    _error(N, D) {
      (N ? w.reportExtraError : w.reportError)(this, this.def.error, D);
    }
    $dataError() {
      (0, w.reportError)(this, this.def.$dataError || w.keyword$DataError);
    }
    reset() {
      if (this.errsCount === void 0)
        throw new Error('add "trackErrors" to keyword definition');
      (0, w.resetErrorsCount)(this.gen, this.errsCount);
    }
    ok(N) {
      this.allErrors || this.gen.if(N);
    }
    setParams(N, D) {
      D ? Object.assign(this.params, N) : this.params = N;
    }
    block$data(N, D, L = l.nil) {
      this.gen.block(() => {
        this.check$data(N, L), D();
      });
    }
    check$data(N = l.nil, D = l.nil) {
      if (!this.$data)
        return;
      const { gen: L, schemaCode: U, schemaType: W, def: ne } = this;
      L.if((0, l.or)((0, l._)`${U} === undefined`, D)), N !== l.nil && L.assign(N, !0), (W.length || ne.validateSchema) && (L.elseIf(this.invalid$data()), this.$dataError(), N !== l.nil && L.assign(N, !1)), L.else();
    }
    invalid$data() {
      const { gen: N, schemaCode: D, schemaType: L, def: U, it: W } = this;
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
          const le = N.scopeValue("validate$data", { ref: U.validateSchema });
          return (0, l._)`!${le}(${D})`;
        }
        return l.nil;
      }
    }
    subschema(N, D) {
      const L = (0, a.getSubschema)(this.it, N);
      (0, a.extendSubschemaData)(L, this.it, N), (0, a.extendSubschemaMode)(L, N);
      const U = { ...this.it, ...L, items: void 0, props: void 0 };
      return f(U, D), U;
    }
    mergeEvaluated(N, D) {
      const { it: L, gen: U } = this;
      L.opts.unevaluated && (L.props !== !0 && N.props !== void 0 && (L.props = g.mergeEvaluated.props(U, N.props, L.props, D)), L.items !== !0 && N.items !== void 0 && (L.items = g.mergeEvaluated.items(U, N.items, L.items, D)));
    }
    mergeValidEvaluated(N, D) {
      const { it: L, gen: U } = this;
      if (L.opts.unevaluated && (L.props !== !0 || L.items !== !0))
        return U.if(D, () => this.mergeEvaluated(N, l.Name)), !0;
    }
  }
  be.KeywordCxt = I;
  function B(R, N, D, L) {
    const U = new I(R, D, N);
    "code" in D ? D.code(U, L) : U.$data && D.validate ? (0, r.funcKeywordCode)(U, D) : "macro" in D ? (0, r.macroKeywordCode)(U, D) : (D.compile || D.validate) && (0, r.funcKeywordCode)(U, D);
  }
  const H = /^\/(?:[^~]|~0|~1)*$/, Q = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function Z(R, { dataLevel: N, dataNames: D, dataPathArr: L }) {
    let U, W;
    if (R === "")
      return d.default.rootData;
    if (R[0] === "/") {
      if (!H.test(R))
        throw new Error(`Invalid JSON-pointer: ${R}`);
      U = R, W = d.default.rootData;
    } else {
      const de = Q.exec(R);
      if (!de)
        throw new Error(`Invalid JSON-pointer: ${R}`);
      const oe = +de[1];
      if (U = de[2], U === "#") {
        if (oe >= N)
          throw new Error(le("property/index", oe));
        return L[N - oe];
      }
      if (oe > N)
        throw new Error(le("data", oe));
      if (W = D[N - oe], !U)
        return W;
    }
    let ne = W;
    const ye = U.split("/");
    for (const de of ye)
      de && (W = (0, l._)`${W}${(0, l.getProperty)((0, g.unescapeJsonPointer)(de))}`, ne = (0, l._)`${ne} && ${W}`);
    return ne;
    function le(de, oe) {
      return `Cannot access ${de} ${oe} levels up, current level is ${N}`;
    }
  }
  return be.getData = Z, be;
}
var Je = {}, tn;
function wr() {
  if (tn) return Je;
  tn = 1, Object.defineProperty(Je, "__esModule", { value: !0 });
  class e extends Error {
    constructor(s) {
      super("validation failed"), this.errors = s, this.ajv = this.validation = !0;
    }
  }
  return Je.default = e, Je;
}
var We = {}, rn;
function Yt() {
  if (rn) return We;
  rn = 1, Object.defineProperty(We, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Jt();
  class t extends Error {
    constructor(o, p, r, a) {
      super(a || `can't resolve reference ${r} from id ${p}`), this.missingRef = (0, e.resolveUrl)(o, p, r), this.missingSchema = (0, e.normalizeId)((0, e.getFullPath)(o, this.missingRef));
    }
  }
  return We.default = t, We;
}
var ue = {}, nn;
function Xt() {
  if (nn) return ue;
  nn = 1, Object.defineProperty(ue, "__esModule", { value: !0 }), ue.resolveSchema = ue.getCompilingSchema = ue.resolveRef = ue.compileSchema = ue.SchemaEnv = void 0;
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ wr(), s = /* @__PURE__ */ ve(), o = /* @__PURE__ */ Jt(), p = /* @__PURE__ */ X(), r = /* @__PURE__ */ Wt();
  class a {
    constructor(y) {
      var c;
      this.refs = {}, this.dynamicAnchors = {};
      let f;
      typeof y.schema == "object" && (f = y.schema), this.schema = y.schema, this.schemaId = y.schemaId, this.root = y.root || this, this.baseId = (c = y.baseId) !== null && c !== void 0 ? c : (0, o.normalizeId)(f?.[y.schemaId || "$id"]), this.schemaPath = y.schemaPath, this.localRefs = y.localRefs, this.meta = y.meta, this.$async = f?.$async, this.refs = {};
    }
  }
  ue.SchemaEnv = a;
  function l(u) {
    const y = g.call(this, u);
    if (y)
      return y;
    const c = (0, o.getFullPath)(this.opts.uriResolver, u.root.baseId), { es5: f, lines: _ } = this.opts.code, { ownProperties: n } = this.opts, i = new e.CodeGen(this.scope, { es5: f, lines: _, ownProperties: n });
    let h;
    u.$async && (h = i.scopeValue("Error", {
      ref: t.default,
      code: (0, e._)`require("ajv/dist/runtime/validation_error").default`
    }));
    const C = i.scopeName("validate");
    u.validateName = C;
    const k = {
      gen: i,
      allErrors: this.opts.allErrors,
      data: s.default.data,
      parentData: s.default.parentData,
      parentDataProperty: s.default.parentDataProperty,
      dataNames: [s.default.data],
      dataPathArr: [e.nil],
      // TODO can its length be used as dataLevel if nil is removed?
      dataLevel: 0,
      dataTypes: [],
      definedProperties: /* @__PURE__ */ new Set(),
      topSchemaRef: i.scopeValue("schema", this.opts.code.source === !0 ? { ref: u.schema, code: (0, e.stringify)(u.schema) } : { ref: u.schema }),
      validateName: C,
      ValidationError: h,
      schema: u.schema,
      schemaEnv: u,
      rootId: c,
      baseId: u.baseId || c,
      schemaPath: e.nil,
      errSchemaPath: u.schemaPath || (this.opts.jtd ? "" : "#"),
      errorPath: (0, e._)`""`,
      opts: this.opts,
      self: this
    };
    let A;
    try {
      this._compilations.add(u), (0, r.validateFunctionCode)(k), i.optimize(this.opts.code.optimize);
      const M = i.toString();
      A = `${i.scopeRefs(s.default.scope)}return ${M}`, this.opts.code.process && (A = this.opts.code.process(A, u));
      const q = new Function(`${s.default.self}`, `${s.default.scope}`, A)(this, this.scope.get());
      if (this.scope.value(C, { ref: q }), q.errors = null, q.schema = u.schema, q.schemaEnv = u, u.$async && (q.$async = !0), this.opts.code.source === !0 && (q.source = { validateName: C, validateCode: M, scopeValues: i._values }), this.opts.unevaluated) {
        const { props: K, items: ee } = k;
        q.evaluated = {
          props: K instanceof e.Name ? void 0 : K,
          items: ee instanceof e.Name ? void 0 : ee,
          dynamicProps: K instanceof e.Name,
          dynamicItems: ee instanceof e.Name
        }, q.source && (q.source.evaluated = (0, e.stringify)(q.evaluated));
      }
      return u.validate = q, u;
    } catch (M) {
      throw delete u.validate, delete u.validateName, A && this.logger.error("Error compiling schema, function code:", A), M;
    } finally {
      this._compilations.delete(u);
    }
  }
  ue.compileSchema = l;
  function d(u, y, c) {
    var f;
    c = (0, o.resolveUrl)(this.opts.uriResolver, y, c);
    const _ = u.refs[c];
    if (_)
      return _;
    let n = S.call(this, u, c);
    if (n === void 0) {
      const i = (f = u.localRefs) === null || f === void 0 ? void 0 : f[c], { schemaId: h } = this.opts;
      i && (n = new a({ schema: i, schemaId: h, root: u, baseId: y }));
    }
    if (n !== void 0)
      return u.refs[c] = $.call(this, n);
  }
  ue.resolveRef = d;
  function $(u) {
    return (0, o.inlineRef)(u.schema, this.opts.inlineRefs) ? u.schema : u.validate ? u : l.call(this, u);
  }
  function g(u) {
    for (const y of this._compilations)
      if (w(y, u))
        return y;
  }
  ue.getCompilingSchema = g;
  function w(u, y) {
    return u.schema === y.schema && u.root === y.root && u.baseId === y.baseId;
  }
  function S(u, y) {
    let c;
    for (; typeof (c = this.refs[y]) == "string"; )
      y = c;
    return c || this.schemas[y] || b.call(this, u, y);
  }
  function b(u, y) {
    const c = this.opts.uriResolver.parse(y), f = (0, o._getFullPath)(this.opts.uriResolver, c);
    let _ = (0, o.getFullPath)(this.opts.uriResolver, u.baseId, void 0);
    if (Object.keys(u.schema).length > 0 && f === _)
      return v.call(this, c, u);
    const n = (0, o.normalizeId)(f), i = this.refs[n] || this.schemas[n];
    if (typeof i == "string") {
      const h = b.call(this, u, i);
      return typeof h?.schema != "object" ? void 0 : v.call(this, c, h);
    }
    if (typeof i?.schema == "object") {
      if (i.validate || l.call(this, i), n === (0, o.normalizeId)(y)) {
        const { schema: h } = i, { schemaId: C } = this.opts, k = h[C];
        return k && (_ = (0, o.resolveUrl)(this.opts.uriResolver, _, k)), new a({ schema: h, schemaId: C, root: u, baseId: _ });
      }
      return v.call(this, c, i);
    }
  }
  ue.resolveSchema = b;
  const E = /* @__PURE__ */ new Set([
    "properties",
    "patternProperties",
    "enum",
    "dependencies",
    "definitions"
  ]);
  function v(u, { baseId: y, schema: c, root: f }) {
    var _;
    if (((_ = u.fragment) === null || _ === void 0 ? void 0 : _[0]) !== "/")
      return;
    for (const h of u.fragment.slice(1).split("/")) {
      if (typeof c == "boolean")
        return;
      const C = c[(0, p.unescapeFragment)(h)];
      if (C === void 0)
        return;
      c = C;
      const k = typeof c == "object" && c[this.opts.schemaId];
      !E.has(h) && k && (y = (0, o.resolveUrl)(this.opts.uriResolver, y, k));
    }
    let n;
    if (typeof c != "boolean" && c.$ref && !(0, p.schemaHasRulesButRef)(c, this.RULES)) {
      const h = (0, o.resolveUrl)(this.opts.uriResolver, y, c.$ref);
      n = b.call(this, f, h);
    }
    const { schemaId: i } = this.opts;
    if (n = n || new a({ schema: c, schemaId: i, root: f, baseId: y }), n.schema !== n.root.schema)
      return n;
  }
  return ue;
}
const es = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", ts = "Meta-schema for $data reference (JSON AnySchema extension proposal)", rs = "object", ns = ["$data"], os = { $data: { type: "string", anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] } }, ss = !1, as = {
  $id: es,
  description: ts,
  type: rs,
  required: ns,
  properties: os,
  additionalProperties: ss
};
var Ye = {}, Fe = { exports: {} }, lr, on;
function Po() {
  if (on) return lr;
  on = 1;
  const e = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu), t = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u), s = RegExp.prototype.test.bind(/^[\da-f]{2}$/iu), o = RegExp.prototype.test.bind(/^[\da-z\-._~]$/iu), p = RegExp.prototype.test.bind(/^[\da-z\-._~!$&'()*+,;=:@/]$/iu);
  function r(n) {
    let i = "", h = 0, C = 0;
    for (C = 0; C < n.length; C++)
      if (h = n[C].charCodeAt(0), h !== 48) {
        if (!(h >= 48 && h <= 57 || h >= 65 && h <= 70 || h >= 97 && h <= 102))
          return "";
        i += n[C];
        break;
      }
    for (C += 1; C < n.length; C++) {
      if (h = n[C].charCodeAt(0), !(h >= 48 && h <= 57 || h >= 65 && h <= 70 || h >= 97 && h <= 102))
        return "";
      i += n[C];
    }
    return i;
  }
  const a = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
  function l(n) {
    return n.length = 0, !0;
  }
  function d(n, i, h) {
    if (n.length) {
      const C = r(n);
      if (C !== "")
        i.push(C);
      else
        return h.error = !0, !1;
      n.length = 0;
    }
    return !0;
  }
  function $(n) {
    let i = 0;
    const h = { error: !1, address: "", zone: "" }, C = [], k = [];
    let A = !1, M = !1, T = d;
    for (let q = 0; q < n.length; q++) {
      const K = n[q];
      if (!(K === "[" || K === "]"))
        if (K === ":") {
          if (A === !0 && (M = !0), !T(k, C, h))
            break;
          if (++i > 7) {
            h.error = !0;
            break;
          }
          q > 0 && n[q - 1] === ":" && (A = !0), C.push(":");
          continue;
        } else if (K === "%") {
          if (!T(k, C, h))
            break;
          T = l;
        } else {
          k.push(K);
          continue;
        }
    }
    return k.length && (T === l ? h.zone = k.join("") : M ? C.push(k.join("")) : C.push(r(k))), h.address = C.join(""), h;
  }
  function g(n) {
    if (w(n, ":") < 2)
      return { host: n, isIPV6: !1 };
    const i = $(n);
    if (i.error)
      return { host: n, isIPV6: !1 };
    {
      let h = i.address, C = i.address;
      return i.zone && (h += "%" + i.zone, C += "%25" + i.zone), { host: h, isIPV6: !0, escapedHost: C };
    }
  }
  function w(n, i) {
    let h = 0;
    for (let C = 0; C < n.length; C++)
      n[C] === i && h++;
    return h;
  }
  function S(n) {
    let i = n;
    const h = [];
    let C = -1, k = 0;
    for (; k = i.length; ) {
      if (k === 1) {
        if (i === ".")
          break;
        if (i === "/") {
          h.push("/");
          break;
        } else {
          h.push(i);
          break;
        }
      } else if (k === 2) {
        if (i[0] === ".") {
          if (i[1] === ".")
            break;
          if (i[1] === "/") {
            i = i.slice(2);
            continue;
          }
        } else if (i[0] === "/" && (i[1] === "." || i[1] === "/")) {
          h.push("/");
          break;
        }
      } else if (k === 3 && i === "/..") {
        h.length !== 0 && h.pop(), h.push("/");
        break;
      }
      if (i[0] === ".") {
        if (i[1] === ".") {
          if (i[2] === "/") {
            i = i.slice(3);
            continue;
          }
        } else if (i[1] === "/") {
          i = i.slice(2);
          continue;
        }
      } else if (i[0] === "/" && i[1] === ".") {
        if (i[2] === "/") {
          i = i.slice(2);
          continue;
        } else if (i[2] === "." && i[3] === "/") {
          i = i.slice(3), h.length !== 0 && h.pop();
          continue;
        }
      }
      if ((C = i.indexOf("/", 1)) === -1) {
        h.push(i);
        break;
      } else
        h.push(i.slice(0, C)), i = i.slice(C);
    }
    return h.join("");
  }
  const b = { "@": "%40", "/": "%2F", "?": "%3F", "#": "%23", ":": "%3A" }, E = /[@/?#:]/g, v = /[@/?#]/g;
  function u(n, i) {
    const h = i ? v : E;
    return h.lastIndex = 0, n.replace(h, (C) => b[C]);
  }
  function y(n, i = !1) {
    if (n.indexOf("%") === -1)
      return n;
    let h = "";
    for (let C = 0; C < n.length; C++) {
      if (n[C] === "%" && C + 2 < n.length) {
        const k = n.slice(C + 1, C + 3);
        if (s(k)) {
          const A = k.toUpperCase(), M = String.fromCharCode(parseInt(A, 16));
          i && o(M) ? h += M : h += "%" + A, C += 2;
          continue;
        }
      }
      h += n[C];
    }
    return h;
  }
  function c(n) {
    let i = "";
    for (let h = 0; h < n.length; h++) {
      if (n[h] === "%" && h + 2 < n.length) {
        const C = n.slice(h + 1, h + 3);
        if (s(C)) {
          const k = C.toUpperCase(), A = String.fromCharCode(parseInt(k, 16));
          A !== "." && o(A) ? i += A : i += "%" + k, h += 2;
          continue;
        }
      }
      p(n[h]) ? i += n[h] : i += escape(n[h]);
    }
    return i;
  }
  function f(n) {
    let i = "";
    for (let h = 0; h < n.length; h++) {
      if (n[h] === "%" && h + 2 < n.length) {
        const C = n.slice(h + 1, h + 3);
        if (s(C)) {
          i += "%" + C.toUpperCase(), h += 2;
          continue;
        }
      }
      i += escape(n[h]);
    }
    return i;
  }
  function _(n) {
    const i = [];
    if (n.userinfo !== void 0 && (i.push(n.userinfo), i.push("@")), n.host !== void 0) {
      let h = unescape(n.host);
      if (!t(h)) {
        const C = g(h);
        C.isIPV6 === !0 ? h = `[${C.escapedHost}]` : h = u(h, !1);
      }
      i.push(h);
    }
    return (typeof n.port == "number" || typeof n.port == "string") && (i.push(":"), i.push(String(n.port))), i.length ? i.join("") : void 0;
  }
  return lr = {
    nonSimpleDomain: a,
    recomposeAuthority: _,
    reescapeHostDelimiters: u,
    normalizePercentEncoding: y,
    normalizePathEncoding: c,
    escapePreservingEscapes: f,
    removeDotSegments: S,
    isIPv4: t,
    isUUID: e,
    normalizeIPv6: g,
    stringArrayToHexStripped: r
  }, lr;
}
var dr, sn;
function is() {
  if (sn) return dr;
  sn = 1;
  const { isUUID: e } = Po(), t = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu, s = (
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
    return s.indexOf(
      /** @type {*} */
      n
    ) !== -1;
  }
  function p(n) {
    return n.secure === !0 ? !0 : n.secure === !1 ? !1 : n.scheme ? n.scheme.length === 3 && (n.scheme[0] === "w" || n.scheme[0] === "W") && (n.scheme[1] === "s" || n.scheme[1] === "S") && (n.scheme[2] === "s" || n.scheme[2] === "S") : !1;
  }
  function r(n) {
    return n.host || (n.error = n.error || "HTTP URIs must have a host."), n;
  }
  function a(n) {
    const i = String(n.scheme).toLowerCase() === "https";
    return (n.port === (i ? 443 : 80) || n.port === "") && (n.port = void 0), n.path || (n.path = "/"), n;
  }
  function l(n) {
    return n.secure = p(n), n.resourceName = (n.path || "/") + (n.query ? "?" + n.query : ""), n.path = void 0, n.query = void 0, n;
  }
  function d(n) {
    if ((n.port === (p(n) ? 443 : 80) || n.port === "") && (n.port = void 0), typeof n.secure == "boolean" && (n.scheme = n.secure ? "wss" : "ws", n.secure = void 0), n.resourceName) {
      const [i, h] = n.resourceName.split("?");
      n.path = i && i !== "/" ? i : void 0, n.query = h, n.resourceName = void 0;
    }
    return n.fragment = void 0, n;
  }
  function $(n, i) {
    if (!n.path)
      return n.error = "URN can not be parsed", n;
    const h = n.path.match(t);
    if (h) {
      const C = i.scheme || n.scheme || "urn";
      n.nid = h[1].toLowerCase(), n.nss = h[2];
      const k = `${C}:${i.nid || n.nid}`, A = _(k);
      n.path = void 0, A && (n = A.parse(n, i));
    } else
      n.error = n.error || "URN can not be parsed.";
    return n;
  }
  function g(n, i) {
    if (n.nid === void 0)
      throw new Error("URN without nid cannot be serialized");
    const h = i.scheme || n.scheme || "urn", C = n.nid.toLowerCase(), k = `${h}:${i.nid || C}`, A = _(k);
    A && (n = A.serialize(n, i));
    const M = n, T = n.nss;
    return M.path = `${C || i.nid}:${T}`, i.skipEscape = !0, M;
  }
  function w(n, i) {
    const h = n;
    return h.uuid = h.nss, h.nss = void 0, !i.tolerant && (!h.uuid || !e(h.uuid)) && (h.error = h.error || "UUID is not valid."), h;
  }
  function S(n) {
    const i = n;
    return i.nss = (n.uuid || "").toLowerCase(), i;
  }
  const b = (
    /** @type {SchemeHandler} */
    {
      scheme: "http",
      domainHost: !0,
      parse: r,
      serialize: a
    }
  ), E = (
    /** @type {SchemeHandler} */
    {
      scheme: "https",
      domainHost: b.domainHost,
      parse: r,
      serialize: a
    }
  ), v = (
    /** @type {SchemeHandler} */
    {
      scheme: "ws",
      domainHost: !0,
      parse: l,
      serialize: d
    }
  ), u = (
    /** @type {SchemeHandler} */
    {
      scheme: "wss",
      domainHost: v.domainHost,
      parse: v.parse,
      serialize: v.serialize
    }
  ), f = (
    /** @type {Record<SchemeName, SchemeHandler>} */
    {
      http: b,
      https: E,
      ws: v,
      wss: u,
      urn: (
        /** @type {SchemeHandler} */
        {
          scheme: "urn",
          parse: $,
          serialize: g,
          skipNormalize: !0
        }
      ),
      "urn:uuid": (
        /** @type {SchemeHandler} */
        {
          scheme: "urn:uuid",
          parse: w,
          serialize: S,
          skipNormalize: !0
        }
      )
    }
  );
  Object.setPrototypeOf(f, null);
  function _(n) {
    return n && (f[
      /** @type {SchemeName} */
      n
    ] || f[
      /** @type {SchemeName} */
      n.toLowerCase()
    ]) || void 0;
  }
  return dr = {
    wsIsSecure: p,
    SCHEMES: f,
    isValidSchemeName: o,
    getSchemeHandler: _
  }, dr;
}
var an;
function cs() {
  if (an) return Fe.exports;
  an = 1;
  const { normalizeIPv6: e, removeDotSegments: t, recomposeAuthority: s, normalizePercentEncoding: o, normalizePathEncoding: p, escapePreservingEscapes: r, reescapeHostDelimiters: a, isIPv4: l, nonSimpleDomain: d } = Po(), { SCHEMES: $, getSchemeHandler: g } = is();
  function w(k, A) {
    return typeof k == "string" ? k = /** @type {T} */
    n(k, A) : typeof k == "object" && (k = /** @type {T} */
    _(v(k, A), A)), k;
  }
  function S(k, A, M) {
    const T = M ? Object.assign({ scheme: "null" }, M) : { scheme: "null" }, q = b(_(k, T), _(A, T), T, !0);
    return T.skipEscape = !0, v(q, T);
  }
  function b(k, A, M, T) {
    const q = {};
    return T || (k = _(v(k, M), M), A = _(v(A, M), M)), M = M || {}, !M.tolerant && A.scheme ? (q.scheme = A.scheme, q.userinfo = A.userinfo, q.host = A.host, q.port = A.port, q.path = t(A.path || ""), q.query = A.query) : (A.userinfo !== void 0 || A.host !== void 0 || A.port !== void 0 ? (q.userinfo = A.userinfo, q.host = A.host, q.port = A.port, q.path = t(A.path || ""), q.query = A.query) : (A.path ? (A.path[0] === "/" ? q.path = t(A.path) : ((k.userinfo !== void 0 || k.host !== void 0 || k.port !== void 0) && !k.path ? q.path = "/" + A.path : k.path ? q.path = k.path.slice(0, k.path.lastIndexOf("/") + 1) + A.path : q.path = A.path, q.path = t(q.path)), q.query = A.query) : (q.path = k.path, A.query !== void 0 ? q.query = A.query : q.query = k.query), q.userinfo = k.userinfo, q.host = k.host, q.port = k.port), q.scheme = k.scheme), q.fragment = A.fragment, q;
  }
  function E(k, A, M) {
    const T = h(k, M), q = h(A, M);
    return T !== void 0 && q !== void 0 && T.toLowerCase() === q.toLowerCase();
  }
  function v(k, A) {
    const M = {
      host: k.host,
      scheme: k.scheme,
      userinfo: k.userinfo,
      port: k.port,
      path: k.path,
      query: k.query,
      nid: k.nid,
      nss: k.nss,
      uuid: k.uuid,
      fragment: k.fragment,
      reference: k.reference,
      resourceName: k.resourceName,
      secure: k.secure,
      error: ""
    }, T = Object.assign({}, A), q = [], K = g(T.scheme || M.scheme);
    K && K.serialize && K.serialize(M, T), M.path !== void 0 && (T.skipEscape ? M.path = o(M.path) : (M.path = r(M.path), M.scheme !== void 0 && (M.path = M.path.split("%3A").join(":")))), T.reference !== "suffix" && M.scheme && q.push(M.scheme, ":");
    const ee = s(M);
    if (ee !== void 0 && (T.reference !== "suffix" && q.push("//"), q.push(ee), M.path && M.path[0] !== "/" && q.push("/")), M.path !== void 0) {
      let te = M.path;
      !T.absolutePath && (!K || !K.absolutePath) && (te = t(te)), ee === void 0 && te[0] === "/" && te[1] === "/" && (te = "/%2F" + te.slice(2)), q.push(te);
    }
    return M.query !== void 0 && q.push("?", M.query), M.fragment !== void 0 && q.push("#", M.fragment), q.join("");
  }
  const u = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u, y = /^(?:[^#/:?]+:)?\/\/([^/?#]*)/;
  function c(k, A) {
    if (A[2] !== void 0 && k.path && k.path[0] !== "/")
      return 'URI path must start with "/" when authority is present.';
    if (typeof k.port == "number" && (k.port < 0 || k.port > 65535))
      return "URI port is malformed.";
  }
  function f(k, A) {
    const M = Object.assign({}, A), T = {
      scheme: void 0,
      userinfo: void 0,
      host: "",
      port: void 0,
      path: "",
      query: void 0,
      fragment: void 0
    };
    let q = !1, K = !1;
    M.reference === "suffix" && (M.scheme ? k = M.scheme + ":" + k : k = "//" + k);
    const ee = k.match(y);
    ee !== null && ee[1].indexOf("\\") !== -1 && (T.error = "URI authority must not contain a literal backslash.", q = !0);
    const te = k.match(u);
    if (te) {
      T.scheme = te[1], T.userinfo = te[3], T.host = te[4], T.port = parseInt(te[5], 10), T.path = te[6] || "", T.query = te[7], T.fragment = te[8], isNaN(T.port) && (T.port = te[5]);
      const fe = c(T, te);
      if (fe !== void 0 && (T.error = T.error || fe, q = !0), T.host)
        if (l(T.host) === !1) {
          const x = e(T.host);
          T.host = x.host.toLowerCase(), K = x.isIPV6;
        } else
          K = !0;
      T.scheme === void 0 && T.userinfo === void 0 && T.host === void 0 && T.port === void 0 && T.query === void 0 && !T.path ? T.reference = "same-document" : T.scheme === void 0 ? T.reference = "relative" : T.fragment === void 0 ? T.reference = "absolute" : T.reference = "uri", M.reference && M.reference !== "suffix" && M.reference !== T.reference && (T.error = T.error || "URI is not a " + M.reference + " reference.");
      const Y = g(M.scheme || T.scheme);
      if (!M.unicodeSupport && (!Y || !Y.unicodeSupport) && T.host && (M.domainHost || Y && Y.domainHost) && K === !1 && d(T.host))
        try {
          T.host = new URL("http://" + T.host).hostname;
        } catch (me) {
          T.error = T.error || "Host's domain name can not be converted to ASCII: " + me;
        }
      if ((!Y || Y && !Y.skipNormalize) && (k.indexOf("%") !== -1 && (T.scheme !== void 0 && (T.scheme = unescape(T.scheme)), T.host !== void 0 && (T.host = a(unescape(T.host), K))), T.path && (T.path = p(T.path)), T.fragment))
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
  function _(k, A) {
    return f(k, A).parsed;
  }
  function n(k, A) {
    return i(k, A).normalized;
  }
  function i(k, A) {
    const { parsed: M, malformedAuthorityOrPort: T } = f(k, A);
    return {
      normalized: T ? k : v(M, A),
      malformedAuthorityOrPort: T
    };
  }
  function h(k, A) {
    if (typeof k == "string") {
      const { normalized: M, malformedAuthorityOrPort: T } = i(k, A);
      return T ? void 0 : M;
    }
    if (typeof k == "object")
      return v(k, A);
  }
  const C = {
    SCHEMES: $,
    normalize: w,
    resolve: S,
    resolveComponent: b,
    equal: E,
    serialize: v,
    parse: _
  };
  return Fe.exports = C, Fe.exports.default = C, Fe.exports.fastUri = C, Fe.exports;
}
var cn;
function ls() {
  if (cn) return Ye;
  cn = 1, Object.defineProperty(Ye, "__esModule", { value: !0 });
  const e = cs();
  return e.code = 'require("ajv/dist/runtime/uri").default', Ye.default = e, Ye;
}
var ln;
function ds() {
  return ln || (ln = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = void 0;
    var t = /* @__PURE__ */ Wt();
    Object.defineProperty(e, "KeywordCxt", { enumerable: !0, get: function() {
      return t.KeywordCxt;
    } });
    var s = /* @__PURE__ */ G();
    Object.defineProperty(e, "_", { enumerable: !0, get: function() {
      return s._;
    } }), Object.defineProperty(e, "str", { enumerable: !0, get: function() {
      return s.str;
    } }), Object.defineProperty(e, "stringify", { enumerable: !0, get: function() {
      return s.stringify;
    } }), Object.defineProperty(e, "nil", { enumerable: !0, get: function() {
      return s.nil;
    } }), Object.defineProperty(e, "Name", { enumerable: !0, get: function() {
      return s.Name;
    } }), Object.defineProperty(e, "CodeGen", { enumerable: !0, get: function() {
      return s.CodeGen;
    } });
    const o = /* @__PURE__ */ wr(), p = /* @__PURE__ */ Yt(), r = /* @__PURE__ */ wo(), a = /* @__PURE__ */ Xt(), l = /* @__PURE__ */ G(), d = /* @__PURE__ */ Jt(), $ = /* @__PURE__ */ Kt(), g = /* @__PURE__ */ X(), w = as, S = /* @__PURE__ */ ls(), b = (x, j) => new RegExp(x, j);
    b.code = "new RegExp";
    const E = ["removeAdditional", "useDefaults", "coerceTypes"], v = /* @__PURE__ */ new Set([
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
    }, y = {
      ignoreKeywordsWithRef: "",
      jsPropertySyntax: "",
      unicode: '"minLength"/"maxLength" account for unicode characters by default.'
    }, c = 200;
    function f(x) {
      var j, z, O, m, P, I, B, H, Q, Z, R, N, D, L, U, W, ne, ye, le, de, oe, Ae, pe, Zt, Qt;
      const Ve = x.strict, er = (j = x.code) === null || j === void 0 ? void 0 : j.optimize, Tr = er === !0 || er === void 0 ? 1 : er || 0, Mr = (O = (z = x.code) === null || z === void 0 ? void 0 : z.regExp) !== null && O !== void 0 ? O : b, Do = (m = x.uriResolver) !== null && m !== void 0 ? m : S.default;
      return {
        strictSchema: (I = (P = x.strictSchema) !== null && P !== void 0 ? P : Ve) !== null && I !== void 0 ? I : !0,
        strictNumbers: (H = (B = x.strictNumbers) !== null && B !== void 0 ? B : Ve) !== null && H !== void 0 ? H : !0,
        strictTypes: (Z = (Q = x.strictTypes) !== null && Q !== void 0 ? Q : Ve) !== null && Z !== void 0 ? Z : "log",
        strictTuples: (N = (R = x.strictTuples) !== null && R !== void 0 ? R : Ve) !== null && N !== void 0 ? N : "log",
        strictRequired: (L = (D = x.strictRequired) !== null && D !== void 0 ? D : Ve) !== null && L !== void 0 ? L : !1,
        code: x.code ? { ...x.code, optimize: Tr, regExp: Mr } : { optimize: Tr, regExp: Mr },
        loopRequired: (U = x.loopRequired) !== null && U !== void 0 ? U : c,
        loopEnum: (W = x.loopEnum) !== null && W !== void 0 ? W : c,
        meta: (ne = x.meta) !== null && ne !== void 0 ? ne : !0,
        messages: (ye = x.messages) !== null && ye !== void 0 ? ye : !0,
        inlineRefs: (le = x.inlineRefs) !== null && le !== void 0 ? le : !0,
        schemaId: (de = x.schemaId) !== null && de !== void 0 ? de : "$id",
        addUsedSchema: (oe = x.addUsedSchema) !== null && oe !== void 0 ? oe : !0,
        validateSchema: (Ae = x.validateSchema) !== null && Ae !== void 0 ? Ae : !0,
        validateFormats: (pe = x.validateFormats) !== null && pe !== void 0 ? pe : !0,
        unicodeRegExp: (Zt = x.unicodeRegExp) !== null && Zt !== void 0 ? Zt : !0,
        int32range: (Qt = x.int32range) !== null && Qt !== void 0 ? Qt : !0,
        uriResolver: Do
      };
    }
    class _ {
      constructor(j = {}) {
        this.schemas = {}, this.refs = {}, this.formats = /* @__PURE__ */ Object.create(null), this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), j = this.opts = { ...j, ...f(j) };
        const { es5: z, lines: O } = this.opts.code;
        this.scope = new l.ValueScope({ scope: {}, prefixes: v, es5: z, lines: O }), this.logger = T(j.logger);
        const m = j.validateFormats;
        j.validateFormats = !1, this.RULES = (0, r.getRules)(), n.call(this, u, j, "NOT SUPPORTED"), n.call(this, y, j, "DEPRECATED", "warn"), this._metaOpts = A.call(this), j.formats && C.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), j.keywords && k.call(this, j.keywords), typeof j.meta == "object" && this.addMetaSchema(j.meta), h.call(this), j.validateFormats = m;
      }
      _addVocabularies() {
        this.addKeyword("$async");
      }
      _addDefaultMetaSchema() {
        const { $data: j, meta: z, schemaId: O } = this.opts;
        let m = w;
        O === "id" && (m = { ...w }, m.id = m.$id, delete m.$id), z && j && this.addMetaSchema(m, m[O], !1);
      }
      defaultMeta() {
        const { meta: j, schemaId: z } = this.opts;
        return this.opts.defaultMeta = typeof j == "object" ? j[z] || j : void 0;
      }
      validate(j, z) {
        let O;
        if (typeof j == "string") {
          if (O = this.getSchema(j), !O)
            throw new Error(`no schema with key or ref "${j}"`);
        } else
          O = this.compile(j);
        const m = O(z);
        return "$async" in O || (this.errors = O.errors), m;
      }
      compile(j, z) {
        const O = this._addSchema(j, z);
        return O.validate || this._compileSchemaEnv(O);
      }
      compileAsync(j, z) {
        if (typeof this.opts.loadSchema != "function")
          throw new Error("options.loadSchema should be a function");
        const { loadSchema: O } = this.opts;
        return m.call(this, j, z);
        async function m(Z, R) {
          await P.call(this, Z.$schema);
          const N = this._addSchema(Z, R);
          return N.validate || I.call(this, N);
        }
        async function P(Z) {
          Z && !this.getSchema(Z) && await m.call(this, { $ref: Z }, !0);
        }
        async function I(Z) {
          try {
            return this._compileSchemaEnv(Z);
          } catch (R) {
            if (!(R instanceof p.default))
              throw R;
            return B.call(this, R), await H.call(this, R.missingSchema), I.call(this, Z);
          }
        }
        function B({ missingSchema: Z, missingRef: R }) {
          if (this.refs[Z])
            throw new Error(`AnySchema ${Z} is loaded but ${R} cannot be resolved`);
        }
        async function H(Z) {
          const R = await Q.call(this, Z);
          this.refs[Z] || await P.call(this, R.$schema), this.refs[Z] || this.addSchema(R, Z, z);
        }
        async function Q(Z) {
          const R = this._loading[Z];
          if (R)
            return R;
          try {
            return await (this._loading[Z] = O(Z));
          } finally {
            delete this._loading[Z];
          }
        }
      }
      // Adds schema to the instance
      addSchema(j, z, O, m = this.opts.validateSchema) {
        if (Array.isArray(j)) {
          for (const I of j)
            this.addSchema(I, void 0, O, m);
          return this;
        }
        let P;
        if (typeof j == "object") {
          const { schemaId: I } = this.opts;
          if (P = j[I], P !== void 0 && typeof P != "string")
            throw new Error(`schema ${I} must be string`);
        }
        return z = (0, d.normalizeId)(z || P), this._checkUnique(z), this.schemas[z] = this._addSchema(j, O, z, m, !0), this;
      }
      // Add schema that will be used to validate other schemas
      // options in META_IGNORE_OPTIONS are alway set to false
      addMetaSchema(j, z, O = this.opts.validateSchema) {
        return this.addSchema(j, z, !0, O), this;
      }
      //  Validate schema against its meta-schema
      validateSchema(j, z) {
        if (typeof j == "boolean")
          return !0;
        let O;
        if (O = j.$schema, O !== void 0 && typeof O != "string")
          throw new Error("$schema must be a string");
        if (O = O || this.opts.defaultMeta || this.defaultMeta(), !O)
          return this.logger.warn("meta-schema not available"), this.errors = null, !0;
        const m = this.validate(O, j);
        if (!m && z) {
          const P = "schema is invalid: " + this.errorsText();
          if (this.opts.validateSchema === "log")
            this.logger.error(P);
          else
            throw new Error(P);
        }
        return m;
      }
      // Get compiled schema by `key` or `ref`.
      // (`key` that was passed to `addSchema` or full schema reference - `schema.$id` or resolved id)
      getSchema(j) {
        let z;
        for (; typeof (z = i.call(this, j)) == "string"; )
          j = z;
        if (z === void 0) {
          const { schemaId: O } = this.opts, m = new a.SchemaEnv({ schema: {}, schemaId: O });
          if (z = a.resolveSchema.call(this, m, j), !z)
            return;
          this.refs[j] = z;
        }
        return z.validate || this._compileSchemaEnv(z);
      }
      // Remove cached schema(s).
      // If no parameter is passed all schemas but meta-schemas are removed.
      // If RegExp is passed all schemas with key/id matching pattern but meta-schemas are removed.
      // Even if schema is referenced by other schemas it still can be removed as other schemas have local references.
      removeSchema(j) {
        if (j instanceof RegExp)
          return this._removeAllSchemas(this.schemas, j), this._removeAllSchemas(this.refs, j), this;
        switch (typeof j) {
          case "undefined":
            return this._removeAllSchemas(this.schemas), this._removeAllSchemas(this.refs), this._cache.clear(), this;
          case "string": {
            const z = i.call(this, j);
            return typeof z == "object" && this._cache.delete(z.schema), delete this.schemas[j], delete this.refs[j], this;
          }
          case "object": {
            const z = j;
            this._cache.delete(z);
            let O = j[this.opts.schemaId];
            return O && (O = (0, d.normalizeId)(O), delete this.schemas[O], delete this.refs[O]), this;
          }
          default:
            throw new Error("ajv.removeSchema: invalid parameter");
        }
      }
      // add "vocabulary" - a collection of keywords
      addVocabulary(j) {
        for (const z of j)
          this.addKeyword(z);
        return this;
      }
      addKeyword(j, z) {
        let O;
        if (typeof j == "string")
          O = j, typeof z == "object" && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), z.keyword = O);
        else if (typeof j == "object" && z === void 0) {
          if (z = j, O = z.keyword, Array.isArray(O) && !O.length)
            throw new Error("addKeywords: keyword must be string or non-empty array");
        } else
          throw new Error("invalid addKeywords parameters");
        if (K.call(this, O, z), !z)
          return (0, g.eachItem)(O, (P) => ee.call(this, P)), this;
        fe.call(this, z);
        const m = {
          ...z,
          type: (0, $.getJSONTypes)(z.type),
          schemaType: (0, $.getJSONTypes)(z.schemaType)
        };
        return (0, g.eachItem)(O, m.type.length === 0 ? (P) => ee.call(this, P, m) : (P) => m.type.forEach((I) => ee.call(this, P, m, I))), this;
      }
      getKeyword(j) {
        const z = this.RULES.all[j];
        return typeof z == "object" ? z.definition : !!z;
      }
      // Remove keyword
      removeKeyword(j) {
        const { RULES: z } = this;
        delete z.keywords[j], delete z.all[j];
        for (const O of z.rules) {
          const m = O.rules.findIndex((P) => P.keyword === j);
          m >= 0 && O.rules.splice(m, 1);
        }
        return this;
      }
      // Add format
      addFormat(j, z) {
        return typeof z == "string" && (z = new RegExp(z)), this.formats[j] = z, this;
      }
      errorsText(j = this.errors, { separator: z = ", ", dataVar: O = "data" } = {}) {
        return !j || j.length === 0 ? "No errors" : j.map((m) => `${O}${m.instancePath} ${m.message}`).reduce((m, P) => m + z + P);
      }
      $dataMetaSchema(j, z) {
        const O = this.RULES.all;
        j = JSON.parse(JSON.stringify(j));
        for (const m of z) {
          const P = m.split("/").slice(1);
          let I = j;
          for (const B of P)
            I = I[B];
          for (const B in O) {
            const H = O[B];
            if (typeof H != "object")
              continue;
            const { $data: Q } = H.definition, Z = I[B];
            Q && Z && (I[B] = me(Z));
          }
        }
        return j;
      }
      _removeAllSchemas(j, z) {
        for (const O in j) {
          const m = j[O];
          (!z || z.test(O)) && (typeof m == "string" ? delete j[O] : m && !m.meta && (this._cache.delete(m.schema), delete j[O]));
        }
      }
      _addSchema(j, z, O, m = this.opts.validateSchema, P = this.opts.addUsedSchema) {
        let I;
        const { schemaId: B } = this.opts;
        if (typeof j == "object")
          I = j[B];
        else {
          if (this.opts.jtd)
            throw new Error("schema must be object");
          if (typeof j != "boolean")
            throw new Error("schema must be object or boolean");
        }
        let H = this._cache.get(j);
        if (H !== void 0)
          return H;
        O = (0, d.normalizeId)(I || O);
        const Q = d.getSchemaRefs.call(this, j, O);
        return H = new a.SchemaEnv({ schema: j, schemaId: B, meta: z, baseId: O, localRefs: Q }), this._cache.set(H.schema, H), P && !O.startsWith("#") && (O && this._checkUnique(O), this.refs[O] = H), m && this.validateSchema(j, !0), H;
      }
      _checkUnique(j) {
        if (this.schemas[j] || this.refs[j])
          throw new Error(`schema with key or id "${j}" already exists`);
      }
      _compileSchemaEnv(j) {
        if (j.meta ? this._compileMetaSchema(j) : a.compileSchema.call(this, j), !j.validate)
          throw new Error("ajv implementation error");
        return j.validate;
      }
      _compileMetaSchema(j) {
        const z = this.opts;
        this.opts = this._metaOpts;
        try {
          a.compileSchema.call(this, j);
        } finally {
          this.opts = z;
        }
      }
    }
    _.ValidationError = o.default, _.MissingRefError = p.default, e.default = _;
    function n(x, j, z, O = "error") {
      for (const m in x) {
        const P = m;
        P in j && this.logger[O](`${z}: option ${m}. ${x[P]}`);
      }
    }
    function i(x) {
      return x = (0, d.normalizeId)(x), this.schemas[x] || this.refs[x];
    }
    function h() {
      const x = this.opts.schemas;
      if (x)
        if (Array.isArray(x))
          this.addSchema(x);
        else
          for (const j in x)
            this.addSchema(x[j], j);
    }
    function C() {
      for (const x in this.opts.formats) {
        const j = this.opts.formats[x];
        j && this.addFormat(x, j);
      }
    }
    function k(x) {
      if (Array.isArray(x)) {
        this.addVocabulary(x);
        return;
      }
      this.logger.warn("keywords option as map is deprecated, pass array");
      for (const j in x) {
        const z = x[j];
        z.keyword || (z.keyword = j), this.addKeyword(z);
      }
    }
    function A() {
      const x = { ...this.opts };
      for (const j of E)
        delete x[j];
      return x;
    }
    const M = { log() {
    }, warn() {
    }, error() {
    } };
    function T(x) {
      if (x === !1)
        return M;
      if (x === void 0)
        return console;
      if (x.log && x.warn && x.error)
        return x;
      throw new Error("logger must implement log, warn and error methods");
    }
    const q = /^[a-z_$][a-z0-9_$:-]*$/i;
    function K(x, j) {
      const { RULES: z } = this;
      if ((0, g.eachItem)(x, (O) => {
        if (z.keywords[O])
          throw new Error(`Keyword ${O} is already defined`);
        if (!q.test(O))
          throw new Error(`Keyword ${O} has invalid name`);
      }), !!j && j.$data && !("code" in j || "validate" in j))
        throw new Error('$data keyword must have "code" or "validate" function');
    }
    function ee(x, j, z) {
      var O;
      const m = j?.post;
      if (z && m)
        throw new Error('keyword with "post" flag cannot have "type"');
      const { RULES: P } = this;
      let I = m ? P.post : P.rules.find(({ type: H }) => H === z);
      if (I || (I = { type: z, rules: [] }, P.rules.push(I)), P.keywords[x] = !0, !j)
        return;
      const B = {
        keyword: x,
        definition: {
          ...j,
          type: (0, $.getJSONTypes)(j.type),
          schemaType: (0, $.getJSONTypes)(j.schemaType)
        }
      };
      j.before ? te.call(this, I, B, j.before) : I.rules.push(B), P.all[x] = B, (O = j.implements) === null || O === void 0 || O.forEach((H) => this.addKeyword(H));
    }
    function te(x, j, z) {
      const O = x.rules.findIndex((m) => m.keyword === z);
      O >= 0 ? x.rules.splice(O, 0, j) : (x.rules.push(j), this.logger.warn(`rule ${z} is not defined`));
    }
    function fe(x) {
      let { metaSchema: j } = x;
      j !== void 0 && (x.$data && this.opts.$data && (j = me(j)), x.validateSchema = this.compile(j, !0));
    }
    const Y = {
      $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
    };
    function me(x) {
      return { anyOf: [x, Y] };
    }
  })(rr)), rr;
}
var Xe = {}, Ze = {}, Qe = {}, dn;
function us() {
  if (dn) return Qe;
  dn = 1, Object.defineProperty(Qe, "__esModule", { value: !0 });
  const e = {
    keyword: "id",
    code() {
      throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
    }
  };
  return Qe.default = e, Qe;
}
var Ee = {}, un;
function Sr() {
  if (un) return Ee;
  un = 1, Object.defineProperty(Ee, "__esModule", { value: !0 }), Ee.callRef = Ee.getValidate = void 0;
  const e = /* @__PURE__ */ Yt(), t = /* @__PURE__ */ _e(), s = /* @__PURE__ */ G(), o = /* @__PURE__ */ ve(), p = /* @__PURE__ */ Xt(), r = /* @__PURE__ */ X(), a = {
    keyword: "$ref",
    schemaType: "string",
    code($) {
      const { gen: g, schema: w, it: S } = $, { baseId: b, schemaEnv: E, validateName: v, opts: u, self: y } = S, { root: c } = E;
      if ((w === "#" || w === "#/") && b === c.baseId)
        return _();
      const f = p.resolveRef.call(y, c, b, w);
      if (f === void 0)
        throw new e.default(S.opts.uriResolver, b, w);
      if (f instanceof p.SchemaEnv)
        return n(f);
      return i(f);
      function _() {
        if (E === c)
          return d($, v, E, E.$async);
        const h = g.scopeValue("root", { ref: c });
        return d($, (0, s._)`${h}.validate`, c, c.$async);
      }
      function n(h) {
        const C = l($, h);
        d($, C, h, h.$async);
      }
      function i(h) {
        const C = g.scopeValue("schema", u.code.source === !0 ? { ref: h, code: (0, s.stringify)(h) } : { ref: h }), k = g.name("valid"), A = $.subschema({
          schema: h,
          dataTypes: [],
          schemaPath: s.nil,
          topSchemaRef: C,
          errSchemaPath: w
        }, k);
        $.mergeEvaluated(A), $.ok(k);
      }
    }
  };
  function l($, g) {
    const { gen: w } = $;
    return g.validate ? w.scopeValue("validate", { ref: g.validate }) : (0, s._)`${w.scopeValue("wrapper", { ref: g })}.validate`;
  }
  Ee.getValidate = l;
  function d($, g, w, S) {
    const { gen: b, it: E } = $, { allErrors: v, schemaEnv: u, opts: y } = E, c = y.passContext ? o.default.this : s.nil;
    S ? f() : _();
    function f() {
      if (!u.$async)
        throw new Error("async schema referenced by sync schema");
      const h = b.let("valid");
      b.try(() => {
        b.code((0, s._)`await ${(0, t.callValidateCode)($, g, c)}`), i(g), v || b.assign(h, !0);
      }, (C) => {
        b.if((0, s._)`!(${C} instanceof ${E.ValidationError})`, () => b.throw(C)), n(C), v || b.assign(h, !1);
      }), $.ok(h);
    }
    function _() {
      $.result((0, t.callValidateCode)($, g, c), () => i(g), () => n(g));
    }
    function n(h) {
      const C = (0, s._)`${h}.errors`;
      b.assign(o.default.vErrors, (0, s._)`${o.default.vErrors} === null ? ${C} : ${o.default.vErrors}.concat(${C})`), b.assign(o.default.errors, (0, s._)`${o.default.vErrors}.length`);
    }
    function i(h) {
      var C;
      if (!E.opts.unevaluated)
        return;
      const k = (C = w?.validate) === null || C === void 0 ? void 0 : C.evaluated;
      if (E.props !== !0)
        if (k && !k.dynamicProps)
          k.props !== void 0 && (E.props = r.mergeEvaluated.props(b, k.props, E.props));
        else {
          const A = b.var("props", (0, s._)`${h}.evaluated.props`);
          E.props = r.mergeEvaluated.props(b, A, E.props, s.Name);
        }
      if (E.items !== !0)
        if (k && !k.dynamicItems)
          k.items !== void 0 && (E.items = r.mergeEvaluated.items(b, k.items, E.items));
        else {
          const A = b.var("items", (0, s._)`${h}.evaluated.items`);
          E.items = r.mergeEvaluated.items(b, A, E.items, s.Name);
        }
    }
  }
  return Ee.callRef = d, Ee.default = a, Ee;
}
var fn;
function fs() {
  if (fn) return Ze;
  fn = 1, Object.defineProperty(Ze, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ us(), t = /* @__PURE__ */ Sr(), s = [
    "$schema",
    "$id",
    "$defs",
    "$vocabulary",
    { keyword: "$comment" },
    "definitions",
    e.default,
    t.default
  ];
  return Ze.default = s, Ze;
}
var et = {}, tt = {}, pn;
function ps() {
  if (pn) return tt;
  pn = 1, Object.defineProperty(tt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), t = e.operators, s = {
    maximum: { okStr: "<=", ok: t.LTE, fail: t.GT },
    minimum: { okStr: ">=", ok: t.GTE, fail: t.LT },
    exclusiveMaximum: { okStr: "<", ok: t.LT, fail: t.GTE },
    exclusiveMinimum: { okStr: ">", ok: t.GT, fail: t.LTE }
  }, o = {
    message: ({ keyword: r, schemaCode: a }) => (0, e.str)`must be ${s[r].okStr} ${a}`,
    params: ({ keyword: r, schemaCode: a }) => (0, e._)`{comparison: ${s[r].okStr}, limit: ${a}}`
  }, p = {
    keyword: Object.keys(s),
    type: "number",
    schemaType: "number",
    $data: !0,
    error: o,
    code(r) {
      const { keyword: a, data: l, schemaCode: d } = r;
      r.fail$data((0, e._)`${l} ${s[a].fail} ${d} || isNaN(${l})`);
    }
  };
  return tt.default = p, tt;
}
var rt = {}, hn;
function hs() {
  if (hn) return rt;
  hn = 1, Object.defineProperty(rt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), s = {
    keyword: "multipleOf",
    type: "number",
    schemaType: "number",
    $data: !0,
    error: {
      message: ({ schemaCode: o }) => (0, e.str)`must be multiple of ${o}`,
      params: ({ schemaCode: o }) => (0, e._)`{multipleOf: ${o}}`
    },
    code(o) {
      const { gen: p, data: r, schemaCode: a, it: l } = o, d = l.opts.multipleOfPrecision, $ = p.let("res"), g = d ? (0, e._)`Math.abs(Math.round(${$}) - ${$}) > 1e-${d}` : (0, e._)`${$} !== parseInt(${$})`;
      o.fail$data((0, e._)`(${a} === 0 || (${$} = ${r}/${a}, ${g}))`);
    }
  };
  return rt.default = s, rt;
}
var nt = {}, ot = {}, mn;
function ms() {
  if (mn) return ot;
  mn = 1, Object.defineProperty(ot, "__esModule", { value: !0 });
  function e(t) {
    const s = t.length;
    let o = 0, p = 0, r;
    for (; p < s; )
      o++, r = t.charCodeAt(p++), r >= 55296 && r <= 56319 && p < s && (r = t.charCodeAt(p), (r & 64512) === 56320 && p++);
    return o;
  }
  return ot.default = e, e.code = 'require("ajv/dist/runtime/ucs2length").default', ot;
}
var yn;
function ys() {
  if (yn) return nt;
  yn = 1, Object.defineProperty(nt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), s = /* @__PURE__ */ ms(), p = {
    keyword: ["maxLength", "minLength"],
    type: "string",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: r, schemaCode: a }) {
        const l = r === "maxLength" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${l} than ${a} characters`;
      },
      params: ({ schemaCode: r }) => (0, e._)`{limit: ${r}}`
    },
    code(r) {
      const { keyword: a, data: l, schemaCode: d, it: $ } = r, g = a === "maxLength" ? e.operators.GT : e.operators.LT, w = $.opts.unicode === !1 ? (0, e._)`${l}.length` : (0, e._)`${(0, t.useFunc)(r.gen, s.default)}(${l})`;
      r.fail$data((0, e._)`${w} ${g} ${d}`);
    }
  };
  return nt.default = p, nt;
}
var st = {}, gn;
function gs() {
  if (gn) return st;
  gn = 1, Object.defineProperty(st, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ _e(), t = /* @__PURE__ */ X(), s = /* @__PURE__ */ G(), p = {
    keyword: "pattern",
    type: "string",
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: r }) => (0, s.str)`must match pattern "${r}"`,
      params: ({ schemaCode: r }) => (0, s._)`{pattern: ${r}}`
    },
    code(r) {
      const { gen: a, data: l, $data: d, schema: $, schemaCode: g, it: w } = r, S = w.opts.unicodeRegExp ? "u" : "";
      if (d) {
        const { regExp: b } = w.opts.code, E = b.code === "new RegExp" ? (0, s._)`new RegExp` : (0, t.useFunc)(a, b), v = a.let("valid");
        a.try(() => a.assign(v, (0, s._)`${E}(${g}, ${S}).test(${l})`), () => a.assign(v, !1)), r.fail$data((0, s._)`!${v}`);
      } else {
        const b = (0, e.usePattern)(r, $);
        r.fail$data((0, s._)`!${b}.test(${l})`);
      }
    }
  };
  return st.default = p, st;
}
var at = {}, $n;
function $s() {
  if ($n) return at;
  $n = 1, Object.defineProperty(at, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), s = {
    keyword: ["maxProperties", "minProperties"],
    type: "object",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: o, schemaCode: p }) {
        const r = o === "maxProperties" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${r} than ${p} properties`;
      },
      params: ({ schemaCode: o }) => (0, e._)`{limit: ${o}}`
    },
    code(o) {
      const { keyword: p, data: r, schemaCode: a } = o, l = p === "maxProperties" ? e.operators.GT : e.operators.LT;
      o.fail$data((0, e._)`Object.keys(${r}).length ${l} ${a}`);
    }
  };
  return at.default = s, at;
}
var it = {}, vn;
function vs() {
  if (vn) return it;
  vn = 1, Object.defineProperty(it, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ _e(), t = /* @__PURE__ */ G(), s = /* @__PURE__ */ X(), p = {
    keyword: "required",
    type: "object",
    schemaType: "array",
    $data: !0,
    error: {
      message: ({ params: { missingProperty: r } }) => (0, t.str)`must have required property '${r}'`,
      params: ({ params: { missingProperty: r } }) => (0, t._)`{missingProperty: ${r}}`
    },
    code(r) {
      const { gen: a, schema: l, schemaCode: d, data: $, $data: g, it: w } = r, { opts: S } = w;
      if (!g && l.length === 0)
        return;
      const b = l.length >= S.loopRequired;
      if (w.allErrors ? E() : v(), S.strictRequired) {
        const c = r.parentSchema.properties, { definedProperties: f } = r.it;
        for (const _ of l)
          if (c?.[_] === void 0 && !f.has(_)) {
            const n = w.schemaEnv.baseId + w.errSchemaPath, i = `required property "${_}" is not defined at "${n}" (strictRequired)`;
            (0, s.checkStrictMode)(w, i, w.opts.strictRequired);
          }
      }
      function E() {
        if (b || g)
          r.block$data(t.nil, u);
        else
          for (const c of l)
            (0, e.checkReportMissingProp)(r, c);
      }
      function v() {
        const c = a.let("missing");
        if (b || g) {
          const f = a.let("valid", !0);
          r.block$data(f, () => y(c, f)), r.ok(f);
        } else
          a.if((0, e.checkMissingProp)(r, l, c)), (0, e.reportMissingProp)(r, c), a.else();
      }
      function u() {
        a.forOf("prop", d, (c) => {
          r.setParams({ missingProperty: c }), a.if((0, e.noPropertyInData)(a, $, c, S.ownProperties), () => r.error());
        });
      }
      function y(c, f) {
        r.setParams({ missingProperty: c }), a.forOf(c, d, () => {
          a.assign(f, (0, e.propertyInData)(a, $, c, S.ownProperties)), a.if((0, t.not)(f), () => {
            r.error(), a.break();
          });
        }, t.nil);
      }
    }
  };
  return it.default = p, it;
}
var ct = {}, _n;
function _s() {
  if (_n) return ct;
  _n = 1, Object.defineProperty(ct, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), s = {
    keyword: ["maxItems", "minItems"],
    type: "array",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: o, schemaCode: p }) {
        const r = o === "maxItems" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${r} than ${p} items`;
      },
      params: ({ schemaCode: o }) => (0, e._)`{limit: ${o}}`
    },
    code(o) {
      const { keyword: p, data: r, schemaCode: a } = o, l = p === "maxItems" ? e.operators.GT : e.operators.LT;
      o.fail$data((0, e._)`${r}.length ${l} ${a}`);
    }
  };
  return ct.default = s, ct;
}
var lt = {}, dt = {}, bn;
function Er() {
  if (bn) return dt;
  bn = 1, Object.defineProperty(dt, "__esModule", { value: !0 });
  const e = Eo();
  return e.code = 'require("ajv/dist/runtime/equal").default', dt.default = e, dt;
}
var wn;
function bs() {
  if (wn) return lt;
  wn = 1, Object.defineProperty(lt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Kt(), t = /* @__PURE__ */ G(), s = /* @__PURE__ */ X(), o = /* @__PURE__ */ Er(), r = {
    keyword: "uniqueItems",
    type: "array",
    schemaType: "boolean",
    $data: !0,
    error: {
      message: ({ params: { i: a, j: l } }) => (0, t.str)`must NOT have duplicate items (items ## ${l} and ${a} are identical)`,
      params: ({ params: { i: a, j: l } }) => (0, t._)`{i: ${a}, j: ${l}}`
    },
    code(a) {
      const { gen: l, data: d, $data: $, schema: g, parentSchema: w, schemaCode: S, it: b } = a;
      if (!$ && !g)
        return;
      const E = l.let("valid"), v = w.items ? (0, e.getSchemaTypes)(w.items) : [];
      a.block$data(E, u, (0, t._)`${S} === false`), a.ok(E);
      function u() {
        const _ = l.let("i", (0, t._)`${d}.length`), n = l.let("j");
        a.setParams({ i: _, j: n }), l.assign(E, !0), l.if((0, t._)`${_} > 1`, () => (y() ? c : f)(_, n));
      }
      function y() {
        return v.length > 0 && !v.some((_) => _ === "object" || _ === "array");
      }
      function c(_, n) {
        const i = l.name("item"), h = (0, e.checkDataTypes)(v, i, b.opts.strictNumbers, e.DataType.Wrong), C = l.const("indices", (0, t._)`{}`);
        l.for((0, t._)`;${_}--;`, () => {
          l.let(i, (0, t._)`${d}[${_}]`), l.if(h, (0, t._)`continue`), v.length > 1 && l.if((0, t._)`typeof ${i} == "string"`, (0, t._)`${i} += "_"`), l.if((0, t._)`typeof ${C}[${i}] == "number"`, () => {
            l.assign(n, (0, t._)`${C}[${i}]`), a.error(), l.assign(E, !1).break();
          }).code((0, t._)`${C}[${i}] = ${_}`);
        });
      }
      function f(_, n) {
        const i = (0, s.useFunc)(l, o.default), h = l.name("outer");
        l.label(h).for((0, t._)`;${_}--;`, () => l.for((0, t._)`${n} = ${_}; ${n}--;`, () => l.if((0, t._)`${i}(${d}[${_}], ${d}[${n}])`, () => {
          a.error(), l.assign(E, !1).break(h);
        })));
      }
    }
  };
  return lt.default = r, lt;
}
var ut = {}, Sn;
function ws() {
  if (Sn) return ut;
  Sn = 1, Object.defineProperty(ut, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), s = /* @__PURE__ */ Er(), p = {
    keyword: "const",
    $data: !0,
    error: {
      message: "must be equal to constant",
      params: ({ schemaCode: r }) => (0, e._)`{allowedValue: ${r}}`
    },
    code(r) {
      const { gen: a, data: l, $data: d, schemaCode: $, schema: g } = r;
      d || g && typeof g == "object" ? r.fail$data((0, e._)`!${(0, t.useFunc)(a, s.default)}(${l}, ${$})`) : r.fail((0, e._)`${g} !== ${l}`);
    }
  };
  return ut.default = p, ut;
}
var ft = {}, En;
function Ss() {
  if (En) return ft;
  En = 1, Object.defineProperty(ft, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), s = /* @__PURE__ */ Er(), p = {
    keyword: "enum",
    schemaType: "array",
    $data: !0,
    error: {
      message: "must be equal to one of the allowed values",
      params: ({ schemaCode: r }) => (0, e._)`{allowedValues: ${r}}`
    },
    code(r) {
      const { gen: a, data: l, $data: d, schema: $, schemaCode: g, it: w } = r;
      if (!d && $.length === 0)
        throw new Error("enum must have non-empty array");
      const S = $.length >= w.opts.loopEnum;
      let b;
      const E = () => b ?? (b = (0, t.useFunc)(a, s.default));
      let v;
      if (S || d)
        v = a.let("valid"), r.block$data(v, u);
      else {
        if (!Array.isArray($))
          throw new Error("ajv implementation error");
        const c = a.const("vSchema", g);
        v = (0, e.or)(...$.map((f, _) => y(c, _)));
      }
      r.pass(v);
      function u() {
        a.assign(v, !1), a.forOf("v", g, (c) => a.if((0, e._)`${E()}(${l}, ${c})`, () => a.assign(v, !0).break()));
      }
      function y(c, f) {
        const _ = $[f];
        return typeof _ == "object" && _ !== null ? (0, e._)`${E()}(${l}, ${c}[${f}])` : (0, e._)`${l} === ${_}`;
      }
    }
  };
  return ft.default = p, ft;
}
var Pn;
function Es() {
  if (Pn) return et;
  Pn = 1, Object.defineProperty(et, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ps(), t = /* @__PURE__ */ hs(), s = /* @__PURE__ */ ys(), o = /* @__PURE__ */ gs(), p = /* @__PURE__ */ $s(), r = /* @__PURE__ */ vs(), a = /* @__PURE__ */ _s(), l = /* @__PURE__ */ bs(), d = /* @__PURE__ */ ws(), $ = /* @__PURE__ */ Ss(), g = [
    // number
    e.default,
    t.default,
    // string
    s.default,
    o.default,
    // object
    p.default,
    r.default,
    // array
    a.default,
    l.default,
    // any
    { keyword: "type", schemaType: ["string", "array"] },
    { keyword: "nullable", schemaType: "boolean" },
    d.default,
    $.default
  ];
  return et.default = g, et;
}
var pt = {}, Te = {}, kn;
function ko() {
  if (kn) return Te;
  kn = 1, Object.defineProperty(Te, "__esModule", { value: !0 }), Te.validateAdditionalItems = void 0;
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
      const { parentSchema: a, it: l } = r, { items: d } = a;
      if (!Array.isArray(d)) {
        (0, t.checkStrictMode)(l, '"additionalItems" is ignored when "items" is not an array of schemas');
        return;
      }
      p(r, d);
    }
  };
  function p(r, a) {
    const { gen: l, schema: d, data: $, keyword: g, it: w } = r;
    w.items = !0;
    const S = l.const("len", (0, e._)`${$}.length`);
    if (d === !1)
      r.setParams({ len: a.length }), r.pass((0, e._)`${S} <= ${a.length}`);
    else if (typeof d == "object" && !(0, t.alwaysValidSchema)(w, d)) {
      const E = l.var("valid", (0, e._)`${S} <= ${a.length}`);
      l.if((0, e.not)(E), () => b(E)), r.ok(E);
    }
    function b(E) {
      l.forRange("i", a.length, S, (v) => {
        r.subschema({ keyword: g, dataProp: v, dataPropType: t.Type.Num }, E), w.allErrors || l.if((0, e.not)(E), () => l.break());
      });
    }
  }
  return Te.validateAdditionalItems = p, Te.default = o, Te;
}
var ht = {}, Me = {}, Cn;
function Co() {
  if (Cn) return Me;
  Cn = 1, Object.defineProperty(Me, "__esModule", { value: !0 }), Me.validateTuple = void 0;
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), s = /* @__PURE__ */ _e(), o = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "array", "boolean"],
    before: "uniqueItems",
    code(r) {
      const { schema: a, it: l } = r;
      if (Array.isArray(a))
        return p(r, "additionalItems", a);
      l.items = !0, !(0, t.alwaysValidSchema)(l, a) && r.ok((0, s.validateArray)(r));
    }
  };
  function p(r, a, l = r.schema) {
    const { gen: d, parentSchema: $, data: g, keyword: w, it: S } = r;
    v($), S.opts.unevaluated && l.length && S.items !== !0 && (S.items = t.mergeEvaluated.items(d, l.length, S.items));
    const b = d.name("valid"), E = d.const("len", (0, e._)`${g}.length`);
    l.forEach((u, y) => {
      (0, t.alwaysValidSchema)(S, u) || (d.if((0, e._)`${E} > ${y}`, () => r.subschema({
        keyword: w,
        schemaProp: y,
        dataProp: y
      }, b)), r.ok(b));
    });
    function v(u) {
      const { opts: y, errSchemaPath: c } = S, f = l.length, _ = f === u.minItems && (f === u.maxItems || u[a] === !1);
      if (y.strictTuples && !_) {
        const n = `"${w}" is ${f}-tuple, but minItems or maxItems/${a} are not specified or different at path "${c}"`;
        (0, t.checkStrictMode)(S, n, y.strictTuples);
      }
    }
  }
  return Me.validateTuple = p, Me.default = o, Me;
}
var Rn;
function Ps() {
  if (Rn) return ht;
  Rn = 1, Object.defineProperty(ht, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Co(), t = {
    keyword: "prefixItems",
    type: "array",
    schemaType: ["array"],
    before: "uniqueItems",
    code: (s) => (0, e.validateTuple)(s, "items")
  };
  return ht.default = t, ht;
}
var mt = {}, jn;
function ks() {
  if (jn) return mt;
  jn = 1, Object.defineProperty(mt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), s = /* @__PURE__ */ _e(), o = /* @__PURE__ */ ko(), r = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    error: {
      message: ({ params: { len: a } }) => (0, e.str)`must NOT have more than ${a} items`,
      params: ({ params: { len: a } }) => (0, e._)`{limit: ${a}}`
    },
    code(a) {
      const { schema: l, parentSchema: d, it: $ } = a, { prefixItems: g } = d;
      $.items = !0, !(0, t.alwaysValidSchema)($, l) && (g ? (0, o.validateAdditionalItems)(a, g) : a.ok((0, s.validateArray)(a)));
    }
  };
  return mt.default = r, mt;
}
var yt = {}, Nn;
function Cs() {
  if (Nn) return yt;
  Nn = 1, Object.defineProperty(yt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), o = {
    keyword: "contains",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    trackErrors: !0,
    error: {
      message: ({ params: { min: p, max: r } }) => r === void 0 ? (0, e.str)`must contain at least ${p} valid item(s)` : (0, e.str)`must contain at least ${p} and no more than ${r} valid item(s)`,
      params: ({ params: { min: p, max: r } }) => r === void 0 ? (0, e._)`{minContains: ${p}}` : (0, e._)`{minContains: ${p}, maxContains: ${r}}`
    },
    code(p) {
      const { gen: r, schema: a, parentSchema: l, data: d, it: $ } = p;
      let g, w;
      const { minContains: S, maxContains: b } = l;
      $.opts.next ? (g = S === void 0 ? 1 : S, w = b) : g = 1;
      const E = r.const("len", (0, e._)`${d}.length`);
      if (p.setParams({ min: g, max: w }), w === void 0 && g === 0) {
        (0, t.checkStrictMode)($, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
        return;
      }
      if (w !== void 0 && g > w) {
        (0, t.checkStrictMode)($, '"minContains" > "maxContains" is always invalid'), p.fail();
        return;
      }
      if ((0, t.alwaysValidSchema)($, a)) {
        let f = (0, e._)`${E} >= ${g}`;
        w !== void 0 && (f = (0, e._)`${f} && ${E} <= ${w}`), p.pass(f);
        return;
      }
      $.items = !0;
      const v = r.name("valid");
      w === void 0 && g === 1 ? y(v, () => r.if(v, () => r.break())) : g === 0 ? (r.let(v, !0), w !== void 0 && r.if((0, e._)`${d}.length > 0`, u)) : (r.let(v, !1), u()), p.result(v, () => p.reset());
      function u() {
        const f = r.name("_valid"), _ = r.let("count", 0);
        y(f, () => r.if(f, () => c(_)));
      }
      function y(f, _) {
        r.forRange("i", 0, E, (n) => {
          p.subschema({
            keyword: "contains",
            dataProp: n,
            dataPropType: t.Type.Num,
            compositeRule: !0
          }, f), _();
        });
      }
      function c(f) {
        r.code((0, e._)`${f}++`), w === void 0 ? r.if((0, e._)`${f} >= ${g}`, () => r.assign(v, !0).break()) : (r.if((0, e._)`${f} > ${w}`, () => r.assign(v, !1).break()), g === 1 ? r.assign(v, !0) : r.if((0, e._)`${f} >= ${g}`, () => r.assign(v, !0)));
      }
    }
  };
  return yt.default = o, yt;
}
var ur = {}, An;
function Pr() {
  return An || (An = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
    const t = /* @__PURE__ */ G(), s = /* @__PURE__ */ X(), o = /* @__PURE__ */ _e();
    e.error = {
      message: ({ params: { property: d, depsCount: $, deps: g } }) => {
        const w = $ === 1 ? "property" : "properties";
        return (0, t.str)`must have ${w} ${g} when property ${d} is present`;
      },
      params: ({ params: { property: d, depsCount: $, deps: g, missingProperty: w } }) => (0, t._)`{property: ${d},
    missingProperty: ${w},
    depsCount: ${$},
    deps: ${g}}`
      // TODO change to reference
    };
    const p = {
      keyword: "dependencies",
      type: "object",
      schemaType: "object",
      error: e.error,
      code(d) {
        const [$, g] = r(d);
        a(d, $), l(d, g);
      }
    };
    function r({ schema: d }) {
      const $ = {}, g = {};
      for (const w in d) {
        if (w === "__proto__")
          continue;
        const S = Array.isArray(d[w]) ? $ : g;
        S[w] = d[w];
      }
      return [$, g];
    }
    function a(d, $ = d.schema) {
      const { gen: g, data: w, it: S } = d;
      if (Object.keys($).length === 0)
        return;
      const b = g.let("missing");
      for (const E in $) {
        const v = $[E];
        if (v.length === 0)
          continue;
        const u = (0, o.propertyInData)(g, w, E, S.opts.ownProperties);
        d.setParams({
          property: E,
          depsCount: v.length,
          deps: v.join(", ")
        }), S.allErrors ? g.if(u, () => {
          for (const y of v)
            (0, o.checkReportMissingProp)(d, y);
        }) : (g.if((0, t._)`${u} && (${(0, o.checkMissingProp)(d, v, b)})`), (0, o.reportMissingProp)(d, b), g.else());
      }
    }
    e.validatePropertyDeps = a;
    function l(d, $ = d.schema) {
      const { gen: g, data: w, keyword: S, it: b } = d, E = g.name("valid");
      for (const v in $)
        (0, s.alwaysValidSchema)(b, $[v]) || (g.if(
          (0, o.propertyInData)(g, w, v, b.opts.ownProperties),
          () => {
            const u = d.subschema({ keyword: S, schemaProp: v }, E);
            d.mergeValidEvaluated(u, E);
          },
          () => g.var(E, !0)
          // TODO var
        ), d.ok(E));
    }
    e.validateSchemaDeps = l, e.default = p;
  })(ur)), ur;
}
var gt = {}, On;
function Rs() {
  if (On) return gt;
  On = 1, Object.defineProperty(gt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), o = {
    keyword: "propertyNames",
    type: "object",
    schemaType: ["object", "boolean"],
    error: {
      message: "property name must be valid",
      params: ({ params: p }) => (0, e._)`{propertyName: ${p.propertyName}}`
    },
    code(p) {
      const { gen: r, schema: a, data: l, it: d } = p;
      if ((0, t.alwaysValidSchema)(d, a))
        return;
      const $ = r.name("valid");
      r.forIn("key", l, (g) => {
        p.setParams({ propertyName: g }), p.subschema({
          keyword: "propertyNames",
          data: g,
          dataTypes: ["string"],
          propertyName: g,
          compositeRule: !0
        }, $), r.if((0, e.not)($), () => {
          p.error(!0), d.allErrors || r.break();
        });
      }), p.ok($);
    }
  };
  return gt.default = o, gt;
}
var $t = {}, Tn;
function Ro() {
  if (Tn) return $t;
  Tn = 1, Object.defineProperty($t, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ _e(), t = /* @__PURE__ */ G(), s = /* @__PURE__ */ ve(), o = /* @__PURE__ */ X(), r = {
    keyword: "additionalProperties",
    type: ["object"],
    schemaType: ["boolean", "object"],
    allowUndefined: !0,
    trackErrors: !0,
    error: {
      message: "must NOT have additional properties",
      params: ({ params: a }) => (0, t._)`{additionalProperty: ${a.additionalProperty}}`
    },
    code(a) {
      const { gen: l, schema: d, parentSchema: $, data: g, errsCount: w, it: S } = a;
      if (!w)
        throw new Error("ajv implementation error");
      const { allErrors: b, opts: E } = S;
      if (S.props = !0, E.removeAdditional !== "all" && (0, o.alwaysValidSchema)(S, d))
        return;
      const v = (0, e.allSchemaProperties)($.properties), u = (0, e.allSchemaProperties)($.patternProperties);
      y(), a.ok((0, t._)`${w} === ${s.default.errors}`);
      function y() {
        l.forIn("key", g, (i) => {
          !v.length && !u.length ? _(i) : l.if(c(i), () => _(i));
        });
      }
      function c(i) {
        let h;
        if (v.length > 8) {
          const C = (0, o.schemaRefOrVal)(S, $.properties, "properties");
          h = (0, e.isOwnProperty)(l, C, i);
        } else v.length ? h = (0, t.or)(...v.map((C) => (0, t._)`${i} === ${C}`)) : h = t.nil;
        return u.length && (h = (0, t.or)(h, ...u.map((C) => (0, t._)`${(0, e.usePattern)(a, C)}.test(${i})`))), (0, t.not)(h);
      }
      function f(i) {
        l.code((0, t._)`delete ${g}[${i}]`);
      }
      function _(i) {
        if (E.removeAdditional === "all" || E.removeAdditional && d === !1) {
          f(i);
          return;
        }
        if (d === !1) {
          a.setParams({ additionalProperty: i }), a.error(), b || l.break();
          return;
        }
        if (typeof d == "object" && !(0, o.alwaysValidSchema)(S, d)) {
          const h = l.name("valid");
          E.removeAdditional === "failing" ? (n(i, h, !1), l.if((0, t.not)(h), () => {
            a.reset(), f(i);
          })) : (n(i, h), b || l.if((0, t.not)(h), () => l.break()));
        }
      }
      function n(i, h, C) {
        const k = {
          keyword: "additionalProperties",
          dataProp: i,
          dataPropType: o.Type.Str
        };
        C === !1 && Object.assign(k, {
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }), a.subschema(k, h);
      }
    }
  };
  return $t.default = r, $t;
}
var vt = {}, Mn;
function js() {
  if (Mn) return vt;
  Mn = 1, Object.defineProperty(vt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Wt(), t = /* @__PURE__ */ _e(), s = /* @__PURE__ */ X(), o = /* @__PURE__ */ Ro(), p = {
    keyword: "properties",
    type: "object",
    schemaType: "object",
    code(r) {
      const { gen: a, schema: l, parentSchema: d, data: $, it: g } = r;
      g.opts.removeAdditional === "all" && d.additionalProperties === void 0 && o.default.code(new e.KeywordCxt(g, o.default, "additionalProperties"));
      const w = (0, t.allSchemaProperties)(l);
      for (const u of w)
        g.definedProperties.add(u);
      g.opts.unevaluated && w.length && g.props !== !0 && (g.props = s.mergeEvaluated.props(a, (0, s.toHash)(w), g.props));
      const S = w.filter((u) => !(0, s.alwaysValidSchema)(g, l[u]));
      if (S.length === 0)
        return;
      const b = a.name("valid");
      for (const u of S)
        E(u) ? v(u) : (a.if((0, t.propertyInData)(a, $, u, g.opts.ownProperties)), v(u), g.allErrors || a.else().var(b, !0), a.endIf()), r.it.definedProperties.add(u), r.ok(b);
      function E(u) {
        return g.opts.useDefaults && !g.compositeRule && l[u].default !== void 0;
      }
      function v(u) {
        r.subschema({
          keyword: "properties",
          schemaProp: u,
          dataProp: u
        }, b);
      }
    }
  };
  return vt.default = p, vt;
}
var _t = {}, In;
function Ns() {
  if (In) return _t;
  In = 1, Object.defineProperty(_t, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ _e(), t = /* @__PURE__ */ G(), s = /* @__PURE__ */ X(), o = /* @__PURE__ */ X(), p = {
    keyword: "patternProperties",
    type: "object",
    schemaType: "object",
    code(r) {
      const { gen: a, schema: l, data: d, parentSchema: $, it: g } = r, { opts: w } = g, S = (0, e.allSchemaProperties)(l), b = S.filter((_) => (0, s.alwaysValidSchema)(g, l[_]));
      if (S.length === 0 || b.length === S.length && (!g.opts.unevaluated || g.props === !0))
        return;
      const E = w.strictSchema && !w.allowMatchingProperties && $.properties, v = a.name("valid");
      g.props !== !0 && !(g.props instanceof t.Name) && (g.props = (0, o.evaluatedPropsToName)(a, g.props));
      const { props: u } = g;
      y();
      function y() {
        for (const _ of S)
          E && c(_), g.allErrors ? f(_) : (a.var(v, !0), f(_), a.if(v));
      }
      function c(_) {
        for (const n in E)
          new RegExp(_).test(n) && (0, s.checkStrictMode)(g, `property ${n} matches pattern ${_} (use allowMatchingProperties)`);
      }
      function f(_) {
        a.forIn("key", d, (n) => {
          a.if((0, t._)`${(0, e.usePattern)(r, _)}.test(${n})`, () => {
            const i = b.includes(_);
            i || r.subschema({
              keyword: "patternProperties",
              schemaProp: _,
              dataProp: n,
              dataPropType: o.Type.Str
            }, v), g.opts.unevaluated && u !== !0 ? a.assign((0, t._)`${u}[${n}]`, !0) : !i && !g.allErrors && a.if((0, t.not)(v), () => a.break());
          });
        });
      }
    }
  };
  return _t.default = p, _t;
}
var bt = {}, qn;
function As() {
  if (qn) return bt;
  qn = 1, Object.defineProperty(bt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ X(), t = {
    keyword: "not",
    schemaType: ["object", "boolean"],
    trackErrors: !0,
    code(s) {
      const { gen: o, schema: p, it: r } = s;
      if ((0, e.alwaysValidSchema)(r, p)) {
        s.fail();
        return;
      }
      const a = o.name("valid");
      s.subschema({
        keyword: "not",
        compositeRule: !0,
        createErrors: !1,
        allErrors: !1
      }, a), s.failResult(a, () => s.reset(), () => s.error());
    },
    error: { message: "must NOT be valid" }
  };
  return bt.default = t, bt;
}
var wt = {}, Dn;
function Os() {
  if (Dn) return wt;
  Dn = 1, Object.defineProperty(wt, "__esModule", { value: !0 });
  const t = {
    keyword: "anyOf",
    schemaType: "array",
    trackErrors: !0,
    code: (/* @__PURE__ */ _e()).validateUnion,
    error: { message: "must match a schema in anyOf" }
  };
  return wt.default = t, wt;
}
var St = {}, zn;
function Ts() {
  if (zn) return St;
  zn = 1, Object.defineProperty(St, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), o = {
    keyword: "oneOf",
    schemaType: "array",
    trackErrors: !0,
    error: {
      message: "must match exactly one schema in oneOf",
      params: ({ params: p }) => (0, e._)`{passingSchemas: ${p.passing}}`
    },
    code(p) {
      const { gen: r, schema: a, parentSchema: l, it: d } = p;
      if (!Array.isArray(a))
        throw new Error("ajv implementation error");
      if (d.opts.discriminator && l.discriminator)
        return;
      const $ = a, g = r.let("valid", !1), w = r.let("passing", null), S = r.name("_valid");
      p.setParams({ passing: w }), r.block(b), p.result(g, () => p.reset(), () => p.error(!0));
      function b() {
        $.forEach((E, v) => {
          let u;
          (0, t.alwaysValidSchema)(d, E) ? r.var(S, !0) : u = p.subschema({
            keyword: "oneOf",
            schemaProp: v,
            compositeRule: !0
          }, S), v > 0 && r.if((0, e._)`${S} && ${g}`).assign(g, !1).assign(w, (0, e._)`[${w}, ${v}]`).else(), r.if(S, () => {
            r.assign(g, !0), r.assign(w, v), u && p.mergeEvaluated(u, e.Name);
          });
        });
      }
    }
  };
  return St.default = o, St;
}
var Et = {}, xn;
function Ms() {
  if (xn) return Et;
  xn = 1, Object.defineProperty(Et, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ X(), t = {
    keyword: "allOf",
    schemaType: "array",
    code(s) {
      const { gen: o, schema: p, it: r } = s;
      if (!Array.isArray(p))
        throw new Error("ajv implementation error");
      const a = o.name("valid");
      p.forEach((l, d) => {
        if ((0, e.alwaysValidSchema)(r, l))
          return;
        const $ = s.subschema({ keyword: "allOf", schemaProp: d }, a);
        s.ok(a), s.mergeEvaluated($);
      });
    }
  };
  return Et.default = t, Et;
}
var Pt = {}, Vn;
function Is() {
  if (Vn) return Pt;
  Vn = 1, Object.defineProperty(Pt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), o = {
    keyword: "if",
    schemaType: ["object", "boolean"],
    trackErrors: !0,
    error: {
      message: ({ params: r }) => (0, e.str)`must match "${r.ifClause}" schema`,
      params: ({ params: r }) => (0, e._)`{failingKeyword: ${r.ifClause}}`
    },
    code(r) {
      const { gen: a, parentSchema: l, it: d } = r;
      l.then === void 0 && l.else === void 0 && (0, t.checkStrictMode)(d, '"if" without "then" and "else" is ignored');
      const $ = p(d, "then"), g = p(d, "else");
      if (!$ && !g)
        return;
      const w = a.let("valid", !0), S = a.name("_valid");
      if (b(), r.reset(), $ && g) {
        const v = a.let("ifClause");
        r.setParams({ ifClause: v }), a.if(S, E("then", v), E("else", v));
      } else $ ? a.if(S, E("then")) : a.if((0, e.not)(S), E("else"));
      r.pass(w, () => r.error(!0));
      function b() {
        const v = r.subschema({
          keyword: "if",
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }, S);
        r.mergeEvaluated(v);
      }
      function E(v, u) {
        return () => {
          const y = r.subschema({ keyword: v }, S);
          a.assign(w, S), r.mergeValidEvaluated(y, w), u ? a.assign(u, (0, e._)`${v}`) : r.setParams({ ifClause: v });
        };
      }
    }
  };
  function p(r, a) {
    const l = r.schema[a];
    return l !== void 0 && !(0, t.alwaysValidSchema)(r, l);
  }
  return Pt.default = o, Pt;
}
var kt = {}, Ln;
function qs() {
  if (Ln) return kt;
  Ln = 1, Object.defineProperty(kt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ X(), t = {
    keyword: ["then", "else"],
    schemaType: ["object", "boolean"],
    code({ keyword: s, parentSchema: o, it: p }) {
      o.if === void 0 && (0, e.checkStrictMode)(p, `"${s}" without "if" is ignored`);
    }
  };
  return kt.default = t, kt;
}
var Bn;
function Ds() {
  if (Bn) return pt;
  Bn = 1, Object.defineProperty(pt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ko(), t = /* @__PURE__ */ Ps(), s = /* @__PURE__ */ Co(), o = /* @__PURE__ */ ks(), p = /* @__PURE__ */ Cs(), r = /* @__PURE__ */ Pr(), a = /* @__PURE__ */ Rs(), l = /* @__PURE__ */ Ro(), d = /* @__PURE__ */ js(), $ = /* @__PURE__ */ Ns(), g = /* @__PURE__ */ As(), w = /* @__PURE__ */ Os(), S = /* @__PURE__ */ Ts(), b = /* @__PURE__ */ Ms(), E = /* @__PURE__ */ Is(), v = /* @__PURE__ */ qs();
  function u(y = !1) {
    const c = [
      // any
      g.default,
      w.default,
      S.default,
      b.default,
      E.default,
      v.default,
      // object
      a.default,
      l.default,
      r.default,
      d.default,
      $.default
    ];
    return y ? c.push(t.default, o.default) : c.push(e.default, s.default), c.push(p.default), c;
  }
  return pt.default = u, pt;
}
var Ct = {}, Ie = {}, Fn;
function jo() {
  if (Fn) return Ie;
  Fn = 1, Object.defineProperty(Ie, "__esModule", { value: !0 }), Ie.dynamicAnchor = void 0;
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ ve(), s = /* @__PURE__ */ Xt(), o = /* @__PURE__ */ Sr(), p = {
    keyword: "$dynamicAnchor",
    schemaType: "string",
    code: (l) => r(l, l.schema)
  };
  function r(l, d) {
    const { gen: $, it: g } = l;
    g.schemaEnv.root.dynamicAnchors[d] = !0;
    const w = (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(d)}`, S = g.errSchemaPath === "#" ? g.validateName : a(l);
    $.if((0, e._)`!${w}`, () => $.assign(w, S));
  }
  Ie.dynamicAnchor = r;
  function a(l) {
    const { schemaEnv: d, schema: $, self: g } = l.it, { root: w, baseId: S, localRefs: b, meta: E } = d.root, { schemaId: v } = g.opts, u = new s.SchemaEnv({ schema: $, schemaId: v, root: w, baseId: S, localRefs: b, meta: E });
    return s.compileSchema.call(g, u), (0, o.getValidate)(l, u);
  }
  return Ie.default = p, Ie;
}
var qe = {}, Kn;
function No() {
  if (Kn) return qe;
  Kn = 1, Object.defineProperty(qe, "__esModule", { value: !0 }), qe.dynamicRef = void 0;
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ ve(), s = /* @__PURE__ */ Sr(), o = {
    keyword: "$dynamicRef",
    schemaType: "string",
    code: (r) => p(r, r.schema)
  };
  function p(r, a) {
    const { gen: l, keyword: d, it: $ } = r;
    if (a[0] !== "#")
      throw new Error(`"${d}" only supports hash fragment reference`);
    const g = a.slice(1);
    if ($.allErrors)
      w();
    else {
      const b = l.let("valid", !1);
      w(b), r.ok(b);
    }
    function w(b) {
      if ($.schemaEnv.root.dynamicAnchors[g]) {
        const E = l.let("_v", (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(g)}`);
        l.if(E, S(E, b), S($.validateName, b));
      } else
        S($.validateName, b)();
    }
    function S(b, E) {
      return E ? () => l.block(() => {
        (0, s.callRef)(r, b), l.let(E, !0);
      }) : () => (0, s.callRef)(r, b);
    }
  }
  return qe.dynamicRef = p, qe.default = o, qe;
}
var Rt = {}, Un;
function zs() {
  if (Un) return Rt;
  Un = 1, Object.defineProperty(Rt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ jo(), t = /* @__PURE__ */ X(), s = {
    keyword: "$recursiveAnchor",
    schemaType: "boolean",
    code(o) {
      o.schema ? (0, e.dynamicAnchor)(o, "") : (0, t.checkStrictMode)(o.it, "$recursiveAnchor: false is ignored");
    }
  };
  return Rt.default = s, Rt;
}
var jt = {}, Hn;
function xs() {
  if (Hn) return jt;
  Hn = 1, Object.defineProperty(jt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ No(), t = {
    keyword: "$recursiveRef",
    schemaType: "string",
    code: (s) => (0, e.dynamicRef)(s, s.schema)
  };
  return jt.default = t, jt;
}
var Gn;
function Vs() {
  if (Gn) return Ct;
  Gn = 1, Object.defineProperty(Ct, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ jo(), t = /* @__PURE__ */ No(), s = /* @__PURE__ */ zs(), o = /* @__PURE__ */ xs(), p = [e.default, t.default, s.default, o.default];
  return Ct.default = p, Ct;
}
var Nt = {}, At = {}, Jn;
function Ls() {
  if (Jn) return At;
  Jn = 1, Object.defineProperty(At, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Pr(), t = {
    keyword: "dependentRequired",
    type: "object",
    schemaType: "object",
    error: e.error,
    code: (s) => (0, e.validatePropertyDeps)(s)
  };
  return At.default = t, At;
}
var Ot = {}, Wn;
function Bs() {
  if (Wn) return Ot;
  Wn = 1, Object.defineProperty(Ot, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Pr(), t = {
    keyword: "dependentSchemas",
    type: "object",
    schemaType: "object",
    code: (s) => (0, e.validateSchemaDeps)(s)
  };
  return Ot.default = t, Ot;
}
var Tt = {}, Yn;
function Fs() {
  if (Yn) return Tt;
  Yn = 1, Object.defineProperty(Tt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ X(), t = {
    keyword: ["maxContains", "minContains"],
    type: "array",
    schemaType: "number",
    code({ keyword: s, parentSchema: o, it: p }) {
      o.contains === void 0 && (0, e.checkStrictMode)(p, `"${s}" without "contains" is ignored`);
    }
  };
  return Tt.default = t, Tt;
}
var Xn;
function Ks() {
  if (Xn) return Nt;
  Xn = 1, Object.defineProperty(Nt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ls(), t = /* @__PURE__ */ Bs(), s = /* @__PURE__ */ Fs(), o = [e.default, t.default, s.default];
  return Nt.default = o, Nt;
}
var Mt = {}, It = {}, Zn;
function Us() {
  if (Zn) return It;
  Zn = 1, Object.defineProperty(It, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), s = /* @__PURE__ */ ve(), p = {
    keyword: "unevaluatedProperties",
    type: "object",
    schemaType: ["boolean", "object"],
    trackErrors: !0,
    error: {
      message: "must NOT have unevaluated properties",
      params: ({ params: r }) => (0, e._)`{unevaluatedProperty: ${r.unevaluatedProperty}}`
    },
    code(r) {
      const { gen: a, schema: l, data: d, errsCount: $, it: g } = r;
      if (!$)
        throw new Error("ajv implementation error");
      const { allErrors: w, props: S } = g;
      S instanceof e.Name ? a.if((0, e._)`${S} !== true`, () => a.forIn("key", d, (u) => a.if(E(S, u), () => b(u)))) : S !== !0 && a.forIn("key", d, (u) => S === void 0 ? b(u) : a.if(v(S, u), () => b(u))), g.props = !0, r.ok((0, e._)`${$} === ${s.default.errors}`);
      function b(u) {
        if (l === !1) {
          r.setParams({ unevaluatedProperty: u }), r.error(), w || a.break();
          return;
        }
        if (!(0, t.alwaysValidSchema)(g, l)) {
          const y = a.name("valid");
          r.subschema({
            keyword: "unevaluatedProperties",
            dataProp: u,
            dataPropType: t.Type.Str
          }, y), w || a.if((0, e.not)(y), () => a.break());
        }
      }
      function E(u, y) {
        return (0, e._)`!${u} || !${u}[${y}]`;
      }
      function v(u, y) {
        const c = [];
        for (const f in u)
          u[f] === !0 && c.push((0, e._)`${y} !== ${f}`);
        return (0, e.and)(...c);
      }
    }
  };
  return It.default = p, It;
}
var qt = {}, Qn;
function Hs() {
  if (Qn) return qt;
  Qn = 1, Object.defineProperty(qt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), o = {
    keyword: "unevaluatedItems",
    type: "array",
    schemaType: ["boolean", "object"],
    error: {
      message: ({ params: { len: p } }) => (0, e.str)`must NOT have more than ${p} items`,
      params: ({ params: { len: p } }) => (0, e._)`{limit: ${p}}`
    },
    code(p) {
      const { gen: r, schema: a, data: l, it: d } = p, $ = d.items || 0;
      if ($ === !0)
        return;
      const g = r.const("len", (0, e._)`${l}.length`);
      if (a === !1)
        p.setParams({ len: $ }), p.fail((0, e._)`${g} > ${$}`);
      else if (typeof a == "object" && !(0, t.alwaysValidSchema)(d, a)) {
        const S = r.var("valid", (0, e._)`${g} <= ${$}`);
        r.if((0, e.not)(S), () => w(S, $)), p.ok(S);
      }
      d.items = !0;
      function w(S, b) {
        r.forRange("i", b, g, (E) => {
          p.subschema({ keyword: "unevaluatedItems", dataProp: E, dataPropType: t.Type.Num }, S), d.allErrors || r.if((0, e.not)(S), () => r.break());
        });
      }
    }
  };
  return qt.default = o, qt;
}
var eo;
function Gs() {
  if (eo) return Mt;
  eo = 1, Object.defineProperty(Mt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Us(), t = /* @__PURE__ */ Hs(), s = [e.default, t.default];
  return Mt.default = s, Mt;
}
var Dt = {}, zt = {}, to;
function Js() {
  if (to) return zt;
  to = 1, Object.defineProperty(zt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), s = {
    keyword: "format",
    type: ["number", "string"],
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: o }) => (0, e.str)`must match format "${o}"`,
      params: ({ schemaCode: o }) => (0, e._)`{format: ${o}}`
    },
    code(o, p) {
      const { gen: r, data: a, $data: l, schema: d, schemaCode: $, it: g } = o, { opts: w, errSchemaPath: S, schemaEnv: b, self: E } = g;
      if (!w.validateFormats)
        return;
      l ? v() : u();
      function v() {
        const y = r.scopeValue("formats", {
          ref: E.formats,
          code: w.code.formats
        }), c = r.const("fDef", (0, e._)`${y}[${$}]`), f = r.let("fType"), _ = r.let("format");
        r.if((0, e._)`typeof ${c} == "object" && !(${c} instanceof RegExp)`, () => r.assign(f, (0, e._)`${c}.type || "string"`).assign(_, (0, e._)`${c}.validate`), () => r.assign(f, (0, e._)`"string"`).assign(_, c)), o.fail$data((0, e.or)(n(), i()));
        function n() {
          return w.strictSchema === !1 ? e.nil : (0, e._)`${$} && !${_}`;
        }
        function i() {
          const h = b.$async ? (0, e._)`(${c}.async ? await ${_}(${a}) : ${_}(${a}))` : (0, e._)`${_}(${a})`, C = (0, e._)`(typeof ${_} == "function" ? ${h} : ${_}.test(${a}))`;
          return (0, e._)`${_} && ${_} !== true && ${f} === ${p} && !${C}`;
        }
      }
      function u() {
        const y = E.formats[d];
        if (!y) {
          n();
          return;
        }
        if (y === !0)
          return;
        const [c, f, _] = i(y);
        c === p && o.pass(h());
        function n() {
          if (w.strictSchema === !1) {
            E.logger.warn(C());
            return;
          }
          throw new Error(C());
          function C() {
            return `unknown format "${d}" ignored in schema at path "${S}"`;
          }
        }
        function i(C) {
          const k = C instanceof RegExp ? (0, e.regexpCode)(C) : w.code.formats ? (0, e._)`${w.code.formats}${(0, e.getProperty)(d)}` : void 0, A = r.scopeValue("formats", { key: d, ref: C, code: k });
          return typeof C == "object" && !(C instanceof RegExp) ? [C.type || "string", C.validate, (0, e._)`${A}.validate`] : ["string", C, A];
        }
        function h() {
          if (typeof y == "object" && !(y instanceof RegExp) && y.async) {
            if (!b.$async)
              throw new Error("async format in sync schema");
            return (0, e._)`await ${_}(${a})`;
          }
          return typeof f == "function" ? (0, e._)`${_}(${a})` : (0, e._)`${_}.test(${a})`;
        }
      }
    }
  };
  return zt.default = s, zt;
}
var ro;
function Ws() {
  if (ro) return Dt;
  ro = 1, Object.defineProperty(Dt, "__esModule", { value: !0 });
  const t = [(/* @__PURE__ */ Js()).default];
  return Dt.default = t, Dt;
}
var je = {}, no;
function Ys() {
  return no || (no = 1, Object.defineProperty(je, "__esModule", { value: !0 }), je.contentVocabulary = je.metadataVocabulary = void 0, je.metadataVocabulary = [
    "title",
    "description",
    "default",
    "deprecated",
    "readOnly",
    "writeOnly",
    "examples"
  ], je.contentVocabulary = [
    "contentMediaType",
    "contentEncoding",
    "contentSchema"
  ]), je;
}
var oo;
function Xs() {
  if (oo) return Xe;
  oo = 1, Object.defineProperty(Xe, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ fs(), t = /* @__PURE__ */ Es(), s = /* @__PURE__ */ Ds(), o = /* @__PURE__ */ Vs(), p = /* @__PURE__ */ Ks(), r = /* @__PURE__ */ Gs(), a = /* @__PURE__ */ Ws(), l = /* @__PURE__ */ Ys(), d = [
    o.default,
    e.default,
    t.default,
    (0, s.default)(!0),
    a.default,
    l.metadataVocabulary,
    l.contentVocabulary,
    p.default,
    r.default
  ];
  return Xe.default = d, Xe;
}
var xt = {}, Ke = {}, so;
function Zs() {
  if (so) return Ke;
  so = 1, Object.defineProperty(Ke, "__esModule", { value: !0 }), Ke.DiscrError = void 0;
  var e;
  return (function(t) {
    t.Tag = "tag", t.Mapping = "mapping";
  })(e || (Ke.DiscrError = e = {})), Ke;
}
var ao;
function Qs() {
  if (ao) return xt;
  ao = 1, Object.defineProperty(xt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ Zs(), s = /* @__PURE__ */ Xt(), o = /* @__PURE__ */ Yt(), p = /* @__PURE__ */ X(), a = {
    keyword: "discriminator",
    type: "object",
    schemaType: "object",
    error: {
      message: ({ params: { discrError: l, tagName: d } }) => l === t.DiscrError.Tag ? `tag "${d}" must be string` : `value of tag "${d}" must be in oneOf`,
      params: ({ params: { discrError: l, tag: d, tagName: $ } }) => (0, e._)`{error: ${l}, tag: ${$}, tagValue: ${d}}`
    },
    code(l) {
      const { gen: d, data: $, schema: g, parentSchema: w, it: S } = l, { oneOf: b } = w;
      if (!S.opts.discriminator)
        throw new Error("discriminator: requires discriminator option");
      const E = g.propertyName;
      if (typeof E != "string")
        throw new Error("discriminator: requires propertyName");
      if (g.mapping)
        throw new Error("discriminator: mapping is not supported");
      if (!b)
        throw new Error("discriminator: requires oneOf keyword");
      const v = d.let("valid", !1), u = d.const("tag", (0, e._)`${$}${(0, e.getProperty)(E)}`);
      d.if((0, e._)`typeof ${u} == "string"`, () => y(), () => l.error(!1, { discrError: t.DiscrError.Tag, tag: u, tagName: E })), l.ok(v);
      function y() {
        const _ = f();
        d.if(!1);
        for (const n in _)
          d.elseIf((0, e._)`${u} === ${n}`), d.assign(v, c(_[n]));
        d.else(), l.error(!1, { discrError: t.DiscrError.Mapping, tag: u, tagName: E }), d.endIf();
      }
      function c(_) {
        const n = d.name("valid"), i = l.subschema({ keyword: "oneOf", schemaProp: _ }, n);
        return l.mergeEvaluated(i, e.Name), n;
      }
      function f() {
        var _;
        const n = {}, i = C(w);
        let h = !0;
        for (let M = 0; M < b.length; M++) {
          let T = b[M];
          if (T?.$ref && !(0, p.schemaHasRulesButRef)(T, S.self.RULES)) {
            const K = T.$ref;
            if (T = s.resolveRef.call(S.self, S.schemaEnv.root, S.baseId, K), T instanceof s.SchemaEnv && (T = T.schema), T === void 0)
              throw new o.default(S.opts.uriResolver, S.baseId, K);
          }
          const q = (_ = T?.properties) === null || _ === void 0 ? void 0 : _[E];
          if (typeof q != "object")
            throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${E}"`);
          h = h && (i || C(T)), k(q, M);
        }
        if (!h)
          throw new Error(`discriminator: "${E}" must be required`);
        return n;
        function C({ required: M }) {
          return Array.isArray(M) && M.includes(E);
        }
        function k(M, T) {
          if (M.const)
            A(M.const, T);
          else if (M.enum)
            for (const q of M.enum)
              A(q, T);
          else
            throw new Error(`discriminator: "properties/${E}" must have "const" or "enum"`);
        }
        function A(M, T) {
          if (typeof M != "string" || M in n)
            throw new Error(`discriminator: "${E}" values must be unique strings`);
          n[M] = T;
        }
      }
    }
  };
  return xt.default = a, xt;
}
var Vt = {};
const ea = "https://json-schema.org/draft/2020-12/schema", ta = "https://json-schema.org/draft/2020-12/schema", ra = { "https://json-schema.org/draft/2020-12/vocab/core": !0, "https://json-schema.org/draft/2020-12/vocab/applicator": !0, "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0, "https://json-schema.org/draft/2020-12/vocab/validation": !0, "https://json-schema.org/draft/2020-12/vocab/meta-data": !0, "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0, "https://json-schema.org/draft/2020-12/vocab/content": !0 }, na = "meta", oa = "Core and Validation specifications meta-schema", sa = [{ $ref: "meta/core" }, { $ref: "meta/applicator" }, { $ref: "meta/unevaluated" }, { $ref: "meta/validation" }, { $ref: "meta/meta-data" }, { $ref: "meta/format-annotation" }, { $ref: "meta/content" }], aa = ["object", "boolean"], ia = "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.", ca = { definitions: { $comment: '"definitions" has been replaced by "$defs".', type: "object", additionalProperties: { $dynamicRef: "#meta" }, deprecated: !0, default: {} }, dependencies: { $comment: '"dependencies" has been split and replaced by "dependentSchemas" and "dependentRequired" in order to serve their differing semantics.', type: "object", additionalProperties: { anyOf: [{ $dynamicRef: "#meta" }, { $ref: "meta/validation#/$defs/stringArray" }] }, deprecated: !0, default: {} }, $recursiveAnchor: { $comment: '"$recursiveAnchor" has been replaced by "$dynamicAnchor".', $ref: "meta/core#/$defs/anchorString", deprecated: !0 }, $recursiveRef: { $comment: '"$recursiveRef" has been replaced by "$dynamicRef".', $ref: "meta/core#/$defs/uriReferenceString", deprecated: !0 } }, la = {
  $schema: ea,
  $id: ta,
  $vocabulary: ra,
  $dynamicAnchor: na,
  title: oa,
  allOf: sa,
  type: aa,
  $comment: ia,
  properties: ca
}, da = "https://json-schema.org/draft/2020-12/schema", ua = "https://json-schema.org/draft/2020-12/meta/applicator", fa = { "https://json-schema.org/draft/2020-12/vocab/applicator": !0 }, pa = "meta", ha = "Applicator vocabulary meta-schema", ma = ["object", "boolean"], ya = { prefixItems: { $ref: "#/$defs/schemaArray" }, items: { $dynamicRef: "#meta" }, contains: { $dynamicRef: "#meta" }, additionalProperties: { $dynamicRef: "#meta" }, properties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, propertyNames: { format: "regex" }, default: {} }, dependentSchemas: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, propertyNames: { $dynamicRef: "#meta" }, if: { $dynamicRef: "#meta" }, then: { $dynamicRef: "#meta" }, else: { $dynamicRef: "#meta" }, allOf: { $ref: "#/$defs/schemaArray" }, anyOf: { $ref: "#/$defs/schemaArray" }, oneOf: { $ref: "#/$defs/schemaArray" }, not: { $dynamicRef: "#meta" } }, ga = { schemaArray: { type: "array", minItems: 1, items: { $dynamicRef: "#meta" } } }, $a = {
  $schema: da,
  $id: ua,
  $vocabulary: fa,
  $dynamicAnchor: pa,
  title: ha,
  type: ma,
  properties: ya,
  $defs: ga
}, va = "https://json-schema.org/draft/2020-12/schema", _a = "https://json-schema.org/draft/2020-12/meta/unevaluated", ba = { "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0 }, wa = "meta", Sa = "Unevaluated applicator vocabulary meta-schema", Ea = ["object", "boolean"], Pa = { unevaluatedItems: { $dynamicRef: "#meta" }, unevaluatedProperties: { $dynamicRef: "#meta" } }, ka = {
  $schema: va,
  $id: _a,
  $vocabulary: ba,
  $dynamicAnchor: wa,
  title: Sa,
  type: Ea,
  properties: Pa
}, Ca = "https://json-schema.org/draft/2020-12/schema", Ra = "https://json-schema.org/draft/2020-12/meta/content", ja = { "https://json-schema.org/draft/2020-12/vocab/content": !0 }, Na = "meta", Aa = "Content vocabulary meta-schema", Oa = ["object", "boolean"], Ta = { contentEncoding: { type: "string" }, contentMediaType: { type: "string" }, contentSchema: { $dynamicRef: "#meta" } }, Ma = {
  $schema: Ca,
  $id: Ra,
  $vocabulary: ja,
  $dynamicAnchor: Na,
  title: Aa,
  type: Oa,
  properties: Ta
}, Ia = "https://json-schema.org/draft/2020-12/schema", qa = "https://json-schema.org/draft/2020-12/meta/core", Da = { "https://json-schema.org/draft/2020-12/vocab/core": !0 }, za = "meta", xa = "Core vocabulary meta-schema", Va = ["object", "boolean"], La = { $id: { $ref: "#/$defs/uriReferenceString", $comment: "Non-empty fragments not allowed.", pattern: "^[^#]*#?$" }, $schema: { $ref: "#/$defs/uriString" }, $ref: { $ref: "#/$defs/uriReferenceString" }, $anchor: { $ref: "#/$defs/anchorString" }, $dynamicRef: { $ref: "#/$defs/uriReferenceString" }, $dynamicAnchor: { $ref: "#/$defs/anchorString" }, $vocabulary: { type: "object", propertyNames: { $ref: "#/$defs/uriString" }, additionalProperties: { type: "boolean" } }, $comment: { type: "string" }, $defs: { type: "object", additionalProperties: { $dynamicRef: "#meta" } } }, Ba = { anchorString: { type: "string", pattern: "^[A-Za-z_][-A-Za-z0-9._]*$" }, uriString: { type: "string", format: "uri" }, uriReferenceString: { type: "string", format: "uri-reference" } }, Fa = {
  $schema: Ia,
  $id: qa,
  $vocabulary: Da,
  $dynamicAnchor: za,
  title: xa,
  type: Va,
  properties: La,
  $defs: Ba
}, Ka = "https://json-schema.org/draft/2020-12/schema", Ua = "https://json-schema.org/draft/2020-12/meta/format-annotation", Ha = { "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0 }, Ga = "meta", Ja = "Format vocabulary meta-schema for annotation results", Wa = ["object", "boolean"], Ya = { format: { type: "string" } }, Xa = {
  $schema: Ka,
  $id: Ua,
  $vocabulary: Ha,
  $dynamicAnchor: Ga,
  title: Ja,
  type: Wa,
  properties: Ya
}, Za = "https://json-schema.org/draft/2020-12/schema", Qa = "https://json-schema.org/draft/2020-12/meta/meta-data", ei = { "https://json-schema.org/draft/2020-12/vocab/meta-data": !0 }, ti = "meta", ri = "Meta-data vocabulary meta-schema", ni = ["object", "boolean"], oi = { title: { type: "string" }, description: { type: "string" }, default: !0, deprecated: { type: "boolean", default: !1 }, readOnly: { type: "boolean", default: !1 }, writeOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 } }, si = {
  $schema: Za,
  $id: Qa,
  $vocabulary: ei,
  $dynamicAnchor: ti,
  title: ri,
  type: ni,
  properties: oi
}, ai = "https://json-schema.org/draft/2020-12/schema", ii = "https://json-schema.org/draft/2020-12/meta/validation", ci = { "https://json-schema.org/draft/2020-12/vocab/validation": !0 }, li = "meta", di = "Validation vocabulary meta-schema", ui = ["object", "boolean"], fi = { type: { anyOf: [{ $ref: "#/$defs/simpleTypes" }, { type: "array", items: { $ref: "#/$defs/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, const: !0, enum: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/$defs/nonNegativeInteger" }, minLength: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, maxItems: { $ref: "#/$defs/nonNegativeInteger" }, minItems: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, maxContains: { $ref: "#/$defs/nonNegativeInteger" }, minContains: { $ref: "#/$defs/nonNegativeInteger", default: 1 }, maxProperties: { $ref: "#/$defs/nonNegativeInteger" }, minProperties: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, required: { $ref: "#/$defs/stringArray" }, dependentRequired: { type: "object", additionalProperties: { $ref: "#/$defs/stringArray" } } }, pi = { nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { $ref: "#/$defs/nonNegativeInteger", default: 0 }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, hi = {
  $schema: ai,
  $id: ii,
  $vocabulary: ci,
  $dynamicAnchor: li,
  title: di,
  type: ui,
  properties: fi,
  $defs: pi
};
var io;
function mi() {
  if (io) return Vt;
  io = 1, Object.defineProperty(Vt, "__esModule", { value: !0 });
  const e = la, t = $a, s = ka, o = Ma, p = Fa, r = Xa, a = si, l = hi, d = ["/properties"];
  function $(g) {
    return [
      e,
      t,
      s,
      o,
      p,
      w(this, r),
      a,
      w(this, l)
    ].forEach((S) => this.addMetaSchema(S, void 0, !1)), this;
    function w(S, b) {
      return g ? S.$dataMetaSchema(b, d) : b;
    }
  }
  return Vt.default = $, Vt;
}
var co;
function yi() {
  return co || (co = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv2020 = void 0;
    const s = /* @__PURE__ */ ds(), o = /* @__PURE__ */ Xs(), p = /* @__PURE__ */ Qs(), r = /* @__PURE__ */ mi(), a = "https://json-schema.org/draft/2020-12/schema";
    class l extends s.default {
      constructor(b = {}) {
        super({
          ...b,
          dynamicRef: !0,
          next: !0,
          unevaluated: !0
        });
      }
      _addVocabularies() {
        super._addVocabularies(), o.default.forEach((b) => this.addVocabulary(b)), this.opts.discriminator && this.addKeyword(p.default);
      }
      _addDefaultMetaSchema() {
        super._addDefaultMetaSchema();
        const { $data: b, meta: E } = this.opts;
        E && (r.default.call(this, b), this.refs["http://json-schema.org/schema"] = a);
      }
      defaultMeta() {
        return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(a) ? a : void 0);
      }
    }
    t.Ajv2020 = l, e.exports = t = l, e.exports.Ajv2020 = l, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = l;
    var d = /* @__PURE__ */ Wt();
    Object.defineProperty(t, "KeywordCxt", { enumerable: !0, get: function() {
      return d.KeywordCxt;
    } });
    var $ = /* @__PURE__ */ G();
    Object.defineProperty(t, "_", { enumerable: !0, get: function() {
      return $._;
    } }), Object.defineProperty(t, "str", { enumerable: !0, get: function() {
      return $.str;
    } }), Object.defineProperty(t, "stringify", { enumerable: !0, get: function() {
      return $.stringify;
    } }), Object.defineProperty(t, "nil", { enumerable: !0, get: function() {
      return $.nil;
    } }), Object.defineProperty(t, "Name", { enumerable: !0, get: function() {
      return $.Name;
    } }), Object.defineProperty(t, "CodeGen", { enumerable: !0, get: function() {
      return $.CodeGen;
    } });
    var g = /* @__PURE__ */ wr();
    Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
      return g.default;
    } });
    var w = /* @__PURE__ */ Yt();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return w.default;
    } });
  })(He, He.exports)), He.exports;
}
var gi = /* @__PURE__ */ yi();
const $i = /* @__PURE__ */ Jo(gi), vi = "https://json-schema.org/draft/2020-12/schema", _i = "https://raw.githubusercontent.com/omsf-eco-infra/gufe-viz/schema/1.0/gufe-viz.schema.json", bi = "gufe-viz payload", wi = "The Python-to-TypeScript contract for gufe visualizations. Nothing generates this file, and both languages are downstream of it. The version lives in $id, not in the payload.\n\nTwo rules describe the whole document. First, one schema object per gufe class: every $def named *Viz is the visualization form of exactly one GufeTokenizable, it carries that object's `gufe-key`, and there is no second 'summary' or 'reference' variant of it anywhere. Second, every reference from one gufe object to another is that object's gufe key, and the objects themselves live in the `registry` on the root payload. So a ligand network's nodes are keys, a chemical system's components are keys, and a transformation's protocol is a key - and each one resolves to a complete, drawable object, never to a name-only stub.\n\nThe registry is what makes that affordable. An alchemical network whose forty systems share one protein carries that PDB once and points at it forty times, and the browser can still drill into it, because what it points at is a whole ProteinComponentViz. This is a single-shot dump rather than a conversation with a server, so the registry travels with the payload.", Si = [{ $ref: "#/$defs/SmallMoleculeComponentViz" }, { $ref: "#/$defs/ProteinComponentViz" }, { $ref: "#/$defs/SolvatedPDBComponentViz" }, { $ref: "#/$defs/ProteinMembraneComponentViz" }, { $ref: "#/$defs/SolventComponentViz" }, { $ref: "#/$defs/UnknownComponentViz" }, { $ref: "#/$defs/ProtocolViz" }, { $ref: "#/$defs/LigandAtomMappingViz" }, { $ref: "#/$defs/LigandNetworkViz" }, { $ref: "#/$defs/ChemicalSystemViz" }, { $ref: "#/$defs/TransformationViz" }, { $ref: "#/$defs/AlchemicalNetworkViz" }], Ei = /* @__PURE__ */ JSON.parse('{"GufeKey":{"title":"GufeKey","description":"A gufe key: the identity of a GufeTokenizable, of the form \'ClassName-<hex digest>\'. It is deterministic and repeatable within a software environment, which is what makes it usable both as a deduplication key here and as an identifier when debugging. Only its non-emptiness is checked - a qualified name can carry dots and angle brackets for a class defined inside a function, and refusing those would refuse a legitimate custom Component.","type":"string","minLength":1},"ComponentKey":{"title":"ComponentKey","description":"A gufe key naming a ComponentViz - any one of the six component types - in the registry. Identical to GufeKey at validation time: JSON Schema has no way to say \'this string is the gufe-key of an entry in that array, and that entry has this type\', because that is a join across two parts of the document. What the name buys is that the referent\'s type is stated in the contract and carried into the generated TypeScript, instead of living only in a test and a view. The unstateable half is held by Python tests and degraded over by the views - see the note on referential integrity in schema/README.md.","$ref":"#/$defs/GufeKey"},"SmallMoleculeComponentKey":{"title":"SmallMoleculeComponentKey","description":"A gufe key naming a SmallMoleculeComponentViz in the registry. Resolving it yields the whole molecule, SDF included, which is what replaced the inlined molA_sdf/molB_sdf fields: an endpoint of a mapping and a node of a ligand network are the same key pointing at the same entry. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ChemicalSystemKey":{"title":"ChemicalSystemKey","description":"A gufe key naming a ChemicalSystemViz in the registry. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ProtocolKey":{"title":"ProtocolKey","description":"A gufe key naming a ProtocolViz in the registry. Every transformation of a network usually names the same one. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"Registry":{"title":"Registry","description":"The pool of gufe objects this payload refers to by key, each a complete payload object in its own right. Entries are unique by `gufe-key` and sorted by (type, gufe-key) so a committed fixture is byte-stable. JSON Schema cannot express \'unique by a property\' or \'every reference resolves\', so both are covered by tests on the Python side and degraded over by the views.","type":"array","items":{"oneOf":[{"$ref":"#/$defs/ComponentViz"},{"$ref":"#/$defs/ProtocolViz"},{"$ref":"#/$defs/ChemicalSystemViz"}]}},"ComponentViz":{"title":"ComponentViz","description":"Any single chemical-system component","oneOf":[{"$ref":"#/$defs/SmallMoleculeComponentViz"},{"$ref":"#/$defs/ProteinComponentViz"},{"$ref":"#/$defs/SolvatedPDBComponentViz"},{"$ref":"#/$defs/ProteinMembraneComponentViz"},{"$ref":"#/$defs/SolventComponentViz"},{"$ref":"#/$defs/UnknownComponentViz"}]},"SmallMoleculeComponentViz":{"title":"SmallMoleculeComponentViz","description":"A small molecule, carried as a complete SDF record. The SDF holds the conformer, so nothing downstream reconstructs coordinates. This is the only form a small molecule takes: a ligand network\'s node and a mapping\'s endpoint are both keys pointing at one of these, so drilling into either yields the same drawable object.","type":"object","properties":{"type":{"const":"SmallMoleculeComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"sdf":{"type":"string","minLength":1,"description":"Complete inline SDF record, including the conformer."},"smiles":{"type":"string"},"total_charge":{"type":"integer","description":"Net formal charge. Displayed, never recomputed from the SDF."}},"required":["type","gufe-key","name","sdf","smiles","total_charge"],"additionalProperties":false},"ProteinComponentViz":{"title":"ProteinComponentViz","description":"A protein, carried as a complete PDB record.","type":"object","properties":{"type":{"const":"ProteinComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolvatedPDBComponentViz":{"title":"SolvatedPDBComponentViz","description":"A protein with explicit solvent. A distinct type rather than a flag on ProteinComponentViz, because the discriminator is what a view dispatches on and the presence of waters changes what a sensible default representation is.","type":"object","properties":{"type":{"const":"SolvatedPDBComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation, including explicit solvent."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"ProteinMembraneComponentViz":{"title":"ProteinMembraneComponentViz","description":"A protein embedded in a membrane.","type":"object","properties":{"type":{"const":"ProteinMembraneComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation of the protein and membrane system."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolventComponentViz":{"title":"SolventComponentViz","description":"Bulk solvent settings. There is no structure to draw, so these are flat fields suitable for rendering as a settings card.","type":"object","properties":{"type":{"const":"SolventComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"smiles":{"type":"string","minLength":1},"positive_ion":{"type":"string"},"negative_ion":{"type":"string"},"neutralize":{"type":"boolean"},"ion_concentration":{"type":"string","description":"Display-form concentration with units, for example \'0.15 molar\'. A string rather than a number because the unit is part of the value and the view only ever prints it."}},"required":["type","gufe-key","name","smiles","positive_ion","negative_ion","neutralize","ion_concentration"],"additionalProperties":false},"UnknownComponentViz":{"title":"UnknownComponentViz","description":"The graceful fallback for a component type this build does not recognize. gufe supports custom Component subclasses, so meeting one is an expected outcome rather than an error, and the browser answers it with \'sorry, there is no visualization for this\'. This covers an unrecognized type only: a recognized component whose serializer fails is a bug, and raises in Python rather than arriving here wearing a disguise.","type":"object","properties":{"type":{"const":"UnknownComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The gufe class name, so the panel can say which type it could not draw."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ProtocolViz":{"title":"ProtocolViz","description":"A gufe Protocol, named. Every transformation in an alchemical network usually shares one, so this is a registry entry that many edges point at rather than a class name repeated per edge. Settings are deliberately absent for now: they are large, deeply nested, and nothing draws them yet - adding a `settings` field later is additive and breaks nothing.","type":"object","properties":{"type":{"const":"ProtocolViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The Protocol\'s class name, which is what identifies it to a reader - a Protocol has no name of its own, so `name` is usually empty."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ChemicalSystemViz":{"title":"ChemicalSystemViz","description":"A gufe ChemicalSystem: labels mapped to the gufe keys of its components. There is one of these, used standalone and as a node of an alchemical network alike - the components are keys in both cases, so a network\'s node is a complete chemical system that can be drilled into, not a summary of one. The shared protein of forty such systems is then carried once.","type":"object","properties":{"type":{"const":"ChemicalSystemViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"components":{"type":"object","description":"ChemicalSystem labels mapped to the gufe keys of the components in the registry.","additionalProperties":{"$ref":"#/$defs/ComponentKey"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","components"],"additionalProperties":false},"AtomMapping":{"title":"AtomMapping","description":"Atom index correspondence from molecule A to molecule B, as a list of index pairs. A list rather than an object keyed by A\'s index, because JSON object keys can only be strings: keying by index would put decimal strings such as \'12\' in the payload and leave both languages casting them back to integers, and it is Python\'s dict-of-int shape only by resemblance. As a list, both indices stay integers, and \'an entry has a B index for every A index\' becomes a `required` the schema states rather than a convention a reader has to trust. Pairs are ordered by `index_A` so a committed fixture is byte-stable.","type":"array","items":{"type":"object","properties":{"index_A":{"type":"integer","minimum":0,"description":"An atom index in molecule A."},"index_B":{"type":"integer","minimum":0,"description":"The atom index in molecule B that it maps to."}},"required":["index_A","index_B"],"additionalProperties":false}},"Annotations":{"title":"Annotations","description":"Free-form mapping metadata. gufe puts nothing here by design and every mapper picks its own keys, so this is deliberately open. Values are whatever survived being made JSON-safe. Displayed but never interpreted, with the single exception of \'score\'.","type":"object"},"LigandAtomMappingViz":{"title":"LigandAtomMappingViz","description":"One atom mapping between two small molecules. This is also exactly what an edge of a ligand network is - there is no separate edge type - because the two endpoints are gufe keys either way: standalone they resolve in this object\'s own registry, and in a network they resolve in the network\'s, where they are the same entries the nodes name. `componentA` and `componentB` are the molecules the two sides of `componentA_to_componentB` index into: an `index_A` is an atom of the SmallMoleculeComponentViz that `componentA` names, and an `index_B` an atom of `componentB`\'s. This is what the inlined `molA_sdf`/`molB_sdf` fields became - the same molecules, carried once in the registry and reached through a key.","type":"object","properties":{"type":{"const":"LigandAtomMappingViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"componentA":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentB":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentA_to_componentB":{"$ref":"#/$defs/AtomMapping"},"score":{"type":["number","null"],"description":"The \'score\' annotation when it is a plain number, otherwise null. This is the one annotation key that is interpreted rather than displayed: it drives the edge colouring and the force layout\'s link distance."},"annotations":{"$ref":"#/$defs/Annotations"},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","componentA","componentB","componentA_to_componentB","score","annotations"],"additionalProperties":false},"LigandNetworkViz":{"title":"LigandNetworkViz","description":"A ligand network: the ligands in the registry, the nodes as keys into it, and the mappings as edges. The nodes are exactly what repeats here - a mapping names two of them, and every ligand is named by several mappings - so a forty-ligand network carries each SDF once. Deliberately not gufe\'s GraphML: that format embeds a gufe to_json moldict per node, so forwarding it would relocate the decoding problem into the browser rather than avoid it.","type":"object","properties":{"type":{"const":"LigandNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ligand, resolved in `registry`.","items":{"$ref":"#/$defs/SmallMoleculeComponentKey"}},"edges":{"type":"array","description":"The mappings, whose `componentA` and `componentB` name nodes of this network. JSON Schema cannot express that referential constraint, so a Python test covers it, and the view drops a dangling edge with a banner rather than failing.","items":{"$ref":"#/$defs/LigandAtomMappingViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false},"TransformationViz":{"title":"TransformationViz","description":"A transformation between two chemical systems, both named by gufe key, as is its protocol - `stateA` is the system it starts from, `stateB` the one it ends at, and every edge of a network usually names the same protocol. This is also exactly what an edge of an alchemical network is - there is no separate edge type - because `stateA` and `stateB` are keys either way, and in a network they are the keys the nodes name. NonTransformation uses this type too: it exposes the same stateA and stateB properties, both its single system, so it renders as a diff with no differences.","type":"object","properties":{"type":{"const":"TransformationViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"protocol":{"$ref":"#/$defs/ProtocolKey"},"stateA":{"$ref":"#/$defs/ChemicalSystemKey"},"stateB":{"$ref":"#/$defs/ChemicalSystemKey"},"mappings":{"type":"array","items":{"$ref":"#/$defs/LigandAtomMappingViz"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","protocol","stateA","stateB","mappings"],"additionalProperties":false},"AlchemicalNetworkViz":{"title":"AlchemicalNetworkViz","description":"A graph of chemical systems joined by transformations. What repeats here is not the nodes and edges themselves but what they are made of: in practice every system shares one protein and every transformation shares one protocol. Both live in the registry, once, as whole objects - so this view can show composition and topology while still letting a reader open a node and see the protein.","type":"object","properties":{"type":{"const":"AlchemicalNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ChemicalSystem, resolved in `registry`.","items":{"$ref":"#/$defs/ChemicalSystemKey"}},"edges":{"type":"array","description":"The transformations, whose `stateA` and `stateB` name nodes of this network.","items":{"$ref":"#/$defs/TransformationViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false}}'), kr = {
  $schema: vi,
  $id: _i,
  title: bi,
  description: wi,
  oneOf: Si,
  $defs: Ei
}, rc = [
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
], Cr = kr.$id, Rr = new $i({ allErrors: !0, strict: !1 });
Rr.addSchema(kr, Cr);
const lo = Rr.getSchema(Cr), Ao = Object.entries(kr.$defs).filter(
  ([e, t]) => t.properties?.type?.const === e
).map(([e]) => e).sort(), nc = Ao, jr = /* @__PURE__ */ new Map();
for (const e of Ao) {
  const t = Rr.getSchema(`${Cr}#/$defs/${e}`);
  t && jr.set(e, t);
}
const hr = { valid: !0, issues: [] };
function mr(e) {
  return (e ?? []).map((t) => ({
    path: t.instancePath || "",
    message: t.keyword === "additionalProperties" ? `unknown property ${JSON.stringify(t.params.additionalProperty)}` : t.message ?? "is invalid"
  }));
}
function Pi(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return {
      valid: !1,
      issues: [{ path: "", message: "must be a JSON object" }]
    };
  const t = e.type, s = typeof t == "string" ? jr.get(t) : void 0;
  return s ? s(e) ? hr : { valid: !1, issues: mr(s.errors) } : lo(e) ? hr : { valid: !1, issues: mr(lo.errors) };
}
function oc(e, t) {
  const s = jr.get(e);
  return s ? s(t) ? hr : { valid: !1, issues: mr(s.errors) } : {
    valid: !1,
    issues: [
      { path: "", message: `unknown payload type ${JSON.stringify(e)}` }
    ]
  };
}
function ki(e, t = 8) {
  const s = e.slice(0, t).map((o) => `${o.path || "(root)"}: ${o.message}`);
  return e.length > t && s.push(`... and ${e.length - t} more`), s.join(`
`);
}
const Nr = {
  SmallMoleculeComponentViz: "gufe-small-molecule",
  ProteinComponentViz: "gufe-protein",
  LigandNetworkViz: "gufe-ligand-network"
};
function Oo(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return {
      message: "This does not look like a gufe-viz payload (expected a JSON object)."
    };
  const { type: t } = e;
  if (typeof t != "string" || !t)
    return {
      message: "This payload has no `type`, so there is nothing to say what it is."
    };
  if (!Nr[t]) return Ci(t);
  const { valid: s, issues: o } = Pi(e);
  return s ? null : {
    message: `This payload says it is a ${t}, but it does not match the gufe-viz schema.`,
    detail: ki(o)
  };
}
function Ci(e) {
  const t = Object.keys(Nr).sort().join(", ");
  return {
    message: `Sorry, there is no visualization for ${e} yet. This build can draw: ${t}.`
  };
}
function sc(e) {
  return Oo(e)?.message ?? null;
}
class Ri extends Ut {
  placeholder() {
    return "Waiting for data...";
  }
  renderView(t, s) {
    Ho("payload", s, this);
    const o = Oo(s);
    if (o)
      return t.appendChild(ji(o, s)), {};
    const p = s.type, r = Nr[p], a = document.createElement(r);
    return a.style.cssText = "flex:1;min-height:0;min-width:0;", a.payload = s, t.appendChild(a), {
      onResize: () => a.resize?.(),
      // Removing the child fires its own `disconnectedCallback`, which is where
      // its viewers and observers are released - no manual teardown here.
      cleanup: () => a.remove()
    };
  }
}
function ji(e, t) {
  const s = F(
    "div",
    "flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:32px;"
  );
  s.appendChild(ce(e.message));
  const o = (r, a) => F(
    "div",
    "max-width:640px;padding:8px 12px;border-radius:6px;font-size:11px;white-space:pre-wrap;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;overflow-wrap:anywhere;" + (a ? `background:${V.warnBg};color:${V.warnFg};border:1px solid ${V.warnBorder};` : `background:${V.panelBg};color:${V.textMuted2};border:1px solid ${V.cardBorder};`),
    r
  );
  e.detail && s.appendChild(o(e.detail, !0));
  const p = Ni(t);
  return p && s.appendChild(o(p, !1)), s;
}
function Ni(e) {
  if (e == null || typeof e != "object") return null;
  const t = e, s = [];
  typeof t.type == "string" && s.push(`type: ${Bt(t.type)}`), typeof t.name == "string" && t.name && s.push(`name: ${Bt(t.name)}`);
  const o = Object.keys(e);
  return o.length && s.push(
    `keys: ${o.slice(0, 12).join(", ")}${o.length > 12 ? ", ..." : ""}`
  ), s.length ? s.join(`
`) : null;
}
Ht("gufe-view", Ri);
const Ar = {
  threeDmol: "https://3dmol.org/build/3Dmol-min.js",
  rdkit: "https://unpkg.com/@rdkit/rdkit/dist/RDKit_minimal.js",
  d3: "https://cdn.jsdelivr.net/npm/d3@7/+esm"
};
function Or(e) {
  const t = globalThis.__gufeEngines?.[e];
  return t ? Promise.resolve(t) : null;
}
function To(e, t) {
  return new Promise((s, o) => {
    const p = document.createElement("script");
    p.src = e, p.onload = () => s(), p.onerror = () => o(new Error(`Failed to load ${t}`)), document.head.appendChild(p);
  });
}
let xe = null, De = null;
function Mo() {
  if (De) return De;
  const e = Or("threeDmol");
  return e ? (De = e.then((t) => xe = t || window.$3Dmol), De) : (De = (async () => {
    if (window.$3Dmol) return xe = window.$3Dmol;
    if (await To(Ar.threeDmol, "3Dmol.js"), !window.$3Dmol) throw new Error("3Dmol.js loaded but $3Dmol is undefined");
    return xe = window.$3Dmol;
  })(), De);
}
let ze = null;
function yr() {
  if (ze) return ze;
  const e = Or("rdkit");
  return e ? (ze = e.then((t) => window.RDKit = t), ze) : (ze = (async () => {
    if (window.RDKit) return window.RDKit;
    if (await To(Ar.rdkit, "RDKit"), !window.initRDKitModule) throw new Error("RDKit loaded but initRDKitModule is undefined");
    return window.RDKit = await window.initRDKitModule();
  })(), ze);
}
let fr = null;
function Ai() {
  if (!fr) {
    const e = Ar.d3;
    fr = Or("d3") ?? import(
      /* @vite-ignore */
      e
    );
  }
  return fr;
}
const Oi = `
`, uo = "$$$$", Ti = (e) => e.indexOf(uo) >= 0 ? e : `${e}${Oi}${uo}`;
function gr(e) {
  const t = String(e).split(/\r?\n/);
  if (t.length < 4) return null;
  const s = parseInt(t[3].slice(0, 3), 10), o = parseInt(t[3].slice(3, 6), 10);
  return isNaN(s) || isNaN(o) ? null : { atoms: s, bonds: o };
}
function $r(e, t, s) {
  let o = null;
  try {
    if (o = e.get_mol(t, JSON.stringify({ removeHs: !0 })), !o) return null;
    try {
      o.set_new_coords(!0);
    } catch {
    }
    return o.get_svg(s, s) || null;
  } catch (p) {
    return console.warn("[gufe-viz] depictSVG threw -", $e(p)), null;
  } finally {
    if (o)
      try {
        o.delete();
      } catch {
      }
  }
}
function Mi(e, t, s) {
  e.innerHTML = t;
  const o = e.querySelector("svg");
  o && (o.removeAttribute("width"), o.removeAttribute("height"), o.getAttribute("viewBox") || o.setAttribute("viewBox", `0 0 ${s} ${s}`), o.setAttribute("preserveAspectRatio", "xMidYMid meet"), o.setAttribute("style", "width:100%;height:100%;max-width:100%;max-height:100%;"));
}
const Ii = [
  { id: "stick", label: "Stick", title: "Sticks only" },
  { id: "ball", label: "Ball+Stick", title: "Ball and stick" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" }
], fo = {
  stick: { stick: { radius: 0.15, colorscheme: "Jmol" } },
  ball: { stick: { radius: 0.12, colorscheme: "Jmol" }, sphere: { scale: 0.28, colorscheme: "Jmol" } },
  sphere: { sphere: { scale: 1, colorscheme: "Jmol" } }
}, po = 400;
class qi extends Ut {
  placeholder() {
    return "Waiting for a SmallMoleculeComponent payload...";
  }
  renderView(t, s) {
    const o = s.sdf, p = s.name ?? "", r = s.smiles, a = s.total_charge;
    t.appendChild(_o(p || "Unnamed molecule", "SmallMoleculeComponent"));
    const l = F("div", "flex:1;display:flex;flex-direction:row;overflow:hidden;min-height:0;");
    t.appendChild(l);
    const d = F("div", "flex:1 1 50%;min-width:0;display:flex;flex-direction:column;"), $ = F("div", "flex:1 1 50%;min-width:0;display:flex;flex-direction:column;position:relative;");
    l.appendChild(d), l.appendChild(F("div", `width:1px;flex-shrink:0;background:${V.splitBorder};`)), l.appendChild($);
    const g = (n) => F("div", `flex-shrink:0;padding:4px 10px;font-size:12px;font-weight:bold;color:${V.labelFg};background:${V.labelBg};`, n);
    d.appendChild(g("2D"));
    const w = F(
      "div",
      `flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:8px;background:${V.canvas2DBg};`
    );
    d.appendChild(w), $.appendChild(g("3D"));
    const S = bo();
    $.appendChild(S.wrap);
    const b = F(
      "div",
      `flex-shrink:0;display:flex;flex-wrap:wrap;align-items:baseline;gap:6px 20px;padding:8px 16px;font-size:12px;background:${V.toolbarBg};border-top:1px solid ${V.toolbarBorder};color:${V.textPrimary};`
    );
    t.appendChild(b);
    const E = o ? gr(o) : null, v = [
      ["Name", p || ke, !1],
      ["SMILES", r || ke, !0],
      ["Charge", a == null ? ke : String(a), !1],
      ["Atoms", E ? String(E.atoms) : ke, !1],
      ["Bonds", E ? String(E.bonds) : ke, !1]
    ];
    for (const [n, i, h] of v) {
      const C = F("div", "display:flex;align-items:baseline;gap:6px;min-width:0;");
      C.appendChild(
        F(
          "span",
          `font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;flex-shrink:0;color:${V.textMuted2};`,
          n
        )
      );
      const k = F(
        "span",
        `user-select:text;cursor:text;color:${V.textPrimary}` + (h ? ";font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:11px;overflow-wrap:anywhere;" : ""),
        i
      );
      k.title = i, C.appendChild(k), b.appendChild(C);
    }
    if (!o || !o.trim())
      return w.appendChild(ce("No molecule provided")), S.container.appendChild(ce("No molecule provided")), {};
    w.appendChild(ce("Loading 2D depiction...")), yr().then((n) => {
      const i = $r(n, o, po);
      i ? Mi(w, i, po) : w.replaceChildren(ce("Failed to parse molecule", !0));
    }).catch((n) => {
      w.replaceChildren(ce(`RDKit failed to load: ${$e(n)}`, !0));
    });
    let u = null, y = "stick", c = !1;
    const f = F(
      "div",
      `position:absolute;bottom:10px;right:10px;display:flex;gap:4px;padding:4px;border-radius:6px;z-index:10;background:${V.switcherBg};box-shadow:0 2px 8px rgba(0,0,0,0.25);`
    );
    f.appendChild(
      vo(Ii, y, (n) => {
        y = n, u && (u.setStyle({}, fo[n]), u.render());
      })
    );
    const _ = F("button", `${br}margin-left:4px;`, "Spin");
    return _.title = "Toggle continuous rotation", _.onclick = () => {
      c = !c, _.style.background = c ? V.btnBgActive : V.btnBg;
      try {
        u?.spin(c ? "y" : !1);
      } catch {
      }
    }, f.appendChild(_), $.appendChild(f), S.container.appendChild(ce("Loading 3D viewer...")), Mo().then(() => {
      S.container.replaceChildren(), u = xe.createViewer(S.container, { backgroundColor: V.viewerBg }), u.addModel(Ti(o), "sdf"), u.setStyle({}, fo[y]), u.zoomTo(), u.render();
    }).catch((n) => {
      S.container.replaceChildren(ce(`3D render failed: ${$e(n)}`, !0));
    }), {
      onResize() {
        u && (u.resize(), u.render());
      },
      cleanup() {
        if (u) {
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
Ht("gufe-small-molecule", qi);
const Io = ["HOH", "WAT", "SOL", "TIP3"], ho = { hetflag: !1 }, Di = { hetflag: !0 }, zi = { resn: Io }, Pe = {
  stick: { radius: 0.15 },
  sphere: { scale: 0.3 },
  hetero: { stickRadius: 0.2, sphereScale: 0.28 },
  water: { stickRadius: 0.05, sphereScale: 0.18 },
  surfaceOpacity: 0.85,
  /** Above this many atoms a surface is slow enough to be worth warning about. */
  surfaceAtomWarn: 4e4
};
function xi(e) {
  const t = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Set();
  let o = 0, p = 0, r = 0, a = 1 / 0, l = -1 / 0;
  for (const d of e.split(/\r?\n/)) {
    const $ = d.slice(0, 6);
    if ($ === "ENDMDL") break;
    if ($ !== "ATOM  " && $ !== "HETATM") continue;
    o++, $ === "HETATM" && p++;
    const g = d.slice(17, 20).trim(), w = d.slice(21, 22).trim() || "_", S = d.slice(22, 26).trim(), b = d.slice(26, 27).trim();
    Io.indexOf(g) !== -1 && r++, t.add(w), s.add(`${w}|${S}${b}|${g}`);
    const E = parseInt(S, 10);
    isNaN(E) || (E < a && (a = E), E > l && (l = E));
  }
  return {
    chains: t.size,
    residues: s.size,
    atoms: o,
    hetatms: p,
    waters: r,
    heteroNonWater: p - r,
    resiMin: a === 1 / 0 ? 0 : a,
    resiMax: l === -1 / 0 ? 0 : l
  };
}
function Vi(e) {
  return `${Le(e.chains)} chains · ${Le(e.residues)} residues · ${Le(e.atoms)} atoms · ${Le(e.hetatms)} HETATM` + (e.waters > 0 ? ` (${Le(e.waters)} water)` : "");
}
function Li(e, t) {
  return e === "chain" ? { colorscheme: "chain" } : e === "ss" ? { colorscheme: "ssJmol" } : e === "spectrum" && t && t.resiMax > t.resiMin ? { colorscheme: { prop: "resi", gradient: "roygb", min: t.resiMin, max: t.resiMax } } : { colorscheme: "Jmol" };
}
function mo(e, t, s, o) {
  const p = o || (() => {
  }), r = Li(t.color, s);
  try {
    e.removeAllSurfaces();
  } catch {
  }
  if (e.setStyle({}, {}), e.setStyle(
    ho,
    t.rep === "stick" ? { stick: { radius: Pe.stick.radius, ...r } } : t.rep === "sphere" ? { sphere: { scale: Pe.sphere.scale, ...r } } : (
      // For 'surface' the shell is added separately; leave the atoms bare so
      // it is not cluttered from the inside.
      t.rep === "surface" ? {} : { cartoon: { ...r } }
    )
  ), e.setStyle(
    Di,
    t.hetero ? {
      stick: { radius: Pe.hetero.stickRadius, colorscheme: "Jmol" },
      sphere: { scale: Pe.hetero.sphereScale, colorscheme: "Jmol" }
    } : {}
  ), e.setStyle(
    zi,
    t.waters ? {
      stick: { radius: Pe.water.stickRadius, colorscheme: "Jmol" },
      sphere: { scale: Pe.water.sphereScale, colorscheme: "Jmol" }
    } : {}
  ), t.rep !== "surface") {
    p(null), e.render();
    return;
  }
  p(
    s && s.atoms > Pe.surfaceAtomWarn ? "Computing surface (large structure, this may take a while)..." : "Computing surface..."
  ), e.render(), setTimeout(() => {
    try {
      Promise.resolve(
        e.addSurface(xe.SurfaceType.VDW, { opacity: Pe.surfaceOpacity, ...r }, ho)
      ).then(() => {
        p(null), e.render();
      }).catch((a) => p(`Surface failed: ${$e(a)}`, "error"));
    } catch (a) {
      p(`Surface failed: ${$e(a)}`, "error");
    }
  }, 30);
}
const Bi = [
  { id: "cartoon", label: "Cartoon", title: "Ribbon / cartoon backbone" },
  { id: "surface", label: "Surface", title: "Molecular (VDW) surface" },
  { id: "stick", label: "Stick", title: "All-atom sticks" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" }
], Fi = [
  { id: "chain", label: "Chain" },
  { id: "spectrum", label: "Spectrum" },
  { id: "ss", label: "Secondary structure" },
  { id: "element", label: "Element" }
];
class Ki extends Ut {
  placeholder() {
    return "Waiting for a ProteinComponent payload...";
  }
  renderView(t, s) {
    const o = s.pdb, p = s.name ?? "", r = { rep: "cartoon", color: "chain", waters: !1, hetero: !0 };
    let a = null, l = null;
    const d = F(
      "div",
      `display:flex;align-items:center;gap:14px;flex-wrap:wrap;padding:8px 14px;flex-shrink:0;font-size:12px;background:${V.toolbarBg};border-bottom:1px solid ${V.toolbarBorder};color:${V.textPrimary};`
    );
    t.appendChild(d), d.appendChild(
      F("span", `font-weight:700;font-size:14px;letter-spacing:.02em;color:${V.titleColor};`, p || "Protein")
    );
    const $ = (c) => F("span", `font-size:11px;color:${V.textMuted};`, c);
    d.appendChild($("Style:")), d.appendChild(
      vo(Bi, r.rep, (c) => {
        r.rep = c, y();
      })
    ), d.appendChild($("Color:"));
    const g = F("select", $o);
    for (const c of Fi) {
      const f = F("option", "", c.label);
      f.value = c.id, g.appendChild(f);
    }
    g.value = r.color, g.addEventListener("change", () => {
      r.color = g.value, y();
    }), d.appendChild(g);
    const w = F("div", "display:flex;gap:4px;");
    d.appendChild(w);
    const S = [
      ["waters", "Waters", "Show water molecules", () => y()],
      ["hetero", "Hetero", "Show hetero atoms / ligands / ions / lipids", () => y()],
      ["spin", "Spin", "Rotate the view continuously", () => a?.spin(r.spin ? "y" : !1)]
    ];
    for (const [c, f, _, n] of S) {
      const i = F("button", br, f);
      i.title = _, i.style.background = r[c] ? V.btnBgActive : V.btnBg, i.onclick = () => {
        r[c] = !r[c], i.style.background = r[c] ? V.btnBgActive : V.btnBg, n();
      }, w.appendChild(i);
    }
    const b = F("span", `margin-left:auto;font-size:11px;white-space:nowrap;color:${V.textMuted2};`);
    d.appendChild(b);
    const E = bo();
    t.appendChild(E.wrap);
    const v = F(
      "div",
      "position:absolute;top:12px;left:50%;transform:translateX(-50%);padding:6px 14px;border-radius:6px;font-size:12px;z-index:20;display:none;pointer-events:none;"
    );
    E.wrap.appendChild(v);
    const u = (c, f) => {
      if (c == null) {
        v.style.display = "none";
        return;
      }
      v.textContent = c, v.style.display = "block";
      const _ = f === "error";
      v.style.background = _ ? V.warnBg : V.toolbarBg, v.style.color = _ ? V.warnFg : V.textMuted, v.style.border = `1px solid ${_ ? V.warnBorder : V.toolbarBorder}`;
    };
    function y() {
      a && mo(a, r, l, u);
    }
    if (!o || !o.trim())
      return u("No protein data - waiting for a PDB payload."), {};
    try {
      l = xi(o), b.textContent = Vi(l);
    } catch (c) {
      u(`⚠ PDB parse error: ${$e(c)}`, "error");
    }
    return u("Loading 3D viewer..."), Mo().then(() => {
      a = xe.createViewer(E.container, { backgroundColor: V.viewerBg }), a.addModel(o, "pdb"), mo(a, r, l, u), a.zoomTo(), a.spin(r.spin ? "y" : !1), a.render();
    }).catch((c) => {
      u(`⚠ Failed to render structure: ${$e(c)}`, "error");
    }), {
      onResize() {
        a && (a.resize(), a.render());
      },
      cleanup() {
        if (a) {
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
Ht("gufe-protein", Ki);
function Ui(e) {
  const t = /* @__PURE__ */ new Map();
  return vr(e, t, /* @__PURE__ */ new Set()), t;
}
function vr(e, t, s) {
  if (e == null || typeof e != "object" || s.has(e)) return;
  if (s.add(e), Array.isArray(e)) {
    for (const p of e) vr(p, t, s);
    return;
  }
  const o = e.registry;
  if (Array.isArray(o))
    for (const p of o) {
      const r = p["gufe-key"];
      typeof r == "string" && r && !t.has(r) && t.set(r, p);
    }
  for (const p of Object.values(e)) vr(p, t, s);
}
function Hi(e, t) {
  return t ? e.get(t) : void 0;
}
function _r(e, t, s) {
  const o = Hi(e, t);
  return o?.type === s ? o : void 0;
}
function Gi(e) {
  return e.name ? e.name : (e["gufe-key"].split("-").pop() ?? e["gufe-key"]).slice(0, 6);
}
const Ji = ["Force-directed", "Circular", "Radial"], Lt = 34, Ue = 200, pr = 1.5, Wi = 6, Yi = 16, he = {
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
}, qo = "http://www.w3.org/2000/svg";
function ae(e, t = {}) {
  const s = document.createElementNS(qo, e);
  for (const [o, p] of Object.entries(t)) s.setAttribute(o, String(p));
  return s;
}
function yo(e, t) {
  const s = document.createElementNS(qo, "title");
  return s.textContent = t, e.appendChild(s), e;
}
function Xi(e) {
  const t = parseInt(e.replace("#", ""), 16);
  return [t >> 16 & 255, t >> 8 & 255, t & 255];
}
function go(e) {
  const [t, s] = V.netEdgeRamp.map(Xi), o = Math.max(0, Math.min(1, e ?? 0.5));
  return `rgb(${t.map((r, a) => Math.round(r + (s[a] - r) * o)).join(",")})`;
}
const Ne = Gi, Zi = (e, t) => e.length > t ? `${e.slice(0, t - 1)}...` : e;
function ac(e, t) {
  const s = _r(t, e.componentA, "SmallMoleculeComponentViz"), o = _r(t, e.componentB, "SmallMoleculeComponentViz");
  return !s || !o ? null : { ...e, registry: s["gufe-key"] === o["gufe-key"] ? [s] : [s, o] };
}
class Qi extends Ut {
  placeholder() {
    return "Waiting for a LigandNetwork payload...";
  }
  renderView(t, s) {
    const o = Ui(s), p = [];
    let r = 0;
    for (const k of s.nodes ?? []) {
      const A = _r(o, k, "SmallMoleculeComponentViz");
      if (!A) {
        r++;
        continue;
      }
      p.push({ ...A, x: 0, y: 0 });
    }
    const a = new Map(p.map((k) => [k["gufe-key"], k])), l = [];
    let d = 0;
    for (const k of s.edges ?? []) {
      const A = a.get(k.componentA), M = a.get(k.componentB);
      if (!A || !M) {
        d++;
        continue;
      }
      l.push({ ...k, index: l.length, from: A, to: M });
    }
    const $ = _o(s.name || "Ligand network", "LigandNetwork");
    $.statsEl.appendChild(Oe("ligands", String(p.length))), $.statsEl.appendChild(Oe("mappings", String(l.length))), t.appendChild($);
    const g = F("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    t.appendChild(g);
    const w = F("div", `flex:1 1 58%;min-width:0;display:flex;flex-direction:column;background:${V.netCanvasBg};`), S = F("div", `flex:1 1 42%;min-width:0;display:flex;flex-direction:column;background:${V.appBg};`);
    g.appendChild(w), g.appendChild(F("div", `width:1px;flex-shrink:0;background:${V.splitBorder};`)), g.appendChild(S);
    const b = F("div", `flex:1;position:relative;overflow:hidden;min-height:0;background:${V.netCanvasBg};`);
    w.appendChild(b);
    const E = this.#r((k) => C(k));
    w.appendChild(E.bar);
    const v = this.#e(S);
    if (!p.length)
      return b.appendChild(
        ce(
          r ? "None of this network's ligands are in its registry." : "This network has no ligands."
        )
      ), v.message("Nothing to show."), {};
    r && tr(
      b,
      `${r} ligand${r === 1 ? "" : "s"} named by this network are not in its registry`
    ), d && tr(b, `${d} mapping${d === 1 ? "" : "s"} name a ligand this network does not contain`);
    const u = yr().catch((k) => (console.warn("[gufe-viz] RDKit failed to load:", $e(k)), null));
    let y = l.length ? 0 : -1, c = null, f = "Force-directed", _ = !1, n = !0, i = () => {
    };
    const h = (k) => {
      y = k, v.show(l[k] ?? null), i();
    }, C = (k = f) => {
      f = k, c?.(), c = null, b.querySelector("svg")?.remove();
      const A = b.clientWidth || 800, M = b.clientHeight || 600;
      ec(p, A, M, f, l);
      const T = () => {
        if (!n) return;
        const q = this.#n(b, p, l, A, M, h);
        i = () => q.setSelected(y), c = q.cleanup, i(), u.then((K) => K && q.depict(K)).catch(() => {
        });
      };
      if (f !== "Force-directed" || _) {
        T();
        return;
      }
      tc(p, l, A, M).then((q) => {
        if (n) {
          if (q) {
            T();
            return;
          }
          _ = !0, E.picker.value = "Circular", tr(b, "d3 could not be loaded - showing the circular layout instead"), C("Circular");
        }
      }, T);
    };
    return C(), v.show(l[y] ?? null), {
      onResize: () => C(),
      cleanup: () => {
        n = !1, c?.();
      }
    };
  }
  #r(t) {
    const s = F(
      "div",
      `display:flex;align-items:center;gap:10px;flex-wrap:wrap;padding:8px 14px;flex-shrink:0;background:${V.toolbarBg};border-top:1px solid ${V.toolbarBorder};`
    ), o = F("div", `display:flex;align-items:center;gap:6px;font-size:11px;color:${V.textMuted};`);
    o.appendChild(F("span", "", "score")), o.appendChild(
      F(
        "span",
        `width:40px;height:4px;border-radius:2px;background:linear-gradient(to right,${V.netEdgeRamp.join(",")});`
      )
    ), o.appendChild(F("span", "", "0 -> 1")), s.appendChild(o), s.appendChild(F("label", `font-size:12px;margin-left:auto;color:${V.textMuted};`, "Layout"));
    const p = F("select", $o);
    for (const r of Ji) {
      const a = F("option", "", r);
      a.value = r, p.appendChild(a);
    }
    return p.onchange = () => t(p.value), s.appendChild(p), { bar: s, picker: p };
  }
  /** The right-hand pane: what the selected mapping is, in words and pictures. */
  #e(t) {
    const s = F(
      "div",
      `flex-shrink:0;padding:4px 10px;font-size:12px;font-weight:bold;color:${V.labelFg};background:${V.labelBg};`,
      "Selected mapping"
    ), o = F("div", "flex:1;min-height:0;overflow:auto;display:flex;flex-direction:column;");
    t.appendChild(s), t.appendChild(o);
    const p = (a) => o.replaceChildren(ce(a));
    return { show: (a) => {
      if (!a) {
        p("Click an edge to see its mapping.");
        return;
      }
      o.replaceChildren();
      const l = F(
        "div",
        `padding:10px 14px;font-size:13px;font-weight:600;color:${V.textPrimary};border-bottom:1px solid ${V.toolbarBorder};`,
        `${Ne(a.from)} -> ${Ne(a.to)}`
      );
      o.appendChild(l);
      const d = F("div", "display:flex;flex-direction:row;min-height:180px;");
      o.appendChild(d);
      const $ = [a.from.sdf, a.to.sdf].map((v, u) => {
        const y = F("div", "flex:1 1 50%;min-width:0;display:flex;flex-direction:column;");
        y.appendChild(
          F("div", `padding:4px 10px;font-size:11px;color:${V.textMuted2};`, u === 0 ? "A" : "B")
        );
        const c = F(
          "div",
          `flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:6px;background:${V.canvas2DBg};`
        );
        return c.appendChild(ce("...")), y.appendChild(c), d.appendChild(y), { box: c, sdf: v };
      }), g = (a.componentA_to_componentB ?? []).length, w = gr(a.from.sdf), S = gr(a.to.sdf), b = F(
        "div",
        `display:flex;flex-wrap:wrap;gap:8px 16px;padding:10px 14px;font-size:11px;color:${V.textMuted};border-top:1px solid ${V.toolbarBorder};`
      );
      b.appendChild(Oe("score", a.score == null ? ke : a.score.toFixed(3), go(a.score))), b.appendChild(Oe("mapped atoms", String(g))), b.appendChild(Oe("atoms A", w ? String(w.atoms) : ke)), b.appendChild(Oe("atoms B", S ? String(S.atoms) : ke)), o.appendChild(b);
      const E = Object.entries(a.annotations ?? {}).filter(([v]) => v !== "score");
      if (E.length) {
        const v = F(
          "div",
          `padding:0 14px 12px;font-size:11px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;color:${V.textMuted2};`
        );
        for (const [u, y] of E)
          v.appendChild(F("div", "", `${u}: ${String(y)}`));
        o.appendChild(v);
      }
      yr().then((v) => {
        for (const { box: u, sdf: y } of $) {
          const c = $r(v, y, Ue);
          if (u.replaceChildren(), c) {
            u.innerHTML = c;
            const f = u.querySelector("svg");
            f?.removeAttribute("width"), f?.removeAttribute("height"), f?.setAttribute("style", "width:100%;height:100%;");
          } else
            u.appendChild(ce("Failed to parse molecule", !0));
        }
      }).catch((v) => {
        for (const { box: u } of $) u.replaceChildren(ce(`RDKit failed to load: ${$e(v)}`, !0));
      });
    }, message: p };
  }
  /** Build the SVG for the current node positions. Returns the handles the
   * caller needs afterwards: selection, depictions, and teardown. */
  #n(t, s, o, p, r, a) {
    const l = ae("svg", { width: p, height: r, style: "display:block;touch-action:none;" }), d = ae("g");
    l.appendChild(d), t.appendChild(l);
    const $ = [], g = ae("g"), w = ae("g"), S = ae("g", { "pointer-events": "none" }), b = ae("g");
    d.append(g, w, S, b);
    for (const f of o) {
      const _ = go(f.score), n = ae("line", {
        stroke: V.netHaloColor,
        "stroke-width": pr + 12,
        "stroke-linecap": "round",
        opacity: 0,
        "pointer-events": "none"
      }), i = ae("line", {
        stroke: _,
        "stroke-width": pr + (f.score ?? 0.5) * (Wi - pr),
        "stroke-opacity": 0.9,
        "pointer-events": "none"
      }), h = yo(
        ae("line", { stroke: "transparent", "stroke-width": Yi, style: "cursor:pointer;" }),
        `${Ne(f.from)} -> ${Ne(f.to)}${f.score == null ? "" : `
score ${f.score.toFixed(3)}`}`
      );
      if (h.addEventListener("click", (C) => {
        C.stopPropagation(), a(f.index);
      }), $.push(n), g.append(n, i), w.appendChild(h), f.score != null) {
        const C = ae("text", {
          "text-anchor": "middle",
          "dominant-baseline": "middle",
          "font-size": 10,
          "font-weight": 600,
          fill: V.netEdgeLabel
        });
        C.textContent = f.score.toFixed(2), S.appendChild(C);
      } else
        S.appendChild(ae("text"));
    }
    const E = [], v = [], u = s.map((f) => {
      const _ = yo(ae("g", { style: "cursor:grab;" }), `${Ne(f)}
${f.smiles ?? ""}
${f["gufe-key"]}`);
      _.appendChild(
        ae("circle", {
          r: Lt,
          fill: V.netNodeFill,
          stroke: V.netNodeStroke,
          "stroke-width": 1.5
        })
      );
      const n = ae("g", { "pointer-events": "none" });
      _.appendChild(n), E.push(n);
      const i = ae("text", {
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        "font-size": 16,
        "font-weight": 700,
        fill: V.netInitials,
        "pointer-events": "none"
      });
      i.textContent = Ne(f).slice(0, 2).toUpperCase(), _.appendChild(i), v.push(i);
      const h = ae("text", {
        "text-anchor": "middle",
        y: Lt + 14,
        "font-size": 11,
        "font-weight": 600,
        fill: V.netNodeLabel,
        "pointer-events": "none"
      });
      return h.textContent = Zi(Ne(f), 16), _.appendChild(h), b.appendChild(_), _;
    }), y = () => {
      o.forEach((f, _) => {
        for (const i of [$[_], g.children[_ * 2 + 1], w.children[_]]) {
          const h = i;
          h.setAttribute("x1", String(f.from.x)), h.setAttribute("y1", String(f.from.y)), h.setAttribute("x2", String(f.to.x)), h.setAttribute("y2", String(f.to.y));
        }
        const n = S.children[_];
        n.setAttribute("x", String((f.from.x + f.to.x) / 2)), n.setAttribute("y", String((f.from.y + f.to.y) / 2 - 8));
      }), s.forEach((f, _) => u[_].setAttribute("transform", `translate(${f.x},${f.y})`));
    };
    y();
    const c = this.#t(l, d, s, u, y);
    return {
      setSelected(f) {
        $.forEach((_, n) => _.setAttribute("opacity", n === f ? "0.95" : "0"));
      },
      depict(f) {
        const _ = (Lt - 4) * 2 / Ue, n = new DOMParser();
        let i = 0;
        return s.forEach((h, C) => {
          const k = h.sdf && $r(f, h.sdf, Ue);
          if (!k) return;
          const A = n.parseFromString(k, "image/svg+xml").documentElement;
          if (!A || A.nodeName.toLowerCase() === "parsererror") return;
          const M = E[C];
          M.setAttribute(
            "transform",
            `translate(${-_ * Ue / 2},${-_ * Ue / 2}) scale(${_})`
          );
          let T = 0;
          for (const q of Array.from(A.childNodes)) {
            if (q.nodeType !== 1) continue;
            const K = q.nodeName.toLowerCase();
            if (!(K === "defs" || K === "metadata" || K === "title")) {
              if (K === "rect") {
                const ee = (q.getAttribute("fill") ?? "").toLowerCase();
                if (ee === "#ffffff" || ee === "white" || ee === "rgb(255,255,255)") continue;
              }
              M.appendChild(document.importNode(q, !0)), T++;
            }
          }
          T && (v[C].setAttribute("display", "none"), i++);
        }), i;
      },
      cleanup: c.cleanup
    };
  }
  /** Wheel zoom, background pan, node drag - ~40 lines instead of d3-zoom and
   * d3-drag, and they keep working when d3 is unreachable. */
  #t(t, s, o, p, r) {
    let a = 1, l = 0, d = 0;
    const $ = () => s.setAttribute("transform", `translate(${l},${d}) scale(${a})`), g = (v) => {
      v.preventDefault();
      const u = t.getBoundingClientRect(), y = v.clientX - u.left, c = v.clientY - u.top, f = Math.min(5 / a, Math.max(0.15 / a, Math.exp(-v.deltaY * 2e-3)));
      l = y - (y - l) * f, d = c - (c - d) * f, a *= f, $();
    };
    t.addEventListener("wheel", g, { passive: !1 });
    let w = null;
    const S = (v) => {
      w = { x: v.clientX - l, y: v.clientY - d };
    }, b = (v) => {
      w && (l = v.clientX - w.x, d = v.clientY - w.y, $());
    }, E = () => {
      w = null;
    };
    return t.addEventListener("pointerdown", S), t.addEventListener("pointermove", b), t.addEventListener("pointerup", E), t.addEventListener("pointercancel", E), t.addEventListener("pointerleave", E), p.forEach((v, u) => {
      let y = null;
      v.addEventListener("pointerdown", (f) => {
        f.stopPropagation(), y = { x: f.clientX - o[u].x * a, y: f.clientY - o[u].y * a }, v.setPointerCapture(f.pointerId);
      }), v.addEventListener("pointermove", (f) => {
        y && (o[u].x = o[u].fx = (f.clientX - y.x) / a, o[u].y = o[u].fy = (f.clientY - y.y) / a, r());
      });
      const c = () => {
        y = null;
      };
      v.addEventListener("pointerup", c), v.addEventListener("pointercancel", c);
    }), {
      cleanup() {
        t.removeEventListener("wheel", g), t.removeEventListener("pointerdown", S), t.removeEventListener("pointermove", b), t.removeEventListener("pointerup", E), t.removeEventListener("pointercancel", E), t.removeEventListener("pointerleave", E);
      }
    };
  }
}
function ec(e, t, s, o, p) {
  const r = t / 2, a = s / 2, l = (d, $) => {
    d.forEach((g, w) => {
      const S = 2 * Math.PI * w / Math.max(1, d.length) - Math.PI / 2;
      g.x = r + $ * Math.cos(S), g.y = a + $ * Math.sin(S), g.fx = o === "Force-directed" ? void 0 : g.x, g.fy = o === "Force-directed" ? void 0 : g.y;
    });
  };
  if (o === "Radial" && e.length) {
    const d = new Map(e.map((v) => [v["gufe-key"], []]));
    for (const v of p)
      d.get(v.from["gufe-key"]).push(v.to["gufe-key"]), d.get(v.to["gufe-key"]).push(v.from["gufe-key"]);
    const $ = new Map(e.map((v) => [v["gufe-key"], v])), g = e.reduce(
      (v, u) => d.get(u["gufe-key"]).length > d.get(v["gufe-key"]).length ? u : v
    ), w = /* @__PURE__ */ new Set([g["gufe-key"]]);
    let S = [g["gufe-key"]], b = 0;
    const E = Math.min(t, s) * 0.18;
    for (; S.length; ) {
      l(
        S.map((u) => $.get(u)),
        b === 0 ? 0 : b * E + 40
      );
      const v = [];
      for (const u of S)
        for (const y of d.get(u))
          w.has(y) || (w.add(y), v.push(y));
      S = v, b++;
    }
    l(e.filter((v) => !w.has(v["gufe-key"])), Math.min(t, s) * 0.45);
    return;
  }
  l(e, Math.min(t, s) * 0.34);
}
async function tc(e, t, s, o) {
  let p;
  try {
    if (p = await Ai(), typeof p?.forceSimulation != "function") return !1;
  } catch {
    return !1;
  }
  const r = t.map((d) => ({ source: d.from["gufe-key"], target: d.to["gufe-key"], score: d.score })), a = p.forceSimulation(e).force(
    "link",
    p.forceLink(r).id((d) => d["gufe-key"]).distance((d) => he.linkBaseDistance + (1 - (d.score ?? 0.5)) * he.linkScoreBonus).strength(he.linkStrength)
  ).force(
    "charge",
    p.forceManyBody().strength(he.chargeStrength).distanceMin(he.chargeDistanceMin).distanceMax(he.chargeDistanceMax)
  ).force("center", p.forceCenter(s / 2, o / 2).strength(he.centerStrength)).force("collision", p.forceCollide(Lt + he.collisionPadding).iterations(he.collisionIterations)).force("x", p.forceX(s / 2).strength(he.drift)).force("y", p.forceY(o / 2).strength(he.drift)).stop(), l = Math.ceil(Math.log(a.alphaMin()) / Math.log(1 - a.alphaDecay()));
  for (let d = 0; d < l * he.tickMultiplier; d++) a.tick();
  return !0;
}
Ht("gufe-ligand-network", Qi);
function ic(e, t) {
  let s = e.querySelector("gufe-view");
  return s || (s = document.createElement("gufe-view"), s.style.cssText = "display:block;width:100%;height:100%;", e.appendChild(s)), t !== void 0 && (s.payload = t), s;
}
export {
  Vo as DEBUG_ATTRIBUTE,
  Lo as DEBUG_GLOBAL,
  Ut as GufeElement,
  Qi as GufeLigandNetwork,
  Ki as GufeProtein,
  qi as GufeSmallMolecule,
  Ri as GufeView,
  rc as PAYLOAD_TYPES,
  nc as SCHEMA_TYPES,
  Nr as VIEW_TAGS,
  Ui as buildRegistry,
  Ko as debugEnabled,
  Ht as defineElement,
  Oo as describeProblem,
  sc as dispatchProblem,
  Gi as entryLabel,
  ki as formatIssues,
  Ho as logPayload,
  Hi as lookup,
  _r as lookupOfType,
  ac as mappingPayloadFor,
  ic as mount,
  Uo as payloadJson,
  oc as validateAs,
  Pi as validatePayload
};
