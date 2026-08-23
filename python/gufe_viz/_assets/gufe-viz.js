const qr = {
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
function Fo() {
  try {
    return globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches ?? !1;
  } catch {
    return !1;
  }
}
const z = Fo() ? qr.dark : qr.light;
function L(e, t, o) {
  const n = document.createElement(e);
  return t && (n.style.cssText = t), o != null && (n.textContent = o), n;
}
function Bt(e) {
  return String(e ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function $e(e) {
  if (e == null) return "unknown error";
  const t = e.message;
  if (typeof t == "string" && t) return t;
  const o = String(e);
  return o === "[object Object]" ? e.name || "unknown error" : o;
}
const Fe = (e) => e.toLocaleString("en-US"), ke = "-", He = `background:${z.btnBg};color:${z.btnFg};border:1px solid ${z.btnBorder};padding:4px 9px;font-size:11px;font-weight:bold;border-radius:3px;cursor:pointer;font-family:inherit;`, vo = `background:${z.selectBg};color:${z.textPrimary};border:1px solid ${z.selectBorder};border-radius:6px;padding:4px 8px;font-size:12px;cursor:pointer;font-family:inherit;`;
function _o(e, t, o) {
  const n = L("div", "display:flex;gap:4px;"), f = e.map((r) => {
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
    t = r, f.forEach((a) => {
      a.btn.style.background = a.id === t ? z.btnBgActive : z.btnBg;
    });
  }, n.setActive(t), n;
}
function Oe(e, t, o) {
  const n = L("span", "display:inline-flex;align-items:center;gap:5px;white-space:nowrap;");
  o && n.appendChild(
    L("span", `width:8px;height:8px;border-radius:50%;background:${o};display:inline-block;`)
  );
  const f = L("span");
  return f.innerHTML = `${Bt(e)} <b style="color:${z.textPrimary};">${Bt(t)}</b>`, n.appendChild(f), n;
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
function bo(e, t) {
  const o = L(
    "div",
    `display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;padding:9px 14px;flex-shrink:0;background:${z.toolbarBg};border-bottom:1px solid ${z.toolbarBorder};`
  );
  return o.titleEl = L("span", `font-weight:700;font-size:15px;color:${z.titleColor};letter-spacing:.02em;`, e), o.subtitleEl = L("span", `font-size:12px;color:${z.textMuted2};`, t || ""), o.statsEl = L(
    "div",
    `display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-left:auto;font-size:11px;color:${z.textMuted};`
  ), o.toggleEl = L("div", "display:flex;align-items:center;margin-left:10px;flex-shrink:0;"), o.appendChild(o.titleEl), o.appendChild(o.subtitleEl), o.appendChild(o.statsEl), o.appendChild(o.toggleEl), o;
}
function wo() {
  const e = L("div", "flex:1;position:relative;min-height:0;min-width:0;"), t = L("div", "position:absolute;inset:0;");
  return t.dataset.gufeViewer = "", e.appendChild(t), { wrap: e, container: t };
}
const Lo = !1;
function Bo() {
  const e = L("span", "display:inline-flex;flex-direction:column;gap:2px;justify-content:center;");
  for (let t = 0; t < 3; t++)
    e.appendChild(L("span", `display:block;width:11px;height:1.5px;border-radius:1px;background:${z.btnFg};`));
  return e;
}
function pc(e, t, o = {}) {
  let n = o.open ?? Lo, f = !1;
  const r = L("div", "flex-shrink:0;"), a = L("button", `${He}display:inline-flex;align-items:center;gap:6px;padding:4px 8px;`);
  a.appendChild(Bo()), a.setAttribute("aria-label", o.label || "Toggle menu");
  const c = () => {
    n && !f && (f = !0, r.appendChild(t())), r.style.display = n ? "" : "none", a.style.background = n ? z.btnBgActive : z.btnBg, a.setAttribute("aria-expanded", String(n));
  }, p = (g) => {
    g !== n && (n = g, c(), o.onToggle?.(n));
  };
  return a.onclick = () => p(!n), a.onmouseover = () => {
    a.style.background = n ? z.btnBgActive : z.btnBgHover;
  }, a.onmouseout = () => {
    a.style.background = n ? z.btnBgActive : z.btnBg;
  }, e.toggleEl.appendChild(a), c(), {
    panel: r,
    isOpen: () => n,
    setOpen: p
  };
}
const Ko = ["debug", "gufe-debug"], Uo = "debug", Ho = "GUFE_VIZ_DEBUG";
function Go() {
  return !!globalThis[Ho];
}
function Jo() {
  try {
    const e = globalThis.location?.search;
    if (!e) return !1;
    const t = new URLSearchParams(e);
    return Ko.some((o) => t.has(o));
  } catch {
    return !1;
  }
}
function Wo(e) {
  return e?.hasAttribute?.(Uo) ? !0 : Go() || Jo();
}
function Yo(e) {
  try {
    return JSON.stringify(e, null, 2) ?? String(e);
  } catch (t) {
    return `<could not be stringified: ${$e(t)}>`;
  }
}
function Xo(e, t, o) {
  if (!Wo(o)) return;
  const n = Yo(t), f = t?.type, r = `[gufe-viz] ${e}${typeof f == "string" ? ` ${f}` : ""} (${n.length} chars)`, a = typeof console.groupCollapsed == "function";
  a ? console.groupCollapsed(r) : console.log(r), console.log(n), console.log(t), a && console.groupEnd?.();
}
const Zo = 150;
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
      this.#o && clearTimeout(this.#o), this.#o = setTimeout(() => this.#e?.onResize?.(), Zo);
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
    } catch (f) {
      this.#l(t, o, f);
      return;
    }
    n instanceof Promise ? n.then(
      (f) => this.#c(f, o),
      (f) => this.#l(t, o, f)
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
    o === this.#s && (console.warn("[gufe-viz] render failed:", n), t.replaceChildren(ce(`Failed to render: ${$e(n)}`, !0)));
  }
  /** Force a resize pass - for hosts that know they resized us. */
  resize() {
    this.#e?.onResize?.();
  }
}
function Gt(e, t) {
  typeof customElements > "u" || customElements.get(e) || customElements.define(e, t);
}
function Qo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ge = { exports: {} }, nr = {}, be = {}, Ce = {}, or = {}, sr = {}, ar = {}, xr;
function Kt() {
  return xr || (xr = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.regexpCode = e.getEsmExportName = e.getProperty = e.safeStringify = e.stringify = e.strConcat = e.addCodeArg = e.str = e._ = e.nil = e._Code = e.Name = e.IDENTIFIER = e._CodeOrName = void 0;
    class t {
    }
    e._CodeOrName = t, e.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
    class o extends t {
      constructor(l) {
        if (super(), !e.IDENTIFIER.test(l))
          throw new Error("CodeGen: name must be a valid identifier");
        this.str = l;
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
      constructor(l) {
        super(), this._items = typeof l == "string" ? [l] : l;
      }
      toString() {
        return this.str;
      }
      emptyStr() {
        if (this._items.length > 1)
          return !1;
        const l = this._items[0];
        return l === "" || l === '""';
      }
      get str() {
        var l;
        return (l = this._str) !== null && l !== void 0 ? l : this._str = this._items.reduce((h, v) => `${h}${v}`, "");
      }
      get names() {
        var l;
        return (l = this._names) !== null && l !== void 0 ? l : this._names = this._items.reduce((h, v) => (v instanceof o && (h[v.str] = (h[v.str] || 0) + 1), h), {});
      }
    }
    e._Code = n, e.nil = new n("");
    function f(m, ...l) {
      const h = [m[0]];
      let v = 0;
      for (; v < l.length; )
        c(h, l[v]), h.push(m[++v]);
      return new n(h);
    }
    e._ = f;
    const r = new n("+");
    function a(m, ...l) {
      const h = [b(m[0])];
      let v = 0;
      for (; v < l.length; )
        h.push(r), c(h, l[v]), h.push(r, b(m[++v]));
      return p(h), new n(h);
    }
    e.str = a;
    function c(m, l) {
      l instanceof n ? m.push(...l._items) : l instanceof o ? m.push(l) : m.push(S(l));
    }
    e.addCodeArg = c;
    function p(m) {
      let l = 1;
      for (; l < m.length - 1; ) {
        if (m[l] === r) {
          const h = g(m[l - 1], m[l + 1]);
          if (h !== void 0) {
            m.splice(l - 1, 3, h);
            continue;
          }
          m[l++] = "+";
        }
        l++;
      }
    }
    function g(m, l) {
      if (l === '""')
        return m;
      if (m === '""')
        return l;
      if (typeof m == "string")
        return l instanceof o || m[m.length - 1] !== '"' ? void 0 : typeof l != "string" ? `${m.slice(0, -1)}${l}"` : l[0] === '"' ? m.slice(0, -1) + l.slice(1) : void 0;
      if (typeof l == "string" && l[0] === '"' && !(m instanceof o))
        return `"${m}${l.slice(1)}`;
    }
    function $(m, l) {
      return l.emptyStr() ? m : m.emptyStr() ? l : a`${m}${l}`;
    }
    e.strConcat = $;
    function S(m) {
      return typeof m == "number" || typeof m == "boolean" || m === null ? m : b(Array.isArray(m) ? m.join(",") : m);
    }
    function w(m) {
      return new n(b(m));
    }
    e.stringify = w;
    function b(m) {
      return JSON.stringify(m).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    e.safeStringify = b;
    function E(m) {
      return typeof m == "string" && e.IDENTIFIER.test(m) ? new n(`.${m}`) : f`[${m}]`;
    }
    e.getProperty = E;
    function _(m) {
      if (typeof m == "string" && e.IDENTIFIER.test(m))
        return new n(`${m}`);
      throw new Error(`CodeGen: invalid export name: ${m}, use explicit $id name mapping`);
    }
    e.getEsmExportName = _;
    function d(m) {
      return new n(m.toString());
    }
    e.regexpCode = d;
  })(ar)), ar;
}
var ir = {}, Dr;
function zr() {
  return Dr || (Dr = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0;
    const t = /* @__PURE__ */ Kt();
    class o extends Error {
      constructor(g) {
        super(`CodeGen: "code" for ${g} not defined`), this.value = g.value;
      }
    }
    var n;
    (function(p) {
      p[p.Started = 0] = "Started", p[p.Completed = 1] = "Completed";
    })(n || (e.UsedValueState = n = {})), e.varKinds = {
      const: new t.Name("const"),
      let: new t.Name("let"),
      var: new t.Name("var")
    };
    class f {
      constructor({ prefixes: g, parent: $ } = {}) {
        this._names = {}, this._prefixes = g, this._parent = $;
      }
      toName(g) {
        return g instanceof t.Name ? g : this.name(g);
      }
      name(g) {
        return new t.Name(this._newName(g));
      }
      _newName(g) {
        const $ = this._names[g] || this._nameGroup(g);
        return `${g}${$.index++}`;
      }
      _nameGroup(g) {
        var $, S;
        if (!((S = ($ = this._parent) === null || $ === void 0 ? void 0 : $._prefixes) === null || S === void 0) && S.has(g) || this._prefixes && !this._prefixes.has(g))
          throw new Error(`CodeGen: prefix "${g}" is not allowed in this scope`);
        return this._names[g] = { prefix: g, index: 0 };
      }
    }
    e.Scope = f;
    class r extends t.Name {
      constructor(g, $) {
        super($), this.prefix = g;
      }
      setValue(g, { property: $, itemIndex: S }) {
        this.value = g, this.scopePath = (0, t._)`.${new t.Name($)}[${S}]`;
      }
    }
    e.ValueScopeName = r;
    const a = (0, t._)`\n`;
    class c extends f {
      constructor(g) {
        super(g), this._values = {}, this._scope = g.scope, this.opts = { ...g, _n: g.lines ? a : t.nil };
      }
      get() {
        return this._scope;
      }
      name(g) {
        return new r(g, this._newName(g));
      }
      value(g, $) {
        var S;
        if ($.ref === void 0)
          throw new Error("CodeGen: ref must be passed in value");
        const w = this.toName(g), { prefix: b } = w, E = (S = $.key) !== null && S !== void 0 ? S : $.ref;
        let _ = this._values[b];
        if (_) {
          const l = _.get(E);
          if (l)
            return l;
        } else
          _ = this._values[b] = /* @__PURE__ */ new Map();
        _.set(E, w);
        const d = this._scope[b] || (this._scope[b] = []), m = d.length;
        return d[m] = $.ref, w.setValue($, { property: b, itemIndex: m }), w;
      }
      getValue(g, $) {
        const S = this._values[g];
        if (S)
          return S.get($);
      }
      scopeRefs(g, $ = this._values) {
        return this._reduceValues($, (S) => {
          if (S.scopePath === void 0)
            throw new Error(`CodeGen: name "${S}" has no value`);
          return (0, t._)`${g}${S.scopePath}`;
        });
      }
      scopeCode(g = this._values, $, S) {
        return this._reduceValues(g, (w) => {
          if (w.value === void 0)
            throw new Error(`CodeGen: name "${w}" has no value`);
          return w.value.code;
        }, $, S);
      }
      _reduceValues(g, $, S = {}, w) {
        let b = t.nil;
        for (const E in g) {
          const _ = g[E];
          if (!_)
            continue;
          const d = S[E] = S[E] || /* @__PURE__ */ new Map();
          _.forEach((m) => {
            if (d.has(m))
              return;
            d.set(m, n.Started);
            let l = $(m);
            if (l) {
              const h = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
              b = (0, t._)`${b}${h} ${m} = ${l};${this.opts._n}`;
            } else if (l = w?.(m))
              b = (0, t._)`${b}${l}${this.opts._n}`;
            else
              throw new o(m);
            d.set(m, n.Completed);
          });
        }
        return b;
      }
    }
    e.ValueScope = c;
  })(ir)), ir;
}
var Vr;
function G() {
  return Vr || (Vr = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
    const t = /* @__PURE__ */ Kt(), o = /* @__PURE__ */ zr();
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
    var f = /* @__PURE__ */ zr();
    Object.defineProperty(e, "Scope", { enumerable: !0, get: function() {
      return f.Scope;
    } }), Object.defineProperty(e, "ValueScope", { enumerable: !0, get: function() {
      return f.ValueScope;
    } }), Object.defineProperty(e, "ValueScopeName", { enumerable: !0, get: function() {
      return f.ValueScopeName;
    } }), Object.defineProperty(e, "varKinds", { enumerable: !0, get: function() {
      return f.varKinds;
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
    class a extends r {
      constructor(y, P, I) {
        super(), this.varKind = y, this.name = P, this.rhs = I;
      }
      render({ es5: y, _n: P }) {
        const I = y ? o.varKinds.var : this.varKind, K = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
        return `${I} ${this.name}${K};` + P;
      }
      optimizeNames(y, P) {
        if (y[this.name.str])
          return this.rhs && (this.rhs = B(this.rhs, y, P)), this;
      }
      get names() {
        return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
      }
    }
    class c extends r {
      constructor(y, P, I) {
        super(), this.lhs = y, this.rhs = P, this.sideEffects = I;
      }
      render({ _n: y }) {
        return `${this.lhs} = ${this.rhs};` + y;
      }
      optimizeNames(y, P) {
        if (!(this.lhs instanceof t.Name && !y[this.lhs.str] && !this.sideEffects))
          return this.rhs = B(this.rhs, y, P), this;
      }
      get names() {
        const y = this.lhs instanceof t.Name ? {} : { ...this.lhs.names };
        return q(y, this.rhs);
      }
    }
    class p extends c {
      constructor(y, P, I, K) {
        super(y, I, K), this.op = P;
      }
      render({ _n: y }) {
        return `${this.lhs} ${this.op}= ${this.rhs};` + y;
      }
    }
    class g extends r {
      constructor(y) {
        super(), this.label = y, this.names = {};
      }
      render({ _n: y }) {
        return `${this.label}:` + y;
      }
    }
    class $ extends r {
      constructor(y) {
        super(), this.label = y, this.names = {};
      }
      render({ _n: y }) {
        return `break${this.label ? ` ${this.label}` : ""};` + y;
      }
    }
    class S extends r {
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
    class w extends r {
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
        return this.code = B(this.code, y, P), this;
      }
      get names() {
        return this.code instanceof t._CodeOrName ? this.code.names : {};
      }
    }
    class b extends r {
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
        let K = I.length;
        for (; K--; ) {
          const H = I[K];
          H.optimizeNames(y, P) || (Q(y, H.names), I.splice(K, 1));
        }
        return I.length > 0 ? this : void 0;
      }
      get names() {
        return this.nodes.reduce((y, P) => T(y, P.names), {});
      }
    }
    class E extends b {
      render(y) {
        return "{" + y._n + super.render(y) + "}" + y._n;
      }
    }
    class _ extends b {
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
          return this.condition = B(this.condition, y, P), this;
      }
      get names() {
        const y = super.names;
        return q(y, this.condition), this.else && T(y, this.else.names), y;
      }
    }
    m.kind = "if";
    class l extends E {
    }
    l.kind = "for";
    class h extends l {
      constructor(y) {
        super(), this.iteration = y;
      }
      render(y) {
        return `for(${this.iteration})` + super.render(y);
      }
      optimizeNames(y, P) {
        if (super.optimizeNames(y, P))
          return this.iteration = B(this.iteration, y, P), this;
      }
      get names() {
        return T(super.names, this.iteration.names);
      }
    }
    class v extends l {
      constructor(y, P, I, K) {
        super(), this.varKind = y, this.name = P, this.from = I, this.to = K;
      }
      render(y) {
        const P = y.es5 ? o.varKinds.var : this.varKind, { name: I, from: K, to: H } = this;
        return `for(${P} ${I}=${K}; ${I}<${H}; ${I}++)` + super.render(y);
      }
      get names() {
        const y = q(super.names, this.from);
        return q(y, this.to);
      }
    }
    class s extends l {
      constructor(y, P, I, K) {
        super(), this.loop = y, this.varKind = P, this.name = I, this.iterable = K;
      }
      render(y) {
        return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(y);
      }
      optimizeNames(y, P) {
        if (super.optimizeNames(y, P))
          return this.iterable = B(this.iterable, y, P), this;
      }
      get names() {
        return T(super.names, this.iterable.names);
      }
    }
    class i extends E {
      constructor(y, P, I) {
        super(), this.name = y, this.args = P, this.async = I;
      }
      render(y) {
        return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(y);
      }
    }
    i.kind = "func";
    class u extends b {
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
        var I, K;
        return super.optimizeNames(y, P), (I = this.catch) === null || I === void 0 || I.optimizeNames(y, P), (K = this.finally) === null || K === void 0 || K.optimizeNames(y, P), this;
      }
      get names() {
        const y = super.names;
        return this.catch && T(y, this.catch.names), this.finally && T(y, this.finally.names), y;
      }
    }
    class C extends E {
      constructor(y) {
        super(), this.error = y;
      }
      render(y) {
        return `catch(${this.error})` + super.render(y);
      }
    }
    C.kind = "catch";
    class N extends E {
      render(y) {
        return "finally" + super.render(y);
      }
    }
    N.kind = "finally";
    class M {
      constructor(y, P = {}) {
        this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ...P, _n: P.lines ? `
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
      _def(y, P, I, K) {
        const H = this._scope.toName(P);
        return I !== void 0 && K && (this._constants[H.str] = I), this._leafNode(new a(y, H, I)), H;
      }
      // `const` declaration (`var` in es5 mode)
      const(y, P, I) {
        return this._def(o.varKinds.const, y, P, I);
      }
      // `let` declaration with optional assignment (`var` in es5 mode)
      let(y, P, I) {
        return this._def(o.varKinds.let, y, P, I);
      }
      // `var` declaration with optional assignment
      var(y, P, I) {
        return this._def(o.varKinds.var, y, P, I);
      }
      // assignment code
      assign(y, P, I) {
        return this._leafNode(new c(y, P, I));
      }
      // `+=` code
      add(y, P) {
        return this._leafNode(new p(y, e.operators.ADD, P));
      }
      // appends passed SafeExpr to code or executes Block
      code(y) {
        return typeof y == "function" ? y() : y !== t.nil && this._leafNode(new w(y)), this;
      }
      // returns code for object literal for the passed argument list of key-value pairs
      object(...y) {
        const P = ["{"];
        for (const [I, K] of y)
          P.length > 1 && P.push(","), P.push(I), (I !== K || this.opts.es5) && (P.push(":"), (0, t.addCodeArg)(P, K));
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
        return this._for(new h(y), P);
      }
      // `for` statement for a range of values
      forRange(y, P, I, K, H = this.opts.es5 ? o.varKinds.var : o.varKinds.let) {
        const ee = this._scope.toName(y);
        return this._for(new v(H, ee, P, I), () => K(ee));
      }
      // `for-of` statement (in es5 mode replace with a normal for loop)
      forOf(y, P, I, K = o.varKinds.const) {
        const H = this._scope.toName(y);
        if (this.opts.es5) {
          const ee = P instanceof t.Name ? P : this.var("_arr", P);
          return this.forRange("_i", 0, (0, t._)`${ee}.length`, (Z) => {
            this.var(H, (0, t._)`${ee}[${Z}]`), I(H);
          });
        }
        return this._for(new s("of", K, H, P), () => I(H));
      }
      // `for-in` statement.
      // With option `ownProperties` replaced with a `for-of` loop for object keys
      forIn(y, P, I, K = this.opts.es5 ? o.varKinds.var : o.varKinds.const) {
        if (this.opts.ownProperties)
          return this.forOf(y, (0, t._)`Object.keys(${P})`, I);
        const H = this._scope.toName(y);
        return this._for(new s("in", K, H, P), () => I(H));
      }
      // end `for` loop
      endFor() {
        return this._endBlockNode(l);
      }
      // `label` statement
      label(y) {
        return this._leafNode(new g(y));
      }
      // `break` statement
      break(y) {
        return this._leafNode(new $(y));
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
        const K = new k();
        if (this._blockNode(K), this.code(y), P) {
          const H = this.name("e");
          this._currNode = K.catch = new C(H), P(H);
        }
        return I && (this._currNode = K.finally = new N(), this.code(I)), this._endBlockNode(C, N);
      }
      // `throw` statement
      throw(y) {
        return this._leafNode(new S(y));
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
      func(y, P = t.nil, I, K) {
        return this._blockNode(new i(y, P, I)), K && this.code(K).endFunc(), this;
      }
      // end function definition
      endFunc() {
        return this._endBlockNode(i);
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
    function T(O, y) {
      for (const P in y)
        O[P] = (O[P] || 0) + (y[P] || 0);
      return O;
    }
    function q(O, y) {
      return y instanceof t._CodeOrName ? T(O, y.names) : O;
    }
    function B(O, y, P) {
      if (O instanceof t.Name)
        return I(O);
      if (!K(O))
        return O;
      return new t._Code(O._items.reduce((H, ee) => (ee instanceof t.Name && (ee = I(ee)), ee instanceof t._Code ? H.push(...ee._items) : H.push(ee), H), []));
      function I(H) {
        const ee = P[H.str];
        return ee === void 0 || y[H.str] !== 1 ? H : (delete y[H.str], ee);
      }
      function K(H) {
        return H instanceof t._Code && H._items.some((ee) => ee instanceof t.Name && y[ee.str] === 1 && P[ee.str] !== void 0);
      }
    }
    function Q(O, y) {
      for (const P in y)
        O[P] = (O[P] || 0) - (y[P] || 0);
    }
    function te(O) {
      return typeof O == "boolean" || typeof O == "number" || O === null ? !O : (0, t._)`!${D(O)}`;
    }
    e.not = te;
    const fe = j(e.operators.AND);
    function Y(...O) {
      return O.reduce(fe);
    }
    e.and = Y;
    const me = j(e.operators.OR);
    function V(...O) {
      return O.reduce(me);
    }
    e.or = V;
    function j(O) {
      return (y, P) => y === t.nil ? P : P === t.nil ? y : (0, t._)`${D(y)} ${O} ${D(P)}`;
    }
    function D(O) {
      return O instanceof t.Name ? O : (0, t._)`(${O})`;
    }
  })(sr)), sr;
}
var J = {}, Fr;
function X() {
  if (Fr) return J;
  Fr = 1, Object.defineProperty(J, "__esModule", { value: !0 }), J.checkStrictMode = J.getErrorPath = J.Type = J.useFunc = J.setEvaluated = J.evaluatedPropsToName = J.mergeEvaluated = J.eachItem = J.unescapeJsonPointer = J.escapeJsonPointer = J.escapeFragment = J.unescapeFragment = J.schemaRefOrVal = J.schemaHasRulesButRef = J.schemaHasRules = J.checkUnknownRules = J.alwaysValidSchema = J.toHash = void 0;
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ Kt();
  function o(s) {
    const i = {};
    for (const u of s)
      i[u] = !0;
    return i;
  }
  J.toHash = o;
  function n(s, i) {
    return typeof i == "boolean" ? i : Object.keys(i).length === 0 ? !0 : (f(s, i), !r(i, s.self.RULES.all));
  }
  J.alwaysValidSchema = n;
  function f(s, i = s.schema) {
    const { opts: u, self: k } = s;
    if (!u.strictSchema || typeof i == "boolean")
      return;
    const C = k.RULES.keywords;
    for (const N in i)
      C[N] || v(s, `unknown keyword: "${N}"`);
  }
  J.checkUnknownRules = f;
  function r(s, i) {
    if (typeof s == "boolean")
      return !s;
    for (const u in s)
      if (i[u])
        return !0;
    return !1;
  }
  J.schemaHasRules = r;
  function a(s, i) {
    if (typeof s == "boolean")
      return !s;
    for (const u in s)
      if (u !== "$ref" && i.all[u])
        return !0;
    return !1;
  }
  J.schemaHasRulesButRef = a;
  function c({ topSchemaRef: s, schemaPath: i }, u, k, C) {
    if (!C) {
      if (typeof u == "number" || typeof u == "boolean")
        return u;
      if (typeof u == "string")
        return (0, e._)`${u}`;
    }
    return (0, e._)`${s}${i}${(0, e.getProperty)(k)}`;
  }
  J.schemaRefOrVal = c;
  function p(s) {
    return S(decodeURIComponent(s));
  }
  J.unescapeFragment = p;
  function g(s) {
    return encodeURIComponent($(s));
  }
  J.escapeFragment = g;
  function $(s) {
    return typeof s == "number" ? `${s}` : s.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  J.escapeJsonPointer = $;
  function S(s) {
    return s.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  J.unescapeJsonPointer = S;
  function w(s, i) {
    if (Array.isArray(s))
      for (const u of s)
        i(u);
    else
      i(s);
  }
  J.eachItem = w;
  function b({ mergeNames: s, mergeToName: i, mergeValues: u, resultToName: k }) {
    return (C, N, M, T) => {
      const q = M === void 0 ? N : M instanceof e.Name ? (N instanceof e.Name ? s(C, N, M) : i(C, N, M), M) : N instanceof e.Name ? (i(C, M, N), N) : u(N, M);
      return T === e.Name && !(q instanceof e.Name) ? k(C, q) : q;
    };
  }
  J.mergeEvaluated = {
    props: b({
      mergeNames: (s, i, u) => s.if((0, e._)`${u} !== true && ${i} !== undefined`, () => {
        s.if((0, e._)`${i} === true`, () => s.assign(u, !0), () => s.assign(u, (0, e._)`${u} || {}`).code((0, e._)`Object.assign(${u}, ${i})`));
      }),
      mergeToName: (s, i, u) => s.if((0, e._)`${u} !== true`, () => {
        i === !0 ? s.assign(u, !0) : (s.assign(u, (0, e._)`${u} || {}`), _(s, u, i));
      }),
      mergeValues: (s, i) => s === !0 ? !0 : { ...s, ...i },
      resultToName: E
    }),
    items: b({
      mergeNames: (s, i, u) => s.if((0, e._)`${u} !== true && ${i} !== undefined`, () => s.assign(u, (0, e._)`${i} === true ? true : ${u} > ${i} ? ${u} : ${i}`)),
      mergeToName: (s, i, u) => s.if((0, e._)`${u} !== true`, () => s.assign(u, i === !0 ? !0 : (0, e._)`${u} > ${i} ? ${u} : ${i}`)),
      mergeValues: (s, i) => s === !0 ? !0 : Math.max(s, i),
      resultToName: (s, i) => s.var("items", i)
    })
  };
  function E(s, i) {
    if (i === !0)
      return s.var("props", !0);
    const u = s.var("props", (0, e._)`{}`);
    return i !== void 0 && _(s, u, i), u;
  }
  J.evaluatedPropsToName = E;
  function _(s, i, u) {
    Object.keys(u).forEach((k) => s.assign((0, e._)`${i}${(0, e.getProperty)(k)}`, !0));
  }
  J.setEvaluated = _;
  const d = {};
  function m(s, i) {
    return s.scopeValue("func", {
      ref: i,
      code: d[i.code] || (d[i.code] = new t._Code(i.code))
    });
  }
  J.useFunc = m;
  var l;
  (function(s) {
    s[s.Num = 0] = "Num", s[s.Str = 1] = "Str";
  })(l || (J.Type = l = {}));
  function h(s, i, u) {
    if (s instanceof e.Name) {
      const k = i === l.Num;
      return u ? k ? (0, e._)`"[" + ${s} + "]"` : (0, e._)`"['" + ${s} + "']"` : k ? (0, e._)`"/" + ${s}` : (0, e._)`"/" + ${s}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return u ? (0, e.getProperty)(s).toString() : "/" + $(s);
  }
  J.getErrorPath = h;
  function v(s, i, u = s.opts.strictSchema) {
    if (u) {
      if (i = `strict mode: ${i}`, u === !0)
        throw new Error(i);
      s.self.logger.warn(i);
    }
  }
  return J.checkStrictMode = v, J;
}
var Je = {}, Lr;
function ve() {
  if (Lr) return Je;
  Lr = 1, Object.defineProperty(Je, "__esModule", { value: !0 });
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
var Br;
function Jt() {
  return Br || (Br = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
    const t = /* @__PURE__ */ G(), o = /* @__PURE__ */ X(), n = /* @__PURE__ */ ve();
    e.keywordError = {
      message: ({ keyword: d }) => (0, t.str)`must pass "${d}" keyword validation`
    }, e.keyword$DataError = {
      message: ({ keyword: d, schemaType: m }) => m ? (0, t.str)`"${d}" keyword must be ${m} ($data)` : (0, t.str)`"${d}" keyword is invalid ($data)`
    };
    function f(d, m = e.keywordError, l, h) {
      const { it: v } = d, { gen: s, compositeRule: i, allErrors: u } = v, k = S(d, m, l);
      h ?? (i || u) ? p(s, k) : g(v, (0, t._)`[${k}]`);
    }
    e.reportError = f;
    function r(d, m = e.keywordError, l) {
      const { it: h } = d, { gen: v, compositeRule: s, allErrors: i } = h, u = S(d, m, l);
      p(v, u), s || i || g(h, n.default.vErrors);
    }
    e.reportExtraError = r;
    function a(d, m) {
      d.assign(n.default.errors, m), d.if((0, t._)`${n.default.vErrors} !== null`, () => d.if(m, () => d.assign((0, t._)`${n.default.vErrors}.length`, m), () => d.assign(n.default.vErrors, null)));
    }
    e.resetErrorsCount = a;
    function c({ gen: d, keyword: m, schemaValue: l, data: h, errsCount: v, it: s }) {
      if (v === void 0)
        throw new Error("ajv implementation error");
      const i = d.name("err");
      d.forRange("i", v, n.default.errors, (u) => {
        d.const(i, (0, t._)`${n.default.vErrors}[${u}]`), d.if((0, t._)`${i}.instancePath === undefined`, () => d.assign((0, t._)`${i}.instancePath`, (0, t.strConcat)(n.default.instancePath, s.errorPath))), d.assign((0, t._)`${i}.schemaPath`, (0, t.str)`${s.errSchemaPath}/${m}`), s.opts.verbose && (d.assign((0, t._)`${i}.schema`, l), d.assign((0, t._)`${i}.data`, h));
      });
    }
    e.extendErrors = c;
    function p(d, m) {
      const l = d.const("err", m);
      d.if((0, t._)`${n.default.vErrors} === null`, () => d.assign(n.default.vErrors, (0, t._)`[${l}]`), (0, t._)`${n.default.vErrors}.push(${l})`), d.code((0, t._)`${n.default.errors}++`);
    }
    function g(d, m) {
      const { gen: l, validateName: h, schemaEnv: v } = d;
      v.$async ? l.throw((0, t._)`new ${d.ValidationError}(${m})`) : (l.assign((0, t._)`${h}.errors`, m), l.return(!1));
    }
    const $ = {
      keyword: new t.Name("keyword"),
      schemaPath: new t.Name("schemaPath"),
      // also used in JTD errors
      params: new t.Name("params"),
      propertyName: new t.Name("propertyName"),
      message: new t.Name("message"),
      schema: new t.Name("schema"),
      parentSchema: new t.Name("parentSchema")
    };
    function S(d, m, l) {
      const { createErrors: h } = d.it;
      return h === !1 ? (0, t._)`{}` : w(d, m, l);
    }
    function w(d, m, l = {}) {
      const { gen: h, it: v } = d, s = [
        b(v, l),
        E(d, l)
      ];
      return _(d, m, s), h.object(...s);
    }
    function b({ errorPath: d }, { instancePath: m }) {
      const l = m ? (0, t.str)`${d}${(0, o.getErrorPath)(m, o.Type.Str)}` : d;
      return [n.default.instancePath, (0, t.strConcat)(n.default.instancePath, l)];
    }
    function E({ keyword: d, it: { errSchemaPath: m } }, { schemaPath: l, parentSchema: h }) {
      let v = h ? m : (0, t.str)`${m}/${d}`;
      return l && (v = (0, t.str)`${v}${(0, o.getErrorPath)(l, o.Type.Str)}`), [$.schemaPath, v];
    }
    function _(d, { params: m, message: l }, h) {
      const { keyword: v, data: s, schemaValue: i, it: u } = d, { opts: k, propertyName: C, topSchemaRef: N, schemaPath: M } = u;
      h.push([$.keyword, v], [$.params, typeof m == "function" ? m(d) : m || (0, t._)`{}`]), k.messages && h.push([$.message, typeof l == "function" ? l(d) : l]), k.verbose && h.push([$.schema, i], [$.parentSchema, (0, t._)`${N}${M}`], [n.default.data, s]), C && h.push([$.propertyName, C]);
    }
  })(or)), or;
}
var Kr;
function es() {
  if (Kr) return Ce;
  Kr = 1, Object.defineProperty(Ce, "__esModule", { value: !0 }), Ce.boolOrEmptySchema = Ce.topBoolOrEmptySchema = void 0;
  const e = /* @__PURE__ */ Jt(), t = /* @__PURE__ */ G(), o = /* @__PURE__ */ ve(), n = {
    message: "boolean schema is false"
  };
  function f(c) {
    const { gen: p, schema: g, validateName: $ } = c;
    g === !1 ? a(c, !1) : typeof g == "object" && g.$async === !0 ? p.return(o.default.data) : (p.assign((0, t._)`${$}.errors`, null), p.return(!0));
  }
  Ce.topBoolOrEmptySchema = f;
  function r(c, p) {
    const { gen: g, schema: $ } = c;
    $ === !1 ? (g.var(p, !1), a(c)) : g.var(p, !0);
  }
  Ce.boolOrEmptySchema = r;
  function a(c, p) {
    const { gen: g, data: $ } = c, S = {
      gen: g,
      keyword: "false schema",
      data: $,
      schema: !1,
      schemaCode: !1,
      schemaValue: !1,
      params: {},
      it: c
    };
    (0, e.reportError)(S, n, void 0, p);
  }
  return Ce;
}
var se = {}, Re = {}, Ur;
function So() {
  if (Ur) return Re;
  Ur = 1, Object.defineProperty(Re, "__esModule", { value: !0 }), Re.getRules = Re.isJSONType = void 0;
  const e = ["string", "number", "integer", "boolean", "null", "object", "array"], t = new Set(e);
  function o(f) {
    return typeof f == "string" && t.has(f);
  }
  Re.isJSONType = o;
  function n() {
    const f = {
      number: { type: "number", rules: [] },
      string: { type: "string", rules: [] },
      array: { type: "array", rules: [] },
      object: { type: "object", rules: [] }
    };
    return {
      types: { ...f, integer: !0, boolean: !0, null: !0 },
      rules: [{ rules: [] }, f.number, f.string, f.array, f.object],
      post: { rules: [] },
      all: {},
      keywords: {}
    };
  }
  return Re.getRules = n, Re;
}
var we = {}, Hr;
function Eo() {
  if (Hr) return we;
  Hr = 1, Object.defineProperty(we, "__esModule", { value: !0 }), we.shouldUseRule = we.shouldUseGroup = we.schemaHasRulesForType = void 0;
  function e({ schema: n, self: f }, r) {
    const a = f.RULES.types[r];
    return a && a !== !0 && t(n, a);
  }
  we.schemaHasRulesForType = e;
  function t(n, f) {
    return f.rules.some((r) => o(n, r));
  }
  we.shouldUseGroup = t;
  function o(n, f) {
    var r;
    return n[f.keyword] !== void 0 || ((r = f.definition.implements) === null || r === void 0 ? void 0 : r.some((a) => n[a] !== void 0));
  }
  return we.shouldUseRule = o, we;
}
var Gr;
function Ut() {
  if (Gr) return se;
  Gr = 1, Object.defineProperty(se, "__esModule", { value: !0 }), se.reportTypeError = se.checkDataTypes = se.checkDataType = se.coerceAndCheckDataType = se.getJSONTypes = se.getSchemaTypes = se.DataType = void 0;
  const e = /* @__PURE__ */ So(), t = /* @__PURE__ */ Eo(), o = /* @__PURE__ */ Jt(), n = /* @__PURE__ */ G(), f = /* @__PURE__ */ X();
  var r;
  (function(l) {
    l[l.Correct = 0] = "Correct", l[l.Wrong = 1] = "Wrong";
  })(r || (se.DataType = r = {}));
  function a(l) {
    const h = c(l.type);
    if (h.includes("null")) {
      if (l.nullable === !1)
        throw new Error("type: null contradicts nullable: false");
    } else {
      if (!h.length && l.nullable !== void 0)
        throw new Error('"nullable" cannot be used without "type"');
      l.nullable === !0 && h.push("null");
    }
    return h;
  }
  se.getSchemaTypes = a;
  function c(l) {
    const h = Array.isArray(l) ? l : l ? [l] : [];
    if (h.every(e.isJSONType))
      return h;
    throw new Error("type must be JSONType or JSONType[]: " + h.join(","));
  }
  se.getJSONTypes = c;
  function p(l, h) {
    const { gen: v, data: s, opts: i } = l, u = $(h, i.coerceTypes), k = h.length > 0 && !(u.length === 0 && h.length === 1 && (0, t.schemaHasRulesForType)(l, h[0]));
    if (k) {
      const C = E(h, s, i.strictNumbers, r.Wrong);
      v.if(C, () => {
        u.length ? S(l, h, u) : d(l);
      });
    }
    return k;
  }
  se.coerceAndCheckDataType = p;
  const g = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
  function $(l, h) {
    return h ? l.filter((v) => g.has(v) || h === "array" && v === "array") : [];
  }
  function S(l, h, v) {
    const { gen: s, data: i, opts: u } = l, k = s.let("dataType", (0, n._)`typeof ${i}`), C = s.let("coerced", (0, n._)`undefined`);
    u.coerceTypes === "array" && s.if((0, n._)`${k} == 'object' && Array.isArray(${i}) && ${i}.length == 1`, () => s.assign(i, (0, n._)`${i}[0]`).assign(k, (0, n._)`typeof ${i}`).if(E(h, i, u.strictNumbers), () => s.assign(C, i))), s.if((0, n._)`${C} !== undefined`);
    for (const M of v)
      (g.has(M) || M === "array" && u.coerceTypes === "array") && N(M);
    s.else(), d(l), s.endIf(), s.if((0, n._)`${C} !== undefined`, () => {
      s.assign(i, C), w(l, C);
    });
    function N(M) {
      switch (M) {
        case "string":
          s.elseIf((0, n._)`${k} == "number" || ${k} == "boolean"`).assign(C, (0, n._)`"" + ${i}`).elseIf((0, n._)`${i} === null`).assign(C, (0, n._)`""`);
          return;
        case "number":
          s.elseIf((0, n._)`${k} == "boolean" || ${i} === null
              || (${k} == "string" && ${i} && ${i} == +${i})`).assign(C, (0, n._)`+${i}`);
          return;
        case "integer":
          s.elseIf((0, n._)`${k} === "boolean" || ${i} === null
              || (${k} === "string" && ${i} && ${i} == +${i} && !(${i} % 1))`).assign(C, (0, n._)`+${i}`);
          return;
        case "boolean":
          s.elseIf((0, n._)`${i} === "false" || ${i} === 0 || ${i} === null`).assign(C, !1).elseIf((0, n._)`${i} === "true" || ${i} === 1`).assign(C, !0);
          return;
        case "null":
          s.elseIf((0, n._)`${i} === "" || ${i} === 0 || ${i} === false`), s.assign(C, null);
          return;
        case "array":
          s.elseIf((0, n._)`${k} === "string" || ${k} === "number"
              || ${k} === "boolean" || ${i} === null`).assign(C, (0, n._)`[${i}]`);
      }
    }
  }
  function w({ gen: l, parentData: h, parentDataProperty: v }, s) {
    l.if((0, n._)`${h} !== undefined`, () => l.assign((0, n._)`${h}[${v}]`, s));
  }
  function b(l, h, v, s = r.Correct) {
    const i = s === r.Correct ? n.operators.EQ : n.operators.NEQ;
    let u;
    switch (l) {
      case "null":
        return (0, n._)`${h} ${i} null`;
      case "array":
        u = (0, n._)`Array.isArray(${h})`;
        break;
      case "object":
        u = (0, n._)`${h} && typeof ${h} == "object" && !Array.isArray(${h})`;
        break;
      case "integer":
        u = k((0, n._)`!(${h} % 1) && !isNaN(${h})`);
        break;
      case "number":
        u = k();
        break;
      default:
        return (0, n._)`typeof ${h} ${i} ${l}`;
    }
    return s === r.Correct ? u : (0, n.not)(u);
    function k(C = n.nil) {
      return (0, n.and)((0, n._)`typeof ${h} == "number"`, C, v ? (0, n._)`isFinite(${h})` : n.nil);
    }
  }
  se.checkDataType = b;
  function E(l, h, v, s) {
    if (l.length === 1)
      return b(l[0], h, v, s);
    let i;
    const u = (0, f.toHash)(l);
    if (u.array && u.object) {
      const k = (0, n._)`typeof ${h} != "object"`;
      i = u.null ? k : (0, n._)`!${h} || ${k}`, delete u.null, delete u.array, delete u.object;
    } else
      i = n.nil;
    u.number && delete u.integer;
    for (const k in u)
      i = (0, n.and)(i, b(k, h, v, s));
    return i;
  }
  se.checkDataTypes = E;
  const _ = {
    message: ({ schema: l }) => `must be ${l}`,
    params: ({ schema: l, schemaValue: h }) => typeof l == "string" ? (0, n._)`{type: ${l}}` : (0, n._)`{type: ${h}}`
  };
  function d(l) {
    const h = m(l);
    (0, o.reportError)(h, _);
  }
  se.reportTypeError = d;
  function m(l) {
    const { gen: h, data: v, schema: s } = l, i = (0, f.schemaRefOrVal)(l, s, "type");
    return {
      gen: h,
      keyword: "type",
      data: v,
      schema: s.type,
      schemaCode: i,
      schemaValue: i,
      parentSchema: s,
      params: {},
      it: l
    };
  }
  return se;
}
var Le = {}, Jr;
function ts() {
  if (Jr) return Le;
  Jr = 1, Object.defineProperty(Le, "__esModule", { value: !0 }), Le.assignDefaults = void 0;
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X();
  function o(f, r) {
    const { properties: a, items: c } = f.schema;
    if (r === "object" && a)
      for (const p in a)
        n(f, p, a[p].default);
    else r === "array" && Array.isArray(c) && c.forEach((p, g) => n(f, g, p.default));
  }
  Le.assignDefaults = o;
  function n(f, r, a) {
    const { gen: c, compositeRule: p, data: g, opts: $ } = f;
    if (a === void 0)
      return;
    const S = (0, e._)`${g}${(0, e.getProperty)(r)}`;
    if (p) {
      (0, t.checkStrictMode)(f, `default is ignored for: ${S}`);
      return;
    }
    let w = (0, e._)`${S} === undefined`;
    $.useDefaults === "empty" && (w = (0, e._)`${w} || ${S} === null || ${S} === ""`), c.if(w, (0, e._)`${S} = ${(0, e.stringify)(a)}`);
  }
  return Le;
}
var ge = {}, re = {}, Wr;
function _e() {
  if (Wr) return re;
  Wr = 1, Object.defineProperty(re, "__esModule", { value: !0 }), re.validateUnion = re.validateArray = re.usePattern = re.callValidateCode = re.schemaProperties = re.allSchemaProperties = re.noPropertyInData = re.propertyInData = re.isOwnProperty = re.hasPropFunc = re.reportMissingProp = re.checkMissingProp = re.checkReportMissingProp = void 0;
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), o = /* @__PURE__ */ ve(), n = /* @__PURE__ */ X();
  function f(l, h) {
    const { gen: v, data: s, it: i } = l;
    v.if($(v, s, h, i.opts.ownProperties), () => {
      l.setParams({ missingProperty: (0, e._)`${h}` }, !0), l.error();
    });
  }
  re.checkReportMissingProp = f;
  function r({ gen: l, data: h, it: { opts: v } }, s, i) {
    return (0, e.or)(...s.map((u) => (0, e.and)($(l, h, u, v.ownProperties), (0, e._)`${i} = ${u}`)));
  }
  re.checkMissingProp = r;
  function a(l, h) {
    l.setParams({ missingProperty: h }, !0), l.error();
  }
  re.reportMissingProp = a;
  function c(l) {
    return l.scopeValue("func", {
      // eslint-disable-next-line @typescript-eslint/unbound-method
      ref: Object.prototype.hasOwnProperty,
      code: (0, e._)`Object.prototype.hasOwnProperty`
    });
  }
  re.hasPropFunc = c;
  function p(l, h, v) {
    return (0, e._)`${c(l)}.call(${h}, ${v})`;
  }
  re.isOwnProperty = p;
  function g(l, h, v, s) {
    const i = (0, e._)`${h}${(0, e.getProperty)(v)} !== undefined`;
    return s ? (0, e._)`${i} && ${p(l, h, v)}` : i;
  }
  re.propertyInData = g;
  function $(l, h, v, s) {
    const i = (0, e._)`${h}${(0, e.getProperty)(v)} === undefined`;
    return s ? (0, e.or)(i, (0, e.not)(p(l, h, v))) : i;
  }
  re.noPropertyInData = $;
  function S(l) {
    return l ? Object.keys(l).filter((h) => h !== "__proto__") : [];
  }
  re.allSchemaProperties = S;
  function w(l, h) {
    return S(h).filter((v) => !(0, t.alwaysValidSchema)(l, h[v]));
  }
  re.schemaProperties = w;
  function b({ schemaCode: l, data: h, it: { gen: v, topSchemaRef: s, schemaPath: i, errorPath: u }, it: k }, C, N, M) {
    const T = M ? (0, e._)`${l}, ${h}, ${s}${i}` : h, q = [
      [o.default.instancePath, (0, e.strConcat)(o.default.instancePath, u)],
      [o.default.parentData, k.parentData],
      [o.default.parentDataProperty, k.parentDataProperty],
      [o.default.rootData, o.default.rootData]
    ];
    k.opts.dynamicRef && q.push([o.default.dynamicAnchors, o.default.dynamicAnchors]);
    const B = (0, e._)`${T}, ${v.object(...q)}`;
    return N !== e.nil ? (0, e._)`${C}.call(${N}, ${B})` : (0, e._)`${C}(${B})`;
  }
  re.callValidateCode = b;
  const E = (0, e._)`new RegExp`;
  function _({ gen: l, it: { opts: h } }, v) {
    const s = h.unicodeRegExp ? "u" : "", { regExp: i } = h.code, u = i(v, s);
    return l.scopeValue("pattern", {
      key: u.toString(),
      ref: u,
      code: (0, e._)`${i.code === "new RegExp" ? E : (0, n.useFunc)(l, i)}(${v}, ${s})`
    });
  }
  re.usePattern = _;
  function d(l) {
    const { gen: h, data: v, keyword: s, it: i } = l, u = h.name("valid");
    if (i.allErrors) {
      const C = h.let("valid", !0);
      return k(() => h.assign(C, !1)), C;
    }
    return h.var(u, !0), k(() => h.break()), u;
    function k(C) {
      const N = h.const("len", (0, e._)`${v}.length`);
      h.forRange("i", 0, N, (M) => {
        l.subschema({
          keyword: s,
          dataProp: M,
          dataPropType: t.Type.Num
        }, u), h.if((0, e.not)(u), C);
      });
    }
  }
  re.validateArray = d;
  function m(l) {
    const { gen: h, schema: v, keyword: s, it: i } = l;
    if (!Array.isArray(v))
      throw new Error("ajv implementation error");
    if (v.some((N) => (0, t.alwaysValidSchema)(i, N)) && !i.opts.unevaluated)
      return;
    const k = h.let("valid", !1), C = h.name("_valid");
    h.block(() => v.forEach((N, M) => {
      const T = l.subschema({
        keyword: s,
        schemaProp: M,
        compositeRule: !0
      }, C);
      h.assign(k, (0, e._)`${k} || ${C}`), l.mergeValidEvaluated(T, C) || h.if((0, e.not)(k));
    })), l.result(k, () => l.reset(), () => l.error(!0));
  }
  return re.validateUnion = m, re;
}
var Yr;
function rs() {
  if (Yr) return ge;
  Yr = 1, Object.defineProperty(ge, "__esModule", { value: !0 }), ge.validateKeywordUsage = ge.validSchemaType = ge.funcKeywordCode = ge.macroKeywordCode = void 0;
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ ve(), o = /* @__PURE__ */ _e(), n = /* @__PURE__ */ Jt();
  function f(w, b) {
    const { gen: E, keyword: _, schema: d, parentSchema: m, it: l } = w, h = b.macro.call(l.self, d, m, l), v = g(E, _, h);
    l.opts.validateSchema !== !1 && l.self.validateSchema(h, !0);
    const s = E.name("valid");
    w.subschema({
      schema: h,
      schemaPath: e.nil,
      errSchemaPath: `${l.errSchemaPath}/${_}`,
      topSchemaRef: v,
      compositeRule: !0
    }, s), w.pass(s, () => w.error(!0));
  }
  ge.macroKeywordCode = f;
  function r(w, b) {
    var E;
    const { gen: _, keyword: d, schema: m, parentSchema: l, $data: h, it: v } = w;
    p(v, b);
    const s = !h && b.compile ? b.compile.call(v.self, m, l, v) : b.validate, i = g(_, d, s), u = _.let("valid");
    w.block$data(u, k), w.ok((E = b.valid) !== null && E !== void 0 ? E : u);
    function k() {
      if (b.errors === !1)
        M(), b.modifying && a(w), T(() => w.error());
      else {
        const q = b.async ? C() : N();
        b.modifying && a(w), T(() => c(w, q));
      }
    }
    function C() {
      const q = _.let("ruleErrs", null);
      return _.try(() => M((0, e._)`await `), (B) => _.assign(u, !1).if((0, e._)`${B} instanceof ${v.ValidationError}`, () => _.assign(q, (0, e._)`${B}.errors`), () => _.throw(B))), q;
    }
    function N() {
      const q = (0, e._)`${i}.errors`;
      return _.assign(q, null), M(e.nil), q;
    }
    function M(q = b.async ? (0, e._)`await ` : e.nil) {
      const B = v.opts.passContext ? t.default.this : t.default.self, Q = !("compile" in b && !h || b.schema === !1);
      _.assign(u, (0, e._)`${q}${(0, o.callValidateCode)(w, i, B, Q)}`, b.modifying);
    }
    function T(q) {
      var B;
      _.if((0, e.not)((B = b.valid) !== null && B !== void 0 ? B : u), q);
    }
  }
  ge.funcKeywordCode = r;
  function a(w) {
    const { gen: b, data: E, it: _ } = w;
    b.if(_.parentData, () => b.assign(E, (0, e._)`${_.parentData}[${_.parentDataProperty}]`));
  }
  function c(w, b) {
    const { gen: E } = w;
    E.if((0, e._)`Array.isArray(${b})`, () => {
      E.assign(t.default.vErrors, (0, e._)`${t.default.vErrors} === null ? ${b} : ${t.default.vErrors}.concat(${b})`).assign(t.default.errors, (0, e._)`${t.default.vErrors}.length`), (0, n.extendErrors)(w);
    }, () => w.error());
  }
  function p({ schemaEnv: w }, b) {
    if (b.async && !w.$async)
      throw new Error("async keyword in sync schema");
  }
  function g(w, b, E) {
    if (E === void 0)
      throw new Error(`keyword "${b}" failed to compile`);
    return w.scopeValue("keyword", typeof E == "function" ? { ref: E } : { ref: E, code: (0, e.stringify)(E) });
  }
  function $(w, b, E = !1) {
    return !b.length || b.some((_) => _ === "array" ? Array.isArray(w) : _ === "object" ? w && typeof w == "object" && !Array.isArray(w) : typeof w == _ || E && typeof w > "u");
  }
  ge.validSchemaType = $;
  function S({ schema: w, opts: b, self: E, errSchemaPath: _ }, d, m) {
    if (Array.isArray(d.keyword) ? !d.keyword.includes(m) : d.keyword !== m)
      throw new Error("ajv implementation error");
    const l = d.dependencies;
    if (l?.some((h) => !Object.prototype.hasOwnProperty.call(w, h)))
      throw new Error(`parent schema must have dependencies of ${m}: ${l.join(",")}`);
    if (d.validateSchema && !d.validateSchema(w[m])) {
      const v = `keyword "${m}" value is invalid at path "${_}": ` + E.errorsText(d.validateSchema.errors);
      if (b.validateSchema === "log")
        E.logger.error(v);
      else
        throw new Error(v);
    }
  }
  return ge.validateKeywordUsage = S, ge;
}
var Se = {}, Xr;
function ns() {
  if (Xr) return Se;
  Xr = 1, Object.defineProperty(Se, "__esModule", { value: !0 }), Se.extendSubschemaMode = Se.extendSubschemaData = Se.getSubschema = void 0;
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X();
  function o(r, { keyword: a, schemaProp: c, schema: p, schemaPath: g, errSchemaPath: $, topSchemaRef: S }) {
    if (a !== void 0 && p !== void 0)
      throw new Error('both "keyword" and "schema" passed, only one allowed');
    if (a !== void 0) {
      const w = r.schema[a];
      return c === void 0 ? {
        schema: w,
        schemaPath: (0, e._)`${r.schemaPath}${(0, e.getProperty)(a)}`,
        errSchemaPath: `${r.errSchemaPath}/${a}`
      } : {
        schema: w[c],
        schemaPath: (0, e._)`${r.schemaPath}${(0, e.getProperty)(a)}${(0, e.getProperty)(c)}`,
        errSchemaPath: `${r.errSchemaPath}/${a}/${(0, t.escapeFragment)(c)}`
      };
    }
    if (p !== void 0) {
      if (g === void 0 || $ === void 0 || S === void 0)
        throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
      return {
        schema: p,
        schemaPath: g,
        topSchemaRef: S,
        errSchemaPath: $
      };
    }
    throw new Error('either "keyword" or "schema" must be passed');
  }
  Se.getSubschema = o;
  function n(r, a, { dataProp: c, dataPropType: p, data: g, dataTypes: $, propertyName: S }) {
    if (g !== void 0 && c !== void 0)
      throw new Error('both "data" and "dataProp" passed, only one allowed');
    const { gen: w } = a;
    if (c !== void 0) {
      const { errorPath: E, dataPathArr: _, opts: d } = a, m = w.let("data", (0, e._)`${a.data}${(0, e.getProperty)(c)}`, !0);
      b(m), r.errorPath = (0, e.str)`${E}${(0, t.getErrorPath)(c, p, d.jsPropertySyntax)}`, r.parentDataProperty = (0, e._)`${c}`, r.dataPathArr = [..._, r.parentDataProperty];
    }
    if (g !== void 0) {
      const E = g instanceof e.Name ? g : w.let("data", g, !0);
      b(E), S !== void 0 && (r.propertyName = S);
    }
    $ && (r.dataTypes = $);
    function b(E) {
      r.data = E, r.dataLevel = a.dataLevel + 1, r.dataTypes = [], a.definedProperties = /* @__PURE__ */ new Set(), r.parentData = a.data, r.dataNames = [...a.dataNames, E];
    }
  }
  Se.extendSubschemaData = n;
  function f(r, { jtdDiscriminator: a, jtdMetadata: c, compositeRule: p, createErrors: g, allErrors: $ }) {
    p !== void 0 && (r.compositeRule = p), g !== void 0 && (r.createErrors = g), $ !== void 0 && (r.allErrors = $), r.jtdDiscriminator = a, r.jtdMetadata = c;
  }
  return Se.extendSubschemaMode = f, Se;
}
var ie = {}, cr, Zr;
function Po() {
  return Zr || (Zr = 1, cr = function e(t, o) {
    if (t === o) return !0;
    if (t && o && typeof t == "object" && typeof o == "object") {
      if (t.constructor !== o.constructor) return !1;
      var n, f, r;
      if (Array.isArray(t)) {
        if (n = t.length, n != o.length) return !1;
        for (f = n; f-- !== 0; )
          if (!e(t[f], o[f])) return !1;
        return !0;
      }
      if (t.constructor === RegExp) return t.source === o.source && t.flags === o.flags;
      if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === o.valueOf();
      if (t.toString !== Object.prototype.toString) return t.toString() === o.toString();
      if (r = Object.keys(t), n = r.length, n !== Object.keys(o).length) return !1;
      for (f = n; f-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(o, r[f])) return !1;
      for (f = n; f-- !== 0; ) {
        var a = r[f];
        if (!e(t[a], o[a])) return !1;
      }
      return !0;
    }
    return t !== t && o !== o;
  }), cr;
}
var lr = { exports: {} }, Qr;
function os() {
  if (Qr) return lr.exports;
  Qr = 1;
  var e = lr.exports = function(n, f, r) {
    typeof f == "function" && (r = f, f = {}), r = f.cb || r;
    var a = typeof r == "function" ? r : r.pre || function() {
    }, c = r.post || function() {
    };
    t(f, a, c, n, "", n);
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
  function t(n, f, r, a, c, p, g, $, S, w) {
    if (a && typeof a == "object" && !Array.isArray(a)) {
      f(a, c, p, g, $, S, w);
      for (var b in a) {
        var E = a[b];
        if (Array.isArray(E)) {
          if (b in e.arrayKeywords)
            for (var _ = 0; _ < E.length; _++)
              t(n, f, r, E[_], c + "/" + b + "/" + _, p, c, b, a, _);
        } else if (b in e.propsKeywords) {
          if (E && typeof E == "object")
            for (var d in E)
              t(n, f, r, E[d], c + "/" + b + "/" + o(d), p, c, b, a, d);
        } else (b in e.keywords || n.allKeys && !(b in e.skipKeywords)) && t(n, f, r, E, c + "/" + b, p, c, b, a);
      }
      r(a, c, p, g, $, S, w);
    }
  }
  function o(n) {
    return n.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  return lr.exports;
}
var en;
function Wt() {
  if (en) return ie;
  en = 1, Object.defineProperty(ie, "__esModule", { value: !0 }), ie.getSchemaRefs = ie.resolveUrl = ie.normalizeId = ie._getFullPath = ie.getFullPath = ie.inlineRef = void 0;
  const e = /* @__PURE__ */ X(), t = Po(), o = os(), n = /* @__PURE__ */ new Set([
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
  function f(_, d = !0) {
    return typeof _ == "boolean" ? !0 : d === !0 ? !a(_) : d ? c(_) <= d : !1;
  }
  ie.inlineRef = f;
  const r = /* @__PURE__ */ new Set([
    "$ref",
    "$recursiveRef",
    "$recursiveAnchor",
    "$dynamicRef",
    "$dynamicAnchor"
  ]);
  function a(_) {
    for (const d in _) {
      if (r.has(d))
        return !0;
      const m = _[d];
      if (Array.isArray(m) && m.some(a) || typeof m == "object" && a(m))
        return !0;
    }
    return !1;
  }
  function c(_) {
    let d = 0;
    for (const m in _) {
      if (m === "$ref")
        return 1 / 0;
      if (d++, !n.has(m) && (typeof _[m] == "object" && (0, e.eachItem)(_[m], (l) => d += c(l)), d === 1 / 0))
        return 1 / 0;
    }
    return d;
  }
  function p(_, d = "", m) {
    m !== !1 && (d = S(d));
    const l = _.parse(d);
    return g(_, l);
  }
  ie.getFullPath = p;
  function g(_, d) {
    return _.serialize(d).split("#")[0] + "#";
  }
  ie._getFullPath = g;
  const $ = /#\/?$/;
  function S(_) {
    return _ ? _.replace($, "") : "";
  }
  ie.normalizeId = S;
  function w(_, d, m) {
    return m = S(m), _.resolve(d, m);
  }
  ie.resolveUrl = w;
  const b = /^[a-z_][-a-z0-9._]*$/i;
  function E(_, d) {
    if (typeof _ == "boolean")
      return {};
    const { schemaId: m, uriResolver: l } = this.opts, h = S(_[m] || d), v = { "": h }, s = p(l, h, !1), i = {}, u = /* @__PURE__ */ new Set();
    return o(_, { allKeys: !0 }, (N, M, T, q) => {
      if (q === void 0)
        return;
      const B = s + M;
      let Q = v[q];
      typeof N[m] == "string" && (Q = te.call(this, N[m])), fe.call(this, N.$anchor), fe.call(this, N.$dynamicAnchor), v[M] = Q;
      function te(Y) {
        const me = this.opts.uriResolver.resolve;
        if (Y = S(Q ? me(Q, Y) : Y), u.has(Y))
          throw C(Y);
        u.add(Y);
        let V = this.refs[Y];
        return typeof V == "string" && (V = this.refs[V]), typeof V == "object" ? k(N, V.schema, Y) : Y !== S(B) && (Y[0] === "#" ? (k(N, i[Y], Y), i[Y] = N) : this.refs[Y] = B), Y;
      }
      function fe(Y) {
        if (typeof Y == "string") {
          if (!b.test(Y))
            throw new Error(`invalid anchor "${Y}"`);
          te.call(this, `#${Y}`);
        }
      }
    }), i;
    function k(N, M, T) {
      if (M !== void 0 && !t(N, M))
        throw C(T);
    }
    function C(N) {
      return new Error(`reference "${N}" resolves to more than one schema`);
    }
  }
  return ie.getSchemaRefs = E, ie;
}
var tn;
function Yt() {
  if (tn) return be;
  tn = 1, Object.defineProperty(be, "__esModule", { value: !0 }), be.getData = be.KeywordCxt = be.validateFunctionCode = void 0;
  const e = /* @__PURE__ */ es(), t = /* @__PURE__ */ Ut(), o = /* @__PURE__ */ Eo(), n = /* @__PURE__ */ Ut(), f = /* @__PURE__ */ ts(), r = /* @__PURE__ */ rs(), a = /* @__PURE__ */ ns(), c = /* @__PURE__ */ G(), p = /* @__PURE__ */ ve(), g = /* @__PURE__ */ Wt(), $ = /* @__PURE__ */ X(), S = /* @__PURE__ */ Jt();
  function w(R) {
    if (s(R) && (u(R), v(R))) {
      d(R);
      return;
    }
    b(R, () => (0, e.topBoolOrEmptySchema)(R));
  }
  be.validateFunctionCode = w;
  function b({ gen: R, validateName: A, schema: x, schemaEnv: F, opts: U }, W) {
    U.code.es5 ? R.func(A, (0, c._)`${p.default.data}, ${p.default.valCxt}`, F.$async, () => {
      R.code((0, c._)`"use strict"; ${l(x, U)}`), _(R, U), R.code(W);
    }) : R.func(A, (0, c._)`${p.default.data}, ${E(U)}`, F.$async, () => R.code(l(x, U)).code(W));
  }
  function E(R) {
    return (0, c._)`{${p.default.instancePath}="", ${p.default.parentData}, ${p.default.parentDataProperty}, ${p.default.rootData}=${p.default.data}${R.dynamicRef ? (0, c._)`, ${p.default.dynamicAnchors}={}` : c.nil}}={}`;
  }
  function _(R, A) {
    R.if(p.default.valCxt, () => {
      R.var(p.default.instancePath, (0, c._)`${p.default.valCxt}.${p.default.instancePath}`), R.var(p.default.parentData, (0, c._)`${p.default.valCxt}.${p.default.parentData}`), R.var(p.default.parentDataProperty, (0, c._)`${p.default.valCxt}.${p.default.parentDataProperty}`), R.var(p.default.rootData, (0, c._)`${p.default.valCxt}.${p.default.rootData}`), A.dynamicRef && R.var(p.default.dynamicAnchors, (0, c._)`${p.default.valCxt}.${p.default.dynamicAnchors}`);
    }, () => {
      R.var(p.default.instancePath, (0, c._)`""`), R.var(p.default.parentData, (0, c._)`undefined`), R.var(p.default.parentDataProperty, (0, c._)`undefined`), R.var(p.default.rootData, p.default.data), A.dynamicRef && R.var(p.default.dynamicAnchors, (0, c._)`{}`);
    });
  }
  function d(R) {
    const { schema: A, opts: x, gen: F } = R;
    b(R, () => {
      x.$comment && A.$comment && q(R), N(R), F.let(p.default.vErrors, null), F.let(p.default.errors, 0), x.unevaluated && m(R), k(R), B(R);
    });
  }
  function m(R) {
    const { gen: A, validateName: x } = R;
    R.evaluated = A.const("evaluated", (0, c._)`${x}.evaluated`), A.if((0, c._)`${R.evaluated}.dynamicProps`, () => A.assign((0, c._)`${R.evaluated}.props`, (0, c._)`undefined`)), A.if((0, c._)`${R.evaluated}.dynamicItems`, () => A.assign((0, c._)`${R.evaluated}.items`, (0, c._)`undefined`));
  }
  function l(R, A) {
    const x = typeof R == "object" && R[A.schemaId];
    return x && (A.code.source || A.code.process) ? (0, c._)`/*# sourceURL=${x} */` : c.nil;
  }
  function h(R, A) {
    if (s(R) && (u(R), v(R))) {
      i(R, A);
      return;
    }
    (0, e.boolOrEmptySchema)(R, A);
  }
  function v({ schema: R, self: A }) {
    if (typeof R == "boolean")
      return !R;
    for (const x in R)
      if (A.RULES.all[x])
        return !0;
    return !1;
  }
  function s(R) {
    return typeof R.schema != "boolean";
  }
  function i(R, A) {
    const { schema: x, gen: F, opts: U } = R;
    U.$comment && x.$comment && q(R), M(R), T(R);
    const W = F.const("_errs", p.default.errors);
    k(R, W), F.var(A, (0, c._)`${W} === ${p.default.errors}`);
  }
  function u(R) {
    (0, $.checkUnknownRules)(R), C(R);
  }
  function k(R, A) {
    if (R.opts.jtd)
      return te(R, [], !1, A);
    const x = (0, t.getSchemaTypes)(R.schema), F = (0, t.coerceAndCheckDataType)(R, x);
    te(R, x, !F, A);
  }
  function C(R) {
    const { schema: A, errSchemaPath: x, opts: F, self: U } = R;
    A.$ref && F.ignoreKeywordsWithRef && (0, $.schemaHasRulesButRef)(A, U.RULES) && U.logger.warn(`$ref: keywords ignored in schema at path "${x}"`);
  }
  function N(R) {
    const { schema: A, opts: x } = R;
    A.default !== void 0 && x.useDefaults && x.strictSchema && (0, $.checkStrictMode)(R, "default is ignored in the schema root");
  }
  function M(R) {
    const A = R.schema[R.opts.schemaId];
    A && (R.baseId = (0, g.resolveUrl)(R.opts.uriResolver, R.baseId, A));
  }
  function T(R) {
    if (R.schema.$async && !R.schemaEnv.$async)
      throw new Error("async schema in sync schema");
  }
  function q({ gen: R, schemaEnv: A, schema: x, errSchemaPath: F, opts: U }) {
    const W = x.$comment;
    if (U.$comment === !0)
      R.code((0, c._)`${p.default.self}.logger.log(${W})`);
    else if (typeof U.$comment == "function") {
      const ne = (0, c.str)`${F}/$comment`, ye = R.scopeValue("root", { ref: A.root });
      R.code((0, c._)`${p.default.self}.opts.$comment(${W}, ${ne}, ${ye}.schema)`);
    }
  }
  function B(R) {
    const { gen: A, schemaEnv: x, validateName: F, ValidationError: U, opts: W } = R;
    x.$async ? A.if((0, c._)`${p.default.errors} === 0`, () => A.return(p.default.data), () => A.throw((0, c._)`new ${U}(${p.default.vErrors})`)) : (A.assign((0, c._)`${F}.errors`, p.default.vErrors), W.unevaluated && Q(R), A.return((0, c._)`${p.default.errors} === 0`));
  }
  function Q({ gen: R, evaluated: A, props: x, items: F }) {
    x instanceof c.Name && R.assign((0, c._)`${A}.props`, x), F instanceof c.Name && R.assign((0, c._)`${A}.items`, F);
  }
  function te(R, A, x, F) {
    const { gen: U, schema: W, data: ne, allErrors: ye, opts: le, self: de } = R, { RULES: oe } = de;
    if (W.$ref && (le.ignoreKeywordsWithRef || !(0, $.schemaHasRulesButRef)(W, oe))) {
      U.block(() => K(R, "$ref", oe.all.$ref.definition));
      return;
    }
    le.jtd || Y(R, A), U.block(() => {
      for (const pe of oe.rules)
        Ae(pe);
      Ae(oe.post);
    });
    function Ae(pe) {
      (0, o.shouldUseGroup)(W, pe) && (pe.type ? (U.if((0, n.checkDataType)(pe.type, ne, le.strictNumbers)), fe(R, pe), A.length === 1 && A[0] === pe.type && x && (U.else(), (0, n.reportTypeError)(R)), U.endIf()) : fe(R, pe), ye || U.if((0, c._)`${p.default.errors} === ${F || 0}`));
    }
  }
  function fe(R, A) {
    const { gen: x, schema: F, opts: { useDefaults: U } } = R;
    U && (0, f.assignDefaults)(R, A.type), x.block(() => {
      for (const W of A.rules)
        (0, o.shouldUseRule)(F, W) && K(R, W.keyword, W.definition, A.type);
    });
  }
  function Y(R, A) {
    R.schemaEnv.meta || !R.opts.strictTypes || (me(R, A), R.opts.allowUnionTypes || V(R, A), j(R, R.dataTypes));
  }
  function me(R, A) {
    if (A.length) {
      if (!R.dataTypes.length) {
        R.dataTypes = A;
        return;
      }
      A.forEach((x) => {
        O(R.dataTypes, x) || P(R, `type "${x}" not allowed by context "${R.dataTypes.join(",")}"`);
      }), y(R, A);
    }
  }
  function V(R, A) {
    A.length > 1 && !(A.length === 2 && A.includes("null")) && P(R, "use allowUnionTypes to allow union type keyword");
  }
  function j(R, A) {
    const x = R.self.RULES.all;
    for (const F in x) {
      const U = x[F];
      if (typeof U == "object" && (0, o.shouldUseRule)(R.schema, U)) {
        const { type: W } = U.definition;
        W.length && !W.some((ne) => D(A, ne)) && P(R, `missing type "${W.join(",")}" for keyword "${F}"`);
      }
    }
  }
  function D(R, A) {
    return R.includes(A) || A === "number" && R.includes("integer");
  }
  function O(R, A) {
    return R.includes(A) || A === "integer" && R.includes("number");
  }
  function y(R, A) {
    const x = [];
    for (const F of R.dataTypes)
      O(A, F) ? x.push(F) : A.includes("integer") && F === "number" && x.push("integer");
    R.dataTypes = x;
  }
  function P(R, A) {
    const x = R.schemaEnv.baseId + R.errSchemaPath;
    A += ` at "${x}" (strictTypes)`, (0, $.checkStrictMode)(R, A, R.opts.strictTypes);
  }
  class I {
    constructor(A, x, F) {
      if ((0, r.validateKeywordUsage)(A, x, F), this.gen = A.gen, this.allErrors = A.allErrors, this.keyword = F, this.data = A.data, this.schema = A.schema[F], this.$data = x.$data && A.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, $.schemaRefOrVal)(A, this.schema, F, this.$data), this.schemaType = x.schemaType, this.parentSchema = A.schema, this.params = {}, this.it = A, this.def = x, this.$data)
        this.schemaCode = A.gen.const("vSchema", Z(this.$data, A));
      else if (this.schemaCode = this.schemaValue, !(0, r.validSchemaType)(this.schema, x.schemaType, x.allowUndefined))
        throw new Error(`${F} value must be ${JSON.stringify(x.schemaType)}`);
      ("code" in x ? x.trackErrors : x.errors !== !1) && (this.errsCount = A.gen.const("_errs", p.default.errors));
    }
    result(A, x, F) {
      this.failResult((0, c.not)(A), x, F);
    }
    failResult(A, x, F) {
      this.gen.if(A), F ? F() : this.error(), x ? (this.gen.else(), x(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    pass(A, x) {
      this.failResult((0, c.not)(A), void 0, x);
    }
    fail(A) {
      if (A === void 0) {
        this.error(), this.allErrors || this.gen.if(!1);
        return;
      }
      this.gen.if(A), this.error(), this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    fail$data(A) {
      if (!this.$data)
        return this.fail(A);
      const { schemaCode: x } = this;
      this.fail((0, c._)`${x} !== undefined && (${(0, c.or)(this.invalid$data(), A)})`);
    }
    error(A, x, F) {
      if (x) {
        this.setParams(x), this._error(A, F), this.setParams({});
        return;
      }
      this._error(A, F);
    }
    _error(A, x) {
      (A ? S.reportExtraError : S.reportError)(this, this.def.error, x);
    }
    $dataError() {
      (0, S.reportError)(this, this.def.$dataError || S.keyword$DataError);
    }
    reset() {
      if (this.errsCount === void 0)
        throw new Error('add "trackErrors" to keyword definition');
      (0, S.resetErrorsCount)(this.gen, this.errsCount);
    }
    ok(A) {
      this.allErrors || this.gen.if(A);
    }
    setParams(A, x) {
      x ? Object.assign(this.params, A) : this.params = A;
    }
    block$data(A, x, F = c.nil) {
      this.gen.block(() => {
        this.check$data(A, F), x();
      });
    }
    check$data(A = c.nil, x = c.nil) {
      if (!this.$data)
        return;
      const { gen: F, schemaCode: U, schemaType: W, def: ne } = this;
      F.if((0, c.or)((0, c._)`${U} === undefined`, x)), A !== c.nil && F.assign(A, !0), (W.length || ne.validateSchema) && (F.elseIf(this.invalid$data()), this.$dataError(), A !== c.nil && F.assign(A, !1)), F.else();
    }
    invalid$data() {
      const { gen: A, schemaCode: x, schemaType: F, def: U, it: W } = this;
      return (0, c.or)(ne(), ye());
      function ne() {
        if (F.length) {
          if (!(x instanceof c.Name))
            throw new Error("ajv implementation error");
          const le = Array.isArray(F) ? F : [F];
          return (0, c._)`${(0, n.checkDataTypes)(le, x, W.opts.strictNumbers, n.DataType.Wrong)}`;
        }
        return c.nil;
      }
      function ye() {
        if (U.validateSchema) {
          const le = A.scopeValue("validate$data", { ref: U.validateSchema });
          return (0, c._)`!${le}(${x})`;
        }
        return c.nil;
      }
    }
    subschema(A, x) {
      const F = (0, a.getSubschema)(this.it, A);
      (0, a.extendSubschemaData)(F, this.it, A), (0, a.extendSubschemaMode)(F, A);
      const U = { ...this.it, ...F, items: void 0, props: void 0 };
      return h(U, x), U;
    }
    mergeEvaluated(A, x) {
      const { it: F, gen: U } = this;
      F.opts.unevaluated && (F.props !== !0 && A.props !== void 0 && (F.props = $.mergeEvaluated.props(U, A.props, F.props, x)), F.items !== !0 && A.items !== void 0 && (F.items = $.mergeEvaluated.items(U, A.items, F.items, x)));
    }
    mergeValidEvaluated(A, x) {
      const { it: F, gen: U } = this;
      if (F.opts.unevaluated && (F.props !== !0 || F.items !== !0))
        return U.if(x, () => this.mergeEvaluated(A, c.Name)), !0;
    }
  }
  be.KeywordCxt = I;
  function K(R, A, x, F) {
    const U = new I(R, x, A);
    "code" in x ? x.code(U, F) : U.$data && x.validate ? (0, r.funcKeywordCode)(U, x) : "macro" in x ? (0, r.macroKeywordCode)(U, x) : (x.compile || x.validate) && (0, r.funcKeywordCode)(U, x);
  }
  const H = /^\/(?:[^~]|~0|~1)*$/, ee = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function Z(R, { dataLevel: A, dataNames: x, dataPathArr: F }) {
    let U, W;
    if (R === "")
      return p.default.rootData;
    if (R[0] === "/") {
      if (!H.test(R))
        throw new Error(`Invalid JSON-pointer: ${R}`);
      U = R, W = p.default.rootData;
    } else {
      const de = ee.exec(R);
      if (!de)
        throw new Error(`Invalid JSON-pointer: ${R}`);
      const oe = +de[1];
      if (U = de[2], U === "#") {
        if (oe >= A)
          throw new Error(le("property/index", oe));
        return F[A - oe];
      }
      if (oe > A)
        throw new Error(le("data", oe));
      if (W = x[A - oe], !U)
        return W;
    }
    let ne = W;
    const ye = U.split("/");
    for (const de of ye)
      de && (W = (0, c._)`${W}${(0, c.getProperty)((0, $.unescapeJsonPointer)(de))}`, ne = (0, c._)`${ne} && ${W}`);
    return ne;
    function le(de, oe) {
      return `Cannot access ${de} ${oe} levels up, current level is ${A}`;
    }
  }
  return be.getData = Z, be;
}
var We = {}, rn;
function wr() {
  if (rn) return We;
  rn = 1, Object.defineProperty(We, "__esModule", { value: !0 });
  class e extends Error {
    constructor(o) {
      super("validation failed"), this.errors = o, this.ajv = this.validation = !0;
    }
  }
  return We.default = e, We;
}
var Ye = {}, nn;
function Xt() {
  if (nn) return Ye;
  nn = 1, Object.defineProperty(Ye, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Wt();
  class t extends Error {
    constructor(n, f, r, a) {
      super(a || `can't resolve reference ${r} from id ${f}`), this.missingRef = (0, e.resolveUrl)(n, f, r), this.missingSchema = (0, e.normalizeId)((0, e.getFullPath)(n, this.missingRef));
    }
  }
  return Ye.default = t, Ye;
}
var ue = {}, on;
function Zt() {
  if (on) return ue;
  on = 1, Object.defineProperty(ue, "__esModule", { value: !0 }), ue.resolveSchema = ue.getCompilingSchema = ue.resolveRef = ue.compileSchema = ue.SchemaEnv = void 0;
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ wr(), o = /* @__PURE__ */ ve(), n = /* @__PURE__ */ Wt(), f = /* @__PURE__ */ X(), r = /* @__PURE__ */ Yt();
  class a {
    constructor(m) {
      var l;
      this.refs = {}, this.dynamicAnchors = {};
      let h;
      typeof m.schema == "object" && (h = m.schema), this.schema = m.schema, this.schemaId = m.schemaId, this.root = m.root || this, this.baseId = (l = m.baseId) !== null && l !== void 0 ? l : (0, n.normalizeId)(h?.[m.schemaId || "$id"]), this.schemaPath = m.schemaPath, this.localRefs = m.localRefs, this.meta = m.meta, this.$async = h?.$async, this.refs = {};
    }
  }
  ue.SchemaEnv = a;
  function c(d) {
    const m = $.call(this, d);
    if (m)
      return m;
    const l = (0, n.getFullPath)(this.opts.uriResolver, d.root.baseId), { es5: h, lines: v } = this.opts.code, { ownProperties: s } = this.opts, i = new e.CodeGen(this.scope, { es5: h, lines: v, ownProperties: s });
    let u;
    d.$async && (u = i.scopeValue("Error", {
      ref: t.default,
      code: (0, e._)`require("ajv/dist/runtime/validation_error").default`
    }));
    const k = i.scopeName("validate");
    d.validateName = k;
    const C = {
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
      topSchemaRef: i.scopeValue("schema", this.opts.code.source === !0 ? { ref: d.schema, code: (0, e.stringify)(d.schema) } : { ref: d.schema }),
      validateName: k,
      ValidationError: u,
      schema: d.schema,
      schemaEnv: d,
      rootId: l,
      baseId: d.baseId || l,
      schemaPath: e.nil,
      errSchemaPath: d.schemaPath || (this.opts.jtd ? "" : "#"),
      errorPath: (0, e._)`""`,
      opts: this.opts,
      self: this
    };
    let N;
    try {
      this._compilations.add(d), (0, r.validateFunctionCode)(C), i.optimize(this.opts.code.optimize);
      const M = i.toString();
      N = `${i.scopeRefs(o.default.scope)}return ${M}`, this.opts.code.process && (N = this.opts.code.process(N, d));
      const q = new Function(`${o.default.self}`, `${o.default.scope}`, N)(this, this.scope.get());
      if (this.scope.value(k, { ref: q }), q.errors = null, q.schema = d.schema, q.schemaEnv = d, d.$async && (q.$async = !0), this.opts.code.source === !0 && (q.source = { validateName: k, validateCode: M, scopeValues: i._values }), this.opts.unevaluated) {
        const { props: B, items: Q } = C;
        q.evaluated = {
          props: B instanceof e.Name ? void 0 : B,
          items: Q instanceof e.Name ? void 0 : Q,
          dynamicProps: B instanceof e.Name,
          dynamicItems: Q instanceof e.Name
        }, q.source && (q.source.evaluated = (0, e.stringify)(q.evaluated));
      }
      return d.validate = q, d;
    } catch (M) {
      throw delete d.validate, delete d.validateName, N && this.logger.error("Error compiling schema, function code:", N), M;
    } finally {
      this._compilations.delete(d);
    }
  }
  ue.compileSchema = c;
  function p(d, m, l) {
    var h;
    l = (0, n.resolveUrl)(this.opts.uriResolver, m, l);
    const v = d.refs[l];
    if (v)
      return v;
    let s = w.call(this, d, l);
    if (s === void 0) {
      const i = (h = d.localRefs) === null || h === void 0 ? void 0 : h[l], { schemaId: u } = this.opts;
      i && (s = new a({ schema: i, schemaId: u, root: d, baseId: m }));
    }
    if (s !== void 0)
      return d.refs[l] = g.call(this, s);
  }
  ue.resolveRef = p;
  function g(d) {
    return (0, n.inlineRef)(d.schema, this.opts.inlineRefs) ? d.schema : d.validate ? d : c.call(this, d);
  }
  function $(d) {
    for (const m of this._compilations)
      if (S(m, d))
        return m;
  }
  ue.getCompilingSchema = $;
  function S(d, m) {
    return d.schema === m.schema && d.root === m.root && d.baseId === m.baseId;
  }
  function w(d, m) {
    let l;
    for (; typeof (l = this.refs[m]) == "string"; )
      m = l;
    return l || this.schemas[m] || b.call(this, d, m);
  }
  function b(d, m) {
    const l = this.opts.uriResolver.parse(m), h = (0, n._getFullPath)(this.opts.uriResolver, l);
    let v = (0, n.getFullPath)(this.opts.uriResolver, d.baseId, void 0);
    if (Object.keys(d.schema).length > 0 && h === v)
      return _.call(this, l, d);
    const s = (0, n.normalizeId)(h), i = this.refs[s] || this.schemas[s];
    if (typeof i == "string") {
      const u = b.call(this, d, i);
      return typeof u?.schema != "object" ? void 0 : _.call(this, l, u);
    }
    if (typeof i?.schema == "object") {
      if (i.validate || c.call(this, i), s === (0, n.normalizeId)(m)) {
        const { schema: u } = i, { schemaId: k } = this.opts, C = u[k];
        return C && (v = (0, n.resolveUrl)(this.opts.uriResolver, v, C)), new a({ schema: u, schemaId: k, root: d, baseId: v });
      }
      return _.call(this, l, i);
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
  function _(d, { baseId: m, schema: l, root: h }) {
    var v;
    if (((v = d.fragment) === null || v === void 0 ? void 0 : v[0]) !== "/")
      return;
    for (const u of d.fragment.slice(1).split("/")) {
      if (typeof l == "boolean")
        return;
      const k = l[(0, f.unescapeFragment)(u)];
      if (k === void 0)
        return;
      l = k;
      const C = typeof l == "object" && l[this.opts.schemaId];
      !E.has(u) && C && (m = (0, n.resolveUrl)(this.opts.uriResolver, m, C));
    }
    let s;
    if (typeof l != "boolean" && l.$ref && !(0, f.schemaHasRulesButRef)(l, this.RULES)) {
      const u = (0, n.resolveUrl)(this.opts.uriResolver, m, l.$ref);
      s = b.call(this, h, u);
    }
    const { schemaId: i } = this.opts;
    if (s = s || new a({ schema: l, schemaId: i, root: h, baseId: m }), s.schema !== s.root.schema)
      return s;
  }
  return ue;
}
const ss = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", as = "Meta-schema for $data reference (JSON AnySchema extension proposal)", is = "object", cs = ["$data"], ls = { $data: { type: "string", anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] } }, ds = !1, us = {
  $id: ss,
  description: as,
  type: is,
  required: cs,
  properties: ls,
  additionalProperties: ds
};
var Xe = {}, Be = { exports: {} }, dr, sn;
function ko() {
  if (sn) return dr;
  sn = 1;
  const e = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu), t = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u), o = RegExp.prototype.test.bind(/^[\da-f]{2}$/iu), n = RegExp.prototype.test.bind(/^[\da-z\-._~]$/iu), f = RegExp.prototype.test.bind(/^[\da-z\-._~!$&'()*+,;=:@/]$/iu);
  function r(s) {
    let i = "", u = 0, k = 0;
    for (k = 0; k < s.length; k++)
      if (u = s[k].charCodeAt(0), u !== 48) {
        if (!(u >= 48 && u <= 57 || u >= 65 && u <= 70 || u >= 97 && u <= 102))
          return "";
        i += s[k];
        break;
      }
    for (k += 1; k < s.length; k++) {
      if (u = s[k].charCodeAt(0), !(u >= 48 && u <= 57 || u >= 65 && u <= 70 || u >= 97 && u <= 102))
        return "";
      i += s[k];
    }
    return i;
  }
  const a = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
  function c(s) {
    return s.length = 0, !0;
  }
  function p(s, i, u) {
    if (s.length) {
      const k = r(s);
      if (k !== "")
        i.push(k);
      else
        return u.error = !0, !1;
      s.length = 0;
    }
    return !0;
  }
  function g(s) {
    let i = 0;
    const u = { error: !1, address: "", zone: "" }, k = [], C = [];
    let N = !1, M = !1, T = p;
    for (let q = 0; q < s.length; q++) {
      const B = s[q];
      if (!(B === "[" || B === "]"))
        if (B === ":") {
          if (N === !0 && (M = !0), !T(C, k, u))
            break;
          if (++i > 7) {
            u.error = !0;
            break;
          }
          q > 0 && s[q - 1] === ":" && (N = !0), k.push(":");
          continue;
        } else if (B === "%") {
          if (!T(C, k, u))
            break;
          T = c;
        } else {
          C.push(B);
          continue;
        }
    }
    return C.length && (T === c ? u.zone = C.join("") : M ? k.push(C.join("")) : k.push(r(C))), u.address = k.join(""), u;
  }
  function $(s) {
    if (S(s, ":") < 2)
      return { host: s, isIPV6: !1 };
    const i = g(s);
    if (i.error)
      return { host: s, isIPV6: !1 };
    {
      let u = i.address, k = i.address;
      return i.zone && (u += "%" + i.zone, k += "%25" + i.zone), { host: u, isIPV6: !0, escapedHost: k };
    }
  }
  function S(s, i) {
    let u = 0;
    for (let k = 0; k < s.length; k++)
      s[k] === i && u++;
    return u;
  }
  function w(s) {
    let i = s;
    const u = [];
    let k = -1, C = 0;
    for (; C = i.length; ) {
      if (C === 1) {
        if (i === ".")
          break;
        if (i === "/") {
          u.push("/");
          break;
        } else {
          u.push(i);
          break;
        }
      } else if (C === 2) {
        if (i[0] === ".") {
          if (i[1] === ".")
            break;
          if (i[1] === "/") {
            i = i.slice(2);
            continue;
          }
        } else if (i[0] === "/" && (i[1] === "." || i[1] === "/")) {
          u.push("/");
          break;
        }
      } else if (C === 3 && i === "/..") {
        u.length !== 0 && u.pop(), u.push("/");
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
          i = i.slice(3), u.length !== 0 && u.pop();
          continue;
        }
      }
      if ((k = i.indexOf("/", 1)) === -1) {
        u.push(i);
        break;
      } else
        u.push(i.slice(0, k)), i = i.slice(k);
    }
    return u.join("");
  }
  const b = { "@": "%40", "/": "%2F", "?": "%3F", "#": "%23", ":": "%3A" }, E = /[@/?#:]/g, _ = /[@/?#]/g;
  function d(s, i) {
    const u = i ? _ : E;
    return u.lastIndex = 0, s.replace(u, (k) => b[k]);
  }
  function m(s, i = !1) {
    if (s.indexOf("%") === -1)
      return s;
    let u = "";
    for (let k = 0; k < s.length; k++) {
      if (s[k] === "%" && k + 2 < s.length) {
        const C = s.slice(k + 1, k + 3);
        if (o(C)) {
          const N = C.toUpperCase(), M = String.fromCharCode(parseInt(N, 16));
          i && n(M) ? u += M : u += "%" + N, k += 2;
          continue;
        }
      }
      u += s[k];
    }
    return u;
  }
  function l(s) {
    let i = "";
    for (let u = 0; u < s.length; u++) {
      if (s[u] === "%" && u + 2 < s.length) {
        const k = s.slice(u + 1, u + 3);
        if (o(k)) {
          const C = k.toUpperCase(), N = String.fromCharCode(parseInt(C, 16));
          N !== "." && n(N) ? i += N : i += "%" + C, u += 2;
          continue;
        }
      }
      f(s[u]) ? i += s[u] : i += escape(s[u]);
    }
    return i;
  }
  function h(s) {
    let i = "";
    for (let u = 0; u < s.length; u++) {
      if (s[u] === "%" && u + 2 < s.length) {
        const k = s.slice(u + 1, u + 3);
        if (o(k)) {
          i += "%" + k.toUpperCase(), u += 2;
          continue;
        }
      }
      i += escape(s[u]);
    }
    return i;
  }
  function v(s) {
    const i = [];
    if (s.userinfo !== void 0 && (i.push(s.userinfo), i.push("@")), s.host !== void 0) {
      let u = unescape(s.host);
      if (!t(u)) {
        const k = $(u);
        k.isIPV6 === !0 ? u = `[${k.escapedHost}]` : u = d(u, !1);
      }
      i.push(u);
    }
    return (typeof s.port == "number" || typeof s.port == "string") && (i.push(":"), i.push(String(s.port))), i.length ? i.join("") : void 0;
  }
  return dr = {
    nonSimpleDomain: a,
    recomposeAuthority: v,
    reescapeHostDelimiters: d,
    normalizePercentEncoding: m,
    normalizePathEncoding: l,
    escapePreservingEscapes: h,
    removeDotSegments: w,
    isIPv4: t,
    isUUID: e,
    normalizeIPv6: $,
    stringArrayToHexStripped: r
  }, dr;
}
var ur, an;
function fs() {
  if (an) return ur;
  an = 1;
  const { isUUID: e } = ko(), t = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu, o = (
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
  function f(s) {
    return s.secure === !0 ? !0 : s.secure === !1 ? !1 : s.scheme ? s.scheme.length === 3 && (s.scheme[0] === "w" || s.scheme[0] === "W") && (s.scheme[1] === "s" || s.scheme[1] === "S") && (s.scheme[2] === "s" || s.scheme[2] === "S") : !1;
  }
  function r(s) {
    return s.host || (s.error = s.error || "HTTP URIs must have a host."), s;
  }
  function a(s) {
    const i = String(s.scheme).toLowerCase() === "https";
    return (s.port === (i ? 443 : 80) || s.port === "") && (s.port = void 0), s.path || (s.path = "/"), s;
  }
  function c(s) {
    return s.secure = f(s), s.resourceName = (s.path || "/") + (s.query ? "?" + s.query : ""), s.path = void 0, s.query = void 0, s;
  }
  function p(s) {
    if ((s.port === (f(s) ? 443 : 80) || s.port === "") && (s.port = void 0), typeof s.secure == "boolean" && (s.scheme = s.secure ? "wss" : "ws", s.secure = void 0), s.resourceName) {
      const [i, u] = s.resourceName.split("?");
      s.path = i && i !== "/" ? i : void 0, s.query = u, s.resourceName = void 0;
    }
    return s.fragment = void 0, s;
  }
  function g(s, i) {
    if (!s.path)
      return s.error = "URN can not be parsed", s;
    const u = s.path.match(t);
    if (u) {
      const k = i.scheme || s.scheme || "urn";
      s.nid = u[1].toLowerCase(), s.nss = u[2];
      const C = `${k}:${i.nid || s.nid}`, N = v(C);
      s.path = void 0, N && (s = N.parse(s, i));
    } else
      s.error = s.error || "URN can not be parsed.";
    return s;
  }
  function $(s, i) {
    if (s.nid === void 0)
      throw new Error("URN without nid cannot be serialized");
    const u = i.scheme || s.scheme || "urn", k = s.nid.toLowerCase(), C = `${u}:${i.nid || k}`, N = v(C);
    N && (s = N.serialize(s, i));
    const M = s, T = s.nss;
    return M.path = `${k || i.nid}:${T}`, i.skipEscape = !0, M;
  }
  function S(s, i) {
    const u = s;
    return u.uuid = u.nss, u.nss = void 0, !i.tolerant && (!u.uuid || !e(u.uuid)) && (u.error = u.error || "UUID is not valid."), u;
  }
  function w(s) {
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
  ), _ = (
    /** @type {SchemeHandler} */
    {
      scheme: "ws",
      domainHost: !0,
      parse: c,
      serialize: p
    }
  ), d = (
    /** @type {SchemeHandler} */
    {
      scheme: "wss",
      domainHost: _.domainHost,
      parse: _.parse,
      serialize: _.serialize
    }
  ), h = (
    /** @type {Record<SchemeName, SchemeHandler>} */
    {
      http: b,
      https: E,
      ws: _,
      wss: d,
      urn: (
        /** @type {SchemeHandler} */
        {
          scheme: "urn",
          parse: g,
          serialize: $,
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
  function v(s) {
    return s && (h[
      /** @type {SchemeName} */
      s
    ] || h[
      /** @type {SchemeName} */
      s.toLowerCase()
    ]) || void 0;
  }
  return ur = {
    wsIsSecure: f,
    SCHEMES: h,
    isValidSchemeName: n,
    getSchemeHandler: v
  }, ur;
}
var cn;
function ps() {
  if (cn) return Be.exports;
  cn = 1;
  const { normalizeIPv6: e, removeDotSegments: t, recomposeAuthority: o, normalizePercentEncoding: n, normalizePathEncoding: f, escapePreservingEscapes: r, reescapeHostDelimiters: a, isIPv4: c, nonSimpleDomain: p } = ko(), { SCHEMES: g, getSchemeHandler: $ } = fs();
  function S(C, N) {
    return typeof C == "string" ? C = /** @type {T} */
    s(C, N) : typeof C == "object" && (C = /** @type {T} */
    v(_(C, N), N)), C;
  }
  function w(C, N, M) {
    const T = M ? Object.assign({ scheme: "null" }, M) : { scheme: "null" }, q = b(v(C, T), v(N, T), T, !0);
    return T.skipEscape = !0, _(q, T);
  }
  function b(C, N, M, T) {
    const q = {};
    return T || (C = v(_(C, M), M), N = v(_(N, M), M)), M = M || {}, !M.tolerant && N.scheme ? (q.scheme = N.scheme, q.userinfo = N.userinfo, q.host = N.host, q.port = N.port, q.path = t(N.path || ""), q.query = N.query) : (N.userinfo !== void 0 || N.host !== void 0 || N.port !== void 0 ? (q.userinfo = N.userinfo, q.host = N.host, q.port = N.port, q.path = t(N.path || ""), q.query = N.query) : (N.path ? (N.path[0] === "/" ? q.path = t(N.path) : ((C.userinfo !== void 0 || C.host !== void 0 || C.port !== void 0) && !C.path ? q.path = "/" + N.path : C.path ? q.path = C.path.slice(0, C.path.lastIndexOf("/") + 1) + N.path : q.path = N.path, q.path = t(q.path)), q.query = N.query) : (q.path = C.path, N.query !== void 0 ? q.query = N.query : q.query = C.query), q.userinfo = C.userinfo, q.host = C.host, q.port = C.port), q.scheme = C.scheme), q.fragment = N.fragment, q;
  }
  function E(C, N, M) {
    const T = u(C, M), q = u(N, M);
    return T !== void 0 && q !== void 0 && T.toLowerCase() === q.toLowerCase();
  }
  function _(C, N) {
    const M = {
      host: C.host,
      scheme: C.scheme,
      userinfo: C.userinfo,
      port: C.port,
      path: C.path,
      query: C.query,
      nid: C.nid,
      nss: C.nss,
      uuid: C.uuid,
      fragment: C.fragment,
      reference: C.reference,
      resourceName: C.resourceName,
      secure: C.secure,
      error: ""
    }, T = Object.assign({}, N), q = [], B = $(T.scheme || M.scheme);
    B && B.serialize && B.serialize(M, T), M.path !== void 0 && (T.skipEscape ? M.path = n(M.path) : (M.path = r(M.path), M.scheme !== void 0 && (M.path = M.path.split("%3A").join(":")))), T.reference !== "suffix" && M.scheme && q.push(M.scheme, ":");
    const Q = o(M);
    if (Q !== void 0 && (T.reference !== "suffix" && q.push("//"), q.push(Q), M.path && M.path[0] !== "/" && q.push("/")), M.path !== void 0) {
      let te = M.path;
      !T.absolutePath && (!B || !B.absolutePath) && (te = t(te)), Q === void 0 && te[0] === "/" && te[1] === "/" && (te = "/%2F" + te.slice(2)), q.push(te);
    }
    return M.query !== void 0 && q.push("?", M.query), M.fragment !== void 0 && q.push("#", M.fragment), q.join("");
  }
  const d = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u, m = /^(?:[^#/:?]+:)?\/\/([^/?#]*)/;
  function l(C, N) {
    if (N[2] !== void 0 && C.path && C.path[0] !== "/")
      return 'URI path must start with "/" when authority is present.';
    if (typeof C.port == "number" && (C.port < 0 || C.port > 65535))
      return "URI port is malformed.";
  }
  function h(C, N) {
    const M = Object.assign({}, N), T = {
      scheme: void 0,
      userinfo: void 0,
      host: "",
      port: void 0,
      path: "",
      query: void 0,
      fragment: void 0
    };
    let q = !1, B = !1;
    M.reference === "suffix" && (M.scheme ? C = M.scheme + ":" + C : C = "//" + C);
    const Q = C.match(m);
    Q !== null && Q[1].indexOf("\\") !== -1 && (T.error = "URI authority must not contain a literal backslash.", q = !0);
    const te = C.match(d);
    if (te) {
      T.scheme = te[1], T.userinfo = te[3], T.host = te[4], T.port = parseInt(te[5], 10), T.path = te[6] || "", T.query = te[7], T.fragment = te[8], isNaN(T.port) && (T.port = te[5]);
      const fe = l(T, te);
      if (fe !== void 0 && (T.error = T.error || fe, q = !0), T.host)
        if (c(T.host) === !1) {
          const V = e(T.host);
          T.host = V.host.toLowerCase(), B = V.isIPV6;
        } else
          B = !0;
      T.scheme === void 0 && T.userinfo === void 0 && T.host === void 0 && T.port === void 0 && T.query === void 0 && !T.path ? T.reference = "same-document" : T.scheme === void 0 ? T.reference = "relative" : T.fragment === void 0 ? T.reference = "absolute" : T.reference = "uri", M.reference && M.reference !== "suffix" && M.reference !== T.reference && (T.error = T.error || "URI is not a " + M.reference + " reference.");
      const Y = $(M.scheme || T.scheme);
      if (!M.unicodeSupport && (!Y || !Y.unicodeSupport) && T.host && (M.domainHost || Y && Y.domainHost) && B === !1 && p(T.host))
        try {
          T.host = new URL("http://" + T.host).hostname;
        } catch (me) {
          T.error = T.error || "Host's domain name can not be converted to ASCII: " + me;
        }
      if ((!Y || Y && !Y.skipNormalize) && (C.indexOf("%") !== -1 && (T.scheme !== void 0 && (T.scheme = unescape(T.scheme)), T.host !== void 0 && (T.host = a(unescape(T.host), B))), T.path && (T.path = f(T.path)), T.fragment))
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
  function v(C, N) {
    return h(C, N).parsed;
  }
  function s(C, N) {
    return i(C, N).normalized;
  }
  function i(C, N) {
    const { parsed: M, malformedAuthorityOrPort: T } = h(C, N);
    return {
      normalized: T ? C : _(M, N),
      malformedAuthorityOrPort: T
    };
  }
  function u(C, N) {
    if (typeof C == "string") {
      const { normalized: M, malformedAuthorityOrPort: T } = i(C, N);
      return T ? void 0 : M;
    }
    if (typeof C == "object")
      return _(C, N);
  }
  const k = {
    SCHEMES: g,
    normalize: S,
    resolve: w,
    resolveComponent: b,
    equal: E,
    serialize: _,
    parse: v
  };
  return Be.exports = k, Be.exports.default = k, Be.exports.fastUri = k, Be.exports;
}
var ln;
function hs() {
  if (ln) return Xe;
  ln = 1, Object.defineProperty(Xe, "__esModule", { value: !0 });
  const e = ps();
  return e.code = 'require("ajv/dist/runtime/uri").default', Xe.default = e, Xe;
}
var dn;
function ms() {
  return dn || (dn = 1, (function(e) {
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
    const n = /* @__PURE__ */ wr(), f = /* @__PURE__ */ Xt(), r = /* @__PURE__ */ So(), a = /* @__PURE__ */ Zt(), c = /* @__PURE__ */ G(), p = /* @__PURE__ */ Wt(), g = /* @__PURE__ */ Ut(), $ = /* @__PURE__ */ X(), S = us, w = /* @__PURE__ */ hs(), b = (V, j) => new RegExp(V, j);
    b.code = "new RegExp";
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
    }, l = 200;
    function h(V) {
      var j, D, O, y, P, I, K, H, ee, Z, R, A, x, F, U, W, ne, ye, le, de, oe, Ae, pe, Qt, er;
      const Ve = V.strict, tr = (j = V.code) === null || j === void 0 ? void 0 : j.optimize, Mr = tr === !0 || tr === void 0 ? 1 : tr || 0, Ir = (O = (D = V.code) === null || D === void 0 ? void 0 : D.regExp) !== null && O !== void 0 ? O : b, Vo = (y = V.uriResolver) !== null && y !== void 0 ? y : w.default;
      return {
        strictSchema: (I = (P = V.strictSchema) !== null && P !== void 0 ? P : Ve) !== null && I !== void 0 ? I : !0,
        strictNumbers: (H = (K = V.strictNumbers) !== null && K !== void 0 ? K : Ve) !== null && H !== void 0 ? H : !0,
        strictTypes: (Z = (ee = V.strictTypes) !== null && ee !== void 0 ? ee : Ve) !== null && Z !== void 0 ? Z : "log",
        strictTuples: (A = (R = V.strictTuples) !== null && R !== void 0 ? R : Ve) !== null && A !== void 0 ? A : "log",
        strictRequired: (F = (x = V.strictRequired) !== null && x !== void 0 ? x : Ve) !== null && F !== void 0 ? F : !1,
        code: V.code ? { ...V.code, optimize: Mr, regExp: Ir } : { optimize: Mr, regExp: Ir },
        loopRequired: (U = V.loopRequired) !== null && U !== void 0 ? U : l,
        loopEnum: (W = V.loopEnum) !== null && W !== void 0 ? W : l,
        meta: (ne = V.meta) !== null && ne !== void 0 ? ne : !0,
        messages: (ye = V.messages) !== null && ye !== void 0 ? ye : !0,
        inlineRefs: (le = V.inlineRefs) !== null && le !== void 0 ? le : !0,
        schemaId: (de = V.schemaId) !== null && de !== void 0 ? de : "$id",
        addUsedSchema: (oe = V.addUsedSchema) !== null && oe !== void 0 ? oe : !0,
        validateSchema: (Ae = V.validateSchema) !== null && Ae !== void 0 ? Ae : !0,
        validateFormats: (pe = V.validateFormats) !== null && pe !== void 0 ? pe : !0,
        unicodeRegExp: (Qt = V.unicodeRegExp) !== null && Qt !== void 0 ? Qt : !0,
        int32range: (er = V.int32range) !== null && er !== void 0 ? er : !0,
        uriResolver: Vo
      };
    }
    class v {
      constructor(j = {}) {
        this.schemas = {}, this.refs = {}, this.formats = /* @__PURE__ */ Object.create(null), this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), j = this.opts = { ...j, ...h(j) };
        const { es5: D, lines: O } = this.opts.code;
        this.scope = new c.ValueScope({ scope: {}, prefixes: _, es5: D, lines: O }), this.logger = T(j.logger);
        const y = j.validateFormats;
        j.validateFormats = !1, this.RULES = (0, r.getRules)(), s.call(this, d, j, "NOT SUPPORTED"), s.call(this, m, j, "DEPRECATED", "warn"), this._metaOpts = N.call(this), j.formats && k.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), j.keywords && C.call(this, j.keywords), typeof j.meta == "object" && this.addMetaSchema(j.meta), u.call(this), j.validateFormats = y;
      }
      _addVocabularies() {
        this.addKeyword("$async");
      }
      _addDefaultMetaSchema() {
        const { $data: j, meta: D, schemaId: O } = this.opts;
        let y = S;
        O === "id" && (y = { ...S }, y.id = y.$id, delete y.$id), D && j && this.addMetaSchema(y, y[O], !1);
      }
      defaultMeta() {
        const { meta: j, schemaId: D } = this.opts;
        return this.opts.defaultMeta = typeof j == "object" ? j[D] || j : void 0;
      }
      validate(j, D) {
        let O;
        if (typeof j == "string") {
          if (O = this.getSchema(j), !O)
            throw new Error(`no schema with key or ref "${j}"`);
        } else
          O = this.compile(j);
        const y = O(D);
        return "$async" in O || (this.errors = O.errors), y;
      }
      compile(j, D) {
        const O = this._addSchema(j, D);
        return O.validate || this._compileSchemaEnv(O);
      }
      compileAsync(j, D) {
        if (typeof this.opts.loadSchema != "function")
          throw new Error("options.loadSchema should be a function");
        const { loadSchema: O } = this.opts;
        return y.call(this, j, D);
        async function y(Z, R) {
          await P.call(this, Z.$schema);
          const A = this._addSchema(Z, R);
          return A.validate || I.call(this, A);
        }
        async function P(Z) {
          Z && !this.getSchema(Z) && await y.call(this, { $ref: Z }, !0);
        }
        async function I(Z) {
          try {
            return this._compileSchemaEnv(Z);
          } catch (R) {
            if (!(R instanceof f.default))
              throw R;
            return K.call(this, R), await H.call(this, R.missingSchema), I.call(this, Z);
          }
        }
        function K({ missingSchema: Z, missingRef: R }) {
          if (this.refs[Z])
            throw new Error(`AnySchema ${Z} is loaded but ${R} cannot be resolved`);
        }
        async function H(Z) {
          const R = await ee.call(this, Z);
          this.refs[Z] || await P.call(this, R.$schema), this.refs[Z] || this.addSchema(R, Z, D);
        }
        async function ee(Z) {
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
      addSchema(j, D, O, y = this.opts.validateSchema) {
        if (Array.isArray(j)) {
          for (const I of j)
            this.addSchema(I, void 0, O, y);
          return this;
        }
        let P;
        if (typeof j == "object") {
          const { schemaId: I } = this.opts;
          if (P = j[I], P !== void 0 && typeof P != "string")
            throw new Error(`schema ${I} must be string`);
        }
        return D = (0, p.normalizeId)(D || P), this._checkUnique(D), this.schemas[D] = this._addSchema(j, O, D, y, !0), this;
      }
      // Add schema that will be used to validate other schemas
      // options in META_IGNORE_OPTIONS are alway set to false
      addMetaSchema(j, D, O = this.opts.validateSchema) {
        return this.addSchema(j, D, !0, O), this;
      }
      //  Validate schema against its meta-schema
      validateSchema(j, D) {
        if (typeof j == "boolean")
          return !0;
        let O;
        if (O = j.$schema, O !== void 0 && typeof O != "string")
          throw new Error("$schema must be a string");
        if (O = O || this.opts.defaultMeta || this.defaultMeta(), !O)
          return this.logger.warn("meta-schema not available"), this.errors = null, !0;
        const y = this.validate(O, j);
        if (!y && D) {
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
      getSchema(j) {
        let D;
        for (; typeof (D = i.call(this, j)) == "string"; )
          j = D;
        if (D === void 0) {
          const { schemaId: O } = this.opts, y = new a.SchemaEnv({ schema: {}, schemaId: O });
          if (D = a.resolveSchema.call(this, y, j), !D)
            return;
          this.refs[j] = D;
        }
        return D.validate || this._compileSchemaEnv(D);
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
            const D = i.call(this, j);
            return typeof D == "object" && this._cache.delete(D.schema), delete this.schemas[j], delete this.refs[j], this;
          }
          case "object": {
            const D = j;
            this._cache.delete(D);
            let O = j[this.opts.schemaId];
            return O && (O = (0, p.normalizeId)(O), delete this.schemas[O], delete this.refs[O]), this;
          }
          default:
            throw new Error("ajv.removeSchema: invalid parameter");
        }
      }
      // add "vocabulary" - a collection of keywords
      addVocabulary(j) {
        for (const D of j)
          this.addKeyword(D);
        return this;
      }
      addKeyword(j, D) {
        let O;
        if (typeof j == "string")
          O = j, typeof D == "object" && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), D.keyword = O);
        else if (typeof j == "object" && D === void 0) {
          if (D = j, O = D.keyword, Array.isArray(O) && !O.length)
            throw new Error("addKeywords: keyword must be string or non-empty array");
        } else
          throw new Error("invalid addKeywords parameters");
        if (B.call(this, O, D), !D)
          return (0, $.eachItem)(O, (P) => Q.call(this, P)), this;
        fe.call(this, D);
        const y = {
          ...D,
          type: (0, g.getJSONTypes)(D.type),
          schemaType: (0, g.getJSONTypes)(D.schemaType)
        };
        return (0, $.eachItem)(O, y.type.length === 0 ? (P) => Q.call(this, P, y) : (P) => y.type.forEach((I) => Q.call(this, P, y, I))), this;
      }
      getKeyword(j) {
        const D = this.RULES.all[j];
        return typeof D == "object" ? D.definition : !!D;
      }
      // Remove keyword
      removeKeyword(j) {
        const { RULES: D } = this;
        delete D.keywords[j], delete D.all[j];
        for (const O of D.rules) {
          const y = O.rules.findIndex((P) => P.keyword === j);
          y >= 0 && O.rules.splice(y, 1);
        }
        return this;
      }
      // Add format
      addFormat(j, D) {
        return typeof D == "string" && (D = new RegExp(D)), this.formats[j] = D, this;
      }
      errorsText(j = this.errors, { separator: D = ", ", dataVar: O = "data" } = {}) {
        return !j || j.length === 0 ? "No errors" : j.map((y) => `${O}${y.instancePath} ${y.message}`).reduce((y, P) => y + D + P);
      }
      $dataMetaSchema(j, D) {
        const O = this.RULES.all;
        j = JSON.parse(JSON.stringify(j));
        for (const y of D) {
          const P = y.split("/").slice(1);
          let I = j;
          for (const K of P)
            I = I[K];
          for (const K in O) {
            const H = O[K];
            if (typeof H != "object")
              continue;
            const { $data: ee } = H.definition, Z = I[K];
            ee && Z && (I[K] = me(Z));
          }
        }
        return j;
      }
      _removeAllSchemas(j, D) {
        for (const O in j) {
          const y = j[O];
          (!D || D.test(O)) && (typeof y == "string" ? delete j[O] : y && !y.meta && (this._cache.delete(y.schema), delete j[O]));
        }
      }
      _addSchema(j, D, O, y = this.opts.validateSchema, P = this.opts.addUsedSchema) {
        let I;
        const { schemaId: K } = this.opts;
        if (typeof j == "object")
          I = j[K];
        else {
          if (this.opts.jtd)
            throw new Error("schema must be object");
          if (typeof j != "boolean")
            throw new Error("schema must be object or boolean");
        }
        let H = this._cache.get(j);
        if (H !== void 0)
          return H;
        O = (0, p.normalizeId)(I || O);
        const ee = p.getSchemaRefs.call(this, j, O);
        return H = new a.SchemaEnv({ schema: j, schemaId: K, meta: D, baseId: O, localRefs: ee }), this._cache.set(H.schema, H), P && !O.startsWith("#") && (O && this._checkUnique(O), this.refs[O] = H), y && this.validateSchema(j, !0), H;
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
        const D = this.opts;
        this.opts = this._metaOpts;
        try {
          a.compileSchema.call(this, j);
        } finally {
          this.opts = D;
        }
      }
    }
    v.ValidationError = n.default, v.MissingRefError = f.default, e.default = v;
    function s(V, j, D, O = "error") {
      for (const y in V) {
        const P = y;
        P in j && this.logger[O](`${D}: option ${y}. ${V[P]}`);
      }
    }
    function i(V) {
      return V = (0, p.normalizeId)(V), this.schemas[V] || this.refs[V];
    }
    function u() {
      const V = this.opts.schemas;
      if (V)
        if (Array.isArray(V))
          this.addSchema(V);
        else
          for (const j in V)
            this.addSchema(V[j], j);
    }
    function k() {
      for (const V in this.opts.formats) {
        const j = this.opts.formats[V];
        j && this.addFormat(V, j);
      }
    }
    function C(V) {
      if (Array.isArray(V)) {
        this.addVocabulary(V);
        return;
      }
      this.logger.warn("keywords option as map is deprecated, pass array");
      for (const j in V) {
        const D = V[j];
        D.keyword || (D.keyword = j), this.addKeyword(D);
      }
    }
    function N() {
      const V = { ...this.opts };
      for (const j of E)
        delete V[j];
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
    function B(V, j) {
      const { RULES: D } = this;
      if ((0, $.eachItem)(V, (O) => {
        if (D.keywords[O])
          throw new Error(`Keyword ${O} is already defined`);
        if (!q.test(O))
          throw new Error(`Keyword ${O} has invalid name`);
      }), !!j && j.$data && !("code" in j || "validate" in j))
        throw new Error('$data keyword must have "code" or "validate" function');
    }
    function Q(V, j, D) {
      var O;
      const y = j?.post;
      if (D && y)
        throw new Error('keyword with "post" flag cannot have "type"');
      const { RULES: P } = this;
      let I = y ? P.post : P.rules.find(({ type: H }) => H === D);
      if (I || (I = { type: D, rules: [] }, P.rules.push(I)), P.keywords[V] = !0, !j)
        return;
      const K = {
        keyword: V,
        definition: {
          ...j,
          type: (0, g.getJSONTypes)(j.type),
          schemaType: (0, g.getJSONTypes)(j.schemaType)
        }
      };
      j.before ? te.call(this, I, K, j.before) : I.rules.push(K), P.all[V] = K, (O = j.implements) === null || O === void 0 || O.forEach((H) => this.addKeyword(H));
    }
    function te(V, j, D) {
      const O = V.rules.findIndex((y) => y.keyword === D);
      O >= 0 ? V.rules.splice(O, 0, j) : (V.rules.push(j), this.logger.warn(`rule ${D} is not defined`));
    }
    function fe(V) {
      let { metaSchema: j } = V;
      j !== void 0 && (V.$data && this.opts.$data && (j = me(j)), V.validateSchema = this.compile(j, !0));
    }
    const Y = {
      $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
    };
    function me(V) {
      return { anyOf: [V, Y] };
    }
  })(nr)), nr;
}
var Ze = {}, Qe = {}, et = {}, un;
function ys() {
  if (un) return et;
  un = 1, Object.defineProperty(et, "__esModule", { value: !0 });
  const e = {
    keyword: "id",
    code() {
      throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
    }
  };
  return et.default = e, et;
}
var Ee = {}, fn;
function Sr() {
  if (fn) return Ee;
  fn = 1, Object.defineProperty(Ee, "__esModule", { value: !0 }), Ee.callRef = Ee.getValidate = void 0;
  const e = /* @__PURE__ */ Xt(), t = /* @__PURE__ */ _e(), o = /* @__PURE__ */ G(), n = /* @__PURE__ */ ve(), f = /* @__PURE__ */ Zt(), r = /* @__PURE__ */ X(), a = {
    keyword: "$ref",
    schemaType: "string",
    code(g) {
      const { gen: $, schema: S, it: w } = g, { baseId: b, schemaEnv: E, validateName: _, opts: d, self: m } = w, { root: l } = E;
      if ((S === "#" || S === "#/") && b === l.baseId)
        return v();
      const h = f.resolveRef.call(m, l, b, S);
      if (h === void 0)
        throw new e.default(w.opts.uriResolver, b, S);
      if (h instanceof f.SchemaEnv)
        return s(h);
      return i(h);
      function v() {
        if (E === l)
          return p(g, _, E, E.$async);
        const u = $.scopeValue("root", { ref: l });
        return p(g, (0, o._)`${u}.validate`, l, l.$async);
      }
      function s(u) {
        const k = c(g, u);
        p(g, k, u, u.$async);
      }
      function i(u) {
        const k = $.scopeValue("schema", d.code.source === !0 ? { ref: u, code: (0, o.stringify)(u) } : { ref: u }), C = $.name("valid"), N = g.subschema({
          schema: u,
          dataTypes: [],
          schemaPath: o.nil,
          topSchemaRef: k,
          errSchemaPath: S
        }, C);
        g.mergeEvaluated(N), g.ok(C);
      }
    }
  };
  function c(g, $) {
    const { gen: S } = g;
    return $.validate ? S.scopeValue("validate", { ref: $.validate }) : (0, o._)`${S.scopeValue("wrapper", { ref: $ })}.validate`;
  }
  Ee.getValidate = c;
  function p(g, $, S, w) {
    const { gen: b, it: E } = g, { allErrors: _, schemaEnv: d, opts: m } = E, l = m.passContext ? n.default.this : o.nil;
    w ? h() : v();
    function h() {
      if (!d.$async)
        throw new Error("async schema referenced by sync schema");
      const u = b.let("valid");
      b.try(() => {
        b.code((0, o._)`await ${(0, t.callValidateCode)(g, $, l)}`), i($), _ || b.assign(u, !0);
      }, (k) => {
        b.if((0, o._)`!(${k} instanceof ${E.ValidationError})`, () => b.throw(k)), s(k), _ || b.assign(u, !1);
      }), g.ok(u);
    }
    function v() {
      g.result((0, t.callValidateCode)(g, $, l), () => i($), () => s($));
    }
    function s(u) {
      const k = (0, o._)`${u}.errors`;
      b.assign(n.default.vErrors, (0, o._)`${n.default.vErrors} === null ? ${k} : ${n.default.vErrors}.concat(${k})`), b.assign(n.default.errors, (0, o._)`${n.default.vErrors}.length`);
    }
    function i(u) {
      var k;
      if (!E.opts.unevaluated)
        return;
      const C = (k = S?.validate) === null || k === void 0 ? void 0 : k.evaluated;
      if (E.props !== !0)
        if (C && !C.dynamicProps)
          C.props !== void 0 && (E.props = r.mergeEvaluated.props(b, C.props, E.props));
        else {
          const N = b.var("props", (0, o._)`${u}.evaluated.props`);
          E.props = r.mergeEvaluated.props(b, N, E.props, o.Name);
        }
      if (E.items !== !0)
        if (C && !C.dynamicItems)
          C.items !== void 0 && (E.items = r.mergeEvaluated.items(b, C.items, E.items));
        else {
          const N = b.var("items", (0, o._)`${u}.evaluated.items`);
          E.items = r.mergeEvaluated.items(b, N, E.items, o.Name);
        }
    }
  }
  return Ee.callRef = p, Ee.default = a, Ee;
}
var pn;
function gs() {
  if (pn) return Qe;
  pn = 1, Object.defineProperty(Qe, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ys(), t = /* @__PURE__ */ Sr(), o = [
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
var tt = {}, rt = {}, hn;
function $s() {
  if (hn) return rt;
  hn = 1, Object.defineProperty(rt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), t = e.operators, o = {
    maximum: { okStr: "<=", ok: t.LTE, fail: t.GT },
    minimum: { okStr: ">=", ok: t.GTE, fail: t.LT },
    exclusiveMaximum: { okStr: "<", ok: t.LT, fail: t.GTE },
    exclusiveMinimum: { okStr: ">", ok: t.GT, fail: t.LTE }
  }, n = {
    message: ({ keyword: r, schemaCode: a }) => (0, e.str)`must be ${o[r].okStr} ${a}`,
    params: ({ keyword: r, schemaCode: a }) => (0, e._)`{comparison: ${o[r].okStr}, limit: ${a}}`
  }, f = {
    keyword: Object.keys(o),
    type: "number",
    schemaType: "number",
    $data: !0,
    error: n,
    code(r) {
      const { keyword: a, data: c, schemaCode: p } = r;
      r.fail$data((0, e._)`${c} ${o[a].fail} ${p} || isNaN(${c})`);
    }
  };
  return rt.default = f, rt;
}
var nt = {}, mn;
function vs() {
  if (mn) return nt;
  mn = 1, Object.defineProperty(nt, "__esModule", { value: !0 });
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
      const { gen: f, data: r, schemaCode: a, it: c } = n, p = c.opts.multipleOfPrecision, g = f.let("res"), $ = p ? (0, e._)`Math.abs(Math.round(${g}) - ${g}) > 1e-${p}` : (0, e._)`${g} !== parseInt(${g})`;
      n.fail$data((0, e._)`(${a} === 0 || (${g} = ${r}/${a}, ${$}))`);
    }
  };
  return nt.default = o, nt;
}
var ot = {}, st = {}, yn;
function _s() {
  if (yn) return st;
  yn = 1, Object.defineProperty(st, "__esModule", { value: !0 });
  function e(t) {
    const o = t.length;
    let n = 0, f = 0, r;
    for (; f < o; )
      n++, r = t.charCodeAt(f++), r >= 55296 && r <= 56319 && f < o && (r = t.charCodeAt(f), (r & 64512) === 56320 && f++);
    return n;
  }
  return st.default = e, e.code = 'require("ajv/dist/runtime/ucs2length").default', st;
}
var gn;
function bs() {
  if (gn) return ot;
  gn = 1, Object.defineProperty(ot, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), o = /* @__PURE__ */ _s(), f = {
    keyword: ["maxLength", "minLength"],
    type: "string",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: r, schemaCode: a }) {
        const c = r === "maxLength" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${c} than ${a} characters`;
      },
      params: ({ schemaCode: r }) => (0, e._)`{limit: ${r}}`
    },
    code(r) {
      const { keyword: a, data: c, schemaCode: p, it: g } = r, $ = a === "maxLength" ? e.operators.GT : e.operators.LT, S = g.opts.unicode === !1 ? (0, e._)`${c}.length` : (0, e._)`${(0, t.useFunc)(r.gen, o.default)}(${c})`;
      r.fail$data((0, e._)`${S} ${$} ${p}`);
    }
  };
  return ot.default = f, ot;
}
var at = {}, $n;
function ws() {
  if ($n) return at;
  $n = 1, Object.defineProperty(at, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ _e(), t = /* @__PURE__ */ X(), o = /* @__PURE__ */ G(), f = {
    keyword: "pattern",
    type: "string",
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: r }) => (0, o.str)`must match pattern "${r}"`,
      params: ({ schemaCode: r }) => (0, o._)`{pattern: ${r}}`
    },
    code(r) {
      const { gen: a, data: c, $data: p, schema: g, schemaCode: $, it: S } = r, w = S.opts.unicodeRegExp ? "u" : "";
      if (p) {
        const { regExp: b } = S.opts.code, E = b.code === "new RegExp" ? (0, o._)`new RegExp` : (0, t.useFunc)(a, b), _ = a.let("valid");
        a.try(() => a.assign(_, (0, o._)`${E}(${$}, ${w}).test(${c})`), () => a.assign(_, !1)), r.fail$data((0, o._)`!${_}`);
      } else {
        const b = (0, e.usePattern)(r, g);
        r.fail$data((0, o._)`!${b}.test(${c})`);
      }
    }
  };
  return at.default = f, at;
}
var it = {}, vn;
function Ss() {
  if (vn) return it;
  vn = 1, Object.defineProperty(it, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), o = {
    keyword: ["maxProperties", "minProperties"],
    type: "object",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: n, schemaCode: f }) {
        const r = n === "maxProperties" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${r} than ${f} properties`;
      },
      params: ({ schemaCode: n }) => (0, e._)`{limit: ${n}}`
    },
    code(n) {
      const { keyword: f, data: r, schemaCode: a } = n, c = f === "maxProperties" ? e.operators.GT : e.operators.LT;
      n.fail$data((0, e._)`Object.keys(${r}).length ${c} ${a}`);
    }
  };
  return it.default = o, it;
}
var ct = {}, _n;
function Es() {
  if (_n) return ct;
  _n = 1, Object.defineProperty(ct, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ _e(), t = /* @__PURE__ */ G(), o = /* @__PURE__ */ X(), f = {
    keyword: "required",
    type: "object",
    schemaType: "array",
    $data: !0,
    error: {
      message: ({ params: { missingProperty: r } }) => (0, t.str)`must have required property '${r}'`,
      params: ({ params: { missingProperty: r } }) => (0, t._)`{missingProperty: ${r}}`
    },
    code(r) {
      const { gen: a, schema: c, schemaCode: p, data: g, $data: $, it: S } = r, { opts: w } = S;
      if (!$ && c.length === 0)
        return;
      const b = c.length >= w.loopRequired;
      if (S.allErrors ? E() : _(), w.strictRequired) {
        const l = r.parentSchema.properties, { definedProperties: h } = r.it;
        for (const v of c)
          if (l?.[v] === void 0 && !h.has(v)) {
            const s = S.schemaEnv.baseId + S.errSchemaPath, i = `required property "${v}" is not defined at "${s}" (strictRequired)`;
            (0, o.checkStrictMode)(S, i, S.opts.strictRequired);
          }
      }
      function E() {
        if (b || $)
          r.block$data(t.nil, d);
        else
          for (const l of c)
            (0, e.checkReportMissingProp)(r, l);
      }
      function _() {
        const l = a.let("missing");
        if (b || $) {
          const h = a.let("valid", !0);
          r.block$data(h, () => m(l, h)), r.ok(h);
        } else
          a.if((0, e.checkMissingProp)(r, c, l)), (0, e.reportMissingProp)(r, l), a.else();
      }
      function d() {
        a.forOf("prop", p, (l) => {
          r.setParams({ missingProperty: l }), a.if((0, e.noPropertyInData)(a, g, l, w.ownProperties), () => r.error());
        });
      }
      function m(l, h) {
        r.setParams({ missingProperty: l }), a.forOf(l, p, () => {
          a.assign(h, (0, e.propertyInData)(a, g, l, w.ownProperties)), a.if((0, t.not)(h), () => {
            r.error(), a.break();
          });
        }, t.nil);
      }
    }
  };
  return ct.default = f, ct;
}
var lt = {}, bn;
function Ps() {
  if (bn) return lt;
  bn = 1, Object.defineProperty(lt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), o = {
    keyword: ["maxItems", "minItems"],
    type: "array",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: n, schemaCode: f }) {
        const r = n === "maxItems" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${r} than ${f} items`;
      },
      params: ({ schemaCode: n }) => (0, e._)`{limit: ${n}}`
    },
    code(n) {
      const { keyword: f, data: r, schemaCode: a } = n, c = f === "maxItems" ? e.operators.GT : e.operators.LT;
      n.fail$data((0, e._)`${r}.length ${c} ${a}`);
    }
  };
  return lt.default = o, lt;
}
var dt = {}, ut = {}, wn;
function Er() {
  if (wn) return ut;
  wn = 1, Object.defineProperty(ut, "__esModule", { value: !0 });
  const e = Po();
  return e.code = 'require("ajv/dist/runtime/equal").default', ut.default = e, ut;
}
var Sn;
function ks() {
  if (Sn) return dt;
  Sn = 1, Object.defineProperty(dt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ut(), t = /* @__PURE__ */ G(), o = /* @__PURE__ */ X(), n = /* @__PURE__ */ Er(), r = {
    keyword: "uniqueItems",
    type: "array",
    schemaType: "boolean",
    $data: !0,
    error: {
      message: ({ params: { i: a, j: c } }) => (0, t.str)`must NOT have duplicate items (items ## ${c} and ${a} are identical)`,
      params: ({ params: { i: a, j: c } }) => (0, t._)`{i: ${a}, j: ${c}}`
    },
    code(a) {
      const { gen: c, data: p, $data: g, schema: $, parentSchema: S, schemaCode: w, it: b } = a;
      if (!g && !$)
        return;
      const E = c.let("valid"), _ = S.items ? (0, e.getSchemaTypes)(S.items) : [];
      a.block$data(E, d, (0, t._)`${w} === false`), a.ok(E);
      function d() {
        const v = c.let("i", (0, t._)`${p}.length`), s = c.let("j");
        a.setParams({ i: v, j: s }), c.assign(E, !0), c.if((0, t._)`${v} > 1`, () => (m() ? l : h)(v, s));
      }
      function m() {
        return _.length > 0 && !_.some((v) => v === "object" || v === "array");
      }
      function l(v, s) {
        const i = c.name("item"), u = (0, e.checkDataTypes)(_, i, b.opts.strictNumbers, e.DataType.Wrong), k = c.const("indices", (0, t._)`{}`);
        c.for((0, t._)`;${v}--;`, () => {
          c.let(i, (0, t._)`${p}[${v}]`), c.if(u, (0, t._)`continue`), _.length > 1 && c.if((0, t._)`typeof ${i} == "string"`, (0, t._)`${i} += "_"`), c.if((0, t._)`typeof ${k}[${i}] == "number"`, () => {
            c.assign(s, (0, t._)`${k}[${i}]`), a.error(), c.assign(E, !1).break();
          }).code((0, t._)`${k}[${i}] = ${v}`);
        });
      }
      function h(v, s) {
        const i = (0, o.useFunc)(c, n.default), u = c.name("outer");
        c.label(u).for((0, t._)`;${v}--;`, () => c.for((0, t._)`${s} = ${v}; ${s}--;`, () => c.if((0, t._)`${i}(${p}[${v}], ${p}[${s}])`, () => {
          a.error(), c.assign(E, !1).break(u);
        })));
      }
    }
  };
  return dt.default = r, dt;
}
var ft = {}, En;
function Cs() {
  if (En) return ft;
  En = 1, Object.defineProperty(ft, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), o = /* @__PURE__ */ Er(), f = {
    keyword: "const",
    $data: !0,
    error: {
      message: "must be equal to constant",
      params: ({ schemaCode: r }) => (0, e._)`{allowedValue: ${r}}`
    },
    code(r) {
      const { gen: a, data: c, $data: p, schemaCode: g, schema: $ } = r;
      p || $ && typeof $ == "object" ? r.fail$data((0, e._)`!${(0, t.useFunc)(a, o.default)}(${c}, ${g})`) : r.fail((0, e._)`${$} !== ${c}`);
    }
  };
  return ft.default = f, ft;
}
var pt = {}, Pn;
function Rs() {
  if (Pn) return pt;
  Pn = 1, Object.defineProperty(pt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), o = /* @__PURE__ */ Er(), f = {
    keyword: "enum",
    schemaType: "array",
    $data: !0,
    error: {
      message: "must be equal to one of the allowed values",
      params: ({ schemaCode: r }) => (0, e._)`{allowedValues: ${r}}`
    },
    code(r) {
      const { gen: a, data: c, $data: p, schema: g, schemaCode: $, it: S } = r;
      if (!p && g.length === 0)
        throw new Error("enum must have non-empty array");
      const w = g.length >= S.opts.loopEnum;
      let b;
      const E = () => b ?? (b = (0, t.useFunc)(a, o.default));
      let _;
      if (w || p)
        _ = a.let("valid"), r.block$data(_, d);
      else {
        if (!Array.isArray(g))
          throw new Error("ajv implementation error");
        const l = a.const("vSchema", $);
        _ = (0, e.or)(...g.map((h, v) => m(l, v)));
      }
      r.pass(_);
      function d() {
        a.assign(_, !1), a.forOf("v", $, (l) => a.if((0, e._)`${E()}(${c}, ${l})`, () => a.assign(_, !0).break()));
      }
      function m(l, h) {
        const v = g[h];
        return typeof v == "object" && v !== null ? (0, e._)`${E()}(${c}, ${l}[${h}])` : (0, e._)`${c} === ${v}`;
      }
    }
  };
  return pt.default = f, pt;
}
var kn;
function Ns() {
  if (kn) return tt;
  kn = 1, Object.defineProperty(tt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ $s(), t = /* @__PURE__ */ vs(), o = /* @__PURE__ */ bs(), n = /* @__PURE__ */ ws(), f = /* @__PURE__ */ Ss(), r = /* @__PURE__ */ Es(), a = /* @__PURE__ */ Ps(), c = /* @__PURE__ */ ks(), p = /* @__PURE__ */ Cs(), g = /* @__PURE__ */ Rs(), $ = [
    // number
    e.default,
    t.default,
    // string
    o.default,
    n.default,
    // object
    f.default,
    r.default,
    // array
    a.default,
    c.default,
    // any
    { keyword: "type", schemaType: ["string", "array"] },
    { keyword: "nullable", schemaType: "boolean" },
    p.default,
    g.default
  ];
  return tt.default = $, tt;
}
var ht = {}, Te = {}, Cn;
function Co() {
  if (Cn) return Te;
  Cn = 1, Object.defineProperty(Te, "__esModule", { value: !0 }), Te.validateAdditionalItems = void 0;
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
      const { parentSchema: a, it: c } = r, { items: p } = a;
      if (!Array.isArray(p)) {
        (0, t.checkStrictMode)(c, '"additionalItems" is ignored when "items" is not an array of schemas');
        return;
      }
      f(r, p);
    }
  };
  function f(r, a) {
    const { gen: c, schema: p, data: g, keyword: $, it: S } = r;
    S.items = !0;
    const w = c.const("len", (0, e._)`${g}.length`);
    if (p === !1)
      r.setParams({ len: a.length }), r.pass((0, e._)`${w} <= ${a.length}`);
    else if (typeof p == "object" && !(0, t.alwaysValidSchema)(S, p)) {
      const E = c.var("valid", (0, e._)`${w} <= ${a.length}`);
      c.if((0, e.not)(E), () => b(E)), r.ok(E);
    }
    function b(E) {
      c.forRange("i", a.length, w, (_) => {
        r.subschema({ keyword: $, dataProp: _, dataPropType: t.Type.Num }, E), S.allErrors || c.if((0, e.not)(E), () => c.break());
      });
    }
  }
  return Te.validateAdditionalItems = f, Te.default = n, Te;
}
var mt = {}, Me = {}, Rn;
function Ro() {
  if (Rn) return Me;
  Rn = 1, Object.defineProperty(Me, "__esModule", { value: !0 }), Me.validateTuple = void 0;
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), o = /* @__PURE__ */ _e(), n = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "array", "boolean"],
    before: "uniqueItems",
    code(r) {
      const { schema: a, it: c } = r;
      if (Array.isArray(a))
        return f(r, "additionalItems", a);
      c.items = !0, !(0, t.alwaysValidSchema)(c, a) && r.ok((0, o.validateArray)(r));
    }
  };
  function f(r, a, c = r.schema) {
    const { gen: p, parentSchema: g, data: $, keyword: S, it: w } = r;
    _(g), w.opts.unevaluated && c.length && w.items !== !0 && (w.items = t.mergeEvaluated.items(p, c.length, w.items));
    const b = p.name("valid"), E = p.const("len", (0, e._)`${$}.length`);
    c.forEach((d, m) => {
      (0, t.alwaysValidSchema)(w, d) || (p.if((0, e._)`${E} > ${m}`, () => r.subschema({
        keyword: S,
        schemaProp: m,
        dataProp: m
      }, b)), r.ok(b));
    });
    function _(d) {
      const { opts: m, errSchemaPath: l } = w, h = c.length, v = h === d.minItems && (h === d.maxItems || d[a] === !1);
      if (m.strictTuples && !v) {
        const s = `"${S}" is ${h}-tuple, but minItems or maxItems/${a} are not specified or different at path "${l}"`;
        (0, t.checkStrictMode)(w, s, m.strictTuples);
      }
    }
  }
  return Me.validateTuple = f, Me.default = n, Me;
}
var Nn;
function js() {
  if (Nn) return mt;
  Nn = 1, Object.defineProperty(mt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ro(), t = {
    keyword: "prefixItems",
    type: "array",
    schemaType: ["array"],
    before: "uniqueItems",
    code: (o) => (0, e.validateTuple)(o, "items")
  };
  return mt.default = t, mt;
}
var yt = {}, jn;
function As() {
  if (jn) return yt;
  jn = 1, Object.defineProperty(yt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), o = /* @__PURE__ */ _e(), n = /* @__PURE__ */ Co(), r = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    error: {
      message: ({ params: { len: a } }) => (0, e.str)`must NOT have more than ${a} items`,
      params: ({ params: { len: a } }) => (0, e._)`{limit: ${a}}`
    },
    code(a) {
      const { schema: c, parentSchema: p, it: g } = a, { prefixItems: $ } = p;
      g.items = !0, !(0, t.alwaysValidSchema)(g, c) && ($ ? (0, n.validateAdditionalItems)(a, $) : a.ok((0, o.validateArray)(a)));
    }
  };
  return yt.default = r, yt;
}
var gt = {}, An;
function Os() {
  if (An) return gt;
  An = 1, Object.defineProperty(gt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), n = {
    keyword: "contains",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    trackErrors: !0,
    error: {
      message: ({ params: { min: f, max: r } }) => r === void 0 ? (0, e.str)`must contain at least ${f} valid item(s)` : (0, e.str)`must contain at least ${f} and no more than ${r} valid item(s)`,
      params: ({ params: { min: f, max: r } }) => r === void 0 ? (0, e._)`{minContains: ${f}}` : (0, e._)`{minContains: ${f}, maxContains: ${r}}`
    },
    code(f) {
      const { gen: r, schema: a, parentSchema: c, data: p, it: g } = f;
      let $, S;
      const { minContains: w, maxContains: b } = c;
      g.opts.next ? ($ = w === void 0 ? 1 : w, S = b) : $ = 1;
      const E = r.const("len", (0, e._)`${p}.length`);
      if (f.setParams({ min: $, max: S }), S === void 0 && $ === 0) {
        (0, t.checkStrictMode)(g, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
        return;
      }
      if (S !== void 0 && $ > S) {
        (0, t.checkStrictMode)(g, '"minContains" > "maxContains" is always invalid'), f.fail();
        return;
      }
      if ((0, t.alwaysValidSchema)(g, a)) {
        let h = (0, e._)`${E} >= ${$}`;
        S !== void 0 && (h = (0, e._)`${h} && ${E} <= ${S}`), f.pass(h);
        return;
      }
      g.items = !0;
      const _ = r.name("valid");
      S === void 0 && $ === 1 ? m(_, () => r.if(_, () => r.break())) : $ === 0 ? (r.let(_, !0), S !== void 0 && r.if((0, e._)`${p}.length > 0`, d)) : (r.let(_, !1), d()), f.result(_, () => f.reset());
      function d() {
        const h = r.name("_valid"), v = r.let("count", 0);
        m(h, () => r.if(h, () => l(v)));
      }
      function m(h, v) {
        r.forRange("i", 0, E, (s) => {
          f.subschema({
            keyword: "contains",
            dataProp: s,
            dataPropType: t.Type.Num,
            compositeRule: !0
          }, h), v();
        });
      }
      function l(h) {
        r.code((0, e._)`${h}++`), S === void 0 ? r.if((0, e._)`${h} >= ${$}`, () => r.assign(_, !0).break()) : (r.if((0, e._)`${h} > ${S}`, () => r.assign(_, !1).break()), $ === 1 ? r.assign(_, !0) : r.if((0, e._)`${h} >= ${$}`, () => r.assign(_, !0)));
      }
    }
  };
  return gt.default = n, gt;
}
var fr = {}, On;
function Pr() {
  return On || (On = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
    const t = /* @__PURE__ */ G(), o = /* @__PURE__ */ X(), n = /* @__PURE__ */ _e();
    e.error = {
      message: ({ params: { property: p, depsCount: g, deps: $ } }) => {
        const S = g === 1 ? "property" : "properties";
        return (0, t.str)`must have ${S} ${$} when property ${p} is present`;
      },
      params: ({ params: { property: p, depsCount: g, deps: $, missingProperty: S } }) => (0, t._)`{property: ${p},
    missingProperty: ${S},
    depsCount: ${g},
    deps: ${$}}`
      // TODO change to reference
    };
    const f = {
      keyword: "dependencies",
      type: "object",
      schemaType: "object",
      error: e.error,
      code(p) {
        const [g, $] = r(p);
        a(p, g), c(p, $);
      }
    };
    function r({ schema: p }) {
      const g = {}, $ = {};
      for (const S in p) {
        if (S === "__proto__")
          continue;
        const w = Array.isArray(p[S]) ? g : $;
        w[S] = p[S];
      }
      return [g, $];
    }
    function a(p, g = p.schema) {
      const { gen: $, data: S, it: w } = p;
      if (Object.keys(g).length === 0)
        return;
      const b = $.let("missing");
      for (const E in g) {
        const _ = g[E];
        if (_.length === 0)
          continue;
        const d = (0, n.propertyInData)($, S, E, w.opts.ownProperties);
        p.setParams({
          property: E,
          depsCount: _.length,
          deps: _.join(", ")
        }), w.allErrors ? $.if(d, () => {
          for (const m of _)
            (0, n.checkReportMissingProp)(p, m);
        }) : ($.if((0, t._)`${d} && (${(0, n.checkMissingProp)(p, _, b)})`), (0, n.reportMissingProp)(p, b), $.else());
      }
    }
    e.validatePropertyDeps = a;
    function c(p, g = p.schema) {
      const { gen: $, data: S, keyword: w, it: b } = p, E = $.name("valid");
      for (const _ in g)
        (0, o.alwaysValidSchema)(b, g[_]) || ($.if(
          (0, n.propertyInData)($, S, _, b.opts.ownProperties),
          () => {
            const d = p.subschema({ keyword: w, schemaProp: _ }, E);
            p.mergeValidEvaluated(d, E);
          },
          () => $.var(E, !0)
          // TODO var
        ), p.ok(E));
    }
    e.validateSchemaDeps = c, e.default = f;
  })(fr)), fr;
}
var $t = {}, Tn;
function Ts() {
  if (Tn) return $t;
  Tn = 1, Object.defineProperty($t, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), n = {
    keyword: "propertyNames",
    type: "object",
    schemaType: ["object", "boolean"],
    error: {
      message: "property name must be valid",
      params: ({ params: f }) => (0, e._)`{propertyName: ${f.propertyName}}`
    },
    code(f) {
      const { gen: r, schema: a, data: c, it: p } = f;
      if ((0, t.alwaysValidSchema)(p, a))
        return;
      const g = r.name("valid");
      r.forIn("key", c, ($) => {
        f.setParams({ propertyName: $ }), f.subschema({
          keyword: "propertyNames",
          data: $,
          dataTypes: ["string"],
          propertyName: $,
          compositeRule: !0
        }, g), r.if((0, e.not)(g), () => {
          f.error(!0), p.allErrors || r.break();
        });
      }), f.ok(g);
    }
  };
  return $t.default = n, $t;
}
var vt = {}, Mn;
function No() {
  if (Mn) return vt;
  Mn = 1, Object.defineProperty(vt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ _e(), t = /* @__PURE__ */ G(), o = /* @__PURE__ */ ve(), n = /* @__PURE__ */ X(), r = {
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
      const { gen: c, schema: p, parentSchema: g, data: $, errsCount: S, it: w } = a;
      if (!S)
        throw new Error("ajv implementation error");
      const { allErrors: b, opts: E } = w;
      if (w.props = !0, E.removeAdditional !== "all" && (0, n.alwaysValidSchema)(w, p))
        return;
      const _ = (0, e.allSchemaProperties)(g.properties), d = (0, e.allSchemaProperties)(g.patternProperties);
      m(), a.ok((0, t._)`${S} === ${o.default.errors}`);
      function m() {
        c.forIn("key", $, (i) => {
          !_.length && !d.length ? v(i) : c.if(l(i), () => v(i));
        });
      }
      function l(i) {
        let u;
        if (_.length > 8) {
          const k = (0, n.schemaRefOrVal)(w, g.properties, "properties");
          u = (0, e.isOwnProperty)(c, k, i);
        } else _.length ? u = (0, t.or)(..._.map((k) => (0, t._)`${i} === ${k}`)) : u = t.nil;
        return d.length && (u = (0, t.or)(u, ...d.map((k) => (0, t._)`${(0, e.usePattern)(a, k)}.test(${i})`))), (0, t.not)(u);
      }
      function h(i) {
        c.code((0, t._)`delete ${$}[${i}]`);
      }
      function v(i) {
        if (E.removeAdditional === "all" || E.removeAdditional && p === !1) {
          h(i);
          return;
        }
        if (p === !1) {
          a.setParams({ additionalProperty: i }), a.error(), b || c.break();
          return;
        }
        if (typeof p == "object" && !(0, n.alwaysValidSchema)(w, p)) {
          const u = c.name("valid");
          E.removeAdditional === "failing" ? (s(i, u, !1), c.if((0, t.not)(u), () => {
            a.reset(), h(i);
          })) : (s(i, u), b || c.if((0, t.not)(u), () => c.break()));
        }
      }
      function s(i, u, k) {
        const C = {
          keyword: "additionalProperties",
          dataProp: i,
          dataPropType: n.Type.Str
        };
        k === !1 && Object.assign(C, {
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }), a.subschema(C, u);
      }
    }
  };
  return vt.default = r, vt;
}
var _t = {}, In;
function Ms() {
  if (In) return _t;
  In = 1, Object.defineProperty(_t, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Yt(), t = /* @__PURE__ */ _e(), o = /* @__PURE__ */ X(), n = /* @__PURE__ */ No(), f = {
    keyword: "properties",
    type: "object",
    schemaType: "object",
    code(r) {
      const { gen: a, schema: c, parentSchema: p, data: g, it: $ } = r;
      $.opts.removeAdditional === "all" && p.additionalProperties === void 0 && n.default.code(new e.KeywordCxt($, n.default, "additionalProperties"));
      const S = (0, t.allSchemaProperties)(c);
      for (const d of S)
        $.definedProperties.add(d);
      $.opts.unevaluated && S.length && $.props !== !0 && ($.props = o.mergeEvaluated.props(a, (0, o.toHash)(S), $.props));
      const w = S.filter((d) => !(0, o.alwaysValidSchema)($, c[d]));
      if (w.length === 0)
        return;
      const b = a.name("valid");
      for (const d of w)
        E(d) ? _(d) : (a.if((0, t.propertyInData)(a, g, d, $.opts.ownProperties)), _(d), $.allErrors || a.else().var(b, !0), a.endIf()), r.it.definedProperties.add(d), r.ok(b);
      function E(d) {
        return $.opts.useDefaults && !$.compositeRule && c[d].default !== void 0;
      }
      function _(d) {
        r.subschema({
          keyword: "properties",
          schemaProp: d,
          dataProp: d
        }, b);
      }
    }
  };
  return _t.default = f, _t;
}
var bt = {}, qn;
function Is() {
  if (qn) return bt;
  qn = 1, Object.defineProperty(bt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ _e(), t = /* @__PURE__ */ G(), o = /* @__PURE__ */ X(), n = /* @__PURE__ */ X(), f = {
    keyword: "patternProperties",
    type: "object",
    schemaType: "object",
    code(r) {
      const { gen: a, schema: c, data: p, parentSchema: g, it: $ } = r, { opts: S } = $, w = (0, e.allSchemaProperties)(c), b = w.filter((v) => (0, o.alwaysValidSchema)($, c[v]));
      if (w.length === 0 || b.length === w.length && (!$.opts.unevaluated || $.props === !0))
        return;
      const E = S.strictSchema && !S.allowMatchingProperties && g.properties, _ = a.name("valid");
      $.props !== !0 && !($.props instanceof t.Name) && ($.props = (0, n.evaluatedPropsToName)(a, $.props));
      const { props: d } = $;
      m();
      function m() {
        for (const v of w)
          E && l(v), $.allErrors ? h(v) : (a.var(_, !0), h(v), a.if(_));
      }
      function l(v) {
        for (const s in E)
          new RegExp(v).test(s) && (0, o.checkStrictMode)($, `property ${s} matches pattern ${v} (use allowMatchingProperties)`);
      }
      function h(v) {
        a.forIn("key", p, (s) => {
          a.if((0, t._)`${(0, e.usePattern)(r, v)}.test(${s})`, () => {
            const i = b.includes(v);
            i || r.subschema({
              keyword: "patternProperties",
              schemaProp: v,
              dataProp: s,
              dataPropType: n.Type.Str
            }, _), $.opts.unevaluated && d !== !0 ? a.assign((0, t._)`${d}[${s}]`, !0) : !i && !$.allErrors && a.if((0, t.not)(_), () => a.break());
          });
        });
      }
    }
  };
  return bt.default = f, bt;
}
var wt = {}, xn;
function qs() {
  if (xn) return wt;
  xn = 1, Object.defineProperty(wt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ X(), t = {
    keyword: "not",
    schemaType: ["object", "boolean"],
    trackErrors: !0,
    code(o) {
      const { gen: n, schema: f, it: r } = o;
      if ((0, e.alwaysValidSchema)(r, f)) {
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
function xs() {
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
var Et = {}, zn;
function Ds() {
  if (zn) return Et;
  zn = 1, Object.defineProperty(Et, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), n = {
    keyword: "oneOf",
    schemaType: "array",
    trackErrors: !0,
    error: {
      message: "must match exactly one schema in oneOf",
      params: ({ params: f }) => (0, e._)`{passingSchemas: ${f.passing}}`
    },
    code(f) {
      const { gen: r, schema: a, parentSchema: c, it: p } = f;
      if (!Array.isArray(a))
        throw new Error("ajv implementation error");
      if (p.opts.discriminator && c.discriminator)
        return;
      const g = a, $ = r.let("valid", !1), S = r.let("passing", null), w = r.name("_valid");
      f.setParams({ passing: S }), r.block(b), f.result($, () => f.reset(), () => f.error(!0));
      function b() {
        g.forEach((E, _) => {
          let d;
          (0, t.alwaysValidSchema)(p, E) ? r.var(w, !0) : d = f.subschema({
            keyword: "oneOf",
            schemaProp: _,
            compositeRule: !0
          }, w), _ > 0 && r.if((0, e._)`${w} && ${$}`).assign($, !1).assign(S, (0, e._)`[${S}, ${_}]`).else(), r.if(w, () => {
            r.assign($, !0), r.assign(S, _), d && f.mergeEvaluated(d, e.Name);
          });
        });
      }
    }
  };
  return Et.default = n, Et;
}
var Pt = {}, Vn;
function zs() {
  if (Vn) return Pt;
  Vn = 1, Object.defineProperty(Pt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ X(), t = {
    keyword: "allOf",
    schemaType: "array",
    code(o) {
      const { gen: n, schema: f, it: r } = o;
      if (!Array.isArray(f))
        throw new Error("ajv implementation error");
      const a = n.name("valid");
      f.forEach((c, p) => {
        if ((0, e.alwaysValidSchema)(r, c))
          return;
        const g = o.subschema({ keyword: "allOf", schemaProp: p }, a);
        o.ok(a), o.mergeEvaluated(g);
      });
    }
  };
  return Pt.default = t, Pt;
}
var kt = {}, Fn;
function Vs() {
  if (Fn) return kt;
  Fn = 1, Object.defineProperty(kt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), n = {
    keyword: "if",
    schemaType: ["object", "boolean"],
    trackErrors: !0,
    error: {
      message: ({ params: r }) => (0, e.str)`must match "${r.ifClause}" schema`,
      params: ({ params: r }) => (0, e._)`{failingKeyword: ${r.ifClause}}`
    },
    code(r) {
      const { gen: a, parentSchema: c, it: p } = r;
      c.then === void 0 && c.else === void 0 && (0, t.checkStrictMode)(p, '"if" without "then" and "else" is ignored');
      const g = f(p, "then"), $ = f(p, "else");
      if (!g && !$)
        return;
      const S = a.let("valid", !0), w = a.name("_valid");
      if (b(), r.reset(), g && $) {
        const _ = a.let("ifClause");
        r.setParams({ ifClause: _ }), a.if(w, E("then", _), E("else", _));
      } else g ? a.if(w, E("then")) : a.if((0, e.not)(w), E("else"));
      r.pass(S, () => r.error(!0));
      function b() {
        const _ = r.subschema({
          keyword: "if",
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }, w);
        r.mergeEvaluated(_);
      }
      function E(_, d) {
        return () => {
          const m = r.subschema({ keyword: _ }, w);
          a.assign(S, w), r.mergeValidEvaluated(m, S), d ? a.assign(d, (0, e._)`${_}`) : r.setParams({ ifClause: _ });
        };
      }
    }
  };
  function f(r, a) {
    const c = r.schema[a];
    return c !== void 0 && !(0, t.alwaysValidSchema)(r, c);
  }
  return kt.default = n, kt;
}
var Ct = {}, Ln;
function Fs() {
  if (Ln) return Ct;
  Ln = 1, Object.defineProperty(Ct, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ X(), t = {
    keyword: ["then", "else"],
    schemaType: ["object", "boolean"],
    code({ keyword: o, parentSchema: n, it: f }) {
      n.if === void 0 && (0, e.checkStrictMode)(f, `"${o}" without "if" is ignored`);
    }
  };
  return Ct.default = t, Ct;
}
var Bn;
function Ls() {
  if (Bn) return ht;
  Bn = 1, Object.defineProperty(ht, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Co(), t = /* @__PURE__ */ js(), o = /* @__PURE__ */ Ro(), n = /* @__PURE__ */ As(), f = /* @__PURE__ */ Os(), r = /* @__PURE__ */ Pr(), a = /* @__PURE__ */ Ts(), c = /* @__PURE__ */ No(), p = /* @__PURE__ */ Ms(), g = /* @__PURE__ */ Is(), $ = /* @__PURE__ */ qs(), S = /* @__PURE__ */ xs(), w = /* @__PURE__ */ Ds(), b = /* @__PURE__ */ zs(), E = /* @__PURE__ */ Vs(), _ = /* @__PURE__ */ Fs();
  function d(m = !1) {
    const l = [
      // any
      $.default,
      S.default,
      w.default,
      b.default,
      E.default,
      _.default,
      // object
      a.default,
      c.default,
      r.default,
      p.default,
      g.default
    ];
    return m ? l.push(t.default, n.default) : l.push(e.default, o.default), l.push(f.default), l;
  }
  return ht.default = d, ht;
}
var Rt = {}, Ie = {}, Kn;
function jo() {
  if (Kn) return Ie;
  Kn = 1, Object.defineProperty(Ie, "__esModule", { value: !0 }), Ie.dynamicAnchor = void 0;
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ ve(), o = /* @__PURE__ */ Zt(), n = /* @__PURE__ */ Sr(), f = {
    keyword: "$dynamicAnchor",
    schemaType: "string",
    code: (c) => r(c, c.schema)
  };
  function r(c, p) {
    const { gen: g, it: $ } = c;
    $.schemaEnv.root.dynamicAnchors[p] = !0;
    const S = (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(p)}`, w = $.errSchemaPath === "#" ? $.validateName : a(c);
    g.if((0, e._)`!${S}`, () => g.assign(S, w));
  }
  Ie.dynamicAnchor = r;
  function a(c) {
    const { schemaEnv: p, schema: g, self: $ } = c.it, { root: S, baseId: w, localRefs: b, meta: E } = p.root, { schemaId: _ } = $.opts, d = new o.SchemaEnv({ schema: g, schemaId: _, root: S, baseId: w, localRefs: b, meta: E });
    return o.compileSchema.call($, d), (0, n.getValidate)(c, d);
  }
  return Ie.default = f, Ie;
}
var qe = {}, Un;
function Ao() {
  if (Un) return qe;
  Un = 1, Object.defineProperty(qe, "__esModule", { value: !0 }), qe.dynamicRef = void 0;
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ ve(), o = /* @__PURE__ */ Sr(), n = {
    keyword: "$dynamicRef",
    schemaType: "string",
    code: (r) => f(r, r.schema)
  };
  function f(r, a) {
    const { gen: c, keyword: p, it: g } = r;
    if (a[0] !== "#")
      throw new Error(`"${p}" only supports hash fragment reference`);
    const $ = a.slice(1);
    if (g.allErrors)
      S();
    else {
      const b = c.let("valid", !1);
      S(b), r.ok(b);
    }
    function S(b) {
      if (g.schemaEnv.root.dynamicAnchors[$]) {
        const E = c.let("_v", (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)($)}`);
        c.if(E, w(E, b), w(g.validateName, b));
      } else
        w(g.validateName, b)();
    }
    function w(b, E) {
      return E ? () => c.block(() => {
        (0, o.callRef)(r, b), c.let(E, !0);
      }) : () => (0, o.callRef)(r, b);
    }
  }
  return qe.dynamicRef = f, qe.default = n, qe;
}
var Nt = {}, Hn;
function Bs() {
  if (Hn) return Nt;
  Hn = 1, Object.defineProperty(Nt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ jo(), t = /* @__PURE__ */ X(), o = {
    keyword: "$recursiveAnchor",
    schemaType: "boolean",
    code(n) {
      n.schema ? (0, e.dynamicAnchor)(n, "") : (0, t.checkStrictMode)(n.it, "$recursiveAnchor: false is ignored");
    }
  };
  return Nt.default = o, Nt;
}
var jt = {}, Gn;
function Ks() {
  if (Gn) return jt;
  Gn = 1, Object.defineProperty(jt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ao(), t = {
    keyword: "$recursiveRef",
    schemaType: "string",
    code: (o) => (0, e.dynamicRef)(o, o.schema)
  };
  return jt.default = t, jt;
}
var Jn;
function Us() {
  if (Jn) return Rt;
  Jn = 1, Object.defineProperty(Rt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ jo(), t = /* @__PURE__ */ Ao(), o = /* @__PURE__ */ Bs(), n = /* @__PURE__ */ Ks(), f = [e.default, t.default, o.default, n.default];
  return Rt.default = f, Rt;
}
var At = {}, Ot = {}, Wn;
function Hs() {
  if (Wn) return Ot;
  Wn = 1, Object.defineProperty(Ot, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Pr(), t = {
    keyword: "dependentRequired",
    type: "object",
    schemaType: "object",
    error: e.error,
    code: (o) => (0, e.validatePropertyDeps)(o)
  };
  return Ot.default = t, Ot;
}
var Tt = {}, Yn;
function Gs() {
  if (Yn) return Tt;
  Yn = 1, Object.defineProperty(Tt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Pr(), t = {
    keyword: "dependentSchemas",
    type: "object",
    schemaType: "object",
    code: (o) => (0, e.validateSchemaDeps)(o)
  };
  return Tt.default = t, Tt;
}
var Mt = {}, Xn;
function Js() {
  if (Xn) return Mt;
  Xn = 1, Object.defineProperty(Mt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ X(), t = {
    keyword: ["maxContains", "minContains"],
    type: "array",
    schemaType: "number",
    code({ keyword: o, parentSchema: n, it: f }) {
      n.contains === void 0 && (0, e.checkStrictMode)(f, `"${o}" without "contains" is ignored`);
    }
  };
  return Mt.default = t, Mt;
}
var Zn;
function Ws() {
  if (Zn) return At;
  Zn = 1, Object.defineProperty(At, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Hs(), t = /* @__PURE__ */ Gs(), o = /* @__PURE__ */ Js(), n = [e.default, t.default, o.default];
  return At.default = n, At;
}
var It = {}, qt = {}, Qn;
function Ys() {
  if (Qn) return qt;
  Qn = 1, Object.defineProperty(qt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), o = /* @__PURE__ */ ve(), f = {
    keyword: "unevaluatedProperties",
    type: "object",
    schemaType: ["boolean", "object"],
    trackErrors: !0,
    error: {
      message: "must NOT have unevaluated properties",
      params: ({ params: r }) => (0, e._)`{unevaluatedProperty: ${r.unevaluatedProperty}}`
    },
    code(r) {
      const { gen: a, schema: c, data: p, errsCount: g, it: $ } = r;
      if (!g)
        throw new Error("ajv implementation error");
      const { allErrors: S, props: w } = $;
      w instanceof e.Name ? a.if((0, e._)`${w} !== true`, () => a.forIn("key", p, (d) => a.if(E(w, d), () => b(d)))) : w !== !0 && a.forIn("key", p, (d) => w === void 0 ? b(d) : a.if(_(w, d), () => b(d))), $.props = !0, r.ok((0, e._)`${g} === ${o.default.errors}`);
      function b(d) {
        if (c === !1) {
          r.setParams({ unevaluatedProperty: d }), r.error(), S || a.break();
          return;
        }
        if (!(0, t.alwaysValidSchema)($, c)) {
          const m = a.name("valid");
          r.subschema({
            keyword: "unevaluatedProperties",
            dataProp: d,
            dataPropType: t.Type.Str
          }, m), S || a.if((0, e.not)(m), () => a.break());
        }
      }
      function E(d, m) {
        return (0, e._)`!${d} || !${d}[${m}]`;
      }
      function _(d, m) {
        const l = [];
        for (const h in d)
          d[h] === !0 && l.push((0, e._)`${m} !== ${h}`);
        return (0, e.and)(...l);
      }
    }
  };
  return qt.default = f, qt;
}
var xt = {}, eo;
function Xs() {
  if (eo) return xt;
  eo = 1, Object.defineProperty(xt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), n = {
    keyword: "unevaluatedItems",
    type: "array",
    schemaType: ["boolean", "object"],
    error: {
      message: ({ params: { len: f } }) => (0, e.str)`must NOT have more than ${f} items`,
      params: ({ params: { len: f } }) => (0, e._)`{limit: ${f}}`
    },
    code(f) {
      const { gen: r, schema: a, data: c, it: p } = f, g = p.items || 0;
      if (g === !0)
        return;
      const $ = r.const("len", (0, e._)`${c}.length`);
      if (a === !1)
        f.setParams({ len: g }), f.fail((0, e._)`${$} > ${g}`);
      else if (typeof a == "object" && !(0, t.alwaysValidSchema)(p, a)) {
        const w = r.var("valid", (0, e._)`${$} <= ${g}`);
        r.if((0, e.not)(w), () => S(w, g)), f.ok(w);
      }
      p.items = !0;
      function S(w, b) {
        r.forRange("i", b, $, (E) => {
          f.subschema({ keyword: "unevaluatedItems", dataProp: E, dataPropType: t.Type.Num }, w), p.allErrors || r.if((0, e.not)(w), () => r.break());
        });
      }
    }
  };
  return xt.default = n, xt;
}
var to;
function Zs() {
  if (to) return It;
  to = 1, Object.defineProperty(It, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ys(), t = /* @__PURE__ */ Xs(), o = [e.default, t.default];
  return It.default = o, It;
}
var Dt = {}, zt = {}, ro;
function Qs() {
  if (ro) return zt;
  ro = 1, Object.defineProperty(zt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), o = {
    keyword: "format",
    type: ["number", "string"],
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: n }) => (0, e.str)`must match format "${n}"`,
      params: ({ schemaCode: n }) => (0, e._)`{format: ${n}}`
    },
    code(n, f) {
      const { gen: r, data: a, $data: c, schema: p, schemaCode: g, it: $ } = n, { opts: S, errSchemaPath: w, schemaEnv: b, self: E } = $;
      if (!S.validateFormats)
        return;
      c ? _() : d();
      function _() {
        const m = r.scopeValue("formats", {
          ref: E.formats,
          code: S.code.formats
        }), l = r.const("fDef", (0, e._)`${m}[${g}]`), h = r.let("fType"), v = r.let("format");
        r.if((0, e._)`typeof ${l} == "object" && !(${l} instanceof RegExp)`, () => r.assign(h, (0, e._)`${l}.type || "string"`).assign(v, (0, e._)`${l}.validate`), () => r.assign(h, (0, e._)`"string"`).assign(v, l)), n.fail$data((0, e.or)(s(), i()));
        function s() {
          return S.strictSchema === !1 ? e.nil : (0, e._)`${g} && !${v}`;
        }
        function i() {
          const u = b.$async ? (0, e._)`(${l}.async ? await ${v}(${a}) : ${v}(${a}))` : (0, e._)`${v}(${a})`, k = (0, e._)`(typeof ${v} == "function" ? ${u} : ${v}.test(${a}))`;
          return (0, e._)`${v} && ${v} !== true && ${h} === ${f} && !${k}`;
        }
      }
      function d() {
        const m = E.formats[p];
        if (!m) {
          s();
          return;
        }
        if (m === !0)
          return;
        const [l, h, v] = i(m);
        l === f && n.pass(u());
        function s() {
          if (S.strictSchema === !1) {
            E.logger.warn(k());
            return;
          }
          throw new Error(k());
          function k() {
            return `unknown format "${p}" ignored in schema at path "${w}"`;
          }
        }
        function i(k) {
          const C = k instanceof RegExp ? (0, e.regexpCode)(k) : S.code.formats ? (0, e._)`${S.code.formats}${(0, e.getProperty)(p)}` : void 0, N = r.scopeValue("formats", { key: p, ref: k, code: C });
          return typeof k == "object" && !(k instanceof RegExp) ? [k.type || "string", k.validate, (0, e._)`${N}.validate`] : ["string", k, N];
        }
        function u() {
          if (typeof m == "object" && !(m instanceof RegExp) && m.async) {
            if (!b.$async)
              throw new Error("async format in sync schema");
            return (0, e._)`await ${v}(${a})`;
          }
          return typeof h == "function" ? (0, e._)`${v}(${a})` : (0, e._)`${v}.test(${a})`;
        }
      }
    }
  };
  return zt.default = o, zt;
}
var no;
function ea() {
  if (no) return Dt;
  no = 1, Object.defineProperty(Dt, "__esModule", { value: !0 });
  const t = [(/* @__PURE__ */ Qs()).default];
  return Dt.default = t, Dt;
}
var Ne = {}, oo;
function ta() {
  return oo || (oo = 1, Object.defineProperty(Ne, "__esModule", { value: !0 }), Ne.contentVocabulary = Ne.metadataVocabulary = void 0, Ne.metadataVocabulary = [
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
var so;
function ra() {
  if (so) return Ze;
  so = 1, Object.defineProperty(Ze, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ gs(), t = /* @__PURE__ */ Ns(), o = /* @__PURE__ */ Ls(), n = /* @__PURE__ */ Us(), f = /* @__PURE__ */ Ws(), r = /* @__PURE__ */ Zs(), a = /* @__PURE__ */ ea(), c = /* @__PURE__ */ ta(), p = [
    n.default,
    e.default,
    t.default,
    (0, o.default)(!0),
    a.default,
    c.metadataVocabulary,
    c.contentVocabulary,
    f.default,
    r.default
  ];
  return Ze.default = p, Ze;
}
var Vt = {}, Ke = {}, ao;
function na() {
  if (ao) return Ke;
  ao = 1, Object.defineProperty(Ke, "__esModule", { value: !0 }), Ke.DiscrError = void 0;
  var e;
  return (function(t) {
    t.Tag = "tag", t.Mapping = "mapping";
  })(e || (Ke.DiscrError = e = {})), Ke;
}
var io;
function oa() {
  if (io) return Vt;
  io = 1, Object.defineProperty(Vt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ na(), o = /* @__PURE__ */ Zt(), n = /* @__PURE__ */ Xt(), f = /* @__PURE__ */ X(), a = {
    keyword: "discriminator",
    type: "object",
    schemaType: "object",
    error: {
      message: ({ params: { discrError: c, tagName: p } }) => c === t.DiscrError.Tag ? `tag "${p}" must be string` : `value of tag "${p}" must be in oneOf`,
      params: ({ params: { discrError: c, tag: p, tagName: g } }) => (0, e._)`{error: ${c}, tag: ${g}, tagValue: ${p}}`
    },
    code(c) {
      const { gen: p, data: g, schema: $, parentSchema: S, it: w } = c, { oneOf: b } = S;
      if (!w.opts.discriminator)
        throw new Error("discriminator: requires discriminator option");
      const E = $.propertyName;
      if (typeof E != "string")
        throw new Error("discriminator: requires propertyName");
      if ($.mapping)
        throw new Error("discriminator: mapping is not supported");
      if (!b)
        throw new Error("discriminator: requires oneOf keyword");
      const _ = p.let("valid", !1), d = p.const("tag", (0, e._)`${g}${(0, e.getProperty)(E)}`);
      p.if((0, e._)`typeof ${d} == "string"`, () => m(), () => c.error(!1, { discrError: t.DiscrError.Tag, tag: d, tagName: E })), c.ok(_);
      function m() {
        const v = h();
        p.if(!1);
        for (const s in v)
          p.elseIf((0, e._)`${d} === ${s}`), p.assign(_, l(v[s]));
        p.else(), c.error(!1, { discrError: t.DiscrError.Mapping, tag: d, tagName: E }), p.endIf();
      }
      function l(v) {
        const s = p.name("valid"), i = c.subschema({ keyword: "oneOf", schemaProp: v }, s);
        return c.mergeEvaluated(i, e.Name), s;
      }
      function h() {
        var v;
        const s = {}, i = k(S);
        let u = !0;
        for (let M = 0; M < b.length; M++) {
          let T = b[M];
          if (T?.$ref && !(0, f.schemaHasRulesButRef)(T, w.self.RULES)) {
            const B = T.$ref;
            if (T = o.resolveRef.call(w.self, w.schemaEnv.root, w.baseId, B), T instanceof o.SchemaEnv && (T = T.schema), T === void 0)
              throw new n.default(w.opts.uriResolver, w.baseId, B);
          }
          const q = (v = T?.properties) === null || v === void 0 ? void 0 : v[E];
          if (typeof q != "object")
            throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${E}"`);
          u = u && (i || k(T)), C(q, M);
        }
        if (!u)
          throw new Error(`discriminator: "${E}" must be required`);
        return s;
        function k({ required: M }) {
          return Array.isArray(M) && M.includes(E);
        }
        function C(M, T) {
          if (M.const)
            N(M.const, T);
          else if (M.enum)
            for (const q of M.enum)
              N(q, T);
          else
            throw new Error(`discriminator: "properties/${E}" must have "const" or "enum"`);
        }
        function N(M, T) {
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
const sa = "https://json-schema.org/draft/2020-12/schema", aa = "https://json-schema.org/draft/2020-12/schema", ia = { "https://json-schema.org/draft/2020-12/vocab/core": !0, "https://json-schema.org/draft/2020-12/vocab/applicator": !0, "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0, "https://json-schema.org/draft/2020-12/vocab/validation": !0, "https://json-schema.org/draft/2020-12/vocab/meta-data": !0, "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0, "https://json-schema.org/draft/2020-12/vocab/content": !0 }, ca = "meta", la = "Core and Validation specifications meta-schema", da = [{ $ref: "meta/core" }, { $ref: "meta/applicator" }, { $ref: "meta/unevaluated" }, { $ref: "meta/validation" }, { $ref: "meta/meta-data" }, { $ref: "meta/format-annotation" }, { $ref: "meta/content" }], ua = ["object", "boolean"], fa = "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.", pa = { definitions: { $comment: '"definitions" has been replaced by "$defs".', type: "object", additionalProperties: { $dynamicRef: "#meta" }, deprecated: !0, default: {} }, dependencies: { $comment: '"dependencies" has been split and replaced by "dependentSchemas" and "dependentRequired" in order to serve their differing semantics.', type: "object", additionalProperties: { anyOf: [{ $dynamicRef: "#meta" }, { $ref: "meta/validation#/$defs/stringArray" }] }, deprecated: !0, default: {} }, $recursiveAnchor: { $comment: '"$recursiveAnchor" has been replaced by "$dynamicAnchor".', $ref: "meta/core#/$defs/anchorString", deprecated: !0 }, $recursiveRef: { $comment: '"$recursiveRef" has been replaced by "$dynamicRef".', $ref: "meta/core#/$defs/uriReferenceString", deprecated: !0 } }, ha = {
  $schema: sa,
  $id: aa,
  $vocabulary: ia,
  $dynamicAnchor: ca,
  title: la,
  allOf: da,
  type: ua,
  $comment: fa,
  properties: pa
}, ma = "https://json-schema.org/draft/2020-12/schema", ya = "https://json-schema.org/draft/2020-12/meta/applicator", ga = { "https://json-schema.org/draft/2020-12/vocab/applicator": !0 }, $a = "meta", va = "Applicator vocabulary meta-schema", _a = ["object", "boolean"], ba = { prefixItems: { $ref: "#/$defs/schemaArray" }, items: { $dynamicRef: "#meta" }, contains: { $dynamicRef: "#meta" }, additionalProperties: { $dynamicRef: "#meta" }, properties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, propertyNames: { format: "regex" }, default: {} }, dependentSchemas: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, propertyNames: { $dynamicRef: "#meta" }, if: { $dynamicRef: "#meta" }, then: { $dynamicRef: "#meta" }, else: { $dynamicRef: "#meta" }, allOf: { $ref: "#/$defs/schemaArray" }, anyOf: { $ref: "#/$defs/schemaArray" }, oneOf: { $ref: "#/$defs/schemaArray" }, not: { $dynamicRef: "#meta" } }, wa = { schemaArray: { type: "array", minItems: 1, items: { $dynamicRef: "#meta" } } }, Sa = {
  $schema: ma,
  $id: ya,
  $vocabulary: ga,
  $dynamicAnchor: $a,
  title: va,
  type: _a,
  properties: ba,
  $defs: wa
}, Ea = "https://json-schema.org/draft/2020-12/schema", Pa = "https://json-schema.org/draft/2020-12/meta/unevaluated", ka = { "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0 }, Ca = "meta", Ra = "Unevaluated applicator vocabulary meta-schema", Na = ["object", "boolean"], ja = { unevaluatedItems: { $dynamicRef: "#meta" }, unevaluatedProperties: { $dynamicRef: "#meta" } }, Aa = {
  $schema: Ea,
  $id: Pa,
  $vocabulary: ka,
  $dynamicAnchor: Ca,
  title: Ra,
  type: Na,
  properties: ja
}, Oa = "https://json-schema.org/draft/2020-12/schema", Ta = "https://json-schema.org/draft/2020-12/meta/content", Ma = { "https://json-schema.org/draft/2020-12/vocab/content": !0 }, Ia = "meta", qa = "Content vocabulary meta-schema", xa = ["object", "boolean"], Da = { contentEncoding: { type: "string" }, contentMediaType: { type: "string" }, contentSchema: { $dynamicRef: "#meta" } }, za = {
  $schema: Oa,
  $id: Ta,
  $vocabulary: Ma,
  $dynamicAnchor: Ia,
  title: qa,
  type: xa,
  properties: Da
}, Va = "https://json-schema.org/draft/2020-12/schema", Fa = "https://json-schema.org/draft/2020-12/meta/core", La = { "https://json-schema.org/draft/2020-12/vocab/core": !0 }, Ba = "meta", Ka = "Core vocabulary meta-schema", Ua = ["object", "boolean"], Ha = { $id: { $ref: "#/$defs/uriReferenceString", $comment: "Non-empty fragments not allowed.", pattern: "^[^#]*#?$" }, $schema: { $ref: "#/$defs/uriString" }, $ref: { $ref: "#/$defs/uriReferenceString" }, $anchor: { $ref: "#/$defs/anchorString" }, $dynamicRef: { $ref: "#/$defs/uriReferenceString" }, $dynamicAnchor: { $ref: "#/$defs/anchorString" }, $vocabulary: { type: "object", propertyNames: { $ref: "#/$defs/uriString" }, additionalProperties: { type: "boolean" } }, $comment: { type: "string" }, $defs: { type: "object", additionalProperties: { $dynamicRef: "#meta" } } }, Ga = { anchorString: { type: "string", pattern: "^[A-Za-z_][-A-Za-z0-9._]*$" }, uriString: { type: "string", format: "uri" }, uriReferenceString: { type: "string", format: "uri-reference" } }, Ja = {
  $schema: Va,
  $id: Fa,
  $vocabulary: La,
  $dynamicAnchor: Ba,
  title: Ka,
  type: Ua,
  properties: Ha,
  $defs: Ga
}, Wa = "https://json-schema.org/draft/2020-12/schema", Ya = "https://json-schema.org/draft/2020-12/meta/format-annotation", Xa = { "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0 }, Za = "meta", Qa = "Format vocabulary meta-schema for annotation results", ei = ["object", "boolean"], ti = { format: { type: "string" } }, ri = {
  $schema: Wa,
  $id: Ya,
  $vocabulary: Xa,
  $dynamicAnchor: Za,
  title: Qa,
  type: ei,
  properties: ti
}, ni = "https://json-schema.org/draft/2020-12/schema", oi = "https://json-schema.org/draft/2020-12/meta/meta-data", si = { "https://json-schema.org/draft/2020-12/vocab/meta-data": !0 }, ai = "meta", ii = "Meta-data vocabulary meta-schema", ci = ["object", "boolean"], li = { title: { type: "string" }, description: { type: "string" }, default: !0, deprecated: { type: "boolean", default: !1 }, readOnly: { type: "boolean", default: !1 }, writeOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 } }, di = {
  $schema: ni,
  $id: oi,
  $vocabulary: si,
  $dynamicAnchor: ai,
  title: ii,
  type: ci,
  properties: li
}, ui = "https://json-schema.org/draft/2020-12/schema", fi = "https://json-schema.org/draft/2020-12/meta/validation", pi = { "https://json-schema.org/draft/2020-12/vocab/validation": !0 }, hi = "meta", mi = "Validation vocabulary meta-schema", yi = ["object", "boolean"], gi = { type: { anyOf: [{ $ref: "#/$defs/simpleTypes" }, { type: "array", items: { $ref: "#/$defs/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, const: !0, enum: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/$defs/nonNegativeInteger" }, minLength: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, maxItems: { $ref: "#/$defs/nonNegativeInteger" }, minItems: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, maxContains: { $ref: "#/$defs/nonNegativeInteger" }, minContains: { $ref: "#/$defs/nonNegativeInteger", default: 1 }, maxProperties: { $ref: "#/$defs/nonNegativeInteger" }, minProperties: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, required: { $ref: "#/$defs/stringArray" }, dependentRequired: { type: "object", additionalProperties: { $ref: "#/$defs/stringArray" } } }, $i = { nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { $ref: "#/$defs/nonNegativeInteger", default: 0 }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, vi = {
  $schema: ui,
  $id: fi,
  $vocabulary: pi,
  $dynamicAnchor: hi,
  title: mi,
  type: yi,
  properties: gi,
  $defs: $i
};
var co;
function _i() {
  if (co) return Ft;
  co = 1, Object.defineProperty(Ft, "__esModule", { value: !0 });
  const e = ha, t = Sa, o = Aa, n = za, f = Ja, r = ri, a = di, c = vi, p = ["/properties"];
  function g($) {
    return [
      e,
      t,
      o,
      n,
      f,
      S(this, r),
      a,
      S(this, c)
    ].forEach((w) => this.addMetaSchema(w, void 0, !1)), this;
    function S(w, b) {
      return $ ? w.$dataMetaSchema(b, p) : b;
    }
  }
  return Ft.default = g, Ft;
}
var lo;
function bi() {
  return lo || (lo = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv2020 = void 0;
    const o = /* @__PURE__ */ ms(), n = /* @__PURE__ */ ra(), f = /* @__PURE__ */ oa(), r = /* @__PURE__ */ _i(), a = "https://json-schema.org/draft/2020-12/schema";
    class c extends o.default {
      constructor(b = {}) {
        super({
          ...b,
          dynamicRef: !0,
          next: !0,
          unevaluated: !0
        });
      }
      _addVocabularies() {
        super._addVocabularies(), n.default.forEach((b) => this.addVocabulary(b)), this.opts.discriminator && this.addKeyword(f.default);
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
    t.Ajv2020 = c, e.exports = t = c, e.exports.Ajv2020 = c, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = c;
    var p = /* @__PURE__ */ Yt();
    Object.defineProperty(t, "KeywordCxt", { enumerable: !0, get: function() {
      return p.KeywordCxt;
    } });
    var g = /* @__PURE__ */ G();
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
    var $ = /* @__PURE__ */ wr();
    Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
      return $.default;
    } });
    var S = /* @__PURE__ */ Xt();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return S.default;
    } });
  })(Ge, Ge.exports)), Ge.exports;
}
var wi = /* @__PURE__ */ bi();
const Si = /* @__PURE__ */ Qo(wi), Ei = "https://json-schema.org/draft/2020-12/schema", Pi = "https://raw.githubusercontent.com/omsf-eco-infra/gufe-viz/main/schema/gufe-viz.schema.json", ki = "gufe-viz payload", Ci = "Python-to-TypeScript contract bridge for gufe visualizations. Source of truth both languages are downstream of it. This schema is not strictly versioned or published as it is only internally consumed by this codebase. Schema description: one schema object per gufe class: every $def named *Viz is the visualization form of exactly one GufeTokenizable, it carries that object's `gufe-key`. Every reference from one gufe object to another is that object's gufe key, and the objects themselves live in the `registry` on the root payload. So a ligand network's nodes are keys, a chemical system's components and a transformation's protocol are keys and each one resolves to a complete, drawable object. An alchemical network whose forty systems share one protein carries that PDB once and points at it forty times, and the browser can still drill into it, because what it points at is a whole ProteinComponentViz. This is a single-shot dump rather than a conversation with a server, so the registry travels with the payload.", Ri = [{ $ref: "#/$defs/SmallMoleculeComponentViz" }, { $ref: "#/$defs/ProteinComponentViz" }, { $ref: "#/$defs/SolvatedPDBComponentViz" }, { $ref: "#/$defs/ProteinMembraneComponentViz" }, { $ref: "#/$defs/SolventComponentViz" }, { $ref: "#/$defs/UnknownComponentViz" }, { $ref: "#/$defs/ProtocolViz" }, { $ref: "#/$defs/LigandAtomMappingViz" }, { $ref: "#/$defs/LigandNetworkViz" }, { $ref: "#/$defs/ChemicalSystemViz" }, { $ref: "#/$defs/TransformationViz" }, { $ref: "#/$defs/AlchemicalNetworkViz" }], Ni = /* @__PURE__ */ JSON.parse('{"GufeKey":{"title":"GufeKey","description":"A gufe key: the identity of a GufeTokenizable, of the form \'ClassName-<hex digest>\'. It is deterministic and repeatable within a software environment. Only its non-emptiness is checked","type":"string","minLength":1},"ComponentKey":{"title":"ComponentKey","description":"A gufe key naming a ComponentViz in the registry. Identical to GufeKey at validation time: JSON Schema has no way to say \'this string is the gufe-key of an entry in that array, and that entry has this type\', because that is a join across two parts of the document. What the name buys is that the referent\'s type is stated in the contract and carried into the generated TypeScript, instead of living only in a test and a view.","$ref":"#/$defs/GufeKey"},"SmallMoleculeComponentKey":{"title":"SmallMoleculeComponentKey","description":"A gufe key naming a SmallMoleculeComponentViz in the registry. Resolving it yields the whole molecule, SDF included. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ChemicalSystemKey":{"title":"ChemicalSystemKey","description":"A gufe key naming a ChemicalSystemViz in the registry. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ProtocolKey":{"title":"ProtocolKey","description":"A gufe key naming a ProtocolViz in the registry. Every transformation of a network usually names the same one. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"Registry":{"title":"Registry","description":"The pool of gufe objects this payload refers to by key, each a complete payload object in its own right. Entries are unique by `gufe-key` and sorted by (type, gufe-key) so a committed fixture is byte-stable. JSON Schema cannot express \'unique by a property\' or \'every reference resolves\', so both are covered by tests on the Python side and degraded over by the views.","type":"array","items":{"oneOf":[{"$ref":"#/$defs/ComponentViz"},{"$ref":"#/$defs/ProtocolViz"},{"$ref":"#/$defs/ChemicalSystemViz"}]}},"ComponentViz":{"title":"ComponentViz","description":"Any single chemical-system component","oneOf":[{"$ref":"#/$defs/SmallMoleculeComponentViz"},{"$ref":"#/$defs/ProteinComponentViz"},{"$ref":"#/$defs/SolvatedPDBComponentViz"},{"$ref":"#/$defs/ProteinMembraneComponentViz"},{"$ref":"#/$defs/SolventComponentViz"},{"$ref":"#/$defs/UnknownComponentViz"}]},"SmallMoleculeComponentViz":{"title":"SmallMoleculeComponentViz","description":"A small molecule, carried as a complete SDF record.","type":"object","properties":{"type":{"const":"SmallMoleculeComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"sdf":{"type":"string","minLength":1,"description":"Complete inline SDF record, including the conformer."},"smiles":{"type":"string"},"total_charge":{"type":"integer","description":"Net formal charge. Displayed, never recomputed from the SDF."}},"required":["type","gufe-key","name","sdf","smiles","total_charge"],"additionalProperties":false},"ProteinComponentViz":{"title":"ProteinComponentViz","description":"A protein, carried as a complete PDB record.","type":"object","properties":{"type":{"const":"ProteinComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolvatedPDBComponentViz":{"title":"SolvatedPDBComponentViz","description":"A protein with explicit solvent. A distinct type rather than a flag on ProteinComponentViz, because the discriminator is what a view dispatches on and the presence of waters changes what a sensible default representation is.","type":"object","properties":{"type":{"const":"SolvatedPDBComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation, including explicit solvent."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"ProteinMembraneComponentViz":{"title":"ProteinMembraneComponentViz","description":"A protein embedded in a membrane.","type":"object","properties":{"type":{"const":"ProteinMembraneComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation of the protein and membrane system."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolventComponentViz":{"title":"SolventComponentViz","description":"Bulk solvent settings. There is no structure to draw, so these are flat fields suitable for rendering as a settings card.","type":"object","properties":{"type":{"const":"SolventComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"smiles":{"type":"string","minLength":1},"positive_ion":{"type":"string"},"negative_ion":{"type":"string"},"neutralize":{"type":"boolean"},"ion_concentration":{"type":"string","description":"Display-form concentration with units, for example \'0.15 molar\'. A string rather than a number because the unit is part of the value and the view only ever prints it."}},"required":["type","gufe-key","name","smiles","positive_ion","negative_ion","neutralize","ion_concentration"],"additionalProperties":false},"UnknownComponentViz":{"title":"UnknownComponentViz","description":"The graceful fallback for a component type this build does not recognize. gufe supports custom Component subclasses, so meeting one is an expected outcome rather than an error, and the browser answers it with \'sorry, there is no visualization for this\'. This covers an unrecognized type only: a recognized component whose serializer fails is a bug, and raises in Python rather than arriving here wearing a disguise.","type":"object","properties":{"type":{"const":"UnknownComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The gufe class name, so the panel can say which type it could not draw."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ProtocolViz":{"title":"ProtocolViz","description":"A gufe Protocol, named. Every transformation in an alchemical network usually shares one, so this is a registry entry that many edges point at rather than a class name repeated per edge. Settings are deliberately absent for now: they are large, deeply nested, and nothing draws them yet, adding a `settings` field later is additive and breaks nothing.","type":"object","properties":{"type":{"const":"ProtocolViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The Protocol\'s class name, which is what identifies it to a reader, a Protocol has no name of its own, so `name` is usually empty."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ChemicalSystemViz":{"title":"ChemicalSystemViz","description":"A gufe ChemicalSystem: labels mapped to the gufe keys of its components.","type":"object","properties":{"type":{"const":"ChemicalSystemViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"components":{"type":"object","description":"ChemicalSystem labels mapped to the gufe keys of the components in the registry.","additionalProperties":{"$ref":"#/$defs/ComponentKey"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","components"],"additionalProperties":false},"AtomMapping":{"title":"AtomMapping","description":"Atom index correspondence from molecule A to molecule B, as a list of index pairs. A list rather than an object keyed by A\'s index, because JSON object keys can only be strings: keying by index would put decimal strings such as \'12\' in the payload and leave both languages casting them back to integers, and it is Python\'s dict-of-int shape only by resemblance. As a list, both indices stay integers, and \'an entry has a B index for every A index\' becomes a `required` the schema states rather than a convention a reader has to trust. Pairs are ordered by `index_A` so a committed fixture is byte-stable.","type":"array","items":{"type":"object","properties":{"index_A":{"type":"integer","minimum":0,"description":"An atom index in molecule A."},"index_B":{"type":"integer","minimum":0,"description":"The atom index in molecule B that it maps to."}},"required":["index_A","index_B"],"additionalProperties":false}},"Annotations":{"title":"Annotations","description":"Free-form mapping metadata. gufe puts nothing here by design and every mapper picks its own keys, so this is deliberately open. Values are whatever survived being made JSON-safe. Displayed but never interpreted, with the single exception of \'score\'.","type":"object"},"LigandAtomMappingViz":{"title":"LigandAtomMappingViz","description":"One atom mapping between two small molecules. This is also what an edge of a ligand network is because the two endpoints are gufe keys either way: standalone they resolve in this object\'s own registry, and in a network they resolve in the network\'s, where they are the same entries the nodes name. `componentA` and `componentB` are the molecules the two sides of `componentA_to_componentB` index into: an `index_A` is an atom of the SmallMoleculeComponentViz that `componentA` names, and an `index_B` an atom of `componentB`\'s.","type":"object","properties":{"type":{"const":"LigandAtomMappingViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"componentA":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentB":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentA_to_componentB":{"$ref":"#/$defs/AtomMapping"},"score":{"type":["number","null"],"description":"The \'score\' annotation when it is a plain number, otherwise null. This is the one annotation key that is interpreted rather than displayed: it drives the edge colouring and the force layout\'s link distance."},"annotations":{"$ref":"#/$defs/Annotations"},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","componentA","componentB","componentA_to_componentB","score","annotations"],"additionalProperties":false},"LigandNetworkViz":{"title":"LigandNetworkViz","description":"A ligand network: the ligands in the registry, the nodes as keys into it, and the mappings as edges. Deliberately not gufe\'s GraphML: that format embeds a gufe to_json moldict per node, so forwarding it would relocate the decoding problem into the browser rather than avoid it.","type":"object","properties":{"type":{"const":"LigandNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ligand, resolved in `registry`.","items":{"$ref":"#/$defs/SmallMoleculeComponentKey"}},"edges":{"type":"array","description":"The mappings, whose `componentA` and `componentB` name nodes of this network. JSON Schema cannot express that referential constraint, so a Python test covers it, and the view drops a dangling edge with a banner rather than failing.","items":{"$ref":"#/$defs/LigandAtomMappingViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false},"TransformationViz":{"title":"TransformationViz","description":"A transformation between two chemical systems, both named by gufe key, as is its protocol: `stateA` is the system it starts from, `stateB` the one it ends at, and every edge of a network usually names the same protocol. This is also what an edge of an alchemical network is (there is no separate edge type) because `stateA` and `stateB` are keys either way, and in a network they are the keys the nodes name. NonTransformation uses this type too: it exposes the same stateA and stateB properties, both its single system, so it renders as a diff with no differences.","type":"object","properties":{"type":{"const":"TransformationViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"protocol":{"$ref":"#/$defs/ProtocolKey"},"stateA":{"$ref":"#/$defs/ChemicalSystemKey"},"stateB":{"$ref":"#/$defs/ChemicalSystemKey"},"mappings":{"type":"array","items":{"$ref":"#/$defs/LigandAtomMappingViz"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","protocol","stateA","stateB","mappings"],"additionalProperties":false},"AlchemicalNetworkViz":{"title":"AlchemicalNetworkViz","description":"A graph of chemical systems joined by transformations. What repeats here is not the nodes and edges themselves but what they are made of: in practice every system shares one protein and every transformation shares one protocol. Both live in the registry, once, as whole objects so this view can show composition and topology while still letting a reader open a node and see the protein.","type":"object","properties":{"type":{"const":"AlchemicalNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ChemicalSystem, resolved in `registry`.","items":{"$ref":"#/$defs/ChemicalSystemKey"}},"edges":{"type":"array","description":"The transformations, whose `stateA` and `stateB` name nodes of this network.","items":{"$ref":"#/$defs/TransformationViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false}}'), kr = {
  $schema: Ei,
  $id: Pi,
  title: ki,
  description: Ci,
  oneOf: Ri,
  $defs: Ni
}, hc = [
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
], Cr = kr.$id, Rr = new Si({ allErrors: !0, strict: !1 });
Rr.addSchema(kr, Cr);
const uo = Rr.getSchema(Cr), Oo = Object.entries(kr.$defs).filter(
  ([e, t]) => t.properties?.type?.const === e
).map(([e]) => e).sort(), mc = Oo, Nr = /* @__PURE__ */ new Map();
for (const e of Oo) {
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
function ji(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return {
      valid: !1,
      issues: [{ path: "", message: "must be a JSON object" }]
    };
  const t = e.type, o = typeof t == "string" ? Nr.get(t) : void 0;
  return o ? o(e) ? mr : { valid: !1, issues: yr(o.errors) } : uo(e) ? mr : { valid: !1, issues: yr(uo.errors) };
}
function yc(e, t) {
  const o = Nr.get(e);
  return o ? o(t) ? mr : { valid: !1, issues: yr(o.errors) } : {
    valid: !1,
    issues: [
      { path: "", message: `unknown payload type ${JSON.stringify(e)}` }
    ]
  };
}
function Ai(e, t = 8) {
  const o = e.slice(0, t).map((n) => `${n.path || "(root)"}: ${n.message}`);
  return e.length > t && o.push(`... and ${e.length - t} more`), o.join(`
`);
}
const jr = {
  SmallMoleculeComponentViz: "gufe-small-molecule",
  ProteinComponentViz: "gufe-protein",
  LigandNetworkViz: "gufe-ligand-network"
};
function To(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return {
      message: "This does not look like a gufe-viz payload (expected a JSON object)."
    };
  const { type: t } = e;
  if (typeof t != "string" || !t)
    return {
      message: "This payload has no `type`, so there is nothing to say what it is."
    };
  if (!jr[t]) return Oi(t);
  const { valid: o, issues: n } = ji(e);
  return o ? null : {
    message: `This payload says it is a ${t}, but it does not match the gufe-viz schema.`,
    detail: Ai(n)
  };
}
function Oi(e) {
  const t = Object.keys(jr).sort().join(", ");
  return {
    message: `Sorry, there is no visualization for ${e} yet. This build can draw: ${t}.`
  };
}
function gc(e) {
  return To(e)?.message ?? null;
}
class Ti extends Ht {
  placeholder() {
    return "Waiting for data...";
  }
  renderView(t, o) {
    Xo("payload", o, this);
    const n = To(o);
    if (n)
      return t.appendChild(Mi(n, o)), {};
    const f = o.type, r = jr[f], a = document.createElement(r);
    return a.style.cssText = "flex:1;min-height:0;min-width:0;", a.payload = o, t.appendChild(a), {
      onResize: () => a.resize?.(),
      // Removing the child fires its own `disconnectedCallback`, which is where
      // its viewers and observers are released
      cleanup: () => a.remove()
    };
  }
}
function Mi(e, t) {
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
  const f = Ii(t);
  return f && o.appendChild(n(f, !1)), o;
}
function Ii(e) {
  if (e == null || typeof e != "object") return null;
  const t = e, o = [];
  typeof t.type == "string" && o.push(`type: ${Bt(t.type)}`), typeof t.name == "string" && t.name && o.push(`name: ${Bt(t.name)}`);
  const n = Object.keys(e);
  return n.length && o.push(
    `keys: ${n.slice(0, 12).join(", ")}${n.length > 12 ? ", ..." : ""}`
  ), o.length ? o.join(`
`) : null;
}
Gt("gufe-view", Ti);
const Ar = {
  threeDmol: "https://3dmol.org/build/3Dmol-min.js",
  rdkit: "https://unpkg.com/@rdkit/rdkit/dist/RDKit_minimal.js",
  d3: "https://cdn.jsdelivr.net/npm/d3@7/+esm"
};
function Or(e) {
  const t = globalThis.__gufeEngines?.[e];
  return t ? Promise.resolve(t) : null;
}
function Mo(e, t) {
  return new Promise((o, n) => {
    const f = document.createElement("script");
    f.src = e, f.onload = () => o(), f.onerror = () => n(new Error(`Failed to load ${t}`)), document.head.appendChild(f);
  });
}
let ze = null, xe = null;
function Io() {
  if (xe) return xe;
  const e = Or("threeDmol");
  return e ? (xe = e.then((t) => ze = t || window.$3Dmol), xe) : (xe = (async () => {
    if (window.$3Dmol) return ze = window.$3Dmol;
    if (await Mo(Ar.threeDmol, "3Dmol.js"), !window.$3Dmol) throw new Error("3Dmol.js loaded but $3Dmol is undefined");
    return ze = window.$3Dmol;
  })(), xe);
}
let De = null;
function gr() {
  if (De) return De;
  const e = Or("rdkit");
  return e ? (De = e.then((t) => window.RDKit = t), De) : (De = (async () => {
    if (window.RDKit) return window.RDKit;
    if (await Mo(Ar.rdkit, "RDKit"), !window.initRDKitModule) throw new Error("RDKit loaded but initRDKitModule is undefined");
    return window.RDKit = await window.initRDKitModule();
  })(), De);
}
let pr = null;
function qi() {
  if (!pr) {
    const e = Ar.d3;
    pr = Or("d3") ?? import(
      /* @vite-ignore */
      e
    );
  }
  return pr;
}
function qo(e, t) {
  let o = !1, n = !1;
  const f = () => {
    o = !0;
  }, r = () => {
    o = !1;
  }, a = (c) => {
    if (c.stopPropagation(), o || c.ctrlKey || c.metaKey) {
      c.preventDefault(), t.onZoom(c);
      return;
    }
    t.hint && !n && (n = !0, Di(e, t.hint));
  };
  return e.addEventListener("wheel", a, { passive: !1, capture: !0 }), e.addEventListener("pointerdown", f), e.addEventListener("pointerenter", f), e.addEventListener("pointerleave", r), {
    cleanup() {
      e.removeEventListener("wheel", a, { capture: !0 }), e.removeEventListener("pointerdown", f), e.removeEventListener("pointerenter", f), e.removeEventListener("pointerleave", r);
    }
  };
}
const xi = 1600;
function Di(e, t) {
  const o = L(
    "div",
    "position:absolute;bottom:12px;left:50%;transform:translateX(-50%);z-index:30;pointer-events:none;padding:5px 12px;border-radius:6px;font-size:11px;white-space:nowrap;background:rgba(0,0,0,0.72);color:#ffffff;transition:opacity .3s ease;",
    t
  );
  e.appendChild(o), setTimeout(() => {
    o.style.opacity = "0", setTimeout(() => o.remove(), 300);
  }, xi);
}
const zi = { min: 0.25, max: 12 };
function Vi(e, t = zi) {
  let o = 1;
  return {
    zoomBy(n) {
      const f = Math.min(t.max, Math.max(t.min, o * n));
      if (f === o) return;
      const r = f / o;
      o = f, e.zoom(r), e.render();
    },
    reset() {
      o = 1, e.zoomTo(), e.render();
    },
    level: () => o
  };
}
const Fi = 2e-3;
function Li(e) {
  return Math.exp(-e.deltaY * Fi);
}
function xo(e, t, o = {}) {
  const n = Vi(t, o.bounds), f = qo(e, {
    hint: o.hint ?? "Click or hold Ctrl to zoom",
    onZoom: (r) => n.zoomBy(Li(r))
  });
  return { ...n, cleanup: f.cleanup };
}
function Tr(e, t = "Reset view") {
  const o = L("button", He, "Reset");
  return o.title = t, o.setAttribute("aria-label", t), o.onclick = e, o;
}
const Bi = `
`, fo = "$$$$", Ki = (e) => e.indexOf(fo) >= 0 ? e : `${e}${Bi}${fo}`;
function $r(e) {
  const t = String(e).split(/\r?\n/);
  if (t.length < 4) return null;
  const o = parseInt(t[3].slice(0, 3), 10), n = parseInt(t[3].slice(3, 6), 10);
  return isNaN(o) || isNaN(n) ? null : { atoms: o, bonds: n };
}
function vr(e, t, o) {
  let n = null;
  try {
    if (n = e.get_mol(t, JSON.stringify({ removeHs: !0 })), !n) return null;
    try {
      n.set_new_coords(!0);
    } catch {
    }
    return n.get_svg(o, o) || null;
  } catch (f) {
    return console.warn("[gufe-viz] depictSVG threw -", $e(f)), null;
  } finally {
    if (n)
      try {
        n.delete();
      } catch {
      }
  }
}
function Ui(e, t, o) {
  e.innerHTML = t;
  const n = e.querySelector("svg");
  n && (n.removeAttribute("width"), n.removeAttribute("height"), n.getAttribute("viewBox") || n.setAttribute("viewBox", `0 0 ${o} ${o}`), n.setAttribute("preserveAspectRatio", "xMidYMid meet"), n.setAttribute("style", "width:100%;height:100%;max-width:100%;max-height:100%;"));
}
const Hi = [
  { id: "stick", label: "Stick", title: "Sticks only" },
  { id: "ball", label: "Ball+Stick", title: "Ball and stick" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" }
], po = {
  stick: { stick: { radius: 0.15, colorscheme: "Jmol" } },
  ball: { stick: { radius: 0.12, colorscheme: "Jmol" }, sphere: { scale: 0.28, colorscheme: "Jmol" } },
  sphere: { sphere: { scale: 1, colorscheme: "Jmol" } }
}, ho = 400;
class Gi extends Ht {
  placeholder() {
    return "Waiting for a SmallMoleculeComponent payload...";
  }
  renderView(t, o) {
    const n = o.sdf, f = o.name ?? "", r = o.smiles, a = o.total_charge;
    t.appendChild(bo(f || "Unnamed molecule", "SmallMoleculeComponent"));
    const c = L("div", "flex:1;display:flex;flex-direction:row;overflow:hidden;min-height:0;");
    t.appendChild(c);
    const p = L("div", "flex:1 1 50%;min-width:0;display:flex;flex-direction:column;"), g = L("div", "flex:1 1 50%;min-width:0;display:flex;flex-direction:column;position:relative;");
    c.appendChild(p), c.appendChild(L("div", `width:1px;flex-shrink:0;background:${z.splitBorder};`)), c.appendChild(g);
    const $ = (u) => L("div", `flex-shrink:0;padding:4px 10px;font-size:12px;font-weight:bold;color:${z.labelFg};background:${z.labelBg};`, u);
    p.appendChild($("2D"));
    const S = L(
      "div",
      `flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:8px;background:${z.canvas2DBg};`
    );
    p.appendChild(S), g.appendChild($("3D"));
    const w = wo();
    g.appendChild(w.wrap);
    const b = L(
      "div",
      `flex-shrink:0;display:flex;flex-wrap:wrap;align-items:baseline;gap:6px 20px;padding:8px 16px;font-size:12px;background:${z.toolbarBg};border-top:1px solid ${z.toolbarBorder};color:${z.textPrimary};`
    );
    t.appendChild(b);
    const E = n ? $r(n) : null, _ = [
      ["Name", f || ke, !1],
      ["SMILES", r || ke, !0],
      ["Charge", a == null ? ke : String(a), !1],
      ["Atoms", E ? String(E.atoms) : ke, !1],
      ["Bonds", E ? String(E.bonds) : ke, !1]
    ];
    for (const [u, k, C] of _) {
      const N = L("div", "display:flex;align-items:baseline;gap:6px;min-width:0;");
      N.appendChild(
        L(
          "span",
          `font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;flex-shrink:0;color:${z.textMuted2};`,
          u
        )
      );
      const M = L(
        "span",
        `user-select:text;cursor:text;color:${z.textPrimary}` + (C ? ";font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:11px;overflow-wrap:anywhere;" : ""),
        k
      );
      M.title = k, N.appendChild(M), b.appendChild(N);
    }
    if (!n || !n.trim())
      return S.appendChild(ce("No molecule provided")), w.container.appendChild(ce("No molecule provided")), {};
    S.appendChild(ce("Loading 2D depiction...")), gr().then((u) => {
      const k = vr(u, n, ho);
      k ? Ui(S, k, ho) : S.replaceChildren(ce("Failed to parse molecule", !0));
    }).catch((u) => {
      S.replaceChildren(ce(`RDKit failed to load: ${$e(u)}`, !0));
    });
    let d = null, m = null, l = "stick", h = !1;
    const v = L(
      "div",
      `position:absolute;bottom:10px;right:10px;display:flex;gap:4px;padding:4px;border-radius:6px;z-index:10;background:${z.switcherBg};box-shadow:0 2px 8px rgba(0,0,0,0.25);`
    );
    v.appendChild(
      _o(Hi, l, (u) => {
        l = u, d && (d.setStyle({}, po[u]), d.render());
      })
    );
    const s = L("button", `${He}margin-left:4px;`, "Spin");
    s.title = "Toggle continuous rotation", s.onclick = () => {
      h = !h, s.style.background = h ? z.btnBgActive : z.btnBg;
      try {
        d?.spin(h ? "y" : !1);
      } catch {
      }
    }, v.appendChild(s);
    const i = Tr(() => m?.reset());
    return i.style.marginLeft = "4px", v.appendChild(i), g.appendChild(v), w.container.appendChild(ce("Loading 3D viewer...")), Io().then(() => {
      w.container.replaceChildren(), d = ze.createViewer(w.container, { backgroundColor: z.viewerBg }), d.addModel(Ki(n), "sdf"), d.setStyle({}, po[l]), d.zoomTo(), d.render(), m = xo(w.container, d);
    }).catch((u) => {
      w.container.replaceChildren(ce(`3D render failed: ${$e(u)}`, !0));
    }), {
      onResize() {
        d && (d.resize(), d.render());
      },
      cleanup() {
        if (m?.cleanup(), m = null, !!d) {
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
Gt("gufe-small-molecule", Gi);
const Do = ["HOH", "WAT", "SOL", "TIP3"], mo = { hetflag: !1 }, Ji = { hetflag: !0 }, Wi = { resn: Do }, Pe = {
  stick: { radius: 0.15 },
  sphere: { scale: 0.3 },
  hetero: { stickRadius: 0.2, sphereScale: 0.28 },
  water: { stickRadius: 0.05, sphereScale: 0.18 },
  surfaceOpacity: 0.85,
  /** Above this many atoms a surface is slow enough to be worth warning about. */
  surfaceAtomWarn: 4e4
};
function Yi(e) {
  const t = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set();
  let n = 0, f = 0, r = 0, a = 1 / 0, c = -1 / 0;
  for (const p of e.split(/\r?\n/)) {
    const g = p.slice(0, 6);
    if (g === "ENDMDL") break;
    if (g !== "ATOM  " && g !== "HETATM") continue;
    n++, g === "HETATM" && f++;
    const $ = p.slice(17, 20).trim(), S = p.slice(21, 22).trim() || "_", w = p.slice(22, 26).trim(), b = p.slice(26, 27).trim();
    Do.indexOf($) !== -1 && r++, t.add(S), o.add(`${S}|${w}${b}|${$}`);
    const E = parseInt(w, 10);
    isNaN(E) || (E < a && (a = E), E > c && (c = E));
  }
  return {
    chains: t.size,
    residues: o.size,
    atoms: n,
    hetatms: f,
    waters: r,
    heteroNonWater: f - r,
    resiMin: a === 1 / 0 ? 0 : a,
    resiMax: c === -1 / 0 ? 0 : c
  };
}
function Xi(e) {
  return `${Fe(e.chains)} chains · ${Fe(e.residues)} residues · ${Fe(e.atoms)} atoms · ${Fe(e.hetatms)} HETATM` + (e.waters > 0 ? ` (${Fe(e.waters)} water)` : "");
}
function Zi(e, t) {
  return e === "chain" ? { colorscheme: "chain" } : e === "ss" ? { colorscheme: "ssJmol" } : e === "spectrum" && t && t.resiMax > t.resiMin ? { colorscheme: { prop: "resi", gradient: "roygb", min: t.resiMin, max: t.resiMax } } : { colorscheme: "Jmol" };
}
function yo(e, t, o, n) {
  const f = n || (() => {
  }), r = Zi(t.color, o);
  try {
    e.removeAllSurfaces();
  } catch {
  }
  if (e.setStyle({}, {}), e.setStyle(
    mo,
    t.rep === "stick" ? { stick: { radius: Pe.stick.radius, ...r } } : t.rep === "sphere" ? { sphere: { scale: Pe.sphere.scale, ...r } } : (
      // For 'surface' the shell is added separately; leave the atoms bare so
      // it is not cluttered from the inside.
      t.rep === "surface" ? {} : { cartoon: { ...r } }
    )
  ), e.setStyle(
    Ji,
    t.hetero ? {
      stick: { radius: Pe.hetero.stickRadius, colorscheme: "Jmol" },
      sphere: { scale: Pe.hetero.sphereScale, colorscheme: "Jmol" }
    } : {}
  ), e.setStyle(
    Wi,
    t.waters ? {
      stick: { radius: Pe.water.stickRadius, colorscheme: "Jmol" },
      sphere: { scale: Pe.water.sphereScale, colorscheme: "Jmol" }
    } : {}
  ), t.rep !== "surface") {
    f(null), e.render();
    return;
  }
  f(
    o && o.atoms > Pe.surfaceAtomWarn ? "Computing surface (large structure, this may take a while)..." : "Computing surface..."
  ), e.render(), setTimeout(() => {
    try {
      Promise.resolve(
        e.addSurface(ze.SurfaceType.VDW, { opacity: Pe.surfaceOpacity, ...r }, mo)
      ).then(() => {
        f(null), e.render();
      }).catch((a) => f(`Surface failed: ${$e(a)}`, "error"));
    } catch (a) {
      f(`Surface failed: ${$e(a)}`, "error");
    }
  }, 30);
}
const Qi = [
  { id: "cartoon", label: "Cartoon", title: "Ribbon / cartoon backbone" },
  { id: "surface", label: "Surface", title: "Molecular (VDW) surface" },
  { id: "stick", label: "Stick", title: "All-atom sticks" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" }
], ec = [
  { id: "chain", label: "Chain" },
  { id: "spectrum", label: "Spectrum" },
  { id: "ss", label: "Secondary structure" },
  { id: "element", label: "Element" }
];
class tc extends Ht {
  placeholder() {
    return "Waiting for a ProteinComponent payload...";
  }
  renderView(t, o) {
    const n = o.pdb, f = o.name ?? "", r = { rep: "cartoon", color: "chain", waters: !1, hetero: !0 };
    let a = null, c = null, p = null;
    const g = L(
      "div",
      `display:flex;align-items:center;gap:14px;flex-wrap:wrap;padding:8px 14px;flex-shrink:0;font-size:12px;background:${z.toolbarBg};border-bottom:1px solid ${z.toolbarBorder};color:${z.textPrimary};`
    );
    t.appendChild(g), g.appendChild(
      L("span", `font-weight:700;font-size:14px;letter-spacing:.02em;color:${z.titleColor};`, f || "Protein")
    );
    const $ = (h) => L("span", `font-size:11px;color:${z.textMuted};`, h);
    g.appendChild($("Style:")), g.appendChild(
      _o(Qi, r.rep, (h) => {
        r.rep = h, l();
      })
    ), g.appendChild($("Color:"));
    const S = L("select", vo);
    for (const h of ec) {
      const v = L("option", "", h.label);
      v.value = h.id, S.appendChild(v);
    }
    S.value = r.color, S.addEventListener("change", () => {
      r.color = S.value, l();
    }), g.appendChild(S);
    const w = L("div", "display:flex;gap:4px;");
    g.appendChild(w);
    const b = [
      ["waters", "Waters", "Show water molecules", () => l()],
      ["hetero", "Hetero", "Show hetero atoms / ligands / ions / lipids", () => l()],
      ["spin", "Spin", "Rotate the view continuously", () => a?.spin(r.spin ? "y" : !1)]
    ];
    for (const [h, v, s, i] of b) {
      const u = L("button", He, v);
      u.title = s, u.style.background = r[h] ? z.btnBgActive : z.btnBg, u.onclick = () => {
        r[h] = !r[h], u.style.background = r[h] ? z.btnBgActive : z.btnBg, i();
      }, w.appendChild(u);
    }
    w.appendChild(Tr(() => c?.reset()));
    const E = L("span", `margin-left:auto;font-size:11px;white-space:nowrap;color:${z.textMuted2};`);
    g.appendChild(E);
    const _ = wo();
    t.appendChild(_.wrap);
    const d = L(
      "div",
      "position:absolute;top:12px;left:50%;transform:translateX(-50%);padding:6px 14px;border-radius:6px;font-size:12px;z-index:20;display:none;pointer-events:none;"
    );
    _.wrap.appendChild(d);
    const m = (h, v) => {
      if (h == null) {
        d.style.display = "none";
        return;
      }
      d.textContent = h, d.style.display = "block";
      const s = v === "error";
      d.style.background = s ? z.warnBg : z.toolbarBg, d.style.color = s ? z.warnFg : z.textMuted, d.style.border = `1px solid ${s ? z.warnBorder : z.toolbarBorder}`;
    };
    function l() {
      a && yo(a, r, p, m);
    }
    if (!n || !n.trim())
      return m("No protein data - waiting for a PDB payload."), {};
    try {
      p = Yi(n), E.textContent = Xi(p);
    } catch (h) {
      m(`⚠ PDB parse error: ${$e(h)}`, "error");
    }
    return m("Loading 3D viewer..."), Io().then(() => {
      a = ze.createViewer(_.container, { backgroundColor: z.viewerBg }), a.addModel(n, "pdb"), yo(a, r, p, m), a.zoomTo(), a.spin(r.spin ? "y" : !1), a.render(), c = xo(_.container, a);
    }).catch((h) => {
      m(`⚠ Failed to render structure: ${$e(h)}`, "error");
    }), {
      onResize() {
        a && (a.resize(), a.render());
      },
      cleanup() {
        if (c?.cleanup(), c = null, !!a) {
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
Gt("gufe-protein", tc);
const zo = "http://www.w3.org/2000/svg";
function ae(e, t = {}) {
  const o = document.createElementNS(zo, e);
  for (const [n, f] of Object.entries(t)) o.setAttribute(n, String(f));
  return o;
}
function go(e, t) {
  const o = document.createElementNS(zo, "title");
  return o.textContent = t, e.appendChild(o), e;
}
function rc(e) {
  const t = /* @__PURE__ */ new Map();
  return _r(e, t, /* @__PURE__ */ new Set()), t;
}
function _r(e, t, o) {
  if (e == null || typeof e != "object" || o.has(e)) return;
  if (o.add(e), Array.isArray(e)) {
    for (const f of e) _r(f, t, o);
    return;
  }
  const n = e.registry;
  if (Array.isArray(n))
    for (const f of n) {
      const r = f["gufe-key"];
      typeof r == "string" && r && !t.has(r) && t.set(r, f);
    }
  for (const f of Object.values(e)) _r(f, t, o);
}
function nc(e, t) {
  return t ? e.get(t) : void 0;
}
function br(e, t, o) {
  const n = nc(e, t);
  return n?.type === o ? n : void 0;
}
function oc(e) {
  return e.name ? e.name : (e["gufe-key"].split("-").pop() ?? e["gufe-key"]).slice(0, 6);
}
const sc = ["Force-directed", "Circular", "Radial"], Lt = 34, Ue = 200, hr = 1.5, ac = 6, ic = 16, he = {
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
function cc(e) {
  const t = parseInt(e.replace("#", ""), 16);
  return [t >> 16 & 255, t >> 8 & 255, t & 255];
}
function $o(e) {
  const [t, o] = z.netEdgeRamp.map(cc), n = Math.max(0, Math.min(1, e ?? 0.5));
  return `rgb(${t.map((r, a) => Math.round(r + (o[a] - r) * n)).join(",")})`;
}
const je = oc, lc = (e, t) => e.length > t ? `${e.slice(0, t - 1)}...` : e;
function $c(e, t) {
  const o = br(t, e.componentA, "SmallMoleculeComponentViz"), n = br(t, e.componentB, "SmallMoleculeComponentViz");
  return !o || !n ? null : { ...e, registry: o["gufe-key"] === n["gufe-key"] ? [o] : [o, n] };
}
class dc extends Ht {
  placeholder() {
    return "Waiting for a LigandNetwork payload...";
  }
  renderView(t, o) {
    const n = rc(o), f = [];
    let r = 0;
    for (const N of o.nodes ?? []) {
      const M = br(n, N, "SmallMoleculeComponentViz");
      if (!M) {
        r++;
        continue;
      }
      f.push({ ...M, x: 0, y: 0 });
    }
    const a = new Map(f.map((N) => [N["gufe-key"], N])), c = [];
    let p = 0;
    for (const N of o.edges ?? []) {
      const M = a.get(N.componentA), T = a.get(N.componentB);
      if (!M || !T) {
        p++;
        continue;
      }
      c.push({ ...N, index: c.length, from: M, to: T });
    }
    const g = bo(o.name || "Ligand network", "LigandNetwork");
    g.statsEl.appendChild(Oe("ligands", String(f.length))), g.statsEl.appendChild(Oe("mappings", String(c.length))), t.appendChild(g);
    const $ = L("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    t.appendChild($);
    const S = L("div", `flex:1 1 58%;min-width:0;display:flex;flex-direction:column;background:${z.netCanvasBg};`), w = L("div", `flex:1 1 42%;min-width:0;display:flex;flex-direction:column;background:${z.appBg};`);
    $.appendChild(S), $.appendChild(L("div", `width:1px;flex-shrink:0;background:${z.splitBorder};`)), $.appendChild(w);
    const b = L("div", `flex:1;position:relative;overflow:hidden;min-height:0;background:${z.netCanvasBg};`);
    S.appendChild(b);
    const E = this.#r(
      (N) => C(N),
      () => u()
    );
    S.appendChild(E.bar);
    const _ = this.#e(w);
    if (!f.length)
      return b.appendChild(
        ce(
          r ? "None of this network's ligands are in its registry." : "This network has no ligands."
        )
      ), _.message("Nothing to show."), {};
    r && rr(
      b,
      `${r} ligand${r === 1 ? "" : "s"} named by this network are not in its registry`
    ), p && rr(b, `${p} mapping${p === 1 ? "" : "s"} name a ligand this network does not contain`);
    const d = gr().catch((N) => (console.warn("[gufe-viz] RDKit failed to load:", $e(N)), null));
    let m = c.length ? 0 : -1, l = null, h = "Force-directed", v = !1, s = !0, i = () => {
    }, u = () => {
    };
    const k = (N) => {
      m = N, _.show(c[N] ?? null), i();
    }, C = (N = h) => {
      h = N, l?.(), l = null, b.querySelector("svg")?.remove();
      const M = b.clientWidth || 800, T = b.clientHeight || 600;
      uc(f, M, T, h, c);
      const q = () => {
        if (!s) return;
        const B = this.#n(b, f, c, M, T, k);
        i = () => B.setSelected(m), u = B.reset, l = B.cleanup, i(), d.then((Q) => Q && B.depict(Q)).catch(() => {
        });
      };
      if (h !== "Force-directed" || v) {
        q();
        return;
      }
      fc(f, c, M, T).then((B) => {
        if (s) {
          if (B) {
            q();
            return;
          }
          v = !0, E.picker.value = "Circular", rr(b, "d3 could not be loaded - showing the circular layout instead"), C("Circular");
        }
      }, q);
    };
    return C(), _.show(c[m] ?? null), {
      onResize: () => C(),
      cleanup: () => {
        s = !1, l?.();
      }
    };
  }
  #r(t, o) {
    const n = L(
      "div",
      `display:flex;align-items:center;gap:10px;flex-wrap:wrap;padding:8px 14px;flex-shrink:0;background:${z.toolbarBg};border-top:1px solid ${z.toolbarBorder};`
    ), f = L("div", `display:flex;align-items:center;gap:6px;font-size:11px;color:${z.textMuted};`);
    f.appendChild(L("span", "", "score")), f.appendChild(
      L(
        "span",
        `width:40px;height:4px;border-radius:2px;background:linear-gradient(to right,${z.netEdgeRamp.join(",")});`
      )
    ), f.appendChild(L("span", "", "0 -> 1")), n.appendChild(f), n.appendChild(L("label", `font-size:12px;margin-left:auto;color:${z.textMuted};`, "Layout"));
    const r = L("select", vo);
    for (const a of sc) {
      const c = L("option", "", a);
      c.value = a, r.appendChild(c);
    }
    return r.onchange = () => t(r.value), n.appendChild(r), n.appendChild(Tr(o, "Reset pan and zoom")), { bar: n, picker: r };
  }
  /** The right-hand pane: what the selected mapping is, in words and pictures. */
  #e(t) {
    const o = L(
      "div",
      `flex-shrink:0;padding:4px 10px;font-size:12px;font-weight:bold;color:${z.labelFg};background:${z.labelBg};`,
      "Selected mapping"
    ), n = L("div", "flex:1;min-height:0;overflow:auto;display:flex;flex-direction:column;");
    t.appendChild(o), t.appendChild(n);
    const f = (a) => n.replaceChildren(ce(a));
    return { show: (a) => {
      if (!a) {
        f("Click an edge to see its mapping.");
        return;
      }
      n.replaceChildren();
      const c = L(
        "div",
        `padding:10px 14px;font-size:13px;font-weight:600;color:${z.textPrimary};border-bottom:1px solid ${z.toolbarBorder};`,
        `${je(a.from)} -> ${je(a.to)}`
      );
      n.appendChild(c);
      const p = L("div", "display:flex;flex-direction:row;min-height:180px;");
      n.appendChild(p);
      const g = [a.from.sdf, a.to.sdf].map((_, d) => {
        const m = L("div", "flex:1 1 50%;min-width:0;display:flex;flex-direction:column;");
        m.appendChild(
          L("div", `padding:4px 10px;font-size:11px;color:${z.textMuted2};`, d === 0 ? "A" : "B")
        );
        const l = L(
          "div",
          `flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:6px;background:${z.canvas2DBg};`
        );
        return l.appendChild(ce("...")), m.appendChild(l), p.appendChild(m), { box: l, sdf: _ };
      }), $ = (a.componentA_to_componentB ?? []).length, S = $r(a.from.sdf), w = $r(a.to.sdf), b = L(
        "div",
        `display:flex;flex-wrap:wrap;gap:8px 16px;padding:10px 14px;font-size:11px;color:${z.textMuted};border-top:1px solid ${z.toolbarBorder};`
      );
      b.appendChild(Oe("score", a.score == null ? ke : a.score.toFixed(3), $o(a.score))), b.appendChild(Oe("mapped atoms", String($))), b.appendChild(Oe("atoms A", S ? String(S.atoms) : ke)), b.appendChild(Oe("atoms B", w ? String(w.atoms) : ke)), n.appendChild(b);
      const E = Object.entries(a.annotations ?? {}).filter(([_]) => _ !== "score");
      if (E.length) {
        const _ = L(
          "div",
          `padding:0 14px 12px;font-size:11px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;color:${z.textMuted2};`
        );
        for (const [d, m] of E)
          _.appendChild(L("div", "", `${d}: ${String(m)}`));
        n.appendChild(_);
      }
      gr().then((_) => {
        for (const { box: d, sdf: m } of g) {
          const l = vr(_, m, Ue);
          if (d.replaceChildren(), l) {
            d.innerHTML = l;
            const h = d.querySelector("svg");
            h?.removeAttribute("width"), h?.removeAttribute("height"), h?.setAttribute("style", "width:100%;height:100%;");
          } else
            d.appendChild(ce("Failed to parse molecule", !0));
        }
      }).catch((_) => {
        for (const { box: d } of g) d.replaceChildren(ce(`RDKit failed to load: ${$e(_)}`, !0));
      });
    }, message: f };
  }
  /** Build the SVG for the current node positions. Returns the handles the
   * caller needs afterwards: selection, depictions, and teardown. */
  #n(t, o, n, f, r, a) {
    const c = ae("svg", { width: f, height: r, style: "display:block;touch-action:none;" }), p = ae("g");
    c.appendChild(p), t.appendChild(c);
    const g = [], $ = ae("g"), S = ae("g"), w = ae("g", { "pointer-events": "none" }), b = ae("g");
    p.append($, S, w, b);
    for (const h of n) {
      const v = $o(h.score), s = ae("line", {
        stroke: z.netHaloColor,
        "stroke-width": hr + 12,
        "stroke-linecap": "round",
        opacity: 0,
        "pointer-events": "none"
      }), i = ae("line", {
        stroke: v,
        "stroke-width": hr + (h.score ?? 0.5) * (ac - hr),
        "stroke-opacity": 0.9,
        "pointer-events": "none"
      }), u = go(
        ae("line", { stroke: "transparent", "stroke-width": ic, style: "cursor:pointer;" }),
        `${je(h.from)} -> ${je(h.to)}${h.score == null ? "" : `
score ${h.score.toFixed(3)}`}`
      );
      if (u.addEventListener("click", (k) => {
        k.stopPropagation(), a(h.index);
      }), g.push(s), $.append(s, i), S.appendChild(u), h.score != null) {
        const k = ae("text", {
          "text-anchor": "middle",
          "dominant-baseline": "middle",
          "font-size": 10,
          "font-weight": 600,
          fill: z.netEdgeLabel
        });
        k.textContent = h.score.toFixed(2), w.appendChild(k);
      } else
        w.appendChild(ae("text"));
    }
    const E = [], _ = [], d = o.map((h) => {
      const v = go(ae("g", { style: "cursor:grab;" }), `${je(h)}
${h.smiles ?? ""}
${h["gufe-key"]}`);
      v.appendChild(
        ae("circle", {
          r: Lt,
          fill: z.netNodeFill,
          stroke: z.netNodeStroke,
          "stroke-width": 1.5
        })
      );
      const s = ae("g", { "pointer-events": "none" });
      v.appendChild(s), E.push(s);
      const i = ae("text", {
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        "font-size": 16,
        "font-weight": 700,
        fill: z.netInitials,
        "pointer-events": "none"
      });
      i.textContent = je(h).slice(0, 2).toUpperCase(), v.appendChild(i), _.push(i);
      const u = ae("text", {
        "text-anchor": "middle",
        y: Lt + 14,
        "font-size": 11,
        "font-weight": 600,
        fill: z.netNodeLabel,
        "pointer-events": "none"
      });
      return u.textContent = lc(je(h), 16), v.appendChild(u), b.appendChild(v), v;
    }), m = () => {
      n.forEach((h, v) => {
        for (const i of [g[v], $.children[v * 2 + 1], S.children[v]]) {
          const u = i;
          u.setAttribute("x1", String(h.from.x)), u.setAttribute("y1", String(h.from.y)), u.setAttribute("x2", String(h.to.x)), u.setAttribute("y2", String(h.to.y));
        }
        const s = w.children[v];
        s.setAttribute("x", String((h.from.x + h.to.x) / 2)), s.setAttribute("y", String((h.from.y + h.to.y) / 2 - 8));
      }), o.forEach((h, v) => d[v].setAttribute("transform", `translate(${h.x},${h.y})`));
    };
    m();
    const l = this.#t(c, p, o, d, m);
    return {
      setSelected(h) {
        g.forEach((v, s) => v.setAttribute("opacity", s === h ? "0.95" : "0"));
      },
      depict(h) {
        const v = (Lt - 4) * 2 / Ue, s = new DOMParser();
        let i = 0;
        return o.forEach((u, k) => {
          const C = u.sdf && vr(h, u.sdf, Ue);
          if (!C) return;
          const N = s.parseFromString(C, "image/svg+xml").documentElement;
          if (!N || N.nodeName.toLowerCase() === "parsererror") return;
          const M = E[k];
          M.setAttribute(
            "transform",
            `translate(${-v * Ue / 2},${-v * Ue / 2}) scale(${v})`
          );
          let T = 0;
          for (const q of Array.from(N.childNodes)) {
            if (q.nodeType !== 1) continue;
            const B = q.nodeName.toLowerCase();
            if (!(B === "defs" || B === "metadata" || B === "title")) {
              if (B === "rect") {
                const Q = (q.getAttribute("fill") ?? "").toLowerCase();
                if (Q === "#ffffff" || Q === "white" || Q === "rgb(255,255,255)") continue;
              }
              M.appendChild(document.importNode(q, !0)), T++;
            }
          }
          T && (_[k].setAttribute("display", "none"), i++);
        }), i;
      },
      reset: l.reset,
      cleanup: l.cleanup
    };
  }
  /** Wheel zoom, background pan, node drag - ~40 lines instead of d3-zoom and
   * d3-drag, and they keep working when d3 is unreachable. */
  #t(t, o, n, f, r) {
    let a = 1, c = 0, p = 0;
    const g = () => o.setAttribute("transform", `translate(${c},${p}) scale(${a})`), S = qo(t, {
      onZoom: (d) => {
        const m = t.getBoundingClientRect(), l = d.clientX - m.left, h = d.clientY - m.top, v = Math.min(5 / a, Math.max(0.15 / a, Math.exp(-d.deltaY * 2e-3)));
        c = l - (l - c) * v, p = h - (h - p) * v, a *= v, g();
      },
      hint: "Click the graph or hold Ctrl to zoom"
    });
    let w = null;
    const b = (d) => {
      w = { x: d.clientX - c, y: d.clientY - p };
    }, E = (d) => {
      w && (c = d.clientX - w.x, p = d.clientY - w.y, g());
    }, _ = () => {
      w = null;
    };
    return t.addEventListener("pointerdown", b), t.addEventListener("pointermove", E), t.addEventListener("pointerup", _), t.addEventListener("pointercancel", _), t.addEventListener("pointerleave", _), f.forEach((d, m) => {
      let l = null;
      d.addEventListener("pointerdown", (v) => {
        v.stopPropagation(), l = { x: v.clientX - n[m].x * a, y: v.clientY - n[m].y * a }, d.setPointerCapture(v.pointerId);
      }), d.addEventListener("pointermove", (v) => {
        l && (n[m].x = n[m].fx = (v.clientX - l.x) / a, n[m].y = n[m].fy = (v.clientY - l.y) / a, r());
      });
      const h = () => {
        l = null;
      };
      d.addEventListener("pointerup", h), d.addEventListener("pointercancel", h);
    }), {
      reset() {
        a = 1, c = 0, p = 0, g();
      },
      cleanup() {
        S.cleanup(), t.removeEventListener("pointerdown", b), t.removeEventListener("pointermove", E), t.removeEventListener("pointerup", _), t.removeEventListener("pointercancel", _), t.removeEventListener("pointerleave", _);
      }
    };
  }
}
function uc(e, t, o, n, f) {
  const r = t / 2, a = o / 2, c = (p, g) => {
    p.forEach(($, S) => {
      const w = 2 * Math.PI * S / Math.max(1, p.length) - Math.PI / 2;
      $.x = r + g * Math.cos(w), $.y = a + g * Math.sin(w), $.fx = n === "Force-directed" ? void 0 : $.x, $.fy = n === "Force-directed" ? void 0 : $.y;
    });
  };
  if (n === "Radial" && e.length) {
    const p = new Map(e.map((_) => [_["gufe-key"], []]));
    for (const _ of f)
      p.get(_.from["gufe-key"]).push(_.to["gufe-key"]), p.get(_.to["gufe-key"]).push(_.from["gufe-key"]);
    const g = new Map(e.map((_) => [_["gufe-key"], _])), $ = e.reduce(
      (_, d) => p.get(d["gufe-key"]).length > p.get(_["gufe-key"]).length ? d : _
    ), S = /* @__PURE__ */ new Set([$["gufe-key"]]);
    let w = [$["gufe-key"]], b = 0;
    const E = Math.min(t, o) * 0.18;
    for (; w.length; ) {
      c(
        w.map((d) => g.get(d)),
        b === 0 ? 0 : b * E + 40
      );
      const _ = [];
      for (const d of w)
        for (const m of p.get(d))
          S.has(m) || (S.add(m), _.push(m));
      w = _, b++;
    }
    c(e.filter((_) => !S.has(_["gufe-key"])), Math.min(t, o) * 0.45);
    return;
  }
  c(e, Math.min(t, o) * 0.34);
}
async function fc(e, t, o, n) {
  let f;
  try {
    if (f = await qi(), typeof f?.forceSimulation != "function") return !1;
  } catch {
    return !1;
  }
  const r = t.map((p) => ({ source: p.from["gufe-key"], target: p.to["gufe-key"], score: p.score })), a = f.forceSimulation(e).force(
    "link",
    f.forceLink(r).id((p) => p["gufe-key"]).distance((p) => he.linkBaseDistance + (1 - (p.score ?? 0.5)) * he.linkScoreBonus).strength(he.linkStrength)
  ).force(
    "charge",
    f.forceManyBody().strength(he.chargeStrength).distanceMin(he.chargeDistanceMin).distanceMax(he.chargeDistanceMax)
  ).force("center", f.forceCenter(o / 2, n / 2).strength(he.centerStrength)).force("collision", f.forceCollide(Lt + he.collisionPadding).iterations(he.collisionIterations)).force("x", f.forceX(o / 2).strength(he.drift)).force("y", f.forceY(n / 2).strength(he.drift)).stop(), c = Math.ceil(Math.log(a.alphaMin()) / Math.log(1 - a.alphaDecay()));
  for (let p = 0; p < c * he.tickMultiplier; p++) a.tick();
  return !0;
}
Gt("gufe-ligand-network", dc);
const vc = {
  elementChange: "#005AB5",
  uniqueAtom: "#DC3220",
  elementChange3D: "0x005AB5",
  uniqueAtom3D: "0xDC3220"
}, _c = [
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
], bc = "hsv";
function wc(e, t) {
  let o = e.querySelector("gufe-view");
  return o || (o = document.createElement("gufe-view"), o.style.cssText = "display:block;width:100%;height:100%;", e.appendChild(o)), t !== void 0 && (o.payload = t), o;
}
export {
  Lo as CHROME_OPEN_BY_DEFAULT,
  Uo as DEBUG_ATTRIBUTE,
  Ho as DEBUG_GLOBAL,
  zi as DEFAULT_ZOOM_BOUNDS,
  Ht as GufeElement,
  dc as GufeLigandNetwork,
  tc as GufeProtein,
  Gi as GufeSmallMolecule,
  Ti as GufeView,
  vc as MAPPING_COLORS,
  _c as MAPPING_RAMP_3D,
  bc as MAPPING_RAMP_NAME,
  hc as PAYLOAD_TYPES,
  mc as SCHEMA_TYPES,
  jr as VIEW_TAGS,
  Vi as boundedZoom,
  rc as buildRegistry,
  pc as chromeMenu,
  Wo as debugEnabled,
  Gt as defineElement,
  To as describeProblem,
  gc as dispatchProblem,
  oc as entryLabel,
  Ai as formatIssues,
  qo as guardWheel,
  Xo as logPayload,
  nc as lookup,
  br as lookupOfType,
  $c as mappingPayloadFor,
  wc as mount,
  Yo as payloadJson,
  Tr as resetControl,
  yc as validateAs,
  ji as validatePayload,
  xo as viewerInteraction,
  Li as wheelFactor
};
