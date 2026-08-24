const Ur = {
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
    diffAdded: "#2a9d4a",
    diffRemoved: "#d62828",
    netCanvasBg: "#1a1a2e",
    netNodeFill: "#16213e",
    netNodeStroke: "#2a4a7f",
    netNodeLabel: "#cfe6ff",
    netInitials: "#7ecfff",
    netEdgeRamp: ["#3a4a6a", "#7ecfff"],
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
    diffAdded: "#2a9d4a",
    diffRemoved: "#d62828",
    netCanvasBg: "#ffffff",
    netNodeFill: "#ffffff",
    netNodeStroke: "#ffffff",
    netNodeLabel: "#334155",
    netInitials: "#0369a1",
    netEdgeRamp: ["#cbd5e1", "#0f766e"],
    netEdgeLabel: "#334155",
    netHaloColor: "#fbcfe8",
    boxFill: "#eff6ff",
    boxStroke: "#bfdbfe"
  }
};
function es() {
  try {
    return globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches ?? !1;
  } catch {
    return !1;
  }
}
const T = es() ? Ur.dark : Ur.light;
function F(e, t, r) {
  const o = document.createElement(e);
  return t && (o.style.cssText = t), r != null && (o.textContent = r), o;
}
function Zt(e) {
  return String(e ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function he(e) {
  if (e == null) return "unknown error";
  const t = e.message;
  if (typeof t == "string" && t) return t;
  const r = String(e);
  return r === "[object Object]" ? e.name || "unknown error" : r;
}
const Je = (e) => e.toLocaleString("en-US"), Ue = "-", Qe = `background:${T.btnBg};color:${T.btnFg};border:1px solid ${T.btnBorder};padding:4px 9px;font-size:11px;font-weight:bold;border-radius:3px;cursor:pointer;font-family:inherit;`, Ro = `background:${T.selectBg};color:${T.textPrimary};border:1px solid ${T.selectBorder};border-radius:6px;padding:4px 8px;font-size:12px;cursor:pointer;font-family:inherit;`;
function Cr(e, t, r) {
  const o = F("div", "display:flex;gap:4px;"), l = e.map((n) => {
    const s = F("button", Qe, n.label);
    return s.title = n.title || n.label, s.onmouseover = () => {
      s.style.background = T.btnBgHover;
    }, s.onmouseout = () => {
      s.style.background = t === n.id ? T.btnBgActive : T.btnBg;
    }, s.onclick = () => {
      o.setActive(n.id), r(n.id);
    }, o.appendChild(s), { id: n.id, btn: s };
  });
  return o.setActive = (n) => {
    t = n, l.forEach((s) => {
      s.btn.style.background = s.id === t ? T.btnBgActive : T.btnBg;
    });
  }, o.setActive(t), o;
}
function pe(e, t, r) {
  const o = F("span", "display:inline-flex;align-items:center;gap:5px;white-space:nowrap;");
  r && o.appendChild(
    F("span", `width:8px;height:8px;border-radius:50%;background:${r};display:inline-block;`)
  );
  const l = F("span");
  return l.innerHTML = `${Zt(e)} <b style="color:${T.textPrimary};">${Zt(t)}</b>`, o.appendChild(l), o;
}
function Yt(e, t) {
  const r = F("div", "", `⚠ ${t}`);
  return r.style.cssText = `position:absolute;top:10px;left:50%;transform:translateX(-50%);max-width:90%;z-index:20;padding:6px 14px;border-radius:6px;font-size:12px;background:${T.warnBg};color:${T.warnFg};border:1px solid ${T.warnBorder};`, e.appendChild(r), r;
}
function se(e, t = !1) {
  return F(
    "div",
    `flex:1;display:flex;align-items:center;justify-content:center;text-align:center;padding:24px;font-size:13px;color:${t ? T.errorFg : T.textMuted2};`,
    e
  );
}
function He(e, t) {
  const r = F(
    "div",
    `display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;padding:9px 14px;flex-shrink:0;background:${T.toolbarBg};border-bottom:1px solid ${T.toolbarBorder};`
  );
  return r.titleEl = F("span", `font-weight:700;font-size:15px;color:${T.titleColor};letter-spacing:.02em;`, e), r.subtitleEl = F("span", `font-size:12px;color:${T.textMuted2};`, t || ""), r.statsEl = F(
    "div",
    `display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-left:auto;font-size:11px;color:${T.textMuted};`
  ), r.toggleEl = F("div", "display:flex;align-items:center;margin-left:10px;flex-shrink:0;"), r.appendChild(r.titleEl), r.appendChild(r.subtitleEl), r.appendChild(r.statsEl), r.appendChild(r.toggleEl), r;
}
function Te(e, t, r = !1) {
  const o = F("div", "display:flex;gap:12px;align-items:baseline;padding:5px 0;min-width:0;");
  o.appendChild(
    F(
      "span",
      `flex:0 0 128px;font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:${T.textMuted2};`,
      e
    )
  );
  const l = F(
    "span",
    `flex:1;min-width:0;user-select:text;cursor:text;overflow-wrap:anywhere;color:${T.textPrimary};` + (r ? "font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:11px;" : "font-size:12px;"),
    t
  );
  return l.title = t, o.appendChild(l), o;
}
function Ao(e) {
  return F(
    "span",
    `padding:1px 7px;border-radius:10px;font-size:10px;font-weight:700;letter-spacing:.04em;white-space:nowrap;background:${T.badgeBg};color:${T.badgeFg};`,
    e
  );
}
function wr() {
  return F(
    "div",
    `display:flex;flex-direction:column;gap:2px;padding:14px 18px;border-radius:10px;background:${T.cardBg};border:1px solid ${T.cardBorder};`
  );
}
function No() {
  const e = F("div", "flex:1;position:relative;min-height:0;min-width:0;"), t = F("div", "position:absolute;inset:0;");
  return t.dataset.gufeViewer = "", e.appendChild(t), { wrap: e, container: t };
}
const ts = !1;
function rs() {
  const e = F("span", "display:inline-flex;flex-direction:column;gap:2px;justify-content:center;");
  for (let t = 0; t < 3; t++)
    e.appendChild(F("span", `display:block;width:11px;height:1.5px;border-radius:1px;background:${T.btnFg};`));
  return e;
}
function Kc(e, t, r = {}) {
  let o = r.open ?? ts, l = !1;
  const n = F("div", "flex-shrink:0;"), s = F("button", `${Qe}display:inline-flex;align-items:center;gap:6px;padding:4px 8px;`);
  s.appendChild(rs()), s.setAttribute("aria-label", r.label || "Toggle menu");
  const a = () => {
    o && !l && (l = !0, n.appendChild(t())), n.style.display = o ? "" : "none", s.style.background = o ? T.btnBgActive : T.btnBg, s.setAttribute("aria-expanded", String(o));
  }, u = (y) => {
    y !== o && (o = y, a(), r.onToggle?.(o));
  };
  return s.onclick = () => u(!o), s.onmouseover = () => {
    s.style.background = o ? T.btnBgActive : T.btnBgHover;
  }, s.onmouseout = () => {
    s.style.background = o ? T.btnBgActive : T.btnBg;
  }, e.toggleEl.appendChild(s), a(), {
    panel: n,
    isOpen: () => o,
    setOpen: u
  };
}
const ns = ["debug", "gufe-debug"], os = "debug", ss = "GUFE_VIZ_DEBUG";
function is() {
  return !!globalThis[ss];
}
function as() {
  try {
    const e = globalThis.location?.search;
    if (!e) return !1;
    const t = new URLSearchParams(e);
    return ns.some((r) => t.has(r));
  } catch {
    return !1;
  }
}
function cs(e) {
  return e?.hasAttribute?.(os) ? !0 : is() || as();
}
function ls(e) {
  try {
    return JSON.stringify(e, null, 2) ?? String(e);
  } catch (t) {
    return `<could not be stringified: ${he(t)}>`;
  }
}
function ds(e, t, r) {
  if (!cs(r)) return;
  const o = ls(t), l = t?.type, n = `[gufe-viz] ${e}${typeof l == "string" ? ` ${l}` : ""} (${o.length} chars)`, s = typeof console.groupCollapsed == "function";
  s ? console.groupCollapsed(n) : console.log(n), console.log(o), console.log(t), s && console.groupEnd?.();
}
const us = 150;
class Ae extends HTMLElement {
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
    this.#r = t, this.isConnected && this.#a();
  }
  get payload() {
    return this.#r;
  }
  connectedCallback() {
    this.style.display = "block", this.style.width = this.style.width || "100%", this.style.height = this.style.height || "100%", this.style.background = T.appBg, this.style.color = T.textPrimary, this.style.fontFamily = "'Inter',system-ui,sans-serif", typeof ResizeObserver < "u" && !this.#t && (this.#t = new ResizeObserver(() => {
      this.#o && clearTimeout(this.#o), this.#o = setTimeout(() => this.#e?.onResize?.(), us);
    }), this.#t.observe(this)), this.#a();
  }
  disconnectedCallback() {
    this.#i(), this.#t?.disconnect(), this.#t = null;
  }
  /** Release whatever the mounted view owns and empty the element. */
  #i() {
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
    return this.#i(), this.#n = F(
      "div",
      `width:100%;height:100%;display:flex;flex-direction:column;overflow:hidden;background:${T.appBg};`
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
  #a() {
    const t = this.#d(), r = this.#s;
    if (this.#r == null) {
      t.appendChild(se(this.placeholder()));
      return;
    }
    let o;
    try {
      o = this.renderView(t, this.#r);
    } catch (l) {
      this.#l(t, r, l);
      return;
    }
    o instanceof Promise ? o.then(
      (l) => this.#c(l, r),
      (l) => this.#l(t, r, l)
    ) : this.#c(o, r);
  }
  /** Take ownership of a view's handle, unless it belongs to a dead render. */
  #c(t, r) {
    if (r !== this.#s || !this.isConnected) {
      try {
        t?.cleanup?.();
      } catch (o) {
        console.warn("[gufe-viz] cleanup of a superseded view failed:", o);
      }
      return;
    }
    this.#e = t || null;
  }
  #l(t, r, o) {
    r === this.#s && (console.warn("[gufe-viz] render failed:", o), t.replaceChildren(se(`Failed to render: ${he(o)}`, !0)));
  }
  /** Force a resize pass - for hosts that know they resized us. */
  resize() {
    this.#e?.onResize?.();
  }
}
function Ne(e, t) {
  typeof customElements > "u" || customElements.get(e) || customElements.define(e, t);
}
function fs(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var et = { exports: {} }, dr = {}, Ee = {}, xe = {}, ur = {}, fr = {}, pr = {}, Kr;
function Qt() {
  return Kr || (Kr = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.regexpCode = e.getEsmExportName = e.getProperty = e.safeStringify = e.stringify = e.strConcat = e.addCodeArg = e.str = e._ = e.nil = e._Code = e.Name = e.IDENTIFIER = e._CodeOrName = void 0;
    class t {
    }
    e._CodeOrName = t, e.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
    class r extends t {
      constructor(d) {
        if (super(), !e.IDENTIFIER.test(d))
          throw new Error("CodeGen: name must be a valid identifier");
        this.str = d;
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
    e.Name = r;
    class o extends t {
      constructor(d) {
        super(), this._items = typeof d == "string" ? [d] : d;
      }
      toString() {
        return this.str;
      }
      emptyStr() {
        if (this._items.length > 1)
          return !1;
        const d = this._items[0];
        return d === "" || d === '""';
      }
      get str() {
        var d;
        return (d = this._str) !== null && d !== void 0 ? d : this._str = this._items.reduce((h, $) => `${h}${$}`, "");
      }
      get names() {
        var d;
        return (d = this._names) !== null && d !== void 0 ? d : this._names = this._items.reduce((h, $) => ($ instanceof r && (h[$.str] = (h[$.str] || 0) + 1), h), {});
      }
    }
    e._Code = o, e.nil = new o("");
    function l(g, ...d) {
      const h = [g[0]];
      let $ = 0;
      for (; $ < d.length; )
        a(h, d[$]), h.push(g[++$]);
      return new o(h);
    }
    e._ = l;
    const n = new o("+");
    function s(g, ...d) {
      const h = [w(g[0])];
      let $ = 0;
      for (; $ < d.length; )
        h.push(n), a(h, d[$]), h.push(n, w(g[++$]));
      return u(h), new o(h);
    }
    e.str = s;
    function a(g, d) {
      d instanceof o ? g.push(...d._items) : d instanceof r ? g.push(d) : g.push(_(d));
    }
    e.addCodeArg = a;
    function u(g) {
      let d = 1;
      for (; d < g.length - 1; ) {
        if (g[d] === n) {
          const h = y(g[d - 1], g[d + 1]);
          if (h !== void 0) {
            g.splice(d - 1, 3, h);
            continue;
          }
          g[d++] = "+";
        }
        d++;
      }
    }
    function y(g, d) {
      if (d === '""')
        return g;
      if (g === '""')
        return d;
      if (typeof g == "string")
        return d instanceof r || g[g.length - 1] !== '"' ? void 0 : typeof d != "string" ? `${g.slice(0, -1)}${d}"` : d[0] === '"' ? g.slice(0, -1) + d.slice(1) : void 0;
      if (typeof d == "string" && d[0] === '"' && !(g instanceof r))
        return `"${g}${d.slice(1)}`;
    }
    function m(g, d) {
      return d.emptyStr() ? g : g.emptyStr() ? d : s`${g}${d}`;
    }
    e.strConcat = m;
    function _(g) {
      return typeof g == "number" || typeof g == "boolean" || g === null ? g : w(Array.isArray(g) ? g.join(",") : g);
    }
    function b(g) {
      return new o(w(g));
    }
    e.stringify = b;
    function w(g) {
      return JSON.stringify(g).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    e.safeStringify = w;
    function E(g) {
      return typeof g == "string" && e.IDENTIFIER.test(g) ? new o(`.${g}`) : l`[${g}]`;
    }
    e.getProperty = E;
    function S(g) {
      if (typeof g == "string" && e.IDENTIFIER.test(g))
        return new o(`${g}`);
      throw new Error(`CodeGen: invalid export name: ${g}, use explicit $id name mapping`);
    }
    e.getEsmExportName = S;
    function f(g) {
      return new o(g.toString());
    }
    e.regexpCode = f;
  })(pr)), pr;
}
var hr = {}, Hr;
function Gr() {
  return Hr || (Hr = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0;
    const t = /* @__PURE__ */ Qt();
    class r extends Error {
      constructor(y) {
        super(`CodeGen: "code" for ${y} not defined`), this.value = y.value;
      }
    }
    var o;
    (function(u) {
      u[u.Started = 0] = "Started", u[u.Completed = 1] = "Completed";
    })(o || (e.UsedValueState = o = {})), e.varKinds = {
      const: new t.Name("const"),
      let: new t.Name("let"),
      var: new t.Name("var")
    };
    class l {
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
        var m, _;
        if (!((_ = (m = this._parent) === null || m === void 0 ? void 0 : m._prefixes) === null || _ === void 0) && _.has(y) || this._prefixes && !this._prefixes.has(y))
          throw new Error(`CodeGen: prefix "${y}" is not allowed in this scope`);
        return this._names[y] = { prefix: y, index: 0 };
      }
    }
    e.Scope = l;
    class n extends t.Name {
      constructor(y, m) {
        super(m), this.prefix = y;
      }
      setValue(y, { property: m, itemIndex: _ }) {
        this.value = y, this.scopePath = (0, t._)`.${new t.Name(m)}[${_}]`;
      }
    }
    e.ValueScopeName = n;
    const s = (0, t._)`\n`;
    class a extends l {
      constructor(y) {
        super(y), this._values = {}, this._scope = y.scope, this.opts = { ...y, _n: y.lines ? s : t.nil };
      }
      get() {
        return this._scope;
      }
      name(y) {
        return new n(y, this._newName(y));
      }
      value(y, m) {
        var _;
        if (m.ref === void 0)
          throw new Error("CodeGen: ref must be passed in value");
        const b = this.toName(y), { prefix: w } = b, E = (_ = m.key) !== null && _ !== void 0 ? _ : m.ref;
        let S = this._values[w];
        if (S) {
          const d = S.get(E);
          if (d)
            return d;
        } else
          S = this._values[w] = /* @__PURE__ */ new Map();
        S.set(E, b);
        const f = this._scope[w] || (this._scope[w] = []), g = f.length;
        return f[g] = m.ref, b.setValue(m, { property: w, itemIndex: g }), b;
      }
      getValue(y, m) {
        const _ = this._values[y];
        if (_)
          return _.get(m);
      }
      scopeRefs(y, m = this._values) {
        return this._reduceValues(m, (_) => {
          if (_.scopePath === void 0)
            throw new Error(`CodeGen: name "${_}" has no value`);
          return (0, t._)`${y}${_.scopePath}`;
        });
      }
      scopeCode(y = this._values, m, _) {
        return this._reduceValues(y, (b) => {
          if (b.value === void 0)
            throw new Error(`CodeGen: name "${b}" has no value`);
          return b.value.code;
        }, m, _);
      }
      _reduceValues(y, m, _ = {}, b) {
        let w = t.nil;
        for (const E in y) {
          const S = y[E];
          if (!S)
            continue;
          const f = _[E] = _[E] || /* @__PURE__ */ new Map();
          S.forEach((g) => {
            if (f.has(g))
              return;
            f.set(g, o.Started);
            let d = m(g);
            if (d) {
              const h = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
              w = (0, t._)`${w}${h} ${g} = ${d};${this.opts._n}`;
            } else if (d = b?.(g))
              w = (0, t._)`${w}${d}${this.opts._n}`;
            else
              throw new r(g);
            f.set(g, o.Completed);
          });
        }
        return w;
      }
    }
    e.ValueScope = a;
  })(hr)), hr;
}
var Jr;
function J() {
  return Jr || (Jr = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
    const t = /* @__PURE__ */ Qt(), r = /* @__PURE__ */ Gr();
    var o = /* @__PURE__ */ Qt();
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
    var l = /* @__PURE__ */ Gr();
    Object.defineProperty(e, "Scope", { enumerable: !0, get: function() {
      return l.Scope;
    } }), Object.defineProperty(e, "ValueScope", { enumerable: !0, get: function() {
      return l.ValueScope;
    } }), Object.defineProperty(e, "ValueScopeName", { enumerable: !0, get: function() {
      return l.ValueScopeName;
    } }), Object.defineProperty(e, "varKinds", { enumerable: !0, get: function() {
      return l.varKinds;
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
    class n {
      optimizeNodes() {
        return this;
      }
      optimizeNames(v, k) {
        return this;
      }
    }
    class s extends n {
      constructor(v, k, I) {
        super(), this.varKind = v, this.name = k, this.rhs = I;
      }
      render({ es5: v, _n: k }) {
        const I = v ? r.varKinds.var : this.varKind, K = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
        return `${I} ${this.name}${K};` + k;
      }
      optimizeNames(v, k) {
        if (v[this.name.str])
          return this.rhs && (this.rhs = U(this.rhs, v, k)), this;
      }
      get names() {
        return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
      }
    }
    class a extends n {
      constructor(v, k, I) {
        super(), this.lhs = v, this.rhs = k, this.sideEffects = I;
      }
      render({ _n: v }) {
        return `${this.lhs} = ${this.rhs};` + v;
      }
      optimizeNames(v, k) {
        if (!(this.lhs instanceof t.Name && !v[this.lhs.str] && !this.sideEffects))
          return this.rhs = U(this.rhs, v, k), this;
      }
      get names() {
        const v = this.lhs instanceof t.Name ? {} : { ...this.lhs.names };
        return q(v, this.rhs);
      }
    }
    class u extends a {
      constructor(v, k, I, K) {
        super(v, I, K), this.op = k;
      }
      render({ _n: v }) {
        return `${this.lhs} ${this.op}= ${this.rhs};` + v;
      }
    }
    class y extends n {
      constructor(v) {
        super(), this.label = v, this.names = {};
      }
      render({ _n: v }) {
        return `${this.label}:` + v;
      }
    }
    class m extends n {
      constructor(v) {
        super(), this.label = v, this.names = {};
      }
      render({ _n: v }) {
        return `break${this.label ? ` ${this.label}` : ""};` + v;
      }
    }
    class _ extends n {
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
    class b extends n {
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
        return this.code = U(this.code, v, k), this;
      }
      get names() {
        return this.code instanceof t._CodeOrName ? this.code.names : {};
      }
    }
    class w extends n {
      constructor(v = []) {
        super(), this.nodes = v;
      }
      render(v) {
        return this.nodes.reduce((k, I) => k + I.render(v), "");
      }
      optimizeNodes() {
        const { nodes: v } = this;
        let k = v.length;
        for (; k--; ) {
          const I = v[k].optimizeNodes();
          Array.isArray(I) ? v.splice(k, 1, ...I) : I ? v[k] = I : v.splice(k, 1);
        }
        return v.length > 0 ? this : void 0;
      }
      optimizeNames(v, k) {
        const { nodes: I } = this;
        let K = I.length;
        for (; K--; ) {
          const G = I[K];
          G.optimizeNames(v, k) || (Q(v, G.names), I.splice(K, 1));
        }
        return I.length > 0 ? this : void 0;
      }
      get names() {
        return this.nodes.reduce((v, k) => x(v, k.names), {});
      }
    }
    class E extends w {
      render(v) {
        return "{" + v._n + super.render(v) + "}" + v._n;
      }
    }
    class S extends w {
    }
    class f extends E {
    }
    f.kind = "else";
    class g extends E {
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
          const I = k.optimizeNodes();
          k = this.else = Array.isArray(I) ? new f(I) : I;
        }
        if (k)
          return v === !1 ? k instanceof g ? k : k.nodes : this.nodes.length ? this : new g(te(v), k instanceof g ? [k] : k.nodes);
        if (!(v === !1 || !this.nodes.length))
          return this;
      }
      optimizeNames(v, k) {
        var I;
        if (this.else = (I = this.else) === null || I === void 0 ? void 0 : I.optimizeNames(v, k), !!(super.optimizeNames(v, k) || this.else))
          return this.condition = U(this.condition, v, k), this;
      }
      get names() {
        const v = super.names;
        return q(v, this.condition), this.else && x(v, this.else.names), v;
      }
    }
    g.kind = "if";
    class d extends E {
    }
    d.kind = "for";
    class h extends d {
      constructor(v) {
        super(), this.iteration = v;
      }
      render(v) {
        return `for(${this.iteration})` + super.render(v);
      }
      optimizeNames(v, k) {
        if (super.optimizeNames(v, k))
          return this.iteration = U(this.iteration, v, k), this;
      }
      get names() {
        return x(super.names, this.iteration.names);
      }
    }
    class $ extends d {
      constructor(v, k, I, K) {
        super(), this.varKind = v, this.name = k, this.from = I, this.to = K;
      }
      render(v) {
        const k = v.es5 ? r.varKinds.var : this.varKind, { name: I, from: K, to: G } = this;
        return `for(${k} ${I}=${K}; ${I}<${G}; ${I}++)` + super.render(v);
      }
      get names() {
        const v = q(super.names, this.from);
        return q(v, this.to);
      }
    }
    class i extends d {
      constructor(v, k, I, K) {
        super(), this.loop = v, this.varKind = k, this.name = I, this.iterable = K;
      }
      render(v) {
        return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(v);
      }
      optimizeNames(v, k) {
        if (super.optimizeNames(v, k))
          return this.iterable = U(this.iterable, v, k), this;
      }
      get names() {
        return x(super.names, this.iterable.names);
      }
    }
    class c extends E {
      constructor(v, k, I) {
        super(), this.name = v, this.args = k, this.async = I;
      }
      render(v) {
        return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(v);
      }
    }
    c.kind = "func";
    class p extends w {
      render(v) {
        return "return " + super.render(v);
      }
    }
    p.kind = "return";
    class P extends E {
      render(v) {
        let k = "try" + super.render(v);
        return this.catch && (k += this.catch.render(v)), this.finally && (k += this.finally.render(v)), k;
      }
      optimizeNodes() {
        var v, k;
        return super.optimizeNodes(), (v = this.catch) === null || v === void 0 || v.optimizeNodes(), (k = this.finally) === null || k === void 0 || k.optimizeNodes(), this;
      }
      optimizeNames(v, k) {
        var I, K;
        return super.optimizeNames(v, k), (I = this.catch) === null || I === void 0 || I.optimizeNames(v, k), (K = this.finally) === null || K === void 0 || K.optimizeNames(v, k), this;
      }
      get names() {
        const v = super.names;
        return this.catch && x(v, this.catch.names), this.finally && x(v, this.finally.names), v;
      }
    }
    class C extends E {
      constructor(v) {
        super(), this.error = v;
      }
      render(v) {
        return `catch(${this.error})` + super.render(v);
      }
    }
    C.kind = "catch";
    class A extends E {
      render(v) {
        return "finally" + super.render(v);
      }
    }
    A.kind = "finally";
    class N {
      constructor(v, k = {}) {
        this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ...k, _n: k.lines ? `
` : "" }, this._extScope = v, this._scope = new r.Scope({ parent: v }), this._nodes = [new S()];
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
        const I = this._extScope.value(v, k);
        return (this._values[I.prefix] || (this._values[I.prefix] = /* @__PURE__ */ new Set())).add(I), I;
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
      _def(v, k, I, K) {
        const G = this._scope.toName(k);
        return I !== void 0 && K && (this._constants[G.str] = I), this._leafNode(new s(v, G, I)), G;
      }
      // `const` declaration (`var` in es5 mode)
      const(v, k, I) {
        return this._def(r.varKinds.const, v, k, I);
      }
      // `let` declaration with optional assignment (`var` in es5 mode)
      let(v, k, I) {
        return this._def(r.varKinds.let, v, k, I);
      }
      // `var` declaration with optional assignment
      var(v, k, I) {
        return this._def(r.varKinds.var, v, k, I);
      }
      // assignment code
      assign(v, k, I) {
        return this._leafNode(new a(v, k, I));
      }
      // `+=` code
      add(v, k) {
        return this._leafNode(new u(v, e.operators.ADD, k));
      }
      // appends passed SafeExpr to code or executes Block
      code(v) {
        return typeof v == "function" ? v() : v !== t.nil && this._leafNode(new b(v)), this;
      }
      // returns code for object literal for the passed argument list of key-value pairs
      object(...v) {
        const k = ["{"];
        for (const [I, K] of v)
          k.length > 1 && k.push(","), k.push(I), (I !== K || this.opts.es5) && (k.push(":"), (0, t.addCodeArg)(k, K));
        return k.push("}"), new t._Code(k);
      }
      // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
      if(v, k, I) {
        if (this._blockNode(new g(v)), k && I)
          this.code(k).else().code(I).endIf();
        else if (k)
          this.code(k).endIf();
        else if (I)
          throw new Error('CodeGen: "else" body without "then" body');
        return this;
      }
      // `else if` clause - invalid without `if` or after `else` clauses
      elseIf(v) {
        return this._elseNode(new g(v));
      }
      // `else` clause - only valid after `if` or `else if` clauses
      else() {
        return this._elseNode(new f());
      }
      // end `if` statement (needed if gen.if was used only with condition)
      endIf() {
        return this._endBlockNode(g, f);
      }
      _for(v, k) {
        return this._blockNode(v), k && this.code(k).endFor(), this;
      }
      // a generic `for` clause (or statement if `forBody` is passed)
      for(v, k) {
        return this._for(new h(v), k);
      }
      // `for` statement for a range of values
      forRange(v, k, I, K, G = this.opts.es5 ? r.varKinds.var : r.varKinds.let) {
        const re = this._scope.toName(v);
        return this._for(new $(G, re, k, I), () => K(re));
      }
      // `for-of` statement (in es5 mode replace with a normal for loop)
      forOf(v, k, I, K = r.varKinds.const) {
        const G = this._scope.toName(v);
        if (this.opts.es5) {
          const re = k instanceof t.Name ? k : this.var("_arr", k);
          return this.forRange("_i", 0, (0, t._)`${re}.length`, (ee) => {
            this.var(G, (0, t._)`${re}[${ee}]`), I(G);
          });
        }
        return this._for(new i("of", K, G, k), () => I(G));
      }
      // `for-in` statement.
      // With option `ownProperties` replaced with a `for-of` loop for object keys
      forIn(v, k, I, K = this.opts.es5 ? r.varKinds.var : r.varKinds.const) {
        if (this.opts.ownProperties)
          return this.forOf(v, (0, t._)`Object.keys(${k})`, I);
        const G = this._scope.toName(v);
        return this._for(new i("in", K, G, k), () => I(G));
      }
      // end `for` loop
      endFor() {
        return this._endBlockNode(d);
      }
      // `label` statement
      label(v) {
        return this._leafNode(new y(v));
      }
      // `break` statement
      break(v) {
        return this._leafNode(new m(v));
      }
      // `return` statement
      return(v) {
        const k = new p();
        if (this._blockNode(k), this.code(v), k.nodes.length !== 1)
          throw new Error('CodeGen: "return" should have one node');
        return this._endBlockNode(p);
      }
      // `try` statement
      try(v, k, I) {
        if (!k && !I)
          throw new Error('CodeGen: "try" without "catch" and "finally"');
        const K = new P();
        if (this._blockNode(K), this.code(v), k) {
          const G = this.name("e");
          this._currNode = K.catch = new C(G), k(G);
        }
        return I && (this._currNode = K.finally = new A(), this.code(I)), this._endBlockNode(C, A);
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
        const I = this._nodes.length - k;
        if (I < 0 || v !== void 0 && I !== v)
          throw new Error(`CodeGen: wrong number of nodes: ${I} vs ${v} expected`);
        return this._nodes.length = k, this;
      }
      // `function` heading (or definition if funcBody is passed)
      func(v, k = t.nil, I, K) {
        return this._blockNode(new c(v, k, I)), K && this.code(K).endFunc(), this;
      }
      // end function definition
      endFunc() {
        return this._endBlockNode(c);
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
        const I = this._currNode;
        if (I instanceof v || k && I instanceof k)
          return this._nodes.pop(), this;
        throw new Error(`CodeGen: not in block "${k ? `${v.kind}/${k.kind}` : v.kind}"`);
      }
      _elseNode(v) {
        const k = this._currNode;
        if (!(k instanceof g))
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
    e.CodeGen = N;
    function x(M, v) {
      for (const k in v)
        M[k] = (M[k] || 0) + (v[k] || 0);
      return M;
    }
    function q(M, v) {
      return v instanceof t._CodeOrName ? x(M, v.names) : M;
    }
    function U(M, v, k) {
      if (M instanceof t.Name)
        return I(M);
      if (!K(M))
        return M;
      return new t._Code(M._items.reduce((G, re) => (re instanceof t.Name && (re = I(re)), re instanceof t._Code ? G.push(...re._items) : G.push(re), G), []));
      function I(G) {
        const re = k[G.str];
        return re === void 0 || v[G.str] !== 1 ? G : (delete v[G.str], re);
      }
      function K(G) {
        return G instanceof t._Code && G._items.some((re) => re instanceof t.Name && v[re.str] === 1 && k[re.str] !== void 0);
      }
    }
    function Q(M, v) {
      for (const k in v)
        M[k] = (M[k] || 0) - (v[k] || 0);
    }
    function te(M) {
      return typeof M == "boolean" || typeof M == "number" || M === null ? !M : (0, t._)`!${V(M)}`;
    }
    e.not = te;
    const me = j(e.operators.AND);
    function X(...M) {
      return M.reduce(me);
    }
    e.and = X;
    const ve = j(e.operators.OR);
    function B(...M) {
      return M.reduce(ve);
    }
    e.or = B;
    function j(M) {
      return (v, k) => v === t.nil ? k : k === t.nil ? v : (0, t._)`${V(v)} ${M} ${V(k)}`;
    }
    function V(M) {
      return M instanceof t.Name ? M : (0, t._)`(${M})`;
    }
  })(fr)), fr;
}
var W = {}, Wr;
function Z() {
  if (Wr) return W;
  Wr = 1, Object.defineProperty(W, "__esModule", { value: !0 }), W.checkStrictMode = W.getErrorPath = W.Type = W.useFunc = W.setEvaluated = W.evaluatedPropsToName = W.mergeEvaluated = W.eachItem = W.unescapeJsonPointer = W.escapeJsonPointer = W.escapeFragment = W.unescapeFragment = W.schemaRefOrVal = W.schemaHasRulesButRef = W.schemaHasRules = W.checkUnknownRules = W.alwaysValidSchema = W.toHash = void 0;
  const e = /* @__PURE__ */ J(), t = /* @__PURE__ */ Qt();
  function r(i) {
    const c = {};
    for (const p of i)
      c[p] = !0;
    return c;
  }
  W.toHash = r;
  function o(i, c) {
    return typeof c == "boolean" ? c : Object.keys(c).length === 0 ? !0 : (l(i, c), !n(c, i.self.RULES.all));
  }
  W.alwaysValidSchema = o;
  function l(i, c = i.schema) {
    const { opts: p, self: P } = i;
    if (!p.strictSchema || typeof c == "boolean")
      return;
    const C = P.RULES.keywords;
    for (const A in c)
      C[A] || $(i, `unknown keyword: "${A}"`);
  }
  W.checkUnknownRules = l;
  function n(i, c) {
    if (typeof i == "boolean")
      return !i;
    for (const p in i)
      if (c[p])
        return !0;
    return !1;
  }
  W.schemaHasRules = n;
  function s(i, c) {
    if (typeof i == "boolean")
      return !i;
    for (const p in i)
      if (p !== "$ref" && c.all[p])
        return !0;
    return !1;
  }
  W.schemaHasRulesButRef = s;
  function a({ topSchemaRef: i, schemaPath: c }, p, P, C) {
    if (!C) {
      if (typeof p == "number" || typeof p == "boolean")
        return p;
      if (typeof p == "string")
        return (0, e._)`${p}`;
    }
    return (0, e._)`${i}${c}${(0, e.getProperty)(P)}`;
  }
  W.schemaRefOrVal = a;
  function u(i) {
    return _(decodeURIComponent(i));
  }
  W.unescapeFragment = u;
  function y(i) {
    return encodeURIComponent(m(i));
  }
  W.escapeFragment = y;
  function m(i) {
    return typeof i == "number" ? `${i}` : i.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  W.escapeJsonPointer = m;
  function _(i) {
    return i.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  W.unescapeJsonPointer = _;
  function b(i, c) {
    if (Array.isArray(i))
      for (const p of i)
        c(p);
    else
      c(i);
  }
  W.eachItem = b;
  function w({ mergeNames: i, mergeToName: c, mergeValues: p, resultToName: P }) {
    return (C, A, N, x) => {
      const q = N === void 0 ? A : N instanceof e.Name ? (A instanceof e.Name ? i(C, A, N) : c(C, A, N), N) : A instanceof e.Name ? (c(C, N, A), A) : p(A, N);
      return x === e.Name && !(q instanceof e.Name) ? P(C, q) : q;
    };
  }
  W.mergeEvaluated = {
    props: w({
      mergeNames: (i, c, p) => i.if((0, e._)`${p} !== true && ${c} !== undefined`, () => {
        i.if((0, e._)`${c} === true`, () => i.assign(p, !0), () => i.assign(p, (0, e._)`${p} || {}`).code((0, e._)`Object.assign(${p}, ${c})`));
      }),
      mergeToName: (i, c, p) => i.if((0, e._)`${p} !== true`, () => {
        c === !0 ? i.assign(p, !0) : (i.assign(p, (0, e._)`${p} || {}`), S(i, p, c));
      }),
      mergeValues: (i, c) => i === !0 ? !0 : { ...i, ...c },
      resultToName: E
    }),
    items: w({
      mergeNames: (i, c, p) => i.if((0, e._)`${p} !== true && ${c} !== undefined`, () => i.assign(p, (0, e._)`${c} === true ? true : ${p} > ${c} ? ${p} : ${c}`)),
      mergeToName: (i, c, p) => i.if((0, e._)`${p} !== true`, () => i.assign(p, c === !0 ? !0 : (0, e._)`${p} > ${c} ? ${p} : ${c}`)),
      mergeValues: (i, c) => i === !0 ? !0 : Math.max(i, c),
      resultToName: (i, c) => i.var("items", c)
    })
  };
  function E(i, c) {
    if (c === !0)
      return i.var("props", !0);
    const p = i.var("props", (0, e._)`{}`);
    return c !== void 0 && S(i, p, c), p;
  }
  W.evaluatedPropsToName = E;
  function S(i, c, p) {
    Object.keys(p).forEach((P) => i.assign((0, e._)`${c}${(0, e.getProperty)(P)}`, !0));
  }
  W.setEvaluated = S;
  const f = {};
  function g(i, c) {
    return i.scopeValue("func", {
      ref: c,
      code: f[c.code] || (f[c.code] = new t._Code(c.code))
    });
  }
  W.useFunc = g;
  var d;
  (function(i) {
    i[i.Num = 0] = "Num", i[i.Str = 1] = "Str";
  })(d || (W.Type = d = {}));
  function h(i, c, p) {
    if (i instanceof e.Name) {
      const P = c === d.Num;
      return p ? P ? (0, e._)`"[" + ${i} + "]"` : (0, e._)`"['" + ${i} + "']"` : P ? (0, e._)`"/" + ${i}` : (0, e._)`"/" + ${i}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return p ? (0, e.getProperty)(i).toString() : "/" + m(i);
  }
  W.getErrorPath = h;
  function $(i, c, p = i.opts.strictSchema) {
    if (p) {
      if (c = `strict mode: ${c}`, p === !0)
        throw new Error(c);
      i.self.logger.warn(c);
    }
  }
  return W.checkStrictMode = $, W;
}
var tt = {}, Yr;
function we() {
  if (Yr) return tt;
  Yr = 1, Object.defineProperty(tt, "__esModule", { value: !0 });
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
  return tt.default = t, tt;
}
var Xr;
function rr() {
  return Xr || (Xr = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
    const t = /* @__PURE__ */ J(), r = /* @__PURE__ */ Z(), o = /* @__PURE__ */ we();
    e.keywordError = {
      message: ({ keyword: f }) => (0, t.str)`must pass "${f}" keyword validation`
    }, e.keyword$DataError = {
      message: ({ keyword: f, schemaType: g }) => g ? (0, t.str)`"${f}" keyword must be ${g} ($data)` : (0, t.str)`"${f}" keyword is invalid ($data)`
    };
    function l(f, g = e.keywordError, d, h) {
      const { it: $ } = f, { gen: i, compositeRule: c, allErrors: p } = $, P = _(f, g, d);
      h ?? (c || p) ? u(i, P) : y($, (0, t._)`[${P}]`);
    }
    e.reportError = l;
    function n(f, g = e.keywordError, d) {
      const { it: h } = f, { gen: $, compositeRule: i, allErrors: c } = h, p = _(f, g, d);
      u($, p), i || c || y(h, o.default.vErrors);
    }
    e.reportExtraError = n;
    function s(f, g) {
      f.assign(o.default.errors, g), f.if((0, t._)`${o.default.vErrors} !== null`, () => f.if(g, () => f.assign((0, t._)`${o.default.vErrors}.length`, g), () => f.assign(o.default.vErrors, null)));
    }
    e.resetErrorsCount = s;
    function a({ gen: f, keyword: g, schemaValue: d, data: h, errsCount: $, it: i }) {
      if ($ === void 0)
        throw new Error("ajv implementation error");
      const c = f.name("err");
      f.forRange("i", $, o.default.errors, (p) => {
        f.const(c, (0, t._)`${o.default.vErrors}[${p}]`), f.if((0, t._)`${c}.instancePath === undefined`, () => f.assign((0, t._)`${c}.instancePath`, (0, t.strConcat)(o.default.instancePath, i.errorPath))), f.assign((0, t._)`${c}.schemaPath`, (0, t.str)`${i.errSchemaPath}/${g}`), i.opts.verbose && (f.assign((0, t._)`${c}.schema`, d), f.assign((0, t._)`${c}.data`, h));
      });
    }
    e.extendErrors = a;
    function u(f, g) {
      const d = f.const("err", g);
      f.if((0, t._)`${o.default.vErrors} === null`, () => f.assign(o.default.vErrors, (0, t._)`[${d}]`), (0, t._)`${o.default.vErrors}.push(${d})`), f.code((0, t._)`${o.default.errors}++`);
    }
    function y(f, g) {
      const { gen: d, validateName: h, schemaEnv: $ } = f;
      $.$async ? d.throw((0, t._)`new ${f.ValidationError}(${g})`) : (d.assign((0, t._)`${h}.errors`, g), d.return(!1));
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
    function _(f, g, d) {
      const { createErrors: h } = f.it;
      return h === !1 ? (0, t._)`{}` : b(f, g, d);
    }
    function b(f, g, d = {}) {
      const { gen: h, it: $ } = f, i = [
        w($, d),
        E(f, d)
      ];
      return S(f, g, i), h.object(...i);
    }
    function w({ errorPath: f }, { instancePath: g }) {
      const d = g ? (0, t.str)`${f}${(0, r.getErrorPath)(g, r.Type.Str)}` : f;
      return [o.default.instancePath, (0, t.strConcat)(o.default.instancePath, d)];
    }
    function E({ keyword: f, it: { errSchemaPath: g } }, { schemaPath: d, parentSchema: h }) {
      let $ = h ? g : (0, t.str)`${g}/${f}`;
      return d && ($ = (0, t.str)`${$}${(0, r.getErrorPath)(d, r.Type.Str)}`), [m.schemaPath, $];
    }
    function S(f, { params: g, message: d }, h) {
      const { keyword: $, data: i, schemaValue: c, it: p } = f, { opts: P, propertyName: C, topSchemaRef: A, schemaPath: N } = p;
      h.push([m.keyword, $], [m.params, typeof g == "function" ? g(f) : g || (0, t._)`{}`]), P.messages && h.push([m.message, typeof d == "function" ? d(f) : d]), P.verbose && h.push([m.schema, c], [m.parentSchema, (0, t._)`${A}${N}`], [o.default.data, i]), C && h.push([m.propertyName, C]);
    }
  })(ur)), ur;
}
var Zr;
function ps() {
  if (Zr) return xe;
  Zr = 1, Object.defineProperty(xe, "__esModule", { value: !0 }), xe.boolOrEmptySchema = xe.topBoolOrEmptySchema = void 0;
  const e = /* @__PURE__ */ rr(), t = /* @__PURE__ */ J(), r = /* @__PURE__ */ we(), o = {
    message: "boolean schema is false"
  };
  function l(a) {
    const { gen: u, schema: y, validateName: m } = a;
    y === !1 ? s(a, !1) : typeof y == "object" && y.$async === !0 ? u.return(r.default.data) : (u.assign((0, t._)`${m}.errors`, null), u.return(!0));
  }
  xe.topBoolOrEmptySchema = l;
  function n(a, u) {
    const { gen: y, schema: m } = a;
    m === !1 ? (y.var(u, !1), s(a)) : y.var(u, !0);
  }
  xe.boolOrEmptySchema = n;
  function s(a, u) {
    const { gen: y, data: m } = a, _ = {
      gen: y,
      keyword: "false schema",
      data: m,
      schema: !1,
      schemaCode: !1,
      schemaValue: !1,
      params: {},
      it: a
    };
    (0, e.reportError)(_, o, void 0, u);
  }
  return xe;
}
var ce = {}, je = {}, Qr;
function xo() {
  if (Qr) return je;
  Qr = 1, Object.defineProperty(je, "__esModule", { value: !0 }), je.getRules = je.isJSONType = void 0;
  const e = ["string", "number", "integer", "boolean", "null", "object", "array"], t = new Set(e);
  function r(l) {
    return typeof l == "string" && t.has(l);
  }
  je.isJSONType = r;
  function o() {
    const l = {
      number: { type: "number", rules: [] },
      string: { type: "string", rules: [] },
      array: { type: "array", rules: [] },
      object: { type: "object", rules: [] }
    };
    return {
      types: { ...l, integer: !0, boolean: !0, null: !0 },
      rules: [{ rules: [] }, l.number, l.string, l.array, l.object],
      post: { rules: [] },
      all: {},
      keywords: {}
    };
  }
  return je.getRules = o, je;
}
var ke = {}, en;
function jo() {
  if (en) return ke;
  en = 1, Object.defineProperty(ke, "__esModule", { value: !0 }), ke.shouldUseRule = ke.shouldUseGroup = ke.schemaHasRulesForType = void 0;
  function e({ schema: o, self: l }, n) {
    const s = l.RULES.types[n];
    return s && s !== !0 && t(o, s);
  }
  ke.schemaHasRulesForType = e;
  function t(o, l) {
    return l.rules.some((n) => r(o, n));
  }
  ke.shouldUseGroup = t;
  function r(o, l) {
    var n;
    return o[l.keyword] !== void 0 || ((n = l.definition.implements) === null || n === void 0 ? void 0 : n.some((s) => o[s] !== void 0));
  }
  return ke.shouldUseRule = r, ke;
}
var tn;
function er() {
  if (tn) return ce;
  tn = 1, Object.defineProperty(ce, "__esModule", { value: !0 }), ce.reportTypeError = ce.checkDataTypes = ce.checkDataType = ce.coerceAndCheckDataType = ce.getJSONTypes = ce.getSchemaTypes = ce.DataType = void 0;
  const e = /* @__PURE__ */ xo(), t = /* @__PURE__ */ jo(), r = /* @__PURE__ */ rr(), o = /* @__PURE__ */ J(), l = /* @__PURE__ */ Z();
  var n;
  (function(d) {
    d[d.Correct = 0] = "Correct", d[d.Wrong = 1] = "Wrong";
  })(n || (ce.DataType = n = {}));
  function s(d) {
    const h = a(d.type);
    if (h.includes("null")) {
      if (d.nullable === !1)
        throw new Error("type: null contradicts nullable: false");
    } else {
      if (!h.length && d.nullable !== void 0)
        throw new Error('"nullable" cannot be used without "type"');
      d.nullable === !0 && h.push("null");
    }
    return h;
  }
  ce.getSchemaTypes = s;
  function a(d) {
    const h = Array.isArray(d) ? d : d ? [d] : [];
    if (h.every(e.isJSONType))
      return h;
    throw new Error("type must be JSONType or JSONType[]: " + h.join(","));
  }
  ce.getJSONTypes = a;
  function u(d, h) {
    const { gen: $, data: i, opts: c } = d, p = m(h, c.coerceTypes), P = h.length > 0 && !(p.length === 0 && h.length === 1 && (0, t.schemaHasRulesForType)(d, h[0]));
    if (P) {
      const C = E(h, i, c.strictNumbers, n.Wrong);
      $.if(C, () => {
        p.length ? _(d, h, p) : f(d);
      });
    }
    return P;
  }
  ce.coerceAndCheckDataType = u;
  const y = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
  function m(d, h) {
    return h ? d.filter(($) => y.has($) || h === "array" && $ === "array") : [];
  }
  function _(d, h, $) {
    const { gen: i, data: c, opts: p } = d, P = i.let("dataType", (0, o._)`typeof ${c}`), C = i.let("coerced", (0, o._)`undefined`);
    p.coerceTypes === "array" && i.if((0, o._)`${P} == 'object' && Array.isArray(${c}) && ${c}.length == 1`, () => i.assign(c, (0, o._)`${c}[0]`).assign(P, (0, o._)`typeof ${c}`).if(E(h, c, p.strictNumbers), () => i.assign(C, c))), i.if((0, o._)`${C} !== undefined`);
    for (const N of $)
      (y.has(N) || N === "array" && p.coerceTypes === "array") && A(N);
    i.else(), f(d), i.endIf(), i.if((0, o._)`${C} !== undefined`, () => {
      i.assign(c, C), b(d, C);
    });
    function A(N) {
      switch (N) {
        case "string":
          i.elseIf((0, o._)`${P} == "number" || ${P} == "boolean"`).assign(C, (0, o._)`"" + ${c}`).elseIf((0, o._)`${c} === null`).assign(C, (0, o._)`""`);
          return;
        case "number":
          i.elseIf((0, o._)`${P} == "boolean" || ${c} === null
              || (${P} == "string" && ${c} && ${c} == +${c})`).assign(C, (0, o._)`+${c}`);
          return;
        case "integer":
          i.elseIf((0, o._)`${P} === "boolean" || ${c} === null
              || (${P} === "string" && ${c} && ${c} == +${c} && !(${c} % 1))`).assign(C, (0, o._)`+${c}`);
          return;
        case "boolean":
          i.elseIf((0, o._)`${c} === "false" || ${c} === 0 || ${c} === null`).assign(C, !1).elseIf((0, o._)`${c} === "true" || ${c} === 1`).assign(C, !0);
          return;
        case "null":
          i.elseIf((0, o._)`${c} === "" || ${c} === 0 || ${c} === false`), i.assign(C, null);
          return;
        case "array":
          i.elseIf((0, o._)`${P} === "string" || ${P} === "number"
              || ${P} === "boolean" || ${c} === null`).assign(C, (0, o._)`[${c}]`);
      }
    }
  }
  function b({ gen: d, parentData: h, parentDataProperty: $ }, i) {
    d.if((0, o._)`${h} !== undefined`, () => d.assign((0, o._)`${h}[${$}]`, i));
  }
  function w(d, h, $, i = n.Correct) {
    const c = i === n.Correct ? o.operators.EQ : o.operators.NEQ;
    let p;
    switch (d) {
      case "null":
        return (0, o._)`${h} ${c} null`;
      case "array":
        p = (0, o._)`Array.isArray(${h})`;
        break;
      case "object":
        p = (0, o._)`${h} && typeof ${h} == "object" && !Array.isArray(${h})`;
        break;
      case "integer":
        p = P((0, o._)`!(${h} % 1) && !isNaN(${h})`);
        break;
      case "number":
        p = P();
        break;
      default:
        return (0, o._)`typeof ${h} ${c} ${d}`;
    }
    return i === n.Correct ? p : (0, o.not)(p);
    function P(C = o.nil) {
      return (0, o.and)((0, o._)`typeof ${h} == "number"`, C, $ ? (0, o._)`isFinite(${h})` : o.nil);
    }
  }
  ce.checkDataType = w;
  function E(d, h, $, i) {
    if (d.length === 1)
      return w(d[0], h, $, i);
    let c;
    const p = (0, l.toHash)(d);
    if (p.array && p.object) {
      const P = (0, o._)`typeof ${h} != "object"`;
      c = p.null ? P : (0, o._)`!${h} || ${P}`, delete p.null, delete p.array, delete p.object;
    } else
      c = o.nil;
    p.number && delete p.integer;
    for (const P in p)
      c = (0, o.and)(c, w(P, h, $, i));
    return c;
  }
  ce.checkDataTypes = E;
  const S = {
    message: ({ schema: d }) => `must be ${d}`,
    params: ({ schema: d, schemaValue: h }) => typeof d == "string" ? (0, o._)`{type: ${d}}` : (0, o._)`{type: ${h}}`
  };
  function f(d) {
    const h = g(d);
    (0, r.reportError)(h, S);
  }
  ce.reportTypeError = f;
  function g(d) {
    const { gen: h, data: $, schema: i } = d, c = (0, l.schemaRefOrVal)(d, i, "type");
    return {
      gen: h,
      keyword: "type",
      data: $,
      schema: i.type,
      schemaCode: c,
      schemaValue: c,
      parentSchema: i,
      params: {},
      it: d
    };
  }
  return ce;
}
var We = {}, rn;
function hs() {
  if (rn) return We;
  rn = 1, Object.defineProperty(We, "__esModule", { value: !0 }), We.assignDefaults = void 0;
  const e = /* @__PURE__ */ J(), t = /* @__PURE__ */ Z();
  function r(l, n) {
    const { properties: s, items: a } = l.schema;
    if (n === "object" && s)
      for (const u in s)
        o(l, u, s[u].default);
    else n === "array" && Array.isArray(a) && a.forEach((u, y) => o(l, y, u.default));
  }
  We.assignDefaults = r;
  function o(l, n, s) {
    const { gen: a, compositeRule: u, data: y, opts: m } = l;
    if (s === void 0)
      return;
    const _ = (0, e._)`${y}${(0, e.getProperty)(n)}`;
    if (u) {
      (0, t.checkStrictMode)(l, `default is ignored for: ${_}`);
      return;
    }
    let b = (0, e._)`${_} === undefined`;
    m.useDefaults === "empty" && (b = (0, e._)`${b} || ${_} === null || ${_} === ""`), a.if(b, (0, e._)`${_} = ${(0, e.stringify)(s)}`);
  }
  return We;
}
var _e = {}, ne = {}, nn;
function Se() {
  if (nn) return ne;
  nn = 1, Object.defineProperty(ne, "__esModule", { value: !0 }), ne.validateUnion = ne.validateArray = ne.usePattern = ne.callValidateCode = ne.schemaProperties = ne.allSchemaProperties = ne.noPropertyInData = ne.propertyInData = ne.isOwnProperty = ne.hasPropFunc = ne.reportMissingProp = ne.checkMissingProp = ne.checkReportMissingProp = void 0;
  const e = /* @__PURE__ */ J(), t = /* @__PURE__ */ Z(), r = /* @__PURE__ */ we(), o = /* @__PURE__ */ Z();
  function l(d, h) {
    const { gen: $, data: i, it: c } = d;
    $.if(m($, i, h, c.opts.ownProperties), () => {
      d.setParams({ missingProperty: (0, e._)`${h}` }, !0), d.error();
    });
  }
  ne.checkReportMissingProp = l;
  function n({ gen: d, data: h, it: { opts: $ } }, i, c) {
    return (0, e.or)(...i.map((p) => (0, e.and)(m(d, h, p, $.ownProperties), (0, e._)`${c} = ${p}`)));
  }
  ne.checkMissingProp = n;
  function s(d, h) {
    d.setParams({ missingProperty: h }, !0), d.error();
  }
  ne.reportMissingProp = s;
  function a(d) {
    return d.scopeValue("func", {
      // eslint-disable-next-line @typescript-eslint/unbound-method
      ref: Object.prototype.hasOwnProperty,
      code: (0, e._)`Object.prototype.hasOwnProperty`
    });
  }
  ne.hasPropFunc = a;
  function u(d, h, $) {
    return (0, e._)`${a(d)}.call(${h}, ${$})`;
  }
  ne.isOwnProperty = u;
  function y(d, h, $, i) {
    const c = (0, e._)`${h}${(0, e.getProperty)($)} !== undefined`;
    return i ? (0, e._)`${c} && ${u(d, h, $)}` : c;
  }
  ne.propertyInData = y;
  function m(d, h, $, i) {
    const c = (0, e._)`${h}${(0, e.getProperty)($)} === undefined`;
    return i ? (0, e.or)(c, (0, e.not)(u(d, h, $))) : c;
  }
  ne.noPropertyInData = m;
  function _(d) {
    return d ? Object.keys(d).filter((h) => h !== "__proto__") : [];
  }
  ne.allSchemaProperties = _;
  function b(d, h) {
    return _(h).filter(($) => !(0, t.alwaysValidSchema)(d, h[$]));
  }
  ne.schemaProperties = b;
  function w({ schemaCode: d, data: h, it: { gen: $, topSchemaRef: i, schemaPath: c, errorPath: p }, it: P }, C, A, N) {
    const x = N ? (0, e._)`${d}, ${h}, ${i}${c}` : h, q = [
      [r.default.instancePath, (0, e.strConcat)(r.default.instancePath, p)],
      [r.default.parentData, P.parentData],
      [r.default.parentDataProperty, P.parentDataProperty],
      [r.default.rootData, r.default.rootData]
    ];
    P.opts.dynamicRef && q.push([r.default.dynamicAnchors, r.default.dynamicAnchors]);
    const U = (0, e._)`${x}, ${$.object(...q)}`;
    return A !== e.nil ? (0, e._)`${C}.call(${A}, ${U})` : (0, e._)`${C}(${U})`;
  }
  ne.callValidateCode = w;
  const E = (0, e._)`new RegExp`;
  function S({ gen: d, it: { opts: h } }, $) {
    const i = h.unicodeRegExp ? "u" : "", { regExp: c } = h.code, p = c($, i);
    return d.scopeValue("pattern", {
      key: p.toString(),
      ref: p,
      code: (0, e._)`${c.code === "new RegExp" ? E : (0, o.useFunc)(d, c)}(${$}, ${i})`
    });
  }
  ne.usePattern = S;
  function f(d) {
    const { gen: h, data: $, keyword: i, it: c } = d, p = h.name("valid");
    if (c.allErrors) {
      const C = h.let("valid", !0);
      return P(() => h.assign(C, !1)), C;
    }
    return h.var(p, !0), P(() => h.break()), p;
    function P(C) {
      const A = h.const("len", (0, e._)`${$}.length`);
      h.forRange("i", 0, A, (N) => {
        d.subschema({
          keyword: i,
          dataProp: N,
          dataPropType: t.Type.Num
        }, p), h.if((0, e.not)(p), C);
      });
    }
  }
  ne.validateArray = f;
  function g(d) {
    const { gen: h, schema: $, keyword: i, it: c } = d;
    if (!Array.isArray($))
      throw new Error("ajv implementation error");
    if ($.some((A) => (0, t.alwaysValidSchema)(c, A)) && !c.opts.unevaluated)
      return;
    const P = h.let("valid", !1), C = h.name("_valid");
    h.block(() => $.forEach((A, N) => {
      const x = d.subschema({
        keyword: i,
        schemaProp: N,
        compositeRule: !0
      }, C);
      h.assign(P, (0, e._)`${P} || ${C}`), d.mergeValidEvaluated(x, C) || h.if((0, e.not)(P));
    })), d.result(P, () => d.reset(), () => d.error(!0));
  }
  return ne.validateUnion = g, ne;
}
var on;
function ms() {
  if (on) return _e;
  on = 1, Object.defineProperty(_e, "__esModule", { value: !0 }), _e.validateKeywordUsage = _e.validSchemaType = _e.funcKeywordCode = _e.macroKeywordCode = void 0;
  const e = /* @__PURE__ */ J(), t = /* @__PURE__ */ we(), r = /* @__PURE__ */ Se(), o = /* @__PURE__ */ rr();
  function l(b, w) {
    const { gen: E, keyword: S, schema: f, parentSchema: g, it: d } = b, h = w.macro.call(d.self, f, g, d), $ = y(E, S, h);
    d.opts.validateSchema !== !1 && d.self.validateSchema(h, !0);
    const i = E.name("valid");
    b.subschema({
      schema: h,
      schemaPath: e.nil,
      errSchemaPath: `${d.errSchemaPath}/${S}`,
      topSchemaRef: $,
      compositeRule: !0
    }, i), b.pass(i, () => b.error(!0));
  }
  _e.macroKeywordCode = l;
  function n(b, w) {
    var E;
    const { gen: S, keyword: f, schema: g, parentSchema: d, $data: h, it: $ } = b;
    u($, w);
    const i = !h && w.compile ? w.compile.call($.self, g, d, $) : w.validate, c = y(S, f, i), p = S.let("valid");
    b.block$data(p, P), b.ok((E = w.valid) !== null && E !== void 0 ? E : p);
    function P() {
      if (w.errors === !1)
        N(), w.modifying && s(b), x(() => b.error());
      else {
        const q = w.async ? C() : A();
        w.modifying && s(b), x(() => a(b, q));
      }
    }
    function C() {
      const q = S.let("ruleErrs", null);
      return S.try(() => N((0, e._)`await `), (U) => S.assign(p, !1).if((0, e._)`${U} instanceof ${$.ValidationError}`, () => S.assign(q, (0, e._)`${U}.errors`), () => S.throw(U))), q;
    }
    function A() {
      const q = (0, e._)`${c}.errors`;
      return S.assign(q, null), N(e.nil), q;
    }
    function N(q = w.async ? (0, e._)`await ` : e.nil) {
      const U = $.opts.passContext ? t.default.this : t.default.self, Q = !("compile" in w && !h || w.schema === !1);
      S.assign(p, (0, e._)`${q}${(0, r.callValidateCode)(b, c, U, Q)}`, w.modifying);
    }
    function x(q) {
      var U;
      S.if((0, e.not)((U = w.valid) !== null && U !== void 0 ? U : p), q);
    }
  }
  _e.funcKeywordCode = n;
  function s(b) {
    const { gen: w, data: E, it: S } = b;
    w.if(S.parentData, () => w.assign(E, (0, e._)`${S.parentData}[${S.parentDataProperty}]`));
  }
  function a(b, w) {
    const { gen: E } = b;
    E.if((0, e._)`Array.isArray(${w})`, () => {
      E.assign(t.default.vErrors, (0, e._)`${t.default.vErrors} === null ? ${w} : ${t.default.vErrors}.concat(${w})`).assign(t.default.errors, (0, e._)`${t.default.vErrors}.length`), (0, o.extendErrors)(b);
    }, () => b.error());
  }
  function u({ schemaEnv: b }, w) {
    if (w.async && !b.$async)
      throw new Error("async keyword in sync schema");
  }
  function y(b, w, E) {
    if (E === void 0)
      throw new Error(`keyword "${w}" failed to compile`);
    return b.scopeValue("keyword", typeof E == "function" ? { ref: E } : { ref: E, code: (0, e.stringify)(E) });
  }
  function m(b, w, E = !1) {
    return !w.length || w.some((S) => S === "array" ? Array.isArray(b) : S === "object" ? b && typeof b == "object" && !Array.isArray(b) : typeof b == S || E && typeof b > "u");
  }
  _e.validSchemaType = m;
  function _({ schema: b, opts: w, self: E, errSchemaPath: S }, f, g) {
    if (Array.isArray(f.keyword) ? !f.keyword.includes(g) : f.keyword !== g)
      throw new Error("ajv implementation error");
    const d = f.dependencies;
    if (d?.some((h) => !Object.prototype.hasOwnProperty.call(b, h)))
      throw new Error(`parent schema must have dependencies of ${g}: ${d.join(",")}`);
    if (f.validateSchema && !f.validateSchema(b[g])) {
      const $ = `keyword "${g}" value is invalid at path "${S}": ` + E.errorsText(f.validateSchema.errors);
      if (w.validateSchema === "log")
        E.logger.error($);
      else
        throw new Error($);
    }
  }
  return _e.validateKeywordUsage = _, _e;
}
var Pe = {}, sn;
function gs() {
  if (sn) return Pe;
  sn = 1, Object.defineProperty(Pe, "__esModule", { value: !0 }), Pe.extendSubschemaMode = Pe.extendSubschemaData = Pe.getSubschema = void 0;
  const e = /* @__PURE__ */ J(), t = /* @__PURE__ */ Z();
  function r(n, { keyword: s, schemaProp: a, schema: u, schemaPath: y, errSchemaPath: m, topSchemaRef: _ }) {
    if (s !== void 0 && u !== void 0)
      throw new Error('both "keyword" and "schema" passed, only one allowed');
    if (s !== void 0) {
      const b = n.schema[s];
      return a === void 0 ? {
        schema: b,
        schemaPath: (0, e._)`${n.schemaPath}${(0, e.getProperty)(s)}`,
        errSchemaPath: `${n.errSchemaPath}/${s}`
      } : {
        schema: b[a],
        schemaPath: (0, e._)`${n.schemaPath}${(0, e.getProperty)(s)}${(0, e.getProperty)(a)}`,
        errSchemaPath: `${n.errSchemaPath}/${s}/${(0, t.escapeFragment)(a)}`
      };
    }
    if (u !== void 0) {
      if (y === void 0 || m === void 0 || _ === void 0)
        throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
      return {
        schema: u,
        schemaPath: y,
        topSchemaRef: _,
        errSchemaPath: m
      };
    }
    throw new Error('either "keyword" or "schema" must be passed');
  }
  Pe.getSubschema = r;
  function o(n, s, { dataProp: a, dataPropType: u, data: y, dataTypes: m, propertyName: _ }) {
    if (y !== void 0 && a !== void 0)
      throw new Error('both "data" and "dataProp" passed, only one allowed');
    const { gen: b } = s;
    if (a !== void 0) {
      const { errorPath: E, dataPathArr: S, opts: f } = s, g = b.let("data", (0, e._)`${s.data}${(0, e.getProperty)(a)}`, !0);
      w(g), n.errorPath = (0, e.str)`${E}${(0, t.getErrorPath)(a, u, f.jsPropertySyntax)}`, n.parentDataProperty = (0, e._)`${a}`, n.dataPathArr = [...S, n.parentDataProperty];
    }
    if (y !== void 0) {
      const E = y instanceof e.Name ? y : b.let("data", y, !0);
      w(E), _ !== void 0 && (n.propertyName = _);
    }
    m && (n.dataTypes = m);
    function w(E) {
      n.data = E, n.dataLevel = s.dataLevel + 1, n.dataTypes = [], s.definedProperties = /* @__PURE__ */ new Set(), n.parentData = s.data, n.dataNames = [...s.dataNames, E];
    }
  }
  Pe.extendSubschemaData = o;
  function l(n, { jtdDiscriminator: s, jtdMetadata: a, compositeRule: u, createErrors: y, allErrors: m }) {
    u !== void 0 && (n.compositeRule = u), y !== void 0 && (n.createErrors = y), m !== void 0 && (n.allErrors = m), n.jtdDiscriminator = s, n.jtdMetadata = a;
  }
  return Pe.extendSubschemaMode = l, Pe;
}
var le = {}, mr, an;
function Oo() {
  return an || (an = 1, mr = function e(t, r) {
    if (t === r) return !0;
    if (t && r && typeof t == "object" && typeof r == "object") {
      if (t.constructor !== r.constructor) return !1;
      var o, l, n;
      if (Array.isArray(t)) {
        if (o = t.length, o != r.length) return !1;
        for (l = o; l-- !== 0; )
          if (!e(t[l], r[l])) return !1;
        return !0;
      }
      if (t.constructor === RegExp) return t.source === r.source && t.flags === r.flags;
      if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === r.valueOf();
      if (t.toString !== Object.prototype.toString) return t.toString() === r.toString();
      if (n = Object.keys(t), o = n.length, o !== Object.keys(r).length) return !1;
      for (l = o; l-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(r, n[l])) return !1;
      for (l = o; l-- !== 0; ) {
        var s = n[l];
        if (!e(t[s], r[s])) return !1;
      }
      return !0;
    }
    return t !== t && r !== r;
  }), mr;
}
var gr = { exports: {} }, cn;
function ys() {
  if (cn) return gr.exports;
  cn = 1;
  var e = gr.exports = function(o, l, n) {
    typeof l == "function" && (n = l, l = {}), n = l.cb || n;
    var s = typeof n == "function" ? n : n.pre || function() {
    }, a = n.post || function() {
    };
    t(l, s, a, o, "", o);
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
  function t(o, l, n, s, a, u, y, m, _, b) {
    if (s && typeof s == "object" && !Array.isArray(s)) {
      l(s, a, u, y, m, _, b);
      for (var w in s) {
        var E = s[w];
        if (Array.isArray(E)) {
          if (w in e.arrayKeywords)
            for (var S = 0; S < E.length; S++)
              t(o, l, n, E[S], a + "/" + w + "/" + S, u, a, w, s, S);
        } else if (w in e.propsKeywords) {
          if (E && typeof E == "object")
            for (var f in E)
              t(o, l, n, E[f], a + "/" + w + "/" + r(f), u, a, w, s, f);
        } else (w in e.keywords || o.allKeys && !(w in e.skipKeywords)) && t(o, l, n, E, a + "/" + w, u, a, w, s);
      }
      n(s, a, u, y, m, _, b);
    }
  }
  function r(o) {
    return o.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  return gr.exports;
}
var ln;
function nr() {
  if (ln) return le;
  ln = 1, Object.defineProperty(le, "__esModule", { value: !0 }), le.getSchemaRefs = le.resolveUrl = le.normalizeId = le._getFullPath = le.getFullPath = le.inlineRef = void 0;
  const e = /* @__PURE__ */ Z(), t = Oo(), r = ys(), o = /* @__PURE__ */ new Set([
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
  function l(S, f = !0) {
    return typeof S == "boolean" ? !0 : f === !0 ? !s(S) : f ? a(S) <= f : !1;
  }
  le.inlineRef = l;
  const n = /* @__PURE__ */ new Set([
    "$ref",
    "$recursiveRef",
    "$recursiveAnchor",
    "$dynamicRef",
    "$dynamicAnchor"
  ]);
  function s(S) {
    for (const f in S) {
      if (n.has(f))
        return !0;
      const g = S[f];
      if (Array.isArray(g) && g.some(s) || typeof g == "object" && s(g))
        return !0;
    }
    return !1;
  }
  function a(S) {
    let f = 0;
    for (const g in S) {
      if (g === "$ref")
        return 1 / 0;
      if (f++, !o.has(g) && (typeof S[g] == "object" && (0, e.eachItem)(S[g], (d) => f += a(d)), f === 1 / 0))
        return 1 / 0;
    }
    return f;
  }
  function u(S, f = "", g) {
    g !== !1 && (f = _(f));
    const d = S.parse(f);
    return y(S, d);
  }
  le.getFullPath = u;
  function y(S, f) {
    return S.serialize(f).split("#")[0] + "#";
  }
  le._getFullPath = y;
  const m = /#\/?$/;
  function _(S) {
    return S ? S.replace(m, "") : "";
  }
  le.normalizeId = _;
  function b(S, f, g) {
    return g = _(g), S.resolve(f, g);
  }
  le.resolveUrl = b;
  const w = /^[a-z_][-a-z0-9._]*$/i;
  function E(S, f) {
    if (typeof S == "boolean")
      return {};
    const { schemaId: g, uriResolver: d } = this.opts, h = _(S[g] || f), $ = { "": h }, i = u(d, h, !1), c = {}, p = /* @__PURE__ */ new Set();
    return r(S, { allKeys: !0 }, (A, N, x, q) => {
      if (q === void 0)
        return;
      const U = i + N;
      let Q = $[q];
      typeof A[g] == "string" && (Q = te.call(this, A[g])), me.call(this, A.$anchor), me.call(this, A.$dynamicAnchor), $[N] = Q;
      function te(X) {
        const ve = this.opts.uriResolver.resolve;
        if (X = _(Q ? ve(Q, X) : X), p.has(X))
          throw C(X);
        p.add(X);
        let B = this.refs[X];
        return typeof B == "string" && (B = this.refs[B]), typeof B == "object" ? P(A, B.schema, X) : X !== _(U) && (X[0] === "#" ? (P(A, c[X], X), c[X] = A) : this.refs[X] = U), X;
      }
      function me(X) {
        if (typeof X == "string") {
          if (!w.test(X))
            throw new Error(`invalid anchor "${X}"`);
          te.call(this, `#${X}`);
        }
      }
    }), c;
    function P(A, N, x) {
      if (N !== void 0 && !t(A, N))
        throw C(x);
    }
    function C(A) {
      return new Error(`reference "${A}" resolves to more than one schema`);
    }
  }
  return le.getSchemaRefs = E, le;
}
var dn;
function or() {
  if (dn) return Ee;
  dn = 1, Object.defineProperty(Ee, "__esModule", { value: !0 }), Ee.getData = Ee.KeywordCxt = Ee.validateFunctionCode = void 0;
  const e = /* @__PURE__ */ ps(), t = /* @__PURE__ */ er(), r = /* @__PURE__ */ jo(), o = /* @__PURE__ */ er(), l = /* @__PURE__ */ hs(), n = /* @__PURE__ */ ms(), s = /* @__PURE__ */ gs(), a = /* @__PURE__ */ J(), u = /* @__PURE__ */ we(), y = /* @__PURE__ */ nr(), m = /* @__PURE__ */ Z(), _ = /* @__PURE__ */ rr();
  function b(R) {
    if (i(R) && (p(R), $(R))) {
      f(R);
      return;
    }
    w(R, () => (0, e.topBoolOrEmptySchema)(R));
  }
  Ee.validateFunctionCode = b;
  function w({ gen: R, validateName: O, schema: D, schemaEnv: L, opts: H }, Y) {
    H.code.es5 ? R.func(O, (0, a._)`${u.default.data}, ${u.default.valCxt}`, L.$async, () => {
      R.code((0, a._)`"use strict"; ${d(D, H)}`), S(R, H), R.code(Y);
    }) : R.func(O, (0, a._)`${u.default.data}, ${E(H)}`, L.$async, () => R.code(d(D, H)).code(Y));
  }
  function E(R) {
    return (0, a._)`{${u.default.instancePath}="", ${u.default.parentData}, ${u.default.parentDataProperty}, ${u.default.rootData}=${u.default.data}${R.dynamicRef ? (0, a._)`, ${u.default.dynamicAnchors}={}` : a.nil}}={}`;
  }
  function S(R, O) {
    R.if(u.default.valCxt, () => {
      R.var(u.default.instancePath, (0, a._)`${u.default.valCxt}.${u.default.instancePath}`), R.var(u.default.parentData, (0, a._)`${u.default.valCxt}.${u.default.parentData}`), R.var(u.default.parentDataProperty, (0, a._)`${u.default.valCxt}.${u.default.parentDataProperty}`), R.var(u.default.rootData, (0, a._)`${u.default.valCxt}.${u.default.rootData}`), O.dynamicRef && R.var(u.default.dynamicAnchors, (0, a._)`${u.default.valCxt}.${u.default.dynamicAnchors}`);
    }, () => {
      R.var(u.default.instancePath, (0, a._)`""`), R.var(u.default.parentData, (0, a._)`undefined`), R.var(u.default.parentDataProperty, (0, a._)`undefined`), R.var(u.default.rootData, u.default.data), O.dynamicRef && R.var(u.default.dynamicAnchors, (0, a._)`{}`);
    });
  }
  function f(R) {
    const { schema: O, opts: D, gen: L } = R;
    w(R, () => {
      D.$comment && O.$comment && q(R), A(R), L.let(u.default.vErrors, null), L.let(u.default.errors, 0), D.unevaluated && g(R), P(R), U(R);
    });
  }
  function g(R) {
    const { gen: O, validateName: D } = R;
    R.evaluated = O.const("evaluated", (0, a._)`${D}.evaluated`), O.if((0, a._)`${R.evaluated}.dynamicProps`, () => O.assign((0, a._)`${R.evaluated}.props`, (0, a._)`undefined`)), O.if((0, a._)`${R.evaluated}.dynamicItems`, () => O.assign((0, a._)`${R.evaluated}.items`, (0, a._)`undefined`));
  }
  function d(R, O) {
    const D = typeof R == "object" && R[O.schemaId];
    return D && (O.code.source || O.code.process) ? (0, a._)`/*# sourceURL=${D} */` : a.nil;
  }
  function h(R, O) {
    if (i(R) && (p(R), $(R))) {
      c(R, O);
      return;
    }
    (0, e.boolOrEmptySchema)(R, O);
  }
  function $({ schema: R, self: O }) {
    if (typeof R == "boolean")
      return !R;
    for (const D in R)
      if (O.RULES.all[D])
        return !0;
    return !1;
  }
  function i(R) {
    return typeof R.schema != "boolean";
  }
  function c(R, O) {
    const { schema: D, gen: L, opts: H } = R;
    H.$comment && D.$comment && q(R), N(R), x(R);
    const Y = L.const("_errs", u.default.errors);
    P(R, Y), L.var(O, (0, a._)`${Y} === ${u.default.errors}`);
  }
  function p(R) {
    (0, m.checkUnknownRules)(R), C(R);
  }
  function P(R, O) {
    if (R.opts.jtd)
      return te(R, [], !1, O);
    const D = (0, t.getSchemaTypes)(R.schema), L = (0, t.coerceAndCheckDataType)(R, D);
    te(R, D, !L, O);
  }
  function C(R) {
    const { schema: O, errSchemaPath: D, opts: L, self: H } = R;
    O.$ref && L.ignoreKeywordsWithRef && (0, m.schemaHasRulesButRef)(O, H.RULES) && H.logger.warn(`$ref: keywords ignored in schema at path "${D}"`);
  }
  function A(R) {
    const { schema: O, opts: D } = R;
    O.default !== void 0 && D.useDefaults && D.strictSchema && (0, m.checkStrictMode)(R, "default is ignored in the schema root");
  }
  function N(R) {
    const O = R.schema[R.opts.schemaId];
    O && (R.baseId = (0, y.resolveUrl)(R.opts.uriResolver, R.baseId, O));
  }
  function x(R) {
    if (R.schema.$async && !R.schemaEnv.$async)
      throw new Error("async schema in sync schema");
  }
  function q({ gen: R, schemaEnv: O, schema: D, errSchemaPath: L, opts: H }) {
    const Y = D.$comment;
    if (H.$comment === !0)
      R.code((0, a._)`${u.default.self}.logger.log(${Y})`);
    else if (typeof H.$comment == "function") {
      const ie = (0, a.str)`${L}/$comment`, $e = R.scopeValue("root", { ref: O.root });
      R.code((0, a._)`${u.default.self}.opts.$comment(${Y}, ${ie}, ${$e}.schema)`);
    }
  }
  function U(R) {
    const { gen: O, schemaEnv: D, validateName: L, ValidationError: H, opts: Y } = R;
    D.$async ? O.if((0, a._)`${u.default.errors} === 0`, () => O.return(u.default.data), () => O.throw((0, a._)`new ${H}(${u.default.vErrors})`)) : (O.assign((0, a._)`${L}.errors`, u.default.vErrors), Y.unevaluated && Q(R), O.return((0, a._)`${u.default.errors} === 0`));
  }
  function Q({ gen: R, evaluated: O, props: D, items: L }) {
    D instanceof a.Name && R.assign((0, a._)`${O}.props`, D), L instanceof a.Name && R.assign((0, a._)`${O}.items`, L);
  }
  function te(R, O, D, L) {
    const { gen: H, schema: Y, data: ie, allErrors: $e, opts: de, self: ue } = R, { RULES: ae } = ue;
    if (Y.$ref && (de.ignoreKeywordsWithRef || !(0, m.schemaHasRulesButRef)(Y, ae))) {
      H.block(() => K(R, "$ref", ae.all.$ref.definition));
      return;
    }
    de.jtd || X(R, O), H.block(() => {
      for (const ge of ae.rules)
        ze(ge);
      ze(ae.post);
    });
    function ze(ge) {
      (0, r.shouldUseGroup)(Y, ge) && (ge.type ? (H.if((0, o.checkDataType)(ge.type, ie, de.strictNumbers)), me(R, ge), O.length === 1 && O[0] === ge.type && D && (H.else(), (0, o.reportTypeError)(R)), H.endIf()) : me(R, ge), $e || H.if((0, a._)`${u.default.errors} === ${L || 0}`));
    }
  }
  function me(R, O) {
    const { gen: D, schema: L, opts: { useDefaults: H } } = R;
    H && (0, l.assignDefaults)(R, O.type), D.block(() => {
      for (const Y of O.rules)
        (0, r.shouldUseRule)(L, Y) && K(R, Y.keyword, Y.definition, O.type);
    });
  }
  function X(R, O) {
    R.schemaEnv.meta || !R.opts.strictTypes || (ve(R, O), R.opts.allowUnionTypes || B(R, O), j(R, R.dataTypes));
  }
  function ve(R, O) {
    if (O.length) {
      if (!R.dataTypes.length) {
        R.dataTypes = O;
        return;
      }
      O.forEach((D) => {
        M(R.dataTypes, D) || k(R, `type "${D}" not allowed by context "${R.dataTypes.join(",")}"`);
      }), v(R, O);
    }
  }
  function B(R, O) {
    O.length > 1 && !(O.length === 2 && O.includes("null")) && k(R, "use allowUnionTypes to allow union type keyword");
  }
  function j(R, O) {
    const D = R.self.RULES.all;
    for (const L in D) {
      const H = D[L];
      if (typeof H == "object" && (0, r.shouldUseRule)(R.schema, H)) {
        const { type: Y } = H.definition;
        Y.length && !Y.some((ie) => V(O, ie)) && k(R, `missing type "${Y.join(",")}" for keyword "${L}"`);
      }
    }
  }
  function V(R, O) {
    return R.includes(O) || O === "number" && R.includes("integer");
  }
  function M(R, O) {
    return R.includes(O) || O === "integer" && R.includes("number");
  }
  function v(R, O) {
    const D = [];
    for (const L of R.dataTypes)
      M(O, L) ? D.push(L) : O.includes("integer") && L === "number" && D.push("integer");
    R.dataTypes = D;
  }
  function k(R, O) {
    const D = R.schemaEnv.baseId + R.errSchemaPath;
    O += ` at "${D}" (strictTypes)`, (0, m.checkStrictMode)(R, O, R.opts.strictTypes);
  }
  class I {
    constructor(O, D, L) {
      if ((0, n.validateKeywordUsage)(O, D, L), this.gen = O.gen, this.allErrors = O.allErrors, this.keyword = L, this.data = O.data, this.schema = O.schema[L], this.$data = D.$data && O.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, m.schemaRefOrVal)(O, this.schema, L, this.$data), this.schemaType = D.schemaType, this.parentSchema = O.schema, this.params = {}, this.it = O, this.def = D, this.$data)
        this.schemaCode = O.gen.const("vSchema", ee(this.$data, O));
      else if (this.schemaCode = this.schemaValue, !(0, n.validSchemaType)(this.schema, D.schemaType, D.allowUndefined))
        throw new Error(`${L} value must be ${JSON.stringify(D.schemaType)}`);
      ("code" in D ? D.trackErrors : D.errors !== !1) && (this.errsCount = O.gen.const("_errs", u.default.errors));
    }
    result(O, D, L) {
      this.failResult((0, a.not)(O), D, L);
    }
    failResult(O, D, L) {
      this.gen.if(O), L ? L() : this.error(), D ? (this.gen.else(), D(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    pass(O, D) {
      this.failResult((0, a.not)(O), void 0, D);
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
      const { schemaCode: D } = this;
      this.fail((0, a._)`${D} !== undefined && (${(0, a.or)(this.invalid$data(), O)})`);
    }
    error(O, D, L) {
      if (D) {
        this.setParams(D), this._error(O, L), this.setParams({});
        return;
      }
      this._error(O, L);
    }
    _error(O, D) {
      (O ? _.reportExtraError : _.reportError)(this, this.def.error, D);
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
    setParams(O, D) {
      D ? Object.assign(this.params, O) : this.params = O;
    }
    block$data(O, D, L = a.nil) {
      this.gen.block(() => {
        this.check$data(O, L), D();
      });
    }
    check$data(O = a.nil, D = a.nil) {
      if (!this.$data)
        return;
      const { gen: L, schemaCode: H, schemaType: Y, def: ie } = this;
      L.if((0, a.or)((0, a._)`${H} === undefined`, D)), O !== a.nil && L.assign(O, !0), (Y.length || ie.validateSchema) && (L.elseIf(this.invalid$data()), this.$dataError(), O !== a.nil && L.assign(O, !1)), L.else();
    }
    invalid$data() {
      const { gen: O, schemaCode: D, schemaType: L, def: H, it: Y } = this;
      return (0, a.or)(ie(), $e());
      function ie() {
        if (L.length) {
          if (!(D instanceof a.Name))
            throw new Error("ajv implementation error");
          const de = Array.isArray(L) ? L : [L];
          return (0, a._)`${(0, o.checkDataTypes)(de, D, Y.opts.strictNumbers, o.DataType.Wrong)}`;
        }
        return a.nil;
      }
      function $e() {
        if (H.validateSchema) {
          const de = O.scopeValue("validate$data", { ref: H.validateSchema });
          return (0, a._)`!${de}(${D})`;
        }
        return a.nil;
      }
    }
    subschema(O, D) {
      const L = (0, s.getSubschema)(this.it, O);
      (0, s.extendSubschemaData)(L, this.it, O), (0, s.extendSubschemaMode)(L, O);
      const H = { ...this.it, ...L, items: void 0, props: void 0 };
      return h(H, D), H;
    }
    mergeEvaluated(O, D) {
      const { it: L, gen: H } = this;
      L.opts.unevaluated && (L.props !== !0 && O.props !== void 0 && (L.props = m.mergeEvaluated.props(H, O.props, L.props, D)), L.items !== !0 && O.items !== void 0 && (L.items = m.mergeEvaluated.items(H, O.items, L.items, D)));
    }
    mergeValidEvaluated(O, D) {
      const { it: L, gen: H } = this;
      if (L.opts.unevaluated && (L.props !== !0 || L.items !== !0))
        return H.if(D, () => this.mergeEvaluated(O, a.Name)), !0;
    }
  }
  Ee.KeywordCxt = I;
  function K(R, O, D, L) {
    const H = new I(R, D, O);
    "code" in D ? D.code(H, L) : H.$data && D.validate ? (0, n.funcKeywordCode)(H, D) : "macro" in D ? (0, n.macroKeywordCode)(H, D) : (D.compile || D.validate) && (0, n.funcKeywordCode)(H, D);
  }
  const G = /^\/(?:[^~]|~0|~1)*$/, re = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function ee(R, { dataLevel: O, dataNames: D, dataPathArr: L }) {
    let H, Y;
    if (R === "")
      return u.default.rootData;
    if (R[0] === "/") {
      if (!G.test(R))
        throw new Error(`Invalid JSON-pointer: ${R}`);
      H = R, Y = u.default.rootData;
    } else {
      const ue = re.exec(R);
      if (!ue)
        throw new Error(`Invalid JSON-pointer: ${R}`);
      const ae = +ue[1];
      if (H = ue[2], H === "#") {
        if (ae >= O)
          throw new Error(de("property/index", ae));
        return L[O - ae];
      }
      if (ae > O)
        throw new Error(de("data", ae));
      if (Y = D[O - ae], !H)
        return Y;
    }
    let ie = Y;
    const $e = H.split("/");
    for (const ue of $e)
      ue && (Y = (0, a._)`${Y}${(0, a.getProperty)((0, m.unescapeJsonPointer)(ue))}`, ie = (0, a._)`${ie} && ${Y}`);
    return ie;
    function de(ue, ae) {
      return `Cannot access ${ue} ${ae} levels up, current level is ${O}`;
    }
  }
  return Ee.getData = ee, Ee;
}
var rt = {}, un;
function Rr() {
  if (un) return rt;
  un = 1, Object.defineProperty(rt, "__esModule", { value: !0 });
  class e extends Error {
    constructor(r) {
      super("validation failed"), this.errors = r, this.ajv = this.validation = !0;
    }
  }
  return rt.default = e, rt;
}
var nt = {}, fn;
function sr() {
  if (fn) return nt;
  fn = 1, Object.defineProperty(nt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ nr();
  class t extends Error {
    constructor(o, l, n, s) {
      super(s || `can't resolve reference ${n} from id ${l}`), this.missingRef = (0, e.resolveUrl)(o, l, n), this.missingSchema = (0, e.normalizeId)((0, e.getFullPath)(o, this.missingRef));
    }
  }
  return nt.default = t, nt;
}
var fe = {}, pn;
function ir() {
  if (pn) return fe;
  pn = 1, Object.defineProperty(fe, "__esModule", { value: !0 }), fe.resolveSchema = fe.getCompilingSchema = fe.resolveRef = fe.compileSchema = fe.SchemaEnv = void 0;
  const e = /* @__PURE__ */ J(), t = /* @__PURE__ */ Rr(), r = /* @__PURE__ */ we(), o = /* @__PURE__ */ nr(), l = /* @__PURE__ */ Z(), n = /* @__PURE__ */ or();
  class s {
    constructor(g) {
      var d;
      this.refs = {}, this.dynamicAnchors = {};
      let h;
      typeof g.schema == "object" && (h = g.schema), this.schema = g.schema, this.schemaId = g.schemaId, this.root = g.root || this, this.baseId = (d = g.baseId) !== null && d !== void 0 ? d : (0, o.normalizeId)(h?.[g.schemaId || "$id"]), this.schemaPath = g.schemaPath, this.localRefs = g.localRefs, this.meta = g.meta, this.$async = h?.$async, this.refs = {};
    }
  }
  fe.SchemaEnv = s;
  function a(f) {
    const g = m.call(this, f);
    if (g)
      return g;
    const d = (0, o.getFullPath)(this.opts.uriResolver, f.root.baseId), { es5: h, lines: $ } = this.opts.code, { ownProperties: i } = this.opts, c = new e.CodeGen(this.scope, { es5: h, lines: $, ownProperties: i });
    let p;
    f.$async && (p = c.scopeValue("Error", {
      ref: t.default,
      code: (0, e._)`require("ajv/dist/runtime/validation_error").default`
    }));
    const P = c.scopeName("validate");
    f.validateName = P;
    const C = {
      gen: c,
      allErrors: this.opts.allErrors,
      data: r.default.data,
      parentData: r.default.parentData,
      parentDataProperty: r.default.parentDataProperty,
      dataNames: [r.default.data],
      dataPathArr: [e.nil],
      // TODO can its length be used as dataLevel if nil is removed?
      dataLevel: 0,
      dataTypes: [],
      definedProperties: /* @__PURE__ */ new Set(),
      topSchemaRef: c.scopeValue("schema", this.opts.code.source === !0 ? { ref: f.schema, code: (0, e.stringify)(f.schema) } : { ref: f.schema }),
      validateName: P,
      ValidationError: p,
      schema: f.schema,
      schemaEnv: f,
      rootId: d,
      baseId: f.baseId || d,
      schemaPath: e.nil,
      errSchemaPath: f.schemaPath || (this.opts.jtd ? "" : "#"),
      errorPath: (0, e._)`""`,
      opts: this.opts,
      self: this
    };
    let A;
    try {
      this._compilations.add(f), (0, n.validateFunctionCode)(C), c.optimize(this.opts.code.optimize);
      const N = c.toString();
      A = `${c.scopeRefs(r.default.scope)}return ${N}`, this.opts.code.process && (A = this.opts.code.process(A, f));
      const q = new Function(`${r.default.self}`, `${r.default.scope}`, A)(this, this.scope.get());
      if (this.scope.value(P, { ref: q }), q.errors = null, q.schema = f.schema, q.schemaEnv = f, f.$async && (q.$async = !0), this.opts.code.source === !0 && (q.source = { validateName: P, validateCode: N, scopeValues: c._values }), this.opts.unevaluated) {
        const { props: U, items: Q } = C;
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
  fe.compileSchema = a;
  function u(f, g, d) {
    var h;
    d = (0, o.resolveUrl)(this.opts.uriResolver, g, d);
    const $ = f.refs[d];
    if ($)
      return $;
    let i = b.call(this, f, d);
    if (i === void 0) {
      const c = (h = f.localRefs) === null || h === void 0 ? void 0 : h[d], { schemaId: p } = this.opts;
      c && (i = new s({ schema: c, schemaId: p, root: f, baseId: g }));
    }
    if (i !== void 0)
      return f.refs[d] = y.call(this, i);
  }
  fe.resolveRef = u;
  function y(f) {
    return (0, o.inlineRef)(f.schema, this.opts.inlineRefs) ? f.schema : f.validate ? f : a.call(this, f);
  }
  function m(f) {
    for (const g of this._compilations)
      if (_(g, f))
        return g;
  }
  fe.getCompilingSchema = m;
  function _(f, g) {
    return f.schema === g.schema && f.root === g.root && f.baseId === g.baseId;
  }
  function b(f, g) {
    let d;
    for (; typeof (d = this.refs[g]) == "string"; )
      g = d;
    return d || this.schemas[g] || w.call(this, f, g);
  }
  function w(f, g) {
    const d = this.opts.uriResolver.parse(g), h = (0, o._getFullPath)(this.opts.uriResolver, d);
    let $ = (0, o.getFullPath)(this.opts.uriResolver, f.baseId, void 0);
    if (Object.keys(f.schema).length > 0 && h === $)
      return S.call(this, d, f);
    const i = (0, o.normalizeId)(h), c = this.refs[i] || this.schemas[i];
    if (typeof c == "string") {
      const p = w.call(this, f, c);
      return typeof p?.schema != "object" ? void 0 : S.call(this, d, p);
    }
    if (typeof c?.schema == "object") {
      if (c.validate || a.call(this, c), i === (0, o.normalizeId)(g)) {
        const { schema: p } = c, { schemaId: P } = this.opts, C = p[P];
        return C && ($ = (0, o.resolveUrl)(this.opts.uriResolver, $, C)), new s({ schema: p, schemaId: P, root: f, baseId: $ });
      }
      return S.call(this, d, c);
    }
  }
  fe.resolveSchema = w;
  const E = /* @__PURE__ */ new Set([
    "properties",
    "patternProperties",
    "enum",
    "dependencies",
    "definitions"
  ]);
  function S(f, { baseId: g, schema: d, root: h }) {
    var $;
    if ((($ = f.fragment) === null || $ === void 0 ? void 0 : $[0]) !== "/")
      return;
    for (const p of f.fragment.slice(1).split("/")) {
      if (typeof d == "boolean")
        return;
      const P = d[(0, l.unescapeFragment)(p)];
      if (P === void 0)
        return;
      d = P;
      const C = typeof d == "object" && d[this.opts.schemaId];
      !E.has(p) && C && (g = (0, o.resolveUrl)(this.opts.uriResolver, g, C));
    }
    let i;
    if (typeof d != "boolean" && d.$ref && !(0, l.schemaHasRulesButRef)(d, this.RULES)) {
      const p = (0, o.resolveUrl)(this.opts.uriResolver, g, d.$ref);
      i = w.call(this, h, p);
    }
    const { schemaId: c } = this.opts;
    if (i = i || new s({ schema: d, schemaId: c, root: h, baseId: g }), i.schema !== i.root.schema)
      return i;
  }
  return fe;
}
const vs = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", $s = "Meta-schema for $data reference (JSON AnySchema extension proposal)", _s = "object", bs = ["$data"], ws = { $data: { type: "string", anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] } }, Ss = !1, Es = {
  $id: vs,
  description: $s,
  type: _s,
  required: bs,
  properties: ws,
  additionalProperties: Ss
};
var ot = {}, Ye = { exports: {} }, yr, hn;
function Mo() {
  if (hn) return yr;
  hn = 1;
  const e = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu), t = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u), r = RegExp.prototype.test.bind(/^[\da-f]{2}$/iu), o = RegExp.prototype.test.bind(/^[\da-z\-._~]$/iu), l = RegExp.prototype.test.bind(/^[\da-z\-._~!$&'()*+,;=:@/]$/iu);
  function n(i) {
    let c = "", p = 0, P = 0;
    for (P = 0; P < i.length; P++)
      if (p = i[P].charCodeAt(0), p !== 48) {
        if (!(p >= 48 && p <= 57 || p >= 65 && p <= 70 || p >= 97 && p <= 102))
          return "";
        c += i[P];
        break;
      }
    for (P += 1; P < i.length; P++) {
      if (p = i[P].charCodeAt(0), !(p >= 48 && p <= 57 || p >= 65 && p <= 70 || p >= 97 && p <= 102))
        return "";
      c += i[P];
    }
    return c;
  }
  const s = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
  function a(i) {
    return i.length = 0, !0;
  }
  function u(i, c, p) {
    if (i.length) {
      const P = n(i);
      if (P !== "")
        c.push(P);
      else
        return p.error = !0, !1;
      i.length = 0;
    }
    return !0;
  }
  function y(i) {
    let c = 0;
    const p = { error: !1, address: "", zone: "" }, P = [], C = [];
    let A = !1, N = !1, x = u;
    for (let q = 0; q < i.length; q++) {
      const U = i[q];
      if (!(U === "[" || U === "]"))
        if (U === ":") {
          if (A === !0 && (N = !0), !x(C, P, p))
            break;
          if (++c > 7) {
            p.error = !0;
            break;
          }
          q > 0 && i[q - 1] === ":" && (A = !0), P.push(":");
          continue;
        } else if (U === "%") {
          if (!x(C, P, p))
            break;
          x = a;
        } else {
          C.push(U);
          continue;
        }
    }
    return C.length && (x === a ? p.zone = C.join("") : N ? P.push(C.join("")) : P.push(n(C))), p.address = P.join(""), p;
  }
  function m(i) {
    if (_(i, ":") < 2)
      return { host: i, isIPV6: !1 };
    const c = y(i);
    if (c.error)
      return { host: i, isIPV6: !1 };
    {
      let p = c.address, P = c.address;
      return c.zone && (p += "%" + c.zone, P += "%25" + c.zone), { host: p, isIPV6: !0, escapedHost: P };
    }
  }
  function _(i, c) {
    let p = 0;
    for (let P = 0; P < i.length; P++)
      i[P] === c && p++;
    return p;
  }
  function b(i) {
    let c = i;
    const p = [];
    let P = -1, C = 0;
    for (; C = c.length; ) {
      if (C === 1) {
        if (c === ".")
          break;
        if (c === "/") {
          p.push("/");
          break;
        } else {
          p.push(c);
          break;
        }
      } else if (C === 2) {
        if (c[0] === ".") {
          if (c[1] === ".")
            break;
          if (c[1] === "/") {
            c = c.slice(2);
            continue;
          }
        } else if (c[0] === "/" && (c[1] === "." || c[1] === "/")) {
          p.push("/");
          break;
        }
      } else if (C === 3 && c === "/..") {
        p.length !== 0 && p.pop(), p.push("/");
        break;
      }
      if (c[0] === ".") {
        if (c[1] === ".") {
          if (c[2] === "/") {
            c = c.slice(3);
            continue;
          }
        } else if (c[1] === "/") {
          c = c.slice(2);
          continue;
        }
      } else if (c[0] === "/" && c[1] === ".") {
        if (c[2] === "/") {
          c = c.slice(2);
          continue;
        } else if (c[2] === "." && c[3] === "/") {
          c = c.slice(3), p.length !== 0 && p.pop();
          continue;
        }
      }
      if ((P = c.indexOf("/", 1)) === -1) {
        p.push(c);
        break;
      } else
        p.push(c.slice(0, P)), c = c.slice(P);
    }
    return p.join("");
  }
  const w = { "@": "%40", "/": "%2F", "?": "%3F", "#": "%23", ":": "%3A" }, E = /[@/?#:]/g, S = /[@/?#]/g;
  function f(i, c) {
    const p = c ? S : E;
    return p.lastIndex = 0, i.replace(p, (P) => w[P]);
  }
  function g(i, c = !1) {
    if (i.indexOf("%") === -1)
      return i;
    let p = "";
    for (let P = 0; P < i.length; P++) {
      if (i[P] === "%" && P + 2 < i.length) {
        const C = i.slice(P + 1, P + 3);
        if (r(C)) {
          const A = C.toUpperCase(), N = String.fromCharCode(parseInt(A, 16));
          c && o(N) ? p += N : p += "%" + A, P += 2;
          continue;
        }
      }
      p += i[P];
    }
    return p;
  }
  function d(i) {
    let c = "";
    for (let p = 0; p < i.length; p++) {
      if (i[p] === "%" && p + 2 < i.length) {
        const P = i.slice(p + 1, p + 3);
        if (r(P)) {
          const C = P.toUpperCase(), A = String.fromCharCode(parseInt(C, 16));
          A !== "." && o(A) ? c += A : c += "%" + C, p += 2;
          continue;
        }
      }
      l(i[p]) ? c += i[p] : c += escape(i[p]);
    }
    return c;
  }
  function h(i) {
    let c = "";
    for (let p = 0; p < i.length; p++) {
      if (i[p] === "%" && p + 2 < i.length) {
        const P = i.slice(p + 1, p + 3);
        if (r(P)) {
          c += "%" + P.toUpperCase(), p += 2;
          continue;
        }
      }
      c += escape(i[p]);
    }
    return c;
  }
  function $(i) {
    const c = [];
    if (i.userinfo !== void 0 && (c.push(i.userinfo), c.push("@")), i.host !== void 0) {
      let p = unescape(i.host);
      if (!t(p)) {
        const P = m(p);
        P.isIPV6 === !0 ? p = `[${P.escapedHost}]` : p = f(p, !1);
      }
      c.push(p);
    }
    return (typeof i.port == "number" || typeof i.port == "string") && (c.push(":"), c.push(String(i.port))), c.length ? c.join("") : void 0;
  }
  return yr = {
    nonSimpleDomain: s,
    recomposeAuthority: $,
    reescapeHostDelimiters: f,
    normalizePercentEncoding: g,
    normalizePathEncoding: d,
    escapePreservingEscapes: h,
    removeDotSegments: b,
    isIPv4: t,
    isUUID: e,
    normalizeIPv6: m,
    stringArrayToHexStripped: n
  }, yr;
}
var vr, mn;
function ks() {
  if (mn) return vr;
  mn = 1;
  const { isUUID: e } = Mo(), t = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu, r = (
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
    return r.indexOf(
      /** @type {*} */
      i
    ) !== -1;
  }
  function l(i) {
    return i.secure === !0 ? !0 : i.secure === !1 ? !1 : i.scheme ? i.scheme.length === 3 && (i.scheme[0] === "w" || i.scheme[0] === "W") && (i.scheme[1] === "s" || i.scheme[1] === "S") && (i.scheme[2] === "s" || i.scheme[2] === "S") : !1;
  }
  function n(i) {
    return i.host || (i.error = i.error || "HTTP URIs must have a host."), i;
  }
  function s(i) {
    const c = String(i.scheme).toLowerCase() === "https";
    return (i.port === (c ? 443 : 80) || i.port === "") && (i.port = void 0), i.path || (i.path = "/"), i;
  }
  function a(i) {
    return i.secure = l(i), i.resourceName = (i.path || "/") + (i.query ? "?" + i.query : ""), i.path = void 0, i.query = void 0, i;
  }
  function u(i) {
    if ((i.port === (l(i) ? 443 : 80) || i.port === "") && (i.port = void 0), typeof i.secure == "boolean" && (i.scheme = i.secure ? "wss" : "ws", i.secure = void 0), i.resourceName) {
      const [c, p] = i.resourceName.split("?");
      i.path = c && c !== "/" ? c : void 0, i.query = p, i.resourceName = void 0;
    }
    return i.fragment = void 0, i;
  }
  function y(i, c) {
    if (!i.path)
      return i.error = "URN can not be parsed", i;
    const p = i.path.match(t);
    if (p) {
      const P = c.scheme || i.scheme || "urn";
      i.nid = p[1].toLowerCase(), i.nss = p[2];
      const C = `${P}:${c.nid || i.nid}`, A = $(C);
      i.path = void 0, A && (i = A.parse(i, c));
    } else
      i.error = i.error || "URN can not be parsed.";
    return i;
  }
  function m(i, c) {
    if (i.nid === void 0)
      throw new Error("URN without nid cannot be serialized");
    const p = c.scheme || i.scheme || "urn", P = i.nid.toLowerCase(), C = `${p}:${c.nid || P}`, A = $(C);
    A && (i = A.serialize(i, c));
    const N = i, x = i.nss;
    return N.path = `${P || c.nid}:${x}`, c.skipEscape = !0, N;
  }
  function _(i, c) {
    const p = i;
    return p.uuid = p.nss, p.nss = void 0, !c.tolerant && (!p.uuid || !e(p.uuid)) && (p.error = p.error || "UUID is not valid."), p;
  }
  function b(i) {
    const c = i;
    return c.nss = (i.uuid || "").toLowerCase(), c;
  }
  const w = (
    /** @type {SchemeHandler} */
    {
      scheme: "http",
      domainHost: !0,
      parse: n,
      serialize: s
    }
  ), E = (
    /** @type {SchemeHandler} */
    {
      scheme: "https",
      domainHost: w.domainHost,
      parse: n,
      serialize: s
    }
  ), S = (
    /** @type {SchemeHandler} */
    {
      scheme: "ws",
      domainHost: !0,
      parse: a,
      serialize: u
    }
  ), f = (
    /** @type {SchemeHandler} */
    {
      scheme: "wss",
      domainHost: S.domainHost,
      parse: S.parse,
      serialize: S.serialize
    }
  ), h = (
    /** @type {Record<SchemeName, SchemeHandler>} */
    {
      http: w,
      https: E,
      ws: S,
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
          parse: _,
          serialize: b,
          skipNormalize: !0
        }
      )
    }
  );
  Object.setPrototypeOf(h, null);
  function $(i) {
    return i && (h[
      /** @type {SchemeName} */
      i
    ] || h[
      /** @type {SchemeName} */
      i.toLowerCase()
    ]) || void 0;
  }
  return vr = {
    wsIsSecure: l,
    SCHEMES: h,
    isValidSchemeName: o,
    getSchemeHandler: $
  }, vr;
}
var gn;
function Ps() {
  if (gn) return Ye.exports;
  gn = 1;
  const { normalizeIPv6: e, removeDotSegments: t, recomposeAuthority: r, normalizePercentEncoding: o, normalizePathEncoding: l, escapePreservingEscapes: n, reescapeHostDelimiters: s, isIPv4: a, nonSimpleDomain: u } = Mo(), { SCHEMES: y, getSchemeHandler: m } = ks();
  function _(C, A) {
    return typeof C == "string" ? C = /** @type {T} */
    i(C, A) : typeof C == "object" && (C = /** @type {T} */
    $(S(C, A), A)), C;
  }
  function b(C, A, N) {
    const x = N ? Object.assign({ scheme: "null" }, N) : { scheme: "null" }, q = w($(C, x), $(A, x), x, !0);
    return x.skipEscape = !0, S(q, x);
  }
  function w(C, A, N, x) {
    const q = {};
    return x || (C = $(S(C, N), N), A = $(S(A, N), N)), N = N || {}, !N.tolerant && A.scheme ? (q.scheme = A.scheme, q.userinfo = A.userinfo, q.host = A.host, q.port = A.port, q.path = t(A.path || ""), q.query = A.query) : (A.userinfo !== void 0 || A.host !== void 0 || A.port !== void 0 ? (q.userinfo = A.userinfo, q.host = A.host, q.port = A.port, q.path = t(A.path || ""), q.query = A.query) : (A.path ? (A.path[0] === "/" ? q.path = t(A.path) : ((C.userinfo !== void 0 || C.host !== void 0 || C.port !== void 0) && !C.path ? q.path = "/" + A.path : C.path ? q.path = C.path.slice(0, C.path.lastIndexOf("/") + 1) + A.path : q.path = A.path, q.path = t(q.path)), q.query = A.query) : (q.path = C.path, A.query !== void 0 ? q.query = A.query : q.query = C.query), q.userinfo = C.userinfo, q.host = C.host, q.port = C.port), q.scheme = C.scheme), q.fragment = A.fragment, q;
  }
  function E(C, A, N) {
    const x = p(C, N), q = p(A, N);
    return x !== void 0 && q !== void 0 && x.toLowerCase() === q.toLowerCase();
  }
  function S(C, A) {
    const N = {
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
    }, x = Object.assign({}, A), q = [], U = m(x.scheme || N.scheme);
    U && U.serialize && U.serialize(N, x), N.path !== void 0 && (x.skipEscape ? N.path = o(N.path) : (N.path = n(N.path), N.scheme !== void 0 && (N.path = N.path.split("%3A").join(":")))), x.reference !== "suffix" && N.scheme && q.push(N.scheme, ":");
    const Q = r(N);
    if (Q !== void 0 && (x.reference !== "suffix" && q.push("//"), q.push(Q), N.path && N.path[0] !== "/" && q.push("/")), N.path !== void 0) {
      let te = N.path;
      !x.absolutePath && (!U || !U.absolutePath) && (te = t(te)), Q === void 0 && te[0] === "/" && te[1] === "/" && (te = "/%2F" + te.slice(2)), q.push(te);
    }
    return N.query !== void 0 && q.push("?", N.query), N.fragment !== void 0 && q.push("#", N.fragment), q.join("");
  }
  const f = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u, g = /^(?:[^#/:?]+:)?\/\/([^/?#]*)/;
  function d(C, A) {
    if (A[2] !== void 0 && C.path && C.path[0] !== "/")
      return 'URI path must start with "/" when authority is present.';
    if (typeof C.port == "number" && (C.port < 0 || C.port > 65535))
      return "URI port is malformed.";
  }
  function h(C, A) {
    const N = Object.assign({}, A), x = {
      scheme: void 0,
      userinfo: void 0,
      host: "",
      port: void 0,
      path: "",
      query: void 0,
      fragment: void 0
    };
    let q = !1, U = !1;
    N.reference === "suffix" && (N.scheme ? C = N.scheme + ":" + C : C = "//" + C);
    const Q = C.match(g);
    Q !== null && Q[1].indexOf("\\") !== -1 && (x.error = "URI authority must not contain a literal backslash.", q = !0);
    const te = C.match(f);
    if (te) {
      x.scheme = te[1], x.userinfo = te[3], x.host = te[4], x.port = parseInt(te[5], 10), x.path = te[6] || "", x.query = te[7], x.fragment = te[8], isNaN(x.port) && (x.port = te[5]);
      const me = d(x, te);
      if (me !== void 0 && (x.error = x.error || me, q = !0), x.host)
        if (a(x.host) === !1) {
          const B = e(x.host);
          x.host = B.host.toLowerCase(), U = B.isIPV6;
        } else
          U = !0;
      x.scheme === void 0 && x.userinfo === void 0 && x.host === void 0 && x.port === void 0 && x.query === void 0 && !x.path ? x.reference = "same-document" : x.scheme === void 0 ? x.reference = "relative" : x.fragment === void 0 ? x.reference = "absolute" : x.reference = "uri", N.reference && N.reference !== "suffix" && N.reference !== x.reference && (x.error = x.error || "URI is not a " + N.reference + " reference.");
      const X = m(N.scheme || x.scheme);
      if (!N.unicodeSupport && (!X || !X.unicodeSupport) && x.host && (N.domainHost || X && X.domainHost) && U === !1 && u(x.host))
        try {
          x.host = new URL("http://" + x.host).hostname;
        } catch (ve) {
          x.error = x.error || "Host's domain name can not be converted to ASCII: " + ve;
        }
      if ((!X || X && !X.skipNormalize) && (C.indexOf("%") !== -1 && (x.scheme !== void 0 && (x.scheme = unescape(x.scheme)), x.host !== void 0 && (x.host = s(unescape(x.host), U))), x.path && (x.path = l(x.path)), x.fragment))
        try {
          x.fragment = encodeURI(decodeURIComponent(x.fragment));
        } catch {
          x.error = x.error || "URI malformed";
        }
      X && X.parse && X.parse(x, N);
    } else
      x.error = x.error || "URI can not be parsed.";
    return { parsed: x, malformedAuthorityOrPort: q };
  }
  function $(C, A) {
    return h(C, A).parsed;
  }
  function i(C, A) {
    return c(C, A).normalized;
  }
  function c(C, A) {
    const { parsed: N, malformedAuthorityOrPort: x } = h(C, A);
    return {
      normalized: x ? C : S(N, A),
      malformedAuthorityOrPort: x
    };
  }
  function p(C, A) {
    if (typeof C == "string") {
      const { normalized: N, malformedAuthorityOrPort: x } = c(C, A);
      return x ? void 0 : N;
    }
    if (typeof C == "object")
      return S(C, A);
  }
  const P = {
    SCHEMES: y,
    normalize: _,
    resolve: b,
    resolveComponent: w,
    equal: E,
    serialize: S,
    parse: $
  };
  return Ye.exports = P, Ye.exports.default = P, Ye.exports.fastUri = P, Ye.exports;
}
var yn;
function Cs() {
  if (yn) return ot;
  yn = 1, Object.defineProperty(ot, "__esModule", { value: !0 });
  const e = Ps();
  return e.code = 'require("ajv/dist/runtime/uri").default', ot.default = e, ot;
}
var vn;
function Rs() {
  return vn || (vn = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = void 0;
    var t = /* @__PURE__ */ or();
    Object.defineProperty(e, "KeywordCxt", { enumerable: !0, get: function() {
      return t.KeywordCxt;
    } });
    var r = /* @__PURE__ */ J();
    Object.defineProperty(e, "_", { enumerable: !0, get: function() {
      return r._;
    } }), Object.defineProperty(e, "str", { enumerable: !0, get: function() {
      return r.str;
    } }), Object.defineProperty(e, "stringify", { enumerable: !0, get: function() {
      return r.stringify;
    } }), Object.defineProperty(e, "nil", { enumerable: !0, get: function() {
      return r.nil;
    } }), Object.defineProperty(e, "Name", { enumerable: !0, get: function() {
      return r.Name;
    } }), Object.defineProperty(e, "CodeGen", { enumerable: !0, get: function() {
      return r.CodeGen;
    } });
    const o = /* @__PURE__ */ Rr(), l = /* @__PURE__ */ sr(), n = /* @__PURE__ */ xo(), s = /* @__PURE__ */ ir(), a = /* @__PURE__ */ J(), u = /* @__PURE__ */ nr(), y = /* @__PURE__ */ er(), m = /* @__PURE__ */ Z(), _ = Es, b = /* @__PURE__ */ Cs(), w = (B, j) => new RegExp(B, j);
    w.code = "new RegExp";
    const E = ["removeAdditional", "useDefaults", "coerceTypes"], S = /* @__PURE__ */ new Set([
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
    }, d = 200;
    function h(B) {
      var j, V, M, v, k, I, K, G, re, ee, R, O, D, L, H, Y, ie, $e, de, ue, ae, ze, ge, ar, cr;
      const Ge = B.strict, lr = (j = B.code) === null || j === void 0 ? void 0 : j.optimize, Br = lr === !0 || lr === void 0 ? 1 : lr || 0, Lr = (M = (V = B.code) === null || V === void 0 ? void 0 : V.regExp) !== null && M !== void 0 ? M : w, Qo = (v = B.uriResolver) !== null && v !== void 0 ? v : b.default;
      return {
        strictSchema: (I = (k = B.strictSchema) !== null && k !== void 0 ? k : Ge) !== null && I !== void 0 ? I : !0,
        strictNumbers: (G = (K = B.strictNumbers) !== null && K !== void 0 ? K : Ge) !== null && G !== void 0 ? G : !0,
        strictTypes: (ee = (re = B.strictTypes) !== null && re !== void 0 ? re : Ge) !== null && ee !== void 0 ? ee : "log",
        strictTuples: (O = (R = B.strictTuples) !== null && R !== void 0 ? R : Ge) !== null && O !== void 0 ? O : "log",
        strictRequired: (L = (D = B.strictRequired) !== null && D !== void 0 ? D : Ge) !== null && L !== void 0 ? L : !1,
        code: B.code ? { ...B.code, optimize: Br, regExp: Lr } : { optimize: Br, regExp: Lr },
        loopRequired: (H = B.loopRequired) !== null && H !== void 0 ? H : d,
        loopEnum: (Y = B.loopEnum) !== null && Y !== void 0 ? Y : d,
        meta: (ie = B.meta) !== null && ie !== void 0 ? ie : !0,
        messages: ($e = B.messages) !== null && $e !== void 0 ? $e : !0,
        inlineRefs: (de = B.inlineRefs) !== null && de !== void 0 ? de : !0,
        schemaId: (ue = B.schemaId) !== null && ue !== void 0 ? ue : "$id",
        addUsedSchema: (ae = B.addUsedSchema) !== null && ae !== void 0 ? ae : !0,
        validateSchema: (ze = B.validateSchema) !== null && ze !== void 0 ? ze : !0,
        validateFormats: (ge = B.validateFormats) !== null && ge !== void 0 ? ge : !0,
        unicodeRegExp: (ar = B.unicodeRegExp) !== null && ar !== void 0 ? ar : !0,
        int32range: (cr = B.int32range) !== null && cr !== void 0 ? cr : !0,
        uriResolver: Qo
      };
    }
    class $ {
      constructor(j = {}) {
        this.schemas = {}, this.refs = {}, this.formats = /* @__PURE__ */ Object.create(null), this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), j = this.opts = { ...j, ...h(j) };
        const { es5: V, lines: M } = this.opts.code;
        this.scope = new a.ValueScope({ scope: {}, prefixes: S, es5: V, lines: M }), this.logger = x(j.logger);
        const v = j.validateFormats;
        j.validateFormats = !1, this.RULES = (0, n.getRules)(), i.call(this, f, j, "NOT SUPPORTED"), i.call(this, g, j, "DEPRECATED", "warn"), this._metaOpts = A.call(this), j.formats && P.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), j.keywords && C.call(this, j.keywords), typeof j.meta == "object" && this.addMetaSchema(j.meta), p.call(this), j.validateFormats = v;
      }
      _addVocabularies() {
        this.addKeyword("$async");
      }
      _addDefaultMetaSchema() {
        const { $data: j, meta: V, schemaId: M } = this.opts;
        let v = _;
        M === "id" && (v = { ..._ }, v.id = v.$id, delete v.$id), V && j && this.addMetaSchema(v, v[M], !1);
      }
      defaultMeta() {
        const { meta: j, schemaId: V } = this.opts;
        return this.opts.defaultMeta = typeof j == "object" ? j[V] || j : void 0;
      }
      validate(j, V) {
        let M;
        if (typeof j == "string") {
          if (M = this.getSchema(j), !M)
            throw new Error(`no schema with key or ref "${j}"`);
        } else
          M = this.compile(j);
        const v = M(V);
        return "$async" in M || (this.errors = M.errors), v;
      }
      compile(j, V) {
        const M = this._addSchema(j, V);
        return M.validate || this._compileSchemaEnv(M);
      }
      compileAsync(j, V) {
        if (typeof this.opts.loadSchema != "function")
          throw new Error("options.loadSchema should be a function");
        const { loadSchema: M } = this.opts;
        return v.call(this, j, V);
        async function v(ee, R) {
          await k.call(this, ee.$schema);
          const O = this._addSchema(ee, R);
          return O.validate || I.call(this, O);
        }
        async function k(ee) {
          ee && !this.getSchema(ee) && await v.call(this, { $ref: ee }, !0);
        }
        async function I(ee) {
          try {
            return this._compileSchemaEnv(ee);
          } catch (R) {
            if (!(R instanceof l.default))
              throw R;
            return K.call(this, R), await G.call(this, R.missingSchema), I.call(this, ee);
          }
        }
        function K({ missingSchema: ee, missingRef: R }) {
          if (this.refs[ee])
            throw new Error(`AnySchema ${ee} is loaded but ${R} cannot be resolved`);
        }
        async function G(ee) {
          const R = await re.call(this, ee);
          this.refs[ee] || await k.call(this, R.$schema), this.refs[ee] || this.addSchema(R, ee, V);
        }
        async function re(ee) {
          const R = this._loading[ee];
          if (R)
            return R;
          try {
            return await (this._loading[ee] = M(ee));
          } finally {
            delete this._loading[ee];
          }
        }
      }
      // Adds schema to the instance
      addSchema(j, V, M, v = this.opts.validateSchema) {
        if (Array.isArray(j)) {
          for (const I of j)
            this.addSchema(I, void 0, M, v);
          return this;
        }
        let k;
        if (typeof j == "object") {
          const { schemaId: I } = this.opts;
          if (k = j[I], k !== void 0 && typeof k != "string")
            throw new Error(`schema ${I} must be string`);
        }
        return V = (0, u.normalizeId)(V || k), this._checkUnique(V), this.schemas[V] = this._addSchema(j, M, V, v, !0), this;
      }
      // Add schema that will be used to validate other schemas
      // options in META_IGNORE_OPTIONS are alway set to false
      addMetaSchema(j, V, M = this.opts.validateSchema) {
        return this.addSchema(j, V, !0, M), this;
      }
      //  Validate schema against its meta-schema
      validateSchema(j, V) {
        if (typeof j == "boolean")
          return !0;
        let M;
        if (M = j.$schema, M !== void 0 && typeof M != "string")
          throw new Error("$schema must be a string");
        if (M = M || this.opts.defaultMeta || this.defaultMeta(), !M)
          return this.logger.warn("meta-schema not available"), this.errors = null, !0;
        const v = this.validate(M, j);
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
      getSchema(j) {
        let V;
        for (; typeof (V = c.call(this, j)) == "string"; )
          j = V;
        if (V === void 0) {
          const { schemaId: M } = this.opts, v = new s.SchemaEnv({ schema: {}, schemaId: M });
          if (V = s.resolveSchema.call(this, v, j), !V)
            return;
          this.refs[j] = V;
        }
        return V.validate || this._compileSchemaEnv(V);
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
            const V = c.call(this, j);
            return typeof V == "object" && this._cache.delete(V.schema), delete this.schemas[j], delete this.refs[j], this;
          }
          case "object": {
            const V = j;
            this._cache.delete(V);
            let M = j[this.opts.schemaId];
            return M && (M = (0, u.normalizeId)(M), delete this.schemas[M], delete this.refs[M]), this;
          }
          default:
            throw new Error("ajv.removeSchema: invalid parameter");
        }
      }
      // add "vocabulary" - a collection of keywords
      addVocabulary(j) {
        for (const V of j)
          this.addKeyword(V);
        return this;
      }
      addKeyword(j, V) {
        let M;
        if (typeof j == "string")
          M = j, typeof V == "object" && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), V.keyword = M);
        else if (typeof j == "object" && V === void 0) {
          if (V = j, M = V.keyword, Array.isArray(M) && !M.length)
            throw new Error("addKeywords: keyword must be string or non-empty array");
        } else
          throw new Error("invalid addKeywords parameters");
        if (U.call(this, M, V), !V)
          return (0, m.eachItem)(M, (k) => Q.call(this, k)), this;
        me.call(this, V);
        const v = {
          ...V,
          type: (0, y.getJSONTypes)(V.type),
          schemaType: (0, y.getJSONTypes)(V.schemaType)
        };
        return (0, m.eachItem)(M, v.type.length === 0 ? (k) => Q.call(this, k, v) : (k) => v.type.forEach((I) => Q.call(this, k, v, I))), this;
      }
      getKeyword(j) {
        const V = this.RULES.all[j];
        return typeof V == "object" ? V.definition : !!V;
      }
      // Remove keyword
      removeKeyword(j) {
        const { RULES: V } = this;
        delete V.keywords[j], delete V.all[j];
        for (const M of V.rules) {
          const v = M.rules.findIndex((k) => k.keyword === j);
          v >= 0 && M.rules.splice(v, 1);
        }
        return this;
      }
      // Add format
      addFormat(j, V) {
        return typeof V == "string" && (V = new RegExp(V)), this.formats[j] = V, this;
      }
      errorsText(j = this.errors, { separator: V = ", ", dataVar: M = "data" } = {}) {
        return !j || j.length === 0 ? "No errors" : j.map((v) => `${M}${v.instancePath} ${v.message}`).reduce((v, k) => v + V + k);
      }
      $dataMetaSchema(j, V) {
        const M = this.RULES.all;
        j = JSON.parse(JSON.stringify(j));
        for (const v of V) {
          const k = v.split("/").slice(1);
          let I = j;
          for (const K of k)
            I = I[K];
          for (const K in M) {
            const G = M[K];
            if (typeof G != "object")
              continue;
            const { $data: re } = G.definition, ee = I[K];
            re && ee && (I[K] = ve(ee));
          }
        }
        return j;
      }
      _removeAllSchemas(j, V) {
        for (const M in j) {
          const v = j[M];
          (!V || V.test(M)) && (typeof v == "string" ? delete j[M] : v && !v.meta && (this._cache.delete(v.schema), delete j[M]));
        }
      }
      _addSchema(j, V, M, v = this.opts.validateSchema, k = this.opts.addUsedSchema) {
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
        let G = this._cache.get(j);
        if (G !== void 0)
          return G;
        M = (0, u.normalizeId)(I || M);
        const re = u.getSchemaRefs.call(this, j, M);
        return G = new s.SchemaEnv({ schema: j, schemaId: K, meta: V, baseId: M, localRefs: re }), this._cache.set(G.schema, G), k && !M.startsWith("#") && (M && this._checkUnique(M), this.refs[M] = G), v && this.validateSchema(j, !0), G;
      }
      _checkUnique(j) {
        if (this.schemas[j] || this.refs[j])
          throw new Error(`schema with key or id "${j}" already exists`);
      }
      _compileSchemaEnv(j) {
        if (j.meta ? this._compileMetaSchema(j) : s.compileSchema.call(this, j), !j.validate)
          throw new Error("ajv implementation error");
        return j.validate;
      }
      _compileMetaSchema(j) {
        const V = this.opts;
        this.opts = this._metaOpts;
        try {
          s.compileSchema.call(this, j);
        } finally {
          this.opts = V;
        }
      }
    }
    $.ValidationError = o.default, $.MissingRefError = l.default, e.default = $;
    function i(B, j, V, M = "error") {
      for (const v in B) {
        const k = v;
        k in j && this.logger[M](`${V}: option ${v}. ${B[k]}`);
      }
    }
    function c(B) {
      return B = (0, u.normalizeId)(B), this.schemas[B] || this.refs[B];
    }
    function p() {
      const B = this.opts.schemas;
      if (B)
        if (Array.isArray(B))
          this.addSchema(B);
        else
          for (const j in B)
            this.addSchema(B[j], j);
    }
    function P() {
      for (const B in this.opts.formats) {
        const j = this.opts.formats[B];
        j && this.addFormat(B, j);
      }
    }
    function C(B) {
      if (Array.isArray(B)) {
        this.addVocabulary(B);
        return;
      }
      this.logger.warn("keywords option as map is deprecated, pass array");
      for (const j in B) {
        const V = B[j];
        V.keyword || (V.keyword = j), this.addKeyword(V);
      }
    }
    function A() {
      const B = { ...this.opts };
      for (const j of E)
        delete B[j];
      return B;
    }
    const N = { log() {
    }, warn() {
    }, error() {
    } };
    function x(B) {
      if (B === !1)
        return N;
      if (B === void 0)
        return console;
      if (B.log && B.warn && B.error)
        return B;
      throw new Error("logger must implement log, warn and error methods");
    }
    const q = /^[a-z_$][a-z0-9_$:-]*$/i;
    function U(B, j) {
      const { RULES: V } = this;
      if ((0, m.eachItem)(B, (M) => {
        if (V.keywords[M])
          throw new Error(`Keyword ${M} is already defined`);
        if (!q.test(M))
          throw new Error(`Keyword ${M} has invalid name`);
      }), !!j && j.$data && !("code" in j || "validate" in j))
        throw new Error('$data keyword must have "code" or "validate" function');
    }
    function Q(B, j, V) {
      var M;
      const v = j?.post;
      if (V && v)
        throw new Error('keyword with "post" flag cannot have "type"');
      const { RULES: k } = this;
      let I = v ? k.post : k.rules.find(({ type: G }) => G === V);
      if (I || (I = { type: V, rules: [] }, k.rules.push(I)), k.keywords[B] = !0, !j)
        return;
      const K = {
        keyword: B,
        definition: {
          ...j,
          type: (0, y.getJSONTypes)(j.type),
          schemaType: (0, y.getJSONTypes)(j.schemaType)
        }
      };
      j.before ? te.call(this, I, K, j.before) : I.rules.push(K), k.all[B] = K, (M = j.implements) === null || M === void 0 || M.forEach((G) => this.addKeyword(G));
    }
    function te(B, j, V) {
      const M = B.rules.findIndex((v) => v.keyword === V);
      M >= 0 ? B.rules.splice(M, 0, j) : (B.rules.push(j), this.logger.warn(`rule ${V} is not defined`));
    }
    function me(B) {
      let { metaSchema: j } = B;
      j !== void 0 && (B.$data && this.opts.$data && (j = ve(j)), B.validateSchema = this.compile(j, !0));
    }
    const X = {
      $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
    };
    function ve(B) {
      return { anyOf: [B, X] };
    }
  })(dr)), dr;
}
var st = {}, it = {}, at = {}, $n;
function As() {
  if ($n) return at;
  $n = 1, Object.defineProperty(at, "__esModule", { value: !0 });
  const e = {
    keyword: "id",
    code() {
      throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
    }
  };
  return at.default = e, at;
}
var Ce = {}, _n;
function Ar() {
  if (_n) return Ce;
  _n = 1, Object.defineProperty(Ce, "__esModule", { value: !0 }), Ce.callRef = Ce.getValidate = void 0;
  const e = /* @__PURE__ */ sr(), t = /* @__PURE__ */ Se(), r = /* @__PURE__ */ J(), o = /* @__PURE__ */ we(), l = /* @__PURE__ */ ir(), n = /* @__PURE__ */ Z(), s = {
    keyword: "$ref",
    schemaType: "string",
    code(y) {
      const { gen: m, schema: _, it: b } = y, { baseId: w, schemaEnv: E, validateName: S, opts: f, self: g } = b, { root: d } = E;
      if ((_ === "#" || _ === "#/") && w === d.baseId)
        return $();
      const h = l.resolveRef.call(g, d, w, _);
      if (h === void 0)
        throw new e.default(b.opts.uriResolver, w, _);
      if (h instanceof l.SchemaEnv)
        return i(h);
      return c(h);
      function $() {
        if (E === d)
          return u(y, S, E, E.$async);
        const p = m.scopeValue("root", { ref: d });
        return u(y, (0, r._)`${p}.validate`, d, d.$async);
      }
      function i(p) {
        const P = a(y, p);
        u(y, P, p, p.$async);
      }
      function c(p) {
        const P = m.scopeValue("schema", f.code.source === !0 ? { ref: p, code: (0, r.stringify)(p) } : { ref: p }), C = m.name("valid"), A = y.subschema({
          schema: p,
          dataTypes: [],
          schemaPath: r.nil,
          topSchemaRef: P,
          errSchemaPath: _
        }, C);
        y.mergeEvaluated(A), y.ok(C);
      }
    }
  };
  function a(y, m) {
    const { gen: _ } = y;
    return m.validate ? _.scopeValue("validate", { ref: m.validate }) : (0, r._)`${_.scopeValue("wrapper", { ref: m })}.validate`;
  }
  Ce.getValidate = a;
  function u(y, m, _, b) {
    const { gen: w, it: E } = y, { allErrors: S, schemaEnv: f, opts: g } = E, d = g.passContext ? o.default.this : r.nil;
    b ? h() : $();
    function h() {
      if (!f.$async)
        throw new Error("async schema referenced by sync schema");
      const p = w.let("valid");
      w.try(() => {
        w.code((0, r._)`await ${(0, t.callValidateCode)(y, m, d)}`), c(m), S || w.assign(p, !0);
      }, (P) => {
        w.if((0, r._)`!(${P} instanceof ${E.ValidationError})`, () => w.throw(P)), i(P), S || w.assign(p, !1);
      }), y.ok(p);
    }
    function $() {
      y.result((0, t.callValidateCode)(y, m, d), () => c(m), () => i(m));
    }
    function i(p) {
      const P = (0, r._)`${p}.errors`;
      w.assign(o.default.vErrors, (0, r._)`${o.default.vErrors} === null ? ${P} : ${o.default.vErrors}.concat(${P})`), w.assign(o.default.errors, (0, r._)`${o.default.vErrors}.length`);
    }
    function c(p) {
      var P;
      if (!E.opts.unevaluated)
        return;
      const C = (P = _?.validate) === null || P === void 0 ? void 0 : P.evaluated;
      if (E.props !== !0)
        if (C && !C.dynamicProps)
          C.props !== void 0 && (E.props = n.mergeEvaluated.props(w, C.props, E.props));
        else {
          const A = w.var("props", (0, r._)`${p}.evaluated.props`);
          E.props = n.mergeEvaluated.props(w, A, E.props, r.Name);
        }
      if (E.items !== !0)
        if (C && !C.dynamicItems)
          C.items !== void 0 && (E.items = n.mergeEvaluated.items(w, C.items, E.items));
        else {
          const A = w.var("items", (0, r._)`${p}.evaluated.items`);
          E.items = n.mergeEvaluated.items(w, A, E.items, r.Name);
        }
    }
  }
  return Ce.callRef = u, Ce.default = s, Ce;
}
var bn;
function Ns() {
  if (bn) return it;
  bn = 1, Object.defineProperty(it, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ As(), t = /* @__PURE__ */ Ar(), r = [
    "$schema",
    "$id",
    "$defs",
    "$vocabulary",
    { keyword: "$comment" },
    "definitions",
    e.default,
    t.default
  ];
  return it.default = r, it;
}
var ct = {}, lt = {}, wn;
function xs() {
  if (wn) return lt;
  wn = 1, Object.defineProperty(lt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ J(), t = e.operators, r = {
    maximum: { okStr: "<=", ok: t.LTE, fail: t.GT },
    minimum: { okStr: ">=", ok: t.GTE, fail: t.LT },
    exclusiveMaximum: { okStr: "<", ok: t.LT, fail: t.GTE },
    exclusiveMinimum: { okStr: ">", ok: t.GT, fail: t.LTE }
  }, o = {
    message: ({ keyword: n, schemaCode: s }) => (0, e.str)`must be ${r[n].okStr} ${s}`,
    params: ({ keyword: n, schemaCode: s }) => (0, e._)`{comparison: ${r[n].okStr}, limit: ${s}}`
  }, l = {
    keyword: Object.keys(r),
    type: "number",
    schemaType: "number",
    $data: !0,
    error: o,
    code(n) {
      const { keyword: s, data: a, schemaCode: u } = n;
      n.fail$data((0, e._)`${a} ${r[s].fail} ${u} || isNaN(${a})`);
    }
  };
  return lt.default = l, lt;
}
var dt = {}, Sn;
function js() {
  if (Sn) return dt;
  Sn = 1, Object.defineProperty(dt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ J(), r = {
    keyword: "multipleOf",
    type: "number",
    schemaType: "number",
    $data: !0,
    error: {
      message: ({ schemaCode: o }) => (0, e.str)`must be multiple of ${o}`,
      params: ({ schemaCode: o }) => (0, e._)`{multipleOf: ${o}}`
    },
    code(o) {
      const { gen: l, data: n, schemaCode: s, it: a } = o, u = a.opts.multipleOfPrecision, y = l.let("res"), m = u ? (0, e._)`Math.abs(Math.round(${y}) - ${y}) > 1e-${u}` : (0, e._)`${y} !== parseInt(${y})`;
      o.fail$data((0, e._)`(${s} === 0 || (${y} = ${n}/${s}, ${m}))`);
    }
  };
  return dt.default = r, dt;
}
var ut = {}, ft = {}, En;
function Os() {
  if (En) return ft;
  En = 1, Object.defineProperty(ft, "__esModule", { value: !0 });
  function e(t) {
    const r = t.length;
    let o = 0, l = 0, n;
    for (; l < r; )
      o++, n = t.charCodeAt(l++), n >= 55296 && n <= 56319 && l < r && (n = t.charCodeAt(l), (n & 64512) === 56320 && l++);
    return o;
  }
  return ft.default = e, e.code = 'require("ajv/dist/runtime/ucs2length").default', ft;
}
var kn;
function Ms() {
  if (kn) return ut;
  kn = 1, Object.defineProperty(ut, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ J(), t = /* @__PURE__ */ Z(), r = /* @__PURE__ */ Os(), l = {
    keyword: ["maxLength", "minLength"],
    type: "string",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: n, schemaCode: s }) {
        const a = n === "maxLength" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${a} than ${s} characters`;
      },
      params: ({ schemaCode: n }) => (0, e._)`{limit: ${n}}`
    },
    code(n) {
      const { keyword: s, data: a, schemaCode: u, it: y } = n, m = s === "maxLength" ? e.operators.GT : e.operators.LT, _ = y.opts.unicode === !1 ? (0, e._)`${a}.length` : (0, e._)`${(0, t.useFunc)(n.gen, r.default)}(${a})`;
      n.fail$data((0, e._)`${_} ${m} ${u}`);
    }
  };
  return ut.default = l, ut;
}
var pt = {}, Pn;
function Ts() {
  if (Pn) return pt;
  Pn = 1, Object.defineProperty(pt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Se(), t = /* @__PURE__ */ Z(), r = /* @__PURE__ */ J(), l = {
    keyword: "pattern",
    type: "string",
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: n }) => (0, r.str)`must match pattern "${n}"`,
      params: ({ schemaCode: n }) => (0, r._)`{pattern: ${n}}`
    },
    code(n) {
      const { gen: s, data: a, $data: u, schema: y, schemaCode: m, it: _ } = n, b = _.opts.unicodeRegExp ? "u" : "";
      if (u) {
        const { regExp: w } = _.opts.code, E = w.code === "new RegExp" ? (0, r._)`new RegExp` : (0, t.useFunc)(s, w), S = s.let("valid");
        s.try(() => s.assign(S, (0, r._)`${E}(${m}, ${b}).test(${a})`), () => s.assign(S, !1)), n.fail$data((0, r._)`!${S}`);
      } else {
        const w = (0, e.usePattern)(n, y);
        n.fail$data((0, r._)`!${w}.test(${a})`);
      }
    }
  };
  return pt.default = l, pt;
}
var ht = {}, Cn;
function Is() {
  if (Cn) return ht;
  Cn = 1, Object.defineProperty(ht, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ J(), r = {
    keyword: ["maxProperties", "minProperties"],
    type: "object",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: o, schemaCode: l }) {
        const n = o === "maxProperties" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${n} than ${l} properties`;
      },
      params: ({ schemaCode: o }) => (0, e._)`{limit: ${o}}`
    },
    code(o) {
      const { keyword: l, data: n, schemaCode: s } = o, a = l === "maxProperties" ? e.operators.GT : e.operators.LT;
      o.fail$data((0, e._)`Object.keys(${n}).length ${a} ${s}`);
    }
  };
  return ht.default = r, ht;
}
var mt = {}, Rn;
function zs() {
  if (Rn) return mt;
  Rn = 1, Object.defineProperty(mt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Se(), t = /* @__PURE__ */ J(), r = /* @__PURE__ */ Z(), l = {
    keyword: "required",
    type: "object",
    schemaType: "array",
    $data: !0,
    error: {
      message: ({ params: { missingProperty: n } }) => (0, t.str)`must have required property '${n}'`,
      params: ({ params: { missingProperty: n } }) => (0, t._)`{missingProperty: ${n}}`
    },
    code(n) {
      const { gen: s, schema: a, schemaCode: u, data: y, $data: m, it: _ } = n, { opts: b } = _;
      if (!m && a.length === 0)
        return;
      const w = a.length >= b.loopRequired;
      if (_.allErrors ? E() : S(), b.strictRequired) {
        const d = n.parentSchema.properties, { definedProperties: h } = n.it;
        for (const $ of a)
          if (d?.[$] === void 0 && !h.has($)) {
            const i = _.schemaEnv.baseId + _.errSchemaPath, c = `required property "${$}" is not defined at "${i}" (strictRequired)`;
            (0, r.checkStrictMode)(_, c, _.opts.strictRequired);
          }
      }
      function E() {
        if (w || m)
          n.block$data(t.nil, f);
        else
          for (const d of a)
            (0, e.checkReportMissingProp)(n, d);
      }
      function S() {
        const d = s.let("missing");
        if (w || m) {
          const h = s.let("valid", !0);
          n.block$data(h, () => g(d, h)), n.ok(h);
        } else
          s.if((0, e.checkMissingProp)(n, a, d)), (0, e.reportMissingProp)(n, d), s.else();
      }
      function f() {
        s.forOf("prop", u, (d) => {
          n.setParams({ missingProperty: d }), s.if((0, e.noPropertyInData)(s, y, d, b.ownProperties), () => n.error());
        });
      }
      function g(d, h) {
        n.setParams({ missingProperty: d }), s.forOf(d, u, () => {
          s.assign(h, (0, e.propertyInData)(s, y, d, b.ownProperties)), s.if((0, t.not)(h), () => {
            n.error(), s.break();
          });
        }, t.nil);
      }
    }
  };
  return mt.default = l, mt;
}
var gt = {}, An;
function qs() {
  if (An) return gt;
  An = 1, Object.defineProperty(gt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ J(), r = {
    keyword: ["maxItems", "minItems"],
    type: "array",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: o, schemaCode: l }) {
        const n = o === "maxItems" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${n} than ${l} items`;
      },
      params: ({ schemaCode: o }) => (0, e._)`{limit: ${o}}`
    },
    code(o) {
      const { keyword: l, data: n, schemaCode: s } = o, a = l === "maxItems" ? e.operators.GT : e.operators.LT;
      o.fail$data((0, e._)`${n}.length ${a} ${s}`);
    }
  };
  return gt.default = r, gt;
}
var yt = {}, vt = {}, Nn;
function Nr() {
  if (Nn) return vt;
  Nn = 1, Object.defineProperty(vt, "__esModule", { value: !0 });
  const e = Oo();
  return e.code = 'require("ajv/dist/runtime/equal").default', vt.default = e, vt;
}
var xn;
function Ds() {
  if (xn) return yt;
  xn = 1, Object.defineProperty(yt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ er(), t = /* @__PURE__ */ J(), r = /* @__PURE__ */ Z(), o = /* @__PURE__ */ Nr(), n = {
    keyword: "uniqueItems",
    type: "array",
    schemaType: "boolean",
    $data: !0,
    error: {
      message: ({ params: { i: s, j: a } }) => (0, t.str)`must NOT have duplicate items (items ## ${a} and ${s} are identical)`,
      params: ({ params: { i: s, j: a } }) => (0, t._)`{i: ${s}, j: ${a}}`
    },
    code(s) {
      const { gen: a, data: u, $data: y, schema: m, parentSchema: _, schemaCode: b, it: w } = s;
      if (!y && !m)
        return;
      const E = a.let("valid"), S = _.items ? (0, e.getSchemaTypes)(_.items) : [];
      s.block$data(E, f, (0, t._)`${b} === false`), s.ok(E);
      function f() {
        const $ = a.let("i", (0, t._)`${u}.length`), i = a.let("j");
        s.setParams({ i: $, j: i }), a.assign(E, !0), a.if((0, t._)`${$} > 1`, () => (g() ? d : h)($, i));
      }
      function g() {
        return S.length > 0 && !S.some(($) => $ === "object" || $ === "array");
      }
      function d($, i) {
        const c = a.name("item"), p = (0, e.checkDataTypes)(S, c, w.opts.strictNumbers, e.DataType.Wrong), P = a.const("indices", (0, t._)`{}`);
        a.for((0, t._)`;${$}--;`, () => {
          a.let(c, (0, t._)`${u}[${$}]`), a.if(p, (0, t._)`continue`), S.length > 1 && a.if((0, t._)`typeof ${c} == "string"`, (0, t._)`${c} += "_"`), a.if((0, t._)`typeof ${P}[${c}] == "number"`, () => {
            a.assign(i, (0, t._)`${P}[${c}]`), s.error(), a.assign(E, !1).break();
          }).code((0, t._)`${P}[${c}] = ${$}`);
        });
      }
      function h($, i) {
        const c = (0, r.useFunc)(a, o.default), p = a.name("outer");
        a.label(p).for((0, t._)`;${$}--;`, () => a.for((0, t._)`${i} = ${$}; ${i}--;`, () => a.if((0, t._)`${c}(${u}[${$}], ${u}[${i}])`, () => {
          s.error(), a.assign(E, !1).break(p);
        })));
      }
    }
  };
  return yt.default = n, yt;
}
var $t = {}, jn;
function Vs() {
  if (jn) return $t;
  jn = 1, Object.defineProperty($t, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ J(), t = /* @__PURE__ */ Z(), r = /* @__PURE__ */ Nr(), l = {
    keyword: "const",
    $data: !0,
    error: {
      message: "must be equal to constant",
      params: ({ schemaCode: n }) => (0, e._)`{allowedValue: ${n}}`
    },
    code(n) {
      const { gen: s, data: a, $data: u, schemaCode: y, schema: m } = n;
      u || m && typeof m == "object" ? n.fail$data((0, e._)`!${(0, t.useFunc)(s, r.default)}(${a}, ${y})`) : n.fail((0, e._)`${m} !== ${a}`);
    }
  };
  return $t.default = l, $t;
}
var _t = {}, On;
function Fs() {
  if (On) return _t;
  On = 1, Object.defineProperty(_t, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ J(), t = /* @__PURE__ */ Z(), r = /* @__PURE__ */ Nr(), l = {
    keyword: "enum",
    schemaType: "array",
    $data: !0,
    error: {
      message: "must be equal to one of the allowed values",
      params: ({ schemaCode: n }) => (0, e._)`{allowedValues: ${n}}`
    },
    code(n) {
      const { gen: s, data: a, $data: u, schema: y, schemaCode: m, it: _ } = n;
      if (!u && y.length === 0)
        throw new Error("enum must have non-empty array");
      const b = y.length >= _.opts.loopEnum;
      let w;
      const E = () => w ?? (w = (0, t.useFunc)(s, r.default));
      let S;
      if (b || u)
        S = s.let("valid"), n.block$data(S, f);
      else {
        if (!Array.isArray(y))
          throw new Error("ajv implementation error");
        const d = s.const("vSchema", m);
        S = (0, e.or)(...y.map((h, $) => g(d, $)));
      }
      n.pass(S);
      function f() {
        s.assign(S, !1), s.forOf("v", m, (d) => s.if((0, e._)`${E()}(${a}, ${d})`, () => s.assign(S, !0).break()));
      }
      function g(d, h) {
        const $ = y[h];
        return typeof $ == "object" && $ !== null ? (0, e._)`${E()}(${a}, ${d}[${h}])` : (0, e._)`${a} === ${$}`;
      }
    }
  };
  return _t.default = l, _t;
}
var Mn;
function Bs() {
  if (Mn) return ct;
  Mn = 1, Object.defineProperty(ct, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ xs(), t = /* @__PURE__ */ js(), r = /* @__PURE__ */ Ms(), o = /* @__PURE__ */ Ts(), l = /* @__PURE__ */ Is(), n = /* @__PURE__ */ zs(), s = /* @__PURE__ */ qs(), a = /* @__PURE__ */ Ds(), u = /* @__PURE__ */ Vs(), y = /* @__PURE__ */ Fs(), m = [
    // number
    e.default,
    t.default,
    // string
    r.default,
    o.default,
    // object
    l.default,
    n.default,
    // array
    s.default,
    a.default,
    // any
    { keyword: "type", schemaType: ["string", "array"] },
    { keyword: "nullable", schemaType: "boolean" },
    u.default,
    y.default
  ];
  return ct.default = m, ct;
}
var bt = {}, qe = {}, Tn;
function To() {
  if (Tn) return qe;
  Tn = 1, Object.defineProperty(qe, "__esModule", { value: !0 }), qe.validateAdditionalItems = void 0;
  const e = /* @__PURE__ */ J(), t = /* @__PURE__ */ Z(), o = {
    keyword: "additionalItems",
    type: "array",
    schemaType: ["boolean", "object"],
    before: "uniqueItems",
    error: {
      message: ({ params: { len: n } }) => (0, e.str)`must NOT have more than ${n} items`,
      params: ({ params: { len: n } }) => (0, e._)`{limit: ${n}}`
    },
    code(n) {
      const { parentSchema: s, it: a } = n, { items: u } = s;
      if (!Array.isArray(u)) {
        (0, t.checkStrictMode)(a, '"additionalItems" is ignored when "items" is not an array of schemas');
        return;
      }
      l(n, u);
    }
  };
  function l(n, s) {
    const { gen: a, schema: u, data: y, keyword: m, it: _ } = n;
    _.items = !0;
    const b = a.const("len", (0, e._)`${y}.length`);
    if (u === !1)
      n.setParams({ len: s.length }), n.pass((0, e._)`${b} <= ${s.length}`);
    else if (typeof u == "object" && !(0, t.alwaysValidSchema)(_, u)) {
      const E = a.var("valid", (0, e._)`${b} <= ${s.length}`);
      a.if((0, e.not)(E), () => w(E)), n.ok(E);
    }
    function w(E) {
      a.forRange("i", s.length, b, (S) => {
        n.subschema({ keyword: m, dataProp: S, dataPropType: t.Type.Num }, E), _.allErrors || a.if((0, e.not)(E), () => a.break());
      });
    }
  }
  return qe.validateAdditionalItems = l, qe.default = o, qe;
}
var wt = {}, De = {}, In;
function Io() {
  if (In) return De;
  In = 1, Object.defineProperty(De, "__esModule", { value: !0 }), De.validateTuple = void 0;
  const e = /* @__PURE__ */ J(), t = /* @__PURE__ */ Z(), r = /* @__PURE__ */ Se(), o = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "array", "boolean"],
    before: "uniqueItems",
    code(n) {
      const { schema: s, it: a } = n;
      if (Array.isArray(s))
        return l(n, "additionalItems", s);
      a.items = !0, !(0, t.alwaysValidSchema)(a, s) && n.ok((0, r.validateArray)(n));
    }
  };
  function l(n, s, a = n.schema) {
    const { gen: u, parentSchema: y, data: m, keyword: _, it: b } = n;
    S(y), b.opts.unevaluated && a.length && b.items !== !0 && (b.items = t.mergeEvaluated.items(u, a.length, b.items));
    const w = u.name("valid"), E = u.const("len", (0, e._)`${m}.length`);
    a.forEach((f, g) => {
      (0, t.alwaysValidSchema)(b, f) || (u.if((0, e._)`${E} > ${g}`, () => n.subschema({
        keyword: _,
        schemaProp: g,
        dataProp: g
      }, w)), n.ok(w));
    });
    function S(f) {
      const { opts: g, errSchemaPath: d } = b, h = a.length, $ = h === f.minItems && (h === f.maxItems || f[s] === !1);
      if (g.strictTuples && !$) {
        const i = `"${_}" is ${h}-tuple, but minItems or maxItems/${s} are not specified or different at path "${d}"`;
        (0, t.checkStrictMode)(b, i, g.strictTuples);
      }
    }
  }
  return De.validateTuple = l, De.default = o, De;
}
var zn;
function Ls() {
  if (zn) return wt;
  zn = 1, Object.defineProperty(wt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Io(), t = {
    keyword: "prefixItems",
    type: "array",
    schemaType: ["array"],
    before: "uniqueItems",
    code: (r) => (0, e.validateTuple)(r, "items")
  };
  return wt.default = t, wt;
}
var St = {}, qn;
function Us() {
  if (qn) return St;
  qn = 1, Object.defineProperty(St, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ J(), t = /* @__PURE__ */ Z(), r = /* @__PURE__ */ Se(), o = /* @__PURE__ */ To(), n = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    error: {
      message: ({ params: { len: s } }) => (0, e.str)`must NOT have more than ${s} items`,
      params: ({ params: { len: s } }) => (0, e._)`{limit: ${s}}`
    },
    code(s) {
      const { schema: a, parentSchema: u, it: y } = s, { prefixItems: m } = u;
      y.items = !0, !(0, t.alwaysValidSchema)(y, a) && (m ? (0, o.validateAdditionalItems)(s, m) : s.ok((0, r.validateArray)(s)));
    }
  };
  return St.default = n, St;
}
var Et = {}, Dn;
function Ks() {
  if (Dn) return Et;
  Dn = 1, Object.defineProperty(Et, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ J(), t = /* @__PURE__ */ Z(), o = {
    keyword: "contains",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    trackErrors: !0,
    error: {
      message: ({ params: { min: l, max: n } }) => n === void 0 ? (0, e.str)`must contain at least ${l} valid item(s)` : (0, e.str)`must contain at least ${l} and no more than ${n} valid item(s)`,
      params: ({ params: { min: l, max: n } }) => n === void 0 ? (0, e._)`{minContains: ${l}}` : (0, e._)`{minContains: ${l}, maxContains: ${n}}`
    },
    code(l) {
      const { gen: n, schema: s, parentSchema: a, data: u, it: y } = l;
      let m, _;
      const { minContains: b, maxContains: w } = a;
      y.opts.next ? (m = b === void 0 ? 1 : b, _ = w) : m = 1;
      const E = n.const("len", (0, e._)`${u}.length`);
      if (l.setParams({ min: m, max: _ }), _ === void 0 && m === 0) {
        (0, t.checkStrictMode)(y, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
        return;
      }
      if (_ !== void 0 && m > _) {
        (0, t.checkStrictMode)(y, '"minContains" > "maxContains" is always invalid'), l.fail();
        return;
      }
      if ((0, t.alwaysValidSchema)(y, s)) {
        let h = (0, e._)`${E} >= ${m}`;
        _ !== void 0 && (h = (0, e._)`${h} && ${E} <= ${_}`), l.pass(h);
        return;
      }
      y.items = !0;
      const S = n.name("valid");
      _ === void 0 && m === 1 ? g(S, () => n.if(S, () => n.break())) : m === 0 ? (n.let(S, !0), _ !== void 0 && n.if((0, e._)`${u}.length > 0`, f)) : (n.let(S, !1), f()), l.result(S, () => l.reset());
      function f() {
        const h = n.name("_valid"), $ = n.let("count", 0);
        g(h, () => n.if(h, () => d($)));
      }
      function g(h, $) {
        n.forRange("i", 0, E, (i) => {
          l.subschema({
            keyword: "contains",
            dataProp: i,
            dataPropType: t.Type.Num,
            compositeRule: !0
          }, h), $();
        });
      }
      function d(h) {
        n.code((0, e._)`${h}++`), _ === void 0 ? n.if((0, e._)`${h} >= ${m}`, () => n.assign(S, !0).break()) : (n.if((0, e._)`${h} > ${_}`, () => n.assign(S, !1).break()), m === 1 ? n.assign(S, !0) : n.if((0, e._)`${h} >= ${m}`, () => n.assign(S, !0)));
      }
    }
  };
  return Et.default = o, Et;
}
var $r = {}, Vn;
function xr() {
  return Vn || (Vn = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
    const t = /* @__PURE__ */ J(), r = /* @__PURE__ */ Z(), o = /* @__PURE__ */ Se();
    e.error = {
      message: ({ params: { property: u, depsCount: y, deps: m } }) => {
        const _ = y === 1 ? "property" : "properties";
        return (0, t.str)`must have ${_} ${m} when property ${u} is present`;
      },
      params: ({ params: { property: u, depsCount: y, deps: m, missingProperty: _ } }) => (0, t._)`{property: ${u},
    missingProperty: ${_},
    depsCount: ${y},
    deps: ${m}}`
      // TODO change to reference
    };
    const l = {
      keyword: "dependencies",
      type: "object",
      schemaType: "object",
      error: e.error,
      code(u) {
        const [y, m] = n(u);
        s(u, y), a(u, m);
      }
    };
    function n({ schema: u }) {
      const y = {}, m = {};
      for (const _ in u) {
        if (_ === "__proto__")
          continue;
        const b = Array.isArray(u[_]) ? y : m;
        b[_] = u[_];
      }
      return [y, m];
    }
    function s(u, y = u.schema) {
      const { gen: m, data: _, it: b } = u;
      if (Object.keys(y).length === 0)
        return;
      const w = m.let("missing");
      for (const E in y) {
        const S = y[E];
        if (S.length === 0)
          continue;
        const f = (0, o.propertyInData)(m, _, E, b.opts.ownProperties);
        u.setParams({
          property: E,
          depsCount: S.length,
          deps: S.join(", ")
        }), b.allErrors ? m.if(f, () => {
          for (const g of S)
            (0, o.checkReportMissingProp)(u, g);
        }) : (m.if((0, t._)`${f} && (${(0, o.checkMissingProp)(u, S, w)})`), (0, o.reportMissingProp)(u, w), m.else());
      }
    }
    e.validatePropertyDeps = s;
    function a(u, y = u.schema) {
      const { gen: m, data: _, keyword: b, it: w } = u, E = m.name("valid");
      for (const S in y)
        (0, r.alwaysValidSchema)(w, y[S]) || (m.if(
          (0, o.propertyInData)(m, _, S, w.opts.ownProperties),
          () => {
            const f = u.subschema({ keyword: b, schemaProp: S }, E);
            u.mergeValidEvaluated(f, E);
          },
          () => m.var(E, !0)
          // TODO var
        ), u.ok(E));
    }
    e.validateSchemaDeps = a, e.default = l;
  })($r)), $r;
}
var kt = {}, Fn;
function Hs() {
  if (Fn) return kt;
  Fn = 1, Object.defineProperty(kt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ J(), t = /* @__PURE__ */ Z(), o = {
    keyword: "propertyNames",
    type: "object",
    schemaType: ["object", "boolean"],
    error: {
      message: "property name must be valid",
      params: ({ params: l }) => (0, e._)`{propertyName: ${l.propertyName}}`
    },
    code(l) {
      const { gen: n, schema: s, data: a, it: u } = l;
      if ((0, t.alwaysValidSchema)(u, s))
        return;
      const y = n.name("valid");
      n.forIn("key", a, (m) => {
        l.setParams({ propertyName: m }), l.subschema({
          keyword: "propertyNames",
          data: m,
          dataTypes: ["string"],
          propertyName: m,
          compositeRule: !0
        }, y), n.if((0, e.not)(y), () => {
          l.error(!0), u.allErrors || n.break();
        });
      }), l.ok(y);
    }
  };
  return kt.default = o, kt;
}
var Pt = {}, Bn;
function zo() {
  if (Bn) return Pt;
  Bn = 1, Object.defineProperty(Pt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Se(), t = /* @__PURE__ */ J(), r = /* @__PURE__ */ we(), o = /* @__PURE__ */ Z(), n = {
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
      const { gen: a, schema: u, parentSchema: y, data: m, errsCount: _, it: b } = s;
      if (!_)
        throw new Error("ajv implementation error");
      const { allErrors: w, opts: E } = b;
      if (b.props = !0, E.removeAdditional !== "all" && (0, o.alwaysValidSchema)(b, u))
        return;
      const S = (0, e.allSchemaProperties)(y.properties), f = (0, e.allSchemaProperties)(y.patternProperties);
      g(), s.ok((0, t._)`${_} === ${r.default.errors}`);
      function g() {
        a.forIn("key", m, (c) => {
          !S.length && !f.length ? $(c) : a.if(d(c), () => $(c));
        });
      }
      function d(c) {
        let p;
        if (S.length > 8) {
          const P = (0, o.schemaRefOrVal)(b, y.properties, "properties");
          p = (0, e.isOwnProperty)(a, P, c);
        } else S.length ? p = (0, t.or)(...S.map((P) => (0, t._)`${c} === ${P}`)) : p = t.nil;
        return f.length && (p = (0, t.or)(p, ...f.map((P) => (0, t._)`${(0, e.usePattern)(s, P)}.test(${c})`))), (0, t.not)(p);
      }
      function h(c) {
        a.code((0, t._)`delete ${m}[${c}]`);
      }
      function $(c) {
        if (E.removeAdditional === "all" || E.removeAdditional && u === !1) {
          h(c);
          return;
        }
        if (u === !1) {
          s.setParams({ additionalProperty: c }), s.error(), w || a.break();
          return;
        }
        if (typeof u == "object" && !(0, o.alwaysValidSchema)(b, u)) {
          const p = a.name("valid");
          E.removeAdditional === "failing" ? (i(c, p, !1), a.if((0, t.not)(p), () => {
            s.reset(), h(c);
          })) : (i(c, p), w || a.if((0, t.not)(p), () => a.break()));
        }
      }
      function i(c, p, P) {
        const C = {
          keyword: "additionalProperties",
          dataProp: c,
          dataPropType: o.Type.Str
        };
        P === !1 && Object.assign(C, {
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }), s.subschema(C, p);
      }
    }
  };
  return Pt.default = n, Pt;
}
var Ct = {}, Ln;
function Gs() {
  if (Ln) return Ct;
  Ln = 1, Object.defineProperty(Ct, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ or(), t = /* @__PURE__ */ Se(), r = /* @__PURE__ */ Z(), o = /* @__PURE__ */ zo(), l = {
    keyword: "properties",
    type: "object",
    schemaType: "object",
    code(n) {
      const { gen: s, schema: a, parentSchema: u, data: y, it: m } = n;
      m.opts.removeAdditional === "all" && u.additionalProperties === void 0 && o.default.code(new e.KeywordCxt(m, o.default, "additionalProperties"));
      const _ = (0, t.allSchemaProperties)(a);
      for (const f of _)
        m.definedProperties.add(f);
      m.opts.unevaluated && _.length && m.props !== !0 && (m.props = r.mergeEvaluated.props(s, (0, r.toHash)(_), m.props));
      const b = _.filter((f) => !(0, r.alwaysValidSchema)(m, a[f]));
      if (b.length === 0)
        return;
      const w = s.name("valid");
      for (const f of b)
        E(f) ? S(f) : (s.if((0, t.propertyInData)(s, y, f, m.opts.ownProperties)), S(f), m.allErrors || s.else().var(w, !0), s.endIf()), n.it.definedProperties.add(f), n.ok(w);
      function E(f) {
        return m.opts.useDefaults && !m.compositeRule && a[f].default !== void 0;
      }
      function S(f) {
        n.subschema({
          keyword: "properties",
          schemaProp: f,
          dataProp: f
        }, w);
      }
    }
  };
  return Ct.default = l, Ct;
}
var Rt = {}, Un;
function Js() {
  if (Un) return Rt;
  Un = 1, Object.defineProperty(Rt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Se(), t = /* @__PURE__ */ J(), r = /* @__PURE__ */ Z(), o = /* @__PURE__ */ Z(), l = {
    keyword: "patternProperties",
    type: "object",
    schemaType: "object",
    code(n) {
      const { gen: s, schema: a, data: u, parentSchema: y, it: m } = n, { opts: _ } = m, b = (0, e.allSchemaProperties)(a), w = b.filter(($) => (0, r.alwaysValidSchema)(m, a[$]));
      if (b.length === 0 || w.length === b.length && (!m.opts.unevaluated || m.props === !0))
        return;
      const E = _.strictSchema && !_.allowMatchingProperties && y.properties, S = s.name("valid");
      m.props !== !0 && !(m.props instanceof t.Name) && (m.props = (0, o.evaluatedPropsToName)(s, m.props));
      const { props: f } = m;
      g();
      function g() {
        for (const $ of b)
          E && d($), m.allErrors ? h($) : (s.var(S, !0), h($), s.if(S));
      }
      function d($) {
        for (const i in E)
          new RegExp($).test(i) && (0, r.checkStrictMode)(m, `property ${i} matches pattern ${$} (use allowMatchingProperties)`);
      }
      function h($) {
        s.forIn("key", u, (i) => {
          s.if((0, t._)`${(0, e.usePattern)(n, $)}.test(${i})`, () => {
            const c = w.includes($);
            c || n.subschema({
              keyword: "patternProperties",
              schemaProp: $,
              dataProp: i,
              dataPropType: o.Type.Str
            }, S), m.opts.unevaluated && f !== !0 ? s.assign((0, t._)`${f}[${i}]`, !0) : !c && !m.allErrors && s.if((0, t.not)(S), () => s.break());
          });
        });
      }
    }
  };
  return Rt.default = l, Rt;
}
var At = {}, Kn;
function Ws() {
  if (Kn) return At;
  Kn = 1, Object.defineProperty(At, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Z(), t = {
    keyword: "not",
    schemaType: ["object", "boolean"],
    trackErrors: !0,
    code(r) {
      const { gen: o, schema: l, it: n } = r;
      if ((0, e.alwaysValidSchema)(n, l)) {
        r.fail();
        return;
      }
      const s = o.name("valid");
      r.subschema({
        keyword: "not",
        compositeRule: !0,
        createErrors: !1,
        allErrors: !1
      }, s), r.failResult(s, () => r.reset(), () => r.error());
    },
    error: { message: "must NOT be valid" }
  };
  return At.default = t, At;
}
var Nt = {}, Hn;
function Ys() {
  if (Hn) return Nt;
  Hn = 1, Object.defineProperty(Nt, "__esModule", { value: !0 });
  const t = {
    keyword: "anyOf",
    schemaType: "array",
    trackErrors: !0,
    code: (/* @__PURE__ */ Se()).validateUnion,
    error: { message: "must match a schema in anyOf" }
  };
  return Nt.default = t, Nt;
}
var xt = {}, Gn;
function Xs() {
  if (Gn) return xt;
  Gn = 1, Object.defineProperty(xt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ J(), t = /* @__PURE__ */ Z(), o = {
    keyword: "oneOf",
    schemaType: "array",
    trackErrors: !0,
    error: {
      message: "must match exactly one schema in oneOf",
      params: ({ params: l }) => (0, e._)`{passingSchemas: ${l.passing}}`
    },
    code(l) {
      const { gen: n, schema: s, parentSchema: a, it: u } = l;
      if (!Array.isArray(s))
        throw new Error("ajv implementation error");
      if (u.opts.discriminator && a.discriminator)
        return;
      const y = s, m = n.let("valid", !1), _ = n.let("passing", null), b = n.name("_valid");
      l.setParams({ passing: _ }), n.block(w), l.result(m, () => l.reset(), () => l.error(!0));
      function w() {
        y.forEach((E, S) => {
          let f;
          (0, t.alwaysValidSchema)(u, E) ? n.var(b, !0) : f = l.subschema({
            keyword: "oneOf",
            schemaProp: S,
            compositeRule: !0
          }, b), S > 0 && n.if((0, e._)`${b} && ${m}`).assign(m, !1).assign(_, (0, e._)`[${_}, ${S}]`).else(), n.if(b, () => {
            n.assign(m, !0), n.assign(_, S), f && l.mergeEvaluated(f, e.Name);
          });
        });
      }
    }
  };
  return xt.default = o, xt;
}
var jt = {}, Jn;
function Zs() {
  if (Jn) return jt;
  Jn = 1, Object.defineProperty(jt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Z(), t = {
    keyword: "allOf",
    schemaType: "array",
    code(r) {
      const { gen: o, schema: l, it: n } = r;
      if (!Array.isArray(l))
        throw new Error("ajv implementation error");
      const s = o.name("valid");
      l.forEach((a, u) => {
        if ((0, e.alwaysValidSchema)(n, a))
          return;
        const y = r.subschema({ keyword: "allOf", schemaProp: u }, s);
        r.ok(s), r.mergeEvaluated(y);
      });
    }
  };
  return jt.default = t, jt;
}
var Ot = {}, Wn;
function Qs() {
  if (Wn) return Ot;
  Wn = 1, Object.defineProperty(Ot, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ J(), t = /* @__PURE__ */ Z(), o = {
    keyword: "if",
    schemaType: ["object", "boolean"],
    trackErrors: !0,
    error: {
      message: ({ params: n }) => (0, e.str)`must match "${n.ifClause}" schema`,
      params: ({ params: n }) => (0, e._)`{failingKeyword: ${n.ifClause}}`
    },
    code(n) {
      const { gen: s, parentSchema: a, it: u } = n;
      a.then === void 0 && a.else === void 0 && (0, t.checkStrictMode)(u, '"if" without "then" and "else" is ignored');
      const y = l(u, "then"), m = l(u, "else");
      if (!y && !m)
        return;
      const _ = s.let("valid", !0), b = s.name("_valid");
      if (w(), n.reset(), y && m) {
        const S = s.let("ifClause");
        n.setParams({ ifClause: S }), s.if(b, E("then", S), E("else", S));
      } else y ? s.if(b, E("then")) : s.if((0, e.not)(b), E("else"));
      n.pass(_, () => n.error(!0));
      function w() {
        const S = n.subschema({
          keyword: "if",
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }, b);
        n.mergeEvaluated(S);
      }
      function E(S, f) {
        return () => {
          const g = n.subschema({ keyword: S }, b);
          s.assign(_, b), n.mergeValidEvaluated(g, _), f ? s.assign(f, (0, e._)`${S}`) : n.setParams({ ifClause: S });
        };
      }
    }
  };
  function l(n, s) {
    const a = n.schema[s];
    return a !== void 0 && !(0, t.alwaysValidSchema)(n, a);
  }
  return Ot.default = o, Ot;
}
var Mt = {}, Yn;
function ei() {
  if (Yn) return Mt;
  Yn = 1, Object.defineProperty(Mt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Z(), t = {
    keyword: ["then", "else"],
    schemaType: ["object", "boolean"],
    code({ keyword: r, parentSchema: o, it: l }) {
      o.if === void 0 && (0, e.checkStrictMode)(l, `"${r}" without "if" is ignored`);
    }
  };
  return Mt.default = t, Mt;
}
var Xn;
function ti() {
  if (Xn) return bt;
  Xn = 1, Object.defineProperty(bt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ To(), t = /* @__PURE__ */ Ls(), r = /* @__PURE__ */ Io(), o = /* @__PURE__ */ Us(), l = /* @__PURE__ */ Ks(), n = /* @__PURE__ */ xr(), s = /* @__PURE__ */ Hs(), a = /* @__PURE__ */ zo(), u = /* @__PURE__ */ Gs(), y = /* @__PURE__ */ Js(), m = /* @__PURE__ */ Ws(), _ = /* @__PURE__ */ Ys(), b = /* @__PURE__ */ Xs(), w = /* @__PURE__ */ Zs(), E = /* @__PURE__ */ Qs(), S = /* @__PURE__ */ ei();
  function f(g = !1) {
    const d = [
      // any
      m.default,
      _.default,
      b.default,
      w.default,
      E.default,
      S.default,
      // object
      s.default,
      a.default,
      n.default,
      u.default,
      y.default
    ];
    return g ? d.push(t.default, o.default) : d.push(e.default, r.default), d.push(l.default), d;
  }
  return bt.default = f, bt;
}
var Tt = {}, Ve = {}, Zn;
function qo() {
  if (Zn) return Ve;
  Zn = 1, Object.defineProperty(Ve, "__esModule", { value: !0 }), Ve.dynamicAnchor = void 0;
  const e = /* @__PURE__ */ J(), t = /* @__PURE__ */ we(), r = /* @__PURE__ */ ir(), o = /* @__PURE__ */ Ar(), l = {
    keyword: "$dynamicAnchor",
    schemaType: "string",
    code: (a) => n(a, a.schema)
  };
  function n(a, u) {
    const { gen: y, it: m } = a;
    m.schemaEnv.root.dynamicAnchors[u] = !0;
    const _ = (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(u)}`, b = m.errSchemaPath === "#" ? m.validateName : s(a);
    y.if((0, e._)`!${_}`, () => y.assign(_, b));
  }
  Ve.dynamicAnchor = n;
  function s(a) {
    const { schemaEnv: u, schema: y, self: m } = a.it, { root: _, baseId: b, localRefs: w, meta: E } = u.root, { schemaId: S } = m.opts, f = new r.SchemaEnv({ schema: y, schemaId: S, root: _, baseId: b, localRefs: w, meta: E });
    return r.compileSchema.call(m, f), (0, o.getValidate)(a, f);
  }
  return Ve.default = l, Ve;
}
var Fe = {}, Qn;
function Do() {
  if (Qn) return Fe;
  Qn = 1, Object.defineProperty(Fe, "__esModule", { value: !0 }), Fe.dynamicRef = void 0;
  const e = /* @__PURE__ */ J(), t = /* @__PURE__ */ we(), r = /* @__PURE__ */ Ar(), o = {
    keyword: "$dynamicRef",
    schemaType: "string",
    code: (n) => l(n, n.schema)
  };
  function l(n, s) {
    const { gen: a, keyword: u, it: y } = n;
    if (s[0] !== "#")
      throw new Error(`"${u}" only supports hash fragment reference`);
    const m = s.slice(1);
    if (y.allErrors)
      _();
    else {
      const w = a.let("valid", !1);
      _(w), n.ok(w);
    }
    function _(w) {
      if (y.schemaEnv.root.dynamicAnchors[m]) {
        const E = a.let("_v", (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(m)}`);
        a.if(E, b(E, w), b(y.validateName, w));
      } else
        b(y.validateName, w)();
    }
    function b(w, E) {
      return E ? () => a.block(() => {
        (0, r.callRef)(n, w), a.let(E, !0);
      }) : () => (0, r.callRef)(n, w);
    }
  }
  return Fe.dynamicRef = l, Fe.default = o, Fe;
}
var It = {}, eo;
function ri() {
  if (eo) return It;
  eo = 1, Object.defineProperty(It, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ qo(), t = /* @__PURE__ */ Z(), r = {
    keyword: "$recursiveAnchor",
    schemaType: "boolean",
    code(o) {
      o.schema ? (0, e.dynamicAnchor)(o, "") : (0, t.checkStrictMode)(o.it, "$recursiveAnchor: false is ignored");
    }
  };
  return It.default = r, It;
}
var zt = {}, to;
function ni() {
  if (to) return zt;
  to = 1, Object.defineProperty(zt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Do(), t = {
    keyword: "$recursiveRef",
    schemaType: "string",
    code: (r) => (0, e.dynamicRef)(r, r.schema)
  };
  return zt.default = t, zt;
}
var ro;
function oi() {
  if (ro) return Tt;
  ro = 1, Object.defineProperty(Tt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ qo(), t = /* @__PURE__ */ Do(), r = /* @__PURE__ */ ri(), o = /* @__PURE__ */ ni(), l = [e.default, t.default, r.default, o.default];
  return Tt.default = l, Tt;
}
var qt = {}, Dt = {}, no;
function si() {
  if (no) return Dt;
  no = 1, Object.defineProperty(Dt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ xr(), t = {
    keyword: "dependentRequired",
    type: "object",
    schemaType: "object",
    error: e.error,
    code: (r) => (0, e.validatePropertyDeps)(r)
  };
  return Dt.default = t, Dt;
}
var Vt = {}, oo;
function ii() {
  if (oo) return Vt;
  oo = 1, Object.defineProperty(Vt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ xr(), t = {
    keyword: "dependentSchemas",
    type: "object",
    schemaType: "object",
    code: (r) => (0, e.validateSchemaDeps)(r)
  };
  return Vt.default = t, Vt;
}
var Ft = {}, so;
function ai() {
  if (so) return Ft;
  so = 1, Object.defineProperty(Ft, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Z(), t = {
    keyword: ["maxContains", "minContains"],
    type: "array",
    schemaType: "number",
    code({ keyword: r, parentSchema: o, it: l }) {
      o.contains === void 0 && (0, e.checkStrictMode)(l, `"${r}" without "contains" is ignored`);
    }
  };
  return Ft.default = t, Ft;
}
var io;
function ci() {
  if (io) return qt;
  io = 1, Object.defineProperty(qt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ si(), t = /* @__PURE__ */ ii(), r = /* @__PURE__ */ ai(), o = [e.default, t.default, r.default];
  return qt.default = o, qt;
}
var Bt = {}, Lt = {}, ao;
function li() {
  if (ao) return Lt;
  ao = 1, Object.defineProperty(Lt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ J(), t = /* @__PURE__ */ Z(), r = /* @__PURE__ */ we(), l = {
    keyword: "unevaluatedProperties",
    type: "object",
    schemaType: ["boolean", "object"],
    trackErrors: !0,
    error: {
      message: "must NOT have unevaluated properties",
      params: ({ params: n }) => (0, e._)`{unevaluatedProperty: ${n.unevaluatedProperty}}`
    },
    code(n) {
      const { gen: s, schema: a, data: u, errsCount: y, it: m } = n;
      if (!y)
        throw new Error("ajv implementation error");
      const { allErrors: _, props: b } = m;
      b instanceof e.Name ? s.if((0, e._)`${b} !== true`, () => s.forIn("key", u, (f) => s.if(E(b, f), () => w(f)))) : b !== !0 && s.forIn("key", u, (f) => b === void 0 ? w(f) : s.if(S(b, f), () => w(f))), m.props = !0, n.ok((0, e._)`${y} === ${r.default.errors}`);
      function w(f) {
        if (a === !1) {
          n.setParams({ unevaluatedProperty: f }), n.error(), _ || s.break();
          return;
        }
        if (!(0, t.alwaysValidSchema)(m, a)) {
          const g = s.name("valid");
          n.subschema({
            keyword: "unevaluatedProperties",
            dataProp: f,
            dataPropType: t.Type.Str
          }, g), _ || s.if((0, e.not)(g), () => s.break());
        }
      }
      function E(f, g) {
        return (0, e._)`!${f} || !${f}[${g}]`;
      }
      function S(f, g) {
        const d = [];
        for (const h in f)
          f[h] === !0 && d.push((0, e._)`${g} !== ${h}`);
        return (0, e.and)(...d);
      }
    }
  };
  return Lt.default = l, Lt;
}
var Ut = {}, co;
function di() {
  if (co) return Ut;
  co = 1, Object.defineProperty(Ut, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ J(), t = /* @__PURE__ */ Z(), o = {
    keyword: "unevaluatedItems",
    type: "array",
    schemaType: ["boolean", "object"],
    error: {
      message: ({ params: { len: l } }) => (0, e.str)`must NOT have more than ${l} items`,
      params: ({ params: { len: l } }) => (0, e._)`{limit: ${l}}`
    },
    code(l) {
      const { gen: n, schema: s, data: a, it: u } = l, y = u.items || 0;
      if (y === !0)
        return;
      const m = n.const("len", (0, e._)`${a}.length`);
      if (s === !1)
        l.setParams({ len: y }), l.fail((0, e._)`${m} > ${y}`);
      else if (typeof s == "object" && !(0, t.alwaysValidSchema)(u, s)) {
        const b = n.var("valid", (0, e._)`${m} <= ${y}`);
        n.if((0, e.not)(b), () => _(b, y)), l.ok(b);
      }
      u.items = !0;
      function _(b, w) {
        n.forRange("i", w, m, (E) => {
          l.subschema({ keyword: "unevaluatedItems", dataProp: E, dataPropType: t.Type.Num }, b), u.allErrors || n.if((0, e.not)(b), () => n.break());
        });
      }
    }
  };
  return Ut.default = o, Ut;
}
var lo;
function ui() {
  if (lo) return Bt;
  lo = 1, Object.defineProperty(Bt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ li(), t = /* @__PURE__ */ di(), r = [e.default, t.default];
  return Bt.default = r, Bt;
}
var Kt = {}, Ht = {}, uo;
function fi() {
  if (uo) return Ht;
  uo = 1, Object.defineProperty(Ht, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ J(), r = {
    keyword: "format",
    type: ["number", "string"],
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: o }) => (0, e.str)`must match format "${o}"`,
      params: ({ schemaCode: o }) => (0, e._)`{format: ${o}}`
    },
    code(o, l) {
      const { gen: n, data: s, $data: a, schema: u, schemaCode: y, it: m } = o, { opts: _, errSchemaPath: b, schemaEnv: w, self: E } = m;
      if (!_.validateFormats)
        return;
      a ? S() : f();
      function S() {
        const g = n.scopeValue("formats", {
          ref: E.formats,
          code: _.code.formats
        }), d = n.const("fDef", (0, e._)`${g}[${y}]`), h = n.let("fType"), $ = n.let("format");
        n.if((0, e._)`typeof ${d} == "object" && !(${d} instanceof RegExp)`, () => n.assign(h, (0, e._)`${d}.type || "string"`).assign($, (0, e._)`${d}.validate`), () => n.assign(h, (0, e._)`"string"`).assign($, d)), o.fail$data((0, e.or)(i(), c()));
        function i() {
          return _.strictSchema === !1 ? e.nil : (0, e._)`${y} && !${$}`;
        }
        function c() {
          const p = w.$async ? (0, e._)`(${d}.async ? await ${$}(${s}) : ${$}(${s}))` : (0, e._)`${$}(${s})`, P = (0, e._)`(typeof ${$} == "function" ? ${p} : ${$}.test(${s}))`;
          return (0, e._)`${$} && ${$} !== true && ${h} === ${l} && !${P}`;
        }
      }
      function f() {
        const g = E.formats[u];
        if (!g) {
          i();
          return;
        }
        if (g === !0)
          return;
        const [d, h, $] = c(g);
        d === l && o.pass(p());
        function i() {
          if (_.strictSchema === !1) {
            E.logger.warn(P());
            return;
          }
          throw new Error(P());
          function P() {
            return `unknown format "${u}" ignored in schema at path "${b}"`;
          }
        }
        function c(P) {
          const C = P instanceof RegExp ? (0, e.regexpCode)(P) : _.code.formats ? (0, e._)`${_.code.formats}${(0, e.getProperty)(u)}` : void 0, A = n.scopeValue("formats", { key: u, ref: P, code: C });
          return typeof P == "object" && !(P instanceof RegExp) ? [P.type || "string", P.validate, (0, e._)`${A}.validate`] : ["string", P, A];
        }
        function p() {
          if (typeof g == "object" && !(g instanceof RegExp) && g.async) {
            if (!w.$async)
              throw new Error("async format in sync schema");
            return (0, e._)`await ${$}(${s})`;
          }
          return typeof h == "function" ? (0, e._)`${$}(${s})` : (0, e._)`${$}.test(${s})`;
        }
      }
    }
  };
  return Ht.default = r, Ht;
}
var fo;
function pi() {
  if (fo) return Kt;
  fo = 1, Object.defineProperty(Kt, "__esModule", { value: !0 });
  const t = [(/* @__PURE__ */ fi()).default];
  return Kt.default = t, Kt;
}
var Oe = {}, po;
function hi() {
  return po || (po = 1, Object.defineProperty(Oe, "__esModule", { value: !0 }), Oe.contentVocabulary = Oe.metadataVocabulary = void 0, Oe.metadataVocabulary = [
    "title",
    "description",
    "default",
    "deprecated",
    "readOnly",
    "writeOnly",
    "examples"
  ], Oe.contentVocabulary = [
    "contentMediaType",
    "contentEncoding",
    "contentSchema"
  ]), Oe;
}
var ho;
function mi() {
  if (ho) return st;
  ho = 1, Object.defineProperty(st, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ns(), t = /* @__PURE__ */ Bs(), r = /* @__PURE__ */ ti(), o = /* @__PURE__ */ oi(), l = /* @__PURE__ */ ci(), n = /* @__PURE__ */ ui(), s = /* @__PURE__ */ pi(), a = /* @__PURE__ */ hi(), u = [
    o.default,
    e.default,
    t.default,
    (0, r.default)(!0),
    s.default,
    a.metadataVocabulary,
    a.contentVocabulary,
    l.default,
    n.default
  ];
  return st.default = u, st;
}
var Gt = {}, Xe = {}, mo;
function gi() {
  if (mo) return Xe;
  mo = 1, Object.defineProperty(Xe, "__esModule", { value: !0 }), Xe.DiscrError = void 0;
  var e;
  return (function(t) {
    t.Tag = "tag", t.Mapping = "mapping";
  })(e || (Xe.DiscrError = e = {})), Xe;
}
var go;
function yi() {
  if (go) return Gt;
  go = 1, Object.defineProperty(Gt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ J(), t = /* @__PURE__ */ gi(), r = /* @__PURE__ */ ir(), o = /* @__PURE__ */ sr(), l = /* @__PURE__ */ Z(), s = {
    keyword: "discriminator",
    type: "object",
    schemaType: "object",
    error: {
      message: ({ params: { discrError: a, tagName: u } }) => a === t.DiscrError.Tag ? `tag "${u}" must be string` : `value of tag "${u}" must be in oneOf`,
      params: ({ params: { discrError: a, tag: u, tagName: y } }) => (0, e._)`{error: ${a}, tag: ${y}, tagValue: ${u}}`
    },
    code(a) {
      const { gen: u, data: y, schema: m, parentSchema: _, it: b } = a, { oneOf: w } = _;
      if (!b.opts.discriminator)
        throw new Error("discriminator: requires discriminator option");
      const E = m.propertyName;
      if (typeof E != "string")
        throw new Error("discriminator: requires propertyName");
      if (m.mapping)
        throw new Error("discriminator: mapping is not supported");
      if (!w)
        throw new Error("discriminator: requires oneOf keyword");
      const S = u.let("valid", !1), f = u.const("tag", (0, e._)`${y}${(0, e.getProperty)(E)}`);
      u.if((0, e._)`typeof ${f} == "string"`, () => g(), () => a.error(!1, { discrError: t.DiscrError.Tag, tag: f, tagName: E })), a.ok(S);
      function g() {
        const $ = h();
        u.if(!1);
        for (const i in $)
          u.elseIf((0, e._)`${f} === ${i}`), u.assign(S, d($[i]));
        u.else(), a.error(!1, { discrError: t.DiscrError.Mapping, tag: f, tagName: E }), u.endIf();
      }
      function d($) {
        const i = u.name("valid"), c = a.subschema({ keyword: "oneOf", schemaProp: $ }, i);
        return a.mergeEvaluated(c, e.Name), i;
      }
      function h() {
        var $;
        const i = {}, c = P(_);
        let p = !0;
        for (let N = 0; N < w.length; N++) {
          let x = w[N];
          if (x?.$ref && !(0, l.schemaHasRulesButRef)(x, b.self.RULES)) {
            const U = x.$ref;
            if (x = r.resolveRef.call(b.self, b.schemaEnv.root, b.baseId, U), x instanceof r.SchemaEnv && (x = x.schema), x === void 0)
              throw new o.default(b.opts.uriResolver, b.baseId, U);
          }
          const q = ($ = x?.properties) === null || $ === void 0 ? void 0 : $[E];
          if (typeof q != "object")
            throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${E}"`);
          p = p && (c || P(x)), C(q, N);
        }
        if (!p)
          throw new Error(`discriminator: "${E}" must be required`);
        return i;
        function P({ required: N }) {
          return Array.isArray(N) && N.includes(E);
        }
        function C(N, x) {
          if (N.const)
            A(N.const, x);
          else if (N.enum)
            for (const q of N.enum)
              A(q, x);
          else
            throw new Error(`discriminator: "properties/${E}" must have "const" or "enum"`);
        }
        function A(N, x) {
          if (typeof N != "string" || N in i)
            throw new Error(`discriminator: "${E}" values must be unique strings`);
          i[N] = x;
        }
      }
    }
  };
  return Gt.default = s, Gt;
}
var Jt = {};
const vi = "https://json-schema.org/draft/2020-12/schema", $i = "https://json-schema.org/draft/2020-12/schema", _i = { "https://json-schema.org/draft/2020-12/vocab/core": !0, "https://json-schema.org/draft/2020-12/vocab/applicator": !0, "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0, "https://json-schema.org/draft/2020-12/vocab/validation": !0, "https://json-schema.org/draft/2020-12/vocab/meta-data": !0, "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0, "https://json-schema.org/draft/2020-12/vocab/content": !0 }, bi = "meta", wi = "Core and Validation specifications meta-schema", Si = [{ $ref: "meta/core" }, { $ref: "meta/applicator" }, { $ref: "meta/unevaluated" }, { $ref: "meta/validation" }, { $ref: "meta/meta-data" }, { $ref: "meta/format-annotation" }, { $ref: "meta/content" }], Ei = ["object", "boolean"], ki = "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.", Pi = { definitions: { $comment: '"definitions" has been replaced by "$defs".', type: "object", additionalProperties: { $dynamicRef: "#meta" }, deprecated: !0, default: {} }, dependencies: { $comment: '"dependencies" has been split and replaced by "dependentSchemas" and "dependentRequired" in order to serve their differing semantics.', type: "object", additionalProperties: { anyOf: [{ $dynamicRef: "#meta" }, { $ref: "meta/validation#/$defs/stringArray" }] }, deprecated: !0, default: {} }, $recursiveAnchor: { $comment: '"$recursiveAnchor" has been replaced by "$dynamicAnchor".', $ref: "meta/core#/$defs/anchorString", deprecated: !0 }, $recursiveRef: { $comment: '"$recursiveRef" has been replaced by "$dynamicRef".', $ref: "meta/core#/$defs/uriReferenceString", deprecated: !0 } }, Ci = {
  $schema: vi,
  $id: $i,
  $vocabulary: _i,
  $dynamicAnchor: bi,
  title: wi,
  allOf: Si,
  type: Ei,
  $comment: ki,
  properties: Pi
}, Ri = "https://json-schema.org/draft/2020-12/schema", Ai = "https://json-schema.org/draft/2020-12/meta/applicator", Ni = { "https://json-schema.org/draft/2020-12/vocab/applicator": !0 }, xi = "meta", ji = "Applicator vocabulary meta-schema", Oi = ["object", "boolean"], Mi = { prefixItems: { $ref: "#/$defs/schemaArray" }, items: { $dynamicRef: "#meta" }, contains: { $dynamicRef: "#meta" }, additionalProperties: { $dynamicRef: "#meta" }, properties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, propertyNames: { format: "regex" }, default: {} }, dependentSchemas: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, propertyNames: { $dynamicRef: "#meta" }, if: { $dynamicRef: "#meta" }, then: { $dynamicRef: "#meta" }, else: { $dynamicRef: "#meta" }, allOf: { $ref: "#/$defs/schemaArray" }, anyOf: { $ref: "#/$defs/schemaArray" }, oneOf: { $ref: "#/$defs/schemaArray" }, not: { $dynamicRef: "#meta" } }, Ti = { schemaArray: { type: "array", minItems: 1, items: { $dynamicRef: "#meta" } } }, Ii = {
  $schema: Ri,
  $id: Ai,
  $vocabulary: Ni,
  $dynamicAnchor: xi,
  title: ji,
  type: Oi,
  properties: Mi,
  $defs: Ti
}, zi = "https://json-schema.org/draft/2020-12/schema", qi = "https://json-schema.org/draft/2020-12/meta/unevaluated", Di = { "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0 }, Vi = "meta", Fi = "Unevaluated applicator vocabulary meta-schema", Bi = ["object", "boolean"], Li = { unevaluatedItems: { $dynamicRef: "#meta" }, unevaluatedProperties: { $dynamicRef: "#meta" } }, Ui = {
  $schema: zi,
  $id: qi,
  $vocabulary: Di,
  $dynamicAnchor: Vi,
  title: Fi,
  type: Bi,
  properties: Li
}, Ki = "https://json-schema.org/draft/2020-12/schema", Hi = "https://json-schema.org/draft/2020-12/meta/content", Gi = { "https://json-schema.org/draft/2020-12/vocab/content": !0 }, Ji = "meta", Wi = "Content vocabulary meta-schema", Yi = ["object", "boolean"], Xi = { contentEncoding: { type: "string" }, contentMediaType: { type: "string" }, contentSchema: { $dynamicRef: "#meta" } }, Zi = {
  $schema: Ki,
  $id: Hi,
  $vocabulary: Gi,
  $dynamicAnchor: Ji,
  title: Wi,
  type: Yi,
  properties: Xi
}, Qi = "https://json-schema.org/draft/2020-12/schema", ea = "https://json-schema.org/draft/2020-12/meta/core", ta = { "https://json-schema.org/draft/2020-12/vocab/core": !0 }, ra = "meta", na = "Core vocabulary meta-schema", oa = ["object", "boolean"], sa = { $id: { $ref: "#/$defs/uriReferenceString", $comment: "Non-empty fragments not allowed.", pattern: "^[^#]*#?$" }, $schema: { $ref: "#/$defs/uriString" }, $ref: { $ref: "#/$defs/uriReferenceString" }, $anchor: { $ref: "#/$defs/anchorString" }, $dynamicRef: { $ref: "#/$defs/uriReferenceString" }, $dynamicAnchor: { $ref: "#/$defs/anchorString" }, $vocabulary: { type: "object", propertyNames: { $ref: "#/$defs/uriString" }, additionalProperties: { type: "boolean" } }, $comment: { type: "string" }, $defs: { type: "object", additionalProperties: { $dynamicRef: "#meta" } } }, ia = { anchorString: { type: "string", pattern: "^[A-Za-z_][-A-Za-z0-9._]*$" }, uriString: { type: "string", format: "uri" }, uriReferenceString: { type: "string", format: "uri-reference" } }, aa = {
  $schema: Qi,
  $id: ea,
  $vocabulary: ta,
  $dynamicAnchor: ra,
  title: na,
  type: oa,
  properties: sa,
  $defs: ia
}, ca = "https://json-schema.org/draft/2020-12/schema", la = "https://json-schema.org/draft/2020-12/meta/format-annotation", da = { "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0 }, ua = "meta", fa = "Format vocabulary meta-schema for annotation results", pa = ["object", "boolean"], ha = { format: { type: "string" } }, ma = {
  $schema: ca,
  $id: la,
  $vocabulary: da,
  $dynamicAnchor: ua,
  title: fa,
  type: pa,
  properties: ha
}, ga = "https://json-schema.org/draft/2020-12/schema", ya = "https://json-schema.org/draft/2020-12/meta/meta-data", va = { "https://json-schema.org/draft/2020-12/vocab/meta-data": !0 }, $a = "meta", _a = "Meta-data vocabulary meta-schema", ba = ["object", "boolean"], wa = { title: { type: "string" }, description: { type: "string" }, default: !0, deprecated: { type: "boolean", default: !1 }, readOnly: { type: "boolean", default: !1 }, writeOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 } }, Sa = {
  $schema: ga,
  $id: ya,
  $vocabulary: va,
  $dynamicAnchor: $a,
  title: _a,
  type: ba,
  properties: wa
}, Ea = "https://json-schema.org/draft/2020-12/schema", ka = "https://json-schema.org/draft/2020-12/meta/validation", Pa = { "https://json-schema.org/draft/2020-12/vocab/validation": !0 }, Ca = "meta", Ra = "Validation vocabulary meta-schema", Aa = ["object", "boolean"], Na = { type: { anyOf: [{ $ref: "#/$defs/simpleTypes" }, { type: "array", items: { $ref: "#/$defs/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, const: !0, enum: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/$defs/nonNegativeInteger" }, minLength: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, maxItems: { $ref: "#/$defs/nonNegativeInteger" }, minItems: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, maxContains: { $ref: "#/$defs/nonNegativeInteger" }, minContains: { $ref: "#/$defs/nonNegativeInteger", default: 1 }, maxProperties: { $ref: "#/$defs/nonNegativeInteger" }, minProperties: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, required: { $ref: "#/$defs/stringArray" }, dependentRequired: { type: "object", additionalProperties: { $ref: "#/$defs/stringArray" } } }, xa = { nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { $ref: "#/$defs/nonNegativeInteger", default: 0 }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, ja = {
  $schema: Ea,
  $id: ka,
  $vocabulary: Pa,
  $dynamicAnchor: Ca,
  title: Ra,
  type: Aa,
  properties: Na,
  $defs: xa
};
var yo;
function Oa() {
  if (yo) return Jt;
  yo = 1, Object.defineProperty(Jt, "__esModule", { value: !0 });
  const e = Ci, t = Ii, r = Ui, o = Zi, l = aa, n = ma, s = Sa, a = ja, u = ["/properties"];
  function y(m) {
    return [
      e,
      t,
      r,
      o,
      l,
      _(this, n),
      s,
      _(this, a)
    ].forEach((b) => this.addMetaSchema(b, void 0, !1)), this;
    function _(b, w) {
      return m ? b.$dataMetaSchema(w, u) : w;
    }
  }
  return Jt.default = y, Jt;
}
var vo;
function Ma() {
  return vo || (vo = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv2020 = void 0;
    const r = /* @__PURE__ */ Rs(), o = /* @__PURE__ */ mi(), l = /* @__PURE__ */ yi(), n = /* @__PURE__ */ Oa(), s = "https://json-schema.org/draft/2020-12/schema";
    class a extends r.default {
      constructor(w = {}) {
        super({
          ...w,
          dynamicRef: !0,
          next: !0,
          unevaluated: !0
        });
      }
      _addVocabularies() {
        super._addVocabularies(), o.default.forEach((w) => this.addVocabulary(w)), this.opts.discriminator && this.addKeyword(l.default);
      }
      _addDefaultMetaSchema() {
        super._addDefaultMetaSchema();
        const { $data: w, meta: E } = this.opts;
        E && (n.default.call(this, w), this.refs["http://json-schema.org/schema"] = s);
      }
      defaultMeta() {
        return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(s) ? s : void 0);
      }
    }
    t.Ajv2020 = a, e.exports = t = a, e.exports.Ajv2020 = a, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = a;
    var u = /* @__PURE__ */ or();
    Object.defineProperty(t, "KeywordCxt", { enumerable: !0, get: function() {
      return u.KeywordCxt;
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
    var m = /* @__PURE__ */ Rr();
    Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
      return m.default;
    } });
    var _ = /* @__PURE__ */ sr();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return _.default;
    } });
  })(et, et.exports)), et.exports;
}
var Ta = /* @__PURE__ */ Ma();
const Ia = /* @__PURE__ */ fs(Ta), za = "https://json-schema.org/draft/2020-12/schema", qa = "https://raw.githubusercontent.com/omsf-eco-infra/gufe-viz/main/schema/gufe-viz.schema.json", Da = "gufe-viz payload", Va = "Python-to-TypeScript contract bridge for gufe visualizations. Source of truth both languages are downstream of it. This schema is not strictly versioned or published as it is only internally consumed by this codebase. Schema description: one schema object per gufe class: every $def named *Viz is the visualization form of exactly one GufeTokenizable, it carries that object's `gufe-key`. Every reference from one gufe object to another is that object's gufe key, and the objects themselves live in the `registry` on the root payload. So a ligand network's nodes are keys, a chemical system's components and a transformation's protocol are keys and each one resolves to a complete, drawable object. An alchemical network whose forty systems share one protein carries that PDB once and points at it forty times, and the browser can still drill into it, because what it points at is a whole ProteinComponentViz. This is a single-shot dump rather than a conversation with a server, so the registry travels with the payload.", Fa = [{ $ref: "#/$defs/SmallMoleculeComponentViz" }, { $ref: "#/$defs/ProteinComponentViz" }, { $ref: "#/$defs/SolvatedPDBComponentViz" }, { $ref: "#/$defs/ProteinMembraneComponentViz" }, { $ref: "#/$defs/SolventComponentViz" }, { $ref: "#/$defs/UnknownComponentViz" }, { $ref: "#/$defs/ProtocolViz" }, { $ref: "#/$defs/LigandAtomMappingViz" }, { $ref: "#/$defs/LigandNetworkViz" }, { $ref: "#/$defs/ChemicalSystemViz" }, { $ref: "#/$defs/TransformationViz" }, { $ref: "#/$defs/AlchemicalNetworkViz" }], Ba = /* @__PURE__ */ JSON.parse('{"GufeKey":{"title":"GufeKey","description":"A gufe key: the identity of a GufeTokenizable, of the form \'ClassName-<hex digest>\'. It is deterministic and repeatable within a software environment. Only its non-emptiness is checked","type":"string","minLength":1},"ComponentKey":{"title":"ComponentKey","description":"A gufe key naming a ComponentViz in the registry. Identical to GufeKey at validation time: JSON Schema has no way to say \'this string is the gufe-key of an entry in that array, and that entry has this type\', because that is a join across two parts of the document. What the name buys is that the referent\'s type is stated in the contract and carried into the generated TypeScript, instead of living only in a test and a view.","$ref":"#/$defs/GufeKey"},"SmallMoleculeComponentKey":{"title":"SmallMoleculeComponentKey","description":"A gufe key naming a SmallMoleculeComponentViz in the registry. Resolving it yields the whole molecule, SDF included. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ChemicalSystemKey":{"title":"ChemicalSystemKey","description":"A gufe key naming a ChemicalSystemViz in the registry. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ProtocolKey":{"title":"ProtocolKey","description":"A gufe key naming a ProtocolViz in the registry. Every transformation of a network usually names the same one. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"Registry":{"title":"Registry","description":"The pool of gufe objects this payload refers to by key, each a complete payload object in its own right. Entries are unique by `gufe-key` and sorted by (type, gufe-key) so a committed fixture is byte-stable. JSON Schema cannot express \'unique by a property\' or \'every reference resolves\', so both are covered by tests on the Python side and degraded over by the views.","type":"array","items":{"oneOf":[{"$ref":"#/$defs/ComponentViz"},{"$ref":"#/$defs/ProtocolViz"},{"$ref":"#/$defs/ChemicalSystemViz"}]}},"ComponentViz":{"title":"ComponentViz","description":"Any single chemical-system component","oneOf":[{"$ref":"#/$defs/SmallMoleculeComponentViz"},{"$ref":"#/$defs/ProteinComponentViz"},{"$ref":"#/$defs/SolvatedPDBComponentViz"},{"$ref":"#/$defs/ProteinMembraneComponentViz"},{"$ref":"#/$defs/SolventComponentViz"},{"$ref":"#/$defs/UnknownComponentViz"}]},"SmallMoleculeComponentViz":{"title":"SmallMoleculeComponentViz","description":"A small molecule, carried as a complete SDF record.","type":"object","properties":{"type":{"const":"SmallMoleculeComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"sdf":{"type":"string","minLength":1,"description":"Complete inline SDF record, including the conformer."},"smiles":{"type":"string"},"total_charge":{"type":"integer","description":"Net formal charge. Displayed, never recomputed from the SDF."}},"required":["type","gufe-key","name","sdf","smiles","total_charge"],"additionalProperties":false},"ProteinComponentViz":{"title":"ProteinComponentViz","description":"A protein, carried as a complete PDB record.","type":"object","properties":{"type":{"const":"ProteinComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolvatedPDBComponentViz":{"title":"SolvatedPDBComponentViz","description":"A protein with explicit solvent. A distinct type rather than a flag on ProteinComponentViz, because the discriminator is what a view dispatches on and the presence of waters changes what a sensible default representation is.","type":"object","properties":{"type":{"const":"SolvatedPDBComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation, including explicit solvent."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"ProteinMembraneComponentViz":{"title":"ProteinMembraneComponentViz","description":"A protein embedded in a membrane.","type":"object","properties":{"type":{"const":"ProteinMembraneComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation of the protein and membrane system."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolventComponentViz":{"title":"SolventComponentViz","description":"Bulk solvent settings. There is no structure to draw, so these are flat fields suitable for rendering as a settings card.","type":"object","properties":{"type":{"const":"SolventComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"smiles":{"type":"string","minLength":1},"positive_ion":{"type":"string"},"negative_ion":{"type":"string"},"neutralize":{"type":"boolean"},"ion_concentration":{"type":"string","description":"Display-form concentration with units, for example \'0.15 molar\'. A string rather than a number because the unit is part of the value and the view only ever prints it."}},"required":["type","gufe-key","name","smiles","positive_ion","negative_ion","neutralize","ion_concentration"],"additionalProperties":false},"UnknownComponentViz":{"title":"UnknownComponentViz","description":"The graceful fallback for a component type this build does not recognize. gufe supports custom Component subclasses, so meeting one is an expected outcome rather than an error, and the browser answers it with \'sorry, there is no visualization for this\'. This covers an unrecognized type only: a recognized component whose serializer fails is a bug, and raises in Python rather than arriving here wearing a disguise.","type":"object","properties":{"type":{"const":"UnknownComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The gufe class name, so the panel can say which type it could not draw."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ProtocolViz":{"title":"ProtocolViz","description":"A gufe Protocol, named. Every transformation in an alchemical network usually shares one, so this is a registry entry that many edges point at rather than a class name repeated per edge. Settings are deliberately absent for now: they are large, deeply nested, and nothing draws them yet, adding a `settings` field later is additive and breaks nothing.","type":"object","properties":{"type":{"const":"ProtocolViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The Protocol\'s class name, which is what identifies it to a reader, a Protocol has no name of its own, so `name` is usually empty."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ChemicalSystemViz":{"title":"ChemicalSystemViz","description":"A gufe ChemicalSystem: labels mapped to the gufe keys of its components.","type":"object","properties":{"type":{"const":"ChemicalSystemViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"components":{"type":"object","description":"ChemicalSystem labels mapped to the gufe keys of the components in the registry.","additionalProperties":{"$ref":"#/$defs/ComponentKey"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","components"],"additionalProperties":false},"AtomMapping":{"title":"AtomMapping","description":"Atom index correspondence from molecule A to molecule B, as a list of index pairs. A list rather than an object keyed by A\'s index, because JSON object keys can only be strings: keying by index would put decimal strings such as \'12\' in the payload and leave both languages casting them back to integers, and it is Python\'s dict-of-int shape only by resemblance. As a list, both indices stay integers, and \'an entry has a B index for every A index\' becomes a `required` the schema states rather than a convention a reader has to trust. Pairs are ordered by `index_A` so a committed fixture is byte-stable.","type":"array","items":{"type":"object","properties":{"index_A":{"type":"integer","minimum":0,"description":"An atom index in molecule A."},"index_B":{"type":"integer","minimum":0,"description":"The atom index in molecule B that it maps to."}},"required":["index_A","index_B"],"additionalProperties":false}},"Annotations":{"title":"Annotations","description":"Free-form mapping metadata. gufe puts nothing here by design and every mapper picks its own keys, so this is deliberately open. Values are whatever survived being made JSON-safe. Displayed but never interpreted, with the single exception of \'score\'.","type":"object"},"LigandAtomMappingViz":{"title":"LigandAtomMappingViz","description":"One atom mapping between two small molecules. This is also what an edge of a ligand network is because the two endpoints are gufe keys either way: standalone they resolve in this object\'s own registry, and in a network they resolve in the network\'s, where they are the same entries the nodes name. `componentA` and `componentB` are the molecules the two sides of `componentA_to_componentB` index into: an `index_A` is an atom of the SmallMoleculeComponentViz that `componentA` names, and an `index_B` an atom of `componentB`\'s.","type":"object","properties":{"type":{"const":"LigandAtomMappingViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"componentA":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentB":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentA_to_componentB":{"$ref":"#/$defs/AtomMapping"},"score":{"type":["number","null"],"description":"The \'score\' annotation when it is a plain number, otherwise null. This is the one annotation key that is interpreted rather than displayed: it drives the edge colouring and the force layout\'s link distance."},"annotations":{"$ref":"#/$defs/Annotations"},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","componentA","componentB","componentA_to_componentB","score","annotations"],"additionalProperties":false},"LigandNetworkViz":{"title":"LigandNetworkViz","description":"A ligand network: the ligands in the registry, the nodes as keys into it, and the mappings as edges. Deliberately not gufe\'s GraphML: that format embeds a gufe to_json moldict per node, so forwarding it would relocate the decoding problem into the browser rather than avoid it.","type":"object","properties":{"type":{"const":"LigandNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ligand, resolved in `registry`.","items":{"$ref":"#/$defs/SmallMoleculeComponentKey"}},"edges":{"type":"array","description":"The mappings, whose `componentA` and `componentB` name nodes of this network. JSON Schema cannot express that referential constraint, so a Python test covers it, and the view drops a dangling edge with a banner rather than failing.","items":{"$ref":"#/$defs/LigandAtomMappingViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false},"TransformationViz":{"title":"TransformationViz","description":"A transformation between two chemical systems, both named by gufe key, as is its protocol: `stateA` is the system it starts from, `stateB` the one it ends at, and every edge of a network usually names the same protocol. This is also what an edge of an alchemical network is (there is no separate edge type) because `stateA` and `stateB` are keys either way, and in a network they are the keys the nodes name. NonTransformation uses this type too: it exposes the same stateA and stateB properties, both its single system, so it renders as a diff with no differences.","type":"object","properties":{"type":{"const":"TransformationViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"protocol":{"$ref":"#/$defs/ProtocolKey"},"stateA":{"$ref":"#/$defs/ChemicalSystemKey"},"stateB":{"$ref":"#/$defs/ChemicalSystemKey"},"mappings":{"type":"array","items":{"$ref":"#/$defs/LigandAtomMappingViz"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","protocol","stateA","stateB","mappings"],"additionalProperties":false},"AlchemicalNetworkViz":{"title":"AlchemicalNetworkViz","description":"A graph of chemical systems joined by transformations. What repeats here is not the nodes and edges themselves but what they are made of: in practice every system shares one protein and every transformation shares one protocol. Both live in the registry, once, as whole objects so this view can show composition and topology while still letting a reader open a node and see the protein.","type":"object","properties":{"type":{"const":"AlchemicalNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ChemicalSystem, resolved in `registry`.","items":{"$ref":"#/$defs/ChemicalSystemKey"}},"edges":{"type":"array","description":"The transformations, whose `stateA` and `stateB` name nodes of this network.","items":{"$ref":"#/$defs/TransformationViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false}}'), jr = {
  $schema: za,
  $id: qa,
  title: Da,
  description: Va,
  oneOf: Fa,
  $defs: Ba
}, Hc = [
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
], Or = jr.$id, Mr = new Ia({ allErrors: !0, strict: !1 });
Mr.addSchema(jr, Or);
const $o = Mr.getSchema(Or), Vo = Object.entries(jr.$defs).filter(
  ([e, t]) => t.properties?.type?.const === e
).map(([e]) => e).sort(), Gc = Vo, Tr = /* @__PURE__ */ new Map();
for (const e of Vo) {
  const t = Mr.getSchema(`${Or}#/$defs/${e}`);
  t && Tr.set(e, t);
}
const Sr = { valid: !0, issues: [] };
function Er(e) {
  return (e ?? []).map((t) => ({
    path: t.instancePath || "",
    message: t.keyword === "additionalProperties" ? `unknown property ${JSON.stringify(t.params.additionalProperty)}` : t.message ?? "is invalid"
  }));
}
function La(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return {
      valid: !1,
      issues: [{ path: "", message: "must be a JSON object" }]
    };
  const t = e.type, r = typeof t == "string" ? Tr.get(t) : void 0;
  return r ? r(e) ? Sr : { valid: !1, issues: Er(r.errors) } : $o(e) ? Sr : { valid: !1, issues: Er($o.errors) };
}
function Jc(e, t) {
  const r = Tr.get(e);
  return r ? r(t) ? Sr : { valid: !1, issues: Er(r.errors) } : {
    valid: !1,
    issues: [
      { path: "", message: `unknown payload type ${JSON.stringify(e)}` }
    ]
  };
}
function Ua(e, t = 8) {
  const r = e.slice(0, t).map((o) => `${o.path || "(root)"}: ${o.message}`);
  return e.length > t && r.push(`... and ${e.length - t} more`), r.join(`
`);
}
const Ir = {
  SmallMoleculeComponentViz: "gufe-small-molecule",
  ProteinComponentViz: "gufe-protein",
  LigandNetworkViz: "gufe-ligand-network",
  ChemicalSystemViz: "gufe-chemical-system",
  LigandAtomMappingViz: "gufe-atom-mapping",
  SolventComponentViz: "gufe-solvent",
  UnknownComponentViz: "gufe-unknown-component"
};
function Fo(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return {
      message: "This does not look like a gufe-viz payload (expected a JSON object)."
    };
  const { type: t } = e;
  if (typeof t != "string" || !t)
    return {
      message: "This payload has no `type`, so there is nothing to say what it is."
    };
  if (!Ir[t]) return Ka(t);
  const { valid: r, issues: o } = La(e);
  return r ? null : {
    message: `This payload says it is a ${t}, but it does not match the gufe-viz schema.`,
    detail: Ua(o)
  };
}
function Ka(e) {
  const t = Object.keys(Ir).sort().join(", ");
  return {
    message: `Sorry, there is no visualization for ${e} yet. This build can draw: ${t}.`
  };
}
function Wc(e) {
  return Fo(e)?.message ?? null;
}
class Ha extends Ae {
  placeholder() {
    return "Waiting for data...";
  }
  renderView(t, r) {
    ds("payload", r, this);
    const o = Fo(r);
    if (o)
      return t.appendChild(Ga(o, r)), {};
    const l = r.type, n = Ir[l], s = document.createElement(n);
    return s.style.cssText = "flex:1;min-height:0;min-width:0;", s.payload = r, t.appendChild(s), {
      onResize: () => s.resize?.(),
      // Removing the child fires its own `disconnectedCallback`, which is where
      // its viewers and observers are released
      cleanup: () => s.remove()
    };
  }
}
function Ga(e, t) {
  const r = F(
    "div",
    "flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:32px;"
  );
  r.appendChild(se(e.message));
  const o = (n, s) => F(
    "div",
    "max-width:640px;padding:8px 12px;border-radius:6px;font-size:11px;white-space:pre-wrap;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;overflow-wrap:anywhere;" + (s ? `background:${T.warnBg};color:${T.warnFg};border:1px solid ${T.warnBorder};` : `background:${T.panelBg};color:${T.textMuted2};border:1px solid ${T.cardBorder};`),
    n
  );
  e.detail && r.appendChild(o(e.detail, !0));
  const l = Ja(t);
  return l && r.appendChild(o(l, !1)), r;
}
function Ja(e) {
  if (e == null || typeof e != "object") return null;
  const t = e, r = [];
  typeof t.type == "string" && r.push(`type: ${Zt(t.type)}`), typeof t.name == "string" && t.name && r.push(`name: ${Zt(t.name)}`);
  const o = Object.keys(e);
  return o.length && r.push(
    `keys: ${o.slice(0, 12).join(", ")}${o.length > 12 ? ", ..." : ""}`
  ), r.length ? r.join(`
`) : null;
}
Ne("gufe-view", Ha);
const zr = {
  threeDmol: "https://3dmol.org/build/3Dmol-min.js",
  rdkit: "https://unpkg.com/@rdkit/rdkit/dist/RDKit_minimal.js",
  d3: "https://cdn.jsdelivr.net/npm/d3@7/+esm"
};
function qr(e) {
  const t = globalThis.__gufeEngines?.[e];
  return t ? Promise.resolve(t) : null;
}
function Bo(e, t) {
  return new Promise((r, o) => {
    const l = document.createElement("script");
    l.src = e, l.onload = () => r(), l.onerror = () => o(new Error(`Failed to load ${t}`)), document.head.appendChild(l);
  });
}
let Ke = null, Be = null;
function Lo() {
  if (Be) return Be;
  const e = qr("threeDmol");
  return e ? (Be = e.then((t) => Ke = t || window.$3Dmol), Be) : (Be = (async () => {
    if (window.$3Dmol) return Ke = window.$3Dmol;
    if (await Bo(zr.threeDmol, "3Dmol.js"), !window.$3Dmol) throw new Error("3Dmol.js loaded but $3Dmol is undefined");
    return Ke = window.$3Dmol;
  })(), Be);
}
let Le = null;
function Dr() {
  if (Le) return Le;
  const e = qr("rdkit");
  return e ? (Le = e.then((t) => window.RDKit = t), Le) : (Le = (async () => {
    if (window.RDKit) return window.RDKit;
    if (await Bo(zr.rdkit, "RDKit"), !window.initRDKitModule) throw new Error("RDKit loaded but initRDKitModule is undefined");
    return window.RDKit = await window.initRDKitModule();
  })(), Le);
}
let _r = null;
function Wa() {
  if (!_r) {
    const e = zr.d3;
    _r = qr("d3") ?? import(
      /* @vite-ignore */
      e
    );
  }
  return _r;
}
function Uo(e, t) {
  let r = !1, o = !1;
  const l = () => {
    r = !0;
  }, n = () => {
    r = !1;
  }, s = (a) => {
    if (a.stopPropagation(), r || a.ctrlKey || a.metaKey) {
      a.preventDefault(), t.onZoom(a);
      return;
    }
    t.hint && !o && (o = !0, Xa(e, t.hint));
  };
  return e.addEventListener("wheel", s, { passive: !1, capture: !0 }), e.addEventListener("pointerdown", l), e.addEventListener("pointerenter", l), e.addEventListener("pointerleave", n), {
    cleanup() {
      e.removeEventListener("wheel", s, { capture: !0 }), e.removeEventListener("pointerdown", l), e.removeEventListener("pointerenter", l), e.removeEventListener("pointerleave", n);
    }
  };
}
const Ya = 1600;
function Xa(e, t) {
  const r = F(
    "div",
    "position:absolute;bottom:12px;left:50%;transform:translateX(-50%);z-index:30;pointer-events:none;padding:5px 12px;border-radius:6px;font-size:11px;white-space:nowrap;background:rgba(0,0,0,0.72);color:#ffffff;transition:opacity .3s ease;",
    t
  );
  e.appendChild(r), setTimeout(() => {
    r.style.opacity = "0", setTimeout(() => r.remove(), 300);
  }, Ya);
}
const Za = { min: 0.25, max: 12 };
function Qa(e, t = Za) {
  let r = 1;
  return {
    zoomBy(o) {
      const l = Math.min(t.max, Math.max(t.min, r * o));
      if (l === r) return;
      const n = l / r;
      r = l, e.zoom(n), e.render();
    },
    reset() {
      r = 1, e.zoomTo(), e.render();
    },
    level: () => r
  };
}
const ec = 2e-3;
function tc(e) {
  return Math.exp(-e.deltaY * ec);
}
function Ko(e, t, r = {}) {
  const o = Qa(t, r.bounds), l = Uo(e, {
    hint: r.hint ?? "Click or hold Ctrl to zoom",
    onZoom: (n) => o.zoomBy(tc(n))
  });
  return { ...o, cleanup: l.cleanup };
}
function Vr(e, t = "Reset view") {
  const r = F("button", Qe, "Reset");
  return r.title = t, r.setAttribute("aria-label", t), r.onclick = e, r;
}
const Ie = {
  elementChange: "#005AB5",
  uniqueAtom: "#DC3220",
  elementChange3D: "0x005AB5",
  uniqueAtom3D: "0xDC3220"
}, Yc = [
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
], Xc = "hsv", z = [0, 0, 0], rc = {
  0: z,
  1: z,
  2: z,
  3: z,
  4: z,
  5: z,
  6: z,
  7: z,
  8: z,
  9: z,
  10: z,
  11: z,
  12: z,
  13: z,
  14: z,
  15: z,
  16: z,
  17: z,
  18: z,
  19: z,
  20: z,
  21: z,
  22: z,
  23: z,
  24: z,
  25: z,
  26: z,
  27: z,
  28: z,
  29: z,
  30: z,
  31: z,
  32: z,
  33: z,
  34: z,
  35: z,
  36: z,
  37: z,
  38: z,
  39: z,
  40: z,
  41: z,
  42: z,
  43: z,
  44: z,
  45: z,
  46: z,
  47: z,
  48: z,
  49: z,
  50: z,
  51: z,
  52: z,
  53: z,
  54: z,
  55: z,
  56: z,
  57: z,
  58: z,
  59: z,
  60: z,
  61: z,
  62: z,
  63: z,
  64: z,
  65: z,
  66: z,
  67: z,
  68: z,
  69: z,
  70: z,
  71: z,
  72: z,
  73: z,
  74: z,
  75: z,
  76: z,
  77: z,
  78: z,
  79: z,
  80: z,
  81: z,
  82: z,
  83: z,
  84: z,
  85: z,
  86: z,
  87: z,
  88: z,
  89: z,
  90: z,
  91: z,
  92: z,
  93: z,
  94: z,
  95: z,
  96: z,
  97: z,
  98: z,
  99: z,
  100: z,
  101: z,
  102: z,
  103: z,
  104: z,
  105: z,
  106: z,
  107: z,
  108: z,
  109: z,
  110: z,
  111: z,
  112: z,
  113: z,
  114: z,
  115: z,
  116: z,
  117: z,
  118: z
}, nc = {
  atomColourPalette: rc,
  addAtomIndices: !0,
  continuousHighlight: !1
}, Ho = `
`, _o = "$$$$";
function bo(e, t) {
  if (!e || !e.trim()) throw new Error("empty SDF");
  const r = e.replace(/\r/g, "").split(Ho);
  if (r.length < 4) throw new Error("SDF too short");
  const o = r[3];
  if (o.indexOf("V3000") !== -1) throw new Error("V3000 molfiles are not supported");
  const l = parseInt(o.substring(0, 3), 10), n = parseInt(o.substring(3, 6), 10);
  if (!isFinite(l) || l <= 0) throw new Error(`bad counts line: ${o}`);
  const s = [], a = [];
  for (let m = 0; m < l; m++) {
    const _ = r[4 + m];
    if (_ == null) throw new Error("truncated atom block");
    s.push([
      parseFloat(_.substring(0, 10)) || 0,
      parseFloat(_.substring(10, 20)) || 0,
      parseFloat(_.substring(20, 30)) || 0
    ]), a.push(_.substring(31, 34).trim() || "X");
  }
  const u = [];
  for (let m = 0; m < (isFinite(n) ? n : 0); m++) {
    const _ = r[4 + l + m];
    if (_ == null) break;
    const b = parseInt(_.substring(0, 3), 10), w = parseInt(_.substring(3, 6), 10), E = parseInt(_.substring(6, 9), 10);
    !isFinite(b) || !isFinite(w) || u.push([b - 1, w - 1, isFinite(E) ? E : 1]);
  }
  return { name: (r[0] || "").trim() || t || "molecule", symbols: a, bonds: u, coords: s };
}
const oc = (e) => e.indexOf(_o) >= 0 ? e : `${e}${Ho}${_o}`;
function sc(e) {
  const t = String(e).split(/\r?\n/);
  if (t.length < 4) return null;
  const r = parseInt(t[3].slice(0, 3), 10), o = parseInt(t[3].slice(3, 6), 10);
  return isNaN(r) || isNaN(o) ? null : { atoms: r, bonds: o };
}
function Go(e, t, r) {
  let o = null;
  try {
    if (o = e.get_mol(t, JSON.stringify({ removeHs: !0 })), !o) return null;
    try {
      o.set_new_coords(!0);
    } catch {
    }
    return o.get_svg(r, r) || null;
  } catch (l) {
    return console.warn("[gufe-viz] depictSVG threw -", he(l)), null;
  } finally {
    if (o)
      try {
        o.delete();
      } catch {
      }
  }
}
function Jo(e, t, r) {
  e.innerHTML = t;
  const o = e.querySelector("svg");
  o && (o.removeAttribute("width"), o.removeAttribute("height"), o.getAttribute("viewBox") || o.setAttribute("viewBox", `0 0 ${r} ${r}`), o.setAttribute("preserveAspectRatio", "xMidYMid meet"), o.setAttribute("style", "width:100%;height:100%;max-width:100%;max-height:100%;"));
}
function ic(e, t, r, o, l = {}) {
  let n = null;
  try {
    return n = e.get_mol(t, JSON.stringify({ removeHs: !1 })), n ? n.get_svg_with_highlights ? n.get_svg_with_highlights(
      JSON.stringify({
        atoms: o,
        width: r,
        height: r,
        // Everything gufe sets, mirrored: a black-and-white element palette,
        // atom indices, and outline rather than filled highlights. Getting
        // the highlight colours right while missing these still produces a
        // picture that does not match what gufe draws.
        ...nc,
        highlightAtomColors: l
      })
    ) || null : n.get_svg(r, r) || null : null;
  } catch (s) {
    return console.warn("[gufe-viz] depictHighlightedSVG threw -", he(s)), null;
  } finally {
    if (n)
      try {
        n.delete();
      } catch {
      }
  }
}
const ac = [
  { id: "stick", label: "Stick", title: "Sticks only" },
  { id: "ball", label: "Ball+Stick", title: "Ball and stick" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" }
], wo = {
  stick: { stick: { radius: 0.15, colorscheme: "Jmol" } },
  ball: { stick: { radius: 0.12, colorscheme: "Jmol" }, sphere: { scale: 0.28, colorscheme: "Jmol" } },
  sphere: { sphere: { scale: 1, colorscheme: "Jmol" } }
}, So = 400;
class cc extends Ae {
  placeholder() {
    return "Waiting for a SmallMoleculeComponent payload...";
  }
  renderView(t, r) {
    const o = r.sdf, l = r.name ?? "", n = r.smiles, s = r.total_charge;
    t.appendChild(He(l || "Unnamed molecule", "SmallMoleculeComponent"));
    const a = F("div", "flex:1;display:flex;flex-direction:row;overflow:hidden;min-height:0;");
    t.appendChild(a);
    const u = F("div", "flex:1 1 50%;min-width:0;display:flex;flex-direction:column;"), y = F("div", "flex:1 1 50%;min-width:0;display:flex;flex-direction:column;position:relative;");
    a.appendChild(u), a.appendChild(F("div", `width:1px;flex-shrink:0;background:${T.splitBorder};`)), a.appendChild(y);
    const m = (p) => F("div", `flex-shrink:0;padding:4px 10px;font-size:12px;font-weight:bold;color:${T.labelFg};background:${T.labelBg};`, p);
    u.appendChild(m("2D"));
    const _ = F(
      "div",
      `flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:8px;background:${T.canvas2DBg};`
    );
    u.appendChild(_), y.appendChild(m("3D"));
    const b = No();
    y.appendChild(b.wrap);
    const w = F(
      "div",
      `flex-shrink:0;display:flex;flex-wrap:wrap;align-items:baseline;gap:6px 20px;padding:8px 16px;font-size:12px;background:${T.toolbarBg};border-top:1px solid ${T.toolbarBorder};color:${T.textPrimary};`
    );
    t.appendChild(w);
    const E = o ? sc(o) : null, S = [
      ["Name", l || Ue, !1],
      ["SMILES", n || Ue, !0],
      ["Charge", s == null ? Ue : String(s), !1],
      ["Atoms", E ? String(E.atoms) : Ue, !1],
      ["Bonds", E ? String(E.bonds) : Ue, !1]
    ];
    for (const [p, P, C] of S) {
      const A = F("div", "display:flex;align-items:baseline;gap:6px;min-width:0;");
      A.appendChild(
        F(
          "span",
          `font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;flex-shrink:0;color:${T.textMuted2};`,
          p
        )
      );
      const N = F(
        "span",
        `user-select:text;cursor:text;color:${T.textPrimary}` + (C ? ";font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:11px;overflow-wrap:anywhere;" : ""),
        P
      );
      N.title = P, A.appendChild(N), w.appendChild(A);
    }
    if (!o || !o.trim())
      return _.appendChild(se("No molecule provided")), b.container.appendChild(se("No molecule provided")), {};
    _.appendChild(se("Loading 2D depiction...")), Dr().then((p) => {
      const P = Go(p, o, So);
      P ? Jo(_, P, So) : _.replaceChildren(se("Failed to parse molecule", !0));
    }).catch((p) => {
      _.replaceChildren(se(`RDKit failed to load: ${he(p)}`, !0));
    });
    let f = null, g = null, d = "stick", h = !1;
    const $ = F(
      "div",
      `position:absolute;bottom:10px;right:10px;display:flex;gap:4px;padding:4px;border-radius:6px;z-index:10;background:${T.switcherBg};box-shadow:0 2px 8px rgba(0,0,0,0.25);`
    );
    $.appendChild(
      Cr(ac, d, (p) => {
        d = p, f && (f.setStyle({}, wo[p]), f.render());
      })
    );
    const i = F("button", `${Qe}margin-left:4px;`, "Spin");
    i.title = "Toggle continuous rotation", i.onclick = () => {
      h = !h, i.style.background = h ? T.btnBgActive : T.btnBg;
      try {
        f?.spin(h ? "y" : !1);
      } catch {
      }
    }, $.appendChild(i);
    const c = Vr(() => g?.reset());
    return c.style.marginLeft = "4px", $.appendChild(c), y.appendChild($), b.container.appendChild(se("Loading 3D viewer...")), Lo().then(() => {
      b.container.replaceChildren(), f = Ke.createViewer(b.container, { backgroundColor: T.viewerBg }), f.addModel(oc(o), "sdf"), f.setStyle({}, wo[d]), f.zoomTo(), f.render(), g = Ko(b.container, f);
    }).catch((p) => {
      b.container.replaceChildren(se(`3D render failed: ${he(p)}`, !0));
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
Ne("gufe-small-molecule", cc);
const Wo = ["HOH", "WAT", "SOL", "TIP3"], Eo = { hetflag: !1 }, lc = { hetflag: !0 }, dc = { resn: Wo }, Re = {
  stick: { radius: 0.15 },
  sphere: { scale: 0.3 },
  hetero: { stickRadius: 0.2, sphereScale: 0.28 },
  water: { stickRadius: 0.05, sphereScale: 0.18 },
  surfaceOpacity: 0.85,
  /** Above this many atoms a surface is slow enough to be worth warning about. */
  surfaceAtomWarn: 4e4
};
function uc(e) {
  const t = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set();
  let o = 0, l = 0, n = 0, s = 1 / 0, a = -1 / 0;
  for (const u of e.split(/\r?\n/)) {
    const y = u.slice(0, 6);
    if (y === "ENDMDL") break;
    if (y !== "ATOM  " && y !== "HETATM") continue;
    o++, y === "HETATM" && l++;
    const m = u.slice(17, 20).trim(), _ = u.slice(21, 22).trim() || "_", b = u.slice(22, 26).trim(), w = u.slice(26, 27).trim();
    Wo.indexOf(m) !== -1 && n++, t.add(_), r.add(`${_}|${b}${w}|${m}`);
    const E = parseInt(b, 10);
    isNaN(E) || (E < s && (s = E), E > a && (a = E));
  }
  return {
    chains: t.size,
    residues: r.size,
    atoms: o,
    hetatms: l,
    waters: n,
    heteroNonWater: l - n,
    resiMin: s === 1 / 0 ? 0 : s,
    resiMax: a === -1 / 0 ? 0 : a
  };
}
function fc(e) {
  return `${Je(e.chains)} chains · ${Je(e.residues)} residues · ${Je(e.atoms)} atoms · ${Je(e.hetatms)} HETATM` + (e.waters > 0 ? ` (${Je(e.waters)} water)` : "");
}
function pc(e, t) {
  return e === "chain" ? { colorscheme: "chain" } : e === "ss" ? { colorscheme: "ssJmol" } : e === "spectrum" && t && t.resiMax > t.resiMin ? { colorscheme: { prop: "resi", gradient: "roygb", min: t.resiMin, max: t.resiMax } } : { colorscheme: "Jmol" };
}
function ko(e, t, r, o) {
  const l = o || (() => {
  }), n = pc(t.color, r);
  try {
    e.removeAllSurfaces();
  } catch {
  }
  if (e.setStyle({}, {}), e.setStyle(
    Eo,
    t.rep === "stick" ? { stick: { radius: Re.stick.radius, ...n } } : t.rep === "sphere" ? { sphere: { scale: Re.sphere.scale, ...n } } : (
      // For 'surface' the shell is added separately; leave the atoms bare so
      // it is not cluttered from the inside.
      t.rep === "surface" ? {} : { cartoon: { ...n } }
    )
  ), e.setStyle(
    lc,
    t.hetero ? {
      stick: { radius: Re.hetero.stickRadius, colorscheme: "Jmol" },
      sphere: { scale: Re.hetero.sphereScale, colorscheme: "Jmol" }
    } : {}
  ), e.setStyle(
    dc,
    t.waters ? {
      stick: { radius: Re.water.stickRadius, colorscheme: "Jmol" },
      sphere: { scale: Re.water.sphereScale, colorscheme: "Jmol" }
    } : {}
  ), t.rep !== "surface") {
    l(null), e.render();
    return;
  }
  l(
    r && r.atoms > Re.surfaceAtomWarn ? "Computing surface (large structure, this may take a while)..." : "Computing surface..."
  ), e.render(), setTimeout(() => {
    try {
      Promise.resolve(
        e.addSurface(Ke.SurfaceType.VDW, { opacity: Re.surfaceOpacity, ...n }, Eo)
      ).then(() => {
        l(null), e.render();
      }).catch((s) => l(`Surface failed: ${he(s)}`, "error"));
    } catch (s) {
      l(`Surface failed: ${he(s)}`, "error");
    }
  }, 30);
}
const hc = [
  { id: "cartoon", label: "Cartoon", title: "Ribbon / cartoon backbone" },
  { id: "surface", label: "Surface", title: "Molecular (VDW) surface" },
  { id: "stick", label: "Stick", title: "All-atom sticks" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" }
], mc = [
  { id: "chain", label: "Chain" },
  { id: "spectrum", label: "Spectrum" },
  { id: "ss", label: "Secondary structure" },
  { id: "element", label: "Element" }
];
class gc extends Ae {
  placeholder() {
    return "Waiting for a ProteinComponent payload...";
  }
  renderView(t, r) {
    const o = r.pdb, l = r.name ?? "", n = { rep: "cartoon", color: "chain", waters: !1, hetero: !0 };
    let s = null, a = null, u = null;
    const y = F(
      "div",
      `display:flex;align-items:center;gap:14px;flex-wrap:wrap;padding:8px 14px;flex-shrink:0;font-size:12px;background:${T.toolbarBg};border-bottom:1px solid ${T.toolbarBorder};color:${T.textPrimary};`
    );
    t.appendChild(y), y.appendChild(
      F("span", `font-weight:700;font-size:14px;letter-spacing:.02em;color:${T.titleColor};`, l || "Protein")
    );
    const m = (h) => F("span", `font-size:11px;color:${T.textMuted};`, h);
    y.appendChild(m("Style:")), y.appendChild(
      Cr(hc, n.rep, (h) => {
        n.rep = h, d();
      })
    ), y.appendChild(m("Color:"));
    const _ = F("select", Ro);
    for (const h of mc) {
      const $ = F("option", "", h.label);
      $.value = h.id, _.appendChild($);
    }
    _.value = n.color, _.addEventListener("change", () => {
      n.color = _.value, d();
    }), y.appendChild(_);
    const b = F("div", "display:flex;gap:4px;");
    y.appendChild(b);
    const w = [
      ["waters", "Waters", "Show water molecules", () => d()],
      ["hetero", "Hetero", "Show hetero atoms / ligands / ions / lipids", () => d()],
      ["spin", "Spin", "Rotate the view continuously", () => s?.spin(n.spin ? "y" : !1)]
    ];
    for (const [h, $, i, c] of w) {
      const p = F("button", Qe, $);
      p.title = i, p.style.background = n[h] ? T.btnBgActive : T.btnBg, p.onclick = () => {
        n[h] = !n[h], p.style.background = n[h] ? T.btnBgActive : T.btnBg, c();
      }, b.appendChild(p);
    }
    b.appendChild(Vr(() => a?.reset()));
    const E = F("span", `margin-left:auto;font-size:11px;white-space:nowrap;color:${T.textMuted2};`);
    y.appendChild(E);
    const S = No();
    t.appendChild(S.wrap);
    const f = F(
      "div",
      "position:absolute;top:12px;left:50%;transform:translateX(-50%);padding:6px 14px;border-radius:6px;font-size:12px;z-index:20;display:none;pointer-events:none;"
    );
    S.wrap.appendChild(f);
    const g = (h, $) => {
      if (h == null) {
        f.style.display = "none";
        return;
      }
      f.textContent = h, f.style.display = "block";
      const i = $ === "error";
      f.style.background = i ? T.warnBg : T.toolbarBg, f.style.color = i ? T.warnFg : T.textMuted, f.style.border = `1px solid ${i ? T.warnBorder : T.toolbarBorder}`;
    };
    function d() {
      s && ko(s, n, u, g);
    }
    if (!o || !o.trim())
      return g("No protein data - waiting for a PDB payload."), {};
    try {
      u = uc(o), E.textContent = fc(u);
    } catch (h) {
      g(`⚠ PDB parse error: ${he(h)}`, "error");
    }
    return g("Loading 3D viewer..."), Lo().then(() => {
      s = Ke.createViewer(S.container, { backgroundColor: T.viewerBg }), s.addModel(o, "pdb"), ko(s, n, u, g), s.zoomTo(), s.spin(n.spin ? "y" : !1), s.render(), a = Ko(S.container, s);
    }).catch((h) => {
      g(`⚠ Failed to render structure: ${he(h)}`, "error");
    }), {
      onResize() {
        s && (s.resize(), s.render());
      },
      cleanup() {
        if (a?.cleanup(), a = null, !!s) {
          try {
            s.spin(!1);
          } catch {
          }
          try {
            s.clear();
          } catch {
          }
          s = null;
        }
      }
    };
  }
}
Ne("gufe-protein", gc);
const Yo = "http://www.w3.org/2000/svg";
function oe(e, t = {}) {
  const r = document.createElementNS(Yo, e);
  for (const [o, l] of Object.entries(t)) r.setAttribute(o, String(l));
  return r;
}
function tr(e, t) {
  const r = document.createElementNS(Yo, "title");
  return r.textContent = t, e.appendChild(r), e;
}
function Fr(e) {
  const t = /* @__PURE__ */ new Map();
  return kr(e, t, /* @__PURE__ */ new Set()), t;
}
function kr(e, t, r) {
  if (e == null || typeof e != "object" || r.has(e)) return;
  if (r.add(e), Array.isArray(e)) {
    for (const l of e) kr(l, t, r);
    return;
  }
  const o = e.registry;
  if (Array.isArray(o))
    for (const l of o) {
      const n = l["gufe-key"];
      typeof n == "string" && n && !t.has(n) && t.set(n, l);
    }
  for (const l of Object.values(e)) kr(l, t, r);
}
function Xo(e, t) {
  return t ? e.get(t) : void 0;
}
function Ze(e, t, r) {
  const o = Xo(e, t);
  return o?.type === r ? o : void 0;
}
function Pr(e) {
  return e.name ? e.name : (e["gufe-key"].split("-").pop() ?? e["gufe-key"]).slice(0, 6);
}
const yc = ["Force-directed", "Circular", "Radial"], Xt = 34, Wt = 200, br = 1.5, vc = 6, $c = 16, ye = {
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
function _c(e) {
  const t = parseInt(e.replace("#", ""), 16);
  return [t >> 16 & 255, t >> 8 & 255, t & 255];
}
function bc(e) {
  const [t, r] = T.netEdgeRamp.map(_c), o = Math.max(0, Math.min(1, e ?? 0.5));
  return `rgb(${t.map((n, s) => Math.round(n + (r[s] - n) * o)).join(",")})`;
}
const Me = Pr, wc = (e, t) => e.length > t ? `${e.slice(0, t - 1)}...` : e;
function Sc(e, t) {
  const r = Ze(t, e.componentA, "SmallMoleculeComponentViz"), o = Ze(t, e.componentB, "SmallMoleculeComponentViz");
  return !r || !o ? null : { ...e, registry: r["gufe-key"] === o["gufe-key"] ? [r] : [r, o] };
}
class Ec extends Ae {
  placeholder() {
    return "Waiting for a LigandNetwork payload...";
  }
  renderView(t, r) {
    const o = Fr(r), l = [];
    let n = 0;
    for (const A of r.nodes ?? []) {
      const N = Ze(o, A, "SmallMoleculeComponentViz");
      if (!N) {
        n++;
        continue;
      }
      l.push({ ...N, x: 0, y: 0 });
    }
    const s = new Map(l.map((A) => [A["gufe-key"], A])), a = [];
    let u = 0;
    for (const A of r.edges ?? []) {
      const N = s.get(A.componentA), x = s.get(A.componentB);
      if (!N || !x) {
        u++;
        continue;
      }
      a.push({ ...A, index: a.length, from: N, to: x });
    }
    const y = He(r.name || "Ligand network", "LigandNetwork");
    y.statsEl.appendChild(pe("ligands", String(l.length))), y.statsEl.appendChild(pe("mappings", String(a.length))), t.appendChild(y);
    const m = F("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    t.appendChild(m);
    const _ = F("div", `flex:1 1 58%;min-width:0;display:flex;flex-direction:column;background:${T.netCanvasBg};`), b = F("div", `flex:1 1 42%;min-width:0;display:flex;flex-direction:column;background:${T.appBg};`);
    m.appendChild(_), m.appendChild(F("div", `width:1px;flex-shrink:0;background:${T.splitBorder};`)), m.appendChild(b);
    const w = F("div", `flex:1;position:relative;overflow:hidden;min-height:0;background:${T.netCanvasBg};`);
    _.appendChild(w);
    const E = this.#r(
      (A) => C(A),
      () => p()
    );
    _.appendChild(E.bar);
    const S = this.#e(b, o);
    if (!l.length)
      return w.appendChild(
        se(
          n ? "None of this network's ligands are in its registry." : "This network has no ligands."
        )
      ), S.message("Nothing to show."), {};
    n && Yt(
      w,
      `${n} ligand${n === 1 ? "" : "s"} named by this network are not in its registry`
    ), u && Yt(w, `${u} mapping${u === 1 ? "" : "s"} name a ligand this network does not contain`);
    const f = Dr().catch((A) => (console.warn("[gufe-viz] RDKit failed to load:", he(A)), null));
    let g = a.length ? 0 : -1, d = null, h = "Force-directed", $ = !1, i = !0, c = () => {
    }, p = () => {
    };
    const P = (A) => {
      g = A, S.show(a[A] ?? null), c();
    }, C = (A = h) => {
      h = A, d?.(), d = null, w.querySelector("svg")?.remove();
      const N = w.clientWidth || 800, x = w.clientHeight || 600;
      kc(l, N, x, h, a);
      const q = () => {
        if (!i) return;
        const U = this.#n(w, l, a, N, x, P);
        c = () => U.setSelected(g), p = U.reset, d = U.cleanup, c(), f.then((Q) => Q && U.depict(Q)).catch(() => {
        });
      };
      if (h !== "Force-directed" || $) {
        q();
        return;
      }
      Pc(l, a, N, x).then((U) => {
        if (i) {
          if (U) {
            q();
            return;
          }
          $ = !0, E.picker.value = "Circular", Yt(w, "d3 could not be loaded - showing the circular layout instead"), C("Circular");
        }
      }, q);
    };
    return C(), S.show(a[g] ?? null), {
      onResize: () => C(),
      cleanup: () => {
        i = !1, d?.();
      }
    };
  }
  #r(t, r) {
    const o = F(
      "div",
      `display:flex;align-items:center;gap:10px;flex-wrap:wrap;padding:8px 14px;flex-shrink:0;background:${T.toolbarBg};border-top:1px solid ${T.toolbarBorder};`
    ), l = F("div", `display:flex;align-items:center;gap:6px;font-size:11px;color:${T.textMuted};`);
    l.appendChild(F("span", "", "score")), l.appendChild(
      F(
        "span",
        `width:40px;height:4px;border-radius:2px;background:linear-gradient(to right,${T.netEdgeRamp.join(",")});`
      )
    ), l.appendChild(F("span", "", "0 -> 1")), o.appendChild(l), o.appendChild(F("label", `font-size:12px;margin-left:auto;color:${T.textMuted};`, "Layout"));
    const n = F("select", Ro);
    for (const s of yc) {
      const a = F("option", "", s);
      a.value = s, n.appendChild(a);
    }
    return n.onchange = () => t(n.value), o.appendChild(n), o.appendChild(Vr(r, "Reset pan and zoom")), { bar: o, picker: n };
  }
  /** The right-hand pane: what the selected mapping is, in words and pictures. */
  #e(t, r) {
    const o = F(
      "div",
      `flex-shrink:0;padding:4px 10px;font-size:12px;font-weight:bold;color:${T.labelFg};background:${T.labelBg};`,
      "Selected mapping"
    ), l = F("div", "flex:1;min-height:0;overflow:auto;display:flex;flex-direction:column;");
    t.appendChild(o), t.appendChild(l);
    const n = (a) => l.replaceChildren(se(a));
    return { show: (a) => {
      if (!a) {
        n("Click an edge to see its mapping.");
        return;
      }
      l.replaceChildren();
      const u = F(
        "div",
        `padding:10px 14px;font-size:13px;font-weight:600;color:${T.textPrimary};border-bottom:1px solid ${T.toolbarBorder};`,
        `${Me(a.from)} -> ${Me(a.to)}`
      );
      l.appendChild(u);
      const y = Sc(a, r), m = document.createElement("gufe-atom-mapping");
      m.style.cssText = "flex:1;min-width:0;min-height:220px;display:flex;", m.payload = y, l.appendChild(m);
      const _ = Object.entries(a.annotations ?? {}).filter(([b]) => b !== "score");
      if (_.length) {
        const b = F(
          "div",
          `padding:0 14px 12px;font-size:11px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;color:${T.textMuted2};`
        );
        for (const [w, E] of _)
          b.appendChild(F("div", "", `${w}: ${String(E)}`));
        l.appendChild(b);
      }
    }, message: n };
  }
  /** Build the SVG for the current node positions. Returns the handles the
   * caller needs afterwards: selection, depictions, and teardown. */
  #n(t, r, o, l, n, s) {
    const a = oe("svg", { width: l, height: n, style: "display:block;touch-action:none;" }), u = oe("g");
    a.appendChild(u), t.appendChild(a);
    const y = [], m = oe("g"), _ = oe("g"), b = oe("g", { "pointer-events": "none" }), w = oe("g");
    u.append(m, _, b, w);
    for (const h of o) {
      const $ = bc(h.score), i = oe("line", {
        stroke: T.netHaloColor,
        "stroke-width": br + 12,
        "stroke-linecap": "round",
        opacity: 0,
        "pointer-events": "none"
      }), c = oe("line", {
        stroke: $,
        "stroke-width": br + (h.score ?? 0.5) * (vc - br),
        "stroke-opacity": 0.9,
        "pointer-events": "none"
      }), p = tr(
        oe("line", { stroke: "transparent", "stroke-width": $c, style: "cursor:pointer;" }),
        `${Me(h.from)} -> ${Me(h.to)}${h.score == null ? "" : `
score ${h.score.toFixed(3)}`}`
      );
      if (p.addEventListener("click", (P) => {
        P.stopPropagation(), s(h.index);
      }), y.push(i), m.append(i, c), _.appendChild(p), h.score != null) {
        const P = oe("text", {
          "text-anchor": "middle",
          "dominant-baseline": "middle",
          "font-size": 10,
          "font-weight": 600,
          fill: T.netEdgeLabel
        });
        P.textContent = h.score.toFixed(2), b.appendChild(P);
      } else
        b.appendChild(oe("text"));
    }
    const E = [], S = [], f = r.map((h) => {
      const $ = tr(oe("g", { style: "cursor:grab;" }), `${Me(h)}
${h.smiles ?? ""}
${h["gufe-key"]}`);
      $.appendChild(
        oe("circle", {
          r: Xt,
          fill: T.netNodeFill,
          stroke: T.netNodeStroke,
          "stroke-width": 1.5
        })
      );
      const i = oe("g", { "pointer-events": "none" });
      $.appendChild(i), E.push(i);
      const c = oe("text", {
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        "font-size": 16,
        "font-weight": 700,
        fill: T.netInitials,
        "pointer-events": "none"
      });
      c.textContent = Me(h).slice(0, 2).toUpperCase(), $.appendChild(c), S.push(c);
      const p = oe("text", {
        "text-anchor": "middle",
        y: Xt + 14,
        "font-size": 11,
        "font-weight": 600,
        fill: T.netNodeLabel,
        "pointer-events": "none"
      });
      return p.textContent = wc(Me(h), 16), $.appendChild(p), w.appendChild($), $;
    }), g = () => {
      o.forEach((h, $) => {
        for (const c of [y[$], m.children[$ * 2 + 1], _.children[$]]) {
          const p = c;
          p.setAttribute("x1", String(h.from.x)), p.setAttribute("y1", String(h.from.y)), p.setAttribute("x2", String(h.to.x)), p.setAttribute("y2", String(h.to.y));
        }
        const i = b.children[$];
        i.setAttribute("x", String((h.from.x + h.to.x) / 2)), i.setAttribute("y", String((h.from.y + h.to.y) / 2 - 8));
      }), r.forEach((h, $) => f[$].setAttribute("transform", `translate(${h.x},${h.y})`));
    };
    g();
    const d = this.#t(a, u, r, f, g);
    return {
      setSelected(h) {
        y.forEach(($, i) => $.setAttribute("opacity", i === h ? "0.95" : "0"));
      },
      depict(h) {
        const $ = (Xt - 4) * 2 / Wt, i = new DOMParser();
        let c = 0;
        return r.forEach((p, P) => {
          const C = p.sdf && Go(h, p.sdf, Wt);
          if (!C) return;
          const A = i.parseFromString(C, "image/svg+xml").documentElement;
          if (!A || A.nodeName.toLowerCase() === "parsererror") return;
          const N = E[P];
          N.setAttribute(
            "transform",
            `translate(${-$ * Wt / 2},${-$ * Wt / 2}) scale(${$})`
          );
          let x = 0;
          for (const q of Array.from(A.childNodes)) {
            if (q.nodeType !== 1) continue;
            const U = q.nodeName.toLowerCase();
            if (!(U === "defs" || U === "metadata" || U === "title")) {
              if (U === "rect") {
                const Q = (q.getAttribute("fill") ?? "").toLowerCase();
                if (Q === "#ffffff" || Q === "white" || Q === "rgb(255,255,255)") continue;
              }
              N.appendChild(document.importNode(q, !0)), x++;
            }
          }
          x && (S[P].setAttribute("display", "none"), c++);
        }), c;
      },
      reset: d.reset,
      cleanup: d.cleanup
    };
  }
  /** Wheel zoom, background pan, node drag - ~40 lines instead of d3-zoom and
   * d3-drag, and they keep working when d3 is unreachable. */
  #t(t, r, o, l, n) {
    let s = 1, a = 0, u = 0;
    const y = () => r.setAttribute("transform", `translate(${a},${u}) scale(${s})`), _ = Uo(t, {
      onZoom: (f) => {
        const g = t.getBoundingClientRect(), d = f.clientX - g.left, h = f.clientY - g.top, $ = Math.min(5 / s, Math.max(0.15 / s, Math.exp(-f.deltaY * 2e-3)));
        a = d - (d - a) * $, u = h - (h - u) * $, s *= $, y();
      },
      hint: "Click the graph or hold Ctrl to zoom"
    });
    let b = null;
    const w = (f) => {
      b = { x: f.clientX - a, y: f.clientY - u };
    }, E = (f) => {
      b && (a = f.clientX - b.x, u = f.clientY - b.y, y());
    }, S = () => {
      b = null;
    };
    return t.addEventListener("pointerdown", w), t.addEventListener("pointermove", E), t.addEventListener("pointerup", S), t.addEventListener("pointercancel", S), t.addEventListener("pointerleave", S), l.forEach((f, g) => {
      let d = null;
      f.addEventListener("pointerdown", ($) => {
        $.stopPropagation(), d = { x: $.clientX - o[g].x * s, y: $.clientY - o[g].y * s }, f.setPointerCapture($.pointerId);
      }), f.addEventListener("pointermove", ($) => {
        d && (o[g].x = o[g].fx = ($.clientX - d.x) / s, o[g].y = o[g].fy = ($.clientY - d.y) / s, n());
      });
      const h = () => {
        d = null;
      };
      f.addEventListener("pointerup", h), f.addEventListener("pointercancel", h);
    }), {
      reset() {
        s = 1, a = 0, u = 0, y();
      },
      cleanup() {
        _.cleanup(), t.removeEventListener("pointerdown", w), t.removeEventListener("pointermove", E), t.removeEventListener("pointerup", S), t.removeEventListener("pointercancel", S), t.removeEventListener("pointerleave", S);
      }
    };
  }
}
function kc(e, t, r, o, l) {
  const n = t / 2, s = r / 2, a = (u, y) => {
    u.forEach((m, _) => {
      const b = 2 * Math.PI * _ / Math.max(1, u.length) - Math.PI / 2;
      m.x = n + y * Math.cos(b), m.y = s + y * Math.sin(b), m.fx = o === "Force-directed" ? void 0 : m.x, m.fy = o === "Force-directed" ? void 0 : m.y;
    });
  };
  if (o === "Radial" && e.length) {
    const u = new Map(e.map((S) => [S["gufe-key"], []]));
    for (const S of l)
      u.get(S.from["gufe-key"]).push(S.to["gufe-key"]), u.get(S.to["gufe-key"]).push(S.from["gufe-key"]);
    const y = new Map(e.map((S) => [S["gufe-key"], S])), m = e.reduce(
      (S, f) => u.get(f["gufe-key"]).length > u.get(S["gufe-key"]).length ? f : S
    ), _ = /* @__PURE__ */ new Set([m["gufe-key"]]);
    let b = [m["gufe-key"]], w = 0;
    const E = Math.min(t, r) * 0.18;
    for (; b.length; ) {
      a(
        b.map((f) => y.get(f)),
        w === 0 ? 0 : w * E + 40
      );
      const S = [];
      for (const f of b)
        for (const g of u.get(f))
          _.has(g) || (_.add(g), S.push(g));
      b = S, w++;
    }
    a(e.filter((S) => !_.has(S["gufe-key"])), Math.min(t, r) * 0.45);
    return;
  }
  a(e, Math.min(t, r) * 0.34);
}
async function Pc(e, t, r, o) {
  let l;
  try {
    if (l = await Wa(), typeof l?.forceSimulation != "function") return !1;
  } catch {
    return !1;
  }
  const n = t.map((u) => ({ source: u.from["gufe-key"], target: u.to["gufe-key"], score: u.score })), s = l.forceSimulation(e).force(
    "link",
    l.forceLink(n).id((u) => u["gufe-key"]).distance((u) => ye.linkBaseDistance + (1 - (u.score ?? 0.5)) * ye.linkScoreBonus).strength(ye.linkStrength)
  ).force(
    "charge",
    l.forceManyBody().strength(ye.chargeStrength).distanceMin(ye.chargeDistanceMin).distanceMax(ye.chargeDistanceMax)
  ).force("center", l.forceCenter(r / 2, o / 2).strength(ye.centerStrength)).force("collision", l.forceCollide(Xt + ye.collisionPadding).iterations(ye.collisionIterations)).force("x", l.forceX(r / 2).strength(ye.drift)).force("y", l.forceY(o / 2).strength(ye.drift)).stop(), a = Math.ceil(Math.log(s.alphaMin()) / Math.log(1 - s.alphaDecay()));
  for (let u = 0; u < a * ye.tickMultiplier; u++) s.tick();
  return !0;
}
Ne("gufe-ligand-network", Ec);
const Po = 420, Cc = [
  { id: "changes", label: "Changes", title: "Highlight what differs, as gufe draws it" },
  { id: "mapped", label: "Mapped", title: "Highlight the atoms that carry over instead" }
];
function Zo(e) {
  const t = parseInt(e.replace("#", ""), 16);
  return [(t >> 16 & 255) / 255, (t >> 8 & 255) / 255, (t & 255) / 255];
}
const Rc = Zo(Ie.elementChange), Ac = Zo(Ie.uniqueAtom);
function Co(e, t, r) {
  const o = [], l = [], n = [];
  for (let s = 0; s < t.length; s++) {
    const a = e.get(s);
    a === void 0 ? o.push(s) : t[s] !== r[a] ? l.push(s) : n.push(s);
  }
  return { atoms: o, elements: l, mapped: n };
}
function Nc(e, t) {
  if (t === "mapped")
    return { atoms: [...e.mapped, ...e.elements], colors: {} };
  const r = {};
  for (const o of e.elements) r[o] = Rc;
  for (const o of e.atoms) r[o] = Ac;
  return { atoms: [...e.elements, ...e.atoms], colors: r };
}
function xc(e) {
  const t = /* @__PURE__ */ new Map();
  for (const r of e.componentA_to_componentB ?? [])
    Number.isInteger(r?.index_A) && Number.isInteger(r?.index_B) && t.set(r.index_A, r.index_B);
  return t;
}
class jc extends Ae {
  placeholder() {
    return "Waiting for a LigandAtomMapping payload...";
  }
  renderView(t, r) {
    const o = Fr(r), l = Ze(o, r.componentA, "SmallMoleculeComponentViz"), n = Ze(o, r.componentB, "SmallMoleculeComponentViz"), s = He(r.name || "Atom mapping", "LigandAtomMapping");
    if (t.appendChild(s), !l || !n)
      return t.appendChild(
        se("This mapping names two molecules, and its registry does not hold them.")
      ), {};
    const a = Pr(l), u = Pr(n), y = xc(r);
    let m, _;
    try {
      m = bo(l.sdf, a).symbols, _ = bo(n.sdf, u).symbols;
    } catch (N) {
      return t.appendChild(se(`Could not read a molecule: ${he(N)}`, !0)), {};
    }
    const b = /* @__PURE__ */ new Map();
    for (const [N, x] of y) b.set(x, N);
    const w = Co(y, m, _), E = Co(b, _, m);
    let S = "changes";
    s.statsEl.appendChild(pe("mapped atoms", String(y.size))), s.statsEl.appendChild(
      pe("element changes", String(w.elements.length), Ie.elementChange)
    ), s.statsEl.appendChild(
      pe(`unique to ${a}`, String(w.atoms.length), Ie.uniqueAtom)
    ), s.statsEl.appendChild(
      pe(`unique to ${u}`, String(E.atoms.length), Ie.uniqueAtom)
    ), s.statsEl.appendChild(pe("score", r.score == null ? Ue : r.score.toFixed(3)));
    const f = F(
      "div",
      `display:flex;align-items:center;gap:12px;flex-wrap:wrap;padding:7px 14px;flex-shrink:0;font-size:12px;background:${T.toolbarBg};border-bottom:1px solid ${T.toolbarBorder};color:${T.textMuted};`
    );
    f.appendChild(F("span", `font-size:11px;color:${T.textMuted};`, "Highlight:")), f.appendChild(
      Cr(Cc, S, (N) => {
        S = N, A();
      })
    );
    const g = F("div", "display:flex;align-items:center;gap:12px;margin-left:auto;font-size:11px;");
    g.appendChild(pe("element change", "", Ie.elementChange)), g.appendChild(pe("unique atom", "", Ie.uniqueAtom)), f.appendChild(g), t.appendChild(f);
    const d = F("div", "flex:1;min-height:0;display:flex;flex-direction:row;");
    t.appendChild(d);
    const h = (N) => {
      const x = F("div", "flex:1 1 50%;min-width:0;display:flex;flex-direction:column;");
      x.appendChild(
        F(
          "div",
          `flex-shrink:0;padding:4px 10px;font-size:12px;font-weight:bold;color:${T.labelFg};background:${T.labelBg};`,
          N
        )
      );
      const q = F(
        "div",
        `flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:8px;background:${T.canvas2DBg};`
      );
      return x.appendChild(q), d.appendChild(x), q;
    }, $ = h(a);
    d.appendChild(F("div", `width:1px;flex-shrink:0;background:${T.splitBorder};`));
    const i = h(u), c = F(
      "div",
      `flex-shrink:0;max-height:96px;overflow:auto;padding:8px 14px;font-size:11px;line-height:1.6;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;color:${T.textMuted};background:${T.panelBg};border-top:1px solid ${T.toolbarBorder};`
    );
    c.textContent = y.size ? Array.from(y, ([N, x]) => `${N} -> ${x}`).join("   ") : "This mapping relates no atoms at all.", t.appendChild(c);
    const p = Object.entries(r.annotations ?? {}).filter(([N]) => N !== "score");
    if (p.length) {
      const N = F(
        "div",
        `flex-shrink:0;padding:6px 14px;font-size:11px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;color:${T.textMuted2};background:${T.panelBg};border-top:1px solid ${T.toolbarBorder};`
      );
      N.textContent = p.map(([x, q]) => `${x}: ${String(q)}`).join("    "), t.appendChild(N);
    }
    let P = null;
    const C = (N, x, q) => {
      if (!P) return;
      const { atoms: U, colors: Q } = Nc(q, S), te = ic(P, x, Po, U, Q);
      N.replaceChildren(), te ? Jo(N, te, Po) : N.appendChild(se("Failed to parse molecule", !0));
    }, A = () => {
      C($, l.sdf, w), C(i, n.sdf, E);
    };
    return $.appendChild(se("Loading 2D depiction...")), i.appendChild(se("Loading 2D depiction...")), Dr().then((N) => {
      P = N, A();
    }).catch((N) => {
      const x = `RDKit failed to load: ${he(N)}`;
      $.replaceChildren(se(x, !0)), i.replaceChildren(se(x, !0));
    }), {};
  }
}
Ne("gufe-atom-mapping", jc);
function Oc(e) {
  return e.name || e.type.replace(/Viz$/, "");
}
function Mc(e) {
  return e.type === "UnknownComponentViz" ? e.gufe_type : e.type.replace(/Viz$/, "");
}
class Tc extends Ae {
  placeholder() {
    return "Waiting for a ChemicalSystem payload...";
  }
  renderView(t, r) {
    const o = Fr(r), l = [], n = [];
    for (const [E, S] of Object.entries(r.components ?? {})) {
      const f = Xo(o, S);
      f ? l.push([E, f]) : n.push(E);
    }
    const s = He(r.name || "Chemical system", "ChemicalSystem");
    if (s.statsEl.appendChild(pe("components", String(l.length))), t.appendChild(s), !l.length)
      return t.appendChild(
        se(
          n.length ? "None of this system's components are in its registry." : "This chemical system has no components."
        )
      ), {};
    const a = F("div", "flex:1;min-height:0;position:relative;display:flex;flex-direction:row;");
    t.appendChild(a), n.length && Yt(
      a,
      `${n.length} component${n.length === 1 ? "" : "s"} named by this system (${n.join(", ")}) are not in its registry`
    );
    const u = F(
      "div",
      `flex:0 0 220px;min-width:0;overflow:auto;display:flex;flex-direction:column;gap:6px;padding:10px;background:${T.panelBg};border-right:1px solid ${T.splitBorder};`
    );
    a.appendChild(u);
    const y = F("div", "flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;");
    a.appendChild(y);
    const m = F("div", "flex:1;min-height:0;display:flex;");
    y.appendChild(m);
    const _ = document.createElement("gufe-view");
    _.style.cssText = "flex:1;min-width:0;min-height:0;", m.appendChild(_);
    const b = [], w = (E) => {
      b.forEach((S, f) => {
        const g = f === E;
        S.style.background = g ? T.cardBgActive : T.cardBg, S.style.borderColor = g ? T.cardBorderActive : T.cardBorder;
      }), _.payload = l[E][1];
    };
    return l.forEach(([E, S], f) => {
      const g = F(
        "button",
        `display:flex;flex-direction:column;align-items:flex-start;gap:4px;padding:8px 10px;text-align:left;border:1px solid ${T.cardBorder};border-radius:8px;background:${T.cardBg};cursor:pointer;font-family:inherit;font-size:12px;width:100%;`
      );
      g.appendChild(F("span", `font-weight:700;color:${T.textPrimary};`, E)), g.appendChild(F("span", `font-size:11px;color:${T.textMuted};`, Oc(S))), g.appendChild(Ao(Mc(S))), g.onclick = () => w(f), b.push(g), u.appendChild(g);
    }), w(0), {
      onResize: () => _.resize?.(),
      // Removing the nested view fires its own `disconnectedCallback`, which is
      // where whatever it mounted releases its viewers.
      cleanup: () => _.remove()
    };
  }
}
Ne("gufe-chemical-system", Tc);
const be = { width: 340, height: 260, padding: 14, radius: 12 }, Ic = 150, zc = 40, qc = 24;
function Dc(e) {
  let t = e >>> 0;
  return () => (t = t * 1664525 + 1013904223 >>> 0, t / 4294967296);
}
function Vc(e) {
  const t = /-?\d+(\.\d+)?([eE][-+]?\d+)?/.exec(e ?? "");
  if (!t) return null;
  const r = Number(t[0]);
  return Number.isFinite(r) ? r : null;
}
function Fc(e) {
  return e == null || e <= 0 ? 0 : Math.max(1, Math.min(qc, Math.round(e * zc)));
}
function Bc(e) {
  const t = oe("svg", {
    viewBox: `0 0 ${be.width} ${be.height}`,
    style: "width:100%;height:100%;max-width:100%;",
    role: "img"
  });
  tr(t, `${e.smiles || "solvent"} box`), t.appendChild(
    oe("rect", {
      x: 1,
      y: 1,
      width: be.width - 2,
      height: be.height - 2,
      rx: be.radius,
      fill: T.boxFill,
      stroke: T.boxStroke,
      "stroke-width": 1.5
    })
  );
  const r = Dc(1597463007), o = () => ({
    x: be.padding + r() * (be.width - 2 * be.padding),
    y: be.padding + r() * (be.height - 2 * be.padding)
  });
  for (let s = 0; s < Ic; s++) {
    const { x: a, y: u } = o();
    t.appendChild(oe("circle", { cx: a, cy: u, r: 2.4, fill: T.textMuted2, "fill-opacity": 0.45 }));
  }
  const l = Fc(Vc(e.ion_concentration)), n = [
    [e.positive_ion, T.diffAdded],
    [e.negative_ion, T.diffRemoved]
  ];
  for (const [s, a] of n)
    for (let u = 0; u < l; u++) {
      const { x: y, y: m } = o(), _ = oe("circle", { cx: y, cy: m, r: 5.5, fill: a, "fill-opacity": 0.85 });
      t.appendChild(tr(_, s));
    }
  return t;
}
class Lc extends Ae {
  placeholder() {
    return "Waiting for a SolventComponent payload...";
  }
  renderView(t, r) {
    const o = He(r.name || "Solvent", "SolventComponent");
    o.statsEl.appendChild(pe("neutralized", r.neutralize ? "yes" : "no")), o.statsEl.appendChild(pe(r.positive_ion, "", T.diffAdded)), o.statsEl.appendChild(pe(r.negative_ion, "", T.diffRemoved)), t.appendChild(o);
    const l = F(
      "div",
      "flex:1;min-height:0;display:flex;flex-wrap:wrap;gap:16px;padding:16px;overflow:auto;align-items:flex-start;"
    );
    t.appendChild(l);
    const n = wr();
    n.style.flex = "1 1 320px", n.appendChild(Te("SMILES", r.smiles, !0)), n.appendChild(Te("Positive ion", r.positive_ion)), n.appendChild(Te("Negative ion", r.negative_ion)), n.appendChild(Te("Ion concentration", r.ion_concentration)), n.appendChild(Te("Neutralize", r.neutralize ? "yes" : "no")), l.appendChild(n);
    const s = wr();
    return s.style.flex = "1 1 340px", s.style.alignItems = "center", s.appendChild(Bc(r)), s.appendChild(
      F(
        "div",
        `padding-top:10px;font-size:11px;text-align:center;color:${T.textMuted2};`,
        "Schematic only: the dots show which ions are present, not how many."
      )
    ), l.appendChild(s), {};
  }
}
Ne("gufe-solvent", Lc);
class Uc extends Ae {
  placeholder() {
    return "Waiting for a component payload...";
  }
  renderView(t, r) {
    const o = He(r.name || "Unnamed component", "Component");
    o.statsEl.appendChild(Ao(r.gufe_type)), t.appendChild(o);
    const l = F("div", "flex:1;min-height:0;overflow:auto;display:flex;align-items:center;justify-content:center;padding:24px;");
    t.appendChild(l);
    const n = wr();
    return n.style.maxWidth = "460px", n.appendChild(
      F(
        "div",
        `font-size:14px;font-weight:600;padding-bottom:6px;color:${T.textPrimary};`,
        `There is no visualization for ${r.gufe_type}.`
      )
    ), n.appendChild(
      F(
        "div",
        `font-size:12px;line-height:1.6;padding-bottom:10px;color:${T.textMuted};`,
        "gufe lets a project define its own Component subclasses, so this is a component this build has never been taught to draw - not a broken payload. Everything gufe knows about it that survives serialization is below."
      )
    ), n.appendChild(Te("Name", r.name || "(unnamed)")), n.appendChild(Te("gufe class", r.gufe_type, !0)), l.appendChild(n), {};
  }
}
Ne("gufe-unknown-component", Uc);
function Zc(e, t) {
  let r = e.querySelector("gufe-view");
  return r || (r = document.createElement("gufe-view"), r.style.cssText = "display:block;width:100%;height:100%;", e.appendChild(r)), t !== void 0 && (r.payload = t), r;
}
export {
  ts as CHROME_OPEN_BY_DEFAULT,
  os as DEBUG_ATTRIBUTE,
  ss as DEBUG_GLOBAL,
  Za as DEFAULT_ZOOM_BOUNDS,
  jc as GufeAtomMapping,
  Tc as GufeChemicalSystem,
  Ae as GufeElement,
  Ec as GufeLigandNetwork,
  gc as GufeProtein,
  cc as GufeSmallMolecule,
  Lc as GufeSolvent,
  Uc as GufeUnknownComponent,
  Ha as GufeView,
  Ie as MAPPING_COLORS,
  Yc as MAPPING_RAMP_3D,
  Xc as MAPPING_RAMP_NAME,
  Hc as PAYLOAD_TYPES,
  Gc as SCHEMA_TYPES,
  Ir as VIEW_TAGS,
  Qa as boundedZoom,
  Fr as buildRegistry,
  Kc as chromeMenu,
  cs as debugEnabled,
  Ne as defineElement,
  Fo as describeProblem,
  Wc as dispatchProblem,
  Pr as entryLabel,
  Ua as formatIssues,
  Uo as guardWheel,
  ds as logPayload,
  Xo as lookup,
  Ze as lookupOfType,
  Sc as mappingPayloadFor,
  Zc as mount,
  Vc as parseConcentration,
  ls as payloadJson,
  Vr as resetControl,
  Co as uniqueAtoms,
  Jc as validateAs,
  La as validatePayload,
  Ko as viewerInteraction,
  tc as wheelFactor
};
