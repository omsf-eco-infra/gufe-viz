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
function gi() {
  try {
    return globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches ?? !1;
  } catch {
    return !1;
  }
}
const P = gi() ? ar.dark : ar.light;
function N(e, t, n) {
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
const tt = (e) => e.toLocaleString("en-US"), Xe = "-", Oe = `background:${P.btnBg};color:${P.btnFg};border:1px solid ${P.btnBorder};padding:4px 9px;font-size:11px;font-weight:bold;border-radius:3px;cursor:pointer;font-family:inherit;`, un = `background:${P.selectBg};color:${P.textPrimary};border:1px solid ${P.selectBorder};border-radius:6px;padding:4px 8px;font-size:12px;cursor:pointer;font-family:inherit;`;
function gn(e, t, n) {
  const o = N("div", "display:flex;gap:4px;"), c = e.map((r) => {
    const i = N("button", Oe, r.label);
    return i.title = r.title || r.label, i.onmouseover = () => {
      i.style.background = P.btnBgHover;
    }, i.onmouseout = () => {
      i.style.background = t === r.id ? P.btnBgActive : P.btnBg;
    }, i.onclick = () => {
      o.setActive(r.id), n(r.id);
    }, o.appendChild(i), { id: r.id, btn: i };
  });
  return o.setActive = (r) => {
    t = r, c.forEach((i) => {
      i.btn.style.background = i.id === t ? P.btnBgActive : P.btnBg;
    });
  }, o.setActive(t), o;
}
function ce(e, t, n) {
  const o = N("span", "display:inline-flex;align-items:center;gap:5px;white-space:nowrap;");
  n && o.appendChild(
    N("span", `width:8px;height:8px;border-radius:50%;background:${n};display:inline-block;`)
  );
  const c = N("span");
  return c.innerHTML = `${dn(e)} <b style="color:${P.textPrimary};">${dn(t)}</b>`, o.appendChild(c), o;
}
function qe(e, t) {
  const n = N("div", "", `⚠ ${t}`);
  return n.style.cssText = `position:absolute;top:10px;left:50%;transform:translateX(-50%);max-width:90%;z-index:20;padding:6px 14px;border-radius:6px;font-size:12px;background:${P.warnBg};color:${P.warnFg};border:1px solid ${P.warnBorder};`, e.appendChild(n), n;
}
function ie(e, t = !1) {
  return N(
    "div",
    `flex:1;display:flex;align-items:center;justify-content:center;text-align:center;padding:24px;font-size:13px;color:${t ? P.errorFg : P.textMuted2};`,
    e
  );
}
function Ne(e, t) {
  const n = N(
    "div",
    `display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;padding:9px 14px;flex-shrink:0;background:${P.toolbarBg};border-bottom:1px solid ${P.toolbarBorder};`
  );
  return n.titleEl = N("span", `font-weight:700;font-size:15px;color:${P.titleColor};letter-spacing:.02em;`, e), n.subtitleEl = N("span", `font-size:12px;color:${P.textMuted2};`, t || ""), n.statsEl = N(
    "div",
    `display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-left:auto;font-size:11px;color:${P.textMuted};`
  ), n.toggleEl = N("div", "display:flex;align-items:center;margin-left:10px;flex-shrink:0;"), n.appendChild(n.titleEl), n.appendChild(n.subtitleEl), n.appendChild(n.statsEl), n.appendChild(n.toggleEl), n;
}
function xe(e, t, n = !1) {
  const o = N("div", "display:flex;gap:12px;align-items:baseline;padding:5px 0;min-width:0;");
  o.appendChild(
    N(
      "span",
      `flex:0 0 128px;font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:${P.textMuted2};`,
      e
    )
  );
  const c = N(
    "span",
    `flex:1;min-width:0;user-select:text;cursor:text;overflow-wrap:anywhere;color:${P.textPrimary};` + (n ? "font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:11px;" : "font-size:12px;"),
    t
  );
  return c.title = t, o.appendChild(c), o;
}
function lt(e) {
  return N(
    "span",
    `padding:1px 7px;border-radius:10px;font-size:10px;font-weight:700;letter-spacing:.04em;white-space:nowrap;background:${P.badgeBg};color:${P.badgeFg};`,
    e
  );
}
function fn() {
  return N(
    "div",
    `display:flex;flex-direction:column;gap:2px;padding:14px 18px;border-radius:10px;background:${P.cardBg};border:1px solid ${P.cardBorder};`
  );
}
function Un() {
  const e = N("div", "flex:1;position:relative;min-height:0;min-width:0;"), t = N("div", "position:absolute;inset:0;");
  return t.dataset.gufeViewer = "", e.appendChild(t), { wrap: e, container: t };
}
const yi = !1;
function vi() {
  const e = N("span", "display:inline-flex;flex-direction:column;gap:2px;justify-content:center;");
  for (let t = 0; t < 3; t++)
    e.appendChild(N("span", `display:block;width:11px;height:1.5px;border-radius:1px;background:${P.btnFg};`));
  return e;
}
function $i(e, t, n = {}) {
  let o = n.open ?? yi, c = !1;
  const r = N("div", "flex-shrink:0;"), i = N("button", `${Oe}display:inline-flex;align-items:center;gap:6px;padding:4px 8px;`);
  i.appendChild(vi()), i.setAttribute("aria-label", n.label || "Toggle menu");
  const s = () => {
    o && !c && (c = !0, r.appendChild(t())), r.style.display = o ? "" : "none", i.style.background = o ? P.btnBgActive : P.btnBg, i.setAttribute("aria-expanded", String(o));
  }, d = (g) => {
    g !== o && (o = g, s(), n.onToggle?.(o));
  };
  return i.onclick = () => d(!o), i.onmouseover = () => {
    i.style.background = o ? P.btnBgActive : P.btnBgHover;
  }, i.onmouseout = () => {
    i.style.background = o ? P.btnBgActive : P.btnBg;
  }, e.toggleEl.appendChild(i), s(), {
    panel: r,
    isOpen: () => o,
    setOpen: d
  };
}
const bi = ["debug", "gufe-debug"], wi = "debug", _i = "GUFE_VIZ_DEBUG";
function Si() {
  return !!globalThis[_i];
}
function Ci() {
  try {
    const e = globalThis.location?.search;
    if (!e) return !1;
    const t = new URLSearchParams(e);
    return bi.some((n) => t.has(n));
  } catch {
    return !1;
  }
}
function ki(e) {
  return e?.hasAttribute?.(wi) ? !0 : Si() || Ci();
}
function Ei(e) {
  try {
    return JSON.stringify(e, null, 2) ?? String(e);
  } catch (t) {
    return `<could not be stringified: ${me(t)}>`;
  }
}
function xi(e, t, n) {
  if (!ki(n)) return;
  const o = Ei(t), c = t?.type, r = `[gufe-viz] ${e}${typeof c == "string" ? ` ${c}` : ""} (${o.length} chars)`, i = typeof console.groupCollapsed == "function";
  i ? console.groupCollapsed(r) : console.log(r), console.log(o), console.log(t), i && console.groupEnd?.();
}
const Pi = 150;
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
      this.#o && clearTimeout(this.#o), this.#o = setTimeout(() => this.#e?.onResize?.(), Pi);
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
    return this.#s(), this.#r = N(
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
function Ri(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ut = { exports: {} }, En = {}, Re = {}, Te = {}, xn = {}, Pn = {}, Rn = {}, cr;
function pn() {
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
        return (u = this._str) !== null && u !== void 0 ? u : this._str = this._items.reduce((v, k) => `${v}${k}`, "");
      }
      get names() {
        var u;
        return (u = this._names) !== null && u !== void 0 ? u : this._names = this._items.reduce((v, k) => (k instanceof n && (v[k.str] = (v[k.str] || 0) + 1), v), {});
      }
    }
    e._Code = o, e.nil = new o("");
    function c(h, ...u) {
      const v = [h[0]];
      let k = 0;
      for (; k < u.length; )
        s(v, u[k]), v.push(h[++k]);
      return new o(v);
    }
    e._ = c;
    const r = new o("+");
    function i(h, ...u) {
      const v = [y(h[0])];
      let k = 0;
      for (; k < u.length; )
        v.push(r), s(v, u[k]), v.push(r, y(h[++k]));
      return d(v), new o(v);
    }
    e.str = i;
    function s(h, u) {
      u instanceof o ? h.push(...u._items) : u instanceof n ? h.push(u) : h.push(w(u));
    }
    e.addCodeArg = s;
    function d(h) {
      let u = 1;
      for (; u < h.length - 1; ) {
        if (h[u] === r) {
          const v = g(h[u - 1], h[u + 1]);
          if (v !== void 0) {
            h.splice(u - 1, 3, v);
            continue;
          }
          h[u++] = "+";
        }
        u++;
      }
    }
    function g(h, u) {
      if (u === '""')
        return h;
      if (h === '""')
        return u;
      if (typeof h == "string")
        return u instanceof n || h[h.length - 1] !== '"' ? void 0 : typeof u != "string" ? `${h.slice(0, -1)}${u}"` : u[0] === '"' ? h.slice(0, -1) + u.slice(1) : void 0;
      if (typeof u == "string" && u[0] === '"' && !(h instanceof n))
        return `"${h}${u.slice(1)}`;
    }
    function m(h, u) {
      return u.emptyStr() ? h : h.emptyStr() ? u : i`${h}${u}`;
    }
    e.strConcat = m;
    function w(h) {
      return typeof h == "number" || typeof h == "boolean" || h === null ? h : y(Array.isArray(h) ? h.join(",") : h);
    }
    function b(h) {
      return new o(y(h));
    }
    e.stringify = b;
    function y(h) {
      return JSON.stringify(h).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    e.safeStringify = y;
    function _(h) {
      return typeof h == "string" && e.IDENTIFIER.test(h) ? new o(`.${h}`) : c`[${h}]`;
    }
    e.getProperty = _;
    function S(h) {
      if (typeof h == "string" && e.IDENTIFIER.test(h))
        return new o(`${h}`);
      throw new Error(`CodeGen: invalid export name: ${h}, use explicit $id name mapping`);
    }
    e.getEsmExportName = S;
    function p(h) {
      return new o(h.toString());
    }
    e.regexpCode = p;
  })(Rn)), Rn;
}
var An = {}, lr;
function dr() {
  return lr || (lr = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0;
    const t = /* @__PURE__ */ pn();
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
      constructor({ prefixes: g, parent: m } = {}) {
        this._names = {}, this._prefixes = g, this._parent = m;
      }
      toName(g) {
        return g instanceof t.Name ? g : this.name(g);
      }
      name(g) {
        return new t.Name(this._newName(g));
      }
      _newName(g) {
        const m = this._names[g] || this._nameGroup(g);
        return `${g}${m.index++}`;
      }
      _nameGroup(g) {
        var m, w;
        if (!((w = (m = this._parent) === null || m === void 0 ? void 0 : m._prefixes) === null || w === void 0) && w.has(g) || this._prefixes && !this._prefixes.has(g))
          throw new Error(`CodeGen: prefix "${g}" is not allowed in this scope`);
        return this._names[g] = { prefix: g, index: 0 };
      }
    }
    e.Scope = c;
    class r extends t.Name {
      constructor(g, m) {
        super(m), this.prefix = g;
      }
      setValue(g, { property: m, itemIndex: w }) {
        this.value = g, this.scopePath = (0, t._)`.${new t.Name(m)}[${w}]`;
      }
    }
    e.ValueScopeName = r;
    const i = (0, t._)`\n`;
    class s extends c {
      constructor(g) {
        super(g), this._values = {}, this._scope = g.scope, this.opts = { ...g, _n: g.lines ? i : t.nil };
      }
      get() {
        return this._scope;
      }
      name(g) {
        return new r(g, this._newName(g));
      }
      value(g, m) {
        var w;
        if (m.ref === void 0)
          throw new Error("CodeGen: ref must be passed in value");
        const b = this.toName(g), { prefix: y } = b, _ = (w = m.key) !== null && w !== void 0 ? w : m.ref;
        let S = this._values[y];
        if (S) {
          const u = S.get(_);
          if (u)
            return u;
        } else
          S = this._values[y] = /* @__PURE__ */ new Map();
        S.set(_, b);
        const p = this._scope[y] || (this._scope[y] = []), h = p.length;
        return p[h] = m.ref, b.setValue(m, { property: y, itemIndex: h }), b;
      }
      getValue(g, m) {
        const w = this._values[g];
        if (w)
          return w.get(m);
      }
      scopeRefs(g, m = this._values) {
        return this._reduceValues(m, (w) => {
          if (w.scopePath === void 0)
            throw new Error(`CodeGen: name "${w}" has no value`);
          return (0, t._)`${g}${w.scopePath}`;
        });
      }
      scopeCode(g = this._values, m, w) {
        return this._reduceValues(g, (b) => {
          if (b.value === void 0)
            throw new Error(`CodeGen: name "${b}" has no value`);
          return b.value.code;
        }, m, w);
      }
      _reduceValues(g, m, w = {}, b) {
        let y = t.nil;
        for (const _ in g) {
          const S = g[_];
          if (!S)
            continue;
          const p = w[_] = w[_] || /* @__PURE__ */ new Map();
          S.forEach((h) => {
            if (p.has(h))
              return;
            p.set(h, o.Started);
            let u = m(h);
            if (u) {
              const v = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
              y = (0, t._)`${y}${v} ${h} = ${u};${this.opts._n}`;
            } else if (u = b?.(h))
              y = (0, t._)`${y}${u}${this.opts._n}`;
            else
              throw new n(h);
            p.set(h, o.Completed);
          });
        }
        return y;
      }
    }
    e.ValueScope = s;
  })(An)), An;
}
var ur;
function Y() {
  return ur || (ur = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
    const t = /* @__PURE__ */ pn(), n = /* @__PURE__ */ dr();
    var o = /* @__PURE__ */ pn();
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
    class i extends r {
      constructor($, C, O) {
        super(), this.varKind = $, this.name = C, this.rhs = O;
      }
      render({ es5: $, _n: C }) {
        const O = $ ? n.varKinds.var : this.varKind, K = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
        return `${O} ${this.name}${K};` + C;
      }
      optimizeNames($, C) {
        if ($[this.name.str])
          return this.rhs && (this.rhs = U(this.rhs, $, C)), this;
      }
      get names() {
        return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
      }
    }
    class s extends r {
      constructor($, C, O) {
        super(), this.lhs = $, this.rhs = C, this.sideEffects = O;
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
    class d extends s {
      constructor($, C, O, K) {
        super($, O, K), this.op = C;
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
    class m extends r {
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
    class b extends r {
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
    class y extends r {
      constructor($ = []) {
        super(), this.nodes = $;
      }
      render($) {
        return this.nodes.reduce((C, O) => C + O.render($), "");
      }
      optimizeNodes() {
        const { nodes: $ } = this;
        let C = $.length;
        for (; C--; ) {
          const O = $[C].optimizeNodes();
          Array.isArray(O) ? $.splice(C, 1, ...O) : O ? $[C] = O : $.splice(C, 1);
        }
        return $.length > 0 ? this : void 0;
      }
      optimizeNames($, C) {
        const { nodes: O } = this;
        let K = O.length;
        for (; K--; ) {
          const G = O[K];
          G.optimizeNames($, C) || (te($, G.names), O.splice(K, 1));
        }
        return O.length > 0 ? this : void 0;
      }
      get names() {
        return this.nodes.reduce(($, C) => T($, C.names), {});
      }
    }
    class _ extends y {
      render($) {
        return "{" + $._n + super.render($) + "}" + $._n;
      }
    }
    class S extends y {
    }
    class p extends _ {
    }
    p.kind = "else";
    class h extends _ {
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
          const O = C.optimizeNodes();
          C = this.else = Array.isArray(O) ? new p(O) : O;
        }
        if (C)
          return $ === !1 ? C instanceof h ? C : C.nodes : this.nodes.length ? this : new h(J($), C instanceof h ? [C] : C.nodes);
        if (!($ === !1 || !this.nodes.length))
          return this;
      }
      optimizeNames($, C) {
        var O;
        if (this.else = (O = this.else) === null || O === void 0 ? void 0 : O.optimizeNames($, C), !!(super.optimizeNames($, C) || this.else))
          return this.condition = U(this.condition, $, C), this;
      }
      get names() {
        const $ = super.names;
        return D($, this.condition), this.else && T($, this.else.names), $;
      }
    }
    h.kind = "if";
    class u extends _ {
    }
    u.kind = "for";
    class v extends u {
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
      constructor($, C, O, K) {
        super(), this.varKind = $, this.name = C, this.from = O, this.to = K;
      }
      render($) {
        const C = $.es5 ? n.varKinds.var : this.varKind, { name: O, from: K, to: G } = this;
        return `for(${C} ${O}=${K}; ${O}<${G}; ${O}++)` + super.render($);
      }
      get names() {
        const $ = D(super.names, this.from);
        return D($, this.to);
      }
    }
    class a extends u {
      constructor($, C, O, K) {
        super(), this.loop = $, this.varKind = C, this.name = O, this.iterable = K;
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
      constructor($, C, O) {
        super(), this.name = $, this.args = C, this.async = O;
      }
      render($) {
        return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render($);
      }
    }
    l.kind = "func";
    class f extends y {
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
        var O, K;
        return super.optimizeNames($, C), (O = this.catch) === null || O === void 0 || O.optimizeNames($, C), (K = this.finally) === null || K === void 0 || K.optimizeNames($, C), this;
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
        const O = this._extScope.value($, C);
        return (this._values[O.prefix] || (this._values[O.prefix] = /* @__PURE__ */ new Set())).add(O), O;
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
      _def($, C, O, K) {
        const G = this._scope.toName(C);
        return O !== void 0 && K && (this._constants[G.str] = O), this._leafNode(new i($, G, O)), G;
      }
      // `const` declaration (`var` in es5 mode)
      const($, C, O) {
        return this._def(n.varKinds.const, $, C, O);
      }
      // `let` declaration with optional assignment (`var` in es5 mode)
      let($, C, O) {
        return this._def(n.varKinds.let, $, C, O);
      }
      // `var` declaration with optional assignment
      var($, C, O) {
        return this._def(n.varKinds.var, $, C, O);
      }
      // assignment code
      assign($, C, O) {
        return this._leafNode(new s($, C, O));
      }
      // `+=` code
      add($, C) {
        return this._leafNode(new d($, e.operators.ADD, C));
      }
      // appends passed SafeExpr to code or executes Block
      code($) {
        return typeof $ == "function" ? $() : $ !== t.nil && this._leafNode(new b($)), this;
      }
      // returns code for object literal for the passed argument list of key-value pairs
      object(...$) {
        const C = ["{"];
        for (const [O, K] of $)
          C.length > 1 && C.push(","), C.push(O), (O !== K || this.opts.es5) && (C.push(":"), (0, t.addCodeArg)(C, K));
        return C.push("}"), new t._Code(C);
      }
      // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
      if($, C, O) {
        if (this._blockNode(new h($)), C && O)
          this.code(C).else().code(O).endIf();
        else if (C)
          this.code(C).endIf();
        else if (O)
          throw new Error('CodeGen: "else" body without "then" body');
        return this;
      }
      // `else if` clause - invalid without `if` or after `else` clauses
      elseIf($) {
        return this._elseNode(new h($));
      }
      // `else` clause - only valid after `if` or `else if` clauses
      else() {
        return this._elseNode(new p());
      }
      // end `if` statement (needed if gen.if was used only with condition)
      endIf() {
        return this._endBlockNode(h, p);
      }
      _for($, C) {
        return this._blockNode($), C && this.code(C).endFor(), this;
      }
      // a generic `for` clause (or statement if `forBody` is passed)
      for($, C) {
        return this._for(new v($), C);
      }
      // `for` statement for a range of values
      forRange($, C, O, K, G = this.opts.es5 ? n.varKinds.var : n.varKinds.let) {
        const ne = this._scope.toName($);
        return this._for(new k(G, ne, C, O), () => K(ne));
      }
      // `for-of` statement (in es5 mode replace with a normal for loop)
      forOf($, C, O, K = n.varKinds.const) {
        const G = this._scope.toName($);
        if (this.opts.es5) {
          const ne = C instanceof t.Name ? C : this.var("_arr", C);
          return this.forRange("_i", 0, (0, t._)`${ne}.length`, (Q) => {
            this.var(G, (0, t._)`${ne}[${Q}]`), O(G);
          });
        }
        return this._for(new a("of", K, G, C), () => O(G));
      }
      // `for-in` statement.
      // With option `ownProperties` replaced with a `for-of` loop for object keys
      forIn($, C, O, K = this.opts.es5 ? n.varKinds.var : n.varKinds.const) {
        if (this.opts.ownProperties)
          return this.forOf($, (0, t._)`Object.keys(${C})`, O);
        const G = this._scope.toName($);
        return this._for(new a("in", K, G, C), () => O(G));
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
        return this._leafNode(new m($));
      }
      // `return` statement
      return($) {
        const C = new f();
        if (this._blockNode(C), this.code($), C.nodes.length !== 1)
          throw new Error('CodeGen: "return" should have one node');
        return this._endBlockNode(f);
      }
      // `try` statement
      try($, C, O) {
        if (!C && !O)
          throw new Error('CodeGen: "try" without "catch" and "finally"');
        const K = new E();
        if (this._blockNode(K), this.code($), C) {
          const G = this.name("e");
          this._currNode = K.catch = new x(G), C(G);
        }
        return O && (this._currNode = K.finally = new F(), this.code(O)), this._endBlockNode(x, F);
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
        const O = this._nodes.length - C;
        if (O < 0 || $ !== void 0 && O !== $)
          throw new Error(`CodeGen: wrong number of nodes: ${O} vs ${$} expected`);
        return this._nodes.length = C, this;
      }
      // `function` heading (or definition if funcBody is passed)
      func($, C = t.nil, O, K) {
        return this._blockNode(new l($, C, O)), K && this.code(K).endFunc(), this;
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
        const O = this._currNode;
        if (O instanceof $ || C && O instanceof C)
          return this._nodes.pop(), this;
        throw new Error(`CodeGen: not in block "${C ? `${$.kind}/${C.kind}` : $.kind}"`);
      }
      _elseNode($) {
        const C = this._currNode;
        if (!(C instanceof h))
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
    function T(M, $) {
      for (const C in $)
        M[C] = (M[C] || 0) + ($[C] || 0);
      return M;
    }
    function D(M, $) {
      return $ instanceof t._CodeOrName ? T(M, $.names) : M;
    }
    function U(M, $, C) {
      if (M instanceof t.Name)
        return O(M);
      if (!K(M))
        return M;
      return new t._Code(M._items.reduce((G, ne) => (ne instanceof t.Name && (ne = O(ne)), ne instanceof t._Code ? G.push(...ne._items) : G.push(ne), G), []));
      function O(G) {
        const ne = C[G.str];
        return ne === void 0 || $[G.str] !== 1 ? G : (delete $[G.str], ne);
      }
      function K(G) {
        return G instanceof t._Code && G._items.some((ne) => ne instanceof t.Name && $[ne.str] === 1 && C[ne.str] !== void 0);
      }
    }
    function te(M, $) {
      for (const C in $)
        M[C] = (M[C] || 0) - ($[C] || 0);
    }
    function J(M) {
      return typeof M == "boolean" || typeof M == "number" || M === null ? !M : (0, t._)`!${q(M)}`;
    }
    e.not = J;
    const se = A(e.operators.AND);
    function W(...M) {
      return M.reduce(se);
    }
    e.and = W;
    const ae = A(e.operators.OR);
    function B(...M) {
      return M.reduce(ae);
    }
    e.or = B;
    function A(M) {
      return ($, C) => $ === t.nil ? C : C === t.nil ? $ : (0, t._)`${q($)} ${M} ${q(C)}`;
    }
    function q(M) {
      return M instanceof t.Name ? M : (0, t._)`(${M})`;
    }
  })(Pn)), Pn;
}
var X = {}, fr;
function ee() {
  if (fr) return X;
  fr = 1, Object.defineProperty(X, "__esModule", { value: !0 }), X.checkStrictMode = X.getErrorPath = X.Type = X.useFunc = X.setEvaluated = X.evaluatedPropsToName = X.mergeEvaluated = X.eachItem = X.unescapeJsonPointer = X.escapeJsonPointer = X.escapeFragment = X.unescapeFragment = X.schemaRefOrVal = X.schemaHasRulesButRef = X.schemaHasRules = X.checkUnknownRules = X.alwaysValidSchema = X.toHash = void 0;
  const e = /* @__PURE__ */ Y(), t = /* @__PURE__ */ pn();
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
  function i(a, l) {
    if (typeof a == "boolean")
      return !a;
    for (const f in a)
      if (f !== "$ref" && l.all[f])
        return !0;
    return !1;
  }
  X.schemaHasRulesButRef = i;
  function s({ topSchemaRef: a, schemaPath: l }, f, E, x) {
    if (!x) {
      if (typeof f == "number" || typeof f == "boolean")
        return f;
      if (typeof f == "string")
        return (0, e._)`${f}`;
    }
    return (0, e._)`${a}${l}${(0, e.getProperty)(E)}`;
  }
  X.schemaRefOrVal = s;
  function d(a) {
    return w(decodeURIComponent(a));
  }
  X.unescapeFragment = d;
  function g(a) {
    return encodeURIComponent(m(a));
  }
  X.escapeFragment = g;
  function m(a) {
    return typeof a == "number" ? `${a}` : a.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  X.escapeJsonPointer = m;
  function w(a) {
    return a.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  X.unescapeJsonPointer = w;
  function b(a, l) {
    if (Array.isArray(a))
      for (const f of a)
        l(f);
    else
      l(a);
  }
  X.eachItem = b;
  function y({ mergeNames: a, mergeToName: l, mergeValues: f, resultToName: E }) {
    return (x, F, z, T) => {
      const D = z === void 0 ? F : z instanceof e.Name ? (F instanceof e.Name ? a(x, F, z) : l(x, F, z), z) : F instanceof e.Name ? (l(x, z, F), F) : f(F, z);
      return T === e.Name && !(D instanceof e.Name) ? E(x, D) : D;
    };
  }
  X.mergeEvaluated = {
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
  X.evaluatedPropsToName = _;
  function S(a, l, f) {
    Object.keys(f).forEach((E) => a.assign((0, e._)`${l}${(0, e.getProperty)(E)}`, !0));
  }
  X.setEvaluated = S;
  const p = {};
  function h(a, l) {
    return a.scopeValue("func", {
      ref: l,
      code: p[l.code] || (p[l.code] = new t._Code(l.code))
    });
  }
  X.useFunc = h;
  var u;
  (function(a) {
    a[a.Num = 0] = "Num", a[a.Str = 1] = "Str";
  })(u || (X.Type = u = {}));
  function v(a, l, f) {
    if (a instanceof e.Name) {
      const E = l === u.Num;
      return f ? E ? (0, e._)`"[" + ${a} + "]"` : (0, e._)`"['" + ${a} + "']"` : E ? (0, e._)`"/" + ${a}` : (0, e._)`"/" + ${a}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return f ? (0, e.getProperty)(a).toString() : "/" + m(a);
  }
  X.getErrorPath = v;
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
function yn() {
  return hr || (hr = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
    const t = /* @__PURE__ */ Y(), n = /* @__PURE__ */ ee(), o = /* @__PURE__ */ ke();
    e.keywordError = {
      message: ({ keyword: p }) => (0, t.str)`must pass "${p}" keyword validation`
    }, e.keyword$DataError = {
      message: ({ keyword: p, schemaType: h }) => h ? (0, t.str)`"${p}" keyword must be ${h} ($data)` : (0, t.str)`"${p}" keyword is invalid ($data)`
    };
    function c(p, h = e.keywordError, u, v) {
      const { it: k } = p, { gen: a, compositeRule: l, allErrors: f } = k, E = w(p, h, u);
      v ?? (l || f) ? d(a, E) : g(k, (0, t._)`[${E}]`);
    }
    e.reportError = c;
    function r(p, h = e.keywordError, u) {
      const { it: v } = p, { gen: k, compositeRule: a, allErrors: l } = v, f = w(p, h, u);
      d(k, f), a || l || g(v, o.default.vErrors);
    }
    e.reportExtraError = r;
    function i(p, h) {
      p.assign(o.default.errors, h), p.if((0, t._)`${o.default.vErrors} !== null`, () => p.if(h, () => p.assign((0, t._)`${o.default.vErrors}.length`, h), () => p.assign(o.default.vErrors, null)));
    }
    e.resetErrorsCount = i;
    function s({ gen: p, keyword: h, schemaValue: u, data: v, errsCount: k, it: a }) {
      if (k === void 0)
        throw new Error("ajv implementation error");
      const l = p.name("err");
      p.forRange("i", k, o.default.errors, (f) => {
        p.const(l, (0, t._)`${o.default.vErrors}[${f}]`), p.if((0, t._)`${l}.instancePath === undefined`, () => p.assign((0, t._)`${l}.instancePath`, (0, t.strConcat)(o.default.instancePath, a.errorPath))), p.assign((0, t._)`${l}.schemaPath`, (0, t.str)`${a.errSchemaPath}/${h}`), a.opts.verbose && (p.assign((0, t._)`${l}.schema`, u), p.assign((0, t._)`${l}.data`, v));
      });
    }
    e.extendErrors = s;
    function d(p, h) {
      const u = p.const("err", h);
      p.if((0, t._)`${o.default.vErrors} === null`, () => p.assign(o.default.vErrors, (0, t._)`[${u}]`), (0, t._)`${o.default.vErrors}.push(${u})`), p.code((0, t._)`${o.default.errors}++`);
    }
    function g(p, h) {
      const { gen: u, validateName: v, schemaEnv: k } = p;
      k.$async ? u.throw((0, t._)`new ${p.ValidationError}(${h})`) : (u.assign((0, t._)`${v}.errors`, h), u.return(!1));
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
    function w(p, h, u) {
      const { createErrors: v } = p.it;
      return v === !1 ? (0, t._)`{}` : b(p, h, u);
    }
    function b(p, h, u = {}) {
      const { gen: v, it: k } = p, a = [
        y(k, u),
        _(p, u)
      ];
      return S(p, h, a), v.object(...a);
    }
    function y({ errorPath: p }, { instancePath: h }) {
      const u = h ? (0, t.str)`${p}${(0, n.getErrorPath)(h, n.Type.Str)}` : p;
      return [o.default.instancePath, (0, t.strConcat)(o.default.instancePath, u)];
    }
    function _({ keyword: p, it: { errSchemaPath: h } }, { schemaPath: u, parentSchema: v }) {
      let k = v ? h : (0, t.str)`${h}/${p}`;
      return u && (k = (0, t.str)`${k}${(0, n.getErrorPath)(u, n.Type.Str)}`), [m.schemaPath, k];
    }
    function S(p, { params: h, message: u }, v) {
      const { keyword: k, data: a, schemaValue: l, it: f } = p, { opts: E, propertyName: x, topSchemaRef: F, schemaPath: z } = f;
      v.push([m.keyword, k], [m.params, typeof h == "function" ? h(p) : h || (0, t._)`{}`]), E.messages && v.push([m.message, typeof u == "function" ? u(p) : u]), E.verbose && v.push([m.schema, l], [m.parentSchema, (0, t._)`${F}${z}`], [o.default.data, a]), x && v.push([m.propertyName, x]);
    }
  })(xn)), xn;
}
var mr;
function Ai() {
  if (mr) return Te;
  mr = 1, Object.defineProperty(Te, "__esModule", { value: !0 }), Te.boolOrEmptySchema = Te.topBoolOrEmptySchema = void 0;
  const e = /* @__PURE__ */ yn(), t = /* @__PURE__ */ Y(), n = /* @__PURE__ */ ke(), o = {
    message: "boolean schema is false"
  };
  function c(s) {
    const { gen: d, schema: g, validateName: m } = s;
    g === !1 ? i(s, !1) : typeof g == "object" && g.$async === !0 ? d.return(n.default.data) : (d.assign((0, t._)`${m}.errors`, null), d.return(!0));
  }
  Te.topBoolOrEmptySchema = c;
  function r(s, d) {
    const { gen: g, schema: m } = s;
    m === !1 ? (g.var(d, !1), i(s)) : g.var(d, !0);
  }
  Te.boolOrEmptySchema = r;
  function i(s, d) {
    const { gen: g, data: m } = s, w = {
      gen: g,
      keyword: "false schema",
      data: m,
      schema: !1,
      schemaCode: !1,
      schemaValue: !1,
      params: {},
      it: s
    };
    (0, e.reportError)(w, o, void 0, d);
  }
  return Te;
}
var ue = {}, ze = {}, gr;
function Jo() {
  if (gr) return ze;
  gr = 1, Object.defineProperty(ze, "__esModule", { value: !0 }), ze.getRules = ze.isJSONType = void 0;
  const e = ["string", "number", "integer", "boolean", "null", "object", "array"], t = new Set(e);
  function n(c) {
    return typeof c == "string" && t.has(c);
  }
  ze.isJSONType = n;
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
  return ze.getRules = o, ze;
}
var Ae = {}, yr;
function Wo() {
  if (yr) return Ae;
  yr = 1, Object.defineProperty(Ae, "__esModule", { value: !0 }), Ae.shouldUseRule = Ae.shouldUseGroup = Ae.schemaHasRulesForType = void 0;
  function e({ schema: o, self: c }, r) {
    const i = c.RULES.types[r];
    return i && i !== !0 && t(o, i);
  }
  Ae.schemaHasRulesForType = e;
  function t(o, c) {
    return c.rules.some((r) => n(o, r));
  }
  Ae.shouldUseGroup = t;
  function n(o, c) {
    var r;
    return o[c.keyword] !== void 0 || ((r = c.definition.implements) === null || r === void 0 ? void 0 : r.some((i) => o[i] !== void 0));
  }
  return Ae.shouldUseRule = n, Ae;
}
var vr;
function hn() {
  if (vr) return ue;
  vr = 1, Object.defineProperty(ue, "__esModule", { value: !0 }), ue.reportTypeError = ue.checkDataTypes = ue.checkDataType = ue.coerceAndCheckDataType = ue.getJSONTypes = ue.getSchemaTypes = ue.DataType = void 0;
  const e = /* @__PURE__ */ Jo(), t = /* @__PURE__ */ Wo(), n = /* @__PURE__ */ yn(), o = /* @__PURE__ */ Y(), c = /* @__PURE__ */ ee();
  var r;
  (function(u) {
    u[u.Correct = 0] = "Correct", u[u.Wrong = 1] = "Wrong";
  })(r || (ue.DataType = r = {}));
  function i(u) {
    const v = s(u.type);
    if (v.includes("null")) {
      if (u.nullable === !1)
        throw new Error("type: null contradicts nullable: false");
    } else {
      if (!v.length && u.nullable !== void 0)
        throw new Error('"nullable" cannot be used without "type"');
      u.nullable === !0 && v.push("null");
    }
    return v;
  }
  ue.getSchemaTypes = i;
  function s(u) {
    const v = Array.isArray(u) ? u : u ? [u] : [];
    if (v.every(e.isJSONType))
      return v;
    throw new Error("type must be JSONType or JSONType[]: " + v.join(","));
  }
  ue.getJSONTypes = s;
  function d(u, v) {
    const { gen: k, data: a, opts: l } = u, f = m(v, l.coerceTypes), E = v.length > 0 && !(f.length === 0 && v.length === 1 && (0, t.schemaHasRulesForType)(u, v[0]));
    if (E) {
      const x = _(v, a, l.strictNumbers, r.Wrong);
      k.if(x, () => {
        f.length ? w(u, v, f) : p(u);
      });
    }
    return E;
  }
  ue.coerceAndCheckDataType = d;
  const g = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
  function m(u, v) {
    return v ? u.filter((k) => g.has(k) || v === "array" && k === "array") : [];
  }
  function w(u, v, k) {
    const { gen: a, data: l, opts: f } = u, E = a.let("dataType", (0, o._)`typeof ${l}`), x = a.let("coerced", (0, o._)`undefined`);
    f.coerceTypes === "array" && a.if((0, o._)`${E} == 'object' && Array.isArray(${l}) && ${l}.length == 1`, () => a.assign(l, (0, o._)`${l}[0]`).assign(E, (0, o._)`typeof ${l}`).if(_(v, l, f.strictNumbers), () => a.assign(x, l))), a.if((0, o._)`${x} !== undefined`);
    for (const z of k)
      (g.has(z) || z === "array" && f.coerceTypes === "array") && F(z);
    a.else(), p(u), a.endIf(), a.if((0, o._)`${x} !== undefined`, () => {
      a.assign(l, x), b(u, x);
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
  function b({ gen: u, parentData: v, parentDataProperty: k }, a) {
    u.if((0, o._)`${v} !== undefined`, () => u.assign((0, o._)`${v}[${k}]`, a));
  }
  function y(u, v, k, a = r.Correct) {
    const l = a === r.Correct ? o.operators.EQ : o.operators.NEQ;
    let f;
    switch (u) {
      case "null":
        return (0, o._)`${v} ${l} null`;
      case "array":
        f = (0, o._)`Array.isArray(${v})`;
        break;
      case "object":
        f = (0, o._)`${v} && typeof ${v} == "object" && !Array.isArray(${v})`;
        break;
      case "integer":
        f = E((0, o._)`!(${v} % 1) && !isNaN(${v})`);
        break;
      case "number":
        f = E();
        break;
      default:
        return (0, o._)`typeof ${v} ${l} ${u}`;
    }
    return a === r.Correct ? f : (0, o.not)(f);
    function E(x = o.nil) {
      return (0, o.and)((0, o._)`typeof ${v} == "number"`, x, k ? (0, o._)`isFinite(${v})` : o.nil);
    }
  }
  ue.checkDataType = y;
  function _(u, v, k, a) {
    if (u.length === 1)
      return y(u[0], v, k, a);
    let l;
    const f = (0, c.toHash)(u);
    if (f.array && f.object) {
      const E = (0, o._)`typeof ${v} != "object"`;
      l = f.null ? E : (0, o._)`!${v} || ${E}`, delete f.null, delete f.array, delete f.object;
    } else
      l = o.nil;
    f.number && delete f.integer;
    for (const E in f)
      l = (0, o.and)(l, y(E, v, k, a));
    return l;
  }
  ue.checkDataTypes = _;
  const S = {
    message: ({ schema: u }) => `must be ${u}`,
    params: ({ schema: u, schemaValue: v }) => typeof u == "string" ? (0, o._)`{type: ${u}}` : (0, o._)`{type: ${v}}`
  };
  function p(u) {
    const v = h(u);
    (0, n.reportError)(v, S);
  }
  ue.reportTypeError = p;
  function h(u) {
    const { gen: v, data: k, schema: a } = u, l = (0, c.schemaRefOrVal)(u, a, "type");
    return {
      gen: v,
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
function Fi() {
  if ($r) return nt;
  $r = 1, Object.defineProperty(nt, "__esModule", { value: !0 }), nt.assignDefaults = void 0;
  const e = /* @__PURE__ */ Y(), t = /* @__PURE__ */ ee();
  function n(c, r) {
    const { properties: i, items: s } = c.schema;
    if (r === "object" && i)
      for (const d in i)
        o(c, d, i[d].default);
    else r === "array" && Array.isArray(s) && s.forEach((d, g) => o(c, g, d.default));
  }
  nt.assignDefaults = n;
  function o(c, r, i) {
    const { gen: s, compositeRule: d, data: g, opts: m } = c;
    if (i === void 0)
      return;
    const w = (0, e._)`${g}${(0, e.getProperty)(r)}`;
    if (d) {
      (0, t.checkStrictMode)(c, `default is ignored for: ${w}`);
      return;
    }
    let b = (0, e._)`${w} === undefined`;
    m.useDefaults === "empty" && (b = (0, e._)`${b} || ${w} === null || ${w} === ""`), s.if(b, (0, e._)`${w} = ${(0, e.stringify)(i)}`);
  }
  return nt;
}
var we = {}, re = {}, br;
function Ee() {
  if (br) return re;
  br = 1, Object.defineProperty(re, "__esModule", { value: !0 }), re.validateUnion = re.validateArray = re.usePattern = re.callValidateCode = re.schemaProperties = re.allSchemaProperties = re.noPropertyInData = re.propertyInData = re.isOwnProperty = re.hasPropFunc = re.reportMissingProp = re.checkMissingProp = re.checkReportMissingProp = void 0;
  const e = /* @__PURE__ */ Y(), t = /* @__PURE__ */ ee(), n = /* @__PURE__ */ ke(), o = /* @__PURE__ */ ee();
  function c(u, v) {
    const { gen: k, data: a, it: l } = u;
    k.if(m(k, a, v, l.opts.ownProperties), () => {
      u.setParams({ missingProperty: (0, e._)`${v}` }, !0), u.error();
    });
  }
  re.checkReportMissingProp = c;
  function r({ gen: u, data: v, it: { opts: k } }, a, l) {
    return (0, e.or)(...a.map((f) => (0, e.and)(m(u, v, f, k.ownProperties), (0, e._)`${l} = ${f}`)));
  }
  re.checkMissingProp = r;
  function i(u, v) {
    u.setParams({ missingProperty: v }, !0), u.error();
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
  function d(u, v, k) {
    return (0, e._)`${s(u)}.call(${v}, ${k})`;
  }
  re.isOwnProperty = d;
  function g(u, v, k, a) {
    const l = (0, e._)`${v}${(0, e.getProperty)(k)} !== undefined`;
    return a ? (0, e._)`${l} && ${d(u, v, k)}` : l;
  }
  re.propertyInData = g;
  function m(u, v, k, a) {
    const l = (0, e._)`${v}${(0, e.getProperty)(k)} === undefined`;
    return a ? (0, e.or)(l, (0, e.not)(d(u, v, k))) : l;
  }
  re.noPropertyInData = m;
  function w(u) {
    return u ? Object.keys(u).filter((v) => v !== "__proto__") : [];
  }
  re.allSchemaProperties = w;
  function b(u, v) {
    return w(v).filter((k) => !(0, t.alwaysValidSchema)(u, v[k]));
  }
  re.schemaProperties = b;
  function y({ schemaCode: u, data: v, it: { gen: k, topSchemaRef: a, schemaPath: l, errorPath: f }, it: E }, x, F, z) {
    const T = z ? (0, e._)`${u}, ${v}, ${a}${l}` : v, D = [
      [n.default.instancePath, (0, e.strConcat)(n.default.instancePath, f)],
      [n.default.parentData, E.parentData],
      [n.default.parentDataProperty, E.parentDataProperty],
      [n.default.rootData, n.default.rootData]
    ];
    E.opts.dynamicRef && D.push([n.default.dynamicAnchors, n.default.dynamicAnchors]);
    const U = (0, e._)`${T}, ${k.object(...D)}`;
    return F !== e.nil ? (0, e._)`${x}.call(${F}, ${U})` : (0, e._)`${x}(${U})`;
  }
  re.callValidateCode = y;
  const _ = (0, e._)`new RegExp`;
  function S({ gen: u, it: { opts: v } }, k) {
    const a = v.unicodeRegExp ? "u" : "", { regExp: l } = v.code, f = l(k, a);
    return u.scopeValue("pattern", {
      key: f.toString(),
      ref: f,
      code: (0, e._)`${l.code === "new RegExp" ? _ : (0, o.useFunc)(u, l)}(${k}, ${a})`
    });
  }
  re.usePattern = S;
  function p(u) {
    const { gen: v, data: k, keyword: a, it: l } = u, f = v.name("valid");
    if (l.allErrors) {
      const x = v.let("valid", !0);
      return E(() => v.assign(x, !1)), x;
    }
    return v.var(f, !0), E(() => v.break()), f;
    function E(x) {
      const F = v.const("len", (0, e._)`${k}.length`);
      v.forRange("i", 0, F, (z) => {
        u.subschema({
          keyword: a,
          dataProp: z,
          dataPropType: t.Type.Num
        }, f), v.if((0, e.not)(f), x);
      });
    }
  }
  re.validateArray = p;
  function h(u) {
    const { gen: v, schema: k, keyword: a, it: l } = u;
    if (!Array.isArray(k))
      throw new Error("ajv implementation error");
    if (k.some((F) => (0, t.alwaysValidSchema)(l, F)) && !l.opts.unevaluated)
      return;
    const E = v.let("valid", !1), x = v.name("_valid");
    v.block(() => k.forEach((F, z) => {
      const T = u.subschema({
        keyword: a,
        schemaProp: z,
        compositeRule: !0
      }, x);
      v.assign(E, (0, e._)`${E} || ${x}`), u.mergeValidEvaluated(T, x) || v.if((0, e.not)(E));
    })), u.result(E, () => u.reset(), () => u.error(!0));
  }
  return re.validateUnion = h, re;
}
var wr;
function Ni() {
  if (wr) return we;
  wr = 1, Object.defineProperty(we, "__esModule", { value: !0 }), we.validateKeywordUsage = we.validSchemaType = we.funcKeywordCode = we.macroKeywordCode = void 0;
  const e = /* @__PURE__ */ Y(), t = /* @__PURE__ */ ke(), n = /* @__PURE__ */ Ee(), o = /* @__PURE__ */ yn();
  function c(b, y) {
    const { gen: _, keyword: S, schema: p, parentSchema: h, it: u } = b, v = y.macro.call(u.self, p, h, u), k = g(_, S, v);
    u.opts.validateSchema !== !1 && u.self.validateSchema(v, !0);
    const a = _.name("valid");
    b.subschema({
      schema: v,
      schemaPath: e.nil,
      errSchemaPath: `${u.errSchemaPath}/${S}`,
      topSchemaRef: k,
      compositeRule: !0
    }, a), b.pass(a, () => b.error(!0));
  }
  we.macroKeywordCode = c;
  function r(b, y) {
    var _;
    const { gen: S, keyword: p, schema: h, parentSchema: u, $data: v, it: k } = b;
    d(k, y);
    const a = !v && y.compile ? y.compile.call(k.self, h, u, k) : y.validate, l = g(S, p, a), f = S.let("valid");
    b.block$data(f, E), b.ok((_ = y.valid) !== null && _ !== void 0 ? _ : f);
    function E() {
      if (y.errors === !1)
        z(), y.modifying && i(b), T(() => b.error());
      else {
        const D = y.async ? x() : F();
        y.modifying && i(b), T(() => s(b, D));
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
    function z(D = y.async ? (0, e._)`await ` : e.nil) {
      const U = k.opts.passContext ? t.default.this : t.default.self, te = !("compile" in y && !v || y.schema === !1);
      S.assign(f, (0, e._)`${D}${(0, n.callValidateCode)(b, l, U, te)}`, y.modifying);
    }
    function T(D) {
      var U;
      S.if((0, e.not)((U = y.valid) !== null && U !== void 0 ? U : f), D);
    }
  }
  we.funcKeywordCode = r;
  function i(b) {
    const { gen: y, data: _, it: S } = b;
    y.if(S.parentData, () => y.assign(_, (0, e._)`${S.parentData}[${S.parentDataProperty}]`));
  }
  function s(b, y) {
    const { gen: _ } = b;
    _.if((0, e._)`Array.isArray(${y})`, () => {
      _.assign(t.default.vErrors, (0, e._)`${t.default.vErrors} === null ? ${y} : ${t.default.vErrors}.concat(${y})`).assign(t.default.errors, (0, e._)`${t.default.vErrors}.length`), (0, o.extendErrors)(b);
    }, () => b.error());
  }
  function d({ schemaEnv: b }, y) {
    if (y.async && !b.$async)
      throw new Error("async keyword in sync schema");
  }
  function g(b, y, _) {
    if (_ === void 0)
      throw new Error(`keyword "${y}" failed to compile`);
    return b.scopeValue("keyword", typeof _ == "function" ? { ref: _ } : { ref: _, code: (0, e.stringify)(_) });
  }
  function m(b, y, _ = !1) {
    return !y.length || y.some((S) => S === "array" ? Array.isArray(b) : S === "object" ? b && typeof b == "object" && !Array.isArray(b) : typeof b == S || _ && typeof b > "u");
  }
  we.validSchemaType = m;
  function w({ schema: b, opts: y, self: _, errSchemaPath: S }, p, h) {
    if (Array.isArray(p.keyword) ? !p.keyword.includes(h) : p.keyword !== h)
      throw new Error("ajv implementation error");
    const u = p.dependencies;
    if (u?.some((v) => !Object.prototype.hasOwnProperty.call(b, v)))
      throw new Error(`parent schema must have dependencies of ${h}: ${u.join(",")}`);
    if (p.validateSchema && !p.validateSchema(b[h])) {
      const k = `keyword "${h}" value is invalid at path "${S}": ` + _.errorsText(p.validateSchema.errors);
      if (y.validateSchema === "log")
        _.logger.error(k);
      else
        throw new Error(k);
    }
  }
  return we.validateKeywordUsage = w, we;
}
var Fe = {}, _r;
function Mi() {
  if (_r) return Fe;
  _r = 1, Object.defineProperty(Fe, "__esModule", { value: !0 }), Fe.extendSubschemaMode = Fe.extendSubschemaData = Fe.getSubschema = void 0;
  const e = /* @__PURE__ */ Y(), t = /* @__PURE__ */ ee();
  function n(r, { keyword: i, schemaProp: s, schema: d, schemaPath: g, errSchemaPath: m, topSchemaRef: w }) {
    if (i !== void 0 && d !== void 0)
      throw new Error('both "keyword" and "schema" passed, only one allowed');
    if (i !== void 0) {
      const b = r.schema[i];
      return s === void 0 ? {
        schema: b,
        schemaPath: (0, e._)`${r.schemaPath}${(0, e.getProperty)(i)}`,
        errSchemaPath: `${r.errSchemaPath}/${i}`
      } : {
        schema: b[s],
        schemaPath: (0, e._)`${r.schemaPath}${(0, e.getProperty)(i)}${(0, e.getProperty)(s)}`,
        errSchemaPath: `${r.errSchemaPath}/${i}/${(0, t.escapeFragment)(s)}`
      };
    }
    if (d !== void 0) {
      if (g === void 0 || m === void 0 || w === void 0)
        throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
      return {
        schema: d,
        schemaPath: g,
        topSchemaRef: w,
        errSchemaPath: m
      };
    }
    throw new Error('either "keyword" or "schema" must be passed');
  }
  Fe.getSubschema = n;
  function o(r, i, { dataProp: s, dataPropType: d, data: g, dataTypes: m, propertyName: w }) {
    if (g !== void 0 && s !== void 0)
      throw new Error('both "data" and "dataProp" passed, only one allowed');
    const { gen: b } = i;
    if (s !== void 0) {
      const { errorPath: _, dataPathArr: S, opts: p } = i, h = b.let("data", (0, e._)`${i.data}${(0, e.getProperty)(s)}`, !0);
      y(h), r.errorPath = (0, e.str)`${_}${(0, t.getErrorPath)(s, d, p.jsPropertySyntax)}`, r.parentDataProperty = (0, e._)`${s}`, r.dataPathArr = [...S, r.parentDataProperty];
    }
    if (g !== void 0) {
      const _ = g instanceof e.Name ? g : b.let("data", g, !0);
      y(_), w !== void 0 && (r.propertyName = w);
    }
    m && (r.dataTypes = m);
    function y(_) {
      r.data = _, r.dataLevel = i.dataLevel + 1, r.dataTypes = [], i.definedProperties = /* @__PURE__ */ new Set(), r.parentData = i.data, r.dataNames = [...i.dataNames, _];
    }
  }
  Fe.extendSubschemaData = o;
  function c(r, { jtdDiscriminator: i, jtdMetadata: s, compositeRule: d, createErrors: g, allErrors: m }) {
    d !== void 0 && (r.compositeRule = d), g !== void 0 && (r.createErrors = g), m !== void 0 && (r.allErrors = m), r.jtdDiscriminator = i, r.jtdMetadata = s;
  }
  return Fe.extendSubschemaMode = c, Fe;
}
var fe = {}, Fn, Sr;
function Yo() {
  return Sr || (Sr = 1, Fn = function e(t, n) {
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
  }), Fn;
}
var Nn = { exports: {} }, Cr;
function ji() {
  if (Cr) return Nn.exports;
  Cr = 1;
  var e = Nn.exports = function(o, c, r) {
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
  function t(o, c, r, i, s, d, g, m, w, b) {
    if (i && typeof i == "object" && !Array.isArray(i)) {
      c(i, s, d, g, m, w, b);
      for (var y in i) {
        var _ = i[y];
        if (Array.isArray(_)) {
          if (y in e.arrayKeywords)
            for (var S = 0; S < _.length; S++)
              t(o, c, r, _[S], s + "/" + y + "/" + S, d, s, y, i, S);
        } else if (y in e.propsKeywords) {
          if (_ && typeof _ == "object")
            for (var p in _)
              t(o, c, r, _[p], s + "/" + y + "/" + n(p), d, s, y, i, p);
        } else (y in e.keywords || o.allKeys && !(y in e.skipKeywords)) && t(o, c, r, _, s + "/" + y, d, s, y, i);
      }
      r(i, s, d, g, m, w, b);
    }
  }
  function n(o) {
    return o.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  return Nn.exports;
}
var kr;
function vn() {
  if (kr) return fe;
  kr = 1, Object.defineProperty(fe, "__esModule", { value: !0 }), fe.getSchemaRefs = fe.resolveUrl = fe.normalizeId = fe._getFullPath = fe.getFullPath = fe.inlineRef = void 0;
  const e = /* @__PURE__ */ ee(), t = Yo(), n = ji(), o = /* @__PURE__ */ new Set([
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
    return typeof S == "boolean" ? !0 : p === !0 ? !i(S) : p ? s(S) <= p : !1;
  }
  fe.inlineRef = c;
  const r = /* @__PURE__ */ new Set([
    "$ref",
    "$recursiveRef",
    "$recursiveAnchor",
    "$dynamicRef",
    "$dynamicAnchor"
  ]);
  function i(S) {
    for (const p in S) {
      if (r.has(p))
        return !0;
      const h = S[p];
      if (Array.isArray(h) && h.some(i) || typeof h == "object" && i(h))
        return !0;
    }
    return !1;
  }
  function s(S) {
    let p = 0;
    for (const h in S) {
      if (h === "$ref")
        return 1 / 0;
      if (p++, !o.has(h) && (typeof S[h] == "object" && (0, e.eachItem)(S[h], (u) => p += s(u)), p === 1 / 0))
        return 1 / 0;
    }
    return p;
  }
  function d(S, p = "", h) {
    h !== !1 && (p = w(p));
    const u = S.parse(p);
    return g(S, u);
  }
  fe.getFullPath = d;
  function g(S, p) {
    return S.serialize(p).split("#")[0] + "#";
  }
  fe._getFullPath = g;
  const m = /#\/?$/;
  function w(S) {
    return S ? S.replace(m, "") : "";
  }
  fe.normalizeId = w;
  function b(S, p, h) {
    return h = w(h), S.resolve(p, h);
  }
  fe.resolveUrl = b;
  const y = /^[a-z_][-a-z0-9._]*$/i;
  function _(S, p) {
    if (typeof S == "boolean")
      return {};
    const { schemaId: h, uriResolver: u } = this.opts, v = w(S[h] || p), k = { "": v }, a = d(u, v, !1), l = {}, f = /* @__PURE__ */ new Set();
    return n(S, { allKeys: !0 }, (F, z, T, D) => {
      if (D === void 0)
        return;
      const U = a + z;
      let te = k[D];
      typeof F[h] == "string" && (te = J.call(this, F[h])), se.call(this, F.$anchor), se.call(this, F.$dynamicAnchor), k[z] = te;
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
          if (!y.test(W))
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
function $n() {
  if (Er) return Re;
  Er = 1, Object.defineProperty(Re, "__esModule", { value: !0 }), Re.getData = Re.KeywordCxt = Re.validateFunctionCode = void 0;
  const e = /* @__PURE__ */ Ai(), t = /* @__PURE__ */ hn(), n = /* @__PURE__ */ Wo(), o = /* @__PURE__ */ hn(), c = /* @__PURE__ */ Fi(), r = /* @__PURE__ */ Ni(), i = /* @__PURE__ */ Mi(), s = /* @__PURE__ */ Y(), d = /* @__PURE__ */ ke(), g = /* @__PURE__ */ vn(), m = /* @__PURE__ */ ee(), w = /* @__PURE__ */ yn();
  function b(R) {
    if (a(R) && (f(R), k(R))) {
      p(R);
      return;
    }
    y(R, () => (0, e.topBoolOrEmptySchema)(R));
  }
  Re.validateFunctionCode = b;
  function y({ gen: R, validateName: j, schema: V, schemaEnv: L, opts: H }, Z) {
    H.code.es5 ? R.func(j, (0, s._)`${d.default.data}, ${d.default.valCxt}`, L.$async, () => {
      R.code((0, s._)`"use strict"; ${u(V, H)}`), S(R, H), R.code(Z);
    }) : R.func(j, (0, s._)`${d.default.data}, ${_(H)}`, L.$async, () => R.code(u(V, H)).code(Z));
  }
  function _(R) {
    return (0, s._)`{${d.default.instancePath}="", ${d.default.parentData}, ${d.default.parentDataProperty}, ${d.default.rootData}=${d.default.data}${R.dynamicRef ? (0, s._)`, ${d.default.dynamicAnchors}={}` : s.nil}}={}`;
  }
  function S(R, j) {
    R.if(d.default.valCxt, () => {
      R.var(d.default.instancePath, (0, s._)`${d.default.valCxt}.${d.default.instancePath}`), R.var(d.default.parentData, (0, s._)`${d.default.valCxt}.${d.default.parentData}`), R.var(d.default.parentDataProperty, (0, s._)`${d.default.valCxt}.${d.default.parentDataProperty}`), R.var(d.default.rootData, (0, s._)`${d.default.valCxt}.${d.default.rootData}`), j.dynamicRef && R.var(d.default.dynamicAnchors, (0, s._)`${d.default.valCxt}.${d.default.dynamicAnchors}`);
    }, () => {
      R.var(d.default.instancePath, (0, s._)`""`), R.var(d.default.parentData, (0, s._)`undefined`), R.var(d.default.parentDataProperty, (0, s._)`undefined`), R.var(d.default.rootData, d.default.data), j.dynamicRef && R.var(d.default.dynamicAnchors, (0, s._)`{}`);
    });
  }
  function p(R) {
    const { schema: j, opts: V, gen: L } = R;
    y(R, () => {
      V.$comment && j.$comment && D(R), F(R), L.let(d.default.vErrors, null), L.let(d.default.errors, 0), V.unevaluated && h(R), E(R), U(R);
    });
  }
  function h(R) {
    const { gen: j, validateName: V } = R;
    R.evaluated = j.const("evaluated", (0, s._)`${V}.evaluated`), j.if((0, s._)`${R.evaluated}.dynamicProps`, () => j.assign((0, s._)`${R.evaluated}.props`, (0, s._)`undefined`)), j.if((0, s._)`${R.evaluated}.dynamicItems`, () => j.assign((0, s._)`${R.evaluated}.items`, (0, s._)`undefined`));
  }
  function u(R, j) {
    const V = typeof R == "object" && R[j.schemaId];
    return V && (j.code.source || j.code.process) ? (0, s._)`/*# sourceURL=${V} */` : s.nil;
  }
  function v(R, j) {
    if (a(R) && (f(R), k(R))) {
      l(R, j);
      return;
    }
    (0, e.boolOrEmptySchema)(R, j);
  }
  function k({ schema: R, self: j }) {
    if (typeof R == "boolean")
      return !R;
    for (const V in R)
      if (j.RULES.all[V])
        return !0;
    return !1;
  }
  function a(R) {
    return typeof R.schema != "boolean";
  }
  function l(R, j) {
    const { schema: V, gen: L, opts: H } = R;
    H.$comment && V.$comment && D(R), z(R), T(R);
    const Z = L.const("_errs", d.default.errors);
    E(R, Z), L.var(j, (0, s._)`${Z} === ${d.default.errors}`);
  }
  function f(R) {
    (0, m.checkUnknownRules)(R), x(R);
  }
  function E(R, j) {
    if (R.opts.jtd)
      return J(R, [], !1, j);
    const V = (0, t.getSchemaTypes)(R.schema), L = (0, t.coerceAndCheckDataType)(R, V);
    J(R, V, !L, j);
  }
  function x(R) {
    const { schema: j, errSchemaPath: V, opts: L, self: H } = R;
    j.$ref && L.ignoreKeywordsWithRef && (0, m.schemaHasRulesButRef)(j, H.RULES) && H.logger.warn(`$ref: keywords ignored in schema at path "${V}"`);
  }
  function F(R) {
    const { schema: j, opts: V } = R;
    j.default !== void 0 && V.useDefaults && V.strictSchema && (0, m.checkStrictMode)(R, "default is ignored in the schema root");
  }
  function z(R) {
    const j = R.schema[R.opts.schemaId];
    j && (R.baseId = (0, g.resolveUrl)(R.opts.uriResolver, R.baseId, j));
  }
  function T(R) {
    if (R.schema.$async && !R.schemaEnv.$async)
      throw new Error("async schema in sync schema");
  }
  function D({ gen: R, schemaEnv: j, schema: V, errSchemaPath: L, opts: H }) {
    const Z = V.$comment;
    if (H.$comment === !0)
      R.code((0, s._)`${d.default.self}.logger.log(${Z})`);
    else if (typeof H.$comment == "function") {
      const le = (0, s.str)`${L}/$comment`, be = R.scopeValue("root", { ref: j.root });
      R.code((0, s._)`${d.default.self}.opts.$comment(${Z}, ${le}, ${be}.schema)`);
    }
  }
  function U(R) {
    const { gen: j, schemaEnv: V, validateName: L, ValidationError: H, opts: Z } = R;
    V.$async ? j.if((0, s._)`${d.default.errors} === 0`, () => j.return(d.default.data), () => j.throw((0, s._)`new ${H}(${d.default.vErrors})`)) : (j.assign((0, s._)`${L}.errors`, d.default.vErrors), Z.unevaluated && te(R), j.return((0, s._)`${d.default.errors} === 0`));
  }
  function te({ gen: R, evaluated: j, props: V, items: L }) {
    V instanceof s.Name && R.assign((0, s._)`${j}.props`, V), L instanceof s.Name && R.assign((0, s._)`${j}.items`, L);
  }
  function J(R, j, V, L) {
    const { gen: H, schema: Z, data: le, allErrors: be, opts: pe, self: he } = R, { RULES: de } = he;
    if (Z.$ref && (pe.ignoreKeywordsWithRef || !(0, m.schemaHasRulesButRef)(Z, de))) {
      H.block(() => K(R, "$ref", de.all.$ref.definition));
      return;
    }
    pe.jtd || W(R, j), H.block(() => {
      for (const ye of de.rules)
        Le(ye);
      Le(de.post);
    });
    function Le(ye) {
      (0, n.shouldUseGroup)(Z, ye) && (ye.type ? (H.if((0, o.checkDataType)(ye.type, le, pe.strictNumbers)), se(R, ye), j.length === 1 && j[0] === ye.type && V && (H.else(), (0, o.reportTypeError)(R)), H.endIf()) : se(R, ye), be || H.if((0, s._)`${d.default.errors} === ${L || 0}`));
    }
  }
  function se(R, j) {
    const { gen: V, schema: L, opts: { useDefaults: H } } = R;
    H && (0, c.assignDefaults)(R, j.type), V.block(() => {
      for (const Z of j.rules)
        (0, n.shouldUseRule)(L, Z) && K(R, Z.keyword, Z.definition, j.type);
    });
  }
  function W(R, j) {
    R.schemaEnv.meta || !R.opts.strictTypes || (ae(R, j), R.opts.allowUnionTypes || B(R, j), A(R, R.dataTypes));
  }
  function ae(R, j) {
    if (j.length) {
      if (!R.dataTypes.length) {
        R.dataTypes = j;
        return;
      }
      j.forEach((V) => {
        M(R.dataTypes, V) || C(R, `type "${V}" not allowed by context "${R.dataTypes.join(",")}"`);
      }), $(R, j);
    }
  }
  function B(R, j) {
    j.length > 1 && !(j.length === 2 && j.includes("null")) && C(R, "use allowUnionTypes to allow union type keyword");
  }
  function A(R, j) {
    const V = R.self.RULES.all;
    for (const L in V) {
      const H = V[L];
      if (typeof H == "object" && (0, n.shouldUseRule)(R.schema, H)) {
        const { type: Z } = H.definition;
        Z.length && !Z.some((le) => q(j, le)) && C(R, `missing type "${Z.join(",")}" for keyword "${L}"`);
      }
    }
  }
  function q(R, j) {
    return R.includes(j) || j === "number" && R.includes("integer");
  }
  function M(R, j) {
    return R.includes(j) || j === "integer" && R.includes("number");
  }
  function $(R, j) {
    const V = [];
    for (const L of R.dataTypes)
      M(j, L) ? V.push(L) : j.includes("integer") && L === "number" && V.push("integer");
    R.dataTypes = V;
  }
  function C(R, j) {
    const V = R.schemaEnv.baseId + R.errSchemaPath;
    j += ` at "${V}" (strictTypes)`, (0, m.checkStrictMode)(R, j, R.opts.strictTypes);
  }
  class O {
    constructor(j, V, L) {
      if ((0, r.validateKeywordUsage)(j, V, L), this.gen = j.gen, this.allErrors = j.allErrors, this.keyword = L, this.data = j.data, this.schema = j.schema[L], this.$data = V.$data && j.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, m.schemaRefOrVal)(j, this.schema, L, this.$data), this.schemaType = V.schemaType, this.parentSchema = j.schema, this.params = {}, this.it = j, this.def = V, this.$data)
        this.schemaCode = j.gen.const("vSchema", Q(this.$data, j));
      else if (this.schemaCode = this.schemaValue, !(0, r.validSchemaType)(this.schema, V.schemaType, V.allowUndefined))
        throw new Error(`${L} value must be ${JSON.stringify(V.schemaType)}`);
      ("code" in V ? V.trackErrors : V.errors !== !1) && (this.errsCount = j.gen.const("_errs", d.default.errors));
    }
    result(j, V, L) {
      this.failResult((0, s.not)(j), V, L);
    }
    failResult(j, V, L) {
      this.gen.if(j), L ? L() : this.error(), V ? (this.gen.else(), V(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    pass(j, V) {
      this.failResult((0, s.not)(j), void 0, V);
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
      const { schemaCode: V } = this;
      this.fail((0, s._)`${V} !== undefined && (${(0, s.or)(this.invalid$data(), j)})`);
    }
    error(j, V, L) {
      if (V) {
        this.setParams(V), this._error(j, L), this.setParams({});
        return;
      }
      this._error(j, L);
    }
    _error(j, V) {
      (j ? w.reportExtraError : w.reportError)(this, this.def.error, V);
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
    setParams(j, V) {
      V ? Object.assign(this.params, j) : this.params = j;
    }
    block$data(j, V, L = s.nil) {
      this.gen.block(() => {
        this.check$data(j, L), V();
      });
    }
    check$data(j = s.nil, V = s.nil) {
      if (!this.$data)
        return;
      const { gen: L, schemaCode: H, schemaType: Z, def: le } = this;
      L.if((0, s.or)((0, s._)`${H} === undefined`, V)), j !== s.nil && L.assign(j, !0), (Z.length || le.validateSchema) && (L.elseIf(this.invalid$data()), this.$dataError(), j !== s.nil && L.assign(j, !1)), L.else();
    }
    invalid$data() {
      const { gen: j, schemaCode: V, schemaType: L, def: H, it: Z } = this;
      return (0, s.or)(le(), be());
      function le() {
        if (L.length) {
          if (!(V instanceof s.Name))
            throw new Error("ajv implementation error");
          const pe = Array.isArray(L) ? L : [L];
          return (0, s._)`${(0, o.checkDataTypes)(pe, V, Z.opts.strictNumbers, o.DataType.Wrong)}`;
        }
        return s.nil;
      }
      function be() {
        if (H.validateSchema) {
          const pe = j.scopeValue("validate$data", { ref: H.validateSchema });
          return (0, s._)`!${pe}(${V})`;
        }
        return s.nil;
      }
    }
    subschema(j, V) {
      const L = (0, i.getSubschema)(this.it, j);
      (0, i.extendSubschemaData)(L, this.it, j), (0, i.extendSubschemaMode)(L, j);
      const H = { ...this.it, ...L, items: void 0, props: void 0 };
      return v(H, V), H;
    }
    mergeEvaluated(j, V) {
      const { it: L, gen: H } = this;
      L.opts.unevaluated && (L.props !== !0 && j.props !== void 0 && (L.props = m.mergeEvaluated.props(H, j.props, L.props, V)), L.items !== !0 && j.items !== void 0 && (L.items = m.mergeEvaluated.items(H, j.items, L.items, V)));
    }
    mergeValidEvaluated(j, V) {
      const { it: L, gen: H } = this;
      if (L.opts.unevaluated && (L.props !== !0 || L.items !== !0))
        return H.if(V, () => this.mergeEvaluated(j, s.Name)), !0;
    }
  }
  Re.KeywordCxt = O;
  function K(R, j, V, L) {
    const H = new O(R, V, j);
    "code" in V ? V.code(H, L) : H.$data && V.validate ? (0, r.funcKeywordCode)(H, V) : "macro" in V ? (0, r.macroKeywordCode)(H, V) : (V.compile || V.validate) && (0, r.funcKeywordCode)(H, V);
  }
  const G = /^\/(?:[^~]|~0|~1)*$/, ne = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function Q(R, { dataLevel: j, dataNames: V, dataPathArr: L }) {
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
        if (de >= j)
          throw new Error(pe("property/index", de));
        return L[j - de];
      }
      if (de > j)
        throw new Error(pe("data", de));
      if (Z = V[j - de], !H)
        return Z;
    }
    let le = Z;
    const be = H.split("/");
    for (const he of be)
      he && (Z = (0, s._)`${Z}${(0, s.getProperty)((0, m.unescapeJsonPointer)(he))}`, le = (0, s._)`${le} && ${Z}`);
    return le;
    function pe(he, de) {
      return `Cannot access ${he} ${de} levels up, current level is ${j}`;
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
function bn() {
  if (Pr) return ht;
  Pr = 1, Object.defineProperty(ht, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ vn();
  class t extends Error {
    constructor(o, c, r, i) {
      super(i || `can't resolve reference ${r} from id ${c}`), this.missingRef = (0, e.resolveUrl)(o, c, r), this.missingSchema = (0, e.normalizeId)((0, e.getFullPath)(o, this.missingRef));
    }
  }
  return ht.default = t, ht;
}
var ge = {}, Rr;
function wn() {
  if (Rr) return ge;
  Rr = 1, Object.defineProperty(ge, "__esModule", { value: !0 }), ge.resolveSchema = ge.getCompilingSchema = ge.resolveRef = ge.compileSchema = ge.SchemaEnv = void 0;
  const e = /* @__PURE__ */ Y(), t = /* @__PURE__ */ Kn(), n = /* @__PURE__ */ ke(), o = /* @__PURE__ */ vn(), c = /* @__PURE__ */ ee(), r = /* @__PURE__ */ $n();
  class i {
    constructor(h) {
      var u;
      this.refs = {}, this.dynamicAnchors = {};
      let v;
      typeof h.schema == "object" && (v = h.schema), this.schema = h.schema, this.schemaId = h.schemaId, this.root = h.root || this, this.baseId = (u = h.baseId) !== null && u !== void 0 ? u : (0, o.normalizeId)(v?.[h.schemaId || "$id"]), this.schemaPath = h.schemaPath, this.localRefs = h.localRefs, this.meta = h.meta, this.$async = v?.$async, this.refs = {};
    }
  }
  ge.SchemaEnv = i;
  function s(p) {
    const h = m.call(this, p);
    if (h)
      return h;
    const u = (0, o.getFullPath)(this.opts.uriResolver, p.root.baseId), { es5: v, lines: k } = this.opts.code, { ownProperties: a } = this.opts, l = new e.CodeGen(this.scope, { es5: v, lines: k, ownProperties: a });
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
  ge.compileSchema = s;
  function d(p, h, u) {
    var v;
    u = (0, o.resolveUrl)(this.opts.uriResolver, h, u);
    const k = p.refs[u];
    if (k)
      return k;
    let a = b.call(this, p, u);
    if (a === void 0) {
      const l = (v = p.localRefs) === null || v === void 0 ? void 0 : v[u], { schemaId: f } = this.opts;
      l && (a = new i({ schema: l, schemaId: f, root: p, baseId: h }));
    }
    if (a !== void 0)
      return p.refs[u] = g.call(this, a);
  }
  ge.resolveRef = d;
  function g(p) {
    return (0, o.inlineRef)(p.schema, this.opts.inlineRefs) ? p.schema : p.validate ? p : s.call(this, p);
  }
  function m(p) {
    for (const h of this._compilations)
      if (w(h, p))
        return h;
  }
  ge.getCompilingSchema = m;
  function w(p, h) {
    return p.schema === h.schema && p.root === h.root && p.baseId === h.baseId;
  }
  function b(p, h) {
    let u;
    for (; typeof (u = this.refs[h]) == "string"; )
      h = u;
    return u || this.schemas[h] || y.call(this, p, h);
  }
  function y(p, h) {
    const u = this.opts.uriResolver.parse(h), v = (0, o._getFullPath)(this.opts.uriResolver, u);
    let k = (0, o.getFullPath)(this.opts.uriResolver, p.baseId, void 0);
    if (Object.keys(p.schema).length > 0 && v === k)
      return S.call(this, u, p);
    const a = (0, o.normalizeId)(v), l = this.refs[a] || this.schemas[a];
    if (typeof l == "string") {
      const f = y.call(this, p, l);
      return typeof f?.schema != "object" ? void 0 : S.call(this, u, f);
    }
    if (typeof l?.schema == "object") {
      if (l.validate || s.call(this, l), a === (0, o.normalizeId)(h)) {
        const { schema: f } = l, { schemaId: E } = this.opts, x = f[E];
        return x && (k = (0, o.resolveUrl)(this.opts.uriResolver, k, x)), new i({ schema: f, schemaId: E, root: p, baseId: k });
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
  function S(p, { baseId: h, schema: u, root: v }) {
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
      !_.has(f) && x && (h = (0, o.resolveUrl)(this.opts.uriResolver, h, x));
    }
    let a;
    if (typeof u != "boolean" && u.$ref && !(0, c.schemaHasRulesButRef)(u, this.RULES)) {
      const f = (0, o.resolveUrl)(this.opts.uriResolver, h, u.$ref);
      a = y.call(this, v, f);
    }
    const { schemaId: l } = this.opts;
    if (a = a || new i({ schema: u, schemaId: l, root: v, baseId: h }), a.schema !== a.root.schema)
      return a;
  }
  return ge;
}
const Oi = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", Ti = "Meta-schema for $data reference (JSON AnySchema extension proposal)", zi = "object", Ii = ["$data"], Di = { $data: { type: "string", anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] } }, qi = !1, Vi = {
  $id: Oi,
  description: Ti,
  type: zi,
  required: Ii,
  properties: Di,
  additionalProperties: qi
};
var mt = {}, rt = { exports: {} }, Mn, Ar;
function Xo() {
  if (Ar) return Mn;
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
  const i = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
  function s(a) {
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
          T = s;
        } else {
          x.push(U);
          continue;
        }
    }
    return x.length && (T === s ? f.zone = x.join("") : z ? E.push(x.join("")) : E.push(r(x))), f.address = E.join(""), f;
  }
  function m(a) {
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
  function b(a) {
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
  const y = { "@": "%40", "/": "%2F", "?": "%3F", "#": "%23", ":": "%3A" }, _ = /[@/?#:]/g, S = /[@/?#]/g;
  function p(a, l) {
    const f = l ? S : _;
    return f.lastIndex = 0, a.replace(f, (E) => y[E]);
  }
  function h(a, l = !1) {
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
  function v(a) {
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
        const E = m(f);
        E.isIPV6 === !0 ? f = `[${E.escapedHost}]` : f = p(f, !1);
      }
      l.push(f);
    }
    return (typeof a.port == "number" || typeof a.port == "string") && (l.push(":"), l.push(String(a.port))), l.length ? l.join("") : void 0;
  }
  return Mn = {
    nonSimpleDomain: i,
    recomposeAuthority: k,
    reescapeHostDelimiters: p,
    normalizePercentEncoding: h,
    normalizePathEncoding: u,
    escapePreservingEscapes: v,
    removeDotSegments: b,
    isIPv4: t,
    isUUID: e,
    normalizeIPv6: m,
    stringArrayToHexStripped: r
  }, Mn;
}
var jn, Fr;
function Bi() {
  if (Fr) return jn;
  Fr = 1;
  const { isUUID: e } = Xo(), t = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu, n = (
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
  function m(a, l) {
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
  function b(a) {
    const l = a;
    return l.nss = (a.uuid || "").toLowerCase(), l;
  }
  const y = (
    /** @type {SchemeHandler} */
    {
      scheme: "http",
      domainHost: !0,
      parse: r,
      serialize: i
    }
  ), _ = (
    /** @type {SchemeHandler} */
    {
      scheme: "https",
      domainHost: y.domainHost,
      parse: r,
      serialize: i
    }
  ), S = (
    /** @type {SchemeHandler} */
    {
      scheme: "ws",
      domainHost: !0,
      parse: s,
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
  ), v = (
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
          serialize: m,
          skipNormalize: !0
        }
      ),
      "urn:uuid": (
        /** @type {SchemeHandler} */
        {
          scheme: "urn:uuid",
          parse: w,
          serialize: b,
          skipNormalize: !0
        }
      )
    }
  );
  Object.setPrototypeOf(v, null);
  function k(a) {
    return a && (v[
      /** @type {SchemeName} */
      a
    ] || v[
      /** @type {SchemeName} */
      a.toLowerCase()
    ]) || void 0;
  }
  return jn = {
    wsIsSecure: c,
    SCHEMES: v,
    isValidSchemeName: o,
    getSchemeHandler: k
  }, jn;
}
var Nr;
function Li() {
  if (Nr) return rt.exports;
  Nr = 1;
  const { normalizeIPv6: e, removeDotSegments: t, recomposeAuthority: n, normalizePercentEncoding: o, normalizePathEncoding: c, escapePreservingEscapes: r, reescapeHostDelimiters: i, isIPv4: s, nonSimpleDomain: d } = Xo(), { SCHEMES: g, getSchemeHandler: m } = Bi();
  function w(x, F) {
    return typeof x == "string" ? x = /** @type {T} */
    a(x, F) : typeof x == "object" && (x = /** @type {T} */
    k(S(x, F), F)), x;
  }
  function b(x, F, z) {
    const T = z ? Object.assign({ scheme: "null" }, z) : { scheme: "null" }, D = y(k(x, T), k(F, T), T, !0);
    return T.skipEscape = !0, S(D, T);
  }
  function y(x, F, z, T) {
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
    }, T = Object.assign({}, F), D = [], U = m(T.scheme || z.scheme);
    U && U.serialize && U.serialize(z, T), z.path !== void 0 && (T.skipEscape ? z.path = o(z.path) : (z.path = r(z.path), z.scheme !== void 0 && (z.path = z.path.split("%3A").join(":")))), T.reference !== "suffix" && z.scheme && D.push(z.scheme, ":");
    const te = n(z);
    if (te !== void 0 && (T.reference !== "suffix" && D.push("//"), D.push(te), z.path && z.path[0] !== "/" && D.push("/")), z.path !== void 0) {
      let J = z.path;
      !T.absolutePath && (!U || !U.absolutePath) && (J = t(J)), te === void 0 && J[0] === "/" && J[1] === "/" && (J = "/%2F" + J.slice(2)), D.push(J);
    }
    return z.query !== void 0 && D.push("?", z.query), z.fragment !== void 0 && D.push("#", z.fragment), D.join("");
  }
  const p = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u, h = /^(?:[^#/:?]+:)?\/\/([^/?#]*)/;
  function u(x, F) {
    if (F[2] !== void 0 && x.path && x.path[0] !== "/")
      return 'URI path must start with "/" when authority is present.';
    if (typeof x.port == "number" && (x.port < 0 || x.port > 65535))
      return "URI port is malformed.";
  }
  function v(x, F) {
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
    const te = x.match(h);
    te !== null && te[1].indexOf("\\") !== -1 && (T.error = "URI authority must not contain a literal backslash.", D = !0);
    const J = x.match(p);
    if (J) {
      T.scheme = J[1], T.userinfo = J[3], T.host = J[4], T.port = parseInt(J[5], 10), T.path = J[6] || "", T.query = J[7], T.fragment = J[8], isNaN(T.port) && (T.port = J[5]);
      const se = u(T, J);
      if (se !== void 0 && (T.error = T.error || se, D = !0), T.host)
        if (s(T.host) === !1) {
          const B = e(T.host);
          T.host = B.host.toLowerCase(), U = B.isIPV6;
        } else
          U = !0;
      T.scheme === void 0 && T.userinfo === void 0 && T.host === void 0 && T.port === void 0 && T.query === void 0 && !T.path ? T.reference = "same-document" : T.scheme === void 0 ? T.reference = "relative" : T.fragment === void 0 ? T.reference = "absolute" : T.reference = "uri", z.reference && z.reference !== "suffix" && z.reference !== T.reference && (T.error = T.error || "URI is not a " + z.reference + " reference.");
      const W = m(z.scheme || T.scheme);
      if (!z.unicodeSupport && (!W || !W.unicodeSupport) && T.host && (z.domainHost || W && W.domainHost) && U === !1 && d(T.host))
        try {
          T.host = new URL("http://" + T.host).hostname;
        } catch (ae) {
          T.error = T.error || "Host's domain name can not be converted to ASCII: " + ae;
        }
      if ((!W || W && !W.skipNormalize) && (x.indexOf("%") !== -1 && (T.scheme !== void 0 && (T.scheme = unescape(T.scheme)), T.host !== void 0 && (T.host = i(unescape(T.host), U))), T.path && (T.path = c(T.path)), T.fragment))
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
    return v(x, F).parsed;
  }
  function a(x, F) {
    return l(x, F).normalized;
  }
  function l(x, F) {
    const { parsed: z, malformedAuthorityOrPort: T } = v(x, F);
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
    resolve: b,
    resolveComponent: y,
    equal: _,
    serialize: S,
    parse: k
  };
  return rt.exports = E, rt.exports.default = E, rt.exports.fastUri = E, rt.exports;
}
var Mr;
function Ui() {
  if (Mr) return mt;
  Mr = 1, Object.defineProperty(mt, "__esModule", { value: !0 });
  const e = Li();
  return e.code = 'require("ajv/dist/runtime/uri").default', mt.default = e, mt;
}
var jr;
function Ki() {
  return jr || (jr = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = void 0;
    var t = /* @__PURE__ */ $n();
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
    const o = /* @__PURE__ */ Kn(), c = /* @__PURE__ */ bn(), r = /* @__PURE__ */ Jo(), i = /* @__PURE__ */ wn(), s = /* @__PURE__ */ Y(), d = /* @__PURE__ */ vn(), g = /* @__PURE__ */ hn(), m = /* @__PURE__ */ ee(), w = Vi, b = /* @__PURE__ */ Ui(), y = (B, A) => new RegExp(B, A);
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
    }, h = {
      ignoreKeywordsWithRef: "",
      jsPropertySyntax: "",
      unicode: '"minLength"/"maxLength" account for unicode characters by default.'
    }, u = 200;
    function v(B) {
      var A, q, M, $, C, O, K, G, ne, Q, R, j, V, L, H, Z, le, be, pe, he, de, Le, ye, Sn, Cn;
      const et = B.strict, kn = (A = B.code) === null || A === void 0 ? void 0 : A.optimize, ir = kn === !0 || kn === void 0 ? 1 : kn || 0, sr = (M = (q = B.code) === null || q === void 0 ? void 0 : q.regExp) !== null && M !== void 0 ? M : y, mi = ($ = B.uriResolver) !== null && $ !== void 0 ? $ : b.default;
      return {
        strictSchema: (O = (C = B.strictSchema) !== null && C !== void 0 ? C : et) !== null && O !== void 0 ? O : !0,
        strictNumbers: (G = (K = B.strictNumbers) !== null && K !== void 0 ? K : et) !== null && G !== void 0 ? G : !0,
        strictTypes: (Q = (ne = B.strictTypes) !== null && ne !== void 0 ? ne : et) !== null && Q !== void 0 ? Q : "log",
        strictTuples: (j = (R = B.strictTuples) !== null && R !== void 0 ? R : et) !== null && j !== void 0 ? j : "log",
        strictRequired: (L = (V = B.strictRequired) !== null && V !== void 0 ? V : et) !== null && L !== void 0 ? L : !1,
        code: B.code ? { ...B.code, optimize: ir, regExp: sr } : { optimize: ir, regExp: sr },
        loopRequired: (H = B.loopRequired) !== null && H !== void 0 ? H : u,
        loopEnum: (Z = B.loopEnum) !== null && Z !== void 0 ? Z : u,
        meta: (le = B.meta) !== null && le !== void 0 ? le : !0,
        messages: (be = B.messages) !== null && be !== void 0 ? be : !0,
        inlineRefs: (pe = B.inlineRefs) !== null && pe !== void 0 ? pe : !0,
        schemaId: (he = B.schemaId) !== null && he !== void 0 ? he : "$id",
        addUsedSchema: (de = B.addUsedSchema) !== null && de !== void 0 ? de : !0,
        validateSchema: (Le = B.validateSchema) !== null && Le !== void 0 ? Le : !0,
        validateFormats: (ye = B.validateFormats) !== null && ye !== void 0 ? ye : !0,
        unicodeRegExp: (Sn = B.unicodeRegExp) !== null && Sn !== void 0 ? Sn : !0,
        int32range: (Cn = B.int32range) !== null && Cn !== void 0 ? Cn : !0,
        uriResolver: mi
      };
    }
    class k {
      constructor(A = {}) {
        this.schemas = {}, this.refs = {}, this.formats = /* @__PURE__ */ Object.create(null), this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), A = this.opts = { ...A, ...v(A) };
        const { es5: q, lines: M } = this.opts.code;
        this.scope = new s.ValueScope({ scope: {}, prefixes: S, es5: q, lines: M }), this.logger = T(A.logger);
        const $ = A.validateFormats;
        A.validateFormats = !1, this.RULES = (0, r.getRules)(), a.call(this, p, A, "NOT SUPPORTED"), a.call(this, h, A, "DEPRECATED", "warn"), this._metaOpts = F.call(this), A.formats && E.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), A.keywords && x.call(this, A.keywords), typeof A.meta == "object" && this.addMetaSchema(A.meta), f.call(this), A.validateFormats = $;
      }
      _addVocabularies() {
        this.addKeyword("$async");
      }
      _addDefaultMetaSchema() {
        const { $data: A, meta: q, schemaId: M } = this.opts;
        let $ = w;
        M === "id" && ($ = { ...w }, $.id = $.$id, delete $.$id), q && A && this.addMetaSchema($, $[M], !1);
      }
      defaultMeta() {
        const { meta: A, schemaId: q } = this.opts;
        return this.opts.defaultMeta = typeof A == "object" ? A[q] || A : void 0;
      }
      validate(A, q) {
        let M;
        if (typeof A == "string") {
          if (M = this.getSchema(A), !M)
            throw new Error(`no schema with key or ref "${A}"`);
        } else
          M = this.compile(A);
        const $ = M(q);
        return "$async" in M || (this.errors = M.errors), $;
      }
      compile(A, q) {
        const M = this._addSchema(A, q);
        return M.validate || this._compileSchemaEnv(M);
      }
      compileAsync(A, q) {
        if (typeof this.opts.loadSchema != "function")
          throw new Error("options.loadSchema should be a function");
        const { loadSchema: M } = this.opts;
        return $.call(this, A, q);
        async function $(Q, R) {
          await C.call(this, Q.$schema);
          const j = this._addSchema(Q, R);
          return j.validate || O.call(this, j);
        }
        async function C(Q) {
          Q && !this.getSchema(Q) && await $.call(this, { $ref: Q }, !0);
        }
        async function O(Q) {
          try {
            return this._compileSchemaEnv(Q);
          } catch (R) {
            if (!(R instanceof c.default))
              throw R;
            return K.call(this, R), await G.call(this, R.missingSchema), O.call(this, Q);
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
            return await (this._loading[Q] = M(Q));
          } finally {
            delete this._loading[Q];
          }
        }
      }
      // Adds schema to the instance
      addSchema(A, q, M, $ = this.opts.validateSchema) {
        if (Array.isArray(A)) {
          for (const O of A)
            this.addSchema(O, void 0, M, $);
          return this;
        }
        let C;
        if (typeof A == "object") {
          const { schemaId: O } = this.opts;
          if (C = A[O], C !== void 0 && typeof C != "string")
            throw new Error(`schema ${O} must be string`);
        }
        return q = (0, d.normalizeId)(q || C), this._checkUnique(q), this.schemas[q] = this._addSchema(A, M, q, $, !0), this;
      }
      // Add schema that will be used to validate other schemas
      // options in META_IGNORE_OPTIONS are alway set to false
      addMetaSchema(A, q, M = this.opts.validateSchema) {
        return this.addSchema(A, q, !0, M), this;
      }
      //  Validate schema against its meta-schema
      validateSchema(A, q) {
        if (typeof A == "boolean")
          return !0;
        let M;
        if (M = A.$schema, M !== void 0 && typeof M != "string")
          throw new Error("$schema must be a string");
        if (M = M || this.opts.defaultMeta || this.defaultMeta(), !M)
          return this.logger.warn("meta-schema not available"), this.errors = null, !0;
        const $ = this.validate(M, A);
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
          const { schemaId: M } = this.opts, $ = new i.SchemaEnv({ schema: {}, schemaId: M });
          if (q = i.resolveSchema.call(this, $, A), !q)
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
            let M = A[this.opts.schemaId];
            return M && (M = (0, d.normalizeId)(M), delete this.schemas[M], delete this.refs[M]), this;
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
        let M;
        if (typeof A == "string")
          M = A, typeof q == "object" && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), q.keyword = M);
        else if (typeof A == "object" && q === void 0) {
          if (q = A, M = q.keyword, Array.isArray(M) && !M.length)
            throw new Error("addKeywords: keyword must be string or non-empty array");
        } else
          throw new Error("invalid addKeywords parameters");
        if (U.call(this, M, q), !q)
          return (0, m.eachItem)(M, (C) => te.call(this, C)), this;
        se.call(this, q);
        const $ = {
          ...q,
          type: (0, g.getJSONTypes)(q.type),
          schemaType: (0, g.getJSONTypes)(q.schemaType)
        };
        return (0, m.eachItem)(M, $.type.length === 0 ? (C) => te.call(this, C, $) : (C) => $.type.forEach((O) => te.call(this, C, $, O))), this;
      }
      getKeyword(A) {
        const q = this.RULES.all[A];
        return typeof q == "object" ? q.definition : !!q;
      }
      // Remove keyword
      removeKeyword(A) {
        const { RULES: q } = this;
        delete q.keywords[A], delete q.all[A];
        for (const M of q.rules) {
          const $ = M.rules.findIndex((C) => C.keyword === A);
          $ >= 0 && M.rules.splice($, 1);
        }
        return this;
      }
      // Add format
      addFormat(A, q) {
        return typeof q == "string" && (q = new RegExp(q)), this.formats[A] = q, this;
      }
      errorsText(A = this.errors, { separator: q = ", ", dataVar: M = "data" } = {}) {
        return !A || A.length === 0 ? "No errors" : A.map(($) => `${M}${$.instancePath} ${$.message}`).reduce(($, C) => $ + q + C);
      }
      $dataMetaSchema(A, q) {
        const M = this.RULES.all;
        A = JSON.parse(JSON.stringify(A));
        for (const $ of q) {
          const C = $.split("/").slice(1);
          let O = A;
          for (const K of C)
            O = O[K];
          for (const K in M) {
            const G = M[K];
            if (typeof G != "object")
              continue;
            const { $data: ne } = G.definition, Q = O[K];
            ne && Q && (O[K] = ae(Q));
          }
        }
        return A;
      }
      _removeAllSchemas(A, q) {
        for (const M in A) {
          const $ = A[M];
          (!q || q.test(M)) && (typeof $ == "string" ? delete A[M] : $ && !$.meta && (this._cache.delete($.schema), delete A[M]));
        }
      }
      _addSchema(A, q, M, $ = this.opts.validateSchema, C = this.opts.addUsedSchema) {
        let O;
        const { schemaId: K } = this.opts;
        if (typeof A == "object")
          O = A[K];
        else {
          if (this.opts.jtd)
            throw new Error("schema must be object");
          if (typeof A != "boolean")
            throw new Error("schema must be object or boolean");
        }
        let G = this._cache.get(A);
        if (G !== void 0)
          return G;
        M = (0, d.normalizeId)(O || M);
        const ne = d.getSchemaRefs.call(this, A, M);
        return G = new i.SchemaEnv({ schema: A, schemaId: K, meta: q, baseId: M, localRefs: ne }), this._cache.set(G.schema, G), C && !M.startsWith("#") && (M && this._checkUnique(M), this.refs[M] = G), $ && this.validateSchema(A, !0), G;
      }
      _checkUnique(A) {
        if (this.schemas[A] || this.refs[A])
          throw new Error(`schema with key or id "${A}" already exists`);
      }
      _compileSchemaEnv(A) {
        if (A.meta ? this._compileMetaSchema(A) : i.compileSchema.call(this, A), !A.validate)
          throw new Error("ajv implementation error");
        return A.validate;
      }
      _compileMetaSchema(A) {
        const q = this.opts;
        this.opts = this._metaOpts;
        try {
          i.compileSchema.call(this, A);
        } finally {
          this.opts = q;
        }
      }
    }
    k.ValidationError = o.default, k.MissingRefError = c.default, e.default = k;
    function a(B, A, q, M = "error") {
      for (const $ in B) {
        const C = $;
        C in A && this.logger[M](`${q}: option ${$}. ${B[C]}`);
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
      if ((0, m.eachItem)(B, (M) => {
        if (q.keywords[M])
          throw new Error(`Keyword ${M} is already defined`);
        if (!D.test(M))
          throw new Error(`Keyword ${M} has invalid name`);
      }), !!A && A.$data && !("code" in A || "validate" in A))
        throw new Error('$data keyword must have "code" or "validate" function');
    }
    function te(B, A, q) {
      var M;
      const $ = A?.post;
      if (q && $)
        throw new Error('keyword with "post" flag cannot have "type"');
      const { RULES: C } = this;
      let O = $ ? C.post : C.rules.find(({ type: G }) => G === q);
      if (O || (O = { type: q, rules: [] }, C.rules.push(O)), C.keywords[B] = !0, !A)
        return;
      const K = {
        keyword: B,
        definition: {
          ...A,
          type: (0, g.getJSONTypes)(A.type),
          schemaType: (0, g.getJSONTypes)(A.schemaType)
        }
      };
      A.before ? J.call(this, O, K, A.before) : O.rules.push(K), C.all[B] = K, (M = A.implements) === null || M === void 0 || M.forEach((G) => this.addKeyword(G));
    }
    function J(B, A, q) {
      const M = B.rules.findIndex(($) => $.keyword === q);
      M >= 0 ? B.rules.splice(M, 0, A) : (B.rules.push(A), this.logger.warn(`rule ${q} is not defined`));
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
  })(En)), En;
}
var gt = {}, yt = {}, vt = {}, Or;
function Gi() {
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
  const e = /* @__PURE__ */ bn(), t = /* @__PURE__ */ Ee(), n = /* @__PURE__ */ Y(), o = /* @__PURE__ */ ke(), c = /* @__PURE__ */ wn(), r = /* @__PURE__ */ ee(), i = {
    keyword: "$ref",
    schemaType: "string",
    code(g) {
      const { gen: m, schema: w, it: b } = g, { baseId: y, schemaEnv: _, validateName: S, opts: p, self: h } = b, { root: u } = _;
      if ((w === "#" || w === "#/") && y === u.baseId)
        return k();
      const v = c.resolveRef.call(h, u, y, w);
      if (v === void 0)
        throw new e.default(b.opts.uriResolver, y, w);
      if (v instanceof c.SchemaEnv)
        return a(v);
      return l(v);
      function k() {
        if (_ === u)
          return d(g, S, _, _.$async);
        const f = m.scopeValue("root", { ref: u });
        return d(g, (0, n._)`${f}.validate`, u, u.$async);
      }
      function a(f) {
        const E = s(g, f);
        d(g, E, f, f.$async);
      }
      function l(f) {
        const E = m.scopeValue("schema", p.code.source === !0 ? { ref: f, code: (0, n.stringify)(f) } : { ref: f }), x = m.name("valid"), F = g.subschema({
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
  function s(g, m) {
    const { gen: w } = g;
    return m.validate ? w.scopeValue("validate", { ref: m.validate }) : (0, n._)`${w.scopeValue("wrapper", { ref: m })}.validate`;
  }
  Me.getValidate = s;
  function d(g, m, w, b) {
    const { gen: y, it: _ } = g, { allErrors: S, schemaEnv: p, opts: h } = _, u = h.passContext ? o.default.this : n.nil;
    b ? v() : k();
    function v() {
      if (!p.$async)
        throw new Error("async schema referenced by sync schema");
      const f = y.let("valid");
      y.try(() => {
        y.code((0, n._)`await ${(0, t.callValidateCode)(g, m, u)}`), l(m), S || y.assign(f, !0);
      }, (E) => {
        y.if((0, n._)`!(${E} instanceof ${_.ValidationError})`, () => y.throw(E)), a(E), S || y.assign(f, !1);
      }), g.ok(f);
    }
    function k() {
      g.result((0, t.callValidateCode)(g, m, u), () => l(m), () => a(m));
    }
    function a(f) {
      const E = (0, n._)`${f}.errors`;
      y.assign(o.default.vErrors, (0, n._)`${o.default.vErrors} === null ? ${E} : ${o.default.vErrors}.concat(${E})`), y.assign(o.default.errors, (0, n._)`${o.default.vErrors}.length`);
    }
    function l(f) {
      var E;
      if (!_.opts.unevaluated)
        return;
      const x = (E = w?.validate) === null || E === void 0 ? void 0 : E.evaluated;
      if (_.props !== !0)
        if (x && !x.dynamicProps)
          x.props !== void 0 && (_.props = r.mergeEvaluated.props(y, x.props, _.props));
        else {
          const F = y.var("props", (0, n._)`${f}.evaluated.props`);
          _.props = r.mergeEvaluated.props(y, F, _.props, n.Name);
        }
      if (_.items !== !0)
        if (x && !x.dynamicItems)
          x.items !== void 0 && (_.items = r.mergeEvaluated.items(y, x.items, _.items));
        else {
          const F = y.var("items", (0, n._)`${f}.evaluated.items`);
          _.items = r.mergeEvaluated.items(y, F, _.items, n.Name);
        }
    }
  }
  return Me.callRef = d, Me.default = i, Me;
}
var zr;
function Hi() {
  if (zr) return yt;
  zr = 1, Object.defineProperty(yt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Gi(), t = /* @__PURE__ */ Gn(), n = [
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
function Ji() {
  if (Ir) return bt;
  Ir = 1, Object.defineProperty(bt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Y(), t = e.operators, n = {
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
var wt = {}, Dr;
function Wi() {
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
      const { gen: c, data: r, schemaCode: i, it: s } = o, d = s.opts.multipleOfPrecision, g = c.let("res"), m = d ? (0, e._)`Math.abs(Math.round(${g}) - ${g}) > 1e-${d}` : (0, e._)`${g} !== parseInt(${g})`;
      o.fail$data((0, e._)`(${i} === 0 || (${g} = ${r}/${i}, ${m}))`);
    }
  };
  return wt.default = n, wt;
}
var _t = {}, St = {}, qr;
function Yi() {
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
function Xi() {
  if (Vr) return _t;
  Vr = 1, Object.defineProperty(_t, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Y(), t = /* @__PURE__ */ ee(), n = /* @__PURE__ */ Yi(), c = {
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
      const { keyword: i, data: s, schemaCode: d, it: g } = r, m = i === "maxLength" ? e.operators.GT : e.operators.LT, w = g.opts.unicode === !1 ? (0, e._)`${s}.length` : (0, e._)`${(0, t.useFunc)(r.gen, n.default)}(${s})`;
      r.fail$data((0, e._)`${w} ${m} ${d}`);
    }
  };
  return _t.default = c, _t;
}
var Ct = {}, Br;
function Zi() {
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
      const { gen: i, data: s, $data: d, schema: g, schemaCode: m, it: w } = r, b = w.opts.unicodeRegExp ? "u" : "";
      if (d) {
        const { regExp: y } = w.opts.code, _ = y.code === "new RegExp" ? (0, n._)`new RegExp` : (0, t.useFunc)(i, y), S = i.let("valid");
        i.try(() => i.assign(S, (0, n._)`${_}(${m}, ${b}).test(${s})`), () => i.assign(S, !1)), r.fail$data((0, n._)`!${S}`);
      } else {
        const y = (0, e.usePattern)(r, g);
        r.fail$data((0, n._)`!${y}.test(${s})`);
      }
    }
  };
  return Ct.default = c, Ct;
}
var kt = {}, Lr;
function Qi() {
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
      const { keyword: c, data: r, schemaCode: i } = o, s = c === "maxProperties" ? e.operators.GT : e.operators.LT;
      o.fail$data((0, e._)`Object.keys(${r}).length ${s} ${i}`);
    }
  };
  return kt.default = n, kt;
}
var Et = {}, Ur;
function es() {
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
      const { gen: i, schema: s, schemaCode: d, data: g, $data: m, it: w } = r, { opts: b } = w;
      if (!m && s.length === 0)
        return;
      const y = s.length >= b.loopRequired;
      if (w.allErrors ? _() : S(), b.strictRequired) {
        const u = r.parentSchema.properties, { definedProperties: v } = r.it;
        for (const k of s)
          if (u?.[k] === void 0 && !v.has(k)) {
            const a = w.schemaEnv.baseId + w.errSchemaPath, l = `required property "${k}" is not defined at "${a}" (strictRequired)`;
            (0, n.checkStrictMode)(w, l, w.opts.strictRequired);
          }
      }
      function _() {
        if (y || m)
          r.block$data(t.nil, p);
        else
          for (const u of s)
            (0, e.checkReportMissingProp)(r, u);
      }
      function S() {
        const u = i.let("missing");
        if (y || m) {
          const v = i.let("valid", !0);
          r.block$data(v, () => h(u, v)), r.ok(v);
        } else
          i.if((0, e.checkMissingProp)(r, s, u)), (0, e.reportMissingProp)(r, u), i.else();
      }
      function p() {
        i.forOf("prop", d, (u) => {
          r.setParams({ missingProperty: u }), i.if((0, e.noPropertyInData)(i, g, u, b.ownProperties), () => r.error());
        });
      }
      function h(u, v) {
        r.setParams({ missingProperty: u }), i.forOf(u, d, () => {
          i.assign(v, (0, e.propertyInData)(i, g, u, b.ownProperties)), i.if((0, t.not)(v), () => {
            r.error(), i.break();
          });
        }, t.nil);
      }
    }
  };
  return Et.default = c, Et;
}
var xt = {}, Kr;
function ts() {
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
      const { keyword: c, data: r, schemaCode: i } = o, s = c === "maxItems" ? e.operators.GT : e.operators.LT;
      o.fail$data((0, e._)`${r}.length ${s} ${i}`);
    }
  };
  return xt.default = n, xt;
}
var Pt = {}, Rt = {}, Gr;
function Hn() {
  if (Gr) return Rt;
  Gr = 1, Object.defineProperty(Rt, "__esModule", { value: !0 });
  const e = Yo();
  return e.code = 'require("ajv/dist/runtime/equal").default', Rt.default = e, Rt;
}
var Hr;
function ns() {
  if (Hr) return Pt;
  Hr = 1, Object.defineProperty(Pt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ hn(), t = /* @__PURE__ */ Y(), n = /* @__PURE__ */ ee(), o = /* @__PURE__ */ Hn(), r = {
    keyword: "uniqueItems",
    type: "array",
    schemaType: "boolean",
    $data: !0,
    error: {
      message: ({ params: { i, j: s } }) => (0, t.str)`must NOT have duplicate items (items ## ${s} and ${i} are identical)`,
      params: ({ params: { i, j: s } }) => (0, t._)`{i: ${i}, j: ${s}}`
    },
    code(i) {
      const { gen: s, data: d, $data: g, schema: m, parentSchema: w, schemaCode: b, it: y } = i;
      if (!g && !m)
        return;
      const _ = s.let("valid"), S = w.items ? (0, e.getSchemaTypes)(w.items) : [];
      i.block$data(_, p, (0, t._)`${b} === false`), i.ok(_);
      function p() {
        const k = s.let("i", (0, t._)`${d}.length`), a = s.let("j");
        i.setParams({ i: k, j: a }), s.assign(_, !0), s.if((0, t._)`${k} > 1`, () => (h() ? u : v)(k, a));
      }
      function h() {
        return S.length > 0 && !S.some((k) => k === "object" || k === "array");
      }
      function u(k, a) {
        const l = s.name("item"), f = (0, e.checkDataTypes)(S, l, y.opts.strictNumbers, e.DataType.Wrong), E = s.const("indices", (0, t._)`{}`);
        s.for((0, t._)`;${k}--;`, () => {
          s.let(l, (0, t._)`${d}[${k}]`), s.if(f, (0, t._)`continue`), S.length > 1 && s.if((0, t._)`typeof ${l} == "string"`, (0, t._)`${l} += "_"`), s.if((0, t._)`typeof ${E}[${l}] == "number"`, () => {
            s.assign(a, (0, t._)`${E}[${l}]`), i.error(), s.assign(_, !1).break();
          }).code((0, t._)`${E}[${l}] = ${k}`);
        });
      }
      function v(k, a) {
        const l = (0, n.useFunc)(s, o.default), f = s.name("outer");
        s.label(f).for((0, t._)`;${k}--;`, () => s.for((0, t._)`${a} = ${k}; ${a}--;`, () => s.if((0, t._)`${l}(${d}[${k}], ${d}[${a}])`, () => {
          i.error(), s.assign(_, !1).break(f);
        })));
      }
    }
  };
  return Pt.default = r, Pt;
}
var At = {}, Jr;
function rs() {
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
      const { gen: i, data: s, $data: d, schemaCode: g, schema: m } = r;
      d || m && typeof m == "object" ? r.fail$data((0, e._)`!${(0, t.useFunc)(i, n.default)}(${s}, ${g})`) : r.fail((0, e._)`${m} !== ${s}`);
    }
  };
  return At.default = c, At;
}
var Ft = {}, Wr;
function os() {
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
      const { gen: i, data: s, $data: d, schema: g, schemaCode: m, it: w } = r;
      if (!d && g.length === 0)
        throw new Error("enum must have non-empty array");
      const b = g.length >= w.opts.loopEnum;
      let y;
      const _ = () => y ?? (y = (0, t.useFunc)(i, n.default));
      let S;
      if (b || d)
        S = i.let("valid"), r.block$data(S, p);
      else {
        if (!Array.isArray(g))
          throw new Error("ajv implementation error");
        const u = i.const("vSchema", m);
        S = (0, e.or)(...g.map((v, k) => h(u, k)));
      }
      r.pass(S);
      function p() {
        i.assign(S, !1), i.forOf("v", m, (u) => i.if((0, e._)`${_()}(${s}, ${u})`, () => i.assign(S, !0).break()));
      }
      function h(u, v) {
        const k = g[v];
        return typeof k == "object" && k !== null ? (0, e._)`${_()}(${s}, ${u}[${v}])` : (0, e._)`${s} === ${k}`;
      }
    }
  };
  return Ft.default = c, Ft;
}
var Yr;
function is() {
  if (Yr) return $t;
  Yr = 1, Object.defineProperty($t, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ji(), t = /* @__PURE__ */ Wi(), n = /* @__PURE__ */ Xi(), o = /* @__PURE__ */ Zi(), c = /* @__PURE__ */ Qi(), r = /* @__PURE__ */ es(), i = /* @__PURE__ */ ts(), s = /* @__PURE__ */ ns(), d = /* @__PURE__ */ rs(), g = /* @__PURE__ */ os(), m = [
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
    g.default
  ];
  return $t.default = m, $t;
}
var Nt = {}, Ue = {}, Xr;
function Zo() {
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
      const { parentSchema: i, it: s } = r, { items: d } = i;
      if (!Array.isArray(d)) {
        (0, t.checkStrictMode)(s, '"additionalItems" is ignored when "items" is not an array of schemas');
        return;
      }
      c(r, d);
    }
  };
  function c(r, i) {
    const { gen: s, schema: d, data: g, keyword: m, it: w } = r;
    w.items = !0;
    const b = s.const("len", (0, e._)`${g}.length`);
    if (d === !1)
      r.setParams({ len: i.length }), r.pass((0, e._)`${b} <= ${i.length}`);
    else if (typeof d == "object" && !(0, t.alwaysValidSchema)(w, d)) {
      const _ = s.var("valid", (0, e._)`${b} <= ${i.length}`);
      s.if((0, e.not)(_), () => y(_)), r.ok(_);
    }
    function y(_) {
      s.forRange("i", i.length, b, (S) => {
        r.subschema({ keyword: m, dataProp: S, dataPropType: t.Type.Num }, _), w.allErrors || s.if((0, e.not)(_), () => s.break());
      });
    }
  }
  return Ue.validateAdditionalItems = c, Ue.default = o, Ue;
}
var Mt = {}, Ke = {}, Zr;
function Qo() {
  if (Zr) return Ke;
  Zr = 1, Object.defineProperty(Ke, "__esModule", { value: !0 }), Ke.validateTuple = void 0;
  const e = /* @__PURE__ */ Y(), t = /* @__PURE__ */ ee(), n = /* @__PURE__ */ Ee(), o = {
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
    const { gen: d, parentSchema: g, data: m, keyword: w, it: b } = r;
    S(g), b.opts.unevaluated && s.length && b.items !== !0 && (b.items = t.mergeEvaluated.items(d, s.length, b.items));
    const y = d.name("valid"), _ = d.const("len", (0, e._)`${m}.length`);
    s.forEach((p, h) => {
      (0, t.alwaysValidSchema)(b, p) || (d.if((0, e._)`${_} > ${h}`, () => r.subschema({
        keyword: w,
        schemaProp: h,
        dataProp: h
      }, y)), r.ok(y));
    });
    function S(p) {
      const { opts: h, errSchemaPath: u } = b, v = s.length, k = v === p.minItems && (v === p.maxItems || p[i] === !1);
      if (h.strictTuples && !k) {
        const a = `"${w}" is ${v}-tuple, but minItems or maxItems/${i} are not specified or different at path "${u}"`;
        (0, t.checkStrictMode)(b, a, h.strictTuples);
      }
    }
  }
  return Ke.validateTuple = c, Ke.default = o, Ke;
}
var Qr;
function ss() {
  if (Qr) return Mt;
  Qr = 1, Object.defineProperty(Mt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Qo(), t = {
    keyword: "prefixItems",
    type: "array",
    schemaType: ["array"],
    before: "uniqueItems",
    code: (n) => (0, e.validateTuple)(n, "items")
  };
  return Mt.default = t, Mt;
}
var jt = {}, eo;
function as() {
  if (eo) return jt;
  eo = 1, Object.defineProperty(jt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Y(), t = /* @__PURE__ */ ee(), n = /* @__PURE__ */ Ee(), o = /* @__PURE__ */ Zo(), r = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    error: {
      message: ({ params: { len: i } }) => (0, e.str)`must NOT have more than ${i} items`,
      params: ({ params: { len: i } }) => (0, e._)`{limit: ${i}}`
    },
    code(i) {
      const { schema: s, parentSchema: d, it: g } = i, { prefixItems: m } = d;
      g.items = !0, !(0, t.alwaysValidSchema)(g, s) && (m ? (0, o.validateAdditionalItems)(i, m) : i.ok((0, n.validateArray)(i)));
    }
  };
  return jt.default = r, jt;
}
var Ot = {}, to;
function cs() {
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
      const { gen: r, schema: i, parentSchema: s, data: d, it: g } = c;
      let m, w;
      const { minContains: b, maxContains: y } = s;
      g.opts.next ? (m = b === void 0 ? 1 : b, w = y) : m = 1;
      const _ = r.const("len", (0, e._)`${d}.length`);
      if (c.setParams({ min: m, max: w }), w === void 0 && m === 0) {
        (0, t.checkStrictMode)(g, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
        return;
      }
      if (w !== void 0 && m > w) {
        (0, t.checkStrictMode)(g, '"minContains" > "maxContains" is always invalid'), c.fail();
        return;
      }
      if ((0, t.alwaysValidSchema)(g, i)) {
        let v = (0, e._)`${_} >= ${m}`;
        w !== void 0 && (v = (0, e._)`${v} && ${_} <= ${w}`), c.pass(v);
        return;
      }
      g.items = !0;
      const S = r.name("valid");
      w === void 0 && m === 1 ? h(S, () => r.if(S, () => r.break())) : m === 0 ? (r.let(S, !0), w !== void 0 && r.if((0, e._)`${d}.length > 0`, p)) : (r.let(S, !1), p()), c.result(S, () => c.reset());
      function p() {
        const v = r.name("_valid"), k = r.let("count", 0);
        h(v, () => r.if(v, () => u(k)));
      }
      function h(v, k) {
        r.forRange("i", 0, _, (a) => {
          c.subschema({
            keyword: "contains",
            dataProp: a,
            dataPropType: t.Type.Num,
            compositeRule: !0
          }, v), k();
        });
      }
      function u(v) {
        r.code((0, e._)`${v}++`), w === void 0 ? r.if((0, e._)`${v} >= ${m}`, () => r.assign(S, !0).break()) : (r.if((0, e._)`${v} > ${w}`, () => r.assign(S, !1).break()), m === 1 ? r.assign(S, !0) : r.if((0, e._)`${v} >= ${m}`, () => r.assign(S, !0)));
      }
    }
  };
  return Ot.default = o, Ot;
}
var On = {}, no;
function Jn() {
  return no || (no = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
    const t = /* @__PURE__ */ Y(), n = /* @__PURE__ */ ee(), o = /* @__PURE__ */ Ee();
    e.error = {
      message: ({ params: { property: d, depsCount: g, deps: m } }) => {
        const w = g === 1 ? "property" : "properties";
        return (0, t.str)`must have ${w} ${m} when property ${d} is present`;
      },
      params: ({ params: { property: d, depsCount: g, deps: m, missingProperty: w } }) => (0, t._)`{property: ${d},
    missingProperty: ${w},
    depsCount: ${g},
    deps: ${m}}`
      // TODO change to reference
    };
    const c = {
      keyword: "dependencies",
      type: "object",
      schemaType: "object",
      error: e.error,
      code(d) {
        const [g, m] = r(d);
        i(d, g), s(d, m);
      }
    };
    function r({ schema: d }) {
      const g = {}, m = {};
      for (const w in d) {
        if (w === "__proto__")
          continue;
        const b = Array.isArray(d[w]) ? g : m;
        b[w] = d[w];
      }
      return [g, m];
    }
    function i(d, g = d.schema) {
      const { gen: m, data: w, it: b } = d;
      if (Object.keys(g).length === 0)
        return;
      const y = m.let("missing");
      for (const _ in g) {
        const S = g[_];
        if (S.length === 0)
          continue;
        const p = (0, o.propertyInData)(m, w, _, b.opts.ownProperties);
        d.setParams({
          property: _,
          depsCount: S.length,
          deps: S.join(", ")
        }), b.allErrors ? m.if(p, () => {
          for (const h of S)
            (0, o.checkReportMissingProp)(d, h);
        }) : (m.if((0, t._)`${p} && (${(0, o.checkMissingProp)(d, S, y)})`), (0, o.reportMissingProp)(d, y), m.else());
      }
    }
    e.validatePropertyDeps = i;
    function s(d, g = d.schema) {
      const { gen: m, data: w, keyword: b, it: y } = d, _ = m.name("valid");
      for (const S in g)
        (0, n.alwaysValidSchema)(y, g[S]) || (m.if(
          (0, o.propertyInData)(m, w, S, y.opts.ownProperties),
          () => {
            const p = d.subschema({ keyword: b, schemaProp: S }, _);
            d.mergeValidEvaluated(p, _);
          },
          () => m.var(_, !0)
          // TODO var
        ), d.ok(_));
    }
    e.validateSchemaDeps = s, e.default = c;
  })(On)), On;
}
var Tt = {}, ro;
function ls() {
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
      const { gen: r, schema: i, data: s, it: d } = c;
      if ((0, t.alwaysValidSchema)(d, i))
        return;
      const g = r.name("valid");
      r.forIn("key", s, (m) => {
        c.setParams({ propertyName: m }), c.subschema({
          keyword: "propertyNames",
          data: m,
          dataTypes: ["string"],
          propertyName: m,
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
function ei() {
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
      params: ({ params: i }) => (0, t._)`{additionalProperty: ${i.additionalProperty}}`
    },
    code(i) {
      const { gen: s, schema: d, parentSchema: g, data: m, errsCount: w, it: b } = i;
      if (!w)
        throw new Error("ajv implementation error");
      const { allErrors: y, opts: _ } = b;
      if (b.props = !0, _.removeAdditional !== "all" && (0, o.alwaysValidSchema)(b, d))
        return;
      const S = (0, e.allSchemaProperties)(g.properties), p = (0, e.allSchemaProperties)(g.patternProperties);
      h(), i.ok((0, t._)`${w} === ${n.default.errors}`);
      function h() {
        s.forIn("key", m, (l) => {
          !S.length && !p.length ? k(l) : s.if(u(l), () => k(l));
        });
      }
      function u(l) {
        let f;
        if (S.length > 8) {
          const E = (0, o.schemaRefOrVal)(b, g.properties, "properties");
          f = (0, e.isOwnProperty)(s, E, l);
        } else S.length ? f = (0, t.or)(...S.map((E) => (0, t._)`${l} === ${E}`)) : f = t.nil;
        return p.length && (f = (0, t.or)(f, ...p.map((E) => (0, t._)`${(0, e.usePattern)(i, E)}.test(${l})`))), (0, t.not)(f);
      }
      function v(l) {
        s.code((0, t._)`delete ${m}[${l}]`);
      }
      function k(l) {
        if (_.removeAdditional === "all" || _.removeAdditional && d === !1) {
          v(l);
          return;
        }
        if (d === !1) {
          i.setParams({ additionalProperty: l }), i.error(), y || s.break();
          return;
        }
        if (typeof d == "object" && !(0, o.alwaysValidSchema)(b, d)) {
          const f = s.name("valid");
          _.removeAdditional === "failing" ? (a(l, f, !1), s.if((0, t.not)(f), () => {
            i.reset(), v(l);
          })) : (a(l, f), y || s.if((0, t.not)(f), () => s.break()));
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
        }), i.subschema(x, f);
      }
    }
  };
  return zt.default = r, zt;
}
var It = {}, io;
function ds() {
  if (io) return It;
  io = 1, Object.defineProperty(It, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ $n(), t = /* @__PURE__ */ Ee(), n = /* @__PURE__ */ ee(), o = /* @__PURE__ */ ei(), c = {
    keyword: "properties",
    type: "object",
    schemaType: "object",
    code(r) {
      const { gen: i, schema: s, parentSchema: d, data: g, it: m } = r;
      m.opts.removeAdditional === "all" && d.additionalProperties === void 0 && o.default.code(new e.KeywordCxt(m, o.default, "additionalProperties"));
      const w = (0, t.allSchemaProperties)(s);
      for (const p of w)
        m.definedProperties.add(p);
      m.opts.unevaluated && w.length && m.props !== !0 && (m.props = n.mergeEvaluated.props(i, (0, n.toHash)(w), m.props));
      const b = w.filter((p) => !(0, n.alwaysValidSchema)(m, s[p]));
      if (b.length === 0)
        return;
      const y = i.name("valid");
      for (const p of b)
        _(p) ? S(p) : (i.if((0, t.propertyInData)(i, g, p, m.opts.ownProperties)), S(p), m.allErrors || i.else().var(y, !0), i.endIf()), r.it.definedProperties.add(p), r.ok(y);
      function _(p) {
        return m.opts.useDefaults && !m.compositeRule && s[p].default !== void 0;
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
var Dt = {}, so;
function us() {
  if (so) return Dt;
  so = 1, Object.defineProperty(Dt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ee(), t = /* @__PURE__ */ Y(), n = /* @__PURE__ */ ee(), o = /* @__PURE__ */ ee(), c = {
    keyword: "patternProperties",
    type: "object",
    schemaType: "object",
    code(r) {
      const { gen: i, schema: s, data: d, parentSchema: g, it: m } = r, { opts: w } = m, b = (0, e.allSchemaProperties)(s), y = b.filter((k) => (0, n.alwaysValidSchema)(m, s[k]));
      if (b.length === 0 || y.length === b.length && (!m.opts.unevaluated || m.props === !0))
        return;
      const _ = w.strictSchema && !w.allowMatchingProperties && g.properties, S = i.name("valid");
      m.props !== !0 && !(m.props instanceof t.Name) && (m.props = (0, o.evaluatedPropsToName)(i, m.props));
      const { props: p } = m;
      h();
      function h() {
        for (const k of b)
          _ && u(k), m.allErrors ? v(k) : (i.var(S, !0), v(k), i.if(S));
      }
      function u(k) {
        for (const a in _)
          new RegExp(k).test(a) && (0, n.checkStrictMode)(m, `property ${a} matches pattern ${k} (use allowMatchingProperties)`);
      }
      function v(k) {
        i.forIn("key", d, (a) => {
          i.if((0, t._)`${(0, e.usePattern)(r, k)}.test(${a})`, () => {
            const l = y.includes(k);
            l || r.subschema({
              keyword: "patternProperties",
              schemaProp: k,
              dataProp: a,
              dataPropType: o.Type.Str
            }, S), m.opts.unevaluated && p !== !0 ? i.assign((0, t._)`${p}[${a}]`, !0) : !l && !m.allErrors && i.if((0, t.not)(S), () => i.break());
          });
        });
      }
    }
  };
  return Dt.default = c, Dt;
}
var qt = {}, ao;
function fs() {
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
var Vt = {}, co;
function ps() {
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
function hs() {
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
      const { gen: r, schema: i, parentSchema: s, it: d } = c;
      if (!Array.isArray(i))
        throw new Error("ajv implementation error");
      if (d.opts.discriminator && s.discriminator)
        return;
      const g = i, m = r.let("valid", !1), w = r.let("passing", null), b = r.name("_valid");
      c.setParams({ passing: w }), r.block(y), c.result(m, () => c.reset(), () => c.error(!0));
      function y() {
        g.forEach((_, S) => {
          let p;
          (0, t.alwaysValidSchema)(d, _) ? r.var(b, !0) : p = c.subschema({
            keyword: "oneOf",
            schemaProp: S,
            compositeRule: !0
          }, b), S > 0 && r.if((0, e._)`${b} && ${m}`).assign(m, !1).assign(w, (0, e._)`[${w}, ${S}]`).else(), r.if(b, () => {
            r.assign(m, !0), r.assign(w, S), p && c.mergeEvaluated(p, e.Name);
          });
        });
      }
    }
  };
  return Bt.default = o, Bt;
}
var Lt = {}, uo;
function ms() {
  if (uo) return Lt;
  uo = 1, Object.defineProperty(Lt, "__esModule", { value: !0 });
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
        const g = n.subschema({ keyword: "allOf", schemaProp: d }, i);
        n.ok(i), n.mergeEvaluated(g);
      });
    }
  };
  return Lt.default = t, Lt;
}
var Ut = {}, fo;
function gs() {
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
      const { gen: i, parentSchema: s, it: d } = r;
      s.then === void 0 && s.else === void 0 && (0, t.checkStrictMode)(d, '"if" without "then" and "else" is ignored');
      const g = c(d, "then"), m = c(d, "else");
      if (!g && !m)
        return;
      const w = i.let("valid", !0), b = i.name("_valid");
      if (y(), r.reset(), g && m) {
        const S = i.let("ifClause");
        r.setParams({ ifClause: S }), i.if(b, _("then", S), _("else", S));
      } else g ? i.if(b, _("then")) : i.if((0, e.not)(b), _("else"));
      r.pass(w, () => r.error(!0));
      function y() {
        const S = r.subschema({
          keyword: "if",
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }, b);
        r.mergeEvaluated(S);
      }
      function _(S, p) {
        return () => {
          const h = r.subschema({ keyword: S }, b);
          i.assign(w, b), r.mergeValidEvaluated(h, w), p ? i.assign(p, (0, e._)`${S}`) : r.setParams({ ifClause: S });
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
var Kt = {}, po;
function ys() {
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
function vs() {
  if (ho) return Nt;
  ho = 1, Object.defineProperty(Nt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Zo(), t = /* @__PURE__ */ ss(), n = /* @__PURE__ */ Qo(), o = /* @__PURE__ */ as(), c = /* @__PURE__ */ cs(), r = /* @__PURE__ */ Jn(), i = /* @__PURE__ */ ls(), s = /* @__PURE__ */ ei(), d = /* @__PURE__ */ ds(), g = /* @__PURE__ */ us(), m = /* @__PURE__ */ fs(), w = /* @__PURE__ */ ps(), b = /* @__PURE__ */ hs(), y = /* @__PURE__ */ ms(), _ = /* @__PURE__ */ gs(), S = /* @__PURE__ */ ys();
  function p(h = !1) {
    const u = [
      // any
      m.default,
      w.default,
      b.default,
      y.default,
      _.default,
      S.default,
      // object
      i.default,
      s.default,
      r.default,
      d.default,
      g.default
    ];
    return h ? u.push(t.default, o.default) : u.push(e.default, n.default), u.push(c.default), u;
  }
  return Nt.default = p, Nt;
}
var Gt = {}, Ge = {}, mo;
function ti() {
  if (mo) return Ge;
  mo = 1, Object.defineProperty(Ge, "__esModule", { value: !0 }), Ge.dynamicAnchor = void 0;
  const e = /* @__PURE__ */ Y(), t = /* @__PURE__ */ ke(), n = /* @__PURE__ */ wn(), o = /* @__PURE__ */ Gn(), c = {
    keyword: "$dynamicAnchor",
    schemaType: "string",
    code: (s) => r(s, s.schema)
  };
  function r(s, d) {
    const { gen: g, it: m } = s;
    m.schemaEnv.root.dynamicAnchors[d] = !0;
    const w = (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(d)}`, b = m.errSchemaPath === "#" ? m.validateName : i(s);
    g.if((0, e._)`!${w}`, () => g.assign(w, b));
  }
  Ge.dynamicAnchor = r;
  function i(s) {
    const { schemaEnv: d, schema: g, self: m } = s.it, { root: w, baseId: b, localRefs: y, meta: _ } = d.root, { schemaId: S } = m.opts, p = new n.SchemaEnv({ schema: g, schemaId: S, root: w, baseId: b, localRefs: y, meta: _ });
    return n.compileSchema.call(m, p), (0, o.getValidate)(s, p);
  }
  return Ge.default = c, Ge;
}
var He = {}, go;
function ni() {
  if (go) return He;
  go = 1, Object.defineProperty(He, "__esModule", { value: !0 }), He.dynamicRef = void 0;
  const e = /* @__PURE__ */ Y(), t = /* @__PURE__ */ ke(), n = /* @__PURE__ */ Gn(), o = {
    keyword: "$dynamicRef",
    schemaType: "string",
    code: (r) => c(r, r.schema)
  };
  function c(r, i) {
    const { gen: s, keyword: d, it: g } = r;
    if (i[0] !== "#")
      throw new Error(`"${d}" only supports hash fragment reference`);
    const m = i.slice(1);
    if (g.allErrors)
      w();
    else {
      const y = s.let("valid", !1);
      w(y), r.ok(y);
    }
    function w(y) {
      if (g.schemaEnv.root.dynamicAnchors[m]) {
        const _ = s.let("_v", (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(m)}`);
        s.if(_, b(_, y), b(g.validateName, y));
      } else
        b(g.validateName, y)();
    }
    function b(y, _) {
      return _ ? () => s.block(() => {
        (0, n.callRef)(r, y), s.let(_, !0);
      }) : () => (0, n.callRef)(r, y);
    }
  }
  return He.dynamicRef = c, He.default = o, He;
}
var Ht = {}, yo;
function $s() {
  if (yo) return Ht;
  yo = 1, Object.defineProperty(Ht, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ti(), t = /* @__PURE__ */ ee(), n = {
    keyword: "$recursiveAnchor",
    schemaType: "boolean",
    code(o) {
      o.schema ? (0, e.dynamicAnchor)(o, "") : (0, t.checkStrictMode)(o.it, "$recursiveAnchor: false is ignored");
    }
  };
  return Ht.default = n, Ht;
}
var Jt = {}, vo;
function bs() {
  if (vo) return Jt;
  vo = 1, Object.defineProperty(Jt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ni(), t = {
    keyword: "$recursiveRef",
    schemaType: "string",
    code: (n) => (0, e.dynamicRef)(n, n.schema)
  };
  return Jt.default = t, Jt;
}
var $o;
function ws() {
  if ($o) return Gt;
  $o = 1, Object.defineProperty(Gt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ti(), t = /* @__PURE__ */ ni(), n = /* @__PURE__ */ $s(), o = /* @__PURE__ */ bs(), c = [e.default, t.default, n.default, o.default];
  return Gt.default = c, Gt;
}
var Wt = {}, Yt = {}, bo;
function _s() {
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
function Ss() {
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
function Cs() {
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
function ks() {
  if (So) return Wt;
  So = 1, Object.defineProperty(Wt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ _s(), t = /* @__PURE__ */ Ss(), n = /* @__PURE__ */ Cs(), o = [e.default, t.default, n.default];
  return Wt.default = o, Wt;
}
var Qt = {}, en = {}, Co;
function Es() {
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
      const { gen: i, schema: s, data: d, errsCount: g, it: m } = r;
      if (!g)
        throw new Error("ajv implementation error");
      const { allErrors: w, props: b } = m;
      b instanceof e.Name ? i.if((0, e._)`${b} !== true`, () => i.forIn("key", d, (p) => i.if(_(b, p), () => y(p)))) : b !== !0 && i.forIn("key", d, (p) => b === void 0 ? y(p) : i.if(S(b, p), () => y(p))), m.props = !0, r.ok((0, e._)`${g} === ${n.default.errors}`);
      function y(p) {
        if (s === !1) {
          r.setParams({ unevaluatedProperty: p }), r.error(), w || i.break();
          return;
        }
        if (!(0, t.alwaysValidSchema)(m, s)) {
          const h = i.name("valid");
          r.subschema({
            keyword: "unevaluatedProperties",
            dataProp: p,
            dataPropType: t.Type.Str
          }, h), w || i.if((0, e.not)(h), () => i.break());
        }
      }
      function _(p, h) {
        return (0, e._)`!${p} || !${p}[${h}]`;
      }
      function S(p, h) {
        const u = [];
        for (const v in p)
          p[v] === !0 && u.push((0, e._)`${h} !== ${v}`);
        return (0, e.and)(...u);
      }
    }
  };
  return en.default = c, en;
}
var tn = {}, ko;
function xs() {
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
      const { gen: r, schema: i, data: s, it: d } = c, g = d.items || 0;
      if (g === !0)
        return;
      const m = r.const("len", (0, e._)`${s}.length`);
      if (i === !1)
        c.setParams({ len: g }), c.fail((0, e._)`${m} > ${g}`);
      else if (typeof i == "object" && !(0, t.alwaysValidSchema)(d, i)) {
        const b = r.var("valid", (0, e._)`${m} <= ${g}`);
        r.if((0, e.not)(b), () => w(b, g)), c.ok(b);
      }
      d.items = !0;
      function w(b, y) {
        r.forRange("i", y, m, (_) => {
          c.subschema({ keyword: "unevaluatedItems", dataProp: _, dataPropType: t.Type.Num }, b), d.allErrors || r.if((0, e.not)(b), () => r.break());
        });
      }
    }
  };
  return tn.default = o, tn;
}
var Eo;
function Ps() {
  if (Eo) return Qt;
  Eo = 1, Object.defineProperty(Qt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Es(), t = /* @__PURE__ */ xs(), n = [e.default, t.default];
  return Qt.default = n, Qt;
}
var nn = {}, rn = {}, xo;
function Rs() {
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
      const { gen: r, data: i, $data: s, schema: d, schemaCode: g, it: m } = o, { opts: w, errSchemaPath: b, schemaEnv: y, self: _ } = m;
      if (!w.validateFormats)
        return;
      s ? S() : p();
      function S() {
        const h = r.scopeValue("formats", {
          ref: _.formats,
          code: w.code.formats
        }), u = r.const("fDef", (0, e._)`${h}[${g}]`), v = r.let("fType"), k = r.let("format");
        r.if((0, e._)`typeof ${u} == "object" && !(${u} instanceof RegExp)`, () => r.assign(v, (0, e._)`${u}.type || "string"`).assign(k, (0, e._)`${u}.validate`), () => r.assign(v, (0, e._)`"string"`).assign(k, u)), o.fail$data((0, e.or)(a(), l()));
        function a() {
          return w.strictSchema === !1 ? e.nil : (0, e._)`${g} && !${k}`;
        }
        function l() {
          const f = y.$async ? (0, e._)`(${u}.async ? await ${k}(${i}) : ${k}(${i}))` : (0, e._)`${k}(${i})`, E = (0, e._)`(typeof ${k} == "function" ? ${f} : ${k}.test(${i}))`;
          return (0, e._)`${k} && ${k} !== true && ${v} === ${c} && !${E}`;
        }
      }
      function p() {
        const h = _.formats[d];
        if (!h) {
          a();
          return;
        }
        if (h === !0)
          return;
        const [u, v, k] = l(h);
        u === c && o.pass(f());
        function a() {
          if (w.strictSchema === !1) {
            _.logger.warn(E());
            return;
          }
          throw new Error(E());
          function E() {
            return `unknown format "${d}" ignored in schema at path "${b}"`;
          }
        }
        function l(E) {
          const x = E instanceof RegExp ? (0, e.regexpCode)(E) : w.code.formats ? (0, e._)`${w.code.formats}${(0, e.getProperty)(d)}` : void 0, F = r.scopeValue("formats", { key: d, ref: E, code: x });
          return typeof E == "object" && !(E instanceof RegExp) ? [E.type || "string", E.validate, (0, e._)`${F}.validate`] : ["string", E, F];
        }
        function f() {
          if (typeof h == "object" && !(h instanceof RegExp) && h.async) {
            if (!y.$async)
              throw new Error("async format in sync schema");
            return (0, e._)`await ${k}(${i})`;
          }
          return typeof v == "function" ? (0, e._)`${k}(${i})` : (0, e._)`${k}.test(${i})`;
        }
      }
    }
  };
  return rn.default = n, rn;
}
var Po;
function As() {
  if (Po) return nn;
  Po = 1, Object.defineProperty(nn, "__esModule", { value: !0 });
  const t = [(/* @__PURE__ */ Rs()).default];
  return nn.default = t, nn;
}
var Ie = {}, Ro;
function Fs() {
  return Ro || (Ro = 1, Object.defineProperty(Ie, "__esModule", { value: !0 }), Ie.contentVocabulary = Ie.metadataVocabulary = void 0, Ie.metadataVocabulary = [
    "title",
    "description",
    "default",
    "deprecated",
    "readOnly",
    "writeOnly",
    "examples"
  ], Ie.contentVocabulary = [
    "contentMediaType",
    "contentEncoding",
    "contentSchema"
  ]), Ie;
}
var Ao;
function Ns() {
  if (Ao) return gt;
  Ao = 1, Object.defineProperty(gt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Hi(), t = /* @__PURE__ */ is(), n = /* @__PURE__ */ vs(), o = /* @__PURE__ */ ws(), c = /* @__PURE__ */ ks(), r = /* @__PURE__ */ Ps(), i = /* @__PURE__ */ As(), s = /* @__PURE__ */ Fs(), d = [
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
var on = {}, ot = {}, Fo;
function Ms() {
  if (Fo) return ot;
  Fo = 1, Object.defineProperty(ot, "__esModule", { value: !0 }), ot.DiscrError = void 0;
  var e;
  return (function(t) {
    t.Tag = "tag", t.Mapping = "mapping";
  })(e || (ot.DiscrError = e = {})), ot;
}
var No;
function js() {
  if (No) return on;
  No = 1, Object.defineProperty(on, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Y(), t = /* @__PURE__ */ Ms(), n = /* @__PURE__ */ wn(), o = /* @__PURE__ */ bn(), c = /* @__PURE__ */ ee(), i = {
    keyword: "discriminator",
    type: "object",
    schemaType: "object",
    error: {
      message: ({ params: { discrError: s, tagName: d } }) => s === t.DiscrError.Tag ? `tag "${d}" must be string` : `value of tag "${d}" must be in oneOf`,
      params: ({ params: { discrError: s, tag: d, tagName: g } }) => (0, e._)`{error: ${s}, tag: ${g}, tagValue: ${d}}`
    },
    code(s) {
      const { gen: d, data: g, schema: m, parentSchema: w, it: b } = s, { oneOf: y } = w;
      if (!b.opts.discriminator)
        throw new Error("discriminator: requires discriminator option");
      const _ = m.propertyName;
      if (typeof _ != "string")
        throw new Error("discriminator: requires propertyName");
      if (m.mapping)
        throw new Error("discriminator: mapping is not supported");
      if (!y)
        throw new Error("discriminator: requires oneOf keyword");
      const S = d.let("valid", !1), p = d.const("tag", (0, e._)`${g}${(0, e.getProperty)(_)}`);
      d.if((0, e._)`typeof ${p} == "string"`, () => h(), () => s.error(!1, { discrError: t.DiscrError.Tag, tag: p, tagName: _ })), s.ok(S);
      function h() {
        const k = v();
        d.if(!1);
        for (const a in k)
          d.elseIf((0, e._)`${p} === ${a}`), d.assign(S, u(k[a]));
        d.else(), s.error(!1, { discrError: t.DiscrError.Mapping, tag: p, tagName: _ }), d.endIf();
      }
      function u(k) {
        const a = d.name("valid"), l = s.subschema({ keyword: "oneOf", schemaProp: k }, a);
        return s.mergeEvaluated(l, e.Name), a;
      }
      function v() {
        var k;
        const a = {}, l = E(w);
        let f = !0;
        for (let z = 0; z < y.length; z++) {
          let T = y[z];
          if (T?.$ref && !(0, c.schemaHasRulesButRef)(T, b.self.RULES)) {
            const U = T.$ref;
            if (T = n.resolveRef.call(b.self, b.schemaEnv.root, b.baseId, U), T instanceof n.SchemaEnv && (T = T.schema), T === void 0)
              throw new o.default(b.opts.uriResolver, b.baseId, U);
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
  return on.default = i, on;
}
var sn = {};
const Os = "https://json-schema.org/draft/2020-12/schema", Ts = "https://json-schema.org/draft/2020-12/schema", zs = { "https://json-schema.org/draft/2020-12/vocab/core": !0, "https://json-schema.org/draft/2020-12/vocab/applicator": !0, "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0, "https://json-schema.org/draft/2020-12/vocab/validation": !0, "https://json-schema.org/draft/2020-12/vocab/meta-data": !0, "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0, "https://json-schema.org/draft/2020-12/vocab/content": !0 }, Is = "meta", Ds = "Core and Validation specifications meta-schema", qs = [{ $ref: "meta/core" }, { $ref: "meta/applicator" }, { $ref: "meta/unevaluated" }, { $ref: "meta/validation" }, { $ref: "meta/meta-data" }, { $ref: "meta/format-annotation" }, { $ref: "meta/content" }], Vs = ["object", "boolean"], Bs = "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.", Ls = { definitions: { $comment: '"definitions" has been replaced by "$defs".', type: "object", additionalProperties: { $dynamicRef: "#meta" }, deprecated: !0, default: {} }, dependencies: { $comment: '"dependencies" has been split and replaced by "dependentSchemas" and "dependentRequired" in order to serve their differing semantics.', type: "object", additionalProperties: { anyOf: [{ $dynamicRef: "#meta" }, { $ref: "meta/validation#/$defs/stringArray" }] }, deprecated: !0, default: {} }, $recursiveAnchor: { $comment: '"$recursiveAnchor" has been replaced by "$dynamicAnchor".', $ref: "meta/core#/$defs/anchorString", deprecated: !0 }, $recursiveRef: { $comment: '"$recursiveRef" has been replaced by "$dynamicRef".', $ref: "meta/core#/$defs/uriReferenceString", deprecated: !0 } }, Us = {
  $schema: Os,
  $id: Ts,
  $vocabulary: zs,
  $dynamicAnchor: Is,
  title: Ds,
  allOf: qs,
  type: Vs,
  $comment: Bs,
  properties: Ls
}, Ks = "https://json-schema.org/draft/2020-12/schema", Gs = "https://json-schema.org/draft/2020-12/meta/applicator", Hs = { "https://json-schema.org/draft/2020-12/vocab/applicator": !0 }, Js = "meta", Ws = "Applicator vocabulary meta-schema", Ys = ["object", "boolean"], Xs = { prefixItems: { $ref: "#/$defs/schemaArray" }, items: { $dynamicRef: "#meta" }, contains: { $dynamicRef: "#meta" }, additionalProperties: { $dynamicRef: "#meta" }, properties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, propertyNames: { format: "regex" }, default: {} }, dependentSchemas: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, propertyNames: { $dynamicRef: "#meta" }, if: { $dynamicRef: "#meta" }, then: { $dynamicRef: "#meta" }, else: { $dynamicRef: "#meta" }, allOf: { $ref: "#/$defs/schemaArray" }, anyOf: { $ref: "#/$defs/schemaArray" }, oneOf: { $ref: "#/$defs/schemaArray" }, not: { $dynamicRef: "#meta" } }, Zs = { schemaArray: { type: "array", minItems: 1, items: { $dynamicRef: "#meta" } } }, Qs = {
  $schema: Ks,
  $id: Gs,
  $vocabulary: Hs,
  $dynamicAnchor: Js,
  title: Ws,
  type: Ys,
  properties: Xs,
  $defs: Zs
}, ea = "https://json-schema.org/draft/2020-12/schema", ta = "https://json-schema.org/draft/2020-12/meta/unevaluated", na = { "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0 }, ra = "meta", oa = "Unevaluated applicator vocabulary meta-schema", ia = ["object", "boolean"], sa = { unevaluatedItems: { $dynamicRef: "#meta" }, unevaluatedProperties: { $dynamicRef: "#meta" } }, aa = {
  $schema: ea,
  $id: ta,
  $vocabulary: na,
  $dynamicAnchor: ra,
  title: oa,
  type: ia,
  properties: sa
}, ca = "https://json-schema.org/draft/2020-12/schema", la = "https://json-schema.org/draft/2020-12/meta/content", da = { "https://json-schema.org/draft/2020-12/vocab/content": !0 }, ua = "meta", fa = "Content vocabulary meta-schema", pa = ["object", "boolean"], ha = { contentEncoding: { type: "string" }, contentMediaType: { type: "string" }, contentSchema: { $dynamicRef: "#meta" } }, ma = {
  $schema: ca,
  $id: la,
  $vocabulary: da,
  $dynamicAnchor: ua,
  title: fa,
  type: pa,
  properties: ha
}, ga = "https://json-schema.org/draft/2020-12/schema", ya = "https://json-schema.org/draft/2020-12/meta/core", va = { "https://json-schema.org/draft/2020-12/vocab/core": !0 }, $a = "meta", ba = "Core vocabulary meta-schema", wa = ["object", "boolean"], _a = { $id: { $ref: "#/$defs/uriReferenceString", $comment: "Non-empty fragments not allowed.", pattern: "^[^#]*#?$" }, $schema: { $ref: "#/$defs/uriString" }, $ref: { $ref: "#/$defs/uriReferenceString" }, $anchor: { $ref: "#/$defs/anchorString" }, $dynamicRef: { $ref: "#/$defs/uriReferenceString" }, $dynamicAnchor: { $ref: "#/$defs/anchorString" }, $vocabulary: { type: "object", propertyNames: { $ref: "#/$defs/uriString" }, additionalProperties: { type: "boolean" } }, $comment: { type: "string" }, $defs: { type: "object", additionalProperties: { $dynamicRef: "#meta" } } }, Sa = { anchorString: { type: "string", pattern: "^[A-Za-z_][-A-Za-z0-9._]*$" }, uriString: { type: "string", format: "uri" }, uriReferenceString: { type: "string", format: "uri-reference" } }, Ca = {
  $schema: ga,
  $id: ya,
  $vocabulary: va,
  $dynamicAnchor: $a,
  title: ba,
  type: wa,
  properties: _a,
  $defs: Sa
}, ka = "https://json-schema.org/draft/2020-12/schema", Ea = "https://json-schema.org/draft/2020-12/meta/format-annotation", xa = { "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0 }, Pa = "meta", Ra = "Format vocabulary meta-schema for annotation results", Aa = ["object", "boolean"], Fa = { format: { type: "string" } }, Na = {
  $schema: ka,
  $id: Ea,
  $vocabulary: xa,
  $dynamicAnchor: Pa,
  title: Ra,
  type: Aa,
  properties: Fa
}, Ma = "https://json-schema.org/draft/2020-12/schema", ja = "https://json-schema.org/draft/2020-12/meta/meta-data", Oa = { "https://json-schema.org/draft/2020-12/vocab/meta-data": !0 }, Ta = "meta", za = "Meta-data vocabulary meta-schema", Ia = ["object", "boolean"], Da = { title: { type: "string" }, description: { type: "string" }, default: !0, deprecated: { type: "boolean", default: !1 }, readOnly: { type: "boolean", default: !1 }, writeOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 } }, qa = {
  $schema: Ma,
  $id: ja,
  $vocabulary: Oa,
  $dynamicAnchor: Ta,
  title: za,
  type: Ia,
  properties: Da
}, Va = "https://json-schema.org/draft/2020-12/schema", Ba = "https://json-schema.org/draft/2020-12/meta/validation", La = { "https://json-schema.org/draft/2020-12/vocab/validation": !0 }, Ua = "meta", Ka = "Validation vocabulary meta-schema", Ga = ["object", "boolean"], Ha = { type: { anyOf: [{ $ref: "#/$defs/simpleTypes" }, { type: "array", items: { $ref: "#/$defs/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, const: !0, enum: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/$defs/nonNegativeInteger" }, minLength: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, maxItems: { $ref: "#/$defs/nonNegativeInteger" }, minItems: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, maxContains: { $ref: "#/$defs/nonNegativeInteger" }, minContains: { $ref: "#/$defs/nonNegativeInteger", default: 1 }, maxProperties: { $ref: "#/$defs/nonNegativeInteger" }, minProperties: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, required: { $ref: "#/$defs/stringArray" }, dependentRequired: { type: "object", additionalProperties: { $ref: "#/$defs/stringArray" } } }, Ja = { nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { $ref: "#/$defs/nonNegativeInteger", default: 0 }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, Wa = {
  $schema: Va,
  $id: Ba,
  $vocabulary: La,
  $dynamicAnchor: Ua,
  title: Ka,
  type: Ga,
  properties: Ha,
  $defs: Ja
};
var Mo;
function Ya() {
  if (Mo) return sn;
  Mo = 1, Object.defineProperty(sn, "__esModule", { value: !0 });
  const e = Us, t = Qs, n = aa, o = ma, c = Ca, r = Na, i = qa, s = Wa, d = ["/properties"];
  function g(m) {
    return [
      e,
      t,
      n,
      o,
      c,
      w(this, r),
      i,
      w(this, s)
    ].forEach((b) => this.addMetaSchema(b, void 0, !1)), this;
    function w(b, y) {
      return m ? b.$dataMetaSchema(y, d) : y;
    }
  }
  return sn.default = g, sn;
}
var jo;
function Xa() {
  return jo || (jo = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv2020 = void 0;
    const n = /* @__PURE__ */ Ki(), o = /* @__PURE__ */ Ns(), c = /* @__PURE__ */ js(), r = /* @__PURE__ */ Ya(), i = "https://json-schema.org/draft/2020-12/schema";
    class s extends n.default {
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
        _ && (r.default.call(this, y), this.refs["http://json-schema.org/schema"] = i);
      }
      defaultMeta() {
        return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(i) ? i : void 0);
      }
    }
    t.Ajv2020 = s, e.exports = t = s, e.exports.Ajv2020 = s, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = s;
    var d = /* @__PURE__ */ $n();
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
    var m = /* @__PURE__ */ Kn();
    Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
      return m.default;
    } });
    var w = /* @__PURE__ */ bn();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return w.default;
    } });
  })(ut, ut.exports)), ut.exports;
}
var Za = /* @__PURE__ */ Xa();
const Qa = /* @__PURE__ */ Ri(Za), ec = "https://json-schema.org/draft/2020-12/schema", tc = "https://raw.githubusercontent.com/omsf-eco-infra/gufe-viz/main/schema/gufe-viz.schema.json", nc = "gufe-viz payload", rc = "Python-to-TypeScript contract bridge for gufe visualizations. Source of truth both languages are downstream of it. This schema is not strictly versioned or published as it is only internally consumed by this codebase. Schema description: one schema object per gufe class: every $def named *Viz is the visualization form of exactly one GufeTokenizable, it carries that object's `gufe-key`. Every reference from one gufe object to another is that object's gufe key, and the objects themselves live in the `registry` on the root payload. So a ligand network's nodes are keys, a chemical system's components and a transformation's protocol are keys and each one resolves to a complete, drawable object. An alchemical network whose forty systems share one protein carries that PDB once and points at it forty times, and the browser can still drill into it, because what it points at is a whole ProteinComponentViz. This is a single-shot dump rather than a conversation with a server, so the registry travels with the payload.", oc = [{ $ref: "#/$defs/SmallMoleculeComponentViz" }, { $ref: "#/$defs/ProteinComponentViz" }, { $ref: "#/$defs/SolvatedPDBComponentViz" }, { $ref: "#/$defs/ProteinMembraneComponentViz" }, { $ref: "#/$defs/SolventComponentViz" }, { $ref: "#/$defs/UnknownComponentViz" }, { $ref: "#/$defs/ProtocolViz" }, { $ref: "#/$defs/LigandAtomMappingViz" }, { $ref: "#/$defs/LigandNetworkViz" }, { $ref: "#/$defs/ChemicalSystemViz" }, { $ref: "#/$defs/TransformationViz" }, { $ref: "#/$defs/AlchemicalNetworkViz" }], ic = /* @__PURE__ */ JSON.parse('{"GufeKey":{"title":"GufeKey","description":"A gufe key: the identity of a GufeTokenizable, of the form \'ClassName-<hex digest>\'. It is deterministic and repeatable within a software environment. Only its non-emptiness is checked","type":"string","minLength":1},"ComponentKey":{"title":"ComponentKey","description":"A gufe key naming a ComponentViz in the registry. Identical to GufeKey at validation time: JSON Schema has no way to say \'this string is the gufe-key of an entry in that array, and that entry has this type\', because that is a join across two parts of the document. What the name buys is that the referent\'s type is stated in the contract and carried into the generated TypeScript, instead of living only in a test and a view.","$ref":"#/$defs/GufeKey"},"SmallMoleculeComponentKey":{"title":"SmallMoleculeComponentKey","description":"A gufe key naming a SmallMoleculeComponentViz in the registry. Resolving it yields the whole molecule, SDF included. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ChemicalSystemKey":{"title":"ChemicalSystemKey","description":"A gufe key naming a ChemicalSystemViz in the registry. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ProtocolKey":{"title":"ProtocolKey","description":"A gufe key naming a ProtocolViz in the registry. Every transformation of a network usually names the same one. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"Registry":{"title":"Registry","description":"The pool of gufe objects this payload refers to by key, each a complete payload object in its own right. Entries are unique by `gufe-key` and sorted by (type, gufe-key) so a committed fixture is byte-stable. JSON Schema cannot express \'unique by a property\' or \'every reference resolves\', so both are covered by tests on the Python side and degraded over by the views.","type":"array","items":{"oneOf":[{"$ref":"#/$defs/ComponentViz"},{"$ref":"#/$defs/ProtocolViz"},{"$ref":"#/$defs/ChemicalSystemViz"}]}},"ComponentViz":{"title":"ComponentViz","description":"Any single chemical-system component","oneOf":[{"$ref":"#/$defs/SmallMoleculeComponentViz"},{"$ref":"#/$defs/ProteinComponentViz"},{"$ref":"#/$defs/SolvatedPDBComponentViz"},{"$ref":"#/$defs/ProteinMembraneComponentViz"},{"$ref":"#/$defs/SolventComponentViz"},{"$ref":"#/$defs/UnknownComponentViz"}]},"SmallMoleculeComponentViz":{"title":"SmallMoleculeComponentViz","description":"A small molecule, carried as a complete SDF record.","type":"object","properties":{"type":{"const":"SmallMoleculeComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"sdf":{"type":"string","minLength":1,"description":"Complete inline SDF record, including the conformer."},"smiles":{"type":"string"},"total_charge":{"type":"integer","description":"Net formal charge. Displayed, never recomputed from the SDF."}},"required":["type","gufe-key","name","sdf","smiles","total_charge"],"additionalProperties":false},"ProteinComponentViz":{"title":"ProteinComponentViz","description":"A protein, carried as a complete PDB record.","type":"object","properties":{"type":{"const":"ProteinComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolvatedPDBComponentViz":{"title":"SolvatedPDBComponentViz","description":"A protein with explicit solvent. A distinct type rather than a flag on ProteinComponentViz, because the discriminator is what a view dispatches on and the presence of waters changes what a sensible default representation is.","type":"object","properties":{"type":{"const":"SolvatedPDBComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation, including explicit solvent."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"ProteinMembraneComponentViz":{"title":"ProteinMembraneComponentViz","description":"A protein embedded in a membrane.","type":"object","properties":{"type":{"const":"ProteinMembraneComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation of the protein and membrane system."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolventComponentViz":{"title":"SolventComponentViz","description":"Bulk solvent settings. There is no structure to draw, so these are flat fields suitable for rendering as a settings card.","type":"object","properties":{"type":{"const":"SolventComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"smiles":{"type":"string","minLength":1},"positive_ion":{"type":"string"},"negative_ion":{"type":"string"},"neutralize":{"type":"boolean"},"ion_concentration":{"type":"string","description":"Display-form concentration with units, for example \'0.15 molar\'. A string rather than a number because the unit is part of the value and the view only ever prints it."}},"required":["type","gufe-key","name","smiles","positive_ion","negative_ion","neutralize","ion_concentration"],"additionalProperties":false},"UnknownComponentViz":{"title":"UnknownComponentViz","description":"The graceful fallback for a component type this build does not recognize. gufe supports custom Component subclasses, so meeting one is an expected outcome rather than an error, and the browser answers it with \'sorry, there is no visualization for this\'. This covers an unrecognized type only: a recognized component whose serializer fails is a bug, and raises in Python rather than arriving here wearing a disguise.","type":"object","properties":{"type":{"const":"UnknownComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The gufe class name, so the panel can say which type it could not draw."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ProtocolViz":{"title":"ProtocolViz","description":"A gufe Protocol, named. Every transformation in an alchemical network usually shares one, so this is a registry entry that many edges point at rather than a class name repeated per edge. Settings are deliberately absent for now: they are large, deeply nested, and nothing draws them yet, adding a `settings` field later is additive and breaks nothing.","type":"object","properties":{"type":{"const":"ProtocolViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The Protocol\'s class name, which is what identifies it to a reader, a Protocol has no name of its own, so `name` is usually empty."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ChemicalSystemViz":{"title":"ChemicalSystemViz","description":"A gufe ChemicalSystem: labels mapped to the gufe keys of its components.","type":"object","properties":{"type":{"const":"ChemicalSystemViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"components":{"type":"object","description":"ChemicalSystem labels mapped to the gufe keys of the components in the registry.","additionalProperties":{"$ref":"#/$defs/ComponentKey"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","components"],"additionalProperties":false},"AtomMapping":{"title":"AtomMapping","description":"Atom index correspondence from molecule A to molecule B, as a list of index pairs. A list rather than an object keyed by A\'s index, because JSON object keys can only be strings: keying by index would put decimal strings such as \'12\' in the payload and leave both languages casting them back to integers, and it is Python\'s dict-of-int shape only by resemblance. As a list, both indices stay integers, and \'an entry has a B index for every A index\' becomes a `required` the schema states rather than a convention a reader has to trust. Pairs are ordered by `index_A` so a committed fixture is byte-stable.","type":"array","items":{"type":"object","properties":{"index_A":{"type":"integer","minimum":0,"description":"An atom index in molecule A."},"index_B":{"type":"integer","minimum":0,"description":"The atom index in molecule B that it maps to."}},"required":["index_A","index_B"],"additionalProperties":false}},"Annotations":{"title":"Annotations","description":"Free-form mapping metadata. gufe puts nothing here by design and every mapper picks its own keys, so this is deliberately open. Values are whatever survived being made JSON-safe. Displayed but never interpreted, with the single exception of \'score\'.","type":"object"},"LigandAtomMappingViz":{"title":"LigandAtomMappingViz","description":"One atom mapping between two small molecules. This is also what an edge of a ligand network is because the two endpoints are gufe keys either way: standalone they resolve in this object\'s own registry, and in a network they resolve in the network\'s, where they are the same entries the nodes name. `componentA` and `componentB` are the molecules the two sides of `componentA_to_componentB` index into: an `index_A` is an atom of the SmallMoleculeComponentViz that `componentA` names, and an `index_B` an atom of `componentB`\'s.","type":"object","properties":{"type":{"const":"LigandAtomMappingViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"componentA":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentB":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentA_to_componentB":{"$ref":"#/$defs/AtomMapping"},"score":{"type":["number","null"],"description":"The \'score\' annotation when it is a plain number, otherwise null. This is the one annotation key that is interpreted rather than displayed: it drives the edge colouring and the force layout\'s link distance."},"annotations":{"$ref":"#/$defs/Annotations"},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","componentA","componentB","componentA_to_componentB","score","annotations"],"additionalProperties":false},"LigandNetworkViz":{"title":"LigandNetworkViz","description":"A ligand network: the ligands in the registry, the nodes as keys into it, and the mappings as edges. Deliberately not gufe\'s GraphML: that format embeds a gufe to_json moldict per node, so forwarding it would relocate the decoding problem into the browser rather than avoid it.","type":"object","properties":{"type":{"const":"LigandNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ligand, resolved in `registry`.","items":{"$ref":"#/$defs/SmallMoleculeComponentKey"}},"edges":{"type":"array","description":"The mappings, whose `componentA` and `componentB` name nodes of this network. JSON Schema cannot express that referential constraint, so a Python test covers it, and the view drops a dangling edge with a banner rather than failing.","items":{"$ref":"#/$defs/LigandAtomMappingViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false},"TransformationViz":{"title":"TransformationViz","description":"A transformation between two chemical systems, both named by gufe key, as is its protocol: `stateA` is the system it starts from, `stateB` the one it ends at, and every edge of a network usually names the same protocol. This is also what an edge of an alchemical network is (there is no separate edge type) because `stateA` and `stateB` are keys either way, and in a network they are the keys the nodes name. NonTransformation uses this type too: it exposes the same stateA and stateB properties, both its single system, so it renders as a diff with no differences.","type":"object","properties":{"type":{"const":"TransformationViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"protocol":{"$ref":"#/$defs/ProtocolKey"},"stateA":{"$ref":"#/$defs/ChemicalSystemKey"},"stateB":{"$ref":"#/$defs/ChemicalSystemKey"},"mappings":{"type":"array","items":{"$ref":"#/$defs/LigandAtomMappingViz"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","protocol","stateA","stateB","mappings"],"additionalProperties":false},"AlchemicalNetworkViz":{"title":"AlchemicalNetworkViz","description":"A graph of chemical systems joined by transformations. What repeats here is not the nodes and edges themselves but what they are made of: in practice every system shares one protein and every transformation shares one protocol. Both live in the registry, once, as whole objects so this view can show composition and topology while still letting a reader open a node and see the protein.","type":"object","properties":{"type":{"const":"AlchemicalNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ChemicalSystem, resolved in `registry`.","items":{"$ref":"#/$defs/ChemicalSystemKey"}},"edges":{"type":"array","description":"The transformations, whose `stateA` and `stateB` name nodes of this network.","items":{"$ref":"#/$defs/TransformationViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false}}'), Wn = {
  $schema: ec,
  $id: tc,
  title: nc,
  description: rc,
  oneOf: oc,
  $defs: ic
}, El = [
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
], Yn = Wn.$id, Xn = new Qa({ allErrors: !0, strict: !1 });
Xn.addSchema(Wn, Yn);
const Oo = Xn.getSchema(Yn), ri = Object.entries(Wn.$defs).filter(
  ([e, t]) => t.properties?.type?.const === e
).map(([e]) => e).sort(), xl = ri, Zn = /* @__PURE__ */ new Map();
for (const e of ri) {
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
function sc(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return {
      valid: !1,
      issues: [{ path: "", message: "must be a JSON object" }]
    };
  const t = e.type, n = typeof t == "string" ? Zn.get(t) : void 0;
  return n ? n(e) ? qn : { valid: !1, issues: Vn(n.errors) } : Oo(e) ? qn : { valid: !1, issues: Vn(Oo.errors) };
}
function Pl(e, t) {
  const n = Zn.get(e);
  return n ? n(t) ? qn : { valid: !1, issues: Vn(n.errors) } : {
    valid: !1,
    issues: [
      { path: "", message: `unknown payload type ${JSON.stringify(e)}` }
    ]
  };
}
function ac(e, t = 8) {
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
function oi(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return {
      message: "This does not look like a gufe-viz payload (expected a JSON object)."
    };
  const { type: t } = e;
  if (typeof t != "string" || !t)
    return {
      message: "This payload has no `type`, so there is nothing to say what it is."
    };
  if (!Qn[t]) return cc(t);
  const { valid: n, issues: o } = sc(e);
  return n ? null : {
    message: `This payload says it is a ${t}, but it does not match the gufe-viz schema.`,
    detail: ac(o)
  };
}
function cc(e) {
  const t = Object.keys(Qn).sort().join(", ");
  return {
    message: `Sorry, there is no visualization for ${e} yet. This build can draw: ${t}.`
  };
}
function Rl(e) {
  return oi(e)?.message ?? null;
}
class lc extends Se {
  placeholder() {
    return "Waiting for data...";
  }
  renderView(t, n) {
    xi("payload", n, this);
    const o = oi(n);
    if (o)
      return t.appendChild(dc(o, n)), {};
    const c = n.type, r = Qn[c], i = document.createElement(r);
    return i.style.cssText = "flex:1;min-height:0;min-width:0;", i.payload = n, t.appendChild(i), {
      onResize: () => i.resize?.(),
      // Removing the child fires its own `disconnectedCallback`, which is where
      // its viewers and observers are released
      cleanup: () => i.remove()
    };
  }
}
function dc(e, t) {
  const n = N(
    "div",
    "flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:32px;"
  );
  n.appendChild(ie(e.message));
  const o = (r, i) => N(
    "div",
    "max-width:640px;padding:8px 12px;border-radius:6px;font-size:11px;white-space:pre-wrap;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;overflow-wrap:anywhere;" + (i ? `background:${P.warnBg};color:${P.warnFg};border:1px solid ${P.warnBorder};` : `background:${P.panelBg};color:${P.textMuted2};border:1px solid ${P.cardBorder};`),
    r
  );
  e.detail && n.appendChild(o(e.detail, !0));
  const c = uc(t);
  return c && n.appendChild(o(c, !1)), n;
}
function uc(e) {
  if (e == null || typeof e != "object") return null;
  const t = e, n = [];
  typeof t.type == "string" && n.push(`type: ${dn(t.type)}`), typeof t.name == "string" && t.name && n.push(`name: ${dn(t.name)}`);
  const o = Object.keys(e);
  return o.length && n.push(
    `keys: ${o.slice(0, 12).join(", ")}${o.length > 12 ? ", ..." : ""}`
  ), n.length ? n.join(`
`) : null;
}
Ce("gufe-view", lc);
const er = {
  threeDmol: "https://3dmol.org/build/3Dmol-min.js",
  rdkit: "https://unpkg.com/@rdkit/rdkit/dist/RDKit_minimal.js",
  d3: "https://cdn.jsdelivr.net/npm/d3@7/+esm"
};
function tr(e) {
  const t = globalThis.__gufeEngines?.[e];
  return t ? Promise.resolve(t) : null;
}
function ii(e, t) {
  return new Promise((n, o) => {
    const c = document.createElement("script");
    c.src = e, c.onload = () => n(), c.onerror = () => o(new Error(`Failed to load ${t}`)), document.head.appendChild(c);
  });
}
let Ve = null, Je = null;
function nr() {
  if (Je) return Je;
  const e = tr("threeDmol");
  return e ? (Je = e.then((t) => Ve = t || window.$3Dmol), Je) : (Je = (async () => {
    if (window.$3Dmol) return Ve = window.$3Dmol;
    if (await ii(er.threeDmol, "3Dmol.js"), !window.$3Dmol) throw new Error("3Dmol.js loaded but $3Dmol is undefined");
    return Ve = window.$3Dmol;
  })(), Je);
}
let We = null;
function rr() {
  if (We) return We;
  const e = tr("rdkit");
  return e ? (We = e.then((t) => window.RDKit = t), We) : (We = (async () => {
    if (window.RDKit) return window.RDKit;
    if (await ii(er.rdkit, "RDKit"), !window.initRDKitModule) throw new Error("RDKit loaded but initRDKitModule is undefined");
    return window.RDKit = await window.initRDKitModule();
  })(), We);
}
let Tn = null;
function si() {
  if (!Tn) {
    const e = er.d3;
    Tn = tr("d3") ?? import(
      /* @vite-ignore */
      e
    );
  }
  return Tn;
}
function ai(e, t) {
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
    t.hint && !o && (o = !0, pc(e, t.hint));
  };
  return e.addEventListener("wheel", i, { passive: !1, capture: !0 }), e.addEventListener("pointerdown", c), e.addEventListener("pointerenter", c), e.addEventListener("pointerleave", r), {
    cleanup() {
      e.removeEventListener("wheel", i, { capture: !0 }), e.removeEventListener("pointerdown", c), e.removeEventListener("pointerenter", c), e.removeEventListener("pointerleave", r);
    }
  };
}
const fc = 1600;
function pc(e, t) {
  const n = N(
    "div",
    "position:absolute;bottom:12px;left:50%;transform:translateX(-50%);z-index:30;pointer-events:none;padding:5px 12px;border-radius:6px;font-size:11px;white-space:nowrap;background:rgba(0,0,0,0.72);color:#ffffff;transition:opacity .3s ease;",
    t
  );
  e.appendChild(n), setTimeout(() => {
    n.style.opacity = "0", setTimeout(() => n.remove(), 300);
  }, fc);
}
const hc = { min: 0.25, max: 12 };
function mc(e, t = hc) {
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
const gc = 2e-3;
function yc(e) {
  return Math.exp(-e.deltaY * gc);
}
function or(e, t, n = {}) {
  const o = mc(t, n.bounds), c = ai(e, {
    hint: n.hint ?? "Click or hold Ctrl to zoom",
    onZoom: (r) => o.zoomBy(yc(r))
  });
  return { ...o, cleanup: c.cleanup };
}
function _n(e, t = "Reset view") {
  const n = N("button", Oe, "Reset");
  return n.title = t, n.setAttribute("aria-label", t), n.onclick = e, n;
}
const De = {
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
], Al = "hsv", I = [0, 0, 0], vc = {
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
}, $c = {
  atomColourPalette: vc,
  addAtomIndices: !0,
  continuousHighlight: !1
}, ci = `
`, To = "$$$$";
function an(e, t) {
  if (!e || !e.trim()) throw new Error("empty SDF");
  const n = e.replace(/\r/g, "").split(ci);
  if (n.length < 4) throw new Error("SDF too short");
  const o = n[3];
  if (o.indexOf("V3000") !== -1) throw new Error("V3000 molfiles are not supported");
  const c = parseInt(o.substring(0, 3), 10), r = parseInt(o.substring(3, 6), 10);
  if (!isFinite(c) || c <= 0) throw new Error(`bad counts line: ${o}`);
  const i = [], s = [];
  for (let m = 0; m < c; m++) {
    const w = n[4 + m];
    if (w == null) throw new Error("truncated atom block");
    i.push([
      parseFloat(w.substring(0, 10)) || 0,
      parseFloat(w.substring(10, 20)) || 0,
      parseFloat(w.substring(20, 30)) || 0
    ]), s.push(w.substring(31, 34).trim() || "X");
  }
  const d = [];
  for (let m = 0; m < (isFinite(r) ? r : 0); m++) {
    const w = n[4 + c + m];
    if (w == null) break;
    const b = parseInt(w.substring(0, 3), 10), y = parseInt(w.substring(3, 6), 10), _ = parseInt(w.substring(6, 9), 10);
    !isFinite(b) || !isFinite(y) || d.push([b - 1, y - 1, isFinite(_) ? _ : 1]);
  }
  return { name: (n[0] || "").trim() || t || "molecule", symbols: s, bonds: d, coords: i };
}
const ct = (e) => e.indexOf(To) >= 0 ? e : `${e}${ci}${To}`;
function bc(e) {
  const t = String(e).split(/\r?\n/);
  if (t.length < 4) return null;
  const n = parseInt(t[3].slice(0, 3), 10), o = parseInt(t[3].slice(3, 6), 10);
  return isNaN(n) || isNaN(o) ? null : { atoms: n, bonds: o };
}
function li(e, t, n) {
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
function di(e, t, n) {
  e.innerHTML = t;
  const o = e.querySelector("svg");
  o && (o.removeAttribute("width"), o.removeAttribute("height"), o.getAttribute("viewBox") || o.setAttribute("viewBox", `0 0 ${n} ${n}`), o.setAttribute("preserveAspectRatio", "xMidYMid meet"), o.setAttribute("style", "width:100%;height:100%;max-width:100%;max-height:100%;"));
}
function wc(e, t, n, o, c = {}) {
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
        ...$c,
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
const _c = [
  { id: "stick", label: "Stick", title: "Sticks only" },
  { id: "ball", label: "Ball+Stick", title: "Ball and stick" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" }
], zo = {
  stick: { stick: { radius: 0.15, colorscheme: "Jmol" } },
  ball: { stick: { radius: 0.12, colorscheme: "Jmol" }, sphere: { scale: 0.28, colorscheme: "Jmol" } },
  sphere: { sphere: { scale: 1, colorscheme: "Jmol" } }
}, Io = 400;
class Sc extends Se {
  placeholder() {
    return "Waiting for a SmallMoleculeComponent payload...";
  }
  renderView(t, n) {
    const o = n.sdf, c = n.name ?? "", r = n.smiles, i = n.total_charge;
    t.appendChild(Ne(c || "Unnamed molecule", "SmallMoleculeComponent"));
    const s = N("div", "flex:1;display:flex;flex-direction:row;overflow:hidden;min-height:0;");
    t.appendChild(s);
    const d = N("div", "flex:1 1 50%;min-width:0;display:flex;flex-direction:column;"), g = N("div", "flex:1 1 50%;min-width:0;display:flex;flex-direction:column;position:relative;");
    s.appendChild(d), s.appendChild(N("div", `width:1px;flex-shrink:0;background:${P.splitBorder};`)), s.appendChild(g);
    const m = (f) => N("div", `flex-shrink:0;padding:4px 10px;font-size:12px;font-weight:bold;color:${P.labelFg};background:${P.labelBg};`, f);
    d.appendChild(m("2D"));
    const w = N(
      "div",
      `flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:8px;background:${P.canvas2DBg};`
    );
    d.appendChild(w), g.appendChild(m("3D"));
    const b = Un();
    g.appendChild(b.wrap);
    const y = N(
      "div",
      `flex-shrink:0;display:flex;flex-wrap:wrap;align-items:baseline;gap:6px 20px;padding:8px 16px;font-size:12px;background:${P.toolbarBg};border-top:1px solid ${P.toolbarBorder};color:${P.textPrimary};`
    );
    t.appendChild(y);
    const _ = o ? bc(o) : null, S = [
      ["Name", c || Xe, !1],
      ["SMILES", r || Xe, !0],
      ["Charge", i == null ? Xe : String(i), !1],
      ["Atoms", _ ? String(_.atoms) : Xe, !1],
      ["Bonds", _ ? String(_.bonds) : Xe, !1]
    ];
    for (const [f, E, x] of S) {
      const F = N("div", "display:flex;align-items:baseline;gap:6px;min-width:0;");
      F.appendChild(
        N(
          "span",
          `font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;flex-shrink:0;color:${P.textMuted2};`,
          f
        )
      );
      const z = N(
        "span",
        `user-select:text;cursor:text;color:${P.textPrimary}` + (x ? ";font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:11px;overflow-wrap:anywhere;" : ""),
        E
      );
      z.title = E, F.appendChild(z), y.appendChild(F);
    }
    if (!o || !o.trim())
      return w.appendChild(ie("No molecule provided")), b.container.appendChild(ie("No molecule provided")), {};
    w.appendChild(ie("Loading 2D depiction...")), rr().then((f) => {
      const E = li(f, o, Io);
      E ? di(w, E, Io) : w.replaceChildren(ie("Failed to parse molecule", !0));
    }).catch((f) => {
      w.replaceChildren(ie(`RDKit failed to load: ${me(f)}`, !0));
    });
    let p = null, h = null, u = "stick", v = !1;
    const k = N(
      "div",
      `position:absolute;bottom:10px;right:10px;display:flex;gap:4px;padding:4px;border-radius:6px;z-index:10;background:${P.switcherBg};box-shadow:0 2px 8px rgba(0,0,0,0.25);`
    );
    k.appendChild(
      gn(_c, u, (f) => {
        u = f, p && (p.setStyle({}, zo[f]), p.render());
      })
    );
    const a = N("button", `${Oe}margin-left:4px;`, "Spin");
    a.title = "Toggle continuous rotation", a.onclick = () => {
      v = !v, a.style.background = v ? P.btnBgActive : P.btnBg;
      try {
        p?.spin(v ? "y" : !1);
      } catch {
      }
    }, k.appendChild(a);
    const l = _n(() => h?.reset());
    return l.style.marginLeft = "4px", k.appendChild(l), g.appendChild(k), b.container.appendChild(ie("Loading 3D viewer...")), nr().then(() => {
      b.container.replaceChildren(), p = Ve.createViewer(b.container, { backgroundColor: P.viewerBg }), p.addModel(ct(o), "sdf"), p.setStyle({}, zo[u]), p.zoomTo(), p.render(), h = or(b.container, p);
    }).catch((f) => {
      b.container.replaceChildren(ie(`3D render failed: ${me(f)}`, !0));
    }), {
      onResize() {
        p && (p.resize(), p.render());
      },
      cleanup() {
        if (h?.cleanup(), h = null, !!p) {
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
Ce("gufe-small-molecule", Sc);
const ui = ["HOH", "WAT", "SOL", "TIP3"], Do = { hetflag: !1 }, Cc = { hetflag: !0 }, kc = { resn: ui }, je = {
  stick: { radius: 0.15 },
  sphere: { scale: 0.3 },
  hetero: { stickRadius: 0.2, sphereScale: 0.28 },
  water: { stickRadius: 0.05, sphereScale: 0.18 },
  surfaceOpacity: 0.85,
  /** Above this many atoms a surface is slow enough to be worth warning about. */
  surfaceAtomWarn: 4e4
};
function Ec(e) {
  const t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
  let o = 0, c = 0, r = 0, i = 1 / 0, s = -1 / 0;
  for (const d of e.split(/\r?\n/)) {
    const g = d.slice(0, 6);
    if (g === "ENDMDL") break;
    if (g !== "ATOM  " && g !== "HETATM") continue;
    o++, g === "HETATM" && c++;
    const m = d.slice(17, 20).trim(), w = d.slice(21, 22).trim() || "_", b = d.slice(22, 26).trim(), y = d.slice(26, 27).trim();
    ui.indexOf(m) !== -1 && r++, t.add(w), n.add(`${w}|${b}${y}|${m}`);
    const _ = parseInt(b, 10);
    isNaN(_) || (_ < i && (i = _), _ > s && (s = _));
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
function xc(e) {
  return `${tt(e.chains)} chains · ${tt(e.residues)} residues · ${tt(e.atoms)} atoms · ${tt(e.hetatms)} HETATM` + (e.waters > 0 ? ` (${tt(e.waters)} water)` : "");
}
function Pc(e, t) {
  return e === "chain" ? { colorscheme: "chain" } : e === "ss" ? { colorscheme: "ssJmol" } : e === "spectrum" && t && t.resiMax > t.resiMin ? { colorscheme: { prop: "resi", gradient: "roygb", min: t.resiMin, max: t.resiMax } } : { colorscheme: "Jmol" };
}
function qo(e, t, n, o) {
  const c = o || (() => {
  }), r = Pc(t.color, n);
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
    Cc,
    t.hetero ? {
      stick: { radius: je.hetero.stickRadius, colorscheme: "Jmol" },
      sphere: { scale: je.hetero.sphereScale, colorscheme: "Jmol" }
    } : {}
  ), e.setStyle(
    kc,
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
        e.addSurface(Ve.SurfaceType.VDW, { opacity: je.surfaceOpacity, ...r }, Do)
      ).then(() => {
        c(null), e.render();
      }).catch((i) => c(`Surface failed: ${me(i)}`, "error"));
    } catch (i) {
      c(`Surface failed: ${me(i)}`, "error");
    }
  }, 30);
}
const Rc = [
  { id: "cartoon", label: "Cartoon", title: "Ribbon / cartoon backbone" },
  { id: "surface", label: "Surface", title: "Molecular (VDW) surface" },
  { id: "stick", label: "Stick", title: "All-atom sticks" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" }
], Ac = [
  { id: "chain", label: "Chain" },
  { id: "spectrum", label: "Spectrum" },
  { id: "ss", label: "Secondary structure" },
  { id: "element", label: "Element" }
], Fc = {
  ProteinComponentViz: "ProteinComponent",
  SolvatedPDBComponentViz: "SolvatedPDBComponent",
  ProteinMembraneComponentViz: "ProteinMembraneComponent"
};
class Nc extends Se {
  placeholder() {
    return "Waiting for a ProteinComponent payload...";
  }
  renderView(t, n) {
    const o = n.pdb, c = n.name ?? "", r = Fc[n.type] ?? "ProteinComponent", s = { rep: "cartoon", color: "chain", waters: n.type !== "ProteinComponentViz", hetero: !0 };
    let d = null, g = null, m = null;
    const w = N(
      "div",
      `display:flex;align-items:center;gap:14px;flex-wrap:wrap;padding:8px 14px;flex-shrink:0;font-size:12px;background:${P.toolbarBg};border-bottom:1px solid ${P.toolbarBorder};color:${P.textPrimary};`
    );
    t.appendChild(w), w.appendChild(
      N("span", `font-weight:700;font-size:14px;letter-spacing:.02em;color:${P.titleColor};`, c || "Protein")
    ), w.appendChild(N("span", `font-size:11px;color:${P.textMuted2};`, r));
    const b = (a) => N("span", `font-size:11px;color:${P.textMuted};`, a);
    w.appendChild(b("Style:")), w.appendChild(
      gn(Rc, s.rep, (a) => {
        s.rep = a, k();
      })
    ), w.appendChild(b("Color:"));
    const y = N("select", un);
    for (const a of Ac) {
      const l = N("option", "", a.label);
      l.value = a.id, y.appendChild(l);
    }
    y.value = s.color, y.addEventListener("change", () => {
      s.color = y.value, k();
    }), w.appendChild(y);
    const _ = N("div", "display:flex;gap:4px;");
    w.appendChild(_);
    const S = [
      ["waters", "Waters", "Show water molecules", () => k()],
      ["hetero", "Hetero", "Show hetero atoms / ligands / ions / lipids", () => k()],
      ["spin", "Spin", "Rotate the view continuously", () => d?.spin(s.spin ? "y" : !1)]
    ];
    for (const [a, l, f, E] of S) {
      const x = N("button", Oe, l);
      x.title = f, x.style.background = s[a] ? P.btnBgActive : P.btnBg, x.onclick = () => {
        s[a] = !s[a], x.style.background = s[a] ? P.btnBgActive : P.btnBg, E();
      }, _.appendChild(x);
    }
    _.appendChild(_n(() => g?.reset()));
    const p = N("span", `margin-left:auto;font-size:11px;white-space:nowrap;color:${P.textMuted2};`);
    w.appendChild(p);
    const h = Un();
    t.appendChild(h.wrap);
    const u = N(
      "div",
      "position:absolute;top:12px;left:50%;transform:translateX(-50%);padding:6px 14px;border-radius:6px;font-size:12px;z-index:20;display:none;pointer-events:none;"
    );
    h.wrap.appendChild(u);
    const v = (a, l) => {
      if (a == null) {
        u.style.display = "none";
        return;
      }
      u.textContent = a, u.style.display = "block";
      const f = l === "error";
      u.style.background = f ? P.warnBg : P.toolbarBg, u.style.color = f ? P.warnFg : P.textMuted, u.style.border = `1px solid ${f ? P.warnBorder : P.toolbarBorder}`;
    };
    function k() {
      d && qo(d, s, m, v);
    }
    if (!o || !o.trim())
      return v("No protein data - waiting for a PDB payload."), {};
    try {
      m = Ec(o), p.textContent = xc(m);
    } catch (a) {
      v(`⚠ PDB parse error: ${me(a)}`, "error");
    }
    return v("Loading 3D viewer..."), nr().then(() => {
      d = Ve.createViewer(h.container, { backgroundColor: P.viewerBg }), d.addModel(o, "pdb"), qo(d, s, m, v), d.zoomTo(), d.spin(s.spin ? "y" : !1), d.render(), g = or(h.container, d);
    }).catch((a) => {
      v(`⚠ Failed to render structure: ${me(a)}`, "error");
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
Ce("gufe-protein", Nc);
const fi = "http://www.w3.org/2000/svg";
function oe(e, t = {}) {
  const n = document.createElementNS(fi, e);
  for (const [o, c] of Object.entries(t)) n.setAttribute(o, String(c));
  return n;
}
function Ze(e, t) {
  const n = document.createElementNS(fi, "title");
  return n.textContent = t, e.appendChild(n), e;
}
function dt(e) {
  const t = /* @__PURE__ */ new Map();
  return Bn(e, t, /* @__PURE__ */ new Set()), t;
}
function Bn(e, t, n) {
  if (e == null || typeof e != "object" || n.has(e)) return;
  if (n.add(e), Array.isArray(e)) {
    for (const c of e) Bn(c, t, n);
    return;
  }
  const o = e.registry;
  if (Array.isArray(o))
    for (const c of o) {
      const r = c["gufe-key"];
      typeof r == "string" && r && !t.has(r) && t.set(r, c);
    }
  for (const c of Object.values(e)) Bn(c, t, n);
}
function Be(e, t) {
  return t ? e.get(t) : void 0;
}
function Pe(e, t, n) {
  const o = Be(e, t);
  return o?.type === n ? o : void 0;
}
function Qe(e) {
  return e.name ? e.name : (e["gufe-key"].split("-").pop() ?? e["gufe-key"]).slice(0, 6);
}
function Mc(e, t) {
  if (t <= 0) return it[0];
  const n = t === 1 ? 0 : e / (t - 1), o = it.length, c = Math.max(0, Math.min(o - 1, n * (o - 1))), r = Math.floor(c), i = Math.min(o - 1, r + 1), s = c - r;
  if (s === 0) return it[r];
  const d = (b) => {
    const y = parseInt(b.replace("#", ""), 16);
    return [y >> 16 & 255, y >> 8 & 255, y & 255];
  }, g = d(it[r]), m = d(it[i]);
  return `#${g.map((b, y) => Math.round(b + (m[y] - b) * s)).map((b) => b.toString(16).padStart(2, "0")).join("")}`;
}
function jc(e, t) {
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
const Oc = 1.5;
function Tc(e, t, n, o) {
  const c = [...e.entries()], r = [];
  return c.forEach(([i, s], d) => {
    const g = t[i], m = n[s];
    !g || !m || r.push({
      a: [g[0] - o, g[1], g[2]],
      b: [m[0] + o, m[1], m[2]],
      color: Mc(d, c.length),
      indexA: i,
      indexB: s
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
    const r = 4 + c, i = n[r];
    if (!i || i.length < 30) continue;
    const s = Number(i.slice(0, 10));
    Number.isFinite(s) && (n[r] = (s + t).toFixed(4).padStart(10) + i.slice(10));
  }
  return n.join(`
`);
}
const Bo = 420, Lo = { radius: 0.6, alpha: 0.8 }, zn = { radius: 0.05, dashed: !0, opacity: 0.75 }, zc = [
  { id: "changes", label: "Changes", title: "Highlight what differs, as gufe draws it" },
  { id: "mapped", label: "Mapped", title: "Highlight the atoms that carry over instead" }
];
function pi(e) {
  const t = parseInt(e.replace("#", ""), 16);
  return [(t >> 16 & 255) / 255, (t >> 8 & 255) / 255, (t & 255) / 255];
}
const Ic = pi(De.elementChange), Dc = pi(De.uniqueAtom);
function Uo(e, t, n) {
  const o = [], c = [], r = [];
  for (let i = 0; i < t.length; i++) {
    const s = e.get(i);
    s === void 0 ? o.push(i) : t[i] !== n[s] ? c.push(i) : r.push(i);
  }
  return { atoms: o, elements: c, mapped: r };
}
function qc(e, t) {
  if (t === "mapped")
    return { atoms: [...e.mapped, ...e.elements], colors: {} };
  const n = {};
  for (const o of e.elements) n[o] = Ic;
  for (const o of e.atoms) n[o] = Dc;
  return { atoms: [...e.elements, ...e.atoms], colors: n };
}
function Vc(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e.componentA_to_componentB ?? [])
    Number.isInteger(n?.index_A) && Number.isInteger(n?.index_B) && t.set(n.index_A, n.index_B);
  return t;
}
function hi(e, t) {
  const n = Pe(t, e.componentA, "SmallMoleculeComponentViz"), o = Pe(t, e.componentB, "SmallMoleculeComponentViz");
  return !n || !o ? null : { ...e, registry: n["gufe-key"] === o["gufe-key"] ? [n] : [n, o] };
}
class Bc extends Se {
  placeholder() {
    return "Waiting for a LigandAtomMapping payload...";
  }
  renderView(t, n) {
    const o = dt(n), c = Pe(o, n.componentA, "SmallMoleculeComponentViz"), r = Pe(o, n.componentB, "SmallMoleculeComponentViz"), i = Ne(n.name || "Atom mapping", "LigandAtomMapping");
    if (t.appendChild(i), !c || !r)
      return t.appendChild(
        ie("This mapping names two molecules, and its registry does not hold them.")
      ), {};
    const s = Qe(c), d = Qe(r), g = Vc(n);
    let m, w;
    try {
      m = an(c.sdf, s).symbols, w = an(r.sdf, d).symbols;
    } catch (C) {
      return t.appendChild(ie(`Could not read a molecule: ${me(C)}`, !0)), {};
    }
    const b = /* @__PURE__ */ new Map();
    for (const [C, O] of g) b.set(O, C);
    const y = Uo(g, m, w), _ = Uo(b, w, m);
    let S = "changes";
    i.statsEl.appendChild(ce("mapped atoms", String(g.size))), i.statsEl.appendChild(
      ce("element changes", String(y.elements.length), De.elementChange)
    ), i.statsEl.appendChild(
      ce(`unique to ${s}`, String(y.atoms.length), De.uniqueAtom)
    ), i.statsEl.appendChild(
      ce(`unique to ${d}`, String(_.atoms.length), De.uniqueAtom)
    ), i.statsEl.appendChild(ce("score", n.score == null ? Xe : n.score.toFixed(3)));
    const p = N(
      "div",
      `display:flex;align-items:center;gap:12px;flex-wrap:wrap;padding:7px 14px;flex-shrink:0;font-size:12px;background:${P.toolbarBg};border-bottom:1px solid ${P.toolbarBorder};color:${P.textMuted};`
    );
    p.appendChild(N("span", `font-size:11px;color:${P.textMuted};`, "Highlight:")), p.appendChild(
      gn(zc, S, (C) => {
        S = C, $();
      })
    );
    const h = N("div", "display:flex;align-items:center;gap:12px;margin-left:auto;font-size:11px;");
    h.appendChild(ce("element change", "", De.elementChange)), h.appendChild(ce("unique atom", "", De.uniqueAtom)), p.appendChild(h), t.appendChild(p);
    const u = N("div", "flex:1;min-height:0;display:flex;flex-direction:column;");
    t.appendChild(u);
    const v = N("div", "flex:1 1 55%;min-height:0;display:flex;flex-direction:row;");
    u.appendChild(v);
    const k = (C) => {
      const O = N("div", "flex:1 1 50%;min-width:0;display:flex;flex-direction:column;");
      O.appendChild(
        N(
          "div",
          `flex-shrink:0;padding:4px 10px;font-size:12px;font-weight:bold;color:${P.labelFg};background:${P.labelBg};`,
          C
        )
      );
      const K = N(
        "div",
        `flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:8px;background:${P.canvas2DBg};`
      );
      return O.appendChild(K), v.appendChild(O), K;
    }, a = (C) => N(
      "div",
      `flex-shrink:0;padding:4px 10px;font-size:12px;font-weight:bold;color:${P.labelFg};background:${P.labelBg};`,
      C
    ), l = k(s);
    v.appendChild(N("div", `width:1px;flex-shrink:0;background:${P.splitBorder};`));
    const f = k(d), E = N("div", "flex:1 1 45%;min-height:180px;display:flex;flex-direction:column;position:relative;");
    u.appendChild(N("div", `height:1px;flex-shrink:0;background:${P.splitBorder};`)), u.appendChild(E), E.appendChild(a("3D overlay"));
    const x = Un();
    E.appendChild(x.wrap);
    const F = an(c.sdf, s).coords, z = an(r.sdf, d).coords, T = jc(F, z) * Oc, D = Tc(g, F, z, T);
    let U = null, te = null, J = !0;
    const se = () => {
      if (U) {
        U.removeAllShapes();
        for (const C of D) {
          for (const O of [C.a, C.b])
            U.addSphere({
              center: { x: O[0], y: O[1], z: O[2] },
              radius: Lo.radius,
              color: C.color,
              alpha: Lo.alpha
            });
          J && U.addCylinder({
            start: { x: C.a[0], y: C.a[1], z: C.a[2] },
            end: { x: C.b[0], y: C.b[1], z: C.b[2] },
            radius: zn.radius,
            color: C.color,
            dashed: zn.dashed,
            opacity: zn.opacity
          });
        }
        U.render();
      }
    }, W = N(
      "div",
      `position:absolute;bottom:10px;right:10px;display:flex;gap:4px;padding:4px;border-radius:6px;z-index:10;background:${P.switcherBg};box-shadow:0 2px 8px rgba(0,0,0,0.25);`
    ), ae = N("button", Oe, "Lines");
    ae.title = "Draw a line between each mapped pair", ae.style.background = P.btnBgActive, ae.onclick = () => {
      J = !J, ae.style.background = J ? P.btnBgActive : P.btnBg, se();
    }, W.appendChild(ae), W.appendChild(_n(() => te?.reset())), E.appendChild(W), x.container.appendChild(ie("Loading 3D viewer...")), nr().then(() => {
      x.container.replaceChildren(), U = Ve.createViewer(x.container, { backgroundColor: P.viewerBg }), U.addModel(ct(Vo(c.sdf, -T)), "sdf"), U.addModel(ct(Vo(r.sdf, T)), "sdf"), U.addModel(ct(c.sdf), "sdf"), U.addModel(ct(r.sdf), "sdf"), U.setStyle({}, { stick: { radius: 0.12, colorscheme: "Jmol" } }), se(), U.zoomTo(), U.render(), te = or(x.container, U);
    }).catch((C) => {
      x.container.replaceChildren(ie(`3D render failed: ${me(C)}`, !0));
    });
    const B = N(
      "div",
      `flex-shrink:0;max-height:96px;overflow:auto;padding:8px 14px;font-size:11px;line-height:1.6;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;color:${P.textMuted};background:${P.panelBg};border-top:1px solid ${P.toolbarBorder};`
    );
    B.textContent = g.size ? Array.from(g, ([C, O]) => `${C} -> ${O}`).join("   ") : "This mapping relates no atoms at all.", t.appendChild(B);
    const A = Object.entries(n.annotations ?? {}).filter(([C]) => C !== "score");
    if (A.length) {
      const C = N(
        "div",
        `flex-shrink:0;padding:6px 14px;font-size:11px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;color:${P.textMuted2};background:${P.panelBg};border-top:1px solid ${P.toolbarBorder};`
      );
      C.textContent = A.map(([O, K]) => `${O}: ${String(K)}`).join("    "), t.appendChild(C);
    }
    let q = null;
    const M = (C, O, K) => {
      if (!q) return;
      const { atoms: G, colors: ne } = qc(K, S), Q = wc(q, O, Bo, G, ne);
      C.replaceChildren(), Q ? di(C, Q, Bo) : C.appendChild(ie("Failed to parse molecule", !0));
    }, $ = () => {
      M(l, c.sdf, y), M(f, r.sdf, _);
    };
    return l.appendChild(ie("Loading 2D depiction...")), f.appendChild(ie("Loading 2D depiction...")), rr().then((C) => {
      q = C, $();
    }).catch((C) => {
      const O = `RDKit failed to load: ${me(C)}`;
      l.replaceChildren(ie(O, !0)), f.replaceChildren(ie(O, !0));
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
Ce("gufe-atom-mapping", Bc);
const Lc = ["Force-directed", "Circular", "Radial"], mn = 34, cn = 200, In = 1.5, Uc = 6, Kc = 16, Ko = { captions: 0.5, depictions: 1.1 }, ln = 200, Dn = { node: 0.12, edge: 0.06 }, Gc = 1.2, ve = {
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
function Hc(e) {
  const t = parseInt(e.replace("#", ""), 16);
  return [t >> 16 & 255, t >> 8 & 255, t & 255];
}
function Jc(e) {
  const [t, n] = P.netEdgeRamp.map(Hc), o = Math.max(0, Math.min(1, e ?? 0.5));
  return `rgb(${t.map((r, i) => Math.round(r + (n[i] - r) * o)).join(",")})`;
}
const $e = Qe, Wc = (e, t) => e.length > t ? `${e.slice(0, t - 1)}...` : e;
function Yc(e) {
  const t = /* @__PURE__ */ new Set();
  let n = /* @__PURE__ */ new Set();
  const o = (r, i) => {
    if (t.has(i) || n.has(i)) return;
    const s = e.nodes[i], d = s.sdf && li(r, s.sdf, cn);
    if (!d) {
      n.add(i);
      return;
    }
    const g = new DOMParser().parseFromString(d, "image/svg+xml").documentElement;
    if (!g || g.nodeName.toLowerCase() === "parsererror") {
      n.add(i);
      return;
    }
    const m = (mn - 4) * 2 / cn, w = e.depictionGroups[i];
    w.setAttribute(
      "transform",
      `translate(${-m * cn / 2},${-m * cn / 2}) scale(${m})`
    );
    let b = 0;
    for (const y of Array.from(g.childNodes)) {
      if (y.nodeType !== 1) continue;
      const _ = y.nodeName.toLowerCase();
      if (!(_ === "defs" || _ === "metadata" || _ === "title")) {
        if (_ === "rect") {
          const S = (y.getAttribute("fill") ?? "").toLowerCase();
          if (S === "#ffffff" || S === "white" || S === "rgb(255,255,255)") continue;
        }
        w.appendChild(document.importNode(y, !0)), b++;
      }
    }
    b ? t.add(i) : n.add(i);
  };
  return { apply: (r, i, s) => {
    const d = r >= Ko.captions;
    for (const y of e.captions)
      y.setAttribute("display", d ? "inline" : "none");
    const g = r >= Ko.depictions;
    for (let y = 0; y < e.nodes.length; y++) {
      const _ = g && t.has(y);
      e.depictionGroups[y].setAttribute("display", _ ? "inline" : "none"), e.initials[y].setAttribute("display", _ ? "none" : "inline");
    }
    if (!g) return;
    const { width: m, height: w } = e.viewport(), b = [];
    e.nodes.forEach((y, _) => {
      if (t.has(_) || n.has(_)) return;
      const S = y.x * r + i, p = y.y * r + s;
      S < -ln || p < -ln || S > m + ln || p > w + ln || b.push(_);
    }), b.length && e.rdkit().then((y) => {
      if (y)
        for (const _ of b) {
          o(y, _);
          const S = t.has(_);
          e.depictionGroups[_].setAttribute("display", S ? "inline" : "none"), e.initials[_].setAttribute("display", S ? "none" : "inline");
        }
    }).catch(() => {
    });
  }, drawn: () => t.size };
}
function Xc(e, t, n, o, c) {
  const r = (i) => c === "keys" ? i["gufe-key"] : $e(i);
  return o === "ligands" ? e.filter((i) => n.has(i["gufe-key"])).map(r).join(", ") : t.filter((i) => n.has(i.from["gufe-key"]) && n.has(i.to["gufe-key"])).map((i) => `${r(i.from)}, ${r(i.to)}`).join(`
`);
}
function Zc(e, t) {
  navigator.clipboard?.writeText(e).catch(() => Go(e, t)), navigator.clipboard || Go(e, t);
}
function Go(e, t) {
  const n = N("textarea", "width:100%;height:80px;font-size:11px;box-sizing:border-box;");
  n.value = e, n.readOnly = !0, t.appendChild(n), n.select();
}
function Qc(e, t) {
  const n = URL.createObjectURL(new Blob([e], { type: "text/plain" })), o = N("a", "display:none;");
  o.href = n, o.download = t, document.body.appendChild(o), o.click(), o.remove(), URL.revokeObjectURL(n);
}
function el(e) {
  const t = N(
    "div",
    `display:flex;flex-direction:column;gap:8px;width:236px;padding:10px;min-height:0;background:${P.panelBg};border-right:1px solid ${P.splitBorder};`
  ), n = N("input", `${un}width:100%;box-sizing:border-box;`);
  n.type = "search", n.placeholder = "Search ligands", n.setAttribute("aria-label", "Search ligands by name, SMILES or gufe key"), t.appendChild(n);
  const o = N("div", `display:flex;align-items:center;gap:8px;font-size:11px;color:${P.textMuted};`), c = N("span", `min-width:28px;color:${P.textPrimary};`, "0.00"), r = N("input", "flex:1;");
  r.type = "range", r.min = "0", r.max = "1", r.step = "0.01", r.value = "0", r.setAttribute("aria-label", "Hide mappings scoring below this"), o.appendChild(N("span", "", "score >=")), o.appendChild(r), o.appendChild(c), t.appendChild(o);
  const i = N("div", `font-size:11px;color:${P.textMuted2};`);
  t.appendChild(i);
  const s = N("div", "flex:1;min-height:0;overflow:auto;display:flex;flex-direction:column;gap:3px;");
  t.appendChild(s);
  const d = N("div", "display:flex;flex-direction:column;gap:6px;"), g = N("div", `display:flex;align-items:center;gap:6px;font-size:11px;color:${P.textMuted};`);
  g.appendChild(N("span", "", "copy as"));
  const m = N("select", `${un}flex:1;`);
  for (const [p, h] of [
    ["names", "names"],
    ["keys", "gufe keys"]
  ]) {
    const u = N("option", "", h);
    u.value = p, m.appendChild(u);
  }
  g.appendChild(m), d.appendChild(g);
  const w = N("div", "display:flex;gap:4px;"), b = [
    ["Ligands", "ligands", "Copy the selected ligand names, comma separated"],
    ["Edges", "edges", "Copy the selected edges, one pair per line"]
  ];
  for (const [p, h, u] of b) {
    const v = N("button", `${Oe}flex:1;`, p);
    v.title = u, v.onclick = (k) => {
      const a = m.value, l = Xc(e.nodes, e.edges, e.selected, h, a);
      l && (k.shiftKey ? Qc(l, `selected-${h}.txt`) : Zc(l, d));
    }, w.appendChild(v);
  }
  d.appendChild(w), d.appendChild(
    N("div", `font-size:10px;color:${P.textMuted2};`, "Shift-click to save as a file instead.")
  ), t.appendChild(d);
  const y = N("button", `${Oe}width:100%;`, "Clear selection");
  y.onclick = () => {
    e.selected.clear(), S(), e.refresh();
  }, t.appendChild(y);
  const _ = (p) => {
    const h = e.query.text.trim().toLowerCase();
    return h ? $e(p).toLowerCase().includes(h) || (p.smiles ?? "").toLowerCase().includes(h) || p["gufe-key"].toLowerCase().includes(h) : !0;
  }, S = () => {
    s.replaceChildren();
    const p = e.nodes.map((h, u) => ({ node: h, index: u })).filter(({ node: h }) => _(h));
    i.textContent = `${p.length} of ${e.nodes.length} ligands`;
    for (const { node: h, index: u } of p) {
      const v = h["gufe-key"], k = N(
        "button",
        `display:flex;align-items:center;gap:6px;padding:5px 8px;border-radius:6px;text-align:left;font-family:inherit;font-size:11px;cursor:pointer;width:100%;min-width:0;border:1px solid ${e.selected.has(v) ? P.cardBorderActive : P.cardBorder};background:${e.selected.has(v) ? P.cardBgActive : P.cardBg};color:${P.textPrimary};`
      ), a = N("span", "flex:1;min-width:0;overflow-wrap:anywhere;", $e(h));
      a.title = `${$e(h)}
${h.smiles ?? ""}`, k.appendChild(a), k.onclick = (l) => {
        l.shiftKey || l.metaKey || l.ctrlKey ? e.selected.has(v) ? e.selected.delete(v) : e.selected.add(v) : (e.selected.clear(), e.selected.add(v), e.focus(u)), S(), e.refresh();
      }, s.appendChild(k);
    }
    p.length || s.appendChild(N("div", `font-size:11px;padding:8px;color:${P.textMuted2};`, "Nothing matches."));
  };
  return n.oninput = () => {
    e.query.text = n.value, S(), e.refresh();
  }, r.oninput = () => {
    e.filter.minScore = Number(r.value), c.textContent = e.filter.minScore.toFixed(2), e.refresh();
  }, S(), t;
}
class tl extends Se {
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
    const i = new Map(c.map((J) => [J["gufe-key"], J])), s = [];
    let d = 0;
    for (const J of n.edges ?? []) {
      const se = i.get(J.componentA), W = i.get(J.componentB);
      if (!se || !W) {
        d++;
        continue;
      }
      s.push({ ...J, index: s.length, from: se, to: W });
    }
    const g = Ne(n.name || "Ligand network", "LigandNetwork");
    g.statsEl.appendChild(ce("ligands", String(c.length))), g.statsEl.appendChild(ce("mappings", String(s.length))), t.appendChild(g);
    const m = N("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    t.appendChild(m);
    const w = /* @__PURE__ */ new Set(), b = { minScore: 0 }, y = { text: "" };
    let _ = () => {
    };
    const S = $i(
      g,
      () => el({
        nodes: c,
        edges: s,
        selected: w,
        filter: b,
        query: y,
        refresh: () => _(),
        focus: (J) => l(J)
      }),
      { label: "Search, filter and select ligands", onToggle: () => te() }
    );
    m.appendChild(S.panel);
    const p = N("div", `flex:1 1 58%;min-width:0;display:flex;flex-direction:column;background:${P.netCanvasBg};`), h = N("div", `flex:1 1 42%;min-width:0;display:flex;flex-direction:column;background:${P.appBg};`);
    m.appendChild(p), m.appendChild(N("div", `width:1px;flex-shrink:0;background:${P.splitBorder};`)), m.appendChild(h);
    const u = N("div", `flex:1;position:relative;overflow:hidden;min-height:0;background:${P.netCanvasBg};`);
    p.appendChild(u);
    const v = this.#t(
      (J) => te(J),
      () => D()
    );
    p.appendChild(v.bar);
    const k = this.#e(h, o);
    if (!c.length)
      return u.appendChild(
        ie(
          r ? "None of this network's ligands are in its registry." : "This network has no ligands."
        )
      ), k.message("Nothing to show."), {};
    r && qe(
      u,
      `${r} ligand${r === 1 ? "" : "s"} named by this network are not in its registry`
    ), d && qe(u, `${d} mapping${d === 1 ? "" : "s"} name a ligand this network does not contain`);
    const a = rr().catch((J) => (console.warn("[gufe-viz] RDKit failed to load:", me(J)), null));
    let l = () => {
    }, f = s.length ? 0 : -1, E = null, x = "Force-directed", F = !1, z = !0, T = () => {
    }, D = () => {
    };
    const U = (J) => {
      f = J, k.show(s[J] ?? null), T();
    }, te = (J = x) => {
      x = J, E?.(), E = null, u.querySelector("svg")?.remove();
      const se = u.clientWidth || 800, W = u.clientHeight || 600;
      nl(c, se, W, x, s);
      const ae = () => {
        if (!z) return;
        const B = this.#r(u, c, s, se, W, U, a);
        T = () => B.setSelected(f), D = B.reset, E = B.cleanup, l = (A) => B.focusOn(A), _ = () => {
          const A = y.text.trim().toLowerCase(), q = w.size > 0 || A.length > 0, M = /* @__PURE__ */ new Set();
          for (const O of c) {
            const K = O["gufe-key"], G = w.has(K) || A.length > 0 && ($e(O).toLowerCase().includes(A) || (O.smiles ?? "").toLowerCase().includes(A) || K.toLowerCase().includes(A));
            (!q || G) && M.add(K);
          }
          const $ = /* @__PURE__ */ new Set();
          s.forEach((O, K) => {
            (O.score ?? 0) < b.minScore || !M.has(O.from["gufe-key"]) || !M.has(O.to["gufe-key"]) || $.add(K);
          });
          const C = q || b.minScore > 0;
          B.setEmphasis(C ? M : null, C ? $ : null);
        }, T(), _(), B.setDetail(1, 0, 0);
      };
      if (x !== "Force-directed" || F) {
        ae();
        return;
      }
      rl(c, s, se, W).then((B) => {
        if (z) {
          if (B) {
            ae();
            return;
          }
          F = !0, v.picker.value = "Circular", qe(u, "d3 could not be loaded - showing the circular layout instead"), te("Circular");
        }
      }, ae);
    };
    return te(), k.show(s[f] ?? null), {
      onResize: () => te(),
      cleanup: () => {
        z = !1, E?.();
      }
    };
  }
  #t(t, n) {
    const o = N(
      "div",
      `display:flex;align-items:center;gap:10px;flex-wrap:wrap;padding:8px 14px;flex-shrink:0;background:${P.toolbarBg};border-top:1px solid ${P.toolbarBorder};`
    ), c = N("div", `display:flex;align-items:center;gap:6px;font-size:11px;color:${P.textMuted};`);
    c.appendChild(N("span", "", "score")), c.appendChild(
      N(
        "span",
        `width:40px;height:4px;border-radius:2px;background:linear-gradient(to right,${P.netEdgeRamp.join(",")});`
      )
    ), c.appendChild(N("span", "", "0 -> 1")), o.appendChild(c), o.appendChild(N("label", `font-size:12px;margin-left:auto;color:${P.textMuted};`, "Layout"));
    const r = N("select", un);
    for (const i of Lc) {
      const s = N("option", "", i);
      s.value = i, r.appendChild(s);
    }
    return r.onchange = () => t(r.value), o.appendChild(r), o.appendChild(_n(n, "Reset pan and zoom")), { bar: o, picker: r };
  }
  /** The right-hand pane: what the selected mapping is, in words and pictures. */
  #e(t, n) {
    const o = N(
      "div",
      `flex-shrink:0;padding:4px 10px;font-size:12px;font-weight:bold;color:${P.labelFg};background:${P.labelBg};`,
      "Selected mapping"
    ), c = N("div", "flex:1;min-height:0;overflow:auto;display:flex;flex-direction:column;");
    t.appendChild(o), t.appendChild(c);
    const r = (s) => c.replaceChildren(ie(s));
    return { show: (s) => {
      if (!s) {
        r("Click an edge to see its mapping.");
        return;
      }
      c.replaceChildren();
      const d = N(
        "div",
        `padding:10px 14px;font-size:13px;font-weight:600;color:${P.textPrimary};border-bottom:1px solid ${P.toolbarBorder};`,
        `${$e(s.from)} -> ${$e(s.to)}`
      );
      c.appendChild(d);
      const g = hi(s, n), m = document.createElement("gufe-atom-mapping");
      m.style.cssText = "flex:1;min-width:0;min-height:220px;display:flex;", m.payload = g, c.appendChild(m);
      const w = Object.entries(s.annotations ?? {}).filter(([b]) => b !== "score");
      if (w.length) {
        const b = N(
          "div",
          `padding:0 14px 12px;font-size:11px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;color:${P.textMuted2};`
        );
        for (const [y, _] of w)
          b.appendChild(N("div", "", `${y}: ${String(_)}`));
        c.appendChild(b);
      }
    }, message: r };
  }
  /** Build the SVG for the current node positions. Returns the handles the
   * caller needs afterwards: selection, depictions, and teardown. */
  #r(t, n, o, c, r, i, s) {
    const d = oe("svg", { width: c, height: r, style: "display:block;touch-action:none;" }), g = oe("g");
    d.appendChild(g), t.appendChild(d);
    const m = [], w = oe("g"), b = oe("g"), y = oe("g", { "pointer-events": "none" }), _ = oe("g");
    g.append(w, b, y, _);
    for (const l of o) {
      const f = Jc(l.score), E = oe("line", {
        stroke: P.netHaloColor,
        "stroke-width": In + 12,
        "stroke-linecap": "round",
        opacity: 0,
        "pointer-events": "none"
      }), x = oe("line", {
        stroke: f,
        "stroke-width": In + (l.score ?? 0.5) * (Uc - In),
        "stroke-opacity": 0.9,
        "pointer-events": "none"
      }), F = Ze(
        oe("line", { stroke: "transparent", "stroke-width": Kc, style: "cursor:pointer;" }),
        `${$e(l.from)} -> ${$e(l.to)}${l.score == null ? "" : `
score ${l.score.toFixed(3)}`}`
      );
      if (F.addEventListener("click", (z) => {
        z.stopPropagation(), i(l.index);
      }), m.push(E), w.append(E, x), b.appendChild(F), l.score != null) {
        const z = oe("text", {
          "text-anchor": "middle",
          "dominant-baseline": "middle",
          "font-size": 10,
          "font-weight": 600,
          fill: P.netEdgeLabel
        });
        z.textContent = l.score.toFixed(2), y.appendChild(z);
      } else
        y.appendChild(oe("text"));
    }
    const S = [], p = [], h = [], u = n.map((l) => {
      const f = Ze(oe("g", { style: "cursor:grab;" }), `${$e(l)}
${l.smiles ?? ""}
${l["gufe-key"]}`);
      f.appendChild(
        oe("circle", {
          r: mn,
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
      x.textContent = $e(l).slice(0, 2).toUpperCase(), f.appendChild(x), p.push(x);
      const F = oe("text", {
        "text-anchor": "middle",
        y: mn + 14,
        "font-size": 11,
        "font-weight": 600,
        fill: P.netNodeLabel,
        "pointer-events": "none"
      });
      return F.textContent = Wc($e(l), 16), F.setAttribute("display", "none"), h.push(F), f.appendChild(F), _.appendChild(f), f;
    }), v = () => {
      o.forEach((l, f) => {
        for (const x of [m[f], w.children[f * 2 + 1], b.children[f]]) {
          const F = x;
          F.setAttribute("x1", String(l.from.x)), F.setAttribute("y1", String(l.from.y)), F.setAttribute("x2", String(l.to.x)), F.setAttribute("y2", String(l.to.y));
        }
        const E = y.children[f];
        E.setAttribute("x", String((l.from.x + l.to.x) / 2)), E.setAttribute("y", String((l.from.y + l.to.y) / 2 - 8));
      }), n.forEach((l, f) => u[f].setAttribute("transform", `translate(${l.x},${l.y})`));
    };
    v();
    const k = Yc({
      nodes: n,
      captions: h,
      initials: p,
      depictionGroups: S,
      rdkit: () => s,
      viewport: () => ({ width: c, height: r })
    }), a = this.#n(d, g, n, u, v, k.apply);
    return {
      setSelected(l) {
        m.forEach((f, E) => f.setAttribute("opacity", E === l ? "0.95" : "0"));
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
          E.setAttribute("opacity", F ? "1" : String(Dn.node));
        }), o.forEach((E, x) => {
          const F = !f || f.has(x), z = F ? "0.9" : String(Dn.edge);
          w.children[x * 2 + 1].setAttribute("stroke-opacity", z), y.children[x].setAttribute("opacity", F ? "1" : String(Dn.edge));
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
  #n(t, n, o, c, r, i) {
    let s = 1, d = 0, g = 0;
    const m = () => {
      n.setAttribute("transform", `translate(${d},${g}) scale(${s})`), i(s, d, g);
    }, b = ai(t, {
      onZoom: (h) => {
        const u = t.getBoundingClientRect(), v = h.clientX - u.left, k = h.clientY - u.top, a = Math.min(5 / s, Math.max(0.15 / s, Math.exp(-h.deltaY * 2e-3)));
        d = v - (v - d) * a, g = k - (k - g) * a, s *= a, m();
      },
      hint: "Click the graph or hold Ctrl to zoom"
    });
    let y = null;
    const _ = (h) => {
      y = { x: h.clientX - d, y: h.clientY - g };
    }, S = (h) => {
      y && (d = h.clientX - y.x, g = h.clientY - y.y, m());
    }, p = () => {
      y = null;
    };
    return t.addEventListener("pointerdown", _), t.addEventListener("pointermove", S), t.addEventListener("pointerup", p), t.addEventListener("pointercancel", p), t.addEventListener("pointerleave", p), c.forEach((h, u) => {
      let v = null;
      h.addEventListener("pointerdown", (a) => {
        a.stopPropagation(), v = { x: a.clientX - o[u].x * s, y: a.clientY - o[u].y * s }, h.setPointerCapture(a.pointerId);
      }), h.addEventListener("pointermove", (a) => {
        v && (o[u].x = o[u].fx = (a.clientX - v.x) / s, o[u].y = o[u].fy = (a.clientY - v.y) / s, r());
      });
      const k = () => {
        v = null;
      };
      h.addEventListener("pointerup", k), h.addEventListener("pointercancel", k);
    }), {
      reset() {
        s = 1, d = 0, g = 0, m();
      },
      /** Bring a graph point to the middle, zooming in enough to read it. */
      centreOn(h, u) {
        const v = t.getBoundingClientRect();
        s = Math.max(s, Gc), d = (v.width || t.clientWidth || 800) / 2 - h * s, g = (v.height || t.clientHeight || 600) / 2 - u * s, m();
      },
      cleanup() {
        b.cleanup(), t.removeEventListener("pointerdown", _), t.removeEventListener("pointermove", S), t.removeEventListener("pointerup", p), t.removeEventListener("pointercancel", p), t.removeEventListener("pointerleave", p);
      }
    };
  }
}
function nl(e, t, n, o, c) {
  const r = t / 2, i = n / 2, s = (d, g) => {
    d.forEach((m, w) => {
      const b = 2 * Math.PI * w / Math.max(1, d.length) - Math.PI / 2;
      m.x = r + g * Math.cos(b), m.y = i + g * Math.sin(b), m.fx = o === "Force-directed" ? void 0 : m.x, m.fy = o === "Force-directed" ? void 0 : m.y;
    });
  };
  if (o === "Radial" && e.length) {
    const d = new Map(e.map((S) => [S["gufe-key"], []]));
    for (const S of c)
      d.get(S.from["gufe-key"]).push(S.to["gufe-key"]), d.get(S.to["gufe-key"]).push(S.from["gufe-key"]);
    const g = new Map(e.map((S) => [S["gufe-key"], S])), m = e.reduce(
      (S, p) => d.get(p["gufe-key"]).length > d.get(S["gufe-key"]).length ? p : S
    ), w = /* @__PURE__ */ new Set([m["gufe-key"]]);
    let b = [m["gufe-key"]], y = 0;
    const _ = Math.min(t, n) * 0.18;
    for (; b.length; ) {
      s(
        b.map((p) => g.get(p)),
        y === 0 ? 0 : y * _ + 40
      );
      const S = [];
      for (const p of b)
        for (const h of d.get(p))
          w.has(h) || (w.add(h), S.push(h));
      b = S, y++;
    }
    s(e.filter((S) => !w.has(S["gufe-key"])), Math.min(t, n) * 0.45);
    return;
  }
  s(e, Math.min(t, n) * 0.34);
}
async function rl(e, t, n, o) {
  let c;
  try {
    if (c = await si(), typeof c?.forceSimulation != "function") return !1;
  } catch {
    return !1;
  }
  const r = t.map((d) => ({ source: d.from["gufe-key"], target: d.to["gufe-key"], score: d.score })), i = c.forceSimulation(e).force(
    "link",
    c.forceLink(r).id((d) => d["gufe-key"]).distance((d) => ve.linkBaseDistance + (1 - (d.score ?? 0.5)) * ve.linkScoreBonus).strength(ve.linkStrength)
  ).force(
    "charge",
    c.forceManyBody().strength(ve.chargeStrength).distanceMin(ve.chargeDistanceMin).distanceMax(ve.chargeDistanceMax)
  ).force("center", c.forceCenter(n / 2, o / 2).strength(ve.centerStrength)).force("collision", c.forceCollide(mn + ve.collisionPadding).iterations(ve.collisionIterations)).force("x", c.forceX(n / 2).strength(ve.drift)).force("y", c.forceY(o / 2).strength(ve.drift)).stop(), s = Math.ceil(Math.log(i.alphaMin()) / Math.log(1 - i.alphaDecay()));
  for (let d = 0; d < s * ve.tickMultiplier; d++) i.tick();
  return !0;
}
Ce("gufe-ligand-network", tl);
const st = { width: 148, height: 46, radius: 10 }, Ye = {
  linkDistance: 220,
  linkStrength: 0.4,
  chargeStrength: -1200,
  collisionRadius: 110,
  collisionIterations: 3,
  tickMultiplier: 2
}, at = Qe;
function ol(e, t) {
  return e.length > t ? `${e.slice(0, t - 1)}...` : e;
}
function il(e, t, n) {
  const o = Math.max(90, Math.min(t, n) * 0.36);
  e.forEach((c, r) => {
    const i = 2 * Math.PI * r / Math.max(1, e.length) - Math.PI / 2;
    c.x = t / 2 + o * Math.cos(i), c.y = n / 2 + o * Math.sin(i);
  });
}
async function sl(e, t, n, o) {
  let c;
  try {
    if (c = await si(), typeof c?.forceSimulation != "function") return !1;
  } catch {
    return !1;
  }
  const r = t.map((d) => ({ source: d.from["gufe-key"], target: d.to["gufe-key"] })), i = c.forceSimulation(e).force(
    "link",
    c.forceLink(r).id((d) => d["gufe-key"]).distance(Ye.linkDistance).strength(Ye.linkStrength)
  ).force("charge", c.forceManyBody().strength(Ye.chargeStrength)).force("center", c.forceCenter(n / 2, o / 2)).force("collision", c.forceCollide(Ye.collisionRadius).iterations(Ye.collisionIterations)).stop(), s = Math.ceil(Math.log(i.alphaMin()) / Math.log(1 - i.alphaDecay()));
  for (let d = 0; d < s * Ye.tickMultiplier; d++) i.tick();
  return !0;
}
class al extends Se {
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
    const i = new Map(c.map((l) => [l["gufe-key"], l])), s = [];
    let d = 0;
    for (const l of n.edges ?? []) {
      const f = i.get(l.stateA), E = i.get(l.stateB);
      if (!f || !E) {
        d++;
        continue;
      }
      s.push({ ...l, index: s.length, from: f, to: E });
    }
    const g = (l) => {
      const f = Pe(o, l.protocol, "ProtocolViz");
      return f?.gufe_type || f?.name || "";
    }, m = new Set(s.map(g).filter(Boolean)), w = Ne(n.name || "Alchemical network", "AlchemicalNetwork");
    w.statsEl.appendChild(ce("systems", String(c.length))), w.statsEl.appendChild(ce("transformations", String(s.length))), m.size && w.statsEl.appendChild(ce("protocol", [...m].join(", "))), t.appendChild(w);
    const b = N("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    t.appendChild(b);
    const y = N("div", `flex:1 1 62%;min-width:0;position:relative;overflow:hidden;background:${P.netCanvasBg};`);
    b.appendChild(y), b.appendChild(N("div", `width:1px;flex-shrink:0;background:${P.splitBorder};`));
    const _ = N("div", `flex:1 1 38%;min-width:0;display:flex;flex-direction:column;background:${P.appBg};`);
    b.appendChild(_);
    const S = this.#t(_, o, g);
    if (!c.length)
      return y.appendChild(
        ie(
          r ? "None of this network's chemical systems are in its registry." : "This network has no chemical systems."
        )
      ), S.message("Nothing to show."), {};
    r && qe(
      y,
      `${r} chemical system${r === 1 ? "" : "s"} named by this network are not in its registry`
    ), d && qe(
      y,
      `${d} transformation${d === 1 ? "" : "s"} name a system this network does not contain`
    );
    let p = !0, h = !1, u = null, v = () => {
    };
    const k = (l, f) => {
      u = { kind: l, index: f }, S.show(l === "node" ? c[f] : s[f], l), v();
    }, a = () => {
      y.querySelector("svg")?.remove();
      const l = y.clientWidth || 800, f = y.clientHeight || 600;
      il(c, l, f);
      const E = () => {
        if (!p) return;
        const x = this.#e(y, c, s, l, f, k);
        v = () => x.setSelected(u), v();
      };
      if (h) {
        E();
        return;
      }
      sl(c, s, l, f).then((x) => {
        p && (x || (h = !0, qe(y, "d3 could not be loaded - showing the circular layout instead")), E());
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
      N(
        "div",
        `flex-shrink:0;padding:4px 10px;font-size:12px;font-weight:bold;color:${P.labelFg};background:${P.labelBg};`,
        "Selected"
      )
    );
    const c = N("div", "flex:1;min-height:0;overflow:auto;display:flex;flex-direction:column;");
    t.appendChild(c);
    const r = (d) => c.replaceChildren(ie(d)), i = (d, g) => {
      const m = N(
        "div",
        `padding:10px 14px;border-bottom:1px solid ${P.toolbarBorder};display:flex;flex-direction:column;gap:4px;`
      );
      return m.appendChild(N("div", `font-size:13px;font-weight:600;color:${P.textPrimary};`, d)), m.appendChild(N("div", `font-size:11px;color:${P.textMuted2};`, g)), m;
    };
    return { show: (d, g) => {
      if (c.replaceChildren(), g === "node") {
        const b = d;
        c.appendChild(i(at(b), "ChemicalSystem"));
        const y = N("div", "display:flex;flex-direction:column;gap:6px;padding:12px 14px;"), _ = Object.entries(b.components ?? {});
        for (const [S, p] of _) {
          const h = Be(n, p), u = N(
            "div",
            `display:flex;align-items:center;gap:8px;padding:7px 10px;border-radius:8px;min-width:0;background:${P.cardBg};border:1px solid ${P.cardBorder};`
          );
          u.appendChild(N("span", `font-size:12px;font-weight:700;color:${P.textPrimary};`, S)), u.appendChild(
            N(
              "span",
              `font-size:11px;color:${P.textMuted};overflow-wrap:anywhere;min-width:0;`,
              h ? h.name || "(unnamed)" : "(not in the registry)"
            )
          );
          const v = lt(
            h ? h.type === "UnknownComponentViz" ? h.gufe_type : h.type.replace(/Viz$/, "") : "missing"
          );
          v.style.marginLeft = "auto", u.appendChild(v), y.appendChild(u);
        }
        _.length || y.appendChild(N("div", `font-size:12px;color:${P.textMuted2};`, "This system lists no components.")), c.appendChild(y), c.appendChild(
          N(
            "div",
            `padding:0 14px 12px;font-size:11px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;color:${P.textMuted2};overflow-wrap:anywhere;`,
            b["gufe-key"]
          )
        );
        return;
      }
      const m = d;
      c.appendChild(i(m.name || "Unnamed transformation", "Transformation"));
      const w = N("div", "display:flex;flex-direction:column;gap:8px;padding:12px 14px;");
      for (const [b, y] of [
        ["State A", at(m.from)],
        ["State B", at(m.to)],
        ["Protocol", o(m) || "-"]
      ]) {
        const _ = N("div", "display:flex;gap:10px;align-items:baseline;min-width:0;");
        _.appendChild(
          N(
            "span",
            `flex:0 0 76px;font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:${P.textMuted2};`,
            b
          )
        ), _.appendChild(N("span", `flex:1;min-width:0;font-size:12px;color:${P.textPrimary};overflow-wrap:anywhere;`, y)), w.appendChild(_);
      }
      c.appendChild(w), c.appendChild(
        N(
          "div",
          `padding:0 14px 12px;font-size:11px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;color:${P.textMuted2};overflow-wrap:anywhere;`,
          m["gufe-key"]
        )
      );
    }, message: r };
  }
  /** Build the SVG for the current positions, and hand back the selection hook. */
  #e(t, n, o, c, r, i) {
    const s = oe("svg", { width: c, height: r, style: "display:block;" });
    t.appendChild(s);
    const d = oe("g"), g = oe("g");
    s.append(d, g);
    const m = [];
    o.forEach((b, y) => {
      const _ = oe("line", {
        x1: b.from.x,
        y1: b.from.y,
        x2: b.to.x,
        y2: b.to.y,
        stroke: P.netEdgeLine,
        "stroke-width": 2,
        "stroke-linecap": "round",
        style: "cursor:pointer;"
      });
      Ze(_, b.name || "transformation"), _.addEventListener("click", () => i("edge", y)), d.appendChild(_), m.push(_);
      const S = oe("line", {
        x1: b.from.x,
        y1: b.from.y,
        x2: b.to.x,
        y2: b.to.y,
        stroke: "transparent",
        "stroke-width": 16,
        style: "cursor:pointer;"
      });
      S.addEventListener("click", () => i("edge", y)), d.appendChild(S);
    });
    const w = [];
    return n.forEach((b, y) => {
      const _ = oe("g", { style: "cursor:pointer;" }), S = oe("rect", {
        x: b.x - st.width / 2,
        y: b.y - st.height / 2,
        width: st.width,
        height: st.height,
        rx: st.radius,
        fill: P.cardBg,
        stroke: P.cardBorder,
        "stroke-width": 2
      });
      _.appendChild(S), w.push(S);
      const p = oe("text", {
        x: b.x,
        y: b.y - 2,
        "text-anchor": "middle",
        fill: P.netNodeLabel,
        "font-size": 12,
        "font-weight": 700,
        "font-family": "ui-sans-serif,system-ui,sans-serif"
      });
      p.textContent = ol(at(b), 20), _.appendChild(p);
      const h = Object.keys(b.components ?? {}).length, u = oe("text", {
        x: b.x,
        y: b.y + 14,
        "text-anchor": "middle",
        fill: P.netInitials,
        "font-size": 10,
        "font-family": "ui-sans-serif,system-ui,sans-serif"
      });
      u.textContent = `${h} component${h === 1 ? "" : "s"}`, _.appendChild(u), Ze(_, at(b)), _.addEventListener("click", () => i("node", y)), g.appendChild(_);
    }), {
      setSelected(b) {
        w.forEach((y, _) => {
          const S = b?.kind === "node" && b.index === _;
          y.setAttribute("stroke", S ? P.cardBorderActive : P.cardBorder), y.setAttribute("stroke-width", S ? "3" : "2");
        }), m.forEach((y, _) => {
          const S = b?.kind === "edge" && b.index === _;
          y.setAttribute("stroke", S ? P.netHaloColor : P.netEdgeLine), y.setAttribute("stroke-width", S ? "4" : "2");
        });
      }
    };
  }
}
Ce("gufe-alchemical-network", al);
function cl(e) {
  return e.name || e.type.replace(/Viz$/, "");
}
function ll(e) {
  return e.type === "UnknownComponentViz" ? e.gufe_type : e.type.replace(/Viz$/, "");
}
class dl extends Se {
  placeholder() {
    return "Waiting for a ChemicalSystem payload...";
  }
  renderView(t, n) {
    const o = dt(n), c = [], r = [];
    for (const [_, S] of Object.entries(n.components ?? {})) {
      const p = Be(o, S);
      p ? c.push([_, p]) : r.push(_);
    }
    const i = Ne(n.name || "Chemical system", "ChemicalSystem");
    if (i.statsEl.appendChild(ce("components", String(c.length))), t.appendChild(i), !c.length)
      return t.appendChild(
        ie(
          r.length ? "None of this system's components are in its registry." : "This chemical system has no components."
        )
      ), {};
    const s = N("div", "flex:1;min-height:0;position:relative;display:flex;flex-direction:row;");
    t.appendChild(s), r.length && qe(
      s,
      `${r.length} component${r.length === 1 ? "" : "s"} named by this system (${r.join(", ")}) are not in its registry`
    );
    const d = N(
      "div",
      `flex:0 0 220px;min-width:0;overflow:auto;display:flex;flex-direction:column;gap:6px;padding:10px;background:${P.panelBg};border-right:1px solid ${P.splitBorder};`
    );
    s.appendChild(d);
    const g = N("div", "flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;");
    s.appendChild(g);
    const m = N("div", "flex:1;min-height:0;display:flex;");
    g.appendChild(m);
    const w = document.createElement("gufe-view");
    w.style.cssText = "flex:1;min-width:0;min-height:0;", m.appendChild(w);
    const b = [], y = (_) => {
      b.forEach((S, p) => {
        const h = p === _;
        S.style.background = h ? P.cardBgActive : P.cardBg, S.style.borderColor = h ? P.cardBorderActive : P.cardBorder;
      }), w.payload = c[_][1];
    };
    return c.forEach(([_, S], p) => {
      const h = N(
        "button",
        `display:flex;flex-direction:column;align-items:flex-start;gap:4px;padding:8px 10px;text-align:left;border:1px solid ${P.cardBorder};border-radius:8px;background:${P.cardBg};cursor:pointer;font-family:inherit;font-size:12px;width:100%;`
      );
      h.appendChild(N("span", `font-weight:700;color:${P.textPrimary};`, _)), h.appendChild(N("span", `font-size:11px;color:${P.textMuted};`, cl(S))), h.appendChild(lt(ll(S))), h.onclick = () => y(p), b.push(h), d.appendChild(h);
    }), y(0), {
      onResize: () => w.resize?.(),
      // Removing the nested view fires its own `disconnectedCallback`, which is
      // where whatever it mounted releases its viewers.
      cleanup: () => w.remove()
    };
  }
}
Ce("gufe-chemical-system", dl);
class ul extends Se {
  placeholder() {
    return "Waiting for a Protocol payload...";
  }
  renderView(t, n) {
    const o = Ne(n.gufe_type || n.name || "Protocol", "Protocol");
    o.statsEl.appendChild(lt(n.gufe_type)), t.appendChild(o);
    const c = N(
      "div",
      "flex:1;min-height:0;overflow:auto;display:flex;align-items:center;justify-content:center;padding:24px;"
    );
    t.appendChild(c);
    const r = fn();
    return r.style.maxWidth = "460px", r.appendChild(xe("gufe class", n.gufe_type, !0)), n.name && r.appendChild(xe("Name", n.name)), r.appendChild(xe("gufe key", n["gufe-key"], !0)), r.appendChild(
      N(
        "div",
        `padding-top:10px;font-size:11px;line-height:1.6;color:${P.textMuted2};`,
        "A Protocol's settings are not carried in this payload: they are large, deeply nested, and nothing draws them yet."
      )
    ), c.appendChild(r), {};
  }
}
Ce("gufe-protocol", ul);
const _e = { width: 340, height: 260, padding: 14, radius: 12 }, fl = 150, pl = 40, hl = 24;
function ml(e) {
  let t = e >>> 0;
  return () => (t = t * 1664525 + 1013904223 >>> 0, t / 4294967296);
}
function gl(e) {
  const t = /-?\d+(\.\d+)?([eE][-+]?\d+)?/.exec(e ?? "");
  if (!t) return null;
  const n = Number(t[0]);
  return Number.isFinite(n) ? n : null;
}
function yl(e) {
  return e == null || e <= 0 ? 0 : Math.max(1, Math.min(hl, Math.round(e * pl)));
}
function vl(e) {
  const t = oe("svg", {
    viewBox: `0 0 ${_e.width} ${_e.height}`,
    style: "width:100%;height:100%;max-width:100%;",
    role: "img"
  });
  Ze(t, `${e.smiles || "solvent"} box`), t.appendChild(
    oe("rect", {
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
  const n = ml(1597463007), o = () => ({
    x: _e.padding + n() * (_e.width - 2 * _e.padding),
    y: _e.padding + n() * (_e.height - 2 * _e.padding)
  });
  for (let i = 0; i < fl; i++) {
    const { x: s, y: d } = o();
    t.appendChild(oe("circle", { cx: s, cy: d, r: 2.4, fill: P.textMuted2, "fill-opacity": 0.45 }));
  }
  const c = yl(gl(e.ion_concentration)), r = [
    [e.positive_ion, P.diffAdded],
    [e.negative_ion, P.diffRemoved]
  ];
  for (const [i, s] of r)
    for (let d = 0; d < c; d++) {
      const { x: g, y: m } = o(), w = oe("circle", { cx: g, cy: m, r: 5.5, fill: s, "fill-opacity": 0.85 });
      t.appendChild(Ze(w, i));
    }
  return t;
}
class $l extends Se {
  placeholder() {
    return "Waiting for a SolventComponent payload...";
  }
  renderView(t, n) {
    const o = Ne(n.name || "Solvent", "SolventComponent");
    o.statsEl.appendChild(ce("neutralized", n.neutralize ? "yes" : "no")), o.statsEl.appendChild(ce(n.positive_ion, "", P.diffAdded)), o.statsEl.appendChild(ce(n.negative_ion, "", P.diffRemoved)), t.appendChild(o);
    const c = N(
      "div",
      "flex:1;min-height:0;display:flex;flex-wrap:wrap;gap:16px;padding:16px;overflow:auto;align-items:flex-start;"
    );
    t.appendChild(c);
    const r = fn();
    r.style.flex = "1 1 320px", r.appendChild(xe("SMILES", n.smiles, !0)), r.appendChild(xe("Positive ion", n.positive_ion)), r.appendChild(xe("Negative ion", n.negative_ion)), r.appendChild(xe("Ion concentration", n.ion_concentration)), r.appendChild(xe("Neutralize", n.neutralize ? "yes" : "no")), c.appendChild(r);
    const i = fn();
    return i.style.flex = "1 1 340px", i.style.alignItems = "center", i.appendChild(vl(n)), i.appendChild(
      N(
        "div",
        `padding-top:10px;font-size:11px;text-align:center;color:${P.textMuted2};`,
        "Schematic only: the dots show which ions are present, not how many."
      )
    ), c.appendChild(i), {};
  }
}
Ce("gufe-solvent", $l);
const Ln = {
  unchanged: P.diffUnchanged,
  changed: P.diffChanged,
  added: P.diffAdded,
  removed: P.diffRemoved
};
function bl(e, t) {
  return e && !t ? "removed" : !e && t ? "added" : e === t ? "unchanged" : "changed";
}
function wl(e, t) {
  return [.../* @__PURE__ */ new Set([...Object.keys(e.components ?? {}), ...Object.keys(t.components ?? {})])].sort();
}
function _l(e) {
  if (!e) return null;
  const t = e.type === "UnknownComponentViz" ? e.gufe_type : e.type.replace(/Viz$/, "");
  return { name: e.name || "(unnamed)", type: t };
}
function Ho(e, t) {
  const n = N(
    "div",
    `flex:1 1 50%;min-width:0;display:flex;flex-direction:column;gap:4px;padding:8px 10px;border-radius:8px;background:${P.cardBg};border:1px solid ${P.cardBorder};`
  ), o = _l(e);
  return o ? (n.style.borderColor = t === "unchanged" ? P.cardBorder : Ln[t], n.appendChild(N("span", `font-size:12px;font-weight:600;color:${P.textPrimary};`, o.name)), n.appendChild(lt(o.type)), n) : (n.style.background = "transparent", n.style.borderStyle = "dashed", n.appendChild(N("span", `font-size:12px;color:${P.textMuted2};`, "absent")), n);
}
function Sl(e, t) {
  const n = Be(t, e.componentA), o = Be(t, e.componentB);
  return `${n ? Qe(n) : "A"} to ${o ? Qe(o) : "B"}`;
}
class Cl extends Se {
  placeholder() {
    return "Waiting for a Transformation payload...";
  }
  renderView(t, n) {
    const o = dt(n), c = Pe(o, n.stateA, "ChemicalSystemViz"), r = Pe(o, n.stateB, "ChemicalSystemViz"), i = Pe(o, n.protocol, "ProtocolViz"), s = n.mappings ?? [], d = Ne(n.name || "Transformation", "Transformation");
    if (d.statsEl.appendChild(ce("protocol", i?.gufe_type || i?.name || "-")), d.statsEl.appendChild(ce("mappings", String(s.length))), t.appendChild(d), !c || !r)
      return t.appendChild(
        ie("This transformation names two chemical systems, and its registry does not hold them.")
      ), {};
    const g = wl(c, r), m = N("div", "flex:0 0 auto;max-height:45%;overflow:auto;padding:12px 14px;");
    t.appendChild(m);
    const w = N("div", "display:flex;gap:10px;padding:0 0 6px 120px;");
    for (const [p, h] of [
      ["State A", c],
      ["State B", r]
    ])
      w.appendChild(
        N(
          "div",
          `flex:1 1 50%;min-width:0;font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:${P.textMuted2};`,
          `${p}${h.name ? ` - ${h.name}` : ""}`
        )
      );
    m.appendChild(w);
    for (const p of g) {
      const h = c.components?.[p], u = r.components?.[p], v = bl(h, u), k = Be(o, h), a = Be(o, u), l = N("div", "display:flex;align-items:stretch;gap:10px;padding:4px 0;"), f = N("div", "flex:0 0 110px;display:flex;align-items:center;gap:6px;min-width:0;");
      f.appendChild(
        N("span", `width:8px;height:8px;border-radius:50%;flex-shrink:0;background:${Ln[v]};`)
      );
      const E = N("span", `font-size:12px;font-weight:700;color:${P.textPrimary};overflow-wrap:anywhere;`, p);
      E.title = v, f.appendChild(E), l.appendChild(f), l.appendChild(Ho(k, v)), l.appendChild(Ho(a, v)), m.appendChild(l);
    }
    const b = N(
      "div",
      `display:flex;flex-wrap:wrap;gap:12px;padding:8px 0 0;font-size:11px;color:${P.textMuted};`
    );
    for (const p of ["unchanged", "changed", "added", "removed"])
      b.appendChild(ce(p, "", Ln[p]));
    m.appendChild(b);
    const y = N(
      "div",
      `flex-shrink:0;padding:4px 10px;font-size:12px;font-weight:bold;color:${P.labelFg};background:${P.labelBg};`,
      "Atom mapping"
    );
    if (t.appendChild(y), !s.length)
      return t.appendChild(
        ie(
          "This transformation carries no atom mapping - nothing here maps one small molecule onto another."
        )
      ), {};
    const _ = document.createElement("gufe-atom-mapping");
    _.style.cssText = "flex:1;min-height:0;min-width:0;";
    const S = (p) => {
      _.payload = hi(s[p], o);
    };
    if (S(0), s.length > 1) {
      const p = N(
        "div",
        `display:flex;align-items:center;gap:8px;padding:6px 10px;flex-shrink:0;font-size:11px;background:${P.toolbarBg};border-bottom:1px solid ${P.toolbarBorder};color:${P.textMuted};`
      );
      p.appendChild(
        gn(
          s.map((h, u) => ({
            id: String(u),
            label: h.name || Sl(h, o)
          })),
          "0",
          (h) => S(Number(h))
        )
      ), t.appendChild(p);
    }
    return t.appendChild(_), {
      onResize: () => _.resize?.(),
      cleanup: () => _.remove()
    };
  }
}
Ce("gufe-transformation", Cl);
class kl extends Se {
  placeholder() {
    return "Waiting for a component payload...";
  }
  renderView(t, n) {
    const o = Ne(n.name || "Unnamed component", "Component");
    o.statsEl.appendChild(lt(n.gufe_type)), t.appendChild(o);
    const c = N("div", "flex:1;min-height:0;overflow:auto;display:flex;align-items:center;justify-content:center;padding:24px;");
    t.appendChild(c);
    const r = fn();
    return r.style.maxWidth = "460px", r.appendChild(
      N(
        "div",
        `font-size:14px;font-weight:600;padding-bottom:6px;color:${P.textPrimary};`,
        `There is no visualization for ${n.gufe_type}.`
      )
    ), r.appendChild(
      N(
        "div",
        `font-size:12px;line-height:1.6;padding-bottom:10px;color:${P.textMuted};`,
        "gufe lets a project define its own Component subclasses, so this is a component this build has never been taught to draw - not a broken payload. Everything gufe knows about it that survives serialization is below."
      )
    ), r.appendChild(xe("Name", n.name || "(unnamed)")), r.appendChild(xe("gufe class", n.gufe_type, !0)), c.appendChild(r), {};
  }
}
Ce("gufe-unknown-component", kl);
function Fl(e, t) {
  let n = e.querySelector("gufe-view");
  return n || (n = document.createElement("gufe-view"), n.style.cssText = "display:block;width:100%;height:100%;", e.appendChild(n)), t !== void 0 && (n.payload = t), n;
}
export {
  yi as CHROME_OPEN_BY_DEFAULT,
  wi as DEBUG_ATTRIBUTE,
  _i as DEBUG_GLOBAL,
  hc as DEFAULT_ZOOM_BOUNDS,
  al as GufeAlchemicalNetwork,
  Bc as GufeAtomMapping,
  dl as GufeChemicalSystem,
  Se as GufeElement,
  tl as GufeLigandNetwork,
  Nc as GufeProtein,
  ul as GufeProtocol,
  Sc as GufeSmallMolecule,
  $l as GufeSolvent,
  Cl as GufeTransformation,
  kl as GufeUnknownComponent,
  lc as GufeView,
  De as MAPPING_COLORS,
  it as MAPPING_RAMP_3D,
  Al as MAPPING_RAMP_NAME,
  El as PAYLOAD_TYPES,
  xl as SCHEMA_TYPES,
  Qn as VIEW_TAGS,
  mc as boundedZoom,
  dt as buildRegistry,
  $i as chromeMenu,
  ki as debugEnabled,
  Ce as defineElement,
  oi as describeProblem,
  bl as diffStatus,
  Rl as dispatchProblem,
  Qe as entryLabel,
  ac as formatIssues,
  ai as guardWheel,
  xi as logPayload,
  Be as lookup,
  Pe as lookupOfType,
  hi as mappingPayloadFor,
  Fl as mount,
  gl as parseConcentration,
  Ei as payloadJson,
  _n as resetControl,
  Xc as selectionText,
  Uo as uniqueAtoms,
  Pl as validateAs,
  sc as validatePayload,
  or as viewerInteraction,
  yc as wheelFactor
};
