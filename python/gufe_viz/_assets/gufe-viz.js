const ar = {
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
function mi() {
  try {
    return globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches ?? !1;
  } catch {
    return !1;
  }
}
const P = mi() ? ar.dark : ar.light;
function O(e, t, n) {
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
const tt = (e) => e.toLocaleString("en-US"), Xe = "-", Be = `background:${P.btnBg};color:${P.btnFg};border:1px solid ${P.btnBorder};padding:4px 9px;font-size:11px;font-weight:bold;border-radius:3px;cursor:pointer;font-family:inherit;`, Ln = `background:${P.selectBg};color:${P.textPrimary};border:1px solid ${P.selectBorder};border-radius:6px;padding:4px 8px;font-size:12px;cursor:pointer;font-family:inherit;`;
function mn(e, t, n) {
  const o = O("div", "display:flex;gap:4px;"), c = e.map((r) => {
    const s = O("button", Be, r.label);
    return s.title = r.title || r.label, s.onmouseover = () => {
      s.style.background = P.btnBgHover;
    }, s.onmouseout = () => {
      s.style.background = t === r.id ? P.btnBgActive : P.btnBg;
    }, s.onclick = () => {
      o.setActive(r.id), n(r.id);
    }, o.appendChild(s), { id: r.id, btn: s };
  });
  return o.setActive = (r) => {
    t = r, c.forEach((s) => {
      s.btn.style.background = s.id === t ? P.btnBgActive : P.btnBg;
    });
  }, o.setActive(t), o;
}
function ce(e, t, n) {
  const o = O("span", "display:inline-flex;align-items:center;gap:5px;white-space:nowrap;");
  n && o.appendChild(
    O("span", `width:8px;height:8px;border-radius:50%;background:${n};display:inline-block;`)
  );
  const c = O("span");
  return c.innerHTML = `${dn(e)} <b style="color:${P.textPrimary};">${dn(t)}</b>`, o.appendChild(c), o;
}
function De(e, t) {
  const n = O("div", "", `⚠ ${t}`);
  return n.style.cssText = `position:absolute;top:10px;left:50%;transform:translateX(-50%);max-width:90%;z-index:20;padding:6px 14px;border-radius:6px;font-size:12px;background:${P.warnBg};color:${P.warnFg};border:1px solid ${P.warnBorder};`, e.appendChild(n), n;
}
function ie(e, t = !1) {
  return O(
    "div",
    `flex:1;display:flex;align-items:center;justify-content:center;text-align:center;padding:24px;font-size:13px;color:${t ? P.errorFg : P.textMuted2};`,
    e
  );
}
function Ne(e, t) {
  const n = O(
    "div",
    `display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;padding:9px 14px;flex-shrink:0;background:${P.toolbarBg};border-bottom:1px solid ${P.toolbarBorder};`
  );
  return n.titleEl = O("span", `font-weight:700;font-size:15px;color:${P.titleColor};letter-spacing:.02em;`, e), n.subtitleEl = O("span", `font-size:12px;color:${P.textMuted2};`, t || ""), n.statsEl = O(
    "div",
    `display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-left:auto;font-size:11px;color:${P.textMuted};`
  ), n.toggleEl = O("div", "display:flex;align-items:center;margin-left:10px;flex-shrink:0;"), n.appendChild(n.titleEl), n.appendChild(n.subtitleEl), n.appendChild(n.statsEl), n.appendChild(n.toggleEl), n;
}
function xe(e, t, n = !1) {
  const o = O("div", "display:flex;gap:12px;align-items:baseline;padding:5px 0;min-width:0;");
  o.appendChild(
    O(
      "span",
      `flex:0 0 128px;font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:${P.textMuted2};`,
      e
    )
  );
  const c = O(
    "span",
    `flex:1;min-width:0;user-select:text;cursor:text;overflow-wrap:anywhere;color:${P.textPrimary};` + (n ? "font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:11px;" : "font-size:12px;"),
    t
  );
  return c.title = t, o.appendChild(c), o;
}
function lt(e) {
  return O(
    "span",
    `padding:1px 7px;border-radius:10px;font-size:10px;font-weight:700;letter-spacing:.04em;white-space:nowrap;background:${P.badgeBg};color:${P.badgeFg};`,
    e
  );
}
function un() {
  return O(
    "div",
    `display:flex;flex-direction:column;gap:2px;padding:14px 18px;border-radius:10px;background:${P.cardBg};border:1px solid ${P.cardBorder};`
  );
}
function Un() {
  const e = O("div", "flex:1;position:relative;min-height:0;min-width:0;"), t = O("div", "position:absolute;inset:0;");
  return t.dataset.gufeViewer = "", e.appendChild(t), { wrap: e, container: t };
}
const gi = !1;
function yi() {
  const e = O("span", "display:inline-flex;flex-direction:column;gap:2px;justify-content:center;");
  for (let t = 0; t < 3; t++)
    e.appendChild(O("span", `display:block;width:11px;height:1.5px;border-radius:1px;background:${P.btnFg};`));
  return e;
}
function vi(e, t, n = {}) {
  let o = n.open ?? gi, c = !1;
  const r = O("div", "flex-shrink:0;"), s = O("button", `${Be}display:inline-flex;align-items:center;gap:6px;padding:4px 8px;`);
  s.appendChild(yi()), s.setAttribute("aria-label", n.label || "Toggle menu");
  const i = () => {
    o && !c && (c = !0, r.appendChild(t())), r.style.display = o ? "" : "none", s.style.background = o ? P.btnBgActive : P.btnBg, s.setAttribute("aria-expanded", String(o));
  }, d = (g) => {
    g !== o && (o = g, i(), n.onToggle?.(o));
  };
  return s.onclick = () => d(!o), s.onmouseover = () => {
    s.style.background = o ? P.btnBgActive : P.btnBgHover;
  }, s.onmouseout = () => {
    s.style.background = o ? P.btnBgActive : P.btnBg;
  }, e.toggleEl.appendChild(s), i(), {
    panel: r,
    isOpen: () => o,
    setOpen: d
  };
}
const $i = ["debug", "gufe-debug"], bi = "debug", wi = "GUFE_VIZ_DEBUG";
function _i() {
  return !!globalThis[wi];
}
function Si() {
  try {
    const e = globalThis.location?.search;
    if (!e) return !1;
    const t = new URLSearchParams(e);
    return $i.some((n) => t.has(n));
  } catch {
    return !1;
  }
}
function Ci(e) {
  return e?.hasAttribute?.(bi) ? !0 : _i() || Si();
}
function ki(e) {
  try {
    return JSON.stringify(e, null, 2) ?? String(e);
  } catch (t) {
    return `<could not be stringified: ${me(t)}>`;
  }
}
function Ei(e, t, n) {
  if (!Ci(n)) return;
  const o = ki(t), c = t?.type, r = `[gufe-viz] ${e}${typeof c == "string" ? ` ${c}` : ""} (${o.length} chars)`, s = typeof console.groupCollapsed == "function";
  s ? console.groupCollapsed(r) : console.log(r), console.log(o), console.log(t), s && console.groupEnd?.();
}
const xi = 150;
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
      this.#o && clearTimeout(this.#o), this.#o = setTimeout(() => this.#e?.onResize?.(), xi);
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
    return this.#s(), this.#r = O(
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
function Ce(e, t) {
  typeof customElements > "u" || customElements.get(e) || customElements.define(e, t);
}
function Pi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ut = { exports: {} }, kn = {}, Re = {}, Oe = {}, En = {}, xn = {}, Pn = {}, cr;
function fn() {
  return cr || (cr = 1, (function(e) {
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
      const b = [v(m[0])];
      let k = 0;
      for (; k < u.length; )
        b.push(r), i(b, u[k]), b.push(r, v(m[++k]));
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
      return typeof m == "number" || typeof m == "boolean" || m === null ? m : v(Array.isArray(m) ? m.join(",") : m);
    }
    function y(m) {
      return new o(v(m));
    }
    e.stringify = y;
    function v(m) {
      return JSON.stringify(m).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    e.safeStringify = v;
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
  })(Pn)), Pn;
}
var Rn = {}, lr;
function dr() {
  return lr || (lr = 1, (function(e) {
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
        const y = this.toName(g), { prefix: v } = y, _ = (w = h.key) !== null && w !== void 0 ? w : h.ref;
        let S = this._values[v];
        if (S) {
          const u = S.get(_);
          if (u)
            return u;
        } else
          S = this._values[v] = /* @__PURE__ */ new Map();
        S.set(_, y);
        const p = this._scope[v] || (this._scope[v] = []), m = p.length;
        return p[m] = h.ref, y.setValue(h, { property: v, itemIndex: m }), y;
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
        return this._reduceValues(g, (y) => {
          if (y.value === void 0)
            throw new Error(`CodeGen: name "${y}" has no value`);
          return y.value.code;
        }, h, w);
      }
      _reduceValues(g, h, w = {}, y) {
        let v = t.nil;
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
              v = (0, t._)`${v}${b} ${m} = ${u};${this.opts._n}`;
            } else if (u = y?.(m))
              v = (0, t._)`${v}${u}${this.opts._n}`;
            else
              throw new n(m);
            p.set(m, o.Completed);
          });
        }
        return v;
      }
    }
    e.ValueScope = i;
  })(Rn)), Rn;
}
var ur;
function Y() {
  return ur || (ur = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
    const t = /* @__PURE__ */ fn(), n = /* @__PURE__ */ dr();
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
    var c = /* @__PURE__ */ dr();
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
      optimizeNames($, C) {
        return this;
      }
    }
    class s extends r {
      constructor($, C, j) {
        super(), this.varKind = $, this.name = C, this.rhs = j;
      }
      render({ es5: $, _n: C }) {
        const j = $ ? n.varKinds.var : this.varKind, K = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
        return `${j} ${this.name}${K};` + C;
      }
      optimizeNames($, C) {
        if ($[this.name.str])
          return this.rhs && (this.rhs = U(this.rhs, $, C)), this;
      }
      get names() {
        return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
      }
    }
    class i extends r {
      constructor($, C, j) {
        super(), this.lhs = $, this.rhs = C, this.sideEffects = j;
      }
      render({ _n: $ }) {
        return `${this.lhs} = ${this.rhs};` + $;
      }
      optimizeNames($, C) {
        if (!(this.lhs instanceof t.Name && !$[this.lhs.str] && !this.sideEffects))
          return this.rhs = U(this.rhs, $, C), this;
      }
      get names() {
        const $ = this.lhs instanceof t.Name ? {} : { ...this.lhs.names };
        return D($, this.rhs);
      }
    }
    class d extends i {
      constructor($, C, j, K) {
        super($, j, K), this.op = C;
      }
      render({ _n: $ }) {
        return `${this.lhs} ${this.op}= ${this.rhs};` + $;
      }
    }
    class g extends r {
      constructor($) {
        super(), this.label = $, this.names = {};
      }
      render({ _n: $ }) {
        return `${this.label}:` + $;
      }
    }
    class h extends r {
      constructor($) {
        super(), this.label = $, this.names = {};
      }
      render({ _n: $ }) {
        return `break${this.label ? ` ${this.label}` : ""};` + $;
      }
    }
    class w extends r {
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
    class y extends r {
      constructor($) {
        super(), this.code = $;
      }
      render({ _n: $ }) {
        return `${this.code};` + $;
      }
      optimizeNodes() {
        return `${this.code}` ? this : void 0;
      }
      optimizeNames($, C) {
        return this.code = U(this.code, $, C), this;
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
        return this.nodes.reduce((C, j) => C + j.render($), "");
      }
      optimizeNodes() {
        const { nodes: $ } = this;
        let C = $.length;
        for (; C--; ) {
          const j = $[C].optimizeNodes();
          Array.isArray(j) ? $.splice(C, 1, ...j) : j ? $[C] = j : $.splice(C, 1);
        }
        return $.length > 0 ? this : void 0;
      }
      optimizeNames($, C) {
        const { nodes: j } = this;
        let K = j.length;
        for (; K--; ) {
          const G = j[K];
          G.optimizeNames($, C) || (te($, G.names), j.splice(K, 1));
        }
        return j.length > 0 ? this : void 0;
      }
      get names() {
        return this.nodes.reduce(($, C) => T($, C.names), {});
      }
    }
    class _ extends v {
      render($) {
        return "{" + $._n + super.render($) + "}" + $._n;
      }
    }
    class S extends v {
    }
    class p extends _ {
    }
    p.kind = "else";
    class m extends _ {
      constructor($, C) {
        super(C), this.condition = $;
      }
      render($) {
        let C = `if(${this.condition})` + super.render($);
        return this.else && (C += "else " + this.else.render($)), C;
      }
      optimizeNodes() {
        super.optimizeNodes();
        const $ = this.condition;
        if ($ === !0)
          return this.nodes;
        let C = this.else;
        if (C) {
          const j = C.optimizeNodes();
          C = this.else = Array.isArray(j) ? new p(j) : j;
        }
        if (C)
          return $ === !1 ? C instanceof m ? C : C.nodes : this.nodes.length ? this : new m(J($), C instanceof m ? [C] : C.nodes);
        if (!($ === !1 || !this.nodes.length))
          return this;
      }
      optimizeNames($, C) {
        var j;
        if (this.else = (j = this.else) === null || j === void 0 ? void 0 : j.optimizeNames($, C), !!(super.optimizeNames($, C) || this.else))
          return this.condition = U(this.condition, $, C), this;
      }
      get names() {
        const $ = super.names;
        return D($, this.condition), this.else && T($, this.else.names), $;
      }
    }
    m.kind = "if";
    class u extends _ {
    }
    u.kind = "for";
    class b extends u {
      constructor($) {
        super(), this.iteration = $;
      }
      render($) {
        return `for(${this.iteration})` + super.render($);
      }
      optimizeNames($, C) {
        if (super.optimizeNames($, C))
          return this.iteration = U(this.iteration, $, C), this;
      }
      get names() {
        return T(super.names, this.iteration.names);
      }
    }
    class k extends u {
      constructor($, C, j, K) {
        super(), this.varKind = $, this.name = C, this.from = j, this.to = K;
      }
      render($) {
        const C = $.es5 ? n.varKinds.var : this.varKind, { name: j, from: K, to: G } = this;
        return `for(${C} ${j}=${K}; ${j}<${G}; ${j}++)` + super.render($);
      }
      get names() {
        const $ = D(super.names, this.from);
        return D($, this.to);
      }
    }
    class a extends u {
      constructor($, C, j, K) {
        super(), this.loop = $, this.varKind = C, this.name = j, this.iterable = K;
      }
      render($) {
        return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render($);
      }
      optimizeNames($, C) {
        if (super.optimizeNames($, C))
          return this.iterable = U(this.iterable, $, C), this;
      }
      get names() {
        return T(super.names, this.iterable.names);
      }
    }
    class l extends _ {
      constructor($, C, j) {
        super(), this.name = $, this.args = C, this.async = j;
      }
      render($) {
        return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render($);
      }
    }
    l.kind = "func";
    class f extends v {
      render($) {
        return "return " + super.render($);
      }
    }
    f.kind = "return";
    class E extends _ {
      render($) {
        let C = "try" + super.render($);
        return this.catch && (C += this.catch.render($)), this.finally && (C += this.finally.render($)), C;
      }
      optimizeNodes() {
        var $, C;
        return super.optimizeNodes(), ($ = this.catch) === null || $ === void 0 || $.optimizeNodes(), (C = this.finally) === null || C === void 0 || C.optimizeNodes(), this;
      }
      optimizeNames($, C) {
        var j, K;
        return super.optimizeNames($, C), (j = this.catch) === null || j === void 0 || j.optimizeNames($, C), (K = this.finally) === null || K === void 0 || K.optimizeNames($, C), this;
      }
      get names() {
        const $ = super.names;
        return this.catch && T($, this.catch.names), this.finally && T($, this.finally.names), $;
      }
    }
    class x extends _ {
      constructor($) {
        super(), this.error = $;
      }
      render($) {
        return `catch(${this.error})` + super.render($);
      }
    }
    x.kind = "catch";
    class F extends _ {
      render($) {
        return "finally" + super.render($);
      }
    }
    F.kind = "finally";
    class z {
      constructor($, C = {}) {
        this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ...C, _n: C.lines ? `
` : "" }, this._extScope = $, this._scope = new n.Scope({ parent: $ }), this._nodes = [new S()];
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
      scopeValue($, C) {
        const j = this._extScope.value($, C);
        return (this._values[j.prefix] || (this._values[j.prefix] = /* @__PURE__ */ new Set())).add(j), j;
      }
      getScopeValue($, C) {
        return this._extScope.getValue($, C);
      }
      // return code that assigns values in the external scope to the names that are used internally
      // (same names that were returned by gen.scopeName or gen.scopeValue)
      scopeRefs($) {
        return this._extScope.scopeRefs($, this._values);
      }
      scopeCode() {
        return this._extScope.scopeCode(this._values);
      }
      _def($, C, j, K) {
        const G = this._scope.toName(C);
        return j !== void 0 && K && (this._constants[G.str] = j), this._leafNode(new s($, G, j)), G;
      }
      // `const` declaration (`var` in es5 mode)
      const($, C, j) {
        return this._def(n.varKinds.const, $, C, j);
      }
      // `let` declaration with optional assignment (`var` in es5 mode)
      let($, C, j) {
        return this._def(n.varKinds.let, $, C, j);
      }
      // `var` declaration with optional assignment
      var($, C, j) {
        return this._def(n.varKinds.var, $, C, j);
      }
      // assignment code
      assign($, C, j) {
        return this._leafNode(new i($, C, j));
      }
      // `+=` code
      add($, C) {
        return this._leafNode(new d($, e.operators.ADD, C));
      }
      // appends passed SafeExpr to code or executes Block
      code($) {
        return typeof $ == "function" ? $() : $ !== t.nil && this._leafNode(new y($)), this;
      }
      // returns code for object literal for the passed argument list of key-value pairs
      object(...$) {
        const C = ["{"];
        for (const [j, K] of $)
          C.length > 1 && C.push(","), C.push(j), (j !== K || this.opts.es5) && (C.push(":"), (0, t.addCodeArg)(C, K));
        return C.push("}"), new t._Code(C);
      }
      // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
      if($, C, j) {
        if (this._blockNode(new m($)), C && j)
          this.code(C).else().code(j).endIf();
        else if (C)
          this.code(C).endIf();
        else if (j)
          throw new Error('CodeGen: "else" body without "then" body');
        return this;
      }
      // `else if` clause - invalid without `if` or after `else` clauses
      elseIf($) {
        return this._elseNode(new m($));
      }
      // `else` clause - only valid after `if` or `else if` clauses
      else() {
        return this._elseNode(new p());
      }
      // end `if` statement (needed if gen.if was used only with condition)
      endIf() {
        return this._endBlockNode(m, p);
      }
      _for($, C) {
        return this._blockNode($), C && this.code(C).endFor(), this;
      }
      // a generic `for` clause (or statement if `forBody` is passed)
      for($, C) {
        return this._for(new b($), C);
      }
      // `for` statement for a range of values
      forRange($, C, j, K, G = this.opts.es5 ? n.varKinds.var : n.varKinds.let) {
        const ne = this._scope.toName($);
        return this._for(new k(G, ne, C, j), () => K(ne));
      }
      // `for-of` statement (in es5 mode replace with a normal for loop)
      forOf($, C, j, K = n.varKinds.const) {
        const G = this._scope.toName($);
        if (this.opts.es5) {
          const ne = C instanceof t.Name ? C : this.var("_arr", C);
          return this.forRange("_i", 0, (0, t._)`${ne}.length`, (Q) => {
            this.var(G, (0, t._)`${ne}[${Q}]`), j(G);
          });
        }
        return this._for(new a("of", K, G, C), () => j(G));
      }
      // `for-in` statement.
      // With option `ownProperties` replaced with a `for-of` loop for object keys
      forIn($, C, j, K = this.opts.es5 ? n.varKinds.var : n.varKinds.const) {
        if (this.opts.ownProperties)
          return this.forOf($, (0, t._)`Object.keys(${C})`, j);
        const G = this._scope.toName($);
        return this._for(new a("in", K, G, C), () => j(G));
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
        return this._leafNode(new h($));
      }
      // `return` statement
      return($) {
        const C = new f();
        if (this._blockNode(C), this.code($), C.nodes.length !== 1)
          throw new Error('CodeGen: "return" should have one node');
        return this._endBlockNode(f);
      }
      // `try` statement
      try($, C, j) {
        if (!C && !j)
          throw new Error('CodeGen: "try" without "catch" and "finally"');
        const K = new E();
        if (this._blockNode(K), this.code($), C) {
          const G = this.name("e");
          this._currNode = K.catch = new x(G), C(G);
        }
        return j && (this._currNode = K.finally = new F(), this.code(j)), this._endBlockNode(x, F);
      }
      // `throw` statement
      throw($) {
        return this._leafNode(new w($));
      }
      // start self-balancing block
      block($, C) {
        return this._blockStarts.push(this._nodes.length), $ && this.code($).endBlock(C), this;
      }
      // end the current self-balancing block
      endBlock($) {
        const C = this._blockStarts.pop();
        if (C === void 0)
          throw new Error("CodeGen: not in self-balancing block");
        const j = this._nodes.length - C;
        if (j < 0 || $ !== void 0 && j !== $)
          throw new Error(`CodeGen: wrong number of nodes: ${j} vs ${$} expected`);
        return this._nodes.length = C, this;
      }
      // `function` heading (or definition if funcBody is passed)
      func($, C = t.nil, j, K) {
        return this._blockNode(new l($, C, j)), K && this.code(K).endFunc(), this;
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
      _endBlockNode($, C) {
        const j = this._currNode;
        if (j instanceof $ || C && j instanceof C)
          return this._nodes.pop(), this;
        throw new Error(`CodeGen: not in block "${C ? `${$.kind}/${C.kind}` : $.kind}"`);
      }
      _elseNode($) {
        const C = this._currNode;
        if (!(C instanceof m))
          throw new Error('CodeGen: "else" without "if"');
        return this._currNode = C.else = $, this;
      }
      get _root() {
        return this._nodes[0];
      }
      get _currNode() {
        const $ = this._nodes;
        return $[$.length - 1];
      }
      set _currNode($) {
        const C = this._nodes;
        C[C.length - 1] = $;
      }
    }
    e.CodeGen = z;
    function T(N, $) {
      for (const C in $)
        N[C] = (N[C] || 0) + ($[C] || 0);
      return N;
    }
    function D(N, $) {
      return $ instanceof t._CodeOrName ? T(N, $.names) : N;
    }
    function U(N, $, C) {
      if (N instanceof t.Name)
        return j(N);
      if (!K(N))
        return N;
      return new t._Code(N._items.reduce((G, ne) => (ne instanceof t.Name && (ne = j(ne)), ne instanceof t._Code ? G.push(...ne._items) : G.push(ne), G), []));
      function j(G) {
        const ne = C[G.str];
        return ne === void 0 || $[G.str] !== 1 ? G : (delete $[G.str], ne);
      }
      function K(G) {
        return G instanceof t._Code && G._items.some((ne) => ne instanceof t.Name && $[ne.str] === 1 && C[ne.str] !== void 0);
      }
    }
    function te(N, $) {
      for (const C in $)
        N[C] = (N[C] || 0) - ($[C] || 0);
    }
    function J(N) {
      return typeof N == "boolean" || typeof N == "number" || N === null ? !N : (0, t._)`!${q(N)}`;
    }
    e.not = J;
    const se = A(e.operators.AND);
    function W(...N) {
      return N.reduce(se);
    }
    e.and = W;
    const ae = A(e.operators.OR);
    function B(...N) {
      return N.reduce(ae);
    }
    e.or = B;
    function A(N) {
      return ($, C) => $ === t.nil ? C : C === t.nil ? $ : (0, t._)`${q($)} ${N} ${q(C)}`;
    }
    function q(N) {
      return N instanceof t.Name ? N : (0, t._)`(${N})`;
    }
  })(xn)), xn;
}
var X = {}, fr;
function ee() {
  if (fr) return X;
  fr = 1, Object.defineProperty(X, "__esModule", { value: !0 }), X.checkStrictMode = X.getErrorPath = X.Type = X.useFunc = X.setEvaluated = X.evaluatedPropsToName = X.mergeEvaluated = X.eachItem = X.unescapeJsonPointer = X.escapeJsonPointer = X.escapeFragment = X.unescapeFragment = X.schemaRefOrVal = X.schemaHasRulesButRef = X.schemaHasRules = X.checkUnknownRules = X.alwaysValidSchema = X.toHash = void 0;
  const e = /* @__PURE__ */ Y(), t = /* @__PURE__ */ fn();
  function n(a) {
    const l = {};
    for (const f of a)
      l[f] = !0;
    return l;
  }
  X.toHash = n;
  function o(a, l) {
    return typeof l == "boolean" ? l : Object.keys(l).length === 0 ? !0 : (c(a, l), !r(l, a.self.RULES.all));
  }
  X.alwaysValidSchema = o;
  function c(a, l = a.schema) {
    const { opts: f, self: E } = a;
    if (!f.strictSchema || typeof l == "boolean")
      return;
    const x = E.RULES.keywords;
    for (const F in l)
      x[F] || k(a, `unknown keyword: "${F}"`);
  }
  X.checkUnknownRules = c;
  function r(a, l) {
    if (typeof a == "boolean")
      return !a;
    for (const f in a)
      if (l[f])
        return !0;
    return !1;
  }
  X.schemaHasRules = r;
  function s(a, l) {
    if (typeof a == "boolean")
      return !a;
    for (const f in a)
      if (f !== "$ref" && l.all[f])
        return !0;
    return !1;
  }
  X.schemaHasRulesButRef = s;
  function i({ topSchemaRef: a, schemaPath: l }, f, E, x) {
    if (!x) {
      if (typeof f == "number" || typeof f == "boolean")
        return f;
      if (typeof f == "string")
        return (0, e._)`${f}`;
    }
    return (0, e._)`${a}${l}${(0, e.getProperty)(E)}`;
  }
  X.schemaRefOrVal = i;
  function d(a) {
    return w(decodeURIComponent(a));
  }
  X.unescapeFragment = d;
  function g(a) {
    return encodeURIComponent(h(a));
  }
  X.escapeFragment = g;
  function h(a) {
    return typeof a == "number" ? `${a}` : a.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  X.escapeJsonPointer = h;
  function w(a) {
    return a.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  X.unescapeJsonPointer = w;
  function y(a, l) {
    if (Array.isArray(a))
      for (const f of a)
        l(f);
    else
      l(a);
  }
  X.eachItem = y;
  function v({ mergeNames: a, mergeToName: l, mergeValues: f, resultToName: E }) {
    return (x, F, z, T) => {
      const D = z === void 0 ? F : z instanceof e.Name ? (F instanceof e.Name ? a(x, F, z) : l(x, F, z), z) : F instanceof e.Name ? (l(x, z, F), F) : f(F, z);
      return T === e.Name && !(D instanceof e.Name) ? E(x, D) : D;
    };
  }
  X.mergeEvaluated = {
    props: v({
      mergeNames: (a, l, f) => a.if((0, e._)`${f} !== true && ${l} !== undefined`, () => {
        a.if((0, e._)`${l} === true`, () => a.assign(f, !0), () => a.assign(f, (0, e._)`${f} || {}`).code((0, e._)`Object.assign(${f}, ${l})`));
      }),
      mergeToName: (a, l, f) => a.if((0, e._)`${f} !== true`, () => {
        l === !0 ? a.assign(f, !0) : (a.assign(f, (0, e._)`${f} || {}`), S(a, f, l));
      }),
      mergeValues: (a, l) => a === !0 ? !0 : { ...a, ...l },
      resultToName: _
    }),
    items: v({
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
  X.evaluatedPropsToName = _;
  function S(a, l, f) {
    Object.keys(f).forEach((E) => a.assign((0, e._)`${l}${(0, e.getProperty)(E)}`, !0));
  }
  X.setEvaluated = S;
  const p = {};
  function m(a, l) {
    return a.scopeValue("func", {
      ref: l,
      code: p[l.code] || (p[l.code] = new t._Code(l.code))
    });
  }
  X.useFunc = m;
  var u;
  (function(a) {
    a[a.Num = 0] = "Num", a[a.Str = 1] = "Str";
  })(u || (X.Type = u = {}));
  function b(a, l, f) {
    if (a instanceof e.Name) {
      const E = l === u.Num;
      return f ? E ? (0, e._)`"[" + ${a} + "]"` : (0, e._)`"['" + ${a} + "']"` : E ? (0, e._)`"/" + ${a}` : (0, e._)`"/" + ${a}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return f ? (0, e.getProperty)(a).toString() : "/" + h(a);
  }
  X.getErrorPath = b;
  function k(a, l, f = a.opts.strictSchema) {
    if (f) {
      if (l = `strict mode: ${l}`, f === !0)
        throw new Error(l);
      a.self.logger.warn(l);
    }
  }
  return X.checkStrictMode = k, X;
}
var ft = {}, pr;
function ke() {
  if (pr) return ft;
  pr = 1, Object.defineProperty(ft, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Y(), t = {
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
var hr;
function gn() {
  return hr || (hr = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
    const t = /* @__PURE__ */ Y(), n = /* @__PURE__ */ ee(), o = /* @__PURE__ */ ke();
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
      return b === !1 ? (0, t._)`{}` : y(p, m, u);
    }
    function y(p, m, u = {}) {
      const { gen: b, it: k } = p, a = [
        v(k, u),
        _(p, u)
      ];
      return S(p, m, a), b.object(...a);
    }
    function v({ errorPath: p }, { instancePath: m }) {
      const u = m ? (0, t.str)`${p}${(0, n.getErrorPath)(m, n.Type.Str)}` : p;
      return [o.default.instancePath, (0, t.strConcat)(o.default.instancePath, u)];
    }
    function _({ keyword: p, it: { errSchemaPath: m } }, { schemaPath: u, parentSchema: b }) {
      let k = b ? m : (0, t.str)`${m}/${p}`;
      return u && (k = (0, t.str)`${k}${(0, n.getErrorPath)(u, n.Type.Str)}`), [h.schemaPath, k];
    }
    function S(p, { params: m, message: u }, b) {
      const { keyword: k, data: a, schemaValue: l, it: f } = p, { opts: E, propertyName: x, topSchemaRef: F, schemaPath: z } = f;
      b.push([h.keyword, k], [h.params, typeof m == "function" ? m(p) : m || (0, t._)`{}`]), E.messages && b.push([h.message, typeof u == "function" ? u(p) : u]), E.verbose && b.push([h.schema, l], [h.parentSchema, (0, t._)`${F}${z}`], [o.default.data, a]), x && b.push([h.propertyName, x]);
    }
  })(En)), En;
}
var mr;
function Ri() {
  if (mr) return Oe;
  mr = 1, Object.defineProperty(Oe, "__esModule", { value: !0 }), Oe.boolOrEmptySchema = Oe.topBoolOrEmptySchema = void 0;
  const e = /* @__PURE__ */ gn(), t = /* @__PURE__ */ Y(), n = /* @__PURE__ */ ke(), o = {
    message: "boolean schema is false"
  };
  function c(i) {
    const { gen: d, schema: g, validateName: h } = i;
    g === !1 ? s(i, !1) : typeof g == "object" && g.$async === !0 ? d.return(n.default.data) : (d.assign((0, t._)`${h}.errors`, null), d.return(!0));
  }
  Oe.topBoolOrEmptySchema = c;
  function r(i, d) {
    const { gen: g, schema: h } = i;
    h === !1 ? (g.var(d, !1), s(i)) : g.var(d, !0);
  }
  Oe.boolOrEmptySchema = r;
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
  return Oe;
}
var ue = {}, Te = {}, gr;
function Ho() {
  if (gr) return Te;
  gr = 1, Object.defineProperty(Te, "__esModule", { value: !0 }), Te.getRules = Te.isJSONType = void 0;
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
var Ae = {}, yr;
function Jo() {
  if (yr) return Ae;
  yr = 1, Object.defineProperty(Ae, "__esModule", { value: !0 }), Ae.shouldUseRule = Ae.shouldUseGroup = Ae.schemaHasRulesForType = void 0;
  function e({ schema: o, self: c }, r) {
    const s = c.RULES.types[r];
    return s && s !== !0 && t(o, s);
  }
  Ae.schemaHasRulesForType = e;
  function t(o, c) {
    return c.rules.some((r) => n(o, r));
  }
  Ae.shouldUseGroup = t;
  function n(o, c) {
    var r;
    return o[c.keyword] !== void 0 || ((r = c.definition.implements) === null || r === void 0 ? void 0 : r.some((s) => o[s] !== void 0));
  }
  return Ae.shouldUseRule = n, Ae;
}
var vr;
function pn() {
  if (vr) return ue;
  vr = 1, Object.defineProperty(ue, "__esModule", { value: !0 }), ue.reportTypeError = ue.checkDataTypes = ue.checkDataType = ue.coerceAndCheckDataType = ue.getJSONTypes = ue.getSchemaTypes = ue.DataType = void 0;
  const e = /* @__PURE__ */ Ho(), t = /* @__PURE__ */ Jo(), n = /* @__PURE__ */ gn(), o = /* @__PURE__ */ Y(), c = /* @__PURE__ */ ee();
  var r;
  (function(u) {
    u[u.Correct = 0] = "Correct", u[u.Wrong = 1] = "Wrong";
  })(r || (ue.DataType = r = {}));
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
  ue.getSchemaTypes = s;
  function i(u) {
    const b = Array.isArray(u) ? u : u ? [u] : [];
    if (b.every(e.isJSONType))
      return b;
    throw new Error("type must be JSONType or JSONType[]: " + b.join(","));
  }
  ue.getJSONTypes = i;
  function d(u, b) {
    const { gen: k, data: a, opts: l } = u, f = h(b, l.coerceTypes), E = b.length > 0 && !(f.length === 0 && b.length === 1 && (0, t.schemaHasRulesForType)(u, b[0]));
    if (E) {
      const x = _(b, a, l.strictNumbers, r.Wrong);
      k.if(x, () => {
        f.length ? w(u, b, f) : p(u);
      });
    }
    return E;
  }
  ue.coerceAndCheckDataType = d;
  const g = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
  function h(u, b) {
    return b ? u.filter((k) => g.has(k) || b === "array" && k === "array") : [];
  }
  function w(u, b, k) {
    const { gen: a, data: l, opts: f } = u, E = a.let("dataType", (0, o._)`typeof ${l}`), x = a.let("coerced", (0, o._)`undefined`);
    f.coerceTypes === "array" && a.if((0, o._)`${E} == 'object' && Array.isArray(${l}) && ${l}.length == 1`, () => a.assign(l, (0, o._)`${l}[0]`).assign(E, (0, o._)`typeof ${l}`).if(_(b, l, f.strictNumbers), () => a.assign(x, l))), a.if((0, o._)`${x} !== undefined`);
    for (const z of k)
      (g.has(z) || z === "array" && f.coerceTypes === "array") && F(z);
    a.else(), p(u), a.endIf(), a.if((0, o._)`${x} !== undefined`, () => {
      a.assign(l, x), y(u, x);
    });
    function F(z) {
      switch (z) {
        case "string":
          a.elseIf((0, o._)`${E} == "number" || ${E} == "boolean"`).assign(x, (0, o._)`"" + ${l}`).elseIf((0, o._)`${l} === null`).assign(x, (0, o._)`""`);
          return;
        case "number":
          a.elseIf((0, o._)`${E} == "boolean" || ${l} === null
              || (${E} == "string" && ${l} && ${l} == +${l})`).assign(x, (0, o._)`+${l}`);
          return;
        case "integer":
          a.elseIf((0, o._)`${E} === "boolean" || ${l} === null
              || (${E} === "string" && ${l} && ${l} == +${l} && !(${l} % 1))`).assign(x, (0, o._)`+${l}`);
          return;
        case "boolean":
          a.elseIf((0, o._)`${l} === "false" || ${l} === 0 || ${l} === null`).assign(x, !1).elseIf((0, o._)`${l} === "true" || ${l} === 1`).assign(x, !0);
          return;
        case "null":
          a.elseIf((0, o._)`${l} === "" || ${l} === 0 || ${l} === false`), a.assign(x, null);
          return;
        case "array":
          a.elseIf((0, o._)`${E} === "string" || ${E} === "number"
              || ${E} === "boolean" || ${l} === null`).assign(x, (0, o._)`[${l}]`);
      }
    }
  }
  function y({ gen: u, parentData: b, parentDataProperty: k }, a) {
    u.if((0, o._)`${b} !== undefined`, () => u.assign((0, o._)`${b}[${k}]`, a));
  }
  function v(u, b, k, a = r.Correct) {
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
    function E(x = o.nil) {
      return (0, o.and)((0, o._)`typeof ${b} == "number"`, x, k ? (0, o._)`isFinite(${b})` : o.nil);
    }
  }
  ue.checkDataType = v;
  function _(u, b, k, a) {
    if (u.length === 1)
      return v(u[0], b, k, a);
    let l;
    const f = (0, c.toHash)(u);
    if (f.array && f.object) {
      const E = (0, o._)`typeof ${b} != "object"`;
      l = f.null ? E : (0, o._)`!${b} || ${E}`, delete f.null, delete f.array, delete f.object;
    } else
      l = o.nil;
    f.number && delete f.integer;
    for (const E in f)
      l = (0, o.and)(l, v(E, b, k, a));
    return l;
  }
  ue.checkDataTypes = _;
  const S = {
    message: ({ schema: u }) => `must be ${u}`,
    params: ({ schema: u, schemaValue: b }) => typeof u == "string" ? (0, o._)`{type: ${u}}` : (0, o._)`{type: ${b}}`
  };
  function p(u) {
    const b = m(u);
    (0, n.reportError)(b, S);
  }
  ue.reportTypeError = p;
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
  return ue;
}
var nt = {}, $r;
function Ai() {
  if ($r) return nt;
  $r = 1, Object.defineProperty(nt, "__esModule", { value: !0 }), nt.assignDefaults = void 0;
  const e = /* @__PURE__ */ Y(), t = /* @__PURE__ */ ee();
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
    let y = (0, e._)`${w} === undefined`;
    h.useDefaults === "empty" && (y = (0, e._)`${y} || ${w} === null || ${w} === ""`), i.if(y, (0, e._)`${w} = ${(0, e.stringify)(s)}`);
  }
  return nt;
}
var be = {}, re = {}, br;
function Ee() {
  if (br) return re;
  br = 1, Object.defineProperty(re, "__esModule", { value: !0 }), re.validateUnion = re.validateArray = re.usePattern = re.callValidateCode = re.schemaProperties = re.allSchemaProperties = re.noPropertyInData = re.propertyInData = re.isOwnProperty = re.hasPropFunc = re.reportMissingProp = re.checkMissingProp = re.checkReportMissingProp = void 0;
  const e = /* @__PURE__ */ Y(), t = /* @__PURE__ */ ee(), n = /* @__PURE__ */ ke(), o = /* @__PURE__ */ ee();
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
  function y(u, b) {
    return w(b).filter((k) => !(0, t.alwaysValidSchema)(u, b[k]));
  }
  re.schemaProperties = y;
  function v({ schemaCode: u, data: b, it: { gen: k, topSchemaRef: a, schemaPath: l, errorPath: f }, it: E }, x, F, z) {
    const T = z ? (0, e._)`${u}, ${b}, ${a}${l}` : b, D = [
      [n.default.instancePath, (0, e.strConcat)(n.default.instancePath, f)],
      [n.default.parentData, E.parentData],
      [n.default.parentDataProperty, E.parentDataProperty],
      [n.default.rootData, n.default.rootData]
    ];
    E.opts.dynamicRef && D.push([n.default.dynamicAnchors, n.default.dynamicAnchors]);
    const U = (0, e._)`${T}, ${k.object(...D)}`;
    return F !== e.nil ? (0, e._)`${x}.call(${F}, ${U})` : (0, e._)`${x}(${U})`;
  }
  re.callValidateCode = v;
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
      const x = b.let("valid", !0);
      return E(() => b.assign(x, !1)), x;
    }
    return b.var(f, !0), E(() => b.break()), f;
    function E(x) {
      const F = b.const("len", (0, e._)`${k}.length`);
      b.forRange("i", 0, F, (z) => {
        u.subschema({
          keyword: a,
          dataProp: z,
          dataPropType: t.Type.Num
        }, f), b.if((0, e.not)(f), x);
      });
    }
  }
  re.validateArray = p;
  function m(u) {
    const { gen: b, schema: k, keyword: a, it: l } = u;
    if (!Array.isArray(k))
      throw new Error("ajv implementation error");
    if (k.some((F) => (0, t.alwaysValidSchema)(l, F)) && !l.opts.unevaluated)
      return;
    const E = b.let("valid", !1), x = b.name("_valid");
    b.block(() => k.forEach((F, z) => {
      const T = u.subschema({
        keyword: a,
        schemaProp: z,
        compositeRule: !0
      }, x);
      b.assign(E, (0, e._)`${E} || ${x}`), u.mergeValidEvaluated(T, x) || b.if((0, e.not)(E));
    })), u.result(E, () => u.reset(), () => u.error(!0));
  }
  return re.validateUnion = m, re;
}
var wr;
function Fi() {
  if (wr) return be;
  wr = 1, Object.defineProperty(be, "__esModule", { value: !0 }), be.validateKeywordUsage = be.validSchemaType = be.funcKeywordCode = be.macroKeywordCode = void 0;
  const e = /* @__PURE__ */ Y(), t = /* @__PURE__ */ ke(), n = /* @__PURE__ */ Ee(), o = /* @__PURE__ */ gn();
  function c(y, v) {
    const { gen: _, keyword: S, schema: p, parentSchema: m, it: u } = y, b = v.macro.call(u.self, p, m, u), k = g(_, S, b);
    u.opts.validateSchema !== !1 && u.self.validateSchema(b, !0);
    const a = _.name("valid");
    y.subschema({
      schema: b,
      schemaPath: e.nil,
      errSchemaPath: `${u.errSchemaPath}/${S}`,
      topSchemaRef: k,
      compositeRule: !0
    }, a), y.pass(a, () => y.error(!0));
  }
  be.macroKeywordCode = c;
  function r(y, v) {
    var _;
    const { gen: S, keyword: p, schema: m, parentSchema: u, $data: b, it: k } = y;
    d(k, v);
    const a = !b && v.compile ? v.compile.call(k.self, m, u, k) : v.validate, l = g(S, p, a), f = S.let("valid");
    y.block$data(f, E), y.ok((_ = v.valid) !== null && _ !== void 0 ? _ : f);
    function E() {
      if (v.errors === !1)
        z(), v.modifying && s(y), T(() => y.error());
      else {
        const D = v.async ? x() : F();
        v.modifying && s(y), T(() => i(y, D));
      }
    }
    function x() {
      const D = S.let("ruleErrs", null);
      return S.try(() => z((0, e._)`await `), (U) => S.assign(f, !1).if((0, e._)`${U} instanceof ${k.ValidationError}`, () => S.assign(D, (0, e._)`${U}.errors`), () => S.throw(U))), D;
    }
    function F() {
      const D = (0, e._)`${l}.errors`;
      return S.assign(D, null), z(e.nil), D;
    }
    function z(D = v.async ? (0, e._)`await ` : e.nil) {
      const U = k.opts.passContext ? t.default.this : t.default.self, te = !("compile" in v && !b || v.schema === !1);
      S.assign(f, (0, e._)`${D}${(0, n.callValidateCode)(y, l, U, te)}`, v.modifying);
    }
    function T(D) {
      var U;
      S.if((0, e.not)((U = v.valid) !== null && U !== void 0 ? U : f), D);
    }
  }
  be.funcKeywordCode = r;
  function s(y) {
    const { gen: v, data: _, it: S } = y;
    v.if(S.parentData, () => v.assign(_, (0, e._)`${S.parentData}[${S.parentDataProperty}]`));
  }
  function i(y, v) {
    const { gen: _ } = y;
    _.if((0, e._)`Array.isArray(${v})`, () => {
      _.assign(t.default.vErrors, (0, e._)`${t.default.vErrors} === null ? ${v} : ${t.default.vErrors}.concat(${v})`).assign(t.default.errors, (0, e._)`${t.default.vErrors}.length`), (0, o.extendErrors)(y);
    }, () => y.error());
  }
  function d({ schemaEnv: y }, v) {
    if (v.async && !y.$async)
      throw new Error("async keyword in sync schema");
  }
  function g(y, v, _) {
    if (_ === void 0)
      throw new Error(`keyword "${v}" failed to compile`);
    return y.scopeValue("keyword", typeof _ == "function" ? { ref: _ } : { ref: _, code: (0, e.stringify)(_) });
  }
  function h(y, v, _ = !1) {
    return !v.length || v.some((S) => S === "array" ? Array.isArray(y) : S === "object" ? y && typeof y == "object" && !Array.isArray(y) : typeof y == S || _ && typeof y > "u");
  }
  be.validSchemaType = h;
  function w({ schema: y, opts: v, self: _, errSchemaPath: S }, p, m) {
    if (Array.isArray(p.keyword) ? !p.keyword.includes(m) : p.keyword !== m)
      throw new Error("ajv implementation error");
    const u = p.dependencies;
    if (u?.some((b) => !Object.prototype.hasOwnProperty.call(y, b)))
      throw new Error(`parent schema must have dependencies of ${m}: ${u.join(",")}`);
    if (p.validateSchema && !p.validateSchema(y[m])) {
      const k = `keyword "${m}" value is invalid at path "${S}": ` + _.errorsText(p.validateSchema.errors);
      if (v.validateSchema === "log")
        _.logger.error(k);
      else
        throw new Error(k);
    }
  }
  return be.validateKeywordUsage = w, be;
}
var Fe = {}, _r;
function Ni() {
  if (_r) return Fe;
  _r = 1, Object.defineProperty(Fe, "__esModule", { value: !0 }), Fe.extendSubschemaMode = Fe.extendSubschemaData = Fe.getSubschema = void 0;
  const e = /* @__PURE__ */ Y(), t = /* @__PURE__ */ ee();
  function n(r, { keyword: s, schemaProp: i, schema: d, schemaPath: g, errSchemaPath: h, topSchemaRef: w }) {
    if (s !== void 0 && d !== void 0)
      throw new Error('both "keyword" and "schema" passed, only one allowed');
    if (s !== void 0) {
      const y = r.schema[s];
      return i === void 0 ? {
        schema: y,
        schemaPath: (0, e._)`${r.schemaPath}${(0, e.getProperty)(s)}`,
        errSchemaPath: `${r.errSchemaPath}/${s}`
      } : {
        schema: y[i],
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
  Fe.getSubschema = n;
  function o(r, s, { dataProp: i, dataPropType: d, data: g, dataTypes: h, propertyName: w }) {
    if (g !== void 0 && i !== void 0)
      throw new Error('both "data" and "dataProp" passed, only one allowed');
    const { gen: y } = s;
    if (i !== void 0) {
      const { errorPath: _, dataPathArr: S, opts: p } = s, m = y.let("data", (0, e._)`${s.data}${(0, e.getProperty)(i)}`, !0);
      v(m), r.errorPath = (0, e.str)`${_}${(0, t.getErrorPath)(i, d, p.jsPropertySyntax)}`, r.parentDataProperty = (0, e._)`${i}`, r.dataPathArr = [...S, r.parentDataProperty];
    }
    if (g !== void 0) {
      const _ = g instanceof e.Name ? g : y.let("data", g, !0);
      v(_), w !== void 0 && (r.propertyName = w);
    }
    h && (r.dataTypes = h);
    function v(_) {
      r.data = _, r.dataLevel = s.dataLevel + 1, r.dataTypes = [], s.definedProperties = /* @__PURE__ */ new Set(), r.parentData = s.data, r.dataNames = [...s.dataNames, _];
    }
  }
  Fe.extendSubschemaData = o;
  function c(r, { jtdDiscriminator: s, jtdMetadata: i, compositeRule: d, createErrors: g, allErrors: h }) {
    d !== void 0 && (r.compositeRule = d), g !== void 0 && (r.createErrors = g), h !== void 0 && (r.allErrors = h), r.jtdDiscriminator = s, r.jtdMetadata = i;
  }
  return Fe.extendSubschemaMode = c, Fe;
}
var fe = {}, An, Sr;
function Wo() {
  return Sr || (Sr = 1, An = function e(t, n) {
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
var Fn = { exports: {} }, Cr;
function Mi() {
  if (Cr) return Fn.exports;
  Cr = 1;
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
  function t(o, c, r, s, i, d, g, h, w, y) {
    if (s && typeof s == "object" && !Array.isArray(s)) {
      c(s, i, d, g, h, w, y);
      for (var v in s) {
        var _ = s[v];
        if (Array.isArray(_)) {
          if (v in e.arrayKeywords)
            for (var S = 0; S < _.length; S++)
              t(o, c, r, _[S], i + "/" + v + "/" + S, d, i, v, s, S);
        } else if (v in e.propsKeywords) {
          if (_ && typeof _ == "object")
            for (var p in _)
              t(o, c, r, _[p], i + "/" + v + "/" + n(p), d, i, v, s, p);
        } else (v in e.keywords || o.allKeys && !(v in e.skipKeywords)) && t(o, c, r, _, i + "/" + v, d, i, v, s);
      }
      r(s, i, d, g, h, w, y);
    }
  }
  function n(o) {
    return o.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  return Fn.exports;
}
var kr;
function yn() {
  if (kr) return fe;
  kr = 1, Object.defineProperty(fe, "__esModule", { value: !0 }), fe.getSchemaRefs = fe.resolveUrl = fe.normalizeId = fe._getFullPath = fe.getFullPath = fe.inlineRef = void 0;
  const e = /* @__PURE__ */ ee(), t = Wo(), n = Mi(), o = /* @__PURE__ */ new Set([
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
  function y(S, p, m) {
    return m = w(m), S.resolve(p, m);
  }
  fe.resolveUrl = y;
  const v = /^[a-z_][-a-z0-9._]*$/i;
  function _(S, p) {
    if (typeof S == "boolean")
      return {};
    const { schemaId: m, uriResolver: u } = this.opts, b = w(S[m] || p), k = { "": b }, a = d(u, b, !1), l = {}, f = /* @__PURE__ */ new Set();
    return n(S, { allKeys: !0 }, (F, z, T, D) => {
      if (D === void 0)
        return;
      const U = a + z;
      let te = k[D];
      typeof F[m] == "string" && (te = J.call(this, F[m])), se.call(this, F.$anchor), se.call(this, F.$dynamicAnchor), k[z] = te;
      function J(W) {
        const ae = this.opts.uriResolver.resolve;
        if (W = w(te ? ae(te, W) : W), f.has(W))
          throw x(W);
        f.add(W);
        let B = this.refs[W];
        return typeof B == "string" && (B = this.refs[B]), typeof B == "object" ? E(F, B.schema, W) : W !== w(U) && (W[0] === "#" ? (E(F, l[W], W), l[W] = F) : this.refs[W] = U), W;
      }
      function se(W) {
        if (typeof W == "string") {
          if (!v.test(W))
            throw new Error(`invalid anchor "${W}"`);
          J.call(this, `#${W}`);
        }
      }
    }), l;
    function E(F, z, T) {
      if (z !== void 0 && !t(F, z))
        throw x(T);
    }
    function x(F) {
      return new Error(`reference "${F}" resolves to more than one schema`);
    }
  }
  return fe.getSchemaRefs = _, fe;
}
var Er;
function vn() {
  if (Er) return Re;
  Er = 1, Object.defineProperty(Re, "__esModule", { value: !0 }), Re.getData = Re.KeywordCxt = Re.validateFunctionCode = void 0;
  const e = /* @__PURE__ */ Ri(), t = /* @__PURE__ */ pn(), n = /* @__PURE__ */ Jo(), o = /* @__PURE__ */ pn(), c = /* @__PURE__ */ Ai(), r = /* @__PURE__ */ Fi(), s = /* @__PURE__ */ Ni(), i = /* @__PURE__ */ Y(), d = /* @__PURE__ */ ke(), g = /* @__PURE__ */ yn(), h = /* @__PURE__ */ ee(), w = /* @__PURE__ */ gn();
  function y(R) {
    if (a(R) && (f(R), k(R))) {
      p(R);
      return;
    }
    v(R, () => (0, e.topBoolOrEmptySchema)(R));
  }
  Re.validateFunctionCode = y;
  function v({ gen: R, validateName: M, schema: V, schemaEnv: L, opts: H }, Z) {
    H.code.es5 ? R.func(M, (0, i._)`${d.default.data}, ${d.default.valCxt}`, L.$async, () => {
      R.code((0, i._)`"use strict"; ${u(V, H)}`), S(R, H), R.code(Z);
    }) : R.func(M, (0, i._)`${d.default.data}, ${_(H)}`, L.$async, () => R.code(u(V, H)).code(Z));
  }
  function _(R) {
    return (0, i._)`{${d.default.instancePath}="", ${d.default.parentData}, ${d.default.parentDataProperty}, ${d.default.rootData}=${d.default.data}${R.dynamicRef ? (0, i._)`, ${d.default.dynamicAnchors}={}` : i.nil}}={}`;
  }
  function S(R, M) {
    R.if(d.default.valCxt, () => {
      R.var(d.default.instancePath, (0, i._)`${d.default.valCxt}.${d.default.instancePath}`), R.var(d.default.parentData, (0, i._)`${d.default.valCxt}.${d.default.parentData}`), R.var(d.default.parentDataProperty, (0, i._)`${d.default.valCxt}.${d.default.parentDataProperty}`), R.var(d.default.rootData, (0, i._)`${d.default.valCxt}.${d.default.rootData}`), M.dynamicRef && R.var(d.default.dynamicAnchors, (0, i._)`${d.default.valCxt}.${d.default.dynamicAnchors}`);
    }, () => {
      R.var(d.default.instancePath, (0, i._)`""`), R.var(d.default.parentData, (0, i._)`undefined`), R.var(d.default.parentDataProperty, (0, i._)`undefined`), R.var(d.default.rootData, d.default.data), M.dynamicRef && R.var(d.default.dynamicAnchors, (0, i._)`{}`);
    });
  }
  function p(R) {
    const { schema: M, opts: V, gen: L } = R;
    v(R, () => {
      V.$comment && M.$comment && D(R), F(R), L.let(d.default.vErrors, null), L.let(d.default.errors, 0), V.unevaluated && m(R), E(R), U(R);
    });
  }
  function m(R) {
    const { gen: M, validateName: V } = R;
    R.evaluated = M.const("evaluated", (0, i._)`${V}.evaluated`), M.if((0, i._)`${R.evaluated}.dynamicProps`, () => M.assign((0, i._)`${R.evaluated}.props`, (0, i._)`undefined`)), M.if((0, i._)`${R.evaluated}.dynamicItems`, () => M.assign((0, i._)`${R.evaluated}.items`, (0, i._)`undefined`));
  }
  function u(R, M) {
    const V = typeof R == "object" && R[M.schemaId];
    return V && (M.code.source || M.code.process) ? (0, i._)`/*# sourceURL=${V} */` : i.nil;
  }
  function b(R, M) {
    if (a(R) && (f(R), k(R))) {
      l(R, M);
      return;
    }
    (0, e.boolOrEmptySchema)(R, M);
  }
  function k({ schema: R, self: M }) {
    if (typeof R == "boolean")
      return !R;
    for (const V in R)
      if (M.RULES.all[V])
        return !0;
    return !1;
  }
  function a(R) {
    return typeof R.schema != "boolean";
  }
  function l(R, M) {
    const { schema: V, gen: L, opts: H } = R;
    H.$comment && V.$comment && D(R), z(R), T(R);
    const Z = L.const("_errs", d.default.errors);
    E(R, Z), L.var(M, (0, i._)`${Z} === ${d.default.errors}`);
  }
  function f(R) {
    (0, h.checkUnknownRules)(R), x(R);
  }
  function E(R, M) {
    if (R.opts.jtd)
      return J(R, [], !1, M);
    const V = (0, t.getSchemaTypes)(R.schema), L = (0, t.coerceAndCheckDataType)(R, V);
    J(R, V, !L, M);
  }
  function x(R) {
    const { schema: M, errSchemaPath: V, opts: L, self: H } = R;
    M.$ref && L.ignoreKeywordsWithRef && (0, h.schemaHasRulesButRef)(M, H.RULES) && H.logger.warn(`$ref: keywords ignored in schema at path "${V}"`);
  }
  function F(R) {
    const { schema: M, opts: V } = R;
    M.default !== void 0 && V.useDefaults && V.strictSchema && (0, h.checkStrictMode)(R, "default is ignored in the schema root");
  }
  function z(R) {
    const M = R.schema[R.opts.schemaId];
    M && (R.baseId = (0, g.resolveUrl)(R.opts.uriResolver, R.baseId, M));
  }
  function T(R) {
    if (R.schema.$async && !R.schemaEnv.$async)
      throw new Error("async schema in sync schema");
  }
  function D({ gen: R, schemaEnv: M, schema: V, errSchemaPath: L, opts: H }) {
    const Z = V.$comment;
    if (H.$comment === !0)
      R.code((0, i._)`${d.default.self}.logger.log(${Z})`);
    else if (typeof H.$comment == "function") {
      const le = (0, i.str)`${L}/$comment`, $e = R.scopeValue("root", { ref: M.root });
      R.code((0, i._)`${d.default.self}.opts.$comment(${Z}, ${le}, ${$e}.schema)`);
    }
  }
  function U(R) {
    const { gen: M, schemaEnv: V, validateName: L, ValidationError: H, opts: Z } = R;
    V.$async ? M.if((0, i._)`${d.default.errors} === 0`, () => M.return(d.default.data), () => M.throw((0, i._)`new ${H}(${d.default.vErrors})`)) : (M.assign((0, i._)`${L}.errors`, d.default.vErrors), Z.unevaluated && te(R), M.return((0, i._)`${d.default.errors} === 0`));
  }
  function te({ gen: R, evaluated: M, props: V, items: L }) {
    V instanceof i.Name && R.assign((0, i._)`${M}.props`, V), L instanceof i.Name && R.assign((0, i._)`${M}.items`, L);
  }
  function J(R, M, V, L) {
    const { gen: H, schema: Z, data: le, allErrors: $e, opts: pe, self: he } = R, { RULES: de } = he;
    if (Z.$ref && (pe.ignoreKeywordsWithRef || !(0, h.schemaHasRulesButRef)(Z, de))) {
      H.block(() => K(R, "$ref", de.all.$ref.definition));
      return;
    }
    pe.jtd || W(R, M), H.block(() => {
      for (const ye of de.rules)
        Le(ye);
      Le(de.post);
    });
    function Le(ye) {
      (0, n.shouldUseGroup)(Z, ye) && (ye.type ? (H.if((0, o.checkDataType)(ye.type, le, pe.strictNumbers)), se(R, ye), M.length === 1 && M[0] === ye.type && V && (H.else(), (0, o.reportTypeError)(R)), H.endIf()) : se(R, ye), $e || H.if((0, i._)`${d.default.errors} === ${L || 0}`));
    }
  }
  function se(R, M) {
    const { gen: V, schema: L, opts: { useDefaults: H } } = R;
    H && (0, c.assignDefaults)(R, M.type), V.block(() => {
      for (const Z of M.rules)
        (0, n.shouldUseRule)(L, Z) && K(R, Z.keyword, Z.definition, M.type);
    });
  }
  function W(R, M) {
    R.schemaEnv.meta || !R.opts.strictTypes || (ae(R, M), R.opts.allowUnionTypes || B(R, M), A(R, R.dataTypes));
  }
  function ae(R, M) {
    if (M.length) {
      if (!R.dataTypes.length) {
        R.dataTypes = M;
        return;
      }
      M.forEach((V) => {
        N(R.dataTypes, V) || C(R, `type "${V}" not allowed by context "${R.dataTypes.join(",")}"`);
      }), $(R, M);
    }
  }
  function B(R, M) {
    M.length > 1 && !(M.length === 2 && M.includes("null")) && C(R, "use allowUnionTypes to allow union type keyword");
  }
  function A(R, M) {
    const V = R.self.RULES.all;
    for (const L in V) {
      const H = V[L];
      if (typeof H == "object" && (0, n.shouldUseRule)(R.schema, H)) {
        const { type: Z } = H.definition;
        Z.length && !Z.some((le) => q(M, le)) && C(R, `missing type "${Z.join(",")}" for keyword "${L}"`);
      }
    }
  }
  function q(R, M) {
    return R.includes(M) || M === "number" && R.includes("integer");
  }
  function N(R, M) {
    return R.includes(M) || M === "integer" && R.includes("number");
  }
  function $(R, M) {
    const V = [];
    for (const L of R.dataTypes)
      N(M, L) ? V.push(L) : M.includes("integer") && L === "number" && V.push("integer");
    R.dataTypes = V;
  }
  function C(R, M) {
    const V = R.schemaEnv.baseId + R.errSchemaPath;
    M += ` at "${V}" (strictTypes)`, (0, h.checkStrictMode)(R, M, R.opts.strictTypes);
  }
  class j {
    constructor(M, V, L) {
      if ((0, r.validateKeywordUsage)(M, V, L), this.gen = M.gen, this.allErrors = M.allErrors, this.keyword = L, this.data = M.data, this.schema = M.schema[L], this.$data = V.$data && M.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, h.schemaRefOrVal)(M, this.schema, L, this.$data), this.schemaType = V.schemaType, this.parentSchema = M.schema, this.params = {}, this.it = M, this.def = V, this.$data)
        this.schemaCode = M.gen.const("vSchema", Q(this.$data, M));
      else if (this.schemaCode = this.schemaValue, !(0, r.validSchemaType)(this.schema, V.schemaType, V.allowUndefined))
        throw new Error(`${L} value must be ${JSON.stringify(V.schemaType)}`);
      ("code" in V ? V.trackErrors : V.errors !== !1) && (this.errsCount = M.gen.const("_errs", d.default.errors));
    }
    result(M, V, L) {
      this.failResult((0, i.not)(M), V, L);
    }
    failResult(M, V, L) {
      this.gen.if(M), L ? L() : this.error(), V ? (this.gen.else(), V(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    pass(M, V) {
      this.failResult((0, i.not)(M), void 0, V);
    }
    fail(M) {
      if (M === void 0) {
        this.error(), this.allErrors || this.gen.if(!1);
        return;
      }
      this.gen.if(M), this.error(), this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    fail$data(M) {
      if (!this.$data)
        return this.fail(M);
      const { schemaCode: V } = this;
      this.fail((0, i._)`${V} !== undefined && (${(0, i.or)(this.invalid$data(), M)})`);
    }
    error(M, V, L) {
      if (V) {
        this.setParams(V), this._error(M, L), this.setParams({});
        return;
      }
      this._error(M, L);
    }
    _error(M, V) {
      (M ? w.reportExtraError : w.reportError)(this, this.def.error, V);
    }
    $dataError() {
      (0, w.reportError)(this, this.def.$dataError || w.keyword$DataError);
    }
    reset() {
      if (this.errsCount === void 0)
        throw new Error('add "trackErrors" to keyword definition');
      (0, w.resetErrorsCount)(this.gen, this.errsCount);
    }
    ok(M) {
      this.allErrors || this.gen.if(M);
    }
    setParams(M, V) {
      V ? Object.assign(this.params, M) : this.params = M;
    }
    block$data(M, V, L = i.nil) {
      this.gen.block(() => {
        this.check$data(M, L), V();
      });
    }
    check$data(M = i.nil, V = i.nil) {
      if (!this.$data)
        return;
      const { gen: L, schemaCode: H, schemaType: Z, def: le } = this;
      L.if((0, i.or)((0, i._)`${H} === undefined`, V)), M !== i.nil && L.assign(M, !0), (Z.length || le.validateSchema) && (L.elseIf(this.invalid$data()), this.$dataError(), M !== i.nil && L.assign(M, !1)), L.else();
    }
    invalid$data() {
      const { gen: M, schemaCode: V, schemaType: L, def: H, it: Z } = this;
      return (0, i.or)(le(), $e());
      function le() {
        if (L.length) {
          if (!(V instanceof i.Name))
            throw new Error("ajv implementation error");
          const pe = Array.isArray(L) ? L : [L];
          return (0, i._)`${(0, o.checkDataTypes)(pe, V, Z.opts.strictNumbers, o.DataType.Wrong)}`;
        }
        return i.nil;
      }
      function $e() {
        if (H.validateSchema) {
          const pe = M.scopeValue("validate$data", { ref: H.validateSchema });
          return (0, i._)`!${pe}(${V})`;
        }
        return i.nil;
      }
    }
    subschema(M, V) {
      const L = (0, s.getSubschema)(this.it, M);
      (0, s.extendSubschemaData)(L, this.it, M), (0, s.extendSubschemaMode)(L, M);
      const H = { ...this.it, ...L, items: void 0, props: void 0 };
      return b(H, V), H;
    }
    mergeEvaluated(M, V) {
      const { it: L, gen: H } = this;
      L.opts.unevaluated && (L.props !== !0 && M.props !== void 0 && (L.props = h.mergeEvaluated.props(H, M.props, L.props, V)), L.items !== !0 && M.items !== void 0 && (L.items = h.mergeEvaluated.items(H, M.items, L.items, V)));
    }
    mergeValidEvaluated(M, V) {
      const { it: L, gen: H } = this;
      if (L.opts.unevaluated && (L.props !== !0 || L.items !== !0))
        return H.if(V, () => this.mergeEvaluated(M, i.Name)), !0;
    }
  }
  Re.KeywordCxt = j;
  function K(R, M, V, L) {
    const H = new j(R, V, M);
    "code" in V ? V.code(H, L) : H.$data && V.validate ? (0, r.funcKeywordCode)(H, V) : "macro" in V ? (0, r.macroKeywordCode)(H, V) : (V.compile || V.validate) && (0, r.funcKeywordCode)(H, V);
  }
  const G = /^\/(?:[^~]|~0|~1)*$/, ne = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function Q(R, { dataLevel: M, dataNames: V, dataPathArr: L }) {
    let H, Z;
    if (R === "")
      return d.default.rootData;
    if (R[0] === "/") {
      if (!G.test(R))
        throw new Error(`Invalid JSON-pointer: ${R}`);
      H = R, Z = d.default.rootData;
    } else {
      const he = ne.exec(R);
      if (!he)
        throw new Error(`Invalid JSON-pointer: ${R}`);
      const de = +he[1];
      if (H = he[2], H === "#") {
        if (de >= M)
          throw new Error(pe("property/index", de));
        return L[M - de];
      }
      if (de > M)
        throw new Error(pe("data", de));
      if (Z = V[M - de], !H)
        return Z;
    }
    let le = Z;
    const $e = H.split("/");
    for (const he of $e)
      he && (Z = (0, i._)`${Z}${(0, i.getProperty)((0, h.unescapeJsonPointer)(he))}`, le = (0, i._)`${le} && ${Z}`);
    return le;
    function pe(he, de) {
      return `Cannot access ${he} ${de} levels up, current level is ${M}`;
    }
  }
  return Re.getData = Q, Re;
}
var pt = {}, xr;
function Kn() {
  if (xr) return pt;
  xr = 1, Object.defineProperty(pt, "__esModule", { value: !0 });
  class e extends Error {
    constructor(n) {
      super("validation failed"), this.errors = n, this.ajv = this.validation = !0;
    }
  }
  return pt.default = e, pt;
}
var ht = {}, Pr;
function $n() {
  if (Pr) return ht;
  Pr = 1, Object.defineProperty(ht, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ yn();
  class t extends Error {
    constructor(o, c, r, s) {
      super(s || `can't resolve reference ${r} from id ${c}`), this.missingRef = (0, e.resolveUrl)(o, c, r), this.missingSchema = (0, e.normalizeId)((0, e.getFullPath)(o, this.missingRef));
    }
  }
  return ht.default = t, ht;
}
var ge = {}, Rr;
function bn() {
  if (Rr) return ge;
  Rr = 1, Object.defineProperty(ge, "__esModule", { value: !0 }), ge.resolveSchema = ge.getCompilingSchema = ge.resolveRef = ge.compileSchema = ge.SchemaEnv = void 0;
  const e = /* @__PURE__ */ Y(), t = /* @__PURE__ */ Kn(), n = /* @__PURE__ */ ke(), o = /* @__PURE__ */ yn(), c = /* @__PURE__ */ ee(), r = /* @__PURE__ */ vn();
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
    let F;
    try {
      this._compilations.add(p), (0, r.validateFunctionCode)(x), l.optimize(this.opts.code.optimize);
      const z = l.toString();
      F = `${l.scopeRefs(n.default.scope)}return ${z}`, this.opts.code.process && (F = this.opts.code.process(F, p));
      const D = new Function(`${n.default.self}`, `${n.default.scope}`, F)(this, this.scope.get());
      if (this.scope.value(E, { ref: D }), D.errors = null, D.schema = p.schema, D.schemaEnv = p, p.$async && (D.$async = !0), this.opts.code.source === !0 && (D.source = { validateName: E, validateCode: z, scopeValues: l._values }), this.opts.unevaluated) {
        const { props: U, items: te } = x;
        D.evaluated = {
          props: U instanceof e.Name ? void 0 : U,
          items: te instanceof e.Name ? void 0 : te,
          dynamicProps: U instanceof e.Name,
          dynamicItems: te instanceof e.Name
        }, D.source && (D.source.evaluated = (0, e.stringify)(D.evaluated));
      }
      return p.validate = D, p;
    } catch (z) {
      throw delete p.validate, delete p.validateName, F && this.logger.error("Error compiling schema, function code:", F), z;
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
    let a = y.call(this, p, u);
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
  function y(p, m) {
    let u;
    for (; typeof (u = this.refs[m]) == "string"; )
      m = u;
    return u || this.schemas[m] || v.call(this, p, m);
  }
  function v(p, m) {
    const u = this.opts.uriResolver.parse(m), b = (0, o._getFullPath)(this.opts.uriResolver, u);
    let k = (0, o.getFullPath)(this.opts.uriResolver, p.baseId, void 0);
    if (Object.keys(p.schema).length > 0 && b === k)
      return S.call(this, u, p);
    const a = (0, o.normalizeId)(b), l = this.refs[a] || this.schemas[a];
    if (typeof l == "string") {
      const f = v.call(this, p, l);
      return typeof f?.schema != "object" ? void 0 : S.call(this, u, f);
    }
    if (typeof l?.schema == "object") {
      if (l.validate || i.call(this, l), a === (0, o.normalizeId)(m)) {
        const { schema: f } = l, { schemaId: E } = this.opts, x = f[E];
        return x && (k = (0, o.resolveUrl)(this.opts.uriResolver, k, x)), new s({ schema: f, schemaId: E, root: p, baseId: k });
      }
      return S.call(this, u, l);
    }
  }
  ge.resolveSchema = v;
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
      const x = typeof u == "object" && u[this.opts.schemaId];
      !_.has(f) && x && (m = (0, o.resolveUrl)(this.opts.uriResolver, m, x));
    }
    let a;
    if (typeof u != "boolean" && u.$ref && !(0, c.schemaHasRulesButRef)(u, this.RULES)) {
      const f = (0, o.resolveUrl)(this.opts.uriResolver, m, u.$ref);
      a = v.call(this, b, f);
    }
    const { schemaId: l } = this.opts;
    if (a = a || new s({ schema: u, schemaId: l, root: b, baseId: m }), a.schema !== a.root.schema)
      return a;
  }
  return ge;
}
const ji = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", Oi = "Meta-schema for $data reference (JSON AnySchema extension proposal)", Ti = "object", zi = ["$data"], Ii = { $data: { type: "string", anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] } }, Di = !1, qi = {
  $id: ji,
  description: Oi,
  type: Ti,
  required: zi,
  properties: Ii,
  additionalProperties: Di
};
var mt = {}, rt = { exports: {} }, Nn, Ar;
function Yo() {
  if (Ar) return Nn;
  Ar = 1;
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
    const f = { error: !1, address: "", zone: "" }, E = [], x = [];
    let F = !1, z = !1, T = d;
    for (let D = 0; D < a.length; D++) {
      const U = a[D];
      if (!(U === "[" || U === "]"))
        if (U === ":") {
          if (F === !0 && (z = !0), !T(x, E, f))
            break;
          if (++l > 7) {
            f.error = !0;
            break;
          }
          D > 0 && a[D - 1] === ":" && (F = !0), E.push(":");
          continue;
        } else if (U === "%") {
          if (!T(x, E, f))
            break;
          T = i;
        } else {
          x.push(U);
          continue;
        }
    }
    return x.length && (T === i ? f.zone = x.join("") : z ? E.push(x.join("")) : E.push(r(x))), f.address = E.join(""), f;
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
  function y(a) {
    let l = a;
    const f = [];
    let E = -1, x = 0;
    for (; x = l.length; ) {
      if (x === 1) {
        if (l === ".")
          break;
        if (l === "/") {
          f.push("/");
          break;
        } else {
          f.push(l);
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
          f.push("/");
          break;
        }
      } else if (x === 3 && l === "/..") {
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
  const v = { "@": "%40", "/": "%2F", "?": "%3F", "#": "%23", ":": "%3A" }, _ = /[@/?#:]/g, S = /[@/?#]/g;
  function p(a, l) {
    const f = l ? S : _;
    return f.lastIndex = 0, a.replace(f, (E) => v[E]);
  }
  function m(a, l = !1) {
    if (a.indexOf("%") === -1)
      return a;
    let f = "";
    for (let E = 0; E < a.length; E++) {
      if (a[E] === "%" && E + 2 < a.length) {
        const x = a.slice(E + 1, E + 3);
        if (n(x)) {
          const F = x.toUpperCase(), z = String.fromCharCode(parseInt(F, 16));
          l && o(z) ? f += z : f += "%" + F, E += 2;
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
          const x = E.toUpperCase(), F = String.fromCharCode(parseInt(x, 16));
          F !== "." && o(F) ? l += F : l += "%" + x, f += 2;
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
    removeDotSegments: y,
    isIPv4: t,
    isUUID: e,
    normalizeIPv6: h,
    stringArrayToHexStripped: r
  }, Nn;
}
var Mn, Fr;
function Vi() {
  if (Fr) return Mn;
  Fr = 1;
  const { isUUID: e } = Yo(), t = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu, n = (
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
      const x = `${E}:${l.nid || a.nid}`, F = k(x);
      a.path = void 0, F && (a = F.parse(a, l));
    } else
      a.error = a.error || "URN can not be parsed.";
    return a;
  }
  function h(a, l) {
    if (a.nid === void 0)
      throw new Error("URN without nid cannot be serialized");
    const f = l.scheme || a.scheme || "urn", E = a.nid.toLowerCase(), x = `${f}:${l.nid || E}`, F = k(x);
    F && (a = F.serialize(a, l));
    const z = a, T = a.nss;
    return z.path = `${E || l.nid}:${T}`, l.skipEscape = !0, z;
  }
  function w(a, l) {
    const f = a;
    return f.uuid = f.nss, f.nss = void 0, !l.tolerant && (!f.uuid || !e(f.uuid)) && (f.error = f.error || "UUID is not valid."), f;
  }
  function y(a) {
    const l = a;
    return l.nss = (a.uuid || "").toLowerCase(), l;
  }
  const v = (
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
      domainHost: v.domainHost,
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
      http: v,
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
          serialize: y,
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
var Nr;
function Bi() {
  if (Nr) return rt.exports;
  Nr = 1;
  const { normalizeIPv6: e, removeDotSegments: t, recomposeAuthority: n, normalizePercentEncoding: o, normalizePathEncoding: c, escapePreservingEscapes: r, reescapeHostDelimiters: s, isIPv4: i, nonSimpleDomain: d } = Yo(), { SCHEMES: g, getSchemeHandler: h } = Vi();
  function w(x, F) {
    return typeof x == "string" ? x = /** @type {T} */
    a(x, F) : typeof x == "object" && (x = /** @type {T} */
    k(S(x, F), F)), x;
  }
  function y(x, F, z) {
    const T = z ? Object.assign({ scheme: "null" }, z) : { scheme: "null" }, D = v(k(x, T), k(F, T), T, !0);
    return T.skipEscape = !0, S(D, T);
  }
  function v(x, F, z, T) {
    const D = {};
    return T || (x = k(S(x, z), z), F = k(S(F, z), z)), z = z || {}, !z.tolerant && F.scheme ? (D.scheme = F.scheme, D.userinfo = F.userinfo, D.host = F.host, D.port = F.port, D.path = t(F.path || ""), D.query = F.query) : (F.userinfo !== void 0 || F.host !== void 0 || F.port !== void 0 ? (D.userinfo = F.userinfo, D.host = F.host, D.port = F.port, D.path = t(F.path || ""), D.query = F.query) : (F.path ? (F.path[0] === "/" ? D.path = t(F.path) : ((x.userinfo !== void 0 || x.host !== void 0 || x.port !== void 0) && !x.path ? D.path = "/" + F.path : x.path ? D.path = x.path.slice(0, x.path.lastIndexOf("/") + 1) + F.path : D.path = F.path, D.path = t(D.path)), D.query = F.query) : (D.path = x.path, F.query !== void 0 ? D.query = F.query : D.query = x.query), D.userinfo = x.userinfo, D.host = x.host, D.port = x.port), D.scheme = x.scheme), D.fragment = F.fragment, D;
  }
  function _(x, F, z) {
    const T = f(x, z), D = f(F, z);
    return T !== void 0 && D !== void 0 && T.toLowerCase() === D.toLowerCase();
  }
  function S(x, F) {
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
    }, T = Object.assign({}, F), D = [], U = h(T.scheme || z.scheme);
    U && U.serialize && U.serialize(z, T), z.path !== void 0 && (T.skipEscape ? z.path = o(z.path) : (z.path = r(z.path), z.scheme !== void 0 && (z.path = z.path.split("%3A").join(":")))), T.reference !== "suffix" && z.scheme && D.push(z.scheme, ":");
    const te = n(z);
    if (te !== void 0 && (T.reference !== "suffix" && D.push("//"), D.push(te), z.path && z.path[0] !== "/" && D.push("/")), z.path !== void 0) {
      let J = z.path;
      !T.absolutePath && (!U || !U.absolutePath) && (J = t(J)), te === void 0 && J[0] === "/" && J[1] === "/" && (J = "/%2F" + J.slice(2)), D.push(J);
    }
    return z.query !== void 0 && D.push("?", z.query), z.fragment !== void 0 && D.push("#", z.fragment), D.join("");
  }
  const p = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u, m = /^(?:[^#/:?]+:)?\/\/([^/?#]*)/;
  function u(x, F) {
    if (F[2] !== void 0 && x.path && x.path[0] !== "/")
      return 'URI path must start with "/" when authority is present.';
    if (typeof x.port == "number" && (x.port < 0 || x.port > 65535))
      return "URI port is malformed.";
  }
  function b(x, F) {
    const z = Object.assign({}, F), T = {
      scheme: void 0,
      userinfo: void 0,
      host: "",
      port: void 0,
      path: "",
      query: void 0,
      fragment: void 0
    };
    let D = !1, U = !1;
    z.reference === "suffix" && (z.scheme ? x = z.scheme + ":" + x : x = "//" + x);
    const te = x.match(m);
    te !== null && te[1].indexOf("\\") !== -1 && (T.error = "URI authority must not contain a literal backslash.", D = !0);
    const J = x.match(p);
    if (J) {
      T.scheme = J[1], T.userinfo = J[3], T.host = J[4], T.port = parseInt(J[5], 10), T.path = J[6] || "", T.query = J[7], T.fragment = J[8], isNaN(T.port) && (T.port = J[5]);
      const se = u(T, J);
      if (se !== void 0 && (T.error = T.error || se, D = !0), T.host)
        if (i(T.host) === !1) {
          const B = e(T.host);
          T.host = B.host.toLowerCase(), U = B.isIPV6;
        } else
          U = !0;
      T.scheme === void 0 && T.userinfo === void 0 && T.host === void 0 && T.port === void 0 && T.query === void 0 && !T.path ? T.reference = "same-document" : T.scheme === void 0 ? T.reference = "relative" : T.fragment === void 0 ? T.reference = "absolute" : T.reference = "uri", z.reference && z.reference !== "suffix" && z.reference !== T.reference && (T.error = T.error || "URI is not a " + z.reference + " reference.");
      const W = h(z.scheme || T.scheme);
      if (!z.unicodeSupport && (!W || !W.unicodeSupport) && T.host && (z.domainHost || W && W.domainHost) && U === !1 && d(T.host))
        try {
          T.host = new URL("http://" + T.host).hostname;
        } catch (ae) {
          T.error = T.error || "Host's domain name can not be converted to ASCII: " + ae;
        }
      if ((!W || W && !W.skipNormalize) && (x.indexOf("%") !== -1 && (T.scheme !== void 0 && (T.scheme = unescape(T.scheme)), T.host !== void 0 && (T.host = s(unescape(T.host), U))), T.path && (T.path = c(T.path)), T.fragment))
        try {
          T.fragment = encodeURI(decodeURIComponent(T.fragment));
        } catch {
          T.error = T.error || "URI malformed";
        }
      W && W.parse && W.parse(T, z);
    } else
      T.error = T.error || "URI can not be parsed.";
    return { parsed: T, malformedAuthorityOrPort: D };
  }
  function k(x, F) {
    return b(x, F).parsed;
  }
  function a(x, F) {
    return l(x, F).normalized;
  }
  function l(x, F) {
    const { parsed: z, malformedAuthorityOrPort: T } = b(x, F);
    return {
      normalized: T ? x : S(z, F),
      malformedAuthorityOrPort: T
    };
  }
  function f(x, F) {
    if (typeof x == "string") {
      const { normalized: z, malformedAuthorityOrPort: T } = l(x, F);
      return T ? void 0 : z;
    }
    if (typeof x == "object")
      return S(x, F);
  }
  const E = {
    SCHEMES: g,
    normalize: w,
    resolve: y,
    resolveComponent: v,
    equal: _,
    serialize: S,
    parse: k
  };
  return rt.exports = E, rt.exports.default = E, rt.exports.fastUri = E, rt.exports;
}
var Mr;
function Li() {
  if (Mr) return mt;
  Mr = 1, Object.defineProperty(mt, "__esModule", { value: !0 });
  const e = Bi();
  return e.code = 'require("ajv/dist/runtime/uri").default', mt.default = e, mt;
}
var jr;
function Ui() {
  return jr || (jr = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = void 0;
    var t = /* @__PURE__ */ vn();
    Object.defineProperty(e, "KeywordCxt", { enumerable: !0, get: function() {
      return t.KeywordCxt;
    } });
    var n = /* @__PURE__ */ Y();
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
    const o = /* @__PURE__ */ Kn(), c = /* @__PURE__ */ $n(), r = /* @__PURE__ */ Ho(), s = /* @__PURE__ */ bn(), i = /* @__PURE__ */ Y(), d = /* @__PURE__ */ yn(), g = /* @__PURE__ */ pn(), h = /* @__PURE__ */ ee(), w = qi, y = /* @__PURE__ */ Li(), v = (B, A) => new RegExp(B, A);
    v.code = "new RegExp";
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
      var A, q, N, $, C, j, K, G, ne, Q, R, M, V, L, H, Z, le, $e, pe, he, de, Le, ye, _n, Sn;
      const et = B.strict, Cn = (A = B.code) === null || A === void 0 ? void 0 : A.optimize, ir = Cn === !0 || Cn === void 0 ? 1 : Cn || 0, sr = (N = (q = B.code) === null || q === void 0 ? void 0 : q.regExp) !== null && N !== void 0 ? N : v, hi = ($ = B.uriResolver) !== null && $ !== void 0 ? $ : y.default;
      return {
        strictSchema: (j = (C = B.strictSchema) !== null && C !== void 0 ? C : et) !== null && j !== void 0 ? j : !0,
        strictNumbers: (G = (K = B.strictNumbers) !== null && K !== void 0 ? K : et) !== null && G !== void 0 ? G : !0,
        strictTypes: (Q = (ne = B.strictTypes) !== null && ne !== void 0 ? ne : et) !== null && Q !== void 0 ? Q : "log",
        strictTuples: (M = (R = B.strictTuples) !== null && R !== void 0 ? R : et) !== null && M !== void 0 ? M : "log",
        strictRequired: (L = (V = B.strictRequired) !== null && V !== void 0 ? V : et) !== null && L !== void 0 ? L : !1,
        code: B.code ? { ...B.code, optimize: ir, regExp: sr } : { optimize: ir, regExp: sr },
        loopRequired: (H = B.loopRequired) !== null && H !== void 0 ? H : u,
        loopEnum: (Z = B.loopEnum) !== null && Z !== void 0 ? Z : u,
        meta: (le = B.meta) !== null && le !== void 0 ? le : !0,
        messages: ($e = B.messages) !== null && $e !== void 0 ? $e : !0,
        inlineRefs: (pe = B.inlineRefs) !== null && pe !== void 0 ? pe : !0,
        schemaId: (he = B.schemaId) !== null && he !== void 0 ? he : "$id",
        addUsedSchema: (de = B.addUsedSchema) !== null && de !== void 0 ? de : !0,
        validateSchema: (Le = B.validateSchema) !== null && Le !== void 0 ? Le : !0,
        validateFormats: (ye = B.validateFormats) !== null && ye !== void 0 ? ye : !0,
        unicodeRegExp: (_n = B.unicodeRegExp) !== null && _n !== void 0 ? _n : !0,
        int32range: (Sn = B.int32range) !== null && Sn !== void 0 ? Sn : !0,
        uriResolver: hi
      };
    }
    class k {
      constructor(A = {}) {
        this.schemas = {}, this.refs = {}, this.formats = /* @__PURE__ */ Object.create(null), this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), A = this.opts = { ...A, ...b(A) };
        const { es5: q, lines: N } = this.opts.code;
        this.scope = new i.ValueScope({ scope: {}, prefixes: S, es5: q, lines: N }), this.logger = T(A.logger);
        const $ = A.validateFormats;
        A.validateFormats = !1, this.RULES = (0, r.getRules)(), a.call(this, p, A, "NOT SUPPORTED"), a.call(this, m, A, "DEPRECATED", "warn"), this._metaOpts = F.call(this), A.formats && E.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), A.keywords && x.call(this, A.keywords), typeof A.meta == "object" && this.addMetaSchema(A.meta), f.call(this), A.validateFormats = $;
      }
      _addVocabularies() {
        this.addKeyword("$async");
      }
      _addDefaultMetaSchema() {
        const { $data: A, meta: q, schemaId: N } = this.opts;
        let $ = w;
        N === "id" && ($ = { ...w }, $.id = $.$id, delete $.$id), q && A && this.addMetaSchema($, $[N], !1);
      }
      defaultMeta() {
        const { meta: A, schemaId: q } = this.opts;
        return this.opts.defaultMeta = typeof A == "object" ? A[q] || A : void 0;
      }
      validate(A, q) {
        let N;
        if (typeof A == "string") {
          if (N = this.getSchema(A), !N)
            throw new Error(`no schema with key or ref "${A}"`);
        } else
          N = this.compile(A);
        const $ = N(q);
        return "$async" in N || (this.errors = N.errors), $;
      }
      compile(A, q) {
        const N = this._addSchema(A, q);
        return N.validate || this._compileSchemaEnv(N);
      }
      compileAsync(A, q) {
        if (typeof this.opts.loadSchema != "function")
          throw new Error("options.loadSchema should be a function");
        const { loadSchema: N } = this.opts;
        return $.call(this, A, q);
        async function $(Q, R) {
          await C.call(this, Q.$schema);
          const M = this._addSchema(Q, R);
          return M.validate || j.call(this, M);
        }
        async function C(Q) {
          Q && !this.getSchema(Q) && await $.call(this, { $ref: Q }, !0);
        }
        async function j(Q) {
          try {
            return this._compileSchemaEnv(Q);
          } catch (R) {
            if (!(R instanceof c.default))
              throw R;
            return K.call(this, R), await G.call(this, R.missingSchema), j.call(this, Q);
          }
        }
        function K({ missingSchema: Q, missingRef: R }) {
          if (this.refs[Q])
            throw new Error(`AnySchema ${Q} is loaded but ${R} cannot be resolved`);
        }
        async function G(Q) {
          const R = await ne.call(this, Q);
          this.refs[Q] || await C.call(this, R.$schema), this.refs[Q] || this.addSchema(R, Q, q);
        }
        async function ne(Q) {
          const R = this._loading[Q];
          if (R)
            return R;
          try {
            return await (this._loading[Q] = N(Q));
          } finally {
            delete this._loading[Q];
          }
        }
      }
      // Adds schema to the instance
      addSchema(A, q, N, $ = this.opts.validateSchema) {
        if (Array.isArray(A)) {
          for (const j of A)
            this.addSchema(j, void 0, N, $);
          return this;
        }
        let C;
        if (typeof A == "object") {
          const { schemaId: j } = this.opts;
          if (C = A[j], C !== void 0 && typeof C != "string")
            throw new Error(`schema ${j} must be string`);
        }
        return q = (0, d.normalizeId)(q || C), this._checkUnique(q), this.schemas[q] = this._addSchema(A, N, q, $, !0), this;
      }
      // Add schema that will be used to validate other schemas
      // options in META_IGNORE_OPTIONS are alway set to false
      addMetaSchema(A, q, N = this.opts.validateSchema) {
        return this.addSchema(A, q, !0, N), this;
      }
      //  Validate schema against its meta-schema
      validateSchema(A, q) {
        if (typeof A == "boolean")
          return !0;
        let N;
        if (N = A.$schema, N !== void 0 && typeof N != "string")
          throw new Error("$schema must be a string");
        if (N = N || this.opts.defaultMeta || this.defaultMeta(), !N)
          return this.logger.warn("meta-schema not available"), this.errors = null, !0;
        const $ = this.validate(N, A);
        if (!$ && q) {
          const C = "schema is invalid: " + this.errorsText();
          if (this.opts.validateSchema === "log")
            this.logger.error(C);
          else
            throw new Error(C);
        }
        return $;
      }
      // Get compiled schema by `key` or `ref`.
      // (`key` that was passed to `addSchema` or full schema reference - `schema.$id` or resolved id)
      getSchema(A) {
        let q;
        for (; typeof (q = l.call(this, A)) == "string"; )
          A = q;
        if (q === void 0) {
          const { schemaId: N } = this.opts, $ = new s.SchemaEnv({ schema: {}, schemaId: N });
          if (q = s.resolveSchema.call(this, $, A), !q)
            return;
          this.refs[A] = q;
        }
        return q.validate || this._compileSchemaEnv(q);
      }
      // Remove cached schema(s).
      // If no parameter is passed all schemas but meta-schemas are removed.
      // If RegExp is passed all schemas with key/id matching pattern but meta-schemas are removed.
      // Even if schema is referenced by other schemas it still can be removed as other schemas have local references.
      removeSchema(A) {
        if (A instanceof RegExp)
          return this._removeAllSchemas(this.schemas, A), this._removeAllSchemas(this.refs, A), this;
        switch (typeof A) {
          case "undefined":
            return this._removeAllSchemas(this.schemas), this._removeAllSchemas(this.refs), this._cache.clear(), this;
          case "string": {
            const q = l.call(this, A);
            return typeof q == "object" && this._cache.delete(q.schema), delete this.schemas[A], delete this.refs[A], this;
          }
          case "object": {
            const q = A;
            this._cache.delete(q);
            let N = A[this.opts.schemaId];
            return N && (N = (0, d.normalizeId)(N), delete this.schemas[N], delete this.refs[N]), this;
          }
          default:
            throw new Error("ajv.removeSchema: invalid parameter");
        }
      }
      // add "vocabulary" - a collection of keywords
      addVocabulary(A) {
        for (const q of A)
          this.addKeyword(q);
        return this;
      }
      addKeyword(A, q) {
        let N;
        if (typeof A == "string")
          N = A, typeof q == "object" && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), q.keyword = N);
        else if (typeof A == "object" && q === void 0) {
          if (q = A, N = q.keyword, Array.isArray(N) && !N.length)
            throw new Error("addKeywords: keyword must be string or non-empty array");
        } else
          throw new Error("invalid addKeywords parameters");
        if (U.call(this, N, q), !q)
          return (0, h.eachItem)(N, (C) => te.call(this, C)), this;
        se.call(this, q);
        const $ = {
          ...q,
          type: (0, g.getJSONTypes)(q.type),
          schemaType: (0, g.getJSONTypes)(q.schemaType)
        };
        return (0, h.eachItem)(N, $.type.length === 0 ? (C) => te.call(this, C, $) : (C) => $.type.forEach((j) => te.call(this, C, $, j))), this;
      }
      getKeyword(A) {
        const q = this.RULES.all[A];
        return typeof q == "object" ? q.definition : !!q;
      }
      // Remove keyword
      removeKeyword(A) {
        const { RULES: q } = this;
        delete q.keywords[A], delete q.all[A];
        for (const N of q.rules) {
          const $ = N.rules.findIndex((C) => C.keyword === A);
          $ >= 0 && N.rules.splice($, 1);
        }
        return this;
      }
      // Add format
      addFormat(A, q) {
        return typeof q == "string" && (q = new RegExp(q)), this.formats[A] = q, this;
      }
      errorsText(A = this.errors, { separator: q = ", ", dataVar: N = "data" } = {}) {
        return !A || A.length === 0 ? "No errors" : A.map(($) => `${N}${$.instancePath} ${$.message}`).reduce(($, C) => $ + q + C);
      }
      $dataMetaSchema(A, q) {
        const N = this.RULES.all;
        A = JSON.parse(JSON.stringify(A));
        for (const $ of q) {
          const C = $.split("/").slice(1);
          let j = A;
          for (const K of C)
            j = j[K];
          for (const K in N) {
            const G = N[K];
            if (typeof G != "object")
              continue;
            const { $data: ne } = G.definition, Q = j[K];
            ne && Q && (j[K] = ae(Q));
          }
        }
        return A;
      }
      _removeAllSchemas(A, q) {
        for (const N in A) {
          const $ = A[N];
          (!q || q.test(N)) && (typeof $ == "string" ? delete A[N] : $ && !$.meta && (this._cache.delete($.schema), delete A[N]));
        }
      }
      _addSchema(A, q, N, $ = this.opts.validateSchema, C = this.opts.addUsedSchema) {
        let j;
        const { schemaId: K } = this.opts;
        if (typeof A == "object")
          j = A[K];
        else {
          if (this.opts.jtd)
            throw new Error("schema must be object");
          if (typeof A != "boolean")
            throw new Error("schema must be object or boolean");
        }
        let G = this._cache.get(A);
        if (G !== void 0)
          return G;
        N = (0, d.normalizeId)(j || N);
        const ne = d.getSchemaRefs.call(this, A, N);
        return G = new s.SchemaEnv({ schema: A, schemaId: K, meta: q, baseId: N, localRefs: ne }), this._cache.set(G.schema, G), C && !N.startsWith("#") && (N && this._checkUnique(N), this.refs[N] = G), $ && this.validateSchema(A, !0), G;
      }
      _checkUnique(A) {
        if (this.schemas[A] || this.refs[A])
          throw new Error(`schema with key or id "${A}" already exists`);
      }
      _compileSchemaEnv(A) {
        if (A.meta ? this._compileMetaSchema(A) : s.compileSchema.call(this, A), !A.validate)
          throw new Error("ajv implementation error");
        return A.validate;
      }
      _compileMetaSchema(A) {
        const q = this.opts;
        this.opts = this._metaOpts;
        try {
          s.compileSchema.call(this, A);
        } finally {
          this.opts = q;
        }
      }
    }
    k.ValidationError = o.default, k.MissingRefError = c.default, e.default = k;
    function a(B, A, q, N = "error") {
      for (const $ in B) {
        const C = $;
        C in A && this.logger[N](`${q}: option ${$}. ${B[C]}`);
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
          for (const A in B)
            this.addSchema(B[A], A);
    }
    function E() {
      for (const B in this.opts.formats) {
        const A = this.opts.formats[B];
        A && this.addFormat(B, A);
      }
    }
    function x(B) {
      if (Array.isArray(B)) {
        this.addVocabulary(B);
        return;
      }
      this.logger.warn("keywords option as map is deprecated, pass array");
      for (const A in B) {
        const q = B[A];
        q.keyword || (q.keyword = A), this.addKeyword(q);
      }
    }
    function F() {
      const B = { ...this.opts };
      for (const A of _)
        delete B[A];
      return B;
    }
    const z = { log() {
    }, warn() {
    }, error() {
    } };
    function T(B) {
      if (B === !1)
        return z;
      if (B === void 0)
        return console;
      if (B.log && B.warn && B.error)
        return B;
      throw new Error("logger must implement log, warn and error methods");
    }
    const D = /^[a-z_$][a-z0-9_$:-]*$/i;
    function U(B, A) {
      const { RULES: q } = this;
      if ((0, h.eachItem)(B, (N) => {
        if (q.keywords[N])
          throw new Error(`Keyword ${N} is already defined`);
        if (!D.test(N))
          throw new Error(`Keyword ${N} has invalid name`);
      }), !!A && A.$data && !("code" in A || "validate" in A))
        throw new Error('$data keyword must have "code" or "validate" function');
    }
    function te(B, A, q) {
      var N;
      const $ = A?.post;
      if (q && $)
        throw new Error('keyword with "post" flag cannot have "type"');
      const { RULES: C } = this;
      let j = $ ? C.post : C.rules.find(({ type: G }) => G === q);
      if (j || (j = { type: q, rules: [] }, C.rules.push(j)), C.keywords[B] = !0, !A)
        return;
      const K = {
        keyword: B,
        definition: {
          ...A,
          type: (0, g.getJSONTypes)(A.type),
          schemaType: (0, g.getJSONTypes)(A.schemaType)
        }
      };
      A.before ? J.call(this, j, K, A.before) : j.rules.push(K), C.all[B] = K, (N = A.implements) === null || N === void 0 || N.forEach((G) => this.addKeyword(G));
    }
    function J(B, A, q) {
      const N = B.rules.findIndex(($) => $.keyword === q);
      N >= 0 ? B.rules.splice(N, 0, A) : (B.rules.push(A), this.logger.warn(`rule ${q} is not defined`));
    }
    function se(B) {
      let { metaSchema: A } = B;
      A !== void 0 && (B.$data && this.opts.$data && (A = ae(A)), B.validateSchema = this.compile(A, !0));
    }
    const W = {
      $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
    };
    function ae(B) {
      return { anyOf: [B, W] };
    }
  })(kn)), kn;
}
var gt = {}, yt = {}, vt = {}, Or;
function Ki() {
  if (Or) return vt;
  Or = 1, Object.defineProperty(vt, "__esModule", { value: !0 });
  const e = {
    keyword: "id",
    code() {
      throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
    }
  };
  return vt.default = e, vt;
}
var Me = {}, Tr;
function Gn() {
  if (Tr) return Me;
  Tr = 1, Object.defineProperty(Me, "__esModule", { value: !0 }), Me.callRef = Me.getValidate = void 0;
  const e = /* @__PURE__ */ $n(), t = /* @__PURE__ */ Ee(), n = /* @__PURE__ */ Y(), o = /* @__PURE__ */ ke(), c = /* @__PURE__ */ bn(), r = /* @__PURE__ */ ee(), s = {
    keyword: "$ref",
    schemaType: "string",
    code(g) {
      const { gen: h, schema: w, it: y } = g, { baseId: v, schemaEnv: _, validateName: S, opts: p, self: m } = y, { root: u } = _;
      if ((w === "#" || w === "#/") && v === u.baseId)
        return k();
      const b = c.resolveRef.call(m, u, v, w);
      if (b === void 0)
        throw new e.default(y.opts.uriResolver, v, w);
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
        const E = h.scopeValue("schema", p.code.source === !0 ? { ref: f, code: (0, n.stringify)(f) } : { ref: f }), x = h.name("valid"), F = g.subschema({
          schema: f,
          dataTypes: [],
          schemaPath: n.nil,
          topSchemaRef: E,
          errSchemaPath: w
        }, x);
        g.mergeEvaluated(F), g.ok(x);
      }
    }
  };
  function i(g, h) {
    const { gen: w } = g;
    return h.validate ? w.scopeValue("validate", { ref: h.validate }) : (0, n._)`${w.scopeValue("wrapper", { ref: h })}.validate`;
  }
  Me.getValidate = i;
  function d(g, h, w, y) {
    const { gen: v, it: _ } = g, { allErrors: S, schemaEnv: p, opts: m } = _, u = m.passContext ? o.default.this : n.nil;
    y ? b() : k();
    function b() {
      if (!p.$async)
        throw new Error("async schema referenced by sync schema");
      const f = v.let("valid");
      v.try(() => {
        v.code((0, n._)`await ${(0, t.callValidateCode)(g, h, u)}`), l(h), S || v.assign(f, !0);
      }, (E) => {
        v.if((0, n._)`!(${E} instanceof ${_.ValidationError})`, () => v.throw(E)), a(E), S || v.assign(f, !1);
      }), g.ok(f);
    }
    function k() {
      g.result((0, t.callValidateCode)(g, h, u), () => l(h), () => a(h));
    }
    function a(f) {
      const E = (0, n._)`${f}.errors`;
      v.assign(o.default.vErrors, (0, n._)`${o.default.vErrors} === null ? ${E} : ${o.default.vErrors}.concat(${E})`), v.assign(o.default.errors, (0, n._)`${o.default.vErrors}.length`);
    }
    function l(f) {
      var E;
      if (!_.opts.unevaluated)
        return;
      const x = (E = w?.validate) === null || E === void 0 ? void 0 : E.evaluated;
      if (_.props !== !0)
        if (x && !x.dynamicProps)
          x.props !== void 0 && (_.props = r.mergeEvaluated.props(v, x.props, _.props));
        else {
          const F = v.var("props", (0, n._)`${f}.evaluated.props`);
          _.props = r.mergeEvaluated.props(v, F, _.props, n.Name);
        }
      if (_.items !== !0)
        if (x && !x.dynamicItems)
          x.items !== void 0 && (_.items = r.mergeEvaluated.items(v, x.items, _.items));
        else {
          const F = v.var("items", (0, n._)`${f}.evaluated.items`);
          _.items = r.mergeEvaluated.items(v, F, _.items, n.Name);
        }
    }
  }
  return Me.callRef = d, Me.default = s, Me;
}
var zr;
function Gi() {
  if (zr) return yt;
  zr = 1, Object.defineProperty(yt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ki(), t = /* @__PURE__ */ Gn(), n = [
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
var $t = {}, bt = {}, Ir;
function Hi() {
  if (Ir) return bt;
  Ir = 1, Object.defineProperty(bt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Y(), t = e.operators, n = {
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
var wt = {}, Dr;
function Ji() {
  if (Dr) return wt;
  Dr = 1, Object.defineProperty(wt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Y(), n = {
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
  return wt.default = n, wt;
}
var _t = {}, St = {}, qr;
function Wi() {
  if (qr) return St;
  qr = 1, Object.defineProperty(St, "__esModule", { value: !0 });
  function e(t) {
    const n = t.length;
    let o = 0, c = 0, r;
    for (; c < n; )
      o++, r = t.charCodeAt(c++), r >= 55296 && r <= 56319 && c < n && (r = t.charCodeAt(c), (r & 64512) === 56320 && c++);
    return o;
  }
  return St.default = e, e.code = 'require("ajv/dist/runtime/ucs2length").default', St;
}
var Vr;
function Yi() {
  if (Vr) return _t;
  Vr = 1, Object.defineProperty(_t, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Y(), t = /* @__PURE__ */ ee(), n = /* @__PURE__ */ Wi(), c = {
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
  return _t.default = c, _t;
}
var Ct = {}, Br;
function Xi() {
  if (Br) return Ct;
  Br = 1, Object.defineProperty(Ct, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ee(), t = /* @__PURE__ */ ee(), n = /* @__PURE__ */ Y(), c = {
    keyword: "pattern",
    type: "string",
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: r }) => (0, n.str)`must match pattern "${r}"`,
      params: ({ schemaCode: r }) => (0, n._)`{pattern: ${r}}`
    },
    code(r) {
      const { gen: s, data: i, $data: d, schema: g, schemaCode: h, it: w } = r, y = w.opts.unicodeRegExp ? "u" : "";
      if (d) {
        const { regExp: v } = w.opts.code, _ = v.code === "new RegExp" ? (0, n._)`new RegExp` : (0, t.useFunc)(s, v), S = s.let("valid");
        s.try(() => s.assign(S, (0, n._)`${_}(${h}, ${y}).test(${i})`), () => s.assign(S, !1)), r.fail$data((0, n._)`!${S}`);
      } else {
        const v = (0, e.usePattern)(r, g);
        r.fail$data((0, n._)`!${v}.test(${i})`);
      }
    }
  };
  return Ct.default = c, Ct;
}
var kt = {}, Lr;
function Zi() {
  if (Lr) return kt;
  Lr = 1, Object.defineProperty(kt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Y(), n = {
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
var Et = {}, Ur;
function Qi() {
  if (Ur) return Et;
  Ur = 1, Object.defineProperty(Et, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ee(), t = /* @__PURE__ */ Y(), n = /* @__PURE__ */ ee(), c = {
    keyword: "required",
    type: "object",
    schemaType: "array",
    $data: !0,
    error: {
      message: ({ params: { missingProperty: r } }) => (0, t.str)`must have required property '${r}'`,
      params: ({ params: { missingProperty: r } }) => (0, t._)`{missingProperty: ${r}}`
    },
    code(r) {
      const { gen: s, schema: i, schemaCode: d, data: g, $data: h, it: w } = r, { opts: y } = w;
      if (!h && i.length === 0)
        return;
      const v = i.length >= y.loopRequired;
      if (w.allErrors ? _() : S(), y.strictRequired) {
        const u = r.parentSchema.properties, { definedProperties: b } = r.it;
        for (const k of i)
          if (u?.[k] === void 0 && !b.has(k)) {
            const a = w.schemaEnv.baseId + w.errSchemaPath, l = `required property "${k}" is not defined at "${a}" (strictRequired)`;
            (0, n.checkStrictMode)(w, l, w.opts.strictRequired);
          }
      }
      function _() {
        if (v || h)
          r.block$data(t.nil, p);
        else
          for (const u of i)
            (0, e.checkReportMissingProp)(r, u);
      }
      function S() {
        const u = s.let("missing");
        if (v || h) {
          const b = s.let("valid", !0);
          r.block$data(b, () => m(u, b)), r.ok(b);
        } else
          s.if((0, e.checkMissingProp)(r, i, u)), (0, e.reportMissingProp)(r, u), s.else();
      }
      function p() {
        s.forOf("prop", d, (u) => {
          r.setParams({ missingProperty: u }), s.if((0, e.noPropertyInData)(s, g, u, y.ownProperties), () => r.error());
        });
      }
      function m(u, b) {
        r.setParams({ missingProperty: u }), s.forOf(u, d, () => {
          s.assign(b, (0, e.propertyInData)(s, g, u, y.ownProperties)), s.if((0, t.not)(b), () => {
            r.error(), s.break();
          });
        }, t.nil);
      }
    }
  };
  return Et.default = c, Et;
}
var xt = {}, Kr;
function es() {
  if (Kr) return xt;
  Kr = 1, Object.defineProperty(xt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Y(), n = {
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
  return xt.default = n, xt;
}
var Pt = {}, Rt = {}, Gr;
function Hn() {
  if (Gr) return Rt;
  Gr = 1, Object.defineProperty(Rt, "__esModule", { value: !0 });
  const e = Wo();
  return e.code = 'require("ajv/dist/runtime/equal").default', Rt.default = e, Rt;
}
var Hr;
function ts() {
  if (Hr) return Pt;
  Hr = 1, Object.defineProperty(Pt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ pn(), t = /* @__PURE__ */ Y(), n = /* @__PURE__ */ ee(), o = /* @__PURE__ */ Hn(), r = {
    keyword: "uniqueItems",
    type: "array",
    schemaType: "boolean",
    $data: !0,
    error: {
      message: ({ params: { i: s, j: i } }) => (0, t.str)`must NOT have duplicate items (items ## ${i} and ${s} are identical)`,
      params: ({ params: { i: s, j: i } }) => (0, t._)`{i: ${s}, j: ${i}}`
    },
    code(s) {
      const { gen: i, data: d, $data: g, schema: h, parentSchema: w, schemaCode: y, it: v } = s;
      if (!g && !h)
        return;
      const _ = i.let("valid"), S = w.items ? (0, e.getSchemaTypes)(w.items) : [];
      s.block$data(_, p, (0, t._)`${y} === false`), s.ok(_);
      function p() {
        const k = i.let("i", (0, t._)`${d}.length`), a = i.let("j");
        s.setParams({ i: k, j: a }), i.assign(_, !0), i.if((0, t._)`${k} > 1`, () => (m() ? u : b)(k, a));
      }
      function m() {
        return S.length > 0 && !S.some((k) => k === "object" || k === "array");
      }
      function u(k, a) {
        const l = i.name("item"), f = (0, e.checkDataTypes)(S, l, v.opts.strictNumbers, e.DataType.Wrong), E = i.const("indices", (0, t._)`{}`);
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
  return Pt.default = r, Pt;
}
var At = {}, Jr;
function ns() {
  if (Jr) return At;
  Jr = 1, Object.defineProperty(At, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Y(), t = /* @__PURE__ */ ee(), n = /* @__PURE__ */ Hn(), c = {
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
var Ft = {}, Wr;
function rs() {
  if (Wr) return Ft;
  Wr = 1, Object.defineProperty(Ft, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Y(), t = /* @__PURE__ */ ee(), n = /* @__PURE__ */ Hn(), c = {
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
      const y = g.length >= w.opts.loopEnum;
      let v;
      const _ = () => v ?? (v = (0, t.useFunc)(s, n.default));
      let S;
      if (y || d)
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
var Yr;
function os() {
  if (Yr) return $t;
  Yr = 1, Object.defineProperty($t, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Hi(), t = /* @__PURE__ */ Ji(), n = /* @__PURE__ */ Yi(), o = /* @__PURE__ */ Xi(), c = /* @__PURE__ */ Zi(), r = /* @__PURE__ */ Qi(), s = /* @__PURE__ */ es(), i = /* @__PURE__ */ ts(), d = /* @__PURE__ */ ns(), g = /* @__PURE__ */ rs(), h = [
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
var Nt = {}, Ue = {}, Xr;
function Xo() {
  if (Xr) return Ue;
  Xr = 1, Object.defineProperty(Ue, "__esModule", { value: !0 }), Ue.validateAdditionalItems = void 0;
  const e = /* @__PURE__ */ Y(), t = /* @__PURE__ */ ee(), o = {
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
    const y = i.const("len", (0, e._)`${g}.length`);
    if (d === !1)
      r.setParams({ len: s.length }), r.pass((0, e._)`${y} <= ${s.length}`);
    else if (typeof d == "object" && !(0, t.alwaysValidSchema)(w, d)) {
      const _ = i.var("valid", (0, e._)`${y} <= ${s.length}`);
      i.if((0, e.not)(_), () => v(_)), r.ok(_);
    }
    function v(_) {
      i.forRange("i", s.length, y, (S) => {
        r.subschema({ keyword: h, dataProp: S, dataPropType: t.Type.Num }, _), w.allErrors || i.if((0, e.not)(_), () => i.break());
      });
    }
  }
  return Ue.validateAdditionalItems = c, Ue.default = o, Ue;
}
var Mt = {}, Ke = {}, Zr;
function Zo() {
  if (Zr) return Ke;
  Zr = 1, Object.defineProperty(Ke, "__esModule", { value: !0 }), Ke.validateTuple = void 0;
  const e = /* @__PURE__ */ Y(), t = /* @__PURE__ */ ee(), n = /* @__PURE__ */ Ee(), o = {
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
    const { gen: d, parentSchema: g, data: h, keyword: w, it: y } = r;
    S(g), y.opts.unevaluated && i.length && y.items !== !0 && (y.items = t.mergeEvaluated.items(d, i.length, y.items));
    const v = d.name("valid"), _ = d.const("len", (0, e._)`${h}.length`);
    i.forEach((p, m) => {
      (0, t.alwaysValidSchema)(y, p) || (d.if((0, e._)`${_} > ${m}`, () => r.subschema({
        keyword: w,
        schemaProp: m,
        dataProp: m
      }, v)), r.ok(v));
    });
    function S(p) {
      const { opts: m, errSchemaPath: u } = y, b = i.length, k = b === p.minItems && (b === p.maxItems || p[s] === !1);
      if (m.strictTuples && !k) {
        const a = `"${w}" is ${b}-tuple, but minItems or maxItems/${s} are not specified or different at path "${u}"`;
        (0, t.checkStrictMode)(y, a, m.strictTuples);
      }
    }
  }
  return Ke.validateTuple = c, Ke.default = o, Ke;
}
var Qr;
function is() {
  if (Qr) return Mt;
  Qr = 1, Object.defineProperty(Mt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Zo(), t = {
    keyword: "prefixItems",
    type: "array",
    schemaType: ["array"],
    before: "uniqueItems",
    code: (n) => (0, e.validateTuple)(n, "items")
  };
  return Mt.default = t, Mt;
}
var jt = {}, eo;
function ss() {
  if (eo) return jt;
  eo = 1, Object.defineProperty(jt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Y(), t = /* @__PURE__ */ ee(), n = /* @__PURE__ */ Ee(), o = /* @__PURE__ */ Xo(), r = {
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
var Ot = {}, to;
function as() {
  if (to) return Ot;
  to = 1, Object.defineProperty(Ot, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Y(), t = /* @__PURE__ */ ee(), o = {
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
      const { minContains: y, maxContains: v } = i;
      g.opts.next ? (h = y === void 0 ? 1 : y, w = v) : h = 1;
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
var jn = {}, no;
function Jn() {
  return no || (no = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
    const t = /* @__PURE__ */ Y(), n = /* @__PURE__ */ ee(), o = /* @__PURE__ */ Ee();
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
        const y = Array.isArray(d[w]) ? g : h;
        y[w] = d[w];
      }
      return [g, h];
    }
    function s(d, g = d.schema) {
      const { gen: h, data: w, it: y } = d;
      if (Object.keys(g).length === 0)
        return;
      const v = h.let("missing");
      for (const _ in g) {
        const S = g[_];
        if (S.length === 0)
          continue;
        const p = (0, o.propertyInData)(h, w, _, y.opts.ownProperties);
        d.setParams({
          property: _,
          depsCount: S.length,
          deps: S.join(", ")
        }), y.allErrors ? h.if(p, () => {
          for (const m of S)
            (0, o.checkReportMissingProp)(d, m);
        }) : (h.if((0, t._)`${p} && (${(0, o.checkMissingProp)(d, S, v)})`), (0, o.reportMissingProp)(d, v), h.else());
      }
    }
    e.validatePropertyDeps = s;
    function i(d, g = d.schema) {
      const { gen: h, data: w, keyword: y, it: v } = d, _ = h.name("valid");
      for (const S in g)
        (0, n.alwaysValidSchema)(v, g[S]) || (h.if(
          (0, o.propertyInData)(h, w, S, v.opts.ownProperties),
          () => {
            const p = d.subschema({ keyword: y, schemaProp: S }, _);
            d.mergeValidEvaluated(p, _);
          },
          () => h.var(_, !0)
          // TODO var
        ), d.ok(_));
    }
    e.validateSchemaDeps = i, e.default = c;
  })(jn)), jn;
}
var Tt = {}, ro;
function cs() {
  if (ro) return Tt;
  ro = 1, Object.defineProperty(Tt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Y(), t = /* @__PURE__ */ ee(), o = {
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
var zt = {}, oo;
function Qo() {
  if (oo) return zt;
  oo = 1, Object.defineProperty(zt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ee(), t = /* @__PURE__ */ Y(), n = /* @__PURE__ */ ke(), o = /* @__PURE__ */ ee(), r = {
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
      const { gen: i, schema: d, parentSchema: g, data: h, errsCount: w, it: y } = s;
      if (!w)
        throw new Error("ajv implementation error");
      const { allErrors: v, opts: _ } = y;
      if (y.props = !0, _.removeAdditional !== "all" && (0, o.alwaysValidSchema)(y, d))
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
          const E = (0, o.schemaRefOrVal)(y, g.properties, "properties");
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
          s.setParams({ additionalProperty: l }), s.error(), v || i.break();
          return;
        }
        if (typeof d == "object" && !(0, o.alwaysValidSchema)(y, d)) {
          const f = i.name("valid");
          _.removeAdditional === "failing" ? (a(l, f, !1), i.if((0, t.not)(f), () => {
            s.reset(), b(l);
          })) : (a(l, f), v || i.if((0, t.not)(f), () => i.break()));
        }
      }
      function a(l, f, E) {
        const x = {
          keyword: "additionalProperties",
          dataProp: l,
          dataPropType: o.Type.Str
        };
        E === !1 && Object.assign(x, {
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }), s.subschema(x, f);
      }
    }
  };
  return zt.default = r, zt;
}
var It = {}, io;
function ls() {
  if (io) return It;
  io = 1, Object.defineProperty(It, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ vn(), t = /* @__PURE__ */ Ee(), n = /* @__PURE__ */ ee(), o = /* @__PURE__ */ Qo(), c = {
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
      const y = w.filter((p) => !(0, n.alwaysValidSchema)(h, i[p]));
      if (y.length === 0)
        return;
      const v = s.name("valid");
      for (const p of y)
        _(p) ? S(p) : (s.if((0, t.propertyInData)(s, g, p, h.opts.ownProperties)), S(p), h.allErrors || s.else().var(v, !0), s.endIf()), r.it.definedProperties.add(p), r.ok(v);
      function _(p) {
        return h.opts.useDefaults && !h.compositeRule && i[p].default !== void 0;
      }
      function S(p) {
        r.subschema({
          keyword: "properties",
          schemaProp: p,
          dataProp: p
        }, v);
      }
    }
  };
  return It.default = c, It;
}
var Dt = {}, so;
function ds() {
  if (so) return Dt;
  so = 1, Object.defineProperty(Dt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ee(), t = /* @__PURE__ */ Y(), n = /* @__PURE__ */ ee(), o = /* @__PURE__ */ ee(), c = {
    keyword: "patternProperties",
    type: "object",
    schemaType: "object",
    code(r) {
      const { gen: s, schema: i, data: d, parentSchema: g, it: h } = r, { opts: w } = h, y = (0, e.allSchemaProperties)(i), v = y.filter((k) => (0, n.alwaysValidSchema)(h, i[k]));
      if (y.length === 0 || v.length === y.length && (!h.opts.unevaluated || h.props === !0))
        return;
      const _ = w.strictSchema && !w.allowMatchingProperties && g.properties, S = s.name("valid");
      h.props !== !0 && !(h.props instanceof t.Name) && (h.props = (0, o.evaluatedPropsToName)(s, h.props));
      const { props: p } = h;
      m();
      function m() {
        for (const k of y)
          _ && u(k), h.allErrors ? b(k) : (s.var(S, !0), b(k), s.if(S));
      }
      function u(k) {
        for (const a in _)
          new RegExp(k).test(a) && (0, n.checkStrictMode)(h, `property ${a} matches pattern ${k} (use allowMatchingProperties)`);
      }
      function b(k) {
        s.forIn("key", d, (a) => {
          s.if((0, t._)`${(0, e.usePattern)(r, k)}.test(${a})`, () => {
            const l = v.includes(k);
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
var qt = {}, ao;
function us() {
  if (ao) return qt;
  ao = 1, Object.defineProperty(qt, "__esModule", { value: !0 });
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
var Vt = {}, co;
function fs() {
  if (co) return Vt;
  co = 1, Object.defineProperty(Vt, "__esModule", { value: !0 });
  const t = {
    keyword: "anyOf",
    schemaType: "array",
    trackErrors: !0,
    code: (/* @__PURE__ */ Ee()).validateUnion,
    error: { message: "must match a schema in anyOf" }
  };
  return Vt.default = t, Vt;
}
var Bt = {}, lo;
function ps() {
  if (lo) return Bt;
  lo = 1, Object.defineProperty(Bt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Y(), t = /* @__PURE__ */ ee(), o = {
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
      const g = s, h = r.let("valid", !1), w = r.let("passing", null), y = r.name("_valid");
      c.setParams({ passing: w }), r.block(v), c.result(h, () => c.reset(), () => c.error(!0));
      function v() {
        g.forEach((_, S) => {
          let p;
          (0, t.alwaysValidSchema)(d, _) ? r.var(y, !0) : p = c.subschema({
            keyword: "oneOf",
            schemaProp: S,
            compositeRule: !0
          }, y), S > 0 && r.if((0, e._)`${y} && ${h}`).assign(h, !1).assign(w, (0, e._)`[${w}, ${S}]`).else(), r.if(y, () => {
            r.assign(h, !0), r.assign(w, S), p && c.mergeEvaluated(p, e.Name);
          });
        });
      }
    }
  };
  return Bt.default = o, Bt;
}
var Lt = {}, uo;
function hs() {
  if (uo) return Lt;
  uo = 1, Object.defineProperty(Lt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = {
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
var Ut = {}, fo;
function ms() {
  if (fo) return Ut;
  fo = 1, Object.defineProperty(Ut, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Y(), t = /* @__PURE__ */ ee(), o = {
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
      const w = s.let("valid", !0), y = s.name("_valid");
      if (v(), r.reset(), g && h) {
        const S = s.let("ifClause");
        r.setParams({ ifClause: S }), s.if(y, _("then", S), _("else", S));
      } else g ? s.if(y, _("then")) : s.if((0, e.not)(y), _("else"));
      r.pass(w, () => r.error(!0));
      function v() {
        const S = r.subschema({
          keyword: "if",
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }, y);
        r.mergeEvaluated(S);
      }
      function _(S, p) {
        return () => {
          const m = r.subschema({ keyword: S }, y);
          s.assign(w, y), r.mergeValidEvaluated(m, w), p ? s.assign(p, (0, e._)`${S}`) : r.setParams({ ifClause: S });
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
var Kt = {}, po;
function gs() {
  if (po) return Kt;
  po = 1, Object.defineProperty(Kt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = {
    keyword: ["then", "else"],
    schemaType: ["object", "boolean"],
    code({ keyword: n, parentSchema: o, it: c }) {
      o.if === void 0 && (0, e.checkStrictMode)(c, `"${n}" without "if" is ignored`);
    }
  };
  return Kt.default = t, Kt;
}
var ho;
function ys() {
  if (ho) return Nt;
  ho = 1, Object.defineProperty(Nt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Xo(), t = /* @__PURE__ */ is(), n = /* @__PURE__ */ Zo(), o = /* @__PURE__ */ ss(), c = /* @__PURE__ */ as(), r = /* @__PURE__ */ Jn(), s = /* @__PURE__ */ cs(), i = /* @__PURE__ */ Qo(), d = /* @__PURE__ */ ls(), g = /* @__PURE__ */ ds(), h = /* @__PURE__ */ us(), w = /* @__PURE__ */ fs(), y = /* @__PURE__ */ ps(), v = /* @__PURE__ */ hs(), _ = /* @__PURE__ */ ms(), S = /* @__PURE__ */ gs();
  function p(m = !1) {
    const u = [
      // any
      h.default,
      w.default,
      y.default,
      v.default,
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
var Gt = {}, Ge = {}, mo;
function ei() {
  if (mo) return Ge;
  mo = 1, Object.defineProperty(Ge, "__esModule", { value: !0 }), Ge.dynamicAnchor = void 0;
  const e = /* @__PURE__ */ Y(), t = /* @__PURE__ */ ke(), n = /* @__PURE__ */ bn(), o = /* @__PURE__ */ Gn(), c = {
    keyword: "$dynamicAnchor",
    schemaType: "string",
    code: (i) => r(i, i.schema)
  };
  function r(i, d) {
    const { gen: g, it: h } = i;
    h.schemaEnv.root.dynamicAnchors[d] = !0;
    const w = (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(d)}`, y = h.errSchemaPath === "#" ? h.validateName : s(i);
    g.if((0, e._)`!${w}`, () => g.assign(w, y));
  }
  Ge.dynamicAnchor = r;
  function s(i) {
    const { schemaEnv: d, schema: g, self: h } = i.it, { root: w, baseId: y, localRefs: v, meta: _ } = d.root, { schemaId: S } = h.opts, p = new n.SchemaEnv({ schema: g, schemaId: S, root: w, baseId: y, localRefs: v, meta: _ });
    return n.compileSchema.call(h, p), (0, o.getValidate)(i, p);
  }
  return Ge.default = c, Ge;
}
var He = {}, go;
function ti() {
  if (go) return He;
  go = 1, Object.defineProperty(He, "__esModule", { value: !0 }), He.dynamicRef = void 0;
  const e = /* @__PURE__ */ Y(), t = /* @__PURE__ */ ke(), n = /* @__PURE__ */ Gn(), o = {
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
      const v = i.let("valid", !1);
      w(v), r.ok(v);
    }
    function w(v) {
      if (g.schemaEnv.root.dynamicAnchors[h]) {
        const _ = i.let("_v", (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(h)}`);
        i.if(_, y(_, v), y(g.validateName, v));
      } else
        y(g.validateName, v)();
    }
    function y(v, _) {
      return _ ? () => i.block(() => {
        (0, n.callRef)(r, v), i.let(_, !0);
      }) : () => (0, n.callRef)(r, v);
    }
  }
  return He.dynamicRef = c, He.default = o, He;
}
var Ht = {}, yo;
function vs() {
  if (yo) return Ht;
  yo = 1, Object.defineProperty(Ht, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ei(), t = /* @__PURE__ */ ee(), n = {
    keyword: "$recursiveAnchor",
    schemaType: "boolean",
    code(o) {
      o.schema ? (0, e.dynamicAnchor)(o, "") : (0, t.checkStrictMode)(o.it, "$recursiveAnchor: false is ignored");
    }
  };
  return Ht.default = n, Ht;
}
var Jt = {}, vo;
function $s() {
  if (vo) return Jt;
  vo = 1, Object.defineProperty(Jt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ti(), t = {
    keyword: "$recursiveRef",
    schemaType: "string",
    code: (n) => (0, e.dynamicRef)(n, n.schema)
  };
  return Jt.default = t, Jt;
}
var $o;
function bs() {
  if ($o) return Gt;
  $o = 1, Object.defineProperty(Gt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ei(), t = /* @__PURE__ */ ti(), n = /* @__PURE__ */ vs(), o = /* @__PURE__ */ $s(), c = [e.default, t.default, n.default, o.default];
  return Gt.default = c, Gt;
}
var Wt = {}, Yt = {}, bo;
function ws() {
  if (bo) return Yt;
  bo = 1, Object.defineProperty(Yt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Jn(), t = {
    keyword: "dependentRequired",
    type: "object",
    schemaType: "object",
    error: e.error,
    code: (n) => (0, e.validatePropertyDeps)(n)
  };
  return Yt.default = t, Yt;
}
var Xt = {}, wo;
function _s() {
  if (wo) return Xt;
  wo = 1, Object.defineProperty(Xt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Jn(), t = {
    keyword: "dependentSchemas",
    type: "object",
    schemaType: "object",
    code: (n) => (0, e.validateSchemaDeps)(n)
  };
  return Xt.default = t, Xt;
}
var Zt = {}, _o;
function Ss() {
  if (_o) return Zt;
  _o = 1, Object.defineProperty(Zt, "__esModule", { value: !0 });
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
var So;
function Cs() {
  if (So) return Wt;
  So = 1, Object.defineProperty(Wt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ws(), t = /* @__PURE__ */ _s(), n = /* @__PURE__ */ Ss(), o = [e.default, t.default, n.default];
  return Wt.default = o, Wt;
}
var Qt = {}, en = {}, Co;
function ks() {
  if (Co) return en;
  Co = 1, Object.defineProperty(en, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Y(), t = /* @__PURE__ */ ee(), n = /* @__PURE__ */ ke(), c = {
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
      const { allErrors: w, props: y } = h;
      y instanceof e.Name ? s.if((0, e._)`${y} !== true`, () => s.forIn("key", d, (p) => s.if(_(y, p), () => v(p)))) : y !== !0 && s.forIn("key", d, (p) => y === void 0 ? v(p) : s.if(S(y, p), () => v(p))), h.props = !0, r.ok((0, e._)`${g} === ${n.default.errors}`);
      function v(p) {
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
var tn = {}, ko;
function Es() {
  if (ko) return tn;
  ko = 1, Object.defineProperty(tn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Y(), t = /* @__PURE__ */ ee(), o = {
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
        const y = r.var("valid", (0, e._)`${h} <= ${g}`);
        r.if((0, e.not)(y), () => w(y, g)), c.ok(y);
      }
      d.items = !0;
      function w(y, v) {
        r.forRange("i", v, h, (_) => {
          c.subschema({ keyword: "unevaluatedItems", dataProp: _, dataPropType: t.Type.Num }, y), d.allErrors || r.if((0, e.not)(y), () => r.break());
        });
      }
    }
  };
  return tn.default = o, tn;
}
var Eo;
function xs() {
  if (Eo) return Qt;
  Eo = 1, Object.defineProperty(Qt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ks(), t = /* @__PURE__ */ Es(), n = [e.default, t.default];
  return Qt.default = n, Qt;
}
var nn = {}, rn = {}, xo;
function Ps() {
  if (xo) return rn;
  xo = 1, Object.defineProperty(rn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Y(), n = {
    keyword: "format",
    type: ["number", "string"],
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: o }) => (0, e.str)`must match format "${o}"`,
      params: ({ schemaCode: o }) => (0, e._)`{format: ${o}}`
    },
    code(o, c) {
      const { gen: r, data: s, $data: i, schema: d, schemaCode: g, it: h } = o, { opts: w, errSchemaPath: y, schemaEnv: v, self: _ } = h;
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
          const f = v.$async ? (0, e._)`(${u}.async ? await ${k}(${s}) : ${k}(${s}))` : (0, e._)`${k}(${s})`, E = (0, e._)`(typeof ${k} == "function" ? ${f} : ${k}.test(${s}))`;
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
            return `unknown format "${d}" ignored in schema at path "${y}"`;
          }
        }
        function l(E) {
          const x = E instanceof RegExp ? (0, e.regexpCode)(E) : w.code.formats ? (0, e._)`${w.code.formats}${(0, e.getProperty)(d)}` : void 0, F = r.scopeValue("formats", { key: d, ref: E, code: x });
          return typeof E == "object" && !(E instanceof RegExp) ? [E.type || "string", E.validate, (0, e._)`${F}.validate`] : ["string", E, F];
        }
        function f() {
          if (typeof m == "object" && !(m instanceof RegExp) && m.async) {
            if (!v.$async)
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
var Po;
function Rs() {
  if (Po) return nn;
  Po = 1, Object.defineProperty(nn, "__esModule", { value: !0 });
  const t = [(/* @__PURE__ */ Ps()).default];
  return nn.default = t, nn;
}
var ze = {}, Ro;
function As() {
  return Ro || (Ro = 1, Object.defineProperty(ze, "__esModule", { value: !0 }), ze.contentVocabulary = ze.metadataVocabulary = void 0, ze.metadataVocabulary = [
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
var Ao;
function Fs() {
  if (Ao) return gt;
  Ao = 1, Object.defineProperty(gt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Gi(), t = /* @__PURE__ */ os(), n = /* @__PURE__ */ ys(), o = /* @__PURE__ */ bs(), c = /* @__PURE__ */ Cs(), r = /* @__PURE__ */ xs(), s = /* @__PURE__ */ Rs(), i = /* @__PURE__ */ As(), d = [
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
var on = {}, ot = {}, Fo;
function Ns() {
  if (Fo) return ot;
  Fo = 1, Object.defineProperty(ot, "__esModule", { value: !0 }), ot.DiscrError = void 0;
  var e;
  return (function(t) {
    t.Tag = "tag", t.Mapping = "mapping";
  })(e || (ot.DiscrError = e = {})), ot;
}
var No;
function Ms() {
  if (No) return on;
  No = 1, Object.defineProperty(on, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Y(), t = /* @__PURE__ */ Ns(), n = /* @__PURE__ */ bn(), o = /* @__PURE__ */ $n(), c = /* @__PURE__ */ ee(), s = {
    keyword: "discriminator",
    type: "object",
    schemaType: "object",
    error: {
      message: ({ params: { discrError: i, tagName: d } }) => i === t.DiscrError.Tag ? `tag "${d}" must be string` : `value of tag "${d}" must be in oneOf`,
      params: ({ params: { discrError: i, tag: d, tagName: g } }) => (0, e._)`{error: ${i}, tag: ${g}, tagValue: ${d}}`
    },
    code(i) {
      const { gen: d, data: g, schema: h, parentSchema: w, it: y } = i, { oneOf: v } = w;
      if (!y.opts.discriminator)
        throw new Error("discriminator: requires discriminator option");
      const _ = h.propertyName;
      if (typeof _ != "string")
        throw new Error("discriminator: requires propertyName");
      if (h.mapping)
        throw new Error("discriminator: mapping is not supported");
      if (!v)
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
        for (let z = 0; z < v.length; z++) {
          let T = v[z];
          if (T?.$ref && !(0, c.schemaHasRulesButRef)(T, y.self.RULES)) {
            const U = T.$ref;
            if (T = n.resolveRef.call(y.self, y.schemaEnv.root, y.baseId, U), T instanceof n.SchemaEnv && (T = T.schema), T === void 0)
              throw new o.default(y.opts.uriResolver, y.baseId, U);
          }
          const D = (k = T?.properties) === null || k === void 0 ? void 0 : k[_];
          if (typeof D != "object")
            throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${_}"`);
          f = f && (l || E(T)), x(D, z);
        }
        if (!f)
          throw new Error(`discriminator: "${_}" must be required`);
        return a;
        function E({ required: z }) {
          return Array.isArray(z) && z.includes(_);
        }
        function x(z, T) {
          if (z.const)
            F(z.const, T);
          else if (z.enum)
            for (const D of z.enum)
              F(D, T);
          else
            throw new Error(`discriminator: "properties/${_}" must have "const" or "enum"`);
        }
        function F(z, T) {
          if (typeof z != "string" || z in a)
            throw new Error(`discriminator: "${_}" values must be unique strings`);
          a[z] = T;
        }
      }
    }
  };
  return on.default = s, on;
}
var sn = {};
const js = "https://json-schema.org/draft/2020-12/schema", Os = "https://json-schema.org/draft/2020-12/schema", Ts = { "https://json-schema.org/draft/2020-12/vocab/core": !0, "https://json-schema.org/draft/2020-12/vocab/applicator": !0, "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0, "https://json-schema.org/draft/2020-12/vocab/validation": !0, "https://json-schema.org/draft/2020-12/vocab/meta-data": !0, "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0, "https://json-schema.org/draft/2020-12/vocab/content": !0 }, zs = "meta", Is = "Core and Validation specifications meta-schema", Ds = [{ $ref: "meta/core" }, { $ref: "meta/applicator" }, { $ref: "meta/unevaluated" }, { $ref: "meta/validation" }, { $ref: "meta/meta-data" }, { $ref: "meta/format-annotation" }, { $ref: "meta/content" }], qs = ["object", "boolean"], Vs = "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.", Bs = { definitions: { $comment: '"definitions" has been replaced by "$defs".', type: "object", additionalProperties: { $dynamicRef: "#meta" }, deprecated: !0, default: {} }, dependencies: { $comment: '"dependencies" has been split and replaced by "dependentSchemas" and "dependentRequired" in order to serve their differing semantics.', type: "object", additionalProperties: { anyOf: [{ $dynamicRef: "#meta" }, { $ref: "meta/validation#/$defs/stringArray" }] }, deprecated: !0, default: {} }, $recursiveAnchor: { $comment: '"$recursiveAnchor" has been replaced by "$dynamicAnchor".', $ref: "meta/core#/$defs/anchorString", deprecated: !0 }, $recursiveRef: { $comment: '"$recursiveRef" has been replaced by "$dynamicRef".', $ref: "meta/core#/$defs/uriReferenceString", deprecated: !0 } }, Ls = {
  $schema: js,
  $id: Os,
  $vocabulary: Ts,
  $dynamicAnchor: zs,
  title: Is,
  allOf: Ds,
  type: qs,
  $comment: Vs,
  properties: Bs
}, Us = "https://json-schema.org/draft/2020-12/schema", Ks = "https://json-schema.org/draft/2020-12/meta/applicator", Gs = { "https://json-schema.org/draft/2020-12/vocab/applicator": !0 }, Hs = "meta", Js = "Applicator vocabulary meta-schema", Ws = ["object", "boolean"], Ys = { prefixItems: { $ref: "#/$defs/schemaArray" }, items: { $dynamicRef: "#meta" }, contains: { $dynamicRef: "#meta" }, additionalProperties: { $dynamicRef: "#meta" }, properties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, propertyNames: { format: "regex" }, default: {} }, dependentSchemas: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, propertyNames: { $dynamicRef: "#meta" }, if: { $dynamicRef: "#meta" }, then: { $dynamicRef: "#meta" }, else: { $dynamicRef: "#meta" }, allOf: { $ref: "#/$defs/schemaArray" }, anyOf: { $ref: "#/$defs/schemaArray" }, oneOf: { $ref: "#/$defs/schemaArray" }, not: { $dynamicRef: "#meta" } }, Xs = { schemaArray: { type: "array", minItems: 1, items: { $dynamicRef: "#meta" } } }, Zs = {
  $schema: Us,
  $id: Ks,
  $vocabulary: Gs,
  $dynamicAnchor: Hs,
  title: Js,
  type: Ws,
  properties: Ys,
  $defs: Xs
}, Qs = "https://json-schema.org/draft/2020-12/schema", ea = "https://json-schema.org/draft/2020-12/meta/unevaluated", ta = { "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0 }, na = "meta", ra = "Unevaluated applicator vocabulary meta-schema", oa = ["object", "boolean"], ia = { unevaluatedItems: { $dynamicRef: "#meta" }, unevaluatedProperties: { $dynamicRef: "#meta" } }, sa = {
  $schema: Qs,
  $id: ea,
  $vocabulary: ta,
  $dynamicAnchor: na,
  title: ra,
  type: oa,
  properties: ia
}, aa = "https://json-schema.org/draft/2020-12/schema", ca = "https://json-schema.org/draft/2020-12/meta/content", la = { "https://json-schema.org/draft/2020-12/vocab/content": !0 }, da = "meta", ua = "Content vocabulary meta-schema", fa = ["object", "boolean"], pa = { contentEncoding: { type: "string" }, contentMediaType: { type: "string" }, contentSchema: { $dynamicRef: "#meta" } }, ha = {
  $schema: aa,
  $id: ca,
  $vocabulary: la,
  $dynamicAnchor: da,
  title: ua,
  type: fa,
  properties: pa
}, ma = "https://json-schema.org/draft/2020-12/schema", ga = "https://json-schema.org/draft/2020-12/meta/core", ya = { "https://json-schema.org/draft/2020-12/vocab/core": !0 }, va = "meta", $a = "Core vocabulary meta-schema", ba = ["object", "boolean"], wa = { $id: { $ref: "#/$defs/uriReferenceString", $comment: "Non-empty fragments not allowed.", pattern: "^[^#]*#?$" }, $schema: { $ref: "#/$defs/uriString" }, $ref: { $ref: "#/$defs/uriReferenceString" }, $anchor: { $ref: "#/$defs/anchorString" }, $dynamicRef: { $ref: "#/$defs/uriReferenceString" }, $dynamicAnchor: { $ref: "#/$defs/anchorString" }, $vocabulary: { type: "object", propertyNames: { $ref: "#/$defs/uriString" }, additionalProperties: { type: "boolean" } }, $comment: { type: "string" }, $defs: { type: "object", additionalProperties: { $dynamicRef: "#meta" } } }, _a = { anchorString: { type: "string", pattern: "^[A-Za-z_][-A-Za-z0-9._]*$" }, uriString: { type: "string", format: "uri" }, uriReferenceString: { type: "string", format: "uri-reference" } }, Sa = {
  $schema: ma,
  $id: ga,
  $vocabulary: ya,
  $dynamicAnchor: va,
  title: $a,
  type: ba,
  properties: wa,
  $defs: _a
}, Ca = "https://json-schema.org/draft/2020-12/schema", ka = "https://json-schema.org/draft/2020-12/meta/format-annotation", Ea = { "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0 }, xa = "meta", Pa = "Format vocabulary meta-schema for annotation results", Ra = ["object", "boolean"], Aa = { format: { type: "string" } }, Fa = {
  $schema: Ca,
  $id: ka,
  $vocabulary: Ea,
  $dynamicAnchor: xa,
  title: Pa,
  type: Ra,
  properties: Aa
}, Na = "https://json-schema.org/draft/2020-12/schema", Ma = "https://json-schema.org/draft/2020-12/meta/meta-data", ja = { "https://json-schema.org/draft/2020-12/vocab/meta-data": !0 }, Oa = "meta", Ta = "Meta-data vocabulary meta-schema", za = ["object", "boolean"], Ia = { title: { type: "string" }, description: { type: "string" }, default: !0, deprecated: { type: "boolean", default: !1 }, readOnly: { type: "boolean", default: !1 }, writeOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 } }, Da = {
  $schema: Na,
  $id: Ma,
  $vocabulary: ja,
  $dynamicAnchor: Oa,
  title: Ta,
  type: za,
  properties: Ia
}, qa = "https://json-schema.org/draft/2020-12/schema", Va = "https://json-schema.org/draft/2020-12/meta/validation", Ba = { "https://json-schema.org/draft/2020-12/vocab/validation": !0 }, La = "meta", Ua = "Validation vocabulary meta-schema", Ka = ["object", "boolean"], Ga = { type: { anyOf: [{ $ref: "#/$defs/simpleTypes" }, { type: "array", items: { $ref: "#/$defs/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, const: !0, enum: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/$defs/nonNegativeInteger" }, minLength: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, maxItems: { $ref: "#/$defs/nonNegativeInteger" }, minItems: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, maxContains: { $ref: "#/$defs/nonNegativeInteger" }, minContains: { $ref: "#/$defs/nonNegativeInteger", default: 1 }, maxProperties: { $ref: "#/$defs/nonNegativeInteger" }, minProperties: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, required: { $ref: "#/$defs/stringArray" }, dependentRequired: { type: "object", additionalProperties: { $ref: "#/$defs/stringArray" } } }, Ha = { nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { $ref: "#/$defs/nonNegativeInteger", default: 0 }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, Ja = {
  $schema: qa,
  $id: Va,
  $vocabulary: Ba,
  $dynamicAnchor: La,
  title: Ua,
  type: Ka,
  properties: Ga,
  $defs: Ha
};
var Mo;
function Wa() {
  if (Mo) return sn;
  Mo = 1, Object.defineProperty(sn, "__esModule", { value: !0 });
  const e = Ls, t = Zs, n = sa, o = ha, c = Sa, r = Fa, s = Da, i = Ja, d = ["/properties"];
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
    ].forEach((y) => this.addMetaSchema(y, void 0, !1)), this;
    function w(y, v) {
      return h ? y.$dataMetaSchema(v, d) : v;
    }
  }
  return sn.default = g, sn;
}
var jo;
function Ya() {
  return jo || (jo = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv2020 = void 0;
    const n = /* @__PURE__ */ Ui(), o = /* @__PURE__ */ Fs(), c = /* @__PURE__ */ Ms(), r = /* @__PURE__ */ Wa(), s = "https://json-schema.org/draft/2020-12/schema";
    class i extends n.default {
      constructor(v = {}) {
        super({
          ...v,
          dynamicRef: !0,
          next: !0,
          unevaluated: !0
        });
      }
      _addVocabularies() {
        super._addVocabularies(), o.default.forEach((v) => this.addVocabulary(v)), this.opts.discriminator && this.addKeyword(c.default);
      }
      _addDefaultMetaSchema() {
        super._addDefaultMetaSchema();
        const { $data: v, meta: _ } = this.opts;
        _ && (r.default.call(this, v), this.refs["http://json-schema.org/schema"] = s);
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
    var g = /* @__PURE__ */ Y();
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
    var h = /* @__PURE__ */ Kn();
    Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
      return h.default;
    } });
    var w = /* @__PURE__ */ $n();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return w.default;
    } });
  })(ut, ut.exports)), ut.exports;
}
var Xa = /* @__PURE__ */ Ya();
const Za = /* @__PURE__ */ Pi(Xa), Qa = "https://json-schema.org/draft/2020-12/schema", ec = "https://raw.githubusercontent.com/omsf-eco-infra/gufe-viz/main/schema/gufe-viz.schema.json", tc = "gufe-viz payload", nc = "Python-to-TypeScript contract bridge for gufe visualizations. Source of truth both languages are downstream of it. This schema is not strictly versioned or published as it is only internally consumed by this codebase. Schema description: one schema object per gufe class: every $def named *Viz is the visualization form of exactly one GufeTokenizable, it carries that object's `gufe-key`. Every reference from one gufe object to another is that object's gufe key, and the objects themselves live in the `registry` on the root payload. So a ligand network's nodes are keys, a chemical system's components and a transformation's protocol are keys and each one resolves to a complete, drawable object. An alchemical network whose forty systems share one protein carries that PDB once and points at it forty times, and the browser can still drill into it, because what it points at is a whole ProteinComponentViz. This is a single-shot dump rather than a conversation with a server, so the registry travels with the payload.", rc = [{ $ref: "#/$defs/SmallMoleculeComponentViz" }, { $ref: "#/$defs/ProteinComponentViz" }, { $ref: "#/$defs/SolvatedPDBComponentViz" }, { $ref: "#/$defs/ProteinMembraneComponentViz" }, { $ref: "#/$defs/SolventComponentViz" }, { $ref: "#/$defs/UnknownComponentViz" }, { $ref: "#/$defs/ProtocolViz" }, { $ref: "#/$defs/LigandAtomMappingViz" }, { $ref: "#/$defs/LigandNetworkViz" }, { $ref: "#/$defs/ChemicalSystemViz" }, { $ref: "#/$defs/TransformationViz" }, { $ref: "#/$defs/AlchemicalNetworkViz" }], oc = /* @__PURE__ */ JSON.parse('{"GufeKey":{"title":"GufeKey","description":"A gufe key: the identity of a GufeTokenizable, of the form \'ClassName-<hex digest>\'. It is deterministic and repeatable within a software environment. Only its non-emptiness is checked","type":"string","minLength":1},"ComponentKey":{"title":"ComponentKey","description":"A gufe key naming a ComponentViz in the registry. Identical to GufeKey at validation time: JSON Schema has no way to say \'this string is the gufe-key of an entry in that array, and that entry has this type\', because that is a join across two parts of the document. What the name buys is that the referent\'s type is stated in the contract and carried into the generated TypeScript, instead of living only in a test and a view.","$ref":"#/$defs/GufeKey"},"SmallMoleculeComponentKey":{"title":"SmallMoleculeComponentKey","description":"A gufe key naming a SmallMoleculeComponentViz in the registry. Resolving it yields the whole molecule, SDF included. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ChemicalSystemKey":{"title":"ChemicalSystemKey","description":"A gufe key naming a ChemicalSystemViz in the registry. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ProtocolKey":{"title":"ProtocolKey","description":"A gufe key naming a ProtocolViz in the registry. Every transformation of a network usually names the same one. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"Registry":{"title":"Registry","description":"The pool of gufe objects this payload refers to by key, each a complete payload object in its own right. Entries are unique by `gufe-key` and sorted by (type, gufe-key) so a committed fixture is byte-stable. JSON Schema cannot express \'unique by a property\' or \'every reference resolves\', so both are covered by tests on the Python side and degraded over by the views.","type":"array","items":{"oneOf":[{"$ref":"#/$defs/ComponentViz"},{"$ref":"#/$defs/ProtocolViz"},{"$ref":"#/$defs/ChemicalSystemViz"}]}},"ComponentViz":{"title":"ComponentViz","description":"Any single chemical-system component","oneOf":[{"$ref":"#/$defs/SmallMoleculeComponentViz"},{"$ref":"#/$defs/ProteinComponentViz"},{"$ref":"#/$defs/SolvatedPDBComponentViz"},{"$ref":"#/$defs/ProteinMembraneComponentViz"},{"$ref":"#/$defs/SolventComponentViz"},{"$ref":"#/$defs/UnknownComponentViz"}]},"SmallMoleculeComponentViz":{"title":"SmallMoleculeComponentViz","description":"A small molecule, carried as a complete SDF record.","type":"object","properties":{"type":{"const":"SmallMoleculeComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"sdf":{"type":"string","minLength":1,"description":"Complete inline SDF record, including the conformer."},"smiles":{"type":"string"},"total_charge":{"type":"integer","description":"Net formal charge. Displayed, never recomputed from the SDF."}},"required":["type","gufe-key","name","sdf","smiles","total_charge"],"additionalProperties":false},"ProteinComponentViz":{"title":"ProteinComponentViz","description":"A protein, carried as a complete PDB record.","type":"object","properties":{"type":{"const":"ProteinComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolvatedPDBComponentViz":{"title":"SolvatedPDBComponentViz","description":"A protein with explicit solvent. A distinct type rather than a flag on ProteinComponentViz, because the discriminator is what a view dispatches on and the presence of waters changes what a sensible default representation is.","type":"object","properties":{"type":{"const":"SolvatedPDBComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation, including explicit solvent."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"ProteinMembraneComponentViz":{"title":"ProteinMembraneComponentViz","description":"A protein embedded in a membrane.","type":"object","properties":{"type":{"const":"ProteinMembraneComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation of the protein and membrane system."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolventComponentViz":{"title":"SolventComponentViz","description":"Bulk solvent settings. There is no structure to draw, so these are flat fields suitable for rendering as a settings card.","type":"object","properties":{"type":{"const":"SolventComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"smiles":{"type":"string","minLength":1},"positive_ion":{"type":"string"},"negative_ion":{"type":"string"},"neutralize":{"type":"boolean"},"ion_concentration":{"type":"string","description":"Display-form concentration with units, for example \'0.15 molar\'. A string rather than a number because the unit is part of the value and the view only ever prints it."}},"required":["type","gufe-key","name","smiles","positive_ion","negative_ion","neutralize","ion_concentration"],"additionalProperties":false},"UnknownComponentViz":{"title":"UnknownComponentViz","description":"The graceful fallback for a component type this build does not recognize. gufe supports custom Component subclasses, so meeting one is an expected outcome rather than an error, and the browser answers it with \'sorry, there is no visualization for this\'. This covers an unrecognized type only: a recognized component whose serializer fails is a bug, and raises in Python rather than arriving here wearing a disguise.","type":"object","properties":{"type":{"const":"UnknownComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The gufe class name, so the panel can say which type it could not draw."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ProtocolViz":{"title":"ProtocolViz","description":"A gufe Protocol, named. Every transformation in an alchemical network usually shares one, so this is a registry entry that many edges point at rather than a class name repeated per edge. Settings are deliberately absent for now: they are large, deeply nested, and nothing draws them yet, adding a `settings` field later is additive and breaks nothing.","type":"object","properties":{"type":{"const":"ProtocolViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The Protocol\'s class name, which is what identifies it to a reader, a Protocol has no name of its own, so `name` is usually empty."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ChemicalSystemViz":{"title":"ChemicalSystemViz","description":"A gufe ChemicalSystem: labels mapped to the gufe keys of its components.","type":"object","properties":{"type":{"const":"ChemicalSystemViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"components":{"type":"object","description":"ChemicalSystem labels mapped to the gufe keys of the components in the registry.","additionalProperties":{"$ref":"#/$defs/ComponentKey"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","components"],"additionalProperties":false},"AtomMapping":{"title":"AtomMapping","description":"Atom index correspondence from molecule A to molecule B, as a list of index pairs. A list rather than an object keyed by A\'s index, because JSON object keys can only be strings: keying by index would put decimal strings such as \'12\' in the payload and leave both languages casting them back to integers, and it is Python\'s dict-of-int shape only by resemblance. As a list, both indices stay integers, and \'an entry has a B index for every A index\' becomes a `required` the schema states rather than a convention a reader has to trust. Pairs are ordered by `index_A` so a committed fixture is byte-stable.","type":"array","items":{"type":"object","properties":{"index_A":{"type":"integer","minimum":0,"description":"An atom index in molecule A."},"index_B":{"type":"integer","minimum":0,"description":"The atom index in molecule B that it maps to."}},"required":["index_A","index_B"],"additionalProperties":false}},"Annotations":{"title":"Annotations","description":"Free-form mapping metadata. gufe puts nothing here by design and every mapper picks its own keys, so this is deliberately open. Values are whatever survived being made JSON-safe. Displayed but never interpreted, with the single exception of \'score\'.","type":"object"},"LigandAtomMappingViz":{"title":"LigandAtomMappingViz","description":"One atom mapping between two small molecules. This is also what an edge of a ligand network is because the two endpoints are gufe keys either way: standalone they resolve in this object\'s own registry, and in a network they resolve in the network\'s, where they are the same entries the nodes name. `componentA` and `componentB` are the molecules the two sides of `componentA_to_componentB` index into: an `index_A` is an atom of the SmallMoleculeComponentViz that `componentA` names, and an `index_B` an atom of `componentB`\'s.","type":"object","properties":{"type":{"const":"LigandAtomMappingViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"componentA":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentB":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentA_to_componentB":{"$ref":"#/$defs/AtomMapping"},"score":{"type":["number","null"],"description":"The \'score\' annotation when it is a plain number, otherwise null. This is the one annotation key that is interpreted rather than displayed: it drives the edge colouring and the force layout\'s link distance."},"annotations":{"$ref":"#/$defs/Annotations"},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","componentA","componentB","componentA_to_componentB","score","annotations"],"additionalProperties":false},"LigandNetworkViz":{"title":"LigandNetworkViz","description":"A ligand network: the ligands in the registry, the nodes as keys into it, and the mappings as edges. Deliberately not gufe\'s GraphML: that format embeds a gufe to_json moldict per node, so forwarding it would relocate the decoding problem into the browser rather than avoid it.","type":"object","properties":{"type":{"const":"LigandNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ligand, resolved in `registry`.","items":{"$ref":"#/$defs/SmallMoleculeComponentKey"}},"edges":{"type":"array","description":"The mappings, whose `componentA` and `componentB` name nodes of this network. JSON Schema cannot express that referential constraint, so a Python test covers it, and the view drops a dangling edge with a banner rather than failing.","items":{"$ref":"#/$defs/LigandAtomMappingViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false},"TransformationViz":{"title":"TransformationViz","description":"A transformation between two chemical systems, both named by gufe key, as is its protocol: `stateA` is the system it starts from, `stateB` the one it ends at, and every edge of a network usually names the same protocol. This is also what an edge of an alchemical network is (there is no separate edge type) because `stateA` and `stateB` are keys either way, and in a network they are the keys the nodes name. NonTransformation uses this type too: it exposes the same stateA and stateB properties, both its single system, so it renders as a diff with no differences.","type":"object","properties":{"type":{"const":"TransformationViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"protocol":{"$ref":"#/$defs/ProtocolKey"},"stateA":{"$ref":"#/$defs/ChemicalSystemKey"},"stateB":{"$ref":"#/$defs/ChemicalSystemKey"},"mappings":{"type":"array","items":{"$ref":"#/$defs/LigandAtomMappingViz"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","protocol","stateA","stateB","mappings"],"additionalProperties":false},"AlchemicalNetworkViz":{"title":"AlchemicalNetworkViz","description":"A graph of chemical systems joined by transformations. What repeats here is not the nodes and edges themselves but what they are made of: in practice every system shares one protein and every transformation shares one protocol. Both live in the registry, once, as whole objects so this view can show composition and topology while still letting a reader open a node and see the protein.","type":"object","properties":{"type":{"const":"AlchemicalNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ChemicalSystem, resolved in `registry`.","items":{"$ref":"#/$defs/ChemicalSystemKey"}},"edges":{"type":"array","description":"The transformations, whose `stateA` and `stateB` name nodes of this network.","items":{"$ref":"#/$defs/TransformationViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false}}'), Wn = {
  $schema: Qa,
  $id: ec,
  title: tc,
  description: nc,
  oneOf: rc,
  $defs: oc
}, _l = [
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
], Yn = Wn.$id, Xn = new Za({ allErrors: !0, strict: !1 });
Xn.addSchema(Wn, Yn);
const Oo = Xn.getSchema(Yn), ni = Object.entries(Wn.$defs).filter(
  ([e, t]) => t.properties?.type?.const === e
).map(([e]) => e).sort(), Sl = ni, Zn = /* @__PURE__ */ new Map();
for (const e of ni) {
  const t = Xn.getSchema(`${Yn}#/$defs/${e}`);
  t && Zn.set(e, t);
}
const Dn = { valid: !0, issues: [] };
function qn(e) {
  return (e ?? []).map((t) => ({
    path: t.instancePath || "",
    message: t.keyword === "additionalProperties" ? `unknown property ${JSON.stringify(t.params.additionalProperty)}` : t.message ?? "is invalid"
  }));
}
function ic(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return {
      valid: !1,
      issues: [{ path: "", message: "must be a JSON object" }]
    };
  const t = e.type, n = typeof t == "string" ? Zn.get(t) : void 0;
  return n ? n(e) ? Dn : { valid: !1, issues: qn(n.errors) } : Oo(e) ? Dn : { valid: !1, issues: qn(Oo.errors) };
}
function Cl(e, t) {
  const n = Zn.get(e);
  return n ? n(t) ? Dn : { valid: !1, issues: qn(n.errors) } : {
    valid: !1,
    issues: [
      { path: "", message: `unknown payload type ${JSON.stringify(e)}` }
    ]
  };
}
function sc(e, t = 8) {
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
function ri(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return {
      message: "This does not look like a gufe-viz payload (expected a JSON object)."
    };
  const { type: t } = e;
  if (typeof t != "string" || !t)
    return {
      message: "This payload has no `type`, so there is nothing to say what it is."
    };
  if (!Qn[t]) return ac(t);
  const { valid: n, issues: o } = ic(e);
  return n ? null : {
    message: `This payload says it is a ${t}, but it does not match the gufe-viz schema.`,
    detail: sc(o)
  };
}
function ac(e) {
  const t = Object.keys(Qn).sort().join(", ");
  return {
    message: `Sorry, there is no visualization for ${e} yet. This build can draw: ${t}.`
  };
}
function kl(e) {
  return ri(e)?.message ?? null;
}
class cc extends Se {
  placeholder() {
    return "Waiting for data...";
  }
  renderView(t, n) {
    Ei("payload", n, this);
    const o = ri(n);
    if (o)
      return t.appendChild(lc(o, n)), {};
    const c = n.type, r = Qn[c], s = document.createElement(r);
    return s.style.cssText = "flex:1;min-height:0;min-width:0;", s.payload = n, t.appendChild(s), {
      onResize: () => s.resize?.(),
      // Removing the child fires its own `disconnectedCallback`, which is where
      // its viewers and observers are released
      cleanup: () => s.remove()
    };
  }
}
function lc(e, t) {
  const n = O(
    "div",
    "flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:32px;"
  );
  n.appendChild(ie(e.message));
  const o = (r, s) => O(
    "div",
    "max-width:640px;padding:8px 12px;border-radius:6px;font-size:11px;white-space:pre-wrap;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;overflow-wrap:anywhere;" + (s ? `background:${P.warnBg};color:${P.warnFg};border:1px solid ${P.warnBorder};` : `background:${P.panelBg};color:${P.textMuted2};border:1px solid ${P.cardBorder};`),
    r
  );
  e.detail && n.appendChild(o(e.detail, !0));
  const c = dc(t);
  return c && n.appendChild(o(c, !1)), n;
}
function dc(e) {
  if (e == null || typeof e != "object") return null;
  const t = e, n = [];
  typeof t.type == "string" && n.push(`type: ${dn(t.type)}`), typeof t.name == "string" && t.name && n.push(`name: ${dn(t.name)}`);
  const o = Object.keys(e);
  return o.length && n.push(
    `keys: ${o.slice(0, 12).join(", ")}${o.length > 12 ? ", ..." : ""}`
  ), n.length ? n.join(`
`) : null;
}
Ce("gufe-view", cc);
const er = {
  threeDmol: "https://3dmol.org/build/3Dmol-min.js",
  rdkit: "https://unpkg.com/@rdkit/rdkit/dist/RDKit_minimal.js",
  d3: "https://cdn.jsdelivr.net/npm/d3@7/+esm"
};
function tr(e) {
  const t = globalThis.__gufeEngines?.[e];
  return t ? Promise.resolve(t) : null;
}
function oi(e, t) {
  return new Promise((n, o) => {
    const c = document.createElement("script");
    c.src = e, c.onload = () => n(), c.onerror = () => o(new Error(`Failed to load ${t}`)), document.head.appendChild(c);
  });
}
let qe = null, Je = null;
function nr() {
  if (Je) return Je;
  const e = tr("threeDmol");
  return e ? (Je = e.then((t) => qe = t || window.$3Dmol), Je) : (Je = (async () => {
    if (window.$3Dmol) return qe = window.$3Dmol;
    if (await oi(er.threeDmol, "3Dmol.js"), !window.$3Dmol) throw new Error("3Dmol.js loaded but $3Dmol is undefined");
    return qe = window.$3Dmol;
  })(), Je);
}
let We = null;
function rr() {
  if (We) return We;
  const e = tr("rdkit");
  return e ? (We = e.then((t) => window.RDKit = t), We) : (We = (async () => {
    if (window.RDKit) return window.RDKit;
    if (await oi(er.rdkit, "RDKit"), !window.initRDKitModule) throw new Error("RDKit loaded but initRDKitModule is undefined");
    return window.RDKit = await window.initRDKitModule();
  })(), We);
}
let On = null;
function ii() {
  if (!On) {
    const e = er.d3;
    On = tr("d3") ?? import(
      /* @vite-ignore */
      e
    );
  }
  return On;
}
function si(e, t) {
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
    t.hint && !o && (o = !0, fc(e, t.hint));
  };
  return e.addEventListener("wheel", s, { passive: !1, capture: !0 }), e.addEventListener("pointerdown", c), e.addEventListener("pointerenter", c), e.addEventListener("pointerleave", r), {
    cleanup() {
      e.removeEventListener("wheel", s, { capture: !0 }), e.removeEventListener("pointerdown", c), e.removeEventListener("pointerenter", c), e.removeEventListener("pointerleave", r);
    }
  };
}
const uc = 1600;
function fc(e, t) {
  const n = O(
    "div",
    "position:absolute;bottom:12px;left:50%;transform:translateX(-50%);z-index:30;pointer-events:none;padding:5px 12px;border-radius:6px;font-size:11px;white-space:nowrap;background:rgba(0,0,0,0.72);color:#ffffff;transition:opacity .3s ease;",
    t
  );
  e.appendChild(n), setTimeout(() => {
    n.style.opacity = "0", setTimeout(() => n.remove(), 300);
  }, uc);
}
const pc = { min: 0.25, max: 12 };
function hc(e, t = pc) {
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
const mc = 2e-3;
function gc(e) {
  return Math.exp(-e.deltaY * mc);
}
function or(e, t, n = {}) {
  const o = hc(t, n.bounds), c = si(e, {
    hint: n.hint ?? "Click or hold Ctrl to zoom",
    onZoom: (r) => o.zoomBy(gc(r))
  });
  return { ...o, cleanup: c.cleanup };
}
function wn(e, t = "Reset view") {
  const n = O("button", Be, "Reset");
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
], El = "hsv", I = [0, 0, 0], yc = {
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
}, vc = {
  atomColourPalette: yc,
  addAtomIndices: !0,
  continuousHighlight: !1
}, ai = `
`, To = "$$$$";
function an(e, t) {
  if (!e || !e.trim()) throw new Error("empty SDF");
  const n = e.replace(/\r/g, "").split(ai);
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
    const y = parseInt(w.substring(0, 3), 10), v = parseInt(w.substring(3, 6), 10), _ = parseInt(w.substring(6, 9), 10);
    !isFinite(y) || !isFinite(v) || d.push([y - 1, v - 1, isFinite(_) ? _ : 1]);
  }
  return { name: (n[0] || "").trim() || t || "molecule", symbols: i, bonds: d, coords: s };
}
const ct = (e) => e.indexOf(To) >= 0 ? e : `${e}${ai}${To}`;
function $c(e) {
  const t = String(e).split(/\r?\n/);
  if (t.length < 4) return null;
  const n = parseInt(t[3].slice(0, 3), 10), o = parseInt(t[3].slice(3, 6), 10);
  return isNaN(n) || isNaN(o) ? null : { atoms: n, bonds: o };
}
function ci(e, t, n) {
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
function li(e, t, n) {
  e.innerHTML = t;
  const o = e.querySelector("svg");
  o && (o.removeAttribute("width"), o.removeAttribute("height"), o.getAttribute("viewBox") || o.setAttribute("viewBox", `0 0 ${n} ${n}`), o.setAttribute("preserveAspectRatio", "xMidYMid meet"), o.setAttribute("style", "width:100%;height:100%;max-width:100%;max-height:100%;"));
}
function bc(e, t, n, o, c = {}) {
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
        ...vc,
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
const wc = [
  { id: "stick", label: "Stick", title: "Sticks only" },
  { id: "ball", label: "Ball+Stick", title: "Ball and stick" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" }
], zo = {
  stick: { stick: { radius: 0.15, colorscheme: "Jmol" } },
  ball: { stick: { radius: 0.12, colorscheme: "Jmol" }, sphere: { scale: 0.28, colorscheme: "Jmol" } },
  sphere: { sphere: { scale: 1, colorscheme: "Jmol" } }
}, Io = 400;
class _c extends Se {
  placeholder() {
    return "Waiting for a SmallMoleculeComponent payload...";
  }
  renderView(t, n) {
    const o = n.sdf, c = n.name ?? "", r = n.smiles, s = n.total_charge;
    t.appendChild(Ne(c || "Unnamed molecule", "SmallMoleculeComponent"));
    const i = O("div", "flex:1;display:flex;flex-direction:row;overflow:hidden;min-height:0;");
    t.appendChild(i);
    const d = O("div", "flex:1 1 50%;min-width:0;display:flex;flex-direction:column;"), g = O("div", "flex:1 1 50%;min-width:0;display:flex;flex-direction:column;position:relative;");
    i.appendChild(d), i.appendChild(O("div", `width:1px;flex-shrink:0;background:${P.splitBorder};`)), i.appendChild(g);
    const h = (f) => O("div", `flex-shrink:0;padding:4px 10px;font-size:12px;font-weight:bold;color:${P.labelFg};background:${P.labelBg};`, f);
    d.appendChild(h("2D"));
    const w = O(
      "div",
      `flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:8px;background:${P.canvas2DBg};`
    );
    d.appendChild(w), g.appendChild(h("3D"));
    const y = Un();
    g.appendChild(y.wrap);
    const v = O(
      "div",
      `flex-shrink:0;display:flex;flex-wrap:wrap;align-items:baseline;gap:6px 20px;padding:8px 16px;font-size:12px;background:${P.toolbarBg};border-top:1px solid ${P.toolbarBorder};color:${P.textPrimary};`
    );
    t.appendChild(v);
    const _ = o ? $c(o) : null, S = [
      ["Name", c || Xe, !1],
      ["SMILES", r || Xe, !0],
      ["Charge", s == null ? Xe : String(s), !1],
      ["Atoms", _ ? String(_.atoms) : Xe, !1],
      ["Bonds", _ ? String(_.bonds) : Xe, !1]
    ];
    for (const [f, E, x] of S) {
      const F = O("div", "display:flex;align-items:baseline;gap:6px;min-width:0;");
      F.appendChild(
        O(
          "span",
          `font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;flex-shrink:0;color:${P.textMuted2};`,
          f
        )
      );
      const z = O(
        "span",
        `user-select:text;cursor:text;color:${P.textPrimary}` + (x ? ";font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:11px;overflow-wrap:anywhere;" : ""),
        E
      );
      z.title = E, F.appendChild(z), v.appendChild(F);
    }
    if (!o || !o.trim())
      return w.appendChild(ie("No molecule provided")), y.container.appendChild(ie("No molecule provided")), {};
    w.appendChild(ie("Loading 2D depiction...")), rr().then((f) => {
      const E = ci(f, o, Io);
      E ? li(w, E, Io) : w.replaceChildren(ie("Failed to parse molecule", !0));
    }).catch((f) => {
      w.replaceChildren(ie(`RDKit failed to load: ${me(f)}`, !0));
    });
    let p = null, m = null, u = "stick", b = !1;
    const k = O(
      "div",
      `position:absolute;bottom:10px;right:10px;display:flex;gap:4px;padding:4px;border-radius:6px;z-index:10;background:${P.switcherBg};box-shadow:0 2px 8px rgba(0,0,0,0.25);`
    );
    k.appendChild(
      mn(wc, u, (f) => {
        u = f, p && (p.setStyle({}, zo[f]), p.render());
      })
    );
    const a = O("button", `${Be}margin-left:4px;`, "Spin");
    a.title = "Toggle continuous rotation", a.onclick = () => {
      b = !b, a.style.background = b ? P.btnBgActive : P.btnBg;
      try {
        p?.spin(b ? "y" : !1);
      } catch {
      }
    }, k.appendChild(a);
    const l = wn(() => m?.reset());
    return l.style.marginLeft = "4px", k.appendChild(l), g.appendChild(k), y.container.appendChild(ie("Loading 3D viewer...")), nr().then(() => {
      y.container.replaceChildren(), p = qe.createViewer(y.container, { backgroundColor: P.viewerBg }), p.addModel(ct(o), "sdf"), p.setStyle({}, zo[u]), p.zoomTo(), p.render(), m = or(y.container, p);
    }).catch((f) => {
      y.container.replaceChildren(ie(`3D render failed: ${me(f)}`, !0));
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
Ce("gufe-small-molecule", _c);
const di = ["HOH", "WAT", "SOL", "TIP3"], Do = { hetflag: !1 }, Sc = { hetflag: !0 }, Cc = { resn: di }, je = {
  stick: { radius: 0.15 },
  sphere: { scale: 0.3 },
  hetero: { stickRadius: 0.2, sphereScale: 0.28 },
  water: { stickRadius: 0.05, sphereScale: 0.18 },
  surfaceOpacity: 0.85,
  /** Above this many atoms a surface is slow enough to be worth warning about. */
  surfaceAtomWarn: 4e4
};
function kc(e) {
  const t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
  let o = 0, c = 0, r = 0, s = 1 / 0, i = -1 / 0;
  for (const d of e.split(/\r?\n/)) {
    const g = d.slice(0, 6);
    if (g === "ENDMDL") break;
    if (g !== "ATOM  " && g !== "HETATM") continue;
    o++, g === "HETATM" && c++;
    const h = d.slice(17, 20).trim(), w = d.slice(21, 22).trim() || "_", y = d.slice(22, 26).trim(), v = d.slice(26, 27).trim();
    di.indexOf(h) !== -1 && r++, t.add(w), n.add(`${w}|${y}${v}|${h}`);
    const _ = parseInt(y, 10);
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
function Ec(e) {
  return `${tt(e.chains)} chains · ${tt(e.residues)} residues · ${tt(e.atoms)} atoms · ${tt(e.hetatms)} HETATM` + (e.waters > 0 ? ` (${tt(e.waters)} water)` : "");
}
function xc(e, t) {
  return e === "chain" ? { colorscheme: "chain" } : e === "ss" ? { colorscheme: "ssJmol" } : e === "spectrum" && t && t.resiMax > t.resiMin ? { colorscheme: { prop: "resi", gradient: "roygb", min: t.resiMin, max: t.resiMax } } : { colorscheme: "Jmol" };
}
function qo(e, t, n, o) {
  const c = o || (() => {
  }), r = xc(t.color, n);
  try {
    e.removeAllSurfaces();
  } catch {
  }
  if (e.setStyle({}, {}), e.setStyle(
    Do,
    t.rep === "stick" ? { stick: { radius: je.stick.radius, ...r } } : t.rep === "sphere" ? { sphere: { scale: je.sphere.scale, ...r } } : (
      // For 'surface' the shell is added separately; leave the atoms bare so
      // it is not cluttered from the inside.
      t.rep === "surface" ? {} : { cartoon: { ...r } }
    )
  ), e.setStyle(
    Sc,
    t.hetero ? {
      stick: { radius: je.hetero.stickRadius, colorscheme: "Jmol" },
      sphere: { scale: je.hetero.sphereScale, colorscheme: "Jmol" }
    } : {}
  ), e.setStyle(
    Cc,
    t.waters ? {
      stick: { radius: je.water.stickRadius, colorscheme: "Jmol" },
      sphere: { scale: je.water.sphereScale, colorscheme: "Jmol" }
    } : {}
  ), t.rep !== "surface") {
    c(null), e.render();
    return;
  }
  c(
    n && n.atoms > je.surfaceAtomWarn ? "Computing surface (large structure, this may take a while)..." : "Computing surface..."
  ), e.render(), setTimeout(() => {
    try {
      Promise.resolve(
        e.addSurface(qe.SurfaceType.VDW, { opacity: je.surfaceOpacity, ...r }, Do)
      ).then(() => {
        c(null), e.render();
      }).catch((s) => c(`Surface failed: ${me(s)}`, "error"));
    } catch (s) {
      c(`Surface failed: ${me(s)}`, "error");
    }
  }, 30);
}
const Pc = [
  { id: "cartoon", label: "Cartoon", title: "Ribbon / cartoon backbone" },
  { id: "surface", label: "Surface", title: "Molecular (VDW) surface" },
  { id: "stick", label: "Stick", title: "All-atom sticks" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" }
], Rc = [
  { id: "chain", label: "Chain" },
  { id: "spectrum", label: "Spectrum" },
  { id: "ss", label: "Secondary structure" },
  { id: "element", label: "Element" }
], Ac = {
  ProteinComponentViz: "ProteinComponent",
  SolvatedPDBComponentViz: "SolvatedPDBComponent",
  ProteinMembraneComponentViz: "ProteinMembraneComponent"
};
class Fc extends Se {
  placeholder() {
    return "Waiting for a ProteinComponent payload...";
  }
  renderView(t, n) {
    const o = n.pdb, c = n.name ?? "", r = Ac[n.type] ?? "ProteinComponent", i = { rep: "cartoon", color: "chain", waters: n.type !== "ProteinComponentViz", hetero: !0 };
    let d = null, g = null, h = null;
    const w = O(
      "div",
      `display:flex;align-items:center;gap:14px;flex-wrap:wrap;padding:8px 14px;flex-shrink:0;font-size:12px;background:${P.toolbarBg};border-bottom:1px solid ${P.toolbarBorder};color:${P.textPrimary};`
    );
    t.appendChild(w), w.appendChild(
      O("span", `font-weight:700;font-size:14px;letter-spacing:.02em;color:${P.titleColor};`, c || "Protein")
    ), w.appendChild(O("span", `font-size:11px;color:${P.textMuted2};`, r));
    const y = (a) => O("span", `font-size:11px;color:${P.textMuted};`, a);
    w.appendChild(y("Style:")), w.appendChild(
      mn(Pc, i.rep, (a) => {
        i.rep = a, k();
      })
    ), w.appendChild(y("Color:"));
    const v = O("select", Ln);
    for (const a of Rc) {
      const l = O("option", "", a.label);
      l.value = a.id, v.appendChild(l);
    }
    v.value = i.color, v.addEventListener("change", () => {
      i.color = v.value, k();
    }), w.appendChild(v);
    const _ = O("div", "display:flex;gap:4px;");
    w.appendChild(_);
    const S = [
      ["waters", "Waters", "Show water molecules", () => k()],
      ["hetero", "Hetero", "Show hetero atoms / ligands / ions / lipids", () => k()],
      ["spin", "Spin", "Rotate the view continuously", () => d?.spin(i.spin ? "y" : !1)]
    ];
    for (const [a, l, f, E] of S) {
      const x = O("button", Be, l);
      x.title = f, x.style.background = i[a] ? P.btnBgActive : P.btnBg, x.onclick = () => {
        i[a] = !i[a], x.style.background = i[a] ? P.btnBgActive : P.btnBg, E();
      }, _.appendChild(x);
    }
    _.appendChild(wn(() => g?.reset()));
    const p = O("span", `margin-left:auto;font-size:11px;white-space:nowrap;color:${P.textMuted2};`);
    w.appendChild(p);
    const m = Un();
    t.appendChild(m.wrap);
    const u = O(
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
      u.style.background = f ? P.warnBg : P.toolbarBg, u.style.color = f ? P.warnFg : P.textMuted, u.style.border = `1px solid ${f ? P.warnBorder : P.toolbarBorder}`;
    };
    function k() {
      d && qo(d, i, h, b);
    }
    if (!o || !o.trim())
      return b("No protein data - waiting for a PDB payload."), {};
    try {
      h = kc(o), p.textContent = Ec(h);
    } catch (a) {
      b(`⚠ PDB parse error: ${me(a)}`, "error");
    }
    return b("Loading 3D viewer..."), nr().then(() => {
      d = qe.createViewer(m.container, { backgroundColor: P.viewerBg }), d.addModel(o, "pdb"), qo(d, i, h, b), d.zoomTo(), d.spin(i.spin ? "y" : !1), d.render(), g = or(m.container, d);
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
Ce("gufe-protein", Fc);
const ui = "http://www.w3.org/2000/svg";
function oe(e, t = {}) {
  const n = document.createElementNS(ui, e);
  for (const [o, c] of Object.entries(t)) n.setAttribute(o, String(c));
  return n;
}
function Ze(e, t) {
  const n = document.createElementNS(ui, "title");
  return n.textContent = t, e.appendChild(n), e;
}
function dt(e) {
  const t = /* @__PURE__ */ new Map();
  return Vn(e, t, /* @__PURE__ */ new Set()), t;
}
function Vn(e, t, n) {
  if (e == null || typeof e != "object" || n.has(e)) return;
  if (n.add(e), Array.isArray(e)) {
    for (const c of e) Vn(c, t, n);
    return;
  }
  const o = e.registry;
  if (Array.isArray(o))
    for (const c of o) {
      const r = c["gufe-key"];
      typeof r == "string" && r && !t.has(r) && t.set(r, c);
    }
  for (const c of Object.values(e)) Vn(c, t, n);
}
function Ve(e, t) {
  return t ? e.get(t) : void 0;
}
function Pe(e, t, n) {
  const o = Ve(e, t);
  return o?.type === n ? o : void 0;
}
function Qe(e) {
  return e.name ? e.name : (e["gufe-key"].split("-").pop() ?? e["gufe-key"]).slice(0, 6);
}
function Nc(e, t) {
  if (t <= 0) return it[0];
  const n = t === 1 ? 0 : e / (t - 1), o = it.length, c = Math.max(0, Math.min(o - 1, n * (o - 1))), r = Math.floor(c), s = Math.min(o - 1, r + 1), i = c - r;
  if (i === 0) return it[r];
  const d = (y) => {
    const v = parseInt(y.replace("#", ""), 16);
    return [v >> 16 & 255, v >> 8 & 255, v & 255];
  }, g = d(it[r]), h = d(it[s]);
  return `#${g.map((y, v) => Math.round(y + (h[v] - y) * i)).map((y) => y.toString(16).padStart(2, "0")).join("")}`;
}
function Mc(e, t) {
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
const jc = 1.5;
function Oc(e, t, n, o) {
  const c = [...e.entries()], r = [];
  return c.forEach(([s, i], d) => {
    const g = t[s], h = n[i];
    !g || !h || r.push({
      a: [g[0] - o, g[1], g[2]],
      b: [h[0] + o, h[1], h[2]],
      color: Nc(d, c.length),
      indexA: s,
      indexB: i
    });
  }), r;
}
function Vo(e, t) {
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
const Bo = 420, Lo = { radius: 0.6, alpha: 0.8 }, Tn = { radius: 0.05, dashed: !0, opacity: 0.75 }, Tc = [
  { id: "changes", label: "Changes", title: "Highlight what differs, as gufe draws it" },
  { id: "mapped", label: "Mapped", title: "Highlight the atoms that carry over instead" }
];
function fi(e) {
  const t = parseInt(e.replace("#", ""), 16);
  return [(t >> 16 & 255) / 255, (t >> 8 & 255) / 255, (t & 255) / 255];
}
const zc = fi(Ie.elementChange), Ic = fi(Ie.uniqueAtom);
function Uo(e, t, n) {
  const o = [], c = [], r = [];
  for (let s = 0; s < t.length; s++) {
    const i = e.get(s);
    i === void 0 ? o.push(s) : t[s] !== n[i] ? c.push(s) : r.push(s);
  }
  return { atoms: o, elements: c, mapped: r };
}
function Dc(e, t) {
  if (t === "mapped")
    return { atoms: [...e.mapped, ...e.elements], colors: {} };
  const n = {};
  for (const o of e.elements) n[o] = zc;
  for (const o of e.atoms) n[o] = Ic;
  return { atoms: [...e.elements, ...e.atoms], colors: n };
}
function qc(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e.componentA_to_componentB ?? [])
    Number.isInteger(n?.index_A) && Number.isInteger(n?.index_B) && t.set(n.index_A, n.index_B);
  return t;
}
function pi(e, t) {
  const n = Pe(t, e.componentA, "SmallMoleculeComponentViz"), o = Pe(t, e.componentB, "SmallMoleculeComponentViz");
  return !n || !o ? null : { ...e, registry: n["gufe-key"] === o["gufe-key"] ? [n] : [n, o] };
}
class Vc extends Se {
  placeholder() {
    return "Waiting for a LigandAtomMapping payload...";
  }
  renderView(t, n) {
    const o = dt(n), c = Pe(o, n.componentA, "SmallMoleculeComponentViz"), r = Pe(o, n.componentB, "SmallMoleculeComponentViz"), s = Ne(n.name || "Atom mapping", "LigandAtomMapping");
    if (t.appendChild(s), !c || !r)
      return t.appendChild(
        ie("This mapping names two molecules, and its registry does not hold them.")
      ), {};
    const i = Qe(c), d = Qe(r), g = qc(n);
    let h, w;
    try {
      h = an(c.sdf, i).symbols, w = an(r.sdf, d).symbols;
    } catch (C) {
      return t.appendChild(ie(`Could not read a molecule: ${me(C)}`, !0)), {};
    }
    const y = /* @__PURE__ */ new Map();
    for (const [C, j] of g) y.set(j, C);
    const v = Uo(g, h, w), _ = Uo(y, w, h);
    let S = "changes";
    s.statsEl.appendChild(ce("mapped atoms", String(g.size))), s.statsEl.appendChild(
      ce("element changes", String(v.elements.length), Ie.elementChange)
    ), s.statsEl.appendChild(
      ce(`unique to ${i}`, String(v.atoms.length), Ie.uniqueAtom)
    ), s.statsEl.appendChild(
      ce(`unique to ${d}`, String(_.atoms.length), Ie.uniqueAtom)
    ), s.statsEl.appendChild(ce("score", n.score == null ? Xe : n.score.toFixed(3)));
    const p = O(
      "div",
      `display:flex;align-items:center;gap:12px;flex-wrap:wrap;padding:7px 14px;flex-shrink:0;font-size:12px;background:${P.toolbarBg};border-bottom:1px solid ${P.toolbarBorder};color:${P.textMuted};`
    );
    p.appendChild(O("span", `font-size:11px;color:${P.textMuted};`, "Highlight:")), p.appendChild(
      mn(Tc, S, (C) => {
        S = C, $();
      })
    );
    const m = O("div", "display:flex;align-items:center;gap:12px;margin-left:auto;font-size:11px;");
    m.appendChild(ce("element change", "", Ie.elementChange)), m.appendChild(ce("unique atom", "", Ie.uniqueAtom)), p.appendChild(m), t.appendChild(p);
    const u = O("div", "flex:1;min-height:0;display:flex;flex-direction:column;");
    t.appendChild(u);
    const b = O("div", "flex:1 1 55%;min-height:0;display:flex;flex-direction:row;");
    u.appendChild(b);
    const k = (C) => {
      const j = O("div", "flex:1 1 50%;min-width:0;display:flex;flex-direction:column;");
      j.appendChild(
        O(
          "div",
          `flex-shrink:0;padding:4px 10px;font-size:12px;font-weight:bold;color:${P.labelFg};background:${P.labelBg};`,
          C
        )
      );
      const K = O(
        "div",
        `flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:8px;background:${P.canvas2DBg};`
      );
      return j.appendChild(K), b.appendChild(j), K;
    }, a = (C) => O(
      "div",
      `flex-shrink:0;padding:4px 10px;font-size:12px;font-weight:bold;color:${P.labelFg};background:${P.labelBg};`,
      C
    ), l = k(i);
    b.appendChild(O("div", `width:1px;flex-shrink:0;background:${P.splitBorder};`));
    const f = k(d), E = O("div", "flex:1 1 45%;min-height:180px;display:flex;flex-direction:column;position:relative;");
    u.appendChild(O("div", `height:1px;flex-shrink:0;background:${P.splitBorder};`)), u.appendChild(E), E.appendChild(a("3D overlay"));
    const x = Un();
    E.appendChild(x.wrap);
    const F = an(c.sdf, i).coords, z = an(r.sdf, d).coords, T = Mc(F, z) * jc, D = Oc(g, F, z, T);
    let U = null, te = null, J = !0;
    const se = () => {
      if (U) {
        U.removeAllShapes();
        for (const C of D) {
          for (const j of [C.a, C.b])
            U.addSphere({
              center: { x: j[0], y: j[1], z: j[2] },
              radius: Lo.radius,
              color: C.color,
              alpha: Lo.alpha
            });
          J && U.addCylinder({
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
    }, W = O(
      "div",
      `position:absolute;bottom:10px;right:10px;display:flex;gap:4px;padding:4px;border-radius:6px;z-index:10;background:${P.switcherBg};box-shadow:0 2px 8px rgba(0,0,0,0.25);`
    ), ae = O("button", Be, "Lines");
    ae.title = "Draw a line between each mapped pair", ae.style.background = P.btnBgActive, ae.onclick = () => {
      J = !J, ae.style.background = J ? P.btnBgActive : P.btnBg, se();
    }, W.appendChild(ae), W.appendChild(wn(() => te?.reset())), E.appendChild(W), x.container.appendChild(ie("Loading 3D viewer...")), nr().then(() => {
      x.container.replaceChildren(), U = qe.createViewer(x.container, { backgroundColor: P.viewerBg }), U.addModel(ct(Vo(c.sdf, -T)), "sdf"), U.addModel(ct(Vo(r.sdf, T)), "sdf"), U.addModel(ct(c.sdf), "sdf"), U.addModel(ct(r.sdf), "sdf"), U.setStyle({}, { stick: { radius: 0.12, colorscheme: "Jmol" } }), se(), U.zoomTo(), U.render(), te = or(x.container, U);
    }).catch((C) => {
      x.container.replaceChildren(ie(`3D render failed: ${me(C)}`, !0));
    });
    const B = O(
      "div",
      `flex-shrink:0;max-height:96px;overflow:auto;padding:8px 14px;font-size:11px;line-height:1.6;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;color:${P.textMuted};background:${P.panelBg};border-top:1px solid ${P.toolbarBorder};`
    );
    B.textContent = g.size ? Array.from(g, ([C, j]) => `${C} -> ${j}`).join("   ") : "This mapping relates no atoms at all.", t.appendChild(B);
    const A = Object.entries(n.annotations ?? {}).filter(([C]) => C !== "score");
    if (A.length) {
      const C = O(
        "div",
        `flex-shrink:0;padding:6px 14px;font-size:11px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;color:${P.textMuted2};background:${P.panelBg};border-top:1px solid ${P.toolbarBorder};`
      );
      C.textContent = A.map(([j, K]) => `${j}: ${String(K)}`).join("    "), t.appendChild(C);
    }
    let q = null;
    const N = (C, j, K) => {
      if (!q) return;
      const { atoms: G, colors: ne } = Dc(K, S), Q = bc(q, j, Bo, G, ne);
      C.replaceChildren(), Q ? li(C, Q, Bo) : C.appendChild(ie("Failed to parse molecule", !0));
    }, $ = () => {
      N(l, c.sdf, v), N(f, r.sdf, _);
    };
    return l.appendChild(ie("Loading 2D depiction...")), f.appendChild(ie("Loading 2D depiction...")), rr().then((C) => {
      q = C, $();
    }).catch((C) => {
      const j = `RDKit failed to load: ${me(C)}`;
      l.replaceChildren(ie(j, !0)), f.replaceChildren(ie(j, !0));
    }), {
      onResize() {
        U && (U.resize(), U.render());
      },
      cleanup() {
        if (te?.cleanup(), te = null, !!U) {
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
Ce("gufe-atom-mapping", Vc);
const Bc = ["Force-directed", "Circular", "Radial"], hn = 34, cn = 200, zn = 1.5, Lc = 6, Uc = 16, Ko = { captions: 0.5, depictions: 1.1 }, ln = 200, In = { node: 0.12, edge: 0.06 }, Kc = 1.2, ve = {
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
function Gc(e) {
  const t = parseInt(e.replace("#", ""), 16);
  return [t >> 16 & 255, t >> 8 & 255, t & 255];
}
function Hc(e) {
  const [t, n] = P.netEdgeRamp.map(Gc), o = Math.max(0, Math.min(1, e ?? 0.5));
  return `rgb(${t.map((r, s) => Math.round(r + (n[s] - r) * o)).join(",")})`;
}
const _e = Qe, Jc = (e, t) => e.length > t ? `${e.slice(0, t - 1)}...` : e;
function Wc(e) {
  const t = /* @__PURE__ */ new Set();
  let n = /* @__PURE__ */ new Set();
  const o = (r, s) => {
    if (t.has(s) || n.has(s)) return;
    const i = e.nodes[s], d = i.sdf && ci(r, i.sdf, cn);
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
    let y = 0;
    for (const v of Array.from(g.childNodes)) {
      if (v.nodeType !== 1) continue;
      const _ = v.nodeName.toLowerCase();
      if (!(_ === "defs" || _ === "metadata" || _ === "title")) {
        if (_ === "rect") {
          const S = (v.getAttribute("fill") ?? "").toLowerCase();
          if (S === "#ffffff" || S === "white" || S === "rgb(255,255,255)") continue;
        }
        w.appendChild(document.importNode(v, !0)), y++;
      }
    }
    y ? t.add(s) : n.add(s);
  };
  return { apply: (r, s, i) => {
    const d = r >= Ko.captions;
    for (const v of e.captions)
      v.setAttribute("display", d ? "inline" : "none");
    const g = r >= Ko.depictions;
    for (let v = 0; v < e.nodes.length; v++) {
      const _ = g && t.has(v);
      e.depictionGroups[v].setAttribute("display", _ ? "inline" : "none"), e.initials[v].setAttribute("display", _ ? "none" : "inline");
    }
    if (!g) return;
    const { width: h, height: w } = e.viewport(), y = [];
    e.nodes.forEach((v, _) => {
      if (t.has(_) || n.has(_)) return;
      const S = v.x * r + s, p = v.y * r + i;
      S < -ln || p < -ln || S > h + ln || p > w + ln || y.push(_);
    }), y.length && e.rdkit().then((v) => {
      if (v)
        for (const _ of y) {
          o(v, _);
          const S = t.has(_);
          e.depictionGroups[_].setAttribute("display", S ? "inline" : "none"), e.initials[_].setAttribute("display", S ? "none" : "inline");
        }
    }).catch(() => {
    });
  }, drawn: () => t.size };
}
function Yc(e) {
  const t = O(
    "div",
    `display:flex;flex-direction:column;gap:8px;width:236px;padding:10px;min-height:0;background:${P.panelBg};border-right:1px solid ${P.splitBorder};`
  ), n = O("input", `${Ln}width:100%;box-sizing:border-box;`);
  n.type = "search", n.placeholder = "Search ligands", n.setAttribute("aria-label", "Search ligands by name, SMILES or gufe key"), t.appendChild(n);
  const o = O("div", `display:flex;align-items:center;gap:8px;font-size:11px;color:${P.textMuted};`), c = O("span", `min-width:28px;color:${P.textPrimary};`, "0.00"), r = O("input", "flex:1;");
  r.type = "range", r.min = "0", r.max = "1", r.step = "0.01", r.value = "0", r.setAttribute("aria-label", "Hide mappings scoring below this"), o.appendChild(O("span", "", "score >=")), o.appendChild(r), o.appendChild(c), t.appendChild(o);
  const s = O("div", `font-size:11px;color:${P.textMuted2};`);
  t.appendChild(s);
  const i = O("div", "flex:1;min-height:0;overflow:auto;display:flex;flex-direction:column;gap:3px;");
  t.appendChild(i);
  const d = O("button", `${Be}width:100%;`, "Clear selection");
  d.onclick = () => {
    e.selected.clear(), h(), e.refresh();
  }, t.appendChild(d);
  const g = (w) => {
    const y = e.query.text.trim().toLowerCase();
    return y ? _e(w).toLowerCase().includes(y) || (w.smiles ?? "").toLowerCase().includes(y) || w["gufe-key"].toLowerCase().includes(y) : !0;
  }, h = () => {
    i.replaceChildren();
    const w = e.nodes.map((y, v) => ({ node: y, index: v })).filter(({ node: y }) => g(y));
    s.textContent = `${w.length} of ${e.nodes.length} ligands`;
    for (const { node: y, index: v } of w) {
      const _ = y["gufe-key"], S = O(
        "button",
        `display:flex;align-items:center;gap:6px;padding:5px 8px;border-radius:6px;text-align:left;font-family:inherit;font-size:11px;cursor:pointer;width:100%;min-width:0;border:1px solid ${e.selected.has(_) ? P.cardBorderActive : P.cardBorder};background:${e.selected.has(_) ? P.cardBgActive : P.cardBg};color:${P.textPrimary};`
      ), p = O("span", "flex:1;min-width:0;overflow-wrap:anywhere;", _e(y));
      p.title = `${_e(y)}
${y.smiles ?? ""}`, S.appendChild(p), S.onclick = (m) => {
        m.shiftKey || m.metaKey || m.ctrlKey ? e.selected.has(_) ? e.selected.delete(_) : e.selected.add(_) : (e.selected.clear(), e.selected.add(_), e.focus(v)), h(), e.refresh();
      }, i.appendChild(S);
    }
    w.length || i.appendChild(O("div", `font-size:11px;padding:8px;color:${P.textMuted2};`, "Nothing matches."));
  };
  return n.oninput = () => {
    e.query.text = n.value, h(), e.refresh();
  }, r.oninput = () => {
    e.filter.minScore = Number(r.value), c.textContent = e.filter.minScore.toFixed(2), e.refresh();
  }, h(), t;
}
class Xc extends Se {
  placeholder() {
    return "Waiting for a LigandNetwork payload...";
  }
  renderView(t, n) {
    const o = dt(n), c = [];
    let r = 0;
    for (const J of n.nodes ?? []) {
      const se = Pe(o, J, "SmallMoleculeComponentViz");
      if (!se) {
        r++;
        continue;
      }
      c.push({ ...se, x: 0, y: 0 });
    }
    const s = new Map(c.map((J) => [J["gufe-key"], J])), i = [];
    let d = 0;
    for (const J of n.edges ?? []) {
      const se = s.get(J.componentA), W = s.get(J.componentB);
      if (!se || !W) {
        d++;
        continue;
      }
      i.push({ ...J, index: i.length, from: se, to: W });
    }
    const g = Ne(n.name || "Ligand network", "LigandNetwork");
    g.statsEl.appendChild(ce("ligands", String(c.length))), g.statsEl.appendChild(ce("mappings", String(i.length))), t.appendChild(g);
    const h = O("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    t.appendChild(h);
    const w = /* @__PURE__ */ new Set(), y = { minScore: 0 }, v = { text: "" };
    let _ = () => {
    };
    const S = vi(
      g,
      () => Yc({
        nodes: c,
        edges: i,
        selected: w,
        filter: y,
        query: v,
        refresh: () => _(),
        focus: (J) => l(J)
      }),
      { label: "Search, filter and select ligands", onToggle: () => te() }
    );
    h.appendChild(S.panel);
    const p = O("div", `flex:1 1 58%;min-width:0;display:flex;flex-direction:column;background:${P.netCanvasBg};`), m = O("div", `flex:1 1 42%;min-width:0;display:flex;flex-direction:column;background:${P.appBg};`);
    h.appendChild(p), h.appendChild(O("div", `width:1px;flex-shrink:0;background:${P.splitBorder};`)), h.appendChild(m);
    const u = O("div", `flex:1;position:relative;overflow:hidden;min-height:0;background:${P.netCanvasBg};`);
    p.appendChild(u);
    const b = this.#t(
      (J) => te(J),
      () => D()
    );
    p.appendChild(b.bar);
    const k = this.#e(m, o);
    if (!c.length)
      return u.appendChild(
        ie(
          r ? "None of this network's ligands are in its registry." : "This network has no ligands."
        )
      ), k.message("Nothing to show."), {};
    r && De(
      u,
      `${r} ligand${r === 1 ? "" : "s"} named by this network are not in its registry`
    ), d && De(u, `${d} mapping${d === 1 ? "" : "s"} name a ligand this network does not contain`);
    const a = rr().catch((J) => (console.warn("[gufe-viz] RDKit failed to load:", me(J)), null));
    let l = () => {
    }, f = i.length ? 0 : -1, E = null, x = "Force-directed", F = !1, z = !0, T = () => {
    }, D = () => {
    };
    const U = (J) => {
      f = J, k.show(i[J] ?? null), T();
    }, te = (J = x) => {
      x = J, E?.(), E = null, u.querySelector("svg")?.remove();
      const se = u.clientWidth || 800, W = u.clientHeight || 600;
      Zc(c, se, W, x, i);
      const ae = () => {
        if (!z) return;
        const B = this.#r(u, c, i, se, W, U, a);
        T = () => B.setSelected(f), D = B.reset, E = B.cleanup, l = (A) => B.focusOn(A), _ = () => {
          const A = v.text.trim().toLowerCase(), q = w.size > 0 || A.length > 0, N = /* @__PURE__ */ new Set();
          for (const j of c) {
            const K = j["gufe-key"], G = w.has(K) || A.length > 0 && (_e(j).toLowerCase().includes(A) || (j.smiles ?? "").toLowerCase().includes(A) || K.toLowerCase().includes(A));
            (!q || G) && N.add(K);
          }
          const $ = /* @__PURE__ */ new Set();
          i.forEach((j, K) => {
            (j.score ?? 0) < y.minScore || !N.has(j.from["gufe-key"]) || !N.has(j.to["gufe-key"]) || $.add(K);
          });
          const C = q || y.minScore > 0;
          B.setEmphasis(C ? N : null, C ? $ : null);
        }, T(), _(), B.setDetail(1, 0, 0);
      };
      if (x !== "Force-directed" || F) {
        ae();
        return;
      }
      Qc(c, i, se, W).then((B) => {
        if (z) {
          if (B) {
            ae();
            return;
          }
          F = !0, b.picker.value = "Circular", De(u, "d3 could not be loaded - showing the circular layout instead"), te("Circular");
        }
      }, ae);
    };
    return te(), k.show(i[f] ?? null), {
      onResize: () => te(),
      cleanup: () => {
        z = !1, E?.();
      }
    };
  }
  #t(t, n) {
    const o = O(
      "div",
      `display:flex;align-items:center;gap:10px;flex-wrap:wrap;padding:8px 14px;flex-shrink:0;background:${P.toolbarBg};border-top:1px solid ${P.toolbarBorder};`
    ), c = O("div", `display:flex;align-items:center;gap:6px;font-size:11px;color:${P.textMuted};`);
    c.appendChild(O("span", "", "score")), c.appendChild(
      O(
        "span",
        `width:40px;height:4px;border-radius:2px;background:linear-gradient(to right,${P.netEdgeRamp.join(",")});`
      )
    ), c.appendChild(O("span", "", "0 -> 1")), o.appendChild(c), o.appendChild(O("label", `font-size:12px;margin-left:auto;color:${P.textMuted};`, "Layout"));
    const r = O("select", Ln);
    for (const s of Bc) {
      const i = O("option", "", s);
      i.value = s, r.appendChild(i);
    }
    return r.onchange = () => t(r.value), o.appendChild(r), o.appendChild(wn(n, "Reset pan and zoom")), { bar: o, picker: r };
  }
  /** The right-hand pane: what the selected mapping is, in words and pictures. */
  #e(t, n) {
    const o = O(
      "div",
      `flex-shrink:0;padding:4px 10px;font-size:12px;font-weight:bold;color:${P.labelFg};background:${P.labelBg};`,
      "Selected mapping"
    ), c = O("div", "flex:1;min-height:0;overflow:auto;display:flex;flex-direction:column;");
    t.appendChild(o), t.appendChild(c);
    const r = (i) => c.replaceChildren(ie(i));
    return { show: (i) => {
      if (!i) {
        r("Click an edge to see its mapping.");
        return;
      }
      c.replaceChildren();
      const d = O(
        "div",
        `padding:10px 14px;font-size:13px;font-weight:600;color:${P.textPrimary};border-bottom:1px solid ${P.toolbarBorder};`,
        `${_e(i.from)} -> ${_e(i.to)}`
      );
      c.appendChild(d);
      const g = pi(i, n), h = document.createElement("gufe-atom-mapping");
      h.style.cssText = "flex:1;min-width:0;min-height:220px;display:flex;", h.payload = g, c.appendChild(h);
      const w = Object.entries(i.annotations ?? {}).filter(([y]) => y !== "score");
      if (w.length) {
        const y = O(
          "div",
          `padding:0 14px 12px;font-size:11px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;color:${P.textMuted2};`
        );
        for (const [v, _] of w)
          y.appendChild(O("div", "", `${v}: ${String(_)}`));
        c.appendChild(y);
      }
    }, message: r };
  }
  /** Build the SVG for the current node positions. Returns the handles the
   * caller needs afterwards: selection, depictions, and teardown. */
  #r(t, n, o, c, r, s, i) {
    const d = oe("svg", { width: c, height: r, style: "display:block;touch-action:none;" }), g = oe("g");
    d.appendChild(g), t.appendChild(d);
    const h = [], w = oe("g"), y = oe("g"), v = oe("g", { "pointer-events": "none" }), _ = oe("g");
    g.append(w, y, v, _);
    for (const l of o) {
      const f = Hc(l.score), E = oe("line", {
        stroke: P.netHaloColor,
        "stroke-width": zn + 12,
        "stroke-linecap": "round",
        opacity: 0,
        "pointer-events": "none"
      }), x = oe("line", {
        stroke: f,
        "stroke-width": zn + (l.score ?? 0.5) * (Lc - zn),
        "stroke-opacity": 0.9,
        "pointer-events": "none"
      }), F = Ze(
        oe("line", { stroke: "transparent", "stroke-width": Uc, style: "cursor:pointer;" }),
        `${_e(l.from)} -> ${_e(l.to)}${l.score == null ? "" : `
score ${l.score.toFixed(3)}`}`
      );
      if (F.addEventListener("click", (z) => {
        z.stopPropagation(), s(l.index);
      }), h.push(E), w.append(E, x), y.appendChild(F), l.score != null) {
        const z = oe("text", {
          "text-anchor": "middle",
          "dominant-baseline": "middle",
          "font-size": 10,
          "font-weight": 600,
          fill: P.netEdgeLabel
        });
        z.textContent = l.score.toFixed(2), v.appendChild(z);
      } else
        v.appendChild(oe("text"));
    }
    const S = [], p = [], m = [], u = n.map((l) => {
      const f = Ze(oe("g", { style: "cursor:grab;" }), `${_e(l)}
${l.smiles ?? ""}
${l["gufe-key"]}`);
      f.appendChild(
        oe("circle", {
          r: hn,
          fill: P.netNodeFill,
          stroke: P.netNodeStroke,
          "stroke-width": 1.5
        })
      );
      const E = oe("g", { "pointer-events": "none" });
      f.appendChild(E), S.push(E);
      const x = oe("text", {
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        "font-size": 16,
        "font-weight": 700,
        fill: P.netInitials,
        "pointer-events": "none"
      });
      x.textContent = _e(l).slice(0, 2).toUpperCase(), f.appendChild(x), p.push(x);
      const F = oe("text", {
        "text-anchor": "middle",
        y: hn + 14,
        "font-size": 11,
        "font-weight": 600,
        fill: P.netNodeLabel,
        "pointer-events": "none"
      });
      return F.textContent = Jc(_e(l), 16), F.setAttribute("display", "none"), m.push(F), f.appendChild(F), _.appendChild(f), f;
    }), b = () => {
      o.forEach((l, f) => {
        for (const x of [h[f], w.children[f * 2 + 1], y.children[f]]) {
          const F = x;
          F.setAttribute("x1", String(l.from.x)), F.setAttribute("y1", String(l.from.y)), F.setAttribute("x2", String(l.to.x)), F.setAttribute("y2", String(l.to.y));
        }
        const E = v.children[f];
        E.setAttribute("x", String((l.from.x + l.to.x) / 2)), E.setAttribute("y", String((l.from.y + l.to.y) / 2 - 8));
      }), n.forEach((l, f) => u[f].setAttribute("transform", `translate(${l.x},${l.y})`));
    };
    b();
    const k = Wc({
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
      /**
       * Dim what is not emphasised rather than hiding it.
       *
       * Asked for directly: you want to see what is *not* selected too, because
       * a filter that removes the rest answers a different question from one
       * that fades it.
       */
      setEmphasis(l, f) {
        u.forEach((E, x) => {
          const F = !l || l.has(n[x]["gufe-key"]);
          E.setAttribute("opacity", F ? "1" : String(In.node));
        }), o.forEach((E, x) => {
          const F = !f || f.has(x), z = F ? "0.9" : String(In.edge);
          w.children[x * 2 + 1].setAttribute("stroke-opacity", z), v.children[x].setAttribute("opacity", F ? "1" : String(In.edge));
        });
      },
      focusOn(l) {
        const f = n[l];
        f && a.centreOn(f.x, f.y);
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
    }, y = si(t, {
      onZoom: (m) => {
        const u = t.getBoundingClientRect(), b = m.clientX - u.left, k = m.clientY - u.top, a = Math.min(5 / i, Math.max(0.15 / i, Math.exp(-m.deltaY * 2e-3)));
        d = b - (b - d) * a, g = k - (k - g) * a, i *= a, h();
      },
      hint: "Click the graph or hold Ctrl to zoom"
    });
    let v = null;
    const _ = (m) => {
      v = { x: m.clientX - d, y: m.clientY - g };
    }, S = (m) => {
      v && (d = m.clientX - v.x, g = m.clientY - v.y, h());
    }, p = () => {
      v = null;
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
      /** Bring a graph point to the middle, zooming in enough to read it. */
      centreOn(m, u) {
        const b = t.getBoundingClientRect();
        i = Math.max(i, Kc), d = (b.width || t.clientWidth || 800) / 2 - m * i, g = (b.height || t.clientHeight || 600) / 2 - u * i, h();
      },
      cleanup() {
        y.cleanup(), t.removeEventListener("pointerdown", _), t.removeEventListener("pointermove", S), t.removeEventListener("pointerup", p), t.removeEventListener("pointercancel", p), t.removeEventListener("pointerleave", p);
      }
    };
  }
}
function Zc(e, t, n, o, c) {
  const r = t / 2, s = n / 2, i = (d, g) => {
    d.forEach((h, w) => {
      const y = 2 * Math.PI * w / Math.max(1, d.length) - Math.PI / 2;
      h.x = r + g * Math.cos(y), h.y = s + g * Math.sin(y), h.fx = o === "Force-directed" ? void 0 : h.x, h.fy = o === "Force-directed" ? void 0 : h.y;
    });
  };
  if (o === "Radial" && e.length) {
    const d = new Map(e.map((S) => [S["gufe-key"], []]));
    for (const S of c)
      d.get(S.from["gufe-key"]).push(S.to["gufe-key"]), d.get(S.to["gufe-key"]).push(S.from["gufe-key"]);
    const g = new Map(e.map((S) => [S["gufe-key"], S])), h = e.reduce(
      (S, p) => d.get(p["gufe-key"]).length > d.get(S["gufe-key"]).length ? p : S
    ), w = /* @__PURE__ */ new Set([h["gufe-key"]]);
    let y = [h["gufe-key"]], v = 0;
    const _ = Math.min(t, n) * 0.18;
    for (; y.length; ) {
      i(
        y.map((p) => g.get(p)),
        v === 0 ? 0 : v * _ + 40
      );
      const S = [];
      for (const p of y)
        for (const m of d.get(p))
          w.has(m) || (w.add(m), S.push(m));
      y = S, v++;
    }
    i(e.filter((S) => !w.has(S["gufe-key"])), Math.min(t, n) * 0.45);
    return;
  }
  i(e, Math.min(t, n) * 0.34);
}
async function Qc(e, t, n, o) {
  let c;
  try {
    if (c = await ii(), typeof c?.forceSimulation != "function") return !1;
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
Ce("gufe-ligand-network", Xc);
const st = { width: 148, height: 46, radius: 10 }, Ye = {
  linkDistance: 220,
  linkStrength: 0.4,
  chargeStrength: -1200,
  collisionRadius: 110,
  collisionIterations: 3,
  tickMultiplier: 2
}, at = Qe;
function el(e, t) {
  return e.length > t ? `${e.slice(0, t - 1)}...` : e;
}
function tl(e, t, n) {
  const o = Math.max(90, Math.min(t, n) * 0.36);
  e.forEach((c, r) => {
    const s = 2 * Math.PI * r / Math.max(1, e.length) - Math.PI / 2;
    c.x = t / 2 + o * Math.cos(s), c.y = n / 2 + o * Math.sin(s);
  });
}
async function nl(e, t, n, o) {
  let c;
  try {
    if (c = await ii(), typeof c?.forceSimulation != "function") return !1;
  } catch {
    return !1;
  }
  const r = t.map((d) => ({ source: d.from["gufe-key"], target: d.to["gufe-key"] })), s = c.forceSimulation(e).force(
    "link",
    c.forceLink(r).id((d) => d["gufe-key"]).distance(Ye.linkDistance).strength(Ye.linkStrength)
  ).force("charge", c.forceManyBody().strength(Ye.chargeStrength)).force("center", c.forceCenter(n / 2, o / 2)).force("collision", c.forceCollide(Ye.collisionRadius).iterations(Ye.collisionIterations)).stop(), i = Math.ceil(Math.log(s.alphaMin()) / Math.log(1 - s.alphaDecay()));
  for (let d = 0; d < i * Ye.tickMultiplier; d++) s.tick();
  return !0;
}
class rl extends Se {
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
    }, h = new Set(i.map(g).filter(Boolean)), w = Ne(n.name || "Alchemical network", "AlchemicalNetwork");
    w.statsEl.appendChild(ce("systems", String(c.length))), w.statsEl.appendChild(ce("transformations", String(i.length))), h.size && w.statsEl.appendChild(ce("protocol", [...h].join(", "))), t.appendChild(w);
    const y = O("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    t.appendChild(y);
    const v = O("div", `flex:1 1 62%;min-width:0;position:relative;overflow:hidden;background:${P.netCanvasBg};`);
    y.appendChild(v), y.appendChild(O("div", `width:1px;flex-shrink:0;background:${P.splitBorder};`));
    const _ = O("div", `flex:1 1 38%;min-width:0;display:flex;flex-direction:column;background:${P.appBg};`);
    y.appendChild(_);
    const S = this.#t(_, o, g);
    if (!c.length)
      return v.appendChild(
        ie(
          r ? "None of this network's chemical systems are in its registry." : "This network has no chemical systems."
        )
      ), S.message("Nothing to show."), {};
    r && De(
      v,
      `${r} chemical system${r === 1 ? "" : "s"} named by this network are not in its registry`
    ), d && De(
      v,
      `${d} transformation${d === 1 ? "" : "s"} name a system this network does not contain`
    );
    let p = !0, m = !1, u = null, b = () => {
    };
    const k = (l, f) => {
      u = { kind: l, index: f }, S.show(l === "node" ? c[f] : i[f], l), b();
    }, a = () => {
      v.querySelector("svg")?.remove();
      const l = v.clientWidth || 800, f = v.clientHeight || 600;
      tl(c, l, f);
      const E = () => {
        if (!p) return;
        const x = this.#e(v, c, i, l, f, k);
        b = () => x.setSelected(u), b();
      };
      if (m) {
        E();
        return;
      }
      nl(c, i, l, f).then((x) => {
        p && (x || (m = !0, De(v, "d3 could not be loaded - showing the circular layout instead")), E());
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
      O(
        "div",
        `flex-shrink:0;padding:4px 10px;font-size:12px;font-weight:bold;color:${P.labelFg};background:${P.labelBg};`,
        "Selected"
      )
    );
    const c = O("div", "flex:1;min-height:0;overflow:auto;display:flex;flex-direction:column;");
    t.appendChild(c);
    const r = (d) => c.replaceChildren(ie(d)), s = (d, g) => {
      const h = O(
        "div",
        `padding:10px 14px;border-bottom:1px solid ${P.toolbarBorder};display:flex;flex-direction:column;gap:4px;`
      );
      return h.appendChild(O("div", `font-size:13px;font-weight:600;color:${P.textPrimary};`, d)), h.appendChild(O("div", `font-size:11px;color:${P.textMuted2};`, g)), h;
    };
    return { show: (d, g) => {
      if (c.replaceChildren(), g === "node") {
        const y = d;
        c.appendChild(s(at(y), "ChemicalSystem"));
        const v = O("div", "display:flex;flex-direction:column;gap:6px;padding:12px 14px;"), _ = Object.entries(y.components ?? {});
        for (const [S, p] of _) {
          const m = Ve(n, p), u = O(
            "div",
            `display:flex;align-items:center;gap:8px;padding:7px 10px;border-radius:8px;min-width:0;background:${P.cardBg};border:1px solid ${P.cardBorder};`
          );
          u.appendChild(O("span", `font-size:12px;font-weight:700;color:${P.textPrimary};`, S)), u.appendChild(
            O(
              "span",
              `font-size:11px;color:${P.textMuted};overflow-wrap:anywhere;min-width:0;`,
              m ? m.name || "(unnamed)" : "(not in the registry)"
            )
          );
          const b = lt(
            m ? m.type === "UnknownComponentViz" ? m.gufe_type : m.type.replace(/Viz$/, "") : "missing"
          );
          b.style.marginLeft = "auto", u.appendChild(b), v.appendChild(u);
        }
        _.length || v.appendChild(O("div", `font-size:12px;color:${P.textMuted2};`, "This system lists no components.")), c.appendChild(v), c.appendChild(
          O(
            "div",
            `padding:0 14px 12px;font-size:11px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;color:${P.textMuted2};overflow-wrap:anywhere;`,
            y["gufe-key"]
          )
        );
        return;
      }
      const h = d;
      c.appendChild(s(h.name || "Unnamed transformation", "Transformation"));
      const w = O("div", "display:flex;flex-direction:column;gap:8px;padding:12px 14px;");
      for (const [y, v] of [
        ["State A", at(h.from)],
        ["State B", at(h.to)],
        ["Protocol", o(h) || "-"]
      ]) {
        const _ = O("div", "display:flex;gap:10px;align-items:baseline;min-width:0;");
        _.appendChild(
          O(
            "span",
            `flex:0 0 76px;font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:${P.textMuted2};`,
            y
          )
        ), _.appendChild(O("span", `flex:1;min-width:0;font-size:12px;color:${P.textPrimary};overflow-wrap:anywhere;`, v)), w.appendChild(_);
      }
      c.appendChild(w), c.appendChild(
        O(
          "div",
          `padding:0 14px 12px;font-size:11px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;color:${P.textMuted2};overflow-wrap:anywhere;`,
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
    o.forEach((y, v) => {
      const _ = oe("line", {
        x1: y.from.x,
        y1: y.from.y,
        x2: y.to.x,
        y2: y.to.y,
        stroke: P.netEdgeLine,
        "stroke-width": 2,
        "stroke-linecap": "round",
        style: "cursor:pointer;"
      });
      Ze(_, y.name || "transformation"), _.addEventListener("click", () => s("edge", v)), d.appendChild(_), h.push(_);
      const S = oe("line", {
        x1: y.from.x,
        y1: y.from.y,
        x2: y.to.x,
        y2: y.to.y,
        stroke: "transparent",
        "stroke-width": 16,
        style: "cursor:pointer;"
      });
      S.addEventListener("click", () => s("edge", v)), d.appendChild(S);
    });
    const w = [];
    return n.forEach((y, v) => {
      const _ = oe("g", { style: "cursor:pointer;" }), S = oe("rect", {
        x: y.x - st.width / 2,
        y: y.y - st.height / 2,
        width: st.width,
        height: st.height,
        rx: st.radius,
        fill: P.cardBg,
        stroke: P.cardBorder,
        "stroke-width": 2
      });
      _.appendChild(S), w.push(S);
      const p = oe("text", {
        x: y.x,
        y: y.y - 2,
        "text-anchor": "middle",
        fill: P.netNodeLabel,
        "font-size": 12,
        "font-weight": 700,
        "font-family": "ui-sans-serif,system-ui,sans-serif"
      });
      p.textContent = el(at(y), 20), _.appendChild(p);
      const m = Object.keys(y.components ?? {}).length, u = oe("text", {
        x: y.x,
        y: y.y + 14,
        "text-anchor": "middle",
        fill: P.netInitials,
        "font-size": 10,
        "font-family": "ui-sans-serif,system-ui,sans-serif"
      });
      u.textContent = `${m} component${m === 1 ? "" : "s"}`, _.appendChild(u), Ze(_, at(y)), _.addEventListener("click", () => s("node", v)), g.appendChild(_);
    }), {
      setSelected(y) {
        w.forEach((v, _) => {
          const S = y?.kind === "node" && y.index === _;
          v.setAttribute("stroke", S ? P.cardBorderActive : P.cardBorder), v.setAttribute("stroke-width", S ? "3" : "2");
        }), h.forEach((v, _) => {
          const S = y?.kind === "edge" && y.index === _;
          v.setAttribute("stroke", S ? P.netHaloColor : P.netEdgeLine), v.setAttribute("stroke-width", S ? "4" : "2");
        });
      }
    };
  }
}
Ce("gufe-alchemical-network", rl);
function ol(e) {
  return e.name || e.type.replace(/Viz$/, "");
}
function il(e) {
  return e.type === "UnknownComponentViz" ? e.gufe_type : e.type.replace(/Viz$/, "");
}
class sl extends Se {
  placeholder() {
    return "Waiting for a ChemicalSystem payload...";
  }
  renderView(t, n) {
    const o = dt(n), c = [], r = [];
    for (const [_, S] of Object.entries(n.components ?? {})) {
      const p = Ve(o, S);
      p ? c.push([_, p]) : r.push(_);
    }
    const s = Ne(n.name || "Chemical system", "ChemicalSystem");
    if (s.statsEl.appendChild(ce("components", String(c.length))), t.appendChild(s), !c.length)
      return t.appendChild(
        ie(
          r.length ? "None of this system's components are in its registry." : "This chemical system has no components."
        )
      ), {};
    const i = O("div", "flex:1;min-height:0;position:relative;display:flex;flex-direction:row;");
    t.appendChild(i), r.length && De(
      i,
      `${r.length} component${r.length === 1 ? "" : "s"} named by this system (${r.join(", ")}) are not in its registry`
    );
    const d = O(
      "div",
      `flex:0 0 220px;min-width:0;overflow:auto;display:flex;flex-direction:column;gap:6px;padding:10px;background:${P.panelBg};border-right:1px solid ${P.splitBorder};`
    );
    i.appendChild(d);
    const g = O("div", "flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;");
    i.appendChild(g);
    const h = O("div", "flex:1;min-height:0;display:flex;");
    g.appendChild(h);
    const w = document.createElement("gufe-view");
    w.style.cssText = "flex:1;min-width:0;min-height:0;", h.appendChild(w);
    const y = [], v = (_) => {
      y.forEach((S, p) => {
        const m = p === _;
        S.style.background = m ? P.cardBgActive : P.cardBg, S.style.borderColor = m ? P.cardBorderActive : P.cardBorder;
      }), w.payload = c[_][1];
    };
    return c.forEach(([_, S], p) => {
      const m = O(
        "button",
        `display:flex;flex-direction:column;align-items:flex-start;gap:4px;padding:8px 10px;text-align:left;border:1px solid ${P.cardBorder};border-radius:8px;background:${P.cardBg};cursor:pointer;font-family:inherit;font-size:12px;width:100%;`
      );
      m.appendChild(O("span", `font-weight:700;color:${P.textPrimary};`, _)), m.appendChild(O("span", `font-size:11px;color:${P.textMuted};`, ol(S))), m.appendChild(lt(il(S))), m.onclick = () => v(p), y.push(m), d.appendChild(m);
    }), v(0), {
      onResize: () => w.resize?.(),
      // Removing the nested view fires its own `disconnectedCallback`, which is
      // where whatever it mounted releases its viewers.
      cleanup: () => w.remove()
    };
  }
}
Ce("gufe-chemical-system", sl);
class al extends Se {
  placeholder() {
    return "Waiting for a Protocol payload...";
  }
  renderView(t, n) {
    const o = Ne(n.gufe_type || n.name || "Protocol", "Protocol");
    o.statsEl.appendChild(lt(n.gufe_type)), t.appendChild(o);
    const c = O(
      "div",
      "flex:1;min-height:0;overflow:auto;display:flex;align-items:center;justify-content:center;padding:24px;"
    );
    t.appendChild(c);
    const r = un();
    return r.style.maxWidth = "460px", r.appendChild(xe("gufe class", n.gufe_type, !0)), n.name && r.appendChild(xe("Name", n.name)), r.appendChild(xe("gufe key", n["gufe-key"], !0)), r.appendChild(
      O(
        "div",
        `padding-top:10px;font-size:11px;line-height:1.6;color:${P.textMuted2};`,
        "A Protocol's settings are not carried in this payload: they are large, deeply nested, and nothing draws them yet."
      )
    ), c.appendChild(r), {};
  }
}
Ce("gufe-protocol", al);
const we = { width: 340, height: 260, padding: 14, radius: 12 }, cl = 150, ll = 40, dl = 24;
function ul(e) {
  let t = e >>> 0;
  return () => (t = t * 1664525 + 1013904223 >>> 0, t / 4294967296);
}
function fl(e) {
  const t = /-?\d+(\.\d+)?([eE][-+]?\d+)?/.exec(e ?? "");
  if (!t) return null;
  const n = Number(t[0]);
  return Number.isFinite(n) ? n : null;
}
function pl(e) {
  return e == null || e <= 0 ? 0 : Math.max(1, Math.min(dl, Math.round(e * ll)));
}
function hl(e) {
  const t = oe("svg", {
    viewBox: `0 0 ${we.width} ${we.height}`,
    style: "width:100%;height:100%;max-width:100%;",
    role: "img"
  });
  Ze(t, `${e.smiles || "solvent"} box`), t.appendChild(
    oe("rect", {
      x: 1,
      y: 1,
      width: we.width - 2,
      height: we.height - 2,
      rx: we.radius,
      fill: P.boxFill,
      stroke: P.boxStroke,
      "stroke-width": 1.5
    })
  );
  const n = ul(1597463007), o = () => ({
    x: we.padding + n() * (we.width - 2 * we.padding),
    y: we.padding + n() * (we.height - 2 * we.padding)
  });
  for (let s = 0; s < cl; s++) {
    const { x: i, y: d } = o();
    t.appendChild(oe("circle", { cx: i, cy: d, r: 2.4, fill: P.textMuted2, "fill-opacity": 0.45 }));
  }
  const c = pl(fl(e.ion_concentration)), r = [
    [e.positive_ion, P.diffAdded],
    [e.negative_ion, P.diffRemoved]
  ];
  for (const [s, i] of r)
    for (let d = 0; d < c; d++) {
      const { x: g, y: h } = o(), w = oe("circle", { cx: g, cy: h, r: 5.5, fill: i, "fill-opacity": 0.85 });
      t.appendChild(Ze(w, s));
    }
  return t;
}
class ml extends Se {
  placeholder() {
    return "Waiting for a SolventComponent payload...";
  }
  renderView(t, n) {
    const o = Ne(n.name || "Solvent", "SolventComponent");
    o.statsEl.appendChild(ce("neutralized", n.neutralize ? "yes" : "no")), o.statsEl.appendChild(ce(n.positive_ion, "", P.diffAdded)), o.statsEl.appendChild(ce(n.negative_ion, "", P.diffRemoved)), t.appendChild(o);
    const c = O(
      "div",
      "flex:1;min-height:0;display:flex;flex-wrap:wrap;gap:16px;padding:16px;overflow:auto;align-items:flex-start;"
    );
    t.appendChild(c);
    const r = un();
    r.style.flex = "1 1 320px", r.appendChild(xe("SMILES", n.smiles, !0)), r.appendChild(xe("Positive ion", n.positive_ion)), r.appendChild(xe("Negative ion", n.negative_ion)), r.appendChild(xe("Ion concentration", n.ion_concentration)), r.appendChild(xe("Neutralize", n.neutralize ? "yes" : "no")), c.appendChild(r);
    const s = un();
    return s.style.flex = "1 1 340px", s.style.alignItems = "center", s.appendChild(hl(n)), s.appendChild(
      O(
        "div",
        `padding-top:10px;font-size:11px;text-align:center;color:${P.textMuted2};`,
        "Schematic only: the dots show which ions are present, not how many."
      )
    ), c.appendChild(s), {};
  }
}
Ce("gufe-solvent", ml);
const Bn = {
  unchanged: P.diffUnchanged,
  changed: P.diffChanged,
  added: P.diffAdded,
  removed: P.diffRemoved
};
function gl(e, t) {
  return e && !t ? "removed" : !e && t ? "added" : e === t ? "unchanged" : "changed";
}
function yl(e, t) {
  return [.../* @__PURE__ */ new Set([...Object.keys(e.components ?? {}), ...Object.keys(t.components ?? {})])].sort();
}
function vl(e) {
  if (!e) return null;
  const t = e.type === "UnknownComponentViz" ? e.gufe_type : e.type.replace(/Viz$/, "");
  return { name: e.name || "(unnamed)", type: t };
}
function Go(e, t) {
  const n = O(
    "div",
    `flex:1 1 50%;min-width:0;display:flex;flex-direction:column;gap:4px;padding:8px 10px;border-radius:8px;background:${P.cardBg};border:1px solid ${P.cardBorder};`
  ), o = vl(e);
  return o ? (n.style.borderColor = t === "unchanged" ? P.cardBorder : Bn[t], n.appendChild(O("span", `font-size:12px;font-weight:600;color:${P.textPrimary};`, o.name)), n.appendChild(lt(o.type)), n) : (n.style.background = "transparent", n.style.borderStyle = "dashed", n.appendChild(O("span", `font-size:12px;color:${P.textMuted2};`, "absent")), n);
}
function $l(e, t) {
  const n = Ve(t, e.componentA), o = Ve(t, e.componentB);
  return `${n ? Qe(n) : "A"} to ${o ? Qe(o) : "B"}`;
}
class bl extends Se {
  placeholder() {
    return "Waiting for a Transformation payload...";
  }
  renderView(t, n) {
    const o = dt(n), c = Pe(o, n.stateA, "ChemicalSystemViz"), r = Pe(o, n.stateB, "ChemicalSystemViz"), s = Pe(o, n.protocol, "ProtocolViz"), i = n.mappings ?? [], d = Ne(n.name || "Transformation", "Transformation");
    if (d.statsEl.appendChild(ce("protocol", s?.gufe_type || s?.name || "-")), d.statsEl.appendChild(ce("mappings", String(i.length))), t.appendChild(d), !c || !r)
      return t.appendChild(
        ie("This transformation names two chemical systems, and its registry does not hold them.")
      ), {};
    const g = yl(c, r), h = O("div", "flex:0 0 auto;max-height:45%;overflow:auto;padding:12px 14px;");
    t.appendChild(h);
    const w = O("div", "display:flex;gap:10px;padding:0 0 6px 120px;");
    for (const [p, m] of [
      ["State A", c],
      ["State B", r]
    ])
      w.appendChild(
        O(
          "div",
          `flex:1 1 50%;min-width:0;font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:${P.textMuted2};`,
          `${p}${m.name ? ` - ${m.name}` : ""}`
        )
      );
    h.appendChild(w);
    for (const p of g) {
      const m = c.components?.[p], u = r.components?.[p], b = gl(m, u), k = Ve(o, m), a = Ve(o, u), l = O("div", "display:flex;align-items:stretch;gap:10px;padding:4px 0;"), f = O("div", "flex:0 0 110px;display:flex;align-items:center;gap:6px;min-width:0;");
      f.appendChild(
        O("span", `width:8px;height:8px;border-radius:50%;flex-shrink:0;background:${Bn[b]};`)
      );
      const E = O("span", `font-size:12px;font-weight:700;color:${P.textPrimary};overflow-wrap:anywhere;`, p);
      E.title = b, f.appendChild(E), l.appendChild(f), l.appendChild(Go(k, b)), l.appendChild(Go(a, b)), h.appendChild(l);
    }
    const y = O(
      "div",
      `display:flex;flex-wrap:wrap;gap:12px;padding:8px 0 0;font-size:11px;color:${P.textMuted};`
    );
    for (const p of ["unchanged", "changed", "added", "removed"])
      y.appendChild(ce(p, "", Bn[p]));
    h.appendChild(y);
    const v = O(
      "div",
      `flex-shrink:0;padding:4px 10px;font-size:12px;font-weight:bold;color:${P.labelFg};background:${P.labelBg};`,
      "Atom mapping"
    );
    if (t.appendChild(v), !i.length)
      return t.appendChild(
        ie(
          "This transformation carries no atom mapping - nothing here maps one small molecule onto another."
        )
      ), {};
    const _ = document.createElement("gufe-atom-mapping");
    _.style.cssText = "flex:1;min-height:0;min-width:0;";
    const S = (p) => {
      _.payload = pi(i[p], o);
    };
    if (S(0), i.length > 1) {
      const p = O(
        "div",
        `display:flex;align-items:center;gap:8px;padding:6px 10px;flex-shrink:0;font-size:11px;background:${P.toolbarBg};border-bottom:1px solid ${P.toolbarBorder};color:${P.textMuted};`
      );
      p.appendChild(
        mn(
          i.map((m, u) => ({
            id: String(u),
            label: m.name || $l(m, o)
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
Ce("gufe-transformation", bl);
class wl extends Se {
  placeholder() {
    return "Waiting for a component payload...";
  }
  renderView(t, n) {
    const o = Ne(n.name || "Unnamed component", "Component");
    o.statsEl.appendChild(lt(n.gufe_type)), t.appendChild(o);
    const c = O("div", "flex:1;min-height:0;overflow:auto;display:flex;align-items:center;justify-content:center;padding:24px;");
    t.appendChild(c);
    const r = un();
    return r.style.maxWidth = "460px", r.appendChild(
      O(
        "div",
        `font-size:14px;font-weight:600;padding-bottom:6px;color:${P.textPrimary};`,
        `There is no visualization for ${n.gufe_type}.`
      )
    ), r.appendChild(
      O(
        "div",
        `font-size:12px;line-height:1.6;padding-bottom:10px;color:${P.textMuted};`,
        "gufe lets a project define its own Component subclasses, so this is a component this build has never been taught to draw - not a broken payload. Everything gufe knows about it that survives serialization is below."
      )
    ), r.appendChild(xe("Name", n.name || "(unnamed)")), r.appendChild(xe("gufe class", n.gufe_type, !0)), c.appendChild(r), {};
  }
}
Ce("gufe-unknown-component", wl);
function xl(e, t) {
  let n = e.querySelector("gufe-view");
  return n || (n = document.createElement("gufe-view"), n.style.cssText = "display:block;width:100%;height:100%;", e.appendChild(n)), t !== void 0 && (n.payload = t), n;
}
export {
  gi as CHROME_OPEN_BY_DEFAULT,
  bi as DEBUG_ATTRIBUTE,
  wi as DEBUG_GLOBAL,
  pc as DEFAULT_ZOOM_BOUNDS,
  rl as GufeAlchemicalNetwork,
  Vc as GufeAtomMapping,
  sl as GufeChemicalSystem,
  Se as GufeElement,
  Xc as GufeLigandNetwork,
  Fc as GufeProtein,
  al as GufeProtocol,
  _c as GufeSmallMolecule,
  ml as GufeSolvent,
  bl as GufeTransformation,
  wl as GufeUnknownComponent,
  cc as GufeView,
  Ie as MAPPING_COLORS,
  it as MAPPING_RAMP_3D,
  El as MAPPING_RAMP_NAME,
  _l as PAYLOAD_TYPES,
  Sl as SCHEMA_TYPES,
  Qn as VIEW_TAGS,
  hc as boundedZoom,
  dt as buildRegistry,
  vi as chromeMenu,
  Ci as debugEnabled,
  Ce as defineElement,
  ri as describeProblem,
  gl as diffStatus,
  kl as dispatchProblem,
  Qe as entryLabel,
  sc as formatIssues,
  si as guardWheel,
  Ei as logPayload,
  Ve as lookup,
  Pe as lookupOfType,
  pi as mappingPayloadFor,
  xl as mount,
  fl as parseConcentration,
  ki as payloadJson,
  wn as resetControl,
  Uo as uniqueAtoms,
  Cl as validateAs,
  ic as validatePayload,
  or as viewerInteraction,
  gc as wheelFactor
};
