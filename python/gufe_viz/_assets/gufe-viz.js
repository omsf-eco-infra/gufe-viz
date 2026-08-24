const Fr = {
  dark: {
    appBg: "#1a1a2e",
    panelBg: "#16213e",
    cardBg: "#16213e",
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
function Uo() {
  try {
    return globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches ?? !1;
  } catch {
    return !1;
  }
}
const q = Uo() ? Fr.dark : Fr.light;
function B(e, t, o) {
  const n = document.createElement(e);
  return t && (n.style.cssText = t), o != null && (n.textContent = o), n;
}
function Gt(e) {
  return String(e ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function $e(e) {
  if (e == null) return "unknown error";
  const t = e.message;
  if (typeof t == "string" && t) return t;
  const o = String(e);
  return o === "[object Object]" ? e.name || "unknown error" : o;
}
const Ke = (e) => e.toLocaleString("en-US"), Re = "-", Ye = `background:${q.btnBg};color:${q.btnFg};border:1px solid ${q.btnBorder};padding:4px 9px;font-size:11px;font-weight:bold;border-radius:3px;cursor:pointer;font-family:inherit;`, So = `background:${q.selectBg};color:${q.textPrimary};border:1px solid ${q.selectBorder};border-radius:6px;padding:4px 8px;font-size:12px;cursor:pointer;font-family:inherit;`;
function Eo(e, t, o) {
  const n = B("div", "display:flex;gap:4px;"), d = e.map((r) => {
    const a = B("button", Ye, r.label);
    return a.title = r.title || r.label, a.onmouseover = () => {
      a.style.background = q.btnBgHover;
    }, a.onmouseout = () => {
      a.style.background = t === r.id ? q.btnBgActive : q.btnBg;
    }, a.onclick = () => {
      n.setActive(r.id), o(r.id);
    }, n.appendChild(a), { id: r.id, btn: a };
  });
  return n.setActive = (r) => {
    t = r, d.forEach((a) => {
      a.btn.style.background = a.id === t ? q.btnBgActive : q.btnBg;
    });
  }, n.setActive(t), n;
}
function Pe(e, t, o) {
  const n = B("span", "display:inline-flex;align-items:center;gap:5px;white-space:nowrap;");
  o && n.appendChild(
    B("span", `width:8px;height:8px;border-radius:50%;background:${o};display:inline-block;`)
  );
  const d = B("span");
  return d.innerHTML = `${Gt(e)} <b style="color:${q.textPrimary};">${Gt(t)}</b>`, n.appendChild(d), n;
}
function ar(e, t) {
  const o = B("div", "", `⚠ ${t}`);
  return o.style.cssText = `position:absolute;top:10px;left:50%;transform:translateX(-50%);max-width:90%;z-index:20;padding:6px 14px;border-radius:6px;font-size:12px;background:${q.warnBg};color:${q.warnFg};border:1px solid ${q.warnBorder};`, e.appendChild(o), o;
}
function ce(e, t = !1) {
  return B(
    "div",
    `flex:1;display:flex;align-items:center;justify-content:center;text-align:center;padding:24px;font-size:13px;color:${t ? q.errorFg : q.textMuted2};`,
    e
  );
}
function Xt(e, t) {
  const o = B(
    "div",
    `display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;padding:9px 14px;flex-shrink:0;background:${q.toolbarBg};border-bottom:1px solid ${q.toolbarBorder};`
  );
  return o.titleEl = B("span", `font-weight:700;font-size:15px;color:${q.titleColor};letter-spacing:.02em;`, e), o.subtitleEl = B("span", `font-size:12px;color:${q.textMuted2};`, t || ""), o.statsEl = B(
    "div",
    `display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-left:auto;font-size:11px;color:${q.textMuted};`
  ), o.toggleEl = B("div", "display:flex;align-items:center;margin-left:10px;flex-shrink:0;"), o.appendChild(o.titleEl), o.appendChild(o.subtitleEl), o.appendChild(o.statsEl), o.appendChild(o.toggleEl), o;
}
function Te(e, t, o = !1) {
  const n = B("div", "display:flex;gap:12px;align-items:baseline;padding:5px 0;min-width:0;");
  n.appendChild(
    B(
      "span",
      `flex:0 0 128px;font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:${q.textMuted2};`,
      e
    )
  );
  const d = B(
    "span",
    `flex:1;min-width:0;user-select:text;cursor:text;overflow-wrap:anywhere;color:${q.textPrimary};` + (o ? "font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:11px;" : "font-size:12px;"),
    t
  );
  return d.title = t, n.appendChild(d), n;
}
function Ko(e) {
  return B(
    "span",
    `padding:1px 7px;border-radius:10px;font-size:10px;font-weight:700;letter-spacing:.04em;white-space:nowrap;background:${q.badgeBg};color:${q.badgeFg};`,
    e
  );
}
function $r() {
  return B(
    "div",
    `display:flex;flex-direction:column;gap:2px;padding:14px 18px;border-radius:10px;background:${q.cardBg};border:1px solid ${q.cardBorder};`
  );
}
function Po() {
  const e = B("div", "flex:1;position:relative;min-height:0;min-width:0;"), t = B("div", "position:absolute;inset:0;");
  return t.dataset.gufeViewer = "", e.appendChild(t), { wrap: e, container: t };
}
const Ho = !1;
function Go() {
  const e = B("span", "display:inline-flex;flex-direction:column;gap:2px;justify-content:center;");
  for (let t = 0; t < 3; t++)
    e.appendChild(B("span", `display:block;width:11px;height:1.5px;border-radius:1px;background:${q.btnFg};`));
  return e;
}
function kc(e, t, o = {}) {
  let n = o.open ?? Ho, d = !1;
  const r = B("div", "flex-shrink:0;"), a = B("button", `${Ye}display:inline-flex;align-items:center;gap:6px;padding:4px 8px;`);
  a.appendChild(Go()), a.setAttribute("aria-label", o.label || "Toggle menu");
  const i = () => {
    n && !d && (d = !0, r.appendChild(t())), r.style.display = n ? "" : "none", a.style.background = n ? q.btnBgActive : q.btnBg, a.setAttribute("aria-expanded", String(n));
  }, f = (g) => {
    g !== n && (n = g, i(), o.onToggle?.(n));
  };
  return a.onclick = () => f(!n), a.onmouseover = () => {
    a.style.background = n ? q.btnBgActive : q.btnBgHover;
  }, a.onmouseout = () => {
    a.style.background = n ? q.btnBgActive : q.btnBg;
  }, e.toggleEl.appendChild(a), i(), {
    panel: r,
    isOpen: () => n,
    setOpen: f
  };
}
const Jo = ["debug", "gufe-debug"], Wo = "debug", Yo = "GUFE_VIZ_DEBUG";
function Xo() {
  return !!globalThis[Yo];
}
function Zo() {
  try {
    const e = globalThis.location?.search;
    if (!e) return !1;
    const t = new URLSearchParams(e);
    return Jo.some((o) => t.has(o));
  } catch {
    return !1;
  }
}
function Qo(e) {
  return e?.hasAttribute?.(Wo) ? !0 : Xo() || Zo();
}
function es(e) {
  try {
    return JSON.stringify(e, null, 2) ?? String(e);
  } catch (t) {
    return `<could not be stringified: ${$e(t)}>`;
  }
}
function ts(e, t, o) {
  if (!Qo(o)) return;
  const n = es(t), d = t?.type, r = `[gufe-viz] ${e}${typeof d == "string" ? ` ${d}` : ""} (${n.length} chars)`, a = typeof console.groupCollapsed == "function";
  a ? console.groupCollapsed(r) : console.log(r), console.log(n), console.log(t), a && console.groupEnd?.();
}
const rs = 150;
class Be extends HTMLElement {
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
    this.style.display = "block", this.style.width = this.style.width || "100%", this.style.height = this.style.height || "100%", this.style.background = q.appBg, this.style.color = q.textPrimary, this.style.fontFamily = "'Inter',system-ui,sans-serif", typeof ResizeObserver < "u" && !this.#t && (this.#t = new ResizeObserver(() => {
      this.#o && clearTimeout(this.#o), this.#o = setTimeout(() => this.#e?.onResize?.(), rs);
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
    return this.#a(), this.#n = B(
      "div",
      `width:100%;height:100%;display:flex;flex-direction:column;overflow:hidden;background:${q.appBg};`
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
    } catch (d) {
      this.#l(t, o, d);
      return;
    }
    n instanceof Promise ? n.then(
      (d) => this.#c(d, o),
      (d) => this.#l(t, o, d)
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
function Le(e, t) {
  typeof customElements > "u" || customElements.get(e) || customElements.define(e, t);
}
function ns(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Xe = { exports: {} }, ir = {}, we = {}, Ne = {}, cr = {}, lr = {}, dr = {}, Br;
function Jt() {
  return Br || (Br = 1, (function(e) {
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
        return (l = this._str) !== null && l !== void 0 ? l : this._str = this._items.reduce((h, $) => `${h}${$}`, "");
      }
      get names() {
        var l;
        return (l = this._names) !== null && l !== void 0 ? l : this._names = this._items.reduce((h, $) => ($ instanceof o && (h[$.str] = (h[$.str] || 0) + 1), h), {});
      }
    }
    e._Code = n, e.nil = new n("");
    function d(m, ...l) {
      const h = [m[0]];
      let $ = 0;
      for (; $ < l.length; )
        i(h, l[$]), h.push(m[++$]);
      return new n(h);
    }
    e._ = d;
    const r = new n("+");
    function a(m, ...l) {
      const h = [b(m[0])];
      let $ = 0;
      for (; $ < l.length; )
        h.push(r), i(h, l[$]), h.push(r, b(m[++$]));
      return f(h), new n(h);
    }
    e.str = a;
    function i(m, l) {
      l instanceof n ? m.push(...l._items) : l instanceof o ? m.push(l) : m.push(w(l));
    }
    e.addCodeArg = i;
    function f(m) {
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
    function v(m, l) {
      return l.emptyStr() ? m : m.emptyStr() ? l : a`${m}${l}`;
    }
    e.strConcat = v;
    function w(m) {
      return typeof m == "number" || typeof m == "boolean" || m === null ? m : b(Array.isArray(m) ? m.join(",") : m);
    }
    function S(m) {
      return new n(b(m));
    }
    e.stringify = S;
    function b(m) {
      return JSON.stringify(m).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    e.safeStringify = b;
    function E(m) {
      return typeof m == "string" && e.IDENTIFIER.test(m) ? new n(`.${m}`) : d`[${m}]`;
    }
    e.getProperty = E;
    function _(m) {
      if (typeof m == "string" && e.IDENTIFIER.test(m))
        return new n(`${m}`);
      throw new Error(`CodeGen: invalid export name: ${m}, use explicit $id name mapping`);
    }
    e.getEsmExportName = _;
    function u(m) {
      return new n(m.toString());
    }
    e.regexpCode = u;
  })(dr)), dr;
}
var ur = {}, Lr;
function Ur() {
  return Lr || (Lr = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0;
    const t = /* @__PURE__ */ Jt();
    class o extends Error {
      constructor(g) {
        super(`CodeGen: "code" for ${g} not defined`), this.value = g.value;
      }
    }
    var n;
    (function(f) {
      f[f.Started = 0] = "Started", f[f.Completed = 1] = "Completed";
    })(n || (e.UsedValueState = n = {})), e.varKinds = {
      const: new t.Name("const"),
      let: new t.Name("let"),
      var: new t.Name("var")
    };
    class d {
      constructor({ prefixes: g, parent: v } = {}) {
        this._names = {}, this._prefixes = g, this._parent = v;
      }
      toName(g) {
        return g instanceof t.Name ? g : this.name(g);
      }
      name(g) {
        return new t.Name(this._newName(g));
      }
      _newName(g) {
        const v = this._names[g] || this._nameGroup(g);
        return `${g}${v.index++}`;
      }
      _nameGroup(g) {
        var v, w;
        if (!((w = (v = this._parent) === null || v === void 0 ? void 0 : v._prefixes) === null || w === void 0) && w.has(g) || this._prefixes && !this._prefixes.has(g))
          throw new Error(`CodeGen: prefix "${g}" is not allowed in this scope`);
        return this._names[g] = { prefix: g, index: 0 };
      }
    }
    e.Scope = d;
    class r extends t.Name {
      constructor(g, v) {
        super(v), this.prefix = g;
      }
      setValue(g, { property: v, itemIndex: w }) {
        this.value = g, this.scopePath = (0, t._)`.${new t.Name(v)}[${w}]`;
      }
    }
    e.ValueScopeName = r;
    const a = (0, t._)`\n`;
    class i extends d {
      constructor(g) {
        super(g), this._values = {}, this._scope = g.scope, this.opts = { ...g, _n: g.lines ? a : t.nil };
      }
      get() {
        return this._scope;
      }
      name(g) {
        return new r(g, this._newName(g));
      }
      value(g, v) {
        var w;
        if (v.ref === void 0)
          throw new Error("CodeGen: ref must be passed in value");
        const S = this.toName(g), { prefix: b } = S, E = (w = v.key) !== null && w !== void 0 ? w : v.ref;
        let _ = this._values[b];
        if (_) {
          const l = _.get(E);
          if (l)
            return l;
        } else
          _ = this._values[b] = /* @__PURE__ */ new Map();
        _.set(E, S);
        const u = this._scope[b] || (this._scope[b] = []), m = u.length;
        return u[m] = v.ref, S.setValue(v, { property: b, itemIndex: m }), S;
      }
      getValue(g, v) {
        const w = this._values[g];
        if (w)
          return w.get(v);
      }
      scopeRefs(g, v = this._values) {
        return this._reduceValues(v, (w) => {
          if (w.scopePath === void 0)
            throw new Error(`CodeGen: name "${w}" has no value`);
          return (0, t._)`${g}${w.scopePath}`;
        });
      }
      scopeCode(g = this._values, v, w) {
        return this._reduceValues(g, (S) => {
          if (S.value === void 0)
            throw new Error(`CodeGen: name "${S}" has no value`);
          return S.value.code;
        }, v, w);
      }
      _reduceValues(g, v, w = {}, S) {
        let b = t.nil;
        for (const E in g) {
          const _ = g[E];
          if (!_)
            continue;
          const u = w[E] = w[E] || /* @__PURE__ */ new Map();
          _.forEach((m) => {
            if (u.has(m))
              return;
            u.set(m, n.Started);
            let l = v(m);
            if (l) {
              const h = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
              b = (0, t._)`${b}${h} ${m} = ${l};${this.opts._n}`;
            } else if (l = S?.(m))
              b = (0, t._)`${b}${l}${this.opts._n}`;
            else
              throw new o(m);
            u.set(m, n.Completed);
          });
        }
        return b;
      }
    }
    e.ValueScope = i;
  })(ur)), ur;
}
var Kr;
function G() {
  return Kr || (Kr = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
    const t = /* @__PURE__ */ Jt(), o = /* @__PURE__ */ Ur();
    var n = /* @__PURE__ */ Jt();
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
    var d = /* @__PURE__ */ Ur();
    Object.defineProperty(e, "Scope", { enumerable: !0, get: function() {
      return d.Scope;
    } }), Object.defineProperty(e, "ValueScope", { enumerable: !0, get: function() {
      return d.ValueScope;
    } }), Object.defineProperty(e, "ValueScopeName", { enumerable: !0, get: function() {
      return d.ValueScopeName;
    } }), Object.defineProperty(e, "varKinds", { enumerable: !0, get: function() {
      return d.varKinds;
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
      constructor(y, P, M) {
        super(), this.varKind = y, this.name = P, this.rhs = M;
      }
      render({ es5: y, _n: P }) {
        const M = y ? o.varKinds.var : this.varKind, U = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
        return `${M} ${this.name}${U};` + P;
      }
      optimizeNames(y, P) {
        if (y[this.name.str])
          return this.rhs && (this.rhs = L(this.rhs, y, P)), this;
      }
      get names() {
        return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
      }
    }
    class i extends r {
      constructor(y, P, M) {
        super(), this.lhs = y, this.rhs = P, this.sideEffects = M;
      }
      render({ _n: y }) {
        return `${this.lhs} = ${this.rhs};` + y;
      }
      optimizeNames(y, P) {
        if (!(this.lhs instanceof t.Name && !y[this.lhs.str] && !this.sideEffects))
          return this.rhs = L(this.rhs, y, P), this;
      }
      get names() {
        const y = this.lhs instanceof t.Name ? {} : { ...this.lhs.names };
        return I(y, this.rhs);
      }
    }
    class f extends i {
      constructor(y, P, M, U) {
        super(y, M, U), this.op = P;
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
    class v extends r {
      constructor(y) {
        super(), this.label = y, this.names = {};
      }
      render({ _n: y }) {
        return `break${this.label ? ` ${this.label}` : ""};` + y;
      }
    }
    class w extends r {
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
    class S extends r {
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
        return this.code = L(this.code, y, P), this;
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
        return this.nodes.reduce((P, M) => P + M.render(y), "");
      }
      optimizeNodes() {
        const { nodes: y } = this;
        let P = y.length;
        for (; P--; ) {
          const M = y[P].optimizeNodes();
          Array.isArray(M) ? y.splice(P, 1, ...M) : M ? y[P] = M : y.splice(P, 1);
        }
        return y.length > 0 ? this : void 0;
      }
      optimizeNames(y, P) {
        const { nodes: M } = this;
        let U = M.length;
        for (; U--; ) {
          const H = M[U];
          H.optimizeNames(y, P) || (Q(y, H.names), M.splice(U, 1));
        }
        return M.length > 0 ? this : void 0;
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
    class u extends E {
    }
    u.kind = "else";
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
          const M = P.optimizeNodes();
          P = this.else = Array.isArray(M) ? new u(M) : M;
        }
        if (P)
          return y === !1 ? P instanceof m ? P : P.nodes : this.nodes.length ? this : new m(te(y), P instanceof m ? [P] : P.nodes);
        if (!(y === !1 || !this.nodes.length))
          return this;
      }
      optimizeNames(y, P) {
        var M;
        if (this.else = (M = this.else) === null || M === void 0 ? void 0 : M.optimizeNames(y, P), !!(super.optimizeNames(y, P) || this.else))
          return this.condition = L(this.condition, y, P), this;
      }
      get names() {
        const y = super.names;
        return I(y, this.condition), this.else && T(y, this.else.names), y;
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
          return this.iteration = L(this.iteration, y, P), this;
      }
      get names() {
        return T(super.names, this.iteration.names);
      }
    }
    class $ extends l {
      constructor(y, P, M, U) {
        super(), this.varKind = y, this.name = P, this.from = M, this.to = U;
      }
      render(y) {
        const P = y.es5 ? o.varKinds.var : this.varKind, { name: M, from: U, to: H } = this;
        return `for(${P} ${M}=${U}; ${M}<${H}; ${M}++)` + super.render(y);
      }
      get names() {
        const y = I(super.names, this.from);
        return I(y, this.to);
      }
    }
    class s extends l {
      constructor(y, P, M, U) {
        super(), this.loop = y, this.varKind = P, this.name = M, this.iterable = U;
      }
      render(y) {
        return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(y);
      }
      optimizeNames(y, P) {
        if (super.optimizeNames(y, P))
          return this.iterable = L(this.iterable, y, P), this;
      }
      get names() {
        return T(super.names, this.iterable.names);
      }
    }
    class c extends E {
      constructor(y, P, M) {
        super(), this.name = y, this.args = P, this.async = M;
      }
      render(y) {
        return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(y);
      }
    }
    c.kind = "func";
    class p extends b {
      render(y) {
        return "return " + super.render(y);
      }
    }
    p.kind = "return";
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
        var M, U;
        return super.optimizeNames(y, P), (M = this.catch) === null || M === void 0 || M.optimizeNames(y, P), (U = this.finally) === null || U === void 0 || U.optimizeNames(y, P), this;
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
    class x {
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
        const M = this._extScope.value(y, P);
        return (this._values[M.prefix] || (this._values[M.prefix] = /* @__PURE__ */ new Set())).add(M), M;
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
      _def(y, P, M, U) {
        const H = this._scope.toName(P);
        return M !== void 0 && U && (this._constants[H.str] = M), this._leafNode(new a(y, H, M)), H;
      }
      // `const` declaration (`var` in es5 mode)
      const(y, P, M) {
        return this._def(o.varKinds.const, y, P, M);
      }
      // `let` declaration with optional assignment (`var` in es5 mode)
      let(y, P, M) {
        return this._def(o.varKinds.let, y, P, M);
      }
      // `var` declaration with optional assignment
      var(y, P, M) {
        return this._def(o.varKinds.var, y, P, M);
      }
      // assignment code
      assign(y, P, M) {
        return this._leafNode(new i(y, P, M));
      }
      // `+=` code
      add(y, P) {
        return this._leafNode(new f(y, e.operators.ADD, P));
      }
      // appends passed SafeExpr to code or executes Block
      code(y) {
        return typeof y == "function" ? y() : y !== t.nil && this._leafNode(new S(y)), this;
      }
      // returns code for object literal for the passed argument list of key-value pairs
      object(...y) {
        const P = ["{"];
        for (const [M, U] of y)
          P.length > 1 && P.push(","), P.push(M), (M !== U || this.opts.es5) && (P.push(":"), (0, t.addCodeArg)(P, U));
        return P.push("}"), new t._Code(P);
      }
      // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
      if(y, P, M) {
        if (this._blockNode(new m(y)), P && M)
          this.code(P).else().code(M).endIf();
        else if (P)
          this.code(P).endIf();
        else if (M)
          throw new Error('CodeGen: "else" body without "then" body');
        return this;
      }
      // `else if` clause - invalid without `if` or after `else` clauses
      elseIf(y) {
        return this._elseNode(new m(y));
      }
      // `else` clause - only valid after `if` or `else if` clauses
      else() {
        return this._elseNode(new u());
      }
      // end `if` statement (needed if gen.if was used only with condition)
      endIf() {
        return this._endBlockNode(m, u);
      }
      _for(y, P) {
        return this._blockNode(y), P && this.code(P).endFor(), this;
      }
      // a generic `for` clause (or statement if `forBody` is passed)
      for(y, P) {
        return this._for(new h(y), P);
      }
      // `for` statement for a range of values
      forRange(y, P, M, U, H = this.opts.es5 ? o.varKinds.var : o.varKinds.let) {
        const ee = this._scope.toName(y);
        return this._for(new $(H, ee, P, M), () => U(ee));
      }
      // `for-of` statement (in es5 mode replace with a normal for loop)
      forOf(y, P, M, U = o.varKinds.const) {
        const H = this._scope.toName(y);
        if (this.opts.es5) {
          const ee = P instanceof t.Name ? P : this.var("_arr", P);
          return this.forRange("_i", 0, (0, t._)`${ee}.length`, (Z) => {
            this.var(H, (0, t._)`${ee}[${Z}]`), M(H);
          });
        }
        return this._for(new s("of", U, H, P), () => M(H));
      }
      // `for-in` statement.
      // With option `ownProperties` replaced with a `for-of` loop for object keys
      forIn(y, P, M, U = this.opts.es5 ? o.varKinds.var : o.varKinds.const) {
        if (this.opts.ownProperties)
          return this.forOf(y, (0, t._)`Object.keys(${P})`, M);
        const H = this._scope.toName(y);
        return this._for(new s("in", U, H, P), () => M(H));
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
        return this._leafNode(new v(y));
      }
      // `return` statement
      return(y) {
        const P = new p();
        if (this._blockNode(P), this.code(y), P.nodes.length !== 1)
          throw new Error('CodeGen: "return" should have one node');
        return this._endBlockNode(p);
      }
      // `try` statement
      try(y, P, M) {
        if (!P && !M)
          throw new Error('CodeGen: "try" without "catch" and "finally"');
        const U = new k();
        if (this._blockNode(U), this.code(y), P) {
          const H = this.name("e");
          this._currNode = U.catch = new C(H), P(H);
        }
        return M && (this._currNode = U.finally = new N(), this.code(M)), this._endBlockNode(C, N);
      }
      // `throw` statement
      throw(y) {
        return this._leafNode(new w(y));
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
        const M = this._nodes.length - P;
        if (M < 0 || y !== void 0 && M !== y)
          throw new Error(`CodeGen: wrong number of nodes: ${M} vs ${y} expected`);
        return this._nodes.length = P, this;
      }
      // `function` heading (or definition if funcBody is passed)
      func(y, P = t.nil, M, U) {
        return this._blockNode(new c(y, P, M)), U && this.code(U).endFunc(), this;
      }
      // end function definition
      endFunc() {
        return this._endBlockNode(c);
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
        const M = this._currNode;
        if (M instanceof y || P && M instanceof P)
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
    e.CodeGen = x;
    function T(O, y) {
      for (const P in y)
        O[P] = (O[P] || 0) + (y[P] || 0);
      return O;
    }
    function I(O, y) {
      return y instanceof t._CodeOrName ? T(O, y.names) : O;
    }
    function L(O, y, P) {
      if (O instanceof t.Name)
        return M(O);
      if (!U(O))
        return O;
      return new t._Code(O._items.reduce((H, ee) => (ee instanceof t.Name && (ee = M(ee)), ee instanceof t._Code ? H.push(...ee._items) : H.push(ee), H), []));
      function M(H) {
        const ee = P[H.str];
        return ee === void 0 || y[H.str] !== 1 ? H : (delete y[H.str], ee);
      }
      function U(H) {
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
  })(lr)), lr;
}
var J = {}, Hr;
function X() {
  if (Hr) return J;
  Hr = 1, Object.defineProperty(J, "__esModule", { value: !0 }), J.checkStrictMode = J.getErrorPath = J.Type = J.useFunc = J.setEvaluated = J.evaluatedPropsToName = J.mergeEvaluated = J.eachItem = J.unescapeJsonPointer = J.escapeJsonPointer = J.escapeFragment = J.unescapeFragment = J.schemaRefOrVal = J.schemaHasRulesButRef = J.schemaHasRules = J.checkUnknownRules = J.alwaysValidSchema = J.toHash = void 0;
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ Jt();
  function o(s) {
    const c = {};
    for (const p of s)
      c[p] = !0;
    return c;
  }
  J.toHash = o;
  function n(s, c) {
    return typeof c == "boolean" ? c : Object.keys(c).length === 0 ? !0 : (d(s, c), !r(c, s.self.RULES.all));
  }
  J.alwaysValidSchema = n;
  function d(s, c = s.schema) {
    const { opts: p, self: k } = s;
    if (!p.strictSchema || typeof c == "boolean")
      return;
    const C = k.RULES.keywords;
    for (const N in c)
      C[N] || $(s, `unknown keyword: "${N}"`);
  }
  J.checkUnknownRules = d;
  function r(s, c) {
    if (typeof s == "boolean")
      return !s;
    for (const p in s)
      if (c[p])
        return !0;
    return !1;
  }
  J.schemaHasRules = r;
  function a(s, c) {
    if (typeof s == "boolean")
      return !s;
    for (const p in s)
      if (p !== "$ref" && c.all[p])
        return !0;
    return !1;
  }
  J.schemaHasRulesButRef = a;
  function i({ topSchemaRef: s, schemaPath: c }, p, k, C) {
    if (!C) {
      if (typeof p == "number" || typeof p == "boolean")
        return p;
      if (typeof p == "string")
        return (0, e._)`${p}`;
    }
    return (0, e._)`${s}${c}${(0, e.getProperty)(k)}`;
  }
  J.schemaRefOrVal = i;
  function f(s) {
    return w(decodeURIComponent(s));
  }
  J.unescapeFragment = f;
  function g(s) {
    return encodeURIComponent(v(s));
  }
  J.escapeFragment = g;
  function v(s) {
    return typeof s == "number" ? `${s}` : s.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  J.escapeJsonPointer = v;
  function w(s) {
    return s.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  J.unescapeJsonPointer = w;
  function S(s, c) {
    if (Array.isArray(s))
      for (const p of s)
        c(p);
    else
      c(s);
  }
  J.eachItem = S;
  function b({ mergeNames: s, mergeToName: c, mergeValues: p, resultToName: k }) {
    return (C, N, x, T) => {
      const I = x === void 0 ? N : x instanceof e.Name ? (N instanceof e.Name ? s(C, N, x) : c(C, N, x), x) : N instanceof e.Name ? (c(C, x, N), N) : p(N, x);
      return T === e.Name && !(I instanceof e.Name) ? k(C, I) : I;
    };
  }
  J.mergeEvaluated = {
    props: b({
      mergeNames: (s, c, p) => s.if((0, e._)`${p} !== true && ${c} !== undefined`, () => {
        s.if((0, e._)`${c} === true`, () => s.assign(p, !0), () => s.assign(p, (0, e._)`${p} || {}`).code((0, e._)`Object.assign(${p}, ${c})`));
      }),
      mergeToName: (s, c, p) => s.if((0, e._)`${p} !== true`, () => {
        c === !0 ? s.assign(p, !0) : (s.assign(p, (0, e._)`${p} || {}`), _(s, p, c));
      }),
      mergeValues: (s, c) => s === !0 ? !0 : { ...s, ...c },
      resultToName: E
    }),
    items: b({
      mergeNames: (s, c, p) => s.if((0, e._)`${p} !== true && ${c} !== undefined`, () => s.assign(p, (0, e._)`${c} === true ? true : ${p} > ${c} ? ${p} : ${c}`)),
      mergeToName: (s, c, p) => s.if((0, e._)`${p} !== true`, () => s.assign(p, c === !0 ? !0 : (0, e._)`${p} > ${c} ? ${p} : ${c}`)),
      mergeValues: (s, c) => s === !0 ? !0 : Math.max(s, c),
      resultToName: (s, c) => s.var("items", c)
    })
  };
  function E(s, c) {
    if (c === !0)
      return s.var("props", !0);
    const p = s.var("props", (0, e._)`{}`);
    return c !== void 0 && _(s, p, c), p;
  }
  J.evaluatedPropsToName = E;
  function _(s, c, p) {
    Object.keys(p).forEach((k) => s.assign((0, e._)`${c}${(0, e.getProperty)(k)}`, !0));
  }
  J.setEvaluated = _;
  const u = {};
  function m(s, c) {
    return s.scopeValue("func", {
      ref: c,
      code: u[c.code] || (u[c.code] = new t._Code(c.code))
    });
  }
  J.useFunc = m;
  var l;
  (function(s) {
    s[s.Num = 0] = "Num", s[s.Str = 1] = "Str";
  })(l || (J.Type = l = {}));
  function h(s, c, p) {
    if (s instanceof e.Name) {
      const k = c === l.Num;
      return p ? k ? (0, e._)`"[" + ${s} + "]"` : (0, e._)`"['" + ${s} + "']"` : k ? (0, e._)`"/" + ${s}` : (0, e._)`"/" + ${s}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return p ? (0, e.getProperty)(s).toString() : "/" + v(s);
  }
  J.getErrorPath = h;
  function $(s, c, p = s.opts.strictSchema) {
    if (p) {
      if (c = `strict mode: ${c}`, p === !0)
        throw new Error(c);
      s.self.logger.warn(c);
    }
  }
  return J.checkStrictMode = $, J;
}
var Ze = {}, Gr;
function _e() {
  if (Gr) return Ze;
  Gr = 1, Object.defineProperty(Ze, "__esModule", { value: !0 });
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
  return Ze.default = t, Ze;
}
var Jr;
function Zt() {
  return Jr || (Jr = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
    const t = /* @__PURE__ */ G(), o = /* @__PURE__ */ X(), n = /* @__PURE__ */ _e();
    e.keywordError = {
      message: ({ keyword: u }) => (0, t.str)`must pass "${u}" keyword validation`
    }, e.keyword$DataError = {
      message: ({ keyword: u, schemaType: m }) => m ? (0, t.str)`"${u}" keyword must be ${m} ($data)` : (0, t.str)`"${u}" keyword is invalid ($data)`
    };
    function d(u, m = e.keywordError, l, h) {
      const { it: $ } = u, { gen: s, compositeRule: c, allErrors: p } = $, k = w(u, m, l);
      h ?? (c || p) ? f(s, k) : g($, (0, t._)`[${k}]`);
    }
    e.reportError = d;
    function r(u, m = e.keywordError, l) {
      const { it: h } = u, { gen: $, compositeRule: s, allErrors: c } = h, p = w(u, m, l);
      f($, p), s || c || g(h, n.default.vErrors);
    }
    e.reportExtraError = r;
    function a(u, m) {
      u.assign(n.default.errors, m), u.if((0, t._)`${n.default.vErrors} !== null`, () => u.if(m, () => u.assign((0, t._)`${n.default.vErrors}.length`, m), () => u.assign(n.default.vErrors, null)));
    }
    e.resetErrorsCount = a;
    function i({ gen: u, keyword: m, schemaValue: l, data: h, errsCount: $, it: s }) {
      if ($ === void 0)
        throw new Error("ajv implementation error");
      const c = u.name("err");
      u.forRange("i", $, n.default.errors, (p) => {
        u.const(c, (0, t._)`${n.default.vErrors}[${p}]`), u.if((0, t._)`${c}.instancePath === undefined`, () => u.assign((0, t._)`${c}.instancePath`, (0, t.strConcat)(n.default.instancePath, s.errorPath))), u.assign((0, t._)`${c}.schemaPath`, (0, t.str)`${s.errSchemaPath}/${m}`), s.opts.verbose && (u.assign((0, t._)`${c}.schema`, l), u.assign((0, t._)`${c}.data`, h));
      });
    }
    e.extendErrors = i;
    function f(u, m) {
      const l = u.const("err", m);
      u.if((0, t._)`${n.default.vErrors} === null`, () => u.assign(n.default.vErrors, (0, t._)`[${l}]`), (0, t._)`${n.default.vErrors}.push(${l})`), u.code((0, t._)`${n.default.errors}++`);
    }
    function g(u, m) {
      const { gen: l, validateName: h, schemaEnv: $ } = u;
      $.$async ? l.throw((0, t._)`new ${u.ValidationError}(${m})`) : (l.assign((0, t._)`${h}.errors`, m), l.return(!1));
    }
    const v = {
      keyword: new t.Name("keyword"),
      schemaPath: new t.Name("schemaPath"),
      // also used in JTD errors
      params: new t.Name("params"),
      propertyName: new t.Name("propertyName"),
      message: new t.Name("message"),
      schema: new t.Name("schema"),
      parentSchema: new t.Name("parentSchema")
    };
    function w(u, m, l) {
      const { createErrors: h } = u.it;
      return h === !1 ? (0, t._)`{}` : S(u, m, l);
    }
    function S(u, m, l = {}) {
      const { gen: h, it: $ } = u, s = [
        b($, l),
        E(u, l)
      ];
      return _(u, m, s), h.object(...s);
    }
    function b({ errorPath: u }, { instancePath: m }) {
      const l = m ? (0, t.str)`${u}${(0, o.getErrorPath)(m, o.Type.Str)}` : u;
      return [n.default.instancePath, (0, t.strConcat)(n.default.instancePath, l)];
    }
    function E({ keyword: u, it: { errSchemaPath: m } }, { schemaPath: l, parentSchema: h }) {
      let $ = h ? m : (0, t.str)`${m}/${u}`;
      return l && ($ = (0, t.str)`${$}${(0, o.getErrorPath)(l, o.Type.Str)}`), [v.schemaPath, $];
    }
    function _(u, { params: m, message: l }, h) {
      const { keyword: $, data: s, schemaValue: c, it: p } = u, { opts: k, propertyName: C, topSchemaRef: N, schemaPath: x } = p;
      h.push([v.keyword, $], [v.params, typeof m == "function" ? m(u) : m || (0, t._)`{}`]), k.messages && h.push([v.message, typeof l == "function" ? l(u) : l]), k.verbose && h.push([v.schema, c], [v.parentSchema, (0, t._)`${N}${x}`], [n.default.data, s]), C && h.push([v.propertyName, C]);
    }
  })(cr)), cr;
}
var Wr;
function os() {
  if (Wr) return Ne;
  Wr = 1, Object.defineProperty(Ne, "__esModule", { value: !0 }), Ne.boolOrEmptySchema = Ne.topBoolOrEmptySchema = void 0;
  const e = /* @__PURE__ */ Zt(), t = /* @__PURE__ */ G(), o = /* @__PURE__ */ _e(), n = {
    message: "boolean schema is false"
  };
  function d(i) {
    const { gen: f, schema: g, validateName: v } = i;
    g === !1 ? a(i, !1) : typeof g == "object" && g.$async === !0 ? f.return(o.default.data) : (f.assign((0, t._)`${v}.errors`, null), f.return(!0));
  }
  Ne.topBoolOrEmptySchema = d;
  function r(i, f) {
    const { gen: g, schema: v } = i;
    v === !1 ? (g.var(f, !1), a(i)) : g.var(f, !0);
  }
  Ne.boolOrEmptySchema = r;
  function a(i, f) {
    const { gen: g, data: v } = i, w = {
      gen: g,
      keyword: "false schema",
      data: v,
      schema: !1,
      schemaCode: !1,
      schemaValue: !1,
      params: {},
      it: i
    };
    (0, e.reportError)(w, n, void 0, f);
  }
  return Ne;
}
var ae = {}, je = {}, Yr;
function ko() {
  if (Yr) return je;
  Yr = 1, Object.defineProperty(je, "__esModule", { value: !0 }), je.getRules = je.isJSONType = void 0;
  const e = ["string", "number", "integer", "boolean", "null", "object", "array"], t = new Set(e);
  function o(d) {
    return typeof d == "string" && t.has(d);
  }
  je.isJSONType = o;
  function n() {
    const d = {
      number: { type: "number", rules: [] },
      string: { type: "string", rules: [] },
      array: { type: "array", rules: [] },
      object: { type: "object", rules: [] }
    };
    return {
      types: { ...d, integer: !0, boolean: !0, null: !0 },
      rules: [{ rules: [] }, d.number, d.string, d.array, d.object],
      post: { rules: [] },
      all: {},
      keywords: {}
    };
  }
  return je.getRules = n, je;
}
var Se = {}, Xr;
function Co() {
  if (Xr) return Se;
  Xr = 1, Object.defineProperty(Se, "__esModule", { value: !0 }), Se.shouldUseRule = Se.shouldUseGroup = Se.schemaHasRulesForType = void 0;
  function e({ schema: n, self: d }, r) {
    const a = d.RULES.types[r];
    return a && a !== !0 && t(n, a);
  }
  Se.schemaHasRulesForType = e;
  function t(n, d) {
    return d.rules.some((r) => o(n, r));
  }
  Se.shouldUseGroup = t;
  function o(n, d) {
    var r;
    return n[d.keyword] !== void 0 || ((r = d.definition.implements) === null || r === void 0 ? void 0 : r.some((a) => n[a] !== void 0));
  }
  return Se.shouldUseRule = o, Se;
}
var Zr;
function Wt() {
  if (Zr) return ae;
  Zr = 1, Object.defineProperty(ae, "__esModule", { value: !0 }), ae.reportTypeError = ae.checkDataTypes = ae.checkDataType = ae.coerceAndCheckDataType = ae.getJSONTypes = ae.getSchemaTypes = ae.DataType = void 0;
  const e = /* @__PURE__ */ ko(), t = /* @__PURE__ */ Co(), o = /* @__PURE__ */ Zt(), n = /* @__PURE__ */ G(), d = /* @__PURE__ */ X();
  var r;
  (function(l) {
    l[l.Correct = 0] = "Correct", l[l.Wrong = 1] = "Wrong";
  })(r || (ae.DataType = r = {}));
  function a(l) {
    const h = i(l.type);
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
  ae.getSchemaTypes = a;
  function i(l) {
    const h = Array.isArray(l) ? l : l ? [l] : [];
    if (h.every(e.isJSONType))
      return h;
    throw new Error("type must be JSONType or JSONType[]: " + h.join(","));
  }
  ae.getJSONTypes = i;
  function f(l, h) {
    const { gen: $, data: s, opts: c } = l, p = v(h, c.coerceTypes), k = h.length > 0 && !(p.length === 0 && h.length === 1 && (0, t.schemaHasRulesForType)(l, h[0]));
    if (k) {
      const C = E(h, s, c.strictNumbers, r.Wrong);
      $.if(C, () => {
        p.length ? w(l, h, p) : u(l);
      });
    }
    return k;
  }
  ae.coerceAndCheckDataType = f;
  const g = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
  function v(l, h) {
    return h ? l.filter(($) => g.has($) || h === "array" && $ === "array") : [];
  }
  function w(l, h, $) {
    const { gen: s, data: c, opts: p } = l, k = s.let("dataType", (0, n._)`typeof ${c}`), C = s.let("coerced", (0, n._)`undefined`);
    p.coerceTypes === "array" && s.if((0, n._)`${k} == 'object' && Array.isArray(${c}) && ${c}.length == 1`, () => s.assign(c, (0, n._)`${c}[0]`).assign(k, (0, n._)`typeof ${c}`).if(E(h, c, p.strictNumbers), () => s.assign(C, c))), s.if((0, n._)`${C} !== undefined`);
    for (const x of $)
      (g.has(x) || x === "array" && p.coerceTypes === "array") && N(x);
    s.else(), u(l), s.endIf(), s.if((0, n._)`${C} !== undefined`, () => {
      s.assign(c, C), S(l, C);
    });
    function N(x) {
      switch (x) {
        case "string":
          s.elseIf((0, n._)`${k} == "number" || ${k} == "boolean"`).assign(C, (0, n._)`"" + ${c}`).elseIf((0, n._)`${c} === null`).assign(C, (0, n._)`""`);
          return;
        case "number":
          s.elseIf((0, n._)`${k} == "boolean" || ${c} === null
              || (${k} == "string" && ${c} && ${c} == +${c})`).assign(C, (0, n._)`+${c}`);
          return;
        case "integer":
          s.elseIf((0, n._)`${k} === "boolean" || ${c} === null
              || (${k} === "string" && ${c} && ${c} == +${c} && !(${c} % 1))`).assign(C, (0, n._)`+${c}`);
          return;
        case "boolean":
          s.elseIf((0, n._)`${c} === "false" || ${c} === 0 || ${c} === null`).assign(C, !1).elseIf((0, n._)`${c} === "true" || ${c} === 1`).assign(C, !0);
          return;
        case "null":
          s.elseIf((0, n._)`${c} === "" || ${c} === 0 || ${c} === false`), s.assign(C, null);
          return;
        case "array":
          s.elseIf((0, n._)`${k} === "string" || ${k} === "number"
              || ${k} === "boolean" || ${c} === null`).assign(C, (0, n._)`[${c}]`);
      }
    }
  }
  function S({ gen: l, parentData: h, parentDataProperty: $ }, s) {
    l.if((0, n._)`${h} !== undefined`, () => l.assign((0, n._)`${h}[${$}]`, s));
  }
  function b(l, h, $, s = r.Correct) {
    const c = s === r.Correct ? n.operators.EQ : n.operators.NEQ;
    let p;
    switch (l) {
      case "null":
        return (0, n._)`${h} ${c} null`;
      case "array":
        p = (0, n._)`Array.isArray(${h})`;
        break;
      case "object":
        p = (0, n._)`${h} && typeof ${h} == "object" && !Array.isArray(${h})`;
        break;
      case "integer":
        p = k((0, n._)`!(${h} % 1) && !isNaN(${h})`);
        break;
      case "number":
        p = k();
        break;
      default:
        return (0, n._)`typeof ${h} ${c} ${l}`;
    }
    return s === r.Correct ? p : (0, n.not)(p);
    function k(C = n.nil) {
      return (0, n.and)((0, n._)`typeof ${h} == "number"`, C, $ ? (0, n._)`isFinite(${h})` : n.nil);
    }
  }
  ae.checkDataType = b;
  function E(l, h, $, s) {
    if (l.length === 1)
      return b(l[0], h, $, s);
    let c;
    const p = (0, d.toHash)(l);
    if (p.array && p.object) {
      const k = (0, n._)`typeof ${h} != "object"`;
      c = p.null ? k : (0, n._)`!${h} || ${k}`, delete p.null, delete p.array, delete p.object;
    } else
      c = n.nil;
    p.number && delete p.integer;
    for (const k in p)
      c = (0, n.and)(c, b(k, h, $, s));
    return c;
  }
  ae.checkDataTypes = E;
  const _ = {
    message: ({ schema: l }) => `must be ${l}`,
    params: ({ schema: l, schemaValue: h }) => typeof l == "string" ? (0, n._)`{type: ${l}}` : (0, n._)`{type: ${h}}`
  };
  function u(l) {
    const h = m(l);
    (0, o.reportError)(h, _);
  }
  ae.reportTypeError = u;
  function m(l) {
    const { gen: h, data: $, schema: s } = l, c = (0, d.schemaRefOrVal)(l, s, "type");
    return {
      gen: h,
      keyword: "type",
      data: $,
      schema: s.type,
      schemaCode: c,
      schemaValue: c,
      parentSchema: s,
      params: {},
      it: l
    };
  }
  return ae;
}
var He = {}, Qr;
function ss() {
  if (Qr) return He;
  Qr = 1, Object.defineProperty(He, "__esModule", { value: !0 }), He.assignDefaults = void 0;
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X();
  function o(d, r) {
    const { properties: a, items: i } = d.schema;
    if (r === "object" && a)
      for (const f in a)
        n(d, f, a[f].default);
    else r === "array" && Array.isArray(i) && i.forEach((f, g) => n(d, g, f.default));
  }
  He.assignDefaults = o;
  function n(d, r, a) {
    const { gen: i, compositeRule: f, data: g, opts: v } = d;
    if (a === void 0)
      return;
    const w = (0, e._)`${g}${(0, e.getProperty)(r)}`;
    if (f) {
      (0, t.checkStrictMode)(d, `default is ignored for: ${w}`);
      return;
    }
    let S = (0, e._)`${w} === undefined`;
    v.useDefaults === "empty" && (S = (0, e._)`${S} || ${w} === null || ${w} === ""`), i.if(S, (0, e._)`${w} = ${(0, e.stringify)(a)}`);
  }
  return He;
}
var ge = {}, re = {}, en;
function be() {
  if (en) return re;
  en = 1, Object.defineProperty(re, "__esModule", { value: !0 }), re.validateUnion = re.validateArray = re.usePattern = re.callValidateCode = re.schemaProperties = re.allSchemaProperties = re.noPropertyInData = re.propertyInData = re.isOwnProperty = re.hasPropFunc = re.reportMissingProp = re.checkMissingProp = re.checkReportMissingProp = void 0;
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), o = /* @__PURE__ */ _e(), n = /* @__PURE__ */ X();
  function d(l, h) {
    const { gen: $, data: s, it: c } = l;
    $.if(v($, s, h, c.opts.ownProperties), () => {
      l.setParams({ missingProperty: (0, e._)`${h}` }, !0), l.error();
    });
  }
  re.checkReportMissingProp = d;
  function r({ gen: l, data: h, it: { opts: $ } }, s, c) {
    return (0, e.or)(...s.map((p) => (0, e.and)(v(l, h, p, $.ownProperties), (0, e._)`${c} = ${p}`)));
  }
  re.checkMissingProp = r;
  function a(l, h) {
    l.setParams({ missingProperty: h }, !0), l.error();
  }
  re.reportMissingProp = a;
  function i(l) {
    return l.scopeValue("func", {
      // eslint-disable-next-line @typescript-eslint/unbound-method
      ref: Object.prototype.hasOwnProperty,
      code: (0, e._)`Object.prototype.hasOwnProperty`
    });
  }
  re.hasPropFunc = i;
  function f(l, h, $) {
    return (0, e._)`${i(l)}.call(${h}, ${$})`;
  }
  re.isOwnProperty = f;
  function g(l, h, $, s) {
    const c = (0, e._)`${h}${(0, e.getProperty)($)} !== undefined`;
    return s ? (0, e._)`${c} && ${f(l, h, $)}` : c;
  }
  re.propertyInData = g;
  function v(l, h, $, s) {
    const c = (0, e._)`${h}${(0, e.getProperty)($)} === undefined`;
    return s ? (0, e.or)(c, (0, e.not)(f(l, h, $))) : c;
  }
  re.noPropertyInData = v;
  function w(l) {
    return l ? Object.keys(l).filter((h) => h !== "__proto__") : [];
  }
  re.allSchemaProperties = w;
  function S(l, h) {
    return w(h).filter(($) => !(0, t.alwaysValidSchema)(l, h[$]));
  }
  re.schemaProperties = S;
  function b({ schemaCode: l, data: h, it: { gen: $, topSchemaRef: s, schemaPath: c, errorPath: p }, it: k }, C, N, x) {
    const T = x ? (0, e._)`${l}, ${h}, ${s}${c}` : h, I = [
      [o.default.instancePath, (0, e.strConcat)(o.default.instancePath, p)],
      [o.default.parentData, k.parentData],
      [o.default.parentDataProperty, k.parentDataProperty],
      [o.default.rootData, o.default.rootData]
    ];
    k.opts.dynamicRef && I.push([o.default.dynamicAnchors, o.default.dynamicAnchors]);
    const L = (0, e._)`${T}, ${$.object(...I)}`;
    return N !== e.nil ? (0, e._)`${C}.call(${N}, ${L})` : (0, e._)`${C}(${L})`;
  }
  re.callValidateCode = b;
  const E = (0, e._)`new RegExp`;
  function _({ gen: l, it: { opts: h } }, $) {
    const s = h.unicodeRegExp ? "u" : "", { regExp: c } = h.code, p = c($, s);
    return l.scopeValue("pattern", {
      key: p.toString(),
      ref: p,
      code: (0, e._)`${c.code === "new RegExp" ? E : (0, n.useFunc)(l, c)}(${$}, ${s})`
    });
  }
  re.usePattern = _;
  function u(l) {
    const { gen: h, data: $, keyword: s, it: c } = l, p = h.name("valid");
    if (c.allErrors) {
      const C = h.let("valid", !0);
      return k(() => h.assign(C, !1)), C;
    }
    return h.var(p, !0), k(() => h.break()), p;
    function k(C) {
      const N = h.const("len", (0, e._)`${$}.length`);
      h.forRange("i", 0, N, (x) => {
        l.subschema({
          keyword: s,
          dataProp: x,
          dataPropType: t.Type.Num
        }, p), h.if((0, e.not)(p), C);
      });
    }
  }
  re.validateArray = u;
  function m(l) {
    const { gen: h, schema: $, keyword: s, it: c } = l;
    if (!Array.isArray($))
      throw new Error("ajv implementation error");
    if ($.some((N) => (0, t.alwaysValidSchema)(c, N)) && !c.opts.unevaluated)
      return;
    const k = h.let("valid", !1), C = h.name("_valid");
    h.block(() => $.forEach((N, x) => {
      const T = l.subschema({
        keyword: s,
        schemaProp: x,
        compositeRule: !0
      }, C);
      h.assign(k, (0, e._)`${k} || ${C}`), l.mergeValidEvaluated(T, C) || h.if((0, e.not)(k));
    })), l.result(k, () => l.reset(), () => l.error(!0));
  }
  return re.validateUnion = m, re;
}
var tn;
function as() {
  if (tn) return ge;
  tn = 1, Object.defineProperty(ge, "__esModule", { value: !0 }), ge.validateKeywordUsage = ge.validSchemaType = ge.funcKeywordCode = ge.macroKeywordCode = void 0;
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ _e(), o = /* @__PURE__ */ be(), n = /* @__PURE__ */ Zt();
  function d(S, b) {
    const { gen: E, keyword: _, schema: u, parentSchema: m, it: l } = S, h = b.macro.call(l.self, u, m, l), $ = g(E, _, h);
    l.opts.validateSchema !== !1 && l.self.validateSchema(h, !0);
    const s = E.name("valid");
    S.subschema({
      schema: h,
      schemaPath: e.nil,
      errSchemaPath: `${l.errSchemaPath}/${_}`,
      topSchemaRef: $,
      compositeRule: !0
    }, s), S.pass(s, () => S.error(!0));
  }
  ge.macroKeywordCode = d;
  function r(S, b) {
    var E;
    const { gen: _, keyword: u, schema: m, parentSchema: l, $data: h, it: $ } = S;
    f($, b);
    const s = !h && b.compile ? b.compile.call($.self, m, l, $) : b.validate, c = g(_, u, s), p = _.let("valid");
    S.block$data(p, k), S.ok((E = b.valid) !== null && E !== void 0 ? E : p);
    function k() {
      if (b.errors === !1)
        x(), b.modifying && a(S), T(() => S.error());
      else {
        const I = b.async ? C() : N();
        b.modifying && a(S), T(() => i(S, I));
      }
    }
    function C() {
      const I = _.let("ruleErrs", null);
      return _.try(() => x((0, e._)`await `), (L) => _.assign(p, !1).if((0, e._)`${L} instanceof ${$.ValidationError}`, () => _.assign(I, (0, e._)`${L}.errors`), () => _.throw(L))), I;
    }
    function N() {
      const I = (0, e._)`${c}.errors`;
      return _.assign(I, null), x(e.nil), I;
    }
    function x(I = b.async ? (0, e._)`await ` : e.nil) {
      const L = $.opts.passContext ? t.default.this : t.default.self, Q = !("compile" in b && !h || b.schema === !1);
      _.assign(p, (0, e._)`${I}${(0, o.callValidateCode)(S, c, L, Q)}`, b.modifying);
    }
    function T(I) {
      var L;
      _.if((0, e.not)((L = b.valid) !== null && L !== void 0 ? L : p), I);
    }
  }
  ge.funcKeywordCode = r;
  function a(S) {
    const { gen: b, data: E, it: _ } = S;
    b.if(_.parentData, () => b.assign(E, (0, e._)`${_.parentData}[${_.parentDataProperty}]`));
  }
  function i(S, b) {
    const { gen: E } = S;
    E.if((0, e._)`Array.isArray(${b})`, () => {
      E.assign(t.default.vErrors, (0, e._)`${t.default.vErrors} === null ? ${b} : ${t.default.vErrors}.concat(${b})`).assign(t.default.errors, (0, e._)`${t.default.vErrors}.length`), (0, n.extendErrors)(S);
    }, () => S.error());
  }
  function f({ schemaEnv: S }, b) {
    if (b.async && !S.$async)
      throw new Error("async keyword in sync schema");
  }
  function g(S, b, E) {
    if (E === void 0)
      throw new Error(`keyword "${b}" failed to compile`);
    return S.scopeValue("keyword", typeof E == "function" ? { ref: E } : { ref: E, code: (0, e.stringify)(E) });
  }
  function v(S, b, E = !1) {
    return !b.length || b.some((_) => _ === "array" ? Array.isArray(S) : _ === "object" ? S && typeof S == "object" && !Array.isArray(S) : typeof S == _ || E && typeof S > "u");
  }
  ge.validSchemaType = v;
  function w({ schema: S, opts: b, self: E, errSchemaPath: _ }, u, m) {
    if (Array.isArray(u.keyword) ? !u.keyword.includes(m) : u.keyword !== m)
      throw new Error("ajv implementation error");
    const l = u.dependencies;
    if (l?.some((h) => !Object.prototype.hasOwnProperty.call(S, h)))
      throw new Error(`parent schema must have dependencies of ${m}: ${l.join(",")}`);
    if (u.validateSchema && !u.validateSchema(S[m])) {
      const $ = `keyword "${m}" value is invalid at path "${_}": ` + E.errorsText(u.validateSchema.errors);
      if (b.validateSchema === "log")
        E.logger.error($);
      else
        throw new Error($);
    }
  }
  return ge.validateKeywordUsage = w, ge;
}
var Ee = {}, rn;
function is() {
  if (rn) return Ee;
  rn = 1, Object.defineProperty(Ee, "__esModule", { value: !0 }), Ee.extendSubschemaMode = Ee.extendSubschemaData = Ee.getSubschema = void 0;
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X();
  function o(r, { keyword: a, schemaProp: i, schema: f, schemaPath: g, errSchemaPath: v, topSchemaRef: w }) {
    if (a !== void 0 && f !== void 0)
      throw new Error('both "keyword" and "schema" passed, only one allowed');
    if (a !== void 0) {
      const S = r.schema[a];
      return i === void 0 ? {
        schema: S,
        schemaPath: (0, e._)`${r.schemaPath}${(0, e.getProperty)(a)}`,
        errSchemaPath: `${r.errSchemaPath}/${a}`
      } : {
        schema: S[i],
        schemaPath: (0, e._)`${r.schemaPath}${(0, e.getProperty)(a)}${(0, e.getProperty)(i)}`,
        errSchemaPath: `${r.errSchemaPath}/${a}/${(0, t.escapeFragment)(i)}`
      };
    }
    if (f !== void 0) {
      if (g === void 0 || v === void 0 || w === void 0)
        throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
      return {
        schema: f,
        schemaPath: g,
        topSchemaRef: w,
        errSchemaPath: v
      };
    }
    throw new Error('either "keyword" or "schema" must be passed');
  }
  Ee.getSubschema = o;
  function n(r, a, { dataProp: i, dataPropType: f, data: g, dataTypes: v, propertyName: w }) {
    if (g !== void 0 && i !== void 0)
      throw new Error('both "data" and "dataProp" passed, only one allowed');
    const { gen: S } = a;
    if (i !== void 0) {
      const { errorPath: E, dataPathArr: _, opts: u } = a, m = S.let("data", (0, e._)`${a.data}${(0, e.getProperty)(i)}`, !0);
      b(m), r.errorPath = (0, e.str)`${E}${(0, t.getErrorPath)(i, f, u.jsPropertySyntax)}`, r.parentDataProperty = (0, e._)`${i}`, r.dataPathArr = [..._, r.parentDataProperty];
    }
    if (g !== void 0) {
      const E = g instanceof e.Name ? g : S.let("data", g, !0);
      b(E), w !== void 0 && (r.propertyName = w);
    }
    v && (r.dataTypes = v);
    function b(E) {
      r.data = E, r.dataLevel = a.dataLevel + 1, r.dataTypes = [], a.definedProperties = /* @__PURE__ */ new Set(), r.parentData = a.data, r.dataNames = [...a.dataNames, E];
    }
  }
  Ee.extendSubschemaData = n;
  function d(r, { jtdDiscriminator: a, jtdMetadata: i, compositeRule: f, createErrors: g, allErrors: v }) {
    f !== void 0 && (r.compositeRule = f), g !== void 0 && (r.createErrors = g), v !== void 0 && (r.allErrors = v), r.jtdDiscriminator = a, r.jtdMetadata = i;
  }
  return Ee.extendSubschemaMode = d, Ee;
}
var ie = {}, fr, nn;
function Ro() {
  return nn || (nn = 1, fr = function e(t, o) {
    if (t === o) return !0;
    if (t && o && typeof t == "object" && typeof o == "object") {
      if (t.constructor !== o.constructor) return !1;
      var n, d, r;
      if (Array.isArray(t)) {
        if (n = t.length, n != o.length) return !1;
        for (d = n; d-- !== 0; )
          if (!e(t[d], o[d])) return !1;
        return !0;
      }
      if (t.constructor === RegExp) return t.source === o.source && t.flags === o.flags;
      if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === o.valueOf();
      if (t.toString !== Object.prototype.toString) return t.toString() === o.toString();
      if (r = Object.keys(t), n = r.length, n !== Object.keys(o).length) return !1;
      for (d = n; d-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(o, r[d])) return !1;
      for (d = n; d-- !== 0; ) {
        var a = r[d];
        if (!e(t[a], o[a])) return !1;
      }
      return !0;
    }
    return t !== t && o !== o;
  }), fr;
}
var pr = { exports: {} }, on;
function cs() {
  if (on) return pr.exports;
  on = 1;
  var e = pr.exports = function(n, d, r) {
    typeof d == "function" && (r = d, d = {}), r = d.cb || r;
    var a = typeof r == "function" ? r : r.pre || function() {
    }, i = r.post || function() {
    };
    t(d, a, i, n, "", n);
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
  function t(n, d, r, a, i, f, g, v, w, S) {
    if (a && typeof a == "object" && !Array.isArray(a)) {
      d(a, i, f, g, v, w, S);
      for (var b in a) {
        var E = a[b];
        if (Array.isArray(E)) {
          if (b in e.arrayKeywords)
            for (var _ = 0; _ < E.length; _++)
              t(n, d, r, E[_], i + "/" + b + "/" + _, f, i, b, a, _);
        } else if (b in e.propsKeywords) {
          if (E && typeof E == "object")
            for (var u in E)
              t(n, d, r, E[u], i + "/" + b + "/" + o(u), f, i, b, a, u);
        } else (b in e.keywords || n.allKeys && !(b in e.skipKeywords)) && t(n, d, r, E, i + "/" + b, f, i, b, a);
      }
      r(a, i, f, g, v, w, S);
    }
  }
  function o(n) {
    return n.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  return pr.exports;
}
var sn;
function Qt() {
  if (sn) return ie;
  sn = 1, Object.defineProperty(ie, "__esModule", { value: !0 }), ie.getSchemaRefs = ie.resolveUrl = ie.normalizeId = ie._getFullPath = ie.getFullPath = ie.inlineRef = void 0;
  const e = /* @__PURE__ */ X(), t = Ro(), o = cs(), n = /* @__PURE__ */ new Set([
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
  function d(_, u = !0) {
    return typeof _ == "boolean" ? !0 : u === !0 ? !a(_) : u ? i(_) <= u : !1;
  }
  ie.inlineRef = d;
  const r = /* @__PURE__ */ new Set([
    "$ref",
    "$recursiveRef",
    "$recursiveAnchor",
    "$dynamicRef",
    "$dynamicAnchor"
  ]);
  function a(_) {
    for (const u in _) {
      if (r.has(u))
        return !0;
      const m = _[u];
      if (Array.isArray(m) && m.some(a) || typeof m == "object" && a(m))
        return !0;
    }
    return !1;
  }
  function i(_) {
    let u = 0;
    for (const m in _) {
      if (m === "$ref")
        return 1 / 0;
      if (u++, !n.has(m) && (typeof _[m] == "object" && (0, e.eachItem)(_[m], (l) => u += i(l)), u === 1 / 0))
        return 1 / 0;
    }
    return u;
  }
  function f(_, u = "", m) {
    m !== !1 && (u = w(u));
    const l = _.parse(u);
    return g(_, l);
  }
  ie.getFullPath = f;
  function g(_, u) {
    return _.serialize(u).split("#")[0] + "#";
  }
  ie._getFullPath = g;
  const v = /#\/?$/;
  function w(_) {
    return _ ? _.replace(v, "") : "";
  }
  ie.normalizeId = w;
  function S(_, u, m) {
    return m = w(m), _.resolve(u, m);
  }
  ie.resolveUrl = S;
  const b = /^[a-z_][-a-z0-9._]*$/i;
  function E(_, u) {
    if (typeof _ == "boolean")
      return {};
    const { schemaId: m, uriResolver: l } = this.opts, h = w(_[m] || u), $ = { "": h }, s = f(l, h, !1), c = {}, p = /* @__PURE__ */ new Set();
    return o(_, { allKeys: !0 }, (N, x, T, I) => {
      if (I === void 0)
        return;
      const L = s + x;
      let Q = $[I];
      typeof N[m] == "string" && (Q = te.call(this, N[m])), fe.call(this, N.$anchor), fe.call(this, N.$dynamicAnchor), $[x] = Q;
      function te(Y) {
        const me = this.opts.uriResolver.resolve;
        if (Y = w(Q ? me(Q, Y) : Y), p.has(Y))
          throw C(Y);
        p.add(Y);
        let V = this.refs[Y];
        return typeof V == "string" && (V = this.refs[V]), typeof V == "object" ? k(N, V.schema, Y) : Y !== w(L) && (Y[0] === "#" ? (k(N, c[Y], Y), c[Y] = N) : this.refs[Y] = L), Y;
      }
      function fe(Y) {
        if (typeof Y == "string") {
          if (!b.test(Y))
            throw new Error(`invalid anchor "${Y}"`);
          te.call(this, `#${Y}`);
        }
      }
    }), c;
    function k(N, x, T) {
      if (x !== void 0 && !t(N, x))
        throw C(T);
    }
    function C(N) {
      return new Error(`reference "${N}" resolves to more than one schema`);
    }
  }
  return ie.getSchemaRefs = E, ie;
}
var an;
function er() {
  if (an) return we;
  an = 1, Object.defineProperty(we, "__esModule", { value: !0 }), we.getData = we.KeywordCxt = we.validateFunctionCode = void 0;
  const e = /* @__PURE__ */ os(), t = /* @__PURE__ */ Wt(), o = /* @__PURE__ */ Co(), n = /* @__PURE__ */ Wt(), d = /* @__PURE__ */ ss(), r = /* @__PURE__ */ as(), a = /* @__PURE__ */ is(), i = /* @__PURE__ */ G(), f = /* @__PURE__ */ _e(), g = /* @__PURE__ */ Qt(), v = /* @__PURE__ */ X(), w = /* @__PURE__ */ Zt();
  function S(R) {
    if (s(R) && (p(R), $(R))) {
      u(R);
      return;
    }
    b(R, () => (0, e.topBoolOrEmptySchema)(R));
  }
  we.validateFunctionCode = S;
  function b({ gen: R, validateName: A, schema: z, schemaEnv: F, opts: K }, W) {
    K.code.es5 ? R.func(A, (0, i._)`${f.default.data}, ${f.default.valCxt}`, F.$async, () => {
      R.code((0, i._)`"use strict"; ${l(z, K)}`), _(R, K), R.code(W);
    }) : R.func(A, (0, i._)`${f.default.data}, ${E(K)}`, F.$async, () => R.code(l(z, K)).code(W));
  }
  function E(R) {
    return (0, i._)`{${f.default.instancePath}="", ${f.default.parentData}, ${f.default.parentDataProperty}, ${f.default.rootData}=${f.default.data}${R.dynamicRef ? (0, i._)`, ${f.default.dynamicAnchors}={}` : i.nil}}={}`;
  }
  function _(R, A) {
    R.if(f.default.valCxt, () => {
      R.var(f.default.instancePath, (0, i._)`${f.default.valCxt}.${f.default.instancePath}`), R.var(f.default.parentData, (0, i._)`${f.default.valCxt}.${f.default.parentData}`), R.var(f.default.parentDataProperty, (0, i._)`${f.default.valCxt}.${f.default.parentDataProperty}`), R.var(f.default.rootData, (0, i._)`${f.default.valCxt}.${f.default.rootData}`), A.dynamicRef && R.var(f.default.dynamicAnchors, (0, i._)`${f.default.valCxt}.${f.default.dynamicAnchors}`);
    }, () => {
      R.var(f.default.instancePath, (0, i._)`""`), R.var(f.default.parentData, (0, i._)`undefined`), R.var(f.default.parentDataProperty, (0, i._)`undefined`), R.var(f.default.rootData, f.default.data), A.dynamicRef && R.var(f.default.dynamicAnchors, (0, i._)`{}`);
    });
  }
  function u(R) {
    const { schema: A, opts: z, gen: F } = R;
    b(R, () => {
      z.$comment && A.$comment && I(R), N(R), F.let(f.default.vErrors, null), F.let(f.default.errors, 0), z.unevaluated && m(R), k(R), L(R);
    });
  }
  function m(R) {
    const { gen: A, validateName: z } = R;
    R.evaluated = A.const("evaluated", (0, i._)`${z}.evaluated`), A.if((0, i._)`${R.evaluated}.dynamicProps`, () => A.assign((0, i._)`${R.evaluated}.props`, (0, i._)`undefined`)), A.if((0, i._)`${R.evaluated}.dynamicItems`, () => A.assign((0, i._)`${R.evaluated}.items`, (0, i._)`undefined`));
  }
  function l(R, A) {
    const z = typeof R == "object" && R[A.schemaId];
    return z && (A.code.source || A.code.process) ? (0, i._)`/*# sourceURL=${z} */` : i.nil;
  }
  function h(R, A) {
    if (s(R) && (p(R), $(R))) {
      c(R, A);
      return;
    }
    (0, e.boolOrEmptySchema)(R, A);
  }
  function $({ schema: R, self: A }) {
    if (typeof R == "boolean")
      return !R;
    for (const z in R)
      if (A.RULES.all[z])
        return !0;
    return !1;
  }
  function s(R) {
    return typeof R.schema != "boolean";
  }
  function c(R, A) {
    const { schema: z, gen: F, opts: K } = R;
    K.$comment && z.$comment && I(R), x(R), T(R);
    const W = F.const("_errs", f.default.errors);
    k(R, W), F.var(A, (0, i._)`${W} === ${f.default.errors}`);
  }
  function p(R) {
    (0, v.checkUnknownRules)(R), C(R);
  }
  function k(R, A) {
    if (R.opts.jtd)
      return te(R, [], !1, A);
    const z = (0, t.getSchemaTypes)(R.schema), F = (0, t.coerceAndCheckDataType)(R, z);
    te(R, z, !F, A);
  }
  function C(R) {
    const { schema: A, errSchemaPath: z, opts: F, self: K } = R;
    A.$ref && F.ignoreKeywordsWithRef && (0, v.schemaHasRulesButRef)(A, K.RULES) && K.logger.warn(`$ref: keywords ignored in schema at path "${z}"`);
  }
  function N(R) {
    const { schema: A, opts: z } = R;
    A.default !== void 0 && z.useDefaults && z.strictSchema && (0, v.checkStrictMode)(R, "default is ignored in the schema root");
  }
  function x(R) {
    const A = R.schema[R.opts.schemaId];
    A && (R.baseId = (0, g.resolveUrl)(R.opts.uriResolver, R.baseId, A));
  }
  function T(R) {
    if (R.schema.$async && !R.schemaEnv.$async)
      throw new Error("async schema in sync schema");
  }
  function I({ gen: R, schemaEnv: A, schema: z, errSchemaPath: F, opts: K }) {
    const W = z.$comment;
    if (K.$comment === !0)
      R.code((0, i._)`${f.default.self}.logger.log(${W})`);
    else if (typeof K.$comment == "function") {
      const oe = (0, i.str)`${F}/$comment`, ye = R.scopeValue("root", { ref: A.root });
      R.code((0, i._)`${f.default.self}.opts.$comment(${W}, ${oe}, ${ye}.schema)`);
    }
  }
  function L(R) {
    const { gen: A, schemaEnv: z, validateName: F, ValidationError: K, opts: W } = R;
    z.$async ? A.if((0, i._)`${f.default.errors} === 0`, () => A.return(f.default.data), () => A.throw((0, i._)`new ${K}(${f.default.vErrors})`)) : (A.assign((0, i._)`${F}.errors`, f.default.vErrors), W.unevaluated && Q(R), A.return((0, i._)`${f.default.errors} === 0`));
  }
  function Q({ gen: R, evaluated: A, props: z, items: F }) {
    z instanceof i.Name && R.assign((0, i._)`${A}.props`, z), F instanceof i.Name && R.assign((0, i._)`${A}.items`, F);
  }
  function te(R, A, z, F) {
    const { gen: K, schema: W, data: oe, allErrors: ye, opts: le, self: de } = R, { RULES: se } = de;
    if (W.$ref && (le.ignoreKeywordsWithRef || !(0, v.schemaHasRulesButRef)(W, se))) {
      K.block(() => U(R, "$ref", se.all.$ref.definition));
      return;
    }
    le.jtd || Y(R, A), K.block(() => {
      for (const pe of se.rules)
        xe(pe);
      xe(se.post);
    });
    function xe(pe) {
      (0, o.shouldUseGroup)(W, pe) && (pe.type ? (K.if((0, n.checkDataType)(pe.type, oe, le.strictNumbers)), fe(R, pe), A.length === 1 && A[0] === pe.type && z && (K.else(), (0, n.reportTypeError)(R)), K.endIf()) : fe(R, pe), ye || K.if((0, i._)`${f.default.errors} === ${F || 0}`));
    }
  }
  function fe(R, A) {
    const { gen: z, schema: F, opts: { useDefaults: K } } = R;
    K && (0, d.assignDefaults)(R, A.type), z.block(() => {
      for (const W of A.rules)
        (0, o.shouldUseRule)(F, W) && U(R, W.keyword, W.definition, A.type);
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
      A.forEach((z) => {
        O(R.dataTypes, z) || P(R, `type "${z}" not allowed by context "${R.dataTypes.join(",")}"`);
      }), y(R, A);
    }
  }
  function V(R, A) {
    A.length > 1 && !(A.length === 2 && A.includes("null")) && P(R, "use allowUnionTypes to allow union type keyword");
  }
  function j(R, A) {
    const z = R.self.RULES.all;
    for (const F in z) {
      const K = z[F];
      if (typeof K == "object" && (0, o.shouldUseRule)(R.schema, K)) {
        const { type: W } = K.definition;
        W.length && !W.some((oe) => D(A, oe)) && P(R, `missing type "${W.join(",")}" for keyword "${F}"`);
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
    const z = [];
    for (const F of R.dataTypes)
      O(A, F) ? z.push(F) : A.includes("integer") && F === "number" && z.push("integer");
    R.dataTypes = z;
  }
  function P(R, A) {
    const z = R.schemaEnv.baseId + R.errSchemaPath;
    A += ` at "${z}" (strictTypes)`, (0, v.checkStrictMode)(R, A, R.opts.strictTypes);
  }
  class M {
    constructor(A, z, F) {
      if ((0, r.validateKeywordUsage)(A, z, F), this.gen = A.gen, this.allErrors = A.allErrors, this.keyword = F, this.data = A.data, this.schema = A.schema[F], this.$data = z.$data && A.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, v.schemaRefOrVal)(A, this.schema, F, this.$data), this.schemaType = z.schemaType, this.parentSchema = A.schema, this.params = {}, this.it = A, this.def = z, this.$data)
        this.schemaCode = A.gen.const("vSchema", Z(this.$data, A));
      else if (this.schemaCode = this.schemaValue, !(0, r.validSchemaType)(this.schema, z.schemaType, z.allowUndefined))
        throw new Error(`${F} value must be ${JSON.stringify(z.schemaType)}`);
      ("code" in z ? z.trackErrors : z.errors !== !1) && (this.errsCount = A.gen.const("_errs", f.default.errors));
    }
    result(A, z, F) {
      this.failResult((0, i.not)(A), z, F);
    }
    failResult(A, z, F) {
      this.gen.if(A), F ? F() : this.error(), z ? (this.gen.else(), z(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    pass(A, z) {
      this.failResult((0, i.not)(A), void 0, z);
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
      const { schemaCode: z } = this;
      this.fail((0, i._)`${z} !== undefined && (${(0, i.or)(this.invalid$data(), A)})`);
    }
    error(A, z, F) {
      if (z) {
        this.setParams(z), this._error(A, F), this.setParams({});
        return;
      }
      this._error(A, F);
    }
    _error(A, z) {
      (A ? w.reportExtraError : w.reportError)(this, this.def.error, z);
    }
    $dataError() {
      (0, w.reportError)(this, this.def.$dataError || w.keyword$DataError);
    }
    reset() {
      if (this.errsCount === void 0)
        throw new Error('add "trackErrors" to keyword definition');
      (0, w.resetErrorsCount)(this.gen, this.errsCount);
    }
    ok(A) {
      this.allErrors || this.gen.if(A);
    }
    setParams(A, z) {
      z ? Object.assign(this.params, A) : this.params = A;
    }
    block$data(A, z, F = i.nil) {
      this.gen.block(() => {
        this.check$data(A, F), z();
      });
    }
    check$data(A = i.nil, z = i.nil) {
      if (!this.$data)
        return;
      const { gen: F, schemaCode: K, schemaType: W, def: oe } = this;
      F.if((0, i.or)((0, i._)`${K} === undefined`, z)), A !== i.nil && F.assign(A, !0), (W.length || oe.validateSchema) && (F.elseIf(this.invalid$data()), this.$dataError(), A !== i.nil && F.assign(A, !1)), F.else();
    }
    invalid$data() {
      const { gen: A, schemaCode: z, schemaType: F, def: K, it: W } = this;
      return (0, i.or)(oe(), ye());
      function oe() {
        if (F.length) {
          if (!(z instanceof i.Name))
            throw new Error("ajv implementation error");
          const le = Array.isArray(F) ? F : [F];
          return (0, i._)`${(0, n.checkDataTypes)(le, z, W.opts.strictNumbers, n.DataType.Wrong)}`;
        }
        return i.nil;
      }
      function ye() {
        if (K.validateSchema) {
          const le = A.scopeValue("validate$data", { ref: K.validateSchema });
          return (0, i._)`!${le}(${z})`;
        }
        return i.nil;
      }
    }
    subschema(A, z) {
      const F = (0, a.getSubschema)(this.it, A);
      (0, a.extendSubschemaData)(F, this.it, A), (0, a.extendSubschemaMode)(F, A);
      const K = { ...this.it, ...F, items: void 0, props: void 0 };
      return h(K, z), K;
    }
    mergeEvaluated(A, z) {
      const { it: F, gen: K } = this;
      F.opts.unevaluated && (F.props !== !0 && A.props !== void 0 && (F.props = v.mergeEvaluated.props(K, A.props, F.props, z)), F.items !== !0 && A.items !== void 0 && (F.items = v.mergeEvaluated.items(K, A.items, F.items, z)));
    }
    mergeValidEvaluated(A, z) {
      const { it: F, gen: K } = this;
      if (F.opts.unevaluated && (F.props !== !0 || F.items !== !0))
        return K.if(z, () => this.mergeEvaluated(A, i.Name)), !0;
    }
  }
  we.KeywordCxt = M;
  function U(R, A, z, F) {
    const K = new M(R, z, A);
    "code" in z ? z.code(K, F) : K.$data && z.validate ? (0, r.funcKeywordCode)(K, z) : "macro" in z ? (0, r.macroKeywordCode)(K, z) : (z.compile || z.validate) && (0, r.funcKeywordCode)(K, z);
  }
  const H = /^\/(?:[^~]|~0|~1)*$/, ee = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function Z(R, { dataLevel: A, dataNames: z, dataPathArr: F }) {
    let K, W;
    if (R === "")
      return f.default.rootData;
    if (R[0] === "/") {
      if (!H.test(R))
        throw new Error(`Invalid JSON-pointer: ${R}`);
      K = R, W = f.default.rootData;
    } else {
      const de = ee.exec(R);
      if (!de)
        throw new Error(`Invalid JSON-pointer: ${R}`);
      const se = +de[1];
      if (K = de[2], K === "#") {
        if (se >= A)
          throw new Error(le("property/index", se));
        return F[A - se];
      }
      if (se > A)
        throw new Error(le("data", se));
      if (W = z[A - se], !K)
        return W;
    }
    let oe = W;
    const ye = K.split("/");
    for (const de of ye)
      de && (W = (0, i._)`${W}${(0, i.getProperty)((0, v.unescapeJsonPointer)(de))}`, oe = (0, i._)`${oe} && ${W}`);
    return oe;
    function le(de, se) {
      return `Cannot access ${de} ${se} levels up, current level is ${A}`;
    }
  }
  return we.getData = Z, we;
}
var Qe = {}, cn;
function Cr() {
  if (cn) return Qe;
  cn = 1, Object.defineProperty(Qe, "__esModule", { value: !0 });
  class e extends Error {
    constructor(o) {
      super("validation failed"), this.errors = o, this.ajv = this.validation = !0;
    }
  }
  return Qe.default = e, Qe;
}
var et = {}, ln;
function tr() {
  if (ln) return et;
  ln = 1, Object.defineProperty(et, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Qt();
  class t extends Error {
    constructor(n, d, r, a) {
      super(a || `can't resolve reference ${r} from id ${d}`), this.missingRef = (0, e.resolveUrl)(n, d, r), this.missingSchema = (0, e.normalizeId)((0, e.getFullPath)(n, this.missingRef));
    }
  }
  return et.default = t, et;
}
var ue = {}, dn;
function rr() {
  if (dn) return ue;
  dn = 1, Object.defineProperty(ue, "__esModule", { value: !0 }), ue.resolveSchema = ue.getCompilingSchema = ue.resolveRef = ue.compileSchema = ue.SchemaEnv = void 0;
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ Cr(), o = /* @__PURE__ */ _e(), n = /* @__PURE__ */ Qt(), d = /* @__PURE__ */ X(), r = /* @__PURE__ */ er();
  class a {
    constructor(m) {
      var l;
      this.refs = {}, this.dynamicAnchors = {};
      let h;
      typeof m.schema == "object" && (h = m.schema), this.schema = m.schema, this.schemaId = m.schemaId, this.root = m.root || this, this.baseId = (l = m.baseId) !== null && l !== void 0 ? l : (0, n.normalizeId)(h?.[m.schemaId || "$id"]), this.schemaPath = m.schemaPath, this.localRefs = m.localRefs, this.meta = m.meta, this.$async = h?.$async, this.refs = {};
    }
  }
  ue.SchemaEnv = a;
  function i(u) {
    const m = v.call(this, u);
    if (m)
      return m;
    const l = (0, n.getFullPath)(this.opts.uriResolver, u.root.baseId), { es5: h, lines: $ } = this.opts.code, { ownProperties: s } = this.opts, c = new e.CodeGen(this.scope, { es5: h, lines: $, ownProperties: s });
    let p;
    u.$async && (p = c.scopeValue("Error", {
      ref: t.default,
      code: (0, e._)`require("ajv/dist/runtime/validation_error").default`
    }));
    const k = c.scopeName("validate");
    u.validateName = k;
    const C = {
      gen: c,
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
      topSchemaRef: c.scopeValue("schema", this.opts.code.source === !0 ? { ref: u.schema, code: (0, e.stringify)(u.schema) } : { ref: u.schema }),
      validateName: k,
      ValidationError: p,
      schema: u.schema,
      schemaEnv: u,
      rootId: l,
      baseId: u.baseId || l,
      schemaPath: e.nil,
      errSchemaPath: u.schemaPath || (this.opts.jtd ? "" : "#"),
      errorPath: (0, e._)`""`,
      opts: this.opts,
      self: this
    };
    let N;
    try {
      this._compilations.add(u), (0, r.validateFunctionCode)(C), c.optimize(this.opts.code.optimize);
      const x = c.toString();
      N = `${c.scopeRefs(o.default.scope)}return ${x}`, this.opts.code.process && (N = this.opts.code.process(N, u));
      const I = new Function(`${o.default.self}`, `${o.default.scope}`, N)(this, this.scope.get());
      if (this.scope.value(k, { ref: I }), I.errors = null, I.schema = u.schema, I.schemaEnv = u, u.$async && (I.$async = !0), this.opts.code.source === !0 && (I.source = { validateName: k, validateCode: x, scopeValues: c._values }), this.opts.unevaluated) {
        const { props: L, items: Q } = C;
        I.evaluated = {
          props: L instanceof e.Name ? void 0 : L,
          items: Q instanceof e.Name ? void 0 : Q,
          dynamicProps: L instanceof e.Name,
          dynamicItems: Q instanceof e.Name
        }, I.source && (I.source.evaluated = (0, e.stringify)(I.evaluated));
      }
      return u.validate = I, u;
    } catch (x) {
      throw delete u.validate, delete u.validateName, N && this.logger.error("Error compiling schema, function code:", N), x;
    } finally {
      this._compilations.delete(u);
    }
  }
  ue.compileSchema = i;
  function f(u, m, l) {
    var h;
    l = (0, n.resolveUrl)(this.opts.uriResolver, m, l);
    const $ = u.refs[l];
    if ($)
      return $;
    let s = S.call(this, u, l);
    if (s === void 0) {
      const c = (h = u.localRefs) === null || h === void 0 ? void 0 : h[l], { schemaId: p } = this.opts;
      c && (s = new a({ schema: c, schemaId: p, root: u, baseId: m }));
    }
    if (s !== void 0)
      return u.refs[l] = g.call(this, s);
  }
  ue.resolveRef = f;
  function g(u) {
    return (0, n.inlineRef)(u.schema, this.opts.inlineRefs) ? u.schema : u.validate ? u : i.call(this, u);
  }
  function v(u) {
    for (const m of this._compilations)
      if (w(m, u))
        return m;
  }
  ue.getCompilingSchema = v;
  function w(u, m) {
    return u.schema === m.schema && u.root === m.root && u.baseId === m.baseId;
  }
  function S(u, m) {
    let l;
    for (; typeof (l = this.refs[m]) == "string"; )
      m = l;
    return l || this.schemas[m] || b.call(this, u, m);
  }
  function b(u, m) {
    const l = this.opts.uriResolver.parse(m), h = (0, n._getFullPath)(this.opts.uriResolver, l);
    let $ = (0, n.getFullPath)(this.opts.uriResolver, u.baseId, void 0);
    if (Object.keys(u.schema).length > 0 && h === $)
      return _.call(this, l, u);
    const s = (0, n.normalizeId)(h), c = this.refs[s] || this.schemas[s];
    if (typeof c == "string") {
      const p = b.call(this, u, c);
      return typeof p?.schema != "object" ? void 0 : _.call(this, l, p);
    }
    if (typeof c?.schema == "object") {
      if (c.validate || i.call(this, c), s === (0, n.normalizeId)(m)) {
        const { schema: p } = c, { schemaId: k } = this.opts, C = p[k];
        return C && ($ = (0, n.resolveUrl)(this.opts.uriResolver, $, C)), new a({ schema: p, schemaId: k, root: u, baseId: $ });
      }
      return _.call(this, l, c);
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
  function _(u, { baseId: m, schema: l, root: h }) {
    var $;
    if ((($ = u.fragment) === null || $ === void 0 ? void 0 : $[0]) !== "/")
      return;
    for (const p of u.fragment.slice(1).split("/")) {
      if (typeof l == "boolean")
        return;
      const k = l[(0, d.unescapeFragment)(p)];
      if (k === void 0)
        return;
      l = k;
      const C = typeof l == "object" && l[this.opts.schemaId];
      !E.has(p) && C && (m = (0, n.resolveUrl)(this.opts.uriResolver, m, C));
    }
    let s;
    if (typeof l != "boolean" && l.$ref && !(0, d.schemaHasRulesButRef)(l, this.RULES)) {
      const p = (0, n.resolveUrl)(this.opts.uriResolver, m, l.$ref);
      s = b.call(this, h, p);
    }
    const { schemaId: c } = this.opts;
    if (s = s || new a({ schema: l, schemaId: c, root: h, baseId: m }), s.schema !== s.root.schema)
      return s;
  }
  return ue;
}
const ls = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", ds = "Meta-schema for $data reference (JSON AnySchema extension proposal)", us = "object", fs = ["$data"], ps = { $data: { type: "string", anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] } }, hs = !1, ms = {
  $id: ls,
  description: ds,
  type: us,
  required: fs,
  properties: ps,
  additionalProperties: hs
};
var tt = {}, Ge = { exports: {} }, hr, un;
function No() {
  if (un) return hr;
  un = 1;
  const e = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu), t = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u), o = RegExp.prototype.test.bind(/^[\da-f]{2}$/iu), n = RegExp.prototype.test.bind(/^[\da-z\-._~]$/iu), d = RegExp.prototype.test.bind(/^[\da-z\-._~!$&'()*+,;=:@/]$/iu);
  function r(s) {
    let c = "", p = 0, k = 0;
    for (k = 0; k < s.length; k++)
      if (p = s[k].charCodeAt(0), p !== 48) {
        if (!(p >= 48 && p <= 57 || p >= 65 && p <= 70 || p >= 97 && p <= 102))
          return "";
        c += s[k];
        break;
      }
    for (k += 1; k < s.length; k++) {
      if (p = s[k].charCodeAt(0), !(p >= 48 && p <= 57 || p >= 65 && p <= 70 || p >= 97 && p <= 102))
        return "";
      c += s[k];
    }
    return c;
  }
  const a = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
  function i(s) {
    return s.length = 0, !0;
  }
  function f(s, c, p) {
    if (s.length) {
      const k = r(s);
      if (k !== "")
        c.push(k);
      else
        return p.error = !0, !1;
      s.length = 0;
    }
    return !0;
  }
  function g(s) {
    let c = 0;
    const p = { error: !1, address: "", zone: "" }, k = [], C = [];
    let N = !1, x = !1, T = f;
    for (let I = 0; I < s.length; I++) {
      const L = s[I];
      if (!(L === "[" || L === "]"))
        if (L === ":") {
          if (N === !0 && (x = !0), !T(C, k, p))
            break;
          if (++c > 7) {
            p.error = !0;
            break;
          }
          I > 0 && s[I - 1] === ":" && (N = !0), k.push(":");
          continue;
        } else if (L === "%") {
          if (!T(C, k, p))
            break;
          T = i;
        } else {
          C.push(L);
          continue;
        }
    }
    return C.length && (T === i ? p.zone = C.join("") : x ? k.push(C.join("")) : k.push(r(C))), p.address = k.join(""), p;
  }
  function v(s) {
    if (w(s, ":") < 2)
      return { host: s, isIPV6: !1 };
    const c = g(s);
    if (c.error)
      return { host: s, isIPV6: !1 };
    {
      let p = c.address, k = c.address;
      return c.zone && (p += "%" + c.zone, k += "%25" + c.zone), { host: p, isIPV6: !0, escapedHost: k };
    }
  }
  function w(s, c) {
    let p = 0;
    for (let k = 0; k < s.length; k++)
      s[k] === c && p++;
    return p;
  }
  function S(s) {
    let c = s;
    const p = [];
    let k = -1, C = 0;
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
      if ((k = c.indexOf("/", 1)) === -1) {
        p.push(c);
        break;
      } else
        p.push(c.slice(0, k)), c = c.slice(k);
    }
    return p.join("");
  }
  const b = { "@": "%40", "/": "%2F", "?": "%3F", "#": "%23", ":": "%3A" }, E = /[@/?#:]/g, _ = /[@/?#]/g;
  function u(s, c) {
    const p = c ? _ : E;
    return p.lastIndex = 0, s.replace(p, (k) => b[k]);
  }
  function m(s, c = !1) {
    if (s.indexOf("%") === -1)
      return s;
    let p = "";
    for (let k = 0; k < s.length; k++) {
      if (s[k] === "%" && k + 2 < s.length) {
        const C = s.slice(k + 1, k + 3);
        if (o(C)) {
          const N = C.toUpperCase(), x = String.fromCharCode(parseInt(N, 16));
          c && n(x) ? p += x : p += "%" + N, k += 2;
          continue;
        }
      }
      p += s[k];
    }
    return p;
  }
  function l(s) {
    let c = "";
    for (let p = 0; p < s.length; p++) {
      if (s[p] === "%" && p + 2 < s.length) {
        const k = s.slice(p + 1, p + 3);
        if (o(k)) {
          const C = k.toUpperCase(), N = String.fromCharCode(parseInt(C, 16));
          N !== "." && n(N) ? c += N : c += "%" + C, p += 2;
          continue;
        }
      }
      d(s[p]) ? c += s[p] : c += escape(s[p]);
    }
    return c;
  }
  function h(s) {
    let c = "";
    for (let p = 0; p < s.length; p++) {
      if (s[p] === "%" && p + 2 < s.length) {
        const k = s.slice(p + 1, p + 3);
        if (o(k)) {
          c += "%" + k.toUpperCase(), p += 2;
          continue;
        }
      }
      c += escape(s[p]);
    }
    return c;
  }
  function $(s) {
    const c = [];
    if (s.userinfo !== void 0 && (c.push(s.userinfo), c.push("@")), s.host !== void 0) {
      let p = unescape(s.host);
      if (!t(p)) {
        const k = v(p);
        k.isIPV6 === !0 ? p = `[${k.escapedHost}]` : p = u(p, !1);
      }
      c.push(p);
    }
    return (typeof s.port == "number" || typeof s.port == "string") && (c.push(":"), c.push(String(s.port))), c.length ? c.join("") : void 0;
  }
  return hr = {
    nonSimpleDomain: a,
    recomposeAuthority: $,
    reescapeHostDelimiters: u,
    normalizePercentEncoding: m,
    normalizePathEncoding: l,
    escapePreservingEscapes: h,
    removeDotSegments: S,
    isIPv4: t,
    isUUID: e,
    normalizeIPv6: v,
    stringArrayToHexStripped: r
  }, hr;
}
var mr, fn;
function ys() {
  if (fn) return mr;
  fn = 1;
  const { isUUID: e } = No(), t = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu, o = (
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
  function d(s) {
    return s.secure === !0 ? !0 : s.secure === !1 ? !1 : s.scheme ? s.scheme.length === 3 && (s.scheme[0] === "w" || s.scheme[0] === "W") && (s.scheme[1] === "s" || s.scheme[1] === "S") && (s.scheme[2] === "s" || s.scheme[2] === "S") : !1;
  }
  function r(s) {
    return s.host || (s.error = s.error || "HTTP URIs must have a host."), s;
  }
  function a(s) {
    const c = String(s.scheme).toLowerCase() === "https";
    return (s.port === (c ? 443 : 80) || s.port === "") && (s.port = void 0), s.path || (s.path = "/"), s;
  }
  function i(s) {
    return s.secure = d(s), s.resourceName = (s.path || "/") + (s.query ? "?" + s.query : ""), s.path = void 0, s.query = void 0, s;
  }
  function f(s) {
    if ((s.port === (d(s) ? 443 : 80) || s.port === "") && (s.port = void 0), typeof s.secure == "boolean" && (s.scheme = s.secure ? "wss" : "ws", s.secure = void 0), s.resourceName) {
      const [c, p] = s.resourceName.split("?");
      s.path = c && c !== "/" ? c : void 0, s.query = p, s.resourceName = void 0;
    }
    return s.fragment = void 0, s;
  }
  function g(s, c) {
    if (!s.path)
      return s.error = "URN can not be parsed", s;
    const p = s.path.match(t);
    if (p) {
      const k = c.scheme || s.scheme || "urn";
      s.nid = p[1].toLowerCase(), s.nss = p[2];
      const C = `${k}:${c.nid || s.nid}`, N = $(C);
      s.path = void 0, N && (s = N.parse(s, c));
    } else
      s.error = s.error || "URN can not be parsed.";
    return s;
  }
  function v(s, c) {
    if (s.nid === void 0)
      throw new Error("URN without nid cannot be serialized");
    const p = c.scheme || s.scheme || "urn", k = s.nid.toLowerCase(), C = `${p}:${c.nid || k}`, N = $(C);
    N && (s = N.serialize(s, c));
    const x = s, T = s.nss;
    return x.path = `${k || c.nid}:${T}`, c.skipEscape = !0, x;
  }
  function w(s, c) {
    const p = s;
    return p.uuid = p.nss, p.nss = void 0, !c.tolerant && (!p.uuid || !e(p.uuid)) && (p.error = p.error || "UUID is not valid."), p;
  }
  function S(s) {
    const c = s;
    return c.nss = (s.uuid || "").toLowerCase(), c;
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
      parse: i,
      serialize: f
    }
  ), u = (
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
      wss: u,
      urn: (
        /** @type {SchemeHandler} */
        {
          scheme: "urn",
          parse: g,
          serialize: v,
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
  Object.setPrototypeOf(h, null);
  function $(s) {
    return s && (h[
      /** @type {SchemeName} */
      s
    ] || h[
      /** @type {SchemeName} */
      s.toLowerCase()
    ]) || void 0;
  }
  return mr = {
    wsIsSecure: d,
    SCHEMES: h,
    isValidSchemeName: n,
    getSchemeHandler: $
  }, mr;
}
var pn;
function gs() {
  if (pn) return Ge.exports;
  pn = 1;
  const { normalizeIPv6: e, removeDotSegments: t, recomposeAuthority: o, normalizePercentEncoding: n, normalizePathEncoding: d, escapePreservingEscapes: r, reescapeHostDelimiters: a, isIPv4: i, nonSimpleDomain: f } = No(), { SCHEMES: g, getSchemeHandler: v } = ys();
  function w(C, N) {
    return typeof C == "string" ? C = /** @type {T} */
    s(C, N) : typeof C == "object" && (C = /** @type {T} */
    $(_(C, N), N)), C;
  }
  function S(C, N, x) {
    const T = x ? Object.assign({ scheme: "null" }, x) : { scheme: "null" }, I = b($(C, T), $(N, T), T, !0);
    return T.skipEscape = !0, _(I, T);
  }
  function b(C, N, x, T) {
    const I = {};
    return T || (C = $(_(C, x), x), N = $(_(N, x), x)), x = x || {}, !x.tolerant && N.scheme ? (I.scheme = N.scheme, I.userinfo = N.userinfo, I.host = N.host, I.port = N.port, I.path = t(N.path || ""), I.query = N.query) : (N.userinfo !== void 0 || N.host !== void 0 || N.port !== void 0 ? (I.userinfo = N.userinfo, I.host = N.host, I.port = N.port, I.path = t(N.path || ""), I.query = N.query) : (N.path ? (N.path[0] === "/" ? I.path = t(N.path) : ((C.userinfo !== void 0 || C.host !== void 0 || C.port !== void 0) && !C.path ? I.path = "/" + N.path : C.path ? I.path = C.path.slice(0, C.path.lastIndexOf("/") + 1) + N.path : I.path = N.path, I.path = t(I.path)), I.query = N.query) : (I.path = C.path, N.query !== void 0 ? I.query = N.query : I.query = C.query), I.userinfo = C.userinfo, I.host = C.host, I.port = C.port), I.scheme = C.scheme), I.fragment = N.fragment, I;
  }
  function E(C, N, x) {
    const T = p(C, x), I = p(N, x);
    return T !== void 0 && I !== void 0 && T.toLowerCase() === I.toLowerCase();
  }
  function _(C, N) {
    const x = {
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
    }, T = Object.assign({}, N), I = [], L = v(T.scheme || x.scheme);
    L && L.serialize && L.serialize(x, T), x.path !== void 0 && (T.skipEscape ? x.path = n(x.path) : (x.path = r(x.path), x.scheme !== void 0 && (x.path = x.path.split("%3A").join(":")))), T.reference !== "suffix" && x.scheme && I.push(x.scheme, ":");
    const Q = o(x);
    if (Q !== void 0 && (T.reference !== "suffix" && I.push("//"), I.push(Q), x.path && x.path[0] !== "/" && I.push("/")), x.path !== void 0) {
      let te = x.path;
      !T.absolutePath && (!L || !L.absolutePath) && (te = t(te)), Q === void 0 && te[0] === "/" && te[1] === "/" && (te = "/%2F" + te.slice(2)), I.push(te);
    }
    return x.query !== void 0 && I.push("?", x.query), x.fragment !== void 0 && I.push("#", x.fragment), I.join("");
  }
  const u = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u, m = /^(?:[^#/:?]+:)?\/\/([^/?#]*)/;
  function l(C, N) {
    if (N[2] !== void 0 && C.path && C.path[0] !== "/")
      return 'URI path must start with "/" when authority is present.';
    if (typeof C.port == "number" && (C.port < 0 || C.port > 65535))
      return "URI port is malformed.";
  }
  function h(C, N) {
    const x = Object.assign({}, N), T = {
      scheme: void 0,
      userinfo: void 0,
      host: "",
      port: void 0,
      path: "",
      query: void 0,
      fragment: void 0
    };
    let I = !1, L = !1;
    x.reference === "suffix" && (x.scheme ? C = x.scheme + ":" + C : C = "//" + C);
    const Q = C.match(m);
    Q !== null && Q[1].indexOf("\\") !== -1 && (T.error = "URI authority must not contain a literal backslash.", I = !0);
    const te = C.match(u);
    if (te) {
      T.scheme = te[1], T.userinfo = te[3], T.host = te[4], T.port = parseInt(te[5], 10), T.path = te[6] || "", T.query = te[7], T.fragment = te[8], isNaN(T.port) && (T.port = te[5]);
      const fe = l(T, te);
      if (fe !== void 0 && (T.error = T.error || fe, I = !0), T.host)
        if (i(T.host) === !1) {
          const V = e(T.host);
          T.host = V.host.toLowerCase(), L = V.isIPV6;
        } else
          L = !0;
      T.scheme === void 0 && T.userinfo === void 0 && T.host === void 0 && T.port === void 0 && T.query === void 0 && !T.path ? T.reference = "same-document" : T.scheme === void 0 ? T.reference = "relative" : T.fragment === void 0 ? T.reference = "absolute" : T.reference = "uri", x.reference && x.reference !== "suffix" && x.reference !== T.reference && (T.error = T.error || "URI is not a " + x.reference + " reference.");
      const Y = v(x.scheme || T.scheme);
      if (!x.unicodeSupport && (!Y || !Y.unicodeSupport) && T.host && (x.domainHost || Y && Y.domainHost) && L === !1 && f(T.host))
        try {
          T.host = new URL("http://" + T.host).hostname;
        } catch (me) {
          T.error = T.error || "Host's domain name can not be converted to ASCII: " + me;
        }
      if ((!Y || Y && !Y.skipNormalize) && (C.indexOf("%") !== -1 && (T.scheme !== void 0 && (T.scheme = unescape(T.scheme)), T.host !== void 0 && (T.host = a(unescape(T.host), L))), T.path && (T.path = d(T.path)), T.fragment))
        try {
          T.fragment = encodeURI(decodeURIComponent(T.fragment));
        } catch {
          T.error = T.error || "URI malformed";
        }
      Y && Y.parse && Y.parse(T, x);
    } else
      T.error = T.error || "URI can not be parsed.";
    return { parsed: T, malformedAuthorityOrPort: I };
  }
  function $(C, N) {
    return h(C, N).parsed;
  }
  function s(C, N) {
    return c(C, N).normalized;
  }
  function c(C, N) {
    const { parsed: x, malformedAuthorityOrPort: T } = h(C, N);
    return {
      normalized: T ? C : _(x, N),
      malformedAuthorityOrPort: T
    };
  }
  function p(C, N) {
    if (typeof C == "string") {
      const { normalized: x, malformedAuthorityOrPort: T } = c(C, N);
      return T ? void 0 : x;
    }
    if (typeof C == "object")
      return _(C, N);
  }
  const k = {
    SCHEMES: g,
    normalize: w,
    resolve: S,
    resolveComponent: b,
    equal: E,
    serialize: _,
    parse: $
  };
  return Ge.exports = k, Ge.exports.default = k, Ge.exports.fastUri = k, Ge.exports;
}
var hn;
function vs() {
  if (hn) return tt;
  hn = 1, Object.defineProperty(tt, "__esModule", { value: !0 });
  const e = gs();
  return e.code = 'require("ajv/dist/runtime/uri").default', tt.default = e, tt;
}
var mn;
function $s() {
  return mn || (mn = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = void 0;
    var t = /* @__PURE__ */ er();
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
    const n = /* @__PURE__ */ Cr(), d = /* @__PURE__ */ tr(), r = /* @__PURE__ */ ko(), a = /* @__PURE__ */ rr(), i = /* @__PURE__ */ G(), f = /* @__PURE__ */ Qt(), g = /* @__PURE__ */ Wt(), v = /* @__PURE__ */ X(), w = ms, S = /* @__PURE__ */ vs(), b = (V, j) => new RegExp(V, j);
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
    ]), u = {
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
      var j, D, O, y, P, M, U, H, ee, Z, R, A, z, F, K, W, oe, ye, le, de, se, xe, pe, nr, or;
      const Ue = V.strict, sr = (j = V.code) === null || j === void 0 ? void 0 : j.optimize, Dr = sr === !0 || sr === void 0 ? 1 : sr || 0, Vr = (O = (D = V.code) === null || D === void 0 ? void 0 : D.regExp) !== null && O !== void 0 ? O : b, Lo = (y = V.uriResolver) !== null && y !== void 0 ? y : S.default;
      return {
        strictSchema: (M = (P = V.strictSchema) !== null && P !== void 0 ? P : Ue) !== null && M !== void 0 ? M : !0,
        strictNumbers: (H = (U = V.strictNumbers) !== null && U !== void 0 ? U : Ue) !== null && H !== void 0 ? H : !0,
        strictTypes: (Z = (ee = V.strictTypes) !== null && ee !== void 0 ? ee : Ue) !== null && Z !== void 0 ? Z : "log",
        strictTuples: (A = (R = V.strictTuples) !== null && R !== void 0 ? R : Ue) !== null && A !== void 0 ? A : "log",
        strictRequired: (F = (z = V.strictRequired) !== null && z !== void 0 ? z : Ue) !== null && F !== void 0 ? F : !1,
        code: V.code ? { ...V.code, optimize: Dr, regExp: Vr } : { optimize: Dr, regExp: Vr },
        loopRequired: (K = V.loopRequired) !== null && K !== void 0 ? K : l,
        loopEnum: (W = V.loopEnum) !== null && W !== void 0 ? W : l,
        meta: (oe = V.meta) !== null && oe !== void 0 ? oe : !0,
        messages: (ye = V.messages) !== null && ye !== void 0 ? ye : !0,
        inlineRefs: (le = V.inlineRefs) !== null && le !== void 0 ? le : !0,
        schemaId: (de = V.schemaId) !== null && de !== void 0 ? de : "$id",
        addUsedSchema: (se = V.addUsedSchema) !== null && se !== void 0 ? se : !0,
        validateSchema: (xe = V.validateSchema) !== null && xe !== void 0 ? xe : !0,
        validateFormats: (pe = V.validateFormats) !== null && pe !== void 0 ? pe : !0,
        unicodeRegExp: (nr = V.unicodeRegExp) !== null && nr !== void 0 ? nr : !0,
        int32range: (or = V.int32range) !== null && or !== void 0 ? or : !0,
        uriResolver: Lo
      };
    }
    class $ {
      constructor(j = {}) {
        this.schemas = {}, this.refs = {}, this.formats = /* @__PURE__ */ Object.create(null), this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), j = this.opts = { ...j, ...h(j) };
        const { es5: D, lines: O } = this.opts.code;
        this.scope = new i.ValueScope({ scope: {}, prefixes: _, es5: D, lines: O }), this.logger = T(j.logger);
        const y = j.validateFormats;
        j.validateFormats = !1, this.RULES = (0, r.getRules)(), s.call(this, u, j, "NOT SUPPORTED"), s.call(this, m, j, "DEPRECATED", "warn"), this._metaOpts = N.call(this), j.formats && k.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), j.keywords && C.call(this, j.keywords), typeof j.meta == "object" && this.addMetaSchema(j.meta), p.call(this), j.validateFormats = y;
      }
      _addVocabularies() {
        this.addKeyword("$async");
      }
      _addDefaultMetaSchema() {
        const { $data: j, meta: D, schemaId: O } = this.opts;
        let y = w;
        O === "id" && (y = { ...w }, y.id = y.$id, delete y.$id), D && j && this.addMetaSchema(y, y[O], !1);
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
          return A.validate || M.call(this, A);
        }
        async function P(Z) {
          Z && !this.getSchema(Z) && await y.call(this, { $ref: Z }, !0);
        }
        async function M(Z) {
          try {
            return this._compileSchemaEnv(Z);
          } catch (R) {
            if (!(R instanceof d.default))
              throw R;
            return U.call(this, R), await H.call(this, R.missingSchema), M.call(this, Z);
          }
        }
        function U({ missingSchema: Z, missingRef: R }) {
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
          for (const M of j)
            this.addSchema(M, void 0, O, y);
          return this;
        }
        let P;
        if (typeof j == "object") {
          const { schemaId: M } = this.opts;
          if (P = j[M], P !== void 0 && typeof P != "string")
            throw new Error(`schema ${M} must be string`);
        }
        return D = (0, f.normalizeId)(D || P), this._checkUnique(D), this.schemas[D] = this._addSchema(j, O, D, y, !0), this;
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
        for (; typeof (D = c.call(this, j)) == "string"; )
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
            const D = c.call(this, j);
            return typeof D == "object" && this._cache.delete(D.schema), delete this.schemas[j], delete this.refs[j], this;
          }
          case "object": {
            const D = j;
            this._cache.delete(D);
            let O = j[this.opts.schemaId];
            return O && (O = (0, f.normalizeId)(O), delete this.schemas[O], delete this.refs[O]), this;
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
        if (L.call(this, O, D), !D)
          return (0, v.eachItem)(O, (P) => Q.call(this, P)), this;
        fe.call(this, D);
        const y = {
          ...D,
          type: (0, g.getJSONTypes)(D.type),
          schemaType: (0, g.getJSONTypes)(D.schemaType)
        };
        return (0, v.eachItem)(O, y.type.length === 0 ? (P) => Q.call(this, P, y) : (P) => y.type.forEach((M) => Q.call(this, P, y, M))), this;
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
          let M = j;
          for (const U of P)
            M = M[U];
          for (const U in O) {
            const H = O[U];
            if (typeof H != "object")
              continue;
            const { $data: ee } = H.definition, Z = M[U];
            ee && Z && (M[U] = me(Z));
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
        let M;
        const { schemaId: U } = this.opts;
        if (typeof j == "object")
          M = j[U];
        else {
          if (this.opts.jtd)
            throw new Error("schema must be object");
          if (typeof j != "boolean")
            throw new Error("schema must be object or boolean");
        }
        let H = this._cache.get(j);
        if (H !== void 0)
          return H;
        O = (0, f.normalizeId)(M || O);
        const ee = f.getSchemaRefs.call(this, j, O);
        return H = new a.SchemaEnv({ schema: j, schemaId: U, meta: D, baseId: O, localRefs: ee }), this._cache.set(H.schema, H), P && !O.startsWith("#") && (O && this._checkUnique(O), this.refs[O] = H), y && this.validateSchema(j, !0), H;
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
    $.ValidationError = n.default, $.MissingRefError = d.default, e.default = $;
    function s(V, j, D, O = "error") {
      for (const y in V) {
        const P = y;
        P in j && this.logger[O](`${D}: option ${y}. ${V[P]}`);
      }
    }
    function c(V) {
      return V = (0, f.normalizeId)(V), this.schemas[V] || this.refs[V];
    }
    function p() {
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
    const x = { log() {
    }, warn() {
    }, error() {
    } };
    function T(V) {
      if (V === !1)
        return x;
      if (V === void 0)
        return console;
      if (V.log && V.warn && V.error)
        return V;
      throw new Error("logger must implement log, warn and error methods");
    }
    const I = /^[a-z_$][a-z0-9_$:-]*$/i;
    function L(V, j) {
      const { RULES: D } = this;
      if ((0, v.eachItem)(V, (O) => {
        if (D.keywords[O])
          throw new Error(`Keyword ${O} is already defined`);
        if (!I.test(O))
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
      let M = y ? P.post : P.rules.find(({ type: H }) => H === D);
      if (M || (M = { type: D, rules: [] }, P.rules.push(M)), P.keywords[V] = !0, !j)
        return;
      const U = {
        keyword: V,
        definition: {
          ...j,
          type: (0, g.getJSONTypes)(j.type),
          schemaType: (0, g.getJSONTypes)(j.schemaType)
        }
      };
      j.before ? te.call(this, M, U, j.before) : M.rules.push(U), P.all[V] = U, (O = j.implements) === null || O === void 0 || O.forEach((H) => this.addKeyword(H));
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
  })(ir)), ir;
}
var rt = {}, nt = {}, ot = {}, yn;
function _s() {
  if (yn) return ot;
  yn = 1, Object.defineProperty(ot, "__esModule", { value: !0 });
  const e = {
    keyword: "id",
    code() {
      throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
    }
  };
  return ot.default = e, ot;
}
var ke = {}, gn;
function Rr() {
  if (gn) return ke;
  gn = 1, Object.defineProperty(ke, "__esModule", { value: !0 }), ke.callRef = ke.getValidate = void 0;
  const e = /* @__PURE__ */ tr(), t = /* @__PURE__ */ be(), o = /* @__PURE__ */ G(), n = /* @__PURE__ */ _e(), d = /* @__PURE__ */ rr(), r = /* @__PURE__ */ X(), a = {
    keyword: "$ref",
    schemaType: "string",
    code(g) {
      const { gen: v, schema: w, it: S } = g, { baseId: b, schemaEnv: E, validateName: _, opts: u, self: m } = S, { root: l } = E;
      if ((w === "#" || w === "#/") && b === l.baseId)
        return $();
      const h = d.resolveRef.call(m, l, b, w);
      if (h === void 0)
        throw new e.default(S.opts.uriResolver, b, w);
      if (h instanceof d.SchemaEnv)
        return s(h);
      return c(h);
      function $() {
        if (E === l)
          return f(g, _, E, E.$async);
        const p = v.scopeValue("root", { ref: l });
        return f(g, (0, o._)`${p}.validate`, l, l.$async);
      }
      function s(p) {
        const k = i(g, p);
        f(g, k, p, p.$async);
      }
      function c(p) {
        const k = v.scopeValue("schema", u.code.source === !0 ? { ref: p, code: (0, o.stringify)(p) } : { ref: p }), C = v.name("valid"), N = g.subschema({
          schema: p,
          dataTypes: [],
          schemaPath: o.nil,
          topSchemaRef: k,
          errSchemaPath: w
        }, C);
        g.mergeEvaluated(N), g.ok(C);
      }
    }
  };
  function i(g, v) {
    const { gen: w } = g;
    return v.validate ? w.scopeValue("validate", { ref: v.validate }) : (0, o._)`${w.scopeValue("wrapper", { ref: v })}.validate`;
  }
  ke.getValidate = i;
  function f(g, v, w, S) {
    const { gen: b, it: E } = g, { allErrors: _, schemaEnv: u, opts: m } = E, l = m.passContext ? n.default.this : o.nil;
    S ? h() : $();
    function h() {
      if (!u.$async)
        throw new Error("async schema referenced by sync schema");
      const p = b.let("valid");
      b.try(() => {
        b.code((0, o._)`await ${(0, t.callValidateCode)(g, v, l)}`), c(v), _ || b.assign(p, !0);
      }, (k) => {
        b.if((0, o._)`!(${k} instanceof ${E.ValidationError})`, () => b.throw(k)), s(k), _ || b.assign(p, !1);
      }), g.ok(p);
    }
    function $() {
      g.result((0, t.callValidateCode)(g, v, l), () => c(v), () => s(v));
    }
    function s(p) {
      const k = (0, o._)`${p}.errors`;
      b.assign(n.default.vErrors, (0, o._)`${n.default.vErrors} === null ? ${k} : ${n.default.vErrors}.concat(${k})`), b.assign(n.default.errors, (0, o._)`${n.default.vErrors}.length`);
    }
    function c(p) {
      var k;
      if (!E.opts.unevaluated)
        return;
      const C = (k = w?.validate) === null || k === void 0 ? void 0 : k.evaluated;
      if (E.props !== !0)
        if (C && !C.dynamicProps)
          C.props !== void 0 && (E.props = r.mergeEvaluated.props(b, C.props, E.props));
        else {
          const N = b.var("props", (0, o._)`${p}.evaluated.props`);
          E.props = r.mergeEvaluated.props(b, N, E.props, o.Name);
        }
      if (E.items !== !0)
        if (C && !C.dynamicItems)
          C.items !== void 0 && (E.items = r.mergeEvaluated.items(b, C.items, E.items));
        else {
          const N = b.var("items", (0, o._)`${p}.evaluated.items`);
          E.items = r.mergeEvaluated.items(b, N, E.items, o.Name);
        }
    }
  }
  return ke.callRef = f, ke.default = a, ke;
}
var vn;
function bs() {
  if (vn) return nt;
  vn = 1, Object.defineProperty(nt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ _s(), t = /* @__PURE__ */ Rr(), o = [
    "$schema",
    "$id",
    "$defs",
    "$vocabulary",
    { keyword: "$comment" },
    "definitions",
    e.default,
    t.default
  ];
  return nt.default = o, nt;
}
var st = {}, at = {}, $n;
function ws() {
  if ($n) return at;
  $n = 1, Object.defineProperty(at, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), t = e.operators, o = {
    maximum: { okStr: "<=", ok: t.LTE, fail: t.GT },
    minimum: { okStr: ">=", ok: t.GTE, fail: t.LT },
    exclusiveMaximum: { okStr: "<", ok: t.LT, fail: t.GTE },
    exclusiveMinimum: { okStr: ">", ok: t.GT, fail: t.LTE }
  }, n = {
    message: ({ keyword: r, schemaCode: a }) => (0, e.str)`must be ${o[r].okStr} ${a}`,
    params: ({ keyword: r, schemaCode: a }) => (0, e._)`{comparison: ${o[r].okStr}, limit: ${a}}`
  }, d = {
    keyword: Object.keys(o),
    type: "number",
    schemaType: "number",
    $data: !0,
    error: n,
    code(r) {
      const { keyword: a, data: i, schemaCode: f } = r;
      r.fail$data((0, e._)`${i} ${o[a].fail} ${f} || isNaN(${i})`);
    }
  };
  return at.default = d, at;
}
var it = {}, _n;
function Ss() {
  if (_n) return it;
  _n = 1, Object.defineProperty(it, "__esModule", { value: !0 });
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
      const { gen: d, data: r, schemaCode: a, it: i } = n, f = i.opts.multipleOfPrecision, g = d.let("res"), v = f ? (0, e._)`Math.abs(Math.round(${g}) - ${g}) > 1e-${f}` : (0, e._)`${g} !== parseInt(${g})`;
      n.fail$data((0, e._)`(${a} === 0 || (${g} = ${r}/${a}, ${v}))`);
    }
  };
  return it.default = o, it;
}
var ct = {}, lt = {}, bn;
function Es() {
  if (bn) return lt;
  bn = 1, Object.defineProperty(lt, "__esModule", { value: !0 });
  function e(t) {
    const o = t.length;
    let n = 0, d = 0, r;
    for (; d < o; )
      n++, r = t.charCodeAt(d++), r >= 55296 && r <= 56319 && d < o && (r = t.charCodeAt(d), (r & 64512) === 56320 && d++);
    return n;
  }
  return lt.default = e, e.code = 'require("ajv/dist/runtime/ucs2length").default', lt;
}
var wn;
function Ps() {
  if (wn) return ct;
  wn = 1, Object.defineProperty(ct, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), o = /* @__PURE__ */ Es(), d = {
    keyword: ["maxLength", "minLength"],
    type: "string",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: r, schemaCode: a }) {
        const i = r === "maxLength" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${i} than ${a} characters`;
      },
      params: ({ schemaCode: r }) => (0, e._)`{limit: ${r}}`
    },
    code(r) {
      const { keyword: a, data: i, schemaCode: f, it: g } = r, v = a === "maxLength" ? e.operators.GT : e.operators.LT, w = g.opts.unicode === !1 ? (0, e._)`${i}.length` : (0, e._)`${(0, t.useFunc)(r.gen, o.default)}(${i})`;
      r.fail$data((0, e._)`${w} ${v} ${f}`);
    }
  };
  return ct.default = d, ct;
}
var dt = {}, Sn;
function ks() {
  if (Sn) return dt;
  Sn = 1, Object.defineProperty(dt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ be(), t = /* @__PURE__ */ X(), o = /* @__PURE__ */ G(), d = {
    keyword: "pattern",
    type: "string",
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: r }) => (0, o.str)`must match pattern "${r}"`,
      params: ({ schemaCode: r }) => (0, o._)`{pattern: ${r}}`
    },
    code(r) {
      const { gen: a, data: i, $data: f, schema: g, schemaCode: v, it: w } = r, S = w.opts.unicodeRegExp ? "u" : "";
      if (f) {
        const { regExp: b } = w.opts.code, E = b.code === "new RegExp" ? (0, o._)`new RegExp` : (0, t.useFunc)(a, b), _ = a.let("valid");
        a.try(() => a.assign(_, (0, o._)`${E}(${v}, ${S}).test(${i})`), () => a.assign(_, !1)), r.fail$data((0, o._)`!${_}`);
      } else {
        const b = (0, e.usePattern)(r, g);
        r.fail$data((0, o._)`!${b}.test(${i})`);
      }
    }
  };
  return dt.default = d, dt;
}
var ut = {}, En;
function Cs() {
  if (En) return ut;
  En = 1, Object.defineProperty(ut, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), o = {
    keyword: ["maxProperties", "minProperties"],
    type: "object",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: n, schemaCode: d }) {
        const r = n === "maxProperties" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${r} than ${d} properties`;
      },
      params: ({ schemaCode: n }) => (0, e._)`{limit: ${n}}`
    },
    code(n) {
      const { keyword: d, data: r, schemaCode: a } = n, i = d === "maxProperties" ? e.operators.GT : e.operators.LT;
      n.fail$data((0, e._)`Object.keys(${r}).length ${i} ${a}`);
    }
  };
  return ut.default = o, ut;
}
var ft = {}, Pn;
function Rs() {
  if (Pn) return ft;
  Pn = 1, Object.defineProperty(ft, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ be(), t = /* @__PURE__ */ G(), o = /* @__PURE__ */ X(), d = {
    keyword: "required",
    type: "object",
    schemaType: "array",
    $data: !0,
    error: {
      message: ({ params: { missingProperty: r } }) => (0, t.str)`must have required property '${r}'`,
      params: ({ params: { missingProperty: r } }) => (0, t._)`{missingProperty: ${r}}`
    },
    code(r) {
      const { gen: a, schema: i, schemaCode: f, data: g, $data: v, it: w } = r, { opts: S } = w;
      if (!v && i.length === 0)
        return;
      const b = i.length >= S.loopRequired;
      if (w.allErrors ? E() : _(), S.strictRequired) {
        const l = r.parentSchema.properties, { definedProperties: h } = r.it;
        for (const $ of i)
          if (l?.[$] === void 0 && !h.has($)) {
            const s = w.schemaEnv.baseId + w.errSchemaPath, c = `required property "${$}" is not defined at "${s}" (strictRequired)`;
            (0, o.checkStrictMode)(w, c, w.opts.strictRequired);
          }
      }
      function E() {
        if (b || v)
          r.block$data(t.nil, u);
        else
          for (const l of i)
            (0, e.checkReportMissingProp)(r, l);
      }
      function _() {
        const l = a.let("missing");
        if (b || v) {
          const h = a.let("valid", !0);
          r.block$data(h, () => m(l, h)), r.ok(h);
        } else
          a.if((0, e.checkMissingProp)(r, i, l)), (0, e.reportMissingProp)(r, l), a.else();
      }
      function u() {
        a.forOf("prop", f, (l) => {
          r.setParams({ missingProperty: l }), a.if((0, e.noPropertyInData)(a, g, l, S.ownProperties), () => r.error());
        });
      }
      function m(l, h) {
        r.setParams({ missingProperty: l }), a.forOf(l, f, () => {
          a.assign(h, (0, e.propertyInData)(a, g, l, S.ownProperties)), a.if((0, t.not)(h), () => {
            r.error(), a.break();
          });
        }, t.nil);
      }
    }
  };
  return ft.default = d, ft;
}
var pt = {}, kn;
function Ns() {
  if (kn) return pt;
  kn = 1, Object.defineProperty(pt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), o = {
    keyword: ["maxItems", "minItems"],
    type: "array",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: n, schemaCode: d }) {
        const r = n === "maxItems" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${r} than ${d} items`;
      },
      params: ({ schemaCode: n }) => (0, e._)`{limit: ${n}}`
    },
    code(n) {
      const { keyword: d, data: r, schemaCode: a } = n, i = d === "maxItems" ? e.operators.GT : e.operators.LT;
      n.fail$data((0, e._)`${r}.length ${i} ${a}`);
    }
  };
  return pt.default = o, pt;
}
var ht = {}, mt = {}, Cn;
function Nr() {
  if (Cn) return mt;
  Cn = 1, Object.defineProperty(mt, "__esModule", { value: !0 });
  const e = Ro();
  return e.code = 'require("ajv/dist/runtime/equal").default', mt.default = e, mt;
}
var Rn;
function js() {
  if (Rn) return ht;
  Rn = 1, Object.defineProperty(ht, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Wt(), t = /* @__PURE__ */ G(), o = /* @__PURE__ */ X(), n = /* @__PURE__ */ Nr(), r = {
    keyword: "uniqueItems",
    type: "array",
    schemaType: "boolean",
    $data: !0,
    error: {
      message: ({ params: { i: a, j: i } }) => (0, t.str)`must NOT have duplicate items (items ## ${i} and ${a} are identical)`,
      params: ({ params: { i: a, j: i } }) => (0, t._)`{i: ${a}, j: ${i}}`
    },
    code(a) {
      const { gen: i, data: f, $data: g, schema: v, parentSchema: w, schemaCode: S, it: b } = a;
      if (!g && !v)
        return;
      const E = i.let("valid"), _ = w.items ? (0, e.getSchemaTypes)(w.items) : [];
      a.block$data(E, u, (0, t._)`${S} === false`), a.ok(E);
      function u() {
        const $ = i.let("i", (0, t._)`${f}.length`), s = i.let("j");
        a.setParams({ i: $, j: s }), i.assign(E, !0), i.if((0, t._)`${$} > 1`, () => (m() ? l : h)($, s));
      }
      function m() {
        return _.length > 0 && !_.some(($) => $ === "object" || $ === "array");
      }
      function l($, s) {
        const c = i.name("item"), p = (0, e.checkDataTypes)(_, c, b.opts.strictNumbers, e.DataType.Wrong), k = i.const("indices", (0, t._)`{}`);
        i.for((0, t._)`;${$}--;`, () => {
          i.let(c, (0, t._)`${f}[${$}]`), i.if(p, (0, t._)`continue`), _.length > 1 && i.if((0, t._)`typeof ${c} == "string"`, (0, t._)`${c} += "_"`), i.if((0, t._)`typeof ${k}[${c}] == "number"`, () => {
            i.assign(s, (0, t._)`${k}[${c}]`), a.error(), i.assign(E, !1).break();
          }).code((0, t._)`${k}[${c}] = ${$}`);
        });
      }
      function h($, s) {
        const c = (0, o.useFunc)(i, n.default), p = i.name("outer");
        i.label(p).for((0, t._)`;${$}--;`, () => i.for((0, t._)`${s} = ${$}; ${s}--;`, () => i.if((0, t._)`${c}(${f}[${$}], ${f}[${s}])`, () => {
          a.error(), i.assign(E, !1).break(p);
        })));
      }
    }
  };
  return ht.default = r, ht;
}
var yt = {}, Nn;
function As() {
  if (Nn) return yt;
  Nn = 1, Object.defineProperty(yt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), o = /* @__PURE__ */ Nr(), d = {
    keyword: "const",
    $data: !0,
    error: {
      message: "must be equal to constant",
      params: ({ schemaCode: r }) => (0, e._)`{allowedValue: ${r}}`
    },
    code(r) {
      const { gen: a, data: i, $data: f, schemaCode: g, schema: v } = r;
      f || v && typeof v == "object" ? r.fail$data((0, e._)`!${(0, t.useFunc)(a, o.default)}(${i}, ${g})`) : r.fail((0, e._)`${v} !== ${i}`);
    }
  };
  return yt.default = d, yt;
}
var gt = {}, jn;
function Os() {
  if (jn) return gt;
  jn = 1, Object.defineProperty(gt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), o = /* @__PURE__ */ Nr(), d = {
    keyword: "enum",
    schemaType: "array",
    $data: !0,
    error: {
      message: "must be equal to one of the allowed values",
      params: ({ schemaCode: r }) => (0, e._)`{allowedValues: ${r}}`
    },
    code(r) {
      const { gen: a, data: i, $data: f, schema: g, schemaCode: v, it: w } = r;
      if (!f && g.length === 0)
        throw new Error("enum must have non-empty array");
      const S = g.length >= w.opts.loopEnum;
      let b;
      const E = () => b ?? (b = (0, t.useFunc)(a, o.default));
      let _;
      if (S || f)
        _ = a.let("valid"), r.block$data(_, u);
      else {
        if (!Array.isArray(g))
          throw new Error("ajv implementation error");
        const l = a.const("vSchema", v);
        _ = (0, e.or)(...g.map((h, $) => m(l, $)));
      }
      r.pass(_);
      function u() {
        a.assign(_, !1), a.forOf("v", v, (l) => a.if((0, e._)`${E()}(${i}, ${l})`, () => a.assign(_, !0).break()));
      }
      function m(l, h) {
        const $ = g[h];
        return typeof $ == "object" && $ !== null ? (0, e._)`${E()}(${i}, ${l}[${h}])` : (0, e._)`${i} === ${$}`;
      }
    }
  };
  return gt.default = d, gt;
}
var An;
function Ts() {
  if (An) return st;
  An = 1, Object.defineProperty(st, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ws(), t = /* @__PURE__ */ Ss(), o = /* @__PURE__ */ Ps(), n = /* @__PURE__ */ ks(), d = /* @__PURE__ */ Cs(), r = /* @__PURE__ */ Rs(), a = /* @__PURE__ */ Ns(), i = /* @__PURE__ */ js(), f = /* @__PURE__ */ As(), g = /* @__PURE__ */ Os(), v = [
    // number
    e.default,
    t.default,
    // string
    o.default,
    n.default,
    // object
    d.default,
    r.default,
    // array
    a.default,
    i.default,
    // any
    { keyword: "type", schemaType: ["string", "array"] },
    { keyword: "nullable", schemaType: "boolean" },
    f.default,
    g.default
  ];
  return st.default = v, st;
}
var vt = {}, Me = {}, On;
function jo() {
  if (On) return Me;
  On = 1, Object.defineProperty(Me, "__esModule", { value: !0 }), Me.validateAdditionalItems = void 0;
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
      const { parentSchema: a, it: i } = r, { items: f } = a;
      if (!Array.isArray(f)) {
        (0, t.checkStrictMode)(i, '"additionalItems" is ignored when "items" is not an array of schemas');
        return;
      }
      d(r, f);
    }
  };
  function d(r, a) {
    const { gen: i, schema: f, data: g, keyword: v, it: w } = r;
    w.items = !0;
    const S = i.const("len", (0, e._)`${g}.length`);
    if (f === !1)
      r.setParams({ len: a.length }), r.pass((0, e._)`${S} <= ${a.length}`);
    else if (typeof f == "object" && !(0, t.alwaysValidSchema)(w, f)) {
      const E = i.var("valid", (0, e._)`${S} <= ${a.length}`);
      i.if((0, e.not)(E), () => b(E)), r.ok(E);
    }
    function b(E) {
      i.forRange("i", a.length, S, (_) => {
        r.subschema({ keyword: v, dataProp: _, dataPropType: t.Type.Num }, E), w.allErrors || i.if((0, e.not)(E), () => i.break());
      });
    }
  }
  return Me.validateAdditionalItems = d, Me.default = n, Me;
}
var $t = {}, Ie = {}, Tn;
function Ao() {
  if (Tn) return Ie;
  Tn = 1, Object.defineProperty(Ie, "__esModule", { value: !0 }), Ie.validateTuple = void 0;
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), o = /* @__PURE__ */ be(), n = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "array", "boolean"],
    before: "uniqueItems",
    code(r) {
      const { schema: a, it: i } = r;
      if (Array.isArray(a))
        return d(r, "additionalItems", a);
      i.items = !0, !(0, t.alwaysValidSchema)(i, a) && r.ok((0, o.validateArray)(r));
    }
  };
  function d(r, a, i = r.schema) {
    const { gen: f, parentSchema: g, data: v, keyword: w, it: S } = r;
    _(g), S.opts.unevaluated && i.length && S.items !== !0 && (S.items = t.mergeEvaluated.items(f, i.length, S.items));
    const b = f.name("valid"), E = f.const("len", (0, e._)`${v}.length`);
    i.forEach((u, m) => {
      (0, t.alwaysValidSchema)(S, u) || (f.if((0, e._)`${E} > ${m}`, () => r.subschema({
        keyword: w,
        schemaProp: m,
        dataProp: m
      }, b)), r.ok(b));
    });
    function _(u) {
      const { opts: m, errSchemaPath: l } = S, h = i.length, $ = h === u.minItems && (h === u.maxItems || u[a] === !1);
      if (m.strictTuples && !$) {
        const s = `"${w}" is ${h}-tuple, but minItems or maxItems/${a} are not specified or different at path "${l}"`;
        (0, t.checkStrictMode)(S, s, m.strictTuples);
      }
    }
  }
  return Ie.validateTuple = d, Ie.default = n, Ie;
}
var xn;
function xs() {
  if (xn) return $t;
  xn = 1, Object.defineProperty($t, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ao(), t = {
    keyword: "prefixItems",
    type: "array",
    schemaType: ["array"],
    before: "uniqueItems",
    code: (o) => (0, e.validateTuple)(o, "items")
  };
  return $t.default = t, $t;
}
var _t = {}, Mn;
function Ms() {
  if (Mn) return _t;
  Mn = 1, Object.defineProperty(_t, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), o = /* @__PURE__ */ be(), n = /* @__PURE__ */ jo(), r = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    error: {
      message: ({ params: { len: a } }) => (0, e.str)`must NOT have more than ${a} items`,
      params: ({ params: { len: a } }) => (0, e._)`{limit: ${a}}`
    },
    code(a) {
      const { schema: i, parentSchema: f, it: g } = a, { prefixItems: v } = f;
      g.items = !0, !(0, t.alwaysValidSchema)(g, i) && (v ? (0, n.validateAdditionalItems)(a, v) : a.ok((0, o.validateArray)(a)));
    }
  };
  return _t.default = r, _t;
}
var bt = {}, In;
function Is() {
  if (In) return bt;
  In = 1, Object.defineProperty(bt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), n = {
    keyword: "contains",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    trackErrors: !0,
    error: {
      message: ({ params: { min: d, max: r } }) => r === void 0 ? (0, e.str)`must contain at least ${d} valid item(s)` : (0, e.str)`must contain at least ${d} and no more than ${r} valid item(s)`,
      params: ({ params: { min: d, max: r } }) => r === void 0 ? (0, e._)`{minContains: ${d}}` : (0, e._)`{minContains: ${d}, maxContains: ${r}}`
    },
    code(d) {
      const { gen: r, schema: a, parentSchema: i, data: f, it: g } = d;
      let v, w;
      const { minContains: S, maxContains: b } = i;
      g.opts.next ? (v = S === void 0 ? 1 : S, w = b) : v = 1;
      const E = r.const("len", (0, e._)`${f}.length`);
      if (d.setParams({ min: v, max: w }), w === void 0 && v === 0) {
        (0, t.checkStrictMode)(g, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
        return;
      }
      if (w !== void 0 && v > w) {
        (0, t.checkStrictMode)(g, '"minContains" > "maxContains" is always invalid'), d.fail();
        return;
      }
      if ((0, t.alwaysValidSchema)(g, a)) {
        let h = (0, e._)`${E} >= ${v}`;
        w !== void 0 && (h = (0, e._)`${h} && ${E} <= ${w}`), d.pass(h);
        return;
      }
      g.items = !0;
      const _ = r.name("valid");
      w === void 0 && v === 1 ? m(_, () => r.if(_, () => r.break())) : v === 0 ? (r.let(_, !0), w !== void 0 && r.if((0, e._)`${f}.length > 0`, u)) : (r.let(_, !1), u()), d.result(_, () => d.reset());
      function u() {
        const h = r.name("_valid"), $ = r.let("count", 0);
        m(h, () => r.if(h, () => l($)));
      }
      function m(h, $) {
        r.forRange("i", 0, E, (s) => {
          d.subschema({
            keyword: "contains",
            dataProp: s,
            dataPropType: t.Type.Num,
            compositeRule: !0
          }, h), $();
        });
      }
      function l(h) {
        r.code((0, e._)`${h}++`), w === void 0 ? r.if((0, e._)`${h} >= ${v}`, () => r.assign(_, !0).break()) : (r.if((0, e._)`${h} > ${w}`, () => r.assign(_, !1).break()), v === 1 ? r.assign(_, !0) : r.if((0, e._)`${h} >= ${v}`, () => r.assign(_, !0)));
      }
    }
  };
  return bt.default = n, bt;
}
var yr = {}, qn;
function jr() {
  return qn || (qn = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
    const t = /* @__PURE__ */ G(), o = /* @__PURE__ */ X(), n = /* @__PURE__ */ be();
    e.error = {
      message: ({ params: { property: f, depsCount: g, deps: v } }) => {
        const w = g === 1 ? "property" : "properties";
        return (0, t.str)`must have ${w} ${v} when property ${f} is present`;
      },
      params: ({ params: { property: f, depsCount: g, deps: v, missingProperty: w } }) => (0, t._)`{property: ${f},
    missingProperty: ${w},
    depsCount: ${g},
    deps: ${v}}`
      // TODO change to reference
    };
    const d = {
      keyword: "dependencies",
      type: "object",
      schemaType: "object",
      error: e.error,
      code(f) {
        const [g, v] = r(f);
        a(f, g), i(f, v);
      }
    };
    function r({ schema: f }) {
      const g = {}, v = {};
      for (const w in f) {
        if (w === "__proto__")
          continue;
        const S = Array.isArray(f[w]) ? g : v;
        S[w] = f[w];
      }
      return [g, v];
    }
    function a(f, g = f.schema) {
      const { gen: v, data: w, it: S } = f;
      if (Object.keys(g).length === 0)
        return;
      const b = v.let("missing");
      for (const E in g) {
        const _ = g[E];
        if (_.length === 0)
          continue;
        const u = (0, n.propertyInData)(v, w, E, S.opts.ownProperties);
        f.setParams({
          property: E,
          depsCount: _.length,
          deps: _.join(", ")
        }), S.allErrors ? v.if(u, () => {
          for (const m of _)
            (0, n.checkReportMissingProp)(f, m);
        }) : (v.if((0, t._)`${u} && (${(0, n.checkMissingProp)(f, _, b)})`), (0, n.reportMissingProp)(f, b), v.else());
      }
    }
    e.validatePropertyDeps = a;
    function i(f, g = f.schema) {
      const { gen: v, data: w, keyword: S, it: b } = f, E = v.name("valid");
      for (const _ in g)
        (0, o.alwaysValidSchema)(b, g[_]) || (v.if(
          (0, n.propertyInData)(v, w, _, b.opts.ownProperties),
          () => {
            const u = f.subschema({ keyword: S, schemaProp: _ }, E);
            f.mergeValidEvaluated(u, E);
          },
          () => v.var(E, !0)
          // TODO var
        ), f.ok(E));
    }
    e.validateSchemaDeps = i, e.default = d;
  })(yr)), yr;
}
var wt = {}, zn;
function qs() {
  if (zn) return wt;
  zn = 1, Object.defineProperty(wt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), n = {
    keyword: "propertyNames",
    type: "object",
    schemaType: ["object", "boolean"],
    error: {
      message: "property name must be valid",
      params: ({ params: d }) => (0, e._)`{propertyName: ${d.propertyName}}`
    },
    code(d) {
      const { gen: r, schema: a, data: i, it: f } = d;
      if ((0, t.alwaysValidSchema)(f, a))
        return;
      const g = r.name("valid");
      r.forIn("key", i, (v) => {
        d.setParams({ propertyName: v }), d.subschema({
          keyword: "propertyNames",
          data: v,
          dataTypes: ["string"],
          propertyName: v,
          compositeRule: !0
        }, g), r.if((0, e.not)(g), () => {
          d.error(!0), f.allErrors || r.break();
        });
      }), d.ok(g);
    }
  };
  return wt.default = n, wt;
}
var St = {}, Dn;
function Oo() {
  if (Dn) return St;
  Dn = 1, Object.defineProperty(St, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ be(), t = /* @__PURE__ */ G(), o = /* @__PURE__ */ _e(), n = /* @__PURE__ */ X(), r = {
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
      const { gen: i, schema: f, parentSchema: g, data: v, errsCount: w, it: S } = a;
      if (!w)
        throw new Error("ajv implementation error");
      const { allErrors: b, opts: E } = S;
      if (S.props = !0, E.removeAdditional !== "all" && (0, n.alwaysValidSchema)(S, f))
        return;
      const _ = (0, e.allSchemaProperties)(g.properties), u = (0, e.allSchemaProperties)(g.patternProperties);
      m(), a.ok((0, t._)`${w} === ${o.default.errors}`);
      function m() {
        i.forIn("key", v, (c) => {
          !_.length && !u.length ? $(c) : i.if(l(c), () => $(c));
        });
      }
      function l(c) {
        let p;
        if (_.length > 8) {
          const k = (0, n.schemaRefOrVal)(S, g.properties, "properties");
          p = (0, e.isOwnProperty)(i, k, c);
        } else _.length ? p = (0, t.or)(..._.map((k) => (0, t._)`${c} === ${k}`)) : p = t.nil;
        return u.length && (p = (0, t.or)(p, ...u.map((k) => (0, t._)`${(0, e.usePattern)(a, k)}.test(${c})`))), (0, t.not)(p);
      }
      function h(c) {
        i.code((0, t._)`delete ${v}[${c}]`);
      }
      function $(c) {
        if (E.removeAdditional === "all" || E.removeAdditional && f === !1) {
          h(c);
          return;
        }
        if (f === !1) {
          a.setParams({ additionalProperty: c }), a.error(), b || i.break();
          return;
        }
        if (typeof f == "object" && !(0, n.alwaysValidSchema)(S, f)) {
          const p = i.name("valid");
          E.removeAdditional === "failing" ? (s(c, p, !1), i.if((0, t.not)(p), () => {
            a.reset(), h(c);
          })) : (s(c, p), b || i.if((0, t.not)(p), () => i.break()));
        }
      }
      function s(c, p, k) {
        const C = {
          keyword: "additionalProperties",
          dataProp: c,
          dataPropType: n.Type.Str
        };
        k === !1 && Object.assign(C, {
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }), a.subschema(C, p);
      }
    }
  };
  return St.default = r, St;
}
var Et = {}, Vn;
function zs() {
  if (Vn) return Et;
  Vn = 1, Object.defineProperty(Et, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ er(), t = /* @__PURE__ */ be(), o = /* @__PURE__ */ X(), n = /* @__PURE__ */ Oo(), d = {
    keyword: "properties",
    type: "object",
    schemaType: "object",
    code(r) {
      const { gen: a, schema: i, parentSchema: f, data: g, it: v } = r;
      v.opts.removeAdditional === "all" && f.additionalProperties === void 0 && n.default.code(new e.KeywordCxt(v, n.default, "additionalProperties"));
      const w = (0, t.allSchemaProperties)(i);
      for (const u of w)
        v.definedProperties.add(u);
      v.opts.unevaluated && w.length && v.props !== !0 && (v.props = o.mergeEvaluated.props(a, (0, o.toHash)(w), v.props));
      const S = w.filter((u) => !(0, o.alwaysValidSchema)(v, i[u]));
      if (S.length === 0)
        return;
      const b = a.name("valid");
      for (const u of S)
        E(u) ? _(u) : (a.if((0, t.propertyInData)(a, g, u, v.opts.ownProperties)), _(u), v.allErrors || a.else().var(b, !0), a.endIf()), r.it.definedProperties.add(u), r.ok(b);
      function E(u) {
        return v.opts.useDefaults && !v.compositeRule && i[u].default !== void 0;
      }
      function _(u) {
        r.subschema({
          keyword: "properties",
          schemaProp: u,
          dataProp: u
        }, b);
      }
    }
  };
  return Et.default = d, Et;
}
var Pt = {}, Fn;
function Ds() {
  if (Fn) return Pt;
  Fn = 1, Object.defineProperty(Pt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ be(), t = /* @__PURE__ */ G(), o = /* @__PURE__ */ X(), n = /* @__PURE__ */ X(), d = {
    keyword: "patternProperties",
    type: "object",
    schemaType: "object",
    code(r) {
      const { gen: a, schema: i, data: f, parentSchema: g, it: v } = r, { opts: w } = v, S = (0, e.allSchemaProperties)(i), b = S.filter(($) => (0, o.alwaysValidSchema)(v, i[$]));
      if (S.length === 0 || b.length === S.length && (!v.opts.unevaluated || v.props === !0))
        return;
      const E = w.strictSchema && !w.allowMatchingProperties && g.properties, _ = a.name("valid");
      v.props !== !0 && !(v.props instanceof t.Name) && (v.props = (0, n.evaluatedPropsToName)(a, v.props));
      const { props: u } = v;
      m();
      function m() {
        for (const $ of S)
          E && l($), v.allErrors ? h($) : (a.var(_, !0), h($), a.if(_));
      }
      function l($) {
        for (const s in E)
          new RegExp($).test(s) && (0, o.checkStrictMode)(v, `property ${s} matches pattern ${$} (use allowMatchingProperties)`);
      }
      function h($) {
        a.forIn("key", f, (s) => {
          a.if((0, t._)`${(0, e.usePattern)(r, $)}.test(${s})`, () => {
            const c = b.includes($);
            c || r.subschema({
              keyword: "patternProperties",
              schemaProp: $,
              dataProp: s,
              dataPropType: n.Type.Str
            }, _), v.opts.unevaluated && u !== !0 ? a.assign((0, t._)`${u}[${s}]`, !0) : !c && !v.allErrors && a.if((0, t.not)(_), () => a.break());
          });
        });
      }
    }
  };
  return Pt.default = d, Pt;
}
var kt = {}, Bn;
function Vs() {
  if (Bn) return kt;
  Bn = 1, Object.defineProperty(kt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ X(), t = {
    keyword: "not",
    schemaType: ["object", "boolean"],
    trackErrors: !0,
    code(o) {
      const { gen: n, schema: d, it: r } = o;
      if ((0, e.alwaysValidSchema)(r, d)) {
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
  return kt.default = t, kt;
}
var Ct = {}, Ln;
function Fs() {
  if (Ln) return Ct;
  Ln = 1, Object.defineProperty(Ct, "__esModule", { value: !0 });
  const t = {
    keyword: "anyOf",
    schemaType: "array",
    trackErrors: !0,
    code: (/* @__PURE__ */ be()).validateUnion,
    error: { message: "must match a schema in anyOf" }
  };
  return Ct.default = t, Ct;
}
var Rt = {}, Un;
function Bs() {
  if (Un) return Rt;
  Un = 1, Object.defineProperty(Rt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), n = {
    keyword: "oneOf",
    schemaType: "array",
    trackErrors: !0,
    error: {
      message: "must match exactly one schema in oneOf",
      params: ({ params: d }) => (0, e._)`{passingSchemas: ${d.passing}}`
    },
    code(d) {
      const { gen: r, schema: a, parentSchema: i, it: f } = d;
      if (!Array.isArray(a))
        throw new Error("ajv implementation error");
      if (f.opts.discriminator && i.discriminator)
        return;
      const g = a, v = r.let("valid", !1), w = r.let("passing", null), S = r.name("_valid");
      d.setParams({ passing: w }), r.block(b), d.result(v, () => d.reset(), () => d.error(!0));
      function b() {
        g.forEach((E, _) => {
          let u;
          (0, t.alwaysValidSchema)(f, E) ? r.var(S, !0) : u = d.subschema({
            keyword: "oneOf",
            schemaProp: _,
            compositeRule: !0
          }, S), _ > 0 && r.if((0, e._)`${S} && ${v}`).assign(v, !1).assign(w, (0, e._)`[${w}, ${_}]`).else(), r.if(S, () => {
            r.assign(v, !0), r.assign(w, _), u && d.mergeEvaluated(u, e.Name);
          });
        });
      }
    }
  };
  return Rt.default = n, Rt;
}
var Nt = {}, Kn;
function Ls() {
  if (Kn) return Nt;
  Kn = 1, Object.defineProperty(Nt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ X(), t = {
    keyword: "allOf",
    schemaType: "array",
    code(o) {
      const { gen: n, schema: d, it: r } = o;
      if (!Array.isArray(d))
        throw new Error("ajv implementation error");
      const a = n.name("valid");
      d.forEach((i, f) => {
        if ((0, e.alwaysValidSchema)(r, i))
          return;
        const g = o.subschema({ keyword: "allOf", schemaProp: f }, a);
        o.ok(a), o.mergeEvaluated(g);
      });
    }
  };
  return Nt.default = t, Nt;
}
var jt = {}, Hn;
function Us() {
  if (Hn) return jt;
  Hn = 1, Object.defineProperty(jt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), n = {
    keyword: "if",
    schemaType: ["object", "boolean"],
    trackErrors: !0,
    error: {
      message: ({ params: r }) => (0, e.str)`must match "${r.ifClause}" schema`,
      params: ({ params: r }) => (0, e._)`{failingKeyword: ${r.ifClause}}`
    },
    code(r) {
      const { gen: a, parentSchema: i, it: f } = r;
      i.then === void 0 && i.else === void 0 && (0, t.checkStrictMode)(f, '"if" without "then" and "else" is ignored');
      const g = d(f, "then"), v = d(f, "else");
      if (!g && !v)
        return;
      const w = a.let("valid", !0), S = a.name("_valid");
      if (b(), r.reset(), g && v) {
        const _ = a.let("ifClause");
        r.setParams({ ifClause: _ }), a.if(S, E("then", _), E("else", _));
      } else g ? a.if(S, E("then")) : a.if((0, e.not)(S), E("else"));
      r.pass(w, () => r.error(!0));
      function b() {
        const _ = r.subschema({
          keyword: "if",
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }, S);
        r.mergeEvaluated(_);
      }
      function E(_, u) {
        return () => {
          const m = r.subschema({ keyword: _ }, S);
          a.assign(w, S), r.mergeValidEvaluated(m, w), u ? a.assign(u, (0, e._)`${_}`) : r.setParams({ ifClause: _ });
        };
      }
    }
  };
  function d(r, a) {
    const i = r.schema[a];
    return i !== void 0 && !(0, t.alwaysValidSchema)(r, i);
  }
  return jt.default = n, jt;
}
var At = {}, Gn;
function Ks() {
  if (Gn) return At;
  Gn = 1, Object.defineProperty(At, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ X(), t = {
    keyword: ["then", "else"],
    schemaType: ["object", "boolean"],
    code({ keyword: o, parentSchema: n, it: d }) {
      n.if === void 0 && (0, e.checkStrictMode)(d, `"${o}" without "if" is ignored`);
    }
  };
  return At.default = t, At;
}
var Jn;
function Hs() {
  if (Jn) return vt;
  Jn = 1, Object.defineProperty(vt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ jo(), t = /* @__PURE__ */ xs(), o = /* @__PURE__ */ Ao(), n = /* @__PURE__ */ Ms(), d = /* @__PURE__ */ Is(), r = /* @__PURE__ */ jr(), a = /* @__PURE__ */ qs(), i = /* @__PURE__ */ Oo(), f = /* @__PURE__ */ zs(), g = /* @__PURE__ */ Ds(), v = /* @__PURE__ */ Vs(), w = /* @__PURE__ */ Fs(), S = /* @__PURE__ */ Bs(), b = /* @__PURE__ */ Ls(), E = /* @__PURE__ */ Us(), _ = /* @__PURE__ */ Ks();
  function u(m = !1) {
    const l = [
      // any
      v.default,
      w.default,
      S.default,
      b.default,
      E.default,
      _.default,
      // object
      a.default,
      i.default,
      r.default,
      f.default,
      g.default
    ];
    return m ? l.push(t.default, n.default) : l.push(e.default, o.default), l.push(d.default), l;
  }
  return vt.default = u, vt;
}
var Ot = {}, qe = {}, Wn;
function To() {
  if (Wn) return qe;
  Wn = 1, Object.defineProperty(qe, "__esModule", { value: !0 }), qe.dynamicAnchor = void 0;
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ _e(), o = /* @__PURE__ */ rr(), n = /* @__PURE__ */ Rr(), d = {
    keyword: "$dynamicAnchor",
    schemaType: "string",
    code: (i) => r(i, i.schema)
  };
  function r(i, f) {
    const { gen: g, it: v } = i;
    v.schemaEnv.root.dynamicAnchors[f] = !0;
    const w = (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(f)}`, S = v.errSchemaPath === "#" ? v.validateName : a(i);
    g.if((0, e._)`!${w}`, () => g.assign(w, S));
  }
  qe.dynamicAnchor = r;
  function a(i) {
    const { schemaEnv: f, schema: g, self: v } = i.it, { root: w, baseId: S, localRefs: b, meta: E } = f.root, { schemaId: _ } = v.opts, u = new o.SchemaEnv({ schema: g, schemaId: _, root: w, baseId: S, localRefs: b, meta: E });
    return o.compileSchema.call(v, u), (0, n.getValidate)(i, u);
  }
  return qe.default = d, qe;
}
var ze = {}, Yn;
function xo() {
  if (Yn) return ze;
  Yn = 1, Object.defineProperty(ze, "__esModule", { value: !0 }), ze.dynamicRef = void 0;
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ _e(), o = /* @__PURE__ */ Rr(), n = {
    keyword: "$dynamicRef",
    schemaType: "string",
    code: (r) => d(r, r.schema)
  };
  function d(r, a) {
    const { gen: i, keyword: f, it: g } = r;
    if (a[0] !== "#")
      throw new Error(`"${f}" only supports hash fragment reference`);
    const v = a.slice(1);
    if (g.allErrors)
      w();
    else {
      const b = i.let("valid", !1);
      w(b), r.ok(b);
    }
    function w(b) {
      if (g.schemaEnv.root.dynamicAnchors[v]) {
        const E = i.let("_v", (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(v)}`);
        i.if(E, S(E, b), S(g.validateName, b));
      } else
        S(g.validateName, b)();
    }
    function S(b, E) {
      return E ? () => i.block(() => {
        (0, o.callRef)(r, b), i.let(E, !0);
      }) : () => (0, o.callRef)(r, b);
    }
  }
  return ze.dynamicRef = d, ze.default = n, ze;
}
var Tt = {}, Xn;
function Gs() {
  if (Xn) return Tt;
  Xn = 1, Object.defineProperty(Tt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ To(), t = /* @__PURE__ */ X(), o = {
    keyword: "$recursiveAnchor",
    schemaType: "boolean",
    code(n) {
      n.schema ? (0, e.dynamicAnchor)(n, "") : (0, t.checkStrictMode)(n.it, "$recursiveAnchor: false is ignored");
    }
  };
  return Tt.default = o, Tt;
}
var xt = {}, Zn;
function Js() {
  if (Zn) return xt;
  Zn = 1, Object.defineProperty(xt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ xo(), t = {
    keyword: "$recursiveRef",
    schemaType: "string",
    code: (o) => (0, e.dynamicRef)(o, o.schema)
  };
  return xt.default = t, xt;
}
var Qn;
function Ws() {
  if (Qn) return Ot;
  Qn = 1, Object.defineProperty(Ot, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ To(), t = /* @__PURE__ */ xo(), o = /* @__PURE__ */ Gs(), n = /* @__PURE__ */ Js(), d = [e.default, t.default, o.default, n.default];
  return Ot.default = d, Ot;
}
var Mt = {}, It = {}, eo;
function Ys() {
  if (eo) return It;
  eo = 1, Object.defineProperty(It, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ jr(), t = {
    keyword: "dependentRequired",
    type: "object",
    schemaType: "object",
    error: e.error,
    code: (o) => (0, e.validatePropertyDeps)(o)
  };
  return It.default = t, It;
}
var qt = {}, to;
function Xs() {
  if (to) return qt;
  to = 1, Object.defineProperty(qt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ jr(), t = {
    keyword: "dependentSchemas",
    type: "object",
    schemaType: "object",
    code: (o) => (0, e.validateSchemaDeps)(o)
  };
  return qt.default = t, qt;
}
var zt = {}, ro;
function Zs() {
  if (ro) return zt;
  ro = 1, Object.defineProperty(zt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ X(), t = {
    keyword: ["maxContains", "minContains"],
    type: "array",
    schemaType: "number",
    code({ keyword: o, parentSchema: n, it: d }) {
      n.contains === void 0 && (0, e.checkStrictMode)(d, `"${o}" without "contains" is ignored`);
    }
  };
  return zt.default = t, zt;
}
var no;
function Qs() {
  if (no) return Mt;
  no = 1, Object.defineProperty(Mt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ys(), t = /* @__PURE__ */ Xs(), o = /* @__PURE__ */ Zs(), n = [e.default, t.default, o.default];
  return Mt.default = n, Mt;
}
var Dt = {}, Vt = {}, oo;
function ea() {
  if (oo) return Vt;
  oo = 1, Object.defineProperty(Vt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), o = /* @__PURE__ */ _e(), d = {
    keyword: "unevaluatedProperties",
    type: "object",
    schemaType: ["boolean", "object"],
    trackErrors: !0,
    error: {
      message: "must NOT have unevaluated properties",
      params: ({ params: r }) => (0, e._)`{unevaluatedProperty: ${r.unevaluatedProperty}}`
    },
    code(r) {
      const { gen: a, schema: i, data: f, errsCount: g, it: v } = r;
      if (!g)
        throw new Error("ajv implementation error");
      const { allErrors: w, props: S } = v;
      S instanceof e.Name ? a.if((0, e._)`${S} !== true`, () => a.forIn("key", f, (u) => a.if(E(S, u), () => b(u)))) : S !== !0 && a.forIn("key", f, (u) => S === void 0 ? b(u) : a.if(_(S, u), () => b(u))), v.props = !0, r.ok((0, e._)`${g} === ${o.default.errors}`);
      function b(u) {
        if (i === !1) {
          r.setParams({ unevaluatedProperty: u }), r.error(), w || a.break();
          return;
        }
        if (!(0, t.alwaysValidSchema)(v, i)) {
          const m = a.name("valid");
          r.subschema({
            keyword: "unevaluatedProperties",
            dataProp: u,
            dataPropType: t.Type.Str
          }, m), w || a.if((0, e.not)(m), () => a.break());
        }
      }
      function E(u, m) {
        return (0, e._)`!${u} || !${u}[${m}]`;
      }
      function _(u, m) {
        const l = [];
        for (const h in u)
          u[h] === !0 && l.push((0, e._)`${m} !== ${h}`);
        return (0, e.and)(...l);
      }
    }
  };
  return Vt.default = d, Vt;
}
var Ft = {}, so;
function ta() {
  if (so) return Ft;
  so = 1, Object.defineProperty(Ft, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), n = {
    keyword: "unevaluatedItems",
    type: "array",
    schemaType: ["boolean", "object"],
    error: {
      message: ({ params: { len: d } }) => (0, e.str)`must NOT have more than ${d} items`,
      params: ({ params: { len: d } }) => (0, e._)`{limit: ${d}}`
    },
    code(d) {
      const { gen: r, schema: a, data: i, it: f } = d, g = f.items || 0;
      if (g === !0)
        return;
      const v = r.const("len", (0, e._)`${i}.length`);
      if (a === !1)
        d.setParams({ len: g }), d.fail((0, e._)`${v} > ${g}`);
      else if (typeof a == "object" && !(0, t.alwaysValidSchema)(f, a)) {
        const S = r.var("valid", (0, e._)`${v} <= ${g}`);
        r.if((0, e.not)(S), () => w(S, g)), d.ok(S);
      }
      f.items = !0;
      function w(S, b) {
        r.forRange("i", b, v, (E) => {
          d.subschema({ keyword: "unevaluatedItems", dataProp: E, dataPropType: t.Type.Num }, S), f.allErrors || r.if((0, e.not)(S), () => r.break());
        });
      }
    }
  };
  return Ft.default = n, Ft;
}
var ao;
function ra() {
  if (ao) return Dt;
  ao = 1, Object.defineProperty(Dt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ea(), t = /* @__PURE__ */ ta(), o = [e.default, t.default];
  return Dt.default = o, Dt;
}
var Bt = {}, Lt = {}, io;
function na() {
  if (io) return Lt;
  io = 1, Object.defineProperty(Lt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), o = {
    keyword: "format",
    type: ["number", "string"],
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: n }) => (0, e.str)`must match format "${n}"`,
      params: ({ schemaCode: n }) => (0, e._)`{format: ${n}}`
    },
    code(n, d) {
      const { gen: r, data: a, $data: i, schema: f, schemaCode: g, it: v } = n, { opts: w, errSchemaPath: S, schemaEnv: b, self: E } = v;
      if (!w.validateFormats)
        return;
      i ? _() : u();
      function _() {
        const m = r.scopeValue("formats", {
          ref: E.formats,
          code: w.code.formats
        }), l = r.const("fDef", (0, e._)`${m}[${g}]`), h = r.let("fType"), $ = r.let("format");
        r.if((0, e._)`typeof ${l} == "object" && !(${l} instanceof RegExp)`, () => r.assign(h, (0, e._)`${l}.type || "string"`).assign($, (0, e._)`${l}.validate`), () => r.assign(h, (0, e._)`"string"`).assign($, l)), n.fail$data((0, e.or)(s(), c()));
        function s() {
          return w.strictSchema === !1 ? e.nil : (0, e._)`${g} && !${$}`;
        }
        function c() {
          const p = b.$async ? (0, e._)`(${l}.async ? await ${$}(${a}) : ${$}(${a}))` : (0, e._)`${$}(${a})`, k = (0, e._)`(typeof ${$} == "function" ? ${p} : ${$}.test(${a}))`;
          return (0, e._)`${$} && ${$} !== true && ${h} === ${d} && !${k}`;
        }
      }
      function u() {
        const m = E.formats[f];
        if (!m) {
          s();
          return;
        }
        if (m === !0)
          return;
        const [l, h, $] = c(m);
        l === d && n.pass(p());
        function s() {
          if (w.strictSchema === !1) {
            E.logger.warn(k());
            return;
          }
          throw new Error(k());
          function k() {
            return `unknown format "${f}" ignored in schema at path "${S}"`;
          }
        }
        function c(k) {
          const C = k instanceof RegExp ? (0, e.regexpCode)(k) : w.code.formats ? (0, e._)`${w.code.formats}${(0, e.getProperty)(f)}` : void 0, N = r.scopeValue("formats", { key: f, ref: k, code: C });
          return typeof k == "object" && !(k instanceof RegExp) ? [k.type || "string", k.validate, (0, e._)`${N}.validate`] : ["string", k, N];
        }
        function p() {
          if (typeof m == "object" && !(m instanceof RegExp) && m.async) {
            if (!b.$async)
              throw new Error("async format in sync schema");
            return (0, e._)`await ${$}(${a})`;
          }
          return typeof h == "function" ? (0, e._)`${$}(${a})` : (0, e._)`${$}.test(${a})`;
        }
      }
    }
  };
  return Lt.default = o, Lt;
}
var co;
function oa() {
  if (co) return Bt;
  co = 1, Object.defineProperty(Bt, "__esModule", { value: !0 });
  const t = [(/* @__PURE__ */ na()).default];
  return Bt.default = t, Bt;
}
var Ae = {}, lo;
function sa() {
  return lo || (lo = 1, Object.defineProperty(Ae, "__esModule", { value: !0 }), Ae.contentVocabulary = Ae.metadataVocabulary = void 0, Ae.metadataVocabulary = [
    "title",
    "description",
    "default",
    "deprecated",
    "readOnly",
    "writeOnly",
    "examples"
  ], Ae.contentVocabulary = [
    "contentMediaType",
    "contentEncoding",
    "contentSchema"
  ]), Ae;
}
var uo;
function aa() {
  if (uo) return rt;
  uo = 1, Object.defineProperty(rt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ bs(), t = /* @__PURE__ */ Ts(), o = /* @__PURE__ */ Hs(), n = /* @__PURE__ */ Ws(), d = /* @__PURE__ */ Qs(), r = /* @__PURE__ */ ra(), a = /* @__PURE__ */ oa(), i = /* @__PURE__ */ sa(), f = [
    n.default,
    e.default,
    t.default,
    (0, o.default)(!0),
    a.default,
    i.metadataVocabulary,
    i.contentVocabulary,
    d.default,
    r.default
  ];
  return rt.default = f, rt;
}
var Ut = {}, Je = {}, fo;
function ia() {
  if (fo) return Je;
  fo = 1, Object.defineProperty(Je, "__esModule", { value: !0 }), Je.DiscrError = void 0;
  var e;
  return (function(t) {
    t.Tag = "tag", t.Mapping = "mapping";
  })(e || (Je.DiscrError = e = {})), Je;
}
var po;
function ca() {
  if (po) return Ut;
  po = 1, Object.defineProperty(Ut, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ ia(), o = /* @__PURE__ */ rr(), n = /* @__PURE__ */ tr(), d = /* @__PURE__ */ X(), a = {
    keyword: "discriminator",
    type: "object",
    schemaType: "object",
    error: {
      message: ({ params: { discrError: i, tagName: f } }) => i === t.DiscrError.Tag ? `tag "${f}" must be string` : `value of tag "${f}" must be in oneOf`,
      params: ({ params: { discrError: i, tag: f, tagName: g } }) => (0, e._)`{error: ${i}, tag: ${g}, tagValue: ${f}}`
    },
    code(i) {
      const { gen: f, data: g, schema: v, parentSchema: w, it: S } = i, { oneOf: b } = w;
      if (!S.opts.discriminator)
        throw new Error("discriminator: requires discriminator option");
      const E = v.propertyName;
      if (typeof E != "string")
        throw new Error("discriminator: requires propertyName");
      if (v.mapping)
        throw new Error("discriminator: mapping is not supported");
      if (!b)
        throw new Error("discriminator: requires oneOf keyword");
      const _ = f.let("valid", !1), u = f.const("tag", (0, e._)`${g}${(0, e.getProperty)(E)}`);
      f.if((0, e._)`typeof ${u} == "string"`, () => m(), () => i.error(!1, { discrError: t.DiscrError.Tag, tag: u, tagName: E })), i.ok(_);
      function m() {
        const $ = h();
        f.if(!1);
        for (const s in $)
          f.elseIf((0, e._)`${u} === ${s}`), f.assign(_, l($[s]));
        f.else(), i.error(!1, { discrError: t.DiscrError.Mapping, tag: u, tagName: E }), f.endIf();
      }
      function l($) {
        const s = f.name("valid"), c = i.subschema({ keyword: "oneOf", schemaProp: $ }, s);
        return i.mergeEvaluated(c, e.Name), s;
      }
      function h() {
        var $;
        const s = {}, c = k(w);
        let p = !0;
        for (let x = 0; x < b.length; x++) {
          let T = b[x];
          if (T?.$ref && !(0, d.schemaHasRulesButRef)(T, S.self.RULES)) {
            const L = T.$ref;
            if (T = o.resolveRef.call(S.self, S.schemaEnv.root, S.baseId, L), T instanceof o.SchemaEnv && (T = T.schema), T === void 0)
              throw new n.default(S.opts.uriResolver, S.baseId, L);
          }
          const I = ($ = T?.properties) === null || $ === void 0 ? void 0 : $[E];
          if (typeof I != "object")
            throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${E}"`);
          p = p && (c || k(T)), C(I, x);
        }
        if (!p)
          throw new Error(`discriminator: "${E}" must be required`);
        return s;
        function k({ required: x }) {
          return Array.isArray(x) && x.includes(E);
        }
        function C(x, T) {
          if (x.const)
            N(x.const, T);
          else if (x.enum)
            for (const I of x.enum)
              N(I, T);
          else
            throw new Error(`discriminator: "properties/${E}" must have "const" or "enum"`);
        }
        function N(x, T) {
          if (typeof x != "string" || x in s)
            throw new Error(`discriminator: "${E}" values must be unique strings`);
          s[x] = T;
        }
      }
    }
  };
  return Ut.default = a, Ut;
}
var Kt = {};
const la = "https://json-schema.org/draft/2020-12/schema", da = "https://json-schema.org/draft/2020-12/schema", ua = { "https://json-schema.org/draft/2020-12/vocab/core": !0, "https://json-schema.org/draft/2020-12/vocab/applicator": !0, "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0, "https://json-schema.org/draft/2020-12/vocab/validation": !0, "https://json-schema.org/draft/2020-12/vocab/meta-data": !0, "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0, "https://json-schema.org/draft/2020-12/vocab/content": !0 }, fa = "meta", pa = "Core and Validation specifications meta-schema", ha = [{ $ref: "meta/core" }, { $ref: "meta/applicator" }, { $ref: "meta/unevaluated" }, { $ref: "meta/validation" }, { $ref: "meta/meta-data" }, { $ref: "meta/format-annotation" }, { $ref: "meta/content" }], ma = ["object", "boolean"], ya = "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.", ga = { definitions: { $comment: '"definitions" has been replaced by "$defs".', type: "object", additionalProperties: { $dynamicRef: "#meta" }, deprecated: !0, default: {} }, dependencies: { $comment: '"dependencies" has been split and replaced by "dependentSchemas" and "dependentRequired" in order to serve their differing semantics.', type: "object", additionalProperties: { anyOf: [{ $dynamicRef: "#meta" }, { $ref: "meta/validation#/$defs/stringArray" }] }, deprecated: !0, default: {} }, $recursiveAnchor: { $comment: '"$recursiveAnchor" has been replaced by "$dynamicAnchor".', $ref: "meta/core#/$defs/anchorString", deprecated: !0 }, $recursiveRef: { $comment: '"$recursiveRef" has been replaced by "$dynamicRef".', $ref: "meta/core#/$defs/uriReferenceString", deprecated: !0 } }, va = {
  $schema: la,
  $id: da,
  $vocabulary: ua,
  $dynamicAnchor: fa,
  title: pa,
  allOf: ha,
  type: ma,
  $comment: ya,
  properties: ga
}, $a = "https://json-schema.org/draft/2020-12/schema", _a = "https://json-schema.org/draft/2020-12/meta/applicator", ba = { "https://json-schema.org/draft/2020-12/vocab/applicator": !0 }, wa = "meta", Sa = "Applicator vocabulary meta-schema", Ea = ["object", "boolean"], Pa = { prefixItems: { $ref: "#/$defs/schemaArray" }, items: { $dynamicRef: "#meta" }, contains: { $dynamicRef: "#meta" }, additionalProperties: { $dynamicRef: "#meta" }, properties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, propertyNames: { format: "regex" }, default: {} }, dependentSchemas: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, propertyNames: { $dynamicRef: "#meta" }, if: { $dynamicRef: "#meta" }, then: { $dynamicRef: "#meta" }, else: { $dynamicRef: "#meta" }, allOf: { $ref: "#/$defs/schemaArray" }, anyOf: { $ref: "#/$defs/schemaArray" }, oneOf: { $ref: "#/$defs/schemaArray" }, not: { $dynamicRef: "#meta" } }, ka = { schemaArray: { type: "array", minItems: 1, items: { $dynamicRef: "#meta" } } }, Ca = {
  $schema: $a,
  $id: _a,
  $vocabulary: ba,
  $dynamicAnchor: wa,
  title: Sa,
  type: Ea,
  properties: Pa,
  $defs: ka
}, Ra = "https://json-schema.org/draft/2020-12/schema", Na = "https://json-schema.org/draft/2020-12/meta/unevaluated", ja = { "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0 }, Aa = "meta", Oa = "Unevaluated applicator vocabulary meta-schema", Ta = ["object", "boolean"], xa = { unevaluatedItems: { $dynamicRef: "#meta" }, unevaluatedProperties: { $dynamicRef: "#meta" } }, Ma = {
  $schema: Ra,
  $id: Na,
  $vocabulary: ja,
  $dynamicAnchor: Aa,
  title: Oa,
  type: Ta,
  properties: xa
}, Ia = "https://json-schema.org/draft/2020-12/schema", qa = "https://json-schema.org/draft/2020-12/meta/content", za = { "https://json-schema.org/draft/2020-12/vocab/content": !0 }, Da = "meta", Va = "Content vocabulary meta-schema", Fa = ["object", "boolean"], Ba = { contentEncoding: { type: "string" }, contentMediaType: { type: "string" }, contentSchema: { $dynamicRef: "#meta" } }, La = {
  $schema: Ia,
  $id: qa,
  $vocabulary: za,
  $dynamicAnchor: Da,
  title: Va,
  type: Fa,
  properties: Ba
}, Ua = "https://json-schema.org/draft/2020-12/schema", Ka = "https://json-schema.org/draft/2020-12/meta/core", Ha = { "https://json-schema.org/draft/2020-12/vocab/core": !0 }, Ga = "meta", Ja = "Core vocabulary meta-schema", Wa = ["object", "boolean"], Ya = { $id: { $ref: "#/$defs/uriReferenceString", $comment: "Non-empty fragments not allowed.", pattern: "^[^#]*#?$" }, $schema: { $ref: "#/$defs/uriString" }, $ref: { $ref: "#/$defs/uriReferenceString" }, $anchor: { $ref: "#/$defs/anchorString" }, $dynamicRef: { $ref: "#/$defs/uriReferenceString" }, $dynamicAnchor: { $ref: "#/$defs/anchorString" }, $vocabulary: { type: "object", propertyNames: { $ref: "#/$defs/uriString" }, additionalProperties: { type: "boolean" } }, $comment: { type: "string" }, $defs: { type: "object", additionalProperties: { $dynamicRef: "#meta" } } }, Xa = { anchorString: { type: "string", pattern: "^[A-Za-z_][-A-Za-z0-9._]*$" }, uriString: { type: "string", format: "uri" }, uriReferenceString: { type: "string", format: "uri-reference" } }, Za = {
  $schema: Ua,
  $id: Ka,
  $vocabulary: Ha,
  $dynamicAnchor: Ga,
  title: Ja,
  type: Wa,
  properties: Ya,
  $defs: Xa
}, Qa = "https://json-schema.org/draft/2020-12/schema", ei = "https://json-schema.org/draft/2020-12/meta/format-annotation", ti = { "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0 }, ri = "meta", ni = "Format vocabulary meta-schema for annotation results", oi = ["object", "boolean"], si = { format: { type: "string" } }, ai = {
  $schema: Qa,
  $id: ei,
  $vocabulary: ti,
  $dynamicAnchor: ri,
  title: ni,
  type: oi,
  properties: si
}, ii = "https://json-schema.org/draft/2020-12/schema", ci = "https://json-schema.org/draft/2020-12/meta/meta-data", li = { "https://json-schema.org/draft/2020-12/vocab/meta-data": !0 }, di = "meta", ui = "Meta-data vocabulary meta-schema", fi = ["object", "boolean"], pi = { title: { type: "string" }, description: { type: "string" }, default: !0, deprecated: { type: "boolean", default: !1 }, readOnly: { type: "boolean", default: !1 }, writeOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 } }, hi = {
  $schema: ii,
  $id: ci,
  $vocabulary: li,
  $dynamicAnchor: di,
  title: ui,
  type: fi,
  properties: pi
}, mi = "https://json-schema.org/draft/2020-12/schema", yi = "https://json-schema.org/draft/2020-12/meta/validation", gi = { "https://json-schema.org/draft/2020-12/vocab/validation": !0 }, vi = "meta", $i = "Validation vocabulary meta-schema", _i = ["object", "boolean"], bi = { type: { anyOf: [{ $ref: "#/$defs/simpleTypes" }, { type: "array", items: { $ref: "#/$defs/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, const: !0, enum: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/$defs/nonNegativeInteger" }, minLength: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, maxItems: { $ref: "#/$defs/nonNegativeInteger" }, minItems: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, maxContains: { $ref: "#/$defs/nonNegativeInteger" }, minContains: { $ref: "#/$defs/nonNegativeInteger", default: 1 }, maxProperties: { $ref: "#/$defs/nonNegativeInteger" }, minProperties: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, required: { $ref: "#/$defs/stringArray" }, dependentRequired: { type: "object", additionalProperties: { $ref: "#/$defs/stringArray" } } }, wi = { nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { $ref: "#/$defs/nonNegativeInteger", default: 0 }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, Si = {
  $schema: mi,
  $id: yi,
  $vocabulary: gi,
  $dynamicAnchor: vi,
  title: $i,
  type: _i,
  properties: bi,
  $defs: wi
};
var ho;
function Ei() {
  if (ho) return Kt;
  ho = 1, Object.defineProperty(Kt, "__esModule", { value: !0 });
  const e = va, t = Ca, o = Ma, n = La, d = Za, r = ai, a = hi, i = Si, f = ["/properties"];
  function g(v) {
    return [
      e,
      t,
      o,
      n,
      d,
      w(this, r),
      a,
      w(this, i)
    ].forEach((S) => this.addMetaSchema(S, void 0, !1)), this;
    function w(S, b) {
      return v ? S.$dataMetaSchema(b, f) : b;
    }
  }
  return Kt.default = g, Kt;
}
var mo;
function Pi() {
  return mo || (mo = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv2020 = void 0;
    const o = /* @__PURE__ */ $s(), n = /* @__PURE__ */ aa(), d = /* @__PURE__ */ ca(), r = /* @__PURE__ */ Ei(), a = "https://json-schema.org/draft/2020-12/schema";
    class i extends o.default {
      constructor(b = {}) {
        super({
          ...b,
          dynamicRef: !0,
          next: !0,
          unevaluated: !0
        });
      }
      _addVocabularies() {
        super._addVocabularies(), n.default.forEach((b) => this.addVocabulary(b)), this.opts.discriminator && this.addKeyword(d.default);
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
    t.Ajv2020 = i, e.exports = t = i, e.exports.Ajv2020 = i, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = i;
    var f = /* @__PURE__ */ er();
    Object.defineProperty(t, "KeywordCxt", { enumerable: !0, get: function() {
      return f.KeywordCxt;
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
    var v = /* @__PURE__ */ Cr();
    Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
      return v.default;
    } });
    var w = /* @__PURE__ */ tr();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return w.default;
    } });
  })(Xe, Xe.exports)), Xe.exports;
}
var ki = /* @__PURE__ */ Pi();
const Ci = /* @__PURE__ */ ns(ki), Ri = "https://json-schema.org/draft/2020-12/schema", Ni = "https://raw.githubusercontent.com/omsf-eco-infra/gufe-viz/main/schema/gufe-viz.schema.json", ji = "gufe-viz payload", Ai = "Python-to-TypeScript contract bridge for gufe visualizations. Source of truth both languages are downstream of it. This schema is not strictly versioned or published as it is only internally consumed by this codebase. Schema description: one schema object per gufe class: every $def named *Viz is the visualization form of exactly one GufeTokenizable, it carries that object's `gufe-key`. Every reference from one gufe object to another is that object's gufe key, and the objects themselves live in the `registry` on the root payload. So a ligand network's nodes are keys, a chemical system's components and a transformation's protocol are keys and each one resolves to a complete, drawable object. An alchemical network whose forty systems share one protein carries that PDB once and points at it forty times, and the browser can still drill into it, because what it points at is a whole ProteinComponentViz. This is a single-shot dump rather than a conversation with a server, so the registry travels with the payload.", Oi = [{ $ref: "#/$defs/SmallMoleculeComponentViz" }, { $ref: "#/$defs/ProteinComponentViz" }, { $ref: "#/$defs/SolvatedPDBComponentViz" }, { $ref: "#/$defs/ProteinMembraneComponentViz" }, { $ref: "#/$defs/SolventComponentViz" }, { $ref: "#/$defs/UnknownComponentViz" }, { $ref: "#/$defs/ProtocolViz" }, { $ref: "#/$defs/LigandAtomMappingViz" }, { $ref: "#/$defs/LigandNetworkViz" }, { $ref: "#/$defs/ChemicalSystemViz" }, { $ref: "#/$defs/TransformationViz" }, { $ref: "#/$defs/AlchemicalNetworkViz" }], Ti = /* @__PURE__ */ JSON.parse('{"GufeKey":{"title":"GufeKey","description":"A gufe key: the identity of a GufeTokenizable, of the form \'ClassName-<hex digest>\'. It is deterministic and repeatable within a software environment. Only its non-emptiness is checked","type":"string","minLength":1},"ComponentKey":{"title":"ComponentKey","description":"A gufe key naming a ComponentViz in the registry. Identical to GufeKey at validation time: JSON Schema has no way to say \'this string is the gufe-key of an entry in that array, and that entry has this type\', because that is a join across two parts of the document. What the name buys is that the referent\'s type is stated in the contract and carried into the generated TypeScript, instead of living only in a test and a view.","$ref":"#/$defs/GufeKey"},"SmallMoleculeComponentKey":{"title":"SmallMoleculeComponentKey","description":"A gufe key naming a SmallMoleculeComponentViz in the registry. Resolving it yields the whole molecule, SDF included. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ChemicalSystemKey":{"title":"ChemicalSystemKey","description":"A gufe key naming a ChemicalSystemViz in the registry. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ProtocolKey":{"title":"ProtocolKey","description":"A gufe key naming a ProtocolViz in the registry. Every transformation of a network usually names the same one. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"Registry":{"title":"Registry","description":"The pool of gufe objects this payload refers to by key, each a complete payload object in its own right. Entries are unique by `gufe-key` and sorted by (type, gufe-key) so a committed fixture is byte-stable. JSON Schema cannot express \'unique by a property\' or \'every reference resolves\', so both are covered by tests on the Python side and degraded over by the views.","type":"array","items":{"oneOf":[{"$ref":"#/$defs/ComponentViz"},{"$ref":"#/$defs/ProtocolViz"},{"$ref":"#/$defs/ChemicalSystemViz"}]}},"ComponentViz":{"title":"ComponentViz","description":"Any single chemical-system component","oneOf":[{"$ref":"#/$defs/SmallMoleculeComponentViz"},{"$ref":"#/$defs/ProteinComponentViz"},{"$ref":"#/$defs/SolvatedPDBComponentViz"},{"$ref":"#/$defs/ProteinMembraneComponentViz"},{"$ref":"#/$defs/SolventComponentViz"},{"$ref":"#/$defs/UnknownComponentViz"}]},"SmallMoleculeComponentViz":{"title":"SmallMoleculeComponentViz","description":"A small molecule, carried as a complete SDF record.","type":"object","properties":{"type":{"const":"SmallMoleculeComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"sdf":{"type":"string","minLength":1,"description":"Complete inline SDF record, including the conformer."},"smiles":{"type":"string"},"total_charge":{"type":"integer","description":"Net formal charge. Displayed, never recomputed from the SDF."}},"required":["type","gufe-key","name","sdf","smiles","total_charge"],"additionalProperties":false},"ProteinComponentViz":{"title":"ProteinComponentViz","description":"A protein, carried as a complete PDB record.","type":"object","properties":{"type":{"const":"ProteinComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolvatedPDBComponentViz":{"title":"SolvatedPDBComponentViz","description":"A protein with explicit solvent. A distinct type rather than a flag on ProteinComponentViz, because the discriminator is what a view dispatches on and the presence of waters changes what a sensible default representation is.","type":"object","properties":{"type":{"const":"SolvatedPDBComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation, including explicit solvent."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"ProteinMembraneComponentViz":{"title":"ProteinMembraneComponentViz","description":"A protein embedded in a membrane.","type":"object","properties":{"type":{"const":"ProteinMembraneComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation of the protein and membrane system."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolventComponentViz":{"title":"SolventComponentViz","description":"Bulk solvent settings. There is no structure to draw, so these are flat fields suitable for rendering as a settings card.","type":"object","properties":{"type":{"const":"SolventComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"smiles":{"type":"string","minLength":1},"positive_ion":{"type":"string"},"negative_ion":{"type":"string"},"neutralize":{"type":"boolean"},"ion_concentration":{"type":"string","description":"Display-form concentration with units, for example \'0.15 molar\'. A string rather than a number because the unit is part of the value and the view only ever prints it."}},"required":["type","gufe-key","name","smiles","positive_ion","negative_ion","neutralize","ion_concentration"],"additionalProperties":false},"UnknownComponentViz":{"title":"UnknownComponentViz","description":"The graceful fallback for a component type this build does not recognize. gufe supports custom Component subclasses, so meeting one is an expected outcome rather than an error, and the browser answers it with \'sorry, there is no visualization for this\'. This covers an unrecognized type only: a recognized component whose serializer fails is a bug, and raises in Python rather than arriving here wearing a disguise.","type":"object","properties":{"type":{"const":"UnknownComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The gufe class name, so the panel can say which type it could not draw."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ProtocolViz":{"title":"ProtocolViz","description":"A gufe Protocol, named. Every transformation in an alchemical network usually shares one, so this is a registry entry that many edges point at rather than a class name repeated per edge. Settings are deliberately absent for now: they are large, deeply nested, and nothing draws them yet, adding a `settings` field later is additive and breaks nothing.","type":"object","properties":{"type":{"const":"ProtocolViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The Protocol\'s class name, which is what identifies it to a reader, a Protocol has no name of its own, so `name` is usually empty."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ChemicalSystemViz":{"title":"ChemicalSystemViz","description":"A gufe ChemicalSystem: labels mapped to the gufe keys of its components.","type":"object","properties":{"type":{"const":"ChemicalSystemViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"components":{"type":"object","description":"ChemicalSystem labels mapped to the gufe keys of the components in the registry.","additionalProperties":{"$ref":"#/$defs/ComponentKey"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","components"],"additionalProperties":false},"AtomMapping":{"title":"AtomMapping","description":"Atom index correspondence from molecule A to molecule B, as a list of index pairs. A list rather than an object keyed by A\'s index, because JSON object keys can only be strings: keying by index would put decimal strings such as \'12\' in the payload and leave both languages casting them back to integers, and it is Python\'s dict-of-int shape only by resemblance. As a list, both indices stay integers, and \'an entry has a B index for every A index\' becomes a `required` the schema states rather than a convention a reader has to trust. Pairs are ordered by `index_A` so a committed fixture is byte-stable.","type":"array","items":{"type":"object","properties":{"index_A":{"type":"integer","minimum":0,"description":"An atom index in molecule A."},"index_B":{"type":"integer","minimum":0,"description":"The atom index in molecule B that it maps to."}},"required":["index_A","index_B"],"additionalProperties":false}},"Annotations":{"title":"Annotations","description":"Free-form mapping metadata. gufe puts nothing here by design and every mapper picks its own keys, so this is deliberately open. Values are whatever survived being made JSON-safe. Displayed but never interpreted, with the single exception of \'score\'.","type":"object"},"LigandAtomMappingViz":{"title":"LigandAtomMappingViz","description":"One atom mapping between two small molecules. This is also what an edge of a ligand network is because the two endpoints are gufe keys either way: standalone they resolve in this object\'s own registry, and in a network they resolve in the network\'s, where they are the same entries the nodes name. `componentA` and `componentB` are the molecules the two sides of `componentA_to_componentB` index into: an `index_A` is an atom of the SmallMoleculeComponentViz that `componentA` names, and an `index_B` an atom of `componentB`\'s.","type":"object","properties":{"type":{"const":"LigandAtomMappingViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"componentA":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentB":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentA_to_componentB":{"$ref":"#/$defs/AtomMapping"},"score":{"type":["number","null"],"description":"The \'score\' annotation when it is a plain number, otherwise null. This is the one annotation key that is interpreted rather than displayed: it drives the edge colouring and the force layout\'s link distance."},"annotations":{"$ref":"#/$defs/Annotations"},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","componentA","componentB","componentA_to_componentB","score","annotations"],"additionalProperties":false},"LigandNetworkViz":{"title":"LigandNetworkViz","description":"A ligand network: the ligands in the registry, the nodes as keys into it, and the mappings as edges. Deliberately not gufe\'s GraphML: that format embeds a gufe to_json moldict per node, so forwarding it would relocate the decoding problem into the browser rather than avoid it.","type":"object","properties":{"type":{"const":"LigandNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ligand, resolved in `registry`.","items":{"$ref":"#/$defs/SmallMoleculeComponentKey"}},"edges":{"type":"array","description":"The mappings, whose `componentA` and `componentB` name nodes of this network. JSON Schema cannot express that referential constraint, so a Python test covers it, and the view drops a dangling edge with a banner rather than failing.","items":{"$ref":"#/$defs/LigandAtomMappingViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false},"TransformationViz":{"title":"TransformationViz","description":"A transformation between two chemical systems, both named by gufe key, as is its protocol: `stateA` is the system it starts from, `stateB` the one it ends at, and every edge of a network usually names the same protocol. This is also what an edge of an alchemical network is (there is no separate edge type) because `stateA` and `stateB` are keys either way, and in a network they are the keys the nodes name. NonTransformation uses this type too: it exposes the same stateA and stateB properties, both its single system, so it renders as a diff with no differences.","type":"object","properties":{"type":{"const":"TransformationViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"protocol":{"$ref":"#/$defs/ProtocolKey"},"stateA":{"$ref":"#/$defs/ChemicalSystemKey"},"stateB":{"$ref":"#/$defs/ChemicalSystemKey"},"mappings":{"type":"array","items":{"$ref":"#/$defs/LigandAtomMappingViz"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","protocol","stateA","stateB","mappings"],"additionalProperties":false},"AlchemicalNetworkViz":{"title":"AlchemicalNetworkViz","description":"A graph of chemical systems joined by transformations. What repeats here is not the nodes and edges themselves but what they are made of: in practice every system shares one protein and every transformation shares one protocol. Both live in the registry, once, as whole objects so this view can show composition and topology while still letting a reader open a node and see the protein.","type":"object","properties":{"type":{"const":"AlchemicalNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ChemicalSystem, resolved in `registry`.","items":{"$ref":"#/$defs/ChemicalSystemKey"}},"edges":{"type":"array","description":"The transformations, whose `stateA` and `stateB` name nodes of this network.","items":{"$ref":"#/$defs/TransformationViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false}}'), Ar = {
  $schema: Ri,
  $id: Ni,
  title: ji,
  description: Ai,
  oneOf: Oi,
  $defs: Ti
}, Cc = [
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
], Or = Ar.$id, Tr = new Ci({ allErrors: !0, strict: !1 });
Tr.addSchema(Ar, Or);
const yo = Tr.getSchema(Or), Mo = Object.entries(Ar.$defs).filter(
  ([e, t]) => t.properties?.type?.const === e
).map(([e]) => e).sort(), Rc = Mo, xr = /* @__PURE__ */ new Map();
for (const e of Mo) {
  const t = Tr.getSchema(`${Or}#/$defs/${e}`);
  t && xr.set(e, t);
}
const _r = { valid: !0, issues: [] };
function br(e) {
  return (e ?? []).map((t) => ({
    path: t.instancePath || "",
    message: t.keyword === "additionalProperties" ? `unknown property ${JSON.stringify(t.params.additionalProperty)}` : t.message ?? "is invalid"
  }));
}
function xi(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return {
      valid: !1,
      issues: [{ path: "", message: "must be a JSON object" }]
    };
  const t = e.type, o = typeof t == "string" ? xr.get(t) : void 0;
  return o ? o(e) ? _r : { valid: !1, issues: br(o.errors) } : yo(e) ? _r : { valid: !1, issues: br(yo.errors) };
}
function Nc(e, t) {
  const o = xr.get(e);
  return o ? o(t) ? _r : { valid: !1, issues: br(o.errors) } : {
    valid: !1,
    issues: [
      { path: "", message: `unknown payload type ${JSON.stringify(e)}` }
    ]
  };
}
function Mi(e, t = 8) {
  const o = e.slice(0, t).map((n) => `${n.path || "(root)"}: ${n.message}`);
  return e.length > t && o.push(`... and ${e.length - t} more`), o.join(`
`);
}
const Mr = {
  SmallMoleculeComponentViz: "gufe-small-molecule",
  ProteinComponentViz: "gufe-protein",
  LigandNetworkViz: "gufe-ligand-network",
  SolventComponentViz: "gufe-solvent",
  UnknownComponentViz: "gufe-unknown-component"
};
function Io(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return {
      message: "This does not look like a gufe-viz payload (expected a JSON object)."
    };
  const { type: t } = e;
  if (typeof t != "string" || !t)
    return {
      message: "This payload has no `type`, so there is nothing to say what it is."
    };
  if (!Mr[t]) return Ii(t);
  const { valid: o, issues: n } = xi(e);
  return o ? null : {
    message: `This payload says it is a ${t}, but it does not match the gufe-viz schema.`,
    detail: Mi(n)
  };
}
function Ii(e) {
  const t = Object.keys(Mr).sort().join(", ");
  return {
    message: `Sorry, there is no visualization for ${e} yet. This build can draw: ${t}.`
  };
}
function jc(e) {
  return Io(e)?.message ?? null;
}
class qi extends Be {
  placeholder() {
    return "Waiting for data...";
  }
  renderView(t, o) {
    ts("payload", o, this);
    const n = Io(o);
    if (n)
      return t.appendChild(zi(n, o)), {};
    const d = o.type, r = Mr[d], a = document.createElement(r);
    return a.style.cssText = "flex:1;min-height:0;min-width:0;", a.payload = o, t.appendChild(a), {
      onResize: () => a.resize?.(),
      // Removing the child fires its own `disconnectedCallback`, which is where
      // its viewers and observers are released
      cleanup: () => a.remove()
    };
  }
}
function zi(e, t) {
  const o = B(
    "div",
    "flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:32px;"
  );
  o.appendChild(ce(e.message));
  const n = (r, a) => B(
    "div",
    "max-width:640px;padding:8px 12px;border-radius:6px;font-size:11px;white-space:pre-wrap;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;overflow-wrap:anywhere;" + (a ? `background:${q.warnBg};color:${q.warnFg};border:1px solid ${q.warnBorder};` : `background:${q.panelBg};color:${q.textMuted2};border:1px solid ${q.cardBorder};`),
    r
  );
  e.detail && o.appendChild(n(e.detail, !0));
  const d = Di(t);
  return d && o.appendChild(n(d, !1)), o;
}
function Di(e) {
  if (e == null || typeof e != "object") return null;
  const t = e, o = [];
  typeof t.type == "string" && o.push(`type: ${Gt(t.type)}`), typeof t.name == "string" && t.name && o.push(`name: ${Gt(t.name)}`);
  const n = Object.keys(e);
  return n.length && o.push(
    `keys: ${n.slice(0, 12).join(", ")}${n.length > 12 ? ", ..." : ""}`
  ), o.length ? o.join(`
`) : null;
}
Le("gufe-view", qi);
const Ir = {
  threeDmol: "https://3dmol.org/build/3Dmol-min.js",
  rdkit: "https://unpkg.com/@rdkit/rdkit/dist/RDKit_minimal.js",
  d3: "https://cdn.jsdelivr.net/npm/d3@7/+esm"
};
function qr(e) {
  const t = globalThis.__gufeEngines?.[e];
  return t ? Promise.resolve(t) : null;
}
function qo(e, t) {
  return new Promise((o, n) => {
    const d = document.createElement("script");
    d.src = e, d.onload = () => o(), d.onerror = () => n(new Error(`Failed to load ${t}`)), document.head.appendChild(d);
  });
}
let Fe = null, De = null;
function zo() {
  if (De) return De;
  const e = qr("threeDmol");
  return e ? (De = e.then((t) => Fe = t || window.$3Dmol), De) : (De = (async () => {
    if (window.$3Dmol) return Fe = window.$3Dmol;
    if (await qo(Ir.threeDmol, "3Dmol.js"), !window.$3Dmol) throw new Error("3Dmol.js loaded but $3Dmol is undefined");
    return Fe = window.$3Dmol;
  })(), De);
}
let Ve = null;
function wr() {
  if (Ve) return Ve;
  const e = qr("rdkit");
  return e ? (Ve = e.then((t) => window.RDKit = t), Ve) : (Ve = (async () => {
    if (window.RDKit) return window.RDKit;
    if (await qo(Ir.rdkit, "RDKit"), !window.initRDKitModule) throw new Error("RDKit loaded but initRDKitModule is undefined");
    return window.RDKit = await window.initRDKitModule();
  })(), Ve);
}
let gr = null;
function Vi() {
  if (!gr) {
    const e = Ir.d3;
    gr = qr("d3") ?? import(
      /* @vite-ignore */
      e
    );
  }
  return gr;
}
function Do(e, t) {
  let o = !1, n = !1;
  const d = () => {
    o = !0;
  }, r = () => {
    o = !1;
  }, a = (i) => {
    if (i.stopPropagation(), o || i.ctrlKey || i.metaKey) {
      i.preventDefault(), t.onZoom(i);
      return;
    }
    t.hint && !n && (n = !0, Bi(e, t.hint));
  };
  return e.addEventListener("wheel", a, { passive: !1, capture: !0 }), e.addEventListener("pointerdown", d), e.addEventListener("pointerenter", d), e.addEventListener("pointerleave", r), {
    cleanup() {
      e.removeEventListener("wheel", a, { capture: !0 }), e.removeEventListener("pointerdown", d), e.removeEventListener("pointerenter", d), e.removeEventListener("pointerleave", r);
    }
  };
}
const Fi = 1600;
function Bi(e, t) {
  const o = B(
    "div",
    "position:absolute;bottom:12px;left:50%;transform:translateX(-50%);z-index:30;pointer-events:none;padding:5px 12px;border-radius:6px;font-size:11px;white-space:nowrap;background:rgba(0,0,0,0.72);color:#ffffff;transition:opacity .3s ease;",
    t
  );
  e.appendChild(o), setTimeout(() => {
    o.style.opacity = "0", setTimeout(() => o.remove(), 300);
  }, Fi);
}
const Li = { min: 0.25, max: 12 };
function Ui(e, t = Li) {
  let o = 1;
  return {
    zoomBy(n) {
      const d = Math.min(t.max, Math.max(t.min, o * n));
      if (d === o) return;
      const r = d / o;
      o = d, e.zoom(r), e.render();
    },
    reset() {
      o = 1, e.zoomTo(), e.render();
    },
    level: () => o
  };
}
const Ki = 2e-3;
function Hi(e) {
  return Math.exp(-e.deltaY * Ki);
}
function Vo(e, t, o = {}) {
  const n = Ui(t, o.bounds), d = Do(e, {
    hint: o.hint ?? "Click or hold Ctrl to zoom",
    onZoom: (r) => n.zoomBy(Hi(r))
  });
  return { ...n, cleanup: d.cleanup };
}
function zr(e, t = "Reset view") {
  const o = B("button", Ye, "Reset");
  return o.title = t, o.setAttribute("aria-label", t), o.onclick = e, o;
}
const Gi = `
`, go = "$$$$", Ji = (e) => e.indexOf(go) >= 0 ? e : `${e}${Gi}${go}`;
function Sr(e) {
  const t = String(e).split(/\r?\n/);
  if (t.length < 4) return null;
  const o = parseInt(t[3].slice(0, 3), 10), n = parseInt(t[3].slice(3, 6), 10);
  return isNaN(o) || isNaN(n) ? null : { atoms: o, bonds: n };
}
function Er(e, t, o) {
  let n = null;
  try {
    if (n = e.get_mol(t, JSON.stringify({ removeHs: !0 })), !n) return null;
    try {
      n.set_new_coords(!0);
    } catch {
    }
    return n.get_svg(o, o) || null;
  } catch (d) {
    return console.warn("[gufe-viz] depictSVG threw -", $e(d)), null;
  } finally {
    if (n)
      try {
        n.delete();
      } catch {
      }
  }
}
function Wi(e, t, o) {
  e.innerHTML = t;
  const n = e.querySelector("svg");
  n && (n.removeAttribute("width"), n.removeAttribute("height"), n.getAttribute("viewBox") || n.setAttribute("viewBox", `0 0 ${o} ${o}`), n.setAttribute("preserveAspectRatio", "xMidYMid meet"), n.setAttribute("style", "width:100%;height:100%;max-width:100%;max-height:100%;"));
}
const Yi = [
  { id: "stick", label: "Stick", title: "Sticks only" },
  { id: "ball", label: "Ball+Stick", title: "Ball and stick" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" }
], vo = {
  stick: { stick: { radius: 0.15, colorscheme: "Jmol" } },
  ball: { stick: { radius: 0.12, colorscheme: "Jmol" }, sphere: { scale: 0.28, colorscheme: "Jmol" } },
  sphere: { sphere: { scale: 1, colorscheme: "Jmol" } }
}, $o = 400;
class Xi extends Be {
  placeholder() {
    return "Waiting for a SmallMoleculeComponent payload...";
  }
  renderView(t, o) {
    const n = o.sdf, d = o.name ?? "", r = o.smiles, a = o.total_charge;
    t.appendChild(Xt(d || "Unnamed molecule", "SmallMoleculeComponent"));
    const i = B("div", "flex:1;display:flex;flex-direction:row;overflow:hidden;min-height:0;");
    t.appendChild(i);
    const f = B("div", "flex:1 1 50%;min-width:0;display:flex;flex-direction:column;"), g = B("div", "flex:1 1 50%;min-width:0;display:flex;flex-direction:column;position:relative;");
    i.appendChild(f), i.appendChild(B("div", `width:1px;flex-shrink:0;background:${q.splitBorder};`)), i.appendChild(g);
    const v = (p) => B("div", `flex-shrink:0;padding:4px 10px;font-size:12px;font-weight:bold;color:${q.labelFg};background:${q.labelBg};`, p);
    f.appendChild(v("2D"));
    const w = B(
      "div",
      `flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:8px;background:${q.canvas2DBg};`
    );
    f.appendChild(w), g.appendChild(v("3D"));
    const S = Po();
    g.appendChild(S.wrap);
    const b = B(
      "div",
      `flex-shrink:0;display:flex;flex-wrap:wrap;align-items:baseline;gap:6px 20px;padding:8px 16px;font-size:12px;background:${q.toolbarBg};border-top:1px solid ${q.toolbarBorder};color:${q.textPrimary};`
    );
    t.appendChild(b);
    const E = n ? Sr(n) : null, _ = [
      ["Name", d || Re, !1],
      ["SMILES", r || Re, !0],
      ["Charge", a == null ? Re : String(a), !1],
      ["Atoms", E ? String(E.atoms) : Re, !1],
      ["Bonds", E ? String(E.bonds) : Re, !1]
    ];
    for (const [p, k, C] of _) {
      const N = B("div", "display:flex;align-items:baseline;gap:6px;min-width:0;");
      N.appendChild(
        B(
          "span",
          `font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;flex-shrink:0;color:${q.textMuted2};`,
          p
        )
      );
      const x = B(
        "span",
        `user-select:text;cursor:text;color:${q.textPrimary}` + (C ? ";font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:11px;overflow-wrap:anywhere;" : ""),
        k
      );
      x.title = k, N.appendChild(x), b.appendChild(N);
    }
    if (!n || !n.trim())
      return w.appendChild(ce("No molecule provided")), S.container.appendChild(ce("No molecule provided")), {};
    w.appendChild(ce("Loading 2D depiction...")), wr().then((p) => {
      const k = Er(p, n, $o);
      k ? Wi(w, k, $o) : w.replaceChildren(ce("Failed to parse molecule", !0));
    }).catch((p) => {
      w.replaceChildren(ce(`RDKit failed to load: ${$e(p)}`, !0));
    });
    let u = null, m = null, l = "stick", h = !1;
    const $ = B(
      "div",
      `position:absolute;bottom:10px;right:10px;display:flex;gap:4px;padding:4px;border-radius:6px;z-index:10;background:${q.switcherBg};box-shadow:0 2px 8px rgba(0,0,0,0.25);`
    );
    $.appendChild(
      Eo(Yi, l, (p) => {
        l = p, u && (u.setStyle({}, vo[p]), u.render());
      })
    );
    const s = B("button", `${Ye}margin-left:4px;`, "Spin");
    s.title = "Toggle continuous rotation", s.onclick = () => {
      h = !h, s.style.background = h ? q.btnBgActive : q.btnBg;
      try {
        u?.spin(h ? "y" : !1);
      } catch {
      }
    }, $.appendChild(s);
    const c = zr(() => m?.reset());
    return c.style.marginLeft = "4px", $.appendChild(c), g.appendChild($), S.container.appendChild(ce("Loading 3D viewer...")), zo().then(() => {
      S.container.replaceChildren(), u = Fe.createViewer(S.container, { backgroundColor: q.viewerBg }), u.addModel(Ji(n), "sdf"), u.setStyle({}, vo[l]), u.zoomTo(), u.render(), m = Vo(S.container, u);
    }).catch((p) => {
      S.container.replaceChildren(ce(`3D render failed: ${$e(p)}`, !0));
    }), {
      onResize() {
        u && (u.resize(), u.render());
      },
      cleanup() {
        if (m?.cleanup(), m = null, !!u) {
          try {
            u.spin(!1);
          } catch {
          }
          try {
            u.clear();
          } catch {
          }
          u = null;
        }
      }
    };
  }
}
Le("gufe-small-molecule", Xi);
const Fo = ["HOH", "WAT", "SOL", "TIP3"], _o = { hetflag: !1 }, Zi = { hetflag: !0 }, Qi = { resn: Fo }, Ce = {
  stick: { radius: 0.15 },
  sphere: { scale: 0.3 },
  hetero: { stickRadius: 0.2, sphereScale: 0.28 },
  water: { stickRadius: 0.05, sphereScale: 0.18 },
  surfaceOpacity: 0.85,
  /** Above this many atoms a surface is slow enough to be worth warning about. */
  surfaceAtomWarn: 4e4
};
function ec(e) {
  const t = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set();
  let n = 0, d = 0, r = 0, a = 1 / 0, i = -1 / 0;
  for (const f of e.split(/\r?\n/)) {
    const g = f.slice(0, 6);
    if (g === "ENDMDL") break;
    if (g !== "ATOM  " && g !== "HETATM") continue;
    n++, g === "HETATM" && d++;
    const v = f.slice(17, 20).trim(), w = f.slice(21, 22).trim() || "_", S = f.slice(22, 26).trim(), b = f.slice(26, 27).trim();
    Fo.indexOf(v) !== -1 && r++, t.add(w), o.add(`${w}|${S}${b}|${v}`);
    const E = parseInt(S, 10);
    isNaN(E) || (E < a && (a = E), E > i && (i = E));
  }
  return {
    chains: t.size,
    residues: o.size,
    atoms: n,
    hetatms: d,
    waters: r,
    heteroNonWater: d - r,
    resiMin: a === 1 / 0 ? 0 : a,
    resiMax: i === -1 / 0 ? 0 : i
  };
}
function tc(e) {
  return `${Ke(e.chains)} chains · ${Ke(e.residues)} residues · ${Ke(e.atoms)} atoms · ${Ke(e.hetatms)} HETATM` + (e.waters > 0 ? ` (${Ke(e.waters)} water)` : "");
}
function rc(e, t) {
  return e === "chain" ? { colorscheme: "chain" } : e === "ss" ? { colorscheme: "ssJmol" } : e === "spectrum" && t && t.resiMax > t.resiMin ? { colorscheme: { prop: "resi", gradient: "roygb", min: t.resiMin, max: t.resiMax } } : { colorscheme: "Jmol" };
}
function bo(e, t, o, n) {
  const d = n || (() => {
  }), r = rc(t.color, o);
  try {
    e.removeAllSurfaces();
  } catch {
  }
  if (e.setStyle({}, {}), e.setStyle(
    _o,
    t.rep === "stick" ? { stick: { radius: Ce.stick.radius, ...r } } : t.rep === "sphere" ? { sphere: { scale: Ce.sphere.scale, ...r } } : (
      // For 'surface' the shell is added separately; leave the atoms bare so
      // it is not cluttered from the inside.
      t.rep === "surface" ? {} : { cartoon: { ...r } }
    )
  ), e.setStyle(
    Zi,
    t.hetero ? {
      stick: { radius: Ce.hetero.stickRadius, colorscheme: "Jmol" },
      sphere: { scale: Ce.hetero.sphereScale, colorscheme: "Jmol" }
    } : {}
  ), e.setStyle(
    Qi,
    t.waters ? {
      stick: { radius: Ce.water.stickRadius, colorscheme: "Jmol" },
      sphere: { scale: Ce.water.sphereScale, colorscheme: "Jmol" }
    } : {}
  ), t.rep !== "surface") {
    d(null), e.render();
    return;
  }
  d(
    o && o.atoms > Ce.surfaceAtomWarn ? "Computing surface (large structure, this may take a while)..." : "Computing surface..."
  ), e.render(), setTimeout(() => {
    try {
      Promise.resolve(
        e.addSurface(Fe.SurfaceType.VDW, { opacity: Ce.surfaceOpacity, ...r }, _o)
      ).then(() => {
        d(null), e.render();
      }).catch((a) => d(`Surface failed: ${$e(a)}`, "error"));
    } catch (a) {
      d(`Surface failed: ${$e(a)}`, "error");
    }
  }, 30);
}
const nc = [
  { id: "cartoon", label: "Cartoon", title: "Ribbon / cartoon backbone" },
  { id: "surface", label: "Surface", title: "Molecular (VDW) surface" },
  { id: "stick", label: "Stick", title: "All-atom sticks" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" }
], oc = [
  { id: "chain", label: "Chain" },
  { id: "spectrum", label: "Spectrum" },
  { id: "ss", label: "Secondary structure" },
  { id: "element", label: "Element" }
];
class sc extends Be {
  placeholder() {
    return "Waiting for a ProteinComponent payload...";
  }
  renderView(t, o) {
    const n = o.pdb, d = o.name ?? "", r = { rep: "cartoon", color: "chain", waters: !1, hetero: !0 };
    let a = null, i = null, f = null;
    const g = B(
      "div",
      `display:flex;align-items:center;gap:14px;flex-wrap:wrap;padding:8px 14px;flex-shrink:0;font-size:12px;background:${q.toolbarBg};border-bottom:1px solid ${q.toolbarBorder};color:${q.textPrimary};`
    );
    t.appendChild(g), g.appendChild(
      B("span", `font-weight:700;font-size:14px;letter-spacing:.02em;color:${q.titleColor};`, d || "Protein")
    );
    const v = (h) => B("span", `font-size:11px;color:${q.textMuted};`, h);
    g.appendChild(v("Style:")), g.appendChild(
      Eo(nc, r.rep, (h) => {
        r.rep = h, l();
      })
    ), g.appendChild(v("Color:"));
    const w = B("select", So);
    for (const h of oc) {
      const $ = B("option", "", h.label);
      $.value = h.id, w.appendChild($);
    }
    w.value = r.color, w.addEventListener("change", () => {
      r.color = w.value, l();
    }), g.appendChild(w);
    const S = B("div", "display:flex;gap:4px;");
    g.appendChild(S);
    const b = [
      ["waters", "Waters", "Show water molecules", () => l()],
      ["hetero", "Hetero", "Show hetero atoms / ligands / ions / lipids", () => l()],
      ["spin", "Spin", "Rotate the view continuously", () => a?.spin(r.spin ? "y" : !1)]
    ];
    for (const [h, $, s, c] of b) {
      const p = B("button", Ye, $);
      p.title = s, p.style.background = r[h] ? q.btnBgActive : q.btnBg, p.onclick = () => {
        r[h] = !r[h], p.style.background = r[h] ? q.btnBgActive : q.btnBg, c();
      }, S.appendChild(p);
    }
    S.appendChild(zr(() => i?.reset()));
    const E = B("span", `margin-left:auto;font-size:11px;white-space:nowrap;color:${q.textMuted2};`);
    g.appendChild(E);
    const _ = Po();
    t.appendChild(_.wrap);
    const u = B(
      "div",
      "position:absolute;top:12px;left:50%;transform:translateX(-50%);padding:6px 14px;border-radius:6px;font-size:12px;z-index:20;display:none;pointer-events:none;"
    );
    _.wrap.appendChild(u);
    const m = (h, $) => {
      if (h == null) {
        u.style.display = "none";
        return;
      }
      u.textContent = h, u.style.display = "block";
      const s = $ === "error";
      u.style.background = s ? q.warnBg : q.toolbarBg, u.style.color = s ? q.warnFg : q.textMuted, u.style.border = `1px solid ${s ? q.warnBorder : q.toolbarBorder}`;
    };
    function l() {
      a && bo(a, r, f, m);
    }
    if (!n || !n.trim())
      return m("No protein data - waiting for a PDB payload."), {};
    try {
      f = ec(n), E.textContent = tc(f);
    } catch (h) {
      m(`⚠ PDB parse error: ${$e(h)}`, "error");
    }
    return m("Loading 3D viewer..."), zo().then(() => {
      a = Fe.createViewer(_.container, { backgroundColor: q.viewerBg }), a.addModel(n, "pdb"), bo(a, r, f, m), a.zoomTo(), a.spin(r.spin ? "y" : !1), a.render(), i = Vo(_.container, a);
    }).catch((h) => {
      m(`⚠ Failed to render structure: ${$e(h)}`, "error");
    }), {
      onResize() {
        a && (a.resize(), a.render());
      },
      cleanup() {
        if (i?.cleanup(), i = null, !!a) {
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
Le("gufe-protein", sc);
const Bo = "http://www.w3.org/2000/svg";
function ne(e, t = {}) {
  const o = document.createElementNS(Bo, e);
  for (const [n, d] of Object.entries(t)) o.setAttribute(n, String(d));
  return o;
}
function Yt(e, t) {
  const o = document.createElementNS(Bo, "title");
  return o.textContent = t, e.appendChild(o), e;
}
function ac(e) {
  const t = /* @__PURE__ */ new Map();
  return Pr(e, t, /* @__PURE__ */ new Set()), t;
}
function Pr(e, t, o) {
  if (e == null || typeof e != "object" || o.has(e)) return;
  if (o.add(e), Array.isArray(e)) {
    for (const d of e) Pr(d, t, o);
    return;
  }
  const n = e.registry;
  if (Array.isArray(n))
    for (const d of n) {
      const r = d["gufe-key"];
      typeof r == "string" && r && !t.has(r) && t.set(r, d);
    }
  for (const d of Object.values(e)) Pr(d, t, o);
}
function ic(e, t) {
  return t ? e.get(t) : void 0;
}
function kr(e, t, o) {
  const n = ic(e, t);
  return n?.type === o ? n : void 0;
}
function cc(e) {
  return e.name ? e.name : (e["gufe-key"].split("-").pop() ?? e["gufe-key"]).slice(0, 6);
}
const lc = ["Force-directed", "Circular", "Radial"], Ht = 34, We = 200, vr = 1.5, dc = 6, uc = 16, he = {
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
function fc(e) {
  const t = parseInt(e.replace("#", ""), 16);
  return [t >> 16 & 255, t >> 8 & 255, t & 255];
}
function wo(e) {
  const [t, o] = q.netEdgeRamp.map(fc), n = Math.max(0, Math.min(1, e ?? 0.5));
  return `rgb(${t.map((r, a) => Math.round(r + (o[a] - r) * n)).join(",")})`;
}
const Oe = cc, pc = (e, t) => e.length > t ? `${e.slice(0, t - 1)}...` : e;
function Ac(e, t) {
  const o = kr(t, e.componentA, "SmallMoleculeComponentViz"), n = kr(t, e.componentB, "SmallMoleculeComponentViz");
  return !o || !n ? null : { ...e, registry: o["gufe-key"] === n["gufe-key"] ? [o] : [o, n] };
}
class hc extends Be {
  placeholder() {
    return "Waiting for a LigandNetwork payload...";
  }
  renderView(t, o) {
    const n = ac(o), d = [];
    let r = 0;
    for (const N of o.nodes ?? []) {
      const x = kr(n, N, "SmallMoleculeComponentViz");
      if (!x) {
        r++;
        continue;
      }
      d.push({ ...x, x: 0, y: 0 });
    }
    const a = new Map(d.map((N) => [N["gufe-key"], N])), i = [];
    let f = 0;
    for (const N of o.edges ?? []) {
      const x = a.get(N.componentA), T = a.get(N.componentB);
      if (!x || !T) {
        f++;
        continue;
      }
      i.push({ ...N, index: i.length, from: x, to: T });
    }
    const g = Xt(o.name || "Ligand network", "LigandNetwork");
    g.statsEl.appendChild(Pe("ligands", String(d.length))), g.statsEl.appendChild(Pe("mappings", String(i.length))), t.appendChild(g);
    const v = B("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    t.appendChild(v);
    const w = B("div", `flex:1 1 58%;min-width:0;display:flex;flex-direction:column;background:${q.netCanvasBg};`), S = B("div", `flex:1 1 42%;min-width:0;display:flex;flex-direction:column;background:${q.appBg};`);
    v.appendChild(w), v.appendChild(B("div", `width:1px;flex-shrink:0;background:${q.splitBorder};`)), v.appendChild(S);
    const b = B("div", `flex:1;position:relative;overflow:hidden;min-height:0;background:${q.netCanvasBg};`);
    w.appendChild(b);
    const E = this.#r(
      (N) => C(N),
      () => p()
    );
    w.appendChild(E.bar);
    const _ = this.#e(S);
    if (!d.length)
      return b.appendChild(
        ce(
          r ? "None of this network's ligands are in its registry." : "This network has no ligands."
        )
      ), _.message("Nothing to show."), {};
    r && ar(
      b,
      `${r} ligand${r === 1 ? "" : "s"} named by this network are not in its registry`
    ), f && ar(b, `${f} mapping${f === 1 ? "" : "s"} name a ligand this network does not contain`);
    const u = wr().catch((N) => (console.warn("[gufe-viz] RDKit failed to load:", $e(N)), null));
    let m = i.length ? 0 : -1, l = null, h = "Force-directed", $ = !1, s = !0, c = () => {
    }, p = () => {
    };
    const k = (N) => {
      m = N, _.show(i[N] ?? null), c();
    }, C = (N = h) => {
      h = N, l?.(), l = null, b.querySelector("svg")?.remove();
      const x = b.clientWidth || 800, T = b.clientHeight || 600;
      mc(d, x, T, h, i);
      const I = () => {
        if (!s) return;
        const L = this.#n(b, d, i, x, T, k);
        c = () => L.setSelected(m), p = L.reset, l = L.cleanup, c(), u.then((Q) => Q && L.depict(Q)).catch(() => {
        });
      };
      if (h !== "Force-directed" || $) {
        I();
        return;
      }
      yc(d, i, x, T).then((L) => {
        if (s) {
          if (L) {
            I();
            return;
          }
          $ = !0, E.picker.value = "Circular", ar(b, "d3 could not be loaded - showing the circular layout instead"), C("Circular");
        }
      }, I);
    };
    return C(), _.show(i[m] ?? null), {
      onResize: () => C(),
      cleanup: () => {
        s = !1, l?.();
      }
    };
  }
  #r(t, o) {
    const n = B(
      "div",
      `display:flex;align-items:center;gap:10px;flex-wrap:wrap;padding:8px 14px;flex-shrink:0;background:${q.toolbarBg};border-top:1px solid ${q.toolbarBorder};`
    ), d = B("div", `display:flex;align-items:center;gap:6px;font-size:11px;color:${q.textMuted};`);
    d.appendChild(B("span", "", "score")), d.appendChild(
      B(
        "span",
        `width:40px;height:4px;border-radius:2px;background:linear-gradient(to right,${q.netEdgeRamp.join(",")});`
      )
    ), d.appendChild(B("span", "", "0 -> 1")), n.appendChild(d), n.appendChild(B("label", `font-size:12px;margin-left:auto;color:${q.textMuted};`, "Layout"));
    const r = B("select", So);
    for (const a of lc) {
      const i = B("option", "", a);
      i.value = a, r.appendChild(i);
    }
    return r.onchange = () => t(r.value), n.appendChild(r), n.appendChild(zr(o, "Reset pan and zoom")), { bar: n, picker: r };
  }
  /** The right-hand pane: what the selected mapping is, in words and pictures. */
  #e(t) {
    const o = B(
      "div",
      `flex-shrink:0;padding:4px 10px;font-size:12px;font-weight:bold;color:${q.labelFg};background:${q.labelBg};`,
      "Selected mapping"
    ), n = B("div", "flex:1;min-height:0;overflow:auto;display:flex;flex-direction:column;");
    t.appendChild(o), t.appendChild(n);
    const d = (a) => n.replaceChildren(ce(a));
    return { show: (a) => {
      if (!a) {
        d("Click an edge to see its mapping.");
        return;
      }
      n.replaceChildren();
      const i = B(
        "div",
        `padding:10px 14px;font-size:13px;font-weight:600;color:${q.textPrimary};border-bottom:1px solid ${q.toolbarBorder};`,
        `${Oe(a.from)} -> ${Oe(a.to)}`
      );
      n.appendChild(i);
      const f = B("div", "display:flex;flex-direction:row;min-height:180px;");
      n.appendChild(f);
      const g = [a.from.sdf, a.to.sdf].map((_, u) => {
        const m = B("div", "flex:1 1 50%;min-width:0;display:flex;flex-direction:column;");
        m.appendChild(
          B("div", `padding:4px 10px;font-size:11px;color:${q.textMuted2};`, u === 0 ? "A" : "B")
        );
        const l = B(
          "div",
          `flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:6px;background:${q.canvas2DBg};`
        );
        return l.appendChild(ce("...")), m.appendChild(l), f.appendChild(m), { box: l, sdf: _ };
      }), v = (a.componentA_to_componentB ?? []).length, w = Sr(a.from.sdf), S = Sr(a.to.sdf), b = B(
        "div",
        `display:flex;flex-wrap:wrap;gap:8px 16px;padding:10px 14px;font-size:11px;color:${q.textMuted};border-top:1px solid ${q.toolbarBorder};`
      );
      b.appendChild(Pe("score", a.score == null ? Re : a.score.toFixed(3), wo(a.score))), b.appendChild(Pe("mapped atoms", String(v))), b.appendChild(Pe("atoms A", w ? String(w.atoms) : Re)), b.appendChild(Pe("atoms B", S ? String(S.atoms) : Re)), n.appendChild(b);
      const E = Object.entries(a.annotations ?? {}).filter(([_]) => _ !== "score");
      if (E.length) {
        const _ = B(
          "div",
          `padding:0 14px 12px;font-size:11px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;color:${q.textMuted2};`
        );
        for (const [u, m] of E)
          _.appendChild(B("div", "", `${u}: ${String(m)}`));
        n.appendChild(_);
      }
      wr().then((_) => {
        for (const { box: u, sdf: m } of g) {
          const l = Er(_, m, We);
          if (u.replaceChildren(), l) {
            u.innerHTML = l;
            const h = u.querySelector("svg");
            h?.removeAttribute("width"), h?.removeAttribute("height"), h?.setAttribute("style", "width:100%;height:100%;");
          } else
            u.appendChild(ce("Failed to parse molecule", !0));
        }
      }).catch((_) => {
        for (const { box: u } of g) u.replaceChildren(ce(`RDKit failed to load: ${$e(_)}`, !0));
      });
    }, message: d };
  }
  /** Build the SVG for the current node positions. Returns the handles the
   * caller needs afterwards: selection, depictions, and teardown. */
  #n(t, o, n, d, r, a) {
    const i = ne("svg", { width: d, height: r, style: "display:block;touch-action:none;" }), f = ne("g");
    i.appendChild(f), t.appendChild(i);
    const g = [], v = ne("g"), w = ne("g"), S = ne("g", { "pointer-events": "none" }), b = ne("g");
    f.append(v, w, S, b);
    for (const h of n) {
      const $ = wo(h.score), s = ne("line", {
        stroke: q.netHaloColor,
        "stroke-width": vr + 12,
        "stroke-linecap": "round",
        opacity: 0,
        "pointer-events": "none"
      }), c = ne("line", {
        stroke: $,
        "stroke-width": vr + (h.score ?? 0.5) * (dc - vr),
        "stroke-opacity": 0.9,
        "pointer-events": "none"
      }), p = Yt(
        ne("line", { stroke: "transparent", "stroke-width": uc, style: "cursor:pointer;" }),
        `${Oe(h.from)} -> ${Oe(h.to)}${h.score == null ? "" : `
score ${h.score.toFixed(3)}`}`
      );
      if (p.addEventListener("click", (k) => {
        k.stopPropagation(), a(h.index);
      }), g.push(s), v.append(s, c), w.appendChild(p), h.score != null) {
        const k = ne("text", {
          "text-anchor": "middle",
          "dominant-baseline": "middle",
          "font-size": 10,
          "font-weight": 600,
          fill: q.netEdgeLabel
        });
        k.textContent = h.score.toFixed(2), S.appendChild(k);
      } else
        S.appendChild(ne("text"));
    }
    const E = [], _ = [], u = o.map((h) => {
      const $ = Yt(ne("g", { style: "cursor:grab;" }), `${Oe(h)}
${h.smiles ?? ""}
${h["gufe-key"]}`);
      $.appendChild(
        ne("circle", {
          r: Ht,
          fill: q.netNodeFill,
          stroke: q.netNodeStroke,
          "stroke-width": 1.5
        })
      );
      const s = ne("g", { "pointer-events": "none" });
      $.appendChild(s), E.push(s);
      const c = ne("text", {
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        "font-size": 16,
        "font-weight": 700,
        fill: q.netInitials,
        "pointer-events": "none"
      });
      c.textContent = Oe(h).slice(0, 2).toUpperCase(), $.appendChild(c), _.push(c);
      const p = ne("text", {
        "text-anchor": "middle",
        y: Ht + 14,
        "font-size": 11,
        "font-weight": 600,
        fill: q.netNodeLabel,
        "pointer-events": "none"
      });
      return p.textContent = pc(Oe(h), 16), $.appendChild(p), b.appendChild($), $;
    }), m = () => {
      n.forEach((h, $) => {
        for (const c of [g[$], v.children[$ * 2 + 1], w.children[$]]) {
          const p = c;
          p.setAttribute("x1", String(h.from.x)), p.setAttribute("y1", String(h.from.y)), p.setAttribute("x2", String(h.to.x)), p.setAttribute("y2", String(h.to.y));
        }
        const s = S.children[$];
        s.setAttribute("x", String((h.from.x + h.to.x) / 2)), s.setAttribute("y", String((h.from.y + h.to.y) / 2 - 8));
      }), o.forEach((h, $) => u[$].setAttribute("transform", `translate(${h.x},${h.y})`));
    };
    m();
    const l = this.#t(i, f, o, u, m);
    return {
      setSelected(h) {
        g.forEach(($, s) => $.setAttribute("opacity", s === h ? "0.95" : "0"));
      },
      depict(h) {
        const $ = (Ht - 4) * 2 / We, s = new DOMParser();
        let c = 0;
        return o.forEach((p, k) => {
          const C = p.sdf && Er(h, p.sdf, We);
          if (!C) return;
          const N = s.parseFromString(C, "image/svg+xml").documentElement;
          if (!N || N.nodeName.toLowerCase() === "parsererror") return;
          const x = E[k];
          x.setAttribute(
            "transform",
            `translate(${-$ * We / 2},${-$ * We / 2}) scale(${$})`
          );
          let T = 0;
          for (const I of Array.from(N.childNodes)) {
            if (I.nodeType !== 1) continue;
            const L = I.nodeName.toLowerCase();
            if (!(L === "defs" || L === "metadata" || L === "title")) {
              if (L === "rect") {
                const Q = (I.getAttribute("fill") ?? "").toLowerCase();
                if (Q === "#ffffff" || Q === "white" || Q === "rgb(255,255,255)") continue;
              }
              x.appendChild(document.importNode(I, !0)), T++;
            }
          }
          T && (_[k].setAttribute("display", "none"), c++);
        }), c;
      },
      reset: l.reset,
      cleanup: l.cleanup
    };
  }
  /** Wheel zoom, background pan, node drag - ~40 lines instead of d3-zoom and
   * d3-drag, and they keep working when d3 is unreachable. */
  #t(t, o, n, d, r) {
    let a = 1, i = 0, f = 0;
    const g = () => o.setAttribute("transform", `translate(${i},${f}) scale(${a})`), w = Do(t, {
      onZoom: (u) => {
        const m = t.getBoundingClientRect(), l = u.clientX - m.left, h = u.clientY - m.top, $ = Math.min(5 / a, Math.max(0.15 / a, Math.exp(-u.deltaY * 2e-3)));
        i = l - (l - i) * $, f = h - (h - f) * $, a *= $, g();
      },
      hint: "Click the graph or hold Ctrl to zoom"
    });
    let S = null;
    const b = (u) => {
      S = { x: u.clientX - i, y: u.clientY - f };
    }, E = (u) => {
      S && (i = u.clientX - S.x, f = u.clientY - S.y, g());
    }, _ = () => {
      S = null;
    };
    return t.addEventListener("pointerdown", b), t.addEventListener("pointermove", E), t.addEventListener("pointerup", _), t.addEventListener("pointercancel", _), t.addEventListener("pointerleave", _), d.forEach((u, m) => {
      let l = null;
      u.addEventListener("pointerdown", ($) => {
        $.stopPropagation(), l = { x: $.clientX - n[m].x * a, y: $.clientY - n[m].y * a }, u.setPointerCapture($.pointerId);
      }), u.addEventListener("pointermove", ($) => {
        l && (n[m].x = n[m].fx = ($.clientX - l.x) / a, n[m].y = n[m].fy = ($.clientY - l.y) / a, r());
      });
      const h = () => {
        l = null;
      };
      u.addEventListener("pointerup", h), u.addEventListener("pointercancel", h);
    }), {
      reset() {
        a = 1, i = 0, f = 0, g();
      },
      cleanup() {
        w.cleanup(), t.removeEventListener("pointerdown", b), t.removeEventListener("pointermove", E), t.removeEventListener("pointerup", _), t.removeEventListener("pointercancel", _), t.removeEventListener("pointerleave", _);
      }
    };
  }
}
function mc(e, t, o, n, d) {
  const r = t / 2, a = o / 2, i = (f, g) => {
    f.forEach((v, w) => {
      const S = 2 * Math.PI * w / Math.max(1, f.length) - Math.PI / 2;
      v.x = r + g * Math.cos(S), v.y = a + g * Math.sin(S), v.fx = n === "Force-directed" ? void 0 : v.x, v.fy = n === "Force-directed" ? void 0 : v.y;
    });
  };
  if (n === "Radial" && e.length) {
    const f = new Map(e.map((_) => [_["gufe-key"], []]));
    for (const _ of d)
      f.get(_.from["gufe-key"]).push(_.to["gufe-key"]), f.get(_.to["gufe-key"]).push(_.from["gufe-key"]);
    const g = new Map(e.map((_) => [_["gufe-key"], _])), v = e.reduce(
      (_, u) => f.get(u["gufe-key"]).length > f.get(_["gufe-key"]).length ? u : _
    ), w = /* @__PURE__ */ new Set([v["gufe-key"]]);
    let S = [v["gufe-key"]], b = 0;
    const E = Math.min(t, o) * 0.18;
    for (; S.length; ) {
      i(
        S.map((u) => g.get(u)),
        b === 0 ? 0 : b * E + 40
      );
      const _ = [];
      for (const u of S)
        for (const m of f.get(u))
          w.has(m) || (w.add(m), _.push(m));
      S = _, b++;
    }
    i(e.filter((_) => !w.has(_["gufe-key"])), Math.min(t, o) * 0.45);
    return;
  }
  i(e, Math.min(t, o) * 0.34);
}
async function yc(e, t, o, n) {
  let d;
  try {
    if (d = await Vi(), typeof d?.forceSimulation != "function") return !1;
  } catch {
    return !1;
  }
  const r = t.map((f) => ({ source: f.from["gufe-key"], target: f.to["gufe-key"], score: f.score })), a = d.forceSimulation(e).force(
    "link",
    d.forceLink(r).id((f) => f["gufe-key"]).distance((f) => he.linkBaseDistance + (1 - (f.score ?? 0.5)) * he.linkScoreBonus).strength(he.linkStrength)
  ).force(
    "charge",
    d.forceManyBody().strength(he.chargeStrength).distanceMin(he.chargeDistanceMin).distanceMax(he.chargeDistanceMax)
  ).force("center", d.forceCenter(o / 2, n / 2).strength(he.centerStrength)).force("collision", d.forceCollide(Ht + he.collisionPadding).iterations(he.collisionIterations)).force("x", d.forceX(o / 2).strength(he.drift)).force("y", d.forceY(n / 2).strength(he.drift)).stop(), i = Math.ceil(Math.log(a.alphaMin()) / Math.log(1 - a.alphaDecay()));
  for (let f = 0; f < i * he.tickMultiplier; f++) a.tick();
  return !0;
}
Le("gufe-ligand-network", hc);
const ve = { width: 340, height: 260, padding: 14, radius: 12 }, gc = 150, vc = 40, $c = 24;
function _c(e) {
  let t = e >>> 0;
  return () => (t = t * 1664525 + 1013904223 >>> 0, t / 4294967296);
}
function bc(e) {
  const t = /-?\d+(\.\d+)?([eE][-+]?\d+)?/.exec(e ?? "");
  if (!t) return null;
  const o = Number(t[0]);
  return Number.isFinite(o) ? o : null;
}
function wc(e) {
  return e == null || e <= 0 ? 0 : Math.max(1, Math.min($c, Math.round(e * vc)));
}
function Sc(e) {
  const t = ne("svg", {
    viewBox: `0 0 ${ve.width} ${ve.height}`,
    style: "width:100%;height:100%;max-width:100%;",
    role: "img"
  });
  Yt(t, `${e.smiles || "solvent"} box`), t.appendChild(
    ne("rect", {
      x: 1,
      y: 1,
      width: ve.width - 2,
      height: ve.height - 2,
      rx: ve.radius,
      fill: q.boxFill,
      stroke: q.boxStroke,
      "stroke-width": 1.5
    })
  );
  const o = _c(1597463007), n = () => ({
    x: ve.padding + o() * (ve.width - 2 * ve.padding),
    y: ve.padding + o() * (ve.height - 2 * ve.padding)
  });
  for (let a = 0; a < gc; a++) {
    const { x: i, y: f } = n();
    t.appendChild(ne("circle", { cx: i, cy: f, r: 2.4, fill: q.textMuted2, "fill-opacity": 0.45 }));
  }
  const d = wc(bc(e.ion_concentration)), r = [
    [e.positive_ion, q.diffAdded],
    [e.negative_ion, q.diffRemoved]
  ];
  for (const [a, i] of r)
    for (let f = 0; f < d; f++) {
      const { x: g, y: v } = n(), w = ne("circle", { cx: g, cy: v, r: 5.5, fill: i, "fill-opacity": 0.85 });
      t.appendChild(Yt(w, a));
    }
  return t;
}
class Ec extends Be {
  placeholder() {
    return "Waiting for a SolventComponent payload...";
  }
  renderView(t, o) {
    const n = Xt(o.name || "Solvent", "SolventComponent");
    n.statsEl.appendChild(Pe("neutralized", o.neutralize ? "yes" : "no")), n.statsEl.appendChild(Pe(o.positive_ion, "", q.diffAdded)), n.statsEl.appendChild(Pe(o.negative_ion, "", q.diffRemoved)), t.appendChild(n);
    const d = B(
      "div",
      "flex:1;min-height:0;display:flex;flex-wrap:wrap;gap:16px;padding:16px;overflow:auto;align-items:flex-start;"
    );
    t.appendChild(d);
    const r = $r();
    r.style.flex = "1 1 320px", r.appendChild(Te("SMILES", o.smiles, !0)), r.appendChild(Te("Positive ion", o.positive_ion)), r.appendChild(Te("Negative ion", o.negative_ion)), r.appendChild(Te("Ion concentration", o.ion_concentration)), r.appendChild(Te("Neutralize", o.neutralize ? "yes" : "no")), d.appendChild(r);
    const a = $r();
    return a.style.flex = "1 1 340px", a.style.alignItems = "center", a.appendChild(Sc(o)), a.appendChild(
      B(
        "div",
        `padding-top:10px;font-size:11px;text-align:center;color:${q.textMuted2};`,
        "Schematic only: the dots show which ions are present, not how many."
      )
    ), d.appendChild(a), {};
  }
}
Le("gufe-solvent", Ec);
class Pc extends Be {
  placeholder() {
    return "Waiting for a component payload...";
  }
  renderView(t, o) {
    const n = Xt(o.name || "Unnamed component", "Component");
    n.statsEl.appendChild(Ko(o.gufe_type)), t.appendChild(n);
    const d = B("div", "flex:1;min-height:0;overflow:auto;display:flex;align-items:center;justify-content:center;padding:24px;");
    t.appendChild(d);
    const r = $r();
    return r.style.maxWidth = "460px", r.appendChild(
      B(
        "div",
        `font-size:14px;font-weight:600;padding-bottom:6px;color:${q.textPrimary};`,
        `There is no visualization for ${o.gufe_type}.`
      )
    ), r.appendChild(
      B(
        "div",
        `font-size:12px;line-height:1.6;padding-bottom:10px;color:${q.textMuted};`,
        "gufe lets a project define its own Component subclasses, so this is a component this build has never been taught to draw - not a broken payload. Everything gufe knows about it that survives serialization is below."
      )
    ), r.appendChild(Te("Name", o.name || "(unnamed)")), r.appendChild(Te("gufe class", o.gufe_type, !0)), d.appendChild(r), {};
  }
}
Le("gufe-unknown-component", Pc);
const Oc = {
  elementChange: "#005AB5",
  uniqueAtom: "#DC3220",
  elementChange3D: "0x005AB5",
  uniqueAtom3D: "0xDC3220"
}, Tc = [
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
], xc = "hsv";
function Mc(e, t) {
  let o = e.querySelector("gufe-view");
  return o || (o = document.createElement("gufe-view"), o.style.cssText = "display:block;width:100%;height:100%;", e.appendChild(o)), t !== void 0 && (o.payload = t), o;
}
export {
  Ho as CHROME_OPEN_BY_DEFAULT,
  Wo as DEBUG_ATTRIBUTE,
  Yo as DEBUG_GLOBAL,
  Li as DEFAULT_ZOOM_BOUNDS,
  Be as GufeElement,
  hc as GufeLigandNetwork,
  sc as GufeProtein,
  Xi as GufeSmallMolecule,
  Ec as GufeSolvent,
  Pc as GufeUnknownComponent,
  qi as GufeView,
  Oc as MAPPING_COLORS,
  Tc as MAPPING_RAMP_3D,
  xc as MAPPING_RAMP_NAME,
  Cc as PAYLOAD_TYPES,
  Rc as SCHEMA_TYPES,
  Mr as VIEW_TAGS,
  Ui as boundedZoom,
  ac as buildRegistry,
  kc as chromeMenu,
  Qo as debugEnabled,
  Le as defineElement,
  Io as describeProblem,
  jc as dispatchProblem,
  cc as entryLabel,
  Mi as formatIssues,
  Do as guardWheel,
  ts as logPayload,
  ic as lookup,
  kr as lookupOfType,
  Ac as mappingPayloadFor,
  Mc as mount,
  bc as parseConcentration,
  es as payloadJson,
  zr as resetControl,
  Nc as validateAs,
  xi as validatePayload,
  Vo as viewerInteraction,
  Hi as wheelFactor
};
