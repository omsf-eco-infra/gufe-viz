const ir = {
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
    netHaloColor: "#fbcfe8",
    boxFill: "#eff6ff",
    boxStroke: "#bfdbfe"
  }
};
function hi() {
  try {
    return globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches ?? !1;
  } catch {
    return !1;
  }
}
const x = hi() ? ir.dark : ir.light;
function z(e, t, n) {
  const o = document.createElement(e);
  return t && (o.style.cssText = t), n != null && (o.textContent = n), o;
}
function dn(e) {
  return String(e ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function me(e) {
  if (e == null) return "unknown error";
  const t = e.message;
  if (typeof t == "string" && t) return t;
  const n = String(e);
  return n === "[object Object]" ? e.name || "unknown error" : n;
}
const tt = (e) => e.toLocaleString("en-US"), Ye = "-", Qe = `background:${x.btnBg};color:${x.btnFg};border:1px solid ${x.btnBorder};padding:4px 9px;font-size:11px;font-weight:bold;border-radius:3px;cursor:pointer;font-family:inherit;`, Ko = `background:${x.selectBg};color:${x.textPrimary};border:1px solid ${x.selectBorder};border-radius:6px;padding:4px 8px;font-size:12px;cursor:pointer;font-family:inherit;`;
function mn(e, t, n) {
  const o = z("div", "display:flex;gap:4px;"), c = e.map((r) => {
    const s = z("button", Qe, r.label);
    return s.title = r.title || r.label, s.onmouseover = () => {
      s.style.background = x.btnBgHover;
    }, s.onmouseout = () => {
      s.style.background = t === r.id ? x.btnBgActive : x.btnBg;
    }, s.onclick = () => {
      o.setActive(r.id), n(r.id);
    }, o.appendChild(s), { id: r.id, btn: s };
  });
  return o.setActive = (r) => {
    t = r, c.forEach((s) => {
      s.btn.style.background = s.id === t ? x.btnBgActive : x.btnBg;
    });
  }, o.setActive(t), o;
}
function se(e, t, n) {
  const o = z("span", "display:inline-flex;align-items:center;gap:5px;white-space:nowrap;");
  n && o.appendChild(
    z("span", `width:8px;height:8px;border-radius:50%;background:${n};display:inline-block;`)
  );
  const c = z("span");
  return c.innerHTML = `${dn(e)} <b style="color:${x.textPrimary};">${dn(t)}</b>`, o.appendChild(c), o;
}
function De(e, t) {
  const n = z("div", "", `⚠ ${t}`);
  return n.style.cssText = `position:absolute;top:10px;left:50%;transform:translateX(-50%);max-width:90%;z-index:20;padding:6px 14px;border-radius:6px;font-size:12px;background:${x.warnBg};color:${x.warnFg};border:1px solid ${x.warnBorder};`, e.appendChild(n), n;
}
function ie(e, t = !1) {
  return z(
    "div",
    `flex:1;display:flex;align-items:center;justify-content:center;text-align:center;padding:24px;font-size:13px;color:${t ? x.errorFg : x.textMuted2};`,
    e
  );
}
function Fe(e, t) {
  const n = z(
    "div",
    `display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;padding:9px 14px;flex-shrink:0;background:${x.toolbarBg};border-bottom:1px solid ${x.toolbarBorder};`
  );
  return n.titleEl = z("span", `font-weight:700;font-size:15px;color:${x.titleColor};letter-spacing:.02em;`, e), n.subtitleEl = z("span", `font-size:12px;color:${x.textMuted2};`, t || ""), n.statsEl = z(
    "div",
    `display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-left:auto;font-size:11px;color:${x.textMuted};`
  ), n.toggleEl = z("div", "display:flex;align-items:center;margin-left:10px;flex-shrink:0;"), n.appendChild(n.titleEl), n.appendChild(n.subtitleEl), n.appendChild(n.statsEl), n.appendChild(n.toggleEl), n;
}
function Ee(e, t, n = !1) {
  const o = z("div", "display:flex;gap:12px;align-items:baseline;padding:5px 0;min-width:0;");
  o.appendChild(
    z(
      "span",
      `flex:0 0 128px;font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:${x.textMuted2};`,
      e
    )
  );
  const c = z(
    "span",
    `flex:1;min-width:0;user-select:text;cursor:text;overflow-wrap:anywhere;color:${x.textPrimary};` + (n ? "font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:11px;" : "font-size:12px;"),
    t
  );
  return c.title = t, o.appendChild(c), o;
}
function lt(e) {
  return z(
    "span",
    `padding:1px 7px;border-radius:10px;font-size:10px;font-weight:700;letter-spacing:.04em;white-space:nowrap;background:${x.badgeBg};color:${x.badgeFg};`,
    e
  );
}
function un() {
  return z(
    "div",
    `display:flex;flex-direction:column;gap:2px;padding:14px 18px;border-radius:10px;background:${x.cardBg};border:1px solid ${x.cardBorder};`
  );
}
function Bn() {
  const e = z("div", "flex:1;position:relative;min-height:0;min-width:0;"), t = z("div", "position:absolute;inset:0;");
  return t.dataset.gufeViewer = "", e.appendChild(t), { wrap: e, container: t };
}
const mi = !1;
function gi() {
  const e = z("span", "display:inline-flex;flex-direction:column;gap:2px;justify-content:center;");
  for (let t = 0; t < 3; t++)
    e.appendChild(z("span", `display:block;width:11px;height:1.5px;border-radius:1px;background:${x.btnFg};`));
  return e;
}
function vl(e, t, n = {}) {
  let o = n.open ?? mi, c = !1;
  const r = z("div", "flex-shrink:0;"), s = z("button", `${Qe}display:inline-flex;align-items:center;gap:6px;padding:4px 8px;`);
  s.appendChild(gi()), s.setAttribute("aria-label", n.label || "Toggle menu");
  const i = () => {
    o && !c && (c = !0, r.appendChild(t())), r.style.display = o ? "" : "none", s.style.background = o ? x.btnBgActive : x.btnBg, s.setAttribute("aria-expanded", String(o));
  }, d = (g) => {
    g !== o && (o = g, i(), n.onToggle?.(o));
  };
  return s.onclick = () => d(!o), s.onmouseover = () => {
    s.style.background = o ? x.btnBgActive : x.btnBgHover;
  }, s.onmouseout = () => {
    s.style.background = o ? x.btnBgActive : x.btnBg;
  }, e.toggleEl.appendChild(s), i(), {
    panel: r,
    isOpen: () => o,
    setOpen: d
  };
}
const yi = ["debug", "gufe-debug"], vi = "debug", $i = "GUFE_VIZ_DEBUG";
function bi() {
  return !!globalThis[$i];
}
function _i() {
  try {
    const e = globalThis.location?.search;
    if (!e) return !1;
    const t = new URLSearchParams(e);
    return yi.some((n) => t.has(n));
  } catch {
    return !1;
  }
}
function wi(e) {
  return e?.hasAttribute?.(vi) ? !0 : bi() || _i();
}
function Si(e) {
  try {
    return JSON.stringify(e, null, 2) ?? String(e);
  } catch (t) {
    return `<could not be stringified: ${me(t)}>`;
  }
}
function Ci(e, t, n) {
  if (!wi(n)) return;
  const o = Si(t), c = t?.type, r = `[gufe-viz] ${e}${typeof c == "string" ? ` ${c}` : ""} (${o.length} chars)`, s = typeof console.groupCollapsed == "function";
  s ? console.groupCollapsed(r) : console.log(r), console.log(o), console.log(t), s && console.groupEnd?.();
}
const ki = 150;
class we extends HTMLElement {
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
    this.style.display = "block", this.style.width = this.style.width || "100%", this.style.height = this.style.height || "100%", this.style.background = x.appBg, this.style.color = x.textPrimary, this.style.fontFamily = "'Inter',system-ui,sans-serif", typeof ResizeObserver < "u" && !this.#n && (this.#n = new ResizeObserver(() => {
      this.#o && clearTimeout(this.#o), this.#o = setTimeout(() => this.#e?.onResize?.(), ki);
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
    return this.#s(), this.#r = z(
      "div",
      `width:100%;height:100%;display:flex;flex-direction:column;overflow:hidden;background:${x.appBg};`
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
      t.appendChild(ie(this.placeholder()));
      return;
    }
    let o;
    try {
      o = this.renderView(t, this.#t);
    } catch (c) {
      this.#l(t, n, c);
      return;
    }
    o instanceof Promise ? o.then(
      (c) => this.#c(c, n),
      (c) => this.#l(t, n, c)
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
    n === this.#i && (console.warn("[gufe-viz] render failed:", o), t.replaceChildren(ie(`Failed to render: ${me(o)}`, !0)));
  }
  /** Force a resize pass - for hosts that know they resized us. */
  resize() {
    this.#e?.onResize?.();
  }
}
function Se(e, t) {
  typeof customElements > "u" || customElements.get(e) || customElements.define(e, t);
}
function Ei(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ut = { exports: {} }, kn = {}, xe = {}, je = {}, En = {}, Pn = {}, xn = {}, sr;
function fn() {
  return sr || (sr = 1, (function(e) {
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
        return (u = this._str) !== null && u !== void 0 ? u : this._str = this._items.reduce((b, k) => `${b}${k}`, "");
      }
      get names() {
        var u;
        return (u = this._names) !== null && u !== void 0 ? u : this._names = this._items.reduce((b, k) => (k instanceof n && (b[k.str] = (b[k.str] || 0) + 1), b), {});
      }
    }
    e._Code = o, e.nil = new o("");
    function c(m, ...u) {
      const b = [m[0]];
      let k = 0;
      for (; k < u.length; )
        i(b, u[k]), b.push(m[++k]);
      return new o(b);
    }
    e._ = c;
    const r = new o("+");
    function s(m, ...u) {
      const b = [y(m[0])];
      let k = 0;
      for (; k < u.length; )
        b.push(r), i(b, u[k]), b.push(r, y(m[++k]));
      return d(b), new o(b);
    }
    e.str = s;
    function i(m, u) {
      u instanceof o ? m.push(...u._items) : u instanceof n ? m.push(u) : m.push(w(u));
    }
    e.addCodeArg = i;
    function d(m) {
      let u = 1;
      for (; u < m.length - 1; ) {
        if (m[u] === r) {
          const b = g(m[u - 1], m[u + 1]);
          if (b !== void 0) {
            m.splice(u - 1, 3, b);
            continue;
          }
          m[u++] = "+";
        }
        u++;
      }
    }
    function g(m, u) {
      if (u === '""')
        return m;
      if (m === '""')
        return u;
      if (typeof m == "string")
        return u instanceof n || m[m.length - 1] !== '"' ? void 0 : typeof u != "string" ? `${m.slice(0, -1)}${u}"` : u[0] === '"' ? m.slice(0, -1) + u.slice(1) : void 0;
      if (typeof u == "string" && u[0] === '"' && !(m instanceof n))
        return `"${m}${u.slice(1)}`;
    }
    function h(m, u) {
      return u.emptyStr() ? m : m.emptyStr() ? u : s`${m}${u}`;
    }
    e.strConcat = h;
    function w(m) {
      return typeof m == "number" || typeof m == "boolean" || m === null ? m : y(Array.isArray(m) ? m.join(",") : m);
    }
    function $(m) {
      return new o(y(m));
    }
    e.stringify = $;
    function y(m) {
      return JSON.stringify(m).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    e.safeStringify = y;
    function _(m) {
      return typeof m == "string" && e.IDENTIFIER.test(m) ? new o(`.${m}`) : c`[${m}]`;
    }
    e.getProperty = _;
    function S(m) {
      if (typeof m == "string" && e.IDENTIFIER.test(m))
        return new o(`${m}`);
      throw new Error(`CodeGen: invalid export name: ${m}, use explicit $id name mapping`);
    }
    e.getEsmExportName = S;
    function p(m) {
      return new o(m.toString());
    }
    e.regexpCode = p;
  })(xn)), xn;
}
var Rn = {}, ar;
function cr() {
  return ar || (ar = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0;
    const t = /* @__PURE__ */ fn();
    class n extends Error {
      constructor(g) {
        super(`CodeGen: "code" for ${g} not defined`), this.value = g.value;
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
    class c {
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
    e.Scope = c;
    class r extends t.Name {
      constructor(g, h) {
        super(h), this.prefix = g;
      }
      setValue(g, { property: h, itemIndex: w }) {
        this.value = g, this.scopePath = (0, t._)`.${new t.Name(h)}[${w}]`;
      }
    }
    e.ValueScopeName = r;
    const s = (0, t._)`\n`;
    class i extends c {
      constructor(g) {
        super(g), this._values = {}, this._scope = g.scope, this.opts = { ...g, _n: g.lines ? s : t.nil };
      }
      get() {
        return this._scope;
      }
      name(g) {
        return new r(g, this._newName(g));
      }
      value(g, h) {
        var w;
        if (h.ref === void 0)
          throw new Error("CodeGen: ref must be passed in value");
        const $ = this.toName(g), { prefix: y } = $, _ = (w = h.key) !== null && w !== void 0 ? w : h.ref;
        let S = this._values[y];
        if (S) {
          const u = S.get(_);
          if (u)
            return u;
        } else
          S = this._values[y] = /* @__PURE__ */ new Map();
        S.set(_, $);
        const p = this._scope[y] || (this._scope[y] = []), m = p.length;
        return p[m] = h.ref, $.setValue(h, { property: y, itemIndex: m }), $;
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
        let y = t.nil;
        for (const _ in g) {
          const S = g[_];
          if (!S)
            continue;
          const p = w[_] = w[_] || /* @__PURE__ */ new Map();
          S.forEach((m) => {
            if (p.has(m))
              return;
            p.set(m, o.Started);
            let u = h(m);
            if (u) {
              const b = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
              y = (0, t._)`${y}${b} ${m} = ${u};${this.opts._n}`;
            } else if (u = $?.(m))
              y = (0, t._)`${y}${u}${this.opts._n}`;
            else
              throw new n(m);
            p.set(m, o.Completed);
          });
        }
        return y;
      }
    }
    e.ValueScope = i;
  })(Rn)), Rn;
}
var lr;
function W() {
  return lr || (lr = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
    const t = /* @__PURE__ */ fn(), n = /* @__PURE__ */ cr();
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
    var c = /* @__PURE__ */ cr();
    Object.defineProperty(e, "Scope", { enumerable: !0, get: function() {
      return c.Scope;
    } }), Object.defineProperty(e, "ValueScope", { enumerable: !0, get: function() {
      return c.ValueScope;
    } }), Object.defineProperty(e, "ValueScopeName", { enumerable: !0, get: function() {
      return c.ValueScopeName;
    } }), Object.defineProperty(e, "varKinds", { enumerable: !0, get: function() {
      return c.varKinds;
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
      optimizeNames(v, C) {
        return this;
      }
    }
    class s extends r {
      constructor(v, C, T) {
        super(), this.varKind = v, this.name = C, this.rhs = T;
      }
      render({ es5: v, _n: C }) {
        const T = v ? n.varKinds.var : this.varKind, K = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
        return `${T} ${this.name}${K};` + C;
      }
      optimizeNames(v, C) {
        if (v[this.name.str])
          return this.rhs && (this.rhs = U(this.rhs, v, C)), this;
      }
      get names() {
        return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
      }
    }
    class i extends r {
      constructor(v, C, T) {
        super(), this.lhs = v, this.rhs = C, this.sideEffects = T;
      }
      render({ _n: v }) {
        return `${this.lhs} = ${this.rhs};` + v;
      }
      optimizeNames(v, C) {
        if (!(this.lhs instanceof t.Name && !v[this.lhs.str] && !this.sideEffects))
          return this.rhs = U(this.rhs, v, C), this;
      }
      get names() {
        const v = this.lhs instanceof t.Name ? {} : { ...this.lhs.names };
        return D(v, this.rhs);
      }
    }
    class d extends i {
      constructor(v, C, T, K) {
        super(v, T, K), this.op = C;
      }
      render({ _n: v }) {
        return `${this.lhs} ${this.op}= ${this.rhs};` + v;
      }
    }
    class g extends r {
      constructor(v) {
        super(), this.label = v, this.names = {};
      }
      render({ _n: v }) {
        return `${this.label}:` + v;
      }
    }
    class h extends r {
      constructor(v) {
        super(), this.label = v, this.names = {};
      }
      render({ _n: v }) {
        return `break${this.label ? ` ${this.label}` : ""};` + v;
      }
    }
    class w extends r {
      constructor(v) {
        super(), this.error = v;
      }
      render({ _n: v }) {
        return `throw ${this.error};` + v;
      }
      get names() {
        return this.error.names;
      }
    }
    class $ extends r {
      constructor(v) {
        super(), this.code = v;
      }
      render({ _n: v }) {
        return `${this.code};` + v;
      }
      optimizeNodes() {
        return `${this.code}` ? this : void 0;
      }
      optimizeNames(v, C) {
        return this.code = U(this.code, v, C), this;
      }
      get names() {
        return this.code instanceof t._CodeOrName ? this.code.names : {};
      }
    }
    class y extends r {
      constructor(v = []) {
        super(), this.nodes = v;
      }
      render(v) {
        return this.nodes.reduce((C, T) => C + T.render(v), "");
      }
      optimizeNodes() {
        const { nodes: v } = this;
        let C = v.length;
        for (; C--; ) {
          const T = v[C].optimizeNodes();
          Array.isArray(T) ? v.splice(C, 1, ...T) : T ? v[C] = T : v.splice(C, 1);
        }
        return v.length > 0 ? this : void 0;
      }
      optimizeNames(v, C) {
        const { nodes: T } = this;
        let K = T.length;
        for (; K--; ) {
          const G = T[K];
          G.optimizeNames(v, C) || (ne(v, G.names), T.splice(K, 1));
        }
        return T.length > 0 ? this : void 0;
      }
      get names() {
        return this.nodes.reduce((v, C) => j(v, C.names), {});
      }
    }
    class _ extends y {
      render(v) {
        return "{" + v._n + super.render(v) + "}" + v._n;
      }
    }
    class S extends y {
    }
    class p extends _ {
    }
    p.kind = "else";
    class m extends _ {
      constructor(v, C) {
        super(C), this.condition = v;
      }
      render(v) {
        let C = `if(${this.condition})` + super.render(v);
        return this.else && (C += "else " + this.else.render(v)), C;
      }
      optimizeNodes() {
        super.optimizeNodes();
        const v = this.condition;
        if (v === !0)
          return this.nodes;
        let C = this.else;
        if (C) {
          const T = C.optimizeNodes();
          C = this.else = Array.isArray(T) ? new p(T) : T;
        }
        if (C)
          return v === !1 ? C instanceof m ? C : C.nodes : this.nodes.length ? this : new m(ee(v), C instanceof m ? [C] : C.nodes);
        if (!(v === !1 || !this.nodes.length))
          return this;
      }
      optimizeNames(v, C) {
        var T;
        if (this.else = (T = this.else) === null || T === void 0 ? void 0 : T.optimizeNames(v, C), !!(super.optimizeNames(v, C) || this.else))
          return this.condition = U(this.condition, v, C), this;
      }
      get names() {
        const v = super.names;
        return D(v, this.condition), this.else && j(v, this.else.names), v;
      }
    }
    m.kind = "if";
    class u extends _ {
    }
    u.kind = "for";
    class b extends u {
      constructor(v) {
        super(), this.iteration = v;
      }
      render(v) {
        return `for(${this.iteration})` + super.render(v);
      }
      optimizeNames(v, C) {
        if (super.optimizeNames(v, C))
          return this.iteration = U(this.iteration, v, C), this;
      }
      get names() {
        return j(super.names, this.iteration.names);
      }
    }
    class k extends u {
      constructor(v, C, T, K) {
        super(), this.varKind = v, this.name = C, this.from = T, this.to = K;
      }
      render(v) {
        const C = v.es5 ? n.varKinds.var : this.varKind, { name: T, from: K, to: G } = this;
        return `for(${C} ${T}=${K}; ${T}<${G}; ${T}++)` + super.render(v);
      }
      get names() {
        const v = D(super.names, this.from);
        return D(v, this.to);
      }
    }
    class a extends u {
      constructor(v, C, T, K) {
        super(), this.loop = v, this.varKind = C, this.name = T, this.iterable = K;
      }
      render(v) {
        return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(v);
      }
      optimizeNames(v, C) {
        if (super.optimizeNames(v, C))
          return this.iterable = U(this.iterable, v, C), this;
      }
      get names() {
        return j(super.names, this.iterable.names);
      }
    }
    class l extends _ {
      constructor(v, C, T) {
        super(), this.name = v, this.args = C, this.async = T;
      }
      render(v) {
        return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(v);
      }
    }
    l.kind = "func";
    class f extends y {
      render(v) {
        return "return " + super.render(v);
      }
    }
    f.kind = "return";
    class E extends _ {
      render(v) {
        let C = "try" + super.render(v);
        return this.catch && (C += this.catch.render(v)), this.finally && (C += this.finally.render(v)), C;
      }
      optimizeNodes() {
        var v, C;
        return super.optimizeNodes(), (v = this.catch) === null || v === void 0 || v.optimizeNodes(), (C = this.finally) === null || C === void 0 || C.optimizeNodes(), this;
      }
      optimizeNames(v, C) {
        var T, K;
        return super.optimizeNames(v, C), (T = this.catch) === null || T === void 0 || T.optimizeNames(v, C), (K = this.finally) === null || K === void 0 || K.optimizeNames(v, C), this;
      }
      get names() {
        const v = super.names;
        return this.catch && j(v, this.catch.names), this.finally && j(v, this.finally.names), v;
      }
    }
    class P extends _ {
      constructor(v) {
        super(), this.error = v;
      }
      render(v) {
        return `catch(${this.error})` + super.render(v);
      }
    }
    P.kind = "catch";
    class A extends _ {
      render(v) {
        return "finally" + super.render(v);
      }
    }
    A.kind = "finally";
    class O {
      constructor(v, C = {}) {
        this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ...C, _n: C.lines ? `
` : "" }, this._extScope = v, this._scope = new n.Scope({ parent: v }), this._nodes = [new S()];
      }
      toString() {
        return this._root.render(this.opts);
      }
      // returns unique name in the internal scope
      name(v) {
        return this._scope.name(v);
      }
      // reserves unique name in the external scope
      scopeName(v) {
        return this._extScope.name(v);
      }
      // reserves unique name in the external scope and assigns value to it
      scopeValue(v, C) {
        const T = this._extScope.value(v, C);
        return (this._values[T.prefix] || (this._values[T.prefix] = /* @__PURE__ */ new Set())).add(T), T;
      }
      getScopeValue(v, C) {
        return this._extScope.getValue(v, C);
      }
      // return code that assigns values in the external scope to the names that are used internally
      // (same names that were returned by gen.scopeName or gen.scopeValue)
      scopeRefs(v) {
        return this._extScope.scopeRefs(v, this._values);
      }
      scopeCode() {
        return this._extScope.scopeCode(this._values);
      }
      _def(v, C, T, K) {
        const G = this._scope.toName(C);
        return T !== void 0 && K && (this._constants[G.str] = T), this._leafNode(new s(v, G, T)), G;
      }
      // `const` declaration (`var` in es5 mode)
      const(v, C, T) {
        return this._def(n.varKinds.const, v, C, T);
      }
      // `let` declaration with optional assignment (`var` in es5 mode)
      let(v, C, T) {
        return this._def(n.varKinds.let, v, C, T);
      }
      // `var` declaration with optional assignment
      var(v, C, T) {
        return this._def(n.varKinds.var, v, C, T);
      }
      // assignment code
      assign(v, C, T) {
        return this._leafNode(new i(v, C, T));
      }
      // `+=` code
      add(v, C) {
        return this._leafNode(new d(v, e.operators.ADD, C));
      }
      // appends passed SafeExpr to code or executes Block
      code(v) {
        return typeof v == "function" ? v() : v !== t.nil && this._leafNode(new $(v)), this;
      }
      // returns code for object literal for the passed argument list of key-value pairs
      object(...v) {
        const C = ["{"];
        for (const [T, K] of v)
          C.length > 1 && C.push(","), C.push(T), (T !== K || this.opts.es5) && (C.push(":"), (0, t.addCodeArg)(C, K));
        return C.push("}"), new t._Code(C);
      }
      // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
      if(v, C, T) {
        if (this._blockNode(new m(v)), C && T)
          this.code(C).else().code(T).endIf();
        else if (C)
          this.code(C).endIf();
        else if (T)
          throw new Error('CodeGen: "else" body without "then" body');
        return this;
      }
      // `else if` clause - invalid without `if` or after `else` clauses
      elseIf(v) {
        return this._elseNode(new m(v));
      }
      // `else` clause - only valid after `if` or `else if` clauses
      else() {
        return this._elseNode(new p());
      }
      // end `if` statement (needed if gen.if was used only with condition)
      endIf() {
        return this._endBlockNode(m, p);
      }
      _for(v, C) {
        return this._blockNode(v), C && this.code(C).endFor(), this;
      }
      // a generic `for` clause (or statement if `forBody` is passed)
      for(v, C) {
        return this._for(new b(v), C);
      }
      // `for` statement for a range of values
      forRange(v, C, T, K, G = this.opts.es5 ? n.varKinds.var : n.varKinds.let) {
        const te = this._scope.toName(v);
        return this._for(new k(G, te, C, T), () => K(te));
      }
      // `for-of` statement (in es5 mode replace with a normal for loop)
      forOf(v, C, T, K = n.varKinds.const) {
        const G = this._scope.toName(v);
        if (this.opts.es5) {
          const te = C instanceof t.Name ? C : this.var("_arr", C);
          return this.forRange("_i", 0, (0, t._)`${te}.length`, (Z) => {
            this.var(G, (0, t._)`${te}[${Z}]`), T(G);
          });
        }
        return this._for(new a("of", K, G, C), () => T(G));
      }
      // `for-in` statement.
      // With option `ownProperties` replaced with a `for-of` loop for object keys
      forIn(v, C, T, K = this.opts.es5 ? n.varKinds.var : n.varKinds.const) {
        if (this.opts.ownProperties)
          return this.forOf(v, (0, t._)`Object.keys(${C})`, T);
        const G = this._scope.toName(v);
        return this._for(new a("in", K, G, C), () => T(G));
      }
      // end `for` loop
      endFor() {
        return this._endBlockNode(u);
      }
      // `label` statement
      label(v) {
        return this._leafNode(new g(v));
      }
      // `break` statement
      break(v) {
        return this._leafNode(new h(v));
      }
      // `return` statement
      return(v) {
        const C = new f();
        if (this._blockNode(C), this.code(v), C.nodes.length !== 1)
          throw new Error('CodeGen: "return" should have one node');
        return this._endBlockNode(f);
      }
      // `try` statement
      try(v, C, T) {
        if (!C && !T)
          throw new Error('CodeGen: "try" without "catch" and "finally"');
        const K = new E();
        if (this._blockNode(K), this.code(v), C) {
          const G = this.name("e");
          this._currNode = K.catch = new P(G), C(G);
        }
        return T && (this._currNode = K.finally = new A(), this.code(T)), this._endBlockNode(P, A);
      }
      // `throw` statement
      throw(v) {
        return this._leafNode(new w(v));
      }
      // start self-balancing block
      block(v, C) {
        return this._blockStarts.push(this._nodes.length), v && this.code(v).endBlock(C), this;
      }
      // end the current self-balancing block
      endBlock(v) {
        const C = this._blockStarts.pop();
        if (C === void 0)
          throw new Error("CodeGen: not in self-balancing block");
        const T = this._nodes.length - C;
        if (T < 0 || v !== void 0 && T !== v)
          throw new Error(`CodeGen: wrong number of nodes: ${T} vs ${v} expected`);
        return this._nodes.length = C, this;
      }
      // `function` heading (or definition if funcBody is passed)
      func(v, C = t.nil, T, K) {
        return this._blockNode(new l(v, C, T)), K && this.code(K).endFunc(), this;
      }
      // end function definition
      endFunc() {
        return this._endBlockNode(l);
      }
      optimize(v = 1) {
        for (; v-- > 0; )
          this._root.optimizeNodes(), this._root.optimizeNames(this._root.names, this._constants);
      }
      _leafNode(v) {
        return this._currNode.nodes.push(v), this;
      }
      _blockNode(v) {
        this._currNode.nodes.push(v), this._nodes.push(v);
      }
      _endBlockNode(v, C) {
        const T = this._currNode;
        if (T instanceof v || C && T instanceof C)
          return this._nodes.pop(), this;
        throw new Error(`CodeGen: not in block "${C ? `${v.kind}/${C.kind}` : v.kind}"`);
      }
      _elseNode(v) {
        const C = this._currNode;
        if (!(C instanceof m))
          throw new Error('CodeGen: "else" without "if"');
        return this._currNode = C.else = v, this;
      }
      get _root() {
        return this._nodes[0];
      }
      get _currNode() {
        const v = this._nodes;
        return v[v.length - 1];
      }
      set _currNode(v) {
        const C = this._nodes;
        C[C.length - 1] = v;
      }
    }
    e.CodeGen = O;
    function j(M, v) {
      for (const C in v)
        M[C] = (M[C] || 0) + (v[C] || 0);
      return M;
    }
    function D(M, v) {
      return v instanceof t._CodeOrName ? j(M, v.names) : M;
    }
    function U(M, v, C) {
      if (M instanceof t.Name)
        return T(M);
      if (!K(M))
        return M;
      return new t._Code(M._items.reduce((G, te) => (te instanceof t.Name && (te = T(te)), te instanceof t._Code ? G.push(...te._items) : G.push(te), G), []));
      function T(G) {
        const te = C[G.str];
        return te === void 0 || v[G.str] !== 1 ? G : (delete v[G.str], te);
      }
      function K(G) {
        return G instanceof t._Code && G._items.some((te) => te instanceof t.Name && v[te.str] === 1 && C[te.str] !== void 0);
      }
    }
    function ne(M, v) {
      for (const C in v)
        M[C] = (M[C] || 0) - (v[C] || 0);
    }
    function ee(M) {
      return typeof M == "boolean" || typeof M == "number" || M === null ? !M : (0, t._)`!${V(M)}`;
    }
    e.not = ee;
    const ue = F(e.operators.AND);
    function J(...M) {
      return M.reduce(ue);
    }
    e.and = J;
    const ae = F(e.operators.OR);
    function B(...M) {
      return M.reduce(ae);
    }
    e.or = B;
    function F(M) {
      return (v, C) => v === t.nil ? C : C === t.nil ? v : (0, t._)`${V(v)} ${M} ${V(C)}`;
    }
    function V(M) {
      return M instanceof t.Name ? M : (0, t._)`(${M})`;
    }
  })(Pn)), Pn;
}
var Y = {}, dr;
function Q() {
  if (dr) return Y;
  dr = 1, Object.defineProperty(Y, "__esModule", { value: !0 }), Y.checkStrictMode = Y.getErrorPath = Y.Type = Y.useFunc = Y.setEvaluated = Y.evaluatedPropsToName = Y.mergeEvaluated = Y.eachItem = Y.unescapeJsonPointer = Y.escapeJsonPointer = Y.escapeFragment = Y.unescapeFragment = Y.schemaRefOrVal = Y.schemaHasRulesButRef = Y.schemaHasRules = Y.checkUnknownRules = Y.alwaysValidSchema = Y.toHash = void 0;
  const e = /* @__PURE__ */ W(), t = /* @__PURE__ */ fn();
  function n(a) {
    const l = {};
    for (const f of a)
      l[f] = !0;
    return l;
  }
  Y.toHash = n;
  function o(a, l) {
    return typeof l == "boolean" ? l : Object.keys(l).length === 0 ? !0 : (c(a, l), !r(l, a.self.RULES.all));
  }
  Y.alwaysValidSchema = o;
  function c(a, l = a.schema) {
    const { opts: f, self: E } = a;
    if (!f.strictSchema || typeof l == "boolean")
      return;
    const P = E.RULES.keywords;
    for (const A in l)
      P[A] || k(a, `unknown keyword: "${A}"`);
  }
  Y.checkUnknownRules = c;
  function r(a, l) {
    if (typeof a == "boolean")
      return !a;
    for (const f in a)
      if (l[f])
        return !0;
    return !1;
  }
  Y.schemaHasRules = r;
  function s(a, l) {
    if (typeof a == "boolean")
      return !a;
    for (const f in a)
      if (f !== "$ref" && l.all[f])
        return !0;
    return !1;
  }
  Y.schemaHasRulesButRef = s;
  function i({ topSchemaRef: a, schemaPath: l }, f, E, P) {
    if (!P) {
      if (typeof f == "number" || typeof f == "boolean")
        return f;
      if (typeof f == "string")
        return (0, e._)`${f}`;
    }
    return (0, e._)`${a}${l}${(0, e.getProperty)(E)}`;
  }
  Y.schemaRefOrVal = i;
  function d(a) {
    return w(decodeURIComponent(a));
  }
  Y.unescapeFragment = d;
  function g(a) {
    return encodeURIComponent(h(a));
  }
  Y.escapeFragment = g;
  function h(a) {
    return typeof a == "number" ? `${a}` : a.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  Y.escapeJsonPointer = h;
  function w(a) {
    return a.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  Y.unescapeJsonPointer = w;
  function $(a, l) {
    if (Array.isArray(a))
      for (const f of a)
        l(f);
    else
      l(a);
  }
  Y.eachItem = $;
  function y({ mergeNames: a, mergeToName: l, mergeValues: f, resultToName: E }) {
    return (P, A, O, j) => {
      const D = O === void 0 ? A : O instanceof e.Name ? (A instanceof e.Name ? a(P, A, O) : l(P, A, O), O) : A instanceof e.Name ? (l(P, O, A), A) : f(A, O);
      return j === e.Name && !(D instanceof e.Name) ? E(P, D) : D;
    };
  }
  Y.mergeEvaluated = {
    props: y({
      mergeNames: (a, l, f) => a.if((0, e._)`${f} !== true && ${l} !== undefined`, () => {
        a.if((0, e._)`${l} === true`, () => a.assign(f, !0), () => a.assign(f, (0, e._)`${f} || {}`).code((0, e._)`Object.assign(${f}, ${l})`));
      }),
      mergeToName: (a, l, f) => a.if((0, e._)`${f} !== true`, () => {
        l === !0 ? a.assign(f, !0) : (a.assign(f, (0, e._)`${f} || {}`), S(a, f, l));
      }),
      mergeValues: (a, l) => a === !0 ? !0 : { ...a, ...l },
      resultToName: _
    }),
    items: y({
      mergeNames: (a, l, f) => a.if((0, e._)`${f} !== true && ${l} !== undefined`, () => a.assign(f, (0, e._)`${l} === true ? true : ${f} > ${l} ? ${f} : ${l}`)),
      mergeToName: (a, l, f) => a.if((0, e._)`${f} !== true`, () => a.assign(f, l === !0 ? !0 : (0, e._)`${f} > ${l} ? ${f} : ${l}`)),
      mergeValues: (a, l) => a === !0 ? !0 : Math.max(a, l),
      resultToName: (a, l) => a.var("items", l)
    })
  };
  function _(a, l) {
    if (l === !0)
      return a.var("props", !0);
    const f = a.var("props", (0, e._)`{}`);
    return l !== void 0 && S(a, f, l), f;
  }
  Y.evaluatedPropsToName = _;
  function S(a, l, f) {
    Object.keys(f).forEach((E) => a.assign((0, e._)`${l}${(0, e.getProperty)(E)}`, !0));
  }
  Y.setEvaluated = S;
  const p = {};
  function m(a, l) {
    return a.scopeValue("func", {
      ref: l,
      code: p[l.code] || (p[l.code] = new t._Code(l.code))
    });
  }
  Y.useFunc = m;
  var u;
  (function(a) {
    a[a.Num = 0] = "Num", a[a.Str = 1] = "Str";
  })(u || (Y.Type = u = {}));
  function b(a, l, f) {
    if (a instanceof e.Name) {
      const E = l === u.Num;
      return f ? E ? (0, e._)`"[" + ${a} + "]"` : (0, e._)`"['" + ${a} + "']"` : E ? (0, e._)`"/" + ${a}` : (0, e._)`"/" + ${a}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return f ? (0, e.getProperty)(a).toString() : "/" + h(a);
  }
  Y.getErrorPath = b;
  function k(a, l, f = a.opts.strictSchema) {
    if (f) {
      if (l = `strict mode: ${l}`, f === !0)
        throw new Error(l);
      a.self.logger.warn(l);
    }
  }
  return Y.checkStrictMode = k, Y;
}
var ft = {}, ur;
function Ce() {
  if (ur) return ft;
  ur = 1, Object.defineProperty(ft, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ W(), t = {
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
var fr;
function gn() {
  return fr || (fr = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
    const t = /* @__PURE__ */ W(), n = /* @__PURE__ */ Q(), o = /* @__PURE__ */ Ce();
    e.keywordError = {
      message: ({ keyword: p }) => (0, t.str)`must pass "${p}" keyword validation`
    }, e.keyword$DataError = {
      message: ({ keyword: p, schemaType: m }) => m ? (0, t.str)`"${p}" keyword must be ${m} ($data)` : (0, t.str)`"${p}" keyword is invalid ($data)`
    };
    function c(p, m = e.keywordError, u, b) {
      const { it: k } = p, { gen: a, compositeRule: l, allErrors: f } = k, E = w(p, m, u);
      b ?? (l || f) ? d(a, E) : g(k, (0, t._)`[${E}]`);
    }
    e.reportError = c;
    function r(p, m = e.keywordError, u) {
      const { it: b } = p, { gen: k, compositeRule: a, allErrors: l } = b, f = w(p, m, u);
      d(k, f), a || l || g(b, o.default.vErrors);
    }
    e.reportExtraError = r;
    function s(p, m) {
      p.assign(o.default.errors, m), p.if((0, t._)`${o.default.vErrors} !== null`, () => p.if(m, () => p.assign((0, t._)`${o.default.vErrors}.length`, m), () => p.assign(o.default.vErrors, null)));
    }
    e.resetErrorsCount = s;
    function i({ gen: p, keyword: m, schemaValue: u, data: b, errsCount: k, it: a }) {
      if (k === void 0)
        throw new Error("ajv implementation error");
      const l = p.name("err");
      p.forRange("i", k, o.default.errors, (f) => {
        p.const(l, (0, t._)`${o.default.vErrors}[${f}]`), p.if((0, t._)`${l}.instancePath === undefined`, () => p.assign((0, t._)`${l}.instancePath`, (0, t.strConcat)(o.default.instancePath, a.errorPath))), p.assign((0, t._)`${l}.schemaPath`, (0, t.str)`${a.errSchemaPath}/${m}`), a.opts.verbose && (p.assign((0, t._)`${l}.schema`, u), p.assign((0, t._)`${l}.data`, b));
      });
    }
    e.extendErrors = i;
    function d(p, m) {
      const u = p.const("err", m);
      p.if((0, t._)`${o.default.vErrors} === null`, () => p.assign(o.default.vErrors, (0, t._)`[${u}]`), (0, t._)`${o.default.vErrors}.push(${u})`), p.code((0, t._)`${o.default.errors}++`);
    }
    function g(p, m) {
      const { gen: u, validateName: b, schemaEnv: k } = p;
      k.$async ? u.throw((0, t._)`new ${p.ValidationError}(${m})`) : (u.assign((0, t._)`${b}.errors`, m), u.return(!1));
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
    function w(p, m, u) {
      const { createErrors: b } = p.it;
      return b === !1 ? (0, t._)`{}` : $(p, m, u);
    }
    function $(p, m, u = {}) {
      const { gen: b, it: k } = p, a = [
        y(k, u),
        _(p, u)
      ];
      return S(p, m, a), b.object(...a);
    }
    function y({ errorPath: p }, { instancePath: m }) {
      const u = m ? (0, t.str)`${p}${(0, n.getErrorPath)(m, n.Type.Str)}` : p;
      return [o.default.instancePath, (0, t.strConcat)(o.default.instancePath, u)];
    }
    function _({ keyword: p, it: { errSchemaPath: m } }, { schemaPath: u, parentSchema: b }) {
      let k = b ? m : (0, t.str)`${m}/${p}`;
      return u && (k = (0, t.str)`${k}${(0, n.getErrorPath)(u, n.Type.Str)}`), [h.schemaPath, k];
    }
    function S(p, { params: m, message: u }, b) {
      const { keyword: k, data: a, schemaValue: l, it: f } = p, { opts: E, propertyName: P, topSchemaRef: A, schemaPath: O } = f;
      b.push([h.keyword, k], [h.params, typeof m == "function" ? m(p) : m || (0, t._)`{}`]), E.messages && b.push([h.message, typeof u == "function" ? u(p) : u]), E.verbose && b.push([h.schema, l], [h.parentSchema, (0, t._)`${A}${O}`], [o.default.data, a]), P && b.push([h.propertyName, P]);
    }
  })(En)), En;
}
var pr;
function Pi() {
  if (pr) return je;
  pr = 1, Object.defineProperty(je, "__esModule", { value: !0 }), je.boolOrEmptySchema = je.topBoolOrEmptySchema = void 0;
  const e = /* @__PURE__ */ gn(), t = /* @__PURE__ */ W(), n = /* @__PURE__ */ Ce(), o = {
    message: "boolean schema is false"
  };
  function c(i) {
    const { gen: d, schema: g, validateName: h } = i;
    g === !1 ? s(i, !1) : typeof g == "object" && g.$async === !0 ? d.return(n.default.data) : (d.assign((0, t._)`${h}.errors`, null), d.return(!0));
  }
  je.topBoolOrEmptySchema = c;
  function r(i, d) {
    const { gen: g, schema: h } = i;
    h === !1 ? (g.var(d, !1), s(i)) : g.var(d, !0);
  }
  je.boolOrEmptySchema = r;
  function s(i, d) {
    const { gen: g, data: h } = i, w = {
      gen: g,
      keyword: "false schema",
      data: h,
      schema: !1,
      schemaCode: !1,
      schemaValue: !1,
      params: {},
      it: i
    };
    (0, e.reportError)(w, o, void 0, d);
  }
  return je;
}
var de = {}, Oe = {}, hr;
function Go() {
  if (hr) return Oe;
  hr = 1, Object.defineProperty(Oe, "__esModule", { value: !0 }), Oe.getRules = Oe.isJSONType = void 0;
  const e = ["string", "number", "integer", "boolean", "null", "object", "array"], t = new Set(e);
  function n(c) {
    return typeof c == "string" && t.has(c);
  }
  Oe.isJSONType = n;
  function o() {
    const c = {
      number: { type: "number", rules: [] },
      string: { type: "string", rules: [] },
      array: { type: "array", rules: [] },
      object: { type: "object", rules: [] }
    };
    return {
      types: { ...c, integer: !0, boolean: !0, null: !0 },
      rules: [{ rules: [] }, c.number, c.string, c.array, c.object],
      post: { rules: [] },
      all: {},
      keywords: {}
    };
  }
  return Oe.getRules = o, Oe;
}
var Re = {}, mr;
function Ho() {
  if (mr) return Re;
  mr = 1, Object.defineProperty(Re, "__esModule", { value: !0 }), Re.shouldUseRule = Re.shouldUseGroup = Re.schemaHasRulesForType = void 0;
  function e({ schema: o, self: c }, r) {
    const s = c.RULES.types[r];
    return s && s !== !0 && t(o, s);
  }
  Re.schemaHasRulesForType = e;
  function t(o, c) {
    return c.rules.some((r) => n(o, r));
  }
  Re.shouldUseGroup = t;
  function n(o, c) {
    var r;
    return o[c.keyword] !== void 0 || ((r = c.definition.implements) === null || r === void 0 ? void 0 : r.some((s) => o[s] !== void 0));
  }
  return Re.shouldUseRule = n, Re;
}
var gr;
function pn() {
  if (gr) return de;
  gr = 1, Object.defineProperty(de, "__esModule", { value: !0 }), de.reportTypeError = de.checkDataTypes = de.checkDataType = de.coerceAndCheckDataType = de.getJSONTypes = de.getSchemaTypes = de.DataType = void 0;
  const e = /* @__PURE__ */ Go(), t = /* @__PURE__ */ Ho(), n = /* @__PURE__ */ gn(), o = /* @__PURE__ */ W(), c = /* @__PURE__ */ Q();
  var r;
  (function(u) {
    u[u.Correct = 0] = "Correct", u[u.Wrong = 1] = "Wrong";
  })(r || (de.DataType = r = {}));
  function s(u) {
    const b = i(u.type);
    if (b.includes("null")) {
      if (u.nullable === !1)
        throw new Error("type: null contradicts nullable: false");
    } else {
      if (!b.length && u.nullable !== void 0)
        throw new Error('"nullable" cannot be used without "type"');
      u.nullable === !0 && b.push("null");
    }
    return b;
  }
  de.getSchemaTypes = s;
  function i(u) {
    const b = Array.isArray(u) ? u : u ? [u] : [];
    if (b.every(e.isJSONType))
      return b;
    throw new Error("type must be JSONType or JSONType[]: " + b.join(","));
  }
  de.getJSONTypes = i;
  function d(u, b) {
    const { gen: k, data: a, opts: l } = u, f = h(b, l.coerceTypes), E = b.length > 0 && !(f.length === 0 && b.length === 1 && (0, t.schemaHasRulesForType)(u, b[0]));
    if (E) {
      const P = _(b, a, l.strictNumbers, r.Wrong);
      k.if(P, () => {
        f.length ? w(u, b, f) : p(u);
      });
    }
    return E;
  }
  de.coerceAndCheckDataType = d;
  const g = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
  function h(u, b) {
    return b ? u.filter((k) => g.has(k) || b === "array" && k === "array") : [];
  }
  function w(u, b, k) {
    const { gen: a, data: l, opts: f } = u, E = a.let("dataType", (0, o._)`typeof ${l}`), P = a.let("coerced", (0, o._)`undefined`);
    f.coerceTypes === "array" && a.if((0, o._)`${E} == 'object' && Array.isArray(${l}) && ${l}.length == 1`, () => a.assign(l, (0, o._)`${l}[0]`).assign(E, (0, o._)`typeof ${l}`).if(_(b, l, f.strictNumbers), () => a.assign(P, l))), a.if((0, o._)`${P} !== undefined`);
    for (const O of k)
      (g.has(O) || O === "array" && f.coerceTypes === "array") && A(O);
    a.else(), p(u), a.endIf(), a.if((0, o._)`${P} !== undefined`, () => {
      a.assign(l, P), $(u, P);
    });
    function A(O) {
      switch (O) {
        case "string":
          a.elseIf((0, o._)`${E} == "number" || ${E} == "boolean"`).assign(P, (0, o._)`"" + ${l}`).elseIf((0, o._)`${l} === null`).assign(P, (0, o._)`""`);
          return;
        case "number":
          a.elseIf((0, o._)`${E} == "boolean" || ${l} === null
              || (${E} == "string" && ${l} && ${l} == +${l})`).assign(P, (0, o._)`+${l}`);
          return;
        case "integer":
          a.elseIf((0, o._)`${E} === "boolean" || ${l} === null
              || (${E} === "string" && ${l} && ${l} == +${l} && !(${l} % 1))`).assign(P, (0, o._)`+${l}`);
          return;
        case "boolean":
          a.elseIf((0, o._)`${l} === "false" || ${l} === 0 || ${l} === null`).assign(P, !1).elseIf((0, o._)`${l} === "true" || ${l} === 1`).assign(P, !0);
          return;
        case "null":
          a.elseIf((0, o._)`${l} === "" || ${l} === 0 || ${l} === false`), a.assign(P, null);
          return;
        case "array":
          a.elseIf((0, o._)`${E} === "string" || ${E} === "number"
              || ${E} === "boolean" || ${l} === null`).assign(P, (0, o._)`[${l}]`);
      }
    }
  }
  function $({ gen: u, parentData: b, parentDataProperty: k }, a) {
    u.if((0, o._)`${b} !== undefined`, () => u.assign((0, o._)`${b}[${k}]`, a));
  }
  function y(u, b, k, a = r.Correct) {
    const l = a === r.Correct ? o.operators.EQ : o.operators.NEQ;
    let f;
    switch (u) {
      case "null":
        return (0, o._)`${b} ${l} null`;
      case "array":
        f = (0, o._)`Array.isArray(${b})`;
        break;
      case "object":
        f = (0, o._)`${b} && typeof ${b} == "object" && !Array.isArray(${b})`;
        break;
      case "integer":
        f = E((0, o._)`!(${b} % 1) && !isNaN(${b})`);
        break;
      case "number":
        f = E();
        break;
      default:
        return (0, o._)`typeof ${b} ${l} ${u}`;
    }
    return a === r.Correct ? f : (0, o.not)(f);
    function E(P = o.nil) {
      return (0, o.and)((0, o._)`typeof ${b} == "number"`, P, k ? (0, o._)`isFinite(${b})` : o.nil);
    }
  }
  de.checkDataType = y;
  function _(u, b, k, a) {
    if (u.length === 1)
      return y(u[0], b, k, a);
    let l;
    const f = (0, c.toHash)(u);
    if (f.array && f.object) {
      const E = (0, o._)`typeof ${b} != "object"`;
      l = f.null ? E : (0, o._)`!${b} || ${E}`, delete f.null, delete f.array, delete f.object;
    } else
      l = o.nil;
    f.number && delete f.integer;
    for (const E in f)
      l = (0, o.and)(l, y(E, b, k, a));
    return l;
  }
  de.checkDataTypes = _;
  const S = {
    message: ({ schema: u }) => `must be ${u}`,
    params: ({ schema: u, schemaValue: b }) => typeof u == "string" ? (0, o._)`{type: ${u}}` : (0, o._)`{type: ${b}}`
  };
  function p(u) {
    const b = m(u);
    (0, n.reportError)(b, S);
  }
  de.reportTypeError = p;
  function m(u) {
    const { gen: b, data: k, schema: a } = u, l = (0, c.schemaRefOrVal)(u, a, "type");
    return {
      gen: b,
      keyword: "type",
      data: k,
      schema: a.type,
      schemaCode: l,
      schemaValue: l,
      parentSchema: a,
      params: {},
      it: u
    };
  }
  return de;
}
var nt = {}, yr;
function xi() {
  if (yr) return nt;
  yr = 1, Object.defineProperty(nt, "__esModule", { value: !0 }), nt.assignDefaults = void 0;
  const e = /* @__PURE__ */ W(), t = /* @__PURE__ */ Q();
  function n(c, r) {
    const { properties: s, items: i } = c.schema;
    if (r === "object" && s)
      for (const d in s)
        o(c, d, s[d].default);
    else r === "array" && Array.isArray(i) && i.forEach((d, g) => o(c, g, d.default));
  }
  nt.assignDefaults = n;
  function o(c, r, s) {
    const { gen: i, compositeRule: d, data: g, opts: h } = c;
    if (s === void 0)
      return;
    const w = (0, e._)`${g}${(0, e.getProperty)(r)}`;
    if (d) {
      (0, t.checkStrictMode)(c, `default is ignored for: ${w}`);
      return;
    }
    let $ = (0, e._)`${w} === undefined`;
    h.useDefaults === "empty" && ($ = (0, e._)`${$} || ${w} === null || ${w} === ""`), i.if($, (0, e._)`${w} = ${(0, e.stringify)(s)}`);
  }
  return nt;
}
var be = {}, re = {}, vr;
function ke() {
  if (vr) return re;
  vr = 1, Object.defineProperty(re, "__esModule", { value: !0 }), re.validateUnion = re.validateArray = re.usePattern = re.callValidateCode = re.schemaProperties = re.allSchemaProperties = re.noPropertyInData = re.propertyInData = re.isOwnProperty = re.hasPropFunc = re.reportMissingProp = re.checkMissingProp = re.checkReportMissingProp = void 0;
  const e = /* @__PURE__ */ W(), t = /* @__PURE__ */ Q(), n = /* @__PURE__ */ Ce(), o = /* @__PURE__ */ Q();
  function c(u, b) {
    const { gen: k, data: a, it: l } = u;
    k.if(h(k, a, b, l.opts.ownProperties), () => {
      u.setParams({ missingProperty: (0, e._)`${b}` }, !0), u.error();
    });
  }
  re.checkReportMissingProp = c;
  function r({ gen: u, data: b, it: { opts: k } }, a, l) {
    return (0, e.or)(...a.map((f) => (0, e.and)(h(u, b, f, k.ownProperties), (0, e._)`${l} = ${f}`)));
  }
  re.checkMissingProp = r;
  function s(u, b) {
    u.setParams({ missingProperty: b }, !0), u.error();
  }
  re.reportMissingProp = s;
  function i(u) {
    return u.scopeValue("func", {
      // eslint-disable-next-line @typescript-eslint/unbound-method
      ref: Object.prototype.hasOwnProperty,
      code: (0, e._)`Object.prototype.hasOwnProperty`
    });
  }
  re.hasPropFunc = i;
  function d(u, b, k) {
    return (0, e._)`${i(u)}.call(${b}, ${k})`;
  }
  re.isOwnProperty = d;
  function g(u, b, k, a) {
    const l = (0, e._)`${b}${(0, e.getProperty)(k)} !== undefined`;
    return a ? (0, e._)`${l} && ${d(u, b, k)}` : l;
  }
  re.propertyInData = g;
  function h(u, b, k, a) {
    const l = (0, e._)`${b}${(0, e.getProperty)(k)} === undefined`;
    return a ? (0, e.or)(l, (0, e.not)(d(u, b, k))) : l;
  }
  re.noPropertyInData = h;
  function w(u) {
    return u ? Object.keys(u).filter((b) => b !== "__proto__") : [];
  }
  re.allSchemaProperties = w;
  function $(u, b) {
    return w(b).filter((k) => !(0, t.alwaysValidSchema)(u, b[k]));
  }
  re.schemaProperties = $;
  function y({ schemaCode: u, data: b, it: { gen: k, topSchemaRef: a, schemaPath: l, errorPath: f }, it: E }, P, A, O) {
    const j = O ? (0, e._)`${u}, ${b}, ${a}${l}` : b, D = [
      [n.default.instancePath, (0, e.strConcat)(n.default.instancePath, f)],
      [n.default.parentData, E.parentData],
      [n.default.parentDataProperty, E.parentDataProperty],
      [n.default.rootData, n.default.rootData]
    ];
    E.opts.dynamicRef && D.push([n.default.dynamicAnchors, n.default.dynamicAnchors]);
    const U = (0, e._)`${j}, ${k.object(...D)}`;
    return A !== e.nil ? (0, e._)`${P}.call(${A}, ${U})` : (0, e._)`${P}(${U})`;
  }
  re.callValidateCode = y;
  const _ = (0, e._)`new RegExp`;
  function S({ gen: u, it: { opts: b } }, k) {
    const a = b.unicodeRegExp ? "u" : "", { regExp: l } = b.code, f = l(k, a);
    return u.scopeValue("pattern", {
      key: f.toString(),
      ref: f,
      code: (0, e._)`${l.code === "new RegExp" ? _ : (0, o.useFunc)(u, l)}(${k}, ${a})`
    });
  }
  re.usePattern = S;
  function p(u) {
    const { gen: b, data: k, keyword: a, it: l } = u, f = b.name("valid");
    if (l.allErrors) {
      const P = b.let("valid", !0);
      return E(() => b.assign(P, !1)), P;
    }
    return b.var(f, !0), E(() => b.break()), f;
    function E(P) {
      const A = b.const("len", (0, e._)`${k}.length`);
      b.forRange("i", 0, A, (O) => {
        u.subschema({
          keyword: a,
          dataProp: O,
          dataPropType: t.Type.Num
        }, f), b.if((0, e.not)(f), P);
      });
    }
  }
  re.validateArray = p;
  function m(u) {
    const { gen: b, schema: k, keyword: a, it: l } = u;
    if (!Array.isArray(k))
      throw new Error("ajv implementation error");
    if (k.some((A) => (0, t.alwaysValidSchema)(l, A)) && !l.opts.unevaluated)
      return;
    const E = b.let("valid", !1), P = b.name("_valid");
    b.block(() => k.forEach((A, O) => {
      const j = u.subschema({
        keyword: a,
        schemaProp: O,
        compositeRule: !0
      }, P);
      b.assign(E, (0, e._)`${E} || ${P}`), u.mergeValidEvaluated(j, P) || b.if((0, e.not)(E));
    })), u.result(E, () => u.reset(), () => u.error(!0));
  }
  return re.validateUnion = m, re;
}
var $r;
function Ri() {
  if ($r) return be;
  $r = 1, Object.defineProperty(be, "__esModule", { value: !0 }), be.validateKeywordUsage = be.validSchemaType = be.funcKeywordCode = be.macroKeywordCode = void 0;
  const e = /* @__PURE__ */ W(), t = /* @__PURE__ */ Ce(), n = /* @__PURE__ */ ke(), o = /* @__PURE__ */ gn();
  function c($, y) {
    const { gen: _, keyword: S, schema: p, parentSchema: m, it: u } = $, b = y.macro.call(u.self, p, m, u), k = g(_, S, b);
    u.opts.validateSchema !== !1 && u.self.validateSchema(b, !0);
    const a = _.name("valid");
    $.subschema({
      schema: b,
      schemaPath: e.nil,
      errSchemaPath: `${u.errSchemaPath}/${S}`,
      topSchemaRef: k,
      compositeRule: !0
    }, a), $.pass(a, () => $.error(!0));
  }
  be.macroKeywordCode = c;
  function r($, y) {
    var _;
    const { gen: S, keyword: p, schema: m, parentSchema: u, $data: b, it: k } = $;
    d(k, y);
    const a = !b && y.compile ? y.compile.call(k.self, m, u, k) : y.validate, l = g(S, p, a), f = S.let("valid");
    $.block$data(f, E), $.ok((_ = y.valid) !== null && _ !== void 0 ? _ : f);
    function E() {
      if (y.errors === !1)
        O(), y.modifying && s($), j(() => $.error());
      else {
        const D = y.async ? P() : A();
        y.modifying && s($), j(() => i($, D));
      }
    }
    function P() {
      const D = S.let("ruleErrs", null);
      return S.try(() => O((0, e._)`await `), (U) => S.assign(f, !1).if((0, e._)`${U} instanceof ${k.ValidationError}`, () => S.assign(D, (0, e._)`${U}.errors`), () => S.throw(U))), D;
    }
    function A() {
      const D = (0, e._)`${l}.errors`;
      return S.assign(D, null), O(e.nil), D;
    }
    function O(D = y.async ? (0, e._)`await ` : e.nil) {
      const U = k.opts.passContext ? t.default.this : t.default.self, ne = !("compile" in y && !b || y.schema === !1);
      S.assign(f, (0, e._)`${D}${(0, n.callValidateCode)($, l, U, ne)}`, y.modifying);
    }
    function j(D) {
      var U;
      S.if((0, e.not)((U = y.valid) !== null && U !== void 0 ? U : f), D);
    }
  }
  be.funcKeywordCode = r;
  function s($) {
    const { gen: y, data: _, it: S } = $;
    y.if(S.parentData, () => y.assign(_, (0, e._)`${S.parentData}[${S.parentDataProperty}]`));
  }
  function i($, y) {
    const { gen: _ } = $;
    _.if((0, e._)`Array.isArray(${y})`, () => {
      _.assign(t.default.vErrors, (0, e._)`${t.default.vErrors} === null ? ${y} : ${t.default.vErrors}.concat(${y})`).assign(t.default.errors, (0, e._)`${t.default.vErrors}.length`), (0, o.extendErrors)($);
    }, () => $.error());
  }
  function d({ schemaEnv: $ }, y) {
    if (y.async && !$.$async)
      throw new Error("async keyword in sync schema");
  }
  function g($, y, _) {
    if (_ === void 0)
      throw new Error(`keyword "${y}" failed to compile`);
    return $.scopeValue("keyword", typeof _ == "function" ? { ref: _ } : { ref: _, code: (0, e.stringify)(_) });
  }
  function h($, y, _ = !1) {
    return !y.length || y.some((S) => S === "array" ? Array.isArray($) : S === "object" ? $ && typeof $ == "object" && !Array.isArray($) : typeof $ == S || _ && typeof $ > "u");
  }
  be.validSchemaType = h;
  function w({ schema: $, opts: y, self: _, errSchemaPath: S }, p, m) {
    if (Array.isArray(p.keyword) ? !p.keyword.includes(m) : p.keyword !== m)
      throw new Error("ajv implementation error");
    const u = p.dependencies;
    if (u?.some((b) => !Object.prototype.hasOwnProperty.call($, b)))
      throw new Error(`parent schema must have dependencies of ${m}: ${u.join(",")}`);
    if (p.validateSchema && !p.validateSchema($[m])) {
      const k = `keyword "${m}" value is invalid at path "${S}": ` + _.errorsText(p.validateSchema.errors);
      if (y.validateSchema === "log")
        _.logger.error(k);
      else
        throw new Error(k);
    }
  }
  return be.validateKeywordUsage = w, be;
}
var Ae = {}, br;
function Ai() {
  if (br) return Ae;
  br = 1, Object.defineProperty(Ae, "__esModule", { value: !0 }), Ae.extendSubschemaMode = Ae.extendSubschemaData = Ae.getSubschema = void 0;
  const e = /* @__PURE__ */ W(), t = /* @__PURE__ */ Q();
  function n(r, { keyword: s, schemaProp: i, schema: d, schemaPath: g, errSchemaPath: h, topSchemaRef: w }) {
    if (s !== void 0 && d !== void 0)
      throw new Error('both "keyword" and "schema" passed, only one allowed');
    if (s !== void 0) {
      const $ = r.schema[s];
      return i === void 0 ? {
        schema: $,
        schemaPath: (0, e._)`${r.schemaPath}${(0, e.getProperty)(s)}`,
        errSchemaPath: `${r.errSchemaPath}/${s}`
      } : {
        schema: $[i],
        schemaPath: (0, e._)`${r.schemaPath}${(0, e.getProperty)(s)}${(0, e.getProperty)(i)}`,
        errSchemaPath: `${r.errSchemaPath}/${s}/${(0, t.escapeFragment)(i)}`
      };
    }
    if (d !== void 0) {
      if (g === void 0 || h === void 0 || w === void 0)
        throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
      return {
        schema: d,
        schemaPath: g,
        topSchemaRef: w,
        errSchemaPath: h
      };
    }
    throw new Error('either "keyword" or "schema" must be passed');
  }
  Ae.getSubschema = n;
  function o(r, s, { dataProp: i, dataPropType: d, data: g, dataTypes: h, propertyName: w }) {
    if (g !== void 0 && i !== void 0)
      throw new Error('both "data" and "dataProp" passed, only one allowed');
    const { gen: $ } = s;
    if (i !== void 0) {
      const { errorPath: _, dataPathArr: S, opts: p } = s, m = $.let("data", (0, e._)`${s.data}${(0, e.getProperty)(i)}`, !0);
      y(m), r.errorPath = (0, e.str)`${_}${(0, t.getErrorPath)(i, d, p.jsPropertySyntax)}`, r.parentDataProperty = (0, e._)`${i}`, r.dataPathArr = [...S, r.parentDataProperty];
    }
    if (g !== void 0) {
      const _ = g instanceof e.Name ? g : $.let("data", g, !0);
      y(_), w !== void 0 && (r.propertyName = w);
    }
    h && (r.dataTypes = h);
    function y(_) {
      r.data = _, r.dataLevel = s.dataLevel + 1, r.dataTypes = [], s.definedProperties = /* @__PURE__ */ new Set(), r.parentData = s.data, r.dataNames = [...s.dataNames, _];
    }
  }
  Ae.extendSubschemaData = o;
  function c(r, { jtdDiscriminator: s, jtdMetadata: i, compositeRule: d, createErrors: g, allErrors: h }) {
    d !== void 0 && (r.compositeRule = d), g !== void 0 && (r.createErrors = g), h !== void 0 && (r.allErrors = h), r.jtdDiscriminator = s, r.jtdMetadata = i;
  }
  return Ae.extendSubschemaMode = c, Ae;
}
var fe = {}, An, _r;
function Jo() {
  return _r || (_r = 1, An = function e(t, n) {
    if (t === n) return !0;
    if (t && n && typeof t == "object" && typeof n == "object") {
      if (t.constructor !== n.constructor) return !1;
      var o, c, r;
      if (Array.isArray(t)) {
        if (o = t.length, o != n.length) return !1;
        for (c = o; c-- !== 0; )
          if (!e(t[c], n[c])) return !1;
        return !0;
      }
      if (t.constructor === RegExp) return t.source === n.source && t.flags === n.flags;
      if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === n.valueOf();
      if (t.toString !== Object.prototype.toString) return t.toString() === n.toString();
      if (r = Object.keys(t), o = r.length, o !== Object.keys(n).length) return !1;
      for (c = o; c-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(n, r[c])) return !1;
      for (c = o; c-- !== 0; ) {
        var s = r[c];
        if (!e(t[s], n[s])) return !1;
      }
      return !0;
    }
    return t !== t && n !== n;
  }), An;
}
var Fn = { exports: {} }, wr;
function Fi() {
  if (wr) return Fn.exports;
  wr = 1;
  var e = Fn.exports = function(o, c, r) {
    typeof c == "function" && (r = c, c = {}), r = c.cb || r;
    var s = typeof r == "function" ? r : r.pre || function() {
    }, i = r.post || function() {
    };
    t(c, s, i, o, "", o);
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
  function t(o, c, r, s, i, d, g, h, w, $) {
    if (s && typeof s == "object" && !Array.isArray(s)) {
      c(s, i, d, g, h, w, $);
      for (var y in s) {
        var _ = s[y];
        if (Array.isArray(_)) {
          if (y in e.arrayKeywords)
            for (var S = 0; S < _.length; S++)
              t(o, c, r, _[S], i + "/" + y + "/" + S, d, i, y, s, S);
        } else if (y in e.propsKeywords) {
          if (_ && typeof _ == "object")
            for (var p in _)
              t(o, c, r, _[p], i + "/" + y + "/" + n(p), d, i, y, s, p);
        } else (y in e.keywords || o.allKeys && !(y in e.skipKeywords)) && t(o, c, r, _, i + "/" + y, d, i, y, s);
      }
      r(s, i, d, g, h, w, $);
    }
  }
  function n(o) {
    return o.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  return Fn.exports;
}
var Sr;
function yn() {
  if (Sr) return fe;
  Sr = 1, Object.defineProperty(fe, "__esModule", { value: !0 }), fe.getSchemaRefs = fe.resolveUrl = fe.normalizeId = fe._getFullPath = fe.getFullPath = fe.inlineRef = void 0;
  const e = /* @__PURE__ */ Q(), t = Jo(), n = Fi(), o = /* @__PURE__ */ new Set([
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
  function c(S, p = !0) {
    return typeof S == "boolean" ? !0 : p === !0 ? !s(S) : p ? i(S) <= p : !1;
  }
  fe.inlineRef = c;
  const r = /* @__PURE__ */ new Set([
    "$ref",
    "$recursiveRef",
    "$recursiveAnchor",
    "$dynamicRef",
    "$dynamicAnchor"
  ]);
  function s(S) {
    for (const p in S) {
      if (r.has(p))
        return !0;
      const m = S[p];
      if (Array.isArray(m) && m.some(s) || typeof m == "object" && s(m))
        return !0;
    }
    return !1;
  }
  function i(S) {
    let p = 0;
    for (const m in S) {
      if (m === "$ref")
        return 1 / 0;
      if (p++, !o.has(m) && (typeof S[m] == "object" && (0, e.eachItem)(S[m], (u) => p += i(u)), p === 1 / 0))
        return 1 / 0;
    }
    return p;
  }
  function d(S, p = "", m) {
    m !== !1 && (p = w(p));
    const u = S.parse(p);
    return g(S, u);
  }
  fe.getFullPath = d;
  function g(S, p) {
    return S.serialize(p).split("#")[0] + "#";
  }
  fe._getFullPath = g;
  const h = /#\/?$/;
  function w(S) {
    return S ? S.replace(h, "") : "";
  }
  fe.normalizeId = w;
  function $(S, p, m) {
    return m = w(m), S.resolve(p, m);
  }
  fe.resolveUrl = $;
  const y = /^[a-z_][-a-z0-9._]*$/i;
  function _(S, p) {
    if (typeof S == "boolean")
      return {};
    const { schemaId: m, uriResolver: u } = this.opts, b = w(S[m] || p), k = { "": b }, a = d(u, b, !1), l = {}, f = /* @__PURE__ */ new Set();
    return n(S, { allKeys: !0 }, (A, O, j, D) => {
      if (D === void 0)
        return;
      const U = a + O;
      let ne = k[D];
      typeof A[m] == "string" && (ne = ee.call(this, A[m])), ue.call(this, A.$anchor), ue.call(this, A.$dynamicAnchor), k[O] = ne;
      function ee(J) {
        const ae = this.opts.uriResolver.resolve;
        if (J = w(ne ? ae(ne, J) : J), f.has(J))
          throw P(J);
        f.add(J);
        let B = this.refs[J];
        return typeof B == "string" && (B = this.refs[B]), typeof B == "object" ? E(A, B.schema, J) : J !== w(U) && (J[0] === "#" ? (E(A, l[J], J), l[J] = A) : this.refs[J] = U), J;
      }
      function ue(J) {
        if (typeof J == "string") {
          if (!y.test(J))
            throw new Error(`invalid anchor "${J}"`);
          ee.call(this, `#${J}`);
        }
      }
    }), l;
    function E(A, O, j) {
      if (O !== void 0 && !t(A, O))
        throw P(j);
    }
    function P(A) {
      return new Error(`reference "${A}" resolves to more than one schema`);
    }
  }
  return fe.getSchemaRefs = _, fe;
}
var Cr;
function vn() {
  if (Cr) return xe;
  Cr = 1, Object.defineProperty(xe, "__esModule", { value: !0 }), xe.getData = xe.KeywordCxt = xe.validateFunctionCode = void 0;
  const e = /* @__PURE__ */ Pi(), t = /* @__PURE__ */ pn(), n = /* @__PURE__ */ Ho(), o = /* @__PURE__ */ pn(), c = /* @__PURE__ */ xi(), r = /* @__PURE__ */ Ri(), s = /* @__PURE__ */ Ai(), i = /* @__PURE__ */ W(), d = /* @__PURE__ */ Ce(), g = /* @__PURE__ */ yn(), h = /* @__PURE__ */ Q(), w = /* @__PURE__ */ gn();
  function $(R) {
    if (a(R) && (f(R), k(R))) {
      p(R);
      return;
    }
    y(R, () => (0, e.topBoolOrEmptySchema)(R));
  }
  xe.validateFunctionCode = $;
  function y({ gen: R, validateName: N, schema: q, schemaEnv: L, opts: H }, X) {
    H.code.es5 ? R.func(N, (0, i._)`${d.default.data}, ${d.default.valCxt}`, L.$async, () => {
      R.code((0, i._)`"use strict"; ${u(q, H)}`), S(R, H), R.code(X);
    }) : R.func(N, (0, i._)`${d.default.data}, ${_(H)}`, L.$async, () => R.code(u(q, H)).code(X));
  }
  function _(R) {
    return (0, i._)`{${d.default.instancePath}="", ${d.default.parentData}, ${d.default.parentDataProperty}, ${d.default.rootData}=${d.default.data}${R.dynamicRef ? (0, i._)`, ${d.default.dynamicAnchors}={}` : i.nil}}={}`;
  }
  function S(R, N) {
    R.if(d.default.valCxt, () => {
      R.var(d.default.instancePath, (0, i._)`${d.default.valCxt}.${d.default.instancePath}`), R.var(d.default.parentData, (0, i._)`${d.default.valCxt}.${d.default.parentData}`), R.var(d.default.parentDataProperty, (0, i._)`${d.default.valCxt}.${d.default.parentDataProperty}`), R.var(d.default.rootData, (0, i._)`${d.default.valCxt}.${d.default.rootData}`), N.dynamicRef && R.var(d.default.dynamicAnchors, (0, i._)`${d.default.valCxt}.${d.default.dynamicAnchors}`);
    }, () => {
      R.var(d.default.instancePath, (0, i._)`""`), R.var(d.default.parentData, (0, i._)`undefined`), R.var(d.default.parentDataProperty, (0, i._)`undefined`), R.var(d.default.rootData, d.default.data), N.dynamicRef && R.var(d.default.dynamicAnchors, (0, i._)`{}`);
    });
  }
  function p(R) {
    const { schema: N, opts: q, gen: L } = R;
    y(R, () => {
      q.$comment && N.$comment && D(R), A(R), L.let(d.default.vErrors, null), L.let(d.default.errors, 0), q.unevaluated && m(R), E(R), U(R);
    });
  }
  function m(R) {
    const { gen: N, validateName: q } = R;
    R.evaluated = N.const("evaluated", (0, i._)`${q}.evaluated`), N.if((0, i._)`${R.evaluated}.dynamicProps`, () => N.assign((0, i._)`${R.evaluated}.props`, (0, i._)`undefined`)), N.if((0, i._)`${R.evaluated}.dynamicItems`, () => N.assign((0, i._)`${R.evaluated}.items`, (0, i._)`undefined`));
  }
  function u(R, N) {
    const q = typeof R == "object" && R[N.schemaId];
    return q && (N.code.source || N.code.process) ? (0, i._)`/*# sourceURL=${q} */` : i.nil;
  }
  function b(R, N) {
    if (a(R) && (f(R), k(R))) {
      l(R, N);
      return;
    }
    (0, e.boolOrEmptySchema)(R, N);
  }
  function k({ schema: R, self: N }) {
    if (typeof R == "boolean")
      return !R;
    for (const q in R)
      if (N.RULES.all[q])
        return !0;
    return !1;
  }
  function a(R) {
    return typeof R.schema != "boolean";
  }
  function l(R, N) {
    const { schema: q, gen: L, opts: H } = R;
    H.$comment && q.$comment && D(R), O(R), j(R);
    const X = L.const("_errs", d.default.errors);
    E(R, X), L.var(N, (0, i._)`${X} === ${d.default.errors}`);
  }
  function f(R) {
    (0, h.checkUnknownRules)(R), P(R);
  }
  function E(R, N) {
    if (R.opts.jtd)
      return ee(R, [], !1, N);
    const q = (0, t.getSchemaTypes)(R.schema), L = (0, t.coerceAndCheckDataType)(R, q);
    ee(R, q, !L, N);
  }
  function P(R) {
    const { schema: N, errSchemaPath: q, opts: L, self: H } = R;
    N.$ref && L.ignoreKeywordsWithRef && (0, h.schemaHasRulesButRef)(N, H.RULES) && H.logger.warn(`$ref: keywords ignored in schema at path "${q}"`);
  }
  function A(R) {
    const { schema: N, opts: q } = R;
    N.default !== void 0 && q.useDefaults && q.strictSchema && (0, h.checkStrictMode)(R, "default is ignored in the schema root");
  }
  function O(R) {
    const N = R.schema[R.opts.schemaId];
    N && (R.baseId = (0, g.resolveUrl)(R.opts.uriResolver, R.baseId, N));
  }
  function j(R) {
    if (R.schema.$async && !R.schemaEnv.$async)
      throw new Error("async schema in sync schema");
  }
  function D({ gen: R, schemaEnv: N, schema: q, errSchemaPath: L, opts: H }) {
    const X = q.$comment;
    if (H.$comment === !0)
      R.code((0, i._)`${d.default.self}.logger.log(${X})`);
    else if (typeof H.$comment == "function") {
      const ce = (0, i.str)`${L}/$comment`, $e = R.scopeValue("root", { ref: N.root });
      R.code((0, i._)`${d.default.self}.opts.$comment(${X}, ${ce}, ${$e}.schema)`);
    }
  }
  function U(R) {
    const { gen: N, schemaEnv: q, validateName: L, ValidationError: H, opts: X } = R;
    q.$async ? N.if((0, i._)`${d.default.errors} === 0`, () => N.return(d.default.data), () => N.throw((0, i._)`new ${H}(${d.default.vErrors})`)) : (N.assign((0, i._)`${L}.errors`, d.default.vErrors), X.unevaluated && ne(R), N.return((0, i._)`${d.default.errors} === 0`));
  }
  function ne({ gen: R, evaluated: N, props: q, items: L }) {
    q instanceof i.Name && R.assign((0, i._)`${N}.props`, q), L instanceof i.Name && R.assign((0, i._)`${N}.items`, L);
  }
  function ee(R, N, q, L) {
    const { gen: H, schema: X, data: ce, allErrors: $e, opts: pe, self: he } = R, { RULES: le } = he;
    if (X.$ref && (pe.ignoreKeywordsWithRef || !(0, h.schemaHasRulesButRef)(X, le))) {
      H.block(() => K(R, "$ref", le.all.$ref.definition));
      return;
    }
    pe.jtd || J(R, N), H.block(() => {
      for (const ye of le.rules)
        Be(ye);
      Be(le.post);
    });
    function Be(ye) {
      (0, n.shouldUseGroup)(X, ye) && (ye.type ? (H.if((0, o.checkDataType)(ye.type, ce, pe.strictNumbers)), ue(R, ye), N.length === 1 && N[0] === ye.type && q && (H.else(), (0, o.reportTypeError)(R)), H.endIf()) : ue(R, ye), $e || H.if((0, i._)`${d.default.errors} === ${L || 0}`));
    }
  }
  function ue(R, N) {
    const { gen: q, schema: L, opts: { useDefaults: H } } = R;
    H && (0, c.assignDefaults)(R, N.type), q.block(() => {
      for (const X of N.rules)
        (0, n.shouldUseRule)(L, X) && K(R, X.keyword, X.definition, N.type);
    });
  }
  function J(R, N) {
    R.schemaEnv.meta || !R.opts.strictTypes || (ae(R, N), R.opts.allowUnionTypes || B(R, N), F(R, R.dataTypes));
  }
  function ae(R, N) {
    if (N.length) {
      if (!R.dataTypes.length) {
        R.dataTypes = N;
        return;
      }
      N.forEach((q) => {
        M(R.dataTypes, q) || C(R, `type "${q}" not allowed by context "${R.dataTypes.join(",")}"`);
      }), v(R, N);
    }
  }
  function B(R, N) {
    N.length > 1 && !(N.length === 2 && N.includes("null")) && C(R, "use allowUnionTypes to allow union type keyword");
  }
  function F(R, N) {
    const q = R.self.RULES.all;
    for (const L in q) {
      const H = q[L];
      if (typeof H == "object" && (0, n.shouldUseRule)(R.schema, H)) {
        const { type: X } = H.definition;
        X.length && !X.some((ce) => V(N, ce)) && C(R, `missing type "${X.join(",")}" for keyword "${L}"`);
      }
    }
  }
  function V(R, N) {
    return R.includes(N) || N === "number" && R.includes("integer");
  }
  function M(R, N) {
    return R.includes(N) || N === "integer" && R.includes("number");
  }
  function v(R, N) {
    const q = [];
    for (const L of R.dataTypes)
      M(N, L) ? q.push(L) : N.includes("integer") && L === "number" && q.push("integer");
    R.dataTypes = q;
  }
  function C(R, N) {
    const q = R.schemaEnv.baseId + R.errSchemaPath;
    N += ` at "${q}" (strictTypes)`, (0, h.checkStrictMode)(R, N, R.opts.strictTypes);
  }
  class T {
    constructor(N, q, L) {
      if ((0, r.validateKeywordUsage)(N, q, L), this.gen = N.gen, this.allErrors = N.allErrors, this.keyword = L, this.data = N.data, this.schema = N.schema[L], this.$data = q.$data && N.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, h.schemaRefOrVal)(N, this.schema, L, this.$data), this.schemaType = q.schemaType, this.parentSchema = N.schema, this.params = {}, this.it = N, this.def = q, this.$data)
        this.schemaCode = N.gen.const("vSchema", Z(this.$data, N));
      else if (this.schemaCode = this.schemaValue, !(0, r.validSchemaType)(this.schema, q.schemaType, q.allowUndefined))
        throw new Error(`${L} value must be ${JSON.stringify(q.schemaType)}`);
      ("code" in q ? q.trackErrors : q.errors !== !1) && (this.errsCount = N.gen.const("_errs", d.default.errors));
    }
    result(N, q, L) {
      this.failResult((0, i.not)(N), q, L);
    }
    failResult(N, q, L) {
      this.gen.if(N), L ? L() : this.error(), q ? (this.gen.else(), q(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    pass(N, q) {
      this.failResult((0, i.not)(N), void 0, q);
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
      const { schemaCode: q } = this;
      this.fail((0, i._)`${q} !== undefined && (${(0, i.or)(this.invalid$data(), N)})`);
    }
    error(N, q, L) {
      if (q) {
        this.setParams(q), this._error(N, L), this.setParams({});
        return;
      }
      this._error(N, L);
    }
    _error(N, q) {
      (N ? w.reportExtraError : w.reportError)(this, this.def.error, q);
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
    setParams(N, q) {
      q ? Object.assign(this.params, N) : this.params = N;
    }
    block$data(N, q, L = i.nil) {
      this.gen.block(() => {
        this.check$data(N, L), q();
      });
    }
    check$data(N = i.nil, q = i.nil) {
      if (!this.$data)
        return;
      const { gen: L, schemaCode: H, schemaType: X, def: ce } = this;
      L.if((0, i.or)((0, i._)`${H} === undefined`, q)), N !== i.nil && L.assign(N, !0), (X.length || ce.validateSchema) && (L.elseIf(this.invalid$data()), this.$dataError(), N !== i.nil && L.assign(N, !1)), L.else();
    }
    invalid$data() {
      const { gen: N, schemaCode: q, schemaType: L, def: H, it: X } = this;
      return (0, i.or)(ce(), $e());
      function ce() {
        if (L.length) {
          if (!(q instanceof i.Name))
            throw new Error("ajv implementation error");
          const pe = Array.isArray(L) ? L : [L];
          return (0, i._)`${(0, o.checkDataTypes)(pe, q, X.opts.strictNumbers, o.DataType.Wrong)}`;
        }
        return i.nil;
      }
      function $e() {
        if (H.validateSchema) {
          const pe = N.scopeValue("validate$data", { ref: H.validateSchema });
          return (0, i._)`!${pe}(${q})`;
        }
        return i.nil;
      }
    }
    subschema(N, q) {
      const L = (0, s.getSubschema)(this.it, N);
      (0, s.extendSubschemaData)(L, this.it, N), (0, s.extendSubschemaMode)(L, N);
      const H = { ...this.it, ...L, items: void 0, props: void 0 };
      return b(H, q), H;
    }
    mergeEvaluated(N, q) {
      const { it: L, gen: H } = this;
      L.opts.unevaluated && (L.props !== !0 && N.props !== void 0 && (L.props = h.mergeEvaluated.props(H, N.props, L.props, q)), L.items !== !0 && N.items !== void 0 && (L.items = h.mergeEvaluated.items(H, N.items, L.items, q)));
    }
    mergeValidEvaluated(N, q) {
      const { it: L, gen: H } = this;
      if (L.opts.unevaluated && (L.props !== !0 || L.items !== !0))
        return H.if(q, () => this.mergeEvaluated(N, i.Name)), !0;
    }
  }
  xe.KeywordCxt = T;
  function K(R, N, q, L) {
    const H = new T(R, q, N);
    "code" in q ? q.code(H, L) : H.$data && q.validate ? (0, r.funcKeywordCode)(H, q) : "macro" in q ? (0, r.macroKeywordCode)(H, q) : (q.compile || q.validate) && (0, r.funcKeywordCode)(H, q);
  }
  const G = /^\/(?:[^~]|~0|~1)*$/, te = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function Z(R, { dataLevel: N, dataNames: q, dataPathArr: L }) {
    let H, X;
    if (R === "")
      return d.default.rootData;
    if (R[0] === "/") {
      if (!G.test(R))
        throw new Error(`Invalid JSON-pointer: ${R}`);
      H = R, X = d.default.rootData;
    } else {
      const he = te.exec(R);
      if (!he)
        throw new Error(`Invalid JSON-pointer: ${R}`);
      const le = +he[1];
      if (H = he[2], H === "#") {
        if (le >= N)
          throw new Error(pe("property/index", le));
        return L[N - le];
      }
      if (le > N)
        throw new Error(pe("data", le));
      if (X = q[N - le], !H)
        return X;
    }
    let ce = X;
    const $e = H.split("/");
    for (const he of $e)
      he && (X = (0, i._)`${X}${(0, i.getProperty)((0, h.unescapeJsonPointer)(he))}`, ce = (0, i._)`${ce} && ${X}`);
    return ce;
    function pe(he, le) {
      return `Cannot access ${he} ${le} levels up, current level is ${N}`;
    }
  }
  return xe.getData = Z, xe;
}
var pt = {}, kr;
function Ln() {
  if (kr) return pt;
  kr = 1, Object.defineProperty(pt, "__esModule", { value: !0 });
  class e extends Error {
    constructor(n) {
      super("validation failed"), this.errors = n, this.ajv = this.validation = !0;
    }
  }
  return pt.default = e, pt;
}
var ht = {}, Er;
function $n() {
  if (Er) return ht;
  Er = 1, Object.defineProperty(ht, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ yn();
  class t extends Error {
    constructor(o, c, r, s) {
      super(s || `can't resolve reference ${r} from id ${c}`), this.missingRef = (0, e.resolveUrl)(o, c, r), this.missingSchema = (0, e.normalizeId)((0, e.getFullPath)(o, this.missingRef));
    }
  }
  return ht.default = t, ht;
}
var ge = {}, Pr;
function bn() {
  if (Pr) return ge;
  Pr = 1, Object.defineProperty(ge, "__esModule", { value: !0 }), ge.resolveSchema = ge.getCompilingSchema = ge.resolveRef = ge.compileSchema = ge.SchemaEnv = void 0;
  const e = /* @__PURE__ */ W(), t = /* @__PURE__ */ Ln(), n = /* @__PURE__ */ Ce(), o = /* @__PURE__ */ yn(), c = /* @__PURE__ */ Q(), r = /* @__PURE__ */ vn();
  class s {
    constructor(m) {
      var u;
      this.refs = {}, this.dynamicAnchors = {};
      let b;
      typeof m.schema == "object" && (b = m.schema), this.schema = m.schema, this.schemaId = m.schemaId, this.root = m.root || this, this.baseId = (u = m.baseId) !== null && u !== void 0 ? u : (0, o.normalizeId)(b?.[m.schemaId || "$id"]), this.schemaPath = m.schemaPath, this.localRefs = m.localRefs, this.meta = m.meta, this.$async = b?.$async, this.refs = {};
    }
  }
  ge.SchemaEnv = s;
  function i(p) {
    const m = h.call(this, p);
    if (m)
      return m;
    const u = (0, o.getFullPath)(this.opts.uriResolver, p.root.baseId), { es5: b, lines: k } = this.opts.code, { ownProperties: a } = this.opts, l = new e.CodeGen(this.scope, { es5: b, lines: k, ownProperties: a });
    let f;
    p.$async && (f = l.scopeValue("Error", {
      ref: t.default,
      code: (0, e._)`require("ajv/dist/runtime/validation_error").default`
    }));
    const E = l.scopeName("validate");
    p.validateName = E;
    const P = {
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
      topSchemaRef: l.scopeValue("schema", this.opts.code.source === !0 ? { ref: p.schema, code: (0, e.stringify)(p.schema) } : { ref: p.schema }),
      validateName: E,
      ValidationError: f,
      schema: p.schema,
      schemaEnv: p,
      rootId: u,
      baseId: p.baseId || u,
      schemaPath: e.nil,
      errSchemaPath: p.schemaPath || (this.opts.jtd ? "" : "#"),
      errorPath: (0, e._)`""`,
      opts: this.opts,
      self: this
    };
    let A;
    try {
      this._compilations.add(p), (0, r.validateFunctionCode)(P), l.optimize(this.opts.code.optimize);
      const O = l.toString();
      A = `${l.scopeRefs(n.default.scope)}return ${O}`, this.opts.code.process && (A = this.opts.code.process(A, p));
      const D = new Function(`${n.default.self}`, `${n.default.scope}`, A)(this, this.scope.get());
      if (this.scope.value(E, { ref: D }), D.errors = null, D.schema = p.schema, D.schemaEnv = p, p.$async && (D.$async = !0), this.opts.code.source === !0 && (D.source = { validateName: E, validateCode: O, scopeValues: l._values }), this.opts.unevaluated) {
        const { props: U, items: ne } = P;
        D.evaluated = {
          props: U instanceof e.Name ? void 0 : U,
          items: ne instanceof e.Name ? void 0 : ne,
          dynamicProps: U instanceof e.Name,
          dynamicItems: ne instanceof e.Name
        }, D.source && (D.source.evaluated = (0, e.stringify)(D.evaluated));
      }
      return p.validate = D, p;
    } catch (O) {
      throw delete p.validate, delete p.validateName, A && this.logger.error("Error compiling schema, function code:", A), O;
    } finally {
      this._compilations.delete(p);
    }
  }
  ge.compileSchema = i;
  function d(p, m, u) {
    var b;
    u = (0, o.resolveUrl)(this.opts.uriResolver, m, u);
    const k = p.refs[u];
    if (k)
      return k;
    let a = $.call(this, p, u);
    if (a === void 0) {
      const l = (b = p.localRefs) === null || b === void 0 ? void 0 : b[u], { schemaId: f } = this.opts;
      l && (a = new s({ schema: l, schemaId: f, root: p, baseId: m }));
    }
    if (a !== void 0)
      return p.refs[u] = g.call(this, a);
  }
  ge.resolveRef = d;
  function g(p) {
    return (0, o.inlineRef)(p.schema, this.opts.inlineRefs) ? p.schema : p.validate ? p : i.call(this, p);
  }
  function h(p) {
    for (const m of this._compilations)
      if (w(m, p))
        return m;
  }
  ge.getCompilingSchema = h;
  function w(p, m) {
    return p.schema === m.schema && p.root === m.root && p.baseId === m.baseId;
  }
  function $(p, m) {
    let u;
    for (; typeof (u = this.refs[m]) == "string"; )
      m = u;
    return u || this.schemas[m] || y.call(this, p, m);
  }
  function y(p, m) {
    const u = this.opts.uriResolver.parse(m), b = (0, o._getFullPath)(this.opts.uriResolver, u);
    let k = (0, o.getFullPath)(this.opts.uriResolver, p.baseId, void 0);
    if (Object.keys(p.schema).length > 0 && b === k)
      return S.call(this, u, p);
    const a = (0, o.normalizeId)(b), l = this.refs[a] || this.schemas[a];
    if (typeof l == "string") {
      const f = y.call(this, p, l);
      return typeof f?.schema != "object" ? void 0 : S.call(this, u, f);
    }
    if (typeof l?.schema == "object") {
      if (l.validate || i.call(this, l), a === (0, o.normalizeId)(m)) {
        const { schema: f } = l, { schemaId: E } = this.opts, P = f[E];
        return P && (k = (0, o.resolveUrl)(this.opts.uriResolver, k, P)), new s({ schema: f, schemaId: E, root: p, baseId: k });
      }
      return S.call(this, u, l);
    }
  }
  ge.resolveSchema = y;
  const _ = /* @__PURE__ */ new Set([
    "properties",
    "patternProperties",
    "enum",
    "dependencies",
    "definitions"
  ]);
  function S(p, { baseId: m, schema: u, root: b }) {
    var k;
    if (((k = p.fragment) === null || k === void 0 ? void 0 : k[0]) !== "/")
      return;
    for (const f of p.fragment.slice(1).split("/")) {
      if (typeof u == "boolean")
        return;
      const E = u[(0, c.unescapeFragment)(f)];
      if (E === void 0)
        return;
      u = E;
      const P = typeof u == "object" && u[this.opts.schemaId];
      !_.has(f) && P && (m = (0, o.resolveUrl)(this.opts.uriResolver, m, P));
    }
    let a;
    if (typeof u != "boolean" && u.$ref && !(0, c.schemaHasRulesButRef)(u, this.RULES)) {
      const f = (0, o.resolveUrl)(this.opts.uriResolver, m, u.$ref);
      a = y.call(this, b, f);
    }
    const { schemaId: l } = this.opts;
    if (a = a || new s({ schema: u, schemaId: l, root: b, baseId: m }), a.schema !== a.root.schema)
      return a;
  }
  return ge;
}
const Ni = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", Mi = "Meta-schema for $data reference (JSON AnySchema extension proposal)", ji = "object", Oi = ["$data"], Ti = { $data: { type: "string", anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] } }, zi = !1, Ii = {
  $id: Ni,
  description: Mi,
  type: ji,
  required: Oi,
  properties: Ti,
  additionalProperties: zi
};
var mt = {}, rt = { exports: {} }, Nn, xr;
function Wo() {
  if (xr) return Nn;
  xr = 1;
  const e = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu), t = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u), n = RegExp.prototype.test.bind(/^[\da-f]{2}$/iu), o = RegExp.prototype.test.bind(/^[\da-z\-._~]$/iu), c = RegExp.prototype.test.bind(/^[\da-z\-._~!$&'()*+,;=:@/]$/iu);
  function r(a) {
    let l = "", f = 0, E = 0;
    for (E = 0; E < a.length; E++)
      if (f = a[E].charCodeAt(0), f !== 48) {
        if (!(f >= 48 && f <= 57 || f >= 65 && f <= 70 || f >= 97 && f <= 102))
          return "";
        l += a[E];
        break;
      }
    for (E += 1; E < a.length; E++) {
      if (f = a[E].charCodeAt(0), !(f >= 48 && f <= 57 || f >= 65 && f <= 70 || f >= 97 && f <= 102))
        return "";
      l += a[E];
    }
    return l;
  }
  const s = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
  function i(a) {
    return a.length = 0, !0;
  }
  function d(a, l, f) {
    if (a.length) {
      const E = r(a);
      if (E !== "")
        l.push(E);
      else
        return f.error = !0, !1;
      a.length = 0;
    }
    return !0;
  }
  function g(a) {
    let l = 0;
    const f = { error: !1, address: "", zone: "" }, E = [], P = [];
    let A = !1, O = !1, j = d;
    for (let D = 0; D < a.length; D++) {
      const U = a[D];
      if (!(U === "[" || U === "]"))
        if (U === ":") {
          if (A === !0 && (O = !0), !j(P, E, f))
            break;
          if (++l > 7) {
            f.error = !0;
            break;
          }
          D > 0 && a[D - 1] === ":" && (A = !0), E.push(":");
          continue;
        } else if (U === "%") {
          if (!j(P, E, f))
            break;
          j = i;
        } else {
          P.push(U);
          continue;
        }
    }
    return P.length && (j === i ? f.zone = P.join("") : O ? E.push(P.join("")) : E.push(r(P))), f.address = E.join(""), f;
  }
  function h(a) {
    if (w(a, ":") < 2)
      return { host: a, isIPV6: !1 };
    const l = g(a);
    if (l.error)
      return { host: a, isIPV6: !1 };
    {
      let f = l.address, E = l.address;
      return l.zone && (f += "%" + l.zone, E += "%25" + l.zone), { host: f, isIPV6: !0, escapedHost: E };
    }
  }
  function w(a, l) {
    let f = 0;
    for (let E = 0; E < a.length; E++)
      a[E] === l && f++;
    return f;
  }
  function $(a) {
    let l = a;
    const f = [];
    let E = -1, P = 0;
    for (; P = l.length; ) {
      if (P === 1) {
        if (l === ".")
          break;
        if (l === "/") {
          f.push("/");
          break;
        } else {
          f.push(l);
          break;
        }
      } else if (P === 2) {
        if (l[0] === ".") {
          if (l[1] === ".")
            break;
          if (l[1] === "/") {
            l = l.slice(2);
            continue;
          }
        } else if (l[0] === "/" && (l[1] === "." || l[1] === "/")) {
          f.push("/");
          break;
        }
      } else if (P === 3 && l === "/..") {
        f.length !== 0 && f.pop(), f.push("/");
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
          l = l.slice(3), f.length !== 0 && f.pop();
          continue;
        }
      }
      if ((E = l.indexOf("/", 1)) === -1) {
        f.push(l);
        break;
      } else
        f.push(l.slice(0, E)), l = l.slice(E);
    }
    return f.join("");
  }
  const y = { "@": "%40", "/": "%2F", "?": "%3F", "#": "%23", ":": "%3A" }, _ = /[@/?#:]/g, S = /[@/?#]/g;
  function p(a, l) {
    const f = l ? S : _;
    return f.lastIndex = 0, a.replace(f, (E) => y[E]);
  }
  function m(a, l = !1) {
    if (a.indexOf("%") === -1)
      return a;
    let f = "";
    for (let E = 0; E < a.length; E++) {
      if (a[E] === "%" && E + 2 < a.length) {
        const P = a.slice(E + 1, E + 3);
        if (n(P)) {
          const A = P.toUpperCase(), O = String.fromCharCode(parseInt(A, 16));
          l && o(O) ? f += O : f += "%" + A, E += 2;
          continue;
        }
      }
      f += a[E];
    }
    return f;
  }
  function u(a) {
    let l = "";
    for (let f = 0; f < a.length; f++) {
      if (a[f] === "%" && f + 2 < a.length) {
        const E = a.slice(f + 1, f + 3);
        if (n(E)) {
          const P = E.toUpperCase(), A = String.fromCharCode(parseInt(P, 16));
          A !== "." && o(A) ? l += A : l += "%" + P, f += 2;
          continue;
        }
      }
      c(a[f]) ? l += a[f] : l += escape(a[f]);
    }
    return l;
  }
  function b(a) {
    let l = "";
    for (let f = 0; f < a.length; f++) {
      if (a[f] === "%" && f + 2 < a.length) {
        const E = a.slice(f + 1, f + 3);
        if (n(E)) {
          l += "%" + E.toUpperCase(), f += 2;
          continue;
        }
      }
      l += escape(a[f]);
    }
    return l;
  }
  function k(a) {
    const l = [];
    if (a.userinfo !== void 0 && (l.push(a.userinfo), l.push("@")), a.host !== void 0) {
      let f = unescape(a.host);
      if (!t(f)) {
        const E = h(f);
        E.isIPV6 === !0 ? f = `[${E.escapedHost}]` : f = p(f, !1);
      }
      l.push(f);
    }
    return (typeof a.port == "number" || typeof a.port == "string") && (l.push(":"), l.push(String(a.port))), l.length ? l.join("") : void 0;
  }
  return Nn = {
    nonSimpleDomain: s,
    recomposeAuthority: k,
    reescapeHostDelimiters: p,
    normalizePercentEncoding: m,
    normalizePathEncoding: u,
    escapePreservingEscapes: b,
    removeDotSegments: $,
    isIPv4: t,
    isUUID: e,
    normalizeIPv6: h,
    stringArrayToHexStripped: r
  }, Nn;
}
var Mn, Rr;
function Di() {
  if (Rr) return Mn;
  Rr = 1;
  const { isUUID: e } = Wo(), t = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu, n = (
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
  function c(a) {
    return a.secure === !0 ? !0 : a.secure === !1 ? !1 : a.scheme ? a.scheme.length === 3 && (a.scheme[0] === "w" || a.scheme[0] === "W") && (a.scheme[1] === "s" || a.scheme[1] === "S") && (a.scheme[2] === "s" || a.scheme[2] === "S") : !1;
  }
  function r(a) {
    return a.host || (a.error = a.error || "HTTP URIs must have a host."), a;
  }
  function s(a) {
    const l = String(a.scheme).toLowerCase() === "https";
    return (a.port === (l ? 443 : 80) || a.port === "") && (a.port = void 0), a.path || (a.path = "/"), a;
  }
  function i(a) {
    return a.secure = c(a), a.resourceName = (a.path || "/") + (a.query ? "?" + a.query : ""), a.path = void 0, a.query = void 0, a;
  }
  function d(a) {
    if ((a.port === (c(a) ? 443 : 80) || a.port === "") && (a.port = void 0), typeof a.secure == "boolean" && (a.scheme = a.secure ? "wss" : "ws", a.secure = void 0), a.resourceName) {
      const [l, f] = a.resourceName.split("?");
      a.path = l && l !== "/" ? l : void 0, a.query = f, a.resourceName = void 0;
    }
    return a.fragment = void 0, a;
  }
  function g(a, l) {
    if (!a.path)
      return a.error = "URN can not be parsed", a;
    const f = a.path.match(t);
    if (f) {
      const E = l.scheme || a.scheme || "urn";
      a.nid = f[1].toLowerCase(), a.nss = f[2];
      const P = `${E}:${l.nid || a.nid}`, A = k(P);
      a.path = void 0, A && (a = A.parse(a, l));
    } else
      a.error = a.error || "URN can not be parsed.";
    return a;
  }
  function h(a, l) {
    if (a.nid === void 0)
      throw new Error("URN without nid cannot be serialized");
    const f = l.scheme || a.scheme || "urn", E = a.nid.toLowerCase(), P = `${f}:${l.nid || E}`, A = k(P);
    A && (a = A.serialize(a, l));
    const O = a, j = a.nss;
    return O.path = `${E || l.nid}:${j}`, l.skipEscape = !0, O;
  }
  function w(a, l) {
    const f = a;
    return f.uuid = f.nss, f.nss = void 0, !l.tolerant && (!f.uuid || !e(f.uuid)) && (f.error = f.error || "UUID is not valid."), f;
  }
  function $(a) {
    const l = a;
    return l.nss = (a.uuid || "").toLowerCase(), l;
  }
  const y = (
    /** @type {SchemeHandler} */
    {
      scheme: "http",
      domainHost: !0,
      parse: r,
      serialize: s
    }
  ), _ = (
    /** @type {SchemeHandler} */
    {
      scheme: "https",
      domainHost: y.domainHost,
      parse: r,
      serialize: s
    }
  ), S = (
    /** @type {SchemeHandler} */
    {
      scheme: "ws",
      domainHost: !0,
      parse: i,
      serialize: d
    }
  ), p = (
    /** @type {SchemeHandler} */
    {
      scheme: "wss",
      domainHost: S.domainHost,
      parse: S.parse,
      serialize: S.serialize
    }
  ), b = (
    /** @type {Record<SchemeName, SchemeHandler>} */
    {
      http: y,
      https: _,
      ws: S,
      wss: p,
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
  Object.setPrototypeOf(b, null);
  function k(a) {
    return a && (b[
      /** @type {SchemeName} */
      a
    ] || b[
      /** @type {SchemeName} */
      a.toLowerCase()
    ]) || void 0;
  }
  return Mn = {
    wsIsSecure: c,
    SCHEMES: b,
    isValidSchemeName: o,
    getSchemeHandler: k
  }, Mn;
}
var Ar;
function qi() {
  if (Ar) return rt.exports;
  Ar = 1;
  const { normalizeIPv6: e, removeDotSegments: t, recomposeAuthority: n, normalizePercentEncoding: o, normalizePathEncoding: c, escapePreservingEscapes: r, reescapeHostDelimiters: s, isIPv4: i, nonSimpleDomain: d } = Wo(), { SCHEMES: g, getSchemeHandler: h } = Di();
  function w(P, A) {
    return typeof P == "string" ? P = /** @type {T} */
    a(P, A) : typeof P == "object" && (P = /** @type {T} */
    k(S(P, A), A)), P;
  }
  function $(P, A, O) {
    const j = O ? Object.assign({ scheme: "null" }, O) : { scheme: "null" }, D = y(k(P, j), k(A, j), j, !0);
    return j.skipEscape = !0, S(D, j);
  }
  function y(P, A, O, j) {
    const D = {};
    return j || (P = k(S(P, O), O), A = k(S(A, O), O)), O = O || {}, !O.tolerant && A.scheme ? (D.scheme = A.scheme, D.userinfo = A.userinfo, D.host = A.host, D.port = A.port, D.path = t(A.path || ""), D.query = A.query) : (A.userinfo !== void 0 || A.host !== void 0 || A.port !== void 0 ? (D.userinfo = A.userinfo, D.host = A.host, D.port = A.port, D.path = t(A.path || ""), D.query = A.query) : (A.path ? (A.path[0] === "/" ? D.path = t(A.path) : ((P.userinfo !== void 0 || P.host !== void 0 || P.port !== void 0) && !P.path ? D.path = "/" + A.path : P.path ? D.path = P.path.slice(0, P.path.lastIndexOf("/") + 1) + A.path : D.path = A.path, D.path = t(D.path)), D.query = A.query) : (D.path = P.path, A.query !== void 0 ? D.query = A.query : D.query = P.query), D.userinfo = P.userinfo, D.host = P.host, D.port = P.port), D.scheme = P.scheme), D.fragment = A.fragment, D;
  }
  function _(P, A, O) {
    const j = f(P, O), D = f(A, O);
    return j !== void 0 && D !== void 0 && j.toLowerCase() === D.toLowerCase();
  }
  function S(P, A) {
    const O = {
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
    }, j = Object.assign({}, A), D = [], U = h(j.scheme || O.scheme);
    U && U.serialize && U.serialize(O, j), O.path !== void 0 && (j.skipEscape ? O.path = o(O.path) : (O.path = r(O.path), O.scheme !== void 0 && (O.path = O.path.split("%3A").join(":")))), j.reference !== "suffix" && O.scheme && D.push(O.scheme, ":");
    const ne = n(O);
    if (ne !== void 0 && (j.reference !== "suffix" && D.push("//"), D.push(ne), O.path && O.path[0] !== "/" && D.push("/")), O.path !== void 0) {
      let ee = O.path;
      !j.absolutePath && (!U || !U.absolutePath) && (ee = t(ee)), ne === void 0 && ee[0] === "/" && ee[1] === "/" && (ee = "/%2F" + ee.slice(2)), D.push(ee);
    }
    return O.query !== void 0 && D.push("?", O.query), O.fragment !== void 0 && D.push("#", O.fragment), D.join("");
  }
  const p = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u, m = /^(?:[^#/:?]+:)?\/\/([^/?#]*)/;
  function u(P, A) {
    if (A[2] !== void 0 && P.path && P.path[0] !== "/")
      return 'URI path must start with "/" when authority is present.';
    if (typeof P.port == "number" && (P.port < 0 || P.port > 65535))
      return "URI port is malformed.";
  }
  function b(P, A) {
    const O = Object.assign({}, A), j = {
      scheme: void 0,
      userinfo: void 0,
      host: "",
      port: void 0,
      path: "",
      query: void 0,
      fragment: void 0
    };
    let D = !1, U = !1;
    O.reference === "suffix" && (O.scheme ? P = O.scheme + ":" + P : P = "//" + P);
    const ne = P.match(m);
    ne !== null && ne[1].indexOf("\\") !== -1 && (j.error = "URI authority must not contain a literal backslash.", D = !0);
    const ee = P.match(p);
    if (ee) {
      j.scheme = ee[1], j.userinfo = ee[3], j.host = ee[4], j.port = parseInt(ee[5], 10), j.path = ee[6] || "", j.query = ee[7], j.fragment = ee[8], isNaN(j.port) && (j.port = ee[5]);
      const ue = u(j, ee);
      if (ue !== void 0 && (j.error = j.error || ue, D = !0), j.host)
        if (i(j.host) === !1) {
          const B = e(j.host);
          j.host = B.host.toLowerCase(), U = B.isIPV6;
        } else
          U = !0;
      j.scheme === void 0 && j.userinfo === void 0 && j.host === void 0 && j.port === void 0 && j.query === void 0 && !j.path ? j.reference = "same-document" : j.scheme === void 0 ? j.reference = "relative" : j.fragment === void 0 ? j.reference = "absolute" : j.reference = "uri", O.reference && O.reference !== "suffix" && O.reference !== j.reference && (j.error = j.error || "URI is not a " + O.reference + " reference.");
      const J = h(O.scheme || j.scheme);
      if (!O.unicodeSupport && (!J || !J.unicodeSupport) && j.host && (O.domainHost || J && J.domainHost) && U === !1 && d(j.host))
        try {
          j.host = new URL("http://" + j.host).hostname;
        } catch (ae) {
          j.error = j.error || "Host's domain name can not be converted to ASCII: " + ae;
        }
      if ((!J || J && !J.skipNormalize) && (P.indexOf("%") !== -1 && (j.scheme !== void 0 && (j.scheme = unescape(j.scheme)), j.host !== void 0 && (j.host = s(unescape(j.host), U))), j.path && (j.path = c(j.path)), j.fragment))
        try {
          j.fragment = encodeURI(decodeURIComponent(j.fragment));
        } catch {
          j.error = j.error || "URI malformed";
        }
      J && J.parse && J.parse(j, O);
    } else
      j.error = j.error || "URI can not be parsed.";
    return { parsed: j, malformedAuthorityOrPort: D };
  }
  function k(P, A) {
    return b(P, A).parsed;
  }
  function a(P, A) {
    return l(P, A).normalized;
  }
  function l(P, A) {
    const { parsed: O, malformedAuthorityOrPort: j } = b(P, A);
    return {
      normalized: j ? P : S(O, A),
      malformedAuthorityOrPort: j
    };
  }
  function f(P, A) {
    if (typeof P == "string") {
      const { normalized: O, malformedAuthorityOrPort: j } = l(P, A);
      return j ? void 0 : O;
    }
    if (typeof P == "object")
      return S(P, A);
  }
  const E = {
    SCHEMES: g,
    normalize: w,
    resolve: $,
    resolveComponent: y,
    equal: _,
    serialize: S,
    parse: k
  };
  return rt.exports = E, rt.exports.default = E, rt.exports.fastUri = E, rt.exports;
}
var Fr;
function Vi() {
  if (Fr) return mt;
  Fr = 1, Object.defineProperty(mt, "__esModule", { value: !0 });
  const e = qi();
  return e.code = 'require("ajv/dist/runtime/uri").default', mt.default = e, mt;
}
var Nr;
function Bi() {
  return Nr || (Nr = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = void 0;
    var t = /* @__PURE__ */ vn();
    Object.defineProperty(e, "KeywordCxt", { enumerable: !0, get: function() {
      return t.KeywordCxt;
    } });
    var n = /* @__PURE__ */ W();
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
    const o = /* @__PURE__ */ Ln(), c = /* @__PURE__ */ $n(), r = /* @__PURE__ */ Go(), s = /* @__PURE__ */ bn(), i = /* @__PURE__ */ W(), d = /* @__PURE__ */ yn(), g = /* @__PURE__ */ pn(), h = /* @__PURE__ */ Q(), w = Ii, $ = /* @__PURE__ */ Vi(), y = (B, F) => new RegExp(B, F);
    y.code = "new RegExp";
    const _ = ["removeAdditional", "useDefaults", "coerceTypes"], S = /* @__PURE__ */ new Set([
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
    }, m = {
      ignoreKeywordsWithRef: "",
      jsPropertySyntax: "",
      unicode: '"minLength"/"maxLength" account for unicode characters by default.'
    }, u = 200;
    function b(B) {
      var F, V, M, v, C, T, K, G, te, Z, R, N, q, L, H, X, ce, $e, pe, he, le, Be, ye, wn, Sn;
      const et = B.strict, Cn = (F = B.code) === null || F === void 0 ? void 0 : F.optimize, rr = Cn === !0 || Cn === void 0 ? 1 : Cn || 0, or = (M = (V = B.code) === null || V === void 0 ? void 0 : V.regExp) !== null && M !== void 0 ? M : y, pi = (v = B.uriResolver) !== null && v !== void 0 ? v : $.default;
      return {
        strictSchema: (T = (C = B.strictSchema) !== null && C !== void 0 ? C : et) !== null && T !== void 0 ? T : !0,
        strictNumbers: (G = (K = B.strictNumbers) !== null && K !== void 0 ? K : et) !== null && G !== void 0 ? G : !0,
        strictTypes: (Z = (te = B.strictTypes) !== null && te !== void 0 ? te : et) !== null && Z !== void 0 ? Z : "log",
        strictTuples: (N = (R = B.strictTuples) !== null && R !== void 0 ? R : et) !== null && N !== void 0 ? N : "log",
        strictRequired: (L = (q = B.strictRequired) !== null && q !== void 0 ? q : et) !== null && L !== void 0 ? L : !1,
        code: B.code ? { ...B.code, optimize: rr, regExp: or } : { optimize: rr, regExp: or },
        loopRequired: (H = B.loopRequired) !== null && H !== void 0 ? H : u,
        loopEnum: (X = B.loopEnum) !== null && X !== void 0 ? X : u,
        meta: (ce = B.meta) !== null && ce !== void 0 ? ce : !0,
        messages: ($e = B.messages) !== null && $e !== void 0 ? $e : !0,
        inlineRefs: (pe = B.inlineRefs) !== null && pe !== void 0 ? pe : !0,
        schemaId: (he = B.schemaId) !== null && he !== void 0 ? he : "$id",
        addUsedSchema: (le = B.addUsedSchema) !== null && le !== void 0 ? le : !0,
        validateSchema: (Be = B.validateSchema) !== null && Be !== void 0 ? Be : !0,
        validateFormats: (ye = B.validateFormats) !== null && ye !== void 0 ? ye : !0,
        unicodeRegExp: (wn = B.unicodeRegExp) !== null && wn !== void 0 ? wn : !0,
        int32range: (Sn = B.int32range) !== null && Sn !== void 0 ? Sn : !0,
        uriResolver: pi
      };
    }
    class k {
      constructor(F = {}) {
        this.schemas = {}, this.refs = {}, this.formats = /* @__PURE__ */ Object.create(null), this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), F = this.opts = { ...F, ...b(F) };
        const { es5: V, lines: M } = this.opts.code;
        this.scope = new i.ValueScope({ scope: {}, prefixes: S, es5: V, lines: M }), this.logger = j(F.logger);
        const v = F.validateFormats;
        F.validateFormats = !1, this.RULES = (0, r.getRules)(), a.call(this, p, F, "NOT SUPPORTED"), a.call(this, m, F, "DEPRECATED", "warn"), this._metaOpts = A.call(this), F.formats && E.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), F.keywords && P.call(this, F.keywords), typeof F.meta == "object" && this.addMetaSchema(F.meta), f.call(this), F.validateFormats = v;
      }
      _addVocabularies() {
        this.addKeyword("$async");
      }
      _addDefaultMetaSchema() {
        const { $data: F, meta: V, schemaId: M } = this.opts;
        let v = w;
        M === "id" && (v = { ...w }, v.id = v.$id, delete v.$id), V && F && this.addMetaSchema(v, v[M], !1);
      }
      defaultMeta() {
        const { meta: F, schemaId: V } = this.opts;
        return this.opts.defaultMeta = typeof F == "object" ? F[V] || F : void 0;
      }
      validate(F, V) {
        let M;
        if (typeof F == "string") {
          if (M = this.getSchema(F), !M)
            throw new Error(`no schema with key or ref "${F}"`);
        } else
          M = this.compile(F);
        const v = M(V);
        return "$async" in M || (this.errors = M.errors), v;
      }
      compile(F, V) {
        const M = this._addSchema(F, V);
        return M.validate || this._compileSchemaEnv(M);
      }
      compileAsync(F, V) {
        if (typeof this.opts.loadSchema != "function")
          throw new Error("options.loadSchema should be a function");
        const { loadSchema: M } = this.opts;
        return v.call(this, F, V);
        async function v(Z, R) {
          await C.call(this, Z.$schema);
          const N = this._addSchema(Z, R);
          return N.validate || T.call(this, N);
        }
        async function C(Z) {
          Z && !this.getSchema(Z) && await v.call(this, { $ref: Z }, !0);
        }
        async function T(Z) {
          try {
            return this._compileSchemaEnv(Z);
          } catch (R) {
            if (!(R instanceof c.default))
              throw R;
            return K.call(this, R), await G.call(this, R.missingSchema), T.call(this, Z);
          }
        }
        function K({ missingSchema: Z, missingRef: R }) {
          if (this.refs[Z])
            throw new Error(`AnySchema ${Z} is loaded but ${R} cannot be resolved`);
        }
        async function G(Z) {
          const R = await te.call(this, Z);
          this.refs[Z] || await C.call(this, R.$schema), this.refs[Z] || this.addSchema(R, Z, V);
        }
        async function te(Z) {
          const R = this._loading[Z];
          if (R)
            return R;
          try {
            return await (this._loading[Z] = M(Z));
          } finally {
            delete this._loading[Z];
          }
        }
      }
      // Adds schema to the instance
      addSchema(F, V, M, v = this.opts.validateSchema) {
        if (Array.isArray(F)) {
          for (const T of F)
            this.addSchema(T, void 0, M, v);
          return this;
        }
        let C;
        if (typeof F == "object") {
          const { schemaId: T } = this.opts;
          if (C = F[T], C !== void 0 && typeof C != "string")
            throw new Error(`schema ${T} must be string`);
        }
        return V = (0, d.normalizeId)(V || C), this._checkUnique(V), this.schemas[V] = this._addSchema(F, M, V, v, !0), this;
      }
      // Add schema that will be used to validate other schemas
      // options in META_IGNORE_OPTIONS are alway set to false
      addMetaSchema(F, V, M = this.opts.validateSchema) {
        return this.addSchema(F, V, !0, M), this;
      }
      //  Validate schema against its meta-schema
      validateSchema(F, V) {
        if (typeof F == "boolean")
          return !0;
        let M;
        if (M = F.$schema, M !== void 0 && typeof M != "string")
          throw new Error("$schema must be a string");
        if (M = M || this.opts.defaultMeta || this.defaultMeta(), !M)
          return this.logger.warn("meta-schema not available"), this.errors = null, !0;
        const v = this.validate(M, F);
        if (!v && V) {
          const C = "schema is invalid: " + this.errorsText();
          if (this.opts.validateSchema === "log")
            this.logger.error(C);
          else
            throw new Error(C);
        }
        return v;
      }
      // Get compiled schema by `key` or `ref`.
      // (`key` that was passed to `addSchema` or full schema reference - `schema.$id` or resolved id)
      getSchema(F) {
        let V;
        for (; typeof (V = l.call(this, F)) == "string"; )
          F = V;
        if (V === void 0) {
          const { schemaId: M } = this.opts, v = new s.SchemaEnv({ schema: {}, schemaId: M });
          if (V = s.resolveSchema.call(this, v, F), !V)
            return;
          this.refs[F] = V;
        }
        return V.validate || this._compileSchemaEnv(V);
      }
      // Remove cached schema(s).
      // If no parameter is passed all schemas but meta-schemas are removed.
      // If RegExp is passed all schemas with key/id matching pattern but meta-schemas are removed.
      // Even if schema is referenced by other schemas it still can be removed as other schemas have local references.
      removeSchema(F) {
        if (F instanceof RegExp)
          return this._removeAllSchemas(this.schemas, F), this._removeAllSchemas(this.refs, F), this;
        switch (typeof F) {
          case "undefined":
            return this._removeAllSchemas(this.schemas), this._removeAllSchemas(this.refs), this._cache.clear(), this;
          case "string": {
            const V = l.call(this, F);
            return typeof V == "object" && this._cache.delete(V.schema), delete this.schemas[F], delete this.refs[F], this;
          }
          case "object": {
            const V = F;
            this._cache.delete(V);
            let M = F[this.opts.schemaId];
            return M && (M = (0, d.normalizeId)(M), delete this.schemas[M], delete this.refs[M]), this;
          }
          default:
            throw new Error("ajv.removeSchema: invalid parameter");
        }
      }
      // add "vocabulary" - a collection of keywords
      addVocabulary(F) {
        for (const V of F)
          this.addKeyword(V);
        return this;
      }
      addKeyword(F, V) {
        let M;
        if (typeof F == "string")
          M = F, typeof V == "object" && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), V.keyword = M);
        else if (typeof F == "object" && V === void 0) {
          if (V = F, M = V.keyword, Array.isArray(M) && !M.length)
            throw new Error("addKeywords: keyword must be string or non-empty array");
        } else
          throw new Error("invalid addKeywords parameters");
        if (U.call(this, M, V), !V)
          return (0, h.eachItem)(M, (C) => ne.call(this, C)), this;
        ue.call(this, V);
        const v = {
          ...V,
          type: (0, g.getJSONTypes)(V.type),
          schemaType: (0, g.getJSONTypes)(V.schemaType)
        };
        return (0, h.eachItem)(M, v.type.length === 0 ? (C) => ne.call(this, C, v) : (C) => v.type.forEach((T) => ne.call(this, C, v, T))), this;
      }
      getKeyword(F) {
        const V = this.RULES.all[F];
        return typeof V == "object" ? V.definition : !!V;
      }
      // Remove keyword
      removeKeyword(F) {
        const { RULES: V } = this;
        delete V.keywords[F], delete V.all[F];
        for (const M of V.rules) {
          const v = M.rules.findIndex((C) => C.keyword === F);
          v >= 0 && M.rules.splice(v, 1);
        }
        return this;
      }
      // Add format
      addFormat(F, V) {
        return typeof V == "string" && (V = new RegExp(V)), this.formats[F] = V, this;
      }
      errorsText(F = this.errors, { separator: V = ", ", dataVar: M = "data" } = {}) {
        return !F || F.length === 0 ? "No errors" : F.map((v) => `${M}${v.instancePath} ${v.message}`).reduce((v, C) => v + V + C);
      }
      $dataMetaSchema(F, V) {
        const M = this.RULES.all;
        F = JSON.parse(JSON.stringify(F));
        for (const v of V) {
          const C = v.split("/").slice(1);
          let T = F;
          for (const K of C)
            T = T[K];
          for (const K in M) {
            const G = M[K];
            if (typeof G != "object")
              continue;
            const { $data: te } = G.definition, Z = T[K];
            te && Z && (T[K] = ae(Z));
          }
        }
        return F;
      }
      _removeAllSchemas(F, V) {
        for (const M in F) {
          const v = F[M];
          (!V || V.test(M)) && (typeof v == "string" ? delete F[M] : v && !v.meta && (this._cache.delete(v.schema), delete F[M]));
        }
      }
      _addSchema(F, V, M, v = this.opts.validateSchema, C = this.opts.addUsedSchema) {
        let T;
        const { schemaId: K } = this.opts;
        if (typeof F == "object")
          T = F[K];
        else {
          if (this.opts.jtd)
            throw new Error("schema must be object");
          if (typeof F != "boolean")
            throw new Error("schema must be object or boolean");
        }
        let G = this._cache.get(F);
        if (G !== void 0)
          return G;
        M = (0, d.normalizeId)(T || M);
        const te = d.getSchemaRefs.call(this, F, M);
        return G = new s.SchemaEnv({ schema: F, schemaId: K, meta: V, baseId: M, localRefs: te }), this._cache.set(G.schema, G), C && !M.startsWith("#") && (M && this._checkUnique(M), this.refs[M] = G), v && this.validateSchema(F, !0), G;
      }
      _checkUnique(F) {
        if (this.schemas[F] || this.refs[F])
          throw new Error(`schema with key or id "${F}" already exists`);
      }
      _compileSchemaEnv(F) {
        if (F.meta ? this._compileMetaSchema(F) : s.compileSchema.call(this, F), !F.validate)
          throw new Error("ajv implementation error");
        return F.validate;
      }
      _compileMetaSchema(F) {
        const V = this.opts;
        this.opts = this._metaOpts;
        try {
          s.compileSchema.call(this, F);
        } finally {
          this.opts = V;
        }
      }
    }
    k.ValidationError = o.default, k.MissingRefError = c.default, e.default = k;
    function a(B, F, V, M = "error") {
      for (const v in B) {
        const C = v;
        C in F && this.logger[M](`${V}: option ${v}. ${B[C]}`);
      }
    }
    function l(B) {
      return B = (0, d.normalizeId)(B), this.schemas[B] || this.refs[B];
    }
    function f() {
      const B = this.opts.schemas;
      if (B)
        if (Array.isArray(B))
          this.addSchema(B);
        else
          for (const F in B)
            this.addSchema(B[F], F);
    }
    function E() {
      for (const B in this.opts.formats) {
        const F = this.opts.formats[B];
        F && this.addFormat(B, F);
      }
    }
    function P(B) {
      if (Array.isArray(B)) {
        this.addVocabulary(B);
        return;
      }
      this.logger.warn("keywords option as map is deprecated, pass array");
      for (const F in B) {
        const V = B[F];
        V.keyword || (V.keyword = F), this.addKeyword(V);
      }
    }
    function A() {
      const B = { ...this.opts };
      for (const F of _)
        delete B[F];
      return B;
    }
    const O = { log() {
    }, warn() {
    }, error() {
    } };
    function j(B) {
      if (B === !1)
        return O;
      if (B === void 0)
        return console;
      if (B.log && B.warn && B.error)
        return B;
      throw new Error("logger must implement log, warn and error methods");
    }
    const D = /^[a-z_$][a-z0-9_$:-]*$/i;
    function U(B, F) {
      const { RULES: V } = this;
      if ((0, h.eachItem)(B, (M) => {
        if (V.keywords[M])
          throw new Error(`Keyword ${M} is already defined`);
        if (!D.test(M))
          throw new Error(`Keyword ${M} has invalid name`);
      }), !!F && F.$data && !("code" in F || "validate" in F))
        throw new Error('$data keyword must have "code" or "validate" function');
    }
    function ne(B, F, V) {
      var M;
      const v = F?.post;
      if (V && v)
        throw new Error('keyword with "post" flag cannot have "type"');
      const { RULES: C } = this;
      let T = v ? C.post : C.rules.find(({ type: G }) => G === V);
      if (T || (T = { type: V, rules: [] }, C.rules.push(T)), C.keywords[B] = !0, !F)
        return;
      const K = {
        keyword: B,
        definition: {
          ...F,
          type: (0, g.getJSONTypes)(F.type),
          schemaType: (0, g.getJSONTypes)(F.schemaType)
        }
      };
      F.before ? ee.call(this, T, K, F.before) : T.rules.push(K), C.all[B] = K, (M = F.implements) === null || M === void 0 || M.forEach((G) => this.addKeyword(G));
    }
    function ee(B, F, V) {
      const M = B.rules.findIndex((v) => v.keyword === V);
      M >= 0 ? B.rules.splice(M, 0, F) : (B.rules.push(F), this.logger.warn(`rule ${V} is not defined`));
    }
    function ue(B) {
      let { metaSchema: F } = B;
      F !== void 0 && (B.$data && this.opts.$data && (F = ae(F)), B.validateSchema = this.compile(F, !0));
    }
    const J = {
      $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
    };
    function ae(B) {
      return { anyOf: [B, J] };
    }
  })(kn)), kn;
}
var gt = {}, yt = {}, vt = {}, Mr;
function Li() {
  if (Mr) return vt;
  Mr = 1, Object.defineProperty(vt, "__esModule", { value: !0 });
  const e = {
    keyword: "id",
    code() {
      throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
    }
  };
  return vt.default = e, vt;
}
var Ne = {}, jr;
function Un() {
  if (jr) return Ne;
  jr = 1, Object.defineProperty(Ne, "__esModule", { value: !0 }), Ne.callRef = Ne.getValidate = void 0;
  const e = /* @__PURE__ */ $n(), t = /* @__PURE__ */ ke(), n = /* @__PURE__ */ W(), o = /* @__PURE__ */ Ce(), c = /* @__PURE__ */ bn(), r = /* @__PURE__ */ Q(), s = {
    keyword: "$ref",
    schemaType: "string",
    code(g) {
      const { gen: h, schema: w, it: $ } = g, { baseId: y, schemaEnv: _, validateName: S, opts: p, self: m } = $, { root: u } = _;
      if ((w === "#" || w === "#/") && y === u.baseId)
        return k();
      const b = c.resolveRef.call(m, u, y, w);
      if (b === void 0)
        throw new e.default($.opts.uriResolver, y, w);
      if (b instanceof c.SchemaEnv)
        return a(b);
      return l(b);
      function k() {
        if (_ === u)
          return d(g, S, _, _.$async);
        const f = h.scopeValue("root", { ref: u });
        return d(g, (0, n._)`${f}.validate`, u, u.$async);
      }
      function a(f) {
        const E = i(g, f);
        d(g, E, f, f.$async);
      }
      function l(f) {
        const E = h.scopeValue("schema", p.code.source === !0 ? { ref: f, code: (0, n.stringify)(f) } : { ref: f }), P = h.name("valid"), A = g.subschema({
          schema: f,
          dataTypes: [],
          schemaPath: n.nil,
          topSchemaRef: E,
          errSchemaPath: w
        }, P);
        g.mergeEvaluated(A), g.ok(P);
      }
    }
  };
  function i(g, h) {
    const { gen: w } = g;
    return h.validate ? w.scopeValue("validate", { ref: h.validate }) : (0, n._)`${w.scopeValue("wrapper", { ref: h })}.validate`;
  }
  Ne.getValidate = i;
  function d(g, h, w, $) {
    const { gen: y, it: _ } = g, { allErrors: S, schemaEnv: p, opts: m } = _, u = m.passContext ? o.default.this : n.nil;
    $ ? b() : k();
    function b() {
      if (!p.$async)
        throw new Error("async schema referenced by sync schema");
      const f = y.let("valid");
      y.try(() => {
        y.code((0, n._)`await ${(0, t.callValidateCode)(g, h, u)}`), l(h), S || y.assign(f, !0);
      }, (E) => {
        y.if((0, n._)`!(${E} instanceof ${_.ValidationError})`, () => y.throw(E)), a(E), S || y.assign(f, !1);
      }), g.ok(f);
    }
    function k() {
      g.result((0, t.callValidateCode)(g, h, u), () => l(h), () => a(h));
    }
    function a(f) {
      const E = (0, n._)`${f}.errors`;
      y.assign(o.default.vErrors, (0, n._)`${o.default.vErrors} === null ? ${E} : ${o.default.vErrors}.concat(${E})`), y.assign(o.default.errors, (0, n._)`${o.default.vErrors}.length`);
    }
    function l(f) {
      var E;
      if (!_.opts.unevaluated)
        return;
      const P = (E = w?.validate) === null || E === void 0 ? void 0 : E.evaluated;
      if (_.props !== !0)
        if (P && !P.dynamicProps)
          P.props !== void 0 && (_.props = r.mergeEvaluated.props(y, P.props, _.props));
        else {
          const A = y.var("props", (0, n._)`${f}.evaluated.props`);
          _.props = r.mergeEvaluated.props(y, A, _.props, n.Name);
        }
      if (_.items !== !0)
        if (P && !P.dynamicItems)
          P.items !== void 0 && (_.items = r.mergeEvaluated.items(y, P.items, _.items));
        else {
          const A = y.var("items", (0, n._)`${f}.evaluated.items`);
          _.items = r.mergeEvaluated.items(y, A, _.items, n.Name);
        }
    }
  }
  return Ne.callRef = d, Ne.default = s, Ne;
}
var Or;
function Ui() {
  if (Or) return yt;
  Or = 1, Object.defineProperty(yt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Li(), t = /* @__PURE__ */ Un(), n = [
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
var $t = {}, bt = {}, Tr;
function Ki() {
  if (Tr) return bt;
  Tr = 1, Object.defineProperty(bt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ W(), t = e.operators, n = {
    maximum: { okStr: "<=", ok: t.LTE, fail: t.GT },
    minimum: { okStr: ">=", ok: t.GTE, fail: t.LT },
    exclusiveMaximum: { okStr: "<", ok: t.LT, fail: t.GTE },
    exclusiveMinimum: { okStr: ">", ok: t.GT, fail: t.LTE }
  }, o = {
    message: ({ keyword: r, schemaCode: s }) => (0, e.str)`must be ${n[r].okStr} ${s}`,
    params: ({ keyword: r, schemaCode: s }) => (0, e._)`{comparison: ${n[r].okStr}, limit: ${s}}`
  }, c = {
    keyword: Object.keys(n),
    type: "number",
    schemaType: "number",
    $data: !0,
    error: o,
    code(r) {
      const { keyword: s, data: i, schemaCode: d } = r;
      r.fail$data((0, e._)`${i} ${n[s].fail} ${d} || isNaN(${i})`);
    }
  };
  return bt.default = c, bt;
}
var _t = {}, zr;
function Gi() {
  if (zr) return _t;
  zr = 1, Object.defineProperty(_t, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ W(), n = {
    keyword: "multipleOf",
    type: "number",
    schemaType: "number",
    $data: !0,
    error: {
      message: ({ schemaCode: o }) => (0, e.str)`must be multiple of ${o}`,
      params: ({ schemaCode: o }) => (0, e._)`{multipleOf: ${o}}`
    },
    code(o) {
      const { gen: c, data: r, schemaCode: s, it: i } = o, d = i.opts.multipleOfPrecision, g = c.let("res"), h = d ? (0, e._)`Math.abs(Math.round(${g}) - ${g}) > 1e-${d}` : (0, e._)`${g} !== parseInt(${g})`;
      o.fail$data((0, e._)`(${s} === 0 || (${g} = ${r}/${s}, ${h}))`);
    }
  };
  return _t.default = n, _t;
}
var wt = {}, St = {}, Ir;
function Hi() {
  if (Ir) return St;
  Ir = 1, Object.defineProperty(St, "__esModule", { value: !0 });
  function e(t) {
    const n = t.length;
    let o = 0, c = 0, r;
    for (; c < n; )
      o++, r = t.charCodeAt(c++), r >= 55296 && r <= 56319 && c < n && (r = t.charCodeAt(c), (r & 64512) === 56320 && c++);
    return o;
  }
  return St.default = e, e.code = 'require("ajv/dist/runtime/ucs2length").default', St;
}
var Dr;
function Ji() {
  if (Dr) return wt;
  Dr = 1, Object.defineProperty(wt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ W(), t = /* @__PURE__ */ Q(), n = /* @__PURE__ */ Hi(), c = {
    keyword: ["maxLength", "minLength"],
    type: "string",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: r, schemaCode: s }) {
        const i = r === "maxLength" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${i} than ${s} characters`;
      },
      params: ({ schemaCode: r }) => (0, e._)`{limit: ${r}}`
    },
    code(r) {
      const { keyword: s, data: i, schemaCode: d, it: g } = r, h = s === "maxLength" ? e.operators.GT : e.operators.LT, w = g.opts.unicode === !1 ? (0, e._)`${i}.length` : (0, e._)`${(0, t.useFunc)(r.gen, n.default)}(${i})`;
      r.fail$data((0, e._)`${w} ${h} ${d}`);
    }
  };
  return wt.default = c, wt;
}
var Ct = {}, qr;
function Wi() {
  if (qr) return Ct;
  qr = 1, Object.defineProperty(Ct, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ke(), t = /* @__PURE__ */ Q(), n = /* @__PURE__ */ W(), c = {
    keyword: "pattern",
    type: "string",
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: r }) => (0, n.str)`must match pattern "${r}"`,
      params: ({ schemaCode: r }) => (0, n._)`{pattern: ${r}}`
    },
    code(r) {
      const { gen: s, data: i, $data: d, schema: g, schemaCode: h, it: w } = r, $ = w.opts.unicodeRegExp ? "u" : "";
      if (d) {
        const { regExp: y } = w.opts.code, _ = y.code === "new RegExp" ? (0, n._)`new RegExp` : (0, t.useFunc)(s, y), S = s.let("valid");
        s.try(() => s.assign(S, (0, n._)`${_}(${h}, ${$}).test(${i})`), () => s.assign(S, !1)), r.fail$data((0, n._)`!${S}`);
      } else {
        const y = (0, e.usePattern)(r, g);
        r.fail$data((0, n._)`!${y}.test(${i})`);
      }
    }
  };
  return Ct.default = c, Ct;
}
var kt = {}, Vr;
function Yi() {
  if (Vr) return kt;
  Vr = 1, Object.defineProperty(kt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ W(), n = {
    keyword: ["maxProperties", "minProperties"],
    type: "object",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: o, schemaCode: c }) {
        const r = o === "maxProperties" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${r} than ${c} properties`;
      },
      params: ({ schemaCode: o }) => (0, e._)`{limit: ${o}}`
    },
    code(o) {
      const { keyword: c, data: r, schemaCode: s } = o, i = c === "maxProperties" ? e.operators.GT : e.operators.LT;
      o.fail$data((0, e._)`Object.keys(${r}).length ${i} ${s}`);
    }
  };
  return kt.default = n, kt;
}
var Et = {}, Br;
function Xi() {
  if (Br) return Et;
  Br = 1, Object.defineProperty(Et, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ke(), t = /* @__PURE__ */ W(), n = /* @__PURE__ */ Q(), c = {
    keyword: "required",
    type: "object",
    schemaType: "array",
    $data: !0,
    error: {
      message: ({ params: { missingProperty: r } }) => (0, t.str)`must have required property '${r}'`,
      params: ({ params: { missingProperty: r } }) => (0, t._)`{missingProperty: ${r}}`
    },
    code(r) {
      const { gen: s, schema: i, schemaCode: d, data: g, $data: h, it: w } = r, { opts: $ } = w;
      if (!h && i.length === 0)
        return;
      const y = i.length >= $.loopRequired;
      if (w.allErrors ? _() : S(), $.strictRequired) {
        const u = r.parentSchema.properties, { definedProperties: b } = r.it;
        for (const k of i)
          if (u?.[k] === void 0 && !b.has(k)) {
            const a = w.schemaEnv.baseId + w.errSchemaPath, l = `required property "${k}" is not defined at "${a}" (strictRequired)`;
            (0, n.checkStrictMode)(w, l, w.opts.strictRequired);
          }
      }
      function _() {
        if (y || h)
          r.block$data(t.nil, p);
        else
          for (const u of i)
            (0, e.checkReportMissingProp)(r, u);
      }
      function S() {
        const u = s.let("missing");
        if (y || h) {
          const b = s.let("valid", !0);
          r.block$data(b, () => m(u, b)), r.ok(b);
        } else
          s.if((0, e.checkMissingProp)(r, i, u)), (0, e.reportMissingProp)(r, u), s.else();
      }
      function p() {
        s.forOf("prop", d, (u) => {
          r.setParams({ missingProperty: u }), s.if((0, e.noPropertyInData)(s, g, u, $.ownProperties), () => r.error());
        });
      }
      function m(u, b) {
        r.setParams({ missingProperty: u }), s.forOf(u, d, () => {
          s.assign(b, (0, e.propertyInData)(s, g, u, $.ownProperties)), s.if((0, t.not)(b), () => {
            r.error(), s.break();
          });
        }, t.nil);
      }
    }
  };
  return Et.default = c, Et;
}
var Pt = {}, Lr;
function Zi() {
  if (Lr) return Pt;
  Lr = 1, Object.defineProperty(Pt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ W(), n = {
    keyword: ["maxItems", "minItems"],
    type: "array",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: o, schemaCode: c }) {
        const r = o === "maxItems" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${r} than ${c} items`;
      },
      params: ({ schemaCode: o }) => (0, e._)`{limit: ${o}}`
    },
    code(o) {
      const { keyword: c, data: r, schemaCode: s } = o, i = c === "maxItems" ? e.operators.GT : e.operators.LT;
      o.fail$data((0, e._)`${r}.length ${i} ${s}`);
    }
  };
  return Pt.default = n, Pt;
}
var xt = {}, Rt = {}, Ur;
function Kn() {
  if (Ur) return Rt;
  Ur = 1, Object.defineProperty(Rt, "__esModule", { value: !0 });
  const e = Jo();
  return e.code = 'require("ajv/dist/runtime/equal").default', Rt.default = e, Rt;
}
var Kr;
function Qi() {
  if (Kr) return xt;
  Kr = 1, Object.defineProperty(xt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ pn(), t = /* @__PURE__ */ W(), n = /* @__PURE__ */ Q(), o = /* @__PURE__ */ Kn(), r = {
    keyword: "uniqueItems",
    type: "array",
    schemaType: "boolean",
    $data: !0,
    error: {
      message: ({ params: { i: s, j: i } }) => (0, t.str)`must NOT have duplicate items (items ## ${i} and ${s} are identical)`,
      params: ({ params: { i: s, j: i } }) => (0, t._)`{i: ${s}, j: ${i}}`
    },
    code(s) {
      const { gen: i, data: d, $data: g, schema: h, parentSchema: w, schemaCode: $, it: y } = s;
      if (!g && !h)
        return;
      const _ = i.let("valid"), S = w.items ? (0, e.getSchemaTypes)(w.items) : [];
      s.block$data(_, p, (0, t._)`${$} === false`), s.ok(_);
      function p() {
        const k = i.let("i", (0, t._)`${d}.length`), a = i.let("j");
        s.setParams({ i: k, j: a }), i.assign(_, !0), i.if((0, t._)`${k} > 1`, () => (m() ? u : b)(k, a));
      }
      function m() {
        return S.length > 0 && !S.some((k) => k === "object" || k === "array");
      }
      function u(k, a) {
        const l = i.name("item"), f = (0, e.checkDataTypes)(S, l, y.opts.strictNumbers, e.DataType.Wrong), E = i.const("indices", (0, t._)`{}`);
        i.for((0, t._)`;${k}--;`, () => {
          i.let(l, (0, t._)`${d}[${k}]`), i.if(f, (0, t._)`continue`), S.length > 1 && i.if((0, t._)`typeof ${l} == "string"`, (0, t._)`${l} += "_"`), i.if((0, t._)`typeof ${E}[${l}] == "number"`, () => {
            i.assign(a, (0, t._)`${E}[${l}]`), s.error(), i.assign(_, !1).break();
          }).code((0, t._)`${E}[${l}] = ${k}`);
        });
      }
      function b(k, a) {
        const l = (0, n.useFunc)(i, o.default), f = i.name("outer");
        i.label(f).for((0, t._)`;${k}--;`, () => i.for((0, t._)`${a} = ${k}; ${a}--;`, () => i.if((0, t._)`${l}(${d}[${k}], ${d}[${a}])`, () => {
          s.error(), i.assign(_, !1).break(f);
        })));
      }
    }
  };
  return xt.default = r, xt;
}
var At = {}, Gr;
function es() {
  if (Gr) return At;
  Gr = 1, Object.defineProperty(At, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ W(), t = /* @__PURE__ */ Q(), n = /* @__PURE__ */ Kn(), c = {
    keyword: "const",
    $data: !0,
    error: {
      message: "must be equal to constant",
      params: ({ schemaCode: r }) => (0, e._)`{allowedValue: ${r}}`
    },
    code(r) {
      const { gen: s, data: i, $data: d, schemaCode: g, schema: h } = r;
      d || h && typeof h == "object" ? r.fail$data((0, e._)`!${(0, t.useFunc)(s, n.default)}(${i}, ${g})`) : r.fail((0, e._)`${h} !== ${i}`);
    }
  };
  return At.default = c, At;
}
var Ft = {}, Hr;
function ts() {
  if (Hr) return Ft;
  Hr = 1, Object.defineProperty(Ft, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ W(), t = /* @__PURE__ */ Q(), n = /* @__PURE__ */ Kn(), c = {
    keyword: "enum",
    schemaType: "array",
    $data: !0,
    error: {
      message: "must be equal to one of the allowed values",
      params: ({ schemaCode: r }) => (0, e._)`{allowedValues: ${r}}`
    },
    code(r) {
      const { gen: s, data: i, $data: d, schema: g, schemaCode: h, it: w } = r;
      if (!d && g.length === 0)
        throw new Error("enum must have non-empty array");
      const $ = g.length >= w.opts.loopEnum;
      let y;
      const _ = () => y ?? (y = (0, t.useFunc)(s, n.default));
      let S;
      if ($ || d)
        S = s.let("valid"), r.block$data(S, p);
      else {
        if (!Array.isArray(g))
          throw new Error("ajv implementation error");
        const u = s.const("vSchema", h);
        S = (0, e.or)(...g.map((b, k) => m(u, k)));
      }
      r.pass(S);
      function p() {
        s.assign(S, !1), s.forOf("v", h, (u) => s.if((0, e._)`${_()}(${i}, ${u})`, () => s.assign(S, !0).break()));
      }
      function m(u, b) {
        const k = g[b];
        return typeof k == "object" && k !== null ? (0, e._)`${_()}(${i}, ${u}[${b}])` : (0, e._)`${i} === ${k}`;
      }
    }
  };
  return Ft.default = c, Ft;
}
var Jr;
function ns() {
  if (Jr) return $t;
  Jr = 1, Object.defineProperty($t, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ki(), t = /* @__PURE__ */ Gi(), n = /* @__PURE__ */ Ji(), o = /* @__PURE__ */ Wi(), c = /* @__PURE__ */ Yi(), r = /* @__PURE__ */ Xi(), s = /* @__PURE__ */ Zi(), i = /* @__PURE__ */ Qi(), d = /* @__PURE__ */ es(), g = /* @__PURE__ */ ts(), h = [
    // number
    e.default,
    t.default,
    // string
    n.default,
    o.default,
    // object
    c.default,
    r.default,
    // array
    s.default,
    i.default,
    // any
    { keyword: "type", schemaType: ["string", "array"] },
    { keyword: "nullable", schemaType: "boolean" },
    d.default,
    g.default
  ];
  return $t.default = h, $t;
}
var Nt = {}, Le = {}, Wr;
function Yo() {
  if (Wr) return Le;
  Wr = 1, Object.defineProperty(Le, "__esModule", { value: !0 }), Le.validateAdditionalItems = void 0;
  const e = /* @__PURE__ */ W(), t = /* @__PURE__ */ Q(), o = {
    keyword: "additionalItems",
    type: "array",
    schemaType: ["boolean", "object"],
    before: "uniqueItems",
    error: {
      message: ({ params: { len: r } }) => (0, e.str)`must NOT have more than ${r} items`,
      params: ({ params: { len: r } }) => (0, e._)`{limit: ${r}}`
    },
    code(r) {
      const { parentSchema: s, it: i } = r, { items: d } = s;
      if (!Array.isArray(d)) {
        (0, t.checkStrictMode)(i, '"additionalItems" is ignored when "items" is not an array of schemas');
        return;
      }
      c(r, d);
    }
  };
  function c(r, s) {
    const { gen: i, schema: d, data: g, keyword: h, it: w } = r;
    w.items = !0;
    const $ = i.const("len", (0, e._)`${g}.length`);
    if (d === !1)
      r.setParams({ len: s.length }), r.pass((0, e._)`${$} <= ${s.length}`);
    else if (typeof d == "object" && !(0, t.alwaysValidSchema)(w, d)) {
      const _ = i.var("valid", (0, e._)`${$} <= ${s.length}`);
      i.if((0, e.not)(_), () => y(_)), r.ok(_);
    }
    function y(_) {
      i.forRange("i", s.length, $, (S) => {
        r.subschema({ keyword: h, dataProp: S, dataPropType: t.Type.Num }, _), w.allErrors || i.if((0, e.not)(_), () => i.break());
      });
    }
  }
  return Le.validateAdditionalItems = c, Le.default = o, Le;
}
var Mt = {}, Ue = {}, Yr;
function Xo() {
  if (Yr) return Ue;
  Yr = 1, Object.defineProperty(Ue, "__esModule", { value: !0 }), Ue.validateTuple = void 0;
  const e = /* @__PURE__ */ W(), t = /* @__PURE__ */ Q(), n = /* @__PURE__ */ ke(), o = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "array", "boolean"],
    before: "uniqueItems",
    code(r) {
      const { schema: s, it: i } = r;
      if (Array.isArray(s))
        return c(r, "additionalItems", s);
      i.items = !0, !(0, t.alwaysValidSchema)(i, s) && r.ok((0, n.validateArray)(r));
    }
  };
  function c(r, s, i = r.schema) {
    const { gen: d, parentSchema: g, data: h, keyword: w, it: $ } = r;
    S(g), $.opts.unevaluated && i.length && $.items !== !0 && ($.items = t.mergeEvaluated.items(d, i.length, $.items));
    const y = d.name("valid"), _ = d.const("len", (0, e._)`${h}.length`);
    i.forEach((p, m) => {
      (0, t.alwaysValidSchema)($, p) || (d.if((0, e._)`${_} > ${m}`, () => r.subschema({
        keyword: w,
        schemaProp: m,
        dataProp: m
      }, y)), r.ok(y));
    });
    function S(p) {
      const { opts: m, errSchemaPath: u } = $, b = i.length, k = b === p.minItems && (b === p.maxItems || p[s] === !1);
      if (m.strictTuples && !k) {
        const a = `"${w}" is ${b}-tuple, but minItems or maxItems/${s} are not specified or different at path "${u}"`;
        (0, t.checkStrictMode)($, a, m.strictTuples);
      }
    }
  }
  return Ue.validateTuple = c, Ue.default = o, Ue;
}
var Xr;
function rs() {
  if (Xr) return Mt;
  Xr = 1, Object.defineProperty(Mt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Xo(), t = {
    keyword: "prefixItems",
    type: "array",
    schemaType: ["array"],
    before: "uniqueItems",
    code: (n) => (0, e.validateTuple)(n, "items")
  };
  return Mt.default = t, Mt;
}
var jt = {}, Zr;
function os() {
  if (Zr) return jt;
  Zr = 1, Object.defineProperty(jt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ W(), t = /* @__PURE__ */ Q(), n = /* @__PURE__ */ ke(), o = /* @__PURE__ */ Yo(), r = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    error: {
      message: ({ params: { len: s } }) => (0, e.str)`must NOT have more than ${s} items`,
      params: ({ params: { len: s } }) => (0, e._)`{limit: ${s}}`
    },
    code(s) {
      const { schema: i, parentSchema: d, it: g } = s, { prefixItems: h } = d;
      g.items = !0, !(0, t.alwaysValidSchema)(g, i) && (h ? (0, o.validateAdditionalItems)(s, h) : s.ok((0, n.validateArray)(s)));
    }
  };
  return jt.default = r, jt;
}
var Ot = {}, Qr;
function is() {
  if (Qr) return Ot;
  Qr = 1, Object.defineProperty(Ot, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ W(), t = /* @__PURE__ */ Q(), o = {
    keyword: "contains",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    trackErrors: !0,
    error: {
      message: ({ params: { min: c, max: r } }) => r === void 0 ? (0, e.str)`must contain at least ${c} valid item(s)` : (0, e.str)`must contain at least ${c} and no more than ${r} valid item(s)`,
      params: ({ params: { min: c, max: r } }) => r === void 0 ? (0, e._)`{minContains: ${c}}` : (0, e._)`{minContains: ${c}, maxContains: ${r}}`
    },
    code(c) {
      const { gen: r, schema: s, parentSchema: i, data: d, it: g } = c;
      let h, w;
      const { minContains: $, maxContains: y } = i;
      g.opts.next ? (h = $ === void 0 ? 1 : $, w = y) : h = 1;
      const _ = r.const("len", (0, e._)`${d}.length`);
      if (c.setParams({ min: h, max: w }), w === void 0 && h === 0) {
        (0, t.checkStrictMode)(g, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
        return;
      }
      if (w !== void 0 && h > w) {
        (0, t.checkStrictMode)(g, '"minContains" > "maxContains" is always invalid'), c.fail();
        return;
      }
      if ((0, t.alwaysValidSchema)(g, s)) {
        let b = (0, e._)`${_} >= ${h}`;
        w !== void 0 && (b = (0, e._)`${b} && ${_} <= ${w}`), c.pass(b);
        return;
      }
      g.items = !0;
      const S = r.name("valid");
      w === void 0 && h === 1 ? m(S, () => r.if(S, () => r.break())) : h === 0 ? (r.let(S, !0), w !== void 0 && r.if((0, e._)`${d}.length > 0`, p)) : (r.let(S, !1), p()), c.result(S, () => c.reset());
      function p() {
        const b = r.name("_valid"), k = r.let("count", 0);
        m(b, () => r.if(b, () => u(k)));
      }
      function m(b, k) {
        r.forRange("i", 0, _, (a) => {
          c.subschema({
            keyword: "contains",
            dataProp: a,
            dataPropType: t.Type.Num,
            compositeRule: !0
          }, b), k();
        });
      }
      function u(b) {
        r.code((0, e._)`${b}++`), w === void 0 ? r.if((0, e._)`${b} >= ${h}`, () => r.assign(S, !0).break()) : (r.if((0, e._)`${b} > ${w}`, () => r.assign(S, !1).break()), h === 1 ? r.assign(S, !0) : r.if((0, e._)`${b} >= ${h}`, () => r.assign(S, !0)));
      }
    }
  };
  return Ot.default = o, Ot;
}
var jn = {}, eo;
function Gn() {
  return eo || (eo = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
    const t = /* @__PURE__ */ W(), n = /* @__PURE__ */ Q(), o = /* @__PURE__ */ ke();
    e.error = {
      message: ({ params: { property: d, depsCount: g, deps: h } }) => {
        const w = g === 1 ? "property" : "properties";
        return (0, t.str)`must have ${w} ${h} when property ${d} is present`;
      },
      params: ({ params: { property: d, depsCount: g, deps: h, missingProperty: w } }) => (0, t._)`{property: ${d},
    missingProperty: ${w},
    depsCount: ${g},
    deps: ${h}}`
      // TODO change to reference
    };
    const c = {
      keyword: "dependencies",
      type: "object",
      schemaType: "object",
      error: e.error,
      code(d) {
        const [g, h] = r(d);
        s(d, g), i(d, h);
      }
    };
    function r({ schema: d }) {
      const g = {}, h = {};
      for (const w in d) {
        if (w === "__proto__")
          continue;
        const $ = Array.isArray(d[w]) ? g : h;
        $[w] = d[w];
      }
      return [g, h];
    }
    function s(d, g = d.schema) {
      const { gen: h, data: w, it: $ } = d;
      if (Object.keys(g).length === 0)
        return;
      const y = h.let("missing");
      for (const _ in g) {
        const S = g[_];
        if (S.length === 0)
          continue;
        const p = (0, o.propertyInData)(h, w, _, $.opts.ownProperties);
        d.setParams({
          property: _,
          depsCount: S.length,
          deps: S.join(", ")
        }), $.allErrors ? h.if(p, () => {
          for (const m of S)
            (0, o.checkReportMissingProp)(d, m);
        }) : (h.if((0, t._)`${p} && (${(0, o.checkMissingProp)(d, S, y)})`), (0, o.reportMissingProp)(d, y), h.else());
      }
    }
    e.validatePropertyDeps = s;
    function i(d, g = d.schema) {
      const { gen: h, data: w, keyword: $, it: y } = d, _ = h.name("valid");
      for (const S in g)
        (0, n.alwaysValidSchema)(y, g[S]) || (h.if(
          (0, o.propertyInData)(h, w, S, y.opts.ownProperties),
          () => {
            const p = d.subschema({ keyword: $, schemaProp: S }, _);
            d.mergeValidEvaluated(p, _);
          },
          () => h.var(_, !0)
          // TODO var
        ), d.ok(_));
    }
    e.validateSchemaDeps = i, e.default = c;
  })(jn)), jn;
}
var Tt = {}, to;
function ss() {
  if (to) return Tt;
  to = 1, Object.defineProperty(Tt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ W(), t = /* @__PURE__ */ Q(), o = {
    keyword: "propertyNames",
    type: "object",
    schemaType: ["object", "boolean"],
    error: {
      message: "property name must be valid",
      params: ({ params: c }) => (0, e._)`{propertyName: ${c.propertyName}}`
    },
    code(c) {
      const { gen: r, schema: s, data: i, it: d } = c;
      if ((0, t.alwaysValidSchema)(d, s))
        return;
      const g = r.name("valid");
      r.forIn("key", i, (h) => {
        c.setParams({ propertyName: h }), c.subschema({
          keyword: "propertyNames",
          data: h,
          dataTypes: ["string"],
          propertyName: h,
          compositeRule: !0
        }, g), r.if((0, e.not)(g), () => {
          c.error(!0), d.allErrors || r.break();
        });
      }), c.ok(g);
    }
  };
  return Tt.default = o, Tt;
}
var zt = {}, no;
function Zo() {
  if (no) return zt;
  no = 1, Object.defineProperty(zt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ke(), t = /* @__PURE__ */ W(), n = /* @__PURE__ */ Ce(), o = /* @__PURE__ */ Q(), r = {
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
      const { gen: i, schema: d, parentSchema: g, data: h, errsCount: w, it: $ } = s;
      if (!w)
        throw new Error("ajv implementation error");
      const { allErrors: y, opts: _ } = $;
      if ($.props = !0, _.removeAdditional !== "all" && (0, o.alwaysValidSchema)($, d))
        return;
      const S = (0, e.allSchemaProperties)(g.properties), p = (0, e.allSchemaProperties)(g.patternProperties);
      m(), s.ok((0, t._)`${w} === ${n.default.errors}`);
      function m() {
        i.forIn("key", h, (l) => {
          !S.length && !p.length ? k(l) : i.if(u(l), () => k(l));
        });
      }
      function u(l) {
        let f;
        if (S.length > 8) {
          const E = (0, o.schemaRefOrVal)($, g.properties, "properties");
          f = (0, e.isOwnProperty)(i, E, l);
        } else S.length ? f = (0, t.or)(...S.map((E) => (0, t._)`${l} === ${E}`)) : f = t.nil;
        return p.length && (f = (0, t.or)(f, ...p.map((E) => (0, t._)`${(0, e.usePattern)(s, E)}.test(${l})`))), (0, t.not)(f);
      }
      function b(l) {
        i.code((0, t._)`delete ${h}[${l}]`);
      }
      function k(l) {
        if (_.removeAdditional === "all" || _.removeAdditional && d === !1) {
          b(l);
          return;
        }
        if (d === !1) {
          s.setParams({ additionalProperty: l }), s.error(), y || i.break();
          return;
        }
        if (typeof d == "object" && !(0, o.alwaysValidSchema)($, d)) {
          const f = i.name("valid");
          _.removeAdditional === "failing" ? (a(l, f, !1), i.if((0, t.not)(f), () => {
            s.reset(), b(l);
          })) : (a(l, f), y || i.if((0, t.not)(f), () => i.break()));
        }
      }
      function a(l, f, E) {
        const P = {
          keyword: "additionalProperties",
          dataProp: l,
          dataPropType: o.Type.Str
        };
        E === !1 && Object.assign(P, {
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }), s.subschema(P, f);
      }
    }
  };
  return zt.default = r, zt;
}
var It = {}, ro;
function as() {
  if (ro) return It;
  ro = 1, Object.defineProperty(It, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ vn(), t = /* @__PURE__ */ ke(), n = /* @__PURE__ */ Q(), o = /* @__PURE__ */ Zo(), c = {
    keyword: "properties",
    type: "object",
    schemaType: "object",
    code(r) {
      const { gen: s, schema: i, parentSchema: d, data: g, it: h } = r;
      h.opts.removeAdditional === "all" && d.additionalProperties === void 0 && o.default.code(new e.KeywordCxt(h, o.default, "additionalProperties"));
      const w = (0, t.allSchemaProperties)(i);
      for (const p of w)
        h.definedProperties.add(p);
      h.opts.unevaluated && w.length && h.props !== !0 && (h.props = n.mergeEvaluated.props(s, (0, n.toHash)(w), h.props));
      const $ = w.filter((p) => !(0, n.alwaysValidSchema)(h, i[p]));
      if ($.length === 0)
        return;
      const y = s.name("valid");
      for (const p of $)
        _(p) ? S(p) : (s.if((0, t.propertyInData)(s, g, p, h.opts.ownProperties)), S(p), h.allErrors || s.else().var(y, !0), s.endIf()), r.it.definedProperties.add(p), r.ok(y);
      function _(p) {
        return h.opts.useDefaults && !h.compositeRule && i[p].default !== void 0;
      }
      function S(p) {
        r.subschema({
          keyword: "properties",
          schemaProp: p,
          dataProp: p
        }, y);
      }
    }
  };
  return It.default = c, It;
}
var Dt = {}, oo;
function cs() {
  if (oo) return Dt;
  oo = 1, Object.defineProperty(Dt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ke(), t = /* @__PURE__ */ W(), n = /* @__PURE__ */ Q(), o = /* @__PURE__ */ Q(), c = {
    keyword: "patternProperties",
    type: "object",
    schemaType: "object",
    code(r) {
      const { gen: s, schema: i, data: d, parentSchema: g, it: h } = r, { opts: w } = h, $ = (0, e.allSchemaProperties)(i), y = $.filter((k) => (0, n.alwaysValidSchema)(h, i[k]));
      if ($.length === 0 || y.length === $.length && (!h.opts.unevaluated || h.props === !0))
        return;
      const _ = w.strictSchema && !w.allowMatchingProperties && g.properties, S = s.name("valid");
      h.props !== !0 && !(h.props instanceof t.Name) && (h.props = (0, o.evaluatedPropsToName)(s, h.props));
      const { props: p } = h;
      m();
      function m() {
        for (const k of $)
          _ && u(k), h.allErrors ? b(k) : (s.var(S, !0), b(k), s.if(S));
      }
      function u(k) {
        for (const a in _)
          new RegExp(k).test(a) && (0, n.checkStrictMode)(h, `property ${a} matches pattern ${k} (use allowMatchingProperties)`);
      }
      function b(k) {
        s.forIn("key", d, (a) => {
          s.if((0, t._)`${(0, e.usePattern)(r, k)}.test(${a})`, () => {
            const l = y.includes(k);
            l || r.subschema({
              keyword: "patternProperties",
              schemaProp: k,
              dataProp: a,
              dataPropType: o.Type.Str
            }, S), h.opts.unevaluated && p !== !0 ? s.assign((0, t._)`${p}[${a}]`, !0) : !l && !h.allErrors && s.if((0, t.not)(S), () => s.break());
          });
        });
      }
    }
  };
  return Dt.default = c, Dt;
}
var qt = {}, io;
function ls() {
  if (io) return qt;
  io = 1, Object.defineProperty(qt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Q(), t = {
    keyword: "not",
    schemaType: ["object", "boolean"],
    trackErrors: !0,
    code(n) {
      const { gen: o, schema: c, it: r } = n;
      if ((0, e.alwaysValidSchema)(r, c)) {
        n.fail();
        return;
      }
      const s = o.name("valid");
      n.subschema({
        keyword: "not",
        compositeRule: !0,
        createErrors: !1,
        allErrors: !1
      }, s), n.failResult(s, () => n.reset(), () => n.error());
    },
    error: { message: "must NOT be valid" }
  };
  return qt.default = t, qt;
}
var Vt = {}, so;
function ds() {
  if (so) return Vt;
  so = 1, Object.defineProperty(Vt, "__esModule", { value: !0 });
  const t = {
    keyword: "anyOf",
    schemaType: "array",
    trackErrors: !0,
    code: (/* @__PURE__ */ ke()).validateUnion,
    error: { message: "must match a schema in anyOf" }
  };
  return Vt.default = t, Vt;
}
var Bt = {}, ao;
function us() {
  if (ao) return Bt;
  ao = 1, Object.defineProperty(Bt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ W(), t = /* @__PURE__ */ Q(), o = {
    keyword: "oneOf",
    schemaType: "array",
    trackErrors: !0,
    error: {
      message: "must match exactly one schema in oneOf",
      params: ({ params: c }) => (0, e._)`{passingSchemas: ${c.passing}}`
    },
    code(c) {
      const { gen: r, schema: s, parentSchema: i, it: d } = c;
      if (!Array.isArray(s))
        throw new Error("ajv implementation error");
      if (d.opts.discriminator && i.discriminator)
        return;
      const g = s, h = r.let("valid", !1), w = r.let("passing", null), $ = r.name("_valid");
      c.setParams({ passing: w }), r.block(y), c.result(h, () => c.reset(), () => c.error(!0));
      function y() {
        g.forEach((_, S) => {
          let p;
          (0, t.alwaysValidSchema)(d, _) ? r.var($, !0) : p = c.subschema({
            keyword: "oneOf",
            schemaProp: S,
            compositeRule: !0
          }, $), S > 0 && r.if((0, e._)`${$} && ${h}`).assign(h, !1).assign(w, (0, e._)`[${w}, ${S}]`).else(), r.if($, () => {
            r.assign(h, !0), r.assign(w, S), p && c.mergeEvaluated(p, e.Name);
          });
        });
      }
    }
  };
  return Bt.default = o, Bt;
}
var Lt = {}, co;
function fs() {
  if (co) return Lt;
  co = 1, Object.defineProperty(Lt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Q(), t = {
    keyword: "allOf",
    schemaType: "array",
    code(n) {
      const { gen: o, schema: c, it: r } = n;
      if (!Array.isArray(c))
        throw new Error("ajv implementation error");
      const s = o.name("valid");
      c.forEach((i, d) => {
        if ((0, e.alwaysValidSchema)(r, i))
          return;
        const g = n.subschema({ keyword: "allOf", schemaProp: d }, s);
        n.ok(s), n.mergeEvaluated(g);
      });
    }
  };
  return Lt.default = t, Lt;
}
var Ut = {}, lo;
function ps() {
  if (lo) return Ut;
  lo = 1, Object.defineProperty(Ut, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ W(), t = /* @__PURE__ */ Q(), o = {
    keyword: "if",
    schemaType: ["object", "boolean"],
    trackErrors: !0,
    error: {
      message: ({ params: r }) => (0, e.str)`must match "${r.ifClause}" schema`,
      params: ({ params: r }) => (0, e._)`{failingKeyword: ${r.ifClause}}`
    },
    code(r) {
      const { gen: s, parentSchema: i, it: d } = r;
      i.then === void 0 && i.else === void 0 && (0, t.checkStrictMode)(d, '"if" without "then" and "else" is ignored');
      const g = c(d, "then"), h = c(d, "else");
      if (!g && !h)
        return;
      const w = s.let("valid", !0), $ = s.name("_valid");
      if (y(), r.reset(), g && h) {
        const S = s.let("ifClause");
        r.setParams({ ifClause: S }), s.if($, _("then", S), _("else", S));
      } else g ? s.if($, _("then")) : s.if((0, e.not)($), _("else"));
      r.pass(w, () => r.error(!0));
      function y() {
        const S = r.subschema({
          keyword: "if",
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }, $);
        r.mergeEvaluated(S);
      }
      function _(S, p) {
        return () => {
          const m = r.subschema({ keyword: S }, $);
          s.assign(w, $), r.mergeValidEvaluated(m, w), p ? s.assign(p, (0, e._)`${S}`) : r.setParams({ ifClause: S });
        };
      }
    }
  };
  function c(r, s) {
    const i = r.schema[s];
    return i !== void 0 && !(0, t.alwaysValidSchema)(r, i);
  }
  return Ut.default = o, Ut;
}
var Kt = {}, uo;
function hs() {
  if (uo) return Kt;
  uo = 1, Object.defineProperty(Kt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Q(), t = {
    keyword: ["then", "else"],
    schemaType: ["object", "boolean"],
    code({ keyword: n, parentSchema: o, it: c }) {
      o.if === void 0 && (0, e.checkStrictMode)(c, `"${n}" without "if" is ignored`);
    }
  };
  return Kt.default = t, Kt;
}
var fo;
function ms() {
  if (fo) return Nt;
  fo = 1, Object.defineProperty(Nt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Yo(), t = /* @__PURE__ */ rs(), n = /* @__PURE__ */ Xo(), o = /* @__PURE__ */ os(), c = /* @__PURE__ */ is(), r = /* @__PURE__ */ Gn(), s = /* @__PURE__ */ ss(), i = /* @__PURE__ */ Zo(), d = /* @__PURE__ */ as(), g = /* @__PURE__ */ cs(), h = /* @__PURE__ */ ls(), w = /* @__PURE__ */ ds(), $ = /* @__PURE__ */ us(), y = /* @__PURE__ */ fs(), _ = /* @__PURE__ */ ps(), S = /* @__PURE__ */ hs();
  function p(m = !1) {
    const u = [
      // any
      h.default,
      w.default,
      $.default,
      y.default,
      _.default,
      S.default,
      // object
      s.default,
      i.default,
      r.default,
      d.default,
      g.default
    ];
    return m ? u.push(t.default, o.default) : u.push(e.default, n.default), u.push(c.default), u;
  }
  return Nt.default = p, Nt;
}
var Gt = {}, Ke = {}, po;
function Qo() {
  if (po) return Ke;
  po = 1, Object.defineProperty(Ke, "__esModule", { value: !0 }), Ke.dynamicAnchor = void 0;
  const e = /* @__PURE__ */ W(), t = /* @__PURE__ */ Ce(), n = /* @__PURE__ */ bn(), o = /* @__PURE__ */ Un(), c = {
    keyword: "$dynamicAnchor",
    schemaType: "string",
    code: (i) => r(i, i.schema)
  };
  function r(i, d) {
    const { gen: g, it: h } = i;
    h.schemaEnv.root.dynamicAnchors[d] = !0;
    const w = (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(d)}`, $ = h.errSchemaPath === "#" ? h.validateName : s(i);
    g.if((0, e._)`!${w}`, () => g.assign(w, $));
  }
  Ke.dynamicAnchor = r;
  function s(i) {
    const { schemaEnv: d, schema: g, self: h } = i.it, { root: w, baseId: $, localRefs: y, meta: _ } = d.root, { schemaId: S } = h.opts, p = new n.SchemaEnv({ schema: g, schemaId: S, root: w, baseId: $, localRefs: y, meta: _ });
    return n.compileSchema.call(h, p), (0, o.getValidate)(i, p);
  }
  return Ke.default = c, Ke;
}
var Ge = {}, ho;
function ei() {
  if (ho) return Ge;
  ho = 1, Object.defineProperty(Ge, "__esModule", { value: !0 }), Ge.dynamicRef = void 0;
  const e = /* @__PURE__ */ W(), t = /* @__PURE__ */ Ce(), n = /* @__PURE__ */ Un(), o = {
    keyword: "$dynamicRef",
    schemaType: "string",
    code: (r) => c(r, r.schema)
  };
  function c(r, s) {
    const { gen: i, keyword: d, it: g } = r;
    if (s[0] !== "#")
      throw new Error(`"${d}" only supports hash fragment reference`);
    const h = s.slice(1);
    if (g.allErrors)
      w();
    else {
      const y = i.let("valid", !1);
      w(y), r.ok(y);
    }
    function w(y) {
      if (g.schemaEnv.root.dynamicAnchors[h]) {
        const _ = i.let("_v", (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(h)}`);
        i.if(_, $(_, y), $(g.validateName, y));
      } else
        $(g.validateName, y)();
    }
    function $(y, _) {
      return _ ? () => i.block(() => {
        (0, n.callRef)(r, y), i.let(_, !0);
      }) : () => (0, n.callRef)(r, y);
    }
  }
  return Ge.dynamicRef = c, Ge.default = o, Ge;
}
var Ht = {}, mo;
function gs() {
  if (mo) return Ht;
  mo = 1, Object.defineProperty(Ht, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Qo(), t = /* @__PURE__ */ Q(), n = {
    keyword: "$recursiveAnchor",
    schemaType: "boolean",
    code(o) {
      o.schema ? (0, e.dynamicAnchor)(o, "") : (0, t.checkStrictMode)(o.it, "$recursiveAnchor: false is ignored");
    }
  };
  return Ht.default = n, Ht;
}
var Jt = {}, go;
function ys() {
  if (go) return Jt;
  go = 1, Object.defineProperty(Jt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ei(), t = {
    keyword: "$recursiveRef",
    schemaType: "string",
    code: (n) => (0, e.dynamicRef)(n, n.schema)
  };
  return Jt.default = t, Jt;
}
var yo;
function vs() {
  if (yo) return Gt;
  yo = 1, Object.defineProperty(Gt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Qo(), t = /* @__PURE__ */ ei(), n = /* @__PURE__ */ gs(), o = /* @__PURE__ */ ys(), c = [e.default, t.default, n.default, o.default];
  return Gt.default = c, Gt;
}
var Wt = {}, Yt = {}, vo;
function $s() {
  if (vo) return Yt;
  vo = 1, Object.defineProperty(Yt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Gn(), t = {
    keyword: "dependentRequired",
    type: "object",
    schemaType: "object",
    error: e.error,
    code: (n) => (0, e.validatePropertyDeps)(n)
  };
  return Yt.default = t, Yt;
}
var Xt = {}, $o;
function bs() {
  if ($o) return Xt;
  $o = 1, Object.defineProperty(Xt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Gn(), t = {
    keyword: "dependentSchemas",
    type: "object",
    schemaType: "object",
    code: (n) => (0, e.validateSchemaDeps)(n)
  };
  return Xt.default = t, Xt;
}
var Zt = {}, bo;
function _s() {
  if (bo) return Zt;
  bo = 1, Object.defineProperty(Zt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Q(), t = {
    keyword: ["maxContains", "minContains"],
    type: "array",
    schemaType: "number",
    code({ keyword: n, parentSchema: o, it: c }) {
      o.contains === void 0 && (0, e.checkStrictMode)(c, `"${n}" without "contains" is ignored`);
    }
  };
  return Zt.default = t, Zt;
}
var _o;
function ws() {
  if (_o) return Wt;
  _o = 1, Object.defineProperty(Wt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ $s(), t = /* @__PURE__ */ bs(), n = /* @__PURE__ */ _s(), o = [e.default, t.default, n.default];
  return Wt.default = o, Wt;
}
var Qt = {}, en = {}, wo;
function Ss() {
  if (wo) return en;
  wo = 1, Object.defineProperty(en, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ W(), t = /* @__PURE__ */ Q(), n = /* @__PURE__ */ Ce(), c = {
    keyword: "unevaluatedProperties",
    type: "object",
    schemaType: ["boolean", "object"],
    trackErrors: !0,
    error: {
      message: "must NOT have unevaluated properties",
      params: ({ params: r }) => (0, e._)`{unevaluatedProperty: ${r.unevaluatedProperty}}`
    },
    code(r) {
      const { gen: s, schema: i, data: d, errsCount: g, it: h } = r;
      if (!g)
        throw new Error("ajv implementation error");
      const { allErrors: w, props: $ } = h;
      $ instanceof e.Name ? s.if((0, e._)`${$} !== true`, () => s.forIn("key", d, (p) => s.if(_($, p), () => y(p)))) : $ !== !0 && s.forIn("key", d, (p) => $ === void 0 ? y(p) : s.if(S($, p), () => y(p))), h.props = !0, r.ok((0, e._)`${g} === ${n.default.errors}`);
      function y(p) {
        if (i === !1) {
          r.setParams({ unevaluatedProperty: p }), r.error(), w || s.break();
          return;
        }
        if (!(0, t.alwaysValidSchema)(h, i)) {
          const m = s.name("valid");
          r.subschema({
            keyword: "unevaluatedProperties",
            dataProp: p,
            dataPropType: t.Type.Str
          }, m), w || s.if((0, e.not)(m), () => s.break());
        }
      }
      function _(p, m) {
        return (0, e._)`!${p} || !${p}[${m}]`;
      }
      function S(p, m) {
        const u = [];
        for (const b in p)
          p[b] === !0 && u.push((0, e._)`${m} !== ${b}`);
        return (0, e.and)(...u);
      }
    }
  };
  return en.default = c, en;
}
var tn = {}, So;
function Cs() {
  if (So) return tn;
  So = 1, Object.defineProperty(tn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ W(), t = /* @__PURE__ */ Q(), o = {
    keyword: "unevaluatedItems",
    type: "array",
    schemaType: ["boolean", "object"],
    error: {
      message: ({ params: { len: c } }) => (0, e.str)`must NOT have more than ${c} items`,
      params: ({ params: { len: c } }) => (0, e._)`{limit: ${c}}`
    },
    code(c) {
      const { gen: r, schema: s, data: i, it: d } = c, g = d.items || 0;
      if (g === !0)
        return;
      const h = r.const("len", (0, e._)`${i}.length`);
      if (s === !1)
        c.setParams({ len: g }), c.fail((0, e._)`${h} > ${g}`);
      else if (typeof s == "object" && !(0, t.alwaysValidSchema)(d, s)) {
        const $ = r.var("valid", (0, e._)`${h} <= ${g}`);
        r.if((0, e.not)($), () => w($, g)), c.ok($);
      }
      d.items = !0;
      function w($, y) {
        r.forRange("i", y, h, (_) => {
          c.subschema({ keyword: "unevaluatedItems", dataProp: _, dataPropType: t.Type.Num }, $), d.allErrors || r.if((0, e.not)($), () => r.break());
        });
      }
    }
  };
  return tn.default = o, tn;
}
var Co;
function ks() {
  if (Co) return Qt;
  Co = 1, Object.defineProperty(Qt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ss(), t = /* @__PURE__ */ Cs(), n = [e.default, t.default];
  return Qt.default = n, Qt;
}
var nn = {}, rn = {}, ko;
function Es() {
  if (ko) return rn;
  ko = 1, Object.defineProperty(rn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ W(), n = {
    keyword: "format",
    type: ["number", "string"],
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: o }) => (0, e.str)`must match format "${o}"`,
      params: ({ schemaCode: o }) => (0, e._)`{format: ${o}}`
    },
    code(o, c) {
      const { gen: r, data: s, $data: i, schema: d, schemaCode: g, it: h } = o, { opts: w, errSchemaPath: $, schemaEnv: y, self: _ } = h;
      if (!w.validateFormats)
        return;
      i ? S() : p();
      function S() {
        const m = r.scopeValue("formats", {
          ref: _.formats,
          code: w.code.formats
        }), u = r.const("fDef", (0, e._)`${m}[${g}]`), b = r.let("fType"), k = r.let("format");
        r.if((0, e._)`typeof ${u} == "object" && !(${u} instanceof RegExp)`, () => r.assign(b, (0, e._)`${u}.type || "string"`).assign(k, (0, e._)`${u}.validate`), () => r.assign(b, (0, e._)`"string"`).assign(k, u)), o.fail$data((0, e.or)(a(), l()));
        function a() {
          return w.strictSchema === !1 ? e.nil : (0, e._)`${g} && !${k}`;
        }
        function l() {
          const f = y.$async ? (0, e._)`(${u}.async ? await ${k}(${s}) : ${k}(${s}))` : (0, e._)`${k}(${s})`, E = (0, e._)`(typeof ${k} == "function" ? ${f} : ${k}.test(${s}))`;
          return (0, e._)`${k} && ${k} !== true && ${b} === ${c} && !${E}`;
        }
      }
      function p() {
        const m = _.formats[d];
        if (!m) {
          a();
          return;
        }
        if (m === !0)
          return;
        const [u, b, k] = l(m);
        u === c && o.pass(f());
        function a() {
          if (w.strictSchema === !1) {
            _.logger.warn(E());
            return;
          }
          throw new Error(E());
          function E() {
            return `unknown format "${d}" ignored in schema at path "${$}"`;
          }
        }
        function l(E) {
          const P = E instanceof RegExp ? (0, e.regexpCode)(E) : w.code.formats ? (0, e._)`${w.code.formats}${(0, e.getProperty)(d)}` : void 0, A = r.scopeValue("formats", { key: d, ref: E, code: P });
          return typeof E == "object" && !(E instanceof RegExp) ? [E.type || "string", E.validate, (0, e._)`${A}.validate`] : ["string", E, A];
        }
        function f() {
          if (typeof m == "object" && !(m instanceof RegExp) && m.async) {
            if (!y.$async)
              throw new Error("async format in sync schema");
            return (0, e._)`await ${k}(${s})`;
          }
          return typeof b == "function" ? (0, e._)`${k}(${s})` : (0, e._)`${k}.test(${s})`;
        }
      }
    }
  };
  return rn.default = n, rn;
}
var Eo;
function Ps() {
  if (Eo) return nn;
  Eo = 1, Object.defineProperty(nn, "__esModule", { value: !0 });
  const t = [(/* @__PURE__ */ Es()).default];
  return nn.default = t, nn;
}
var Te = {}, Po;
function xs() {
  return Po || (Po = 1, Object.defineProperty(Te, "__esModule", { value: !0 }), Te.contentVocabulary = Te.metadataVocabulary = void 0, Te.metadataVocabulary = [
    "title",
    "description",
    "default",
    "deprecated",
    "readOnly",
    "writeOnly",
    "examples"
  ], Te.contentVocabulary = [
    "contentMediaType",
    "contentEncoding",
    "contentSchema"
  ]), Te;
}
var xo;
function Rs() {
  if (xo) return gt;
  xo = 1, Object.defineProperty(gt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ui(), t = /* @__PURE__ */ ns(), n = /* @__PURE__ */ ms(), o = /* @__PURE__ */ vs(), c = /* @__PURE__ */ ws(), r = /* @__PURE__ */ ks(), s = /* @__PURE__ */ Ps(), i = /* @__PURE__ */ xs(), d = [
    o.default,
    e.default,
    t.default,
    (0, n.default)(!0),
    s.default,
    i.metadataVocabulary,
    i.contentVocabulary,
    c.default,
    r.default
  ];
  return gt.default = d, gt;
}
var on = {}, ot = {}, Ro;
function As() {
  if (Ro) return ot;
  Ro = 1, Object.defineProperty(ot, "__esModule", { value: !0 }), ot.DiscrError = void 0;
  var e;
  return (function(t) {
    t.Tag = "tag", t.Mapping = "mapping";
  })(e || (ot.DiscrError = e = {})), ot;
}
var Ao;
function Fs() {
  if (Ao) return on;
  Ao = 1, Object.defineProperty(on, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ W(), t = /* @__PURE__ */ As(), n = /* @__PURE__ */ bn(), o = /* @__PURE__ */ $n(), c = /* @__PURE__ */ Q(), s = {
    keyword: "discriminator",
    type: "object",
    schemaType: "object",
    error: {
      message: ({ params: { discrError: i, tagName: d } }) => i === t.DiscrError.Tag ? `tag "${d}" must be string` : `value of tag "${d}" must be in oneOf`,
      params: ({ params: { discrError: i, tag: d, tagName: g } }) => (0, e._)`{error: ${i}, tag: ${g}, tagValue: ${d}}`
    },
    code(i) {
      const { gen: d, data: g, schema: h, parentSchema: w, it: $ } = i, { oneOf: y } = w;
      if (!$.opts.discriminator)
        throw new Error("discriminator: requires discriminator option");
      const _ = h.propertyName;
      if (typeof _ != "string")
        throw new Error("discriminator: requires propertyName");
      if (h.mapping)
        throw new Error("discriminator: mapping is not supported");
      if (!y)
        throw new Error("discriminator: requires oneOf keyword");
      const S = d.let("valid", !1), p = d.const("tag", (0, e._)`${g}${(0, e.getProperty)(_)}`);
      d.if((0, e._)`typeof ${p} == "string"`, () => m(), () => i.error(!1, { discrError: t.DiscrError.Tag, tag: p, tagName: _ })), i.ok(S);
      function m() {
        const k = b();
        d.if(!1);
        for (const a in k)
          d.elseIf((0, e._)`${p} === ${a}`), d.assign(S, u(k[a]));
        d.else(), i.error(!1, { discrError: t.DiscrError.Mapping, tag: p, tagName: _ }), d.endIf();
      }
      function u(k) {
        const a = d.name("valid"), l = i.subschema({ keyword: "oneOf", schemaProp: k }, a);
        return i.mergeEvaluated(l, e.Name), a;
      }
      function b() {
        var k;
        const a = {}, l = E(w);
        let f = !0;
        for (let O = 0; O < y.length; O++) {
          let j = y[O];
          if (j?.$ref && !(0, c.schemaHasRulesButRef)(j, $.self.RULES)) {
            const U = j.$ref;
            if (j = n.resolveRef.call($.self, $.schemaEnv.root, $.baseId, U), j instanceof n.SchemaEnv && (j = j.schema), j === void 0)
              throw new o.default($.opts.uriResolver, $.baseId, U);
          }
          const D = (k = j?.properties) === null || k === void 0 ? void 0 : k[_];
          if (typeof D != "object")
            throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${_}"`);
          f = f && (l || E(j)), P(D, O);
        }
        if (!f)
          throw new Error(`discriminator: "${_}" must be required`);
        return a;
        function E({ required: O }) {
          return Array.isArray(O) && O.includes(_);
        }
        function P(O, j) {
          if (O.const)
            A(O.const, j);
          else if (O.enum)
            for (const D of O.enum)
              A(D, j);
          else
            throw new Error(`discriminator: "properties/${_}" must have "const" or "enum"`);
        }
        function A(O, j) {
          if (typeof O != "string" || O in a)
            throw new Error(`discriminator: "${_}" values must be unique strings`);
          a[O] = j;
        }
      }
    }
  };
  return on.default = s, on;
}
var sn = {};
const Ns = "https://json-schema.org/draft/2020-12/schema", Ms = "https://json-schema.org/draft/2020-12/schema", js = { "https://json-schema.org/draft/2020-12/vocab/core": !0, "https://json-schema.org/draft/2020-12/vocab/applicator": !0, "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0, "https://json-schema.org/draft/2020-12/vocab/validation": !0, "https://json-schema.org/draft/2020-12/vocab/meta-data": !0, "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0, "https://json-schema.org/draft/2020-12/vocab/content": !0 }, Os = "meta", Ts = "Core and Validation specifications meta-schema", zs = [{ $ref: "meta/core" }, { $ref: "meta/applicator" }, { $ref: "meta/unevaluated" }, { $ref: "meta/validation" }, { $ref: "meta/meta-data" }, { $ref: "meta/format-annotation" }, { $ref: "meta/content" }], Is = ["object", "boolean"], Ds = "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.", qs = { definitions: { $comment: '"definitions" has been replaced by "$defs".', type: "object", additionalProperties: { $dynamicRef: "#meta" }, deprecated: !0, default: {} }, dependencies: { $comment: '"dependencies" has been split and replaced by "dependentSchemas" and "dependentRequired" in order to serve their differing semantics.', type: "object", additionalProperties: { anyOf: [{ $dynamicRef: "#meta" }, { $ref: "meta/validation#/$defs/stringArray" }] }, deprecated: !0, default: {} }, $recursiveAnchor: { $comment: '"$recursiveAnchor" has been replaced by "$dynamicAnchor".', $ref: "meta/core#/$defs/anchorString", deprecated: !0 }, $recursiveRef: { $comment: '"$recursiveRef" has been replaced by "$dynamicRef".', $ref: "meta/core#/$defs/uriReferenceString", deprecated: !0 } }, Vs = {
  $schema: Ns,
  $id: Ms,
  $vocabulary: js,
  $dynamicAnchor: Os,
  title: Ts,
  allOf: zs,
  type: Is,
  $comment: Ds,
  properties: qs
}, Bs = "https://json-schema.org/draft/2020-12/schema", Ls = "https://json-schema.org/draft/2020-12/meta/applicator", Us = { "https://json-schema.org/draft/2020-12/vocab/applicator": !0 }, Ks = "meta", Gs = "Applicator vocabulary meta-schema", Hs = ["object", "boolean"], Js = { prefixItems: { $ref: "#/$defs/schemaArray" }, items: { $dynamicRef: "#meta" }, contains: { $dynamicRef: "#meta" }, additionalProperties: { $dynamicRef: "#meta" }, properties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, propertyNames: { format: "regex" }, default: {} }, dependentSchemas: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, propertyNames: { $dynamicRef: "#meta" }, if: { $dynamicRef: "#meta" }, then: { $dynamicRef: "#meta" }, else: { $dynamicRef: "#meta" }, allOf: { $ref: "#/$defs/schemaArray" }, anyOf: { $ref: "#/$defs/schemaArray" }, oneOf: { $ref: "#/$defs/schemaArray" }, not: { $dynamicRef: "#meta" } }, Ws = { schemaArray: { type: "array", minItems: 1, items: { $dynamicRef: "#meta" } } }, Ys = {
  $schema: Bs,
  $id: Ls,
  $vocabulary: Us,
  $dynamicAnchor: Ks,
  title: Gs,
  type: Hs,
  properties: Js,
  $defs: Ws
}, Xs = "https://json-schema.org/draft/2020-12/schema", Zs = "https://json-schema.org/draft/2020-12/meta/unevaluated", Qs = { "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0 }, ea = "meta", ta = "Unevaluated applicator vocabulary meta-schema", na = ["object", "boolean"], ra = { unevaluatedItems: { $dynamicRef: "#meta" }, unevaluatedProperties: { $dynamicRef: "#meta" } }, oa = {
  $schema: Xs,
  $id: Zs,
  $vocabulary: Qs,
  $dynamicAnchor: ea,
  title: ta,
  type: na,
  properties: ra
}, ia = "https://json-schema.org/draft/2020-12/schema", sa = "https://json-schema.org/draft/2020-12/meta/content", aa = { "https://json-schema.org/draft/2020-12/vocab/content": !0 }, ca = "meta", la = "Content vocabulary meta-schema", da = ["object", "boolean"], ua = { contentEncoding: { type: "string" }, contentMediaType: { type: "string" }, contentSchema: { $dynamicRef: "#meta" } }, fa = {
  $schema: ia,
  $id: sa,
  $vocabulary: aa,
  $dynamicAnchor: ca,
  title: la,
  type: da,
  properties: ua
}, pa = "https://json-schema.org/draft/2020-12/schema", ha = "https://json-schema.org/draft/2020-12/meta/core", ma = { "https://json-schema.org/draft/2020-12/vocab/core": !0 }, ga = "meta", ya = "Core vocabulary meta-schema", va = ["object", "boolean"], $a = { $id: { $ref: "#/$defs/uriReferenceString", $comment: "Non-empty fragments not allowed.", pattern: "^[^#]*#?$" }, $schema: { $ref: "#/$defs/uriString" }, $ref: { $ref: "#/$defs/uriReferenceString" }, $anchor: { $ref: "#/$defs/anchorString" }, $dynamicRef: { $ref: "#/$defs/uriReferenceString" }, $dynamicAnchor: { $ref: "#/$defs/anchorString" }, $vocabulary: { type: "object", propertyNames: { $ref: "#/$defs/uriString" }, additionalProperties: { type: "boolean" } }, $comment: { type: "string" }, $defs: { type: "object", additionalProperties: { $dynamicRef: "#meta" } } }, ba = { anchorString: { type: "string", pattern: "^[A-Za-z_][-A-Za-z0-9._]*$" }, uriString: { type: "string", format: "uri" }, uriReferenceString: { type: "string", format: "uri-reference" } }, _a = {
  $schema: pa,
  $id: ha,
  $vocabulary: ma,
  $dynamicAnchor: ga,
  title: ya,
  type: va,
  properties: $a,
  $defs: ba
}, wa = "https://json-schema.org/draft/2020-12/schema", Sa = "https://json-schema.org/draft/2020-12/meta/format-annotation", Ca = { "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0 }, ka = "meta", Ea = "Format vocabulary meta-schema for annotation results", Pa = ["object", "boolean"], xa = { format: { type: "string" } }, Ra = {
  $schema: wa,
  $id: Sa,
  $vocabulary: Ca,
  $dynamicAnchor: ka,
  title: Ea,
  type: Pa,
  properties: xa
}, Aa = "https://json-schema.org/draft/2020-12/schema", Fa = "https://json-schema.org/draft/2020-12/meta/meta-data", Na = { "https://json-schema.org/draft/2020-12/vocab/meta-data": !0 }, Ma = "meta", ja = "Meta-data vocabulary meta-schema", Oa = ["object", "boolean"], Ta = { title: { type: "string" }, description: { type: "string" }, default: !0, deprecated: { type: "boolean", default: !1 }, readOnly: { type: "boolean", default: !1 }, writeOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 } }, za = {
  $schema: Aa,
  $id: Fa,
  $vocabulary: Na,
  $dynamicAnchor: Ma,
  title: ja,
  type: Oa,
  properties: Ta
}, Ia = "https://json-schema.org/draft/2020-12/schema", Da = "https://json-schema.org/draft/2020-12/meta/validation", qa = { "https://json-schema.org/draft/2020-12/vocab/validation": !0 }, Va = "meta", Ba = "Validation vocabulary meta-schema", La = ["object", "boolean"], Ua = { type: { anyOf: [{ $ref: "#/$defs/simpleTypes" }, { type: "array", items: { $ref: "#/$defs/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, const: !0, enum: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/$defs/nonNegativeInteger" }, minLength: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, maxItems: { $ref: "#/$defs/nonNegativeInteger" }, minItems: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, maxContains: { $ref: "#/$defs/nonNegativeInteger" }, minContains: { $ref: "#/$defs/nonNegativeInteger", default: 1 }, maxProperties: { $ref: "#/$defs/nonNegativeInteger" }, minProperties: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, required: { $ref: "#/$defs/stringArray" }, dependentRequired: { type: "object", additionalProperties: { $ref: "#/$defs/stringArray" } } }, Ka = { nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { $ref: "#/$defs/nonNegativeInteger", default: 0 }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, Ga = {
  $schema: Ia,
  $id: Da,
  $vocabulary: qa,
  $dynamicAnchor: Va,
  title: Ba,
  type: La,
  properties: Ua,
  $defs: Ka
};
var Fo;
function Ha() {
  if (Fo) return sn;
  Fo = 1, Object.defineProperty(sn, "__esModule", { value: !0 });
  const e = Vs, t = Ys, n = oa, o = fa, c = _a, r = Ra, s = za, i = Ga, d = ["/properties"];
  function g(h) {
    return [
      e,
      t,
      n,
      o,
      c,
      w(this, r),
      s,
      w(this, i)
    ].forEach(($) => this.addMetaSchema($, void 0, !1)), this;
    function w($, y) {
      return h ? $.$dataMetaSchema(y, d) : y;
    }
  }
  return sn.default = g, sn;
}
var No;
function Ja() {
  return No || (No = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv2020 = void 0;
    const n = /* @__PURE__ */ Bi(), o = /* @__PURE__ */ Rs(), c = /* @__PURE__ */ Fs(), r = /* @__PURE__ */ Ha(), s = "https://json-schema.org/draft/2020-12/schema";
    class i extends n.default {
      constructor(y = {}) {
        super({
          ...y,
          dynamicRef: !0,
          next: !0,
          unevaluated: !0
        });
      }
      _addVocabularies() {
        super._addVocabularies(), o.default.forEach((y) => this.addVocabulary(y)), this.opts.discriminator && this.addKeyword(c.default);
      }
      _addDefaultMetaSchema() {
        super._addDefaultMetaSchema();
        const { $data: y, meta: _ } = this.opts;
        _ && (r.default.call(this, y), this.refs["http://json-schema.org/schema"] = s);
      }
      defaultMeta() {
        return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(s) ? s : void 0);
      }
    }
    t.Ajv2020 = i, e.exports = t = i, e.exports.Ajv2020 = i, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = i;
    var d = /* @__PURE__ */ vn();
    Object.defineProperty(t, "KeywordCxt", { enumerable: !0, get: function() {
      return d.KeywordCxt;
    } });
    var g = /* @__PURE__ */ W();
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
    var h = /* @__PURE__ */ Ln();
    Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
      return h.default;
    } });
    var w = /* @__PURE__ */ $n();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return w.default;
    } });
  })(ut, ut.exports)), ut.exports;
}
var Wa = /* @__PURE__ */ Ja();
const Ya = /* @__PURE__ */ Ei(Wa), Xa = "https://json-schema.org/draft/2020-12/schema", Za = "https://raw.githubusercontent.com/omsf-eco-infra/gufe-viz/main/schema/gufe-viz.schema.json", Qa = "gufe-viz payload", ec = "Python-to-TypeScript contract bridge for gufe visualizations. Source of truth both languages are downstream of it. This schema is not strictly versioned or published as it is only internally consumed by this codebase. Schema description: one schema object per gufe class: every $def named *Viz is the visualization form of exactly one GufeTokenizable, it carries that object's `gufe-key`. Every reference from one gufe object to another is that object's gufe key, and the objects themselves live in the `registry` on the root payload. So a ligand network's nodes are keys, a chemical system's components and a transformation's protocol are keys and each one resolves to a complete, drawable object. An alchemical network whose forty systems share one protein carries that PDB once and points at it forty times, and the browser can still drill into it, because what it points at is a whole ProteinComponentViz. This is a single-shot dump rather than a conversation with a server, so the registry travels with the payload.", tc = [{ $ref: "#/$defs/SmallMoleculeComponentViz" }, { $ref: "#/$defs/ProteinComponentViz" }, { $ref: "#/$defs/SolvatedPDBComponentViz" }, { $ref: "#/$defs/ProteinMembraneComponentViz" }, { $ref: "#/$defs/SolventComponentViz" }, { $ref: "#/$defs/UnknownComponentViz" }, { $ref: "#/$defs/ProtocolViz" }, { $ref: "#/$defs/LigandAtomMappingViz" }, { $ref: "#/$defs/LigandNetworkViz" }, { $ref: "#/$defs/ChemicalSystemViz" }, { $ref: "#/$defs/TransformationViz" }, { $ref: "#/$defs/AlchemicalNetworkViz" }], nc = /* @__PURE__ */ JSON.parse('{"GufeKey":{"title":"GufeKey","description":"A gufe key: the identity of a GufeTokenizable, of the form \'ClassName-<hex digest>\'. It is deterministic and repeatable within a software environment. Only its non-emptiness is checked","type":"string","minLength":1},"ComponentKey":{"title":"ComponentKey","description":"A gufe key naming a ComponentViz in the registry. Identical to GufeKey at validation time: JSON Schema has no way to say \'this string is the gufe-key of an entry in that array, and that entry has this type\', because that is a join across two parts of the document. What the name buys is that the referent\'s type is stated in the contract and carried into the generated TypeScript, instead of living only in a test and a view.","$ref":"#/$defs/GufeKey"},"SmallMoleculeComponentKey":{"title":"SmallMoleculeComponentKey","description":"A gufe key naming a SmallMoleculeComponentViz in the registry. Resolving it yields the whole molecule, SDF included. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ChemicalSystemKey":{"title":"ChemicalSystemKey","description":"A gufe key naming a ChemicalSystemViz in the registry. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ProtocolKey":{"title":"ProtocolKey","description":"A gufe key naming a ProtocolViz in the registry. Every transformation of a network usually names the same one. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"Registry":{"title":"Registry","description":"The pool of gufe objects this payload refers to by key, each a complete payload object in its own right. Entries are unique by `gufe-key` and sorted by (type, gufe-key) so a committed fixture is byte-stable. JSON Schema cannot express \'unique by a property\' or \'every reference resolves\', so both are covered by tests on the Python side and degraded over by the views.","type":"array","items":{"oneOf":[{"$ref":"#/$defs/ComponentViz"},{"$ref":"#/$defs/ProtocolViz"},{"$ref":"#/$defs/ChemicalSystemViz"}]}},"ComponentViz":{"title":"ComponentViz","description":"Any single chemical-system component","oneOf":[{"$ref":"#/$defs/SmallMoleculeComponentViz"},{"$ref":"#/$defs/ProteinComponentViz"},{"$ref":"#/$defs/SolvatedPDBComponentViz"},{"$ref":"#/$defs/ProteinMembraneComponentViz"},{"$ref":"#/$defs/SolventComponentViz"},{"$ref":"#/$defs/UnknownComponentViz"}]},"SmallMoleculeComponentViz":{"title":"SmallMoleculeComponentViz","description":"A small molecule, carried as a complete SDF record.","type":"object","properties":{"type":{"const":"SmallMoleculeComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"sdf":{"type":"string","minLength":1,"description":"Complete inline SDF record, including the conformer."},"smiles":{"type":"string"},"total_charge":{"type":"integer","description":"Net formal charge. Displayed, never recomputed from the SDF."}},"required":["type","gufe-key","name","sdf","smiles","total_charge"],"additionalProperties":false},"ProteinComponentViz":{"title":"ProteinComponentViz","description":"A protein, carried as a complete PDB record.","type":"object","properties":{"type":{"const":"ProteinComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolvatedPDBComponentViz":{"title":"SolvatedPDBComponentViz","description":"A protein with explicit solvent. A distinct type rather than a flag on ProteinComponentViz, because the discriminator is what a view dispatches on and the presence of waters changes what a sensible default representation is.","type":"object","properties":{"type":{"const":"SolvatedPDBComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation, including explicit solvent."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"ProteinMembraneComponentViz":{"title":"ProteinMembraneComponentViz","description":"A protein embedded in a membrane.","type":"object","properties":{"type":{"const":"ProteinMembraneComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation of the protein and membrane system."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolventComponentViz":{"title":"SolventComponentViz","description":"Bulk solvent settings. There is no structure to draw, so these are flat fields suitable for rendering as a settings card.","type":"object","properties":{"type":{"const":"SolventComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"smiles":{"type":"string","minLength":1},"positive_ion":{"type":"string"},"negative_ion":{"type":"string"},"neutralize":{"type":"boolean"},"ion_concentration":{"type":"string","description":"Display-form concentration with units, for example \'0.15 molar\'. A string rather than a number because the unit is part of the value and the view only ever prints it."}},"required":["type","gufe-key","name","smiles","positive_ion","negative_ion","neutralize","ion_concentration"],"additionalProperties":false},"UnknownComponentViz":{"title":"UnknownComponentViz","description":"The graceful fallback for a component type this build does not recognize. gufe supports custom Component subclasses, so meeting one is an expected outcome rather than an error, and the browser answers it with \'sorry, there is no visualization for this\'. This covers an unrecognized type only: a recognized component whose serializer fails is a bug, and raises in Python rather than arriving here wearing a disguise.","type":"object","properties":{"type":{"const":"UnknownComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The gufe class name, so the panel can say which type it could not draw."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ProtocolViz":{"title":"ProtocolViz","description":"A gufe Protocol, named. Every transformation in an alchemical network usually shares one, so this is a registry entry that many edges point at rather than a class name repeated per edge. Settings are deliberately absent for now: they are large, deeply nested, and nothing draws them yet, adding a `settings` field later is additive and breaks nothing.","type":"object","properties":{"type":{"const":"ProtocolViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The Protocol\'s class name, which is what identifies it to a reader, a Protocol has no name of its own, so `name` is usually empty."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ChemicalSystemViz":{"title":"ChemicalSystemViz","description":"A gufe ChemicalSystem: labels mapped to the gufe keys of its components.","type":"object","properties":{"type":{"const":"ChemicalSystemViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"components":{"type":"object","description":"ChemicalSystem labels mapped to the gufe keys of the components in the registry.","additionalProperties":{"$ref":"#/$defs/ComponentKey"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","components"],"additionalProperties":false},"AtomMapping":{"title":"AtomMapping","description":"Atom index correspondence from molecule A to molecule B, as a list of index pairs. A list rather than an object keyed by A\'s index, because JSON object keys can only be strings: keying by index would put decimal strings such as \'12\' in the payload and leave both languages casting them back to integers, and it is Python\'s dict-of-int shape only by resemblance. As a list, both indices stay integers, and \'an entry has a B index for every A index\' becomes a `required` the schema states rather than a convention a reader has to trust. Pairs are ordered by `index_A` so a committed fixture is byte-stable.","type":"array","items":{"type":"object","properties":{"index_A":{"type":"integer","minimum":0,"description":"An atom index in molecule A."},"index_B":{"type":"integer","minimum":0,"description":"The atom index in molecule B that it maps to."}},"required":["index_A","index_B"],"additionalProperties":false}},"Annotations":{"title":"Annotations","description":"Free-form mapping metadata. gufe puts nothing here by design and every mapper picks its own keys, so this is deliberately open. Values are whatever survived being made JSON-safe. Displayed but never interpreted, with the single exception of \'score\'.","type":"object"},"LigandAtomMappingViz":{"title":"LigandAtomMappingViz","description":"One atom mapping between two small molecules. This is also what an edge of a ligand network is because the two endpoints are gufe keys either way: standalone they resolve in this object\'s own registry, and in a network they resolve in the network\'s, where they are the same entries the nodes name. `componentA` and `componentB` are the molecules the two sides of `componentA_to_componentB` index into: an `index_A` is an atom of the SmallMoleculeComponentViz that `componentA` names, and an `index_B` an atom of `componentB`\'s.","type":"object","properties":{"type":{"const":"LigandAtomMappingViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"componentA":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentB":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentA_to_componentB":{"$ref":"#/$defs/AtomMapping"},"score":{"type":["number","null"],"description":"The \'score\' annotation when it is a plain number, otherwise null. This is the one annotation key that is interpreted rather than displayed: it drives the edge colouring and the force layout\'s link distance."},"annotations":{"$ref":"#/$defs/Annotations"},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","componentA","componentB","componentA_to_componentB","score","annotations"],"additionalProperties":false},"LigandNetworkViz":{"title":"LigandNetworkViz","description":"A ligand network: the ligands in the registry, the nodes as keys into it, and the mappings as edges. Deliberately not gufe\'s GraphML: that format embeds a gufe to_json moldict per node, so forwarding it would relocate the decoding problem into the browser rather than avoid it.","type":"object","properties":{"type":{"const":"LigandNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ligand, resolved in `registry`.","items":{"$ref":"#/$defs/SmallMoleculeComponentKey"}},"edges":{"type":"array","description":"The mappings, whose `componentA` and `componentB` name nodes of this network. JSON Schema cannot express that referential constraint, so a Python test covers it, and the view drops a dangling edge with a banner rather than failing.","items":{"$ref":"#/$defs/LigandAtomMappingViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false},"TransformationViz":{"title":"TransformationViz","description":"A transformation between two chemical systems, both named by gufe key, as is its protocol: `stateA` is the system it starts from, `stateB` the one it ends at, and every edge of a network usually names the same protocol. This is also what an edge of an alchemical network is (there is no separate edge type) because `stateA` and `stateB` are keys either way, and in a network they are the keys the nodes name. NonTransformation uses this type too: it exposes the same stateA and stateB properties, both its single system, so it renders as a diff with no differences.","type":"object","properties":{"type":{"const":"TransformationViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"protocol":{"$ref":"#/$defs/ProtocolKey"},"stateA":{"$ref":"#/$defs/ChemicalSystemKey"},"stateB":{"$ref":"#/$defs/ChemicalSystemKey"},"mappings":{"type":"array","items":{"$ref":"#/$defs/LigandAtomMappingViz"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","protocol","stateA","stateB","mappings"],"additionalProperties":false},"AlchemicalNetworkViz":{"title":"AlchemicalNetworkViz","description":"A graph of chemical systems joined by transformations. What repeats here is not the nodes and edges themselves but what they are made of: in practice every system shares one protein and every transformation shares one protocol. Both live in the registry, once, as whole objects so this view can show composition and topology while still letting a reader open a node and see the protein.","type":"object","properties":{"type":{"const":"AlchemicalNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ChemicalSystem, resolved in `registry`.","items":{"$ref":"#/$defs/ChemicalSystemKey"}},"edges":{"type":"array","description":"The transformations, whose `stateA` and `stateB` name nodes of this network.","items":{"$ref":"#/$defs/TransformationViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false}}'), Hn = {
  $schema: Xa,
  $id: Za,
  title: Qa,
  description: ec,
  oneOf: tc,
  $defs: nc
}, $l = [
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
], Jn = Hn.$id, Wn = new Ya({ allErrors: !0, strict: !1 });
Wn.addSchema(Hn, Jn);
const Mo = Wn.getSchema(Jn), ti = Object.entries(Hn.$defs).filter(
  ([e, t]) => t.properties?.type?.const === e
).map(([e]) => e).sort(), bl = ti, Yn = /* @__PURE__ */ new Map();
for (const e of ti) {
  const t = Wn.getSchema(`${Jn}#/$defs/${e}`);
  t && Yn.set(e, t);
}
const In = { valid: !0, issues: [] };
function Dn(e) {
  return (e ?? []).map((t) => ({
    path: t.instancePath || "",
    message: t.keyword === "additionalProperties" ? `unknown property ${JSON.stringify(t.params.additionalProperty)}` : t.message ?? "is invalid"
  }));
}
function rc(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return {
      valid: !1,
      issues: [{ path: "", message: "must be a JSON object" }]
    };
  const t = e.type, n = typeof t == "string" ? Yn.get(t) : void 0;
  return n ? n(e) ? In : { valid: !1, issues: Dn(n.errors) } : Mo(e) ? In : { valid: !1, issues: Dn(Mo.errors) };
}
function _l(e, t) {
  const n = Yn.get(e);
  return n ? n(t) ? In : { valid: !1, issues: Dn(n.errors) } : {
    valid: !1,
    issues: [
      { path: "", message: `unknown payload type ${JSON.stringify(e)}` }
    ]
  };
}
function oc(e, t = 8) {
  const n = e.slice(0, t).map((o) => `${o.path || "(root)"}: ${o.message}`);
  return e.length > t && n.push(`... and ${e.length - t} more`), n.join(`
`);
}
const Xn = {
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
function ni(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return {
      message: "This does not look like a gufe-viz payload (expected a JSON object)."
    };
  const { type: t } = e;
  if (typeof t != "string" || !t)
    return {
      message: "This payload has no `type`, so there is nothing to say what it is."
    };
  if (!Xn[t]) return ic(t);
  const { valid: n, issues: o } = rc(e);
  return n ? null : {
    message: `This payload says it is a ${t}, but it does not match the gufe-viz schema.`,
    detail: oc(o)
  };
}
function ic(e) {
  const t = Object.keys(Xn).sort().join(", ");
  return {
    message: `Sorry, there is no visualization for ${e} yet. This build can draw: ${t}.`
  };
}
function wl(e) {
  return ni(e)?.message ?? null;
}
class sc extends we {
  placeholder() {
    return "Waiting for data...";
  }
  renderView(t, n) {
    Ci("payload", n, this);
    const o = ni(n);
    if (o)
      return t.appendChild(ac(o, n)), {};
    const c = n.type, r = Xn[c], s = document.createElement(r);
    return s.style.cssText = "flex:1;min-height:0;min-width:0;", s.payload = n, t.appendChild(s), {
      onResize: () => s.resize?.(),
      // Removing the child fires its own `disconnectedCallback`, which is where
      // its viewers and observers are released
      cleanup: () => s.remove()
    };
  }
}
function ac(e, t) {
  const n = z(
    "div",
    "flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:32px;"
  );
  n.appendChild(ie(e.message));
  const o = (r, s) => z(
    "div",
    "max-width:640px;padding:8px 12px;border-radius:6px;font-size:11px;white-space:pre-wrap;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;overflow-wrap:anywhere;" + (s ? `background:${x.warnBg};color:${x.warnFg};border:1px solid ${x.warnBorder};` : `background:${x.panelBg};color:${x.textMuted2};border:1px solid ${x.cardBorder};`),
    r
  );
  e.detail && n.appendChild(o(e.detail, !0));
  const c = cc(t);
  return c && n.appendChild(o(c, !1)), n;
}
function cc(e) {
  if (e == null || typeof e != "object") return null;
  const t = e, n = [];
  typeof t.type == "string" && n.push(`type: ${dn(t.type)}`), typeof t.name == "string" && t.name && n.push(`name: ${dn(t.name)}`);
  const o = Object.keys(e);
  return o.length && n.push(
    `keys: ${o.slice(0, 12).join(", ")}${o.length > 12 ? ", ..." : ""}`
  ), n.length ? n.join(`
`) : null;
}
Se("gufe-view", sc);
const Zn = {
  threeDmol: "https://3dmol.org/build/3Dmol-min.js",
  rdkit: "https://unpkg.com/@rdkit/rdkit/dist/RDKit_minimal.js",
  d3: "https://cdn.jsdelivr.net/npm/d3@7/+esm"
};
function Qn(e) {
  const t = globalThis.__gufeEngines?.[e];
  return t ? Promise.resolve(t) : null;
}
function ri(e, t) {
  return new Promise((n, o) => {
    const c = document.createElement("script");
    c.src = e, c.onload = () => n(), c.onerror = () => o(new Error(`Failed to load ${t}`)), document.head.appendChild(c);
  });
}
let qe = null, He = null;
function er() {
  if (He) return He;
  const e = Qn("threeDmol");
  return e ? (He = e.then((t) => qe = t || window.$3Dmol), He) : (He = (async () => {
    if (window.$3Dmol) return qe = window.$3Dmol;
    if (await ri(Zn.threeDmol, "3Dmol.js"), !window.$3Dmol) throw new Error("3Dmol.js loaded but $3Dmol is undefined");
    return qe = window.$3Dmol;
  })(), He);
}
let Je = null;
function tr() {
  if (Je) return Je;
  const e = Qn("rdkit");
  return e ? (Je = e.then((t) => window.RDKit = t), Je) : (Je = (async () => {
    if (window.RDKit) return window.RDKit;
    if (await ri(Zn.rdkit, "RDKit"), !window.initRDKitModule) throw new Error("RDKit loaded but initRDKitModule is undefined");
    return window.RDKit = await window.initRDKitModule();
  })(), Je);
}
let On = null;
function oi() {
  if (!On) {
    const e = Zn.d3;
    On = Qn("d3") ?? import(
      /* @vite-ignore */
      e
    );
  }
  return On;
}
function ii(e, t) {
  let n = !1, o = !1;
  const c = () => {
    n = !0;
  }, r = () => {
    n = !1;
  }, s = (i) => {
    if (i.stopPropagation(), n || i.ctrlKey || i.metaKey) {
      i.preventDefault(), t.onZoom(i);
      return;
    }
    t.hint && !o && (o = !0, dc(e, t.hint));
  };
  return e.addEventListener("wheel", s, { passive: !1, capture: !0 }), e.addEventListener("pointerdown", c), e.addEventListener("pointerenter", c), e.addEventListener("pointerleave", r), {
    cleanup() {
      e.removeEventListener("wheel", s, { capture: !0 }), e.removeEventListener("pointerdown", c), e.removeEventListener("pointerenter", c), e.removeEventListener("pointerleave", r);
    }
  };
}
const lc = 1600;
function dc(e, t) {
  const n = z(
    "div",
    "position:absolute;bottom:12px;left:50%;transform:translateX(-50%);z-index:30;pointer-events:none;padding:5px 12px;border-radius:6px;font-size:11px;white-space:nowrap;background:rgba(0,0,0,0.72);color:#ffffff;transition:opacity .3s ease;",
    t
  );
  e.appendChild(n), setTimeout(() => {
    n.style.opacity = "0", setTimeout(() => n.remove(), 300);
  }, lc);
}
const uc = { min: 0.25, max: 12 };
function fc(e, t = uc) {
  let n = 1;
  return {
    zoomBy(o) {
      const c = Math.min(t.max, Math.max(t.min, n * o));
      if (c === n) return;
      const r = c / n;
      n = c, e.zoom(r), e.render();
    },
    reset() {
      n = 1, e.zoomTo(), e.render();
    },
    level: () => n
  };
}
const pc = 2e-3;
function hc(e) {
  return Math.exp(-e.deltaY * pc);
}
function nr(e, t, n = {}) {
  const o = fc(t, n.bounds), c = ii(e, {
    hint: n.hint ?? "Click or hold Ctrl to zoom",
    onZoom: (r) => o.zoomBy(hc(r))
  });
  return { ...o, cleanup: c.cleanup };
}
function _n(e, t = "Reset view") {
  const n = z("button", Qe, "Reset");
  return n.title = t, n.setAttribute("aria-label", t), n.onclick = e, n;
}
const Ie = {
  elementChange: "#005AB5",
  uniqueAtom: "#DC3220",
  elementChange3D: "0x005AB5",
  uniqueAtom3D: "0xDC3220"
}, it = [
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
], Sl = "hsv", I = [0, 0, 0], mc = {
  0: I,
  1: I,
  2: I,
  3: I,
  4: I,
  5: I,
  6: I,
  7: I,
  8: I,
  9: I,
  10: I,
  11: I,
  12: I,
  13: I,
  14: I,
  15: I,
  16: I,
  17: I,
  18: I,
  19: I,
  20: I,
  21: I,
  22: I,
  23: I,
  24: I,
  25: I,
  26: I,
  27: I,
  28: I,
  29: I,
  30: I,
  31: I,
  32: I,
  33: I,
  34: I,
  35: I,
  36: I,
  37: I,
  38: I,
  39: I,
  40: I,
  41: I,
  42: I,
  43: I,
  44: I,
  45: I,
  46: I,
  47: I,
  48: I,
  49: I,
  50: I,
  51: I,
  52: I,
  53: I,
  54: I,
  55: I,
  56: I,
  57: I,
  58: I,
  59: I,
  60: I,
  61: I,
  62: I,
  63: I,
  64: I,
  65: I,
  66: I,
  67: I,
  68: I,
  69: I,
  70: I,
  71: I,
  72: I,
  73: I,
  74: I,
  75: I,
  76: I,
  77: I,
  78: I,
  79: I,
  80: I,
  81: I,
  82: I,
  83: I,
  84: I,
  85: I,
  86: I,
  87: I,
  88: I,
  89: I,
  90: I,
  91: I,
  92: I,
  93: I,
  94: I,
  95: I,
  96: I,
  97: I,
  98: I,
  99: I,
  100: I,
  101: I,
  102: I,
  103: I,
  104: I,
  105: I,
  106: I,
  107: I,
  108: I,
  109: I,
  110: I,
  111: I,
  112: I,
  113: I,
  114: I,
  115: I,
  116: I,
  117: I,
  118: I
}, gc = {
  atomColourPalette: mc,
  addAtomIndices: !0,
  continuousHighlight: !1
}, si = `
`, jo = "$$$$";
function an(e, t) {
  if (!e || !e.trim()) throw new Error("empty SDF");
  const n = e.replace(/\r/g, "").split(si);
  if (n.length < 4) throw new Error("SDF too short");
  const o = n[3];
  if (o.indexOf("V3000") !== -1) throw new Error("V3000 molfiles are not supported");
  const c = parseInt(o.substring(0, 3), 10), r = parseInt(o.substring(3, 6), 10);
  if (!isFinite(c) || c <= 0) throw new Error(`bad counts line: ${o}`);
  const s = [], i = [];
  for (let h = 0; h < c; h++) {
    const w = n[4 + h];
    if (w == null) throw new Error("truncated atom block");
    s.push([
      parseFloat(w.substring(0, 10)) || 0,
      parseFloat(w.substring(10, 20)) || 0,
      parseFloat(w.substring(20, 30)) || 0
    ]), i.push(w.substring(31, 34).trim() || "X");
  }
  const d = [];
  for (let h = 0; h < (isFinite(r) ? r : 0); h++) {
    const w = n[4 + c + h];
    if (w == null) break;
    const $ = parseInt(w.substring(0, 3), 10), y = parseInt(w.substring(3, 6), 10), _ = parseInt(w.substring(6, 9), 10);
    !isFinite($) || !isFinite(y) || d.push([$ - 1, y - 1, isFinite(_) ? _ : 1]);
  }
  return { name: (n[0] || "").trim() || t || "molecule", symbols: i, bonds: d, coords: s };
}
const ct = (e) => e.indexOf(jo) >= 0 ? e : `${e}${si}${jo}`;
function yc(e) {
  const t = String(e).split(/\r?\n/);
  if (t.length < 4) return null;
  const n = parseInt(t[3].slice(0, 3), 10), o = parseInt(t[3].slice(3, 6), 10);
  return isNaN(n) || isNaN(o) ? null : { atoms: n, bonds: o };
}
function ai(e, t, n) {
  let o = null;
  try {
    if (o = e.get_mol(t, JSON.stringify({ removeHs: !0 })), !o) return null;
    try {
      o.set_new_coords(!0);
    } catch {
    }
    return o.get_svg(n, n) || null;
  } catch (c) {
    return console.warn("[gufe-viz] depictSVG threw -", me(c)), null;
  } finally {
    if (o)
      try {
        o.delete();
      } catch {
      }
  }
}
function ci(e, t, n) {
  e.innerHTML = t;
  const o = e.querySelector("svg");
  o && (o.removeAttribute("width"), o.removeAttribute("height"), o.getAttribute("viewBox") || o.setAttribute("viewBox", `0 0 ${n} ${n}`), o.setAttribute("preserveAspectRatio", "xMidYMid meet"), o.setAttribute("style", "width:100%;height:100%;max-width:100%;max-height:100%;"));
}
function vc(e, t, n, o, c = {}) {
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
        ...gc,
        highlightAtomColors: c
      })
    ) || null : r.get_svg(n, n) || null : null;
  } catch (s) {
    return console.warn("[gufe-viz] depictHighlightedSVG threw -", me(s)), null;
  } finally {
    if (r)
      try {
        r.delete();
      } catch {
      }
  }
}
const $c = [
  { id: "stick", label: "Stick", title: "Sticks only" },
  { id: "ball", label: "Ball+Stick", title: "Ball and stick" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" }
], Oo = {
  stick: { stick: { radius: 0.15, colorscheme: "Jmol" } },
  ball: { stick: { radius: 0.12, colorscheme: "Jmol" }, sphere: { scale: 0.28, colorscheme: "Jmol" } },
  sphere: { sphere: { scale: 1, colorscheme: "Jmol" } }
}, To = 400;
class bc extends we {
  placeholder() {
    return "Waiting for a SmallMoleculeComponent payload...";
  }
  renderView(t, n) {
    const o = n.sdf, c = n.name ?? "", r = n.smiles, s = n.total_charge;
    t.appendChild(Fe(c || "Unnamed molecule", "SmallMoleculeComponent"));
    const i = z("div", "flex:1;display:flex;flex-direction:row;overflow:hidden;min-height:0;");
    t.appendChild(i);
    const d = z("div", "flex:1 1 50%;min-width:0;display:flex;flex-direction:column;"), g = z("div", "flex:1 1 50%;min-width:0;display:flex;flex-direction:column;position:relative;");
    i.appendChild(d), i.appendChild(z("div", `width:1px;flex-shrink:0;background:${x.splitBorder};`)), i.appendChild(g);
    const h = (f) => z("div", `flex-shrink:0;padding:4px 10px;font-size:12px;font-weight:bold;color:${x.labelFg};background:${x.labelBg};`, f);
    d.appendChild(h("2D"));
    const w = z(
      "div",
      `flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:8px;background:${x.canvas2DBg};`
    );
    d.appendChild(w), g.appendChild(h("3D"));
    const $ = Bn();
    g.appendChild($.wrap);
    const y = z(
      "div",
      `flex-shrink:0;display:flex;flex-wrap:wrap;align-items:baseline;gap:6px 20px;padding:8px 16px;font-size:12px;background:${x.toolbarBg};border-top:1px solid ${x.toolbarBorder};color:${x.textPrimary};`
    );
    t.appendChild(y);
    const _ = o ? yc(o) : null, S = [
      ["Name", c || Ye, !1],
      ["SMILES", r || Ye, !0],
      ["Charge", s == null ? Ye : String(s), !1],
      ["Atoms", _ ? String(_.atoms) : Ye, !1],
      ["Bonds", _ ? String(_.bonds) : Ye, !1]
    ];
    for (const [f, E, P] of S) {
      const A = z("div", "display:flex;align-items:baseline;gap:6px;min-width:0;");
      A.appendChild(
        z(
          "span",
          `font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;flex-shrink:0;color:${x.textMuted2};`,
          f
        )
      );
      const O = z(
        "span",
        `user-select:text;cursor:text;color:${x.textPrimary}` + (P ? ";font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:11px;overflow-wrap:anywhere;" : ""),
        E
      );
      O.title = E, A.appendChild(O), y.appendChild(A);
    }
    if (!o || !o.trim())
      return w.appendChild(ie("No molecule provided")), $.container.appendChild(ie("No molecule provided")), {};
    w.appendChild(ie("Loading 2D depiction...")), tr().then((f) => {
      const E = ai(f, o, To);
      E ? ci(w, E, To) : w.replaceChildren(ie("Failed to parse molecule", !0));
    }).catch((f) => {
      w.replaceChildren(ie(`RDKit failed to load: ${me(f)}`, !0));
    });
    let p = null, m = null, u = "stick", b = !1;
    const k = z(
      "div",
      `position:absolute;bottom:10px;right:10px;display:flex;gap:4px;padding:4px;border-radius:6px;z-index:10;background:${x.switcherBg};box-shadow:0 2px 8px rgba(0,0,0,0.25);`
    );
    k.appendChild(
      mn($c, u, (f) => {
        u = f, p && (p.setStyle({}, Oo[f]), p.render());
      })
    );
    const a = z("button", `${Qe}margin-left:4px;`, "Spin");
    a.title = "Toggle continuous rotation", a.onclick = () => {
      b = !b, a.style.background = b ? x.btnBgActive : x.btnBg;
      try {
        p?.spin(b ? "y" : !1);
      } catch {
      }
    }, k.appendChild(a);
    const l = _n(() => m?.reset());
    return l.style.marginLeft = "4px", k.appendChild(l), g.appendChild(k), $.container.appendChild(ie("Loading 3D viewer...")), er().then(() => {
      $.container.replaceChildren(), p = qe.createViewer($.container, { backgroundColor: x.viewerBg }), p.addModel(ct(o), "sdf"), p.setStyle({}, Oo[u]), p.zoomTo(), p.render(), m = nr($.container, p);
    }).catch((f) => {
      $.container.replaceChildren(ie(`3D render failed: ${me(f)}`, !0));
    }), {
      onResize() {
        p && (p.resize(), p.render());
      },
      cleanup() {
        if (m?.cleanup(), m = null, !!p) {
          try {
            p.spin(!1);
          } catch {
          }
          try {
            p.clear();
          } catch {
          }
          p = null;
        }
      }
    };
  }
}
Se("gufe-small-molecule", bc);
const li = ["HOH", "WAT", "SOL", "TIP3"], zo = { hetflag: !1 }, _c = { hetflag: !0 }, wc = { resn: li }, Me = {
  stick: { radius: 0.15 },
  sphere: { scale: 0.3 },
  hetero: { stickRadius: 0.2, sphereScale: 0.28 },
  water: { stickRadius: 0.05, sphereScale: 0.18 },
  surfaceOpacity: 0.85,
  /** Above this many atoms a surface is slow enough to be worth warning about. */
  surfaceAtomWarn: 4e4
};
function Sc(e) {
  const t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
  let o = 0, c = 0, r = 0, s = 1 / 0, i = -1 / 0;
  for (const d of e.split(/\r?\n/)) {
    const g = d.slice(0, 6);
    if (g === "ENDMDL") break;
    if (g !== "ATOM  " && g !== "HETATM") continue;
    o++, g === "HETATM" && c++;
    const h = d.slice(17, 20).trim(), w = d.slice(21, 22).trim() || "_", $ = d.slice(22, 26).trim(), y = d.slice(26, 27).trim();
    li.indexOf(h) !== -1 && r++, t.add(w), n.add(`${w}|${$}${y}|${h}`);
    const _ = parseInt($, 10);
    isNaN(_) || (_ < s && (s = _), _ > i && (i = _));
  }
  return {
    chains: t.size,
    residues: n.size,
    atoms: o,
    hetatms: c,
    waters: r,
    heteroNonWater: c - r,
    resiMin: s === 1 / 0 ? 0 : s,
    resiMax: i === -1 / 0 ? 0 : i
  };
}
function Cc(e) {
  return `${tt(e.chains)} chains · ${tt(e.residues)} residues · ${tt(e.atoms)} atoms · ${tt(e.hetatms)} HETATM` + (e.waters > 0 ? ` (${tt(e.waters)} water)` : "");
}
function kc(e, t) {
  return e === "chain" ? { colorscheme: "chain" } : e === "ss" ? { colorscheme: "ssJmol" } : e === "spectrum" && t && t.resiMax > t.resiMin ? { colorscheme: { prop: "resi", gradient: "roygb", min: t.resiMin, max: t.resiMax } } : { colorscheme: "Jmol" };
}
function Io(e, t, n, o) {
  const c = o || (() => {
  }), r = kc(t.color, n);
  try {
    e.removeAllSurfaces();
  } catch {
  }
  if (e.setStyle({}, {}), e.setStyle(
    zo,
    t.rep === "stick" ? { stick: { radius: Me.stick.radius, ...r } } : t.rep === "sphere" ? { sphere: { scale: Me.sphere.scale, ...r } } : (
      // For 'surface' the shell is added separately; leave the atoms bare so
      // it is not cluttered from the inside.
      t.rep === "surface" ? {} : { cartoon: { ...r } }
    )
  ), e.setStyle(
    _c,
    t.hetero ? {
      stick: { radius: Me.hetero.stickRadius, colorscheme: "Jmol" },
      sphere: { scale: Me.hetero.sphereScale, colorscheme: "Jmol" }
    } : {}
  ), e.setStyle(
    wc,
    t.waters ? {
      stick: { radius: Me.water.stickRadius, colorscheme: "Jmol" },
      sphere: { scale: Me.water.sphereScale, colorscheme: "Jmol" }
    } : {}
  ), t.rep !== "surface") {
    c(null), e.render();
    return;
  }
  c(
    n && n.atoms > Me.surfaceAtomWarn ? "Computing surface (large structure, this may take a while)..." : "Computing surface..."
  ), e.render(), setTimeout(() => {
    try {
      Promise.resolve(
        e.addSurface(qe.SurfaceType.VDW, { opacity: Me.surfaceOpacity, ...r }, zo)
      ).then(() => {
        c(null), e.render();
      }).catch((s) => c(`Surface failed: ${me(s)}`, "error"));
    } catch (s) {
      c(`Surface failed: ${me(s)}`, "error");
    }
  }, 30);
}
const Ec = [
  { id: "cartoon", label: "Cartoon", title: "Ribbon / cartoon backbone" },
  { id: "surface", label: "Surface", title: "Molecular (VDW) surface" },
  { id: "stick", label: "Stick", title: "All-atom sticks" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" }
], Pc = [
  { id: "chain", label: "Chain" },
  { id: "spectrum", label: "Spectrum" },
  { id: "ss", label: "Secondary structure" },
  { id: "element", label: "Element" }
], xc = {
  ProteinComponentViz: "ProteinComponent",
  SolvatedPDBComponentViz: "SolvatedPDBComponent",
  ProteinMembraneComponentViz: "ProteinMembraneComponent"
};
class Rc extends we {
  placeholder() {
    return "Waiting for a ProteinComponent payload...";
  }
  renderView(t, n) {
    const o = n.pdb, c = n.name ?? "", r = xc[n.type] ?? "ProteinComponent", i = { rep: "cartoon", color: "chain", waters: n.type !== "ProteinComponentViz", hetero: !0 };
    let d = null, g = null, h = null;
    const w = z(
      "div",
      `display:flex;align-items:center;gap:14px;flex-wrap:wrap;padding:8px 14px;flex-shrink:0;font-size:12px;background:${x.toolbarBg};border-bottom:1px solid ${x.toolbarBorder};color:${x.textPrimary};`
    );
    t.appendChild(w), w.appendChild(
      z("span", `font-weight:700;font-size:14px;letter-spacing:.02em;color:${x.titleColor};`, c || "Protein")
    ), w.appendChild(z("span", `font-size:11px;color:${x.textMuted2};`, r));
    const $ = (a) => z("span", `font-size:11px;color:${x.textMuted};`, a);
    w.appendChild($("Style:")), w.appendChild(
      mn(Ec, i.rep, (a) => {
        i.rep = a, k();
      })
    ), w.appendChild($("Color:"));
    const y = z("select", Ko);
    for (const a of Pc) {
      const l = z("option", "", a.label);
      l.value = a.id, y.appendChild(l);
    }
    y.value = i.color, y.addEventListener("change", () => {
      i.color = y.value, k();
    }), w.appendChild(y);
    const _ = z("div", "display:flex;gap:4px;");
    w.appendChild(_);
    const S = [
      ["waters", "Waters", "Show water molecules", () => k()],
      ["hetero", "Hetero", "Show hetero atoms / ligands / ions / lipids", () => k()],
      ["spin", "Spin", "Rotate the view continuously", () => d?.spin(i.spin ? "y" : !1)]
    ];
    for (const [a, l, f, E] of S) {
      const P = z("button", Qe, l);
      P.title = f, P.style.background = i[a] ? x.btnBgActive : x.btnBg, P.onclick = () => {
        i[a] = !i[a], P.style.background = i[a] ? x.btnBgActive : x.btnBg, E();
      }, _.appendChild(P);
    }
    _.appendChild(_n(() => g?.reset()));
    const p = z("span", `margin-left:auto;font-size:11px;white-space:nowrap;color:${x.textMuted2};`);
    w.appendChild(p);
    const m = Bn();
    t.appendChild(m.wrap);
    const u = z(
      "div",
      "position:absolute;top:12px;left:50%;transform:translateX(-50%);padding:6px 14px;border-radius:6px;font-size:12px;z-index:20;display:none;pointer-events:none;"
    );
    m.wrap.appendChild(u);
    const b = (a, l) => {
      if (a == null) {
        u.style.display = "none";
        return;
      }
      u.textContent = a, u.style.display = "block";
      const f = l === "error";
      u.style.background = f ? x.warnBg : x.toolbarBg, u.style.color = f ? x.warnFg : x.textMuted, u.style.border = `1px solid ${f ? x.warnBorder : x.toolbarBorder}`;
    };
    function k() {
      d && Io(d, i, h, b);
    }
    if (!o || !o.trim())
      return b("No protein data - waiting for a PDB payload."), {};
    try {
      h = Sc(o), p.textContent = Cc(h);
    } catch (a) {
      b(`⚠ PDB parse error: ${me(a)}`, "error");
    }
    return b("Loading 3D viewer..."), er().then(() => {
      d = qe.createViewer(m.container, { backgroundColor: x.viewerBg }), d.addModel(o, "pdb"), Io(d, i, h, b), d.zoomTo(), d.spin(i.spin ? "y" : !1), d.render(), g = nr(m.container, d);
    }).catch((a) => {
      b(`⚠ Failed to render structure: ${me(a)}`, "error");
    }), {
      onResize() {
        d && (d.resize(), d.render());
      },
      cleanup() {
        if (g?.cleanup(), g = null, !!d) {
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
Se("gufe-protein", Rc);
const di = "http://www.w3.org/2000/svg";
function oe(e, t = {}) {
  const n = document.createElementNS(di, e);
  for (const [o, c] of Object.entries(t)) n.setAttribute(o, String(c));
  return n;
}
function Xe(e, t) {
  const n = document.createElementNS(di, "title");
  return n.textContent = t, e.appendChild(n), e;
}
function dt(e) {
  const t = /* @__PURE__ */ new Map();
  return qn(e, t, /* @__PURE__ */ new Set()), t;
}
function qn(e, t, n) {
  if (e == null || typeof e != "object" || n.has(e)) return;
  if (n.add(e), Array.isArray(e)) {
    for (const c of e) qn(c, t, n);
    return;
  }
  const o = e.registry;
  if (Array.isArray(o))
    for (const c of o) {
      const r = c["gufe-key"];
      typeof r == "string" && r && !t.has(r) && t.set(r, c);
    }
  for (const c of Object.values(e)) qn(c, t, n);
}
function Ve(e, t) {
  return t ? e.get(t) : void 0;
}
function Pe(e, t, n) {
  const o = Ve(e, t);
  return o?.type === n ? o : void 0;
}
function Ze(e) {
  return e.name ? e.name : (e["gufe-key"].split("-").pop() ?? e["gufe-key"]).slice(0, 6);
}
function Ac(e, t) {
  if (t <= 0) return it[0];
  const n = t === 1 ? 0 : e / (t - 1), o = it.length, c = Math.max(0, Math.min(o - 1, n * (o - 1))), r = Math.floor(c), s = Math.min(o - 1, r + 1), i = c - r;
  if (i === 0) return it[r];
  const d = ($) => {
    const y = parseInt($.replace("#", ""), 16);
    return [y >> 16 & 255, y >> 8 & 255, y & 255];
  }, g = d(it[r]), h = d(it[s]);
  return `#${g.map(($, y) => Math.round($ + (h[y] - $) * i)).map(($) => $.toString(16).padStart(2, "0")).join("")}`;
}
function Fc(e, t) {
  let n = 0;
  for (const c of [e, t]) {
    let r = 1 / 0, s = -1 / 0;
    for (const i of c)
      i[0] < r && (r = i[0]), i[0] > s && (s = i[0]);
    c.length && (n = Math.max(n, s - r));
  }
  const o = Math.round(n * 10) / 10;
  return o > 5 ? o : 5;
}
const Nc = 1.5;
function Mc(e, t, n, o) {
  const c = [...e.entries()], r = [];
  return c.forEach(([s, i], d) => {
    const g = t[s], h = n[i];
    !g || !h || r.push({
      a: [g[0] - o, g[1], g[2]],
      b: [h[0] + o, h[1], h[2]],
      color: Ac(d, c.length),
      indexA: s,
      indexB: i
    });
  }), r;
}
function Do(e, t) {
  const n = e.replace(/\r/g, "").split(`
`);
  if (n.length < 4) return e;
  const o = parseInt(n[3].slice(0, 3), 10);
  if (!Number.isInteger(o) || o <= 0) return e;
  for (let c = 0; c < o; c++) {
    const r = 4 + c, s = n[r];
    if (!s || s.length < 30) continue;
    const i = Number(s.slice(0, 10));
    Number.isFinite(i) && (n[r] = (i + t).toFixed(4).padStart(10) + s.slice(10));
  }
  return n.join(`
`);
}
const qo = 420, Vo = { radius: 0.6, alpha: 0.8 }, Tn = { radius: 0.05, dashed: !0, opacity: 0.75 }, jc = [
  { id: "changes", label: "Changes", title: "Highlight what differs, as gufe draws it" },
  { id: "mapped", label: "Mapped", title: "Highlight the atoms that carry over instead" }
];
function ui(e) {
  const t = parseInt(e.replace("#", ""), 16);
  return [(t >> 16 & 255) / 255, (t >> 8 & 255) / 255, (t & 255) / 255];
}
const Oc = ui(Ie.elementChange), Tc = ui(Ie.uniqueAtom);
function Bo(e, t, n) {
  const o = [], c = [], r = [];
  for (let s = 0; s < t.length; s++) {
    const i = e.get(s);
    i === void 0 ? o.push(s) : t[s] !== n[i] ? c.push(s) : r.push(s);
  }
  return { atoms: o, elements: c, mapped: r };
}
function zc(e, t) {
  if (t === "mapped")
    return { atoms: [...e.mapped, ...e.elements], colors: {} };
  const n = {};
  for (const o of e.elements) n[o] = Oc;
  for (const o of e.atoms) n[o] = Tc;
  return { atoms: [...e.elements, ...e.atoms], colors: n };
}
function Ic(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e.componentA_to_componentB ?? [])
    Number.isInteger(n?.index_A) && Number.isInteger(n?.index_B) && t.set(n.index_A, n.index_B);
  return t;
}
function fi(e, t) {
  const n = Pe(t, e.componentA, "SmallMoleculeComponentViz"), o = Pe(t, e.componentB, "SmallMoleculeComponentViz");
  return !n || !o ? null : { ...e, registry: n["gufe-key"] === o["gufe-key"] ? [n] : [n, o] };
}
class Dc extends we {
  placeholder() {
    return "Waiting for a LigandAtomMapping payload...";
  }
  renderView(t, n) {
    const o = dt(n), c = Pe(o, n.componentA, "SmallMoleculeComponentViz"), r = Pe(o, n.componentB, "SmallMoleculeComponentViz"), s = Fe(n.name || "Atom mapping", "LigandAtomMapping");
    if (t.appendChild(s), !c || !r)
      return t.appendChild(
        ie("This mapping names two molecules, and its registry does not hold them.")
      ), {};
    const i = Ze(c), d = Ze(r), g = Ic(n);
    let h, w;
    try {
      h = an(c.sdf, i).symbols, w = an(r.sdf, d).symbols;
    } catch (C) {
      return t.appendChild(ie(`Could not read a molecule: ${me(C)}`, !0)), {};
    }
    const $ = /* @__PURE__ */ new Map();
    for (const [C, T] of g) $.set(T, C);
    const y = Bo(g, h, w), _ = Bo($, w, h);
    let S = "changes";
    s.statsEl.appendChild(se("mapped atoms", String(g.size))), s.statsEl.appendChild(
      se("element changes", String(y.elements.length), Ie.elementChange)
    ), s.statsEl.appendChild(
      se(`unique to ${i}`, String(y.atoms.length), Ie.uniqueAtom)
    ), s.statsEl.appendChild(
      se(`unique to ${d}`, String(_.atoms.length), Ie.uniqueAtom)
    ), s.statsEl.appendChild(se("score", n.score == null ? Ye : n.score.toFixed(3)));
    const p = z(
      "div",
      `display:flex;align-items:center;gap:12px;flex-wrap:wrap;padding:7px 14px;flex-shrink:0;font-size:12px;background:${x.toolbarBg};border-bottom:1px solid ${x.toolbarBorder};color:${x.textMuted};`
    );
    p.appendChild(z("span", `font-size:11px;color:${x.textMuted};`, "Highlight:")), p.appendChild(
      mn(jc, S, (C) => {
        S = C, v();
      })
    );
    const m = z("div", "display:flex;align-items:center;gap:12px;margin-left:auto;font-size:11px;");
    m.appendChild(se("element change", "", Ie.elementChange)), m.appendChild(se("unique atom", "", Ie.uniqueAtom)), p.appendChild(m), t.appendChild(p);
    const u = z("div", "flex:1;min-height:0;display:flex;flex-direction:column;");
    t.appendChild(u);
    const b = z("div", "flex:1 1 55%;min-height:0;display:flex;flex-direction:row;");
    u.appendChild(b);
    const k = (C) => {
      const T = z("div", "flex:1 1 50%;min-width:0;display:flex;flex-direction:column;");
      T.appendChild(
        z(
          "div",
          `flex-shrink:0;padding:4px 10px;font-size:12px;font-weight:bold;color:${x.labelFg};background:${x.labelBg};`,
          C
        )
      );
      const K = z(
        "div",
        `flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:8px;background:${x.canvas2DBg};`
      );
      return T.appendChild(K), b.appendChild(T), K;
    }, a = (C) => z(
      "div",
      `flex-shrink:0;padding:4px 10px;font-size:12px;font-weight:bold;color:${x.labelFg};background:${x.labelBg};`,
      C
    ), l = k(i);
    b.appendChild(z("div", `width:1px;flex-shrink:0;background:${x.splitBorder};`));
    const f = k(d), E = z("div", "flex:1 1 45%;min-height:180px;display:flex;flex-direction:column;position:relative;");
    u.appendChild(z("div", `height:1px;flex-shrink:0;background:${x.splitBorder};`)), u.appendChild(E), E.appendChild(a("3D overlay"));
    const P = Bn();
    E.appendChild(P.wrap);
    const A = an(c.sdf, i).coords, O = an(r.sdf, d).coords, j = Fc(A, O) * Nc, D = Mc(g, A, O, j);
    let U = null, ne = null, ee = !0;
    const ue = () => {
      if (U) {
        U.removeAllShapes();
        for (const C of D) {
          for (const T of [C.a, C.b])
            U.addSphere({
              center: { x: T[0], y: T[1], z: T[2] },
              radius: Vo.radius,
              color: C.color,
              alpha: Vo.alpha
            });
          ee && U.addCylinder({
            start: { x: C.a[0], y: C.a[1], z: C.a[2] },
            end: { x: C.b[0], y: C.b[1], z: C.b[2] },
            radius: Tn.radius,
            color: C.color,
            dashed: Tn.dashed,
            opacity: Tn.opacity
          });
        }
        U.render();
      }
    }, J = z(
      "div",
      `position:absolute;bottom:10px;right:10px;display:flex;gap:4px;padding:4px;border-radius:6px;z-index:10;background:${x.switcherBg};box-shadow:0 2px 8px rgba(0,0,0,0.25);`
    ), ae = z("button", Qe, "Lines");
    ae.title = "Draw a line between each mapped pair", ae.style.background = x.btnBgActive, ae.onclick = () => {
      ee = !ee, ae.style.background = ee ? x.btnBgActive : x.btnBg, ue();
    }, J.appendChild(ae), J.appendChild(_n(() => ne?.reset())), E.appendChild(J), P.container.appendChild(ie("Loading 3D viewer...")), er().then(() => {
      P.container.replaceChildren(), U = qe.createViewer(P.container, { backgroundColor: x.viewerBg }), U.addModel(ct(Do(c.sdf, -j)), "sdf"), U.addModel(ct(Do(r.sdf, j)), "sdf"), U.addModel(ct(c.sdf), "sdf"), U.addModel(ct(r.sdf), "sdf"), U.setStyle({}, { stick: { radius: 0.12, colorscheme: "Jmol" } }), ue(), U.zoomTo(), U.render(), ne = nr(P.container, U);
    }).catch((C) => {
      P.container.replaceChildren(ie(`3D render failed: ${me(C)}`, !0));
    });
    const B = z(
      "div",
      `flex-shrink:0;max-height:96px;overflow:auto;padding:8px 14px;font-size:11px;line-height:1.6;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;color:${x.textMuted};background:${x.panelBg};border-top:1px solid ${x.toolbarBorder};`
    );
    B.textContent = g.size ? Array.from(g, ([C, T]) => `${C} -> ${T}`).join("   ") : "This mapping relates no atoms at all.", t.appendChild(B);
    const F = Object.entries(n.annotations ?? {}).filter(([C]) => C !== "score");
    if (F.length) {
      const C = z(
        "div",
        `flex-shrink:0;padding:6px 14px;font-size:11px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;color:${x.textMuted2};background:${x.panelBg};border-top:1px solid ${x.toolbarBorder};`
      );
      C.textContent = F.map(([T, K]) => `${T}: ${String(K)}`).join("    "), t.appendChild(C);
    }
    let V = null;
    const M = (C, T, K) => {
      if (!V) return;
      const { atoms: G, colors: te } = zc(K, S), Z = vc(V, T, qo, G, te);
      C.replaceChildren(), Z ? ci(C, Z, qo) : C.appendChild(ie("Failed to parse molecule", !0));
    }, v = () => {
      M(l, c.sdf, y), M(f, r.sdf, _);
    };
    return l.appendChild(ie("Loading 2D depiction...")), f.appendChild(ie("Loading 2D depiction...")), tr().then((C) => {
      V = C, v();
    }).catch((C) => {
      const T = `RDKit failed to load: ${me(C)}`;
      l.replaceChildren(ie(T, !0)), f.replaceChildren(ie(T, !0));
    }), {
      onResize() {
        U && (U.resize(), U.render());
      },
      cleanup() {
        if (ne?.cleanup(), ne = null, !!U) {
          try {
            U.clear();
          } catch {
          }
          U = null;
        }
      }
    };
  }
}
Se("gufe-atom-mapping", Dc);
const qc = ["Force-directed", "Circular", "Radial"], hn = 34, cn = 200, zn = 1.5, Vc = 6, Bc = 16, Lo = { captions: 0.5, depictions: 1.1 }, ln = 200, ve = {
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
function Lc(e) {
  const t = parseInt(e.replace("#", ""), 16);
  return [t >> 16 & 255, t >> 8 & 255, t & 255];
}
function Uc(e) {
  const [t, n] = x.netEdgeRamp.map(Lc), o = Math.max(0, Math.min(1, e ?? 0.5));
  return `rgb(${t.map((r, s) => Math.round(r + (n[s] - r) * o)).join(",")})`;
}
const ze = Ze, Kc = (e, t) => e.length > t ? `${e.slice(0, t - 1)}...` : e;
function Gc(e) {
  const t = /* @__PURE__ */ new Set();
  let n = /* @__PURE__ */ new Set();
  const o = (r, s) => {
    if (t.has(s) || n.has(s)) return;
    const i = e.nodes[s], d = i.sdf && ai(r, i.sdf, cn);
    if (!d) {
      n.add(s);
      return;
    }
    const g = new DOMParser().parseFromString(d, "image/svg+xml").documentElement;
    if (!g || g.nodeName.toLowerCase() === "parsererror") {
      n.add(s);
      return;
    }
    const h = (hn - 4) * 2 / cn, w = e.depictionGroups[s];
    w.setAttribute(
      "transform",
      `translate(${-h * cn / 2},${-h * cn / 2}) scale(${h})`
    );
    let $ = 0;
    for (const y of Array.from(g.childNodes)) {
      if (y.nodeType !== 1) continue;
      const _ = y.nodeName.toLowerCase();
      if (!(_ === "defs" || _ === "metadata" || _ === "title")) {
        if (_ === "rect") {
          const S = (y.getAttribute("fill") ?? "").toLowerCase();
          if (S === "#ffffff" || S === "white" || S === "rgb(255,255,255)") continue;
        }
        w.appendChild(document.importNode(y, !0)), $++;
      }
    }
    $ ? t.add(s) : n.add(s);
  };
  return { apply: (r, s, i) => {
    const d = r >= Lo.captions;
    for (const y of e.captions)
      y.setAttribute("display", d ? "inline" : "none");
    const g = r >= Lo.depictions;
    for (let y = 0; y < e.nodes.length; y++) {
      const _ = g && t.has(y);
      e.depictionGroups[y].setAttribute("display", _ ? "inline" : "none"), e.initials[y].setAttribute("display", _ ? "none" : "inline");
    }
    if (!g) return;
    const { width: h, height: w } = e.viewport(), $ = [];
    e.nodes.forEach((y, _) => {
      if (t.has(_) || n.has(_)) return;
      const S = y.x * r + s, p = y.y * r + i;
      S < -ln || p < -ln || S > h + ln || p > w + ln || $.push(_);
    }), $.length && e.rdkit().then((y) => {
      if (y)
        for (const _ of $) {
          o(y, _);
          const S = t.has(_);
          e.depictionGroups[_].setAttribute("display", S ? "inline" : "none"), e.initials[_].setAttribute("display", S ? "none" : "inline");
        }
    }).catch(() => {
    });
  }, drawn: () => t.size };
}
class Hc extends we {
  placeholder() {
    return "Waiting for a LigandNetwork payload...";
  }
  renderView(t, n) {
    const o = dt(n), c = [];
    let r = 0;
    for (const A of n.nodes ?? []) {
      const O = Pe(o, A, "SmallMoleculeComponentViz");
      if (!O) {
        r++;
        continue;
      }
      c.push({ ...O, x: 0, y: 0 });
    }
    const s = new Map(c.map((A) => [A["gufe-key"], A])), i = [];
    let d = 0;
    for (const A of n.edges ?? []) {
      const O = s.get(A.componentA), j = s.get(A.componentB);
      if (!O || !j) {
        d++;
        continue;
      }
      i.push({ ...A, index: i.length, from: O, to: j });
    }
    const g = Fe(n.name || "Ligand network", "LigandNetwork");
    g.statsEl.appendChild(se("ligands", String(c.length))), g.statsEl.appendChild(se("mappings", String(i.length))), t.appendChild(g);
    const h = z("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    t.appendChild(h);
    const w = z("div", `flex:1 1 58%;min-width:0;display:flex;flex-direction:column;background:${x.netCanvasBg};`), $ = z("div", `flex:1 1 42%;min-width:0;display:flex;flex-direction:column;background:${x.appBg};`);
    h.appendChild(w), h.appendChild(z("div", `width:1px;flex-shrink:0;background:${x.splitBorder};`)), h.appendChild($);
    const y = z("div", `flex:1;position:relative;overflow:hidden;min-height:0;background:${x.netCanvasBg};`);
    w.appendChild(y);
    const _ = this.#t(
      (A) => P(A),
      () => f()
    );
    w.appendChild(_.bar);
    const S = this.#e($, o);
    if (!c.length)
      return y.appendChild(
        ie(
          r ? "None of this network's ligands are in its registry." : "This network has no ligands."
        )
      ), S.message("Nothing to show."), {};
    r && De(
      y,
      `${r} ligand${r === 1 ? "" : "s"} named by this network are not in its registry`
    ), d && De(y, `${d} mapping${d === 1 ? "" : "s"} name a ligand this network does not contain`);
    const p = tr().catch((A) => (console.warn("[gufe-viz] RDKit failed to load:", me(A)), null));
    let m = i.length ? 0 : -1, u = null, b = "Force-directed", k = !1, a = !0, l = () => {
    }, f = () => {
    };
    const E = (A) => {
      m = A, S.show(i[A] ?? null), l();
    }, P = (A = b) => {
      b = A, u?.(), u = null, y.querySelector("svg")?.remove();
      const O = y.clientWidth || 800, j = y.clientHeight || 600;
      Jc(c, O, j, b, i);
      const D = () => {
        if (!a) return;
        const U = this.#r(y, c, i, O, j, E, p);
        l = () => U.setSelected(m), f = U.reset, u = U.cleanup, l(), U.setDetail(1, 0, 0);
      };
      if (b !== "Force-directed" || k) {
        D();
        return;
      }
      Wc(c, i, O, j).then((U) => {
        if (a) {
          if (U) {
            D();
            return;
          }
          k = !0, _.picker.value = "Circular", De(y, "d3 could not be loaded - showing the circular layout instead"), P("Circular");
        }
      }, D);
    };
    return P(), S.show(i[m] ?? null), {
      onResize: () => P(),
      cleanup: () => {
        a = !1, u?.();
      }
    };
  }
  #t(t, n) {
    const o = z(
      "div",
      `display:flex;align-items:center;gap:10px;flex-wrap:wrap;padding:8px 14px;flex-shrink:0;background:${x.toolbarBg};border-top:1px solid ${x.toolbarBorder};`
    ), c = z("div", `display:flex;align-items:center;gap:6px;font-size:11px;color:${x.textMuted};`);
    c.appendChild(z("span", "", "score")), c.appendChild(
      z(
        "span",
        `width:40px;height:4px;border-radius:2px;background:linear-gradient(to right,${x.netEdgeRamp.join(",")});`
      )
    ), c.appendChild(z("span", "", "0 -> 1")), o.appendChild(c), o.appendChild(z("label", `font-size:12px;margin-left:auto;color:${x.textMuted};`, "Layout"));
    const r = z("select", Ko);
    for (const s of qc) {
      const i = z("option", "", s);
      i.value = s, r.appendChild(i);
    }
    return r.onchange = () => t(r.value), o.appendChild(r), o.appendChild(_n(n, "Reset pan and zoom")), { bar: o, picker: r };
  }
  /** The right-hand pane: what the selected mapping is, in words and pictures. */
  #e(t, n) {
    const o = z(
      "div",
      `flex-shrink:0;padding:4px 10px;font-size:12px;font-weight:bold;color:${x.labelFg};background:${x.labelBg};`,
      "Selected mapping"
    ), c = z("div", "flex:1;min-height:0;overflow:auto;display:flex;flex-direction:column;");
    t.appendChild(o), t.appendChild(c);
    const r = (i) => c.replaceChildren(ie(i));
    return { show: (i) => {
      if (!i) {
        r("Click an edge to see its mapping.");
        return;
      }
      c.replaceChildren();
      const d = z(
        "div",
        `padding:10px 14px;font-size:13px;font-weight:600;color:${x.textPrimary};border-bottom:1px solid ${x.toolbarBorder};`,
        `${ze(i.from)} -> ${ze(i.to)}`
      );
      c.appendChild(d);
      const g = fi(i, n), h = document.createElement("gufe-atom-mapping");
      h.style.cssText = "flex:1;min-width:0;min-height:220px;display:flex;", h.payload = g, c.appendChild(h);
      const w = Object.entries(i.annotations ?? {}).filter(([$]) => $ !== "score");
      if (w.length) {
        const $ = z(
          "div",
          `padding:0 14px 12px;font-size:11px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;color:${x.textMuted2};`
        );
        for (const [y, _] of w)
          $.appendChild(z("div", "", `${y}: ${String(_)}`));
        c.appendChild($);
      }
    }, message: r };
  }
  /** Build the SVG for the current node positions. Returns the handles the
   * caller needs afterwards: selection, depictions, and teardown. */
  #r(t, n, o, c, r, s, i) {
    const d = oe("svg", { width: c, height: r, style: "display:block;touch-action:none;" }), g = oe("g");
    d.appendChild(g), t.appendChild(d);
    const h = [], w = oe("g"), $ = oe("g"), y = oe("g", { "pointer-events": "none" }), _ = oe("g");
    g.append(w, $, y, _);
    for (const l of o) {
      const f = Uc(l.score), E = oe("line", {
        stroke: x.netHaloColor,
        "stroke-width": zn + 12,
        "stroke-linecap": "round",
        opacity: 0,
        "pointer-events": "none"
      }), P = oe("line", {
        stroke: f,
        "stroke-width": zn + (l.score ?? 0.5) * (Vc - zn),
        "stroke-opacity": 0.9,
        "pointer-events": "none"
      }), A = Xe(
        oe("line", { stroke: "transparent", "stroke-width": Bc, style: "cursor:pointer;" }),
        `${ze(l.from)} -> ${ze(l.to)}${l.score == null ? "" : `
score ${l.score.toFixed(3)}`}`
      );
      if (A.addEventListener("click", (O) => {
        O.stopPropagation(), s(l.index);
      }), h.push(E), w.append(E, P), $.appendChild(A), l.score != null) {
        const O = oe("text", {
          "text-anchor": "middle",
          "dominant-baseline": "middle",
          "font-size": 10,
          "font-weight": 600,
          fill: x.netEdgeLabel
        });
        O.textContent = l.score.toFixed(2), y.appendChild(O);
      } else
        y.appendChild(oe("text"));
    }
    const S = [], p = [], m = [], u = n.map((l) => {
      const f = Xe(oe("g", { style: "cursor:grab;" }), `${ze(l)}
${l.smiles ?? ""}
${l["gufe-key"]}`);
      f.appendChild(
        oe("circle", {
          r: hn,
          fill: x.netNodeFill,
          stroke: x.netNodeStroke,
          "stroke-width": 1.5
        })
      );
      const E = oe("g", { "pointer-events": "none" });
      f.appendChild(E), S.push(E);
      const P = oe("text", {
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        "font-size": 16,
        "font-weight": 700,
        fill: x.netInitials,
        "pointer-events": "none"
      });
      P.textContent = ze(l).slice(0, 2).toUpperCase(), f.appendChild(P), p.push(P);
      const A = oe("text", {
        "text-anchor": "middle",
        y: hn + 14,
        "font-size": 11,
        "font-weight": 600,
        fill: x.netNodeLabel,
        "pointer-events": "none"
      });
      return A.textContent = Kc(ze(l), 16), A.setAttribute("display", "none"), m.push(A), f.appendChild(A), _.appendChild(f), f;
    }), b = () => {
      o.forEach((l, f) => {
        for (const P of [h[f], w.children[f * 2 + 1], $.children[f]]) {
          const A = P;
          A.setAttribute("x1", String(l.from.x)), A.setAttribute("y1", String(l.from.y)), A.setAttribute("x2", String(l.to.x)), A.setAttribute("y2", String(l.to.y));
        }
        const E = y.children[f];
        E.setAttribute("x", String((l.from.x + l.to.x) / 2)), E.setAttribute("y", String((l.from.y + l.to.y) / 2 - 8));
      }), n.forEach((l, f) => u[f].setAttribute("transform", `translate(${l.x},${l.y})`));
    };
    b();
    const k = Gc({
      nodes: n,
      captions: m,
      initials: p,
      depictionGroups: S,
      rdkit: () => i,
      viewport: () => ({ width: c, height: r })
    }), a = this.#n(d, g, n, u, b, k.apply);
    return {
      setSelected(l) {
        h.forEach((f, E) => f.setAttribute("opacity", E === l ? "0.95" : "0"));
      },
      setDetail: k.apply,
      depictionsDrawn: () => k.drawn(),
      reset: a.reset,
      cleanup: a.cleanup
    };
  }
  /** Wheel zoom, background pan, node drag - ~40 lines instead of d3-zoom and
   * d3-drag, and they keep working when d3 is unreachable. */
  #n(t, n, o, c, r, s) {
    let i = 1, d = 0, g = 0;
    const h = () => {
      n.setAttribute("transform", `translate(${d},${g}) scale(${i})`), s(i, d, g);
    }, $ = ii(t, {
      onZoom: (m) => {
        const u = t.getBoundingClientRect(), b = m.clientX - u.left, k = m.clientY - u.top, a = Math.min(5 / i, Math.max(0.15 / i, Math.exp(-m.deltaY * 2e-3)));
        d = b - (b - d) * a, g = k - (k - g) * a, i *= a, h();
      },
      hint: "Click the graph or hold Ctrl to zoom"
    });
    let y = null;
    const _ = (m) => {
      y = { x: m.clientX - d, y: m.clientY - g };
    }, S = (m) => {
      y && (d = m.clientX - y.x, g = m.clientY - y.y, h());
    }, p = () => {
      y = null;
    };
    return t.addEventListener("pointerdown", _), t.addEventListener("pointermove", S), t.addEventListener("pointerup", p), t.addEventListener("pointercancel", p), t.addEventListener("pointerleave", p), c.forEach((m, u) => {
      let b = null;
      m.addEventListener("pointerdown", (a) => {
        a.stopPropagation(), b = { x: a.clientX - o[u].x * i, y: a.clientY - o[u].y * i }, m.setPointerCapture(a.pointerId);
      }), m.addEventListener("pointermove", (a) => {
        b && (o[u].x = o[u].fx = (a.clientX - b.x) / i, o[u].y = o[u].fy = (a.clientY - b.y) / i, r());
      });
      const k = () => {
        b = null;
      };
      m.addEventListener("pointerup", k), m.addEventListener("pointercancel", k);
    }), {
      reset() {
        i = 1, d = 0, g = 0, h();
      },
      cleanup() {
        $.cleanup(), t.removeEventListener("pointerdown", _), t.removeEventListener("pointermove", S), t.removeEventListener("pointerup", p), t.removeEventListener("pointercancel", p), t.removeEventListener("pointerleave", p);
      }
    };
  }
}
function Jc(e, t, n, o, c) {
  const r = t / 2, s = n / 2, i = (d, g) => {
    d.forEach((h, w) => {
      const $ = 2 * Math.PI * w / Math.max(1, d.length) - Math.PI / 2;
      h.x = r + g * Math.cos($), h.y = s + g * Math.sin($), h.fx = o === "Force-directed" ? void 0 : h.x, h.fy = o === "Force-directed" ? void 0 : h.y;
    });
  };
  if (o === "Radial" && e.length) {
    const d = new Map(e.map((S) => [S["gufe-key"], []]));
    for (const S of c)
      d.get(S.from["gufe-key"]).push(S.to["gufe-key"]), d.get(S.to["gufe-key"]).push(S.from["gufe-key"]);
    const g = new Map(e.map((S) => [S["gufe-key"], S])), h = e.reduce(
      (S, p) => d.get(p["gufe-key"]).length > d.get(S["gufe-key"]).length ? p : S
    ), w = /* @__PURE__ */ new Set([h["gufe-key"]]);
    let $ = [h["gufe-key"]], y = 0;
    const _ = Math.min(t, n) * 0.18;
    for (; $.length; ) {
      i(
        $.map((p) => g.get(p)),
        y === 0 ? 0 : y * _ + 40
      );
      const S = [];
      for (const p of $)
        for (const m of d.get(p))
          w.has(m) || (w.add(m), S.push(m));
      $ = S, y++;
    }
    i(e.filter((S) => !w.has(S["gufe-key"])), Math.min(t, n) * 0.45);
    return;
  }
  i(e, Math.min(t, n) * 0.34);
}
async function Wc(e, t, n, o) {
  let c;
  try {
    if (c = await oi(), typeof c?.forceSimulation != "function") return !1;
  } catch {
    return !1;
  }
  const r = t.map((d) => ({ source: d.from["gufe-key"], target: d.to["gufe-key"], score: d.score })), s = c.forceSimulation(e).force(
    "link",
    c.forceLink(r).id((d) => d["gufe-key"]).distance((d) => ve.linkBaseDistance + (1 - (d.score ?? 0.5)) * ve.linkScoreBonus).strength(ve.linkStrength)
  ).force(
    "charge",
    c.forceManyBody().strength(ve.chargeStrength).distanceMin(ve.chargeDistanceMin).distanceMax(ve.chargeDistanceMax)
  ).force("center", c.forceCenter(n / 2, o / 2).strength(ve.centerStrength)).force("collision", c.forceCollide(hn + ve.collisionPadding).iterations(ve.collisionIterations)).force("x", c.forceX(n / 2).strength(ve.drift)).force("y", c.forceY(o / 2).strength(ve.drift)).stop(), i = Math.ceil(Math.log(s.alphaMin()) / Math.log(1 - s.alphaDecay()));
  for (let d = 0; d < i * ve.tickMultiplier; d++) s.tick();
  return !0;
}
Se("gufe-ligand-network", Hc);
const st = { width: 148, height: 46, radius: 10 }, We = {
  linkDistance: 220,
  linkStrength: 0.4,
  chargeStrength: -1200,
  collisionRadius: 110,
  collisionIterations: 3,
  tickMultiplier: 2
}, at = Ze;
function Yc(e, t) {
  return e.length > t ? `${e.slice(0, t - 1)}...` : e;
}
function Xc(e, t, n) {
  const o = Math.max(90, Math.min(t, n) * 0.36);
  e.forEach((c, r) => {
    const s = 2 * Math.PI * r / Math.max(1, e.length) - Math.PI / 2;
    c.x = t / 2 + o * Math.cos(s), c.y = n / 2 + o * Math.sin(s);
  });
}
async function Zc(e, t, n, o) {
  let c;
  try {
    if (c = await oi(), typeof c?.forceSimulation != "function") return !1;
  } catch {
    return !1;
  }
  const r = t.map((d) => ({ source: d.from["gufe-key"], target: d.to["gufe-key"] })), s = c.forceSimulation(e).force(
    "link",
    c.forceLink(r).id((d) => d["gufe-key"]).distance(We.linkDistance).strength(We.linkStrength)
  ).force("charge", c.forceManyBody().strength(We.chargeStrength)).force("center", c.forceCenter(n / 2, o / 2)).force("collision", c.forceCollide(We.collisionRadius).iterations(We.collisionIterations)).stop(), i = Math.ceil(Math.log(s.alphaMin()) / Math.log(1 - s.alphaDecay()));
  for (let d = 0; d < i * We.tickMultiplier; d++) s.tick();
  return !0;
}
class Qc extends we {
  placeholder() {
    return "Waiting for an AlchemicalNetwork payload...";
  }
  renderView(t, n) {
    const o = dt(n), c = [];
    let r = 0;
    for (const l of n.nodes ?? []) {
      const f = Pe(o, l, "ChemicalSystemViz");
      if (!f) {
        r++;
        continue;
      }
      c.push({ ...f, x: 0, y: 0 });
    }
    const s = new Map(c.map((l) => [l["gufe-key"], l])), i = [];
    let d = 0;
    for (const l of n.edges ?? []) {
      const f = s.get(l.stateA), E = s.get(l.stateB);
      if (!f || !E) {
        d++;
        continue;
      }
      i.push({ ...l, index: i.length, from: f, to: E });
    }
    const g = (l) => {
      const f = Pe(o, l.protocol, "ProtocolViz");
      return f?.gufe_type || f?.name || "";
    }, h = new Set(i.map(g).filter(Boolean)), w = Fe(n.name || "Alchemical network", "AlchemicalNetwork");
    w.statsEl.appendChild(se("systems", String(c.length))), w.statsEl.appendChild(se("transformations", String(i.length))), h.size && w.statsEl.appendChild(se("protocol", [...h].join(", "))), t.appendChild(w);
    const $ = z("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    t.appendChild($);
    const y = z("div", `flex:1 1 62%;min-width:0;position:relative;overflow:hidden;background:${x.netCanvasBg};`);
    $.appendChild(y), $.appendChild(z("div", `width:1px;flex-shrink:0;background:${x.splitBorder};`));
    const _ = z("div", `flex:1 1 38%;min-width:0;display:flex;flex-direction:column;background:${x.appBg};`);
    $.appendChild(_);
    const S = this.#t(_, o, g);
    if (!c.length)
      return y.appendChild(
        ie(
          r ? "None of this network's chemical systems are in its registry." : "This network has no chemical systems."
        )
      ), S.message("Nothing to show."), {};
    r && De(
      y,
      `${r} chemical system${r === 1 ? "" : "s"} named by this network are not in its registry`
    ), d && De(
      y,
      `${d} transformation${d === 1 ? "" : "s"} name a system this network does not contain`
    );
    let p = !0, m = !1, u = null, b = () => {
    };
    const k = (l, f) => {
      u = { kind: l, index: f }, S.show(l === "node" ? c[f] : i[f], l), b();
    }, a = () => {
      y.querySelector("svg")?.remove();
      const l = y.clientWidth || 800, f = y.clientHeight || 600;
      Xc(c, l, f);
      const E = () => {
        if (!p) return;
        const P = this.#e(y, c, i, l, f, k);
        b = () => P.setSelected(u), b();
      };
      if (m) {
        E();
        return;
      }
      Zc(c, i, l, f).then((P) => {
        p && (P || (m = !0, De(y, "d3 could not be loaded - showing the circular layout instead")), E());
      }, E);
    };
    return a(), k("node", 0), {
      onResize: () => a(),
      cleanup: () => {
        p = !1;
      }
    };
  }
  /** The right-hand pane: what the selected system or transformation is. */
  #t(t, n, o) {
    t.appendChild(
      z(
        "div",
        `flex-shrink:0;padding:4px 10px;font-size:12px;font-weight:bold;color:${x.labelFg};background:${x.labelBg};`,
        "Selected"
      )
    );
    const c = z("div", "flex:1;min-height:0;overflow:auto;display:flex;flex-direction:column;");
    t.appendChild(c);
    const r = (d) => c.replaceChildren(ie(d)), s = (d, g) => {
      const h = z(
        "div",
        `padding:10px 14px;border-bottom:1px solid ${x.toolbarBorder};display:flex;flex-direction:column;gap:4px;`
      );
      return h.appendChild(z("div", `font-size:13px;font-weight:600;color:${x.textPrimary};`, d)), h.appendChild(z("div", `font-size:11px;color:${x.textMuted2};`, g)), h;
    };
    return { show: (d, g) => {
      if (c.replaceChildren(), g === "node") {
        const $ = d;
        c.appendChild(s(at($), "ChemicalSystem"));
        const y = z("div", "display:flex;flex-direction:column;gap:6px;padding:12px 14px;"), _ = Object.entries($.components ?? {});
        for (const [S, p] of _) {
          const m = Ve(n, p), u = z(
            "div",
            `display:flex;align-items:center;gap:8px;padding:7px 10px;border-radius:8px;min-width:0;background:${x.cardBg};border:1px solid ${x.cardBorder};`
          );
          u.appendChild(z("span", `font-size:12px;font-weight:700;color:${x.textPrimary};`, S)), u.appendChild(
            z(
              "span",
              `font-size:11px;color:${x.textMuted};overflow-wrap:anywhere;min-width:0;`,
              m ? m.name || "(unnamed)" : "(not in the registry)"
            )
          );
          const b = lt(
            m ? m.type === "UnknownComponentViz" ? m.gufe_type : m.type.replace(/Viz$/, "") : "missing"
          );
          b.style.marginLeft = "auto", u.appendChild(b), y.appendChild(u);
        }
        _.length || y.appendChild(z("div", `font-size:12px;color:${x.textMuted2};`, "This system lists no components.")), c.appendChild(y), c.appendChild(
          z(
            "div",
            `padding:0 14px 12px;font-size:11px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;color:${x.textMuted2};overflow-wrap:anywhere;`,
            $["gufe-key"]
          )
        );
        return;
      }
      const h = d;
      c.appendChild(s(h.name || "Unnamed transformation", "Transformation"));
      const w = z("div", "display:flex;flex-direction:column;gap:8px;padding:12px 14px;");
      for (const [$, y] of [
        ["State A", at(h.from)],
        ["State B", at(h.to)],
        ["Protocol", o(h) || "-"]
      ]) {
        const _ = z("div", "display:flex;gap:10px;align-items:baseline;min-width:0;");
        _.appendChild(
          z(
            "span",
            `flex:0 0 76px;font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:${x.textMuted2};`,
            $
          )
        ), _.appendChild(z("span", `flex:1;min-width:0;font-size:12px;color:${x.textPrimary};overflow-wrap:anywhere;`, y)), w.appendChild(_);
      }
      c.appendChild(w), c.appendChild(
        z(
          "div",
          `padding:0 14px 12px;font-size:11px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;color:${x.textMuted2};overflow-wrap:anywhere;`,
          h["gufe-key"]
        )
      );
    }, message: r };
  }
  /** Build the SVG for the current positions, and hand back the selection hook. */
  #e(t, n, o, c, r, s) {
    const i = oe("svg", { width: c, height: r, style: "display:block;" });
    t.appendChild(i);
    const d = oe("g"), g = oe("g");
    i.append(d, g);
    const h = [];
    o.forEach(($, y) => {
      const _ = oe("line", {
        x1: $.from.x,
        y1: $.from.y,
        x2: $.to.x,
        y2: $.to.y,
        stroke: x.netEdgeLine,
        "stroke-width": 2,
        "stroke-linecap": "round",
        style: "cursor:pointer;"
      });
      Xe(_, $.name || "transformation"), _.addEventListener("click", () => s("edge", y)), d.appendChild(_), h.push(_);
      const S = oe("line", {
        x1: $.from.x,
        y1: $.from.y,
        x2: $.to.x,
        y2: $.to.y,
        stroke: "transparent",
        "stroke-width": 16,
        style: "cursor:pointer;"
      });
      S.addEventListener("click", () => s("edge", y)), d.appendChild(S);
    });
    const w = [];
    return n.forEach(($, y) => {
      const _ = oe("g", { style: "cursor:pointer;" }), S = oe("rect", {
        x: $.x - st.width / 2,
        y: $.y - st.height / 2,
        width: st.width,
        height: st.height,
        rx: st.radius,
        fill: x.cardBg,
        stroke: x.cardBorder,
        "stroke-width": 2
      });
      _.appendChild(S), w.push(S);
      const p = oe("text", {
        x: $.x,
        y: $.y - 2,
        "text-anchor": "middle",
        fill: x.netNodeLabel,
        "font-size": 12,
        "font-weight": 700,
        "font-family": "ui-sans-serif,system-ui,sans-serif"
      });
      p.textContent = Yc(at($), 20), _.appendChild(p);
      const m = Object.keys($.components ?? {}).length, u = oe("text", {
        x: $.x,
        y: $.y + 14,
        "text-anchor": "middle",
        fill: x.netInitials,
        "font-size": 10,
        "font-family": "ui-sans-serif,system-ui,sans-serif"
      });
      u.textContent = `${m} component${m === 1 ? "" : "s"}`, _.appendChild(u), Xe(_, at($)), _.addEventListener("click", () => s("node", y)), g.appendChild(_);
    }), {
      setSelected($) {
        w.forEach((y, _) => {
          const S = $?.kind === "node" && $.index === _;
          y.setAttribute("stroke", S ? x.cardBorderActive : x.cardBorder), y.setAttribute("stroke-width", S ? "3" : "2");
        }), h.forEach((y, _) => {
          const S = $?.kind === "edge" && $.index === _;
          y.setAttribute("stroke", S ? x.netHaloColor : x.netEdgeLine), y.setAttribute("stroke-width", S ? "4" : "2");
        });
      }
    };
  }
}
Se("gufe-alchemical-network", Qc);
function el(e) {
  return e.name || e.type.replace(/Viz$/, "");
}
function tl(e) {
  return e.type === "UnknownComponentViz" ? e.gufe_type : e.type.replace(/Viz$/, "");
}
class nl extends we {
  placeholder() {
    return "Waiting for a ChemicalSystem payload...";
  }
  renderView(t, n) {
    const o = dt(n), c = [], r = [];
    for (const [_, S] of Object.entries(n.components ?? {})) {
      const p = Ve(o, S);
      p ? c.push([_, p]) : r.push(_);
    }
    const s = Fe(n.name || "Chemical system", "ChemicalSystem");
    if (s.statsEl.appendChild(se("components", String(c.length))), t.appendChild(s), !c.length)
      return t.appendChild(
        ie(
          r.length ? "None of this system's components are in its registry." : "This chemical system has no components."
        )
      ), {};
    const i = z("div", "flex:1;min-height:0;position:relative;display:flex;flex-direction:row;");
    t.appendChild(i), r.length && De(
      i,
      `${r.length} component${r.length === 1 ? "" : "s"} named by this system (${r.join(", ")}) are not in its registry`
    );
    const d = z(
      "div",
      `flex:0 0 220px;min-width:0;overflow:auto;display:flex;flex-direction:column;gap:6px;padding:10px;background:${x.panelBg};border-right:1px solid ${x.splitBorder};`
    );
    i.appendChild(d);
    const g = z("div", "flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;");
    i.appendChild(g);
    const h = z("div", "flex:1;min-height:0;display:flex;");
    g.appendChild(h);
    const w = document.createElement("gufe-view");
    w.style.cssText = "flex:1;min-width:0;min-height:0;", h.appendChild(w);
    const $ = [], y = (_) => {
      $.forEach((S, p) => {
        const m = p === _;
        S.style.background = m ? x.cardBgActive : x.cardBg, S.style.borderColor = m ? x.cardBorderActive : x.cardBorder;
      }), w.payload = c[_][1];
    };
    return c.forEach(([_, S], p) => {
      const m = z(
        "button",
        `display:flex;flex-direction:column;align-items:flex-start;gap:4px;padding:8px 10px;text-align:left;border:1px solid ${x.cardBorder};border-radius:8px;background:${x.cardBg};cursor:pointer;font-family:inherit;font-size:12px;width:100%;`
      );
      m.appendChild(z("span", `font-weight:700;color:${x.textPrimary};`, _)), m.appendChild(z("span", `font-size:11px;color:${x.textMuted};`, el(S))), m.appendChild(lt(tl(S))), m.onclick = () => y(p), $.push(m), d.appendChild(m);
    }), y(0), {
      onResize: () => w.resize?.(),
      // Removing the nested view fires its own `disconnectedCallback`, which is
      // where whatever it mounted releases its viewers.
      cleanup: () => w.remove()
    };
  }
}
Se("gufe-chemical-system", nl);
class rl extends we {
  placeholder() {
    return "Waiting for a Protocol payload...";
  }
  renderView(t, n) {
    const o = Fe(n.gufe_type || n.name || "Protocol", "Protocol");
    o.statsEl.appendChild(lt(n.gufe_type)), t.appendChild(o);
    const c = z(
      "div",
      "flex:1;min-height:0;overflow:auto;display:flex;align-items:center;justify-content:center;padding:24px;"
    );
    t.appendChild(c);
    const r = un();
    return r.style.maxWidth = "460px", r.appendChild(Ee("gufe class", n.gufe_type, !0)), n.name && r.appendChild(Ee("Name", n.name)), r.appendChild(Ee("gufe key", n["gufe-key"], !0)), r.appendChild(
      z(
        "div",
        `padding-top:10px;font-size:11px;line-height:1.6;color:${x.textMuted2};`,
        "A Protocol's settings are not carried in this payload: they are large, deeply nested, and nothing draws them yet."
      )
    ), c.appendChild(r), {};
  }
}
Se("gufe-protocol", rl);
const _e = { width: 340, height: 260, padding: 14, radius: 12 }, ol = 150, il = 40, sl = 24;
function al(e) {
  let t = e >>> 0;
  return () => (t = t * 1664525 + 1013904223 >>> 0, t / 4294967296);
}
function cl(e) {
  const t = /-?\d+(\.\d+)?([eE][-+]?\d+)?/.exec(e ?? "");
  if (!t) return null;
  const n = Number(t[0]);
  return Number.isFinite(n) ? n : null;
}
function ll(e) {
  return e == null || e <= 0 ? 0 : Math.max(1, Math.min(sl, Math.round(e * il)));
}
function dl(e) {
  const t = oe("svg", {
    viewBox: `0 0 ${_e.width} ${_e.height}`,
    style: "width:100%;height:100%;max-width:100%;",
    role: "img"
  });
  Xe(t, `${e.smiles || "solvent"} box`), t.appendChild(
    oe("rect", {
      x: 1,
      y: 1,
      width: _e.width - 2,
      height: _e.height - 2,
      rx: _e.radius,
      fill: x.boxFill,
      stroke: x.boxStroke,
      "stroke-width": 1.5
    })
  );
  const n = al(1597463007), o = () => ({
    x: _e.padding + n() * (_e.width - 2 * _e.padding),
    y: _e.padding + n() * (_e.height - 2 * _e.padding)
  });
  for (let s = 0; s < ol; s++) {
    const { x: i, y: d } = o();
    t.appendChild(oe("circle", { cx: i, cy: d, r: 2.4, fill: x.textMuted2, "fill-opacity": 0.45 }));
  }
  const c = ll(cl(e.ion_concentration)), r = [
    [e.positive_ion, x.diffAdded],
    [e.negative_ion, x.diffRemoved]
  ];
  for (const [s, i] of r)
    for (let d = 0; d < c; d++) {
      const { x: g, y: h } = o(), w = oe("circle", { cx: g, cy: h, r: 5.5, fill: i, "fill-opacity": 0.85 });
      t.appendChild(Xe(w, s));
    }
  return t;
}
class ul extends we {
  placeholder() {
    return "Waiting for a SolventComponent payload...";
  }
  renderView(t, n) {
    const o = Fe(n.name || "Solvent", "SolventComponent");
    o.statsEl.appendChild(se("neutralized", n.neutralize ? "yes" : "no")), o.statsEl.appendChild(se(n.positive_ion, "", x.diffAdded)), o.statsEl.appendChild(se(n.negative_ion, "", x.diffRemoved)), t.appendChild(o);
    const c = z(
      "div",
      "flex:1;min-height:0;display:flex;flex-wrap:wrap;gap:16px;padding:16px;overflow:auto;align-items:flex-start;"
    );
    t.appendChild(c);
    const r = un();
    r.style.flex = "1 1 320px", r.appendChild(Ee("SMILES", n.smiles, !0)), r.appendChild(Ee("Positive ion", n.positive_ion)), r.appendChild(Ee("Negative ion", n.negative_ion)), r.appendChild(Ee("Ion concentration", n.ion_concentration)), r.appendChild(Ee("Neutralize", n.neutralize ? "yes" : "no")), c.appendChild(r);
    const s = un();
    return s.style.flex = "1 1 340px", s.style.alignItems = "center", s.appendChild(dl(n)), s.appendChild(
      z(
        "div",
        `padding-top:10px;font-size:11px;text-align:center;color:${x.textMuted2};`,
        "Schematic only: the dots show which ions are present, not how many."
      )
    ), c.appendChild(s), {};
  }
}
Se("gufe-solvent", ul);
const Vn = {
  unchanged: x.diffUnchanged,
  changed: x.diffChanged,
  added: x.diffAdded,
  removed: x.diffRemoved
};
function fl(e, t) {
  return e && !t ? "removed" : !e && t ? "added" : e === t ? "unchanged" : "changed";
}
function pl(e, t) {
  return [.../* @__PURE__ */ new Set([...Object.keys(e.components ?? {}), ...Object.keys(t.components ?? {})])].sort();
}
function hl(e) {
  if (!e) return null;
  const t = e.type === "UnknownComponentViz" ? e.gufe_type : e.type.replace(/Viz$/, "");
  return { name: e.name || "(unnamed)", type: t };
}
function Uo(e, t) {
  const n = z(
    "div",
    `flex:1 1 50%;min-width:0;display:flex;flex-direction:column;gap:4px;padding:8px 10px;border-radius:8px;background:${x.cardBg};border:1px solid ${x.cardBorder};`
  ), o = hl(e);
  return o ? (n.style.borderColor = t === "unchanged" ? x.cardBorder : Vn[t], n.appendChild(z("span", `font-size:12px;font-weight:600;color:${x.textPrimary};`, o.name)), n.appendChild(lt(o.type)), n) : (n.style.background = "transparent", n.style.borderStyle = "dashed", n.appendChild(z("span", `font-size:12px;color:${x.textMuted2};`, "absent")), n);
}
function ml(e, t) {
  const n = Ve(t, e.componentA), o = Ve(t, e.componentB);
  return `${n ? Ze(n) : "A"} to ${o ? Ze(o) : "B"}`;
}
class gl extends we {
  placeholder() {
    return "Waiting for a Transformation payload...";
  }
  renderView(t, n) {
    const o = dt(n), c = Pe(o, n.stateA, "ChemicalSystemViz"), r = Pe(o, n.stateB, "ChemicalSystemViz"), s = Pe(o, n.protocol, "ProtocolViz"), i = n.mappings ?? [], d = Fe(n.name || "Transformation", "Transformation");
    if (d.statsEl.appendChild(se("protocol", s?.gufe_type || s?.name || "-")), d.statsEl.appendChild(se("mappings", String(i.length))), t.appendChild(d), !c || !r)
      return t.appendChild(
        ie("This transformation names two chemical systems, and its registry does not hold them.")
      ), {};
    const g = pl(c, r), h = z("div", "flex:0 0 auto;max-height:45%;overflow:auto;padding:12px 14px;");
    t.appendChild(h);
    const w = z("div", "display:flex;gap:10px;padding:0 0 6px 120px;");
    for (const [p, m] of [
      ["State A", c],
      ["State B", r]
    ])
      w.appendChild(
        z(
          "div",
          `flex:1 1 50%;min-width:0;font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:${x.textMuted2};`,
          `${p}${m.name ? ` - ${m.name}` : ""}`
        )
      );
    h.appendChild(w);
    for (const p of g) {
      const m = c.components?.[p], u = r.components?.[p], b = fl(m, u), k = Ve(o, m), a = Ve(o, u), l = z("div", "display:flex;align-items:stretch;gap:10px;padding:4px 0;"), f = z("div", "flex:0 0 110px;display:flex;align-items:center;gap:6px;min-width:0;");
      f.appendChild(
        z("span", `width:8px;height:8px;border-radius:50%;flex-shrink:0;background:${Vn[b]};`)
      );
      const E = z("span", `font-size:12px;font-weight:700;color:${x.textPrimary};overflow-wrap:anywhere;`, p);
      E.title = b, f.appendChild(E), l.appendChild(f), l.appendChild(Uo(k, b)), l.appendChild(Uo(a, b)), h.appendChild(l);
    }
    const $ = z(
      "div",
      `display:flex;flex-wrap:wrap;gap:12px;padding:8px 0 0;font-size:11px;color:${x.textMuted};`
    );
    for (const p of ["unchanged", "changed", "added", "removed"])
      $.appendChild(se(p, "", Vn[p]));
    h.appendChild($);
    const y = z(
      "div",
      `flex-shrink:0;padding:4px 10px;font-size:12px;font-weight:bold;color:${x.labelFg};background:${x.labelBg};`,
      "Atom mapping"
    );
    if (t.appendChild(y), !i.length)
      return t.appendChild(
        ie(
          "This transformation carries no atom mapping - nothing here maps one small molecule onto another."
        )
      ), {};
    const _ = document.createElement("gufe-atom-mapping");
    _.style.cssText = "flex:1;min-height:0;min-width:0;";
    const S = (p) => {
      _.payload = fi(i[p], o);
    };
    if (S(0), i.length > 1) {
      const p = z(
        "div",
        `display:flex;align-items:center;gap:8px;padding:6px 10px;flex-shrink:0;font-size:11px;background:${x.toolbarBg};border-bottom:1px solid ${x.toolbarBorder};color:${x.textMuted};`
      );
      p.appendChild(
        mn(
          i.map((m, u) => ({
            id: String(u),
            label: m.name || ml(m, o)
          })),
          "0",
          (m) => S(Number(m))
        )
      ), t.appendChild(p);
    }
    return t.appendChild(_), {
      onResize: () => _.resize?.(),
      cleanup: () => _.remove()
    };
  }
}
Se("gufe-transformation", gl);
class yl extends we {
  placeholder() {
    return "Waiting for a component payload...";
  }
  renderView(t, n) {
    const o = Fe(n.name || "Unnamed component", "Component");
    o.statsEl.appendChild(lt(n.gufe_type)), t.appendChild(o);
    const c = z("div", "flex:1;min-height:0;overflow:auto;display:flex;align-items:center;justify-content:center;padding:24px;");
    t.appendChild(c);
    const r = un();
    return r.style.maxWidth = "460px", r.appendChild(
      z(
        "div",
        `font-size:14px;font-weight:600;padding-bottom:6px;color:${x.textPrimary};`,
        `There is no visualization for ${n.gufe_type}.`
      )
    ), r.appendChild(
      z(
        "div",
        `font-size:12px;line-height:1.6;padding-bottom:10px;color:${x.textMuted};`,
        "gufe lets a project define its own Component subclasses, so this is a component this build has never been taught to draw - not a broken payload. Everything gufe knows about it that survives serialization is below."
      )
    ), r.appendChild(Ee("Name", n.name || "(unnamed)")), r.appendChild(Ee("gufe class", n.gufe_type, !0)), c.appendChild(r), {};
  }
}
Se("gufe-unknown-component", yl);
function Cl(e, t) {
  let n = e.querySelector("gufe-view");
  return n || (n = document.createElement("gufe-view"), n.style.cssText = "display:block;width:100%;height:100%;", e.appendChild(n)), t !== void 0 && (n.payload = t), n;
}
export {
  mi as CHROME_OPEN_BY_DEFAULT,
  vi as DEBUG_ATTRIBUTE,
  $i as DEBUG_GLOBAL,
  uc as DEFAULT_ZOOM_BOUNDS,
  Qc as GufeAlchemicalNetwork,
  Dc as GufeAtomMapping,
  nl as GufeChemicalSystem,
  we as GufeElement,
  Hc as GufeLigandNetwork,
  Rc as GufeProtein,
  rl as GufeProtocol,
  bc as GufeSmallMolecule,
  ul as GufeSolvent,
  gl as GufeTransformation,
  yl as GufeUnknownComponent,
  sc as GufeView,
  Ie as MAPPING_COLORS,
  it as MAPPING_RAMP_3D,
  Sl as MAPPING_RAMP_NAME,
  $l as PAYLOAD_TYPES,
  bl as SCHEMA_TYPES,
  Xn as VIEW_TAGS,
  fc as boundedZoom,
  dt as buildRegistry,
  vl as chromeMenu,
  wi as debugEnabled,
  Se as defineElement,
  ni as describeProblem,
  fl as diffStatus,
  wl as dispatchProblem,
  Ze as entryLabel,
  oc as formatIssues,
  ii as guardWheel,
  Ci as logPayload,
  Ve as lookup,
  Pe as lookupOfType,
  fi as mappingPayloadFor,
  Cl as mount,
  cl as parseConcentration,
  Si as payloadJson,
  _n as resetControl,
  Bo as uniqueAtoms,
  _l as validateAs,
  rc as validatePayload,
  nr as viewerInteraction,
  hc as wheelFactor
};
