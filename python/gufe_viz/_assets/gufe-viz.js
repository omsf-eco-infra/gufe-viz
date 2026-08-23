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
function xo() {
  try {
    return globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches ?? !1;
  } catch {
    return !1;
  }
}
const z = xo() ? Ir.dark : Ir.light;
function L(e, t, o) {
  const n = document.createElement(e);
  return t && (n.style.cssText = t), o != null && (n.textContent = o), n;
}
function Bt(e) {
  return String(e ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function ve(e) {
  if (e == null) return "unknown error";
  const t = e.message;
  if (typeof t == "string" && t) return t;
  const o = String(e);
  return o === "[object Object]" ? e.name || "unknown error" : o;
}
const Fe = (e) => e.toLocaleString("en-US"), ke = "-", He = `background:${z.btnBg};color:${z.btnFg};border:1px solid ${z.btnBorder};padding:4px 9px;font-size:11px;font-weight:bold;border-radius:3px;cursor:pointer;font-family:inherit;`, vo = `background:${z.selectBg};color:${z.textPrimary};border:1px solid ${z.selectBorder};border-radius:6px;padding:4px 8px;font-size:12px;cursor:pointer;font-family:inherit;`;
function $o(e, t, o) {
  const n = L("div", "display:flex;gap:4px;"), u = e.map((r) => {
    const a = L("button", He, r.label);
    return a.title = r.title || r.label, a.onmouseover = () => {
      a.style.background = z.btnBgHover;
    }, a.onmouseout = () => {
      a.style.background = t === r.id ? z.btnBgActive : z.btnBg;
    }, a.onclick = () => {
      n.setActive(r.id), o(r.id);
    }, n.appendChild(a), { id: r.id, btn: a };
  });
  return n.setActive = (r) => {
    t = r, u.forEach((a) => {
      a.btn.style.background = a.id === t ? z.btnBgActive : z.btnBg;
    });
  }, n.setActive(t), n;
}
function Oe(e, t, o) {
  const n = L("span", "display:inline-flex;align-items:center;gap:5px;white-space:nowrap;");
  o && n.appendChild(
    L("span", `width:8px;height:8px;border-radius:50%;background:${o};display:inline-block;`)
  );
  const u = L("span");
  return u.innerHTML = `${Bt(e)} <b style="color:${z.textPrimary};">${Bt(t)}</b>`, n.appendChild(u), n;
}
function rr(e, t) {
  const o = L("div", "", `⚠ ${t}`);
  return o.style.cssText = `position:absolute;top:10px;left:50%;transform:translateX(-50%);max-width:90%;z-index:20;padding:6px 14px;border-radius:6px;font-size:12px;background:${z.warnBg};color:${z.warnFg};border:1px solid ${z.warnBorder};`, e.appendChild(o), o;
}
function ce(e, t = !1) {
  return L(
    "div",
    `flex:1;display:flex;align-items:center;justify-content:center;text-align:center;padding:24px;font-size:13px;color:${t ? z.errorFg : z.textMuted2};`,
    e
  );
}
function _o(e, t) {
  const o = L(
    "div",
    `display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;padding:9px 14px;flex-shrink:0;background:${z.toolbarBg};border-bottom:1px solid ${z.toolbarBorder};`
  );
  return o.titleEl = L("span", `font-weight:700;font-size:15px;color:${z.titleColor};letter-spacing:.02em;`, e), o.subtitleEl = L("span", `font-size:12px;color:${z.textMuted2};`, t || ""), o.statsEl = L(
    "div",
    `display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-left:auto;font-size:11px;color:${z.textMuted};`
  ), o.toggleEl = L("div", "display:flex;align-items:center;margin-left:10px;flex-shrink:0;"), o.appendChild(o.titleEl), o.appendChild(o.subtitleEl), o.appendChild(o.statsEl), o.appendChild(o.toggleEl), o;
}
function bo() {
  const e = L("div", "flex:1;position:relative;min-height:0;min-width:0;"), t = L("div", "position:absolute;inset:0;");
  return e.appendChild(t), { wrap: e, container: t };
}
const zo = !1;
function Vo() {
  const e = L("span", "display:inline-flex;flex-direction:column;gap:2px;justify-content:center;");
  for (let t = 0; t < 3; t++)
    e.appendChild(L("span", `display:block;width:11px;height:1.5px;border-radius:1px;background:${z.btnFg};`));
  return e;
}
function uc(e, t, o = {}) {
  let n = o.open ?? zo, u = !1;
  const r = L("div", "flex-shrink:0;"), a = L("button", `${He}display:inline-flex;align-items:center;gap:6px;padding:4px 8px;`);
  a.appendChild(Vo()), a.setAttribute("aria-label", o.label || "Toggle menu");
  const l = () => {
    n && !u && (u = !0, r.appendChild(t())), r.style.display = n ? "" : "none", a.style.background = n ? z.btnBgActive : z.btnBg, a.setAttribute("aria-expanded", String(n));
  }, d = (v) => {
    v !== n && (n = v, l(), o.onToggle?.(n));
  };
  return a.onclick = () => d(!n), a.onmouseover = () => {
    a.style.background = n ? z.btnBgActive : z.btnBgHover;
  }, a.onmouseout = () => {
    a.style.background = n ? z.btnBgActive : z.btnBg;
  }, e.toggleEl.appendChild(a), l(), {
    panel: r,
    isOpen: () => n,
    setOpen: d
  };
}
const Fo = ["debug", "gufe-debug"], Lo = "debug", Bo = "GUFE_VIZ_DEBUG";
function Ko() {
  return !!globalThis[Bo];
}
function Uo() {
  try {
    const e = globalThis.location?.search;
    if (!e) return !1;
    const t = new URLSearchParams(e);
    return Fo.some((o) => t.has(o));
  } catch {
    return !1;
  }
}
function Ho(e) {
  return e?.hasAttribute?.(Lo) ? !0 : Ko() || Uo();
}
function Go(e) {
  try {
    return JSON.stringify(e, null, 2) ?? String(e);
  } catch (t) {
    return `<could not be stringified: ${ve(t)}>`;
  }
}
function Jo(e, t, o) {
  if (!Ho(o)) return;
  const n = Go(t), u = t?.type, r = `[gufe-viz] ${e}${typeof u == "string" ? ` ${u}` : ""} (${n.length} chars)`, a = typeof console.groupCollapsed == "function";
  a ? console.groupCollapsed(r) : console.log(r), console.log(n), console.log(t), a && console.groupEnd?.();
}
const Wo = 150;
class Ht extends HTMLElement {
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
    this.style.display = "block", this.style.width = this.style.width || "100%", this.style.height = this.style.height || "100%", this.style.background = z.appBg, this.style.color = z.textPrimary, this.style.fontFamily = "'Inter',system-ui,sans-serif", typeof ResizeObserver < "u" && !this.#t && (this.#t = new ResizeObserver(() => {
      this.#o && clearTimeout(this.#o), this.#o = setTimeout(() => this.#e?.onResize?.(), Wo);
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
    return this.#a(), this.#n = L(
      "div",
      `width:100%;height:100%;display:flex;flex-direction:column;overflow:hidden;background:${z.appBg};`
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
    const t = this.#d(), o = this.#s;
    if (this.#r == null) {
      t.appendChild(ce(this.placeholder()));
      return;
    }
    let n;
    try {
      n = this.renderView(t, this.#r);
    } catch (u) {
      this.#l(t, o, u);
      return;
    }
    n instanceof Promise ? n.then(
      (u) => this.#c(u, o),
      (u) => this.#l(t, o, u)
    ) : this.#c(n, o);
  }
  /** Take ownership of a view's handle, unless it belongs to a dead render. */
  #c(t, o) {
    if (o !== this.#s || !this.isConnected) {
      try {
        t?.cleanup?.();
      } catch (n) {
        console.warn("[gufe-viz] cleanup of a superseded view failed:", n);
      }
      return;
    }
    this.#e = t || null;
  }
  #l(t, o, n) {
    o === this.#s && (console.warn("[gufe-viz] render failed:", n), t.replaceChildren(ce(`Failed to render: ${ve(n)}`, !0)));
  }
  /** Force a resize pass - for hosts that know they resized us. */
  resize() {
    this.#e?.onResize?.();
  }
}
function Gt(e, t) {
  typeof customElements > "u" || customElements.get(e) || customElements.define(e, t);
}
function Yo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ge = { exports: {} }, nr = {}, be = {}, Ce = {}, or = {}, sr = {}, ar = {}, qr;
function Kt() {
  return qr || (qr = 1, (function(e) {
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
    class n extends t {
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
        return (c = this._str) !== null && c !== void 0 ? c : this._str = this._items.reduce((p, _) => `${p}${_}`, "");
      }
      get names() {
        var c;
        return (c = this._names) !== null && c !== void 0 ? c : this._names = this._items.reduce((p, _) => (_ instanceof o && (p[_.str] = (p[_.str] || 0) + 1), p), {});
      }
    }
    e._Code = n, e.nil = new n("");
    function u(y, ...c) {
      const p = [y[0]];
      let _ = 0;
      for (; _ < c.length; )
        l(p, c[_]), p.push(y[++_]);
      return new n(p);
    }
    e._ = u;
    const r = new n("+");
    function a(y, ...c) {
      const p = [b(y[0])];
      let _ = 0;
      for (; _ < c.length; )
        p.push(r), l(p, c[_]), p.push(r, b(y[++_]));
      return d(p), new n(p);
    }
    e.str = a;
    function l(y, c) {
      c instanceof n ? y.push(...c._items) : c instanceof o ? y.push(c) : y.push(w(c));
    }
    e.addCodeArg = l;
    function d(y) {
      let c = 1;
      for (; c < y.length - 1; ) {
        if (y[c] === r) {
          const p = v(y[c - 1], y[c + 1]);
          if (p !== void 0) {
            y.splice(c - 1, 3, p);
            continue;
          }
          y[c++] = "+";
        }
        c++;
      }
    }
    function v(y, c) {
      if (c === '""')
        return y;
      if (y === '""')
        return c;
      if (typeof y == "string")
        return c instanceof o || y[y.length - 1] !== '"' ? void 0 : typeof c != "string" ? `${y.slice(0, -1)}${c}"` : c[0] === '"' ? y.slice(0, -1) + c.slice(1) : void 0;
      if (typeof c == "string" && c[0] === '"' && !(y instanceof o))
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
      return new n(b(y));
    }
    e.stringify = S;
    function b(y) {
      return JSON.stringify(y).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    e.safeStringify = b;
    function E(y) {
      return typeof y == "string" && e.IDENTIFIER.test(y) ? new n(`.${y}`) : u`[${y}]`;
    }
    e.getProperty = E;
    function $(y) {
      if (typeof y == "string" && e.IDENTIFIER.test(y))
        return new n(`${y}`);
      throw new Error(`CodeGen: invalid export name: ${y}, use explicit $id name mapping`);
    }
    e.getEsmExportName = $;
    function f(y) {
      return new n(y.toString());
    }
    e.regexpCode = f;
  })(ar)), ar;
}
var ir = {}, Dr;
function xr() {
  return Dr || (Dr = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0;
    const t = /* @__PURE__ */ Kt();
    class o extends Error {
      constructor(v) {
        super(`CodeGen: "code" for ${v} not defined`), this.value = v.value;
      }
    }
    var n;
    (function(d) {
      d[d.Started = 0] = "Started", d[d.Completed = 1] = "Completed";
    })(n || (e.UsedValueState = n = {})), e.varKinds = {
      const: new t.Name("const"),
      let: new t.Name("let"),
      var: new t.Name("var")
    };
    class u {
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
        var g, w;
        if (!((w = (g = this._parent) === null || g === void 0 ? void 0 : g._prefixes) === null || w === void 0) && w.has(v) || this._prefixes && !this._prefixes.has(v))
          throw new Error(`CodeGen: prefix "${v}" is not allowed in this scope`);
        return this._names[v] = { prefix: v, index: 0 };
      }
    }
    e.Scope = u;
    class r extends t.Name {
      constructor(v, g) {
        super(g), this.prefix = v;
      }
      setValue(v, { property: g, itemIndex: w }) {
        this.value = v, this.scopePath = (0, t._)`.${new t.Name(g)}[${w}]`;
      }
    }
    e.ValueScopeName = r;
    const a = (0, t._)`\n`;
    class l extends u {
      constructor(v) {
        super(v), this._values = {}, this._scope = v.scope, this.opts = { ...v, _n: v.lines ? a : t.nil };
      }
      get() {
        return this._scope;
      }
      name(v) {
        return new r(v, this._newName(v));
      }
      value(v, g) {
        var w;
        if (g.ref === void 0)
          throw new Error("CodeGen: ref must be passed in value");
        const S = this.toName(v), { prefix: b } = S, E = (w = g.key) !== null && w !== void 0 ? w : g.ref;
        let $ = this._values[b];
        if ($) {
          const c = $.get(E);
          if (c)
            return c;
        } else
          $ = this._values[b] = /* @__PURE__ */ new Map();
        $.set(E, S);
        const f = this._scope[b] || (this._scope[b] = []), y = f.length;
        return f[y] = g.ref, S.setValue(g, { property: b, itemIndex: y }), S;
      }
      getValue(v, g) {
        const w = this._values[v];
        if (w)
          return w.get(g);
      }
      scopeRefs(v, g = this._values) {
        return this._reduceValues(g, (w) => {
          if (w.scopePath === void 0)
            throw new Error(`CodeGen: name "${w}" has no value`);
          return (0, t._)`${v}${w.scopePath}`;
        });
      }
      scopeCode(v = this._values, g, w) {
        return this._reduceValues(v, (S) => {
          if (S.value === void 0)
            throw new Error(`CodeGen: name "${S}" has no value`);
          return S.value.code;
        }, g, w);
      }
      _reduceValues(v, g, w = {}, S) {
        let b = t.nil;
        for (const E in v) {
          const $ = v[E];
          if (!$)
            continue;
          const f = w[E] = w[E] || /* @__PURE__ */ new Map();
          $.forEach((y) => {
            if (f.has(y))
              return;
            f.set(y, n.Started);
            let c = g(y);
            if (c) {
              const p = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
              b = (0, t._)`${b}${p} ${y} = ${c};${this.opts._n}`;
            } else if (c = S?.(y))
              b = (0, t._)`${b}${c}${this.opts._n}`;
            else
              throw new o(y);
            f.set(y, n.Completed);
          });
        }
        return b;
      }
    }
    e.ValueScope = l;
  })(ir)), ir;
}
var zr;
function G() {
  return zr || (zr = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
    const t = /* @__PURE__ */ Kt(), o = /* @__PURE__ */ xr();
    var n = /* @__PURE__ */ Kt();
    Object.defineProperty(e, "_", { enumerable: !0, get: function() {
      return n._;
    } }), Object.defineProperty(e, "str", { enumerable: !0, get: function() {
      return n.str;
    } }), Object.defineProperty(e, "strConcat", { enumerable: !0, get: function() {
      return n.strConcat;
    } }), Object.defineProperty(e, "nil", { enumerable: !0, get: function() {
      return n.nil;
    } }), Object.defineProperty(e, "getProperty", { enumerable: !0, get: function() {
      return n.getProperty;
    } }), Object.defineProperty(e, "stringify", { enumerable: !0, get: function() {
      return n.stringify;
    } }), Object.defineProperty(e, "regexpCode", { enumerable: !0, get: function() {
      return n.regexpCode;
    } }), Object.defineProperty(e, "Name", { enumerable: !0, get: function() {
      return n.Name;
    } });
    var u = /* @__PURE__ */ xr();
    Object.defineProperty(e, "Scope", { enumerable: !0, get: function() {
      return u.Scope;
    } }), Object.defineProperty(e, "ValueScope", { enumerable: !0, get: function() {
      return u.ValueScope;
    } }), Object.defineProperty(e, "ValueScopeName", { enumerable: !0, get: function() {
      return u.ValueScopeName;
    } }), Object.defineProperty(e, "varKinds", { enumerable: !0, get: function() {
      return u.varKinds;
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
        const I = m ? o.varKinds.var : this.varKind, B = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
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
    class v extends r {
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
    class $ extends b {
    }
    class f extends E {
    }
    f.kind = "else";
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
          P = this.else = Array.isArray(I) ? new f(I) : I;
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
    class p extends c {
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
        const P = m.es5 ? o.varKinds.var : this.varKind, { name: I, from: B, to: H } = this;
        return `for(${P} ${I}=${B}; ${I}<${H}; ${I}++)` + super.render(m);
      }
      get names() {
        const m = q(super.names, this.from);
        return q(m, this.to);
      }
    }
    class s extends c {
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
` : "" }, this._extScope = m, this._scope = new o.Scope({ parent: m }), this._nodes = [new $()];
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
        return this._def(o.varKinds.const, m, P, I);
      }
      // `let` declaration with optional assignment (`var` in es5 mode)
      let(m, P, I) {
        return this._def(o.varKinds.let, m, P, I);
      }
      // `var` declaration with optional assignment
      var(m, P, I) {
        return this._def(o.varKinds.var, m, P, I);
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
        return this._elseNode(new f());
      }
      // end `if` statement (needed if gen.if was used only with condition)
      endIf() {
        return this._endBlockNode(y, f);
      }
      _for(m, P) {
        return this._blockNode(m), P && this.code(P).endFor(), this;
      }
      // a generic `for` clause (or statement if `forBody` is passed)
      for(m, P) {
        return this._for(new p(m), P);
      }
      // `for` statement for a range of values
      forRange(m, P, I, B, H = this.opts.es5 ? o.varKinds.var : o.varKinds.let) {
        const Q = this._scope.toName(m);
        return this._for(new _(H, Q, P, I), () => B(Q));
      }
      // `for-of` statement (in es5 mode replace with a normal for loop)
      forOf(m, P, I, B = o.varKinds.const) {
        const H = this._scope.toName(m);
        if (this.opts.es5) {
          const Q = P instanceof t.Name ? P : this.var("_arr", P);
          return this.forRange("_i", 0, (0, t._)`${Q}.length`, (Z) => {
            this.var(H, (0, t._)`${Q}[${Z}]`), I(H);
          });
        }
        return this._for(new s("of", B, H, P), () => I(H));
      }
      // `for-in` statement.
      // With option `ownProperties` replaced with a `for-of` loop for object keys
      forIn(m, P, I, B = this.opts.es5 ? o.varKinds.var : o.varKinds.const) {
        if (this.opts.ownProperties)
          return this.forOf(m, (0, t._)`Object.keys(${P})`, I);
        const H = this._scope.toName(m);
        return this._for(new s("in", B, H, P), () => I(H));
      }
      // end `for` loop
      endFor() {
        return this._endBlockNode(c);
      }
      // `label` statement
      label(m) {
        return this._leafNode(new v(m));
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
      return typeof O == "boolean" || typeof O == "number" || O === null ? !O : (0, t._)`!${x(O)}`;
    }
    e.not = te;
    const fe = N(e.operators.AND);
    function Y(...O) {
      return O.reduce(fe);
    }
    e.and = Y;
    const me = N(e.operators.OR);
    function V(...O) {
      return O.reduce(me);
    }
    e.or = V;
    function N(O) {
      return (m, P) => m === t.nil ? P : P === t.nil ? m : (0, t._)`${x(m)} ${O} ${x(P)}`;
    }
    function x(O) {
      return O instanceof t.Name ? O : (0, t._)`(${O})`;
    }
  })(sr)), sr;
}
var J = {}, Vr;
function X() {
  if (Vr) return J;
  Vr = 1, Object.defineProperty(J, "__esModule", { value: !0 }), J.checkStrictMode = J.getErrorPath = J.Type = J.useFunc = J.setEvaluated = J.evaluatedPropsToName = J.mergeEvaluated = J.eachItem = J.unescapeJsonPointer = J.escapeJsonPointer = J.escapeFragment = J.unescapeFragment = J.schemaRefOrVal = J.schemaHasRulesButRef = J.schemaHasRules = J.checkUnknownRules = J.alwaysValidSchema = J.toHash = void 0;
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ Kt();
  function o(s) {
    const i = {};
    for (const h of s)
      i[h] = !0;
    return i;
  }
  J.toHash = o;
  function n(s, i) {
    return typeof i == "boolean" ? i : Object.keys(i).length === 0 ? !0 : (u(s, i), !r(i, s.self.RULES.all));
  }
  J.alwaysValidSchema = n;
  function u(s, i = s.schema) {
    const { opts: h, self: C } = s;
    if (!h.strictSchema || typeof i == "boolean")
      return;
    const k = C.RULES.keywords;
    for (const A in i)
      k[A] || _(s, `unknown keyword: "${A}"`);
  }
  J.checkUnknownRules = u;
  function r(s, i) {
    if (typeof s == "boolean")
      return !s;
    for (const h in s)
      if (i[h])
        return !0;
    return !1;
  }
  J.schemaHasRules = r;
  function a(s, i) {
    if (typeof s == "boolean")
      return !s;
    for (const h in s)
      if (h !== "$ref" && i.all[h])
        return !0;
    return !1;
  }
  J.schemaHasRulesButRef = a;
  function l({ topSchemaRef: s, schemaPath: i }, h, C, k) {
    if (!k) {
      if (typeof h == "number" || typeof h == "boolean")
        return h;
      if (typeof h == "string")
        return (0, e._)`${h}`;
    }
    return (0, e._)`${s}${i}${(0, e.getProperty)(C)}`;
  }
  J.schemaRefOrVal = l;
  function d(s) {
    return w(decodeURIComponent(s));
  }
  J.unescapeFragment = d;
  function v(s) {
    return encodeURIComponent(g(s));
  }
  J.escapeFragment = v;
  function g(s) {
    return typeof s == "number" ? `${s}` : s.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  J.escapeJsonPointer = g;
  function w(s) {
    return s.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  J.unescapeJsonPointer = w;
  function S(s, i) {
    if (Array.isArray(s))
      for (const h of s)
        i(h);
    else
      i(s);
  }
  J.eachItem = S;
  function b({ mergeNames: s, mergeToName: i, mergeValues: h, resultToName: C }) {
    return (k, A, M, T) => {
      const q = M === void 0 ? A : M instanceof e.Name ? (A instanceof e.Name ? s(k, A, M) : i(k, A, M), M) : A instanceof e.Name ? (i(k, M, A), A) : h(A, M);
      return T === e.Name && !(q instanceof e.Name) ? C(k, q) : q;
    };
  }
  J.mergeEvaluated = {
    props: b({
      mergeNames: (s, i, h) => s.if((0, e._)`${h} !== true && ${i} !== undefined`, () => {
        s.if((0, e._)`${i} === true`, () => s.assign(h, !0), () => s.assign(h, (0, e._)`${h} || {}`).code((0, e._)`Object.assign(${h}, ${i})`));
      }),
      mergeToName: (s, i, h) => s.if((0, e._)`${h} !== true`, () => {
        i === !0 ? s.assign(h, !0) : (s.assign(h, (0, e._)`${h} || {}`), $(s, h, i));
      }),
      mergeValues: (s, i) => s === !0 ? !0 : { ...s, ...i },
      resultToName: E
    }),
    items: b({
      mergeNames: (s, i, h) => s.if((0, e._)`${h} !== true && ${i} !== undefined`, () => s.assign(h, (0, e._)`${i} === true ? true : ${h} > ${i} ? ${h} : ${i}`)),
      mergeToName: (s, i, h) => s.if((0, e._)`${h} !== true`, () => s.assign(h, i === !0 ? !0 : (0, e._)`${h} > ${i} ? ${h} : ${i}`)),
      mergeValues: (s, i) => s === !0 ? !0 : Math.max(s, i),
      resultToName: (s, i) => s.var("items", i)
    })
  };
  function E(s, i) {
    if (i === !0)
      return s.var("props", !0);
    const h = s.var("props", (0, e._)`{}`);
    return i !== void 0 && $(s, h, i), h;
  }
  J.evaluatedPropsToName = E;
  function $(s, i, h) {
    Object.keys(h).forEach((C) => s.assign((0, e._)`${i}${(0, e.getProperty)(C)}`, !0));
  }
  J.setEvaluated = $;
  const f = {};
  function y(s, i) {
    return s.scopeValue("func", {
      ref: i,
      code: f[i.code] || (f[i.code] = new t._Code(i.code))
    });
  }
  J.useFunc = y;
  var c;
  (function(s) {
    s[s.Num = 0] = "Num", s[s.Str = 1] = "Str";
  })(c || (J.Type = c = {}));
  function p(s, i, h) {
    if (s instanceof e.Name) {
      const C = i === c.Num;
      return h ? C ? (0, e._)`"[" + ${s} + "]"` : (0, e._)`"['" + ${s} + "']"` : C ? (0, e._)`"/" + ${s}` : (0, e._)`"/" + ${s}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return h ? (0, e.getProperty)(s).toString() : "/" + g(s);
  }
  J.getErrorPath = p;
  function _(s, i, h = s.opts.strictSchema) {
    if (h) {
      if (i = `strict mode: ${i}`, h === !0)
        throw new Error(i);
      s.self.logger.warn(i);
    }
  }
  return J.checkStrictMode = _, J;
}
var Je = {}, Fr;
function $e() {
  if (Fr) return Je;
  Fr = 1, Object.defineProperty(Je, "__esModule", { value: !0 });
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
var Lr;
function Jt() {
  return Lr || (Lr = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
    const t = /* @__PURE__ */ G(), o = /* @__PURE__ */ X(), n = /* @__PURE__ */ $e();
    e.keywordError = {
      message: ({ keyword: f }) => (0, t.str)`must pass "${f}" keyword validation`
    }, e.keyword$DataError = {
      message: ({ keyword: f, schemaType: y }) => y ? (0, t.str)`"${f}" keyword must be ${y} ($data)` : (0, t.str)`"${f}" keyword is invalid ($data)`
    };
    function u(f, y = e.keywordError, c, p) {
      const { it: _ } = f, { gen: s, compositeRule: i, allErrors: h } = _, C = w(f, y, c);
      p ?? (i || h) ? d(s, C) : v(_, (0, t._)`[${C}]`);
    }
    e.reportError = u;
    function r(f, y = e.keywordError, c) {
      const { it: p } = f, { gen: _, compositeRule: s, allErrors: i } = p, h = w(f, y, c);
      d(_, h), s || i || v(p, n.default.vErrors);
    }
    e.reportExtraError = r;
    function a(f, y) {
      f.assign(n.default.errors, y), f.if((0, t._)`${n.default.vErrors} !== null`, () => f.if(y, () => f.assign((0, t._)`${n.default.vErrors}.length`, y), () => f.assign(n.default.vErrors, null)));
    }
    e.resetErrorsCount = a;
    function l({ gen: f, keyword: y, schemaValue: c, data: p, errsCount: _, it: s }) {
      if (_ === void 0)
        throw new Error("ajv implementation error");
      const i = f.name("err");
      f.forRange("i", _, n.default.errors, (h) => {
        f.const(i, (0, t._)`${n.default.vErrors}[${h}]`), f.if((0, t._)`${i}.instancePath === undefined`, () => f.assign((0, t._)`${i}.instancePath`, (0, t.strConcat)(n.default.instancePath, s.errorPath))), f.assign((0, t._)`${i}.schemaPath`, (0, t.str)`${s.errSchemaPath}/${y}`), s.opts.verbose && (f.assign((0, t._)`${i}.schema`, c), f.assign((0, t._)`${i}.data`, p));
      });
    }
    e.extendErrors = l;
    function d(f, y) {
      const c = f.const("err", y);
      f.if((0, t._)`${n.default.vErrors} === null`, () => f.assign(n.default.vErrors, (0, t._)`[${c}]`), (0, t._)`${n.default.vErrors}.push(${c})`), f.code((0, t._)`${n.default.errors}++`);
    }
    function v(f, y) {
      const { gen: c, validateName: p, schemaEnv: _ } = f;
      _.$async ? c.throw((0, t._)`new ${f.ValidationError}(${y})`) : (c.assign((0, t._)`${p}.errors`, y), c.return(!1));
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
    function w(f, y, c) {
      const { createErrors: p } = f.it;
      return p === !1 ? (0, t._)`{}` : S(f, y, c);
    }
    function S(f, y, c = {}) {
      const { gen: p, it: _ } = f, s = [
        b(_, c),
        E(f, c)
      ];
      return $(f, y, s), p.object(...s);
    }
    function b({ errorPath: f }, { instancePath: y }) {
      const c = y ? (0, t.str)`${f}${(0, o.getErrorPath)(y, o.Type.Str)}` : f;
      return [n.default.instancePath, (0, t.strConcat)(n.default.instancePath, c)];
    }
    function E({ keyword: f, it: { errSchemaPath: y } }, { schemaPath: c, parentSchema: p }) {
      let _ = p ? y : (0, t.str)`${y}/${f}`;
      return c && (_ = (0, t.str)`${_}${(0, o.getErrorPath)(c, o.Type.Str)}`), [g.schemaPath, _];
    }
    function $(f, { params: y, message: c }, p) {
      const { keyword: _, data: s, schemaValue: i, it: h } = f, { opts: C, propertyName: k, topSchemaRef: A, schemaPath: M } = h;
      p.push([g.keyword, _], [g.params, typeof y == "function" ? y(f) : y || (0, t._)`{}`]), C.messages && p.push([g.message, typeof c == "function" ? c(f) : c]), C.verbose && p.push([g.schema, i], [g.parentSchema, (0, t._)`${A}${M}`], [n.default.data, s]), k && p.push([g.propertyName, k]);
    }
  })(or)), or;
}
var Br;
function Xo() {
  if (Br) return Ce;
  Br = 1, Object.defineProperty(Ce, "__esModule", { value: !0 }), Ce.boolOrEmptySchema = Ce.topBoolOrEmptySchema = void 0;
  const e = /* @__PURE__ */ Jt(), t = /* @__PURE__ */ G(), o = /* @__PURE__ */ $e(), n = {
    message: "boolean schema is false"
  };
  function u(l) {
    const { gen: d, schema: v, validateName: g } = l;
    v === !1 ? a(l, !1) : typeof v == "object" && v.$async === !0 ? d.return(o.default.data) : (d.assign((0, t._)`${g}.errors`, null), d.return(!0));
  }
  Ce.topBoolOrEmptySchema = u;
  function r(l, d) {
    const { gen: v, schema: g } = l;
    g === !1 ? (v.var(d, !1), a(l)) : v.var(d, !0);
  }
  Ce.boolOrEmptySchema = r;
  function a(l, d) {
    const { gen: v, data: g } = l, w = {
      gen: v,
      keyword: "false schema",
      data: g,
      schema: !1,
      schemaCode: !1,
      schemaValue: !1,
      params: {},
      it: l
    };
    (0, e.reportError)(w, n, void 0, d);
  }
  return Ce;
}
var se = {}, Re = {}, Kr;
function wo() {
  if (Kr) return Re;
  Kr = 1, Object.defineProperty(Re, "__esModule", { value: !0 }), Re.getRules = Re.isJSONType = void 0;
  const e = ["string", "number", "integer", "boolean", "null", "object", "array"], t = new Set(e);
  function o(u) {
    return typeof u == "string" && t.has(u);
  }
  Re.isJSONType = o;
  function n() {
    const u = {
      number: { type: "number", rules: [] },
      string: { type: "string", rules: [] },
      array: { type: "array", rules: [] },
      object: { type: "object", rules: [] }
    };
    return {
      types: { ...u, integer: !0, boolean: !0, null: !0 },
      rules: [{ rules: [] }, u.number, u.string, u.array, u.object],
      post: { rules: [] },
      all: {},
      keywords: {}
    };
  }
  return Re.getRules = n, Re;
}
var we = {}, Ur;
function So() {
  if (Ur) return we;
  Ur = 1, Object.defineProperty(we, "__esModule", { value: !0 }), we.shouldUseRule = we.shouldUseGroup = we.schemaHasRulesForType = void 0;
  function e({ schema: n, self: u }, r) {
    const a = u.RULES.types[r];
    return a && a !== !0 && t(n, a);
  }
  we.schemaHasRulesForType = e;
  function t(n, u) {
    return u.rules.some((r) => o(n, r));
  }
  we.shouldUseGroup = t;
  function o(n, u) {
    var r;
    return n[u.keyword] !== void 0 || ((r = u.definition.implements) === null || r === void 0 ? void 0 : r.some((a) => n[a] !== void 0));
  }
  return we.shouldUseRule = o, we;
}
var Hr;
function Ut() {
  if (Hr) return se;
  Hr = 1, Object.defineProperty(se, "__esModule", { value: !0 }), se.reportTypeError = se.checkDataTypes = se.checkDataType = se.coerceAndCheckDataType = se.getJSONTypes = se.getSchemaTypes = se.DataType = void 0;
  const e = /* @__PURE__ */ wo(), t = /* @__PURE__ */ So(), o = /* @__PURE__ */ Jt(), n = /* @__PURE__ */ G(), u = /* @__PURE__ */ X();
  var r;
  (function(c) {
    c[c.Correct = 0] = "Correct", c[c.Wrong = 1] = "Wrong";
  })(r || (se.DataType = r = {}));
  function a(c) {
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
  se.getSchemaTypes = a;
  function l(c) {
    const p = Array.isArray(c) ? c : c ? [c] : [];
    if (p.every(e.isJSONType))
      return p;
    throw new Error("type must be JSONType or JSONType[]: " + p.join(","));
  }
  se.getJSONTypes = l;
  function d(c, p) {
    const { gen: _, data: s, opts: i } = c, h = g(p, i.coerceTypes), C = p.length > 0 && !(h.length === 0 && p.length === 1 && (0, t.schemaHasRulesForType)(c, p[0]));
    if (C) {
      const k = E(p, s, i.strictNumbers, r.Wrong);
      _.if(k, () => {
        h.length ? w(c, p, h) : f(c);
      });
    }
    return C;
  }
  se.coerceAndCheckDataType = d;
  const v = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
  function g(c, p) {
    return p ? c.filter((_) => v.has(_) || p === "array" && _ === "array") : [];
  }
  function w(c, p, _) {
    const { gen: s, data: i, opts: h } = c, C = s.let("dataType", (0, n._)`typeof ${i}`), k = s.let("coerced", (0, n._)`undefined`);
    h.coerceTypes === "array" && s.if((0, n._)`${C} == 'object' && Array.isArray(${i}) && ${i}.length == 1`, () => s.assign(i, (0, n._)`${i}[0]`).assign(C, (0, n._)`typeof ${i}`).if(E(p, i, h.strictNumbers), () => s.assign(k, i))), s.if((0, n._)`${k} !== undefined`);
    for (const M of _)
      (v.has(M) || M === "array" && h.coerceTypes === "array") && A(M);
    s.else(), f(c), s.endIf(), s.if((0, n._)`${k} !== undefined`, () => {
      s.assign(i, k), S(c, k);
    });
    function A(M) {
      switch (M) {
        case "string":
          s.elseIf((0, n._)`${C} == "number" || ${C} == "boolean"`).assign(k, (0, n._)`"" + ${i}`).elseIf((0, n._)`${i} === null`).assign(k, (0, n._)`""`);
          return;
        case "number":
          s.elseIf((0, n._)`${C} == "boolean" || ${i} === null
              || (${C} == "string" && ${i} && ${i} == +${i})`).assign(k, (0, n._)`+${i}`);
          return;
        case "integer":
          s.elseIf((0, n._)`${C} === "boolean" || ${i} === null
              || (${C} === "string" && ${i} && ${i} == +${i} && !(${i} % 1))`).assign(k, (0, n._)`+${i}`);
          return;
        case "boolean":
          s.elseIf((0, n._)`${i} === "false" || ${i} === 0 || ${i} === null`).assign(k, !1).elseIf((0, n._)`${i} === "true" || ${i} === 1`).assign(k, !0);
          return;
        case "null":
          s.elseIf((0, n._)`${i} === "" || ${i} === 0 || ${i} === false`), s.assign(k, null);
          return;
        case "array":
          s.elseIf((0, n._)`${C} === "string" || ${C} === "number"
              || ${C} === "boolean" || ${i} === null`).assign(k, (0, n._)`[${i}]`);
      }
    }
  }
  function S({ gen: c, parentData: p, parentDataProperty: _ }, s) {
    c.if((0, n._)`${p} !== undefined`, () => c.assign((0, n._)`${p}[${_}]`, s));
  }
  function b(c, p, _, s = r.Correct) {
    const i = s === r.Correct ? n.operators.EQ : n.operators.NEQ;
    let h;
    switch (c) {
      case "null":
        return (0, n._)`${p} ${i} null`;
      case "array":
        h = (0, n._)`Array.isArray(${p})`;
        break;
      case "object":
        h = (0, n._)`${p} && typeof ${p} == "object" && !Array.isArray(${p})`;
        break;
      case "integer":
        h = C((0, n._)`!(${p} % 1) && !isNaN(${p})`);
        break;
      case "number":
        h = C();
        break;
      default:
        return (0, n._)`typeof ${p} ${i} ${c}`;
    }
    return s === r.Correct ? h : (0, n.not)(h);
    function C(k = n.nil) {
      return (0, n.and)((0, n._)`typeof ${p} == "number"`, k, _ ? (0, n._)`isFinite(${p})` : n.nil);
    }
  }
  se.checkDataType = b;
  function E(c, p, _, s) {
    if (c.length === 1)
      return b(c[0], p, _, s);
    let i;
    const h = (0, u.toHash)(c);
    if (h.array && h.object) {
      const C = (0, n._)`typeof ${p} != "object"`;
      i = h.null ? C : (0, n._)`!${p} || ${C}`, delete h.null, delete h.array, delete h.object;
    } else
      i = n.nil;
    h.number && delete h.integer;
    for (const C in h)
      i = (0, n.and)(i, b(C, p, _, s));
    return i;
  }
  se.checkDataTypes = E;
  const $ = {
    message: ({ schema: c }) => `must be ${c}`,
    params: ({ schema: c, schemaValue: p }) => typeof c == "string" ? (0, n._)`{type: ${c}}` : (0, n._)`{type: ${p}}`
  };
  function f(c) {
    const p = y(c);
    (0, o.reportError)(p, $);
  }
  se.reportTypeError = f;
  function y(c) {
    const { gen: p, data: _, schema: s } = c, i = (0, u.schemaRefOrVal)(c, s, "type");
    return {
      gen: p,
      keyword: "type",
      data: _,
      schema: s.type,
      schemaCode: i,
      schemaValue: i,
      parentSchema: s,
      params: {},
      it: c
    };
  }
  return se;
}
var Le = {}, Gr;
function Zo() {
  if (Gr) return Le;
  Gr = 1, Object.defineProperty(Le, "__esModule", { value: !0 }), Le.assignDefaults = void 0;
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X();
  function o(u, r) {
    const { properties: a, items: l } = u.schema;
    if (r === "object" && a)
      for (const d in a)
        n(u, d, a[d].default);
    else r === "array" && Array.isArray(l) && l.forEach((d, v) => n(u, v, d.default));
  }
  Le.assignDefaults = o;
  function n(u, r, a) {
    const { gen: l, compositeRule: d, data: v, opts: g } = u;
    if (a === void 0)
      return;
    const w = (0, e._)`${v}${(0, e.getProperty)(r)}`;
    if (d) {
      (0, t.checkStrictMode)(u, `default is ignored for: ${w}`);
      return;
    }
    let S = (0, e._)`${w} === undefined`;
    g.useDefaults === "empty" && (S = (0, e._)`${S} || ${w} === null || ${w} === ""`), l.if(S, (0, e._)`${w} = ${(0, e.stringify)(a)}`);
  }
  return Le;
}
var ge = {}, re = {}, Jr;
function _e() {
  if (Jr) return re;
  Jr = 1, Object.defineProperty(re, "__esModule", { value: !0 }), re.validateUnion = re.validateArray = re.usePattern = re.callValidateCode = re.schemaProperties = re.allSchemaProperties = re.noPropertyInData = re.propertyInData = re.isOwnProperty = re.hasPropFunc = re.reportMissingProp = re.checkMissingProp = re.checkReportMissingProp = void 0;
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), o = /* @__PURE__ */ $e(), n = /* @__PURE__ */ X();
  function u(c, p) {
    const { gen: _, data: s, it: i } = c;
    _.if(g(_, s, p, i.opts.ownProperties), () => {
      c.setParams({ missingProperty: (0, e._)`${p}` }, !0), c.error();
    });
  }
  re.checkReportMissingProp = u;
  function r({ gen: c, data: p, it: { opts: _ } }, s, i) {
    return (0, e.or)(...s.map((h) => (0, e.and)(g(c, p, h, _.ownProperties), (0, e._)`${i} = ${h}`)));
  }
  re.checkMissingProp = r;
  function a(c, p) {
    c.setParams({ missingProperty: p }, !0), c.error();
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
  function d(c, p, _) {
    return (0, e._)`${l(c)}.call(${p}, ${_})`;
  }
  re.isOwnProperty = d;
  function v(c, p, _, s) {
    const i = (0, e._)`${p}${(0, e.getProperty)(_)} !== undefined`;
    return s ? (0, e._)`${i} && ${d(c, p, _)}` : i;
  }
  re.propertyInData = v;
  function g(c, p, _, s) {
    const i = (0, e._)`${p}${(0, e.getProperty)(_)} === undefined`;
    return s ? (0, e.or)(i, (0, e.not)(d(c, p, _))) : i;
  }
  re.noPropertyInData = g;
  function w(c) {
    return c ? Object.keys(c).filter((p) => p !== "__proto__") : [];
  }
  re.allSchemaProperties = w;
  function S(c, p) {
    return w(p).filter((_) => !(0, t.alwaysValidSchema)(c, p[_]));
  }
  re.schemaProperties = S;
  function b({ schemaCode: c, data: p, it: { gen: _, topSchemaRef: s, schemaPath: i, errorPath: h }, it: C }, k, A, M) {
    const T = M ? (0, e._)`${c}, ${p}, ${s}${i}` : p, q = [
      [o.default.instancePath, (0, e.strConcat)(o.default.instancePath, h)],
      [o.default.parentData, C.parentData],
      [o.default.parentDataProperty, C.parentDataProperty],
      [o.default.rootData, o.default.rootData]
    ];
    C.opts.dynamicRef && q.push([o.default.dynamicAnchors, o.default.dynamicAnchors]);
    const K = (0, e._)`${T}, ${_.object(...q)}`;
    return A !== e.nil ? (0, e._)`${k}.call(${A}, ${K})` : (0, e._)`${k}(${K})`;
  }
  re.callValidateCode = b;
  const E = (0, e._)`new RegExp`;
  function $({ gen: c, it: { opts: p } }, _) {
    const s = p.unicodeRegExp ? "u" : "", { regExp: i } = p.code, h = i(_, s);
    return c.scopeValue("pattern", {
      key: h.toString(),
      ref: h,
      code: (0, e._)`${i.code === "new RegExp" ? E : (0, n.useFunc)(c, i)}(${_}, ${s})`
    });
  }
  re.usePattern = $;
  function f(c) {
    const { gen: p, data: _, keyword: s, it: i } = c, h = p.name("valid");
    if (i.allErrors) {
      const k = p.let("valid", !0);
      return C(() => p.assign(k, !1)), k;
    }
    return p.var(h, !0), C(() => p.break()), h;
    function C(k) {
      const A = p.const("len", (0, e._)`${_}.length`);
      p.forRange("i", 0, A, (M) => {
        c.subschema({
          keyword: s,
          dataProp: M,
          dataPropType: t.Type.Num
        }, h), p.if((0, e.not)(h), k);
      });
    }
  }
  re.validateArray = f;
  function y(c) {
    const { gen: p, schema: _, keyword: s, it: i } = c;
    if (!Array.isArray(_))
      throw new Error("ajv implementation error");
    if (_.some((A) => (0, t.alwaysValidSchema)(i, A)) && !i.opts.unevaluated)
      return;
    const C = p.let("valid", !1), k = p.name("_valid");
    p.block(() => _.forEach((A, M) => {
      const T = c.subschema({
        keyword: s,
        schemaProp: M,
        compositeRule: !0
      }, k);
      p.assign(C, (0, e._)`${C} || ${k}`), c.mergeValidEvaluated(T, k) || p.if((0, e.not)(C));
    })), c.result(C, () => c.reset(), () => c.error(!0));
  }
  return re.validateUnion = y, re;
}
var Wr;
function Qo() {
  if (Wr) return ge;
  Wr = 1, Object.defineProperty(ge, "__esModule", { value: !0 }), ge.validateKeywordUsage = ge.validSchemaType = ge.funcKeywordCode = ge.macroKeywordCode = void 0;
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ $e(), o = /* @__PURE__ */ _e(), n = /* @__PURE__ */ Jt();
  function u(S, b) {
    const { gen: E, keyword: $, schema: f, parentSchema: y, it: c } = S, p = b.macro.call(c.self, f, y, c), _ = v(E, $, p);
    c.opts.validateSchema !== !1 && c.self.validateSchema(p, !0);
    const s = E.name("valid");
    S.subschema({
      schema: p,
      schemaPath: e.nil,
      errSchemaPath: `${c.errSchemaPath}/${$}`,
      topSchemaRef: _,
      compositeRule: !0
    }, s), S.pass(s, () => S.error(!0));
  }
  ge.macroKeywordCode = u;
  function r(S, b) {
    var E;
    const { gen: $, keyword: f, schema: y, parentSchema: c, $data: p, it: _ } = S;
    d(_, b);
    const s = !p && b.compile ? b.compile.call(_.self, y, c, _) : b.validate, i = v($, f, s), h = $.let("valid");
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
      const q = $.let("ruleErrs", null);
      return $.try(() => M((0, e._)`await `), (K) => $.assign(h, !1).if((0, e._)`${K} instanceof ${_.ValidationError}`, () => $.assign(q, (0, e._)`${K}.errors`), () => $.throw(K))), q;
    }
    function A() {
      const q = (0, e._)`${i}.errors`;
      return $.assign(q, null), M(e.nil), q;
    }
    function M(q = b.async ? (0, e._)`await ` : e.nil) {
      const K = _.opts.passContext ? t.default.this : t.default.self, ee = !("compile" in b && !p || b.schema === !1);
      $.assign(h, (0, e._)`${q}${(0, o.callValidateCode)(S, i, K, ee)}`, b.modifying);
    }
    function T(q) {
      var K;
      $.if((0, e.not)((K = b.valid) !== null && K !== void 0 ? K : h), q);
    }
  }
  ge.funcKeywordCode = r;
  function a(S) {
    const { gen: b, data: E, it: $ } = S;
    b.if($.parentData, () => b.assign(E, (0, e._)`${$.parentData}[${$.parentDataProperty}]`));
  }
  function l(S, b) {
    const { gen: E } = S;
    E.if((0, e._)`Array.isArray(${b})`, () => {
      E.assign(t.default.vErrors, (0, e._)`${t.default.vErrors} === null ? ${b} : ${t.default.vErrors}.concat(${b})`).assign(t.default.errors, (0, e._)`${t.default.vErrors}.length`), (0, n.extendErrors)(S);
    }, () => S.error());
  }
  function d({ schemaEnv: S }, b) {
    if (b.async && !S.$async)
      throw new Error("async keyword in sync schema");
  }
  function v(S, b, E) {
    if (E === void 0)
      throw new Error(`keyword "${b}" failed to compile`);
    return S.scopeValue("keyword", typeof E == "function" ? { ref: E } : { ref: E, code: (0, e.stringify)(E) });
  }
  function g(S, b, E = !1) {
    return !b.length || b.some(($) => $ === "array" ? Array.isArray(S) : $ === "object" ? S && typeof S == "object" && !Array.isArray(S) : typeof S == $ || E && typeof S > "u");
  }
  ge.validSchemaType = g;
  function w({ schema: S, opts: b, self: E, errSchemaPath: $ }, f, y) {
    if (Array.isArray(f.keyword) ? !f.keyword.includes(y) : f.keyword !== y)
      throw new Error("ajv implementation error");
    const c = f.dependencies;
    if (c?.some((p) => !Object.prototype.hasOwnProperty.call(S, p)))
      throw new Error(`parent schema must have dependencies of ${y}: ${c.join(",")}`);
    if (f.validateSchema && !f.validateSchema(S[y])) {
      const _ = `keyword "${y}" value is invalid at path "${$}": ` + E.errorsText(f.validateSchema.errors);
      if (b.validateSchema === "log")
        E.logger.error(_);
      else
        throw new Error(_);
    }
  }
  return ge.validateKeywordUsage = w, ge;
}
var Se = {}, Yr;
function es() {
  if (Yr) return Se;
  Yr = 1, Object.defineProperty(Se, "__esModule", { value: !0 }), Se.extendSubschemaMode = Se.extendSubschemaData = Se.getSubschema = void 0;
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X();
  function o(r, { keyword: a, schemaProp: l, schema: d, schemaPath: v, errSchemaPath: g, topSchemaRef: w }) {
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
      if (v === void 0 || g === void 0 || w === void 0)
        throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
      return {
        schema: d,
        schemaPath: v,
        topSchemaRef: w,
        errSchemaPath: g
      };
    }
    throw new Error('either "keyword" or "schema" must be passed');
  }
  Se.getSubschema = o;
  function n(r, a, { dataProp: l, dataPropType: d, data: v, dataTypes: g, propertyName: w }) {
    if (v !== void 0 && l !== void 0)
      throw new Error('both "data" and "dataProp" passed, only one allowed');
    const { gen: S } = a;
    if (l !== void 0) {
      const { errorPath: E, dataPathArr: $, opts: f } = a, y = S.let("data", (0, e._)`${a.data}${(0, e.getProperty)(l)}`, !0);
      b(y), r.errorPath = (0, e.str)`${E}${(0, t.getErrorPath)(l, d, f.jsPropertySyntax)}`, r.parentDataProperty = (0, e._)`${l}`, r.dataPathArr = [...$, r.parentDataProperty];
    }
    if (v !== void 0) {
      const E = v instanceof e.Name ? v : S.let("data", v, !0);
      b(E), w !== void 0 && (r.propertyName = w);
    }
    g && (r.dataTypes = g);
    function b(E) {
      r.data = E, r.dataLevel = a.dataLevel + 1, r.dataTypes = [], a.definedProperties = /* @__PURE__ */ new Set(), r.parentData = a.data, r.dataNames = [...a.dataNames, E];
    }
  }
  Se.extendSubschemaData = n;
  function u(r, { jtdDiscriminator: a, jtdMetadata: l, compositeRule: d, createErrors: v, allErrors: g }) {
    d !== void 0 && (r.compositeRule = d), v !== void 0 && (r.createErrors = v), g !== void 0 && (r.allErrors = g), r.jtdDiscriminator = a, r.jtdMetadata = l;
  }
  return Se.extendSubschemaMode = u, Se;
}
var ie = {}, cr, Xr;
function Eo() {
  return Xr || (Xr = 1, cr = function e(t, o) {
    if (t === o) return !0;
    if (t && o && typeof t == "object" && typeof o == "object") {
      if (t.constructor !== o.constructor) return !1;
      var n, u, r;
      if (Array.isArray(t)) {
        if (n = t.length, n != o.length) return !1;
        for (u = n; u-- !== 0; )
          if (!e(t[u], o[u])) return !1;
        return !0;
      }
      if (t.constructor === RegExp) return t.source === o.source && t.flags === o.flags;
      if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === o.valueOf();
      if (t.toString !== Object.prototype.toString) return t.toString() === o.toString();
      if (r = Object.keys(t), n = r.length, n !== Object.keys(o).length) return !1;
      for (u = n; u-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(o, r[u])) return !1;
      for (u = n; u-- !== 0; ) {
        var a = r[u];
        if (!e(t[a], o[a])) return !1;
      }
      return !0;
    }
    return t !== t && o !== o;
  }), cr;
}
var lr = { exports: {} }, Zr;
function ts() {
  if (Zr) return lr.exports;
  Zr = 1;
  var e = lr.exports = function(n, u, r) {
    typeof u == "function" && (r = u, u = {}), r = u.cb || r;
    var a = typeof r == "function" ? r : r.pre || function() {
    }, l = r.post || function() {
    };
    t(u, a, l, n, "", n);
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
  function t(n, u, r, a, l, d, v, g, w, S) {
    if (a && typeof a == "object" && !Array.isArray(a)) {
      u(a, l, d, v, g, w, S);
      for (var b in a) {
        var E = a[b];
        if (Array.isArray(E)) {
          if (b in e.arrayKeywords)
            for (var $ = 0; $ < E.length; $++)
              t(n, u, r, E[$], l + "/" + b + "/" + $, d, l, b, a, $);
        } else if (b in e.propsKeywords) {
          if (E && typeof E == "object")
            for (var f in E)
              t(n, u, r, E[f], l + "/" + b + "/" + o(f), d, l, b, a, f);
        } else (b in e.keywords || n.allKeys && !(b in e.skipKeywords)) && t(n, u, r, E, l + "/" + b, d, l, b, a);
      }
      r(a, l, d, v, g, w, S);
    }
  }
  function o(n) {
    return n.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  return lr.exports;
}
var Qr;
function Wt() {
  if (Qr) return ie;
  Qr = 1, Object.defineProperty(ie, "__esModule", { value: !0 }), ie.getSchemaRefs = ie.resolveUrl = ie.normalizeId = ie._getFullPath = ie.getFullPath = ie.inlineRef = void 0;
  const e = /* @__PURE__ */ X(), t = Eo(), o = ts(), n = /* @__PURE__ */ new Set([
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
  function u($, f = !0) {
    return typeof $ == "boolean" ? !0 : f === !0 ? !a($) : f ? l($) <= f : !1;
  }
  ie.inlineRef = u;
  const r = /* @__PURE__ */ new Set([
    "$ref",
    "$recursiveRef",
    "$recursiveAnchor",
    "$dynamicRef",
    "$dynamicAnchor"
  ]);
  function a($) {
    for (const f in $) {
      if (r.has(f))
        return !0;
      const y = $[f];
      if (Array.isArray(y) && y.some(a) || typeof y == "object" && a(y))
        return !0;
    }
    return !1;
  }
  function l($) {
    let f = 0;
    for (const y in $) {
      if (y === "$ref")
        return 1 / 0;
      if (f++, !n.has(y) && (typeof $[y] == "object" && (0, e.eachItem)($[y], (c) => f += l(c)), f === 1 / 0))
        return 1 / 0;
    }
    return f;
  }
  function d($, f = "", y) {
    y !== !1 && (f = w(f));
    const c = $.parse(f);
    return v($, c);
  }
  ie.getFullPath = d;
  function v($, f) {
    return $.serialize(f).split("#")[0] + "#";
  }
  ie._getFullPath = v;
  const g = /#\/?$/;
  function w($) {
    return $ ? $.replace(g, "") : "";
  }
  ie.normalizeId = w;
  function S($, f, y) {
    return y = w(y), $.resolve(f, y);
  }
  ie.resolveUrl = S;
  const b = /^[a-z_][-a-z0-9._]*$/i;
  function E($, f) {
    if (typeof $ == "boolean")
      return {};
    const { schemaId: y, uriResolver: c } = this.opts, p = w($[y] || f), _ = { "": p }, s = d(c, p, !1), i = {}, h = /* @__PURE__ */ new Set();
    return o($, { allKeys: !0 }, (A, M, T, q) => {
      if (q === void 0)
        return;
      const K = s + M;
      let ee = _[q];
      typeof A[y] == "string" && (ee = te.call(this, A[y])), fe.call(this, A.$anchor), fe.call(this, A.$dynamicAnchor), _[M] = ee;
      function te(Y) {
        const me = this.opts.uriResolver.resolve;
        if (Y = w(ee ? me(ee, Y) : Y), h.has(Y))
          throw k(Y);
        h.add(Y);
        let V = this.refs[Y];
        return typeof V == "string" && (V = this.refs[V]), typeof V == "object" ? C(A, V.schema, Y) : Y !== w(K) && (Y[0] === "#" ? (C(A, i[Y], Y), i[Y] = A) : this.refs[Y] = K), Y;
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
function Yt() {
  if (en) return be;
  en = 1, Object.defineProperty(be, "__esModule", { value: !0 }), be.getData = be.KeywordCxt = be.validateFunctionCode = void 0;
  const e = /* @__PURE__ */ Xo(), t = /* @__PURE__ */ Ut(), o = /* @__PURE__ */ So(), n = /* @__PURE__ */ Ut(), u = /* @__PURE__ */ Zo(), r = /* @__PURE__ */ Qo(), a = /* @__PURE__ */ es(), l = /* @__PURE__ */ G(), d = /* @__PURE__ */ $e(), v = /* @__PURE__ */ Wt(), g = /* @__PURE__ */ X(), w = /* @__PURE__ */ Jt();
  function S(R) {
    if (s(R) && (h(R), _(R))) {
      f(R);
      return;
    }
    b(R, () => (0, e.topBoolOrEmptySchema)(R));
  }
  be.validateFunctionCode = S;
  function b({ gen: R, validateName: j, schema: D, schemaEnv: F, opts: U }, W) {
    U.code.es5 ? R.func(j, (0, l._)`${d.default.data}, ${d.default.valCxt}`, F.$async, () => {
      R.code((0, l._)`"use strict"; ${c(D, U)}`), $(R, U), R.code(W);
    }) : R.func(j, (0, l._)`${d.default.data}, ${E(U)}`, F.$async, () => R.code(c(D, U)).code(W));
  }
  function E(R) {
    return (0, l._)`{${d.default.instancePath}="", ${d.default.parentData}, ${d.default.parentDataProperty}, ${d.default.rootData}=${d.default.data}${R.dynamicRef ? (0, l._)`, ${d.default.dynamicAnchors}={}` : l.nil}}={}`;
  }
  function $(R, j) {
    R.if(d.default.valCxt, () => {
      R.var(d.default.instancePath, (0, l._)`${d.default.valCxt}.${d.default.instancePath}`), R.var(d.default.parentData, (0, l._)`${d.default.valCxt}.${d.default.parentData}`), R.var(d.default.parentDataProperty, (0, l._)`${d.default.valCxt}.${d.default.parentDataProperty}`), R.var(d.default.rootData, (0, l._)`${d.default.valCxt}.${d.default.rootData}`), j.dynamicRef && R.var(d.default.dynamicAnchors, (0, l._)`${d.default.valCxt}.${d.default.dynamicAnchors}`);
    }, () => {
      R.var(d.default.instancePath, (0, l._)`""`), R.var(d.default.parentData, (0, l._)`undefined`), R.var(d.default.parentDataProperty, (0, l._)`undefined`), R.var(d.default.rootData, d.default.data), j.dynamicRef && R.var(d.default.dynamicAnchors, (0, l._)`{}`);
    });
  }
  function f(R) {
    const { schema: j, opts: D, gen: F } = R;
    b(R, () => {
      D.$comment && j.$comment && q(R), A(R), F.let(d.default.vErrors, null), F.let(d.default.errors, 0), D.unevaluated && y(R), C(R), K(R);
    });
  }
  function y(R) {
    const { gen: j, validateName: D } = R;
    R.evaluated = j.const("evaluated", (0, l._)`${D}.evaluated`), j.if((0, l._)`${R.evaluated}.dynamicProps`, () => j.assign((0, l._)`${R.evaluated}.props`, (0, l._)`undefined`)), j.if((0, l._)`${R.evaluated}.dynamicItems`, () => j.assign((0, l._)`${R.evaluated}.items`, (0, l._)`undefined`));
  }
  function c(R, j) {
    const D = typeof R == "object" && R[j.schemaId];
    return D && (j.code.source || j.code.process) ? (0, l._)`/*# sourceURL=${D} */` : l.nil;
  }
  function p(R, j) {
    if (s(R) && (h(R), _(R))) {
      i(R, j);
      return;
    }
    (0, e.boolOrEmptySchema)(R, j);
  }
  function _({ schema: R, self: j }) {
    if (typeof R == "boolean")
      return !R;
    for (const D in R)
      if (j.RULES.all[D])
        return !0;
    return !1;
  }
  function s(R) {
    return typeof R.schema != "boolean";
  }
  function i(R, j) {
    const { schema: D, gen: F, opts: U } = R;
    U.$comment && D.$comment && q(R), M(R), T(R);
    const W = F.const("_errs", d.default.errors);
    C(R, W), F.var(j, (0, l._)`${W} === ${d.default.errors}`);
  }
  function h(R) {
    (0, g.checkUnknownRules)(R), k(R);
  }
  function C(R, j) {
    if (R.opts.jtd)
      return te(R, [], !1, j);
    const D = (0, t.getSchemaTypes)(R.schema), F = (0, t.coerceAndCheckDataType)(R, D);
    te(R, D, !F, j);
  }
  function k(R) {
    const { schema: j, errSchemaPath: D, opts: F, self: U } = R;
    j.$ref && F.ignoreKeywordsWithRef && (0, g.schemaHasRulesButRef)(j, U.RULES) && U.logger.warn(`$ref: keywords ignored in schema at path "${D}"`);
  }
  function A(R) {
    const { schema: j, opts: D } = R;
    j.default !== void 0 && D.useDefaults && D.strictSchema && (0, g.checkStrictMode)(R, "default is ignored in the schema root");
  }
  function M(R) {
    const j = R.schema[R.opts.schemaId];
    j && (R.baseId = (0, v.resolveUrl)(R.opts.uriResolver, R.baseId, j));
  }
  function T(R) {
    if (R.schema.$async && !R.schemaEnv.$async)
      throw new Error("async schema in sync schema");
  }
  function q({ gen: R, schemaEnv: j, schema: D, errSchemaPath: F, opts: U }) {
    const W = D.$comment;
    if (U.$comment === !0)
      R.code((0, l._)`${d.default.self}.logger.log(${W})`);
    else if (typeof U.$comment == "function") {
      const ne = (0, l.str)`${F}/$comment`, ye = R.scopeValue("root", { ref: j.root });
      R.code((0, l._)`${d.default.self}.opts.$comment(${W}, ${ne}, ${ye}.schema)`);
    }
  }
  function K(R) {
    const { gen: j, schemaEnv: D, validateName: F, ValidationError: U, opts: W } = R;
    D.$async ? j.if((0, l._)`${d.default.errors} === 0`, () => j.return(d.default.data), () => j.throw((0, l._)`new ${U}(${d.default.vErrors})`)) : (j.assign((0, l._)`${F}.errors`, d.default.vErrors), W.unevaluated && ee(R), j.return((0, l._)`${d.default.errors} === 0`));
  }
  function ee({ gen: R, evaluated: j, props: D, items: F }) {
    D instanceof l.Name && R.assign((0, l._)`${j}.props`, D), F instanceof l.Name && R.assign((0, l._)`${j}.items`, F);
  }
  function te(R, j, D, F) {
    const { gen: U, schema: W, data: ne, allErrors: ye, opts: le, self: de } = R, { RULES: oe } = de;
    if (W.$ref && (le.ignoreKeywordsWithRef || !(0, g.schemaHasRulesButRef)(W, oe))) {
      U.block(() => B(R, "$ref", oe.all.$ref.definition));
      return;
    }
    le.jtd || Y(R, j), U.block(() => {
      for (const pe of oe.rules)
        Ae(pe);
      Ae(oe.post);
    });
    function Ae(pe) {
      (0, o.shouldUseGroup)(W, pe) && (pe.type ? (U.if((0, n.checkDataType)(pe.type, ne, le.strictNumbers)), fe(R, pe), j.length === 1 && j[0] === pe.type && D && (U.else(), (0, n.reportTypeError)(R)), U.endIf()) : fe(R, pe), ye || U.if((0, l._)`${d.default.errors} === ${F || 0}`));
    }
  }
  function fe(R, j) {
    const { gen: D, schema: F, opts: { useDefaults: U } } = R;
    U && (0, u.assignDefaults)(R, j.type), D.block(() => {
      for (const W of j.rules)
        (0, o.shouldUseRule)(F, W) && B(R, W.keyword, W.definition, j.type);
    });
  }
  function Y(R, j) {
    R.schemaEnv.meta || !R.opts.strictTypes || (me(R, j), R.opts.allowUnionTypes || V(R, j), N(R, R.dataTypes));
  }
  function me(R, j) {
    if (j.length) {
      if (!R.dataTypes.length) {
        R.dataTypes = j;
        return;
      }
      j.forEach((D) => {
        O(R.dataTypes, D) || P(R, `type "${D}" not allowed by context "${R.dataTypes.join(",")}"`);
      }), m(R, j);
    }
  }
  function V(R, j) {
    j.length > 1 && !(j.length === 2 && j.includes("null")) && P(R, "use allowUnionTypes to allow union type keyword");
  }
  function N(R, j) {
    const D = R.self.RULES.all;
    for (const F in D) {
      const U = D[F];
      if (typeof U == "object" && (0, o.shouldUseRule)(R.schema, U)) {
        const { type: W } = U.definition;
        W.length && !W.some((ne) => x(j, ne)) && P(R, `missing type "${W.join(",")}" for keyword "${F}"`);
      }
    }
  }
  function x(R, j) {
    return R.includes(j) || j === "number" && R.includes("integer");
  }
  function O(R, j) {
    return R.includes(j) || j === "integer" && R.includes("number");
  }
  function m(R, j) {
    const D = [];
    for (const F of R.dataTypes)
      O(j, F) ? D.push(F) : j.includes("integer") && F === "number" && D.push("integer");
    R.dataTypes = D;
  }
  function P(R, j) {
    const D = R.schemaEnv.baseId + R.errSchemaPath;
    j += ` at "${D}" (strictTypes)`, (0, g.checkStrictMode)(R, j, R.opts.strictTypes);
  }
  class I {
    constructor(j, D, F) {
      if ((0, r.validateKeywordUsage)(j, D, F), this.gen = j.gen, this.allErrors = j.allErrors, this.keyword = F, this.data = j.data, this.schema = j.schema[F], this.$data = D.$data && j.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, g.schemaRefOrVal)(j, this.schema, F, this.$data), this.schemaType = D.schemaType, this.parentSchema = j.schema, this.params = {}, this.it = j, this.def = D, this.$data)
        this.schemaCode = j.gen.const("vSchema", Z(this.$data, j));
      else if (this.schemaCode = this.schemaValue, !(0, r.validSchemaType)(this.schema, D.schemaType, D.allowUndefined))
        throw new Error(`${F} value must be ${JSON.stringify(D.schemaType)}`);
      ("code" in D ? D.trackErrors : D.errors !== !1) && (this.errsCount = j.gen.const("_errs", d.default.errors));
    }
    result(j, D, F) {
      this.failResult((0, l.not)(j), D, F);
    }
    failResult(j, D, F) {
      this.gen.if(j), F ? F() : this.error(), D ? (this.gen.else(), D(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
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
    error(j, D, F) {
      if (D) {
        this.setParams(D), this._error(j, F), this.setParams({});
        return;
      }
      this._error(j, F);
    }
    _error(j, D) {
      (j ? w.reportExtraError : w.reportError)(this, this.def.error, D);
    }
    $dataError() {
      (0, w.reportError)(this, this.def.$dataError || w.keyword$DataError);
    }
    reset() {
      if (this.errsCount === void 0)
        throw new Error('add "trackErrors" to keyword definition');
      (0, w.resetErrorsCount)(this.gen, this.errsCount);
    }
    ok(j) {
      this.allErrors || this.gen.if(j);
    }
    setParams(j, D) {
      D ? Object.assign(this.params, j) : this.params = j;
    }
    block$data(j, D, F = l.nil) {
      this.gen.block(() => {
        this.check$data(j, F), D();
      });
    }
    check$data(j = l.nil, D = l.nil) {
      if (!this.$data)
        return;
      const { gen: F, schemaCode: U, schemaType: W, def: ne } = this;
      F.if((0, l.or)((0, l._)`${U} === undefined`, D)), j !== l.nil && F.assign(j, !0), (W.length || ne.validateSchema) && (F.elseIf(this.invalid$data()), this.$dataError(), j !== l.nil && F.assign(j, !1)), F.else();
    }
    invalid$data() {
      const { gen: j, schemaCode: D, schemaType: F, def: U, it: W } = this;
      return (0, l.or)(ne(), ye());
      function ne() {
        if (F.length) {
          if (!(D instanceof l.Name))
            throw new Error("ajv implementation error");
          const le = Array.isArray(F) ? F : [F];
          return (0, l._)`${(0, n.checkDataTypes)(le, D, W.opts.strictNumbers, n.DataType.Wrong)}`;
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
      const F = (0, a.getSubschema)(this.it, j);
      (0, a.extendSubschemaData)(F, this.it, j), (0, a.extendSubschemaMode)(F, j);
      const U = { ...this.it, ...F, items: void 0, props: void 0 };
      return p(U, D), U;
    }
    mergeEvaluated(j, D) {
      const { it: F, gen: U } = this;
      F.opts.unevaluated && (F.props !== !0 && j.props !== void 0 && (F.props = g.mergeEvaluated.props(U, j.props, F.props, D)), F.items !== !0 && j.items !== void 0 && (F.items = g.mergeEvaluated.items(U, j.items, F.items, D)));
    }
    mergeValidEvaluated(j, D) {
      const { it: F, gen: U } = this;
      if (F.opts.unevaluated && (F.props !== !0 || F.items !== !0))
        return U.if(D, () => this.mergeEvaluated(j, l.Name)), !0;
    }
  }
  be.KeywordCxt = I;
  function B(R, j, D, F) {
    const U = new I(R, D, j);
    "code" in D ? D.code(U, F) : U.$data && D.validate ? (0, r.funcKeywordCode)(U, D) : "macro" in D ? (0, r.macroKeywordCode)(U, D) : (D.compile || D.validate) && (0, r.funcKeywordCode)(U, D);
  }
  const H = /^\/(?:[^~]|~0|~1)*$/, Q = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function Z(R, { dataLevel: j, dataNames: D, dataPathArr: F }) {
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
        if (oe >= j)
          throw new Error(le("property/index", oe));
        return F[j - oe];
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
var We = {}, tn;
function wr() {
  if (tn) return We;
  tn = 1, Object.defineProperty(We, "__esModule", { value: !0 });
  class e extends Error {
    constructor(o) {
      super("validation failed"), this.errors = o, this.ajv = this.validation = !0;
    }
  }
  return We.default = e, We;
}
var Ye = {}, rn;
function Xt() {
  if (rn) return Ye;
  rn = 1, Object.defineProperty(Ye, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Wt();
  class t extends Error {
    constructor(n, u, r, a) {
      super(a || `can't resolve reference ${r} from id ${u}`), this.missingRef = (0, e.resolveUrl)(n, u, r), this.missingSchema = (0, e.normalizeId)((0, e.getFullPath)(n, this.missingRef));
    }
  }
  return Ye.default = t, Ye;
}
var ue = {}, nn;
function Zt() {
  if (nn) return ue;
  nn = 1, Object.defineProperty(ue, "__esModule", { value: !0 }), ue.resolveSchema = ue.getCompilingSchema = ue.resolveRef = ue.compileSchema = ue.SchemaEnv = void 0;
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ wr(), o = /* @__PURE__ */ $e(), n = /* @__PURE__ */ Wt(), u = /* @__PURE__ */ X(), r = /* @__PURE__ */ Yt();
  class a {
    constructor(y) {
      var c;
      this.refs = {}, this.dynamicAnchors = {};
      let p;
      typeof y.schema == "object" && (p = y.schema), this.schema = y.schema, this.schemaId = y.schemaId, this.root = y.root || this, this.baseId = (c = y.baseId) !== null && c !== void 0 ? c : (0, n.normalizeId)(p?.[y.schemaId || "$id"]), this.schemaPath = y.schemaPath, this.localRefs = y.localRefs, this.meta = y.meta, this.$async = p?.$async, this.refs = {};
    }
  }
  ue.SchemaEnv = a;
  function l(f) {
    const y = g.call(this, f);
    if (y)
      return y;
    const c = (0, n.getFullPath)(this.opts.uriResolver, f.root.baseId), { es5: p, lines: _ } = this.opts.code, { ownProperties: s } = this.opts, i = new e.CodeGen(this.scope, { es5: p, lines: _, ownProperties: s });
    let h;
    f.$async && (h = i.scopeValue("Error", {
      ref: t.default,
      code: (0, e._)`require("ajv/dist/runtime/validation_error").default`
    }));
    const C = i.scopeName("validate");
    f.validateName = C;
    const k = {
      gen: i,
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
      topSchemaRef: i.scopeValue("schema", this.opts.code.source === !0 ? { ref: f.schema, code: (0, e.stringify)(f.schema) } : { ref: f.schema }),
      validateName: C,
      ValidationError: h,
      schema: f.schema,
      schemaEnv: f,
      rootId: c,
      baseId: f.baseId || c,
      schemaPath: e.nil,
      errSchemaPath: f.schemaPath || (this.opts.jtd ? "" : "#"),
      errorPath: (0, e._)`""`,
      opts: this.opts,
      self: this
    };
    let A;
    try {
      this._compilations.add(f), (0, r.validateFunctionCode)(k), i.optimize(this.opts.code.optimize);
      const M = i.toString();
      A = `${i.scopeRefs(o.default.scope)}return ${M}`, this.opts.code.process && (A = this.opts.code.process(A, f));
      const q = new Function(`${o.default.self}`, `${o.default.scope}`, A)(this, this.scope.get());
      if (this.scope.value(C, { ref: q }), q.errors = null, q.schema = f.schema, q.schemaEnv = f, f.$async && (q.$async = !0), this.opts.code.source === !0 && (q.source = { validateName: C, validateCode: M, scopeValues: i._values }), this.opts.unevaluated) {
        const { props: K, items: ee } = k;
        q.evaluated = {
          props: K instanceof e.Name ? void 0 : K,
          items: ee instanceof e.Name ? void 0 : ee,
          dynamicProps: K instanceof e.Name,
          dynamicItems: ee instanceof e.Name
        }, q.source && (q.source.evaluated = (0, e.stringify)(q.evaluated));
      }
      return f.validate = q, f;
    } catch (M) {
      throw delete f.validate, delete f.validateName, A && this.logger.error("Error compiling schema, function code:", A), M;
    } finally {
      this._compilations.delete(f);
    }
  }
  ue.compileSchema = l;
  function d(f, y, c) {
    var p;
    c = (0, n.resolveUrl)(this.opts.uriResolver, y, c);
    const _ = f.refs[c];
    if (_)
      return _;
    let s = S.call(this, f, c);
    if (s === void 0) {
      const i = (p = f.localRefs) === null || p === void 0 ? void 0 : p[c], { schemaId: h } = this.opts;
      i && (s = new a({ schema: i, schemaId: h, root: f, baseId: y }));
    }
    if (s !== void 0)
      return f.refs[c] = v.call(this, s);
  }
  ue.resolveRef = d;
  function v(f) {
    return (0, n.inlineRef)(f.schema, this.opts.inlineRefs) ? f.schema : f.validate ? f : l.call(this, f);
  }
  function g(f) {
    for (const y of this._compilations)
      if (w(y, f))
        return y;
  }
  ue.getCompilingSchema = g;
  function w(f, y) {
    return f.schema === y.schema && f.root === y.root && f.baseId === y.baseId;
  }
  function S(f, y) {
    let c;
    for (; typeof (c = this.refs[y]) == "string"; )
      y = c;
    return c || this.schemas[y] || b.call(this, f, y);
  }
  function b(f, y) {
    const c = this.opts.uriResolver.parse(y), p = (0, n._getFullPath)(this.opts.uriResolver, c);
    let _ = (0, n.getFullPath)(this.opts.uriResolver, f.baseId, void 0);
    if (Object.keys(f.schema).length > 0 && p === _)
      return $.call(this, c, f);
    const s = (0, n.normalizeId)(p), i = this.refs[s] || this.schemas[s];
    if (typeof i == "string") {
      const h = b.call(this, f, i);
      return typeof h?.schema != "object" ? void 0 : $.call(this, c, h);
    }
    if (typeof i?.schema == "object") {
      if (i.validate || l.call(this, i), s === (0, n.normalizeId)(y)) {
        const { schema: h } = i, { schemaId: C } = this.opts, k = h[C];
        return k && (_ = (0, n.resolveUrl)(this.opts.uriResolver, _, k)), new a({ schema: h, schemaId: C, root: f, baseId: _ });
      }
      return $.call(this, c, i);
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
  function $(f, { baseId: y, schema: c, root: p }) {
    var _;
    if (((_ = f.fragment) === null || _ === void 0 ? void 0 : _[0]) !== "/")
      return;
    for (const h of f.fragment.slice(1).split("/")) {
      if (typeof c == "boolean")
        return;
      const C = c[(0, u.unescapeFragment)(h)];
      if (C === void 0)
        return;
      c = C;
      const k = typeof c == "object" && c[this.opts.schemaId];
      !E.has(h) && k && (y = (0, n.resolveUrl)(this.opts.uriResolver, y, k));
    }
    let s;
    if (typeof c != "boolean" && c.$ref && !(0, u.schemaHasRulesButRef)(c, this.RULES)) {
      const h = (0, n.resolveUrl)(this.opts.uriResolver, y, c.$ref);
      s = b.call(this, p, h);
    }
    const { schemaId: i } = this.opts;
    if (s = s || new a({ schema: c, schemaId: i, root: p, baseId: y }), s.schema !== s.root.schema)
      return s;
  }
  return ue;
}
const rs = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", ns = "Meta-schema for $data reference (JSON AnySchema extension proposal)", os = "object", ss = ["$data"], as = { $data: { type: "string", anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] } }, is = !1, cs = {
  $id: rs,
  description: ns,
  type: os,
  required: ss,
  properties: as,
  additionalProperties: is
};
var Xe = {}, Be = { exports: {} }, dr, on;
function Po() {
  if (on) return dr;
  on = 1;
  const e = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu), t = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u), o = RegExp.prototype.test.bind(/^[\da-f]{2}$/iu), n = RegExp.prototype.test.bind(/^[\da-z\-._~]$/iu), u = RegExp.prototype.test.bind(/^[\da-z\-._~!$&'()*+,;=:@/]$/iu);
  function r(s) {
    let i = "", h = 0, C = 0;
    for (C = 0; C < s.length; C++)
      if (h = s[C].charCodeAt(0), h !== 48) {
        if (!(h >= 48 && h <= 57 || h >= 65 && h <= 70 || h >= 97 && h <= 102))
          return "";
        i += s[C];
        break;
      }
    for (C += 1; C < s.length; C++) {
      if (h = s[C].charCodeAt(0), !(h >= 48 && h <= 57 || h >= 65 && h <= 70 || h >= 97 && h <= 102))
        return "";
      i += s[C];
    }
    return i;
  }
  const a = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
  function l(s) {
    return s.length = 0, !0;
  }
  function d(s, i, h) {
    if (s.length) {
      const C = r(s);
      if (C !== "")
        i.push(C);
      else
        return h.error = !0, !1;
      s.length = 0;
    }
    return !0;
  }
  function v(s) {
    let i = 0;
    const h = { error: !1, address: "", zone: "" }, C = [], k = [];
    let A = !1, M = !1, T = d;
    for (let q = 0; q < s.length; q++) {
      const K = s[q];
      if (!(K === "[" || K === "]"))
        if (K === ":") {
          if (A === !0 && (M = !0), !T(k, C, h))
            break;
          if (++i > 7) {
            h.error = !0;
            break;
          }
          q > 0 && s[q - 1] === ":" && (A = !0), C.push(":");
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
  function g(s) {
    if (w(s, ":") < 2)
      return { host: s, isIPV6: !1 };
    const i = v(s);
    if (i.error)
      return { host: s, isIPV6: !1 };
    {
      let h = i.address, C = i.address;
      return i.zone && (h += "%" + i.zone, C += "%25" + i.zone), { host: h, isIPV6: !0, escapedHost: C };
    }
  }
  function w(s, i) {
    let h = 0;
    for (let C = 0; C < s.length; C++)
      s[C] === i && h++;
    return h;
  }
  function S(s) {
    let i = s;
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
  const b = { "@": "%40", "/": "%2F", "?": "%3F", "#": "%23", ":": "%3A" }, E = /[@/?#:]/g, $ = /[@/?#]/g;
  function f(s, i) {
    const h = i ? $ : E;
    return h.lastIndex = 0, s.replace(h, (C) => b[C]);
  }
  function y(s, i = !1) {
    if (s.indexOf("%") === -1)
      return s;
    let h = "";
    for (let C = 0; C < s.length; C++) {
      if (s[C] === "%" && C + 2 < s.length) {
        const k = s.slice(C + 1, C + 3);
        if (o(k)) {
          const A = k.toUpperCase(), M = String.fromCharCode(parseInt(A, 16));
          i && n(M) ? h += M : h += "%" + A, C += 2;
          continue;
        }
      }
      h += s[C];
    }
    return h;
  }
  function c(s) {
    let i = "";
    for (let h = 0; h < s.length; h++) {
      if (s[h] === "%" && h + 2 < s.length) {
        const C = s.slice(h + 1, h + 3);
        if (o(C)) {
          const k = C.toUpperCase(), A = String.fromCharCode(parseInt(k, 16));
          A !== "." && n(A) ? i += A : i += "%" + k, h += 2;
          continue;
        }
      }
      u(s[h]) ? i += s[h] : i += escape(s[h]);
    }
    return i;
  }
  function p(s) {
    let i = "";
    for (let h = 0; h < s.length; h++) {
      if (s[h] === "%" && h + 2 < s.length) {
        const C = s.slice(h + 1, h + 3);
        if (o(C)) {
          i += "%" + C.toUpperCase(), h += 2;
          continue;
        }
      }
      i += escape(s[h]);
    }
    return i;
  }
  function _(s) {
    const i = [];
    if (s.userinfo !== void 0 && (i.push(s.userinfo), i.push("@")), s.host !== void 0) {
      let h = unescape(s.host);
      if (!t(h)) {
        const C = g(h);
        C.isIPV6 === !0 ? h = `[${C.escapedHost}]` : h = f(h, !1);
      }
      i.push(h);
    }
    return (typeof s.port == "number" || typeof s.port == "string") && (i.push(":"), i.push(String(s.port))), i.length ? i.join("") : void 0;
  }
  return dr = {
    nonSimpleDomain: a,
    recomposeAuthority: _,
    reescapeHostDelimiters: f,
    normalizePercentEncoding: y,
    normalizePathEncoding: c,
    escapePreservingEscapes: p,
    removeDotSegments: S,
    isIPv4: t,
    isUUID: e,
    normalizeIPv6: g,
    stringArrayToHexStripped: r
  }, dr;
}
var ur, sn;
function ls() {
  if (sn) return ur;
  sn = 1;
  const { isUUID: e } = Po(), t = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu, o = (
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
  function n(s) {
    return o.indexOf(
      /** @type {*} */
      s
    ) !== -1;
  }
  function u(s) {
    return s.secure === !0 ? !0 : s.secure === !1 ? !1 : s.scheme ? s.scheme.length === 3 && (s.scheme[0] === "w" || s.scheme[0] === "W") && (s.scheme[1] === "s" || s.scheme[1] === "S") && (s.scheme[2] === "s" || s.scheme[2] === "S") : !1;
  }
  function r(s) {
    return s.host || (s.error = s.error || "HTTP URIs must have a host."), s;
  }
  function a(s) {
    const i = String(s.scheme).toLowerCase() === "https";
    return (s.port === (i ? 443 : 80) || s.port === "") && (s.port = void 0), s.path || (s.path = "/"), s;
  }
  function l(s) {
    return s.secure = u(s), s.resourceName = (s.path || "/") + (s.query ? "?" + s.query : ""), s.path = void 0, s.query = void 0, s;
  }
  function d(s) {
    if ((s.port === (u(s) ? 443 : 80) || s.port === "") && (s.port = void 0), typeof s.secure == "boolean" && (s.scheme = s.secure ? "wss" : "ws", s.secure = void 0), s.resourceName) {
      const [i, h] = s.resourceName.split("?");
      s.path = i && i !== "/" ? i : void 0, s.query = h, s.resourceName = void 0;
    }
    return s.fragment = void 0, s;
  }
  function v(s, i) {
    if (!s.path)
      return s.error = "URN can not be parsed", s;
    const h = s.path.match(t);
    if (h) {
      const C = i.scheme || s.scheme || "urn";
      s.nid = h[1].toLowerCase(), s.nss = h[2];
      const k = `${C}:${i.nid || s.nid}`, A = _(k);
      s.path = void 0, A && (s = A.parse(s, i));
    } else
      s.error = s.error || "URN can not be parsed.";
    return s;
  }
  function g(s, i) {
    if (s.nid === void 0)
      throw new Error("URN without nid cannot be serialized");
    const h = i.scheme || s.scheme || "urn", C = s.nid.toLowerCase(), k = `${h}:${i.nid || C}`, A = _(k);
    A && (s = A.serialize(s, i));
    const M = s, T = s.nss;
    return M.path = `${C || i.nid}:${T}`, i.skipEscape = !0, M;
  }
  function w(s, i) {
    const h = s;
    return h.uuid = h.nss, h.nss = void 0, !i.tolerant && (!h.uuid || !e(h.uuid)) && (h.error = h.error || "UUID is not valid."), h;
  }
  function S(s) {
    const i = s;
    return i.nss = (s.uuid || "").toLowerCase(), i;
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
  ), $ = (
    /** @type {SchemeHandler} */
    {
      scheme: "ws",
      domainHost: !0,
      parse: l,
      serialize: d
    }
  ), f = (
    /** @type {SchemeHandler} */
    {
      scheme: "wss",
      domainHost: $.domainHost,
      parse: $.parse,
      serialize: $.serialize
    }
  ), p = (
    /** @type {Record<SchemeName, SchemeHandler>} */
    {
      http: b,
      https: E,
      ws: $,
      wss: f,
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
          parse: w,
          serialize: S,
          skipNormalize: !0
        }
      )
    }
  );
  Object.setPrototypeOf(p, null);
  function _(s) {
    return s && (p[
      /** @type {SchemeName} */
      s
    ] || p[
      /** @type {SchemeName} */
      s.toLowerCase()
    ]) || void 0;
  }
  return ur = {
    wsIsSecure: u,
    SCHEMES: p,
    isValidSchemeName: n,
    getSchemeHandler: _
  }, ur;
}
var an;
function ds() {
  if (an) return Be.exports;
  an = 1;
  const { normalizeIPv6: e, removeDotSegments: t, recomposeAuthority: o, normalizePercentEncoding: n, normalizePathEncoding: u, escapePreservingEscapes: r, reescapeHostDelimiters: a, isIPv4: l, nonSimpleDomain: d } = Po(), { SCHEMES: v, getSchemeHandler: g } = ls();
  function w(k, A) {
    return typeof k == "string" ? k = /** @type {T} */
    s(k, A) : typeof k == "object" && (k = /** @type {T} */
    _($(k, A), A)), k;
  }
  function S(k, A, M) {
    const T = M ? Object.assign({ scheme: "null" }, M) : { scheme: "null" }, q = b(_(k, T), _(A, T), T, !0);
    return T.skipEscape = !0, $(q, T);
  }
  function b(k, A, M, T) {
    const q = {};
    return T || (k = _($(k, M), M), A = _($(A, M), M)), M = M || {}, !M.tolerant && A.scheme ? (q.scheme = A.scheme, q.userinfo = A.userinfo, q.host = A.host, q.port = A.port, q.path = t(A.path || ""), q.query = A.query) : (A.userinfo !== void 0 || A.host !== void 0 || A.port !== void 0 ? (q.userinfo = A.userinfo, q.host = A.host, q.port = A.port, q.path = t(A.path || ""), q.query = A.query) : (A.path ? (A.path[0] === "/" ? q.path = t(A.path) : ((k.userinfo !== void 0 || k.host !== void 0 || k.port !== void 0) && !k.path ? q.path = "/" + A.path : k.path ? q.path = k.path.slice(0, k.path.lastIndexOf("/") + 1) + A.path : q.path = A.path, q.path = t(q.path)), q.query = A.query) : (q.path = k.path, A.query !== void 0 ? q.query = A.query : q.query = k.query), q.userinfo = k.userinfo, q.host = k.host, q.port = k.port), q.scheme = k.scheme), q.fragment = A.fragment, q;
  }
  function E(k, A, M) {
    const T = h(k, M), q = h(A, M);
    return T !== void 0 && q !== void 0 && T.toLowerCase() === q.toLowerCase();
  }
  function $(k, A) {
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
    K && K.serialize && K.serialize(M, T), M.path !== void 0 && (T.skipEscape ? M.path = n(M.path) : (M.path = r(M.path), M.scheme !== void 0 && (M.path = M.path.split("%3A").join(":")))), T.reference !== "suffix" && M.scheme && q.push(M.scheme, ":");
    const ee = o(M);
    if (ee !== void 0 && (T.reference !== "suffix" && q.push("//"), q.push(ee), M.path && M.path[0] !== "/" && q.push("/")), M.path !== void 0) {
      let te = M.path;
      !T.absolutePath && (!K || !K.absolutePath) && (te = t(te)), ee === void 0 && te[0] === "/" && te[1] === "/" && (te = "/%2F" + te.slice(2)), q.push(te);
    }
    return M.query !== void 0 && q.push("?", M.query), M.fragment !== void 0 && q.push("#", M.fragment), q.join("");
  }
  const f = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u, y = /^(?:[^#/:?]+:)?\/\/([^/?#]*)/;
  function c(k, A) {
    if (A[2] !== void 0 && k.path && k.path[0] !== "/")
      return 'URI path must start with "/" when authority is present.';
    if (typeof k.port == "number" && (k.port < 0 || k.port > 65535))
      return "URI port is malformed.";
  }
  function p(k, A) {
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
    const te = k.match(f);
    if (te) {
      T.scheme = te[1], T.userinfo = te[3], T.host = te[4], T.port = parseInt(te[5], 10), T.path = te[6] || "", T.query = te[7], T.fragment = te[8], isNaN(T.port) && (T.port = te[5]);
      const fe = c(T, te);
      if (fe !== void 0 && (T.error = T.error || fe, q = !0), T.host)
        if (l(T.host) === !1) {
          const V = e(T.host);
          T.host = V.host.toLowerCase(), K = V.isIPV6;
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
      if ((!Y || Y && !Y.skipNormalize) && (k.indexOf("%") !== -1 && (T.scheme !== void 0 && (T.scheme = unescape(T.scheme)), T.host !== void 0 && (T.host = a(unescape(T.host), K))), T.path && (T.path = u(T.path)), T.fragment))
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
    return p(k, A).parsed;
  }
  function s(k, A) {
    return i(k, A).normalized;
  }
  function i(k, A) {
    const { parsed: M, malformedAuthorityOrPort: T } = p(k, A);
    return {
      normalized: T ? k : $(M, A),
      malformedAuthorityOrPort: T
    };
  }
  function h(k, A) {
    if (typeof k == "string") {
      const { normalized: M, malformedAuthorityOrPort: T } = i(k, A);
      return T ? void 0 : M;
    }
    if (typeof k == "object")
      return $(k, A);
  }
  const C = {
    SCHEMES: v,
    normalize: w,
    resolve: S,
    resolveComponent: b,
    equal: E,
    serialize: $,
    parse: _
  };
  return Be.exports = C, Be.exports.default = C, Be.exports.fastUri = C, Be.exports;
}
var cn;
function us() {
  if (cn) return Xe;
  cn = 1, Object.defineProperty(Xe, "__esModule", { value: !0 });
  const e = ds();
  return e.code = 'require("ajv/dist/runtime/uri").default', Xe.default = e, Xe;
}
var ln;
function fs() {
  return ln || (ln = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = void 0;
    var t = /* @__PURE__ */ Yt();
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
    const n = /* @__PURE__ */ wr(), u = /* @__PURE__ */ Xt(), r = /* @__PURE__ */ wo(), a = /* @__PURE__ */ Zt(), l = /* @__PURE__ */ G(), d = /* @__PURE__ */ Wt(), v = /* @__PURE__ */ Ut(), g = /* @__PURE__ */ X(), w = cs, S = /* @__PURE__ */ us(), b = (V, N) => new RegExp(V, N);
    b.code = "new RegExp";
    const E = ["removeAdditional", "useDefaults", "coerceTypes"], $ = /* @__PURE__ */ new Set([
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
    }, c = 200;
    function p(V) {
      var N, x, O, m, P, I, B, H, Q, Z, R, j, D, F, U, W, ne, ye, le, de, oe, Ae, pe, Qt, er;
      const Ve = V.strict, tr = (N = V.code) === null || N === void 0 ? void 0 : N.optimize, Tr = tr === !0 || tr === void 0 ? 1 : tr || 0, Mr = (O = (x = V.code) === null || x === void 0 ? void 0 : x.regExp) !== null && O !== void 0 ? O : b, Do = (m = V.uriResolver) !== null && m !== void 0 ? m : S.default;
      return {
        strictSchema: (I = (P = V.strictSchema) !== null && P !== void 0 ? P : Ve) !== null && I !== void 0 ? I : !0,
        strictNumbers: (H = (B = V.strictNumbers) !== null && B !== void 0 ? B : Ve) !== null && H !== void 0 ? H : !0,
        strictTypes: (Z = (Q = V.strictTypes) !== null && Q !== void 0 ? Q : Ve) !== null && Z !== void 0 ? Z : "log",
        strictTuples: (j = (R = V.strictTuples) !== null && R !== void 0 ? R : Ve) !== null && j !== void 0 ? j : "log",
        strictRequired: (F = (D = V.strictRequired) !== null && D !== void 0 ? D : Ve) !== null && F !== void 0 ? F : !1,
        code: V.code ? { ...V.code, optimize: Tr, regExp: Mr } : { optimize: Tr, regExp: Mr },
        loopRequired: (U = V.loopRequired) !== null && U !== void 0 ? U : c,
        loopEnum: (W = V.loopEnum) !== null && W !== void 0 ? W : c,
        meta: (ne = V.meta) !== null && ne !== void 0 ? ne : !0,
        messages: (ye = V.messages) !== null && ye !== void 0 ? ye : !0,
        inlineRefs: (le = V.inlineRefs) !== null && le !== void 0 ? le : !0,
        schemaId: (de = V.schemaId) !== null && de !== void 0 ? de : "$id",
        addUsedSchema: (oe = V.addUsedSchema) !== null && oe !== void 0 ? oe : !0,
        validateSchema: (Ae = V.validateSchema) !== null && Ae !== void 0 ? Ae : !0,
        validateFormats: (pe = V.validateFormats) !== null && pe !== void 0 ? pe : !0,
        unicodeRegExp: (Qt = V.unicodeRegExp) !== null && Qt !== void 0 ? Qt : !0,
        int32range: (er = V.int32range) !== null && er !== void 0 ? er : !0,
        uriResolver: Do
      };
    }
    class _ {
      constructor(N = {}) {
        this.schemas = {}, this.refs = {}, this.formats = /* @__PURE__ */ Object.create(null), this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), N = this.opts = { ...N, ...p(N) };
        const { es5: x, lines: O } = this.opts.code;
        this.scope = new l.ValueScope({ scope: {}, prefixes: $, es5: x, lines: O }), this.logger = T(N.logger);
        const m = N.validateFormats;
        N.validateFormats = !1, this.RULES = (0, r.getRules)(), s.call(this, f, N, "NOT SUPPORTED"), s.call(this, y, N, "DEPRECATED", "warn"), this._metaOpts = A.call(this), N.formats && C.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), N.keywords && k.call(this, N.keywords), typeof N.meta == "object" && this.addMetaSchema(N.meta), h.call(this), N.validateFormats = m;
      }
      _addVocabularies() {
        this.addKeyword("$async");
      }
      _addDefaultMetaSchema() {
        const { $data: N, meta: x, schemaId: O } = this.opts;
        let m = w;
        O === "id" && (m = { ...w }, m.id = m.$id, delete m.$id), x && N && this.addMetaSchema(m, m[O], !1);
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
        const m = O(x);
        return "$async" in O || (this.errors = O.errors), m;
      }
      compile(N, x) {
        const O = this._addSchema(N, x);
        return O.validate || this._compileSchemaEnv(O);
      }
      compileAsync(N, x) {
        if (typeof this.opts.loadSchema != "function")
          throw new Error("options.loadSchema should be a function");
        const { loadSchema: O } = this.opts;
        return m.call(this, N, x);
        async function m(Z, R) {
          await P.call(this, Z.$schema);
          const j = this._addSchema(Z, R);
          return j.validate || I.call(this, j);
        }
        async function P(Z) {
          Z && !this.getSchema(Z) && await m.call(this, { $ref: Z }, !0);
        }
        async function I(Z) {
          try {
            return this._compileSchemaEnv(Z);
          } catch (R) {
            if (!(R instanceof u.default))
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
          this.refs[Z] || await P.call(this, R.$schema), this.refs[Z] || this.addSchema(R, Z, x);
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
      addSchema(N, x, O, m = this.opts.validateSchema) {
        if (Array.isArray(N)) {
          for (const I of N)
            this.addSchema(I, void 0, O, m);
          return this;
        }
        let P;
        if (typeof N == "object") {
          const { schemaId: I } = this.opts;
          if (P = N[I], P !== void 0 && typeof P != "string")
            throw new Error(`schema ${I} must be string`);
        }
        return x = (0, d.normalizeId)(x || P), this._checkUnique(x), this.schemas[x] = this._addSchema(N, O, x, m, !0), this;
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
        const m = this.validate(O, N);
        if (!m && x) {
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
      getSchema(N) {
        let x;
        for (; typeof (x = i.call(this, N)) == "string"; )
          N = x;
        if (x === void 0) {
          const { schemaId: O } = this.opts, m = new a.SchemaEnv({ schema: {}, schemaId: O });
          if (x = a.resolveSchema.call(this, m, N), !x)
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
            const x = i.call(this, N);
            return typeof x == "object" && this._cache.delete(x.schema), delete this.schemas[N], delete this.refs[N], this;
          }
          case "object": {
            const x = N;
            this._cache.delete(x);
            let O = N[this.opts.schemaId];
            return O && (O = (0, d.normalizeId)(O), delete this.schemas[O], delete this.refs[O]), this;
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
        if (K.call(this, O, x), !x)
          return (0, g.eachItem)(O, (P) => ee.call(this, P)), this;
        fe.call(this, x);
        const m = {
          ...x,
          type: (0, v.getJSONTypes)(x.type),
          schemaType: (0, v.getJSONTypes)(x.schemaType)
        };
        return (0, g.eachItem)(O, m.type.length === 0 ? (P) => ee.call(this, P, m) : (P) => m.type.forEach((I) => ee.call(this, P, m, I))), this;
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
          const m = O.rules.findIndex((P) => P.keyword === N);
          m >= 0 && O.rules.splice(m, 1);
        }
        return this;
      }
      // Add format
      addFormat(N, x) {
        return typeof x == "string" && (x = new RegExp(x)), this.formats[N] = x, this;
      }
      errorsText(N = this.errors, { separator: x = ", ", dataVar: O = "data" } = {}) {
        return !N || N.length === 0 ? "No errors" : N.map((m) => `${O}${m.instancePath} ${m.message}`).reduce((m, P) => m + x + P);
      }
      $dataMetaSchema(N, x) {
        const O = this.RULES.all;
        N = JSON.parse(JSON.stringify(N));
        for (const m of x) {
          const P = m.split("/").slice(1);
          let I = N;
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
        return N;
      }
      _removeAllSchemas(N, x) {
        for (const O in N) {
          const m = N[O];
          (!x || x.test(O)) && (typeof m == "string" ? delete N[O] : m && !m.meta && (this._cache.delete(m.schema), delete N[O]));
        }
      }
      _addSchema(N, x, O, m = this.opts.validateSchema, P = this.opts.addUsedSchema) {
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
        let H = this._cache.get(N);
        if (H !== void 0)
          return H;
        O = (0, d.normalizeId)(I || O);
        const Q = d.getSchemaRefs.call(this, N, O);
        return H = new a.SchemaEnv({ schema: N, schemaId: B, meta: x, baseId: O, localRefs: Q }), this._cache.set(H.schema, H), P && !O.startsWith("#") && (O && this._checkUnique(O), this.refs[O] = H), m && this.validateSchema(N, !0), H;
      }
      _checkUnique(N) {
        if (this.schemas[N] || this.refs[N])
          throw new Error(`schema with key or id "${N}" already exists`);
      }
      _compileSchemaEnv(N) {
        if (N.meta ? this._compileMetaSchema(N) : a.compileSchema.call(this, N), !N.validate)
          throw new Error("ajv implementation error");
        return N.validate;
      }
      _compileMetaSchema(N) {
        const x = this.opts;
        this.opts = this._metaOpts;
        try {
          a.compileSchema.call(this, N);
        } finally {
          this.opts = x;
        }
      }
    }
    _.ValidationError = n.default, _.MissingRefError = u.default, e.default = _;
    function s(V, N, x, O = "error") {
      for (const m in V) {
        const P = m;
        P in N && this.logger[O](`${x}: option ${m}. ${V[P]}`);
      }
    }
    function i(V) {
      return V = (0, d.normalizeId)(V), this.schemas[V] || this.refs[V];
    }
    function h() {
      const V = this.opts.schemas;
      if (V)
        if (Array.isArray(V))
          this.addSchema(V);
        else
          for (const N in V)
            this.addSchema(V[N], N);
    }
    function C() {
      for (const V in this.opts.formats) {
        const N = this.opts.formats[V];
        N && this.addFormat(V, N);
      }
    }
    function k(V) {
      if (Array.isArray(V)) {
        this.addVocabulary(V);
        return;
      }
      this.logger.warn("keywords option as map is deprecated, pass array");
      for (const N in V) {
        const x = V[N];
        x.keyword || (x.keyword = N), this.addKeyword(x);
      }
    }
    function A() {
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
    function K(V, N) {
      const { RULES: x } = this;
      if ((0, g.eachItem)(V, (O) => {
        if (x.keywords[O])
          throw new Error(`Keyword ${O} is already defined`);
        if (!q.test(O))
          throw new Error(`Keyword ${O} has invalid name`);
      }), !!N && N.$data && !("code" in N || "validate" in N))
        throw new Error('$data keyword must have "code" or "validate" function');
    }
    function ee(V, N, x) {
      var O;
      const m = N?.post;
      if (x && m)
        throw new Error('keyword with "post" flag cannot have "type"');
      const { RULES: P } = this;
      let I = m ? P.post : P.rules.find(({ type: H }) => H === x);
      if (I || (I = { type: x, rules: [] }, P.rules.push(I)), P.keywords[V] = !0, !N)
        return;
      const B = {
        keyword: V,
        definition: {
          ...N,
          type: (0, v.getJSONTypes)(N.type),
          schemaType: (0, v.getJSONTypes)(N.schemaType)
        }
      };
      N.before ? te.call(this, I, B, N.before) : I.rules.push(B), P.all[V] = B, (O = N.implements) === null || O === void 0 || O.forEach((H) => this.addKeyword(H));
    }
    function te(V, N, x) {
      const O = V.rules.findIndex((m) => m.keyword === x);
      O >= 0 ? V.rules.splice(O, 0, N) : (V.rules.push(N), this.logger.warn(`rule ${x} is not defined`));
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
  })(nr)), nr;
}
var Ze = {}, Qe = {}, et = {}, dn;
function ps() {
  if (dn) return et;
  dn = 1, Object.defineProperty(et, "__esModule", { value: !0 });
  const e = {
    keyword: "id",
    code() {
      throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
    }
  };
  return et.default = e, et;
}
var Ee = {}, un;
function Sr() {
  if (un) return Ee;
  un = 1, Object.defineProperty(Ee, "__esModule", { value: !0 }), Ee.callRef = Ee.getValidate = void 0;
  const e = /* @__PURE__ */ Xt(), t = /* @__PURE__ */ _e(), o = /* @__PURE__ */ G(), n = /* @__PURE__ */ $e(), u = /* @__PURE__ */ Zt(), r = /* @__PURE__ */ X(), a = {
    keyword: "$ref",
    schemaType: "string",
    code(v) {
      const { gen: g, schema: w, it: S } = v, { baseId: b, schemaEnv: E, validateName: $, opts: f, self: y } = S, { root: c } = E;
      if ((w === "#" || w === "#/") && b === c.baseId)
        return _();
      const p = u.resolveRef.call(y, c, b, w);
      if (p === void 0)
        throw new e.default(S.opts.uriResolver, b, w);
      if (p instanceof u.SchemaEnv)
        return s(p);
      return i(p);
      function _() {
        if (E === c)
          return d(v, $, E, E.$async);
        const h = g.scopeValue("root", { ref: c });
        return d(v, (0, o._)`${h}.validate`, c, c.$async);
      }
      function s(h) {
        const C = l(v, h);
        d(v, C, h, h.$async);
      }
      function i(h) {
        const C = g.scopeValue("schema", f.code.source === !0 ? { ref: h, code: (0, o.stringify)(h) } : { ref: h }), k = g.name("valid"), A = v.subschema({
          schema: h,
          dataTypes: [],
          schemaPath: o.nil,
          topSchemaRef: C,
          errSchemaPath: w
        }, k);
        v.mergeEvaluated(A), v.ok(k);
      }
    }
  };
  function l(v, g) {
    const { gen: w } = v;
    return g.validate ? w.scopeValue("validate", { ref: g.validate }) : (0, o._)`${w.scopeValue("wrapper", { ref: g })}.validate`;
  }
  Ee.getValidate = l;
  function d(v, g, w, S) {
    const { gen: b, it: E } = v, { allErrors: $, schemaEnv: f, opts: y } = E, c = y.passContext ? n.default.this : o.nil;
    S ? p() : _();
    function p() {
      if (!f.$async)
        throw new Error("async schema referenced by sync schema");
      const h = b.let("valid");
      b.try(() => {
        b.code((0, o._)`await ${(0, t.callValidateCode)(v, g, c)}`), i(g), $ || b.assign(h, !0);
      }, (C) => {
        b.if((0, o._)`!(${C} instanceof ${E.ValidationError})`, () => b.throw(C)), s(C), $ || b.assign(h, !1);
      }), v.ok(h);
    }
    function _() {
      v.result((0, t.callValidateCode)(v, g, c), () => i(g), () => s(g));
    }
    function s(h) {
      const C = (0, o._)`${h}.errors`;
      b.assign(n.default.vErrors, (0, o._)`${n.default.vErrors} === null ? ${C} : ${n.default.vErrors}.concat(${C})`), b.assign(n.default.errors, (0, o._)`${n.default.vErrors}.length`);
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
          const A = b.var("props", (0, o._)`${h}.evaluated.props`);
          E.props = r.mergeEvaluated.props(b, A, E.props, o.Name);
        }
      if (E.items !== !0)
        if (k && !k.dynamicItems)
          k.items !== void 0 && (E.items = r.mergeEvaluated.items(b, k.items, E.items));
        else {
          const A = b.var("items", (0, o._)`${h}.evaluated.items`);
          E.items = r.mergeEvaluated.items(b, A, E.items, o.Name);
        }
    }
  }
  return Ee.callRef = d, Ee.default = a, Ee;
}
var fn;
function hs() {
  if (fn) return Qe;
  fn = 1, Object.defineProperty(Qe, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ps(), t = /* @__PURE__ */ Sr(), o = [
    "$schema",
    "$id",
    "$defs",
    "$vocabulary",
    { keyword: "$comment" },
    "definitions",
    e.default,
    t.default
  ];
  return Qe.default = o, Qe;
}
var tt = {}, rt = {}, pn;
function ms() {
  if (pn) return rt;
  pn = 1, Object.defineProperty(rt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), t = e.operators, o = {
    maximum: { okStr: "<=", ok: t.LTE, fail: t.GT },
    minimum: { okStr: ">=", ok: t.GTE, fail: t.LT },
    exclusiveMaximum: { okStr: "<", ok: t.LT, fail: t.GTE },
    exclusiveMinimum: { okStr: ">", ok: t.GT, fail: t.LTE }
  }, n = {
    message: ({ keyword: r, schemaCode: a }) => (0, e.str)`must be ${o[r].okStr} ${a}`,
    params: ({ keyword: r, schemaCode: a }) => (0, e._)`{comparison: ${o[r].okStr}, limit: ${a}}`
  }, u = {
    keyword: Object.keys(o),
    type: "number",
    schemaType: "number",
    $data: !0,
    error: n,
    code(r) {
      const { keyword: a, data: l, schemaCode: d } = r;
      r.fail$data((0, e._)`${l} ${o[a].fail} ${d} || isNaN(${l})`);
    }
  };
  return rt.default = u, rt;
}
var nt = {}, hn;
function ys() {
  if (hn) return nt;
  hn = 1, Object.defineProperty(nt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), o = {
    keyword: "multipleOf",
    type: "number",
    schemaType: "number",
    $data: !0,
    error: {
      message: ({ schemaCode: n }) => (0, e.str)`must be multiple of ${n}`,
      params: ({ schemaCode: n }) => (0, e._)`{multipleOf: ${n}}`
    },
    code(n) {
      const { gen: u, data: r, schemaCode: a, it: l } = n, d = l.opts.multipleOfPrecision, v = u.let("res"), g = d ? (0, e._)`Math.abs(Math.round(${v}) - ${v}) > 1e-${d}` : (0, e._)`${v} !== parseInt(${v})`;
      n.fail$data((0, e._)`(${a} === 0 || (${v} = ${r}/${a}, ${g}))`);
    }
  };
  return nt.default = o, nt;
}
var ot = {}, st = {}, mn;
function gs() {
  if (mn) return st;
  mn = 1, Object.defineProperty(st, "__esModule", { value: !0 });
  function e(t) {
    const o = t.length;
    let n = 0, u = 0, r;
    for (; u < o; )
      n++, r = t.charCodeAt(u++), r >= 55296 && r <= 56319 && u < o && (r = t.charCodeAt(u), (r & 64512) === 56320 && u++);
    return n;
  }
  return st.default = e, e.code = 'require("ajv/dist/runtime/ucs2length").default', st;
}
var yn;
function vs() {
  if (yn) return ot;
  yn = 1, Object.defineProperty(ot, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), o = /* @__PURE__ */ gs(), u = {
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
      const { keyword: a, data: l, schemaCode: d, it: v } = r, g = a === "maxLength" ? e.operators.GT : e.operators.LT, w = v.opts.unicode === !1 ? (0, e._)`${l}.length` : (0, e._)`${(0, t.useFunc)(r.gen, o.default)}(${l})`;
      r.fail$data((0, e._)`${w} ${g} ${d}`);
    }
  };
  return ot.default = u, ot;
}
var at = {}, gn;
function $s() {
  if (gn) return at;
  gn = 1, Object.defineProperty(at, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ _e(), t = /* @__PURE__ */ X(), o = /* @__PURE__ */ G(), u = {
    keyword: "pattern",
    type: "string",
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: r }) => (0, o.str)`must match pattern "${r}"`,
      params: ({ schemaCode: r }) => (0, o._)`{pattern: ${r}}`
    },
    code(r) {
      const { gen: a, data: l, $data: d, schema: v, schemaCode: g, it: w } = r, S = w.opts.unicodeRegExp ? "u" : "";
      if (d) {
        const { regExp: b } = w.opts.code, E = b.code === "new RegExp" ? (0, o._)`new RegExp` : (0, t.useFunc)(a, b), $ = a.let("valid");
        a.try(() => a.assign($, (0, o._)`${E}(${g}, ${S}).test(${l})`), () => a.assign($, !1)), r.fail$data((0, o._)`!${$}`);
      } else {
        const b = (0, e.usePattern)(r, v);
        r.fail$data((0, o._)`!${b}.test(${l})`);
      }
    }
  };
  return at.default = u, at;
}
var it = {}, vn;
function _s() {
  if (vn) return it;
  vn = 1, Object.defineProperty(it, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), o = {
    keyword: ["maxProperties", "minProperties"],
    type: "object",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: n, schemaCode: u }) {
        const r = n === "maxProperties" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${r} than ${u} properties`;
      },
      params: ({ schemaCode: n }) => (0, e._)`{limit: ${n}}`
    },
    code(n) {
      const { keyword: u, data: r, schemaCode: a } = n, l = u === "maxProperties" ? e.operators.GT : e.operators.LT;
      n.fail$data((0, e._)`Object.keys(${r}).length ${l} ${a}`);
    }
  };
  return it.default = o, it;
}
var ct = {}, $n;
function bs() {
  if ($n) return ct;
  $n = 1, Object.defineProperty(ct, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ _e(), t = /* @__PURE__ */ G(), o = /* @__PURE__ */ X(), u = {
    keyword: "required",
    type: "object",
    schemaType: "array",
    $data: !0,
    error: {
      message: ({ params: { missingProperty: r } }) => (0, t.str)`must have required property '${r}'`,
      params: ({ params: { missingProperty: r } }) => (0, t._)`{missingProperty: ${r}}`
    },
    code(r) {
      const { gen: a, schema: l, schemaCode: d, data: v, $data: g, it: w } = r, { opts: S } = w;
      if (!g && l.length === 0)
        return;
      const b = l.length >= S.loopRequired;
      if (w.allErrors ? E() : $(), S.strictRequired) {
        const c = r.parentSchema.properties, { definedProperties: p } = r.it;
        for (const _ of l)
          if (c?.[_] === void 0 && !p.has(_)) {
            const s = w.schemaEnv.baseId + w.errSchemaPath, i = `required property "${_}" is not defined at "${s}" (strictRequired)`;
            (0, o.checkStrictMode)(w, i, w.opts.strictRequired);
          }
      }
      function E() {
        if (b || g)
          r.block$data(t.nil, f);
        else
          for (const c of l)
            (0, e.checkReportMissingProp)(r, c);
      }
      function $() {
        const c = a.let("missing");
        if (b || g) {
          const p = a.let("valid", !0);
          r.block$data(p, () => y(c, p)), r.ok(p);
        } else
          a.if((0, e.checkMissingProp)(r, l, c)), (0, e.reportMissingProp)(r, c), a.else();
      }
      function f() {
        a.forOf("prop", d, (c) => {
          r.setParams({ missingProperty: c }), a.if((0, e.noPropertyInData)(a, v, c, S.ownProperties), () => r.error());
        });
      }
      function y(c, p) {
        r.setParams({ missingProperty: c }), a.forOf(c, d, () => {
          a.assign(p, (0, e.propertyInData)(a, v, c, S.ownProperties)), a.if((0, t.not)(p), () => {
            r.error(), a.break();
          });
        }, t.nil);
      }
    }
  };
  return ct.default = u, ct;
}
var lt = {}, _n;
function ws() {
  if (_n) return lt;
  _n = 1, Object.defineProperty(lt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), o = {
    keyword: ["maxItems", "minItems"],
    type: "array",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: n, schemaCode: u }) {
        const r = n === "maxItems" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${r} than ${u} items`;
      },
      params: ({ schemaCode: n }) => (0, e._)`{limit: ${n}}`
    },
    code(n) {
      const { keyword: u, data: r, schemaCode: a } = n, l = u === "maxItems" ? e.operators.GT : e.operators.LT;
      n.fail$data((0, e._)`${r}.length ${l} ${a}`);
    }
  };
  return lt.default = o, lt;
}
var dt = {}, ut = {}, bn;
function Er() {
  if (bn) return ut;
  bn = 1, Object.defineProperty(ut, "__esModule", { value: !0 });
  const e = Eo();
  return e.code = 'require("ajv/dist/runtime/equal").default', ut.default = e, ut;
}
var wn;
function Ss() {
  if (wn) return dt;
  wn = 1, Object.defineProperty(dt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ut(), t = /* @__PURE__ */ G(), o = /* @__PURE__ */ X(), n = /* @__PURE__ */ Er(), r = {
    keyword: "uniqueItems",
    type: "array",
    schemaType: "boolean",
    $data: !0,
    error: {
      message: ({ params: { i: a, j: l } }) => (0, t.str)`must NOT have duplicate items (items ## ${l} and ${a} are identical)`,
      params: ({ params: { i: a, j: l } }) => (0, t._)`{i: ${a}, j: ${l}}`
    },
    code(a) {
      const { gen: l, data: d, $data: v, schema: g, parentSchema: w, schemaCode: S, it: b } = a;
      if (!v && !g)
        return;
      const E = l.let("valid"), $ = w.items ? (0, e.getSchemaTypes)(w.items) : [];
      a.block$data(E, f, (0, t._)`${S} === false`), a.ok(E);
      function f() {
        const _ = l.let("i", (0, t._)`${d}.length`), s = l.let("j");
        a.setParams({ i: _, j: s }), l.assign(E, !0), l.if((0, t._)`${_} > 1`, () => (y() ? c : p)(_, s));
      }
      function y() {
        return $.length > 0 && !$.some((_) => _ === "object" || _ === "array");
      }
      function c(_, s) {
        const i = l.name("item"), h = (0, e.checkDataTypes)($, i, b.opts.strictNumbers, e.DataType.Wrong), C = l.const("indices", (0, t._)`{}`);
        l.for((0, t._)`;${_}--;`, () => {
          l.let(i, (0, t._)`${d}[${_}]`), l.if(h, (0, t._)`continue`), $.length > 1 && l.if((0, t._)`typeof ${i} == "string"`, (0, t._)`${i} += "_"`), l.if((0, t._)`typeof ${C}[${i}] == "number"`, () => {
            l.assign(s, (0, t._)`${C}[${i}]`), a.error(), l.assign(E, !1).break();
          }).code((0, t._)`${C}[${i}] = ${_}`);
        });
      }
      function p(_, s) {
        const i = (0, o.useFunc)(l, n.default), h = l.name("outer");
        l.label(h).for((0, t._)`;${_}--;`, () => l.for((0, t._)`${s} = ${_}; ${s}--;`, () => l.if((0, t._)`${i}(${d}[${_}], ${d}[${s}])`, () => {
          a.error(), l.assign(E, !1).break(h);
        })));
      }
    }
  };
  return dt.default = r, dt;
}
var ft = {}, Sn;
function Es() {
  if (Sn) return ft;
  Sn = 1, Object.defineProperty(ft, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), o = /* @__PURE__ */ Er(), u = {
    keyword: "const",
    $data: !0,
    error: {
      message: "must be equal to constant",
      params: ({ schemaCode: r }) => (0, e._)`{allowedValue: ${r}}`
    },
    code(r) {
      const { gen: a, data: l, $data: d, schemaCode: v, schema: g } = r;
      d || g && typeof g == "object" ? r.fail$data((0, e._)`!${(0, t.useFunc)(a, o.default)}(${l}, ${v})`) : r.fail((0, e._)`${g} !== ${l}`);
    }
  };
  return ft.default = u, ft;
}
var pt = {}, En;
function Ps() {
  if (En) return pt;
  En = 1, Object.defineProperty(pt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), o = /* @__PURE__ */ Er(), u = {
    keyword: "enum",
    schemaType: "array",
    $data: !0,
    error: {
      message: "must be equal to one of the allowed values",
      params: ({ schemaCode: r }) => (0, e._)`{allowedValues: ${r}}`
    },
    code(r) {
      const { gen: a, data: l, $data: d, schema: v, schemaCode: g, it: w } = r;
      if (!d && v.length === 0)
        throw new Error("enum must have non-empty array");
      const S = v.length >= w.opts.loopEnum;
      let b;
      const E = () => b ?? (b = (0, t.useFunc)(a, o.default));
      let $;
      if (S || d)
        $ = a.let("valid"), r.block$data($, f);
      else {
        if (!Array.isArray(v))
          throw new Error("ajv implementation error");
        const c = a.const("vSchema", g);
        $ = (0, e.or)(...v.map((p, _) => y(c, _)));
      }
      r.pass($);
      function f() {
        a.assign($, !1), a.forOf("v", g, (c) => a.if((0, e._)`${E()}(${l}, ${c})`, () => a.assign($, !0).break()));
      }
      function y(c, p) {
        const _ = v[p];
        return typeof _ == "object" && _ !== null ? (0, e._)`${E()}(${l}, ${c}[${p}])` : (0, e._)`${l} === ${_}`;
      }
    }
  };
  return pt.default = u, pt;
}
var Pn;
function ks() {
  if (Pn) return tt;
  Pn = 1, Object.defineProperty(tt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ms(), t = /* @__PURE__ */ ys(), o = /* @__PURE__ */ vs(), n = /* @__PURE__ */ $s(), u = /* @__PURE__ */ _s(), r = /* @__PURE__ */ bs(), a = /* @__PURE__ */ ws(), l = /* @__PURE__ */ Ss(), d = /* @__PURE__ */ Es(), v = /* @__PURE__ */ Ps(), g = [
    // number
    e.default,
    t.default,
    // string
    o.default,
    n.default,
    // object
    u.default,
    r.default,
    // array
    a.default,
    l.default,
    // any
    { keyword: "type", schemaType: ["string", "array"] },
    { keyword: "nullable", schemaType: "boolean" },
    d.default,
    v.default
  ];
  return tt.default = g, tt;
}
var ht = {}, Te = {}, kn;
function ko() {
  if (kn) return Te;
  kn = 1, Object.defineProperty(Te, "__esModule", { value: !0 }), Te.validateAdditionalItems = void 0;
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), n = {
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
      u(r, d);
    }
  };
  function u(r, a) {
    const { gen: l, schema: d, data: v, keyword: g, it: w } = r;
    w.items = !0;
    const S = l.const("len", (0, e._)`${v}.length`);
    if (d === !1)
      r.setParams({ len: a.length }), r.pass((0, e._)`${S} <= ${a.length}`);
    else if (typeof d == "object" && !(0, t.alwaysValidSchema)(w, d)) {
      const E = l.var("valid", (0, e._)`${S} <= ${a.length}`);
      l.if((0, e.not)(E), () => b(E)), r.ok(E);
    }
    function b(E) {
      l.forRange("i", a.length, S, ($) => {
        r.subschema({ keyword: g, dataProp: $, dataPropType: t.Type.Num }, E), w.allErrors || l.if((0, e.not)(E), () => l.break());
      });
    }
  }
  return Te.validateAdditionalItems = u, Te.default = n, Te;
}
var mt = {}, Me = {}, Cn;
function Co() {
  if (Cn) return Me;
  Cn = 1, Object.defineProperty(Me, "__esModule", { value: !0 }), Me.validateTuple = void 0;
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), o = /* @__PURE__ */ _e(), n = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "array", "boolean"],
    before: "uniqueItems",
    code(r) {
      const { schema: a, it: l } = r;
      if (Array.isArray(a))
        return u(r, "additionalItems", a);
      l.items = !0, !(0, t.alwaysValidSchema)(l, a) && r.ok((0, o.validateArray)(r));
    }
  };
  function u(r, a, l = r.schema) {
    const { gen: d, parentSchema: v, data: g, keyword: w, it: S } = r;
    $(v), S.opts.unevaluated && l.length && S.items !== !0 && (S.items = t.mergeEvaluated.items(d, l.length, S.items));
    const b = d.name("valid"), E = d.const("len", (0, e._)`${g}.length`);
    l.forEach((f, y) => {
      (0, t.alwaysValidSchema)(S, f) || (d.if((0, e._)`${E} > ${y}`, () => r.subschema({
        keyword: w,
        schemaProp: y,
        dataProp: y
      }, b)), r.ok(b));
    });
    function $(f) {
      const { opts: y, errSchemaPath: c } = S, p = l.length, _ = p === f.minItems && (p === f.maxItems || f[a] === !1);
      if (y.strictTuples && !_) {
        const s = `"${w}" is ${p}-tuple, but minItems or maxItems/${a} are not specified or different at path "${c}"`;
        (0, t.checkStrictMode)(S, s, y.strictTuples);
      }
    }
  }
  return Me.validateTuple = u, Me.default = n, Me;
}
var Rn;
function Cs() {
  if (Rn) return mt;
  Rn = 1, Object.defineProperty(mt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Co(), t = {
    keyword: "prefixItems",
    type: "array",
    schemaType: ["array"],
    before: "uniqueItems",
    code: (o) => (0, e.validateTuple)(o, "items")
  };
  return mt.default = t, mt;
}
var yt = {}, Nn;
function Rs() {
  if (Nn) return yt;
  Nn = 1, Object.defineProperty(yt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), o = /* @__PURE__ */ _e(), n = /* @__PURE__ */ ko(), r = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    error: {
      message: ({ params: { len: a } }) => (0, e.str)`must NOT have more than ${a} items`,
      params: ({ params: { len: a } }) => (0, e._)`{limit: ${a}}`
    },
    code(a) {
      const { schema: l, parentSchema: d, it: v } = a, { prefixItems: g } = d;
      v.items = !0, !(0, t.alwaysValidSchema)(v, l) && (g ? (0, n.validateAdditionalItems)(a, g) : a.ok((0, o.validateArray)(a)));
    }
  };
  return yt.default = r, yt;
}
var gt = {}, jn;
function Ns() {
  if (jn) return gt;
  jn = 1, Object.defineProperty(gt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), n = {
    keyword: "contains",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    trackErrors: !0,
    error: {
      message: ({ params: { min: u, max: r } }) => r === void 0 ? (0, e.str)`must contain at least ${u} valid item(s)` : (0, e.str)`must contain at least ${u} and no more than ${r} valid item(s)`,
      params: ({ params: { min: u, max: r } }) => r === void 0 ? (0, e._)`{minContains: ${u}}` : (0, e._)`{minContains: ${u}, maxContains: ${r}}`
    },
    code(u) {
      const { gen: r, schema: a, parentSchema: l, data: d, it: v } = u;
      let g, w;
      const { minContains: S, maxContains: b } = l;
      v.opts.next ? (g = S === void 0 ? 1 : S, w = b) : g = 1;
      const E = r.const("len", (0, e._)`${d}.length`);
      if (u.setParams({ min: g, max: w }), w === void 0 && g === 0) {
        (0, t.checkStrictMode)(v, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
        return;
      }
      if (w !== void 0 && g > w) {
        (0, t.checkStrictMode)(v, '"minContains" > "maxContains" is always invalid'), u.fail();
        return;
      }
      if ((0, t.alwaysValidSchema)(v, a)) {
        let p = (0, e._)`${E} >= ${g}`;
        w !== void 0 && (p = (0, e._)`${p} && ${E} <= ${w}`), u.pass(p);
        return;
      }
      v.items = !0;
      const $ = r.name("valid");
      w === void 0 && g === 1 ? y($, () => r.if($, () => r.break())) : g === 0 ? (r.let($, !0), w !== void 0 && r.if((0, e._)`${d}.length > 0`, f)) : (r.let($, !1), f()), u.result($, () => u.reset());
      function f() {
        const p = r.name("_valid"), _ = r.let("count", 0);
        y(p, () => r.if(p, () => c(_)));
      }
      function y(p, _) {
        r.forRange("i", 0, E, (s) => {
          u.subschema({
            keyword: "contains",
            dataProp: s,
            dataPropType: t.Type.Num,
            compositeRule: !0
          }, p), _();
        });
      }
      function c(p) {
        r.code((0, e._)`${p}++`), w === void 0 ? r.if((0, e._)`${p} >= ${g}`, () => r.assign($, !0).break()) : (r.if((0, e._)`${p} > ${w}`, () => r.assign($, !1).break()), g === 1 ? r.assign($, !0) : r.if((0, e._)`${p} >= ${g}`, () => r.assign($, !0)));
      }
    }
  };
  return gt.default = n, gt;
}
var fr = {}, An;
function Pr() {
  return An || (An = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
    const t = /* @__PURE__ */ G(), o = /* @__PURE__ */ X(), n = /* @__PURE__ */ _e();
    e.error = {
      message: ({ params: { property: d, depsCount: v, deps: g } }) => {
        const w = v === 1 ? "property" : "properties";
        return (0, t.str)`must have ${w} ${g} when property ${d} is present`;
      },
      params: ({ params: { property: d, depsCount: v, deps: g, missingProperty: w } }) => (0, t._)`{property: ${d},
    missingProperty: ${w},
    depsCount: ${v},
    deps: ${g}}`
      // TODO change to reference
    };
    const u = {
      keyword: "dependencies",
      type: "object",
      schemaType: "object",
      error: e.error,
      code(d) {
        const [v, g] = r(d);
        a(d, v), l(d, g);
      }
    };
    function r({ schema: d }) {
      const v = {}, g = {};
      for (const w in d) {
        if (w === "__proto__")
          continue;
        const S = Array.isArray(d[w]) ? v : g;
        S[w] = d[w];
      }
      return [v, g];
    }
    function a(d, v = d.schema) {
      const { gen: g, data: w, it: S } = d;
      if (Object.keys(v).length === 0)
        return;
      const b = g.let("missing");
      for (const E in v) {
        const $ = v[E];
        if ($.length === 0)
          continue;
        const f = (0, n.propertyInData)(g, w, E, S.opts.ownProperties);
        d.setParams({
          property: E,
          depsCount: $.length,
          deps: $.join(", ")
        }), S.allErrors ? g.if(f, () => {
          for (const y of $)
            (0, n.checkReportMissingProp)(d, y);
        }) : (g.if((0, t._)`${f} && (${(0, n.checkMissingProp)(d, $, b)})`), (0, n.reportMissingProp)(d, b), g.else());
      }
    }
    e.validatePropertyDeps = a;
    function l(d, v = d.schema) {
      const { gen: g, data: w, keyword: S, it: b } = d, E = g.name("valid");
      for (const $ in v)
        (0, o.alwaysValidSchema)(b, v[$]) || (g.if(
          (0, n.propertyInData)(g, w, $, b.opts.ownProperties),
          () => {
            const f = d.subschema({ keyword: S, schemaProp: $ }, E);
            d.mergeValidEvaluated(f, E);
          },
          () => g.var(E, !0)
          // TODO var
        ), d.ok(E));
    }
    e.validateSchemaDeps = l, e.default = u;
  })(fr)), fr;
}
var vt = {}, On;
function js() {
  if (On) return vt;
  On = 1, Object.defineProperty(vt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), n = {
    keyword: "propertyNames",
    type: "object",
    schemaType: ["object", "boolean"],
    error: {
      message: "property name must be valid",
      params: ({ params: u }) => (0, e._)`{propertyName: ${u.propertyName}}`
    },
    code(u) {
      const { gen: r, schema: a, data: l, it: d } = u;
      if ((0, t.alwaysValidSchema)(d, a))
        return;
      const v = r.name("valid");
      r.forIn("key", l, (g) => {
        u.setParams({ propertyName: g }), u.subschema({
          keyword: "propertyNames",
          data: g,
          dataTypes: ["string"],
          propertyName: g,
          compositeRule: !0
        }, v), r.if((0, e.not)(v), () => {
          u.error(!0), d.allErrors || r.break();
        });
      }), u.ok(v);
    }
  };
  return vt.default = n, vt;
}
var $t = {}, Tn;
function Ro() {
  if (Tn) return $t;
  Tn = 1, Object.defineProperty($t, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ _e(), t = /* @__PURE__ */ G(), o = /* @__PURE__ */ $e(), n = /* @__PURE__ */ X(), r = {
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
      const { gen: l, schema: d, parentSchema: v, data: g, errsCount: w, it: S } = a;
      if (!w)
        throw new Error("ajv implementation error");
      const { allErrors: b, opts: E } = S;
      if (S.props = !0, E.removeAdditional !== "all" && (0, n.alwaysValidSchema)(S, d))
        return;
      const $ = (0, e.allSchemaProperties)(v.properties), f = (0, e.allSchemaProperties)(v.patternProperties);
      y(), a.ok((0, t._)`${w} === ${o.default.errors}`);
      function y() {
        l.forIn("key", g, (i) => {
          !$.length && !f.length ? _(i) : l.if(c(i), () => _(i));
        });
      }
      function c(i) {
        let h;
        if ($.length > 8) {
          const C = (0, n.schemaRefOrVal)(S, v.properties, "properties");
          h = (0, e.isOwnProperty)(l, C, i);
        } else $.length ? h = (0, t.or)(...$.map((C) => (0, t._)`${i} === ${C}`)) : h = t.nil;
        return f.length && (h = (0, t.or)(h, ...f.map((C) => (0, t._)`${(0, e.usePattern)(a, C)}.test(${i})`))), (0, t.not)(h);
      }
      function p(i) {
        l.code((0, t._)`delete ${g}[${i}]`);
      }
      function _(i) {
        if (E.removeAdditional === "all" || E.removeAdditional && d === !1) {
          p(i);
          return;
        }
        if (d === !1) {
          a.setParams({ additionalProperty: i }), a.error(), b || l.break();
          return;
        }
        if (typeof d == "object" && !(0, n.alwaysValidSchema)(S, d)) {
          const h = l.name("valid");
          E.removeAdditional === "failing" ? (s(i, h, !1), l.if((0, t.not)(h), () => {
            a.reset(), p(i);
          })) : (s(i, h), b || l.if((0, t.not)(h), () => l.break()));
        }
      }
      function s(i, h, C) {
        const k = {
          keyword: "additionalProperties",
          dataProp: i,
          dataPropType: n.Type.Str
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
var _t = {}, Mn;
function As() {
  if (Mn) return _t;
  Mn = 1, Object.defineProperty(_t, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Yt(), t = /* @__PURE__ */ _e(), o = /* @__PURE__ */ X(), n = /* @__PURE__ */ Ro(), u = {
    keyword: "properties",
    type: "object",
    schemaType: "object",
    code(r) {
      const { gen: a, schema: l, parentSchema: d, data: v, it: g } = r;
      g.opts.removeAdditional === "all" && d.additionalProperties === void 0 && n.default.code(new e.KeywordCxt(g, n.default, "additionalProperties"));
      const w = (0, t.allSchemaProperties)(l);
      for (const f of w)
        g.definedProperties.add(f);
      g.opts.unevaluated && w.length && g.props !== !0 && (g.props = o.mergeEvaluated.props(a, (0, o.toHash)(w), g.props));
      const S = w.filter((f) => !(0, o.alwaysValidSchema)(g, l[f]));
      if (S.length === 0)
        return;
      const b = a.name("valid");
      for (const f of S)
        E(f) ? $(f) : (a.if((0, t.propertyInData)(a, v, f, g.opts.ownProperties)), $(f), g.allErrors || a.else().var(b, !0), a.endIf()), r.it.definedProperties.add(f), r.ok(b);
      function E(f) {
        return g.opts.useDefaults && !g.compositeRule && l[f].default !== void 0;
      }
      function $(f) {
        r.subschema({
          keyword: "properties",
          schemaProp: f,
          dataProp: f
        }, b);
      }
    }
  };
  return _t.default = u, _t;
}
var bt = {}, In;
function Os() {
  if (In) return bt;
  In = 1, Object.defineProperty(bt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ _e(), t = /* @__PURE__ */ G(), o = /* @__PURE__ */ X(), n = /* @__PURE__ */ X(), u = {
    keyword: "patternProperties",
    type: "object",
    schemaType: "object",
    code(r) {
      const { gen: a, schema: l, data: d, parentSchema: v, it: g } = r, { opts: w } = g, S = (0, e.allSchemaProperties)(l), b = S.filter((_) => (0, o.alwaysValidSchema)(g, l[_]));
      if (S.length === 0 || b.length === S.length && (!g.opts.unevaluated || g.props === !0))
        return;
      const E = w.strictSchema && !w.allowMatchingProperties && v.properties, $ = a.name("valid");
      g.props !== !0 && !(g.props instanceof t.Name) && (g.props = (0, n.evaluatedPropsToName)(a, g.props));
      const { props: f } = g;
      y();
      function y() {
        for (const _ of S)
          E && c(_), g.allErrors ? p(_) : (a.var($, !0), p(_), a.if($));
      }
      function c(_) {
        for (const s in E)
          new RegExp(_).test(s) && (0, o.checkStrictMode)(g, `property ${s} matches pattern ${_} (use allowMatchingProperties)`);
      }
      function p(_) {
        a.forIn("key", d, (s) => {
          a.if((0, t._)`${(0, e.usePattern)(r, _)}.test(${s})`, () => {
            const i = b.includes(_);
            i || r.subschema({
              keyword: "patternProperties",
              schemaProp: _,
              dataProp: s,
              dataPropType: n.Type.Str
            }, $), g.opts.unevaluated && f !== !0 ? a.assign((0, t._)`${f}[${s}]`, !0) : !i && !g.allErrors && a.if((0, t.not)($), () => a.break());
          });
        });
      }
    }
  };
  return bt.default = u, bt;
}
var wt = {}, qn;
function Ts() {
  if (qn) return wt;
  qn = 1, Object.defineProperty(wt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ X(), t = {
    keyword: "not",
    schemaType: ["object", "boolean"],
    trackErrors: !0,
    code(o) {
      const { gen: n, schema: u, it: r } = o;
      if ((0, e.alwaysValidSchema)(r, u)) {
        o.fail();
        return;
      }
      const a = n.name("valid");
      o.subschema({
        keyword: "not",
        compositeRule: !0,
        createErrors: !1,
        allErrors: !1
      }, a), o.failResult(a, () => o.reset(), () => o.error());
    },
    error: { message: "must NOT be valid" }
  };
  return wt.default = t, wt;
}
var St = {}, Dn;
function Ms() {
  if (Dn) return St;
  Dn = 1, Object.defineProperty(St, "__esModule", { value: !0 });
  const t = {
    keyword: "anyOf",
    schemaType: "array",
    trackErrors: !0,
    code: (/* @__PURE__ */ _e()).validateUnion,
    error: { message: "must match a schema in anyOf" }
  };
  return St.default = t, St;
}
var Et = {}, xn;
function Is() {
  if (xn) return Et;
  xn = 1, Object.defineProperty(Et, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), n = {
    keyword: "oneOf",
    schemaType: "array",
    trackErrors: !0,
    error: {
      message: "must match exactly one schema in oneOf",
      params: ({ params: u }) => (0, e._)`{passingSchemas: ${u.passing}}`
    },
    code(u) {
      const { gen: r, schema: a, parentSchema: l, it: d } = u;
      if (!Array.isArray(a))
        throw new Error("ajv implementation error");
      if (d.opts.discriminator && l.discriminator)
        return;
      const v = a, g = r.let("valid", !1), w = r.let("passing", null), S = r.name("_valid");
      u.setParams({ passing: w }), r.block(b), u.result(g, () => u.reset(), () => u.error(!0));
      function b() {
        v.forEach((E, $) => {
          let f;
          (0, t.alwaysValidSchema)(d, E) ? r.var(S, !0) : f = u.subschema({
            keyword: "oneOf",
            schemaProp: $,
            compositeRule: !0
          }, S), $ > 0 && r.if((0, e._)`${S} && ${g}`).assign(g, !1).assign(w, (0, e._)`[${w}, ${$}]`).else(), r.if(S, () => {
            r.assign(g, !0), r.assign(w, $), f && u.mergeEvaluated(f, e.Name);
          });
        });
      }
    }
  };
  return Et.default = n, Et;
}
var Pt = {}, zn;
function qs() {
  if (zn) return Pt;
  zn = 1, Object.defineProperty(Pt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ X(), t = {
    keyword: "allOf",
    schemaType: "array",
    code(o) {
      const { gen: n, schema: u, it: r } = o;
      if (!Array.isArray(u))
        throw new Error("ajv implementation error");
      const a = n.name("valid");
      u.forEach((l, d) => {
        if ((0, e.alwaysValidSchema)(r, l))
          return;
        const v = o.subschema({ keyword: "allOf", schemaProp: d }, a);
        o.ok(a), o.mergeEvaluated(v);
      });
    }
  };
  return Pt.default = t, Pt;
}
var kt = {}, Vn;
function Ds() {
  if (Vn) return kt;
  Vn = 1, Object.defineProperty(kt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), n = {
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
      const v = u(d, "then"), g = u(d, "else");
      if (!v && !g)
        return;
      const w = a.let("valid", !0), S = a.name("_valid");
      if (b(), r.reset(), v && g) {
        const $ = a.let("ifClause");
        r.setParams({ ifClause: $ }), a.if(S, E("then", $), E("else", $));
      } else v ? a.if(S, E("then")) : a.if((0, e.not)(S), E("else"));
      r.pass(w, () => r.error(!0));
      function b() {
        const $ = r.subschema({
          keyword: "if",
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }, S);
        r.mergeEvaluated($);
      }
      function E($, f) {
        return () => {
          const y = r.subschema({ keyword: $ }, S);
          a.assign(w, S), r.mergeValidEvaluated(y, w), f ? a.assign(f, (0, e._)`${$}`) : r.setParams({ ifClause: $ });
        };
      }
    }
  };
  function u(r, a) {
    const l = r.schema[a];
    return l !== void 0 && !(0, t.alwaysValidSchema)(r, l);
  }
  return kt.default = n, kt;
}
var Ct = {}, Fn;
function xs() {
  if (Fn) return Ct;
  Fn = 1, Object.defineProperty(Ct, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ X(), t = {
    keyword: ["then", "else"],
    schemaType: ["object", "boolean"],
    code({ keyword: o, parentSchema: n, it: u }) {
      n.if === void 0 && (0, e.checkStrictMode)(u, `"${o}" without "if" is ignored`);
    }
  };
  return Ct.default = t, Ct;
}
var Ln;
function zs() {
  if (Ln) return ht;
  Ln = 1, Object.defineProperty(ht, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ko(), t = /* @__PURE__ */ Cs(), o = /* @__PURE__ */ Co(), n = /* @__PURE__ */ Rs(), u = /* @__PURE__ */ Ns(), r = /* @__PURE__ */ Pr(), a = /* @__PURE__ */ js(), l = /* @__PURE__ */ Ro(), d = /* @__PURE__ */ As(), v = /* @__PURE__ */ Os(), g = /* @__PURE__ */ Ts(), w = /* @__PURE__ */ Ms(), S = /* @__PURE__ */ Is(), b = /* @__PURE__ */ qs(), E = /* @__PURE__ */ Ds(), $ = /* @__PURE__ */ xs();
  function f(y = !1) {
    const c = [
      // any
      g.default,
      w.default,
      S.default,
      b.default,
      E.default,
      $.default,
      // object
      a.default,
      l.default,
      r.default,
      d.default,
      v.default
    ];
    return y ? c.push(t.default, n.default) : c.push(e.default, o.default), c.push(u.default), c;
  }
  return ht.default = f, ht;
}
var Rt = {}, Ie = {}, Bn;
function No() {
  if (Bn) return Ie;
  Bn = 1, Object.defineProperty(Ie, "__esModule", { value: !0 }), Ie.dynamicAnchor = void 0;
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ $e(), o = /* @__PURE__ */ Zt(), n = /* @__PURE__ */ Sr(), u = {
    keyword: "$dynamicAnchor",
    schemaType: "string",
    code: (l) => r(l, l.schema)
  };
  function r(l, d) {
    const { gen: v, it: g } = l;
    g.schemaEnv.root.dynamicAnchors[d] = !0;
    const w = (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(d)}`, S = g.errSchemaPath === "#" ? g.validateName : a(l);
    v.if((0, e._)`!${w}`, () => v.assign(w, S));
  }
  Ie.dynamicAnchor = r;
  function a(l) {
    const { schemaEnv: d, schema: v, self: g } = l.it, { root: w, baseId: S, localRefs: b, meta: E } = d.root, { schemaId: $ } = g.opts, f = new o.SchemaEnv({ schema: v, schemaId: $, root: w, baseId: S, localRefs: b, meta: E });
    return o.compileSchema.call(g, f), (0, n.getValidate)(l, f);
  }
  return Ie.default = u, Ie;
}
var qe = {}, Kn;
function jo() {
  if (Kn) return qe;
  Kn = 1, Object.defineProperty(qe, "__esModule", { value: !0 }), qe.dynamicRef = void 0;
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ $e(), o = /* @__PURE__ */ Sr(), n = {
    keyword: "$dynamicRef",
    schemaType: "string",
    code: (r) => u(r, r.schema)
  };
  function u(r, a) {
    const { gen: l, keyword: d, it: v } = r;
    if (a[0] !== "#")
      throw new Error(`"${d}" only supports hash fragment reference`);
    const g = a.slice(1);
    if (v.allErrors)
      w();
    else {
      const b = l.let("valid", !1);
      w(b), r.ok(b);
    }
    function w(b) {
      if (v.schemaEnv.root.dynamicAnchors[g]) {
        const E = l.let("_v", (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(g)}`);
        l.if(E, S(E, b), S(v.validateName, b));
      } else
        S(v.validateName, b)();
    }
    function S(b, E) {
      return E ? () => l.block(() => {
        (0, o.callRef)(r, b), l.let(E, !0);
      }) : () => (0, o.callRef)(r, b);
    }
  }
  return qe.dynamicRef = u, qe.default = n, qe;
}
var Nt = {}, Un;
function Vs() {
  if (Un) return Nt;
  Un = 1, Object.defineProperty(Nt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ No(), t = /* @__PURE__ */ X(), o = {
    keyword: "$recursiveAnchor",
    schemaType: "boolean",
    code(n) {
      n.schema ? (0, e.dynamicAnchor)(n, "") : (0, t.checkStrictMode)(n.it, "$recursiveAnchor: false is ignored");
    }
  };
  return Nt.default = o, Nt;
}
var jt = {}, Hn;
function Fs() {
  if (Hn) return jt;
  Hn = 1, Object.defineProperty(jt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ jo(), t = {
    keyword: "$recursiveRef",
    schemaType: "string",
    code: (o) => (0, e.dynamicRef)(o, o.schema)
  };
  return jt.default = t, jt;
}
var Gn;
function Ls() {
  if (Gn) return Rt;
  Gn = 1, Object.defineProperty(Rt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ No(), t = /* @__PURE__ */ jo(), o = /* @__PURE__ */ Vs(), n = /* @__PURE__ */ Fs(), u = [e.default, t.default, o.default, n.default];
  return Rt.default = u, Rt;
}
var At = {}, Ot = {}, Jn;
function Bs() {
  if (Jn) return Ot;
  Jn = 1, Object.defineProperty(Ot, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Pr(), t = {
    keyword: "dependentRequired",
    type: "object",
    schemaType: "object",
    error: e.error,
    code: (o) => (0, e.validatePropertyDeps)(o)
  };
  return Ot.default = t, Ot;
}
var Tt = {}, Wn;
function Ks() {
  if (Wn) return Tt;
  Wn = 1, Object.defineProperty(Tt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Pr(), t = {
    keyword: "dependentSchemas",
    type: "object",
    schemaType: "object",
    code: (o) => (0, e.validateSchemaDeps)(o)
  };
  return Tt.default = t, Tt;
}
var Mt = {}, Yn;
function Us() {
  if (Yn) return Mt;
  Yn = 1, Object.defineProperty(Mt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ X(), t = {
    keyword: ["maxContains", "minContains"],
    type: "array",
    schemaType: "number",
    code({ keyword: o, parentSchema: n, it: u }) {
      n.contains === void 0 && (0, e.checkStrictMode)(u, `"${o}" without "contains" is ignored`);
    }
  };
  return Mt.default = t, Mt;
}
var Xn;
function Hs() {
  if (Xn) return At;
  Xn = 1, Object.defineProperty(At, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Bs(), t = /* @__PURE__ */ Ks(), o = /* @__PURE__ */ Us(), n = [e.default, t.default, o.default];
  return At.default = n, At;
}
var It = {}, qt = {}, Zn;
function Gs() {
  if (Zn) return qt;
  Zn = 1, Object.defineProperty(qt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), o = /* @__PURE__ */ $e(), u = {
    keyword: "unevaluatedProperties",
    type: "object",
    schemaType: ["boolean", "object"],
    trackErrors: !0,
    error: {
      message: "must NOT have unevaluated properties",
      params: ({ params: r }) => (0, e._)`{unevaluatedProperty: ${r.unevaluatedProperty}}`
    },
    code(r) {
      const { gen: a, schema: l, data: d, errsCount: v, it: g } = r;
      if (!v)
        throw new Error("ajv implementation error");
      const { allErrors: w, props: S } = g;
      S instanceof e.Name ? a.if((0, e._)`${S} !== true`, () => a.forIn("key", d, (f) => a.if(E(S, f), () => b(f)))) : S !== !0 && a.forIn("key", d, (f) => S === void 0 ? b(f) : a.if($(S, f), () => b(f))), g.props = !0, r.ok((0, e._)`${v} === ${o.default.errors}`);
      function b(f) {
        if (l === !1) {
          r.setParams({ unevaluatedProperty: f }), r.error(), w || a.break();
          return;
        }
        if (!(0, t.alwaysValidSchema)(g, l)) {
          const y = a.name("valid");
          r.subschema({
            keyword: "unevaluatedProperties",
            dataProp: f,
            dataPropType: t.Type.Str
          }, y), w || a.if((0, e.not)(y), () => a.break());
        }
      }
      function E(f, y) {
        return (0, e._)`!${f} || !${f}[${y}]`;
      }
      function $(f, y) {
        const c = [];
        for (const p in f)
          f[p] === !0 && c.push((0, e._)`${y} !== ${p}`);
        return (0, e.and)(...c);
      }
    }
  };
  return qt.default = u, qt;
}
var Dt = {}, Qn;
function Js() {
  if (Qn) return Dt;
  Qn = 1, Object.defineProperty(Dt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), n = {
    keyword: "unevaluatedItems",
    type: "array",
    schemaType: ["boolean", "object"],
    error: {
      message: ({ params: { len: u } }) => (0, e.str)`must NOT have more than ${u} items`,
      params: ({ params: { len: u } }) => (0, e._)`{limit: ${u}}`
    },
    code(u) {
      const { gen: r, schema: a, data: l, it: d } = u, v = d.items || 0;
      if (v === !0)
        return;
      const g = r.const("len", (0, e._)`${l}.length`);
      if (a === !1)
        u.setParams({ len: v }), u.fail((0, e._)`${g} > ${v}`);
      else if (typeof a == "object" && !(0, t.alwaysValidSchema)(d, a)) {
        const S = r.var("valid", (0, e._)`${g} <= ${v}`);
        r.if((0, e.not)(S), () => w(S, v)), u.ok(S);
      }
      d.items = !0;
      function w(S, b) {
        r.forRange("i", b, g, (E) => {
          u.subschema({ keyword: "unevaluatedItems", dataProp: E, dataPropType: t.Type.Num }, S), d.allErrors || r.if((0, e.not)(S), () => r.break());
        });
      }
    }
  };
  return Dt.default = n, Dt;
}
var eo;
function Ws() {
  if (eo) return It;
  eo = 1, Object.defineProperty(It, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Gs(), t = /* @__PURE__ */ Js(), o = [e.default, t.default];
  return It.default = o, It;
}
var xt = {}, zt = {}, to;
function Ys() {
  if (to) return zt;
  to = 1, Object.defineProperty(zt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), o = {
    keyword: "format",
    type: ["number", "string"],
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: n }) => (0, e.str)`must match format "${n}"`,
      params: ({ schemaCode: n }) => (0, e._)`{format: ${n}}`
    },
    code(n, u) {
      const { gen: r, data: a, $data: l, schema: d, schemaCode: v, it: g } = n, { opts: w, errSchemaPath: S, schemaEnv: b, self: E } = g;
      if (!w.validateFormats)
        return;
      l ? $() : f();
      function $() {
        const y = r.scopeValue("formats", {
          ref: E.formats,
          code: w.code.formats
        }), c = r.const("fDef", (0, e._)`${y}[${v}]`), p = r.let("fType"), _ = r.let("format");
        r.if((0, e._)`typeof ${c} == "object" && !(${c} instanceof RegExp)`, () => r.assign(p, (0, e._)`${c}.type || "string"`).assign(_, (0, e._)`${c}.validate`), () => r.assign(p, (0, e._)`"string"`).assign(_, c)), n.fail$data((0, e.or)(s(), i()));
        function s() {
          return w.strictSchema === !1 ? e.nil : (0, e._)`${v} && !${_}`;
        }
        function i() {
          const h = b.$async ? (0, e._)`(${c}.async ? await ${_}(${a}) : ${_}(${a}))` : (0, e._)`${_}(${a})`, C = (0, e._)`(typeof ${_} == "function" ? ${h} : ${_}.test(${a}))`;
          return (0, e._)`${_} && ${_} !== true && ${p} === ${u} && !${C}`;
        }
      }
      function f() {
        const y = E.formats[d];
        if (!y) {
          s();
          return;
        }
        if (y === !0)
          return;
        const [c, p, _] = i(y);
        c === u && n.pass(h());
        function s() {
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
          return typeof p == "function" ? (0, e._)`${_}(${a})` : (0, e._)`${_}.test(${a})`;
        }
      }
    }
  };
  return zt.default = o, zt;
}
var ro;
function Xs() {
  if (ro) return xt;
  ro = 1, Object.defineProperty(xt, "__esModule", { value: !0 });
  const t = [(/* @__PURE__ */ Ys()).default];
  return xt.default = t, xt;
}
var Ne = {}, no;
function Zs() {
  return no || (no = 1, Object.defineProperty(Ne, "__esModule", { value: !0 }), Ne.contentVocabulary = Ne.metadataVocabulary = void 0, Ne.metadataVocabulary = [
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
var oo;
function Qs() {
  if (oo) return Ze;
  oo = 1, Object.defineProperty(Ze, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ hs(), t = /* @__PURE__ */ ks(), o = /* @__PURE__ */ zs(), n = /* @__PURE__ */ Ls(), u = /* @__PURE__ */ Hs(), r = /* @__PURE__ */ Ws(), a = /* @__PURE__ */ Xs(), l = /* @__PURE__ */ Zs(), d = [
    n.default,
    e.default,
    t.default,
    (0, o.default)(!0),
    a.default,
    l.metadataVocabulary,
    l.contentVocabulary,
    u.default,
    r.default
  ];
  return Ze.default = d, Ze;
}
var Vt = {}, Ke = {}, so;
function ea() {
  if (so) return Ke;
  so = 1, Object.defineProperty(Ke, "__esModule", { value: !0 }), Ke.DiscrError = void 0;
  var e;
  return (function(t) {
    t.Tag = "tag", t.Mapping = "mapping";
  })(e || (Ke.DiscrError = e = {})), Ke;
}
var ao;
function ta() {
  if (ao) return Vt;
  ao = 1, Object.defineProperty(Vt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ ea(), o = /* @__PURE__ */ Zt(), n = /* @__PURE__ */ Xt(), u = /* @__PURE__ */ X(), a = {
    keyword: "discriminator",
    type: "object",
    schemaType: "object",
    error: {
      message: ({ params: { discrError: l, tagName: d } }) => l === t.DiscrError.Tag ? `tag "${d}" must be string` : `value of tag "${d}" must be in oneOf`,
      params: ({ params: { discrError: l, tag: d, tagName: v } }) => (0, e._)`{error: ${l}, tag: ${v}, tagValue: ${d}}`
    },
    code(l) {
      const { gen: d, data: v, schema: g, parentSchema: w, it: S } = l, { oneOf: b } = w;
      if (!S.opts.discriminator)
        throw new Error("discriminator: requires discriminator option");
      const E = g.propertyName;
      if (typeof E != "string")
        throw new Error("discriminator: requires propertyName");
      if (g.mapping)
        throw new Error("discriminator: mapping is not supported");
      if (!b)
        throw new Error("discriminator: requires oneOf keyword");
      const $ = d.let("valid", !1), f = d.const("tag", (0, e._)`${v}${(0, e.getProperty)(E)}`);
      d.if((0, e._)`typeof ${f} == "string"`, () => y(), () => l.error(!1, { discrError: t.DiscrError.Tag, tag: f, tagName: E })), l.ok($);
      function y() {
        const _ = p();
        d.if(!1);
        for (const s in _)
          d.elseIf((0, e._)`${f} === ${s}`), d.assign($, c(_[s]));
        d.else(), l.error(!1, { discrError: t.DiscrError.Mapping, tag: f, tagName: E }), d.endIf();
      }
      function c(_) {
        const s = d.name("valid"), i = l.subschema({ keyword: "oneOf", schemaProp: _ }, s);
        return l.mergeEvaluated(i, e.Name), s;
      }
      function p() {
        var _;
        const s = {}, i = C(w);
        let h = !0;
        for (let M = 0; M < b.length; M++) {
          let T = b[M];
          if (T?.$ref && !(0, u.schemaHasRulesButRef)(T, S.self.RULES)) {
            const K = T.$ref;
            if (T = o.resolveRef.call(S.self, S.schemaEnv.root, S.baseId, K), T instanceof o.SchemaEnv && (T = T.schema), T === void 0)
              throw new n.default(S.opts.uriResolver, S.baseId, K);
          }
          const q = (_ = T?.properties) === null || _ === void 0 ? void 0 : _[E];
          if (typeof q != "object")
            throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${E}"`);
          h = h && (i || C(T)), k(q, M);
        }
        if (!h)
          throw new Error(`discriminator: "${E}" must be required`);
        return s;
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
          if (typeof M != "string" || M in s)
            throw new Error(`discriminator: "${E}" values must be unique strings`);
          s[M] = T;
        }
      }
    }
  };
  return Vt.default = a, Vt;
}
var Ft = {};
const ra = "https://json-schema.org/draft/2020-12/schema", na = "https://json-schema.org/draft/2020-12/schema", oa = { "https://json-schema.org/draft/2020-12/vocab/core": !0, "https://json-schema.org/draft/2020-12/vocab/applicator": !0, "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0, "https://json-schema.org/draft/2020-12/vocab/validation": !0, "https://json-schema.org/draft/2020-12/vocab/meta-data": !0, "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0, "https://json-schema.org/draft/2020-12/vocab/content": !0 }, sa = "meta", aa = "Core and Validation specifications meta-schema", ia = [{ $ref: "meta/core" }, { $ref: "meta/applicator" }, { $ref: "meta/unevaluated" }, { $ref: "meta/validation" }, { $ref: "meta/meta-data" }, { $ref: "meta/format-annotation" }, { $ref: "meta/content" }], ca = ["object", "boolean"], la = "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.", da = { definitions: { $comment: '"definitions" has been replaced by "$defs".', type: "object", additionalProperties: { $dynamicRef: "#meta" }, deprecated: !0, default: {} }, dependencies: { $comment: '"dependencies" has been split and replaced by "dependentSchemas" and "dependentRequired" in order to serve their differing semantics.', type: "object", additionalProperties: { anyOf: [{ $dynamicRef: "#meta" }, { $ref: "meta/validation#/$defs/stringArray" }] }, deprecated: !0, default: {} }, $recursiveAnchor: { $comment: '"$recursiveAnchor" has been replaced by "$dynamicAnchor".', $ref: "meta/core#/$defs/anchorString", deprecated: !0 }, $recursiveRef: { $comment: '"$recursiveRef" has been replaced by "$dynamicRef".', $ref: "meta/core#/$defs/uriReferenceString", deprecated: !0 } }, ua = {
  $schema: ra,
  $id: na,
  $vocabulary: oa,
  $dynamicAnchor: sa,
  title: aa,
  allOf: ia,
  type: ca,
  $comment: la,
  properties: da
}, fa = "https://json-schema.org/draft/2020-12/schema", pa = "https://json-schema.org/draft/2020-12/meta/applicator", ha = { "https://json-schema.org/draft/2020-12/vocab/applicator": !0 }, ma = "meta", ya = "Applicator vocabulary meta-schema", ga = ["object", "boolean"], va = { prefixItems: { $ref: "#/$defs/schemaArray" }, items: { $dynamicRef: "#meta" }, contains: { $dynamicRef: "#meta" }, additionalProperties: { $dynamicRef: "#meta" }, properties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, propertyNames: { format: "regex" }, default: {} }, dependentSchemas: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, propertyNames: { $dynamicRef: "#meta" }, if: { $dynamicRef: "#meta" }, then: { $dynamicRef: "#meta" }, else: { $dynamicRef: "#meta" }, allOf: { $ref: "#/$defs/schemaArray" }, anyOf: { $ref: "#/$defs/schemaArray" }, oneOf: { $ref: "#/$defs/schemaArray" }, not: { $dynamicRef: "#meta" } }, $a = { schemaArray: { type: "array", minItems: 1, items: { $dynamicRef: "#meta" } } }, _a = {
  $schema: fa,
  $id: pa,
  $vocabulary: ha,
  $dynamicAnchor: ma,
  title: ya,
  type: ga,
  properties: va,
  $defs: $a
}, ba = "https://json-schema.org/draft/2020-12/schema", wa = "https://json-schema.org/draft/2020-12/meta/unevaluated", Sa = { "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0 }, Ea = "meta", Pa = "Unevaluated applicator vocabulary meta-schema", ka = ["object", "boolean"], Ca = { unevaluatedItems: { $dynamicRef: "#meta" }, unevaluatedProperties: { $dynamicRef: "#meta" } }, Ra = {
  $schema: ba,
  $id: wa,
  $vocabulary: Sa,
  $dynamicAnchor: Ea,
  title: Pa,
  type: ka,
  properties: Ca
}, Na = "https://json-schema.org/draft/2020-12/schema", ja = "https://json-schema.org/draft/2020-12/meta/content", Aa = { "https://json-schema.org/draft/2020-12/vocab/content": !0 }, Oa = "meta", Ta = "Content vocabulary meta-schema", Ma = ["object", "boolean"], Ia = { contentEncoding: { type: "string" }, contentMediaType: { type: "string" }, contentSchema: { $dynamicRef: "#meta" } }, qa = {
  $schema: Na,
  $id: ja,
  $vocabulary: Aa,
  $dynamicAnchor: Oa,
  title: Ta,
  type: Ma,
  properties: Ia
}, Da = "https://json-schema.org/draft/2020-12/schema", xa = "https://json-schema.org/draft/2020-12/meta/core", za = { "https://json-schema.org/draft/2020-12/vocab/core": !0 }, Va = "meta", Fa = "Core vocabulary meta-schema", La = ["object", "boolean"], Ba = { $id: { $ref: "#/$defs/uriReferenceString", $comment: "Non-empty fragments not allowed.", pattern: "^[^#]*#?$" }, $schema: { $ref: "#/$defs/uriString" }, $ref: { $ref: "#/$defs/uriReferenceString" }, $anchor: { $ref: "#/$defs/anchorString" }, $dynamicRef: { $ref: "#/$defs/uriReferenceString" }, $dynamicAnchor: { $ref: "#/$defs/anchorString" }, $vocabulary: { type: "object", propertyNames: { $ref: "#/$defs/uriString" }, additionalProperties: { type: "boolean" } }, $comment: { type: "string" }, $defs: { type: "object", additionalProperties: { $dynamicRef: "#meta" } } }, Ka = { anchorString: { type: "string", pattern: "^[A-Za-z_][-A-Za-z0-9._]*$" }, uriString: { type: "string", format: "uri" }, uriReferenceString: { type: "string", format: "uri-reference" } }, Ua = {
  $schema: Da,
  $id: xa,
  $vocabulary: za,
  $dynamicAnchor: Va,
  title: Fa,
  type: La,
  properties: Ba,
  $defs: Ka
}, Ha = "https://json-schema.org/draft/2020-12/schema", Ga = "https://json-schema.org/draft/2020-12/meta/format-annotation", Ja = { "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0 }, Wa = "meta", Ya = "Format vocabulary meta-schema for annotation results", Xa = ["object", "boolean"], Za = { format: { type: "string" } }, Qa = {
  $schema: Ha,
  $id: Ga,
  $vocabulary: Ja,
  $dynamicAnchor: Wa,
  title: Ya,
  type: Xa,
  properties: Za
}, ei = "https://json-schema.org/draft/2020-12/schema", ti = "https://json-schema.org/draft/2020-12/meta/meta-data", ri = { "https://json-schema.org/draft/2020-12/vocab/meta-data": !0 }, ni = "meta", oi = "Meta-data vocabulary meta-schema", si = ["object", "boolean"], ai = { title: { type: "string" }, description: { type: "string" }, default: !0, deprecated: { type: "boolean", default: !1 }, readOnly: { type: "boolean", default: !1 }, writeOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 } }, ii = {
  $schema: ei,
  $id: ti,
  $vocabulary: ri,
  $dynamicAnchor: ni,
  title: oi,
  type: si,
  properties: ai
}, ci = "https://json-schema.org/draft/2020-12/schema", li = "https://json-schema.org/draft/2020-12/meta/validation", di = { "https://json-schema.org/draft/2020-12/vocab/validation": !0 }, ui = "meta", fi = "Validation vocabulary meta-schema", pi = ["object", "boolean"], hi = { type: { anyOf: [{ $ref: "#/$defs/simpleTypes" }, { type: "array", items: { $ref: "#/$defs/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, const: !0, enum: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/$defs/nonNegativeInteger" }, minLength: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, maxItems: { $ref: "#/$defs/nonNegativeInteger" }, minItems: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, maxContains: { $ref: "#/$defs/nonNegativeInteger" }, minContains: { $ref: "#/$defs/nonNegativeInteger", default: 1 }, maxProperties: { $ref: "#/$defs/nonNegativeInteger" }, minProperties: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, required: { $ref: "#/$defs/stringArray" }, dependentRequired: { type: "object", additionalProperties: { $ref: "#/$defs/stringArray" } } }, mi = { nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { $ref: "#/$defs/nonNegativeInteger", default: 0 }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, yi = {
  $schema: ci,
  $id: li,
  $vocabulary: di,
  $dynamicAnchor: ui,
  title: fi,
  type: pi,
  properties: hi,
  $defs: mi
};
var io;
function gi() {
  if (io) return Ft;
  io = 1, Object.defineProperty(Ft, "__esModule", { value: !0 });
  const e = ua, t = _a, o = Ra, n = qa, u = Ua, r = Qa, a = ii, l = yi, d = ["/properties"];
  function v(g) {
    return [
      e,
      t,
      o,
      n,
      u,
      w(this, r),
      a,
      w(this, l)
    ].forEach((S) => this.addMetaSchema(S, void 0, !1)), this;
    function w(S, b) {
      return g ? S.$dataMetaSchema(b, d) : b;
    }
  }
  return Ft.default = v, Ft;
}
var co;
function vi() {
  return co || (co = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv2020 = void 0;
    const o = /* @__PURE__ */ fs(), n = /* @__PURE__ */ Qs(), u = /* @__PURE__ */ ta(), r = /* @__PURE__ */ gi(), a = "https://json-schema.org/draft/2020-12/schema";
    class l extends o.default {
      constructor(b = {}) {
        super({
          ...b,
          dynamicRef: !0,
          next: !0,
          unevaluated: !0
        });
      }
      _addVocabularies() {
        super._addVocabularies(), n.default.forEach((b) => this.addVocabulary(b)), this.opts.discriminator && this.addKeyword(u.default);
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
    var d = /* @__PURE__ */ Yt();
    Object.defineProperty(t, "KeywordCxt", { enumerable: !0, get: function() {
      return d.KeywordCxt;
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
    var g = /* @__PURE__ */ wr();
    Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
      return g.default;
    } });
    var w = /* @__PURE__ */ Xt();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return w.default;
    } });
  })(Ge, Ge.exports)), Ge.exports;
}
var $i = /* @__PURE__ */ vi();
const _i = /* @__PURE__ */ Yo($i), bi = "https://json-schema.org/draft/2020-12/schema", wi = "https://raw.githubusercontent.com/omsf-eco-infra/gufe-viz/main/schema/gufe-viz.schema.json", Si = "gufe-viz payload", Ei = "Python-to-TypeScript contract bridge for gufe visualizations. Source of truth both languages are downstream of it. This schema is not strictly versioned or published as it is only internally consumed by this codebase. Schema description: one schema object per gufe class: every $def named *Viz is the visualization form of exactly one GufeTokenizable, it carries that object's `gufe-key`. Every reference from one gufe object to another is that object's gufe key, and the objects themselves live in the `registry` on the root payload. So a ligand network's nodes are keys, a chemical system's components and a transformation's protocol are keys and each one resolves to a complete, drawable object. An alchemical network whose forty systems share one protein carries that PDB once and points at it forty times, and the browser can still drill into it, because what it points at is a whole ProteinComponentViz. This is a single-shot dump rather than a conversation with a server, so the registry travels with the payload.", Pi = [{ $ref: "#/$defs/SmallMoleculeComponentViz" }, { $ref: "#/$defs/ProteinComponentViz" }, { $ref: "#/$defs/SolvatedPDBComponentViz" }, { $ref: "#/$defs/ProteinMembraneComponentViz" }, { $ref: "#/$defs/SolventComponentViz" }, { $ref: "#/$defs/UnknownComponentViz" }, { $ref: "#/$defs/ProtocolViz" }, { $ref: "#/$defs/LigandAtomMappingViz" }, { $ref: "#/$defs/LigandNetworkViz" }, { $ref: "#/$defs/ChemicalSystemViz" }, { $ref: "#/$defs/TransformationViz" }, { $ref: "#/$defs/AlchemicalNetworkViz" }], ki = /* @__PURE__ */ JSON.parse('{"GufeKey":{"title":"GufeKey","description":"A gufe key: the identity of a GufeTokenizable, of the form \'ClassName-<hex digest>\'. It is deterministic and repeatable within a software environment. Only its non-emptiness is checked","type":"string","minLength":1},"ComponentKey":{"title":"ComponentKey","description":"A gufe key naming a ComponentViz in the registry. Identical to GufeKey at validation time: JSON Schema has no way to say \'this string is the gufe-key of an entry in that array, and that entry has this type\', because that is a join across two parts of the document. What the name buys is that the referent\'s type is stated in the contract and carried into the generated TypeScript, instead of living only in a test and a view.","$ref":"#/$defs/GufeKey"},"SmallMoleculeComponentKey":{"title":"SmallMoleculeComponentKey","description":"A gufe key naming a SmallMoleculeComponentViz in the registry. Resolving it yields the whole molecule, SDF included. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ChemicalSystemKey":{"title":"ChemicalSystemKey","description":"A gufe key naming a ChemicalSystemViz in the registry. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ProtocolKey":{"title":"ProtocolKey","description":"A gufe key naming a ProtocolViz in the registry. Every transformation of a network usually names the same one. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"Registry":{"title":"Registry","description":"The pool of gufe objects this payload refers to by key, each a complete payload object in its own right. Entries are unique by `gufe-key` and sorted by (type, gufe-key) so a committed fixture is byte-stable. JSON Schema cannot express \'unique by a property\' or \'every reference resolves\', so both are covered by tests on the Python side and degraded over by the views.","type":"array","items":{"oneOf":[{"$ref":"#/$defs/ComponentViz"},{"$ref":"#/$defs/ProtocolViz"},{"$ref":"#/$defs/ChemicalSystemViz"}]}},"ComponentViz":{"title":"ComponentViz","description":"Any single chemical-system component","oneOf":[{"$ref":"#/$defs/SmallMoleculeComponentViz"},{"$ref":"#/$defs/ProteinComponentViz"},{"$ref":"#/$defs/SolvatedPDBComponentViz"},{"$ref":"#/$defs/ProteinMembraneComponentViz"},{"$ref":"#/$defs/SolventComponentViz"},{"$ref":"#/$defs/UnknownComponentViz"}]},"SmallMoleculeComponentViz":{"title":"SmallMoleculeComponentViz","description":"A small molecule, carried as a complete SDF record.","type":"object","properties":{"type":{"const":"SmallMoleculeComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"sdf":{"type":"string","minLength":1,"description":"Complete inline SDF record, including the conformer."},"smiles":{"type":"string"},"total_charge":{"type":"integer","description":"Net formal charge. Displayed, never recomputed from the SDF."}},"required":["type","gufe-key","name","sdf","smiles","total_charge"],"additionalProperties":false},"ProteinComponentViz":{"title":"ProteinComponentViz","description":"A protein, carried as a complete PDB record.","type":"object","properties":{"type":{"const":"ProteinComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolvatedPDBComponentViz":{"title":"SolvatedPDBComponentViz","description":"A protein with explicit solvent. A distinct type rather than a flag on ProteinComponentViz, because the discriminator is what a view dispatches on and the presence of waters changes what a sensible default representation is.","type":"object","properties":{"type":{"const":"SolvatedPDBComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation, including explicit solvent."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"ProteinMembraneComponentViz":{"title":"ProteinMembraneComponentViz","description":"A protein embedded in a membrane.","type":"object","properties":{"type":{"const":"ProteinMembraneComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation of the protein and membrane system."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolventComponentViz":{"title":"SolventComponentViz","description":"Bulk solvent settings. There is no structure to draw, so these are flat fields suitable for rendering as a settings card.","type":"object","properties":{"type":{"const":"SolventComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"smiles":{"type":"string","minLength":1},"positive_ion":{"type":"string"},"negative_ion":{"type":"string"},"neutralize":{"type":"boolean"},"ion_concentration":{"type":"string","description":"Display-form concentration with units, for example \'0.15 molar\'. A string rather than a number because the unit is part of the value and the view only ever prints it."}},"required":["type","gufe-key","name","smiles","positive_ion","negative_ion","neutralize","ion_concentration"],"additionalProperties":false},"UnknownComponentViz":{"title":"UnknownComponentViz","description":"The graceful fallback for a component type this build does not recognize. gufe supports custom Component subclasses, so meeting one is an expected outcome rather than an error, and the browser answers it with \'sorry, there is no visualization for this\'. This covers an unrecognized type only: a recognized component whose serializer fails is a bug, and raises in Python rather than arriving here wearing a disguise.","type":"object","properties":{"type":{"const":"UnknownComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The gufe class name, so the panel can say which type it could not draw."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ProtocolViz":{"title":"ProtocolViz","description":"A gufe Protocol, named. Every transformation in an alchemical network usually shares one, so this is a registry entry that many edges point at rather than a class name repeated per edge. Settings are deliberately absent for now: they are large, deeply nested, and nothing draws them yet, adding a `settings` field later is additive and breaks nothing.","type":"object","properties":{"type":{"const":"ProtocolViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The Protocol\'s class name, which is what identifies it to a reader, a Protocol has no name of its own, so `name` is usually empty."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ChemicalSystemViz":{"title":"ChemicalSystemViz","description":"A gufe ChemicalSystem: labels mapped to the gufe keys of its components.","type":"object","properties":{"type":{"const":"ChemicalSystemViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"components":{"type":"object","description":"ChemicalSystem labels mapped to the gufe keys of the components in the registry.","additionalProperties":{"$ref":"#/$defs/ComponentKey"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","components"],"additionalProperties":false},"AtomMapping":{"title":"AtomMapping","description":"Atom index correspondence from molecule A to molecule B, as a list of index pairs. A list rather than an object keyed by A\'s index, because JSON object keys can only be strings: keying by index would put decimal strings such as \'12\' in the payload and leave both languages casting them back to integers, and it is Python\'s dict-of-int shape only by resemblance. As a list, both indices stay integers, and \'an entry has a B index for every A index\' becomes a `required` the schema states rather than a convention a reader has to trust. Pairs are ordered by `index_A` so a committed fixture is byte-stable.","type":"array","items":{"type":"object","properties":{"index_A":{"type":"integer","minimum":0,"description":"An atom index in molecule A."},"index_B":{"type":"integer","minimum":0,"description":"The atom index in molecule B that it maps to."}},"required":["index_A","index_B"],"additionalProperties":false}},"Annotations":{"title":"Annotations","description":"Free-form mapping metadata. gufe puts nothing here by design and every mapper picks its own keys, so this is deliberately open. Values are whatever survived being made JSON-safe. Displayed but never interpreted, with the single exception of \'score\'.","type":"object"},"LigandAtomMappingViz":{"title":"LigandAtomMappingViz","description":"One atom mapping between two small molecules. This is also what an edge of a ligand network is because the two endpoints are gufe keys either way: standalone they resolve in this object\'s own registry, and in a network they resolve in the network\'s, where they are the same entries the nodes name. `componentA` and `componentB` are the molecules the two sides of `componentA_to_componentB` index into: an `index_A` is an atom of the SmallMoleculeComponentViz that `componentA` names, and an `index_B` an atom of `componentB`\'s.","type":"object","properties":{"type":{"const":"LigandAtomMappingViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"componentA":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentB":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentA_to_componentB":{"$ref":"#/$defs/AtomMapping"},"score":{"type":["number","null"],"description":"The \'score\' annotation when it is a plain number, otherwise null. This is the one annotation key that is interpreted rather than displayed: it drives the edge colouring and the force layout\'s link distance."},"annotations":{"$ref":"#/$defs/Annotations"},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","componentA","componentB","componentA_to_componentB","score","annotations"],"additionalProperties":false},"LigandNetworkViz":{"title":"LigandNetworkViz","description":"A ligand network: the ligands in the registry, the nodes as keys into it, and the mappings as edges. Deliberately not gufe\'s GraphML: that format embeds a gufe to_json moldict per node, so forwarding it would relocate the decoding problem into the browser rather than avoid it.","type":"object","properties":{"type":{"const":"LigandNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ligand, resolved in `registry`.","items":{"$ref":"#/$defs/SmallMoleculeComponentKey"}},"edges":{"type":"array","description":"The mappings, whose `componentA` and `componentB` name nodes of this network. JSON Schema cannot express that referential constraint, so a Python test covers it, and the view drops a dangling edge with a banner rather than failing.","items":{"$ref":"#/$defs/LigandAtomMappingViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false},"TransformationViz":{"title":"TransformationViz","description":"A transformation between two chemical systems, both named by gufe key, as is its protocol: `stateA` is the system it starts from, `stateB` the one it ends at, and every edge of a network usually names the same protocol. This is also what an edge of an alchemical network is (there is no separate edge type) because `stateA` and `stateB` are keys either way, and in a network they are the keys the nodes name. NonTransformation uses this type too: it exposes the same stateA and stateB properties, both its single system, so it renders as a diff with no differences.","type":"object","properties":{"type":{"const":"TransformationViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"protocol":{"$ref":"#/$defs/ProtocolKey"},"stateA":{"$ref":"#/$defs/ChemicalSystemKey"},"stateB":{"$ref":"#/$defs/ChemicalSystemKey"},"mappings":{"type":"array","items":{"$ref":"#/$defs/LigandAtomMappingViz"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","protocol","stateA","stateB","mappings"],"additionalProperties":false},"AlchemicalNetworkViz":{"title":"AlchemicalNetworkViz","description":"A graph of chemical systems joined by transformations. What repeats here is not the nodes and edges themselves but what they are made of: in practice every system shares one protein and every transformation shares one protocol. Both live in the registry, once, as whole objects so this view can show composition and topology while still letting a reader open a node and see the protein.","type":"object","properties":{"type":{"const":"AlchemicalNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ChemicalSystem, resolved in `registry`.","items":{"$ref":"#/$defs/ChemicalSystemKey"}},"edges":{"type":"array","description":"The transformations, whose `stateA` and `stateB` name nodes of this network.","items":{"$ref":"#/$defs/TransformationViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false}}'), kr = {
  $schema: bi,
  $id: wi,
  title: Si,
  description: Ei,
  oneOf: Pi,
  $defs: ki
}, fc = [
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
], Cr = kr.$id, Rr = new _i({ allErrors: !0, strict: !1 });
Rr.addSchema(kr, Cr);
const lo = Rr.getSchema(Cr), Ao = Object.entries(kr.$defs).filter(
  ([e, t]) => t.properties?.type?.const === e
).map(([e]) => e).sort(), pc = Ao, Nr = /* @__PURE__ */ new Map();
for (const e of Ao) {
  const t = Rr.getSchema(`${Cr}#/$defs/${e}`);
  t && Nr.set(e, t);
}
const mr = { valid: !0, issues: [] };
function yr(e) {
  return (e ?? []).map((t) => ({
    path: t.instancePath || "",
    message: t.keyword === "additionalProperties" ? `unknown property ${JSON.stringify(t.params.additionalProperty)}` : t.message ?? "is invalid"
  }));
}
function Ci(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return {
      valid: !1,
      issues: [{ path: "", message: "must be a JSON object" }]
    };
  const t = e.type, o = typeof t == "string" ? Nr.get(t) : void 0;
  return o ? o(e) ? mr : { valid: !1, issues: yr(o.errors) } : lo(e) ? mr : { valid: !1, issues: yr(lo.errors) };
}
function hc(e, t) {
  const o = Nr.get(e);
  return o ? o(t) ? mr : { valid: !1, issues: yr(o.errors) } : {
    valid: !1,
    issues: [
      { path: "", message: `unknown payload type ${JSON.stringify(e)}` }
    ]
  };
}
function Ri(e, t = 8) {
  const o = e.slice(0, t).map((n) => `${n.path || "(root)"}: ${n.message}`);
  return e.length > t && o.push(`... and ${e.length - t} more`), o.join(`
`);
}
const jr = {
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
  if (!jr[t]) return Ni(t);
  const { valid: o, issues: n } = Ci(e);
  return o ? null : {
    message: `This payload says it is a ${t}, but it does not match the gufe-viz schema.`,
    detail: Ri(n)
  };
}
function Ni(e) {
  const t = Object.keys(jr).sort().join(", ");
  return {
    message: `Sorry, there is no visualization for ${e} yet. This build can draw: ${t}.`
  };
}
function mc(e) {
  return Oo(e)?.message ?? null;
}
class ji extends Ht {
  placeholder() {
    return "Waiting for data...";
  }
  renderView(t, o) {
    Jo("payload", o, this);
    const n = Oo(o);
    if (n)
      return t.appendChild(Ai(n, o)), {};
    const u = o.type, r = jr[u], a = document.createElement(r);
    return a.style.cssText = "flex:1;min-height:0;min-width:0;", a.payload = o, t.appendChild(a), {
      onResize: () => a.resize?.(),
      // Removing the child fires its own `disconnectedCallback`, which is where
      // its viewers and observers are released
      cleanup: () => a.remove()
    };
  }
}
function Ai(e, t) {
  const o = L(
    "div",
    "flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:32px;"
  );
  o.appendChild(ce(e.message));
  const n = (r, a) => L(
    "div",
    "max-width:640px;padding:8px 12px;border-radius:6px;font-size:11px;white-space:pre-wrap;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;overflow-wrap:anywhere;" + (a ? `background:${z.warnBg};color:${z.warnFg};border:1px solid ${z.warnBorder};` : `background:${z.panelBg};color:${z.textMuted2};border:1px solid ${z.cardBorder};`),
    r
  );
  e.detail && o.appendChild(n(e.detail, !0));
  const u = Oi(t);
  return u && o.appendChild(n(u, !1)), o;
}
function Oi(e) {
  if (e == null || typeof e != "object") return null;
  const t = e, o = [];
  typeof t.type == "string" && o.push(`type: ${Bt(t.type)}`), typeof t.name == "string" && t.name && o.push(`name: ${Bt(t.name)}`);
  const n = Object.keys(e);
  return n.length && o.push(
    `keys: ${n.slice(0, 12).join(", ")}${n.length > 12 ? ", ..." : ""}`
  ), o.length ? o.join(`
`) : null;
}
Gt("gufe-view", ji);
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
  return new Promise((o, n) => {
    const u = document.createElement("script");
    u.src = e, u.onload = () => o(), u.onerror = () => n(new Error(`Failed to load ${t}`)), document.head.appendChild(u);
  });
}
let ze = null, De = null;
function Mo() {
  if (De) return De;
  const e = Or("threeDmol");
  return e ? (De = e.then((t) => ze = t || window.$3Dmol), De) : (De = (async () => {
    if (window.$3Dmol) return ze = window.$3Dmol;
    if (await To(Ar.threeDmol, "3Dmol.js"), !window.$3Dmol) throw new Error("3Dmol.js loaded but $3Dmol is undefined");
    return ze = window.$3Dmol;
  })(), De);
}
let xe = null;
function gr() {
  if (xe) return xe;
  const e = Or("rdkit");
  return e ? (xe = e.then((t) => window.RDKit = t), xe) : (xe = (async () => {
    if (window.RDKit) return window.RDKit;
    if (await To(Ar.rdkit, "RDKit"), !window.initRDKitModule) throw new Error("RDKit loaded but initRDKitModule is undefined");
    return window.RDKit = await window.initRDKitModule();
  })(), xe);
}
let pr = null;
function Ti() {
  if (!pr) {
    const e = Ar.d3;
    pr = Or("d3") ?? import(
      /* @vite-ignore */
      e
    );
  }
  return pr;
}
const Mi = `
`, uo = "$$$$", Ii = (e) => e.indexOf(uo) >= 0 ? e : `${e}${Mi}${uo}`;
function vr(e) {
  const t = String(e).split(/\r?\n/);
  if (t.length < 4) return null;
  const o = parseInt(t[3].slice(0, 3), 10), n = parseInt(t[3].slice(3, 6), 10);
  return isNaN(o) || isNaN(n) ? null : { atoms: o, bonds: n };
}
function $r(e, t, o) {
  let n = null;
  try {
    if (n = e.get_mol(t, JSON.stringify({ removeHs: !0 })), !n) return null;
    try {
      n.set_new_coords(!0);
    } catch {
    }
    return n.get_svg(o, o) || null;
  } catch (u) {
    return console.warn("[gufe-viz] depictSVG threw -", ve(u)), null;
  } finally {
    if (n)
      try {
        n.delete();
      } catch {
      }
  }
}
function qi(e, t, o) {
  e.innerHTML = t;
  const n = e.querySelector("svg");
  n && (n.removeAttribute("width"), n.removeAttribute("height"), n.getAttribute("viewBox") || n.setAttribute("viewBox", `0 0 ${o} ${o}`), n.setAttribute("preserveAspectRatio", "xMidYMid meet"), n.setAttribute("style", "width:100%;height:100%;max-width:100%;max-height:100%;"));
}
const Di = [
  { id: "stick", label: "Stick", title: "Sticks only" },
  { id: "ball", label: "Ball+Stick", title: "Ball and stick" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" }
], fo = {
  stick: { stick: { radius: 0.15, colorscheme: "Jmol" } },
  ball: { stick: { radius: 0.12, colorscheme: "Jmol" }, sphere: { scale: 0.28, colorscheme: "Jmol" } },
  sphere: { sphere: { scale: 1, colorscheme: "Jmol" } }
}, po = 400;
class xi extends Ht {
  placeholder() {
    return "Waiting for a SmallMoleculeComponent payload...";
  }
  renderView(t, o) {
    const n = o.sdf, u = o.name ?? "", r = o.smiles, a = o.total_charge;
    t.appendChild(_o(u || "Unnamed molecule", "SmallMoleculeComponent"));
    const l = L("div", "flex:1;display:flex;flex-direction:row;overflow:hidden;min-height:0;");
    t.appendChild(l);
    const d = L("div", "flex:1 1 50%;min-width:0;display:flex;flex-direction:column;"), v = L("div", "flex:1 1 50%;min-width:0;display:flex;flex-direction:column;position:relative;");
    l.appendChild(d), l.appendChild(L("div", `width:1px;flex-shrink:0;background:${z.splitBorder};`)), l.appendChild(v);
    const g = (s) => L("div", `flex-shrink:0;padding:4px 10px;font-size:12px;font-weight:bold;color:${z.labelFg};background:${z.labelBg};`, s);
    d.appendChild(g("2D"));
    const w = L(
      "div",
      `flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:8px;background:${z.canvas2DBg};`
    );
    d.appendChild(w), v.appendChild(g("3D"));
    const S = bo();
    v.appendChild(S.wrap);
    const b = L(
      "div",
      `flex-shrink:0;display:flex;flex-wrap:wrap;align-items:baseline;gap:6px 20px;padding:8px 16px;font-size:12px;background:${z.toolbarBg};border-top:1px solid ${z.toolbarBorder};color:${z.textPrimary};`
    );
    t.appendChild(b);
    const E = n ? vr(n) : null, $ = [
      ["Name", u || ke, !1],
      ["SMILES", r || ke, !0],
      ["Charge", a == null ? ke : String(a), !1],
      ["Atoms", E ? String(E.atoms) : ke, !1],
      ["Bonds", E ? String(E.bonds) : ke, !1]
    ];
    for (const [s, i, h] of $) {
      const C = L("div", "display:flex;align-items:baseline;gap:6px;min-width:0;");
      C.appendChild(
        L(
          "span",
          `font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;flex-shrink:0;color:${z.textMuted2};`,
          s
        )
      );
      const k = L(
        "span",
        `user-select:text;cursor:text;color:${z.textPrimary}` + (h ? ";font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:11px;overflow-wrap:anywhere;" : ""),
        i
      );
      k.title = i, C.appendChild(k), b.appendChild(C);
    }
    if (!n || !n.trim())
      return w.appendChild(ce("No molecule provided")), S.container.appendChild(ce("No molecule provided")), {};
    w.appendChild(ce("Loading 2D depiction...")), gr().then((s) => {
      const i = $r(s, n, po);
      i ? qi(w, i, po) : w.replaceChildren(ce("Failed to parse molecule", !0));
    }).catch((s) => {
      w.replaceChildren(ce(`RDKit failed to load: ${ve(s)}`, !0));
    });
    let f = null, y = "stick", c = !1;
    const p = L(
      "div",
      `position:absolute;bottom:10px;right:10px;display:flex;gap:4px;padding:4px;border-radius:6px;z-index:10;background:${z.switcherBg};box-shadow:0 2px 8px rgba(0,0,0,0.25);`
    );
    p.appendChild(
      $o(Di, y, (s) => {
        y = s, f && (f.setStyle({}, fo[s]), f.render());
      })
    );
    const _ = L("button", `${He}margin-left:4px;`, "Spin");
    return _.title = "Toggle continuous rotation", _.onclick = () => {
      c = !c, _.style.background = c ? z.btnBgActive : z.btnBg;
      try {
        f?.spin(c ? "y" : !1);
      } catch {
      }
    }, p.appendChild(_), v.appendChild(p), S.container.appendChild(ce("Loading 3D viewer...")), Mo().then(() => {
      S.container.replaceChildren(), f = ze.createViewer(S.container, { backgroundColor: z.viewerBg }), f.addModel(Ii(n), "sdf"), f.setStyle({}, fo[y]), f.zoomTo(), f.render();
    }).catch((s) => {
      S.container.replaceChildren(ce(`3D render failed: ${ve(s)}`, !0));
    }), {
      onResize() {
        f && (f.resize(), f.render());
      },
      cleanup() {
        if (f) {
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
Gt("gufe-small-molecule", xi);
const Io = ["HOH", "WAT", "SOL", "TIP3"], ho = { hetflag: !1 }, zi = { hetflag: !0 }, Vi = { resn: Io }, Pe = {
  stick: { radius: 0.15 },
  sphere: { scale: 0.3 },
  hetero: { stickRadius: 0.2, sphereScale: 0.28 },
  water: { stickRadius: 0.05, sphereScale: 0.18 },
  surfaceOpacity: 0.85,
  /** Above this many atoms a surface is slow enough to be worth warning about. */
  surfaceAtomWarn: 4e4
};
function Fi(e) {
  const t = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set();
  let n = 0, u = 0, r = 0, a = 1 / 0, l = -1 / 0;
  for (const d of e.split(/\r?\n/)) {
    const v = d.slice(0, 6);
    if (v === "ENDMDL") break;
    if (v !== "ATOM  " && v !== "HETATM") continue;
    n++, v === "HETATM" && u++;
    const g = d.slice(17, 20).trim(), w = d.slice(21, 22).trim() || "_", S = d.slice(22, 26).trim(), b = d.slice(26, 27).trim();
    Io.indexOf(g) !== -1 && r++, t.add(w), o.add(`${w}|${S}${b}|${g}`);
    const E = parseInt(S, 10);
    isNaN(E) || (E < a && (a = E), E > l && (l = E));
  }
  return {
    chains: t.size,
    residues: o.size,
    atoms: n,
    hetatms: u,
    waters: r,
    heteroNonWater: u - r,
    resiMin: a === 1 / 0 ? 0 : a,
    resiMax: l === -1 / 0 ? 0 : l
  };
}
function Li(e) {
  return `${Fe(e.chains)} chains · ${Fe(e.residues)} residues · ${Fe(e.atoms)} atoms · ${Fe(e.hetatms)} HETATM` + (e.waters > 0 ? ` (${Fe(e.waters)} water)` : "");
}
function Bi(e, t) {
  return e === "chain" ? { colorscheme: "chain" } : e === "ss" ? { colorscheme: "ssJmol" } : e === "spectrum" && t && t.resiMax > t.resiMin ? { colorscheme: { prop: "resi", gradient: "roygb", min: t.resiMin, max: t.resiMax } } : { colorscheme: "Jmol" };
}
function mo(e, t, o, n) {
  const u = n || (() => {
  }), r = Bi(t.color, o);
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
    zi,
    t.hetero ? {
      stick: { radius: Pe.hetero.stickRadius, colorscheme: "Jmol" },
      sphere: { scale: Pe.hetero.sphereScale, colorscheme: "Jmol" }
    } : {}
  ), e.setStyle(
    Vi,
    t.waters ? {
      stick: { radius: Pe.water.stickRadius, colorscheme: "Jmol" },
      sphere: { scale: Pe.water.sphereScale, colorscheme: "Jmol" }
    } : {}
  ), t.rep !== "surface") {
    u(null), e.render();
    return;
  }
  u(
    o && o.atoms > Pe.surfaceAtomWarn ? "Computing surface (large structure, this may take a while)..." : "Computing surface..."
  ), e.render(), setTimeout(() => {
    try {
      Promise.resolve(
        e.addSurface(ze.SurfaceType.VDW, { opacity: Pe.surfaceOpacity, ...r }, ho)
      ).then(() => {
        u(null), e.render();
      }).catch((a) => u(`Surface failed: ${ve(a)}`, "error"));
    } catch (a) {
      u(`Surface failed: ${ve(a)}`, "error");
    }
  }, 30);
}
const Ki = [
  { id: "cartoon", label: "Cartoon", title: "Ribbon / cartoon backbone" },
  { id: "surface", label: "Surface", title: "Molecular (VDW) surface" },
  { id: "stick", label: "Stick", title: "All-atom sticks" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" }
], Ui = [
  { id: "chain", label: "Chain" },
  { id: "spectrum", label: "Spectrum" },
  { id: "ss", label: "Secondary structure" },
  { id: "element", label: "Element" }
];
class Hi extends Ht {
  placeholder() {
    return "Waiting for a ProteinComponent payload...";
  }
  renderView(t, o) {
    const n = o.pdb, u = o.name ?? "", r = { rep: "cartoon", color: "chain", waters: !1, hetero: !0 };
    let a = null, l = null;
    const d = L(
      "div",
      `display:flex;align-items:center;gap:14px;flex-wrap:wrap;padding:8px 14px;flex-shrink:0;font-size:12px;background:${z.toolbarBg};border-bottom:1px solid ${z.toolbarBorder};color:${z.textPrimary};`
    );
    t.appendChild(d), d.appendChild(
      L("span", `font-weight:700;font-size:14px;letter-spacing:.02em;color:${z.titleColor};`, u || "Protein")
    );
    const v = (c) => L("span", `font-size:11px;color:${z.textMuted};`, c);
    d.appendChild(v("Style:")), d.appendChild(
      $o(Ki, r.rep, (c) => {
        r.rep = c, y();
      })
    ), d.appendChild(v("Color:"));
    const g = L("select", vo);
    for (const c of Ui) {
      const p = L("option", "", c.label);
      p.value = c.id, g.appendChild(p);
    }
    g.value = r.color, g.addEventListener("change", () => {
      r.color = g.value, y();
    }), d.appendChild(g);
    const w = L("div", "display:flex;gap:4px;");
    d.appendChild(w);
    const S = [
      ["waters", "Waters", "Show water molecules", () => y()],
      ["hetero", "Hetero", "Show hetero atoms / ligands / ions / lipids", () => y()],
      ["spin", "Spin", "Rotate the view continuously", () => a?.spin(r.spin ? "y" : !1)]
    ];
    for (const [c, p, _, s] of S) {
      const i = L("button", He, p);
      i.title = _, i.style.background = r[c] ? z.btnBgActive : z.btnBg, i.onclick = () => {
        r[c] = !r[c], i.style.background = r[c] ? z.btnBgActive : z.btnBg, s();
      }, w.appendChild(i);
    }
    const b = L("span", `margin-left:auto;font-size:11px;white-space:nowrap;color:${z.textMuted2};`);
    d.appendChild(b);
    const E = bo();
    t.appendChild(E.wrap);
    const $ = L(
      "div",
      "position:absolute;top:12px;left:50%;transform:translateX(-50%);padding:6px 14px;border-radius:6px;font-size:12px;z-index:20;display:none;pointer-events:none;"
    );
    E.wrap.appendChild($);
    const f = (c, p) => {
      if (c == null) {
        $.style.display = "none";
        return;
      }
      $.textContent = c, $.style.display = "block";
      const _ = p === "error";
      $.style.background = _ ? z.warnBg : z.toolbarBg, $.style.color = _ ? z.warnFg : z.textMuted, $.style.border = `1px solid ${_ ? z.warnBorder : z.toolbarBorder}`;
    };
    function y() {
      a && mo(a, r, l, f);
    }
    if (!n || !n.trim())
      return f("No protein data - waiting for a PDB payload."), {};
    try {
      l = Fi(n), b.textContent = Li(l);
    } catch (c) {
      f(`⚠ PDB parse error: ${ve(c)}`, "error");
    }
    return f("Loading 3D viewer..."), Mo().then(() => {
      a = ze.createViewer(E.container, { backgroundColor: z.viewerBg }), a.addModel(n, "pdb"), mo(a, r, l, f), a.zoomTo(), a.spin(r.spin ? "y" : !1), a.render();
    }).catch((c) => {
      f(`⚠ Failed to render structure: ${ve(c)}`, "error");
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
Gt("gufe-protein", Hi);
const qo = "http://www.w3.org/2000/svg";
function ae(e, t = {}) {
  const o = document.createElementNS(qo, e);
  for (const [n, u] of Object.entries(t)) o.setAttribute(n, String(u));
  return o;
}
function yo(e, t) {
  const o = document.createElementNS(qo, "title");
  return o.textContent = t, e.appendChild(o), e;
}
function Gi(e) {
  const t = /* @__PURE__ */ new Map();
  return _r(e, t, /* @__PURE__ */ new Set()), t;
}
function _r(e, t, o) {
  if (e == null || typeof e != "object" || o.has(e)) return;
  if (o.add(e), Array.isArray(e)) {
    for (const u of e) _r(u, t, o);
    return;
  }
  const n = e.registry;
  if (Array.isArray(n))
    for (const u of n) {
      const r = u["gufe-key"];
      typeof r == "string" && r && !t.has(r) && t.set(r, u);
    }
  for (const u of Object.values(e)) _r(u, t, o);
}
function Ji(e, t) {
  return t ? e.get(t) : void 0;
}
function br(e, t, o) {
  const n = Ji(e, t);
  return n?.type === o ? n : void 0;
}
function Wi(e) {
  return e.name ? e.name : (e["gufe-key"].split("-").pop() ?? e["gufe-key"]).slice(0, 6);
}
const Yi = ["Force-directed", "Circular", "Radial"], Lt = 34, Ue = 200, hr = 1.5, Xi = 6, Zi = 16, he = {
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
};
function Qi(e) {
  const t = parseInt(e.replace("#", ""), 16);
  return [t >> 16 & 255, t >> 8 & 255, t & 255];
}
function go(e) {
  const [t, o] = z.netEdgeRamp.map(Qi), n = Math.max(0, Math.min(1, e ?? 0.5));
  return `rgb(${t.map((r, a) => Math.round(r + (o[a] - r) * n)).join(",")})`;
}
const je = Wi, ec = (e, t) => e.length > t ? `${e.slice(0, t - 1)}...` : e;
function yc(e, t) {
  const o = br(t, e.componentA, "SmallMoleculeComponentViz"), n = br(t, e.componentB, "SmallMoleculeComponentViz");
  return !o || !n ? null : { ...e, registry: o["gufe-key"] === n["gufe-key"] ? [o] : [o, n] };
}
class tc extends Ht {
  placeholder() {
    return "Waiting for a LigandNetwork payload...";
  }
  renderView(t, o) {
    const n = Gi(o), u = [];
    let r = 0;
    for (const k of o.nodes ?? []) {
      const A = br(n, k, "SmallMoleculeComponentViz");
      if (!A) {
        r++;
        continue;
      }
      u.push({ ...A, x: 0, y: 0 });
    }
    const a = new Map(u.map((k) => [k["gufe-key"], k])), l = [];
    let d = 0;
    for (const k of o.edges ?? []) {
      const A = a.get(k.componentA), M = a.get(k.componentB);
      if (!A || !M) {
        d++;
        continue;
      }
      l.push({ ...k, index: l.length, from: A, to: M });
    }
    const v = _o(o.name || "Ligand network", "LigandNetwork");
    v.statsEl.appendChild(Oe("ligands", String(u.length))), v.statsEl.appendChild(Oe("mappings", String(l.length))), t.appendChild(v);
    const g = L("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    t.appendChild(g);
    const w = L("div", `flex:1 1 58%;min-width:0;display:flex;flex-direction:column;background:${z.netCanvasBg};`), S = L("div", `flex:1 1 42%;min-width:0;display:flex;flex-direction:column;background:${z.appBg};`);
    g.appendChild(w), g.appendChild(L("div", `width:1px;flex-shrink:0;background:${z.splitBorder};`)), g.appendChild(S);
    const b = L("div", `flex:1;position:relative;overflow:hidden;min-height:0;background:${z.netCanvasBg};`);
    w.appendChild(b);
    const E = this.#r((k) => C(k));
    w.appendChild(E.bar);
    const $ = this.#e(S);
    if (!u.length)
      return b.appendChild(
        ce(
          r ? "None of this network's ligands are in its registry." : "This network has no ligands."
        )
      ), $.message("Nothing to show."), {};
    r && rr(
      b,
      `${r} ligand${r === 1 ? "" : "s"} named by this network are not in its registry`
    ), d && rr(b, `${d} mapping${d === 1 ? "" : "s"} name a ligand this network does not contain`);
    const f = gr().catch((k) => (console.warn("[gufe-viz] RDKit failed to load:", ve(k)), null));
    let y = l.length ? 0 : -1, c = null, p = "Force-directed", _ = !1, s = !0, i = () => {
    };
    const h = (k) => {
      y = k, $.show(l[k] ?? null), i();
    }, C = (k = p) => {
      p = k, c?.(), c = null, b.querySelector("svg")?.remove();
      const A = b.clientWidth || 800, M = b.clientHeight || 600;
      rc(u, A, M, p, l);
      const T = () => {
        if (!s) return;
        const q = this.#n(b, u, l, A, M, h);
        i = () => q.setSelected(y), c = q.cleanup, i(), f.then((K) => K && q.depict(K)).catch(() => {
        });
      };
      if (p !== "Force-directed" || _) {
        T();
        return;
      }
      nc(u, l, A, M).then((q) => {
        if (s) {
          if (q) {
            T();
            return;
          }
          _ = !0, E.picker.value = "Circular", rr(b, "d3 could not be loaded - showing the circular layout instead"), C("Circular");
        }
      }, T);
    };
    return C(), $.show(l[y] ?? null), {
      onResize: () => C(),
      cleanup: () => {
        s = !1, c?.();
      }
    };
  }
  #r(t) {
    const o = L(
      "div",
      `display:flex;align-items:center;gap:10px;flex-wrap:wrap;padding:8px 14px;flex-shrink:0;background:${z.toolbarBg};border-top:1px solid ${z.toolbarBorder};`
    ), n = L("div", `display:flex;align-items:center;gap:6px;font-size:11px;color:${z.textMuted};`);
    n.appendChild(L("span", "", "score")), n.appendChild(
      L(
        "span",
        `width:40px;height:4px;border-radius:2px;background:linear-gradient(to right,${z.netEdgeRamp.join(",")});`
      )
    ), n.appendChild(L("span", "", "0 -> 1")), o.appendChild(n), o.appendChild(L("label", `font-size:12px;margin-left:auto;color:${z.textMuted};`, "Layout"));
    const u = L("select", vo);
    for (const r of Yi) {
      const a = L("option", "", r);
      a.value = r, u.appendChild(a);
    }
    return u.onchange = () => t(u.value), o.appendChild(u), { bar: o, picker: u };
  }
  /** The right-hand pane: what the selected mapping is, in words and pictures. */
  #e(t) {
    const o = L(
      "div",
      `flex-shrink:0;padding:4px 10px;font-size:12px;font-weight:bold;color:${z.labelFg};background:${z.labelBg};`,
      "Selected mapping"
    ), n = L("div", "flex:1;min-height:0;overflow:auto;display:flex;flex-direction:column;");
    t.appendChild(o), t.appendChild(n);
    const u = (a) => n.replaceChildren(ce(a));
    return { show: (a) => {
      if (!a) {
        u("Click an edge to see its mapping.");
        return;
      }
      n.replaceChildren();
      const l = L(
        "div",
        `padding:10px 14px;font-size:13px;font-weight:600;color:${z.textPrimary};border-bottom:1px solid ${z.toolbarBorder};`,
        `${je(a.from)} -> ${je(a.to)}`
      );
      n.appendChild(l);
      const d = L("div", "display:flex;flex-direction:row;min-height:180px;");
      n.appendChild(d);
      const v = [a.from.sdf, a.to.sdf].map(($, f) => {
        const y = L("div", "flex:1 1 50%;min-width:0;display:flex;flex-direction:column;");
        y.appendChild(
          L("div", `padding:4px 10px;font-size:11px;color:${z.textMuted2};`, f === 0 ? "A" : "B")
        );
        const c = L(
          "div",
          `flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:6px;background:${z.canvas2DBg};`
        );
        return c.appendChild(ce("...")), y.appendChild(c), d.appendChild(y), { box: c, sdf: $ };
      }), g = (a.componentA_to_componentB ?? []).length, w = vr(a.from.sdf), S = vr(a.to.sdf), b = L(
        "div",
        `display:flex;flex-wrap:wrap;gap:8px 16px;padding:10px 14px;font-size:11px;color:${z.textMuted};border-top:1px solid ${z.toolbarBorder};`
      );
      b.appendChild(Oe("score", a.score == null ? ke : a.score.toFixed(3), go(a.score))), b.appendChild(Oe("mapped atoms", String(g))), b.appendChild(Oe("atoms A", w ? String(w.atoms) : ke)), b.appendChild(Oe("atoms B", S ? String(S.atoms) : ke)), n.appendChild(b);
      const E = Object.entries(a.annotations ?? {}).filter(([$]) => $ !== "score");
      if (E.length) {
        const $ = L(
          "div",
          `padding:0 14px 12px;font-size:11px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;color:${z.textMuted2};`
        );
        for (const [f, y] of E)
          $.appendChild(L("div", "", `${f}: ${String(y)}`));
        n.appendChild($);
      }
      gr().then(($) => {
        for (const { box: f, sdf: y } of v) {
          const c = $r($, y, Ue);
          if (f.replaceChildren(), c) {
            f.innerHTML = c;
            const p = f.querySelector("svg");
            p?.removeAttribute("width"), p?.removeAttribute("height"), p?.setAttribute("style", "width:100%;height:100%;");
          } else
            f.appendChild(ce("Failed to parse molecule", !0));
        }
      }).catch(($) => {
        for (const { box: f } of v) f.replaceChildren(ce(`RDKit failed to load: ${ve($)}`, !0));
      });
    }, message: u };
  }
  /** Build the SVG for the current node positions. Returns the handles the
   * caller needs afterwards: selection, depictions, and teardown. */
  #n(t, o, n, u, r, a) {
    const l = ae("svg", { width: u, height: r, style: "display:block;touch-action:none;" }), d = ae("g");
    l.appendChild(d), t.appendChild(l);
    const v = [], g = ae("g"), w = ae("g"), S = ae("g", { "pointer-events": "none" }), b = ae("g");
    d.append(g, w, S, b);
    for (const p of n) {
      const _ = go(p.score), s = ae("line", {
        stroke: z.netHaloColor,
        "stroke-width": hr + 12,
        "stroke-linecap": "round",
        opacity: 0,
        "pointer-events": "none"
      }), i = ae("line", {
        stroke: _,
        "stroke-width": hr + (p.score ?? 0.5) * (Xi - hr),
        "stroke-opacity": 0.9,
        "pointer-events": "none"
      }), h = yo(
        ae("line", { stroke: "transparent", "stroke-width": Zi, style: "cursor:pointer;" }),
        `${je(p.from)} -> ${je(p.to)}${p.score == null ? "" : `
score ${p.score.toFixed(3)}`}`
      );
      if (h.addEventListener("click", (C) => {
        C.stopPropagation(), a(p.index);
      }), v.push(s), g.append(s, i), w.appendChild(h), p.score != null) {
        const C = ae("text", {
          "text-anchor": "middle",
          "dominant-baseline": "middle",
          "font-size": 10,
          "font-weight": 600,
          fill: z.netEdgeLabel
        });
        C.textContent = p.score.toFixed(2), S.appendChild(C);
      } else
        S.appendChild(ae("text"));
    }
    const E = [], $ = [], f = o.map((p) => {
      const _ = yo(ae("g", { style: "cursor:grab;" }), `${je(p)}
${p.smiles ?? ""}
${p["gufe-key"]}`);
      _.appendChild(
        ae("circle", {
          r: Lt,
          fill: z.netNodeFill,
          stroke: z.netNodeStroke,
          "stroke-width": 1.5
        })
      );
      const s = ae("g", { "pointer-events": "none" });
      _.appendChild(s), E.push(s);
      const i = ae("text", {
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        "font-size": 16,
        "font-weight": 700,
        fill: z.netInitials,
        "pointer-events": "none"
      });
      i.textContent = je(p).slice(0, 2).toUpperCase(), _.appendChild(i), $.push(i);
      const h = ae("text", {
        "text-anchor": "middle",
        y: Lt + 14,
        "font-size": 11,
        "font-weight": 600,
        fill: z.netNodeLabel,
        "pointer-events": "none"
      });
      return h.textContent = ec(je(p), 16), _.appendChild(h), b.appendChild(_), _;
    }), y = () => {
      n.forEach((p, _) => {
        for (const i of [v[_], g.children[_ * 2 + 1], w.children[_]]) {
          const h = i;
          h.setAttribute("x1", String(p.from.x)), h.setAttribute("y1", String(p.from.y)), h.setAttribute("x2", String(p.to.x)), h.setAttribute("y2", String(p.to.y));
        }
        const s = S.children[_];
        s.setAttribute("x", String((p.from.x + p.to.x) / 2)), s.setAttribute("y", String((p.from.y + p.to.y) / 2 - 8));
      }), o.forEach((p, _) => f[_].setAttribute("transform", `translate(${p.x},${p.y})`));
    };
    y();
    const c = this.#t(l, d, o, f, y);
    return {
      setSelected(p) {
        v.forEach((_, s) => _.setAttribute("opacity", s === p ? "0.95" : "0"));
      },
      depict(p) {
        const _ = (Lt - 4) * 2 / Ue, s = new DOMParser();
        let i = 0;
        return o.forEach((h, C) => {
          const k = h.sdf && $r(p, h.sdf, Ue);
          if (!k) return;
          const A = s.parseFromString(k, "image/svg+xml").documentElement;
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
          T && ($[C].setAttribute("display", "none"), i++);
        }), i;
      },
      cleanup: c.cleanup
    };
  }
  /** Wheel zoom, background pan, node drag - ~40 lines instead of d3-zoom and
   * d3-drag, and they keep working when d3 is unreachable. */
  #t(t, o, n, u, r) {
    let a = 1, l = 0, d = 0;
    const v = () => o.setAttribute("transform", `translate(${l},${d}) scale(${a})`), g = ($) => {
      $.preventDefault();
      const f = t.getBoundingClientRect(), y = $.clientX - f.left, c = $.clientY - f.top, p = Math.min(5 / a, Math.max(0.15 / a, Math.exp(-$.deltaY * 2e-3)));
      l = y - (y - l) * p, d = c - (c - d) * p, a *= p, v();
    };
    t.addEventListener("wheel", g, { passive: !1 });
    let w = null;
    const S = ($) => {
      w = { x: $.clientX - l, y: $.clientY - d };
    }, b = ($) => {
      w && (l = $.clientX - w.x, d = $.clientY - w.y, v());
    }, E = () => {
      w = null;
    };
    return t.addEventListener("pointerdown", S), t.addEventListener("pointermove", b), t.addEventListener("pointerup", E), t.addEventListener("pointercancel", E), t.addEventListener("pointerleave", E), u.forEach(($, f) => {
      let y = null;
      $.addEventListener("pointerdown", (p) => {
        p.stopPropagation(), y = { x: p.clientX - n[f].x * a, y: p.clientY - n[f].y * a }, $.setPointerCapture(p.pointerId);
      }), $.addEventListener("pointermove", (p) => {
        y && (n[f].x = n[f].fx = (p.clientX - y.x) / a, n[f].y = n[f].fy = (p.clientY - y.y) / a, r());
      });
      const c = () => {
        y = null;
      };
      $.addEventListener("pointerup", c), $.addEventListener("pointercancel", c);
    }), {
      cleanup() {
        t.removeEventListener("wheel", g), t.removeEventListener("pointerdown", S), t.removeEventListener("pointermove", b), t.removeEventListener("pointerup", E), t.removeEventListener("pointercancel", E), t.removeEventListener("pointerleave", E);
      }
    };
  }
}
function rc(e, t, o, n, u) {
  const r = t / 2, a = o / 2, l = (d, v) => {
    d.forEach((g, w) => {
      const S = 2 * Math.PI * w / Math.max(1, d.length) - Math.PI / 2;
      g.x = r + v * Math.cos(S), g.y = a + v * Math.sin(S), g.fx = n === "Force-directed" ? void 0 : g.x, g.fy = n === "Force-directed" ? void 0 : g.y;
    });
  };
  if (n === "Radial" && e.length) {
    const d = new Map(e.map(($) => [$["gufe-key"], []]));
    for (const $ of u)
      d.get($.from["gufe-key"]).push($.to["gufe-key"]), d.get($.to["gufe-key"]).push($.from["gufe-key"]);
    const v = new Map(e.map(($) => [$["gufe-key"], $])), g = e.reduce(
      ($, f) => d.get(f["gufe-key"]).length > d.get($["gufe-key"]).length ? f : $
    ), w = /* @__PURE__ */ new Set([g["gufe-key"]]);
    let S = [g["gufe-key"]], b = 0;
    const E = Math.min(t, o) * 0.18;
    for (; S.length; ) {
      l(
        S.map((f) => v.get(f)),
        b === 0 ? 0 : b * E + 40
      );
      const $ = [];
      for (const f of S)
        for (const y of d.get(f))
          w.has(y) || (w.add(y), $.push(y));
      S = $, b++;
    }
    l(e.filter(($) => !w.has($["gufe-key"])), Math.min(t, o) * 0.45);
    return;
  }
  l(e, Math.min(t, o) * 0.34);
}
async function nc(e, t, o, n) {
  let u;
  try {
    if (u = await Ti(), typeof u?.forceSimulation != "function") return !1;
  } catch {
    return !1;
  }
  const r = t.map((d) => ({ source: d.from["gufe-key"], target: d.to["gufe-key"], score: d.score })), a = u.forceSimulation(e).force(
    "link",
    u.forceLink(r).id((d) => d["gufe-key"]).distance((d) => he.linkBaseDistance + (1 - (d.score ?? 0.5)) * he.linkScoreBonus).strength(he.linkStrength)
  ).force(
    "charge",
    u.forceManyBody().strength(he.chargeStrength).distanceMin(he.chargeDistanceMin).distanceMax(he.chargeDistanceMax)
  ).force("center", u.forceCenter(o / 2, n / 2).strength(he.centerStrength)).force("collision", u.forceCollide(Lt + he.collisionPadding).iterations(he.collisionIterations)).force("x", u.forceX(o / 2).strength(he.drift)).force("y", u.forceY(n / 2).strength(he.drift)).stop(), l = Math.ceil(Math.log(a.alphaMin()) / Math.log(1 - a.alphaDecay()));
  for (let d = 0; d < l * he.tickMultiplier; d++) a.tick();
  return !0;
}
Gt("gufe-ligand-network", tc);
const gc = {
  elementChange: "#005AB5",
  uniqueAtom: "#DC3220",
  elementChange3D: "0x005AB5",
  uniqueAtom3D: "0xDC3220"
}, vc = [
  "#FF0000",
  "#FF2F00",
  "#FF5F00",
  "#FF8E00",
  "#FFC300",
  "#FEF100",
  "#DDFF00",
  "#ADFF00",
  "#78FF00",
  "#49FF00",
  "#1AFF00",
  "#00FF16",
  "#00FF4B",
  "#00FF7A",
  "#00FFA9",
  "#00FFD8",
  "#00F0FF",
  "#00C1FF",
  "#0092FF",
  "#0063FF",
  "#002DFF",
  "#0604FF",
  "#3100FF",
  "#6000FF",
  "#9500FF",
  "#C500FF",
  "#F400FF",
  "#FF00DB",
  "#FF00A6",
  "#FF0076",
  "#FF0047",
  "#FF0018"
], $c = "hsv";
function oc(e, t) {
  let o = !1, n = !1;
  const u = () => {
    o = !0;
  }, r = () => {
    o = !1;
  }, a = (l) => {
    if (l.stopPropagation(), o || l.ctrlKey || l.metaKey) {
      l.preventDefault(), t.onZoom(l);
      return;
    }
    t.hint && !n && (n = !0, ac(e, t.hint));
  };
  return e.addEventListener("wheel", a, { passive: !1, capture: !0 }), e.addEventListener("pointerdown", u), e.addEventListener("pointerenter", u), e.addEventListener("pointerleave", r), {
    cleanup() {
      e.removeEventListener("wheel", a, { capture: !0 }), e.removeEventListener("pointerdown", u), e.removeEventListener("pointerenter", u), e.removeEventListener("pointerleave", r);
    }
  };
}
const sc = 1600;
function ac(e, t) {
  const o = L(
    "div",
    "position:absolute;bottom:12px;left:50%;transform:translateX(-50%);z-index:30;pointer-events:none;padding:5px 12px;border-radius:6px;font-size:11px;white-space:nowrap;background:rgba(0,0,0,0.72);color:#ffffff;transition:opacity .3s ease;",
    t
  );
  e.appendChild(o), setTimeout(() => {
    o.style.opacity = "0", setTimeout(() => o.remove(), 300);
  }, sc);
}
const ic = { min: 0.25, max: 12 };
function cc(e, t = ic) {
  let o = 1;
  return {
    zoomBy(n) {
      const u = Math.min(t.max, Math.max(t.min, o * n));
      if (u === o) return;
      const r = u / o;
      o = u, e.zoom(r), e.render();
    },
    reset() {
      o = 1, e.zoomTo(), e.render();
    },
    level: () => o
  };
}
const lc = 2e-3;
function dc(e) {
  return Math.exp(-e.deltaY * lc);
}
function _c(e, t, o = {}) {
  const n = cc(t, o.bounds), u = oc(e, {
    hint: o.hint ?? "Click or hold Ctrl to zoom",
    onZoom: (r) => n.zoomBy(dc(r))
  });
  return { ...n, cleanup: u.cleanup };
}
function bc(e, t = "Reset view") {
  const o = L("button", He, "Reset");
  return o.title = t, o.setAttribute("aria-label", t), o.onclick = e, o;
}
function wc(e, t) {
  let o = e.querySelector("gufe-view");
  return o || (o = document.createElement("gufe-view"), o.style.cssText = "display:block;width:100%;height:100%;", e.appendChild(o)), t !== void 0 && (o.payload = t), o;
}
export {
  zo as CHROME_OPEN_BY_DEFAULT,
  Lo as DEBUG_ATTRIBUTE,
  Bo as DEBUG_GLOBAL,
  ic as DEFAULT_ZOOM_BOUNDS,
  Ht as GufeElement,
  tc as GufeLigandNetwork,
  Hi as GufeProtein,
  xi as GufeSmallMolecule,
  ji as GufeView,
  gc as MAPPING_COLORS,
  vc as MAPPING_RAMP_3D,
  $c as MAPPING_RAMP_NAME,
  fc as PAYLOAD_TYPES,
  pc as SCHEMA_TYPES,
  jr as VIEW_TAGS,
  cc as boundedZoom,
  Gi as buildRegistry,
  uc as chromeMenu,
  Ho as debugEnabled,
  Gt as defineElement,
  Oo as describeProblem,
  mc as dispatchProblem,
  Wi as entryLabel,
  Ri as formatIssues,
  oc as guardWheel,
  Jo as logPayload,
  Ji as lookup,
  br as lookupOfType,
  yc as mappingPayloadFor,
  wc as mount,
  Go as payloadJson,
  bc as resetControl,
  hc as validateAs,
  Ci as validatePayload,
  _c as viewerInteraction,
  dc as wheelFactor
};
