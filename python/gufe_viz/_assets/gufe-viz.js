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
    colorCore: "0xaaaaaa",
    colorUniqueA: "0xff4d4d",
    colorUniqueB: "0x4dff88",
    linesMolA: "0xff8888",
    linesMolB: "0x88ffaa",
    linesDash: "0xffee55",
    overlayMolA: "0xff6666",
    overlayMolB: "0x66ff99",
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
    colorCore: "0x888888",
    colorUniqueA: "0xd62828",
    colorUniqueB: "0x2a9d4a",
    linesMolA: "0xd62828",
    linesMolB: "0x2a9d4a",
    linesDash: "0xd9a300",
    overlayMolA: "0xd62828",
    overlayMolB: "0x2a9d4a",
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
function $i() {
  try {
    return globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches ?? !1;
  } catch {
    return !1;
  }
}
const E = $i() ? cr.dark : cr.light;
function j(e, t, n) {
  const o = document.createElement(e);
  return t && (o.style.cssText = t), n != null && (o.textContent = n), o;
}
function Ne(e) {
  return String(e ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function ge(e) {
  if (e == null) return "unknown error";
  const t = e.message;
  if (typeof t == "string" && t) return t;
  const n = String(e);
  return n === "[object Object]" ? e.name || "unknown error" : n;
}
const nt = (e) => e.toLocaleString("en-US"), Ze = "-", Be = `background:${E.btnBg};color:${E.btnFg};border:1px solid ${E.btnBorder};padding:4px 9px;font-size:11px;font-weight:bold;border-radius:3px;cursor:pointer;font-family:inherit;`, dn = `background:${E.selectBg};color:${E.textPrimary};border:1px solid ${E.selectBorder};border-radius:6px;padding:4px 8px;font-size:12px;cursor:pointer;font-family:inherit;`;
function mn(e, t, n) {
  const o = j("div", "display:flex;gap:4px;"), i = e.map((r) => {
    const s = j("button", Be, r.label);
    return s.title = r.title || r.label, s.onmouseover = () => {
      s.style.background = E.btnBgHover;
    }, s.onmouseout = () => {
      s.style.background = t === r.id ? E.btnBgActive : E.btnBg;
    }, s.onclick = () => {
      o.setActive(r.id), n(r.id);
    }, o.appendChild(s), { id: r.id, btn: s };
  });
  return o.setActive = (r) => {
    t = r, i.forEach((s) => {
      s.btn.style.background = s.id === t ? E.btnBgActive : E.btnBg;
    });
  }, o.setActive(t), o;
}
function ce(e, t, n) {
  const o = j("span", "display:inline-flex;align-items:center;gap:5px;white-space:nowrap;");
  n && o.appendChild(
    j("span", `width:8px;height:8px;border-radius:50%;background:${n};display:inline-block;`)
  );
  const i = j("span");
  return i.innerHTML = `${Ne(e)} <b style="color:${E.textPrimary};">${Ne(t)}</b>`, o.appendChild(i), o;
}
function De(e, t) {
  const n = j("div", "", `⚠ ${t}`);
  return n.style.cssText = `position:absolute;top:10px;left:50%;transform:translateX(-50%);max-width:90%;z-index:20;padding:6px 14px;border-radius:6px;font-size:12px;background:${E.warnBg};color:${E.warnFg};border:1px solid ${E.warnBorder};`, e.appendChild(n), n;
}
function ae(e, t = !1) {
  return j(
    "div",
    `flex:1;display:flex;align-items:center;justify-content:center;text-align:center;padding:24px;font-size:13px;color:${t ? E.errorFg : E.textMuted2};`,
    e
  );
}
function Te(e) {
  const t = j(
    "div",
    `display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;padding:9px 14px;flex-shrink:0;background:${E.toolbarBg};border-bottom:1px solid ${E.toolbarBorder};`
  );
  return t.className = "gufe-header", t.titleEl = j("span", `font-weight:700;font-size:15px;color:${E.titleColor};letter-spacing:.02em;`, e), t.statsEl = j(
    "div",
    `display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-left:auto;font-size:11px;color:${E.textMuted};`
  ), t.toggleEl = j("div", "display:flex;align-items:center;align-self:center;flex-shrink:0;"), t.appendChild(t.toggleEl), t.appendChild(t.titleEl), t.appendChild(t.statsEl), t;
}
function Pe(e, t, n = !1) {
  const o = j("div", "display:flex;gap:12px;align-items:baseline;padding:5px 0;min-width:0;");
  o.appendChild(
    j(
      "span",
      `flex:0 0 128px;font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:${E.textMuted2};`,
      e
    )
  );
  const i = j(
    "span",
    `flex:1;min-width:0;user-select:text;cursor:text;overflow-wrap:anywhere;color:${E.textPrimary};` + (n ? "font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:11px;" : "font-size:12px;"),
    t
  );
  return i.title = t, o.appendChild(i), o;
}
function lt(e) {
  return j(
    "span",
    `padding:1px 7px;border-radius:10px;font-size:10px;font-weight:700;letter-spacing:.04em;white-space:nowrap;background:${E.badgeBg};color:${E.badgeFg};`,
    e
  );
}
function un() {
  return j(
    "div",
    `display:flex;flex-direction:column;gap:2px;padding:14px 18px;border-radius:10px;background:${E.cardBg};border:1px solid ${E.cardBorder};`
  );
}
function Xo() {
  const e = j("div", "flex:1;position:relative;min-height:0;min-width:0;"), t = j("div", "position:absolute;inset:0;");
  return t.dataset.gufeViewer = "", e.appendChild(t), { wrap: e, container: t };
}
const bi = !1;
function wi() {
  const e = j("span", "display:inline-flex;flex-direction:column;gap:2px;justify-content:center;");
  for (let t = 0; t < 3; t++)
    e.appendChild(j("span", `display:block;width:11px;height:1.5px;border-radius:1px;background:${E.btnFg};`));
  return e;
}
function _i(e, t, n = {}) {
  let o = n.open ?? bi, i = !1;
  const r = j("div", "flex-shrink:0;"), s = j("button", `${Be}display:inline-flex;align-items:center;gap:6px;padding:4px 8px;`);
  s.appendChild(wi()), s.setAttribute("aria-label", n.label || "Toggle menu");
  const a = () => {
    o && !i && (i = !0, r.appendChild(t())), r.style.display = o ? "" : "none", s.style.background = o ? E.btnBgActive : E.btnBg, s.setAttribute("aria-expanded", String(o));
  }, d = (y) => {
    y !== o && (o = y, a(), n.onToggle?.(o));
  };
  return s.onclick = () => d(!o), s.onmouseover = () => {
    s.style.background = o ? E.btnBgActive : E.btnBgHover;
  }, s.onmouseout = () => {
    s.style.background = o ? E.btnBgActive : E.btnBg;
  }, e.toggleEl.style.marginRight = "2px", e.toggleEl.appendChild(s), a(), {
    panel: r,
    isOpen: () => o,
    setOpen: d
  };
}
const Si = ["debug", "gufe-debug"], Ci = "debug", ki = "GUFE_VIZ_DEBUG";
function xi() {
  return !!globalThis[ki];
}
function Ei() {
  try {
    const e = globalThis.location?.search;
    if (!e) return !1;
    const t = new URLSearchParams(e);
    return Si.some((n) => t.has(n));
  } catch {
    return !1;
  }
}
function Pi(e) {
  return e?.hasAttribute?.(Ci) ? !0 : xi() || Ei();
}
function Ai(e) {
  try {
    return JSON.stringify(e, null, 2) ?? String(e);
  } catch (t) {
    return `<could not be stringified: ${ge(t)}>`;
  }
}
function Ri(e, t, n) {
  if (!Pi(n)) return;
  const o = Ai(t), i = t?.type, r = `[gufe-viz] ${e}${typeof i == "string" ? ` ${i}` : ""} (${o.length} chars)`, s = typeof console.groupCollapsed == "function";
  s ? console.groupCollapsed(r) : console.log(r), console.log(o), console.log(t), s && console.groupEnd?.();
}
const Fi = 150;
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
      this.#o && clearTimeout(this.#o), this.#o = setTimeout(() => this.#e?.onResize?.(), Fi);
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
    return this.#s(), this.#r = j(
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
    } catch (i) {
      this.#l(t, n, i);
      return;
    }
    o instanceof Promise ? o.then(
      (i) => this.#c(i, n),
      (i) => this.#l(t, n, i)
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
    n === this.#i && (console.warn("[gufe-viz] render failed:", o), t.replaceChildren(ae(`Failed to render: ${ge(o)}`, !0)));
  }
  /** Force a resize pass - for hosts that know they resized us. */
  resize() {
    this.#e?.onResize?.();
  }
}
function Ce(e, t) {
  typeof customElements > "u" || customElements.get(e) || customElements.define(e, t);
}
function Mi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ut = { exports: {} }, kn = {}, Re = {}, ze = {}, xn = {}, En = {}, Pn = {}, lr;
function fn() {
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
        return (u = this._str) !== null && u !== void 0 ? u : this._str = this._items.reduce((h, S) => `${h}${S}`, "");
      }
      get names() {
        var u;
        return (u = this._names) !== null && u !== void 0 ? u : this._names = this._items.reduce((h, S) => (S instanceof n && (h[S.str] = (h[S.str] || 0) + 1), h), {});
      }
    }
    e._Code = o, e.nil = new o("");
    function i(g, ...u) {
      const h = [g[0]];
      let S = 0;
      for (; S < u.length; )
        a(h, u[S]), h.push(g[++S]);
      return new o(h);
    }
    e._ = i;
    const r = new o("+");
    function s(g, ...u) {
      const h = [v(g[0])];
      let S = 0;
      for (; S < u.length; )
        h.push(r), a(h, u[S]), h.push(r, v(g[++S]));
      return d(h), new o(h);
    }
    e.str = s;
    function a(g, u) {
      u instanceof o ? g.push(...u._items) : u instanceof n ? g.push(u) : g.push(C(u));
    }
    e.addCodeArg = a;
    function d(g) {
      let u = 1;
      for (; u < g.length - 1; ) {
        if (g[u] === r) {
          const h = y(g[u - 1], g[u + 1]);
          if (h !== void 0) {
            g.splice(u - 1, 3, h);
            continue;
          }
          g[u++] = "+";
        }
        u++;
      }
    }
    function y(g, u) {
      if (u === '""')
        return g;
      if (g === '""')
        return u;
      if (typeof g == "string")
        return u instanceof n || g[g.length - 1] !== '"' ? void 0 : typeof u != "string" ? `${g.slice(0, -1)}${u}"` : u[0] === '"' ? g.slice(0, -1) + u.slice(1) : void 0;
      if (typeof u == "string" && u[0] === '"' && !(g instanceof n))
        return `"${g}${u.slice(1)}`;
    }
    function m(g, u) {
      return u.emptyStr() ? g : g.emptyStr() ? u : s`${g}${u}`;
    }
    e.strConcat = m;
    function C(g) {
      return typeof g == "number" || typeof g == "boolean" || g === null ? g : v(Array.isArray(g) ? g.join(",") : g);
    }
    function b(g) {
      return new o(v(g));
    }
    e.stringify = b;
    function v(g) {
      return JSON.stringify(g).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    e.safeStringify = v;
    function _(g) {
      return typeof g == "string" && e.IDENTIFIER.test(g) ? new o(`.${g}`) : i`[${g}]`;
    }
    e.getProperty = _;
    function w(g) {
      if (typeof g == "string" && e.IDENTIFIER.test(g))
        return new o(`${g}`);
      throw new Error(`CodeGen: invalid export name: ${g}, use explicit $id name mapping`);
    }
    e.getEsmExportName = w;
    function f(g) {
      return new o(g.toString());
    }
    e.regexpCode = f;
  })(Pn)), Pn;
}
var An = {}, dr;
function ur() {
  return dr || (dr = 1, (function(e) {
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
    class i {
      constructor({ prefixes: y, parent: m } = {}) {
        this._names = {}, this._prefixes = y, this._parent = m;
      }
      toName(y) {
        return y instanceof t.Name ? y : this.name(y);
      }
      name(y) {
        return new t.Name(this._newName(y));
      }
      _newName(y) {
        const m = this._names[y] || this._nameGroup(y);
        return `${y}${m.index++}`;
      }
      _nameGroup(y) {
        var m, C;
        if (!((C = (m = this._parent) === null || m === void 0 ? void 0 : m._prefixes) === null || C === void 0) && C.has(y) || this._prefixes && !this._prefixes.has(y))
          throw new Error(`CodeGen: prefix "${y}" is not allowed in this scope`);
        return this._names[y] = { prefix: y, index: 0 };
      }
    }
    e.Scope = i;
    class r extends t.Name {
      constructor(y, m) {
        super(m), this.prefix = y;
      }
      setValue(y, { property: m, itemIndex: C }) {
        this.value = y, this.scopePath = (0, t._)`.${new t.Name(m)}[${C}]`;
      }
    }
    e.ValueScopeName = r;
    const s = (0, t._)`\n`;
    class a extends i {
      constructor(y) {
        super(y), this._values = {}, this._scope = y.scope, this.opts = { ...y, _n: y.lines ? s : t.nil };
      }
      get() {
        return this._scope;
      }
      name(y) {
        return new r(y, this._newName(y));
      }
      value(y, m) {
        var C;
        if (m.ref === void 0)
          throw new Error("CodeGen: ref must be passed in value");
        const b = this.toName(y), { prefix: v } = b, _ = (C = m.key) !== null && C !== void 0 ? C : m.ref;
        let w = this._values[v];
        if (w) {
          const u = w.get(_);
          if (u)
            return u;
        } else
          w = this._values[v] = /* @__PURE__ */ new Map();
        w.set(_, b);
        const f = this._scope[v] || (this._scope[v] = []), g = f.length;
        return f[g] = m.ref, b.setValue(m, { property: v, itemIndex: g }), b;
      }
      getValue(y, m) {
        const C = this._values[y];
        if (C)
          return C.get(m);
      }
      scopeRefs(y, m = this._values) {
        return this._reduceValues(m, (C) => {
          if (C.scopePath === void 0)
            throw new Error(`CodeGen: name "${C}" has no value`);
          return (0, t._)`${y}${C.scopePath}`;
        });
      }
      scopeCode(y = this._values, m, C) {
        return this._reduceValues(y, (b) => {
          if (b.value === void 0)
            throw new Error(`CodeGen: name "${b}" has no value`);
          return b.value.code;
        }, m, C);
      }
      _reduceValues(y, m, C = {}, b) {
        let v = t.nil;
        for (const _ in y) {
          const w = y[_];
          if (!w)
            continue;
          const f = C[_] = C[_] || /* @__PURE__ */ new Map();
          w.forEach((g) => {
            if (f.has(g))
              return;
            f.set(g, o.Started);
            let u = m(g);
            if (u) {
              const h = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
              v = (0, t._)`${v}${h} ${g} = ${u};${this.opts._n}`;
            } else if (u = b?.(g))
              v = (0, t._)`${v}${u}${this.opts._n}`;
            else
              throw new n(g);
            f.set(g, o.Completed);
          });
        }
        return v;
      }
    }
    e.ValueScope = a;
  })(An)), An;
}
var fr;
function Q() {
  return fr || (fr = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
    const t = /* @__PURE__ */ fn(), n = /* @__PURE__ */ ur();
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
    var i = /* @__PURE__ */ ur();
    Object.defineProperty(e, "Scope", { enumerable: !0, get: function() {
      return i.Scope;
    } }), Object.defineProperty(e, "ValueScope", { enumerable: !0, get: function() {
      return i.ValueScope;
    } }), Object.defineProperty(e, "ValueScopeName", { enumerable: !0, get: function() {
      return i.ValueScopeName;
    } }), Object.defineProperty(e, "varKinds", { enumerable: !0, get: function() {
      return i.varKinds;
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
      optimizeNames($, x) {
        return this;
      }
    }
    class s extends r {
      constructor($, x, I) {
        super(), this.varKind = $, this.name = x, this.rhs = I;
      }
      render({ es5: $, _n: x }) {
        const I = $ ? n.varKinds.var : this.varKind, G = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
        return `${I} ${this.name}${G};` + x;
      }
      optimizeNames($, x) {
        if ($[this.name.str])
          return this.rhs && (this.rhs = J(this.rhs, $, x)), this;
      }
      get names() {
        return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
      }
    }
    class a extends r {
      constructor($, x, I) {
        super(), this.lhs = $, this.rhs = x, this.sideEffects = I;
      }
      render({ _n: $ }) {
        return `${this.lhs} = ${this.rhs};` + $;
      }
      optimizeNames($, x) {
        if (!(this.lhs instanceof t.Name && !$[this.lhs.str] && !this.sideEffects))
          return this.rhs = J(this.rhs, $, x), this;
      }
      get names() {
        const $ = this.lhs instanceof t.Name ? {} : { ...this.lhs.names };
        return T($, this.rhs);
      }
    }
    class d extends a {
      constructor($, x, I, G) {
        super($, I, G), this.op = x;
      }
      render({ _n: $ }) {
        return `${this.lhs} ${this.op}= ${this.rhs};` + $;
      }
    }
    class y extends r {
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
    class C extends r {
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
      optimizeNames($, x) {
        return this.code = J(this.code, $, x), this;
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
        return this.nodes.reduce((x, I) => x + I.render($), "");
      }
      optimizeNodes() {
        const { nodes: $ } = this;
        let x = $.length;
        for (; x--; ) {
          const I = $[x].optimizeNodes();
          Array.isArray(I) ? $.splice(x, 1, ...I) : I ? $[x] = I : $.splice(x, 1);
        }
        return $.length > 0 ? this : void 0;
      }
      optimizeNames($, x) {
        const { nodes: I } = this;
        let G = I.length;
        for (; G--; ) {
          const W = I[G];
          W.optimizeNames($, x) || (Z($, W.names), I.splice(G, 1));
        }
        return I.length > 0 ? this : void 0;
      }
      get names() {
        return this.nodes.reduce(($, x) => A($, x.names), {});
      }
    }
    class _ extends v {
      render($) {
        return "{" + $._n + super.render($) + "}" + $._n;
      }
    }
    class w extends v {
    }
    class f extends _ {
    }
    f.kind = "else";
    class g extends _ {
      constructor($, x) {
        super(x), this.condition = $;
      }
      render($) {
        let x = `if(${this.condition})` + super.render($);
        return this.else && (x += "else " + this.else.render($)), x;
      }
      optimizeNodes() {
        super.optimizeNodes();
        const $ = this.condition;
        if ($ === !0)
          return this.nodes;
        let x = this.else;
        if (x) {
          const I = x.optimizeNodes();
          x = this.else = Array.isArray(I) ? new f(I) : I;
        }
        if (x)
          return $ === !1 ? x instanceof g ? x : x.nodes : this.nodes.length ? this : new g(L($), x instanceof g ? [x] : x.nodes);
        if (!($ === !1 || !this.nodes.length))
          return this;
      }
      optimizeNames($, x) {
        var I;
        if (this.else = (I = this.else) === null || I === void 0 ? void 0 : I.optimizeNames($, x), !!(super.optimizeNames($, x) || this.else))
          return this.condition = J(this.condition, $, x), this;
      }
      get names() {
        const $ = super.names;
        return T($, this.condition), this.else && A($, this.else.names), $;
      }
    }
    g.kind = "if";
    class u extends _ {
    }
    u.kind = "for";
    class h extends u {
      constructor($) {
        super(), this.iteration = $;
      }
      render($) {
        return `for(${this.iteration})` + super.render($);
      }
      optimizeNames($, x) {
        if (super.optimizeNames($, x))
          return this.iteration = J(this.iteration, $, x), this;
      }
      get names() {
        return A(super.names, this.iteration.names);
      }
    }
    class S extends u {
      constructor($, x, I, G) {
        super(), this.varKind = $, this.name = x, this.from = I, this.to = G;
      }
      render($) {
        const x = $.es5 ? n.varKinds.var : this.varKind, { name: I, from: G, to: W } = this;
        return `for(${x} ${I}=${G}; ${I}<${W}; ${I}++)` + super.render($);
      }
      get names() {
        const $ = T(super.names, this.from);
        return T($, this.to);
      }
    }
    class c extends u {
      constructor($, x, I, G) {
        super(), this.loop = $, this.varKind = x, this.name = I, this.iterable = G;
      }
      render($) {
        return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render($);
      }
      optimizeNames($, x) {
        if (super.optimizeNames($, x))
          return this.iterable = J(this.iterable, $, x), this;
      }
      get names() {
        return A(super.names, this.iterable.names);
      }
    }
    class l extends _ {
      constructor($, x, I) {
        super(), this.name = $, this.args = x, this.async = I;
      }
      render($) {
        return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render($);
      }
    }
    l.kind = "func";
    class p extends v {
      render($) {
        return "return " + super.render($);
      }
    }
    p.kind = "return";
    class k extends _ {
      render($) {
        let x = "try" + super.render($);
        return this.catch && (x += this.catch.render($)), this.finally && (x += this.finally.render($)), x;
      }
      optimizeNodes() {
        var $, x;
        return super.optimizeNodes(), ($ = this.catch) === null || $ === void 0 || $.optimizeNodes(), (x = this.finally) === null || x === void 0 || x.optimizeNodes(), this;
      }
      optimizeNames($, x) {
        var I, G;
        return super.optimizeNames($, x), (I = this.catch) === null || I === void 0 || I.optimizeNames($, x), (G = this.finally) === null || G === void 0 || G.optimizeNames($, x), this;
      }
      get names() {
        const $ = super.names;
        return this.catch && A($, this.catch.names), this.finally && A($, this.finally.names), $;
      }
    }
    class P extends _ {
      constructor($) {
        super(), this.error = $;
      }
      render($) {
        return `catch(${this.error})` + super.render($);
      }
    }
    P.kind = "catch";
    class N extends _ {
      render($) {
        return "finally" + super.render($);
      }
    }
    N.kind = "finally";
    class z {
      constructor($, x = {}) {
        this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ...x, _n: x.lines ? `
` : "" }, this._extScope = $, this._scope = new n.Scope({ parent: $ }), this._nodes = [new w()];
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
      scopeValue($, x) {
        const I = this._extScope.value($, x);
        return (this._values[I.prefix] || (this._values[I.prefix] = /* @__PURE__ */ new Set())).add(I), I;
      }
      getScopeValue($, x) {
        return this._extScope.getValue($, x);
      }
      // return code that assigns values in the external scope to the names that are used internally
      // (same names that were returned by gen.scopeName or gen.scopeValue)
      scopeRefs($) {
        return this._extScope.scopeRefs($, this._values);
      }
      scopeCode() {
        return this._extScope.scopeCode(this._values);
      }
      _def($, x, I, G) {
        const W = this._scope.toName(x);
        return I !== void 0 && G && (this._constants[W.str] = I), this._leafNode(new s($, W, I)), W;
      }
      // `const` declaration (`var` in es5 mode)
      const($, x, I) {
        return this._def(n.varKinds.const, $, x, I);
      }
      // `let` declaration with optional assignment (`var` in es5 mode)
      let($, x, I) {
        return this._def(n.varKinds.let, $, x, I);
      }
      // `var` declaration with optional assignment
      var($, x, I) {
        return this._def(n.varKinds.var, $, x, I);
      }
      // assignment code
      assign($, x, I) {
        return this._leafNode(new a($, x, I));
      }
      // `+=` code
      add($, x) {
        return this._leafNode(new d($, e.operators.ADD, x));
      }
      // appends passed SafeExpr to code or executes Block
      code($) {
        return typeof $ == "function" ? $() : $ !== t.nil && this._leafNode(new b($)), this;
      }
      // returns code for object literal for the passed argument list of key-value pairs
      object(...$) {
        const x = ["{"];
        for (const [I, G] of $)
          x.length > 1 && x.push(","), x.push(I), (I !== G || this.opts.es5) && (x.push(":"), (0, t.addCodeArg)(x, G));
        return x.push("}"), new t._Code(x);
      }
      // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
      if($, x, I) {
        if (this._blockNode(new g($)), x && I)
          this.code(x).else().code(I).endIf();
        else if (x)
          this.code(x).endIf();
        else if (I)
          throw new Error('CodeGen: "else" body without "then" body');
        return this;
      }
      // `else if` clause - invalid without `if` or after `else` clauses
      elseIf($) {
        return this._elseNode(new g($));
      }
      // `else` clause - only valid after `if` or `else if` clauses
      else() {
        return this._elseNode(new f());
      }
      // end `if` statement (needed if gen.if was used only with condition)
      endIf() {
        return this._endBlockNode(g, f);
      }
      _for($, x) {
        return this._blockNode($), x && this.code(x).endFor(), this;
      }
      // a generic `for` clause (or statement if `forBody` is passed)
      for($, x) {
        return this._for(new h($), x);
      }
      // `for` statement for a range of values
      forRange($, x, I, G, W = this.opts.es5 ? n.varKinds.var : n.varKinds.let) {
        const oe = this._scope.toName($);
        return this._for(new S(W, oe, x, I), () => G(oe));
      }
      // `for-of` statement (in es5 mode replace with a normal for loop)
      forOf($, x, I, G = n.varKinds.const) {
        const W = this._scope.toName($);
        if (this.opts.es5) {
          const oe = x instanceof t.Name ? x : this.var("_arr", x);
          return this.forRange("_i", 0, (0, t._)`${oe}.length`, (re) => {
            this.var(W, (0, t._)`${oe}[${re}]`), I(W);
          });
        }
        return this._for(new c("of", G, W, x), () => I(W));
      }
      // `for-in` statement.
      // With option `ownProperties` replaced with a `for-of` loop for object keys
      forIn($, x, I, G = this.opts.es5 ? n.varKinds.var : n.varKinds.const) {
        if (this.opts.ownProperties)
          return this.forOf($, (0, t._)`Object.keys(${x})`, I);
        const W = this._scope.toName($);
        return this._for(new c("in", G, W, x), () => I(W));
      }
      // end `for` loop
      endFor() {
        return this._endBlockNode(u);
      }
      // `label` statement
      label($) {
        return this._leafNode(new y($));
      }
      // `break` statement
      break($) {
        return this._leafNode(new m($));
      }
      // `return` statement
      return($) {
        const x = new p();
        if (this._blockNode(x), this.code($), x.nodes.length !== 1)
          throw new Error('CodeGen: "return" should have one node');
        return this._endBlockNode(p);
      }
      // `try` statement
      try($, x, I) {
        if (!x && !I)
          throw new Error('CodeGen: "try" without "catch" and "finally"');
        const G = new k();
        if (this._blockNode(G), this.code($), x) {
          const W = this.name("e");
          this._currNode = G.catch = new P(W), x(W);
        }
        return I && (this._currNode = G.finally = new N(), this.code(I)), this._endBlockNode(P, N);
      }
      // `throw` statement
      throw($) {
        return this._leafNode(new C($));
      }
      // start self-balancing block
      block($, x) {
        return this._blockStarts.push(this._nodes.length), $ && this.code($).endBlock(x), this;
      }
      // end the current self-balancing block
      endBlock($) {
        const x = this._blockStarts.pop();
        if (x === void 0)
          throw new Error("CodeGen: not in self-balancing block");
        const I = this._nodes.length - x;
        if (I < 0 || $ !== void 0 && I !== $)
          throw new Error(`CodeGen: wrong number of nodes: ${I} vs ${$} expected`);
        return this._nodes.length = x, this;
      }
      // `function` heading (or definition if funcBody is passed)
      func($, x = t.nil, I, G) {
        return this._blockNode(new l($, x, I)), G && this.code(G).endFunc(), this;
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
      _endBlockNode($, x) {
        const I = this._currNode;
        if (I instanceof $ || x && I instanceof x)
          return this._nodes.pop(), this;
        throw new Error(`CodeGen: not in block "${x ? `${$.kind}/${x.kind}` : $.kind}"`);
      }
      _elseNode($) {
        const x = this._currNode;
        if (!(x instanceof g))
          throw new Error('CodeGen: "else" without "if"');
        return this._currNode = x.else = $, this;
      }
      get _root() {
        return this._nodes[0];
      }
      get _currNode() {
        const $ = this._nodes;
        return $[$.length - 1];
      }
      set _currNode($) {
        const x = this._nodes;
        x[x.length - 1] = $;
      }
    }
    e.CodeGen = z;
    function A(M, $) {
      for (const x in $)
        M[x] = (M[x] || 0) + ($[x] || 0);
      return M;
    }
    function T(M, $) {
      return $ instanceof t._CodeOrName ? A(M, $.names) : M;
    }
    function J(M, $, x) {
      if (M instanceof t.Name)
        return I(M);
      if (!G(M))
        return M;
      return new t._Code(M._items.reduce((W, oe) => (oe instanceof t.Name && (oe = I(oe)), oe instanceof t._Code ? W.push(...oe._items) : W.push(oe), W), []));
      function I(W) {
        const oe = x[W.str];
        return oe === void 0 || $[W.str] !== 1 ? W : (delete $[W.str], oe);
      }
      function G(W) {
        return W instanceof t._Code && W._items.some((oe) => oe instanceof t.Name && $[oe.str] === 1 && x[oe.str] !== void 0);
      }
    }
    function Z(M, $) {
      for (const x in $)
        M[x] = (M[x] || 0) - ($[x] || 0);
    }
    function L(M) {
      return typeof M == "boolean" || typeof M == "number" || M === null ? !M : (0, t._)`!${q(M)}`;
    }
    e.not = L;
    const H = R(e.operators.AND);
    function U(...M) {
      return M.reduce(H);
    }
    e.and = U;
    const Y = R(e.operators.OR);
    function V(...M) {
      return M.reduce(Y);
    }
    e.or = V;
    function R(M) {
      return ($, x) => $ === t.nil ? x : x === t.nil ? $ : (0, t._)`${q($)} ${M} ${q(x)}`;
    }
    function q(M) {
      return M instanceof t.Name ? M : (0, t._)`(${M})`;
    }
  })(En)), En;
}
var ee = {}, pr;
function ne() {
  if (pr) return ee;
  pr = 1, Object.defineProperty(ee, "__esModule", { value: !0 }), ee.checkStrictMode = ee.getErrorPath = ee.Type = ee.useFunc = ee.setEvaluated = ee.evaluatedPropsToName = ee.mergeEvaluated = ee.eachItem = ee.unescapeJsonPointer = ee.escapeJsonPointer = ee.escapeFragment = ee.unescapeFragment = ee.schemaRefOrVal = ee.schemaHasRulesButRef = ee.schemaHasRules = ee.checkUnknownRules = ee.alwaysValidSchema = ee.toHash = void 0;
  const e = /* @__PURE__ */ Q(), t = /* @__PURE__ */ fn();
  function n(c) {
    const l = {};
    for (const p of c)
      l[p] = !0;
    return l;
  }
  ee.toHash = n;
  function o(c, l) {
    return typeof l == "boolean" ? l : Object.keys(l).length === 0 ? !0 : (i(c, l), !r(l, c.self.RULES.all));
  }
  ee.alwaysValidSchema = o;
  function i(c, l = c.schema) {
    const { opts: p, self: k } = c;
    if (!p.strictSchema || typeof l == "boolean")
      return;
    const P = k.RULES.keywords;
    for (const N in l)
      P[N] || S(c, `unknown keyword: "${N}"`);
  }
  ee.checkUnknownRules = i;
  function r(c, l) {
    if (typeof c == "boolean")
      return !c;
    for (const p in c)
      if (l[p])
        return !0;
    return !1;
  }
  ee.schemaHasRules = r;
  function s(c, l) {
    if (typeof c == "boolean")
      return !c;
    for (const p in c)
      if (p !== "$ref" && l.all[p])
        return !0;
    return !1;
  }
  ee.schemaHasRulesButRef = s;
  function a({ topSchemaRef: c, schemaPath: l }, p, k, P) {
    if (!P) {
      if (typeof p == "number" || typeof p == "boolean")
        return p;
      if (typeof p == "string")
        return (0, e._)`${p}`;
    }
    return (0, e._)`${c}${l}${(0, e.getProperty)(k)}`;
  }
  ee.schemaRefOrVal = a;
  function d(c) {
    return C(decodeURIComponent(c));
  }
  ee.unescapeFragment = d;
  function y(c) {
    return encodeURIComponent(m(c));
  }
  ee.escapeFragment = y;
  function m(c) {
    return typeof c == "number" ? `${c}` : c.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  ee.escapeJsonPointer = m;
  function C(c) {
    return c.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  ee.unescapeJsonPointer = C;
  function b(c, l) {
    if (Array.isArray(c))
      for (const p of c)
        l(p);
    else
      l(c);
  }
  ee.eachItem = b;
  function v({ mergeNames: c, mergeToName: l, mergeValues: p, resultToName: k }) {
    return (P, N, z, A) => {
      const T = z === void 0 ? N : z instanceof e.Name ? (N instanceof e.Name ? c(P, N, z) : l(P, N, z), z) : N instanceof e.Name ? (l(P, z, N), N) : p(N, z);
      return A === e.Name && !(T instanceof e.Name) ? k(P, T) : T;
    };
  }
  ee.mergeEvaluated = {
    props: v({
      mergeNames: (c, l, p) => c.if((0, e._)`${p} !== true && ${l} !== undefined`, () => {
        c.if((0, e._)`${l} === true`, () => c.assign(p, !0), () => c.assign(p, (0, e._)`${p} || {}`).code((0, e._)`Object.assign(${p}, ${l})`));
      }),
      mergeToName: (c, l, p) => c.if((0, e._)`${p} !== true`, () => {
        l === !0 ? c.assign(p, !0) : (c.assign(p, (0, e._)`${p} || {}`), w(c, p, l));
      }),
      mergeValues: (c, l) => c === !0 ? !0 : { ...c, ...l },
      resultToName: _
    }),
    items: v({
      mergeNames: (c, l, p) => c.if((0, e._)`${p} !== true && ${l} !== undefined`, () => c.assign(p, (0, e._)`${l} === true ? true : ${p} > ${l} ? ${p} : ${l}`)),
      mergeToName: (c, l, p) => c.if((0, e._)`${p} !== true`, () => c.assign(p, l === !0 ? !0 : (0, e._)`${p} > ${l} ? ${p} : ${l}`)),
      mergeValues: (c, l) => c === !0 ? !0 : Math.max(c, l),
      resultToName: (c, l) => c.var("items", l)
    })
  };
  function _(c, l) {
    if (l === !0)
      return c.var("props", !0);
    const p = c.var("props", (0, e._)`{}`);
    return l !== void 0 && w(c, p, l), p;
  }
  ee.evaluatedPropsToName = _;
  function w(c, l, p) {
    Object.keys(p).forEach((k) => c.assign((0, e._)`${l}${(0, e.getProperty)(k)}`, !0));
  }
  ee.setEvaluated = w;
  const f = {};
  function g(c, l) {
    return c.scopeValue("func", {
      ref: l,
      code: f[l.code] || (f[l.code] = new t._Code(l.code))
    });
  }
  ee.useFunc = g;
  var u;
  (function(c) {
    c[c.Num = 0] = "Num", c[c.Str = 1] = "Str";
  })(u || (ee.Type = u = {}));
  function h(c, l, p) {
    if (c instanceof e.Name) {
      const k = l === u.Num;
      return p ? k ? (0, e._)`"[" + ${c} + "]"` : (0, e._)`"['" + ${c} + "']"` : k ? (0, e._)`"/" + ${c}` : (0, e._)`"/" + ${c}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return p ? (0, e.getProperty)(c).toString() : "/" + m(c);
  }
  ee.getErrorPath = h;
  function S(c, l, p = c.opts.strictSchema) {
    if (p) {
      if (l = `strict mode: ${l}`, p === !0)
        throw new Error(l);
      c.self.logger.warn(l);
    }
  }
  return ee.checkStrictMode = S, ee;
}
var ft = {}, hr;
function ke() {
  if (hr) return ft;
  hr = 1, Object.defineProperty(ft, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Q(), t = {
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
var mr;
function gn() {
  return mr || (mr = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
    const t = /* @__PURE__ */ Q(), n = /* @__PURE__ */ ne(), o = /* @__PURE__ */ ke();
    e.keywordError = {
      message: ({ keyword: f }) => (0, t.str)`must pass "${f}" keyword validation`
    }, e.keyword$DataError = {
      message: ({ keyword: f, schemaType: g }) => g ? (0, t.str)`"${f}" keyword must be ${g} ($data)` : (0, t.str)`"${f}" keyword is invalid ($data)`
    };
    function i(f, g = e.keywordError, u, h) {
      const { it: S } = f, { gen: c, compositeRule: l, allErrors: p } = S, k = C(f, g, u);
      h ?? (l || p) ? d(c, k) : y(S, (0, t._)`[${k}]`);
    }
    e.reportError = i;
    function r(f, g = e.keywordError, u) {
      const { it: h } = f, { gen: S, compositeRule: c, allErrors: l } = h, p = C(f, g, u);
      d(S, p), c || l || y(h, o.default.vErrors);
    }
    e.reportExtraError = r;
    function s(f, g) {
      f.assign(o.default.errors, g), f.if((0, t._)`${o.default.vErrors} !== null`, () => f.if(g, () => f.assign((0, t._)`${o.default.vErrors}.length`, g), () => f.assign(o.default.vErrors, null)));
    }
    e.resetErrorsCount = s;
    function a({ gen: f, keyword: g, schemaValue: u, data: h, errsCount: S, it: c }) {
      if (S === void 0)
        throw new Error("ajv implementation error");
      const l = f.name("err");
      f.forRange("i", S, o.default.errors, (p) => {
        f.const(l, (0, t._)`${o.default.vErrors}[${p}]`), f.if((0, t._)`${l}.instancePath === undefined`, () => f.assign((0, t._)`${l}.instancePath`, (0, t.strConcat)(o.default.instancePath, c.errorPath))), f.assign((0, t._)`${l}.schemaPath`, (0, t.str)`${c.errSchemaPath}/${g}`), c.opts.verbose && (f.assign((0, t._)`${l}.schema`, u), f.assign((0, t._)`${l}.data`, h));
      });
    }
    e.extendErrors = a;
    function d(f, g) {
      const u = f.const("err", g);
      f.if((0, t._)`${o.default.vErrors} === null`, () => f.assign(o.default.vErrors, (0, t._)`[${u}]`), (0, t._)`${o.default.vErrors}.push(${u})`), f.code((0, t._)`${o.default.errors}++`);
    }
    function y(f, g) {
      const { gen: u, validateName: h, schemaEnv: S } = f;
      S.$async ? u.throw((0, t._)`new ${f.ValidationError}(${g})`) : (u.assign((0, t._)`${h}.errors`, g), u.return(!1));
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
    function C(f, g, u) {
      const { createErrors: h } = f.it;
      return h === !1 ? (0, t._)`{}` : b(f, g, u);
    }
    function b(f, g, u = {}) {
      const { gen: h, it: S } = f, c = [
        v(S, u),
        _(f, u)
      ];
      return w(f, g, c), h.object(...c);
    }
    function v({ errorPath: f }, { instancePath: g }) {
      const u = g ? (0, t.str)`${f}${(0, n.getErrorPath)(g, n.Type.Str)}` : f;
      return [o.default.instancePath, (0, t.strConcat)(o.default.instancePath, u)];
    }
    function _({ keyword: f, it: { errSchemaPath: g } }, { schemaPath: u, parentSchema: h }) {
      let S = h ? g : (0, t.str)`${g}/${f}`;
      return u && (S = (0, t.str)`${S}${(0, n.getErrorPath)(u, n.Type.Str)}`), [m.schemaPath, S];
    }
    function w(f, { params: g, message: u }, h) {
      const { keyword: S, data: c, schemaValue: l, it: p } = f, { opts: k, propertyName: P, topSchemaRef: N, schemaPath: z } = p;
      h.push([m.keyword, S], [m.params, typeof g == "function" ? g(f) : g || (0, t._)`{}`]), k.messages && h.push([m.message, typeof u == "function" ? u(f) : u]), k.verbose && h.push([m.schema, l], [m.parentSchema, (0, t._)`${N}${z}`], [o.default.data, c]), P && h.push([m.propertyName, P]);
    }
  })(xn)), xn;
}
var gr;
function Ni() {
  if (gr) return ze;
  gr = 1, Object.defineProperty(ze, "__esModule", { value: !0 }), ze.boolOrEmptySchema = ze.topBoolOrEmptySchema = void 0;
  const e = /* @__PURE__ */ gn(), t = /* @__PURE__ */ Q(), n = /* @__PURE__ */ ke(), o = {
    message: "boolean schema is false"
  };
  function i(a) {
    const { gen: d, schema: y, validateName: m } = a;
    y === !1 ? s(a, !1) : typeof y == "object" && y.$async === !0 ? d.return(n.default.data) : (d.assign((0, t._)`${m}.errors`, null), d.return(!0));
  }
  ze.topBoolOrEmptySchema = i;
  function r(a, d) {
    const { gen: y, schema: m } = a;
    m === !1 ? (y.var(d, !1), s(a)) : y.var(d, !0);
  }
  ze.boolOrEmptySchema = r;
  function s(a, d) {
    const { gen: y, data: m } = a, C = {
      gen: y,
      keyword: "false schema",
      data: m,
      schema: !1,
      schemaCode: !1,
      schemaValue: !1,
      params: {},
      it: a
    };
    (0, e.reportError)(C, o, void 0, d);
  }
  return ze;
}
var ue = {}, Ie = {}, yr;
function Zo() {
  if (yr) return Ie;
  yr = 1, Object.defineProperty(Ie, "__esModule", { value: !0 }), Ie.getRules = Ie.isJSONType = void 0;
  const e = ["string", "number", "integer", "boolean", "null", "object", "array"], t = new Set(e);
  function n(i) {
    return typeof i == "string" && t.has(i);
  }
  Ie.isJSONType = n;
  function o() {
    const i = {
      number: { type: "number", rules: [] },
      string: { type: "string", rules: [] },
      array: { type: "array", rules: [] },
      object: { type: "object", rules: [] }
    };
    return {
      types: { ...i, integer: !0, boolean: !0, null: !0 },
      rules: [{ rules: [] }, i.number, i.string, i.array, i.object],
      post: { rules: [] },
      all: {},
      keywords: {}
    };
  }
  return Ie.getRules = o, Ie;
}
var Fe = {}, vr;
function Qo() {
  if (vr) return Fe;
  vr = 1, Object.defineProperty(Fe, "__esModule", { value: !0 }), Fe.shouldUseRule = Fe.shouldUseGroup = Fe.schemaHasRulesForType = void 0;
  function e({ schema: o, self: i }, r) {
    const s = i.RULES.types[r];
    return s && s !== !0 && t(o, s);
  }
  Fe.schemaHasRulesForType = e;
  function t(o, i) {
    return i.rules.some((r) => n(o, r));
  }
  Fe.shouldUseGroup = t;
  function n(o, i) {
    var r;
    return o[i.keyword] !== void 0 || ((r = i.definition.implements) === null || r === void 0 ? void 0 : r.some((s) => o[s] !== void 0));
  }
  return Fe.shouldUseRule = n, Fe;
}
var $r;
function pn() {
  if ($r) return ue;
  $r = 1, Object.defineProperty(ue, "__esModule", { value: !0 }), ue.reportTypeError = ue.checkDataTypes = ue.checkDataType = ue.coerceAndCheckDataType = ue.getJSONTypes = ue.getSchemaTypes = ue.DataType = void 0;
  const e = /* @__PURE__ */ Zo(), t = /* @__PURE__ */ Qo(), n = /* @__PURE__ */ gn(), o = /* @__PURE__ */ Q(), i = /* @__PURE__ */ ne();
  var r;
  (function(u) {
    u[u.Correct = 0] = "Correct", u[u.Wrong = 1] = "Wrong";
  })(r || (ue.DataType = r = {}));
  function s(u) {
    const h = a(u.type);
    if (h.includes("null")) {
      if (u.nullable === !1)
        throw new Error("type: null contradicts nullable: false");
    } else {
      if (!h.length && u.nullable !== void 0)
        throw new Error('"nullable" cannot be used without "type"');
      u.nullable === !0 && h.push("null");
    }
    return h;
  }
  ue.getSchemaTypes = s;
  function a(u) {
    const h = Array.isArray(u) ? u : u ? [u] : [];
    if (h.every(e.isJSONType))
      return h;
    throw new Error("type must be JSONType or JSONType[]: " + h.join(","));
  }
  ue.getJSONTypes = a;
  function d(u, h) {
    const { gen: S, data: c, opts: l } = u, p = m(h, l.coerceTypes), k = h.length > 0 && !(p.length === 0 && h.length === 1 && (0, t.schemaHasRulesForType)(u, h[0]));
    if (k) {
      const P = _(h, c, l.strictNumbers, r.Wrong);
      S.if(P, () => {
        p.length ? C(u, h, p) : f(u);
      });
    }
    return k;
  }
  ue.coerceAndCheckDataType = d;
  const y = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
  function m(u, h) {
    return h ? u.filter((S) => y.has(S) || h === "array" && S === "array") : [];
  }
  function C(u, h, S) {
    const { gen: c, data: l, opts: p } = u, k = c.let("dataType", (0, o._)`typeof ${l}`), P = c.let("coerced", (0, o._)`undefined`);
    p.coerceTypes === "array" && c.if((0, o._)`${k} == 'object' && Array.isArray(${l}) && ${l}.length == 1`, () => c.assign(l, (0, o._)`${l}[0]`).assign(k, (0, o._)`typeof ${l}`).if(_(h, l, p.strictNumbers), () => c.assign(P, l))), c.if((0, o._)`${P} !== undefined`);
    for (const z of S)
      (y.has(z) || z === "array" && p.coerceTypes === "array") && N(z);
    c.else(), f(u), c.endIf(), c.if((0, o._)`${P} !== undefined`, () => {
      c.assign(l, P), b(u, P);
    });
    function N(z) {
      switch (z) {
        case "string":
          c.elseIf((0, o._)`${k} == "number" || ${k} == "boolean"`).assign(P, (0, o._)`"" + ${l}`).elseIf((0, o._)`${l} === null`).assign(P, (0, o._)`""`);
          return;
        case "number":
          c.elseIf((0, o._)`${k} == "boolean" || ${l} === null
              || (${k} == "string" && ${l} && ${l} == +${l})`).assign(P, (0, o._)`+${l}`);
          return;
        case "integer":
          c.elseIf((0, o._)`${k} === "boolean" || ${l} === null
              || (${k} === "string" && ${l} && ${l} == +${l} && !(${l} % 1))`).assign(P, (0, o._)`+${l}`);
          return;
        case "boolean":
          c.elseIf((0, o._)`${l} === "false" || ${l} === 0 || ${l} === null`).assign(P, !1).elseIf((0, o._)`${l} === "true" || ${l} === 1`).assign(P, !0);
          return;
        case "null":
          c.elseIf((0, o._)`${l} === "" || ${l} === 0 || ${l} === false`), c.assign(P, null);
          return;
        case "array":
          c.elseIf((0, o._)`${k} === "string" || ${k} === "number"
              || ${k} === "boolean" || ${l} === null`).assign(P, (0, o._)`[${l}]`);
      }
    }
  }
  function b({ gen: u, parentData: h, parentDataProperty: S }, c) {
    u.if((0, o._)`${h} !== undefined`, () => u.assign((0, o._)`${h}[${S}]`, c));
  }
  function v(u, h, S, c = r.Correct) {
    const l = c === r.Correct ? o.operators.EQ : o.operators.NEQ;
    let p;
    switch (u) {
      case "null":
        return (0, o._)`${h} ${l} null`;
      case "array":
        p = (0, o._)`Array.isArray(${h})`;
        break;
      case "object":
        p = (0, o._)`${h} && typeof ${h} == "object" && !Array.isArray(${h})`;
        break;
      case "integer":
        p = k((0, o._)`!(${h} % 1) && !isNaN(${h})`);
        break;
      case "number":
        p = k();
        break;
      default:
        return (0, o._)`typeof ${h} ${l} ${u}`;
    }
    return c === r.Correct ? p : (0, o.not)(p);
    function k(P = o.nil) {
      return (0, o.and)((0, o._)`typeof ${h} == "number"`, P, S ? (0, o._)`isFinite(${h})` : o.nil);
    }
  }
  ue.checkDataType = v;
  function _(u, h, S, c) {
    if (u.length === 1)
      return v(u[0], h, S, c);
    let l;
    const p = (0, i.toHash)(u);
    if (p.array && p.object) {
      const k = (0, o._)`typeof ${h} != "object"`;
      l = p.null ? k : (0, o._)`!${h} || ${k}`, delete p.null, delete p.array, delete p.object;
    } else
      l = o.nil;
    p.number && delete p.integer;
    for (const k in p)
      l = (0, o.and)(l, v(k, h, S, c));
    return l;
  }
  ue.checkDataTypes = _;
  const w = {
    message: ({ schema: u }) => `must be ${u}`,
    params: ({ schema: u, schemaValue: h }) => typeof u == "string" ? (0, o._)`{type: ${u}}` : (0, o._)`{type: ${h}}`
  };
  function f(u) {
    const h = g(u);
    (0, n.reportError)(h, w);
  }
  ue.reportTypeError = f;
  function g(u) {
    const { gen: h, data: S, schema: c } = u, l = (0, i.schemaRefOrVal)(u, c, "type");
    return {
      gen: h,
      keyword: "type",
      data: S,
      schema: c.type,
      schemaCode: l,
      schemaValue: l,
      parentSchema: c,
      params: {},
      it: u
    };
  }
  return ue;
}
var rt = {}, br;
function ji() {
  if (br) return rt;
  br = 1, Object.defineProperty(rt, "__esModule", { value: !0 }), rt.assignDefaults = void 0;
  const e = /* @__PURE__ */ Q(), t = /* @__PURE__ */ ne();
  function n(i, r) {
    const { properties: s, items: a } = i.schema;
    if (r === "object" && s)
      for (const d in s)
        o(i, d, s[d].default);
    else r === "array" && Array.isArray(a) && a.forEach((d, y) => o(i, y, d.default));
  }
  rt.assignDefaults = n;
  function o(i, r, s) {
    const { gen: a, compositeRule: d, data: y, opts: m } = i;
    if (s === void 0)
      return;
    const C = (0, e._)`${y}${(0, e.getProperty)(r)}`;
    if (d) {
      (0, t.checkStrictMode)(i, `default is ignored for: ${C}`);
      return;
    }
    let b = (0, e._)`${C} === undefined`;
    m.useDefaults === "empty" && (b = (0, e._)`${b} || ${C} === null || ${C} === ""`), a.if(b, (0, e._)`${C} = ${(0, e.stringify)(s)}`);
  }
  return rt;
}
var we = {}, se = {}, wr;
function xe() {
  if (wr) return se;
  wr = 1, Object.defineProperty(se, "__esModule", { value: !0 }), se.validateUnion = se.validateArray = se.usePattern = se.callValidateCode = se.schemaProperties = se.allSchemaProperties = se.noPropertyInData = se.propertyInData = se.isOwnProperty = se.hasPropFunc = se.reportMissingProp = se.checkMissingProp = se.checkReportMissingProp = void 0;
  const e = /* @__PURE__ */ Q(), t = /* @__PURE__ */ ne(), n = /* @__PURE__ */ ke(), o = /* @__PURE__ */ ne();
  function i(u, h) {
    const { gen: S, data: c, it: l } = u;
    S.if(m(S, c, h, l.opts.ownProperties), () => {
      u.setParams({ missingProperty: (0, e._)`${h}` }, !0), u.error();
    });
  }
  se.checkReportMissingProp = i;
  function r({ gen: u, data: h, it: { opts: S } }, c, l) {
    return (0, e.or)(...c.map((p) => (0, e.and)(m(u, h, p, S.ownProperties), (0, e._)`${l} = ${p}`)));
  }
  se.checkMissingProp = r;
  function s(u, h) {
    u.setParams({ missingProperty: h }, !0), u.error();
  }
  se.reportMissingProp = s;
  function a(u) {
    return u.scopeValue("func", {
      // eslint-disable-next-line @typescript-eslint/unbound-method
      ref: Object.prototype.hasOwnProperty,
      code: (0, e._)`Object.prototype.hasOwnProperty`
    });
  }
  se.hasPropFunc = a;
  function d(u, h, S) {
    return (0, e._)`${a(u)}.call(${h}, ${S})`;
  }
  se.isOwnProperty = d;
  function y(u, h, S, c) {
    const l = (0, e._)`${h}${(0, e.getProperty)(S)} !== undefined`;
    return c ? (0, e._)`${l} && ${d(u, h, S)}` : l;
  }
  se.propertyInData = y;
  function m(u, h, S, c) {
    const l = (0, e._)`${h}${(0, e.getProperty)(S)} === undefined`;
    return c ? (0, e.or)(l, (0, e.not)(d(u, h, S))) : l;
  }
  se.noPropertyInData = m;
  function C(u) {
    return u ? Object.keys(u).filter((h) => h !== "__proto__") : [];
  }
  se.allSchemaProperties = C;
  function b(u, h) {
    return C(h).filter((S) => !(0, t.alwaysValidSchema)(u, h[S]));
  }
  se.schemaProperties = b;
  function v({ schemaCode: u, data: h, it: { gen: S, topSchemaRef: c, schemaPath: l, errorPath: p }, it: k }, P, N, z) {
    const A = z ? (0, e._)`${u}, ${h}, ${c}${l}` : h, T = [
      [n.default.instancePath, (0, e.strConcat)(n.default.instancePath, p)],
      [n.default.parentData, k.parentData],
      [n.default.parentDataProperty, k.parentDataProperty],
      [n.default.rootData, n.default.rootData]
    ];
    k.opts.dynamicRef && T.push([n.default.dynamicAnchors, n.default.dynamicAnchors]);
    const J = (0, e._)`${A}, ${S.object(...T)}`;
    return N !== e.nil ? (0, e._)`${P}.call(${N}, ${J})` : (0, e._)`${P}(${J})`;
  }
  se.callValidateCode = v;
  const _ = (0, e._)`new RegExp`;
  function w({ gen: u, it: { opts: h } }, S) {
    const c = h.unicodeRegExp ? "u" : "", { regExp: l } = h.code, p = l(S, c);
    return u.scopeValue("pattern", {
      key: p.toString(),
      ref: p,
      code: (0, e._)`${l.code === "new RegExp" ? _ : (0, o.useFunc)(u, l)}(${S}, ${c})`
    });
  }
  se.usePattern = w;
  function f(u) {
    const { gen: h, data: S, keyword: c, it: l } = u, p = h.name("valid");
    if (l.allErrors) {
      const P = h.let("valid", !0);
      return k(() => h.assign(P, !1)), P;
    }
    return h.var(p, !0), k(() => h.break()), p;
    function k(P) {
      const N = h.const("len", (0, e._)`${S}.length`);
      h.forRange("i", 0, N, (z) => {
        u.subschema({
          keyword: c,
          dataProp: z,
          dataPropType: t.Type.Num
        }, p), h.if((0, e.not)(p), P);
      });
    }
  }
  se.validateArray = f;
  function g(u) {
    const { gen: h, schema: S, keyword: c, it: l } = u;
    if (!Array.isArray(S))
      throw new Error("ajv implementation error");
    if (S.some((N) => (0, t.alwaysValidSchema)(l, N)) && !l.opts.unevaluated)
      return;
    const k = h.let("valid", !1), P = h.name("_valid");
    h.block(() => S.forEach((N, z) => {
      const A = u.subschema({
        keyword: c,
        schemaProp: z,
        compositeRule: !0
      }, P);
      h.assign(k, (0, e._)`${k} || ${P}`), u.mergeValidEvaluated(A, P) || h.if((0, e.not)(k));
    })), u.result(k, () => u.reset(), () => u.error(!0));
  }
  return se.validateUnion = g, se;
}
var _r;
function Oi() {
  if (_r) return we;
  _r = 1, Object.defineProperty(we, "__esModule", { value: !0 }), we.validateKeywordUsage = we.validSchemaType = we.funcKeywordCode = we.macroKeywordCode = void 0;
  const e = /* @__PURE__ */ Q(), t = /* @__PURE__ */ ke(), n = /* @__PURE__ */ xe(), o = /* @__PURE__ */ gn();
  function i(b, v) {
    const { gen: _, keyword: w, schema: f, parentSchema: g, it: u } = b, h = v.macro.call(u.self, f, g, u), S = y(_, w, h);
    u.opts.validateSchema !== !1 && u.self.validateSchema(h, !0);
    const c = _.name("valid");
    b.subschema({
      schema: h,
      schemaPath: e.nil,
      errSchemaPath: `${u.errSchemaPath}/${w}`,
      topSchemaRef: S,
      compositeRule: !0
    }, c), b.pass(c, () => b.error(!0));
  }
  we.macroKeywordCode = i;
  function r(b, v) {
    var _;
    const { gen: w, keyword: f, schema: g, parentSchema: u, $data: h, it: S } = b;
    d(S, v);
    const c = !h && v.compile ? v.compile.call(S.self, g, u, S) : v.validate, l = y(w, f, c), p = w.let("valid");
    b.block$data(p, k), b.ok((_ = v.valid) !== null && _ !== void 0 ? _ : p);
    function k() {
      if (v.errors === !1)
        z(), v.modifying && s(b), A(() => b.error());
      else {
        const T = v.async ? P() : N();
        v.modifying && s(b), A(() => a(b, T));
      }
    }
    function P() {
      const T = w.let("ruleErrs", null);
      return w.try(() => z((0, e._)`await `), (J) => w.assign(p, !1).if((0, e._)`${J} instanceof ${S.ValidationError}`, () => w.assign(T, (0, e._)`${J}.errors`), () => w.throw(J))), T;
    }
    function N() {
      const T = (0, e._)`${l}.errors`;
      return w.assign(T, null), z(e.nil), T;
    }
    function z(T = v.async ? (0, e._)`await ` : e.nil) {
      const J = S.opts.passContext ? t.default.this : t.default.self, Z = !("compile" in v && !h || v.schema === !1);
      w.assign(p, (0, e._)`${T}${(0, n.callValidateCode)(b, l, J, Z)}`, v.modifying);
    }
    function A(T) {
      var J;
      w.if((0, e.not)((J = v.valid) !== null && J !== void 0 ? J : p), T);
    }
  }
  we.funcKeywordCode = r;
  function s(b) {
    const { gen: v, data: _, it: w } = b;
    v.if(w.parentData, () => v.assign(_, (0, e._)`${w.parentData}[${w.parentDataProperty}]`));
  }
  function a(b, v) {
    const { gen: _ } = b;
    _.if((0, e._)`Array.isArray(${v})`, () => {
      _.assign(t.default.vErrors, (0, e._)`${t.default.vErrors} === null ? ${v} : ${t.default.vErrors}.concat(${v})`).assign(t.default.errors, (0, e._)`${t.default.vErrors}.length`), (0, o.extendErrors)(b);
    }, () => b.error());
  }
  function d({ schemaEnv: b }, v) {
    if (v.async && !b.$async)
      throw new Error("async keyword in sync schema");
  }
  function y(b, v, _) {
    if (_ === void 0)
      throw new Error(`keyword "${v}" failed to compile`);
    return b.scopeValue("keyword", typeof _ == "function" ? { ref: _ } : { ref: _, code: (0, e.stringify)(_) });
  }
  function m(b, v, _ = !1) {
    return !v.length || v.some((w) => w === "array" ? Array.isArray(b) : w === "object" ? b && typeof b == "object" && !Array.isArray(b) : typeof b == w || _ && typeof b > "u");
  }
  we.validSchemaType = m;
  function C({ schema: b, opts: v, self: _, errSchemaPath: w }, f, g) {
    if (Array.isArray(f.keyword) ? !f.keyword.includes(g) : f.keyword !== g)
      throw new Error("ajv implementation error");
    const u = f.dependencies;
    if (u?.some((h) => !Object.prototype.hasOwnProperty.call(b, h)))
      throw new Error(`parent schema must have dependencies of ${g}: ${u.join(",")}`);
    if (f.validateSchema && !f.validateSchema(b[g])) {
      const S = `keyword "${g}" value is invalid at path "${w}": ` + _.errorsText(f.validateSchema.errors);
      if (v.validateSchema === "log")
        _.logger.error(S);
      else
        throw new Error(S);
    }
  }
  return we.validateKeywordUsage = C, we;
}
var Me = {}, Sr;
function Ti() {
  if (Sr) return Me;
  Sr = 1, Object.defineProperty(Me, "__esModule", { value: !0 }), Me.extendSubschemaMode = Me.extendSubschemaData = Me.getSubschema = void 0;
  const e = /* @__PURE__ */ Q(), t = /* @__PURE__ */ ne();
  function n(r, { keyword: s, schemaProp: a, schema: d, schemaPath: y, errSchemaPath: m, topSchemaRef: C }) {
    if (s !== void 0 && d !== void 0)
      throw new Error('both "keyword" and "schema" passed, only one allowed');
    if (s !== void 0) {
      const b = r.schema[s];
      return a === void 0 ? {
        schema: b,
        schemaPath: (0, e._)`${r.schemaPath}${(0, e.getProperty)(s)}`,
        errSchemaPath: `${r.errSchemaPath}/${s}`
      } : {
        schema: b[a],
        schemaPath: (0, e._)`${r.schemaPath}${(0, e.getProperty)(s)}${(0, e.getProperty)(a)}`,
        errSchemaPath: `${r.errSchemaPath}/${s}/${(0, t.escapeFragment)(a)}`
      };
    }
    if (d !== void 0) {
      if (y === void 0 || m === void 0 || C === void 0)
        throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
      return {
        schema: d,
        schemaPath: y,
        topSchemaRef: C,
        errSchemaPath: m
      };
    }
    throw new Error('either "keyword" or "schema" must be passed');
  }
  Me.getSubschema = n;
  function o(r, s, { dataProp: a, dataPropType: d, data: y, dataTypes: m, propertyName: C }) {
    if (y !== void 0 && a !== void 0)
      throw new Error('both "data" and "dataProp" passed, only one allowed');
    const { gen: b } = s;
    if (a !== void 0) {
      const { errorPath: _, dataPathArr: w, opts: f } = s, g = b.let("data", (0, e._)`${s.data}${(0, e.getProperty)(a)}`, !0);
      v(g), r.errorPath = (0, e.str)`${_}${(0, t.getErrorPath)(a, d, f.jsPropertySyntax)}`, r.parentDataProperty = (0, e._)`${a}`, r.dataPathArr = [...w, r.parentDataProperty];
    }
    if (y !== void 0) {
      const _ = y instanceof e.Name ? y : b.let("data", y, !0);
      v(_), C !== void 0 && (r.propertyName = C);
    }
    m && (r.dataTypes = m);
    function v(_) {
      r.data = _, r.dataLevel = s.dataLevel + 1, r.dataTypes = [], s.definedProperties = /* @__PURE__ */ new Set(), r.parentData = s.data, r.dataNames = [...s.dataNames, _];
    }
  }
  Me.extendSubschemaData = o;
  function i(r, { jtdDiscriminator: s, jtdMetadata: a, compositeRule: d, createErrors: y, allErrors: m }) {
    d !== void 0 && (r.compositeRule = d), y !== void 0 && (r.createErrors = y), m !== void 0 && (r.allErrors = m), r.jtdDiscriminator = s, r.jtdMetadata = a;
  }
  return Me.extendSubschemaMode = i, Me;
}
var fe = {}, Rn, Cr;
function ei() {
  return Cr || (Cr = 1, Rn = function e(t, n) {
    if (t === n) return !0;
    if (t && n && typeof t == "object" && typeof n == "object") {
      if (t.constructor !== n.constructor) return !1;
      var o, i, r;
      if (Array.isArray(t)) {
        if (o = t.length, o != n.length) return !1;
        for (i = o; i-- !== 0; )
          if (!e(t[i], n[i])) return !1;
        return !0;
      }
      if (t.constructor === RegExp) return t.source === n.source && t.flags === n.flags;
      if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === n.valueOf();
      if (t.toString !== Object.prototype.toString) return t.toString() === n.toString();
      if (r = Object.keys(t), o = r.length, o !== Object.keys(n).length) return !1;
      for (i = o; i-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(n, r[i])) return !1;
      for (i = o; i-- !== 0; ) {
        var s = r[i];
        if (!e(t[s], n[s])) return !1;
      }
      return !0;
    }
    return t !== t && n !== n;
  }), Rn;
}
var Fn = { exports: {} }, kr;
function zi() {
  if (kr) return Fn.exports;
  kr = 1;
  var e = Fn.exports = function(o, i, r) {
    typeof i == "function" && (r = i, i = {}), r = i.cb || r;
    var s = typeof r == "function" ? r : r.pre || function() {
    }, a = r.post || function() {
    };
    t(i, s, a, o, "", o);
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
  function t(o, i, r, s, a, d, y, m, C, b) {
    if (s && typeof s == "object" && !Array.isArray(s)) {
      i(s, a, d, y, m, C, b);
      for (var v in s) {
        var _ = s[v];
        if (Array.isArray(_)) {
          if (v in e.arrayKeywords)
            for (var w = 0; w < _.length; w++)
              t(o, i, r, _[w], a + "/" + v + "/" + w, d, a, v, s, w);
        } else if (v in e.propsKeywords) {
          if (_ && typeof _ == "object")
            for (var f in _)
              t(o, i, r, _[f], a + "/" + v + "/" + n(f), d, a, v, s, f);
        } else (v in e.keywords || o.allKeys && !(v in e.skipKeywords)) && t(o, i, r, _, a + "/" + v, d, a, v, s);
      }
      r(s, a, d, y, m, C, b);
    }
  }
  function n(o) {
    return o.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  return Fn.exports;
}
var xr;
function yn() {
  if (xr) return fe;
  xr = 1, Object.defineProperty(fe, "__esModule", { value: !0 }), fe.getSchemaRefs = fe.resolveUrl = fe.normalizeId = fe._getFullPath = fe.getFullPath = fe.inlineRef = void 0;
  const e = /* @__PURE__ */ ne(), t = ei(), n = zi(), o = /* @__PURE__ */ new Set([
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
  function i(w, f = !0) {
    return typeof w == "boolean" ? !0 : f === !0 ? !s(w) : f ? a(w) <= f : !1;
  }
  fe.inlineRef = i;
  const r = /* @__PURE__ */ new Set([
    "$ref",
    "$recursiveRef",
    "$recursiveAnchor",
    "$dynamicRef",
    "$dynamicAnchor"
  ]);
  function s(w) {
    for (const f in w) {
      if (r.has(f))
        return !0;
      const g = w[f];
      if (Array.isArray(g) && g.some(s) || typeof g == "object" && s(g))
        return !0;
    }
    return !1;
  }
  function a(w) {
    let f = 0;
    for (const g in w) {
      if (g === "$ref")
        return 1 / 0;
      if (f++, !o.has(g) && (typeof w[g] == "object" && (0, e.eachItem)(w[g], (u) => f += a(u)), f === 1 / 0))
        return 1 / 0;
    }
    return f;
  }
  function d(w, f = "", g) {
    g !== !1 && (f = C(f));
    const u = w.parse(f);
    return y(w, u);
  }
  fe.getFullPath = d;
  function y(w, f) {
    return w.serialize(f).split("#")[0] + "#";
  }
  fe._getFullPath = y;
  const m = /#\/?$/;
  function C(w) {
    return w ? w.replace(m, "") : "";
  }
  fe.normalizeId = C;
  function b(w, f, g) {
    return g = C(g), w.resolve(f, g);
  }
  fe.resolveUrl = b;
  const v = /^[a-z_][-a-z0-9._]*$/i;
  function _(w, f) {
    if (typeof w == "boolean")
      return {};
    const { schemaId: g, uriResolver: u } = this.opts, h = C(w[g] || f), S = { "": h }, c = d(u, h, !1), l = {}, p = /* @__PURE__ */ new Set();
    return n(w, { allKeys: !0 }, (N, z, A, T) => {
      if (T === void 0)
        return;
      const J = c + z;
      let Z = S[T];
      typeof N[g] == "string" && (Z = L.call(this, N[g])), H.call(this, N.$anchor), H.call(this, N.$dynamicAnchor), S[z] = Z;
      function L(U) {
        const Y = this.opts.uriResolver.resolve;
        if (U = C(Z ? Y(Z, U) : U), p.has(U))
          throw P(U);
        p.add(U);
        let V = this.refs[U];
        return typeof V == "string" && (V = this.refs[V]), typeof V == "object" ? k(N, V.schema, U) : U !== C(J) && (U[0] === "#" ? (k(N, l[U], U), l[U] = N) : this.refs[U] = J), U;
      }
      function H(U) {
        if (typeof U == "string") {
          if (!v.test(U))
            throw new Error(`invalid anchor "${U}"`);
          L.call(this, `#${U}`);
        }
      }
    }), l;
    function k(N, z, A) {
      if (z !== void 0 && !t(N, z))
        throw P(A);
    }
    function P(N) {
      return new Error(`reference "${N}" resolves to more than one schema`);
    }
  }
  return fe.getSchemaRefs = _, fe;
}
var Er;
function vn() {
  if (Er) return Re;
  Er = 1, Object.defineProperty(Re, "__esModule", { value: !0 }), Re.getData = Re.KeywordCxt = Re.validateFunctionCode = void 0;
  const e = /* @__PURE__ */ Ni(), t = /* @__PURE__ */ pn(), n = /* @__PURE__ */ Qo(), o = /* @__PURE__ */ pn(), i = /* @__PURE__ */ ji(), r = /* @__PURE__ */ Oi(), s = /* @__PURE__ */ Ti(), a = /* @__PURE__ */ Q(), d = /* @__PURE__ */ ke(), y = /* @__PURE__ */ yn(), m = /* @__PURE__ */ ne(), C = /* @__PURE__ */ gn();
  function b(F) {
    if (c(F) && (p(F), S(F))) {
      f(F);
      return;
    }
    v(F, () => (0, e.topBoolOrEmptySchema)(F));
  }
  Re.validateFunctionCode = b;
  function v({ gen: F, validateName: O, schema: B, schemaEnv: K, opts: X }, te) {
    X.code.es5 ? F.func(O, (0, a._)`${d.default.data}, ${d.default.valCxt}`, K.$async, () => {
      F.code((0, a._)`"use strict"; ${u(B, X)}`), w(F, X), F.code(te);
    }) : F.func(O, (0, a._)`${d.default.data}, ${_(X)}`, K.$async, () => F.code(u(B, X)).code(te));
  }
  function _(F) {
    return (0, a._)`{${d.default.instancePath}="", ${d.default.parentData}, ${d.default.parentDataProperty}, ${d.default.rootData}=${d.default.data}${F.dynamicRef ? (0, a._)`, ${d.default.dynamicAnchors}={}` : a.nil}}={}`;
  }
  function w(F, O) {
    F.if(d.default.valCxt, () => {
      F.var(d.default.instancePath, (0, a._)`${d.default.valCxt}.${d.default.instancePath}`), F.var(d.default.parentData, (0, a._)`${d.default.valCxt}.${d.default.parentData}`), F.var(d.default.parentDataProperty, (0, a._)`${d.default.valCxt}.${d.default.parentDataProperty}`), F.var(d.default.rootData, (0, a._)`${d.default.valCxt}.${d.default.rootData}`), O.dynamicRef && F.var(d.default.dynamicAnchors, (0, a._)`${d.default.valCxt}.${d.default.dynamicAnchors}`);
    }, () => {
      F.var(d.default.instancePath, (0, a._)`""`), F.var(d.default.parentData, (0, a._)`undefined`), F.var(d.default.parentDataProperty, (0, a._)`undefined`), F.var(d.default.rootData, d.default.data), O.dynamicRef && F.var(d.default.dynamicAnchors, (0, a._)`{}`);
    });
  }
  function f(F) {
    const { schema: O, opts: B, gen: K } = F;
    v(F, () => {
      B.$comment && O.$comment && T(F), N(F), K.let(d.default.vErrors, null), K.let(d.default.errors, 0), B.unevaluated && g(F), k(F), J(F);
    });
  }
  function g(F) {
    const { gen: O, validateName: B } = F;
    F.evaluated = O.const("evaluated", (0, a._)`${B}.evaluated`), O.if((0, a._)`${F.evaluated}.dynamicProps`, () => O.assign((0, a._)`${F.evaluated}.props`, (0, a._)`undefined`)), O.if((0, a._)`${F.evaluated}.dynamicItems`, () => O.assign((0, a._)`${F.evaluated}.items`, (0, a._)`undefined`));
  }
  function u(F, O) {
    const B = typeof F == "object" && F[O.schemaId];
    return B && (O.code.source || O.code.process) ? (0, a._)`/*# sourceURL=${B} */` : a.nil;
  }
  function h(F, O) {
    if (c(F) && (p(F), S(F))) {
      l(F, O);
      return;
    }
    (0, e.boolOrEmptySchema)(F, O);
  }
  function S({ schema: F, self: O }) {
    if (typeof F == "boolean")
      return !F;
    for (const B in F)
      if (O.RULES.all[B])
        return !0;
    return !1;
  }
  function c(F) {
    return typeof F.schema != "boolean";
  }
  function l(F, O) {
    const { schema: B, gen: K, opts: X } = F;
    X.$comment && B.$comment && T(F), z(F), A(F);
    const te = K.const("_errs", d.default.errors);
    k(F, te), K.var(O, (0, a._)`${te} === ${d.default.errors}`);
  }
  function p(F) {
    (0, m.checkUnknownRules)(F), P(F);
  }
  function k(F, O) {
    if (F.opts.jtd)
      return L(F, [], !1, O);
    const B = (0, t.getSchemaTypes)(F.schema), K = (0, t.coerceAndCheckDataType)(F, B);
    L(F, B, !K, O);
  }
  function P(F) {
    const { schema: O, errSchemaPath: B, opts: K, self: X } = F;
    O.$ref && K.ignoreKeywordsWithRef && (0, m.schemaHasRulesButRef)(O, X.RULES) && X.logger.warn(`$ref: keywords ignored in schema at path "${B}"`);
  }
  function N(F) {
    const { schema: O, opts: B } = F;
    O.default !== void 0 && B.useDefaults && B.strictSchema && (0, m.checkStrictMode)(F, "default is ignored in the schema root");
  }
  function z(F) {
    const O = F.schema[F.opts.schemaId];
    O && (F.baseId = (0, y.resolveUrl)(F.opts.uriResolver, F.baseId, O));
  }
  function A(F) {
    if (F.schema.$async && !F.schemaEnv.$async)
      throw new Error("async schema in sync schema");
  }
  function T({ gen: F, schemaEnv: O, schema: B, errSchemaPath: K, opts: X }) {
    const te = B.$comment;
    if (X.$comment === !0)
      F.code((0, a._)`${d.default.self}.logger.log(${te})`);
    else if (typeof X.$comment == "function") {
      const le = (0, a.str)`${K}/$comment`, be = F.scopeValue("root", { ref: O.root });
      F.code((0, a._)`${d.default.self}.opts.$comment(${te}, ${le}, ${be}.schema)`);
    }
  }
  function J(F) {
    const { gen: O, schemaEnv: B, validateName: K, ValidationError: X, opts: te } = F;
    B.$async ? O.if((0, a._)`${d.default.errors} === 0`, () => O.return(d.default.data), () => O.throw((0, a._)`new ${X}(${d.default.vErrors})`)) : (O.assign((0, a._)`${K}.errors`, d.default.vErrors), te.unevaluated && Z(F), O.return((0, a._)`${d.default.errors} === 0`));
  }
  function Z({ gen: F, evaluated: O, props: B, items: K }) {
    B instanceof a.Name && F.assign((0, a._)`${O}.props`, B), K instanceof a.Name && F.assign((0, a._)`${O}.items`, K);
  }
  function L(F, O, B, K) {
    const { gen: X, schema: te, data: le, allErrors: be, opts: he, self: me } = F, { RULES: de } = me;
    if (te.$ref && (he.ignoreKeywordsWithRef || !(0, m.schemaHasRulesButRef)(te, de))) {
      X.block(() => G(F, "$ref", de.all.$ref.definition));
      return;
    }
    he.jtd || U(F, O), X.block(() => {
      for (const ve of de.rules)
        Ue(ve);
      Ue(de.post);
    });
    function Ue(ve) {
      (0, n.shouldUseGroup)(te, ve) && (ve.type ? (X.if((0, o.checkDataType)(ve.type, le, he.strictNumbers)), H(F, ve), O.length === 1 && O[0] === ve.type && B && (X.else(), (0, o.reportTypeError)(F)), X.endIf()) : H(F, ve), be || X.if((0, a._)`${d.default.errors} === ${K || 0}`));
    }
  }
  function H(F, O) {
    const { gen: B, schema: K, opts: { useDefaults: X } } = F;
    X && (0, i.assignDefaults)(F, O.type), B.block(() => {
      for (const te of O.rules)
        (0, n.shouldUseRule)(K, te) && G(F, te.keyword, te.definition, O.type);
    });
  }
  function U(F, O) {
    F.schemaEnv.meta || !F.opts.strictTypes || (Y(F, O), F.opts.allowUnionTypes || V(F, O), R(F, F.dataTypes));
  }
  function Y(F, O) {
    if (O.length) {
      if (!F.dataTypes.length) {
        F.dataTypes = O;
        return;
      }
      O.forEach((B) => {
        M(F.dataTypes, B) || x(F, `type "${B}" not allowed by context "${F.dataTypes.join(",")}"`);
      }), $(F, O);
    }
  }
  function V(F, O) {
    O.length > 1 && !(O.length === 2 && O.includes("null")) && x(F, "use allowUnionTypes to allow union type keyword");
  }
  function R(F, O) {
    const B = F.self.RULES.all;
    for (const K in B) {
      const X = B[K];
      if (typeof X == "object" && (0, n.shouldUseRule)(F.schema, X)) {
        const { type: te } = X.definition;
        te.length && !te.some((le) => q(O, le)) && x(F, `missing type "${te.join(",")}" for keyword "${K}"`);
      }
    }
  }
  function q(F, O) {
    return F.includes(O) || O === "number" && F.includes("integer");
  }
  function M(F, O) {
    return F.includes(O) || O === "integer" && F.includes("number");
  }
  function $(F, O) {
    const B = [];
    for (const K of F.dataTypes)
      M(O, K) ? B.push(K) : O.includes("integer") && K === "number" && B.push("integer");
    F.dataTypes = B;
  }
  function x(F, O) {
    const B = F.schemaEnv.baseId + F.errSchemaPath;
    O += ` at "${B}" (strictTypes)`, (0, m.checkStrictMode)(F, O, F.opts.strictTypes);
  }
  class I {
    constructor(O, B, K) {
      if ((0, r.validateKeywordUsage)(O, B, K), this.gen = O.gen, this.allErrors = O.allErrors, this.keyword = K, this.data = O.data, this.schema = O.schema[K], this.$data = B.$data && O.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, m.schemaRefOrVal)(O, this.schema, K, this.$data), this.schemaType = B.schemaType, this.parentSchema = O.schema, this.params = {}, this.it = O, this.def = B, this.$data)
        this.schemaCode = O.gen.const("vSchema", re(this.$data, O));
      else if (this.schemaCode = this.schemaValue, !(0, r.validSchemaType)(this.schema, B.schemaType, B.allowUndefined))
        throw new Error(`${K} value must be ${JSON.stringify(B.schemaType)}`);
      ("code" in B ? B.trackErrors : B.errors !== !1) && (this.errsCount = O.gen.const("_errs", d.default.errors));
    }
    result(O, B, K) {
      this.failResult((0, a.not)(O), B, K);
    }
    failResult(O, B, K) {
      this.gen.if(O), K ? K() : this.error(), B ? (this.gen.else(), B(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    pass(O, B) {
      this.failResult((0, a.not)(O), void 0, B);
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
      const { schemaCode: B } = this;
      this.fail((0, a._)`${B} !== undefined && (${(0, a.or)(this.invalid$data(), O)})`);
    }
    error(O, B, K) {
      if (B) {
        this.setParams(B), this._error(O, K), this.setParams({});
        return;
      }
      this._error(O, K);
    }
    _error(O, B) {
      (O ? C.reportExtraError : C.reportError)(this, this.def.error, B);
    }
    $dataError() {
      (0, C.reportError)(this, this.def.$dataError || C.keyword$DataError);
    }
    reset() {
      if (this.errsCount === void 0)
        throw new Error('add "trackErrors" to keyword definition');
      (0, C.resetErrorsCount)(this.gen, this.errsCount);
    }
    ok(O) {
      this.allErrors || this.gen.if(O);
    }
    setParams(O, B) {
      B ? Object.assign(this.params, O) : this.params = O;
    }
    block$data(O, B, K = a.nil) {
      this.gen.block(() => {
        this.check$data(O, K), B();
      });
    }
    check$data(O = a.nil, B = a.nil) {
      if (!this.$data)
        return;
      const { gen: K, schemaCode: X, schemaType: te, def: le } = this;
      K.if((0, a.or)((0, a._)`${X} === undefined`, B)), O !== a.nil && K.assign(O, !0), (te.length || le.validateSchema) && (K.elseIf(this.invalid$data()), this.$dataError(), O !== a.nil && K.assign(O, !1)), K.else();
    }
    invalid$data() {
      const { gen: O, schemaCode: B, schemaType: K, def: X, it: te } = this;
      return (0, a.or)(le(), be());
      function le() {
        if (K.length) {
          if (!(B instanceof a.Name))
            throw new Error("ajv implementation error");
          const he = Array.isArray(K) ? K : [K];
          return (0, a._)`${(0, o.checkDataTypes)(he, B, te.opts.strictNumbers, o.DataType.Wrong)}`;
        }
        return a.nil;
      }
      function be() {
        if (X.validateSchema) {
          const he = O.scopeValue("validate$data", { ref: X.validateSchema });
          return (0, a._)`!${he}(${B})`;
        }
        return a.nil;
      }
    }
    subschema(O, B) {
      const K = (0, s.getSubschema)(this.it, O);
      (0, s.extendSubschemaData)(K, this.it, O), (0, s.extendSubschemaMode)(K, O);
      const X = { ...this.it, ...K, items: void 0, props: void 0 };
      return h(X, B), X;
    }
    mergeEvaluated(O, B) {
      const { it: K, gen: X } = this;
      K.opts.unevaluated && (K.props !== !0 && O.props !== void 0 && (K.props = m.mergeEvaluated.props(X, O.props, K.props, B)), K.items !== !0 && O.items !== void 0 && (K.items = m.mergeEvaluated.items(X, O.items, K.items, B)));
    }
    mergeValidEvaluated(O, B) {
      const { it: K, gen: X } = this;
      if (K.opts.unevaluated && (K.props !== !0 || K.items !== !0))
        return X.if(B, () => this.mergeEvaluated(O, a.Name)), !0;
    }
  }
  Re.KeywordCxt = I;
  function G(F, O, B, K) {
    const X = new I(F, B, O);
    "code" in B ? B.code(X, K) : X.$data && B.validate ? (0, r.funcKeywordCode)(X, B) : "macro" in B ? (0, r.macroKeywordCode)(X, B) : (B.compile || B.validate) && (0, r.funcKeywordCode)(X, B);
  }
  const W = /^\/(?:[^~]|~0|~1)*$/, oe = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function re(F, { dataLevel: O, dataNames: B, dataPathArr: K }) {
    let X, te;
    if (F === "")
      return d.default.rootData;
    if (F[0] === "/") {
      if (!W.test(F))
        throw new Error(`Invalid JSON-pointer: ${F}`);
      X = F, te = d.default.rootData;
    } else {
      const me = oe.exec(F);
      if (!me)
        throw new Error(`Invalid JSON-pointer: ${F}`);
      const de = +me[1];
      if (X = me[2], X === "#") {
        if (de >= O)
          throw new Error(he("property/index", de));
        return K[O - de];
      }
      if (de > O)
        throw new Error(he("data", de));
      if (te = B[O - de], !X)
        return te;
    }
    let le = te;
    const be = X.split("/");
    for (const me of be)
      me && (te = (0, a._)`${te}${(0, a.getProperty)((0, m.unescapeJsonPointer)(me))}`, le = (0, a._)`${le} && ${te}`);
    return le;
    function he(me, de) {
      return `Cannot access ${me} ${de} levels up, current level is ${O}`;
    }
  }
  return Re.getData = re, Re;
}
var pt = {}, Pr;
function Kn() {
  if (Pr) return pt;
  Pr = 1, Object.defineProperty(pt, "__esModule", { value: !0 });
  class e extends Error {
    constructor(n) {
      super("validation failed"), this.errors = n, this.ajv = this.validation = !0;
    }
  }
  return pt.default = e, pt;
}
var ht = {}, Ar;
function $n() {
  if (Ar) return ht;
  Ar = 1, Object.defineProperty(ht, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ yn();
  class t extends Error {
    constructor(o, i, r, s) {
      super(s || `can't resolve reference ${r} from id ${i}`), this.missingRef = (0, e.resolveUrl)(o, i, r), this.missingSchema = (0, e.normalizeId)((0, e.getFullPath)(o, this.missingRef));
    }
  }
  return ht.default = t, ht;
}
var ye = {}, Rr;
function bn() {
  if (Rr) return ye;
  Rr = 1, Object.defineProperty(ye, "__esModule", { value: !0 }), ye.resolveSchema = ye.getCompilingSchema = ye.resolveRef = ye.compileSchema = ye.SchemaEnv = void 0;
  const e = /* @__PURE__ */ Q(), t = /* @__PURE__ */ Kn(), n = /* @__PURE__ */ ke(), o = /* @__PURE__ */ yn(), i = /* @__PURE__ */ ne(), r = /* @__PURE__ */ vn();
  class s {
    constructor(g) {
      var u;
      this.refs = {}, this.dynamicAnchors = {};
      let h;
      typeof g.schema == "object" && (h = g.schema), this.schema = g.schema, this.schemaId = g.schemaId, this.root = g.root || this, this.baseId = (u = g.baseId) !== null && u !== void 0 ? u : (0, o.normalizeId)(h?.[g.schemaId || "$id"]), this.schemaPath = g.schemaPath, this.localRefs = g.localRefs, this.meta = g.meta, this.$async = h?.$async, this.refs = {};
    }
  }
  ye.SchemaEnv = s;
  function a(f) {
    const g = m.call(this, f);
    if (g)
      return g;
    const u = (0, o.getFullPath)(this.opts.uriResolver, f.root.baseId), { es5: h, lines: S } = this.opts.code, { ownProperties: c } = this.opts, l = new e.CodeGen(this.scope, { es5: h, lines: S, ownProperties: c });
    let p;
    f.$async && (p = l.scopeValue("Error", {
      ref: t.default,
      code: (0, e._)`require("ajv/dist/runtime/validation_error").default`
    }));
    const k = l.scopeName("validate");
    f.validateName = k;
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
      validateName: k,
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
    let N;
    try {
      this._compilations.add(f), (0, r.validateFunctionCode)(P), l.optimize(this.opts.code.optimize);
      const z = l.toString();
      N = `${l.scopeRefs(n.default.scope)}return ${z}`, this.opts.code.process && (N = this.opts.code.process(N, f));
      const T = new Function(`${n.default.self}`, `${n.default.scope}`, N)(this, this.scope.get());
      if (this.scope.value(k, { ref: T }), T.errors = null, T.schema = f.schema, T.schemaEnv = f, f.$async && (T.$async = !0), this.opts.code.source === !0 && (T.source = { validateName: k, validateCode: z, scopeValues: l._values }), this.opts.unevaluated) {
        const { props: J, items: Z } = P;
        T.evaluated = {
          props: J instanceof e.Name ? void 0 : J,
          items: Z instanceof e.Name ? void 0 : Z,
          dynamicProps: J instanceof e.Name,
          dynamicItems: Z instanceof e.Name
        }, T.source && (T.source.evaluated = (0, e.stringify)(T.evaluated));
      }
      return f.validate = T, f;
    } catch (z) {
      throw delete f.validate, delete f.validateName, N && this.logger.error("Error compiling schema, function code:", N), z;
    } finally {
      this._compilations.delete(f);
    }
  }
  ye.compileSchema = a;
  function d(f, g, u) {
    var h;
    u = (0, o.resolveUrl)(this.opts.uriResolver, g, u);
    const S = f.refs[u];
    if (S)
      return S;
    let c = b.call(this, f, u);
    if (c === void 0) {
      const l = (h = f.localRefs) === null || h === void 0 ? void 0 : h[u], { schemaId: p } = this.opts;
      l && (c = new s({ schema: l, schemaId: p, root: f, baseId: g }));
    }
    if (c !== void 0)
      return f.refs[u] = y.call(this, c);
  }
  ye.resolveRef = d;
  function y(f) {
    return (0, o.inlineRef)(f.schema, this.opts.inlineRefs) ? f.schema : f.validate ? f : a.call(this, f);
  }
  function m(f) {
    for (const g of this._compilations)
      if (C(g, f))
        return g;
  }
  ye.getCompilingSchema = m;
  function C(f, g) {
    return f.schema === g.schema && f.root === g.root && f.baseId === g.baseId;
  }
  function b(f, g) {
    let u;
    for (; typeof (u = this.refs[g]) == "string"; )
      g = u;
    return u || this.schemas[g] || v.call(this, f, g);
  }
  function v(f, g) {
    const u = this.opts.uriResolver.parse(g), h = (0, o._getFullPath)(this.opts.uriResolver, u);
    let S = (0, o.getFullPath)(this.opts.uriResolver, f.baseId, void 0);
    if (Object.keys(f.schema).length > 0 && h === S)
      return w.call(this, u, f);
    const c = (0, o.normalizeId)(h), l = this.refs[c] || this.schemas[c];
    if (typeof l == "string") {
      const p = v.call(this, f, l);
      return typeof p?.schema != "object" ? void 0 : w.call(this, u, p);
    }
    if (typeof l?.schema == "object") {
      if (l.validate || a.call(this, l), c === (0, o.normalizeId)(g)) {
        const { schema: p } = l, { schemaId: k } = this.opts, P = p[k];
        return P && (S = (0, o.resolveUrl)(this.opts.uriResolver, S, P)), new s({ schema: p, schemaId: k, root: f, baseId: S });
      }
      return w.call(this, u, l);
    }
  }
  ye.resolveSchema = v;
  const _ = /* @__PURE__ */ new Set([
    "properties",
    "patternProperties",
    "enum",
    "dependencies",
    "definitions"
  ]);
  function w(f, { baseId: g, schema: u, root: h }) {
    var S;
    if (((S = f.fragment) === null || S === void 0 ? void 0 : S[0]) !== "/")
      return;
    for (const p of f.fragment.slice(1).split("/")) {
      if (typeof u == "boolean")
        return;
      const k = u[(0, i.unescapeFragment)(p)];
      if (k === void 0)
        return;
      u = k;
      const P = typeof u == "object" && u[this.opts.schemaId];
      !_.has(p) && P && (g = (0, o.resolveUrl)(this.opts.uriResolver, g, P));
    }
    let c;
    if (typeof u != "boolean" && u.$ref && !(0, i.schemaHasRulesButRef)(u, this.RULES)) {
      const p = (0, o.resolveUrl)(this.opts.uriResolver, g, u.$ref);
      c = v.call(this, h, p);
    }
    const { schemaId: l } = this.opts;
    if (c = c || new s({ schema: u, schemaId: l, root: h, baseId: g }), c.schema !== c.root.schema)
      return c;
  }
  return ye;
}
const Ii = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", qi = "Meta-schema for $data reference (JSON AnySchema extension proposal)", Di = "object", Vi = ["$data"], Bi = { $data: { type: "string", anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] } }, Li = !1, Ui = {
  $id: Ii,
  description: qi,
  type: Di,
  required: Vi,
  properties: Bi,
  additionalProperties: Li
};
var mt = {}, ot = { exports: {} }, Mn, Fr;
function ti() {
  if (Fr) return Mn;
  Fr = 1;
  const e = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu), t = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u), n = RegExp.prototype.test.bind(/^[\da-f]{2}$/iu), o = RegExp.prototype.test.bind(/^[\da-z\-._~]$/iu), i = RegExp.prototype.test.bind(/^[\da-z\-._~!$&'()*+,;=:@/]$/iu);
  function r(c) {
    let l = "", p = 0, k = 0;
    for (k = 0; k < c.length; k++)
      if (p = c[k].charCodeAt(0), p !== 48) {
        if (!(p >= 48 && p <= 57 || p >= 65 && p <= 70 || p >= 97 && p <= 102))
          return "";
        l += c[k];
        break;
      }
    for (k += 1; k < c.length; k++) {
      if (p = c[k].charCodeAt(0), !(p >= 48 && p <= 57 || p >= 65 && p <= 70 || p >= 97 && p <= 102))
        return "";
      l += c[k];
    }
    return l;
  }
  const s = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
  function a(c) {
    return c.length = 0, !0;
  }
  function d(c, l, p) {
    if (c.length) {
      const k = r(c);
      if (k !== "")
        l.push(k);
      else
        return p.error = !0, !1;
      c.length = 0;
    }
    return !0;
  }
  function y(c) {
    let l = 0;
    const p = { error: !1, address: "", zone: "" }, k = [], P = [];
    let N = !1, z = !1, A = d;
    for (let T = 0; T < c.length; T++) {
      const J = c[T];
      if (!(J === "[" || J === "]"))
        if (J === ":") {
          if (N === !0 && (z = !0), !A(P, k, p))
            break;
          if (++l > 7) {
            p.error = !0;
            break;
          }
          T > 0 && c[T - 1] === ":" && (N = !0), k.push(":");
          continue;
        } else if (J === "%") {
          if (!A(P, k, p))
            break;
          A = a;
        } else {
          P.push(J);
          continue;
        }
    }
    return P.length && (A === a ? p.zone = P.join("") : z ? k.push(P.join("")) : k.push(r(P))), p.address = k.join(""), p;
  }
  function m(c) {
    if (C(c, ":") < 2)
      return { host: c, isIPV6: !1 };
    const l = y(c);
    if (l.error)
      return { host: c, isIPV6: !1 };
    {
      let p = l.address, k = l.address;
      return l.zone && (p += "%" + l.zone, k += "%25" + l.zone), { host: p, isIPV6: !0, escapedHost: k };
    }
  }
  function C(c, l) {
    let p = 0;
    for (let k = 0; k < c.length; k++)
      c[k] === l && p++;
    return p;
  }
  function b(c) {
    let l = c;
    const p = [];
    let k = -1, P = 0;
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
      if ((k = l.indexOf("/", 1)) === -1) {
        p.push(l);
        break;
      } else
        p.push(l.slice(0, k)), l = l.slice(k);
    }
    return p.join("");
  }
  const v = { "@": "%40", "/": "%2F", "?": "%3F", "#": "%23", ":": "%3A" }, _ = /[@/?#:]/g, w = /[@/?#]/g;
  function f(c, l) {
    const p = l ? w : _;
    return p.lastIndex = 0, c.replace(p, (k) => v[k]);
  }
  function g(c, l = !1) {
    if (c.indexOf("%") === -1)
      return c;
    let p = "";
    for (let k = 0; k < c.length; k++) {
      if (c[k] === "%" && k + 2 < c.length) {
        const P = c.slice(k + 1, k + 3);
        if (n(P)) {
          const N = P.toUpperCase(), z = String.fromCharCode(parseInt(N, 16));
          l && o(z) ? p += z : p += "%" + N, k += 2;
          continue;
        }
      }
      p += c[k];
    }
    return p;
  }
  function u(c) {
    let l = "";
    for (let p = 0; p < c.length; p++) {
      if (c[p] === "%" && p + 2 < c.length) {
        const k = c.slice(p + 1, p + 3);
        if (n(k)) {
          const P = k.toUpperCase(), N = String.fromCharCode(parseInt(P, 16));
          N !== "." && o(N) ? l += N : l += "%" + P, p += 2;
          continue;
        }
      }
      i(c[p]) ? l += c[p] : l += escape(c[p]);
    }
    return l;
  }
  function h(c) {
    let l = "";
    for (let p = 0; p < c.length; p++) {
      if (c[p] === "%" && p + 2 < c.length) {
        const k = c.slice(p + 1, p + 3);
        if (n(k)) {
          l += "%" + k.toUpperCase(), p += 2;
          continue;
        }
      }
      l += escape(c[p]);
    }
    return l;
  }
  function S(c) {
    const l = [];
    if (c.userinfo !== void 0 && (l.push(c.userinfo), l.push("@")), c.host !== void 0) {
      let p = unescape(c.host);
      if (!t(p)) {
        const k = m(p);
        k.isIPV6 === !0 ? p = `[${k.escapedHost}]` : p = f(p, !1);
      }
      l.push(p);
    }
    return (typeof c.port == "number" || typeof c.port == "string") && (l.push(":"), l.push(String(c.port))), l.length ? l.join("") : void 0;
  }
  return Mn = {
    nonSimpleDomain: s,
    recomposeAuthority: S,
    reescapeHostDelimiters: f,
    normalizePercentEncoding: g,
    normalizePathEncoding: u,
    escapePreservingEscapes: h,
    removeDotSegments: b,
    isIPv4: t,
    isUUID: e,
    normalizeIPv6: m,
    stringArrayToHexStripped: r
  }, Mn;
}
var Nn, Mr;
function Ki() {
  if (Mr) return Nn;
  Mr = 1;
  const { isUUID: e } = ti(), t = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu, n = (
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
  function i(c) {
    return c.secure === !0 ? !0 : c.secure === !1 ? !1 : c.scheme ? c.scheme.length === 3 && (c.scheme[0] === "w" || c.scheme[0] === "W") && (c.scheme[1] === "s" || c.scheme[1] === "S") && (c.scheme[2] === "s" || c.scheme[2] === "S") : !1;
  }
  function r(c) {
    return c.host || (c.error = c.error || "HTTP URIs must have a host."), c;
  }
  function s(c) {
    const l = String(c.scheme).toLowerCase() === "https";
    return (c.port === (l ? 443 : 80) || c.port === "") && (c.port = void 0), c.path || (c.path = "/"), c;
  }
  function a(c) {
    return c.secure = i(c), c.resourceName = (c.path || "/") + (c.query ? "?" + c.query : ""), c.path = void 0, c.query = void 0, c;
  }
  function d(c) {
    if ((c.port === (i(c) ? 443 : 80) || c.port === "") && (c.port = void 0), typeof c.secure == "boolean" && (c.scheme = c.secure ? "wss" : "ws", c.secure = void 0), c.resourceName) {
      const [l, p] = c.resourceName.split("?");
      c.path = l && l !== "/" ? l : void 0, c.query = p, c.resourceName = void 0;
    }
    return c.fragment = void 0, c;
  }
  function y(c, l) {
    if (!c.path)
      return c.error = "URN can not be parsed", c;
    const p = c.path.match(t);
    if (p) {
      const k = l.scheme || c.scheme || "urn";
      c.nid = p[1].toLowerCase(), c.nss = p[2];
      const P = `${k}:${l.nid || c.nid}`, N = S(P);
      c.path = void 0, N && (c = N.parse(c, l));
    } else
      c.error = c.error || "URN can not be parsed.";
    return c;
  }
  function m(c, l) {
    if (c.nid === void 0)
      throw new Error("URN without nid cannot be serialized");
    const p = l.scheme || c.scheme || "urn", k = c.nid.toLowerCase(), P = `${p}:${l.nid || k}`, N = S(P);
    N && (c = N.serialize(c, l));
    const z = c, A = c.nss;
    return z.path = `${k || l.nid}:${A}`, l.skipEscape = !0, z;
  }
  function C(c, l) {
    const p = c;
    return p.uuid = p.nss, p.nss = void 0, !l.tolerant && (!p.uuid || !e(p.uuid)) && (p.error = p.error || "UUID is not valid."), p;
  }
  function b(c) {
    const l = c;
    return l.nss = (c.uuid || "").toLowerCase(), l;
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
  ), w = (
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
      domainHost: w.domainHost,
      parse: w.parse,
      serialize: w.serialize
    }
  ), h = (
    /** @type {Record<SchemeName, SchemeHandler>} */
    {
      http: v,
      https: _,
      ws: w,
      wss: f,
      urn: (
        /** @type {SchemeHandler} */
        {
          scheme: "urn",
          parse: y,
          serialize: m,
          skipNormalize: !0
        }
      ),
      "urn:uuid": (
        /** @type {SchemeHandler} */
        {
          scheme: "urn:uuid",
          parse: C,
          serialize: b,
          skipNormalize: !0
        }
      )
    }
  );
  Object.setPrototypeOf(h, null);
  function S(c) {
    return c && (h[
      /** @type {SchemeName} */
      c
    ] || h[
      /** @type {SchemeName} */
      c.toLowerCase()
    ]) || void 0;
  }
  return Nn = {
    wsIsSecure: i,
    SCHEMES: h,
    isValidSchemeName: o,
    getSchemeHandler: S
  }, Nn;
}
var Nr;
function Hi() {
  if (Nr) return ot.exports;
  Nr = 1;
  const { normalizeIPv6: e, removeDotSegments: t, recomposeAuthority: n, normalizePercentEncoding: o, normalizePathEncoding: i, escapePreservingEscapes: r, reescapeHostDelimiters: s, isIPv4: a, nonSimpleDomain: d } = ti(), { SCHEMES: y, getSchemeHandler: m } = Ki();
  function C(P, N) {
    return typeof P == "string" ? P = /** @type {T} */
    c(P, N) : typeof P == "object" && (P = /** @type {T} */
    S(w(P, N), N)), P;
  }
  function b(P, N, z) {
    const A = z ? Object.assign({ scheme: "null" }, z) : { scheme: "null" }, T = v(S(P, A), S(N, A), A, !0);
    return A.skipEscape = !0, w(T, A);
  }
  function v(P, N, z, A) {
    const T = {};
    return A || (P = S(w(P, z), z), N = S(w(N, z), z)), z = z || {}, !z.tolerant && N.scheme ? (T.scheme = N.scheme, T.userinfo = N.userinfo, T.host = N.host, T.port = N.port, T.path = t(N.path || ""), T.query = N.query) : (N.userinfo !== void 0 || N.host !== void 0 || N.port !== void 0 ? (T.userinfo = N.userinfo, T.host = N.host, T.port = N.port, T.path = t(N.path || ""), T.query = N.query) : (N.path ? (N.path[0] === "/" ? T.path = t(N.path) : ((P.userinfo !== void 0 || P.host !== void 0 || P.port !== void 0) && !P.path ? T.path = "/" + N.path : P.path ? T.path = P.path.slice(0, P.path.lastIndexOf("/") + 1) + N.path : T.path = N.path, T.path = t(T.path)), T.query = N.query) : (T.path = P.path, N.query !== void 0 ? T.query = N.query : T.query = P.query), T.userinfo = P.userinfo, T.host = P.host, T.port = P.port), T.scheme = P.scheme), T.fragment = N.fragment, T;
  }
  function _(P, N, z) {
    const A = p(P, z), T = p(N, z);
    return A !== void 0 && T !== void 0 && A.toLowerCase() === T.toLowerCase();
  }
  function w(P, N) {
    const z = {
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
    }, A = Object.assign({}, N), T = [], J = m(A.scheme || z.scheme);
    J && J.serialize && J.serialize(z, A), z.path !== void 0 && (A.skipEscape ? z.path = o(z.path) : (z.path = r(z.path), z.scheme !== void 0 && (z.path = z.path.split("%3A").join(":")))), A.reference !== "suffix" && z.scheme && T.push(z.scheme, ":");
    const Z = n(z);
    if (Z !== void 0 && (A.reference !== "suffix" && T.push("//"), T.push(Z), z.path && z.path[0] !== "/" && T.push("/")), z.path !== void 0) {
      let L = z.path;
      !A.absolutePath && (!J || !J.absolutePath) && (L = t(L)), Z === void 0 && L[0] === "/" && L[1] === "/" && (L = "/%2F" + L.slice(2)), T.push(L);
    }
    return z.query !== void 0 && T.push("?", z.query), z.fragment !== void 0 && T.push("#", z.fragment), T.join("");
  }
  const f = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u, g = /^(?:[^#/:?]+:)?\/\/([^/?#]*)/;
  function u(P, N) {
    if (N[2] !== void 0 && P.path && P.path[0] !== "/")
      return 'URI path must start with "/" when authority is present.';
    if (typeof P.port == "number" && (P.port < 0 || P.port > 65535))
      return "URI port is malformed.";
  }
  function h(P, N) {
    const z = Object.assign({}, N), A = {
      scheme: void 0,
      userinfo: void 0,
      host: "",
      port: void 0,
      path: "",
      query: void 0,
      fragment: void 0
    };
    let T = !1, J = !1;
    z.reference === "suffix" && (z.scheme ? P = z.scheme + ":" + P : P = "//" + P);
    const Z = P.match(g);
    Z !== null && Z[1].indexOf("\\") !== -1 && (A.error = "URI authority must not contain a literal backslash.", T = !0);
    const L = P.match(f);
    if (L) {
      A.scheme = L[1], A.userinfo = L[3], A.host = L[4], A.port = parseInt(L[5], 10), A.path = L[6] || "", A.query = L[7], A.fragment = L[8], isNaN(A.port) && (A.port = L[5]);
      const H = u(A, L);
      if (H !== void 0 && (A.error = A.error || H, T = !0), A.host)
        if (a(A.host) === !1) {
          const V = e(A.host);
          A.host = V.host.toLowerCase(), J = V.isIPV6;
        } else
          J = !0;
      A.scheme === void 0 && A.userinfo === void 0 && A.host === void 0 && A.port === void 0 && A.query === void 0 && !A.path ? A.reference = "same-document" : A.scheme === void 0 ? A.reference = "relative" : A.fragment === void 0 ? A.reference = "absolute" : A.reference = "uri", z.reference && z.reference !== "suffix" && z.reference !== A.reference && (A.error = A.error || "URI is not a " + z.reference + " reference.");
      const U = m(z.scheme || A.scheme);
      if (!z.unicodeSupport && (!U || !U.unicodeSupport) && A.host && (z.domainHost || U && U.domainHost) && J === !1 && d(A.host))
        try {
          A.host = new URL("http://" + A.host).hostname;
        } catch (Y) {
          A.error = A.error || "Host's domain name can not be converted to ASCII: " + Y;
        }
      if ((!U || U && !U.skipNormalize) && (P.indexOf("%") !== -1 && (A.scheme !== void 0 && (A.scheme = unescape(A.scheme)), A.host !== void 0 && (A.host = s(unescape(A.host), J))), A.path && (A.path = i(A.path)), A.fragment))
        try {
          A.fragment = encodeURI(decodeURIComponent(A.fragment));
        } catch {
          A.error = A.error || "URI malformed";
        }
      U && U.parse && U.parse(A, z);
    } else
      A.error = A.error || "URI can not be parsed.";
    return { parsed: A, malformedAuthorityOrPort: T };
  }
  function S(P, N) {
    return h(P, N).parsed;
  }
  function c(P, N) {
    return l(P, N).normalized;
  }
  function l(P, N) {
    const { parsed: z, malformedAuthorityOrPort: A } = h(P, N);
    return {
      normalized: A ? P : w(z, N),
      malformedAuthorityOrPort: A
    };
  }
  function p(P, N) {
    if (typeof P == "string") {
      const { normalized: z, malformedAuthorityOrPort: A } = l(P, N);
      return A ? void 0 : z;
    }
    if (typeof P == "object")
      return w(P, N);
  }
  const k = {
    SCHEMES: y,
    normalize: C,
    resolve: b,
    resolveComponent: v,
    equal: _,
    serialize: w,
    parse: S
  };
  return ot.exports = k, ot.exports.default = k, ot.exports.fastUri = k, ot.exports;
}
var jr;
function Gi() {
  if (jr) return mt;
  jr = 1, Object.defineProperty(mt, "__esModule", { value: !0 });
  const e = Hi();
  return e.code = 'require("ajv/dist/runtime/uri").default', mt.default = e, mt;
}
var Or;
function Ji() {
  return Or || (Or = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = void 0;
    var t = /* @__PURE__ */ vn();
    Object.defineProperty(e, "KeywordCxt", { enumerable: !0, get: function() {
      return t.KeywordCxt;
    } });
    var n = /* @__PURE__ */ Q();
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
    const o = /* @__PURE__ */ Kn(), i = /* @__PURE__ */ $n(), r = /* @__PURE__ */ Zo(), s = /* @__PURE__ */ bn(), a = /* @__PURE__ */ Q(), d = /* @__PURE__ */ yn(), y = /* @__PURE__ */ pn(), m = /* @__PURE__ */ ne(), C = Ui, b = /* @__PURE__ */ Gi(), v = (V, R) => new RegExp(V, R);
    v.code = "new RegExp";
    const _ = ["removeAdditional", "useDefaults", "coerceTypes"], w = /* @__PURE__ */ new Set([
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
    }, g = {
      ignoreKeywordsWithRef: "",
      jsPropertySyntax: "",
      unicode: '"minLength"/"maxLength" account for unicode characters by default.'
    }, u = 200;
    function h(V) {
      var R, q, M, $, x, I, G, W, oe, re, F, O, B, K, X, te, le, be, he, me, de, Ue, ve, _n, Sn;
      const tt = V.strict, Cn = (R = V.code) === null || R === void 0 ? void 0 : R.optimize, sr = Cn === !0 || Cn === void 0 ? 1 : Cn || 0, ar = (M = (q = V.code) === null || q === void 0 ? void 0 : q.regExp) !== null && M !== void 0 ? M : v, vi = ($ = V.uriResolver) !== null && $ !== void 0 ? $ : b.default;
      return {
        strictSchema: (I = (x = V.strictSchema) !== null && x !== void 0 ? x : tt) !== null && I !== void 0 ? I : !0,
        strictNumbers: (W = (G = V.strictNumbers) !== null && G !== void 0 ? G : tt) !== null && W !== void 0 ? W : !0,
        strictTypes: (re = (oe = V.strictTypes) !== null && oe !== void 0 ? oe : tt) !== null && re !== void 0 ? re : "log",
        strictTuples: (O = (F = V.strictTuples) !== null && F !== void 0 ? F : tt) !== null && O !== void 0 ? O : "log",
        strictRequired: (K = (B = V.strictRequired) !== null && B !== void 0 ? B : tt) !== null && K !== void 0 ? K : !1,
        code: V.code ? { ...V.code, optimize: sr, regExp: ar } : { optimize: sr, regExp: ar },
        loopRequired: (X = V.loopRequired) !== null && X !== void 0 ? X : u,
        loopEnum: (te = V.loopEnum) !== null && te !== void 0 ? te : u,
        meta: (le = V.meta) !== null && le !== void 0 ? le : !0,
        messages: (be = V.messages) !== null && be !== void 0 ? be : !0,
        inlineRefs: (he = V.inlineRefs) !== null && he !== void 0 ? he : !0,
        schemaId: (me = V.schemaId) !== null && me !== void 0 ? me : "$id",
        addUsedSchema: (de = V.addUsedSchema) !== null && de !== void 0 ? de : !0,
        validateSchema: (Ue = V.validateSchema) !== null && Ue !== void 0 ? Ue : !0,
        validateFormats: (ve = V.validateFormats) !== null && ve !== void 0 ? ve : !0,
        unicodeRegExp: (_n = V.unicodeRegExp) !== null && _n !== void 0 ? _n : !0,
        int32range: (Sn = V.int32range) !== null && Sn !== void 0 ? Sn : !0,
        uriResolver: vi
      };
    }
    class S {
      constructor(R = {}) {
        this.schemas = {}, this.refs = {}, this.formats = /* @__PURE__ */ Object.create(null), this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), R = this.opts = { ...R, ...h(R) };
        const { es5: q, lines: M } = this.opts.code;
        this.scope = new a.ValueScope({ scope: {}, prefixes: w, es5: q, lines: M }), this.logger = A(R.logger);
        const $ = R.validateFormats;
        R.validateFormats = !1, this.RULES = (0, r.getRules)(), c.call(this, f, R, "NOT SUPPORTED"), c.call(this, g, R, "DEPRECATED", "warn"), this._metaOpts = N.call(this), R.formats && k.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), R.keywords && P.call(this, R.keywords), typeof R.meta == "object" && this.addMetaSchema(R.meta), p.call(this), R.validateFormats = $;
      }
      _addVocabularies() {
        this.addKeyword("$async");
      }
      _addDefaultMetaSchema() {
        const { $data: R, meta: q, schemaId: M } = this.opts;
        let $ = C;
        M === "id" && ($ = { ...C }, $.id = $.$id, delete $.$id), q && R && this.addMetaSchema($, $[M], !1);
      }
      defaultMeta() {
        const { meta: R, schemaId: q } = this.opts;
        return this.opts.defaultMeta = typeof R == "object" ? R[q] || R : void 0;
      }
      validate(R, q) {
        let M;
        if (typeof R == "string") {
          if (M = this.getSchema(R), !M)
            throw new Error(`no schema with key or ref "${R}"`);
        } else
          M = this.compile(R);
        const $ = M(q);
        return "$async" in M || (this.errors = M.errors), $;
      }
      compile(R, q) {
        const M = this._addSchema(R, q);
        return M.validate || this._compileSchemaEnv(M);
      }
      compileAsync(R, q) {
        if (typeof this.opts.loadSchema != "function")
          throw new Error("options.loadSchema should be a function");
        const { loadSchema: M } = this.opts;
        return $.call(this, R, q);
        async function $(re, F) {
          await x.call(this, re.$schema);
          const O = this._addSchema(re, F);
          return O.validate || I.call(this, O);
        }
        async function x(re) {
          re && !this.getSchema(re) && await $.call(this, { $ref: re }, !0);
        }
        async function I(re) {
          try {
            return this._compileSchemaEnv(re);
          } catch (F) {
            if (!(F instanceof i.default))
              throw F;
            return G.call(this, F), await W.call(this, F.missingSchema), I.call(this, re);
          }
        }
        function G({ missingSchema: re, missingRef: F }) {
          if (this.refs[re])
            throw new Error(`AnySchema ${re} is loaded but ${F} cannot be resolved`);
        }
        async function W(re) {
          const F = await oe.call(this, re);
          this.refs[re] || await x.call(this, F.$schema), this.refs[re] || this.addSchema(F, re, q);
        }
        async function oe(re) {
          const F = this._loading[re];
          if (F)
            return F;
          try {
            return await (this._loading[re] = M(re));
          } finally {
            delete this._loading[re];
          }
        }
      }
      // Adds schema to the instance
      addSchema(R, q, M, $ = this.opts.validateSchema) {
        if (Array.isArray(R)) {
          for (const I of R)
            this.addSchema(I, void 0, M, $);
          return this;
        }
        let x;
        if (typeof R == "object") {
          const { schemaId: I } = this.opts;
          if (x = R[I], x !== void 0 && typeof x != "string")
            throw new Error(`schema ${I} must be string`);
        }
        return q = (0, d.normalizeId)(q || x), this._checkUnique(q), this.schemas[q] = this._addSchema(R, M, q, $, !0), this;
      }
      // Add schema that will be used to validate other schemas
      // options in META_IGNORE_OPTIONS are alway set to false
      addMetaSchema(R, q, M = this.opts.validateSchema) {
        return this.addSchema(R, q, !0, M), this;
      }
      //  Validate schema against its meta-schema
      validateSchema(R, q) {
        if (typeof R == "boolean")
          return !0;
        let M;
        if (M = R.$schema, M !== void 0 && typeof M != "string")
          throw new Error("$schema must be a string");
        if (M = M || this.opts.defaultMeta || this.defaultMeta(), !M)
          return this.logger.warn("meta-schema not available"), this.errors = null, !0;
        const $ = this.validate(M, R);
        if (!$ && q) {
          const x = "schema is invalid: " + this.errorsText();
          if (this.opts.validateSchema === "log")
            this.logger.error(x);
          else
            throw new Error(x);
        }
        return $;
      }
      // Get compiled schema by `key` or `ref`.
      // (`key` that was passed to `addSchema` or full schema reference - `schema.$id` or resolved id)
      getSchema(R) {
        let q;
        for (; typeof (q = l.call(this, R)) == "string"; )
          R = q;
        if (q === void 0) {
          const { schemaId: M } = this.opts, $ = new s.SchemaEnv({ schema: {}, schemaId: M });
          if (q = s.resolveSchema.call(this, $, R), !q)
            return;
          this.refs[R] = q;
        }
        return q.validate || this._compileSchemaEnv(q);
      }
      // Remove cached schema(s).
      // If no parameter is passed all schemas but meta-schemas are removed.
      // If RegExp is passed all schemas with key/id matching pattern but meta-schemas are removed.
      // Even if schema is referenced by other schemas it still can be removed as other schemas have local references.
      removeSchema(R) {
        if (R instanceof RegExp)
          return this._removeAllSchemas(this.schemas, R), this._removeAllSchemas(this.refs, R), this;
        switch (typeof R) {
          case "undefined":
            return this._removeAllSchemas(this.schemas), this._removeAllSchemas(this.refs), this._cache.clear(), this;
          case "string": {
            const q = l.call(this, R);
            return typeof q == "object" && this._cache.delete(q.schema), delete this.schemas[R], delete this.refs[R], this;
          }
          case "object": {
            const q = R;
            this._cache.delete(q);
            let M = R[this.opts.schemaId];
            return M && (M = (0, d.normalizeId)(M), delete this.schemas[M], delete this.refs[M]), this;
          }
          default:
            throw new Error("ajv.removeSchema: invalid parameter");
        }
      }
      // add "vocabulary" - a collection of keywords
      addVocabulary(R) {
        for (const q of R)
          this.addKeyword(q);
        return this;
      }
      addKeyword(R, q) {
        let M;
        if (typeof R == "string")
          M = R, typeof q == "object" && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), q.keyword = M);
        else if (typeof R == "object" && q === void 0) {
          if (q = R, M = q.keyword, Array.isArray(M) && !M.length)
            throw new Error("addKeywords: keyword must be string or non-empty array");
        } else
          throw new Error("invalid addKeywords parameters");
        if (J.call(this, M, q), !q)
          return (0, m.eachItem)(M, (x) => Z.call(this, x)), this;
        H.call(this, q);
        const $ = {
          ...q,
          type: (0, y.getJSONTypes)(q.type),
          schemaType: (0, y.getJSONTypes)(q.schemaType)
        };
        return (0, m.eachItem)(M, $.type.length === 0 ? (x) => Z.call(this, x, $) : (x) => $.type.forEach((I) => Z.call(this, x, $, I))), this;
      }
      getKeyword(R) {
        const q = this.RULES.all[R];
        return typeof q == "object" ? q.definition : !!q;
      }
      // Remove keyword
      removeKeyword(R) {
        const { RULES: q } = this;
        delete q.keywords[R], delete q.all[R];
        for (const M of q.rules) {
          const $ = M.rules.findIndex((x) => x.keyword === R);
          $ >= 0 && M.rules.splice($, 1);
        }
        return this;
      }
      // Add format
      addFormat(R, q) {
        return typeof q == "string" && (q = new RegExp(q)), this.formats[R] = q, this;
      }
      errorsText(R = this.errors, { separator: q = ", ", dataVar: M = "data" } = {}) {
        return !R || R.length === 0 ? "No errors" : R.map(($) => `${M}${$.instancePath} ${$.message}`).reduce(($, x) => $ + q + x);
      }
      $dataMetaSchema(R, q) {
        const M = this.RULES.all;
        R = JSON.parse(JSON.stringify(R));
        for (const $ of q) {
          const x = $.split("/").slice(1);
          let I = R;
          for (const G of x)
            I = I[G];
          for (const G in M) {
            const W = M[G];
            if (typeof W != "object")
              continue;
            const { $data: oe } = W.definition, re = I[G];
            oe && re && (I[G] = Y(re));
          }
        }
        return R;
      }
      _removeAllSchemas(R, q) {
        for (const M in R) {
          const $ = R[M];
          (!q || q.test(M)) && (typeof $ == "string" ? delete R[M] : $ && !$.meta && (this._cache.delete($.schema), delete R[M]));
        }
      }
      _addSchema(R, q, M, $ = this.opts.validateSchema, x = this.opts.addUsedSchema) {
        let I;
        const { schemaId: G } = this.opts;
        if (typeof R == "object")
          I = R[G];
        else {
          if (this.opts.jtd)
            throw new Error("schema must be object");
          if (typeof R != "boolean")
            throw new Error("schema must be object or boolean");
        }
        let W = this._cache.get(R);
        if (W !== void 0)
          return W;
        M = (0, d.normalizeId)(I || M);
        const oe = d.getSchemaRefs.call(this, R, M);
        return W = new s.SchemaEnv({ schema: R, schemaId: G, meta: q, baseId: M, localRefs: oe }), this._cache.set(W.schema, W), x && !M.startsWith("#") && (M && this._checkUnique(M), this.refs[M] = W), $ && this.validateSchema(R, !0), W;
      }
      _checkUnique(R) {
        if (this.schemas[R] || this.refs[R])
          throw new Error(`schema with key or id "${R}" already exists`);
      }
      _compileSchemaEnv(R) {
        if (R.meta ? this._compileMetaSchema(R) : s.compileSchema.call(this, R), !R.validate)
          throw new Error("ajv implementation error");
        return R.validate;
      }
      _compileMetaSchema(R) {
        const q = this.opts;
        this.opts = this._metaOpts;
        try {
          s.compileSchema.call(this, R);
        } finally {
          this.opts = q;
        }
      }
    }
    S.ValidationError = o.default, S.MissingRefError = i.default, e.default = S;
    function c(V, R, q, M = "error") {
      for (const $ in V) {
        const x = $;
        x in R && this.logger[M](`${q}: option ${$}. ${V[x]}`);
      }
    }
    function l(V) {
      return V = (0, d.normalizeId)(V), this.schemas[V] || this.refs[V];
    }
    function p() {
      const V = this.opts.schemas;
      if (V)
        if (Array.isArray(V))
          this.addSchema(V);
        else
          for (const R in V)
            this.addSchema(V[R], R);
    }
    function k() {
      for (const V in this.opts.formats) {
        const R = this.opts.formats[V];
        R && this.addFormat(V, R);
      }
    }
    function P(V) {
      if (Array.isArray(V)) {
        this.addVocabulary(V);
        return;
      }
      this.logger.warn("keywords option as map is deprecated, pass array");
      for (const R in V) {
        const q = V[R];
        q.keyword || (q.keyword = R), this.addKeyword(q);
      }
    }
    function N() {
      const V = { ...this.opts };
      for (const R of _)
        delete V[R];
      return V;
    }
    const z = { log() {
    }, warn() {
    }, error() {
    } };
    function A(V) {
      if (V === !1)
        return z;
      if (V === void 0)
        return console;
      if (V.log && V.warn && V.error)
        return V;
      throw new Error("logger must implement log, warn and error methods");
    }
    const T = /^[a-z_$][a-z0-9_$:-]*$/i;
    function J(V, R) {
      const { RULES: q } = this;
      if ((0, m.eachItem)(V, (M) => {
        if (q.keywords[M])
          throw new Error(`Keyword ${M} is already defined`);
        if (!T.test(M))
          throw new Error(`Keyword ${M} has invalid name`);
      }), !!R && R.$data && !("code" in R || "validate" in R))
        throw new Error('$data keyword must have "code" or "validate" function');
    }
    function Z(V, R, q) {
      var M;
      const $ = R?.post;
      if (q && $)
        throw new Error('keyword with "post" flag cannot have "type"');
      const { RULES: x } = this;
      let I = $ ? x.post : x.rules.find(({ type: W }) => W === q);
      if (I || (I = { type: q, rules: [] }, x.rules.push(I)), x.keywords[V] = !0, !R)
        return;
      const G = {
        keyword: V,
        definition: {
          ...R,
          type: (0, y.getJSONTypes)(R.type),
          schemaType: (0, y.getJSONTypes)(R.schemaType)
        }
      };
      R.before ? L.call(this, I, G, R.before) : I.rules.push(G), x.all[V] = G, (M = R.implements) === null || M === void 0 || M.forEach((W) => this.addKeyword(W));
    }
    function L(V, R, q) {
      const M = V.rules.findIndex(($) => $.keyword === q);
      M >= 0 ? V.rules.splice(M, 0, R) : (V.rules.push(R), this.logger.warn(`rule ${q} is not defined`));
    }
    function H(V) {
      let { metaSchema: R } = V;
      R !== void 0 && (V.$data && this.opts.$data && (R = Y(R)), V.validateSchema = this.compile(R, !0));
    }
    const U = {
      $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
    };
    function Y(V) {
      return { anyOf: [V, U] };
    }
  })(kn)), kn;
}
var gt = {}, yt = {}, vt = {}, Tr;
function Wi() {
  if (Tr) return vt;
  Tr = 1, Object.defineProperty(vt, "__esModule", { value: !0 });
  const e = {
    keyword: "id",
    code() {
      throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
    }
  };
  return vt.default = e, vt;
}
var je = {}, zr;
function Hn() {
  if (zr) return je;
  zr = 1, Object.defineProperty(je, "__esModule", { value: !0 }), je.callRef = je.getValidate = void 0;
  const e = /* @__PURE__ */ $n(), t = /* @__PURE__ */ xe(), n = /* @__PURE__ */ Q(), o = /* @__PURE__ */ ke(), i = /* @__PURE__ */ bn(), r = /* @__PURE__ */ ne(), s = {
    keyword: "$ref",
    schemaType: "string",
    code(y) {
      const { gen: m, schema: C, it: b } = y, { baseId: v, schemaEnv: _, validateName: w, opts: f, self: g } = b, { root: u } = _;
      if ((C === "#" || C === "#/") && v === u.baseId)
        return S();
      const h = i.resolveRef.call(g, u, v, C);
      if (h === void 0)
        throw new e.default(b.opts.uriResolver, v, C);
      if (h instanceof i.SchemaEnv)
        return c(h);
      return l(h);
      function S() {
        if (_ === u)
          return d(y, w, _, _.$async);
        const p = m.scopeValue("root", { ref: u });
        return d(y, (0, n._)`${p}.validate`, u, u.$async);
      }
      function c(p) {
        const k = a(y, p);
        d(y, k, p, p.$async);
      }
      function l(p) {
        const k = m.scopeValue("schema", f.code.source === !0 ? { ref: p, code: (0, n.stringify)(p) } : { ref: p }), P = m.name("valid"), N = y.subschema({
          schema: p,
          dataTypes: [],
          schemaPath: n.nil,
          topSchemaRef: k,
          errSchemaPath: C
        }, P);
        y.mergeEvaluated(N), y.ok(P);
      }
    }
  };
  function a(y, m) {
    const { gen: C } = y;
    return m.validate ? C.scopeValue("validate", { ref: m.validate }) : (0, n._)`${C.scopeValue("wrapper", { ref: m })}.validate`;
  }
  je.getValidate = a;
  function d(y, m, C, b) {
    const { gen: v, it: _ } = y, { allErrors: w, schemaEnv: f, opts: g } = _, u = g.passContext ? o.default.this : n.nil;
    b ? h() : S();
    function h() {
      if (!f.$async)
        throw new Error("async schema referenced by sync schema");
      const p = v.let("valid");
      v.try(() => {
        v.code((0, n._)`await ${(0, t.callValidateCode)(y, m, u)}`), l(m), w || v.assign(p, !0);
      }, (k) => {
        v.if((0, n._)`!(${k} instanceof ${_.ValidationError})`, () => v.throw(k)), c(k), w || v.assign(p, !1);
      }), y.ok(p);
    }
    function S() {
      y.result((0, t.callValidateCode)(y, m, u), () => l(m), () => c(m));
    }
    function c(p) {
      const k = (0, n._)`${p}.errors`;
      v.assign(o.default.vErrors, (0, n._)`${o.default.vErrors} === null ? ${k} : ${o.default.vErrors}.concat(${k})`), v.assign(o.default.errors, (0, n._)`${o.default.vErrors}.length`);
    }
    function l(p) {
      var k;
      if (!_.opts.unevaluated)
        return;
      const P = (k = C?.validate) === null || k === void 0 ? void 0 : k.evaluated;
      if (_.props !== !0)
        if (P && !P.dynamicProps)
          P.props !== void 0 && (_.props = r.mergeEvaluated.props(v, P.props, _.props));
        else {
          const N = v.var("props", (0, n._)`${p}.evaluated.props`);
          _.props = r.mergeEvaluated.props(v, N, _.props, n.Name);
        }
      if (_.items !== !0)
        if (P && !P.dynamicItems)
          P.items !== void 0 && (_.items = r.mergeEvaluated.items(v, P.items, _.items));
        else {
          const N = v.var("items", (0, n._)`${p}.evaluated.items`);
          _.items = r.mergeEvaluated.items(v, N, _.items, n.Name);
        }
    }
  }
  return je.callRef = d, je.default = s, je;
}
var Ir;
function Yi() {
  if (Ir) return yt;
  Ir = 1, Object.defineProperty(yt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Wi(), t = /* @__PURE__ */ Hn(), n = [
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
var $t = {}, bt = {}, qr;
function Xi() {
  if (qr) return bt;
  qr = 1, Object.defineProperty(bt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Q(), t = e.operators, n = {
    maximum: { okStr: "<=", ok: t.LTE, fail: t.GT },
    minimum: { okStr: ">=", ok: t.GTE, fail: t.LT },
    exclusiveMaximum: { okStr: "<", ok: t.LT, fail: t.GTE },
    exclusiveMinimum: { okStr: ">", ok: t.GT, fail: t.LTE }
  }, o = {
    message: ({ keyword: r, schemaCode: s }) => (0, e.str)`must be ${n[r].okStr} ${s}`,
    params: ({ keyword: r, schemaCode: s }) => (0, e._)`{comparison: ${n[r].okStr}, limit: ${s}}`
  }, i = {
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
  return bt.default = i, bt;
}
var wt = {}, Dr;
function Zi() {
  if (Dr) return wt;
  Dr = 1, Object.defineProperty(wt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Q(), n = {
    keyword: "multipleOf",
    type: "number",
    schemaType: "number",
    $data: !0,
    error: {
      message: ({ schemaCode: o }) => (0, e.str)`must be multiple of ${o}`,
      params: ({ schemaCode: o }) => (0, e._)`{multipleOf: ${o}}`
    },
    code(o) {
      const { gen: i, data: r, schemaCode: s, it: a } = o, d = a.opts.multipleOfPrecision, y = i.let("res"), m = d ? (0, e._)`Math.abs(Math.round(${y}) - ${y}) > 1e-${d}` : (0, e._)`${y} !== parseInt(${y})`;
      o.fail$data((0, e._)`(${s} === 0 || (${y} = ${r}/${s}, ${m}))`);
    }
  };
  return wt.default = n, wt;
}
var _t = {}, St = {}, Vr;
function Qi() {
  if (Vr) return St;
  Vr = 1, Object.defineProperty(St, "__esModule", { value: !0 });
  function e(t) {
    const n = t.length;
    let o = 0, i = 0, r;
    for (; i < n; )
      o++, r = t.charCodeAt(i++), r >= 55296 && r <= 56319 && i < n && (r = t.charCodeAt(i), (r & 64512) === 56320 && i++);
    return o;
  }
  return St.default = e, e.code = 'require("ajv/dist/runtime/ucs2length").default', St;
}
var Br;
function es() {
  if (Br) return _t;
  Br = 1, Object.defineProperty(_t, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Q(), t = /* @__PURE__ */ ne(), n = /* @__PURE__ */ Qi(), i = {
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
      const { keyword: s, data: a, schemaCode: d, it: y } = r, m = s === "maxLength" ? e.operators.GT : e.operators.LT, C = y.opts.unicode === !1 ? (0, e._)`${a}.length` : (0, e._)`${(0, t.useFunc)(r.gen, n.default)}(${a})`;
      r.fail$data((0, e._)`${C} ${m} ${d}`);
    }
  };
  return _t.default = i, _t;
}
var Ct = {}, Lr;
function ts() {
  if (Lr) return Ct;
  Lr = 1, Object.defineProperty(Ct, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ xe(), t = /* @__PURE__ */ ne(), n = /* @__PURE__ */ Q(), i = {
    keyword: "pattern",
    type: "string",
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: r }) => (0, n.str)`must match pattern "${r}"`,
      params: ({ schemaCode: r }) => (0, n._)`{pattern: ${r}}`
    },
    code(r) {
      const { gen: s, data: a, $data: d, schema: y, schemaCode: m, it: C } = r, b = C.opts.unicodeRegExp ? "u" : "";
      if (d) {
        const { regExp: v } = C.opts.code, _ = v.code === "new RegExp" ? (0, n._)`new RegExp` : (0, t.useFunc)(s, v), w = s.let("valid");
        s.try(() => s.assign(w, (0, n._)`${_}(${m}, ${b}).test(${a})`), () => s.assign(w, !1)), r.fail$data((0, n._)`!${w}`);
      } else {
        const v = (0, e.usePattern)(r, y);
        r.fail$data((0, n._)`!${v}.test(${a})`);
      }
    }
  };
  return Ct.default = i, Ct;
}
var kt = {}, Ur;
function ns() {
  if (Ur) return kt;
  Ur = 1, Object.defineProperty(kt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Q(), n = {
    keyword: ["maxProperties", "minProperties"],
    type: "object",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: o, schemaCode: i }) {
        const r = o === "maxProperties" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${r} than ${i} properties`;
      },
      params: ({ schemaCode: o }) => (0, e._)`{limit: ${o}}`
    },
    code(o) {
      const { keyword: i, data: r, schemaCode: s } = o, a = i === "maxProperties" ? e.operators.GT : e.operators.LT;
      o.fail$data((0, e._)`Object.keys(${r}).length ${a} ${s}`);
    }
  };
  return kt.default = n, kt;
}
var xt = {}, Kr;
function rs() {
  if (Kr) return xt;
  Kr = 1, Object.defineProperty(xt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ xe(), t = /* @__PURE__ */ Q(), n = /* @__PURE__ */ ne(), i = {
    keyword: "required",
    type: "object",
    schemaType: "array",
    $data: !0,
    error: {
      message: ({ params: { missingProperty: r } }) => (0, t.str)`must have required property '${r}'`,
      params: ({ params: { missingProperty: r } }) => (0, t._)`{missingProperty: ${r}}`
    },
    code(r) {
      const { gen: s, schema: a, schemaCode: d, data: y, $data: m, it: C } = r, { opts: b } = C;
      if (!m && a.length === 0)
        return;
      const v = a.length >= b.loopRequired;
      if (C.allErrors ? _() : w(), b.strictRequired) {
        const u = r.parentSchema.properties, { definedProperties: h } = r.it;
        for (const S of a)
          if (u?.[S] === void 0 && !h.has(S)) {
            const c = C.schemaEnv.baseId + C.errSchemaPath, l = `required property "${S}" is not defined at "${c}" (strictRequired)`;
            (0, n.checkStrictMode)(C, l, C.opts.strictRequired);
          }
      }
      function _() {
        if (v || m)
          r.block$data(t.nil, f);
        else
          for (const u of a)
            (0, e.checkReportMissingProp)(r, u);
      }
      function w() {
        const u = s.let("missing");
        if (v || m) {
          const h = s.let("valid", !0);
          r.block$data(h, () => g(u, h)), r.ok(h);
        } else
          s.if((0, e.checkMissingProp)(r, a, u)), (0, e.reportMissingProp)(r, u), s.else();
      }
      function f() {
        s.forOf("prop", d, (u) => {
          r.setParams({ missingProperty: u }), s.if((0, e.noPropertyInData)(s, y, u, b.ownProperties), () => r.error());
        });
      }
      function g(u, h) {
        r.setParams({ missingProperty: u }), s.forOf(u, d, () => {
          s.assign(h, (0, e.propertyInData)(s, y, u, b.ownProperties)), s.if((0, t.not)(h), () => {
            r.error(), s.break();
          });
        }, t.nil);
      }
    }
  };
  return xt.default = i, xt;
}
var Et = {}, Hr;
function os() {
  if (Hr) return Et;
  Hr = 1, Object.defineProperty(Et, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Q(), n = {
    keyword: ["maxItems", "minItems"],
    type: "array",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: o, schemaCode: i }) {
        const r = o === "maxItems" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${r} than ${i} items`;
      },
      params: ({ schemaCode: o }) => (0, e._)`{limit: ${o}}`
    },
    code(o) {
      const { keyword: i, data: r, schemaCode: s } = o, a = i === "maxItems" ? e.operators.GT : e.operators.LT;
      o.fail$data((0, e._)`${r}.length ${a} ${s}`);
    }
  };
  return Et.default = n, Et;
}
var Pt = {}, At = {}, Gr;
function Gn() {
  if (Gr) return At;
  Gr = 1, Object.defineProperty(At, "__esModule", { value: !0 });
  const e = ei();
  return e.code = 'require("ajv/dist/runtime/equal").default', At.default = e, At;
}
var Jr;
function is() {
  if (Jr) return Pt;
  Jr = 1, Object.defineProperty(Pt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ pn(), t = /* @__PURE__ */ Q(), n = /* @__PURE__ */ ne(), o = /* @__PURE__ */ Gn(), r = {
    keyword: "uniqueItems",
    type: "array",
    schemaType: "boolean",
    $data: !0,
    error: {
      message: ({ params: { i: s, j: a } }) => (0, t.str)`must NOT have duplicate items (items ## ${a} and ${s} are identical)`,
      params: ({ params: { i: s, j: a } }) => (0, t._)`{i: ${s}, j: ${a}}`
    },
    code(s) {
      const { gen: a, data: d, $data: y, schema: m, parentSchema: C, schemaCode: b, it: v } = s;
      if (!y && !m)
        return;
      const _ = a.let("valid"), w = C.items ? (0, e.getSchemaTypes)(C.items) : [];
      s.block$data(_, f, (0, t._)`${b} === false`), s.ok(_);
      function f() {
        const S = a.let("i", (0, t._)`${d}.length`), c = a.let("j");
        s.setParams({ i: S, j: c }), a.assign(_, !0), a.if((0, t._)`${S} > 1`, () => (g() ? u : h)(S, c));
      }
      function g() {
        return w.length > 0 && !w.some((S) => S === "object" || S === "array");
      }
      function u(S, c) {
        const l = a.name("item"), p = (0, e.checkDataTypes)(w, l, v.opts.strictNumbers, e.DataType.Wrong), k = a.const("indices", (0, t._)`{}`);
        a.for((0, t._)`;${S}--;`, () => {
          a.let(l, (0, t._)`${d}[${S}]`), a.if(p, (0, t._)`continue`), w.length > 1 && a.if((0, t._)`typeof ${l} == "string"`, (0, t._)`${l} += "_"`), a.if((0, t._)`typeof ${k}[${l}] == "number"`, () => {
            a.assign(c, (0, t._)`${k}[${l}]`), s.error(), a.assign(_, !1).break();
          }).code((0, t._)`${k}[${l}] = ${S}`);
        });
      }
      function h(S, c) {
        const l = (0, n.useFunc)(a, o.default), p = a.name("outer");
        a.label(p).for((0, t._)`;${S}--;`, () => a.for((0, t._)`${c} = ${S}; ${c}--;`, () => a.if((0, t._)`${l}(${d}[${S}], ${d}[${c}])`, () => {
          s.error(), a.assign(_, !1).break(p);
        })));
      }
    }
  };
  return Pt.default = r, Pt;
}
var Rt = {}, Wr;
function ss() {
  if (Wr) return Rt;
  Wr = 1, Object.defineProperty(Rt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Q(), t = /* @__PURE__ */ ne(), n = /* @__PURE__ */ Gn(), i = {
    keyword: "const",
    $data: !0,
    error: {
      message: "must be equal to constant",
      params: ({ schemaCode: r }) => (0, e._)`{allowedValue: ${r}}`
    },
    code(r) {
      const { gen: s, data: a, $data: d, schemaCode: y, schema: m } = r;
      d || m && typeof m == "object" ? r.fail$data((0, e._)`!${(0, t.useFunc)(s, n.default)}(${a}, ${y})`) : r.fail((0, e._)`${m} !== ${a}`);
    }
  };
  return Rt.default = i, Rt;
}
var Ft = {}, Yr;
function as() {
  if (Yr) return Ft;
  Yr = 1, Object.defineProperty(Ft, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Q(), t = /* @__PURE__ */ ne(), n = /* @__PURE__ */ Gn(), i = {
    keyword: "enum",
    schemaType: "array",
    $data: !0,
    error: {
      message: "must be equal to one of the allowed values",
      params: ({ schemaCode: r }) => (0, e._)`{allowedValues: ${r}}`
    },
    code(r) {
      const { gen: s, data: a, $data: d, schema: y, schemaCode: m, it: C } = r;
      if (!d && y.length === 0)
        throw new Error("enum must have non-empty array");
      const b = y.length >= C.opts.loopEnum;
      let v;
      const _ = () => v ?? (v = (0, t.useFunc)(s, n.default));
      let w;
      if (b || d)
        w = s.let("valid"), r.block$data(w, f);
      else {
        if (!Array.isArray(y))
          throw new Error("ajv implementation error");
        const u = s.const("vSchema", m);
        w = (0, e.or)(...y.map((h, S) => g(u, S)));
      }
      r.pass(w);
      function f() {
        s.assign(w, !1), s.forOf("v", m, (u) => s.if((0, e._)`${_()}(${a}, ${u})`, () => s.assign(w, !0).break()));
      }
      function g(u, h) {
        const S = y[h];
        return typeof S == "object" && S !== null ? (0, e._)`${_()}(${a}, ${u}[${h}])` : (0, e._)`${a} === ${S}`;
      }
    }
  };
  return Ft.default = i, Ft;
}
var Xr;
function cs() {
  if (Xr) return $t;
  Xr = 1, Object.defineProperty($t, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Xi(), t = /* @__PURE__ */ Zi(), n = /* @__PURE__ */ es(), o = /* @__PURE__ */ ts(), i = /* @__PURE__ */ ns(), r = /* @__PURE__ */ rs(), s = /* @__PURE__ */ os(), a = /* @__PURE__ */ is(), d = /* @__PURE__ */ ss(), y = /* @__PURE__ */ as(), m = [
    // number
    e.default,
    t.default,
    // string
    n.default,
    o.default,
    // object
    i.default,
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
  return $t.default = m, $t;
}
var Mt = {}, Ke = {}, Zr;
function ni() {
  if (Zr) return Ke;
  Zr = 1, Object.defineProperty(Ke, "__esModule", { value: !0 }), Ke.validateAdditionalItems = void 0;
  const e = /* @__PURE__ */ Q(), t = /* @__PURE__ */ ne(), o = {
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
      i(r, d);
    }
  };
  function i(r, s) {
    const { gen: a, schema: d, data: y, keyword: m, it: C } = r;
    C.items = !0;
    const b = a.const("len", (0, e._)`${y}.length`);
    if (d === !1)
      r.setParams({ len: s.length }), r.pass((0, e._)`${b} <= ${s.length}`);
    else if (typeof d == "object" && !(0, t.alwaysValidSchema)(C, d)) {
      const _ = a.var("valid", (0, e._)`${b} <= ${s.length}`);
      a.if((0, e.not)(_), () => v(_)), r.ok(_);
    }
    function v(_) {
      a.forRange("i", s.length, b, (w) => {
        r.subschema({ keyword: m, dataProp: w, dataPropType: t.Type.Num }, _), C.allErrors || a.if((0, e.not)(_), () => a.break());
      });
    }
  }
  return Ke.validateAdditionalItems = i, Ke.default = o, Ke;
}
var Nt = {}, He = {}, Qr;
function ri() {
  if (Qr) return He;
  Qr = 1, Object.defineProperty(He, "__esModule", { value: !0 }), He.validateTuple = void 0;
  const e = /* @__PURE__ */ Q(), t = /* @__PURE__ */ ne(), n = /* @__PURE__ */ xe(), o = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "array", "boolean"],
    before: "uniqueItems",
    code(r) {
      const { schema: s, it: a } = r;
      if (Array.isArray(s))
        return i(r, "additionalItems", s);
      a.items = !0, !(0, t.alwaysValidSchema)(a, s) && r.ok((0, n.validateArray)(r));
    }
  };
  function i(r, s, a = r.schema) {
    const { gen: d, parentSchema: y, data: m, keyword: C, it: b } = r;
    w(y), b.opts.unevaluated && a.length && b.items !== !0 && (b.items = t.mergeEvaluated.items(d, a.length, b.items));
    const v = d.name("valid"), _ = d.const("len", (0, e._)`${m}.length`);
    a.forEach((f, g) => {
      (0, t.alwaysValidSchema)(b, f) || (d.if((0, e._)`${_} > ${g}`, () => r.subschema({
        keyword: C,
        schemaProp: g,
        dataProp: g
      }, v)), r.ok(v));
    });
    function w(f) {
      const { opts: g, errSchemaPath: u } = b, h = a.length, S = h === f.minItems && (h === f.maxItems || f[s] === !1);
      if (g.strictTuples && !S) {
        const c = `"${C}" is ${h}-tuple, but minItems or maxItems/${s} are not specified or different at path "${u}"`;
        (0, t.checkStrictMode)(b, c, g.strictTuples);
      }
    }
  }
  return He.validateTuple = i, He.default = o, He;
}
var eo;
function ls() {
  if (eo) return Nt;
  eo = 1, Object.defineProperty(Nt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ri(), t = {
    keyword: "prefixItems",
    type: "array",
    schemaType: ["array"],
    before: "uniqueItems",
    code: (n) => (0, e.validateTuple)(n, "items")
  };
  return Nt.default = t, Nt;
}
var jt = {}, to;
function ds() {
  if (to) return jt;
  to = 1, Object.defineProperty(jt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Q(), t = /* @__PURE__ */ ne(), n = /* @__PURE__ */ xe(), o = /* @__PURE__ */ ni(), r = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    error: {
      message: ({ params: { len: s } }) => (0, e.str)`must NOT have more than ${s} items`,
      params: ({ params: { len: s } }) => (0, e._)`{limit: ${s}}`
    },
    code(s) {
      const { schema: a, parentSchema: d, it: y } = s, { prefixItems: m } = d;
      y.items = !0, !(0, t.alwaysValidSchema)(y, a) && (m ? (0, o.validateAdditionalItems)(s, m) : s.ok((0, n.validateArray)(s)));
    }
  };
  return jt.default = r, jt;
}
var Ot = {}, no;
function us() {
  if (no) return Ot;
  no = 1, Object.defineProperty(Ot, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Q(), t = /* @__PURE__ */ ne(), o = {
    keyword: "contains",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    trackErrors: !0,
    error: {
      message: ({ params: { min: i, max: r } }) => r === void 0 ? (0, e.str)`must contain at least ${i} valid item(s)` : (0, e.str)`must contain at least ${i} and no more than ${r} valid item(s)`,
      params: ({ params: { min: i, max: r } }) => r === void 0 ? (0, e._)`{minContains: ${i}}` : (0, e._)`{minContains: ${i}, maxContains: ${r}}`
    },
    code(i) {
      const { gen: r, schema: s, parentSchema: a, data: d, it: y } = i;
      let m, C;
      const { minContains: b, maxContains: v } = a;
      y.opts.next ? (m = b === void 0 ? 1 : b, C = v) : m = 1;
      const _ = r.const("len", (0, e._)`${d}.length`);
      if (i.setParams({ min: m, max: C }), C === void 0 && m === 0) {
        (0, t.checkStrictMode)(y, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
        return;
      }
      if (C !== void 0 && m > C) {
        (0, t.checkStrictMode)(y, '"minContains" > "maxContains" is always invalid'), i.fail();
        return;
      }
      if ((0, t.alwaysValidSchema)(y, s)) {
        let h = (0, e._)`${_} >= ${m}`;
        C !== void 0 && (h = (0, e._)`${h} && ${_} <= ${C}`), i.pass(h);
        return;
      }
      y.items = !0;
      const w = r.name("valid");
      C === void 0 && m === 1 ? g(w, () => r.if(w, () => r.break())) : m === 0 ? (r.let(w, !0), C !== void 0 && r.if((0, e._)`${d}.length > 0`, f)) : (r.let(w, !1), f()), i.result(w, () => i.reset());
      function f() {
        const h = r.name("_valid"), S = r.let("count", 0);
        g(h, () => r.if(h, () => u(S)));
      }
      function g(h, S) {
        r.forRange("i", 0, _, (c) => {
          i.subschema({
            keyword: "contains",
            dataProp: c,
            dataPropType: t.Type.Num,
            compositeRule: !0
          }, h), S();
        });
      }
      function u(h) {
        r.code((0, e._)`${h}++`), C === void 0 ? r.if((0, e._)`${h} >= ${m}`, () => r.assign(w, !0).break()) : (r.if((0, e._)`${h} > ${C}`, () => r.assign(w, !1).break()), m === 1 ? r.assign(w, !0) : r.if((0, e._)`${h} >= ${m}`, () => r.assign(w, !0)));
      }
    }
  };
  return Ot.default = o, Ot;
}
var jn = {}, ro;
function Jn() {
  return ro || (ro = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
    const t = /* @__PURE__ */ Q(), n = /* @__PURE__ */ ne(), o = /* @__PURE__ */ xe();
    e.error = {
      message: ({ params: { property: d, depsCount: y, deps: m } }) => {
        const C = y === 1 ? "property" : "properties";
        return (0, t.str)`must have ${C} ${m} when property ${d} is present`;
      },
      params: ({ params: { property: d, depsCount: y, deps: m, missingProperty: C } }) => (0, t._)`{property: ${d},
    missingProperty: ${C},
    depsCount: ${y},
    deps: ${m}}`
      // TODO change to reference
    };
    const i = {
      keyword: "dependencies",
      type: "object",
      schemaType: "object",
      error: e.error,
      code(d) {
        const [y, m] = r(d);
        s(d, y), a(d, m);
      }
    };
    function r({ schema: d }) {
      const y = {}, m = {};
      for (const C in d) {
        if (C === "__proto__")
          continue;
        const b = Array.isArray(d[C]) ? y : m;
        b[C] = d[C];
      }
      return [y, m];
    }
    function s(d, y = d.schema) {
      const { gen: m, data: C, it: b } = d;
      if (Object.keys(y).length === 0)
        return;
      const v = m.let("missing");
      for (const _ in y) {
        const w = y[_];
        if (w.length === 0)
          continue;
        const f = (0, o.propertyInData)(m, C, _, b.opts.ownProperties);
        d.setParams({
          property: _,
          depsCount: w.length,
          deps: w.join(", ")
        }), b.allErrors ? m.if(f, () => {
          for (const g of w)
            (0, o.checkReportMissingProp)(d, g);
        }) : (m.if((0, t._)`${f} && (${(0, o.checkMissingProp)(d, w, v)})`), (0, o.reportMissingProp)(d, v), m.else());
      }
    }
    e.validatePropertyDeps = s;
    function a(d, y = d.schema) {
      const { gen: m, data: C, keyword: b, it: v } = d, _ = m.name("valid");
      for (const w in y)
        (0, n.alwaysValidSchema)(v, y[w]) || (m.if(
          (0, o.propertyInData)(m, C, w, v.opts.ownProperties),
          () => {
            const f = d.subschema({ keyword: b, schemaProp: w }, _);
            d.mergeValidEvaluated(f, _);
          },
          () => m.var(_, !0)
          // TODO var
        ), d.ok(_));
    }
    e.validateSchemaDeps = a, e.default = i;
  })(jn)), jn;
}
var Tt = {}, oo;
function fs() {
  if (oo) return Tt;
  oo = 1, Object.defineProperty(Tt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Q(), t = /* @__PURE__ */ ne(), o = {
    keyword: "propertyNames",
    type: "object",
    schemaType: ["object", "boolean"],
    error: {
      message: "property name must be valid",
      params: ({ params: i }) => (0, e._)`{propertyName: ${i.propertyName}}`
    },
    code(i) {
      const { gen: r, schema: s, data: a, it: d } = i;
      if ((0, t.alwaysValidSchema)(d, s))
        return;
      const y = r.name("valid");
      r.forIn("key", a, (m) => {
        i.setParams({ propertyName: m }), i.subschema({
          keyword: "propertyNames",
          data: m,
          dataTypes: ["string"],
          propertyName: m,
          compositeRule: !0
        }, y), r.if((0, e.not)(y), () => {
          i.error(!0), d.allErrors || r.break();
        });
      }), i.ok(y);
    }
  };
  return Tt.default = o, Tt;
}
var zt = {}, io;
function oi() {
  if (io) return zt;
  io = 1, Object.defineProperty(zt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ xe(), t = /* @__PURE__ */ Q(), n = /* @__PURE__ */ ke(), o = /* @__PURE__ */ ne(), r = {
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
      const { gen: a, schema: d, parentSchema: y, data: m, errsCount: C, it: b } = s;
      if (!C)
        throw new Error("ajv implementation error");
      const { allErrors: v, opts: _ } = b;
      if (b.props = !0, _.removeAdditional !== "all" && (0, o.alwaysValidSchema)(b, d))
        return;
      const w = (0, e.allSchemaProperties)(y.properties), f = (0, e.allSchemaProperties)(y.patternProperties);
      g(), s.ok((0, t._)`${C} === ${n.default.errors}`);
      function g() {
        a.forIn("key", m, (l) => {
          !w.length && !f.length ? S(l) : a.if(u(l), () => S(l));
        });
      }
      function u(l) {
        let p;
        if (w.length > 8) {
          const k = (0, o.schemaRefOrVal)(b, y.properties, "properties");
          p = (0, e.isOwnProperty)(a, k, l);
        } else w.length ? p = (0, t.or)(...w.map((k) => (0, t._)`${l} === ${k}`)) : p = t.nil;
        return f.length && (p = (0, t.or)(p, ...f.map((k) => (0, t._)`${(0, e.usePattern)(s, k)}.test(${l})`))), (0, t.not)(p);
      }
      function h(l) {
        a.code((0, t._)`delete ${m}[${l}]`);
      }
      function S(l) {
        if (_.removeAdditional === "all" || _.removeAdditional && d === !1) {
          h(l);
          return;
        }
        if (d === !1) {
          s.setParams({ additionalProperty: l }), s.error(), v || a.break();
          return;
        }
        if (typeof d == "object" && !(0, o.alwaysValidSchema)(b, d)) {
          const p = a.name("valid");
          _.removeAdditional === "failing" ? (c(l, p, !1), a.if((0, t.not)(p), () => {
            s.reset(), h(l);
          })) : (c(l, p), v || a.if((0, t.not)(p), () => a.break()));
        }
      }
      function c(l, p, k) {
        const P = {
          keyword: "additionalProperties",
          dataProp: l,
          dataPropType: o.Type.Str
        };
        k === !1 && Object.assign(P, {
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }), s.subschema(P, p);
      }
    }
  };
  return zt.default = r, zt;
}
var It = {}, so;
function ps() {
  if (so) return It;
  so = 1, Object.defineProperty(It, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ vn(), t = /* @__PURE__ */ xe(), n = /* @__PURE__ */ ne(), o = /* @__PURE__ */ oi(), i = {
    keyword: "properties",
    type: "object",
    schemaType: "object",
    code(r) {
      const { gen: s, schema: a, parentSchema: d, data: y, it: m } = r;
      m.opts.removeAdditional === "all" && d.additionalProperties === void 0 && o.default.code(new e.KeywordCxt(m, o.default, "additionalProperties"));
      const C = (0, t.allSchemaProperties)(a);
      for (const f of C)
        m.definedProperties.add(f);
      m.opts.unevaluated && C.length && m.props !== !0 && (m.props = n.mergeEvaluated.props(s, (0, n.toHash)(C), m.props));
      const b = C.filter((f) => !(0, n.alwaysValidSchema)(m, a[f]));
      if (b.length === 0)
        return;
      const v = s.name("valid");
      for (const f of b)
        _(f) ? w(f) : (s.if((0, t.propertyInData)(s, y, f, m.opts.ownProperties)), w(f), m.allErrors || s.else().var(v, !0), s.endIf()), r.it.definedProperties.add(f), r.ok(v);
      function _(f) {
        return m.opts.useDefaults && !m.compositeRule && a[f].default !== void 0;
      }
      function w(f) {
        r.subschema({
          keyword: "properties",
          schemaProp: f,
          dataProp: f
        }, v);
      }
    }
  };
  return It.default = i, It;
}
var qt = {}, ao;
function hs() {
  if (ao) return qt;
  ao = 1, Object.defineProperty(qt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ xe(), t = /* @__PURE__ */ Q(), n = /* @__PURE__ */ ne(), o = /* @__PURE__ */ ne(), i = {
    keyword: "patternProperties",
    type: "object",
    schemaType: "object",
    code(r) {
      const { gen: s, schema: a, data: d, parentSchema: y, it: m } = r, { opts: C } = m, b = (0, e.allSchemaProperties)(a), v = b.filter((S) => (0, n.alwaysValidSchema)(m, a[S]));
      if (b.length === 0 || v.length === b.length && (!m.opts.unevaluated || m.props === !0))
        return;
      const _ = C.strictSchema && !C.allowMatchingProperties && y.properties, w = s.name("valid");
      m.props !== !0 && !(m.props instanceof t.Name) && (m.props = (0, o.evaluatedPropsToName)(s, m.props));
      const { props: f } = m;
      g();
      function g() {
        for (const S of b)
          _ && u(S), m.allErrors ? h(S) : (s.var(w, !0), h(S), s.if(w));
      }
      function u(S) {
        for (const c in _)
          new RegExp(S).test(c) && (0, n.checkStrictMode)(m, `property ${c} matches pattern ${S} (use allowMatchingProperties)`);
      }
      function h(S) {
        s.forIn("key", d, (c) => {
          s.if((0, t._)`${(0, e.usePattern)(r, S)}.test(${c})`, () => {
            const l = v.includes(S);
            l || r.subschema({
              keyword: "patternProperties",
              schemaProp: S,
              dataProp: c,
              dataPropType: o.Type.Str
            }, w), m.opts.unevaluated && f !== !0 ? s.assign((0, t._)`${f}[${c}]`, !0) : !l && !m.allErrors && s.if((0, t.not)(w), () => s.break());
          });
        });
      }
    }
  };
  return qt.default = i, qt;
}
var Dt = {}, co;
function ms() {
  if (co) return Dt;
  co = 1, Object.defineProperty(Dt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = {
    keyword: "not",
    schemaType: ["object", "boolean"],
    trackErrors: !0,
    code(n) {
      const { gen: o, schema: i, it: r } = n;
      if ((0, e.alwaysValidSchema)(r, i)) {
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
var Vt = {}, lo;
function gs() {
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
var Bt = {}, uo;
function ys() {
  if (uo) return Bt;
  uo = 1, Object.defineProperty(Bt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Q(), t = /* @__PURE__ */ ne(), o = {
    keyword: "oneOf",
    schemaType: "array",
    trackErrors: !0,
    error: {
      message: "must match exactly one schema in oneOf",
      params: ({ params: i }) => (0, e._)`{passingSchemas: ${i.passing}}`
    },
    code(i) {
      const { gen: r, schema: s, parentSchema: a, it: d } = i;
      if (!Array.isArray(s))
        throw new Error("ajv implementation error");
      if (d.opts.discriminator && a.discriminator)
        return;
      const y = s, m = r.let("valid", !1), C = r.let("passing", null), b = r.name("_valid");
      i.setParams({ passing: C }), r.block(v), i.result(m, () => i.reset(), () => i.error(!0));
      function v() {
        y.forEach((_, w) => {
          let f;
          (0, t.alwaysValidSchema)(d, _) ? r.var(b, !0) : f = i.subschema({
            keyword: "oneOf",
            schemaProp: w,
            compositeRule: !0
          }, b), w > 0 && r.if((0, e._)`${b} && ${m}`).assign(m, !1).assign(C, (0, e._)`[${C}, ${w}]`).else(), r.if(b, () => {
            r.assign(m, !0), r.assign(C, w), f && i.mergeEvaluated(f, e.Name);
          });
        });
      }
    }
  };
  return Bt.default = o, Bt;
}
var Lt = {}, fo;
function vs() {
  if (fo) return Lt;
  fo = 1, Object.defineProperty(Lt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = {
    keyword: "allOf",
    schemaType: "array",
    code(n) {
      const { gen: o, schema: i, it: r } = n;
      if (!Array.isArray(i))
        throw new Error("ajv implementation error");
      const s = o.name("valid");
      i.forEach((a, d) => {
        if ((0, e.alwaysValidSchema)(r, a))
          return;
        const y = n.subschema({ keyword: "allOf", schemaProp: d }, s);
        n.ok(s), n.mergeEvaluated(y);
      });
    }
  };
  return Lt.default = t, Lt;
}
var Ut = {}, po;
function $s() {
  if (po) return Ut;
  po = 1, Object.defineProperty(Ut, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Q(), t = /* @__PURE__ */ ne(), o = {
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
      const y = i(d, "then"), m = i(d, "else");
      if (!y && !m)
        return;
      const C = s.let("valid", !0), b = s.name("_valid");
      if (v(), r.reset(), y && m) {
        const w = s.let("ifClause");
        r.setParams({ ifClause: w }), s.if(b, _("then", w), _("else", w));
      } else y ? s.if(b, _("then")) : s.if((0, e.not)(b), _("else"));
      r.pass(C, () => r.error(!0));
      function v() {
        const w = r.subschema({
          keyword: "if",
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }, b);
        r.mergeEvaluated(w);
      }
      function _(w, f) {
        return () => {
          const g = r.subschema({ keyword: w }, b);
          s.assign(C, b), r.mergeValidEvaluated(g, C), f ? s.assign(f, (0, e._)`${w}`) : r.setParams({ ifClause: w });
        };
      }
    }
  };
  function i(r, s) {
    const a = r.schema[s];
    return a !== void 0 && !(0, t.alwaysValidSchema)(r, a);
  }
  return Ut.default = o, Ut;
}
var Kt = {}, ho;
function bs() {
  if (ho) return Kt;
  ho = 1, Object.defineProperty(Kt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = {
    keyword: ["then", "else"],
    schemaType: ["object", "boolean"],
    code({ keyword: n, parentSchema: o, it: i }) {
      o.if === void 0 && (0, e.checkStrictMode)(i, `"${n}" without "if" is ignored`);
    }
  };
  return Kt.default = t, Kt;
}
var mo;
function ws() {
  if (mo) return Mt;
  mo = 1, Object.defineProperty(Mt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ni(), t = /* @__PURE__ */ ls(), n = /* @__PURE__ */ ri(), o = /* @__PURE__ */ ds(), i = /* @__PURE__ */ us(), r = /* @__PURE__ */ Jn(), s = /* @__PURE__ */ fs(), a = /* @__PURE__ */ oi(), d = /* @__PURE__ */ ps(), y = /* @__PURE__ */ hs(), m = /* @__PURE__ */ ms(), C = /* @__PURE__ */ gs(), b = /* @__PURE__ */ ys(), v = /* @__PURE__ */ vs(), _ = /* @__PURE__ */ $s(), w = /* @__PURE__ */ bs();
  function f(g = !1) {
    const u = [
      // any
      m.default,
      C.default,
      b.default,
      v.default,
      _.default,
      w.default,
      // object
      s.default,
      a.default,
      r.default,
      d.default,
      y.default
    ];
    return g ? u.push(t.default, o.default) : u.push(e.default, n.default), u.push(i.default), u;
  }
  return Mt.default = f, Mt;
}
var Ht = {}, Ge = {}, go;
function ii() {
  if (go) return Ge;
  go = 1, Object.defineProperty(Ge, "__esModule", { value: !0 }), Ge.dynamicAnchor = void 0;
  const e = /* @__PURE__ */ Q(), t = /* @__PURE__ */ ke(), n = /* @__PURE__ */ bn(), o = /* @__PURE__ */ Hn(), i = {
    keyword: "$dynamicAnchor",
    schemaType: "string",
    code: (a) => r(a, a.schema)
  };
  function r(a, d) {
    const { gen: y, it: m } = a;
    m.schemaEnv.root.dynamicAnchors[d] = !0;
    const C = (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(d)}`, b = m.errSchemaPath === "#" ? m.validateName : s(a);
    y.if((0, e._)`!${C}`, () => y.assign(C, b));
  }
  Ge.dynamicAnchor = r;
  function s(a) {
    const { schemaEnv: d, schema: y, self: m } = a.it, { root: C, baseId: b, localRefs: v, meta: _ } = d.root, { schemaId: w } = m.opts, f = new n.SchemaEnv({ schema: y, schemaId: w, root: C, baseId: b, localRefs: v, meta: _ });
    return n.compileSchema.call(m, f), (0, o.getValidate)(a, f);
  }
  return Ge.default = i, Ge;
}
var Je = {}, yo;
function si() {
  if (yo) return Je;
  yo = 1, Object.defineProperty(Je, "__esModule", { value: !0 }), Je.dynamicRef = void 0;
  const e = /* @__PURE__ */ Q(), t = /* @__PURE__ */ ke(), n = /* @__PURE__ */ Hn(), o = {
    keyword: "$dynamicRef",
    schemaType: "string",
    code: (r) => i(r, r.schema)
  };
  function i(r, s) {
    const { gen: a, keyword: d, it: y } = r;
    if (s[0] !== "#")
      throw new Error(`"${d}" only supports hash fragment reference`);
    const m = s.slice(1);
    if (y.allErrors)
      C();
    else {
      const v = a.let("valid", !1);
      C(v), r.ok(v);
    }
    function C(v) {
      if (y.schemaEnv.root.dynamicAnchors[m]) {
        const _ = a.let("_v", (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(m)}`);
        a.if(_, b(_, v), b(y.validateName, v));
      } else
        b(y.validateName, v)();
    }
    function b(v, _) {
      return _ ? () => a.block(() => {
        (0, n.callRef)(r, v), a.let(_, !0);
      }) : () => (0, n.callRef)(r, v);
    }
  }
  return Je.dynamicRef = i, Je.default = o, Je;
}
var Gt = {}, vo;
function _s() {
  if (vo) return Gt;
  vo = 1, Object.defineProperty(Gt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ii(), t = /* @__PURE__ */ ne(), n = {
    keyword: "$recursiveAnchor",
    schemaType: "boolean",
    code(o) {
      o.schema ? (0, e.dynamicAnchor)(o, "") : (0, t.checkStrictMode)(o.it, "$recursiveAnchor: false is ignored");
    }
  };
  return Gt.default = n, Gt;
}
var Jt = {}, $o;
function Ss() {
  if ($o) return Jt;
  $o = 1, Object.defineProperty(Jt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ si(), t = {
    keyword: "$recursiveRef",
    schemaType: "string",
    code: (n) => (0, e.dynamicRef)(n, n.schema)
  };
  return Jt.default = t, Jt;
}
var bo;
function Cs() {
  if (bo) return Ht;
  bo = 1, Object.defineProperty(Ht, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ii(), t = /* @__PURE__ */ si(), n = /* @__PURE__ */ _s(), o = /* @__PURE__ */ Ss(), i = [e.default, t.default, n.default, o.default];
  return Ht.default = i, Ht;
}
var Wt = {}, Yt = {}, wo;
function ks() {
  if (wo) return Yt;
  wo = 1, Object.defineProperty(Yt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Jn(), t = {
    keyword: "dependentRequired",
    type: "object",
    schemaType: "object",
    error: e.error,
    code: (n) => (0, e.validatePropertyDeps)(n)
  };
  return Yt.default = t, Yt;
}
var Xt = {}, _o;
function xs() {
  if (_o) return Xt;
  _o = 1, Object.defineProperty(Xt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Jn(), t = {
    keyword: "dependentSchemas",
    type: "object",
    schemaType: "object",
    code: (n) => (0, e.validateSchemaDeps)(n)
  };
  return Xt.default = t, Xt;
}
var Zt = {}, So;
function Es() {
  if (So) return Zt;
  So = 1, Object.defineProperty(Zt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = {
    keyword: ["maxContains", "minContains"],
    type: "array",
    schemaType: "number",
    code({ keyword: n, parentSchema: o, it: i }) {
      o.contains === void 0 && (0, e.checkStrictMode)(i, `"${n}" without "contains" is ignored`);
    }
  };
  return Zt.default = t, Zt;
}
var Co;
function Ps() {
  if (Co) return Wt;
  Co = 1, Object.defineProperty(Wt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ks(), t = /* @__PURE__ */ xs(), n = /* @__PURE__ */ Es(), o = [e.default, t.default, n.default];
  return Wt.default = o, Wt;
}
var Qt = {}, en = {}, ko;
function As() {
  if (ko) return en;
  ko = 1, Object.defineProperty(en, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Q(), t = /* @__PURE__ */ ne(), n = /* @__PURE__ */ ke(), i = {
    keyword: "unevaluatedProperties",
    type: "object",
    schemaType: ["boolean", "object"],
    trackErrors: !0,
    error: {
      message: "must NOT have unevaluated properties",
      params: ({ params: r }) => (0, e._)`{unevaluatedProperty: ${r.unevaluatedProperty}}`
    },
    code(r) {
      const { gen: s, schema: a, data: d, errsCount: y, it: m } = r;
      if (!y)
        throw new Error("ajv implementation error");
      const { allErrors: C, props: b } = m;
      b instanceof e.Name ? s.if((0, e._)`${b} !== true`, () => s.forIn("key", d, (f) => s.if(_(b, f), () => v(f)))) : b !== !0 && s.forIn("key", d, (f) => b === void 0 ? v(f) : s.if(w(b, f), () => v(f))), m.props = !0, r.ok((0, e._)`${y} === ${n.default.errors}`);
      function v(f) {
        if (a === !1) {
          r.setParams({ unevaluatedProperty: f }), r.error(), C || s.break();
          return;
        }
        if (!(0, t.alwaysValidSchema)(m, a)) {
          const g = s.name("valid");
          r.subschema({
            keyword: "unevaluatedProperties",
            dataProp: f,
            dataPropType: t.Type.Str
          }, g), C || s.if((0, e.not)(g), () => s.break());
        }
      }
      function _(f, g) {
        return (0, e._)`!${f} || !${f}[${g}]`;
      }
      function w(f, g) {
        const u = [];
        for (const h in f)
          f[h] === !0 && u.push((0, e._)`${g} !== ${h}`);
        return (0, e.and)(...u);
      }
    }
  };
  return en.default = i, en;
}
var tn = {}, xo;
function Rs() {
  if (xo) return tn;
  xo = 1, Object.defineProperty(tn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Q(), t = /* @__PURE__ */ ne(), o = {
    keyword: "unevaluatedItems",
    type: "array",
    schemaType: ["boolean", "object"],
    error: {
      message: ({ params: { len: i } }) => (0, e.str)`must NOT have more than ${i} items`,
      params: ({ params: { len: i } }) => (0, e._)`{limit: ${i}}`
    },
    code(i) {
      const { gen: r, schema: s, data: a, it: d } = i, y = d.items || 0;
      if (y === !0)
        return;
      const m = r.const("len", (0, e._)`${a}.length`);
      if (s === !1)
        i.setParams({ len: y }), i.fail((0, e._)`${m} > ${y}`);
      else if (typeof s == "object" && !(0, t.alwaysValidSchema)(d, s)) {
        const b = r.var("valid", (0, e._)`${m} <= ${y}`);
        r.if((0, e.not)(b), () => C(b, y)), i.ok(b);
      }
      d.items = !0;
      function C(b, v) {
        r.forRange("i", v, m, (_) => {
          i.subschema({ keyword: "unevaluatedItems", dataProp: _, dataPropType: t.Type.Num }, b), d.allErrors || r.if((0, e.not)(b), () => r.break());
        });
      }
    }
  };
  return tn.default = o, tn;
}
var Eo;
function Fs() {
  if (Eo) return Qt;
  Eo = 1, Object.defineProperty(Qt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ As(), t = /* @__PURE__ */ Rs(), n = [e.default, t.default];
  return Qt.default = n, Qt;
}
var nn = {}, rn = {}, Po;
function Ms() {
  if (Po) return rn;
  Po = 1, Object.defineProperty(rn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Q(), n = {
    keyword: "format",
    type: ["number", "string"],
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: o }) => (0, e.str)`must match format "${o}"`,
      params: ({ schemaCode: o }) => (0, e._)`{format: ${o}}`
    },
    code(o, i) {
      const { gen: r, data: s, $data: a, schema: d, schemaCode: y, it: m } = o, { opts: C, errSchemaPath: b, schemaEnv: v, self: _ } = m;
      if (!C.validateFormats)
        return;
      a ? w() : f();
      function w() {
        const g = r.scopeValue("formats", {
          ref: _.formats,
          code: C.code.formats
        }), u = r.const("fDef", (0, e._)`${g}[${y}]`), h = r.let("fType"), S = r.let("format");
        r.if((0, e._)`typeof ${u} == "object" && !(${u} instanceof RegExp)`, () => r.assign(h, (0, e._)`${u}.type || "string"`).assign(S, (0, e._)`${u}.validate`), () => r.assign(h, (0, e._)`"string"`).assign(S, u)), o.fail$data((0, e.or)(c(), l()));
        function c() {
          return C.strictSchema === !1 ? e.nil : (0, e._)`${y} && !${S}`;
        }
        function l() {
          const p = v.$async ? (0, e._)`(${u}.async ? await ${S}(${s}) : ${S}(${s}))` : (0, e._)`${S}(${s})`, k = (0, e._)`(typeof ${S} == "function" ? ${p} : ${S}.test(${s}))`;
          return (0, e._)`${S} && ${S} !== true && ${h} === ${i} && !${k}`;
        }
      }
      function f() {
        const g = _.formats[d];
        if (!g) {
          c();
          return;
        }
        if (g === !0)
          return;
        const [u, h, S] = l(g);
        u === i && o.pass(p());
        function c() {
          if (C.strictSchema === !1) {
            _.logger.warn(k());
            return;
          }
          throw new Error(k());
          function k() {
            return `unknown format "${d}" ignored in schema at path "${b}"`;
          }
        }
        function l(k) {
          const P = k instanceof RegExp ? (0, e.regexpCode)(k) : C.code.formats ? (0, e._)`${C.code.formats}${(0, e.getProperty)(d)}` : void 0, N = r.scopeValue("formats", { key: d, ref: k, code: P });
          return typeof k == "object" && !(k instanceof RegExp) ? [k.type || "string", k.validate, (0, e._)`${N}.validate`] : ["string", k, N];
        }
        function p() {
          if (typeof g == "object" && !(g instanceof RegExp) && g.async) {
            if (!v.$async)
              throw new Error("async format in sync schema");
            return (0, e._)`await ${S}(${s})`;
          }
          return typeof h == "function" ? (0, e._)`${S}(${s})` : (0, e._)`${S}.test(${s})`;
        }
      }
    }
  };
  return rn.default = n, rn;
}
var Ao;
function Ns() {
  if (Ao) return nn;
  Ao = 1, Object.defineProperty(nn, "__esModule", { value: !0 });
  const t = [(/* @__PURE__ */ Ms()).default];
  return nn.default = t, nn;
}
var qe = {}, Ro;
function js() {
  return Ro || (Ro = 1, Object.defineProperty(qe, "__esModule", { value: !0 }), qe.contentVocabulary = qe.metadataVocabulary = void 0, qe.metadataVocabulary = [
    "title",
    "description",
    "default",
    "deprecated",
    "readOnly",
    "writeOnly",
    "examples"
  ], qe.contentVocabulary = [
    "contentMediaType",
    "contentEncoding",
    "contentSchema"
  ]), qe;
}
var Fo;
function Os() {
  if (Fo) return gt;
  Fo = 1, Object.defineProperty(gt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Yi(), t = /* @__PURE__ */ cs(), n = /* @__PURE__ */ ws(), o = /* @__PURE__ */ Cs(), i = /* @__PURE__ */ Ps(), r = /* @__PURE__ */ Fs(), s = /* @__PURE__ */ Ns(), a = /* @__PURE__ */ js(), d = [
    o.default,
    e.default,
    t.default,
    (0, n.default)(!0),
    s.default,
    a.metadataVocabulary,
    a.contentVocabulary,
    i.default,
    r.default
  ];
  return gt.default = d, gt;
}
var on = {}, it = {}, Mo;
function Ts() {
  if (Mo) return it;
  Mo = 1, Object.defineProperty(it, "__esModule", { value: !0 }), it.DiscrError = void 0;
  var e;
  return (function(t) {
    t.Tag = "tag", t.Mapping = "mapping";
  })(e || (it.DiscrError = e = {})), it;
}
var No;
function zs() {
  if (No) return on;
  No = 1, Object.defineProperty(on, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Q(), t = /* @__PURE__ */ Ts(), n = /* @__PURE__ */ bn(), o = /* @__PURE__ */ $n(), i = /* @__PURE__ */ ne(), s = {
    keyword: "discriminator",
    type: "object",
    schemaType: "object",
    error: {
      message: ({ params: { discrError: a, tagName: d } }) => a === t.DiscrError.Tag ? `tag "${d}" must be string` : `value of tag "${d}" must be in oneOf`,
      params: ({ params: { discrError: a, tag: d, tagName: y } }) => (0, e._)`{error: ${a}, tag: ${y}, tagValue: ${d}}`
    },
    code(a) {
      const { gen: d, data: y, schema: m, parentSchema: C, it: b } = a, { oneOf: v } = C;
      if (!b.opts.discriminator)
        throw new Error("discriminator: requires discriminator option");
      const _ = m.propertyName;
      if (typeof _ != "string")
        throw new Error("discriminator: requires propertyName");
      if (m.mapping)
        throw new Error("discriminator: mapping is not supported");
      if (!v)
        throw new Error("discriminator: requires oneOf keyword");
      const w = d.let("valid", !1), f = d.const("tag", (0, e._)`${y}${(0, e.getProperty)(_)}`);
      d.if((0, e._)`typeof ${f} == "string"`, () => g(), () => a.error(!1, { discrError: t.DiscrError.Tag, tag: f, tagName: _ })), a.ok(w);
      function g() {
        const S = h();
        d.if(!1);
        for (const c in S)
          d.elseIf((0, e._)`${f} === ${c}`), d.assign(w, u(S[c]));
        d.else(), a.error(!1, { discrError: t.DiscrError.Mapping, tag: f, tagName: _ }), d.endIf();
      }
      function u(S) {
        const c = d.name("valid"), l = a.subschema({ keyword: "oneOf", schemaProp: S }, c);
        return a.mergeEvaluated(l, e.Name), c;
      }
      function h() {
        var S;
        const c = {}, l = k(C);
        let p = !0;
        for (let z = 0; z < v.length; z++) {
          let A = v[z];
          if (A?.$ref && !(0, i.schemaHasRulesButRef)(A, b.self.RULES)) {
            const J = A.$ref;
            if (A = n.resolveRef.call(b.self, b.schemaEnv.root, b.baseId, J), A instanceof n.SchemaEnv && (A = A.schema), A === void 0)
              throw new o.default(b.opts.uriResolver, b.baseId, J);
          }
          const T = (S = A?.properties) === null || S === void 0 ? void 0 : S[_];
          if (typeof T != "object")
            throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${_}"`);
          p = p && (l || k(A)), P(T, z);
        }
        if (!p)
          throw new Error(`discriminator: "${_}" must be required`);
        return c;
        function k({ required: z }) {
          return Array.isArray(z) && z.includes(_);
        }
        function P(z, A) {
          if (z.const)
            N(z.const, A);
          else if (z.enum)
            for (const T of z.enum)
              N(T, A);
          else
            throw new Error(`discriminator: "properties/${_}" must have "const" or "enum"`);
        }
        function N(z, A) {
          if (typeof z != "string" || z in c)
            throw new Error(`discriminator: "${_}" values must be unique strings`);
          c[z] = A;
        }
      }
    }
  };
  return on.default = s, on;
}
var sn = {};
const Is = "https://json-schema.org/draft/2020-12/schema", qs = "https://json-schema.org/draft/2020-12/schema", Ds = { "https://json-schema.org/draft/2020-12/vocab/core": !0, "https://json-schema.org/draft/2020-12/vocab/applicator": !0, "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0, "https://json-schema.org/draft/2020-12/vocab/validation": !0, "https://json-schema.org/draft/2020-12/vocab/meta-data": !0, "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0, "https://json-schema.org/draft/2020-12/vocab/content": !0 }, Vs = "meta", Bs = "Core and Validation specifications meta-schema", Ls = [{ $ref: "meta/core" }, { $ref: "meta/applicator" }, { $ref: "meta/unevaluated" }, { $ref: "meta/validation" }, { $ref: "meta/meta-data" }, { $ref: "meta/format-annotation" }, { $ref: "meta/content" }], Us = ["object", "boolean"], Ks = "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.", Hs = { definitions: { $comment: '"definitions" has been replaced by "$defs".', type: "object", additionalProperties: { $dynamicRef: "#meta" }, deprecated: !0, default: {} }, dependencies: { $comment: '"dependencies" has been split and replaced by "dependentSchemas" and "dependentRequired" in order to serve their differing semantics.', type: "object", additionalProperties: { anyOf: [{ $dynamicRef: "#meta" }, { $ref: "meta/validation#/$defs/stringArray" }] }, deprecated: !0, default: {} }, $recursiveAnchor: { $comment: '"$recursiveAnchor" has been replaced by "$dynamicAnchor".', $ref: "meta/core#/$defs/anchorString", deprecated: !0 }, $recursiveRef: { $comment: '"$recursiveRef" has been replaced by "$dynamicRef".', $ref: "meta/core#/$defs/uriReferenceString", deprecated: !0 } }, Gs = {
  $schema: Is,
  $id: qs,
  $vocabulary: Ds,
  $dynamicAnchor: Vs,
  title: Bs,
  allOf: Ls,
  type: Us,
  $comment: Ks,
  properties: Hs
}, Js = "https://json-schema.org/draft/2020-12/schema", Ws = "https://json-schema.org/draft/2020-12/meta/applicator", Ys = { "https://json-schema.org/draft/2020-12/vocab/applicator": !0 }, Xs = "meta", Zs = "Applicator vocabulary meta-schema", Qs = ["object", "boolean"], ea = { prefixItems: { $ref: "#/$defs/schemaArray" }, items: { $dynamicRef: "#meta" }, contains: { $dynamicRef: "#meta" }, additionalProperties: { $dynamicRef: "#meta" }, properties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, propertyNames: { format: "regex" }, default: {} }, dependentSchemas: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, propertyNames: { $dynamicRef: "#meta" }, if: { $dynamicRef: "#meta" }, then: { $dynamicRef: "#meta" }, else: { $dynamicRef: "#meta" }, allOf: { $ref: "#/$defs/schemaArray" }, anyOf: { $ref: "#/$defs/schemaArray" }, oneOf: { $ref: "#/$defs/schemaArray" }, not: { $dynamicRef: "#meta" } }, ta = { schemaArray: { type: "array", minItems: 1, items: { $dynamicRef: "#meta" } } }, na = {
  $schema: Js,
  $id: Ws,
  $vocabulary: Ys,
  $dynamicAnchor: Xs,
  title: Zs,
  type: Qs,
  properties: ea,
  $defs: ta
}, ra = "https://json-schema.org/draft/2020-12/schema", oa = "https://json-schema.org/draft/2020-12/meta/unevaluated", ia = { "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0 }, sa = "meta", aa = "Unevaluated applicator vocabulary meta-schema", ca = ["object", "boolean"], la = { unevaluatedItems: { $dynamicRef: "#meta" }, unevaluatedProperties: { $dynamicRef: "#meta" } }, da = {
  $schema: ra,
  $id: oa,
  $vocabulary: ia,
  $dynamicAnchor: sa,
  title: aa,
  type: ca,
  properties: la
}, ua = "https://json-schema.org/draft/2020-12/schema", fa = "https://json-schema.org/draft/2020-12/meta/content", pa = { "https://json-schema.org/draft/2020-12/vocab/content": !0 }, ha = "meta", ma = "Content vocabulary meta-schema", ga = ["object", "boolean"], ya = { contentEncoding: { type: "string" }, contentMediaType: { type: "string" }, contentSchema: { $dynamicRef: "#meta" } }, va = {
  $schema: ua,
  $id: fa,
  $vocabulary: pa,
  $dynamicAnchor: ha,
  title: ma,
  type: ga,
  properties: ya
}, $a = "https://json-schema.org/draft/2020-12/schema", ba = "https://json-schema.org/draft/2020-12/meta/core", wa = { "https://json-schema.org/draft/2020-12/vocab/core": !0 }, _a = "meta", Sa = "Core vocabulary meta-schema", Ca = ["object", "boolean"], ka = { $id: { $ref: "#/$defs/uriReferenceString", $comment: "Non-empty fragments not allowed.", pattern: "^[^#]*#?$" }, $schema: { $ref: "#/$defs/uriString" }, $ref: { $ref: "#/$defs/uriReferenceString" }, $anchor: { $ref: "#/$defs/anchorString" }, $dynamicRef: { $ref: "#/$defs/uriReferenceString" }, $dynamicAnchor: { $ref: "#/$defs/anchorString" }, $vocabulary: { type: "object", propertyNames: { $ref: "#/$defs/uriString" }, additionalProperties: { type: "boolean" } }, $comment: { type: "string" }, $defs: { type: "object", additionalProperties: { $dynamicRef: "#meta" } } }, xa = { anchorString: { type: "string", pattern: "^[A-Za-z_][-A-Za-z0-9._]*$" }, uriString: { type: "string", format: "uri" }, uriReferenceString: { type: "string", format: "uri-reference" } }, Ea = {
  $schema: $a,
  $id: ba,
  $vocabulary: wa,
  $dynamicAnchor: _a,
  title: Sa,
  type: Ca,
  properties: ka,
  $defs: xa
}, Pa = "https://json-schema.org/draft/2020-12/schema", Aa = "https://json-schema.org/draft/2020-12/meta/format-annotation", Ra = { "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0 }, Fa = "meta", Ma = "Format vocabulary meta-schema for annotation results", Na = ["object", "boolean"], ja = { format: { type: "string" } }, Oa = {
  $schema: Pa,
  $id: Aa,
  $vocabulary: Ra,
  $dynamicAnchor: Fa,
  title: Ma,
  type: Na,
  properties: ja
}, Ta = "https://json-schema.org/draft/2020-12/schema", za = "https://json-schema.org/draft/2020-12/meta/meta-data", Ia = { "https://json-schema.org/draft/2020-12/vocab/meta-data": !0 }, qa = "meta", Da = "Meta-data vocabulary meta-schema", Va = ["object", "boolean"], Ba = { title: { type: "string" }, description: { type: "string" }, default: !0, deprecated: { type: "boolean", default: !1 }, readOnly: { type: "boolean", default: !1 }, writeOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 } }, La = {
  $schema: Ta,
  $id: za,
  $vocabulary: Ia,
  $dynamicAnchor: qa,
  title: Da,
  type: Va,
  properties: Ba
}, Ua = "https://json-schema.org/draft/2020-12/schema", Ka = "https://json-schema.org/draft/2020-12/meta/validation", Ha = { "https://json-schema.org/draft/2020-12/vocab/validation": !0 }, Ga = "meta", Ja = "Validation vocabulary meta-schema", Wa = ["object", "boolean"], Ya = { type: { anyOf: [{ $ref: "#/$defs/simpleTypes" }, { type: "array", items: { $ref: "#/$defs/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, const: !0, enum: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/$defs/nonNegativeInteger" }, minLength: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, maxItems: { $ref: "#/$defs/nonNegativeInteger" }, minItems: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, maxContains: { $ref: "#/$defs/nonNegativeInteger" }, minContains: { $ref: "#/$defs/nonNegativeInteger", default: 1 }, maxProperties: { $ref: "#/$defs/nonNegativeInteger" }, minProperties: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, required: { $ref: "#/$defs/stringArray" }, dependentRequired: { type: "object", additionalProperties: { $ref: "#/$defs/stringArray" } } }, Xa = { nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { $ref: "#/$defs/nonNegativeInteger", default: 0 }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, Za = {
  $schema: Ua,
  $id: Ka,
  $vocabulary: Ha,
  $dynamicAnchor: Ga,
  title: Ja,
  type: Wa,
  properties: Ya,
  $defs: Xa
};
var jo;
function Qa() {
  if (jo) return sn;
  jo = 1, Object.defineProperty(sn, "__esModule", { value: !0 });
  const e = Gs, t = na, n = da, o = va, i = Ea, r = Oa, s = La, a = Za, d = ["/properties"];
  function y(m) {
    return [
      e,
      t,
      n,
      o,
      i,
      C(this, r),
      s,
      C(this, a)
    ].forEach((b) => this.addMetaSchema(b, void 0, !1)), this;
    function C(b, v) {
      return m ? b.$dataMetaSchema(v, d) : v;
    }
  }
  return sn.default = y, sn;
}
var Oo;
function ec() {
  return Oo || (Oo = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv2020 = void 0;
    const n = /* @__PURE__ */ Ji(), o = /* @__PURE__ */ Os(), i = /* @__PURE__ */ zs(), r = /* @__PURE__ */ Qa(), s = "https://json-schema.org/draft/2020-12/schema";
    class a extends n.default {
      constructor(v = {}) {
        super({
          ...v,
          dynamicRef: !0,
          next: !0,
          unevaluated: !0
        });
      }
      _addVocabularies() {
        super._addVocabularies(), o.default.forEach((v) => this.addVocabulary(v)), this.opts.discriminator && this.addKeyword(i.default);
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
    t.Ajv2020 = a, e.exports = t = a, e.exports.Ajv2020 = a, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = a;
    var d = /* @__PURE__ */ vn();
    Object.defineProperty(t, "KeywordCxt", { enumerable: !0, get: function() {
      return d.KeywordCxt;
    } });
    var y = /* @__PURE__ */ Q();
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
    var m = /* @__PURE__ */ Kn();
    Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
      return m.default;
    } });
    var C = /* @__PURE__ */ $n();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return C.default;
    } });
  })(ut, ut.exports)), ut.exports;
}
var tc = /* @__PURE__ */ ec();
const nc = /* @__PURE__ */ Mi(tc), rc = "https://json-schema.org/draft/2020-12/schema", oc = "https://raw.githubusercontent.com/omsf-eco-infra/gufe-viz/main/schema/gufe-viz.schema.json", ic = "gufe-viz payload", sc = "Python-to-TypeScript contract bridge for gufe visualizations. Source of truth both languages are downstream of it. This schema is not strictly versioned or published as it is only internally consumed by this codebase. Schema description: one schema object per gufe class: every $def named *Viz is the visualization form of exactly one GufeTokenizable, it carries that object's `gufe-key`. Every reference from one gufe object to another is that object's gufe key, and the objects themselves live in the `registry` on the root payload. So a ligand network's nodes are keys, a chemical system's components and a transformation's protocol are keys and each one resolves to a complete, drawable object. An alchemical network whose forty systems share one protein carries that PDB once and points at it forty times, and the browser can still drill into it, because what it points at is a whole ProteinComponentViz. This is a single-shot dump rather than a conversation with a server, so the registry travels with the payload.", ac = [{ $ref: "#/$defs/SmallMoleculeComponentViz" }, { $ref: "#/$defs/ProteinComponentViz" }, { $ref: "#/$defs/SolvatedPDBComponentViz" }, { $ref: "#/$defs/ProteinMembraneComponentViz" }, { $ref: "#/$defs/SolventComponentViz" }, { $ref: "#/$defs/UnknownComponentViz" }, { $ref: "#/$defs/ProtocolViz" }, { $ref: "#/$defs/LigandAtomMappingViz" }, { $ref: "#/$defs/LigandNetworkViz" }, { $ref: "#/$defs/ChemicalSystemViz" }, { $ref: "#/$defs/TransformationViz" }, { $ref: "#/$defs/AlchemicalNetworkViz" }], cc = /* @__PURE__ */ JSON.parse('{"GufeKey":{"title":"GufeKey","description":"A gufe key: the identity of a GufeTokenizable, of the form \'ClassName-<hex digest>\'. It is deterministic and repeatable within a software environment. Only its non-emptiness is checked","type":"string","minLength":1},"ComponentKey":{"title":"ComponentKey","description":"A gufe key naming a ComponentViz in the registry. Identical to GufeKey at validation time: JSON Schema has no way to say \'this string is the gufe-key of an entry in that array, and that entry has this type\', because that is a join across two parts of the document. What the name buys is that the referent\'s type is stated in the contract and carried into the generated TypeScript, instead of living only in a test and a view.","$ref":"#/$defs/GufeKey"},"SmallMoleculeComponentKey":{"title":"SmallMoleculeComponentKey","description":"A gufe key naming a SmallMoleculeComponentViz in the registry. Resolving it yields the whole molecule, SDF included. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ChemicalSystemKey":{"title":"ChemicalSystemKey","description":"A gufe key naming a ChemicalSystemViz in the registry. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ProtocolKey":{"title":"ProtocolKey","description":"A gufe key naming a ProtocolViz in the registry. Every transformation of a network usually names the same one. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"Registry":{"title":"Registry","description":"The pool of gufe objects this payload refers to by key, each a complete payload object in its own right. Entries are unique by `gufe-key` and sorted by (type, gufe-key) so a committed fixture is byte-stable. JSON Schema cannot express \'unique by a property\' or \'every reference resolves\', so both are covered by tests on the Python side and degraded over by the views.","type":"array","items":{"oneOf":[{"$ref":"#/$defs/ComponentViz"},{"$ref":"#/$defs/ProtocolViz"},{"$ref":"#/$defs/ChemicalSystemViz"}]}},"ComponentViz":{"title":"ComponentViz","description":"Any single chemical-system component","oneOf":[{"$ref":"#/$defs/SmallMoleculeComponentViz"},{"$ref":"#/$defs/ProteinComponentViz"},{"$ref":"#/$defs/SolvatedPDBComponentViz"},{"$ref":"#/$defs/ProteinMembraneComponentViz"},{"$ref":"#/$defs/SolventComponentViz"},{"$ref":"#/$defs/UnknownComponentViz"}]},"SmallMoleculeComponentViz":{"title":"SmallMoleculeComponentViz","description":"A small molecule, carried as a complete SDF record.","type":"object","properties":{"type":{"const":"SmallMoleculeComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"sdf":{"type":"string","minLength":1,"description":"Complete inline SDF record, including the conformer."},"smiles":{"type":"string"},"total_charge":{"type":"integer","description":"Net formal charge. Displayed, never recomputed from the SDF."}},"required":["type","gufe-key","name","sdf","smiles","total_charge"],"additionalProperties":false},"ProteinComponentViz":{"title":"ProteinComponentViz","description":"A protein, carried as a complete PDB record.","type":"object","properties":{"type":{"const":"ProteinComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolvatedPDBComponentViz":{"title":"SolvatedPDBComponentViz","description":"A protein with explicit solvent. A distinct type rather than a flag on ProteinComponentViz, because the discriminator is what a view dispatches on and the presence of waters changes what a sensible default representation is.","type":"object","properties":{"type":{"const":"SolvatedPDBComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation, including explicit solvent."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"ProteinMembraneComponentViz":{"title":"ProteinMembraneComponentViz","description":"A protein embedded in a membrane.","type":"object","properties":{"type":{"const":"ProteinMembraneComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation of the protein and membrane system."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolventComponentViz":{"title":"SolventComponentViz","description":"Bulk solvent settings. There is no structure to draw, so these are flat fields suitable for rendering as a settings card.","type":"object","properties":{"type":{"const":"SolventComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"smiles":{"type":"string","minLength":1},"positive_ion":{"type":"string"},"negative_ion":{"type":"string"},"neutralize":{"type":"boolean"},"ion_concentration":{"type":"string","description":"Display-form concentration with units, for example \'0.15 molar\'. A string rather than a number because the unit is part of the value and the view only ever prints it."}},"required":["type","gufe-key","name","smiles","positive_ion","negative_ion","neutralize","ion_concentration"],"additionalProperties":false},"UnknownComponentViz":{"title":"UnknownComponentViz","description":"The graceful fallback for a component type this build does not recognize. gufe supports custom Component subclasses, so meeting one is an expected outcome rather than an error, and the browser answers it with \'sorry, there is no visualization for this\'. This covers an unrecognized type only: a recognized component whose serializer fails is a bug, and raises in Python rather than arriving here wearing a disguise.","type":"object","properties":{"type":{"const":"UnknownComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The gufe class name, so the panel can say which type it could not draw."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ProtocolViz":{"title":"ProtocolViz","description":"A gufe Protocol, named. Every transformation in an alchemical network usually shares one, so this is a registry entry that many edges point at rather than a class name repeated per edge. Settings are deliberately absent for now: they are large, deeply nested, and nothing draws them yet, adding a `settings` field later is additive and breaks nothing.","type":"object","properties":{"type":{"const":"ProtocolViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The Protocol\'s class name, which is what identifies it to a reader, a Protocol has no name of its own, so `name` is usually empty."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ChemicalSystemViz":{"title":"ChemicalSystemViz","description":"A gufe ChemicalSystem: labels mapped to the gufe keys of its components.","type":"object","properties":{"type":{"const":"ChemicalSystemViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"components":{"type":"object","description":"ChemicalSystem labels mapped to the gufe keys of the components in the registry.","additionalProperties":{"$ref":"#/$defs/ComponentKey"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","components"],"additionalProperties":false},"AtomMapping":{"title":"AtomMapping","description":"Atom index correspondence from molecule A to molecule B, as a list of index pairs. A list rather than an object keyed by A\'s index, because JSON object keys can only be strings: keying by index would put decimal strings such as \'12\' in the payload and leave both languages casting them back to integers, and it is Python\'s dict-of-int shape only by resemblance. As a list, both indices stay integers, and \'an entry has a B index for every A index\' becomes a `required` the schema states rather than a convention a reader has to trust. Pairs are ordered by `index_A` so a committed fixture is byte-stable.","type":"array","items":{"type":"object","properties":{"index_A":{"type":"integer","minimum":0,"description":"An atom index in molecule A."},"index_B":{"type":"integer","minimum":0,"description":"The atom index in molecule B that it maps to."}},"required":["index_A","index_B"],"additionalProperties":false}},"Annotations":{"title":"Annotations","description":"Free-form mapping metadata. gufe puts nothing here by design and every mapper picks its own keys, so this is deliberately open. Values are whatever survived being made JSON-safe. Displayed but never interpreted, with the single exception of \'score\'.","type":"object"},"LigandAtomMappingViz":{"title":"LigandAtomMappingViz","description":"One atom mapping between two small molecules. This is also what an edge of a ligand network is because the two endpoints are gufe keys either way: standalone they resolve in this object\'s own registry, and in a network they resolve in the network\'s, where they are the same entries the nodes name. `componentA` and `componentB` are the molecules the two sides of `componentA_to_componentB` index into: an `index_A` is an atom of the SmallMoleculeComponentViz that `componentA` names, and an `index_B` an atom of `componentB`\'s.","type":"object","properties":{"type":{"const":"LigandAtomMappingViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"componentA":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentB":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentA_to_componentB":{"$ref":"#/$defs/AtomMapping"},"score":{"type":["number","null"],"description":"The \'score\' annotation when it is a plain number, otherwise null. This is the one annotation key that is interpreted rather than displayed: it drives the edge colouring and the force layout\'s link distance."},"annotations":{"$ref":"#/$defs/Annotations"},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","componentA","componentB","componentA_to_componentB","score","annotations"],"additionalProperties":false},"LigandNetworkViz":{"title":"LigandNetworkViz","description":"A ligand network: the ligands in the registry, the nodes as keys into it, and the mappings as edges. Deliberately not gufe\'s GraphML: that format embeds a gufe to_json moldict per node, so forwarding it would relocate the decoding problem into the browser rather than avoid it.","type":"object","properties":{"type":{"const":"LigandNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ligand, resolved in `registry`.","items":{"$ref":"#/$defs/SmallMoleculeComponentKey"}},"edges":{"type":"array","description":"The mappings, whose `componentA` and `componentB` name nodes of this network. JSON Schema cannot express that referential constraint, so a Python test covers it, and the view drops a dangling edge with a banner rather than failing.","items":{"$ref":"#/$defs/LigandAtomMappingViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false},"TransformationViz":{"title":"TransformationViz","description":"A transformation between two chemical systems, both named by gufe key, as is its protocol: `stateA` is the system it starts from, `stateB` the one it ends at, and every edge of a network usually names the same protocol. This is also what an edge of an alchemical network is (there is no separate edge type) because `stateA` and `stateB` are keys either way, and in a network they are the keys the nodes name. NonTransformation uses this type too: it exposes the same stateA and stateB properties, both its single system, so it renders as a diff with no differences.","type":"object","properties":{"type":{"const":"TransformationViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"protocol":{"$ref":"#/$defs/ProtocolKey"},"stateA":{"$ref":"#/$defs/ChemicalSystemKey"},"stateB":{"$ref":"#/$defs/ChemicalSystemKey"},"mappings":{"type":"array","items":{"$ref":"#/$defs/LigandAtomMappingViz"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","protocol","stateA","stateB","mappings"],"additionalProperties":false},"AlchemicalNetworkViz":{"title":"AlchemicalNetworkViz","description":"A graph of chemical systems joined by transformations. What repeats here is not the nodes and edges themselves but what they are made of: in practice every system shares one protein and every transformation shares one protocol. Both live in the registry, once, as whole objects so this view can show composition and topology while still letting a reader open a node and see the protein.","type":"object","properties":{"type":{"const":"AlchemicalNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ChemicalSystem, resolved in `registry`.","items":{"$ref":"#/$defs/ChemicalSystemKey"}},"edges":{"type":"array","description":"The transformations, whose `stateA` and `stateB` name nodes of this network.","items":{"$ref":"#/$defs/TransformationViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false}}'), Wn = {
  $schema: rc,
  $id: oc,
  title: ic,
  description: sc,
  oneOf: ac,
  $defs: cc
}, Il = [
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
], Yn = Wn.$id, Xn = new nc({ allErrors: !0, strict: !1 });
Xn.addSchema(Wn, Yn);
const To = Xn.getSchema(Yn), ai = Object.entries(Wn.$defs).filter(
  ([e, t]) => t.properties?.type?.const === e
).map(([e]) => e).sort(), ql = ai, Zn = /* @__PURE__ */ new Map();
for (const e of ai) {
  const t = Xn.getSchema(`${Yn}#/$defs/${e}`);
  t && Zn.set(e, t);
}
const Dn = { valid: !0, issues: [] };
function Vn(e) {
  return (e ?? []).map((t) => ({
    path: t.instancePath || "",
    message: t.keyword === "additionalProperties" ? `unknown property ${JSON.stringify(t.params.additionalProperty)}` : t.message ?? "is invalid"
  }));
}
function lc(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return {
      valid: !1,
      issues: [{ path: "", message: "must be a JSON object" }]
    };
  const t = e.type, n = typeof t == "string" ? Zn.get(t) : void 0;
  return n ? n(e) ? Dn : { valid: !1, issues: Vn(n.errors) } : To(e) ? Dn : { valid: !1, issues: Vn(To.errors) };
}
function Dl(e, t) {
  const n = Zn.get(e);
  return n ? n(t) ? Dn : { valid: !1, issues: Vn(n.errors) } : {
    valid: !1,
    issues: [
      { path: "", message: `unknown payload type ${JSON.stringify(e)}` }
    ]
  };
}
function dc(e, t = 8) {
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
function ci(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return {
      message: "This does not look like a gufe-viz payload (expected a JSON object)."
    };
  const { type: t } = e;
  if (typeof t != "string" || !t)
    return {
      message: "This payload has no `type`, so there is nothing to say what it is."
    };
  if (!Qn[t]) return uc(t);
  const { valid: n, issues: o } = lc(e);
  return n ? null : {
    message: `This payload says it is a ${t}, but it does not match the gufe-viz schema.`,
    detail: dc(o)
  };
}
function uc(e) {
  const t = Object.keys(Qn).sort().join(", ");
  return {
    message: `Sorry, there is no visualization for ${e} yet. This build can draw: ${t}.`
  };
}
function Vl(e) {
  return ci(e)?.message ?? null;
}
class fc extends Se {
  placeholder() {
    return "Waiting for data...";
  }
  renderView(t, n) {
    Ri("payload", n, this);
    const o = ci(n);
    if (o)
      return t.appendChild(pc(o, n)), {};
    const i = n.type, r = Qn[i], s = document.createElement(r);
    return s.style.cssText = "flex:1;min-height:0;min-width:0;", s.payload = n, t.appendChild(s), {
      onResize: () => s.resize?.(),
      // Removing the child fires its own `disconnectedCallback`, which is where
      // its viewers and observers are released
      cleanup: () => s.remove()
    };
  }
}
function pc(e, t) {
  const n = j(
    "div",
    "flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:32px;"
  );
  n.appendChild(ae(e.message));
  const o = (r, s) => j(
    "div",
    "max-width:640px;padding:8px 12px;border-radius:6px;font-size:11px;white-space:pre-wrap;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;overflow-wrap:anywhere;" + (s ? `background:${E.warnBg};color:${E.warnFg};border:1px solid ${E.warnBorder};` : `background:${E.panelBg};color:${E.textMuted2};border:1px solid ${E.cardBorder};`),
    r
  );
  e.detail && n.appendChild(o(e.detail, !0));
  const i = hc(t);
  return i && n.appendChild(o(i, !1)), n;
}
function hc(e) {
  if (e == null || typeof e != "object") return null;
  const t = e, n = [];
  typeof t.type == "string" && n.push(`type: ${Ne(t.type)}`), typeof t.name == "string" && t.name && n.push(`name: ${Ne(t.name)}`);
  const o = Object.keys(e);
  return o.length && n.push(
    `keys: ${o.slice(0, 12).join(", ")}${o.length > 12 ? ", ..." : ""}`
  ), n.length ? n.join(`
`) : null;
}
Ce("gufe-view", fc);
const er = {
  threeDmol: "https://3dmol.org/build/3Dmol-min.js",
  rdkit: "https://unpkg.com/@rdkit/rdkit/dist/RDKit_minimal.js",
  d3: "https://cdn.jsdelivr.net/npm/d3@7/+esm"
};
function tr(e) {
  const t = globalThis.__gufeEngines?.[e];
  return t ? Promise.resolve(t) : null;
}
function li(e, t) {
  return new Promise((n, o) => {
    const i = document.createElement("script");
    i.src = e, i.onload = () => n(), i.onerror = () => o(new Error(`Failed to load ${t}`)), document.head.appendChild(i);
  });
}
let Ve = null, We = null;
function nr() {
  if (We) return We;
  const e = tr("threeDmol");
  return e ? (We = e.then((t) => Ve = t || window.$3Dmol), We) : (We = (async () => {
    if (window.$3Dmol) return Ve = window.$3Dmol;
    if (await li(er.threeDmol, "3Dmol.js"), !window.$3Dmol) throw new Error("3Dmol.js loaded but $3Dmol is undefined");
    return Ve = window.$3Dmol;
  })(), We);
}
let Ye = null;
function rr() {
  if (Ye) return Ye;
  const e = tr("rdkit");
  return e ? (Ye = e.then((t) => window.RDKit = t), Ye) : (Ye = (async () => {
    if (window.RDKit) return window.RDKit;
    if (await li(er.rdkit, "RDKit"), !window.initRDKitModule) throw new Error("RDKit loaded but initRDKitModule is undefined");
    return window.RDKit = await window.initRDKitModule();
  })(), Ye);
}
let On = null;
function di() {
  if (!On) {
    const e = er.d3;
    On = tr("d3") ?? import(
      /* @vite-ignore */
      e
    );
  }
  return On;
}
function or(e, t) {
  let n = !1, o = !1;
  const i = () => {
    n = !0;
  }, r = () => {
    n = !1;
  }, s = (a) => {
    if (a.stopPropagation(), n || a.ctrlKey || a.metaKey) {
      a.preventDefault(), t.onZoom(a);
      return;
    }
    t.hint && !o && (o = !0, gc(e, t.hint));
  };
  return e.addEventListener("wheel", s, { passive: !1, capture: !0 }), e.addEventListener("pointerdown", i), e.addEventListener("pointerenter", i), e.addEventListener("pointerleave", r), {
    cleanup() {
      e.removeEventListener("wheel", s, { capture: !0 }), e.removeEventListener("pointerdown", i), e.removeEventListener("pointerenter", i), e.removeEventListener("pointerleave", r);
    }
  };
}
const mc = 1600;
function gc(e, t) {
  const n = j(
    "div",
    "position:absolute;bottom:12px;left:50%;transform:translateX(-50%);z-index:30;pointer-events:none;padding:5px 12px;border-radius:6px;font-size:11px;white-space:nowrap;background:rgba(0,0,0,0.72);color:#ffffff;transition:opacity .3s ease;",
    t
  );
  e.appendChild(n), setTimeout(() => {
    n.style.opacity = "0", setTimeout(() => n.remove(), 300);
  }, mc);
}
const yc = { min: 0.25, max: 12 };
function vc(e, t = yc) {
  let n = 1;
  return {
    zoomBy(o) {
      const i = Math.min(t.max, Math.max(t.min, n * o));
      if (i === n) return;
      const r = i / n;
      n = i, e.zoom(r), e.render();
    },
    reset() {
      n = 1, e.zoomTo(), e.render();
    },
    level: () => n
  };
}
const $c = 2e-3;
function bc(e) {
  return Math.exp(-e.deltaY * $c);
}
function ui(e, t, n = {}) {
  const o = vc(t, n.bounds), i = or(e, {
    hint: n.hint ?? "Click or hold Ctrl to zoom",
    onZoom: (r) => o.zoomBy(bc(r))
  });
  return { ...o, cleanup: i.cleanup };
}
function ir(e, t = "Reset view") {
  const n = j("button", Be, "Reset");
  return n.title = t, n.setAttribute("aria-label", t), n.onclick = e, n;
}
const ct = {
  elementChange: "#005AB5",
  uniqueAtom: "#DC3220",
  elementChange3D: "0x005AB5",
  uniqueAtom3D: "0xDC3220"
}, Bl = [
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
], Ll = "hsv", D = [0, 0, 0], wc = {
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
}, _c = {
  atomColourPalette: wc,
  addAtomIndices: !0,
  continuousHighlight: !1
}, wn = `
`, Bn = "$$$$";
function zo(e, t) {
  if (!e || !e.trim()) throw new Error("empty SDF");
  const n = e.replace(/\r/g, "").split(wn);
  if (n.length < 4) throw new Error("SDF too short");
  const o = n[3];
  if (o.indexOf("V3000") !== -1) throw new Error("V3000 molfiles are not supported");
  const i = parseInt(o.substring(0, 3), 10), r = parseInt(o.substring(3, 6), 10);
  if (!isFinite(i) || i <= 0) throw new Error(`bad counts line: ${o}`);
  const s = [], a = [];
  for (let m = 0; m < i; m++) {
    const C = n[4 + m];
    if (C == null) throw new Error("truncated atom block");
    s.push([
      parseFloat(C.substring(0, 10)) || 0,
      parseFloat(C.substring(10, 20)) || 0,
      parseFloat(C.substring(20, 30)) || 0
    ]), a.push(C.substring(31, 34).trim() || "X");
  }
  const d = [];
  for (let m = 0; m < (isFinite(r) ? r : 0); m++) {
    const C = n[4 + i + m];
    if (C == null) break;
    const b = parseInt(C.substring(0, 3), 10), v = parseInt(C.substring(3, 6), 10), _ = parseInt(C.substring(6, 9), 10);
    !isFinite(b) || !isFinite(v) || d.push([b - 1, v - 1, isFinite(_) ? _ : 1]);
  }
  return { name: (n[0] || "").trim() || t || "molecule", symbols: a, bonds: d, coords: s };
}
function Sc(e) {
  const t = e.symbols.length, n = e.bonds.length, o = [
    e.name || "",
    "  Generated",
    "",
    `${String(t).padStart(3)}${String(n).padStart(3)}  0  0  0  0  0  0  0  0999 V2000`
  ];
  for (let i = 0; i < t; i++) {
    const r = e.coords[i];
    o.push(
      r[0].toFixed(4).padStart(10) + r[1].toFixed(4).padStart(10) + r[2].toFixed(4).padStart(10) + ` ${e.symbols[i].padEnd(3)} 0  0  0  0  0  0  0  0  0  0  0  0`
    );
  }
  for (let i = 0; i < n; i++) {
    const r = e.bonds[i], s = r[2] === 12 ? 4 : r[2];
    o.push(
      String(r[0] + 1).padStart(3) + String(r[1] + 1).padStart(3) + String(s).padStart(3) + "  0  0  0  0"
    );
  }
  return o.push("M  END"), o.join(wn);
}
const Cc = (e) => `${Sc(e)}${wn}${Bn}`, kc = (e) => e.indexOf(Bn) >= 0 ? e : `${e}${wn}${Bn}`;
function xc(e) {
  const t = String(e).split(/\r?\n/);
  if (t.length < 4) return null;
  const n = parseInt(t[3].slice(0, 3), 10), o = parseInt(t[3].slice(3, 6), 10);
  return isNaN(n) || isNaN(o) ? null : { atoms: n, bonds: o };
}
function fi(e, t, n) {
  let o = null;
  try {
    if (o = e.get_mol(t, JSON.stringify({ removeHs: !0 })), !o) return null;
    try {
      o.set_new_coords(!0);
    } catch {
    }
    return o.get_svg(n, n) || null;
  } catch (i) {
    return console.warn("[gufe-viz] depictSVG threw -", ge(i)), null;
  } finally {
    if (o)
      try {
        o.delete();
      } catch {
      }
  }
}
function pi(e, t, n) {
  e.innerHTML = t;
  const o = e.querySelector("svg");
  o && (o.removeAttribute("width"), o.removeAttribute("height"), o.getAttribute("viewBox") || o.setAttribute("viewBox", `0 0 ${n} ${n}`), o.setAttribute("preserveAspectRatio", "xMidYMid meet"), o.setAttribute("style", "width:100%;height:100%;max-width:100%;max-height:100%;"));
}
function Ec(e, t, n, o, i = {}) {
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
        ..._c,
        highlightAtomColors: i
      })
    ) || null : r.get_svg(n, n) || null : null;
  } catch (s) {
    return console.warn("[gufe-viz] depictHighlightedSVG threw -", ge(s)), null;
  } finally {
    if (r)
      try {
        r.delete();
      } catch {
      }
  }
}
const Pc = [
  { id: "stick", label: "Stick", title: "Sticks only" },
  { id: "ball", label: "Ball+Stick", title: "Ball and stick" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" }
], Io = {
  stick: { stick: { radius: 0.15, colorscheme: "Jmol" } },
  ball: { stick: { radius: 0.12, colorscheme: "Jmol" }, sphere: { scale: 0.28, colorscheme: "Jmol" } },
  sphere: { sphere: { scale: 1, colorscheme: "Jmol" } }
}, qo = 400;
class Ac extends Se {
  placeholder() {
    return "Waiting for a SmallMoleculeComponent payload...";
  }
  renderView(t, n) {
    const o = n.sdf, i = n.name ?? "", r = n.smiles, s = n.total_charge;
    t.appendChild(Te(i || "Unnamed molecule"));
    const a = j("div", "flex:1;display:flex;flex-direction:row;overflow:hidden;min-height:0;");
    t.appendChild(a);
    const d = j("div", "flex:1 1 50%;min-width:0;display:flex;flex-direction:column;"), y = j("div", "flex:1 1 50%;min-width:0;display:flex;flex-direction:column;position:relative;");
    a.appendChild(d), a.appendChild(j("div", `width:1px;flex-shrink:0;background:${E.splitBorder};`)), a.appendChild(y);
    const m = (p) => j("div", `flex-shrink:0;padding:4px 10px;font-size:12px;font-weight:bold;color:${E.labelFg};background:${E.labelBg};`, p);
    d.appendChild(m("2D"));
    const C = j(
      "div",
      `flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:8px;background:${E.canvas2DBg};`
    );
    d.appendChild(C), y.appendChild(m("3D"));
    const b = Xo();
    y.appendChild(b.wrap);
    const v = j(
      "div",
      `flex-shrink:0;display:flex;flex-wrap:wrap;align-items:baseline;gap:6px 20px;padding:8px 16px;font-size:12px;background:${E.toolbarBg};border-top:1px solid ${E.toolbarBorder};color:${E.textPrimary};`
    );
    t.appendChild(v);
    const _ = o ? xc(o) : null, w = [
      ["Name", i || Ze, !1],
      ["SMILES", r || Ze, !0],
      ["Charge", s == null ? Ze : String(s), !1],
      ["Atoms", _ ? String(_.atoms) : Ze, !1],
      ["Bonds", _ ? String(_.bonds) : Ze, !1]
    ];
    for (const [p, k, P] of w) {
      const N = j("div", "display:flex;align-items:baseline;gap:6px;min-width:0;");
      N.appendChild(
        j(
          "span",
          `font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;flex-shrink:0;color:${E.textMuted2};`,
          p
        )
      );
      const z = j(
        "span",
        `user-select:text;cursor:text;color:${E.textPrimary}` + (P ? ";font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:11px;overflow-wrap:anywhere;" : ""),
        k
      );
      z.title = k, N.appendChild(z), v.appendChild(N);
    }
    if (!o || !o.trim())
      return C.appendChild(ae("No molecule provided")), b.container.appendChild(ae("No molecule provided")), {};
    C.appendChild(ae("Loading 2D depiction...")), rr().then((p) => {
      const k = fi(p, o, qo);
      k ? pi(C, k, qo) : C.replaceChildren(ae("Failed to parse molecule", !0));
    }).catch((p) => {
      C.replaceChildren(ae(`RDKit failed to load: ${ge(p)}`, !0));
    });
    let f = null, g = null, u = "stick", h = !1;
    const S = j(
      "div",
      `position:absolute;bottom:10px;right:10px;display:flex;gap:4px;padding:4px;border-radius:6px;z-index:10;background:${E.switcherBg};box-shadow:0 2px 8px rgba(0,0,0,0.25);`
    );
    S.appendChild(
      mn(Pc, u, (p) => {
        u = p, f && (f.setStyle({}, Io[p]), f.render());
      })
    );
    const c = j("button", `${Be}margin-left:4px;`, "Spin");
    c.title = "Toggle continuous rotation", c.onclick = () => {
      h = !h, c.style.background = h ? E.btnBgActive : E.btnBg;
      try {
        f?.spin(h ? "y" : !1);
      } catch {
      }
    }, S.appendChild(c);
    const l = ir(() => g?.reset());
    return l.style.marginLeft = "4px", S.appendChild(l), y.appendChild(S), b.container.appendChild(ae("Loading 3D viewer...")), nr().then(() => {
      b.container.replaceChildren(), f = Ve.createViewer(b.container, { backgroundColor: E.viewerBg }), f.addModel(kc(o), "sdf"), f.setStyle({}, Io[u]), f.zoomTo(), f.render(), g = ui(b.container, f);
    }).catch((p) => {
      b.container.replaceChildren(ae(`3D render failed: ${ge(p)}`, !0));
    }), {
      onResize() {
        f && (f.resize(), f.render());
      },
      cleanup() {
        if (g?.cleanup(), g = null, !!f) {
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
Ce("gufe-small-molecule", Ac);
const hi = ["HOH", "WAT", "SOL", "TIP3"], Do = { hetflag: !1 }, Rc = { hetflag: !0 }, Fc = { resn: hi }, Oe = {
  stick: { radius: 0.15 },
  sphere: { scale: 0.3 },
  hetero: { stickRadius: 0.2, sphereScale: 0.28 },
  water: { stickRadius: 0.05, sphereScale: 0.18 },
  surfaceOpacity: 0.85,
  /** Above this many atoms a surface is slow enough to be worth warning about. */
  surfaceAtomWarn: 4e4
};
function Mc(e) {
  const t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
  let o = 0, i = 0, r = 0, s = 1 / 0, a = -1 / 0;
  for (const d of e.split(/\r?\n/)) {
    const y = d.slice(0, 6);
    if (y === "ENDMDL") break;
    if (y !== "ATOM  " && y !== "HETATM") continue;
    o++, y === "HETATM" && i++;
    const m = d.slice(17, 20).trim(), C = d.slice(21, 22).trim() || "_", b = d.slice(22, 26).trim(), v = d.slice(26, 27).trim();
    hi.indexOf(m) !== -1 && r++, t.add(C), n.add(`${C}|${b}${v}|${m}`);
    const _ = parseInt(b, 10);
    isNaN(_) || (_ < s && (s = _), _ > a && (a = _));
  }
  return {
    chains: t.size,
    residues: n.size,
    atoms: o,
    hetatms: i,
    waters: r,
    heteroNonWater: i - r,
    resiMin: s === 1 / 0 ? 0 : s,
    resiMax: a === -1 / 0 ? 0 : a
  };
}
function Nc(e) {
  return `${nt(e.chains)} chains · ${nt(e.residues)} residues · ${nt(e.atoms)} atoms · ${nt(e.hetatms)} HETATM` + (e.waters > 0 ? ` (${nt(e.waters)} water)` : "");
}
function jc(e, t) {
  return e === "chain" ? { colorscheme: "chain" } : e === "ss" ? { colorscheme: "ssJmol" } : e === "spectrum" && t && t.resiMax > t.resiMin ? { colorscheme: { prop: "resi", gradient: "roygb", min: t.resiMin, max: t.resiMax } } : { colorscheme: "Jmol" };
}
function Vo(e, t, n, o) {
  const i = o || (() => {
  }), r = jc(t.color, n);
  try {
    e.removeAllSurfaces();
  } catch {
  }
  if (e.setStyle({}, {}), e.setStyle(
    Do,
    t.rep === "stick" ? { stick: { radius: Oe.stick.radius, ...r } } : t.rep === "sphere" ? { sphere: { scale: Oe.sphere.scale, ...r } } : (
      // For 'surface' the shell is added separately; leave the atoms bare so
      // it is not cluttered from the inside.
      t.rep === "surface" ? {} : { cartoon: { ...r } }
    )
  ), e.setStyle(
    Rc,
    t.hetero ? {
      stick: { radius: Oe.hetero.stickRadius, colorscheme: "Jmol" },
      sphere: { scale: Oe.hetero.sphereScale, colorscheme: "Jmol" }
    } : {}
  ), e.setStyle(
    Fc,
    t.waters ? {
      stick: { radius: Oe.water.stickRadius, colorscheme: "Jmol" },
      sphere: { scale: Oe.water.sphereScale, colorscheme: "Jmol" }
    } : {}
  ), t.rep !== "surface") {
    i(null), e.render();
    return;
  }
  i(
    n && n.atoms > Oe.surfaceAtomWarn ? "Computing surface (large structure, this may take a while)..." : "Computing surface..."
  ), e.render(), setTimeout(() => {
    try {
      Promise.resolve(
        e.addSurface(Ve.SurfaceType.VDW, { opacity: Oe.surfaceOpacity, ...r }, Do)
      ).then(() => {
        i(null), e.render();
      }).catch((s) => i(`Surface failed: ${ge(s)}`, "error"));
    } catch (s) {
      i(`Surface failed: ${ge(s)}`, "error");
    }
  }, 30);
}
const Oc = [
  { id: "cartoon", label: "Cartoon", title: "Ribbon / cartoon backbone" },
  { id: "surface", label: "Surface", title: "Molecular (VDW) surface" },
  { id: "stick", label: "Stick", title: "All-atom sticks" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" }
], Tc = [
  { id: "chain", label: "Chain" },
  { id: "spectrum", label: "Spectrum" },
  { id: "ss", label: "Secondary structure" },
  { id: "element", label: "Element" }
];
class zc extends Se {
  placeholder() {
    return "Waiting for a ProteinComponent payload...";
  }
  renderView(t, n) {
    const o = n.pdb, i = n.name ?? "", s = { rep: "cartoon", color: "chain", waters: n.type !== "ProteinComponentViz", hetero: !0 };
    let a = null, d = null, y = null;
    const m = j(
      "div",
      `display:flex;align-items:center;gap:14px;flex-wrap:wrap;padding:8px 14px;flex-shrink:0;font-size:12px;background:${E.toolbarBg};border-bottom:1px solid ${E.toolbarBorder};color:${E.textPrimary};`
    );
    t.appendChild(m), m.appendChild(
      j("span", `font-weight:700;font-size:14px;letter-spacing:.02em;color:${E.titleColor};`, i || "Protein")
    );
    const C = (S) => j("span", `font-size:11px;color:${E.textMuted};`, S);
    m.appendChild(C("Style:")), m.appendChild(
      mn(Oc, s.rep, (S) => {
        s.rep = S, h();
      })
    ), m.appendChild(C("Color:"));
    const b = j("select", dn);
    for (const S of Tc) {
      const c = j("option", "", S.label);
      c.value = S.id, b.appendChild(c);
    }
    b.value = s.color, b.addEventListener("change", () => {
      s.color = b.value, h();
    }), m.appendChild(b);
    const v = j("div", "display:flex;gap:4px;");
    m.appendChild(v);
    const _ = [
      ["waters", "Waters", "Show water molecules", () => h()],
      ["hetero", "Hetero", "Show hetero atoms / ligands / ions / lipids", () => h()],
      ["spin", "Spin", "Rotate the view continuously", () => a?.spin(s.spin ? "y" : !1)]
    ];
    for (const [S, c, l, p] of _) {
      const k = j("button", Be, c);
      k.title = l, k.style.background = s[S] ? E.btnBgActive : E.btnBg, k.onclick = () => {
        s[S] = !s[S], k.style.background = s[S] ? E.btnBgActive : E.btnBg, p();
      }, v.appendChild(k);
    }
    v.appendChild(ir(() => d?.reset()));
    const w = j("span", `margin-left:auto;font-size:11px;white-space:nowrap;color:${E.textMuted2};`);
    m.appendChild(w);
    const f = Xo();
    t.appendChild(f.wrap);
    const g = j(
      "div",
      "position:absolute;top:12px;left:50%;transform:translateX(-50%);padding:6px 14px;border-radius:6px;font-size:12px;z-index:20;display:none;pointer-events:none;"
    );
    f.wrap.appendChild(g);
    const u = (S, c) => {
      if (S == null) {
        g.style.display = "none";
        return;
      }
      g.textContent = S, g.style.display = "block";
      const l = c === "error";
      g.style.background = l ? E.warnBg : E.toolbarBg, g.style.color = l ? E.warnFg : E.textMuted, g.style.border = `1px solid ${l ? E.warnBorder : E.toolbarBorder}`;
    };
    function h() {
      a && Vo(a, s, y, u);
    }
    if (!o || !o.trim())
      return u("No protein data - waiting for a PDB payload."), {};
    try {
      y = Mc(o), w.textContent = Nc(y);
    } catch (S) {
      u(`⚠ PDB parse error: ${ge(S)}`, "error");
    }
    return u("Loading 3D viewer..."), nr().then(() => {
      a = Ve.createViewer(f.container, { backgroundColor: E.viewerBg }), a.addModel(o, "pdb"), Vo(a, s, y, u), a.zoomTo(), a.spin(s.spin ? "y" : !1), a.render(), d = ui(f.container, a);
    }).catch((S) => {
      u(`⚠ Failed to render structure: ${ge(S)}`, "error");
    }), {
      onResize() {
        a && (a.resize(), a.render());
      },
      cleanup() {
        if (d?.cleanup(), d = null, !!a) {
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
Ce("gufe-protein", zc);
const mi = "http://www.w3.org/2000/svg";
function ie(e, t = {}) {
  const n = document.createElementNS(mi, e);
  for (const [o, i] of Object.entries(t)) n.setAttribute(o, String(i));
  return n;
}
function hn(e, t) {
  const n = document.createElementNS(mi, "title");
  return n.textContent = t, e.appendChild(n), e;
}
function dt(e) {
  const t = /* @__PURE__ */ new Map();
  return Ln(e, t, /* @__PURE__ */ new Set()), t;
}
function Ln(e, t, n) {
  if (e == null || typeof e != "object" || n.has(e)) return;
  if (n.add(e), Array.isArray(e)) {
    for (const i of e) Ln(i, t, n);
    return;
  }
  const o = e.registry;
  if (Array.isArray(o))
    for (const i of o) {
      const r = i["gufe-key"];
      typeof r == "string" && r && !t.has(r) && t.set(r, i);
    }
  for (const i of Object.values(e)) Ln(i, t, n);
}
function Le(e, t) {
  return t ? e.get(t) : void 0;
}
function Ae(e, t, n) {
  const o = Le(e, t);
  return o?.type === n ? o : void 0;
}
function et(e) {
  return e.name ? e.name : (e["gufe-key"].split("-").pop() ?? e["gufe-key"]).slice(0, 6);
}
function an(e, t) {
  const n = new Array(9);
  for (let o = 0; o < 3; o++)
    for (let i = 0; i < 3; i++)
      n[o * 3 + i] = e[o * 3] * t[i] + e[o * 3 + 1] * t[3 + i] + e[o * 3 + 2] * t[6 + i];
  return n;
}
function Bo(e) {
  return [e[0], e[3], e[6], e[1], e[4], e[7], e[2], e[5], e[8]];
}
function Ic(e) {
  return e[0] * (e[4] * e[8] - e[5] * e[7]) - e[1] * (e[3] * e[8] - e[5] * e[6]) + e[2] * (e[3] * e[7] - e[4] * e[6]);
}
function Lo(e) {
  const t = e.slice(), n = [1, 0, 0, 0, 1, 0, 0, 0, 1];
  for (let o = 0; o < 50 && !(Math.abs(t[1]) + Math.abs(t[2]) + Math.abs(t[5]) < 1e-12); o++) {
    const r = [[0, 1], [0, 2], [1, 2]];
    for (let s = 0; s < 3; s++) {
      const a = r[s][0], d = r[s][1], y = t[a * 3 + d];
      if (Math.abs(y) < 1e-14) continue;
      const m = t[a * 3 + a], C = t[d * 3 + d], b = (C - m) / (2 * y);
      let v;
      Math.abs(b) > 1e10 ? v = 1 / (2 * b) : v = (b >= 0 ? 1 : -1) / (Math.abs(b) + Math.sqrt(b * b + 1));
      const _ = 1 / Math.sqrt(1 + v * v), w = v * _;
      t[a * 3 + a] = m - v * y, t[d * 3 + d] = C + v * y, t[a * 3 + d] = 0, t[d * 3 + a] = 0;
      for (let f = 0; f < 3; f++)
        if (f !== a && f !== d) {
          const g = t[f * 3 + a], u = t[f * 3 + d];
          t[f * 3 + a] = _ * g - w * u, t[a * 3 + f] = t[f * 3 + a], t[f * 3 + d] = w * g + _ * u, t[d * 3 + f] = t[f * 3 + d];
        }
      for (let f = 0; f < 3; f++) {
        const g = n[f * 3 + a], u = n[f * 3 + d];
        n[f * 3 + a] = _ * g - w * u, n[f * 3 + d] = w * g + _ * u;
      }
    }
  }
  return { values: [t[0], t[4], t[8]], vectors: n };
}
function qc(e, t) {
  const n = Math.min(e.length, t.length);
  if (n < 1) return null;
  const o = [0, 0, 0], i = [0, 0, 0];
  for (let h = 0; h < n; h++)
    o[0] += e[h][0], o[1] += e[h][1], o[2] += e[h][2], i[0] += t[h][0], i[1] += t[h][1], i[2] += t[h][2];
  if (o[0] /= n, o[1] /= n, o[2] /= n, i[0] /= n, i[1] /= n, i[2] /= n, n < 3)
    return { R: [1, 0, 0, 0, 1, 0, 0, 0, 1], t: [o[0] - i[0], o[1] - i[1], o[2] - i[2]] };
  const r = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let h = 0; h < n; h++) {
    const S = e[h][0] - o[0], c = e[h][1] - o[1], l = e[h][2] - o[2], p = t[h][0] - i[0], k = t[h][1] - i[1], P = t[h][2] - i[2];
    r[0] += S * p, r[1] += S * k, r[2] += S * P, r[3] += c * p, r[4] += c * k, r[5] += c * P, r[6] += l * p, r[7] += l * k, r[8] += l * P;
  }
  const s = Bo(r), a = an(s, r), d = an(r, s);
  let y = Lo(a), m = Lo(d);
  function C(h) {
    const S = [0, 1, 2].sort((l, p) => h.values[p] - h.values[l]), c = new Array(9);
    for (let l = 0; l < 3; l++) {
      const p = S[l];
      c[l] = h.vectors[p], c[3 + l] = h.vectors[3 + p], c[6 + l] = h.vectors[6 + p];
    }
    return {
      values: [h.values[S[0]], h.values[S[1]], h.values[S[2]]],
      vectors: c
    };
  }
  y = C(y), m = C(m);
  const b = y.vectors, v = m.vectors;
  for (let h = 0; h < 3; h++) {
    const S = b[h], c = b[3 + h], l = b[6 + h], p = r[0] * S + r[1] * c + r[2] * l, k = r[3] * S + r[4] * c + r[5] * l, P = r[6] * S + r[7] * c + r[8] * l, N = v[h], z = v[3 + h], A = v[6 + h];
    p * N + k * z + P * A < 0 && (v[h] = -N, v[3 + h] = -z, v[6 + h] = -A);
  }
  const _ = Bo(b);
  let w = an(v, _);
  Ic(w) < 0 && (v[2] = -v[2], v[5] = -v[5], v[8] = -v[8], w = an(v, _));
  const f = w[0] * i[0] + w[1] * i[1] + w[2] * i[2], g = w[3] * i[0] + w[4] * i[1] + w[5] * i[2], u = w[6] * i[0] + w[7] * i[1] + w[8] * i[2];
  return { R: w, t: [o[0] - f, o[1] - g, o[2] - u] };
}
function Dc(e, t, n) {
  const o = e[0], i = e[1], r = e[2];
  return [
    t[0] * o + t[1] * i + t[2] * r + n[0],
    t[3] * o + t[4] * i + t[5] * r + n[1],
    t[6] * o + t[7] * i + t[8] * r + n[2]
  ];
}
const Vc = [
  { id: "plain", label: "3D", title: "Plain 3D view" },
  { id: "colored", label: "3D-Map", title: "Colour-coded by mapping" },
  { id: "lines", label: "Pairs", title: "Dashed lines between mapped atoms" },
  { id: "overlay", label: "Overlay", title: "Both molecules superimposed" },
  { id: "2d", label: "2D", title: "2D depictions with highlights" },
  { id: "info", label: "Info", title: "The mapping in numbers" }
], Uo = 420, pe = {
  stick: 0.15,
  sphere: 0.25,
  uniqueStick: 0.18,
  uniqueSphere: 0.32,
  pairSphere: 0.22,
  overlayOpacity: 0.7,
  lineRadius: 0.04
}, Tn = { gap: 2.5, minLiftFraction: 0.6 };
function gi(e) {
  const t = parseInt(e.replace("#", ""), 16);
  return [(t >> 16 & 255) / 255, (t >> 8 & 255) / 255, (t & 255) / 255];
}
const Bc = gi(ct.elementChange), Lc = gi(ct.uniqueAtom);
function Ko(e, t, n) {
  const o = [], i = [], r = [];
  for (let s = 0; s < t.length; s++) {
    const a = e.get(s);
    a === void 0 ? o.push(s) : t[s] !== n[a] ? i.push(s) : r.push(s);
  }
  return { atoms: o, elements: i, mapped: r };
}
function Uc(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e.componentA_to_componentB ?? [])
    Number.isInteger(n?.index_A) && Number.isInteger(n?.index_B) && t.set(n.index_A, n.index_B);
  return t;
}
function yi(e, t) {
  const n = Ae(t, e.componentA, "SmallMoleculeComponentViz"), o = Ae(t, e.componentB, "SmallMoleculeComponentViz");
  return !n || !o ? null : { ...e, registry: n["gufe-key"] === o["gufe-key"] ? [n] : [n, o] };
}
function Ho(e) {
  const t = [1 / 0, 1 / 0, 1 / 0], n = [-1 / 0, -1 / 0, -1 / 0];
  for (const o of e)
    for (let i = 0; i < 3; i++)
      o[i] < t[i] && (t[i] = o[i]), o[i] > n[i] && (n[i] = o[i]);
  return { min: t, max: n, span: [n[0] - t[0], n[1] - t[1], n[2] - t[2]] };
}
function Kc(e, t) {
  const n = Ho(e), o = Ho(t);
  let i = 0;
  n.span[1] < n.span[i] && (i = 1), n.span[2] < n.span[i] && (i = 2);
  const r = Math.max(n.span[0], n.span[1], n.span[2]), s = n.max[i] - o.min[i] + Tn.gap, a = Tn.minLiftFraction * r + Tn.gap;
  return { axis: i, lift: Math.max(s, a) };
}
class Hc extends Se {
  placeholder() {
    return "Waiting for a LigandAtomMapping payload...";
  }
  renderView(t, n) {
    const o = dt(n), i = Ae(o, n.componentA, "SmallMoleculeComponentViz"), r = Ae(o, n.componentB, "SmallMoleculeComponentViz");
    if (!i || !r)
      return t.appendChild(
        ae("This mapping names two molecules, and its registry does not hold them.")
      ), {};
    const s = et(i), a = et(r), d = Uc(n);
    let y, m;
    try {
      y = zo(i.sdf, s), m = zo(r.sdf, a);
    } catch (L) {
      return t.appendChild(ae(`Could not read a molecule: ${ge(L)}`, !0)), {};
    }
    const C = /* @__PURE__ */ new Map();
    for (const [L, H] of d) C.set(H, L);
    const b = Ko(d, y.symbols, m.symbols), v = Ko(C, m.symbols, y.symbols), _ = j("div", "position:relative;flex:1;min-height:0;display:flex;flex-direction:column;");
    t.appendChild(_);
    const w = j("div", "flex:1;display:flex;flex-direction:column;min-height:0;");
    _.appendChild(w);
    let f = "plain";
    const g = j(
      "div",
      `position:absolute;bottom:10px;right:10px;display:flex;gap:4px;padding:4px;border-radius:6px;z-index:10;background:${E.switcherBg};box-shadow:0 2px 8px rgba(0,0,0,0.25);`
    );
    g.appendChild(
      mn(Vc, f, (L) => {
        f = L, Z();
      })
    ), _.appendChild(g);
    let u = [], h = 0, S = !0;
    const c = () => {
      h && cancelAnimationFrame(h), h = 0;
      for (const L of u) {
        L.guard?.cleanup();
        try {
          L.viewer?.clear();
        } catch {
        }
      }
      u = [], w.replaceChildren();
    }, l = (L) => {
      const H = j("div", "flex:1;display:flex;flex-direction:column;position:relative;min-height:0;");
      H.appendChild(
        j(
          "div",
          `padding:4px 10px;font-size:13px;font-weight:bold;color:${E.labelFg};background:${E.labelBg};`,
          L
        )
      );
      const U = j("div", "flex:1;position:relative;min-height:0;");
      U.dataset.gufeViewer = "", H.appendChild(U), w.appendChild(H);
      const Y = { container: U, viewer: null, guard: null };
      return u.push(Y), Y;
    }, p = () => {
      if (u.length < 2) return;
      const L = u.map(() => "");
      let H = !1;
      const U = () => {
        if (S) {
          if (!H)
            for (let Y = 0; Y < u.length; Y++) {
              const V = u[Y].viewer;
              if (!V) continue;
              const R = JSON.stringify(V.getView());
              if (R !== L[Y]) {
                H = !0;
                for (let q = 0; q < u.length; q++)
                  q !== Y && u[q].viewer && (u[q].viewer.setView(V.getView()), u[q].viewer.render()), L[q] = R;
                H = !1;
                break;
              }
            }
          h = requestAnimationFrame(U);
        }
      };
      h = requestAnimationFrame(U);
    }, k = (L, H) => {
      const U = Ve.createViewer(L.container, { backgroundColor: E.viewerBg });
      for (const { mol: Y } of H) U.addModel(Cc(Y), "sdf");
      return L.viewer = U, L.guard = or(L.container, {
        hint: "Click or hold Ctrl to zoom",
        onZoom: () => {
        }
      }), U;
    }, P = () => {
      for (const L of [y, m]) {
        const H = l(L.name), U = k(H, [{ mol: L }]);
        U.setStyle(
          {},
          { stick: { radius: pe.stick, colorscheme: "Jmol" }, sphere: { scale: pe.sphere, colorscheme: "Jmol" } }
        ), U.zoomTo(), U.render();
      }
      p();
    }, N = () => {
      const L = [
        { mol: y, uniques: b, colour: E.colorUniqueA },
        { mol: m, uniques: v, colour: E.colorUniqueB }
      ];
      for (const H of L) {
        const U = l(H.mol.name), Y = k(U, [{ mol: H.mol }]);
        Y.setStyle(
          {},
          { stick: { radius: pe.stick, color: E.colorCore }, sphere: { scale: pe.sphere, color: E.colorCore } }
        );
        for (const V of H.uniques.atoms)
          Y.addStyle(
            { serial: V + 1 },
            {
              stick: { radius: pe.uniqueStick, color: H.colour },
              sphere: { scale: pe.uniqueSphere, color: H.colour }
            }
          );
        Y.zoomTo(), Y.render();
      }
      p();
    }, z = () => {
      const L = l(`${s} to ${a}  (${d.size} mapped pairs)`), H = [], U = [];
      for (const [x, I] of d) {
        const G = y.coords[x], W = m.coords[I];
        G && W && (H.push(G), U.push(W));
      }
      const Y = qc(H, U), V = m.coords.map((x) => Y ? Dc(x, Y.R, Y.t) : [...x]), { axis: R, lift: q } = Kc(y.coords, V), M = {
        ...m,
        coords: V.map((x) => {
          const I = [x[0], x[1], x[2]];
          return I[R] += q, I;
        })
      }, $ = k(L, [{ mol: y }, { mol: M }]);
      $.setStyle(
        { model: 0 },
        { stick: { radius: pe.stick, color: E.linesMolA }, sphere: { scale: pe.pairSphere, color: E.linesMolA } }
      ), $.setStyle(
        { model: 1 },
        { stick: { radius: pe.stick, color: E.linesMolB }, sphere: { scale: pe.pairSphere, color: E.linesMolB } }
      );
      for (const [x, I] of d) {
        const G = y.coords[x], W = M.coords[I];
        !G || !W || $.addCylinder({
          start: { x: G[0], y: G[1], z: G[2] },
          end: { x: W[0], y: W[1], z: W[2] },
          radius: pe.lineRadius,
          dashed: !0,
          fromCap: "round",
          toCap: "round",
          color: E.linesDash
        });
      }
      $.zoomTo(), R === 2 ? $.rotate(90, "x") : R === 0 && $.rotate(-90, "z"), $.render();
    }, A = () => {
      const L = l(`${s} + ${a}  (overlay)`), H = k(L, [{ mol: y }, { mol: m }]);
      for (const [U, Y] of [
        [0, E.overlayMolA],
        [1, E.overlayMolB]
      ])
        H.setStyle(
          { model: U },
          {
            stick: { radius: pe.stick, color: Y, opacity: pe.overlayOpacity },
            sphere: { scale: pe.pairSphere, color: Y, opacity: pe.overlayOpacity }
          }
        );
      H.zoomTo(), H.render();
    }, T = () => {
      const H = [
        { mol: y, sdf: i.sdf, uniques: b },
        { mol: m, sdf: r.sdf, uniques: v }
      ].map((U) => {
        const Y = j("div", "flex:1;display:flex;flex-direction:column;min-height:0;");
        Y.appendChild(
          j(
            "div",
            `padding:4px 10px;font-size:13px;font-weight:bold;color:${E.labelFg};background:${E.labelBg};`,
            U.mol.name
          )
        );
        const V = j(
          "div",
          `flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:8px;background:${E.canvas2DBg};`
        );
        return V.appendChild(ae("Loading 2D depiction...")), Y.appendChild(V), w.appendChild(Y), { box: V, side: U };
      });
      rr().then((U) => {
        for (const { box: Y, side: V } of H) {
          const R = {};
          for (const $ of V.uniques.elements) R[$] = Bc;
          for (const $ of V.uniques.atoms) R[$] = Lc;
          const q = [...V.uniques.elements, ...V.uniques.atoms], M = Ec(U, V.sdf, Uo, q, R);
          Y.replaceChildren(), M ? pi(Y, M, Uo) : Y.appendChild(ae("Failed to parse molecule", !0));
        }
      }).catch((U) => {
        for (const { box: Y } of H)
          Y.replaceChildren(ae(`RDKit failed to load: ${ge(U)}`, !0));
      });
    }, J = () => {
      const L = j("div", "flex:1;min-height:0;overflow:auto;padding:14px;display:flex;flex-direction:column;gap:14px;");
      w.appendChild(L);
      const H = j("div", "display:flex;flex-direction:column;gap:2px;");
      H.appendChild(
        j(
          "div",
          `font-size:15px;font-weight:700;color:${E.titleColor};`,
          n.name || `${s} to ${a}`
        )
      ), H.appendChild(j("div", `font-size:12px;color:${E.textMuted2};`, "LigandAtomMapping")), L.appendChild(H);
      const U = j("div", "display:flex;flex-wrap:wrap;gap:8px 16px;font-size:11px;");
      U.appendChild(ce("mapped atoms", String(d.size))), U.appendChild(
        ce("element changes", String(b.elements.length), ct.elementChange)
      ), U.appendChild(ce(`unique to ${s}`, String(b.atoms.length), ct.uniqueAtom)), U.appendChild(ce(`unique to ${a}`, String(v.atoms.length), ct.uniqueAtom)), U.appendChild(ce(`atoms in ${s}`, String(y.symbols.length))), U.appendChild(ce(`atoms in ${a}`, String(m.symbols.length))), U.appendChild(ce("score", n.score == null ? Ze : n.score.toFixed(3))), L.appendChild(U);
      const Y = j("div", `font-size:11px;font-weight:700;color:${E.textMuted2};`, "CORRESPONDENCE");
      L.appendChild(Y);
      const V = j(
        "div",
        `font-size:11px;line-height:1.7;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;color:${E.textMuted};`
      );
      V.textContent = d.size ? Array.from(d, ([q, M]) => `${q} -> ${M}`).join("   ") : "This mapping relates no atoms at all.", L.appendChild(V);
      const R = Object.entries(n.annotations ?? {}).filter(([q]) => q !== "score");
      if (R.length) {
        L.appendChild(j("div", `font-size:11px;font-weight:700;color:${E.textMuted2};`, "ANNOTATIONS"));
        const q = j(
          "div",
          `font-size:11px;line-height:1.7;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;color:${E.textMuted2};`
        );
        for (const [M, $] of R)
          q.appendChild(j("div", "", `${M}: ${String($)}`));
        L.appendChild(q);
      }
      L.appendChild(
        j(
          "div",
          `font-size:11px;color:${E.textMuted2};overflow-wrap:anywhere;`,
          `gufe key: ${n["gufe-key"]}`
        )
      );
    }, Z = () => {
      if (c(), f === "info") {
        J();
        return;
      }
      if (f === "2d") {
        T();
        return;
      }
      w.appendChild(ae("Loading 3D viewer...")), nr().then(() => {
        S && (w.replaceChildren(), f === "colored" ? N() : f === "lines" ? z() : f === "overlay" ? A() : P());
      }).catch((L) => {
        w.replaceChildren(ae(`3D render failed: ${ge(L)}`, !0));
      });
    };
    return Z(), {
      onResize() {
        for (const L of u)
          L.viewer && (L.viewer.resize(), L.viewer.render());
      },
      cleanup() {
        S = !1, c();
      }
    };
  }
}
Ce("gufe-atom-mapping", Hc);
const Gc = ["Force-directed", "Circular", "Radial"], Qe = 38, cn = 200, Jc = 4, Wc = 14, Yc = 18, Go = 1.5, Xc = 6.5, Zc = 0.9, Qc = 14, zn = { size: 8, clearance: 8 }, In = { fontSize: 10, padding: 3, backgroundOpacity: 0.92 }, el = { padding: 4 }, Jo = { captions: 0.5, depictions: 1.1 }, ln = 200, tl = 24, qn = { node: 0.12, edge: 0.06 }, nl = 1.2, $e = {
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
function rl(e) {
  const t = j(
    "div",
    `position:absolute;z-index:30;pointer-events:none;opacity:0;transition:opacity .12s ease;padding:7px 10px;border-radius:6px;font-size:11px;line-height:1.5;max-width:260px;background:${E.tooltipBg};border:1px solid ${E.tooltipBorder};color:${E.textPrimary};box-shadow:0 4px 14px rgba(0,0,0,0.28);`
  );
  return e.appendChild(t), {
    show(n, o, i) {
      t.innerHTML = n, t.style.left = `${o + 14}px`, t.style.top = `${i - 10}px`, t.style.opacity = "1";
    },
    hide() {
      t.style.opacity = "0";
    },
    remove() {
      t.remove();
    }
  };
}
function ol(e) {
  const t = /* @__PURE__ */ new Map();
  return (n) => {
    const o = t.get(n);
    if (o) return o;
    const i = `arrow-${n.replace(/[^a-zA-Z0-9]/g, "")}`;
    t.set(n, i);
    const r = ie("marker", {
      id: i,
      viewBox: "0 -5 10 10",
      // Pushes the head back along the line so it stops at the node's edge
      // rather than under it.
      refX: Qe + zn.clearance,
      refY: 0,
      markerUnits: "userSpaceOnUse",
      markerWidth: zn.size,
      markerHeight: zn.size,
      orient: "auto"
    });
    return r.appendChild(ie("path", { d: "M0,-5L10,0L0,5", fill: n })), e.appendChild(r), i;
  };
}
function il(e) {
  const t = parseInt(e.replace("#", ""), 16);
  return [t >> 16 & 255, t >> 8 & 255, t & 255];
}
function sl(e) {
  const [t, n] = E.netEdgeRamp.map(il), o = Math.max(0, Math.min(1, e ?? 0.5));
  return `rgb(${t.map((r, s) => Math.round(r + (n[s] - r) * o)).join(",")})`;
}
const Ee = et, al = (e, t) => e.length > t ? `${e.slice(0, t - 1)}...` : e;
function cl(e) {
  const t = /* @__PURE__ */ new Set();
  let n = /* @__PURE__ */ new Set();
  const o = (r, s) => {
    if (t.has(s) || n.has(s)) return;
    const a = e.nodes[s], d = a.sdf && fi(r, a.sdf, cn);
    if (!d) {
      n.add(s);
      return;
    }
    const y = new DOMParser().parseFromString(d, "image/svg+xml").documentElement;
    if (!y || y.nodeName.toLowerCase() === "parsererror") {
      n.add(s);
      return;
    }
    const m = (Qe - Jc) * 2 / cn, C = e.depictionGroups[s];
    C.setAttribute(
      "transform",
      `translate(${-m * cn / 2},${-m * cn / 2}) scale(${m})`
    );
    let b = 0;
    for (const v of Array.from(y.childNodes)) {
      if (v.nodeType !== 1) continue;
      const _ = v.nodeName.toLowerCase();
      if (!(_ === "defs" || _ === "metadata" || _ === "title")) {
        if (_ === "rect") {
          const w = (v.getAttribute("fill") ?? "").toLowerCase();
          if (w === "#ffffff" || w === "white" || w === "rgb(255,255,255)") continue;
        }
        C.appendChild(document.importNode(v, !0)), b++;
      }
    }
    b ? t.add(s) : n.add(s);
  };
  return { apply: (r, s, a) => {
    const d = r >= Jo.captions;
    for (const v of e.captions)
      v.setAttribute("display", d ? "inline" : "none");
    const y = r >= Jo.depictions;
    for (let v = 0; v < e.nodes.length; v++) {
      const _ = y && t.has(v);
      e.depictionGroups[v].setAttribute("display", _ ? "inline" : "none"), e.initials[v].setAttribute("display", _ ? "none" : "inline");
    }
    if (!y) return;
    const { width: m, height: C } = e.viewport(), b = [];
    e.nodes.forEach((v, _) => {
      if (t.has(_) || n.has(_)) return;
      const w = v.x * r + s, f = v.y * r + a;
      w < -ln || f < -ln || w > m + ln || f > C + ln || b.push(_);
    }), b.length && e.rdkit().then((v) => {
      if (v)
        for (const _ of b) {
          o(v, _);
          const w = t.has(_);
          e.depictionGroups[_].setAttribute("display", w ? "inline" : "none"), e.initials[_].setAttribute("display", w ? "none" : "inline");
        }
    }).catch(() => {
    });
  }, drawn: () => t.size };
}
function ll(e, t, n, o, i) {
  const r = (s) => i === "keys" ? s["gufe-key"] : Ee(s);
  return o === "ligands" ? e.filter((s) => n.has(s["gufe-key"])).map(r).join(", ") : t.filter((s) => n.has(s.from["gufe-key"]) && n.has(s.to["gufe-key"])).map((s) => `${r(s.from)}, ${r(s.to)}`).join(`
`);
}
function dl(e, t) {
  navigator.clipboard?.writeText(e).catch(() => Wo(e, t)), navigator.clipboard || Wo(e, t);
}
function Wo(e, t) {
  const n = j("textarea", "width:100%;height:80px;font-size:11px;box-sizing:border-box;");
  n.value = e, n.readOnly = !0, t.appendChild(n), n.select();
}
function ul(e, t) {
  const n = URL.createObjectURL(new Blob([e], { type: "text/plain" })), o = j("a", "display:none;");
  o.href = n, o.download = t, document.body.appendChild(o), o.click(), o.remove(), URL.revokeObjectURL(n);
}
function fl(e) {
  const t = j(
    "div",
    `display:flex;flex-direction:column;gap:8px;width:236px;padding:10px;min-height:0;background:${E.panelBg};border-right:1px solid ${E.splitBorder};`
  ), n = j("input", `${dn}width:100%;box-sizing:border-box;`);
  n.type = "search", n.placeholder = "Search ligands", n.setAttribute("aria-label", "Search ligands by name, SMILES or gufe key"), t.appendChild(n);
  const o = j("div", `display:flex;align-items:center;gap:8px;font-size:11px;color:${E.textMuted};`), i = j("span", `min-width:28px;color:${E.textPrimary};`, "0.00"), r = j("input", "flex:1;");
  r.type = "range", r.min = "0", r.max = "1", r.step = "0.01", r.value = "0", r.setAttribute("aria-label", "Hide mappings scoring below this"), o.appendChild(j("span", "", "score >=")), o.appendChild(r), o.appendChild(i), t.appendChild(o);
  const s = j("div", `font-size:11px;color:${E.textMuted2};`);
  t.appendChild(s);
  const a = j("div", "flex:1;min-height:0;overflow:auto;display:flex;flex-direction:column;gap:3px;");
  t.appendChild(a);
  const d = j("div", "display:flex;flex-direction:column;gap:6px;"), y = j("div", `display:flex;align-items:center;gap:6px;font-size:11px;color:${E.textMuted};`);
  y.appendChild(j("span", "", "copy as"));
  const m = j("select", `${dn}flex:1;`);
  for (const [f, g] of [
    ["names", "names"],
    ["keys", "gufe keys"]
  ]) {
    const u = j("option", "", g);
    u.value = f, m.appendChild(u);
  }
  y.appendChild(m), d.appendChild(y);
  const C = j("div", "display:flex;gap:4px;"), b = [
    ["Ligands", "ligands", "Copy the selected ligand names, comma separated"],
    ["Edges", "edges", "Copy the selected edges, one pair per line"]
  ];
  for (const [f, g, u] of b) {
    const h = j("button", `${Be}flex:1;`, f);
    h.title = u, h.onclick = (S) => {
      const c = m.value, l = ll(e.nodes, e.edges, e.selected, g, c);
      l && (S.shiftKey ? ul(l, `selected-${g}.txt`) : dl(l, d));
    }, C.appendChild(h);
  }
  d.appendChild(C), d.appendChild(
    j("div", `font-size:10px;color:${E.textMuted2};`, "Shift-click to save as a file instead.")
  ), t.appendChild(d);
  const v = j("button", `${Be}width:100%;`, "Clear selection");
  v.onclick = () => {
    e.selected.clear(), w(), e.refresh();
  }, t.appendChild(v);
  const _ = (f) => {
    const g = e.query.text.trim().toLowerCase();
    return g ? Ee(f).toLowerCase().includes(g) || (f.smiles ?? "").toLowerCase().includes(g) || f["gufe-key"].toLowerCase().includes(g) : !0;
  }, w = () => {
    a.replaceChildren();
    const f = e.nodes.map((g, u) => ({ node: g, index: u })).filter(({ node: g }) => _(g));
    s.textContent = `${f.length} of ${e.nodes.length} ligands`;
    for (const { node: g, index: u } of f) {
      const h = g["gufe-key"], S = j(
        "button",
        `display:flex;align-items:center;gap:6px;padding:5px 8px;border-radius:6px;text-align:left;font-family:inherit;font-size:11px;cursor:pointer;width:100%;min-width:0;border:1px solid ${e.selected.has(h) ? E.cardBorderActive : E.cardBorder};background:${e.selected.has(h) ? E.cardBgActive : E.cardBg};color:${E.textPrimary};`
      ), c = j("span", "flex:1;min-width:0;overflow-wrap:anywhere;", Ee(g));
      c.title = `${Ee(g)}
${g.smiles ?? ""}`, S.appendChild(c), S.onclick = (l) => {
        l.shiftKey || l.metaKey || l.ctrlKey ? e.selected.has(h) ? e.selected.delete(h) : e.selected.add(h) : (e.selected.clear(), e.selected.add(h), e.focus(u)), w(), e.refresh();
      }, a.appendChild(S);
    }
    f.length || a.appendChild(j("div", `font-size:11px;padding:8px;color:${E.textMuted2};`, "Nothing matches."));
  };
  return n.oninput = () => {
    e.query.text = n.value, w(), e.refresh();
  }, r.oninput = () => {
    e.filter.minScore = Number(r.value), i.textContent = e.filter.minScore.toFixed(2), e.refresh();
  }, w(), t;
}
class pl extends Se {
  placeholder() {
    return "Waiting for a LigandNetwork payload...";
  }
  renderView(t, n) {
    const o = dt(n), i = [];
    let r = 0;
    for (const H of n.nodes ?? []) {
      const U = Ae(o, H, "SmallMoleculeComponentViz");
      if (!U) {
        r++;
        continue;
      }
      i.push({ ...U, x: 0, y: 0 });
    }
    const s = new Map(i.map((H) => [H["gufe-key"], H])), a = [];
    let d = 0;
    for (const H of n.edges ?? []) {
      const U = s.get(H.componentA), Y = s.get(H.componentB);
      if (!U || !Y) {
        d++;
        continue;
      }
      a.push({ ...H, index: a.length, from: U, to: Y });
    }
    const y = Te(n.name || "Ligand network");
    y.statsEl.appendChild(ce("ligands", String(i.length))), y.statsEl.appendChild(ce("mappings", String(a.length))), t.appendChild(y);
    const m = j("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    t.appendChild(m);
    const C = /* @__PURE__ */ new Set(), b = { minScore: 0 }, v = { text: "" };
    let _ = () => {
    };
    const w = _i(
      y,
      () => fl({
        nodes: i,
        edges: a,
        selected: C,
        filter: b,
        query: v,
        refresh: () => _(),
        focus: (H) => p(H)
      }),
      { label: "Search, filter and select ligands", onToggle: () => L() }
    );
    m.appendChild(w.panel);
    const f = j("div", `flex:1 1 58%;min-width:0;display:flex;flex-direction:column;background:${E.netCanvasBg};`), g = j("div", `flex:1 1 42%;min-width:0;display:flex;flex-direction:column;background:${E.appBg};`);
    m.appendChild(f), m.appendChild(j("div", `width:1px;flex-shrink:0;background:${E.splitBorder};`)), m.appendChild(g);
    const u = j("div", `flex:1;position:relative;overflow:hidden;min-height:0;background:${E.netCanvasBg};`);
    f.appendChild(u);
    const h = this.#t(
      (H) => L(H),
      () => J()
    );
    f.appendChild(h.bar);
    const S = this.#e(g, o);
    if (!i.length)
      return u.appendChild(
        ae(
          r ? "None of this network's ligands are in its registry." : "This network has no ligands."
        )
      ), S.message("Nothing to show."), {};
    r && De(
      u,
      `${r} ligand${r === 1 ? "" : "s"} named by this network are not in its registry`
    ), d && De(u, `${d} mapping${d === 1 ? "" : "s"} name a ligand this network does not contain`);
    const c = rr().catch((H) => (console.warn("[gufe-viz] RDKit failed to load:", ge(H)), null)), l = rl(u);
    let p = () => {
    }, k = a.length ? 0 : -1, P = null, N = "Force-directed", z = !1, A = !0, T = () => {
    }, J = () => {
    };
    const Z = (H) => {
      k = H, S.show(a[H] ?? null), T();
    }, L = (H = N) => {
      N = H, P?.(), P = null, u.querySelector("svg")?.remove();
      const U = u.clientWidth || 800, Y = u.clientHeight || 600;
      hl(i, U, Y, N, a);
      const V = () => {
        if (!A) return;
        const R = this.#r(u, i, a, U, Y, Z, c, l);
        T = () => R.setSelected(k), J = R.reset, P = R.cleanup, p = (q) => R.focusOn(q), _ = () => {
          const q = v.text.trim().toLowerCase(), M = C.size > 0 || q.length > 0, $ = /* @__PURE__ */ new Set();
          for (const G of i) {
            const W = G["gufe-key"], oe = C.has(W) || q.length > 0 && (Ee(G).toLowerCase().includes(q) || (G.smiles ?? "").toLowerCase().includes(q) || W.toLowerCase().includes(q));
            (!M || oe) && $.add(W);
          }
          const x = /* @__PURE__ */ new Set();
          a.forEach((G, W) => {
            (G.score ?? 0) < b.minScore || !$.has(G.from["gufe-key"]) || !$.has(G.to["gufe-key"]) || x.add(W);
          });
          const I = M || b.minScore > 0;
          R.setEmphasis(I ? $ : null, I ? x : null);
        }, T(), _(), R.fit();
      };
      if (N !== "Force-directed" || z) {
        V();
        return;
      }
      ml(i, a, U, Y).then((R) => {
        if (A) {
          if (R) {
            V();
            return;
          }
          z = !0, h.picker.value = "Circular", De(u, "d3 could not be loaded - showing the circular layout instead"), L("Circular");
        }
      }, V);
    };
    return L(), S.show(a[k] ?? null), {
      onResize: () => L(),
      cleanup: () => {
        A = !1, l.remove(), P?.();
      }
    };
  }
  #t(t, n) {
    const o = j(
      "div",
      `display:flex;align-items:center;gap:10px;flex-wrap:wrap;padding:8px 14px;flex-shrink:0;background:${E.toolbarBg};border-top:1px solid ${E.toolbarBorder};`
    ), i = j("div", `display:flex;align-items:center;gap:6px;font-size:11px;color:${E.textMuted};`);
    i.appendChild(j("span", "", "score")), i.appendChild(
      j(
        "span",
        `width:40px;height:4px;border-radius:2px;background:linear-gradient(to right,${E.netEdgeRamp.join(",")});`
      )
    ), i.appendChild(j("span", "", "0 -> 1")), o.appendChild(i), o.appendChild(j("label", `font-size:12px;margin-left:auto;color:${E.textMuted};`, "Layout"));
    const r = j("select", dn);
    for (const s of Gc) {
      const a = j("option", "", s);
      a.value = s, r.appendChild(a);
    }
    return r.onchange = () => t(r.value), o.appendChild(r), o.appendChild(ir(n, "Reset pan and zoom")), { bar: o, picker: r };
  }
  /**
   * The right-hand pane: the selected mapping, drawn by the mapping view.
   *
   * Deliberately nothing but that element. It carries its own header, names both
   * ligands on its own box labels, and keeps the counts and annotations behind
   * its Info mode - so a pane title, a heading repeating the two names, and an
   * annotation list underneath were all saying a second time what the picture
   * below them already said.
   */
  #e(t, n) {
    const o = j("div", "flex:1;min-height:0;display:flex;flex-direction:column;");
    t.appendChild(o);
    const i = (s) => o.replaceChildren(ae(s));
    return { show: (s) => {
      if (!s) {
        i("Click an edge to see its mapping.");
        return;
      }
      const a = document.createElement("gufe-atom-mapping");
      a.style.cssText = "flex:1;min-width:0;min-height:0;display:flex;", a.payload = yi(s, n), o.replaceChildren(a);
    }, message: i };
  }
  /** Build the SVG for the current node positions. Returns the handles the
   * caller needs afterwards: selection, depictions, and teardown. */
  #r(t, n, o, i, r, s, a, d) {
    const y = ie("svg", { width: i, height: r, style: "display:block;touch-action:none;" }), m = ie("g");
    y.appendChild(m), t.appendChild(y);
    const C = ie("defs"), b = ol(C);
    y.appendChild(C);
    const v = [], _ = ie("g"), w = ie("g"), f = ie("g", { "pointer-events": "none" }), g = [], u = [], h = ie("g");
    m.append(_, w, f, h);
    for (const A of o) {
      const T = sl(A.score), J = Go + (A.score ?? 0.5) * (Xc - Go), Z = ie("line", {
        stroke: E.netHaloColor,
        // Sized from the edge underneath, so a thick edge does not outgrow its
        // own halo and a thin one is not swamped by it.
        "stroke-width": J + el.padding * 2,
        "stroke-linecap": "round",
        opacity: 0,
        "pointer-events": "none"
      }), L = ie("line", {
        stroke: T,
        "stroke-width": J,
        "stroke-opacity": Zc,
        // A mapping runs from A to B, and the arrow is what says which is which.
        "marker-end": `url(#${b(T)})`,
        "pointer-events": "none"
      }), H = ie("line", { stroke: "transparent", "stroke-width": Qc, style: "cursor:pointer;" });
      H.addEventListener("click", (R) => {
        R.stopPropagation(), s(A.index);
      }), H.addEventListener("mousemove", (R) => {
        d.show(
          `<div style="font-weight:700;color:${E.titleColor};">${Ne(Ee(A.from))} -&gt; ${Ne(Ee(A.to))}</div>` + (A.score == null ? `<div style="color:${E.textMuted2};">no score</div>` : `<div style="margin-top:4px;">score <b>${A.score.toFixed(3)}</b></div>`) + `<div style="margin-top:4px;font-size:10px;color:${E.textMuted2};">Click to see the mapping</div>`,
          R.offsetX,
          R.offsetY
        );
      }), H.addEventListener("mouseleave", () => d.hide()), v.push(Z), _.append(Z, L), w.appendChild(H);
      const U = ie("rect", {
        fill: E.netLabelBg,
        opacity: A.score == null ? 0 : In.backgroundOpacity,
        rx: 3,
        ry: 3
      }), Y = ie("text", {
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        "font-size": In.fontSize,
        "font-weight": 600,
        fill: E.netEdgeLabel
      });
      Y.textContent = A.score == null ? "" : A.score.toFixed(2);
      const V = ie("g", { class: "gufe-edge-label" });
      V.append(U, Y), f.appendChild(V), g.push(U), u.push(Y);
    }
    const S = [], c = [], l = [], p = n.map((A) => {
      const T = ie("g", { class: "gufe-node", style: "cursor:grab;" });
      T.addEventListener("mousemove", (H) => {
        d.show(
          `<div style="font-weight:700;color:${E.titleColor};">${Ne(Ee(A))}</div>` + (A.smiles ? `<div style="margin-top:3px;font-family:ui-monospace,Menlo,monospace;overflow-wrap:anywhere;">${Ne(A.smiles)}</div>` : "") + `<div style="margin-top:3px;font-size:10px;color:${E.textMuted2};overflow-wrap:anywhere;">${Ne(A["gufe-key"])}</div>`,
          H.offsetX,
          H.offsetY
        );
      }), T.addEventListener("mouseleave", () => d.hide()), T.appendChild(
        ie("circle", {
          r: Qe,
          fill: E.netNodeFill,
          stroke: E.netNodeStroke,
          "stroke-width": 1.5
        })
      );
      const J = ie("g", { class: "gufe-node-depiction", "pointer-events": "none" });
      T.appendChild(J), S.push(J);
      const Z = ie("text", {
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        "font-size": Yc,
        "font-weight": 700,
        fill: E.netInitials,
        "pointer-events": "none"
      });
      Z.textContent = Ee(A).slice(0, 2).toUpperCase(), T.appendChild(Z), c.push(Z);
      const L = ie("text", {
        class: "gufe-node-caption",
        "text-anchor": "middle",
        y: Qe + 14,
        "font-size": 11,
        "font-weight": 600,
        fill: E.netNodeLabel,
        "pointer-events": "none"
      });
      return L.textContent = al(Ee(A), Wc), L.setAttribute("display", "none"), l.push(L), T.appendChild(L), h.appendChild(T), T;
    }), k = () => {
      u.forEach((A, T) => {
        if (!A.textContent) return;
        let J;
        try {
          J = A.getBBox();
        } catch {
          return;
        }
        const Z = In.padding;
        g[T].setAttribute("x", String(J.x - Z)), g[T].setAttribute("y", String(J.y - Z)), g[T].setAttribute("width", String(J.width + Z * 2)), g[T].setAttribute("height", String(J.height + Z * 2));
      });
    }, P = () => {
      o.forEach((A, T) => {
        for (const Z of [v[T], _.children[T * 2 + 1], w.children[T]]) {
          const L = Z;
          L.setAttribute("x1", String(A.from.x)), L.setAttribute("y1", String(A.from.y)), L.setAttribute("x2", String(A.to.x)), L.setAttribute("y2", String(A.to.y));
        }
        f.children[T].setAttribute(
          "transform",
          `translate(${(A.from.x + A.to.x) / 2},${(A.from.y + A.to.y) / 2 - 8})`
        );
      }), n.forEach((A, T) => p[T].setAttribute("transform", `translate(${A.x},${A.y})`));
    };
    P(), k();
    const N = cl({
      nodes: n,
      captions: l,
      initials: c,
      depictionGroups: S,
      rdkit: () => a,
      viewport: () => ({ width: i, height: r })
    }), z = this.#n(y, m, n, p, P, N.apply);
    return {
      setSelected(A) {
        v.forEach((T, J) => T.setAttribute("opacity", J === A ? "0.95" : "0"));
      },
      /**
       * Dim what is not emphasised rather than hiding it.
       *
       * Asked for directly: you want to see what is *not* selected too, because
       * a filter that removes the rest answers a different question from one
       * that fades it.
       */
      setEmphasis(A, T) {
        p.forEach((J, Z) => {
          const L = !A || A.has(n[Z]["gufe-key"]);
          J.setAttribute("opacity", L ? "1" : String(qn.node));
        }), o.forEach((J, Z) => {
          const L = !T || T.has(Z), H = L ? "0.9" : String(qn.edge);
          _.children[Z * 2 + 1].setAttribute("stroke-opacity", H), f.children[Z].setAttribute("opacity", L ? "1" : String(qn.edge));
        });
      },
      focusOn(A) {
        const T = n[A];
        T && z.centreOn(T.x, T.y);
      },
      setDetail: N.apply,
      depictionsDrawn: () => N.drawn(),
      fit: z.fit,
      reset: z.reset,
      cleanup: z.cleanup
    };
  }
  /** Wheel zoom, background pan, node drag - ~40 lines instead of d3-zoom and
   * d3-drag, and they keep working when d3 is unreachable. */
  #n(t, n, o, i, r, s) {
    let a = 1, d = 0, y = 0;
    const m = () => {
      n.setAttribute("transform", `translate(${d},${y}) scale(${a})`), s(a, d, y);
    }, C = () => {
      const h = t.getBoundingClientRect();
      return {
        width: h.width || Number(t.getAttribute("width")) || t.clientWidth || 800,
        height: h.height || Number(t.getAttribute("height")) || t.clientHeight || 600
      };
    }, b = () => {
      let h = 1 / 0, S = 1 / 0, c = -1 / 0, l = -1 / 0;
      for (const N of o)
        h = Math.min(h, N.x), S = Math.min(S, N.y), c = Math.max(c, N.x), l = Math.max(l, N.y);
      if (a = 1, d = 0, y = 0, !Number.isFinite(h)) {
        m();
        return;
      }
      const p = Qe + tl, { width: k, height: P } = C();
      a = Math.min(1, k / (c - h + p * 2), P / (l - S + p * 2)), d = k / 2 - (h + c) / 2 * a, y = P / 2 - (S + l) / 2 * a, m();
    }, _ = or(t, {
      onZoom: (h) => {
        const S = t.getBoundingClientRect(), c = h.clientX - S.left, l = h.clientY - S.top, p = Math.min(5 / a, Math.max(0.15 / a, Math.exp(-h.deltaY * 2e-3)));
        d = c - (c - d) * p, y = l - (l - y) * p, a *= p, m();
      },
      hint: "Click the graph or hold Ctrl to zoom"
    });
    let w = null;
    const f = (h) => {
      w = { x: h.clientX - d, y: h.clientY - y };
    }, g = (h) => {
      w && (d = h.clientX - w.x, y = h.clientY - w.y, m());
    }, u = () => {
      w = null;
    };
    return t.addEventListener("pointerdown", f), t.addEventListener("pointermove", g), t.addEventListener("pointerup", u), t.addEventListener("pointercancel", u), t.addEventListener("pointerleave", u), i.forEach((h, S) => {
      let c = null;
      h.addEventListener("pointerdown", (p) => {
        p.stopPropagation(), c = { x: p.clientX - o[S].x * a, y: p.clientY - o[S].y * a }, h.setPointerCapture(p.pointerId);
      }), h.addEventListener("pointermove", (p) => {
        c && (o[S].x = o[S].fx = (p.clientX - c.x) / a, o[S].y = o[S].fy = (p.clientY - c.y) / a, r());
      });
      const l = () => {
        c = null;
      };
      h.addEventListener("pointerup", l), h.addEventListener("pointercancel", l);
    }), {
      fit: b,
      // Back to the view it opened on, which is the framed one. An identity
      // transform would be "reset" only in the sense that a blank canvas is.
      reset: b,
      /** Bring a graph point to the middle, zooming in enough to read it. */
      centreOn(h, S) {
        const { width: c, height: l } = C();
        a = Math.max(a, nl), d = c / 2 - h * a, y = l / 2 - S * a, m();
      },
      cleanup() {
        _.cleanup(), t.removeEventListener("pointerdown", f), t.removeEventListener("pointermove", g), t.removeEventListener("pointerup", u), t.removeEventListener("pointercancel", u), t.removeEventListener("pointerleave", u);
      }
    };
  }
}
function hl(e, t, n, o, i) {
  const r = t / 2, s = n / 2, a = (d, y) => {
    d.forEach((m, C) => {
      const b = 2 * Math.PI * C / Math.max(1, d.length) - Math.PI / 2;
      m.x = r + y * Math.cos(b), m.y = s + y * Math.sin(b), m.fx = o === "Force-directed" ? void 0 : m.x, m.fy = o === "Force-directed" ? void 0 : m.y;
    });
  };
  if (o === "Radial" && e.length) {
    const d = new Map(e.map((w) => [w["gufe-key"], []]));
    for (const w of i)
      d.get(w.from["gufe-key"]).push(w.to["gufe-key"]), d.get(w.to["gufe-key"]).push(w.from["gufe-key"]);
    const y = new Map(e.map((w) => [w["gufe-key"], w])), m = e.reduce(
      (w, f) => d.get(f["gufe-key"]).length > d.get(w["gufe-key"]).length ? f : w
    ), C = /* @__PURE__ */ new Set([m["gufe-key"]]);
    let b = [m["gufe-key"]], v = 0;
    const _ = Math.min(t, n) * 0.18;
    for (; b.length; ) {
      a(
        b.map((f) => y.get(f)),
        v === 0 ? 0 : v * _ + 40
      );
      const w = [];
      for (const f of b)
        for (const g of d.get(f))
          C.has(g) || (C.add(g), w.push(g));
      b = w, v++;
    }
    a(e.filter((w) => !C.has(w["gufe-key"])), Math.min(t, n) * 0.45);
    return;
  }
  a(e, Math.min(t, n) * 0.34);
}
async function ml(e, t, n, o) {
  let i;
  try {
    if (i = await di(), typeof i?.forceSimulation != "function") return !1;
  } catch {
    return !1;
  }
  const r = t.map((d) => ({ source: d.from["gufe-key"], target: d.to["gufe-key"], score: d.score })), s = i.forceSimulation(e).force(
    "link",
    i.forceLink(r).id((d) => d["gufe-key"]).distance((d) => $e.linkBaseDistance + (1 - (d.score ?? 0.5)) * $e.linkScoreBonus).strength($e.linkStrength)
  ).force(
    "charge",
    i.forceManyBody().strength($e.chargeStrength).distanceMin($e.chargeDistanceMin).distanceMax($e.chargeDistanceMax)
  ).force("center", i.forceCenter(n / 2, o / 2).strength($e.centerStrength)).force("collision", i.forceCollide(Qe + $e.collisionPadding).iterations($e.collisionIterations)).force("x", i.forceX(n / 2).strength($e.drift)).force("y", i.forceY(o / 2).strength($e.drift)).stop(), a = Math.ceil(Math.log(s.alphaMin()) / Math.log(1 - s.alphaDecay()));
  for (let d = 0; d < a * $e.tickMultiplier; d++) s.tick();
  return !0;
}
Ce("gufe-ligand-network", pl);
const st = { width: 148, height: 46, radius: 10 }, Xe = {
  linkDistance: 220,
  linkStrength: 0.4,
  chargeStrength: -1200,
  collisionRadius: 110,
  collisionIterations: 3,
  tickMultiplier: 2
}, at = et;
function gl(e, t) {
  return e.length > t ? `${e.slice(0, t - 1)}...` : e;
}
function yl(e, t, n) {
  const o = Math.max(90, Math.min(t, n) * 0.36);
  e.forEach((i, r) => {
    const s = 2 * Math.PI * r / Math.max(1, e.length) - Math.PI / 2;
    i.x = t / 2 + o * Math.cos(s), i.y = n / 2 + o * Math.sin(s);
  });
}
async function vl(e, t, n, o) {
  let i;
  try {
    if (i = await di(), typeof i?.forceSimulation != "function") return !1;
  } catch {
    return !1;
  }
  const r = t.map((d) => ({ source: d.from["gufe-key"], target: d.to["gufe-key"] })), s = i.forceSimulation(e).force(
    "link",
    i.forceLink(r).id((d) => d["gufe-key"]).distance(Xe.linkDistance).strength(Xe.linkStrength)
  ).force("charge", i.forceManyBody().strength(Xe.chargeStrength)).force("center", i.forceCenter(n / 2, o / 2)).force("collision", i.forceCollide(Xe.collisionRadius).iterations(Xe.collisionIterations)).stop(), a = Math.ceil(Math.log(s.alphaMin()) / Math.log(1 - s.alphaDecay()));
  for (let d = 0; d < a * Xe.tickMultiplier; d++) s.tick();
  return !0;
}
class $l extends Se {
  placeholder() {
    return "Waiting for an AlchemicalNetwork payload...";
  }
  renderView(t, n) {
    const o = dt(n), i = [];
    let r = 0;
    for (const l of n.nodes ?? []) {
      const p = Ae(o, l, "ChemicalSystemViz");
      if (!p) {
        r++;
        continue;
      }
      i.push({ ...p, x: 0, y: 0 });
    }
    const s = new Map(i.map((l) => [l["gufe-key"], l])), a = [];
    let d = 0;
    for (const l of n.edges ?? []) {
      const p = s.get(l.stateA), k = s.get(l.stateB);
      if (!p || !k) {
        d++;
        continue;
      }
      a.push({ ...l, index: a.length, from: p, to: k });
    }
    const y = (l) => {
      const p = Ae(o, l.protocol, "ProtocolViz");
      return p?.gufe_type || p?.name || "";
    }, m = new Set(a.map(y).filter(Boolean)), C = Te(n.name || "Alchemical network");
    C.statsEl.appendChild(ce("systems", String(i.length))), C.statsEl.appendChild(ce("transformations", String(a.length))), m.size && C.statsEl.appendChild(ce("protocol", [...m].join(", "))), t.appendChild(C);
    const b = j("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    t.appendChild(b);
    const v = j("div", `flex:1 1 62%;min-width:0;position:relative;overflow:hidden;background:${E.netCanvasBg};`);
    b.appendChild(v), b.appendChild(j("div", `width:1px;flex-shrink:0;background:${E.splitBorder};`));
    const _ = j("div", `flex:1 1 38%;min-width:0;display:flex;flex-direction:column;background:${E.appBg};`);
    b.appendChild(_);
    const w = this.#t(_, o, y);
    if (!i.length)
      return v.appendChild(
        ae(
          r ? "None of this network's chemical systems are in its registry." : "This network has no chemical systems."
        )
      ), w.message("Nothing to show."), {};
    r && De(
      v,
      `${r} chemical system${r === 1 ? "" : "s"} named by this network are not in its registry`
    ), d && De(
      v,
      `${d} transformation${d === 1 ? "" : "s"} name a system this network does not contain`
    );
    let f = !0, g = !1, u = null, h = () => {
    };
    const S = (l, p) => {
      u = { kind: l, index: p }, w.show(l === "node" ? i[p] : a[p], l), h();
    }, c = () => {
      v.querySelector("svg")?.remove();
      const l = v.clientWidth || 800, p = v.clientHeight || 600;
      yl(i, l, p);
      const k = () => {
        if (!f) return;
        const P = this.#e(v, i, a, l, p, S);
        h = () => P.setSelected(u), h();
      };
      if (g) {
        k();
        return;
      }
      vl(i, a, l, p).then((P) => {
        f && (P || (g = !0, De(v, "d3 could not be loaded - showing the circular layout instead")), k());
      }, k);
    };
    return c(), S("node", 0), {
      onResize: () => c(),
      cleanup: () => {
        f = !1;
      }
    };
  }
  /** The right-hand pane: what the selected system or transformation is. */
  #t(t, n, o) {
    t.appendChild(
      j(
        "div",
        `flex-shrink:0;padding:4px 10px;font-size:12px;font-weight:bold;color:${E.labelFg};background:${E.labelBg};`,
        "Selected"
      )
    );
    const i = j("div", "flex:1;min-height:0;overflow:auto;display:flex;flex-direction:column;");
    t.appendChild(i);
    const r = (d) => i.replaceChildren(ae(d)), s = (d, y) => {
      const m = j(
        "div",
        `padding:10px 14px;border-bottom:1px solid ${E.toolbarBorder};display:flex;flex-direction:column;gap:4px;`
      );
      return m.appendChild(j("div", `font-size:13px;font-weight:600;color:${E.textPrimary};`, d)), m.appendChild(j("div", `font-size:11px;color:${E.textMuted2};`, y)), m;
    };
    return { show: (d, y) => {
      if (i.replaceChildren(), y === "node") {
        const b = d;
        i.appendChild(s(at(b), "ChemicalSystem"));
        const v = j("div", "display:flex;flex-direction:column;gap:6px;padding:12px 14px;"), _ = Object.entries(b.components ?? {});
        for (const [w, f] of _) {
          const g = Le(n, f), u = j(
            "div",
            `display:flex;align-items:center;gap:8px;padding:7px 10px;border-radius:8px;min-width:0;background:${E.cardBg};border:1px solid ${E.cardBorder};`
          );
          u.appendChild(j("span", `font-size:12px;font-weight:700;color:${E.textPrimary};`, w)), u.appendChild(
            j(
              "span",
              `font-size:11px;color:${E.textMuted};overflow-wrap:anywhere;min-width:0;`,
              g ? g.name || "(unnamed)" : "(not in the registry)"
            )
          );
          const h = lt(
            g ? g.type === "UnknownComponentViz" ? g.gufe_type : g.type.replace(/Viz$/, "") : "missing"
          );
          h.style.marginLeft = "auto", u.appendChild(h), v.appendChild(u);
        }
        _.length || v.appendChild(j("div", `font-size:12px;color:${E.textMuted2};`, "This system lists no components.")), i.appendChild(v), i.appendChild(
          j(
            "div",
            `padding:0 14px 12px;font-size:11px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;color:${E.textMuted2};overflow-wrap:anywhere;`,
            b["gufe-key"]
          )
        );
        return;
      }
      const m = d;
      i.appendChild(s(m.name || "Unnamed transformation", "Transformation"));
      const C = j("div", "display:flex;flex-direction:column;gap:8px;padding:12px 14px;");
      for (const [b, v] of [
        ["State A", at(m.from)],
        ["State B", at(m.to)],
        ["Protocol", o(m) || "-"]
      ]) {
        const _ = j("div", "display:flex;gap:10px;align-items:baseline;min-width:0;");
        _.appendChild(
          j(
            "span",
            `flex:0 0 76px;font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:${E.textMuted2};`,
            b
          )
        ), _.appendChild(j("span", `flex:1;min-width:0;font-size:12px;color:${E.textPrimary};overflow-wrap:anywhere;`, v)), C.appendChild(_);
      }
      i.appendChild(C), i.appendChild(
        j(
          "div",
          `padding:0 14px 12px;font-size:11px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;color:${E.textMuted2};overflow-wrap:anywhere;`,
          m["gufe-key"]
        )
      );
    }, message: r };
  }
  /** Build the SVG for the current positions, and hand back the selection hook. */
  #e(t, n, o, i, r, s) {
    const a = ie("svg", { width: i, height: r, style: "display:block;" });
    t.appendChild(a);
    const d = ie("g"), y = ie("g");
    a.append(d, y);
    const m = [];
    o.forEach((b, v) => {
      const _ = ie("line", {
        x1: b.from.x,
        y1: b.from.y,
        x2: b.to.x,
        y2: b.to.y,
        stroke: E.netEdgeLine,
        "stroke-width": 2,
        "stroke-linecap": "round",
        style: "cursor:pointer;"
      });
      hn(_, b.name || "transformation"), _.addEventListener("click", () => s("edge", v)), d.appendChild(_), m.push(_);
      const w = ie("line", {
        x1: b.from.x,
        y1: b.from.y,
        x2: b.to.x,
        y2: b.to.y,
        stroke: "transparent",
        "stroke-width": 16,
        style: "cursor:pointer;"
      });
      w.addEventListener("click", () => s("edge", v)), d.appendChild(w);
    });
    const C = [];
    return n.forEach((b, v) => {
      const _ = ie("g", { style: "cursor:pointer;" }), w = ie("rect", {
        x: b.x - st.width / 2,
        y: b.y - st.height / 2,
        width: st.width,
        height: st.height,
        rx: st.radius,
        fill: E.cardBg,
        stroke: E.cardBorder,
        "stroke-width": 2
      });
      _.appendChild(w), C.push(w);
      const f = ie("text", {
        x: b.x,
        y: b.y - 2,
        "text-anchor": "middle",
        fill: E.netNodeLabel,
        "font-size": 12,
        "font-weight": 700,
        "font-family": "ui-sans-serif,system-ui,sans-serif"
      });
      f.textContent = gl(at(b), 20), _.appendChild(f);
      const g = Object.keys(b.components ?? {}).length, u = ie("text", {
        x: b.x,
        y: b.y + 14,
        "text-anchor": "middle",
        fill: E.netInitials,
        "font-size": 10,
        "font-family": "ui-sans-serif,system-ui,sans-serif"
      });
      u.textContent = `${g} component${g === 1 ? "" : "s"}`, _.appendChild(u), hn(_, at(b)), _.addEventListener("click", () => s("node", v)), y.appendChild(_);
    }), {
      setSelected(b) {
        C.forEach((v, _) => {
          const w = b?.kind === "node" && b.index === _;
          v.setAttribute("stroke", w ? E.cardBorderActive : E.cardBorder), v.setAttribute("stroke-width", w ? "3" : "2");
        }), m.forEach((v, _) => {
          const w = b?.kind === "edge" && b.index === _;
          v.setAttribute("stroke", w ? E.netHaloColor : E.netEdgeLine), v.setAttribute("stroke-width", w ? "4" : "2");
        });
      }
    };
  }
}
Ce("gufe-alchemical-network", $l);
function bl(e) {
  return e.name || e.type.replace(/Viz$/, "");
}
function wl(e) {
  return e.type === "UnknownComponentViz" ? e.gufe_type : e.type.replace(/Viz$/, "");
}
class _l extends Se {
  placeholder() {
    return "Waiting for a ChemicalSystem payload...";
  }
  renderView(t, n) {
    const o = dt(n), i = [], r = [];
    for (const [_, w] of Object.entries(n.components ?? {})) {
      const f = Le(o, w);
      f ? i.push([_, f]) : r.push(_);
    }
    const s = Te(n.name || "Chemical system");
    if (s.statsEl.appendChild(ce("components", String(i.length))), t.appendChild(s), !i.length)
      return t.appendChild(
        ae(
          r.length ? "None of this system's components are in its registry." : "This chemical system has no components."
        )
      ), {};
    const a = j("div", "flex:1;min-height:0;position:relative;display:flex;flex-direction:row;");
    t.appendChild(a), r.length && De(
      a,
      `${r.length} component${r.length === 1 ? "" : "s"} named by this system (${r.join(", ")}) are not in its registry`
    );
    const d = j(
      "div",
      `flex:0 0 220px;min-width:0;overflow:auto;display:flex;flex-direction:column;gap:6px;padding:10px;background:${E.panelBg};border-right:1px solid ${E.splitBorder};`
    );
    a.appendChild(d);
    const y = j("div", "flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;");
    a.appendChild(y);
    const m = j("div", "flex:1;min-height:0;display:flex;");
    y.appendChild(m);
    const C = document.createElement("gufe-view");
    C.style.cssText = "flex:1;min-width:0;min-height:0;", m.appendChild(C);
    const b = [], v = (_) => {
      b.forEach((w, f) => {
        const g = f === _;
        w.style.background = g ? E.cardBgActive : E.cardBg, w.style.borderColor = g ? E.cardBorderActive : E.cardBorder;
      }), C.payload = i[_][1];
    };
    return i.forEach(([_, w], f) => {
      const g = j(
        "button",
        `display:flex;flex-direction:column;align-items:flex-start;gap:4px;padding:8px 10px;text-align:left;border:1px solid ${E.cardBorder};border-radius:8px;background:${E.cardBg};cursor:pointer;font-family:inherit;font-size:12px;width:100%;`
      );
      g.appendChild(j("span", `font-weight:700;color:${E.textPrimary};`, _)), g.appendChild(j("span", `font-size:11px;color:${E.textMuted};`, bl(w))), g.appendChild(lt(wl(w))), g.onclick = () => v(f), b.push(g), d.appendChild(g);
    }), v(0), {
      onResize: () => C.resize?.(),
      // Removing the nested view fires its own `disconnectedCallback`, which is
      // where whatever it mounted releases its viewers.
      cleanup: () => C.remove()
    };
  }
}
Ce("gufe-chemical-system", _l);
class Sl extends Se {
  placeholder() {
    return "Waiting for a Protocol payload...";
  }
  renderView(t, n) {
    const o = Te(n.gufe_type || n.name || "Protocol");
    o.statsEl.appendChild(lt(n.gufe_type)), t.appendChild(o);
    const i = j(
      "div",
      "flex:1;min-height:0;overflow:auto;display:flex;align-items:center;justify-content:center;padding:24px;"
    );
    t.appendChild(i);
    const r = un();
    return r.style.maxWidth = "460px", r.appendChild(Pe("gufe class", n.gufe_type, !0)), n.name && r.appendChild(Pe("Name", n.name)), r.appendChild(Pe("gufe key", n["gufe-key"], !0)), r.appendChild(
      j(
        "div",
        `padding-top:10px;font-size:11px;line-height:1.6;color:${E.textMuted2};`,
        "A Protocol's settings are not carried in this payload: they are large, deeply nested, and nothing draws them yet."
      )
    ), i.appendChild(r), {};
  }
}
Ce("gufe-protocol", Sl);
const _e = { width: 340, height: 260, padding: 14, radius: 12 }, Cl = 150, kl = 40, xl = 24;
function El(e) {
  let t = e >>> 0;
  return () => (t = t * 1664525 + 1013904223 >>> 0, t / 4294967296);
}
function Pl(e) {
  const t = /-?\d+(\.\d+)?([eE][-+]?\d+)?/.exec(e ?? "");
  if (!t) return null;
  const n = Number(t[0]);
  return Number.isFinite(n) ? n : null;
}
function Al(e) {
  return e == null || e <= 0 ? 0 : Math.max(1, Math.min(xl, Math.round(e * kl)));
}
function Rl(e) {
  const t = ie("svg", {
    viewBox: `0 0 ${_e.width} ${_e.height}`,
    style: "width:100%;height:100%;max-width:100%;",
    role: "img"
  });
  hn(t, `${e.smiles || "solvent"} box`), t.appendChild(
    ie("rect", {
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
  const n = El(1597463007), o = () => ({
    x: _e.padding + n() * (_e.width - 2 * _e.padding),
    y: _e.padding + n() * (_e.height - 2 * _e.padding)
  });
  for (let s = 0; s < Cl; s++) {
    const { x: a, y: d } = o();
    t.appendChild(ie("circle", { cx: a, cy: d, r: 2.4, fill: E.textMuted2, "fill-opacity": 0.45 }));
  }
  const i = Al(Pl(e.ion_concentration)), r = [
    [e.positive_ion, E.diffAdded],
    [e.negative_ion, E.diffRemoved]
  ];
  for (const [s, a] of r)
    for (let d = 0; d < i; d++) {
      const { x: y, y: m } = o(), C = ie("circle", { cx: y, cy: m, r: 5.5, fill: a, "fill-opacity": 0.85 });
      t.appendChild(hn(C, s));
    }
  return t;
}
class Fl extends Se {
  placeholder() {
    return "Waiting for a SolventComponent payload...";
  }
  renderView(t, n) {
    const o = Te(n.name || "Solvent");
    o.statsEl.appendChild(ce("neutralized", n.neutralize ? "yes" : "no")), o.statsEl.appendChild(ce(n.positive_ion, "", E.diffAdded)), o.statsEl.appendChild(ce(n.negative_ion, "", E.diffRemoved)), t.appendChild(o);
    const i = j(
      "div",
      "flex:1;min-height:0;display:flex;flex-wrap:wrap;gap:16px;padding:16px;overflow:auto;align-items:flex-start;"
    );
    t.appendChild(i);
    const r = un();
    r.style.flex = "1 1 320px", r.appendChild(Pe("SMILES", n.smiles, !0)), r.appendChild(Pe("Positive ion", n.positive_ion)), r.appendChild(Pe("Negative ion", n.negative_ion)), r.appendChild(Pe("Ion concentration", n.ion_concentration)), r.appendChild(Pe("Neutralize", n.neutralize ? "yes" : "no")), i.appendChild(r);
    const s = un();
    return s.style.flex = "1 1 340px", s.style.alignItems = "center", s.appendChild(Rl(n)), s.appendChild(
      j(
        "div",
        `padding-top:10px;font-size:11px;text-align:center;color:${E.textMuted2};`,
        "Schematic only: the dots show which ions are present, not how many."
      )
    ), i.appendChild(s), {};
  }
}
Ce("gufe-solvent", Fl);
const Un = {
  unchanged: E.diffUnchanged,
  changed: E.diffChanged,
  added: E.diffAdded,
  removed: E.diffRemoved
};
function Ml(e, t) {
  return e && !t ? "removed" : !e && t ? "added" : e === t ? "unchanged" : "changed";
}
function Nl(e, t) {
  return [.../* @__PURE__ */ new Set([...Object.keys(e.components ?? {}), ...Object.keys(t.components ?? {})])].sort();
}
function jl(e) {
  if (!e) return null;
  const t = e.type === "UnknownComponentViz" ? e.gufe_type : e.type.replace(/Viz$/, "");
  return { name: e.name || "(unnamed)", type: t };
}
function Yo(e, t) {
  const n = j(
    "div",
    `flex:1 1 50%;min-width:0;display:flex;flex-direction:column;gap:4px;padding:8px 10px;border-radius:8px;background:${E.cardBg};border:1px solid ${E.cardBorder};`
  ), o = jl(e);
  return o ? (n.style.borderColor = t === "unchanged" ? E.cardBorder : Un[t], n.appendChild(j("span", `font-size:12px;font-weight:600;color:${E.textPrimary};`, o.name)), n.appendChild(lt(o.type)), n) : (n.style.background = "transparent", n.style.borderStyle = "dashed", n.appendChild(j("span", `font-size:12px;color:${E.textMuted2};`, "absent")), n);
}
function Ol(e, t) {
  const n = Le(t, e.componentA), o = Le(t, e.componentB);
  return `${n ? et(n) : "A"} to ${o ? et(o) : "B"}`;
}
class Tl extends Se {
  placeholder() {
    return "Waiting for a Transformation payload...";
  }
  renderView(t, n) {
    const o = dt(n), i = Ae(o, n.stateA, "ChemicalSystemViz"), r = Ae(o, n.stateB, "ChemicalSystemViz"), s = Ae(o, n.protocol, "ProtocolViz"), a = n.mappings ?? [], d = Te(n.name || "Transformation");
    if (d.statsEl.appendChild(ce("protocol", s?.gufe_type || s?.name || "-")), d.statsEl.appendChild(ce("mappings", String(a.length))), t.appendChild(d), !i || !r)
      return t.appendChild(
        ae("This transformation names two chemical systems, and its registry does not hold them.")
      ), {};
    const y = Nl(i, r), m = j("div", "flex:0 0 auto;max-height:45%;overflow:auto;padding:12px 14px;");
    t.appendChild(m);
    const C = j("div", "display:flex;gap:10px;padding:0 0 6px 120px;");
    for (const [f, g] of [
      ["State A", i],
      ["State B", r]
    ])
      C.appendChild(
        j(
          "div",
          `flex:1 1 50%;min-width:0;font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:${E.textMuted2};`,
          `${f}${g.name ? ` - ${g.name}` : ""}`
        )
      );
    m.appendChild(C);
    for (const f of y) {
      const g = i.components?.[f], u = r.components?.[f], h = Ml(g, u), S = Le(o, g), c = Le(o, u), l = j("div", "display:flex;align-items:stretch;gap:10px;padding:4px 0;"), p = j("div", "flex:0 0 110px;display:flex;align-items:center;gap:6px;min-width:0;");
      p.appendChild(
        j("span", `width:8px;height:8px;border-radius:50%;flex-shrink:0;background:${Un[h]};`)
      );
      const k = j("span", `font-size:12px;font-weight:700;color:${E.textPrimary};overflow-wrap:anywhere;`, f);
      k.title = h, p.appendChild(k), l.appendChild(p), l.appendChild(Yo(S, h)), l.appendChild(Yo(c, h)), m.appendChild(l);
    }
    const b = j(
      "div",
      `display:flex;flex-wrap:wrap;gap:12px;padding:8px 0 0;font-size:11px;color:${E.textMuted};`
    );
    for (const f of ["unchanged", "changed", "added", "removed"])
      b.appendChild(ce(f, "", Un[f]));
    m.appendChild(b);
    const v = j(
      "div",
      `flex-shrink:0;padding:4px 10px;font-size:12px;font-weight:bold;color:${E.labelFg};background:${E.labelBg};`,
      "Atom mapping"
    );
    if (t.appendChild(v), !a.length)
      return t.appendChild(
        ae(
          "This transformation carries no atom mapping - nothing here maps one small molecule onto another."
        )
      ), {};
    const _ = document.createElement("gufe-atom-mapping");
    _.style.cssText = "flex:1;min-height:0;min-width:0;";
    const w = (f) => {
      _.payload = yi(a[f], o);
    };
    if (w(0), a.length > 1) {
      const f = j(
        "div",
        `display:flex;align-items:center;gap:8px;padding:6px 10px;flex-shrink:0;font-size:11px;background:${E.toolbarBg};border-bottom:1px solid ${E.toolbarBorder};color:${E.textMuted};`
      );
      f.appendChild(
        mn(
          a.map((g, u) => ({
            id: String(u),
            label: g.name || Ol(g, o)
          })),
          "0",
          (g) => w(Number(g))
        )
      ), t.appendChild(f);
    }
    return t.appendChild(_), {
      onResize: () => _.resize?.(),
      cleanup: () => _.remove()
    };
  }
}
Ce("gufe-transformation", Tl);
class zl extends Se {
  placeholder() {
    return "Waiting for a component payload...";
  }
  renderView(t, n) {
    const o = Te(n.name || "Unnamed component");
    o.statsEl.appendChild(lt(n.gufe_type)), t.appendChild(o);
    const i = j("div", "flex:1;min-height:0;overflow:auto;display:flex;align-items:center;justify-content:center;padding:24px;");
    t.appendChild(i);
    const r = un();
    return r.style.maxWidth = "460px", r.appendChild(
      j(
        "div",
        `font-size:14px;font-weight:600;padding-bottom:6px;color:${E.textPrimary};`,
        `There is no visualization for ${n.gufe_type}.`
      )
    ), r.appendChild(
      j(
        "div",
        `font-size:12px;line-height:1.6;padding-bottom:10px;color:${E.textMuted};`,
        "gufe lets a project define its own Component subclasses, so this is a component this build has never been taught to draw - not a broken payload. Everything gufe knows about it that survives serialization is below."
      )
    ), r.appendChild(Pe("Name", n.name || "(unnamed)")), r.appendChild(Pe("gufe class", n.gufe_type, !0)), i.appendChild(r), {};
  }
}
Ce("gufe-unknown-component", zl);
function Ul(e, t) {
  let n = e.querySelector("gufe-view");
  return n || (n = document.createElement("gufe-view"), n.style.cssText = "display:block;width:100%;height:100%;", e.appendChild(n)), t !== void 0 && (n.payload = t), n;
}
export {
  bi as CHROME_OPEN_BY_DEFAULT,
  Ci as DEBUG_ATTRIBUTE,
  ki as DEBUG_GLOBAL,
  yc as DEFAULT_ZOOM_BOUNDS,
  $l as GufeAlchemicalNetwork,
  Hc as GufeAtomMapping,
  _l as GufeChemicalSystem,
  Se as GufeElement,
  pl as GufeLigandNetwork,
  zc as GufeProtein,
  Sl as GufeProtocol,
  Ac as GufeSmallMolecule,
  Fl as GufeSolvent,
  Tl as GufeTransformation,
  zl as GufeUnknownComponent,
  fc as GufeView,
  ct as MAPPING_COLORS,
  Bl as MAPPING_RAMP_3D,
  Ll as MAPPING_RAMP_NAME,
  Il as PAYLOAD_TYPES,
  ql as SCHEMA_TYPES,
  Qn as VIEW_TAGS,
  Dc as applyRT,
  vc as boundedZoom,
  dt as buildRegistry,
  _i as chromeMenu,
  Pi as debugEnabled,
  Ce as defineElement,
  ci as describeProblem,
  Ml as diffStatus,
  Vl as dispatchProblem,
  et as entryLabel,
  dc as formatIssues,
  or as guardWheel,
  qc as kabsch,
  Kc as liftFor,
  Ri as logPayload,
  Le as lookup,
  Ae as lookupOfType,
  yi as mappingPayloadFor,
  Ul as mount,
  Pl as parseConcentration,
  Ai as payloadJson,
  ir as resetControl,
  ll as selectionText,
  Ko as uniqueAtoms,
  Dl as validateAs,
  lc as validatePayload,
  ui as viewerInteraction,
  bc as wheelFactor
};
