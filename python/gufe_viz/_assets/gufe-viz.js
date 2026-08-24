const or = {
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
function fi() {
  try {
    return globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches ?? !1;
  } catch {
    return !1;
  }
}
const x = fi() ? or.dark : or.light;
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
const tt = (e) => e.toLocaleString("en-US"), Ye = "-", Qe = `background:${x.btnBg};color:${x.btnFg};border:1px solid ${x.btnBorder};padding:4px 9px;font-size:11px;font-weight:bold;border-radius:3px;cursor:pointer;font-family:inherit;`, Lo = `background:${x.selectBg};color:${x.textPrimary};border:1px solid ${x.selectBorder};border-radius:6px;padding:4px 8px;font-size:12px;cursor:pointer;font-family:inherit;`;
function hn(e, t, n) {
  const o = z("div", "display:flex;gap:4px;"), c = e.map((r) => {
    const i = z("button", Qe, r.label);
    return i.title = r.title || r.label, i.onmouseover = () => {
      i.style.background = x.btnBgHover;
    }, i.onmouseout = () => {
      i.style.background = t === r.id ? x.btnBgActive : x.btnBg;
    }, i.onclick = () => {
      o.setActive(r.id), n(r.id);
    }, o.appendChild(i), { id: r.id, btn: i };
  });
  return o.setActive = (r) => {
    t = r, c.forEach((i) => {
      i.btn.style.background = i.id === t ? x.btnBgActive : x.btnBg;
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
function Vn() {
  const e = z("div", "flex:1;position:relative;min-height:0;min-width:0;"), t = z("div", "position:absolute;inset:0;");
  return t.dataset.gufeViewer = "", e.appendChild(t), { wrap: e, container: t };
}
const pi = !1;
function hi() {
  const e = z("span", "display:inline-flex;flex-direction:column;gap:2px;justify-content:center;");
  for (let t = 0; t < 3; t++)
    e.appendChild(z("span", `display:block;width:11px;height:1.5px;border-radius:1px;background:${x.btnFg};`));
  return e;
}
function ml(e, t, n = {}) {
  let o = n.open ?? pi, c = !1;
  const r = z("div", "flex-shrink:0;"), i = z("button", `${Qe}display:inline-flex;align-items:center;gap:6px;padding:4px 8px;`);
  i.appendChild(hi()), i.setAttribute("aria-label", n.label || "Toggle menu");
  const s = () => {
    o && !c && (c = !0, r.appendChild(t())), r.style.display = o ? "" : "none", i.style.background = o ? x.btnBgActive : x.btnBg, i.setAttribute("aria-expanded", String(o));
  }, d = (y) => {
    y !== o && (o = y, s(), n.onToggle?.(o));
  };
  return i.onclick = () => d(!o), i.onmouseover = () => {
    i.style.background = o ? x.btnBgActive : x.btnBgHover;
  }, i.onmouseout = () => {
    i.style.background = o ? x.btnBgActive : x.btnBg;
  }, e.toggleEl.appendChild(i), s(), {
    panel: r,
    isOpen: () => o,
    setOpen: d
  };
}
const mi = ["debug", "gufe-debug"], gi = "debug", yi = "GUFE_VIZ_DEBUG";
function vi() {
  return !!globalThis[yi];
}
function $i() {
  try {
    const e = globalThis.location?.search;
    if (!e) return !1;
    const t = new URLSearchParams(e);
    return mi.some((n) => t.has(n));
  } catch {
    return !1;
  }
}
function bi(e) {
  return e?.hasAttribute?.(gi) ? !0 : vi() || $i();
}
function _i(e) {
  try {
    return JSON.stringify(e, null, 2) ?? String(e);
  } catch (t) {
    return `<could not be stringified: ${me(t)}>`;
  }
}
function wi(e, t, n) {
  if (!bi(n)) return;
  const o = _i(t), c = t?.type, r = `[gufe-viz] ${e}${typeof c == "string" ? ` ${c}` : ""} (${o.length} chars)`, i = typeof console.groupCollapsed == "function";
  i ? console.groupCollapsed(r) : console.log(r), console.log(o), console.log(t), i && console.groupEnd?.();
}
const Si = 150;
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
      this.#o && clearTimeout(this.#o), this.#o = setTimeout(() => this.#e?.onResize?.(), Si);
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
function Ci(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ut = { exports: {} }, Cn = {}, xe = {}, je = {}, kn = {}, En = {}, Pn = {}, ir;
function fn() {
  return ir || (ir = 1, (function(e) {
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
        return (u = this._str) !== null && u !== void 0 ? u : this._str = this._items.reduce((g, w) => `${g}${w}`, "");
      }
      get names() {
        var u;
        return (u = this._names) !== null && u !== void 0 ? u : this._names = this._items.reduce((g, w) => (w instanceof n && (g[w.str] = (g[w.str] || 0) + 1), g), {});
      }
    }
    e._Code = o, e.nil = new o("");
    function c(m, ...u) {
      const g = [m[0]];
      let w = 0;
      for (; w < u.length; )
        s(g, u[w]), g.push(m[++w]);
      return new o(g);
    }
    e._ = c;
    const r = new o("+");
    function i(m, ...u) {
      const g = [b(m[0])];
      let w = 0;
      for (; w < u.length; )
        g.push(r), s(g, u[w]), g.push(r, b(m[++w]));
      return d(g), new o(g);
    }
    e.str = i;
    function s(m, u) {
      u instanceof o ? m.push(...u._items) : u instanceof n ? m.push(u) : m.push(_(u));
    }
    e.addCodeArg = s;
    function d(m) {
      let u = 1;
      for (; u < m.length - 1; ) {
        if (m[u] === r) {
          const g = y(m[u - 1], m[u + 1]);
          if (g !== void 0) {
            m.splice(u - 1, 3, g);
            continue;
          }
          m[u++] = "+";
        }
        u++;
      }
    }
    function y(m, u) {
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
      return u.emptyStr() ? m : m.emptyStr() ? u : i`${m}${u}`;
    }
    e.strConcat = h;
    function _(m) {
      return typeof m == "number" || typeof m == "boolean" || m === null ? m : b(Array.isArray(m) ? m.join(",") : m);
    }
    function $(m) {
      return new o(b(m));
    }
    e.stringify = $;
    function b(m) {
      return JSON.stringify(m).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    e.safeStringify = b;
    function S(m) {
      return typeof m == "string" && e.IDENTIFIER.test(m) ? new o(`.${m}`) : c`[${m}]`;
    }
    e.getProperty = S;
    function C(m) {
      if (typeof m == "string" && e.IDENTIFIER.test(m))
        return new o(`${m}`);
      throw new Error(`CodeGen: invalid export name: ${m}, use explicit $id name mapping`);
    }
    e.getEsmExportName = C;
    function f(m) {
      return new o(m.toString());
    }
    e.regexpCode = f;
  })(Pn)), Pn;
}
var xn = {}, sr;
function ar() {
  return sr || (sr = 1, (function(e) {
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
    class c {
      constructor({ prefixes: y, parent: h } = {}) {
        this._names = {}, this._prefixes = y, this._parent = h;
      }
      toName(y) {
        return y instanceof t.Name ? y : this.name(y);
      }
      name(y) {
        return new t.Name(this._newName(y));
      }
      _newName(y) {
        const h = this._names[y] || this._nameGroup(y);
        return `${y}${h.index++}`;
      }
      _nameGroup(y) {
        var h, _;
        if (!((_ = (h = this._parent) === null || h === void 0 ? void 0 : h._prefixes) === null || _ === void 0) && _.has(y) || this._prefixes && !this._prefixes.has(y))
          throw new Error(`CodeGen: prefix "${y}" is not allowed in this scope`);
        return this._names[y] = { prefix: y, index: 0 };
      }
    }
    e.Scope = c;
    class r extends t.Name {
      constructor(y, h) {
        super(h), this.prefix = y;
      }
      setValue(y, { property: h, itemIndex: _ }) {
        this.value = y, this.scopePath = (0, t._)`.${new t.Name(h)}[${_}]`;
      }
    }
    e.ValueScopeName = r;
    const i = (0, t._)`\n`;
    class s extends c {
      constructor(y) {
        super(y), this._values = {}, this._scope = y.scope, this.opts = { ...y, _n: y.lines ? i : t.nil };
      }
      get() {
        return this._scope;
      }
      name(y) {
        return new r(y, this._newName(y));
      }
      value(y, h) {
        var _;
        if (h.ref === void 0)
          throw new Error("CodeGen: ref must be passed in value");
        const $ = this.toName(y), { prefix: b } = $, S = (_ = h.key) !== null && _ !== void 0 ? _ : h.ref;
        let C = this._values[b];
        if (C) {
          const u = C.get(S);
          if (u)
            return u;
        } else
          C = this._values[b] = /* @__PURE__ */ new Map();
        C.set(S, $);
        const f = this._scope[b] || (this._scope[b] = []), m = f.length;
        return f[m] = h.ref, $.setValue(h, { property: b, itemIndex: m }), $;
      }
      getValue(y, h) {
        const _ = this._values[y];
        if (_)
          return _.get(h);
      }
      scopeRefs(y, h = this._values) {
        return this._reduceValues(h, (_) => {
          if (_.scopePath === void 0)
            throw new Error(`CodeGen: name "${_}" has no value`);
          return (0, t._)`${y}${_.scopePath}`;
        });
      }
      scopeCode(y = this._values, h, _) {
        return this._reduceValues(y, ($) => {
          if ($.value === void 0)
            throw new Error(`CodeGen: name "${$}" has no value`);
          return $.value.code;
        }, h, _);
      }
      _reduceValues(y, h, _ = {}, $) {
        let b = t.nil;
        for (const S in y) {
          const C = y[S];
          if (!C)
            continue;
          const f = _[S] = _[S] || /* @__PURE__ */ new Map();
          C.forEach((m) => {
            if (f.has(m))
              return;
            f.set(m, o.Started);
            let u = h(m);
            if (u) {
              const g = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
              b = (0, t._)`${b}${g} ${m} = ${u};${this.opts._n}`;
            } else if (u = $?.(m))
              b = (0, t._)`${b}${u}${this.opts._n}`;
            else
              throw new n(m);
            f.set(m, o.Completed);
          });
        }
        return b;
      }
    }
    e.ValueScope = s;
  })(xn)), xn;
}
var cr;
function W() {
  return cr || (cr = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
    const t = /* @__PURE__ */ fn(), n = /* @__PURE__ */ ar();
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
    var c = /* @__PURE__ */ ar();
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
      optimizeNames(v, k) {
        return this;
      }
    }
    class i extends r {
      constructor(v, k, T) {
        super(), this.varKind = v, this.name = k, this.rhs = T;
      }
      render({ es5: v, _n: k }) {
        const T = v ? n.varKinds.var : this.varKind, K = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
        return `${T} ${this.name}${K};` + k;
      }
      optimizeNames(v, k) {
        if (v[this.name.str])
          return this.rhs && (this.rhs = L(this.rhs, v, k)), this;
      }
      get names() {
        return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
      }
    }
    class s extends r {
      constructor(v, k, T) {
        super(), this.lhs = v, this.rhs = k, this.sideEffects = T;
      }
      render({ _n: v }) {
        return `${this.lhs} = ${this.rhs};` + v;
      }
      optimizeNames(v, k) {
        if (!(this.lhs instanceof t.Name && !v[this.lhs.str] && !this.sideEffects))
          return this.rhs = L(this.rhs, v, k), this;
      }
      get names() {
        const v = this.lhs instanceof t.Name ? {} : { ...this.lhs.names };
        return D(v, this.rhs);
      }
    }
    class d extends s {
      constructor(v, k, T, K) {
        super(v, T, K), this.op = k;
      }
      render({ _n: v }) {
        return `${this.lhs} ${this.op}= ${this.rhs};` + v;
      }
    }
    class y extends r {
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
    class _ extends r {
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
      optimizeNames(v, k) {
        return this.code = L(this.code, v, k), this;
      }
      get names() {
        return this.code instanceof t._CodeOrName ? this.code.names : {};
      }
    }
    class b extends r {
      constructor(v = []) {
        super(), this.nodes = v;
      }
      render(v) {
        return this.nodes.reduce((k, T) => k + T.render(v), "");
      }
      optimizeNodes() {
        const { nodes: v } = this;
        let k = v.length;
        for (; k--; ) {
          const T = v[k].optimizeNodes();
          Array.isArray(T) ? v.splice(k, 1, ...T) : T ? v[k] = T : v.splice(k, 1);
        }
        return v.length > 0 ? this : void 0;
      }
      optimizeNames(v, k) {
        const { nodes: T } = this;
        let K = T.length;
        for (; K--; ) {
          const H = T[K];
          H.optimizeNames(v, k) || (Z(v, H.names), T.splice(K, 1));
        }
        return T.length > 0 ? this : void 0;
      }
      get names() {
        return this.nodes.reduce((v, k) => M(v, k.names), {});
      }
    }
    class S extends b {
      render(v) {
        return "{" + v._n + super.render(v) + "}" + v._n;
      }
    }
    class C extends b {
    }
    class f extends S {
    }
    f.kind = "else";
    class m extends S {
      constructor(v, k) {
        super(k), this.condition = v;
      }
      render(v) {
        let k = `if(${this.condition})` + super.render(v);
        return this.else && (k += "else " + this.else.render(v)), k;
      }
      optimizeNodes() {
        super.optimizeNodes();
        const v = this.condition;
        if (v === !0)
          return this.nodes;
        let k = this.else;
        if (k) {
          const T = k.optimizeNodes();
          k = this.else = Array.isArray(T) ? new f(T) : T;
        }
        if (k)
          return v === !1 ? k instanceof m ? k : k.nodes : this.nodes.length ? this : new m(te(v), k instanceof m ? [k] : k.nodes);
        if (!(v === !1 || !this.nodes.length))
          return this;
      }
      optimizeNames(v, k) {
        var T;
        if (this.else = (T = this.else) === null || T === void 0 ? void 0 : T.optimizeNames(v, k), !!(super.optimizeNames(v, k) || this.else))
          return this.condition = L(this.condition, v, k), this;
      }
      get names() {
        const v = super.names;
        return D(v, this.condition), this.else && M(v, this.else.names), v;
      }
    }
    m.kind = "if";
    class u extends S {
    }
    u.kind = "for";
    class g extends u {
      constructor(v) {
        super(), this.iteration = v;
      }
      render(v) {
        return `for(${this.iteration})` + super.render(v);
      }
      optimizeNames(v, k) {
        if (super.optimizeNames(v, k))
          return this.iteration = L(this.iteration, v, k), this;
      }
      get names() {
        return M(super.names, this.iteration.names);
      }
    }
    class w extends u {
      constructor(v, k, T, K) {
        super(), this.varKind = v, this.name = k, this.from = T, this.to = K;
      }
      render(v) {
        const k = v.es5 ? n.varKinds.var : this.varKind, { name: T, from: K, to: H } = this;
        return `for(${k} ${T}=${K}; ${T}<${H}; ${T}++)` + super.render(v);
      }
      get names() {
        const v = D(super.names, this.from);
        return D(v, this.to);
      }
    }
    class a extends u {
      constructor(v, k, T, K) {
        super(), this.loop = v, this.varKind = k, this.name = T, this.iterable = K;
      }
      render(v) {
        return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(v);
      }
      optimizeNames(v, k) {
        if (super.optimizeNames(v, k))
          return this.iterable = L(this.iterable, v, k), this;
      }
      get names() {
        return M(super.names, this.iterable.names);
      }
    }
    class l extends S {
      constructor(v, k, T) {
        super(), this.name = v, this.args = k, this.async = T;
      }
      render(v) {
        return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(v);
      }
    }
    l.kind = "func";
    class p extends b {
      render(v) {
        return "return " + super.render(v);
      }
    }
    p.kind = "return";
    class E extends S {
      render(v) {
        let k = "try" + super.render(v);
        return this.catch && (k += this.catch.render(v)), this.finally && (k += this.finally.render(v)), k;
      }
      optimizeNodes() {
        var v, k;
        return super.optimizeNodes(), (v = this.catch) === null || v === void 0 || v.optimizeNodes(), (k = this.finally) === null || k === void 0 || k.optimizeNodes(), this;
      }
      optimizeNames(v, k) {
        var T, K;
        return super.optimizeNames(v, k), (T = this.catch) === null || T === void 0 || T.optimizeNames(v, k), (K = this.finally) === null || K === void 0 || K.optimizeNames(v, k), this;
      }
      get names() {
        const v = super.names;
        return this.catch && M(v, this.catch.names), this.finally && M(v, this.finally.names), v;
      }
    }
    class P extends S {
      constructor(v) {
        super(), this.error = v;
      }
      render(v) {
        return `catch(${this.error})` + super.render(v);
      }
    }
    P.kind = "catch";
    class A extends S {
      render(v) {
        return "finally" + super.render(v);
      }
    }
    A.kind = "finally";
    class O {
      constructor(v, k = {}) {
        this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ...k, _n: k.lines ? `
` : "" }, this._extScope = v, this._scope = new n.Scope({ parent: v }), this._nodes = [new C()];
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
      scopeValue(v, k) {
        const T = this._extScope.value(v, k);
        return (this._values[T.prefix] || (this._values[T.prefix] = /* @__PURE__ */ new Set())).add(T), T;
      }
      getScopeValue(v, k) {
        return this._extScope.getValue(v, k);
      }
      // return code that assigns values in the external scope to the names that are used internally
      // (same names that were returned by gen.scopeName or gen.scopeValue)
      scopeRefs(v) {
        return this._extScope.scopeRefs(v, this._values);
      }
      scopeCode() {
        return this._extScope.scopeCode(this._values);
      }
      _def(v, k, T, K) {
        const H = this._scope.toName(k);
        return T !== void 0 && K && (this._constants[H.str] = T), this._leafNode(new i(v, H, T)), H;
      }
      // `const` declaration (`var` in es5 mode)
      const(v, k, T) {
        return this._def(n.varKinds.const, v, k, T);
      }
      // `let` declaration with optional assignment (`var` in es5 mode)
      let(v, k, T) {
        return this._def(n.varKinds.let, v, k, T);
      }
      // `var` declaration with optional assignment
      var(v, k, T) {
        return this._def(n.varKinds.var, v, k, T);
      }
      // assignment code
      assign(v, k, T) {
        return this._leafNode(new s(v, k, T));
      }
      // `+=` code
      add(v, k) {
        return this._leafNode(new d(v, e.operators.ADD, k));
      }
      // appends passed SafeExpr to code or executes Block
      code(v) {
        return typeof v == "function" ? v() : v !== t.nil && this._leafNode(new $(v)), this;
      }
      // returns code for object literal for the passed argument list of key-value pairs
      object(...v) {
        const k = ["{"];
        for (const [T, K] of v)
          k.length > 1 && k.push(","), k.push(T), (T !== K || this.opts.es5) && (k.push(":"), (0, t.addCodeArg)(k, K));
        return k.push("}"), new t._Code(k);
      }
      // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
      if(v, k, T) {
        if (this._blockNode(new m(v)), k && T)
          this.code(k).else().code(T).endIf();
        else if (k)
          this.code(k).endIf();
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
        return this._elseNode(new f());
      }
      // end `if` statement (needed if gen.if was used only with condition)
      endIf() {
        return this._endBlockNode(m, f);
      }
      _for(v, k) {
        return this._blockNode(v), k && this.code(k).endFor(), this;
      }
      // a generic `for` clause (or statement if `forBody` is passed)
      for(v, k) {
        return this._for(new g(v), k);
      }
      // `for` statement for a range of values
      forRange(v, k, T, K, H = this.opts.es5 ? n.varKinds.var : n.varKinds.let) {
        const ne = this._scope.toName(v);
        return this._for(new w(H, ne, k, T), () => K(ne));
      }
      // `for-of` statement (in es5 mode replace with a normal for loop)
      forOf(v, k, T, K = n.varKinds.const) {
        const H = this._scope.toName(v);
        if (this.opts.es5) {
          const ne = k instanceof t.Name ? k : this.var("_arr", k);
          return this.forRange("_i", 0, (0, t._)`${ne}.length`, (Q) => {
            this.var(H, (0, t._)`${ne}[${Q}]`), T(H);
          });
        }
        return this._for(new a("of", K, H, k), () => T(H));
      }
      // `for-in` statement.
      // With option `ownProperties` replaced with a `for-of` loop for object keys
      forIn(v, k, T, K = this.opts.es5 ? n.varKinds.var : n.varKinds.const) {
        if (this.opts.ownProperties)
          return this.forOf(v, (0, t._)`Object.keys(${k})`, T);
        const H = this._scope.toName(v);
        return this._for(new a("in", K, H, k), () => T(H));
      }
      // end `for` loop
      endFor() {
        return this._endBlockNode(u);
      }
      // `label` statement
      label(v) {
        return this._leafNode(new y(v));
      }
      // `break` statement
      break(v) {
        return this._leafNode(new h(v));
      }
      // `return` statement
      return(v) {
        const k = new p();
        if (this._blockNode(k), this.code(v), k.nodes.length !== 1)
          throw new Error('CodeGen: "return" should have one node');
        return this._endBlockNode(p);
      }
      // `try` statement
      try(v, k, T) {
        if (!k && !T)
          throw new Error('CodeGen: "try" without "catch" and "finally"');
        const K = new E();
        if (this._blockNode(K), this.code(v), k) {
          const H = this.name("e");
          this._currNode = K.catch = new P(H), k(H);
        }
        return T && (this._currNode = K.finally = new A(), this.code(T)), this._endBlockNode(P, A);
      }
      // `throw` statement
      throw(v) {
        return this._leafNode(new _(v));
      }
      // start self-balancing block
      block(v, k) {
        return this._blockStarts.push(this._nodes.length), v && this.code(v).endBlock(k), this;
      }
      // end the current self-balancing block
      endBlock(v) {
        const k = this._blockStarts.pop();
        if (k === void 0)
          throw new Error("CodeGen: not in self-balancing block");
        const T = this._nodes.length - k;
        if (T < 0 || v !== void 0 && T !== v)
          throw new Error(`CodeGen: wrong number of nodes: ${T} vs ${v} expected`);
        return this._nodes.length = k, this;
      }
      // `function` heading (or definition if funcBody is passed)
      func(v, k = t.nil, T, K) {
        return this._blockNode(new l(v, k, T)), K && this.code(K).endFunc(), this;
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
      _endBlockNode(v, k) {
        const T = this._currNode;
        if (T instanceof v || k && T instanceof k)
          return this._nodes.pop(), this;
        throw new Error(`CodeGen: not in block "${k ? `${v.kind}/${k.kind}` : v.kind}"`);
      }
      _elseNode(v) {
        const k = this._currNode;
        if (!(k instanceof m))
          throw new Error('CodeGen: "else" without "if"');
        return this._currNode = k.else = v, this;
      }
      get _root() {
        return this._nodes[0];
      }
      get _currNode() {
        const v = this._nodes;
        return v[v.length - 1];
      }
      set _currNode(v) {
        const k = this._nodes;
        k[k.length - 1] = v;
      }
    }
    e.CodeGen = O;
    function M(j, v) {
      for (const k in v)
        j[k] = (j[k] || 0) + (v[k] || 0);
      return j;
    }
    function D(j, v) {
      return v instanceof t._CodeOrName ? M(j, v.names) : j;
    }
    function L(j, v, k) {
      if (j instanceof t.Name)
        return T(j);
      if (!K(j))
        return j;
      return new t._Code(j._items.reduce((H, ne) => (ne instanceof t.Name && (ne = T(ne)), ne instanceof t._Code ? H.push(...ne._items) : H.push(ne), H), []));
      function T(H) {
        const ne = k[H.str];
        return ne === void 0 || v[H.str] !== 1 ? H : (delete v[H.str], ne);
      }
      function K(H) {
        return H instanceof t._Code && H._items.some((ne) => ne instanceof t.Name && v[ne.str] === 1 && k[ne.str] !== void 0);
      }
    }
    function Z(j, v) {
      for (const k in v)
        j[k] = (j[k] || 0) - (v[k] || 0);
    }
    function te(j) {
      return typeof j == "boolean" || typeof j == "number" || j === null ? !j : (0, t._)`!${V(j)}`;
    }
    e.not = te;
    const ue = F(e.operators.AND);
    function J(...j) {
      return j.reduce(ue);
    }
    e.and = J;
    const ae = F(e.operators.OR);
    function B(...j) {
      return j.reduce(ae);
    }
    e.or = B;
    function F(j) {
      return (v, k) => v === t.nil ? k : k === t.nil ? v : (0, t._)`${V(v)} ${j} ${V(k)}`;
    }
    function V(j) {
      return j instanceof t.Name ? j : (0, t._)`(${j})`;
    }
  })(En)), En;
}
var Y = {}, lr;
function ee() {
  if (lr) return Y;
  lr = 1, Object.defineProperty(Y, "__esModule", { value: !0 }), Y.checkStrictMode = Y.getErrorPath = Y.Type = Y.useFunc = Y.setEvaluated = Y.evaluatedPropsToName = Y.mergeEvaluated = Y.eachItem = Y.unescapeJsonPointer = Y.escapeJsonPointer = Y.escapeFragment = Y.unescapeFragment = Y.schemaRefOrVal = Y.schemaHasRulesButRef = Y.schemaHasRules = Y.checkUnknownRules = Y.alwaysValidSchema = Y.toHash = void 0;
  const e = /* @__PURE__ */ W(), t = /* @__PURE__ */ fn();
  function n(a) {
    const l = {};
    for (const p of a)
      l[p] = !0;
    return l;
  }
  Y.toHash = n;
  function o(a, l) {
    return typeof l == "boolean" ? l : Object.keys(l).length === 0 ? !0 : (c(a, l), !r(l, a.self.RULES.all));
  }
  Y.alwaysValidSchema = o;
  function c(a, l = a.schema) {
    const { opts: p, self: E } = a;
    if (!p.strictSchema || typeof l == "boolean")
      return;
    const P = E.RULES.keywords;
    for (const A in l)
      P[A] || w(a, `unknown keyword: "${A}"`);
  }
  Y.checkUnknownRules = c;
  function r(a, l) {
    if (typeof a == "boolean")
      return !a;
    for (const p in a)
      if (l[p])
        return !0;
    return !1;
  }
  Y.schemaHasRules = r;
  function i(a, l) {
    if (typeof a == "boolean")
      return !a;
    for (const p in a)
      if (p !== "$ref" && l.all[p])
        return !0;
    return !1;
  }
  Y.schemaHasRulesButRef = i;
  function s({ topSchemaRef: a, schemaPath: l }, p, E, P) {
    if (!P) {
      if (typeof p == "number" || typeof p == "boolean")
        return p;
      if (typeof p == "string")
        return (0, e._)`${p}`;
    }
    return (0, e._)`${a}${l}${(0, e.getProperty)(E)}`;
  }
  Y.schemaRefOrVal = s;
  function d(a) {
    return _(decodeURIComponent(a));
  }
  Y.unescapeFragment = d;
  function y(a) {
    return encodeURIComponent(h(a));
  }
  Y.escapeFragment = y;
  function h(a) {
    return typeof a == "number" ? `${a}` : a.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  Y.escapeJsonPointer = h;
  function _(a) {
    return a.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  Y.unescapeJsonPointer = _;
  function $(a, l) {
    if (Array.isArray(a))
      for (const p of a)
        l(p);
    else
      l(a);
  }
  Y.eachItem = $;
  function b({ mergeNames: a, mergeToName: l, mergeValues: p, resultToName: E }) {
    return (P, A, O, M) => {
      const D = O === void 0 ? A : O instanceof e.Name ? (A instanceof e.Name ? a(P, A, O) : l(P, A, O), O) : A instanceof e.Name ? (l(P, O, A), A) : p(A, O);
      return M === e.Name && !(D instanceof e.Name) ? E(P, D) : D;
    };
  }
  Y.mergeEvaluated = {
    props: b({
      mergeNames: (a, l, p) => a.if((0, e._)`${p} !== true && ${l} !== undefined`, () => {
        a.if((0, e._)`${l} === true`, () => a.assign(p, !0), () => a.assign(p, (0, e._)`${p} || {}`).code((0, e._)`Object.assign(${p}, ${l})`));
      }),
      mergeToName: (a, l, p) => a.if((0, e._)`${p} !== true`, () => {
        l === !0 ? a.assign(p, !0) : (a.assign(p, (0, e._)`${p} || {}`), C(a, p, l));
      }),
      mergeValues: (a, l) => a === !0 ? !0 : { ...a, ...l },
      resultToName: S
    }),
    items: b({
      mergeNames: (a, l, p) => a.if((0, e._)`${p} !== true && ${l} !== undefined`, () => a.assign(p, (0, e._)`${l} === true ? true : ${p} > ${l} ? ${p} : ${l}`)),
      mergeToName: (a, l, p) => a.if((0, e._)`${p} !== true`, () => a.assign(p, l === !0 ? !0 : (0, e._)`${p} > ${l} ? ${p} : ${l}`)),
      mergeValues: (a, l) => a === !0 ? !0 : Math.max(a, l),
      resultToName: (a, l) => a.var("items", l)
    })
  };
  function S(a, l) {
    if (l === !0)
      return a.var("props", !0);
    const p = a.var("props", (0, e._)`{}`);
    return l !== void 0 && C(a, p, l), p;
  }
  Y.evaluatedPropsToName = S;
  function C(a, l, p) {
    Object.keys(p).forEach((E) => a.assign((0, e._)`${l}${(0, e.getProperty)(E)}`, !0));
  }
  Y.setEvaluated = C;
  const f = {};
  function m(a, l) {
    return a.scopeValue("func", {
      ref: l,
      code: f[l.code] || (f[l.code] = new t._Code(l.code))
    });
  }
  Y.useFunc = m;
  var u;
  (function(a) {
    a[a.Num = 0] = "Num", a[a.Str = 1] = "Str";
  })(u || (Y.Type = u = {}));
  function g(a, l, p) {
    if (a instanceof e.Name) {
      const E = l === u.Num;
      return p ? E ? (0, e._)`"[" + ${a} + "]"` : (0, e._)`"['" + ${a} + "']"` : E ? (0, e._)`"/" + ${a}` : (0, e._)`"/" + ${a}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return p ? (0, e.getProperty)(a).toString() : "/" + h(a);
  }
  Y.getErrorPath = g;
  function w(a, l, p = a.opts.strictSchema) {
    if (p) {
      if (l = `strict mode: ${l}`, p === !0)
        throw new Error(l);
      a.self.logger.warn(l);
    }
  }
  return Y.checkStrictMode = w, Y;
}
var ft = {}, dr;
function Ce() {
  if (dr) return ft;
  dr = 1, Object.defineProperty(ft, "__esModule", { value: !0 });
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
var ur;
function mn() {
  return ur || (ur = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
    const t = /* @__PURE__ */ W(), n = /* @__PURE__ */ ee(), o = /* @__PURE__ */ Ce();
    e.keywordError = {
      message: ({ keyword: f }) => (0, t.str)`must pass "${f}" keyword validation`
    }, e.keyword$DataError = {
      message: ({ keyword: f, schemaType: m }) => m ? (0, t.str)`"${f}" keyword must be ${m} ($data)` : (0, t.str)`"${f}" keyword is invalid ($data)`
    };
    function c(f, m = e.keywordError, u, g) {
      const { it: w } = f, { gen: a, compositeRule: l, allErrors: p } = w, E = _(f, m, u);
      g ?? (l || p) ? d(a, E) : y(w, (0, t._)`[${E}]`);
    }
    e.reportError = c;
    function r(f, m = e.keywordError, u) {
      const { it: g } = f, { gen: w, compositeRule: a, allErrors: l } = g, p = _(f, m, u);
      d(w, p), a || l || y(g, o.default.vErrors);
    }
    e.reportExtraError = r;
    function i(f, m) {
      f.assign(o.default.errors, m), f.if((0, t._)`${o.default.vErrors} !== null`, () => f.if(m, () => f.assign((0, t._)`${o.default.vErrors}.length`, m), () => f.assign(o.default.vErrors, null)));
    }
    e.resetErrorsCount = i;
    function s({ gen: f, keyword: m, schemaValue: u, data: g, errsCount: w, it: a }) {
      if (w === void 0)
        throw new Error("ajv implementation error");
      const l = f.name("err");
      f.forRange("i", w, o.default.errors, (p) => {
        f.const(l, (0, t._)`${o.default.vErrors}[${p}]`), f.if((0, t._)`${l}.instancePath === undefined`, () => f.assign((0, t._)`${l}.instancePath`, (0, t.strConcat)(o.default.instancePath, a.errorPath))), f.assign((0, t._)`${l}.schemaPath`, (0, t.str)`${a.errSchemaPath}/${m}`), a.opts.verbose && (f.assign((0, t._)`${l}.schema`, u), f.assign((0, t._)`${l}.data`, g));
      });
    }
    e.extendErrors = s;
    function d(f, m) {
      const u = f.const("err", m);
      f.if((0, t._)`${o.default.vErrors} === null`, () => f.assign(o.default.vErrors, (0, t._)`[${u}]`), (0, t._)`${o.default.vErrors}.push(${u})`), f.code((0, t._)`${o.default.errors}++`);
    }
    function y(f, m) {
      const { gen: u, validateName: g, schemaEnv: w } = f;
      w.$async ? u.throw((0, t._)`new ${f.ValidationError}(${m})`) : (u.assign((0, t._)`${g}.errors`, m), u.return(!1));
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
    function _(f, m, u) {
      const { createErrors: g } = f.it;
      return g === !1 ? (0, t._)`{}` : $(f, m, u);
    }
    function $(f, m, u = {}) {
      const { gen: g, it: w } = f, a = [
        b(w, u),
        S(f, u)
      ];
      return C(f, m, a), g.object(...a);
    }
    function b({ errorPath: f }, { instancePath: m }) {
      const u = m ? (0, t.str)`${f}${(0, n.getErrorPath)(m, n.Type.Str)}` : f;
      return [o.default.instancePath, (0, t.strConcat)(o.default.instancePath, u)];
    }
    function S({ keyword: f, it: { errSchemaPath: m } }, { schemaPath: u, parentSchema: g }) {
      let w = g ? m : (0, t.str)`${m}/${f}`;
      return u && (w = (0, t.str)`${w}${(0, n.getErrorPath)(u, n.Type.Str)}`), [h.schemaPath, w];
    }
    function C(f, { params: m, message: u }, g) {
      const { keyword: w, data: a, schemaValue: l, it: p } = f, { opts: E, propertyName: P, topSchemaRef: A, schemaPath: O } = p;
      g.push([h.keyword, w], [h.params, typeof m == "function" ? m(f) : m || (0, t._)`{}`]), E.messages && g.push([h.message, typeof u == "function" ? u(f) : u]), E.verbose && g.push([h.schema, l], [h.parentSchema, (0, t._)`${A}${O}`], [o.default.data, a]), P && g.push([h.propertyName, P]);
    }
  })(kn)), kn;
}
var fr;
function ki() {
  if (fr) return je;
  fr = 1, Object.defineProperty(je, "__esModule", { value: !0 }), je.boolOrEmptySchema = je.topBoolOrEmptySchema = void 0;
  const e = /* @__PURE__ */ mn(), t = /* @__PURE__ */ W(), n = /* @__PURE__ */ Ce(), o = {
    message: "boolean schema is false"
  };
  function c(s) {
    const { gen: d, schema: y, validateName: h } = s;
    y === !1 ? i(s, !1) : typeof y == "object" && y.$async === !0 ? d.return(n.default.data) : (d.assign((0, t._)`${h}.errors`, null), d.return(!0));
  }
  je.topBoolOrEmptySchema = c;
  function r(s, d) {
    const { gen: y, schema: h } = s;
    h === !1 ? (y.var(d, !1), i(s)) : y.var(d, !0);
  }
  je.boolOrEmptySchema = r;
  function i(s, d) {
    const { gen: y, data: h } = s, _ = {
      gen: y,
      keyword: "false schema",
      data: h,
      schema: !1,
      schemaCode: !1,
      schemaValue: !1,
      params: {},
      it: s
    };
    (0, e.reportError)(_, o, void 0, d);
  }
  return je;
}
var de = {}, Oe = {}, pr;
function Uo() {
  if (pr) return Oe;
  pr = 1, Object.defineProperty(Oe, "__esModule", { value: !0 }), Oe.getRules = Oe.isJSONType = void 0;
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
var Re = {}, hr;
function Ko() {
  if (hr) return Re;
  hr = 1, Object.defineProperty(Re, "__esModule", { value: !0 }), Re.shouldUseRule = Re.shouldUseGroup = Re.schemaHasRulesForType = void 0;
  function e({ schema: o, self: c }, r) {
    const i = c.RULES.types[r];
    return i && i !== !0 && t(o, i);
  }
  Re.schemaHasRulesForType = e;
  function t(o, c) {
    return c.rules.some((r) => n(o, r));
  }
  Re.shouldUseGroup = t;
  function n(o, c) {
    var r;
    return o[c.keyword] !== void 0 || ((r = c.definition.implements) === null || r === void 0 ? void 0 : r.some((i) => o[i] !== void 0));
  }
  return Re.shouldUseRule = n, Re;
}
var mr;
function pn() {
  if (mr) return de;
  mr = 1, Object.defineProperty(de, "__esModule", { value: !0 }), de.reportTypeError = de.checkDataTypes = de.checkDataType = de.coerceAndCheckDataType = de.getJSONTypes = de.getSchemaTypes = de.DataType = void 0;
  const e = /* @__PURE__ */ Uo(), t = /* @__PURE__ */ Ko(), n = /* @__PURE__ */ mn(), o = /* @__PURE__ */ W(), c = /* @__PURE__ */ ee();
  var r;
  (function(u) {
    u[u.Correct = 0] = "Correct", u[u.Wrong = 1] = "Wrong";
  })(r || (de.DataType = r = {}));
  function i(u) {
    const g = s(u.type);
    if (g.includes("null")) {
      if (u.nullable === !1)
        throw new Error("type: null contradicts nullable: false");
    } else {
      if (!g.length && u.nullable !== void 0)
        throw new Error('"nullable" cannot be used without "type"');
      u.nullable === !0 && g.push("null");
    }
    return g;
  }
  de.getSchemaTypes = i;
  function s(u) {
    const g = Array.isArray(u) ? u : u ? [u] : [];
    if (g.every(e.isJSONType))
      return g;
    throw new Error("type must be JSONType or JSONType[]: " + g.join(","));
  }
  de.getJSONTypes = s;
  function d(u, g) {
    const { gen: w, data: a, opts: l } = u, p = h(g, l.coerceTypes), E = g.length > 0 && !(p.length === 0 && g.length === 1 && (0, t.schemaHasRulesForType)(u, g[0]));
    if (E) {
      const P = S(g, a, l.strictNumbers, r.Wrong);
      w.if(P, () => {
        p.length ? _(u, g, p) : f(u);
      });
    }
    return E;
  }
  de.coerceAndCheckDataType = d;
  const y = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
  function h(u, g) {
    return g ? u.filter((w) => y.has(w) || g === "array" && w === "array") : [];
  }
  function _(u, g, w) {
    const { gen: a, data: l, opts: p } = u, E = a.let("dataType", (0, o._)`typeof ${l}`), P = a.let("coerced", (0, o._)`undefined`);
    p.coerceTypes === "array" && a.if((0, o._)`${E} == 'object' && Array.isArray(${l}) && ${l}.length == 1`, () => a.assign(l, (0, o._)`${l}[0]`).assign(E, (0, o._)`typeof ${l}`).if(S(g, l, p.strictNumbers), () => a.assign(P, l))), a.if((0, o._)`${P} !== undefined`);
    for (const O of w)
      (y.has(O) || O === "array" && p.coerceTypes === "array") && A(O);
    a.else(), f(u), a.endIf(), a.if((0, o._)`${P} !== undefined`, () => {
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
  function $({ gen: u, parentData: g, parentDataProperty: w }, a) {
    u.if((0, o._)`${g} !== undefined`, () => u.assign((0, o._)`${g}[${w}]`, a));
  }
  function b(u, g, w, a = r.Correct) {
    const l = a === r.Correct ? o.operators.EQ : o.operators.NEQ;
    let p;
    switch (u) {
      case "null":
        return (0, o._)`${g} ${l} null`;
      case "array":
        p = (0, o._)`Array.isArray(${g})`;
        break;
      case "object":
        p = (0, o._)`${g} && typeof ${g} == "object" && !Array.isArray(${g})`;
        break;
      case "integer":
        p = E((0, o._)`!(${g} % 1) && !isNaN(${g})`);
        break;
      case "number":
        p = E();
        break;
      default:
        return (0, o._)`typeof ${g} ${l} ${u}`;
    }
    return a === r.Correct ? p : (0, o.not)(p);
    function E(P = o.nil) {
      return (0, o.and)((0, o._)`typeof ${g} == "number"`, P, w ? (0, o._)`isFinite(${g})` : o.nil);
    }
  }
  de.checkDataType = b;
  function S(u, g, w, a) {
    if (u.length === 1)
      return b(u[0], g, w, a);
    let l;
    const p = (0, c.toHash)(u);
    if (p.array && p.object) {
      const E = (0, o._)`typeof ${g} != "object"`;
      l = p.null ? E : (0, o._)`!${g} || ${E}`, delete p.null, delete p.array, delete p.object;
    } else
      l = o.nil;
    p.number && delete p.integer;
    for (const E in p)
      l = (0, o.and)(l, b(E, g, w, a));
    return l;
  }
  de.checkDataTypes = S;
  const C = {
    message: ({ schema: u }) => `must be ${u}`,
    params: ({ schema: u, schemaValue: g }) => typeof u == "string" ? (0, o._)`{type: ${u}}` : (0, o._)`{type: ${g}}`
  };
  function f(u) {
    const g = m(u);
    (0, n.reportError)(g, C);
  }
  de.reportTypeError = f;
  function m(u) {
    const { gen: g, data: w, schema: a } = u, l = (0, c.schemaRefOrVal)(u, a, "type");
    return {
      gen: g,
      keyword: "type",
      data: w,
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
var nt = {}, gr;
function Ei() {
  if (gr) return nt;
  gr = 1, Object.defineProperty(nt, "__esModule", { value: !0 }), nt.assignDefaults = void 0;
  const e = /* @__PURE__ */ W(), t = /* @__PURE__ */ ee();
  function n(c, r) {
    const { properties: i, items: s } = c.schema;
    if (r === "object" && i)
      for (const d in i)
        o(c, d, i[d].default);
    else r === "array" && Array.isArray(s) && s.forEach((d, y) => o(c, y, d.default));
  }
  nt.assignDefaults = n;
  function o(c, r, i) {
    const { gen: s, compositeRule: d, data: y, opts: h } = c;
    if (i === void 0)
      return;
    const _ = (0, e._)`${y}${(0, e.getProperty)(r)}`;
    if (d) {
      (0, t.checkStrictMode)(c, `default is ignored for: ${_}`);
      return;
    }
    let $ = (0, e._)`${_} === undefined`;
    h.useDefaults === "empty" && ($ = (0, e._)`${$} || ${_} === null || ${_} === ""`), s.if($, (0, e._)`${_} = ${(0, e.stringify)(i)}`);
  }
  return nt;
}
var be = {}, re = {}, yr;
function ke() {
  if (yr) return re;
  yr = 1, Object.defineProperty(re, "__esModule", { value: !0 }), re.validateUnion = re.validateArray = re.usePattern = re.callValidateCode = re.schemaProperties = re.allSchemaProperties = re.noPropertyInData = re.propertyInData = re.isOwnProperty = re.hasPropFunc = re.reportMissingProp = re.checkMissingProp = re.checkReportMissingProp = void 0;
  const e = /* @__PURE__ */ W(), t = /* @__PURE__ */ ee(), n = /* @__PURE__ */ Ce(), o = /* @__PURE__ */ ee();
  function c(u, g) {
    const { gen: w, data: a, it: l } = u;
    w.if(h(w, a, g, l.opts.ownProperties), () => {
      u.setParams({ missingProperty: (0, e._)`${g}` }, !0), u.error();
    });
  }
  re.checkReportMissingProp = c;
  function r({ gen: u, data: g, it: { opts: w } }, a, l) {
    return (0, e.or)(...a.map((p) => (0, e.and)(h(u, g, p, w.ownProperties), (0, e._)`${l} = ${p}`)));
  }
  re.checkMissingProp = r;
  function i(u, g) {
    u.setParams({ missingProperty: g }, !0), u.error();
  }
  re.reportMissingProp = i;
  function s(u) {
    return u.scopeValue("func", {
      // eslint-disable-next-line @typescript-eslint/unbound-method
      ref: Object.prototype.hasOwnProperty,
      code: (0, e._)`Object.prototype.hasOwnProperty`
    });
  }
  re.hasPropFunc = s;
  function d(u, g, w) {
    return (0, e._)`${s(u)}.call(${g}, ${w})`;
  }
  re.isOwnProperty = d;
  function y(u, g, w, a) {
    const l = (0, e._)`${g}${(0, e.getProperty)(w)} !== undefined`;
    return a ? (0, e._)`${l} && ${d(u, g, w)}` : l;
  }
  re.propertyInData = y;
  function h(u, g, w, a) {
    const l = (0, e._)`${g}${(0, e.getProperty)(w)} === undefined`;
    return a ? (0, e.or)(l, (0, e.not)(d(u, g, w))) : l;
  }
  re.noPropertyInData = h;
  function _(u) {
    return u ? Object.keys(u).filter((g) => g !== "__proto__") : [];
  }
  re.allSchemaProperties = _;
  function $(u, g) {
    return _(g).filter((w) => !(0, t.alwaysValidSchema)(u, g[w]));
  }
  re.schemaProperties = $;
  function b({ schemaCode: u, data: g, it: { gen: w, topSchemaRef: a, schemaPath: l, errorPath: p }, it: E }, P, A, O) {
    const M = O ? (0, e._)`${u}, ${g}, ${a}${l}` : g, D = [
      [n.default.instancePath, (0, e.strConcat)(n.default.instancePath, p)],
      [n.default.parentData, E.parentData],
      [n.default.parentDataProperty, E.parentDataProperty],
      [n.default.rootData, n.default.rootData]
    ];
    E.opts.dynamicRef && D.push([n.default.dynamicAnchors, n.default.dynamicAnchors]);
    const L = (0, e._)`${M}, ${w.object(...D)}`;
    return A !== e.nil ? (0, e._)`${P}.call(${A}, ${L})` : (0, e._)`${P}(${L})`;
  }
  re.callValidateCode = b;
  const S = (0, e._)`new RegExp`;
  function C({ gen: u, it: { opts: g } }, w) {
    const a = g.unicodeRegExp ? "u" : "", { regExp: l } = g.code, p = l(w, a);
    return u.scopeValue("pattern", {
      key: p.toString(),
      ref: p,
      code: (0, e._)`${l.code === "new RegExp" ? S : (0, o.useFunc)(u, l)}(${w}, ${a})`
    });
  }
  re.usePattern = C;
  function f(u) {
    const { gen: g, data: w, keyword: a, it: l } = u, p = g.name("valid");
    if (l.allErrors) {
      const P = g.let("valid", !0);
      return E(() => g.assign(P, !1)), P;
    }
    return g.var(p, !0), E(() => g.break()), p;
    function E(P) {
      const A = g.const("len", (0, e._)`${w}.length`);
      g.forRange("i", 0, A, (O) => {
        u.subschema({
          keyword: a,
          dataProp: O,
          dataPropType: t.Type.Num
        }, p), g.if((0, e.not)(p), P);
      });
    }
  }
  re.validateArray = f;
  function m(u) {
    const { gen: g, schema: w, keyword: a, it: l } = u;
    if (!Array.isArray(w))
      throw new Error("ajv implementation error");
    if (w.some((A) => (0, t.alwaysValidSchema)(l, A)) && !l.opts.unevaluated)
      return;
    const E = g.let("valid", !1), P = g.name("_valid");
    g.block(() => w.forEach((A, O) => {
      const M = u.subschema({
        keyword: a,
        schemaProp: O,
        compositeRule: !0
      }, P);
      g.assign(E, (0, e._)`${E} || ${P}`), u.mergeValidEvaluated(M, P) || g.if((0, e.not)(E));
    })), u.result(E, () => u.reset(), () => u.error(!0));
  }
  return re.validateUnion = m, re;
}
var vr;
function Pi() {
  if (vr) return be;
  vr = 1, Object.defineProperty(be, "__esModule", { value: !0 }), be.validateKeywordUsage = be.validSchemaType = be.funcKeywordCode = be.macroKeywordCode = void 0;
  const e = /* @__PURE__ */ W(), t = /* @__PURE__ */ Ce(), n = /* @__PURE__ */ ke(), o = /* @__PURE__ */ mn();
  function c($, b) {
    const { gen: S, keyword: C, schema: f, parentSchema: m, it: u } = $, g = b.macro.call(u.self, f, m, u), w = y(S, C, g);
    u.opts.validateSchema !== !1 && u.self.validateSchema(g, !0);
    const a = S.name("valid");
    $.subschema({
      schema: g,
      schemaPath: e.nil,
      errSchemaPath: `${u.errSchemaPath}/${C}`,
      topSchemaRef: w,
      compositeRule: !0
    }, a), $.pass(a, () => $.error(!0));
  }
  be.macroKeywordCode = c;
  function r($, b) {
    var S;
    const { gen: C, keyword: f, schema: m, parentSchema: u, $data: g, it: w } = $;
    d(w, b);
    const a = !g && b.compile ? b.compile.call(w.self, m, u, w) : b.validate, l = y(C, f, a), p = C.let("valid");
    $.block$data(p, E), $.ok((S = b.valid) !== null && S !== void 0 ? S : p);
    function E() {
      if (b.errors === !1)
        O(), b.modifying && i($), M(() => $.error());
      else {
        const D = b.async ? P() : A();
        b.modifying && i($), M(() => s($, D));
      }
    }
    function P() {
      const D = C.let("ruleErrs", null);
      return C.try(() => O((0, e._)`await `), (L) => C.assign(p, !1).if((0, e._)`${L} instanceof ${w.ValidationError}`, () => C.assign(D, (0, e._)`${L}.errors`), () => C.throw(L))), D;
    }
    function A() {
      const D = (0, e._)`${l}.errors`;
      return C.assign(D, null), O(e.nil), D;
    }
    function O(D = b.async ? (0, e._)`await ` : e.nil) {
      const L = w.opts.passContext ? t.default.this : t.default.self, Z = !("compile" in b && !g || b.schema === !1);
      C.assign(p, (0, e._)`${D}${(0, n.callValidateCode)($, l, L, Z)}`, b.modifying);
    }
    function M(D) {
      var L;
      C.if((0, e.not)((L = b.valid) !== null && L !== void 0 ? L : p), D);
    }
  }
  be.funcKeywordCode = r;
  function i($) {
    const { gen: b, data: S, it: C } = $;
    b.if(C.parentData, () => b.assign(S, (0, e._)`${C.parentData}[${C.parentDataProperty}]`));
  }
  function s($, b) {
    const { gen: S } = $;
    S.if((0, e._)`Array.isArray(${b})`, () => {
      S.assign(t.default.vErrors, (0, e._)`${t.default.vErrors} === null ? ${b} : ${t.default.vErrors}.concat(${b})`).assign(t.default.errors, (0, e._)`${t.default.vErrors}.length`), (0, o.extendErrors)($);
    }, () => $.error());
  }
  function d({ schemaEnv: $ }, b) {
    if (b.async && !$.$async)
      throw new Error("async keyword in sync schema");
  }
  function y($, b, S) {
    if (S === void 0)
      throw new Error(`keyword "${b}" failed to compile`);
    return $.scopeValue("keyword", typeof S == "function" ? { ref: S } : { ref: S, code: (0, e.stringify)(S) });
  }
  function h($, b, S = !1) {
    return !b.length || b.some((C) => C === "array" ? Array.isArray($) : C === "object" ? $ && typeof $ == "object" && !Array.isArray($) : typeof $ == C || S && typeof $ > "u");
  }
  be.validSchemaType = h;
  function _({ schema: $, opts: b, self: S, errSchemaPath: C }, f, m) {
    if (Array.isArray(f.keyword) ? !f.keyword.includes(m) : f.keyword !== m)
      throw new Error("ajv implementation error");
    const u = f.dependencies;
    if (u?.some((g) => !Object.prototype.hasOwnProperty.call($, g)))
      throw new Error(`parent schema must have dependencies of ${m}: ${u.join(",")}`);
    if (f.validateSchema && !f.validateSchema($[m])) {
      const w = `keyword "${m}" value is invalid at path "${C}": ` + S.errorsText(f.validateSchema.errors);
      if (b.validateSchema === "log")
        S.logger.error(w);
      else
        throw new Error(w);
    }
  }
  return be.validateKeywordUsage = _, be;
}
var Ae = {}, $r;
function xi() {
  if ($r) return Ae;
  $r = 1, Object.defineProperty(Ae, "__esModule", { value: !0 }), Ae.extendSubschemaMode = Ae.extendSubschemaData = Ae.getSubschema = void 0;
  const e = /* @__PURE__ */ W(), t = /* @__PURE__ */ ee();
  function n(r, { keyword: i, schemaProp: s, schema: d, schemaPath: y, errSchemaPath: h, topSchemaRef: _ }) {
    if (i !== void 0 && d !== void 0)
      throw new Error('both "keyword" and "schema" passed, only one allowed');
    if (i !== void 0) {
      const $ = r.schema[i];
      return s === void 0 ? {
        schema: $,
        schemaPath: (0, e._)`${r.schemaPath}${(0, e.getProperty)(i)}`,
        errSchemaPath: `${r.errSchemaPath}/${i}`
      } : {
        schema: $[s],
        schemaPath: (0, e._)`${r.schemaPath}${(0, e.getProperty)(i)}${(0, e.getProperty)(s)}`,
        errSchemaPath: `${r.errSchemaPath}/${i}/${(0, t.escapeFragment)(s)}`
      };
    }
    if (d !== void 0) {
      if (y === void 0 || h === void 0 || _ === void 0)
        throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
      return {
        schema: d,
        schemaPath: y,
        topSchemaRef: _,
        errSchemaPath: h
      };
    }
    throw new Error('either "keyword" or "schema" must be passed');
  }
  Ae.getSubschema = n;
  function o(r, i, { dataProp: s, dataPropType: d, data: y, dataTypes: h, propertyName: _ }) {
    if (y !== void 0 && s !== void 0)
      throw new Error('both "data" and "dataProp" passed, only one allowed');
    const { gen: $ } = i;
    if (s !== void 0) {
      const { errorPath: S, dataPathArr: C, opts: f } = i, m = $.let("data", (0, e._)`${i.data}${(0, e.getProperty)(s)}`, !0);
      b(m), r.errorPath = (0, e.str)`${S}${(0, t.getErrorPath)(s, d, f.jsPropertySyntax)}`, r.parentDataProperty = (0, e._)`${s}`, r.dataPathArr = [...C, r.parentDataProperty];
    }
    if (y !== void 0) {
      const S = y instanceof e.Name ? y : $.let("data", y, !0);
      b(S), _ !== void 0 && (r.propertyName = _);
    }
    h && (r.dataTypes = h);
    function b(S) {
      r.data = S, r.dataLevel = i.dataLevel + 1, r.dataTypes = [], i.definedProperties = /* @__PURE__ */ new Set(), r.parentData = i.data, r.dataNames = [...i.dataNames, S];
    }
  }
  Ae.extendSubschemaData = o;
  function c(r, { jtdDiscriminator: i, jtdMetadata: s, compositeRule: d, createErrors: y, allErrors: h }) {
    d !== void 0 && (r.compositeRule = d), y !== void 0 && (r.createErrors = y), h !== void 0 && (r.allErrors = h), r.jtdDiscriminator = i, r.jtdMetadata = s;
  }
  return Ae.extendSubschemaMode = c, Ae;
}
var fe = {}, Rn, br;
function Ho() {
  return br || (br = 1, Rn = function e(t, n) {
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
        var i = r[c];
        if (!e(t[i], n[i])) return !1;
      }
      return !0;
    }
    return t !== t && n !== n;
  }), Rn;
}
var An = { exports: {} }, _r;
function Ri() {
  if (_r) return An.exports;
  _r = 1;
  var e = An.exports = function(o, c, r) {
    typeof c == "function" && (r = c, c = {}), r = c.cb || r;
    var i = typeof r == "function" ? r : r.pre || function() {
    }, s = r.post || function() {
    };
    t(c, i, s, o, "", o);
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
  function t(o, c, r, i, s, d, y, h, _, $) {
    if (i && typeof i == "object" && !Array.isArray(i)) {
      c(i, s, d, y, h, _, $);
      for (var b in i) {
        var S = i[b];
        if (Array.isArray(S)) {
          if (b in e.arrayKeywords)
            for (var C = 0; C < S.length; C++)
              t(o, c, r, S[C], s + "/" + b + "/" + C, d, s, b, i, C);
        } else if (b in e.propsKeywords) {
          if (S && typeof S == "object")
            for (var f in S)
              t(o, c, r, S[f], s + "/" + b + "/" + n(f), d, s, b, i, f);
        } else (b in e.keywords || o.allKeys && !(b in e.skipKeywords)) && t(o, c, r, S, s + "/" + b, d, s, b, i);
      }
      r(i, s, d, y, h, _, $);
    }
  }
  function n(o) {
    return o.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  return An.exports;
}
var wr;
function gn() {
  if (wr) return fe;
  wr = 1, Object.defineProperty(fe, "__esModule", { value: !0 }), fe.getSchemaRefs = fe.resolveUrl = fe.normalizeId = fe._getFullPath = fe.getFullPath = fe.inlineRef = void 0;
  const e = /* @__PURE__ */ ee(), t = Ho(), n = Ri(), o = /* @__PURE__ */ new Set([
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
  function c(C, f = !0) {
    return typeof C == "boolean" ? !0 : f === !0 ? !i(C) : f ? s(C) <= f : !1;
  }
  fe.inlineRef = c;
  const r = /* @__PURE__ */ new Set([
    "$ref",
    "$recursiveRef",
    "$recursiveAnchor",
    "$dynamicRef",
    "$dynamicAnchor"
  ]);
  function i(C) {
    for (const f in C) {
      if (r.has(f))
        return !0;
      const m = C[f];
      if (Array.isArray(m) && m.some(i) || typeof m == "object" && i(m))
        return !0;
    }
    return !1;
  }
  function s(C) {
    let f = 0;
    for (const m in C) {
      if (m === "$ref")
        return 1 / 0;
      if (f++, !o.has(m) && (typeof C[m] == "object" && (0, e.eachItem)(C[m], (u) => f += s(u)), f === 1 / 0))
        return 1 / 0;
    }
    return f;
  }
  function d(C, f = "", m) {
    m !== !1 && (f = _(f));
    const u = C.parse(f);
    return y(C, u);
  }
  fe.getFullPath = d;
  function y(C, f) {
    return C.serialize(f).split("#")[0] + "#";
  }
  fe._getFullPath = y;
  const h = /#\/?$/;
  function _(C) {
    return C ? C.replace(h, "") : "";
  }
  fe.normalizeId = _;
  function $(C, f, m) {
    return m = _(m), C.resolve(f, m);
  }
  fe.resolveUrl = $;
  const b = /^[a-z_][-a-z0-9._]*$/i;
  function S(C, f) {
    if (typeof C == "boolean")
      return {};
    const { schemaId: m, uriResolver: u } = this.opts, g = _(C[m] || f), w = { "": g }, a = d(u, g, !1), l = {}, p = /* @__PURE__ */ new Set();
    return n(C, { allKeys: !0 }, (A, O, M, D) => {
      if (D === void 0)
        return;
      const L = a + O;
      let Z = w[D];
      typeof A[m] == "string" && (Z = te.call(this, A[m])), ue.call(this, A.$anchor), ue.call(this, A.$dynamicAnchor), w[O] = Z;
      function te(J) {
        const ae = this.opts.uriResolver.resolve;
        if (J = _(Z ? ae(Z, J) : J), p.has(J))
          throw P(J);
        p.add(J);
        let B = this.refs[J];
        return typeof B == "string" && (B = this.refs[B]), typeof B == "object" ? E(A, B.schema, J) : J !== _(L) && (J[0] === "#" ? (E(A, l[J], J), l[J] = A) : this.refs[J] = L), J;
      }
      function ue(J) {
        if (typeof J == "string") {
          if (!b.test(J))
            throw new Error(`invalid anchor "${J}"`);
          te.call(this, `#${J}`);
        }
      }
    }), l;
    function E(A, O, M) {
      if (O !== void 0 && !t(A, O))
        throw P(M);
    }
    function P(A) {
      return new Error(`reference "${A}" resolves to more than one schema`);
    }
  }
  return fe.getSchemaRefs = S, fe;
}
var Sr;
function yn() {
  if (Sr) return xe;
  Sr = 1, Object.defineProperty(xe, "__esModule", { value: !0 }), xe.getData = xe.KeywordCxt = xe.validateFunctionCode = void 0;
  const e = /* @__PURE__ */ ki(), t = /* @__PURE__ */ pn(), n = /* @__PURE__ */ Ko(), o = /* @__PURE__ */ pn(), c = /* @__PURE__ */ Ei(), r = /* @__PURE__ */ Pi(), i = /* @__PURE__ */ xi(), s = /* @__PURE__ */ W(), d = /* @__PURE__ */ Ce(), y = /* @__PURE__ */ gn(), h = /* @__PURE__ */ ee(), _ = /* @__PURE__ */ mn();
  function $(R) {
    if (a(R) && (p(R), w(R))) {
      f(R);
      return;
    }
    b(R, () => (0, e.topBoolOrEmptySchema)(R));
  }
  xe.validateFunctionCode = $;
  function b({ gen: R, validateName: N, schema: q, schemaEnv: U, opts: G }, X) {
    G.code.es5 ? R.func(N, (0, s._)`${d.default.data}, ${d.default.valCxt}`, U.$async, () => {
      R.code((0, s._)`"use strict"; ${u(q, G)}`), C(R, G), R.code(X);
    }) : R.func(N, (0, s._)`${d.default.data}, ${S(G)}`, U.$async, () => R.code(u(q, G)).code(X));
  }
  function S(R) {
    return (0, s._)`{${d.default.instancePath}="", ${d.default.parentData}, ${d.default.parentDataProperty}, ${d.default.rootData}=${d.default.data}${R.dynamicRef ? (0, s._)`, ${d.default.dynamicAnchors}={}` : s.nil}}={}`;
  }
  function C(R, N) {
    R.if(d.default.valCxt, () => {
      R.var(d.default.instancePath, (0, s._)`${d.default.valCxt}.${d.default.instancePath}`), R.var(d.default.parentData, (0, s._)`${d.default.valCxt}.${d.default.parentData}`), R.var(d.default.parentDataProperty, (0, s._)`${d.default.valCxt}.${d.default.parentDataProperty}`), R.var(d.default.rootData, (0, s._)`${d.default.valCxt}.${d.default.rootData}`), N.dynamicRef && R.var(d.default.dynamicAnchors, (0, s._)`${d.default.valCxt}.${d.default.dynamicAnchors}`);
    }, () => {
      R.var(d.default.instancePath, (0, s._)`""`), R.var(d.default.parentData, (0, s._)`undefined`), R.var(d.default.parentDataProperty, (0, s._)`undefined`), R.var(d.default.rootData, d.default.data), N.dynamicRef && R.var(d.default.dynamicAnchors, (0, s._)`{}`);
    });
  }
  function f(R) {
    const { schema: N, opts: q, gen: U } = R;
    b(R, () => {
      q.$comment && N.$comment && D(R), A(R), U.let(d.default.vErrors, null), U.let(d.default.errors, 0), q.unevaluated && m(R), E(R), L(R);
    });
  }
  function m(R) {
    const { gen: N, validateName: q } = R;
    R.evaluated = N.const("evaluated", (0, s._)`${q}.evaluated`), N.if((0, s._)`${R.evaluated}.dynamicProps`, () => N.assign((0, s._)`${R.evaluated}.props`, (0, s._)`undefined`)), N.if((0, s._)`${R.evaluated}.dynamicItems`, () => N.assign((0, s._)`${R.evaluated}.items`, (0, s._)`undefined`));
  }
  function u(R, N) {
    const q = typeof R == "object" && R[N.schemaId];
    return q && (N.code.source || N.code.process) ? (0, s._)`/*# sourceURL=${q} */` : s.nil;
  }
  function g(R, N) {
    if (a(R) && (p(R), w(R))) {
      l(R, N);
      return;
    }
    (0, e.boolOrEmptySchema)(R, N);
  }
  function w({ schema: R, self: N }) {
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
    const { schema: q, gen: U, opts: G } = R;
    G.$comment && q.$comment && D(R), O(R), M(R);
    const X = U.const("_errs", d.default.errors);
    E(R, X), U.var(N, (0, s._)`${X} === ${d.default.errors}`);
  }
  function p(R) {
    (0, h.checkUnknownRules)(R), P(R);
  }
  function E(R, N) {
    if (R.opts.jtd)
      return te(R, [], !1, N);
    const q = (0, t.getSchemaTypes)(R.schema), U = (0, t.coerceAndCheckDataType)(R, q);
    te(R, q, !U, N);
  }
  function P(R) {
    const { schema: N, errSchemaPath: q, opts: U, self: G } = R;
    N.$ref && U.ignoreKeywordsWithRef && (0, h.schemaHasRulesButRef)(N, G.RULES) && G.logger.warn(`$ref: keywords ignored in schema at path "${q}"`);
  }
  function A(R) {
    const { schema: N, opts: q } = R;
    N.default !== void 0 && q.useDefaults && q.strictSchema && (0, h.checkStrictMode)(R, "default is ignored in the schema root");
  }
  function O(R) {
    const N = R.schema[R.opts.schemaId];
    N && (R.baseId = (0, y.resolveUrl)(R.opts.uriResolver, R.baseId, N));
  }
  function M(R) {
    if (R.schema.$async && !R.schemaEnv.$async)
      throw new Error("async schema in sync schema");
  }
  function D({ gen: R, schemaEnv: N, schema: q, errSchemaPath: U, opts: G }) {
    const X = q.$comment;
    if (G.$comment === !0)
      R.code((0, s._)`${d.default.self}.logger.log(${X})`);
    else if (typeof G.$comment == "function") {
      const ce = (0, s.str)`${U}/$comment`, $e = R.scopeValue("root", { ref: N.root });
      R.code((0, s._)`${d.default.self}.opts.$comment(${X}, ${ce}, ${$e}.schema)`);
    }
  }
  function L(R) {
    const { gen: N, schemaEnv: q, validateName: U, ValidationError: G, opts: X } = R;
    q.$async ? N.if((0, s._)`${d.default.errors} === 0`, () => N.return(d.default.data), () => N.throw((0, s._)`new ${G}(${d.default.vErrors})`)) : (N.assign((0, s._)`${U}.errors`, d.default.vErrors), X.unevaluated && Z(R), N.return((0, s._)`${d.default.errors} === 0`));
  }
  function Z({ gen: R, evaluated: N, props: q, items: U }) {
    q instanceof s.Name && R.assign((0, s._)`${N}.props`, q), U instanceof s.Name && R.assign((0, s._)`${N}.items`, U);
  }
  function te(R, N, q, U) {
    const { gen: G, schema: X, data: ce, allErrors: $e, opts: pe, self: he } = R, { RULES: le } = he;
    if (X.$ref && (pe.ignoreKeywordsWithRef || !(0, h.schemaHasRulesButRef)(X, le))) {
      G.block(() => K(R, "$ref", le.all.$ref.definition));
      return;
    }
    pe.jtd || J(R, N), G.block(() => {
      for (const ye of le.rules)
        Be(ye);
      Be(le.post);
    });
    function Be(ye) {
      (0, n.shouldUseGroup)(X, ye) && (ye.type ? (G.if((0, o.checkDataType)(ye.type, ce, pe.strictNumbers)), ue(R, ye), N.length === 1 && N[0] === ye.type && q && (G.else(), (0, o.reportTypeError)(R)), G.endIf()) : ue(R, ye), $e || G.if((0, s._)`${d.default.errors} === ${U || 0}`));
    }
  }
  function ue(R, N) {
    const { gen: q, schema: U, opts: { useDefaults: G } } = R;
    G && (0, c.assignDefaults)(R, N.type), q.block(() => {
      for (const X of N.rules)
        (0, n.shouldUseRule)(U, X) && K(R, X.keyword, X.definition, N.type);
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
        j(R.dataTypes, q) || k(R, `type "${q}" not allowed by context "${R.dataTypes.join(",")}"`);
      }), v(R, N);
    }
  }
  function B(R, N) {
    N.length > 1 && !(N.length === 2 && N.includes("null")) && k(R, "use allowUnionTypes to allow union type keyword");
  }
  function F(R, N) {
    const q = R.self.RULES.all;
    for (const U in q) {
      const G = q[U];
      if (typeof G == "object" && (0, n.shouldUseRule)(R.schema, G)) {
        const { type: X } = G.definition;
        X.length && !X.some((ce) => V(N, ce)) && k(R, `missing type "${X.join(",")}" for keyword "${U}"`);
      }
    }
  }
  function V(R, N) {
    return R.includes(N) || N === "number" && R.includes("integer");
  }
  function j(R, N) {
    return R.includes(N) || N === "integer" && R.includes("number");
  }
  function v(R, N) {
    const q = [];
    for (const U of R.dataTypes)
      j(N, U) ? q.push(U) : N.includes("integer") && U === "number" && q.push("integer");
    R.dataTypes = q;
  }
  function k(R, N) {
    const q = R.schemaEnv.baseId + R.errSchemaPath;
    N += ` at "${q}" (strictTypes)`, (0, h.checkStrictMode)(R, N, R.opts.strictTypes);
  }
  class T {
    constructor(N, q, U) {
      if ((0, r.validateKeywordUsage)(N, q, U), this.gen = N.gen, this.allErrors = N.allErrors, this.keyword = U, this.data = N.data, this.schema = N.schema[U], this.$data = q.$data && N.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, h.schemaRefOrVal)(N, this.schema, U, this.$data), this.schemaType = q.schemaType, this.parentSchema = N.schema, this.params = {}, this.it = N, this.def = q, this.$data)
        this.schemaCode = N.gen.const("vSchema", Q(this.$data, N));
      else if (this.schemaCode = this.schemaValue, !(0, r.validSchemaType)(this.schema, q.schemaType, q.allowUndefined))
        throw new Error(`${U} value must be ${JSON.stringify(q.schemaType)}`);
      ("code" in q ? q.trackErrors : q.errors !== !1) && (this.errsCount = N.gen.const("_errs", d.default.errors));
    }
    result(N, q, U) {
      this.failResult((0, s.not)(N), q, U);
    }
    failResult(N, q, U) {
      this.gen.if(N), U ? U() : this.error(), q ? (this.gen.else(), q(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    pass(N, q) {
      this.failResult((0, s.not)(N), void 0, q);
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
      this.fail((0, s._)`${q} !== undefined && (${(0, s.or)(this.invalid$data(), N)})`);
    }
    error(N, q, U) {
      if (q) {
        this.setParams(q), this._error(N, U), this.setParams({});
        return;
      }
      this._error(N, U);
    }
    _error(N, q) {
      (N ? _.reportExtraError : _.reportError)(this, this.def.error, q);
    }
    $dataError() {
      (0, _.reportError)(this, this.def.$dataError || _.keyword$DataError);
    }
    reset() {
      if (this.errsCount === void 0)
        throw new Error('add "trackErrors" to keyword definition');
      (0, _.resetErrorsCount)(this.gen, this.errsCount);
    }
    ok(N) {
      this.allErrors || this.gen.if(N);
    }
    setParams(N, q) {
      q ? Object.assign(this.params, N) : this.params = N;
    }
    block$data(N, q, U = s.nil) {
      this.gen.block(() => {
        this.check$data(N, U), q();
      });
    }
    check$data(N = s.nil, q = s.nil) {
      if (!this.$data)
        return;
      const { gen: U, schemaCode: G, schemaType: X, def: ce } = this;
      U.if((0, s.or)((0, s._)`${G} === undefined`, q)), N !== s.nil && U.assign(N, !0), (X.length || ce.validateSchema) && (U.elseIf(this.invalid$data()), this.$dataError(), N !== s.nil && U.assign(N, !1)), U.else();
    }
    invalid$data() {
      const { gen: N, schemaCode: q, schemaType: U, def: G, it: X } = this;
      return (0, s.or)(ce(), $e());
      function ce() {
        if (U.length) {
          if (!(q instanceof s.Name))
            throw new Error("ajv implementation error");
          const pe = Array.isArray(U) ? U : [U];
          return (0, s._)`${(0, o.checkDataTypes)(pe, q, X.opts.strictNumbers, o.DataType.Wrong)}`;
        }
        return s.nil;
      }
      function $e() {
        if (G.validateSchema) {
          const pe = N.scopeValue("validate$data", { ref: G.validateSchema });
          return (0, s._)`!${pe}(${q})`;
        }
        return s.nil;
      }
    }
    subschema(N, q) {
      const U = (0, i.getSubschema)(this.it, N);
      (0, i.extendSubschemaData)(U, this.it, N), (0, i.extendSubschemaMode)(U, N);
      const G = { ...this.it, ...U, items: void 0, props: void 0 };
      return g(G, q), G;
    }
    mergeEvaluated(N, q) {
      const { it: U, gen: G } = this;
      U.opts.unevaluated && (U.props !== !0 && N.props !== void 0 && (U.props = h.mergeEvaluated.props(G, N.props, U.props, q)), U.items !== !0 && N.items !== void 0 && (U.items = h.mergeEvaluated.items(G, N.items, U.items, q)));
    }
    mergeValidEvaluated(N, q) {
      const { it: U, gen: G } = this;
      if (U.opts.unevaluated && (U.props !== !0 || U.items !== !0))
        return G.if(q, () => this.mergeEvaluated(N, s.Name)), !0;
    }
  }
  xe.KeywordCxt = T;
  function K(R, N, q, U) {
    const G = new T(R, q, N);
    "code" in q ? q.code(G, U) : G.$data && q.validate ? (0, r.funcKeywordCode)(G, q) : "macro" in q ? (0, r.macroKeywordCode)(G, q) : (q.compile || q.validate) && (0, r.funcKeywordCode)(G, q);
  }
  const H = /^\/(?:[^~]|~0|~1)*$/, ne = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function Q(R, { dataLevel: N, dataNames: q, dataPathArr: U }) {
    let G, X;
    if (R === "")
      return d.default.rootData;
    if (R[0] === "/") {
      if (!H.test(R))
        throw new Error(`Invalid JSON-pointer: ${R}`);
      G = R, X = d.default.rootData;
    } else {
      const he = ne.exec(R);
      if (!he)
        throw new Error(`Invalid JSON-pointer: ${R}`);
      const le = +he[1];
      if (G = he[2], G === "#") {
        if (le >= N)
          throw new Error(pe("property/index", le));
        return U[N - le];
      }
      if (le > N)
        throw new Error(pe("data", le));
      if (X = q[N - le], !G)
        return X;
    }
    let ce = X;
    const $e = G.split("/");
    for (const he of $e)
      he && (X = (0, s._)`${X}${(0, s.getProperty)((0, h.unescapeJsonPointer)(he))}`, ce = (0, s._)`${ce} && ${X}`);
    return ce;
    function pe(he, le) {
      return `Cannot access ${he} ${le} levels up, current level is ${N}`;
    }
  }
  return xe.getData = Q, xe;
}
var pt = {}, Cr;
function Bn() {
  if (Cr) return pt;
  Cr = 1, Object.defineProperty(pt, "__esModule", { value: !0 });
  class e extends Error {
    constructor(n) {
      super("validation failed"), this.errors = n, this.ajv = this.validation = !0;
    }
  }
  return pt.default = e, pt;
}
var ht = {}, kr;
function vn() {
  if (kr) return ht;
  kr = 1, Object.defineProperty(ht, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ gn();
  class t extends Error {
    constructor(o, c, r, i) {
      super(i || `can't resolve reference ${r} from id ${c}`), this.missingRef = (0, e.resolveUrl)(o, c, r), this.missingSchema = (0, e.normalizeId)((0, e.getFullPath)(o, this.missingRef));
    }
  }
  return ht.default = t, ht;
}
var ge = {}, Er;
function $n() {
  if (Er) return ge;
  Er = 1, Object.defineProperty(ge, "__esModule", { value: !0 }), ge.resolveSchema = ge.getCompilingSchema = ge.resolveRef = ge.compileSchema = ge.SchemaEnv = void 0;
  const e = /* @__PURE__ */ W(), t = /* @__PURE__ */ Bn(), n = /* @__PURE__ */ Ce(), o = /* @__PURE__ */ gn(), c = /* @__PURE__ */ ee(), r = /* @__PURE__ */ yn();
  class i {
    constructor(m) {
      var u;
      this.refs = {}, this.dynamicAnchors = {};
      let g;
      typeof m.schema == "object" && (g = m.schema), this.schema = m.schema, this.schemaId = m.schemaId, this.root = m.root || this, this.baseId = (u = m.baseId) !== null && u !== void 0 ? u : (0, o.normalizeId)(g?.[m.schemaId || "$id"]), this.schemaPath = m.schemaPath, this.localRefs = m.localRefs, this.meta = m.meta, this.$async = g?.$async, this.refs = {};
    }
  }
  ge.SchemaEnv = i;
  function s(f) {
    const m = h.call(this, f);
    if (m)
      return m;
    const u = (0, o.getFullPath)(this.opts.uriResolver, f.root.baseId), { es5: g, lines: w } = this.opts.code, { ownProperties: a } = this.opts, l = new e.CodeGen(this.scope, { es5: g, lines: w, ownProperties: a });
    let p;
    f.$async && (p = l.scopeValue("Error", {
      ref: t.default,
      code: (0, e._)`require("ajv/dist/runtime/validation_error").default`
    }));
    const E = l.scopeName("validate");
    f.validateName = E;
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
      topSchemaRef: l.scopeValue("schema", this.opts.code.source === !0 ? { ref: f.schema, code: (0, e.stringify)(f.schema) } : { ref: f.schema }),
      validateName: E,
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
    let A;
    try {
      this._compilations.add(f), (0, r.validateFunctionCode)(P), l.optimize(this.opts.code.optimize);
      const O = l.toString();
      A = `${l.scopeRefs(n.default.scope)}return ${O}`, this.opts.code.process && (A = this.opts.code.process(A, f));
      const D = new Function(`${n.default.self}`, `${n.default.scope}`, A)(this, this.scope.get());
      if (this.scope.value(E, { ref: D }), D.errors = null, D.schema = f.schema, D.schemaEnv = f, f.$async && (D.$async = !0), this.opts.code.source === !0 && (D.source = { validateName: E, validateCode: O, scopeValues: l._values }), this.opts.unevaluated) {
        const { props: L, items: Z } = P;
        D.evaluated = {
          props: L instanceof e.Name ? void 0 : L,
          items: Z instanceof e.Name ? void 0 : Z,
          dynamicProps: L instanceof e.Name,
          dynamicItems: Z instanceof e.Name
        }, D.source && (D.source.evaluated = (0, e.stringify)(D.evaluated));
      }
      return f.validate = D, f;
    } catch (O) {
      throw delete f.validate, delete f.validateName, A && this.logger.error("Error compiling schema, function code:", A), O;
    } finally {
      this._compilations.delete(f);
    }
  }
  ge.compileSchema = s;
  function d(f, m, u) {
    var g;
    u = (0, o.resolveUrl)(this.opts.uriResolver, m, u);
    const w = f.refs[u];
    if (w)
      return w;
    let a = $.call(this, f, u);
    if (a === void 0) {
      const l = (g = f.localRefs) === null || g === void 0 ? void 0 : g[u], { schemaId: p } = this.opts;
      l && (a = new i({ schema: l, schemaId: p, root: f, baseId: m }));
    }
    if (a !== void 0)
      return f.refs[u] = y.call(this, a);
  }
  ge.resolveRef = d;
  function y(f) {
    return (0, o.inlineRef)(f.schema, this.opts.inlineRefs) ? f.schema : f.validate ? f : s.call(this, f);
  }
  function h(f) {
    for (const m of this._compilations)
      if (_(m, f))
        return m;
  }
  ge.getCompilingSchema = h;
  function _(f, m) {
    return f.schema === m.schema && f.root === m.root && f.baseId === m.baseId;
  }
  function $(f, m) {
    let u;
    for (; typeof (u = this.refs[m]) == "string"; )
      m = u;
    return u || this.schemas[m] || b.call(this, f, m);
  }
  function b(f, m) {
    const u = this.opts.uriResolver.parse(m), g = (0, o._getFullPath)(this.opts.uriResolver, u);
    let w = (0, o.getFullPath)(this.opts.uriResolver, f.baseId, void 0);
    if (Object.keys(f.schema).length > 0 && g === w)
      return C.call(this, u, f);
    const a = (0, o.normalizeId)(g), l = this.refs[a] || this.schemas[a];
    if (typeof l == "string") {
      const p = b.call(this, f, l);
      return typeof p?.schema != "object" ? void 0 : C.call(this, u, p);
    }
    if (typeof l?.schema == "object") {
      if (l.validate || s.call(this, l), a === (0, o.normalizeId)(m)) {
        const { schema: p } = l, { schemaId: E } = this.opts, P = p[E];
        return P && (w = (0, o.resolveUrl)(this.opts.uriResolver, w, P)), new i({ schema: p, schemaId: E, root: f, baseId: w });
      }
      return C.call(this, u, l);
    }
  }
  ge.resolveSchema = b;
  const S = /* @__PURE__ */ new Set([
    "properties",
    "patternProperties",
    "enum",
    "dependencies",
    "definitions"
  ]);
  function C(f, { baseId: m, schema: u, root: g }) {
    var w;
    if (((w = f.fragment) === null || w === void 0 ? void 0 : w[0]) !== "/")
      return;
    for (const p of f.fragment.slice(1).split("/")) {
      if (typeof u == "boolean")
        return;
      const E = u[(0, c.unescapeFragment)(p)];
      if (E === void 0)
        return;
      u = E;
      const P = typeof u == "object" && u[this.opts.schemaId];
      !S.has(p) && P && (m = (0, o.resolveUrl)(this.opts.uriResolver, m, P));
    }
    let a;
    if (typeof u != "boolean" && u.$ref && !(0, c.schemaHasRulesButRef)(u, this.RULES)) {
      const p = (0, o.resolveUrl)(this.opts.uriResolver, m, u.$ref);
      a = b.call(this, g, p);
    }
    const { schemaId: l } = this.opts;
    if (a = a || new i({ schema: u, schemaId: l, root: g, baseId: m }), a.schema !== a.root.schema)
      return a;
  }
  return ge;
}
const Ai = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", Fi = "Meta-schema for $data reference (JSON AnySchema extension proposal)", Ni = "object", Mi = ["$data"], ji = { $data: { type: "string", anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] } }, Oi = !1, Ti = {
  $id: Ai,
  description: Fi,
  type: Ni,
  required: Mi,
  properties: ji,
  additionalProperties: Oi
};
var mt = {}, rt = { exports: {} }, Fn, Pr;
function Go() {
  if (Pr) return Fn;
  Pr = 1;
  const e = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu), t = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u), n = RegExp.prototype.test.bind(/^[\da-f]{2}$/iu), o = RegExp.prototype.test.bind(/^[\da-z\-._~]$/iu), c = RegExp.prototype.test.bind(/^[\da-z\-._~!$&'()*+,;=:@/]$/iu);
  function r(a) {
    let l = "", p = 0, E = 0;
    for (E = 0; E < a.length; E++)
      if (p = a[E].charCodeAt(0), p !== 48) {
        if (!(p >= 48 && p <= 57 || p >= 65 && p <= 70 || p >= 97 && p <= 102))
          return "";
        l += a[E];
        break;
      }
    for (E += 1; E < a.length; E++) {
      if (p = a[E].charCodeAt(0), !(p >= 48 && p <= 57 || p >= 65 && p <= 70 || p >= 97 && p <= 102))
        return "";
      l += a[E];
    }
    return l;
  }
  const i = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
  function s(a) {
    return a.length = 0, !0;
  }
  function d(a, l, p) {
    if (a.length) {
      const E = r(a);
      if (E !== "")
        l.push(E);
      else
        return p.error = !0, !1;
      a.length = 0;
    }
    return !0;
  }
  function y(a) {
    let l = 0;
    const p = { error: !1, address: "", zone: "" }, E = [], P = [];
    let A = !1, O = !1, M = d;
    for (let D = 0; D < a.length; D++) {
      const L = a[D];
      if (!(L === "[" || L === "]"))
        if (L === ":") {
          if (A === !0 && (O = !0), !M(P, E, p))
            break;
          if (++l > 7) {
            p.error = !0;
            break;
          }
          D > 0 && a[D - 1] === ":" && (A = !0), E.push(":");
          continue;
        } else if (L === "%") {
          if (!M(P, E, p))
            break;
          M = s;
        } else {
          P.push(L);
          continue;
        }
    }
    return P.length && (M === s ? p.zone = P.join("") : O ? E.push(P.join("")) : E.push(r(P))), p.address = E.join(""), p;
  }
  function h(a) {
    if (_(a, ":") < 2)
      return { host: a, isIPV6: !1 };
    const l = y(a);
    if (l.error)
      return { host: a, isIPV6: !1 };
    {
      let p = l.address, E = l.address;
      return l.zone && (p += "%" + l.zone, E += "%25" + l.zone), { host: p, isIPV6: !0, escapedHost: E };
    }
  }
  function _(a, l) {
    let p = 0;
    for (let E = 0; E < a.length; E++)
      a[E] === l && p++;
    return p;
  }
  function $(a) {
    let l = a;
    const p = [];
    let E = -1, P = 0;
    for (; P = l.length; ) {
      if (P === 1) {
        if (l === ".")
          break;
        if (l === "/") {
          p.push("/");
          break;
        } else {
          p.push(l);
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
          p.push("/");
          break;
        }
      } else if (P === 3 && l === "/..") {
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
      if ((E = l.indexOf("/", 1)) === -1) {
        p.push(l);
        break;
      } else
        p.push(l.slice(0, E)), l = l.slice(E);
    }
    return p.join("");
  }
  const b = { "@": "%40", "/": "%2F", "?": "%3F", "#": "%23", ":": "%3A" }, S = /[@/?#:]/g, C = /[@/?#]/g;
  function f(a, l) {
    const p = l ? C : S;
    return p.lastIndex = 0, a.replace(p, (E) => b[E]);
  }
  function m(a, l = !1) {
    if (a.indexOf("%") === -1)
      return a;
    let p = "";
    for (let E = 0; E < a.length; E++) {
      if (a[E] === "%" && E + 2 < a.length) {
        const P = a.slice(E + 1, E + 3);
        if (n(P)) {
          const A = P.toUpperCase(), O = String.fromCharCode(parseInt(A, 16));
          l && o(O) ? p += O : p += "%" + A, E += 2;
          continue;
        }
      }
      p += a[E];
    }
    return p;
  }
  function u(a) {
    let l = "";
    for (let p = 0; p < a.length; p++) {
      if (a[p] === "%" && p + 2 < a.length) {
        const E = a.slice(p + 1, p + 3);
        if (n(E)) {
          const P = E.toUpperCase(), A = String.fromCharCode(parseInt(P, 16));
          A !== "." && o(A) ? l += A : l += "%" + P, p += 2;
          continue;
        }
      }
      c(a[p]) ? l += a[p] : l += escape(a[p]);
    }
    return l;
  }
  function g(a) {
    let l = "";
    for (let p = 0; p < a.length; p++) {
      if (a[p] === "%" && p + 2 < a.length) {
        const E = a.slice(p + 1, p + 3);
        if (n(E)) {
          l += "%" + E.toUpperCase(), p += 2;
          continue;
        }
      }
      l += escape(a[p]);
    }
    return l;
  }
  function w(a) {
    const l = [];
    if (a.userinfo !== void 0 && (l.push(a.userinfo), l.push("@")), a.host !== void 0) {
      let p = unescape(a.host);
      if (!t(p)) {
        const E = h(p);
        E.isIPV6 === !0 ? p = `[${E.escapedHost}]` : p = f(p, !1);
      }
      l.push(p);
    }
    return (typeof a.port == "number" || typeof a.port == "string") && (l.push(":"), l.push(String(a.port))), l.length ? l.join("") : void 0;
  }
  return Fn = {
    nonSimpleDomain: i,
    recomposeAuthority: w,
    reescapeHostDelimiters: f,
    normalizePercentEncoding: m,
    normalizePathEncoding: u,
    escapePreservingEscapes: g,
    removeDotSegments: $,
    isIPv4: t,
    isUUID: e,
    normalizeIPv6: h,
    stringArrayToHexStripped: r
  }, Fn;
}
var Nn, xr;
function zi() {
  if (xr) return Nn;
  xr = 1;
  const { isUUID: e } = Go(), t = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu, n = (
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
  function i(a) {
    const l = String(a.scheme).toLowerCase() === "https";
    return (a.port === (l ? 443 : 80) || a.port === "") && (a.port = void 0), a.path || (a.path = "/"), a;
  }
  function s(a) {
    return a.secure = c(a), a.resourceName = (a.path || "/") + (a.query ? "?" + a.query : ""), a.path = void 0, a.query = void 0, a;
  }
  function d(a) {
    if ((a.port === (c(a) ? 443 : 80) || a.port === "") && (a.port = void 0), typeof a.secure == "boolean" && (a.scheme = a.secure ? "wss" : "ws", a.secure = void 0), a.resourceName) {
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
      const E = l.scheme || a.scheme || "urn";
      a.nid = p[1].toLowerCase(), a.nss = p[2];
      const P = `${E}:${l.nid || a.nid}`, A = w(P);
      a.path = void 0, A && (a = A.parse(a, l));
    } else
      a.error = a.error || "URN can not be parsed.";
    return a;
  }
  function h(a, l) {
    if (a.nid === void 0)
      throw new Error("URN without nid cannot be serialized");
    const p = l.scheme || a.scheme || "urn", E = a.nid.toLowerCase(), P = `${p}:${l.nid || E}`, A = w(P);
    A && (a = A.serialize(a, l));
    const O = a, M = a.nss;
    return O.path = `${E || l.nid}:${M}`, l.skipEscape = !0, O;
  }
  function _(a, l) {
    const p = a;
    return p.uuid = p.nss, p.nss = void 0, !l.tolerant && (!p.uuid || !e(p.uuid)) && (p.error = p.error || "UUID is not valid."), p;
  }
  function $(a) {
    const l = a;
    return l.nss = (a.uuid || "").toLowerCase(), l;
  }
  const b = (
    /** @type {SchemeHandler} */
    {
      scheme: "http",
      domainHost: !0,
      parse: r,
      serialize: i
    }
  ), S = (
    /** @type {SchemeHandler} */
    {
      scheme: "https",
      domainHost: b.domainHost,
      parse: r,
      serialize: i
    }
  ), C = (
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
      domainHost: C.domainHost,
      parse: C.parse,
      serialize: C.serialize
    }
  ), g = (
    /** @type {Record<SchemeName, SchemeHandler>} */
    {
      http: b,
      https: S,
      ws: C,
      wss: f,
      urn: (
        /** @type {SchemeHandler} */
        {
          scheme: "urn",
          parse: y,
          serialize: h,
          skipNormalize: !0
        }
      ),
      "urn:uuid": (
        /** @type {SchemeHandler} */
        {
          scheme: "urn:uuid",
          parse: _,
          serialize: $,
          skipNormalize: !0
        }
      )
    }
  );
  Object.setPrototypeOf(g, null);
  function w(a) {
    return a && (g[
      /** @type {SchemeName} */
      a
    ] || g[
      /** @type {SchemeName} */
      a.toLowerCase()
    ]) || void 0;
  }
  return Nn = {
    wsIsSecure: c,
    SCHEMES: g,
    isValidSchemeName: o,
    getSchemeHandler: w
  }, Nn;
}
var Rr;
function Ii() {
  if (Rr) return rt.exports;
  Rr = 1;
  const { normalizeIPv6: e, removeDotSegments: t, recomposeAuthority: n, normalizePercentEncoding: o, normalizePathEncoding: c, escapePreservingEscapes: r, reescapeHostDelimiters: i, isIPv4: s, nonSimpleDomain: d } = Go(), { SCHEMES: y, getSchemeHandler: h } = zi();
  function _(P, A) {
    return typeof P == "string" ? P = /** @type {T} */
    a(P, A) : typeof P == "object" && (P = /** @type {T} */
    w(C(P, A), A)), P;
  }
  function $(P, A, O) {
    const M = O ? Object.assign({ scheme: "null" }, O) : { scheme: "null" }, D = b(w(P, M), w(A, M), M, !0);
    return M.skipEscape = !0, C(D, M);
  }
  function b(P, A, O, M) {
    const D = {};
    return M || (P = w(C(P, O), O), A = w(C(A, O), O)), O = O || {}, !O.tolerant && A.scheme ? (D.scheme = A.scheme, D.userinfo = A.userinfo, D.host = A.host, D.port = A.port, D.path = t(A.path || ""), D.query = A.query) : (A.userinfo !== void 0 || A.host !== void 0 || A.port !== void 0 ? (D.userinfo = A.userinfo, D.host = A.host, D.port = A.port, D.path = t(A.path || ""), D.query = A.query) : (A.path ? (A.path[0] === "/" ? D.path = t(A.path) : ((P.userinfo !== void 0 || P.host !== void 0 || P.port !== void 0) && !P.path ? D.path = "/" + A.path : P.path ? D.path = P.path.slice(0, P.path.lastIndexOf("/") + 1) + A.path : D.path = A.path, D.path = t(D.path)), D.query = A.query) : (D.path = P.path, A.query !== void 0 ? D.query = A.query : D.query = P.query), D.userinfo = P.userinfo, D.host = P.host, D.port = P.port), D.scheme = P.scheme), D.fragment = A.fragment, D;
  }
  function S(P, A, O) {
    const M = p(P, O), D = p(A, O);
    return M !== void 0 && D !== void 0 && M.toLowerCase() === D.toLowerCase();
  }
  function C(P, A) {
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
    }, M = Object.assign({}, A), D = [], L = h(M.scheme || O.scheme);
    L && L.serialize && L.serialize(O, M), O.path !== void 0 && (M.skipEscape ? O.path = o(O.path) : (O.path = r(O.path), O.scheme !== void 0 && (O.path = O.path.split("%3A").join(":")))), M.reference !== "suffix" && O.scheme && D.push(O.scheme, ":");
    const Z = n(O);
    if (Z !== void 0 && (M.reference !== "suffix" && D.push("//"), D.push(Z), O.path && O.path[0] !== "/" && D.push("/")), O.path !== void 0) {
      let te = O.path;
      !M.absolutePath && (!L || !L.absolutePath) && (te = t(te)), Z === void 0 && te[0] === "/" && te[1] === "/" && (te = "/%2F" + te.slice(2)), D.push(te);
    }
    return O.query !== void 0 && D.push("?", O.query), O.fragment !== void 0 && D.push("#", O.fragment), D.join("");
  }
  const f = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u, m = /^(?:[^#/:?]+:)?\/\/([^/?#]*)/;
  function u(P, A) {
    if (A[2] !== void 0 && P.path && P.path[0] !== "/")
      return 'URI path must start with "/" when authority is present.';
    if (typeof P.port == "number" && (P.port < 0 || P.port > 65535))
      return "URI port is malformed.";
  }
  function g(P, A) {
    const O = Object.assign({}, A), M = {
      scheme: void 0,
      userinfo: void 0,
      host: "",
      port: void 0,
      path: "",
      query: void 0,
      fragment: void 0
    };
    let D = !1, L = !1;
    O.reference === "suffix" && (O.scheme ? P = O.scheme + ":" + P : P = "//" + P);
    const Z = P.match(m);
    Z !== null && Z[1].indexOf("\\") !== -1 && (M.error = "URI authority must not contain a literal backslash.", D = !0);
    const te = P.match(f);
    if (te) {
      M.scheme = te[1], M.userinfo = te[3], M.host = te[4], M.port = parseInt(te[5], 10), M.path = te[6] || "", M.query = te[7], M.fragment = te[8], isNaN(M.port) && (M.port = te[5]);
      const ue = u(M, te);
      if (ue !== void 0 && (M.error = M.error || ue, D = !0), M.host)
        if (s(M.host) === !1) {
          const B = e(M.host);
          M.host = B.host.toLowerCase(), L = B.isIPV6;
        } else
          L = !0;
      M.scheme === void 0 && M.userinfo === void 0 && M.host === void 0 && M.port === void 0 && M.query === void 0 && !M.path ? M.reference = "same-document" : M.scheme === void 0 ? M.reference = "relative" : M.fragment === void 0 ? M.reference = "absolute" : M.reference = "uri", O.reference && O.reference !== "suffix" && O.reference !== M.reference && (M.error = M.error || "URI is not a " + O.reference + " reference.");
      const J = h(O.scheme || M.scheme);
      if (!O.unicodeSupport && (!J || !J.unicodeSupport) && M.host && (O.domainHost || J && J.domainHost) && L === !1 && d(M.host))
        try {
          M.host = new URL("http://" + M.host).hostname;
        } catch (ae) {
          M.error = M.error || "Host's domain name can not be converted to ASCII: " + ae;
        }
      if ((!J || J && !J.skipNormalize) && (P.indexOf("%") !== -1 && (M.scheme !== void 0 && (M.scheme = unescape(M.scheme)), M.host !== void 0 && (M.host = i(unescape(M.host), L))), M.path && (M.path = c(M.path)), M.fragment))
        try {
          M.fragment = encodeURI(decodeURIComponent(M.fragment));
        } catch {
          M.error = M.error || "URI malformed";
        }
      J && J.parse && J.parse(M, O);
    } else
      M.error = M.error || "URI can not be parsed.";
    return { parsed: M, malformedAuthorityOrPort: D };
  }
  function w(P, A) {
    return g(P, A).parsed;
  }
  function a(P, A) {
    return l(P, A).normalized;
  }
  function l(P, A) {
    const { parsed: O, malformedAuthorityOrPort: M } = g(P, A);
    return {
      normalized: M ? P : C(O, A),
      malformedAuthorityOrPort: M
    };
  }
  function p(P, A) {
    if (typeof P == "string") {
      const { normalized: O, malformedAuthorityOrPort: M } = l(P, A);
      return M ? void 0 : O;
    }
    if (typeof P == "object")
      return C(P, A);
  }
  const E = {
    SCHEMES: y,
    normalize: _,
    resolve: $,
    resolveComponent: b,
    equal: S,
    serialize: C,
    parse: w
  };
  return rt.exports = E, rt.exports.default = E, rt.exports.fastUri = E, rt.exports;
}
var Ar;
function Di() {
  if (Ar) return mt;
  Ar = 1, Object.defineProperty(mt, "__esModule", { value: !0 });
  const e = Ii();
  return e.code = 'require("ajv/dist/runtime/uri").default', mt.default = e, mt;
}
var Fr;
function qi() {
  return Fr || (Fr = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = void 0;
    var t = /* @__PURE__ */ yn();
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
    const o = /* @__PURE__ */ Bn(), c = /* @__PURE__ */ vn(), r = /* @__PURE__ */ Uo(), i = /* @__PURE__ */ $n(), s = /* @__PURE__ */ W(), d = /* @__PURE__ */ gn(), y = /* @__PURE__ */ pn(), h = /* @__PURE__ */ ee(), _ = Ti, $ = /* @__PURE__ */ Di(), b = (B, F) => new RegExp(B, F);
    b.code = "new RegExp";
    const S = ["removeAdditional", "useDefaults", "coerceTypes"], C = /* @__PURE__ */ new Set([
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
    }, m = {
      ignoreKeywordsWithRef: "",
      jsPropertySyntax: "",
      unicode: '"minLength"/"maxLength" account for unicode characters by default.'
    }, u = 200;
    function g(B) {
      var F, V, j, v, k, T, K, H, ne, Q, R, N, q, U, G, X, ce, $e, pe, he, le, Be, ye, _n, wn;
      const et = B.strict, Sn = (F = B.code) === null || F === void 0 ? void 0 : F.optimize, nr = Sn === !0 || Sn === void 0 ? 1 : Sn || 0, rr = (j = (V = B.code) === null || V === void 0 ? void 0 : V.regExp) !== null && j !== void 0 ? j : b, ui = (v = B.uriResolver) !== null && v !== void 0 ? v : $.default;
      return {
        strictSchema: (T = (k = B.strictSchema) !== null && k !== void 0 ? k : et) !== null && T !== void 0 ? T : !0,
        strictNumbers: (H = (K = B.strictNumbers) !== null && K !== void 0 ? K : et) !== null && H !== void 0 ? H : !0,
        strictTypes: (Q = (ne = B.strictTypes) !== null && ne !== void 0 ? ne : et) !== null && Q !== void 0 ? Q : "log",
        strictTuples: (N = (R = B.strictTuples) !== null && R !== void 0 ? R : et) !== null && N !== void 0 ? N : "log",
        strictRequired: (U = (q = B.strictRequired) !== null && q !== void 0 ? q : et) !== null && U !== void 0 ? U : !1,
        code: B.code ? { ...B.code, optimize: nr, regExp: rr } : { optimize: nr, regExp: rr },
        loopRequired: (G = B.loopRequired) !== null && G !== void 0 ? G : u,
        loopEnum: (X = B.loopEnum) !== null && X !== void 0 ? X : u,
        meta: (ce = B.meta) !== null && ce !== void 0 ? ce : !0,
        messages: ($e = B.messages) !== null && $e !== void 0 ? $e : !0,
        inlineRefs: (pe = B.inlineRefs) !== null && pe !== void 0 ? pe : !0,
        schemaId: (he = B.schemaId) !== null && he !== void 0 ? he : "$id",
        addUsedSchema: (le = B.addUsedSchema) !== null && le !== void 0 ? le : !0,
        validateSchema: (Be = B.validateSchema) !== null && Be !== void 0 ? Be : !0,
        validateFormats: (ye = B.validateFormats) !== null && ye !== void 0 ? ye : !0,
        unicodeRegExp: (_n = B.unicodeRegExp) !== null && _n !== void 0 ? _n : !0,
        int32range: (wn = B.int32range) !== null && wn !== void 0 ? wn : !0,
        uriResolver: ui
      };
    }
    class w {
      constructor(F = {}) {
        this.schemas = {}, this.refs = {}, this.formats = /* @__PURE__ */ Object.create(null), this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), F = this.opts = { ...F, ...g(F) };
        const { es5: V, lines: j } = this.opts.code;
        this.scope = new s.ValueScope({ scope: {}, prefixes: C, es5: V, lines: j }), this.logger = M(F.logger);
        const v = F.validateFormats;
        F.validateFormats = !1, this.RULES = (0, r.getRules)(), a.call(this, f, F, "NOT SUPPORTED"), a.call(this, m, F, "DEPRECATED", "warn"), this._metaOpts = A.call(this), F.formats && E.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), F.keywords && P.call(this, F.keywords), typeof F.meta == "object" && this.addMetaSchema(F.meta), p.call(this), F.validateFormats = v;
      }
      _addVocabularies() {
        this.addKeyword("$async");
      }
      _addDefaultMetaSchema() {
        const { $data: F, meta: V, schemaId: j } = this.opts;
        let v = _;
        j === "id" && (v = { ..._ }, v.id = v.$id, delete v.$id), V && F && this.addMetaSchema(v, v[j], !1);
      }
      defaultMeta() {
        const { meta: F, schemaId: V } = this.opts;
        return this.opts.defaultMeta = typeof F == "object" ? F[V] || F : void 0;
      }
      validate(F, V) {
        let j;
        if (typeof F == "string") {
          if (j = this.getSchema(F), !j)
            throw new Error(`no schema with key or ref "${F}"`);
        } else
          j = this.compile(F);
        const v = j(V);
        return "$async" in j || (this.errors = j.errors), v;
      }
      compile(F, V) {
        const j = this._addSchema(F, V);
        return j.validate || this._compileSchemaEnv(j);
      }
      compileAsync(F, V) {
        if (typeof this.opts.loadSchema != "function")
          throw new Error("options.loadSchema should be a function");
        const { loadSchema: j } = this.opts;
        return v.call(this, F, V);
        async function v(Q, R) {
          await k.call(this, Q.$schema);
          const N = this._addSchema(Q, R);
          return N.validate || T.call(this, N);
        }
        async function k(Q) {
          Q && !this.getSchema(Q) && await v.call(this, { $ref: Q }, !0);
        }
        async function T(Q) {
          try {
            return this._compileSchemaEnv(Q);
          } catch (R) {
            if (!(R instanceof c.default))
              throw R;
            return K.call(this, R), await H.call(this, R.missingSchema), T.call(this, Q);
          }
        }
        function K({ missingSchema: Q, missingRef: R }) {
          if (this.refs[Q])
            throw new Error(`AnySchema ${Q} is loaded but ${R} cannot be resolved`);
        }
        async function H(Q) {
          const R = await ne.call(this, Q);
          this.refs[Q] || await k.call(this, R.$schema), this.refs[Q] || this.addSchema(R, Q, V);
        }
        async function ne(Q) {
          const R = this._loading[Q];
          if (R)
            return R;
          try {
            return await (this._loading[Q] = j(Q));
          } finally {
            delete this._loading[Q];
          }
        }
      }
      // Adds schema to the instance
      addSchema(F, V, j, v = this.opts.validateSchema) {
        if (Array.isArray(F)) {
          for (const T of F)
            this.addSchema(T, void 0, j, v);
          return this;
        }
        let k;
        if (typeof F == "object") {
          const { schemaId: T } = this.opts;
          if (k = F[T], k !== void 0 && typeof k != "string")
            throw new Error(`schema ${T} must be string`);
        }
        return V = (0, d.normalizeId)(V || k), this._checkUnique(V), this.schemas[V] = this._addSchema(F, j, V, v, !0), this;
      }
      // Add schema that will be used to validate other schemas
      // options in META_IGNORE_OPTIONS are alway set to false
      addMetaSchema(F, V, j = this.opts.validateSchema) {
        return this.addSchema(F, V, !0, j), this;
      }
      //  Validate schema against its meta-schema
      validateSchema(F, V) {
        if (typeof F == "boolean")
          return !0;
        let j;
        if (j = F.$schema, j !== void 0 && typeof j != "string")
          throw new Error("$schema must be a string");
        if (j = j || this.opts.defaultMeta || this.defaultMeta(), !j)
          return this.logger.warn("meta-schema not available"), this.errors = null, !0;
        const v = this.validate(j, F);
        if (!v && V) {
          const k = "schema is invalid: " + this.errorsText();
          if (this.opts.validateSchema === "log")
            this.logger.error(k);
          else
            throw new Error(k);
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
          const { schemaId: j } = this.opts, v = new i.SchemaEnv({ schema: {}, schemaId: j });
          if (V = i.resolveSchema.call(this, v, F), !V)
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
            let j = F[this.opts.schemaId];
            return j && (j = (0, d.normalizeId)(j), delete this.schemas[j], delete this.refs[j]), this;
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
        let j;
        if (typeof F == "string")
          j = F, typeof V == "object" && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), V.keyword = j);
        else if (typeof F == "object" && V === void 0) {
          if (V = F, j = V.keyword, Array.isArray(j) && !j.length)
            throw new Error("addKeywords: keyword must be string or non-empty array");
        } else
          throw new Error("invalid addKeywords parameters");
        if (L.call(this, j, V), !V)
          return (0, h.eachItem)(j, (k) => Z.call(this, k)), this;
        ue.call(this, V);
        const v = {
          ...V,
          type: (0, y.getJSONTypes)(V.type),
          schemaType: (0, y.getJSONTypes)(V.schemaType)
        };
        return (0, h.eachItem)(j, v.type.length === 0 ? (k) => Z.call(this, k, v) : (k) => v.type.forEach((T) => Z.call(this, k, v, T))), this;
      }
      getKeyword(F) {
        const V = this.RULES.all[F];
        return typeof V == "object" ? V.definition : !!V;
      }
      // Remove keyword
      removeKeyword(F) {
        const { RULES: V } = this;
        delete V.keywords[F], delete V.all[F];
        for (const j of V.rules) {
          const v = j.rules.findIndex((k) => k.keyword === F);
          v >= 0 && j.rules.splice(v, 1);
        }
        return this;
      }
      // Add format
      addFormat(F, V) {
        return typeof V == "string" && (V = new RegExp(V)), this.formats[F] = V, this;
      }
      errorsText(F = this.errors, { separator: V = ", ", dataVar: j = "data" } = {}) {
        return !F || F.length === 0 ? "No errors" : F.map((v) => `${j}${v.instancePath} ${v.message}`).reduce((v, k) => v + V + k);
      }
      $dataMetaSchema(F, V) {
        const j = this.RULES.all;
        F = JSON.parse(JSON.stringify(F));
        for (const v of V) {
          const k = v.split("/").slice(1);
          let T = F;
          for (const K of k)
            T = T[K];
          for (const K in j) {
            const H = j[K];
            if (typeof H != "object")
              continue;
            const { $data: ne } = H.definition, Q = T[K];
            ne && Q && (T[K] = ae(Q));
          }
        }
        return F;
      }
      _removeAllSchemas(F, V) {
        for (const j in F) {
          const v = F[j];
          (!V || V.test(j)) && (typeof v == "string" ? delete F[j] : v && !v.meta && (this._cache.delete(v.schema), delete F[j]));
        }
      }
      _addSchema(F, V, j, v = this.opts.validateSchema, k = this.opts.addUsedSchema) {
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
        let H = this._cache.get(F);
        if (H !== void 0)
          return H;
        j = (0, d.normalizeId)(T || j);
        const ne = d.getSchemaRefs.call(this, F, j);
        return H = new i.SchemaEnv({ schema: F, schemaId: K, meta: V, baseId: j, localRefs: ne }), this._cache.set(H.schema, H), k && !j.startsWith("#") && (j && this._checkUnique(j), this.refs[j] = H), v && this.validateSchema(F, !0), H;
      }
      _checkUnique(F) {
        if (this.schemas[F] || this.refs[F])
          throw new Error(`schema with key or id "${F}" already exists`);
      }
      _compileSchemaEnv(F) {
        if (F.meta ? this._compileMetaSchema(F) : i.compileSchema.call(this, F), !F.validate)
          throw new Error("ajv implementation error");
        return F.validate;
      }
      _compileMetaSchema(F) {
        const V = this.opts;
        this.opts = this._metaOpts;
        try {
          i.compileSchema.call(this, F);
        } finally {
          this.opts = V;
        }
      }
    }
    w.ValidationError = o.default, w.MissingRefError = c.default, e.default = w;
    function a(B, F, V, j = "error") {
      for (const v in B) {
        const k = v;
        k in F && this.logger[j](`${V}: option ${v}. ${B[k]}`);
      }
    }
    function l(B) {
      return B = (0, d.normalizeId)(B), this.schemas[B] || this.refs[B];
    }
    function p() {
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
      for (const F of S)
        delete B[F];
      return B;
    }
    const O = { log() {
    }, warn() {
    }, error() {
    } };
    function M(B) {
      if (B === !1)
        return O;
      if (B === void 0)
        return console;
      if (B.log && B.warn && B.error)
        return B;
      throw new Error("logger must implement log, warn and error methods");
    }
    const D = /^[a-z_$][a-z0-9_$:-]*$/i;
    function L(B, F) {
      const { RULES: V } = this;
      if ((0, h.eachItem)(B, (j) => {
        if (V.keywords[j])
          throw new Error(`Keyword ${j} is already defined`);
        if (!D.test(j))
          throw new Error(`Keyword ${j} has invalid name`);
      }), !!F && F.$data && !("code" in F || "validate" in F))
        throw new Error('$data keyword must have "code" or "validate" function');
    }
    function Z(B, F, V) {
      var j;
      const v = F?.post;
      if (V && v)
        throw new Error('keyword with "post" flag cannot have "type"');
      const { RULES: k } = this;
      let T = v ? k.post : k.rules.find(({ type: H }) => H === V);
      if (T || (T = { type: V, rules: [] }, k.rules.push(T)), k.keywords[B] = !0, !F)
        return;
      const K = {
        keyword: B,
        definition: {
          ...F,
          type: (0, y.getJSONTypes)(F.type),
          schemaType: (0, y.getJSONTypes)(F.schemaType)
        }
      };
      F.before ? te.call(this, T, K, F.before) : T.rules.push(K), k.all[B] = K, (j = F.implements) === null || j === void 0 || j.forEach((H) => this.addKeyword(H));
    }
    function te(B, F, V) {
      const j = B.rules.findIndex((v) => v.keyword === V);
      j >= 0 ? B.rules.splice(j, 0, F) : (B.rules.push(F), this.logger.warn(`rule ${V} is not defined`));
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
  })(Cn)), Cn;
}
var gt = {}, yt = {}, vt = {}, Nr;
function Vi() {
  if (Nr) return vt;
  Nr = 1, Object.defineProperty(vt, "__esModule", { value: !0 });
  const e = {
    keyword: "id",
    code() {
      throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
    }
  };
  return vt.default = e, vt;
}
var Ne = {}, Mr;
function Ln() {
  if (Mr) return Ne;
  Mr = 1, Object.defineProperty(Ne, "__esModule", { value: !0 }), Ne.callRef = Ne.getValidate = void 0;
  const e = /* @__PURE__ */ vn(), t = /* @__PURE__ */ ke(), n = /* @__PURE__ */ W(), o = /* @__PURE__ */ Ce(), c = /* @__PURE__ */ $n(), r = /* @__PURE__ */ ee(), i = {
    keyword: "$ref",
    schemaType: "string",
    code(y) {
      const { gen: h, schema: _, it: $ } = y, { baseId: b, schemaEnv: S, validateName: C, opts: f, self: m } = $, { root: u } = S;
      if ((_ === "#" || _ === "#/") && b === u.baseId)
        return w();
      const g = c.resolveRef.call(m, u, b, _);
      if (g === void 0)
        throw new e.default($.opts.uriResolver, b, _);
      if (g instanceof c.SchemaEnv)
        return a(g);
      return l(g);
      function w() {
        if (S === u)
          return d(y, C, S, S.$async);
        const p = h.scopeValue("root", { ref: u });
        return d(y, (0, n._)`${p}.validate`, u, u.$async);
      }
      function a(p) {
        const E = s(y, p);
        d(y, E, p, p.$async);
      }
      function l(p) {
        const E = h.scopeValue("schema", f.code.source === !0 ? { ref: p, code: (0, n.stringify)(p) } : { ref: p }), P = h.name("valid"), A = y.subschema({
          schema: p,
          dataTypes: [],
          schemaPath: n.nil,
          topSchemaRef: E,
          errSchemaPath: _
        }, P);
        y.mergeEvaluated(A), y.ok(P);
      }
    }
  };
  function s(y, h) {
    const { gen: _ } = y;
    return h.validate ? _.scopeValue("validate", { ref: h.validate }) : (0, n._)`${_.scopeValue("wrapper", { ref: h })}.validate`;
  }
  Ne.getValidate = s;
  function d(y, h, _, $) {
    const { gen: b, it: S } = y, { allErrors: C, schemaEnv: f, opts: m } = S, u = m.passContext ? o.default.this : n.nil;
    $ ? g() : w();
    function g() {
      if (!f.$async)
        throw new Error("async schema referenced by sync schema");
      const p = b.let("valid");
      b.try(() => {
        b.code((0, n._)`await ${(0, t.callValidateCode)(y, h, u)}`), l(h), C || b.assign(p, !0);
      }, (E) => {
        b.if((0, n._)`!(${E} instanceof ${S.ValidationError})`, () => b.throw(E)), a(E), C || b.assign(p, !1);
      }), y.ok(p);
    }
    function w() {
      y.result((0, t.callValidateCode)(y, h, u), () => l(h), () => a(h));
    }
    function a(p) {
      const E = (0, n._)`${p}.errors`;
      b.assign(o.default.vErrors, (0, n._)`${o.default.vErrors} === null ? ${E} : ${o.default.vErrors}.concat(${E})`), b.assign(o.default.errors, (0, n._)`${o.default.vErrors}.length`);
    }
    function l(p) {
      var E;
      if (!S.opts.unevaluated)
        return;
      const P = (E = _?.validate) === null || E === void 0 ? void 0 : E.evaluated;
      if (S.props !== !0)
        if (P && !P.dynamicProps)
          P.props !== void 0 && (S.props = r.mergeEvaluated.props(b, P.props, S.props));
        else {
          const A = b.var("props", (0, n._)`${p}.evaluated.props`);
          S.props = r.mergeEvaluated.props(b, A, S.props, n.Name);
        }
      if (S.items !== !0)
        if (P && !P.dynamicItems)
          P.items !== void 0 && (S.items = r.mergeEvaluated.items(b, P.items, S.items));
        else {
          const A = b.var("items", (0, n._)`${p}.evaluated.items`);
          S.items = r.mergeEvaluated.items(b, A, S.items, n.Name);
        }
    }
  }
  return Ne.callRef = d, Ne.default = i, Ne;
}
var jr;
function Bi() {
  if (jr) return yt;
  jr = 1, Object.defineProperty(yt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Vi(), t = /* @__PURE__ */ Ln(), n = [
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
var $t = {}, bt = {}, Or;
function Li() {
  if (Or) return bt;
  Or = 1, Object.defineProperty(bt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ W(), t = e.operators, n = {
    maximum: { okStr: "<=", ok: t.LTE, fail: t.GT },
    minimum: { okStr: ">=", ok: t.GTE, fail: t.LT },
    exclusiveMaximum: { okStr: "<", ok: t.LT, fail: t.GTE },
    exclusiveMinimum: { okStr: ">", ok: t.GT, fail: t.LTE }
  }, o = {
    message: ({ keyword: r, schemaCode: i }) => (0, e.str)`must be ${n[r].okStr} ${i}`,
    params: ({ keyword: r, schemaCode: i }) => (0, e._)`{comparison: ${n[r].okStr}, limit: ${i}}`
  }, c = {
    keyword: Object.keys(n),
    type: "number",
    schemaType: "number",
    $data: !0,
    error: o,
    code(r) {
      const { keyword: i, data: s, schemaCode: d } = r;
      r.fail$data((0, e._)`${s} ${n[i].fail} ${d} || isNaN(${s})`);
    }
  };
  return bt.default = c, bt;
}
var _t = {}, Tr;
function Ui() {
  if (Tr) return _t;
  Tr = 1, Object.defineProperty(_t, "__esModule", { value: !0 });
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
      const { gen: c, data: r, schemaCode: i, it: s } = o, d = s.opts.multipleOfPrecision, y = c.let("res"), h = d ? (0, e._)`Math.abs(Math.round(${y}) - ${y}) > 1e-${d}` : (0, e._)`${y} !== parseInt(${y})`;
      o.fail$data((0, e._)`(${i} === 0 || (${y} = ${r}/${i}, ${h}))`);
    }
  };
  return _t.default = n, _t;
}
var wt = {}, St = {}, zr;
function Ki() {
  if (zr) return St;
  zr = 1, Object.defineProperty(St, "__esModule", { value: !0 });
  function e(t) {
    const n = t.length;
    let o = 0, c = 0, r;
    for (; c < n; )
      o++, r = t.charCodeAt(c++), r >= 55296 && r <= 56319 && c < n && (r = t.charCodeAt(c), (r & 64512) === 56320 && c++);
    return o;
  }
  return St.default = e, e.code = 'require("ajv/dist/runtime/ucs2length").default', St;
}
var Ir;
function Hi() {
  if (Ir) return wt;
  Ir = 1, Object.defineProperty(wt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ W(), t = /* @__PURE__ */ ee(), n = /* @__PURE__ */ Ki(), c = {
    keyword: ["maxLength", "minLength"],
    type: "string",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: r, schemaCode: i }) {
        const s = r === "maxLength" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${s} than ${i} characters`;
      },
      params: ({ schemaCode: r }) => (0, e._)`{limit: ${r}}`
    },
    code(r) {
      const { keyword: i, data: s, schemaCode: d, it: y } = r, h = i === "maxLength" ? e.operators.GT : e.operators.LT, _ = y.opts.unicode === !1 ? (0, e._)`${s}.length` : (0, e._)`${(0, t.useFunc)(r.gen, n.default)}(${s})`;
      r.fail$data((0, e._)`${_} ${h} ${d}`);
    }
  };
  return wt.default = c, wt;
}
var Ct = {}, Dr;
function Gi() {
  if (Dr) return Ct;
  Dr = 1, Object.defineProperty(Ct, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ke(), t = /* @__PURE__ */ ee(), n = /* @__PURE__ */ W(), c = {
    keyword: "pattern",
    type: "string",
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: r }) => (0, n.str)`must match pattern "${r}"`,
      params: ({ schemaCode: r }) => (0, n._)`{pattern: ${r}}`
    },
    code(r) {
      const { gen: i, data: s, $data: d, schema: y, schemaCode: h, it: _ } = r, $ = _.opts.unicodeRegExp ? "u" : "";
      if (d) {
        const { regExp: b } = _.opts.code, S = b.code === "new RegExp" ? (0, n._)`new RegExp` : (0, t.useFunc)(i, b), C = i.let("valid");
        i.try(() => i.assign(C, (0, n._)`${S}(${h}, ${$}).test(${s})`), () => i.assign(C, !1)), r.fail$data((0, n._)`!${C}`);
      } else {
        const b = (0, e.usePattern)(r, y);
        r.fail$data((0, n._)`!${b}.test(${s})`);
      }
    }
  };
  return Ct.default = c, Ct;
}
var kt = {}, qr;
function Ji() {
  if (qr) return kt;
  qr = 1, Object.defineProperty(kt, "__esModule", { value: !0 });
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
      const { keyword: c, data: r, schemaCode: i } = o, s = c === "maxProperties" ? e.operators.GT : e.operators.LT;
      o.fail$data((0, e._)`Object.keys(${r}).length ${s} ${i}`);
    }
  };
  return kt.default = n, kt;
}
var Et = {}, Vr;
function Wi() {
  if (Vr) return Et;
  Vr = 1, Object.defineProperty(Et, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ke(), t = /* @__PURE__ */ W(), n = /* @__PURE__ */ ee(), c = {
    keyword: "required",
    type: "object",
    schemaType: "array",
    $data: !0,
    error: {
      message: ({ params: { missingProperty: r } }) => (0, t.str)`must have required property '${r}'`,
      params: ({ params: { missingProperty: r } }) => (0, t._)`{missingProperty: ${r}}`
    },
    code(r) {
      const { gen: i, schema: s, schemaCode: d, data: y, $data: h, it: _ } = r, { opts: $ } = _;
      if (!h && s.length === 0)
        return;
      const b = s.length >= $.loopRequired;
      if (_.allErrors ? S() : C(), $.strictRequired) {
        const u = r.parentSchema.properties, { definedProperties: g } = r.it;
        for (const w of s)
          if (u?.[w] === void 0 && !g.has(w)) {
            const a = _.schemaEnv.baseId + _.errSchemaPath, l = `required property "${w}" is not defined at "${a}" (strictRequired)`;
            (0, n.checkStrictMode)(_, l, _.opts.strictRequired);
          }
      }
      function S() {
        if (b || h)
          r.block$data(t.nil, f);
        else
          for (const u of s)
            (0, e.checkReportMissingProp)(r, u);
      }
      function C() {
        const u = i.let("missing");
        if (b || h) {
          const g = i.let("valid", !0);
          r.block$data(g, () => m(u, g)), r.ok(g);
        } else
          i.if((0, e.checkMissingProp)(r, s, u)), (0, e.reportMissingProp)(r, u), i.else();
      }
      function f() {
        i.forOf("prop", d, (u) => {
          r.setParams({ missingProperty: u }), i.if((0, e.noPropertyInData)(i, y, u, $.ownProperties), () => r.error());
        });
      }
      function m(u, g) {
        r.setParams({ missingProperty: u }), i.forOf(u, d, () => {
          i.assign(g, (0, e.propertyInData)(i, y, u, $.ownProperties)), i.if((0, t.not)(g), () => {
            r.error(), i.break();
          });
        }, t.nil);
      }
    }
  };
  return Et.default = c, Et;
}
var Pt = {}, Br;
function Yi() {
  if (Br) return Pt;
  Br = 1, Object.defineProperty(Pt, "__esModule", { value: !0 });
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
      const { keyword: c, data: r, schemaCode: i } = o, s = c === "maxItems" ? e.operators.GT : e.operators.LT;
      o.fail$data((0, e._)`${r}.length ${s} ${i}`);
    }
  };
  return Pt.default = n, Pt;
}
var xt = {}, Rt = {}, Lr;
function Un() {
  if (Lr) return Rt;
  Lr = 1, Object.defineProperty(Rt, "__esModule", { value: !0 });
  const e = Ho();
  return e.code = 'require("ajv/dist/runtime/equal").default', Rt.default = e, Rt;
}
var Ur;
function Xi() {
  if (Ur) return xt;
  Ur = 1, Object.defineProperty(xt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ pn(), t = /* @__PURE__ */ W(), n = /* @__PURE__ */ ee(), o = /* @__PURE__ */ Un(), r = {
    keyword: "uniqueItems",
    type: "array",
    schemaType: "boolean",
    $data: !0,
    error: {
      message: ({ params: { i, j: s } }) => (0, t.str)`must NOT have duplicate items (items ## ${s} and ${i} are identical)`,
      params: ({ params: { i, j: s } }) => (0, t._)`{i: ${i}, j: ${s}}`
    },
    code(i) {
      const { gen: s, data: d, $data: y, schema: h, parentSchema: _, schemaCode: $, it: b } = i;
      if (!y && !h)
        return;
      const S = s.let("valid"), C = _.items ? (0, e.getSchemaTypes)(_.items) : [];
      i.block$data(S, f, (0, t._)`${$} === false`), i.ok(S);
      function f() {
        const w = s.let("i", (0, t._)`${d}.length`), a = s.let("j");
        i.setParams({ i: w, j: a }), s.assign(S, !0), s.if((0, t._)`${w} > 1`, () => (m() ? u : g)(w, a));
      }
      function m() {
        return C.length > 0 && !C.some((w) => w === "object" || w === "array");
      }
      function u(w, a) {
        const l = s.name("item"), p = (0, e.checkDataTypes)(C, l, b.opts.strictNumbers, e.DataType.Wrong), E = s.const("indices", (0, t._)`{}`);
        s.for((0, t._)`;${w}--;`, () => {
          s.let(l, (0, t._)`${d}[${w}]`), s.if(p, (0, t._)`continue`), C.length > 1 && s.if((0, t._)`typeof ${l} == "string"`, (0, t._)`${l} += "_"`), s.if((0, t._)`typeof ${E}[${l}] == "number"`, () => {
            s.assign(a, (0, t._)`${E}[${l}]`), i.error(), s.assign(S, !1).break();
          }).code((0, t._)`${E}[${l}] = ${w}`);
        });
      }
      function g(w, a) {
        const l = (0, n.useFunc)(s, o.default), p = s.name("outer");
        s.label(p).for((0, t._)`;${w}--;`, () => s.for((0, t._)`${a} = ${w}; ${a}--;`, () => s.if((0, t._)`${l}(${d}[${w}], ${d}[${a}])`, () => {
          i.error(), s.assign(S, !1).break(p);
        })));
      }
    }
  };
  return xt.default = r, xt;
}
var At = {}, Kr;
function Zi() {
  if (Kr) return At;
  Kr = 1, Object.defineProperty(At, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ W(), t = /* @__PURE__ */ ee(), n = /* @__PURE__ */ Un(), c = {
    keyword: "const",
    $data: !0,
    error: {
      message: "must be equal to constant",
      params: ({ schemaCode: r }) => (0, e._)`{allowedValue: ${r}}`
    },
    code(r) {
      const { gen: i, data: s, $data: d, schemaCode: y, schema: h } = r;
      d || h && typeof h == "object" ? r.fail$data((0, e._)`!${(0, t.useFunc)(i, n.default)}(${s}, ${y})`) : r.fail((0, e._)`${h} !== ${s}`);
    }
  };
  return At.default = c, At;
}
var Ft = {}, Hr;
function Qi() {
  if (Hr) return Ft;
  Hr = 1, Object.defineProperty(Ft, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ W(), t = /* @__PURE__ */ ee(), n = /* @__PURE__ */ Un(), c = {
    keyword: "enum",
    schemaType: "array",
    $data: !0,
    error: {
      message: "must be equal to one of the allowed values",
      params: ({ schemaCode: r }) => (0, e._)`{allowedValues: ${r}}`
    },
    code(r) {
      const { gen: i, data: s, $data: d, schema: y, schemaCode: h, it: _ } = r;
      if (!d && y.length === 0)
        throw new Error("enum must have non-empty array");
      const $ = y.length >= _.opts.loopEnum;
      let b;
      const S = () => b ?? (b = (0, t.useFunc)(i, n.default));
      let C;
      if ($ || d)
        C = i.let("valid"), r.block$data(C, f);
      else {
        if (!Array.isArray(y))
          throw new Error("ajv implementation error");
        const u = i.const("vSchema", h);
        C = (0, e.or)(...y.map((g, w) => m(u, w)));
      }
      r.pass(C);
      function f() {
        i.assign(C, !1), i.forOf("v", h, (u) => i.if((0, e._)`${S()}(${s}, ${u})`, () => i.assign(C, !0).break()));
      }
      function m(u, g) {
        const w = y[g];
        return typeof w == "object" && w !== null ? (0, e._)`${S()}(${s}, ${u}[${g}])` : (0, e._)`${s} === ${w}`;
      }
    }
  };
  return Ft.default = c, Ft;
}
var Gr;
function es() {
  if (Gr) return $t;
  Gr = 1, Object.defineProperty($t, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Li(), t = /* @__PURE__ */ Ui(), n = /* @__PURE__ */ Hi(), o = /* @__PURE__ */ Gi(), c = /* @__PURE__ */ Ji(), r = /* @__PURE__ */ Wi(), i = /* @__PURE__ */ Yi(), s = /* @__PURE__ */ Xi(), d = /* @__PURE__ */ Zi(), y = /* @__PURE__ */ Qi(), h = [
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
    i.default,
    s.default,
    // any
    { keyword: "type", schemaType: ["string", "array"] },
    { keyword: "nullable", schemaType: "boolean" },
    d.default,
    y.default
  ];
  return $t.default = h, $t;
}
var Nt = {}, Le = {}, Jr;
function Jo() {
  if (Jr) return Le;
  Jr = 1, Object.defineProperty(Le, "__esModule", { value: !0 }), Le.validateAdditionalItems = void 0;
  const e = /* @__PURE__ */ W(), t = /* @__PURE__ */ ee(), o = {
    keyword: "additionalItems",
    type: "array",
    schemaType: ["boolean", "object"],
    before: "uniqueItems",
    error: {
      message: ({ params: { len: r } }) => (0, e.str)`must NOT have more than ${r} items`,
      params: ({ params: { len: r } }) => (0, e._)`{limit: ${r}}`
    },
    code(r) {
      const { parentSchema: i, it: s } = r, { items: d } = i;
      if (!Array.isArray(d)) {
        (0, t.checkStrictMode)(s, '"additionalItems" is ignored when "items" is not an array of schemas');
        return;
      }
      c(r, d);
    }
  };
  function c(r, i) {
    const { gen: s, schema: d, data: y, keyword: h, it: _ } = r;
    _.items = !0;
    const $ = s.const("len", (0, e._)`${y}.length`);
    if (d === !1)
      r.setParams({ len: i.length }), r.pass((0, e._)`${$} <= ${i.length}`);
    else if (typeof d == "object" && !(0, t.alwaysValidSchema)(_, d)) {
      const S = s.var("valid", (0, e._)`${$} <= ${i.length}`);
      s.if((0, e.not)(S), () => b(S)), r.ok(S);
    }
    function b(S) {
      s.forRange("i", i.length, $, (C) => {
        r.subschema({ keyword: h, dataProp: C, dataPropType: t.Type.Num }, S), _.allErrors || s.if((0, e.not)(S), () => s.break());
      });
    }
  }
  return Le.validateAdditionalItems = c, Le.default = o, Le;
}
var Mt = {}, Ue = {}, Wr;
function Wo() {
  if (Wr) return Ue;
  Wr = 1, Object.defineProperty(Ue, "__esModule", { value: !0 }), Ue.validateTuple = void 0;
  const e = /* @__PURE__ */ W(), t = /* @__PURE__ */ ee(), n = /* @__PURE__ */ ke(), o = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "array", "boolean"],
    before: "uniqueItems",
    code(r) {
      const { schema: i, it: s } = r;
      if (Array.isArray(i))
        return c(r, "additionalItems", i);
      s.items = !0, !(0, t.alwaysValidSchema)(s, i) && r.ok((0, n.validateArray)(r));
    }
  };
  function c(r, i, s = r.schema) {
    const { gen: d, parentSchema: y, data: h, keyword: _, it: $ } = r;
    C(y), $.opts.unevaluated && s.length && $.items !== !0 && ($.items = t.mergeEvaluated.items(d, s.length, $.items));
    const b = d.name("valid"), S = d.const("len", (0, e._)`${h}.length`);
    s.forEach((f, m) => {
      (0, t.alwaysValidSchema)($, f) || (d.if((0, e._)`${S} > ${m}`, () => r.subschema({
        keyword: _,
        schemaProp: m,
        dataProp: m
      }, b)), r.ok(b));
    });
    function C(f) {
      const { opts: m, errSchemaPath: u } = $, g = s.length, w = g === f.minItems && (g === f.maxItems || f[i] === !1);
      if (m.strictTuples && !w) {
        const a = `"${_}" is ${g}-tuple, but minItems or maxItems/${i} are not specified or different at path "${u}"`;
        (0, t.checkStrictMode)($, a, m.strictTuples);
      }
    }
  }
  return Ue.validateTuple = c, Ue.default = o, Ue;
}
var Yr;
function ts() {
  if (Yr) return Mt;
  Yr = 1, Object.defineProperty(Mt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Wo(), t = {
    keyword: "prefixItems",
    type: "array",
    schemaType: ["array"],
    before: "uniqueItems",
    code: (n) => (0, e.validateTuple)(n, "items")
  };
  return Mt.default = t, Mt;
}
var jt = {}, Xr;
function ns() {
  if (Xr) return jt;
  Xr = 1, Object.defineProperty(jt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ W(), t = /* @__PURE__ */ ee(), n = /* @__PURE__ */ ke(), o = /* @__PURE__ */ Jo(), r = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    error: {
      message: ({ params: { len: i } }) => (0, e.str)`must NOT have more than ${i} items`,
      params: ({ params: { len: i } }) => (0, e._)`{limit: ${i}}`
    },
    code(i) {
      const { schema: s, parentSchema: d, it: y } = i, { prefixItems: h } = d;
      y.items = !0, !(0, t.alwaysValidSchema)(y, s) && (h ? (0, o.validateAdditionalItems)(i, h) : i.ok((0, n.validateArray)(i)));
    }
  };
  return jt.default = r, jt;
}
var Ot = {}, Zr;
function rs() {
  if (Zr) return Ot;
  Zr = 1, Object.defineProperty(Ot, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ W(), t = /* @__PURE__ */ ee(), o = {
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
      const { gen: r, schema: i, parentSchema: s, data: d, it: y } = c;
      let h, _;
      const { minContains: $, maxContains: b } = s;
      y.opts.next ? (h = $ === void 0 ? 1 : $, _ = b) : h = 1;
      const S = r.const("len", (0, e._)`${d}.length`);
      if (c.setParams({ min: h, max: _ }), _ === void 0 && h === 0) {
        (0, t.checkStrictMode)(y, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
        return;
      }
      if (_ !== void 0 && h > _) {
        (0, t.checkStrictMode)(y, '"minContains" > "maxContains" is always invalid'), c.fail();
        return;
      }
      if ((0, t.alwaysValidSchema)(y, i)) {
        let g = (0, e._)`${S} >= ${h}`;
        _ !== void 0 && (g = (0, e._)`${g} && ${S} <= ${_}`), c.pass(g);
        return;
      }
      y.items = !0;
      const C = r.name("valid");
      _ === void 0 && h === 1 ? m(C, () => r.if(C, () => r.break())) : h === 0 ? (r.let(C, !0), _ !== void 0 && r.if((0, e._)`${d}.length > 0`, f)) : (r.let(C, !1), f()), c.result(C, () => c.reset());
      function f() {
        const g = r.name("_valid"), w = r.let("count", 0);
        m(g, () => r.if(g, () => u(w)));
      }
      function m(g, w) {
        r.forRange("i", 0, S, (a) => {
          c.subschema({
            keyword: "contains",
            dataProp: a,
            dataPropType: t.Type.Num,
            compositeRule: !0
          }, g), w();
        });
      }
      function u(g) {
        r.code((0, e._)`${g}++`), _ === void 0 ? r.if((0, e._)`${g} >= ${h}`, () => r.assign(C, !0).break()) : (r.if((0, e._)`${g} > ${_}`, () => r.assign(C, !1).break()), h === 1 ? r.assign(C, !0) : r.if((0, e._)`${g} >= ${h}`, () => r.assign(C, !0)));
      }
    }
  };
  return Ot.default = o, Ot;
}
var Mn = {}, Qr;
function Kn() {
  return Qr || (Qr = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
    const t = /* @__PURE__ */ W(), n = /* @__PURE__ */ ee(), o = /* @__PURE__ */ ke();
    e.error = {
      message: ({ params: { property: d, depsCount: y, deps: h } }) => {
        const _ = y === 1 ? "property" : "properties";
        return (0, t.str)`must have ${_} ${h} when property ${d} is present`;
      },
      params: ({ params: { property: d, depsCount: y, deps: h, missingProperty: _ } }) => (0, t._)`{property: ${d},
    missingProperty: ${_},
    depsCount: ${y},
    deps: ${h}}`
      // TODO change to reference
    };
    const c = {
      keyword: "dependencies",
      type: "object",
      schemaType: "object",
      error: e.error,
      code(d) {
        const [y, h] = r(d);
        i(d, y), s(d, h);
      }
    };
    function r({ schema: d }) {
      const y = {}, h = {};
      for (const _ in d) {
        if (_ === "__proto__")
          continue;
        const $ = Array.isArray(d[_]) ? y : h;
        $[_] = d[_];
      }
      return [y, h];
    }
    function i(d, y = d.schema) {
      const { gen: h, data: _, it: $ } = d;
      if (Object.keys(y).length === 0)
        return;
      const b = h.let("missing");
      for (const S in y) {
        const C = y[S];
        if (C.length === 0)
          continue;
        const f = (0, o.propertyInData)(h, _, S, $.opts.ownProperties);
        d.setParams({
          property: S,
          depsCount: C.length,
          deps: C.join(", ")
        }), $.allErrors ? h.if(f, () => {
          for (const m of C)
            (0, o.checkReportMissingProp)(d, m);
        }) : (h.if((0, t._)`${f} && (${(0, o.checkMissingProp)(d, C, b)})`), (0, o.reportMissingProp)(d, b), h.else());
      }
    }
    e.validatePropertyDeps = i;
    function s(d, y = d.schema) {
      const { gen: h, data: _, keyword: $, it: b } = d, S = h.name("valid");
      for (const C in y)
        (0, n.alwaysValidSchema)(b, y[C]) || (h.if(
          (0, o.propertyInData)(h, _, C, b.opts.ownProperties),
          () => {
            const f = d.subschema({ keyword: $, schemaProp: C }, S);
            d.mergeValidEvaluated(f, S);
          },
          () => h.var(S, !0)
          // TODO var
        ), d.ok(S));
    }
    e.validateSchemaDeps = s, e.default = c;
  })(Mn)), Mn;
}
var Tt = {}, eo;
function os() {
  if (eo) return Tt;
  eo = 1, Object.defineProperty(Tt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ W(), t = /* @__PURE__ */ ee(), o = {
    keyword: "propertyNames",
    type: "object",
    schemaType: ["object", "boolean"],
    error: {
      message: "property name must be valid",
      params: ({ params: c }) => (0, e._)`{propertyName: ${c.propertyName}}`
    },
    code(c) {
      const { gen: r, schema: i, data: s, it: d } = c;
      if ((0, t.alwaysValidSchema)(d, i))
        return;
      const y = r.name("valid");
      r.forIn("key", s, (h) => {
        c.setParams({ propertyName: h }), c.subschema({
          keyword: "propertyNames",
          data: h,
          dataTypes: ["string"],
          propertyName: h,
          compositeRule: !0
        }, y), r.if((0, e.not)(y), () => {
          c.error(!0), d.allErrors || r.break();
        });
      }), c.ok(y);
    }
  };
  return Tt.default = o, Tt;
}
var zt = {}, to;
function Yo() {
  if (to) return zt;
  to = 1, Object.defineProperty(zt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ke(), t = /* @__PURE__ */ W(), n = /* @__PURE__ */ Ce(), o = /* @__PURE__ */ ee(), r = {
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
      const { gen: s, schema: d, parentSchema: y, data: h, errsCount: _, it: $ } = i;
      if (!_)
        throw new Error("ajv implementation error");
      const { allErrors: b, opts: S } = $;
      if ($.props = !0, S.removeAdditional !== "all" && (0, o.alwaysValidSchema)($, d))
        return;
      const C = (0, e.allSchemaProperties)(y.properties), f = (0, e.allSchemaProperties)(y.patternProperties);
      m(), i.ok((0, t._)`${_} === ${n.default.errors}`);
      function m() {
        s.forIn("key", h, (l) => {
          !C.length && !f.length ? w(l) : s.if(u(l), () => w(l));
        });
      }
      function u(l) {
        let p;
        if (C.length > 8) {
          const E = (0, o.schemaRefOrVal)($, y.properties, "properties");
          p = (0, e.isOwnProperty)(s, E, l);
        } else C.length ? p = (0, t.or)(...C.map((E) => (0, t._)`${l} === ${E}`)) : p = t.nil;
        return f.length && (p = (0, t.or)(p, ...f.map((E) => (0, t._)`${(0, e.usePattern)(i, E)}.test(${l})`))), (0, t.not)(p);
      }
      function g(l) {
        s.code((0, t._)`delete ${h}[${l}]`);
      }
      function w(l) {
        if (S.removeAdditional === "all" || S.removeAdditional && d === !1) {
          g(l);
          return;
        }
        if (d === !1) {
          i.setParams({ additionalProperty: l }), i.error(), b || s.break();
          return;
        }
        if (typeof d == "object" && !(0, o.alwaysValidSchema)($, d)) {
          const p = s.name("valid");
          S.removeAdditional === "failing" ? (a(l, p, !1), s.if((0, t.not)(p), () => {
            i.reset(), g(l);
          })) : (a(l, p), b || s.if((0, t.not)(p), () => s.break()));
        }
      }
      function a(l, p, E) {
        const P = {
          keyword: "additionalProperties",
          dataProp: l,
          dataPropType: o.Type.Str
        };
        E === !1 && Object.assign(P, {
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }), i.subschema(P, p);
      }
    }
  };
  return zt.default = r, zt;
}
var It = {}, no;
function is() {
  if (no) return It;
  no = 1, Object.defineProperty(It, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ yn(), t = /* @__PURE__ */ ke(), n = /* @__PURE__ */ ee(), o = /* @__PURE__ */ Yo(), c = {
    keyword: "properties",
    type: "object",
    schemaType: "object",
    code(r) {
      const { gen: i, schema: s, parentSchema: d, data: y, it: h } = r;
      h.opts.removeAdditional === "all" && d.additionalProperties === void 0 && o.default.code(new e.KeywordCxt(h, o.default, "additionalProperties"));
      const _ = (0, t.allSchemaProperties)(s);
      for (const f of _)
        h.definedProperties.add(f);
      h.opts.unevaluated && _.length && h.props !== !0 && (h.props = n.mergeEvaluated.props(i, (0, n.toHash)(_), h.props));
      const $ = _.filter((f) => !(0, n.alwaysValidSchema)(h, s[f]));
      if ($.length === 0)
        return;
      const b = i.name("valid");
      for (const f of $)
        S(f) ? C(f) : (i.if((0, t.propertyInData)(i, y, f, h.opts.ownProperties)), C(f), h.allErrors || i.else().var(b, !0), i.endIf()), r.it.definedProperties.add(f), r.ok(b);
      function S(f) {
        return h.opts.useDefaults && !h.compositeRule && s[f].default !== void 0;
      }
      function C(f) {
        r.subschema({
          keyword: "properties",
          schemaProp: f,
          dataProp: f
        }, b);
      }
    }
  };
  return It.default = c, It;
}
var Dt = {}, ro;
function ss() {
  if (ro) return Dt;
  ro = 1, Object.defineProperty(Dt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ke(), t = /* @__PURE__ */ W(), n = /* @__PURE__ */ ee(), o = /* @__PURE__ */ ee(), c = {
    keyword: "patternProperties",
    type: "object",
    schemaType: "object",
    code(r) {
      const { gen: i, schema: s, data: d, parentSchema: y, it: h } = r, { opts: _ } = h, $ = (0, e.allSchemaProperties)(s), b = $.filter((w) => (0, n.alwaysValidSchema)(h, s[w]));
      if ($.length === 0 || b.length === $.length && (!h.opts.unevaluated || h.props === !0))
        return;
      const S = _.strictSchema && !_.allowMatchingProperties && y.properties, C = i.name("valid");
      h.props !== !0 && !(h.props instanceof t.Name) && (h.props = (0, o.evaluatedPropsToName)(i, h.props));
      const { props: f } = h;
      m();
      function m() {
        for (const w of $)
          S && u(w), h.allErrors ? g(w) : (i.var(C, !0), g(w), i.if(C));
      }
      function u(w) {
        for (const a in S)
          new RegExp(w).test(a) && (0, n.checkStrictMode)(h, `property ${a} matches pattern ${w} (use allowMatchingProperties)`);
      }
      function g(w) {
        i.forIn("key", d, (a) => {
          i.if((0, t._)`${(0, e.usePattern)(r, w)}.test(${a})`, () => {
            const l = b.includes(w);
            l || r.subschema({
              keyword: "patternProperties",
              schemaProp: w,
              dataProp: a,
              dataPropType: o.Type.Str
            }, C), h.opts.unevaluated && f !== !0 ? i.assign((0, t._)`${f}[${a}]`, !0) : !l && !h.allErrors && i.if((0, t.not)(C), () => i.break());
          });
        });
      }
    }
  };
  return Dt.default = c, Dt;
}
var qt = {}, oo;
function as() {
  if (oo) return qt;
  oo = 1, Object.defineProperty(qt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = {
    keyword: "not",
    schemaType: ["object", "boolean"],
    trackErrors: !0,
    code(n) {
      const { gen: o, schema: c, it: r } = n;
      if ((0, e.alwaysValidSchema)(r, c)) {
        n.fail();
        return;
      }
      const i = o.name("valid");
      n.subschema({
        keyword: "not",
        compositeRule: !0,
        createErrors: !1,
        allErrors: !1
      }, i), n.failResult(i, () => n.reset(), () => n.error());
    },
    error: { message: "must NOT be valid" }
  };
  return qt.default = t, qt;
}
var Vt = {}, io;
function cs() {
  if (io) return Vt;
  io = 1, Object.defineProperty(Vt, "__esModule", { value: !0 });
  const t = {
    keyword: "anyOf",
    schemaType: "array",
    trackErrors: !0,
    code: (/* @__PURE__ */ ke()).validateUnion,
    error: { message: "must match a schema in anyOf" }
  };
  return Vt.default = t, Vt;
}
var Bt = {}, so;
function ls() {
  if (so) return Bt;
  so = 1, Object.defineProperty(Bt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ W(), t = /* @__PURE__ */ ee(), o = {
    keyword: "oneOf",
    schemaType: "array",
    trackErrors: !0,
    error: {
      message: "must match exactly one schema in oneOf",
      params: ({ params: c }) => (0, e._)`{passingSchemas: ${c.passing}}`
    },
    code(c) {
      const { gen: r, schema: i, parentSchema: s, it: d } = c;
      if (!Array.isArray(i))
        throw new Error("ajv implementation error");
      if (d.opts.discriminator && s.discriminator)
        return;
      const y = i, h = r.let("valid", !1), _ = r.let("passing", null), $ = r.name("_valid");
      c.setParams({ passing: _ }), r.block(b), c.result(h, () => c.reset(), () => c.error(!0));
      function b() {
        y.forEach((S, C) => {
          let f;
          (0, t.alwaysValidSchema)(d, S) ? r.var($, !0) : f = c.subschema({
            keyword: "oneOf",
            schemaProp: C,
            compositeRule: !0
          }, $), C > 0 && r.if((0, e._)`${$} && ${h}`).assign(h, !1).assign(_, (0, e._)`[${_}, ${C}]`).else(), r.if($, () => {
            r.assign(h, !0), r.assign(_, C), f && c.mergeEvaluated(f, e.Name);
          });
        });
      }
    }
  };
  return Bt.default = o, Bt;
}
var Lt = {}, ao;
function ds() {
  if (ao) return Lt;
  ao = 1, Object.defineProperty(Lt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = {
    keyword: "allOf",
    schemaType: "array",
    code(n) {
      const { gen: o, schema: c, it: r } = n;
      if (!Array.isArray(c))
        throw new Error("ajv implementation error");
      const i = o.name("valid");
      c.forEach((s, d) => {
        if ((0, e.alwaysValidSchema)(r, s))
          return;
        const y = n.subschema({ keyword: "allOf", schemaProp: d }, i);
        n.ok(i), n.mergeEvaluated(y);
      });
    }
  };
  return Lt.default = t, Lt;
}
var Ut = {}, co;
function us() {
  if (co) return Ut;
  co = 1, Object.defineProperty(Ut, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ W(), t = /* @__PURE__ */ ee(), o = {
    keyword: "if",
    schemaType: ["object", "boolean"],
    trackErrors: !0,
    error: {
      message: ({ params: r }) => (0, e.str)`must match "${r.ifClause}" schema`,
      params: ({ params: r }) => (0, e._)`{failingKeyword: ${r.ifClause}}`
    },
    code(r) {
      const { gen: i, parentSchema: s, it: d } = r;
      s.then === void 0 && s.else === void 0 && (0, t.checkStrictMode)(d, '"if" without "then" and "else" is ignored');
      const y = c(d, "then"), h = c(d, "else");
      if (!y && !h)
        return;
      const _ = i.let("valid", !0), $ = i.name("_valid");
      if (b(), r.reset(), y && h) {
        const C = i.let("ifClause");
        r.setParams({ ifClause: C }), i.if($, S("then", C), S("else", C));
      } else y ? i.if($, S("then")) : i.if((0, e.not)($), S("else"));
      r.pass(_, () => r.error(!0));
      function b() {
        const C = r.subschema({
          keyword: "if",
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }, $);
        r.mergeEvaluated(C);
      }
      function S(C, f) {
        return () => {
          const m = r.subschema({ keyword: C }, $);
          i.assign(_, $), r.mergeValidEvaluated(m, _), f ? i.assign(f, (0, e._)`${C}`) : r.setParams({ ifClause: C });
        };
      }
    }
  };
  function c(r, i) {
    const s = r.schema[i];
    return s !== void 0 && !(0, t.alwaysValidSchema)(r, s);
  }
  return Ut.default = o, Ut;
}
var Kt = {}, lo;
function fs() {
  if (lo) return Kt;
  lo = 1, Object.defineProperty(Kt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = {
    keyword: ["then", "else"],
    schemaType: ["object", "boolean"],
    code({ keyword: n, parentSchema: o, it: c }) {
      o.if === void 0 && (0, e.checkStrictMode)(c, `"${n}" without "if" is ignored`);
    }
  };
  return Kt.default = t, Kt;
}
var uo;
function ps() {
  if (uo) return Nt;
  uo = 1, Object.defineProperty(Nt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Jo(), t = /* @__PURE__ */ ts(), n = /* @__PURE__ */ Wo(), o = /* @__PURE__ */ ns(), c = /* @__PURE__ */ rs(), r = /* @__PURE__ */ Kn(), i = /* @__PURE__ */ os(), s = /* @__PURE__ */ Yo(), d = /* @__PURE__ */ is(), y = /* @__PURE__ */ ss(), h = /* @__PURE__ */ as(), _ = /* @__PURE__ */ cs(), $ = /* @__PURE__ */ ls(), b = /* @__PURE__ */ ds(), S = /* @__PURE__ */ us(), C = /* @__PURE__ */ fs();
  function f(m = !1) {
    const u = [
      // any
      h.default,
      _.default,
      $.default,
      b.default,
      S.default,
      C.default,
      // object
      i.default,
      s.default,
      r.default,
      d.default,
      y.default
    ];
    return m ? u.push(t.default, o.default) : u.push(e.default, n.default), u.push(c.default), u;
  }
  return Nt.default = f, Nt;
}
var Ht = {}, Ke = {}, fo;
function Xo() {
  if (fo) return Ke;
  fo = 1, Object.defineProperty(Ke, "__esModule", { value: !0 }), Ke.dynamicAnchor = void 0;
  const e = /* @__PURE__ */ W(), t = /* @__PURE__ */ Ce(), n = /* @__PURE__ */ $n(), o = /* @__PURE__ */ Ln(), c = {
    keyword: "$dynamicAnchor",
    schemaType: "string",
    code: (s) => r(s, s.schema)
  };
  function r(s, d) {
    const { gen: y, it: h } = s;
    h.schemaEnv.root.dynamicAnchors[d] = !0;
    const _ = (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(d)}`, $ = h.errSchemaPath === "#" ? h.validateName : i(s);
    y.if((0, e._)`!${_}`, () => y.assign(_, $));
  }
  Ke.dynamicAnchor = r;
  function i(s) {
    const { schemaEnv: d, schema: y, self: h } = s.it, { root: _, baseId: $, localRefs: b, meta: S } = d.root, { schemaId: C } = h.opts, f = new n.SchemaEnv({ schema: y, schemaId: C, root: _, baseId: $, localRefs: b, meta: S });
    return n.compileSchema.call(h, f), (0, o.getValidate)(s, f);
  }
  return Ke.default = c, Ke;
}
var He = {}, po;
function Zo() {
  if (po) return He;
  po = 1, Object.defineProperty(He, "__esModule", { value: !0 }), He.dynamicRef = void 0;
  const e = /* @__PURE__ */ W(), t = /* @__PURE__ */ Ce(), n = /* @__PURE__ */ Ln(), o = {
    keyword: "$dynamicRef",
    schemaType: "string",
    code: (r) => c(r, r.schema)
  };
  function c(r, i) {
    const { gen: s, keyword: d, it: y } = r;
    if (i[0] !== "#")
      throw new Error(`"${d}" only supports hash fragment reference`);
    const h = i.slice(1);
    if (y.allErrors)
      _();
    else {
      const b = s.let("valid", !1);
      _(b), r.ok(b);
    }
    function _(b) {
      if (y.schemaEnv.root.dynamicAnchors[h]) {
        const S = s.let("_v", (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(h)}`);
        s.if(S, $(S, b), $(y.validateName, b));
      } else
        $(y.validateName, b)();
    }
    function $(b, S) {
      return S ? () => s.block(() => {
        (0, n.callRef)(r, b), s.let(S, !0);
      }) : () => (0, n.callRef)(r, b);
    }
  }
  return He.dynamicRef = c, He.default = o, He;
}
var Gt = {}, ho;
function hs() {
  if (ho) return Gt;
  ho = 1, Object.defineProperty(Gt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Xo(), t = /* @__PURE__ */ ee(), n = {
    keyword: "$recursiveAnchor",
    schemaType: "boolean",
    code(o) {
      o.schema ? (0, e.dynamicAnchor)(o, "") : (0, t.checkStrictMode)(o.it, "$recursiveAnchor: false is ignored");
    }
  };
  return Gt.default = n, Gt;
}
var Jt = {}, mo;
function ms() {
  if (mo) return Jt;
  mo = 1, Object.defineProperty(Jt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Zo(), t = {
    keyword: "$recursiveRef",
    schemaType: "string",
    code: (n) => (0, e.dynamicRef)(n, n.schema)
  };
  return Jt.default = t, Jt;
}
var go;
function gs() {
  if (go) return Ht;
  go = 1, Object.defineProperty(Ht, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Xo(), t = /* @__PURE__ */ Zo(), n = /* @__PURE__ */ hs(), o = /* @__PURE__ */ ms(), c = [e.default, t.default, n.default, o.default];
  return Ht.default = c, Ht;
}
var Wt = {}, Yt = {}, yo;
function ys() {
  if (yo) return Yt;
  yo = 1, Object.defineProperty(Yt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Kn(), t = {
    keyword: "dependentRequired",
    type: "object",
    schemaType: "object",
    error: e.error,
    code: (n) => (0, e.validatePropertyDeps)(n)
  };
  return Yt.default = t, Yt;
}
var Xt = {}, vo;
function vs() {
  if (vo) return Xt;
  vo = 1, Object.defineProperty(Xt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Kn(), t = {
    keyword: "dependentSchemas",
    type: "object",
    schemaType: "object",
    code: (n) => (0, e.validateSchemaDeps)(n)
  };
  return Xt.default = t, Xt;
}
var Zt = {}, $o;
function $s() {
  if ($o) return Zt;
  $o = 1, Object.defineProperty(Zt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = {
    keyword: ["maxContains", "minContains"],
    type: "array",
    schemaType: "number",
    code({ keyword: n, parentSchema: o, it: c }) {
      o.contains === void 0 && (0, e.checkStrictMode)(c, `"${n}" without "contains" is ignored`);
    }
  };
  return Zt.default = t, Zt;
}
var bo;
function bs() {
  if (bo) return Wt;
  bo = 1, Object.defineProperty(Wt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ys(), t = /* @__PURE__ */ vs(), n = /* @__PURE__ */ $s(), o = [e.default, t.default, n.default];
  return Wt.default = o, Wt;
}
var Qt = {}, en = {}, _o;
function _s() {
  if (_o) return en;
  _o = 1, Object.defineProperty(en, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ W(), t = /* @__PURE__ */ ee(), n = /* @__PURE__ */ Ce(), c = {
    keyword: "unevaluatedProperties",
    type: "object",
    schemaType: ["boolean", "object"],
    trackErrors: !0,
    error: {
      message: "must NOT have unevaluated properties",
      params: ({ params: r }) => (0, e._)`{unevaluatedProperty: ${r.unevaluatedProperty}}`
    },
    code(r) {
      const { gen: i, schema: s, data: d, errsCount: y, it: h } = r;
      if (!y)
        throw new Error("ajv implementation error");
      const { allErrors: _, props: $ } = h;
      $ instanceof e.Name ? i.if((0, e._)`${$} !== true`, () => i.forIn("key", d, (f) => i.if(S($, f), () => b(f)))) : $ !== !0 && i.forIn("key", d, (f) => $ === void 0 ? b(f) : i.if(C($, f), () => b(f))), h.props = !0, r.ok((0, e._)`${y} === ${n.default.errors}`);
      function b(f) {
        if (s === !1) {
          r.setParams({ unevaluatedProperty: f }), r.error(), _ || i.break();
          return;
        }
        if (!(0, t.alwaysValidSchema)(h, s)) {
          const m = i.name("valid");
          r.subschema({
            keyword: "unevaluatedProperties",
            dataProp: f,
            dataPropType: t.Type.Str
          }, m), _ || i.if((0, e.not)(m), () => i.break());
        }
      }
      function S(f, m) {
        return (0, e._)`!${f} || !${f}[${m}]`;
      }
      function C(f, m) {
        const u = [];
        for (const g in f)
          f[g] === !0 && u.push((0, e._)`${m} !== ${g}`);
        return (0, e.and)(...u);
      }
    }
  };
  return en.default = c, en;
}
var tn = {}, wo;
function ws() {
  if (wo) return tn;
  wo = 1, Object.defineProperty(tn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ W(), t = /* @__PURE__ */ ee(), o = {
    keyword: "unevaluatedItems",
    type: "array",
    schemaType: ["boolean", "object"],
    error: {
      message: ({ params: { len: c } }) => (0, e.str)`must NOT have more than ${c} items`,
      params: ({ params: { len: c } }) => (0, e._)`{limit: ${c}}`
    },
    code(c) {
      const { gen: r, schema: i, data: s, it: d } = c, y = d.items || 0;
      if (y === !0)
        return;
      const h = r.const("len", (0, e._)`${s}.length`);
      if (i === !1)
        c.setParams({ len: y }), c.fail((0, e._)`${h} > ${y}`);
      else if (typeof i == "object" && !(0, t.alwaysValidSchema)(d, i)) {
        const $ = r.var("valid", (0, e._)`${h} <= ${y}`);
        r.if((0, e.not)($), () => _($, y)), c.ok($);
      }
      d.items = !0;
      function _($, b) {
        r.forRange("i", b, h, (S) => {
          c.subschema({ keyword: "unevaluatedItems", dataProp: S, dataPropType: t.Type.Num }, $), d.allErrors || r.if((0, e.not)($), () => r.break());
        });
      }
    }
  };
  return tn.default = o, tn;
}
var So;
function Ss() {
  if (So) return Qt;
  So = 1, Object.defineProperty(Qt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ _s(), t = /* @__PURE__ */ ws(), n = [e.default, t.default];
  return Qt.default = n, Qt;
}
var nn = {}, rn = {}, Co;
function Cs() {
  if (Co) return rn;
  Co = 1, Object.defineProperty(rn, "__esModule", { value: !0 });
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
      const { gen: r, data: i, $data: s, schema: d, schemaCode: y, it: h } = o, { opts: _, errSchemaPath: $, schemaEnv: b, self: S } = h;
      if (!_.validateFormats)
        return;
      s ? C() : f();
      function C() {
        const m = r.scopeValue("formats", {
          ref: S.formats,
          code: _.code.formats
        }), u = r.const("fDef", (0, e._)`${m}[${y}]`), g = r.let("fType"), w = r.let("format");
        r.if((0, e._)`typeof ${u} == "object" && !(${u} instanceof RegExp)`, () => r.assign(g, (0, e._)`${u}.type || "string"`).assign(w, (0, e._)`${u}.validate`), () => r.assign(g, (0, e._)`"string"`).assign(w, u)), o.fail$data((0, e.or)(a(), l()));
        function a() {
          return _.strictSchema === !1 ? e.nil : (0, e._)`${y} && !${w}`;
        }
        function l() {
          const p = b.$async ? (0, e._)`(${u}.async ? await ${w}(${i}) : ${w}(${i}))` : (0, e._)`${w}(${i})`, E = (0, e._)`(typeof ${w} == "function" ? ${p} : ${w}.test(${i}))`;
          return (0, e._)`${w} && ${w} !== true && ${g} === ${c} && !${E}`;
        }
      }
      function f() {
        const m = S.formats[d];
        if (!m) {
          a();
          return;
        }
        if (m === !0)
          return;
        const [u, g, w] = l(m);
        u === c && o.pass(p());
        function a() {
          if (_.strictSchema === !1) {
            S.logger.warn(E());
            return;
          }
          throw new Error(E());
          function E() {
            return `unknown format "${d}" ignored in schema at path "${$}"`;
          }
        }
        function l(E) {
          const P = E instanceof RegExp ? (0, e.regexpCode)(E) : _.code.formats ? (0, e._)`${_.code.formats}${(0, e.getProperty)(d)}` : void 0, A = r.scopeValue("formats", { key: d, ref: E, code: P });
          return typeof E == "object" && !(E instanceof RegExp) ? [E.type || "string", E.validate, (0, e._)`${A}.validate`] : ["string", E, A];
        }
        function p() {
          if (typeof m == "object" && !(m instanceof RegExp) && m.async) {
            if (!b.$async)
              throw new Error("async format in sync schema");
            return (0, e._)`await ${w}(${i})`;
          }
          return typeof g == "function" ? (0, e._)`${w}(${i})` : (0, e._)`${w}.test(${i})`;
        }
      }
    }
  };
  return rn.default = n, rn;
}
var ko;
function ks() {
  if (ko) return nn;
  ko = 1, Object.defineProperty(nn, "__esModule", { value: !0 });
  const t = [(/* @__PURE__ */ Cs()).default];
  return nn.default = t, nn;
}
var Te = {}, Eo;
function Es() {
  return Eo || (Eo = 1, Object.defineProperty(Te, "__esModule", { value: !0 }), Te.contentVocabulary = Te.metadataVocabulary = void 0, Te.metadataVocabulary = [
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
var Po;
function Ps() {
  if (Po) return gt;
  Po = 1, Object.defineProperty(gt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Bi(), t = /* @__PURE__ */ es(), n = /* @__PURE__ */ ps(), o = /* @__PURE__ */ gs(), c = /* @__PURE__ */ bs(), r = /* @__PURE__ */ Ss(), i = /* @__PURE__ */ ks(), s = /* @__PURE__ */ Es(), d = [
    o.default,
    e.default,
    t.default,
    (0, n.default)(!0),
    i.default,
    s.metadataVocabulary,
    s.contentVocabulary,
    c.default,
    r.default
  ];
  return gt.default = d, gt;
}
var on = {}, ot = {}, xo;
function xs() {
  if (xo) return ot;
  xo = 1, Object.defineProperty(ot, "__esModule", { value: !0 }), ot.DiscrError = void 0;
  var e;
  return (function(t) {
    t.Tag = "tag", t.Mapping = "mapping";
  })(e || (ot.DiscrError = e = {})), ot;
}
var Ro;
function Rs() {
  if (Ro) return on;
  Ro = 1, Object.defineProperty(on, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ W(), t = /* @__PURE__ */ xs(), n = /* @__PURE__ */ $n(), o = /* @__PURE__ */ vn(), c = /* @__PURE__ */ ee(), i = {
    keyword: "discriminator",
    type: "object",
    schemaType: "object",
    error: {
      message: ({ params: { discrError: s, tagName: d } }) => s === t.DiscrError.Tag ? `tag "${d}" must be string` : `value of tag "${d}" must be in oneOf`,
      params: ({ params: { discrError: s, tag: d, tagName: y } }) => (0, e._)`{error: ${s}, tag: ${y}, tagValue: ${d}}`
    },
    code(s) {
      const { gen: d, data: y, schema: h, parentSchema: _, it: $ } = s, { oneOf: b } = _;
      if (!$.opts.discriminator)
        throw new Error("discriminator: requires discriminator option");
      const S = h.propertyName;
      if (typeof S != "string")
        throw new Error("discriminator: requires propertyName");
      if (h.mapping)
        throw new Error("discriminator: mapping is not supported");
      if (!b)
        throw new Error("discriminator: requires oneOf keyword");
      const C = d.let("valid", !1), f = d.const("tag", (0, e._)`${y}${(0, e.getProperty)(S)}`);
      d.if((0, e._)`typeof ${f} == "string"`, () => m(), () => s.error(!1, { discrError: t.DiscrError.Tag, tag: f, tagName: S })), s.ok(C);
      function m() {
        const w = g();
        d.if(!1);
        for (const a in w)
          d.elseIf((0, e._)`${f} === ${a}`), d.assign(C, u(w[a]));
        d.else(), s.error(!1, { discrError: t.DiscrError.Mapping, tag: f, tagName: S }), d.endIf();
      }
      function u(w) {
        const a = d.name("valid"), l = s.subschema({ keyword: "oneOf", schemaProp: w }, a);
        return s.mergeEvaluated(l, e.Name), a;
      }
      function g() {
        var w;
        const a = {}, l = E(_);
        let p = !0;
        for (let O = 0; O < b.length; O++) {
          let M = b[O];
          if (M?.$ref && !(0, c.schemaHasRulesButRef)(M, $.self.RULES)) {
            const L = M.$ref;
            if (M = n.resolveRef.call($.self, $.schemaEnv.root, $.baseId, L), M instanceof n.SchemaEnv && (M = M.schema), M === void 0)
              throw new o.default($.opts.uriResolver, $.baseId, L);
          }
          const D = (w = M?.properties) === null || w === void 0 ? void 0 : w[S];
          if (typeof D != "object")
            throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${S}"`);
          p = p && (l || E(M)), P(D, O);
        }
        if (!p)
          throw new Error(`discriminator: "${S}" must be required`);
        return a;
        function E({ required: O }) {
          return Array.isArray(O) && O.includes(S);
        }
        function P(O, M) {
          if (O.const)
            A(O.const, M);
          else if (O.enum)
            for (const D of O.enum)
              A(D, M);
          else
            throw new Error(`discriminator: "properties/${S}" must have "const" or "enum"`);
        }
        function A(O, M) {
          if (typeof O != "string" || O in a)
            throw new Error(`discriminator: "${S}" values must be unique strings`);
          a[O] = M;
        }
      }
    }
  };
  return on.default = i, on;
}
var sn = {};
const As = "https://json-schema.org/draft/2020-12/schema", Fs = "https://json-schema.org/draft/2020-12/schema", Ns = { "https://json-schema.org/draft/2020-12/vocab/core": !0, "https://json-schema.org/draft/2020-12/vocab/applicator": !0, "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0, "https://json-schema.org/draft/2020-12/vocab/validation": !0, "https://json-schema.org/draft/2020-12/vocab/meta-data": !0, "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0, "https://json-schema.org/draft/2020-12/vocab/content": !0 }, Ms = "meta", js = "Core and Validation specifications meta-schema", Os = [{ $ref: "meta/core" }, { $ref: "meta/applicator" }, { $ref: "meta/unevaluated" }, { $ref: "meta/validation" }, { $ref: "meta/meta-data" }, { $ref: "meta/format-annotation" }, { $ref: "meta/content" }], Ts = ["object", "boolean"], zs = "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.", Is = { definitions: { $comment: '"definitions" has been replaced by "$defs".', type: "object", additionalProperties: { $dynamicRef: "#meta" }, deprecated: !0, default: {} }, dependencies: { $comment: '"dependencies" has been split and replaced by "dependentSchemas" and "dependentRequired" in order to serve their differing semantics.', type: "object", additionalProperties: { anyOf: [{ $dynamicRef: "#meta" }, { $ref: "meta/validation#/$defs/stringArray" }] }, deprecated: !0, default: {} }, $recursiveAnchor: { $comment: '"$recursiveAnchor" has been replaced by "$dynamicAnchor".', $ref: "meta/core#/$defs/anchorString", deprecated: !0 }, $recursiveRef: { $comment: '"$recursiveRef" has been replaced by "$dynamicRef".', $ref: "meta/core#/$defs/uriReferenceString", deprecated: !0 } }, Ds = {
  $schema: As,
  $id: Fs,
  $vocabulary: Ns,
  $dynamicAnchor: Ms,
  title: js,
  allOf: Os,
  type: Ts,
  $comment: zs,
  properties: Is
}, qs = "https://json-schema.org/draft/2020-12/schema", Vs = "https://json-schema.org/draft/2020-12/meta/applicator", Bs = { "https://json-schema.org/draft/2020-12/vocab/applicator": !0 }, Ls = "meta", Us = "Applicator vocabulary meta-schema", Ks = ["object", "boolean"], Hs = { prefixItems: { $ref: "#/$defs/schemaArray" }, items: { $dynamicRef: "#meta" }, contains: { $dynamicRef: "#meta" }, additionalProperties: { $dynamicRef: "#meta" }, properties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, propertyNames: { format: "regex" }, default: {} }, dependentSchemas: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, propertyNames: { $dynamicRef: "#meta" }, if: { $dynamicRef: "#meta" }, then: { $dynamicRef: "#meta" }, else: { $dynamicRef: "#meta" }, allOf: { $ref: "#/$defs/schemaArray" }, anyOf: { $ref: "#/$defs/schemaArray" }, oneOf: { $ref: "#/$defs/schemaArray" }, not: { $dynamicRef: "#meta" } }, Gs = { schemaArray: { type: "array", minItems: 1, items: { $dynamicRef: "#meta" } } }, Js = {
  $schema: qs,
  $id: Vs,
  $vocabulary: Bs,
  $dynamicAnchor: Ls,
  title: Us,
  type: Ks,
  properties: Hs,
  $defs: Gs
}, Ws = "https://json-schema.org/draft/2020-12/schema", Ys = "https://json-schema.org/draft/2020-12/meta/unevaluated", Xs = { "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0 }, Zs = "meta", Qs = "Unevaluated applicator vocabulary meta-schema", ea = ["object", "boolean"], ta = { unevaluatedItems: { $dynamicRef: "#meta" }, unevaluatedProperties: { $dynamicRef: "#meta" } }, na = {
  $schema: Ws,
  $id: Ys,
  $vocabulary: Xs,
  $dynamicAnchor: Zs,
  title: Qs,
  type: ea,
  properties: ta
}, ra = "https://json-schema.org/draft/2020-12/schema", oa = "https://json-schema.org/draft/2020-12/meta/content", ia = { "https://json-schema.org/draft/2020-12/vocab/content": !0 }, sa = "meta", aa = "Content vocabulary meta-schema", ca = ["object", "boolean"], la = { contentEncoding: { type: "string" }, contentMediaType: { type: "string" }, contentSchema: { $dynamicRef: "#meta" } }, da = {
  $schema: ra,
  $id: oa,
  $vocabulary: ia,
  $dynamicAnchor: sa,
  title: aa,
  type: ca,
  properties: la
}, ua = "https://json-schema.org/draft/2020-12/schema", fa = "https://json-schema.org/draft/2020-12/meta/core", pa = { "https://json-schema.org/draft/2020-12/vocab/core": !0 }, ha = "meta", ma = "Core vocabulary meta-schema", ga = ["object", "boolean"], ya = { $id: { $ref: "#/$defs/uriReferenceString", $comment: "Non-empty fragments not allowed.", pattern: "^[^#]*#?$" }, $schema: { $ref: "#/$defs/uriString" }, $ref: { $ref: "#/$defs/uriReferenceString" }, $anchor: { $ref: "#/$defs/anchorString" }, $dynamicRef: { $ref: "#/$defs/uriReferenceString" }, $dynamicAnchor: { $ref: "#/$defs/anchorString" }, $vocabulary: { type: "object", propertyNames: { $ref: "#/$defs/uriString" }, additionalProperties: { type: "boolean" } }, $comment: { type: "string" }, $defs: { type: "object", additionalProperties: { $dynamicRef: "#meta" } } }, va = { anchorString: { type: "string", pattern: "^[A-Za-z_][-A-Za-z0-9._]*$" }, uriString: { type: "string", format: "uri" }, uriReferenceString: { type: "string", format: "uri-reference" } }, $a = {
  $schema: ua,
  $id: fa,
  $vocabulary: pa,
  $dynamicAnchor: ha,
  title: ma,
  type: ga,
  properties: ya,
  $defs: va
}, ba = "https://json-schema.org/draft/2020-12/schema", _a = "https://json-schema.org/draft/2020-12/meta/format-annotation", wa = { "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0 }, Sa = "meta", Ca = "Format vocabulary meta-schema for annotation results", ka = ["object", "boolean"], Ea = { format: { type: "string" } }, Pa = {
  $schema: ba,
  $id: _a,
  $vocabulary: wa,
  $dynamicAnchor: Sa,
  title: Ca,
  type: ka,
  properties: Ea
}, xa = "https://json-schema.org/draft/2020-12/schema", Ra = "https://json-schema.org/draft/2020-12/meta/meta-data", Aa = { "https://json-schema.org/draft/2020-12/vocab/meta-data": !0 }, Fa = "meta", Na = "Meta-data vocabulary meta-schema", Ma = ["object", "boolean"], ja = { title: { type: "string" }, description: { type: "string" }, default: !0, deprecated: { type: "boolean", default: !1 }, readOnly: { type: "boolean", default: !1 }, writeOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 } }, Oa = {
  $schema: xa,
  $id: Ra,
  $vocabulary: Aa,
  $dynamicAnchor: Fa,
  title: Na,
  type: Ma,
  properties: ja
}, Ta = "https://json-schema.org/draft/2020-12/schema", za = "https://json-schema.org/draft/2020-12/meta/validation", Ia = { "https://json-schema.org/draft/2020-12/vocab/validation": !0 }, Da = "meta", qa = "Validation vocabulary meta-schema", Va = ["object", "boolean"], Ba = { type: { anyOf: [{ $ref: "#/$defs/simpleTypes" }, { type: "array", items: { $ref: "#/$defs/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, const: !0, enum: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/$defs/nonNegativeInteger" }, minLength: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, maxItems: { $ref: "#/$defs/nonNegativeInteger" }, minItems: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, maxContains: { $ref: "#/$defs/nonNegativeInteger" }, minContains: { $ref: "#/$defs/nonNegativeInteger", default: 1 }, maxProperties: { $ref: "#/$defs/nonNegativeInteger" }, minProperties: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, required: { $ref: "#/$defs/stringArray" }, dependentRequired: { type: "object", additionalProperties: { $ref: "#/$defs/stringArray" } } }, La = { nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { $ref: "#/$defs/nonNegativeInteger", default: 0 }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, Ua = {
  $schema: Ta,
  $id: za,
  $vocabulary: Ia,
  $dynamicAnchor: Da,
  title: qa,
  type: Va,
  properties: Ba,
  $defs: La
};
var Ao;
function Ka() {
  if (Ao) return sn;
  Ao = 1, Object.defineProperty(sn, "__esModule", { value: !0 });
  const e = Ds, t = Js, n = na, o = da, c = $a, r = Pa, i = Oa, s = Ua, d = ["/properties"];
  function y(h) {
    return [
      e,
      t,
      n,
      o,
      c,
      _(this, r),
      i,
      _(this, s)
    ].forEach(($) => this.addMetaSchema($, void 0, !1)), this;
    function _($, b) {
      return h ? $.$dataMetaSchema(b, d) : b;
    }
  }
  return sn.default = y, sn;
}
var Fo;
function Ha() {
  return Fo || (Fo = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv2020 = void 0;
    const n = /* @__PURE__ */ qi(), o = /* @__PURE__ */ Ps(), c = /* @__PURE__ */ Rs(), r = /* @__PURE__ */ Ka(), i = "https://json-schema.org/draft/2020-12/schema";
    class s extends n.default {
      constructor(b = {}) {
        super({
          ...b,
          dynamicRef: !0,
          next: !0,
          unevaluated: !0
        });
      }
      _addVocabularies() {
        super._addVocabularies(), o.default.forEach((b) => this.addVocabulary(b)), this.opts.discriminator && this.addKeyword(c.default);
      }
      _addDefaultMetaSchema() {
        super._addDefaultMetaSchema();
        const { $data: b, meta: S } = this.opts;
        S && (r.default.call(this, b), this.refs["http://json-schema.org/schema"] = i);
      }
      defaultMeta() {
        return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(i) ? i : void 0);
      }
    }
    t.Ajv2020 = s, e.exports = t = s, e.exports.Ajv2020 = s, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = s;
    var d = /* @__PURE__ */ yn();
    Object.defineProperty(t, "KeywordCxt", { enumerable: !0, get: function() {
      return d.KeywordCxt;
    } });
    var y = /* @__PURE__ */ W();
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
    var h = /* @__PURE__ */ Bn();
    Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
      return h.default;
    } });
    var _ = /* @__PURE__ */ vn();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return _.default;
    } });
  })(ut, ut.exports)), ut.exports;
}
var Ga = /* @__PURE__ */ Ha();
const Ja = /* @__PURE__ */ Ci(Ga), Wa = "https://json-schema.org/draft/2020-12/schema", Ya = "https://raw.githubusercontent.com/omsf-eco-infra/gufe-viz/main/schema/gufe-viz.schema.json", Xa = "gufe-viz payload", Za = "Python-to-TypeScript contract bridge for gufe visualizations. Source of truth both languages are downstream of it. This schema is not strictly versioned or published as it is only internally consumed by this codebase. Schema description: one schema object per gufe class: every $def named *Viz is the visualization form of exactly one GufeTokenizable, it carries that object's `gufe-key`. Every reference from one gufe object to another is that object's gufe key, and the objects themselves live in the `registry` on the root payload. So a ligand network's nodes are keys, a chemical system's components and a transformation's protocol are keys and each one resolves to a complete, drawable object. An alchemical network whose forty systems share one protein carries that PDB once and points at it forty times, and the browser can still drill into it, because what it points at is a whole ProteinComponentViz. This is a single-shot dump rather than a conversation with a server, so the registry travels with the payload.", Qa = [{ $ref: "#/$defs/SmallMoleculeComponentViz" }, { $ref: "#/$defs/ProteinComponentViz" }, { $ref: "#/$defs/SolvatedPDBComponentViz" }, { $ref: "#/$defs/ProteinMembraneComponentViz" }, { $ref: "#/$defs/SolventComponentViz" }, { $ref: "#/$defs/UnknownComponentViz" }, { $ref: "#/$defs/ProtocolViz" }, { $ref: "#/$defs/LigandAtomMappingViz" }, { $ref: "#/$defs/LigandNetworkViz" }, { $ref: "#/$defs/ChemicalSystemViz" }, { $ref: "#/$defs/TransformationViz" }, { $ref: "#/$defs/AlchemicalNetworkViz" }], ec = /* @__PURE__ */ JSON.parse('{"GufeKey":{"title":"GufeKey","description":"A gufe key: the identity of a GufeTokenizable, of the form \'ClassName-<hex digest>\'. It is deterministic and repeatable within a software environment. Only its non-emptiness is checked","type":"string","minLength":1},"ComponentKey":{"title":"ComponentKey","description":"A gufe key naming a ComponentViz in the registry. Identical to GufeKey at validation time: JSON Schema has no way to say \'this string is the gufe-key of an entry in that array, and that entry has this type\', because that is a join across two parts of the document. What the name buys is that the referent\'s type is stated in the contract and carried into the generated TypeScript, instead of living only in a test and a view.","$ref":"#/$defs/GufeKey"},"SmallMoleculeComponentKey":{"title":"SmallMoleculeComponentKey","description":"A gufe key naming a SmallMoleculeComponentViz in the registry. Resolving it yields the whole molecule, SDF included. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ChemicalSystemKey":{"title":"ChemicalSystemKey","description":"A gufe key naming a ChemicalSystemViz in the registry. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ProtocolKey":{"title":"ProtocolKey","description":"A gufe key naming a ProtocolViz in the registry. Every transformation of a network usually names the same one. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"Registry":{"title":"Registry","description":"The pool of gufe objects this payload refers to by key, each a complete payload object in its own right. Entries are unique by `gufe-key` and sorted by (type, gufe-key) so a committed fixture is byte-stable. JSON Schema cannot express \'unique by a property\' or \'every reference resolves\', so both are covered by tests on the Python side and degraded over by the views.","type":"array","items":{"oneOf":[{"$ref":"#/$defs/ComponentViz"},{"$ref":"#/$defs/ProtocolViz"},{"$ref":"#/$defs/ChemicalSystemViz"}]}},"ComponentViz":{"title":"ComponentViz","description":"Any single chemical-system component","oneOf":[{"$ref":"#/$defs/SmallMoleculeComponentViz"},{"$ref":"#/$defs/ProteinComponentViz"},{"$ref":"#/$defs/SolvatedPDBComponentViz"},{"$ref":"#/$defs/ProteinMembraneComponentViz"},{"$ref":"#/$defs/SolventComponentViz"},{"$ref":"#/$defs/UnknownComponentViz"}]},"SmallMoleculeComponentViz":{"title":"SmallMoleculeComponentViz","description":"A small molecule, carried as a complete SDF record.","type":"object","properties":{"type":{"const":"SmallMoleculeComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"sdf":{"type":"string","minLength":1,"description":"Complete inline SDF record, including the conformer."},"smiles":{"type":"string"},"total_charge":{"type":"integer","description":"Net formal charge. Displayed, never recomputed from the SDF."}},"required":["type","gufe-key","name","sdf","smiles","total_charge"],"additionalProperties":false},"ProteinComponentViz":{"title":"ProteinComponentViz","description":"A protein, carried as a complete PDB record.","type":"object","properties":{"type":{"const":"ProteinComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolvatedPDBComponentViz":{"title":"SolvatedPDBComponentViz","description":"A protein with explicit solvent. A distinct type rather than a flag on ProteinComponentViz, because the discriminator is what a view dispatches on and the presence of waters changes what a sensible default representation is.","type":"object","properties":{"type":{"const":"SolvatedPDBComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation, including explicit solvent."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"ProteinMembraneComponentViz":{"title":"ProteinMembraneComponentViz","description":"A protein embedded in a membrane.","type":"object","properties":{"type":{"const":"ProteinMembraneComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation of the protein and membrane system."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolventComponentViz":{"title":"SolventComponentViz","description":"Bulk solvent settings. There is no structure to draw, so these are flat fields suitable for rendering as a settings card.","type":"object","properties":{"type":{"const":"SolventComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"smiles":{"type":"string","minLength":1},"positive_ion":{"type":"string"},"negative_ion":{"type":"string"},"neutralize":{"type":"boolean"},"ion_concentration":{"type":"string","description":"Display-form concentration with units, for example \'0.15 molar\'. A string rather than a number because the unit is part of the value and the view only ever prints it."}},"required":["type","gufe-key","name","smiles","positive_ion","negative_ion","neutralize","ion_concentration"],"additionalProperties":false},"UnknownComponentViz":{"title":"UnknownComponentViz","description":"The graceful fallback for a component type this build does not recognize. gufe supports custom Component subclasses, so meeting one is an expected outcome rather than an error, and the browser answers it with \'sorry, there is no visualization for this\'. This covers an unrecognized type only: a recognized component whose serializer fails is a bug, and raises in Python rather than arriving here wearing a disguise.","type":"object","properties":{"type":{"const":"UnknownComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The gufe class name, so the panel can say which type it could not draw."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ProtocolViz":{"title":"ProtocolViz","description":"A gufe Protocol, named. Every transformation in an alchemical network usually shares one, so this is a registry entry that many edges point at rather than a class name repeated per edge. Settings are deliberately absent for now: they are large, deeply nested, and nothing draws them yet, adding a `settings` field later is additive and breaks nothing.","type":"object","properties":{"type":{"const":"ProtocolViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The Protocol\'s class name, which is what identifies it to a reader, a Protocol has no name of its own, so `name` is usually empty."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ChemicalSystemViz":{"title":"ChemicalSystemViz","description":"A gufe ChemicalSystem: labels mapped to the gufe keys of its components.","type":"object","properties":{"type":{"const":"ChemicalSystemViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"components":{"type":"object","description":"ChemicalSystem labels mapped to the gufe keys of the components in the registry.","additionalProperties":{"$ref":"#/$defs/ComponentKey"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","components"],"additionalProperties":false},"AtomMapping":{"title":"AtomMapping","description":"Atom index correspondence from molecule A to molecule B, as a list of index pairs. A list rather than an object keyed by A\'s index, because JSON object keys can only be strings: keying by index would put decimal strings such as \'12\' in the payload and leave both languages casting them back to integers, and it is Python\'s dict-of-int shape only by resemblance. As a list, both indices stay integers, and \'an entry has a B index for every A index\' becomes a `required` the schema states rather than a convention a reader has to trust. Pairs are ordered by `index_A` so a committed fixture is byte-stable.","type":"array","items":{"type":"object","properties":{"index_A":{"type":"integer","minimum":0,"description":"An atom index in molecule A."},"index_B":{"type":"integer","minimum":0,"description":"The atom index in molecule B that it maps to."}},"required":["index_A","index_B"],"additionalProperties":false}},"Annotations":{"title":"Annotations","description":"Free-form mapping metadata. gufe puts nothing here by design and every mapper picks its own keys, so this is deliberately open. Values are whatever survived being made JSON-safe. Displayed but never interpreted, with the single exception of \'score\'.","type":"object"},"LigandAtomMappingViz":{"title":"LigandAtomMappingViz","description":"One atom mapping between two small molecules. This is also what an edge of a ligand network is because the two endpoints are gufe keys either way: standalone they resolve in this object\'s own registry, and in a network they resolve in the network\'s, where they are the same entries the nodes name. `componentA` and `componentB` are the molecules the two sides of `componentA_to_componentB` index into: an `index_A` is an atom of the SmallMoleculeComponentViz that `componentA` names, and an `index_B` an atom of `componentB`\'s.","type":"object","properties":{"type":{"const":"LigandAtomMappingViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"componentA":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentB":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentA_to_componentB":{"$ref":"#/$defs/AtomMapping"},"score":{"type":["number","null"],"description":"The \'score\' annotation when it is a plain number, otherwise null. This is the one annotation key that is interpreted rather than displayed: it drives the edge colouring and the force layout\'s link distance."},"annotations":{"$ref":"#/$defs/Annotations"},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","componentA","componentB","componentA_to_componentB","score","annotations"],"additionalProperties":false},"LigandNetworkViz":{"title":"LigandNetworkViz","description":"A ligand network: the ligands in the registry, the nodes as keys into it, and the mappings as edges. Deliberately not gufe\'s GraphML: that format embeds a gufe to_json moldict per node, so forwarding it would relocate the decoding problem into the browser rather than avoid it.","type":"object","properties":{"type":{"const":"LigandNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ligand, resolved in `registry`.","items":{"$ref":"#/$defs/SmallMoleculeComponentKey"}},"edges":{"type":"array","description":"The mappings, whose `componentA` and `componentB` name nodes of this network. JSON Schema cannot express that referential constraint, so a Python test covers it, and the view drops a dangling edge with a banner rather than failing.","items":{"$ref":"#/$defs/LigandAtomMappingViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false},"TransformationViz":{"title":"TransformationViz","description":"A transformation between two chemical systems, both named by gufe key, as is its protocol: `stateA` is the system it starts from, `stateB` the one it ends at, and every edge of a network usually names the same protocol. This is also what an edge of an alchemical network is (there is no separate edge type) because `stateA` and `stateB` are keys either way, and in a network they are the keys the nodes name. NonTransformation uses this type too: it exposes the same stateA and stateB properties, both its single system, so it renders as a diff with no differences.","type":"object","properties":{"type":{"const":"TransformationViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"protocol":{"$ref":"#/$defs/ProtocolKey"},"stateA":{"$ref":"#/$defs/ChemicalSystemKey"},"stateB":{"$ref":"#/$defs/ChemicalSystemKey"},"mappings":{"type":"array","items":{"$ref":"#/$defs/LigandAtomMappingViz"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","protocol","stateA","stateB","mappings"],"additionalProperties":false},"AlchemicalNetworkViz":{"title":"AlchemicalNetworkViz","description":"A graph of chemical systems joined by transformations. What repeats here is not the nodes and edges themselves but what they are made of: in practice every system shares one protein and every transformation shares one protocol. Both live in the registry, once, as whole objects so this view can show composition and topology while still letting a reader open a node and see the protein.","type":"object","properties":{"type":{"const":"AlchemicalNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ChemicalSystem, resolved in `registry`.","items":{"$ref":"#/$defs/ChemicalSystemKey"}},"edges":{"type":"array","description":"The transformations, whose `stateA` and `stateB` name nodes of this network.","items":{"$ref":"#/$defs/TransformationViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false}}'), Hn = {
  $schema: Wa,
  $id: Ya,
  title: Xa,
  description: Za,
  oneOf: Qa,
  $defs: ec
}, gl = [
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
], Gn = Hn.$id, Jn = new Ja({ allErrors: !0, strict: !1 });
Jn.addSchema(Hn, Gn);
const No = Jn.getSchema(Gn), Qo = Object.entries(Hn.$defs).filter(
  ([e, t]) => t.properties?.type?.const === e
).map(([e]) => e).sort(), yl = Qo, Wn = /* @__PURE__ */ new Map();
for (const e of Qo) {
  const t = Jn.getSchema(`${Gn}#/$defs/${e}`);
  t && Wn.set(e, t);
}
const zn = { valid: !0, issues: [] };
function In(e) {
  return (e ?? []).map((t) => ({
    path: t.instancePath || "",
    message: t.keyword === "additionalProperties" ? `unknown property ${JSON.stringify(t.params.additionalProperty)}` : t.message ?? "is invalid"
  }));
}
function tc(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return {
      valid: !1,
      issues: [{ path: "", message: "must be a JSON object" }]
    };
  const t = e.type, n = typeof t == "string" ? Wn.get(t) : void 0;
  return n ? n(e) ? zn : { valid: !1, issues: In(n.errors) } : No(e) ? zn : { valid: !1, issues: In(No.errors) };
}
function vl(e, t) {
  const n = Wn.get(e);
  return n ? n(t) ? zn : { valid: !1, issues: In(n.errors) } : {
    valid: !1,
    issues: [
      { path: "", message: `unknown payload type ${JSON.stringify(e)}` }
    ]
  };
}
function nc(e, t = 8) {
  const n = e.slice(0, t).map((o) => `${o.path || "(root)"}: ${o.message}`);
  return e.length > t && n.push(`... and ${e.length - t} more`), n.join(`
`);
}
const Yn = {
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
function ei(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return {
      message: "This does not look like a gufe-viz payload (expected a JSON object)."
    };
  const { type: t } = e;
  if (typeof t != "string" || !t)
    return {
      message: "This payload has no `type`, so there is nothing to say what it is."
    };
  if (!Yn[t]) return rc(t);
  const { valid: n, issues: o } = tc(e);
  return n ? null : {
    message: `This payload says it is a ${t}, but it does not match the gufe-viz schema.`,
    detail: nc(o)
  };
}
function rc(e) {
  const t = Object.keys(Yn).sort().join(", ");
  return {
    message: `Sorry, there is no visualization for ${e} yet. This build can draw: ${t}.`
  };
}
function $l(e) {
  return ei(e)?.message ?? null;
}
class oc extends we {
  placeholder() {
    return "Waiting for data...";
  }
  renderView(t, n) {
    wi("payload", n, this);
    const o = ei(n);
    if (o)
      return t.appendChild(ic(o, n)), {};
    const c = n.type, r = Yn[c], i = document.createElement(r);
    return i.style.cssText = "flex:1;min-height:0;min-width:0;", i.payload = n, t.appendChild(i), {
      onResize: () => i.resize?.(),
      // Removing the child fires its own `disconnectedCallback`, which is where
      // its viewers and observers are released
      cleanup: () => i.remove()
    };
  }
}
function ic(e, t) {
  const n = z(
    "div",
    "flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:32px;"
  );
  n.appendChild(ie(e.message));
  const o = (r, i) => z(
    "div",
    "max-width:640px;padding:8px 12px;border-radius:6px;font-size:11px;white-space:pre-wrap;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;overflow-wrap:anywhere;" + (i ? `background:${x.warnBg};color:${x.warnFg};border:1px solid ${x.warnBorder};` : `background:${x.panelBg};color:${x.textMuted2};border:1px solid ${x.cardBorder};`),
    r
  );
  e.detail && n.appendChild(o(e.detail, !0));
  const c = sc(t);
  return c && n.appendChild(o(c, !1)), n;
}
function sc(e) {
  if (e == null || typeof e != "object") return null;
  const t = e, n = [];
  typeof t.type == "string" && n.push(`type: ${dn(t.type)}`), typeof t.name == "string" && t.name && n.push(`name: ${dn(t.name)}`);
  const o = Object.keys(e);
  return o.length && n.push(
    `keys: ${o.slice(0, 12).join(", ")}${o.length > 12 ? ", ..." : ""}`
  ), n.length ? n.join(`
`) : null;
}
Se("gufe-view", oc);
const Xn = {
  threeDmol: "https://3dmol.org/build/3Dmol-min.js",
  rdkit: "https://unpkg.com/@rdkit/rdkit/dist/RDKit_minimal.js",
  d3: "https://cdn.jsdelivr.net/npm/d3@7/+esm"
};
function Zn(e) {
  const t = globalThis.__gufeEngines?.[e];
  return t ? Promise.resolve(t) : null;
}
function ti(e, t) {
  return new Promise((n, o) => {
    const c = document.createElement("script");
    c.src = e, c.onload = () => n(), c.onerror = () => o(new Error(`Failed to load ${t}`)), document.head.appendChild(c);
  });
}
let qe = null, Ge = null;
function Qn() {
  if (Ge) return Ge;
  const e = Zn("threeDmol");
  return e ? (Ge = e.then((t) => qe = t || window.$3Dmol), Ge) : (Ge = (async () => {
    if (window.$3Dmol) return qe = window.$3Dmol;
    if (await ti(Xn.threeDmol, "3Dmol.js"), !window.$3Dmol) throw new Error("3Dmol.js loaded but $3Dmol is undefined");
    return qe = window.$3Dmol;
  })(), Ge);
}
let Je = null;
function er() {
  if (Je) return Je;
  const e = Zn("rdkit");
  return e ? (Je = e.then((t) => window.RDKit = t), Je) : (Je = (async () => {
    if (window.RDKit) return window.RDKit;
    if (await ti(Xn.rdkit, "RDKit"), !window.initRDKitModule) throw new Error("RDKit loaded but initRDKitModule is undefined");
    return window.RDKit = await window.initRDKitModule();
  })(), Je);
}
let jn = null;
function ni() {
  if (!jn) {
    const e = Xn.d3;
    jn = Zn("d3") ?? import(
      /* @vite-ignore */
      e
    );
  }
  return jn;
}
function ri(e, t) {
  let n = !1, o = !1;
  const c = () => {
    n = !0;
  }, r = () => {
    n = !1;
  }, i = (s) => {
    if (s.stopPropagation(), n || s.ctrlKey || s.metaKey) {
      s.preventDefault(), t.onZoom(s);
      return;
    }
    t.hint && !o && (o = !0, cc(e, t.hint));
  };
  return e.addEventListener("wheel", i, { passive: !1, capture: !0 }), e.addEventListener("pointerdown", c), e.addEventListener("pointerenter", c), e.addEventListener("pointerleave", r), {
    cleanup() {
      e.removeEventListener("wheel", i, { capture: !0 }), e.removeEventListener("pointerdown", c), e.removeEventListener("pointerenter", c), e.removeEventListener("pointerleave", r);
    }
  };
}
const ac = 1600;
function cc(e, t) {
  const n = z(
    "div",
    "position:absolute;bottom:12px;left:50%;transform:translateX(-50%);z-index:30;pointer-events:none;padding:5px 12px;border-radius:6px;font-size:11px;white-space:nowrap;background:rgba(0,0,0,0.72);color:#ffffff;transition:opacity .3s ease;",
    t
  );
  e.appendChild(n), setTimeout(() => {
    n.style.opacity = "0", setTimeout(() => n.remove(), 300);
  }, ac);
}
const lc = { min: 0.25, max: 12 };
function dc(e, t = lc) {
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
const uc = 2e-3;
function fc(e) {
  return Math.exp(-e.deltaY * uc);
}
function tr(e, t, n = {}) {
  const o = dc(t, n.bounds), c = ri(e, {
    hint: n.hint ?? "Click or hold Ctrl to zoom",
    onZoom: (r) => o.zoomBy(fc(r))
  });
  return { ...o, cleanup: c.cleanup };
}
function bn(e, t = "Reset view") {
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
], bl = "hsv", I = [0, 0, 0], pc = {
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
}, hc = {
  atomColourPalette: pc,
  addAtomIndices: !0,
  continuousHighlight: !1
}, oi = `
`, Mo = "$$$$";
function an(e, t) {
  if (!e || !e.trim()) throw new Error("empty SDF");
  const n = e.replace(/\r/g, "").split(oi);
  if (n.length < 4) throw new Error("SDF too short");
  const o = n[3];
  if (o.indexOf("V3000") !== -1) throw new Error("V3000 molfiles are not supported");
  const c = parseInt(o.substring(0, 3), 10), r = parseInt(o.substring(3, 6), 10);
  if (!isFinite(c) || c <= 0) throw new Error(`bad counts line: ${o}`);
  const i = [], s = [];
  for (let h = 0; h < c; h++) {
    const _ = n[4 + h];
    if (_ == null) throw new Error("truncated atom block");
    i.push([
      parseFloat(_.substring(0, 10)) || 0,
      parseFloat(_.substring(10, 20)) || 0,
      parseFloat(_.substring(20, 30)) || 0
    ]), s.push(_.substring(31, 34).trim() || "X");
  }
  const d = [];
  for (let h = 0; h < (isFinite(r) ? r : 0); h++) {
    const _ = n[4 + c + h];
    if (_ == null) break;
    const $ = parseInt(_.substring(0, 3), 10), b = parseInt(_.substring(3, 6), 10), S = parseInt(_.substring(6, 9), 10);
    !isFinite($) || !isFinite(b) || d.push([$ - 1, b - 1, isFinite(S) ? S : 1]);
  }
  return { name: (n[0] || "").trim() || t || "molecule", symbols: s, bonds: d, coords: i };
}
const ct = (e) => e.indexOf(Mo) >= 0 ? e : `${e}${oi}${Mo}`;
function mc(e) {
  const t = String(e).split(/\r?\n/);
  if (t.length < 4) return null;
  const n = parseInt(t[3].slice(0, 3), 10), o = parseInt(t[3].slice(3, 6), 10);
  return isNaN(n) || isNaN(o) ? null : { atoms: n, bonds: o };
}
function ii(e, t, n) {
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
function si(e, t, n) {
  e.innerHTML = t;
  const o = e.querySelector("svg");
  o && (o.removeAttribute("width"), o.removeAttribute("height"), o.getAttribute("viewBox") || o.setAttribute("viewBox", `0 0 ${n} ${n}`), o.setAttribute("preserveAspectRatio", "xMidYMid meet"), o.setAttribute("style", "width:100%;height:100%;max-width:100%;max-height:100%;"));
}
function gc(e, t, n, o, c = {}) {
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
        ...hc,
        highlightAtomColors: c
      })
    ) || null : r.get_svg(n, n) || null : null;
  } catch (i) {
    return console.warn("[gufe-viz] depictHighlightedSVG threw -", me(i)), null;
  } finally {
    if (r)
      try {
        r.delete();
      } catch {
      }
  }
}
const yc = [
  { id: "stick", label: "Stick", title: "Sticks only" },
  { id: "ball", label: "Ball+Stick", title: "Ball and stick" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" }
], jo = {
  stick: { stick: { radius: 0.15, colorscheme: "Jmol" } },
  ball: { stick: { radius: 0.12, colorscheme: "Jmol" }, sphere: { scale: 0.28, colorscheme: "Jmol" } },
  sphere: { sphere: { scale: 1, colorscheme: "Jmol" } }
}, Oo = 400;
class vc extends we {
  placeholder() {
    return "Waiting for a SmallMoleculeComponent payload...";
  }
  renderView(t, n) {
    const o = n.sdf, c = n.name ?? "", r = n.smiles, i = n.total_charge;
    t.appendChild(Fe(c || "Unnamed molecule", "SmallMoleculeComponent"));
    const s = z("div", "flex:1;display:flex;flex-direction:row;overflow:hidden;min-height:0;");
    t.appendChild(s);
    const d = z("div", "flex:1 1 50%;min-width:0;display:flex;flex-direction:column;"), y = z("div", "flex:1 1 50%;min-width:0;display:flex;flex-direction:column;position:relative;");
    s.appendChild(d), s.appendChild(z("div", `width:1px;flex-shrink:0;background:${x.splitBorder};`)), s.appendChild(y);
    const h = (p) => z("div", `flex-shrink:0;padding:4px 10px;font-size:12px;font-weight:bold;color:${x.labelFg};background:${x.labelBg};`, p);
    d.appendChild(h("2D"));
    const _ = z(
      "div",
      `flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:8px;background:${x.canvas2DBg};`
    );
    d.appendChild(_), y.appendChild(h("3D"));
    const $ = Vn();
    y.appendChild($.wrap);
    const b = z(
      "div",
      `flex-shrink:0;display:flex;flex-wrap:wrap;align-items:baseline;gap:6px 20px;padding:8px 16px;font-size:12px;background:${x.toolbarBg};border-top:1px solid ${x.toolbarBorder};color:${x.textPrimary};`
    );
    t.appendChild(b);
    const S = o ? mc(o) : null, C = [
      ["Name", c || Ye, !1],
      ["SMILES", r || Ye, !0],
      ["Charge", i == null ? Ye : String(i), !1],
      ["Atoms", S ? String(S.atoms) : Ye, !1],
      ["Bonds", S ? String(S.bonds) : Ye, !1]
    ];
    for (const [p, E, P] of C) {
      const A = z("div", "display:flex;align-items:baseline;gap:6px;min-width:0;");
      A.appendChild(
        z(
          "span",
          `font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;flex-shrink:0;color:${x.textMuted2};`,
          p
        )
      );
      const O = z(
        "span",
        `user-select:text;cursor:text;color:${x.textPrimary}` + (P ? ";font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:11px;overflow-wrap:anywhere;" : ""),
        E
      );
      O.title = E, A.appendChild(O), b.appendChild(A);
    }
    if (!o || !o.trim())
      return _.appendChild(ie("No molecule provided")), $.container.appendChild(ie("No molecule provided")), {};
    _.appendChild(ie("Loading 2D depiction...")), er().then((p) => {
      const E = ii(p, o, Oo);
      E ? si(_, E, Oo) : _.replaceChildren(ie("Failed to parse molecule", !0));
    }).catch((p) => {
      _.replaceChildren(ie(`RDKit failed to load: ${me(p)}`, !0));
    });
    let f = null, m = null, u = "stick", g = !1;
    const w = z(
      "div",
      `position:absolute;bottom:10px;right:10px;display:flex;gap:4px;padding:4px;border-radius:6px;z-index:10;background:${x.switcherBg};box-shadow:0 2px 8px rgba(0,0,0,0.25);`
    );
    w.appendChild(
      hn(yc, u, (p) => {
        u = p, f && (f.setStyle({}, jo[p]), f.render());
      })
    );
    const a = z("button", `${Qe}margin-left:4px;`, "Spin");
    a.title = "Toggle continuous rotation", a.onclick = () => {
      g = !g, a.style.background = g ? x.btnBgActive : x.btnBg;
      try {
        f?.spin(g ? "y" : !1);
      } catch {
      }
    }, w.appendChild(a);
    const l = bn(() => m?.reset());
    return l.style.marginLeft = "4px", w.appendChild(l), y.appendChild(w), $.container.appendChild(ie("Loading 3D viewer...")), Qn().then(() => {
      $.container.replaceChildren(), f = qe.createViewer($.container, { backgroundColor: x.viewerBg }), f.addModel(ct(o), "sdf"), f.setStyle({}, jo[u]), f.zoomTo(), f.render(), m = tr($.container, f);
    }).catch((p) => {
      $.container.replaceChildren(ie(`3D render failed: ${me(p)}`, !0));
    }), {
      onResize() {
        f && (f.resize(), f.render());
      },
      cleanup() {
        if (m?.cleanup(), m = null, !!f) {
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
Se("gufe-small-molecule", vc);
const ai = ["HOH", "WAT", "SOL", "TIP3"], To = { hetflag: !1 }, $c = { hetflag: !0 }, bc = { resn: ai }, Me = {
  stick: { radius: 0.15 },
  sphere: { scale: 0.3 },
  hetero: { stickRadius: 0.2, sphereScale: 0.28 },
  water: { stickRadius: 0.05, sphereScale: 0.18 },
  surfaceOpacity: 0.85,
  /** Above this many atoms a surface is slow enough to be worth warning about. */
  surfaceAtomWarn: 4e4
};
function _c(e) {
  const t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
  let o = 0, c = 0, r = 0, i = 1 / 0, s = -1 / 0;
  for (const d of e.split(/\r?\n/)) {
    const y = d.slice(0, 6);
    if (y === "ENDMDL") break;
    if (y !== "ATOM  " && y !== "HETATM") continue;
    o++, y === "HETATM" && c++;
    const h = d.slice(17, 20).trim(), _ = d.slice(21, 22).trim() || "_", $ = d.slice(22, 26).trim(), b = d.slice(26, 27).trim();
    ai.indexOf(h) !== -1 && r++, t.add(_), n.add(`${_}|${$}${b}|${h}`);
    const S = parseInt($, 10);
    isNaN(S) || (S < i && (i = S), S > s && (s = S));
  }
  return {
    chains: t.size,
    residues: n.size,
    atoms: o,
    hetatms: c,
    waters: r,
    heteroNonWater: c - r,
    resiMin: i === 1 / 0 ? 0 : i,
    resiMax: s === -1 / 0 ? 0 : s
  };
}
function wc(e) {
  return `${tt(e.chains)} chains · ${tt(e.residues)} residues · ${tt(e.atoms)} atoms · ${tt(e.hetatms)} HETATM` + (e.waters > 0 ? ` (${tt(e.waters)} water)` : "");
}
function Sc(e, t) {
  return e === "chain" ? { colorscheme: "chain" } : e === "ss" ? { colorscheme: "ssJmol" } : e === "spectrum" && t && t.resiMax > t.resiMin ? { colorscheme: { prop: "resi", gradient: "roygb", min: t.resiMin, max: t.resiMax } } : { colorscheme: "Jmol" };
}
function zo(e, t, n, o) {
  const c = o || (() => {
  }), r = Sc(t.color, n);
  try {
    e.removeAllSurfaces();
  } catch {
  }
  if (e.setStyle({}, {}), e.setStyle(
    To,
    t.rep === "stick" ? { stick: { radius: Me.stick.radius, ...r } } : t.rep === "sphere" ? { sphere: { scale: Me.sphere.scale, ...r } } : (
      // For 'surface' the shell is added separately; leave the atoms bare so
      // it is not cluttered from the inside.
      t.rep === "surface" ? {} : { cartoon: { ...r } }
    )
  ), e.setStyle(
    $c,
    t.hetero ? {
      stick: { radius: Me.hetero.stickRadius, colorscheme: "Jmol" },
      sphere: { scale: Me.hetero.sphereScale, colorscheme: "Jmol" }
    } : {}
  ), e.setStyle(
    bc,
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
        e.addSurface(qe.SurfaceType.VDW, { opacity: Me.surfaceOpacity, ...r }, To)
      ).then(() => {
        c(null), e.render();
      }).catch((i) => c(`Surface failed: ${me(i)}`, "error"));
    } catch (i) {
      c(`Surface failed: ${me(i)}`, "error");
    }
  }, 30);
}
const Cc = [
  { id: "cartoon", label: "Cartoon", title: "Ribbon / cartoon backbone" },
  { id: "surface", label: "Surface", title: "Molecular (VDW) surface" },
  { id: "stick", label: "Stick", title: "All-atom sticks" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" }
], kc = [
  { id: "chain", label: "Chain" },
  { id: "spectrum", label: "Spectrum" },
  { id: "ss", label: "Secondary structure" },
  { id: "element", label: "Element" }
], Ec = {
  ProteinComponentViz: "ProteinComponent",
  SolvatedPDBComponentViz: "SolvatedPDBComponent",
  ProteinMembraneComponentViz: "ProteinMembraneComponent"
};
class Pc extends we {
  placeholder() {
    return "Waiting for a ProteinComponent payload...";
  }
  renderView(t, n) {
    const o = n.pdb, c = n.name ?? "", r = Ec[n.type] ?? "ProteinComponent", s = { rep: "cartoon", color: "chain", waters: n.type !== "ProteinComponentViz", hetero: !0 };
    let d = null, y = null, h = null;
    const _ = z(
      "div",
      `display:flex;align-items:center;gap:14px;flex-wrap:wrap;padding:8px 14px;flex-shrink:0;font-size:12px;background:${x.toolbarBg};border-bottom:1px solid ${x.toolbarBorder};color:${x.textPrimary};`
    );
    t.appendChild(_), _.appendChild(
      z("span", `font-weight:700;font-size:14px;letter-spacing:.02em;color:${x.titleColor};`, c || "Protein")
    ), _.appendChild(z("span", `font-size:11px;color:${x.textMuted2};`, r));
    const $ = (a) => z("span", `font-size:11px;color:${x.textMuted};`, a);
    _.appendChild($("Style:")), _.appendChild(
      hn(Cc, s.rep, (a) => {
        s.rep = a, w();
      })
    ), _.appendChild($("Color:"));
    const b = z("select", Lo);
    for (const a of kc) {
      const l = z("option", "", a.label);
      l.value = a.id, b.appendChild(l);
    }
    b.value = s.color, b.addEventListener("change", () => {
      s.color = b.value, w();
    }), _.appendChild(b);
    const S = z("div", "display:flex;gap:4px;");
    _.appendChild(S);
    const C = [
      ["waters", "Waters", "Show water molecules", () => w()],
      ["hetero", "Hetero", "Show hetero atoms / ligands / ions / lipids", () => w()],
      ["spin", "Spin", "Rotate the view continuously", () => d?.spin(s.spin ? "y" : !1)]
    ];
    for (const [a, l, p, E] of C) {
      const P = z("button", Qe, l);
      P.title = p, P.style.background = s[a] ? x.btnBgActive : x.btnBg, P.onclick = () => {
        s[a] = !s[a], P.style.background = s[a] ? x.btnBgActive : x.btnBg, E();
      }, S.appendChild(P);
    }
    S.appendChild(bn(() => y?.reset()));
    const f = z("span", `margin-left:auto;font-size:11px;white-space:nowrap;color:${x.textMuted2};`);
    _.appendChild(f);
    const m = Vn();
    t.appendChild(m.wrap);
    const u = z(
      "div",
      "position:absolute;top:12px;left:50%;transform:translateX(-50%);padding:6px 14px;border-radius:6px;font-size:12px;z-index:20;display:none;pointer-events:none;"
    );
    m.wrap.appendChild(u);
    const g = (a, l) => {
      if (a == null) {
        u.style.display = "none";
        return;
      }
      u.textContent = a, u.style.display = "block";
      const p = l === "error";
      u.style.background = p ? x.warnBg : x.toolbarBg, u.style.color = p ? x.warnFg : x.textMuted, u.style.border = `1px solid ${p ? x.warnBorder : x.toolbarBorder}`;
    };
    function w() {
      d && zo(d, s, h, g);
    }
    if (!o || !o.trim())
      return g("No protein data - waiting for a PDB payload."), {};
    try {
      h = _c(o), f.textContent = wc(h);
    } catch (a) {
      g(`⚠ PDB parse error: ${me(a)}`, "error");
    }
    return g("Loading 3D viewer..."), Qn().then(() => {
      d = qe.createViewer(m.container, { backgroundColor: x.viewerBg }), d.addModel(o, "pdb"), zo(d, s, h, g), d.zoomTo(), d.spin(s.spin ? "y" : !1), d.render(), y = tr(m.container, d);
    }).catch((a) => {
      g(`⚠ Failed to render structure: ${me(a)}`, "error");
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
Se("gufe-protein", Pc);
const ci = "http://www.w3.org/2000/svg";
function oe(e, t = {}) {
  const n = document.createElementNS(ci, e);
  for (const [o, c] of Object.entries(t)) n.setAttribute(o, String(c));
  return n;
}
function Xe(e, t) {
  const n = document.createElementNS(ci, "title");
  return n.textContent = t, e.appendChild(n), e;
}
function dt(e) {
  const t = /* @__PURE__ */ new Map();
  return Dn(e, t, /* @__PURE__ */ new Set()), t;
}
function Dn(e, t, n) {
  if (e == null || typeof e != "object" || n.has(e)) return;
  if (n.add(e), Array.isArray(e)) {
    for (const c of e) Dn(c, t, n);
    return;
  }
  const o = e.registry;
  if (Array.isArray(o))
    for (const c of o) {
      const r = c["gufe-key"];
      typeof r == "string" && r && !t.has(r) && t.set(r, c);
    }
  for (const c of Object.values(e)) Dn(c, t, n);
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
function xc(e, t) {
  if (t <= 0) return it[0];
  const n = t === 1 ? 0 : e / (t - 1), o = it.length, c = Math.max(0, Math.min(o - 1, n * (o - 1))), r = Math.floor(c), i = Math.min(o - 1, r + 1), s = c - r;
  if (s === 0) return it[r];
  const d = ($) => {
    const b = parseInt($.replace("#", ""), 16);
    return [b >> 16 & 255, b >> 8 & 255, b & 255];
  }, y = d(it[r]), h = d(it[i]);
  return `#${y.map(($, b) => Math.round($ + (h[b] - $) * s)).map(($) => $.toString(16).padStart(2, "0")).join("")}`;
}
function Rc(e, t) {
  let n = 0;
  for (const c of [e, t]) {
    let r = 1 / 0, i = -1 / 0;
    for (const s of c)
      s[0] < r && (r = s[0]), s[0] > i && (i = s[0]);
    c.length && (n = Math.max(n, i - r));
  }
  const o = Math.round(n * 10) / 10;
  return o > 5 ? o : 5;
}
const Ac = 1.5;
function Fc(e, t, n, o) {
  const c = [...e.entries()], r = [];
  return c.forEach(([i, s], d) => {
    const y = t[i], h = n[s];
    !y || !h || r.push({
      a: [y[0] - o, y[1], y[2]],
      b: [h[0] + o, h[1], h[2]],
      color: xc(d, c.length),
      indexA: i,
      indexB: s
    });
  }), r;
}
function Io(e, t) {
  const n = e.replace(/\r/g, "").split(`
`);
  if (n.length < 4) return e;
  const o = parseInt(n[3].slice(0, 3), 10);
  if (!Number.isInteger(o) || o <= 0) return e;
  for (let c = 0; c < o; c++) {
    const r = 4 + c, i = n[r];
    if (!i || i.length < 30) continue;
    const s = Number(i.slice(0, 10));
    Number.isFinite(s) && (n[r] = (s + t).toFixed(4).padStart(10) + i.slice(10));
  }
  return n.join(`
`);
}
const Do = 420, qo = { radius: 0.6, alpha: 0.8 }, On = { radius: 0.05, dashed: !0, opacity: 0.75 }, Nc = [
  { id: "changes", label: "Changes", title: "Highlight what differs, as gufe draws it" },
  { id: "mapped", label: "Mapped", title: "Highlight the atoms that carry over instead" }
];
function li(e) {
  const t = parseInt(e.replace("#", ""), 16);
  return [(t >> 16 & 255) / 255, (t >> 8 & 255) / 255, (t & 255) / 255];
}
const Mc = li(Ie.elementChange), jc = li(Ie.uniqueAtom);
function Vo(e, t, n) {
  const o = [], c = [], r = [];
  for (let i = 0; i < t.length; i++) {
    const s = e.get(i);
    s === void 0 ? o.push(i) : t[i] !== n[s] ? c.push(i) : r.push(i);
  }
  return { atoms: o, elements: c, mapped: r };
}
function Oc(e, t) {
  if (t === "mapped")
    return { atoms: [...e.mapped, ...e.elements], colors: {} };
  const n = {};
  for (const o of e.elements) n[o] = Mc;
  for (const o of e.atoms) n[o] = jc;
  return { atoms: [...e.elements, ...e.atoms], colors: n };
}
function Tc(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e.componentA_to_componentB ?? [])
    Number.isInteger(n?.index_A) && Number.isInteger(n?.index_B) && t.set(n.index_A, n.index_B);
  return t;
}
function di(e, t) {
  const n = Pe(t, e.componentA, "SmallMoleculeComponentViz"), o = Pe(t, e.componentB, "SmallMoleculeComponentViz");
  return !n || !o ? null : { ...e, registry: n["gufe-key"] === o["gufe-key"] ? [n] : [n, o] };
}
class zc extends we {
  placeholder() {
    return "Waiting for a LigandAtomMapping payload...";
  }
  renderView(t, n) {
    const o = dt(n), c = Pe(o, n.componentA, "SmallMoleculeComponentViz"), r = Pe(o, n.componentB, "SmallMoleculeComponentViz"), i = Fe(n.name || "Atom mapping", "LigandAtomMapping");
    if (t.appendChild(i), !c || !r)
      return t.appendChild(
        ie("This mapping names two molecules, and its registry does not hold them.")
      ), {};
    const s = Ze(c), d = Ze(r), y = Tc(n);
    let h, _;
    try {
      h = an(c.sdf, s).symbols, _ = an(r.sdf, d).symbols;
    } catch (k) {
      return t.appendChild(ie(`Could not read a molecule: ${me(k)}`, !0)), {};
    }
    const $ = /* @__PURE__ */ new Map();
    for (const [k, T] of y) $.set(T, k);
    const b = Vo(y, h, _), S = Vo($, _, h);
    let C = "changes";
    i.statsEl.appendChild(se("mapped atoms", String(y.size))), i.statsEl.appendChild(
      se("element changes", String(b.elements.length), Ie.elementChange)
    ), i.statsEl.appendChild(
      se(`unique to ${s}`, String(b.atoms.length), Ie.uniqueAtom)
    ), i.statsEl.appendChild(
      se(`unique to ${d}`, String(S.atoms.length), Ie.uniqueAtom)
    ), i.statsEl.appendChild(se("score", n.score == null ? Ye : n.score.toFixed(3)));
    const f = z(
      "div",
      `display:flex;align-items:center;gap:12px;flex-wrap:wrap;padding:7px 14px;flex-shrink:0;font-size:12px;background:${x.toolbarBg};border-bottom:1px solid ${x.toolbarBorder};color:${x.textMuted};`
    );
    f.appendChild(z("span", `font-size:11px;color:${x.textMuted};`, "Highlight:")), f.appendChild(
      hn(Nc, C, (k) => {
        C = k, v();
      })
    );
    const m = z("div", "display:flex;align-items:center;gap:12px;margin-left:auto;font-size:11px;");
    m.appendChild(se("element change", "", Ie.elementChange)), m.appendChild(se("unique atom", "", Ie.uniqueAtom)), f.appendChild(m), t.appendChild(f);
    const u = z("div", "flex:1;min-height:0;display:flex;flex-direction:column;");
    t.appendChild(u);
    const g = z("div", "flex:1 1 55%;min-height:0;display:flex;flex-direction:row;");
    u.appendChild(g);
    const w = (k) => {
      const T = z("div", "flex:1 1 50%;min-width:0;display:flex;flex-direction:column;");
      T.appendChild(
        z(
          "div",
          `flex-shrink:0;padding:4px 10px;font-size:12px;font-weight:bold;color:${x.labelFg};background:${x.labelBg};`,
          k
        )
      );
      const K = z(
        "div",
        `flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:8px;background:${x.canvas2DBg};`
      );
      return T.appendChild(K), g.appendChild(T), K;
    }, a = (k) => z(
      "div",
      `flex-shrink:0;padding:4px 10px;font-size:12px;font-weight:bold;color:${x.labelFg};background:${x.labelBg};`,
      k
    ), l = w(s);
    g.appendChild(z("div", `width:1px;flex-shrink:0;background:${x.splitBorder};`));
    const p = w(d), E = z("div", "flex:1 1 45%;min-height:180px;display:flex;flex-direction:column;position:relative;");
    u.appendChild(z("div", `height:1px;flex-shrink:0;background:${x.splitBorder};`)), u.appendChild(E), E.appendChild(a("3D overlay"));
    const P = Vn();
    E.appendChild(P.wrap);
    const A = an(c.sdf, s).coords, O = an(r.sdf, d).coords, M = Rc(A, O) * Ac, D = Fc(y, A, O, M);
    let L = null, Z = null, te = !0;
    const ue = () => {
      if (L) {
        L.removeAllShapes();
        for (const k of D) {
          for (const T of [k.a, k.b])
            L.addSphere({
              center: { x: T[0], y: T[1], z: T[2] },
              radius: qo.radius,
              color: k.color,
              alpha: qo.alpha
            });
          te && L.addCylinder({
            start: { x: k.a[0], y: k.a[1], z: k.a[2] },
            end: { x: k.b[0], y: k.b[1], z: k.b[2] },
            radius: On.radius,
            color: k.color,
            dashed: On.dashed,
            opacity: On.opacity
          });
        }
        L.render();
      }
    }, J = z(
      "div",
      `position:absolute;bottom:10px;right:10px;display:flex;gap:4px;padding:4px;border-radius:6px;z-index:10;background:${x.switcherBg};box-shadow:0 2px 8px rgba(0,0,0,0.25);`
    ), ae = z("button", Qe, "Lines");
    ae.title = "Draw a line between each mapped pair", ae.style.background = x.btnBgActive, ae.onclick = () => {
      te = !te, ae.style.background = te ? x.btnBgActive : x.btnBg, ue();
    }, J.appendChild(ae), J.appendChild(bn(() => Z?.reset())), E.appendChild(J), P.container.appendChild(ie("Loading 3D viewer...")), Qn().then(() => {
      P.container.replaceChildren(), L = qe.createViewer(P.container, { backgroundColor: x.viewerBg }), L.addModel(ct(Io(c.sdf, -M)), "sdf"), L.addModel(ct(Io(r.sdf, M)), "sdf"), L.addModel(ct(c.sdf), "sdf"), L.addModel(ct(r.sdf), "sdf"), L.setStyle({}, { stick: { radius: 0.12, colorscheme: "Jmol" } }), ue(), L.zoomTo(), L.render(), Z = tr(P.container, L);
    }).catch((k) => {
      P.container.replaceChildren(ie(`3D render failed: ${me(k)}`, !0));
    });
    const B = z(
      "div",
      `flex-shrink:0;max-height:96px;overflow:auto;padding:8px 14px;font-size:11px;line-height:1.6;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;color:${x.textMuted};background:${x.panelBg};border-top:1px solid ${x.toolbarBorder};`
    );
    B.textContent = y.size ? Array.from(y, ([k, T]) => `${k} -> ${T}`).join("   ") : "This mapping relates no atoms at all.", t.appendChild(B);
    const F = Object.entries(n.annotations ?? {}).filter(([k]) => k !== "score");
    if (F.length) {
      const k = z(
        "div",
        `flex-shrink:0;padding:6px 14px;font-size:11px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;color:${x.textMuted2};background:${x.panelBg};border-top:1px solid ${x.toolbarBorder};`
      );
      k.textContent = F.map(([T, K]) => `${T}: ${String(K)}`).join("    "), t.appendChild(k);
    }
    let V = null;
    const j = (k, T, K) => {
      if (!V) return;
      const { atoms: H, colors: ne } = Oc(K, C), Q = gc(V, T, Do, H, ne);
      k.replaceChildren(), Q ? si(k, Q, Do) : k.appendChild(ie("Failed to parse molecule", !0));
    }, v = () => {
      j(l, c.sdf, b), j(p, r.sdf, S);
    };
    return l.appendChild(ie("Loading 2D depiction...")), p.appendChild(ie("Loading 2D depiction...")), er().then((k) => {
      V = k, v();
    }).catch((k) => {
      const T = `RDKit failed to load: ${me(k)}`;
      l.replaceChildren(ie(T, !0)), p.replaceChildren(ie(T, !0));
    }), {
      onResize() {
        L && (L.resize(), L.render());
      },
      cleanup() {
        if (Z?.cleanup(), Z = null, !!L) {
          try {
            L.clear();
          } catch {
          }
          L = null;
        }
      }
    };
  }
}
Se("gufe-atom-mapping", zc);
const Ic = ["Force-directed", "Circular", "Radial"], ln = 34, cn = 200, Tn = 1.5, Dc = 6, qc = 16, ve = {
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
function Vc(e) {
  const t = parseInt(e.replace("#", ""), 16);
  return [t >> 16 & 255, t >> 8 & 255, t & 255];
}
function Bc(e) {
  const [t, n] = x.netEdgeRamp.map(Vc), o = Math.max(0, Math.min(1, e ?? 0.5));
  return `rgb(${t.map((r, i) => Math.round(r + (n[i] - r) * o)).join(",")})`;
}
const ze = Ze, Lc = (e, t) => e.length > t ? `${e.slice(0, t - 1)}...` : e;
class Uc extends we {
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
    const i = new Map(c.map((A) => [A["gufe-key"], A])), s = [];
    let d = 0;
    for (const A of n.edges ?? []) {
      const O = i.get(A.componentA), M = i.get(A.componentB);
      if (!O || !M) {
        d++;
        continue;
      }
      s.push({ ...A, index: s.length, from: O, to: M });
    }
    const y = Fe(n.name || "Ligand network", "LigandNetwork");
    y.statsEl.appendChild(se("ligands", String(c.length))), y.statsEl.appendChild(se("mappings", String(s.length))), t.appendChild(y);
    const h = z("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    t.appendChild(h);
    const _ = z("div", `flex:1 1 58%;min-width:0;display:flex;flex-direction:column;background:${x.netCanvasBg};`), $ = z("div", `flex:1 1 42%;min-width:0;display:flex;flex-direction:column;background:${x.appBg};`);
    h.appendChild(_), h.appendChild(z("div", `width:1px;flex-shrink:0;background:${x.splitBorder};`)), h.appendChild($);
    const b = z("div", `flex:1;position:relative;overflow:hidden;min-height:0;background:${x.netCanvasBg};`);
    _.appendChild(b);
    const S = this.#t(
      (A) => P(A),
      () => p()
    );
    _.appendChild(S.bar);
    const C = this.#e($, o);
    if (!c.length)
      return b.appendChild(
        ie(
          r ? "None of this network's ligands are in its registry." : "This network has no ligands."
        )
      ), C.message("Nothing to show."), {};
    r && De(
      b,
      `${r} ligand${r === 1 ? "" : "s"} named by this network are not in its registry`
    ), d && De(b, `${d} mapping${d === 1 ? "" : "s"} name a ligand this network does not contain`);
    const f = er().catch((A) => (console.warn("[gufe-viz] RDKit failed to load:", me(A)), null));
    let m = s.length ? 0 : -1, u = null, g = "Force-directed", w = !1, a = !0, l = () => {
    }, p = () => {
    };
    const E = (A) => {
      m = A, C.show(s[A] ?? null), l();
    }, P = (A = g) => {
      g = A, u?.(), u = null, b.querySelector("svg")?.remove();
      const O = b.clientWidth || 800, M = b.clientHeight || 600;
      Kc(c, O, M, g, s);
      const D = () => {
        if (!a) return;
        const L = this.#r(b, c, s, O, M, E);
        l = () => L.setSelected(m), p = L.reset, u = L.cleanup, l(), f.then((Z) => Z && L.depict(Z)).catch(() => {
        });
      };
      if (g !== "Force-directed" || w) {
        D();
        return;
      }
      Hc(c, s, O, M).then((L) => {
        if (a) {
          if (L) {
            D();
            return;
          }
          w = !0, S.picker.value = "Circular", De(b, "d3 could not be loaded - showing the circular layout instead"), P("Circular");
        }
      }, D);
    };
    return P(), C.show(s[m] ?? null), {
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
    const r = z("select", Lo);
    for (const i of Ic) {
      const s = z("option", "", i);
      s.value = i, r.appendChild(s);
    }
    return r.onchange = () => t(r.value), o.appendChild(r), o.appendChild(bn(n, "Reset pan and zoom")), { bar: o, picker: r };
  }
  /** The right-hand pane: what the selected mapping is, in words and pictures. */
  #e(t, n) {
    const o = z(
      "div",
      `flex-shrink:0;padding:4px 10px;font-size:12px;font-weight:bold;color:${x.labelFg};background:${x.labelBg};`,
      "Selected mapping"
    ), c = z("div", "flex:1;min-height:0;overflow:auto;display:flex;flex-direction:column;");
    t.appendChild(o), t.appendChild(c);
    const r = (s) => c.replaceChildren(ie(s));
    return { show: (s) => {
      if (!s) {
        r("Click an edge to see its mapping.");
        return;
      }
      c.replaceChildren();
      const d = z(
        "div",
        `padding:10px 14px;font-size:13px;font-weight:600;color:${x.textPrimary};border-bottom:1px solid ${x.toolbarBorder};`,
        `${ze(s.from)} -> ${ze(s.to)}`
      );
      c.appendChild(d);
      const y = di(s, n), h = document.createElement("gufe-atom-mapping");
      h.style.cssText = "flex:1;min-width:0;min-height:220px;display:flex;", h.payload = y, c.appendChild(h);
      const _ = Object.entries(s.annotations ?? {}).filter(([$]) => $ !== "score");
      if (_.length) {
        const $ = z(
          "div",
          `padding:0 14px 12px;font-size:11px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;color:${x.textMuted2};`
        );
        for (const [b, S] of _)
          $.appendChild(z("div", "", `${b}: ${String(S)}`));
        c.appendChild($);
      }
    }, message: r };
  }
  /** Build the SVG for the current node positions. Returns the handles the
   * caller needs afterwards: selection, depictions, and teardown. */
  #r(t, n, o, c, r, i) {
    const s = oe("svg", { width: c, height: r, style: "display:block;touch-action:none;" }), d = oe("g");
    s.appendChild(d), t.appendChild(s);
    const y = [], h = oe("g"), _ = oe("g"), $ = oe("g", { "pointer-events": "none" }), b = oe("g");
    d.append(h, _, $, b);
    for (const g of o) {
      const w = Bc(g.score), a = oe("line", {
        stroke: x.netHaloColor,
        "stroke-width": Tn + 12,
        "stroke-linecap": "round",
        opacity: 0,
        "pointer-events": "none"
      }), l = oe("line", {
        stroke: w,
        "stroke-width": Tn + (g.score ?? 0.5) * (Dc - Tn),
        "stroke-opacity": 0.9,
        "pointer-events": "none"
      }), p = Xe(
        oe("line", { stroke: "transparent", "stroke-width": qc, style: "cursor:pointer;" }),
        `${ze(g.from)} -> ${ze(g.to)}${g.score == null ? "" : `
score ${g.score.toFixed(3)}`}`
      );
      if (p.addEventListener("click", (E) => {
        E.stopPropagation(), i(g.index);
      }), y.push(a), h.append(a, l), _.appendChild(p), g.score != null) {
        const E = oe("text", {
          "text-anchor": "middle",
          "dominant-baseline": "middle",
          "font-size": 10,
          "font-weight": 600,
          fill: x.netEdgeLabel
        });
        E.textContent = g.score.toFixed(2), $.appendChild(E);
      } else
        $.appendChild(oe("text"));
    }
    const S = [], C = [], f = n.map((g) => {
      const w = Xe(oe("g", { style: "cursor:grab;" }), `${ze(g)}
${g.smiles ?? ""}
${g["gufe-key"]}`);
      w.appendChild(
        oe("circle", {
          r: ln,
          fill: x.netNodeFill,
          stroke: x.netNodeStroke,
          "stroke-width": 1.5
        })
      );
      const a = oe("g", { "pointer-events": "none" });
      w.appendChild(a), S.push(a);
      const l = oe("text", {
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        "font-size": 16,
        "font-weight": 700,
        fill: x.netInitials,
        "pointer-events": "none"
      });
      l.textContent = ze(g).slice(0, 2).toUpperCase(), w.appendChild(l), C.push(l);
      const p = oe("text", {
        "text-anchor": "middle",
        y: ln + 14,
        "font-size": 11,
        "font-weight": 600,
        fill: x.netNodeLabel,
        "pointer-events": "none"
      });
      return p.textContent = Lc(ze(g), 16), w.appendChild(p), b.appendChild(w), w;
    }), m = () => {
      o.forEach((g, w) => {
        for (const l of [y[w], h.children[w * 2 + 1], _.children[w]]) {
          const p = l;
          p.setAttribute("x1", String(g.from.x)), p.setAttribute("y1", String(g.from.y)), p.setAttribute("x2", String(g.to.x)), p.setAttribute("y2", String(g.to.y));
        }
        const a = $.children[w];
        a.setAttribute("x", String((g.from.x + g.to.x) / 2)), a.setAttribute("y", String((g.from.y + g.to.y) / 2 - 8));
      }), n.forEach((g, w) => f[w].setAttribute("transform", `translate(${g.x},${g.y})`));
    };
    m();
    const u = this.#n(s, d, n, f, m);
    return {
      setSelected(g) {
        y.forEach((w, a) => w.setAttribute("opacity", a === g ? "0.95" : "0"));
      },
      depict(g) {
        const w = (ln - 4) * 2 / cn, a = new DOMParser();
        let l = 0;
        return n.forEach((p, E) => {
          const P = p.sdf && ii(g, p.sdf, cn);
          if (!P) return;
          const A = a.parseFromString(P, "image/svg+xml").documentElement;
          if (!A || A.nodeName.toLowerCase() === "parsererror") return;
          const O = S[E];
          O.setAttribute(
            "transform",
            `translate(${-w * cn / 2},${-w * cn / 2}) scale(${w})`
          );
          let M = 0;
          for (const D of Array.from(A.childNodes)) {
            if (D.nodeType !== 1) continue;
            const L = D.nodeName.toLowerCase();
            if (!(L === "defs" || L === "metadata" || L === "title")) {
              if (L === "rect") {
                const Z = (D.getAttribute("fill") ?? "").toLowerCase();
                if (Z === "#ffffff" || Z === "white" || Z === "rgb(255,255,255)") continue;
              }
              O.appendChild(document.importNode(D, !0)), M++;
            }
          }
          M && (C[E].setAttribute("display", "none"), l++);
        }), l;
      },
      reset: u.reset,
      cleanup: u.cleanup
    };
  }
  /** Wheel zoom, background pan, node drag - ~40 lines instead of d3-zoom and
   * d3-drag, and they keep working when d3 is unreachable. */
  #n(t, n, o, c, r) {
    let i = 1, s = 0, d = 0;
    const y = () => n.setAttribute("transform", `translate(${s},${d}) scale(${i})`), _ = ri(t, {
      onZoom: (f) => {
        const m = t.getBoundingClientRect(), u = f.clientX - m.left, g = f.clientY - m.top, w = Math.min(5 / i, Math.max(0.15 / i, Math.exp(-f.deltaY * 2e-3)));
        s = u - (u - s) * w, d = g - (g - d) * w, i *= w, y();
      },
      hint: "Click the graph or hold Ctrl to zoom"
    });
    let $ = null;
    const b = (f) => {
      $ = { x: f.clientX - s, y: f.clientY - d };
    }, S = (f) => {
      $ && (s = f.clientX - $.x, d = f.clientY - $.y, y());
    }, C = () => {
      $ = null;
    };
    return t.addEventListener("pointerdown", b), t.addEventListener("pointermove", S), t.addEventListener("pointerup", C), t.addEventListener("pointercancel", C), t.addEventListener("pointerleave", C), c.forEach((f, m) => {
      let u = null;
      f.addEventListener("pointerdown", (w) => {
        w.stopPropagation(), u = { x: w.clientX - o[m].x * i, y: w.clientY - o[m].y * i }, f.setPointerCapture(w.pointerId);
      }), f.addEventListener("pointermove", (w) => {
        u && (o[m].x = o[m].fx = (w.clientX - u.x) / i, o[m].y = o[m].fy = (w.clientY - u.y) / i, r());
      });
      const g = () => {
        u = null;
      };
      f.addEventListener("pointerup", g), f.addEventListener("pointercancel", g);
    }), {
      reset() {
        i = 1, s = 0, d = 0, y();
      },
      cleanup() {
        _.cleanup(), t.removeEventListener("pointerdown", b), t.removeEventListener("pointermove", S), t.removeEventListener("pointerup", C), t.removeEventListener("pointercancel", C), t.removeEventListener("pointerleave", C);
      }
    };
  }
}
function Kc(e, t, n, o, c) {
  const r = t / 2, i = n / 2, s = (d, y) => {
    d.forEach((h, _) => {
      const $ = 2 * Math.PI * _ / Math.max(1, d.length) - Math.PI / 2;
      h.x = r + y * Math.cos($), h.y = i + y * Math.sin($), h.fx = o === "Force-directed" ? void 0 : h.x, h.fy = o === "Force-directed" ? void 0 : h.y;
    });
  };
  if (o === "Radial" && e.length) {
    const d = new Map(e.map((C) => [C["gufe-key"], []]));
    for (const C of c)
      d.get(C.from["gufe-key"]).push(C.to["gufe-key"]), d.get(C.to["gufe-key"]).push(C.from["gufe-key"]);
    const y = new Map(e.map((C) => [C["gufe-key"], C])), h = e.reduce(
      (C, f) => d.get(f["gufe-key"]).length > d.get(C["gufe-key"]).length ? f : C
    ), _ = /* @__PURE__ */ new Set([h["gufe-key"]]);
    let $ = [h["gufe-key"]], b = 0;
    const S = Math.min(t, n) * 0.18;
    for (; $.length; ) {
      s(
        $.map((f) => y.get(f)),
        b === 0 ? 0 : b * S + 40
      );
      const C = [];
      for (const f of $)
        for (const m of d.get(f))
          _.has(m) || (_.add(m), C.push(m));
      $ = C, b++;
    }
    s(e.filter((C) => !_.has(C["gufe-key"])), Math.min(t, n) * 0.45);
    return;
  }
  s(e, Math.min(t, n) * 0.34);
}
async function Hc(e, t, n, o) {
  let c;
  try {
    if (c = await ni(), typeof c?.forceSimulation != "function") return !1;
  } catch {
    return !1;
  }
  const r = t.map((d) => ({ source: d.from["gufe-key"], target: d.to["gufe-key"], score: d.score })), i = c.forceSimulation(e).force(
    "link",
    c.forceLink(r).id((d) => d["gufe-key"]).distance((d) => ve.linkBaseDistance + (1 - (d.score ?? 0.5)) * ve.linkScoreBonus).strength(ve.linkStrength)
  ).force(
    "charge",
    c.forceManyBody().strength(ve.chargeStrength).distanceMin(ve.chargeDistanceMin).distanceMax(ve.chargeDistanceMax)
  ).force("center", c.forceCenter(n / 2, o / 2).strength(ve.centerStrength)).force("collision", c.forceCollide(ln + ve.collisionPadding).iterations(ve.collisionIterations)).force("x", c.forceX(n / 2).strength(ve.drift)).force("y", c.forceY(o / 2).strength(ve.drift)).stop(), s = Math.ceil(Math.log(i.alphaMin()) / Math.log(1 - i.alphaDecay()));
  for (let d = 0; d < s * ve.tickMultiplier; d++) i.tick();
  return !0;
}
Se("gufe-ligand-network", Uc);
const st = { width: 148, height: 46, radius: 10 }, We = {
  linkDistance: 220,
  linkStrength: 0.4,
  chargeStrength: -1200,
  collisionRadius: 110,
  collisionIterations: 3,
  tickMultiplier: 2
}, at = Ze;
function Gc(e, t) {
  return e.length > t ? `${e.slice(0, t - 1)}...` : e;
}
function Jc(e, t, n) {
  const o = Math.max(90, Math.min(t, n) * 0.36);
  e.forEach((c, r) => {
    const i = 2 * Math.PI * r / Math.max(1, e.length) - Math.PI / 2;
    c.x = t / 2 + o * Math.cos(i), c.y = n / 2 + o * Math.sin(i);
  });
}
async function Wc(e, t, n, o) {
  let c;
  try {
    if (c = await ni(), typeof c?.forceSimulation != "function") return !1;
  } catch {
    return !1;
  }
  const r = t.map((d) => ({ source: d.from["gufe-key"], target: d.to["gufe-key"] })), i = c.forceSimulation(e).force(
    "link",
    c.forceLink(r).id((d) => d["gufe-key"]).distance(We.linkDistance).strength(We.linkStrength)
  ).force("charge", c.forceManyBody().strength(We.chargeStrength)).force("center", c.forceCenter(n / 2, o / 2)).force("collision", c.forceCollide(We.collisionRadius).iterations(We.collisionIterations)).stop(), s = Math.ceil(Math.log(i.alphaMin()) / Math.log(1 - i.alphaDecay()));
  for (let d = 0; d < s * We.tickMultiplier; d++) i.tick();
  return !0;
}
class Yc extends we {
  placeholder() {
    return "Waiting for an AlchemicalNetwork payload...";
  }
  renderView(t, n) {
    const o = dt(n), c = [];
    let r = 0;
    for (const l of n.nodes ?? []) {
      const p = Pe(o, l, "ChemicalSystemViz");
      if (!p) {
        r++;
        continue;
      }
      c.push({ ...p, x: 0, y: 0 });
    }
    const i = new Map(c.map((l) => [l["gufe-key"], l])), s = [];
    let d = 0;
    for (const l of n.edges ?? []) {
      const p = i.get(l.stateA), E = i.get(l.stateB);
      if (!p || !E) {
        d++;
        continue;
      }
      s.push({ ...l, index: s.length, from: p, to: E });
    }
    const y = (l) => {
      const p = Pe(o, l.protocol, "ProtocolViz");
      return p?.gufe_type || p?.name || "";
    }, h = new Set(s.map(y).filter(Boolean)), _ = Fe(n.name || "Alchemical network", "AlchemicalNetwork");
    _.statsEl.appendChild(se("systems", String(c.length))), _.statsEl.appendChild(se("transformations", String(s.length))), h.size && _.statsEl.appendChild(se("protocol", [...h].join(", "))), t.appendChild(_);
    const $ = z("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    t.appendChild($);
    const b = z("div", `flex:1 1 62%;min-width:0;position:relative;overflow:hidden;background:${x.netCanvasBg};`);
    $.appendChild(b), $.appendChild(z("div", `width:1px;flex-shrink:0;background:${x.splitBorder};`));
    const S = z("div", `flex:1 1 38%;min-width:0;display:flex;flex-direction:column;background:${x.appBg};`);
    $.appendChild(S);
    const C = this.#t(S, o, y);
    if (!c.length)
      return b.appendChild(
        ie(
          r ? "None of this network's chemical systems are in its registry." : "This network has no chemical systems."
        )
      ), C.message("Nothing to show."), {};
    r && De(
      b,
      `${r} chemical system${r === 1 ? "" : "s"} named by this network are not in its registry`
    ), d && De(
      b,
      `${d} transformation${d === 1 ? "" : "s"} name a system this network does not contain`
    );
    let f = !0, m = !1, u = null, g = () => {
    };
    const w = (l, p) => {
      u = { kind: l, index: p }, C.show(l === "node" ? c[p] : s[p], l), g();
    }, a = () => {
      b.querySelector("svg")?.remove();
      const l = b.clientWidth || 800, p = b.clientHeight || 600;
      Jc(c, l, p);
      const E = () => {
        if (!f) return;
        const P = this.#e(b, c, s, l, p, w);
        g = () => P.setSelected(u), g();
      };
      if (m) {
        E();
        return;
      }
      Wc(c, s, l, p).then((P) => {
        f && (P || (m = !0, De(b, "d3 could not be loaded - showing the circular layout instead")), E());
      }, E);
    };
    return a(), w("node", 0), {
      onResize: () => a(),
      cleanup: () => {
        f = !1;
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
    const r = (d) => c.replaceChildren(ie(d)), i = (d, y) => {
      const h = z(
        "div",
        `padding:10px 14px;border-bottom:1px solid ${x.toolbarBorder};display:flex;flex-direction:column;gap:4px;`
      );
      return h.appendChild(z("div", `font-size:13px;font-weight:600;color:${x.textPrimary};`, d)), h.appendChild(z("div", `font-size:11px;color:${x.textMuted2};`, y)), h;
    };
    return { show: (d, y) => {
      if (c.replaceChildren(), y === "node") {
        const $ = d;
        c.appendChild(i(at($), "ChemicalSystem"));
        const b = z("div", "display:flex;flex-direction:column;gap:6px;padding:12px 14px;"), S = Object.entries($.components ?? {});
        for (const [C, f] of S) {
          const m = Ve(n, f), u = z(
            "div",
            `display:flex;align-items:center;gap:8px;padding:7px 10px;border-radius:8px;min-width:0;background:${x.cardBg};border:1px solid ${x.cardBorder};`
          );
          u.appendChild(z("span", `font-size:12px;font-weight:700;color:${x.textPrimary};`, C)), u.appendChild(
            z(
              "span",
              `font-size:11px;color:${x.textMuted};overflow-wrap:anywhere;min-width:0;`,
              m ? m.name || "(unnamed)" : "(not in the registry)"
            )
          );
          const g = lt(
            m ? m.type === "UnknownComponentViz" ? m.gufe_type : m.type.replace(/Viz$/, "") : "missing"
          );
          g.style.marginLeft = "auto", u.appendChild(g), b.appendChild(u);
        }
        S.length || b.appendChild(z("div", `font-size:12px;color:${x.textMuted2};`, "This system lists no components.")), c.appendChild(b), c.appendChild(
          z(
            "div",
            `padding:0 14px 12px;font-size:11px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;color:${x.textMuted2};overflow-wrap:anywhere;`,
            $["gufe-key"]
          )
        );
        return;
      }
      const h = d;
      c.appendChild(i(h.name || "Unnamed transformation", "Transformation"));
      const _ = z("div", "display:flex;flex-direction:column;gap:8px;padding:12px 14px;");
      for (const [$, b] of [
        ["State A", at(h.from)],
        ["State B", at(h.to)],
        ["Protocol", o(h) || "-"]
      ]) {
        const S = z("div", "display:flex;gap:10px;align-items:baseline;min-width:0;");
        S.appendChild(
          z(
            "span",
            `flex:0 0 76px;font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:${x.textMuted2};`,
            $
          )
        ), S.appendChild(z("span", `flex:1;min-width:0;font-size:12px;color:${x.textPrimary};overflow-wrap:anywhere;`, b)), _.appendChild(S);
      }
      c.appendChild(_), c.appendChild(
        z(
          "div",
          `padding:0 14px 12px;font-size:11px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;color:${x.textMuted2};overflow-wrap:anywhere;`,
          h["gufe-key"]
        )
      );
    }, message: r };
  }
  /** Build the SVG for the current positions, and hand back the selection hook. */
  #e(t, n, o, c, r, i) {
    const s = oe("svg", { width: c, height: r, style: "display:block;" });
    t.appendChild(s);
    const d = oe("g"), y = oe("g");
    s.append(d, y);
    const h = [];
    o.forEach(($, b) => {
      const S = oe("line", {
        x1: $.from.x,
        y1: $.from.y,
        x2: $.to.x,
        y2: $.to.y,
        stroke: x.netEdgeLine,
        "stroke-width": 2,
        "stroke-linecap": "round",
        style: "cursor:pointer;"
      });
      Xe(S, $.name || "transformation"), S.addEventListener("click", () => i("edge", b)), d.appendChild(S), h.push(S);
      const C = oe("line", {
        x1: $.from.x,
        y1: $.from.y,
        x2: $.to.x,
        y2: $.to.y,
        stroke: "transparent",
        "stroke-width": 16,
        style: "cursor:pointer;"
      });
      C.addEventListener("click", () => i("edge", b)), d.appendChild(C);
    });
    const _ = [];
    return n.forEach(($, b) => {
      const S = oe("g", { style: "cursor:pointer;" }), C = oe("rect", {
        x: $.x - st.width / 2,
        y: $.y - st.height / 2,
        width: st.width,
        height: st.height,
        rx: st.radius,
        fill: x.cardBg,
        stroke: x.cardBorder,
        "stroke-width": 2
      });
      S.appendChild(C), _.push(C);
      const f = oe("text", {
        x: $.x,
        y: $.y - 2,
        "text-anchor": "middle",
        fill: x.netNodeLabel,
        "font-size": 12,
        "font-weight": 700,
        "font-family": "ui-sans-serif,system-ui,sans-serif"
      });
      f.textContent = Gc(at($), 20), S.appendChild(f);
      const m = Object.keys($.components ?? {}).length, u = oe("text", {
        x: $.x,
        y: $.y + 14,
        "text-anchor": "middle",
        fill: x.netInitials,
        "font-size": 10,
        "font-family": "ui-sans-serif,system-ui,sans-serif"
      });
      u.textContent = `${m} component${m === 1 ? "" : "s"}`, S.appendChild(u), Xe(S, at($)), S.addEventListener("click", () => i("node", b)), y.appendChild(S);
    }), {
      setSelected($) {
        _.forEach((b, S) => {
          const C = $?.kind === "node" && $.index === S;
          b.setAttribute("stroke", C ? x.cardBorderActive : x.cardBorder), b.setAttribute("stroke-width", C ? "3" : "2");
        }), h.forEach((b, S) => {
          const C = $?.kind === "edge" && $.index === S;
          b.setAttribute("stroke", C ? x.netHaloColor : x.netEdgeLine), b.setAttribute("stroke-width", C ? "4" : "2");
        });
      }
    };
  }
}
Se("gufe-alchemical-network", Yc);
function Xc(e) {
  return e.name || e.type.replace(/Viz$/, "");
}
function Zc(e) {
  return e.type === "UnknownComponentViz" ? e.gufe_type : e.type.replace(/Viz$/, "");
}
class Qc extends we {
  placeholder() {
    return "Waiting for a ChemicalSystem payload...";
  }
  renderView(t, n) {
    const o = dt(n), c = [], r = [];
    for (const [S, C] of Object.entries(n.components ?? {})) {
      const f = Ve(o, C);
      f ? c.push([S, f]) : r.push(S);
    }
    const i = Fe(n.name || "Chemical system", "ChemicalSystem");
    if (i.statsEl.appendChild(se("components", String(c.length))), t.appendChild(i), !c.length)
      return t.appendChild(
        ie(
          r.length ? "None of this system's components are in its registry." : "This chemical system has no components."
        )
      ), {};
    const s = z("div", "flex:1;min-height:0;position:relative;display:flex;flex-direction:row;");
    t.appendChild(s), r.length && De(
      s,
      `${r.length} component${r.length === 1 ? "" : "s"} named by this system (${r.join(", ")}) are not in its registry`
    );
    const d = z(
      "div",
      `flex:0 0 220px;min-width:0;overflow:auto;display:flex;flex-direction:column;gap:6px;padding:10px;background:${x.panelBg};border-right:1px solid ${x.splitBorder};`
    );
    s.appendChild(d);
    const y = z("div", "flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;");
    s.appendChild(y);
    const h = z("div", "flex:1;min-height:0;display:flex;");
    y.appendChild(h);
    const _ = document.createElement("gufe-view");
    _.style.cssText = "flex:1;min-width:0;min-height:0;", h.appendChild(_);
    const $ = [], b = (S) => {
      $.forEach((C, f) => {
        const m = f === S;
        C.style.background = m ? x.cardBgActive : x.cardBg, C.style.borderColor = m ? x.cardBorderActive : x.cardBorder;
      }), _.payload = c[S][1];
    };
    return c.forEach(([S, C], f) => {
      const m = z(
        "button",
        `display:flex;flex-direction:column;align-items:flex-start;gap:4px;padding:8px 10px;text-align:left;border:1px solid ${x.cardBorder};border-radius:8px;background:${x.cardBg};cursor:pointer;font-family:inherit;font-size:12px;width:100%;`
      );
      m.appendChild(z("span", `font-weight:700;color:${x.textPrimary};`, S)), m.appendChild(z("span", `font-size:11px;color:${x.textMuted};`, Xc(C))), m.appendChild(lt(Zc(C))), m.onclick = () => b(f), $.push(m), d.appendChild(m);
    }), b(0), {
      onResize: () => _.resize?.(),
      // Removing the nested view fires its own `disconnectedCallback`, which is
      // where whatever it mounted releases its viewers.
      cleanup: () => _.remove()
    };
  }
}
Se("gufe-chemical-system", Qc);
class el extends we {
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
Se("gufe-protocol", el);
const _e = { width: 340, height: 260, padding: 14, radius: 12 }, tl = 150, nl = 40, rl = 24;
function ol(e) {
  let t = e >>> 0;
  return () => (t = t * 1664525 + 1013904223 >>> 0, t / 4294967296);
}
function il(e) {
  const t = /-?\d+(\.\d+)?([eE][-+]?\d+)?/.exec(e ?? "");
  if (!t) return null;
  const n = Number(t[0]);
  return Number.isFinite(n) ? n : null;
}
function sl(e) {
  return e == null || e <= 0 ? 0 : Math.max(1, Math.min(rl, Math.round(e * nl)));
}
function al(e) {
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
  const n = ol(1597463007), o = () => ({
    x: _e.padding + n() * (_e.width - 2 * _e.padding),
    y: _e.padding + n() * (_e.height - 2 * _e.padding)
  });
  for (let i = 0; i < tl; i++) {
    const { x: s, y: d } = o();
    t.appendChild(oe("circle", { cx: s, cy: d, r: 2.4, fill: x.textMuted2, "fill-opacity": 0.45 }));
  }
  const c = sl(il(e.ion_concentration)), r = [
    [e.positive_ion, x.diffAdded],
    [e.negative_ion, x.diffRemoved]
  ];
  for (const [i, s] of r)
    for (let d = 0; d < c; d++) {
      const { x: y, y: h } = o(), _ = oe("circle", { cx: y, cy: h, r: 5.5, fill: s, "fill-opacity": 0.85 });
      t.appendChild(Xe(_, i));
    }
  return t;
}
class cl extends we {
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
    const i = un();
    return i.style.flex = "1 1 340px", i.style.alignItems = "center", i.appendChild(al(n)), i.appendChild(
      z(
        "div",
        `padding-top:10px;font-size:11px;text-align:center;color:${x.textMuted2};`,
        "Schematic only: the dots show which ions are present, not how many."
      )
    ), c.appendChild(i), {};
  }
}
Se("gufe-solvent", cl);
const qn = {
  unchanged: x.diffUnchanged,
  changed: x.diffChanged,
  added: x.diffAdded,
  removed: x.diffRemoved
};
function ll(e, t) {
  return e && !t ? "removed" : !e && t ? "added" : e === t ? "unchanged" : "changed";
}
function dl(e, t) {
  return [.../* @__PURE__ */ new Set([...Object.keys(e.components ?? {}), ...Object.keys(t.components ?? {})])].sort();
}
function ul(e) {
  if (!e) return null;
  const t = e.type === "UnknownComponentViz" ? e.gufe_type : e.type.replace(/Viz$/, "");
  return { name: e.name || "(unnamed)", type: t };
}
function Bo(e, t) {
  const n = z(
    "div",
    `flex:1 1 50%;min-width:0;display:flex;flex-direction:column;gap:4px;padding:8px 10px;border-radius:8px;background:${x.cardBg};border:1px solid ${x.cardBorder};`
  ), o = ul(e);
  return o ? (n.style.borderColor = t === "unchanged" ? x.cardBorder : qn[t], n.appendChild(z("span", `font-size:12px;font-weight:600;color:${x.textPrimary};`, o.name)), n.appendChild(lt(o.type)), n) : (n.style.background = "transparent", n.style.borderStyle = "dashed", n.appendChild(z("span", `font-size:12px;color:${x.textMuted2};`, "absent")), n);
}
function fl(e, t) {
  const n = Ve(t, e.componentA), o = Ve(t, e.componentB);
  return `${n ? Ze(n) : "A"} to ${o ? Ze(o) : "B"}`;
}
class pl extends we {
  placeholder() {
    return "Waiting for a Transformation payload...";
  }
  renderView(t, n) {
    const o = dt(n), c = Pe(o, n.stateA, "ChemicalSystemViz"), r = Pe(o, n.stateB, "ChemicalSystemViz"), i = Pe(o, n.protocol, "ProtocolViz"), s = n.mappings ?? [], d = Fe(n.name || "Transformation", "Transformation");
    if (d.statsEl.appendChild(se("protocol", i?.gufe_type || i?.name || "-")), d.statsEl.appendChild(se("mappings", String(s.length))), t.appendChild(d), !c || !r)
      return t.appendChild(
        ie("This transformation names two chemical systems, and its registry does not hold them.")
      ), {};
    const y = dl(c, r), h = z("div", "flex:0 0 auto;max-height:45%;overflow:auto;padding:12px 14px;");
    t.appendChild(h);
    const _ = z("div", "display:flex;gap:10px;padding:0 0 6px 120px;");
    for (const [f, m] of [
      ["State A", c],
      ["State B", r]
    ])
      _.appendChild(
        z(
          "div",
          `flex:1 1 50%;min-width:0;font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:${x.textMuted2};`,
          `${f}${m.name ? ` - ${m.name}` : ""}`
        )
      );
    h.appendChild(_);
    for (const f of y) {
      const m = c.components?.[f], u = r.components?.[f], g = ll(m, u), w = Ve(o, m), a = Ve(o, u), l = z("div", "display:flex;align-items:stretch;gap:10px;padding:4px 0;"), p = z("div", "flex:0 0 110px;display:flex;align-items:center;gap:6px;min-width:0;");
      p.appendChild(
        z("span", `width:8px;height:8px;border-radius:50%;flex-shrink:0;background:${qn[g]};`)
      );
      const E = z("span", `font-size:12px;font-weight:700;color:${x.textPrimary};overflow-wrap:anywhere;`, f);
      E.title = g, p.appendChild(E), l.appendChild(p), l.appendChild(Bo(w, g)), l.appendChild(Bo(a, g)), h.appendChild(l);
    }
    const $ = z(
      "div",
      `display:flex;flex-wrap:wrap;gap:12px;padding:8px 0 0;font-size:11px;color:${x.textMuted};`
    );
    for (const f of ["unchanged", "changed", "added", "removed"])
      $.appendChild(se(f, "", qn[f]));
    h.appendChild($);
    const b = z(
      "div",
      `flex-shrink:0;padding:4px 10px;font-size:12px;font-weight:bold;color:${x.labelFg};background:${x.labelBg};`,
      "Atom mapping"
    );
    if (t.appendChild(b), !s.length)
      return t.appendChild(
        ie(
          "This transformation carries no atom mapping - nothing here maps one small molecule onto another."
        )
      ), {};
    const S = document.createElement("gufe-atom-mapping");
    S.style.cssText = "flex:1;min-height:0;min-width:0;";
    const C = (f) => {
      S.payload = di(s[f], o);
    };
    if (C(0), s.length > 1) {
      const f = z(
        "div",
        `display:flex;align-items:center;gap:8px;padding:6px 10px;flex-shrink:0;font-size:11px;background:${x.toolbarBg};border-bottom:1px solid ${x.toolbarBorder};color:${x.textMuted};`
      );
      f.appendChild(
        hn(
          s.map((m, u) => ({
            id: String(u),
            label: m.name || fl(m, o)
          })),
          "0",
          (m) => C(Number(m))
        )
      ), t.appendChild(f);
    }
    return t.appendChild(S), {
      onResize: () => S.resize?.(),
      cleanup: () => S.remove()
    };
  }
}
Se("gufe-transformation", pl);
class hl extends we {
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
Se("gufe-unknown-component", hl);
function _l(e, t) {
  let n = e.querySelector("gufe-view");
  return n || (n = document.createElement("gufe-view"), n.style.cssText = "display:block;width:100%;height:100%;", e.appendChild(n)), t !== void 0 && (n.payload = t), n;
}
export {
  pi as CHROME_OPEN_BY_DEFAULT,
  gi as DEBUG_ATTRIBUTE,
  yi as DEBUG_GLOBAL,
  lc as DEFAULT_ZOOM_BOUNDS,
  Yc as GufeAlchemicalNetwork,
  zc as GufeAtomMapping,
  Qc as GufeChemicalSystem,
  we as GufeElement,
  Uc as GufeLigandNetwork,
  Pc as GufeProtein,
  el as GufeProtocol,
  vc as GufeSmallMolecule,
  cl as GufeSolvent,
  pl as GufeTransformation,
  hl as GufeUnknownComponent,
  oc as GufeView,
  Ie as MAPPING_COLORS,
  it as MAPPING_RAMP_3D,
  bl as MAPPING_RAMP_NAME,
  gl as PAYLOAD_TYPES,
  yl as SCHEMA_TYPES,
  Yn as VIEW_TAGS,
  dc as boundedZoom,
  dt as buildRegistry,
  ml as chromeMenu,
  bi as debugEnabled,
  Se as defineElement,
  ei as describeProblem,
  ll as diffStatus,
  $l as dispatchProblem,
  Ze as entryLabel,
  nc as formatIssues,
  ri as guardWheel,
  wi as logPayload,
  Ve as lookup,
  Pe as lookupOfType,
  di as mappingPayloadFor,
  _l as mount,
  il as parseConcentration,
  _i as payloadJson,
  bn as resetControl,
  Vo as uniqueAtoms,
  vl as validateAs,
  tc as validatePayload,
  tr as viewerInteraction,
  fc as wheelFactor
};
