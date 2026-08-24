const Xn = {
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
function ai() {
  try {
    return globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches ?? !1;
  } catch {
    return !1;
  }
}
const x = ai() ? Xn.dark : Xn.light;
function z(e, t, n) {
  const o = document.createElement(e);
  return t && (o.style.cssText = t), n != null && (o.textContent = n), o;
}
function an(e) {
  return String(e ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function he(e) {
  if (e == null) return "unknown error";
  const t = e.message;
  if (typeof t == "string" && t) return t;
  const n = String(e);
  return n === "[object Object]" ? e.name || "unknown error" : n;
}
const et = (e) => e.toLocaleString("en-US"), We = "-", st = `background:${x.btnBg};color:${x.btnFg};border:1px solid ${x.btnBorder};padding:4px 9px;font-size:11px;font-weight:bold;border-radius:3px;cursor:pointer;font-family:inherit;`, To = `background:${x.selectBg};color:${x.textPrimary};border:1px solid ${x.selectBorder};border-radius:6px;padding:4px 8px;font-size:12px;cursor:pointer;font-family:inherit;`;
function un(e, t, n) {
  const o = z("div", "display:flex;gap:4px;"), c = e.map((r) => {
    const s = z("button", st, r.label);
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
  return c.innerHTML = `${an(e)} <b style="color:${x.textPrimary};">${an(t)}</b>`, o.appendChild(c), o;
}
function qe(e, t) {
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
function Ne(e, t) {
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
function at(e) {
  return z(
    "span",
    `padding:1px 7px;border-radius:10px;font-size:10px;font-weight:700;letter-spacing:.04em;white-space:nowrap;background:${x.badgeBg};color:${x.badgeFg};`,
    e
  );
}
function cn() {
  return z(
    "div",
    `display:flex;flex-direction:column;gap:2px;padding:14px 18px;border-radius:10px;background:${x.cardBg};border:1px solid ${x.cardBorder};`
  );
}
function zo() {
  const e = z("div", "flex:1;position:relative;min-height:0;min-width:0;"), t = z("div", "position:absolute;inset:0;");
  return t.dataset.gufeViewer = "", e.appendChild(t), { wrap: e, container: t };
}
const ci = !1;
function li() {
  const e = z("span", "display:inline-flex;flex-direction:column;gap:2px;justify-content:center;");
  for (let t = 0; t < 3; t++)
    e.appendChild(z("span", `display:block;width:11px;height:1.5px;border-radius:1px;background:${x.btnFg};`));
  return e;
}
function al(e, t, n = {}) {
  let o = n.open ?? ci, c = !1;
  const r = z("div", "flex-shrink:0;"), s = z("button", `${st}display:inline-flex;align-items:center;gap:6px;padding:4px 8px;`);
  s.appendChild(li()), s.setAttribute("aria-label", n.label || "Toggle menu");
  const a = () => {
    o && !c && (c = !0, r.appendChild(t())), r.style.display = o ? "" : "none", s.style.background = o ? x.btnBgActive : x.btnBg, s.setAttribute("aria-expanded", String(o));
  }, d = (y) => {
    y !== o && (o = y, a(), n.onToggle?.(o));
  };
  return s.onclick = () => d(!o), s.onmouseover = () => {
    s.style.background = o ? x.btnBgActive : x.btnBgHover;
  }, s.onmouseout = () => {
    s.style.background = o ? x.btnBgActive : x.btnBg;
  }, e.toggleEl.appendChild(s), a(), {
    panel: r,
    isOpen: () => o,
    setOpen: d
  };
}
const di = ["debug", "gufe-debug"], ui = "debug", fi = "GUFE_VIZ_DEBUG";
function pi() {
  return !!globalThis[fi];
}
function hi() {
  try {
    const e = globalThis.location?.search;
    if (!e) return !1;
    const t = new URLSearchParams(e);
    return di.some((n) => t.has(n));
  } catch {
    return !1;
  }
}
function mi(e) {
  return e?.hasAttribute?.(ui) ? !0 : pi() || hi();
}
function gi(e) {
  try {
    return JSON.stringify(e, null, 2) ?? String(e);
  } catch (t) {
    return `<could not be stringified: ${he(t)}>`;
  }
}
function yi(e, t, n) {
  if (!mi(n)) return;
  const o = gi(t), c = t?.type, r = `[gufe-viz] ${e}${typeof c == "string" ? ` ${c}` : ""} (${o.length} chars)`, s = typeof console.groupCollapsed == "function";
  s ? console.groupCollapsed(r) : console.log(r), console.log(o), console.log(t), s && console.groupEnd?.();
}
const vi = 150;
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
      this.#o && clearTimeout(this.#o), this.#o = setTimeout(() => this.#e?.onResize?.(), vi);
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
    n === this.#i && (console.warn("[gufe-viz] render failed:", o), t.replaceChildren(ie(`Failed to render: ${he(o)}`, !0)));
  }
  /** Force a resize pass - for hosts that know they resized us. */
  resize() {
    this.#e?.onResize?.();
  }
}
function Se(e, t) {
  typeof customElements > "u" || customElements.get(e) || customElements.define(e, t);
}
function $i(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var lt = { exports: {} }, bn = {}, xe = {}, Oe = {}, _n = {}, wn = {}, Sn = {}, Zn;
function ln() {
  return Zn || (Zn = 1, (function(e) {
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
        a(g, u[w]), g.push(m[++w]);
      return new o(g);
    }
    e._ = c;
    const r = new o("+");
    function s(m, ...u) {
      const g = [b(m[0])];
      let w = 0;
      for (; w < u.length; )
        g.push(r), a(g, u[w]), g.push(r, b(m[++w]));
      return d(g), new o(g);
    }
    e.str = s;
    function a(m, u) {
      u instanceof o ? m.push(...u._items) : u instanceof n ? m.push(u) : m.push(_(u));
    }
    e.addCodeArg = a;
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
      return u.emptyStr() ? m : m.emptyStr() ? u : s`${m}${u}`;
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
    function k(m) {
      if (typeof m == "string" && e.IDENTIFIER.test(m))
        return new o(`${m}`);
      throw new Error(`CodeGen: invalid export name: ${m}, use explicit $id name mapping`);
    }
    e.getEsmExportName = k;
    function f(m) {
      return new o(m.toString());
    }
    e.regexpCode = f;
  })(Sn)), Sn;
}
var kn = {}, Qn;
function er() {
  return Qn || (Qn = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0;
    const t = /* @__PURE__ */ ln();
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
    const s = (0, t._)`\n`;
    class a extends c {
      constructor(y) {
        super(y), this._values = {}, this._scope = y.scope, this.opts = { ...y, _n: y.lines ? s : t.nil };
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
        let k = this._values[b];
        if (k) {
          const u = k.get(S);
          if (u)
            return u;
        } else
          k = this._values[b] = /* @__PURE__ */ new Map();
        k.set(S, $);
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
          const k = y[S];
          if (!k)
            continue;
          const f = _[S] = _[S] || /* @__PURE__ */ new Map();
          k.forEach((m) => {
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
    e.ValueScope = a;
  })(kn)), kn;
}
var tr;
function J() {
  return tr || (tr = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
    const t = /* @__PURE__ */ ln(), n = /* @__PURE__ */ er();
    var o = /* @__PURE__ */ ln();
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
    var c = /* @__PURE__ */ er();
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
      optimizeNames(v, E) {
        return this;
      }
    }
    class s extends r {
      constructor(v, E, I) {
        super(), this.varKind = v, this.name = E, this.rhs = I;
      }
      render({ es5: v, _n: E }) {
        const I = v ? n.varKinds.var : this.varKind, K = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
        return `${I} ${this.name}${K};` + E;
      }
      optimizeNames(v, E) {
        if (v[this.name.str])
          return this.rhs && (this.rhs = U(this.rhs, v, E)), this;
      }
      get names() {
        return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
      }
    }
    class a extends r {
      constructor(v, E, I) {
        super(), this.lhs = v, this.rhs = E, this.sideEffects = I;
      }
      render({ _n: v }) {
        return `${this.lhs} = ${this.rhs};` + v;
      }
      optimizeNames(v, E) {
        if (!(this.lhs instanceof t.Name && !v[this.lhs.str] && !this.sideEffects))
          return this.rhs = U(this.rhs, v, E), this;
      }
      get names() {
        const v = this.lhs instanceof t.Name ? {} : { ...this.lhs.names };
        return q(v, this.rhs);
      }
    }
    class d extends a {
      constructor(v, E, I, K) {
        super(v, I, K), this.op = E;
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
      optimizeNames(v, E) {
        return this.code = U(this.code, v, E), this;
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
        return this.nodes.reduce((E, I) => E + I.render(v), "");
      }
      optimizeNodes() {
        const { nodes: v } = this;
        let E = v.length;
        for (; E--; ) {
          const I = v[E].optimizeNodes();
          Array.isArray(I) ? v.splice(E, 1, ...I) : I ? v[E] = I : v.splice(E, 1);
        }
        return v.length > 0 ? this : void 0;
      }
      optimizeNames(v, E) {
        const { nodes: I } = this;
        let K = I.length;
        for (; K--; ) {
          const H = I[K];
          H.optimizeNames(v, E) || (Q(v, H.names), I.splice(K, 1));
        }
        return I.length > 0 ? this : void 0;
      }
      get names() {
        return this.nodes.reduce((v, E) => j(v, E.names), {});
      }
    }
    class S extends b {
      render(v) {
        return "{" + v._n + super.render(v) + "}" + v._n;
      }
    }
    class k extends b {
    }
    class f extends S {
    }
    f.kind = "else";
    class m extends S {
      constructor(v, E) {
        super(E), this.condition = v;
      }
      render(v) {
        let E = `if(${this.condition})` + super.render(v);
        return this.else && (E += "else " + this.else.render(v)), E;
      }
      optimizeNodes() {
        super.optimizeNodes();
        const v = this.condition;
        if (v === !0)
          return this.nodes;
        let E = this.else;
        if (E) {
          const I = E.optimizeNodes();
          E = this.else = Array.isArray(I) ? new f(I) : I;
        }
        if (E)
          return v === !1 ? E instanceof m ? E : E.nodes : this.nodes.length ? this : new m(te(v), E instanceof m ? [E] : E.nodes);
        if (!(v === !1 || !this.nodes.length))
          return this;
      }
      optimizeNames(v, E) {
        var I;
        if (this.else = (I = this.else) === null || I === void 0 ? void 0 : I.optimizeNames(v, E), !!(super.optimizeNames(v, E) || this.else))
          return this.condition = U(this.condition, v, E), this;
      }
      get names() {
        const v = super.names;
        return q(v, this.condition), this.else && j(v, this.else.names), v;
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
      optimizeNames(v, E) {
        if (super.optimizeNames(v, E))
          return this.iteration = U(this.iteration, v, E), this;
      }
      get names() {
        return j(super.names, this.iteration.names);
      }
    }
    class w extends u {
      constructor(v, E, I, K) {
        super(), this.varKind = v, this.name = E, this.from = I, this.to = K;
      }
      render(v) {
        const E = v.es5 ? n.varKinds.var : this.varKind, { name: I, from: K, to: H } = this;
        return `for(${E} ${I}=${K}; ${I}<${H}; ${I}++)` + super.render(v);
      }
      get names() {
        const v = q(super.names, this.from);
        return q(v, this.to);
      }
    }
    class i extends u {
      constructor(v, E, I, K) {
        super(), this.loop = v, this.varKind = E, this.name = I, this.iterable = K;
      }
      render(v) {
        return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(v);
      }
      optimizeNames(v, E) {
        if (super.optimizeNames(v, E))
          return this.iterable = U(this.iterable, v, E), this;
      }
      get names() {
        return j(super.names, this.iterable.names);
      }
    }
    class l extends S {
      constructor(v, E, I) {
        super(), this.name = v, this.args = E, this.async = I;
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
    class C extends S {
      render(v) {
        let E = "try" + super.render(v);
        return this.catch && (E += this.catch.render(v)), this.finally && (E += this.finally.render(v)), E;
      }
      optimizeNodes() {
        var v, E;
        return super.optimizeNodes(), (v = this.catch) === null || v === void 0 || v.optimizeNodes(), (E = this.finally) === null || E === void 0 || E.optimizeNodes(), this;
      }
      optimizeNames(v, E) {
        var I, K;
        return super.optimizeNames(v, E), (I = this.catch) === null || I === void 0 || I.optimizeNames(v, E), (K = this.finally) === null || K === void 0 || K.optimizeNames(v, E), this;
      }
      get names() {
        const v = super.names;
        return this.catch && j(v, this.catch.names), this.finally && j(v, this.finally.names), v;
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
    class N {
      constructor(v, E = {}) {
        this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ...E, _n: E.lines ? `
` : "" }, this._extScope = v, this._scope = new n.Scope({ parent: v }), this._nodes = [new k()];
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
      scopeValue(v, E) {
        const I = this._extScope.value(v, E);
        return (this._values[I.prefix] || (this._values[I.prefix] = /* @__PURE__ */ new Set())).add(I), I;
      }
      getScopeValue(v, E) {
        return this._extScope.getValue(v, E);
      }
      // return code that assigns values in the external scope to the names that are used internally
      // (same names that were returned by gen.scopeName or gen.scopeValue)
      scopeRefs(v) {
        return this._extScope.scopeRefs(v, this._values);
      }
      scopeCode() {
        return this._extScope.scopeCode(this._values);
      }
      _def(v, E, I, K) {
        const H = this._scope.toName(E);
        return I !== void 0 && K && (this._constants[H.str] = I), this._leafNode(new s(v, H, I)), H;
      }
      // `const` declaration (`var` in es5 mode)
      const(v, E, I) {
        return this._def(n.varKinds.const, v, E, I);
      }
      // `let` declaration with optional assignment (`var` in es5 mode)
      let(v, E, I) {
        return this._def(n.varKinds.let, v, E, I);
      }
      // `var` declaration with optional assignment
      var(v, E, I) {
        return this._def(n.varKinds.var, v, E, I);
      }
      // assignment code
      assign(v, E, I) {
        return this._leafNode(new a(v, E, I));
      }
      // `+=` code
      add(v, E) {
        return this._leafNode(new d(v, e.operators.ADD, E));
      }
      // appends passed SafeExpr to code or executes Block
      code(v) {
        return typeof v == "function" ? v() : v !== t.nil && this._leafNode(new $(v)), this;
      }
      // returns code for object literal for the passed argument list of key-value pairs
      object(...v) {
        const E = ["{"];
        for (const [I, K] of v)
          E.length > 1 && E.push(","), E.push(I), (I !== K || this.opts.es5) && (E.push(":"), (0, t.addCodeArg)(E, K));
        return E.push("}"), new t._Code(E);
      }
      // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
      if(v, E, I) {
        if (this._blockNode(new m(v)), E && I)
          this.code(E).else().code(I).endIf();
        else if (E)
          this.code(E).endIf();
        else if (I)
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
      _for(v, E) {
        return this._blockNode(v), E && this.code(E).endFor(), this;
      }
      // a generic `for` clause (or statement if `forBody` is passed)
      for(v, E) {
        return this._for(new g(v), E);
      }
      // `for` statement for a range of values
      forRange(v, E, I, K, H = this.opts.es5 ? n.varKinds.var : n.varKinds.let) {
        const ne = this._scope.toName(v);
        return this._for(new w(H, ne, E, I), () => K(ne));
      }
      // `for-of` statement (in es5 mode replace with a normal for loop)
      forOf(v, E, I, K = n.varKinds.const) {
        const H = this._scope.toName(v);
        if (this.opts.es5) {
          const ne = E instanceof t.Name ? E : this.var("_arr", E);
          return this.forRange("_i", 0, (0, t._)`${ne}.length`, (ee) => {
            this.var(H, (0, t._)`${ne}[${ee}]`), I(H);
          });
        }
        return this._for(new i("of", K, H, E), () => I(H));
      }
      // `for-in` statement.
      // With option `ownProperties` replaced with a `for-of` loop for object keys
      forIn(v, E, I, K = this.opts.es5 ? n.varKinds.var : n.varKinds.const) {
        if (this.opts.ownProperties)
          return this.forOf(v, (0, t._)`Object.keys(${E})`, I);
        const H = this._scope.toName(v);
        return this._for(new i("in", K, H, E), () => I(H));
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
        const E = new p();
        if (this._blockNode(E), this.code(v), E.nodes.length !== 1)
          throw new Error('CodeGen: "return" should have one node');
        return this._endBlockNode(p);
      }
      // `try` statement
      try(v, E, I) {
        if (!E && !I)
          throw new Error('CodeGen: "try" without "catch" and "finally"');
        const K = new C();
        if (this._blockNode(K), this.code(v), E) {
          const H = this.name("e");
          this._currNode = K.catch = new P(H), E(H);
        }
        return I && (this._currNode = K.finally = new A(), this.code(I)), this._endBlockNode(P, A);
      }
      // `throw` statement
      throw(v) {
        return this._leafNode(new _(v));
      }
      // start self-balancing block
      block(v, E) {
        return this._blockStarts.push(this._nodes.length), v && this.code(v).endBlock(E), this;
      }
      // end the current self-balancing block
      endBlock(v) {
        const E = this._blockStarts.pop();
        if (E === void 0)
          throw new Error("CodeGen: not in self-balancing block");
        const I = this._nodes.length - E;
        if (I < 0 || v !== void 0 && I !== v)
          throw new Error(`CodeGen: wrong number of nodes: ${I} vs ${v} expected`);
        return this._nodes.length = E, this;
      }
      // `function` heading (or definition if funcBody is passed)
      func(v, E = t.nil, I, K) {
        return this._blockNode(new l(v, E, I)), K && this.code(K).endFunc(), this;
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
      _endBlockNode(v, E) {
        const I = this._currNode;
        if (I instanceof v || E && I instanceof E)
          return this._nodes.pop(), this;
        throw new Error(`CodeGen: not in block "${E ? `${v.kind}/${E.kind}` : v.kind}"`);
      }
      _elseNode(v) {
        const E = this._currNode;
        if (!(E instanceof m))
          throw new Error('CodeGen: "else" without "if"');
        return this._currNode = E.else = v, this;
      }
      get _root() {
        return this._nodes[0];
      }
      get _currNode() {
        const v = this._nodes;
        return v[v.length - 1];
      }
      set _currNode(v) {
        const E = this._nodes;
        E[E.length - 1] = v;
      }
    }
    e.CodeGen = N;
    function j(T, v) {
      for (const E in v)
        T[E] = (T[E] || 0) + (v[E] || 0);
      return T;
    }
    function q(T, v) {
      return v instanceof t._CodeOrName ? j(T, v.names) : T;
    }
    function U(T, v, E) {
      if (T instanceof t.Name)
        return I(T);
      if (!K(T))
        return T;
      return new t._Code(T._items.reduce((H, ne) => (ne instanceof t.Name && (ne = I(ne)), ne instanceof t._Code ? H.push(...ne._items) : H.push(ne), H), []));
      function I(H) {
        const ne = E[H.str];
        return ne === void 0 || v[H.str] !== 1 ? H : (delete v[H.str], ne);
      }
      function K(H) {
        return H instanceof t._Code && H._items.some((ne) => ne instanceof t.Name && v[ne.str] === 1 && E[ne.str] !== void 0);
      }
    }
    function Q(T, v) {
      for (const E in v)
        T[E] = (T[E] || 0) - (v[E] || 0);
    }
    function te(T) {
      return typeof T == "boolean" || typeof T == "number" || T === null ? !T : (0, t._)`!${B(T)}`;
    }
    e.not = te;
    const me = M(e.operators.AND);
    function X(...T) {
      return T.reduce(me);
    }
    e.and = X;
    const ve = M(e.operators.OR);
    function F(...T) {
      return T.reduce(ve);
    }
    e.or = F;
    function M(T) {
      return (v, E) => v === t.nil ? E : E === t.nil ? v : (0, t._)`${B(v)} ${T} ${B(E)}`;
    }
    function B(T) {
      return T instanceof t.Name ? T : (0, t._)`(${T})`;
    }
  })(wn)), wn;
}
var W = {}, nr;
function Z() {
  if (nr) return W;
  nr = 1, Object.defineProperty(W, "__esModule", { value: !0 }), W.checkStrictMode = W.getErrorPath = W.Type = W.useFunc = W.setEvaluated = W.evaluatedPropsToName = W.mergeEvaluated = W.eachItem = W.unescapeJsonPointer = W.escapeJsonPointer = W.escapeFragment = W.unescapeFragment = W.schemaRefOrVal = W.schemaHasRulesButRef = W.schemaHasRules = W.checkUnknownRules = W.alwaysValidSchema = W.toHash = void 0;
  const e = /* @__PURE__ */ J(), t = /* @__PURE__ */ ln();
  function n(i) {
    const l = {};
    for (const p of i)
      l[p] = !0;
    return l;
  }
  W.toHash = n;
  function o(i, l) {
    return typeof l == "boolean" ? l : Object.keys(l).length === 0 ? !0 : (c(i, l), !r(l, i.self.RULES.all));
  }
  W.alwaysValidSchema = o;
  function c(i, l = i.schema) {
    const { opts: p, self: C } = i;
    if (!p.strictSchema || typeof l == "boolean")
      return;
    const P = C.RULES.keywords;
    for (const A in l)
      P[A] || w(i, `unknown keyword: "${A}"`);
  }
  W.checkUnknownRules = c;
  function r(i, l) {
    if (typeof i == "boolean")
      return !i;
    for (const p in i)
      if (l[p])
        return !0;
    return !1;
  }
  W.schemaHasRules = r;
  function s(i, l) {
    if (typeof i == "boolean")
      return !i;
    for (const p in i)
      if (p !== "$ref" && l.all[p])
        return !0;
    return !1;
  }
  W.schemaHasRulesButRef = s;
  function a({ topSchemaRef: i, schemaPath: l }, p, C, P) {
    if (!P) {
      if (typeof p == "number" || typeof p == "boolean")
        return p;
      if (typeof p == "string")
        return (0, e._)`${p}`;
    }
    return (0, e._)`${i}${l}${(0, e.getProperty)(C)}`;
  }
  W.schemaRefOrVal = a;
  function d(i) {
    return _(decodeURIComponent(i));
  }
  W.unescapeFragment = d;
  function y(i) {
    return encodeURIComponent(h(i));
  }
  W.escapeFragment = y;
  function h(i) {
    return typeof i == "number" ? `${i}` : i.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  W.escapeJsonPointer = h;
  function _(i) {
    return i.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  W.unescapeJsonPointer = _;
  function $(i, l) {
    if (Array.isArray(i))
      for (const p of i)
        l(p);
    else
      l(i);
  }
  W.eachItem = $;
  function b({ mergeNames: i, mergeToName: l, mergeValues: p, resultToName: C }) {
    return (P, A, N, j) => {
      const q = N === void 0 ? A : N instanceof e.Name ? (A instanceof e.Name ? i(P, A, N) : l(P, A, N), N) : A instanceof e.Name ? (l(P, N, A), A) : p(A, N);
      return j === e.Name && !(q instanceof e.Name) ? C(P, q) : q;
    };
  }
  W.mergeEvaluated = {
    props: b({
      mergeNames: (i, l, p) => i.if((0, e._)`${p} !== true && ${l} !== undefined`, () => {
        i.if((0, e._)`${l} === true`, () => i.assign(p, !0), () => i.assign(p, (0, e._)`${p} || {}`).code((0, e._)`Object.assign(${p}, ${l})`));
      }),
      mergeToName: (i, l, p) => i.if((0, e._)`${p} !== true`, () => {
        l === !0 ? i.assign(p, !0) : (i.assign(p, (0, e._)`${p} || {}`), k(i, p, l));
      }),
      mergeValues: (i, l) => i === !0 ? !0 : { ...i, ...l },
      resultToName: S
    }),
    items: b({
      mergeNames: (i, l, p) => i.if((0, e._)`${p} !== true && ${l} !== undefined`, () => i.assign(p, (0, e._)`${l} === true ? true : ${p} > ${l} ? ${p} : ${l}`)),
      mergeToName: (i, l, p) => i.if((0, e._)`${p} !== true`, () => i.assign(p, l === !0 ? !0 : (0, e._)`${p} > ${l} ? ${p} : ${l}`)),
      mergeValues: (i, l) => i === !0 ? !0 : Math.max(i, l),
      resultToName: (i, l) => i.var("items", l)
    })
  };
  function S(i, l) {
    if (l === !0)
      return i.var("props", !0);
    const p = i.var("props", (0, e._)`{}`);
    return l !== void 0 && k(i, p, l), p;
  }
  W.evaluatedPropsToName = S;
  function k(i, l, p) {
    Object.keys(p).forEach((C) => i.assign((0, e._)`${l}${(0, e.getProperty)(C)}`, !0));
  }
  W.setEvaluated = k;
  const f = {};
  function m(i, l) {
    return i.scopeValue("func", {
      ref: l,
      code: f[l.code] || (f[l.code] = new t._Code(l.code))
    });
  }
  W.useFunc = m;
  var u;
  (function(i) {
    i[i.Num = 0] = "Num", i[i.Str = 1] = "Str";
  })(u || (W.Type = u = {}));
  function g(i, l, p) {
    if (i instanceof e.Name) {
      const C = l === u.Num;
      return p ? C ? (0, e._)`"[" + ${i} + "]"` : (0, e._)`"['" + ${i} + "']"` : C ? (0, e._)`"/" + ${i}` : (0, e._)`"/" + ${i}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return p ? (0, e.getProperty)(i).toString() : "/" + h(i);
  }
  W.getErrorPath = g;
  function w(i, l, p = i.opts.strictSchema) {
    if (p) {
      if (l = `strict mode: ${l}`, p === !0)
        throw new Error(l);
      i.self.logger.warn(l);
    }
  }
  return W.checkStrictMode = w, W;
}
var dt = {}, rr;
function ke() {
  if (rr) return dt;
  rr = 1, Object.defineProperty(dt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ J(), t = {
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
  return dt.default = t, dt;
}
var or;
function fn() {
  return or || (or = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
    const t = /* @__PURE__ */ J(), n = /* @__PURE__ */ Z(), o = /* @__PURE__ */ ke();
    e.keywordError = {
      message: ({ keyword: f }) => (0, t.str)`must pass "${f}" keyword validation`
    }, e.keyword$DataError = {
      message: ({ keyword: f, schemaType: m }) => m ? (0, t.str)`"${f}" keyword must be ${m} ($data)` : (0, t.str)`"${f}" keyword is invalid ($data)`
    };
    function c(f, m = e.keywordError, u, g) {
      const { it: w } = f, { gen: i, compositeRule: l, allErrors: p } = w, C = _(f, m, u);
      g ?? (l || p) ? d(i, C) : y(w, (0, t._)`[${C}]`);
    }
    e.reportError = c;
    function r(f, m = e.keywordError, u) {
      const { it: g } = f, { gen: w, compositeRule: i, allErrors: l } = g, p = _(f, m, u);
      d(w, p), i || l || y(g, o.default.vErrors);
    }
    e.reportExtraError = r;
    function s(f, m) {
      f.assign(o.default.errors, m), f.if((0, t._)`${o.default.vErrors} !== null`, () => f.if(m, () => f.assign((0, t._)`${o.default.vErrors}.length`, m), () => f.assign(o.default.vErrors, null)));
    }
    e.resetErrorsCount = s;
    function a({ gen: f, keyword: m, schemaValue: u, data: g, errsCount: w, it: i }) {
      if (w === void 0)
        throw new Error("ajv implementation error");
      const l = f.name("err");
      f.forRange("i", w, o.default.errors, (p) => {
        f.const(l, (0, t._)`${o.default.vErrors}[${p}]`), f.if((0, t._)`${l}.instancePath === undefined`, () => f.assign((0, t._)`${l}.instancePath`, (0, t.strConcat)(o.default.instancePath, i.errorPath))), f.assign((0, t._)`${l}.schemaPath`, (0, t.str)`${i.errSchemaPath}/${m}`), i.opts.verbose && (f.assign((0, t._)`${l}.schema`, u), f.assign((0, t._)`${l}.data`, g));
      });
    }
    e.extendErrors = a;
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
      const { gen: g, it: w } = f, i = [
        b(w, u),
        S(f, u)
      ];
      return k(f, m, i), g.object(...i);
    }
    function b({ errorPath: f }, { instancePath: m }) {
      const u = m ? (0, t.str)`${f}${(0, n.getErrorPath)(m, n.Type.Str)}` : f;
      return [o.default.instancePath, (0, t.strConcat)(o.default.instancePath, u)];
    }
    function S({ keyword: f, it: { errSchemaPath: m } }, { schemaPath: u, parentSchema: g }) {
      let w = g ? m : (0, t.str)`${m}/${f}`;
      return u && (w = (0, t.str)`${w}${(0, n.getErrorPath)(u, n.Type.Str)}`), [h.schemaPath, w];
    }
    function k(f, { params: m, message: u }, g) {
      const { keyword: w, data: i, schemaValue: l, it: p } = f, { opts: C, propertyName: P, topSchemaRef: A, schemaPath: N } = p;
      g.push([h.keyword, w], [h.params, typeof m == "function" ? m(f) : m || (0, t._)`{}`]), C.messages && g.push([h.message, typeof u == "function" ? u(f) : u]), C.verbose && g.push([h.schema, l], [h.parentSchema, (0, t._)`${A}${N}`], [o.default.data, i]), P && g.push([h.propertyName, P]);
    }
  })(_n)), _n;
}
var ir;
function bi() {
  if (ir) return Oe;
  ir = 1, Object.defineProperty(Oe, "__esModule", { value: !0 }), Oe.boolOrEmptySchema = Oe.topBoolOrEmptySchema = void 0;
  const e = /* @__PURE__ */ fn(), t = /* @__PURE__ */ J(), n = /* @__PURE__ */ ke(), o = {
    message: "boolean schema is false"
  };
  function c(a) {
    const { gen: d, schema: y, validateName: h } = a;
    y === !1 ? s(a, !1) : typeof y == "object" && y.$async === !0 ? d.return(n.default.data) : (d.assign((0, t._)`${h}.errors`, null), d.return(!0));
  }
  Oe.topBoolOrEmptySchema = c;
  function r(a, d) {
    const { gen: y, schema: h } = a;
    h === !1 ? (y.var(d, !1), s(a)) : y.var(d, !0);
  }
  Oe.boolOrEmptySchema = r;
  function s(a, d) {
    const { gen: y, data: h } = a, _ = {
      gen: y,
      keyword: "false schema",
      data: h,
      schema: !1,
      schemaCode: !1,
      schemaValue: !1,
      params: {},
      it: a
    };
    (0, e.reportError)(_, o, void 0, d);
  }
  return Oe;
}
var le = {}, Te = {}, sr;
function Io() {
  if (sr) return Te;
  sr = 1, Object.defineProperty(Te, "__esModule", { value: !0 }), Te.getRules = Te.isJSONType = void 0;
  const e = ["string", "number", "integer", "boolean", "null", "object", "array"], t = new Set(e);
  function n(c) {
    return typeof c == "string" && t.has(c);
  }
  Te.isJSONType = n;
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
  return Te.getRules = o, Te;
}
var Re = {}, ar;
function Do() {
  if (ar) return Re;
  ar = 1, Object.defineProperty(Re, "__esModule", { value: !0 }), Re.shouldUseRule = Re.shouldUseGroup = Re.schemaHasRulesForType = void 0;
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
var cr;
function dn() {
  if (cr) return le;
  cr = 1, Object.defineProperty(le, "__esModule", { value: !0 }), le.reportTypeError = le.checkDataTypes = le.checkDataType = le.coerceAndCheckDataType = le.getJSONTypes = le.getSchemaTypes = le.DataType = void 0;
  const e = /* @__PURE__ */ Io(), t = /* @__PURE__ */ Do(), n = /* @__PURE__ */ fn(), o = /* @__PURE__ */ J(), c = /* @__PURE__ */ Z();
  var r;
  (function(u) {
    u[u.Correct = 0] = "Correct", u[u.Wrong = 1] = "Wrong";
  })(r || (le.DataType = r = {}));
  function s(u) {
    const g = a(u.type);
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
  le.getSchemaTypes = s;
  function a(u) {
    const g = Array.isArray(u) ? u : u ? [u] : [];
    if (g.every(e.isJSONType))
      return g;
    throw new Error("type must be JSONType or JSONType[]: " + g.join(","));
  }
  le.getJSONTypes = a;
  function d(u, g) {
    const { gen: w, data: i, opts: l } = u, p = h(g, l.coerceTypes), C = g.length > 0 && !(p.length === 0 && g.length === 1 && (0, t.schemaHasRulesForType)(u, g[0]));
    if (C) {
      const P = S(g, i, l.strictNumbers, r.Wrong);
      w.if(P, () => {
        p.length ? _(u, g, p) : f(u);
      });
    }
    return C;
  }
  le.coerceAndCheckDataType = d;
  const y = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
  function h(u, g) {
    return g ? u.filter((w) => y.has(w) || g === "array" && w === "array") : [];
  }
  function _(u, g, w) {
    const { gen: i, data: l, opts: p } = u, C = i.let("dataType", (0, o._)`typeof ${l}`), P = i.let("coerced", (0, o._)`undefined`);
    p.coerceTypes === "array" && i.if((0, o._)`${C} == 'object' && Array.isArray(${l}) && ${l}.length == 1`, () => i.assign(l, (0, o._)`${l}[0]`).assign(C, (0, o._)`typeof ${l}`).if(S(g, l, p.strictNumbers), () => i.assign(P, l))), i.if((0, o._)`${P} !== undefined`);
    for (const N of w)
      (y.has(N) || N === "array" && p.coerceTypes === "array") && A(N);
    i.else(), f(u), i.endIf(), i.if((0, o._)`${P} !== undefined`, () => {
      i.assign(l, P), $(u, P);
    });
    function A(N) {
      switch (N) {
        case "string":
          i.elseIf((0, o._)`${C} == "number" || ${C} == "boolean"`).assign(P, (0, o._)`"" + ${l}`).elseIf((0, o._)`${l} === null`).assign(P, (0, o._)`""`);
          return;
        case "number":
          i.elseIf((0, o._)`${C} == "boolean" || ${l} === null
              || (${C} == "string" && ${l} && ${l} == +${l})`).assign(P, (0, o._)`+${l}`);
          return;
        case "integer":
          i.elseIf((0, o._)`${C} === "boolean" || ${l} === null
              || (${C} === "string" && ${l} && ${l} == +${l} && !(${l} % 1))`).assign(P, (0, o._)`+${l}`);
          return;
        case "boolean":
          i.elseIf((0, o._)`${l} === "false" || ${l} === 0 || ${l} === null`).assign(P, !1).elseIf((0, o._)`${l} === "true" || ${l} === 1`).assign(P, !0);
          return;
        case "null":
          i.elseIf((0, o._)`${l} === "" || ${l} === 0 || ${l} === false`), i.assign(P, null);
          return;
        case "array":
          i.elseIf((0, o._)`${C} === "string" || ${C} === "number"
              || ${C} === "boolean" || ${l} === null`).assign(P, (0, o._)`[${l}]`);
      }
    }
  }
  function $({ gen: u, parentData: g, parentDataProperty: w }, i) {
    u.if((0, o._)`${g} !== undefined`, () => u.assign((0, o._)`${g}[${w}]`, i));
  }
  function b(u, g, w, i = r.Correct) {
    const l = i === r.Correct ? o.operators.EQ : o.operators.NEQ;
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
        p = C((0, o._)`!(${g} % 1) && !isNaN(${g})`);
        break;
      case "number":
        p = C();
        break;
      default:
        return (0, o._)`typeof ${g} ${l} ${u}`;
    }
    return i === r.Correct ? p : (0, o.not)(p);
    function C(P = o.nil) {
      return (0, o.and)((0, o._)`typeof ${g} == "number"`, P, w ? (0, o._)`isFinite(${g})` : o.nil);
    }
  }
  le.checkDataType = b;
  function S(u, g, w, i) {
    if (u.length === 1)
      return b(u[0], g, w, i);
    let l;
    const p = (0, c.toHash)(u);
    if (p.array && p.object) {
      const C = (0, o._)`typeof ${g} != "object"`;
      l = p.null ? C : (0, o._)`!${g} || ${C}`, delete p.null, delete p.array, delete p.object;
    } else
      l = o.nil;
    p.number && delete p.integer;
    for (const C in p)
      l = (0, o.and)(l, b(C, g, w, i));
    return l;
  }
  le.checkDataTypes = S;
  const k = {
    message: ({ schema: u }) => `must be ${u}`,
    params: ({ schema: u, schemaValue: g }) => typeof u == "string" ? (0, o._)`{type: ${u}}` : (0, o._)`{type: ${g}}`
  };
  function f(u) {
    const g = m(u);
    (0, n.reportError)(g, k);
  }
  le.reportTypeError = f;
  function m(u) {
    const { gen: g, data: w, schema: i } = u, l = (0, c.schemaRefOrVal)(u, i, "type");
    return {
      gen: g,
      keyword: "type",
      data: w,
      schema: i.type,
      schemaCode: l,
      schemaValue: l,
      parentSchema: i,
      params: {},
      it: u
    };
  }
  return le;
}
var tt = {}, lr;
function _i() {
  if (lr) return tt;
  lr = 1, Object.defineProperty(tt, "__esModule", { value: !0 }), tt.assignDefaults = void 0;
  const e = /* @__PURE__ */ J(), t = /* @__PURE__ */ Z();
  function n(c, r) {
    const { properties: s, items: a } = c.schema;
    if (r === "object" && s)
      for (const d in s)
        o(c, d, s[d].default);
    else r === "array" && Array.isArray(a) && a.forEach((d, y) => o(c, y, d.default));
  }
  tt.assignDefaults = n;
  function o(c, r, s) {
    const { gen: a, compositeRule: d, data: y, opts: h } = c;
    if (s === void 0)
      return;
    const _ = (0, e._)`${y}${(0, e.getProperty)(r)}`;
    if (d) {
      (0, t.checkStrictMode)(c, `default is ignored for: ${_}`);
      return;
    }
    let $ = (0, e._)`${_} === undefined`;
    h.useDefaults === "empty" && ($ = (0, e._)`${$} || ${_} === null || ${_} === ""`), a.if($, (0, e._)`${_} = ${(0, e.stringify)(s)}`);
  }
  return tt;
}
var be = {}, re = {}, dr;
function Ce() {
  if (dr) return re;
  dr = 1, Object.defineProperty(re, "__esModule", { value: !0 }), re.validateUnion = re.validateArray = re.usePattern = re.callValidateCode = re.schemaProperties = re.allSchemaProperties = re.noPropertyInData = re.propertyInData = re.isOwnProperty = re.hasPropFunc = re.reportMissingProp = re.checkMissingProp = re.checkReportMissingProp = void 0;
  const e = /* @__PURE__ */ J(), t = /* @__PURE__ */ Z(), n = /* @__PURE__ */ ke(), o = /* @__PURE__ */ Z();
  function c(u, g) {
    const { gen: w, data: i, it: l } = u;
    w.if(h(w, i, g, l.opts.ownProperties), () => {
      u.setParams({ missingProperty: (0, e._)`${g}` }, !0), u.error();
    });
  }
  re.checkReportMissingProp = c;
  function r({ gen: u, data: g, it: { opts: w } }, i, l) {
    return (0, e.or)(...i.map((p) => (0, e.and)(h(u, g, p, w.ownProperties), (0, e._)`${l} = ${p}`)));
  }
  re.checkMissingProp = r;
  function s(u, g) {
    u.setParams({ missingProperty: g }, !0), u.error();
  }
  re.reportMissingProp = s;
  function a(u) {
    return u.scopeValue("func", {
      // eslint-disable-next-line @typescript-eslint/unbound-method
      ref: Object.prototype.hasOwnProperty,
      code: (0, e._)`Object.prototype.hasOwnProperty`
    });
  }
  re.hasPropFunc = a;
  function d(u, g, w) {
    return (0, e._)`${a(u)}.call(${g}, ${w})`;
  }
  re.isOwnProperty = d;
  function y(u, g, w, i) {
    const l = (0, e._)`${g}${(0, e.getProperty)(w)} !== undefined`;
    return i ? (0, e._)`${l} && ${d(u, g, w)}` : l;
  }
  re.propertyInData = y;
  function h(u, g, w, i) {
    const l = (0, e._)`${g}${(0, e.getProperty)(w)} === undefined`;
    return i ? (0, e.or)(l, (0, e.not)(d(u, g, w))) : l;
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
  function b({ schemaCode: u, data: g, it: { gen: w, topSchemaRef: i, schemaPath: l, errorPath: p }, it: C }, P, A, N) {
    const j = N ? (0, e._)`${u}, ${g}, ${i}${l}` : g, q = [
      [n.default.instancePath, (0, e.strConcat)(n.default.instancePath, p)],
      [n.default.parentData, C.parentData],
      [n.default.parentDataProperty, C.parentDataProperty],
      [n.default.rootData, n.default.rootData]
    ];
    C.opts.dynamicRef && q.push([n.default.dynamicAnchors, n.default.dynamicAnchors]);
    const U = (0, e._)`${j}, ${w.object(...q)}`;
    return A !== e.nil ? (0, e._)`${P}.call(${A}, ${U})` : (0, e._)`${P}(${U})`;
  }
  re.callValidateCode = b;
  const S = (0, e._)`new RegExp`;
  function k({ gen: u, it: { opts: g } }, w) {
    const i = g.unicodeRegExp ? "u" : "", { regExp: l } = g.code, p = l(w, i);
    return u.scopeValue("pattern", {
      key: p.toString(),
      ref: p,
      code: (0, e._)`${l.code === "new RegExp" ? S : (0, o.useFunc)(u, l)}(${w}, ${i})`
    });
  }
  re.usePattern = k;
  function f(u) {
    const { gen: g, data: w, keyword: i, it: l } = u, p = g.name("valid");
    if (l.allErrors) {
      const P = g.let("valid", !0);
      return C(() => g.assign(P, !1)), P;
    }
    return g.var(p, !0), C(() => g.break()), p;
    function C(P) {
      const A = g.const("len", (0, e._)`${w}.length`);
      g.forRange("i", 0, A, (N) => {
        u.subschema({
          keyword: i,
          dataProp: N,
          dataPropType: t.Type.Num
        }, p), g.if((0, e.not)(p), P);
      });
    }
  }
  re.validateArray = f;
  function m(u) {
    const { gen: g, schema: w, keyword: i, it: l } = u;
    if (!Array.isArray(w))
      throw new Error("ajv implementation error");
    if (w.some((A) => (0, t.alwaysValidSchema)(l, A)) && !l.opts.unevaluated)
      return;
    const C = g.let("valid", !1), P = g.name("_valid");
    g.block(() => w.forEach((A, N) => {
      const j = u.subschema({
        keyword: i,
        schemaProp: N,
        compositeRule: !0
      }, P);
      g.assign(C, (0, e._)`${C} || ${P}`), u.mergeValidEvaluated(j, P) || g.if((0, e.not)(C));
    })), u.result(C, () => u.reset(), () => u.error(!0));
  }
  return re.validateUnion = m, re;
}
var ur;
function wi() {
  if (ur) return be;
  ur = 1, Object.defineProperty(be, "__esModule", { value: !0 }), be.validateKeywordUsage = be.validSchemaType = be.funcKeywordCode = be.macroKeywordCode = void 0;
  const e = /* @__PURE__ */ J(), t = /* @__PURE__ */ ke(), n = /* @__PURE__ */ Ce(), o = /* @__PURE__ */ fn();
  function c($, b) {
    const { gen: S, keyword: k, schema: f, parentSchema: m, it: u } = $, g = b.macro.call(u.self, f, m, u), w = y(S, k, g);
    u.opts.validateSchema !== !1 && u.self.validateSchema(g, !0);
    const i = S.name("valid");
    $.subschema({
      schema: g,
      schemaPath: e.nil,
      errSchemaPath: `${u.errSchemaPath}/${k}`,
      topSchemaRef: w,
      compositeRule: !0
    }, i), $.pass(i, () => $.error(!0));
  }
  be.macroKeywordCode = c;
  function r($, b) {
    var S;
    const { gen: k, keyword: f, schema: m, parentSchema: u, $data: g, it: w } = $;
    d(w, b);
    const i = !g && b.compile ? b.compile.call(w.self, m, u, w) : b.validate, l = y(k, f, i), p = k.let("valid");
    $.block$data(p, C), $.ok((S = b.valid) !== null && S !== void 0 ? S : p);
    function C() {
      if (b.errors === !1)
        N(), b.modifying && s($), j(() => $.error());
      else {
        const q = b.async ? P() : A();
        b.modifying && s($), j(() => a($, q));
      }
    }
    function P() {
      const q = k.let("ruleErrs", null);
      return k.try(() => N((0, e._)`await `), (U) => k.assign(p, !1).if((0, e._)`${U} instanceof ${w.ValidationError}`, () => k.assign(q, (0, e._)`${U}.errors`), () => k.throw(U))), q;
    }
    function A() {
      const q = (0, e._)`${l}.errors`;
      return k.assign(q, null), N(e.nil), q;
    }
    function N(q = b.async ? (0, e._)`await ` : e.nil) {
      const U = w.opts.passContext ? t.default.this : t.default.self, Q = !("compile" in b && !g || b.schema === !1);
      k.assign(p, (0, e._)`${q}${(0, n.callValidateCode)($, l, U, Q)}`, b.modifying);
    }
    function j(q) {
      var U;
      k.if((0, e.not)((U = b.valid) !== null && U !== void 0 ? U : p), q);
    }
  }
  be.funcKeywordCode = r;
  function s($) {
    const { gen: b, data: S, it: k } = $;
    b.if(k.parentData, () => b.assign(S, (0, e._)`${k.parentData}[${k.parentDataProperty}]`));
  }
  function a($, b) {
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
    return !b.length || b.some((k) => k === "array" ? Array.isArray($) : k === "object" ? $ && typeof $ == "object" && !Array.isArray($) : typeof $ == k || S && typeof $ > "u");
  }
  be.validSchemaType = h;
  function _({ schema: $, opts: b, self: S, errSchemaPath: k }, f, m) {
    if (Array.isArray(f.keyword) ? !f.keyword.includes(m) : f.keyword !== m)
      throw new Error("ajv implementation error");
    const u = f.dependencies;
    if (u?.some((g) => !Object.prototype.hasOwnProperty.call($, g)))
      throw new Error(`parent schema must have dependencies of ${m}: ${u.join(",")}`);
    if (f.validateSchema && !f.validateSchema($[m])) {
      const w = `keyword "${m}" value is invalid at path "${k}": ` + S.errorsText(f.validateSchema.errors);
      if (b.validateSchema === "log")
        S.logger.error(w);
      else
        throw new Error(w);
    }
  }
  return be.validateKeywordUsage = _, be;
}
var Ae = {}, fr;
function Si() {
  if (fr) return Ae;
  fr = 1, Object.defineProperty(Ae, "__esModule", { value: !0 }), Ae.extendSubschemaMode = Ae.extendSubschemaData = Ae.getSubschema = void 0;
  const e = /* @__PURE__ */ J(), t = /* @__PURE__ */ Z();
  function n(r, { keyword: s, schemaProp: a, schema: d, schemaPath: y, errSchemaPath: h, topSchemaRef: _ }) {
    if (s !== void 0 && d !== void 0)
      throw new Error('both "keyword" and "schema" passed, only one allowed');
    if (s !== void 0) {
      const $ = r.schema[s];
      return a === void 0 ? {
        schema: $,
        schemaPath: (0, e._)`${r.schemaPath}${(0, e.getProperty)(s)}`,
        errSchemaPath: `${r.errSchemaPath}/${s}`
      } : {
        schema: $[a],
        schemaPath: (0, e._)`${r.schemaPath}${(0, e.getProperty)(s)}${(0, e.getProperty)(a)}`,
        errSchemaPath: `${r.errSchemaPath}/${s}/${(0, t.escapeFragment)(a)}`
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
  function o(r, s, { dataProp: a, dataPropType: d, data: y, dataTypes: h, propertyName: _ }) {
    if (y !== void 0 && a !== void 0)
      throw new Error('both "data" and "dataProp" passed, only one allowed');
    const { gen: $ } = s;
    if (a !== void 0) {
      const { errorPath: S, dataPathArr: k, opts: f } = s, m = $.let("data", (0, e._)`${s.data}${(0, e.getProperty)(a)}`, !0);
      b(m), r.errorPath = (0, e.str)`${S}${(0, t.getErrorPath)(a, d, f.jsPropertySyntax)}`, r.parentDataProperty = (0, e._)`${a}`, r.dataPathArr = [...k, r.parentDataProperty];
    }
    if (y !== void 0) {
      const S = y instanceof e.Name ? y : $.let("data", y, !0);
      b(S), _ !== void 0 && (r.propertyName = _);
    }
    h && (r.dataTypes = h);
    function b(S) {
      r.data = S, r.dataLevel = s.dataLevel + 1, r.dataTypes = [], s.definedProperties = /* @__PURE__ */ new Set(), r.parentData = s.data, r.dataNames = [...s.dataNames, S];
    }
  }
  Ae.extendSubschemaData = o;
  function c(r, { jtdDiscriminator: s, jtdMetadata: a, compositeRule: d, createErrors: y, allErrors: h }) {
    d !== void 0 && (r.compositeRule = d), y !== void 0 && (r.createErrors = y), h !== void 0 && (r.allErrors = h), r.jtdDiscriminator = s, r.jtdMetadata = a;
  }
  return Ae.extendSubschemaMode = c, Ae;
}
var de = {}, Cn, pr;
function qo() {
  return pr || (pr = 1, Cn = function e(t, n) {
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
  }), Cn;
}
var En = { exports: {} }, hr;
function ki() {
  if (hr) return En.exports;
  hr = 1;
  var e = En.exports = function(o, c, r) {
    typeof c == "function" && (r = c, c = {}), r = c.cb || r;
    var s = typeof r == "function" ? r : r.pre || function() {
    }, a = r.post || function() {
    };
    t(c, s, a, o, "", o);
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
  function t(o, c, r, s, a, d, y, h, _, $) {
    if (s && typeof s == "object" && !Array.isArray(s)) {
      c(s, a, d, y, h, _, $);
      for (var b in s) {
        var S = s[b];
        if (Array.isArray(S)) {
          if (b in e.arrayKeywords)
            for (var k = 0; k < S.length; k++)
              t(o, c, r, S[k], a + "/" + b + "/" + k, d, a, b, s, k);
        } else if (b in e.propsKeywords) {
          if (S && typeof S == "object")
            for (var f in S)
              t(o, c, r, S[f], a + "/" + b + "/" + n(f), d, a, b, s, f);
        } else (b in e.keywords || o.allKeys && !(b in e.skipKeywords)) && t(o, c, r, S, a + "/" + b, d, a, b, s);
      }
      r(s, a, d, y, h, _, $);
    }
  }
  function n(o) {
    return o.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  return En.exports;
}
var mr;
function pn() {
  if (mr) return de;
  mr = 1, Object.defineProperty(de, "__esModule", { value: !0 }), de.getSchemaRefs = de.resolveUrl = de.normalizeId = de._getFullPath = de.getFullPath = de.inlineRef = void 0;
  const e = /* @__PURE__ */ Z(), t = qo(), n = ki(), o = /* @__PURE__ */ new Set([
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
  function c(k, f = !0) {
    return typeof k == "boolean" ? !0 : f === !0 ? !s(k) : f ? a(k) <= f : !1;
  }
  de.inlineRef = c;
  const r = /* @__PURE__ */ new Set([
    "$ref",
    "$recursiveRef",
    "$recursiveAnchor",
    "$dynamicRef",
    "$dynamicAnchor"
  ]);
  function s(k) {
    for (const f in k) {
      if (r.has(f))
        return !0;
      const m = k[f];
      if (Array.isArray(m) && m.some(s) || typeof m == "object" && s(m))
        return !0;
    }
    return !1;
  }
  function a(k) {
    let f = 0;
    for (const m in k) {
      if (m === "$ref")
        return 1 / 0;
      if (f++, !o.has(m) && (typeof k[m] == "object" && (0, e.eachItem)(k[m], (u) => f += a(u)), f === 1 / 0))
        return 1 / 0;
    }
    return f;
  }
  function d(k, f = "", m) {
    m !== !1 && (f = _(f));
    const u = k.parse(f);
    return y(k, u);
  }
  de.getFullPath = d;
  function y(k, f) {
    return k.serialize(f).split("#")[0] + "#";
  }
  de._getFullPath = y;
  const h = /#\/?$/;
  function _(k) {
    return k ? k.replace(h, "") : "";
  }
  de.normalizeId = _;
  function $(k, f, m) {
    return m = _(m), k.resolve(f, m);
  }
  de.resolveUrl = $;
  const b = /^[a-z_][-a-z0-9._]*$/i;
  function S(k, f) {
    if (typeof k == "boolean")
      return {};
    const { schemaId: m, uriResolver: u } = this.opts, g = _(k[m] || f), w = { "": g }, i = d(u, g, !1), l = {}, p = /* @__PURE__ */ new Set();
    return n(k, { allKeys: !0 }, (A, N, j, q) => {
      if (q === void 0)
        return;
      const U = i + N;
      let Q = w[q];
      typeof A[m] == "string" && (Q = te.call(this, A[m])), me.call(this, A.$anchor), me.call(this, A.$dynamicAnchor), w[N] = Q;
      function te(X) {
        const ve = this.opts.uriResolver.resolve;
        if (X = _(Q ? ve(Q, X) : X), p.has(X))
          throw P(X);
        p.add(X);
        let F = this.refs[X];
        return typeof F == "string" && (F = this.refs[F]), typeof F == "object" ? C(A, F.schema, X) : X !== _(U) && (X[0] === "#" ? (C(A, l[X], X), l[X] = A) : this.refs[X] = U), X;
      }
      function me(X) {
        if (typeof X == "string") {
          if (!b.test(X))
            throw new Error(`invalid anchor "${X}"`);
          te.call(this, `#${X}`);
        }
      }
    }), l;
    function C(A, N, j) {
      if (N !== void 0 && !t(A, N))
        throw P(j);
    }
    function P(A) {
      return new Error(`reference "${A}" resolves to more than one schema`);
    }
  }
  return de.getSchemaRefs = S, de;
}
var gr;
function hn() {
  if (gr) return xe;
  gr = 1, Object.defineProperty(xe, "__esModule", { value: !0 }), xe.getData = xe.KeywordCxt = xe.validateFunctionCode = void 0;
  const e = /* @__PURE__ */ bi(), t = /* @__PURE__ */ dn(), n = /* @__PURE__ */ Do(), o = /* @__PURE__ */ dn(), c = /* @__PURE__ */ _i(), r = /* @__PURE__ */ wi(), s = /* @__PURE__ */ Si(), a = /* @__PURE__ */ J(), d = /* @__PURE__ */ ke(), y = /* @__PURE__ */ pn(), h = /* @__PURE__ */ Z(), _ = /* @__PURE__ */ fn();
  function $(R) {
    if (i(R) && (p(R), w(R))) {
      f(R);
      return;
    }
    b(R, () => (0, e.topBoolOrEmptySchema)(R));
  }
  xe.validateFunctionCode = $;
  function b({ gen: R, validateName: O, schema: V, schemaEnv: L, opts: G }, Y) {
    G.code.es5 ? R.func(O, (0, a._)`${d.default.data}, ${d.default.valCxt}`, L.$async, () => {
      R.code((0, a._)`"use strict"; ${u(V, G)}`), k(R, G), R.code(Y);
    }) : R.func(O, (0, a._)`${d.default.data}, ${S(G)}`, L.$async, () => R.code(u(V, G)).code(Y));
  }
  function S(R) {
    return (0, a._)`{${d.default.instancePath}="", ${d.default.parentData}, ${d.default.parentDataProperty}, ${d.default.rootData}=${d.default.data}${R.dynamicRef ? (0, a._)`, ${d.default.dynamicAnchors}={}` : a.nil}}={}`;
  }
  function k(R, O) {
    R.if(d.default.valCxt, () => {
      R.var(d.default.instancePath, (0, a._)`${d.default.valCxt}.${d.default.instancePath}`), R.var(d.default.parentData, (0, a._)`${d.default.valCxt}.${d.default.parentData}`), R.var(d.default.parentDataProperty, (0, a._)`${d.default.valCxt}.${d.default.parentDataProperty}`), R.var(d.default.rootData, (0, a._)`${d.default.valCxt}.${d.default.rootData}`), O.dynamicRef && R.var(d.default.dynamicAnchors, (0, a._)`${d.default.valCxt}.${d.default.dynamicAnchors}`);
    }, () => {
      R.var(d.default.instancePath, (0, a._)`""`), R.var(d.default.parentData, (0, a._)`undefined`), R.var(d.default.parentDataProperty, (0, a._)`undefined`), R.var(d.default.rootData, d.default.data), O.dynamicRef && R.var(d.default.dynamicAnchors, (0, a._)`{}`);
    });
  }
  function f(R) {
    const { schema: O, opts: V, gen: L } = R;
    b(R, () => {
      V.$comment && O.$comment && q(R), A(R), L.let(d.default.vErrors, null), L.let(d.default.errors, 0), V.unevaluated && m(R), C(R), U(R);
    });
  }
  function m(R) {
    const { gen: O, validateName: V } = R;
    R.evaluated = O.const("evaluated", (0, a._)`${V}.evaluated`), O.if((0, a._)`${R.evaluated}.dynamicProps`, () => O.assign((0, a._)`${R.evaluated}.props`, (0, a._)`undefined`)), O.if((0, a._)`${R.evaluated}.dynamicItems`, () => O.assign((0, a._)`${R.evaluated}.items`, (0, a._)`undefined`));
  }
  function u(R, O) {
    const V = typeof R == "object" && R[O.schemaId];
    return V && (O.code.source || O.code.process) ? (0, a._)`/*# sourceURL=${V} */` : a.nil;
  }
  function g(R, O) {
    if (i(R) && (p(R), w(R))) {
      l(R, O);
      return;
    }
    (0, e.boolOrEmptySchema)(R, O);
  }
  function w({ schema: R, self: O }) {
    if (typeof R == "boolean")
      return !R;
    for (const V in R)
      if (O.RULES.all[V])
        return !0;
    return !1;
  }
  function i(R) {
    return typeof R.schema != "boolean";
  }
  function l(R, O) {
    const { schema: V, gen: L, opts: G } = R;
    G.$comment && V.$comment && q(R), N(R), j(R);
    const Y = L.const("_errs", d.default.errors);
    C(R, Y), L.var(O, (0, a._)`${Y} === ${d.default.errors}`);
  }
  function p(R) {
    (0, h.checkUnknownRules)(R), P(R);
  }
  function C(R, O) {
    if (R.opts.jtd)
      return te(R, [], !1, O);
    const V = (0, t.getSchemaTypes)(R.schema), L = (0, t.coerceAndCheckDataType)(R, V);
    te(R, V, !L, O);
  }
  function P(R) {
    const { schema: O, errSchemaPath: V, opts: L, self: G } = R;
    O.$ref && L.ignoreKeywordsWithRef && (0, h.schemaHasRulesButRef)(O, G.RULES) && G.logger.warn(`$ref: keywords ignored in schema at path "${V}"`);
  }
  function A(R) {
    const { schema: O, opts: V } = R;
    O.default !== void 0 && V.useDefaults && V.strictSchema && (0, h.checkStrictMode)(R, "default is ignored in the schema root");
  }
  function N(R) {
    const O = R.schema[R.opts.schemaId];
    O && (R.baseId = (0, y.resolveUrl)(R.opts.uriResolver, R.baseId, O));
  }
  function j(R) {
    if (R.schema.$async && !R.schemaEnv.$async)
      throw new Error("async schema in sync schema");
  }
  function q({ gen: R, schemaEnv: O, schema: V, errSchemaPath: L, opts: G }) {
    const Y = V.$comment;
    if (G.$comment === !0)
      R.code((0, a._)`${d.default.self}.logger.log(${Y})`);
    else if (typeof G.$comment == "function") {
      const ae = (0, a.str)`${L}/$comment`, $e = R.scopeValue("root", { ref: O.root });
      R.code((0, a._)`${d.default.self}.opts.$comment(${Y}, ${ae}, ${$e}.schema)`);
    }
  }
  function U(R) {
    const { gen: O, schemaEnv: V, validateName: L, ValidationError: G, opts: Y } = R;
    V.$async ? O.if((0, a._)`${d.default.errors} === 0`, () => O.return(d.default.data), () => O.throw((0, a._)`new ${G}(${d.default.vErrors})`)) : (O.assign((0, a._)`${L}.errors`, d.default.vErrors), Y.unevaluated && Q(R), O.return((0, a._)`${d.default.errors} === 0`));
  }
  function Q({ gen: R, evaluated: O, props: V, items: L }) {
    V instanceof a.Name && R.assign((0, a._)`${O}.props`, V), L instanceof a.Name && R.assign((0, a._)`${O}.items`, L);
  }
  function te(R, O, V, L) {
    const { gen: G, schema: Y, data: ae, allErrors: $e, opts: ue, self: fe } = R, { RULES: ce } = fe;
    if (Y.$ref && (ue.ignoreKeywordsWithRef || !(0, h.schemaHasRulesButRef)(Y, ce))) {
      G.block(() => K(R, "$ref", ce.all.$ref.definition));
      return;
    }
    ue.jtd || X(R, O), G.block(() => {
      for (const ge of ce.rules)
        Be(ge);
      Be(ce.post);
    });
    function Be(ge) {
      (0, n.shouldUseGroup)(Y, ge) && (ge.type ? (G.if((0, o.checkDataType)(ge.type, ae, ue.strictNumbers)), me(R, ge), O.length === 1 && O[0] === ge.type && V && (G.else(), (0, o.reportTypeError)(R)), G.endIf()) : me(R, ge), $e || G.if((0, a._)`${d.default.errors} === ${L || 0}`));
    }
  }
  function me(R, O) {
    const { gen: V, schema: L, opts: { useDefaults: G } } = R;
    G && (0, c.assignDefaults)(R, O.type), V.block(() => {
      for (const Y of O.rules)
        (0, n.shouldUseRule)(L, Y) && K(R, Y.keyword, Y.definition, O.type);
    });
  }
  function X(R, O) {
    R.schemaEnv.meta || !R.opts.strictTypes || (ve(R, O), R.opts.allowUnionTypes || F(R, O), M(R, R.dataTypes));
  }
  function ve(R, O) {
    if (O.length) {
      if (!R.dataTypes.length) {
        R.dataTypes = O;
        return;
      }
      O.forEach((V) => {
        T(R.dataTypes, V) || E(R, `type "${V}" not allowed by context "${R.dataTypes.join(",")}"`);
      }), v(R, O);
    }
  }
  function F(R, O) {
    O.length > 1 && !(O.length === 2 && O.includes("null")) && E(R, "use allowUnionTypes to allow union type keyword");
  }
  function M(R, O) {
    const V = R.self.RULES.all;
    for (const L in V) {
      const G = V[L];
      if (typeof G == "object" && (0, n.shouldUseRule)(R.schema, G)) {
        const { type: Y } = G.definition;
        Y.length && !Y.some((ae) => B(O, ae)) && E(R, `missing type "${Y.join(",")}" for keyword "${L}"`);
      }
    }
  }
  function B(R, O) {
    return R.includes(O) || O === "number" && R.includes("integer");
  }
  function T(R, O) {
    return R.includes(O) || O === "integer" && R.includes("number");
  }
  function v(R, O) {
    const V = [];
    for (const L of R.dataTypes)
      T(O, L) ? V.push(L) : O.includes("integer") && L === "number" && V.push("integer");
    R.dataTypes = V;
  }
  function E(R, O) {
    const V = R.schemaEnv.baseId + R.errSchemaPath;
    O += ` at "${V}" (strictTypes)`, (0, h.checkStrictMode)(R, O, R.opts.strictTypes);
  }
  class I {
    constructor(O, V, L) {
      if ((0, r.validateKeywordUsage)(O, V, L), this.gen = O.gen, this.allErrors = O.allErrors, this.keyword = L, this.data = O.data, this.schema = O.schema[L], this.$data = V.$data && O.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, h.schemaRefOrVal)(O, this.schema, L, this.$data), this.schemaType = V.schemaType, this.parentSchema = O.schema, this.params = {}, this.it = O, this.def = V, this.$data)
        this.schemaCode = O.gen.const("vSchema", ee(this.$data, O));
      else if (this.schemaCode = this.schemaValue, !(0, r.validSchemaType)(this.schema, V.schemaType, V.allowUndefined))
        throw new Error(`${L} value must be ${JSON.stringify(V.schemaType)}`);
      ("code" in V ? V.trackErrors : V.errors !== !1) && (this.errsCount = O.gen.const("_errs", d.default.errors));
    }
    result(O, V, L) {
      this.failResult((0, a.not)(O), V, L);
    }
    failResult(O, V, L) {
      this.gen.if(O), L ? L() : this.error(), V ? (this.gen.else(), V(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    pass(O, V) {
      this.failResult((0, a.not)(O), void 0, V);
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
      const { schemaCode: V } = this;
      this.fail((0, a._)`${V} !== undefined && (${(0, a.or)(this.invalid$data(), O)})`);
    }
    error(O, V, L) {
      if (V) {
        this.setParams(V), this._error(O, L), this.setParams({});
        return;
      }
      this._error(O, L);
    }
    _error(O, V) {
      (O ? _.reportExtraError : _.reportError)(this, this.def.error, V);
    }
    $dataError() {
      (0, _.reportError)(this, this.def.$dataError || _.keyword$DataError);
    }
    reset() {
      if (this.errsCount === void 0)
        throw new Error('add "trackErrors" to keyword definition');
      (0, _.resetErrorsCount)(this.gen, this.errsCount);
    }
    ok(O) {
      this.allErrors || this.gen.if(O);
    }
    setParams(O, V) {
      V ? Object.assign(this.params, O) : this.params = O;
    }
    block$data(O, V, L = a.nil) {
      this.gen.block(() => {
        this.check$data(O, L), V();
      });
    }
    check$data(O = a.nil, V = a.nil) {
      if (!this.$data)
        return;
      const { gen: L, schemaCode: G, schemaType: Y, def: ae } = this;
      L.if((0, a.or)((0, a._)`${G} === undefined`, V)), O !== a.nil && L.assign(O, !0), (Y.length || ae.validateSchema) && (L.elseIf(this.invalid$data()), this.$dataError(), O !== a.nil && L.assign(O, !1)), L.else();
    }
    invalid$data() {
      const { gen: O, schemaCode: V, schemaType: L, def: G, it: Y } = this;
      return (0, a.or)(ae(), $e());
      function ae() {
        if (L.length) {
          if (!(V instanceof a.Name))
            throw new Error("ajv implementation error");
          const ue = Array.isArray(L) ? L : [L];
          return (0, a._)`${(0, o.checkDataTypes)(ue, V, Y.opts.strictNumbers, o.DataType.Wrong)}`;
        }
        return a.nil;
      }
      function $e() {
        if (G.validateSchema) {
          const ue = O.scopeValue("validate$data", { ref: G.validateSchema });
          return (0, a._)`!${ue}(${V})`;
        }
        return a.nil;
      }
    }
    subschema(O, V) {
      const L = (0, s.getSubschema)(this.it, O);
      (0, s.extendSubschemaData)(L, this.it, O), (0, s.extendSubschemaMode)(L, O);
      const G = { ...this.it, ...L, items: void 0, props: void 0 };
      return g(G, V), G;
    }
    mergeEvaluated(O, V) {
      const { it: L, gen: G } = this;
      L.opts.unevaluated && (L.props !== !0 && O.props !== void 0 && (L.props = h.mergeEvaluated.props(G, O.props, L.props, V)), L.items !== !0 && O.items !== void 0 && (L.items = h.mergeEvaluated.items(G, O.items, L.items, V)));
    }
    mergeValidEvaluated(O, V) {
      const { it: L, gen: G } = this;
      if (L.opts.unevaluated && (L.props !== !0 || L.items !== !0))
        return G.if(V, () => this.mergeEvaluated(O, a.Name)), !0;
    }
  }
  xe.KeywordCxt = I;
  function K(R, O, V, L) {
    const G = new I(R, V, O);
    "code" in V ? V.code(G, L) : G.$data && V.validate ? (0, r.funcKeywordCode)(G, V) : "macro" in V ? (0, r.macroKeywordCode)(G, V) : (V.compile || V.validate) && (0, r.funcKeywordCode)(G, V);
  }
  const H = /^\/(?:[^~]|~0|~1)*$/, ne = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function ee(R, { dataLevel: O, dataNames: V, dataPathArr: L }) {
    let G, Y;
    if (R === "")
      return d.default.rootData;
    if (R[0] === "/") {
      if (!H.test(R))
        throw new Error(`Invalid JSON-pointer: ${R}`);
      G = R, Y = d.default.rootData;
    } else {
      const fe = ne.exec(R);
      if (!fe)
        throw new Error(`Invalid JSON-pointer: ${R}`);
      const ce = +fe[1];
      if (G = fe[2], G === "#") {
        if (ce >= O)
          throw new Error(ue("property/index", ce));
        return L[O - ce];
      }
      if (ce > O)
        throw new Error(ue("data", ce));
      if (Y = V[O - ce], !G)
        return Y;
    }
    let ae = Y;
    const $e = G.split("/");
    for (const fe of $e)
      fe && (Y = (0, a._)`${Y}${(0, a.getProperty)((0, h.unescapeJsonPointer)(fe))}`, ae = (0, a._)`${ae} && ${Y}`);
    return ae;
    function ue(fe, ce) {
      return `Cannot access ${fe} ${ce} levels up, current level is ${O}`;
    }
  }
  return xe.getData = ee, xe;
}
var ut = {}, yr;
function zn() {
  if (yr) return ut;
  yr = 1, Object.defineProperty(ut, "__esModule", { value: !0 });
  class e extends Error {
    constructor(n) {
      super("validation failed"), this.errors = n, this.ajv = this.validation = !0;
    }
  }
  return ut.default = e, ut;
}
var ft = {}, vr;
function mn() {
  if (vr) return ft;
  vr = 1, Object.defineProperty(ft, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ pn();
  class t extends Error {
    constructor(o, c, r, s) {
      super(s || `can't resolve reference ${r} from id ${c}`), this.missingRef = (0, e.resolveUrl)(o, c, r), this.missingSchema = (0, e.normalizeId)((0, e.getFullPath)(o, this.missingRef));
    }
  }
  return ft.default = t, ft;
}
var pe = {}, $r;
function gn() {
  if ($r) return pe;
  $r = 1, Object.defineProperty(pe, "__esModule", { value: !0 }), pe.resolveSchema = pe.getCompilingSchema = pe.resolveRef = pe.compileSchema = pe.SchemaEnv = void 0;
  const e = /* @__PURE__ */ J(), t = /* @__PURE__ */ zn(), n = /* @__PURE__ */ ke(), o = /* @__PURE__ */ pn(), c = /* @__PURE__ */ Z(), r = /* @__PURE__ */ hn();
  class s {
    constructor(m) {
      var u;
      this.refs = {}, this.dynamicAnchors = {};
      let g;
      typeof m.schema == "object" && (g = m.schema), this.schema = m.schema, this.schemaId = m.schemaId, this.root = m.root || this, this.baseId = (u = m.baseId) !== null && u !== void 0 ? u : (0, o.normalizeId)(g?.[m.schemaId || "$id"]), this.schemaPath = m.schemaPath, this.localRefs = m.localRefs, this.meta = m.meta, this.$async = g?.$async, this.refs = {};
    }
  }
  pe.SchemaEnv = s;
  function a(f) {
    const m = h.call(this, f);
    if (m)
      return m;
    const u = (0, o.getFullPath)(this.opts.uriResolver, f.root.baseId), { es5: g, lines: w } = this.opts.code, { ownProperties: i } = this.opts, l = new e.CodeGen(this.scope, { es5: g, lines: w, ownProperties: i });
    let p;
    f.$async && (p = l.scopeValue("Error", {
      ref: t.default,
      code: (0, e._)`require("ajv/dist/runtime/validation_error").default`
    }));
    const C = l.scopeName("validate");
    f.validateName = C;
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
      validateName: C,
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
      const N = l.toString();
      A = `${l.scopeRefs(n.default.scope)}return ${N}`, this.opts.code.process && (A = this.opts.code.process(A, f));
      const q = new Function(`${n.default.self}`, `${n.default.scope}`, A)(this, this.scope.get());
      if (this.scope.value(C, { ref: q }), q.errors = null, q.schema = f.schema, q.schemaEnv = f, f.$async && (q.$async = !0), this.opts.code.source === !0 && (q.source = { validateName: C, validateCode: N, scopeValues: l._values }), this.opts.unevaluated) {
        const { props: U, items: Q } = P;
        q.evaluated = {
          props: U instanceof e.Name ? void 0 : U,
          items: Q instanceof e.Name ? void 0 : Q,
          dynamicProps: U instanceof e.Name,
          dynamicItems: Q instanceof e.Name
        }, q.source && (q.source.evaluated = (0, e.stringify)(q.evaluated));
      }
      return f.validate = q, f;
    } catch (N) {
      throw delete f.validate, delete f.validateName, A && this.logger.error("Error compiling schema, function code:", A), N;
    } finally {
      this._compilations.delete(f);
    }
  }
  pe.compileSchema = a;
  function d(f, m, u) {
    var g;
    u = (0, o.resolveUrl)(this.opts.uriResolver, m, u);
    const w = f.refs[u];
    if (w)
      return w;
    let i = $.call(this, f, u);
    if (i === void 0) {
      const l = (g = f.localRefs) === null || g === void 0 ? void 0 : g[u], { schemaId: p } = this.opts;
      l && (i = new s({ schema: l, schemaId: p, root: f, baseId: m }));
    }
    if (i !== void 0)
      return f.refs[u] = y.call(this, i);
  }
  pe.resolveRef = d;
  function y(f) {
    return (0, o.inlineRef)(f.schema, this.opts.inlineRefs) ? f.schema : f.validate ? f : a.call(this, f);
  }
  function h(f) {
    for (const m of this._compilations)
      if (_(m, f))
        return m;
  }
  pe.getCompilingSchema = h;
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
      return k.call(this, u, f);
    const i = (0, o.normalizeId)(g), l = this.refs[i] || this.schemas[i];
    if (typeof l == "string") {
      const p = b.call(this, f, l);
      return typeof p?.schema != "object" ? void 0 : k.call(this, u, p);
    }
    if (typeof l?.schema == "object") {
      if (l.validate || a.call(this, l), i === (0, o.normalizeId)(m)) {
        const { schema: p } = l, { schemaId: C } = this.opts, P = p[C];
        return P && (w = (0, o.resolveUrl)(this.opts.uriResolver, w, P)), new s({ schema: p, schemaId: C, root: f, baseId: w });
      }
      return k.call(this, u, l);
    }
  }
  pe.resolveSchema = b;
  const S = /* @__PURE__ */ new Set([
    "properties",
    "patternProperties",
    "enum",
    "dependencies",
    "definitions"
  ]);
  function k(f, { baseId: m, schema: u, root: g }) {
    var w;
    if (((w = f.fragment) === null || w === void 0 ? void 0 : w[0]) !== "/")
      return;
    for (const p of f.fragment.slice(1).split("/")) {
      if (typeof u == "boolean")
        return;
      const C = u[(0, c.unescapeFragment)(p)];
      if (C === void 0)
        return;
      u = C;
      const P = typeof u == "object" && u[this.opts.schemaId];
      !S.has(p) && P && (m = (0, o.resolveUrl)(this.opts.uriResolver, m, P));
    }
    let i;
    if (typeof u != "boolean" && u.$ref && !(0, c.schemaHasRulesButRef)(u, this.RULES)) {
      const p = (0, o.resolveUrl)(this.opts.uriResolver, m, u.$ref);
      i = b.call(this, g, p);
    }
    const { schemaId: l } = this.opts;
    if (i = i || new s({ schema: u, schemaId: l, root: g, baseId: m }), i.schema !== i.root.schema)
      return i;
  }
  return pe;
}
const Ci = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", Ei = "Meta-schema for $data reference (JSON AnySchema extension proposal)", Pi = "object", xi = ["$data"], Ri = { $data: { type: "string", anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] } }, Ai = !1, Ni = {
  $id: Ci,
  description: Ei,
  type: Pi,
  required: xi,
  properties: Ri,
  additionalProperties: Ai
};
var pt = {}, nt = { exports: {} }, Pn, br;
function Vo() {
  if (br) return Pn;
  br = 1;
  const e = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu), t = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u), n = RegExp.prototype.test.bind(/^[\da-f]{2}$/iu), o = RegExp.prototype.test.bind(/^[\da-z\-._~]$/iu), c = RegExp.prototype.test.bind(/^[\da-z\-._~!$&'()*+,;=:@/]$/iu);
  function r(i) {
    let l = "", p = 0, C = 0;
    for (C = 0; C < i.length; C++)
      if (p = i[C].charCodeAt(0), p !== 48) {
        if (!(p >= 48 && p <= 57 || p >= 65 && p <= 70 || p >= 97 && p <= 102))
          return "";
        l += i[C];
        break;
      }
    for (C += 1; C < i.length; C++) {
      if (p = i[C].charCodeAt(0), !(p >= 48 && p <= 57 || p >= 65 && p <= 70 || p >= 97 && p <= 102))
        return "";
      l += i[C];
    }
    return l;
  }
  const s = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
  function a(i) {
    return i.length = 0, !0;
  }
  function d(i, l, p) {
    if (i.length) {
      const C = r(i);
      if (C !== "")
        l.push(C);
      else
        return p.error = !0, !1;
      i.length = 0;
    }
    return !0;
  }
  function y(i) {
    let l = 0;
    const p = { error: !1, address: "", zone: "" }, C = [], P = [];
    let A = !1, N = !1, j = d;
    for (let q = 0; q < i.length; q++) {
      const U = i[q];
      if (!(U === "[" || U === "]"))
        if (U === ":") {
          if (A === !0 && (N = !0), !j(P, C, p))
            break;
          if (++l > 7) {
            p.error = !0;
            break;
          }
          q > 0 && i[q - 1] === ":" && (A = !0), C.push(":");
          continue;
        } else if (U === "%") {
          if (!j(P, C, p))
            break;
          j = a;
        } else {
          P.push(U);
          continue;
        }
    }
    return P.length && (j === a ? p.zone = P.join("") : N ? C.push(P.join("")) : C.push(r(P))), p.address = C.join(""), p;
  }
  function h(i) {
    if (_(i, ":") < 2)
      return { host: i, isIPV6: !1 };
    const l = y(i);
    if (l.error)
      return { host: i, isIPV6: !1 };
    {
      let p = l.address, C = l.address;
      return l.zone && (p += "%" + l.zone, C += "%25" + l.zone), { host: p, isIPV6: !0, escapedHost: C };
    }
  }
  function _(i, l) {
    let p = 0;
    for (let C = 0; C < i.length; C++)
      i[C] === l && p++;
    return p;
  }
  function $(i) {
    let l = i;
    const p = [];
    let C = -1, P = 0;
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
      if ((C = l.indexOf("/", 1)) === -1) {
        p.push(l);
        break;
      } else
        p.push(l.slice(0, C)), l = l.slice(C);
    }
    return p.join("");
  }
  const b = { "@": "%40", "/": "%2F", "?": "%3F", "#": "%23", ":": "%3A" }, S = /[@/?#:]/g, k = /[@/?#]/g;
  function f(i, l) {
    const p = l ? k : S;
    return p.lastIndex = 0, i.replace(p, (C) => b[C]);
  }
  function m(i, l = !1) {
    if (i.indexOf("%") === -1)
      return i;
    let p = "";
    for (let C = 0; C < i.length; C++) {
      if (i[C] === "%" && C + 2 < i.length) {
        const P = i.slice(C + 1, C + 3);
        if (n(P)) {
          const A = P.toUpperCase(), N = String.fromCharCode(parseInt(A, 16));
          l && o(N) ? p += N : p += "%" + A, C += 2;
          continue;
        }
      }
      p += i[C];
    }
    return p;
  }
  function u(i) {
    let l = "";
    for (let p = 0; p < i.length; p++) {
      if (i[p] === "%" && p + 2 < i.length) {
        const C = i.slice(p + 1, p + 3);
        if (n(C)) {
          const P = C.toUpperCase(), A = String.fromCharCode(parseInt(P, 16));
          A !== "." && o(A) ? l += A : l += "%" + P, p += 2;
          continue;
        }
      }
      c(i[p]) ? l += i[p] : l += escape(i[p]);
    }
    return l;
  }
  function g(i) {
    let l = "";
    for (let p = 0; p < i.length; p++) {
      if (i[p] === "%" && p + 2 < i.length) {
        const C = i.slice(p + 1, p + 3);
        if (n(C)) {
          l += "%" + C.toUpperCase(), p += 2;
          continue;
        }
      }
      l += escape(i[p]);
    }
    return l;
  }
  function w(i) {
    const l = [];
    if (i.userinfo !== void 0 && (l.push(i.userinfo), l.push("@")), i.host !== void 0) {
      let p = unescape(i.host);
      if (!t(p)) {
        const C = h(p);
        C.isIPV6 === !0 ? p = `[${C.escapedHost}]` : p = f(p, !1);
      }
      l.push(p);
    }
    return (typeof i.port == "number" || typeof i.port == "string") && (l.push(":"), l.push(String(i.port))), l.length ? l.join("") : void 0;
  }
  return Pn = {
    nonSimpleDomain: s,
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
  }, Pn;
}
var xn, _r;
function ji() {
  if (_r) return xn;
  _r = 1;
  const { isUUID: e } = Vo(), t = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu, n = (
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
  function o(i) {
    return n.indexOf(
      /** @type {*} */
      i
    ) !== -1;
  }
  function c(i) {
    return i.secure === !0 ? !0 : i.secure === !1 ? !1 : i.scheme ? i.scheme.length === 3 && (i.scheme[0] === "w" || i.scheme[0] === "W") && (i.scheme[1] === "s" || i.scheme[1] === "S") && (i.scheme[2] === "s" || i.scheme[2] === "S") : !1;
  }
  function r(i) {
    return i.host || (i.error = i.error || "HTTP URIs must have a host."), i;
  }
  function s(i) {
    const l = String(i.scheme).toLowerCase() === "https";
    return (i.port === (l ? 443 : 80) || i.port === "") && (i.port = void 0), i.path || (i.path = "/"), i;
  }
  function a(i) {
    return i.secure = c(i), i.resourceName = (i.path || "/") + (i.query ? "?" + i.query : ""), i.path = void 0, i.query = void 0, i;
  }
  function d(i) {
    if ((i.port === (c(i) ? 443 : 80) || i.port === "") && (i.port = void 0), typeof i.secure == "boolean" && (i.scheme = i.secure ? "wss" : "ws", i.secure = void 0), i.resourceName) {
      const [l, p] = i.resourceName.split("?");
      i.path = l && l !== "/" ? l : void 0, i.query = p, i.resourceName = void 0;
    }
    return i.fragment = void 0, i;
  }
  function y(i, l) {
    if (!i.path)
      return i.error = "URN can not be parsed", i;
    const p = i.path.match(t);
    if (p) {
      const C = l.scheme || i.scheme || "urn";
      i.nid = p[1].toLowerCase(), i.nss = p[2];
      const P = `${C}:${l.nid || i.nid}`, A = w(P);
      i.path = void 0, A && (i = A.parse(i, l));
    } else
      i.error = i.error || "URN can not be parsed.";
    return i;
  }
  function h(i, l) {
    if (i.nid === void 0)
      throw new Error("URN without nid cannot be serialized");
    const p = l.scheme || i.scheme || "urn", C = i.nid.toLowerCase(), P = `${p}:${l.nid || C}`, A = w(P);
    A && (i = A.serialize(i, l));
    const N = i, j = i.nss;
    return N.path = `${C || l.nid}:${j}`, l.skipEscape = !0, N;
  }
  function _(i, l) {
    const p = i;
    return p.uuid = p.nss, p.nss = void 0, !l.tolerant && (!p.uuid || !e(p.uuid)) && (p.error = p.error || "UUID is not valid."), p;
  }
  function $(i) {
    const l = i;
    return l.nss = (i.uuid || "").toLowerCase(), l;
  }
  const b = (
    /** @type {SchemeHandler} */
    {
      scheme: "http",
      domainHost: !0,
      parse: r,
      serialize: s
    }
  ), S = (
    /** @type {SchemeHandler} */
    {
      scheme: "https",
      domainHost: b.domainHost,
      parse: r,
      serialize: s
    }
  ), k = (
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
      domainHost: k.domainHost,
      parse: k.parse,
      serialize: k.serialize
    }
  ), g = (
    /** @type {Record<SchemeName, SchemeHandler>} */
    {
      http: b,
      https: S,
      ws: k,
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
  function w(i) {
    return i && (g[
      /** @type {SchemeName} */
      i
    ] || g[
      /** @type {SchemeName} */
      i.toLowerCase()
    ]) || void 0;
  }
  return xn = {
    wsIsSecure: c,
    SCHEMES: g,
    isValidSchemeName: o,
    getSchemeHandler: w
  }, xn;
}
var wr;
function Mi() {
  if (wr) return nt.exports;
  wr = 1;
  const { normalizeIPv6: e, removeDotSegments: t, recomposeAuthority: n, normalizePercentEncoding: o, normalizePathEncoding: c, escapePreservingEscapes: r, reescapeHostDelimiters: s, isIPv4: a, nonSimpleDomain: d } = Vo(), { SCHEMES: y, getSchemeHandler: h } = ji();
  function _(P, A) {
    return typeof P == "string" ? P = /** @type {T} */
    i(P, A) : typeof P == "object" && (P = /** @type {T} */
    w(k(P, A), A)), P;
  }
  function $(P, A, N) {
    const j = N ? Object.assign({ scheme: "null" }, N) : { scheme: "null" }, q = b(w(P, j), w(A, j), j, !0);
    return j.skipEscape = !0, k(q, j);
  }
  function b(P, A, N, j) {
    const q = {};
    return j || (P = w(k(P, N), N), A = w(k(A, N), N)), N = N || {}, !N.tolerant && A.scheme ? (q.scheme = A.scheme, q.userinfo = A.userinfo, q.host = A.host, q.port = A.port, q.path = t(A.path || ""), q.query = A.query) : (A.userinfo !== void 0 || A.host !== void 0 || A.port !== void 0 ? (q.userinfo = A.userinfo, q.host = A.host, q.port = A.port, q.path = t(A.path || ""), q.query = A.query) : (A.path ? (A.path[0] === "/" ? q.path = t(A.path) : ((P.userinfo !== void 0 || P.host !== void 0 || P.port !== void 0) && !P.path ? q.path = "/" + A.path : P.path ? q.path = P.path.slice(0, P.path.lastIndexOf("/") + 1) + A.path : q.path = A.path, q.path = t(q.path)), q.query = A.query) : (q.path = P.path, A.query !== void 0 ? q.query = A.query : q.query = P.query), q.userinfo = P.userinfo, q.host = P.host, q.port = P.port), q.scheme = P.scheme), q.fragment = A.fragment, q;
  }
  function S(P, A, N) {
    const j = p(P, N), q = p(A, N);
    return j !== void 0 && q !== void 0 && j.toLowerCase() === q.toLowerCase();
  }
  function k(P, A) {
    const N = {
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
    }, j = Object.assign({}, A), q = [], U = h(j.scheme || N.scheme);
    U && U.serialize && U.serialize(N, j), N.path !== void 0 && (j.skipEscape ? N.path = o(N.path) : (N.path = r(N.path), N.scheme !== void 0 && (N.path = N.path.split("%3A").join(":")))), j.reference !== "suffix" && N.scheme && q.push(N.scheme, ":");
    const Q = n(N);
    if (Q !== void 0 && (j.reference !== "suffix" && q.push("//"), q.push(Q), N.path && N.path[0] !== "/" && q.push("/")), N.path !== void 0) {
      let te = N.path;
      !j.absolutePath && (!U || !U.absolutePath) && (te = t(te)), Q === void 0 && te[0] === "/" && te[1] === "/" && (te = "/%2F" + te.slice(2)), q.push(te);
    }
    return N.query !== void 0 && q.push("?", N.query), N.fragment !== void 0 && q.push("#", N.fragment), q.join("");
  }
  const f = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u, m = /^(?:[^#/:?]+:)?\/\/([^/?#]*)/;
  function u(P, A) {
    if (A[2] !== void 0 && P.path && P.path[0] !== "/")
      return 'URI path must start with "/" when authority is present.';
    if (typeof P.port == "number" && (P.port < 0 || P.port > 65535))
      return "URI port is malformed.";
  }
  function g(P, A) {
    const N = Object.assign({}, A), j = {
      scheme: void 0,
      userinfo: void 0,
      host: "",
      port: void 0,
      path: "",
      query: void 0,
      fragment: void 0
    };
    let q = !1, U = !1;
    N.reference === "suffix" && (N.scheme ? P = N.scheme + ":" + P : P = "//" + P);
    const Q = P.match(m);
    Q !== null && Q[1].indexOf("\\") !== -1 && (j.error = "URI authority must not contain a literal backslash.", q = !0);
    const te = P.match(f);
    if (te) {
      j.scheme = te[1], j.userinfo = te[3], j.host = te[4], j.port = parseInt(te[5], 10), j.path = te[6] || "", j.query = te[7], j.fragment = te[8], isNaN(j.port) && (j.port = te[5]);
      const me = u(j, te);
      if (me !== void 0 && (j.error = j.error || me, q = !0), j.host)
        if (a(j.host) === !1) {
          const F = e(j.host);
          j.host = F.host.toLowerCase(), U = F.isIPV6;
        } else
          U = !0;
      j.scheme === void 0 && j.userinfo === void 0 && j.host === void 0 && j.port === void 0 && j.query === void 0 && !j.path ? j.reference = "same-document" : j.scheme === void 0 ? j.reference = "relative" : j.fragment === void 0 ? j.reference = "absolute" : j.reference = "uri", N.reference && N.reference !== "suffix" && N.reference !== j.reference && (j.error = j.error || "URI is not a " + N.reference + " reference.");
      const X = h(N.scheme || j.scheme);
      if (!N.unicodeSupport && (!X || !X.unicodeSupport) && j.host && (N.domainHost || X && X.domainHost) && U === !1 && d(j.host))
        try {
          j.host = new URL("http://" + j.host).hostname;
        } catch (ve) {
          j.error = j.error || "Host's domain name can not be converted to ASCII: " + ve;
        }
      if ((!X || X && !X.skipNormalize) && (P.indexOf("%") !== -1 && (j.scheme !== void 0 && (j.scheme = unescape(j.scheme)), j.host !== void 0 && (j.host = s(unescape(j.host), U))), j.path && (j.path = c(j.path)), j.fragment))
        try {
          j.fragment = encodeURI(decodeURIComponent(j.fragment));
        } catch {
          j.error = j.error || "URI malformed";
        }
      X && X.parse && X.parse(j, N);
    } else
      j.error = j.error || "URI can not be parsed.";
    return { parsed: j, malformedAuthorityOrPort: q };
  }
  function w(P, A) {
    return g(P, A).parsed;
  }
  function i(P, A) {
    return l(P, A).normalized;
  }
  function l(P, A) {
    const { parsed: N, malformedAuthorityOrPort: j } = g(P, A);
    return {
      normalized: j ? P : k(N, A),
      malformedAuthorityOrPort: j
    };
  }
  function p(P, A) {
    if (typeof P == "string") {
      const { normalized: N, malformedAuthorityOrPort: j } = l(P, A);
      return j ? void 0 : N;
    }
    if (typeof P == "object")
      return k(P, A);
  }
  const C = {
    SCHEMES: y,
    normalize: _,
    resolve: $,
    resolveComponent: b,
    equal: S,
    serialize: k,
    parse: w
  };
  return nt.exports = C, nt.exports.default = C, nt.exports.fastUri = C, nt.exports;
}
var Sr;
function Oi() {
  if (Sr) return pt;
  Sr = 1, Object.defineProperty(pt, "__esModule", { value: !0 });
  const e = Mi();
  return e.code = 'require("ajv/dist/runtime/uri").default', pt.default = e, pt;
}
var kr;
function Ti() {
  return kr || (kr = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = void 0;
    var t = /* @__PURE__ */ hn();
    Object.defineProperty(e, "KeywordCxt", { enumerable: !0, get: function() {
      return t.KeywordCxt;
    } });
    var n = /* @__PURE__ */ J();
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
    const o = /* @__PURE__ */ zn(), c = /* @__PURE__ */ mn(), r = /* @__PURE__ */ Io(), s = /* @__PURE__ */ gn(), a = /* @__PURE__ */ J(), d = /* @__PURE__ */ pn(), y = /* @__PURE__ */ dn(), h = /* @__PURE__ */ Z(), _ = Ni, $ = /* @__PURE__ */ Oi(), b = (F, M) => new RegExp(F, M);
    b.code = "new RegExp";
    const S = ["removeAdditional", "useDefaults", "coerceTypes"], k = /* @__PURE__ */ new Set([
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
    function g(F) {
      var M, B, T, v, E, I, K, H, ne, ee, R, O, V, L, G, Y, ae, $e, ue, fe, ce, Be, ge, yn, vn;
      const Qe = F.strict, $n = (M = F.code) === null || M === void 0 ? void 0 : M.optimize, Wn = $n === !0 || $n === void 0 ? 1 : $n || 0, Yn = (T = (B = F.code) === null || B === void 0 ? void 0 : B.regExp) !== null && T !== void 0 ? T : b, si = (v = F.uriResolver) !== null && v !== void 0 ? v : $.default;
      return {
        strictSchema: (I = (E = F.strictSchema) !== null && E !== void 0 ? E : Qe) !== null && I !== void 0 ? I : !0,
        strictNumbers: (H = (K = F.strictNumbers) !== null && K !== void 0 ? K : Qe) !== null && H !== void 0 ? H : !0,
        strictTypes: (ee = (ne = F.strictTypes) !== null && ne !== void 0 ? ne : Qe) !== null && ee !== void 0 ? ee : "log",
        strictTuples: (O = (R = F.strictTuples) !== null && R !== void 0 ? R : Qe) !== null && O !== void 0 ? O : "log",
        strictRequired: (L = (V = F.strictRequired) !== null && V !== void 0 ? V : Qe) !== null && L !== void 0 ? L : !1,
        code: F.code ? { ...F.code, optimize: Wn, regExp: Yn } : { optimize: Wn, regExp: Yn },
        loopRequired: (G = F.loopRequired) !== null && G !== void 0 ? G : u,
        loopEnum: (Y = F.loopEnum) !== null && Y !== void 0 ? Y : u,
        meta: (ae = F.meta) !== null && ae !== void 0 ? ae : !0,
        messages: ($e = F.messages) !== null && $e !== void 0 ? $e : !0,
        inlineRefs: (ue = F.inlineRefs) !== null && ue !== void 0 ? ue : !0,
        schemaId: (fe = F.schemaId) !== null && fe !== void 0 ? fe : "$id",
        addUsedSchema: (ce = F.addUsedSchema) !== null && ce !== void 0 ? ce : !0,
        validateSchema: (Be = F.validateSchema) !== null && Be !== void 0 ? Be : !0,
        validateFormats: (ge = F.validateFormats) !== null && ge !== void 0 ? ge : !0,
        unicodeRegExp: (yn = F.unicodeRegExp) !== null && yn !== void 0 ? yn : !0,
        int32range: (vn = F.int32range) !== null && vn !== void 0 ? vn : !0,
        uriResolver: si
      };
    }
    class w {
      constructor(M = {}) {
        this.schemas = {}, this.refs = {}, this.formats = /* @__PURE__ */ Object.create(null), this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), M = this.opts = { ...M, ...g(M) };
        const { es5: B, lines: T } = this.opts.code;
        this.scope = new a.ValueScope({ scope: {}, prefixes: k, es5: B, lines: T }), this.logger = j(M.logger);
        const v = M.validateFormats;
        M.validateFormats = !1, this.RULES = (0, r.getRules)(), i.call(this, f, M, "NOT SUPPORTED"), i.call(this, m, M, "DEPRECATED", "warn"), this._metaOpts = A.call(this), M.formats && C.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), M.keywords && P.call(this, M.keywords), typeof M.meta == "object" && this.addMetaSchema(M.meta), p.call(this), M.validateFormats = v;
      }
      _addVocabularies() {
        this.addKeyword("$async");
      }
      _addDefaultMetaSchema() {
        const { $data: M, meta: B, schemaId: T } = this.opts;
        let v = _;
        T === "id" && (v = { ..._ }, v.id = v.$id, delete v.$id), B && M && this.addMetaSchema(v, v[T], !1);
      }
      defaultMeta() {
        const { meta: M, schemaId: B } = this.opts;
        return this.opts.defaultMeta = typeof M == "object" ? M[B] || M : void 0;
      }
      validate(M, B) {
        let T;
        if (typeof M == "string") {
          if (T = this.getSchema(M), !T)
            throw new Error(`no schema with key or ref "${M}"`);
        } else
          T = this.compile(M);
        const v = T(B);
        return "$async" in T || (this.errors = T.errors), v;
      }
      compile(M, B) {
        const T = this._addSchema(M, B);
        return T.validate || this._compileSchemaEnv(T);
      }
      compileAsync(M, B) {
        if (typeof this.opts.loadSchema != "function")
          throw new Error("options.loadSchema should be a function");
        const { loadSchema: T } = this.opts;
        return v.call(this, M, B);
        async function v(ee, R) {
          await E.call(this, ee.$schema);
          const O = this._addSchema(ee, R);
          return O.validate || I.call(this, O);
        }
        async function E(ee) {
          ee && !this.getSchema(ee) && await v.call(this, { $ref: ee }, !0);
        }
        async function I(ee) {
          try {
            return this._compileSchemaEnv(ee);
          } catch (R) {
            if (!(R instanceof c.default))
              throw R;
            return K.call(this, R), await H.call(this, R.missingSchema), I.call(this, ee);
          }
        }
        function K({ missingSchema: ee, missingRef: R }) {
          if (this.refs[ee])
            throw new Error(`AnySchema ${ee} is loaded but ${R} cannot be resolved`);
        }
        async function H(ee) {
          const R = await ne.call(this, ee);
          this.refs[ee] || await E.call(this, R.$schema), this.refs[ee] || this.addSchema(R, ee, B);
        }
        async function ne(ee) {
          const R = this._loading[ee];
          if (R)
            return R;
          try {
            return await (this._loading[ee] = T(ee));
          } finally {
            delete this._loading[ee];
          }
        }
      }
      // Adds schema to the instance
      addSchema(M, B, T, v = this.opts.validateSchema) {
        if (Array.isArray(M)) {
          for (const I of M)
            this.addSchema(I, void 0, T, v);
          return this;
        }
        let E;
        if (typeof M == "object") {
          const { schemaId: I } = this.opts;
          if (E = M[I], E !== void 0 && typeof E != "string")
            throw new Error(`schema ${I} must be string`);
        }
        return B = (0, d.normalizeId)(B || E), this._checkUnique(B), this.schemas[B] = this._addSchema(M, T, B, v, !0), this;
      }
      // Add schema that will be used to validate other schemas
      // options in META_IGNORE_OPTIONS are alway set to false
      addMetaSchema(M, B, T = this.opts.validateSchema) {
        return this.addSchema(M, B, !0, T), this;
      }
      //  Validate schema against its meta-schema
      validateSchema(M, B) {
        if (typeof M == "boolean")
          return !0;
        let T;
        if (T = M.$schema, T !== void 0 && typeof T != "string")
          throw new Error("$schema must be a string");
        if (T = T || this.opts.defaultMeta || this.defaultMeta(), !T)
          return this.logger.warn("meta-schema not available"), this.errors = null, !0;
        const v = this.validate(T, M);
        if (!v && B) {
          const E = "schema is invalid: " + this.errorsText();
          if (this.opts.validateSchema === "log")
            this.logger.error(E);
          else
            throw new Error(E);
        }
        return v;
      }
      // Get compiled schema by `key` or `ref`.
      // (`key` that was passed to `addSchema` or full schema reference - `schema.$id` or resolved id)
      getSchema(M) {
        let B;
        for (; typeof (B = l.call(this, M)) == "string"; )
          M = B;
        if (B === void 0) {
          const { schemaId: T } = this.opts, v = new s.SchemaEnv({ schema: {}, schemaId: T });
          if (B = s.resolveSchema.call(this, v, M), !B)
            return;
          this.refs[M] = B;
        }
        return B.validate || this._compileSchemaEnv(B);
      }
      // Remove cached schema(s).
      // If no parameter is passed all schemas but meta-schemas are removed.
      // If RegExp is passed all schemas with key/id matching pattern but meta-schemas are removed.
      // Even if schema is referenced by other schemas it still can be removed as other schemas have local references.
      removeSchema(M) {
        if (M instanceof RegExp)
          return this._removeAllSchemas(this.schemas, M), this._removeAllSchemas(this.refs, M), this;
        switch (typeof M) {
          case "undefined":
            return this._removeAllSchemas(this.schemas), this._removeAllSchemas(this.refs), this._cache.clear(), this;
          case "string": {
            const B = l.call(this, M);
            return typeof B == "object" && this._cache.delete(B.schema), delete this.schemas[M], delete this.refs[M], this;
          }
          case "object": {
            const B = M;
            this._cache.delete(B);
            let T = M[this.opts.schemaId];
            return T && (T = (0, d.normalizeId)(T), delete this.schemas[T], delete this.refs[T]), this;
          }
          default:
            throw new Error("ajv.removeSchema: invalid parameter");
        }
      }
      // add "vocabulary" - a collection of keywords
      addVocabulary(M) {
        for (const B of M)
          this.addKeyword(B);
        return this;
      }
      addKeyword(M, B) {
        let T;
        if (typeof M == "string")
          T = M, typeof B == "object" && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), B.keyword = T);
        else if (typeof M == "object" && B === void 0) {
          if (B = M, T = B.keyword, Array.isArray(T) && !T.length)
            throw new Error("addKeywords: keyword must be string or non-empty array");
        } else
          throw new Error("invalid addKeywords parameters");
        if (U.call(this, T, B), !B)
          return (0, h.eachItem)(T, (E) => Q.call(this, E)), this;
        me.call(this, B);
        const v = {
          ...B,
          type: (0, y.getJSONTypes)(B.type),
          schemaType: (0, y.getJSONTypes)(B.schemaType)
        };
        return (0, h.eachItem)(T, v.type.length === 0 ? (E) => Q.call(this, E, v) : (E) => v.type.forEach((I) => Q.call(this, E, v, I))), this;
      }
      getKeyword(M) {
        const B = this.RULES.all[M];
        return typeof B == "object" ? B.definition : !!B;
      }
      // Remove keyword
      removeKeyword(M) {
        const { RULES: B } = this;
        delete B.keywords[M], delete B.all[M];
        for (const T of B.rules) {
          const v = T.rules.findIndex((E) => E.keyword === M);
          v >= 0 && T.rules.splice(v, 1);
        }
        return this;
      }
      // Add format
      addFormat(M, B) {
        return typeof B == "string" && (B = new RegExp(B)), this.formats[M] = B, this;
      }
      errorsText(M = this.errors, { separator: B = ", ", dataVar: T = "data" } = {}) {
        return !M || M.length === 0 ? "No errors" : M.map((v) => `${T}${v.instancePath} ${v.message}`).reduce((v, E) => v + B + E);
      }
      $dataMetaSchema(M, B) {
        const T = this.RULES.all;
        M = JSON.parse(JSON.stringify(M));
        for (const v of B) {
          const E = v.split("/").slice(1);
          let I = M;
          for (const K of E)
            I = I[K];
          for (const K in T) {
            const H = T[K];
            if (typeof H != "object")
              continue;
            const { $data: ne } = H.definition, ee = I[K];
            ne && ee && (I[K] = ve(ee));
          }
        }
        return M;
      }
      _removeAllSchemas(M, B) {
        for (const T in M) {
          const v = M[T];
          (!B || B.test(T)) && (typeof v == "string" ? delete M[T] : v && !v.meta && (this._cache.delete(v.schema), delete M[T]));
        }
      }
      _addSchema(M, B, T, v = this.opts.validateSchema, E = this.opts.addUsedSchema) {
        let I;
        const { schemaId: K } = this.opts;
        if (typeof M == "object")
          I = M[K];
        else {
          if (this.opts.jtd)
            throw new Error("schema must be object");
          if (typeof M != "boolean")
            throw new Error("schema must be object or boolean");
        }
        let H = this._cache.get(M);
        if (H !== void 0)
          return H;
        T = (0, d.normalizeId)(I || T);
        const ne = d.getSchemaRefs.call(this, M, T);
        return H = new s.SchemaEnv({ schema: M, schemaId: K, meta: B, baseId: T, localRefs: ne }), this._cache.set(H.schema, H), E && !T.startsWith("#") && (T && this._checkUnique(T), this.refs[T] = H), v && this.validateSchema(M, !0), H;
      }
      _checkUnique(M) {
        if (this.schemas[M] || this.refs[M])
          throw new Error(`schema with key or id "${M}" already exists`);
      }
      _compileSchemaEnv(M) {
        if (M.meta ? this._compileMetaSchema(M) : s.compileSchema.call(this, M), !M.validate)
          throw new Error("ajv implementation error");
        return M.validate;
      }
      _compileMetaSchema(M) {
        const B = this.opts;
        this.opts = this._metaOpts;
        try {
          s.compileSchema.call(this, M);
        } finally {
          this.opts = B;
        }
      }
    }
    w.ValidationError = o.default, w.MissingRefError = c.default, e.default = w;
    function i(F, M, B, T = "error") {
      for (const v in F) {
        const E = v;
        E in M && this.logger[T](`${B}: option ${v}. ${F[E]}`);
      }
    }
    function l(F) {
      return F = (0, d.normalizeId)(F), this.schemas[F] || this.refs[F];
    }
    function p() {
      const F = this.opts.schemas;
      if (F)
        if (Array.isArray(F))
          this.addSchema(F);
        else
          for (const M in F)
            this.addSchema(F[M], M);
    }
    function C() {
      for (const F in this.opts.formats) {
        const M = this.opts.formats[F];
        M && this.addFormat(F, M);
      }
    }
    function P(F) {
      if (Array.isArray(F)) {
        this.addVocabulary(F);
        return;
      }
      this.logger.warn("keywords option as map is deprecated, pass array");
      for (const M in F) {
        const B = F[M];
        B.keyword || (B.keyword = M), this.addKeyword(B);
      }
    }
    function A() {
      const F = { ...this.opts };
      for (const M of S)
        delete F[M];
      return F;
    }
    const N = { log() {
    }, warn() {
    }, error() {
    } };
    function j(F) {
      if (F === !1)
        return N;
      if (F === void 0)
        return console;
      if (F.log && F.warn && F.error)
        return F;
      throw new Error("logger must implement log, warn and error methods");
    }
    const q = /^[a-z_$][a-z0-9_$:-]*$/i;
    function U(F, M) {
      const { RULES: B } = this;
      if ((0, h.eachItem)(F, (T) => {
        if (B.keywords[T])
          throw new Error(`Keyword ${T} is already defined`);
        if (!q.test(T))
          throw new Error(`Keyword ${T} has invalid name`);
      }), !!M && M.$data && !("code" in M || "validate" in M))
        throw new Error('$data keyword must have "code" or "validate" function');
    }
    function Q(F, M, B) {
      var T;
      const v = M?.post;
      if (B && v)
        throw new Error('keyword with "post" flag cannot have "type"');
      const { RULES: E } = this;
      let I = v ? E.post : E.rules.find(({ type: H }) => H === B);
      if (I || (I = { type: B, rules: [] }, E.rules.push(I)), E.keywords[F] = !0, !M)
        return;
      const K = {
        keyword: F,
        definition: {
          ...M,
          type: (0, y.getJSONTypes)(M.type),
          schemaType: (0, y.getJSONTypes)(M.schemaType)
        }
      };
      M.before ? te.call(this, I, K, M.before) : I.rules.push(K), E.all[F] = K, (T = M.implements) === null || T === void 0 || T.forEach((H) => this.addKeyword(H));
    }
    function te(F, M, B) {
      const T = F.rules.findIndex((v) => v.keyword === B);
      T >= 0 ? F.rules.splice(T, 0, M) : (F.rules.push(M), this.logger.warn(`rule ${B} is not defined`));
    }
    function me(F) {
      let { metaSchema: M } = F;
      M !== void 0 && (F.$data && this.opts.$data && (M = ve(M)), F.validateSchema = this.compile(M, !0));
    }
    const X = {
      $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
    };
    function ve(F) {
      return { anyOf: [F, X] };
    }
  })(bn)), bn;
}
var ht = {}, mt = {}, gt = {}, Cr;
function zi() {
  if (Cr) return gt;
  Cr = 1, Object.defineProperty(gt, "__esModule", { value: !0 });
  const e = {
    keyword: "id",
    code() {
      throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
    }
  };
  return gt.default = e, gt;
}
var je = {}, Er;
function In() {
  if (Er) return je;
  Er = 1, Object.defineProperty(je, "__esModule", { value: !0 }), je.callRef = je.getValidate = void 0;
  const e = /* @__PURE__ */ mn(), t = /* @__PURE__ */ Ce(), n = /* @__PURE__ */ J(), o = /* @__PURE__ */ ke(), c = /* @__PURE__ */ gn(), r = /* @__PURE__ */ Z(), s = {
    keyword: "$ref",
    schemaType: "string",
    code(y) {
      const { gen: h, schema: _, it: $ } = y, { baseId: b, schemaEnv: S, validateName: k, opts: f, self: m } = $, { root: u } = S;
      if ((_ === "#" || _ === "#/") && b === u.baseId)
        return w();
      const g = c.resolveRef.call(m, u, b, _);
      if (g === void 0)
        throw new e.default($.opts.uriResolver, b, _);
      if (g instanceof c.SchemaEnv)
        return i(g);
      return l(g);
      function w() {
        if (S === u)
          return d(y, k, S, S.$async);
        const p = h.scopeValue("root", { ref: u });
        return d(y, (0, n._)`${p}.validate`, u, u.$async);
      }
      function i(p) {
        const C = a(y, p);
        d(y, C, p, p.$async);
      }
      function l(p) {
        const C = h.scopeValue("schema", f.code.source === !0 ? { ref: p, code: (0, n.stringify)(p) } : { ref: p }), P = h.name("valid"), A = y.subschema({
          schema: p,
          dataTypes: [],
          schemaPath: n.nil,
          topSchemaRef: C,
          errSchemaPath: _
        }, P);
        y.mergeEvaluated(A), y.ok(P);
      }
    }
  };
  function a(y, h) {
    const { gen: _ } = y;
    return h.validate ? _.scopeValue("validate", { ref: h.validate }) : (0, n._)`${_.scopeValue("wrapper", { ref: h })}.validate`;
  }
  je.getValidate = a;
  function d(y, h, _, $) {
    const { gen: b, it: S } = y, { allErrors: k, schemaEnv: f, opts: m } = S, u = m.passContext ? o.default.this : n.nil;
    $ ? g() : w();
    function g() {
      if (!f.$async)
        throw new Error("async schema referenced by sync schema");
      const p = b.let("valid");
      b.try(() => {
        b.code((0, n._)`await ${(0, t.callValidateCode)(y, h, u)}`), l(h), k || b.assign(p, !0);
      }, (C) => {
        b.if((0, n._)`!(${C} instanceof ${S.ValidationError})`, () => b.throw(C)), i(C), k || b.assign(p, !1);
      }), y.ok(p);
    }
    function w() {
      y.result((0, t.callValidateCode)(y, h, u), () => l(h), () => i(h));
    }
    function i(p) {
      const C = (0, n._)`${p}.errors`;
      b.assign(o.default.vErrors, (0, n._)`${o.default.vErrors} === null ? ${C} : ${o.default.vErrors}.concat(${C})`), b.assign(o.default.errors, (0, n._)`${o.default.vErrors}.length`);
    }
    function l(p) {
      var C;
      if (!S.opts.unevaluated)
        return;
      const P = (C = _?.validate) === null || C === void 0 ? void 0 : C.evaluated;
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
  return je.callRef = d, je.default = s, je;
}
var Pr;
function Ii() {
  if (Pr) return mt;
  Pr = 1, Object.defineProperty(mt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ zi(), t = /* @__PURE__ */ In(), n = [
    "$schema",
    "$id",
    "$defs",
    "$vocabulary",
    { keyword: "$comment" },
    "definitions",
    e.default,
    t.default
  ];
  return mt.default = n, mt;
}
var yt = {}, vt = {}, xr;
function Di() {
  if (xr) return vt;
  xr = 1, Object.defineProperty(vt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ J(), t = e.operators, n = {
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
      const { keyword: s, data: a, schemaCode: d } = r;
      r.fail$data((0, e._)`${a} ${n[s].fail} ${d} || isNaN(${a})`);
    }
  };
  return vt.default = c, vt;
}
var $t = {}, Rr;
function qi() {
  if (Rr) return $t;
  Rr = 1, Object.defineProperty($t, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ J(), n = {
    keyword: "multipleOf",
    type: "number",
    schemaType: "number",
    $data: !0,
    error: {
      message: ({ schemaCode: o }) => (0, e.str)`must be multiple of ${o}`,
      params: ({ schemaCode: o }) => (0, e._)`{multipleOf: ${o}}`
    },
    code(o) {
      const { gen: c, data: r, schemaCode: s, it: a } = o, d = a.opts.multipleOfPrecision, y = c.let("res"), h = d ? (0, e._)`Math.abs(Math.round(${y}) - ${y}) > 1e-${d}` : (0, e._)`${y} !== parseInt(${y})`;
      o.fail$data((0, e._)`(${s} === 0 || (${y} = ${r}/${s}, ${h}))`);
    }
  };
  return $t.default = n, $t;
}
var bt = {}, _t = {}, Ar;
function Vi() {
  if (Ar) return _t;
  Ar = 1, Object.defineProperty(_t, "__esModule", { value: !0 });
  function e(t) {
    const n = t.length;
    let o = 0, c = 0, r;
    for (; c < n; )
      o++, r = t.charCodeAt(c++), r >= 55296 && r <= 56319 && c < n && (r = t.charCodeAt(c), (r & 64512) === 56320 && c++);
    return o;
  }
  return _t.default = e, e.code = 'require("ajv/dist/runtime/ucs2length").default', _t;
}
var Nr;
function Bi() {
  if (Nr) return bt;
  Nr = 1, Object.defineProperty(bt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ J(), t = /* @__PURE__ */ Z(), n = /* @__PURE__ */ Vi(), c = {
    keyword: ["maxLength", "minLength"],
    type: "string",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: r, schemaCode: s }) {
        const a = r === "maxLength" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${a} than ${s} characters`;
      },
      params: ({ schemaCode: r }) => (0, e._)`{limit: ${r}}`
    },
    code(r) {
      const { keyword: s, data: a, schemaCode: d, it: y } = r, h = s === "maxLength" ? e.operators.GT : e.operators.LT, _ = y.opts.unicode === !1 ? (0, e._)`${a}.length` : (0, e._)`${(0, t.useFunc)(r.gen, n.default)}(${a})`;
      r.fail$data((0, e._)`${_} ${h} ${d}`);
    }
  };
  return bt.default = c, bt;
}
var wt = {}, jr;
function Fi() {
  if (jr) return wt;
  jr = 1, Object.defineProperty(wt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ce(), t = /* @__PURE__ */ Z(), n = /* @__PURE__ */ J(), c = {
    keyword: "pattern",
    type: "string",
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: r }) => (0, n.str)`must match pattern "${r}"`,
      params: ({ schemaCode: r }) => (0, n._)`{pattern: ${r}}`
    },
    code(r) {
      const { gen: s, data: a, $data: d, schema: y, schemaCode: h, it: _ } = r, $ = _.opts.unicodeRegExp ? "u" : "";
      if (d) {
        const { regExp: b } = _.opts.code, S = b.code === "new RegExp" ? (0, n._)`new RegExp` : (0, t.useFunc)(s, b), k = s.let("valid");
        s.try(() => s.assign(k, (0, n._)`${S}(${h}, ${$}).test(${a})`), () => s.assign(k, !1)), r.fail$data((0, n._)`!${k}`);
      } else {
        const b = (0, e.usePattern)(r, y);
        r.fail$data((0, n._)`!${b}.test(${a})`);
      }
    }
  };
  return wt.default = c, wt;
}
var St = {}, Mr;
function Li() {
  if (Mr) return St;
  Mr = 1, Object.defineProperty(St, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ J(), n = {
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
      const { keyword: c, data: r, schemaCode: s } = o, a = c === "maxProperties" ? e.operators.GT : e.operators.LT;
      o.fail$data((0, e._)`Object.keys(${r}).length ${a} ${s}`);
    }
  };
  return St.default = n, St;
}
var kt = {}, Or;
function Ui() {
  if (Or) return kt;
  Or = 1, Object.defineProperty(kt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ce(), t = /* @__PURE__ */ J(), n = /* @__PURE__ */ Z(), c = {
    keyword: "required",
    type: "object",
    schemaType: "array",
    $data: !0,
    error: {
      message: ({ params: { missingProperty: r } }) => (0, t.str)`must have required property '${r}'`,
      params: ({ params: { missingProperty: r } }) => (0, t._)`{missingProperty: ${r}}`
    },
    code(r) {
      const { gen: s, schema: a, schemaCode: d, data: y, $data: h, it: _ } = r, { opts: $ } = _;
      if (!h && a.length === 0)
        return;
      const b = a.length >= $.loopRequired;
      if (_.allErrors ? S() : k(), $.strictRequired) {
        const u = r.parentSchema.properties, { definedProperties: g } = r.it;
        for (const w of a)
          if (u?.[w] === void 0 && !g.has(w)) {
            const i = _.schemaEnv.baseId + _.errSchemaPath, l = `required property "${w}" is not defined at "${i}" (strictRequired)`;
            (0, n.checkStrictMode)(_, l, _.opts.strictRequired);
          }
      }
      function S() {
        if (b || h)
          r.block$data(t.nil, f);
        else
          for (const u of a)
            (0, e.checkReportMissingProp)(r, u);
      }
      function k() {
        const u = s.let("missing");
        if (b || h) {
          const g = s.let("valid", !0);
          r.block$data(g, () => m(u, g)), r.ok(g);
        } else
          s.if((0, e.checkMissingProp)(r, a, u)), (0, e.reportMissingProp)(r, u), s.else();
      }
      function f() {
        s.forOf("prop", d, (u) => {
          r.setParams({ missingProperty: u }), s.if((0, e.noPropertyInData)(s, y, u, $.ownProperties), () => r.error());
        });
      }
      function m(u, g) {
        r.setParams({ missingProperty: u }), s.forOf(u, d, () => {
          s.assign(g, (0, e.propertyInData)(s, y, u, $.ownProperties)), s.if((0, t.not)(g), () => {
            r.error(), s.break();
          });
        }, t.nil);
      }
    }
  };
  return kt.default = c, kt;
}
var Ct = {}, Tr;
function Ki() {
  if (Tr) return Ct;
  Tr = 1, Object.defineProperty(Ct, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ J(), n = {
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
      const { keyword: c, data: r, schemaCode: s } = o, a = c === "maxItems" ? e.operators.GT : e.operators.LT;
      o.fail$data((0, e._)`${r}.length ${a} ${s}`);
    }
  };
  return Ct.default = n, Ct;
}
var Et = {}, Pt = {}, zr;
function Dn() {
  if (zr) return Pt;
  zr = 1, Object.defineProperty(Pt, "__esModule", { value: !0 });
  const e = qo();
  return e.code = 'require("ajv/dist/runtime/equal").default', Pt.default = e, Pt;
}
var Ir;
function Gi() {
  if (Ir) return Et;
  Ir = 1, Object.defineProperty(Et, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ dn(), t = /* @__PURE__ */ J(), n = /* @__PURE__ */ Z(), o = /* @__PURE__ */ Dn(), r = {
    keyword: "uniqueItems",
    type: "array",
    schemaType: "boolean",
    $data: !0,
    error: {
      message: ({ params: { i: s, j: a } }) => (0, t.str)`must NOT have duplicate items (items ## ${a} and ${s} are identical)`,
      params: ({ params: { i: s, j: a } }) => (0, t._)`{i: ${s}, j: ${a}}`
    },
    code(s) {
      const { gen: a, data: d, $data: y, schema: h, parentSchema: _, schemaCode: $, it: b } = s;
      if (!y && !h)
        return;
      const S = a.let("valid"), k = _.items ? (0, e.getSchemaTypes)(_.items) : [];
      s.block$data(S, f, (0, t._)`${$} === false`), s.ok(S);
      function f() {
        const w = a.let("i", (0, t._)`${d}.length`), i = a.let("j");
        s.setParams({ i: w, j: i }), a.assign(S, !0), a.if((0, t._)`${w} > 1`, () => (m() ? u : g)(w, i));
      }
      function m() {
        return k.length > 0 && !k.some((w) => w === "object" || w === "array");
      }
      function u(w, i) {
        const l = a.name("item"), p = (0, e.checkDataTypes)(k, l, b.opts.strictNumbers, e.DataType.Wrong), C = a.const("indices", (0, t._)`{}`);
        a.for((0, t._)`;${w}--;`, () => {
          a.let(l, (0, t._)`${d}[${w}]`), a.if(p, (0, t._)`continue`), k.length > 1 && a.if((0, t._)`typeof ${l} == "string"`, (0, t._)`${l} += "_"`), a.if((0, t._)`typeof ${C}[${l}] == "number"`, () => {
            a.assign(i, (0, t._)`${C}[${l}]`), s.error(), a.assign(S, !1).break();
          }).code((0, t._)`${C}[${l}] = ${w}`);
        });
      }
      function g(w, i) {
        const l = (0, n.useFunc)(a, o.default), p = a.name("outer");
        a.label(p).for((0, t._)`;${w}--;`, () => a.for((0, t._)`${i} = ${w}; ${i}--;`, () => a.if((0, t._)`${l}(${d}[${w}], ${d}[${i}])`, () => {
          s.error(), a.assign(S, !1).break(p);
        })));
      }
    }
  };
  return Et.default = r, Et;
}
var xt = {}, Dr;
function Hi() {
  if (Dr) return xt;
  Dr = 1, Object.defineProperty(xt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ J(), t = /* @__PURE__ */ Z(), n = /* @__PURE__ */ Dn(), c = {
    keyword: "const",
    $data: !0,
    error: {
      message: "must be equal to constant",
      params: ({ schemaCode: r }) => (0, e._)`{allowedValue: ${r}}`
    },
    code(r) {
      const { gen: s, data: a, $data: d, schemaCode: y, schema: h } = r;
      d || h && typeof h == "object" ? r.fail$data((0, e._)`!${(0, t.useFunc)(s, n.default)}(${a}, ${y})`) : r.fail((0, e._)`${h} !== ${a}`);
    }
  };
  return xt.default = c, xt;
}
var Rt = {}, qr;
function Ji() {
  if (qr) return Rt;
  qr = 1, Object.defineProperty(Rt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ J(), t = /* @__PURE__ */ Z(), n = /* @__PURE__ */ Dn(), c = {
    keyword: "enum",
    schemaType: "array",
    $data: !0,
    error: {
      message: "must be equal to one of the allowed values",
      params: ({ schemaCode: r }) => (0, e._)`{allowedValues: ${r}}`
    },
    code(r) {
      const { gen: s, data: a, $data: d, schema: y, schemaCode: h, it: _ } = r;
      if (!d && y.length === 0)
        throw new Error("enum must have non-empty array");
      const $ = y.length >= _.opts.loopEnum;
      let b;
      const S = () => b ?? (b = (0, t.useFunc)(s, n.default));
      let k;
      if ($ || d)
        k = s.let("valid"), r.block$data(k, f);
      else {
        if (!Array.isArray(y))
          throw new Error("ajv implementation error");
        const u = s.const("vSchema", h);
        k = (0, e.or)(...y.map((g, w) => m(u, w)));
      }
      r.pass(k);
      function f() {
        s.assign(k, !1), s.forOf("v", h, (u) => s.if((0, e._)`${S()}(${a}, ${u})`, () => s.assign(k, !0).break()));
      }
      function m(u, g) {
        const w = y[g];
        return typeof w == "object" && w !== null ? (0, e._)`${S()}(${a}, ${u}[${g}])` : (0, e._)`${a} === ${w}`;
      }
    }
  };
  return Rt.default = c, Rt;
}
var Vr;
function Wi() {
  if (Vr) return yt;
  Vr = 1, Object.defineProperty(yt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Di(), t = /* @__PURE__ */ qi(), n = /* @__PURE__ */ Bi(), o = /* @__PURE__ */ Fi(), c = /* @__PURE__ */ Li(), r = /* @__PURE__ */ Ui(), s = /* @__PURE__ */ Ki(), a = /* @__PURE__ */ Gi(), d = /* @__PURE__ */ Hi(), y = /* @__PURE__ */ Ji(), h = [
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
    a.default,
    // any
    { keyword: "type", schemaType: ["string", "array"] },
    { keyword: "nullable", schemaType: "boolean" },
    d.default,
    y.default
  ];
  return yt.default = h, yt;
}
var At = {}, Fe = {}, Br;
function Bo() {
  if (Br) return Fe;
  Br = 1, Object.defineProperty(Fe, "__esModule", { value: !0 }), Fe.validateAdditionalItems = void 0;
  const e = /* @__PURE__ */ J(), t = /* @__PURE__ */ Z(), o = {
    keyword: "additionalItems",
    type: "array",
    schemaType: ["boolean", "object"],
    before: "uniqueItems",
    error: {
      message: ({ params: { len: r } }) => (0, e.str)`must NOT have more than ${r} items`,
      params: ({ params: { len: r } }) => (0, e._)`{limit: ${r}}`
    },
    code(r) {
      const { parentSchema: s, it: a } = r, { items: d } = s;
      if (!Array.isArray(d)) {
        (0, t.checkStrictMode)(a, '"additionalItems" is ignored when "items" is not an array of schemas');
        return;
      }
      c(r, d);
    }
  };
  function c(r, s) {
    const { gen: a, schema: d, data: y, keyword: h, it: _ } = r;
    _.items = !0;
    const $ = a.const("len", (0, e._)`${y}.length`);
    if (d === !1)
      r.setParams({ len: s.length }), r.pass((0, e._)`${$} <= ${s.length}`);
    else if (typeof d == "object" && !(0, t.alwaysValidSchema)(_, d)) {
      const S = a.var("valid", (0, e._)`${$} <= ${s.length}`);
      a.if((0, e.not)(S), () => b(S)), r.ok(S);
    }
    function b(S) {
      a.forRange("i", s.length, $, (k) => {
        r.subschema({ keyword: h, dataProp: k, dataPropType: t.Type.Num }, S), _.allErrors || a.if((0, e.not)(S), () => a.break());
      });
    }
  }
  return Fe.validateAdditionalItems = c, Fe.default = o, Fe;
}
var Nt = {}, Le = {}, Fr;
function Fo() {
  if (Fr) return Le;
  Fr = 1, Object.defineProperty(Le, "__esModule", { value: !0 }), Le.validateTuple = void 0;
  const e = /* @__PURE__ */ J(), t = /* @__PURE__ */ Z(), n = /* @__PURE__ */ Ce(), o = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "array", "boolean"],
    before: "uniqueItems",
    code(r) {
      const { schema: s, it: a } = r;
      if (Array.isArray(s))
        return c(r, "additionalItems", s);
      a.items = !0, !(0, t.alwaysValidSchema)(a, s) && r.ok((0, n.validateArray)(r));
    }
  };
  function c(r, s, a = r.schema) {
    const { gen: d, parentSchema: y, data: h, keyword: _, it: $ } = r;
    k(y), $.opts.unevaluated && a.length && $.items !== !0 && ($.items = t.mergeEvaluated.items(d, a.length, $.items));
    const b = d.name("valid"), S = d.const("len", (0, e._)`${h}.length`);
    a.forEach((f, m) => {
      (0, t.alwaysValidSchema)($, f) || (d.if((0, e._)`${S} > ${m}`, () => r.subschema({
        keyword: _,
        schemaProp: m,
        dataProp: m
      }, b)), r.ok(b));
    });
    function k(f) {
      const { opts: m, errSchemaPath: u } = $, g = a.length, w = g === f.minItems && (g === f.maxItems || f[s] === !1);
      if (m.strictTuples && !w) {
        const i = `"${_}" is ${g}-tuple, but minItems or maxItems/${s} are not specified or different at path "${u}"`;
        (0, t.checkStrictMode)($, i, m.strictTuples);
      }
    }
  }
  return Le.validateTuple = c, Le.default = o, Le;
}
var Lr;
function Yi() {
  if (Lr) return Nt;
  Lr = 1, Object.defineProperty(Nt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Fo(), t = {
    keyword: "prefixItems",
    type: "array",
    schemaType: ["array"],
    before: "uniqueItems",
    code: (n) => (0, e.validateTuple)(n, "items")
  };
  return Nt.default = t, Nt;
}
var jt = {}, Ur;
function Xi() {
  if (Ur) return jt;
  Ur = 1, Object.defineProperty(jt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ J(), t = /* @__PURE__ */ Z(), n = /* @__PURE__ */ Ce(), o = /* @__PURE__ */ Bo(), r = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    error: {
      message: ({ params: { len: s } }) => (0, e.str)`must NOT have more than ${s} items`,
      params: ({ params: { len: s } }) => (0, e._)`{limit: ${s}}`
    },
    code(s) {
      const { schema: a, parentSchema: d, it: y } = s, { prefixItems: h } = d;
      y.items = !0, !(0, t.alwaysValidSchema)(y, a) && (h ? (0, o.validateAdditionalItems)(s, h) : s.ok((0, n.validateArray)(s)));
    }
  };
  return jt.default = r, jt;
}
var Mt = {}, Kr;
function Zi() {
  if (Kr) return Mt;
  Kr = 1, Object.defineProperty(Mt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ J(), t = /* @__PURE__ */ Z(), o = {
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
      const { gen: r, schema: s, parentSchema: a, data: d, it: y } = c;
      let h, _;
      const { minContains: $, maxContains: b } = a;
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
      if ((0, t.alwaysValidSchema)(y, s)) {
        let g = (0, e._)`${S} >= ${h}`;
        _ !== void 0 && (g = (0, e._)`${g} && ${S} <= ${_}`), c.pass(g);
        return;
      }
      y.items = !0;
      const k = r.name("valid");
      _ === void 0 && h === 1 ? m(k, () => r.if(k, () => r.break())) : h === 0 ? (r.let(k, !0), _ !== void 0 && r.if((0, e._)`${d}.length > 0`, f)) : (r.let(k, !1), f()), c.result(k, () => c.reset());
      function f() {
        const g = r.name("_valid"), w = r.let("count", 0);
        m(g, () => r.if(g, () => u(w)));
      }
      function m(g, w) {
        r.forRange("i", 0, S, (i) => {
          c.subschema({
            keyword: "contains",
            dataProp: i,
            dataPropType: t.Type.Num,
            compositeRule: !0
          }, g), w();
        });
      }
      function u(g) {
        r.code((0, e._)`${g}++`), _ === void 0 ? r.if((0, e._)`${g} >= ${h}`, () => r.assign(k, !0).break()) : (r.if((0, e._)`${g} > ${_}`, () => r.assign(k, !1).break()), h === 1 ? r.assign(k, !0) : r.if((0, e._)`${g} >= ${h}`, () => r.assign(k, !0)));
      }
    }
  };
  return Mt.default = o, Mt;
}
var Rn = {}, Gr;
function qn() {
  return Gr || (Gr = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
    const t = /* @__PURE__ */ J(), n = /* @__PURE__ */ Z(), o = /* @__PURE__ */ Ce();
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
        s(d, y), a(d, h);
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
    function s(d, y = d.schema) {
      const { gen: h, data: _, it: $ } = d;
      if (Object.keys(y).length === 0)
        return;
      const b = h.let("missing");
      for (const S in y) {
        const k = y[S];
        if (k.length === 0)
          continue;
        const f = (0, o.propertyInData)(h, _, S, $.opts.ownProperties);
        d.setParams({
          property: S,
          depsCount: k.length,
          deps: k.join(", ")
        }), $.allErrors ? h.if(f, () => {
          for (const m of k)
            (0, o.checkReportMissingProp)(d, m);
        }) : (h.if((0, t._)`${f} && (${(0, o.checkMissingProp)(d, k, b)})`), (0, o.reportMissingProp)(d, b), h.else());
      }
    }
    e.validatePropertyDeps = s;
    function a(d, y = d.schema) {
      const { gen: h, data: _, keyword: $, it: b } = d, S = h.name("valid");
      for (const k in y)
        (0, n.alwaysValidSchema)(b, y[k]) || (h.if(
          (0, o.propertyInData)(h, _, k, b.opts.ownProperties),
          () => {
            const f = d.subschema({ keyword: $, schemaProp: k }, S);
            d.mergeValidEvaluated(f, S);
          },
          () => h.var(S, !0)
          // TODO var
        ), d.ok(S));
    }
    e.validateSchemaDeps = a, e.default = c;
  })(Rn)), Rn;
}
var Ot = {}, Hr;
function Qi() {
  if (Hr) return Ot;
  Hr = 1, Object.defineProperty(Ot, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ J(), t = /* @__PURE__ */ Z(), o = {
    keyword: "propertyNames",
    type: "object",
    schemaType: ["object", "boolean"],
    error: {
      message: "property name must be valid",
      params: ({ params: c }) => (0, e._)`{propertyName: ${c.propertyName}}`
    },
    code(c) {
      const { gen: r, schema: s, data: a, it: d } = c;
      if ((0, t.alwaysValidSchema)(d, s))
        return;
      const y = r.name("valid");
      r.forIn("key", a, (h) => {
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
  return Ot.default = o, Ot;
}
var Tt = {}, Jr;
function Lo() {
  if (Jr) return Tt;
  Jr = 1, Object.defineProperty(Tt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ce(), t = /* @__PURE__ */ J(), n = /* @__PURE__ */ ke(), o = /* @__PURE__ */ Z(), r = {
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
      const { gen: a, schema: d, parentSchema: y, data: h, errsCount: _, it: $ } = s;
      if (!_)
        throw new Error("ajv implementation error");
      const { allErrors: b, opts: S } = $;
      if ($.props = !0, S.removeAdditional !== "all" && (0, o.alwaysValidSchema)($, d))
        return;
      const k = (0, e.allSchemaProperties)(y.properties), f = (0, e.allSchemaProperties)(y.patternProperties);
      m(), s.ok((0, t._)`${_} === ${n.default.errors}`);
      function m() {
        a.forIn("key", h, (l) => {
          !k.length && !f.length ? w(l) : a.if(u(l), () => w(l));
        });
      }
      function u(l) {
        let p;
        if (k.length > 8) {
          const C = (0, o.schemaRefOrVal)($, y.properties, "properties");
          p = (0, e.isOwnProperty)(a, C, l);
        } else k.length ? p = (0, t.or)(...k.map((C) => (0, t._)`${l} === ${C}`)) : p = t.nil;
        return f.length && (p = (0, t.or)(p, ...f.map((C) => (0, t._)`${(0, e.usePattern)(s, C)}.test(${l})`))), (0, t.not)(p);
      }
      function g(l) {
        a.code((0, t._)`delete ${h}[${l}]`);
      }
      function w(l) {
        if (S.removeAdditional === "all" || S.removeAdditional && d === !1) {
          g(l);
          return;
        }
        if (d === !1) {
          s.setParams({ additionalProperty: l }), s.error(), b || a.break();
          return;
        }
        if (typeof d == "object" && !(0, o.alwaysValidSchema)($, d)) {
          const p = a.name("valid");
          S.removeAdditional === "failing" ? (i(l, p, !1), a.if((0, t.not)(p), () => {
            s.reset(), g(l);
          })) : (i(l, p), b || a.if((0, t.not)(p), () => a.break()));
        }
      }
      function i(l, p, C) {
        const P = {
          keyword: "additionalProperties",
          dataProp: l,
          dataPropType: o.Type.Str
        };
        C === !1 && Object.assign(P, {
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }), s.subschema(P, p);
      }
    }
  };
  return Tt.default = r, Tt;
}
var zt = {}, Wr;
function es() {
  if (Wr) return zt;
  Wr = 1, Object.defineProperty(zt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ hn(), t = /* @__PURE__ */ Ce(), n = /* @__PURE__ */ Z(), o = /* @__PURE__ */ Lo(), c = {
    keyword: "properties",
    type: "object",
    schemaType: "object",
    code(r) {
      const { gen: s, schema: a, parentSchema: d, data: y, it: h } = r;
      h.opts.removeAdditional === "all" && d.additionalProperties === void 0 && o.default.code(new e.KeywordCxt(h, o.default, "additionalProperties"));
      const _ = (0, t.allSchemaProperties)(a);
      for (const f of _)
        h.definedProperties.add(f);
      h.opts.unevaluated && _.length && h.props !== !0 && (h.props = n.mergeEvaluated.props(s, (0, n.toHash)(_), h.props));
      const $ = _.filter((f) => !(0, n.alwaysValidSchema)(h, a[f]));
      if ($.length === 0)
        return;
      const b = s.name("valid");
      for (const f of $)
        S(f) ? k(f) : (s.if((0, t.propertyInData)(s, y, f, h.opts.ownProperties)), k(f), h.allErrors || s.else().var(b, !0), s.endIf()), r.it.definedProperties.add(f), r.ok(b);
      function S(f) {
        return h.opts.useDefaults && !h.compositeRule && a[f].default !== void 0;
      }
      function k(f) {
        r.subschema({
          keyword: "properties",
          schemaProp: f,
          dataProp: f
        }, b);
      }
    }
  };
  return zt.default = c, zt;
}
var It = {}, Yr;
function ts() {
  if (Yr) return It;
  Yr = 1, Object.defineProperty(It, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ce(), t = /* @__PURE__ */ J(), n = /* @__PURE__ */ Z(), o = /* @__PURE__ */ Z(), c = {
    keyword: "patternProperties",
    type: "object",
    schemaType: "object",
    code(r) {
      const { gen: s, schema: a, data: d, parentSchema: y, it: h } = r, { opts: _ } = h, $ = (0, e.allSchemaProperties)(a), b = $.filter((w) => (0, n.alwaysValidSchema)(h, a[w]));
      if ($.length === 0 || b.length === $.length && (!h.opts.unevaluated || h.props === !0))
        return;
      const S = _.strictSchema && !_.allowMatchingProperties && y.properties, k = s.name("valid");
      h.props !== !0 && !(h.props instanceof t.Name) && (h.props = (0, o.evaluatedPropsToName)(s, h.props));
      const { props: f } = h;
      m();
      function m() {
        for (const w of $)
          S && u(w), h.allErrors ? g(w) : (s.var(k, !0), g(w), s.if(k));
      }
      function u(w) {
        for (const i in S)
          new RegExp(w).test(i) && (0, n.checkStrictMode)(h, `property ${i} matches pattern ${w} (use allowMatchingProperties)`);
      }
      function g(w) {
        s.forIn("key", d, (i) => {
          s.if((0, t._)`${(0, e.usePattern)(r, w)}.test(${i})`, () => {
            const l = b.includes(w);
            l || r.subschema({
              keyword: "patternProperties",
              schemaProp: w,
              dataProp: i,
              dataPropType: o.Type.Str
            }, k), h.opts.unevaluated && f !== !0 ? s.assign((0, t._)`${f}[${i}]`, !0) : !l && !h.allErrors && s.if((0, t.not)(k), () => s.break());
          });
        });
      }
    }
  };
  return It.default = c, It;
}
var Dt = {}, Xr;
function ns() {
  if (Xr) return Dt;
  Xr = 1, Object.defineProperty(Dt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Z(), t = {
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
  return Dt.default = t, Dt;
}
var qt = {}, Zr;
function rs() {
  if (Zr) return qt;
  Zr = 1, Object.defineProperty(qt, "__esModule", { value: !0 });
  const t = {
    keyword: "anyOf",
    schemaType: "array",
    trackErrors: !0,
    code: (/* @__PURE__ */ Ce()).validateUnion,
    error: { message: "must match a schema in anyOf" }
  };
  return qt.default = t, qt;
}
var Vt = {}, Qr;
function os() {
  if (Qr) return Vt;
  Qr = 1, Object.defineProperty(Vt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ J(), t = /* @__PURE__ */ Z(), o = {
    keyword: "oneOf",
    schemaType: "array",
    trackErrors: !0,
    error: {
      message: "must match exactly one schema in oneOf",
      params: ({ params: c }) => (0, e._)`{passingSchemas: ${c.passing}}`
    },
    code(c) {
      const { gen: r, schema: s, parentSchema: a, it: d } = c;
      if (!Array.isArray(s))
        throw new Error("ajv implementation error");
      if (d.opts.discriminator && a.discriminator)
        return;
      const y = s, h = r.let("valid", !1), _ = r.let("passing", null), $ = r.name("_valid");
      c.setParams({ passing: _ }), r.block(b), c.result(h, () => c.reset(), () => c.error(!0));
      function b() {
        y.forEach((S, k) => {
          let f;
          (0, t.alwaysValidSchema)(d, S) ? r.var($, !0) : f = c.subschema({
            keyword: "oneOf",
            schemaProp: k,
            compositeRule: !0
          }, $), k > 0 && r.if((0, e._)`${$} && ${h}`).assign(h, !1).assign(_, (0, e._)`[${_}, ${k}]`).else(), r.if($, () => {
            r.assign(h, !0), r.assign(_, k), f && c.mergeEvaluated(f, e.Name);
          });
        });
      }
    }
  };
  return Vt.default = o, Vt;
}
var Bt = {}, eo;
function is() {
  if (eo) return Bt;
  eo = 1, Object.defineProperty(Bt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Z(), t = {
    keyword: "allOf",
    schemaType: "array",
    code(n) {
      const { gen: o, schema: c, it: r } = n;
      if (!Array.isArray(c))
        throw new Error("ajv implementation error");
      const s = o.name("valid");
      c.forEach((a, d) => {
        if ((0, e.alwaysValidSchema)(r, a))
          return;
        const y = n.subschema({ keyword: "allOf", schemaProp: d }, s);
        n.ok(s), n.mergeEvaluated(y);
      });
    }
  };
  return Bt.default = t, Bt;
}
var Ft = {}, to;
function ss() {
  if (to) return Ft;
  to = 1, Object.defineProperty(Ft, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ J(), t = /* @__PURE__ */ Z(), o = {
    keyword: "if",
    schemaType: ["object", "boolean"],
    trackErrors: !0,
    error: {
      message: ({ params: r }) => (0, e.str)`must match "${r.ifClause}" schema`,
      params: ({ params: r }) => (0, e._)`{failingKeyword: ${r.ifClause}}`
    },
    code(r) {
      const { gen: s, parentSchema: a, it: d } = r;
      a.then === void 0 && a.else === void 0 && (0, t.checkStrictMode)(d, '"if" without "then" and "else" is ignored');
      const y = c(d, "then"), h = c(d, "else");
      if (!y && !h)
        return;
      const _ = s.let("valid", !0), $ = s.name("_valid");
      if (b(), r.reset(), y && h) {
        const k = s.let("ifClause");
        r.setParams({ ifClause: k }), s.if($, S("then", k), S("else", k));
      } else y ? s.if($, S("then")) : s.if((0, e.not)($), S("else"));
      r.pass(_, () => r.error(!0));
      function b() {
        const k = r.subschema({
          keyword: "if",
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }, $);
        r.mergeEvaluated(k);
      }
      function S(k, f) {
        return () => {
          const m = r.subschema({ keyword: k }, $);
          s.assign(_, $), r.mergeValidEvaluated(m, _), f ? s.assign(f, (0, e._)`${k}`) : r.setParams({ ifClause: k });
        };
      }
    }
  };
  function c(r, s) {
    const a = r.schema[s];
    return a !== void 0 && !(0, t.alwaysValidSchema)(r, a);
  }
  return Ft.default = o, Ft;
}
var Lt = {}, no;
function as() {
  if (no) return Lt;
  no = 1, Object.defineProperty(Lt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Z(), t = {
    keyword: ["then", "else"],
    schemaType: ["object", "boolean"],
    code({ keyword: n, parentSchema: o, it: c }) {
      o.if === void 0 && (0, e.checkStrictMode)(c, `"${n}" without "if" is ignored`);
    }
  };
  return Lt.default = t, Lt;
}
var ro;
function cs() {
  if (ro) return At;
  ro = 1, Object.defineProperty(At, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Bo(), t = /* @__PURE__ */ Yi(), n = /* @__PURE__ */ Fo(), o = /* @__PURE__ */ Xi(), c = /* @__PURE__ */ Zi(), r = /* @__PURE__ */ qn(), s = /* @__PURE__ */ Qi(), a = /* @__PURE__ */ Lo(), d = /* @__PURE__ */ es(), y = /* @__PURE__ */ ts(), h = /* @__PURE__ */ ns(), _ = /* @__PURE__ */ rs(), $ = /* @__PURE__ */ os(), b = /* @__PURE__ */ is(), S = /* @__PURE__ */ ss(), k = /* @__PURE__ */ as();
  function f(m = !1) {
    const u = [
      // any
      h.default,
      _.default,
      $.default,
      b.default,
      S.default,
      k.default,
      // object
      s.default,
      a.default,
      r.default,
      d.default,
      y.default
    ];
    return m ? u.push(t.default, o.default) : u.push(e.default, n.default), u.push(c.default), u;
  }
  return At.default = f, At;
}
var Ut = {}, Ue = {}, oo;
function Uo() {
  if (oo) return Ue;
  oo = 1, Object.defineProperty(Ue, "__esModule", { value: !0 }), Ue.dynamicAnchor = void 0;
  const e = /* @__PURE__ */ J(), t = /* @__PURE__ */ ke(), n = /* @__PURE__ */ gn(), o = /* @__PURE__ */ In(), c = {
    keyword: "$dynamicAnchor",
    schemaType: "string",
    code: (a) => r(a, a.schema)
  };
  function r(a, d) {
    const { gen: y, it: h } = a;
    h.schemaEnv.root.dynamicAnchors[d] = !0;
    const _ = (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(d)}`, $ = h.errSchemaPath === "#" ? h.validateName : s(a);
    y.if((0, e._)`!${_}`, () => y.assign(_, $));
  }
  Ue.dynamicAnchor = r;
  function s(a) {
    const { schemaEnv: d, schema: y, self: h } = a.it, { root: _, baseId: $, localRefs: b, meta: S } = d.root, { schemaId: k } = h.opts, f = new n.SchemaEnv({ schema: y, schemaId: k, root: _, baseId: $, localRefs: b, meta: S });
    return n.compileSchema.call(h, f), (0, o.getValidate)(a, f);
  }
  return Ue.default = c, Ue;
}
var Ke = {}, io;
function Ko() {
  if (io) return Ke;
  io = 1, Object.defineProperty(Ke, "__esModule", { value: !0 }), Ke.dynamicRef = void 0;
  const e = /* @__PURE__ */ J(), t = /* @__PURE__ */ ke(), n = /* @__PURE__ */ In(), o = {
    keyword: "$dynamicRef",
    schemaType: "string",
    code: (r) => c(r, r.schema)
  };
  function c(r, s) {
    const { gen: a, keyword: d, it: y } = r;
    if (s[0] !== "#")
      throw new Error(`"${d}" only supports hash fragment reference`);
    const h = s.slice(1);
    if (y.allErrors)
      _();
    else {
      const b = a.let("valid", !1);
      _(b), r.ok(b);
    }
    function _(b) {
      if (y.schemaEnv.root.dynamicAnchors[h]) {
        const S = a.let("_v", (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(h)}`);
        a.if(S, $(S, b), $(y.validateName, b));
      } else
        $(y.validateName, b)();
    }
    function $(b, S) {
      return S ? () => a.block(() => {
        (0, n.callRef)(r, b), a.let(S, !0);
      }) : () => (0, n.callRef)(r, b);
    }
  }
  return Ke.dynamicRef = c, Ke.default = o, Ke;
}
var Kt = {}, so;
function ls() {
  if (so) return Kt;
  so = 1, Object.defineProperty(Kt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Uo(), t = /* @__PURE__ */ Z(), n = {
    keyword: "$recursiveAnchor",
    schemaType: "boolean",
    code(o) {
      o.schema ? (0, e.dynamicAnchor)(o, "") : (0, t.checkStrictMode)(o.it, "$recursiveAnchor: false is ignored");
    }
  };
  return Kt.default = n, Kt;
}
var Gt = {}, ao;
function ds() {
  if (ao) return Gt;
  ao = 1, Object.defineProperty(Gt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ko(), t = {
    keyword: "$recursiveRef",
    schemaType: "string",
    code: (n) => (0, e.dynamicRef)(n, n.schema)
  };
  return Gt.default = t, Gt;
}
var co;
function us() {
  if (co) return Ut;
  co = 1, Object.defineProperty(Ut, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Uo(), t = /* @__PURE__ */ Ko(), n = /* @__PURE__ */ ls(), o = /* @__PURE__ */ ds(), c = [e.default, t.default, n.default, o.default];
  return Ut.default = c, Ut;
}
var Ht = {}, Jt = {}, lo;
function fs() {
  if (lo) return Jt;
  lo = 1, Object.defineProperty(Jt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ qn(), t = {
    keyword: "dependentRequired",
    type: "object",
    schemaType: "object",
    error: e.error,
    code: (n) => (0, e.validatePropertyDeps)(n)
  };
  return Jt.default = t, Jt;
}
var Wt = {}, uo;
function ps() {
  if (uo) return Wt;
  uo = 1, Object.defineProperty(Wt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ qn(), t = {
    keyword: "dependentSchemas",
    type: "object",
    schemaType: "object",
    code: (n) => (0, e.validateSchemaDeps)(n)
  };
  return Wt.default = t, Wt;
}
var Yt = {}, fo;
function hs() {
  if (fo) return Yt;
  fo = 1, Object.defineProperty(Yt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Z(), t = {
    keyword: ["maxContains", "minContains"],
    type: "array",
    schemaType: "number",
    code({ keyword: n, parentSchema: o, it: c }) {
      o.contains === void 0 && (0, e.checkStrictMode)(c, `"${n}" without "contains" is ignored`);
    }
  };
  return Yt.default = t, Yt;
}
var po;
function ms() {
  if (po) return Ht;
  po = 1, Object.defineProperty(Ht, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ fs(), t = /* @__PURE__ */ ps(), n = /* @__PURE__ */ hs(), o = [e.default, t.default, n.default];
  return Ht.default = o, Ht;
}
var Xt = {}, Zt = {}, ho;
function gs() {
  if (ho) return Zt;
  ho = 1, Object.defineProperty(Zt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ J(), t = /* @__PURE__ */ Z(), n = /* @__PURE__ */ ke(), c = {
    keyword: "unevaluatedProperties",
    type: "object",
    schemaType: ["boolean", "object"],
    trackErrors: !0,
    error: {
      message: "must NOT have unevaluated properties",
      params: ({ params: r }) => (0, e._)`{unevaluatedProperty: ${r.unevaluatedProperty}}`
    },
    code(r) {
      const { gen: s, schema: a, data: d, errsCount: y, it: h } = r;
      if (!y)
        throw new Error("ajv implementation error");
      const { allErrors: _, props: $ } = h;
      $ instanceof e.Name ? s.if((0, e._)`${$} !== true`, () => s.forIn("key", d, (f) => s.if(S($, f), () => b(f)))) : $ !== !0 && s.forIn("key", d, (f) => $ === void 0 ? b(f) : s.if(k($, f), () => b(f))), h.props = !0, r.ok((0, e._)`${y} === ${n.default.errors}`);
      function b(f) {
        if (a === !1) {
          r.setParams({ unevaluatedProperty: f }), r.error(), _ || s.break();
          return;
        }
        if (!(0, t.alwaysValidSchema)(h, a)) {
          const m = s.name("valid");
          r.subschema({
            keyword: "unevaluatedProperties",
            dataProp: f,
            dataPropType: t.Type.Str
          }, m), _ || s.if((0, e.not)(m), () => s.break());
        }
      }
      function S(f, m) {
        return (0, e._)`!${f} || !${f}[${m}]`;
      }
      function k(f, m) {
        const u = [];
        for (const g in f)
          f[g] === !0 && u.push((0, e._)`${m} !== ${g}`);
        return (0, e.and)(...u);
      }
    }
  };
  return Zt.default = c, Zt;
}
var Qt = {}, mo;
function ys() {
  if (mo) return Qt;
  mo = 1, Object.defineProperty(Qt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ J(), t = /* @__PURE__ */ Z(), o = {
    keyword: "unevaluatedItems",
    type: "array",
    schemaType: ["boolean", "object"],
    error: {
      message: ({ params: { len: c } }) => (0, e.str)`must NOT have more than ${c} items`,
      params: ({ params: { len: c } }) => (0, e._)`{limit: ${c}}`
    },
    code(c) {
      const { gen: r, schema: s, data: a, it: d } = c, y = d.items || 0;
      if (y === !0)
        return;
      const h = r.const("len", (0, e._)`${a}.length`);
      if (s === !1)
        c.setParams({ len: y }), c.fail((0, e._)`${h} > ${y}`);
      else if (typeof s == "object" && !(0, t.alwaysValidSchema)(d, s)) {
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
  return Qt.default = o, Qt;
}
var go;
function vs() {
  if (go) return Xt;
  go = 1, Object.defineProperty(Xt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ gs(), t = /* @__PURE__ */ ys(), n = [e.default, t.default];
  return Xt.default = n, Xt;
}
var en = {}, tn = {}, yo;
function $s() {
  if (yo) return tn;
  yo = 1, Object.defineProperty(tn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ J(), n = {
    keyword: "format",
    type: ["number", "string"],
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: o }) => (0, e.str)`must match format "${o}"`,
      params: ({ schemaCode: o }) => (0, e._)`{format: ${o}}`
    },
    code(o, c) {
      const { gen: r, data: s, $data: a, schema: d, schemaCode: y, it: h } = o, { opts: _, errSchemaPath: $, schemaEnv: b, self: S } = h;
      if (!_.validateFormats)
        return;
      a ? k() : f();
      function k() {
        const m = r.scopeValue("formats", {
          ref: S.formats,
          code: _.code.formats
        }), u = r.const("fDef", (0, e._)`${m}[${y}]`), g = r.let("fType"), w = r.let("format");
        r.if((0, e._)`typeof ${u} == "object" && !(${u} instanceof RegExp)`, () => r.assign(g, (0, e._)`${u}.type || "string"`).assign(w, (0, e._)`${u}.validate`), () => r.assign(g, (0, e._)`"string"`).assign(w, u)), o.fail$data((0, e.or)(i(), l()));
        function i() {
          return _.strictSchema === !1 ? e.nil : (0, e._)`${y} && !${w}`;
        }
        function l() {
          const p = b.$async ? (0, e._)`(${u}.async ? await ${w}(${s}) : ${w}(${s}))` : (0, e._)`${w}(${s})`, C = (0, e._)`(typeof ${w} == "function" ? ${p} : ${w}.test(${s}))`;
          return (0, e._)`${w} && ${w} !== true && ${g} === ${c} && !${C}`;
        }
      }
      function f() {
        const m = S.formats[d];
        if (!m) {
          i();
          return;
        }
        if (m === !0)
          return;
        const [u, g, w] = l(m);
        u === c && o.pass(p());
        function i() {
          if (_.strictSchema === !1) {
            S.logger.warn(C());
            return;
          }
          throw new Error(C());
          function C() {
            return `unknown format "${d}" ignored in schema at path "${$}"`;
          }
        }
        function l(C) {
          const P = C instanceof RegExp ? (0, e.regexpCode)(C) : _.code.formats ? (0, e._)`${_.code.formats}${(0, e.getProperty)(d)}` : void 0, A = r.scopeValue("formats", { key: d, ref: C, code: P });
          return typeof C == "object" && !(C instanceof RegExp) ? [C.type || "string", C.validate, (0, e._)`${A}.validate`] : ["string", C, A];
        }
        function p() {
          if (typeof m == "object" && !(m instanceof RegExp) && m.async) {
            if (!b.$async)
              throw new Error("async format in sync schema");
            return (0, e._)`await ${w}(${s})`;
          }
          return typeof g == "function" ? (0, e._)`${w}(${s})` : (0, e._)`${w}.test(${s})`;
        }
      }
    }
  };
  return tn.default = n, tn;
}
var vo;
function bs() {
  if (vo) return en;
  vo = 1, Object.defineProperty(en, "__esModule", { value: !0 });
  const t = [(/* @__PURE__ */ $s()).default];
  return en.default = t, en;
}
var ze = {}, $o;
function _s() {
  return $o || ($o = 1, Object.defineProperty(ze, "__esModule", { value: !0 }), ze.contentVocabulary = ze.metadataVocabulary = void 0, ze.metadataVocabulary = [
    "title",
    "description",
    "default",
    "deprecated",
    "readOnly",
    "writeOnly",
    "examples"
  ], ze.contentVocabulary = [
    "contentMediaType",
    "contentEncoding",
    "contentSchema"
  ]), ze;
}
var bo;
function ws() {
  if (bo) return ht;
  bo = 1, Object.defineProperty(ht, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ii(), t = /* @__PURE__ */ Wi(), n = /* @__PURE__ */ cs(), o = /* @__PURE__ */ us(), c = /* @__PURE__ */ ms(), r = /* @__PURE__ */ vs(), s = /* @__PURE__ */ bs(), a = /* @__PURE__ */ _s(), d = [
    o.default,
    e.default,
    t.default,
    (0, n.default)(!0),
    s.default,
    a.metadataVocabulary,
    a.contentVocabulary,
    c.default,
    r.default
  ];
  return ht.default = d, ht;
}
var nn = {}, rt = {}, _o;
function Ss() {
  if (_o) return rt;
  _o = 1, Object.defineProperty(rt, "__esModule", { value: !0 }), rt.DiscrError = void 0;
  var e;
  return (function(t) {
    t.Tag = "tag", t.Mapping = "mapping";
  })(e || (rt.DiscrError = e = {})), rt;
}
var wo;
function ks() {
  if (wo) return nn;
  wo = 1, Object.defineProperty(nn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ J(), t = /* @__PURE__ */ Ss(), n = /* @__PURE__ */ gn(), o = /* @__PURE__ */ mn(), c = /* @__PURE__ */ Z(), s = {
    keyword: "discriminator",
    type: "object",
    schemaType: "object",
    error: {
      message: ({ params: { discrError: a, tagName: d } }) => a === t.DiscrError.Tag ? `tag "${d}" must be string` : `value of tag "${d}" must be in oneOf`,
      params: ({ params: { discrError: a, tag: d, tagName: y } }) => (0, e._)`{error: ${a}, tag: ${y}, tagValue: ${d}}`
    },
    code(a) {
      const { gen: d, data: y, schema: h, parentSchema: _, it: $ } = a, { oneOf: b } = _;
      if (!$.opts.discriminator)
        throw new Error("discriminator: requires discriminator option");
      const S = h.propertyName;
      if (typeof S != "string")
        throw new Error("discriminator: requires propertyName");
      if (h.mapping)
        throw new Error("discriminator: mapping is not supported");
      if (!b)
        throw new Error("discriminator: requires oneOf keyword");
      const k = d.let("valid", !1), f = d.const("tag", (0, e._)`${y}${(0, e.getProperty)(S)}`);
      d.if((0, e._)`typeof ${f} == "string"`, () => m(), () => a.error(!1, { discrError: t.DiscrError.Tag, tag: f, tagName: S })), a.ok(k);
      function m() {
        const w = g();
        d.if(!1);
        for (const i in w)
          d.elseIf((0, e._)`${f} === ${i}`), d.assign(k, u(w[i]));
        d.else(), a.error(!1, { discrError: t.DiscrError.Mapping, tag: f, tagName: S }), d.endIf();
      }
      function u(w) {
        const i = d.name("valid"), l = a.subschema({ keyword: "oneOf", schemaProp: w }, i);
        return a.mergeEvaluated(l, e.Name), i;
      }
      function g() {
        var w;
        const i = {}, l = C(_);
        let p = !0;
        for (let N = 0; N < b.length; N++) {
          let j = b[N];
          if (j?.$ref && !(0, c.schemaHasRulesButRef)(j, $.self.RULES)) {
            const U = j.$ref;
            if (j = n.resolveRef.call($.self, $.schemaEnv.root, $.baseId, U), j instanceof n.SchemaEnv && (j = j.schema), j === void 0)
              throw new o.default($.opts.uriResolver, $.baseId, U);
          }
          const q = (w = j?.properties) === null || w === void 0 ? void 0 : w[S];
          if (typeof q != "object")
            throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${S}"`);
          p = p && (l || C(j)), P(q, N);
        }
        if (!p)
          throw new Error(`discriminator: "${S}" must be required`);
        return i;
        function C({ required: N }) {
          return Array.isArray(N) && N.includes(S);
        }
        function P(N, j) {
          if (N.const)
            A(N.const, j);
          else if (N.enum)
            for (const q of N.enum)
              A(q, j);
          else
            throw new Error(`discriminator: "properties/${S}" must have "const" or "enum"`);
        }
        function A(N, j) {
          if (typeof N != "string" || N in i)
            throw new Error(`discriminator: "${S}" values must be unique strings`);
          i[N] = j;
        }
      }
    }
  };
  return nn.default = s, nn;
}
var rn = {};
const Cs = "https://json-schema.org/draft/2020-12/schema", Es = "https://json-schema.org/draft/2020-12/schema", Ps = { "https://json-schema.org/draft/2020-12/vocab/core": !0, "https://json-schema.org/draft/2020-12/vocab/applicator": !0, "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0, "https://json-schema.org/draft/2020-12/vocab/validation": !0, "https://json-schema.org/draft/2020-12/vocab/meta-data": !0, "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0, "https://json-schema.org/draft/2020-12/vocab/content": !0 }, xs = "meta", Rs = "Core and Validation specifications meta-schema", As = [{ $ref: "meta/core" }, { $ref: "meta/applicator" }, { $ref: "meta/unevaluated" }, { $ref: "meta/validation" }, { $ref: "meta/meta-data" }, { $ref: "meta/format-annotation" }, { $ref: "meta/content" }], Ns = ["object", "boolean"], js = "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.", Ms = { definitions: { $comment: '"definitions" has been replaced by "$defs".', type: "object", additionalProperties: { $dynamicRef: "#meta" }, deprecated: !0, default: {} }, dependencies: { $comment: '"dependencies" has been split and replaced by "dependentSchemas" and "dependentRequired" in order to serve their differing semantics.', type: "object", additionalProperties: { anyOf: [{ $dynamicRef: "#meta" }, { $ref: "meta/validation#/$defs/stringArray" }] }, deprecated: !0, default: {} }, $recursiveAnchor: { $comment: '"$recursiveAnchor" has been replaced by "$dynamicAnchor".', $ref: "meta/core#/$defs/anchorString", deprecated: !0 }, $recursiveRef: { $comment: '"$recursiveRef" has been replaced by "$dynamicRef".', $ref: "meta/core#/$defs/uriReferenceString", deprecated: !0 } }, Os = {
  $schema: Cs,
  $id: Es,
  $vocabulary: Ps,
  $dynamicAnchor: xs,
  title: Rs,
  allOf: As,
  type: Ns,
  $comment: js,
  properties: Ms
}, Ts = "https://json-schema.org/draft/2020-12/schema", zs = "https://json-schema.org/draft/2020-12/meta/applicator", Is = { "https://json-schema.org/draft/2020-12/vocab/applicator": !0 }, Ds = "meta", qs = "Applicator vocabulary meta-schema", Vs = ["object", "boolean"], Bs = { prefixItems: { $ref: "#/$defs/schemaArray" }, items: { $dynamicRef: "#meta" }, contains: { $dynamicRef: "#meta" }, additionalProperties: { $dynamicRef: "#meta" }, properties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, propertyNames: { format: "regex" }, default: {} }, dependentSchemas: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, propertyNames: { $dynamicRef: "#meta" }, if: { $dynamicRef: "#meta" }, then: { $dynamicRef: "#meta" }, else: { $dynamicRef: "#meta" }, allOf: { $ref: "#/$defs/schemaArray" }, anyOf: { $ref: "#/$defs/schemaArray" }, oneOf: { $ref: "#/$defs/schemaArray" }, not: { $dynamicRef: "#meta" } }, Fs = { schemaArray: { type: "array", minItems: 1, items: { $dynamicRef: "#meta" } } }, Ls = {
  $schema: Ts,
  $id: zs,
  $vocabulary: Is,
  $dynamicAnchor: Ds,
  title: qs,
  type: Vs,
  properties: Bs,
  $defs: Fs
}, Us = "https://json-schema.org/draft/2020-12/schema", Ks = "https://json-schema.org/draft/2020-12/meta/unevaluated", Gs = { "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0 }, Hs = "meta", Js = "Unevaluated applicator vocabulary meta-schema", Ws = ["object", "boolean"], Ys = { unevaluatedItems: { $dynamicRef: "#meta" }, unevaluatedProperties: { $dynamicRef: "#meta" } }, Xs = {
  $schema: Us,
  $id: Ks,
  $vocabulary: Gs,
  $dynamicAnchor: Hs,
  title: Js,
  type: Ws,
  properties: Ys
}, Zs = "https://json-schema.org/draft/2020-12/schema", Qs = "https://json-schema.org/draft/2020-12/meta/content", ea = { "https://json-schema.org/draft/2020-12/vocab/content": !0 }, ta = "meta", na = "Content vocabulary meta-schema", ra = ["object", "boolean"], oa = { contentEncoding: { type: "string" }, contentMediaType: { type: "string" }, contentSchema: { $dynamicRef: "#meta" } }, ia = {
  $schema: Zs,
  $id: Qs,
  $vocabulary: ea,
  $dynamicAnchor: ta,
  title: na,
  type: ra,
  properties: oa
}, sa = "https://json-schema.org/draft/2020-12/schema", aa = "https://json-schema.org/draft/2020-12/meta/core", ca = { "https://json-schema.org/draft/2020-12/vocab/core": !0 }, la = "meta", da = "Core vocabulary meta-schema", ua = ["object", "boolean"], fa = { $id: { $ref: "#/$defs/uriReferenceString", $comment: "Non-empty fragments not allowed.", pattern: "^[^#]*#?$" }, $schema: { $ref: "#/$defs/uriString" }, $ref: { $ref: "#/$defs/uriReferenceString" }, $anchor: { $ref: "#/$defs/anchorString" }, $dynamicRef: { $ref: "#/$defs/uriReferenceString" }, $dynamicAnchor: { $ref: "#/$defs/anchorString" }, $vocabulary: { type: "object", propertyNames: { $ref: "#/$defs/uriString" }, additionalProperties: { type: "boolean" } }, $comment: { type: "string" }, $defs: { type: "object", additionalProperties: { $dynamicRef: "#meta" } } }, pa = { anchorString: { type: "string", pattern: "^[A-Za-z_][-A-Za-z0-9._]*$" }, uriString: { type: "string", format: "uri" }, uriReferenceString: { type: "string", format: "uri-reference" } }, ha = {
  $schema: sa,
  $id: aa,
  $vocabulary: ca,
  $dynamicAnchor: la,
  title: da,
  type: ua,
  properties: fa,
  $defs: pa
}, ma = "https://json-schema.org/draft/2020-12/schema", ga = "https://json-schema.org/draft/2020-12/meta/format-annotation", ya = { "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0 }, va = "meta", $a = "Format vocabulary meta-schema for annotation results", ba = ["object", "boolean"], _a = { format: { type: "string" } }, wa = {
  $schema: ma,
  $id: ga,
  $vocabulary: ya,
  $dynamicAnchor: va,
  title: $a,
  type: ba,
  properties: _a
}, Sa = "https://json-schema.org/draft/2020-12/schema", ka = "https://json-schema.org/draft/2020-12/meta/meta-data", Ca = { "https://json-schema.org/draft/2020-12/vocab/meta-data": !0 }, Ea = "meta", Pa = "Meta-data vocabulary meta-schema", xa = ["object", "boolean"], Ra = { title: { type: "string" }, description: { type: "string" }, default: !0, deprecated: { type: "boolean", default: !1 }, readOnly: { type: "boolean", default: !1 }, writeOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 } }, Aa = {
  $schema: Sa,
  $id: ka,
  $vocabulary: Ca,
  $dynamicAnchor: Ea,
  title: Pa,
  type: xa,
  properties: Ra
}, Na = "https://json-schema.org/draft/2020-12/schema", ja = "https://json-schema.org/draft/2020-12/meta/validation", Ma = { "https://json-schema.org/draft/2020-12/vocab/validation": !0 }, Oa = "meta", Ta = "Validation vocabulary meta-schema", za = ["object", "boolean"], Ia = { type: { anyOf: [{ $ref: "#/$defs/simpleTypes" }, { type: "array", items: { $ref: "#/$defs/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, const: !0, enum: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/$defs/nonNegativeInteger" }, minLength: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, maxItems: { $ref: "#/$defs/nonNegativeInteger" }, minItems: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, maxContains: { $ref: "#/$defs/nonNegativeInteger" }, minContains: { $ref: "#/$defs/nonNegativeInteger", default: 1 }, maxProperties: { $ref: "#/$defs/nonNegativeInteger" }, minProperties: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, required: { $ref: "#/$defs/stringArray" }, dependentRequired: { type: "object", additionalProperties: { $ref: "#/$defs/stringArray" } } }, Da = { nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { $ref: "#/$defs/nonNegativeInteger", default: 0 }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, qa = {
  $schema: Na,
  $id: ja,
  $vocabulary: Ma,
  $dynamicAnchor: Oa,
  title: Ta,
  type: za,
  properties: Ia,
  $defs: Da
};
var So;
function Va() {
  if (So) return rn;
  So = 1, Object.defineProperty(rn, "__esModule", { value: !0 });
  const e = Os, t = Ls, n = Xs, o = ia, c = ha, r = wa, s = Aa, a = qa, d = ["/properties"];
  function y(h) {
    return [
      e,
      t,
      n,
      o,
      c,
      _(this, r),
      s,
      _(this, a)
    ].forEach(($) => this.addMetaSchema($, void 0, !1)), this;
    function _($, b) {
      return h ? $.$dataMetaSchema(b, d) : b;
    }
  }
  return rn.default = y, rn;
}
var ko;
function Ba() {
  return ko || (ko = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv2020 = void 0;
    const n = /* @__PURE__ */ Ti(), o = /* @__PURE__ */ ws(), c = /* @__PURE__ */ ks(), r = /* @__PURE__ */ Va(), s = "https://json-schema.org/draft/2020-12/schema";
    class a extends n.default {
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
        S && (r.default.call(this, b), this.refs["http://json-schema.org/schema"] = s);
      }
      defaultMeta() {
        return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(s) ? s : void 0);
      }
    }
    t.Ajv2020 = a, e.exports = t = a, e.exports.Ajv2020 = a, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = a;
    var d = /* @__PURE__ */ hn();
    Object.defineProperty(t, "KeywordCxt", { enumerable: !0, get: function() {
      return d.KeywordCxt;
    } });
    var y = /* @__PURE__ */ J();
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
    var h = /* @__PURE__ */ zn();
    Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
      return h.default;
    } });
    var _ = /* @__PURE__ */ mn();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return _.default;
    } });
  })(lt, lt.exports)), lt.exports;
}
var Fa = /* @__PURE__ */ Ba();
const La = /* @__PURE__ */ $i(Fa), Ua = "https://json-schema.org/draft/2020-12/schema", Ka = "https://raw.githubusercontent.com/omsf-eco-infra/gufe-viz/main/schema/gufe-viz.schema.json", Ga = "gufe-viz payload", Ha = "Python-to-TypeScript contract bridge for gufe visualizations. Source of truth both languages are downstream of it. This schema is not strictly versioned or published as it is only internally consumed by this codebase. Schema description: one schema object per gufe class: every $def named *Viz is the visualization form of exactly one GufeTokenizable, it carries that object's `gufe-key`. Every reference from one gufe object to another is that object's gufe key, and the objects themselves live in the `registry` on the root payload. So a ligand network's nodes are keys, a chemical system's components and a transformation's protocol are keys and each one resolves to a complete, drawable object. An alchemical network whose forty systems share one protein carries that PDB once and points at it forty times, and the browser can still drill into it, because what it points at is a whole ProteinComponentViz. This is a single-shot dump rather than a conversation with a server, so the registry travels with the payload.", Ja = [{ $ref: "#/$defs/SmallMoleculeComponentViz" }, { $ref: "#/$defs/ProteinComponentViz" }, { $ref: "#/$defs/SolvatedPDBComponentViz" }, { $ref: "#/$defs/ProteinMembraneComponentViz" }, { $ref: "#/$defs/SolventComponentViz" }, { $ref: "#/$defs/UnknownComponentViz" }, { $ref: "#/$defs/ProtocolViz" }, { $ref: "#/$defs/LigandAtomMappingViz" }, { $ref: "#/$defs/LigandNetworkViz" }, { $ref: "#/$defs/ChemicalSystemViz" }, { $ref: "#/$defs/TransformationViz" }, { $ref: "#/$defs/AlchemicalNetworkViz" }], Wa = /* @__PURE__ */ JSON.parse('{"GufeKey":{"title":"GufeKey","description":"A gufe key: the identity of a GufeTokenizable, of the form \'ClassName-<hex digest>\'. It is deterministic and repeatable within a software environment. Only its non-emptiness is checked","type":"string","minLength":1},"ComponentKey":{"title":"ComponentKey","description":"A gufe key naming a ComponentViz in the registry. Identical to GufeKey at validation time: JSON Schema has no way to say \'this string is the gufe-key of an entry in that array, and that entry has this type\', because that is a join across two parts of the document. What the name buys is that the referent\'s type is stated in the contract and carried into the generated TypeScript, instead of living only in a test and a view.","$ref":"#/$defs/GufeKey"},"SmallMoleculeComponentKey":{"title":"SmallMoleculeComponentKey","description":"A gufe key naming a SmallMoleculeComponentViz in the registry. Resolving it yields the whole molecule, SDF included. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ChemicalSystemKey":{"title":"ChemicalSystemKey","description":"A gufe key naming a ChemicalSystemViz in the registry. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ProtocolKey":{"title":"ProtocolKey","description":"A gufe key naming a ProtocolViz in the registry. Every transformation of a network usually names the same one. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"Registry":{"title":"Registry","description":"The pool of gufe objects this payload refers to by key, each a complete payload object in its own right. Entries are unique by `gufe-key` and sorted by (type, gufe-key) so a committed fixture is byte-stable. JSON Schema cannot express \'unique by a property\' or \'every reference resolves\', so both are covered by tests on the Python side and degraded over by the views.","type":"array","items":{"oneOf":[{"$ref":"#/$defs/ComponentViz"},{"$ref":"#/$defs/ProtocolViz"},{"$ref":"#/$defs/ChemicalSystemViz"}]}},"ComponentViz":{"title":"ComponentViz","description":"Any single chemical-system component","oneOf":[{"$ref":"#/$defs/SmallMoleculeComponentViz"},{"$ref":"#/$defs/ProteinComponentViz"},{"$ref":"#/$defs/SolvatedPDBComponentViz"},{"$ref":"#/$defs/ProteinMembraneComponentViz"},{"$ref":"#/$defs/SolventComponentViz"},{"$ref":"#/$defs/UnknownComponentViz"}]},"SmallMoleculeComponentViz":{"title":"SmallMoleculeComponentViz","description":"A small molecule, carried as a complete SDF record.","type":"object","properties":{"type":{"const":"SmallMoleculeComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"sdf":{"type":"string","minLength":1,"description":"Complete inline SDF record, including the conformer."},"smiles":{"type":"string"},"total_charge":{"type":"integer","description":"Net formal charge. Displayed, never recomputed from the SDF."}},"required":["type","gufe-key","name","sdf","smiles","total_charge"],"additionalProperties":false},"ProteinComponentViz":{"title":"ProteinComponentViz","description":"A protein, carried as a complete PDB record.","type":"object","properties":{"type":{"const":"ProteinComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolvatedPDBComponentViz":{"title":"SolvatedPDBComponentViz","description":"A protein with explicit solvent. A distinct type rather than a flag on ProteinComponentViz, because the discriminator is what a view dispatches on and the presence of waters changes what a sensible default representation is.","type":"object","properties":{"type":{"const":"SolvatedPDBComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation, including explicit solvent."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"ProteinMembraneComponentViz":{"title":"ProteinMembraneComponentViz","description":"A protein embedded in a membrane.","type":"object","properties":{"type":{"const":"ProteinMembraneComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation of the protein and membrane system."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolventComponentViz":{"title":"SolventComponentViz","description":"Bulk solvent settings. There is no structure to draw, so these are flat fields suitable for rendering as a settings card.","type":"object","properties":{"type":{"const":"SolventComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"smiles":{"type":"string","minLength":1},"positive_ion":{"type":"string"},"negative_ion":{"type":"string"},"neutralize":{"type":"boolean"},"ion_concentration":{"type":"string","description":"Display-form concentration with units, for example \'0.15 molar\'. A string rather than a number because the unit is part of the value and the view only ever prints it."}},"required":["type","gufe-key","name","smiles","positive_ion","negative_ion","neutralize","ion_concentration"],"additionalProperties":false},"UnknownComponentViz":{"title":"UnknownComponentViz","description":"The graceful fallback for a component type this build does not recognize. gufe supports custom Component subclasses, so meeting one is an expected outcome rather than an error, and the browser answers it with \'sorry, there is no visualization for this\'. This covers an unrecognized type only: a recognized component whose serializer fails is a bug, and raises in Python rather than arriving here wearing a disguise.","type":"object","properties":{"type":{"const":"UnknownComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The gufe class name, so the panel can say which type it could not draw."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ProtocolViz":{"title":"ProtocolViz","description":"A gufe Protocol, named. Every transformation in an alchemical network usually shares one, so this is a registry entry that many edges point at rather than a class name repeated per edge. Settings are deliberately absent for now: they are large, deeply nested, and nothing draws them yet, adding a `settings` field later is additive and breaks nothing.","type":"object","properties":{"type":{"const":"ProtocolViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The Protocol\'s class name, which is what identifies it to a reader, a Protocol has no name of its own, so `name` is usually empty."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ChemicalSystemViz":{"title":"ChemicalSystemViz","description":"A gufe ChemicalSystem: labels mapped to the gufe keys of its components.","type":"object","properties":{"type":{"const":"ChemicalSystemViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"components":{"type":"object","description":"ChemicalSystem labels mapped to the gufe keys of the components in the registry.","additionalProperties":{"$ref":"#/$defs/ComponentKey"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","components"],"additionalProperties":false},"AtomMapping":{"title":"AtomMapping","description":"Atom index correspondence from molecule A to molecule B, as a list of index pairs. A list rather than an object keyed by A\'s index, because JSON object keys can only be strings: keying by index would put decimal strings such as \'12\' in the payload and leave both languages casting them back to integers, and it is Python\'s dict-of-int shape only by resemblance. As a list, both indices stay integers, and \'an entry has a B index for every A index\' becomes a `required` the schema states rather than a convention a reader has to trust. Pairs are ordered by `index_A` so a committed fixture is byte-stable.","type":"array","items":{"type":"object","properties":{"index_A":{"type":"integer","minimum":0,"description":"An atom index in molecule A."},"index_B":{"type":"integer","minimum":0,"description":"The atom index in molecule B that it maps to."}},"required":["index_A","index_B"],"additionalProperties":false}},"Annotations":{"title":"Annotations","description":"Free-form mapping metadata. gufe puts nothing here by design and every mapper picks its own keys, so this is deliberately open. Values are whatever survived being made JSON-safe. Displayed but never interpreted, with the single exception of \'score\'.","type":"object"},"LigandAtomMappingViz":{"title":"LigandAtomMappingViz","description":"One atom mapping between two small molecules. This is also what an edge of a ligand network is because the two endpoints are gufe keys either way: standalone they resolve in this object\'s own registry, and in a network they resolve in the network\'s, where they are the same entries the nodes name. `componentA` and `componentB` are the molecules the two sides of `componentA_to_componentB` index into: an `index_A` is an atom of the SmallMoleculeComponentViz that `componentA` names, and an `index_B` an atom of `componentB`\'s.","type":"object","properties":{"type":{"const":"LigandAtomMappingViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"componentA":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentB":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentA_to_componentB":{"$ref":"#/$defs/AtomMapping"},"score":{"type":["number","null"],"description":"The \'score\' annotation when it is a plain number, otherwise null. This is the one annotation key that is interpreted rather than displayed: it drives the edge colouring and the force layout\'s link distance."},"annotations":{"$ref":"#/$defs/Annotations"},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","componentA","componentB","componentA_to_componentB","score","annotations"],"additionalProperties":false},"LigandNetworkViz":{"title":"LigandNetworkViz","description":"A ligand network: the ligands in the registry, the nodes as keys into it, and the mappings as edges. Deliberately not gufe\'s GraphML: that format embeds a gufe to_json moldict per node, so forwarding it would relocate the decoding problem into the browser rather than avoid it.","type":"object","properties":{"type":{"const":"LigandNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ligand, resolved in `registry`.","items":{"$ref":"#/$defs/SmallMoleculeComponentKey"}},"edges":{"type":"array","description":"The mappings, whose `componentA` and `componentB` name nodes of this network. JSON Schema cannot express that referential constraint, so a Python test covers it, and the view drops a dangling edge with a banner rather than failing.","items":{"$ref":"#/$defs/LigandAtomMappingViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false},"TransformationViz":{"title":"TransformationViz","description":"A transformation between two chemical systems, both named by gufe key, as is its protocol: `stateA` is the system it starts from, `stateB` the one it ends at, and every edge of a network usually names the same protocol. This is also what an edge of an alchemical network is (there is no separate edge type) because `stateA` and `stateB` are keys either way, and in a network they are the keys the nodes name. NonTransformation uses this type too: it exposes the same stateA and stateB properties, both its single system, so it renders as a diff with no differences.","type":"object","properties":{"type":{"const":"TransformationViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"protocol":{"$ref":"#/$defs/ProtocolKey"},"stateA":{"$ref":"#/$defs/ChemicalSystemKey"},"stateB":{"$ref":"#/$defs/ChemicalSystemKey"},"mappings":{"type":"array","items":{"$ref":"#/$defs/LigandAtomMappingViz"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","protocol","stateA","stateB","mappings"],"additionalProperties":false},"AlchemicalNetworkViz":{"title":"AlchemicalNetworkViz","description":"A graph of chemical systems joined by transformations. What repeats here is not the nodes and edges themselves but what they are made of: in practice every system shares one protein and every transformation shares one protocol. Both live in the registry, once, as whole objects so this view can show composition and topology while still letting a reader open a node and see the protein.","type":"object","properties":{"type":{"const":"AlchemicalNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ChemicalSystem, resolved in `registry`.","items":{"$ref":"#/$defs/ChemicalSystemKey"}},"edges":{"type":"array","description":"The transformations, whose `stateA` and `stateB` name nodes of this network.","items":{"$ref":"#/$defs/TransformationViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false}}'), Vn = {
  $schema: Ua,
  $id: Ka,
  title: Ga,
  description: Ha,
  oneOf: Ja,
  $defs: Wa
}, cl = [
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
], Bn = Vn.$id, Fn = new La({ allErrors: !0, strict: !1 });
Fn.addSchema(Vn, Bn);
const Co = Fn.getSchema(Bn), Go = Object.entries(Vn.$defs).filter(
  ([e, t]) => t.properties?.type?.const === e
).map(([e]) => e).sort(), ll = Go, Ln = /* @__PURE__ */ new Map();
for (const e of Go) {
  const t = Fn.getSchema(`${Bn}#/$defs/${e}`);
  t && Ln.set(e, t);
}
const jn = { valid: !0, issues: [] };
function Mn(e) {
  return (e ?? []).map((t) => ({
    path: t.instancePath || "",
    message: t.keyword === "additionalProperties" ? `unknown property ${JSON.stringify(t.params.additionalProperty)}` : t.message ?? "is invalid"
  }));
}
function Ya(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return {
      valid: !1,
      issues: [{ path: "", message: "must be a JSON object" }]
    };
  const t = e.type, n = typeof t == "string" ? Ln.get(t) : void 0;
  return n ? n(e) ? jn : { valid: !1, issues: Mn(n.errors) } : Co(e) ? jn : { valid: !1, issues: Mn(Co.errors) };
}
function dl(e, t) {
  const n = Ln.get(e);
  return n ? n(t) ? jn : { valid: !1, issues: Mn(n.errors) } : {
    valid: !1,
    issues: [
      { path: "", message: `unknown payload type ${JSON.stringify(e)}` }
    ]
  };
}
function Xa(e, t = 8) {
  const n = e.slice(0, t).map((o) => `${o.path || "(root)"}: ${o.message}`);
  return e.length > t && n.push(`... and ${e.length - t} more`), n.join(`
`);
}
const Un = {
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
function Ho(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return {
      message: "This does not look like a gufe-viz payload (expected a JSON object)."
    };
  const { type: t } = e;
  if (typeof t != "string" || !t)
    return {
      message: "This payload has no `type`, so there is nothing to say what it is."
    };
  if (!Un[t]) return Za(t);
  const { valid: n, issues: o } = Ya(e);
  return n ? null : {
    message: `This payload says it is a ${t}, but it does not match the gufe-viz schema.`,
    detail: Xa(o)
  };
}
function Za(e) {
  const t = Object.keys(Un).sort().join(", ");
  return {
    message: `Sorry, there is no visualization for ${e} yet. This build can draw: ${t}.`
  };
}
function ul(e) {
  return Ho(e)?.message ?? null;
}
class Qa extends we {
  placeholder() {
    return "Waiting for data...";
  }
  renderView(t, n) {
    yi("payload", n, this);
    const o = Ho(n);
    if (o)
      return t.appendChild(ec(o, n)), {};
    const c = n.type, r = Un[c], s = document.createElement(r);
    return s.style.cssText = "flex:1;min-height:0;min-width:0;", s.payload = n, t.appendChild(s), {
      onResize: () => s.resize?.(),
      // Removing the child fires its own `disconnectedCallback`, which is where
      // its viewers and observers are released
      cleanup: () => s.remove()
    };
  }
}
function ec(e, t) {
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
  const c = tc(t);
  return c && n.appendChild(o(c, !1)), n;
}
function tc(e) {
  if (e == null || typeof e != "object") return null;
  const t = e, n = [];
  typeof t.type == "string" && n.push(`type: ${an(t.type)}`), typeof t.name == "string" && t.name && n.push(`name: ${an(t.name)}`);
  const o = Object.keys(e);
  return o.length && n.push(
    `keys: ${o.slice(0, 12).join(", ")}${o.length > 12 ? ", ..." : ""}`
  ), n.length ? n.join(`
`) : null;
}
Se("gufe-view", Qa);
const Kn = {
  threeDmol: "https://3dmol.org/build/3Dmol-min.js",
  rdkit: "https://unpkg.com/@rdkit/rdkit/dist/RDKit_minimal.js",
  d3: "https://cdn.jsdelivr.net/npm/d3@7/+esm"
};
function Gn(e) {
  const t = globalThis.__gufeEngines?.[e];
  return t ? Promise.resolve(t) : null;
}
function Jo(e, t) {
  return new Promise((n, o) => {
    const c = document.createElement("script");
    c.src = e, c.onload = () => n(), c.onerror = () => o(new Error(`Failed to load ${t}`)), document.head.appendChild(c);
  });
}
let Ye = null, Ge = null;
function Wo() {
  if (Ge) return Ge;
  const e = Gn("threeDmol");
  return e ? (Ge = e.then((t) => Ye = t || window.$3Dmol), Ge) : (Ge = (async () => {
    if (window.$3Dmol) return Ye = window.$3Dmol;
    if (await Jo(Kn.threeDmol, "3Dmol.js"), !window.$3Dmol) throw new Error("3Dmol.js loaded but $3Dmol is undefined");
    return Ye = window.$3Dmol;
  })(), Ge);
}
let He = null;
function Hn() {
  if (He) return He;
  const e = Gn("rdkit");
  return e ? (He = e.then((t) => window.RDKit = t), He) : (He = (async () => {
    if (window.RDKit) return window.RDKit;
    if (await Jo(Kn.rdkit, "RDKit"), !window.initRDKitModule) throw new Error("RDKit loaded but initRDKitModule is undefined");
    return window.RDKit = await window.initRDKitModule();
  })(), He);
}
let An = null;
function Yo() {
  if (!An) {
    const e = Kn.d3;
    An = Gn("d3") ?? import(
      /* @vite-ignore */
      e
    );
  }
  return An;
}
function Xo(e, t) {
  let n = !1, o = !1;
  const c = () => {
    n = !0;
  }, r = () => {
    n = !1;
  }, s = (a) => {
    if (a.stopPropagation(), n || a.ctrlKey || a.metaKey) {
      a.preventDefault(), t.onZoom(a);
      return;
    }
    t.hint && !o && (o = !0, rc(e, t.hint));
  };
  return e.addEventListener("wheel", s, { passive: !1, capture: !0 }), e.addEventListener("pointerdown", c), e.addEventListener("pointerenter", c), e.addEventListener("pointerleave", r), {
    cleanup() {
      e.removeEventListener("wheel", s, { capture: !0 }), e.removeEventListener("pointerdown", c), e.removeEventListener("pointerenter", c), e.removeEventListener("pointerleave", r);
    }
  };
}
const nc = 1600;
function rc(e, t) {
  const n = z(
    "div",
    "position:absolute;bottom:12px;left:50%;transform:translateX(-50%);z-index:30;pointer-events:none;padding:5px 12px;border-radius:6px;font-size:11px;white-space:nowrap;background:rgba(0,0,0,0.72);color:#ffffff;transition:opacity .3s ease;",
    t
  );
  e.appendChild(n), setTimeout(() => {
    n.style.opacity = "0", setTimeout(() => n.remove(), 300);
  }, nc);
}
const oc = { min: 0.25, max: 12 };
function ic(e, t = oc) {
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
const sc = 2e-3;
function ac(e) {
  return Math.exp(-e.deltaY * sc);
}
function Zo(e, t, n = {}) {
  const o = ic(t, n.bounds), c = Xo(e, {
    hint: n.hint ?? "Click or hold Ctrl to zoom",
    onZoom: (r) => o.zoomBy(ac(r))
  });
  return { ...o, cleanup: c.cleanup };
}
function Jn(e, t = "Reset view") {
  const n = z("button", st, "Reset");
  return n.title = t, n.setAttribute("aria-label", t), n.onclick = e, n;
}
const De = {
  elementChange: "#005AB5",
  uniqueAtom: "#DC3220",
  elementChange3D: "0x005AB5",
  uniqueAtom3D: "0xDC3220"
}, fl = [
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
], pl = "hsv", D = [0, 0, 0], cc = {
  0: D,
  1: D,
  2: D,
  3: D,
  4: D,
  5: D,
  6: D,
  7: D,
  8: D,
  9: D,
  10: D,
  11: D,
  12: D,
  13: D,
  14: D,
  15: D,
  16: D,
  17: D,
  18: D,
  19: D,
  20: D,
  21: D,
  22: D,
  23: D,
  24: D,
  25: D,
  26: D,
  27: D,
  28: D,
  29: D,
  30: D,
  31: D,
  32: D,
  33: D,
  34: D,
  35: D,
  36: D,
  37: D,
  38: D,
  39: D,
  40: D,
  41: D,
  42: D,
  43: D,
  44: D,
  45: D,
  46: D,
  47: D,
  48: D,
  49: D,
  50: D,
  51: D,
  52: D,
  53: D,
  54: D,
  55: D,
  56: D,
  57: D,
  58: D,
  59: D,
  60: D,
  61: D,
  62: D,
  63: D,
  64: D,
  65: D,
  66: D,
  67: D,
  68: D,
  69: D,
  70: D,
  71: D,
  72: D,
  73: D,
  74: D,
  75: D,
  76: D,
  77: D,
  78: D,
  79: D,
  80: D,
  81: D,
  82: D,
  83: D,
  84: D,
  85: D,
  86: D,
  87: D,
  88: D,
  89: D,
  90: D,
  91: D,
  92: D,
  93: D,
  94: D,
  95: D,
  96: D,
  97: D,
  98: D,
  99: D,
  100: D,
  101: D,
  102: D,
  103: D,
  104: D,
  105: D,
  106: D,
  107: D,
  108: D,
  109: D,
  110: D,
  111: D,
  112: D,
  113: D,
  114: D,
  115: D,
  116: D,
  117: D,
  118: D
}, lc = {
  atomColourPalette: cc,
  addAtomIndices: !0,
  continuousHighlight: !1
}, Qo = `
`, Eo = "$$$$";
function Po(e, t) {
  if (!e || !e.trim()) throw new Error("empty SDF");
  const n = e.replace(/\r/g, "").split(Qo);
  if (n.length < 4) throw new Error("SDF too short");
  const o = n[3];
  if (o.indexOf("V3000") !== -1) throw new Error("V3000 molfiles are not supported");
  const c = parseInt(o.substring(0, 3), 10), r = parseInt(o.substring(3, 6), 10);
  if (!isFinite(c) || c <= 0) throw new Error(`bad counts line: ${o}`);
  const s = [], a = [];
  for (let h = 0; h < c; h++) {
    const _ = n[4 + h];
    if (_ == null) throw new Error("truncated atom block");
    s.push([
      parseFloat(_.substring(0, 10)) || 0,
      parseFloat(_.substring(10, 20)) || 0,
      parseFloat(_.substring(20, 30)) || 0
    ]), a.push(_.substring(31, 34).trim() || "X");
  }
  const d = [];
  for (let h = 0; h < (isFinite(r) ? r : 0); h++) {
    const _ = n[4 + c + h];
    if (_ == null) break;
    const $ = parseInt(_.substring(0, 3), 10), b = parseInt(_.substring(3, 6), 10), S = parseInt(_.substring(6, 9), 10);
    !isFinite($) || !isFinite(b) || d.push([$ - 1, b - 1, isFinite(S) ? S : 1]);
  }
  return { name: (n[0] || "").trim() || t || "molecule", symbols: a, bonds: d, coords: s };
}
const dc = (e) => e.indexOf(Eo) >= 0 ? e : `${e}${Qo}${Eo}`;
function uc(e) {
  const t = String(e).split(/\r?\n/);
  if (t.length < 4) return null;
  const n = parseInt(t[3].slice(0, 3), 10), o = parseInt(t[3].slice(3, 6), 10);
  return isNaN(n) || isNaN(o) ? null : { atoms: n, bonds: o };
}
function ei(e, t, n) {
  let o = null;
  try {
    if (o = e.get_mol(t, JSON.stringify({ removeHs: !0 })), !o) return null;
    try {
      o.set_new_coords(!0);
    } catch {
    }
    return o.get_svg(n, n) || null;
  } catch (c) {
    return console.warn("[gufe-viz] depictSVG threw -", he(c)), null;
  } finally {
    if (o)
      try {
        o.delete();
      } catch {
      }
  }
}
function ti(e, t, n) {
  e.innerHTML = t;
  const o = e.querySelector("svg");
  o && (o.removeAttribute("width"), o.removeAttribute("height"), o.getAttribute("viewBox") || o.setAttribute("viewBox", `0 0 ${n} ${n}`), o.setAttribute("preserveAspectRatio", "xMidYMid meet"), o.setAttribute("style", "width:100%;height:100%;max-width:100%;max-height:100%;"));
}
function fc(e, t, n, o, c = {}) {
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
        ...lc,
        highlightAtomColors: c
      })
    ) || null : r.get_svg(n, n) || null : null;
  } catch (s) {
    return console.warn("[gufe-viz] depictHighlightedSVG threw -", he(s)), null;
  } finally {
    if (r)
      try {
        r.delete();
      } catch {
      }
  }
}
const pc = [
  { id: "stick", label: "Stick", title: "Sticks only" },
  { id: "ball", label: "Ball+Stick", title: "Ball and stick" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" }
], xo = {
  stick: { stick: { radius: 0.15, colorscheme: "Jmol" } },
  ball: { stick: { radius: 0.12, colorscheme: "Jmol" }, sphere: { scale: 0.28, colorscheme: "Jmol" } },
  sphere: { sphere: { scale: 1, colorscheme: "Jmol" } }
}, Ro = 400;
class hc extends we {
  placeholder() {
    return "Waiting for a SmallMoleculeComponent payload...";
  }
  renderView(t, n) {
    const o = n.sdf, c = n.name ?? "", r = n.smiles, s = n.total_charge;
    t.appendChild(Ne(c || "Unnamed molecule", "SmallMoleculeComponent"));
    const a = z("div", "flex:1;display:flex;flex-direction:row;overflow:hidden;min-height:0;");
    t.appendChild(a);
    const d = z("div", "flex:1 1 50%;min-width:0;display:flex;flex-direction:column;"), y = z("div", "flex:1 1 50%;min-width:0;display:flex;flex-direction:column;position:relative;");
    a.appendChild(d), a.appendChild(z("div", `width:1px;flex-shrink:0;background:${x.splitBorder};`)), a.appendChild(y);
    const h = (p) => z("div", `flex-shrink:0;padding:4px 10px;font-size:12px;font-weight:bold;color:${x.labelFg};background:${x.labelBg};`, p);
    d.appendChild(h("2D"));
    const _ = z(
      "div",
      `flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:8px;background:${x.canvas2DBg};`
    );
    d.appendChild(_), y.appendChild(h("3D"));
    const $ = zo();
    y.appendChild($.wrap);
    const b = z(
      "div",
      `flex-shrink:0;display:flex;flex-wrap:wrap;align-items:baseline;gap:6px 20px;padding:8px 16px;font-size:12px;background:${x.toolbarBg};border-top:1px solid ${x.toolbarBorder};color:${x.textPrimary};`
    );
    t.appendChild(b);
    const S = o ? uc(o) : null, k = [
      ["Name", c || We, !1],
      ["SMILES", r || We, !0],
      ["Charge", s == null ? We : String(s), !1],
      ["Atoms", S ? String(S.atoms) : We, !1],
      ["Bonds", S ? String(S.bonds) : We, !1]
    ];
    for (const [p, C, P] of k) {
      const A = z("div", "display:flex;align-items:baseline;gap:6px;min-width:0;");
      A.appendChild(
        z(
          "span",
          `font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;flex-shrink:0;color:${x.textMuted2};`,
          p
        )
      );
      const N = z(
        "span",
        `user-select:text;cursor:text;color:${x.textPrimary}` + (P ? ";font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:11px;overflow-wrap:anywhere;" : ""),
        C
      );
      N.title = C, A.appendChild(N), b.appendChild(A);
    }
    if (!o || !o.trim())
      return _.appendChild(ie("No molecule provided")), $.container.appendChild(ie("No molecule provided")), {};
    _.appendChild(ie("Loading 2D depiction...")), Hn().then((p) => {
      const C = ei(p, o, Ro);
      C ? ti(_, C, Ro) : _.replaceChildren(ie("Failed to parse molecule", !0));
    }).catch((p) => {
      _.replaceChildren(ie(`RDKit failed to load: ${he(p)}`, !0));
    });
    let f = null, m = null, u = "stick", g = !1;
    const w = z(
      "div",
      `position:absolute;bottom:10px;right:10px;display:flex;gap:4px;padding:4px;border-radius:6px;z-index:10;background:${x.switcherBg};box-shadow:0 2px 8px rgba(0,0,0,0.25);`
    );
    w.appendChild(
      un(pc, u, (p) => {
        u = p, f && (f.setStyle({}, xo[p]), f.render());
      })
    );
    const i = z("button", `${st}margin-left:4px;`, "Spin");
    i.title = "Toggle continuous rotation", i.onclick = () => {
      g = !g, i.style.background = g ? x.btnBgActive : x.btnBg;
      try {
        f?.spin(g ? "y" : !1);
      } catch {
      }
    }, w.appendChild(i);
    const l = Jn(() => m?.reset());
    return l.style.marginLeft = "4px", w.appendChild(l), y.appendChild(w), $.container.appendChild(ie("Loading 3D viewer...")), Wo().then(() => {
      $.container.replaceChildren(), f = Ye.createViewer($.container, { backgroundColor: x.viewerBg }), f.addModel(dc(o), "sdf"), f.setStyle({}, xo[u]), f.zoomTo(), f.render(), m = Zo($.container, f);
    }).catch((p) => {
      $.container.replaceChildren(ie(`3D render failed: ${he(p)}`, !0));
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
Se("gufe-small-molecule", hc);
const ni = ["HOH", "WAT", "SOL", "TIP3"], Ao = { hetflag: !1 }, mc = { hetflag: !0 }, gc = { resn: ni }, Me = {
  stick: { radius: 0.15 },
  sphere: { scale: 0.3 },
  hetero: { stickRadius: 0.2, sphereScale: 0.28 },
  water: { stickRadius: 0.05, sphereScale: 0.18 },
  surfaceOpacity: 0.85,
  /** Above this many atoms a surface is slow enough to be worth warning about. */
  surfaceAtomWarn: 4e4
};
function yc(e) {
  const t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
  let o = 0, c = 0, r = 0, s = 1 / 0, a = -1 / 0;
  for (const d of e.split(/\r?\n/)) {
    const y = d.slice(0, 6);
    if (y === "ENDMDL") break;
    if (y !== "ATOM  " && y !== "HETATM") continue;
    o++, y === "HETATM" && c++;
    const h = d.slice(17, 20).trim(), _ = d.slice(21, 22).trim() || "_", $ = d.slice(22, 26).trim(), b = d.slice(26, 27).trim();
    ni.indexOf(h) !== -1 && r++, t.add(_), n.add(`${_}|${$}${b}|${h}`);
    const S = parseInt($, 10);
    isNaN(S) || (S < s && (s = S), S > a && (a = S));
  }
  return {
    chains: t.size,
    residues: n.size,
    atoms: o,
    hetatms: c,
    waters: r,
    heteroNonWater: c - r,
    resiMin: s === 1 / 0 ? 0 : s,
    resiMax: a === -1 / 0 ? 0 : a
  };
}
function vc(e) {
  return `${et(e.chains)} chains · ${et(e.residues)} residues · ${et(e.atoms)} atoms · ${et(e.hetatms)} HETATM` + (e.waters > 0 ? ` (${et(e.waters)} water)` : "");
}
function $c(e, t) {
  return e === "chain" ? { colorscheme: "chain" } : e === "ss" ? { colorscheme: "ssJmol" } : e === "spectrum" && t && t.resiMax > t.resiMin ? { colorscheme: { prop: "resi", gradient: "roygb", min: t.resiMin, max: t.resiMax } } : { colorscheme: "Jmol" };
}
function No(e, t, n, o) {
  const c = o || (() => {
  }), r = $c(t.color, n);
  try {
    e.removeAllSurfaces();
  } catch {
  }
  if (e.setStyle({}, {}), e.setStyle(
    Ao,
    t.rep === "stick" ? { stick: { radius: Me.stick.radius, ...r } } : t.rep === "sphere" ? { sphere: { scale: Me.sphere.scale, ...r } } : (
      // For 'surface' the shell is added separately; leave the atoms bare so
      // it is not cluttered from the inside.
      t.rep === "surface" ? {} : { cartoon: { ...r } }
    )
  ), e.setStyle(
    mc,
    t.hetero ? {
      stick: { radius: Me.hetero.stickRadius, colorscheme: "Jmol" },
      sphere: { scale: Me.hetero.sphereScale, colorscheme: "Jmol" }
    } : {}
  ), e.setStyle(
    gc,
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
        e.addSurface(Ye.SurfaceType.VDW, { opacity: Me.surfaceOpacity, ...r }, Ao)
      ).then(() => {
        c(null), e.render();
      }).catch((s) => c(`Surface failed: ${he(s)}`, "error"));
    } catch (s) {
      c(`Surface failed: ${he(s)}`, "error");
    }
  }, 30);
}
const bc = [
  { id: "cartoon", label: "Cartoon", title: "Ribbon / cartoon backbone" },
  { id: "surface", label: "Surface", title: "Molecular (VDW) surface" },
  { id: "stick", label: "Stick", title: "All-atom sticks" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" }
], _c = [
  { id: "chain", label: "Chain" },
  { id: "spectrum", label: "Spectrum" },
  { id: "ss", label: "Secondary structure" },
  { id: "element", label: "Element" }
], wc = {
  ProteinComponentViz: "ProteinComponent",
  SolvatedPDBComponentViz: "SolvatedPDBComponent",
  ProteinMembraneComponentViz: "ProteinMembraneComponent"
};
class Sc extends we {
  placeholder() {
    return "Waiting for a ProteinComponent payload...";
  }
  renderView(t, n) {
    const o = n.pdb, c = n.name ?? "", r = wc[n.type] ?? "ProteinComponent", a = { rep: "cartoon", color: "chain", waters: n.type !== "ProteinComponentViz", hetero: !0 };
    let d = null, y = null, h = null;
    const _ = z(
      "div",
      `display:flex;align-items:center;gap:14px;flex-wrap:wrap;padding:8px 14px;flex-shrink:0;font-size:12px;background:${x.toolbarBg};border-bottom:1px solid ${x.toolbarBorder};color:${x.textPrimary};`
    );
    t.appendChild(_), _.appendChild(
      z("span", `font-weight:700;font-size:14px;letter-spacing:.02em;color:${x.titleColor};`, c || "Protein")
    ), _.appendChild(z("span", `font-size:11px;color:${x.textMuted2};`, r));
    const $ = (i) => z("span", `font-size:11px;color:${x.textMuted};`, i);
    _.appendChild($("Style:")), _.appendChild(
      un(bc, a.rep, (i) => {
        a.rep = i, w();
      })
    ), _.appendChild($("Color:"));
    const b = z("select", To);
    for (const i of _c) {
      const l = z("option", "", i.label);
      l.value = i.id, b.appendChild(l);
    }
    b.value = a.color, b.addEventListener("change", () => {
      a.color = b.value, w();
    }), _.appendChild(b);
    const S = z("div", "display:flex;gap:4px;");
    _.appendChild(S);
    const k = [
      ["waters", "Waters", "Show water molecules", () => w()],
      ["hetero", "Hetero", "Show hetero atoms / ligands / ions / lipids", () => w()],
      ["spin", "Spin", "Rotate the view continuously", () => d?.spin(a.spin ? "y" : !1)]
    ];
    for (const [i, l, p, C] of k) {
      const P = z("button", st, l);
      P.title = p, P.style.background = a[i] ? x.btnBgActive : x.btnBg, P.onclick = () => {
        a[i] = !a[i], P.style.background = a[i] ? x.btnBgActive : x.btnBg, C();
      }, S.appendChild(P);
    }
    S.appendChild(Jn(() => y?.reset()));
    const f = z("span", `margin-left:auto;font-size:11px;white-space:nowrap;color:${x.textMuted2};`);
    _.appendChild(f);
    const m = zo();
    t.appendChild(m.wrap);
    const u = z(
      "div",
      "position:absolute;top:12px;left:50%;transform:translateX(-50%);padding:6px 14px;border-radius:6px;font-size:12px;z-index:20;display:none;pointer-events:none;"
    );
    m.wrap.appendChild(u);
    const g = (i, l) => {
      if (i == null) {
        u.style.display = "none";
        return;
      }
      u.textContent = i, u.style.display = "block";
      const p = l === "error";
      u.style.background = p ? x.warnBg : x.toolbarBg, u.style.color = p ? x.warnFg : x.textMuted, u.style.border = `1px solid ${p ? x.warnBorder : x.toolbarBorder}`;
    };
    function w() {
      d && No(d, a, h, g);
    }
    if (!o || !o.trim())
      return g("No protein data - waiting for a PDB payload."), {};
    try {
      h = yc(o), f.textContent = vc(h);
    } catch (i) {
      g(`⚠ PDB parse error: ${he(i)}`, "error");
    }
    return g("Loading 3D viewer..."), Wo().then(() => {
      d = Ye.createViewer(m.container, { backgroundColor: x.viewerBg }), d.addModel(o, "pdb"), No(d, a, h, g), d.zoomTo(), d.spin(a.spin ? "y" : !1), d.render(), y = Zo(m.container, d);
    }).catch((i) => {
      g(`⚠ Failed to render structure: ${he(i)}`, "error");
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
Se("gufe-protein", Sc);
const ri = "http://www.w3.org/2000/svg";
function oe(e, t = {}) {
  const n = document.createElementNS(ri, e);
  for (const [o, c] of Object.entries(t)) n.setAttribute(o, String(c));
  return n;
}
function Xe(e, t) {
  const n = document.createElementNS(ri, "title");
  return n.textContent = t, e.appendChild(n), e;
}
function ct(e) {
  const t = /* @__PURE__ */ new Map();
  return On(e, t, /* @__PURE__ */ new Set()), t;
}
function On(e, t, n) {
  if (e == null || typeof e != "object" || n.has(e)) return;
  if (n.add(e), Array.isArray(e)) {
    for (const c of e) On(c, t, n);
    return;
  }
  const o = e.registry;
  if (Array.isArray(o))
    for (const c of o) {
      const r = c["gufe-key"];
      typeof r == "string" && r && !t.has(r) && t.set(r, c);
    }
  for (const c of Object.values(e)) On(c, t, n);
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
const jo = 420, kc = [
  { id: "changes", label: "Changes", title: "Highlight what differs, as gufe draws it" },
  { id: "mapped", label: "Mapped", title: "Highlight the atoms that carry over instead" }
];
function oi(e) {
  const t = parseInt(e.replace("#", ""), 16);
  return [(t >> 16 & 255) / 255, (t >> 8 & 255) / 255, (t & 255) / 255];
}
const Cc = oi(De.elementChange), Ec = oi(De.uniqueAtom);
function Mo(e, t, n) {
  const o = [], c = [], r = [];
  for (let s = 0; s < t.length; s++) {
    const a = e.get(s);
    a === void 0 ? o.push(s) : t[s] !== n[a] ? c.push(s) : r.push(s);
  }
  return { atoms: o, elements: c, mapped: r };
}
function Pc(e, t) {
  if (t === "mapped")
    return { atoms: [...e.mapped, ...e.elements], colors: {} };
  const n = {};
  for (const o of e.elements) n[o] = Cc;
  for (const o of e.atoms) n[o] = Ec;
  return { atoms: [...e.elements, ...e.atoms], colors: n };
}
function xc(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e.componentA_to_componentB ?? [])
    Number.isInteger(n?.index_A) && Number.isInteger(n?.index_B) && t.set(n.index_A, n.index_B);
  return t;
}
function ii(e, t) {
  const n = Pe(t, e.componentA, "SmallMoleculeComponentViz"), o = Pe(t, e.componentB, "SmallMoleculeComponentViz");
  return !n || !o ? null : { ...e, registry: n["gufe-key"] === o["gufe-key"] ? [n] : [n, o] };
}
class Rc extends we {
  placeholder() {
    return "Waiting for a LigandAtomMapping payload...";
  }
  renderView(t, n) {
    const o = ct(n), c = Pe(o, n.componentA, "SmallMoleculeComponentViz"), r = Pe(o, n.componentB, "SmallMoleculeComponentViz"), s = Ne(n.name || "Atom mapping", "LigandAtomMapping");
    if (t.appendChild(s), !c || !r)
      return t.appendChild(
        ie("This mapping names two molecules, and its registry does not hold them.")
      ), {};
    const a = Ze(c), d = Ze(r), y = xc(n);
    let h, _;
    try {
      h = Po(c.sdf, a).symbols, _ = Po(r.sdf, d).symbols;
    } catch (N) {
      return t.appendChild(ie(`Could not read a molecule: ${he(N)}`, !0)), {};
    }
    const $ = /* @__PURE__ */ new Map();
    for (const [N, j] of y) $.set(j, N);
    const b = Mo(y, h, _), S = Mo($, _, h);
    let k = "changes";
    s.statsEl.appendChild(se("mapped atoms", String(y.size))), s.statsEl.appendChild(
      se("element changes", String(b.elements.length), De.elementChange)
    ), s.statsEl.appendChild(
      se(`unique to ${a}`, String(b.atoms.length), De.uniqueAtom)
    ), s.statsEl.appendChild(
      se(`unique to ${d}`, String(S.atoms.length), De.uniqueAtom)
    ), s.statsEl.appendChild(se("score", n.score == null ? We : n.score.toFixed(3)));
    const f = z(
      "div",
      `display:flex;align-items:center;gap:12px;flex-wrap:wrap;padding:7px 14px;flex-shrink:0;font-size:12px;background:${x.toolbarBg};border-bottom:1px solid ${x.toolbarBorder};color:${x.textMuted};`
    );
    f.appendChild(z("span", `font-size:11px;color:${x.textMuted};`, "Highlight:")), f.appendChild(
      un(kc, k, (N) => {
        k = N, A();
      })
    );
    const m = z("div", "display:flex;align-items:center;gap:12px;margin-left:auto;font-size:11px;");
    m.appendChild(se("element change", "", De.elementChange)), m.appendChild(se("unique atom", "", De.uniqueAtom)), f.appendChild(m), t.appendChild(f);
    const u = z("div", "flex:1;min-height:0;display:flex;flex-direction:row;");
    t.appendChild(u);
    const g = (N) => {
      const j = z("div", "flex:1 1 50%;min-width:0;display:flex;flex-direction:column;");
      j.appendChild(
        z(
          "div",
          `flex-shrink:0;padding:4px 10px;font-size:12px;font-weight:bold;color:${x.labelFg};background:${x.labelBg};`,
          N
        )
      );
      const q = z(
        "div",
        `flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:8px;background:${x.canvas2DBg};`
      );
      return j.appendChild(q), u.appendChild(j), q;
    }, w = g(a);
    u.appendChild(z("div", `width:1px;flex-shrink:0;background:${x.splitBorder};`));
    const i = g(d), l = z(
      "div",
      `flex-shrink:0;max-height:96px;overflow:auto;padding:8px 14px;font-size:11px;line-height:1.6;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;color:${x.textMuted};background:${x.panelBg};border-top:1px solid ${x.toolbarBorder};`
    );
    l.textContent = y.size ? Array.from(y, ([N, j]) => `${N} -> ${j}`).join("   ") : "This mapping relates no atoms at all.", t.appendChild(l);
    const p = Object.entries(n.annotations ?? {}).filter(([N]) => N !== "score");
    if (p.length) {
      const N = z(
        "div",
        `flex-shrink:0;padding:6px 14px;font-size:11px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;color:${x.textMuted2};background:${x.panelBg};border-top:1px solid ${x.toolbarBorder};`
      );
      N.textContent = p.map(([j, q]) => `${j}: ${String(q)}`).join("    "), t.appendChild(N);
    }
    let C = null;
    const P = (N, j, q) => {
      if (!C) return;
      const { atoms: U, colors: Q } = Pc(q, k), te = fc(C, j, jo, U, Q);
      N.replaceChildren(), te ? ti(N, te, jo) : N.appendChild(ie("Failed to parse molecule", !0));
    }, A = () => {
      P(w, c.sdf, b), P(i, r.sdf, S);
    };
    return w.appendChild(ie("Loading 2D depiction...")), i.appendChild(ie("Loading 2D depiction...")), Hn().then((N) => {
      C = N, A();
    }).catch((N) => {
      const j = `RDKit failed to load: ${he(N)}`;
      w.replaceChildren(ie(j, !0)), i.replaceChildren(ie(j, !0));
    }), {};
  }
}
Se("gufe-atom-mapping", Rc);
const Ac = ["Force-directed", "Circular", "Radial"], sn = 34, on = 200, Nn = 1.5, Nc = 6, jc = 16, ye = {
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
function Mc(e) {
  const t = parseInt(e.replace("#", ""), 16);
  return [t >> 16 & 255, t >> 8 & 255, t & 255];
}
function Oc(e) {
  const [t, n] = x.netEdgeRamp.map(Mc), o = Math.max(0, Math.min(1, e ?? 0.5));
  return `rgb(${t.map((r, s) => Math.round(r + (n[s] - r) * o)).join(",")})`;
}
const Ie = Ze, Tc = (e, t) => e.length > t ? `${e.slice(0, t - 1)}...` : e;
class zc extends we {
  placeholder() {
    return "Waiting for a LigandNetwork payload...";
  }
  renderView(t, n) {
    const o = ct(n), c = [];
    let r = 0;
    for (const A of n.nodes ?? []) {
      const N = Pe(o, A, "SmallMoleculeComponentViz");
      if (!N) {
        r++;
        continue;
      }
      c.push({ ...N, x: 0, y: 0 });
    }
    const s = new Map(c.map((A) => [A["gufe-key"], A])), a = [];
    let d = 0;
    for (const A of n.edges ?? []) {
      const N = s.get(A.componentA), j = s.get(A.componentB);
      if (!N || !j) {
        d++;
        continue;
      }
      a.push({ ...A, index: a.length, from: N, to: j });
    }
    const y = Ne(n.name || "Ligand network", "LigandNetwork");
    y.statsEl.appendChild(se("ligands", String(c.length))), y.statsEl.appendChild(se("mappings", String(a.length))), t.appendChild(y);
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
    const k = this.#e($, o);
    if (!c.length)
      return b.appendChild(
        ie(
          r ? "None of this network's ligands are in its registry." : "This network has no ligands."
        )
      ), k.message("Nothing to show."), {};
    r && qe(
      b,
      `${r} ligand${r === 1 ? "" : "s"} named by this network are not in its registry`
    ), d && qe(b, `${d} mapping${d === 1 ? "" : "s"} name a ligand this network does not contain`);
    const f = Hn().catch((A) => (console.warn("[gufe-viz] RDKit failed to load:", he(A)), null));
    let m = a.length ? 0 : -1, u = null, g = "Force-directed", w = !1, i = !0, l = () => {
    }, p = () => {
    };
    const C = (A) => {
      m = A, k.show(a[A] ?? null), l();
    }, P = (A = g) => {
      g = A, u?.(), u = null, b.querySelector("svg")?.remove();
      const N = b.clientWidth || 800, j = b.clientHeight || 600;
      Ic(c, N, j, g, a);
      const q = () => {
        if (!i) return;
        const U = this.#r(b, c, a, N, j, C);
        l = () => U.setSelected(m), p = U.reset, u = U.cleanup, l(), f.then((Q) => Q && U.depict(Q)).catch(() => {
        });
      };
      if (g !== "Force-directed" || w) {
        q();
        return;
      }
      Dc(c, a, N, j).then((U) => {
        if (i) {
          if (U) {
            q();
            return;
          }
          w = !0, S.picker.value = "Circular", qe(b, "d3 could not be loaded - showing the circular layout instead"), P("Circular");
        }
      }, q);
    };
    return P(), k.show(a[m] ?? null), {
      onResize: () => P(),
      cleanup: () => {
        i = !1, u?.();
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
    const r = z("select", To);
    for (const s of Ac) {
      const a = z("option", "", s);
      a.value = s, r.appendChild(a);
    }
    return r.onchange = () => t(r.value), o.appendChild(r), o.appendChild(Jn(n, "Reset pan and zoom")), { bar: o, picker: r };
  }
  /** The right-hand pane: what the selected mapping is, in words and pictures. */
  #e(t, n) {
    const o = z(
      "div",
      `flex-shrink:0;padding:4px 10px;font-size:12px;font-weight:bold;color:${x.labelFg};background:${x.labelBg};`,
      "Selected mapping"
    ), c = z("div", "flex:1;min-height:0;overflow:auto;display:flex;flex-direction:column;");
    t.appendChild(o), t.appendChild(c);
    const r = (a) => c.replaceChildren(ie(a));
    return { show: (a) => {
      if (!a) {
        r("Click an edge to see its mapping.");
        return;
      }
      c.replaceChildren();
      const d = z(
        "div",
        `padding:10px 14px;font-size:13px;font-weight:600;color:${x.textPrimary};border-bottom:1px solid ${x.toolbarBorder};`,
        `${Ie(a.from)} -> ${Ie(a.to)}`
      );
      c.appendChild(d);
      const y = ii(a, n), h = document.createElement("gufe-atom-mapping");
      h.style.cssText = "flex:1;min-width:0;min-height:220px;display:flex;", h.payload = y, c.appendChild(h);
      const _ = Object.entries(a.annotations ?? {}).filter(([$]) => $ !== "score");
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
  #r(t, n, o, c, r, s) {
    const a = oe("svg", { width: c, height: r, style: "display:block;touch-action:none;" }), d = oe("g");
    a.appendChild(d), t.appendChild(a);
    const y = [], h = oe("g"), _ = oe("g"), $ = oe("g", { "pointer-events": "none" }), b = oe("g");
    d.append(h, _, $, b);
    for (const g of o) {
      const w = Oc(g.score), i = oe("line", {
        stroke: x.netHaloColor,
        "stroke-width": Nn + 12,
        "stroke-linecap": "round",
        opacity: 0,
        "pointer-events": "none"
      }), l = oe("line", {
        stroke: w,
        "stroke-width": Nn + (g.score ?? 0.5) * (Nc - Nn),
        "stroke-opacity": 0.9,
        "pointer-events": "none"
      }), p = Xe(
        oe("line", { stroke: "transparent", "stroke-width": jc, style: "cursor:pointer;" }),
        `${Ie(g.from)} -> ${Ie(g.to)}${g.score == null ? "" : `
score ${g.score.toFixed(3)}`}`
      );
      if (p.addEventListener("click", (C) => {
        C.stopPropagation(), s(g.index);
      }), y.push(i), h.append(i, l), _.appendChild(p), g.score != null) {
        const C = oe("text", {
          "text-anchor": "middle",
          "dominant-baseline": "middle",
          "font-size": 10,
          "font-weight": 600,
          fill: x.netEdgeLabel
        });
        C.textContent = g.score.toFixed(2), $.appendChild(C);
      } else
        $.appendChild(oe("text"));
    }
    const S = [], k = [], f = n.map((g) => {
      const w = Xe(oe("g", { style: "cursor:grab;" }), `${Ie(g)}
${g.smiles ?? ""}
${g["gufe-key"]}`);
      w.appendChild(
        oe("circle", {
          r: sn,
          fill: x.netNodeFill,
          stroke: x.netNodeStroke,
          "stroke-width": 1.5
        })
      );
      const i = oe("g", { "pointer-events": "none" });
      w.appendChild(i), S.push(i);
      const l = oe("text", {
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        "font-size": 16,
        "font-weight": 700,
        fill: x.netInitials,
        "pointer-events": "none"
      });
      l.textContent = Ie(g).slice(0, 2).toUpperCase(), w.appendChild(l), k.push(l);
      const p = oe("text", {
        "text-anchor": "middle",
        y: sn + 14,
        "font-size": 11,
        "font-weight": 600,
        fill: x.netNodeLabel,
        "pointer-events": "none"
      });
      return p.textContent = Tc(Ie(g), 16), w.appendChild(p), b.appendChild(w), w;
    }), m = () => {
      o.forEach((g, w) => {
        for (const l of [y[w], h.children[w * 2 + 1], _.children[w]]) {
          const p = l;
          p.setAttribute("x1", String(g.from.x)), p.setAttribute("y1", String(g.from.y)), p.setAttribute("x2", String(g.to.x)), p.setAttribute("y2", String(g.to.y));
        }
        const i = $.children[w];
        i.setAttribute("x", String((g.from.x + g.to.x) / 2)), i.setAttribute("y", String((g.from.y + g.to.y) / 2 - 8));
      }), n.forEach((g, w) => f[w].setAttribute("transform", `translate(${g.x},${g.y})`));
    };
    m();
    const u = this.#n(a, d, n, f, m);
    return {
      setSelected(g) {
        y.forEach((w, i) => w.setAttribute("opacity", i === g ? "0.95" : "0"));
      },
      depict(g) {
        const w = (sn - 4) * 2 / on, i = new DOMParser();
        let l = 0;
        return n.forEach((p, C) => {
          const P = p.sdf && ei(g, p.sdf, on);
          if (!P) return;
          const A = i.parseFromString(P, "image/svg+xml").documentElement;
          if (!A || A.nodeName.toLowerCase() === "parsererror") return;
          const N = S[C];
          N.setAttribute(
            "transform",
            `translate(${-w * on / 2},${-w * on / 2}) scale(${w})`
          );
          let j = 0;
          for (const q of Array.from(A.childNodes)) {
            if (q.nodeType !== 1) continue;
            const U = q.nodeName.toLowerCase();
            if (!(U === "defs" || U === "metadata" || U === "title")) {
              if (U === "rect") {
                const Q = (q.getAttribute("fill") ?? "").toLowerCase();
                if (Q === "#ffffff" || Q === "white" || Q === "rgb(255,255,255)") continue;
              }
              N.appendChild(document.importNode(q, !0)), j++;
            }
          }
          j && (k[C].setAttribute("display", "none"), l++);
        }), l;
      },
      reset: u.reset,
      cleanup: u.cleanup
    };
  }
  /** Wheel zoom, background pan, node drag - ~40 lines instead of d3-zoom and
   * d3-drag, and they keep working when d3 is unreachable. */
  #n(t, n, o, c, r) {
    let s = 1, a = 0, d = 0;
    const y = () => n.setAttribute("transform", `translate(${a},${d}) scale(${s})`), _ = Xo(t, {
      onZoom: (f) => {
        const m = t.getBoundingClientRect(), u = f.clientX - m.left, g = f.clientY - m.top, w = Math.min(5 / s, Math.max(0.15 / s, Math.exp(-f.deltaY * 2e-3)));
        a = u - (u - a) * w, d = g - (g - d) * w, s *= w, y();
      },
      hint: "Click the graph or hold Ctrl to zoom"
    });
    let $ = null;
    const b = (f) => {
      $ = { x: f.clientX - a, y: f.clientY - d };
    }, S = (f) => {
      $ && (a = f.clientX - $.x, d = f.clientY - $.y, y());
    }, k = () => {
      $ = null;
    };
    return t.addEventListener("pointerdown", b), t.addEventListener("pointermove", S), t.addEventListener("pointerup", k), t.addEventListener("pointercancel", k), t.addEventListener("pointerleave", k), c.forEach((f, m) => {
      let u = null;
      f.addEventListener("pointerdown", (w) => {
        w.stopPropagation(), u = { x: w.clientX - o[m].x * s, y: w.clientY - o[m].y * s }, f.setPointerCapture(w.pointerId);
      }), f.addEventListener("pointermove", (w) => {
        u && (o[m].x = o[m].fx = (w.clientX - u.x) / s, o[m].y = o[m].fy = (w.clientY - u.y) / s, r());
      });
      const g = () => {
        u = null;
      };
      f.addEventListener("pointerup", g), f.addEventListener("pointercancel", g);
    }), {
      reset() {
        s = 1, a = 0, d = 0, y();
      },
      cleanup() {
        _.cleanup(), t.removeEventListener("pointerdown", b), t.removeEventListener("pointermove", S), t.removeEventListener("pointerup", k), t.removeEventListener("pointercancel", k), t.removeEventListener("pointerleave", k);
      }
    };
  }
}
function Ic(e, t, n, o, c) {
  const r = t / 2, s = n / 2, a = (d, y) => {
    d.forEach((h, _) => {
      const $ = 2 * Math.PI * _ / Math.max(1, d.length) - Math.PI / 2;
      h.x = r + y * Math.cos($), h.y = s + y * Math.sin($), h.fx = o === "Force-directed" ? void 0 : h.x, h.fy = o === "Force-directed" ? void 0 : h.y;
    });
  };
  if (o === "Radial" && e.length) {
    const d = new Map(e.map((k) => [k["gufe-key"], []]));
    for (const k of c)
      d.get(k.from["gufe-key"]).push(k.to["gufe-key"]), d.get(k.to["gufe-key"]).push(k.from["gufe-key"]);
    const y = new Map(e.map((k) => [k["gufe-key"], k])), h = e.reduce(
      (k, f) => d.get(f["gufe-key"]).length > d.get(k["gufe-key"]).length ? f : k
    ), _ = /* @__PURE__ */ new Set([h["gufe-key"]]);
    let $ = [h["gufe-key"]], b = 0;
    const S = Math.min(t, n) * 0.18;
    for (; $.length; ) {
      a(
        $.map((f) => y.get(f)),
        b === 0 ? 0 : b * S + 40
      );
      const k = [];
      for (const f of $)
        for (const m of d.get(f))
          _.has(m) || (_.add(m), k.push(m));
      $ = k, b++;
    }
    a(e.filter((k) => !_.has(k["gufe-key"])), Math.min(t, n) * 0.45);
    return;
  }
  a(e, Math.min(t, n) * 0.34);
}
async function Dc(e, t, n, o) {
  let c;
  try {
    if (c = await Yo(), typeof c?.forceSimulation != "function") return !1;
  } catch {
    return !1;
  }
  const r = t.map((d) => ({ source: d.from["gufe-key"], target: d.to["gufe-key"], score: d.score })), s = c.forceSimulation(e).force(
    "link",
    c.forceLink(r).id((d) => d["gufe-key"]).distance((d) => ye.linkBaseDistance + (1 - (d.score ?? 0.5)) * ye.linkScoreBonus).strength(ye.linkStrength)
  ).force(
    "charge",
    c.forceManyBody().strength(ye.chargeStrength).distanceMin(ye.chargeDistanceMin).distanceMax(ye.chargeDistanceMax)
  ).force("center", c.forceCenter(n / 2, o / 2).strength(ye.centerStrength)).force("collision", c.forceCollide(sn + ye.collisionPadding).iterations(ye.collisionIterations)).force("x", c.forceX(n / 2).strength(ye.drift)).force("y", c.forceY(o / 2).strength(ye.drift)).stop(), a = Math.ceil(Math.log(s.alphaMin()) / Math.log(1 - s.alphaDecay()));
  for (let d = 0; d < a * ye.tickMultiplier; d++) s.tick();
  return !0;
}
Se("gufe-ligand-network", zc);
const ot = { width: 148, height: 46, radius: 10 }, Je = {
  linkDistance: 220,
  linkStrength: 0.4,
  chargeStrength: -1200,
  collisionRadius: 110,
  collisionIterations: 3,
  tickMultiplier: 2
}, it = Ze;
function qc(e, t) {
  return e.length > t ? `${e.slice(0, t - 1)}...` : e;
}
function Vc(e, t, n) {
  const o = Math.max(90, Math.min(t, n) * 0.36);
  e.forEach((c, r) => {
    const s = 2 * Math.PI * r / Math.max(1, e.length) - Math.PI / 2;
    c.x = t / 2 + o * Math.cos(s), c.y = n / 2 + o * Math.sin(s);
  });
}
async function Bc(e, t, n, o) {
  let c;
  try {
    if (c = await Yo(), typeof c?.forceSimulation != "function") return !1;
  } catch {
    return !1;
  }
  const r = t.map((d) => ({ source: d.from["gufe-key"], target: d.to["gufe-key"] })), s = c.forceSimulation(e).force(
    "link",
    c.forceLink(r).id((d) => d["gufe-key"]).distance(Je.linkDistance).strength(Je.linkStrength)
  ).force("charge", c.forceManyBody().strength(Je.chargeStrength)).force("center", c.forceCenter(n / 2, o / 2)).force("collision", c.forceCollide(Je.collisionRadius).iterations(Je.collisionIterations)).stop(), a = Math.ceil(Math.log(s.alphaMin()) / Math.log(1 - s.alphaDecay()));
  for (let d = 0; d < a * Je.tickMultiplier; d++) s.tick();
  return !0;
}
class Fc extends we {
  placeholder() {
    return "Waiting for an AlchemicalNetwork payload...";
  }
  renderView(t, n) {
    const o = ct(n), c = [];
    let r = 0;
    for (const l of n.nodes ?? []) {
      const p = Pe(o, l, "ChemicalSystemViz");
      if (!p) {
        r++;
        continue;
      }
      c.push({ ...p, x: 0, y: 0 });
    }
    const s = new Map(c.map((l) => [l["gufe-key"], l])), a = [];
    let d = 0;
    for (const l of n.edges ?? []) {
      const p = s.get(l.stateA), C = s.get(l.stateB);
      if (!p || !C) {
        d++;
        continue;
      }
      a.push({ ...l, index: a.length, from: p, to: C });
    }
    const y = (l) => {
      const p = Pe(o, l.protocol, "ProtocolViz");
      return p?.gufe_type || p?.name || "";
    }, h = new Set(a.map(y).filter(Boolean)), _ = Ne(n.name || "Alchemical network", "AlchemicalNetwork");
    _.statsEl.appendChild(se("systems", String(c.length))), _.statsEl.appendChild(se("transformations", String(a.length))), h.size && _.statsEl.appendChild(se("protocol", [...h].join(", "))), t.appendChild(_);
    const $ = z("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    t.appendChild($);
    const b = z("div", `flex:1 1 62%;min-width:0;position:relative;overflow:hidden;background:${x.netCanvasBg};`);
    $.appendChild(b), $.appendChild(z("div", `width:1px;flex-shrink:0;background:${x.splitBorder};`));
    const S = z("div", `flex:1 1 38%;min-width:0;display:flex;flex-direction:column;background:${x.appBg};`);
    $.appendChild(S);
    const k = this.#t(S, o, y);
    if (!c.length)
      return b.appendChild(
        ie(
          r ? "None of this network's chemical systems are in its registry." : "This network has no chemical systems."
        )
      ), k.message("Nothing to show."), {};
    r && qe(
      b,
      `${r} chemical system${r === 1 ? "" : "s"} named by this network are not in its registry`
    ), d && qe(
      b,
      `${d} transformation${d === 1 ? "" : "s"} name a system this network does not contain`
    );
    let f = !0, m = !1, u = null, g = () => {
    };
    const w = (l, p) => {
      u = { kind: l, index: p }, k.show(l === "node" ? c[p] : a[p], l), g();
    }, i = () => {
      b.querySelector("svg")?.remove();
      const l = b.clientWidth || 800, p = b.clientHeight || 600;
      Vc(c, l, p);
      const C = () => {
        if (!f) return;
        const P = this.#e(b, c, a, l, p, w);
        g = () => P.setSelected(u), g();
      };
      if (m) {
        C();
        return;
      }
      Bc(c, a, l, p).then((P) => {
        f && (P || (m = !0, qe(b, "d3 could not be loaded - showing the circular layout instead")), C());
      }, C);
    };
    return i(), w("node", 0), {
      onResize: () => i(),
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
    const r = (d) => c.replaceChildren(ie(d)), s = (d, y) => {
      const h = z(
        "div",
        `padding:10px 14px;border-bottom:1px solid ${x.toolbarBorder};display:flex;flex-direction:column;gap:4px;`
      );
      return h.appendChild(z("div", `font-size:13px;font-weight:600;color:${x.textPrimary};`, d)), h.appendChild(z("div", `font-size:11px;color:${x.textMuted2};`, y)), h;
    };
    return { show: (d, y) => {
      if (c.replaceChildren(), y === "node") {
        const $ = d;
        c.appendChild(s(it($), "ChemicalSystem"));
        const b = z("div", "display:flex;flex-direction:column;gap:6px;padding:12px 14px;"), S = Object.entries($.components ?? {});
        for (const [k, f] of S) {
          const m = Ve(n, f), u = z(
            "div",
            `display:flex;align-items:center;gap:8px;padding:7px 10px;border-radius:8px;min-width:0;background:${x.cardBg};border:1px solid ${x.cardBorder};`
          );
          u.appendChild(z("span", `font-size:12px;font-weight:700;color:${x.textPrimary};`, k)), u.appendChild(
            z(
              "span",
              `font-size:11px;color:${x.textMuted};overflow-wrap:anywhere;min-width:0;`,
              m ? m.name || "(unnamed)" : "(not in the registry)"
            )
          );
          const g = at(
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
      c.appendChild(s(h.name || "Unnamed transformation", "Transformation"));
      const _ = z("div", "display:flex;flex-direction:column;gap:8px;padding:12px 14px;");
      for (const [$, b] of [
        ["State A", it(h.from)],
        ["State B", it(h.to)],
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
  #e(t, n, o, c, r, s) {
    const a = oe("svg", { width: c, height: r, style: "display:block;" });
    t.appendChild(a);
    const d = oe("g"), y = oe("g");
    a.append(d, y);
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
      Xe(S, $.name || "transformation"), S.addEventListener("click", () => s("edge", b)), d.appendChild(S), h.push(S);
      const k = oe("line", {
        x1: $.from.x,
        y1: $.from.y,
        x2: $.to.x,
        y2: $.to.y,
        stroke: "transparent",
        "stroke-width": 16,
        style: "cursor:pointer;"
      });
      k.addEventListener("click", () => s("edge", b)), d.appendChild(k);
    });
    const _ = [];
    return n.forEach(($, b) => {
      const S = oe("g", { style: "cursor:pointer;" }), k = oe("rect", {
        x: $.x - ot.width / 2,
        y: $.y - ot.height / 2,
        width: ot.width,
        height: ot.height,
        rx: ot.radius,
        fill: x.cardBg,
        stroke: x.cardBorder,
        "stroke-width": 2
      });
      S.appendChild(k), _.push(k);
      const f = oe("text", {
        x: $.x,
        y: $.y - 2,
        "text-anchor": "middle",
        fill: x.netNodeLabel,
        "font-size": 12,
        "font-weight": 700,
        "font-family": "ui-sans-serif,system-ui,sans-serif"
      });
      f.textContent = qc(it($), 20), S.appendChild(f);
      const m = Object.keys($.components ?? {}).length, u = oe("text", {
        x: $.x,
        y: $.y + 14,
        "text-anchor": "middle",
        fill: x.netInitials,
        "font-size": 10,
        "font-family": "ui-sans-serif,system-ui,sans-serif"
      });
      u.textContent = `${m} component${m === 1 ? "" : "s"}`, S.appendChild(u), Xe(S, it($)), S.addEventListener("click", () => s("node", b)), y.appendChild(S);
    }), {
      setSelected($) {
        _.forEach((b, S) => {
          const k = $?.kind === "node" && $.index === S;
          b.setAttribute("stroke", k ? x.cardBorderActive : x.cardBorder), b.setAttribute("stroke-width", k ? "3" : "2");
        }), h.forEach((b, S) => {
          const k = $?.kind === "edge" && $.index === S;
          b.setAttribute("stroke", k ? x.netHaloColor : x.netEdgeLine), b.setAttribute("stroke-width", k ? "4" : "2");
        });
      }
    };
  }
}
Se("gufe-alchemical-network", Fc);
function Lc(e) {
  return e.name || e.type.replace(/Viz$/, "");
}
function Uc(e) {
  return e.type === "UnknownComponentViz" ? e.gufe_type : e.type.replace(/Viz$/, "");
}
class Kc extends we {
  placeholder() {
    return "Waiting for a ChemicalSystem payload...";
  }
  renderView(t, n) {
    const o = ct(n), c = [], r = [];
    for (const [S, k] of Object.entries(n.components ?? {})) {
      const f = Ve(o, k);
      f ? c.push([S, f]) : r.push(S);
    }
    const s = Ne(n.name || "Chemical system", "ChemicalSystem");
    if (s.statsEl.appendChild(se("components", String(c.length))), t.appendChild(s), !c.length)
      return t.appendChild(
        ie(
          r.length ? "None of this system's components are in its registry." : "This chemical system has no components."
        )
      ), {};
    const a = z("div", "flex:1;min-height:0;position:relative;display:flex;flex-direction:row;");
    t.appendChild(a), r.length && qe(
      a,
      `${r.length} component${r.length === 1 ? "" : "s"} named by this system (${r.join(", ")}) are not in its registry`
    );
    const d = z(
      "div",
      `flex:0 0 220px;min-width:0;overflow:auto;display:flex;flex-direction:column;gap:6px;padding:10px;background:${x.panelBg};border-right:1px solid ${x.splitBorder};`
    );
    a.appendChild(d);
    const y = z("div", "flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;");
    a.appendChild(y);
    const h = z("div", "flex:1;min-height:0;display:flex;");
    y.appendChild(h);
    const _ = document.createElement("gufe-view");
    _.style.cssText = "flex:1;min-width:0;min-height:0;", h.appendChild(_);
    const $ = [], b = (S) => {
      $.forEach((k, f) => {
        const m = f === S;
        k.style.background = m ? x.cardBgActive : x.cardBg, k.style.borderColor = m ? x.cardBorderActive : x.cardBorder;
      }), _.payload = c[S][1];
    };
    return c.forEach(([S, k], f) => {
      const m = z(
        "button",
        `display:flex;flex-direction:column;align-items:flex-start;gap:4px;padding:8px 10px;text-align:left;border:1px solid ${x.cardBorder};border-radius:8px;background:${x.cardBg};cursor:pointer;font-family:inherit;font-size:12px;width:100%;`
      );
      m.appendChild(z("span", `font-weight:700;color:${x.textPrimary};`, S)), m.appendChild(z("span", `font-size:11px;color:${x.textMuted};`, Lc(k))), m.appendChild(at(Uc(k))), m.onclick = () => b(f), $.push(m), d.appendChild(m);
    }), b(0), {
      onResize: () => _.resize?.(),
      // Removing the nested view fires its own `disconnectedCallback`, which is
      // where whatever it mounted releases its viewers.
      cleanup: () => _.remove()
    };
  }
}
Se("gufe-chemical-system", Kc);
class Gc extends we {
  placeholder() {
    return "Waiting for a Protocol payload...";
  }
  renderView(t, n) {
    const o = Ne(n.gufe_type || n.name || "Protocol", "Protocol");
    o.statsEl.appendChild(at(n.gufe_type)), t.appendChild(o);
    const c = z(
      "div",
      "flex:1;min-height:0;overflow:auto;display:flex;align-items:center;justify-content:center;padding:24px;"
    );
    t.appendChild(c);
    const r = cn();
    return r.style.maxWidth = "460px", r.appendChild(Ee("gufe class", n.gufe_type, !0)), n.name && r.appendChild(Ee("Name", n.name)), r.appendChild(Ee("gufe key", n["gufe-key"], !0)), r.appendChild(
      z(
        "div",
        `padding-top:10px;font-size:11px;line-height:1.6;color:${x.textMuted2};`,
        "A Protocol's settings are not carried in this payload: they are large, deeply nested, and nothing draws them yet."
      )
    ), c.appendChild(r), {};
  }
}
Se("gufe-protocol", Gc);
const _e = { width: 340, height: 260, padding: 14, radius: 12 }, Hc = 150, Jc = 40, Wc = 24;
function Yc(e) {
  let t = e >>> 0;
  return () => (t = t * 1664525 + 1013904223 >>> 0, t / 4294967296);
}
function Xc(e) {
  const t = /-?\d+(\.\d+)?([eE][-+]?\d+)?/.exec(e ?? "");
  if (!t) return null;
  const n = Number(t[0]);
  return Number.isFinite(n) ? n : null;
}
function Zc(e) {
  return e == null || e <= 0 ? 0 : Math.max(1, Math.min(Wc, Math.round(e * Jc)));
}
function Qc(e) {
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
  const n = Yc(1597463007), o = () => ({
    x: _e.padding + n() * (_e.width - 2 * _e.padding),
    y: _e.padding + n() * (_e.height - 2 * _e.padding)
  });
  for (let s = 0; s < Hc; s++) {
    const { x: a, y: d } = o();
    t.appendChild(oe("circle", { cx: a, cy: d, r: 2.4, fill: x.textMuted2, "fill-opacity": 0.45 }));
  }
  const c = Zc(Xc(e.ion_concentration)), r = [
    [e.positive_ion, x.diffAdded],
    [e.negative_ion, x.diffRemoved]
  ];
  for (const [s, a] of r)
    for (let d = 0; d < c; d++) {
      const { x: y, y: h } = o(), _ = oe("circle", { cx: y, cy: h, r: 5.5, fill: a, "fill-opacity": 0.85 });
      t.appendChild(Xe(_, s));
    }
  return t;
}
class el extends we {
  placeholder() {
    return "Waiting for a SolventComponent payload...";
  }
  renderView(t, n) {
    const o = Ne(n.name || "Solvent", "SolventComponent");
    o.statsEl.appendChild(se("neutralized", n.neutralize ? "yes" : "no")), o.statsEl.appendChild(se(n.positive_ion, "", x.diffAdded)), o.statsEl.appendChild(se(n.negative_ion, "", x.diffRemoved)), t.appendChild(o);
    const c = z(
      "div",
      "flex:1;min-height:0;display:flex;flex-wrap:wrap;gap:16px;padding:16px;overflow:auto;align-items:flex-start;"
    );
    t.appendChild(c);
    const r = cn();
    r.style.flex = "1 1 320px", r.appendChild(Ee("SMILES", n.smiles, !0)), r.appendChild(Ee("Positive ion", n.positive_ion)), r.appendChild(Ee("Negative ion", n.negative_ion)), r.appendChild(Ee("Ion concentration", n.ion_concentration)), r.appendChild(Ee("Neutralize", n.neutralize ? "yes" : "no")), c.appendChild(r);
    const s = cn();
    return s.style.flex = "1 1 340px", s.style.alignItems = "center", s.appendChild(Qc(n)), s.appendChild(
      z(
        "div",
        `padding-top:10px;font-size:11px;text-align:center;color:${x.textMuted2};`,
        "Schematic only: the dots show which ions are present, not how many."
      )
    ), c.appendChild(s), {};
  }
}
Se("gufe-solvent", el);
const Tn = {
  unchanged: x.diffUnchanged,
  changed: x.diffChanged,
  added: x.diffAdded,
  removed: x.diffRemoved
};
function tl(e, t) {
  return e && !t ? "removed" : !e && t ? "added" : e === t ? "unchanged" : "changed";
}
function nl(e, t) {
  return [.../* @__PURE__ */ new Set([...Object.keys(e.components ?? {}), ...Object.keys(t.components ?? {})])].sort();
}
function rl(e) {
  if (!e) return null;
  const t = e.type === "UnknownComponentViz" ? e.gufe_type : e.type.replace(/Viz$/, "");
  return { name: e.name || "(unnamed)", type: t };
}
function Oo(e, t) {
  const n = z(
    "div",
    `flex:1 1 50%;min-width:0;display:flex;flex-direction:column;gap:4px;padding:8px 10px;border-radius:8px;background:${x.cardBg};border:1px solid ${x.cardBorder};`
  ), o = rl(e);
  return o ? (n.style.borderColor = t === "unchanged" ? x.cardBorder : Tn[t], n.appendChild(z("span", `font-size:12px;font-weight:600;color:${x.textPrimary};`, o.name)), n.appendChild(at(o.type)), n) : (n.style.background = "transparent", n.style.borderStyle = "dashed", n.appendChild(z("span", `font-size:12px;color:${x.textMuted2};`, "absent")), n);
}
function ol(e, t) {
  const n = Ve(t, e.componentA), o = Ve(t, e.componentB);
  return `${n ? Ze(n) : "A"} to ${o ? Ze(o) : "B"}`;
}
class il extends we {
  placeholder() {
    return "Waiting for a Transformation payload...";
  }
  renderView(t, n) {
    const o = ct(n), c = Pe(o, n.stateA, "ChemicalSystemViz"), r = Pe(o, n.stateB, "ChemicalSystemViz"), s = Pe(o, n.protocol, "ProtocolViz"), a = n.mappings ?? [], d = Ne(n.name || "Transformation", "Transformation");
    if (d.statsEl.appendChild(se("protocol", s?.gufe_type || s?.name || "-")), d.statsEl.appendChild(se("mappings", String(a.length))), t.appendChild(d), !c || !r)
      return t.appendChild(
        ie("This transformation names two chemical systems, and its registry does not hold them.")
      ), {};
    const y = nl(c, r), h = z("div", "flex:0 0 auto;max-height:45%;overflow:auto;padding:12px 14px;");
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
      const m = c.components?.[f], u = r.components?.[f], g = tl(m, u), w = Ve(o, m), i = Ve(o, u), l = z("div", "display:flex;align-items:stretch;gap:10px;padding:4px 0;"), p = z("div", "flex:0 0 110px;display:flex;align-items:center;gap:6px;min-width:0;");
      p.appendChild(
        z("span", `width:8px;height:8px;border-radius:50%;flex-shrink:0;background:${Tn[g]};`)
      );
      const C = z("span", `font-size:12px;font-weight:700;color:${x.textPrimary};overflow-wrap:anywhere;`, f);
      C.title = g, p.appendChild(C), l.appendChild(p), l.appendChild(Oo(w, g)), l.appendChild(Oo(i, g)), h.appendChild(l);
    }
    const $ = z(
      "div",
      `display:flex;flex-wrap:wrap;gap:12px;padding:8px 0 0;font-size:11px;color:${x.textMuted};`
    );
    for (const f of ["unchanged", "changed", "added", "removed"])
      $.appendChild(se(f, "", Tn[f]));
    h.appendChild($);
    const b = z(
      "div",
      `flex-shrink:0;padding:4px 10px;font-size:12px;font-weight:bold;color:${x.labelFg};background:${x.labelBg};`,
      "Atom mapping"
    );
    if (t.appendChild(b), !a.length)
      return t.appendChild(
        ie(
          "This transformation carries no atom mapping - nothing here maps one small molecule onto another."
        )
      ), {};
    const S = document.createElement("gufe-atom-mapping");
    S.style.cssText = "flex:1;min-height:0;min-width:0;";
    const k = (f) => {
      S.payload = ii(a[f], o);
    };
    if (k(0), a.length > 1) {
      const f = z(
        "div",
        `display:flex;align-items:center;gap:8px;padding:6px 10px;flex-shrink:0;font-size:11px;background:${x.toolbarBg};border-bottom:1px solid ${x.toolbarBorder};color:${x.textMuted};`
      );
      f.appendChild(
        un(
          a.map((m, u) => ({
            id: String(u),
            label: m.name || ol(m, o)
          })),
          "0",
          (m) => k(Number(m))
        )
      ), t.appendChild(f);
    }
    return t.appendChild(S), {
      onResize: () => S.resize?.(),
      cleanup: () => S.remove()
    };
  }
}
Se("gufe-transformation", il);
class sl extends we {
  placeholder() {
    return "Waiting for a component payload...";
  }
  renderView(t, n) {
    const o = Ne(n.name || "Unnamed component", "Component");
    o.statsEl.appendChild(at(n.gufe_type)), t.appendChild(o);
    const c = z("div", "flex:1;min-height:0;overflow:auto;display:flex;align-items:center;justify-content:center;padding:24px;");
    t.appendChild(c);
    const r = cn();
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
Se("gufe-unknown-component", sl);
function hl(e, t) {
  let n = e.querySelector("gufe-view");
  return n || (n = document.createElement("gufe-view"), n.style.cssText = "display:block;width:100%;height:100%;", e.appendChild(n)), t !== void 0 && (n.payload = t), n;
}
export {
  ci as CHROME_OPEN_BY_DEFAULT,
  ui as DEBUG_ATTRIBUTE,
  fi as DEBUG_GLOBAL,
  oc as DEFAULT_ZOOM_BOUNDS,
  Fc as GufeAlchemicalNetwork,
  Rc as GufeAtomMapping,
  Kc as GufeChemicalSystem,
  we as GufeElement,
  zc as GufeLigandNetwork,
  Sc as GufeProtein,
  Gc as GufeProtocol,
  hc as GufeSmallMolecule,
  el as GufeSolvent,
  il as GufeTransformation,
  sl as GufeUnknownComponent,
  Qa as GufeView,
  De as MAPPING_COLORS,
  fl as MAPPING_RAMP_3D,
  pl as MAPPING_RAMP_NAME,
  cl as PAYLOAD_TYPES,
  ll as SCHEMA_TYPES,
  Un as VIEW_TAGS,
  ic as boundedZoom,
  ct as buildRegistry,
  al as chromeMenu,
  mi as debugEnabled,
  Se as defineElement,
  Ho as describeProblem,
  tl as diffStatus,
  ul as dispatchProblem,
  Ze as entryLabel,
  Xa as formatIssues,
  Xo as guardWheel,
  yi as logPayload,
  Ve as lookup,
  Pe as lookupOfType,
  ii as mappingPayloadFor,
  hl as mount,
  Xc as parseConcentration,
  gi as payloadJson,
  Jn as resetControl,
  Mo as uniqueAtoms,
  dl as validateAs,
  Ya as validatePayload,
  Zo as viewerInteraction,
  ac as wheelFactor
};
