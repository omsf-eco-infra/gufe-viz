const cr = {
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
    tooltipBg: "#16213e",
    tooltipBorder: "#2a4a7f",
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
    netLabelBg: "#16213e",
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
    tooltipBg: "#ffffff",
    tooltipBorder: "#cbd5e1",
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
    netLabelBg: "#ffffff",
    netHaloColor: "#fbcfe8",
    boxFill: "#eff6ff",
    boxStroke: "#bfdbfe"
  }
};
function vi() {
  try {
    return globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches ?? !1;
  } catch {
    return !1;
  }
}
const E = vi() ? cr.dark : cr.light;
function N(e, t, n) {
  const o = document.createElement(e);
  return t && (o.style.cssText = t), n != null && (o.textContent = n), o;
}
function Ne(e) {
  return String(e ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function me(e) {
  if (e == null) return "unknown error";
  const t = e.message;
  if (typeof t == "string" && t) return t;
  const n = String(e);
  return n === "[object Object]" ? e.name || "unknown error" : n;
}
const tt = (e) => e.toLocaleString("en-US"), Ze = "-", Te = `background:${E.btnBg};color:${E.btnFg};border:1px solid ${E.btnBorder};padding:4px 9px;font-size:11px;font-weight:bold;border-radius:3px;cursor:pointer;font-family:inherit;`, un = `background:${E.selectBg};color:${E.textPrimary};border:1px solid ${E.selectBorder};border-radius:6px;padding:4px 8px;font-size:12px;cursor:pointer;font-family:inherit;`;
function gn(e, t, n) {
  const o = N("div", "display:flex;gap:4px;"), a = e.map((r) => {
    const i = N("button", Te, r.label);
    return i.title = r.title || r.label, i.onmouseover = () => {
      i.style.background = E.btnBgHover;
    }, i.onmouseout = () => {
      i.style.background = t === r.id ? E.btnBgActive : E.btnBg;
    }, i.onclick = () => {
      o.setActive(r.id), n(r.id);
    }, o.appendChild(i), { id: r.id, btn: i };
  });
  return o.setActive = (r) => {
    t = r, a.forEach((i) => {
      i.btn.style.background = i.id === t ? E.btnBgActive : E.btnBg;
    });
  }, o.setActive(t), o;
}
function ce(e, t, n) {
  const o = N("span", "display:inline-flex;align-items:center;gap:5px;white-space:nowrap;");
  n && o.appendChild(
    N("span", `width:8px;height:8px;border-radius:50%;background:${n};display:inline-block;`)
  );
  const a = N("span");
  return a.innerHTML = `${Ne(e)} <b style="color:${E.textPrimary};">${Ne(t)}</b>`, o.appendChild(a), o;
}
function Be(e, t) {
  const n = N("div", "", `⚠ ${t}`);
  return n.style.cssText = `position:absolute;top:10px;left:50%;transform:translateX(-50%);max-width:90%;z-index:20;padding:6px 14px;border-radius:6px;font-size:12px;background:${E.warnBg};color:${E.warnFg};border:1px solid ${E.warnBorder};`, e.appendChild(n), n;
}
function ae(e, t = !1) {
  return N(
    "div",
    `flex:1;display:flex;align-items:center;justify-content:center;text-align:center;padding:24px;font-size:13px;color:${t ? E.errorFg : E.textMuted2};`,
    e
  );
}
function Me(e, t) {
  const n = N(
    "div",
    `display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;padding:9px 14px;flex-shrink:0;background:${E.toolbarBg};border-bottom:1px solid ${E.toolbarBorder};`
  );
  return n.titleEl = N("span", `font-weight:700;font-size:15px;color:${E.titleColor};letter-spacing:.02em;`, e), n.subtitleEl = N("span", `font-size:12px;color:${E.textMuted2};`, t || ""), n.statsEl = N(
    "div",
    `display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-left:auto;font-size:11px;color:${E.textMuted};`
  ), n.toggleEl = N("div", "display:flex;align-items:center;margin-left:10px;flex-shrink:0;"), n.appendChild(n.titleEl), n.appendChild(n.subtitleEl), n.appendChild(n.statsEl), n.appendChild(n.toggleEl), n;
}
function Ee(e, t, n = !1) {
  const o = N("div", "display:flex;gap:12px;align-items:baseline;padding:5px 0;min-width:0;");
  o.appendChild(
    N(
      "span",
      `flex:0 0 128px;font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:${E.textMuted2};`,
      e
    )
  );
  const a = N(
    "span",
    `flex:1;min-width:0;user-select:text;cursor:text;overflow-wrap:anywhere;color:${E.textPrimary};` + (n ? "font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:11px;" : "font-size:12px;"),
    t
  );
  return a.title = t, o.appendChild(a), o;
}
function dt(e) {
  return N(
    "span",
    `padding:1px 7px;border-radius:10px;font-size:10px;font-weight:700;letter-spacing:.04em;white-space:nowrap;background:${E.badgeBg};color:${E.badgeFg};`,
    e
  );
}
function fn() {
  return N(
    "div",
    `display:flex;flex-direction:column;gap:2px;padding:14px 18px;border-radius:10px;background:${E.cardBg};border:1px solid ${E.cardBorder};`
  );
}
function Kn() {
  const e = N("div", "flex:1;position:relative;min-height:0;min-width:0;"), t = N("div", "position:absolute;inset:0;");
  return t.dataset.gufeViewer = "", e.appendChild(t), { wrap: e, container: t };
}
const $i = !1;
function bi() {
  const e = N("span", "display:inline-flex;flex-direction:column;gap:2px;justify-content:center;");
  for (let t = 0; t < 3; t++)
    e.appendChild(N("span", `display:block;width:11px;height:1.5px;border-radius:1px;background:${E.btnFg};`));
  return e;
}
function wi(e, t, n = {}) {
  let o = n.open ?? $i, a = !1;
  const r = N("div", "flex-shrink:0;"), i = N("button", `${Te}display:inline-flex;align-items:center;gap:6px;padding:4px 8px;`);
  i.appendChild(bi()), i.setAttribute("aria-label", n.label || "Toggle menu");
  const s = () => {
    o && !a && (a = !0, r.appendChild(t())), r.style.display = o ? "" : "none", i.style.background = o ? E.btnBgActive : E.btnBg, i.setAttribute("aria-expanded", String(o));
  }, l = (g) => {
    g !== o && (o = g, s(), n.onToggle?.(o));
  };
  return i.onclick = () => l(!o), i.onmouseover = () => {
    i.style.background = o ? E.btnBgActive : E.btnBgHover;
  }, i.onmouseout = () => {
    i.style.background = o ? E.btnBgActive : E.btnBg;
  }, e.toggleEl.appendChild(i), s(), {
    panel: r,
    isOpen: () => o,
    setOpen: l
  };
}
const _i = ["debug", "gufe-debug"], Si = "debug", Ci = "GUFE_VIZ_DEBUG";
function ki() {
  return !!globalThis[Ci];
}
function xi() {
  try {
    const e = globalThis.location?.search;
    if (!e) return !1;
    const t = new URLSearchParams(e);
    return _i.some((n) => t.has(n));
  } catch {
    return !1;
  }
}
function Ei(e) {
  return e?.hasAttribute?.(Si) ? !0 : ki() || xi();
}
function Pi(e) {
  try {
    return JSON.stringify(e, null, 2) ?? String(e);
  } catch (t) {
    return `<could not be stringified: ${me(t)}>`;
  }
}
function Ri(e, t, n) {
  if (!Ei(n)) return;
  const o = Pi(t), a = t?.type, r = `[gufe-viz] ${e}${typeof a == "string" ? ` ${a}` : ""} (${o.length} chars)`, i = typeof console.groupCollapsed == "function";
  i ? console.groupCollapsed(r) : console.log(r), console.log(o), console.log(t), i && console.groupEnd?.();
}
const Ai = 150;
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
    this.style.display = "block", this.style.width = this.style.width || "100%", this.style.height = this.style.height || "100%", this.style.background = E.appBg, this.style.color = E.textPrimary, this.style.fontFamily = "'Inter',system-ui,sans-serif", typeof ResizeObserver < "u" && !this.#n && (this.#n = new ResizeObserver(() => {
      this.#o && clearTimeout(this.#o), this.#o = setTimeout(() => this.#e?.onResize?.(), Ai);
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
      `width:100%;height:100%;display:flex;flex-direction:column;overflow:hidden;background:${E.appBg};`
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
      t.appendChild(ae(this.placeholder()));
      return;
    }
    let o;
    try {
      o = this.renderView(t, this.#t);
    } catch (a) {
      this.#l(t, n, a);
      return;
    }
    o instanceof Promise ? o.then(
      (a) => this.#c(a, n),
      (a) => this.#l(t, n, a)
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
    n === this.#i && (console.warn("[gufe-viz] render failed:", o), t.replaceChildren(ae(`Failed to render: ${me(o)}`, !0)));
  }
  /** Force a resize pass - for hosts that know they resized us. */
  resize() {
    this.#e?.onResize?.();
  }
}
function Ce(e, t) {
  typeof customElements > "u" || customElements.get(e) || customElements.define(e, t);
}
function Fi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ft = { exports: {} }, xn = {}, Re = {}, ze = {}, En = {}, Pn = {}, Rn = {}, lr;
function pn() {
  return lr || (lr = 1, (function(e) {
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
    function a(p, ...u) {
      const v = [p[0]];
      let k = 0;
      for (; k < u.length; )
        s(v, u[k]), v.push(p[++k]);
      return new o(v);
    }
    e._ = a;
    const r = new o("+");
    function i(p, ...u) {
      const v = [y(p[0])];
      let k = 0;
      for (; k < u.length; )
        v.push(r), s(v, u[k]), v.push(r, y(p[++k]));
      return l(v), new o(v);
    }
    e.str = i;
    function s(p, u) {
      u instanceof o ? p.push(...u._items) : u instanceof n ? p.push(u) : p.push(_(u));
    }
    e.addCodeArg = s;
    function l(p) {
      let u = 1;
      for (; u < p.length - 1; ) {
        if (p[u] === r) {
          const v = g(p[u - 1], p[u + 1]);
          if (v !== void 0) {
            p.splice(u - 1, 3, v);
            continue;
          }
          p[u++] = "+";
        }
        u++;
      }
    }
    function g(p, u) {
      if (u === '""')
        return p;
      if (p === '""')
        return u;
      if (typeof p == "string")
        return u instanceof n || p[p.length - 1] !== '"' ? void 0 : typeof u != "string" ? `${p.slice(0, -1)}${u}"` : u[0] === '"' ? p.slice(0, -1) + u.slice(1) : void 0;
      if (typeof u == "string" && u[0] === '"' && !(p instanceof n))
        return `"${p}${u.slice(1)}`;
    }
    function h(p, u) {
      return u.emptyStr() ? p : p.emptyStr() ? u : i`${p}${u}`;
    }
    e.strConcat = h;
    function _(p) {
      return typeof p == "number" || typeof p == "boolean" || p === null ? p : y(Array.isArray(p) ? p.join(",") : p);
    }
    function b(p) {
      return new o(y(p));
    }
    e.stringify = b;
    function y(p) {
      return JSON.stringify(p).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    e.safeStringify = y;
    function w(p) {
      return typeof p == "string" && e.IDENTIFIER.test(p) ? new o(`.${p}`) : a`[${p}]`;
    }
    e.getProperty = w;
    function S(p) {
      if (typeof p == "string" && e.IDENTIFIER.test(p))
        return new o(`${p}`);
      throw new Error(`CodeGen: invalid export name: ${p}, use explicit $id name mapping`);
    }
    e.getEsmExportName = S;
    function f(p) {
      return new o(p.toString());
    }
    e.regexpCode = f;
  })(Rn)), Rn;
}
var An = {}, dr;
function ur() {
  return dr || (dr = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0;
    const t = /* @__PURE__ */ pn();
    class n extends Error {
      constructor(g) {
        super(`CodeGen: "code" for ${g} not defined`), this.value = g.value;
      }
    }
    var o;
    (function(l) {
      l[l.Started = 0] = "Started", l[l.Completed = 1] = "Completed";
    })(o || (e.UsedValueState = o = {})), e.varKinds = {
      const: new t.Name("const"),
      let: new t.Name("let"),
      var: new t.Name("var")
    };
    class a {
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
        var h, _;
        if (!((_ = (h = this._parent) === null || h === void 0 ? void 0 : h._prefixes) === null || _ === void 0) && _.has(g) || this._prefixes && !this._prefixes.has(g))
          throw new Error(`CodeGen: prefix "${g}" is not allowed in this scope`);
        return this._names[g] = { prefix: g, index: 0 };
      }
    }
    e.Scope = a;
    class r extends t.Name {
      constructor(g, h) {
        super(h), this.prefix = g;
      }
      setValue(g, { property: h, itemIndex: _ }) {
        this.value = g, this.scopePath = (0, t._)`.${new t.Name(h)}[${_}]`;
      }
    }
    e.ValueScopeName = r;
    const i = (0, t._)`\n`;
    class s extends a {
      constructor(g) {
        super(g), this._values = {}, this._scope = g.scope, this.opts = { ...g, _n: g.lines ? i : t.nil };
      }
      get() {
        return this._scope;
      }
      name(g) {
        return new r(g, this._newName(g));
      }
      value(g, h) {
        var _;
        if (h.ref === void 0)
          throw new Error("CodeGen: ref must be passed in value");
        const b = this.toName(g), { prefix: y } = b, w = (_ = h.key) !== null && _ !== void 0 ? _ : h.ref;
        let S = this._values[y];
        if (S) {
          const u = S.get(w);
          if (u)
            return u;
        } else
          S = this._values[y] = /* @__PURE__ */ new Map();
        S.set(w, b);
        const f = this._scope[y] || (this._scope[y] = []), p = f.length;
        return f[p] = h.ref, b.setValue(h, { property: y, itemIndex: p }), b;
      }
      getValue(g, h) {
        const _ = this._values[g];
        if (_)
          return _.get(h);
      }
      scopeRefs(g, h = this._values) {
        return this._reduceValues(h, (_) => {
          if (_.scopePath === void 0)
            throw new Error(`CodeGen: name "${_}" has no value`);
          return (0, t._)`${g}${_.scopePath}`;
        });
      }
      scopeCode(g = this._values, h, _) {
        return this._reduceValues(g, (b) => {
          if (b.value === void 0)
            throw new Error(`CodeGen: name "${b}" has no value`);
          return b.value.code;
        }, h, _);
      }
      _reduceValues(g, h, _ = {}, b) {
        let y = t.nil;
        for (const w in g) {
          const S = g[w];
          if (!S)
            continue;
          const f = _[w] = _[w] || /* @__PURE__ */ new Map();
          S.forEach((p) => {
            if (f.has(p))
              return;
            f.set(p, o.Started);
            let u = h(p);
            if (u) {
              const v = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
              y = (0, t._)`${y}${v} ${p} = ${u};${this.opts._n}`;
            } else if (u = b?.(p))
              y = (0, t._)`${y}${u}${this.opts._n}`;
            else
              throw new n(p);
            f.set(p, o.Completed);
          });
        }
        return y;
      }
    }
    e.ValueScope = s;
  })(An)), An;
}
var fr;
function Z() {
  return fr || (fr = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
    const t = /* @__PURE__ */ pn(), n = /* @__PURE__ */ ur();
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
    var a = /* @__PURE__ */ ur();
    Object.defineProperty(e, "Scope", { enumerable: !0, get: function() {
      return a.Scope;
    } }), Object.defineProperty(e, "ValueScope", { enumerable: !0, get: function() {
      return a.ValueScope;
    } }), Object.defineProperty(e, "ValueScopeName", { enumerable: !0, get: function() {
      return a.ValueScopeName;
    } }), Object.defineProperty(e, "varKinds", { enumerable: !0, get: function() {
      return a.varKinds;
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
      constructor($, C, T) {
        super(), this.varKind = $, this.name = C, this.rhs = T;
      }
      render({ es5: $, _n: C }) {
        const T = $ ? n.varKinds.var : this.varKind, K = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
        return `${T} ${this.name}${K};` + C;
      }
      optimizeNames($, C) {
        if ($[this.name.str])
          return this.rhs && (this.rhs = L(this.rhs, $, C)), this;
      }
      get names() {
        return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
      }
    }
    class s extends r {
      constructor($, C, T) {
        super(), this.lhs = $, this.rhs = C, this.sideEffects = T;
      }
      render({ _n: $ }) {
        return `${this.lhs} = ${this.rhs};` + $;
      }
      optimizeNames($, C) {
        if (!(this.lhs instanceof t.Name && !$[this.lhs.str] && !this.sideEffects))
          return this.rhs = L(this.rhs, $, C), this;
      }
      get names() {
        const $ = this.lhs instanceof t.Name ? {} : { ...this.lhs.names };
        return z($, this.rhs);
      }
    }
    class l extends s {
      constructor($, C, T, K) {
        super($, T, K), this.op = C;
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
    class _ extends r {
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
        return this.code = L(this.code, $, C), this;
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
        return this.nodes.reduce((C, T) => C + T.render($), "");
      }
      optimizeNodes() {
        const { nodes: $ } = this;
        let C = $.length;
        for (; C--; ) {
          const T = $[C].optimizeNodes();
          Array.isArray(T) ? $.splice(C, 1, ...T) : T ? $[C] = T : $.splice(C, 1);
        }
        return $.length > 0 ? this : void 0;
      }
      optimizeNames($, C) {
        const { nodes: T } = this;
        let K = T.length;
        for (; K--; ) {
          const G = T[K];
          G.optimizeNames($, C) || (Y($, G.names), T.splice(K, 1));
        }
        return T.length > 0 ? this : void 0;
      }
      get names() {
        return this.nodes.reduce(($, C) => R($, C.names), {});
      }
    }
    class w extends y {
      render($) {
        return "{" + $._n + super.render($) + "}" + $._n;
      }
    }
    class S extends y {
    }
    class f extends w {
    }
    f.kind = "else";
    class p extends w {
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
          const T = C.optimizeNodes();
          C = this.else = Array.isArray(T) ? new f(T) : T;
        }
        if (C)
          return $ === !1 ? C instanceof p ? C : C.nodes : this.nodes.length ? this : new p(H($), C instanceof p ? [C] : C.nodes);
        if (!($ === !1 || !this.nodes.length))
          return this;
      }
      optimizeNames($, C) {
        var T;
        if (this.else = (T = this.else) === null || T === void 0 ? void 0 : T.optimizeNames($, C), !!(super.optimizeNames($, C) || this.else))
          return this.condition = L(this.condition, $, C), this;
      }
      get names() {
        const $ = super.names;
        return z($, this.condition), this.else && R($, this.else.names), $;
      }
    }
    p.kind = "if";
    class u extends w {
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
          return this.iteration = L(this.iteration, $, C), this;
      }
      get names() {
        return R(super.names, this.iteration.names);
      }
    }
    class k extends u {
      constructor($, C, T, K) {
        super(), this.varKind = $, this.name = C, this.from = T, this.to = K;
      }
      render($) {
        const C = $.es5 ? n.varKinds.var : this.varKind, { name: T, from: K, to: G } = this;
        return `for(${C} ${T}=${K}; ${T}<${G}; ${T}++)` + super.render($);
      }
      get names() {
        const $ = z(super.names, this.from);
        return z($, this.to);
      }
    }
    class c extends u {
      constructor($, C, T, K) {
        super(), this.loop = $, this.varKind = C, this.name = T, this.iterable = K;
      }
      render($) {
        return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render($);
      }
      optimizeNames($, C) {
        if (super.optimizeNames($, C))
          return this.iterable = L(this.iterable, $, C), this;
      }
      get names() {
        return R(super.names, this.iterable.names);
      }
    }
    class d extends w {
      constructor($, C, T) {
        super(), this.name = $, this.args = C, this.async = T;
      }
      render($) {
        return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render($);
      }
    }
    d.kind = "func";
    class m extends y {
      render($) {
        return "return " + super.render($);
      }
    }
    m.kind = "return";
    class x extends w {
      render($) {
        let C = "try" + super.render($);
        return this.catch && (C += this.catch.render($)), this.finally && (C += this.finally.render($)), C;
      }
      optimizeNodes() {
        var $, C;
        return super.optimizeNodes(), ($ = this.catch) === null || $ === void 0 || $.optimizeNodes(), (C = this.finally) === null || C === void 0 || C.optimizeNodes(), this;
      }
      optimizeNames($, C) {
        var T, K;
        return super.optimizeNames($, C), (T = this.catch) === null || T === void 0 || T.optimizeNames($, C), (K = this.finally) === null || K === void 0 || K.optimizeNames($, C), this;
      }
      get names() {
        const $ = super.names;
        return this.catch && R($, this.catch.names), this.finally && R($, this.finally.names), $;
      }
    }
    class P extends w {
      constructor($) {
        super(), this.error = $;
      }
      render($) {
        return `catch(${this.error})` + super.render($);
      }
    }
    P.kind = "catch";
    class O extends w {
      render($) {
        return "finally" + super.render($);
      }
    }
    O.kind = "finally";
    class I {
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
        const T = this._extScope.value($, C);
        return (this._values[T.prefix] || (this._values[T.prefix] = /* @__PURE__ */ new Set())).add(T), T;
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
      _def($, C, T, K) {
        const G = this._scope.toName(C);
        return T !== void 0 && K && (this._constants[G.str] = T), this._leafNode(new i($, G, T)), G;
      }
      // `const` declaration (`var` in es5 mode)
      const($, C, T) {
        return this._def(n.varKinds.const, $, C, T);
      }
      // `let` declaration with optional assignment (`var` in es5 mode)
      let($, C, T) {
        return this._def(n.varKinds.let, $, C, T);
      }
      // `var` declaration with optional assignment
      var($, C, T) {
        return this._def(n.varKinds.var, $, C, T);
      }
      // assignment code
      assign($, C, T) {
        return this._leafNode(new s($, C, T));
      }
      // `+=` code
      add($, C) {
        return this._leafNode(new l($, e.operators.ADD, C));
      }
      // appends passed SafeExpr to code or executes Block
      code($) {
        return typeof $ == "function" ? $() : $ !== t.nil && this._leafNode(new b($)), this;
      }
      // returns code for object literal for the passed argument list of key-value pairs
      object(...$) {
        const C = ["{"];
        for (const [T, K] of $)
          C.length > 1 && C.push(","), C.push(T), (T !== K || this.opts.es5) && (C.push(":"), (0, t.addCodeArg)(C, K));
        return C.push("}"), new t._Code(C);
      }
      // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
      if($, C, T) {
        if (this._blockNode(new p($)), C && T)
          this.code(C).else().code(T).endIf();
        else if (C)
          this.code(C).endIf();
        else if (T)
          throw new Error('CodeGen: "else" body without "then" body');
        return this;
      }
      // `else if` clause - invalid without `if` or after `else` clauses
      elseIf($) {
        return this._elseNode(new p($));
      }
      // `else` clause - only valid after `if` or `else if` clauses
      else() {
        return this._elseNode(new f());
      }
      // end `if` statement (needed if gen.if was used only with condition)
      endIf() {
        return this._endBlockNode(p, f);
      }
      _for($, C) {
        return this._blockNode($), C && this.code(C).endFor(), this;
      }
      // a generic `for` clause (or statement if `forBody` is passed)
      for($, C) {
        return this._for(new v($), C);
      }
      // `for` statement for a range of values
      forRange($, C, T, K, G = this.opts.es5 ? n.varKinds.var : n.varKinds.let) {
        const re = this._scope.toName($);
        return this._for(new k(G, re, C, T), () => K(re));
      }
      // `for-of` statement (in es5 mode replace with a normal for loop)
      forOf($, C, T, K = n.varKinds.const) {
        const G = this._scope.toName($);
        if (this.opts.es5) {
          const re = C instanceof t.Name ? C : this.var("_arr", C);
          return this.forRange("_i", 0, (0, t._)`${re}.length`, (te) => {
            this.var(G, (0, t._)`${re}[${te}]`), T(G);
          });
        }
        return this._for(new c("of", K, G, C), () => T(G));
      }
      // `for-in` statement.
      // With option `ownProperties` replaced with a `for-of` loop for object keys
      forIn($, C, T, K = this.opts.es5 ? n.varKinds.var : n.varKinds.const) {
        if (this.opts.ownProperties)
          return this.forOf($, (0, t._)`Object.keys(${C})`, T);
        const G = this._scope.toName($);
        return this._for(new c("in", K, G, C), () => T(G));
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
        const C = new m();
        if (this._blockNode(C), this.code($), C.nodes.length !== 1)
          throw new Error('CodeGen: "return" should have one node');
        return this._endBlockNode(m);
      }
      // `try` statement
      try($, C, T) {
        if (!C && !T)
          throw new Error('CodeGen: "try" without "catch" and "finally"');
        const K = new x();
        if (this._blockNode(K), this.code($), C) {
          const G = this.name("e");
          this._currNode = K.catch = new P(G), C(G);
        }
        return T && (this._currNode = K.finally = new O(), this.code(T)), this._endBlockNode(P, O);
      }
      // `throw` statement
      throw($) {
        return this._leafNode(new _($));
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
        const T = this._nodes.length - C;
        if (T < 0 || $ !== void 0 && T !== $)
          throw new Error(`CodeGen: wrong number of nodes: ${T} vs ${$} expected`);
        return this._nodes.length = C, this;
      }
      // `function` heading (or definition if funcBody is passed)
      func($, C = t.nil, T, K) {
        return this._blockNode(new d($, C, T)), K && this.code(K).endFunc(), this;
      }
      // end function definition
      endFunc() {
        return this._endBlockNode(d);
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
        const T = this._currNode;
        if (T instanceof $ || C && T instanceof C)
          return this._nodes.pop(), this;
        throw new Error(`CodeGen: not in block "${C ? `${$.kind}/${C.kind}` : $.kind}"`);
      }
      _elseNode($) {
        const C = this._currNode;
        if (!(C instanceof p))
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
    e.CodeGen = I;
    function R(j, $) {
      for (const C in $)
        j[C] = (j[C] || 0) + ($[C] || 0);
      return j;
    }
    function z(j, $) {
      return $ instanceof t._CodeOrName ? R(j, $.names) : j;
    }
    function L(j, $, C) {
      if (j instanceof t.Name)
        return T(j);
      if (!K(j))
        return j;
      return new t._Code(j._items.reduce((G, re) => (re instanceof t.Name && (re = T(re)), re instanceof t._Code ? G.push(...re._items) : G.push(re), G), []));
      function T(G) {
        const re = C[G.str];
        return re === void 0 || $[G.str] !== 1 ? G : (delete $[G.str], re);
      }
      function K(G) {
        return G instanceof t._Code && G._items.some((re) => re instanceof t.Name && $[re.str] === 1 && C[re.str] !== void 0);
      }
    }
    function Y(j, $) {
      for (const C in $)
        j[C] = (j[C] || 0) - ($[C] || 0);
    }
    function H(j) {
      return typeof j == "boolean" || typeof j == "number" || j === null ? !j : (0, t._)`!${q(j)}`;
    }
    e.not = H;
    const X = F(e.operators.AND);
    function W(...j) {
      return j.reduce(X);
    }
    e.and = W;
    const se = F(e.operators.OR);
    function V(...j) {
      return j.reduce(se);
    }
    e.or = V;
    function F(j) {
      return ($, C) => $ === t.nil ? C : C === t.nil ? $ : (0, t._)`${q($)} ${j} ${q(C)}`;
    }
    function q(j) {
      return j instanceof t.Name ? j : (0, t._)`(${j})`;
    }
  })(Pn)), Pn;
}
var Q = {}, pr;
function ne() {
  if (pr) return Q;
  pr = 1, Object.defineProperty(Q, "__esModule", { value: !0 }), Q.checkStrictMode = Q.getErrorPath = Q.Type = Q.useFunc = Q.setEvaluated = Q.evaluatedPropsToName = Q.mergeEvaluated = Q.eachItem = Q.unescapeJsonPointer = Q.escapeJsonPointer = Q.escapeFragment = Q.unescapeFragment = Q.schemaRefOrVal = Q.schemaHasRulesButRef = Q.schemaHasRules = Q.checkUnknownRules = Q.alwaysValidSchema = Q.toHash = void 0;
  const e = /* @__PURE__ */ Z(), t = /* @__PURE__ */ pn();
  function n(c) {
    const d = {};
    for (const m of c)
      d[m] = !0;
    return d;
  }
  Q.toHash = n;
  function o(c, d) {
    return typeof d == "boolean" ? d : Object.keys(d).length === 0 ? !0 : (a(c, d), !r(d, c.self.RULES.all));
  }
  Q.alwaysValidSchema = o;
  function a(c, d = c.schema) {
    const { opts: m, self: x } = c;
    if (!m.strictSchema || typeof d == "boolean")
      return;
    const P = x.RULES.keywords;
    for (const O in d)
      P[O] || k(c, `unknown keyword: "${O}"`);
  }
  Q.checkUnknownRules = a;
  function r(c, d) {
    if (typeof c == "boolean")
      return !c;
    for (const m in c)
      if (d[m])
        return !0;
    return !1;
  }
  Q.schemaHasRules = r;
  function i(c, d) {
    if (typeof c == "boolean")
      return !c;
    for (const m in c)
      if (m !== "$ref" && d.all[m])
        return !0;
    return !1;
  }
  Q.schemaHasRulesButRef = i;
  function s({ topSchemaRef: c, schemaPath: d }, m, x, P) {
    if (!P) {
      if (typeof m == "number" || typeof m == "boolean")
        return m;
      if (typeof m == "string")
        return (0, e._)`${m}`;
    }
    return (0, e._)`${c}${d}${(0, e.getProperty)(x)}`;
  }
  Q.schemaRefOrVal = s;
  function l(c) {
    return _(decodeURIComponent(c));
  }
  Q.unescapeFragment = l;
  function g(c) {
    return encodeURIComponent(h(c));
  }
  Q.escapeFragment = g;
  function h(c) {
    return typeof c == "number" ? `${c}` : c.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  Q.escapeJsonPointer = h;
  function _(c) {
    return c.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  Q.unescapeJsonPointer = _;
  function b(c, d) {
    if (Array.isArray(c))
      for (const m of c)
        d(m);
    else
      d(c);
  }
  Q.eachItem = b;
  function y({ mergeNames: c, mergeToName: d, mergeValues: m, resultToName: x }) {
    return (P, O, I, R) => {
      const z = I === void 0 ? O : I instanceof e.Name ? (O instanceof e.Name ? c(P, O, I) : d(P, O, I), I) : O instanceof e.Name ? (d(P, I, O), O) : m(O, I);
      return R === e.Name && !(z instanceof e.Name) ? x(P, z) : z;
    };
  }
  Q.mergeEvaluated = {
    props: y({
      mergeNames: (c, d, m) => c.if((0, e._)`${m} !== true && ${d} !== undefined`, () => {
        c.if((0, e._)`${d} === true`, () => c.assign(m, !0), () => c.assign(m, (0, e._)`${m} || {}`).code((0, e._)`Object.assign(${m}, ${d})`));
      }),
      mergeToName: (c, d, m) => c.if((0, e._)`${m} !== true`, () => {
        d === !0 ? c.assign(m, !0) : (c.assign(m, (0, e._)`${m} || {}`), S(c, m, d));
      }),
      mergeValues: (c, d) => c === !0 ? !0 : { ...c, ...d },
      resultToName: w
    }),
    items: y({
      mergeNames: (c, d, m) => c.if((0, e._)`${m} !== true && ${d} !== undefined`, () => c.assign(m, (0, e._)`${d} === true ? true : ${m} > ${d} ? ${m} : ${d}`)),
      mergeToName: (c, d, m) => c.if((0, e._)`${m} !== true`, () => c.assign(m, d === !0 ? !0 : (0, e._)`${m} > ${d} ? ${m} : ${d}`)),
      mergeValues: (c, d) => c === !0 ? !0 : Math.max(c, d),
      resultToName: (c, d) => c.var("items", d)
    })
  };
  function w(c, d) {
    if (d === !0)
      return c.var("props", !0);
    const m = c.var("props", (0, e._)`{}`);
    return d !== void 0 && S(c, m, d), m;
  }
  Q.evaluatedPropsToName = w;
  function S(c, d, m) {
    Object.keys(m).forEach((x) => c.assign((0, e._)`${d}${(0, e.getProperty)(x)}`, !0));
  }
  Q.setEvaluated = S;
  const f = {};
  function p(c, d) {
    return c.scopeValue("func", {
      ref: d,
      code: f[d.code] || (f[d.code] = new t._Code(d.code))
    });
  }
  Q.useFunc = p;
  var u;
  (function(c) {
    c[c.Num = 0] = "Num", c[c.Str = 1] = "Str";
  })(u || (Q.Type = u = {}));
  function v(c, d, m) {
    if (c instanceof e.Name) {
      const x = d === u.Num;
      return m ? x ? (0, e._)`"[" + ${c} + "]"` : (0, e._)`"['" + ${c} + "']"` : x ? (0, e._)`"/" + ${c}` : (0, e._)`"/" + ${c}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return m ? (0, e.getProperty)(c).toString() : "/" + h(c);
  }
  Q.getErrorPath = v;
  function k(c, d, m = c.opts.strictSchema) {
    if (m) {
      if (d = `strict mode: ${d}`, m === !0)
        throw new Error(d);
      c.self.logger.warn(d);
    }
  }
  return Q.checkStrictMode = k, Q;
}
var pt = {}, hr;
function ke() {
  if (hr) return pt;
  hr = 1, Object.defineProperty(pt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Z(), t = {
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
  return pt.default = t, pt;
}
var mr;
function yn() {
  return mr || (mr = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
    const t = /* @__PURE__ */ Z(), n = /* @__PURE__ */ ne(), o = /* @__PURE__ */ ke();
    e.keywordError = {
      message: ({ keyword: f }) => (0, t.str)`must pass "${f}" keyword validation`
    }, e.keyword$DataError = {
      message: ({ keyword: f, schemaType: p }) => p ? (0, t.str)`"${f}" keyword must be ${p} ($data)` : (0, t.str)`"${f}" keyword is invalid ($data)`
    };
    function a(f, p = e.keywordError, u, v) {
      const { it: k } = f, { gen: c, compositeRule: d, allErrors: m } = k, x = _(f, p, u);
      v ?? (d || m) ? l(c, x) : g(k, (0, t._)`[${x}]`);
    }
    e.reportError = a;
    function r(f, p = e.keywordError, u) {
      const { it: v } = f, { gen: k, compositeRule: c, allErrors: d } = v, m = _(f, p, u);
      l(k, m), c || d || g(v, o.default.vErrors);
    }
    e.reportExtraError = r;
    function i(f, p) {
      f.assign(o.default.errors, p), f.if((0, t._)`${o.default.vErrors} !== null`, () => f.if(p, () => f.assign((0, t._)`${o.default.vErrors}.length`, p), () => f.assign(o.default.vErrors, null)));
    }
    e.resetErrorsCount = i;
    function s({ gen: f, keyword: p, schemaValue: u, data: v, errsCount: k, it: c }) {
      if (k === void 0)
        throw new Error("ajv implementation error");
      const d = f.name("err");
      f.forRange("i", k, o.default.errors, (m) => {
        f.const(d, (0, t._)`${o.default.vErrors}[${m}]`), f.if((0, t._)`${d}.instancePath === undefined`, () => f.assign((0, t._)`${d}.instancePath`, (0, t.strConcat)(o.default.instancePath, c.errorPath))), f.assign((0, t._)`${d}.schemaPath`, (0, t.str)`${c.errSchemaPath}/${p}`), c.opts.verbose && (f.assign((0, t._)`${d}.schema`, u), f.assign((0, t._)`${d}.data`, v));
      });
    }
    e.extendErrors = s;
    function l(f, p) {
      const u = f.const("err", p);
      f.if((0, t._)`${o.default.vErrors} === null`, () => f.assign(o.default.vErrors, (0, t._)`[${u}]`), (0, t._)`${o.default.vErrors}.push(${u})`), f.code((0, t._)`${o.default.errors}++`);
    }
    function g(f, p) {
      const { gen: u, validateName: v, schemaEnv: k } = f;
      k.$async ? u.throw((0, t._)`new ${f.ValidationError}(${p})`) : (u.assign((0, t._)`${v}.errors`, p), u.return(!1));
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
    function _(f, p, u) {
      const { createErrors: v } = f.it;
      return v === !1 ? (0, t._)`{}` : b(f, p, u);
    }
    function b(f, p, u = {}) {
      const { gen: v, it: k } = f, c = [
        y(k, u),
        w(f, u)
      ];
      return S(f, p, c), v.object(...c);
    }
    function y({ errorPath: f }, { instancePath: p }) {
      const u = p ? (0, t.str)`${f}${(0, n.getErrorPath)(p, n.Type.Str)}` : f;
      return [o.default.instancePath, (0, t.strConcat)(o.default.instancePath, u)];
    }
    function w({ keyword: f, it: { errSchemaPath: p } }, { schemaPath: u, parentSchema: v }) {
      let k = v ? p : (0, t.str)`${p}/${f}`;
      return u && (k = (0, t.str)`${k}${(0, n.getErrorPath)(u, n.Type.Str)}`), [h.schemaPath, k];
    }
    function S(f, { params: p, message: u }, v) {
      const { keyword: k, data: c, schemaValue: d, it: m } = f, { opts: x, propertyName: P, topSchemaRef: O, schemaPath: I } = m;
      v.push([h.keyword, k], [h.params, typeof p == "function" ? p(f) : p || (0, t._)`{}`]), x.messages && v.push([h.message, typeof u == "function" ? u(f) : u]), x.verbose && v.push([h.schema, d], [h.parentSchema, (0, t._)`${O}${I}`], [o.default.data, c]), P && v.push([h.propertyName, P]);
    }
  })(En)), En;
}
var gr;
function Ni() {
  if (gr) return ze;
  gr = 1, Object.defineProperty(ze, "__esModule", { value: !0 }), ze.boolOrEmptySchema = ze.topBoolOrEmptySchema = void 0;
  const e = /* @__PURE__ */ yn(), t = /* @__PURE__ */ Z(), n = /* @__PURE__ */ ke(), o = {
    message: "boolean schema is false"
  };
  function a(s) {
    const { gen: l, schema: g, validateName: h } = s;
    g === !1 ? i(s, !1) : typeof g == "object" && g.$async === !0 ? l.return(n.default.data) : (l.assign((0, t._)`${h}.errors`, null), l.return(!0));
  }
  ze.topBoolOrEmptySchema = a;
  function r(s, l) {
    const { gen: g, schema: h } = s;
    h === !1 ? (g.var(l, !1), i(s)) : g.var(l, !0);
  }
  ze.boolOrEmptySchema = r;
  function i(s, l) {
    const { gen: g, data: h } = s, _ = {
      gen: g,
      keyword: "false schema",
      data: h,
      schema: !1,
      schemaCode: !1,
      schemaValue: !1,
      params: {},
      it: s
    };
    (0, e.reportError)(_, o, void 0, l);
  }
  return ze;
}
var ue = {}, Ie = {}, yr;
function Yo() {
  if (yr) return Ie;
  yr = 1, Object.defineProperty(Ie, "__esModule", { value: !0 }), Ie.getRules = Ie.isJSONType = void 0;
  const e = ["string", "number", "integer", "boolean", "null", "object", "array"], t = new Set(e);
  function n(a) {
    return typeof a == "string" && t.has(a);
  }
  Ie.isJSONType = n;
  function o() {
    const a = {
      number: { type: "number", rules: [] },
      string: { type: "string", rules: [] },
      array: { type: "array", rules: [] },
      object: { type: "object", rules: [] }
    };
    return {
      types: { ...a, integer: !0, boolean: !0, null: !0 },
      rules: [{ rules: [] }, a.number, a.string, a.array, a.object],
      post: { rules: [] },
      all: {},
      keywords: {}
    };
  }
  return Ie.getRules = o, Ie;
}
var Ae = {}, vr;
function Xo() {
  if (vr) return Ae;
  vr = 1, Object.defineProperty(Ae, "__esModule", { value: !0 }), Ae.shouldUseRule = Ae.shouldUseGroup = Ae.schemaHasRulesForType = void 0;
  function e({ schema: o, self: a }, r) {
    const i = a.RULES.types[r];
    return i && i !== !0 && t(o, i);
  }
  Ae.schemaHasRulesForType = e;
  function t(o, a) {
    return a.rules.some((r) => n(o, r));
  }
  Ae.shouldUseGroup = t;
  function n(o, a) {
    var r;
    return o[a.keyword] !== void 0 || ((r = a.definition.implements) === null || r === void 0 ? void 0 : r.some((i) => o[i] !== void 0));
  }
  return Ae.shouldUseRule = n, Ae;
}
var $r;
function hn() {
  if ($r) return ue;
  $r = 1, Object.defineProperty(ue, "__esModule", { value: !0 }), ue.reportTypeError = ue.checkDataTypes = ue.checkDataType = ue.coerceAndCheckDataType = ue.getJSONTypes = ue.getSchemaTypes = ue.DataType = void 0;
  const e = /* @__PURE__ */ Yo(), t = /* @__PURE__ */ Xo(), n = /* @__PURE__ */ yn(), o = /* @__PURE__ */ Z(), a = /* @__PURE__ */ ne();
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
  function l(u, v) {
    const { gen: k, data: c, opts: d } = u, m = h(v, d.coerceTypes), x = v.length > 0 && !(m.length === 0 && v.length === 1 && (0, t.schemaHasRulesForType)(u, v[0]));
    if (x) {
      const P = w(v, c, d.strictNumbers, r.Wrong);
      k.if(P, () => {
        m.length ? _(u, v, m) : f(u);
      });
    }
    return x;
  }
  ue.coerceAndCheckDataType = l;
  const g = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
  function h(u, v) {
    return v ? u.filter((k) => g.has(k) || v === "array" && k === "array") : [];
  }
  function _(u, v, k) {
    const { gen: c, data: d, opts: m } = u, x = c.let("dataType", (0, o._)`typeof ${d}`), P = c.let("coerced", (0, o._)`undefined`);
    m.coerceTypes === "array" && c.if((0, o._)`${x} == 'object' && Array.isArray(${d}) && ${d}.length == 1`, () => c.assign(d, (0, o._)`${d}[0]`).assign(x, (0, o._)`typeof ${d}`).if(w(v, d, m.strictNumbers), () => c.assign(P, d))), c.if((0, o._)`${P} !== undefined`);
    for (const I of k)
      (g.has(I) || I === "array" && m.coerceTypes === "array") && O(I);
    c.else(), f(u), c.endIf(), c.if((0, o._)`${P} !== undefined`, () => {
      c.assign(d, P), b(u, P);
    });
    function O(I) {
      switch (I) {
        case "string":
          c.elseIf((0, o._)`${x} == "number" || ${x} == "boolean"`).assign(P, (0, o._)`"" + ${d}`).elseIf((0, o._)`${d} === null`).assign(P, (0, o._)`""`);
          return;
        case "number":
          c.elseIf((0, o._)`${x} == "boolean" || ${d} === null
              || (${x} == "string" && ${d} && ${d} == +${d})`).assign(P, (0, o._)`+${d}`);
          return;
        case "integer":
          c.elseIf((0, o._)`${x} === "boolean" || ${d} === null
              || (${x} === "string" && ${d} && ${d} == +${d} && !(${d} % 1))`).assign(P, (0, o._)`+${d}`);
          return;
        case "boolean":
          c.elseIf((0, o._)`${d} === "false" || ${d} === 0 || ${d} === null`).assign(P, !1).elseIf((0, o._)`${d} === "true" || ${d} === 1`).assign(P, !0);
          return;
        case "null":
          c.elseIf((0, o._)`${d} === "" || ${d} === 0 || ${d} === false`), c.assign(P, null);
          return;
        case "array":
          c.elseIf((0, o._)`${x} === "string" || ${x} === "number"
              || ${x} === "boolean" || ${d} === null`).assign(P, (0, o._)`[${d}]`);
      }
    }
  }
  function b({ gen: u, parentData: v, parentDataProperty: k }, c) {
    u.if((0, o._)`${v} !== undefined`, () => u.assign((0, o._)`${v}[${k}]`, c));
  }
  function y(u, v, k, c = r.Correct) {
    const d = c === r.Correct ? o.operators.EQ : o.operators.NEQ;
    let m;
    switch (u) {
      case "null":
        return (0, o._)`${v} ${d} null`;
      case "array":
        m = (0, o._)`Array.isArray(${v})`;
        break;
      case "object":
        m = (0, o._)`${v} && typeof ${v} == "object" && !Array.isArray(${v})`;
        break;
      case "integer":
        m = x((0, o._)`!(${v} % 1) && !isNaN(${v})`);
        break;
      case "number":
        m = x();
        break;
      default:
        return (0, o._)`typeof ${v} ${d} ${u}`;
    }
    return c === r.Correct ? m : (0, o.not)(m);
    function x(P = o.nil) {
      return (0, o.and)((0, o._)`typeof ${v} == "number"`, P, k ? (0, o._)`isFinite(${v})` : o.nil);
    }
  }
  ue.checkDataType = y;
  function w(u, v, k, c) {
    if (u.length === 1)
      return y(u[0], v, k, c);
    let d;
    const m = (0, a.toHash)(u);
    if (m.array && m.object) {
      const x = (0, o._)`typeof ${v} != "object"`;
      d = m.null ? x : (0, o._)`!${v} || ${x}`, delete m.null, delete m.array, delete m.object;
    } else
      d = o.nil;
    m.number && delete m.integer;
    for (const x in m)
      d = (0, o.and)(d, y(x, v, k, c));
    return d;
  }
  ue.checkDataTypes = w;
  const S = {
    message: ({ schema: u }) => `must be ${u}`,
    params: ({ schema: u, schemaValue: v }) => typeof u == "string" ? (0, o._)`{type: ${u}}` : (0, o._)`{type: ${v}}`
  };
  function f(u) {
    const v = p(u);
    (0, n.reportError)(v, S);
  }
  ue.reportTypeError = f;
  function p(u) {
    const { gen: v, data: k, schema: c } = u, d = (0, a.schemaRefOrVal)(u, c, "type");
    return {
      gen: v,
      keyword: "type",
      data: k,
      schema: c.type,
      schemaCode: d,
      schemaValue: d,
      parentSchema: c,
      params: {},
      it: u
    };
  }
  return ue;
}
var nt = {}, br;
function Mi() {
  if (br) return nt;
  br = 1, Object.defineProperty(nt, "__esModule", { value: !0 }), nt.assignDefaults = void 0;
  const e = /* @__PURE__ */ Z(), t = /* @__PURE__ */ ne();
  function n(a, r) {
    const { properties: i, items: s } = a.schema;
    if (r === "object" && i)
      for (const l in i)
        o(a, l, i[l].default);
    else r === "array" && Array.isArray(s) && s.forEach((l, g) => o(a, g, l.default));
  }
  nt.assignDefaults = n;
  function o(a, r, i) {
    const { gen: s, compositeRule: l, data: g, opts: h } = a;
    if (i === void 0)
      return;
    const _ = (0, e._)`${g}${(0, e.getProperty)(r)}`;
    if (l) {
      (0, t.checkStrictMode)(a, `default is ignored for: ${_}`);
      return;
    }
    let b = (0, e._)`${_} === undefined`;
    h.useDefaults === "empty" && (b = (0, e._)`${b} || ${_} === null || ${_} === ""`), s.if(b, (0, e._)`${_} = ${(0, e.stringify)(i)}`);
  }
  return nt;
}
var we = {}, ie = {}, wr;
function xe() {
  if (wr) return ie;
  wr = 1, Object.defineProperty(ie, "__esModule", { value: !0 }), ie.validateUnion = ie.validateArray = ie.usePattern = ie.callValidateCode = ie.schemaProperties = ie.allSchemaProperties = ie.noPropertyInData = ie.propertyInData = ie.isOwnProperty = ie.hasPropFunc = ie.reportMissingProp = ie.checkMissingProp = ie.checkReportMissingProp = void 0;
  const e = /* @__PURE__ */ Z(), t = /* @__PURE__ */ ne(), n = /* @__PURE__ */ ke(), o = /* @__PURE__ */ ne();
  function a(u, v) {
    const { gen: k, data: c, it: d } = u;
    k.if(h(k, c, v, d.opts.ownProperties), () => {
      u.setParams({ missingProperty: (0, e._)`${v}` }, !0), u.error();
    });
  }
  ie.checkReportMissingProp = a;
  function r({ gen: u, data: v, it: { opts: k } }, c, d) {
    return (0, e.or)(...c.map((m) => (0, e.and)(h(u, v, m, k.ownProperties), (0, e._)`${d} = ${m}`)));
  }
  ie.checkMissingProp = r;
  function i(u, v) {
    u.setParams({ missingProperty: v }, !0), u.error();
  }
  ie.reportMissingProp = i;
  function s(u) {
    return u.scopeValue("func", {
      // eslint-disable-next-line @typescript-eslint/unbound-method
      ref: Object.prototype.hasOwnProperty,
      code: (0, e._)`Object.prototype.hasOwnProperty`
    });
  }
  ie.hasPropFunc = s;
  function l(u, v, k) {
    return (0, e._)`${s(u)}.call(${v}, ${k})`;
  }
  ie.isOwnProperty = l;
  function g(u, v, k, c) {
    const d = (0, e._)`${v}${(0, e.getProperty)(k)} !== undefined`;
    return c ? (0, e._)`${d} && ${l(u, v, k)}` : d;
  }
  ie.propertyInData = g;
  function h(u, v, k, c) {
    const d = (0, e._)`${v}${(0, e.getProperty)(k)} === undefined`;
    return c ? (0, e.or)(d, (0, e.not)(l(u, v, k))) : d;
  }
  ie.noPropertyInData = h;
  function _(u) {
    return u ? Object.keys(u).filter((v) => v !== "__proto__") : [];
  }
  ie.allSchemaProperties = _;
  function b(u, v) {
    return _(v).filter((k) => !(0, t.alwaysValidSchema)(u, v[k]));
  }
  ie.schemaProperties = b;
  function y({ schemaCode: u, data: v, it: { gen: k, topSchemaRef: c, schemaPath: d, errorPath: m }, it: x }, P, O, I) {
    const R = I ? (0, e._)`${u}, ${v}, ${c}${d}` : v, z = [
      [n.default.instancePath, (0, e.strConcat)(n.default.instancePath, m)],
      [n.default.parentData, x.parentData],
      [n.default.parentDataProperty, x.parentDataProperty],
      [n.default.rootData, n.default.rootData]
    ];
    x.opts.dynamicRef && z.push([n.default.dynamicAnchors, n.default.dynamicAnchors]);
    const L = (0, e._)`${R}, ${k.object(...z)}`;
    return O !== e.nil ? (0, e._)`${P}.call(${O}, ${L})` : (0, e._)`${P}(${L})`;
  }
  ie.callValidateCode = y;
  const w = (0, e._)`new RegExp`;
  function S({ gen: u, it: { opts: v } }, k) {
    const c = v.unicodeRegExp ? "u" : "", { regExp: d } = v.code, m = d(k, c);
    return u.scopeValue("pattern", {
      key: m.toString(),
      ref: m,
      code: (0, e._)`${d.code === "new RegExp" ? w : (0, o.useFunc)(u, d)}(${k}, ${c})`
    });
  }
  ie.usePattern = S;
  function f(u) {
    const { gen: v, data: k, keyword: c, it: d } = u, m = v.name("valid");
    if (d.allErrors) {
      const P = v.let("valid", !0);
      return x(() => v.assign(P, !1)), P;
    }
    return v.var(m, !0), x(() => v.break()), m;
    function x(P) {
      const O = v.const("len", (0, e._)`${k}.length`);
      v.forRange("i", 0, O, (I) => {
        u.subschema({
          keyword: c,
          dataProp: I,
          dataPropType: t.Type.Num
        }, m), v.if((0, e.not)(m), P);
      });
    }
  }
  ie.validateArray = f;
  function p(u) {
    const { gen: v, schema: k, keyword: c, it: d } = u;
    if (!Array.isArray(k))
      throw new Error("ajv implementation error");
    if (k.some((O) => (0, t.alwaysValidSchema)(d, O)) && !d.opts.unevaluated)
      return;
    const x = v.let("valid", !1), P = v.name("_valid");
    v.block(() => k.forEach((O, I) => {
      const R = u.subschema({
        keyword: c,
        schemaProp: I,
        compositeRule: !0
      }, P);
      v.assign(x, (0, e._)`${x} || ${P}`), u.mergeValidEvaluated(R, P) || v.if((0, e.not)(x));
    })), u.result(x, () => u.reset(), () => u.error(!0));
  }
  return ie.validateUnion = p, ie;
}
var _r;
function ji() {
  if (_r) return we;
  _r = 1, Object.defineProperty(we, "__esModule", { value: !0 }), we.validateKeywordUsage = we.validSchemaType = we.funcKeywordCode = we.macroKeywordCode = void 0;
  const e = /* @__PURE__ */ Z(), t = /* @__PURE__ */ ke(), n = /* @__PURE__ */ xe(), o = /* @__PURE__ */ yn();
  function a(b, y) {
    const { gen: w, keyword: S, schema: f, parentSchema: p, it: u } = b, v = y.macro.call(u.self, f, p, u), k = g(w, S, v);
    u.opts.validateSchema !== !1 && u.self.validateSchema(v, !0);
    const c = w.name("valid");
    b.subschema({
      schema: v,
      schemaPath: e.nil,
      errSchemaPath: `${u.errSchemaPath}/${S}`,
      topSchemaRef: k,
      compositeRule: !0
    }, c), b.pass(c, () => b.error(!0));
  }
  we.macroKeywordCode = a;
  function r(b, y) {
    var w;
    const { gen: S, keyword: f, schema: p, parentSchema: u, $data: v, it: k } = b;
    l(k, y);
    const c = !v && y.compile ? y.compile.call(k.self, p, u, k) : y.validate, d = g(S, f, c), m = S.let("valid");
    b.block$data(m, x), b.ok((w = y.valid) !== null && w !== void 0 ? w : m);
    function x() {
      if (y.errors === !1)
        I(), y.modifying && i(b), R(() => b.error());
      else {
        const z = y.async ? P() : O();
        y.modifying && i(b), R(() => s(b, z));
      }
    }
    function P() {
      const z = S.let("ruleErrs", null);
      return S.try(() => I((0, e._)`await `), (L) => S.assign(m, !1).if((0, e._)`${L} instanceof ${k.ValidationError}`, () => S.assign(z, (0, e._)`${L}.errors`), () => S.throw(L))), z;
    }
    function O() {
      const z = (0, e._)`${d}.errors`;
      return S.assign(z, null), I(e.nil), z;
    }
    function I(z = y.async ? (0, e._)`await ` : e.nil) {
      const L = k.opts.passContext ? t.default.this : t.default.self, Y = !("compile" in y && !v || y.schema === !1);
      S.assign(m, (0, e._)`${z}${(0, n.callValidateCode)(b, d, L, Y)}`, y.modifying);
    }
    function R(z) {
      var L;
      S.if((0, e.not)((L = y.valid) !== null && L !== void 0 ? L : m), z);
    }
  }
  we.funcKeywordCode = r;
  function i(b) {
    const { gen: y, data: w, it: S } = b;
    y.if(S.parentData, () => y.assign(w, (0, e._)`${S.parentData}[${S.parentDataProperty}]`));
  }
  function s(b, y) {
    const { gen: w } = b;
    w.if((0, e._)`Array.isArray(${y})`, () => {
      w.assign(t.default.vErrors, (0, e._)`${t.default.vErrors} === null ? ${y} : ${t.default.vErrors}.concat(${y})`).assign(t.default.errors, (0, e._)`${t.default.vErrors}.length`), (0, o.extendErrors)(b);
    }, () => b.error());
  }
  function l({ schemaEnv: b }, y) {
    if (y.async && !b.$async)
      throw new Error("async keyword in sync schema");
  }
  function g(b, y, w) {
    if (w === void 0)
      throw new Error(`keyword "${y}" failed to compile`);
    return b.scopeValue("keyword", typeof w == "function" ? { ref: w } : { ref: w, code: (0, e.stringify)(w) });
  }
  function h(b, y, w = !1) {
    return !y.length || y.some((S) => S === "array" ? Array.isArray(b) : S === "object" ? b && typeof b == "object" && !Array.isArray(b) : typeof b == S || w && typeof b > "u");
  }
  we.validSchemaType = h;
  function _({ schema: b, opts: y, self: w, errSchemaPath: S }, f, p) {
    if (Array.isArray(f.keyword) ? !f.keyword.includes(p) : f.keyword !== p)
      throw new Error("ajv implementation error");
    const u = f.dependencies;
    if (u?.some((v) => !Object.prototype.hasOwnProperty.call(b, v)))
      throw new Error(`parent schema must have dependencies of ${p}: ${u.join(",")}`);
    if (f.validateSchema && !f.validateSchema(b[p])) {
      const k = `keyword "${p}" value is invalid at path "${S}": ` + w.errorsText(f.validateSchema.errors);
      if (y.validateSchema === "log")
        w.logger.error(k);
      else
        throw new Error(k);
    }
  }
  return we.validateKeywordUsage = _, we;
}
var Fe = {}, Sr;
function Oi() {
  if (Sr) return Fe;
  Sr = 1, Object.defineProperty(Fe, "__esModule", { value: !0 }), Fe.extendSubschemaMode = Fe.extendSubschemaData = Fe.getSubschema = void 0;
  const e = /* @__PURE__ */ Z(), t = /* @__PURE__ */ ne();
  function n(r, { keyword: i, schemaProp: s, schema: l, schemaPath: g, errSchemaPath: h, topSchemaRef: _ }) {
    if (i !== void 0 && l !== void 0)
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
    if (l !== void 0) {
      if (g === void 0 || h === void 0 || _ === void 0)
        throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
      return {
        schema: l,
        schemaPath: g,
        topSchemaRef: _,
        errSchemaPath: h
      };
    }
    throw new Error('either "keyword" or "schema" must be passed');
  }
  Fe.getSubschema = n;
  function o(r, i, { dataProp: s, dataPropType: l, data: g, dataTypes: h, propertyName: _ }) {
    if (g !== void 0 && s !== void 0)
      throw new Error('both "data" and "dataProp" passed, only one allowed');
    const { gen: b } = i;
    if (s !== void 0) {
      const { errorPath: w, dataPathArr: S, opts: f } = i, p = b.let("data", (0, e._)`${i.data}${(0, e.getProperty)(s)}`, !0);
      y(p), r.errorPath = (0, e.str)`${w}${(0, t.getErrorPath)(s, l, f.jsPropertySyntax)}`, r.parentDataProperty = (0, e._)`${s}`, r.dataPathArr = [...S, r.parentDataProperty];
    }
    if (g !== void 0) {
      const w = g instanceof e.Name ? g : b.let("data", g, !0);
      y(w), _ !== void 0 && (r.propertyName = _);
    }
    h && (r.dataTypes = h);
    function y(w) {
      r.data = w, r.dataLevel = i.dataLevel + 1, r.dataTypes = [], i.definedProperties = /* @__PURE__ */ new Set(), r.parentData = i.data, r.dataNames = [...i.dataNames, w];
    }
  }
  Fe.extendSubschemaData = o;
  function a(r, { jtdDiscriminator: i, jtdMetadata: s, compositeRule: l, createErrors: g, allErrors: h }) {
    l !== void 0 && (r.compositeRule = l), g !== void 0 && (r.createErrors = g), h !== void 0 && (r.allErrors = h), r.jtdDiscriminator = i, r.jtdMetadata = s;
  }
  return Fe.extendSubschemaMode = a, Fe;
}
var fe = {}, Fn, Cr;
function Zo() {
  return Cr || (Cr = 1, Fn = function e(t, n) {
    if (t === n) return !0;
    if (t && n && typeof t == "object" && typeof n == "object") {
      if (t.constructor !== n.constructor) return !1;
      var o, a, r;
      if (Array.isArray(t)) {
        if (o = t.length, o != n.length) return !1;
        for (a = o; a-- !== 0; )
          if (!e(t[a], n[a])) return !1;
        return !0;
      }
      if (t.constructor === RegExp) return t.source === n.source && t.flags === n.flags;
      if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === n.valueOf();
      if (t.toString !== Object.prototype.toString) return t.toString() === n.toString();
      if (r = Object.keys(t), o = r.length, o !== Object.keys(n).length) return !1;
      for (a = o; a-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(n, r[a])) return !1;
      for (a = o; a-- !== 0; ) {
        var i = r[a];
        if (!e(t[i], n[i])) return !1;
      }
      return !0;
    }
    return t !== t && n !== n;
  }), Fn;
}
var Nn = { exports: {} }, kr;
function Ti() {
  if (kr) return Nn.exports;
  kr = 1;
  var e = Nn.exports = function(o, a, r) {
    typeof a == "function" && (r = a, a = {}), r = a.cb || r;
    var i = typeof r == "function" ? r : r.pre || function() {
    }, s = r.post || function() {
    };
    t(a, i, s, o, "", o);
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
  function t(o, a, r, i, s, l, g, h, _, b) {
    if (i && typeof i == "object" && !Array.isArray(i)) {
      a(i, s, l, g, h, _, b);
      for (var y in i) {
        var w = i[y];
        if (Array.isArray(w)) {
          if (y in e.arrayKeywords)
            for (var S = 0; S < w.length; S++)
              t(o, a, r, w[S], s + "/" + y + "/" + S, l, s, y, i, S);
        } else if (y in e.propsKeywords) {
          if (w && typeof w == "object")
            for (var f in w)
              t(o, a, r, w[f], s + "/" + y + "/" + n(f), l, s, y, i, f);
        } else (y in e.keywords || o.allKeys && !(y in e.skipKeywords)) && t(o, a, r, w, s + "/" + y, l, s, y, i);
      }
      r(i, s, l, g, h, _, b);
    }
  }
  function n(o) {
    return o.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  return Nn.exports;
}
var xr;
function vn() {
  if (xr) return fe;
  xr = 1, Object.defineProperty(fe, "__esModule", { value: !0 }), fe.getSchemaRefs = fe.resolveUrl = fe.normalizeId = fe._getFullPath = fe.getFullPath = fe.inlineRef = void 0;
  const e = /* @__PURE__ */ ne(), t = Zo(), n = Ti(), o = /* @__PURE__ */ new Set([
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
  function a(S, f = !0) {
    return typeof S == "boolean" ? !0 : f === !0 ? !i(S) : f ? s(S) <= f : !1;
  }
  fe.inlineRef = a;
  const r = /* @__PURE__ */ new Set([
    "$ref",
    "$recursiveRef",
    "$recursiveAnchor",
    "$dynamicRef",
    "$dynamicAnchor"
  ]);
  function i(S) {
    for (const f in S) {
      if (r.has(f))
        return !0;
      const p = S[f];
      if (Array.isArray(p) && p.some(i) || typeof p == "object" && i(p))
        return !0;
    }
    return !1;
  }
  function s(S) {
    let f = 0;
    for (const p in S) {
      if (p === "$ref")
        return 1 / 0;
      if (f++, !o.has(p) && (typeof S[p] == "object" && (0, e.eachItem)(S[p], (u) => f += s(u)), f === 1 / 0))
        return 1 / 0;
    }
    return f;
  }
  function l(S, f = "", p) {
    p !== !1 && (f = _(f));
    const u = S.parse(f);
    return g(S, u);
  }
  fe.getFullPath = l;
  function g(S, f) {
    return S.serialize(f).split("#")[0] + "#";
  }
  fe._getFullPath = g;
  const h = /#\/?$/;
  function _(S) {
    return S ? S.replace(h, "") : "";
  }
  fe.normalizeId = _;
  function b(S, f, p) {
    return p = _(p), S.resolve(f, p);
  }
  fe.resolveUrl = b;
  const y = /^[a-z_][-a-z0-9._]*$/i;
  function w(S, f) {
    if (typeof S == "boolean")
      return {};
    const { schemaId: p, uriResolver: u } = this.opts, v = _(S[p] || f), k = { "": v }, c = l(u, v, !1), d = {}, m = /* @__PURE__ */ new Set();
    return n(S, { allKeys: !0 }, (O, I, R, z) => {
      if (z === void 0)
        return;
      const L = c + I;
      let Y = k[z];
      typeof O[p] == "string" && (Y = H.call(this, O[p])), X.call(this, O.$anchor), X.call(this, O.$dynamicAnchor), k[I] = Y;
      function H(W) {
        const se = this.opts.uriResolver.resolve;
        if (W = _(Y ? se(Y, W) : W), m.has(W))
          throw P(W);
        m.add(W);
        let V = this.refs[W];
        return typeof V == "string" && (V = this.refs[V]), typeof V == "object" ? x(O, V.schema, W) : W !== _(L) && (W[0] === "#" ? (x(O, d[W], W), d[W] = O) : this.refs[W] = L), W;
      }
      function X(W) {
        if (typeof W == "string") {
          if (!y.test(W))
            throw new Error(`invalid anchor "${W}"`);
          H.call(this, `#${W}`);
        }
      }
    }), d;
    function x(O, I, R) {
      if (I !== void 0 && !t(O, I))
        throw P(R);
    }
    function P(O) {
      return new Error(`reference "${O}" resolves to more than one schema`);
    }
  }
  return fe.getSchemaRefs = w, fe;
}
var Er;
function $n() {
  if (Er) return Re;
  Er = 1, Object.defineProperty(Re, "__esModule", { value: !0 }), Re.getData = Re.KeywordCxt = Re.validateFunctionCode = void 0;
  const e = /* @__PURE__ */ Ni(), t = /* @__PURE__ */ hn(), n = /* @__PURE__ */ Xo(), o = /* @__PURE__ */ hn(), a = /* @__PURE__ */ Mi(), r = /* @__PURE__ */ ji(), i = /* @__PURE__ */ Oi(), s = /* @__PURE__ */ Z(), l = /* @__PURE__ */ ke(), g = /* @__PURE__ */ vn(), h = /* @__PURE__ */ ne(), _ = /* @__PURE__ */ yn();
  function b(A) {
    if (c(A) && (m(A), k(A))) {
      f(A);
      return;
    }
    y(A, () => (0, e.topBoolOrEmptySchema)(A));
  }
  Re.validateFunctionCode = b;
  function y({ gen: A, validateName: M, schema: B, schemaEnv: U, opts: J }, ee) {
    J.code.es5 ? A.func(M, (0, s._)`${l.default.data}, ${l.default.valCxt}`, U.$async, () => {
      A.code((0, s._)`"use strict"; ${u(B, J)}`), S(A, J), A.code(ee);
    }) : A.func(M, (0, s._)`${l.default.data}, ${w(J)}`, U.$async, () => A.code(u(B, J)).code(ee));
  }
  function w(A) {
    return (0, s._)`{${l.default.instancePath}="", ${l.default.parentData}, ${l.default.parentDataProperty}, ${l.default.rootData}=${l.default.data}${A.dynamicRef ? (0, s._)`, ${l.default.dynamicAnchors}={}` : s.nil}}={}`;
  }
  function S(A, M) {
    A.if(l.default.valCxt, () => {
      A.var(l.default.instancePath, (0, s._)`${l.default.valCxt}.${l.default.instancePath}`), A.var(l.default.parentData, (0, s._)`${l.default.valCxt}.${l.default.parentData}`), A.var(l.default.parentDataProperty, (0, s._)`${l.default.valCxt}.${l.default.parentDataProperty}`), A.var(l.default.rootData, (0, s._)`${l.default.valCxt}.${l.default.rootData}`), M.dynamicRef && A.var(l.default.dynamicAnchors, (0, s._)`${l.default.valCxt}.${l.default.dynamicAnchors}`);
    }, () => {
      A.var(l.default.instancePath, (0, s._)`""`), A.var(l.default.parentData, (0, s._)`undefined`), A.var(l.default.parentDataProperty, (0, s._)`undefined`), A.var(l.default.rootData, l.default.data), M.dynamicRef && A.var(l.default.dynamicAnchors, (0, s._)`{}`);
    });
  }
  function f(A) {
    const { schema: M, opts: B, gen: U } = A;
    y(A, () => {
      B.$comment && M.$comment && z(A), O(A), U.let(l.default.vErrors, null), U.let(l.default.errors, 0), B.unevaluated && p(A), x(A), L(A);
    });
  }
  function p(A) {
    const { gen: M, validateName: B } = A;
    A.evaluated = M.const("evaluated", (0, s._)`${B}.evaluated`), M.if((0, s._)`${A.evaluated}.dynamicProps`, () => M.assign((0, s._)`${A.evaluated}.props`, (0, s._)`undefined`)), M.if((0, s._)`${A.evaluated}.dynamicItems`, () => M.assign((0, s._)`${A.evaluated}.items`, (0, s._)`undefined`));
  }
  function u(A, M) {
    const B = typeof A == "object" && A[M.schemaId];
    return B && (M.code.source || M.code.process) ? (0, s._)`/*# sourceURL=${B} */` : s.nil;
  }
  function v(A, M) {
    if (c(A) && (m(A), k(A))) {
      d(A, M);
      return;
    }
    (0, e.boolOrEmptySchema)(A, M);
  }
  function k({ schema: A, self: M }) {
    if (typeof A == "boolean")
      return !A;
    for (const B in A)
      if (M.RULES.all[B])
        return !0;
    return !1;
  }
  function c(A) {
    return typeof A.schema != "boolean";
  }
  function d(A, M) {
    const { schema: B, gen: U, opts: J } = A;
    J.$comment && B.$comment && z(A), I(A), R(A);
    const ee = U.const("_errs", l.default.errors);
    x(A, ee), U.var(M, (0, s._)`${ee} === ${l.default.errors}`);
  }
  function m(A) {
    (0, h.checkUnknownRules)(A), P(A);
  }
  function x(A, M) {
    if (A.opts.jtd)
      return H(A, [], !1, M);
    const B = (0, t.getSchemaTypes)(A.schema), U = (0, t.coerceAndCheckDataType)(A, B);
    H(A, B, !U, M);
  }
  function P(A) {
    const { schema: M, errSchemaPath: B, opts: U, self: J } = A;
    M.$ref && U.ignoreKeywordsWithRef && (0, h.schemaHasRulesButRef)(M, J.RULES) && J.logger.warn(`$ref: keywords ignored in schema at path "${B}"`);
  }
  function O(A) {
    const { schema: M, opts: B } = A;
    M.default !== void 0 && B.useDefaults && B.strictSchema && (0, h.checkStrictMode)(A, "default is ignored in the schema root");
  }
  function I(A) {
    const M = A.schema[A.opts.schemaId];
    M && (A.baseId = (0, g.resolveUrl)(A.opts.uriResolver, A.baseId, M));
  }
  function R(A) {
    if (A.schema.$async && !A.schemaEnv.$async)
      throw new Error("async schema in sync schema");
  }
  function z({ gen: A, schemaEnv: M, schema: B, errSchemaPath: U, opts: J }) {
    const ee = B.$comment;
    if (J.$comment === !0)
      A.code((0, s._)`${l.default.self}.logger.log(${ee})`);
    else if (typeof J.$comment == "function") {
      const le = (0, s.str)`${U}/$comment`, be = A.scopeValue("root", { ref: M.root });
      A.code((0, s._)`${l.default.self}.opts.$comment(${ee}, ${le}, ${be}.schema)`);
    }
  }
  function L(A) {
    const { gen: M, schemaEnv: B, validateName: U, ValidationError: J, opts: ee } = A;
    B.$async ? M.if((0, s._)`${l.default.errors} === 0`, () => M.return(l.default.data), () => M.throw((0, s._)`new ${J}(${l.default.vErrors})`)) : (M.assign((0, s._)`${U}.errors`, l.default.vErrors), ee.unevaluated && Y(A), M.return((0, s._)`${l.default.errors} === 0`));
  }
  function Y({ gen: A, evaluated: M, props: B, items: U }) {
    B instanceof s.Name && A.assign((0, s._)`${M}.props`, B), U instanceof s.Name && A.assign((0, s._)`${M}.items`, U);
  }
  function H(A, M, B, U) {
    const { gen: J, schema: ee, data: le, allErrors: be, opts: pe, self: he } = A, { RULES: de } = he;
    if (ee.$ref && (pe.ignoreKeywordsWithRef || !(0, h.schemaHasRulesButRef)(ee, de))) {
      J.block(() => K(A, "$ref", de.all.$ref.definition));
      return;
    }
    pe.jtd || W(A, M), J.block(() => {
      for (const ye of de.rules)
        Ue(ye);
      Ue(de.post);
    });
    function Ue(ye) {
      (0, n.shouldUseGroup)(ee, ye) && (ye.type ? (J.if((0, o.checkDataType)(ye.type, le, pe.strictNumbers)), X(A, ye), M.length === 1 && M[0] === ye.type && B && (J.else(), (0, o.reportTypeError)(A)), J.endIf()) : X(A, ye), be || J.if((0, s._)`${l.default.errors} === ${U || 0}`));
    }
  }
  function X(A, M) {
    const { gen: B, schema: U, opts: { useDefaults: J } } = A;
    J && (0, a.assignDefaults)(A, M.type), B.block(() => {
      for (const ee of M.rules)
        (0, n.shouldUseRule)(U, ee) && K(A, ee.keyword, ee.definition, M.type);
    });
  }
  function W(A, M) {
    A.schemaEnv.meta || !A.opts.strictTypes || (se(A, M), A.opts.allowUnionTypes || V(A, M), F(A, A.dataTypes));
  }
  function se(A, M) {
    if (M.length) {
      if (!A.dataTypes.length) {
        A.dataTypes = M;
        return;
      }
      M.forEach((B) => {
        j(A.dataTypes, B) || C(A, `type "${B}" not allowed by context "${A.dataTypes.join(",")}"`);
      }), $(A, M);
    }
  }
  function V(A, M) {
    M.length > 1 && !(M.length === 2 && M.includes("null")) && C(A, "use allowUnionTypes to allow union type keyword");
  }
  function F(A, M) {
    const B = A.self.RULES.all;
    for (const U in B) {
      const J = B[U];
      if (typeof J == "object" && (0, n.shouldUseRule)(A.schema, J)) {
        const { type: ee } = J.definition;
        ee.length && !ee.some((le) => q(M, le)) && C(A, `missing type "${ee.join(",")}" for keyword "${U}"`);
      }
    }
  }
  function q(A, M) {
    return A.includes(M) || M === "number" && A.includes("integer");
  }
  function j(A, M) {
    return A.includes(M) || M === "integer" && A.includes("number");
  }
  function $(A, M) {
    const B = [];
    for (const U of A.dataTypes)
      j(M, U) ? B.push(U) : M.includes("integer") && U === "number" && B.push("integer");
    A.dataTypes = B;
  }
  function C(A, M) {
    const B = A.schemaEnv.baseId + A.errSchemaPath;
    M += ` at "${B}" (strictTypes)`, (0, h.checkStrictMode)(A, M, A.opts.strictTypes);
  }
  class T {
    constructor(M, B, U) {
      if ((0, r.validateKeywordUsage)(M, B, U), this.gen = M.gen, this.allErrors = M.allErrors, this.keyword = U, this.data = M.data, this.schema = M.schema[U], this.$data = B.$data && M.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, h.schemaRefOrVal)(M, this.schema, U, this.$data), this.schemaType = B.schemaType, this.parentSchema = M.schema, this.params = {}, this.it = M, this.def = B, this.$data)
        this.schemaCode = M.gen.const("vSchema", te(this.$data, M));
      else if (this.schemaCode = this.schemaValue, !(0, r.validSchemaType)(this.schema, B.schemaType, B.allowUndefined))
        throw new Error(`${U} value must be ${JSON.stringify(B.schemaType)}`);
      ("code" in B ? B.trackErrors : B.errors !== !1) && (this.errsCount = M.gen.const("_errs", l.default.errors));
    }
    result(M, B, U) {
      this.failResult((0, s.not)(M), B, U);
    }
    failResult(M, B, U) {
      this.gen.if(M), U ? U() : this.error(), B ? (this.gen.else(), B(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    pass(M, B) {
      this.failResult((0, s.not)(M), void 0, B);
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
      const { schemaCode: B } = this;
      this.fail((0, s._)`${B} !== undefined && (${(0, s.or)(this.invalid$data(), M)})`);
    }
    error(M, B, U) {
      if (B) {
        this.setParams(B), this._error(M, U), this.setParams({});
        return;
      }
      this._error(M, U);
    }
    _error(M, B) {
      (M ? _.reportExtraError : _.reportError)(this, this.def.error, B);
    }
    $dataError() {
      (0, _.reportError)(this, this.def.$dataError || _.keyword$DataError);
    }
    reset() {
      if (this.errsCount === void 0)
        throw new Error('add "trackErrors" to keyword definition');
      (0, _.resetErrorsCount)(this.gen, this.errsCount);
    }
    ok(M) {
      this.allErrors || this.gen.if(M);
    }
    setParams(M, B) {
      B ? Object.assign(this.params, M) : this.params = M;
    }
    block$data(M, B, U = s.nil) {
      this.gen.block(() => {
        this.check$data(M, U), B();
      });
    }
    check$data(M = s.nil, B = s.nil) {
      if (!this.$data)
        return;
      const { gen: U, schemaCode: J, schemaType: ee, def: le } = this;
      U.if((0, s.or)((0, s._)`${J} === undefined`, B)), M !== s.nil && U.assign(M, !0), (ee.length || le.validateSchema) && (U.elseIf(this.invalid$data()), this.$dataError(), M !== s.nil && U.assign(M, !1)), U.else();
    }
    invalid$data() {
      const { gen: M, schemaCode: B, schemaType: U, def: J, it: ee } = this;
      return (0, s.or)(le(), be());
      function le() {
        if (U.length) {
          if (!(B instanceof s.Name))
            throw new Error("ajv implementation error");
          const pe = Array.isArray(U) ? U : [U];
          return (0, s._)`${(0, o.checkDataTypes)(pe, B, ee.opts.strictNumbers, o.DataType.Wrong)}`;
        }
        return s.nil;
      }
      function be() {
        if (J.validateSchema) {
          const pe = M.scopeValue("validate$data", { ref: J.validateSchema });
          return (0, s._)`!${pe}(${B})`;
        }
        return s.nil;
      }
    }
    subschema(M, B) {
      const U = (0, i.getSubschema)(this.it, M);
      (0, i.extendSubschemaData)(U, this.it, M), (0, i.extendSubschemaMode)(U, M);
      const J = { ...this.it, ...U, items: void 0, props: void 0 };
      return v(J, B), J;
    }
    mergeEvaluated(M, B) {
      const { it: U, gen: J } = this;
      U.opts.unevaluated && (U.props !== !0 && M.props !== void 0 && (U.props = h.mergeEvaluated.props(J, M.props, U.props, B)), U.items !== !0 && M.items !== void 0 && (U.items = h.mergeEvaluated.items(J, M.items, U.items, B)));
    }
    mergeValidEvaluated(M, B) {
      const { it: U, gen: J } = this;
      if (U.opts.unevaluated && (U.props !== !0 || U.items !== !0))
        return J.if(B, () => this.mergeEvaluated(M, s.Name)), !0;
    }
  }
  Re.KeywordCxt = T;
  function K(A, M, B, U) {
    const J = new T(A, B, M);
    "code" in B ? B.code(J, U) : J.$data && B.validate ? (0, r.funcKeywordCode)(J, B) : "macro" in B ? (0, r.macroKeywordCode)(J, B) : (B.compile || B.validate) && (0, r.funcKeywordCode)(J, B);
  }
  const G = /^\/(?:[^~]|~0|~1)*$/, re = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function te(A, { dataLevel: M, dataNames: B, dataPathArr: U }) {
    let J, ee;
    if (A === "")
      return l.default.rootData;
    if (A[0] === "/") {
      if (!G.test(A))
        throw new Error(`Invalid JSON-pointer: ${A}`);
      J = A, ee = l.default.rootData;
    } else {
      const he = re.exec(A);
      if (!he)
        throw new Error(`Invalid JSON-pointer: ${A}`);
      const de = +he[1];
      if (J = he[2], J === "#") {
        if (de >= M)
          throw new Error(pe("property/index", de));
        return U[M - de];
      }
      if (de > M)
        throw new Error(pe("data", de));
      if (ee = B[M - de], !J)
        return ee;
    }
    let le = ee;
    const be = J.split("/");
    for (const he of be)
      he && (ee = (0, s._)`${ee}${(0, s.getProperty)((0, h.unescapeJsonPointer)(he))}`, le = (0, s._)`${le} && ${ee}`);
    return le;
    function pe(he, de) {
      return `Cannot access ${he} ${de} levels up, current level is ${M}`;
    }
  }
  return Re.getData = te, Re;
}
var ht = {}, Pr;
function Gn() {
  if (Pr) return ht;
  Pr = 1, Object.defineProperty(ht, "__esModule", { value: !0 });
  class e extends Error {
    constructor(n) {
      super("validation failed"), this.errors = n, this.ajv = this.validation = !0;
    }
  }
  return ht.default = e, ht;
}
var mt = {}, Rr;
function bn() {
  if (Rr) return mt;
  Rr = 1, Object.defineProperty(mt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ vn();
  class t extends Error {
    constructor(o, a, r, i) {
      super(i || `can't resolve reference ${r} from id ${a}`), this.missingRef = (0, e.resolveUrl)(o, a, r), this.missingSchema = (0, e.normalizeId)((0, e.getFullPath)(o, this.missingRef));
    }
  }
  return mt.default = t, mt;
}
var ge = {}, Ar;
function wn() {
  if (Ar) return ge;
  Ar = 1, Object.defineProperty(ge, "__esModule", { value: !0 }), ge.resolveSchema = ge.getCompilingSchema = ge.resolveRef = ge.compileSchema = ge.SchemaEnv = void 0;
  const e = /* @__PURE__ */ Z(), t = /* @__PURE__ */ Gn(), n = /* @__PURE__ */ ke(), o = /* @__PURE__ */ vn(), a = /* @__PURE__ */ ne(), r = /* @__PURE__ */ $n();
  class i {
    constructor(p) {
      var u;
      this.refs = {}, this.dynamicAnchors = {};
      let v;
      typeof p.schema == "object" && (v = p.schema), this.schema = p.schema, this.schemaId = p.schemaId, this.root = p.root || this, this.baseId = (u = p.baseId) !== null && u !== void 0 ? u : (0, o.normalizeId)(v?.[p.schemaId || "$id"]), this.schemaPath = p.schemaPath, this.localRefs = p.localRefs, this.meta = p.meta, this.$async = v?.$async, this.refs = {};
    }
  }
  ge.SchemaEnv = i;
  function s(f) {
    const p = h.call(this, f);
    if (p)
      return p;
    const u = (0, o.getFullPath)(this.opts.uriResolver, f.root.baseId), { es5: v, lines: k } = this.opts.code, { ownProperties: c } = this.opts, d = new e.CodeGen(this.scope, { es5: v, lines: k, ownProperties: c });
    let m;
    f.$async && (m = d.scopeValue("Error", {
      ref: t.default,
      code: (0, e._)`require("ajv/dist/runtime/validation_error").default`
    }));
    const x = d.scopeName("validate");
    f.validateName = x;
    const P = {
      gen: d,
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
      topSchemaRef: d.scopeValue("schema", this.opts.code.source === !0 ? { ref: f.schema, code: (0, e.stringify)(f.schema) } : { ref: f.schema }),
      validateName: x,
      ValidationError: m,
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
    let O;
    try {
      this._compilations.add(f), (0, r.validateFunctionCode)(P), d.optimize(this.opts.code.optimize);
      const I = d.toString();
      O = `${d.scopeRefs(n.default.scope)}return ${I}`, this.opts.code.process && (O = this.opts.code.process(O, f));
      const z = new Function(`${n.default.self}`, `${n.default.scope}`, O)(this, this.scope.get());
      if (this.scope.value(x, { ref: z }), z.errors = null, z.schema = f.schema, z.schemaEnv = f, f.$async && (z.$async = !0), this.opts.code.source === !0 && (z.source = { validateName: x, validateCode: I, scopeValues: d._values }), this.opts.unevaluated) {
        const { props: L, items: Y } = P;
        z.evaluated = {
          props: L instanceof e.Name ? void 0 : L,
          items: Y instanceof e.Name ? void 0 : Y,
          dynamicProps: L instanceof e.Name,
          dynamicItems: Y instanceof e.Name
        }, z.source && (z.source.evaluated = (0, e.stringify)(z.evaluated));
      }
      return f.validate = z, f;
    } catch (I) {
      throw delete f.validate, delete f.validateName, O && this.logger.error("Error compiling schema, function code:", O), I;
    } finally {
      this._compilations.delete(f);
    }
  }
  ge.compileSchema = s;
  function l(f, p, u) {
    var v;
    u = (0, o.resolveUrl)(this.opts.uriResolver, p, u);
    const k = f.refs[u];
    if (k)
      return k;
    let c = b.call(this, f, u);
    if (c === void 0) {
      const d = (v = f.localRefs) === null || v === void 0 ? void 0 : v[u], { schemaId: m } = this.opts;
      d && (c = new i({ schema: d, schemaId: m, root: f, baseId: p }));
    }
    if (c !== void 0)
      return f.refs[u] = g.call(this, c);
  }
  ge.resolveRef = l;
  function g(f) {
    return (0, o.inlineRef)(f.schema, this.opts.inlineRefs) ? f.schema : f.validate ? f : s.call(this, f);
  }
  function h(f) {
    for (const p of this._compilations)
      if (_(p, f))
        return p;
  }
  ge.getCompilingSchema = h;
  function _(f, p) {
    return f.schema === p.schema && f.root === p.root && f.baseId === p.baseId;
  }
  function b(f, p) {
    let u;
    for (; typeof (u = this.refs[p]) == "string"; )
      p = u;
    return u || this.schemas[p] || y.call(this, f, p);
  }
  function y(f, p) {
    const u = this.opts.uriResolver.parse(p), v = (0, o._getFullPath)(this.opts.uriResolver, u);
    let k = (0, o.getFullPath)(this.opts.uriResolver, f.baseId, void 0);
    if (Object.keys(f.schema).length > 0 && v === k)
      return S.call(this, u, f);
    const c = (0, o.normalizeId)(v), d = this.refs[c] || this.schemas[c];
    if (typeof d == "string") {
      const m = y.call(this, f, d);
      return typeof m?.schema != "object" ? void 0 : S.call(this, u, m);
    }
    if (typeof d?.schema == "object") {
      if (d.validate || s.call(this, d), c === (0, o.normalizeId)(p)) {
        const { schema: m } = d, { schemaId: x } = this.opts, P = m[x];
        return P && (k = (0, o.resolveUrl)(this.opts.uriResolver, k, P)), new i({ schema: m, schemaId: x, root: f, baseId: k });
      }
      return S.call(this, u, d);
    }
  }
  ge.resolveSchema = y;
  const w = /* @__PURE__ */ new Set([
    "properties",
    "patternProperties",
    "enum",
    "dependencies",
    "definitions"
  ]);
  function S(f, { baseId: p, schema: u, root: v }) {
    var k;
    if (((k = f.fragment) === null || k === void 0 ? void 0 : k[0]) !== "/")
      return;
    for (const m of f.fragment.slice(1).split("/")) {
      if (typeof u == "boolean")
        return;
      const x = u[(0, a.unescapeFragment)(m)];
      if (x === void 0)
        return;
      u = x;
      const P = typeof u == "object" && u[this.opts.schemaId];
      !w.has(m) && P && (p = (0, o.resolveUrl)(this.opts.uriResolver, p, P));
    }
    let c;
    if (typeof u != "boolean" && u.$ref && !(0, a.schemaHasRulesButRef)(u, this.RULES)) {
      const m = (0, o.resolveUrl)(this.opts.uriResolver, p, u.$ref);
      c = y.call(this, v, m);
    }
    const { schemaId: d } = this.opts;
    if (c = c || new i({ schema: u, schemaId: d, root: v, baseId: p }), c.schema !== c.root.schema)
      return c;
  }
  return ge;
}
const zi = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", Ii = "Meta-schema for $data reference (JSON AnySchema extension proposal)", Di = "object", qi = ["$data"], Bi = { $data: { type: "string", anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] } }, Vi = !1, Li = {
  $id: zi,
  description: Ii,
  type: Di,
  required: qi,
  properties: Bi,
  additionalProperties: Vi
};
var gt = {}, rt = { exports: {} }, Mn, Fr;
function Qo() {
  if (Fr) return Mn;
  Fr = 1;
  const e = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu), t = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u), n = RegExp.prototype.test.bind(/^[\da-f]{2}$/iu), o = RegExp.prototype.test.bind(/^[\da-z\-._~]$/iu), a = RegExp.prototype.test.bind(/^[\da-z\-._~!$&'()*+,;=:@/]$/iu);
  function r(c) {
    let d = "", m = 0, x = 0;
    for (x = 0; x < c.length; x++)
      if (m = c[x].charCodeAt(0), m !== 48) {
        if (!(m >= 48 && m <= 57 || m >= 65 && m <= 70 || m >= 97 && m <= 102))
          return "";
        d += c[x];
        break;
      }
    for (x += 1; x < c.length; x++) {
      if (m = c[x].charCodeAt(0), !(m >= 48 && m <= 57 || m >= 65 && m <= 70 || m >= 97 && m <= 102))
        return "";
      d += c[x];
    }
    return d;
  }
  const i = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
  function s(c) {
    return c.length = 0, !0;
  }
  function l(c, d, m) {
    if (c.length) {
      const x = r(c);
      if (x !== "")
        d.push(x);
      else
        return m.error = !0, !1;
      c.length = 0;
    }
    return !0;
  }
  function g(c) {
    let d = 0;
    const m = { error: !1, address: "", zone: "" }, x = [], P = [];
    let O = !1, I = !1, R = l;
    for (let z = 0; z < c.length; z++) {
      const L = c[z];
      if (!(L === "[" || L === "]"))
        if (L === ":") {
          if (O === !0 && (I = !0), !R(P, x, m))
            break;
          if (++d > 7) {
            m.error = !0;
            break;
          }
          z > 0 && c[z - 1] === ":" && (O = !0), x.push(":");
          continue;
        } else if (L === "%") {
          if (!R(P, x, m))
            break;
          R = s;
        } else {
          P.push(L);
          continue;
        }
    }
    return P.length && (R === s ? m.zone = P.join("") : I ? x.push(P.join("")) : x.push(r(P))), m.address = x.join(""), m;
  }
  function h(c) {
    if (_(c, ":") < 2)
      return { host: c, isIPV6: !1 };
    const d = g(c);
    if (d.error)
      return { host: c, isIPV6: !1 };
    {
      let m = d.address, x = d.address;
      return d.zone && (m += "%" + d.zone, x += "%25" + d.zone), { host: m, isIPV6: !0, escapedHost: x };
    }
  }
  function _(c, d) {
    let m = 0;
    for (let x = 0; x < c.length; x++)
      c[x] === d && m++;
    return m;
  }
  function b(c) {
    let d = c;
    const m = [];
    let x = -1, P = 0;
    for (; P = d.length; ) {
      if (P === 1) {
        if (d === ".")
          break;
        if (d === "/") {
          m.push("/");
          break;
        } else {
          m.push(d);
          break;
        }
      } else if (P === 2) {
        if (d[0] === ".") {
          if (d[1] === ".")
            break;
          if (d[1] === "/") {
            d = d.slice(2);
            continue;
          }
        } else if (d[0] === "/" && (d[1] === "." || d[1] === "/")) {
          m.push("/");
          break;
        }
      } else if (P === 3 && d === "/..") {
        m.length !== 0 && m.pop(), m.push("/");
        break;
      }
      if (d[0] === ".") {
        if (d[1] === ".") {
          if (d[2] === "/") {
            d = d.slice(3);
            continue;
          }
        } else if (d[1] === "/") {
          d = d.slice(2);
          continue;
        }
      } else if (d[0] === "/" && d[1] === ".") {
        if (d[2] === "/") {
          d = d.slice(2);
          continue;
        } else if (d[2] === "." && d[3] === "/") {
          d = d.slice(3), m.length !== 0 && m.pop();
          continue;
        }
      }
      if ((x = d.indexOf("/", 1)) === -1) {
        m.push(d);
        break;
      } else
        m.push(d.slice(0, x)), d = d.slice(x);
    }
    return m.join("");
  }
  const y = { "@": "%40", "/": "%2F", "?": "%3F", "#": "%23", ":": "%3A" }, w = /[@/?#:]/g, S = /[@/?#]/g;
  function f(c, d) {
    const m = d ? S : w;
    return m.lastIndex = 0, c.replace(m, (x) => y[x]);
  }
  function p(c, d = !1) {
    if (c.indexOf("%") === -1)
      return c;
    let m = "";
    for (let x = 0; x < c.length; x++) {
      if (c[x] === "%" && x + 2 < c.length) {
        const P = c.slice(x + 1, x + 3);
        if (n(P)) {
          const O = P.toUpperCase(), I = String.fromCharCode(parseInt(O, 16));
          d && o(I) ? m += I : m += "%" + O, x += 2;
          continue;
        }
      }
      m += c[x];
    }
    return m;
  }
  function u(c) {
    let d = "";
    for (let m = 0; m < c.length; m++) {
      if (c[m] === "%" && m + 2 < c.length) {
        const x = c.slice(m + 1, m + 3);
        if (n(x)) {
          const P = x.toUpperCase(), O = String.fromCharCode(parseInt(P, 16));
          O !== "." && o(O) ? d += O : d += "%" + P, m += 2;
          continue;
        }
      }
      a(c[m]) ? d += c[m] : d += escape(c[m]);
    }
    return d;
  }
  function v(c) {
    let d = "";
    for (let m = 0; m < c.length; m++) {
      if (c[m] === "%" && m + 2 < c.length) {
        const x = c.slice(m + 1, m + 3);
        if (n(x)) {
          d += "%" + x.toUpperCase(), m += 2;
          continue;
        }
      }
      d += escape(c[m]);
    }
    return d;
  }
  function k(c) {
    const d = [];
    if (c.userinfo !== void 0 && (d.push(c.userinfo), d.push("@")), c.host !== void 0) {
      let m = unescape(c.host);
      if (!t(m)) {
        const x = h(m);
        x.isIPV6 === !0 ? m = `[${x.escapedHost}]` : m = f(m, !1);
      }
      d.push(m);
    }
    return (typeof c.port == "number" || typeof c.port == "string") && (d.push(":"), d.push(String(c.port))), d.length ? d.join("") : void 0;
  }
  return Mn = {
    nonSimpleDomain: i,
    recomposeAuthority: k,
    reescapeHostDelimiters: f,
    normalizePercentEncoding: p,
    normalizePathEncoding: u,
    escapePreservingEscapes: v,
    removeDotSegments: b,
    isIPv4: t,
    isUUID: e,
    normalizeIPv6: h,
    stringArrayToHexStripped: r
  }, Mn;
}
var jn, Nr;
function Ui() {
  if (Nr) return jn;
  Nr = 1;
  const { isUUID: e } = Qo(), t = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu, n = (
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
  function o(c) {
    return n.indexOf(
      /** @type {*} */
      c
    ) !== -1;
  }
  function a(c) {
    return c.secure === !0 ? !0 : c.secure === !1 ? !1 : c.scheme ? c.scheme.length === 3 && (c.scheme[0] === "w" || c.scheme[0] === "W") && (c.scheme[1] === "s" || c.scheme[1] === "S") && (c.scheme[2] === "s" || c.scheme[2] === "S") : !1;
  }
  function r(c) {
    return c.host || (c.error = c.error || "HTTP URIs must have a host."), c;
  }
  function i(c) {
    const d = String(c.scheme).toLowerCase() === "https";
    return (c.port === (d ? 443 : 80) || c.port === "") && (c.port = void 0), c.path || (c.path = "/"), c;
  }
  function s(c) {
    return c.secure = a(c), c.resourceName = (c.path || "/") + (c.query ? "?" + c.query : ""), c.path = void 0, c.query = void 0, c;
  }
  function l(c) {
    if ((c.port === (a(c) ? 443 : 80) || c.port === "") && (c.port = void 0), typeof c.secure == "boolean" && (c.scheme = c.secure ? "wss" : "ws", c.secure = void 0), c.resourceName) {
      const [d, m] = c.resourceName.split("?");
      c.path = d && d !== "/" ? d : void 0, c.query = m, c.resourceName = void 0;
    }
    return c.fragment = void 0, c;
  }
  function g(c, d) {
    if (!c.path)
      return c.error = "URN can not be parsed", c;
    const m = c.path.match(t);
    if (m) {
      const x = d.scheme || c.scheme || "urn";
      c.nid = m[1].toLowerCase(), c.nss = m[2];
      const P = `${x}:${d.nid || c.nid}`, O = k(P);
      c.path = void 0, O && (c = O.parse(c, d));
    } else
      c.error = c.error || "URN can not be parsed.";
    return c;
  }
  function h(c, d) {
    if (c.nid === void 0)
      throw new Error("URN without nid cannot be serialized");
    const m = d.scheme || c.scheme || "urn", x = c.nid.toLowerCase(), P = `${m}:${d.nid || x}`, O = k(P);
    O && (c = O.serialize(c, d));
    const I = c, R = c.nss;
    return I.path = `${x || d.nid}:${R}`, d.skipEscape = !0, I;
  }
  function _(c, d) {
    const m = c;
    return m.uuid = m.nss, m.nss = void 0, !d.tolerant && (!m.uuid || !e(m.uuid)) && (m.error = m.error || "UUID is not valid."), m;
  }
  function b(c) {
    const d = c;
    return d.nss = (c.uuid || "").toLowerCase(), d;
  }
  const y = (
    /** @type {SchemeHandler} */
    {
      scheme: "http",
      domainHost: !0,
      parse: r,
      serialize: i
    }
  ), w = (
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
      serialize: l
    }
  ), f = (
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
      https: w,
      ws: S,
      wss: f,
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
          parse: _,
          serialize: b,
          skipNormalize: !0
        }
      )
    }
  );
  Object.setPrototypeOf(v, null);
  function k(c) {
    return c && (v[
      /** @type {SchemeName} */
      c
    ] || v[
      /** @type {SchemeName} */
      c.toLowerCase()
    ]) || void 0;
  }
  return jn = {
    wsIsSecure: a,
    SCHEMES: v,
    isValidSchemeName: o,
    getSchemeHandler: k
  }, jn;
}
var Mr;
function Ki() {
  if (Mr) return rt.exports;
  Mr = 1;
  const { normalizeIPv6: e, removeDotSegments: t, recomposeAuthority: n, normalizePercentEncoding: o, normalizePathEncoding: a, escapePreservingEscapes: r, reescapeHostDelimiters: i, isIPv4: s, nonSimpleDomain: l } = Qo(), { SCHEMES: g, getSchemeHandler: h } = Ui();
  function _(P, O) {
    return typeof P == "string" ? P = /** @type {T} */
    c(P, O) : typeof P == "object" && (P = /** @type {T} */
    k(S(P, O), O)), P;
  }
  function b(P, O, I) {
    const R = I ? Object.assign({ scheme: "null" }, I) : { scheme: "null" }, z = y(k(P, R), k(O, R), R, !0);
    return R.skipEscape = !0, S(z, R);
  }
  function y(P, O, I, R) {
    const z = {};
    return R || (P = k(S(P, I), I), O = k(S(O, I), I)), I = I || {}, !I.tolerant && O.scheme ? (z.scheme = O.scheme, z.userinfo = O.userinfo, z.host = O.host, z.port = O.port, z.path = t(O.path || ""), z.query = O.query) : (O.userinfo !== void 0 || O.host !== void 0 || O.port !== void 0 ? (z.userinfo = O.userinfo, z.host = O.host, z.port = O.port, z.path = t(O.path || ""), z.query = O.query) : (O.path ? (O.path[0] === "/" ? z.path = t(O.path) : ((P.userinfo !== void 0 || P.host !== void 0 || P.port !== void 0) && !P.path ? z.path = "/" + O.path : P.path ? z.path = P.path.slice(0, P.path.lastIndexOf("/") + 1) + O.path : z.path = O.path, z.path = t(z.path)), z.query = O.query) : (z.path = P.path, O.query !== void 0 ? z.query = O.query : z.query = P.query), z.userinfo = P.userinfo, z.host = P.host, z.port = P.port), z.scheme = P.scheme), z.fragment = O.fragment, z;
  }
  function w(P, O, I) {
    const R = m(P, I), z = m(O, I);
    return R !== void 0 && z !== void 0 && R.toLowerCase() === z.toLowerCase();
  }
  function S(P, O) {
    const I = {
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
    }, R = Object.assign({}, O), z = [], L = h(R.scheme || I.scheme);
    L && L.serialize && L.serialize(I, R), I.path !== void 0 && (R.skipEscape ? I.path = o(I.path) : (I.path = r(I.path), I.scheme !== void 0 && (I.path = I.path.split("%3A").join(":")))), R.reference !== "suffix" && I.scheme && z.push(I.scheme, ":");
    const Y = n(I);
    if (Y !== void 0 && (R.reference !== "suffix" && z.push("//"), z.push(Y), I.path && I.path[0] !== "/" && z.push("/")), I.path !== void 0) {
      let H = I.path;
      !R.absolutePath && (!L || !L.absolutePath) && (H = t(H)), Y === void 0 && H[0] === "/" && H[1] === "/" && (H = "/%2F" + H.slice(2)), z.push(H);
    }
    return I.query !== void 0 && z.push("?", I.query), I.fragment !== void 0 && z.push("#", I.fragment), z.join("");
  }
  const f = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u, p = /^(?:[^#/:?]+:)?\/\/([^/?#]*)/;
  function u(P, O) {
    if (O[2] !== void 0 && P.path && P.path[0] !== "/")
      return 'URI path must start with "/" when authority is present.';
    if (typeof P.port == "number" && (P.port < 0 || P.port > 65535))
      return "URI port is malformed.";
  }
  function v(P, O) {
    const I = Object.assign({}, O), R = {
      scheme: void 0,
      userinfo: void 0,
      host: "",
      port: void 0,
      path: "",
      query: void 0,
      fragment: void 0
    };
    let z = !1, L = !1;
    I.reference === "suffix" && (I.scheme ? P = I.scheme + ":" + P : P = "//" + P);
    const Y = P.match(p);
    Y !== null && Y[1].indexOf("\\") !== -1 && (R.error = "URI authority must not contain a literal backslash.", z = !0);
    const H = P.match(f);
    if (H) {
      R.scheme = H[1], R.userinfo = H[3], R.host = H[4], R.port = parseInt(H[5], 10), R.path = H[6] || "", R.query = H[7], R.fragment = H[8], isNaN(R.port) && (R.port = H[5]);
      const X = u(R, H);
      if (X !== void 0 && (R.error = R.error || X, z = !0), R.host)
        if (s(R.host) === !1) {
          const V = e(R.host);
          R.host = V.host.toLowerCase(), L = V.isIPV6;
        } else
          L = !0;
      R.scheme === void 0 && R.userinfo === void 0 && R.host === void 0 && R.port === void 0 && R.query === void 0 && !R.path ? R.reference = "same-document" : R.scheme === void 0 ? R.reference = "relative" : R.fragment === void 0 ? R.reference = "absolute" : R.reference = "uri", I.reference && I.reference !== "suffix" && I.reference !== R.reference && (R.error = R.error || "URI is not a " + I.reference + " reference.");
      const W = h(I.scheme || R.scheme);
      if (!I.unicodeSupport && (!W || !W.unicodeSupport) && R.host && (I.domainHost || W && W.domainHost) && L === !1 && l(R.host))
        try {
          R.host = new URL("http://" + R.host).hostname;
        } catch (se) {
          R.error = R.error || "Host's domain name can not be converted to ASCII: " + se;
        }
      if ((!W || W && !W.skipNormalize) && (P.indexOf("%") !== -1 && (R.scheme !== void 0 && (R.scheme = unescape(R.scheme)), R.host !== void 0 && (R.host = i(unescape(R.host), L))), R.path && (R.path = a(R.path)), R.fragment))
        try {
          R.fragment = encodeURI(decodeURIComponent(R.fragment));
        } catch {
          R.error = R.error || "URI malformed";
        }
      W && W.parse && W.parse(R, I);
    } else
      R.error = R.error || "URI can not be parsed.";
    return { parsed: R, malformedAuthorityOrPort: z };
  }
  function k(P, O) {
    return v(P, O).parsed;
  }
  function c(P, O) {
    return d(P, O).normalized;
  }
  function d(P, O) {
    const { parsed: I, malformedAuthorityOrPort: R } = v(P, O);
    return {
      normalized: R ? P : S(I, O),
      malformedAuthorityOrPort: R
    };
  }
  function m(P, O) {
    if (typeof P == "string") {
      const { normalized: I, malformedAuthorityOrPort: R } = d(P, O);
      return R ? void 0 : I;
    }
    if (typeof P == "object")
      return S(P, O);
  }
  const x = {
    SCHEMES: g,
    normalize: _,
    resolve: b,
    resolveComponent: y,
    equal: w,
    serialize: S,
    parse: k
  };
  return rt.exports = x, rt.exports.default = x, rt.exports.fastUri = x, rt.exports;
}
var jr;
function Gi() {
  if (jr) return gt;
  jr = 1, Object.defineProperty(gt, "__esModule", { value: !0 });
  const e = Ki();
  return e.code = 'require("ajv/dist/runtime/uri").default', gt.default = e, gt;
}
var Or;
function Hi() {
  return Or || (Or = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = void 0;
    var t = /* @__PURE__ */ $n();
    Object.defineProperty(e, "KeywordCxt", { enumerable: !0, get: function() {
      return t.KeywordCxt;
    } });
    var n = /* @__PURE__ */ Z();
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
    const o = /* @__PURE__ */ Gn(), a = /* @__PURE__ */ bn(), r = /* @__PURE__ */ Yo(), i = /* @__PURE__ */ wn(), s = /* @__PURE__ */ Z(), l = /* @__PURE__ */ vn(), g = /* @__PURE__ */ hn(), h = /* @__PURE__ */ ne(), _ = Li, b = /* @__PURE__ */ Gi(), y = (V, F) => new RegExp(V, F);
    y.code = "new RegExp";
    const w = ["removeAdditional", "useDefaults", "coerceTypes"], S = /* @__PURE__ */ new Set([
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
    }, p = {
      ignoreKeywordsWithRef: "",
      jsPropertySyntax: "",
      unicode: '"minLength"/"maxLength" account for unicode characters by default.'
    }, u = 200;
    function v(V) {
      var F, q, j, $, C, T, K, G, re, te, A, M, B, U, J, ee, le, be, pe, he, de, Ue, ye, Sn, Cn;
      const et = V.strict, kn = (F = V.code) === null || F === void 0 ? void 0 : F.optimize, sr = kn === !0 || kn === void 0 ? 1 : kn || 0, ar = (j = (q = V.code) === null || q === void 0 ? void 0 : q.regExp) !== null && j !== void 0 ? j : y, yi = ($ = V.uriResolver) !== null && $ !== void 0 ? $ : b.default;
      return {
        strictSchema: (T = (C = V.strictSchema) !== null && C !== void 0 ? C : et) !== null && T !== void 0 ? T : !0,
        strictNumbers: (G = (K = V.strictNumbers) !== null && K !== void 0 ? K : et) !== null && G !== void 0 ? G : !0,
        strictTypes: (te = (re = V.strictTypes) !== null && re !== void 0 ? re : et) !== null && te !== void 0 ? te : "log",
        strictTuples: (M = (A = V.strictTuples) !== null && A !== void 0 ? A : et) !== null && M !== void 0 ? M : "log",
        strictRequired: (U = (B = V.strictRequired) !== null && B !== void 0 ? B : et) !== null && U !== void 0 ? U : !1,
        code: V.code ? { ...V.code, optimize: sr, regExp: ar } : { optimize: sr, regExp: ar },
        loopRequired: (J = V.loopRequired) !== null && J !== void 0 ? J : u,
        loopEnum: (ee = V.loopEnum) !== null && ee !== void 0 ? ee : u,
        meta: (le = V.meta) !== null && le !== void 0 ? le : !0,
        messages: (be = V.messages) !== null && be !== void 0 ? be : !0,
        inlineRefs: (pe = V.inlineRefs) !== null && pe !== void 0 ? pe : !0,
        schemaId: (he = V.schemaId) !== null && he !== void 0 ? he : "$id",
        addUsedSchema: (de = V.addUsedSchema) !== null && de !== void 0 ? de : !0,
        validateSchema: (Ue = V.validateSchema) !== null && Ue !== void 0 ? Ue : !0,
        validateFormats: (ye = V.validateFormats) !== null && ye !== void 0 ? ye : !0,
        unicodeRegExp: (Sn = V.unicodeRegExp) !== null && Sn !== void 0 ? Sn : !0,
        int32range: (Cn = V.int32range) !== null && Cn !== void 0 ? Cn : !0,
        uriResolver: yi
      };
    }
    class k {
      constructor(F = {}) {
        this.schemas = {}, this.refs = {}, this.formats = /* @__PURE__ */ Object.create(null), this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), F = this.opts = { ...F, ...v(F) };
        const { es5: q, lines: j } = this.opts.code;
        this.scope = new s.ValueScope({ scope: {}, prefixes: S, es5: q, lines: j }), this.logger = R(F.logger);
        const $ = F.validateFormats;
        F.validateFormats = !1, this.RULES = (0, r.getRules)(), c.call(this, f, F, "NOT SUPPORTED"), c.call(this, p, F, "DEPRECATED", "warn"), this._metaOpts = O.call(this), F.formats && x.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), F.keywords && P.call(this, F.keywords), typeof F.meta == "object" && this.addMetaSchema(F.meta), m.call(this), F.validateFormats = $;
      }
      _addVocabularies() {
        this.addKeyword("$async");
      }
      _addDefaultMetaSchema() {
        const { $data: F, meta: q, schemaId: j } = this.opts;
        let $ = _;
        j === "id" && ($ = { ..._ }, $.id = $.$id, delete $.$id), q && F && this.addMetaSchema($, $[j], !1);
      }
      defaultMeta() {
        const { meta: F, schemaId: q } = this.opts;
        return this.opts.defaultMeta = typeof F == "object" ? F[q] || F : void 0;
      }
      validate(F, q) {
        let j;
        if (typeof F == "string") {
          if (j = this.getSchema(F), !j)
            throw new Error(`no schema with key or ref "${F}"`);
        } else
          j = this.compile(F);
        const $ = j(q);
        return "$async" in j || (this.errors = j.errors), $;
      }
      compile(F, q) {
        const j = this._addSchema(F, q);
        return j.validate || this._compileSchemaEnv(j);
      }
      compileAsync(F, q) {
        if (typeof this.opts.loadSchema != "function")
          throw new Error("options.loadSchema should be a function");
        const { loadSchema: j } = this.opts;
        return $.call(this, F, q);
        async function $(te, A) {
          await C.call(this, te.$schema);
          const M = this._addSchema(te, A);
          return M.validate || T.call(this, M);
        }
        async function C(te) {
          te && !this.getSchema(te) && await $.call(this, { $ref: te }, !0);
        }
        async function T(te) {
          try {
            return this._compileSchemaEnv(te);
          } catch (A) {
            if (!(A instanceof a.default))
              throw A;
            return K.call(this, A), await G.call(this, A.missingSchema), T.call(this, te);
          }
        }
        function K({ missingSchema: te, missingRef: A }) {
          if (this.refs[te])
            throw new Error(`AnySchema ${te} is loaded but ${A} cannot be resolved`);
        }
        async function G(te) {
          const A = await re.call(this, te);
          this.refs[te] || await C.call(this, A.$schema), this.refs[te] || this.addSchema(A, te, q);
        }
        async function re(te) {
          const A = this._loading[te];
          if (A)
            return A;
          try {
            return await (this._loading[te] = j(te));
          } finally {
            delete this._loading[te];
          }
        }
      }
      // Adds schema to the instance
      addSchema(F, q, j, $ = this.opts.validateSchema) {
        if (Array.isArray(F)) {
          for (const T of F)
            this.addSchema(T, void 0, j, $);
          return this;
        }
        let C;
        if (typeof F == "object") {
          const { schemaId: T } = this.opts;
          if (C = F[T], C !== void 0 && typeof C != "string")
            throw new Error(`schema ${T} must be string`);
        }
        return q = (0, l.normalizeId)(q || C), this._checkUnique(q), this.schemas[q] = this._addSchema(F, j, q, $, !0), this;
      }
      // Add schema that will be used to validate other schemas
      // options in META_IGNORE_OPTIONS are alway set to false
      addMetaSchema(F, q, j = this.opts.validateSchema) {
        return this.addSchema(F, q, !0, j), this;
      }
      //  Validate schema against its meta-schema
      validateSchema(F, q) {
        if (typeof F == "boolean")
          return !0;
        let j;
        if (j = F.$schema, j !== void 0 && typeof j != "string")
          throw new Error("$schema must be a string");
        if (j = j || this.opts.defaultMeta || this.defaultMeta(), !j)
          return this.logger.warn("meta-schema not available"), this.errors = null, !0;
        const $ = this.validate(j, F);
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
      getSchema(F) {
        let q;
        for (; typeof (q = d.call(this, F)) == "string"; )
          F = q;
        if (q === void 0) {
          const { schemaId: j } = this.opts, $ = new i.SchemaEnv({ schema: {}, schemaId: j });
          if (q = i.resolveSchema.call(this, $, F), !q)
            return;
          this.refs[F] = q;
        }
        return q.validate || this._compileSchemaEnv(q);
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
            const q = d.call(this, F);
            return typeof q == "object" && this._cache.delete(q.schema), delete this.schemas[F], delete this.refs[F], this;
          }
          case "object": {
            const q = F;
            this._cache.delete(q);
            let j = F[this.opts.schemaId];
            return j && (j = (0, l.normalizeId)(j), delete this.schemas[j], delete this.refs[j]), this;
          }
          default:
            throw new Error("ajv.removeSchema: invalid parameter");
        }
      }
      // add "vocabulary" - a collection of keywords
      addVocabulary(F) {
        for (const q of F)
          this.addKeyword(q);
        return this;
      }
      addKeyword(F, q) {
        let j;
        if (typeof F == "string")
          j = F, typeof q == "object" && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), q.keyword = j);
        else if (typeof F == "object" && q === void 0) {
          if (q = F, j = q.keyword, Array.isArray(j) && !j.length)
            throw new Error("addKeywords: keyword must be string or non-empty array");
        } else
          throw new Error("invalid addKeywords parameters");
        if (L.call(this, j, q), !q)
          return (0, h.eachItem)(j, (C) => Y.call(this, C)), this;
        X.call(this, q);
        const $ = {
          ...q,
          type: (0, g.getJSONTypes)(q.type),
          schemaType: (0, g.getJSONTypes)(q.schemaType)
        };
        return (0, h.eachItem)(j, $.type.length === 0 ? (C) => Y.call(this, C, $) : (C) => $.type.forEach((T) => Y.call(this, C, $, T))), this;
      }
      getKeyword(F) {
        const q = this.RULES.all[F];
        return typeof q == "object" ? q.definition : !!q;
      }
      // Remove keyword
      removeKeyword(F) {
        const { RULES: q } = this;
        delete q.keywords[F], delete q.all[F];
        for (const j of q.rules) {
          const $ = j.rules.findIndex((C) => C.keyword === F);
          $ >= 0 && j.rules.splice($, 1);
        }
        return this;
      }
      // Add format
      addFormat(F, q) {
        return typeof q == "string" && (q = new RegExp(q)), this.formats[F] = q, this;
      }
      errorsText(F = this.errors, { separator: q = ", ", dataVar: j = "data" } = {}) {
        return !F || F.length === 0 ? "No errors" : F.map(($) => `${j}${$.instancePath} ${$.message}`).reduce(($, C) => $ + q + C);
      }
      $dataMetaSchema(F, q) {
        const j = this.RULES.all;
        F = JSON.parse(JSON.stringify(F));
        for (const $ of q) {
          const C = $.split("/").slice(1);
          let T = F;
          for (const K of C)
            T = T[K];
          for (const K in j) {
            const G = j[K];
            if (typeof G != "object")
              continue;
            const { $data: re } = G.definition, te = T[K];
            re && te && (T[K] = se(te));
          }
        }
        return F;
      }
      _removeAllSchemas(F, q) {
        for (const j in F) {
          const $ = F[j];
          (!q || q.test(j)) && (typeof $ == "string" ? delete F[j] : $ && !$.meta && (this._cache.delete($.schema), delete F[j]));
        }
      }
      _addSchema(F, q, j, $ = this.opts.validateSchema, C = this.opts.addUsedSchema) {
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
        j = (0, l.normalizeId)(T || j);
        const re = l.getSchemaRefs.call(this, F, j);
        return G = new i.SchemaEnv({ schema: F, schemaId: K, meta: q, baseId: j, localRefs: re }), this._cache.set(G.schema, G), C && !j.startsWith("#") && (j && this._checkUnique(j), this.refs[j] = G), $ && this.validateSchema(F, !0), G;
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
        const q = this.opts;
        this.opts = this._metaOpts;
        try {
          i.compileSchema.call(this, F);
        } finally {
          this.opts = q;
        }
      }
    }
    k.ValidationError = o.default, k.MissingRefError = a.default, e.default = k;
    function c(V, F, q, j = "error") {
      for (const $ in V) {
        const C = $;
        C in F && this.logger[j](`${q}: option ${$}. ${V[C]}`);
      }
    }
    function d(V) {
      return V = (0, l.normalizeId)(V), this.schemas[V] || this.refs[V];
    }
    function m() {
      const V = this.opts.schemas;
      if (V)
        if (Array.isArray(V))
          this.addSchema(V);
        else
          for (const F in V)
            this.addSchema(V[F], F);
    }
    function x() {
      for (const V in this.opts.formats) {
        const F = this.opts.formats[V];
        F && this.addFormat(V, F);
      }
    }
    function P(V) {
      if (Array.isArray(V)) {
        this.addVocabulary(V);
        return;
      }
      this.logger.warn("keywords option as map is deprecated, pass array");
      for (const F in V) {
        const q = V[F];
        q.keyword || (q.keyword = F), this.addKeyword(q);
      }
    }
    function O() {
      const V = { ...this.opts };
      for (const F of w)
        delete V[F];
      return V;
    }
    const I = { log() {
    }, warn() {
    }, error() {
    } };
    function R(V) {
      if (V === !1)
        return I;
      if (V === void 0)
        return console;
      if (V.log && V.warn && V.error)
        return V;
      throw new Error("logger must implement log, warn and error methods");
    }
    const z = /^[a-z_$][a-z0-9_$:-]*$/i;
    function L(V, F) {
      const { RULES: q } = this;
      if ((0, h.eachItem)(V, (j) => {
        if (q.keywords[j])
          throw new Error(`Keyword ${j} is already defined`);
        if (!z.test(j))
          throw new Error(`Keyword ${j} has invalid name`);
      }), !!F && F.$data && !("code" in F || "validate" in F))
        throw new Error('$data keyword must have "code" or "validate" function');
    }
    function Y(V, F, q) {
      var j;
      const $ = F?.post;
      if (q && $)
        throw new Error('keyword with "post" flag cannot have "type"');
      const { RULES: C } = this;
      let T = $ ? C.post : C.rules.find(({ type: G }) => G === q);
      if (T || (T = { type: q, rules: [] }, C.rules.push(T)), C.keywords[V] = !0, !F)
        return;
      const K = {
        keyword: V,
        definition: {
          ...F,
          type: (0, g.getJSONTypes)(F.type),
          schemaType: (0, g.getJSONTypes)(F.schemaType)
        }
      };
      F.before ? H.call(this, T, K, F.before) : T.rules.push(K), C.all[V] = K, (j = F.implements) === null || j === void 0 || j.forEach((G) => this.addKeyword(G));
    }
    function H(V, F, q) {
      const j = V.rules.findIndex(($) => $.keyword === q);
      j >= 0 ? V.rules.splice(j, 0, F) : (V.rules.push(F), this.logger.warn(`rule ${q} is not defined`));
    }
    function X(V) {
      let { metaSchema: F } = V;
      F !== void 0 && (V.$data && this.opts.$data && (F = se(F)), V.validateSchema = this.compile(F, !0));
    }
    const W = {
      $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
    };
    function se(V) {
      return { anyOf: [V, W] };
    }
  })(xn)), xn;
}
var yt = {}, vt = {}, $t = {}, Tr;
function Ji() {
  if (Tr) return $t;
  Tr = 1, Object.defineProperty($t, "__esModule", { value: !0 });
  const e = {
    keyword: "id",
    code() {
      throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
    }
  };
  return $t.default = e, $t;
}
var je = {}, zr;
function Hn() {
  if (zr) return je;
  zr = 1, Object.defineProperty(je, "__esModule", { value: !0 }), je.callRef = je.getValidate = void 0;
  const e = /* @__PURE__ */ bn(), t = /* @__PURE__ */ xe(), n = /* @__PURE__ */ Z(), o = /* @__PURE__ */ ke(), a = /* @__PURE__ */ wn(), r = /* @__PURE__ */ ne(), i = {
    keyword: "$ref",
    schemaType: "string",
    code(g) {
      const { gen: h, schema: _, it: b } = g, { baseId: y, schemaEnv: w, validateName: S, opts: f, self: p } = b, { root: u } = w;
      if ((_ === "#" || _ === "#/") && y === u.baseId)
        return k();
      const v = a.resolveRef.call(p, u, y, _);
      if (v === void 0)
        throw new e.default(b.opts.uriResolver, y, _);
      if (v instanceof a.SchemaEnv)
        return c(v);
      return d(v);
      function k() {
        if (w === u)
          return l(g, S, w, w.$async);
        const m = h.scopeValue("root", { ref: u });
        return l(g, (0, n._)`${m}.validate`, u, u.$async);
      }
      function c(m) {
        const x = s(g, m);
        l(g, x, m, m.$async);
      }
      function d(m) {
        const x = h.scopeValue("schema", f.code.source === !0 ? { ref: m, code: (0, n.stringify)(m) } : { ref: m }), P = h.name("valid"), O = g.subschema({
          schema: m,
          dataTypes: [],
          schemaPath: n.nil,
          topSchemaRef: x,
          errSchemaPath: _
        }, P);
        g.mergeEvaluated(O), g.ok(P);
      }
    }
  };
  function s(g, h) {
    const { gen: _ } = g;
    return h.validate ? _.scopeValue("validate", { ref: h.validate }) : (0, n._)`${_.scopeValue("wrapper", { ref: h })}.validate`;
  }
  je.getValidate = s;
  function l(g, h, _, b) {
    const { gen: y, it: w } = g, { allErrors: S, schemaEnv: f, opts: p } = w, u = p.passContext ? o.default.this : n.nil;
    b ? v() : k();
    function v() {
      if (!f.$async)
        throw new Error("async schema referenced by sync schema");
      const m = y.let("valid");
      y.try(() => {
        y.code((0, n._)`await ${(0, t.callValidateCode)(g, h, u)}`), d(h), S || y.assign(m, !0);
      }, (x) => {
        y.if((0, n._)`!(${x} instanceof ${w.ValidationError})`, () => y.throw(x)), c(x), S || y.assign(m, !1);
      }), g.ok(m);
    }
    function k() {
      g.result((0, t.callValidateCode)(g, h, u), () => d(h), () => c(h));
    }
    function c(m) {
      const x = (0, n._)`${m}.errors`;
      y.assign(o.default.vErrors, (0, n._)`${o.default.vErrors} === null ? ${x} : ${o.default.vErrors}.concat(${x})`), y.assign(o.default.errors, (0, n._)`${o.default.vErrors}.length`);
    }
    function d(m) {
      var x;
      if (!w.opts.unevaluated)
        return;
      const P = (x = _?.validate) === null || x === void 0 ? void 0 : x.evaluated;
      if (w.props !== !0)
        if (P && !P.dynamicProps)
          P.props !== void 0 && (w.props = r.mergeEvaluated.props(y, P.props, w.props));
        else {
          const O = y.var("props", (0, n._)`${m}.evaluated.props`);
          w.props = r.mergeEvaluated.props(y, O, w.props, n.Name);
        }
      if (w.items !== !0)
        if (P && !P.dynamicItems)
          P.items !== void 0 && (w.items = r.mergeEvaluated.items(y, P.items, w.items));
        else {
          const O = y.var("items", (0, n._)`${m}.evaluated.items`);
          w.items = r.mergeEvaluated.items(y, O, w.items, n.Name);
        }
    }
  }
  return je.callRef = l, je.default = i, je;
}
var Ir;
function Wi() {
  if (Ir) return vt;
  Ir = 1, Object.defineProperty(vt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ji(), t = /* @__PURE__ */ Hn(), n = [
    "$schema",
    "$id",
    "$defs",
    "$vocabulary",
    { keyword: "$comment" },
    "definitions",
    e.default,
    t.default
  ];
  return vt.default = n, vt;
}
var bt = {}, wt = {}, Dr;
function Yi() {
  if (Dr) return wt;
  Dr = 1, Object.defineProperty(wt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Z(), t = e.operators, n = {
    maximum: { okStr: "<=", ok: t.LTE, fail: t.GT },
    minimum: { okStr: ">=", ok: t.GTE, fail: t.LT },
    exclusiveMaximum: { okStr: "<", ok: t.LT, fail: t.GTE },
    exclusiveMinimum: { okStr: ">", ok: t.GT, fail: t.LTE }
  }, o = {
    message: ({ keyword: r, schemaCode: i }) => (0, e.str)`must be ${n[r].okStr} ${i}`,
    params: ({ keyword: r, schemaCode: i }) => (0, e._)`{comparison: ${n[r].okStr}, limit: ${i}}`
  }, a = {
    keyword: Object.keys(n),
    type: "number",
    schemaType: "number",
    $data: !0,
    error: o,
    code(r) {
      const { keyword: i, data: s, schemaCode: l } = r;
      r.fail$data((0, e._)`${s} ${n[i].fail} ${l} || isNaN(${s})`);
    }
  };
  return wt.default = a, wt;
}
var _t = {}, qr;
function Xi() {
  if (qr) return _t;
  qr = 1, Object.defineProperty(_t, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Z(), n = {
    keyword: "multipleOf",
    type: "number",
    schemaType: "number",
    $data: !0,
    error: {
      message: ({ schemaCode: o }) => (0, e.str)`must be multiple of ${o}`,
      params: ({ schemaCode: o }) => (0, e._)`{multipleOf: ${o}}`
    },
    code(o) {
      const { gen: a, data: r, schemaCode: i, it: s } = o, l = s.opts.multipleOfPrecision, g = a.let("res"), h = l ? (0, e._)`Math.abs(Math.round(${g}) - ${g}) > 1e-${l}` : (0, e._)`${g} !== parseInt(${g})`;
      o.fail$data((0, e._)`(${i} === 0 || (${g} = ${r}/${i}, ${h}))`);
    }
  };
  return _t.default = n, _t;
}
var St = {}, Ct = {}, Br;
function Zi() {
  if (Br) return Ct;
  Br = 1, Object.defineProperty(Ct, "__esModule", { value: !0 });
  function e(t) {
    const n = t.length;
    let o = 0, a = 0, r;
    for (; a < n; )
      o++, r = t.charCodeAt(a++), r >= 55296 && r <= 56319 && a < n && (r = t.charCodeAt(a), (r & 64512) === 56320 && a++);
    return o;
  }
  return Ct.default = e, e.code = 'require("ajv/dist/runtime/ucs2length").default', Ct;
}
var Vr;
function Qi() {
  if (Vr) return St;
  Vr = 1, Object.defineProperty(St, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Z(), t = /* @__PURE__ */ ne(), n = /* @__PURE__ */ Zi(), a = {
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
      const { keyword: i, data: s, schemaCode: l, it: g } = r, h = i === "maxLength" ? e.operators.GT : e.operators.LT, _ = g.opts.unicode === !1 ? (0, e._)`${s}.length` : (0, e._)`${(0, t.useFunc)(r.gen, n.default)}(${s})`;
      r.fail$data((0, e._)`${_} ${h} ${l}`);
    }
  };
  return St.default = a, St;
}
var kt = {}, Lr;
function es() {
  if (Lr) return kt;
  Lr = 1, Object.defineProperty(kt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ xe(), t = /* @__PURE__ */ ne(), n = /* @__PURE__ */ Z(), a = {
    keyword: "pattern",
    type: "string",
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: r }) => (0, n.str)`must match pattern "${r}"`,
      params: ({ schemaCode: r }) => (0, n._)`{pattern: ${r}}`
    },
    code(r) {
      const { gen: i, data: s, $data: l, schema: g, schemaCode: h, it: _ } = r, b = _.opts.unicodeRegExp ? "u" : "";
      if (l) {
        const { regExp: y } = _.opts.code, w = y.code === "new RegExp" ? (0, n._)`new RegExp` : (0, t.useFunc)(i, y), S = i.let("valid");
        i.try(() => i.assign(S, (0, n._)`${w}(${h}, ${b}).test(${s})`), () => i.assign(S, !1)), r.fail$data((0, n._)`!${S}`);
      } else {
        const y = (0, e.usePattern)(r, g);
        r.fail$data((0, n._)`!${y}.test(${s})`);
      }
    }
  };
  return kt.default = a, kt;
}
var xt = {}, Ur;
function ts() {
  if (Ur) return xt;
  Ur = 1, Object.defineProperty(xt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Z(), n = {
    keyword: ["maxProperties", "minProperties"],
    type: "object",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: o, schemaCode: a }) {
        const r = o === "maxProperties" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${r} than ${a} properties`;
      },
      params: ({ schemaCode: o }) => (0, e._)`{limit: ${o}}`
    },
    code(o) {
      const { keyword: a, data: r, schemaCode: i } = o, s = a === "maxProperties" ? e.operators.GT : e.operators.LT;
      o.fail$data((0, e._)`Object.keys(${r}).length ${s} ${i}`);
    }
  };
  return xt.default = n, xt;
}
var Et = {}, Kr;
function ns() {
  if (Kr) return Et;
  Kr = 1, Object.defineProperty(Et, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ xe(), t = /* @__PURE__ */ Z(), n = /* @__PURE__ */ ne(), a = {
    keyword: "required",
    type: "object",
    schemaType: "array",
    $data: !0,
    error: {
      message: ({ params: { missingProperty: r } }) => (0, t.str)`must have required property '${r}'`,
      params: ({ params: { missingProperty: r } }) => (0, t._)`{missingProperty: ${r}}`
    },
    code(r) {
      const { gen: i, schema: s, schemaCode: l, data: g, $data: h, it: _ } = r, { opts: b } = _;
      if (!h && s.length === 0)
        return;
      const y = s.length >= b.loopRequired;
      if (_.allErrors ? w() : S(), b.strictRequired) {
        const u = r.parentSchema.properties, { definedProperties: v } = r.it;
        for (const k of s)
          if (u?.[k] === void 0 && !v.has(k)) {
            const c = _.schemaEnv.baseId + _.errSchemaPath, d = `required property "${k}" is not defined at "${c}" (strictRequired)`;
            (0, n.checkStrictMode)(_, d, _.opts.strictRequired);
          }
      }
      function w() {
        if (y || h)
          r.block$data(t.nil, f);
        else
          for (const u of s)
            (0, e.checkReportMissingProp)(r, u);
      }
      function S() {
        const u = i.let("missing");
        if (y || h) {
          const v = i.let("valid", !0);
          r.block$data(v, () => p(u, v)), r.ok(v);
        } else
          i.if((0, e.checkMissingProp)(r, s, u)), (0, e.reportMissingProp)(r, u), i.else();
      }
      function f() {
        i.forOf("prop", l, (u) => {
          r.setParams({ missingProperty: u }), i.if((0, e.noPropertyInData)(i, g, u, b.ownProperties), () => r.error());
        });
      }
      function p(u, v) {
        r.setParams({ missingProperty: u }), i.forOf(u, l, () => {
          i.assign(v, (0, e.propertyInData)(i, g, u, b.ownProperties)), i.if((0, t.not)(v), () => {
            r.error(), i.break();
          });
        }, t.nil);
      }
    }
  };
  return Et.default = a, Et;
}
var Pt = {}, Gr;
function rs() {
  if (Gr) return Pt;
  Gr = 1, Object.defineProperty(Pt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Z(), n = {
    keyword: ["maxItems", "minItems"],
    type: "array",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: o, schemaCode: a }) {
        const r = o === "maxItems" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${r} than ${a} items`;
      },
      params: ({ schemaCode: o }) => (0, e._)`{limit: ${o}}`
    },
    code(o) {
      const { keyword: a, data: r, schemaCode: i } = o, s = a === "maxItems" ? e.operators.GT : e.operators.LT;
      o.fail$data((0, e._)`${r}.length ${s} ${i}`);
    }
  };
  return Pt.default = n, Pt;
}
var Rt = {}, At = {}, Hr;
function Jn() {
  if (Hr) return At;
  Hr = 1, Object.defineProperty(At, "__esModule", { value: !0 });
  const e = Zo();
  return e.code = 'require("ajv/dist/runtime/equal").default', At.default = e, At;
}
var Jr;
function os() {
  if (Jr) return Rt;
  Jr = 1, Object.defineProperty(Rt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ hn(), t = /* @__PURE__ */ Z(), n = /* @__PURE__ */ ne(), o = /* @__PURE__ */ Jn(), r = {
    keyword: "uniqueItems",
    type: "array",
    schemaType: "boolean",
    $data: !0,
    error: {
      message: ({ params: { i, j: s } }) => (0, t.str)`must NOT have duplicate items (items ## ${s} and ${i} are identical)`,
      params: ({ params: { i, j: s } }) => (0, t._)`{i: ${i}, j: ${s}}`
    },
    code(i) {
      const { gen: s, data: l, $data: g, schema: h, parentSchema: _, schemaCode: b, it: y } = i;
      if (!g && !h)
        return;
      const w = s.let("valid"), S = _.items ? (0, e.getSchemaTypes)(_.items) : [];
      i.block$data(w, f, (0, t._)`${b} === false`), i.ok(w);
      function f() {
        const k = s.let("i", (0, t._)`${l}.length`), c = s.let("j");
        i.setParams({ i: k, j: c }), s.assign(w, !0), s.if((0, t._)`${k} > 1`, () => (p() ? u : v)(k, c));
      }
      function p() {
        return S.length > 0 && !S.some((k) => k === "object" || k === "array");
      }
      function u(k, c) {
        const d = s.name("item"), m = (0, e.checkDataTypes)(S, d, y.opts.strictNumbers, e.DataType.Wrong), x = s.const("indices", (0, t._)`{}`);
        s.for((0, t._)`;${k}--;`, () => {
          s.let(d, (0, t._)`${l}[${k}]`), s.if(m, (0, t._)`continue`), S.length > 1 && s.if((0, t._)`typeof ${d} == "string"`, (0, t._)`${d} += "_"`), s.if((0, t._)`typeof ${x}[${d}] == "number"`, () => {
            s.assign(c, (0, t._)`${x}[${d}]`), i.error(), s.assign(w, !1).break();
          }).code((0, t._)`${x}[${d}] = ${k}`);
        });
      }
      function v(k, c) {
        const d = (0, n.useFunc)(s, o.default), m = s.name("outer");
        s.label(m).for((0, t._)`;${k}--;`, () => s.for((0, t._)`${c} = ${k}; ${c}--;`, () => s.if((0, t._)`${d}(${l}[${k}], ${l}[${c}])`, () => {
          i.error(), s.assign(w, !1).break(m);
        })));
      }
    }
  };
  return Rt.default = r, Rt;
}
var Ft = {}, Wr;
function is() {
  if (Wr) return Ft;
  Wr = 1, Object.defineProperty(Ft, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Z(), t = /* @__PURE__ */ ne(), n = /* @__PURE__ */ Jn(), a = {
    keyword: "const",
    $data: !0,
    error: {
      message: "must be equal to constant",
      params: ({ schemaCode: r }) => (0, e._)`{allowedValue: ${r}}`
    },
    code(r) {
      const { gen: i, data: s, $data: l, schemaCode: g, schema: h } = r;
      l || h && typeof h == "object" ? r.fail$data((0, e._)`!${(0, t.useFunc)(i, n.default)}(${s}, ${g})`) : r.fail((0, e._)`${h} !== ${s}`);
    }
  };
  return Ft.default = a, Ft;
}
var Nt = {}, Yr;
function ss() {
  if (Yr) return Nt;
  Yr = 1, Object.defineProperty(Nt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Z(), t = /* @__PURE__ */ ne(), n = /* @__PURE__ */ Jn(), a = {
    keyword: "enum",
    schemaType: "array",
    $data: !0,
    error: {
      message: "must be equal to one of the allowed values",
      params: ({ schemaCode: r }) => (0, e._)`{allowedValues: ${r}}`
    },
    code(r) {
      const { gen: i, data: s, $data: l, schema: g, schemaCode: h, it: _ } = r;
      if (!l && g.length === 0)
        throw new Error("enum must have non-empty array");
      const b = g.length >= _.opts.loopEnum;
      let y;
      const w = () => y ?? (y = (0, t.useFunc)(i, n.default));
      let S;
      if (b || l)
        S = i.let("valid"), r.block$data(S, f);
      else {
        if (!Array.isArray(g))
          throw new Error("ajv implementation error");
        const u = i.const("vSchema", h);
        S = (0, e.or)(...g.map((v, k) => p(u, k)));
      }
      r.pass(S);
      function f() {
        i.assign(S, !1), i.forOf("v", h, (u) => i.if((0, e._)`${w()}(${s}, ${u})`, () => i.assign(S, !0).break()));
      }
      function p(u, v) {
        const k = g[v];
        return typeof k == "object" && k !== null ? (0, e._)`${w()}(${s}, ${u}[${v}])` : (0, e._)`${s} === ${k}`;
      }
    }
  };
  return Nt.default = a, Nt;
}
var Xr;
function as() {
  if (Xr) return bt;
  Xr = 1, Object.defineProperty(bt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Yi(), t = /* @__PURE__ */ Xi(), n = /* @__PURE__ */ Qi(), o = /* @__PURE__ */ es(), a = /* @__PURE__ */ ts(), r = /* @__PURE__ */ ns(), i = /* @__PURE__ */ rs(), s = /* @__PURE__ */ os(), l = /* @__PURE__ */ is(), g = /* @__PURE__ */ ss(), h = [
    // number
    e.default,
    t.default,
    // string
    n.default,
    o.default,
    // object
    a.default,
    r.default,
    // array
    i.default,
    s.default,
    // any
    { keyword: "type", schemaType: ["string", "array"] },
    { keyword: "nullable", schemaType: "boolean" },
    l.default,
    g.default
  ];
  return bt.default = h, bt;
}
var Mt = {}, Ke = {}, Zr;
function ei() {
  if (Zr) return Ke;
  Zr = 1, Object.defineProperty(Ke, "__esModule", { value: !0 }), Ke.validateAdditionalItems = void 0;
  const e = /* @__PURE__ */ Z(), t = /* @__PURE__ */ ne(), o = {
    keyword: "additionalItems",
    type: "array",
    schemaType: ["boolean", "object"],
    before: "uniqueItems",
    error: {
      message: ({ params: { len: r } }) => (0, e.str)`must NOT have more than ${r} items`,
      params: ({ params: { len: r } }) => (0, e._)`{limit: ${r}}`
    },
    code(r) {
      const { parentSchema: i, it: s } = r, { items: l } = i;
      if (!Array.isArray(l)) {
        (0, t.checkStrictMode)(s, '"additionalItems" is ignored when "items" is not an array of schemas');
        return;
      }
      a(r, l);
    }
  };
  function a(r, i) {
    const { gen: s, schema: l, data: g, keyword: h, it: _ } = r;
    _.items = !0;
    const b = s.const("len", (0, e._)`${g}.length`);
    if (l === !1)
      r.setParams({ len: i.length }), r.pass((0, e._)`${b} <= ${i.length}`);
    else if (typeof l == "object" && !(0, t.alwaysValidSchema)(_, l)) {
      const w = s.var("valid", (0, e._)`${b} <= ${i.length}`);
      s.if((0, e.not)(w), () => y(w)), r.ok(w);
    }
    function y(w) {
      s.forRange("i", i.length, b, (S) => {
        r.subschema({ keyword: h, dataProp: S, dataPropType: t.Type.Num }, w), _.allErrors || s.if((0, e.not)(w), () => s.break());
      });
    }
  }
  return Ke.validateAdditionalItems = a, Ke.default = o, Ke;
}
var jt = {}, Ge = {}, Qr;
function ti() {
  if (Qr) return Ge;
  Qr = 1, Object.defineProperty(Ge, "__esModule", { value: !0 }), Ge.validateTuple = void 0;
  const e = /* @__PURE__ */ Z(), t = /* @__PURE__ */ ne(), n = /* @__PURE__ */ xe(), o = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "array", "boolean"],
    before: "uniqueItems",
    code(r) {
      const { schema: i, it: s } = r;
      if (Array.isArray(i))
        return a(r, "additionalItems", i);
      s.items = !0, !(0, t.alwaysValidSchema)(s, i) && r.ok((0, n.validateArray)(r));
    }
  };
  function a(r, i, s = r.schema) {
    const { gen: l, parentSchema: g, data: h, keyword: _, it: b } = r;
    S(g), b.opts.unevaluated && s.length && b.items !== !0 && (b.items = t.mergeEvaluated.items(l, s.length, b.items));
    const y = l.name("valid"), w = l.const("len", (0, e._)`${h}.length`);
    s.forEach((f, p) => {
      (0, t.alwaysValidSchema)(b, f) || (l.if((0, e._)`${w} > ${p}`, () => r.subschema({
        keyword: _,
        schemaProp: p,
        dataProp: p
      }, y)), r.ok(y));
    });
    function S(f) {
      const { opts: p, errSchemaPath: u } = b, v = s.length, k = v === f.minItems && (v === f.maxItems || f[i] === !1);
      if (p.strictTuples && !k) {
        const c = `"${_}" is ${v}-tuple, but minItems or maxItems/${i} are not specified or different at path "${u}"`;
        (0, t.checkStrictMode)(b, c, p.strictTuples);
      }
    }
  }
  return Ge.validateTuple = a, Ge.default = o, Ge;
}
var eo;
function cs() {
  if (eo) return jt;
  eo = 1, Object.defineProperty(jt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ti(), t = {
    keyword: "prefixItems",
    type: "array",
    schemaType: ["array"],
    before: "uniqueItems",
    code: (n) => (0, e.validateTuple)(n, "items")
  };
  return jt.default = t, jt;
}
var Ot = {}, to;
function ls() {
  if (to) return Ot;
  to = 1, Object.defineProperty(Ot, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Z(), t = /* @__PURE__ */ ne(), n = /* @__PURE__ */ xe(), o = /* @__PURE__ */ ei(), r = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    error: {
      message: ({ params: { len: i } }) => (0, e.str)`must NOT have more than ${i} items`,
      params: ({ params: { len: i } }) => (0, e._)`{limit: ${i}}`
    },
    code(i) {
      const { schema: s, parentSchema: l, it: g } = i, { prefixItems: h } = l;
      g.items = !0, !(0, t.alwaysValidSchema)(g, s) && (h ? (0, o.validateAdditionalItems)(i, h) : i.ok((0, n.validateArray)(i)));
    }
  };
  return Ot.default = r, Ot;
}
var Tt = {}, no;
function ds() {
  if (no) return Tt;
  no = 1, Object.defineProperty(Tt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Z(), t = /* @__PURE__ */ ne(), o = {
    keyword: "contains",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    trackErrors: !0,
    error: {
      message: ({ params: { min: a, max: r } }) => r === void 0 ? (0, e.str)`must contain at least ${a} valid item(s)` : (0, e.str)`must contain at least ${a} and no more than ${r} valid item(s)`,
      params: ({ params: { min: a, max: r } }) => r === void 0 ? (0, e._)`{minContains: ${a}}` : (0, e._)`{minContains: ${a}, maxContains: ${r}}`
    },
    code(a) {
      const { gen: r, schema: i, parentSchema: s, data: l, it: g } = a;
      let h, _;
      const { minContains: b, maxContains: y } = s;
      g.opts.next ? (h = b === void 0 ? 1 : b, _ = y) : h = 1;
      const w = r.const("len", (0, e._)`${l}.length`);
      if (a.setParams({ min: h, max: _ }), _ === void 0 && h === 0) {
        (0, t.checkStrictMode)(g, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
        return;
      }
      if (_ !== void 0 && h > _) {
        (0, t.checkStrictMode)(g, '"minContains" > "maxContains" is always invalid'), a.fail();
        return;
      }
      if ((0, t.alwaysValidSchema)(g, i)) {
        let v = (0, e._)`${w} >= ${h}`;
        _ !== void 0 && (v = (0, e._)`${v} && ${w} <= ${_}`), a.pass(v);
        return;
      }
      g.items = !0;
      const S = r.name("valid");
      _ === void 0 && h === 1 ? p(S, () => r.if(S, () => r.break())) : h === 0 ? (r.let(S, !0), _ !== void 0 && r.if((0, e._)`${l}.length > 0`, f)) : (r.let(S, !1), f()), a.result(S, () => a.reset());
      function f() {
        const v = r.name("_valid"), k = r.let("count", 0);
        p(v, () => r.if(v, () => u(k)));
      }
      function p(v, k) {
        r.forRange("i", 0, w, (c) => {
          a.subschema({
            keyword: "contains",
            dataProp: c,
            dataPropType: t.Type.Num,
            compositeRule: !0
          }, v), k();
        });
      }
      function u(v) {
        r.code((0, e._)`${v}++`), _ === void 0 ? r.if((0, e._)`${v} >= ${h}`, () => r.assign(S, !0).break()) : (r.if((0, e._)`${v} > ${_}`, () => r.assign(S, !1).break()), h === 1 ? r.assign(S, !0) : r.if((0, e._)`${v} >= ${h}`, () => r.assign(S, !0)));
      }
    }
  };
  return Tt.default = o, Tt;
}
var On = {}, ro;
function Wn() {
  return ro || (ro = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
    const t = /* @__PURE__ */ Z(), n = /* @__PURE__ */ ne(), o = /* @__PURE__ */ xe();
    e.error = {
      message: ({ params: { property: l, depsCount: g, deps: h } }) => {
        const _ = g === 1 ? "property" : "properties";
        return (0, t.str)`must have ${_} ${h} when property ${l} is present`;
      },
      params: ({ params: { property: l, depsCount: g, deps: h, missingProperty: _ } }) => (0, t._)`{property: ${l},
    missingProperty: ${_},
    depsCount: ${g},
    deps: ${h}}`
      // TODO change to reference
    };
    const a = {
      keyword: "dependencies",
      type: "object",
      schemaType: "object",
      error: e.error,
      code(l) {
        const [g, h] = r(l);
        i(l, g), s(l, h);
      }
    };
    function r({ schema: l }) {
      const g = {}, h = {};
      for (const _ in l) {
        if (_ === "__proto__")
          continue;
        const b = Array.isArray(l[_]) ? g : h;
        b[_] = l[_];
      }
      return [g, h];
    }
    function i(l, g = l.schema) {
      const { gen: h, data: _, it: b } = l;
      if (Object.keys(g).length === 0)
        return;
      const y = h.let("missing");
      for (const w in g) {
        const S = g[w];
        if (S.length === 0)
          continue;
        const f = (0, o.propertyInData)(h, _, w, b.opts.ownProperties);
        l.setParams({
          property: w,
          depsCount: S.length,
          deps: S.join(", ")
        }), b.allErrors ? h.if(f, () => {
          for (const p of S)
            (0, o.checkReportMissingProp)(l, p);
        }) : (h.if((0, t._)`${f} && (${(0, o.checkMissingProp)(l, S, y)})`), (0, o.reportMissingProp)(l, y), h.else());
      }
    }
    e.validatePropertyDeps = i;
    function s(l, g = l.schema) {
      const { gen: h, data: _, keyword: b, it: y } = l, w = h.name("valid");
      for (const S in g)
        (0, n.alwaysValidSchema)(y, g[S]) || (h.if(
          (0, o.propertyInData)(h, _, S, y.opts.ownProperties),
          () => {
            const f = l.subschema({ keyword: b, schemaProp: S }, w);
            l.mergeValidEvaluated(f, w);
          },
          () => h.var(w, !0)
          // TODO var
        ), l.ok(w));
    }
    e.validateSchemaDeps = s, e.default = a;
  })(On)), On;
}
var zt = {}, oo;
function us() {
  if (oo) return zt;
  oo = 1, Object.defineProperty(zt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Z(), t = /* @__PURE__ */ ne(), o = {
    keyword: "propertyNames",
    type: "object",
    schemaType: ["object", "boolean"],
    error: {
      message: "property name must be valid",
      params: ({ params: a }) => (0, e._)`{propertyName: ${a.propertyName}}`
    },
    code(a) {
      const { gen: r, schema: i, data: s, it: l } = a;
      if ((0, t.alwaysValidSchema)(l, i))
        return;
      const g = r.name("valid");
      r.forIn("key", s, (h) => {
        a.setParams({ propertyName: h }), a.subschema({
          keyword: "propertyNames",
          data: h,
          dataTypes: ["string"],
          propertyName: h,
          compositeRule: !0
        }, g), r.if((0, e.not)(g), () => {
          a.error(!0), l.allErrors || r.break();
        });
      }), a.ok(g);
    }
  };
  return zt.default = o, zt;
}
var It = {}, io;
function ni() {
  if (io) return It;
  io = 1, Object.defineProperty(It, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ xe(), t = /* @__PURE__ */ Z(), n = /* @__PURE__ */ ke(), o = /* @__PURE__ */ ne(), r = {
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
      const { gen: s, schema: l, parentSchema: g, data: h, errsCount: _, it: b } = i;
      if (!_)
        throw new Error("ajv implementation error");
      const { allErrors: y, opts: w } = b;
      if (b.props = !0, w.removeAdditional !== "all" && (0, o.alwaysValidSchema)(b, l))
        return;
      const S = (0, e.allSchemaProperties)(g.properties), f = (0, e.allSchemaProperties)(g.patternProperties);
      p(), i.ok((0, t._)`${_} === ${n.default.errors}`);
      function p() {
        s.forIn("key", h, (d) => {
          !S.length && !f.length ? k(d) : s.if(u(d), () => k(d));
        });
      }
      function u(d) {
        let m;
        if (S.length > 8) {
          const x = (0, o.schemaRefOrVal)(b, g.properties, "properties");
          m = (0, e.isOwnProperty)(s, x, d);
        } else S.length ? m = (0, t.or)(...S.map((x) => (0, t._)`${d} === ${x}`)) : m = t.nil;
        return f.length && (m = (0, t.or)(m, ...f.map((x) => (0, t._)`${(0, e.usePattern)(i, x)}.test(${d})`))), (0, t.not)(m);
      }
      function v(d) {
        s.code((0, t._)`delete ${h}[${d}]`);
      }
      function k(d) {
        if (w.removeAdditional === "all" || w.removeAdditional && l === !1) {
          v(d);
          return;
        }
        if (l === !1) {
          i.setParams({ additionalProperty: d }), i.error(), y || s.break();
          return;
        }
        if (typeof l == "object" && !(0, o.alwaysValidSchema)(b, l)) {
          const m = s.name("valid");
          w.removeAdditional === "failing" ? (c(d, m, !1), s.if((0, t.not)(m), () => {
            i.reset(), v(d);
          })) : (c(d, m), y || s.if((0, t.not)(m), () => s.break()));
        }
      }
      function c(d, m, x) {
        const P = {
          keyword: "additionalProperties",
          dataProp: d,
          dataPropType: o.Type.Str
        };
        x === !1 && Object.assign(P, {
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }), i.subschema(P, m);
      }
    }
  };
  return It.default = r, It;
}
var Dt = {}, so;
function fs() {
  if (so) return Dt;
  so = 1, Object.defineProperty(Dt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ $n(), t = /* @__PURE__ */ xe(), n = /* @__PURE__ */ ne(), o = /* @__PURE__ */ ni(), a = {
    keyword: "properties",
    type: "object",
    schemaType: "object",
    code(r) {
      const { gen: i, schema: s, parentSchema: l, data: g, it: h } = r;
      h.opts.removeAdditional === "all" && l.additionalProperties === void 0 && o.default.code(new e.KeywordCxt(h, o.default, "additionalProperties"));
      const _ = (0, t.allSchemaProperties)(s);
      for (const f of _)
        h.definedProperties.add(f);
      h.opts.unevaluated && _.length && h.props !== !0 && (h.props = n.mergeEvaluated.props(i, (0, n.toHash)(_), h.props));
      const b = _.filter((f) => !(0, n.alwaysValidSchema)(h, s[f]));
      if (b.length === 0)
        return;
      const y = i.name("valid");
      for (const f of b)
        w(f) ? S(f) : (i.if((0, t.propertyInData)(i, g, f, h.opts.ownProperties)), S(f), h.allErrors || i.else().var(y, !0), i.endIf()), r.it.definedProperties.add(f), r.ok(y);
      function w(f) {
        return h.opts.useDefaults && !h.compositeRule && s[f].default !== void 0;
      }
      function S(f) {
        r.subschema({
          keyword: "properties",
          schemaProp: f,
          dataProp: f
        }, y);
      }
    }
  };
  return Dt.default = a, Dt;
}
var qt = {}, ao;
function ps() {
  if (ao) return qt;
  ao = 1, Object.defineProperty(qt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ xe(), t = /* @__PURE__ */ Z(), n = /* @__PURE__ */ ne(), o = /* @__PURE__ */ ne(), a = {
    keyword: "patternProperties",
    type: "object",
    schemaType: "object",
    code(r) {
      const { gen: i, schema: s, data: l, parentSchema: g, it: h } = r, { opts: _ } = h, b = (0, e.allSchemaProperties)(s), y = b.filter((k) => (0, n.alwaysValidSchema)(h, s[k]));
      if (b.length === 0 || y.length === b.length && (!h.opts.unevaluated || h.props === !0))
        return;
      const w = _.strictSchema && !_.allowMatchingProperties && g.properties, S = i.name("valid");
      h.props !== !0 && !(h.props instanceof t.Name) && (h.props = (0, o.evaluatedPropsToName)(i, h.props));
      const { props: f } = h;
      p();
      function p() {
        for (const k of b)
          w && u(k), h.allErrors ? v(k) : (i.var(S, !0), v(k), i.if(S));
      }
      function u(k) {
        for (const c in w)
          new RegExp(k).test(c) && (0, n.checkStrictMode)(h, `property ${c} matches pattern ${k} (use allowMatchingProperties)`);
      }
      function v(k) {
        i.forIn("key", l, (c) => {
          i.if((0, t._)`${(0, e.usePattern)(r, k)}.test(${c})`, () => {
            const d = y.includes(k);
            d || r.subschema({
              keyword: "patternProperties",
              schemaProp: k,
              dataProp: c,
              dataPropType: o.Type.Str
            }, S), h.opts.unevaluated && f !== !0 ? i.assign((0, t._)`${f}[${c}]`, !0) : !d && !h.allErrors && i.if((0, t.not)(S), () => i.break());
          });
        });
      }
    }
  };
  return qt.default = a, qt;
}
var Bt = {}, co;
function hs() {
  if (co) return Bt;
  co = 1, Object.defineProperty(Bt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = {
    keyword: "not",
    schemaType: ["object", "boolean"],
    trackErrors: !0,
    code(n) {
      const { gen: o, schema: a, it: r } = n;
      if ((0, e.alwaysValidSchema)(r, a)) {
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
  return Bt.default = t, Bt;
}
var Vt = {}, lo;
function ms() {
  if (lo) return Vt;
  lo = 1, Object.defineProperty(Vt, "__esModule", { value: !0 });
  const t = {
    keyword: "anyOf",
    schemaType: "array",
    trackErrors: !0,
    code: (/* @__PURE__ */ xe()).validateUnion,
    error: { message: "must match a schema in anyOf" }
  };
  return Vt.default = t, Vt;
}
var Lt = {}, uo;
function gs() {
  if (uo) return Lt;
  uo = 1, Object.defineProperty(Lt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Z(), t = /* @__PURE__ */ ne(), o = {
    keyword: "oneOf",
    schemaType: "array",
    trackErrors: !0,
    error: {
      message: "must match exactly one schema in oneOf",
      params: ({ params: a }) => (0, e._)`{passingSchemas: ${a.passing}}`
    },
    code(a) {
      const { gen: r, schema: i, parentSchema: s, it: l } = a;
      if (!Array.isArray(i))
        throw new Error("ajv implementation error");
      if (l.opts.discriminator && s.discriminator)
        return;
      const g = i, h = r.let("valid", !1), _ = r.let("passing", null), b = r.name("_valid");
      a.setParams({ passing: _ }), r.block(y), a.result(h, () => a.reset(), () => a.error(!0));
      function y() {
        g.forEach((w, S) => {
          let f;
          (0, t.alwaysValidSchema)(l, w) ? r.var(b, !0) : f = a.subschema({
            keyword: "oneOf",
            schemaProp: S,
            compositeRule: !0
          }, b), S > 0 && r.if((0, e._)`${b} && ${h}`).assign(h, !1).assign(_, (0, e._)`[${_}, ${S}]`).else(), r.if(b, () => {
            r.assign(h, !0), r.assign(_, S), f && a.mergeEvaluated(f, e.Name);
          });
        });
      }
    }
  };
  return Lt.default = o, Lt;
}
var Ut = {}, fo;
function ys() {
  if (fo) return Ut;
  fo = 1, Object.defineProperty(Ut, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = {
    keyword: "allOf",
    schemaType: "array",
    code(n) {
      const { gen: o, schema: a, it: r } = n;
      if (!Array.isArray(a))
        throw new Error("ajv implementation error");
      const i = o.name("valid");
      a.forEach((s, l) => {
        if ((0, e.alwaysValidSchema)(r, s))
          return;
        const g = n.subschema({ keyword: "allOf", schemaProp: l }, i);
        n.ok(i), n.mergeEvaluated(g);
      });
    }
  };
  return Ut.default = t, Ut;
}
var Kt = {}, po;
function vs() {
  if (po) return Kt;
  po = 1, Object.defineProperty(Kt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Z(), t = /* @__PURE__ */ ne(), o = {
    keyword: "if",
    schemaType: ["object", "boolean"],
    trackErrors: !0,
    error: {
      message: ({ params: r }) => (0, e.str)`must match "${r.ifClause}" schema`,
      params: ({ params: r }) => (0, e._)`{failingKeyword: ${r.ifClause}}`
    },
    code(r) {
      const { gen: i, parentSchema: s, it: l } = r;
      s.then === void 0 && s.else === void 0 && (0, t.checkStrictMode)(l, '"if" without "then" and "else" is ignored');
      const g = a(l, "then"), h = a(l, "else");
      if (!g && !h)
        return;
      const _ = i.let("valid", !0), b = i.name("_valid");
      if (y(), r.reset(), g && h) {
        const S = i.let("ifClause");
        r.setParams({ ifClause: S }), i.if(b, w("then", S), w("else", S));
      } else g ? i.if(b, w("then")) : i.if((0, e.not)(b), w("else"));
      r.pass(_, () => r.error(!0));
      function y() {
        const S = r.subschema({
          keyword: "if",
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }, b);
        r.mergeEvaluated(S);
      }
      function w(S, f) {
        return () => {
          const p = r.subschema({ keyword: S }, b);
          i.assign(_, b), r.mergeValidEvaluated(p, _), f ? i.assign(f, (0, e._)`${S}`) : r.setParams({ ifClause: S });
        };
      }
    }
  };
  function a(r, i) {
    const s = r.schema[i];
    return s !== void 0 && !(0, t.alwaysValidSchema)(r, s);
  }
  return Kt.default = o, Kt;
}
var Gt = {}, ho;
function $s() {
  if (ho) return Gt;
  ho = 1, Object.defineProperty(Gt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = {
    keyword: ["then", "else"],
    schemaType: ["object", "boolean"],
    code({ keyword: n, parentSchema: o, it: a }) {
      o.if === void 0 && (0, e.checkStrictMode)(a, `"${n}" without "if" is ignored`);
    }
  };
  return Gt.default = t, Gt;
}
var mo;
function bs() {
  if (mo) return Mt;
  mo = 1, Object.defineProperty(Mt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ei(), t = /* @__PURE__ */ cs(), n = /* @__PURE__ */ ti(), o = /* @__PURE__ */ ls(), a = /* @__PURE__ */ ds(), r = /* @__PURE__ */ Wn(), i = /* @__PURE__ */ us(), s = /* @__PURE__ */ ni(), l = /* @__PURE__ */ fs(), g = /* @__PURE__ */ ps(), h = /* @__PURE__ */ hs(), _ = /* @__PURE__ */ ms(), b = /* @__PURE__ */ gs(), y = /* @__PURE__ */ ys(), w = /* @__PURE__ */ vs(), S = /* @__PURE__ */ $s();
  function f(p = !1) {
    const u = [
      // any
      h.default,
      _.default,
      b.default,
      y.default,
      w.default,
      S.default,
      // object
      i.default,
      s.default,
      r.default,
      l.default,
      g.default
    ];
    return p ? u.push(t.default, o.default) : u.push(e.default, n.default), u.push(a.default), u;
  }
  return Mt.default = f, Mt;
}
var Ht = {}, He = {}, go;
function ri() {
  if (go) return He;
  go = 1, Object.defineProperty(He, "__esModule", { value: !0 }), He.dynamicAnchor = void 0;
  const e = /* @__PURE__ */ Z(), t = /* @__PURE__ */ ke(), n = /* @__PURE__ */ wn(), o = /* @__PURE__ */ Hn(), a = {
    keyword: "$dynamicAnchor",
    schemaType: "string",
    code: (s) => r(s, s.schema)
  };
  function r(s, l) {
    const { gen: g, it: h } = s;
    h.schemaEnv.root.dynamicAnchors[l] = !0;
    const _ = (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(l)}`, b = h.errSchemaPath === "#" ? h.validateName : i(s);
    g.if((0, e._)`!${_}`, () => g.assign(_, b));
  }
  He.dynamicAnchor = r;
  function i(s) {
    const { schemaEnv: l, schema: g, self: h } = s.it, { root: _, baseId: b, localRefs: y, meta: w } = l.root, { schemaId: S } = h.opts, f = new n.SchemaEnv({ schema: g, schemaId: S, root: _, baseId: b, localRefs: y, meta: w });
    return n.compileSchema.call(h, f), (0, o.getValidate)(s, f);
  }
  return He.default = a, He;
}
var Je = {}, yo;
function oi() {
  if (yo) return Je;
  yo = 1, Object.defineProperty(Je, "__esModule", { value: !0 }), Je.dynamicRef = void 0;
  const e = /* @__PURE__ */ Z(), t = /* @__PURE__ */ ke(), n = /* @__PURE__ */ Hn(), o = {
    keyword: "$dynamicRef",
    schemaType: "string",
    code: (r) => a(r, r.schema)
  };
  function a(r, i) {
    const { gen: s, keyword: l, it: g } = r;
    if (i[0] !== "#")
      throw new Error(`"${l}" only supports hash fragment reference`);
    const h = i.slice(1);
    if (g.allErrors)
      _();
    else {
      const y = s.let("valid", !1);
      _(y), r.ok(y);
    }
    function _(y) {
      if (g.schemaEnv.root.dynamicAnchors[h]) {
        const w = s.let("_v", (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(h)}`);
        s.if(w, b(w, y), b(g.validateName, y));
      } else
        b(g.validateName, y)();
    }
    function b(y, w) {
      return w ? () => s.block(() => {
        (0, n.callRef)(r, y), s.let(w, !0);
      }) : () => (0, n.callRef)(r, y);
    }
  }
  return Je.dynamicRef = a, Je.default = o, Je;
}
var Jt = {}, vo;
function ws() {
  if (vo) return Jt;
  vo = 1, Object.defineProperty(Jt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ri(), t = /* @__PURE__ */ ne(), n = {
    keyword: "$recursiveAnchor",
    schemaType: "boolean",
    code(o) {
      o.schema ? (0, e.dynamicAnchor)(o, "") : (0, t.checkStrictMode)(o.it, "$recursiveAnchor: false is ignored");
    }
  };
  return Jt.default = n, Jt;
}
var Wt = {}, $o;
function _s() {
  if ($o) return Wt;
  $o = 1, Object.defineProperty(Wt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ oi(), t = {
    keyword: "$recursiveRef",
    schemaType: "string",
    code: (n) => (0, e.dynamicRef)(n, n.schema)
  };
  return Wt.default = t, Wt;
}
var bo;
function Ss() {
  if (bo) return Ht;
  bo = 1, Object.defineProperty(Ht, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ri(), t = /* @__PURE__ */ oi(), n = /* @__PURE__ */ ws(), o = /* @__PURE__ */ _s(), a = [e.default, t.default, n.default, o.default];
  return Ht.default = a, Ht;
}
var Yt = {}, Xt = {}, wo;
function Cs() {
  if (wo) return Xt;
  wo = 1, Object.defineProperty(Xt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Wn(), t = {
    keyword: "dependentRequired",
    type: "object",
    schemaType: "object",
    error: e.error,
    code: (n) => (0, e.validatePropertyDeps)(n)
  };
  return Xt.default = t, Xt;
}
var Zt = {}, _o;
function ks() {
  if (_o) return Zt;
  _o = 1, Object.defineProperty(Zt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Wn(), t = {
    keyword: "dependentSchemas",
    type: "object",
    schemaType: "object",
    code: (n) => (0, e.validateSchemaDeps)(n)
  };
  return Zt.default = t, Zt;
}
var Qt = {}, So;
function xs() {
  if (So) return Qt;
  So = 1, Object.defineProperty(Qt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = {
    keyword: ["maxContains", "minContains"],
    type: "array",
    schemaType: "number",
    code({ keyword: n, parentSchema: o, it: a }) {
      o.contains === void 0 && (0, e.checkStrictMode)(a, `"${n}" without "contains" is ignored`);
    }
  };
  return Qt.default = t, Qt;
}
var Co;
function Es() {
  if (Co) return Yt;
  Co = 1, Object.defineProperty(Yt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Cs(), t = /* @__PURE__ */ ks(), n = /* @__PURE__ */ xs(), o = [e.default, t.default, n.default];
  return Yt.default = o, Yt;
}
var en = {}, tn = {}, ko;
function Ps() {
  if (ko) return tn;
  ko = 1, Object.defineProperty(tn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Z(), t = /* @__PURE__ */ ne(), n = /* @__PURE__ */ ke(), a = {
    keyword: "unevaluatedProperties",
    type: "object",
    schemaType: ["boolean", "object"],
    trackErrors: !0,
    error: {
      message: "must NOT have unevaluated properties",
      params: ({ params: r }) => (0, e._)`{unevaluatedProperty: ${r.unevaluatedProperty}}`
    },
    code(r) {
      const { gen: i, schema: s, data: l, errsCount: g, it: h } = r;
      if (!g)
        throw new Error("ajv implementation error");
      const { allErrors: _, props: b } = h;
      b instanceof e.Name ? i.if((0, e._)`${b} !== true`, () => i.forIn("key", l, (f) => i.if(w(b, f), () => y(f)))) : b !== !0 && i.forIn("key", l, (f) => b === void 0 ? y(f) : i.if(S(b, f), () => y(f))), h.props = !0, r.ok((0, e._)`${g} === ${n.default.errors}`);
      function y(f) {
        if (s === !1) {
          r.setParams({ unevaluatedProperty: f }), r.error(), _ || i.break();
          return;
        }
        if (!(0, t.alwaysValidSchema)(h, s)) {
          const p = i.name("valid");
          r.subschema({
            keyword: "unevaluatedProperties",
            dataProp: f,
            dataPropType: t.Type.Str
          }, p), _ || i.if((0, e.not)(p), () => i.break());
        }
      }
      function w(f, p) {
        return (0, e._)`!${f} || !${f}[${p}]`;
      }
      function S(f, p) {
        const u = [];
        for (const v in f)
          f[v] === !0 && u.push((0, e._)`${p} !== ${v}`);
        return (0, e.and)(...u);
      }
    }
  };
  return tn.default = a, tn;
}
var nn = {}, xo;
function Rs() {
  if (xo) return nn;
  xo = 1, Object.defineProperty(nn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Z(), t = /* @__PURE__ */ ne(), o = {
    keyword: "unevaluatedItems",
    type: "array",
    schemaType: ["boolean", "object"],
    error: {
      message: ({ params: { len: a } }) => (0, e.str)`must NOT have more than ${a} items`,
      params: ({ params: { len: a } }) => (0, e._)`{limit: ${a}}`
    },
    code(a) {
      const { gen: r, schema: i, data: s, it: l } = a, g = l.items || 0;
      if (g === !0)
        return;
      const h = r.const("len", (0, e._)`${s}.length`);
      if (i === !1)
        a.setParams({ len: g }), a.fail((0, e._)`${h} > ${g}`);
      else if (typeof i == "object" && !(0, t.alwaysValidSchema)(l, i)) {
        const b = r.var("valid", (0, e._)`${h} <= ${g}`);
        r.if((0, e.not)(b), () => _(b, g)), a.ok(b);
      }
      l.items = !0;
      function _(b, y) {
        r.forRange("i", y, h, (w) => {
          a.subschema({ keyword: "unevaluatedItems", dataProp: w, dataPropType: t.Type.Num }, b), l.allErrors || r.if((0, e.not)(b), () => r.break());
        });
      }
    }
  };
  return nn.default = o, nn;
}
var Eo;
function As() {
  if (Eo) return en;
  Eo = 1, Object.defineProperty(en, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ps(), t = /* @__PURE__ */ Rs(), n = [e.default, t.default];
  return en.default = n, en;
}
var rn = {}, on = {}, Po;
function Fs() {
  if (Po) return on;
  Po = 1, Object.defineProperty(on, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Z(), n = {
    keyword: "format",
    type: ["number", "string"],
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: o }) => (0, e.str)`must match format "${o}"`,
      params: ({ schemaCode: o }) => (0, e._)`{format: ${o}}`
    },
    code(o, a) {
      const { gen: r, data: i, $data: s, schema: l, schemaCode: g, it: h } = o, { opts: _, errSchemaPath: b, schemaEnv: y, self: w } = h;
      if (!_.validateFormats)
        return;
      s ? S() : f();
      function S() {
        const p = r.scopeValue("formats", {
          ref: w.formats,
          code: _.code.formats
        }), u = r.const("fDef", (0, e._)`${p}[${g}]`), v = r.let("fType"), k = r.let("format");
        r.if((0, e._)`typeof ${u} == "object" && !(${u} instanceof RegExp)`, () => r.assign(v, (0, e._)`${u}.type || "string"`).assign(k, (0, e._)`${u}.validate`), () => r.assign(v, (0, e._)`"string"`).assign(k, u)), o.fail$data((0, e.or)(c(), d()));
        function c() {
          return _.strictSchema === !1 ? e.nil : (0, e._)`${g} && !${k}`;
        }
        function d() {
          const m = y.$async ? (0, e._)`(${u}.async ? await ${k}(${i}) : ${k}(${i}))` : (0, e._)`${k}(${i})`, x = (0, e._)`(typeof ${k} == "function" ? ${m} : ${k}.test(${i}))`;
          return (0, e._)`${k} && ${k} !== true && ${v} === ${a} && !${x}`;
        }
      }
      function f() {
        const p = w.formats[l];
        if (!p) {
          c();
          return;
        }
        if (p === !0)
          return;
        const [u, v, k] = d(p);
        u === a && o.pass(m());
        function c() {
          if (_.strictSchema === !1) {
            w.logger.warn(x());
            return;
          }
          throw new Error(x());
          function x() {
            return `unknown format "${l}" ignored in schema at path "${b}"`;
          }
        }
        function d(x) {
          const P = x instanceof RegExp ? (0, e.regexpCode)(x) : _.code.formats ? (0, e._)`${_.code.formats}${(0, e.getProperty)(l)}` : void 0, O = r.scopeValue("formats", { key: l, ref: x, code: P });
          return typeof x == "object" && !(x instanceof RegExp) ? [x.type || "string", x.validate, (0, e._)`${O}.validate`] : ["string", x, O];
        }
        function m() {
          if (typeof p == "object" && !(p instanceof RegExp) && p.async) {
            if (!y.$async)
              throw new Error("async format in sync schema");
            return (0, e._)`await ${k}(${i})`;
          }
          return typeof v == "function" ? (0, e._)`${k}(${i})` : (0, e._)`${k}.test(${i})`;
        }
      }
    }
  };
  return on.default = n, on;
}
var Ro;
function Ns() {
  if (Ro) return rn;
  Ro = 1, Object.defineProperty(rn, "__esModule", { value: !0 });
  const t = [(/* @__PURE__ */ Fs()).default];
  return rn.default = t, rn;
}
var De = {}, Ao;
function Ms() {
  return Ao || (Ao = 1, Object.defineProperty(De, "__esModule", { value: !0 }), De.contentVocabulary = De.metadataVocabulary = void 0, De.metadataVocabulary = [
    "title",
    "description",
    "default",
    "deprecated",
    "readOnly",
    "writeOnly",
    "examples"
  ], De.contentVocabulary = [
    "contentMediaType",
    "contentEncoding",
    "contentSchema"
  ]), De;
}
var Fo;
function js() {
  if (Fo) return yt;
  Fo = 1, Object.defineProperty(yt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Wi(), t = /* @__PURE__ */ as(), n = /* @__PURE__ */ bs(), o = /* @__PURE__ */ Ss(), a = /* @__PURE__ */ Es(), r = /* @__PURE__ */ As(), i = /* @__PURE__ */ Ns(), s = /* @__PURE__ */ Ms(), l = [
    o.default,
    e.default,
    t.default,
    (0, n.default)(!0),
    i.default,
    s.metadataVocabulary,
    s.contentVocabulary,
    a.default,
    r.default
  ];
  return yt.default = l, yt;
}
var sn = {}, ot = {}, No;
function Os() {
  if (No) return ot;
  No = 1, Object.defineProperty(ot, "__esModule", { value: !0 }), ot.DiscrError = void 0;
  var e;
  return (function(t) {
    t.Tag = "tag", t.Mapping = "mapping";
  })(e || (ot.DiscrError = e = {})), ot;
}
var Mo;
function Ts() {
  if (Mo) return sn;
  Mo = 1, Object.defineProperty(sn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Z(), t = /* @__PURE__ */ Os(), n = /* @__PURE__ */ wn(), o = /* @__PURE__ */ bn(), a = /* @__PURE__ */ ne(), i = {
    keyword: "discriminator",
    type: "object",
    schemaType: "object",
    error: {
      message: ({ params: { discrError: s, tagName: l } }) => s === t.DiscrError.Tag ? `tag "${l}" must be string` : `value of tag "${l}" must be in oneOf`,
      params: ({ params: { discrError: s, tag: l, tagName: g } }) => (0, e._)`{error: ${s}, tag: ${g}, tagValue: ${l}}`
    },
    code(s) {
      const { gen: l, data: g, schema: h, parentSchema: _, it: b } = s, { oneOf: y } = _;
      if (!b.opts.discriminator)
        throw new Error("discriminator: requires discriminator option");
      const w = h.propertyName;
      if (typeof w != "string")
        throw new Error("discriminator: requires propertyName");
      if (h.mapping)
        throw new Error("discriminator: mapping is not supported");
      if (!y)
        throw new Error("discriminator: requires oneOf keyword");
      const S = l.let("valid", !1), f = l.const("tag", (0, e._)`${g}${(0, e.getProperty)(w)}`);
      l.if((0, e._)`typeof ${f} == "string"`, () => p(), () => s.error(!1, { discrError: t.DiscrError.Tag, tag: f, tagName: w })), s.ok(S);
      function p() {
        const k = v();
        l.if(!1);
        for (const c in k)
          l.elseIf((0, e._)`${f} === ${c}`), l.assign(S, u(k[c]));
        l.else(), s.error(!1, { discrError: t.DiscrError.Mapping, tag: f, tagName: w }), l.endIf();
      }
      function u(k) {
        const c = l.name("valid"), d = s.subschema({ keyword: "oneOf", schemaProp: k }, c);
        return s.mergeEvaluated(d, e.Name), c;
      }
      function v() {
        var k;
        const c = {}, d = x(_);
        let m = !0;
        for (let I = 0; I < y.length; I++) {
          let R = y[I];
          if (R?.$ref && !(0, a.schemaHasRulesButRef)(R, b.self.RULES)) {
            const L = R.$ref;
            if (R = n.resolveRef.call(b.self, b.schemaEnv.root, b.baseId, L), R instanceof n.SchemaEnv && (R = R.schema), R === void 0)
              throw new o.default(b.opts.uriResolver, b.baseId, L);
          }
          const z = (k = R?.properties) === null || k === void 0 ? void 0 : k[w];
          if (typeof z != "object")
            throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${w}"`);
          m = m && (d || x(R)), P(z, I);
        }
        if (!m)
          throw new Error(`discriminator: "${w}" must be required`);
        return c;
        function x({ required: I }) {
          return Array.isArray(I) && I.includes(w);
        }
        function P(I, R) {
          if (I.const)
            O(I.const, R);
          else if (I.enum)
            for (const z of I.enum)
              O(z, R);
          else
            throw new Error(`discriminator: "properties/${w}" must have "const" or "enum"`);
        }
        function O(I, R) {
          if (typeof I != "string" || I in c)
            throw new Error(`discriminator: "${w}" values must be unique strings`);
          c[I] = R;
        }
      }
    }
  };
  return sn.default = i, sn;
}
var an = {};
const zs = "https://json-schema.org/draft/2020-12/schema", Is = "https://json-schema.org/draft/2020-12/schema", Ds = { "https://json-schema.org/draft/2020-12/vocab/core": !0, "https://json-schema.org/draft/2020-12/vocab/applicator": !0, "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0, "https://json-schema.org/draft/2020-12/vocab/validation": !0, "https://json-schema.org/draft/2020-12/vocab/meta-data": !0, "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0, "https://json-schema.org/draft/2020-12/vocab/content": !0 }, qs = "meta", Bs = "Core and Validation specifications meta-schema", Vs = [{ $ref: "meta/core" }, { $ref: "meta/applicator" }, { $ref: "meta/unevaluated" }, { $ref: "meta/validation" }, { $ref: "meta/meta-data" }, { $ref: "meta/format-annotation" }, { $ref: "meta/content" }], Ls = ["object", "boolean"], Us = "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.", Ks = { definitions: { $comment: '"definitions" has been replaced by "$defs".', type: "object", additionalProperties: { $dynamicRef: "#meta" }, deprecated: !0, default: {} }, dependencies: { $comment: '"dependencies" has been split and replaced by "dependentSchemas" and "dependentRequired" in order to serve their differing semantics.', type: "object", additionalProperties: { anyOf: [{ $dynamicRef: "#meta" }, { $ref: "meta/validation#/$defs/stringArray" }] }, deprecated: !0, default: {} }, $recursiveAnchor: { $comment: '"$recursiveAnchor" has been replaced by "$dynamicAnchor".', $ref: "meta/core#/$defs/anchorString", deprecated: !0 }, $recursiveRef: { $comment: '"$recursiveRef" has been replaced by "$dynamicRef".', $ref: "meta/core#/$defs/uriReferenceString", deprecated: !0 } }, Gs = {
  $schema: zs,
  $id: Is,
  $vocabulary: Ds,
  $dynamicAnchor: qs,
  title: Bs,
  allOf: Vs,
  type: Ls,
  $comment: Us,
  properties: Ks
}, Hs = "https://json-schema.org/draft/2020-12/schema", Js = "https://json-schema.org/draft/2020-12/meta/applicator", Ws = { "https://json-schema.org/draft/2020-12/vocab/applicator": !0 }, Ys = "meta", Xs = "Applicator vocabulary meta-schema", Zs = ["object", "boolean"], Qs = { prefixItems: { $ref: "#/$defs/schemaArray" }, items: { $dynamicRef: "#meta" }, contains: { $dynamicRef: "#meta" }, additionalProperties: { $dynamicRef: "#meta" }, properties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, propertyNames: { format: "regex" }, default: {} }, dependentSchemas: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, propertyNames: { $dynamicRef: "#meta" }, if: { $dynamicRef: "#meta" }, then: { $dynamicRef: "#meta" }, else: { $dynamicRef: "#meta" }, allOf: { $ref: "#/$defs/schemaArray" }, anyOf: { $ref: "#/$defs/schemaArray" }, oneOf: { $ref: "#/$defs/schemaArray" }, not: { $dynamicRef: "#meta" } }, ea = { schemaArray: { type: "array", minItems: 1, items: { $dynamicRef: "#meta" } } }, ta = {
  $schema: Hs,
  $id: Js,
  $vocabulary: Ws,
  $dynamicAnchor: Ys,
  title: Xs,
  type: Zs,
  properties: Qs,
  $defs: ea
}, na = "https://json-schema.org/draft/2020-12/schema", ra = "https://json-schema.org/draft/2020-12/meta/unevaluated", oa = { "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0 }, ia = "meta", sa = "Unevaluated applicator vocabulary meta-schema", aa = ["object", "boolean"], ca = { unevaluatedItems: { $dynamicRef: "#meta" }, unevaluatedProperties: { $dynamicRef: "#meta" } }, la = {
  $schema: na,
  $id: ra,
  $vocabulary: oa,
  $dynamicAnchor: ia,
  title: sa,
  type: aa,
  properties: ca
}, da = "https://json-schema.org/draft/2020-12/schema", ua = "https://json-schema.org/draft/2020-12/meta/content", fa = { "https://json-schema.org/draft/2020-12/vocab/content": !0 }, pa = "meta", ha = "Content vocabulary meta-schema", ma = ["object", "boolean"], ga = { contentEncoding: { type: "string" }, contentMediaType: { type: "string" }, contentSchema: { $dynamicRef: "#meta" } }, ya = {
  $schema: da,
  $id: ua,
  $vocabulary: fa,
  $dynamicAnchor: pa,
  title: ha,
  type: ma,
  properties: ga
}, va = "https://json-schema.org/draft/2020-12/schema", $a = "https://json-schema.org/draft/2020-12/meta/core", ba = { "https://json-schema.org/draft/2020-12/vocab/core": !0 }, wa = "meta", _a = "Core vocabulary meta-schema", Sa = ["object", "boolean"], Ca = { $id: { $ref: "#/$defs/uriReferenceString", $comment: "Non-empty fragments not allowed.", pattern: "^[^#]*#?$" }, $schema: { $ref: "#/$defs/uriString" }, $ref: { $ref: "#/$defs/uriReferenceString" }, $anchor: { $ref: "#/$defs/anchorString" }, $dynamicRef: { $ref: "#/$defs/uriReferenceString" }, $dynamicAnchor: { $ref: "#/$defs/anchorString" }, $vocabulary: { type: "object", propertyNames: { $ref: "#/$defs/uriString" }, additionalProperties: { type: "boolean" } }, $comment: { type: "string" }, $defs: { type: "object", additionalProperties: { $dynamicRef: "#meta" } } }, ka = { anchorString: { type: "string", pattern: "^[A-Za-z_][-A-Za-z0-9._]*$" }, uriString: { type: "string", format: "uri" }, uriReferenceString: { type: "string", format: "uri-reference" } }, xa = {
  $schema: va,
  $id: $a,
  $vocabulary: ba,
  $dynamicAnchor: wa,
  title: _a,
  type: Sa,
  properties: Ca,
  $defs: ka
}, Ea = "https://json-schema.org/draft/2020-12/schema", Pa = "https://json-schema.org/draft/2020-12/meta/format-annotation", Ra = { "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0 }, Aa = "meta", Fa = "Format vocabulary meta-schema for annotation results", Na = ["object", "boolean"], Ma = { format: { type: "string" } }, ja = {
  $schema: Ea,
  $id: Pa,
  $vocabulary: Ra,
  $dynamicAnchor: Aa,
  title: Fa,
  type: Na,
  properties: Ma
}, Oa = "https://json-schema.org/draft/2020-12/schema", Ta = "https://json-schema.org/draft/2020-12/meta/meta-data", za = { "https://json-schema.org/draft/2020-12/vocab/meta-data": !0 }, Ia = "meta", Da = "Meta-data vocabulary meta-schema", qa = ["object", "boolean"], Ba = { title: { type: "string" }, description: { type: "string" }, default: !0, deprecated: { type: "boolean", default: !1 }, readOnly: { type: "boolean", default: !1 }, writeOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 } }, Va = {
  $schema: Oa,
  $id: Ta,
  $vocabulary: za,
  $dynamicAnchor: Ia,
  title: Da,
  type: qa,
  properties: Ba
}, La = "https://json-schema.org/draft/2020-12/schema", Ua = "https://json-schema.org/draft/2020-12/meta/validation", Ka = { "https://json-schema.org/draft/2020-12/vocab/validation": !0 }, Ga = "meta", Ha = "Validation vocabulary meta-schema", Ja = ["object", "boolean"], Wa = { type: { anyOf: [{ $ref: "#/$defs/simpleTypes" }, { type: "array", items: { $ref: "#/$defs/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, const: !0, enum: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/$defs/nonNegativeInteger" }, minLength: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, maxItems: { $ref: "#/$defs/nonNegativeInteger" }, minItems: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, maxContains: { $ref: "#/$defs/nonNegativeInteger" }, minContains: { $ref: "#/$defs/nonNegativeInteger", default: 1 }, maxProperties: { $ref: "#/$defs/nonNegativeInteger" }, minProperties: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, required: { $ref: "#/$defs/stringArray" }, dependentRequired: { type: "object", additionalProperties: { $ref: "#/$defs/stringArray" } } }, Ya = { nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { $ref: "#/$defs/nonNegativeInteger", default: 0 }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, Xa = {
  $schema: La,
  $id: Ua,
  $vocabulary: Ka,
  $dynamicAnchor: Ga,
  title: Ha,
  type: Ja,
  properties: Wa,
  $defs: Ya
};
var jo;
function Za() {
  if (jo) return an;
  jo = 1, Object.defineProperty(an, "__esModule", { value: !0 });
  const e = Gs, t = ta, n = la, o = ya, a = xa, r = ja, i = Va, s = Xa, l = ["/properties"];
  function g(h) {
    return [
      e,
      t,
      n,
      o,
      a,
      _(this, r),
      i,
      _(this, s)
    ].forEach((b) => this.addMetaSchema(b, void 0, !1)), this;
    function _(b, y) {
      return h ? b.$dataMetaSchema(y, l) : y;
    }
  }
  return an.default = g, an;
}
var Oo;
function Qa() {
  return Oo || (Oo = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv2020 = void 0;
    const n = /* @__PURE__ */ Hi(), o = /* @__PURE__ */ js(), a = /* @__PURE__ */ Ts(), r = /* @__PURE__ */ Za(), i = "https://json-schema.org/draft/2020-12/schema";
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
        super._addVocabularies(), o.default.forEach((y) => this.addVocabulary(y)), this.opts.discriminator && this.addKeyword(a.default);
      }
      _addDefaultMetaSchema() {
        super._addDefaultMetaSchema();
        const { $data: y, meta: w } = this.opts;
        w && (r.default.call(this, y), this.refs["http://json-schema.org/schema"] = i);
      }
      defaultMeta() {
        return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(i) ? i : void 0);
      }
    }
    t.Ajv2020 = s, e.exports = t = s, e.exports.Ajv2020 = s, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = s;
    var l = /* @__PURE__ */ $n();
    Object.defineProperty(t, "KeywordCxt", { enumerable: !0, get: function() {
      return l.KeywordCxt;
    } });
    var g = /* @__PURE__ */ Z();
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
    var h = /* @__PURE__ */ Gn();
    Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
      return h.default;
    } });
    var _ = /* @__PURE__ */ bn();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return _.default;
    } });
  })(ft, ft.exports)), ft.exports;
}
var ec = /* @__PURE__ */ Qa();
const tc = /* @__PURE__ */ Fi(ec), nc = "https://json-schema.org/draft/2020-12/schema", rc = "https://raw.githubusercontent.com/omsf-eco-infra/gufe-viz/main/schema/gufe-viz.schema.json", oc = "gufe-viz payload", ic = "Python-to-TypeScript contract bridge for gufe visualizations. Source of truth both languages are downstream of it. This schema is not strictly versioned or published as it is only internally consumed by this codebase. Schema description: one schema object per gufe class: every $def named *Viz is the visualization form of exactly one GufeTokenizable, it carries that object's `gufe-key`. Every reference from one gufe object to another is that object's gufe key, and the objects themselves live in the `registry` on the root payload. So a ligand network's nodes are keys, a chemical system's components and a transformation's protocol are keys and each one resolves to a complete, drawable object. An alchemical network whose forty systems share one protein carries that PDB once and points at it forty times, and the browser can still drill into it, because what it points at is a whole ProteinComponentViz. This is a single-shot dump rather than a conversation with a server, so the registry travels with the payload.", sc = [{ $ref: "#/$defs/SmallMoleculeComponentViz" }, { $ref: "#/$defs/ProteinComponentViz" }, { $ref: "#/$defs/SolvatedPDBComponentViz" }, { $ref: "#/$defs/ProteinMembraneComponentViz" }, { $ref: "#/$defs/SolventComponentViz" }, { $ref: "#/$defs/UnknownComponentViz" }, { $ref: "#/$defs/ProtocolViz" }, { $ref: "#/$defs/LigandAtomMappingViz" }, { $ref: "#/$defs/LigandNetworkViz" }, { $ref: "#/$defs/ChemicalSystemViz" }, { $ref: "#/$defs/TransformationViz" }, { $ref: "#/$defs/AlchemicalNetworkViz" }], ac = /* @__PURE__ */ JSON.parse('{"GufeKey":{"title":"GufeKey","description":"A gufe key: the identity of a GufeTokenizable, of the form \'ClassName-<hex digest>\'. It is deterministic and repeatable within a software environment. Only its non-emptiness is checked","type":"string","minLength":1},"ComponentKey":{"title":"ComponentKey","description":"A gufe key naming a ComponentViz in the registry. Identical to GufeKey at validation time: JSON Schema has no way to say \'this string is the gufe-key of an entry in that array, and that entry has this type\', because that is a join across two parts of the document. What the name buys is that the referent\'s type is stated in the contract and carried into the generated TypeScript, instead of living only in a test and a view.","$ref":"#/$defs/GufeKey"},"SmallMoleculeComponentKey":{"title":"SmallMoleculeComponentKey","description":"A gufe key naming a SmallMoleculeComponentViz in the registry. Resolving it yields the whole molecule, SDF included. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ChemicalSystemKey":{"title":"ChemicalSystemKey","description":"A gufe key naming a ChemicalSystemViz in the registry. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ProtocolKey":{"title":"ProtocolKey","description":"A gufe key naming a ProtocolViz in the registry. Every transformation of a network usually names the same one. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"Registry":{"title":"Registry","description":"The pool of gufe objects this payload refers to by key, each a complete payload object in its own right. Entries are unique by `gufe-key` and sorted by (type, gufe-key) so a committed fixture is byte-stable. JSON Schema cannot express \'unique by a property\' or \'every reference resolves\', so both are covered by tests on the Python side and degraded over by the views.","type":"array","items":{"oneOf":[{"$ref":"#/$defs/ComponentViz"},{"$ref":"#/$defs/ProtocolViz"},{"$ref":"#/$defs/ChemicalSystemViz"}]}},"ComponentViz":{"title":"ComponentViz","description":"Any single chemical-system component","oneOf":[{"$ref":"#/$defs/SmallMoleculeComponentViz"},{"$ref":"#/$defs/ProteinComponentViz"},{"$ref":"#/$defs/SolvatedPDBComponentViz"},{"$ref":"#/$defs/ProteinMembraneComponentViz"},{"$ref":"#/$defs/SolventComponentViz"},{"$ref":"#/$defs/UnknownComponentViz"}]},"SmallMoleculeComponentViz":{"title":"SmallMoleculeComponentViz","description":"A small molecule, carried as a complete SDF record.","type":"object","properties":{"type":{"const":"SmallMoleculeComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"sdf":{"type":"string","minLength":1,"description":"Complete inline SDF record, including the conformer."},"smiles":{"type":"string"},"total_charge":{"type":"integer","description":"Net formal charge. Displayed, never recomputed from the SDF."}},"required":["type","gufe-key","name","sdf","smiles","total_charge"],"additionalProperties":false},"ProteinComponentViz":{"title":"ProteinComponentViz","description":"A protein, carried as a complete PDB record.","type":"object","properties":{"type":{"const":"ProteinComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolvatedPDBComponentViz":{"title":"SolvatedPDBComponentViz","description":"A protein with explicit solvent. A distinct type rather than a flag on ProteinComponentViz, because the discriminator is what a view dispatches on and the presence of waters changes what a sensible default representation is.","type":"object","properties":{"type":{"const":"SolvatedPDBComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation, including explicit solvent."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"ProteinMembraneComponentViz":{"title":"ProteinMembraneComponentViz","description":"A protein embedded in a membrane.","type":"object","properties":{"type":{"const":"ProteinMembraneComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation of the protein and membrane system."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolventComponentViz":{"title":"SolventComponentViz","description":"Bulk solvent settings. There is no structure to draw, so these are flat fields suitable for rendering as a settings card.","type":"object","properties":{"type":{"const":"SolventComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"smiles":{"type":"string","minLength":1},"positive_ion":{"type":"string"},"negative_ion":{"type":"string"},"neutralize":{"type":"boolean"},"ion_concentration":{"type":"string","description":"Display-form concentration with units, for example \'0.15 molar\'. A string rather than a number because the unit is part of the value and the view only ever prints it."}},"required":["type","gufe-key","name","smiles","positive_ion","negative_ion","neutralize","ion_concentration"],"additionalProperties":false},"UnknownComponentViz":{"title":"UnknownComponentViz","description":"The graceful fallback for a component type this build does not recognize. gufe supports custom Component subclasses, so meeting one is an expected outcome rather than an error, and the browser answers it with \'sorry, there is no visualization for this\'. This covers an unrecognized type only: a recognized component whose serializer fails is a bug, and raises in Python rather than arriving here wearing a disguise.","type":"object","properties":{"type":{"const":"UnknownComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The gufe class name, so the panel can say which type it could not draw."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ProtocolViz":{"title":"ProtocolViz","description":"A gufe Protocol, named. Every transformation in an alchemical network usually shares one, so this is a registry entry that many edges point at rather than a class name repeated per edge. Settings are deliberately absent for now: they are large, deeply nested, and nothing draws them yet, adding a `settings` field later is additive and breaks nothing.","type":"object","properties":{"type":{"const":"ProtocolViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The Protocol\'s class name, which is what identifies it to a reader, a Protocol has no name of its own, so `name` is usually empty."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ChemicalSystemViz":{"title":"ChemicalSystemViz","description":"A gufe ChemicalSystem: labels mapped to the gufe keys of its components.","type":"object","properties":{"type":{"const":"ChemicalSystemViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"components":{"type":"object","description":"ChemicalSystem labels mapped to the gufe keys of the components in the registry.","additionalProperties":{"$ref":"#/$defs/ComponentKey"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","components"],"additionalProperties":false},"AtomMapping":{"title":"AtomMapping","description":"Atom index correspondence from molecule A to molecule B, as a list of index pairs. A list rather than an object keyed by A\'s index, because JSON object keys can only be strings: keying by index would put decimal strings such as \'12\' in the payload and leave both languages casting them back to integers, and it is Python\'s dict-of-int shape only by resemblance. As a list, both indices stay integers, and \'an entry has a B index for every A index\' becomes a `required` the schema states rather than a convention a reader has to trust. Pairs are ordered by `index_A` so a committed fixture is byte-stable.","type":"array","items":{"type":"object","properties":{"index_A":{"type":"integer","minimum":0,"description":"An atom index in molecule A."},"index_B":{"type":"integer","minimum":0,"description":"The atom index in molecule B that it maps to."}},"required":["index_A","index_B"],"additionalProperties":false}},"Annotations":{"title":"Annotations","description":"Free-form mapping metadata. gufe puts nothing here by design and every mapper picks its own keys, so this is deliberately open. Values are whatever survived being made JSON-safe. Displayed but never interpreted, with the single exception of \'score\'.","type":"object"},"LigandAtomMappingViz":{"title":"LigandAtomMappingViz","description":"One atom mapping between two small molecules. This is also what an edge of a ligand network is because the two endpoints are gufe keys either way: standalone they resolve in this object\'s own registry, and in a network they resolve in the network\'s, where they are the same entries the nodes name. `componentA` and `componentB` are the molecules the two sides of `componentA_to_componentB` index into: an `index_A` is an atom of the SmallMoleculeComponentViz that `componentA` names, and an `index_B` an atom of `componentB`\'s.","type":"object","properties":{"type":{"const":"LigandAtomMappingViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"componentA":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentB":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentA_to_componentB":{"$ref":"#/$defs/AtomMapping"},"score":{"type":["number","null"],"description":"The \'score\' annotation when it is a plain number, otherwise null. This is the one annotation key that is interpreted rather than displayed: it drives the edge colouring and the force layout\'s link distance."},"annotations":{"$ref":"#/$defs/Annotations"},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","componentA","componentB","componentA_to_componentB","score","annotations"],"additionalProperties":false},"LigandNetworkViz":{"title":"LigandNetworkViz","description":"A ligand network: the ligands in the registry, the nodes as keys into it, and the mappings as edges. Deliberately not gufe\'s GraphML: that format embeds a gufe to_json moldict per node, so forwarding it would relocate the decoding problem into the browser rather than avoid it.","type":"object","properties":{"type":{"const":"LigandNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ligand, resolved in `registry`.","items":{"$ref":"#/$defs/SmallMoleculeComponentKey"}},"edges":{"type":"array","description":"The mappings, whose `componentA` and `componentB` name nodes of this network. JSON Schema cannot express that referential constraint, so a Python test covers it, and the view drops a dangling edge with a banner rather than failing.","items":{"$ref":"#/$defs/LigandAtomMappingViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false},"TransformationViz":{"title":"TransformationViz","description":"A transformation between two chemical systems, both named by gufe key, as is its protocol: `stateA` is the system it starts from, `stateB` the one it ends at, and every edge of a network usually names the same protocol. This is also what an edge of an alchemical network is (there is no separate edge type) because `stateA` and `stateB` are keys either way, and in a network they are the keys the nodes name. NonTransformation uses this type too: it exposes the same stateA and stateB properties, both its single system, so it renders as a diff with no differences.","type":"object","properties":{"type":{"const":"TransformationViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"protocol":{"$ref":"#/$defs/ProtocolKey"},"stateA":{"$ref":"#/$defs/ChemicalSystemKey"},"stateB":{"$ref":"#/$defs/ChemicalSystemKey"},"mappings":{"type":"array","items":{"$ref":"#/$defs/LigandAtomMappingViz"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","protocol","stateA","stateB","mappings"],"additionalProperties":false},"AlchemicalNetworkViz":{"title":"AlchemicalNetworkViz","description":"A graph of chemical systems joined by transformations. What repeats here is not the nodes and edges themselves but what they are made of: in practice every system shares one protein and every transformation shares one protocol. Both live in the registry, once, as whole objects so this view can show composition and topology while still letting a reader open a node and see the protein.","type":"object","properties":{"type":{"const":"AlchemicalNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ChemicalSystem, resolved in `registry`.","items":{"$ref":"#/$defs/ChemicalSystemKey"}},"edges":{"type":"array","description":"The transformations, whose `stateA` and `stateB` name nodes of this network.","items":{"$ref":"#/$defs/TransformationViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false}}'), Yn = {
  $schema: nc,
  $id: rc,
  title: oc,
  description: ic,
  oneOf: sc,
  $defs: ac
}, Ol = [
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
], Xn = Yn.$id, Zn = new tc({ allErrors: !0, strict: !1 });
Zn.addSchema(Yn, Xn);
const To = Zn.getSchema(Xn), ii = Object.entries(Yn.$defs).filter(
  ([e, t]) => t.properties?.type?.const === e
).map(([e]) => e).sort(), Tl = ii, Qn = /* @__PURE__ */ new Map();
for (const e of ii) {
  const t = Zn.getSchema(`${Xn}#/$defs/${e}`);
  t && Qn.set(e, t);
}
const Bn = { valid: !0, issues: [] };
function Vn(e) {
  return (e ?? []).map((t) => ({
    path: t.instancePath || "",
    message: t.keyword === "additionalProperties" ? `unknown property ${JSON.stringify(t.params.additionalProperty)}` : t.message ?? "is invalid"
  }));
}
function cc(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return {
      valid: !1,
      issues: [{ path: "", message: "must be a JSON object" }]
    };
  const t = e.type, n = typeof t == "string" ? Qn.get(t) : void 0;
  return n ? n(e) ? Bn : { valid: !1, issues: Vn(n.errors) } : To(e) ? Bn : { valid: !1, issues: Vn(To.errors) };
}
function zl(e, t) {
  const n = Qn.get(e);
  return n ? n(t) ? Bn : { valid: !1, issues: Vn(n.errors) } : {
    valid: !1,
    issues: [
      { path: "", message: `unknown payload type ${JSON.stringify(e)}` }
    ]
  };
}
function lc(e, t = 8) {
  const n = e.slice(0, t).map((o) => `${o.path || "(root)"}: ${o.message}`);
  return e.length > t && n.push(`... and ${e.length - t} more`), n.join(`
`);
}
const er = {
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
function si(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return {
      message: "This does not look like a gufe-viz payload (expected a JSON object)."
    };
  const { type: t } = e;
  if (typeof t != "string" || !t)
    return {
      message: "This payload has no `type`, so there is nothing to say what it is."
    };
  if (!er[t]) return dc(t);
  const { valid: n, issues: o } = cc(e);
  return n ? null : {
    message: `This payload says it is a ${t}, but it does not match the gufe-viz schema.`,
    detail: lc(o)
  };
}
function dc(e) {
  const t = Object.keys(er).sort().join(", ");
  return {
    message: `Sorry, there is no visualization for ${e} yet. This build can draw: ${t}.`
  };
}
function Il(e) {
  return si(e)?.message ?? null;
}
class uc extends Se {
  placeholder() {
    return "Waiting for data...";
  }
  renderView(t, n) {
    Ri("payload", n, this);
    const o = si(n);
    if (o)
      return t.appendChild(fc(o, n)), {};
    const a = n.type, r = er[a], i = document.createElement(r);
    return i.style.cssText = "flex:1;min-height:0;min-width:0;", i.payload = n, t.appendChild(i), {
      onResize: () => i.resize?.(),
      // Removing the child fires its own `disconnectedCallback`, which is where
      // its viewers and observers are released
      cleanup: () => i.remove()
    };
  }
}
function fc(e, t) {
  const n = N(
    "div",
    "flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:32px;"
  );
  n.appendChild(ae(e.message));
  const o = (r, i) => N(
    "div",
    "max-width:640px;padding:8px 12px;border-radius:6px;font-size:11px;white-space:pre-wrap;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;overflow-wrap:anywhere;" + (i ? `background:${E.warnBg};color:${E.warnFg};border:1px solid ${E.warnBorder};` : `background:${E.panelBg};color:${E.textMuted2};border:1px solid ${E.cardBorder};`),
    r
  );
  e.detail && n.appendChild(o(e.detail, !0));
  const a = pc(t);
  return a && n.appendChild(o(a, !1)), n;
}
function pc(e) {
  if (e == null || typeof e != "object") return null;
  const t = e, n = [];
  typeof t.type == "string" && n.push(`type: ${Ne(t.type)}`), typeof t.name == "string" && t.name && n.push(`name: ${Ne(t.name)}`);
  const o = Object.keys(e);
  return o.length && n.push(
    `keys: ${o.slice(0, 12).join(", ")}${o.length > 12 ? ", ..." : ""}`
  ), n.length ? n.join(`
`) : null;
}
Ce("gufe-view", uc);
const tr = {
  threeDmol: "https://3dmol.org/build/3Dmol-min.js",
  rdkit: "https://unpkg.com/@rdkit/rdkit/dist/RDKit_minimal.js",
  d3: "https://cdn.jsdelivr.net/npm/d3@7/+esm"
};
function nr(e) {
  const t = globalThis.__gufeEngines?.[e];
  return t ? Promise.resolve(t) : null;
}
function ai(e, t) {
  return new Promise((n, o) => {
    const a = document.createElement("script");
    a.src = e, a.onload = () => n(), a.onerror = () => o(new Error(`Failed to load ${t}`)), document.head.appendChild(a);
  });
}
let Ve = null, We = null;
function rr() {
  if (We) return We;
  const e = nr("threeDmol");
  return e ? (We = e.then((t) => Ve = t || window.$3Dmol), We) : (We = (async () => {
    if (window.$3Dmol) return Ve = window.$3Dmol;
    if (await ai(tr.threeDmol, "3Dmol.js"), !window.$3Dmol) throw new Error("3Dmol.js loaded but $3Dmol is undefined");
    return Ve = window.$3Dmol;
  })(), We);
}
let Ye = null;
function or() {
  if (Ye) return Ye;
  const e = nr("rdkit");
  return e ? (Ye = e.then((t) => window.RDKit = t), Ye) : (Ye = (async () => {
    if (window.RDKit) return window.RDKit;
    if (await ai(tr.rdkit, "RDKit"), !window.initRDKitModule) throw new Error("RDKit loaded but initRDKitModule is undefined");
    return window.RDKit = await window.initRDKitModule();
  })(), Ye);
}
let Tn = null;
function ci() {
  if (!Tn) {
    const e = tr.d3;
    Tn = nr("d3") ?? import(
      /* @vite-ignore */
      e
    );
  }
  return Tn;
}
function li(e, t) {
  let n = !1, o = !1;
  const a = () => {
    n = !0;
  }, r = () => {
    n = !1;
  }, i = (s) => {
    if (s.stopPropagation(), n || s.ctrlKey || s.metaKey) {
      s.preventDefault(), t.onZoom(s);
      return;
    }
    t.hint && !o && (o = !0, mc(e, t.hint));
  };
  return e.addEventListener("wheel", i, { passive: !1, capture: !0 }), e.addEventListener("pointerdown", a), e.addEventListener("pointerenter", a), e.addEventListener("pointerleave", r), {
    cleanup() {
      e.removeEventListener("wheel", i, { capture: !0 }), e.removeEventListener("pointerdown", a), e.removeEventListener("pointerenter", a), e.removeEventListener("pointerleave", r);
    }
  };
}
const hc = 1600;
function mc(e, t) {
  const n = N(
    "div",
    "position:absolute;bottom:12px;left:50%;transform:translateX(-50%);z-index:30;pointer-events:none;padding:5px 12px;border-radius:6px;font-size:11px;white-space:nowrap;background:rgba(0,0,0,0.72);color:#ffffff;transition:opacity .3s ease;",
    t
  );
  e.appendChild(n), setTimeout(() => {
    n.style.opacity = "0", setTimeout(() => n.remove(), 300);
  }, hc);
}
const gc = { min: 0.25, max: 12 };
function yc(e, t = gc) {
  let n = 1;
  return {
    zoomBy(o) {
      const a = Math.min(t.max, Math.max(t.min, n * o));
      if (a === n) return;
      const r = a / n;
      n = a, e.zoom(r), e.render();
    },
    reset() {
      n = 1, e.zoomTo(), e.render();
    },
    level: () => n
  };
}
const vc = 2e-3;
function $c(e) {
  return Math.exp(-e.deltaY * vc);
}
function ir(e, t, n = {}) {
  const o = yc(t, n.bounds), a = li(e, {
    hint: n.hint ?? "Click or hold Ctrl to zoom",
    onZoom: (r) => o.zoomBy($c(r))
  });
  return { ...o, cleanup: a.cleanup };
}
function _n(e, t = "Reset view") {
  const n = N("button", Te, "Reset");
  return n.title = t, n.setAttribute("aria-label", t), n.onclick = e, n;
}
const qe = {
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
], Dl = "hsv", D = [0, 0, 0], bc = {
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
}, wc = {
  atomColourPalette: bc,
  addAtomIndices: !0,
  continuousHighlight: !1
}, di = `
`, zo = "$$$$";
function cn(e, t) {
  if (!e || !e.trim()) throw new Error("empty SDF");
  const n = e.replace(/\r/g, "").split(di);
  if (n.length < 4) throw new Error("SDF too short");
  const o = n[3];
  if (o.indexOf("V3000") !== -1) throw new Error("V3000 molfiles are not supported");
  const a = parseInt(o.substring(0, 3), 10), r = parseInt(o.substring(3, 6), 10);
  if (!isFinite(a) || a <= 0) throw new Error(`bad counts line: ${o}`);
  const i = [], s = [];
  for (let h = 0; h < a; h++) {
    const _ = n[4 + h];
    if (_ == null) throw new Error("truncated atom block");
    i.push([
      parseFloat(_.substring(0, 10)) || 0,
      parseFloat(_.substring(10, 20)) || 0,
      parseFloat(_.substring(20, 30)) || 0
    ]), s.push(_.substring(31, 34).trim() || "X");
  }
  const l = [];
  for (let h = 0; h < (isFinite(r) ? r : 0); h++) {
    const _ = n[4 + a + h];
    if (_ == null) break;
    const b = parseInt(_.substring(0, 3), 10), y = parseInt(_.substring(3, 6), 10), w = parseInt(_.substring(6, 9), 10);
    !isFinite(b) || !isFinite(y) || l.push([b - 1, y - 1, isFinite(w) ? w : 1]);
  }
  return { name: (n[0] || "").trim() || t || "molecule", symbols: s, bonds: l, coords: i };
}
const ct = (e) => e.indexOf(zo) >= 0 ? e : `${e}${di}${zo}`;
function _c(e) {
  const t = String(e).split(/\r?\n/);
  if (t.length < 4) return null;
  const n = parseInt(t[3].slice(0, 3), 10), o = parseInt(t[3].slice(3, 6), 10);
  return isNaN(n) || isNaN(o) ? null : { atoms: n, bonds: o };
}
function ui(e, t, n) {
  let o = null;
  try {
    if (o = e.get_mol(t, JSON.stringify({ removeHs: !0 })), !o) return null;
    try {
      o.set_new_coords(!0);
    } catch {
    }
    return o.get_svg(n, n) || null;
  } catch (a) {
    return console.warn("[gufe-viz] depictSVG threw -", me(a)), null;
  } finally {
    if (o)
      try {
        o.delete();
      } catch {
      }
  }
}
function fi(e, t, n) {
  e.innerHTML = t;
  const o = e.querySelector("svg");
  o && (o.removeAttribute("width"), o.removeAttribute("height"), o.getAttribute("viewBox") || o.setAttribute("viewBox", `0 0 ${n} ${n}`), o.setAttribute("preserveAspectRatio", "xMidYMid meet"), o.setAttribute("style", "width:100%;height:100%;max-width:100%;max-height:100%;"));
}
function Sc(e, t, n, o, a = {}) {
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
        ...wc,
        highlightAtomColors: a
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
const Cc = [
  { id: "stick", label: "Stick", title: "Sticks only" },
  { id: "ball", label: "Ball+Stick", title: "Ball and stick" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" }
], Io = {
  stick: { stick: { radius: 0.15, colorscheme: "Jmol" } },
  ball: { stick: { radius: 0.12, colorscheme: "Jmol" }, sphere: { scale: 0.28, colorscheme: "Jmol" } },
  sphere: { sphere: { scale: 1, colorscheme: "Jmol" } }
}, Do = 400;
class kc extends Se {
  placeholder() {
    return "Waiting for a SmallMoleculeComponent payload...";
  }
  renderView(t, n) {
    const o = n.sdf, a = n.name ?? "", r = n.smiles, i = n.total_charge;
    t.appendChild(Me(a || "Unnamed molecule", "SmallMoleculeComponent"));
    const s = N("div", "flex:1;display:flex;flex-direction:row;overflow:hidden;min-height:0;");
    t.appendChild(s);
    const l = N("div", "flex:1 1 50%;min-width:0;display:flex;flex-direction:column;"), g = N("div", "flex:1 1 50%;min-width:0;display:flex;flex-direction:column;position:relative;");
    s.appendChild(l), s.appendChild(N("div", `width:1px;flex-shrink:0;background:${E.splitBorder};`)), s.appendChild(g);
    const h = (m) => N("div", `flex-shrink:0;padding:4px 10px;font-size:12px;font-weight:bold;color:${E.labelFg};background:${E.labelBg};`, m);
    l.appendChild(h("2D"));
    const _ = N(
      "div",
      `flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:8px;background:${E.canvas2DBg};`
    );
    l.appendChild(_), g.appendChild(h("3D"));
    const b = Kn();
    g.appendChild(b.wrap);
    const y = N(
      "div",
      `flex-shrink:0;display:flex;flex-wrap:wrap;align-items:baseline;gap:6px 20px;padding:8px 16px;font-size:12px;background:${E.toolbarBg};border-top:1px solid ${E.toolbarBorder};color:${E.textPrimary};`
    );
    t.appendChild(y);
    const w = o ? _c(o) : null, S = [
      ["Name", a || Ze, !1],
      ["SMILES", r || Ze, !0],
      ["Charge", i == null ? Ze : String(i), !1],
      ["Atoms", w ? String(w.atoms) : Ze, !1],
      ["Bonds", w ? String(w.bonds) : Ze, !1]
    ];
    for (const [m, x, P] of S) {
      const O = N("div", "display:flex;align-items:baseline;gap:6px;min-width:0;");
      O.appendChild(
        N(
          "span",
          `font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;flex-shrink:0;color:${E.textMuted2};`,
          m
        )
      );
      const I = N(
        "span",
        `user-select:text;cursor:text;color:${E.textPrimary}` + (P ? ";font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:11px;overflow-wrap:anywhere;" : ""),
        x
      );
      I.title = x, O.appendChild(I), y.appendChild(O);
    }
    if (!o || !o.trim())
      return _.appendChild(ae("No molecule provided")), b.container.appendChild(ae("No molecule provided")), {};
    _.appendChild(ae("Loading 2D depiction...")), or().then((m) => {
      const x = ui(m, o, Do);
      x ? fi(_, x, Do) : _.replaceChildren(ae("Failed to parse molecule", !0));
    }).catch((m) => {
      _.replaceChildren(ae(`RDKit failed to load: ${me(m)}`, !0));
    });
    let f = null, p = null, u = "stick", v = !1;
    const k = N(
      "div",
      `position:absolute;bottom:10px;right:10px;display:flex;gap:4px;padding:4px;border-radius:6px;z-index:10;background:${E.switcherBg};box-shadow:0 2px 8px rgba(0,0,0,0.25);`
    );
    k.appendChild(
      gn(Cc, u, (m) => {
        u = m, f && (f.setStyle({}, Io[m]), f.render());
      })
    );
    const c = N("button", `${Te}margin-left:4px;`, "Spin");
    c.title = "Toggle continuous rotation", c.onclick = () => {
      v = !v, c.style.background = v ? E.btnBgActive : E.btnBg;
      try {
        f?.spin(v ? "y" : !1);
      } catch {
      }
    }, k.appendChild(c);
    const d = _n(() => p?.reset());
    return d.style.marginLeft = "4px", k.appendChild(d), g.appendChild(k), b.container.appendChild(ae("Loading 3D viewer...")), rr().then(() => {
      b.container.replaceChildren(), f = Ve.createViewer(b.container, { backgroundColor: E.viewerBg }), f.addModel(ct(o), "sdf"), f.setStyle({}, Io[u]), f.zoomTo(), f.render(), p = ir(b.container, f);
    }).catch((m) => {
      b.container.replaceChildren(ae(`3D render failed: ${me(m)}`, !0));
    }), {
      onResize() {
        f && (f.resize(), f.render());
      },
      cleanup() {
        if (p?.cleanup(), p = null, !!f) {
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
Ce("gufe-small-molecule", kc);
const pi = ["HOH", "WAT", "SOL", "TIP3"], qo = { hetflag: !1 }, xc = { hetflag: !0 }, Ec = { resn: pi }, Oe = {
  stick: { radius: 0.15 },
  sphere: { scale: 0.3 },
  hetero: { stickRadius: 0.2, sphereScale: 0.28 },
  water: { stickRadius: 0.05, sphereScale: 0.18 },
  surfaceOpacity: 0.85,
  /** Above this many atoms a surface is slow enough to be worth warning about. */
  surfaceAtomWarn: 4e4
};
function Pc(e) {
  const t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
  let o = 0, a = 0, r = 0, i = 1 / 0, s = -1 / 0;
  for (const l of e.split(/\r?\n/)) {
    const g = l.slice(0, 6);
    if (g === "ENDMDL") break;
    if (g !== "ATOM  " && g !== "HETATM") continue;
    o++, g === "HETATM" && a++;
    const h = l.slice(17, 20).trim(), _ = l.slice(21, 22).trim() || "_", b = l.slice(22, 26).trim(), y = l.slice(26, 27).trim();
    pi.indexOf(h) !== -1 && r++, t.add(_), n.add(`${_}|${b}${y}|${h}`);
    const w = parseInt(b, 10);
    isNaN(w) || (w < i && (i = w), w > s && (s = w));
  }
  return {
    chains: t.size,
    residues: n.size,
    atoms: o,
    hetatms: a,
    waters: r,
    heteroNonWater: a - r,
    resiMin: i === 1 / 0 ? 0 : i,
    resiMax: s === -1 / 0 ? 0 : s
  };
}
function Rc(e) {
  return `${tt(e.chains)} chains · ${tt(e.residues)} residues · ${tt(e.atoms)} atoms · ${tt(e.hetatms)} HETATM` + (e.waters > 0 ? ` (${tt(e.waters)} water)` : "");
}
function Ac(e, t) {
  return e === "chain" ? { colorscheme: "chain" } : e === "ss" ? { colorscheme: "ssJmol" } : e === "spectrum" && t && t.resiMax > t.resiMin ? { colorscheme: { prop: "resi", gradient: "roygb", min: t.resiMin, max: t.resiMax } } : { colorscheme: "Jmol" };
}
function Bo(e, t, n, o) {
  const a = o || (() => {
  }), r = Ac(t.color, n);
  try {
    e.removeAllSurfaces();
  } catch {
  }
  if (e.setStyle({}, {}), e.setStyle(
    qo,
    t.rep === "stick" ? { stick: { radius: Oe.stick.radius, ...r } } : t.rep === "sphere" ? { sphere: { scale: Oe.sphere.scale, ...r } } : (
      // For 'surface' the shell is added separately; leave the atoms bare so
      // it is not cluttered from the inside.
      t.rep === "surface" ? {} : { cartoon: { ...r } }
    )
  ), e.setStyle(
    xc,
    t.hetero ? {
      stick: { radius: Oe.hetero.stickRadius, colorscheme: "Jmol" },
      sphere: { scale: Oe.hetero.sphereScale, colorscheme: "Jmol" }
    } : {}
  ), e.setStyle(
    Ec,
    t.waters ? {
      stick: { radius: Oe.water.stickRadius, colorscheme: "Jmol" },
      sphere: { scale: Oe.water.sphereScale, colorscheme: "Jmol" }
    } : {}
  ), t.rep !== "surface") {
    a(null), e.render();
    return;
  }
  a(
    n && n.atoms > Oe.surfaceAtomWarn ? "Computing surface (large structure, this may take a while)..." : "Computing surface..."
  ), e.render(), setTimeout(() => {
    try {
      Promise.resolve(
        e.addSurface(Ve.SurfaceType.VDW, { opacity: Oe.surfaceOpacity, ...r }, qo)
      ).then(() => {
        a(null), e.render();
      }).catch((i) => a(`Surface failed: ${me(i)}`, "error"));
    } catch (i) {
      a(`Surface failed: ${me(i)}`, "error");
    }
  }, 30);
}
const Fc = [
  { id: "cartoon", label: "Cartoon", title: "Ribbon / cartoon backbone" },
  { id: "surface", label: "Surface", title: "Molecular (VDW) surface" },
  { id: "stick", label: "Stick", title: "All-atom sticks" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" }
], Nc = [
  { id: "chain", label: "Chain" },
  { id: "spectrum", label: "Spectrum" },
  { id: "ss", label: "Secondary structure" },
  { id: "element", label: "Element" }
], Mc = {
  ProteinComponentViz: "ProteinComponent",
  SolvatedPDBComponentViz: "SolvatedPDBComponent",
  ProteinMembraneComponentViz: "ProteinMembraneComponent"
};
class jc extends Se {
  placeholder() {
    return "Waiting for a ProteinComponent payload...";
  }
  renderView(t, n) {
    const o = n.pdb, a = n.name ?? "", r = Mc[n.type] ?? "ProteinComponent", s = { rep: "cartoon", color: "chain", waters: n.type !== "ProteinComponentViz", hetero: !0 };
    let l = null, g = null, h = null;
    const _ = N(
      "div",
      `display:flex;align-items:center;gap:14px;flex-wrap:wrap;padding:8px 14px;flex-shrink:0;font-size:12px;background:${E.toolbarBg};border-bottom:1px solid ${E.toolbarBorder};color:${E.textPrimary};`
    );
    t.appendChild(_), _.appendChild(
      N("span", `font-weight:700;font-size:14px;letter-spacing:.02em;color:${E.titleColor};`, a || "Protein")
    ), _.appendChild(N("span", `font-size:11px;color:${E.textMuted2};`, r));
    const b = (c) => N("span", `font-size:11px;color:${E.textMuted};`, c);
    _.appendChild(b("Style:")), _.appendChild(
      gn(Fc, s.rep, (c) => {
        s.rep = c, k();
      })
    ), _.appendChild(b("Color:"));
    const y = N("select", un);
    for (const c of Nc) {
      const d = N("option", "", c.label);
      d.value = c.id, y.appendChild(d);
    }
    y.value = s.color, y.addEventListener("change", () => {
      s.color = y.value, k();
    }), _.appendChild(y);
    const w = N("div", "display:flex;gap:4px;");
    _.appendChild(w);
    const S = [
      ["waters", "Waters", "Show water molecules", () => k()],
      ["hetero", "Hetero", "Show hetero atoms / ligands / ions / lipids", () => k()],
      ["spin", "Spin", "Rotate the view continuously", () => l?.spin(s.spin ? "y" : !1)]
    ];
    for (const [c, d, m, x] of S) {
      const P = N("button", Te, d);
      P.title = m, P.style.background = s[c] ? E.btnBgActive : E.btnBg, P.onclick = () => {
        s[c] = !s[c], P.style.background = s[c] ? E.btnBgActive : E.btnBg, x();
      }, w.appendChild(P);
    }
    w.appendChild(_n(() => g?.reset()));
    const f = N("span", `margin-left:auto;font-size:11px;white-space:nowrap;color:${E.textMuted2};`);
    _.appendChild(f);
    const p = Kn();
    t.appendChild(p.wrap);
    const u = N(
      "div",
      "position:absolute;top:12px;left:50%;transform:translateX(-50%);padding:6px 14px;border-radius:6px;font-size:12px;z-index:20;display:none;pointer-events:none;"
    );
    p.wrap.appendChild(u);
    const v = (c, d) => {
      if (c == null) {
        u.style.display = "none";
        return;
      }
      u.textContent = c, u.style.display = "block";
      const m = d === "error";
      u.style.background = m ? E.warnBg : E.toolbarBg, u.style.color = m ? E.warnFg : E.textMuted, u.style.border = `1px solid ${m ? E.warnBorder : E.toolbarBorder}`;
    };
    function k() {
      l && Bo(l, s, h, v);
    }
    if (!o || !o.trim())
      return v("No protein data - waiting for a PDB payload."), {};
    try {
      h = Pc(o), f.textContent = Rc(h);
    } catch (c) {
      v(`⚠ PDB parse error: ${me(c)}`, "error");
    }
    return v("Loading 3D viewer..."), rr().then(() => {
      l = Ve.createViewer(p.container, { backgroundColor: E.viewerBg }), l.addModel(o, "pdb"), Bo(l, s, h, v), l.zoomTo(), l.spin(s.spin ? "y" : !1), l.render(), g = ir(p.container, l);
    }).catch((c) => {
      v(`⚠ Failed to render structure: ${me(c)}`, "error");
    }), {
      onResize() {
        l && (l.resize(), l.render());
      },
      cleanup() {
        if (g?.cleanup(), g = null, !!l) {
          try {
            l.spin(!1);
          } catch {
          }
          try {
            l.clear();
          } catch {
          }
          l = null;
        }
      }
    };
  }
}
Ce("gufe-protein", jc);
const hi = "http://www.w3.org/2000/svg";
function oe(e, t = {}) {
  const n = document.createElementNS(hi, e);
  for (const [o, a] of Object.entries(t)) n.setAttribute(o, String(a));
  return n;
}
function mn(e, t) {
  const n = document.createElementNS(hi, "title");
  return n.textContent = t, e.appendChild(n), e;
}
function ut(e) {
  const t = /* @__PURE__ */ new Map();
  return Ln(e, t, /* @__PURE__ */ new Set()), t;
}
function Ln(e, t, n) {
  if (e == null || typeof e != "object" || n.has(e)) return;
  if (n.add(e), Array.isArray(e)) {
    for (const a of e) Ln(a, t, n);
    return;
  }
  const o = e.registry;
  if (Array.isArray(o))
    for (const a of o) {
      const r = a["gufe-key"];
      typeof r == "string" && r && !t.has(r) && t.set(r, a);
    }
  for (const a of Object.values(e)) Ln(a, t, n);
}
function Le(e, t) {
  return t ? e.get(t) : void 0;
}
function Pe(e, t, n) {
  const o = Le(e, t);
  return o?.type === n ? o : void 0;
}
function Qe(e) {
  return e.name ? e.name : (e["gufe-key"].split("-").pop() ?? e["gufe-key"]).slice(0, 6);
}
function Oc(e, t) {
  if (t <= 0) return it[0];
  const n = t === 1 ? 0 : e / (t - 1), o = it.length, a = Math.max(0, Math.min(o - 1, n * (o - 1))), r = Math.floor(a), i = Math.min(o - 1, r + 1), s = a - r;
  if (s === 0) return it[r];
  const l = (b) => {
    const y = parseInt(b.replace("#", ""), 16);
    return [y >> 16 & 255, y >> 8 & 255, y & 255];
  }, g = l(it[r]), h = l(it[i]);
  return `#${g.map((b, y) => Math.round(b + (h[y] - b) * s)).map((b) => b.toString(16).padStart(2, "0")).join("")}`;
}
function Tc(e, t) {
  let n = 0;
  for (const a of [e, t]) {
    let r = 1 / 0, i = -1 / 0;
    for (const s of a)
      s[0] < r && (r = s[0]), s[0] > i && (i = s[0]);
    a.length && (n = Math.max(n, i - r));
  }
  const o = Math.round(n * 10) / 10;
  return o > 5 ? o : 5;
}
const zc = 1.5;
function Ic(e, t, n, o) {
  const a = [...e.entries()], r = [];
  return a.forEach(([i, s], l) => {
    const g = t[i], h = n[s];
    !g || !h || r.push({
      a: [g[0] - o, g[1], g[2]],
      b: [h[0] + o, h[1], h[2]],
      color: Oc(l, a.length),
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
  for (let a = 0; a < o; a++) {
    const r = 4 + a, i = n[r];
    if (!i || i.length < 30) continue;
    const s = Number(i.slice(0, 10));
    Number.isFinite(s) && (n[r] = (s + t).toFixed(4).padStart(10) + i.slice(10));
  }
  return n.join(`
`);
}
const Lo = 420, Uo = { radius: 0.6, alpha: 0.8 }, zn = { radius: 0.05, dashed: !0, opacity: 0.75 }, Dc = [
  { id: "changes", label: "Changes", title: "Highlight what differs, as gufe draws it" },
  { id: "mapped", label: "Mapped", title: "Highlight the atoms that carry over instead" }
];
function mi(e) {
  const t = parseInt(e.replace("#", ""), 16);
  return [(t >> 16 & 255) / 255, (t >> 8 & 255) / 255, (t & 255) / 255];
}
const qc = mi(qe.elementChange), Bc = mi(qe.uniqueAtom);
function Ko(e, t, n) {
  const o = [], a = [], r = [];
  for (let i = 0; i < t.length; i++) {
    const s = e.get(i);
    s === void 0 ? o.push(i) : t[i] !== n[s] ? a.push(i) : r.push(i);
  }
  return { atoms: o, elements: a, mapped: r };
}
function Vc(e, t) {
  if (t === "mapped")
    return { atoms: [...e.mapped, ...e.elements], colors: {} };
  const n = {};
  for (const o of e.elements) n[o] = qc;
  for (const o of e.atoms) n[o] = Bc;
  return { atoms: [...e.elements, ...e.atoms], colors: n };
}
function Lc(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e.componentA_to_componentB ?? [])
    Number.isInteger(n?.index_A) && Number.isInteger(n?.index_B) && t.set(n.index_A, n.index_B);
  return t;
}
function gi(e, t) {
  const n = Pe(t, e.componentA, "SmallMoleculeComponentViz"), o = Pe(t, e.componentB, "SmallMoleculeComponentViz");
  return !n || !o ? null : { ...e, registry: n["gufe-key"] === o["gufe-key"] ? [n] : [n, o] };
}
class Uc extends Se {
  placeholder() {
    return "Waiting for a LigandAtomMapping payload...";
  }
  renderView(t, n) {
    const o = ut(n), a = Pe(o, n.componentA, "SmallMoleculeComponentViz"), r = Pe(o, n.componentB, "SmallMoleculeComponentViz"), i = Me(n.name || "Atom mapping", "LigandAtomMapping");
    if (t.appendChild(i), !a || !r)
      return t.appendChild(
        ae("This mapping names two molecules, and its registry does not hold them.")
      ), {};
    const s = Qe(a), l = Qe(r), g = Lc(n);
    let h, _;
    try {
      h = cn(a.sdf, s).symbols, _ = cn(r.sdf, l).symbols;
    } catch (C) {
      return t.appendChild(ae(`Could not read a molecule: ${me(C)}`, !0)), {};
    }
    const b = /* @__PURE__ */ new Map();
    for (const [C, T] of g) b.set(T, C);
    const y = Ko(g, h, _), w = Ko(b, _, h);
    let S = "changes";
    i.statsEl.appendChild(ce("mapped atoms", String(g.size))), i.statsEl.appendChild(
      ce("element changes", String(y.elements.length), qe.elementChange)
    ), i.statsEl.appendChild(
      ce(`unique to ${s}`, String(y.atoms.length), qe.uniqueAtom)
    ), i.statsEl.appendChild(
      ce(`unique to ${l}`, String(w.atoms.length), qe.uniqueAtom)
    ), i.statsEl.appendChild(ce("score", n.score == null ? Ze : n.score.toFixed(3)));
    const f = N(
      "div",
      `display:flex;align-items:center;gap:12px;flex-wrap:wrap;padding:7px 14px;flex-shrink:0;font-size:12px;background:${E.toolbarBg};border-bottom:1px solid ${E.toolbarBorder};color:${E.textMuted};`
    );
    f.appendChild(N("span", `font-size:11px;color:${E.textMuted};`, "Highlight:")), f.appendChild(
      gn(Dc, S, (C) => {
        S = C, $();
      })
    );
    const p = N("div", "display:flex;align-items:center;gap:12px;margin-left:auto;font-size:11px;");
    p.appendChild(ce("element change", "", qe.elementChange)), p.appendChild(ce("unique atom", "", qe.uniqueAtom)), f.appendChild(p), t.appendChild(f);
    const u = N("div", "flex:1;min-height:0;display:flex;flex-direction:column;");
    t.appendChild(u);
    const v = N("div", "flex:1 1 55%;min-height:0;display:flex;flex-direction:row;");
    u.appendChild(v);
    const k = (C) => {
      const T = N("div", "flex:1 1 50%;min-width:0;display:flex;flex-direction:column;");
      T.appendChild(
        N(
          "div",
          `flex-shrink:0;padding:4px 10px;font-size:12px;font-weight:bold;color:${E.labelFg};background:${E.labelBg};`,
          C
        )
      );
      const K = N(
        "div",
        `flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:8px;background:${E.canvas2DBg};`
      );
      return T.appendChild(K), v.appendChild(T), K;
    }, c = (C) => N(
      "div",
      `flex-shrink:0;padding:4px 10px;font-size:12px;font-weight:bold;color:${E.labelFg};background:${E.labelBg};`,
      C
    ), d = k(s);
    v.appendChild(N("div", `width:1px;flex-shrink:0;background:${E.splitBorder};`));
    const m = k(l), x = N("div", "flex:1 1 45%;min-height:180px;display:flex;flex-direction:column;position:relative;");
    u.appendChild(N("div", `height:1px;flex-shrink:0;background:${E.splitBorder};`)), u.appendChild(x), x.appendChild(c("3D overlay"));
    const P = Kn();
    x.appendChild(P.wrap);
    const O = cn(a.sdf, s).coords, I = cn(r.sdf, l).coords, R = Tc(O, I) * zc, z = Ic(g, O, I, R);
    let L = null, Y = null, H = !0;
    const X = () => {
      if (L) {
        L.removeAllShapes();
        for (const C of z) {
          for (const T of [C.a, C.b])
            L.addSphere({
              center: { x: T[0], y: T[1], z: T[2] },
              radius: Uo.radius,
              color: C.color,
              alpha: Uo.alpha
            });
          H && L.addCylinder({
            start: { x: C.a[0], y: C.a[1], z: C.a[2] },
            end: { x: C.b[0], y: C.b[1], z: C.b[2] },
            radius: zn.radius,
            color: C.color,
            dashed: zn.dashed,
            opacity: zn.opacity
          });
        }
        L.render();
      }
    }, W = N(
      "div",
      `position:absolute;bottom:10px;right:10px;display:flex;gap:4px;padding:4px;border-radius:6px;z-index:10;background:${E.switcherBg};box-shadow:0 2px 8px rgba(0,0,0,0.25);`
    ), se = N("button", Te, "Lines");
    se.title = "Draw a line between each mapped pair", se.style.background = E.btnBgActive, se.onclick = () => {
      H = !H, se.style.background = H ? E.btnBgActive : E.btnBg, X();
    }, W.appendChild(se), W.appendChild(_n(() => Y?.reset())), x.appendChild(W), P.container.appendChild(ae("Loading 3D viewer...")), rr().then(() => {
      P.container.replaceChildren(), L = Ve.createViewer(P.container, { backgroundColor: E.viewerBg }), L.addModel(ct(Vo(a.sdf, -R)), "sdf"), L.addModel(ct(Vo(r.sdf, R)), "sdf"), L.addModel(ct(a.sdf), "sdf"), L.addModel(ct(r.sdf), "sdf"), L.setStyle({}, { stick: { radius: 0.12, colorscheme: "Jmol" } }), X(), L.zoomTo(), L.render(), Y = ir(P.container, L);
    }).catch((C) => {
      P.container.replaceChildren(ae(`3D render failed: ${me(C)}`, !0));
    });
    const V = N(
      "div",
      `flex-shrink:0;max-height:96px;overflow:auto;padding:8px 14px;font-size:11px;line-height:1.6;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;color:${E.textMuted};background:${E.panelBg};border-top:1px solid ${E.toolbarBorder};`
    );
    V.textContent = g.size ? Array.from(g, ([C, T]) => `${C} -> ${T}`).join("   ") : "This mapping relates no atoms at all.", t.appendChild(V);
    const F = Object.entries(n.annotations ?? {}).filter(([C]) => C !== "score");
    if (F.length) {
      const C = N(
        "div",
        `flex-shrink:0;padding:6px 14px;font-size:11px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;color:${E.textMuted2};background:${E.panelBg};border-top:1px solid ${E.toolbarBorder};`
      );
      C.textContent = F.map(([T, K]) => `${T}: ${String(K)}`).join("    "), t.appendChild(C);
    }
    let q = null;
    const j = (C, T, K) => {
      if (!q) return;
      const { atoms: G, colors: re } = Vc(K, S), te = Sc(q, T, Lo, G, re);
      C.replaceChildren(), te ? fi(C, te, Lo) : C.appendChild(ae("Failed to parse molecule", !0));
    }, $ = () => {
      j(d, a.sdf, y), j(m, r.sdf, w);
    };
    return d.appendChild(ae("Loading 2D depiction...")), m.appendChild(ae("Loading 2D depiction...")), or().then((C) => {
      q = C, $();
    }).catch((C) => {
      const T = `RDKit failed to load: ${me(C)}`;
      d.replaceChildren(ae(T, !0)), m.replaceChildren(ae(T, !0));
    }), {
      onResize() {
        L && (L.resize(), L.render());
      },
      cleanup() {
        if (Y?.cleanup(), Y = null, !!L) {
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
Ce("gufe-atom-mapping", Uc);
const Kc = ["Force-directed", "Circular", "Radial"], lt = 38, ln = 200, Gc = 4, Hc = 14, Jc = 18, Go = 1.5, Wc = 6.5, Yc = 0.9, Xc = 14, In = { size: 8, clearance: 8 }, Dn = { fontSize: 10, padding: 3, backgroundOpacity: 0.92 }, Zc = { padding: 4 }, Ho = { captions: 0.5, depictions: 1.1 }, dn = 200, qn = { node: 0.12, edge: 0.06 }, Qc = 1.2, ve = {
  linkBaseDistance: 18,
  linkScoreBonus: 10,
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
function el(e) {
  const t = N(
    "div",
    `position:absolute;z-index:30;pointer-events:none;opacity:0;transition:opacity .12s ease;padding:7px 10px;border-radius:6px;font-size:11px;line-height:1.5;max-width:260px;background:${E.tooltipBg};border:1px solid ${E.tooltipBorder};color:${E.textPrimary};box-shadow:0 4px 14px rgba(0,0,0,0.28);`
  );
  return e.appendChild(t), {
    show(n, o, a) {
      t.innerHTML = n, t.style.left = `${o + 14}px`, t.style.top = `${a - 10}px`, t.style.opacity = "1";
    },
    hide() {
      t.style.opacity = "0";
    },
    remove() {
      t.remove();
    }
  };
}
function tl(e) {
  const t = /* @__PURE__ */ new Map();
  return (n) => {
    const o = t.get(n);
    if (o) return o;
    const a = `arrow-${n.replace(/[^a-zA-Z0-9]/g, "")}`;
    t.set(n, a);
    const r = oe("marker", {
      id: a,
      viewBox: "0 -5 10 10",
      // Pushes the head back along the line so it stops at the node's edge
      // rather than under it.
      refX: lt + In.clearance,
      refY: 0,
      markerUnits: "userSpaceOnUse",
      markerWidth: In.size,
      markerHeight: In.size,
      orient: "auto"
    });
    return r.appendChild(oe("path", { d: "M0,-5L10,0L0,5", fill: n })), e.appendChild(r), a;
  };
}
function nl(e) {
  const t = parseInt(e.replace("#", ""), 16);
  return [t >> 16 & 255, t >> 8 & 255, t & 255];
}
function rl(e) {
  const [t, n] = E.netEdgeRamp.map(nl), o = Math.max(0, Math.min(1, e ?? 0.5));
  return `rgb(${t.map((r, i) => Math.round(r + (n[i] - r) * o)).join(",")})`;
}
const $e = Qe, ol = (e, t) => e.length > t ? `${e.slice(0, t - 1)}...` : e;
function il(e) {
  const t = /* @__PURE__ */ new Set();
  let n = /* @__PURE__ */ new Set();
  const o = (r, i) => {
    if (t.has(i) || n.has(i)) return;
    const s = e.nodes[i], l = s.sdf && ui(r, s.sdf, ln);
    if (!l) {
      n.add(i);
      return;
    }
    const g = new DOMParser().parseFromString(l, "image/svg+xml").documentElement;
    if (!g || g.nodeName.toLowerCase() === "parsererror") {
      n.add(i);
      return;
    }
    const h = (lt - Gc) * 2 / ln, _ = e.depictionGroups[i];
    _.setAttribute(
      "transform",
      `translate(${-h * ln / 2},${-h * ln / 2}) scale(${h})`
    );
    let b = 0;
    for (const y of Array.from(g.childNodes)) {
      if (y.nodeType !== 1) continue;
      const w = y.nodeName.toLowerCase();
      if (!(w === "defs" || w === "metadata" || w === "title")) {
        if (w === "rect") {
          const S = (y.getAttribute("fill") ?? "").toLowerCase();
          if (S === "#ffffff" || S === "white" || S === "rgb(255,255,255)") continue;
        }
        _.appendChild(document.importNode(y, !0)), b++;
      }
    }
    b ? t.add(i) : n.add(i);
  };
  return { apply: (r, i, s) => {
    const l = r >= Ho.captions;
    for (const y of e.captions)
      y.setAttribute("display", l ? "inline" : "none");
    const g = r >= Ho.depictions;
    for (let y = 0; y < e.nodes.length; y++) {
      const w = g && t.has(y);
      e.depictionGroups[y].setAttribute("display", w ? "inline" : "none"), e.initials[y].setAttribute("display", w ? "none" : "inline");
    }
    if (!g) return;
    const { width: h, height: _ } = e.viewport(), b = [];
    e.nodes.forEach((y, w) => {
      if (t.has(w) || n.has(w)) return;
      const S = y.x * r + i, f = y.y * r + s;
      S < -dn || f < -dn || S > h + dn || f > _ + dn || b.push(w);
    }), b.length && e.rdkit().then((y) => {
      if (y)
        for (const w of b) {
          o(y, w);
          const S = t.has(w);
          e.depictionGroups[w].setAttribute("display", S ? "inline" : "none"), e.initials[w].setAttribute("display", S ? "none" : "inline");
        }
    }).catch(() => {
    });
  }, drawn: () => t.size };
}
function sl(e, t, n, o, a) {
  const r = (i) => a === "keys" ? i["gufe-key"] : $e(i);
  return o === "ligands" ? e.filter((i) => n.has(i["gufe-key"])).map(r).join(", ") : t.filter((i) => n.has(i.from["gufe-key"]) && n.has(i.to["gufe-key"])).map((i) => `${r(i.from)}, ${r(i.to)}`).join(`
`);
}
function al(e, t) {
  navigator.clipboard?.writeText(e).catch(() => Jo(e, t)), navigator.clipboard || Jo(e, t);
}
function Jo(e, t) {
  const n = N("textarea", "width:100%;height:80px;font-size:11px;box-sizing:border-box;");
  n.value = e, n.readOnly = !0, t.appendChild(n), n.select();
}
function cl(e, t) {
  const n = URL.createObjectURL(new Blob([e], { type: "text/plain" })), o = N("a", "display:none;");
  o.href = n, o.download = t, document.body.appendChild(o), o.click(), o.remove(), URL.revokeObjectURL(n);
}
function ll(e) {
  const t = N(
    "div",
    `display:flex;flex-direction:column;gap:8px;width:236px;padding:10px;min-height:0;background:${E.panelBg};border-right:1px solid ${E.splitBorder};`
  ), n = N("input", `${un}width:100%;box-sizing:border-box;`);
  n.type = "search", n.placeholder = "Search ligands", n.setAttribute("aria-label", "Search ligands by name, SMILES or gufe key"), t.appendChild(n);
  const o = N("div", `display:flex;align-items:center;gap:8px;font-size:11px;color:${E.textMuted};`), a = N("span", `min-width:28px;color:${E.textPrimary};`, "0.00"), r = N("input", "flex:1;");
  r.type = "range", r.min = "0", r.max = "1", r.step = "0.01", r.value = "0", r.setAttribute("aria-label", "Hide mappings scoring below this"), o.appendChild(N("span", "", "score >=")), o.appendChild(r), o.appendChild(a), t.appendChild(o);
  const i = N("div", `font-size:11px;color:${E.textMuted2};`);
  t.appendChild(i);
  const s = N("div", "flex:1;min-height:0;overflow:auto;display:flex;flex-direction:column;gap:3px;");
  t.appendChild(s);
  const l = N("div", "display:flex;flex-direction:column;gap:6px;"), g = N("div", `display:flex;align-items:center;gap:6px;font-size:11px;color:${E.textMuted};`);
  g.appendChild(N("span", "", "copy as"));
  const h = N("select", `${un}flex:1;`);
  for (const [f, p] of [
    ["names", "names"],
    ["keys", "gufe keys"]
  ]) {
    const u = N("option", "", p);
    u.value = f, h.appendChild(u);
  }
  g.appendChild(h), l.appendChild(g);
  const _ = N("div", "display:flex;gap:4px;"), b = [
    ["Ligands", "ligands", "Copy the selected ligand names, comma separated"],
    ["Edges", "edges", "Copy the selected edges, one pair per line"]
  ];
  for (const [f, p, u] of b) {
    const v = N("button", `${Te}flex:1;`, f);
    v.title = u, v.onclick = (k) => {
      const c = h.value, d = sl(e.nodes, e.edges, e.selected, p, c);
      d && (k.shiftKey ? cl(d, `selected-${p}.txt`) : al(d, l));
    }, _.appendChild(v);
  }
  l.appendChild(_), l.appendChild(
    N("div", `font-size:10px;color:${E.textMuted2};`, "Shift-click to save as a file instead.")
  ), t.appendChild(l);
  const y = N("button", `${Te}width:100%;`, "Clear selection");
  y.onclick = () => {
    e.selected.clear(), S(), e.refresh();
  }, t.appendChild(y);
  const w = (f) => {
    const p = e.query.text.trim().toLowerCase();
    return p ? $e(f).toLowerCase().includes(p) || (f.smiles ?? "").toLowerCase().includes(p) || f["gufe-key"].toLowerCase().includes(p) : !0;
  }, S = () => {
    s.replaceChildren();
    const f = e.nodes.map((p, u) => ({ node: p, index: u })).filter(({ node: p }) => w(p));
    i.textContent = `${f.length} of ${e.nodes.length} ligands`;
    for (const { node: p, index: u } of f) {
      const v = p["gufe-key"], k = N(
        "button",
        `display:flex;align-items:center;gap:6px;padding:5px 8px;border-radius:6px;text-align:left;font-family:inherit;font-size:11px;cursor:pointer;width:100%;min-width:0;border:1px solid ${e.selected.has(v) ? E.cardBorderActive : E.cardBorder};background:${e.selected.has(v) ? E.cardBgActive : E.cardBg};color:${E.textPrimary};`
      ), c = N("span", "flex:1;min-width:0;overflow-wrap:anywhere;", $e(p));
      c.title = `${$e(p)}
${p.smiles ?? ""}`, k.appendChild(c), k.onclick = (d) => {
        d.shiftKey || d.metaKey || d.ctrlKey ? e.selected.has(v) ? e.selected.delete(v) : e.selected.add(v) : (e.selected.clear(), e.selected.add(v), e.focus(u)), S(), e.refresh();
      }, s.appendChild(k);
    }
    f.length || s.appendChild(N("div", `font-size:11px;padding:8px;color:${E.textMuted2};`, "Nothing matches."));
  };
  return n.oninput = () => {
    e.query.text = n.value, S(), e.refresh();
  }, r.oninput = () => {
    e.filter.minScore = Number(r.value), a.textContent = e.filter.minScore.toFixed(2), e.refresh();
  }, S(), t;
}
class dl extends Se {
  placeholder() {
    return "Waiting for a LigandNetwork payload...";
  }
  renderView(t, n) {
    const o = ut(n), a = [];
    let r = 0;
    for (const X of n.nodes ?? []) {
      const W = Pe(o, X, "SmallMoleculeComponentViz");
      if (!W) {
        r++;
        continue;
      }
      a.push({ ...W, x: 0, y: 0 });
    }
    const i = new Map(a.map((X) => [X["gufe-key"], X])), s = [];
    let l = 0;
    for (const X of n.edges ?? []) {
      const W = i.get(X.componentA), se = i.get(X.componentB);
      if (!W || !se) {
        l++;
        continue;
      }
      s.push({ ...X, index: s.length, from: W, to: se });
    }
    const g = Me(n.name || "Ligand network", "LigandNetwork");
    g.statsEl.appendChild(ce("ligands", String(a.length))), g.statsEl.appendChild(ce("mappings", String(s.length))), t.appendChild(g);
    const h = N("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    t.appendChild(h);
    const _ = /* @__PURE__ */ new Set(), b = { minScore: 0 }, y = { text: "" };
    let w = () => {
    };
    const S = wi(
      g,
      () => ll({
        nodes: a,
        edges: s,
        selected: _,
        filter: b,
        query: y,
        refresh: () => w(),
        focus: (X) => m(X)
      }),
      { label: "Search, filter and select ligands", onToggle: () => H() }
    );
    h.appendChild(S.panel);
    const f = N("div", `flex:1 1 58%;min-width:0;display:flex;flex-direction:column;background:${E.netCanvasBg};`), p = N("div", `flex:1 1 42%;min-width:0;display:flex;flex-direction:column;background:${E.appBg};`);
    h.appendChild(f), h.appendChild(N("div", `width:1px;flex-shrink:0;background:${E.splitBorder};`)), h.appendChild(p);
    const u = N("div", `flex:1;position:relative;overflow:hidden;min-height:0;background:${E.netCanvasBg};`);
    f.appendChild(u);
    const v = this.#t(
      (X) => H(X),
      () => L()
    );
    f.appendChild(v.bar);
    const k = this.#e(p, o);
    if (!a.length)
      return u.appendChild(
        ae(
          r ? "None of this network's ligands are in its registry." : "This network has no ligands."
        )
      ), k.message("Nothing to show."), {};
    r && Be(
      u,
      `${r} ligand${r === 1 ? "" : "s"} named by this network are not in its registry`
    ), l && Be(u, `${l} mapping${l === 1 ? "" : "s"} name a ligand this network does not contain`);
    const c = or().catch((X) => (console.warn("[gufe-viz] RDKit failed to load:", me(X)), null)), d = el(u);
    let m = () => {
    }, x = s.length ? 0 : -1, P = null, O = "Force-directed", I = !1, R = !0, z = () => {
    }, L = () => {
    };
    const Y = (X) => {
      x = X, k.show(s[X] ?? null), z();
    }, H = (X = O) => {
      O = X, P?.(), P = null, u.querySelector("svg")?.remove();
      const W = u.clientWidth || 800, se = u.clientHeight || 600;
      ul(a, W, se, O, s);
      const V = () => {
        if (!R) return;
        const F = this.#r(u, a, s, W, se, Y, c, d);
        z = () => F.setSelected(x), L = F.reset, P = F.cleanup, m = (q) => F.focusOn(q), w = () => {
          const q = y.text.trim().toLowerCase(), j = _.size > 0 || q.length > 0, $ = /* @__PURE__ */ new Set();
          for (const K of a) {
            const G = K["gufe-key"], re = _.has(G) || q.length > 0 && ($e(K).toLowerCase().includes(q) || (K.smiles ?? "").toLowerCase().includes(q) || G.toLowerCase().includes(q));
            (!j || re) && $.add(G);
          }
          const C = /* @__PURE__ */ new Set();
          s.forEach((K, G) => {
            (K.score ?? 0) < b.minScore || !$.has(K.from["gufe-key"]) || !$.has(K.to["gufe-key"]) || C.add(G);
          });
          const T = j || b.minScore > 0;
          F.setEmphasis(T ? $ : null, T ? C : null);
        }, z(), w(), F.setDetail(1, 0, 0);
      };
      if (O !== "Force-directed" || I) {
        V();
        return;
      }
      fl(a, s, W, se).then((F) => {
        if (R) {
          if (F) {
            V();
            return;
          }
          I = !0, v.picker.value = "Circular", Be(u, "d3 could not be loaded - showing the circular layout instead"), H("Circular");
        }
      }, V);
    };
    return H(), k.show(s[x] ?? null), {
      onResize: () => H(),
      cleanup: () => {
        R = !1, d.remove(), P?.();
      }
    };
  }
  #t(t, n) {
    const o = N(
      "div",
      `display:flex;align-items:center;gap:10px;flex-wrap:wrap;padding:8px 14px;flex-shrink:0;background:${E.toolbarBg};border-top:1px solid ${E.toolbarBorder};`
    ), a = N("div", `display:flex;align-items:center;gap:6px;font-size:11px;color:${E.textMuted};`);
    a.appendChild(N("span", "", "score")), a.appendChild(
      N(
        "span",
        `width:40px;height:4px;border-radius:2px;background:linear-gradient(to right,${E.netEdgeRamp.join(",")});`
      )
    ), a.appendChild(N("span", "", "0 -> 1")), o.appendChild(a), o.appendChild(N("label", `font-size:12px;margin-left:auto;color:${E.textMuted};`, "Layout"));
    const r = N("select", un);
    for (const i of Kc) {
      const s = N("option", "", i);
      s.value = i, r.appendChild(s);
    }
    return r.onchange = () => t(r.value), o.appendChild(r), o.appendChild(_n(n, "Reset pan and zoom")), { bar: o, picker: r };
  }
  /** The right-hand pane: what the selected mapping is, in words and pictures. */
  #e(t, n) {
    const o = N(
      "div",
      `flex-shrink:0;padding:4px 10px;font-size:12px;font-weight:bold;color:${E.labelFg};background:${E.labelBg};`,
      "Selected mapping"
    ), a = N("div", "flex:1;min-height:0;overflow:auto;display:flex;flex-direction:column;");
    t.appendChild(o), t.appendChild(a);
    const r = (s) => a.replaceChildren(ae(s));
    return { show: (s) => {
      if (!s) {
        r("Click an edge to see its mapping.");
        return;
      }
      a.replaceChildren();
      const l = N(
        "div",
        `padding:10px 14px;font-size:13px;font-weight:600;color:${E.textPrimary};border-bottom:1px solid ${E.toolbarBorder};`,
        `${$e(s.from)} -> ${$e(s.to)}`
      );
      a.appendChild(l);
      const g = gi(s, n), h = document.createElement("gufe-atom-mapping");
      h.style.cssText = "flex:1;min-width:0;min-height:220px;display:flex;", h.payload = g, a.appendChild(h);
      const _ = Object.entries(s.annotations ?? {}).filter(([b]) => b !== "score");
      if (_.length) {
        const b = N(
          "div",
          `padding:0 14px 12px;font-size:11px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;color:${E.textMuted2};`
        );
        for (const [y, w] of _)
          b.appendChild(N("div", "", `${y}: ${String(w)}`));
        a.appendChild(b);
      }
    }, message: r };
  }
  /** Build the SVG for the current node positions. Returns the handles the
   * caller needs afterwards: selection, depictions, and teardown. */
  #r(t, n, o, a, r, i, s, l) {
    const g = oe("svg", { width: a, height: r, style: "display:block;touch-action:none;" }), h = oe("g");
    g.appendChild(h), t.appendChild(g);
    const _ = oe("defs"), b = tl(_);
    g.appendChild(_);
    const y = [], w = oe("g"), S = oe("g"), f = oe("g", { "pointer-events": "none" }), p = [], u = [], v = oe("g");
    h.append(w, S, f, v);
    for (const R of o) {
      const z = rl(R.score), L = Go + (R.score ?? 0.5) * (Wc - Go), Y = oe("line", {
        stroke: E.netHaloColor,
        // Sized from the edge underneath, so a thick edge does not outgrow its
        // own halo and a thin one is not swamped by it.
        "stroke-width": L + Zc.padding * 2,
        "stroke-linecap": "round",
        opacity: 0,
        "pointer-events": "none"
      }), H = oe("line", {
        stroke: z,
        "stroke-width": L,
        "stroke-opacity": Yc,
        // A mapping runs from A to B, and the arrow is what says which is which.
        "marker-end": `url(#${b(z)})`,
        "pointer-events": "none"
      }), X = oe("line", { stroke: "transparent", "stroke-width": Xc, style: "cursor:pointer;" });
      X.addEventListener("click", (F) => {
        F.stopPropagation(), i(R.index);
      }), X.addEventListener("mousemove", (F) => {
        l.show(
          `<div style="font-weight:700;color:${E.titleColor};">${Ne($e(R.from))} -&gt; ${Ne($e(R.to))}</div>` + (R.score == null ? `<div style="color:${E.textMuted2};">no score</div>` : `<div style="margin-top:4px;">score <b>${R.score.toFixed(3)}</b></div>`) + `<div style="margin-top:4px;font-size:10px;color:${E.textMuted2};">Click to see the mapping</div>`,
          F.offsetX,
          F.offsetY
        );
      }), X.addEventListener("mouseleave", () => l.hide()), y.push(Y), w.append(Y, H), S.appendChild(X);
      const W = oe("rect", {
        fill: E.netLabelBg,
        opacity: R.score == null ? 0 : Dn.backgroundOpacity,
        rx: 3,
        ry: 3
      }), se = oe("text", {
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        "font-size": Dn.fontSize,
        "font-weight": 600,
        fill: E.netEdgeLabel
      });
      se.textContent = R.score == null ? "" : R.score.toFixed(2);
      const V = oe("g", { class: "gufe-edge-label" });
      V.append(W, se), f.appendChild(V), p.push(W), u.push(se);
    }
    const k = [], c = [], d = [], m = n.map((R) => {
      const z = oe("g", { class: "gufe-node", style: "cursor:grab;" });
      z.addEventListener("mousemove", (X) => {
        l.show(
          `<div style="font-weight:700;color:${E.titleColor};">${Ne($e(R))}</div>` + (R.smiles ? `<div style="margin-top:3px;font-family:ui-monospace,Menlo,monospace;overflow-wrap:anywhere;">${Ne(R.smiles)}</div>` : "") + `<div style="margin-top:3px;font-size:10px;color:${E.textMuted2};overflow-wrap:anywhere;">${Ne(R["gufe-key"])}</div>`,
          X.offsetX,
          X.offsetY
        );
      }), z.addEventListener("mouseleave", () => l.hide()), z.appendChild(
        oe("circle", {
          r: lt,
          fill: E.netNodeFill,
          stroke: E.netNodeStroke,
          "stroke-width": 1.5
        })
      );
      const L = oe("g", { class: "gufe-node-depiction", "pointer-events": "none" });
      z.appendChild(L), k.push(L);
      const Y = oe("text", {
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        "font-size": Jc,
        "font-weight": 700,
        fill: E.netInitials,
        "pointer-events": "none"
      });
      Y.textContent = $e(R).slice(0, 2).toUpperCase(), z.appendChild(Y), c.push(Y);
      const H = oe("text", {
        class: "gufe-node-caption",
        "text-anchor": "middle",
        y: lt + 14,
        "font-size": 11,
        "font-weight": 600,
        fill: E.netNodeLabel,
        "pointer-events": "none"
      });
      return H.textContent = ol($e(R), Hc), H.setAttribute("display", "none"), d.push(H), z.appendChild(H), v.appendChild(z), z;
    }), x = () => {
      u.forEach((R, z) => {
        if (!R.textContent) return;
        let L;
        try {
          L = R.getBBox();
        } catch {
          return;
        }
        const Y = Dn.padding;
        p[z].setAttribute("x", String(L.x - Y)), p[z].setAttribute("y", String(L.y - Y)), p[z].setAttribute("width", String(L.width + Y * 2)), p[z].setAttribute("height", String(L.height + Y * 2));
      });
    }, P = () => {
      o.forEach((R, z) => {
        for (const Y of [y[z], w.children[z * 2 + 1], S.children[z]]) {
          const H = Y;
          H.setAttribute("x1", String(R.from.x)), H.setAttribute("y1", String(R.from.y)), H.setAttribute("x2", String(R.to.x)), H.setAttribute("y2", String(R.to.y));
        }
        f.children[z].setAttribute(
          "transform",
          `translate(${(R.from.x + R.to.x) / 2},${(R.from.y + R.to.y) / 2 - 8})`
        );
      }), n.forEach((R, z) => m[z].setAttribute("transform", `translate(${R.x},${R.y})`));
    };
    P(), x();
    const O = il({
      nodes: n,
      captions: d,
      initials: c,
      depictionGroups: k,
      rdkit: () => s,
      viewport: () => ({ width: a, height: r })
    }), I = this.#n(g, h, n, m, P, O.apply);
    return {
      setSelected(R) {
        y.forEach((z, L) => z.setAttribute("opacity", L === R ? "0.95" : "0"));
      },
      /**
       * Dim what is not emphasised rather than hiding it.
       *
       * Asked for directly: you want to see what is *not* selected too, because
       * a filter that removes the rest answers a different question from one
       * that fades it.
       */
      setEmphasis(R, z) {
        m.forEach((L, Y) => {
          const H = !R || R.has(n[Y]["gufe-key"]);
          L.setAttribute("opacity", H ? "1" : String(qn.node));
        }), o.forEach((L, Y) => {
          const H = !z || z.has(Y), X = H ? "0.9" : String(qn.edge);
          w.children[Y * 2 + 1].setAttribute("stroke-opacity", X), f.children[Y].setAttribute("opacity", H ? "1" : String(qn.edge));
        });
      },
      focusOn(R) {
        const z = n[R];
        z && I.centreOn(z.x, z.y);
      },
      setDetail: O.apply,
      depictionsDrawn: () => O.drawn(),
      reset: I.reset,
      cleanup: I.cleanup
    };
  }
  /** Wheel zoom, background pan, node drag - ~40 lines instead of d3-zoom and
   * d3-drag, and they keep working when d3 is unreachable. */
  #n(t, n, o, a, r, i) {
    let s = 1, l = 0, g = 0;
    const h = () => {
      n.setAttribute("transform", `translate(${l},${g}) scale(${s})`), i(s, l, g);
    }, b = li(t, {
      onZoom: (p) => {
        const u = t.getBoundingClientRect(), v = p.clientX - u.left, k = p.clientY - u.top, c = Math.min(5 / s, Math.max(0.15 / s, Math.exp(-p.deltaY * 2e-3)));
        l = v - (v - l) * c, g = k - (k - g) * c, s *= c, h();
      },
      hint: "Click the graph or hold Ctrl to zoom"
    });
    let y = null;
    const w = (p) => {
      y = { x: p.clientX - l, y: p.clientY - g };
    }, S = (p) => {
      y && (l = p.clientX - y.x, g = p.clientY - y.y, h());
    }, f = () => {
      y = null;
    };
    return t.addEventListener("pointerdown", w), t.addEventListener("pointermove", S), t.addEventListener("pointerup", f), t.addEventListener("pointercancel", f), t.addEventListener("pointerleave", f), a.forEach((p, u) => {
      let v = null;
      p.addEventListener("pointerdown", (c) => {
        c.stopPropagation(), v = { x: c.clientX - o[u].x * s, y: c.clientY - o[u].y * s }, p.setPointerCapture(c.pointerId);
      }), p.addEventListener("pointermove", (c) => {
        v && (o[u].x = o[u].fx = (c.clientX - v.x) / s, o[u].y = o[u].fy = (c.clientY - v.y) / s, r());
      });
      const k = () => {
        v = null;
      };
      p.addEventListener("pointerup", k), p.addEventListener("pointercancel", k);
    }), {
      reset() {
        s = 1, l = 0, g = 0, h();
      },
      /** Bring a graph point to the middle, zooming in enough to read it. */
      centreOn(p, u) {
        const v = t.getBoundingClientRect();
        s = Math.max(s, Qc), l = (v.width || t.clientWidth || 800) / 2 - p * s, g = (v.height || t.clientHeight || 600) / 2 - u * s, h();
      },
      cleanup() {
        b.cleanup(), t.removeEventListener("pointerdown", w), t.removeEventListener("pointermove", S), t.removeEventListener("pointerup", f), t.removeEventListener("pointercancel", f), t.removeEventListener("pointerleave", f);
      }
    };
  }
}
function ul(e, t, n, o, a) {
  const r = t / 2, i = n / 2, s = (l, g) => {
    l.forEach((h, _) => {
      const b = 2 * Math.PI * _ / Math.max(1, l.length) - Math.PI / 2;
      h.x = r + g * Math.cos(b), h.y = i + g * Math.sin(b), h.fx = o === "Force-directed" ? void 0 : h.x, h.fy = o === "Force-directed" ? void 0 : h.y;
    });
  };
  if (o === "Radial" && e.length) {
    const l = new Map(e.map((S) => [S["gufe-key"], []]));
    for (const S of a)
      l.get(S.from["gufe-key"]).push(S.to["gufe-key"]), l.get(S.to["gufe-key"]).push(S.from["gufe-key"]);
    const g = new Map(e.map((S) => [S["gufe-key"], S])), h = e.reduce(
      (S, f) => l.get(f["gufe-key"]).length > l.get(S["gufe-key"]).length ? f : S
    ), _ = /* @__PURE__ */ new Set([h["gufe-key"]]);
    let b = [h["gufe-key"]], y = 0;
    const w = Math.min(t, n) * 0.18;
    for (; b.length; ) {
      s(
        b.map((f) => g.get(f)),
        y === 0 ? 0 : y * w + 40
      );
      const S = [];
      for (const f of b)
        for (const p of l.get(f))
          _.has(p) || (_.add(p), S.push(p));
      b = S, y++;
    }
    s(e.filter((S) => !_.has(S["gufe-key"])), Math.min(t, n) * 0.45);
    return;
  }
  s(e, Math.min(t, n) * 0.34);
}
async function fl(e, t, n, o) {
  let a;
  try {
    if (a = await ci(), typeof a?.forceSimulation != "function") return !1;
  } catch {
    return !1;
  }
  const r = t.map((l) => ({ source: l.from["gufe-key"], target: l.to["gufe-key"], score: l.score })), i = a.forceSimulation(e).force(
    "link",
    a.forceLink(r).id((l) => l["gufe-key"]).distance((l) => ve.linkBaseDistance + (1 - (l.score ?? 0.5)) * ve.linkScoreBonus).strength(ve.linkStrength)
  ).force(
    "charge",
    a.forceManyBody().strength(ve.chargeStrength).distanceMin(ve.chargeDistanceMin).distanceMax(ve.chargeDistanceMax)
  ).force("center", a.forceCenter(n / 2, o / 2).strength(ve.centerStrength)).force("collision", a.forceCollide(lt + ve.collisionPadding).iterations(ve.collisionIterations)).force("x", a.forceX(n / 2).strength(ve.drift)).force("y", a.forceY(o / 2).strength(ve.drift)).stop(), s = Math.ceil(Math.log(i.alphaMin()) / Math.log(1 - i.alphaDecay()));
  for (let l = 0; l < s * ve.tickMultiplier; l++) i.tick();
  return !0;
}
Ce("gufe-ligand-network", dl);
const st = { width: 148, height: 46, radius: 10 }, Xe = {
  linkDistance: 220,
  linkStrength: 0.4,
  chargeStrength: -1200,
  collisionRadius: 110,
  collisionIterations: 3,
  tickMultiplier: 2
}, at = Qe;
function pl(e, t) {
  return e.length > t ? `${e.slice(0, t - 1)}...` : e;
}
function hl(e, t, n) {
  const o = Math.max(90, Math.min(t, n) * 0.36);
  e.forEach((a, r) => {
    const i = 2 * Math.PI * r / Math.max(1, e.length) - Math.PI / 2;
    a.x = t / 2 + o * Math.cos(i), a.y = n / 2 + o * Math.sin(i);
  });
}
async function ml(e, t, n, o) {
  let a;
  try {
    if (a = await ci(), typeof a?.forceSimulation != "function") return !1;
  } catch {
    return !1;
  }
  const r = t.map((l) => ({ source: l.from["gufe-key"], target: l.to["gufe-key"] })), i = a.forceSimulation(e).force(
    "link",
    a.forceLink(r).id((l) => l["gufe-key"]).distance(Xe.linkDistance).strength(Xe.linkStrength)
  ).force("charge", a.forceManyBody().strength(Xe.chargeStrength)).force("center", a.forceCenter(n / 2, o / 2)).force("collision", a.forceCollide(Xe.collisionRadius).iterations(Xe.collisionIterations)).stop(), s = Math.ceil(Math.log(i.alphaMin()) / Math.log(1 - i.alphaDecay()));
  for (let l = 0; l < s * Xe.tickMultiplier; l++) i.tick();
  return !0;
}
class gl extends Se {
  placeholder() {
    return "Waiting for an AlchemicalNetwork payload...";
  }
  renderView(t, n) {
    const o = ut(n), a = [];
    let r = 0;
    for (const d of n.nodes ?? []) {
      const m = Pe(o, d, "ChemicalSystemViz");
      if (!m) {
        r++;
        continue;
      }
      a.push({ ...m, x: 0, y: 0 });
    }
    const i = new Map(a.map((d) => [d["gufe-key"], d])), s = [];
    let l = 0;
    for (const d of n.edges ?? []) {
      const m = i.get(d.stateA), x = i.get(d.stateB);
      if (!m || !x) {
        l++;
        continue;
      }
      s.push({ ...d, index: s.length, from: m, to: x });
    }
    const g = (d) => {
      const m = Pe(o, d.protocol, "ProtocolViz");
      return m?.gufe_type || m?.name || "";
    }, h = new Set(s.map(g).filter(Boolean)), _ = Me(n.name || "Alchemical network", "AlchemicalNetwork");
    _.statsEl.appendChild(ce("systems", String(a.length))), _.statsEl.appendChild(ce("transformations", String(s.length))), h.size && _.statsEl.appendChild(ce("protocol", [...h].join(", "))), t.appendChild(_);
    const b = N("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    t.appendChild(b);
    const y = N("div", `flex:1 1 62%;min-width:0;position:relative;overflow:hidden;background:${E.netCanvasBg};`);
    b.appendChild(y), b.appendChild(N("div", `width:1px;flex-shrink:0;background:${E.splitBorder};`));
    const w = N("div", `flex:1 1 38%;min-width:0;display:flex;flex-direction:column;background:${E.appBg};`);
    b.appendChild(w);
    const S = this.#t(w, o, g);
    if (!a.length)
      return y.appendChild(
        ae(
          r ? "None of this network's chemical systems are in its registry." : "This network has no chemical systems."
        )
      ), S.message("Nothing to show."), {};
    r && Be(
      y,
      `${r} chemical system${r === 1 ? "" : "s"} named by this network are not in its registry`
    ), l && Be(
      y,
      `${l} transformation${l === 1 ? "" : "s"} name a system this network does not contain`
    );
    let f = !0, p = !1, u = null, v = () => {
    };
    const k = (d, m) => {
      u = { kind: d, index: m }, S.show(d === "node" ? a[m] : s[m], d), v();
    }, c = () => {
      y.querySelector("svg")?.remove();
      const d = y.clientWidth || 800, m = y.clientHeight || 600;
      hl(a, d, m);
      const x = () => {
        if (!f) return;
        const P = this.#e(y, a, s, d, m, k);
        v = () => P.setSelected(u), v();
      };
      if (p) {
        x();
        return;
      }
      ml(a, s, d, m).then((P) => {
        f && (P || (p = !0, Be(y, "d3 could not be loaded - showing the circular layout instead")), x());
      }, x);
    };
    return c(), k("node", 0), {
      onResize: () => c(),
      cleanup: () => {
        f = !1;
      }
    };
  }
  /** The right-hand pane: what the selected system or transformation is. */
  #t(t, n, o) {
    t.appendChild(
      N(
        "div",
        `flex-shrink:0;padding:4px 10px;font-size:12px;font-weight:bold;color:${E.labelFg};background:${E.labelBg};`,
        "Selected"
      )
    );
    const a = N("div", "flex:1;min-height:0;overflow:auto;display:flex;flex-direction:column;");
    t.appendChild(a);
    const r = (l) => a.replaceChildren(ae(l)), i = (l, g) => {
      const h = N(
        "div",
        `padding:10px 14px;border-bottom:1px solid ${E.toolbarBorder};display:flex;flex-direction:column;gap:4px;`
      );
      return h.appendChild(N("div", `font-size:13px;font-weight:600;color:${E.textPrimary};`, l)), h.appendChild(N("div", `font-size:11px;color:${E.textMuted2};`, g)), h;
    };
    return { show: (l, g) => {
      if (a.replaceChildren(), g === "node") {
        const b = l;
        a.appendChild(i(at(b), "ChemicalSystem"));
        const y = N("div", "display:flex;flex-direction:column;gap:6px;padding:12px 14px;"), w = Object.entries(b.components ?? {});
        for (const [S, f] of w) {
          const p = Le(n, f), u = N(
            "div",
            `display:flex;align-items:center;gap:8px;padding:7px 10px;border-radius:8px;min-width:0;background:${E.cardBg};border:1px solid ${E.cardBorder};`
          );
          u.appendChild(N("span", `font-size:12px;font-weight:700;color:${E.textPrimary};`, S)), u.appendChild(
            N(
              "span",
              `font-size:11px;color:${E.textMuted};overflow-wrap:anywhere;min-width:0;`,
              p ? p.name || "(unnamed)" : "(not in the registry)"
            )
          );
          const v = dt(
            p ? p.type === "UnknownComponentViz" ? p.gufe_type : p.type.replace(/Viz$/, "") : "missing"
          );
          v.style.marginLeft = "auto", u.appendChild(v), y.appendChild(u);
        }
        w.length || y.appendChild(N("div", `font-size:12px;color:${E.textMuted2};`, "This system lists no components.")), a.appendChild(y), a.appendChild(
          N(
            "div",
            `padding:0 14px 12px;font-size:11px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;color:${E.textMuted2};overflow-wrap:anywhere;`,
            b["gufe-key"]
          )
        );
        return;
      }
      const h = l;
      a.appendChild(i(h.name || "Unnamed transformation", "Transformation"));
      const _ = N("div", "display:flex;flex-direction:column;gap:8px;padding:12px 14px;");
      for (const [b, y] of [
        ["State A", at(h.from)],
        ["State B", at(h.to)],
        ["Protocol", o(h) || "-"]
      ]) {
        const w = N("div", "display:flex;gap:10px;align-items:baseline;min-width:0;");
        w.appendChild(
          N(
            "span",
            `flex:0 0 76px;font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:${E.textMuted2};`,
            b
          )
        ), w.appendChild(N("span", `flex:1;min-width:0;font-size:12px;color:${E.textPrimary};overflow-wrap:anywhere;`, y)), _.appendChild(w);
      }
      a.appendChild(_), a.appendChild(
        N(
          "div",
          `padding:0 14px 12px;font-size:11px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;color:${E.textMuted2};overflow-wrap:anywhere;`,
          h["gufe-key"]
        )
      );
    }, message: r };
  }
  /** Build the SVG for the current positions, and hand back the selection hook. */
  #e(t, n, o, a, r, i) {
    const s = oe("svg", { width: a, height: r, style: "display:block;" });
    t.appendChild(s);
    const l = oe("g"), g = oe("g");
    s.append(l, g);
    const h = [];
    o.forEach((b, y) => {
      const w = oe("line", {
        x1: b.from.x,
        y1: b.from.y,
        x2: b.to.x,
        y2: b.to.y,
        stroke: E.netEdgeLine,
        "stroke-width": 2,
        "stroke-linecap": "round",
        style: "cursor:pointer;"
      });
      mn(w, b.name || "transformation"), w.addEventListener("click", () => i("edge", y)), l.appendChild(w), h.push(w);
      const S = oe("line", {
        x1: b.from.x,
        y1: b.from.y,
        x2: b.to.x,
        y2: b.to.y,
        stroke: "transparent",
        "stroke-width": 16,
        style: "cursor:pointer;"
      });
      S.addEventListener("click", () => i("edge", y)), l.appendChild(S);
    });
    const _ = [];
    return n.forEach((b, y) => {
      const w = oe("g", { style: "cursor:pointer;" }), S = oe("rect", {
        x: b.x - st.width / 2,
        y: b.y - st.height / 2,
        width: st.width,
        height: st.height,
        rx: st.radius,
        fill: E.cardBg,
        stroke: E.cardBorder,
        "stroke-width": 2
      });
      w.appendChild(S), _.push(S);
      const f = oe("text", {
        x: b.x,
        y: b.y - 2,
        "text-anchor": "middle",
        fill: E.netNodeLabel,
        "font-size": 12,
        "font-weight": 700,
        "font-family": "ui-sans-serif,system-ui,sans-serif"
      });
      f.textContent = pl(at(b), 20), w.appendChild(f);
      const p = Object.keys(b.components ?? {}).length, u = oe("text", {
        x: b.x,
        y: b.y + 14,
        "text-anchor": "middle",
        fill: E.netInitials,
        "font-size": 10,
        "font-family": "ui-sans-serif,system-ui,sans-serif"
      });
      u.textContent = `${p} component${p === 1 ? "" : "s"}`, w.appendChild(u), mn(w, at(b)), w.addEventListener("click", () => i("node", y)), g.appendChild(w);
    }), {
      setSelected(b) {
        _.forEach((y, w) => {
          const S = b?.kind === "node" && b.index === w;
          y.setAttribute("stroke", S ? E.cardBorderActive : E.cardBorder), y.setAttribute("stroke-width", S ? "3" : "2");
        }), h.forEach((y, w) => {
          const S = b?.kind === "edge" && b.index === w;
          y.setAttribute("stroke", S ? E.netHaloColor : E.netEdgeLine), y.setAttribute("stroke-width", S ? "4" : "2");
        });
      }
    };
  }
}
Ce("gufe-alchemical-network", gl);
function yl(e) {
  return e.name || e.type.replace(/Viz$/, "");
}
function vl(e) {
  return e.type === "UnknownComponentViz" ? e.gufe_type : e.type.replace(/Viz$/, "");
}
class $l extends Se {
  placeholder() {
    return "Waiting for a ChemicalSystem payload...";
  }
  renderView(t, n) {
    const o = ut(n), a = [], r = [];
    for (const [w, S] of Object.entries(n.components ?? {})) {
      const f = Le(o, S);
      f ? a.push([w, f]) : r.push(w);
    }
    const i = Me(n.name || "Chemical system", "ChemicalSystem");
    if (i.statsEl.appendChild(ce("components", String(a.length))), t.appendChild(i), !a.length)
      return t.appendChild(
        ae(
          r.length ? "None of this system's components are in its registry." : "This chemical system has no components."
        )
      ), {};
    const s = N("div", "flex:1;min-height:0;position:relative;display:flex;flex-direction:row;");
    t.appendChild(s), r.length && Be(
      s,
      `${r.length} component${r.length === 1 ? "" : "s"} named by this system (${r.join(", ")}) are not in its registry`
    );
    const l = N(
      "div",
      `flex:0 0 220px;min-width:0;overflow:auto;display:flex;flex-direction:column;gap:6px;padding:10px;background:${E.panelBg};border-right:1px solid ${E.splitBorder};`
    );
    s.appendChild(l);
    const g = N("div", "flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;");
    s.appendChild(g);
    const h = N("div", "flex:1;min-height:0;display:flex;");
    g.appendChild(h);
    const _ = document.createElement("gufe-view");
    _.style.cssText = "flex:1;min-width:0;min-height:0;", h.appendChild(_);
    const b = [], y = (w) => {
      b.forEach((S, f) => {
        const p = f === w;
        S.style.background = p ? E.cardBgActive : E.cardBg, S.style.borderColor = p ? E.cardBorderActive : E.cardBorder;
      }), _.payload = a[w][1];
    };
    return a.forEach(([w, S], f) => {
      const p = N(
        "button",
        `display:flex;flex-direction:column;align-items:flex-start;gap:4px;padding:8px 10px;text-align:left;border:1px solid ${E.cardBorder};border-radius:8px;background:${E.cardBg};cursor:pointer;font-family:inherit;font-size:12px;width:100%;`
      );
      p.appendChild(N("span", `font-weight:700;color:${E.textPrimary};`, w)), p.appendChild(N("span", `font-size:11px;color:${E.textMuted};`, yl(S))), p.appendChild(dt(vl(S))), p.onclick = () => y(f), b.push(p), l.appendChild(p);
    }), y(0), {
      onResize: () => _.resize?.(),
      // Removing the nested view fires its own `disconnectedCallback`, which is
      // where whatever it mounted releases its viewers.
      cleanup: () => _.remove()
    };
  }
}
Ce("gufe-chemical-system", $l);
class bl extends Se {
  placeholder() {
    return "Waiting for a Protocol payload...";
  }
  renderView(t, n) {
    const o = Me(n.gufe_type || n.name || "Protocol", "Protocol");
    o.statsEl.appendChild(dt(n.gufe_type)), t.appendChild(o);
    const a = N(
      "div",
      "flex:1;min-height:0;overflow:auto;display:flex;align-items:center;justify-content:center;padding:24px;"
    );
    t.appendChild(a);
    const r = fn();
    return r.style.maxWidth = "460px", r.appendChild(Ee("gufe class", n.gufe_type, !0)), n.name && r.appendChild(Ee("Name", n.name)), r.appendChild(Ee("gufe key", n["gufe-key"], !0)), r.appendChild(
      N(
        "div",
        `padding-top:10px;font-size:11px;line-height:1.6;color:${E.textMuted2};`,
        "A Protocol's settings are not carried in this payload: they are large, deeply nested, and nothing draws them yet."
      )
    ), a.appendChild(r), {};
  }
}
Ce("gufe-protocol", bl);
const _e = { width: 340, height: 260, padding: 14, radius: 12 }, wl = 150, _l = 40, Sl = 24;
function Cl(e) {
  let t = e >>> 0;
  return () => (t = t * 1664525 + 1013904223 >>> 0, t / 4294967296);
}
function kl(e) {
  const t = /-?\d+(\.\d+)?([eE][-+]?\d+)?/.exec(e ?? "");
  if (!t) return null;
  const n = Number(t[0]);
  return Number.isFinite(n) ? n : null;
}
function xl(e) {
  return e == null || e <= 0 ? 0 : Math.max(1, Math.min(Sl, Math.round(e * _l)));
}
function El(e) {
  const t = oe("svg", {
    viewBox: `0 0 ${_e.width} ${_e.height}`,
    style: "width:100%;height:100%;max-width:100%;",
    role: "img"
  });
  mn(t, `${e.smiles || "solvent"} box`), t.appendChild(
    oe("rect", {
      x: 1,
      y: 1,
      width: _e.width - 2,
      height: _e.height - 2,
      rx: _e.radius,
      fill: E.boxFill,
      stroke: E.boxStroke,
      "stroke-width": 1.5
    })
  );
  const n = Cl(1597463007), o = () => ({
    x: _e.padding + n() * (_e.width - 2 * _e.padding),
    y: _e.padding + n() * (_e.height - 2 * _e.padding)
  });
  for (let i = 0; i < wl; i++) {
    const { x: s, y: l } = o();
    t.appendChild(oe("circle", { cx: s, cy: l, r: 2.4, fill: E.textMuted2, "fill-opacity": 0.45 }));
  }
  const a = xl(kl(e.ion_concentration)), r = [
    [e.positive_ion, E.diffAdded],
    [e.negative_ion, E.diffRemoved]
  ];
  for (const [i, s] of r)
    for (let l = 0; l < a; l++) {
      const { x: g, y: h } = o(), _ = oe("circle", { cx: g, cy: h, r: 5.5, fill: s, "fill-opacity": 0.85 });
      t.appendChild(mn(_, i));
    }
  return t;
}
class Pl extends Se {
  placeholder() {
    return "Waiting for a SolventComponent payload...";
  }
  renderView(t, n) {
    const o = Me(n.name || "Solvent", "SolventComponent");
    o.statsEl.appendChild(ce("neutralized", n.neutralize ? "yes" : "no")), o.statsEl.appendChild(ce(n.positive_ion, "", E.diffAdded)), o.statsEl.appendChild(ce(n.negative_ion, "", E.diffRemoved)), t.appendChild(o);
    const a = N(
      "div",
      "flex:1;min-height:0;display:flex;flex-wrap:wrap;gap:16px;padding:16px;overflow:auto;align-items:flex-start;"
    );
    t.appendChild(a);
    const r = fn();
    r.style.flex = "1 1 320px", r.appendChild(Ee("SMILES", n.smiles, !0)), r.appendChild(Ee("Positive ion", n.positive_ion)), r.appendChild(Ee("Negative ion", n.negative_ion)), r.appendChild(Ee("Ion concentration", n.ion_concentration)), r.appendChild(Ee("Neutralize", n.neutralize ? "yes" : "no")), a.appendChild(r);
    const i = fn();
    return i.style.flex = "1 1 340px", i.style.alignItems = "center", i.appendChild(El(n)), i.appendChild(
      N(
        "div",
        `padding-top:10px;font-size:11px;text-align:center;color:${E.textMuted2};`,
        "Schematic only: the dots show which ions are present, not how many."
      )
    ), a.appendChild(i), {};
  }
}
Ce("gufe-solvent", Pl);
const Un = {
  unchanged: E.diffUnchanged,
  changed: E.diffChanged,
  added: E.diffAdded,
  removed: E.diffRemoved
};
function Rl(e, t) {
  return e && !t ? "removed" : !e && t ? "added" : e === t ? "unchanged" : "changed";
}
function Al(e, t) {
  return [.../* @__PURE__ */ new Set([...Object.keys(e.components ?? {}), ...Object.keys(t.components ?? {})])].sort();
}
function Fl(e) {
  if (!e) return null;
  const t = e.type === "UnknownComponentViz" ? e.gufe_type : e.type.replace(/Viz$/, "");
  return { name: e.name || "(unnamed)", type: t };
}
function Wo(e, t) {
  const n = N(
    "div",
    `flex:1 1 50%;min-width:0;display:flex;flex-direction:column;gap:4px;padding:8px 10px;border-radius:8px;background:${E.cardBg};border:1px solid ${E.cardBorder};`
  ), o = Fl(e);
  return o ? (n.style.borderColor = t === "unchanged" ? E.cardBorder : Un[t], n.appendChild(N("span", `font-size:12px;font-weight:600;color:${E.textPrimary};`, o.name)), n.appendChild(dt(o.type)), n) : (n.style.background = "transparent", n.style.borderStyle = "dashed", n.appendChild(N("span", `font-size:12px;color:${E.textMuted2};`, "absent")), n);
}
function Nl(e, t) {
  const n = Le(t, e.componentA), o = Le(t, e.componentB);
  return `${n ? Qe(n) : "A"} to ${o ? Qe(o) : "B"}`;
}
class Ml extends Se {
  placeholder() {
    return "Waiting for a Transformation payload...";
  }
  renderView(t, n) {
    const o = ut(n), a = Pe(o, n.stateA, "ChemicalSystemViz"), r = Pe(o, n.stateB, "ChemicalSystemViz"), i = Pe(o, n.protocol, "ProtocolViz"), s = n.mappings ?? [], l = Me(n.name || "Transformation", "Transformation");
    if (l.statsEl.appendChild(ce("protocol", i?.gufe_type || i?.name || "-")), l.statsEl.appendChild(ce("mappings", String(s.length))), t.appendChild(l), !a || !r)
      return t.appendChild(
        ae("This transformation names two chemical systems, and its registry does not hold them.")
      ), {};
    const g = Al(a, r), h = N("div", "flex:0 0 auto;max-height:45%;overflow:auto;padding:12px 14px;");
    t.appendChild(h);
    const _ = N("div", "display:flex;gap:10px;padding:0 0 6px 120px;");
    for (const [f, p] of [
      ["State A", a],
      ["State B", r]
    ])
      _.appendChild(
        N(
          "div",
          `flex:1 1 50%;min-width:0;font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:${E.textMuted2};`,
          `${f}${p.name ? ` - ${p.name}` : ""}`
        )
      );
    h.appendChild(_);
    for (const f of g) {
      const p = a.components?.[f], u = r.components?.[f], v = Rl(p, u), k = Le(o, p), c = Le(o, u), d = N("div", "display:flex;align-items:stretch;gap:10px;padding:4px 0;"), m = N("div", "flex:0 0 110px;display:flex;align-items:center;gap:6px;min-width:0;");
      m.appendChild(
        N("span", `width:8px;height:8px;border-radius:50%;flex-shrink:0;background:${Un[v]};`)
      );
      const x = N("span", `font-size:12px;font-weight:700;color:${E.textPrimary};overflow-wrap:anywhere;`, f);
      x.title = v, m.appendChild(x), d.appendChild(m), d.appendChild(Wo(k, v)), d.appendChild(Wo(c, v)), h.appendChild(d);
    }
    const b = N(
      "div",
      `display:flex;flex-wrap:wrap;gap:12px;padding:8px 0 0;font-size:11px;color:${E.textMuted};`
    );
    for (const f of ["unchanged", "changed", "added", "removed"])
      b.appendChild(ce(f, "", Un[f]));
    h.appendChild(b);
    const y = N(
      "div",
      `flex-shrink:0;padding:4px 10px;font-size:12px;font-weight:bold;color:${E.labelFg};background:${E.labelBg};`,
      "Atom mapping"
    );
    if (t.appendChild(y), !s.length)
      return t.appendChild(
        ae(
          "This transformation carries no atom mapping - nothing here maps one small molecule onto another."
        )
      ), {};
    const w = document.createElement("gufe-atom-mapping");
    w.style.cssText = "flex:1;min-height:0;min-width:0;";
    const S = (f) => {
      w.payload = gi(s[f], o);
    };
    if (S(0), s.length > 1) {
      const f = N(
        "div",
        `display:flex;align-items:center;gap:8px;padding:6px 10px;flex-shrink:0;font-size:11px;background:${E.toolbarBg};border-bottom:1px solid ${E.toolbarBorder};color:${E.textMuted};`
      );
      f.appendChild(
        gn(
          s.map((p, u) => ({
            id: String(u),
            label: p.name || Nl(p, o)
          })),
          "0",
          (p) => S(Number(p))
        )
      ), t.appendChild(f);
    }
    return t.appendChild(w), {
      onResize: () => w.resize?.(),
      cleanup: () => w.remove()
    };
  }
}
Ce("gufe-transformation", Ml);
class jl extends Se {
  placeholder() {
    return "Waiting for a component payload...";
  }
  renderView(t, n) {
    const o = Me(n.name || "Unnamed component", "Component");
    o.statsEl.appendChild(dt(n.gufe_type)), t.appendChild(o);
    const a = N("div", "flex:1;min-height:0;overflow:auto;display:flex;align-items:center;justify-content:center;padding:24px;");
    t.appendChild(a);
    const r = fn();
    return r.style.maxWidth = "460px", r.appendChild(
      N(
        "div",
        `font-size:14px;font-weight:600;padding-bottom:6px;color:${E.textPrimary};`,
        `There is no visualization for ${n.gufe_type}.`
      )
    ), r.appendChild(
      N(
        "div",
        `font-size:12px;line-height:1.6;padding-bottom:10px;color:${E.textMuted};`,
        "gufe lets a project define its own Component subclasses, so this is a component this build has never been taught to draw - not a broken payload. Everything gufe knows about it that survives serialization is below."
      )
    ), r.appendChild(Ee("Name", n.name || "(unnamed)")), r.appendChild(Ee("gufe class", n.gufe_type, !0)), a.appendChild(r), {};
  }
}
Ce("gufe-unknown-component", jl);
function ql(e, t) {
  let n = e.querySelector("gufe-view");
  return n || (n = document.createElement("gufe-view"), n.style.cssText = "display:block;width:100%;height:100%;", e.appendChild(n)), t !== void 0 && (n.payload = t), n;
}
export {
  $i as CHROME_OPEN_BY_DEFAULT,
  Si as DEBUG_ATTRIBUTE,
  Ci as DEBUG_GLOBAL,
  gc as DEFAULT_ZOOM_BOUNDS,
  gl as GufeAlchemicalNetwork,
  Uc as GufeAtomMapping,
  $l as GufeChemicalSystem,
  Se as GufeElement,
  dl as GufeLigandNetwork,
  jc as GufeProtein,
  bl as GufeProtocol,
  kc as GufeSmallMolecule,
  Pl as GufeSolvent,
  Ml as GufeTransformation,
  jl as GufeUnknownComponent,
  uc as GufeView,
  qe as MAPPING_COLORS,
  it as MAPPING_RAMP_3D,
  Dl as MAPPING_RAMP_NAME,
  Ol as PAYLOAD_TYPES,
  Tl as SCHEMA_TYPES,
  er as VIEW_TAGS,
  yc as boundedZoom,
  ut as buildRegistry,
  wi as chromeMenu,
  Ei as debugEnabled,
  Ce as defineElement,
  si as describeProblem,
  Rl as diffStatus,
  Il as dispatchProblem,
  Qe as entryLabel,
  lc as formatIssues,
  li as guardWheel,
  Ri as logPayload,
  Le as lookup,
  Pe as lookupOfType,
  gi as mappingPayloadFor,
  ql as mount,
  kl as parseConcentration,
  Pi as payloadJson,
  _n as resetControl,
  sl as selectionText,
  Ko as uniqueAtoms,
  zl as validateAs,
  cc as validatePayload,
  ir as viewerInteraction,
  $c as wheelFactor
};
