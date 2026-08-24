const Yr = {
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
const R = ai() ? Yr.dark : Yr.light;
function I(e, t, r) {
  const o = document.createElement(e);
  return t && (o.style.cssText = t), r != null && (o.textContent = r), o;
}
function ir(e) {
  return String(e ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function he(e) {
  if (e == null) return "unknown error";
  const t = e.message;
  if (typeof t == "string" && t) return t;
  const r = String(e);
  return r === "[object Object]" ? e.name || "unknown error" : r;
}
const et = (e) => e.toLocaleString("en-US"), We = "-", st = `background:${R.btnBg};color:${R.btnFg};border:1px solid ${R.btnBorder};padding:4px 9px;font-size:11px;font-weight:bold;border-radius:3px;cursor:pointer;font-family:inherit;`, To = `background:${R.selectBg};color:${R.textPrimary};border:1px solid ${R.selectBorder};border-radius:6px;padding:4px 8px;font-size:12px;cursor:pointer;font-family:inherit;`;
function cr(e, t, r) {
  const o = I("div", "display:flex;gap:4px;"), c = e.map((n) => {
    const i = I("button", st, n.label);
    return i.title = n.title || n.label, i.onmouseover = () => {
      i.style.background = R.btnBgHover;
    }, i.onmouseout = () => {
      i.style.background = t === n.id ? R.btnBgActive : R.btnBg;
    }, i.onclick = () => {
      o.setActive(n.id), r(n.id);
    }, o.appendChild(i), { id: n.id, btn: i };
  });
  return o.setActive = (n) => {
    t = n, c.forEach((i) => {
      i.btn.style.background = i.id === t ? R.btnBgActive : R.btnBg;
    });
  }, o.setActive(t), o;
}
function se(e, t, r) {
  const o = I("span", "display:inline-flex;align-items:center;gap:5px;white-space:nowrap;");
  r && o.appendChild(
    I("span", `width:8px;height:8px;border-radius:50%;background:${r};display:inline-block;`)
  );
  const c = I("span");
  return c.innerHTML = `${ir(e)} <b style="color:${R.textPrimary};">${ir(t)}</b>`, o.appendChild(c), o;
}
function De(e, t) {
  const r = I("div", "", `⚠ ${t}`);
  return r.style.cssText = `position:absolute;top:10px;left:50%;transform:translateX(-50%);max-width:90%;z-index:20;padding:6px 14px;border-radius:6px;font-size:12px;background:${R.warnBg};color:${R.warnFg};border:1px solid ${R.warnBorder};`, e.appendChild(r), r;
}
function ie(e, t = !1) {
  return I(
    "div",
    `flex:1;display:flex;align-items:center;justify-content:center;text-align:center;padding:24px;font-size:13px;color:${t ? R.errorFg : R.textMuted2};`,
    e
  );
}
function je(e, t) {
  const r = I(
    "div",
    `display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;padding:9px 14px;flex-shrink:0;background:${R.toolbarBg};border-bottom:1px solid ${R.toolbarBorder};`
  );
  return r.titleEl = I("span", `font-weight:700;font-size:15px;color:${R.titleColor};letter-spacing:.02em;`, e), r.subtitleEl = I("span", `font-size:12px;color:${R.textMuted2};`, t || ""), r.statsEl = I(
    "div",
    `display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-left:auto;font-size:11px;color:${R.textMuted};`
  ), r.toggleEl = I("div", "display:flex;align-items:center;margin-left:10px;flex-shrink:0;"), r.appendChild(r.titleEl), r.appendChild(r.subtitleEl), r.appendChild(r.statsEl), r.appendChild(r.toggleEl), r;
}
function ze(e, t, r = !1) {
  const o = I("div", "display:flex;gap:12px;align-items:baseline;padding:5px 0;min-width:0;");
  o.appendChild(
    I(
      "span",
      `flex:0 0 128px;font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:${R.textMuted2};`,
      e
    )
  );
  const c = I(
    "span",
    `flex:1;min-width:0;user-select:text;cursor:text;overflow-wrap:anywhere;color:${R.textPrimary};` + (r ? "font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:11px;" : "font-size:12px;"),
    t
  );
  return c.title = t, o.appendChild(c), o;
}
function lr(e) {
  return I(
    "span",
    `padding:1px 7px;border-radius:10px;font-size:10px;font-weight:700;letter-spacing:.04em;white-space:nowrap;background:${R.badgeBg};color:${R.badgeFg};`,
    e
  );
}
function Ar() {
  return I(
    "div",
    `display:flex;flex-direction:column;gap:2px;padding:14px 18px;border-radius:10px;background:${R.cardBg};border:1px solid ${R.cardBorder};`
  );
}
function Io() {
  const e = I("div", "flex:1;position:relative;min-height:0;min-width:0;"), t = I("div", "position:absolute;inset:0;");
  return t.dataset.gufeViewer = "", e.appendChild(t), { wrap: e, container: t };
}
const ci = !1;
function li() {
  const e = I("span", "display:inline-flex;flex-direction:column;gap:2px;justify-content:center;");
  for (let t = 0; t < 3; t++)
    e.appendChild(I("span", `display:block;width:11px;height:1.5px;border-radius:1px;background:${R.btnFg};`));
  return e;
}
function il(e, t, r = {}) {
  let o = r.open ?? ci, c = !1;
  const n = I("div", "flex-shrink:0;"), i = I("button", `${st}display:inline-flex;align-items:center;gap:6px;padding:4px 8px;`);
  i.appendChild(li()), i.setAttribute("aria-label", r.label || "Toggle menu");
  const a = () => {
    o && !c && (c = !0, n.appendChild(t())), n.style.display = o ? "" : "none", i.style.background = o ? R.btnBgActive : R.btnBg, i.setAttribute("aria-expanded", String(o));
  }, d = (y) => {
    y !== o && (o = y, a(), r.onToggle?.(o));
  };
  return i.onclick = () => d(!o), i.onmouseover = () => {
    i.style.background = o ? R.btnBgActive : R.btnBgHover;
  }, i.onmouseout = () => {
    i.style.background = o ? R.btnBgActive : R.btnBg;
  }, e.toggleEl.appendChild(i), a(), {
    panel: n,
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
    return di.some((r) => t.has(r));
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
function yi(e, t, r) {
  if (!mi(r)) return;
  const o = gi(t), c = t?.type, n = `[gufe-viz] ${e}${typeof c == "string" ? ` ${c}` : ""} (${o.length} chars)`, i = typeof console.groupCollapsed == "function";
  i ? console.groupCollapsed(n) : console.log(n), console.log(o), console.log(t), i && console.groupEnd?.();
}
const vi = 150;
class Ee extends HTMLElement {
  #t = null;
  #e = null;
  #n = null;
  #r = null;
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
    this.style.display = "block", this.style.width = this.style.width || "100%", this.style.height = this.style.height || "100%", this.style.background = R.appBg, this.style.color = R.textPrimary, this.style.fontFamily = "'Inter',system-ui,sans-serif", typeof ResizeObserver < "u" && !this.#r && (this.#r = new ResizeObserver(() => {
      this.#o && clearTimeout(this.#o), this.#o = setTimeout(() => this.#e?.onResize?.(), vi);
    }), this.#r.observe(this)), this.#a();
  }
  disconnectedCallback() {
    this.#s(), this.#r?.disconnect(), this.#r = null;
  }
  /** Release whatever the mounted view owns and empty the element. */
  #s() {
    if (this.#i++, this.#o && (clearTimeout(this.#o), this.#o = null), this.#e?.cleanup)
      try {
        this.#e.cleanup();
      } catch (t) {
        console.warn("[gufe-viz] cleanup failed:", t);
      }
    this.#e = null, this.replaceChildren(), this.#n = null;
  }
  /** Tear the mounted view down and hand back a fresh, empty shell. */
  #d() {
    return this.#s(), this.#n = I(
      "div",
      `width:100%;height:100%;display:flex;flex-direction:column;overflow:hidden;background:${R.appBg};`
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
    const t = this.#d(), r = this.#i;
    if (this.#t == null) {
      t.appendChild(ie(this.placeholder()));
      return;
    }
    let o;
    try {
      o = this.renderView(t, this.#t);
    } catch (c) {
      this.#l(t, r, c);
      return;
    }
    o instanceof Promise ? o.then(
      (c) => this.#c(c, r),
      (c) => this.#l(t, r, c)
    ) : this.#c(o, r);
  }
  /** Take ownership of a view's handle, unless it belongs to a dead render. */
  #c(t, r) {
    if (r !== this.#i || !this.isConnected) {
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
    r === this.#i && (console.warn("[gufe-viz] render failed:", o), t.replaceChildren(ie(`Failed to render: ${he(o)}`, !0)));
  }
  /** Force a resize pass - for hosts that know they resized us. */
  resize() {
    this.#e?.onResize?.();
  }
}
function Ce(e, t) {
  typeof customElements > "u" || customElements.get(e) || customElements.define(e, t);
}
function $i(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ct = { exports: {} }, vr = {}, Pe = {}, Me = {}, $r = {}, br = {}, _r = {}, Xr;
function sr() {
  return Xr || (Xr = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.regexpCode = e.getEsmExportName = e.getProperty = e.safeStringify = e.stringify = e.strConcat = e.addCodeArg = e.str = e._ = e.nil = e._Code = e.Name = e.IDENTIFIER = e._CodeOrName = void 0;
    class t {
    }
    e._CodeOrName = t, e.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
    class r extends t {
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
    e.Name = r;
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
        return (u = this._str) !== null && u !== void 0 ? u : this._str = this._items.reduce((h, w) => `${h}${w}`, "");
      }
      get names() {
        var u;
        return (u = this._names) !== null && u !== void 0 ? u : this._names = this._items.reduce((h, w) => (w instanceof r && (h[w.str] = (h[w.str] || 0) + 1), h), {});
      }
    }
    e._Code = o, e.nil = new o("");
    function c(m, ...u) {
      const h = [m[0]];
      let w = 0;
      for (; w < u.length; )
        a(h, u[w]), h.push(m[++w]);
      return new o(h);
    }
    e._ = c;
    const n = new o("+");
    function i(m, ...u) {
      const h = [b(m[0])];
      let w = 0;
      for (; w < u.length; )
        h.push(n), a(h, u[w]), h.push(n, b(m[++w]));
      return d(h), new o(h);
    }
    e.str = i;
    function a(m, u) {
      u instanceof o ? m.push(...u._items) : u instanceof r ? m.push(u) : m.push(_(u));
    }
    e.addCodeArg = a;
    function d(m) {
      let u = 1;
      for (; u < m.length - 1; ) {
        if (m[u] === n) {
          const h = y(m[u - 1], m[u + 1]);
          if (h !== void 0) {
            m.splice(u - 1, 3, h);
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
        return u instanceof r || m[m.length - 1] !== '"' ? void 0 : typeof u != "string" ? `${m.slice(0, -1)}${u}"` : u[0] === '"' ? m.slice(0, -1) + u.slice(1) : void 0;
      if (typeof u == "string" && u[0] === '"' && !(m instanceof r))
        return `"${m}${u.slice(1)}`;
    }
    function g(m, u) {
      return u.emptyStr() ? m : m.emptyStr() ? u : i`${m}${u}`;
    }
    e.strConcat = g;
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
    function k(m) {
      return typeof m == "string" && e.IDENTIFIER.test(m) ? new o(`.${m}`) : c`[${m}]`;
    }
    e.getProperty = k;
    function S(m) {
      if (typeof m == "string" && e.IDENTIFIER.test(m))
        return new o(`${m}`);
      throw new Error(`CodeGen: invalid export name: ${m}, use explicit $id name mapping`);
    }
    e.getEsmExportName = S;
    function f(m) {
      return new o(m.toString());
    }
    e.regexpCode = f;
  })(_r)), _r;
}
var wr = {}, Zr;
function Qr() {
  return Zr || (Zr = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0;
    const t = /* @__PURE__ */ sr();
    class r extends Error {
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
      constructor({ prefixes: y, parent: g } = {}) {
        this._names = {}, this._prefixes = y, this._parent = g;
      }
      toName(y) {
        return y instanceof t.Name ? y : this.name(y);
      }
      name(y) {
        return new t.Name(this._newName(y));
      }
      _newName(y) {
        const g = this._names[y] || this._nameGroup(y);
        return `${y}${g.index++}`;
      }
      _nameGroup(y) {
        var g, _;
        if (!((_ = (g = this._parent) === null || g === void 0 ? void 0 : g._prefixes) === null || _ === void 0) && _.has(y) || this._prefixes && !this._prefixes.has(y))
          throw new Error(`CodeGen: prefix "${y}" is not allowed in this scope`);
        return this._names[y] = { prefix: y, index: 0 };
      }
    }
    e.Scope = c;
    class n extends t.Name {
      constructor(y, g) {
        super(g), this.prefix = y;
      }
      setValue(y, { property: g, itemIndex: _ }) {
        this.value = y, this.scopePath = (0, t._)`.${new t.Name(g)}[${_}]`;
      }
    }
    e.ValueScopeName = n;
    const i = (0, t._)`\n`;
    class a extends c {
      constructor(y) {
        super(y), this._values = {}, this._scope = y.scope, this.opts = { ...y, _n: y.lines ? i : t.nil };
      }
      get() {
        return this._scope;
      }
      name(y) {
        return new n(y, this._newName(y));
      }
      value(y, g) {
        var _;
        if (g.ref === void 0)
          throw new Error("CodeGen: ref must be passed in value");
        const $ = this.toName(y), { prefix: b } = $, k = (_ = g.key) !== null && _ !== void 0 ? _ : g.ref;
        let S = this._values[b];
        if (S) {
          const u = S.get(k);
          if (u)
            return u;
        } else
          S = this._values[b] = /* @__PURE__ */ new Map();
        S.set(k, $);
        const f = this._scope[b] || (this._scope[b] = []), m = f.length;
        return f[m] = g.ref, $.setValue(g, { property: b, itemIndex: m }), $;
      }
      getValue(y, g) {
        const _ = this._values[y];
        if (_)
          return _.get(g);
      }
      scopeRefs(y, g = this._values) {
        return this._reduceValues(g, (_) => {
          if (_.scopePath === void 0)
            throw new Error(`CodeGen: name "${_}" has no value`);
          return (0, t._)`${y}${_.scopePath}`;
        });
      }
      scopeCode(y = this._values, g, _) {
        return this._reduceValues(y, ($) => {
          if ($.value === void 0)
            throw new Error(`CodeGen: name "${$}" has no value`);
          return $.value.code;
        }, g, _);
      }
      _reduceValues(y, g, _ = {}, $) {
        let b = t.nil;
        for (const k in y) {
          const S = y[k];
          if (!S)
            continue;
          const f = _[k] = _[k] || /* @__PURE__ */ new Map();
          S.forEach((m) => {
            if (f.has(m))
              return;
            f.set(m, o.Started);
            let u = g(m);
            if (u) {
              const h = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
              b = (0, t._)`${b}${h} ${m} = ${u};${this.opts._n}`;
            } else if (u = $?.(m))
              b = (0, t._)`${b}${u}${this.opts._n}`;
            else
              throw new r(m);
            f.set(m, o.Completed);
          });
        }
        return b;
      }
    }
    e.ValueScope = a;
  })(wr)), wr;
}
var en;
function J() {
  return en || (en = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
    const t = /* @__PURE__ */ sr(), r = /* @__PURE__ */ Qr();
    var o = /* @__PURE__ */ sr();
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
    var c = /* @__PURE__ */ Qr();
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
    class n {
      optimizeNodes() {
        return this;
      }
      optimizeNames(v, C) {
        return this;
      }
    }
    class i extends n {
      constructor(v, C, z) {
        super(), this.varKind = v, this.name = C, this.rhs = z;
      }
      render({ es5: v, _n: C }) {
        const z = v ? r.varKinds.var : this.varKind, K = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
        return `${z} ${this.name}${K};` + C;
      }
      optimizeNames(v, C) {
        if (v[this.name.str])
          return this.rhs && (this.rhs = U(this.rhs, v, C)), this;
      }
      get names() {
        return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
      }
    }
    class a extends n {
      constructor(v, C, z) {
        super(), this.lhs = v, this.rhs = C, this.sideEffects = z;
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
    class d extends a {
      constructor(v, C, z, K) {
        super(v, z, K), this.op = C;
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
    class g extends n {
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
    class $ extends n {
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
    class b extends n {
      constructor(v = []) {
        super(), this.nodes = v;
      }
      render(v) {
        return this.nodes.reduce((C, z) => C + z.render(v), "");
      }
      optimizeNodes() {
        const { nodes: v } = this;
        let C = v.length;
        for (; C--; ) {
          const z = v[C].optimizeNodes();
          Array.isArray(z) ? v.splice(C, 1, ...z) : z ? v[C] = z : v.splice(C, 1);
        }
        return v.length > 0 ? this : void 0;
      }
      optimizeNames(v, C) {
        const { nodes: z } = this;
        let K = z.length;
        for (; K--; ) {
          const G = z[K];
          G.optimizeNames(v, C) || (Q(v, G.names), z.splice(K, 1));
        }
        return z.length > 0 ? this : void 0;
      }
      get names() {
        return this.nodes.reduce((v, C) => j(v, C.names), {});
      }
    }
    class k extends b {
      render(v) {
        return "{" + v._n + super.render(v) + "}" + v._n;
      }
    }
    class S extends b {
    }
    class f extends k {
    }
    f.kind = "else";
    class m extends k {
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
          const z = C.optimizeNodes();
          C = this.else = Array.isArray(z) ? new f(z) : z;
        }
        if (C)
          return v === !1 ? C instanceof m ? C : C.nodes : this.nodes.length ? this : new m(te(v), C instanceof m ? [C] : C.nodes);
        if (!(v === !1 || !this.nodes.length))
          return this;
      }
      optimizeNames(v, C) {
        var z;
        if (this.else = (z = this.else) === null || z === void 0 ? void 0 : z.optimizeNames(v, C), !!(super.optimizeNames(v, C) || this.else))
          return this.condition = U(this.condition, v, C), this;
      }
      get names() {
        const v = super.names;
        return D(v, this.condition), this.else && j(v, this.else.names), v;
      }
    }
    m.kind = "if";
    class u extends k {
    }
    u.kind = "for";
    class h extends u {
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
    class w extends u {
      constructor(v, C, z, K) {
        super(), this.varKind = v, this.name = C, this.from = z, this.to = K;
      }
      render(v) {
        const C = v.es5 ? r.varKinds.var : this.varKind, { name: z, from: K, to: G } = this;
        return `for(${C} ${z}=${K}; ${z}<${G}; ${z}++)` + super.render(v);
      }
      get names() {
        const v = D(super.names, this.from);
        return D(v, this.to);
      }
    }
    class s extends u {
      constructor(v, C, z, K) {
        super(), this.loop = v, this.varKind = C, this.name = z, this.iterable = K;
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
    class l extends k {
      constructor(v, C, z) {
        super(), this.name = v, this.args = C, this.async = z;
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
    class E extends k {
      render(v) {
        let C = "try" + super.render(v);
        return this.catch && (C += this.catch.render(v)), this.finally && (C += this.finally.render(v)), C;
      }
      optimizeNodes() {
        var v, C;
        return super.optimizeNodes(), (v = this.catch) === null || v === void 0 || v.optimizeNodes(), (C = this.finally) === null || C === void 0 || C.optimizeNodes(), this;
      }
      optimizeNames(v, C) {
        var z, K;
        return super.optimizeNames(v, C), (z = this.catch) === null || z === void 0 || z.optimizeNames(v, C), (K = this.finally) === null || K === void 0 || K.optimizeNames(v, C), this;
      }
      get names() {
        const v = super.names;
        return this.catch && j(v, this.catch.names), this.finally && j(v, this.finally.names), v;
      }
    }
    class P extends k {
      constructor(v) {
        super(), this.error = v;
      }
      render(v) {
        return `catch(${this.error})` + super.render(v);
      }
    }
    P.kind = "catch";
    class A extends k {
      render(v) {
        return "finally" + super.render(v);
      }
    }
    A.kind = "finally";
    class N {
      constructor(v, C = {}) {
        this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ...C, _n: C.lines ? `
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
      scopeValue(v, C) {
        const z = this._extScope.value(v, C);
        return (this._values[z.prefix] || (this._values[z.prefix] = /* @__PURE__ */ new Set())).add(z), z;
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
      _def(v, C, z, K) {
        const G = this._scope.toName(C);
        return z !== void 0 && K && (this._constants[G.str] = z), this._leafNode(new i(v, G, z)), G;
      }
      // `const` declaration (`var` in es5 mode)
      const(v, C, z) {
        return this._def(r.varKinds.const, v, C, z);
      }
      // `let` declaration with optional assignment (`var` in es5 mode)
      let(v, C, z) {
        return this._def(r.varKinds.let, v, C, z);
      }
      // `var` declaration with optional assignment
      var(v, C, z) {
        return this._def(r.varKinds.var, v, C, z);
      }
      // assignment code
      assign(v, C, z) {
        return this._leafNode(new a(v, C, z));
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
        for (const [z, K] of v)
          C.length > 1 && C.push(","), C.push(z), (z !== K || this.opts.es5) && (C.push(":"), (0, t.addCodeArg)(C, K));
        return C.push("}"), new t._Code(C);
      }
      // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
      if(v, C, z) {
        if (this._blockNode(new m(v)), C && z)
          this.code(C).else().code(z).endIf();
        else if (C)
          this.code(C).endIf();
        else if (z)
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
      _for(v, C) {
        return this._blockNode(v), C && this.code(C).endFor(), this;
      }
      // a generic `for` clause (or statement if `forBody` is passed)
      for(v, C) {
        return this._for(new h(v), C);
      }
      // `for` statement for a range of values
      forRange(v, C, z, K, G = this.opts.es5 ? r.varKinds.var : r.varKinds.let) {
        const re = this._scope.toName(v);
        return this._for(new w(G, re, C, z), () => K(re));
      }
      // `for-of` statement (in es5 mode replace with a normal for loop)
      forOf(v, C, z, K = r.varKinds.const) {
        const G = this._scope.toName(v);
        if (this.opts.es5) {
          const re = C instanceof t.Name ? C : this.var("_arr", C);
          return this.forRange("_i", 0, (0, t._)`${re}.length`, (ee) => {
            this.var(G, (0, t._)`${re}[${ee}]`), z(G);
          });
        }
        return this._for(new s("of", K, G, C), () => z(G));
      }
      // `for-in` statement.
      // With option `ownProperties` replaced with a `for-of` loop for object keys
      forIn(v, C, z, K = this.opts.es5 ? r.varKinds.var : r.varKinds.const) {
        if (this.opts.ownProperties)
          return this.forOf(v, (0, t._)`Object.keys(${C})`, z);
        const G = this._scope.toName(v);
        return this._for(new s("in", K, G, C), () => z(G));
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
        return this._leafNode(new g(v));
      }
      // `return` statement
      return(v) {
        const C = new p();
        if (this._blockNode(C), this.code(v), C.nodes.length !== 1)
          throw new Error('CodeGen: "return" should have one node');
        return this._endBlockNode(p);
      }
      // `try` statement
      try(v, C, z) {
        if (!C && !z)
          throw new Error('CodeGen: "try" without "catch" and "finally"');
        const K = new E();
        if (this._blockNode(K), this.code(v), C) {
          const G = this.name("e");
          this._currNode = K.catch = new P(G), C(G);
        }
        return z && (this._currNode = K.finally = new A(), this.code(z)), this._endBlockNode(P, A);
      }
      // `throw` statement
      throw(v) {
        return this._leafNode(new _(v));
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
        const z = this._nodes.length - C;
        if (z < 0 || v !== void 0 && z !== v)
          throw new Error(`CodeGen: wrong number of nodes: ${z} vs ${v} expected`);
        return this._nodes.length = C, this;
      }
      // `function` heading (or definition if funcBody is passed)
      func(v, C = t.nil, z, K) {
        return this._blockNode(new l(v, C, z)), K && this.code(K).endFunc(), this;
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
        const z = this._currNode;
        if (z instanceof v || C && z instanceof C)
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
    e.CodeGen = N;
    function j(T, v) {
      for (const C in v)
        T[C] = (T[C] || 0) + (v[C] || 0);
      return T;
    }
    function D(T, v) {
      return v instanceof t._CodeOrName ? j(T, v.names) : T;
    }
    function U(T, v, C) {
      if (T instanceof t.Name)
        return z(T);
      if (!K(T))
        return T;
      return new t._Code(T._items.reduce((G, re) => (re instanceof t.Name && (re = z(re)), re instanceof t._Code ? G.push(...re._items) : G.push(re), G), []));
      function z(G) {
        const re = C[G.str];
        return re === void 0 || v[G.str] !== 1 ? G : (delete v[G.str], re);
      }
      function K(G) {
        return G instanceof t._Code && G._items.some((re) => re instanceof t.Name && v[re.str] === 1 && C[re.str] !== void 0);
      }
    }
    function Q(T, v) {
      for (const C in v)
        T[C] = (T[C] || 0) - (v[C] || 0);
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
      return (v, C) => v === t.nil ? C : C === t.nil ? v : (0, t._)`${B(v)} ${T} ${B(C)}`;
    }
    function B(T) {
      return T instanceof t.Name ? T : (0, t._)`(${T})`;
    }
  })(br)), br;
}
var W = {}, tn;
function Z() {
  if (tn) return W;
  tn = 1, Object.defineProperty(W, "__esModule", { value: !0 }), W.checkStrictMode = W.getErrorPath = W.Type = W.useFunc = W.setEvaluated = W.evaluatedPropsToName = W.mergeEvaluated = W.eachItem = W.unescapeJsonPointer = W.escapeJsonPointer = W.escapeFragment = W.unescapeFragment = W.schemaRefOrVal = W.schemaHasRulesButRef = W.schemaHasRules = W.checkUnknownRules = W.alwaysValidSchema = W.toHash = void 0;
  const e = /* @__PURE__ */ J(), t = /* @__PURE__ */ sr();
  function r(s) {
    const l = {};
    for (const p of s)
      l[p] = !0;
    return l;
  }
  W.toHash = r;
  function o(s, l) {
    return typeof l == "boolean" ? l : Object.keys(l).length === 0 ? !0 : (c(s, l), !n(l, s.self.RULES.all));
  }
  W.alwaysValidSchema = o;
  function c(s, l = s.schema) {
    const { opts: p, self: E } = s;
    if (!p.strictSchema || typeof l == "boolean")
      return;
    const P = E.RULES.keywords;
    for (const A in l)
      P[A] || w(s, `unknown keyword: "${A}"`);
  }
  W.checkUnknownRules = c;
  function n(s, l) {
    if (typeof s == "boolean")
      return !s;
    for (const p in s)
      if (l[p])
        return !0;
    return !1;
  }
  W.schemaHasRules = n;
  function i(s, l) {
    if (typeof s == "boolean")
      return !s;
    for (const p in s)
      if (p !== "$ref" && l.all[p])
        return !0;
    return !1;
  }
  W.schemaHasRulesButRef = i;
  function a({ topSchemaRef: s, schemaPath: l }, p, E, P) {
    if (!P) {
      if (typeof p == "number" || typeof p == "boolean")
        return p;
      if (typeof p == "string")
        return (0, e._)`${p}`;
    }
    return (0, e._)`${s}${l}${(0, e.getProperty)(E)}`;
  }
  W.schemaRefOrVal = a;
  function d(s) {
    return _(decodeURIComponent(s));
  }
  W.unescapeFragment = d;
  function y(s) {
    return encodeURIComponent(g(s));
  }
  W.escapeFragment = y;
  function g(s) {
    return typeof s == "number" ? `${s}` : s.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  W.escapeJsonPointer = g;
  function _(s) {
    return s.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  W.unescapeJsonPointer = _;
  function $(s, l) {
    if (Array.isArray(s))
      for (const p of s)
        l(p);
    else
      l(s);
  }
  W.eachItem = $;
  function b({ mergeNames: s, mergeToName: l, mergeValues: p, resultToName: E }) {
    return (P, A, N, j) => {
      const D = N === void 0 ? A : N instanceof e.Name ? (A instanceof e.Name ? s(P, A, N) : l(P, A, N), N) : A instanceof e.Name ? (l(P, N, A), A) : p(A, N);
      return j === e.Name && !(D instanceof e.Name) ? E(P, D) : D;
    };
  }
  W.mergeEvaluated = {
    props: b({
      mergeNames: (s, l, p) => s.if((0, e._)`${p} !== true && ${l} !== undefined`, () => {
        s.if((0, e._)`${l} === true`, () => s.assign(p, !0), () => s.assign(p, (0, e._)`${p} || {}`).code((0, e._)`Object.assign(${p}, ${l})`));
      }),
      mergeToName: (s, l, p) => s.if((0, e._)`${p} !== true`, () => {
        l === !0 ? s.assign(p, !0) : (s.assign(p, (0, e._)`${p} || {}`), S(s, p, l));
      }),
      mergeValues: (s, l) => s === !0 ? !0 : { ...s, ...l },
      resultToName: k
    }),
    items: b({
      mergeNames: (s, l, p) => s.if((0, e._)`${p} !== true && ${l} !== undefined`, () => s.assign(p, (0, e._)`${l} === true ? true : ${p} > ${l} ? ${p} : ${l}`)),
      mergeToName: (s, l, p) => s.if((0, e._)`${p} !== true`, () => s.assign(p, l === !0 ? !0 : (0, e._)`${p} > ${l} ? ${p} : ${l}`)),
      mergeValues: (s, l) => s === !0 ? !0 : Math.max(s, l),
      resultToName: (s, l) => s.var("items", l)
    })
  };
  function k(s, l) {
    if (l === !0)
      return s.var("props", !0);
    const p = s.var("props", (0, e._)`{}`);
    return l !== void 0 && S(s, p, l), p;
  }
  W.evaluatedPropsToName = k;
  function S(s, l, p) {
    Object.keys(p).forEach((E) => s.assign((0, e._)`${l}${(0, e.getProperty)(E)}`, !0));
  }
  W.setEvaluated = S;
  const f = {};
  function m(s, l) {
    return s.scopeValue("func", {
      ref: l,
      code: f[l.code] || (f[l.code] = new t._Code(l.code))
    });
  }
  W.useFunc = m;
  var u;
  (function(s) {
    s[s.Num = 0] = "Num", s[s.Str = 1] = "Str";
  })(u || (W.Type = u = {}));
  function h(s, l, p) {
    if (s instanceof e.Name) {
      const E = l === u.Num;
      return p ? E ? (0, e._)`"[" + ${s} + "]"` : (0, e._)`"['" + ${s} + "']"` : E ? (0, e._)`"/" + ${s}` : (0, e._)`"/" + ${s}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return p ? (0, e.getProperty)(s).toString() : "/" + g(s);
  }
  W.getErrorPath = h;
  function w(s, l, p = s.opts.strictSchema) {
    if (p) {
      if (l = `strict mode: ${l}`, p === !0)
        throw new Error(l);
      s.self.logger.warn(l);
    }
  }
  return W.checkStrictMode = w, W;
}
var lt = {}, rn;
function we() {
  if (rn) return lt;
  rn = 1, Object.defineProperty(lt, "__esModule", { value: !0 });
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
  return lt.default = t, lt;
}
var nn;
function dr() {
  return nn || (nn = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
    const t = /* @__PURE__ */ J(), r = /* @__PURE__ */ Z(), o = /* @__PURE__ */ we();
    e.keywordError = {
      message: ({ keyword: f }) => (0, t.str)`must pass "${f}" keyword validation`
    }, e.keyword$DataError = {
      message: ({ keyword: f, schemaType: m }) => m ? (0, t.str)`"${f}" keyword must be ${m} ($data)` : (0, t.str)`"${f}" keyword is invalid ($data)`
    };
    function c(f, m = e.keywordError, u, h) {
      const { it: w } = f, { gen: s, compositeRule: l, allErrors: p } = w, E = _(f, m, u);
      h ?? (l || p) ? d(s, E) : y(w, (0, t._)`[${E}]`);
    }
    e.reportError = c;
    function n(f, m = e.keywordError, u) {
      const { it: h } = f, { gen: w, compositeRule: s, allErrors: l } = h, p = _(f, m, u);
      d(w, p), s || l || y(h, o.default.vErrors);
    }
    e.reportExtraError = n;
    function i(f, m) {
      f.assign(o.default.errors, m), f.if((0, t._)`${o.default.vErrors} !== null`, () => f.if(m, () => f.assign((0, t._)`${o.default.vErrors}.length`, m), () => f.assign(o.default.vErrors, null)));
    }
    e.resetErrorsCount = i;
    function a({ gen: f, keyword: m, schemaValue: u, data: h, errsCount: w, it: s }) {
      if (w === void 0)
        throw new Error("ajv implementation error");
      const l = f.name("err");
      f.forRange("i", w, o.default.errors, (p) => {
        f.const(l, (0, t._)`${o.default.vErrors}[${p}]`), f.if((0, t._)`${l}.instancePath === undefined`, () => f.assign((0, t._)`${l}.instancePath`, (0, t.strConcat)(o.default.instancePath, s.errorPath))), f.assign((0, t._)`${l}.schemaPath`, (0, t.str)`${s.errSchemaPath}/${m}`), s.opts.verbose && (f.assign((0, t._)`${l}.schema`, u), f.assign((0, t._)`${l}.data`, h));
      });
    }
    e.extendErrors = a;
    function d(f, m) {
      const u = f.const("err", m);
      f.if((0, t._)`${o.default.vErrors} === null`, () => f.assign(o.default.vErrors, (0, t._)`[${u}]`), (0, t._)`${o.default.vErrors}.push(${u})`), f.code((0, t._)`${o.default.errors}++`);
    }
    function y(f, m) {
      const { gen: u, validateName: h, schemaEnv: w } = f;
      w.$async ? u.throw((0, t._)`new ${f.ValidationError}(${m})`) : (u.assign((0, t._)`${h}.errors`, m), u.return(!1));
    }
    const g = {
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
      const { createErrors: h } = f.it;
      return h === !1 ? (0, t._)`{}` : $(f, m, u);
    }
    function $(f, m, u = {}) {
      const { gen: h, it: w } = f, s = [
        b(w, u),
        k(f, u)
      ];
      return S(f, m, s), h.object(...s);
    }
    function b({ errorPath: f }, { instancePath: m }) {
      const u = m ? (0, t.str)`${f}${(0, r.getErrorPath)(m, r.Type.Str)}` : f;
      return [o.default.instancePath, (0, t.strConcat)(o.default.instancePath, u)];
    }
    function k({ keyword: f, it: { errSchemaPath: m } }, { schemaPath: u, parentSchema: h }) {
      let w = h ? m : (0, t.str)`${m}/${f}`;
      return u && (w = (0, t.str)`${w}${(0, r.getErrorPath)(u, r.Type.Str)}`), [g.schemaPath, w];
    }
    function S(f, { params: m, message: u }, h) {
      const { keyword: w, data: s, schemaValue: l, it: p } = f, { opts: E, propertyName: P, topSchemaRef: A, schemaPath: N } = p;
      h.push([g.keyword, w], [g.params, typeof m == "function" ? m(f) : m || (0, t._)`{}`]), E.messages && h.push([g.message, typeof u == "function" ? u(f) : u]), E.verbose && h.push([g.schema, l], [g.parentSchema, (0, t._)`${A}${N}`], [o.default.data, s]), P && h.push([g.propertyName, P]);
    }
  })($r)), $r;
}
var on;
function bi() {
  if (on) return Me;
  on = 1, Object.defineProperty(Me, "__esModule", { value: !0 }), Me.boolOrEmptySchema = Me.topBoolOrEmptySchema = void 0;
  const e = /* @__PURE__ */ dr(), t = /* @__PURE__ */ J(), r = /* @__PURE__ */ we(), o = {
    message: "boolean schema is false"
  };
  function c(a) {
    const { gen: d, schema: y, validateName: g } = a;
    y === !1 ? i(a, !1) : typeof y == "object" && y.$async === !0 ? d.return(r.default.data) : (d.assign((0, t._)`${g}.errors`, null), d.return(!0));
  }
  Me.topBoolOrEmptySchema = c;
  function n(a, d) {
    const { gen: y, schema: g } = a;
    g === !1 ? (y.var(d, !1), i(a)) : y.var(d, !0);
  }
  Me.boolOrEmptySchema = n;
  function i(a, d) {
    const { gen: y, data: g } = a, _ = {
      gen: y,
      keyword: "false schema",
      data: g,
      schema: !1,
      schemaCode: !1,
      schemaValue: !1,
      params: {},
      it: a
    };
    (0, e.reportError)(_, o, void 0, d);
  }
  return Me;
}
var le = {}, Oe = {}, sn;
function zo() {
  if (sn) return Oe;
  sn = 1, Object.defineProperty(Oe, "__esModule", { value: !0 }), Oe.getRules = Oe.isJSONType = void 0;
  const e = ["string", "number", "integer", "boolean", "null", "object", "array"], t = new Set(e);
  function r(c) {
    return typeof c == "string" && t.has(c);
  }
  Oe.isJSONType = r;
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
var xe = {}, an;
function qo() {
  if (an) return xe;
  an = 1, Object.defineProperty(xe, "__esModule", { value: !0 }), xe.shouldUseRule = xe.shouldUseGroup = xe.schemaHasRulesForType = void 0;
  function e({ schema: o, self: c }, n) {
    const i = c.RULES.types[n];
    return i && i !== !0 && t(o, i);
  }
  xe.schemaHasRulesForType = e;
  function t(o, c) {
    return c.rules.some((n) => r(o, n));
  }
  xe.shouldUseGroup = t;
  function r(o, c) {
    var n;
    return o[c.keyword] !== void 0 || ((n = c.definition.implements) === null || n === void 0 ? void 0 : n.some((i) => o[i] !== void 0));
  }
  return xe.shouldUseRule = r, xe;
}
var cn;
function ar() {
  if (cn) return le;
  cn = 1, Object.defineProperty(le, "__esModule", { value: !0 }), le.reportTypeError = le.checkDataTypes = le.checkDataType = le.coerceAndCheckDataType = le.getJSONTypes = le.getSchemaTypes = le.DataType = void 0;
  const e = /* @__PURE__ */ zo(), t = /* @__PURE__ */ qo(), r = /* @__PURE__ */ dr(), o = /* @__PURE__ */ J(), c = /* @__PURE__ */ Z();
  var n;
  (function(u) {
    u[u.Correct = 0] = "Correct", u[u.Wrong = 1] = "Wrong";
  })(n || (le.DataType = n = {}));
  function i(u) {
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
  le.getSchemaTypes = i;
  function a(u) {
    const h = Array.isArray(u) ? u : u ? [u] : [];
    if (h.every(e.isJSONType))
      return h;
    throw new Error("type must be JSONType or JSONType[]: " + h.join(","));
  }
  le.getJSONTypes = a;
  function d(u, h) {
    const { gen: w, data: s, opts: l } = u, p = g(h, l.coerceTypes), E = h.length > 0 && !(p.length === 0 && h.length === 1 && (0, t.schemaHasRulesForType)(u, h[0]));
    if (E) {
      const P = k(h, s, l.strictNumbers, n.Wrong);
      w.if(P, () => {
        p.length ? _(u, h, p) : f(u);
      });
    }
    return E;
  }
  le.coerceAndCheckDataType = d;
  const y = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
  function g(u, h) {
    return h ? u.filter((w) => y.has(w) || h === "array" && w === "array") : [];
  }
  function _(u, h, w) {
    const { gen: s, data: l, opts: p } = u, E = s.let("dataType", (0, o._)`typeof ${l}`), P = s.let("coerced", (0, o._)`undefined`);
    p.coerceTypes === "array" && s.if((0, o._)`${E} == 'object' && Array.isArray(${l}) && ${l}.length == 1`, () => s.assign(l, (0, o._)`${l}[0]`).assign(E, (0, o._)`typeof ${l}`).if(k(h, l, p.strictNumbers), () => s.assign(P, l))), s.if((0, o._)`${P} !== undefined`);
    for (const N of w)
      (y.has(N) || N === "array" && p.coerceTypes === "array") && A(N);
    s.else(), f(u), s.endIf(), s.if((0, o._)`${P} !== undefined`, () => {
      s.assign(l, P), $(u, P);
    });
    function A(N) {
      switch (N) {
        case "string":
          s.elseIf((0, o._)`${E} == "number" || ${E} == "boolean"`).assign(P, (0, o._)`"" + ${l}`).elseIf((0, o._)`${l} === null`).assign(P, (0, o._)`""`);
          return;
        case "number":
          s.elseIf((0, o._)`${E} == "boolean" || ${l} === null
              || (${E} == "string" && ${l} && ${l} == +${l})`).assign(P, (0, o._)`+${l}`);
          return;
        case "integer":
          s.elseIf((0, o._)`${E} === "boolean" || ${l} === null
              || (${E} === "string" && ${l} && ${l} == +${l} && !(${l} % 1))`).assign(P, (0, o._)`+${l}`);
          return;
        case "boolean":
          s.elseIf((0, o._)`${l} === "false" || ${l} === 0 || ${l} === null`).assign(P, !1).elseIf((0, o._)`${l} === "true" || ${l} === 1`).assign(P, !0);
          return;
        case "null":
          s.elseIf((0, o._)`${l} === "" || ${l} === 0 || ${l} === false`), s.assign(P, null);
          return;
        case "array":
          s.elseIf((0, o._)`${E} === "string" || ${E} === "number"
              || ${E} === "boolean" || ${l} === null`).assign(P, (0, o._)`[${l}]`);
      }
    }
  }
  function $({ gen: u, parentData: h, parentDataProperty: w }, s) {
    u.if((0, o._)`${h} !== undefined`, () => u.assign((0, o._)`${h}[${w}]`, s));
  }
  function b(u, h, w, s = n.Correct) {
    const l = s === n.Correct ? o.operators.EQ : o.operators.NEQ;
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
        p = E((0, o._)`!(${h} % 1) && !isNaN(${h})`);
        break;
      case "number":
        p = E();
        break;
      default:
        return (0, o._)`typeof ${h} ${l} ${u}`;
    }
    return s === n.Correct ? p : (0, o.not)(p);
    function E(P = o.nil) {
      return (0, o.and)((0, o._)`typeof ${h} == "number"`, P, w ? (0, o._)`isFinite(${h})` : o.nil);
    }
  }
  le.checkDataType = b;
  function k(u, h, w, s) {
    if (u.length === 1)
      return b(u[0], h, w, s);
    let l;
    const p = (0, c.toHash)(u);
    if (p.array && p.object) {
      const E = (0, o._)`typeof ${h} != "object"`;
      l = p.null ? E : (0, o._)`!${h} || ${E}`, delete p.null, delete p.array, delete p.object;
    } else
      l = o.nil;
    p.number && delete p.integer;
    for (const E in p)
      l = (0, o.and)(l, b(E, h, w, s));
    return l;
  }
  le.checkDataTypes = k;
  const S = {
    message: ({ schema: u }) => `must be ${u}`,
    params: ({ schema: u, schemaValue: h }) => typeof u == "string" ? (0, o._)`{type: ${u}}` : (0, o._)`{type: ${h}}`
  };
  function f(u) {
    const h = m(u);
    (0, r.reportError)(h, S);
  }
  le.reportTypeError = f;
  function m(u) {
    const { gen: h, data: w, schema: s } = u, l = (0, c.schemaRefOrVal)(u, s, "type");
    return {
      gen: h,
      keyword: "type",
      data: w,
      schema: s.type,
      schemaCode: l,
      schemaValue: l,
      parentSchema: s,
      params: {},
      it: u
    };
  }
  return le;
}
var tt = {}, ln;
function _i() {
  if (ln) return tt;
  ln = 1, Object.defineProperty(tt, "__esModule", { value: !0 }), tt.assignDefaults = void 0;
  const e = /* @__PURE__ */ J(), t = /* @__PURE__ */ Z();
  function r(c, n) {
    const { properties: i, items: a } = c.schema;
    if (n === "object" && i)
      for (const d in i)
        o(c, d, i[d].default);
    else n === "array" && Array.isArray(a) && a.forEach((d, y) => o(c, y, d.default));
  }
  tt.assignDefaults = r;
  function o(c, n, i) {
    const { gen: a, compositeRule: d, data: y, opts: g } = c;
    if (i === void 0)
      return;
    const _ = (0, e._)`${y}${(0, e.getProperty)(n)}`;
    if (d) {
      (0, t.checkStrictMode)(c, `default is ignored for: ${_}`);
      return;
    }
    let $ = (0, e._)`${_} === undefined`;
    g.useDefaults === "empty" && ($ = (0, e._)`${$} || ${_} === null || ${_} === ""`), a.if($, (0, e._)`${_} = ${(0, e.stringify)(i)}`);
  }
  return tt;
}
var be = {}, ne = {}, dn;
function Se() {
  if (dn) return ne;
  dn = 1, Object.defineProperty(ne, "__esModule", { value: !0 }), ne.validateUnion = ne.validateArray = ne.usePattern = ne.callValidateCode = ne.schemaProperties = ne.allSchemaProperties = ne.noPropertyInData = ne.propertyInData = ne.isOwnProperty = ne.hasPropFunc = ne.reportMissingProp = ne.checkMissingProp = ne.checkReportMissingProp = void 0;
  const e = /* @__PURE__ */ J(), t = /* @__PURE__ */ Z(), r = /* @__PURE__ */ we(), o = /* @__PURE__ */ Z();
  function c(u, h) {
    const { gen: w, data: s, it: l } = u;
    w.if(g(w, s, h, l.opts.ownProperties), () => {
      u.setParams({ missingProperty: (0, e._)`${h}` }, !0), u.error();
    });
  }
  ne.checkReportMissingProp = c;
  function n({ gen: u, data: h, it: { opts: w } }, s, l) {
    return (0, e.or)(...s.map((p) => (0, e.and)(g(u, h, p, w.ownProperties), (0, e._)`${l} = ${p}`)));
  }
  ne.checkMissingProp = n;
  function i(u, h) {
    u.setParams({ missingProperty: h }, !0), u.error();
  }
  ne.reportMissingProp = i;
  function a(u) {
    return u.scopeValue("func", {
      // eslint-disable-next-line @typescript-eslint/unbound-method
      ref: Object.prototype.hasOwnProperty,
      code: (0, e._)`Object.prototype.hasOwnProperty`
    });
  }
  ne.hasPropFunc = a;
  function d(u, h, w) {
    return (0, e._)`${a(u)}.call(${h}, ${w})`;
  }
  ne.isOwnProperty = d;
  function y(u, h, w, s) {
    const l = (0, e._)`${h}${(0, e.getProperty)(w)} !== undefined`;
    return s ? (0, e._)`${l} && ${d(u, h, w)}` : l;
  }
  ne.propertyInData = y;
  function g(u, h, w, s) {
    const l = (0, e._)`${h}${(0, e.getProperty)(w)} === undefined`;
    return s ? (0, e.or)(l, (0, e.not)(d(u, h, w))) : l;
  }
  ne.noPropertyInData = g;
  function _(u) {
    return u ? Object.keys(u).filter((h) => h !== "__proto__") : [];
  }
  ne.allSchemaProperties = _;
  function $(u, h) {
    return _(h).filter((w) => !(0, t.alwaysValidSchema)(u, h[w]));
  }
  ne.schemaProperties = $;
  function b({ schemaCode: u, data: h, it: { gen: w, topSchemaRef: s, schemaPath: l, errorPath: p }, it: E }, P, A, N) {
    const j = N ? (0, e._)`${u}, ${h}, ${s}${l}` : h, D = [
      [r.default.instancePath, (0, e.strConcat)(r.default.instancePath, p)],
      [r.default.parentData, E.parentData],
      [r.default.parentDataProperty, E.parentDataProperty],
      [r.default.rootData, r.default.rootData]
    ];
    E.opts.dynamicRef && D.push([r.default.dynamicAnchors, r.default.dynamicAnchors]);
    const U = (0, e._)`${j}, ${w.object(...D)}`;
    return A !== e.nil ? (0, e._)`${P}.call(${A}, ${U})` : (0, e._)`${P}(${U})`;
  }
  ne.callValidateCode = b;
  const k = (0, e._)`new RegExp`;
  function S({ gen: u, it: { opts: h } }, w) {
    const s = h.unicodeRegExp ? "u" : "", { regExp: l } = h.code, p = l(w, s);
    return u.scopeValue("pattern", {
      key: p.toString(),
      ref: p,
      code: (0, e._)`${l.code === "new RegExp" ? k : (0, o.useFunc)(u, l)}(${w}, ${s})`
    });
  }
  ne.usePattern = S;
  function f(u) {
    const { gen: h, data: w, keyword: s, it: l } = u, p = h.name("valid");
    if (l.allErrors) {
      const P = h.let("valid", !0);
      return E(() => h.assign(P, !1)), P;
    }
    return h.var(p, !0), E(() => h.break()), p;
    function E(P) {
      const A = h.const("len", (0, e._)`${w}.length`);
      h.forRange("i", 0, A, (N) => {
        u.subschema({
          keyword: s,
          dataProp: N,
          dataPropType: t.Type.Num
        }, p), h.if((0, e.not)(p), P);
      });
    }
  }
  ne.validateArray = f;
  function m(u) {
    const { gen: h, schema: w, keyword: s, it: l } = u;
    if (!Array.isArray(w))
      throw new Error("ajv implementation error");
    if (w.some((A) => (0, t.alwaysValidSchema)(l, A)) && !l.opts.unevaluated)
      return;
    const E = h.let("valid", !1), P = h.name("_valid");
    h.block(() => w.forEach((A, N) => {
      const j = u.subschema({
        keyword: s,
        schemaProp: N,
        compositeRule: !0
      }, P);
      h.assign(E, (0, e._)`${E} || ${P}`), u.mergeValidEvaluated(j, P) || h.if((0, e.not)(E));
    })), u.result(E, () => u.reset(), () => u.error(!0));
  }
  return ne.validateUnion = m, ne;
}
var un;
function wi() {
  if (un) return be;
  un = 1, Object.defineProperty(be, "__esModule", { value: !0 }), be.validateKeywordUsage = be.validSchemaType = be.funcKeywordCode = be.macroKeywordCode = void 0;
  const e = /* @__PURE__ */ J(), t = /* @__PURE__ */ we(), r = /* @__PURE__ */ Se(), o = /* @__PURE__ */ dr();
  function c($, b) {
    const { gen: k, keyword: S, schema: f, parentSchema: m, it: u } = $, h = b.macro.call(u.self, f, m, u), w = y(k, S, h);
    u.opts.validateSchema !== !1 && u.self.validateSchema(h, !0);
    const s = k.name("valid");
    $.subschema({
      schema: h,
      schemaPath: e.nil,
      errSchemaPath: `${u.errSchemaPath}/${S}`,
      topSchemaRef: w,
      compositeRule: !0
    }, s), $.pass(s, () => $.error(!0));
  }
  be.macroKeywordCode = c;
  function n($, b) {
    var k;
    const { gen: S, keyword: f, schema: m, parentSchema: u, $data: h, it: w } = $;
    d(w, b);
    const s = !h && b.compile ? b.compile.call(w.self, m, u, w) : b.validate, l = y(S, f, s), p = S.let("valid");
    $.block$data(p, E), $.ok((k = b.valid) !== null && k !== void 0 ? k : p);
    function E() {
      if (b.errors === !1)
        N(), b.modifying && i($), j(() => $.error());
      else {
        const D = b.async ? P() : A();
        b.modifying && i($), j(() => a($, D));
      }
    }
    function P() {
      const D = S.let("ruleErrs", null);
      return S.try(() => N((0, e._)`await `), (U) => S.assign(p, !1).if((0, e._)`${U} instanceof ${w.ValidationError}`, () => S.assign(D, (0, e._)`${U}.errors`), () => S.throw(U))), D;
    }
    function A() {
      const D = (0, e._)`${l}.errors`;
      return S.assign(D, null), N(e.nil), D;
    }
    function N(D = b.async ? (0, e._)`await ` : e.nil) {
      const U = w.opts.passContext ? t.default.this : t.default.self, Q = !("compile" in b && !h || b.schema === !1);
      S.assign(p, (0, e._)`${D}${(0, r.callValidateCode)($, l, U, Q)}`, b.modifying);
    }
    function j(D) {
      var U;
      S.if((0, e.not)((U = b.valid) !== null && U !== void 0 ? U : p), D);
    }
  }
  be.funcKeywordCode = n;
  function i($) {
    const { gen: b, data: k, it: S } = $;
    b.if(S.parentData, () => b.assign(k, (0, e._)`${S.parentData}[${S.parentDataProperty}]`));
  }
  function a($, b) {
    const { gen: k } = $;
    k.if((0, e._)`Array.isArray(${b})`, () => {
      k.assign(t.default.vErrors, (0, e._)`${t.default.vErrors} === null ? ${b} : ${t.default.vErrors}.concat(${b})`).assign(t.default.errors, (0, e._)`${t.default.vErrors}.length`), (0, o.extendErrors)($);
    }, () => $.error());
  }
  function d({ schemaEnv: $ }, b) {
    if (b.async && !$.$async)
      throw new Error("async keyword in sync schema");
  }
  function y($, b, k) {
    if (k === void 0)
      throw new Error(`keyword "${b}" failed to compile`);
    return $.scopeValue("keyword", typeof k == "function" ? { ref: k } : { ref: k, code: (0, e.stringify)(k) });
  }
  function g($, b, k = !1) {
    return !b.length || b.some((S) => S === "array" ? Array.isArray($) : S === "object" ? $ && typeof $ == "object" && !Array.isArray($) : typeof $ == S || k && typeof $ > "u");
  }
  be.validSchemaType = g;
  function _({ schema: $, opts: b, self: k, errSchemaPath: S }, f, m) {
    if (Array.isArray(f.keyword) ? !f.keyword.includes(m) : f.keyword !== m)
      throw new Error("ajv implementation error");
    const u = f.dependencies;
    if (u?.some((h) => !Object.prototype.hasOwnProperty.call($, h)))
      throw new Error(`parent schema must have dependencies of ${m}: ${u.join(",")}`);
    if (f.validateSchema && !f.validateSchema($[m])) {
      const w = `keyword "${m}" value is invalid at path "${S}": ` + k.errorsText(f.validateSchema.errors);
      if (b.validateSchema === "log")
        k.logger.error(w);
      else
        throw new Error(w);
    }
  }
  return be.validateKeywordUsage = _, be;
}
var Re = {}, fn;
function Si() {
  if (fn) return Re;
  fn = 1, Object.defineProperty(Re, "__esModule", { value: !0 }), Re.extendSubschemaMode = Re.extendSubschemaData = Re.getSubschema = void 0;
  const e = /* @__PURE__ */ J(), t = /* @__PURE__ */ Z();
  function r(n, { keyword: i, schemaProp: a, schema: d, schemaPath: y, errSchemaPath: g, topSchemaRef: _ }) {
    if (i !== void 0 && d !== void 0)
      throw new Error('both "keyword" and "schema" passed, only one allowed');
    if (i !== void 0) {
      const $ = n.schema[i];
      return a === void 0 ? {
        schema: $,
        schemaPath: (0, e._)`${n.schemaPath}${(0, e.getProperty)(i)}`,
        errSchemaPath: `${n.errSchemaPath}/${i}`
      } : {
        schema: $[a],
        schemaPath: (0, e._)`${n.schemaPath}${(0, e.getProperty)(i)}${(0, e.getProperty)(a)}`,
        errSchemaPath: `${n.errSchemaPath}/${i}/${(0, t.escapeFragment)(a)}`
      };
    }
    if (d !== void 0) {
      if (y === void 0 || g === void 0 || _ === void 0)
        throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
      return {
        schema: d,
        schemaPath: y,
        topSchemaRef: _,
        errSchemaPath: g
      };
    }
    throw new Error('either "keyword" or "schema" must be passed');
  }
  Re.getSubschema = r;
  function o(n, i, { dataProp: a, dataPropType: d, data: y, dataTypes: g, propertyName: _ }) {
    if (y !== void 0 && a !== void 0)
      throw new Error('both "data" and "dataProp" passed, only one allowed');
    const { gen: $ } = i;
    if (a !== void 0) {
      const { errorPath: k, dataPathArr: S, opts: f } = i, m = $.let("data", (0, e._)`${i.data}${(0, e.getProperty)(a)}`, !0);
      b(m), n.errorPath = (0, e.str)`${k}${(0, t.getErrorPath)(a, d, f.jsPropertySyntax)}`, n.parentDataProperty = (0, e._)`${a}`, n.dataPathArr = [...S, n.parentDataProperty];
    }
    if (y !== void 0) {
      const k = y instanceof e.Name ? y : $.let("data", y, !0);
      b(k), _ !== void 0 && (n.propertyName = _);
    }
    g && (n.dataTypes = g);
    function b(k) {
      n.data = k, n.dataLevel = i.dataLevel + 1, n.dataTypes = [], i.definedProperties = /* @__PURE__ */ new Set(), n.parentData = i.data, n.dataNames = [...i.dataNames, k];
    }
  }
  Re.extendSubschemaData = o;
  function c(n, { jtdDiscriminator: i, jtdMetadata: a, compositeRule: d, createErrors: y, allErrors: g }) {
    d !== void 0 && (n.compositeRule = d), y !== void 0 && (n.createErrors = y), g !== void 0 && (n.allErrors = g), n.jtdDiscriminator = i, n.jtdMetadata = a;
  }
  return Re.extendSubschemaMode = c, Re;
}
var de = {}, Sr, pn;
function Do() {
  return pn || (pn = 1, Sr = function e(t, r) {
    if (t === r) return !0;
    if (t && r && typeof t == "object" && typeof r == "object") {
      if (t.constructor !== r.constructor) return !1;
      var o, c, n;
      if (Array.isArray(t)) {
        if (o = t.length, o != r.length) return !1;
        for (c = o; c-- !== 0; )
          if (!e(t[c], r[c])) return !1;
        return !0;
      }
      if (t.constructor === RegExp) return t.source === r.source && t.flags === r.flags;
      if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === r.valueOf();
      if (t.toString !== Object.prototype.toString) return t.toString() === r.toString();
      if (n = Object.keys(t), o = n.length, o !== Object.keys(r).length) return !1;
      for (c = o; c-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(r, n[c])) return !1;
      for (c = o; c-- !== 0; ) {
        var i = n[c];
        if (!e(t[i], r[i])) return !1;
      }
      return !0;
    }
    return t !== t && r !== r;
  }), Sr;
}
var kr = { exports: {} }, hn;
function ki() {
  if (hn) return kr.exports;
  hn = 1;
  var e = kr.exports = function(o, c, n) {
    typeof c == "function" && (n = c, c = {}), n = c.cb || n;
    var i = typeof n == "function" ? n : n.pre || function() {
    }, a = n.post || function() {
    };
    t(c, i, a, o, "", o);
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
  function t(o, c, n, i, a, d, y, g, _, $) {
    if (i && typeof i == "object" && !Array.isArray(i)) {
      c(i, a, d, y, g, _, $);
      for (var b in i) {
        var k = i[b];
        if (Array.isArray(k)) {
          if (b in e.arrayKeywords)
            for (var S = 0; S < k.length; S++)
              t(o, c, n, k[S], a + "/" + b + "/" + S, d, a, b, i, S);
        } else if (b in e.propsKeywords) {
          if (k && typeof k == "object")
            for (var f in k)
              t(o, c, n, k[f], a + "/" + b + "/" + r(f), d, a, b, i, f);
        } else (b in e.keywords || o.allKeys && !(b in e.skipKeywords)) && t(o, c, n, k, a + "/" + b, d, a, b, i);
      }
      n(i, a, d, y, g, _, $);
    }
  }
  function r(o) {
    return o.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  return kr.exports;
}
var mn;
function ur() {
  if (mn) return de;
  mn = 1, Object.defineProperty(de, "__esModule", { value: !0 }), de.getSchemaRefs = de.resolveUrl = de.normalizeId = de._getFullPath = de.getFullPath = de.inlineRef = void 0;
  const e = /* @__PURE__ */ Z(), t = Do(), r = ki(), o = /* @__PURE__ */ new Set([
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
  function c(S, f = !0) {
    return typeof S == "boolean" ? !0 : f === !0 ? !i(S) : f ? a(S) <= f : !1;
  }
  de.inlineRef = c;
  const n = /* @__PURE__ */ new Set([
    "$ref",
    "$recursiveRef",
    "$recursiveAnchor",
    "$dynamicRef",
    "$dynamicAnchor"
  ]);
  function i(S) {
    for (const f in S) {
      if (n.has(f))
        return !0;
      const m = S[f];
      if (Array.isArray(m) && m.some(i) || typeof m == "object" && i(m))
        return !0;
    }
    return !1;
  }
  function a(S) {
    let f = 0;
    for (const m in S) {
      if (m === "$ref")
        return 1 / 0;
      if (f++, !o.has(m) && (typeof S[m] == "object" && (0, e.eachItem)(S[m], (u) => f += a(u)), f === 1 / 0))
        return 1 / 0;
    }
    return f;
  }
  function d(S, f = "", m) {
    m !== !1 && (f = _(f));
    const u = S.parse(f);
    return y(S, u);
  }
  de.getFullPath = d;
  function y(S, f) {
    return S.serialize(f).split("#")[0] + "#";
  }
  de._getFullPath = y;
  const g = /#\/?$/;
  function _(S) {
    return S ? S.replace(g, "") : "";
  }
  de.normalizeId = _;
  function $(S, f, m) {
    return m = _(m), S.resolve(f, m);
  }
  de.resolveUrl = $;
  const b = /^[a-z_][-a-z0-9._]*$/i;
  function k(S, f) {
    if (typeof S == "boolean")
      return {};
    const { schemaId: m, uriResolver: u } = this.opts, h = _(S[m] || f), w = { "": h }, s = d(u, h, !1), l = {}, p = /* @__PURE__ */ new Set();
    return r(S, { allKeys: !0 }, (A, N, j, D) => {
      if (D === void 0)
        return;
      const U = s + N;
      let Q = w[D];
      typeof A[m] == "string" && (Q = te.call(this, A[m])), me.call(this, A.$anchor), me.call(this, A.$dynamicAnchor), w[N] = Q;
      function te(X) {
        const ve = this.opts.uriResolver.resolve;
        if (X = _(Q ? ve(Q, X) : X), p.has(X))
          throw P(X);
        p.add(X);
        let F = this.refs[X];
        return typeof F == "string" && (F = this.refs[F]), typeof F == "object" ? E(A, F.schema, X) : X !== _(U) && (X[0] === "#" ? (E(A, l[X], X), l[X] = A) : this.refs[X] = U), X;
      }
      function me(X) {
        if (typeof X == "string") {
          if (!b.test(X))
            throw new Error(`invalid anchor "${X}"`);
          te.call(this, `#${X}`);
        }
      }
    }), l;
    function E(A, N, j) {
      if (N !== void 0 && !t(A, N))
        throw P(j);
    }
    function P(A) {
      return new Error(`reference "${A}" resolves to more than one schema`);
    }
  }
  return de.getSchemaRefs = k, de;
}
var gn;
function fr() {
  if (gn) return Pe;
  gn = 1, Object.defineProperty(Pe, "__esModule", { value: !0 }), Pe.getData = Pe.KeywordCxt = Pe.validateFunctionCode = void 0;
  const e = /* @__PURE__ */ bi(), t = /* @__PURE__ */ ar(), r = /* @__PURE__ */ qo(), o = /* @__PURE__ */ ar(), c = /* @__PURE__ */ _i(), n = /* @__PURE__ */ wi(), i = /* @__PURE__ */ Si(), a = /* @__PURE__ */ J(), d = /* @__PURE__ */ we(), y = /* @__PURE__ */ ur(), g = /* @__PURE__ */ Z(), _ = /* @__PURE__ */ dr();
  function $(x) {
    if (s(x) && (p(x), w(x))) {
      f(x);
      return;
    }
    b(x, () => (0, e.topBoolOrEmptySchema)(x));
  }
  Pe.validateFunctionCode = $;
  function b({ gen: x, validateName: O, schema: V, schemaEnv: L, opts: H }, Y) {
    H.code.es5 ? x.func(O, (0, a._)`${d.default.data}, ${d.default.valCxt}`, L.$async, () => {
      x.code((0, a._)`"use strict"; ${u(V, H)}`), S(x, H), x.code(Y);
    }) : x.func(O, (0, a._)`${d.default.data}, ${k(H)}`, L.$async, () => x.code(u(V, H)).code(Y));
  }
  function k(x) {
    return (0, a._)`{${d.default.instancePath}="", ${d.default.parentData}, ${d.default.parentDataProperty}, ${d.default.rootData}=${d.default.data}${x.dynamicRef ? (0, a._)`, ${d.default.dynamicAnchors}={}` : a.nil}}={}`;
  }
  function S(x, O) {
    x.if(d.default.valCxt, () => {
      x.var(d.default.instancePath, (0, a._)`${d.default.valCxt}.${d.default.instancePath}`), x.var(d.default.parentData, (0, a._)`${d.default.valCxt}.${d.default.parentData}`), x.var(d.default.parentDataProperty, (0, a._)`${d.default.valCxt}.${d.default.parentDataProperty}`), x.var(d.default.rootData, (0, a._)`${d.default.valCxt}.${d.default.rootData}`), O.dynamicRef && x.var(d.default.dynamicAnchors, (0, a._)`${d.default.valCxt}.${d.default.dynamicAnchors}`);
    }, () => {
      x.var(d.default.instancePath, (0, a._)`""`), x.var(d.default.parentData, (0, a._)`undefined`), x.var(d.default.parentDataProperty, (0, a._)`undefined`), x.var(d.default.rootData, d.default.data), O.dynamicRef && x.var(d.default.dynamicAnchors, (0, a._)`{}`);
    });
  }
  function f(x) {
    const { schema: O, opts: V, gen: L } = x;
    b(x, () => {
      V.$comment && O.$comment && D(x), A(x), L.let(d.default.vErrors, null), L.let(d.default.errors, 0), V.unevaluated && m(x), E(x), U(x);
    });
  }
  function m(x) {
    const { gen: O, validateName: V } = x;
    x.evaluated = O.const("evaluated", (0, a._)`${V}.evaluated`), O.if((0, a._)`${x.evaluated}.dynamicProps`, () => O.assign((0, a._)`${x.evaluated}.props`, (0, a._)`undefined`)), O.if((0, a._)`${x.evaluated}.dynamicItems`, () => O.assign((0, a._)`${x.evaluated}.items`, (0, a._)`undefined`));
  }
  function u(x, O) {
    const V = typeof x == "object" && x[O.schemaId];
    return V && (O.code.source || O.code.process) ? (0, a._)`/*# sourceURL=${V} */` : a.nil;
  }
  function h(x, O) {
    if (s(x) && (p(x), w(x))) {
      l(x, O);
      return;
    }
    (0, e.boolOrEmptySchema)(x, O);
  }
  function w({ schema: x, self: O }) {
    if (typeof x == "boolean")
      return !x;
    for (const V in x)
      if (O.RULES.all[V])
        return !0;
    return !1;
  }
  function s(x) {
    return typeof x.schema != "boolean";
  }
  function l(x, O) {
    const { schema: V, gen: L, opts: H } = x;
    H.$comment && V.$comment && D(x), N(x), j(x);
    const Y = L.const("_errs", d.default.errors);
    E(x, Y), L.var(O, (0, a._)`${Y} === ${d.default.errors}`);
  }
  function p(x) {
    (0, g.checkUnknownRules)(x), P(x);
  }
  function E(x, O) {
    if (x.opts.jtd)
      return te(x, [], !1, O);
    const V = (0, t.getSchemaTypes)(x.schema), L = (0, t.coerceAndCheckDataType)(x, V);
    te(x, V, !L, O);
  }
  function P(x) {
    const { schema: O, errSchemaPath: V, opts: L, self: H } = x;
    O.$ref && L.ignoreKeywordsWithRef && (0, g.schemaHasRulesButRef)(O, H.RULES) && H.logger.warn(`$ref: keywords ignored in schema at path "${V}"`);
  }
  function A(x) {
    const { schema: O, opts: V } = x;
    O.default !== void 0 && V.useDefaults && V.strictSchema && (0, g.checkStrictMode)(x, "default is ignored in the schema root");
  }
  function N(x) {
    const O = x.schema[x.opts.schemaId];
    O && (x.baseId = (0, y.resolveUrl)(x.opts.uriResolver, x.baseId, O));
  }
  function j(x) {
    if (x.schema.$async && !x.schemaEnv.$async)
      throw new Error("async schema in sync schema");
  }
  function D({ gen: x, schemaEnv: O, schema: V, errSchemaPath: L, opts: H }) {
    const Y = V.$comment;
    if (H.$comment === !0)
      x.code((0, a._)`${d.default.self}.logger.log(${Y})`);
    else if (typeof H.$comment == "function") {
      const ae = (0, a.str)`${L}/$comment`, $e = x.scopeValue("root", { ref: O.root });
      x.code((0, a._)`${d.default.self}.opts.$comment(${Y}, ${ae}, ${$e}.schema)`);
    }
  }
  function U(x) {
    const { gen: O, schemaEnv: V, validateName: L, ValidationError: H, opts: Y } = x;
    V.$async ? O.if((0, a._)`${d.default.errors} === 0`, () => O.return(d.default.data), () => O.throw((0, a._)`new ${H}(${d.default.vErrors})`)) : (O.assign((0, a._)`${L}.errors`, d.default.vErrors), Y.unevaluated && Q(x), O.return((0, a._)`${d.default.errors} === 0`));
  }
  function Q({ gen: x, evaluated: O, props: V, items: L }) {
    V instanceof a.Name && x.assign((0, a._)`${O}.props`, V), L instanceof a.Name && x.assign((0, a._)`${O}.items`, L);
  }
  function te(x, O, V, L) {
    const { gen: H, schema: Y, data: ae, allErrors: $e, opts: ue, self: fe } = x, { RULES: ce } = fe;
    if (Y.$ref && (ue.ignoreKeywordsWithRef || !(0, g.schemaHasRulesButRef)(Y, ce))) {
      H.block(() => K(x, "$ref", ce.all.$ref.definition));
      return;
    }
    ue.jtd || X(x, O), H.block(() => {
      for (const ge of ce.rules)
        Be(ge);
      Be(ce.post);
    });
    function Be(ge) {
      (0, r.shouldUseGroup)(Y, ge) && (ge.type ? (H.if((0, o.checkDataType)(ge.type, ae, ue.strictNumbers)), me(x, ge), O.length === 1 && O[0] === ge.type && V && (H.else(), (0, o.reportTypeError)(x)), H.endIf()) : me(x, ge), $e || H.if((0, a._)`${d.default.errors} === ${L || 0}`));
    }
  }
  function me(x, O) {
    const { gen: V, schema: L, opts: { useDefaults: H } } = x;
    H && (0, c.assignDefaults)(x, O.type), V.block(() => {
      for (const Y of O.rules)
        (0, r.shouldUseRule)(L, Y) && K(x, Y.keyword, Y.definition, O.type);
    });
  }
  function X(x, O) {
    x.schemaEnv.meta || !x.opts.strictTypes || (ve(x, O), x.opts.allowUnionTypes || F(x, O), M(x, x.dataTypes));
  }
  function ve(x, O) {
    if (O.length) {
      if (!x.dataTypes.length) {
        x.dataTypes = O;
        return;
      }
      O.forEach((V) => {
        T(x.dataTypes, V) || C(x, `type "${V}" not allowed by context "${x.dataTypes.join(",")}"`);
      }), v(x, O);
    }
  }
  function F(x, O) {
    O.length > 1 && !(O.length === 2 && O.includes("null")) && C(x, "use allowUnionTypes to allow union type keyword");
  }
  function M(x, O) {
    const V = x.self.RULES.all;
    for (const L in V) {
      const H = V[L];
      if (typeof H == "object" && (0, r.shouldUseRule)(x.schema, H)) {
        const { type: Y } = H.definition;
        Y.length && !Y.some((ae) => B(O, ae)) && C(x, `missing type "${Y.join(",")}" for keyword "${L}"`);
      }
    }
  }
  function B(x, O) {
    return x.includes(O) || O === "number" && x.includes("integer");
  }
  function T(x, O) {
    return x.includes(O) || O === "integer" && x.includes("number");
  }
  function v(x, O) {
    const V = [];
    for (const L of x.dataTypes)
      T(O, L) ? V.push(L) : O.includes("integer") && L === "number" && V.push("integer");
    x.dataTypes = V;
  }
  function C(x, O) {
    const V = x.schemaEnv.baseId + x.errSchemaPath;
    O += ` at "${V}" (strictTypes)`, (0, g.checkStrictMode)(x, O, x.opts.strictTypes);
  }
  class z {
    constructor(O, V, L) {
      if ((0, n.validateKeywordUsage)(O, V, L), this.gen = O.gen, this.allErrors = O.allErrors, this.keyword = L, this.data = O.data, this.schema = O.schema[L], this.$data = V.$data && O.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, g.schemaRefOrVal)(O, this.schema, L, this.$data), this.schemaType = V.schemaType, this.parentSchema = O.schema, this.params = {}, this.it = O, this.def = V, this.$data)
        this.schemaCode = O.gen.const("vSchema", ee(this.$data, O));
      else if (this.schemaCode = this.schemaValue, !(0, n.validSchemaType)(this.schema, V.schemaType, V.allowUndefined))
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
      const { gen: L, schemaCode: H, schemaType: Y, def: ae } = this;
      L.if((0, a.or)((0, a._)`${H} === undefined`, V)), O !== a.nil && L.assign(O, !0), (Y.length || ae.validateSchema) && (L.elseIf(this.invalid$data()), this.$dataError(), O !== a.nil && L.assign(O, !1)), L.else();
    }
    invalid$data() {
      const { gen: O, schemaCode: V, schemaType: L, def: H, it: Y } = this;
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
        if (H.validateSchema) {
          const ue = O.scopeValue("validate$data", { ref: H.validateSchema });
          return (0, a._)`!${ue}(${V})`;
        }
        return a.nil;
      }
    }
    subschema(O, V) {
      const L = (0, i.getSubschema)(this.it, O);
      (0, i.extendSubschemaData)(L, this.it, O), (0, i.extendSubschemaMode)(L, O);
      const H = { ...this.it, ...L, items: void 0, props: void 0 };
      return h(H, V), H;
    }
    mergeEvaluated(O, V) {
      const { it: L, gen: H } = this;
      L.opts.unevaluated && (L.props !== !0 && O.props !== void 0 && (L.props = g.mergeEvaluated.props(H, O.props, L.props, V)), L.items !== !0 && O.items !== void 0 && (L.items = g.mergeEvaluated.items(H, O.items, L.items, V)));
    }
    mergeValidEvaluated(O, V) {
      const { it: L, gen: H } = this;
      if (L.opts.unevaluated && (L.props !== !0 || L.items !== !0))
        return H.if(V, () => this.mergeEvaluated(O, a.Name)), !0;
    }
  }
  Pe.KeywordCxt = z;
  function K(x, O, V, L) {
    const H = new z(x, V, O);
    "code" in V ? V.code(H, L) : H.$data && V.validate ? (0, n.funcKeywordCode)(H, V) : "macro" in V ? (0, n.macroKeywordCode)(H, V) : (V.compile || V.validate) && (0, n.funcKeywordCode)(H, V);
  }
  const G = /^\/(?:[^~]|~0|~1)*$/, re = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function ee(x, { dataLevel: O, dataNames: V, dataPathArr: L }) {
    let H, Y;
    if (x === "")
      return d.default.rootData;
    if (x[0] === "/") {
      if (!G.test(x))
        throw new Error(`Invalid JSON-pointer: ${x}`);
      H = x, Y = d.default.rootData;
    } else {
      const fe = re.exec(x);
      if (!fe)
        throw new Error(`Invalid JSON-pointer: ${x}`);
      const ce = +fe[1];
      if (H = fe[2], H === "#") {
        if (ce >= O)
          throw new Error(ue("property/index", ce));
        return L[O - ce];
      }
      if (ce > O)
        throw new Error(ue("data", ce));
      if (Y = V[O - ce], !H)
        return Y;
    }
    let ae = Y;
    const $e = H.split("/");
    for (const fe of $e)
      fe && (Y = (0, a._)`${Y}${(0, a.getProperty)((0, g.unescapeJsonPointer)(fe))}`, ae = (0, a._)`${ae} && ${Y}`);
    return ae;
    function ue(fe, ce) {
      return `Cannot access ${fe} ${ce} levels up, current level is ${O}`;
    }
  }
  return Pe.getData = ee, Pe;
}
var dt = {}, yn;
function Tr() {
  if (yn) return dt;
  yn = 1, Object.defineProperty(dt, "__esModule", { value: !0 });
  class e extends Error {
    constructor(r) {
      super("validation failed"), this.errors = r, this.ajv = this.validation = !0;
    }
  }
  return dt.default = e, dt;
}
var ut = {}, vn;
function pr() {
  if (vn) return ut;
  vn = 1, Object.defineProperty(ut, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ur();
  class t extends Error {
    constructor(o, c, n, i) {
      super(i || `can't resolve reference ${n} from id ${c}`), this.missingRef = (0, e.resolveUrl)(o, c, n), this.missingSchema = (0, e.normalizeId)((0, e.getFullPath)(o, this.missingRef));
    }
  }
  return ut.default = t, ut;
}
var pe = {}, $n;
function hr() {
  if ($n) return pe;
  $n = 1, Object.defineProperty(pe, "__esModule", { value: !0 }), pe.resolveSchema = pe.getCompilingSchema = pe.resolveRef = pe.compileSchema = pe.SchemaEnv = void 0;
  const e = /* @__PURE__ */ J(), t = /* @__PURE__ */ Tr(), r = /* @__PURE__ */ we(), o = /* @__PURE__ */ ur(), c = /* @__PURE__ */ Z(), n = /* @__PURE__ */ fr();
  class i {
    constructor(m) {
      var u;
      this.refs = {}, this.dynamicAnchors = {};
      let h;
      typeof m.schema == "object" && (h = m.schema), this.schema = m.schema, this.schemaId = m.schemaId, this.root = m.root || this, this.baseId = (u = m.baseId) !== null && u !== void 0 ? u : (0, o.normalizeId)(h?.[m.schemaId || "$id"]), this.schemaPath = m.schemaPath, this.localRefs = m.localRefs, this.meta = m.meta, this.$async = h?.$async, this.refs = {};
    }
  }
  pe.SchemaEnv = i;
  function a(f) {
    const m = g.call(this, f);
    if (m)
      return m;
    const u = (0, o.getFullPath)(this.opts.uriResolver, f.root.baseId), { es5: h, lines: w } = this.opts.code, { ownProperties: s } = this.opts, l = new e.CodeGen(this.scope, { es5: h, lines: w, ownProperties: s });
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
      data: r.default.data,
      parentData: r.default.parentData,
      parentDataProperty: r.default.parentDataProperty,
      dataNames: [r.default.data],
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
      this._compilations.add(f), (0, n.validateFunctionCode)(P), l.optimize(this.opts.code.optimize);
      const N = l.toString();
      A = `${l.scopeRefs(r.default.scope)}return ${N}`, this.opts.code.process && (A = this.opts.code.process(A, f));
      const D = new Function(`${r.default.self}`, `${r.default.scope}`, A)(this, this.scope.get());
      if (this.scope.value(E, { ref: D }), D.errors = null, D.schema = f.schema, D.schemaEnv = f, f.$async && (D.$async = !0), this.opts.code.source === !0 && (D.source = { validateName: E, validateCode: N, scopeValues: l._values }), this.opts.unevaluated) {
        const { props: U, items: Q } = P;
        D.evaluated = {
          props: U instanceof e.Name ? void 0 : U,
          items: Q instanceof e.Name ? void 0 : Q,
          dynamicProps: U instanceof e.Name,
          dynamicItems: Q instanceof e.Name
        }, D.source && (D.source.evaluated = (0, e.stringify)(D.evaluated));
      }
      return f.validate = D, f;
    } catch (N) {
      throw delete f.validate, delete f.validateName, A && this.logger.error("Error compiling schema, function code:", A), N;
    } finally {
      this._compilations.delete(f);
    }
  }
  pe.compileSchema = a;
  function d(f, m, u) {
    var h;
    u = (0, o.resolveUrl)(this.opts.uriResolver, m, u);
    const w = f.refs[u];
    if (w)
      return w;
    let s = $.call(this, f, u);
    if (s === void 0) {
      const l = (h = f.localRefs) === null || h === void 0 ? void 0 : h[u], { schemaId: p } = this.opts;
      l && (s = new i({ schema: l, schemaId: p, root: f, baseId: m }));
    }
    if (s !== void 0)
      return f.refs[u] = y.call(this, s);
  }
  pe.resolveRef = d;
  function y(f) {
    return (0, o.inlineRef)(f.schema, this.opts.inlineRefs) ? f.schema : f.validate ? f : a.call(this, f);
  }
  function g(f) {
    for (const m of this._compilations)
      if (_(m, f))
        return m;
  }
  pe.getCompilingSchema = g;
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
    const u = this.opts.uriResolver.parse(m), h = (0, o._getFullPath)(this.opts.uriResolver, u);
    let w = (0, o.getFullPath)(this.opts.uriResolver, f.baseId, void 0);
    if (Object.keys(f.schema).length > 0 && h === w)
      return S.call(this, u, f);
    const s = (0, o.normalizeId)(h), l = this.refs[s] || this.schemas[s];
    if (typeof l == "string") {
      const p = b.call(this, f, l);
      return typeof p?.schema != "object" ? void 0 : S.call(this, u, p);
    }
    if (typeof l?.schema == "object") {
      if (l.validate || a.call(this, l), s === (0, o.normalizeId)(m)) {
        const { schema: p } = l, { schemaId: E } = this.opts, P = p[E];
        return P && (w = (0, o.resolveUrl)(this.opts.uriResolver, w, P)), new i({ schema: p, schemaId: E, root: f, baseId: w });
      }
      return S.call(this, u, l);
    }
  }
  pe.resolveSchema = b;
  const k = /* @__PURE__ */ new Set([
    "properties",
    "patternProperties",
    "enum",
    "dependencies",
    "definitions"
  ]);
  function S(f, { baseId: m, schema: u, root: h }) {
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
      !k.has(p) && P && (m = (0, o.resolveUrl)(this.opts.uriResolver, m, P));
    }
    let s;
    if (typeof u != "boolean" && u.$ref && !(0, c.schemaHasRulesButRef)(u, this.RULES)) {
      const p = (0, o.resolveUrl)(this.opts.uriResolver, m, u.$ref);
      s = b.call(this, h, p);
    }
    const { schemaId: l } = this.opts;
    if (s = s || new i({ schema: u, schemaId: l, root: h, baseId: m }), s.schema !== s.root.schema)
      return s;
  }
  return pe;
}
const Ei = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", Ci = "Meta-schema for $data reference (JSON AnySchema extension proposal)", Pi = "object", xi = ["$data"], Ri = { $data: { type: "string", anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] } }, Ai = !1, Ni = {
  $id: Ei,
  description: Ci,
  type: Pi,
  required: xi,
  properties: Ri,
  additionalProperties: Ai
};
var ft = {}, rt = { exports: {} }, Er, bn;
function Vo() {
  if (bn) return Er;
  bn = 1;
  const e = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu), t = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u), r = RegExp.prototype.test.bind(/^[\da-f]{2}$/iu), o = RegExp.prototype.test.bind(/^[\da-z\-._~]$/iu), c = RegExp.prototype.test.bind(/^[\da-z\-._~!$&'()*+,;=:@/]$/iu);
  function n(s) {
    let l = "", p = 0, E = 0;
    for (E = 0; E < s.length; E++)
      if (p = s[E].charCodeAt(0), p !== 48) {
        if (!(p >= 48 && p <= 57 || p >= 65 && p <= 70 || p >= 97 && p <= 102))
          return "";
        l += s[E];
        break;
      }
    for (E += 1; E < s.length; E++) {
      if (p = s[E].charCodeAt(0), !(p >= 48 && p <= 57 || p >= 65 && p <= 70 || p >= 97 && p <= 102))
        return "";
      l += s[E];
    }
    return l;
  }
  const i = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
  function a(s) {
    return s.length = 0, !0;
  }
  function d(s, l, p) {
    if (s.length) {
      const E = n(s);
      if (E !== "")
        l.push(E);
      else
        return p.error = !0, !1;
      s.length = 0;
    }
    return !0;
  }
  function y(s) {
    let l = 0;
    const p = { error: !1, address: "", zone: "" }, E = [], P = [];
    let A = !1, N = !1, j = d;
    for (let D = 0; D < s.length; D++) {
      const U = s[D];
      if (!(U === "[" || U === "]"))
        if (U === ":") {
          if (A === !0 && (N = !0), !j(P, E, p))
            break;
          if (++l > 7) {
            p.error = !0;
            break;
          }
          D > 0 && s[D - 1] === ":" && (A = !0), E.push(":");
          continue;
        } else if (U === "%") {
          if (!j(P, E, p))
            break;
          j = a;
        } else {
          P.push(U);
          continue;
        }
    }
    return P.length && (j === a ? p.zone = P.join("") : N ? E.push(P.join("")) : E.push(n(P))), p.address = E.join(""), p;
  }
  function g(s) {
    if (_(s, ":") < 2)
      return { host: s, isIPV6: !1 };
    const l = y(s);
    if (l.error)
      return { host: s, isIPV6: !1 };
    {
      let p = l.address, E = l.address;
      return l.zone && (p += "%" + l.zone, E += "%25" + l.zone), { host: p, isIPV6: !0, escapedHost: E };
    }
  }
  function _(s, l) {
    let p = 0;
    for (let E = 0; E < s.length; E++)
      s[E] === l && p++;
    return p;
  }
  function $(s) {
    let l = s;
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
  const b = { "@": "%40", "/": "%2F", "?": "%3F", "#": "%23", ":": "%3A" }, k = /[@/?#:]/g, S = /[@/?#]/g;
  function f(s, l) {
    const p = l ? S : k;
    return p.lastIndex = 0, s.replace(p, (E) => b[E]);
  }
  function m(s, l = !1) {
    if (s.indexOf("%") === -1)
      return s;
    let p = "";
    for (let E = 0; E < s.length; E++) {
      if (s[E] === "%" && E + 2 < s.length) {
        const P = s.slice(E + 1, E + 3);
        if (r(P)) {
          const A = P.toUpperCase(), N = String.fromCharCode(parseInt(A, 16));
          l && o(N) ? p += N : p += "%" + A, E += 2;
          continue;
        }
      }
      p += s[E];
    }
    return p;
  }
  function u(s) {
    let l = "";
    for (let p = 0; p < s.length; p++) {
      if (s[p] === "%" && p + 2 < s.length) {
        const E = s.slice(p + 1, p + 3);
        if (r(E)) {
          const P = E.toUpperCase(), A = String.fromCharCode(parseInt(P, 16));
          A !== "." && o(A) ? l += A : l += "%" + P, p += 2;
          continue;
        }
      }
      c(s[p]) ? l += s[p] : l += escape(s[p]);
    }
    return l;
  }
  function h(s) {
    let l = "";
    for (let p = 0; p < s.length; p++) {
      if (s[p] === "%" && p + 2 < s.length) {
        const E = s.slice(p + 1, p + 3);
        if (r(E)) {
          l += "%" + E.toUpperCase(), p += 2;
          continue;
        }
      }
      l += escape(s[p]);
    }
    return l;
  }
  function w(s) {
    const l = [];
    if (s.userinfo !== void 0 && (l.push(s.userinfo), l.push("@")), s.host !== void 0) {
      let p = unescape(s.host);
      if (!t(p)) {
        const E = g(p);
        E.isIPV6 === !0 ? p = `[${E.escapedHost}]` : p = f(p, !1);
      }
      l.push(p);
    }
    return (typeof s.port == "number" || typeof s.port == "string") && (l.push(":"), l.push(String(s.port))), l.length ? l.join("") : void 0;
  }
  return Er = {
    nonSimpleDomain: i,
    recomposeAuthority: w,
    reescapeHostDelimiters: f,
    normalizePercentEncoding: m,
    normalizePathEncoding: u,
    escapePreservingEscapes: h,
    removeDotSegments: $,
    isIPv4: t,
    isUUID: e,
    normalizeIPv6: g,
    stringArrayToHexStripped: n
  }, Er;
}
var Cr, _n;
function ji() {
  if (_n) return Cr;
  _n = 1;
  const { isUUID: e } = Vo(), t = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu, r = (
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
    return r.indexOf(
      /** @type {*} */
      s
    ) !== -1;
  }
  function c(s) {
    return s.secure === !0 ? !0 : s.secure === !1 ? !1 : s.scheme ? s.scheme.length === 3 && (s.scheme[0] === "w" || s.scheme[0] === "W") && (s.scheme[1] === "s" || s.scheme[1] === "S") && (s.scheme[2] === "s" || s.scheme[2] === "S") : !1;
  }
  function n(s) {
    return s.host || (s.error = s.error || "HTTP URIs must have a host."), s;
  }
  function i(s) {
    const l = String(s.scheme).toLowerCase() === "https";
    return (s.port === (l ? 443 : 80) || s.port === "") && (s.port = void 0), s.path || (s.path = "/"), s;
  }
  function a(s) {
    return s.secure = c(s), s.resourceName = (s.path || "/") + (s.query ? "?" + s.query : ""), s.path = void 0, s.query = void 0, s;
  }
  function d(s) {
    if ((s.port === (c(s) ? 443 : 80) || s.port === "") && (s.port = void 0), typeof s.secure == "boolean" && (s.scheme = s.secure ? "wss" : "ws", s.secure = void 0), s.resourceName) {
      const [l, p] = s.resourceName.split("?");
      s.path = l && l !== "/" ? l : void 0, s.query = p, s.resourceName = void 0;
    }
    return s.fragment = void 0, s;
  }
  function y(s, l) {
    if (!s.path)
      return s.error = "URN can not be parsed", s;
    const p = s.path.match(t);
    if (p) {
      const E = l.scheme || s.scheme || "urn";
      s.nid = p[1].toLowerCase(), s.nss = p[2];
      const P = `${E}:${l.nid || s.nid}`, A = w(P);
      s.path = void 0, A && (s = A.parse(s, l));
    } else
      s.error = s.error || "URN can not be parsed.";
    return s;
  }
  function g(s, l) {
    if (s.nid === void 0)
      throw new Error("URN without nid cannot be serialized");
    const p = l.scheme || s.scheme || "urn", E = s.nid.toLowerCase(), P = `${p}:${l.nid || E}`, A = w(P);
    A && (s = A.serialize(s, l));
    const N = s, j = s.nss;
    return N.path = `${E || l.nid}:${j}`, l.skipEscape = !0, N;
  }
  function _(s, l) {
    const p = s;
    return p.uuid = p.nss, p.nss = void 0, !l.tolerant && (!p.uuid || !e(p.uuid)) && (p.error = p.error || "UUID is not valid."), p;
  }
  function $(s) {
    const l = s;
    return l.nss = (s.uuid || "").toLowerCase(), l;
  }
  const b = (
    /** @type {SchemeHandler} */
    {
      scheme: "http",
      domainHost: !0,
      parse: n,
      serialize: i
    }
  ), k = (
    /** @type {SchemeHandler} */
    {
      scheme: "https",
      domainHost: b.domainHost,
      parse: n,
      serialize: i
    }
  ), S = (
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
      domainHost: S.domainHost,
      parse: S.parse,
      serialize: S.serialize
    }
  ), h = (
    /** @type {Record<SchemeName, SchemeHandler>} */
    {
      http: b,
      https: k,
      ws: S,
      wss: f,
      urn: (
        /** @type {SchemeHandler} */
        {
          scheme: "urn",
          parse: y,
          serialize: g,
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
  Object.setPrototypeOf(h, null);
  function w(s) {
    return s && (h[
      /** @type {SchemeName} */
      s
    ] || h[
      /** @type {SchemeName} */
      s.toLowerCase()
    ]) || void 0;
  }
  return Cr = {
    wsIsSecure: c,
    SCHEMES: h,
    isValidSchemeName: o,
    getSchemeHandler: w
  }, Cr;
}
var wn;
function Mi() {
  if (wn) return rt.exports;
  wn = 1;
  const { normalizeIPv6: e, removeDotSegments: t, recomposeAuthority: r, normalizePercentEncoding: o, normalizePathEncoding: c, escapePreservingEscapes: n, reescapeHostDelimiters: i, isIPv4: a, nonSimpleDomain: d } = Vo(), { SCHEMES: y, getSchemeHandler: g } = ji();
  function _(P, A) {
    return typeof P == "string" ? P = /** @type {T} */
    s(P, A) : typeof P == "object" && (P = /** @type {T} */
    w(S(P, A), A)), P;
  }
  function $(P, A, N) {
    const j = N ? Object.assign({ scheme: "null" }, N) : { scheme: "null" }, D = b(w(P, j), w(A, j), j, !0);
    return j.skipEscape = !0, S(D, j);
  }
  function b(P, A, N, j) {
    const D = {};
    return j || (P = w(S(P, N), N), A = w(S(A, N), N)), N = N || {}, !N.tolerant && A.scheme ? (D.scheme = A.scheme, D.userinfo = A.userinfo, D.host = A.host, D.port = A.port, D.path = t(A.path || ""), D.query = A.query) : (A.userinfo !== void 0 || A.host !== void 0 || A.port !== void 0 ? (D.userinfo = A.userinfo, D.host = A.host, D.port = A.port, D.path = t(A.path || ""), D.query = A.query) : (A.path ? (A.path[0] === "/" ? D.path = t(A.path) : ((P.userinfo !== void 0 || P.host !== void 0 || P.port !== void 0) && !P.path ? D.path = "/" + A.path : P.path ? D.path = P.path.slice(0, P.path.lastIndexOf("/") + 1) + A.path : D.path = A.path, D.path = t(D.path)), D.query = A.query) : (D.path = P.path, A.query !== void 0 ? D.query = A.query : D.query = P.query), D.userinfo = P.userinfo, D.host = P.host, D.port = P.port), D.scheme = P.scheme), D.fragment = A.fragment, D;
  }
  function k(P, A, N) {
    const j = p(P, N), D = p(A, N);
    return j !== void 0 && D !== void 0 && j.toLowerCase() === D.toLowerCase();
  }
  function S(P, A) {
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
    }, j = Object.assign({}, A), D = [], U = g(j.scheme || N.scheme);
    U && U.serialize && U.serialize(N, j), N.path !== void 0 && (j.skipEscape ? N.path = o(N.path) : (N.path = n(N.path), N.scheme !== void 0 && (N.path = N.path.split("%3A").join(":")))), j.reference !== "suffix" && N.scheme && D.push(N.scheme, ":");
    const Q = r(N);
    if (Q !== void 0 && (j.reference !== "suffix" && D.push("//"), D.push(Q), N.path && N.path[0] !== "/" && D.push("/")), N.path !== void 0) {
      let te = N.path;
      !j.absolutePath && (!U || !U.absolutePath) && (te = t(te)), Q === void 0 && te[0] === "/" && te[1] === "/" && (te = "/%2F" + te.slice(2)), D.push(te);
    }
    return N.query !== void 0 && D.push("?", N.query), N.fragment !== void 0 && D.push("#", N.fragment), D.join("");
  }
  const f = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u, m = /^(?:[^#/:?]+:)?\/\/([^/?#]*)/;
  function u(P, A) {
    if (A[2] !== void 0 && P.path && P.path[0] !== "/")
      return 'URI path must start with "/" when authority is present.';
    if (typeof P.port == "number" && (P.port < 0 || P.port > 65535))
      return "URI port is malformed.";
  }
  function h(P, A) {
    const N = Object.assign({}, A), j = {
      scheme: void 0,
      userinfo: void 0,
      host: "",
      port: void 0,
      path: "",
      query: void 0,
      fragment: void 0
    };
    let D = !1, U = !1;
    N.reference === "suffix" && (N.scheme ? P = N.scheme + ":" + P : P = "//" + P);
    const Q = P.match(m);
    Q !== null && Q[1].indexOf("\\") !== -1 && (j.error = "URI authority must not contain a literal backslash.", D = !0);
    const te = P.match(f);
    if (te) {
      j.scheme = te[1], j.userinfo = te[3], j.host = te[4], j.port = parseInt(te[5], 10), j.path = te[6] || "", j.query = te[7], j.fragment = te[8], isNaN(j.port) && (j.port = te[5]);
      const me = u(j, te);
      if (me !== void 0 && (j.error = j.error || me, D = !0), j.host)
        if (a(j.host) === !1) {
          const F = e(j.host);
          j.host = F.host.toLowerCase(), U = F.isIPV6;
        } else
          U = !0;
      j.scheme === void 0 && j.userinfo === void 0 && j.host === void 0 && j.port === void 0 && j.query === void 0 && !j.path ? j.reference = "same-document" : j.scheme === void 0 ? j.reference = "relative" : j.fragment === void 0 ? j.reference = "absolute" : j.reference = "uri", N.reference && N.reference !== "suffix" && N.reference !== j.reference && (j.error = j.error || "URI is not a " + N.reference + " reference.");
      const X = g(N.scheme || j.scheme);
      if (!N.unicodeSupport && (!X || !X.unicodeSupport) && j.host && (N.domainHost || X && X.domainHost) && U === !1 && d(j.host))
        try {
          j.host = new URL("http://" + j.host).hostname;
        } catch (ve) {
          j.error = j.error || "Host's domain name can not be converted to ASCII: " + ve;
        }
      if ((!X || X && !X.skipNormalize) && (P.indexOf("%") !== -1 && (j.scheme !== void 0 && (j.scheme = unescape(j.scheme)), j.host !== void 0 && (j.host = i(unescape(j.host), U))), j.path && (j.path = c(j.path)), j.fragment))
        try {
          j.fragment = encodeURI(decodeURIComponent(j.fragment));
        } catch {
          j.error = j.error || "URI malformed";
        }
      X && X.parse && X.parse(j, N);
    } else
      j.error = j.error || "URI can not be parsed.";
    return { parsed: j, malformedAuthorityOrPort: D };
  }
  function w(P, A) {
    return h(P, A).parsed;
  }
  function s(P, A) {
    return l(P, A).normalized;
  }
  function l(P, A) {
    const { parsed: N, malformedAuthorityOrPort: j } = h(P, A);
    return {
      normalized: j ? P : S(N, A),
      malformedAuthorityOrPort: j
    };
  }
  function p(P, A) {
    if (typeof P == "string") {
      const { normalized: N, malformedAuthorityOrPort: j } = l(P, A);
      return j ? void 0 : N;
    }
    if (typeof P == "object")
      return S(P, A);
  }
  const E = {
    SCHEMES: y,
    normalize: _,
    resolve: $,
    resolveComponent: b,
    equal: k,
    serialize: S,
    parse: w
  };
  return rt.exports = E, rt.exports.default = E, rt.exports.fastUri = E, rt.exports;
}
var Sn;
function Oi() {
  if (Sn) return ft;
  Sn = 1, Object.defineProperty(ft, "__esModule", { value: !0 });
  const e = Mi();
  return e.code = 'require("ajv/dist/runtime/uri").default', ft.default = e, ft;
}
var kn;
function Ti() {
  return kn || (kn = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = void 0;
    var t = /* @__PURE__ */ fr();
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
    const o = /* @__PURE__ */ Tr(), c = /* @__PURE__ */ pr(), n = /* @__PURE__ */ zo(), i = /* @__PURE__ */ hr(), a = /* @__PURE__ */ J(), d = /* @__PURE__ */ ur(), y = /* @__PURE__ */ ar(), g = /* @__PURE__ */ Z(), _ = Ni, $ = /* @__PURE__ */ Oi(), b = (F, M) => new RegExp(F, M);
    b.code = "new RegExp";
    const k = ["removeAdditional", "useDefaults", "coerceTypes"], S = /* @__PURE__ */ new Set([
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
    function h(F) {
      var M, B, T, v, C, z, K, G, re, ee, x, O, V, L, H, Y, ae, $e, ue, fe, ce, Be, ge, mr, gr;
      const Qe = F.strict, yr = (M = F.code) === null || M === void 0 ? void 0 : M.optimize, Jr = yr === !0 || yr === void 0 ? 1 : yr || 0, Wr = (T = (B = F.code) === null || B === void 0 ? void 0 : B.regExp) !== null && T !== void 0 ? T : b, si = (v = F.uriResolver) !== null && v !== void 0 ? v : $.default;
      return {
        strictSchema: (z = (C = F.strictSchema) !== null && C !== void 0 ? C : Qe) !== null && z !== void 0 ? z : !0,
        strictNumbers: (G = (K = F.strictNumbers) !== null && K !== void 0 ? K : Qe) !== null && G !== void 0 ? G : !0,
        strictTypes: (ee = (re = F.strictTypes) !== null && re !== void 0 ? re : Qe) !== null && ee !== void 0 ? ee : "log",
        strictTuples: (O = (x = F.strictTuples) !== null && x !== void 0 ? x : Qe) !== null && O !== void 0 ? O : "log",
        strictRequired: (L = (V = F.strictRequired) !== null && V !== void 0 ? V : Qe) !== null && L !== void 0 ? L : !1,
        code: F.code ? { ...F.code, optimize: Jr, regExp: Wr } : { optimize: Jr, regExp: Wr },
        loopRequired: (H = F.loopRequired) !== null && H !== void 0 ? H : u,
        loopEnum: (Y = F.loopEnum) !== null && Y !== void 0 ? Y : u,
        meta: (ae = F.meta) !== null && ae !== void 0 ? ae : !0,
        messages: ($e = F.messages) !== null && $e !== void 0 ? $e : !0,
        inlineRefs: (ue = F.inlineRefs) !== null && ue !== void 0 ? ue : !0,
        schemaId: (fe = F.schemaId) !== null && fe !== void 0 ? fe : "$id",
        addUsedSchema: (ce = F.addUsedSchema) !== null && ce !== void 0 ? ce : !0,
        validateSchema: (Be = F.validateSchema) !== null && Be !== void 0 ? Be : !0,
        validateFormats: (ge = F.validateFormats) !== null && ge !== void 0 ? ge : !0,
        unicodeRegExp: (mr = F.unicodeRegExp) !== null && mr !== void 0 ? mr : !0,
        int32range: (gr = F.int32range) !== null && gr !== void 0 ? gr : !0,
        uriResolver: si
      };
    }
    class w {
      constructor(M = {}) {
        this.schemas = {}, this.refs = {}, this.formats = /* @__PURE__ */ Object.create(null), this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), M = this.opts = { ...M, ...h(M) };
        const { es5: B, lines: T } = this.opts.code;
        this.scope = new a.ValueScope({ scope: {}, prefixes: S, es5: B, lines: T }), this.logger = j(M.logger);
        const v = M.validateFormats;
        M.validateFormats = !1, this.RULES = (0, n.getRules)(), s.call(this, f, M, "NOT SUPPORTED"), s.call(this, m, M, "DEPRECATED", "warn"), this._metaOpts = A.call(this), M.formats && E.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), M.keywords && P.call(this, M.keywords), typeof M.meta == "object" && this.addMetaSchema(M.meta), p.call(this), M.validateFormats = v;
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
        async function v(ee, x) {
          await C.call(this, ee.$schema);
          const O = this._addSchema(ee, x);
          return O.validate || z.call(this, O);
        }
        async function C(ee) {
          ee && !this.getSchema(ee) && await v.call(this, { $ref: ee }, !0);
        }
        async function z(ee) {
          try {
            return this._compileSchemaEnv(ee);
          } catch (x) {
            if (!(x instanceof c.default))
              throw x;
            return K.call(this, x), await G.call(this, x.missingSchema), z.call(this, ee);
          }
        }
        function K({ missingSchema: ee, missingRef: x }) {
          if (this.refs[ee])
            throw new Error(`AnySchema ${ee} is loaded but ${x} cannot be resolved`);
        }
        async function G(ee) {
          const x = await re.call(this, ee);
          this.refs[ee] || await C.call(this, x.$schema), this.refs[ee] || this.addSchema(x, ee, B);
        }
        async function re(ee) {
          const x = this._loading[ee];
          if (x)
            return x;
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
          for (const z of M)
            this.addSchema(z, void 0, T, v);
          return this;
        }
        let C;
        if (typeof M == "object") {
          const { schemaId: z } = this.opts;
          if (C = M[z], C !== void 0 && typeof C != "string")
            throw new Error(`schema ${z} must be string`);
        }
        return B = (0, d.normalizeId)(B || C), this._checkUnique(B), this.schemas[B] = this._addSchema(M, T, B, v, !0), this;
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
      getSchema(M) {
        let B;
        for (; typeof (B = l.call(this, M)) == "string"; )
          M = B;
        if (B === void 0) {
          const { schemaId: T } = this.opts, v = new i.SchemaEnv({ schema: {}, schemaId: T });
          if (B = i.resolveSchema.call(this, v, M), !B)
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
          return (0, g.eachItem)(T, (C) => Q.call(this, C)), this;
        me.call(this, B);
        const v = {
          ...B,
          type: (0, y.getJSONTypes)(B.type),
          schemaType: (0, y.getJSONTypes)(B.schemaType)
        };
        return (0, g.eachItem)(T, v.type.length === 0 ? (C) => Q.call(this, C, v) : (C) => v.type.forEach((z) => Q.call(this, C, v, z))), this;
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
          const v = T.rules.findIndex((C) => C.keyword === M);
          v >= 0 && T.rules.splice(v, 1);
        }
        return this;
      }
      // Add format
      addFormat(M, B) {
        return typeof B == "string" && (B = new RegExp(B)), this.formats[M] = B, this;
      }
      errorsText(M = this.errors, { separator: B = ", ", dataVar: T = "data" } = {}) {
        return !M || M.length === 0 ? "No errors" : M.map((v) => `${T}${v.instancePath} ${v.message}`).reduce((v, C) => v + B + C);
      }
      $dataMetaSchema(M, B) {
        const T = this.RULES.all;
        M = JSON.parse(JSON.stringify(M));
        for (const v of B) {
          const C = v.split("/").slice(1);
          let z = M;
          for (const K of C)
            z = z[K];
          for (const K in T) {
            const G = T[K];
            if (typeof G != "object")
              continue;
            const { $data: re } = G.definition, ee = z[K];
            re && ee && (z[K] = ve(ee));
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
      _addSchema(M, B, T, v = this.opts.validateSchema, C = this.opts.addUsedSchema) {
        let z;
        const { schemaId: K } = this.opts;
        if (typeof M == "object")
          z = M[K];
        else {
          if (this.opts.jtd)
            throw new Error("schema must be object");
          if (typeof M != "boolean")
            throw new Error("schema must be object or boolean");
        }
        let G = this._cache.get(M);
        if (G !== void 0)
          return G;
        T = (0, d.normalizeId)(z || T);
        const re = d.getSchemaRefs.call(this, M, T);
        return G = new i.SchemaEnv({ schema: M, schemaId: K, meta: B, baseId: T, localRefs: re }), this._cache.set(G.schema, G), C && !T.startsWith("#") && (T && this._checkUnique(T), this.refs[T] = G), v && this.validateSchema(M, !0), G;
      }
      _checkUnique(M) {
        if (this.schemas[M] || this.refs[M])
          throw new Error(`schema with key or id "${M}" already exists`);
      }
      _compileSchemaEnv(M) {
        if (M.meta ? this._compileMetaSchema(M) : i.compileSchema.call(this, M), !M.validate)
          throw new Error("ajv implementation error");
        return M.validate;
      }
      _compileMetaSchema(M) {
        const B = this.opts;
        this.opts = this._metaOpts;
        try {
          i.compileSchema.call(this, M);
        } finally {
          this.opts = B;
        }
      }
    }
    w.ValidationError = o.default, w.MissingRefError = c.default, e.default = w;
    function s(F, M, B, T = "error") {
      for (const v in F) {
        const C = v;
        C in M && this.logger[T](`${B}: option ${v}. ${F[C]}`);
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
    function E() {
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
      for (const M of k)
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
    const D = /^[a-z_$][a-z0-9_$:-]*$/i;
    function U(F, M) {
      const { RULES: B } = this;
      if ((0, g.eachItem)(F, (T) => {
        if (B.keywords[T])
          throw new Error(`Keyword ${T} is already defined`);
        if (!D.test(T))
          throw new Error(`Keyword ${T} has invalid name`);
      }), !!M && M.$data && !("code" in M || "validate" in M))
        throw new Error('$data keyword must have "code" or "validate" function');
    }
    function Q(F, M, B) {
      var T;
      const v = M?.post;
      if (B && v)
        throw new Error('keyword with "post" flag cannot have "type"');
      const { RULES: C } = this;
      let z = v ? C.post : C.rules.find(({ type: G }) => G === B);
      if (z || (z = { type: B, rules: [] }, C.rules.push(z)), C.keywords[F] = !0, !M)
        return;
      const K = {
        keyword: F,
        definition: {
          ...M,
          type: (0, y.getJSONTypes)(M.type),
          schemaType: (0, y.getJSONTypes)(M.schemaType)
        }
      };
      M.before ? te.call(this, z, K, M.before) : z.rules.push(K), C.all[F] = K, (T = M.implements) === null || T === void 0 || T.forEach((G) => this.addKeyword(G));
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
  })(vr)), vr;
}
var pt = {}, ht = {}, mt = {}, En;
function Ii() {
  if (En) return mt;
  En = 1, Object.defineProperty(mt, "__esModule", { value: !0 });
  const e = {
    keyword: "id",
    code() {
      throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
    }
  };
  return mt.default = e, mt;
}
var Ae = {}, Cn;
function Ir() {
  if (Cn) return Ae;
  Cn = 1, Object.defineProperty(Ae, "__esModule", { value: !0 }), Ae.callRef = Ae.getValidate = void 0;
  const e = /* @__PURE__ */ pr(), t = /* @__PURE__ */ Se(), r = /* @__PURE__ */ J(), o = /* @__PURE__ */ we(), c = /* @__PURE__ */ hr(), n = /* @__PURE__ */ Z(), i = {
    keyword: "$ref",
    schemaType: "string",
    code(y) {
      const { gen: g, schema: _, it: $ } = y, { baseId: b, schemaEnv: k, validateName: S, opts: f, self: m } = $, { root: u } = k;
      if ((_ === "#" || _ === "#/") && b === u.baseId)
        return w();
      const h = c.resolveRef.call(m, u, b, _);
      if (h === void 0)
        throw new e.default($.opts.uriResolver, b, _);
      if (h instanceof c.SchemaEnv)
        return s(h);
      return l(h);
      function w() {
        if (k === u)
          return d(y, S, k, k.$async);
        const p = g.scopeValue("root", { ref: u });
        return d(y, (0, r._)`${p}.validate`, u, u.$async);
      }
      function s(p) {
        const E = a(y, p);
        d(y, E, p, p.$async);
      }
      function l(p) {
        const E = g.scopeValue("schema", f.code.source === !0 ? { ref: p, code: (0, r.stringify)(p) } : { ref: p }), P = g.name("valid"), A = y.subschema({
          schema: p,
          dataTypes: [],
          schemaPath: r.nil,
          topSchemaRef: E,
          errSchemaPath: _
        }, P);
        y.mergeEvaluated(A), y.ok(P);
      }
    }
  };
  function a(y, g) {
    const { gen: _ } = y;
    return g.validate ? _.scopeValue("validate", { ref: g.validate }) : (0, r._)`${_.scopeValue("wrapper", { ref: g })}.validate`;
  }
  Ae.getValidate = a;
  function d(y, g, _, $) {
    const { gen: b, it: k } = y, { allErrors: S, schemaEnv: f, opts: m } = k, u = m.passContext ? o.default.this : r.nil;
    $ ? h() : w();
    function h() {
      if (!f.$async)
        throw new Error("async schema referenced by sync schema");
      const p = b.let("valid");
      b.try(() => {
        b.code((0, r._)`await ${(0, t.callValidateCode)(y, g, u)}`), l(g), S || b.assign(p, !0);
      }, (E) => {
        b.if((0, r._)`!(${E} instanceof ${k.ValidationError})`, () => b.throw(E)), s(E), S || b.assign(p, !1);
      }), y.ok(p);
    }
    function w() {
      y.result((0, t.callValidateCode)(y, g, u), () => l(g), () => s(g));
    }
    function s(p) {
      const E = (0, r._)`${p}.errors`;
      b.assign(o.default.vErrors, (0, r._)`${o.default.vErrors} === null ? ${E} : ${o.default.vErrors}.concat(${E})`), b.assign(o.default.errors, (0, r._)`${o.default.vErrors}.length`);
    }
    function l(p) {
      var E;
      if (!k.opts.unevaluated)
        return;
      const P = (E = _?.validate) === null || E === void 0 ? void 0 : E.evaluated;
      if (k.props !== !0)
        if (P && !P.dynamicProps)
          P.props !== void 0 && (k.props = n.mergeEvaluated.props(b, P.props, k.props));
        else {
          const A = b.var("props", (0, r._)`${p}.evaluated.props`);
          k.props = n.mergeEvaluated.props(b, A, k.props, r.Name);
        }
      if (k.items !== !0)
        if (P && !P.dynamicItems)
          P.items !== void 0 && (k.items = n.mergeEvaluated.items(b, P.items, k.items));
        else {
          const A = b.var("items", (0, r._)`${p}.evaluated.items`);
          k.items = n.mergeEvaluated.items(b, A, k.items, r.Name);
        }
    }
  }
  return Ae.callRef = d, Ae.default = i, Ae;
}
var Pn;
function zi() {
  if (Pn) return ht;
  Pn = 1, Object.defineProperty(ht, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ii(), t = /* @__PURE__ */ Ir(), r = [
    "$schema",
    "$id",
    "$defs",
    "$vocabulary",
    { keyword: "$comment" },
    "definitions",
    e.default,
    t.default
  ];
  return ht.default = r, ht;
}
var gt = {}, yt = {}, xn;
function qi() {
  if (xn) return yt;
  xn = 1, Object.defineProperty(yt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ J(), t = e.operators, r = {
    maximum: { okStr: "<=", ok: t.LTE, fail: t.GT },
    minimum: { okStr: ">=", ok: t.GTE, fail: t.LT },
    exclusiveMaximum: { okStr: "<", ok: t.LT, fail: t.GTE },
    exclusiveMinimum: { okStr: ">", ok: t.GT, fail: t.LTE }
  }, o = {
    message: ({ keyword: n, schemaCode: i }) => (0, e.str)`must be ${r[n].okStr} ${i}`,
    params: ({ keyword: n, schemaCode: i }) => (0, e._)`{comparison: ${r[n].okStr}, limit: ${i}}`
  }, c = {
    keyword: Object.keys(r),
    type: "number",
    schemaType: "number",
    $data: !0,
    error: o,
    code(n) {
      const { keyword: i, data: a, schemaCode: d } = n;
      n.fail$data((0, e._)`${a} ${r[i].fail} ${d} || isNaN(${a})`);
    }
  };
  return yt.default = c, yt;
}
var vt = {}, Rn;
function Di() {
  if (Rn) return vt;
  Rn = 1, Object.defineProperty(vt, "__esModule", { value: !0 });
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
      const { gen: c, data: n, schemaCode: i, it: a } = o, d = a.opts.multipleOfPrecision, y = c.let("res"), g = d ? (0, e._)`Math.abs(Math.round(${y}) - ${y}) > 1e-${d}` : (0, e._)`${y} !== parseInt(${y})`;
      o.fail$data((0, e._)`(${i} === 0 || (${y} = ${n}/${i}, ${g}))`);
    }
  };
  return vt.default = r, vt;
}
var $t = {}, bt = {}, An;
function Vi() {
  if (An) return bt;
  An = 1, Object.defineProperty(bt, "__esModule", { value: !0 });
  function e(t) {
    const r = t.length;
    let o = 0, c = 0, n;
    for (; c < r; )
      o++, n = t.charCodeAt(c++), n >= 55296 && n <= 56319 && c < r && (n = t.charCodeAt(c), (n & 64512) === 56320 && c++);
    return o;
  }
  return bt.default = e, e.code = 'require("ajv/dist/runtime/ucs2length").default', bt;
}
var Nn;
function Bi() {
  if (Nn) return $t;
  Nn = 1, Object.defineProperty($t, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ J(), t = /* @__PURE__ */ Z(), r = /* @__PURE__ */ Vi(), c = {
    keyword: ["maxLength", "minLength"],
    type: "string",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: n, schemaCode: i }) {
        const a = n === "maxLength" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${a} than ${i} characters`;
      },
      params: ({ schemaCode: n }) => (0, e._)`{limit: ${n}}`
    },
    code(n) {
      const { keyword: i, data: a, schemaCode: d, it: y } = n, g = i === "maxLength" ? e.operators.GT : e.operators.LT, _ = y.opts.unicode === !1 ? (0, e._)`${a}.length` : (0, e._)`${(0, t.useFunc)(n.gen, r.default)}(${a})`;
      n.fail$data((0, e._)`${_} ${g} ${d}`);
    }
  };
  return $t.default = c, $t;
}
var _t = {}, jn;
function Fi() {
  if (jn) return _t;
  jn = 1, Object.defineProperty(_t, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Se(), t = /* @__PURE__ */ Z(), r = /* @__PURE__ */ J(), c = {
    keyword: "pattern",
    type: "string",
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: n }) => (0, r.str)`must match pattern "${n}"`,
      params: ({ schemaCode: n }) => (0, r._)`{pattern: ${n}}`
    },
    code(n) {
      const { gen: i, data: a, $data: d, schema: y, schemaCode: g, it: _ } = n, $ = _.opts.unicodeRegExp ? "u" : "";
      if (d) {
        const { regExp: b } = _.opts.code, k = b.code === "new RegExp" ? (0, r._)`new RegExp` : (0, t.useFunc)(i, b), S = i.let("valid");
        i.try(() => i.assign(S, (0, r._)`${k}(${g}, ${$}).test(${a})`), () => i.assign(S, !1)), n.fail$data((0, r._)`!${S}`);
      } else {
        const b = (0, e.usePattern)(n, y);
        n.fail$data((0, r._)`!${b}.test(${a})`);
      }
    }
  };
  return _t.default = c, _t;
}
var wt = {}, Mn;
function Li() {
  if (Mn) return wt;
  Mn = 1, Object.defineProperty(wt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ J(), r = {
    keyword: ["maxProperties", "minProperties"],
    type: "object",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: o, schemaCode: c }) {
        const n = o === "maxProperties" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${n} than ${c} properties`;
      },
      params: ({ schemaCode: o }) => (0, e._)`{limit: ${o}}`
    },
    code(o) {
      const { keyword: c, data: n, schemaCode: i } = o, a = c === "maxProperties" ? e.operators.GT : e.operators.LT;
      o.fail$data((0, e._)`Object.keys(${n}).length ${a} ${i}`);
    }
  };
  return wt.default = r, wt;
}
var St = {}, On;
function Ui() {
  if (On) return St;
  On = 1, Object.defineProperty(St, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Se(), t = /* @__PURE__ */ J(), r = /* @__PURE__ */ Z(), c = {
    keyword: "required",
    type: "object",
    schemaType: "array",
    $data: !0,
    error: {
      message: ({ params: { missingProperty: n } }) => (0, t.str)`must have required property '${n}'`,
      params: ({ params: { missingProperty: n } }) => (0, t._)`{missingProperty: ${n}}`
    },
    code(n) {
      const { gen: i, schema: a, schemaCode: d, data: y, $data: g, it: _ } = n, { opts: $ } = _;
      if (!g && a.length === 0)
        return;
      const b = a.length >= $.loopRequired;
      if (_.allErrors ? k() : S(), $.strictRequired) {
        const u = n.parentSchema.properties, { definedProperties: h } = n.it;
        for (const w of a)
          if (u?.[w] === void 0 && !h.has(w)) {
            const s = _.schemaEnv.baseId + _.errSchemaPath, l = `required property "${w}" is not defined at "${s}" (strictRequired)`;
            (0, r.checkStrictMode)(_, l, _.opts.strictRequired);
          }
      }
      function k() {
        if (b || g)
          n.block$data(t.nil, f);
        else
          for (const u of a)
            (0, e.checkReportMissingProp)(n, u);
      }
      function S() {
        const u = i.let("missing");
        if (b || g) {
          const h = i.let("valid", !0);
          n.block$data(h, () => m(u, h)), n.ok(h);
        } else
          i.if((0, e.checkMissingProp)(n, a, u)), (0, e.reportMissingProp)(n, u), i.else();
      }
      function f() {
        i.forOf("prop", d, (u) => {
          n.setParams({ missingProperty: u }), i.if((0, e.noPropertyInData)(i, y, u, $.ownProperties), () => n.error());
        });
      }
      function m(u, h) {
        n.setParams({ missingProperty: u }), i.forOf(u, d, () => {
          i.assign(h, (0, e.propertyInData)(i, y, u, $.ownProperties)), i.if((0, t.not)(h), () => {
            n.error(), i.break();
          });
        }, t.nil);
      }
    }
  };
  return St.default = c, St;
}
var kt = {}, Tn;
function Ki() {
  if (Tn) return kt;
  Tn = 1, Object.defineProperty(kt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ J(), r = {
    keyword: ["maxItems", "minItems"],
    type: "array",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: o, schemaCode: c }) {
        const n = o === "maxItems" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${n} than ${c} items`;
      },
      params: ({ schemaCode: o }) => (0, e._)`{limit: ${o}}`
    },
    code(o) {
      const { keyword: c, data: n, schemaCode: i } = o, a = c === "maxItems" ? e.operators.GT : e.operators.LT;
      o.fail$data((0, e._)`${n}.length ${a} ${i}`);
    }
  };
  return kt.default = r, kt;
}
var Et = {}, Ct = {}, In;
function zr() {
  if (In) return Ct;
  In = 1, Object.defineProperty(Ct, "__esModule", { value: !0 });
  const e = Do();
  return e.code = 'require("ajv/dist/runtime/equal").default', Ct.default = e, Ct;
}
var zn;
function Hi() {
  if (zn) return Et;
  zn = 1, Object.defineProperty(Et, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ar(), t = /* @__PURE__ */ J(), r = /* @__PURE__ */ Z(), o = /* @__PURE__ */ zr(), n = {
    keyword: "uniqueItems",
    type: "array",
    schemaType: "boolean",
    $data: !0,
    error: {
      message: ({ params: { i, j: a } }) => (0, t.str)`must NOT have duplicate items (items ## ${a} and ${i} are identical)`,
      params: ({ params: { i, j: a } }) => (0, t._)`{i: ${i}, j: ${a}}`
    },
    code(i) {
      const { gen: a, data: d, $data: y, schema: g, parentSchema: _, schemaCode: $, it: b } = i;
      if (!y && !g)
        return;
      const k = a.let("valid"), S = _.items ? (0, e.getSchemaTypes)(_.items) : [];
      i.block$data(k, f, (0, t._)`${$} === false`), i.ok(k);
      function f() {
        const w = a.let("i", (0, t._)`${d}.length`), s = a.let("j");
        i.setParams({ i: w, j: s }), a.assign(k, !0), a.if((0, t._)`${w} > 1`, () => (m() ? u : h)(w, s));
      }
      function m() {
        return S.length > 0 && !S.some((w) => w === "object" || w === "array");
      }
      function u(w, s) {
        const l = a.name("item"), p = (0, e.checkDataTypes)(S, l, b.opts.strictNumbers, e.DataType.Wrong), E = a.const("indices", (0, t._)`{}`);
        a.for((0, t._)`;${w}--;`, () => {
          a.let(l, (0, t._)`${d}[${w}]`), a.if(p, (0, t._)`continue`), S.length > 1 && a.if((0, t._)`typeof ${l} == "string"`, (0, t._)`${l} += "_"`), a.if((0, t._)`typeof ${E}[${l}] == "number"`, () => {
            a.assign(s, (0, t._)`${E}[${l}]`), i.error(), a.assign(k, !1).break();
          }).code((0, t._)`${E}[${l}] = ${w}`);
        });
      }
      function h(w, s) {
        const l = (0, r.useFunc)(a, o.default), p = a.name("outer");
        a.label(p).for((0, t._)`;${w}--;`, () => a.for((0, t._)`${s} = ${w}; ${s}--;`, () => a.if((0, t._)`${l}(${d}[${w}], ${d}[${s}])`, () => {
          i.error(), a.assign(k, !1).break(p);
        })));
      }
    }
  };
  return Et.default = n, Et;
}
var Pt = {}, qn;
function Gi() {
  if (qn) return Pt;
  qn = 1, Object.defineProperty(Pt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ J(), t = /* @__PURE__ */ Z(), r = /* @__PURE__ */ zr(), c = {
    keyword: "const",
    $data: !0,
    error: {
      message: "must be equal to constant",
      params: ({ schemaCode: n }) => (0, e._)`{allowedValue: ${n}}`
    },
    code(n) {
      const { gen: i, data: a, $data: d, schemaCode: y, schema: g } = n;
      d || g && typeof g == "object" ? n.fail$data((0, e._)`!${(0, t.useFunc)(i, r.default)}(${a}, ${y})`) : n.fail((0, e._)`${g} !== ${a}`);
    }
  };
  return Pt.default = c, Pt;
}
var xt = {}, Dn;
function Ji() {
  if (Dn) return xt;
  Dn = 1, Object.defineProperty(xt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ J(), t = /* @__PURE__ */ Z(), r = /* @__PURE__ */ zr(), c = {
    keyword: "enum",
    schemaType: "array",
    $data: !0,
    error: {
      message: "must be equal to one of the allowed values",
      params: ({ schemaCode: n }) => (0, e._)`{allowedValues: ${n}}`
    },
    code(n) {
      const { gen: i, data: a, $data: d, schema: y, schemaCode: g, it: _ } = n;
      if (!d && y.length === 0)
        throw new Error("enum must have non-empty array");
      const $ = y.length >= _.opts.loopEnum;
      let b;
      const k = () => b ?? (b = (0, t.useFunc)(i, r.default));
      let S;
      if ($ || d)
        S = i.let("valid"), n.block$data(S, f);
      else {
        if (!Array.isArray(y))
          throw new Error("ajv implementation error");
        const u = i.const("vSchema", g);
        S = (0, e.or)(...y.map((h, w) => m(u, w)));
      }
      n.pass(S);
      function f() {
        i.assign(S, !1), i.forOf("v", g, (u) => i.if((0, e._)`${k()}(${a}, ${u})`, () => i.assign(S, !0).break()));
      }
      function m(u, h) {
        const w = y[h];
        return typeof w == "object" && w !== null ? (0, e._)`${k()}(${a}, ${u}[${h}])` : (0, e._)`${a} === ${w}`;
      }
    }
  };
  return xt.default = c, xt;
}
var Vn;
function Wi() {
  if (Vn) return gt;
  Vn = 1, Object.defineProperty(gt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ qi(), t = /* @__PURE__ */ Di(), r = /* @__PURE__ */ Bi(), o = /* @__PURE__ */ Fi(), c = /* @__PURE__ */ Li(), n = /* @__PURE__ */ Ui(), i = /* @__PURE__ */ Ki(), a = /* @__PURE__ */ Hi(), d = /* @__PURE__ */ Gi(), y = /* @__PURE__ */ Ji(), g = [
    // number
    e.default,
    t.default,
    // string
    r.default,
    o.default,
    // object
    c.default,
    n.default,
    // array
    i.default,
    a.default,
    // any
    { keyword: "type", schemaType: ["string", "array"] },
    { keyword: "nullable", schemaType: "boolean" },
    d.default,
    y.default
  ];
  return gt.default = g, gt;
}
var Rt = {}, Fe = {}, Bn;
function Bo() {
  if (Bn) return Fe;
  Bn = 1, Object.defineProperty(Fe, "__esModule", { value: !0 }), Fe.validateAdditionalItems = void 0;
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
      const { parentSchema: i, it: a } = n, { items: d } = i;
      if (!Array.isArray(d)) {
        (0, t.checkStrictMode)(a, '"additionalItems" is ignored when "items" is not an array of schemas');
        return;
      }
      c(n, d);
    }
  };
  function c(n, i) {
    const { gen: a, schema: d, data: y, keyword: g, it: _ } = n;
    _.items = !0;
    const $ = a.const("len", (0, e._)`${y}.length`);
    if (d === !1)
      n.setParams({ len: i.length }), n.pass((0, e._)`${$} <= ${i.length}`);
    else if (typeof d == "object" && !(0, t.alwaysValidSchema)(_, d)) {
      const k = a.var("valid", (0, e._)`${$} <= ${i.length}`);
      a.if((0, e.not)(k), () => b(k)), n.ok(k);
    }
    function b(k) {
      a.forRange("i", i.length, $, (S) => {
        n.subschema({ keyword: g, dataProp: S, dataPropType: t.Type.Num }, k), _.allErrors || a.if((0, e.not)(k), () => a.break());
      });
    }
  }
  return Fe.validateAdditionalItems = c, Fe.default = o, Fe;
}
var At = {}, Le = {}, Fn;
function Fo() {
  if (Fn) return Le;
  Fn = 1, Object.defineProperty(Le, "__esModule", { value: !0 }), Le.validateTuple = void 0;
  const e = /* @__PURE__ */ J(), t = /* @__PURE__ */ Z(), r = /* @__PURE__ */ Se(), o = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "array", "boolean"],
    before: "uniqueItems",
    code(n) {
      const { schema: i, it: a } = n;
      if (Array.isArray(i))
        return c(n, "additionalItems", i);
      a.items = !0, !(0, t.alwaysValidSchema)(a, i) && n.ok((0, r.validateArray)(n));
    }
  };
  function c(n, i, a = n.schema) {
    const { gen: d, parentSchema: y, data: g, keyword: _, it: $ } = n;
    S(y), $.opts.unevaluated && a.length && $.items !== !0 && ($.items = t.mergeEvaluated.items(d, a.length, $.items));
    const b = d.name("valid"), k = d.const("len", (0, e._)`${g}.length`);
    a.forEach((f, m) => {
      (0, t.alwaysValidSchema)($, f) || (d.if((0, e._)`${k} > ${m}`, () => n.subschema({
        keyword: _,
        schemaProp: m,
        dataProp: m
      }, b)), n.ok(b));
    });
    function S(f) {
      const { opts: m, errSchemaPath: u } = $, h = a.length, w = h === f.minItems && (h === f.maxItems || f[i] === !1);
      if (m.strictTuples && !w) {
        const s = `"${_}" is ${h}-tuple, but minItems or maxItems/${i} are not specified or different at path "${u}"`;
        (0, t.checkStrictMode)($, s, m.strictTuples);
      }
    }
  }
  return Le.validateTuple = c, Le.default = o, Le;
}
var Ln;
function Yi() {
  if (Ln) return At;
  Ln = 1, Object.defineProperty(At, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Fo(), t = {
    keyword: "prefixItems",
    type: "array",
    schemaType: ["array"],
    before: "uniqueItems",
    code: (r) => (0, e.validateTuple)(r, "items")
  };
  return At.default = t, At;
}
var Nt = {}, Un;
function Xi() {
  if (Un) return Nt;
  Un = 1, Object.defineProperty(Nt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ J(), t = /* @__PURE__ */ Z(), r = /* @__PURE__ */ Se(), o = /* @__PURE__ */ Bo(), n = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    error: {
      message: ({ params: { len: i } }) => (0, e.str)`must NOT have more than ${i} items`,
      params: ({ params: { len: i } }) => (0, e._)`{limit: ${i}}`
    },
    code(i) {
      const { schema: a, parentSchema: d, it: y } = i, { prefixItems: g } = d;
      y.items = !0, !(0, t.alwaysValidSchema)(y, a) && (g ? (0, o.validateAdditionalItems)(i, g) : i.ok((0, r.validateArray)(i)));
    }
  };
  return Nt.default = n, Nt;
}
var jt = {}, Kn;
function Zi() {
  if (Kn) return jt;
  Kn = 1, Object.defineProperty(jt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ J(), t = /* @__PURE__ */ Z(), o = {
    keyword: "contains",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    trackErrors: !0,
    error: {
      message: ({ params: { min: c, max: n } }) => n === void 0 ? (0, e.str)`must contain at least ${c} valid item(s)` : (0, e.str)`must contain at least ${c} and no more than ${n} valid item(s)`,
      params: ({ params: { min: c, max: n } }) => n === void 0 ? (0, e._)`{minContains: ${c}}` : (0, e._)`{minContains: ${c}, maxContains: ${n}}`
    },
    code(c) {
      const { gen: n, schema: i, parentSchema: a, data: d, it: y } = c;
      let g, _;
      const { minContains: $, maxContains: b } = a;
      y.opts.next ? (g = $ === void 0 ? 1 : $, _ = b) : g = 1;
      const k = n.const("len", (0, e._)`${d}.length`);
      if (c.setParams({ min: g, max: _ }), _ === void 0 && g === 0) {
        (0, t.checkStrictMode)(y, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
        return;
      }
      if (_ !== void 0 && g > _) {
        (0, t.checkStrictMode)(y, '"minContains" > "maxContains" is always invalid'), c.fail();
        return;
      }
      if ((0, t.alwaysValidSchema)(y, i)) {
        let h = (0, e._)`${k} >= ${g}`;
        _ !== void 0 && (h = (0, e._)`${h} && ${k} <= ${_}`), c.pass(h);
        return;
      }
      y.items = !0;
      const S = n.name("valid");
      _ === void 0 && g === 1 ? m(S, () => n.if(S, () => n.break())) : g === 0 ? (n.let(S, !0), _ !== void 0 && n.if((0, e._)`${d}.length > 0`, f)) : (n.let(S, !1), f()), c.result(S, () => c.reset());
      function f() {
        const h = n.name("_valid"), w = n.let("count", 0);
        m(h, () => n.if(h, () => u(w)));
      }
      function m(h, w) {
        n.forRange("i", 0, k, (s) => {
          c.subschema({
            keyword: "contains",
            dataProp: s,
            dataPropType: t.Type.Num,
            compositeRule: !0
          }, h), w();
        });
      }
      function u(h) {
        n.code((0, e._)`${h}++`), _ === void 0 ? n.if((0, e._)`${h} >= ${g}`, () => n.assign(S, !0).break()) : (n.if((0, e._)`${h} > ${_}`, () => n.assign(S, !1).break()), g === 1 ? n.assign(S, !0) : n.if((0, e._)`${h} >= ${g}`, () => n.assign(S, !0)));
      }
    }
  };
  return jt.default = o, jt;
}
var Pr = {}, Hn;
function qr() {
  return Hn || (Hn = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
    const t = /* @__PURE__ */ J(), r = /* @__PURE__ */ Z(), o = /* @__PURE__ */ Se();
    e.error = {
      message: ({ params: { property: d, depsCount: y, deps: g } }) => {
        const _ = y === 1 ? "property" : "properties";
        return (0, t.str)`must have ${_} ${g} when property ${d} is present`;
      },
      params: ({ params: { property: d, depsCount: y, deps: g, missingProperty: _ } }) => (0, t._)`{property: ${d},
    missingProperty: ${_},
    depsCount: ${y},
    deps: ${g}}`
      // TODO change to reference
    };
    const c = {
      keyword: "dependencies",
      type: "object",
      schemaType: "object",
      error: e.error,
      code(d) {
        const [y, g] = n(d);
        i(d, y), a(d, g);
      }
    };
    function n({ schema: d }) {
      const y = {}, g = {};
      for (const _ in d) {
        if (_ === "__proto__")
          continue;
        const $ = Array.isArray(d[_]) ? y : g;
        $[_] = d[_];
      }
      return [y, g];
    }
    function i(d, y = d.schema) {
      const { gen: g, data: _, it: $ } = d;
      if (Object.keys(y).length === 0)
        return;
      const b = g.let("missing");
      for (const k in y) {
        const S = y[k];
        if (S.length === 0)
          continue;
        const f = (0, o.propertyInData)(g, _, k, $.opts.ownProperties);
        d.setParams({
          property: k,
          depsCount: S.length,
          deps: S.join(", ")
        }), $.allErrors ? g.if(f, () => {
          for (const m of S)
            (0, o.checkReportMissingProp)(d, m);
        }) : (g.if((0, t._)`${f} && (${(0, o.checkMissingProp)(d, S, b)})`), (0, o.reportMissingProp)(d, b), g.else());
      }
    }
    e.validatePropertyDeps = i;
    function a(d, y = d.schema) {
      const { gen: g, data: _, keyword: $, it: b } = d, k = g.name("valid");
      for (const S in y)
        (0, r.alwaysValidSchema)(b, y[S]) || (g.if(
          (0, o.propertyInData)(g, _, S, b.opts.ownProperties),
          () => {
            const f = d.subschema({ keyword: $, schemaProp: S }, k);
            d.mergeValidEvaluated(f, k);
          },
          () => g.var(k, !0)
          // TODO var
        ), d.ok(k));
    }
    e.validateSchemaDeps = a, e.default = c;
  })(Pr)), Pr;
}
var Mt = {}, Gn;
function Qi() {
  if (Gn) return Mt;
  Gn = 1, Object.defineProperty(Mt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ J(), t = /* @__PURE__ */ Z(), o = {
    keyword: "propertyNames",
    type: "object",
    schemaType: ["object", "boolean"],
    error: {
      message: "property name must be valid",
      params: ({ params: c }) => (0, e._)`{propertyName: ${c.propertyName}}`
    },
    code(c) {
      const { gen: n, schema: i, data: a, it: d } = c;
      if ((0, t.alwaysValidSchema)(d, i))
        return;
      const y = n.name("valid");
      n.forIn("key", a, (g) => {
        c.setParams({ propertyName: g }), c.subschema({
          keyword: "propertyNames",
          data: g,
          dataTypes: ["string"],
          propertyName: g,
          compositeRule: !0
        }, y), n.if((0, e.not)(y), () => {
          c.error(!0), d.allErrors || n.break();
        });
      }), c.ok(y);
    }
  };
  return Mt.default = o, Mt;
}
var Ot = {}, Jn;
function Lo() {
  if (Jn) return Ot;
  Jn = 1, Object.defineProperty(Ot, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Se(), t = /* @__PURE__ */ J(), r = /* @__PURE__ */ we(), o = /* @__PURE__ */ Z(), n = {
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
      const { gen: a, schema: d, parentSchema: y, data: g, errsCount: _, it: $ } = i;
      if (!_)
        throw new Error("ajv implementation error");
      const { allErrors: b, opts: k } = $;
      if ($.props = !0, k.removeAdditional !== "all" && (0, o.alwaysValidSchema)($, d))
        return;
      const S = (0, e.allSchemaProperties)(y.properties), f = (0, e.allSchemaProperties)(y.patternProperties);
      m(), i.ok((0, t._)`${_} === ${r.default.errors}`);
      function m() {
        a.forIn("key", g, (l) => {
          !S.length && !f.length ? w(l) : a.if(u(l), () => w(l));
        });
      }
      function u(l) {
        let p;
        if (S.length > 8) {
          const E = (0, o.schemaRefOrVal)($, y.properties, "properties");
          p = (0, e.isOwnProperty)(a, E, l);
        } else S.length ? p = (0, t.or)(...S.map((E) => (0, t._)`${l} === ${E}`)) : p = t.nil;
        return f.length && (p = (0, t.or)(p, ...f.map((E) => (0, t._)`${(0, e.usePattern)(i, E)}.test(${l})`))), (0, t.not)(p);
      }
      function h(l) {
        a.code((0, t._)`delete ${g}[${l}]`);
      }
      function w(l) {
        if (k.removeAdditional === "all" || k.removeAdditional && d === !1) {
          h(l);
          return;
        }
        if (d === !1) {
          i.setParams({ additionalProperty: l }), i.error(), b || a.break();
          return;
        }
        if (typeof d == "object" && !(0, o.alwaysValidSchema)($, d)) {
          const p = a.name("valid");
          k.removeAdditional === "failing" ? (s(l, p, !1), a.if((0, t.not)(p), () => {
            i.reset(), h(l);
          })) : (s(l, p), b || a.if((0, t.not)(p), () => a.break()));
        }
      }
      function s(l, p, E) {
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
  return Ot.default = n, Ot;
}
var Tt = {}, Wn;
function es() {
  if (Wn) return Tt;
  Wn = 1, Object.defineProperty(Tt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ fr(), t = /* @__PURE__ */ Se(), r = /* @__PURE__ */ Z(), o = /* @__PURE__ */ Lo(), c = {
    keyword: "properties",
    type: "object",
    schemaType: "object",
    code(n) {
      const { gen: i, schema: a, parentSchema: d, data: y, it: g } = n;
      g.opts.removeAdditional === "all" && d.additionalProperties === void 0 && o.default.code(new e.KeywordCxt(g, o.default, "additionalProperties"));
      const _ = (0, t.allSchemaProperties)(a);
      for (const f of _)
        g.definedProperties.add(f);
      g.opts.unevaluated && _.length && g.props !== !0 && (g.props = r.mergeEvaluated.props(i, (0, r.toHash)(_), g.props));
      const $ = _.filter((f) => !(0, r.alwaysValidSchema)(g, a[f]));
      if ($.length === 0)
        return;
      const b = i.name("valid");
      for (const f of $)
        k(f) ? S(f) : (i.if((0, t.propertyInData)(i, y, f, g.opts.ownProperties)), S(f), g.allErrors || i.else().var(b, !0), i.endIf()), n.it.definedProperties.add(f), n.ok(b);
      function k(f) {
        return g.opts.useDefaults && !g.compositeRule && a[f].default !== void 0;
      }
      function S(f) {
        n.subschema({
          keyword: "properties",
          schemaProp: f,
          dataProp: f
        }, b);
      }
    }
  };
  return Tt.default = c, Tt;
}
var It = {}, Yn;
function ts() {
  if (Yn) return It;
  Yn = 1, Object.defineProperty(It, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Se(), t = /* @__PURE__ */ J(), r = /* @__PURE__ */ Z(), o = /* @__PURE__ */ Z(), c = {
    keyword: "patternProperties",
    type: "object",
    schemaType: "object",
    code(n) {
      const { gen: i, schema: a, data: d, parentSchema: y, it: g } = n, { opts: _ } = g, $ = (0, e.allSchemaProperties)(a), b = $.filter((w) => (0, r.alwaysValidSchema)(g, a[w]));
      if ($.length === 0 || b.length === $.length && (!g.opts.unevaluated || g.props === !0))
        return;
      const k = _.strictSchema && !_.allowMatchingProperties && y.properties, S = i.name("valid");
      g.props !== !0 && !(g.props instanceof t.Name) && (g.props = (0, o.evaluatedPropsToName)(i, g.props));
      const { props: f } = g;
      m();
      function m() {
        for (const w of $)
          k && u(w), g.allErrors ? h(w) : (i.var(S, !0), h(w), i.if(S));
      }
      function u(w) {
        for (const s in k)
          new RegExp(w).test(s) && (0, r.checkStrictMode)(g, `property ${s} matches pattern ${w} (use allowMatchingProperties)`);
      }
      function h(w) {
        i.forIn("key", d, (s) => {
          i.if((0, t._)`${(0, e.usePattern)(n, w)}.test(${s})`, () => {
            const l = b.includes(w);
            l || n.subschema({
              keyword: "patternProperties",
              schemaProp: w,
              dataProp: s,
              dataPropType: o.Type.Str
            }, S), g.opts.unevaluated && f !== !0 ? i.assign((0, t._)`${f}[${s}]`, !0) : !l && !g.allErrors && i.if((0, t.not)(S), () => i.break());
          });
        });
      }
    }
  };
  return It.default = c, It;
}
var zt = {}, Xn;
function rs() {
  if (Xn) return zt;
  Xn = 1, Object.defineProperty(zt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Z(), t = {
    keyword: "not",
    schemaType: ["object", "boolean"],
    trackErrors: !0,
    code(r) {
      const { gen: o, schema: c, it: n } = r;
      if ((0, e.alwaysValidSchema)(n, c)) {
        r.fail();
        return;
      }
      const i = o.name("valid");
      r.subschema({
        keyword: "not",
        compositeRule: !0,
        createErrors: !1,
        allErrors: !1
      }, i), r.failResult(i, () => r.reset(), () => r.error());
    },
    error: { message: "must NOT be valid" }
  };
  return zt.default = t, zt;
}
var qt = {}, Zn;
function ns() {
  if (Zn) return qt;
  Zn = 1, Object.defineProperty(qt, "__esModule", { value: !0 });
  const t = {
    keyword: "anyOf",
    schemaType: "array",
    trackErrors: !0,
    code: (/* @__PURE__ */ Se()).validateUnion,
    error: { message: "must match a schema in anyOf" }
  };
  return qt.default = t, qt;
}
var Dt = {}, Qn;
function os() {
  if (Qn) return Dt;
  Qn = 1, Object.defineProperty(Dt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ J(), t = /* @__PURE__ */ Z(), o = {
    keyword: "oneOf",
    schemaType: "array",
    trackErrors: !0,
    error: {
      message: "must match exactly one schema in oneOf",
      params: ({ params: c }) => (0, e._)`{passingSchemas: ${c.passing}}`
    },
    code(c) {
      const { gen: n, schema: i, parentSchema: a, it: d } = c;
      if (!Array.isArray(i))
        throw new Error("ajv implementation error");
      if (d.opts.discriminator && a.discriminator)
        return;
      const y = i, g = n.let("valid", !1), _ = n.let("passing", null), $ = n.name("_valid");
      c.setParams({ passing: _ }), n.block(b), c.result(g, () => c.reset(), () => c.error(!0));
      function b() {
        y.forEach((k, S) => {
          let f;
          (0, t.alwaysValidSchema)(d, k) ? n.var($, !0) : f = c.subschema({
            keyword: "oneOf",
            schemaProp: S,
            compositeRule: !0
          }, $), S > 0 && n.if((0, e._)`${$} && ${g}`).assign(g, !1).assign(_, (0, e._)`[${_}, ${S}]`).else(), n.if($, () => {
            n.assign(g, !0), n.assign(_, S), f && c.mergeEvaluated(f, e.Name);
          });
        });
      }
    }
  };
  return Dt.default = o, Dt;
}
var Vt = {}, eo;
function is() {
  if (eo) return Vt;
  eo = 1, Object.defineProperty(Vt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Z(), t = {
    keyword: "allOf",
    schemaType: "array",
    code(r) {
      const { gen: o, schema: c, it: n } = r;
      if (!Array.isArray(c))
        throw new Error("ajv implementation error");
      const i = o.name("valid");
      c.forEach((a, d) => {
        if ((0, e.alwaysValidSchema)(n, a))
          return;
        const y = r.subschema({ keyword: "allOf", schemaProp: d }, i);
        r.ok(i), r.mergeEvaluated(y);
      });
    }
  };
  return Vt.default = t, Vt;
}
var Bt = {}, to;
function ss() {
  if (to) return Bt;
  to = 1, Object.defineProperty(Bt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ J(), t = /* @__PURE__ */ Z(), o = {
    keyword: "if",
    schemaType: ["object", "boolean"],
    trackErrors: !0,
    error: {
      message: ({ params: n }) => (0, e.str)`must match "${n.ifClause}" schema`,
      params: ({ params: n }) => (0, e._)`{failingKeyword: ${n.ifClause}}`
    },
    code(n) {
      const { gen: i, parentSchema: a, it: d } = n;
      a.then === void 0 && a.else === void 0 && (0, t.checkStrictMode)(d, '"if" without "then" and "else" is ignored');
      const y = c(d, "then"), g = c(d, "else");
      if (!y && !g)
        return;
      const _ = i.let("valid", !0), $ = i.name("_valid");
      if (b(), n.reset(), y && g) {
        const S = i.let("ifClause");
        n.setParams({ ifClause: S }), i.if($, k("then", S), k("else", S));
      } else y ? i.if($, k("then")) : i.if((0, e.not)($), k("else"));
      n.pass(_, () => n.error(!0));
      function b() {
        const S = n.subschema({
          keyword: "if",
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }, $);
        n.mergeEvaluated(S);
      }
      function k(S, f) {
        return () => {
          const m = n.subschema({ keyword: S }, $);
          i.assign(_, $), n.mergeValidEvaluated(m, _), f ? i.assign(f, (0, e._)`${S}`) : n.setParams({ ifClause: S });
        };
      }
    }
  };
  function c(n, i) {
    const a = n.schema[i];
    return a !== void 0 && !(0, t.alwaysValidSchema)(n, a);
  }
  return Bt.default = o, Bt;
}
var Ft = {}, ro;
function as() {
  if (ro) return Ft;
  ro = 1, Object.defineProperty(Ft, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Z(), t = {
    keyword: ["then", "else"],
    schemaType: ["object", "boolean"],
    code({ keyword: r, parentSchema: o, it: c }) {
      o.if === void 0 && (0, e.checkStrictMode)(c, `"${r}" without "if" is ignored`);
    }
  };
  return Ft.default = t, Ft;
}
var no;
function cs() {
  if (no) return Rt;
  no = 1, Object.defineProperty(Rt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Bo(), t = /* @__PURE__ */ Yi(), r = /* @__PURE__ */ Fo(), o = /* @__PURE__ */ Xi(), c = /* @__PURE__ */ Zi(), n = /* @__PURE__ */ qr(), i = /* @__PURE__ */ Qi(), a = /* @__PURE__ */ Lo(), d = /* @__PURE__ */ es(), y = /* @__PURE__ */ ts(), g = /* @__PURE__ */ rs(), _ = /* @__PURE__ */ ns(), $ = /* @__PURE__ */ os(), b = /* @__PURE__ */ is(), k = /* @__PURE__ */ ss(), S = /* @__PURE__ */ as();
  function f(m = !1) {
    const u = [
      // any
      g.default,
      _.default,
      $.default,
      b.default,
      k.default,
      S.default,
      // object
      i.default,
      a.default,
      n.default,
      d.default,
      y.default
    ];
    return m ? u.push(t.default, o.default) : u.push(e.default, r.default), u.push(c.default), u;
  }
  return Rt.default = f, Rt;
}
var Lt = {}, Ue = {}, oo;
function Uo() {
  if (oo) return Ue;
  oo = 1, Object.defineProperty(Ue, "__esModule", { value: !0 }), Ue.dynamicAnchor = void 0;
  const e = /* @__PURE__ */ J(), t = /* @__PURE__ */ we(), r = /* @__PURE__ */ hr(), o = /* @__PURE__ */ Ir(), c = {
    keyword: "$dynamicAnchor",
    schemaType: "string",
    code: (a) => n(a, a.schema)
  };
  function n(a, d) {
    const { gen: y, it: g } = a;
    g.schemaEnv.root.dynamicAnchors[d] = !0;
    const _ = (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(d)}`, $ = g.errSchemaPath === "#" ? g.validateName : i(a);
    y.if((0, e._)`!${_}`, () => y.assign(_, $));
  }
  Ue.dynamicAnchor = n;
  function i(a) {
    const { schemaEnv: d, schema: y, self: g } = a.it, { root: _, baseId: $, localRefs: b, meta: k } = d.root, { schemaId: S } = g.opts, f = new r.SchemaEnv({ schema: y, schemaId: S, root: _, baseId: $, localRefs: b, meta: k });
    return r.compileSchema.call(g, f), (0, o.getValidate)(a, f);
  }
  return Ue.default = c, Ue;
}
var Ke = {}, io;
function Ko() {
  if (io) return Ke;
  io = 1, Object.defineProperty(Ke, "__esModule", { value: !0 }), Ke.dynamicRef = void 0;
  const e = /* @__PURE__ */ J(), t = /* @__PURE__ */ we(), r = /* @__PURE__ */ Ir(), o = {
    keyword: "$dynamicRef",
    schemaType: "string",
    code: (n) => c(n, n.schema)
  };
  function c(n, i) {
    const { gen: a, keyword: d, it: y } = n;
    if (i[0] !== "#")
      throw new Error(`"${d}" only supports hash fragment reference`);
    const g = i.slice(1);
    if (y.allErrors)
      _();
    else {
      const b = a.let("valid", !1);
      _(b), n.ok(b);
    }
    function _(b) {
      if (y.schemaEnv.root.dynamicAnchors[g]) {
        const k = a.let("_v", (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(g)}`);
        a.if(k, $(k, b), $(y.validateName, b));
      } else
        $(y.validateName, b)();
    }
    function $(b, k) {
      return k ? () => a.block(() => {
        (0, r.callRef)(n, b), a.let(k, !0);
      }) : () => (0, r.callRef)(n, b);
    }
  }
  return Ke.dynamicRef = c, Ke.default = o, Ke;
}
var Ut = {}, so;
function ls() {
  if (so) return Ut;
  so = 1, Object.defineProperty(Ut, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Uo(), t = /* @__PURE__ */ Z(), r = {
    keyword: "$recursiveAnchor",
    schemaType: "boolean",
    code(o) {
      o.schema ? (0, e.dynamicAnchor)(o, "") : (0, t.checkStrictMode)(o.it, "$recursiveAnchor: false is ignored");
    }
  };
  return Ut.default = r, Ut;
}
var Kt = {}, ao;
function ds() {
  if (ao) return Kt;
  ao = 1, Object.defineProperty(Kt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ko(), t = {
    keyword: "$recursiveRef",
    schemaType: "string",
    code: (r) => (0, e.dynamicRef)(r, r.schema)
  };
  return Kt.default = t, Kt;
}
var co;
function us() {
  if (co) return Lt;
  co = 1, Object.defineProperty(Lt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Uo(), t = /* @__PURE__ */ Ko(), r = /* @__PURE__ */ ls(), o = /* @__PURE__ */ ds(), c = [e.default, t.default, r.default, o.default];
  return Lt.default = c, Lt;
}
var Ht = {}, Gt = {}, lo;
function fs() {
  if (lo) return Gt;
  lo = 1, Object.defineProperty(Gt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ qr(), t = {
    keyword: "dependentRequired",
    type: "object",
    schemaType: "object",
    error: e.error,
    code: (r) => (0, e.validatePropertyDeps)(r)
  };
  return Gt.default = t, Gt;
}
var Jt = {}, uo;
function ps() {
  if (uo) return Jt;
  uo = 1, Object.defineProperty(Jt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ qr(), t = {
    keyword: "dependentSchemas",
    type: "object",
    schemaType: "object",
    code: (r) => (0, e.validateSchemaDeps)(r)
  };
  return Jt.default = t, Jt;
}
var Wt = {}, fo;
function hs() {
  if (fo) return Wt;
  fo = 1, Object.defineProperty(Wt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Z(), t = {
    keyword: ["maxContains", "minContains"],
    type: "array",
    schemaType: "number",
    code({ keyword: r, parentSchema: o, it: c }) {
      o.contains === void 0 && (0, e.checkStrictMode)(c, `"${r}" without "contains" is ignored`);
    }
  };
  return Wt.default = t, Wt;
}
var po;
function ms() {
  if (po) return Ht;
  po = 1, Object.defineProperty(Ht, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ fs(), t = /* @__PURE__ */ ps(), r = /* @__PURE__ */ hs(), o = [e.default, t.default, r.default];
  return Ht.default = o, Ht;
}
var Yt = {}, Xt = {}, ho;
function gs() {
  if (ho) return Xt;
  ho = 1, Object.defineProperty(Xt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ J(), t = /* @__PURE__ */ Z(), r = /* @__PURE__ */ we(), c = {
    keyword: "unevaluatedProperties",
    type: "object",
    schemaType: ["boolean", "object"],
    trackErrors: !0,
    error: {
      message: "must NOT have unevaluated properties",
      params: ({ params: n }) => (0, e._)`{unevaluatedProperty: ${n.unevaluatedProperty}}`
    },
    code(n) {
      const { gen: i, schema: a, data: d, errsCount: y, it: g } = n;
      if (!y)
        throw new Error("ajv implementation error");
      const { allErrors: _, props: $ } = g;
      $ instanceof e.Name ? i.if((0, e._)`${$} !== true`, () => i.forIn("key", d, (f) => i.if(k($, f), () => b(f)))) : $ !== !0 && i.forIn("key", d, (f) => $ === void 0 ? b(f) : i.if(S($, f), () => b(f))), g.props = !0, n.ok((0, e._)`${y} === ${r.default.errors}`);
      function b(f) {
        if (a === !1) {
          n.setParams({ unevaluatedProperty: f }), n.error(), _ || i.break();
          return;
        }
        if (!(0, t.alwaysValidSchema)(g, a)) {
          const m = i.name("valid");
          n.subschema({
            keyword: "unevaluatedProperties",
            dataProp: f,
            dataPropType: t.Type.Str
          }, m), _ || i.if((0, e.not)(m), () => i.break());
        }
      }
      function k(f, m) {
        return (0, e._)`!${f} || !${f}[${m}]`;
      }
      function S(f, m) {
        const u = [];
        for (const h in f)
          f[h] === !0 && u.push((0, e._)`${m} !== ${h}`);
        return (0, e.and)(...u);
      }
    }
  };
  return Xt.default = c, Xt;
}
var Zt = {}, mo;
function ys() {
  if (mo) return Zt;
  mo = 1, Object.defineProperty(Zt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ J(), t = /* @__PURE__ */ Z(), o = {
    keyword: "unevaluatedItems",
    type: "array",
    schemaType: ["boolean", "object"],
    error: {
      message: ({ params: { len: c } }) => (0, e.str)`must NOT have more than ${c} items`,
      params: ({ params: { len: c } }) => (0, e._)`{limit: ${c}}`
    },
    code(c) {
      const { gen: n, schema: i, data: a, it: d } = c, y = d.items || 0;
      if (y === !0)
        return;
      const g = n.const("len", (0, e._)`${a}.length`);
      if (i === !1)
        c.setParams({ len: y }), c.fail((0, e._)`${g} > ${y}`);
      else if (typeof i == "object" && !(0, t.alwaysValidSchema)(d, i)) {
        const $ = n.var("valid", (0, e._)`${g} <= ${y}`);
        n.if((0, e.not)($), () => _($, y)), c.ok($);
      }
      d.items = !0;
      function _($, b) {
        n.forRange("i", b, g, (k) => {
          c.subschema({ keyword: "unevaluatedItems", dataProp: k, dataPropType: t.Type.Num }, $), d.allErrors || n.if((0, e.not)($), () => n.break());
        });
      }
    }
  };
  return Zt.default = o, Zt;
}
var go;
function vs() {
  if (go) return Yt;
  go = 1, Object.defineProperty(Yt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ gs(), t = /* @__PURE__ */ ys(), r = [e.default, t.default];
  return Yt.default = r, Yt;
}
var Qt = {}, er = {}, yo;
function $s() {
  if (yo) return er;
  yo = 1, Object.defineProperty(er, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ J(), r = {
    keyword: "format",
    type: ["number", "string"],
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: o }) => (0, e.str)`must match format "${o}"`,
      params: ({ schemaCode: o }) => (0, e._)`{format: ${o}}`
    },
    code(o, c) {
      const { gen: n, data: i, $data: a, schema: d, schemaCode: y, it: g } = o, { opts: _, errSchemaPath: $, schemaEnv: b, self: k } = g;
      if (!_.validateFormats)
        return;
      a ? S() : f();
      function S() {
        const m = n.scopeValue("formats", {
          ref: k.formats,
          code: _.code.formats
        }), u = n.const("fDef", (0, e._)`${m}[${y}]`), h = n.let("fType"), w = n.let("format");
        n.if((0, e._)`typeof ${u} == "object" && !(${u} instanceof RegExp)`, () => n.assign(h, (0, e._)`${u}.type || "string"`).assign(w, (0, e._)`${u}.validate`), () => n.assign(h, (0, e._)`"string"`).assign(w, u)), o.fail$data((0, e.or)(s(), l()));
        function s() {
          return _.strictSchema === !1 ? e.nil : (0, e._)`${y} && !${w}`;
        }
        function l() {
          const p = b.$async ? (0, e._)`(${u}.async ? await ${w}(${i}) : ${w}(${i}))` : (0, e._)`${w}(${i})`, E = (0, e._)`(typeof ${w} == "function" ? ${p} : ${w}.test(${i}))`;
          return (0, e._)`${w} && ${w} !== true && ${h} === ${c} && !${E}`;
        }
      }
      function f() {
        const m = k.formats[d];
        if (!m) {
          s();
          return;
        }
        if (m === !0)
          return;
        const [u, h, w] = l(m);
        u === c && o.pass(p());
        function s() {
          if (_.strictSchema === !1) {
            k.logger.warn(E());
            return;
          }
          throw new Error(E());
          function E() {
            return `unknown format "${d}" ignored in schema at path "${$}"`;
          }
        }
        function l(E) {
          const P = E instanceof RegExp ? (0, e.regexpCode)(E) : _.code.formats ? (0, e._)`${_.code.formats}${(0, e.getProperty)(d)}` : void 0, A = n.scopeValue("formats", { key: d, ref: E, code: P });
          return typeof E == "object" && !(E instanceof RegExp) ? [E.type || "string", E.validate, (0, e._)`${A}.validate`] : ["string", E, A];
        }
        function p() {
          if (typeof m == "object" && !(m instanceof RegExp) && m.async) {
            if (!b.$async)
              throw new Error("async format in sync schema");
            return (0, e._)`await ${w}(${i})`;
          }
          return typeof h == "function" ? (0, e._)`${w}(${i})` : (0, e._)`${w}.test(${i})`;
        }
      }
    }
  };
  return er.default = r, er;
}
var vo;
function bs() {
  if (vo) return Qt;
  vo = 1, Object.defineProperty(Qt, "__esModule", { value: !0 });
  const t = [(/* @__PURE__ */ $s()).default];
  return Qt.default = t, Qt;
}
var Te = {}, $o;
function _s() {
  return $o || ($o = 1, Object.defineProperty(Te, "__esModule", { value: !0 }), Te.contentVocabulary = Te.metadataVocabulary = void 0, Te.metadataVocabulary = [
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
var bo;
function ws() {
  if (bo) return pt;
  bo = 1, Object.defineProperty(pt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ zi(), t = /* @__PURE__ */ Wi(), r = /* @__PURE__ */ cs(), o = /* @__PURE__ */ us(), c = /* @__PURE__ */ ms(), n = /* @__PURE__ */ vs(), i = /* @__PURE__ */ bs(), a = /* @__PURE__ */ _s(), d = [
    o.default,
    e.default,
    t.default,
    (0, r.default)(!0),
    i.default,
    a.metadataVocabulary,
    a.contentVocabulary,
    c.default,
    n.default
  ];
  return pt.default = d, pt;
}
var tr = {}, nt = {}, _o;
function Ss() {
  if (_o) return nt;
  _o = 1, Object.defineProperty(nt, "__esModule", { value: !0 }), nt.DiscrError = void 0;
  var e;
  return (function(t) {
    t.Tag = "tag", t.Mapping = "mapping";
  })(e || (nt.DiscrError = e = {})), nt;
}
var wo;
function ks() {
  if (wo) return tr;
  wo = 1, Object.defineProperty(tr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ J(), t = /* @__PURE__ */ Ss(), r = /* @__PURE__ */ hr(), o = /* @__PURE__ */ pr(), c = /* @__PURE__ */ Z(), i = {
    keyword: "discriminator",
    type: "object",
    schemaType: "object",
    error: {
      message: ({ params: { discrError: a, tagName: d } }) => a === t.DiscrError.Tag ? `tag "${d}" must be string` : `value of tag "${d}" must be in oneOf`,
      params: ({ params: { discrError: a, tag: d, tagName: y } }) => (0, e._)`{error: ${a}, tag: ${y}, tagValue: ${d}}`
    },
    code(a) {
      const { gen: d, data: y, schema: g, parentSchema: _, it: $ } = a, { oneOf: b } = _;
      if (!$.opts.discriminator)
        throw new Error("discriminator: requires discriminator option");
      const k = g.propertyName;
      if (typeof k != "string")
        throw new Error("discriminator: requires propertyName");
      if (g.mapping)
        throw new Error("discriminator: mapping is not supported");
      if (!b)
        throw new Error("discriminator: requires oneOf keyword");
      const S = d.let("valid", !1), f = d.const("tag", (0, e._)`${y}${(0, e.getProperty)(k)}`);
      d.if((0, e._)`typeof ${f} == "string"`, () => m(), () => a.error(!1, { discrError: t.DiscrError.Tag, tag: f, tagName: k })), a.ok(S);
      function m() {
        const w = h();
        d.if(!1);
        for (const s in w)
          d.elseIf((0, e._)`${f} === ${s}`), d.assign(S, u(w[s]));
        d.else(), a.error(!1, { discrError: t.DiscrError.Mapping, tag: f, tagName: k }), d.endIf();
      }
      function u(w) {
        const s = d.name("valid"), l = a.subschema({ keyword: "oneOf", schemaProp: w }, s);
        return a.mergeEvaluated(l, e.Name), s;
      }
      function h() {
        var w;
        const s = {}, l = E(_);
        let p = !0;
        for (let N = 0; N < b.length; N++) {
          let j = b[N];
          if (j?.$ref && !(0, c.schemaHasRulesButRef)(j, $.self.RULES)) {
            const U = j.$ref;
            if (j = r.resolveRef.call($.self, $.schemaEnv.root, $.baseId, U), j instanceof r.SchemaEnv && (j = j.schema), j === void 0)
              throw new o.default($.opts.uriResolver, $.baseId, U);
          }
          const D = (w = j?.properties) === null || w === void 0 ? void 0 : w[k];
          if (typeof D != "object")
            throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${k}"`);
          p = p && (l || E(j)), P(D, N);
        }
        if (!p)
          throw new Error(`discriminator: "${k}" must be required`);
        return s;
        function E({ required: N }) {
          return Array.isArray(N) && N.includes(k);
        }
        function P(N, j) {
          if (N.const)
            A(N.const, j);
          else if (N.enum)
            for (const D of N.enum)
              A(D, j);
          else
            throw new Error(`discriminator: "properties/${k}" must have "const" or "enum"`);
        }
        function A(N, j) {
          if (typeof N != "string" || N in s)
            throw new Error(`discriminator: "${k}" values must be unique strings`);
          s[N] = j;
        }
      }
    }
  };
  return tr.default = i, tr;
}
var rr = {};
const Es = "https://json-schema.org/draft/2020-12/schema", Cs = "https://json-schema.org/draft/2020-12/schema", Ps = { "https://json-schema.org/draft/2020-12/vocab/core": !0, "https://json-schema.org/draft/2020-12/vocab/applicator": !0, "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0, "https://json-schema.org/draft/2020-12/vocab/validation": !0, "https://json-schema.org/draft/2020-12/vocab/meta-data": !0, "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0, "https://json-schema.org/draft/2020-12/vocab/content": !0 }, xs = "meta", Rs = "Core and Validation specifications meta-schema", As = [{ $ref: "meta/core" }, { $ref: "meta/applicator" }, { $ref: "meta/unevaluated" }, { $ref: "meta/validation" }, { $ref: "meta/meta-data" }, { $ref: "meta/format-annotation" }, { $ref: "meta/content" }], Ns = ["object", "boolean"], js = "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.", Ms = { definitions: { $comment: '"definitions" has been replaced by "$defs".', type: "object", additionalProperties: { $dynamicRef: "#meta" }, deprecated: !0, default: {} }, dependencies: { $comment: '"dependencies" has been split and replaced by "dependentSchemas" and "dependentRequired" in order to serve their differing semantics.', type: "object", additionalProperties: { anyOf: [{ $dynamicRef: "#meta" }, { $ref: "meta/validation#/$defs/stringArray" }] }, deprecated: !0, default: {} }, $recursiveAnchor: { $comment: '"$recursiveAnchor" has been replaced by "$dynamicAnchor".', $ref: "meta/core#/$defs/anchorString", deprecated: !0 }, $recursiveRef: { $comment: '"$recursiveRef" has been replaced by "$dynamicRef".', $ref: "meta/core#/$defs/uriReferenceString", deprecated: !0 } }, Os = {
  $schema: Es,
  $id: Cs,
  $vocabulary: Ps,
  $dynamicAnchor: xs,
  title: Rs,
  allOf: As,
  type: Ns,
  $comment: js,
  properties: Ms
}, Ts = "https://json-schema.org/draft/2020-12/schema", Is = "https://json-schema.org/draft/2020-12/meta/applicator", zs = { "https://json-schema.org/draft/2020-12/vocab/applicator": !0 }, qs = "meta", Ds = "Applicator vocabulary meta-schema", Vs = ["object", "boolean"], Bs = { prefixItems: { $ref: "#/$defs/schemaArray" }, items: { $dynamicRef: "#meta" }, contains: { $dynamicRef: "#meta" }, additionalProperties: { $dynamicRef: "#meta" }, properties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, propertyNames: { format: "regex" }, default: {} }, dependentSchemas: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, propertyNames: { $dynamicRef: "#meta" }, if: { $dynamicRef: "#meta" }, then: { $dynamicRef: "#meta" }, else: { $dynamicRef: "#meta" }, allOf: { $ref: "#/$defs/schemaArray" }, anyOf: { $ref: "#/$defs/schemaArray" }, oneOf: { $ref: "#/$defs/schemaArray" }, not: { $dynamicRef: "#meta" } }, Fs = { schemaArray: { type: "array", minItems: 1, items: { $dynamicRef: "#meta" } } }, Ls = {
  $schema: Ts,
  $id: Is,
  $vocabulary: zs,
  $dynamicAnchor: qs,
  title: Ds,
  type: Vs,
  properties: Bs,
  $defs: Fs
}, Us = "https://json-schema.org/draft/2020-12/schema", Ks = "https://json-schema.org/draft/2020-12/meta/unevaluated", Hs = { "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0 }, Gs = "meta", Js = "Unevaluated applicator vocabulary meta-schema", Ws = ["object", "boolean"], Ys = { unevaluatedItems: { $dynamicRef: "#meta" }, unevaluatedProperties: { $dynamicRef: "#meta" } }, Xs = {
  $schema: Us,
  $id: Ks,
  $vocabulary: Hs,
  $dynamicAnchor: Gs,
  title: Js,
  type: Ws,
  properties: Ys
}, Zs = "https://json-schema.org/draft/2020-12/schema", Qs = "https://json-schema.org/draft/2020-12/meta/content", ea = { "https://json-schema.org/draft/2020-12/vocab/content": !0 }, ta = "meta", ra = "Content vocabulary meta-schema", na = ["object", "boolean"], oa = { contentEncoding: { type: "string" }, contentMediaType: { type: "string" }, contentSchema: { $dynamicRef: "#meta" } }, ia = {
  $schema: Zs,
  $id: Qs,
  $vocabulary: ea,
  $dynamicAnchor: ta,
  title: ra,
  type: na,
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
}, Sa = "https://json-schema.org/draft/2020-12/schema", ka = "https://json-schema.org/draft/2020-12/meta/meta-data", Ea = { "https://json-schema.org/draft/2020-12/vocab/meta-data": !0 }, Ca = "meta", Pa = "Meta-data vocabulary meta-schema", xa = ["object", "boolean"], Ra = { title: { type: "string" }, description: { type: "string" }, default: !0, deprecated: { type: "boolean", default: !1 }, readOnly: { type: "boolean", default: !1 }, writeOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 } }, Aa = {
  $schema: Sa,
  $id: ka,
  $vocabulary: Ea,
  $dynamicAnchor: Ca,
  title: Pa,
  type: xa,
  properties: Ra
}, Na = "https://json-schema.org/draft/2020-12/schema", ja = "https://json-schema.org/draft/2020-12/meta/validation", Ma = { "https://json-schema.org/draft/2020-12/vocab/validation": !0 }, Oa = "meta", Ta = "Validation vocabulary meta-schema", Ia = ["object", "boolean"], za = { type: { anyOf: [{ $ref: "#/$defs/simpleTypes" }, { type: "array", items: { $ref: "#/$defs/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, const: !0, enum: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/$defs/nonNegativeInteger" }, minLength: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, maxItems: { $ref: "#/$defs/nonNegativeInteger" }, minItems: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, maxContains: { $ref: "#/$defs/nonNegativeInteger" }, minContains: { $ref: "#/$defs/nonNegativeInteger", default: 1 }, maxProperties: { $ref: "#/$defs/nonNegativeInteger" }, minProperties: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, required: { $ref: "#/$defs/stringArray" }, dependentRequired: { type: "object", additionalProperties: { $ref: "#/$defs/stringArray" } } }, qa = { nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { $ref: "#/$defs/nonNegativeInteger", default: 0 }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, Da = {
  $schema: Na,
  $id: ja,
  $vocabulary: Ma,
  $dynamicAnchor: Oa,
  title: Ta,
  type: Ia,
  properties: za,
  $defs: qa
};
var So;
function Va() {
  if (So) return rr;
  So = 1, Object.defineProperty(rr, "__esModule", { value: !0 });
  const e = Os, t = Ls, r = Xs, o = ia, c = ha, n = wa, i = Aa, a = Da, d = ["/properties"];
  function y(g) {
    return [
      e,
      t,
      r,
      o,
      c,
      _(this, n),
      i,
      _(this, a)
    ].forEach(($) => this.addMetaSchema($, void 0, !1)), this;
    function _($, b) {
      return g ? $.$dataMetaSchema(b, d) : b;
    }
  }
  return rr.default = y, rr;
}
var ko;
function Ba() {
  return ko || (ko = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv2020 = void 0;
    const r = /* @__PURE__ */ Ti(), o = /* @__PURE__ */ ws(), c = /* @__PURE__ */ ks(), n = /* @__PURE__ */ Va(), i = "https://json-schema.org/draft/2020-12/schema";
    class a extends r.default {
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
        const { $data: b, meta: k } = this.opts;
        k && (n.default.call(this, b), this.refs["http://json-schema.org/schema"] = i);
      }
      defaultMeta() {
        return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(i) ? i : void 0);
      }
    }
    t.Ajv2020 = a, e.exports = t = a, e.exports.Ajv2020 = a, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = a;
    var d = /* @__PURE__ */ fr();
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
    var g = /* @__PURE__ */ Tr();
    Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
      return g.default;
    } });
    var _ = /* @__PURE__ */ pr();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return _.default;
    } });
  })(ct, ct.exports)), ct.exports;
}
var Fa = /* @__PURE__ */ Ba();
const La = /* @__PURE__ */ $i(Fa), Ua = "https://json-schema.org/draft/2020-12/schema", Ka = "https://raw.githubusercontent.com/omsf-eco-infra/gufe-viz/main/schema/gufe-viz.schema.json", Ha = "gufe-viz payload", Ga = "Python-to-TypeScript contract bridge for gufe visualizations. Source of truth both languages are downstream of it. This schema is not strictly versioned or published as it is only internally consumed by this codebase. Schema description: one schema object per gufe class: every $def named *Viz is the visualization form of exactly one GufeTokenizable, it carries that object's `gufe-key`. Every reference from one gufe object to another is that object's gufe key, and the objects themselves live in the `registry` on the root payload. So a ligand network's nodes are keys, a chemical system's components and a transformation's protocol are keys and each one resolves to a complete, drawable object. An alchemical network whose forty systems share one protein carries that PDB once and points at it forty times, and the browser can still drill into it, because what it points at is a whole ProteinComponentViz. This is a single-shot dump rather than a conversation with a server, so the registry travels with the payload.", Ja = [{ $ref: "#/$defs/SmallMoleculeComponentViz" }, { $ref: "#/$defs/ProteinComponentViz" }, { $ref: "#/$defs/SolvatedPDBComponentViz" }, { $ref: "#/$defs/ProteinMembraneComponentViz" }, { $ref: "#/$defs/SolventComponentViz" }, { $ref: "#/$defs/UnknownComponentViz" }, { $ref: "#/$defs/ProtocolViz" }, { $ref: "#/$defs/LigandAtomMappingViz" }, { $ref: "#/$defs/LigandNetworkViz" }, { $ref: "#/$defs/ChemicalSystemViz" }, { $ref: "#/$defs/TransformationViz" }, { $ref: "#/$defs/AlchemicalNetworkViz" }], Wa = /* @__PURE__ */ JSON.parse('{"GufeKey":{"title":"GufeKey","description":"A gufe key: the identity of a GufeTokenizable, of the form \'ClassName-<hex digest>\'. It is deterministic and repeatable within a software environment. Only its non-emptiness is checked","type":"string","minLength":1},"ComponentKey":{"title":"ComponentKey","description":"A gufe key naming a ComponentViz in the registry. Identical to GufeKey at validation time: JSON Schema has no way to say \'this string is the gufe-key of an entry in that array, and that entry has this type\', because that is a join across two parts of the document. What the name buys is that the referent\'s type is stated in the contract and carried into the generated TypeScript, instead of living only in a test and a view.","$ref":"#/$defs/GufeKey"},"SmallMoleculeComponentKey":{"title":"SmallMoleculeComponentKey","description":"A gufe key naming a SmallMoleculeComponentViz in the registry. Resolving it yields the whole molecule, SDF included. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ChemicalSystemKey":{"title":"ChemicalSystemKey","description":"A gufe key naming a ChemicalSystemViz in the registry. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ProtocolKey":{"title":"ProtocolKey","description":"A gufe key naming a ProtocolViz in the registry. Every transformation of a network usually names the same one. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"Registry":{"title":"Registry","description":"The pool of gufe objects this payload refers to by key, each a complete payload object in its own right. Entries are unique by `gufe-key` and sorted by (type, gufe-key) so a committed fixture is byte-stable. JSON Schema cannot express \'unique by a property\' or \'every reference resolves\', so both are covered by tests on the Python side and degraded over by the views.","type":"array","items":{"oneOf":[{"$ref":"#/$defs/ComponentViz"},{"$ref":"#/$defs/ProtocolViz"},{"$ref":"#/$defs/ChemicalSystemViz"}]}},"ComponentViz":{"title":"ComponentViz","description":"Any single chemical-system component","oneOf":[{"$ref":"#/$defs/SmallMoleculeComponentViz"},{"$ref":"#/$defs/ProteinComponentViz"},{"$ref":"#/$defs/SolvatedPDBComponentViz"},{"$ref":"#/$defs/ProteinMembraneComponentViz"},{"$ref":"#/$defs/SolventComponentViz"},{"$ref":"#/$defs/UnknownComponentViz"}]},"SmallMoleculeComponentViz":{"title":"SmallMoleculeComponentViz","description":"A small molecule, carried as a complete SDF record.","type":"object","properties":{"type":{"const":"SmallMoleculeComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"sdf":{"type":"string","minLength":1,"description":"Complete inline SDF record, including the conformer."},"smiles":{"type":"string"},"total_charge":{"type":"integer","description":"Net formal charge. Displayed, never recomputed from the SDF."}},"required":["type","gufe-key","name","sdf","smiles","total_charge"],"additionalProperties":false},"ProteinComponentViz":{"title":"ProteinComponentViz","description":"A protein, carried as a complete PDB record.","type":"object","properties":{"type":{"const":"ProteinComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolvatedPDBComponentViz":{"title":"SolvatedPDBComponentViz","description":"A protein with explicit solvent. A distinct type rather than a flag on ProteinComponentViz, because the discriminator is what a view dispatches on and the presence of waters changes what a sensible default representation is.","type":"object","properties":{"type":{"const":"SolvatedPDBComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation, including explicit solvent."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"ProteinMembraneComponentViz":{"title":"ProteinMembraneComponentViz","description":"A protein embedded in a membrane.","type":"object","properties":{"type":{"const":"ProteinMembraneComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation of the protein and membrane system."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolventComponentViz":{"title":"SolventComponentViz","description":"Bulk solvent settings. There is no structure to draw, so these are flat fields suitable for rendering as a settings card.","type":"object","properties":{"type":{"const":"SolventComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"smiles":{"type":"string","minLength":1},"positive_ion":{"type":"string"},"negative_ion":{"type":"string"},"neutralize":{"type":"boolean"},"ion_concentration":{"type":"string","description":"Display-form concentration with units, for example \'0.15 molar\'. A string rather than a number because the unit is part of the value and the view only ever prints it."}},"required":["type","gufe-key","name","smiles","positive_ion","negative_ion","neutralize","ion_concentration"],"additionalProperties":false},"UnknownComponentViz":{"title":"UnknownComponentViz","description":"The graceful fallback for a component type this build does not recognize. gufe supports custom Component subclasses, so meeting one is an expected outcome rather than an error, and the browser answers it with \'sorry, there is no visualization for this\'. This covers an unrecognized type only: a recognized component whose serializer fails is a bug, and raises in Python rather than arriving here wearing a disguise.","type":"object","properties":{"type":{"const":"UnknownComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The gufe class name, so the panel can say which type it could not draw."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ProtocolViz":{"title":"ProtocolViz","description":"A gufe Protocol, named. Every transformation in an alchemical network usually shares one, so this is a registry entry that many edges point at rather than a class name repeated per edge. Settings are deliberately absent for now: they are large, deeply nested, and nothing draws them yet, adding a `settings` field later is additive and breaks nothing.","type":"object","properties":{"type":{"const":"ProtocolViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The Protocol\'s class name, which is what identifies it to a reader, a Protocol has no name of its own, so `name` is usually empty."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ChemicalSystemViz":{"title":"ChemicalSystemViz","description":"A gufe ChemicalSystem: labels mapped to the gufe keys of its components.","type":"object","properties":{"type":{"const":"ChemicalSystemViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"components":{"type":"object","description":"ChemicalSystem labels mapped to the gufe keys of the components in the registry.","additionalProperties":{"$ref":"#/$defs/ComponentKey"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","components"],"additionalProperties":false},"AtomMapping":{"title":"AtomMapping","description":"Atom index correspondence from molecule A to molecule B, as a list of index pairs. A list rather than an object keyed by A\'s index, because JSON object keys can only be strings: keying by index would put decimal strings such as \'12\' in the payload and leave both languages casting them back to integers, and it is Python\'s dict-of-int shape only by resemblance. As a list, both indices stay integers, and \'an entry has a B index for every A index\' becomes a `required` the schema states rather than a convention a reader has to trust. Pairs are ordered by `index_A` so a committed fixture is byte-stable.","type":"array","items":{"type":"object","properties":{"index_A":{"type":"integer","minimum":0,"description":"An atom index in molecule A."},"index_B":{"type":"integer","minimum":0,"description":"The atom index in molecule B that it maps to."}},"required":["index_A","index_B"],"additionalProperties":false}},"Annotations":{"title":"Annotations","description":"Free-form mapping metadata. gufe puts nothing here by design and every mapper picks its own keys, so this is deliberately open. Values are whatever survived being made JSON-safe. Displayed but never interpreted, with the single exception of \'score\'.","type":"object"},"LigandAtomMappingViz":{"title":"LigandAtomMappingViz","description":"One atom mapping between two small molecules. This is also what an edge of a ligand network is because the two endpoints are gufe keys either way: standalone they resolve in this object\'s own registry, and in a network they resolve in the network\'s, where they are the same entries the nodes name. `componentA` and `componentB` are the molecules the two sides of `componentA_to_componentB` index into: an `index_A` is an atom of the SmallMoleculeComponentViz that `componentA` names, and an `index_B` an atom of `componentB`\'s.","type":"object","properties":{"type":{"const":"LigandAtomMappingViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"componentA":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentB":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentA_to_componentB":{"$ref":"#/$defs/AtomMapping"},"score":{"type":["number","null"],"description":"The \'score\' annotation when it is a plain number, otherwise null. This is the one annotation key that is interpreted rather than displayed: it drives the edge colouring and the force layout\'s link distance."},"annotations":{"$ref":"#/$defs/Annotations"},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","componentA","componentB","componentA_to_componentB","score","annotations"],"additionalProperties":false},"LigandNetworkViz":{"title":"LigandNetworkViz","description":"A ligand network: the ligands in the registry, the nodes as keys into it, and the mappings as edges. Deliberately not gufe\'s GraphML: that format embeds a gufe to_json moldict per node, so forwarding it would relocate the decoding problem into the browser rather than avoid it.","type":"object","properties":{"type":{"const":"LigandNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ligand, resolved in `registry`.","items":{"$ref":"#/$defs/SmallMoleculeComponentKey"}},"edges":{"type":"array","description":"The mappings, whose `componentA` and `componentB` name nodes of this network. JSON Schema cannot express that referential constraint, so a Python test covers it, and the view drops a dangling edge with a banner rather than failing.","items":{"$ref":"#/$defs/LigandAtomMappingViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false},"TransformationViz":{"title":"TransformationViz","description":"A transformation between two chemical systems, both named by gufe key, as is its protocol: `stateA` is the system it starts from, `stateB` the one it ends at, and every edge of a network usually names the same protocol. This is also what an edge of an alchemical network is (there is no separate edge type) because `stateA` and `stateB` are keys either way, and in a network they are the keys the nodes name. NonTransformation uses this type too: it exposes the same stateA and stateB properties, both its single system, so it renders as a diff with no differences.","type":"object","properties":{"type":{"const":"TransformationViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"protocol":{"$ref":"#/$defs/ProtocolKey"},"stateA":{"$ref":"#/$defs/ChemicalSystemKey"},"stateB":{"$ref":"#/$defs/ChemicalSystemKey"},"mappings":{"type":"array","items":{"$ref":"#/$defs/LigandAtomMappingViz"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","protocol","stateA","stateB","mappings"],"additionalProperties":false},"AlchemicalNetworkViz":{"title":"AlchemicalNetworkViz","description":"A graph of chemical systems joined by transformations. What repeats here is not the nodes and edges themselves but what they are made of: in practice every system shares one protein and every transformation shares one protocol. Both live in the registry, once, as whole objects so this view can show composition and topology while still letting a reader open a node and see the protein.","type":"object","properties":{"type":{"const":"AlchemicalNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ChemicalSystem, resolved in `registry`.","items":{"$ref":"#/$defs/ChemicalSystemKey"}},"edges":{"type":"array","description":"The transformations, whose `stateA` and `stateB` name nodes of this network.","items":{"$ref":"#/$defs/TransformationViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false}}'), Dr = {
  $schema: Ua,
  $id: Ka,
  title: Ha,
  description: Ga,
  oneOf: Ja,
  $defs: Wa
}, sl = [
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
], Vr = Dr.$id, Br = new La({ allErrors: !0, strict: !1 });
Br.addSchema(Dr, Vr);
const Eo = Br.getSchema(Vr), Ho = Object.entries(Dr.$defs).filter(
  ([e, t]) => t.properties?.type?.const === e
).map(([e]) => e).sort(), al = Ho, Fr = /* @__PURE__ */ new Map();
for (const e of Ho) {
  const t = Br.getSchema(`${Vr}#/$defs/${e}`);
  t && Fr.set(e, t);
}
const Nr = { valid: !0, issues: [] };
function jr(e) {
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
  const t = e.type, r = typeof t == "string" ? Fr.get(t) : void 0;
  return r ? r(e) ? Nr : { valid: !1, issues: jr(r.errors) } : Eo(e) ? Nr : { valid: !1, issues: jr(Eo.errors) };
}
function cl(e, t) {
  const r = Fr.get(e);
  return r ? r(t) ? Nr : { valid: !1, issues: jr(r.errors) } : {
    valid: !1,
    issues: [
      { path: "", message: `unknown payload type ${JSON.stringify(e)}` }
    ]
  };
}
function Xa(e, t = 8) {
  const r = e.slice(0, t).map((o) => `${o.path || "(root)"}: ${o.message}`);
  return e.length > t && r.push(`... and ${e.length - t} more`), r.join(`
`);
}
const Lr = {
  AlchemicalNetworkViz: "gufe-alchemical-network",
  SmallMoleculeComponentViz: "gufe-small-molecule",
  ProteinComponentViz: "gufe-protein",
  LigandNetworkViz: "gufe-ligand-network",
  ChemicalSystemViz: "gufe-chemical-system",
  LigandAtomMappingViz: "gufe-atom-mapping",
  TransformationViz: "gufe-transformation",
  SolventComponentViz: "gufe-solvent",
  UnknownComponentViz: "gufe-unknown-component"
};
function Go(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return {
      message: "This does not look like a gufe-viz payload (expected a JSON object)."
    };
  const { type: t } = e;
  if (typeof t != "string" || !t)
    return {
      message: "This payload has no `type`, so there is nothing to say what it is."
    };
  if (!Lr[t]) return Za(t);
  const { valid: r, issues: o } = Ya(e);
  return r ? null : {
    message: `This payload says it is a ${t}, but it does not match the gufe-viz schema.`,
    detail: Xa(o)
  };
}
function Za(e) {
  const t = Object.keys(Lr).sort().join(", ");
  return {
    message: `Sorry, there is no visualization for ${e} yet. This build can draw: ${t}.`
  };
}
function ll(e) {
  return Go(e)?.message ?? null;
}
class Qa extends Ee {
  placeholder() {
    return "Waiting for data...";
  }
  renderView(t, r) {
    yi("payload", r, this);
    const o = Go(r);
    if (o)
      return t.appendChild(ec(o, r)), {};
    const c = r.type, n = Lr[c], i = document.createElement(n);
    return i.style.cssText = "flex:1;min-height:0;min-width:0;", i.payload = r, t.appendChild(i), {
      onResize: () => i.resize?.(),
      // Removing the child fires its own `disconnectedCallback`, which is where
      // its viewers and observers are released
      cleanup: () => i.remove()
    };
  }
}
function ec(e, t) {
  const r = I(
    "div",
    "flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:32px;"
  );
  r.appendChild(ie(e.message));
  const o = (n, i) => I(
    "div",
    "max-width:640px;padding:8px 12px;border-radius:6px;font-size:11px;white-space:pre-wrap;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;overflow-wrap:anywhere;" + (i ? `background:${R.warnBg};color:${R.warnFg};border:1px solid ${R.warnBorder};` : `background:${R.panelBg};color:${R.textMuted2};border:1px solid ${R.cardBorder};`),
    n
  );
  e.detail && r.appendChild(o(e.detail, !0));
  const c = tc(t);
  return c && r.appendChild(o(c, !1)), r;
}
function tc(e) {
  if (e == null || typeof e != "object") return null;
  const t = e, r = [];
  typeof t.type == "string" && r.push(`type: ${ir(t.type)}`), typeof t.name == "string" && t.name && r.push(`name: ${ir(t.name)}`);
  const o = Object.keys(e);
  return o.length && r.push(
    `keys: ${o.slice(0, 12).join(", ")}${o.length > 12 ? ", ..." : ""}`
  ), r.length ? r.join(`
`) : null;
}
Ce("gufe-view", Qa);
const Ur = {
  threeDmol: "https://3dmol.org/build/3Dmol-min.js",
  rdkit: "https://unpkg.com/@rdkit/rdkit/dist/RDKit_minimal.js",
  d3: "https://cdn.jsdelivr.net/npm/d3@7/+esm"
};
function Kr(e) {
  const t = globalThis.__gufeEngines?.[e];
  return t ? Promise.resolve(t) : null;
}
function Jo(e, t) {
  return new Promise((r, o) => {
    const c = document.createElement("script");
    c.src = e, c.onload = () => r(), c.onerror = () => o(new Error(`Failed to load ${t}`)), document.head.appendChild(c);
  });
}
let Ye = null, He = null;
function Wo() {
  if (He) return He;
  const e = Kr("threeDmol");
  return e ? (He = e.then((t) => Ye = t || window.$3Dmol), He) : (He = (async () => {
    if (window.$3Dmol) return Ye = window.$3Dmol;
    if (await Jo(Ur.threeDmol, "3Dmol.js"), !window.$3Dmol) throw new Error("3Dmol.js loaded but $3Dmol is undefined");
    return Ye = window.$3Dmol;
  })(), He);
}
let Ge = null;
function Hr() {
  if (Ge) return Ge;
  const e = Kr("rdkit");
  return e ? (Ge = e.then((t) => window.RDKit = t), Ge) : (Ge = (async () => {
    if (window.RDKit) return window.RDKit;
    if (await Jo(Ur.rdkit, "RDKit"), !window.initRDKitModule) throw new Error("RDKit loaded but initRDKitModule is undefined");
    return window.RDKit = await window.initRDKitModule();
  })(), Ge);
}
let xr = null;
function Yo() {
  if (!xr) {
    const e = Ur.d3;
    xr = Kr("d3") ?? import(
      /* @vite-ignore */
      e
    );
  }
  return xr;
}
function Xo(e, t) {
  let r = !1, o = !1;
  const c = () => {
    r = !0;
  }, n = () => {
    r = !1;
  }, i = (a) => {
    if (a.stopPropagation(), r || a.ctrlKey || a.metaKey) {
      a.preventDefault(), t.onZoom(a);
      return;
    }
    t.hint && !o && (o = !0, nc(e, t.hint));
  };
  return e.addEventListener("wheel", i, { passive: !1, capture: !0 }), e.addEventListener("pointerdown", c), e.addEventListener("pointerenter", c), e.addEventListener("pointerleave", n), {
    cleanup() {
      e.removeEventListener("wheel", i, { capture: !0 }), e.removeEventListener("pointerdown", c), e.removeEventListener("pointerenter", c), e.removeEventListener("pointerleave", n);
    }
  };
}
const rc = 1600;
function nc(e, t) {
  const r = I(
    "div",
    "position:absolute;bottom:12px;left:50%;transform:translateX(-50%);z-index:30;pointer-events:none;padding:5px 12px;border-radius:6px;font-size:11px;white-space:nowrap;background:rgba(0,0,0,0.72);color:#ffffff;transition:opacity .3s ease;",
    t
  );
  e.appendChild(r), setTimeout(() => {
    r.style.opacity = "0", setTimeout(() => r.remove(), 300);
  }, rc);
}
const oc = { min: 0.25, max: 12 };
function ic(e, t = oc) {
  let r = 1;
  return {
    zoomBy(o) {
      const c = Math.min(t.max, Math.max(t.min, r * o));
      if (c === r) return;
      const n = c / r;
      r = c, e.zoom(n), e.render();
    },
    reset() {
      r = 1, e.zoomTo(), e.render();
    },
    level: () => r
  };
}
const sc = 2e-3;
function ac(e) {
  return Math.exp(-e.deltaY * sc);
}
function Zo(e, t, r = {}) {
  const o = ic(t, r.bounds), c = Xo(e, {
    hint: r.hint ?? "Click or hold Ctrl to zoom",
    onZoom: (n) => o.zoomBy(ac(n))
  });
  return { ...o, cleanup: c.cleanup };
}
function Gr(e, t = "Reset view") {
  const r = I("button", st, "Reset");
  return r.title = t, r.setAttribute("aria-label", t), r.onclick = e, r;
}
const qe = {
  elementChange: "#005AB5",
  uniqueAtom: "#DC3220",
  elementChange3D: "0x005AB5",
  uniqueAtom3D: "0xDC3220"
}, dl = [
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
], ul = "hsv", q = [0, 0, 0], cc = {
  0: q,
  1: q,
  2: q,
  3: q,
  4: q,
  5: q,
  6: q,
  7: q,
  8: q,
  9: q,
  10: q,
  11: q,
  12: q,
  13: q,
  14: q,
  15: q,
  16: q,
  17: q,
  18: q,
  19: q,
  20: q,
  21: q,
  22: q,
  23: q,
  24: q,
  25: q,
  26: q,
  27: q,
  28: q,
  29: q,
  30: q,
  31: q,
  32: q,
  33: q,
  34: q,
  35: q,
  36: q,
  37: q,
  38: q,
  39: q,
  40: q,
  41: q,
  42: q,
  43: q,
  44: q,
  45: q,
  46: q,
  47: q,
  48: q,
  49: q,
  50: q,
  51: q,
  52: q,
  53: q,
  54: q,
  55: q,
  56: q,
  57: q,
  58: q,
  59: q,
  60: q,
  61: q,
  62: q,
  63: q,
  64: q,
  65: q,
  66: q,
  67: q,
  68: q,
  69: q,
  70: q,
  71: q,
  72: q,
  73: q,
  74: q,
  75: q,
  76: q,
  77: q,
  78: q,
  79: q,
  80: q,
  81: q,
  82: q,
  83: q,
  84: q,
  85: q,
  86: q,
  87: q,
  88: q,
  89: q,
  90: q,
  91: q,
  92: q,
  93: q,
  94: q,
  95: q,
  96: q,
  97: q,
  98: q,
  99: q,
  100: q,
  101: q,
  102: q,
  103: q,
  104: q,
  105: q,
  106: q,
  107: q,
  108: q,
  109: q,
  110: q,
  111: q,
  112: q,
  113: q,
  114: q,
  115: q,
  116: q,
  117: q,
  118: q
}, lc = {
  atomColourPalette: cc,
  addAtomIndices: !0,
  continuousHighlight: !1
}, Qo = `
`, Co = "$$$$";
function Po(e, t) {
  if (!e || !e.trim()) throw new Error("empty SDF");
  const r = e.replace(/\r/g, "").split(Qo);
  if (r.length < 4) throw new Error("SDF too short");
  const o = r[3];
  if (o.indexOf("V3000") !== -1) throw new Error("V3000 molfiles are not supported");
  const c = parseInt(o.substring(0, 3), 10), n = parseInt(o.substring(3, 6), 10);
  if (!isFinite(c) || c <= 0) throw new Error(`bad counts line: ${o}`);
  const i = [], a = [];
  for (let g = 0; g < c; g++) {
    const _ = r[4 + g];
    if (_ == null) throw new Error("truncated atom block");
    i.push([
      parseFloat(_.substring(0, 10)) || 0,
      parseFloat(_.substring(10, 20)) || 0,
      parseFloat(_.substring(20, 30)) || 0
    ]), a.push(_.substring(31, 34).trim() || "X");
  }
  const d = [];
  for (let g = 0; g < (isFinite(n) ? n : 0); g++) {
    const _ = r[4 + c + g];
    if (_ == null) break;
    const $ = parseInt(_.substring(0, 3), 10), b = parseInt(_.substring(3, 6), 10), k = parseInt(_.substring(6, 9), 10);
    !isFinite($) || !isFinite(b) || d.push([$ - 1, b - 1, isFinite(k) ? k : 1]);
  }
  return { name: (r[0] || "").trim() || t || "molecule", symbols: a, bonds: d, coords: i };
}
const dc = (e) => e.indexOf(Co) >= 0 ? e : `${e}${Qo}${Co}`;
function uc(e) {
  const t = String(e).split(/\r?\n/);
  if (t.length < 4) return null;
  const r = parseInt(t[3].slice(0, 3), 10), o = parseInt(t[3].slice(3, 6), 10);
  return isNaN(r) || isNaN(o) ? null : { atoms: r, bonds: o };
}
function ei(e, t, r) {
  let o = null;
  try {
    if (o = e.get_mol(t, JSON.stringify({ removeHs: !0 })), !o) return null;
    try {
      o.set_new_coords(!0);
    } catch {
    }
    return o.get_svg(r, r) || null;
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
function ti(e, t, r) {
  e.innerHTML = t;
  const o = e.querySelector("svg");
  o && (o.removeAttribute("width"), o.removeAttribute("height"), o.getAttribute("viewBox") || o.setAttribute("viewBox", `0 0 ${r} ${r}`), o.setAttribute("preserveAspectRatio", "xMidYMid meet"), o.setAttribute("style", "width:100%;height:100%;max-width:100%;max-height:100%;"));
}
function fc(e, t, r, o, c = {}) {
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
        ...lc,
        highlightAtomColors: c
      })
    ) || null : n.get_svg(r, r) || null : null;
  } catch (i) {
    return console.warn("[gufe-viz] depictHighlightedSVG threw -", he(i)), null;
  } finally {
    if (n)
      try {
        n.delete();
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
class hc extends Ee {
  placeholder() {
    return "Waiting for a SmallMoleculeComponent payload...";
  }
  renderView(t, r) {
    const o = r.sdf, c = r.name ?? "", n = r.smiles, i = r.total_charge;
    t.appendChild(je(c || "Unnamed molecule", "SmallMoleculeComponent"));
    const a = I("div", "flex:1;display:flex;flex-direction:row;overflow:hidden;min-height:0;");
    t.appendChild(a);
    const d = I("div", "flex:1 1 50%;min-width:0;display:flex;flex-direction:column;"), y = I("div", "flex:1 1 50%;min-width:0;display:flex;flex-direction:column;position:relative;");
    a.appendChild(d), a.appendChild(I("div", `width:1px;flex-shrink:0;background:${R.splitBorder};`)), a.appendChild(y);
    const g = (p) => I("div", `flex-shrink:0;padding:4px 10px;font-size:12px;font-weight:bold;color:${R.labelFg};background:${R.labelBg};`, p);
    d.appendChild(g("2D"));
    const _ = I(
      "div",
      `flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:8px;background:${R.canvas2DBg};`
    );
    d.appendChild(_), y.appendChild(g("3D"));
    const $ = Io();
    y.appendChild($.wrap);
    const b = I(
      "div",
      `flex-shrink:0;display:flex;flex-wrap:wrap;align-items:baseline;gap:6px 20px;padding:8px 16px;font-size:12px;background:${R.toolbarBg};border-top:1px solid ${R.toolbarBorder};color:${R.textPrimary};`
    );
    t.appendChild(b);
    const k = o ? uc(o) : null, S = [
      ["Name", c || We, !1],
      ["SMILES", n || We, !0],
      ["Charge", i == null ? We : String(i), !1],
      ["Atoms", k ? String(k.atoms) : We, !1],
      ["Bonds", k ? String(k.bonds) : We, !1]
    ];
    for (const [p, E, P] of S) {
      const A = I("div", "display:flex;align-items:baseline;gap:6px;min-width:0;");
      A.appendChild(
        I(
          "span",
          `font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;flex-shrink:0;color:${R.textMuted2};`,
          p
        )
      );
      const N = I(
        "span",
        `user-select:text;cursor:text;color:${R.textPrimary}` + (P ? ";font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:11px;overflow-wrap:anywhere;" : ""),
        E
      );
      N.title = E, A.appendChild(N), b.appendChild(A);
    }
    if (!o || !o.trim())
      return _.appendChild(ie("No molecule provided")), $.container.appendChild(ie("No molecule provided")), {};
    _.appendChild(ie("Loading 2D depiction...")), Hr().then((p) => {
      const E = ei(p, o, Ro);
      E ? ti(_, E, Ro) : _.replaceChildren(ie("Failed to parse molecule", !0));
    }).catch((p) => {
      _.replaceChildren(ie(`RDKit failed to load: ${he(p)}`, !0));
    });
    let f = null, m = null, u = "stick", h = !1;
    const w = I(
      "div",
      `position:absolute;bottom:10px;right:10px;display:flex;gap:4px;padding:4px;border-radius:6px;z-index:10;background:${R.switcherBg};box-shadow:0 2px 8px rgba(0,0,0,0.25);`
    );
    w.appendChild(
      cr(pc, u, (p) => {
        u = p, f && (f.setStyle({}, xo[p]), f.render());
      })
    );
    const s = I("button", `${st}margin-left:4px;`, "Spin");
    s.title = "Toggle continuous rotation", s.onclick = () => {
      h = !h, s.style.background = h ? R.btnBgActive : R.btnBg;
      try {
        f?.spin(h ? "y" : !1);
      } catch {
      }
    }, w.appendChild(s);
    const l = Gr(() => m?.reset());
    return l.style.marginLeft = "4px", w.appendChild(l), y.appendChild(w), $.container.appendChild(ie("Loading 3D viewer...")), Wo().then(() => {
      $.container.replaceChildren(), f = Ye.createViewer($.container, { backgroundColor: R.viewerBg }), f.addModel(dc(o), "sdf"), f.setStyle({}, xo[u]), f.zoomTo(), f.render(), m = Zo($.container, f);
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
Ce("gufe-small-molecule", hc);
const ri = ["HOH", "WAT", "SOL", "TIP3"], Ao = { hetflag: !1 }, mc = { hetflag: !0 }, gc = { resn: ri }, Ne = {
  stick: { radius: 0.15 },
  sphere: { scale: 0.3 },
  hetero: { stickRadius: 0.2, sphereScale: 0.28 },
  water: { stickRadius: 0.05, sphereScale: 0.18 },
  surfaceOpacity: 0.85,
  /** Above this many atoms a surface is slow enough to be worth warning about. */
  surfaceAtomWarn: 4e4
};
function yc(e) {
  const t = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set();
  let o = 0, c = 0, n = 0, i = 1 / 0, a = -1 / 0;
  for (const d of e.split(/\r?\n/)) {
    const y = d.slice(0, 6);
    if (y === "ENDMDL") break;
    if (y !== "ATOM  " && y !== "HETATM") continue;
    o++, y === "HETATM" && c++;
    const g = d.slice(17, 20).trim(), _ = d.slice(21, 22).trim() || "_", $ = d.slice(22, 26).trim(), b = d.slice(26, 27).trim();
    ri.indexOf(g) !== -1 && n++, t.add(_), r.add(`${_}|${$}${b}|${g}`);
    const k = parseInt($, 10);
    isNaN(k) || (k < i && (i = k), k > a && (a = k));
  }
  return {
    chains: t.size,
    residues: r.size,
    atoms: o,
    hetatms: c,
    waters: n,
    heteroNonWater: c - n,
    resiMin: i === 1 / 0 ? 0 : i,
    resiMax: a === -1 / 0 ? 0 : a
  };
}
function vc(e) {
  return `${et(e.chains)} chains · ${et(e.residues)} residues · ${et(e.atoms)} atoms · ${et(e.hetatms)} HETATM` + (e.waters > 0 ? ` (${et(e.waters)} water)` : "");
}
function $c(e, t) {
  return e === "chain" ? { colorscheme: "chain" } : e === "ss" ? { colorscheme: "ssJmol" } : e === "spectrum" && t && t.resiMax > t.resiMin ? { colorscheme: { prop: "resi", gradient: "roygb", min: t.resiMin, max: t.resiMax } } : { colorscheme: "Jmol" };
}
function No(e, t, r, o) {
  const c = o || (() => {
  }), n = $c(t.color, r);
  try {
    e.removeAllSurfaces();
  } catch {
  }
  if (e.setStyle({}, {}), e.setStyle(
    Ao,
    t.rep === "stick" ? { stick: { radius: Ne.stick.radius, ...n } } : t.rep === "sphere" ? { sphere: { scale: Ne.sphere.scale, ...n } } : (
      // For 'surface' the shell is added separately; leave the atoms bare so
      // it is not cluttered from the inside.
      t.rep === "surface" ? {} : { cartoon: { ...n } }
    )
  ), e.setStyle(
    mc,
    t.hetero ? {
      stick: { radius: Ne.hetero.stickRadius, colorscheme: "Jmol" },
      sphere: { scale: Ne.hetero.sphereScale, colorscheme: "Jmol" }
    } : {}
  ), e.setStyle(
    gc,
    t.waters ? {
      stick: { radius: Ne.water.stickRadius, colorscheme: "Jmol" },
      sphere: { scale: Ne.water.sphereScale, colorscheme: "Jmol" }
    } : {}
  ), t.rep !== "surface") {
    c(null), e.render();
    return;
  }
  c(
    r && r.atoms > Ne.surfaceAtomWarn ? "Computing surface (large structure, this may take a while)..." : "Computing surface..."
  ), e.render(), setTimeout(() => {
    try {
      Promise.resolve(
        e.addSurface(Ye.SurfaceType.VDW, { opacity: Ne.surfaceOpacity, ...n }, Ao)
      ).then(() => {
        c(null), e.render();
      }).catch((i) => c(`Surface failed: ${he(i)}`, "error"));
    } catch (i) {
      c(`Surface failed: ${he(i)}`, "error");
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
];
class wc extends Ee {
  placeholder() {
    return "Waiting for a ProteinComponent payload...";
  }
  renderView(t, r) {
    const o = r.pdb, c = r.name ?? "", n = { rep: "cartoon", color: "chain", waters: !1, hetero: !0 };
    let i = null, a = null, d = null;
    const y = I(
      "div",
      `display:flex;align-items:center;gap:14px;flex-wrap:wrap;padding:8px 14px;flex-shrink:0;font-size:12px;background:${R.toolbarBg};border-bottom:1px solid ${R.toolbarBorder};color:${R.textPrimary};`
    );
    t.appendChild(y), y.appendChild(
      I("span", `font-weight:700;font-size:14px;letter-spacing:.02em;color:${R.titleColor};`, c || "Protein")
    );
    const g = (h) => I("span", `font-size:11px;color:${R.textMuted};`, h);
    y.appendChild(g("Style:")), y.appendChild(
      cr(bc, n.rep, (h) => {
        n.rep = h, u();
      })
    ), y.appendChild(g("Color:"));
    const _ = I("select", To);
    for (const h of _c) {
      const w = I("option", "", h.label);
      w.value = h.id, _.appendChild(w);
    }
    _.value = n.color, _.addEventListener("change", () => {
      n.color = _.value, u();
    }), y.appendChild(_);
    const $ = I("div", "display:flex;gap:4px;");
    y.appendChild($);
    const b = [
      ["waters", "Waters", "Show water molecules", () => u()],
      ["hetero", "Hetero", "Show hetero atoms / ligands / ions / lipids", () => u()],
      ["spin", "Spin", "Rotate the view continuously", () => i?.spin(n.spin ? "y" : !1)]
    ];
    for (const [h, w, s, l] of b) {
      const p = I("button", st, w);
      p.title = s, p.style.background = n[h] ? R.btnBgActive : R.btnBg, p.onclick = () => {
        n[h] = !n[h], p.style.background = n[h] ? R.btnBgActive : R.btnBg, l();
      }, $.appendChild(p);
    }
    $.appendChild(Gr(() => a?.reset()));
    const k = I("span", `margin-left:auto;font-size:11px;white-space:nowrap;color:${R.textMuted2};`);
    y.appendChild(k);
    const S = Io();
    t.appendChild(S.wrap);
    const f = I(
      "div",
      "position:absolute;top:12px;left:50%;transform:translateX(-50%);padding:6px 14px;border-radius:6px;font-size:12px;z-index:20;display:none;pointer-events:none;"
    );
    S.wrap.appendChild(f);
    const m = (h, w) => {
      if (h == null) {
        f.style.display = "none";
        return;
      }
      f.textContent = h, f.style.display = "block";
      const s = w === "error";
      f.style.background = s ? R.warnBg : R.toolbarBg, f.style.color = s ? R.warnFg : R.textMuted, f.style.border = `1px solid ${s ? R.warnBorder : R.toolbarBorder}`;
    };
    function u() {
      i && No(i, n, d, m);
    }
    if (!o || !o.trim())
      return m("No protein data - waiting for a PDB payload."), {};
    try {
      d = yc(o), k.textContent = vc(d);
    } catch (h) {
      m(`⚠ PDB parse error: ${he(h)}`, "error");
    }
    return m("Loading 3D viewer..."), Wo().then(() => {
      i = Ye.createViewer(S.container, { backgroundColor: R.viewerBg }), i.addModel(o, "pdb"), No(i, n, d, m), i.zoomTo(), i.spin(n.spin ? "y" : !1), i.render(), a = Zo(S.container, i);
    }).catch((h) => {
      m(`⚠ Failed to render structure: ${he(h)}`, "error");
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
Ce("gufe-protein", wc);
const ni = "http://www.w3.org/2000/svg";
function oe(e, t = {}) {
  const r = document.createElementNS(ni, e);
  for (const [o, c] of Object.entries(t)) r.setAttribute(o, String(c));
  return r;
}
function Xe(e, t) {
  const r = document.createElementNS(ni, "title");
  return r.textContent = t, e.appendChild(r), e;
}
function at(e) {
  const t = /* @__PURE__ */ new Map();
  return Mr(e, t, /* @__PURE__ */ new Set()), t;
}
function Mr(e, t, r) {
  if (e == null || typeof e != "object" || r.has(e)) return;
  if (r.add(e), Array.isArray(e)) {
    for (const c of e) Mr(c, t, r);
    return;
  }
  const o = e.registry;
  if (Array.isArray(o))
    for (const c of o) {
      const n = c["gufe-key"];
      typeof n == "string" && n && !t.has(n) && t.set(n, c);
    }
  for (const c of Object.values(e)) Mr(c, t, r);
}
function Ve(e, t) {
  return t ? e.get(t) : void 0;
}
function ke(e, t, r) {
  const o = Ve(e, t);
  return o?.type === r ? o : void 0;
}
function Ze(e) {
  return e.name ? e.name : (e["gufe-key"].split("-").pop() ?? e["gufe-key"]).slice(0, 6);
}
const jo = 420, Sc = [
  { id: "changes", label: "Changes", title: "Highlight what differs, as gufe draws it" },
  { id: "mapped", label: "Mapped", title: "Highlight the atoms that carry over instead" }
];
function oi(e) {
  const t = parseInt(e.replace("#", ""), 16);
  return [(t >> 16 & 255) / 255, (t >> 8 & 255) / 255, (t & 255) / 255];
}
const kc = oi(qe.elementChange), Ec = oi(qe.uniqueAtom);
function Mo(e, t, r) {
  const o = [], c = [], n = [];
  for (let i = 0; i < t.length; i++) {
    const a = e.get(i);
    a === void 0 ? o.push(i) : t[i] !== r[a] ? c.push(i) : n.push(i);
  }
  return { atoms: o, elements: c, mapped: n };
}
function Cc(e, t) {
  if (t === "mapped")
    return { atoms: [...e.mapped, ...e.elements], colors: {} };
  const r = {};
  for (const o of e.elements) r[o] = kc;
  for (const o of e.atoms) r[o] = Ec;
  return { atoms: [...e.elements, ...e.atoms], colors: r };
}
function Pc(e) {
  const t = /* @__PURE__ */ new Map();
  for (const r of e.componentA_to_componentB ?? [])
    Number.isInteger(r?.index_A) && Number.isInteger(r?.index_B) && t.set(r.index_A, r.index_B);
  return t;
}
function ii(e, t) {
  const r = ke(t, e.componentA, "SmallMoleculeComponentViz"), o = ke(t, e.componentB, "SmallMoleculeComponentViz");
  return !r || !o ? null : { ...e, registry: r["gufe-key"] === o["gufe-key"] ? [r] : [r, o] };
}
class xc extends Ee {
  placeholder() {
    return "Waiting for a LigandAtomMapping payload...";
  }
  renderView(t, r) {
    const o = at(r), c = ke(o, r.componentA, "SmallMoleculeComponentViz"), n = ke(o, r.componentB, "SmallMoleculeComponentViz"), i = je(r.name || "Atom mapping", "LigandAtomMapping");
    if (t.appendChild(i), !c || !n)
      return t.appendChild(
        ie("This mapping names two molecules, and its registry does not hold them.")
      ), {};
    const a = Ze(c), d = Ze(n), y = Pc(r);
    let g, _;
    try {
      g = Po(c.sdf, a).symbols, _ = Po(n.sdf, d).symbols;
    } catch (N) {
      return t.appendChild(ie(`Could not read a molecule: ${he(N)}`, !0)), {};
    }
    const $ = /* @__PURE__ */ new Map();
    for (const [N, j] of y) $.set(j, N);
    const b = Mo(y, g, _), k = Mo($, _, g);
    let S = "changes";
    i.statsEl.appendChild(se("mapped atoms", String(y.size))), i.statsEl.appendChild(
      se("element changes", String(b.elements.length), qe.elementChange)
    ), i.statsEl.appendChild(
      se(`unique to ${a}`, String(b.atoms.length), qe.uniqueAtom)
    ), i.statsEl.appendChild(
      se(`unique to ${d}`, String(k.atoms.length), qe.uniqueAtom)
    ), i.statsEl.appendChild(se("score", r.score == null ? We : r.score.toFixed(3)));
    const f = I(
      "div",
      `display:flex;align-items:center;gap:12px;flex-wrap:wrap;padding:7px 14px;flex-shrink:0;font-size:12px;background:${R.toolbarBg};border-bottom:1px solid ${R.toolbarBorder};color:${R.textMuted};`
    );
    f.appendChild(I("span", `font-size:11px;color:${R.textMuted};`, "Highlight:")), f.appendChild(
      cr(Sc, S, (N) => {
        S = N, A();
      })
    );
    const m = I("div", "display:flex;align-items:center;gap:12px;margin-left:auto;font-size:11px;");
    m.appendChild(se("element change", "", qe.elementChange)), m.appendChild(se("unique atom", "", qe.uniqueAtom)), f.appendChild(m), t.appendChild(f);
    const u = I("div", "flex:1;min-height:0;display:flex;flex-direction:row;");
    t.appendChild(u);
    const h = (N) => {
      const j = I("div", "flex:1 1 50%;min-width:0;display:flex;flex-direction:column;");
      j.appendChild(
        I(
          "div",
          `flex-shrink:0;padding:4px 10px;font-size:12px;font-weight:bold;color:${R.labelFg};background:${R.labelBg};`,
          N
        )
      );
      const D = I(
        "div",
        `flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:8px;background:${R.canvas2DBg};`
      );
      return j.appendChild(D), u.appendChild(j), D;
    }, w = h(a);
    u.appendChild(I("div", `width:1px;flex-shrink:0;background:${R.splitBorder};`));
    const s = h(d), l = I(
      "div",
      `flex-shrink:0;max-height:96px;overflow:auto;padding:8px 14px;font-size:11px;line-height:1.6;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;color:${R.textMuted};background:${R.panelBg};border-top:1px solid ${R.toolbarBorder};`
    );
    l.textContent = y.size ? Array.from(y, ([N, j]) => `${N} -> ${j}`).join("   ") : "This mapping relates no atoms at all.", t.appendChild(l);
    const p = Object.entries(r.annotations ?? {}).filter(([N]) => N !== "score");
    if (p.length) {
      const N = I(
        "div",
        `flex-shrink:0;padding:6px 14px;font-size:11px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;color:${R.textMuted2};background:${R.panelBg};border-top:1px solid ${R.toolbarBorder};`
      );
      N.textContent = p.map(([j, D]) => `${j}: ${String(D)}`).join("    "), t.appendChild(N);
    }
    let E = null;
    const P = (N, j, D) => {
      if (!E) return;
      const { atoms: U, colors: Q } = Cc(D, S), te = fc(E, j, jo, U, Q);
      N.replaceChildren(), te ? ti(N, te, jo) : N.appendChild(ie("Failed to parse molecule", !0));
    }, A = () => {
      P(w, c.sdf, b), P(s, n.sdf, k);
    };
    return w.appendChild(ie("Loading 2D depiction...")), s.appendChild(ie("Loading 2D depiction...")), Hr().then((N) => {
      E = N, A();
    }).catch((N) => {
      const j = `RDKit failed to load: ${he(N)}`;
      w.replaceChildren(ie(j, !0)), s.replaceChildren(ie(j, !0));
    }), {};
  }
}
Ce("gufe-atom-mapping", xc);
const Rc = ["Force-directed", "Circular", "Radial"], or = 34, nr = 200, Rr = 1.5, Ac = 6, Nc = 16, ye = {
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
function jc(e) {
  const t = parseInt(e.replace("#", ""), 16);
  return [t >> 16 & 255, t >> 8 & 255, t & 255];
}
function Mc(e) {
  const [t, r] = R.netEdgeRamp.map(jc), o = Math.max(0, Math.min(1, e ?? 0.5));
  return `rgb(${t.map((n, i) => Math.round(n + (r[i] - n) * o)).join(",")})`;
}
const Ie = Ze, Oc = (e, t) => e.length > t ? `${e.slice(0, t - 1)}...` : e;
class Tc extends Ee {
  placeholder() {
    return "Waiting for a LigandNetwork payload...";
  }
  renderView(t, r) {
    const o = at(r), c = [];
    let n = 0;
    for (const A of r.nodes ?? []) {
      const N = ke(o, A, "SmallMoleculeComponentViz");
      if (!N) {
        n++;
        continue;
      }
      c.push({ ...N, x: 0, y: 0 });
    }
    const i = new Map(c.map((A) => [A["gufe-key"], A])), a = [];
    let d = 0;
    for (const A of r.edges ?? []) {
      const N = i.get(A.componentA), j = i.get(A.componentB);
      if (!N || !j) {
        d++;
        continue;
      }
      a.push({ ...A, index: a.length, from: N, to: j });
    }
    const y = je(r.name || "Ligand network", "LigandNetwork");
    y.statsEl.appendChild(se("ligands", String(c.length))), y.statsEl.appendChild(se("mappings", String(a.length))), t.appendChild(y);
    const g = I("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    t.appendChild(g);
    const _ = I("div", `flex:1 1 58%;min-width:0;display:flex;flex-direction:column;background:${R.netCanvasBg};`), $ = I("div", `flex:1 1 42%;min-width:0;display:flex;flex-direction:column;background:${R.appBg};`);
    g.appendChild(_), g.appendChild(I("div", `width:1px;flex-shrink:0;background:${R.splitBorder};`)), g.appendChild($);
    const b = I("div", `flex:1;position:relative;overflow:hidden;min-height:0;background:${R.netCanvasBg};`);
    _.appendChild(b);
    const k = this.#t(
      (A) => P(A),
      () => p()
    );
    _.appendChild(k.bar);
    const S = this.#e($, o);
    if (!c.length)
      return b.appendChild(
        ie(
          n ? "None of this network's ligands are in its registry." : "This network has no ligands."
        )
      ), S.message("Nothing to show."), {};
    n && De(
      b,
      `${n} ligand${n === 1 ? "" : "s"} named by this network are not in its registry`
    ), d && De(b, `${d} mapping${d === 1 ? "" : "s"} name a ligand this network does not contain`);
    const f = Hr().catch((A) => (console.warn("[gufe-viz] RDKit failed to load:", he(A)), null));
    let m = a.length ? 0 : -1, u = null, h = "Force-directed", w = !1, s = !0, l = () => {
    }, p = () => {
    };
    const E = (A) => {
      m = A, S.show(a[A] ?? null), l();
    }, P = (A = h) => {
      h = A, u?.(), u = null, b.querySelector("svg")?.remove();
      const N = b.clientWidth || 800, j = b.clientHeight || 600;
      Ic(c, N, j, h, a);
      const D = () => {
        if (!s) return;
        const U = this.#n(b, c, a, N, j, E);
        l = () => U.setSelected(m), p = U.reset, u = U.cleanup, l(), f.then((Q) => Q && U.depict(Q)).catch(() => {
        });
      };
      if (h !== "Force-directed" || w) {
        D();
        return;
      }
      zc(c, a, N, j).then((U) => {
        if (s) {
          if (U) {
            D();
            return;
          }
          w = !0, k.picker.value = "Circular", De(b, "d3 could not be loaded - showing the circular layout instead"), P("Circular");
        }
      }, D);
    };
    return P(), S.show(a[m] ?? null), {
      onResize: () => P(),
      cleanup: () => {
        s = !1, u?.();
      }
    };
  }
  #t(t, r) {
    const o = I(
      "div",
      `display:flex;align-items:center;gap:10px;flex-wrap:wrap;padding:8px 14px;flex-shrink:0;background:${R.toolbarBg};border-top:1px solid ${R.toolbarBorder};`
    ), c = I("div", `display:flex;align-items:center;gap:6px;font-size:11px;color:${R.textMuted};`);
    c.appendChild(I("span", "", "score")), c.appendChild(
      I(
        "span",
        `width:40px;height:4px;border-radius:2px;background:linear-gradient(to right,${R.netEdgeRamp.join(",")});`
      )
    ), c.appendChild(I("span", "", "0 -> 1")), o.appendChild(c), o.appendChild(I("label", `font-size:12px;margin-left:auto;color:${R.textMuted};`, "Layout"));
    const n = I("select", To);
    for (const i of Rc) {
      const a = I("option", "", i);
      a.value = i, n.appendChild(a);
    }
    return n.onchange = () => t(n.value), o.appendChild(n), o.appendChild(Gr(r, "Reset pan and zoom")), { bar: o, picker: n };
  }
  /** The right-hand pane: what the selected mapping is, in words and pictures. */
  #e(t, r) {
    const o = I(
      "div",
      `flex-shrink:0;padding:4px 10px;font-size:12px;font-weight:bold;color:${R.labelFg};background:${R.labelBg};`,
      "Selected mapping"
    ), c = I("div", "flex:1;min-height:0;overflow:auto;display:flex;flex-direction:column;");
    t.appendChild(o), t.appendChild(c);
    const n = (a) => c.replaceChildren(ie(a));
    return { show: (a) => {
      if (!a) {
        n("Click an edge to see its mapping.");
        return;
      }
      c.replaceChildren();
      const d = I(
        "div",
        `padding:10px 14px;font-size:13px;font-weight:600;color:${R.textPrimary};border-bottom:1px solid ${R.toolbarBorder};`,
        `${Ie(a.from)} -> ${Ie(a.to)}`
      );
      c.appendChild(d);
      const y = ii(a, r), g = document.createElement("gufe-atom-mapping");
      g.style.cssText = "flex:1;min-width:0;min-height:220px;display:flex;", g.payload = y, c.appendChild(g);
      const _ = Object.entries(a.annotations ?? {}).filter(([$]) => $ !== "score");
      if (_.length) {
        const $ = I(
          "div",
          `padding:0 14px 12px;font-size:11px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;color:${R.textMuted2};`
        );
        for (const [b, k] of _)
          $.appendChild(I("div", "", `${b}: ${String(k)}`));
        c.appendChild($);
      }
    }, message: n };
  }
  /** Build the SVG for the current node positions. Returns the handles the
   * caller needs afterwards: selection, depictions, and teardown. */
  #n(t, r, o, c, n, i) {
    const a = oe("svg", { width: c, height: n, style: "display:block;touch-action:none;" }), d = oe("g");
    a.appendChild(d), t.appendChild(a);
    const y = [], g = oe("g"), _ = oe("g"), $ = oe("g", { "pointer-events": "none" }), b = oe("g");
    d.append(g, _, $, b);
    for (const h of o) {
      const w = Mc(h.score), s = oe("line", {
        stroke: R.netHaloColor,
        "stroke-width": Rr + 12,
        "stroke-linecap": "round",
        opacity: 0,
        "pointer-events": "none"
      }), l = oe("line", {
        stroke: w,
        "stroke-width": Rr + (h.score ?? 0.5) * (Ac - Rr),
        "stroke-opacity": 0.9,
        "pointer-events": "none"
      }), p = Xe(
        oe("line", { stroke: "transparent", "stroke-width": Nc, style: "cursor:pointer;" }),
        `${Ie(h.from)} -> ${Ie(h.to)}${h.score == null ? "" : `
score ${h.score.toFixed(3)}`}`
      );
      if (p.addEventListener("click", (E) => {
        E.stopPropagation(), i(h.index);
      }), y.push(s), g.append(s, l), _.appendChild(p), h.score != null) {
        const E = oe("text", {
          "text-anchor": "middle",
          "dominant-baseline": "middle",
          "font-size": 10,
          "font-weight": 600,
          fill: R.netEdgeLabel
        });
        E.textContent = h.score.toFixed(2), $.appendChild(E);
      } else
        $.appendChild(oe("text"));
    }
    const k = [], S = [], f = r.map((h) => {
      const w = Xe(oe("g", { style: "cursor:grab;" }), `${Ie(h)}
${h.smiles ?? ""}
${h["gufe-key"]}`);
      w.appendChild(
        oe("circle", {
          r: or,
          fill: R.netNodeFill,
          stroke: R.netNodeStroke,
          "stroke-width": 1.5
        })
      );
      const s = oe("g", { "pointer-events": "none" });
      w.appendChild(s), k.push(s);
      const l = oe("text", {
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        "font-size": 16,
        "font-weight": 700,
        fill: R.netInitials,
        "pointer-events": "none"
      });
      l.textContent = Ie(h).slice(0, 2).toUpperCase(), w.appendChild(l), S.push(l);
      const p = oe("text", {
        "text-anchor": "middle",
        y: or + 14,
        "font-size": 11,
        "font-weight": 600,
        fill: R.netNodeLabel,
        "pointer-events": "none"
      });
      return p.textContent = Oc(Ie(h), 16), w.appendChild(p), b.appendChild(w), w;
    }), m = () => {
      o.forEach((h, w) => {
        for (const l of [y[w], g.children[w * 2 + 1], _.children[w]]) {
          const p = l;
          p.setAttribute("x1", String(h.from.x)), p.setAttribute("y1", String(h.from.y)), p.setAttribute("x2", String(h.to.x)), p.setAttribute("y2", String(h.to.y));
        }
        const s = $.children[w];
        s.setAttribute("x", String((h.from.x + h.to.x) / 2)), s.setAttribute("y", String((h.from.y + h.to.y) / 2 - 8));
      }), r.forEach((h, w) => f[w].setAttribute("transform", `translate(${h.x},${h.y})`));
    };
    m();
    const u = this.#r(a, d, r, f, m);
    return {
      setSelected(h) {
        y.forEach((w, s) => w.setAttribute("opacity", s === h ? "0.95" : "0"));
      },
      depict(h) {
        const w = (or - 4) * 2 / nr, s = new DOMParser();
        let l = 0;
        return r.forEach((p, E) => {
          const P = p.sdf && ei(h, p.sdf, nr);
          if (!P) return;
          const A = s.parseFromString(P, "image/svg+xml").documentElement;
          if (!A || A.nodeName.toLowerCase() === "parsererror") return;
          const N = k[E];
          N.setAttribute(
            "transform",
            `translate(${-w * nr / 2},${-w * nr / 2}) scale(${w})`
          );
          let j = 0;
          for (const D of Array.from(A.childNodes)) {
            if (D.nodeType !== 1) continue;
            const U = D.nodeName.toLowerCase();
            if (!(U === "defs" || U === "metadata" || U === "title")) {
              if (U === "rect") {
                const Q = (D.getAttribute("fill") ?? "").toLowerCase();
                if (Q === "#ffffff" || Q === "white" || Q === "rgb(255,255,255)") continue;
              }
              N.appendChild(document.importNode(D, !0)), j++;
            }
          }
          j && (S[E].setAttribute("display", "none"), l++);
        }), l;
      },
      reset: u.reset,
      cleanup: u.cleanup
    };
  }
  /** Wheel zoom, background pan, node drag - ~40 lines instead of d3-zoom and
   * d3-drag, and they keep working when d3 is unreachable. */
  #r(t, r, o, c, n) {
    let i = 1, a = 0, d = 0;
    const y = () => r.setAttribute("transform", `translate(${a},${d}) scale(${i})`), _ = Xo(t, {
      onZoom: (f) => {
        const m = t.getBoundingClientRect(), u = f.clientX - m.left, h = f.clientY - m.top, w = Math.min(5 / i, Math.max(0.15 / i, Math.exp(-f.deltaY * 2e-3)));
        a = u - (u - a) * w, d = h - (h - d) * w, i *= w, y();
      },
      hint: "Click the graph or hold Ctrl to zoom"
    });
    let $ = null;
    const b = (f) => {
      $ = { x: f.clientX - a, y: f.clientY - d };
    }, k = (f) => {
      $ && (a = f.clientX - $.x, d = f.clientY - $.y, y());
    }, S = () => {
      $ = null;
    };
    return t.addEventListener("pointerdown", b), t.addEventListener("pointermove", k), t.addEventListener("pointerup", S), t.addEventListener("pointercancel", S), t.addEventListener("pointerleave", S), c.forEach((f, m) => {
      let u = null;
      f.addEventListener("pointerdown", (w) => {
        w.stopPropagation(), u = { x: w.clientX - o[m].x * i, y: w.clientY - o[m].y * i }, f.setPointerCapture(w.pointerId);
      }), f.addEventListener("pointermove", (w) => {
        u && (o[m].x = o[m].fx = (w.clientX - u.x) / i, o[m].y = o[m].fy = (w.clientY - u.y) / i, n());
      });
      const h = () => {
        u = null;
      };
      f.addEventListener("pointerup", h), f.addEventListener("pointercancel", h);
    }), {
      reset() {
        i = 1, a = 0, d = 0, y();
      },
      cleanup() {
        _.cleanup(), t.removeEventListener("pointerdown", b), t.removeEventListener("pointermove", k), t.removeEventListener("pointerup", S), t.removeEventListener("pointercancel", S), t.removeEventListener("pointerleave", S);
      }
    };
  }
}
function Ic(e, t, r, o, c) {
  const n = t / 2, i = r / 2, a = (d, y) => {
    d.forEach((g, _) => {
      const $ = 2 * Math.PI * _ / Math.max(1, d.length) - Math.PI / 2;
      g.x = n + y * Math.cos($), g.y = i + y * Math.sin($), g.fx = o === "Force-directed" ? void 0 : g.x, g.fy = o === "Force-directed" ? void 0 : g.y;
    });
  };
  if (o === "Radial" && e.length) {
    const d = new Map(e.map((S) => [S["gufe-key"], []]));
    for (const S of c)
      d.get(S.from["gufe-key"]).push(S.to["gufe-key"]), d.get(S.to["gufe-key"]).push(S.from["gufe-key"]);
    const y = new Map(e.map((S) => [S["gufe-key"], S])), g = e.reduce(
      (S, f) => d.get(f["gufe-key"]).length > d.get(S["gufe-key"]).length ? f : S
    ), _ = /* @__PURE__ */ new Set([g["gufe-key"]]);
    let $ = [g["gufe-key"]], b = 0;
    const k = Math.min(t, r) * 0.18;
    for (; $.length; ) {
      a(
        $.map((f) => y.get(f)),
        b === 0 ? 0 : b * k + 40
      );
      const S = [];
      for (const f of $)
        for (const m of d.get(f))
          _.has(m) || (_.add(m), S.push(m));
      $ = S, b++;
    }
    a(e.filter((S) => !_.has(S["gufe-key"])), Math.min(t, r) * 0.45);
    return;
  }
  a(e, Math.min(t, r) * 0.34);
}
async function zc(e, t, r, o) {
  let c;
  try {
    if (c = await Yo(), typeof c?.forceSimulation != "function") return !1;
  } catch {
    return !1;
  }
  const n = t.map((d) => ({ source: d.from["gufe-key"], target: d.to["gufe-key"], score: d.score })), i = c.forceSimulation(e).force(
    "link",
    c.forceLink(n).id((d) => d["gufe-key"]).distance((d) => ye.linkBaseDistance + (1 - (d.score ?? 0.5)) * ye.linkScoreBonus).strength(ye.linkStrength)
  ).force(
    "charge",
    c.forceManyBody().strength(ye.chargeStrength).distanceMin(ye.chargeDistanceMin).distanceMax(ye.chargeDistanceMax)
  ).force("center", c.forceCenter(r / 2, o / 2).strength(ye.centerStrength)).force("collision", c.forceCollide(or + ye.collisionPadding).iterations(ye.collisionIterations)).force("x", c.forceX(r / 2).strength(ye.drift)).force("y", c.forceY(o / 2).strength(ye.drift)).stop(), a = Math.ceil(Math.log(i.alphaMin()) / Math.log(1 - i.alphaDecay()));
  for (let d = 0; d < a * ye.tickMultiplier; d++) i.tick();
  return !0;
}
Ce("gufe-ligand-network", Tc);
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
function Dc(e, t, r) {
  const o = Math.max(90, Math.min(t, r) * 0.36);
  e.forEach((c, n) => {
    const i = 2 * Math.PI * n / Math.max(1, e.length) - Math.PI / 2;
    c.x = t / 2 + o * Math.cos(i), c.y = r / 2 + o * Math.sin(i);
  });
}
async function Vc(e, t, r, o) {
  let c;
  try {
    if (c = await Yo(), typeof c?.forceSimulation != "function") return !1;
  } catch {
    return !1;
  }
  const n = t.map((d) => ({ source: d.from["gufe-key"], target: d.to["gufe-key"] })), i = c.forceSimulation(e).force(
    "link",
    c.forceLink(n).id((d) => d["gufe-key"]).distance(Je.linkDistance).strength(Je.linkStrength)
  ).force("charge", c.forceManyBody().strength(Je.chargeStrength)).force("center", c.forceCenter(r / 2, o / 2)).force("collision", c.forceCollide(Je.collisionRadius).iterations(Je.collisionIterations)).stop(), a = Math.ceil(Math.log(i.alphaMin()) / Math.log(1 - i.alphaDecay()));
  for (let d = 0; d < a * Je.tickMultiplier; d++) i.tick();
  return !0;
}
class Bc extends Ee {
  placeholder() {
    return "Waiting for an AlchemicalNetwork payload...";
  }
  renderView(t, r) {
    const o = at(r), c = [];
    let n = 0;
    for (const l of r.nodes ?? []) {
      const p = ke(o, l, "ChemicalSystemViz");
      if (!p) {
        n++;
        continue;
      }
      c.push({ ...p, x: 0, y: 0 });
    }
    const i = new Map(c.map((l) => [l["gufe-key"], l])), a = [];
    let d = 0;
    for (const l of r.edges ?? []) {
      const p = i.get(l.stateA), E = i.get(l.stateB);
      if (!p || !E) {
        d++;
        continue;
      }
      a.push({ ...l, index: a.length, from: p, to: E });
    }
    const y = (l) => {
      const p = ke(o, l.protocol, "ProtocolViz");
      return p?.gufe_type || p?.name || "";
    }, g = new Set(a.map(y).filter(Boolean)), _ = je(r.name || "Alchemical network", "AlchemicalNetwork");
    _.statsEl.appendChild(se("systems", String(c.length))), _.statsEl.appendChild(se("transformations", String(a.length))), g.size && _.statsEl.appendChild(se("protocol", [...g].join(", "))), t.appendChild(_);
    const $ = I("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    t.appendChild($);
    const b = I("div", `flex:1 1 62%;min-width:0;position:relative;overflow:hidden;background:${R.netCanvasBg};`);
    $.appendChild(b), $.appendChild(I("div", `width:1px;flex-shrink:0;background:${R.splitBorder};`));
    const k = I("div", `flex:1 1 38%;min-width:0;display:flex;flex-direction:column;background:${R.appBg};`);
    $.appendChild(k);
    const S = this.#t(k, o, y);
    if (!c.length)
      return b.appendChild(
        ie(
          n ? "None of this network's chemical systems are in its registry." : "This network has no chemical systems."
        )
      ), S.message("Nothing to show."), {};
    n && De(
      b,
      `${n} chemical system${n === 1 ? "" : "s"} named by this network are not in its registry`
    ), d && De(
      b,
      `${d} transformation${d === 1 ? "" : "s"} name a system this network does not contain`
    );
    let f = !0, m = !1, u = null, h = () => {
    };
    const w = (l, p) => {
      u = { kind: l, index: p }, S.show(l === "node" ? c[p] : a[p], l), h();
    }, s = () => {
      b.querySelector("svg")?.remove();
      const l = b.clientWidth || 800, p = b.clientHeight || 600;
      Dc(c, l, p);
      const E = () => {
        if (!f) return;
        const P = this.#e(b, c, a, l, p, w);
        h = () => P.setSelected(u), h();
      };
      if (m) {
        E();
        return;
      }
      Vc(c, a, l, p).then((P) => {
        f && (P || (m = !0, De(b, "d3 could not be loaded - showing the circular layout instead")), E());
      }, E);
    };
    return s(), w("node", 0), {
      onResize: () => s(),
      cleanup: () => {
        f = !1;
      }
    };
  }
  /** The right-hand pane: what the selected system or transformation is. */
  #t(t, r, o) {
    t.appendChild(
      I(
        "div",
        `flex-shrink:0;padding:4px 10px;font-size:12px;font-weight:bold;color:${R.labelFg};background:${R.labelBg};`,
        "Selected"
      )
    );
    const c = I("div", "flex:1;min-height:0;overflow:auto;display:flex;flex-direction:column;");
    t.appendChild(c);
    const n = (d) => c.replaceChildren(ie(d)), i = (d, y) => {
      const g = I(
        "div",
        `padding:10px 14px;border-bottom:1px solid ${R.toolbarBorder};display:flex;flex-direction:column;gap:4px;`
      );
      return g.appendChild(I("div", `font-size:13px;font-weight:600;color:${R.textPrimary};`, d)), g.appendChild(I("div", `font-size:11px;color:${R.textMuted2};`, y)), g;
    };
    return { show: (d, y) => {
      if (c.replaceChildren(), y === "node") {
        const $ = d;
        c.appendChild(i(it($), "ChemicalSystem"));
        const b = I("div", "display:flex;flex-direction:column;gap:6px;padding:12px 14px;"), k = Object.entries($.components ?? {});
        for (const [S, f] of k) {
          const m = Ve(r, f), u = I(
            "div",
            `display:flex;align-items:center;gap:8px;padding:7px 10px;border-radius:8px;min-width:0;background:${R.cardBg};border:1px solid ${R.cardBorder};`
          );
          u.appendChild(I("span", `font-size:12px;font-weight:700;color:${R.textPrimary};`, S)), u.appendChild(
            I(
              "span",
              `font-size:11px;color:${R.textMuted};overflow-wrap:anywhere;min-width:0;`,
              m ? m.name || "(unnamed)" : "(not in the registry)"
            )
          );
          const h = lr(
            m ? m.type === "UnknownComponentViz" ? m.gufe_type : m.type.replace(/Viz$/, "") : "missing"
          );
          h.style.marginLeft = "auto", u.appendChild(h), b.appendChild(u);
        }
        k.length || b.appendChild(I("div", `font-size:12px;color:${R.textMuted2};`, "This system lists no components.")), c.appendChild(b), c.appendChild(
          I(
            "div",
            `padding:0 14px 12px;font-size:11px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;color:${R.textMuted2};overflow-wrap:anywhere;`,
            $["gufe-key"]
          )
        );
        return;
      }
      const g = d;
      c.appendChild(i(g.name || "Unnamed transformation", "Transformation"));
      const _ = I("div", "display:flex;flex-direction:column;gap:8px;padding:12px 14px;");
      for (const [$, b] of [
        ["State A", it(g.from)],
        ["State B", it(g.to)],
        ["Protocol", o(g) || "-"]
      ]) {
        const k = I("div", "display:flex;gap:10px;align-items:baseline;min-width:0;");
        k.appendChild(
          I(
            "span",
            `flex:0 0 76px;font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:${R.textMuted2};`,
            $
          )
        ), k.appendChild(I("span", `flex:1;min-width:0;font-size:12px;color:${R.textPrimary};overflow-wrap:anywhere;`, b)), _.appendChild(k);
      }
      c.appendChild(_), c.appendChild(
        I(
          "div",
          `padding:0 14px 12px;font-size:11px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;color:${R.textMuted2};overflow-wrap:anywhere;`,
          g["gufe-key"]
        )
      );
    }, message: n };
  }
  /** Build the SVG for the current positions, and hand back the selection hook. */
  #e(t, r, o, c, n, i) {
    const a = oe("svg", { width: c, height: n, style: "display:block;" });
    t.appendChild(a);
    const d = oe("g"), y = oe("g");
    a.append(d, y);
    const g = [];
    o.forEach(($, b) => {
      const k = oe("line", {
        x1: $.from.x,
        y1: $.from.y,
        x2: $.to.x,
        y2: $.to.y,
        stroke: R.netEdgeLine,
        "stroke-width": 2,
        "stroke-linecap": "round",
        style: "cursor:pointer;"
      });
      Xe(k, $.name || "transformation"), k.addEventListener("click", () => i("edge", b)), d.appendChild(k), g.push(k);
      const S = oe("line", {
        x1: $.from.x,
        y1: $.from.y,
        x2: $.to.x,
        y2: $.to.y,
        stroke: "transparent",
        "stroke-width": 16,
        style: "cursor:pointer;"
      });
      S.addEventListener("click", () => i("edge", b)), d.appendChild(S);
    });
    const _ = [];
    return r.forEach(($, b) => {
      const k = oe("g", { style: "cursor:pointer;" }), S = oe("rect", {
        x: $.x - ot.width / 2,
        y: $.y - ot.height / 2,
        width: ot.width,
        height: ot.height,
        rx: ot.radius,
        fill: R.cardBg,
        stroke: R.cardBorder,
        "stroke-width": 2
      });
      k.appendChild(S), _.push(S);
      const f = oe("text", {
        x: $.x,
        y: $.y - 2,
        "text-anchor": "middle",
        fill: R.netNodeLabel,
        "font-size": 12,
        "font-weight": 700,
        "font-family": "ui-sans-serif,system-ui,sans-serif"
      });
      f.textContent = qc(it($), 20), k.appendChild(f);
      const m = Object.keys($.components ?? {}).length, u = oe("text", {
        x: $.x,
        y: $.y + 14,
        "text-anchor": "middle",
        fill: R.netInitials,
        "font-size": 10,
        "font-family": "ui-sans-serif,system-ui,sans-serif"
      });
      u.textContent = `${m} component${m === 1 ? "" : "s"}`, k.appendChild(u), Xe(k, it($)), k.addEventListener("click", () => i("node", b)), y.appendChild(k);
    }), {
      setSelected($) {
        _.forEach((b, k) => {
          const S = $?.kind === "node" && $.index === k;
          b.setAttribute("stroke", S ? R.cardBorderActive : R.cardBorder), b.setAttribute("stroke-width", S ? "3" : "2");
        }), g.forEach((b, k) => {
          const S = $?.kind === "edge" && $.index === k;
          b.setAttribute("stroke", S ? R.netHaloColor : R.netEdgeLine), b.setAttribute("stroke-width", S ? "4" : "2");
        });
      }
    };
  }
}
Ce("gufe-alchemical-network", Bc);
function Fc(e) {
  return e.name || e.type.replace(/Viz$/, "");
}
function Lc(e) {
  return e.type === "UnknownComponentViz" ? e.gufe_type : e.type.replace(/Viz$/, "");
}
class Uc extends Ee {
  placeholder() {
    return "Waiting for a ChemicalSystem payload...";
  }
  renderView(t, r) {
    const o = at(r), c = [], n = [];
    for (const [k, S] of Object.entries(r.components ?? {})) {
      const f = Ve(o, S);
      f ? c.push([k, f]) : n.push(k);
    }
    const i = je(r.name || "Chemical system", "ChemicalSystem");
    if (i.statsEl.appendChild(se("components", String(c.length))), t.appendChild(i), !c.length)
      return t.appendChild(
        ie(
          n.length ? "None of this system's components are in its registry." : "This chemical system has no components."
        )
      ), {};
    const a = I("div", "flex:1;min-height:0;position:relative;display:flex;flex-direction:row;");
    t.appendChild(a), n.length && De(
      a,
      `${n.length} component${n.length === 1 ? "" : "s"} named by this system (${n.join(", ")}) are not in its registry`
    );
    const d = I(
      "div",
      `flex:0 0 220px;min-width:0;overflow:auto;display:flex;flex-direction:column;gap:6px;padding:10px;background:${R.panelBg};border-right:1px solid ${R.splitBorder};`
    );
    a.appendChild(d);
    const y = I("div", "flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;");
    a.appendChild(y);
    const g = I("div", "flex:1;min-height:0;display:flex;");
    y.appendChild(g);
    const _ = document.createElement("gufe-view");
    _.style.cssText = "flex:1;min-width:0;min-height:0;", g.appendChild(_);
    const $ = [], b = (k) => {
      $.forEach((S, f) => {
        const m = f === k;
        S.style.background = m ? R.cardBgActive : R.cardBg, S.style.borderColor = m ? R.cardBorderActive : R.cardBorder;
      }), _.payload = c[k][1];
    };
    return c.forEach(([k, S], f) => {
      const m = I(
        "button",
        `display:flex;flex-direction:column;align-items:flex-start;gap:4px;padding:8px 10px;text-align:left;border:1px solid ${R.cardBorder};border-radius:8px;background:${R.cardBg};cursor:pointer;font-family:inherit;font-size:12px;width:100%;`
      );
      m.appendChild(I("span", `font-weight:700;color:${R.textPrimary};`, k)), m.appendChild(I("span", `font-size:11px;color:${R.textMuted};`, Fc(S))), m.appendChild(lr(Lc(S))), m.onclick = () => b(f), $.push(m), d.appendChild(m);
    }), b(0), {
      onResize: () => _.resize?.(),
      // Removing the nested view fires its own `disconnectedCallback`, which is
      // where whatever it mounted releases its viewers.
      cleanup: () => _.remove()
    };
  }
}
Ce("gufe-chemical-system", Uc);
const _e = { width: 340, height: 260, padding: 14, radius: 12 }, Kc = 150, Hc = 40, Gc = 24;
function Jc(e) {
  let t = e >>> 0;
  return () => (t = t * 1664525 + 1013904223 >>> 0, t / 4294967296);
}
function Wc(e) {
  const t = /-?\d+(\.\d+)?([eE][-+]?\d+)?/.exec(e ?? "");
  if (!t) return null;
  const r = Number(t[0]);
  return Number.isFinite(r) ? r : null;
}
function Yc(e) {
  return e == null || e <= 0 ? 0 : Math.max(1, Math.min(Gc, Math.round(e * Hc)));
}
function Xc(e) {
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
      fill: R.boxFill,
      stroke: R.boxStroke,
      "stroke-width": 1.5
    })
  );
  const r = Jc(1597463007), o = () => ({
    x: _e.padding + r() * (_e.width - 2 * _e.padding),
    y: _e.padding + r() * (_e.height - 2 * _e.padding)
  });
  for (let i = 0; i < Kc; i++) {
    const { x: a, y: d } = o();
    t.appendChild(oe("circle", { cx: a, cy: d, r: 2.4, fill: R.textMuted2, "fill-opacity": 0.45 }));
  }
  const c = Yc(Wc(e.ion_concentration)), n = [
    [e.positive_ion, R.diffAdded],
    [e.negative_ion, R.diffRemoved]
  ];
  for (const [i, a] of n)
    for (let d = 0; d < c; d++) {
      const { x: y, y: g } = o(), _ = oe("circle", { cx: y, cy: g, r: 5.5, fill: a, "fill-opacity": 0.85 });
      t.appendChild(Xe(_, i));
    }
  return t;
}
class Zc extends Ee {
  placeholder() {
    return "Waiting for a SolventComponent payload...";
  }
  renderView(t, r) {
    const o = je(r.name || "Solvent", "SolventComponent");
    o.statsEl.appendChild(se("neutralized", r.neutralize ? "yes" : "no")), o.statsEl.appendChild(se(r.positive_ion, "", R.diffAdded)), o.statsEl.appendChild(se(r.negative_ion, "", R.diffRemoved)), t.appendChild(o);
    const c = I(
      "div",
      "flex:1;min-height:0;display:flex;flex-wrap:wrap;gap:16px;padding:16px;overflow:auto;align-items:flex-start;"
    );
    t.appendChild(c);
    const n = Ar();
    n.style.flex = "1 1 320px", n.appendChild(ze("SMILES", r.smiles, !0)), n.appendChild(ze("Positive ion", r.positive_ion)), n.appendChild(ze("Negative ion", r.negative_ion)), n.appendChild(ze("Ion concentration", r.ion_concentration)), n.appendChild(ze("Neutralize", r.neutralize ? "yes" : "no")), c.appendChild(n);
    const i = Ar();
    return i.style.flex = "1 1 340px", i.style.alignItems = "center", i.appendChild(Xc(r)), i.appendChild(
      I(
        "div",
        `padding-top:10px;font-size:11px;text-align:center;color:${R.textMuted2};`,
        "Schematic only: the dots show which ions are present, not how many."
      )
    ), c.appendChild(i), {};
  }
}
Ce("gufe-solvent", Zc);
const Or = {
  unchanged: R.diffUnchanged,
  changed: R.diffChanged,
  added: R.diffAdded,
  removed: R.diffRemoved
};
function Qc(e, t) {
  return e && !t ? "removed" : !e && t ? "added" : e === t ? "unchanged" : "changed";
}
function el(e, t) {
  return [.../* @__PURE__ */ new Set([...Object.keys(e.components ?? {}), ...Object.keys(t.components ?? {})])].sort();
}
function tl(e) {
  if (!e) return null;
  const t = e.type === "UnknownComponentViz" ? e.gufe_type : e.type.replace(/Viz$/, "");
  return { name: e.name || "(unnamed)", type: t };
}
function Oo(e, t) {
  const r = I(
    "div",
    `flex:1 1 50%;min-width:0;display:flex;flex-direction:column;gap:4px;padding:8px 10px;border-radius:8px;background:${R.cardBg};border:1px solid ${R.cardBorder};`
  ), o = tl(e);
  return o ? (r.style.borderColor = t === "unchanged" ? R.cardBorder : Or[t], r.appendChild(I("span", `font-size:12px;font-weight:600;color:${R.textPrimary};`, o.name)), r.appendChild(lr(o.type)), r) : (r.style.background = "transparent", r.style.borderStyle = "dashed", r.appendChild(I("span", `font-size:12px;color:${R.textMuted2};`, "absent")), r);
}
function rl(e, t) {
  const r = Ve(t, e.componentA), o = Ve(t, e.componentB);
  return `${r ? Ze(r) : "A"} to ${o ? Ze(o) : "B"}`;
}
class nl extends Ee {
  placeholder() {
    return "Waiting for a Transformation payload...";
  }
  renderView(t, r) {
    const o = at(r), c = ke(o, r.stateA, "ChemicalSystemViz"), n = ke(o, r.stateB, "ChemicalSystemViz"), i = ke(o, r.protocol, "ProtocolViz"), a = r.mappings ?? [], d = je(r.name || "Transformation", "Transformation");
    if (d.statsEl.appendChild(se("protocol", i?.gufe_type || i?.name || "-")), d.statsEl.appendChild(se("mappings", String(a.length))), t.appendChild(d), !c || !n)
      return t.appendChild(
        ie("This transformation names two chemical systems, and its registry does not hold them.")
      ), {};
    const y = el(c, n), g = I("div", "flex:0 0 auto;max-height:45%;overflow:auto;padding:12px 14px;");
    t.appendChild(g);
    const _ = I("div", "display:flex;gap:10px;padding:0 0 6px 120px;");
    for (const [f, m] of [
      ["State A", c],
      ["State B", n]
    ])
      _.appendChild(
        I(
          "div",
          `flex:1 1 50%;min-width:0;font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:${R.textMuted2};`,
          `${f}${m.name ? ` - ${m.name}` : ""}`
        )
      );
    g.appendChild(_);
    for (const f of y) {
      const m = c.components?.[f], u = n.components?.[f], h = Qc(m, u), w = Ve(o, m), s = Ve(o, u), l = I("div", "display:flex;align-items:stretch;gap:10px;padding:4px 0;"), p = I("div", "flex:0 0 110px;display:flex;align-items:center;gap:6px;min-width:0;");
      p.appendChild(
        I("span", `width:8px;height:8px;border-radius:50%;flex-shrink:0;background:${Or[h]};`)
      );
      const E = I("span", `font-size:12px;font-weight:700;color:${R.textPrimary};overflow-wrap:anywhere;`, f);
      E.title = h, p.appendChild(E), l.appendChild(p), l.appendChild(Oo(w, h)), l.appendChild(Oo(s, h)), g.appendChild(l);
    }
    const $ = I(
      "div",
      `display:flex;flex-wrap:wrap;gap:12px;padding:8px 0 0;font-size:11px;color:${R.textMuted};`
    );
    for (const f of ["unchanged", "changed", "added", "removed"])
      $.appendChild(se(f, "", Or[f]));
    g.appendChild($);
    const b = I(
      "div",
      `flex-shrink:0;padding:4px 10px;font-size:12px;font-weight:bold;color:${R.labelFg};background:${R.labelBg};`,
      "Atom mapping"
    );
    if (t.appendChild(b), !a.length)
      return t.appendChild(
        ie(
          "This transformation carries no atom mapping - nothing here maps one small molecule onto another."
        )
      ), {};
    const k = document.createElement("gufe-atom-mapping");
    k.style.cssText = "flex:1;min-height:0;min-width:0;";
    const S = (f) => {
      k.payload = ii(a[f], o);
    };
    if (S(0), a.length > 1) {
      const f = I(
        "div",
        `display:flex;align-items:center;gap:8px;padding:6px 10px;flex-shrink:0;font-size:11px;background:${R.toolbarBg};border-bottom:1px solid ${R.toolbarBorder};color:${R.textMuted};`
      );
      f.appendChild(
        cr(
          a.map((m, u) => ({
            id: String(u),
            label: m.name || rl(m, o)
          })),
          "0",
          (m) => S(Number(m))
        )
      ), t.appendChild(f);
    }
    return t.appendChild(k), {
      onResize: () => k.resize?.(),
      cleanup: () => k.remove()
    };
  }
}
Ce("gufe-transformation", nl);
class ol extends Ee {
  placeholder() {
    return "Waiting for a component payload...";
  }
  renderView(t, r) {
    const o = je(r.name || "Unnamed component", "Component");
    o.statsEl.appendChild(lr(r.gufe_type)), t.appendChild(o);
    const c = I("div", "flex:1;min-height:0;overflow:auto;display:flex;align-items:center;justify-content:center;padding:24px;");
    t.appendChild(c);
    const n = Ar();
    return n.style.maxWidth = "460px", n.appendChild(
      I(
        "div",
        `font-size:14px;font-weight:600;padding-bottom:6px;color:${R.textPrimary};`,
        `There is no visualization for ${r.gufe_type}.`
      )
    ), n.appendChild(
      I(
        "div",
        `font-size:12px;line-height:1.6;padding-bottom:10px;color:${R.textMuted};`,
        "gufe lets a project define its own Component subclasses, so this is a component this build has never been taught to draw - not a broken payload. Everything gufe knows about it that survives serialization is below."
      )
    ), n.appendChild(ze("Name", r.name || "(unnamed)")), n.appendChild(ze("gufe class", r.gufe_type, !0)), c.appendChild(n), {};
  }
}
Ce("gufe-unknown-component", ol);
function fl(e, t) {
  let r = e.querySelector("gufe-view");
  return r || (r = document.createElement("gufe-view"), r.style.cssText = "display:block;width:100%;height:100%;", e.appendChild(r)), t !== void 0 && (r.payload = t), r;
}
export {
  ci as CHROME_OPEN_BY_DEFAULT,
  ui as DEBUG_ATTRIBUTE,
  fi as DEBUG_GLOBAL,
  oc as DEFAULT_ZOOM_BOUNDS,
  Bc as GufeAlchemicalNetwork,
  xc as GufeAtomMapping,
  Uc as GufeChemicalSystem,
  Ee as GufeElement,
  Tc as GufeLigandNetwork,
  wc as GufeProtein,
  hc as GufeSmallMolecule,
  Zc as GufeSolvent,
  nl as GufeTransformation,
  ol as GufeUnknownComponent,
  Qa as GufeView,
  qe as MAPPING_COLORS,
  dl as MAPPING_RAMP_3D,
  ul as MAPPING_RAMP_NAME,
  sl as PAYLOAD_TYPES,
  al as SCHEMA_TYPES,
  Lr as VIEW_TAGS,
  ic as boundedZoom,
  at as buildRegistry,
  il as chromeMenu,
  mi as debugEnabled,
  Ce as defineElement,
  Go as describeProblem,
  Qc as diffStatus,
  ll as dispatchProblem,
  Ze as entryLabel,
  Xa as formatIssues,
  Xo as guardWheel,
  yi as logPayload,
  Ve as lookup,
  ke as lookupOfType,
  ii as mappingPayloadFor,
  fl as mount,
  Wc as parseConcentration,
  gi as payloadJson,
  Gr as resetControl,
  Mo as uniqueAtoms,
  cl as validateAs,
  Ya as validatePayload,
  Zo as viewerInteraction,
  ac as wheelFactor
};
