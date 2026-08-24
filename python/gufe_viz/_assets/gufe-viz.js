const Fr = {
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
function Go() {
  try {
    return globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches ?? !1;
  } catch {
    return !1;
  }
}
const I = Go() ? Fr.dark : Fr.light;
function F(e, t, n) {
  const o = document.createElement(e);
  return t && (o.style.cssText = t), n != null && (o.textContent = n), o;
}
function Wt(e) {
  return String(e ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function $e(e) {
  if (e == null) return "unknown error";
  const t = e.message;
  if (typeof t == "string" && t) return t;
  const n = String(e);
  return n === "[object Object]" ? e.name || "unknown error" : n;
}
const Ke = (e) => e.toLocaleString("en-US"), Re = "-", Ye = `background:${I.btnBg};color:${I.btnFg};border:1px solid ${I.btnBorder};padding:4px 9px;font-size:11px;font-weight:bold;border-radius:3px;cursor:pointer;font-family:inherit;`, So = `background:${I.selectBg};color:${I.textPrimary};border:1px solid ${I.selectBorder};border-radius:6px;padding:4px 8px;font-size:12px;cursor:pointer;font-family:inherit;`;
function Eo(e, t, n) {
  const o = F("div", "display:flex;gap:4px;"), d = e.map((r) => {
    const i = F("button", Ye, r.label);
    return i.title = r.title || r.label, i.onmouseover = () => {
      i.style.background = I.btnBgHover;
    }, i.onmouseout = () => {
      i.style.background = t === r.id ? I.btnBgActive : I.btnBg;
    }, i.onclick = () => {
      o.setActive(r.id), n(r.id);
    }, o.appendChild(i), { id: r.id, btn: i };
  });
  return o.setActive = (r) => {
    t = r, d.forEach((i) => {
      i.btn.style.background = i.id === t ? I.btnBgActive : I.btnBg;
    });
  }, o.setActive(t), o;
}
function we(e, t, n) {
  const o = F("span", "display:inline-flex;align-items:center;gap:5px;white-space:nowrap;");
  n && o.appendChild(
    F("span", `width:8px;height:8px;border-radius:50%;background:${n};display:inline-block;`)
  );
  const d = F("span");
  return d.innerHTML = `${Wt(e)} <b style="color:${I.textPrimary};">${Wt(t)}</b>`, o.appendChild(d), o;
}
function Gt(e, t) {
  const n = F("div", "", `⚠ ${t}`);
  return n.style.cssText = `position:absolute;top:10px;left:50%;transform:translateX(-50%);max-width:90%;z-index:20;padding:6px 14px;border-radius:6px;font-size:12px;background:${I.warnBg};color:${I.warnFg};border:1px solid ${I.warnBorder};`, e.appendChild(n), n;
}
function ae(e, t = !1) {
  return F(
    "div",
    `flex:1;display:flex;align-items:center;justify-content:center;text-align:center;padding:24px;font-size:13px;color:${t ? I.errorFg : I.textMuted2};`,
    e
  );
}
function Xe(e, t) {
  const n = F(
    "div",
    `display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;padding:9px 14px;flex-shrink:0;background:${I.toolbarBg};border-bottom:1px solid ${I.toolbarBorder};`
  );
  return n.titleEl = F("span", `font-weight:700;font-size:15px;color:${I.titleColor};letter-spacing:.02em;`, e), n.subtitleEl = F("span", `font-size:12px;color:${I.textMuted2};`, t || ""), n.statsEl = F(
    "div",
    `display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-left:auto;font-size:11px;color:${I.textMuted};`
  ), n.toggleEl = F("div", "display:flex;align-items:center;margin-left:10px;flex-shrink:0;"), n.appendChild(n.titleEl), n.appendChild(n.subtitleEl), n.appendChild(n.statsEl), n.appendChild(n.toggleEl), n;
}
function Oe(e, t, n = !1) {
  const o = F("div", "display:flex;gap:12px;align-items:baseline;padding:5px 0;min-width:0;");
  o.appendChild(
    F(
      "span",
      `flex:0 0 128px;font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:${I.textMuted2};`,
      e
    )
  );
  const d = F(
    "span",
    `flex:1;min-width:0;user-select:text;cursor:text;overflow-wrap:anywhere;color:${I.textPrimary};` + (n ? "font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:11px;" : "font-size:12px;"),
    t
  );
  return d.title = t, o.appendChild(d), o;
}
function Po(e) {
  return F(
    "span",
    `padding:1px 7px;border-radius:10px;font-size:10px;font-weight:700;letter-spacing:.04em;white-space:nowrap;background:${I.badgeBg};color:${I.badgeFg};`,
    e
  );
}
function $r() {
  return F(
    "div",
    `display:flex;flex-direction:column;gap:2px;padding:14px 18px;border-radius:10px;background:${I.cardBg};border:1px solid ${I.cardBorder};`
  );
}
function ko() {
  const e = F("div", "flex:1;position:relative;min-height:0;min-width:0;"), t = F("div", "position:absolute;inset:0;");
  return t.dataset.gufeViewer = "", e.appendChild(t), { wrap: e, container: t };
}
const Jo = !1;
function Wo() {
  const e = F("span", "display:inline-flex;flex-direction:column;gap:2px;justify-content:center;");
  for (let t = 0; t < 3; t++)
    e.appendChild(F("span", `display:block;width:11px;height:1.5px;border-radius:1px;background:${I.btnFg};`));
  return e;
}
function Nc(e, t, n = {}) {
  let o = n.open ?? Jo, d = !1;
  const r = F("div", "flex-shrink:0;"), i = F("button", `${Ye}display:inline-flex;align-items:center;gap:6px;padding:4px 8px;`);
  i.appendChild(Wo()), i.setAttribute("aria-label", n.label || "Toggle menu");
  const a = () => {
    o && !d && (d = !0, r.appendChild(t())), r.style.display = o ? "" : "none", i.style.background = o ? I.btnBgActive : I.btnBg, i.setAttribute("aria-expanded", String(o));
  }, f = (g) => {
    g !== o && (o = g, a(), n.onToggle?.(o));
  };
  return i.onclick = () => f(!o), i.onmouseover = () => {
    i.style.background = o ? I.btnBgActive : I.btnBgHover;
  }, i.onmouseout = () => {
    i.style.background = o ? I.btnBgActive : I.btnBg;
  }, e.toggleEl.appendChild(i), a(), {
    panel: r,
    isOpen: () => o,
    setOpen: f
  };
}
const Yo = ["debug", "gufe-debug"], Xo = "debug", Zo = "GUFE_VIZ_DEBUG";
function Qo() {
  return !!globalThis[Zo];
}
function es() {
  try {
    const e = globalThis.location?.search;
    if (!e) return !1;
    const t = new URLSearchParams(e);
    return Yo.some((n) => t.has(n));
  } catch {
    return !1;
  }
}
function ts(e) {
  return e?.hasAttribute?.(Xo) ? !0 : Qo() || es();
}
function rs(e) {
  try {
    return JSON.stringify(e, null, 2) ?? String(e);
  } catch (t) {
    return `<could not be stringified: ${$e(t)}>`;
  }
}
function ns(e, t, n) {
  if (!ts(n)) return;
  const o = rs(t), d = t?.type, r = `[gufe-viz] ${e}${typeof d == "string" ? ` ${d}` : ""} (${o.length} chars)`, i = typeof console.groupCollapsed == "function";
  i ? console.groupCollapsed(r) : console.log(r), console.log(o), console.log(t), i && console.groupEnd?.();
}
const os = 150;
class Te extends HTMLElement {
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
    this.style.display = "block", this.style.width = this.style.width || "100%", this.style.height = this.style.height || "100%", this.style.background = I.appBg, this.style.color = I.textPrimary, this.style.fontFamily = "'Inter',system-ui,sans-serif", typeof ResizeObserver < "u" && !this.#t && (this.#t = new ResizeObserver(() => {
      this.#o && clearTimeout(this.#o), this.#o = setTimeout(() => this.#e?.onResize?.(), os);
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
      `width:100%;height:100%;display:flex;flex-direction:column;overflow:hidden;background:${I.appBg};`
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
    const t = this.#d(), n = this.#s;
    if (this.#r == null) {
      t.appendChild(ae(this.placeholder()));
      return;
    }
    let o;
    try {
      o = this.renderView(t, this.#r);
    } catch (d) {
      this.#l(t, n, d);
      return;
    }
    o instanceof Promise ? o.then(
      (d) => this.#c(d, n),
      (d) => this.#l(t, n, d)
    ) : this.#c(o, n);
  }
  /** Take ownership of a view's handle, unless it belongs to a dead render. */
  #c(t, n) {
    if (n !== this.#s || !this.isConnected) {
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
    n === this.#s && (console.warn("[gufe-viz] render failed:", o), t.replaceChildren(ae(`Failed to render: ${$e(o)}`, !0)));
  }
  /** Force a resize pass - for hosts that know they resized us. */
  resize() {
    this.#e?.onResize?.();
  }
}
function Me(e, t) {
  typeof customElements > "u" || customElements.get(e) || customElements.define(e, t);
}
function ss(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ze = { exports: {} }, ar = {}, Se = {}, Ne = {}, cr = {}, lr = {}, dr = {}, Br;
function Yt() {
  return Br || (Br = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.regexpCode = e.getEsmExportName = e.getProperty = e.safeStringify = e.stringify = e.strConcat = e.addCodeArg = e.str = e._ = e.nil = e._Code = e.Name = e.IDENTIFIER = e._CodeOrName = void 0;
    class t {
    }
    e._CodeOrName = t, e.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
    class n extends t {
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
    e.Name = n;
    class o extends t {
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
        return (l = this._names) !== null && l !== void 0 ? l : this._names = this._items.reduce((h, $) => ($ instanceof n && (h[$.str] = (h[$.str] || 0) + 1), h), {});
      }
    }
    e._Code = o, e.nil = new o("");
    function d(m, ...l) {
      const h = [m[0]];
      let $ = 0;
      for (; $ < l.length; )
        a(h, l[$]), h.push(m[++$]);
      return new o(h);
    }
    e._ = d;
    const r = new o("+");
    function i(m, ...l) {
      const h = [b(m[0])];
      let $ = 0;
      for (; $ < l.length; )
        h.push(r), a(h, l[$]), h.push(r, b(m[++$]));
      return f(h), new o(h);
    }
    e.str = i;
    function a(m, l) {
      l instanceof o ? m.push(...l._items) : l instanceof n ? m.push(l) : m.push(w(l));
    }
    e.addCodeArg = a;
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
        return l instanceof n || m[m.length - 1] !== '"' ? void 0 : typeof l != "string" ? `${m.slice(0, -1)}${l}"` : l[0] === '"' ? m.slice(0, -1) + l.slice(1) : void 0;
      if (typeof l == "string" && l[0] === '"' && !(m instanceof n))
        return `"${m}${l.slice(1)}`;
    }
    function v(m, l) {
      return l.emptyStr() ? m : m.emptyStr() ? l : i`${m}${l}`;
    }
    e.strConcat = v;
    function w(m) {
      return typeof m == "number" || typeof m == "boolean" || m === null ? m : b(Array.isArray(m) ? m.join(",") : m);
    }
    function S(m) {
      return new o(b(m));
    }
    e.stringify = S;
    function b(m) {
      return JSON.stringify(m).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    e.safeStringify = b;
    function E(m) {
      return typeof m == "string" && e.IDENTIFIER.test(m) ? new o(`.${m}`) : d`[${m}]`;
    }
    e.getProperty = E;
    function _(m) {
      if (typeof m == "string" && e.IDENTIFIER.test(m))
        return new o(`${m}`);
      throw new Error(`CodeGen: invalid export name: ${m}, use explicit $id name mapping`);
    }
    e.getEsmExportName = _;
    function u(m) {
      return new o(m.toString());
    }
    e.regexpCode = u;
  })(dr)), dr;
}
var ur = {}, Lr;
function Ur() {
  return Lr || (Lr = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0;
    const t = /* @__PURE__ */ Yt();
    class n extends Error {
      constructor(g) {
        super(`CodeGen: "code" for ${g} not defined`), this.value = g.value;
      }
    }
    var o;
    (function(f) {
      f[f.Started = 0] = "Started", f[f.Completed = 1] = "Completed";
    })(o || (e.UsedValueState = o = {})), e.varKinds = {
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
    const i = (0, t._)`\n`;
    class a extends d {
      constructor(g) {
        super(g), this._values = {}, this._scope = g.scope, this.opts = { ...g, _n: g.lines ? i : t.nil };
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
            u.set(m, o.Started);
            let l = v(m);
            if (l) {
              const h = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
              b = (0, t._)`${b}${h} ${m} = ${l};${this.opts._n}`;
            } else if (l = S?.(m))
              b = (0, t._)`${b}${l}${this.opts._n}`;
            else
              throw new n(m);
            u.set(m, o.Completed);
          });
        }
        return b;
      }
    }
    e.ValueScope = a;
  })(ur)), ur;
}
var Kr;
function G() {
  return Kr || (Kr = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
    const t = /* @__PURE__ */ Yt(), n = /* @__PURE__ */ Ur();
    var o = /* @__PURE__ */ Yt();
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
    class i extends r {
      constructor(y, P, M) {
        super(), this.varKind = y, this.name = P, this.rhs = M;
      }
      render({ es5: y, _n: P }) {
        const M = y ? n.varKinds.var : this.varKind, U = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
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
    class a extends r {
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
        return z(y, this.rhs);
      }
    }
    class f extends a {
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
        return this.nodes.reduce((y, P) => O(y, P.names), {});
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
        return z(y, this.condition), this.else && O(y, this.else.names), y;
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
        return O(super.names, this.iteration.names);
      }
    }
    class $ extends l {
      constructor(y, P, M, U) {
        super(), this.varKind = y, this.name = P, this.from = M, this.to = U;
      }
      render(y) {
        const P = y.es5 ? n.varKinds.var : this.varKind, { name: M, from: U, to: H } = this;
        return `for(${P} ${M}=${U}; ${M}<${H}; ${M}++)` + super.render(y);
      }
      get names() {
        const y = z(super.names, this.from);
        return z(y, this.to);
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
        return O(super.names, this.iterable.names);
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
        return this.catch && O(y, this.catch.names), this.finally && O(y, this.finally.names), y;
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
    class T {
      constructor(y, P = {}) {
        this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ...P, _n: P.lines ? `
` : "" }, this._extScope = y, this._scope = new n.Scope({ parent: y }), this._nodes = [new _()];
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
        return M !== void 0 && U && (this._constants[H.str] = M), this._leafNode(new i(y, H, M)), H;
      }
      // `const` declaration (`var` in es5 mode)
      const(y, P, M) {
        return this._def(n.varKinds.const, y, P, M);
      }
      // `let` declaration with optional assignment (`var` in es5 mode)
      let(y, P, M) {
        return this._def(n.varKinds.let, y, P, M);
      }
      // `var` declaration with optional assignment
      var(y, P, M) {
        return this._def(n.varKinds.var, y, P, M);
      }
      // assignment code
      assign(y, P, M) {
        return this._leafNode(new a(y, P, M));
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
      forRange(y, P, M, U, H = this.opts.es5 ? n.varKinds.var : n.varKinds.let) {
        const ee = this._scope.toName(y);
        return this._for(new $(H, ee, P, M), () => U(ee));
      }
      // `for-of` statement (in es5 mode replace with a normal for loop)
      forOf(y, P, M, U = n.varKinds.const) {
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
      forIn(y, P, M, U = this.opts.es5 ? n.varKinds.var : n.varKinds.const) {
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
    e.CodeGen = T;
    function O(x, y) {
      for (const P in y)
        x[P] = (x[P] || 0) + (y[P] || 0);
      return x;
    }
    function z(x, y) {
      return y instanceof t._CodeOrName ? O(x, y.names) : x;
    }
    function L(x, y, P) {
      if (x instanceof t.Name)
        return M(x);
      if (!U(x))
        return x;
      return new t._Code(x._items.reduce((H, ee) => (ee instanceof t.Name && (ee = M(ee)), ee instanceof t._Code ? H.push(...ee._items) : H.push(ee), H), []));
      function M(H) {
        const ee = P[H.str];
        return ee === void 0 || y[H.str] !== 1 ? H : (delete y[H.str], ee);
      }
      function U(H) {
        return H instanceof t._Code && H._items.some((ee) => ee instanceof t.Name && y[ee.str] === 1 && P[ee.str] !== void 0);
      }
    }
    function Q(x, y) {
      for (const P in y)
        x[P] = (x[P] || 0) - (y[P] || 0);
    }
    function te(x) {
      return typeof x == "boolean" || typeof x == "number" || x === null ? !x : (0, t._)`!${D(x)}`;
    }
    e.not = te;
    const fe = A(e.operators.AND);
    function Y(...x) {
      return x.reduce(fe);
    }
    e.and = Y;
    const me = A(e.operators.OR);
    function V(...x) {
      return x.reduce(me);
    }
    e.or = V;
    function A(x) {
      return (y, P) => y === t.nil ? P : P === t.nil ? y : (0, t._)`${D(y)} ${x} ${D(P)}`;
    }
    function D(x) {
      return x instanceof t.Name ? x : (0, t._)`(${x})`;
    }
  })(lr)), lr;
}
var J = {}, Hr;
function X() {
  if (Hr) return J;
  Hr = 1, Object.defineProperty(J, "__esModule", { value: !0 }), J.checkStrictMode = J.getErrorPath = J.Type = J.useFunc = J.setEvaluated = J.evaluatedPropsToName = J.mergeEvaluated = J.eachItem = J.unescapeJsonPointer = J.escapeJsonPointer = J.escapeFragment = J.unescapeFragment = J.schemaRefOrVal = J.schemaHasRulesButRef = J.schemaHasRules = J.checkUnknownRules = J.alwaysValidSchema = J.toHash = void 0;
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ Yt();
  function n(s) {
    const c = {};
    for (const p of s)
      c[p] = !0;
    return c;
  }
  J.toHash = n;
  function o(s, c) {
    return typeof c == "boolean" ? c : Object.keys(c).length === 0 ? !0 : (d(s, c), !r(c, s.self.RULES.all));
  }
  J.alwaysValidSchema = o;
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
  function i(s, c) {
    if (typeof s == "boolean")
      return !s;
    for (const p in s)
      if (p !== "$ref" && c.all[p])
        return !0;
    return !1;
  }
  J.schemaHasRulesButRef = i;
  function a({ topSchemaRef: s, schemaPath: c }, p, k, C) {
    if (!C) {
      if (typeof p == "number" || typeof p == "boolean")
        return p;
      if (typeof p == "string")
        return (0, e._)`${p}`;
    }
    return (0, e._)`${s}${c}${(0, e.getProperty)(k)}`;
  }
  J.schemaRefOrVal = a;
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
    return (C, N, T, O) => {
      const z = T === void 0 ? N : T instanceof e.Name ? (N instanceof e.Name ? s(C, N, T) : c(C, N, T), T) : N instanceof e.Name ? (c(C, T, N), N) : p(N, T);
      return O === e.Name && !(z instanceof e.Name) ? k(C, z) : z;
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
var Qe = {}, Gr;
function _e() {
  if (Gr) return Qe;
  Gr = 1, Object.defineProperty(Qe, "__esModule", { value: !0 });
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
  return Qe.default = t, Qe;
}
var Jr;
function Qt() {
  return Jr || (Jr = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
    const t = /* @__PURE__ */ G(), n = /* @__PURE__ */ X(), o = /* @__PURE__ */ _e();
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
      f($, p), s || c || g(h, o.default.vErrors);
    }
    e.reportExtraError = r;
    function i(u, m) {
      u.assign(o.default.errors, m), u.if((0, t._)`${o.default.vErrors} !== null`, () => u.if(m, () => u.assign((0, t._)`${o.default.vErrors}.length`, m), () => u.assign(o.default.vErrors, null)));
    }
    e.resetErrorsCount = i;
    function a({ gen: u, keyword: m, schemaValue: l, data: h, errsCount: $, it: s }) {
      if ($ === void 0)
        throw new Error("ajv implementation error");
      const c = u.name("err");
      u.forRange("i", $, o.default.errors, (p) => {
        u.const(c, (0, t._)`${o.default.vErrors}[${p}]`), u.if((0, t._)`${c}.instancePath === undefined`, () => u.assign((0, t._)`${c}.instancePath`, (0, t.strConcat)(o.default.instancePath, s.errorPath))), u.assign((0, t._)`${c}.schemaPath`, (0, t.str)`${s.errSchemaPath}/${m}`), s.opts.verbose && (u.assign((0, t._)`${c}.schema`, l), u.assign((0, t._)`${c}.data`, h));
      });
    }
    e.extendErrors = a;
    function f(u, m) {
      const l = u.const("err", m);
      u.if((0, t._)`${o.default.vErrors} === null`, () => u.assign(o.default.vErrors, (0, t._)`[${l}]`), (0, t._)`${o.default.vErrors}.push(${l})`), u.code((0, t._)`${o.default.errors}++`);
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
      const l = m ? (0, t.str)`${u}${(0, n.getErrorPath)(m, n.Type.Str)}` : u;
      return [o.default.instancePath, (0, t.strConcat)(o.default.instancePath, l)];
    }
    function E({ keyword: u, it: { errSchemaPath: m } }, { schemaPath: l, parentSchema: h }) {
      let $ = h ? m : (0, t.str)`${m}/${u}`;
      return l && ($ = (0, t.str)`${$}${(0, n.getErrorPath)(l, n.Type.Str)}`), [v.schemaPath, $];
    }
    function _(u, { params: m, message: l }, h) {
      const { keyword: $, data: s, schemaValue: c, it: p } = u, { opts: k, propertyName: C, topSchemaRef: N, schemaPath: T } = p;
      h.push([v.keyword, $], [v.params, typeof m == "function" ? m(u) : m || (0, t._)`{}`]), k.messages && h.push([v.message, typeof l == "function" ? l(u) : l]), k.verbose && h.push([v.schema, c], [v.parentSchema, (0, t._)`${N}${T}`], [o.default.data, s]), C && h.push([v.propertyName, C]);
    }
  })(cr)), cr;
}
var Wr;
function is() {
  if (Wr) return Ne;
  Wr = 1, Object.defineProperty(Ne, "__esModule", { value: !0 }), Ne.boolOrEmptySchema = Ne.topBoolOrEmptySchema = void 0;
  const e = /* @__PURE__ */ Qt(), t = /* @__PURE__ */ G(), n = /* @__PURE__ */ _e(), o = {
    message: "boolean schema is false"
  };
  function d(a) {
    const { gen: f, schema: g, validateName: v } = a;
    g === !1 ? i(a, !1) : typeof g == "object" && g.$async === !0 ? f.return(n.default.data) : (f.assign((0, t._)`${v}.errors`, null), f.return(!0));
  }
  Ne.topBoolOrEmptySchema = d;
  function r(a, f) {
    const { gen: g, schema: v } = a;
    v === !1 ? (g.var(f, !1), i(a)) : g.var(f, !0);
  }
  Ne.boolOrEmptySchema = r;
  function i(a, f) {
    const { gen: g, data: v } = a, w = {
      gen: g,
      keyword: "false schema",
      data: v,
      schema: !1,
      schemaCode: !1,
      schemaValue: !1,
      params: {},
      it: a
    };
    (0, e.reportError)(w, o, void 0, f);
  }
  return Ne;
}
var ie = {}, Ae = {}, Yr;
function Co() {
  if (Yr) return Ae;
  Yr = 1, Object.defineProperty(Ae, "__esModule", { value: !0 }), Ae.getRules = Ae.isJSONType = void 0;
  const e = ["string", "number", "integer", "boolean", "null", "object", "array"], t = new Set(e);
  function n(d) {
    return typeof d == "string" && t.has(d);
  }
  Ae.isJSONType = n;
  function o() {
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
  return Ae.getRules = o, Ae;
}
var Ee = {}, Xr;
function Ro() {
  if (Xr) return Ee;
  Xr = 1, Object.defineProperty(Ee, "__esModule", { value: !0 }), Ee.shouldUseRule = Ee.shouldUseGroup = Ee.schemaHasRulesForType = void 0;
  function e({ schema: o, self: d }, r) {
    const i = d.RULES.types[r];
    return i && i !== !0 && t(o, i);
  }
  Ee.schemaHasRulesForType = e;
  function t(o, d) {
    return d.rules.some((r) => n(o, r));
  }
  Ee.shouldUseGroup = t;
  function n(o, d) {
    var r;
    return o[d.keyword] !== void 0 || ((r = d.definition.implements) === null || r === void 0 ? void 0 : r.some((i) => o[i] !== void 0));
  }
  return Ee.shouldUseRule = n, Ee;
}
var Zr;
function Xt() {
  if (Zr) return ie;
  Zr = 1, Object.defineProperty(ie, "__esModule", { value: !0 }), ie.reportTypeError = ie.checkDataTypes = ie.checkDataType = ie.coerceAndCheckDataType = ie.getJSONTypes = ie.getSchemaTypes = ie.DataType = void 0;
  const e = /* @__PURE__ */ Co(), t = /* @__PURE__ */ Ro(), n = /* @__PURE__ */ Qt(), o = /* @__PURE__ */ G(), d = /* @__PURE__ */ X();
  var r;
  (function(l) {
    l[l.Correct = 0] = "Correct", l[l.Wrong = 1] = "Wrong";
  })(r || (ie.DataType = r = {}));
  function i(l) {
    const h = a(l.type);
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
  ie.getSchemaTypes = i;
  function a(l) {
    const h = Array.isArray(l) ? l : l ? [l] : [];
    if (h.every(e.isJSONType))
      return h;
    throw new Error("type must be JSONType or JSONType[]: " + h.join(","));
  }
  ie.getJSONTypes = a;
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
  ie.coerceAndCheckDataType = f;
  const g = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
  function v(l, h) {
    return h ? l.filter(($) => g.has($) || h === "array" && $ === "array") : [];
  }
  function w(l, h, $) {
    const { gen: s, data: c, opts: p } = l, k = s.let("dataType", (0, o._)`typeof ${c}`), C = s.let("coerced", (0, o._)`undefined`);
    p.coerceTypes === "array" && s.if((0, o._)`${k} == 'object' && Array.isArray(${c}) && ${c}.length == 1`, () => s.assign(c, (0, o._)`${c}[0]`).assign(k, (0, o._)`typeof ${c}`).if(E(h, c, p.strictNumbers), () => s.assign(C, c))), s.if((0, o._)`${C} !== undefined`);
    for (const T of $)
      (g.has(T) || T === "array" && p.coerceTypes === "array") && N(T);
    s.else(), u(l), s.endIf(), s.if((0, o._)`${C} !== undefined`, () => {
      s.assign(c, C), S(l, C);
    });
    function N(T) {
      switch (T) {
        case "string":
          s.elseIf((0, o._)`${k} == "number" || ${k} == "boolean"`).assign(C, (0, o._)`"" + ${c}`).elseIf((0, o._)`${c} === null`).assign(C, (0, o._)`""`);
          return;
        case "number":
          s.elseIf((0, o._)`${k} == "boolean" || ${c} === null
              || (${k} == "string" && ${c} && ${c} == +${c})`).assign(C, (0, o._)`+${c}`);
          return;
        case "integer":
          s.elseIf((0, o._)`${k} === "boolean" || ${c} === null
              || (${k} === "string" && ${c} && ${c} == +${c} && !(${c} % 1))`).assign(C, (0, o._)`+${c}`);
          return;
        case "boolean":
          s.elseIf((0, o._)`${c} === "false" || ${c} === 0 || ${c} === null`).assign(C, !1).elseIf((0, o._)`${c} === "true" || ${c} === 1`).assign(C, !0);
          return;
        case "null":
          s.elseIf((0, o._)`${c} === "" || ${c} === 0 || ${c} === false`), s.assign(C, null);
          return;
        case "array":
          s.elseIf((0, o._)`${k} === "string" || ${k} === "number"
              || ${k} === "boolean" || ${c} === null`).assign(C, (0, o._)`[${c}]`);
      }
    }
  }
  function S({ gen: l, parentData: h, parentDataProperty: $ }, s) {
    l.if((0, o._)`${h} !== undefined`, () => l.assign((0, o._)`${h}[${$}]`, s));
  }
  function b(l, h, $, s = r.Correct) {
    const c = s === r.Correct ? o.operators.EQ : o.operators.NEQ;
    let p;
    switch (l) {
      case "null":
        return (0, o._)`${h} ${c} null`;
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
        return (0, o._)`typeof ${h} ${c} ${l}`;
    }
    return s === r.Correct ? p : (0, o.not)(p);
    function k(C = o.nil) {
      return (0, o.and)((0, o._)`typeof ${h} == "number"`, C, $ ? (0, o._)`isFinite(${h})` : o.nil);
    }
  }
  ie.checkDataType = b;
  function E(l, h, $, s) {
    if (l.length === 1)
      return b(l[0], h, $, s);
    let c;
    const p = (0, d.toHash)(l);
    if (p.array && p.object) {
      const k = (0, o._)`typeof ${h} != "object"`;
      c = p.null ? k : (0, o._)`!${h} || ${k}`, delete p.null, delete p.array, delete p.object;
    } else
      c = o.nil;
    p.number && delete p.integer;
    for (const k in p)
      c = (0, o.and)(c, b(k, h, $, s));
    return c;
  }
  ie.checkDataTypes = E;
  const _ = {
    message: ({ schema: l }) => `must be ${l}`,
    params: ({ schema: l, schemaValue: h }) => typeof l == "string" ? (0, o._)`{type: ${l}}` : (0, o._)`{type: ${h}}`
  };
  function u(l) {
    const h = m(l);
    (0, n.reportError)(h, _);
  }
  ie.reportTypeError = u;
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
  return ie;
}
var He = {}, Qr;
function as() {
  if (Qr) return He;
  Qr = 1, Object.defineProperty(He, "__esModule", { value: !0 }), He.assignDefaults = void 0;
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X();
  function n(d, r) {
    const { properties: i, items: a } = d.schema;
    if (r === "object" && i)
      for (const f in i)
        o(d, f, i[f].default);
    else r === "array" && Array.isArray(a) && a.forEach((f, g) => o(d, g, f.default));
  }
  He.assignDefaults = n;
  function o(d, r, i) {
    const { gen: a, compositeRule: f, data: g, opts: v } = d;
    if (i === void 0)
      return;
    const w = (0, e._)`${g}${(0, e.getProperty)(r)}`;
    if (f) {
      (0, t.checkStrictMode)(d, `default is ignored for: ${w}`);
      return;
    }
    let S = (0, e._)`${w} === undefined`;
    v.useDefaults === "empty" && (S = (0, e._)`${S} || ${w} === null || ${w} === ""`), a.if(S, (0, e._)`${w} = ${(0, e.stringify)(i)}`);
  }
  return He;
}
var ge = {}, re = {}, en;
function be() {
  if (en) return re;
  en = 1, Object.defineProperty(re, "__esModule", { value: !0 }), re.validateUnion = re.validateArray = re.usePattern = re.callValidateCode = re.schemaProperties = re.allSchemaProperties = re.noPropertyInData = re.propertyInData = re.isOwnProperty = re.hasPropFunc = re.reportMissingProp = re.checkMissingProp = re.checkReportMissingProp = void 0;
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), n = /* @__PURE__ */ _e(), o = /* @__PURE__ */ X();
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
  function i(l, h) {
    l.setParams({ missingProperty: h }, !0), l.error();
  }
  re.reportMissingProp = i;
  function a(l) {
    return l.scopeValue("func", {
      // eslint-disable-next-line @typescript-eslint/unbound-method
      ref: Object.prototype.hasOwnProperty,
      code: (0, e._)`Object.prototype.hasOwnProperty`
    });
  }
  re.hasPropFunc = a;
  function f(l, h, $) {
    return (0, e._)`${a(l)}.call(${h}, ${$})`;
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
  function b({ schemaCode: l, data: h, it: { gen: $, topSchemaRef: s, schemaPath: c, errorPath: p }, it: k }, C, N, T) {
    const O = T ? (0, e._)`${l}, ${h}, ${s}${c}` : h, z = [
      [n.default.instancePath, (0, e.strConcat)(n.default.instancePath, p)],
      [n.default.parentData, k.parentData],
      [n.default.parentDataProperty, k.parentDataProperty],
      [n.default.rootData, n.default.rootData]
    ];
    k.opts.dynamicRef && z.push([n.default.dynamicAnchors, n.default.dynamicAnchors]);
    const L = (0, e._)`${O}, ${$.object(...z)}`;
    return N !== e.nil ? (0, e._)`${C}.call(${N}, ${L})` : (0, e._)`${C}(${L})`;
  }
  re.callValidateCode = b;
  const E = (0, e._)`new RegExp`;
  function _({ gen: l, it: { opts: h } }, $) {
    const s = h.unicodeRegExp ? "u" : "", { regExp: c } = h.code, p = c($, s);
    return l.scopeValue("pattern", {
      key: p.toString(),
      ref: p,
      code: (0, e._)`${c.code === "new RegExp" ? E : (0, o.useFunc)(l, c)}(${$}, ${s})`
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
      h.forRange("i", 0, N, (T) => {
        l.subschema({
          keyword: s,
          dataProp: T,
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
    h.block(() => $.forEach((N, T) => {
      const O = l.subschema({
        keyword: s,
        schemaProp: T,
        compositeRule: !0
      }, C);
      h.assign(k, (0, e._)`${k} || ${C}`), l.mergeValidEvaluated(O, C) || h.if((0, e.not)(k));
    })), l.result(k, () => l.reset(), () => l.error(!0));
  }
  return re.validateUnion = m, re;
}
var tn;
function cs() {
  if (tn) return ge;
  tn = 1, Object.defineProperty(ge, "__esModule", { value: !0 }), ge.validateKeywordUsage = ge.validSchemaType = ge.funcKeywordCode = ge.macroKeywordCode = void 0;
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ _e(), n = /* @__PURE__ */ be(), o = /* @__PURE__ */ Qt();
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
        T(), b.modifying && i(S), O(() => S.error());
      else {
        const z = b.async ? C() : N();
        b.modifying && i(S), O(() => a(S, z));
      }
    }
    function C() {
      const z = _.let("ruleErrs", null);
      return _.try(() => T((0, e._)`await `), (L) => _.assign(p, !1).if((0, e._)`${L} instanceof ${$.ValidationError}`, () => _.assign(z, (0, e._)`${L}.errors`), () => _.throw(L))), z;
    }
    function N() {
      const z = (0, e._)`${c}.errors`;
      return _.assign(z, null), T(e.nil), z;
    }
    function T(z = b.async ? (0, e._)`await ` : e.nil) {
      const L = $.opts.passContext ? t.default.this : t.default.self, Q = !("compile" in b && !h || b.schema === !1);
      _.assign(p, (0, e._)`${z}${(0, n.callValidateCode)(S, c, L, Q)}`, b.modifying);
    }
    function O(z) {
      var L;
      _.if((0, e.not)((L = b.valid) !== null && L !== void 0 ? L : p), z);
    }
  }
  ge.funcKeywordCode = r;
  function i(S) {
    const { gen: b, data: E, it: _ } = S;
    b.if(_.parentData, () => b.assign(E, (0, e._)`${_.parentData}[${_.parentDataProperty}]`));
  }
  function a(S, b) {
    const { gen: E } = S;
    E.if((0, e._)`Array.isArray(${b})`, () => {
      E.assign(t.default.vErrors, (0, e._)`${t.default.vErrors} === null ? ${b} : ${t.default.vErrors}.concat(${b})`).assign(t.default.errors, (0, e._)`${t.default.vErrors}.length`), (0, o.extendErrors)(S);
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
var Pe = {}, rn;
function ls() {
  if (rn) return Pe;
  rn = 1, Object.defineProperty(Pe, "__esModule", { value: !0 }), Pe.extendSubschemaMode = Pe.extendSubschemaData = Pe.getSubschema = void 0;
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X();
  function n(r, { keyword: i, schemaProp: a, schema: f, schemaPath: g, errSchemaPath: v, topSchemaRef: w }) {
    if (i !== void 0 && f !== void 0)
      throw new Error('both "keyword" and "schema" passed, only one allowed');
    if (i !== void 0) {
      const S = r.schema[i];
      return a === void 0 ? {
        schema: S,
        schemaPath: (0, e._)`${r.schemaPath}${(0, e.getProperty)(i)}`,
        errSchemaPath: `${r.errSchemaPath}/${i}`
      } : {
        schema: S[a],
        schemaPath: (0, e._)`${r.schemaPath}${(0, e.getProperty)(i)}${(0, e.getProperty)(a)}`,
        errSchemaPath: `${r.errSchemaPath}/${i}/${(0, t.escapeFragment)(a)}`
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
  Pe.getSubschema = n;
  function o(r, i, { dataProp: a, dataPropType: f, data: g, dataTypes: v, propertyName: w }) {
    if (g !== void 0 && a !== void 0)
      throw new Error('both "data" and "dataProp" passed, only one allowed');
    const { gen: S } = i;
    if (a !== void 0) {
      const { errorPath: E, dataPathArr: _, opts: u } = i, m = S.let("data", (0, e._)`${i.data}${(0, e.getProperty)(a)}`, !0);
      b(m), r.errorPath = (0, e.str)`${E}${(0, t.getErrorPath)(a, f, u.jsPropertySyntax)}`, r.parentDataProperty = (0, e._)`${a}`, r.dataPathArr = [..._, r.parentDataProperty];
    }
    if (g !== void 0) {
      const E = g instanceof e.Name ? g : S.let("data", g, !0);
      b(E), w !== void 0 && (r.propertyName = w);
    }
    v && (r.dataTypes = v);
    function b(E) {
      r.data = E, r.dataLevel = i.dataLevel + 1, r.dataTypes = [], i.definedProperties = /* @__PURE__ */ new Set(), r.parentData = i.data, r.dataNames = [...i.dataNames, E];
    }
  }
  Pe.extendSubschemaData = o;
  function d(r, { jtdDiscriminator: i, jtdMetadata: a, compositeRule: f, createErrors: g, allErrors: v }) {
    f !== void 0 && (r.compositeRule = f), g !== void 0 && (r.createErrors = g), v !== void 0 && (r.allErrors = v), r.jtdDiscriminator = i, r.jtdMetadata = a;
  }
  return Pe.extendSubschemaMode = d, Pe;
}
var ce = {}, fr, nn;
function No() {
  return nn || (nn = 1, fr = function e(t, n) {
    if (t === n) return !0;
    if (t && n && typeof t == "object" && typeof n == "object") {
      if (t.constructor !== n.constructor) return !1;
      var o, d, r;
      if (Array.isArray(t)) {
        if (o = t.length, o != n.length) return !1;
        for (d = o; d-- !== 0; )
          if (!e(t[d], n[d])) return !1;
        return !0;
      }
      if (t.constructor === RegExp) return t.source === n.source && t.flags === n.flags;
      if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === n.valueOf();
      if (t.toString !== Object.prototype.toString) return t.toString() === n.toString();
      if (r = Object.keys(t), o = r.length, o !== Object.keys(n).length) return !1;
      for (d = o; d-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(n, r[d])) return !1;
      for (d = o; d-- !== 0; ) {
        var i = r[d];
        if (!e(t[i], n[i])) return !1;
      }
      return !0;
    }
    return t !== t && n !== n;
  }), fr;
}
var pr = { exports: {} }, on;
function ds() {
  if (on) return pr.exports;
  on = 1;
  var e = pr.exports = function(o, d, r) {
    typeof d == "function" && (r = d, d = {}), r = d.cb || r;
    var i = typeof r == "function" ? r : r.pre || function() {
    }, a = r.post || function() {
    };
    t(d, i, a, o, "", o);
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
  function t(o, d, r, i, a, f, g, v, w, S) {
    if (i && typeof i == "object" && !Array.isArray(i)) {
      d(i, a, f, g, v, w, S);
      for (var b in i) {
        var E = i[b];
        if (Array.isArray(E)) {
          if (b in e.arrayKeywords)
            for (var _ = 0; _ < E.length; _++)
              t(o, d, r, E[_], a + "/" + b + "/" + _, f, a, b, i, _);
        } else if (b in e.propsKeywords) {
          if (E && typeof E == "object")
            for (var u in E)
              t(o, d, r, E[u], a + "/" + b + "/" + n(u), f, a, b, i, u);
        } else (b in e.keywords || o.allKeys && !(b in e.skipKeywords)) && t(o, d, r, E, a + "/" + b, f, a, b, i);
      }
      r(i, a, f, g, v, w, S);
    }
  }
  function n(o) {
    return o.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  return pr.exports;
}
var sn;
function er() {
  if (sn) return ce;
  sn = 1, Object.defineProperty(ce, "__esModule", { value: !0 }), ce.getSchemaRefs = ce.resolveUrl = ce.normalizeId = ce._getFullPath = ce.getFullPath = ce.inlineRef = void 0;
  const e = /* @__PURE__ */ X(), t = No(), n = ds(), o = /* @__PURE__ */ new Set([
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
    return typeof _ == "boolean" ? !0 : u === !0 ? !i(_) : u ? a(_) <= u : !1;
  }
  ce.inlineRef = d;
  const r = /* @__PURE__ */ new Set([
    "$ref",
    "$recursiveRef",
    "$recursiveAnchor",
    "$dynamicRef",
    "$dynamicAnchor"
  ]);
  function i(_) {
    for (const u in _) {
      if (r.has(u))
        return !0;
      const m = _[u];
      if (Array.isArray(m) && m.some(i) || typeof m == "object" && i(m))
        return !0;
    }
    return !1;
  }
  function a(_) {
    let u = 0;
    for (const m in _) {
      if (m === "$ref")
        return 1 / 0;
      if (u++, !o.has(m) && (typeof _[m] == "object" && (0, e.eachItem)(_[m], (l) => u += a(l)), u === 1 / 0))
        return 1 / 0;
    }
    return u;
  }
  function f(_, u = "", m) {
    m !== !1 && (u = w(u));
    const l = _.parse(u);
    return g(_, l);
  }
  ce.getFullPath = f;
  function g(_, u) {
    return _.serialize(u).split("#")[0] + "#";
  }
  ce._getFullPath = g;
  const v = /#\/?$/;
  function w(_) {
    return _ ? _.replace(v, "") : "";
  }
  ce.normalizeId = w;
  function S(_, u, m) {
    return m = w(m), _.resolve(u, m);
  }
  ce.resolveUrl = S;
  const b = /^[a-z_][-a-z0-9._]*$/i;
  function E(_, u) {
    if (typeof _ == "boolean")
      return {};
    const { schemaId: m, uriResolver: l } = this.opts, h = w(_[m] || u), $ = { "": h }, s = f(l, h, !1), c = {}, p = /* @__PURE__ */ new Set();
    return n(_, { allKeys: !0 }, (N, T, O, z) => {
      if (z === void 0)
        return;
      const L = s + T;
      let Q = $[z];
      typeof N[m] == "string" && (Q = te.call(this, N[m])), fe.call(this, N.$anchor), fe.call(this, N.$dynamicAnchor), $[T] = Q;
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
    function k(N, T, O) {
      if (T !== void 0 && !t(N, T))
        throw C(O);
    }
    function C(N) {
      return new Error(`reference "${N}" resolves to more than one schema`);
    }
  }
  return ce.getSchemaRefs = E, ce;
}
var an;
function tr() {
  if (an) return Se;
  an = 1, Object.defineProperty(Se, "__esModule", { value: !0 }), Se.getData = Se.KeywordCxt = Se.validateFunctionCode = void 0;
  const e = /* @__PURE__ */ is(), t = /* @__PURE__ */ Xt(), n = /* @__PURE__ */ Ro(), o = /* @__PURE__ */ Xt(), d = /* @__PURE__ */ as(), r = /* @__PURE__ */ cs(), i = /* @__PURE__ */ ls(), a = /* @__PURE__ */ G(), f = /* @__PURE__ */ _e(), g = /* @__PURE__ */ er(), v = /* @__PURE__ */ X(), w = /* @__PURE__ */ Qt();
  function S(R) {
    if (s(R) && (p(R), $(R))) {
      u(R);
      return;
    }
    b(R, () => (0, e.topBoolOrEmptySchema)(R));
  }
  Se.validateFunctionCode = S;
  function b({ gen: R, validateName: j, schema: q, schemaEnv: B, opts: K }, W) {
    K.code.es5 ? R.func(j, (0, a._)`${f.default.data}, ${f.default.valCxt}`, B.$async, () => {
      R.code((0, a._)`"use strict"; ${l(q, K)}`), _(R, K), R.code(W);
    }) : R.func(j, (0, a._)`${f.default.data}, ${E(K)}`, B.$async, () => R.code(l(q, K)).code(W));
  }
  function E(R) {
    return (0, a._)`{${f.default.instancePath}="", ${f.default.parentData}, ${f.default.parentDataProperty}, ${f.default.rootData}=${f.default.data}${R.dynamicRef ? (0, a._)`, ${f.default.dynamicAnchors}={}` : a.nil}}={}`;
  }
  function _(R, j) {
    R.if(f.default.valCxt, () => {
      R.var(f.default.instancePath, (0, a._)`${f.default.valCxt}.${f.default.instancePath}`), R.var(f.default.parentData, (0, a._)`${f.default.valCxt}.${f.default.parentData}`), R.var(f.default.parentDataProperty, (0, a._)`${f.default.valCxt}.${f.default.parentDataProperty}`), R.var(f.default.rootData, (0, a._)`${f.default.valCxt}.${f.default.rootData}`), j.dynamicRef && R.var(f.default.dynamicAnchors, (0, a._)`${f.default.valCxt}.${f.default.dynamicAnchors}`);
    }, () => {
      R.var(f.default.instancePath, (0, a._)`""`), R.var(f.default.parentData, (0, a._)`undefined`), R.var(f.default.parentDataProperty, (0, a._)`undefined`), R.var(f.default.rootData, f.default.data), j.dynamicRef && R.var(f.default.dynamicAnchors, (0, a._)`{}`);
    });
  }
  function u(R) {
    const { schema: j, opts: q, gen: B } = R;
    b(R, () => {
      q.$comment && j.$comment && z(R), N(R), B.let(f.default.vErrors, null), B.let(f.default.errors, 0), q.unevaluated && m(R), k(R), L(R);
    });
  }
  function m(R) {
    const { gen: j, validateName: q } = R;
    R.evaluated = j.const("evaluated", (0, a._)`${q}.evaluated`), j.if((0, a._)`${R.evaluated}.dynamicProps`, () => j.assign((0, a._)`${R.evaluated}.props`, (0, a._)`undefined`)), j.if((0, a._)`${R.evaluated}.dynamicItems`, () => j.assign((0, a._)`${R.evaluated}.items`, (0, a._)`undefined`));
  }
  function l(R, j) {
    const q = typeof R == "object" && R[j.schemaId];
    return q && (j.code.source || j.code.process) ? (0, a._)`/*# sourceURL=${q} */` : a.nil;
  }
  function h(R, j) {
    if (s(R) && (p(R), $(R))) {
      c(R, j);
      return;
    }
    (0, e.boolOrEmptySchema)(R, j);
  }
  function $({ schema: R, self: j }) {
    if (typeof R == "boolean")
      return !R;
    for (const q in R)
      if (j.RULES.all[q])
        return !0;
    return !1;
  }
  function s(R) {
    return typeof R.schema != "boolean";
  }
  function c(R, j) {
    const { schema: q, gen: B, opts: K } = R;
    K.$comment && q.$comment && z(R), T(R), O(R);
    const W = B.const("_errs", f.default.errors);
    k(R, W), B.var(j, (0, a._)`${W} === ${f.default.errors}`);
  }
  function p(R) {
    (0, v.checkUnknownRules)(R), C(R);
  }
  function k(R, j) {
    if (R.opts.jtd)
      return te(R, [], !1, j);
    const q = (0, t.getSchemaTypes)(R.schema), B = (0, t.coerceAndCheckDataType)(R, q);
    te(R, q, !B, j);
  }
  function C(R) {
    const { schema: j, errSchemaPath: q, opts: B, self: K } = R;
    j.$ref && B.ignoreKeywordsWithRef && (0, v.schemaHasRulesButRef)(j, K.RULES) && K.logger.warn(`$ref: keywords ignored in schema at path "${q}"`);
  }
  function N(R) {
    const { schema: j, opts: q } = R;
    j.default !== void 0 && q.useDefaults && q.strictSchema && (0, v.checkStrictMode)(R, "default is ignored in the schema root");
  }
  function T(R) {
    const j = R.schema[R.opts.schemaId];
    j && (R.baseId = (0, g.resolveUrl)(R.opts.uriResolver, R.baseId, j));
  }
  function O(R) {
    if (R.schema.$async && !R.schemaEnv.$async)
      throw new Error("async schema in sync schema");
  }
  function z({ gen: R, schemaEnv: j, schema: q, errSchemaPath: B, opts: K }) {
    const W = q.$comment;
    if (K.$comment === !0)
      R.code((0, a._)`${f.default.self}.logger.log(${W})`);
    else if (typeof K.$comment == "function") {
      const oe = (0, a.str)`${B}/$comment`, ye = R.scopeValue("root", { ref: j.root });
      R.code((0, a._)`${f.default.self}.opts.$comment(${W}, ${oe}, ${ye}.schema)`);
    }
  }
  function L(R) {
    const { gen: j, schemaEnv: q, validateName: B, ValidationError: K, opts: W } = R;
    q.$async ? j.if((0, a._)`${f.default.errors} === 0`, () => j.return(f.default.data), () => j.throw((0, a._)`new ${K}(${f.default.vErrors})`)) : (j.assign((0, a._)`${B}.errors`, f.default.vErrors), W.unevaluated && Q(R), j.return((0, a._)`${f.default.errors} === 0`));
  }
  function Q({ gen: R, evaluated: j, props: q, items: B }) {
    q instanceof a.Name && R.assign((0, a._)`${j}.props`, q), B instanceof a.Name && R.assign((0, a._)`${j}.items`, B);
  }
  function te(R, j, q, B) {
    const { gen: K, schema: W, data: oe, allErrors: ye, opts: le, self: de } = R, { RULES: se } = de;
    if (W.$ref && (le.ignoreKeywordsWithRef || !(0, v.schemaHasRulesButRef)(W, se))) {
      K.block(() => U(R, "$ref", se.all.$ref.definition));
      return;
    }
    le.jtd || Y(R, j), K.block(() => {
      for (const pe of se.rules)
        Ie(pe);
      Ie(se.post);
    });
    function Ie(pe) {
      (0, n.shouldUseGroup)(W, pe) && (pe.type ? (K.if((0, o.checkDataType)(pe.type, oe, le.strictNumbers)), fe(R, pe), j.length === 1 && j[0] === pe.type && q && (K.else(), (0, o.reportTypeError)(R)), K.endIf()) : fe(R, pe), ye || K.if((0, a._)`${f.default.errors} === ${B || 0}`));
    }
  }
  function fe(R, j) {
    const { gen: q, schema: B, opts: { useDefaults: K } } = R;
    K && (0, d.assignDefaults)(R, j.type), q.block(() => {
      for (const W of j.rules)
        (0, n.shouldUseRule)(B, W) && U(R, W.keyword, W.definition, j.type);
    });
  }
  function Y(R, j) {
    R.schemaEnv.meta || !R.opts.strictTypes || (me(R, j), R.opts.allowUnionTypes || V(R, j), A(R, R.dataTypes));
  }
  function me(R, j) {
    if (j.length) {
      if (!R.dataTypes.length) {
        R.dataTypes = j;
        return;
      }
      j.forEach((q) => {
        x(R.dataTypes, q) || P(R, `type "${q}" not allowed by context "${R.dataTypes.join(",")}"`);
      }), y(R, j);
    }
  }
  function V(R, j) {
    j.length > 1 && !(j.length === 2 && j.includes("null")) && P(R, "use allowUnionTypes to allow union type keyword");
  }
  function A(R, j) {
    const q = R.self.RULES.all;
    for (const B in q) {
      const K = q[B];
      if (typeof K == "object" && (0, n.shouldUseRule)(R.schema, K)) {
        const { type: W } = K.definition;
        W.length && !W.some((oe) => D(j, oe)) && P(R, `missing type "${W.join(",")}" for keyword "${B}"`);
      }
    }
  }
  function D(R, j) {
    return R.includes(j) || j === "number" && R.includes("integer");
  }
  function x(R, j) {
    return R.includes(j) || j === "integer" && R.includes("number");
  }
  function y(R, j) {
    const q = [];
    for (const B of R.dataTypes)
      x(j, B) ? q.push(B) : j.includes("integer") && B === "number" && q.push("integer");
    R.dataTypes = q;
  }
  function P(R, j) {
    const q = R.schemaEnv.baseId + R.errSchemaPath;
    j += ` at "${q}" (strictTypes)`, (0, v.checkStrictMode)(R, j, R.opts.strictTypes);
  }
  class M {
    constructor(j, q, B) {
      if ((0, r.validateKeywordUsage)(j, q, B), this.gen = j.gen, this.allErrors = j.allErrors, this.keyword = B, this.data = j.data, this.schema = j.schema[B], this.$data = q.$data && j.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, v.schemaRefOrVal)(j, this.schema, B, this.$data), this.schemaType = q.schemaType, this.parentSchema = j.schema, this.params = {}, this.it = j, this.def = q, this.$data)
        this.schemaCode = j.gen.const("vSchema", Z(this.$data, j));
      else if (this.schemaCode = this.schemaValue, !(0, r.validSchemaType)(this.schema, q.schemaType, q.allowUndefined))
        throw new Error(`${B} value must be ${JSON.stringify(q.schemaType)}`);
      ("code" in q ? q.trackErrors : q.errors !== !1) && (this.errsCount = j.gen.const("_errs", f.default.errors));
    }
    result(j, q, B) {
      this.failResult((0, a.not)(j), q, B);
    }
    failResult(j, q, B) {
      this.gen.if(j), B ? B() : this.error(), q ? (this.gen.else(), q(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    pass(j, q) {
      this.failResult((0, a.not)(j), void 0, q);
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
      const { schemaCode: q } = this;
      this.fail((0, a._)`${q} !== undefined && (${(0, a.or)(this.invalid$data(), j)})`);
    }
    error(j, q, B) {
      if (q) {
        this.setParams(q), this._error(j, B), this.setParams({});
        return;
      }
      this._error(j, B);
    }
    _error(j, q) {
      (j ? w.reportExtraError : w.reportError)(this, this.def.error, q);
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
    setParams(j, q) {
      q ? Object.assign(this.params, j) : this.params = j;
    }
    block$data(j, q, B = a.nil) {
      this.gen.block(() => {
        this.check$data(j, B), q();
      });
    }
    check$data(j = a.nil, q = a.nil) {
      if (!this.$data)
        return;
      const { gen: B, schemaCode: K, schemaType: W, def: oe } = this;
      B.if((0, a.or)((0, a._)`${K} === undefined`, q)), j !== a.nil && B.assign(j, !0), (W.length || oe.validateSchema) && (B.elseIf(this.invalid$data()), this.$dataError(), j !== a.nil && B.assign(j, !1)), B.else();
    }
    invalid$data() {
      const { gen: j, schemaCode: q, schemaType: B, def: K, it: W } = this;
      return (0, a.or)(oe(), ye());
      function oe() {
        if (B.length) {
          if (!(q instanceof a.Name))
            throw new Error("ajv implementation error");
          const le = Array.isArray(B) ? B : [B];
          return (0, a._)`${(0, o.checkDataTypes)(le, q, W.opts.strictNumbers, o.DataType.Wrong)}`;
        }
        return a.nil;
      }
      function ye() {
        if (K.validateSchema) {
          const le = j.scopeValue("validate$data", { ref: K.validateSchema });
          return (0, a._)`!${le}(${q})`;
        }
        return a.nil;
      }
    }
    subschema(j, q) {
      const B = (0, i.getSubschema)(this.it, j);
      (0, i.extendSubschemaData)(B, this.it, j), (0, i.extendSubschemaMode)(B, j);
      const K = { ...this.it, ...B, items: void 0, props: void 0 };
      return h(K, q), K;
    }
    mergeEvaluated(j, q) {
      const { it: B, gen: K } = this;
      B.opts.unevaluated && (B.props !== !0 && j.props !== void 0 && (B.props = v.mergeEvaluated.props(K, j.props, B.props, q)), B.items !== !0 && j.items !== void 0 && (B.items = v.mergeEvaluated.items(K, j.items, B.items, q)));
    }
    mergeValidEvaluated(j, q) {
      const { it: B, gen: K } = this;
      if (B.opts.unevaluated && (B.props !== !0 || B.items !== !0))
        return K.if(q, () => this.mergeEvaluated(j, a.Name)), !0;
    }
  }
  Se.KeywordCxt = M;
  function U(R, j, q, B) {
    const K = new M(R, q, j);
    "code" in q ? q.code(K, B) : K.$data && q.validate ? (0, r.funcKeywordCode)(K, q) : "macro" in q ? (0, r.macroKeywordCode)(K, q) : (q.compile || q.validate) && (0, r.funcKeywordCode)(K, q);
  }
  const H = /^\/(?:[^~]|~0|~1)*$/, ee = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function Z(R, { dataLevel: j, dataNames: q, dataPathArr: B }) {
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
        if (se >= j)
          throw new Error(le("property/index", se));
        return B[j - se];
      }
      if (se > j)
        throw new Error(le("data", se));
      if (W = q[j - se], !K)
        return W;
    }
    let oe = W;
    const ye = K.split("/");
    for (const de of ye)
      de && (W = (0, a._)`${W}${(0, a.getProperty)((0, v.unescapeJsonPointer)(de))}`, oe = (0, a._)`${oe} && ${W}`);
    return oe;
    function le(de, se) {
      return `Cannot access ${de} ${se} levels up, current level is ${j}`;
    }
  }
  return Se.getData = Z, Se;
}
var et = {}, cn;
function Cr() {
  if (cn) return et;
  cn = 1, Object.defineProperty(et, "__esModule", { value: !0 });
  class e extends Error {
    constructor(n) {
      super("validation failed"), this.errors = n, this.ajv = this.validation = !0;
    }
  }
  return et.default = e, et;
}
var tt = {}, ln;
function rr() {
  if (ln) return tt;
  ln = 1, Object.defineProperty(tt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ er();
  class t extends Error {
    constructor(o, d, r, i) {
      super(i || `can't resolve reference ${r} from id ${d}`), this.missingRef = (0, e.resolveUrl)(o, d, r), this.missingSchema = (0, e.normalizeId)((0, e.getFullPath)(o, this.missingRef));
    }
  }
  return tt.default = t, tt;
}
var ue = {}, dn;
function nr() {
  if (dn) return ue;
  dn = 1, Object.defineProperty(ue, "__esModule", { value: !0 }), ue.resolveSchema = ue.getCompilingSchema = ue.resolveRef = ue.compileSchema = ue.SchemaEnv = void 0;
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ Cr(), n = /* @__PURE__ */ _e(), o = /* @__PURE__ */ er(), d = /* @__PURE__ */ X(), r = /* @__PURE__ */ tr();
  class i {
    constructor(m) {
      var l;
      this.refs = {}, this.dynamicAnchors = {};
      let h;
      typeof m.schema == "object" && (h = m.schema), this.schema = m.schema, this.schemaId = m.schemaId, this.root = m.root || this, this.baseId = (l = m.baseId) !== null && l !== void 0 ? l : (0, o.normalizeId)(h?.[m.schemaId || "$id"]), this.schemaPath = m.schemaPath, this.localRefs = m.localRefs, this.meta = m.meta, this.$async = h?.$async, this.refs = {};
    }
  }
  ue.SchemaEnv = i;
  function a(u) {
    const m = v.call(this, u);
    if (m)
      return m;
    const l = (0, o.getFullPath)(this.opts.uriResolver, u.root.baseId), { es5: h, lines: $ } = this.opts.code, { ownProperties: s } = this.opts, c = new e.CodeGen(this.scope, { es5: h, lines: $, ownProperties: s });
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
      data: n.default.data,
      parentData: n.default.parentData,
      parentDataProperty: n.default.parentDataProperty,
      dataNames: [n.default.data],
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
      const T = c.toString();
      N = `${c.scopeRefs(n.default.scope)}return ${T}`, this.opts.code.process && (N = this.opts.code.process(N, u));
      const z = new Function(`${n.default.self}`, `${n.default.scope}`, N)(this, this.scope.get());
      if (this.scope.value(k, { ref: z }), z.errors = null, z.schema = u.schema, z.schemaEnv = u, u.$async && (z.$async = !0), this.opts.code.source === !0 && (z.source = { validateName: k, validateCode: T, scopeValues: c._values }), this.opts.unevaluated) {
        const { props: L, items: Q } = C;
        z.evaluated = {
          props: L instanceof e.Name ? void 0 : L,
          items: Q instanceof e.Name ? void 0 : Q,
          dynamicProps: L instanceof e.Name,
          dynamicItems: Q instanceof e.Name
        }, z.source && (z.source.evaluated = (0, e.stringify)(z.evaluated));
      }
      return u.validate = z, u;
    } catch (T) {
      throw delete u.validate, delete u.validateName, N && this.logger.error("Error compiling schema, function code:", N), T;
    } finally {
      this._compilations.delete(u);
    }
  }
  ue.compileSchema = a;
  function f(u, m, l) {
    var h;
    l = (0, o.resolveUrl)(this.opts.uriResolver, m, l);
    const $ = u.refs[l];
    if ($)
      return $;
    let s = S.call(this, u, l);
    if (s === void 0) {
      const c = (h = u.localRefs) === null || h === void 0 ? void 0 : h[l], { schemaId: p } = this.opts;
      c && (s = new i({ schema: c, schemaId: p, root: u, baseId: m }));
    }
    if (s !== void 0)
      return u.refs[l] = g.call(this, s);
  }
  ue.resolveRef = f;
  function g(u) {
    return (0, o.inlineRef)(u.schema, this.opts.inlineRefs) ? u.schema : u.validate ? u : a.call(this, u);
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
    const l = this.opts.uriResolver.parse(m), h = (0, o._getFullPath)(this.opts.uriResolver, l);
    let $ = (0, o.getFullPath)(this.opts.uriResolver, u.baseId, void 0);
    if (Object.keys(u.schema).length > 0 && h === $)
      return _.call(this, l, u);
    const s = (0, o.normalizeId)(h), c = this.refs[s] || this.schemas[s];
    if (typeof c == "string") {
      const p = b.call(this, u, c);
      return typeof p?.schema != "object" ? void 0 : _.call(this, l, p);
    }
    if (typeof c?.schema == "object") {
      if (c.validate || a.call(this, c), s === (0, o.normalizeId)(m)) {
        const { schema: p } = c, { schemaId: k } = this.opts, C = p[k];
        return C && ($ = (0, o.resolveUrl)(this.opts.uriResolver, $, C)), new i({ schema: p, schemaId: k, root: u, baseId: $ });
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
      !E.has(p) && C && (m = (0, o.resolveUrl)(this.opts.uriResolver, m, C));
    }
    let s;
    if (typeof l != "boolean" && l.$ref && !(0, d.schemaHasRulesButRef)(l, this.RULES)) {
      const p = (0, o.resolveUrl)(this.opts.uriResolver, m, l.$ref);
      s = b.call(this, h, p);
    }
    const { schemaId: c } = this.opts;
    if (s = s || new i({ schema: l, schemaId: c, root: h, baseId: m }), s.schema !== s.root.schema)
      return s;
  }
  return ue;
}
const us = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", fs = "Meta-schema for $data reference (JSON AnySchema extension proposal)", ps = "object", hs = ["$data"], ms = { $data: { type: "string", anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] } }, ys = !1, gs = {
  $id: us,
  description: fs,
  type: ps,
  required: hs,
  properties: ms,
  additionalProperties: ys
};
var rt = {}, Ge = { exports: {} }, hr, un;
function Ao() {
  if (un) return hr;
  un = 1;
  const e = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu), t = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u), n = RegExp.prototype.test.bind(/^[\da-f]{2}$/iu), o = RegExp.prototype.test.bind(/^[\da-z\-._~]$/iu), d = RegExp.prototype.test.bind(/^[\da-z\-._~!$&'()*+,;=:@/]$/iu);
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
  const i = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
  function a(s) {
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
    let N = !1, T = !1, O = f;
    for (let z = 0; z < s.length; z++) {
      const L = s[z];
      if (!(L === "[" || L === "]"))
        if (L === ":") {
          if (N === !0 && (T = !0), !O(C, k, p))
            break;
          if (++c > 7) {
            p.error = !0;
            break;
          }
          z > 0 && s[z - 1] === ":" && (N = !0), k.push(":");
          continue;
        } else if (L === "%") {
          if (!O(C, k, p))
            break;
          O = a;
        } else {
          C.push(L);
          continue;
        }
    }
    return C.length && (O === a ? p.zone = C.join("") : T ? k.push(C.join("")) : k.push(r(C))), p.address = k.join(""), p;
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
        if (n(C)) {
          const N = C.toUpperCase(), T = String.fromCharCode(parseInt(N, 16));
          c && o(T) ? p += T : p += "%" + N, k += 2;
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
        if (n(k)) {
          const C = k.toUpperCase(), N = String.fromCharCode(parseInt(C, 16));
          N !== "." && o(N) ? c += N : c += "%" + C, p += 2;
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
        if (n(k)) {
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
    nonSimpleDomain: i,
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
function vs() {
  if (fn) return mr;
  fn = 1;
  const { isUUID: e } = Ao(), t = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu, n = (
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
  function o(s) {
    return n.indexOf(
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
  function i(s) {
    const c = String(s.scheme).toLowerCase() === "https";
    return (s.port === (c ? 443 : 80) || s.port === "") && (s.port = void 0), s.path || (s.path = "/"), s;
  }
  function a(s) {
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
    const T = s, O = s.nss;
    return T.path = `${k || c.nid}:${O}`, c.skipEscape = !0, T;
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
      serialize: i
    }
  ), E = (
    /** @type {SchemeHandler} */
    {
      scheme: "https",
      domainHost: b.domainHost,
      parse: r,
      serialize: i
    }
  ), _ = (
    /** @type {SchemeHandler} */
    {
      scheme: "ws",
      domainHost: !0,
      parse: a,
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
    isValidSchemeName: o,
    getSchemeHandler: $
  }, mr;
}
var pn;
function $s() {
  if (pn) return Ge.exports;
  pn = 1;
  const { normalizeIPv6: e, removeDotSegments: t, recomposeAuthority: n, normalizePercentEncoding: o, normalizePathEncoding: d, escapePreservingEscapes: r, reescapeHostDelimiters: i, isIPv4: a, nonSimpleDomain: f } = Ao(), { SCHEMES: g, getSchemeHandler: v } = vs();
  function w(C, N) {
    return typeof C == "string" ? C = /** @type {T} */
    s(C, N) : typeof C == "object" && (C = /** @type {T} */
    $(_(C, N), N)), C;
  }
  function S(C, N, T) {
    const O = T ? Object.assign({ scheme: "null" }, T) : { scheme: "null" }, z = b($(C, O), $(N, O), O, !0);
    return O.skipEscape = !0, _(z, O);
  }
  function b(C, N, T, O) {
    const z = {};
    return O || (C = $(_(C, T), T), N = $(_(N, T), T)), T = T || {}, !T.tolerant && N.scheme ? (z.scheme = N.scheme, z.userinfo = N.userinfo, z.host = N.host, z.port = N.port, z.path = t(N.path || ""), z.query = N.query) : (N.userinfo !== void 0 || N.host !== void 0 || N.port !== void 0 ? (z.userinfo = N.userinfo, z.host = N.host, z.port = N.port, z.path = t(N.path || ""), z.query = N.query) : (N.path ? (N.path[0] === "/" ? z.path = t(N.path) : ((C.userinfo !== void 0 || C.host !== void 0 || C.port !== void 0) && !C.path ? z.path = "/" + N.path : C.path ? z.path = C.path.slice(0, C.path.lastIndexOf("/") + 1) + N.path : z.path = N.path, z.path = t(z.path)), z.query = N.query) : (z.path = C.path, N.query !== void 0 ? z.query = N.query : z.query = C.query), z.userinfo = C.userinfo, z.host = C.host, z.port = C.port), z.scheme = C.scheme), z.fragment = N.fragment, z;
  }
  function E(C, N, T) {
    const O = p(C, T), z = p(N, T);
    return O !== void 0 && z !== void 0 && O.toLowerCase() === z.toLowerCase();
  }
  function _(C, N) {
    const T = {
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
    }, O = Object.assign({}, N), z = [], L = v(O.scheme || T.scheme);
    L && L.serialize && L.serialize(T, O), T.path !== void 0 && (O.skipEscape ? T.path = o(T.path) : (T.path = r(T.path), T.scheme !== void 0 && (T.path = T.path.split("%3A").join(":")))), O.reference !== "suffix" && T.scheme && z.push(T.scheme, ":");
    const Q = n(T);
    if (Q !== void 0 && (O.reference !== "suffix" && z.push("//"), z.push(Q), T.path && T.path[0] !== "/" && z.push("/")), T.path !== void 0) {
      let te = T.path;
      !O.absolutePath && (!L || !L.absolutePath) && (te = t(te)), Q === void 0 && te[0] === "/" && te[1] === "/" && (te = "/%2F" + te.slice(2)), z.push(te);
    }
    return T.query !== void 0 && z.push("?", T.query), T.fragment !== void 0 && z.push("#", T.fragment), z.join("");
  }
  const u = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u, m = /^(?:[^#/:?]+:)?\/\/([^/?#]*)/;
  function l(C, N) {
    if (N[2] !== void 0 && C.path && C.path[0] !== "/")
      return 'URI path must start with "/" when authority is present.';
    if (typeof C.port == "number" && (C.port < 0 || C.port > 65535))
      return "URI port is malformed.";
  }
  function h(C, N) {
    const T = Object.assign({}, N), O = {
      scheme: void 0,
      userinfo: void 0,
      host: "",
      port: void 0,
      path: "",
      query: void 0,
      fragment: void 0
    };
    let z = !1, L = !1;
    T.reference === "suffix" && (T.scheme ? C = T.scheme + ":" + C : C = "//" + C);
    const Q = C.match(m);
    Q !== null && Q[1].indexOf("\\") !== -1 && (O.error = "URI authority must not contain a literal backslash.", z = !0);
    const te = C.match(u);
    if (te) {
      O.scheme = te[1], O.userinfo = te[3], O.host = te[4], O.port = parseInt(te[5], 10), O.path = te[6] || "", O.query = te[7], O.fragment = te[8], isNaN(O.port) && (O.port = te[5]);
      const fe = l(O, te);
      if (fe !== void 0 && (O.error = O.error || fe, z = !0), O.host)
        if (a(O.host) === !1) {
          const V = e(O.host);
          O.host = V.host.toLowerCase(), L = V.isIPV6;
        } else
          L = !0;
      O.scheme === void 0 && O.userinfo === void 0 && O.host === void 0 && O.port === void 0 && O.query === void 0 && !O.path ? O.reference = "same-document" : O.scheme === void 0 ? O.reference = "relative" : O.fragment === void 0 ? O.reference = "absolute" : O.reference = "uri", T.reference && T.reference !== "suffix" && T.reference !== O.reference && (O.error = O.error || "URI is not a " + T.reference + " reference.");
      const Y = v(T.scheme || O.scheme);
      if (!T.unicodeSupport && (!Y || !Y.unicodeSupport) && O.host && (T.domainHost || Y && Y.domainHost) && L === !1 && f(O.host))
        try {
          O.host = new URL("http://" + O.host).hostname;
        } catch (me) {
          O.error = O.error || "Host's domain name can not be converted to ASCII: " + me;
        }
      if ((!Y || Y && !Y.skipNormalize) && (C.indexOf("%") !== -1 && (O.scheme !== void 0 && (O.scheme = unescape(O.scheme)), O.host !== void 0 && (O.host = i(unescape(O.host), L))), O.path && (O.path = d(O.path)), O.fragment))
        try {
          O.fragment = encodeURI(decodeURIComponent(O.fragment));
        } catch {
          O.error = O.error || "URI malformed";
        }
      Y && Y.parse && Y.parse(O, T);
    } else
      O.error = O.error || "URI can not be parsed.";
    return { parsed: O, malformedAuthorityOrPort: z };
  }
  function $(C, N) {
    return h(C, N).parsed;
  }
  function s(C, N) {
    return c(C, N).normalized;
  }
  function c(C, N) {
    const { parsed: T, malformedAuthorityOrPort: O } = h(C, N);
    return {
      normalized: O ? C : _(T, N),
      malformedAuthorityOrPort: O
    };
  }
  function p(C, N) {
    if (typeof C == "string") {
      const { normalized: T, malformedAuthorityOrPort: O } = c(C, N);
      return O ? void 0 : T;
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
function _s() {
  if (hn) return rt;
  hn = 1, Object.defineProperty(rt, "__esModule", { value: !0 });
  const e = $s();
  return e.code = 'require("ajv/dist/runtime/uri").default', rt.default = e, rt;
}
var mn;
function bs() {
  return mn || (mn = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = void 0;
    var t = /* @__PURE__ */ tr();
    Object.defineProperty(e, "KeywordCxt", { enumerable: !0, get: function() {
      return t.KeywordCxt;
    } });
    var n = /* @__PURE__ */ G();
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
    const o = /* @__PURE__ */ Cr(), d = /* @__PURE__ */ rr(), r = /* @__PURE__ */ Co(), i = /* @__PURE__ */ nr(), a = /* @__PURE__ */ G(), f = /* @__PURE__ */ er(), g = /* @__PURE__ */ Xt(), v = /* @__PURE__ */ X(), w = gs, S = /* @__PURE__ */ _s(), b = (V, A) => new RegExp(V, A);
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
      var A, D, x, y, P, M, U, H, ee, Z, R, j, q, B, K, W, oe, ye, le, de, se, Ie, pe, or, sr;
      const Ue = V.strict, ir = (A = V.code) === null || A === void 0 ? void 0 : A.optimize, Dr = ir === !0 || ir === void 0 ? 1 : ir || 0, Vr = (x = (D = V.code) === null || D === void 0 ? void 0 : D.regExp) !== null && x !== void 0 ? x : b, Ho = (y = V.uriResolver) !== null && y !== void 0 ? y : S.default;
      return {
        strictSchema: (M = (P = V.strictSchema) !== null && P !== void 0 ? P : Ue) !== null && M !== void 0 ? M : !0,
        strictNumbers: (H = (U = V.strictNumbers) !== null && U !== void 0 ? U : Ue) !== null && H !== void 0 ? H : !0,
        strictTypes: (Z = (ee = V.strictTypes) !== null && ee !== void 0 ? ee : Ue) !== null && Z !== void 0 ? Z : "log",
        strictTuples: (j = (R = V.strictTuples) !== null && R !== void 0 ? R : Ue) !== null && j !== void 0 ? j : "log",
        strictRequired: (B = (q = V.strictRequired) !== null && q !== void 0 ? q : Ue) !== null && B !== void 0 ? B : !1,
        code: V.code ? { ...V.code, optimize: Dr, regExp: Vr } : { optimize: Dr, regExp: Vr },
        loopRequired: (K = V.loopRequired) !== null && K !== void 0 ? K : l,
        loopEnum: (W = V.loopEnum) !== null && W !== void 0 ? W : l,
        meta: (oe = V.meta) !== null && oe !== void 0 ? oe : !0,
        messages: (ye = V.messages) !== null && ye !== void 0 ? ye : !0,
        inlineRefs: (le = V.inlineRefs) !== null && le !== void 0 ? le : !0,
        schemaId: (de = V.schemaId) !== null && de !== void 0 ? de : "$id",
        addUsedSchema: (se = V.addUsedSchema) !== null && se !== void 0 ? se : !0,
        validateSchema: (Ie = V.validateSchema) !== null && Ie !== void 0 ? Ie : !0,
        validateFormats: (pe = V.validateFormats) !== null && pe !== void 0 ? pe : !0,
        unicodeRegExp: (or = V.unicodeRegExp) !== null && or !== void 0 ? or : !0,
        int32range: (sr = V.int32range) !== null && sr !== void 0 ? sr : !0,
        uriResolver: Ho
      };
    }
    class $ {
      constructor(A = {}) {
        this.schemas = {}, this.refs = {}, this.formats = /* @__PURE__ */ Object.create(null), this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), A = this.opts = { ...A, ...h(A) };
        const { es5: D, lines: x } = this.opts.code;
        this.scope = new a.ValueScope({ scope: {}, prefixes: _, es5: D, lines: x }), this.logger = O(A.logger);
        const y = A.validateFormats;
        A.validateFormats = !1, this.RULES = (0, r.getRules)(), s.call(this, u, A, "NOT SUPPORTED"), s.call(this, m, A, "DEPRECATED", "warn"), this._metaOpts = N.call(this), A.formats && k.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), A.keywords && C.call(this, A.keywords), typeof A.meta == "object" && this.addMetaSchema(A.meta), p.call(this), A.validateFormats = y;
      }
      _addVocabularies() {
        this.addKeyword("$async");
      }
      _addDefaultMetaSchema() {
        const { $data: A, meta: D, schemaId: x } = this.opts;
        let y = w;
        x === "id" && (y = { ...w }, y.id = y.$id, delete y.$id), D && A && this.addMetaSchema(y, y[x], !1);
      }
      defaultMeta() {
        const { meta: A, schemaId: D } = this.opts;
        return this.opts.defaultMeta = typeof A == "object" ? A[D] || A : void 0;
      }
      validate(A, D) {
        let x;
        if (typeof A == "string") {
          if (x = this.getSchema(A), !x)
            throw new Error(`no schema with key or ref "${A}"`);
        } else
          x = this.compile(A);
        const y = x(D);
        return "$async" in x || (this.errors = x.errors), y;
      }
      compile(A, D) {
        const x = this._addSchema(A, D);
        return x.validate || this._compileSchemaEnv(x);
      }
      compileAsync(A, D) {
        if (typeof this.opts.loadSchema != "function")
          throw new Error("options.loadSchema should be a function");
        const { loadSchema: x } = this.opts;
        return y.call(this, A, D);
        async function y(Z, R) {
          await P.call(this, Z.$schema);
          const j = this._addSchema(Z, R);
          return j.validate || M.call(this, j);
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
            return await (this._loading[Z] = x(Z));
          } finally {
            delete this._loading[Z];
          }
        }
      }
      // Adds schema to the instance
      addSchema(A, D, x, y = this.opts.validateSchema) {
        if (Array.isArray(A)) {
          for (const M of A)
            this.addSchema(M, void 0, x, y);
          return this;
        }
        let P;
        if (typeof A == "object") {
          const { schemaId: M } = this.opts;
          if (P = A[M], P !== void 0 && typeof P != "string")
            throw new Error(`schema ${M} must be string`);
        }
        return D = (0, f.normalizeId)(D || P), this._checkUnique(D), this.schemas[D] = this._addSchema(A, x, D, y, !0), this;
      }
      // Add schema that will be used to validate other schemas
      // options in META_IGNORE_OPTIONS are alway set to false
      addMetaSchema(A, D, x = this.opts.validateSchema) {
        return this.addSchema(A, D, !0, x), this;
      }
      //  Validate schema against its meta-schema
      validateSchema(A, D) {
        if (typeof A == "boolean")
          return !0;
        let x;
        if (x = A.$schema, x !== void 0 && typeof x != "string")
          throw new Error("$schema must be a string");
        if (x = x || this.opts.defaultMeta || this.defaultMeta(), !x)
          return this.logger.warn("meta-schema not available"), this.errors = null, !0;
        const y = this.validate(x, A);
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
      getSchema(A) {
        let D;
        for (; typeof (D = c.call(this, A)) == "string"; )
          A = D;
        if (D === void 0) {
          const { schemaId: x } = this.opts, y = new i.SchemaEnv({ schema: {}, schemaId: x });
          if (D = i.resolveSchema.call(this, y, A), !D)
            return;
          this.refs[A] = D;
        }
        return D.validate || this._compileSchemaEnv(D);
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
            const D = c.call(this, A);
            return typeof D == "object" && this._cache.delete(D.schema), delete this.schemas[A], delete this.refs[A], this;
          }
          case "object": {
            const D = A;
            this._cache.delete(D);
            let x = A[this.opts.schemaId];
            return x && (x = (0, f.normalizeId)(x), delete this.schemas[x], delete this.refs[x]), this;
          }
          default:
            throw new Error("ajv.removeSchema: invalid parameter");
        }
      }
      // add "vocabulary" - a collection of keywords
      addVocabulary(A) {
        for (const D of A)
          this.addKeyword(D);
        return this;
      }
      addKeyword(A, D) {
        let x;
        if (typeof A == "string")
          x = A, typeof D == "object" && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), D.keyword = x);
        else if (typeof A == "object" && D === void 0) {
          if (D = A, x = D.keyword, Array.isArray(x) && !x.length)
            throw new Error("addKeywords: keyword must be string or non-empty array");
        } else
          throw new Error("invalid addKeywords parameters");
        if (L.call(this, x, D), !D)
          return (0, v.eachItem)(x, (P) => Q.call(this, P)), this;
        fe.call(this, D);
        const y = {
          ...D,
          type: (0, g.getJSONTypes)(D.type),
          schemaType: (0, g.getJSONTypes)(D.schemaType)
        };
        return (0, v.eachItem)(x, y.type.length === 0 ? (P) => Q.call(this, P, y) : (P) => y.type.forEach((M) => Q.call(this, P, y, M))), this;
      }
      getKeyword(A) {
        const D = this.RULES.all[A];
        return typeof D == "object" ? D.definition : !!D;
      }
      // Remove keyword
      removeKeyword(A) {
        const { RULES: D } = this;
        delete D.keywords[A], delete D.all[A];
        for (const x of D.rules) {
          const y = x.rules.findIndex((P) => P.keyword === A);
          y >= 0 && x.rules.splice(y, 1);
        }
        return this;
      }
      // Add format
      addFormat(A, D) {
        return typeof D == "string" && (D = new RegExp(D)), this.formats[A] = D, this;
      }
      errorsText(A = this.errors, { separator: D = ", ", dataVar: x = "data" } = {}) {
        return !A || A.length === 0 ? "No errors" : A.map((y) => `${x}${y.instancePath} ${y.message}`).reduce((y, P) => y + D + P);
      }
      $dataMetaSchema(A, D) {
        const x = this.RULES.all;
        A = JSON.parse(JSON.stringify(A));
        for (const y of D) {
          const P = y.split("/").slice(1);
          let M = A;
          for (const U of P)
            M = M[U];
          for (const U in x) {
            const H = x[U];
            if (typeof H != "object")
              continue;
            const { $data: ee } = H.definition, Z = M[U];
            ee && Z && (M[U] = me(Z));
          }
        }
        return A;
      }
      _removeAllSchemas(A, D) {
        for (const x in A) {
          const y = A[x];
          (!D || D.test(x)) && (typeof y == "string" ? delete A[x] : y && !y.meta && (this._cache.delete(y.schema), delete A[x]));
        }
      }
      _addSchema(A, D, x, y = this.opts.validateSchema, P = this.opts.addUsedSchema) {
        let M;
        const { schemaId: U } = this.opts;
        if (typeof A == "object")
          M = A[U];
        else {
          if (this.opts.jtd)
            throw new Error("schema must be object");
          if (typeof A != "boolean")
            throw new Error("schema must be object or boolean");
        }
        let H = this._cache.get(A);
        if (H !== void 0)
          return H;
        x = (0, f.normalizeId)(M || x);
        const ee = f.getSchemaRefs.call(this, A, x);
        return H = new i.SchemaEnv({ schema: A, schemaId: U, meta: D, baseId: x, localRefs: ee }), this._cache.set(H.schema, H), P && !x.startsWith("#") && (x && this._checkUnique(x), this.refs[x] = H), y && this.validateSchema(A, !0), H;
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
        const D = this.opts;
        this.opts = this._metaOpts;
        try {
          i.compileSchema.call(this, A);
        } finally {
          this.opts = D;
        }
      }
    }
    $.ValidationError = o.default, $.MissingRefError = d.default, e.default = $;
    function s(V, A, D, x = "error") {
      for (const y in V) {
        const P = y;
        P in A && this.logger[x](`${D}: option ${y}. ${V[P]}`);
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
          for (const A in V)
            this.addSchema(V[A], A);
    }
    function k() {
      for (const V in this.opts.formats) {
        const A = this.opts.formats[V];
        A && this.addFormat(V, A);
      }
    }
    function C(V) {
      if (Array.isArray(V)) {
        this.addVocabulary(V);
        return;
      }
      this.logger.warn("keywords option as map is deprecated, pass array");
      for (const A in V) {
        const D = V[A];
        D.keyword || (D.keyword = A), this.addKeyword(D);
      }
    }
    function N() {
      const V = { ...this.opts };
      for (const A of E)
        delete V[A];
      return V;
    }
    const T = { log() {
    }, warn() {
    }, error() {
    } };
    function O(V) {
      if (V === !1)
        return T;
      if (V === void 0)
        return console;
      if (V.log && V.warn && V.error)
        return V;
      throw new Error("logger must implement log, warn and error methods");
    }
    const z = /^[a-z_$][a-z0-9_$:-]*$/i;
    function L(V, A) {
      const { RULES: D } = this;
      if ((0, v.eachItem)(V, (x) => {
        if (D.keywords[x])
          throw new Error(`Keyword ${x} is already defined`);
        if (!z.test(x))
          throw new Error(`Keyword ${x} has invalid name`);
      }), !!A && A.$data && !("code" in A || "validate" in A))
        throw new Error('$data keyword must have "code" or "validate" function');
    }
    function Q(V, A, D) {
      var x;
      const y = A?.post;
      if (D && y)
        throw new Error('keyword with "post" flag cannot have "type"');
      const { RULES: P } = this;
      let M = y ? P.post : P.rules.find(({ type: H }) => H === D);
      if (M || (M = { type: D, rules: [] }, P.rules.push(M)), P.keywords[V] = !0, !A)
        return;
      const U = {
        keyword: V,
        definition: {
          ...A,
          type: (0, g.getJSONTypes)(A.type),
          schemaType: (0, g.getJSONTypes)(A.schemaType)
        }
      };
      A.before ? te.call(this, M, U, A.before) : M.rules.push(U), P.all[V] = U, (x = A.implements) === null || x === void 0 || x.forEach((H) => this.addKeyword(H));
    }
    function te(V, A, D) {
      const x = V.rules.findIndex((y) => y.keyword === D);
      x >= 0 ? V.rules.splice(x, 0, A) : (V.rules.push(A), this.logger.warn(`rule ${D} is not defined`));
    }
    function fe(V) {
      let { metaSchema: A } = V;
      A !== void 0 && (V.$data && this.opts.$data && (A = me(A)), V.validateSchema = this.compile(A, !0));
    }
    const Y = {
      $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
    };
    function me(V) {
      return { anyOf: [V, Y] };
    }
  })(ar)), ar;
}
var nt = {}, ot = {}, st = {}, yn;
function ws() {
  if (yn) return st;
  yn = 1, Object.defineProperty(st, "__esModule", { value: !0 });
  const e = {
    keyword: "id",
    code() {
      throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
    }
  };
  return st.default = e, st;
}
var ke = {}, gn;
function Rr() {
  if (gn) return ke;
  gn = 1, Object.defineProperty(ke, "__esModule", { value: !0 }), ke.callRef = ke.getValidate = void 0;
  const e = /* @__PURE__ */ rr(), t = /* @__PURE__ */ be(), n = /* @__PURE__ */ G(), o = /* @__PURE__ */ _e(), d = /* @__PURE__ */ nr(), r = /* @__PURE__ */ X(), i = {
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
        return f(g, (0, n._)`${p}.validate`, l, l.$async);
      }
      function s(p) {
        const k = a(g, p);
        f(g, k, p, p.$async);
      }
      function c(p) {
        const k = v.scopeValue("schema", u.code.source === !0 ? { ref: p, code: (0, n.stringify)(p) } : { ref: p }), C = v.name("valid"), N = g.subschema({
          schema: p,
          dataTypes: [],
          schemaPath: n.nil,
          topSchemaRef: k,
          errSchemaPath: w
        }, C);
        g.mergeEvaluated(N), g.ok(C);
      }
    }
  };
  function a(g, v) {
    const { gen: w } = g;
    return v.validate ? w.scopeValue("validate", { ref: v.validate }) : (0, n._)`${w.scopeValue("wrapper", { ref: v })}.validate`;
  }
  ke.getValidate = a;
  function f(g, v, w, S) {
    const { gen: b, it: E } = g, { allErrors: _, schemaEnv: u, opts: m } = E, l = m.passContext ? o.default.this : n.nil;
    S ? h() : $();
    function h() {
      if (!u.$async)
        throw new Error("async schema referenced by sync schema");
      const p = b.let("valid");
      b.try(() => {
        b.code((0, n._)`await ${(0, t.callValidateCode)(g, v, l)}`), c(v), _ || b.assign(p, !0);
      }, (k) => {
        b.if((0, n._)`!(${k} instanceof ${E.ValidationError})`, () => b.throw(k)), s(k), _ || b.assign(p, !1);
      }), g.ok(p);
    }
    function $() {
      g.result((0, t.callValidateCode)(g, v, l), () => c(v), () => s(v));
    }
    function s(p) {
      const k = (0, n._)`${p}.errors`;
      b.assign(o.default.vErrors, (0, n._)`${o.default.vErrors} === null ? ${k} : ${o.default.vErrors}.concat(${k})`), b.assign(o.default.errors, (0, n._)`${o.default.vErrors}.length`);
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
          const N = b.var("props", (0, n._)`${p}.evaluated.props`);
          E.props = r.mergeEvaluated.props(b, N, E.props, n.Name);
        }
      if (E.items !== !0)
        if (C && !C.dynamicItems)
          C.items !== void 0 && (E.items = r.mergeEvaluated.items(b, C.items, E.items));
        else {
          const N = b.var("items", (0, n._)`${p}.evaluated.items`);
          E.items = r.mergeEvaluated.items(b, N, E.items, n.Name);
        }
    }
  }
  return ke.callRef = f, ke.default = i, ke;
}
var vn;
function Ss() {
  if (vn) return ot;
  vn = 1, Object.defineProperty(ot, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ws(), t = /* @__PURE__ */ Rr(), n = [
    "$schema",
    "$id",
    "$defs",
    "$vocabulary",
    { keyword: "$comment" },
    "definitions",
    e.default,
    t.default
  ];
  return ot.default = n, ot;
}
var it = {}, at = {}, $n;
function Es() {
  if ($n) return at;
  $n = 1, Object.defineProperty(at, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), t = e.operators, n = {
    maximum: { okStr: "<=", ok: t.LTE, fail: t.GT },
    minimum: { okStr: ">=", ok: t.GTE, fail: t.LT },
    exclusiveMaximum: { okStr: "<", ok: t.LT, fail: t.GTE },
    exclusiveMinimum: { okStr: ">", ok: t.GT, fail: t.LTE }
  }, o = {
    message: ({ keyword: r, schemaCode: i }) => (0, e.str)`must be ${n[r].okStr} ${i}`,
    params: ({ keyword: r, schemaCode: i }) => (0, e._)`{comparison: ${n[r].okStr}, limit: ${i}}`
  }, d = {
    keyword: Object.keys(n),
    type: "number",
    schemaType: "number",
    $data: !0,
    error: o,
    code(r) {
      const { keyword: i, data: a, schemaCode: f } = r;
      r.fail$data((0, e._)`${a} ${n[i].fail} ${f} || isNaN(${a})`);
    }
  };
  return at.default = d, at;
}
var ct = {}, _n;
function Ps() {
  if (_n) return ct;
  _n = 1, Object.defineProperty(ct, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), n = {
    keyword: "multipleOf",
    type: "number",
    schemaType: "number",
    $data: !0,
    error: {
      message: ({ schemaCode: o }) => (0, e.str)`must be multiple of ${o}`,
      params: ({ schemaCode: o }) => (0, e._)`{multipleOf: ${o}}`
    },
    code(o) {
      const { gen: d, data: r, schemaCode: i, it: a } = o, f = a.opts.multipleOfPrecision, g = d.let("res"), v = f ? (0, e._)`Math.abs(Math.round(${g}) - ${g}) > 1e-${f}` : (0, e._)`${g} !== parseInt(${g})`;
      o.fail$data((0, e._)`(${i} === 0 || (${g} = ${r}/${i}, ${v}))`);
    }
  };
  return ct.default = n, ct;
}
var lt = {}, dt = {}, bn;
function ks() {
  if (bn) return dt;
  bn = 1, Object.defineProperty(dt, "__esModule", { value: !0 });
  function e(t) {
    const n = t.length;
    let o = 0, d = 0, r;
    for (; d < n; )
      o++, r = t.charCodeAt(d++), r >= 55296 && r <= 56319 && d < n && (r = t.charCodeAt(d), (r & 64512) === 56320 && d++);
    return o;
  }
  return dt.default = e, e.code = 'require("ajv/dist/runtime/ucs2length").default', dt;
}
var wn;
function Cs() {
  if (wn) return lt;
  wn = 1, Object.defineProperty(lt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), n = /* @__PURE__ */ ks(), d = {
    keyword: ["maxLength", "minLength"],
    type: "string",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: r, schemaCode: i }) {
        const a = r === "maxLength" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${a} than ${i} characters`;
      },
      params: ({ schemaCode: r }) => (0, e._)`{limit: ${r}}`
    },
    code(r) {
      const { keyword: i, data: a, schemaCode: f, it: g } = r, v = i === "maxLength" ? e.operators.GT : e.operators.LT, w = g.opts.unicode === !1 ? (0, e._)`${a}.length` : (0, e._)`${(0, t.useFunc)(r.gen, n.default)}(${a})`;
      r.fail$data((0, e._)`${w} ${v} ${f}`);
    }
  };
  return lt.default = d, lt;
}
var ut = {}, Sn;
function Rs() {
  if (Sn) return ut;
  Sn = 1, Object.defineProperty(ut, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ be(), t = /* @__PURE__ */ X(), n = /* @__PURE__ */ G(), d = {
    keyword: "pattern",
    type: "string",
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: r }) => (0, n.str)`must match pattern "${r}"`,
      params: ({ schemaCode: r }) => (0, n._)`{pattern: ${r}}`
    },
    code(r) {
      const { gen: i, data: a, $data: f, schema: g, schemaCode: v, it: w } = r, S = w.opts.unicodeRegExp ? "u" : "";
      if (f) {
        const { regExp: b } = w.opts.code, E = b.code === "new RegExp" ? (0, n._)`new RegExp` : (0, t.useFunc)(i, b), _ = i.let("valid");
        i.try(() => i.assign(_, (0, n._)`${E}(${v}, ${S}).test(${a})`), () => i.assign(_, !1)), r.fail$data((0, n._)`!${_}`);
      } else {
        const b = (0, e.usePattern)(r, g);
        r.fail$data((0, n._)`!${b}.test(${a})`);
      }
    }
  };
  return ut.default = d, ut;
}
var ft = {}, En;
function Ns() {
  if (En) return ft;
  En = 1, Object.defineProperty(ft, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), n = {
    keyword: ["maxProperties", "minProperties"],
    type: "object",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: o, schemaCode: d }) {
        const r = o === "maxProperties" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${r} than ${d} properties`;
      },
      params: ({ schemaCode: o }) => (0, e._)`{limit: ${o}}`
    },
    code(o) {
      const { keyword: d, data: r, schemaCode: i } = o, a = d === "maxProperties" ? e.operators.GT : e.operators.LT;
      o.fail$data((0, e._)`Object.keys(${r}).length ${a} ${i}`);
    }
  };
  return ft.default = n, ft;
}
var pt = {}, Pn;
function As() {
  if (Pn) return pt;
  Pn = 1, Object.defineProperty(pt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ be(), t = /* @__PURE__ */ G(), n = /* @__PURE__ */ X(), d = {
    keyword: "required",
    type: "object",
    schemaType: "array",
    $data: !0,
    error: {
      message: ({ params: { missingProperty: r } }) => (0, t.str)`must have required property '${r}'`,
      params: ({ params: { missingProperty: r } }) => (0, t._)`{missingProperty: ${r}}`
    },
    code(r) {
      const { gen: i, schema: a, schemaCode: f, data: g, $data: v, it: w } = r, { opts: S } = w;
      if (!v && a.length === 0)
        return;
      const b = a.length >= S.loopRequired;
      if (w.allErrors ? E() : _(), S.strictRequired) {
        const l = r.parentSchema.properties, { definedProperties: h } = r.it;
        for (const $ of a)
          if (l?.[$] === void 0 && !h.has($)) {
            const s = w.schemaEnv.baseId + w.errSchemaPath, c = `required property "${$}" is not defined at "${s}" (strictRequired)`;
            (0, n.checkStrictMode)(w, c, w.opts.strictRequired);
          }
      }
      function E() {
        if (b || v)
          r.block$data(t.nil, u);
        else
          for (const l of a)
            (0, e.checkReportMissingProp)(r, l);
      }
      function _() {
        const l = i.let("missing");
        if (b || v) {
          const h = i.let("valid", !0);
          r.block$data(h, () => m(l, h)), r.ok(h);
        } else
          i.if((0, e.checkMissingProp)(r, a, l)), (0, e.reportMissingProp)(r, l), i.else();
      }
      function u() {
        i.forOf("prop", f, (l) => {
          r.setParams({ missingProperty: l }), i.if((0, e.noPropertyInData)(i, g, l, S.ownProperties), () => r.error());
        });
      }
      function m(l, h) {
        r.setParams({ missingProperty: l }), i.forOf(l, f, () => {
          i.assign(h, (0, e.propertyInData)(i, g, l, S.ownProperties)), i.if((0, t.not)(h), () => {
            r.error(), i.break();
          });
        }, t.nil);
      }
    }
  };
  return pt.default = d, pt;
}
var ht = {}, kn;
function js() {
  if (kn) return ht;
  kn = 1, Object.defineProperty(ht, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), n = {
    keyword: ["maxItems", "minItems"],
    type: "array",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: o, schemaCode: d }) {
        const r = o === "maxItems" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${r} than ${d} items`;
      },
      params: ({ schemaCode: o }) => (0, e._)`{limit: ${o}}`
    },
    code(o) {
      const { keyword: d, data: r, schemaCode: i } = o, a = d === "maxItems" ? e.operators.GT : e.operators.LT;
      o.fail$data((0, e._)`${r}.length ${a} ${i}`);
    }
  };
  return ht.default = n, ht;
}
var mt = {}, yt = {}, Cn;
function Nr() {
  if (Cn) return yt;
  Cn = 1, Object.defineProperty(yt, "__esModule", { value: !0 });
  const e = No();
  return e.code = 'require("ajv/dist/runtime/equal").default', yt.default = e, yt;
}
var Rn;
function xs() {
  if (Rn) return mt;
  Rn = 1, Object.defineProperty(mt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Xt(), t = /* @__PURE__ */ G(), n = /* @__PURE__ */ X(), o = /* @__PURE__ */ Nr(), r = {
    keyword: "uniqueItems",
    type: "array",
    schemaType: "boolean",
    $data: !0,
    error: {
      message: ({ params: { i, j: a } }) => (0, t.str)`must NOT have duplicate items (items ## ${a} and ${i} are identical)`,
      params: ({ params: { i, j: a } }) => (0, t._)`{i: ${i}, j: ${a}}`
    },
    code(i) {
      const { gen: a, data: f, $data: g, schema: v, parentSchema: w, schemaCode: S, it: b } = i;
      if (!g && !v)
        return;
      const E = a.let("valid"), _ = w.items ? (0, e.getSchemaTypes)(w.items) : [];
      i.block$data(E, u, (0, t._)`${S} === false`), i.ok(E);
      function u() {
        const $ = a.let("i", (0, t._)`${f}.length`), s = a.let("j");
        i.setParams({ i: $, j: s }), a.assign(E, !0), a.if((0, t._)`${$} > 1`, () => (m() ? l : h)($, s));
      }
      function m() {
        return _.length > 0 && !_.some(($) => $ === "object" || $ === "array");
      }
      function l($, s) {
        const c = a.name("item"), p = (0, e.checkDataTypes)(_, c, b.opts.strictNumbers, e.DataType.Wrong), k = a.const("indices", (0, t._)`{}`);
        a.for((0, t._)`;${$}--;`, () => {
          a.let(c, (0, t._)`${f}[${$}]`), a.if(p, (0, t._)`continue`), _.length > 1 && a.if((0, t._)`typeof ${c} == "string"`, (0, t._)`${c} += "_"`), a.if((0, t._)`typeof ${k}[${c}] == "number"`, () => {
            a.assign(s, (0, t._)`${k}[${c}]`), i.error(), a.assign(E, !1).break();
          }).code((0, t._)`${k}[${c}] = ${$}`);
        });
      }
      function h($, s) {
        const c = (0, n.useFunc)(a, o.default), p = a.name("outer");
        a.label(p).for((0, t._)`;${$}--;`, () => a.for((0, t._)`${s} = ${$}; ${s}--;`, () => a.if((0, t._)`${c}(${f}[${$}], ${f}[${s}])`, () => {
          i.error(), a.assign(E, !1).break(p);
        })));
      }
    }
  };
  return mt.default = r, mt;
}
var gt = {}, Nn;
function Os() {
  if (Nn) return gt;
  Nn = 1, Object.defineProperty(gt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), n = /* @__PURE__ */ Nr(), d = {
    keyword: "const",
    $data: !0,
    error: {
      message: "must be equal to constant",
      params: ({ schemaCode: r }) => (0, e._)`{allowedValue: ${r}}`
    },
    code(r) {
      const { gen: i, data: a, $data: f, schemaCode: g, schema: v } = r;
      f || v && typeof v == "object" ? r.fail$data((0, e._)`!${(0, t.useFunc)(i, n.default)}(${a}, ${g})`) : r.fail((0, e._)`${v} !== ${a}`);
    }
  };
  return gt.default = d, gt;
}
var vt = {}, An;
function Ts() {
  if (An) return vt;
  An = 1, Object.defineProperty(vt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), n = /* @__PURE__ */ Nr(), d = {
    keyword: "enum",
    schemaType: "array",
    $data: !0,
    error: {
      message: "must be equal to one of the allowed values",
      params: ({ schemaCode: r }) => (0, e._)`{allowedValues: ${r}}`
    },
    code(r) {
      const { gen: i, data: a, $data: f, schema: g, schemaCode: v, it: w } = r;
      if (!f && g.length === 0)
        throw new Error("enum must have non-empty array");
      const S = g.length >= w.opts.loopEnum;
      let b;
      const E = () => b ?? (b = (0, t.useFunc)(i, n.default));
      let _;
      if (S || f)
        _ = i.let("valid"), r.block$data(_, u);
      else {
        if (!Array.isArray(g))
          throw new Error("ajv implementation error");
        const l = i.const("vSchema", v);
        _ = (0, e.or)(...g.map((h, $) => m(l, $)));
      }
      r.pass(_);
      function u() {
        i.assign(_, !1), i.forOf("v", v, (l) => i.if((0, e._)`${E()}(${a}, ${l})`, () => i.assign(_, !0).break()));
      }
      function m(l, h) {
        const $ = g[h];
        return typeof $ == "object" && $ !== null ? (0, e._)`${E()}(${a}, ${l}[${h}])` : (0, e._)`${a} === ${$}`;
      }
    }
  };
  return vt.default = d, vt;
}
var jn;
function Ms() {
  if (jn) return it;
  jn = 1, Object.defineProperty(it, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Es(), t = /* @__PURE__ */ Ps(), n = /* @__PURE__ */ Cs(), o = /* @__PURE__ */ Rs(), d = /* @__PURE__ */ Ns(), r = /* @__PURE__ */ As(), i = /* @__PURE__ */ js(), a = /* @__PURE__ */ xs(), f = /* @__PURE__ */ Os(), g = /* @__PURE__ */ Ts(), v = [
    // number
    e.default,
    t.default,
    // string
    n.default,
    o.default,
    // object
    d.default,
    r.default,
    // array
    i.default,
    a.default,
    // any
    { keyword: "type", schemaType: ["string", "array"] },
    { keyword: "nullable", schemaType: "boolean" },
    f.default,
    g.default
  ];
  return it.default = v, it;
}
var $t = {}, ze = {}, xn;
function jo() {
  if (xn) return ze;
  xn = 1, Object.defineProperty(ze, "__esModule", { value: !0 }), ze.validateAdditionalItems = void 0;
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), o = {
    keyword: "additionalItems",
    type: "array",
    schemaType: ["boolean", "object"],
    before: "uniqueItems",
    error: {
      message: ({ params: { len: r } }) => (0, e.str)`must NOT have more than ${r} items`,
      params: ({ params: { len: r } }) => (0, e._)`{limit: ${r}}`
    },
    code(r) {
      const { parentSchema: i, it: a } = r, { items: f } = i;
      if (!Array.isArray(f)) {
        (0, t.checkStrictMode)(a, '"additionalItems" is ignored when "items" is not an array of schemas');
        return;
      }
      d(r, f);
    }
  };
  function d(r, i) {
    const { gen: a, schema: f, data: g, keyword: v, it: w } = r;
    w.items = !0;
    const S = a.const("len", (0, e._)`${g}.length`);
    if (f === !1)
      r.setParams({ len: i.length }), r.pass((0, e._)`${S} <= ${i.length}`);
    else if (typeof f == "object" && !(0, t.alwaysValidSchema)(w, f)) {
      const E = a.var("valid", (0, e._)`${S} <= ${i.length}`);
      a.if((0, e.not)(E), () => b(E)), r.ok(E);
    }
    function b(E) {
      a.forRange("i", i.length, S, (_) => {
        r.subschema({ keyword: v, dataProp: _, dataPropType: t.Type.Num }, E), w.allErrors || a.if((0, e.not)(E), () => a.break());
      });
    }
  }
  return ze.validateAdditionalItems = d, ze.default = o, ze;
}
var _t = {}, qe = {}, On;
function xo() {
  if (On) return qe;
  On = 1, Object.defineProperty(qe, "__esModule", { value: !0 }), qe.validateTuple = void 0;
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), n = /* @__PURE__ */ be(), o = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "array", "boolean"],
    before: "uniqueItems",
    code(r) {
      const { schema: i, it: a } = r;
      if (Array.isArray(i))
        return d(r, "additionalItems", i);
      a.items = !0, !(0, t.alwaysValidSchema)(a, i) && r.ok((0, n.validateArray)(r));
    }
  };
  function d(r, i, a = r.schema) {
    const { gen: f, parentSchema: g, data: v, keyword: w, it: S } = r;
    _(g), S.opts.unevaluated && a.length && S.items !== !0 && (S.items = t.mergeEvaluated.items(f, a.length, S.items));
    const b = f.name("valid"), E = f.const("len", (0, e._)`${v}.length`);
    a.forEach((u, m) => {
      (0, t.alwaysValidSchema)(S, u) || (f.if((0, e._)`${E} > ${m}`, () => r.subschema({
        keyword: w,
        schemaProp: m,
        dataProp: m
      }, b)), r.ok(b));
    });
    function _(u) {
      const { opts: m, errSchemaPath: l } = S, h = a.length, $ = h === u.minItems && (h === u.maxItems || u[i] === !1);
      if (m.strictTuples && !$) {
        const s = `"${w}" is ${h}-tuple, but minItems or maxItems/${i} are not specified or different at path "${l}"`;
        (0, t.checkStrictMode)(S, s, m.strictTuples);
      }
    }
  }
  return qe.validateTuple = d, qe.default = o, qe;
}
var Tn;
function Is() {
  if (Tn) return _t;
  Tn = 1, Object.defineProperty(_t, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ xo(), t = {
    keyword: "prefixItems",
    type: "array",
    schemaType: ["array"],
    before: "uniqueItems",
    code: (n) => (0, e.validateTuple)(n, "items")
  };
  return _t.default = t, _t;
}
var bt = {}, Mn;
function zs() {
  if (Mn) return bt;
  Mn = 1, Object.defineProperty(bt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), n = /* @__PURE__ */ be(), o = /* @__PURE__ */ jo(), r = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    error: {
      message: ({ params: { len: i } }) => (0, e.str)`must NOT have more than ${i} items`,
      params: ({ params: { len: i } }) => (0, e._)`{limit: ${i}}`
    },
    code(i) {
      const { schema: a, parentSchema: f, it: g } = i, { prefixItems: v } = f;
      g.items = !0, !(0, t.alwaysValidSchema)(g, a) && (v ? (0, o.validateAdditionalItems)(i, v) : i.ok((0, n.validateArray)(i)));
    }
  };
  return bt.default = r, bt;
}
var wt = {}, In;
function qs() {
  if (In) return wt;
  In = 1, Object.defineProperty(wt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), o = {
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
      const { gen: r, schema: i, parentSchema: a, data: f, it: g } = d;
      let v, w;
      const { minContains: S, maxContains: b } = a;
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
      if ((0, t.alwaysValidSchema)(g, i)) {
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
  return wt.default = o, wt;
}
var yr = {}, zn;
function Ar() {
  return zn || (zn = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
    const t = /* @__PURE__ */ G(), n = /* @__PURE__ */ X(), o = /* @__PURE__ */ be();
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
        i(f, g), a(f, v);
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
    function i(f, g = f.schema) {
      const { gen: v, data: w, it: S } = f;
      if (Object.keys(g).length === 0)
        return;
      const b = v.let("missing");
      for (const E in g) {
        const _ = g[E];
        if (_.length === 0)
          continue;
        const u = (0, o.propertyInData)(v, w, E, S.opts.ownProperties);
        f.setParams({
          property: E,
          depsCount: _.length,
          deps: _.join(", ")
        }), S.allErrors ? v.if(u, () => {
          for (const m of _)
            (0, o.checkReportMissingProp)(f, m);
        }) : (v.if((0, t._)`${u} && (${(0, o.checkMissingProp)(f, _, b)})`), (0, o.reportMissingProp)(f, b), v.else());
      }
    }
    e.validatePropertyDeps = i;
    function a(f, g = f.schema) {
      const { gen: v, data: w, keyword: S, it: b } = f, E = v.name("valid");
      for (const _ in g)
        (0, n.alwaysValidSchema)(b, g[_]) || (v.if(
          (0, o.propertyInData)(v, w, _, b.opts.ownProperties),
          () => {
            const u = f.subschema({ keyword: S, schemaProp: _ }, E);
            f.mergeValidEvaluated(u, E);
          },
          () => v.var(E, !0)
          // TODO var
        ), f.ok(E));
    }
    e.validateSchemaDeps = a, e.default = d;
  })(yr)), yr;
}
var St = {}, qn;
function Ds() {
  if (qn) return St;
  qn = 1, Object.defineProperty(St, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), o = {
    keyword: "propertyNames",
    type: "object",
    schemaType: ["object", "boolean"],
    error: {
      message: "property name must be valid",
      params: ({ params: d }) => (0, e._)`{propertyName: ${d.propertyName}}`
    },
    code(d) {
      const { gen: r, schema: i, data: a, it: f } = d;
      if ((0, t.alwaysValidSchema)(f, i))
        return;
      const g = r.name("valid");
      r.forIn("key", a, (v) => {
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
  return St.default = o, St;
}
var Et = {}, Dn;
function Oo() {
  if (Dn) return Et;
  Dn = 1, Object.defineProperty(Et, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ be(), t = /* @__PURE__ */ G(), n = /* @__PURE__ */ _e(), o = /* @__PURE__ */ X(), r = {
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
      const { gen: a, schema: f, parentSchema: g, data: v, errsCount: w, it: S } = i;
      if (!w)
        throw new Error("ajv implementation error");
      const { allErrors: b, opts: E } = S;
      if (S.props = !0, E.removeAdditional !== "all" && (0, o.alwaysValidSchema)(S, f))
        return;
      const _ = (0, e.allSchemaProperties)(g.properties), u = (0, e.allSchemaProperties)(g.patternProperties);
      m(), i.ok((0, t._)`${w} === ${n.default.errors}`);
      function m() {
        a.forIn("key", v, (c) => {
          !_.length && !u.length ? $(c) : a.if(l(c), () => $(c));
        });
      }
      function l(c) {
        let p;
        if (_.length > 8) {
          const k = (0, o.schemaRefOrVal)(S, g.properties, "properties");
          p = (0, e.isOwnProperty)(a, k, c);
        } else _.length ? p = (0, t.or)(..._.map((k) => (0, t._)`${c} === ${k}`)) : p = t.nil;
        return u.length && (p = (0, t.or)(p, ...u.map((k) => (0, t._)`${(0, e.usePattern)(i, k)}.test(${c})`))), (0, t.not)(p);
      }
      function h(c) {
        a.code((0, t._)`delete ${v}[${c}]`);
      }
      function $(c) {
        if (E.removeAdditional === "all" || E.removeAdditional && f === !1) {
          h(c);
          return;
        }
        if (f === !1) {
          i.setParams({ additionalProperty: c }), i.error(), b || a.break();
          return;
        }
        if (typeof f == "object" && !(0, o.alwaysValidSchema)(S, f)) {
          const p = a.name("valid");
          E.removeAdditional === "failing" ? (s(c, p, !1), a.if((0, t.not)(p), () => {
            i.reset(), h(c);
          })) : (s(c, p), b || a.if((0, t.not)(p), () => a.break()));
        }
      }
      function s(c, p, k) {
        const C = {
          keyword: "additionalProperties",
          dataProp: c,
          dataPropType: o.Type.Str
        };
        k === !1 && Object.assign(C, {
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }), i.subschema(C, p);
      }
    }
  };
  return Et.default = r, Et;
}
var Pt = {}, Vn;
function Vs() {
  if (Vn) return Pt;
  Vn = 1, Object.defineProperty(Pt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ tr(), t = /* @__PURE__ */ be(), n = /* @__PURE__ */ X(), o = /* @__PURE__ */ Oo(), d = {
    keyword: "properties",
    type: "object",
    schemaType: "object",
    code(r) {
      const { gen: i, schema: a, parentSchema: f, data: g, it: v } = r;
      v.opts.removeAdditional === "all" && f.additionalProperties === void 0 && o.default.code(new e.KeywordCxt(v, o.default, "additionalProperties"));
      const w = (0, t.allSchemaProperties)(a);
      for (const u of w)
        v.definedProperties.add(u);
      v.opts.unevaluated && w.length && v.props !== !0 && (v.props = n.mergeEvaluated.props(i, (0, n.toHash)(w), v.props));
      const S = w.filter((u) => !(0, n.alwaysValidSchema)(v, a[u]));
      if (S.length === 0)
        return;
      const b = i.name("valid");
      for (const u of S)
        E(u) ? _(u) : (i.if((0, t.propertyInData)(i, g, u, v.opts.ownProperties)), _(u), v.allErrors || i.else().var(b, !0), i.endIf()), r.it.definedProperties.add(u), r.ok(b);
      function E(u) {
        return v.opts.useDefaults && !v.compositeRule && a[u].default !== void 0;
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
  return Pt.default = d, Pt;
}
var kt = {}, Fn;
function Fs() {
  if (Fn) return kt;
  Fn = 1, Object.defineProperty(kt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ be(), t = /* @__PURE__ */ G(), n = /* @__PURE__ */ X(), o = /* @__PURE__ */ X(), d = {
    keyword: "patternProperties",
    type: "object",
    schemaType: "object",
    code(r) {
      const { gen: i, schema: a, data: f, parentSchema: g, it: v } = r, { opts: w } = v, S = (0, e.allSchemaProperties)(a), b = S.filter(($) => (0, n.alwaysValidSchema)(v, a[$]));
      if (S.length === 0 || b.length === S.length && (!v.opts.unevaluated || v.props === !0))
        return;
      const E = w.strictSchema && !w.allowMatchingProperties && g.properties, _ = i.name("valid");
      v.props !== !0 && !(v.props instanceof t.Name) && (v.props = (0, o.evaluatedPropsToName)(i, v.props));
      const { props: u } = v;
      m();
      function m() {
        for (const $ of S)
          E && l($), v.allErrors ? h($) : (i.var(_, !0), h($), i.if(_));
      }
      function l($) {
        for (const s in E)
          new RegExp($).test(s) && (0, n.checkStrictMode)(v, `property ${s} matches pattern ${$} (use allowMatchingProperties)`);
      }
      function h($) {
        i.forIn("key", f, (s) => {
          i.if((0, t._)`${(0, e.usePattern)(r, $)}.test(${s})`, () => {
            const c = b.includes($);
            c || r.subschema({
              keyword: "patternProperties",
              schemaProp: $,
              dataProp: s,
              dataPropType: o.Type.Str
            }, _), v.opts.unevaluated && u !== !0 ? i.assign((0, t._)`${u}[${s}]`, !0) : !c && !v.allErrors && i.if((0, t.not)(_), () => i.break());
          });
        });
      }
    }
  };
  return kt.default = d, kt;
}
var Ct = {}, Bn;
function Bs() {
  if (Bn) return Ct;
  Bn = 1, Object.defineProperty(Ct, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ X(), t = {
    keyword: "not",
    schemaType: ["object", "boolean"],
    trackErrors: !0,
    code(n) {
      const { gen: o, schema: d, it: r } = n;
      if ((0, e.alwaysValidSchema)(r, d)) {
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
  return Ct.default = t, Ct;
}
var Rt = {}, Ln;
function Ls() {
  if (Ln) return Rt;
  Ln = 1, Object.defineProperty(Rt, "__esModule", { value: !0 });
  const t = {
    keyword: "anyOf",
    schemaType: "array",
    trackErrors: !0,
    code: (/* @__PURE__ */ be()).validateUnion,
    error: { message: "must match a schema in anyOf" }
  };
  return Rt.default = t, Rt;
}
var Nt = {}, Un;
function Us() {
  if (Un) return Nt;
  Un = 1, Object.defineProperty(Nt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), o = {
    keyword: "oneOf",
    schemaType: "array",
    trackErrors: !0,
    error: {
      message: "must match exactly one schema in oneOf",
      params: ({ params: d }) => (0, e._)`{passingSchemas: ${d.passing}}`
    },
    code(d) {
      const { gen: r, schema: i, parentSchema: a, it: f } = d;
      if (!Array.isArray(i))
        throw new Error("ajv implementation error");
      if (f.opts.discriminator && a.discriminator)
        return;
      const g = i, v = r.let("valid", !1), w = r.let("passing", null), S = r.name("_valid");
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
  return Nt.default = o, Nt;
}
var At = {}, Kn;
function Ks() {
  if (Kn) return At;
  Kn = 1, Object.defineProperty(At, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ X(), t = {
    keyword: "allOf",
    schemaType: "array",
    code(n) {
      const { gen: o, schema: d, it: r } = n;
      if (!Array.isArray(d))
        throw new Error("ajv implementation error");
      const i = o.name("valid");
      d.forEach((a, f) => {
        if ((0, e.alwaysValidSchema)(r, a))
          return;
        const g = n.subschema({ keyword: "allOf", schemaProp: f }, i);
        n.ok(i), n.mergeEvaluated(g);
      });
    }
  };
  return At.default = t, At;
}
var jt = {}, Hn;
function Hs() {
  if (Hn) return jt;
  Hn = 1, Object.defineProperty(jt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), o = {
    keyword: "if",
    schemaType: ["object", "boolean"],
    trackErrors: !0,
    error: {
      message: ({ params: r }) => (0, e.str)`must match "${r.ifClause}" schema`,
      params: ({ params: r }) => (0, e._)`{failingKeyword: ${r.ifClause}}`
    },
    code(r) {
      const { gen: i, parentSchema: a, it: f } = r;
      a.then === void 0 && a.else === void 0 && (0, t.checkStrictMode)(f, '"if" without "then" and "else" is ignored');
      const g = d(f, "then"), v = d(f, "else");
      if (!g && !v)
        return;
      const w = i.let("valid", !0), S = i.name("_valid");
      if (b(), r.reset(), g && v) {
        const _ = i.let("ifClause");
        r.setParams({ ifClause: _ }), i.if(S, E("then", _), E("else", _));
      } else g ? i.if(S, E("then")) : i.if((0, e.not)(S), E("else"));
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
          i.assign(w, S), r.mergeValidEvaluated(m, w), u ? i.assign(u, (0, e._)`${_}`) : r.setParams({ ifClause: _ });
        };
      }
    }
  };
  function d(r, i) {
    const a = r.schema[i];
    return a !== void 0 && !(0, t.alwaysValidSchema)(r, a);
  }
  return jt.default = o, jt;
}
var xt = {}, Gn;
function Gs() {
  if (Gn) return xt;
  Gn = 1, Object.defineProperty(xt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ X(), t = {
    keyword: ["then", "else"],
    schemaType: ["object", "boolean"],
    code({ keyword: n, parentSchema: o, it: d }) {
      o.if === void 0 && (0, e.checkStrictMode)(d, `"${n}" without "if" is ignored`);
    }
  };
  return xt.default = t, xt;
}
var Jn;
function Js() {
  if (Jn) return $t;
  Jn = 1, Object.defineProperty($t, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ jo(), t = /* @__PURE__ */ Is(), n = /* @__PURE__ */ xo(), o = /* @__PURE__ */ zs(), d = /* @__PURE__ */ qs(), r = /* @__PURE__ */ Ar(), i = /* @__PURE__ */ Ds(), a = /* @__PURE__ */ Oo(), f = /* @__PURE__ */ Vs(), g = /* @__PURE__ */ Fs(), v = /* @__PURE__ */ Bs(), w = /* @__PURE__ */ Ls(), S = /* @__PURE__ */ Us(), b = /* @__PURE__ */ Ks(), E = /* @__PURE__ */ Hs(), _ = /* @__PURE__ */ Gs();
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
      i.default,
      a.default,
      r.default,
      f.default,
      g.default
    ];
    return m ? l.push(t.default, o.default) : l.push(e.default, n.default), l.push(d.default), l;
  }
  return $t.default = u, $t;
}
var Ot = {}, De = {}, Wn;
function To() {
  if (Wn) return De;
  Wn = 1, Object.defineProperty(De, "__esModule", { value: !0 }), De.dynamicAnchor = void 0;
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ _e(), n = /* @__PURE__ */ nr(), o = /* @__PURE__ */ Rr(), d = {
    keyword: "$dynamicAnchor",
    schemaType: "string",
    code: (a) => r(a, a.schema)
  };
  function r(a, f) {
    const { gen: g, it: v } = a;
    v.schemaEnv.root.dynamicAnchors[f] = !0;
    const w = (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(f)}`, S = v.errSchemaPath === "#" ? v.validateName : i(a);
    g.if((0, e._)`!${w}`, () => g.assign(w, S));
  }
  De.dynamicAnchor = r;
  function i(a) {
    const { schemaEnv: f, schema: g, self: v } = a.it, { root: w, baseId: S, localRefs: b, meta: E } = f.root, { schemaId: _ } = v.opts, u = new n.SchemaEnv({ schema: g, schemaId: _, root: w, baseId: S, localRefs: b, meta: E });
    return n.compileSchema.call(v, u), (0, o.getValidate)(a, u);
  }
  return De.default = d, De;
}
var Ve = {}, Yn;
function Mo() {
  if (Yn) return Ve;
  Yn = 1, Object.defineProperty(Ve, "__esModule", { value: !0 }), Ve.dynamicRef = void 0;
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ _e(), n = /* @__PURE__ */ Rr(), o = {
    keyword: "$dynamicRef",
    schemaType: "string",
    code: (r) => d(r, r.schema)
  };
  function d(r, i) {
    const { gen: a, keyword: f, it: g } = r;
    if (i[0] !== "#")
      throw new Error(`"${f}" only supports hash fragment reference`);
    const v = i.slice(1);
    if (g.allErrors)
      w();
    else {
      const b = a.let("valid", !1);
      w(b), r.ok(b);
    }
    function w(b) {
      if (g.schemaEnv.root.dynamicAnchors[v]) {
        const E = a.let("_v", (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(v)}`);
        a.if(E, S(E, b), S(g.validateName, b));
      } else
        S(g.validateName, b)();
    }
    function S(b, E) {
      return E ? () => a.block(() => {
        (0, n.callRef)(r, b), a.let(E, !0);
      }) : () => (0, n.callRef)(r, b);
    }
  }
  return Ve.dynamicRef = d, Ve.default = o, Ve;
}
var Tt = {}, Xn;
function Ws() {
  if (Xn) return Tt;
  Xn = 1, Object.defineProperty(Tt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ To(), t = /* @__PURE__ */ X(), n = {
    keyword: "$recursiveAnchor",
    schemaType: "boolean",
    code(o) {
      o.schema ? (0, e.dynamicAnchor)(o, "") : (0, t.checkStrictMode)(o.it, "$recursiveAnchor: false is ignored");
    }
  };
  return Tt.default = n, Tt;
}
var Mt = {}, Zn;
function Ys() {
  if (Zn) return Mt;
  Zn = 1, Object.defineProperty(Mt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Mo(), t = {
    keyword: "$recursiveRef",
    schemaType: "string",
    code: (n) => (0, e.dynamicRef)(n, n.schema)
  };
  return Mt.default = t, Mt;
}
var Qn;
function Xs() {
  if (Qn) return Ot;
  Qn = 1, Object.defineProperty(Ot, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ To(), t = /* @__PURE__ */ Mo(), n = /* @__PURE__ */ Ws(), o = /* @__PURE__ */ Ys(), d = [e.default, t.default, n.default, o.default];
  return Ot.default = d, Ot;
}
var It = {}, zt = {}, eo;
function Zs() {
  if (eo) return zt;
  eo = 1, Object.defineProperty(zt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ar(), t = {
    keyword: "dependentRequired",
    type: "object",
    schemaType: "object",
    error: e.error,
    code: (n) => (0, e.validatePropertyDeps)(n)
  };
  return zt.default = t, zt;
}
var qt = {}, to;
function Qs() {
  if (to) return qt;
  to = 1, Object.defineProperty(qt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ar(), t = {
    keyword: "dependentSchemas",
    type: "object",
    schemaType: "object",
    code: (n) => (0, e.validateSchemaDeps)(n)
  };
  return qt.default = t, qt;
}
var Dt = {}, ro;
function ei() {
  if (ro) return Dt;
  ro = 1, Object.defineProperty(Dt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ X(), t = {
    keyword: ["maxContains", "minContains"],
    type: "array",
    schemaType: "number",
    code({ keyword: n, parentSchema: o, it: d }) {
      o.contains === void 0 && (0, e.checkStrictMode)(d, `"${n}" without "contains" is ignored`);
    }
  };
  return Dt.default = t, Dt;
}
var no;
function ti() {
  if (no) return It;
  no = 1, Object.defineProperty(It, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Zs(), t = /* @__PURE__ */ Qs(), n = /* @__PURE__ */ ei(), o = [e.default, t.default, n.default];
  return It.default = o, It;
}
var Vt = {}, Ft = {}, oo;
function ri() {
  if (oo) return Ft;
  oo = 1, Object.defineProperty(Ft, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), n = /* @__PURE__ */ _e(), d = {
    keyword: "unevaluatedProperties",
    type: "object",
    schemaType: ["boolean", "object"],
    trackErrors: !0,
    error: {
      message: "must NOT have unevaluated properties",
      params: ({ params: r }) => (0, e._)`{unevaluatedProperty: ${r.unevaluatedProperty}}`
    },
    code(r) {
      const { gen: i, schema: a, data: f, errsCount: g, it: v } = r;
      if (!g)
        throw new Error("ajv implementation error");
      const { allErrors: w, props: S } = v;
      S instanceof e.Name ? i.if((0, e._)`${S} !== true`, () => i.forIn("key", f, (u) => i.if(E(S, u), () => b(u)))) : S !== !0 && i.forIn("key", f, (u) => S === void 0 ? b(u) : i.if(_(S, u), () => b(u))), v.props = !0, r.ok((0, e._)`${g} === ${n.default.errors}`);
      function b(u) {
        if (a === !1) {
          r.setParams({ unevaluatedProperty: u }), r.error(), w || i.break();
          return;
        }
        if (!(0, t.alwaysValidSchema)(v, a)) {
          const m = i.name("valid");
          r.subschema({
            keyword: "unevaluatedProperties",
            dataProp: u,
            dataPropType: t.Type.Str
          }, m), w || i.if((0, e.not)(m), () => i.break());
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
  return Ft.default = d, Ft;
}
var Bt = {}, so;
function ni() {
  if (so) return Bt;
  so = 1, Object.defineProperty(Bt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ X(), o = {
    keyword: "unevaluatedItems",
    type: "array",
    schemaType: ["boolean", "object"],
    error: {
      message: ({ params: { len: d } }) => (0, e.str)`must NOT have more than ${d} items`,
      params: ({ params: { len: d } }) => (0, e._)`{limit: ${d}}`
    },
    code(d) {
      const { gen: r, schema: i, data: a, it: f } = d, g = f.items || 0;
      if (g === !0)
        return;
      const v = r.const("len", (0, e._)`${a}.length`);
      if (i === !1)
        d.setParams({ len: g }), d.fail((0, e._)`${v} > ${g}`);
      else if (typeof i == "object" && !(0, t.alwaysValidSchema)(f, i)) {
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
  return Bt.default = o, Bt;
}
var io;
function oi() {
  if (io) return Vt;
  io = 1, Object.defineProperty(Vt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ri(), t = /* @__PURE__ */ ni(), n = [e.default, t.default];
  return Vt.default = n, Vt;
}
var Lt = {}, Ut = {}, ao;
function si() {
  if (ao) return Ut;
  ao = 1, Object.defineProperty(Ut, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), n = {
    keyword: "format",
    type: ["number", "string"],
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: o }) => (0, e.str)`must match format "${o}"`,
      params: ({ schemaCode: o }) => (0, e._)`{format: ${o}}`
    },
    code(o, d) {
      const { gen: r, data: i, $data: a, schema: f, schemaCode: g, it: v } = o, { opts: w, errSchemaPath: S, schemaEnv: b, self: E } = v;
      if (!w.validateFormats)
        return;
      a ? _() : u();
      function _() {
        const m = r.scopeValue("formats", {
          ref: E.formats,
          code: w.code.formats
        }), l = r.const("fDef", (0, e._)`${m}[${g}]`), h = r.let("fType"), $ = r.let("format");
        r.if((0, e._)`typeof ${l} == "object" && !(${l} instanceof RegExp)`, () => r.assign(h, (0, e._)`${l}.type || "string"`).assign($, (0, e._)`${l}.validate`), () => r.assign(h, (0, e._)`"string"`).assign($, l)), o.fail$data((0, e.or)(s(), c()));
        function s() {
          return w.strictSchema === !1 ? e.nil : (0, e._)`${g} && !${$}`;
        }
        function c() {
          const p = b.$async ? (0, e._)`(${l}.async ? await ${$}(${i}) : ${$}(${i}))` : (0, e._)`${$}(${i})`, k = (0, e._)`(typeof ${$} == "function" ? ${p} : ${$}.test(${i}))`;
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
        l === d && o.pass(p());
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
            return (0, e._)`await ${$}(${i})`;
          }
          return typeof h == "function" ? (0, e._)`${$}(${i})` : (0, e._)`${$}.test(${i})`;
        }
      }
    }
  };
  return Ut.default = n, Ut;
}
var co;
function ii() {
  if (co) return Lt;
  co = 1, Object.defineProperty(Lt, "__esModule", { value: !0 });
  const t = [(/* @__PURE__ */ si()).default];
  return Lt.default = t, Lt;
}
var je = {}, lo;
function ai() {
  return lo || (lo = 1, Object.defineProperty(je, "__esModule", { value: !0 }), je.contentVocabulary = je.metadataVocabulary = void 0, je.metadataVocabulary = [
    "title",
    "description",
    "default",
    "deprecated",
    "readOnly",
    "writeOnly",
    "examples"
  ], je.contentVocabulary = [
    "contentMediaType",
    "contentEncoding",
    "contentSchema"
  ]), je;
}
var uo;
function ci() {
  if (uo) return nt;
  uo = 1, Object.defineProperty(nt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ss(), t = /* @__PURE__ */ Ms(), n = /* @__PURE__ */ Js(), o = /* @__PURE__ */ Xs(), d = /* @__PURE__ */ ti(), r = /* @__PURE__ */ oi(), i = /* @__PURE__ */ ii(), a = /* @__PURE__ */ ai(), f = [
    o.default,
    e.default,
    t.default,
    (0, n.default)(!0),
    i.default,
    a.metadataVocabulary,
    a.contentVocabulary,
    d.default,
    r.default
  ];
  return nt.default = f, nt;
}
var Kt = {}, Je = {}, fo;
function li() {
  if (fo) return Je;
  fo = 1, Object.defineProperty(Je, "__esModule", { value: !0 }), Je.DiscrError = void 0;
  var e;
  return (function(t) {
    t.Tag = "tag", t.Mapping = "mapping";
  })(e || (Je.DiscrError = e = {})), Je;
}
var po;
function di() {
  if (po) return Kt;
  po = 1, Object.defineProperty(Kt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ G(), t = /* @__PURE__ */ li(), n = /* @__PURE__ */ nr(), o = /* @__PURE__ */ rr(), d = /* @__PURE__ */ X(), i = {
    keyword: "discriminator",
    type: "object",
    schemaType: "object",
    error: {
      message: ({ params: { discrError: a, tagName: f } }) => a === t.DiscrError.Tag ? `tag "${f}" must be string` : `value of tag "${f}" must be in oneOf`,
      params: ({ params: { discrError: a, tag: f, tagName: g } }) => (0, e._)`{error: ${a}, tag: ${g}, tagValue: ${f}}`
    },
    code(a) {
      const { gen: f, data: g, schema: v, parentSchema: w, it: S } = a, { oneOf: b } = w;
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
      f.if((0, e._)`typeof ${u} == "string"`, () => m(), () => a.error(!1, { discrError: t.DiscrError.Tag, tag: u, tagName: E })), a.ok(_);
      function m() {
        const $ = h();
        f.if(!1);
        for (const s in $)
          f.elseIf((0, e._)`${u} === ${s}`), f.assign(_, l($[s]));
        f.else(), a.error(!1, { discrError: t.DiscrError.Mapping, tag: u, tagName: E }), f.endIf();
      }
      function l($) {
        const s = f.name("valid"), c = a.subschema({ keyword: "oneOf", schemaProp: $ }, s);
        return a.mergeEvaluated(c, e.Name), s;
      }
      function h() {
        var $;
        const s = {}, c = k(w);
        let p = !0;
        for (let T = 0; T < b.length; T++) {
          let O = b[T];
          if (O?.$ref && !(0, d.schemaHasRulesButRef)(O, S.self.RULES)) {
            const L = O.$ref;
            if (O = n.resolveRef.call(S.self, S.schemaEnv.root, S.baseId, L), O instanceof n.SchemaEnv && (O = O.schema), O === void 0)
              throw new o.default(S.opts.uriResolver, S.baseId, L);
          }
          const z = ($ = O?.properties) === null || $ === void 0 ? void 0 : $[E];
          if (typeof z != "object")
            throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${E}"`);
          p = p && (c || k(O)), C(z, T);
        }
        if (!p)
          throw new Error(`discriminator: "${E}" must be required`);
        return s;
        function k({ required: T }) {
          return Array.isArray(T) && T.includes(E);
        }
        function C(T, O) {
          if (T.const)
            N(T.const, O);
          else if (T.enum)
            for (const z of T.enum)
              N(z, O);
          else
            throw new Error(`discriminator: "properties/${E}" must have "const" or "enum"`);
        }
        function N(T, O) {
          if (typeof T != "string" || T in s)
            throw new Error(`discriminator: "${E}" values must be unique strings`);
          s[T] = O;
        }
      }
    }
  };
  return Kt.default = i, Kt;
}
var Ht = {};
const ui = "https://json-schema.org/draft/2020-12/schema", fi = "https://json-schema.org/draft/2020-12/schema", pi = { "https://json-schema.org/draft/2020-12/vocab/core": !0, "https://json-schema.org/draft/2020-12/vocab/applicator": !0, "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0, "https://json-schema.org/draft/2020-12/vocab/validation": !0, "https://json-schema.org/draft/2020-12/vocab/meta-data": !0, "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0, "https://json-schema.org/draft/2020-12/vocab/content": !0 }, hi = "meta", mi = "Core and Validation specifications meta-schema", yi = [{ $ref: "meta/core" }, { $ref: "meta/applicator" }, { $ref: "meta/unevaluated" }, { $ref: "meta/validation" }, { $ref: "meta/meta-data" }, { $ref: "meta/format-annotation" }, { $ref: "meta/content" }], gi = ["object", "boolean"], vi = "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.", $i = { definitions: { $comment: '"definitions" has been replaced by "$defs".', type: "object", additionalProperties: { $dynamicRef: "#meta" }, deprecated: !0, default: {} }, dependencies: { $comment: '"dependencies" has been split and replaced by "dependentSchemas" and "dependentRequired" in order to serve their differing semantics.', type: "object", additionalProperties: { anyOf: [{ $dynamicRef: "#meta" }, { $ref: "meta/validation#/$defs/stringArray" }] }, deprecated: !0, default: {} }, $recursiveAnchor: { $comment: '"$recursiveAnchor" has been replaced by "$dynamicAnchor".', $ref: "meta/core#/$defs/anchorString", deprecated: !0 }, $recursiveRef: { $comment: '"$recursiveRef" has been replaced by "$dynamicRef".', $ref: "meta/core#/$defs/uriReferenceString", deprecated: !0 } }, _i = {
  $schema: ui,
  $id: fi,
  $vocabulary: pi,
  $dynamicAnchor: hi,
  title: mi,
  allOf: yi,
  type: gi,
  $comment: vi,
  properties: $i
}, bi = "https://json-schema.org/draft/2020-12/schema", wi = "https://json-schema.org/draft/2020-12/meta/applicator", Si = { "https://json-schema.org/draft/2020-12/vocab/applicator": !0 }, Ei = "meta", Pi = "Applicator vocabulary meta-schema", ki = ["object", "boolean"], Ci = { prefixItems: { $ref: "#/$defs/schemaArray" }, items: { $dynamicRef: "#meta" }, contains: { $dynamicRef: "#meta" }, additionalProperties: { $dynamicRef: "#meta" }, properties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, propertyNames: { format: "regex" }, default: {} }, dependentSchemas: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, propertyNames: { $dynamicRef: "#meta" }, if: { $dynamicRef: "#meta" }, then: { $dynamicRef: "#meta" }, else: { $dynamicRef: "#meta" }, allOf: { $ref: "#/$defs/schemaArray" }, anyOf: { $ref: "#/$defs/schemaArray" }, oneOf: { $ref: "#/$defs/schemaArray" }, not: { $dynamicRef: "#meta" } }, Ri = { schemaArray: { type: "array", minItems: 1, items: { $dynamicRef: "#meta" } } }, Ni = {
  $schema: bi,
  $id: wi,
  $vocabulary: Si,
  $dynamicAnchor: Ei,
  title: Pi,
  type: ki,
  properties: Ci,
  $defs: Ri
}, Ai = "https://json-schema.org/draft/2020-12/schema", ji = "https://json-schema.org/draft/2020-12/meta/unevaluated", xi = { "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0 }, Oi = "meta", Ti = "Unevaluated applicator vocabulary meta-schema", Mi = ["object", "boolean"], Ii = { unevaluatedItems: { $dynamicRef: "#meta" }, unevaluatedProperties: { $dynamicRef: "#meta" } }, zi = {
  $schema: Ai,
  $id: ji,
  $vocabulary: xi,
  $dynamicAnchor: Oi,
  title: Ti,
  type: Mi,
  properties: Ii
}, qi = "https://json-schema.org/draft/2020-12/schema", Di = "https://json-schema.org/draft/2020-12/meta/content", Vi = { "https://json-schema.org/draft/2020-12/vocab/content": !0 }, Fi = "meta", Bi = "Content vocabulary meta-schema", Li = ["object", "boolean"], Ui = { contentEncoding: { type: "string" }, contentMediaType: { type: "string" }, contentSchema: { $dynamicRef: "#meta" } }, Ki = {
  $schema: qi,
  $id: Di,
  $vocabulary: Vi,
  $dynamicAnchor: Fi,
  title: Bi,
  type: Li,
  properties: Ui
}, Hi = "https://json-schema.org/draft/2020-12/schema", Gi = "https://json-schema.org/draft/2020-12/meta/core", Ji = { "https://json-schema.org/draft/2020-12/vocab/core": !0 }, Wi = "meta", Yi = "Core vocabulary meta-schema", Xi = ["object", "boolean"], Zi = { $id: { $ref: "#/$defs/uriReferenceString", $comment: "Non-empty fragments not allowed.", pattern: "^[^#]*#?$" }, $schema: { $ref: "#/$defs/uriString" }, $ref: { $ref: "#/$defs/uriReferenceString" }, $anchor: { $ref: "#/$defs/anchorString" }, $dynamicRef: { $ref: "#/$defs/uriReferenceString" }, $dynamicAnchor: { $ref: "#/$defs/anchorString" }, $vocabulary: { type: "object", propertyNames: { $ref: "#/$defs/uriString" }, additionalProperties: { type: "boolean" } }, $comment: { type: "string" }, $defs: { type: "object", additionalProperties: { $dynamicRef: "#meta" } } }, Qi = { anchorString: { type: "string", pattern: "^[A-Za-z_][-A-Za-z0-9._]*$" }, uriString: { type: "string", format: "uri" }, uriReferenceString: { type: "string", format: "uri-reference" } }, ea = {
  $schema: Hi,
  $id: Gi,
  $vocabulary: Ji,
  $dynamicAnchor: Wi,
  title: Yi,
  type: Xi,
  properties: Zi,
  $defs: Qi
}, ta = "https://json-schema.org/draft/2020-12/schema", ra = "https://json-schema.org/draft/2020-12/meta/format-annotation", na = { "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0 }, oa = "meta", sa = "Format vocabulary meta-schema for annotation results", ia = ["object", "boolean"], aa = { format: { type: "string" } }, ca = {
  $schema: ta,
  $id: ra,
  $vocabulary: na,
  $dynamicAnchor: oa,
  title: sa,
  type: ia,
  properties: aa
}, la = "https://json-schema.org/draft/2020-12/schema", da = "https://json-schema.org/draft/2020-12/meta/meta-data", ua = { "https://json-schema.org/draft/2020-12/vocab/meta-data": !0 }, fa = "meta", pa = "Meta-data vocabulary meta-schema", ha = ["object", "boolean"], ma = { title: { type: "string" }, description: { type: "string" }, default: !0, deprecated: { type: "boolean", default: !1 }, readOnly: { type: "boolean", default: !1 }, writeOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 } }, ya = {
  $schema: la,
  $id: da,
  $vocabulary: ua,
  $dynamicAnchor: fa,
  title: pa,
  type: ha,
  properties: ma
}, ga = "https://json-schema.org/draft/2020-12/schema", va = "https://json-schema.org/draft/2020-12/meta/validation", $a = { "https://json-schema.org/draft/2020-12/vocab/validation": !0 }, _a = "meta", ba = "Validation vocabulary meta-schema", wa = ["object", "boolean"], Sa = { type: { anyOf: [{ $ref: "#/$defs/simpleTypes" }, { type: "array", items: { $ref: "#/$defs/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, const: !0, enum: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/$defs/nonNegativeInteger" }, minLength: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, maxItems: { $ref: "#/$defs/nonNegativeInteger" }, minItems: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, maxContains: { $ref: "#/$defs/nonNegativeInteger" }, minContains: { $ref: "#/$defs/nonNegativeInteger", default: 1 }, maxProperties: { $ref: "#/$defs/nonNegativeInteger" }, minProperties: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, required: { $ref: "#/$defs/stringArray" }, dependentRequired: { type: "object", additionalProperties: { $ref: "#/$defs/stringArray" } } }, Ea = { nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { $ref: "#/$defs/nonNegativeInteger", default: 0 }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, Pa = {
  $schema: ga,
  $id: va,
  $vocabulary: $a,
  $dynamicAnchor: _a,
  title: ba,
  type: wa,
  properties: Sa,
  $defs: Ea
};
var ho;
function ka() {
  if (ho) return Ht;
  ho = 1, Object.defineProperty(Ht, "__esModule", { value: !0 });
  const e = _i, t = Ni, n = zi, o = Ki, d = ea, r = ca, i = ya, a = Pa, f = ["/properties"];
  function g(v) {
    return [
      e,
      t,
      n,
      o,
      d,
      w(this, r),
      i,
      w(this, a)
    ].forEach((S) => this.addMetaSchema(S, void 0, !1)), this;
    function w(S, b) {
      return v ? S.$dataMetaSchema(b, f) : b;
    }
  }
  return Ht.default = g, Ht;
}
var mo;
function Ca() {
  return mo || (mo = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv2020 = void 0;
    const n = /* @__PURE__ */ bs(), o = /* @__PURE__ */ ci(), d = /* @__PURE__ */ di(), r = /* @__PURE__ */ ka(), i = "https://json-schema.org/draft/2020-12/schema";
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
        super._addVocabularies(), o.default.forEach((b) => this.addVocabulary(b)), this.opts.discriminator && this.addKeyword(d.default);
      }
      _addDefaultMetaSchema() {
        super._addDefaultMetaSchema();
        const { $data: b, meta: E } = this.opts;
        E && (r.default.call(this, b), this.refs["http://json-schema.org/schema"] = i);
      }
      defaultMeta() {
        return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(i) ? i : void 0);
      }
    }
    t.Ajv2020 = a, e.exports = t = a, e.exports.Ajv2020 = a, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = a;
    var f = /* @__PURE__ */ tr();
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
    var w = /* @__PURE__ */ rr();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return w.default;
    } });
  })(Ze, Ze.exports)), Ze.exports;
}
var Ra = /* @__PURE__ */ Ca();
const Na = /* @__PURE__ */ ss(Ra), Aa = "https://json-schema.org/draft/2020-12/schema", ja = "https://raw.githubusercontent.com/omsf-eco-infra/gufe-viz/main/schema/gufe-viz.schema.json", xa = "gufe-viz payload", Oa = "Python-to-TypeScript contract bridge for gufe visualizations. Source of truth both languages are downstream of it. This schema is not strictly versioned or published as it is only internally consumed by this codebase. Schema description: one schema object per gufe class: every $def named *Viz is the visualization form of exactly one GufeTokenizable, it carries that object's `gufe-key`. Every reference from one gufe object to another is that object's gufe key, and the objects themselves live in the `registry` on the root payload. So a ligand network's nodes are keys, a chemical system's components and a transformation's protocol are keys and each one resolves to a complete, drawable object. An alchemical network whose forty systems share one protein carries that PDB once and points at it forty times, and the browser can still drill into it, because what it points at is a whole ProteinComponentViz. This is a single-shot dump rather than a conversation with a server, so the registry travels with the payload.", Ta = [{ $ref: "#/$defs/SmallMoleculeComponentViz" }, { $ref: "#/$defs/ProteinComponentViz" }, { $ref: "#/$defs/SolvatedPDBComponentViz" }, { $ref: "#/$defs/ProteinMembraneComponentViz" }, { $ref: "#/$defs/SolventComponentViz" }, { $ref: "#/$defs/UnknownComponentViz" }, { $ref: "#/$defs/ProtocolViz" }, { $ref: "#/$defs/LigandAtomMappingViz" }, { $ref: "#/$defs/LigandNetworkViz" }, { $ref: "#/$defs/ChemicalSystemViz" }, { $ref: "#/$defs/TransformationViz" }, { $ref: "#/$defs/AlchemicalNetworkViz" }], Ma = /* @__PURE__ */ JSON.parse('{"GufeKey":{"title":"GufeKey","description":"A gufe key: the identity of a GufeTokenizable, of the form \'ClassName-<hex digest>\'. It is deterministic and repeatable within a software environment. Only its non-emptiness is checked","type":"string","minLength":1},"ComponentKey":{"title":"ComponentKey","description":"A gufe key naming a ComponentViz in the registry. Identical to GufeKey at validation time: JSON Schema has no way to say \'this string is the gufe-key of an entry in that array, and that entry has this type\', because that is a join across two parts of the document. What the name buys is that the referent\'s type is stated in the contract and carried into the generated TypeScript, instead of living only in a test and a view.","$ref":"#/$defs/GufeKey"},"SmallMoleculeComponentKey":{"title":"SmallMoleculeComponentKey","description":"A gufe key naming a SmallMoleculeComponentViz in the registry. Resolving it yields the whole molecule, SDF included. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ChemicalSystemKey":{"title":"ChemicalSystemKey","description":"A gufe key naming a ChemicalSystemViz in the registry. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ProtocolKey":{"title":"ProtocolKey","description":"A gufe key naming a ProtocolViz in the registry. Every transformation of a network usually names the same one. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"Registry":{"title":"Registry","description":"The pool of gufe objects this payload refers to by key, each a complete payload object in its own right. Entries are unique by `gufe-key` and sorted by (type, gufe-key) so a committed fixture is byte-stable. JSON Schema cannot express \'unique by a property\' or \'every reference resolves\', so both are covered by tests on the Python side and degraded over by the views.","type":"array","items":{"oneOf":[{"$ref":"#/$defs/ComponentViz"},{"$ref":"#/$defs/ProtocolViz"},{"$ref":"#/$defs/ChemicalSystemViz"}]}},"ComponentViz":{"title":"ComponentViz","description":"Any single chemical-system component","oneOf":[{"$ref":"#/$defs/SmallMoleculeComponentViz"},{"$ref":"#/$defs/ProteinComponentViz"},{"$ref":"#/$defs/SolvatedPDBComponentViz"},{"$ref":"#/$defs/ProteinMembraneComponentViz"},{"$ref":"#/$defs/SolventComponentViz"},{"$ref":"#/$defs/UnknownComponentViz"}]},"SmallMoleculeComponentViz":{"title":"SmallMoleculeComponentViz","description":"A small molecule, carried as a complete SDF record.","type":"object","properties":{"type":{"const":"SmallMoleculeComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"sdf":{"type":"string","minLength":1,"description":"Complete inline SDF record, including the conformer."},"smiles":{"type":"string"},"total_charge":{"type":"integer","description":"Net formal charge. Displayed, never recomputed from the SDF."}},"required":["type","gufe-key","name","sdf","smiles","total_charge"],"additionalProperties":false},"ProteinComponentViz":{"title":"ProteinComponentViz","description":"A protein, carried as a complete PDB record.","type":"object","properties":{"type":{"const":"ProteinComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolvatedPDBComponentViz":{"title":"SolvatedPDBComponentViz","description":"A protein with explicit solvent. A distinct type rather than a flag on ProteinComponentViz, because the discriminator is what a view dispatches on and the presence of waters changes what a sensible default representation is.","type":"object","properties":{"type":{"const":"SolvatedPDBComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation, including explicit solvent."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"ProteinMembraneComponentViz":{"title":"ProteinMembraneComponentViz","description":"A protein embedded in a membrane.","type":"object","properties":{"type":{"const":"ProteinMembraneComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation of the protein and membrane system."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolventComponentViz":{"title":"SolventComponentViz","description":"Bulk solvent settings. There is no structure to draw, so these are flat fields suitable for rendering as a settings card.","type":"object","properties":{"type":{"const":"SolventComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"smiles":{"type":"string","minLength":1},"positive_ion":{"type":"string"},"negative_ion":{"type":"string"},"neutralize":{"type":"boolean"},"ion_concentration":{"type":"string","description":"Display-form concentration with units, for example \'0.15 molar\'. A string rather than a number because the unit is part of the value and the view only ever prints it."}},"required":["type","gufe-key","name","smiles","positive_ion","negative_ion","neutralize","ion_concentration"],"additionalProperties":false},"UnknownComponentViz":{"title":"UnknownComponentViz","description":"The graceful fallback for a component type this build does not recognize. gufe supports custom Component subclasses, so meeting one is an expected outcome rather than an error, and the browser answers it with \'sorry, there is no visualization for this\'. This covers an unrecognized type only: a recognized component whose serializer fails is a bug, and raises in Python rather than arriving here wearing a disguise.","type":"object","properties":{"type":{"const":"UnknownComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The gufe class name, so the panel can say which type it could not draw."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ProtocolViz":{"title":"ProtocolViz","description":"A gufe Protocol, named. Every transformation in an alchemical network usually shares one, so this is a registry entry that many edges point at rather than a class name repeated per edge. Settings are deliberately absent for now: they are large, deeply nested, and nothing draws them yet, adding a `settings` field later is additive and breaks nothing.","type":"object","properties":{"type":{"const":"ProtocolViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The Protocol\'s class name, which is what identifies it to a reader, a Protocol has no name of its own, so `name` is usually empty."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ChemicalSystemViz":{"title":"ChemicalSystemViz","description":"A gufe ChemicalSystem: labels mapped to the gufe keys of its components.","type":"object","properties":{"type":{"const":"ChemicalSystemViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"components":{"type":"object","description":"ChemicalSystem labels mapped to the gufe keys of the components in the registry.","additionalProperties":{"$ref":"#/$defs/ComponentKey"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","components"],"additionalProperties":false},"AtomMapping":{"title":"AtomMapping","description":"Atom index correspondence from molecule A to molecule B, as a list of index pairs. A list rather than an object keyed by A\'s index, because JSON object keys can only be strings: keying by index would put decimal strings such as \'12\' in the payload and leave both languages casting them back to integers, and it is Python\'s dict-of-int shape only by resemblance. As a list, both indices stay integers, and \'an entry has a B index for every A index\' becomes a `required` the schema states rather than a convention a reader has to trust. Pairs are ordered by `index_A` so a committed fixture is byte-stable.","type":"array","items":{"type":"object","properties":{"index_A":{"type":"integer","minimum":0,"description":"An atom index in molecule A."},"index_B":{"type":"integer","minimum":0,"description":"The atom index in molecule B that it maps to."}},"required":["index_A","index_B"],"additionalProperties":false}},"Annotations":{"title":"Annotations","description":"Free-form mapping metadata. gufe puts nothing here by design and every mapper picks its own keys, so this is deliberately open. Values are whatever survived being made JSON-safe. Displayed but never interpreted, with the single exception of \'score\'.","type":"object"},"LigandAtomMappingViz":{"title":"LigandAtomMappingViz","description":"One atom mapping between two small molecules. This is also what an edge of a ligand network is because the two endpoints are gufe keys either way: standalone they resolve in this object\'s own registry, and in a network they resolve in the network\'s, where they are the same entries the nodes name. `componentA` and `componentB` are the molecules the two sides of `componentA_to_componentB` index into: an `index_A` is an atom of the SmallMoleculeComponentViz that `componentA` names, and an `index_B` an atom of `componentB`\'s.","type":"object","properties":{"type":{"const":"LigandAtomMappingViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"componentA":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentB":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentA_to_componentB":{"$ref":"#/$defs/AtomMapping"},"score":{"type":["number","null"],"description":"The \'score\' annotation when it is a plain number, otherwise null. This is the one annotation key that is interpreted rather than displayed: it drives the edge colouring and the force layout\'s link distance."},"annotations":{"$ref":"#/$defs/Annotations"},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","componentA","componentB","componentA_to_componentB","score","annotations"],"additionalProperties":false},"LigandNetworkViz":{"title":"LigandNetworkViz","description":"A ligand network: the ligands in the registry, the nodes as keys into it, and the mappings as edges. Deliberately not gufe\'s GraphML: that format embeds a gufe to_json moldict per node, so forwarding it would relocate the decoding problem into the browser rather than avoid it.","type":"object","properties":{"type":{"const":"LigandNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ligand, resolved in `registry`.","items":{"$ref":"#/$defs/SmallMoleculeComponentKey"}},"edges":{"type":"array","description":"The mappings, whose `componentA` and `componentB` name nodes of this network. JSON Schema cannot express that referential constraint, so a Python test covers it, and the view drops a dangling edge with a banner rather than failing.","items":{"$ref":"#/$defs/LigandAtomMappingViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false},"TransformationViz":{"title":"TransformationViz","description":"A transformation between two chemical systems, both named by gufe key, as is its protocol: `stateA` is the system it starts from, `stateB` the one it ends at, and every edge of a network usually names the same protocol. This is also what an edge of an alchemical network is (there is no separate edge type) because `stateA` and `stateB` are keys either way, and in a network they are the keys the nodes name. NonTransformation uses this type too: it exposes the same stateA and stateB properties, both its single system, so it renders as a diff with no differences.","type":"object","properties":{"type":{"const":"TransformationViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"protocol":{"$ref":"#/$defs/ProtocolKey"},"stateA":{"$ref":"#/$defs/ChemicalSystemKey"},"stateB":{"$ref":"#/$defs/ChemicalSystemKey"},"mappings":{"type":"array","items":{"$ref":"#/$defs/LigandAtomMappingViz"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","protocol","stateA","stateB","mappings"],"additionalProperties":false},"AlchemicalNetworkViz":{"title":"AlchemicalNetworkViz","description":"A graph of chemical systems joined by transformations. What repeats here is not the nodes and edges themselves but what they are made of: in practice every system shares one protein and every transformation shares one protocol. Both live in the registry, once, as whole objects so this view can show composition and topology while still letting a reader open a node and see the protein.","type":"object","properties":{"type":{"const":"AlchemicalNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ChemicalSystem, resolved in `registry`.","items":{"$ref":"#/$defs/ChemicalSystemKey"}},"edges":{"type":"array","description":"The transformations, whose `stateA` and `stateB` name nodes of this network.","items":{"$ref":"#/$defs/TransformationViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false}}'), jr = {
  $schema: Aa,
  $id: ja,
  title: xa,
  description: Oa,
  oneOf: Ta,
  $defs: Ma
}, Ac = [
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
], xr = jr.$id, Or = new Na({ allErrors: !0, strict: !1 });
Or.addSchema(jr, xr);
const yo = Or.getSchema(xr), Io = Object.entries(jr.$defs).filter(
  ([e, t]) => t.properties?.type?.const === e
).map(([e]) => e).sort(), jc = Io, Tr = /* @__PURE__ */ new Map();
for (const e of Io) {
  const t = Or.getSchema(`${xr}#/$defs/${e}`);
  t && Tr.set(e, t);
}
const _r = { valid: !0, issues: [] };
function br(e) {
  return (e ?? []).map((t) => ({
    path: t.instancePath || "",
    message: t.keyword === "additionalProperties" ? `unknown property ${JSON.stringify(t.params.additionalProperty)}` : t.message ?? "is invalid"
  }));
}
function Ia(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return {
      valid: !1,
      issues: [{ path: "", message: "must be a JSON object" }]
    };
  const t = e.type, n = typeof t == "string" ? Tr.get(t) : void 0;
  return n ? n(e) ? _r : { valid: !1, issues: br(n.errors) } : yo(e) ? _r : { valid: !1, issues: br(yo.errors) };
}
function xc(e, t) {
  const n = Tr.get(e);
  return n ? n(t) ? _r : { valid: !1, issues: br(n.errors) } : {
    valid: !1,
    issues: [
      { path: "", message: `unknown payload type ${JSON.stringify(e)}` }
    ]
  };
}
function za(e, t = 8) {
  const n = e.slice(0, t).map((o) => `${o.path || "(root)"}: ${o.message}`);
  return e.length > t && n.push(`... and ${e.length - t} more`), n.join(`
`);
}
const Mr = {
  SmallMoleculeComponentViz: "gufe-small-molecule",
  ProteinComponentViz: "gufe-protein",
  LigandNetworkViz: "gufe-ligand-network",
  ChemicalSystemViz: "gufe-chemical-system",
  SolventComponentViz: "gufe-solvent",
  UnknownComponentViz: "gufe-unknown-component"
};
function zo(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return {
      message: "This does not look like a gufe-viz payload (expected a JSON object)."
    };
  const { type: t } = e;
  if (typeof t != "string" || !t)
    return {
      message: "This payload has no `type`, so there is nothing to say what it is."
    };
  if (!Mr[t]) return qa(t);
  const { valid: n, issues: o } = Ia(e);
  return n ? null : {
    message: `This payload says it is a ${t}, but it does not match the gufe-viz schema.`,
    detail: za(o)
  };
}
function qa(e) {
  const t = Object.keys(Mr).sort().join(", ");
  return {
    message: `Sorry, there is no visualization for ${e} yet. This build can draw: ${t}.`
  };
}
function Oc(e) {
  return zo(e)?.message ?? null;
}
class Da extends Te {
  placeholder() {
    return "Waiting for data...";
  }
  renderView(t, n) {
    ns("payload", n, this);
    const o = zo(n);
    if (o)
      return t.appendChild(Va(o, n)), {};
    const d = n.type, r = Mr[d], i = document.createElement(r);
    return i.style.cssText = "flex:1;min-height:0;min-width:0;", i.payload = n, t.appendChild(i), {
      onResize: () => i.resize?.(),
      // Removing the child fires its own `disconnectedCallback`, which is where
      // its viewers and observers are released
      cleanup: () => i.remove()
    };
  }
}
function Va(e, t) {
  const n = F(
    "div",
    "flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:32px;"
  );
  n.appendChild(ae(e.message));
  const o = (r, i) => F(
    "div",
    "max-width:640px;padding:8px 12px;border-radius:6px;font-size:11px;white-space:pre-wrap;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;overflow-wrap:anywhere;" + (i ? `background:${I.warnBg};color:${I.warnFg};border:1px solid ${I.warnBorder};` : `background:${I.panelBg};color:${I.textMuted2};border:1px solid ${I.cardBorder};`),
    r
  );
  e.detail && n.appendChild(o(e.detail, !0));
  const d = Fa(t);
  return d && n.appendChild(o(d, !1)), n;
}
function Fa(e) {
  if (e == null || typeof e != "object") return null;
  const t = e, n = [];
  typeof t.type == "string" && n.push(`type: ${Wt(t.type)}`), typeof t.name == "string" && t.name && n.push(`name: ${Wt(t.name)}`);
  const o = Object.keys(e);
  return o.length && n.push(
    `keys: ${o.slice(0, 12).join(", ")}${o.length > 12 ? ", ..." : ""}`
  ), n.length ? n.join(`
`) : null;
}
Me("gufe-view", Da);
const Ir = {
  threeDmol: "https://3dmol.org/build/3Dmol-min.js",
  rdkit: "https://unpkg.com/@rdkit/rdkit/dist/RDKit_minimal.js",
  d3: "https://cdn.jsdelivr.net/npm/d3@7/+esm"
};
function zr(e) {
  const t = globalThis.__gufeEngines?.[e];
  return t ? Promise.resolve(t) : null;
}
function qo(e, t) {
  return new Promise((n, o) => {
    const d = document.createElement("script");
    d.src = e, d.onload = () => n(), d.onerror = () => o(new Error(`Failed to load ${t}`)), document.head.appendChild(d);
  });
}
let Le = null, Fe = null;
function Do() {
  if (Fe) return Fe;
  const e = zr("threeDmol");
  return e ? (Fe = e.then((t) => Le = t || window.$3Dmol), Fe) : (Fe = (async () => {
    if (window.$3Dmol) return Le = window.$3Dmol;
    if (await qo(Ir.threeDmol, "3Dmol.js"), !window.$3Dmol) throw new Error("3Dmol.js loaded but $3Dmol is undefined");
    return Le = window.$3Dmol;
  })(), Fe);
}
let Be = null;
function wr() {
  if (Be) return Be;
  const e = zr("rdkit");
  return e ? (Be = e.then((t) => window.RDKit = t), Be) : (Be = (async () => {
    if (window.RDKit) return window.RDKit;
    if (await qo(Ir.rdkit, "RDKit"), !window.initRDKitModule) throw new Error("RDKit loaded but initRDKitModule is undefined");
    return window.RDKit = await window.initRDKitModule();
  })(), Be);
}
let gr = null;
function Ba() {
  if (!gr) {
    const e = Ir.d3;
    gr = zr("d3") ?? import(
      /* @vite-ignore */
      e
    );
  }
  return gr;
}
function Vo(e, t) {
  let n = !1, o = !1;
  const d = () => {
    n = !0;
  }, r = () => {
    n = !1;
  }, i = (a) => {
    if (a.stopPropagation(), n || a.ctrlKey || a.metaKey) {
      a.preventDefault(), t.onZoom(a);
      return;
    }
    t.hint && !o && (o = !0, Ua(e, t.hint));
  };
  return e.addEventListener("wheel", i, { passive: !1, capture: !0 }), e.addEventListener("pointerdown", d), e.addEventListener("pointerenter", d), e.addEventListener("pointerleave", r), {
    cleanup() {
      e.removeEventListener("wheel", i, { capture: !0 }), e.removeEventListener("pointerdown", d), e.removeEventListener("pointerenter", d), e.removeEventListener("pointerleave", r);
    }
  };
}
const La = 1600;
function Ua(e, t) {
  const n = F(
    "div",
    "position:absolute;bottom:12px;left:50%;transform:translateX(-50%);z-index:30;pointer-events:none;padding:5px 12px;border-radius:6px;font-size:11px;white-space:nowrap;background:rgba(0,0,0,0.72);color:#ffffff;transition:opacity .3s ease;",
    t
  );
  e.appendChild(n), setTimeout(() => {
    n.style.opacity = "0", setTimeout(() => n.remove(), 300);
  }, La);
}
const Ka = { min: 0.25, max: 12 };
function Ha(e, t = Ka) {
  let n = 1;
  return {
    zoomBy(o) {
      const d = Math.min(t.max, Math.max(t.min, n * o));
      if (d === n) return;
      const r = d / n;
      n = d, e.zoom(r), e.render();
    },
    reset() {
      n = 1, e.zoomTo(), e.render();
    },
    level: () => n
  };
}
const Ga = 2e-3;
function Ja(e) {
  return Math.exp(-e.deltaY * Ga);
}
function Fo(e, t, n = {}) {
  const o = Ha(t, n.bounds), d = Vo(e, {
    hint: n.hint ?? "Click or hold Ctrl to zoom",
    onZoom: (r) => o.zoomBy(Ja(r))
  });
  return { ...o, cleanup: d.cleanup };
}
function qr(e, t = "Reset view") {
  const n = F("button", Ye, "Reset");
  return n.title = t, n.setAttribute("aria-label", t), n.onclick = e, n;
}
const Wa = `
`, go = "$$$$", Ya = (e) => e.indexOf(go) >= 0 ? e : `${e}${Wa}${go}`;
function Sr(e) {
  const t = String(e).split(/\r?\n/);
  if (t.length < 4) return null;
  const n = parseInt(t[3].slice(0, 3), 10), o = parseInt(t[3].slice(3, 6), 10);
  return isNaN(n) || isNaN(o) ? null : { atoms: n, bonds: o };
}
function Er(e, t, n) {
  let o = null;
  try {
    if (o = e.get_mol(t, JSON.stringify({ removeHs: !0 })), !o) return null;
    try {
      o.set_new_coords(!0);
    } catch {
    }
    return o.get_svg(n, n) || null;
  } catch (d) {
    return console.warn("[gufe-viz] depictSVG threw -", $e(d)), null;
  } finally {
    if (o)
      try {
        o.delete();
      } catch {
      }
  }
}
function Xa(e, t, n) {
  e.innerHTML = t;
  const o = e.querySelector("svg");
  o && (o.removeAttribute("width"), o.removeAttribute("height"), o.getAttribute("viewBox") || o.setAttribute("viewBox", `0 0 ${n} ${n}`), o.setAttribute("preserveAspectRatio", "xMidYMid meet"), o.setAttribute("style", "width:100%;height:100%;max-width:100%;max-height:100%;"));
}
const Za = [
  { id: "stick", label: "Stick", title: "Sticks only" },
  { id: "ball", label: "Ball+Stick", title: "Ball and stick" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" }
], vo = {
  stick: { stick: { radius: 0.15, colorscheme: "Jmol" } },
  ball: { stick: { radius: 0.12, colorscheme: "Jmol" }, sphere: { scale: 0.28, colorscheme: "Jmol" } },
  sphere: { sphere: { scale: 1, colorscheme: "Jmol" } }
}, $o = 400;
class Qa extends Te {
  placeholder() {
    return "Waiting for a SmallMoleculeComponent payload...";
  }
  renderView(t, n) {
    const o = n.sdf, d = n.name ?? "", r = n.smiles, i = n.total_charge;
    t.appendChild(Xe(d || "Unnamed molecule", "SmallMoleculeComponent"));
    const a = F("div", "flex:1;display:flex;flex-direction:row;overflow:hidden;min-height:0;");
    t.appendChild(a);
    const f = F("div", "flex:1 1 50%;min-width:0;display:flex;flex-direction:column;"), g = F("div", "flex:1 1 50%;min-width:0;display:flex;flex-direction:column;position:relative;");
    a.appendChild(f), a.appendChild(F("div", `width:1px;flex-shrink:0;background:${I.splitBorder};`)), a.appendChild(g);
    const v = (p) => F("div", `flex-shrink:0;padding:4px 10px;font-size:12px;font-weight:bold;color:${I.labelFg};background:${I.labelBg};`, p);
    f.appendChild(v("2D"));
    const w = F(
      "div",
      `flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:8px;background:${I.canvas2DBg};`
    );
    f.appendChild(w), g.appendChild(v("3D"));
    const S = ko();
    g.appendChild(S.wrap);
    const b = F(
      "div",
      `flex-shrink:0;display:flex;flex-wrap:wrap;align-items:baseline;gap:6px 20px;padding:8px 16px;font-size:12px;background:${I.toolbarBg};border-top:1px solid ${I.toolbarBorder};color:${I.textPrimary};`
    );
    t.appendChild(b);
    const E = o ? Sr(o) : null, _ = [
      ["Name", d || Re, !1],
      ["SMILES", r || Re, !0],
      ["Charge", i == null ? Re : String(i), !1],
      ["Atoms", E ? String(E.atoms) : Re, !1],
      ["Bonds", E ? String(E.bonds) : Re, !1]
    ];
    for (const [p, k, C] of _) {
      const N = F("div", "display:flex;align-items:baseline;gap:6px;min-width:0;");
      N.appendChild(
        F(
          "span",
          `font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;flex-shrink:0;color:${I.textMuted2};`,
          p
        )
      );
      const T = F(
        "span",
        `user-select:text;cursor:text;color:${I.textPrimary}` + (C ? ";font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:11px;overflow-wrap:anywhere;" : ""),
        k
      );
      T.title = k, N.appendChild(T), b.appendChild(N);
    }
    if (!o || !o.trim())
      return w.appendChild(ae("No molecule provided")), S.container.appendChild(ae("No molecule provided")), {};
    w.appendChild(ae("Loading 2D depiction...")), wr().then((p) => {
      const k = Er(p, o, $o);
      k ? Xa(w, k, $o) : w.replaceChildren(ae("Failed to parse molecule", !0));
    }).catch((p) => {
      w.replaceChildren(ae(`RDKit failed to load: ${$e(p)}`, !0));
    });
    let u = null, m = null, l = "stick", h = !1;
    const $ = F(
      "div",
      `position:absolute;bottom:10px;right:10px;display:flex;gap:4px;padding:4px;border-radius:6px;z-index:10;background:${I.switcherBg};box-shadow:0 2px 8px rgba(0,0,0,0.25);`
    );
    $.appendChild(
      Eo(Za, l, (p) => {
        l = p, u && (u.setStyle({}, vo[p]), u.render());
      })
    );
    const s = F("button", `${Ye}margin-left:4px;`, "Spin");
    s.title = "Toggle continuous rotation", s.onclick = () => {
      h = !h, s.style.background = h ? I.btnBgActive : I.btnBg;
      try {
        u?.spin(h ? "y" : !1);
      } catch {
      }
    }, $.appendChild(s);
    const c = qr(() => m?.reset());
    return c.style.marginLeft = "4px", $.appendChild(c), g.appendChild($), S.container.appendChild(ae("Loading 3D viewer...")), Do().then(() => {
      S.container.replaceChildren(), u = Le.createViewer(S.container, { backgroundColor: I.viewerBg }), u.addModel(Ya(o), "sdf"), u.setStyle({}, vo[l]), u.zoomTo(), u.render(), m = Fo(S.container, u);
    }).catch((p) => {
      S.container.replaceChildren(ae(`3D render failed: ${$e(p)}`, !0));
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
Me("gufe-small-molecule", Qa);
const Bo = ["HOH", "WAT", "SOL", "TIP3"], _o = { hetflag: !1 }, ec = { hetflag: !0 }, tc = { resn: Bo }, Ce = {
  stick: { radius: 0.15 },
  sphere: { scale: 0.3 },
  hetero: { stickRadius: 0.2, sphereScale: 0.28 },
  water: { stickRadius: 0.05, sphereScale: 0.18 },
  surfaceOpacity: 0.85,
  /** Above this many atoms a surface is slow enough to be worth warning about. */
  surfaceAtomWarn: 4e4
};
function rc(e) {
  const t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
  let o = 0, d = 0, r = 0, i = 1 / 0, a = -1 / 0;
  for (const f of e.split(/\r?\n/)) {
    const g = f.slice(0, 6);
    if (g === "ENDMDL") break;
    if (g !== "ATOM  " && g !== "HETATM") continue;
    o++, g === "HETATM" && d++;
    const v = f.slice(17, 20).trim(), w = f.slice(21, 22).trim() || "_", S = f.slice(22, 26).trim(), b = f.slice(26, 27).trim();
    Bo.indexOf(v) !== -1 && r++, t.add(w), n.add(`${w}|${S}${b}|${v}`);
    const E = parseInt(S, 10);
    isNaN(E) || (E < i && (i = E), E > a && (a = E));
  }
  return {
    chains: t.size,
    residues: n.size,
    atoms: o,
    hetatms: d,
    waters: r,
    heteroNonWater: d - r,
    resiMin: i === 1 / 0 ? 0 : i,
    resiMax: a === -1 / 0 ? 0 : a
  };
}
function nc(e) {
  return `${Ke(e.chains)} chains · ${Ke(e.residues)} residues · ${Ke(e.atoms)} atoms · ${Ke(e.hetatms)} HETATM` + (e.waters > 0 ? ` (${Ke(e.waters)} water)` : "");
}
function oc(e, t) {
  return e === "chain" ? { colorscheme: "chain" } : e === "ss" ? { colorscheme: "ssJmol" } : e === "spectrum" && t && t.resiMax > t.resiMin ? { colorscheme: { prop: "resi", gradient: "roygb", min: t.resiMin, max: t.resiMax } } : { colorscheme: "Jmol" };
}
function bo(e, t, n, o) {
  const d = o || (() => {
  }), r = oc(t.color, n);
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
    ec,
    t.hetero ? {
      stick: { radius: Ce.hetero.stickRadius, colorscheme: "Jmol" },
      sphere: { scale: Ce.hetero.sphereScale, colorscheme: "Jmol" }
    } : {}
  ), e.setStyle(
    tc,
    t.waters ? {
      stick: { radius: Ce.water.stickRadius, colorscheme: "Jmol" },
      sphere: { scale: Ce.water.sphereScale, colorscheme: "Jmol" }
    } : {}
  ), t.rep !== "surface") {
    d(null), e.render();
    return;
  }
  d(
    n && n.atoms > Ce.surfaceAtomWarn ? "Computing surface (large structure, this may take a while)..." : "Computing surface..."
  ), e.render(), setTimeout(() => {
    try {
      Promise.resolve(
        e.addSurface(Le.SurfaceType.VDW, { opacity: Ce.surfaceOpacity, ...r }, _o)
      ).then(() => {
        d(null), e.render();
      }).catch((i) => d(`Surface failed: ${$e(i)}`, "error"));
    } catch (i) {
      d(`Surface failed: ${$e(i)}`, "error");
    }
  }, 30);
}
const sc = [
  { id: "cartoon", label: "Cartoon", title: "Ribbon / cartoon backbone" },
  { id: "surface", label: "Surface", title: "Molecular (VDW) surface" },
  { id: "stick", label: "Stick", title: "All-atom sticks" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" }
], ic = [
  { id: "chain", label: "Chain" },
  { id: "spectrum", label: "Spectrum" },
  { id: "ss", label: "Secondary structure" },
  { id: "element", label: "Element" }
];
class ac extends Te {
  placeholder() {
    return "Waiting for a ProteinComponent payload...";
  }
  renderView(t, n) {
    const o = n.pdb, d = n.name ?? "", r = { rep: "cartoon", color: "chain", waters: !1, hetero: !0 };
    let i = null, a = null, f = null;
    const g = F(
      "div",
      `display:flex;align-items:center;gap:14px;flex-wrap:wrap;padding:8px 14px;flex-shrink:0;font-size:12px;background:${I.toolbarBg};border-bottom:1px solid ${I.toolbarBorder};color:${I.textPrimary};`
    );
    t.appendChild(g), g.appendChild(
      F("span", `font-weight:700;font-size:14px;letter-spacing:.02em;color:${I.titleColor};`, d || "Protein")
    );
    const v = (h) => F("span", `font-size:11px;color:${I.textMuted};`, h);
    g.appendChild(v("Style:")), g.appendChild(
      Eo(sc, r.rep, (h) => {
        r.rep = h, l();
      })
    ), g.appendChild(v("Color:"));
    const w = F("select", So);
    for (const h of ic) {
      const $ = F("option", "", h.label);
      $.value = h.id, w.appendChild($);
    }
    w.value = r.color, w.addEventListener("change", () => {
      r.color = w.value, l();
    }), g.appendChild(w);
    const S = F("div", "display:flex;gap:4px;");
    g.appendChild(S);
    const b = [
      ["waters", "Waters", "Show water molecules", () => l()],
      ["hetero", "Hetero", "Show hetero atoms / ligands / ions / lipids", () => l()],
      ["spin", "Spin", "Rotate the view continuously", () => i?.spin(r.spin ? "y" : !1)]
    ];
    for (const [h, $, s, c] of b) {
      const p = F("button", Ye, $);
      p.title = s, p.style.background = r[h] ? I.btnBgActive : I.btnBg, p.onclick = () => {
        r[h] = !r[h], p.style.background = r[h] ? I.btnBgActive : I.btnBg, c();
      }, S.appendChild(p);
    }
    S.appendChild(qr(() => a?.reset()));
    const E = F("span", `margin-left:auto;font-size:11px;white-space:nowrap;color:${I.textMuted2};`);
    g.appendChild(E);
    const _ = ko();
    t.appendChild(_.wrap);
    const u = F(
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
      u.style.background = s ? I.warnBg : I.toolbarBg, u.style.color = s ? I.warnFg : I.textMuted, u.style.border = `1px solid ${s ? I.warnBorder : I.toolbarBorder}`;
    };
    function l() {
      i && bo(i, r, f, m);
    }
    if (!o || !o.trim())
      return m("No protein data - waiting for a PDB payload."), {};
    try {
      f = rc(o), E.textContent = nc(f);
    } catch (h) {
      m(`⚠ PDB parse error: ${$e(h)}`, "error");
    }
    return m("Loading 3D viewer..."), Do().then(() => {
      i = Le.createViewer(_.container, { backgroundColor: I.viewerBg }), i.addModel(o, "pdb"), bo(i, r, f, m), i.zoomTo(), i.spin(r.spin ? "y" : !1), i.render(), a = Fo(_.container, i);
    }).catch((h) => {
      m(`⚠ Failed to render structure: ${$e(h)}`, "error");
    }), {
      onResize() {
        i && (i.resize(), i.render());
      },
      cleanup() {
        if (a?.cleanup(), a = null, !!i) {
          try {
            i.spin(!1);
          } catch {
          }
          try {
            i.clear();
          } catch {
          }
          i = null;
        }
      }
    };
  }
}
Me("gufe-protein", ac);
const Lo = "http://www.w3.org/2000/svg";
function ne(e, t = {}) {
  const n = document.createElementNS(Lo, e);
  for (const [o, d] of Object.entries(t)) n.setAttribute(o, String(d));
  return n;
}
function Zt(e, t) {
  const n = document.createElementNS(Lo, "title");
  return n.textContent = t, e.appendChild(n), e;
}
function Uo(e) {
  const t = /* @__PURE__ */ new Map();
  return Pr(e, t, /* @__PURE__ */ new Set()), t;
}
function Pr(e, t, n) {
  if (e == null || typeof e != "object" || n.has(e)) return;
  if (n.add(e), Array.isArray(e)) {
    for (const d of e) Pr(d, t, n);
    return;
  }
  const o = e.registry;
  if (Array.isArray(o))
    for (const d of o) {
      const r = d["gufe-key"];
      typeof r == "string" && r && !t.has(r) && t.set(r, d);
    }
  for (const d of Object.values(e)) Pr(d, t, n);
}
function Ko(e, t) {
  return t ? e.get(t) : void 0;
}
function kr(e, t, n) {
  const o = Ko(e, t);
  return o?.type === n ? o : void 0;
}
function cc(e) {
  return e.name ? e.name : (e["gufe-key"].split("-").pop() ?? e["gufe-key"]).slice(0, 6);
}
const lc = ["Force-directed", "Circular", "Radial"], Jt = 34, We = 200, vr = 1.5, dc = 6, uc = 16, he = {
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
  const [t, n] = I.netEdgeRamp.map(fc), o = Math.max(0, Math.min(1, e ?? 0.5));
  return `rgb(${t.map((r, i) => Math.round(r + (n[i] - r) * o)).join(",")})`;
}
const xe = cc, pc = (e, t) => e.length > t ? `${e.slice(0, t - 1)}...` : e;
function Tc(e, t) {
  const n = kr(t, e.componentA, "SmallMoleculeComponentViz"), o = kr(t, e.componentB, "SmallMoleculeComponentViz");
  return !n || !o ? null : { ...e, registry: n["gufe-key"] === o["gufe-key"] ? [n] : [n, o] };
}
class hc extends Te {
  placeholder() {
    return "Waiting for a LigandNetwork payload...";
  }
  renderView(t, n) {
    const o = Uo(n), d = [];
    let r = 0;
    for (const N of n.nodes ?? []) {
      const T = kr(o, N, "SmallMoleculeComponentViz");
      if (!T) {
        r++;
        continue;
      }
      d.push({ ...T, x: 0, y: 0 });
    }
    const i = new Map(d.map((N) => [N["gufe-key"], N])), a = [];
    let f = 0;
    for (const N of n.edges ?? []) {
      const T = i.get(N.componentA), O = i.get(N.componentB);
      if (!T || !O) {
        f++;
        continue;
      }
      a.push({ ...N, index: a.length, from: T, to: O });
    }
    const g = Xe(n.name || "Ligand network", "LigandNetwork");
    g.statsEl.appendChild(we("ligands", String(d.length))), g.statsEl.appendChild(we("mappings", String(a.length))), t.appendChild(g);
    const v = F("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    t.appendChild(v);
    const w = F("div", `flex:1 1 58%;min-width:0;display:flex;flex-direction:column;background:${I.netCanvasBg};`), S = F("div", `flex:1 1 42%;min-width:0;display:flex;flex-direction:column;background:${I.appBg};`);
    v.appendChild(w), v.appendChild(F("div", `width:1px;flex-shrink:0;background:${I.splitBorder};`)), v.appendChild(S);
    const b = F("div", `flex:1;position:relative;overflow:hidden;min-height:0;background:${I.netCanvasBg};`);
    w.appendChild(b);
    const E = this.#r(
      (N) => C(N),
      () => p()
    );
    w.appendChild(E.bar);
    const _ = this.#e(S);
    if (!d.length)
      return b.appendChild(
        ae(
          r ? "None of this network's ligands are in its registry." : "This network has no ligands."
        )
      ), _.message("Nothing to show."), {};
    r && Gt(
      b,
      `${r} ligand${r === 1 ? "" : "s"} named by this network are not in its registry`
    ), f && Gt(b, `${f} mapping${f === 1 ? "" : "s"} name a ligand this network does not contain`);
    const u = wr().catch((N) => (console.warn("[gufe-viz] RDKit failed to load:", $e(N)), null));
    let m = a.length ? 0 : -1, l = null, h = "Force-directed", $ = !1, s = !0, c = () => {
    }, p = () => {
    };
    const k = (N) => {
      m = N, _.show(a[N] ?? null), c();
    }, C = (N = h) => {
      h = N, l?.(), l = null, b.querySelector("svg")?.remove();
      const T = b.clientWidth || 800, O = b.clientHeight || 600;
      mc(d, T, O, h, a);
      const z = () => {
        if (!s) return;
        const L = this.#n(b, d, a, T, O, k);
        c = () => L.setSelected(m), p = L.reset, l = L.cleanup, c(), u.then((Q) => Q && L.depict(Q)).catch(() => {
        });
      };
      if (h !== "Force-directed" || $) {
        z();
        return;
      }
      yc(d, a, T, O).then((L) => {
        if (s) {
          if (L) {
            z();
            return;
          }
          $ = !0, E.picker.value = "Circular", Gt(b, "d3 could not be loaded - showing the circular layout instead"), C("Circular");
        }
      }, z);
    };
    return C(), _.show(a[m] ?? null), {
      onResize: () => C(),
      cleanup: () => {
        s = !1, l?.();
      }
    };
  }
  #r(t, n) {
    const o = F(
      "div",
      `display:flex;align-items:center;gap:10px;flex-wrap:wrap;padding:8px 14px;flex-shrink:0;background:${I.toolbarBg};border-top:1px solid ${I.toolbarBorder};`
    ), d = F("div", `display:flex;align-items:center;gap:6px;font-size:11px;color:${I.textMuted};`);
    d.appendChild(F("span", "", "score")), d.appendChild(
      F(
        "span",
        `width:40px;height:4px;border-radius:2px;background:linear-gradient(to right,${I.netEdgeRamp.join(",")});`
      )
    ), d.appendChild(F("span", "", "0 -> 1")), o.appendChild(d), o.appendChild(F("label", `font-size:12px;margin-left:auto;color:${I.textMuted};`, "Layout"));
    const r = F("select", So);
    for (const i of lc) {
      const a = F("option", "", i);
      a.value = i, r.appendChild(a);
    }
    return r.onchange = () => t(r.value), o.appendChild(r), o.appendChild(qr(n, "Reset pan and zoom")), { bar: o, picker: r };
  }
  /** The right-hand pane: what the selected mapping is, in words and pictures. */
  #e(t) {
    const n = F(
      "div",
      `flex-shrink:0;padding:4px 10px;font-size:12px;font-weight:bold;color:${I.labelFg};background:${I.labelBg};`,
      "Selected mapping"
    ), o = F("div", "flex:1;min-height:0;overflow:auto;display:flex;flex-direction:column;");
    t.appendChild(n), t.appendChild(o);
    const d = (i) => o.replaceChildren(ae(i));
    return { show: (i) => {
      if (!i) {
        d("Click an edge to see its mapping.");
        return;
      }
      o.replaceChildren();
      const a = F(
        "div",
        `padding:10px 14px;font-size:13px;font-weight:600;color:${I.textPrimary};border-bottom:1px solid ${I.toolbarBorder};`,
        `${xe(i.from)} -> ${xe(i.to)}`
      );
      o.appendChild(a);
      const f = F("div", "display:flex;flex-direction:row;min-height:180px;");
      o.appendChild(f);
      const g = [i.from.sdf, i.to.sdf].map((_, u) => {
        const m = F("div", "flex:1 1 50%;min-width:0;display:flex;flex-direction:column;");
        m.appendChild(
          F("div", `padding:4px 10px;font-size:11px;color:${I.textMuted2};`, u === 0 ? "A" : "B")
        );
        const l = F(
          "div",
          `flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:6px;background:${I.canvas2DBg};`
        );
        return l.appendChild(ae("...")), m.appendChild(l), f.appendChild(m), { box: l, sdf: _ };
      }), v = (i.componentA_to_componentB ?? []).length, w = Sr(i.from.sdf), S = Sr(i.to.sdf), b = F(
        "div",
        `display:flex;flex-wrap:wrap;gap:8px 16px;padding:10px 14px;font-size:11px;color:${I.textMuted};border-top:1px solid ${I.toolbarBorder};`
      );
      b.appendChild(we("score", i.score == null ? Re : i.score.toFixed(3), wo(i.score))), b.appendChild(we("mapped atoms", String(v))), b.appendChild(we("atoms A", w ? String(w.atoms) : Re)), b.appendChild(we("atoms B", S ? String(S.atoms) : Re)), o.appendChild(b);
      const E = Object.entries(i.annotations ?? {}).filter(([_]) => _ !== "score");
      if (E.length) {
        const _ = F(
          "div",
          `padding:0 14px 12px;font-size:11px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;color:${I.textMuted2};`
        );
        for (const [u, m] of E)
          _.appendChild(F("div", "", `${u}: ${String(m)}`));
        o.appendChild(_);
      }
      wr().then((_) => {
        for (const { box: u, sdf: m } of g) {
          const l = Er(_, m, We);
          if (u.replaceChildren(), l) {
            u.innerHTML = l;
            const h = u.querySelector("svg");
            h?.removeAttribute("width"), h?.removeAttribute("height"), h?.setAttribute("style", "width:100%;height:100%;");
          } else
            u.appendChild(ae("Failed to parse molecule", !0));
        }
      }).catch((_) => {
        for (const { box: u } of g) u.replaceChildren(ae(`RDKit failed to load: ${$e(_)}`, !0));
      });
    }, message: d };
  }
  /** Build the SVG for the current node positions. Returns the handles the
   * caller needs afterwards: selection, depictions, and teardown. */
  #n(t, n, o, d, r, i) {
    const a = ne("svg", { width: d, height: r, style: "display:block;touch-action:none;" }), f = ne("g");
    a.appendChild(f), t.appendChild(a);
    const g = [], v = ne("g"), w = ne("g"), S = ne("g", { "pointer-events": "none" }), b = ne("g");
    f.append(v, w, S, b);
    for (const h of o) {
      const $ = wo(h.score), s = ne("line", {
        stroke: I.netHaloColor,
        "stroke-width": vr + 12,
        "stroke-linecap": "round",
        opacity: 0,
        "pointer-events": "none"
      }), c = ne("line", {
        stroke: $,
        "stroke-width": vr + (h.score ?? 0.5) * (dc - vr),
        "stroke-opacity": 0.9,
        "pointer-events": "none"
      }), p = Zt(
        ne("line", { stroke: "transparent", "stroke-width": uc, style: "cursor:pointer;" }),
        `${xe(h.from)} -> ${xe(h.to)}${h.score == null ? "" : `
score ${h.score.toFixed(3)}`}`
      );
      if (p.addEventListener("click", (k) => {
        k.stopPropagation(), i(h.index);
      }), g.push(s), v.append(s, c), w.appendChild(p), h.score != null) {
        const k = ne("text", {
          "text-anchor": "middle",
          "dominant-baseline": "middle",
          "font-size": 10,
          "font-weight": 600,
          fill: I.netEdgeLabel
        });
        k.textContent = h.score.toFixed(2), S.appendChild(k);
      } else
        S.appendChild(ne("text"));
    }
    const E = [], _ = [], u = n.map((h) => {
      const $ = Zt(ne("g", { style: "cursor:grab;" }), `${xe(h)}
${h.smiles ?? ""}
${h["gufe-key"]}`);
      $.appendChild(
        ne("circle", {
          r: Jt,
          fill: I.netNodeFill,
          stroke: I.netNodeStroke,
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
        fill: I.netInitials,
        "pointer-events": "none"
      });
      c.textContent = xe(h).slice(0, 2).toUpperCase(), $.appendChild(c), _.push(c);
      const p = ne("text", {
        "text-anchor": "middle",
        y: Jt + 14,
        "font-size": 11,
        "font-weight": 600,
        fill: I.netNodeLabel,
        "pointer-events": "none"
      });
      return p.textContent = pc(xe(h), 16), $.appendChild(p), b.appendChild($), $;
    }), m = () => {
      o.forEach((h, $) => {
        for (const c of [g[$], v.children[$ * 2 + 1], w.children[$]]) {
          const p = c;
          p.setAttribute("x1", String(h.from.x)), p.setAttribute("y1", String(h.from.y)), p.setAttribute("x2", String(h.to.x)), p.setAttribute("y2", String(h.to.y));
        }
        const s = S.children[$];
        s.setAttribute("x", String((h.from.x + h.to.x) / 2)), s.setAttribute("y", String((h.from.y + h.to.y) / 2 - 8));
      }), n.forEach((h, $) => u[$].setAttribute("transform", `translate(${h.x},${h.y})`));
    };
    m();
    const l = this.#t(a, f, n, u, m);
    return {
      setSelected(h) {
        g.forEach(($, s) => $.setAttribute("opacity", s === h ? "0.95" : "0"));
      },
      depict(h) {
        const $ = (Jt - 4) * 2 / We, s = new DOMParser();
        let c = 0;
        return n.forEach((p, k) => {
          const C = p.sdf && Er(h, p.sdf, We);
          if (!C) return;
          const N = s.parseFromString(C, "image/svg+xml").documentElement;
          if (!N || N.nodeName.toLowerCase() === "parsererror") return;
          const T = E[k];
          T.setAttribute(
            "transform",
            `translate(${-$ * We / 2},${-$ * We / 2}) scale(${$})`
          );
          let O = 0;
          for (const z of Array.from(N.childNodes)) {
            if (z.nodeType !== 1) continue;
            const L = z.nodeName.toLowerCase();
            if (!(L === "defs" || L === "metadata" || L === "title")) {
              if (L === "rect") {
                const Q = (z.getAttribute("fill") ?? "").toLowerCase();
                if (Q === "#ffffff" || Q === "white" || Q === "rgb(255,255,255)") continue;
              }
              T.appendChild(document.importNode(z, !0)), O++;
            }
          }
          O && (_[k].setAttribute("display", "none"), c++);
        }), c;
      },
      reset: l.reset,
      cleanup: l.cleanup
    };
  }
  /** Wheel zoom, background pan, node drag - ~40 lines instead of d3-zoom and
   * d3-drag, and they keep working when d3 is unreachable. */
  #t(t, n, o, d, r) {
    let i = 1, a = 0, f = 0;
    const g = () => n.setAttribute("transform", `translate(${a},${f}) scale(${i})`), w = Vo(t, {
      onZoom: (u) => {
        const m = t.getBoundingClientRect(), l = u.clientX - m.left, h = u.clientY - m.top, $ = Math.min(5 / i, Math.max(0.15 / i, Math.exp(-u.deltaY * 2e-3)));
        a = l - (l - a) * $, f = h - (h - f) * $, i *= $, g();
      },
      hint: "Click the graph or hold Ctrl to zoom"
    });
    let S = null;
    const b = (u) => {
      S = { x: u.clientX - a, y: u.clientY - f };
    }, E = (u) => {
      S && (a = u.clientX - S.x, f = u.clientY - S.y, g());
    }, _ = () => {
      S = null;
    };
    return t.addEventListener("pointerdown", b), t.addEventListener("pointermove", E), t.addEventListener("pointerup", _), t.addEventListener("pointercancel", _), t.addEventListener("pointerleave", _), d.forEach((u, m) => {
      let l = null;
      u.addEventListener("pointerdown", ($) => {
        $.stopPropagation(), l = { x: $.clientX - o[m].x * i, y: $.clientY - o[m].y * i }, u.setPointerCapture($.pointerId);
      }), u.addEventListener("pointermove", ($) => {
        l && (o[m].x = o[m].fx = ($.clientX - l.x) / i, o[m].y = o[m].fy = ($.clientY - l.y) / i, r());
      });
      const h = () => {
        l = null;
      };
      u.addEventListener("pointerup", h), u.addEventListener("pointercancel", h);
    }), {
      reset() {
        i = 1, a = 0, f = 0, g();
      },
      cleanup() {
        w.cleanup(), t.removeEventListener("pointerdown", b), t.removeEventListener("pointermove", E), t.removeEventListener("pointerup", _), t.removeEventListener("pointercancel", _), t.removeEventListener("pointerleave", _);
      }
    };
  }
}
function mc(e, t, n, o, d) {
  const r = t / 2, i = n / 2, a = (f, g) => {
    f.forEach((v, w) => {
      const S = 2 * Math.PI * w / Math.max(1, f.length) - Math.PI / 2;
      v.x = r + g * Math.cos(S), v.y = i + g * Math.sin(S), v.fx = o === "Force-directed" ? void 0 : v.x, v.fy = o === "Force-directed" ? void 0 : v.y;
    });
  };
  if (o === "Radial" && e.length) {
    const f = new Map(e.map((_) => [_["gufe-key"], []]));
    for (const _ of d)
      f.get(_.from["gufe-key"]).push(_.to["gufe-key"]), f.get(_.to["gufe-key"]).push(_.from["gufe-key"]);
    const g = new Map(e.map((_) => [_["gufe-key"], _])), v = e.reduce(
      (_, u) => f.get(u["gufe-key"]).length > f.get(_["gufe-key"]).length ? u : _
    ), w = /* @__PURE__ */ new Set([v["gufe-key"]]);
    let S = [v["gufe-key"]], b = 0;
    const E = Math.min(t, n) * 0.18;
    for (; S.length; ) {
      a(
        S.map((u) => g.get(u)),
        b === 0 ? 0 : b * E + 40
      );
      const _ = [];
      for (const u of S)
        for (const m of f.get(u))
          w.has(m) || (w.add(m), _.push(m));
      S = _, b++;
    }
    a(e.filter((_) => !w.has(_["gufe-key"])), Math.min(t, n) * 0.45);
    return;
  }
  a(e, Math.min(t, n) * 0.34);
}
async function yc(e, t, n, o) {
  let d;
  try {
    if (d = await Ba(), typeof d?.forceSimulation != "function") return !1;
  } catch {
    return !1;
  }
  const r = t.map((f) => ({ source: f.from["gufe-key"], target: f.to["gufe-key"], score: f.score })), i = d.forceSimulation(e).force(
    "link",
    d.forceLink(r).id((f) => f["gufe-key"]).distance((f) => he.linkBaseDistance + (1 - (f.score ?? 0.5)) * he.linkScoreBonus).strength(he.linkStrength)
  ).force(
    "charge",
    d.forceManyBody().strength(he.chargeStrength).distanceMin(he.chargeDistanceMin).distanceMax(he.chargeDistanceMax)
  ).force("center", d.forceCenter(n / 2, o / 2).strength(he.centerStrength)).force("collision", d.forceCollide(Jt + he.collisionPadding).iterations(he.collisionIterations)).force("x", d.forceX(n / 2).strength(he.drift)).force("y", d.forceY(o / 2).strength(he.drift)).stop(), a = Math.ceil(Math.log(i.alphaMin()) / Math.log(1 - i.alphaDecay()));
  for (let f = 0; f < a * he.tickMultiplier; f++) i.tick();
  return !0;
}
Me("gufe-ligand-network", hc);
function gc(e) {
  return e.name || e.type.replace(/Viz$/, "");
}
function vc(e) {
  return e.type === "UnknownComponentViz" ? e.gufe_type : e.type.replace(/Viz$/, "");
}
class $c extends Te {
  placeholder() {
    return "Waiting for a ChemicalSystem payload...";
  }
  renderView(t, n) {
    const o = Uo(n), d = [], r = [];
    for (const [E, _] of Object.entries(n.components ?? {})) {
      const u = Ko(o, _);
      u ? d.push([E, u]) : r.push(E);
    }
    const i = Xe(n.name || "Chemical system", "ChemicalSystem");
    if (i.statsEl.appendChild(we("components", String(d.length))), t.appendChild(i), !d.length)
      return t.appendChild(
        ae(
          r.length ? "None of this system's components are in its registry." : "This chemical system has no components."
        )
      ), {};
    const a = F("div", "flex:1;min-height:0;position:relative;display:flex;flex-direction:row;");
    t.appendChild(a), r.length && Gt(
      a,
      `${r.length} component${r.length === 1 ? "" : "s"} named by this system (${r.join(", ")}) are not in its registry`
    );
    const f = F(
      "div",
      `flex:0 0 220px;min-width:0;overflow:auto;display:flex;flex-direction:column;gap:6px;padding:10px;background:${I.panelBg};border-right:1px solid ${I.splitBorder};`
    );
    a.appendChild(f);
    const g = F("div", "flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;");
    a.appendChild(g);
    const v = F("div", "flex:1;min-height:0;display:flex;");
    g.appendChild(v);
    const w = document.createElement("gufe-view");
    w.style.cssText = "flex:1;min-width:0;min-height:0;", v.appendChild(w);
    const S = [], b = (E) => {
      S.forEach((_, u) => {
        const m = u === E;
        _.style.background = m ? I.cardBgActive : I.cardBg, _.style.borderColor = m ? I.cardBorderActive : I.cardBorder;
      }), w.payload = d[E][1];
    };
    return d.forEach(([E, _], u) => {
      const m = F(
        "button",
        `display:flex;flex-direction:column;align-items:flex-start;gap:4px;padding:8px 10px;text-align:left;border:1px solid ${I.cardBorder};border-radius:8px;background:${I.cardBg};cursor:pointer;font-family:inherit;font-size:12px;width:100%;`
      );
      m.appendChild(F("span", `font-weight:700;color:${I.textPrimary};`, E)), m.appendChild(F("span", `font-size:11px;color:${I.textMuted};`, gc(_))), m.appendChild(Po(vc(_))), m.onclick = () => b(u), S.push(m), f.appendChild(m);
    }), b(0), {
      onResize: () => w.resize?.(),
      // Removing the nested view fires its own `disconnectedCallback`, which is
      // where whatever it mounted releases its viewers.
      cleanup: () => w.remove()
    };
  }
}
Me("gufe-chemical-system", $c);
const ve = { width: 340, height: 260, padding: 14, radius: 12 }, _c = 150, bc = 40, wc = 24;
function Sc(e) {
  let t = e >>> 0;
  return () => (t = t * 1664525 + 1013904223 >>> 0, t / 4294967296);
}
function Ec(e) {
  const t = /-?\d+(\.\d+)?([eE][-+]?\d+)?/.exec(e ?? "");
  if (!t) return null;
  const n = Number(t[0]);
  return Number.isFinite(n) ? n : null;
}
function Pc(e) {
  return e == null || e <= 0 ? 0 : Math.max(1, Math.min(wc, Math.round(e * bc)));
}
function kc(e) {
  const t = ne("svg", {
    viewBox: `0 0 ${ve.width} ${ve.height}`,
    style: "width:100%;height:100%;max-width:100%;",
    role: "img"
  });
  Zt(t, `${e.smiles || "solvent"} box`), t.appendChild(
    ne("rect", {
      x: 1,
      y: 1,
      width: ve.width - 2,
      height: ve.height - 2,
      rx: ve.radius,
      fill: I.boxFill,
      stroke: I.boxStroke,
      "stroke-width": 1.5
    })
  );
  const n = Sc(1597463007), o = () => ({
    x: ve.padding + n() * (ve.width - 2 * ve.padding),
    y: ve.padding + n() * (ve.height - 2 * ve.padding)
  });
  for (let i = 0; i < _c; i++) {
    const { x: a, y: f } = o();
    t.appendChild(ne("circle", { cx: a, cy: f, r: 2.4, fill: I.textMuted2, "fill-opacity": 0.45 }));
  }
  const d = Pc(Ec(e.ion_concentration)), r = [
    [e.positive_ion, I.diffAdded],
    [e.negative_ion, I.diffRemoved]
  ];
  for (const [i, a] of r)
    for (let f = 0; f < d; f++) {
      const { x: g, y: v } = o(), w = ne("circle", { cx: g, cy: v, r: 5.5, fill: a, "fill-opacity": 0.85 });
      t.appendChild(Zt(w, i));
    }
  return t;
}
class Cc extends Te {
  placeholder() {
    return "Waiting for a SolventComponent payload...";
  }
  renderView(t, n) {
    const o = Xe(n.name || "Solvent", "SolventComponent");
    o.statsEl.appendChild(we("neutralized", n.neutralize ? "yes" : "no")), o.statsEl.appendChild(we(n.positive_ion, "", I.diffAdded)), o.statsEl.appendChild(we(n.negative_ion, "", I.diffRemoved)), t.appendChild(o);
    const d = F(
      "div",
      "flex:1;min-height:0;display:flex;flex-wrap:wrap;gap:16px;padding:16px;overflow:auto;align-items:flex-start;"
    );
    t.appendChild(d);
    const r = $r();
    r.style.flex = "1 1 320px", r.appendChild(Oe("SMILES", n.smiles, !0)), r.appendChild(Oe("Positive ion", n.positive_ion)), r.appendChild(Oe("Negative ion", n.negative_ion)), r.appendChild(Oe("Ion concentration", n.ion_concentration)), r.appendChild(Oe("Neutralize", n.neutralize ? "yes" : "no")), d.appendChild(r);
    const i = $r();
    return i.style.flex = "1 1 340px", i.style.alignItems = "center", i.appendChild(kc(n)), i.appendChild(
      F(
        "div",
        `padding-top:10px;font-size:11px;text-align:center;color:${I.textMuted2};`,
        "Schematic only: the dots show which ions are present, not how many."
      )
    ), d.appendChild(i), {};
  }
}
Me("gufe-solvent", Cc);
class Rc extends Te {
  placeholder() {
    return "Waiting for a component payload...";
  }
  renderView(t, n) {
    const o = Xe(n.name || "Unnamed component", "Component");
    o.statsEl.appendChild(Po(n.gufe_type)), t.appendChild(o);
    const d = F("div", "flex:1;min-height:0;overflow:auto;display:flex;align-items:center;justify-content:center;padding:24px;");
    t.appendChild(d);
    const r = $r();
    return r.style.maxWidth = "460px", r.appendChild(
      F(
        "div",
        `font-size:14px;font-weight:600;padding-bottom:6px;color:${I.textPrimary};`,
        `There is no visualization for ${n.gufe_type}.`
      )
    ), r.appendChild(
      F(
        "div",
        `font-size:12px;line-height:1.6;padding-bottom:10px;color:${I.textMuted};`,
        "gufe lets a project define its own Component subclasses, so this is a component this build has never been taught to draw - not a broken payload. Everything gufe knows about it that survives serialization is below."
      )
    ), r.appendChild(Oe("Name", n.name || "(unnamed)")), r.appendChild(Oe("gufe class", n.gufe_type, !0)), d.appendChild(r), {};
  }
}
Me("gufe-unknown-component", Rc);
const Mc = {
  elementChange: "#005AB5",
  uniqueAtom: "#DC3220",
  elementChange3D: "0x005AB5",
  uniqueAtom3D: "0xDC3220"
}, Ic = [
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
], zc = "hsv";
function qc(e, t) {
  let n = e.querySelector("gufe-view");
  return n || (n = document.createElement("gufe-view"), n.style.cssText = "display:block;width:100%;height:100%;", e.appendChild(n)), t !== void 0 && (n.payload = t), n;
}
export {
  Jo as CHROME_OPEN_BY_DEFAULT,
  Xo as DEBUG_ATTRIBUTE,
  Zo as DEBUG_GLOBAL,
  Ka as DEFAULT_ZOOM_BOUNDS,
  $c as GufeChemicalSystem,
  Te as GufeElement,
  hc as GufeLigandNetwork,
  ac as GufeProtein,
  Qa as GufeSmallMolecule,
  Cc as GufeSolvent,
  Rc as GufeUnknownComponent,
  Da as GufeView,
  Mc as MAPPING_COLORS,
  Ic as MAPPING_RAMP_3D,
  zc as MAPPING_RAMP_NAME,
  Ac as PAYLOAD_TYPES,
  jc as SCHEMA_TYPES,
  Mr as VIEW_TAGS,
  Ha as boundedZoom,
  Uo as buildRegistry,
  Nc as chromeMenu,
  ts as debugEnabled,
  Me as defineElement,
  zo as describeProblem,
  Oc as dispatchProblem,
  cc as entryLabel,
  za as formatIssues,
  Vo as guardWheel,
  ns as logPayload,
  Ko as lookup,
  kr as lookupOfType,
  Tc as mappingPayloadFor,
  qc as mount,
  Ec as parseConcentration,
  rs as payloadJson,
  qr as resetControl,
  xc as validateAs,
  Ia as validatePayload,
  Fo as viewerInteraction,
  Ja as wheelFactor
};
