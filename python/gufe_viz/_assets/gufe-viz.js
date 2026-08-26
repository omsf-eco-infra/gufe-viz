const jr = {
  dark: {
    appBg: "#2b2b40",
    panelBg: "#33334d",
    cardBg: "#33334d",
    cardBgActive: "#1f3a63",
    cardBorder: "#45455e",
    cardBorderActive: "#4182e4",
    splitBorder: "#45455e",
    toolbarBg: "#33334d",
    toolbarBorder: "#45455e",
    tooltipBg: "#33334d",
    tooltipBorder: "#45455e",
    titleColor: "#51cbee",
    textPrimary: "#f2f3f7",
    textMuted: "#b9bccb",
    textMuted2: "#8f93a6",
    selectBg: "#2b2b40",
    selectBorder: "#45455e",
    labelBg: "#33334d",
    labelFg: "#51cbee",
    badgeBg: "#1f3a63",
    badgeFg: "#51cbee",
    switcherBg: "rgba(43,43,64,0.94)",
    btnBg: "#33334d",
    btnBgHover: "#3d3d5c",
    btnBgActive: "#4182e4",
    btnFg: "#f2f3f7",
    btnBorder: "#45455e",
    warnBg: "#3b1d1d",
    warnFg: "#ffb4b4",
    warnBorder: "#7f2a2a",
    errorFg: "#ff8080",
    viewerBg: "0x2b2b40",
    canvas2DBg: "#ffffff",
    diffUnchanged: "#64748b",
    diffChanged: "#d9a300",
    diffAdded: "#2a9d4a",
    diffRemoved: "#d62828",
    netCanvasBg: "#2b2b40",
    netNodeFill: "#33334d",
    netNodeStroke: "#45455e",
    netNodeLabel: "#f2f3f7",
    netNodeCaption: "#b9bccb",
    netInitials: "#51cbee",
    netEdgeRamp: ["#45455e", "#51cbee"],
    netEdgeLine: "#8f93a6",
    netEdgeLabel: "#f2f3f7",
    netHaloColor: "#51cbee",
    boxFill: "#1f3a63",
    boxStroke: "#45455e"
  },
  light: {
    appBg: "#ffffff",
    panelBg: "#f7f8fa",
    cardBg: "#ffffff",
    cardBgActive: "#e6effc",
    cardBorder: "#eeeeee",
    cardBorderActive: "#4182e4",
    splitBorder: "#eeeeee",
    toolbarBg: "#f7f8fa",
    toolbarBorder: "#eeeeee",
    tooltipBg: "#ffffff",
    tooltipBorder: "#cccccc",
    titleColor: "#4182e4",
    textPrimary: "#333333",
    textMuted: "#666666",
    textMuted2: "#999999",
    selectBg: "#ffffff",
    selectBorder: "#cccccc",
    labelBg: "#f7f8fa",
    labelFg: "#4182e4",
    badgeBg: "#e6effc",
    badgeFg: "#4182e4",
    switcherBg: "rgba(255,255,255,0.94)",
    btnBg: "#ffffff",
    btnBgHover: "#f0f4fb",
    btnBgActive: "#4182e4",
    btnFg: "#333333",
    btnBorder: "#cccccc",
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
    netNodeStroke: "#cccccc",
    netNodeLabel: "#333333",
    netNodeCaption: "#666666",
    netInitials: "#4182e4",
    netEdgeRamp: ["#e8eaef", "#4182e4"],
    netEdgeLine: "#999999",
    netEdgeLabel: "#333333",
    netHaloColor: "#51cbee",
    boxFill: "#e6effc",
    boxStroke: "#cccccc"
  }
};
function ds() {
  try {
    return globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches ?? !1;
  } catch {
    return !1;
  }
}
const M = ds() ? jr.dark : jr.light, X = {
  mono: "ui-monospace,SFMono-Regular,Menlo,monospace",
  /** Label captions and dense readouts. */
  tiny: "10px",
  /** The default for chrome: chips, legends, list rows. */
  small: "11px",
  /** Body text, toolbars, form controls. */
  body: "12px",
  /** Pane labels and anything heading a section of a view. */
  heading: "13px",
  /** A view's title. */
  title: "15px"
}, Ze = {
  bold: "700"
}, ce = {
  xs: "2px",
  sm: "4px",
  md: "6px",
  lg: "8px",
  xl: "10px",
  xxl: "14px"
}, mt = {
  sm: "3px",
  md: "6px",
  xl: "10px"
}, Me = {
  title: M.titleColor,
  primary: M.textPrimary,
  muted: M.textMuted,
  faint: M.textMuted2,
  error: M.errorFg
}, kt = {
  /** Where a 3D engine draws. Interface, not chemistry: it is the paper. */
  viewer: M.viewerBg,
  /** Where a 2D depiction is placed, for the same reason. */
  canvas2D: M.canvas2DBg
}, ye = {
  base: `background:${M.btnBg};color:${M.btnFg};border:1px solid ${M.btnBorder};padding:${ce.sm} 9px;font-size:${X.small};font-weight:${Ze.bold};border-radius:${mt.sm};cursor:pointer;font-family:inherit;`,
  bg: M.btnBg,
  bgHover: M.btnBgHover,
  bgActive: M.btnBgActive
}, us = `background:${M.selectBg};color:${M.textPrimary};border:1px solid ${M.selectBorder};border-radius:${mt.md};padding:${ce.sm} ${ce.lg};font-size:${X.body};cursor:pointer;font-family:inherit;`, fs = `display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;padding:9px ${ce.xxl};flex-shrink:0;background:${M.toolbarBg};border-bottom:1px solid ${M.toolbarBorder};`, Mi = {
  top: `display:flex;align-items:center;gap:${ce.xl};flex-wrap:wrap;padding:${ce.lg} ${ce.xxl};flex-shrink:0;font-size:${X.body};background:${M.toolbarBg};border-bottom:1px solid ${M.toolbarBorder};color:${M.textPrimary};`,
  bottom: `display:flex;align-items:center;gap:${ce.xl};flex-wrap:wrap;padding:${ce.lg} ${ce.xxl};flex-shrink:0;background:${M.toolbarBg};border-top:1px solid ${M.toolbarBorder};`
}, Et = `flex-shrink:0;padding:${ce.sm} ${ce.xl};font-size:${X.heading};font-weight:${Ze.bold};color:${M.labelFg};background:${M.labelBg};`, ps = `display:flex;flex-direction:column;gap:${ce.xs};padding:${ce.xxl} 18px;border-radius:${mt.xl};background:${M.cardBg};border:1px solid ${M.cardBorder};`, Ti = `position:absolute;bottom:${ce.xl};right:${ce.xl};display:flex;gap:${ce.sm};padding:${ce.sm};border-radius:${mt.md};z-index:10;background:${M.switcherBg};box-shadow:0 2px 8px rgba(0,0,0,0.25);`, zr = `font-family:${X.mono};font-size:${X.small};line-height:1.7;color:${M.textMuted};`, Ir = `font-size:${X.small};font-weight:${Ze.bold};letter-spacing:.08em;text-transform:uppercase;color:${M.textMuted2};`, hs = `font-size:${X.small};line-height:1.6;color:${M.textMuted2};`;
function j(e, t, n) {
  const r = document.createElement(e);
  return t && (r.style.cssText = t), n != null && (r.textContent = n), r;
}
function qe(e) {
  return String(e ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function he(e) {
  if (e == null) return "unknown error";
  const t = e.message;
  if (typeof t == "string" && t) return t;
  const n = String(e);
  return n === "[object Object]" ? e.name || "unknown error" : n;
}
const yt = (e) => e.toLocaleString("en-US"), lt = "-", xt = ye.base, ji = us;
function Tn(e, t, n, r) {
  if (r) {
    const s = r.get();
    e.some((a) => a.id === s) && (t = s);
  }
  const i = j("div", "display:flex;gap:4px;"), o = e.map((s) => {
    const a = j("button", xt, s.label);
    return a.title = s.title || s.label, a.onmouseover = () => {
      a.style.background = ye.bgHover;
    }, a.onmouseout = () => {
      a.style.background = t === s.id ? ye.bgActive : ye.bg;
    }, a.onclick = () => {
      i.setActive(s.id), r?.set(s.id), n(s.id);
    }, i.appendChild(a), { id: s.id, btn: a };
  });
  return i.setActive = (s) => {
    t = s, o.forEach((a) => {
      a.btn.style.background = a.id === t ? ye.bgActive : ye.bg;
    });
  }, i.setActive(t), i;
}
function yr(e, t, n, r) {
  const i = j("select", ji);
  for (const s of e) {
    const a = j("option", "", s.label);
    a.value = s.id, i.appendChild(a);
  }
  let o = t;
  if (r) {
    const s = r.get();
    e.some((a) => a.id === s) && (o = s);
  }
  return i.value = o, i.onchange = () => {
    r?.set(i.value), n(i.value);
  }, i;
}
function zi(e, t, n, r = {}) {
  let i = r.remember ? r.remember.get() : t;
  const o = j("button", xt, e);
  o.title = r.title || e, o.setAttribute("aria-pressed", String(i));
  const s = () => {
    o.style.background = i ? ye.bgActive : ye.bg, o.setAttribute("aria-pressed", String(i));
  };
  return o.onclick = () => {
    i = !i, s(), r.remember?.set(i), n(i);
  }, s(), o;
}
function de(e, t, n) {
  const r = j("span", "display:inline-flex;align-items:center;gap:5px;white-space:nowrap;");
  n && r.appendChild(
    j("span", `width:8px;height:8px;border-radius:50%;background:${n};display:inline-block;`)
  );
  const i = j("span");
  return i.innerHTML = `${qe(e)} <b style="color:${Me.primary};">${qe(t)}</b>`, r.appendChild(i), r;
}
function We(e, t) {
  const n = j("div", "", `⚠ ${t}`);
  return n.style.cssText = `position:absolute;top:${ce.xl};left:50%;transform:translateX(-50%);max-width:90%;z-index:20;padding:${ce.md} ${ce.xxl};border-radius:${mt.md};font-size:${X.body};background:${M.warnBg};color:${M.warnFg};border:1px solid ${M.warnBorder};`, e.appendChild(n), n;
}
function le(e, t = !1) {
  return j(
    "div",
    `flex:1;display:flex;align-items:center;justify-content:center;text-align:center;padding:24px;font-size:${X.heading};color:${t ? Me.error : Me.faint};`,
    e
  );
}
function Ue(e) {
  const t = j("div", fs);
  return t.className = "gufe-header", t.titleEl = j(
    "span",
    `font-weight:${Ze.bold};font-size:${X.title};color:${Me.title};letter-spacing:.02em;`,
    e
  ), t.statsEl = j(
    "div",
    `display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-left:auto;font-size:${X.small};color:${Me.muted};`
  ), t.toggleEl = j("div", "display:flex;align-items:center;align-self:center;flex-shrink:0;"), t.appendChild(t.toggleEl), t.appendChild(t.titleEl), t.appendChild(t.statsEl), t;
}
function Oe(e, t, n = !1) {
  const r = j("div", "display:flex;gap:12px;align-items:baseline;padding:5px 0;min-width:0;");
  r.appendChild(
    j(
      "span",
      `flex:0 0 128px;font-size:${X.tiny};font-weight:${Ze.bold};letter-spacing:.08em;text-transform:uppercase;color:${Me.faint};`,
      e
    )
  );
  const i = j(
    "span",
    `flex:1;min-width:0;user-select:text;cursor:text;overflow-wrap:anywhere;color:${Me.primary};` + (n ? `font-family:${X.mono};font-size:${X.small};` : `font-size:${X.body};`),
    t
  );
  return i.title = t, r.appendChild(i), r;
}
function Pt(e) {
  return j(
    "span",
    `padding:1px 7px;border-radius:${mt.xl};font-size:${X.tiny};font-weight:${Ze.bold};letter-spacing:.04em;white-space:nowrap;background:${M.badgeBg};color:${M.badgeFg};`,
    e
  );
}
function Nn() {
  return j("div", ps);
}
function Ii() {
  const e = j("div", "flex:1;position:relative;min-height:0;min-width:0;"), t = j("div", "position:absolute;inset:0;");
  return t.dataset.gufeViewer = "", e.appendChild(t), { wrap: e, container: t };
}
const ms = !1;
function gs() {
  const e = j("span", "display:inline-flex;width:14px;height:14px;");
  return e.innerHTML = '<svg viewBox="0 0 748 743" width="14" height="14" aria-hidden="true" focusable="false"><path fill="#8A2283" d="M267.99 102.211C119.99 102.211 0 222.191 0 370.211C0 452.061 36.71 525.321 94.54 574.491L327.37 108.831C308.27 104.501 288.4 102.211 267.99 102.211Z"/><path fill="#00BDAA" d="M515.66 267.67C528.75 299.25 535.99 333.89 535.99 370.21C535.99 512.26 425.47 628.47 285.73 637.6H702.44L380.64 0L63.6396 637.6H267.99V267.67H515.66Z"/><path fill="#8A2283" d="M516.81 267.67L702.08 638.2H267.99V742.06H747.62V267.66H516.81V267.67Z"/></svg>', e;
}
const ys = {
  /** The OpenFE mark, as `docs.openfree.energy` uses it. */
  openFreeEnergy: gs
}, vs = ys.openFreeEnergy;
function $s(e, t, n = {}) {
  let r = n.remember ? n.remember.get() : n.open ?? ms, i = !1;
  const o = j("div", "flex-shrink:0;"), s = j("button", `${ye.base}display:inline-flex;align-items:center;gap:${ce.md};padding:${ce.sm} ${ce.lg};`);
  s.appendChild(vs()), s.setAttribute("aria-label", n.label || "Toggle menu");
  const a = () => {
    r && !i && (i = !0, o.appendChild(t())), o.style.display = r ? "" : "none", s.style.background = r ? ye.bgActive : ye.bg, s.setAttribute("aria-expanded", String(r));
  }, c = (h) => {
    h !== r && (r = h, a(), n.remember?.set(r), n.onToggle?.(r));
  };
  return s.onclick = () => c(!r), s.onmouseover = () => {
    s.style.background = r ? ye.bgActive : ye.bgHover;
  }, s.onmouseout = () => {
    s.style.background = r ? ye.bgActive : ye.bg;
  }, e.toggleEl.style.marginRight = "2px", e.toggleEl.appendChild(s), a(), {
    panel: o,
    isOpen: () => r,
    setOpen: c
  };
}
const bs = ["debug", "gufe-debug"], ws = "debug", _s = "GUFE_VIZ_DEBUG";
function Ss() {
  return !!globalThis[_s];
}
function Cs() {
  try {
    const e = globalThis.location?.search;
    if (!e) return !1;
    const t = new URLSearchParams(e);
    return bs.some((n) => t.has(n));
  } catch {
    return !1;
  }
}
function ks(e) {
  return e?.hasAttribute?.(ws) ? !0 : Ss() || Cs();
}
function Es(e) {
  try {
    return JSON.stringify(e, null, 2) ?? String(e);
  } catch (t) {
    return `<could not be stringified: ${he(t)}>`;
  }
}
function xs(e, t, n) {
  if (!ks(n)) return;
  const r = Es(t), i = t?.type, o = `[gufe-viz] ${e}${typeof i == "string" ? ` ${i}` : ""} (${r.length} chars)`, s = typeof console.groupCollapsed == "function";
  s ? console.groupCollapsed(o) : console.log(o), console.log(r), console.log(t), s && console.groupEnd?.();
}
const Ps = 150;
class Pe extends HTMLElement {
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
    this.style.display = "block", this.style.width = this.style.width || "100%", this.style.height = this.style.height || "100%", this.style.background = M.appBg, this.style.color = M.textPrimary, this.style.fontFamily = "'Inter',system-ui,sans-serif", typeof ResizeObserver < "u" && !this.#n && (this.#n = new ResizeObserver(() => {
      this.#o && clearTimeout(this.#o), this.#o = setTimeout(() => this.#e?.onResize?.(), Ps);
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
      `width:100%;height:100%;display:flex;flex-direction:column;overflow:hidden;background:${M.appBg};`
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
      t.appendChild(le(this.placeholder()));
      return;
    }
    let r;
    try {
      r = this.renderView(t, this.#t);
    } catch (i) {
      this.#l(t, n, i);
      return;
    }
    r instanceof Promise ? r.then(
      (i) => this.#c(i, n),
      (i) => this.#l(t, n, i)
    ) : this.#c(r, n);
  }
  /** Take ownership of a view's handle, unless it belongs to a dead render. */
  #c(t, n) {
    if (n !== this.#i || !this.isConnected) {
      try {
        t?.cleanup?.();
      } catch (r) {
        console.warn("[gufe-viz] cleanup of a superseded view failed:", r);
      }
      return;
    }
    this.#e = t || null;
  }
  #l(t, n, r) {
    n === this.#i && (console.warn("[gufe-viz] render failed:", r), t.replaceChildren(le(`Failed to render: ${he(r)}`, !0)));
  }
  /** Force a resize pass - for hosts that know they resized us. */
  resize() {
    this.#e?.onResize?.();
  }
}
function Ae(e, t) {
  typeof customElements > "u" || customElements.get(e) || customElements.define(e, t);
}
function As(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Rt = { exports: {} }, Gn = {}, ze = {}, Ke = {}, Wn = {}, Jn = {}, Yn = {}, Dr;
function Fn() {
  return Dr || (Dr = 1, (function(e) {
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
    class r extends t {
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
        return (u = this._str) !== null && u !== void 0 ? u : this._str = this._items.reduce((m, C) => `${m}${C}`, "");
      }
      get names() {
        var u;
        return (u = this._names) !== null && u !== void 0 ? u : this._names = this._items.reduce((m, C) => (C instanceof n && (m[C.str] = (m[C.str] || 0) + 1), m), {});
      }
    }
    e._Code = r, e.nil = new r("");
    function i(v, ...u) {
      const m = [v[0]];
      let C = 0;
      for (; C < u.length; )
        a(m, u[C]), m.push(v[++C]);
      return new r(m);
    }
    e._ = i;
    const o = new r("+");
    function s(v, ...u) {
      const m = [$(v[0])];
      let C = 0;
      for (; C < u.length; )
        m.push(o), a(m, u[C]), m.push(o, $(v[++C]));
      return c(m), new r(m);
    }
    e.str = s;
    function a(v, u) {
      u instanceof r ? v.push(...u._items) : u instanceof n ? v.push(u) : v.push(b(u));
    }
    e.addCodeArg = a;
    function c(v) {
      let u = 1;
      for (; u < v.length - 1; ) {
        if (v[u] === o) {
          const m = h(v[u - 1], v[u + 1]);
          if (m !== void 0) {
            v.splice(u - 1, 3, m);
            continue;
          }
          v[u++] = "+";
        }
        u++;
      }
    }
    function h(v, u) {
      if (u === '""')
        return v;
      if (v === '""')
        return u;
      if (typeof v == "string")
        return u instanceof n || v[v.length - 1] !== '"' ? void 0 : typeof u != "string" ? `${v.slice(0, -1)}${u}"` : u[0] === '"' ? v.slice(0, -1) + u.slice(1) : void 0;
      if (typeof u == "string" && u[0] === '"' && !(v instanceof n))
        return `"${v}${u.slice(1)}`;
    }
    function p(v, u) {
      return u.emptyStr() ? v : v.emptyStr() ? u : s`${v}${u}`;
    }
    e.strConcat = p;
    function b(v) {
      return typeof v == "number" || typeof v == "boolean" || v === null ? v : $(Array.isArray(v) ? v.join(",") : v);
    }
    function y(v) {
      return new r($(v));
    }
    e.stringify = y;
    function $(v) {
      return JSON.stringify(v).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    e.safeStringify = $;
    function S(v) {
      return typeof v == "string" && e.IDENTIFIER.test(v) ? new r(`.${v}`) : i`[${v}]`;
    }
    e.getProperty = S;
    function w(v) {
      if (typeof v == "string" && e.IDENTIFIER.test(v))
        return new r(`${v}`);
      throw new Error(`CodeGen: invalid export name: ${v}, use explicit $id name mapping`);
    }
    e.getEsmExportName = w;
    function f(v) {
      return new r(v.toString());
    }
    e.regexpCode = f;
  })(Yn)), Yn;
}
var Xn = {}, qr;
function Vr() {
  return qr || (qr = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0;
    const t = /* @__PURE__ */ Fn();
    class n extends Error {
      constructor(h) {
        super(`CodeGen: "code" for ${h} not defined`), this.value = h.value;
      }
    }
    var r;
    (function(c) {
      c[c.Started = 0] = "Started", c[c.Completed = 1] = "Completed";
    })(r || (e.UsedValueState = r = {})), e.varKinds = {
      const: new t.Name("const"),
      let: new t.Name("let"),
      var: new t.Name("var")
    };
    class i {
      constructor({ prefixes: h, parent: p } = {}) {
        this._names = {}, this._prefixes = h, this._parent = p;
      }
      toName(h) {
        return h instanceof t.Name ? h : this.name(h);
      }
      name(h) {
        return new t.Name(this._newName(h));
      }
      _newName(h) {
        const p = this._names[h] || this._nameGroup(h);
        return `${h}${p.index++}`;
      }
      _nameGroup(h) {
        var p, b;
        if (!((b = (p = this._parent) === null || p === void 0 ? void 0 : p._prefixes) === null || b === void 0) && b.has(h) || this._prefixes && !this._prefixes.has(h))
          throw new Error(`CodeGen: prefix "${h}" is not allowed in this scope`);
        return this._names[h] = { prefix: h, index: 0 };
      }
    }
    e.Scope = i;
    class o extends t.Name {
      constructor(h, p) {
        super(p), this.prefix = h;
      }
      setValue(h, { property: p, itemIndex: b }) {
        this.value = h, this.scopePath = (0, t._)`.${new t.Name(p)}[${b}]`;
      }
    }
    e.ValueScopeName = o;
    const s = (0, t._)`\n`;
    class a extends i {
      constructor(h) {
        super(h), this._values = {}, this._scope = h.scope, this.opts = { ...h, _n: h.lines ? s : t.nil };
      }
      get() {
        return this._scope;
      }
      name(h) {
        return new o(h, this._newName(h));
      }
      value(h, p) {
        var b;
        if (p.ref === void 0)
          throw new Error("CodeGen: ref must be passed in value");
        const y = this.toName(h), { prefix: $ } = y, S = (b = p.key) !== null && b !== void 0 ? b : p.ref;
        let w = this._values[$];
        if (w) {
          const u = w.get(S);
          if (u)
            return u;
        } else
          w = this._values[$] = /* @__PURE__ */ new Map();
        w.set(S, y);
        const f = this._scope[$] || (this._scope[$] = []), v = f.length;
        return f[v] = p.ref, y.setValue(p, { property: $, itemIndex: v }), y;
      }
      getValue(h, p) {
        const b = this._values[h];
        if (b)
          return b.get(p);
      }
      scopeRefs(h, p = this._values) {
        return this._reduceValues(p, (b) => {
          if (b.scopePath === void 0)
            throw new Error(`CodeGen: name "${b}" has no value`);
          return (0, t._)`${h}${b.scopePath}`;
        });
      }
      scopeCode(h = this._values, p, b) {
        return this._reduceValues(h, (y) => {
          if (y.value === void 0)
            throw new Error(`CodeGen: name "${y}" has no value`);
          return y.value.code;
        }, p, b);
      }
      _reduceValues(h, p, b = {}, y) {
        let $ = t.nil;
        for (const S in h) {
          const w = h[S];
          if (!w)
            continue;
          const f = b[S] = b[S] || /* @__PURE__ */ new Map();
          w.forEach((v) => {
            if (f.has(v))
              return;
            f.set(v, r.Started);
            let u = p(v);
            if (u) {
              const m = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
              $ = (0, t._)`${$}${m} ${v} = ${u};${this.opts._n}`;
            } else if (u = y?.(v))
              $ = (0, t._)`${$}${u}${this.opts._n}`;
            else
              throw new n(v);
            f.set(v, r.Completed);
          });
        }
        return $;
      }
    }
    e.ValueScope = a;
  })(Xn)), Xn;
}
var Lr;
function ee() {
  return Lr || (Lr = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
    const t = /* @__PURE__ */ Fn(), n = /* @__PURE__ */ Vr();
    var r = /* @__PURE__ */ Fn();
    Object.defineProperty(e, "_", { enumerable: !0, get: function() {
      return r._;
    } }), Object.defineProperty(e, "str", { enumerable: !0, get: function() {
      return r.str;
    } }), Object.defineProperty(e, "strConcat", { enumerable: !0, get: function() {
      return r.strConcat;
    } }), Object.defineProperty(e, "nil", { enumerable: !0, get: function() {
      return r.nil;
    } }), Object.defineProperty(e, "getProperty", { enumerable: !0, get: function() {
      return r.getProperty;
    } }), Object.defineProperty(e, "stringify", { enumerable: !0, get: function() {
      return r.stringify;
    } }), Object.defineProperty(e, "regexpCode", { enumerable: !0, get: function() {
      return r.regexpCode;
    } }), Object.defineProperty(e, "Name", { enumerable: !0, get: function() {
      return r.Name;
    } });
    var i = /* @__PURE__ */ Vr();
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
    class o {
      optimizeNodes() {
        return this;
      }
      optimizeNames(_, x) {
        return this;
      }
    }
    class s extends o {
      constructor(_, x, z) {
        super(), this.varKind = _, this.name = x, this.rhs = z;
      }
      render({ es5: _, _n: x }) {
        const z = _ ? n.varKinds.var : this.varKind, W = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
        return `${z} ${this.name}${W};` + x;
      }
      optimizeNames(_, x) {
        if (_[this.name.str])
          return this.rhs && (this.rhs = G(this.rhs, _, x)), this;
      }
      get names() {
        return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
      }
    }
    class a extends o {
      constructor(_, x, z) {
        super(), this.lhs = _, this.rhs = x, this.sideEffects = z;
      }
      render({ _n: _ }) {
        return `${this.lhs} = ${this.rhs};` + _;
      }
      optimizeNames(_, x) {
        if (!(this.lhs instanceof t.Name && !_[this.lhs.str] && !this.sideEffects))
          return this.rhs = G(this.rhs, _, x), this;
      }
      get names() {
        const _ = this.lhs instanceof t.Name ? {} : { ...this.lhs.names };
        return I(_, this.rhs);
      }
    }
    class c extends a {
      constructor(_, x, z, W) {
        super(_, z, W), this.op = x;
      }
      render({ _n: _ }) {
        return `${this.lhs} ${this.op}= ${this.rhs};` + _;
      }
    }
    class h extends o {
      constructor(_) {
        super(), this.label = _, this.names = {};
      }
      render({ _n: _ }) {
        return `${this.label}:` + _;
      }
    }
    class p extends o {
      constructor(_) {
        super(), this.label = _, this.names = {};
      }
      render({ _n: _ }) {
        return `break${this.label ? ` ${this.label}` : ""};` + _;
      }
    }
    class b extends o {
      constructor(_) {
        super(), this.error = _;
      }
      render({ _n: _ }) {
        return `throw ${this.error};` + _;
      }
      get names() {
        return this.error.names;
      }
    }
    class y extends o {
      constructor(_) {
        super(), this.code = _;
      }
      render({ _n: _ }) {
        return `${this.code};` + _;
      }
      optimizeNodes() {
        return `${this.code}` ? this : void 0;
      }
      optimizeNames(_, x) {
        return this.code = G(this.code, _, x), this;
      }
      get names() {
        return this.code instanceof t._CodeOrName ? this.code.names : {};
      }
    }
    class $ extends o {
      constructor(_ = []) {
        super(), this.nodes = _;
      }
      render(_) {
        return this.nodes.reduce((x, z) => x + z.render(_), "");
      }
      optimizeNodes() {
        const { nodes: _ } = this;
        let x = _.length;
        for (; x--; ) {
          const z = _[x].optimizeNodes();
          Array.isArray(z) ? _.splice(x, 1, ...z) : z ? _[x] = z : _.splice(x, 1);
        }
        return _.length > 0 ? this : void 0;
      }
      optimizeNames(_, x) {
        const { nodes: z } = this;
        let W = z.length;
        for (; W--; ) {
          const K = z[W];
          K.optimizeNames(_, x) || (Q(_, K.names), z.splice(W, 1));
        }
        return z.length > 0 ? this : void 0;
      }
      get names() {
        return this.nodes.reduce((_, x) => O(_, x.names), {});
      }
    }
    class S extends $ {
      render(_) {
        return "{" + _._n + super.render(_) + "}" + _._n;
      }
    }
    class w extends $ {
    }
    class f extends S {
    }
    f.kind = "else";
    class v extends S {
      constructor(_, x) {
        super(x), this.condition = _;
      }
      render(_) {
        let x = `if(${this.condition})` + super.render(_);
        return this.else && (x += "else " + this.else.render(_)), x;
      }
      optimizeNodes() {
        super.optimizeNodes();
        const _ = this.condition;
        if (_ === !0)
          return this.nodes;
        let x = this.else;
        if (x) {
          const z = x.optimizeNodes();
          x = this.else = Array.isArray(z) ? new f(z) : z;
        }
        if (x)
          return _ === !1 ? x instanceof v ? x : x.nodes : this.nodes.length ? this : new v(te(_), x instanceof v ? [x] : x.nodes);
        if (!(_ === !1 || !this.nodes.length))
          return this;
      }
      optimizeNames(_, x) {
        var z;
        if (this.else = (z = this.else) === null || z === void 0 ? void 0 : z.optimizeNames(_, x), !!(super.optimizeNames(_, x) || this.else))
          return this.condition = G(this.condition, _, x), this;
      }
      get names() {
        const _ = super.names;
        return I(_, this.condition), this.else && O(_, this.else.names), _;
      }
    }
    v.kind = "if";
    class u extends S {
    }
    u.kind = "for";
    class m extends u {
      constructor(_) {
        super(), this.iteration = _;
      }
      render(_) {
        return `for(${this.iteration})` + super.render(_);
      }
      optimizeNames(_, x) {
        if (super.optimizeNames(_, x))
          return this.iteration = G(this.iteration, _, x), this;
      }
      get names() {
        return O(super.names, this.iteration.names);
      }
    }
    class C extends u {
      constructor(_, x, z, W) {
        super(), this.varKind = _, this.name = x, this.from = z, this.to = W;
      }
      render(_) {
        const x = _.es5 ? n.varKinds.var : this.varKind, { name: z, from: W, to: K } = this;
        return `for(${x} ${z}=${W}; ${z}<${K}; ${z}++)` + super.render(_);
      }
      get names() {
        const _ = I(super.names, this.from);
        return I(_, this.to);
      }
    }
    class l extends u {
      constructor(_, x, z, W) {
        super(), this.loop = _, this.varKind = x, this.name = z, this.iterable = W;
      }
      render(_) {
        return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(_);
      }
      optimizeNames(_, x) {
        if (super.optimizeNames(_, x))
          return this.iterable = G(this.iterable, _, x), this;
      }
      get names() {
        return O(super.names, this.iterable.names);
      }
    }
    class d extends S {
      constructor(_, x, z) {
        super(), this.name = _, this.args = x, this.async = z;
      }
      render(_) {
        return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(_);
      }
    }
    d.kind = "func";
    class g extends $ {
      render(_) {
        return "return " + super.render(_);
      }
    }
    g.kind = "return";
    class k extends S {
      render(_) {
        let x = "try" + super.render(_);
        return this.catch && (x += this.catch.render(_)), this.finally && (x += this.finally.render(_)), x;
      }
      optimizeNodes() {
        var _, x;
        return super.optimizeNodes(), (_ = this.catch) === null || _ === void 0 || _.optimizeNodes(), (x = this.finally) === null || x === void 0 || x.optimizeNodes(), this;
      }
      optimizeNames(_, x) {
        var z, W;
        return super.optimizeNames(_, x), (z = this.catch) === null || z === void 0 || z.optimizeNames(_, x), (W = this.finally) === null || W === void 0 || W.optimizeNames(_, x), this;
      }
      get names() {
        const _ = super.names;
        return this.catch && O(_, this.catch.names), this.finally && O(_, this.finally.names), _;
      }
    }
    class E extends S {
      constructor(_) {
        super(), this.error = _;
      }
      render(_) {
        return `catch(${this.error})` + super.render(_);
      }
    }
    E.kind = "catch";
    class P extends S {
      render(_) {
        return "finally" + super.render(_);
      }
    }
    P.kind = "finally";
    class F {
      constructor(_, x = {}) {
        this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ...x, _n: x.lines ? `
` : "" }, this._extScope = _, this._scope = new n.Scope({ parent: _ }), this._nodes = [new w()];
      }
      toString() {
        return this._root.render(this.opts);
      }
      // returns unique name in the internal scope
      name(_) {
        return this._scope.name(_);
      }
      // reserves unique name in the external scope
      scopeName(_) {
        return this._extScope.name(_);
      }
      // reserves unique name in the external scope and assigns value to it
      scopeValue(_, x) {
        const z = this._extScope.value(_, x);
        return (this._values[z.prefix] || (this._values[z.prefix] = /* @__PURE__ */ new Set())).add(z), z;
      }
      getScopeValue(_, x) {
        return this._extScope.getValue(_, x);
      }
      // return code that assigns values in the external scope to the names that are used internally
      // (same names that were returned by gen.scopeName or gen.scopeValue)
      scopeRefs(_) {
        return this._extScope.scopeRefs(_, this._values);
      }
      scopeCode() {
        return this._extScope.scopeCode(this._values);
      }
      _def(_, x, z, W) {
        const K = this._scope.toName(x);
        return z !== void 0 && W && (this._constants[K.str] = z), this._leafNode(new s(_, K, z)), K;
      }
      // `const` declaration (`var` in es5 mode)
      const(_, x, z) {
        return this._def(n.varKinds.const, _, x, z);
      }
      // `let` declaration with optional assignment (`var` in es5 mode)
      let(_, x, z) {
        return this._def(n.varKinds.let, _, x, z);
      }
      // `var` declaration with optional assignment
      var(_, x, z) {
        return this._def(n.varKinds.var, _, x, z);
      }
      // assignment code
      assign(_, x, z) {
        return this._leafNode(new a(_, x, z));
      }
      // `+=` code
      add(_, x) {
        return this._leafNode(new c(_, e.operators.ADD, x));
      }
      // appends passed SafeExpr to code or executes Block
      code(_) {
        return typeof _ == "function" ? _() : _ !== t.nil && this._leafNode(new y(_)), this;
      }
      // returns code for object literal for the passed argument list of key-value pairs
      object(..._) {
        const x = ["{"];
        for (const [z, W] of _)
          x.length > 1 && x.push(","), x.push(z), (z !== W || this.opts.es5) && (x.push(":"), (0, t.addCodeArg)(x, W));
        return x.push("}"), new t._Code(x);
      }
      // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
      if(_, x, z) {
        if (this._blockNode(new v(_)), x && z)
          this.code(x).else().code(z).endIf();
        else if (x)
          this.code(x).endIf();
        else if (z)
          throw new Error('CodeGen: "else" body without "then" body');
        return this;
      }
      // `else if` clause - invalid without `if` or after `else` clauses
      elseIf(_) {
        return this._elseNode(new v(_));
      }
      // `else` clause - only valid after `if` or `else if` clauses
      else() {
        return this._elseNode(new f());
      }
      // end `if` statement (needed if gen.if was used only with condition)
      endIf() {
        return this._endBlockNode(v, f);
      }
      _for(_, x) {
        return this._blockNode(_), x && this.code(x).endFor(), this;
      }
      // a generic `for` clause (or statement if `forBody` is passed)
      for(_, x) {
        return this._for(new m(_), x);
      }
      // `for` statement for a range of values
      forRange(_, x, z, W, K = this.opts.es5 ? n.varKinds.var : n.varKinds.let) {
        const Z = this._scope.toName(_);
        return this._for(new C(K, Z, x, z), () => W(Z));
      }
      // `for-of` statement (in es5 mode replace with a normal for loop)
      forOf(_, x, z, W = n.varKinds.const) {
        const K = this._scope.toName(_);
        if (this.opts.es5) {
          const Z = x instanceof t.Name ? x : this.var("_arr", x);
          return this.forRange("_i", 0, (0, t._)`${Z}.length`, (ie) => {
            this.var(K, (0, t._)`${Z}[${ie}]`), z(K);
          });
        }
        return this._for(new l("of", W, K, x), () => z(K));
      }
      // `for-in` statement.
      // With option `ownProperties` replaced with a `for-of` loop for object keys
      forIn(_, x, z, W = this.opts.es5 ? n.varKinds.var : n.varKinds.const) {
        if (this.opts.ownProperties)
          return this.forOf(_, (0, t._)`Object.keys(${x})`, z);
        const K = this._scope.toName(_);
        return this._for(new l("in", W, K, x), () => z(K));
      }
      // end `for` loop
      endFor() {
        return this._endBlockNode(u);
      }
      // `label` statement
      label(_) {
        return this._leafNode(new h(_));
      }
      // `break` statement
      break(_) {
        return this._leafNode(new p(_));
      }
      // `return` statement
      return(_) {
        const x = new g();
        if (this._blockNode(x), this.code(_), x.nodes.length !== 1)
          throw new Error('CodeGen: "return" should have one node');
        return this._endBlockNode(g);
      }
      // `try` statement
      try(_, x, z) {
        if (!x && !z)
          throw new Error('CodeGen: "try" without "catch" and "finally"');
        const W = new k();
        if (this._blockNode(W), this.code(_), x) {
          const K = this.name("e");
          this._currNode = W.catch = new E(K), x(K);
        }
        return z && (this._currNode = W.finally = new P(), this.code(z)), this._endBlockNode(E, P);
      }
      // `throw` statement
      throw(_) {
        return this._leafNode(new b(_));
      }
      // start self-balancing block
      block(_, x) {
        return this._blockStarts.push(this._nodes.length), _ && this.code(_).endBlock(x), this;
      }
      // end the current self-balancing block
      endBlock(_) {
        const x = this._blockStarts.pop();
        if (x === void 0)
          throw new Error("CodeGen: not in self-balancing block");
        const z = this._nodes.length - x;
        if (z < 0 || _ !== void 0 && z !== _)
          throw new Error(`CodeGen: wrong number of nodes: ${z} vs ${_} expected`);
        return this._nodes.length = x, this;
      }
      // `function` heading (or definition if funcBody is passed)
      func(_, x = t.nil, z, W) {
        return this._blockNode(new d(_, x, z)), W && this.code(W).endFunc(), this;
      }
      // end function definition
      endFunc() {
        return this._endBlockNode(d);
      }
      optimize(_ = 1) {
        for (; _-- > 0; )
          this._root.optimizeNodes(), this._root.optimizeNames(this._root.names, this._constants);
      }
      _leafNode(_) {
        return this._currNode.nodes.push(_), this;
      }
      _blockNode(_) {
        this._currNode.nodes.push(_), this._nodes.push(_);
      }
      _endBlockNode(_, x) {
        const z = this._currNode;
        if (z instanceof _ || x && z instanceof x)
          return this._nodes.pop(), this;
        throw new Error(`CodeGen: not in block "${x ? `${_.kind}/${x.kind}` : _.kind}"`);
      }
      _elseNode(_) {
        const x = this._currNode;
        if (!(x instanceof v))
          throw new Error('CodeGen: "else" without "if"');
        return this._currNode = x.else = _, this;
      }
      get _root() {
        return this._nodes[0];
      }
      get _currNode() {
        const _ = this._nodes;
        return _[_.length - 1];
      }
      set _currNode(_) {
        const x = this._nodes;
        x[x.length - 1] = _;
      }
    }
    e.CodeGen = F;
    function O(R, _) {
      for (const x in _)
        R[x] = (R[x] || 0) + (_[x] || 0);
      return R;
    }
    function I(R, _) {
      return _ instanceof t._CodeOrName ? O(R, _.names) : R;
    }
    function G(R, _, x) {
      if (R instanceof t.Name)
        return z(R);
      if (!W(R))
        return R;
      return new t._Code(R._items.reduce((K, Z) => (Z instanceof t.Name && (Z = z(Z)), Z instanceof t._Code ? K.push(...Z._items) : K.push(Z), K), []));
      function z(K) {
        const Z = x[K.str];
        return Z === void 0 || _[K.str] !== 1 ? K : (delete _[K.str], Z);
      }
      function W(K) {
        return K instanceof t._Code && K._items.some((Z) => Z instanceof t.Name && _[Z.str] === 1 && x[Z.str] !== void 0);
      }
    }
    function Q(R, _) {
      for (const x in _)
        R[x] = (R[x] || 0) - (_[x] || 0);
    }
    function te(R) {
      return typeof R == "boolean" || typeof R == "number" || R === null ? !R : (0, t._)`!${D(R)}`;
    }
    e.not = te;
    const H = A(e.operators.AND);
    function B(...R) {
      return R.reduce(H);
    }
    e.and = B;
    const Y = A(e.operators.OR);
    function q(...R) {
      return R.reduce(Y);
    }
    e.or = q;
    function A(R) {
      return (_, x) => _ === t.nil ? x : x === t.nil ? _ : (0, t._)`${D(_)} ${R} ${D(x)}`;
    }
    function D(R) {
      return R instanceof t.Name ? R : (0, t._)`(${R})`;
    }
  })(Jn)), Jn;
}
var ne = {}, Br;
function oe() {
  if (Br) return ne;
  Br = 1, Object.defineProperty(ne, "__esModule", { value: !0 }), ne.checkStrictMode = ne.getErrorPath = ne.Type = ne.useFunc = ne.setEvaluated = ne.evaluatedPropsToName = ne.mergeEvaluated = ne.eachItem = ne.unescapeJsonPointer = ne.escapeJsonPointer = ne.escapeFragment = ne.unescapeFragment = ne.schemaRefOrVal = ne.schemaHasRulesButRef = ne.schemaHasRules = ne.checkUnknownRules = ne.alwaysValidSchema = ne.toHash = void 0;
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ Fn();
  function n(l) {
    const d = {};
    for (const g of l)
      d[g] = !0;
    return d;
  }
  ne.toHash = n;
  function r(l, d) {
    return typeof d == "boolean" ? d : Object.keys(d).length === 0 ? !0 : (i(l, d), !o(d, l.self.RULES.all));
  }
  ne.alwaysValidSchema = r;
  function i(l, d = l.schema) {
    const { opts: g, self: k } = l;
    if (!g.strictSchema || typeof d == "boolean")
      return;
    const E = k.RULES.keywords;
    for (const P in d)
      E[P] || C(l, `unknown keyword: "${P}"`);
  }
  ne.checkUnknownRules = i;
  function o(l, d) {
    if (typeof l == "boolean")
      return !l;
    for (const g in l)
      if (d[g])
        return !0;
    return !1;
  }
  ne.schemaHasRules = o;
  function s(l, d) {
    if (typeof l == "boolean")
      return !l;
    for (const g in l)
      if (g !== "$ref" && d.all[g])
        return !0;
    return !1;
  }
  ne.schemaHasRulesButRef = s;
  function a({ topSchemaRef: l, schemaPath: d }, g, k, E) {
    if (!E) {
      if (typeof g == "number" || typeof g == "boolean")
        return g;
      if (typeof g == "string")
        return (0, e._)`${g}`;
    }
    return (0, e._)`${l}${d}${(0, e.getProperty)(k)}`;
  }
  ne.schemaRefOrVal = a;
  function c(l) {
    return b(decodeURIComponent(l));
  }
  ne.unescapeFragment = c;
  function h(l) {
    return encodeURIComponent(p(l));
  }
  ne.escapeFragment = h;
  function p(l) {
    return typeof l == "number" ? `${l}` : l.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  ne.escapeJsonPointer = p;
  function b(l) {
    return l.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  ne.unescapeJsonPointer = b;
  function y(l, d) {
    if (Array.isArray(l))
      for (const g of l)
        d(g);
    else
      d(l);
  }
  ne.eachItem = y;
  function $({ mergeNames: l, mergeToName: d, mergeValues: g, resultToName: k }) {
    return (E, P, F, O) => {
      const I = F === void 0 ? P : F instanceof e.Name ? (P instanceof e.Name ? l(E, P, F) : d(E, P, F), F) : P instanceof e.Name ? (d(E, F, P), P) : g(P, F);
      return O === e.Name && !(I instanceof e.Name) ? k(E, I) : I;
    };
  }
  ne.mergeEvaluated = {
    props: $({
      mergeNames: (l, d, g) => l.if((0, e._)`${g} !== true && ${d} !== undefined`, () => {
        l.if((0, e._)`${d} === true`, () => l.assign(g, !0), () => l.assign(g, (0, e._)`${g} || {}`).code((0, e._)`Object.assign(${g}, ${d})`));
      }),
      mergeToName: (l, d, g) => l.if((0, e._)`${g} !== true`, () => {
        d === !0 ? l.assign(g, !0) : (l.assign(g, (0, e._)`${g} || {}`), w(l, g, d));
      }),
      mergeValues: (l, d) => l === !0 ? !0 : { ...l, ...d },
      resultToName: S
    }),
    items: $({
      mergeNames: (l, d, g) => l.if((0, e._)`${g} !== true && ${d} !== undefined`, () => l.assign(g, (0, e._)`${d} === true ? true : ${g} > ${d} ? ${g} : ${d}`)),
      mergeToName: (l, d, g) => l.if((0, e._)`${g} !== true`, () => l.assign(g, d === !0 ? !0 : (0, e._)`${g} > ${d} ? ${g} : ${d}`)),
      mergeValues: (l, d) => l === !0 ? !0 : Math.max(l, d),
      resultToName: (l, d) => l.var("items", d)
    })
  };
  function S(l, d) {
    if (d === !0)
      return l.var("props", !0);
    const g = l.var("props", (0, e._)`{}`);
    return d !== void 0 && w(l, g, d), g;
  }
  ne.evaluatedPropsToName = S;
  function w(l, d, g) {
    Object.keys(g).forEach((k) => l.assign((0, e._)`${d}${(0, e.getProperty)(k)}`, !0));
  }
  ne.setEvaluated = w;
  const f = {};
  function v(l, d) {
    return l.scopeValue("func", {
      ref: d,
      code: f[d.code] || (f[d.code] = new t._Code(d.code))
    });
  }
  ne.useFunc = v;
  var u;
  (function(l) {
    l[l.Num = 0] = "Num", l[l.Str = 1] = "Str";
  })(u || (ne.Type = u = {}));
  function m(l, d, g) {
    if (l instanceof e.Name) {
      const k = d === u.Num;
      return g ? k ? (0, e._)`"[" + ${l} + "]"` : (0, e._)`"['" + ${l} + "']"` : k ? (0, e._)`"/" + ${l}` : (0, e._)`"/" + ${l}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return g ? (0, e.getProperty)(l).toString() : "/" + p(l);
  }
  ne.getErrorPath = m;
  function C(l, d, g = l.opts.strictSchema) {
    if (g) {
      if (d = `strict mode: ${d}`, g === !0)
        throw new Error(d);
      l.self.logger.warn(d);
    }
  }
  return ne.checkStrictMode = C, ne;
}
var Nt = {}, Ur;
function Re() {
  if (Ur) return Nt;
  Ur = 1, Object.defineProperty(Nt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = {
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
  return Nt.default = t, Nt;
}
var Kr;
function jn() {
  return Kr || (Kr = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
    const t = /* @__PURE__ */ ee(), n = /* @__PURE__ */ oe(), r = /* @__PURE__ */ Re();
    e.keywordError = {
      message: ({ keyword: f }) => (0, t.str)`must pass "${f}" keyword validation`
    }, e.keyword$DataError = {
      message: ({ keyword: f, schemaType: v }) => v ? (0, t.str)`"${f}" keyword must be ${v} ($data)` : (0, t.str)`"${f}" keyword is invalid ($data)`
    };
    function i(f, v = e.keywordError, u, m) {
      const { it: C } = f, { gen: l, compositeRule: d, allErrors: g } = C, k = b(f, v, u);
      m ?? (d || g) ? c(l, k) : h(C, (0, t._)`[${k}]`);
    }
    e.reportError = i;
    function o(f, v = e.keywordError, u) {
      const { it: m } = f, { gen: C, compositeRule: l, allErrors: d } = m, g = b(f, v, u);
      c(C, g), l || d || h(m, r.default.vErrors);
    }
    e.reportExtraError = o;
    function s(f, v) {
      f.assign(r.default.errors, v), f.if((0, t._)`${r.default.vErrors} !== null`, () => f.if(v, () => f.assign((0, t._)`${r.default.vErrors}.length`, v), () => f.assign(r.default.vErrors, null)));
    }
    e.resetErrorsCount = s;
    function a({ gen: f, keyword: v, schemaValue: u, data: m, errsCount: C, it: l }) {
      if (C === void 0)
        throw new Error("ajv implementation error");
      const d = f.name("err");
      f.forRange("i", C, r.default.errors, (g) => {
        f.const(d, (0, t._)`${r.default.vErrors}[${g}]`), f.if((0, t._)`${d}.instancePath === undefined`, () => f.assign((0, t._)`${d}.instancePath`, (0, t.strConcat)(r.default.instancePath, l.errorPath))), f.assign((0, t._)`${d}.schemaPath`, (0, t.str)`${l.errSchemaPath}/${v}`), l.opts.verbose && (f.assign((0, t._)`${d}.schema`, u), f.assign((0, t._)`${d}.data`, m));
      });
    }
    e.extendErrors = a;
    function c(f, v) {
      const u = f.const("err", v);
      f.if((0, t._)`${r.default.vErrors} === null`, () => f.assign(r.default.vErrors, (0, t._)`[${u}]`), (0, t._)`${r.default.vErrors}.push(${u})`), f.code((0, t._)`${r.default.errors}++`);
    }
    function h(f, v) {
      const { gen: u, validateName: m, schemaEnv: C } = f;
      C.$async ? u.throw((0, t._)`new ${f.ValidationError}(${v})`) : (u.assign((0, t._)`${m}.errors`, v), u.return(!1));
    }
    const p = {
      keyword: new t.Name("keyword"),
      schemaPath: new t.Name("schemaPath"),
      // also used in JTD errors
      params: new t.Name("params"),
      propertyName: new t.Name("propertyName"),
      message: new t.Name("message"),
      schema: new t.Name("schema"),
      parentSchema: new t.Name("parentSchema")
    };
    function b(f, v, u) {
      const { createErrors: m } = f.it;
      return m === !1 ? (0, t._)`{}` : y(f, v, u);
    }
    function y(f, v, u = {}) {
      const { gen: m, it: C } = f, l = [
        $(C, u),
        S(f, u)
      ];
      return w(f, v, l), m.object(...l);
    }
    function $({ errorPath: f }, { instancePath: v }) {
      const u = v ? (0, t.str)`${f}${(0, n.getErrorPath)(v, n.Type.Str)}` : f;
      return [r.default.instancePath, (0, t.strConcat)(r.default.instancePath, u)];
    }
    function S({ keyword: f, it: { errSchemaPath: v } }, { schemaPath: u, parentSchema: m }) {
      let C = m ? v : (0, t.str)`${v}/${f}`;
      return u && (C = (0, t.str)`${C}${(0, n.getErrorPath)(u, n.Type.Str)}`), [p.schemaPath, C];
    }
    function w(f, { params: v, message: u }, m) {
      const { keyword: C, data: l, schemaValue: d, it: g } = f, { opts: k, propertyName: E, topSchemaRef: P, schemaPath: F } = g;
      m.push([p.keyword, C], [p.params, typeof v == "function" ? v(f) : v || (0, t._)`{}`]), k.messages && m.push([p.message, typeof u == "function" ? u(f) : u]), k.verbose && m.push([p.schema, d], [p.parentSchema, (0, t._)`${P}${F}`], [r.default.data, l]), E && m.push([p.propertyName, E]);
    }
  })(Wn)), Wn;
}
var Hr;
function Rs() {
  if (Hr) return Ke;
  Hr = 1, Object.defineProperty(Ke, "__esModule", { value: !0 }), Ke.boolOrEmptySchema = Ke.topBoolOrEmptySchema = void 0;
  const e = /* @__PURE__ */ jn(), t = /* @__PURE__ */ ee(), n = /* @__PURE__ */ Re(), r = {
    message: "boolean schema is false"
  };
  function i(a) {
    const { gen: c, schema: h, validateName: p } = a;
    h === !1 ? s(a, !1) : typeof h == "object" && h.$async === !0 ? c.return(n.default.data) : (c.assign((0, t._)`${p}.errors`, null), c.return(!0));
  }
  Ke.topBoolOrEmptySchema = i;
  function o(a, c) {
    const { gen: h, schema: p } = a;
    p === !1 ? (h.var(c, !1), s(a)) : h.var(c, !0);
  }
  Ke.boolOrEmptySchema = o;
  function s(a, c) {
    const { gen: h, data: p } = a, b = {
      gen: h,
      keyword: "false schema",
      data: p,
      schema: !1,
      schemaCode: !1,
      schemaValue: !1,
      params: {},
      it: a
    };
    (0, e.reportError)(b, r, void 0, c);
  }
  return Ke;
}
var pe = {}, He = {}, Gr;
function Di() {
  if (Gr) return He;
  Gr = 1, Object.defineProperty(He, "__esModule", { value: !0 }), He.getRules = He.isJSONType = void 0;
  const e = ["string", "number", "integer", "boolean", "null", "object", "array"], t = new Set(e);
  function n(i) {
    return typeof i == "string" && t.has(i);
  }
  He.isJSONType = n;
  function r() {
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
  return He.getRules = r, He;
}
var Ie = {}, Wr;
function qi() {
  if (Wr) return Ie;
  Wr = 1, Object.defineProperty(Ie, "__esModule", { value: !0 }), Ie.shouldUseRule = Ie.shouldUseGroup = Ie.schemaHasRulesForType = void 0;
  function e({ schema: r, self: i }, o) {
    const s = i.RULES.types[o];
    return s && s !== !0 && t(r, s);
  }
  Ie.schemaHasRulesForType = e;
  function t(r, i) {
    return i.rules.some((o) => n(r, o));
  }
  Ie.shouldUseGroup = t;
  function n(r, i) {
    var o;
    return r[i.keyword] !== void 0 || ((o = i.definition.implements) === null || o === void 0 ? void 0 : o.some((s) => r[s] !== void 0));
  }
  return Ie.shouldUseRule = n, Ie;
}
var Jr;
function On() {
  if (Jr) return pe;
  Jr = 1, Object.defineProperty(pe, "__esModule", { value: !0 }), pe.reportTypeError = pe.checkDataTypes = pe.checkDataType = pe.coerceAndCheckDataType = pe.getJSONTypes = pe.getSchemaTypes = pe.DataType = void 0;
  const e = /* @__PURE__ */ Di(), t = /* @__PURE__ */ qi(), n = /* @__PURE__ */ jn(), r = /* @__PURE__ */ ee(), i = /* @__PURE__ */ oe();
  var o;
  (function(u) {
    u[u.Correct = 0] = "Correct", u[u.Wrong = 1] = "Wrong";
  })(o || (pe.DataType = o = {}));
  function s(u) {
    const m = a(u.type);
    if (m.includes("null")) {
      if (u.nullable === !1)
        throw new Error("type: null contradicts nullable: false");
    } else {
      if (!m.length && u.nullable !== void 0)
        throw new Error('"nullable" cannot be used without "type"');
      u.nullable === !0 && m.push("null");
    }
    return m;
  }
  pe.getSchemaTypes = s;
  function a(u) {
    const m = Array.isArray(u) ? u : u ? [u] : [];
    if (m.every(e.isJSONType))
      return m;
    throw new Error("type must be JSONType or JSONType[]: " + m.join(","));
  }
  pe.getJSONTypes = a;
  function c(u, m) {
    const { gen: C, data: l, opts: d } = u, g = p(m, d.coerceTypes), k = m.length > 0 && !(g.length === 0 && m.length === 1 && (0, t.schemaHasRulesForType)(u, m[0]));
    if (k) {
      const E = S(m, l, d.strictNumbers, o.Wrong);
      C.if(E, () => {
        g.length ? b(u, m, g) : f(u);
      });
    }
    return k;
  }
  pe.coerceAndCheckDataType = c;
  const h = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
  function p(u, m) {
    return m ? u.filter((C) => h.has(C) || m === "array" && C === "array") : [];
  }
  function b(u, m, C) {
    const { gen: l, data: d, opts: g } = u, k = l.let("dataType", (0, r._)`typeof ${d}`), E = l.let("coerced", (0, r._)`undefined`);
    g.coerceTypes === "array" && l.if((0, r._)`${k} == 'object' && Array.isArray(${d}) && ${d}.length == 1`, () => l.assign(d, (0, r._)`${d}[0]`).assign(k, (0, r._)`typeof ${d}`).if(S(m, d, g.strictNumbers), () => l.assign(E, d))), l.if((0, r._)`${E} !== undefined`);
    for (const F of C)
      (h.has(F) || F === "array" && g.coerceTypes === "array") && P(F);
    l.else(), f(u), l.endIf(), l.if((0, r._)`${E} !== undefined`, () => {
      l.assign(d, E), y(u, E);
    });
    function P(F) {
      switch (F) {
        case "string":
          l.elseIf((0, r._)`${k} == "number" || ${k} == "boolean"`).assign(E, (0, r._)`"" + ${d}`).elseIf((0, r._)`${d} === null`).assign(E, (0, r._)`""`);
          return;
        case "number":
          l.elseIf((0, r._)`${k} == "boolean" || ${d} === null
              || (${k} == "string" && ${d} && ${d} == +${d})`).assign(E, (0, r._)`+${d}`);
          return;
        case "integer":
          l.elseIf((0, r._)`${k} === "boolean" || ${d} === null
              || (${k} === "string" && ${d} && ${d} == +${d} && !(${d} % 1))`).assign(E, (0, r._)`+${d}`);
          return;
        case "boolean":
          l.elseIf((0, r._)`${d} === "false" || ${d} === 0 || ${d} === null`).assign(E, !1).elseIf((0, r._)`${d} === "true" || ${d} === 1`).assign(E, !0);
          return;
        case "null":
          l.elseIf((0, r._)`${d} === "" || ${d} === 0 || ${d} === false`), l.assign(E, null);
          return;
        case "array":
          l.elseIf((0, r._)`${k} === "string" || ${k} === "number"
              || ${k} === "boolean" || ${d} === null`).assign(E, (0, r._)`[${d}]`);
      }
    }
  }
  function y({ gen: u, parentData: m, parentDataProperty: C }, l) {
    u.if((0, r._)`${m} !== undefined`, () => u.assign((0, r._)`${m}[${C}]`, l));
  }
  function $(u, m, C, l = o.Correct) {
    const d = l === o.Correct ? r.operators.EQ : r.operators.NEQ;
    let g;
    switch (u) {
      case "null":
        return (0, r._)`${m} ${d} null`;
      case "array":
        g = (0, r._)`Array.isArray(${m})`;
        break;
      case "object":
        g = (0, r._)`${m} && typeof ${m} == "object" && !Array.isArray(${m})`;
        break;
      case "integer":
        g = k((0, r._)`!(${m} % 1) && !isNaN(${m})`);
        break;
      case "number":
        g = k();
        break;
      default:
        return (0, r._)`typeof ${m} ${d} ${u}`;
    }
    return l === o.Correct ? g : (0, r.not)(g);
    function k(E = r.nil) {
      return (0, r.and)((0, r._)`typeof ${m} == "number"`, E, C ? (0, r._)`isFinite(${m})` : r.nil);
    }
  }
  pe.checkDataType = $;
  function S(u, m, C, l) {
    if (u.length === 1)
      return $(u[0], m, C, l);
    let d;
    const g = (0, i.toHash)(u);
    if (g.array && g.object) {
      const k = (0, r._)`typeof ${m} != "object"`;
      d = g.null ? k : (0, r._)`!${m} || ${k}`, delete g.null, delete g.array, delete g.object;
    } else
      d = r.nil;
    g.number && delete g.integer;
    for (const k in g)
      d = (0, r.and)(d, $(k, m, C, l));
    return d;
  }
  pe.checkDataTypes = S;
  const w = {
    message: ({ schema: u }) => `must be ${u}`,
    params: ({ schema: u, schemaValue: m }) => typeof u == "string" ? (0, r._)`{type: ${u}}` : (0, r._)`{type: ${m}}`
  };
  function f(u) {
    const m = v(u);
    (0, n.reportError)(m, w);
  }
  pe.reportTypeError = f;
  function v(u) {
    const { gen: m, data: C, schema: l } = u, d = (0, i.schemaRefOrVal)(u, l, "type");
    return {
      gen: m,
      keyword: "type",
      data: C,
      schema: l.type,
      schemaCode: d,
      schemaValue: d,
      parentSchema: l,
      params: {},
      it: u
    };
  }
  return pe;
}
var vt = {}, Yr;
function Ns() {
  if (Yr) return vt;
  Yr = 1, Object.defineProperty(vt, "__esModule", { value: !0 }), vt.assignDefaults = void 0;
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ oe();
  function n(i, o) {
    const { properties: s, items: a } = i.schema;
    if (o === "object" && s)
      for (const c in s)
        r(i, c, s[c].default);
    else o === "array" && Array.isArray(a) && a.forEach((c, h) => r(i, h, c.default));
  }
  vt.assignDefaults = n;
  function r(i, o, s) {
    const { gen: a, compositeRule: c, data: h, opts: p } = i;
    if (s === void 0)
      return;
    const b = (0, e._)`${h}${(0, e.getProperty)(o)}`;
    if (c) {
      (0, t.checkStrictMode)(i, `default is ignored for: ${b}`);
      return;
    }
    let y = (0, e._)`${b} === undefined`;
    p.useDefaults === "empty" && (y = (0, e._)`${y} || ${b} === null || ${b} === ""`), a.if(y, (0, e._)`${b} = ${(0, e.stringify)(s)}`);
  }
  return vt;
}
var Ce = {}, ae = {}, Xr;
function Ne() {
  if (Xr) return ae;
  Xr = 1, Object.defineProperty(ae, "__esModule", { value: !0 }), ae.validateUnion = ae.validateArray = ae.usePattern = ae.callValidateCode = ae.schemaProperties = ae.allSchemaProperties = ae.noPropertyInData = ae.propertyInData = ae.isOwnProperty = ae.hasPropFunc = ae.reportMissingProp = ae.checkMissingProp = ae.checkReportMissingProp = void 0;
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ oe(), n = /* @__PURE__ */ Re(), r = /* @__PURE__ */ oe();
  function i(u, m) {
    const { gen: C, data: l, it: d } = u;
    C.if(p(C, l, m, d.opts.ownProperties), () => {
      u.setParams({ missingProperty: (0, e._)`${m}` }, !0), u.error();
    });
  }
  ae.checkReportMissingProp = i;
  function o({ gen: u, data: m, it: { opts: C } }, l, d) {
    return (0, e.or)(...l.map((g) => (0, e.and)(p(u, m, g, C.ownProperties), (0, e._)`${d} = ${g}`)));
  }
  ae.checkMissingProp = o;
  function s(u, m) {
    u.setParams({ missingProperty: m }, !0), u.error();
  }
  ae.reportMissingProp = s;
  function a(u) {
    return u.scopeValue("func", {
      // eslint-disable-next-line @typescript-eslint/unbound-method
      ref: Object.prototype.hasOwnProperty,
      code: (0, e._)`Object.prototype.hasOwnProperty`
    });
  }
  ae.hasPropFunc = a;
  function c(u, m, C) {
    return (0, e._)`${a(u)}.call(${m}, ${C})`;
  }
  ae.isOwnProperty = c;
  function h(u, m, C, l) {
    const d = (0, e._)`${m}${(0, e.getProperty)(C)} !== undefined`;
    return l ? (0, e._)`${d} && ${c(u, m, C)}` : d;
  }
  ae.propertyInData = h;
  function p(u, m, C, l) {
    const d = (0, e._)`${m}${(0, e.getProperty)(C)} === undefined`;
    return l ? (0, e.or)(d, (0, e.not)(c(u, m, C))) : d;
  }
  ae.noPropertyInData = p;
  function b(u) {
    return u ? Object.keys(u).filter((m) => m !== "__proto__") : [];
  }
  ae.allSchemaProperties = b;
  function y(u, m) {
    return b(m).filter((C) => !(0, t.alwaysValidSchema)(u, m[C]));
  }
  ae.schemaProperties = y;
  function $({ schemaCode: u, data: m, it: { gen: C, topSchemaRef: l, schemaPath: d, errorPath: g }, it: k }, E, P, F) {
    const O = F ? (0, e._)`${u}, ${m}, ${l}${d}` : m, I = [
      [n.default.instancePath, (0, e.strConcat)(n.default.instancePath, g)],
      [n.default.parentData, k.parentData],
      [n.default.parentDataProperty, k.parentDataProperty],
      [n.default.rootData, n.default.rootData]
    ];
    k.opts.dynamicRef && I.push([n.default.dynamicAnchors, n.default.dynamicAnchors]);
    const G = (0, e._)`${O}, ${C.object(...I)}`;
    return P !== e.nil ? (0, e._)`${E}.call(${P}, ${G})` : (0, e._)`${E}(${G})`;
  }
  ae.callValidateCode = $;
  const S = (0, e._)`new RegExp`;
  function w({ gen: u, it: { opts: m } }, C) {
    const l = m.unicodeRegExp ? "u" : "", { regExp: d } = m.code, g = d(C, l);
    return u.scopeValue("pattern", {
      key: g.toString(),
      ref: g,
      code: (0, e._)`${d.code === "new RegExp" ? S : (0, r.useFunc)(u, d)}(${C}, ${l})`
    });
  }
  ae.usePattern = w;
  function f(u) {
    const { gen: m, data: C, keyword: l, it: d } = u, g = m.name("valid");
    if (d.allErrors) {
      const E = m.let("valid", !0);
      return k(() => m.assign(E, !1)), E;
    }
    return m.var(g, !0), k(() => m.break()), g;
    function k(E) {
      const P = m.const("len", (0, e._)`${C}.length`);
      m.forRange("i", 0, P, (F) => {
        u.subschema({
          keyword: l,
          dataProp: F,
          dataPropType: t.Type.Num
        }, g), m.if((0, e.not)(g), E);
      });
    }
  }
  ae.validateArray = f;
  function v(u) {
    const { gen: m, schema: C, keyword: l, it: d } = u;
    if (!Array.isArray(C))
      throw new Error("ajv implementation error");
    if (C.some((P) => (0, t.alwaysValidSchema)(d, P)) && !d.opts.unevaluated)
      return;
    const k = m.let("valid", !1), E = m.name("_valid");
    m.block(() => C.forEach((P, F) => {
      const O = u.subschema({
        keyword: l,
        schemaProp: F,
        compositeRule: !0
      }, E);
      m.assign(k, (0, e._)`${k} || ${E}`), u.mergeValidEvaluated(O, E) || m.if((0, e.not)(k));
    })), u.result(k, () => u.reset(), () => u.error(!0));
  }
  return ae.validateUnion = v, ae;
}
var Zr;
function Fs() {
  if (Zr) return Ce;
  Zr = 1, Object.defineProperty(Ce, "__esModule", { value: !0 }), Ce.validateKeywordUsage = Ce.validSchemaType = Ce.funcKeywordCode = Ce.macroKeywordCode = void 0;
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ Re(), n = /* @__PURE__ */ Ne(), r = /* @__PURE__ */ jn();
  function i(y, $) {
    const { gen: S, keyword: w, schema: f, parentSchema: v, it: u } = y, m = $.macro.call(u.self, f, v, u), C = h(S, w, m);
    u.opts.validateSchema !== !1 && u.self.validateSchema(m, !0);
    const l = S.name("valid");
    y.subschema({
      schema: m,
      schemaPath: e.nil,
      errSchemaPath: `${u.errSchemaPath}/${w}`,
      topSchemaRef: C,
      compositeRule: !0
    }, l), y.pass(l, () => y.error(!0));
  }
  Ce.macroKeywordCode = i;
  function o(y, $) {
    var S;
    const { gen: w, keyword: f, schema: v, parentSchema: u, $data: m, it: C } = y;
    c(C, $);
    const l = !m && $.compile ? $.compile.call(C.self, v, u, C) : $.validate, d = h(w, f, l), g = w.let("valid");
    y.block$data(g, k), y.ok((S = $.valid) !== null && S !== void 0 ? S : g);
    function k() {
      if ($.errors === !1)
        F(), $.modifying && s(y), O(() => y.error());
      else {
        const I = $.async ? E() : P();
        $.modifying && s(y), O(() => a(y, I));
      }
    }
    function E() {
      const I = w.let("ruleErrs", null);
      return w.try(() => F((0, e._)`await `), (G) => w.assign(g, !1).if((0, e._)`${G} instanceof ${C.ValidationError}`, () => w.assign(I, (0, e._)`${G}.errors`), () => w.throw(G))), I;
    }
    function P() {
      const I = (0, e._)`${d}.errors`;
      return w.assign(I, null), F(e.nil), I;
    }
    function F(I = $.async ? (0, e._)`await ` : e.nil) {
      const G = C.opts.passContext ? t.default.this : t.default.self, Q = !("compile" in $ && !m || $.schema === !1);
      w.assign(g, (0, e._)`${I}${(0, n.callValidateCode)(y, d, G, Q)}`, $.modifying);
    }
    function O(I) {
      var G;
      w.if((0, e.not)((G = $.valid) !== null && G !== void 0 ? G : g), I);
    }
  }
  Ce.funcKeywordCode = o;
  function s(y) {
    const { gen: $, data: S, it: w } = y;
    $.if(w.parentData, () => $.assign(S, (0, e._)`${w.parentData}[${w.parentDataProperty}]`));
  }
  function a(y, $) {
    const { gen: S } = y;
    S.if((0, e._)`Array.isArray(${$})`, () => {
      S.assign(t.default.vErrors, (0, e._)`${t.default.vErrors} === null ? ${$} : ${t.default.vErrors}.concat(${$})`).assign(t.default.errors, (0, e._)`${t.default.vErrors}.length`), (0, r.extendErrors)(y);
    }, () => y.error());
  }
  function c({ schemaEnv: y }, $) {
    if ($.async && !y.$async)
      throw new Error("async keyword in sync schema");
  }
  function h(y, $, S) {
    if (S === void 0)
      throw new Error(`keyword "${$}" failed to compile`);
    return y.scopeValue("keyword", typeof S == "function" ? { ref: S } : { ref: S, code: (0, e.stringify)(S) });
  }
  function p(y, $, S = !1) {
    return !$.length || $.some((w) => w === "array" ? Array.isArray(y) : w === "object" ? y && typeof y == "object" && !Array.isArray(y) : typeof y == w || S && typeof y > "u");
  }
  Ce.validSchemaType = p;
  function b({ schema: y, opts: $, self: S, errSchemaPath: w }, f, v) {
    if (Array.isArray(f.keyword) ? !f.keyword.includes(v) : f.keyword !== v)
      throw new Error("ajv implementation error");
    const u = f.dependencies;
    if (u?.some((m) => !Object.prototype.hasOwnProperty.call(y, m)))
      throw new Error(`parent schema must have dependencies of ${v}: ${u.join(",")}`);
    if (f.validateSchema && !f.validateSchema(y[v])) {
      const C = `keyword "${v}" value is invalid at path "${w}": ` + S.errorsText(f.validateSchema.errors);
      if ($.validateSchema === "log")
        S.logger.error(C);
      else
        throw new Error(C);
    }
  }
  return Ce.validateKeywordUsage = b, Ce;
}
var De = {}, Qr;
function Os() {
  if (Qr) return De;
  Qr = 1, Object.defineProperty(De, "__esModule", { value: !0 }), De.extendSubschemaMode = De.extendSubschemaData = De.getSubschema = void 0;
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ oe();
  function n(o, { keyword: s, schemaProp: a, schema: c, schemaPath: h, errSchemaPath: p, topSchemaRef: b }) {
    if (s !== void 0 && c !== void 0)
      throw new Error('both "keyword" and "schema" passed, only one allowed');
    if (s !== void 0) {
      const y = o.schema[s];
      return a === void 0 ? {
        schema: y,
        schemaPath: (0, e._)`${o.schemaPath}${(0, e.getProperty)(s)}`,
        errSchemaPath: `${o.errSchemaPath}/${s}`
      } : {
        schema: y[a],
        schemaPath: (0, e._)`${o.schemaPath}${(0, e.getProperty)(s)}${(0, e.getProperty)(a)}`,
        errSchemaPath: `${o.errSchemaPath}/${s}/${(0, t.escapeFragment)(a)}`
      };
    }
    if (c !== void 0) {
      if (h === void 0 || p === void 0 || b === void 0)
        throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
      return {
        schema: c,
        schemaPath: h,
        topSchemaRef: b,
        errSchemaPath: p
      };
    }
    throw new Error('either "keyword" or "schema" must be passed');
  }
  De.getSubschema = n;
  function r(o, s, { dataProp: a, dataPropType: c, data: h, dataTypes: p, propertyName: b }) {
    if (h !== void 0 && a !== void 0)
      throw new Error('both "data" and "dataProp" passed, only one allowed');
    const { gen: y } = s;
    if (a !== void 0) {
      const { errorPath: S, dataPathArr: w, opts: f } = s, v = y.let("data", (0, e._)`${s.data}${(0, e.getProperty)(a)}`, !0);
      $(v), o.errorPath = (0, e.str)`${S}${(0, t.getErrorPath)(a, c, f.jsPropertySyntax)}`, o.parentDataProperty = (0, e._)`${a}`, o.dataPathArr = [...w, o.parentDataProperty];
    }
    if (h !== void 0) {
      const S = h instanceof e.Name ? h : y.let("data", h, !0);
      $(S), b !== void 0 && (o.propertyName = b);
    }
    p && (o.dataTypes = p);
    function $(S) {
      o.data = S, o.dataLevel = s.dataLevel + 1, o.dataTypes = [], s.definedProperties = /* @__PURE__ */ new Set(), o.parentData = s.data, o.dataNames = [...s.dataNames, S];
    }
  }
  De.extendSubschemaData = r;
  function i(o, { jtdDiscriminator: s, jtdMetadata: a, compositeRule: c, createErrors: h, allErrors: p }) {
    c !== void 0 && (o.compositeRule = c), h !== void 0 && (o.createErrors = h), p !== void 0 && (o.allErrors = p), o.jtdDiscriminator = s, o.jtdMetadata = a;
  }
  return De.extendSubschemaMode = i, De;
}
var me = {}, Zn, eo;
function Vi() {
  return eo || (eo = 1, Zn = function e(t, n) {
    if (t === n) return !0;
    if (t && n && typeof t == "object" && typeof n == "object") {
      if (t.constructor !== n.constructor) return !1;
      var r, i, o;
      if (Array.isArray(t)) {
        if (r = t.length, r != n.length) return !1;
        for (i = r; i-- !== 0; )
          if (!e(t[i], n[i])) return !1;
        return !0;
      }
      if (t.constructor === RegExp) return t.source === n.source && t.flags === n.flags;
      if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === n.valueOf();
      if (t.toString !== Object.prototype.toString) return t.toString() === n.toString();
      if (o = Object.keys(t), r = o.length, r !== Object.keys(n).length) return !1;
      for (i = r; i-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(n, o[i])) return !1;
      for (i = r; i-- !== 0; ) {
        var s = o[i];
        if (!e(t[s], n[s])) return !1;
      }
      return !0;
    }
    return t !== t && n !== n;
  }), Zn;
}
var Qn = { exports: {} }, to;
function Ms() {
  if (to) return Qn.exports;
  to = 1;
  var e = Qn.exports = function(r, i, o) {
    typeof i == "function" && (o = i, i = {}), o = i.cb || o;
    var s = typeof o == "function" ? o : o.pre || function() {
    }, a = o.post || function() {
    };
    t(i, s, a, r, "", r);
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
  function t(r, i, o, s, a, c, h, p, b, y) {
    if (s && typeof s == "object" && !Array.isArray(s)) {
      i(s, a, c, h, p, b, y);
      for (var $ in s) {
        var S = s[$];
        if (Array.isArray(S)) {
          if ($ in e.arrayKeywords)
            for (var w = 0; w < S.length; w++)
              t(r, i, o, S[w], a + "/" + $ + "/" + w, c, a, $, s, w);
        } else if ($ in e.propsKeywords) {
          if (S && typeof S == "object")
            for (var f in S)
              t(r, i, o, S[f], a + "/" + $ + "/" + n(f), c, a, $, s, f);
        } else ($ in e.keywords || r.allKeys && !($ in e.skipKeywords)) && t(r, i, o, S, a + "/" + $, c, a, $, s);
      }
      o(s, a, c, h, p, b, y);
    }
  }
  function n(r) {
    return r.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  return Qn.exports;
}
var no;
function zn() {
  if (no) return me;
  no = 1, Object.defineProperty(me, "__esModule", { value: !0 }), me.getSchemaRefs = me.resolveUrl = me.normalizeId = me._getFullPath = me.getFullPath = me.inlineRef = void 0;
  const e = /* @__PURE__ */ oe(), t = Vi(), n = Ms(), r = /* @__PURE__ */ new Set([
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
  me.inlineRef = i;
  const o = /* @__PURE__ */ new Set([
    "$ref",
    "$recursiveRef",
    "$recursiveAnchor",
    "$dynamicRef",
    "$dynamicAnchor"
  ]);
  function s(w) {
    for (const f in w) {
      if (o.has(f))
        return !0;
      const v = w[f];
      if (Array.isArray(v) && v.some(s) || typeof v == "object" && s(v))
        return !0;
    }
    return !1;
  }
  function a(w) {
    let f = 0;
    for (const v in w) {
      if (v === "$ref")
        return 1 / 0;
      if (f++, !r.has(v) && (typeof w[v] == "object" && (0, e.eachItem)(w[v], (u) => f += a(u)), f === 1 / 0))
        return 1 / 0;
    }
    return f;
  }
  function c(w, f = "", v) {
    v !== !1 && (f = b(f));
    const u = w.parse(f);
    return h(w, u);
  }
  me.getFullPath = c;
  function h(w, f) {
    return w.serialize(f).split("#")[0] + "#";
  }
  me._getFullPath = h;
  const p = /#\/?$/;
  function b(w) {
    return w ? w.replace(p, "") : "";
  }
  me.normalizeId = b;
  function y(w, f, v) {
    return v = b(v), w.resolve(f, v);
  }
  me.resolveUrl = y;
  const $ = /^[a-z_][-a-z0-9._]*$/i;
  function S(w, f) {
    if (typeof w == "boolean")
      return {};
    const { schemaId: v, uriResolver: u } = this.opts, m = b(w[v] || f), C = { "": m }, l = c(u, m, !1), d = {}, g = /* @__PURE__ */ new Set();
    return n(w, { allKeys: !0 }, (P, F, O, I) => {
      if (I === void 0)
        return;
      const G = l + F;
      let Q = C[I];
      typeof P[v] == "string" && (Q = te.call(this, P[v])), H.call(this, P.$anchor), H.call(this, P.$dynamicAnchor), C[F] = Q;
      function te(B) {
        const Y = this.opts.uriResolver.resolve;
        if (B = b(Q ? Y(Q, B) : B), g.has(B))
          throw E(B);
        g.add(B);
        let q = this.refs[B];
        return typeof q == "string" && (q = this.refs[q]), typeof q == "object" ? k(P, q.schema, B) : B !== b(G) && (B[0] === "#" ? (k(P, d[B], B), d[B] = P) : this.refs[B] = G), B;
      }
      function H(B) {
        if (typeof B == "string") {
          if (!$.test(B))
            throw new Error(`invalid anchor "${B}"`);
          te.call(this, `#${B}`);
        }
      }
    }), d;
    function k(P, F, O) {
      if (F !== void 0 && !t(P, F))
        throw E(O);
    }
    function E(P) {
      return new Error(`reference "${P}" resolves to more than one schema`);
    }
  }
  return me.getSchemaRefs = S, me;
}
var ro;
function In() {
  if (ro) return ze;
  ro = 1, Object.defineProperty(ze, "__esModule", { value: !0 }), ze.getData = ze.KeywordCxt = ze.validateFunctionCode = void 0;
  const e = /* @__PURE__ */ Rs(), t = /* @__PURE__ */ On(), n = /* @__PURE__ */ qi(), r = /* @__PURE__ */ On(), i = /* @__PURE__ */ Ns(), o = /* @__PURE__ */ Fs(), s = /* @__PURE__ */ Os(), a = /* @__PURE__ */ ee(), c = /* @__PURE__ */ Re(), h = /* @__PURE__ */ zn(), p = /* @__PURE__ */ oe(), b = /* @__PURE__ */ jn();
  function y(N) {
    if (l(N) && (g(N), C(N))) {
      f(N);
      return;
    }
    $(N, () => (0, e.topBoolOrEmptySchema)(N));
  }
  ze.validateFunctionCode = y;
  function $({ gen: N, validateName: T, schema: L, schemaEnv: U, opts: J }, re) {
    J.code.es5 ? N.func(T, (0, a._)`${c.default.data}, ${c.default.valCxt}`, U.$async, () => {
      N.code((0, a._)`"use strict"; ${u(L, J)}`), w(N, J), N.code(re);
    }) : N.func(T, (0, a._)`${c.default.data}, ${S(J)}`, U.$async, () => N.code(u(L, J)).code(re));
  }
  function S(N) {
    return (0, a._)`{${c.default.instancePath}="", ${c.default.parentData}, ${c.default.parentDataProperty}, ${c.default.rootData}=${c.default.data}${N.dynamicRef ? (0, a._)`, ${c.default.dynamicAnchors}={}` : a.nil}}={}`;
  }
  function w(N, T) {
    N.if(c.default.valCxt, () => {
      N.var(c.default.instancePath, (0, a._)`${c.default.valCxt}.${c.default.instancePath}`), N.var(c.default.parentData, (0, a._)`${c.default.valCxt}.${c.default.parentData}`), N.var(c.default.parentDataProperty, (0, a._)`${c.default.valCxt}.${c.default.parentDataProperty}`), N.var(c.default.rootData, (0, a._)`${c.default.valCxt}.${c.default.rootData}`), T.dynamicRef && N.var(c.default.dynamicAnchors, (0, a._)`${c.default.valCxt}.${c.default.dynamicAnchors}`);
    }, () => {
      N.var(c.default.instancePath, (0, a._)`""`), N.var(c.default.parentData, (0, a._)`undefined`), N.var(c.default.parentDataProperty, (0, a._)`undefined`), N.var(c.default.rootData, c.default.data), T.dynamicRef && N.var(c.default.dynamicAnchors, (0, a._)`{}`);
    });
  }
  function f(N) {
    const { schema: T, opts: L, gen: U } = N;
    $(N, () => {
      L.$comment && T.$comment && I(N), P(N), U.let(c.default.vErrors, null), U.let(c.default.errors, 0), L.unevaluated && v(N), k(N), G(N);
    });
  }
  function v(N) {
    const { gen: T, validateName: L } = N;
    N.evaluated = T.const("evaluated", (0, a._)`${L}.evaluated`), T.if((0, a._)`${N.evaluated}.dynamicProps`, () => T.assign((0, a._)`${N.evaluated}.props`, (0, a._)`undefined`)), T.if((0, a._)`${N.evaluated}.dynamicItems`, () => T.assign((0, a._)`${N.evaluated}.items`, (0, a._)`undefined`));
  }
  function u(N, T) {
    const L = typeof N == "object" && N[T.schemaId];
    return L && (T.code.source || T.code.process) ? (0, a._)`/*# sourceURL=${L} */` : a.nil;
  }
  function m(N, T) {
    if (l(N) && (g(N), C(N))) {
      d(N, T);
      return;
    }
    (0, e.boolOrEmptySchema)(N, T);
  }
  function C({ schema: N, self: T }) {
    if (typeof N == "boolean")
      return !N;
    for (const L in N)
      if (T.RULES.all[L])
        return !0;
    return !1;
  }
  function l(N) {
    return typeof N.schema != "boolean";
  }
  function d(N, T) {
    const { schema: L, gen: U, opts: J } = N;
    J.$comment && L.$comment && I(N), F(N), O(N);
    const re = U.const("_errs", c.default.errors);
    k(N, re), U.var(T, (0, a._)`${re} === ${c.default.errors}`);
  }
  function g(N) {
    (0, p.checkUnknownRules)(N), E(N);
  }
  function k(N, T) {
    if (N.opts.jtd)
      return te(N, [], !1, T);
    const L = (0, t.getSchemaTypes)(N.schema), U = (0, t.coerceAndCheckDataType)(N, L);
    te(N, L, !U, T);
  }
  function E(N) {
    const { schema: T, errSchemaPath: L, opts: U, self: J } = N;
    T.$ref && U.ignoreKeywordsWithRef && (0, p.schemaHasRulesButRef)(T, J.RULES) && J.logger.warn(`$ref: keywords ignored in schema at path "${L}"`);
  }
  function P(N) {
    const { schema: T, opts: L } = N;
    T.default !== void 0 && L.useDefaults && L.strictSchema && (0, p.checkStrictMode)(N, "default is ignored in the schema root");
  }
  function F(N) {
    const T = N.schema[N.opts.schemaId];
    T && (N.baseId = (0, h.resolveUrl)(N.opts.uriResolver, N.baseId, T));
  }
  function O(N) {
    if (N.schema.$async && !N.schemaEnv.$async)
      throw new Error("async schema in sync schema");
  }
  function I({ gen: N, schemaEnv: T, schema: L, errSchemaPath: U, opts: J }) {
    const re = L.$comment;
    if (J.$comment === !0)
      N.code((0, a._)`${c.default.self}.logger.log(${re})`);
    else if (typeof J.$comment == "function") {
      const ue = (0, a.str)`${U}/$comment`, Se = N.scopeValue("root", { ref: T.root });
      N.code((0, a._)`${c.default.self}.opts.$comment(${re}, ${ue}, ${Se}.schema)`);
    }
  }
  function G(N) {
    const { gen: T, schemaEnv: L, validateName: U, ValidationError: J, opts: re } = N;
    L.$async ? T.if((0, a._)`${c.default.errors} === 0`, () => T.return(c.default.data), () => T.throw((0, a._)`new ${J}(${c.default.vErrors})`)) : (T.assign((0, a._)`${U}.errors`, c.default.vErrors), re.unevaluated && Q(N), T.return((0, a._)`${c.default.errors} === 0`));
  }
  function Q({ gen: N, evaluated: T, props: L, items: U }) {
    L instanceof a.Name && N.assign((0, a._)`${T}.props`, L), U instanceof a.Name && N.assign((0, a._)`${T}.items`, U);
  }
  function te(N, T, L, U) {
    const { gen: J, schema: re, data: ue, allErrors: Se, opts: ve, self: $e } = N, { RULES: fe } = $e;
    if (re.$ref && (ve.ignoreKeywordsWithRef || !(0, p.schemaHasRulesButRef)(re, fe))) {
      J.block(() => W(N, "$ref", fe.all.$ref.definition));
      return;
    }
    ve.jtd || B(N, T), J.block(() => {
      for (const we of fe.rules)
        Qe(we);
      Qe(fe.post);
    });
    function Qe(we) {
      (0, n.shouldUseGroup)(re, we) && (we.type ? (J.if((0, r.checkDataType)(we.type, ue, ve.strictNumbers)), H(N, we), T.length === 1 && T[0] === we.type && L && (J.else(), (0, r.reportTypeError)(N)), J.endIf()) : H(N, we), Se || J.if((0, a._)`${c.default.errors} === ${U || 0}`));
    }
  }
  function H(N, T) {
    const { gen: L, schema: U, opts: { useDefaults: J } } = N;
    J && (0, i.assignDefaults)(N, T.type), L.block(() => {
      for (const re of T.rules)
        (0, n.shouldUseRule)(U, re) && W(N, re.keyword, re.definition, T.type);
    });
  }
  function B(N, T) {
    N.schemaEnv.meta || !N.opts.strictTypes || (Y(N, T), N.opts.allowUnionTypes || q(N, T), A(N, N.dataTypes));
  }
  function Y(N, T) {
    if (T.length) {
      if (!N.dataTypes.length) {
        N.dataTypes = T;
        return;
      }
      T.forEach((L) => {
        R(N.dataTypes, L) || x(N, `type "${L}" not allowed by context "${N.dataTypes.join(",")}"`);
      }), _(N, T);
    }
  }
  function q(N, T) {
    T.length > 1 && !(T.length === 2 && T.includes("null")) && x(N, "use allowUnionTypes to allow union type keyword");
  }
  function A(N, T) {
    const L = N.self.RULES.all;
    for (const U in L) {
      const J = L[U];
      if (typeof J == "object" && (0, n.shouldUseRule)(N.schema, J)) {
        const { type: re } = J.definition;
        re.length && !re.some((ue) => D(T, ue)) && x(N, `missing type "${re.join(",")}" for keyword "${U}"`);
      }
    }
  }
  function D(N, T) {
    return N.includes(T) || T === "number" && N.includes("integer");
  }
  function R(N, T) {
    return N.includes(T) || T === "integer" && N.includes("number");
  }
  function _(N, T) {
    const L = [];
    for (const U of N.dataTypes)
      R(T, U) ? L.push(U) : T.includes("integer") && U === "number" && L.push("integer");
    N.dataTypes = L;
  }
  function x(N, T) {
    const L = N.schemaEnv.baseId + N.errSchemaPath;
    T += ` at "${L}" (strictTypes)`, (0, p.checkStrictMode)(N, T, N.opts.strictTypes);
  }
  class z {
    constructor(T, L, U) {
      if ((0, o.validateKeywordUsage)(T, L, U), this.gen = T.gen, this.allErrors = T.allErrors, this.keyword = U, this.data = T.data, this.schema = T.schema[U], this.$data = L.$data && T.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, p.schemaRefOrVal)(T, this.schema, U, this.$data), this.schemaType = L.schemaType, this.parentSchema = T.schema, this.params = {}, this.it = T, this.def = L, this.$data)
        this.schemaCode = T.gen.const("vSchema", ie(this.$data, T));
      else if (this.schemaCode = this.schemaValue, !(0, o.validSchemaType)(this.schema, L.schemaType, L.allowUndefined))
        throw new Error(`${U} value must be ${JSON.stringify(L.schemaType)}`);
      ("code" in L ? L.trackErrors : L.errors !== !1) && (this.errsCount = T.gen.const("_errs", c.default.errors));
    }
    result(T, L, U) {
      this.failResult((0, a.not)(T), L, U);
    }
    failResult(T, L, U) {
      this.gen.if(T), U ? U() : this.error(), L ? (this.gen.else(), L(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    pass(T, L) {
      this.failResult((0, a.not)(T), void 0, L);
    }
    fail(T) {
      if (T === void 0) {
        this.error(), this.allErrors || this.gen.if(!1);
        return;
      }
      this.gen.if(T), this.error(), this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    fail$data(T) {
      if (!this.$data)
        return this.fail(T);
      const { schemaCode: L } = this;
      this.fail((0, a._)`${L} !== undefined && (${(0, a.or)(this.invalid$data(), T)})`);
    }
    error(T, L, U) {
      if (L) {
        this.setParams(L), this._error(T, U), this.setParams({});
        return;
      }
      this._error(T, U);
    }
    _error(T, L) {
      (T ? b.reportExtraError : b.reportError)(this, this.def.error, L);
    }
    $dataError() {
      (0, b.reportError)(this, this.def.$dataError || b.keyword$DataError);
    }
    reset() {
      if (this.errsCount === void 0)
        throw new Error('add "trackErrors" to keyword definition');
      (0, b.resetErrorsCount)(this.gen, this.errsCount);
    }
    ok(T) {
      this.allErrors || this.gen.if(T);
    }
    setParams(T, L) {
      L ? Object.assign(this.params, T) : this.params = T;
    }
    block$data(T, L, U = a.nil) {
      this.gen.block(() => {
        this.check$data(T, U), L();
      });
    }
    check$data(T = a.nil, L = a.nil) {
      if (!this.$data)
        return;
      const { gen: U, schemaCode: J, schemaType: re, def: ue } = this;
      U.if((0, a.or)((0, a._)`${J} === undefined`, L)), T !== a.nil && U.assign(T, !0), (re.length || ue.validateSchema) && (U.elseIf(this.invalid$data()), this.$dataError(), T !== a.nil && U.assign(T, !1)), U.else();
    }
    invalid$data() {
      const { gen: T, schemaCode: L, schemaType: U, def: J, it: re } = this;
      return (0, a.or)(ue(), Se());
      function ue() {
        if (U.length) {
          if (!(L instanceof a.Name))
            throw new Error("ajv implementation error");
          const ve = Array.isArray(U) ? U : [U];
          return (0, a._)`${(0, r.checkDataTypes)(ve, L, re.opts.strictNumbers, r.DataType.Wrong)}`;
        }
        return a.nil;
      }
      function Se() {
        if (J.validateSchema) {
          const ve = T.scopeValue("validate$data", { ref: J.validateSchema });
          return (0, a._)`!${ve}(${L})`;
        }
        return a.nil;
      }
    }
    subschema(T, L) {
      const U = (0, s.getSubschema)(this.it, T);
      (0, s.extendSubschemaData)(U, this.it, T), (0, s.extendSubschemaMode)(U, T);
      const J = { ...this.it, ...U, items: void 0, props: void 0 };
      return m(J, L), J;
    }
    mergeEvaluated(T, L) {
      const { it: U, gen: J } = this;
      U.opts.unevaluated && (U.props !== !0 && T.props !== void 0 && (U.props = p.mergeEvaluated.props(J, T.props, U.props, L)), U.items !== !0 && T.items !== void 0 && (U.items = p.mergeEvaluated.items(J, T.items, U.items, L)));
    }
    mergeValidEvaluated(T, L) {
      const { it: U, gen: J } = this;
      if (U.opts.unevaluated && (U.props !== !0 || U.items !== !0))
        return J.if(L, () => this.mergeEvaluated(T, a.Name)), !0;
    }
  }
  ze.KeywordCxt = z;
  function W(N, T, L, U) {
    const J = new z(N, L, T);
    "code" in L ? L.code(J, U) : J.$data && L.validate ? (0, o.funcKeywordCode)(J, L) : "macro" in L ? (0, o.macroKeywordCode)(J, L) : (L.compile || L.validate) && (0, o.funcKeywordCode)(J, L);
  }
  const K = /^\/(?:[^~]|~0|~1)*$/, Z = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function ie(N, { dataLevel: T, dataNames: L, dataPathArr: U }) {
    let J, re;
    if (N === "")
      return c.default.rootData;
    if (N[0] === "/") {
      if (!K.test(N))
        throw new Error(`Invalid JSON-pointer: ${N}`);
      J = N, re = c.default.rootData;
    } else {
      const $e = Z.exec(N);
      if (!$e)
        throw new Error(`Invalid JSON-pointer: ${N}`);
      const fe = +$e[1];
      if (J = $e[2], J === "#") {
        if (fe >= T)
          throw new Error(ve("property/index", fe));
        return U[T - fe];
      }
      if (fe > T)
        throw new Error(ve("data", fe));
      if (re = L[T - fe], !J)
        return re;
    }
    let ue = re;
    const Se = J.split("/");
    for (const $e of Se)
      $e && (re = (0, a._)`${re}${(0, a.getProperty)((0, p.unescapeJsonPointer)($e))}`, ue = (0, a._)`${ue} && ${re}`);
    return ue;
    function ve($e, fe) {
      return `Cannot access ${$e} ${fe} levels up, current level is ${T}`;
    }
  }
  return ze.getData = ie, ze;
}
var Ft = {}, oo;
function vr() {
  if (oo) return Ft;
  oo = 1, Object.defineProperty(Ft, "__esModule", { value: !0 });
  class e extends Error {
    constructor(n) {
      super("validation failed"), this.errors = n, this.ajv = this.validation = !0;
    }
  }
  return Ft.default = e, Ft;
}
var Ot = {}, io;
function Dn() {
  if (io) return Ot;
  io = 1, Object.defineProperty(Ot, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ zn();
  class t extends Error {
    constructor(r, i, o, s) {
      super(s || `can't resolve reference ${o} from id ${i}`), this.missingRef = (0, e.resolveUrl)(r, i, o), this.missingSchema = (0, e.normalizeId)((0, e.getFullPath)(r, this.missingRef));
    }
  }
  return Ot.default = t, Ot;
}
var be = {}, so;
function qn() {
  if (so) return be;
  so = 1, Object.defineProperty(be, "__esModule", { value: !0 }), be.resolveSchema = be.getCompilingSchema = be.resolveRef = be.compileSchema = be.SchemaEnv = void 0;
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ vr(), n = /* @__PURE__ */ Re(), r = /* @__PURE__ */ zn(), i = /* @__PURE__ */ oe(), o = /* @__PURE__ */ In();
  class s {
    constructor(v) {
      var u;
      this.refs = {}, this.dynamicAnchors = {};
      let m;
      typeof v.schema == "object" && (m = v.schema), this.schema = v.schema, this.schemaId = v.schemaId, this.root = v.root || this, this.baseId = (u = v.baseId) !== null && u !== void 0 ? u : (0, r.normalizeId)(m?.[v.schemaId || "$id"]), this.schemaPath = v.schemaPath, this.localRefs = v.localRefs, this.meta = v.meta, this.$async = m?.$async, this.refs = {};
    }
  }
  be.SchemaEnv = s;
  function a(f) {
    const v = p.call(this, f);
    if (v)
      return v;
    const u = (0, r.getFullPath)(this.opts.uriResolver, f.root.baseId), { es5: m, lines: C } = this.opts.code, { ownProperties: l } = this.opts, d = new e.CodeGen(this.scope, { es5: m, lines: C, ownProperties: l });
    let g;
    f.$async && (g = d.scopeValue("Error", {
      ref: t.default,
      code: (0, e._)`require("ajv/dist/runtime/validation_error").default`
    }));
    const k = d.scopeName("validate");
    f.validateName = k;
    const E = {
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
      validateName: k,
      ValidationError: g,
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
    let P;
    try {
      this._compilations.add(f), (0, o.validateFunctionCode)(E), d.optimize(this.opts.code.optimize);
      const F = d.toString();
      P = `${d.scopeRefs(n.default.scope)}return ${F}`, this.opts.code.process && (P = this.opts.code.process(P, f));
      const I = new Function(`${n.default.self}`, `${n.default.scope}`, P)(this, this.scope.get());
      if (this.scope.value(k, { ref: I }), I.errors = null, I.schema = f.schema, I.schemaEnv = f, f.$async && (I.$async = !0), this.opts.code.source === !0 && (I.source = { validateName: k, validateCode: F, scopeValues: d._values }), this.opts.unevaluated) {
        const { props: G, items: Q } = E;
        I.evaluated = {
          props: G instanceof e.Name ? void 0 : G,
          items: Q instanceof e.Name ? void 0 : Q,
          dynamicProps: G instanceof e.Name,
          dynamicItems: Q instanceof e.Name
        }, I.source && (I.source.evaluated = (0, e.stringify)(I.evaluated));
      }
      return f.validate = I, f;
    } catch (F) {
      throw delete f.validate, delete f.validateName, P && this.logger.error("Error compiling schema, function code:", P), F;
    } finally {
      this._compilations.delete(f);
    }
  }
  be.compileSchema = a;
  function c(f, v, u) {
    var m;
    u = (0, r.resolveUrl)(this.opts.uriResolver, v, u);
    const C = f.refs[u];
    if (C)
      return C;
    let l = y.call(this, f, u);
    if (l === void 0) {
      const d = (m = f.localRefs) === null || m === void 0 ? void 0 : m[u], { schemaId: g } = this.opts;
      d && (l = new s({ schema: d, schemaId: g, root: f, baseId: v }));
    }
    if (l !== void 0)
      return f.refs[u] = h.call(this, l);
  }
  be.resolveRef = c;
  function h(f) {
    return (0, r.inlineRef)(f.schema, this.opts.inlineRefs) ? f.schema : f.validate ? f : a.call(this, f);
  }
  function p(f) {
    for (const v of this._compilations)
      if (b(v, f))
        return v;
  }
  be.getCompilingSchema = p;
  function b(f, v) {
    return f.schema === v.schema && f.root === v.root && f.baseId === v.baseId;
  }
  function y(f, v) {
    let u;
    for (; typeof (u = this.refs[v]) == "string"; )
      v = u;
    return u || this.schemas[v] || $.call(this, f, v);
  }
  function $(f, v) {
    const u = this.opts.uriResolver.parse(v), m = (0, r._getFullPath)(this.opts.uriResolver, u);
    let C = (0, r.getFullPath)(this.opts.uriResolver, f.baseId, void 0);
    if (Object.keys(f.schema).length > 0 && m === C)
      return w.call(this, u, f);
    const l = (0, r.normalizeId)(m), d = this.refs[l] || this.schemas[l];
    if (typeof d == "string") {
      const g = $.call(this, f, d);
      return typeof g?.schema != "object" ? void 0 : w.call(this, u, g);
    }
    if (typeof d?.schema == "object") {
      if (d.validate || a.call(this, d), l === (0, r.normalizeId)(v)) {
        const { schema: g } = d, { schemaId: k } = this.opts, E = g[k];
        return E && (C = (0, r.resolveUrl)(this.opts.uriResolver, C, E)), new s({ schema: g, schemaId: k, root: f, baseId: C });
      }
      return w.call(this, u, d);
    }
  }
  be.resolveSchema = $;
  const S = /* @__PURE__ */ new Set([
    "properties",
    "patternProperties",
    "enum",
    "dependencies",
    "definitions"
  ]);
  function w(f, { baseId: v, schema: u, root: m }) {
    var C;
    if (((C = f.fragment) === null || C === void 0 ? void 0 : C[0]) !== "/")
      return;
    for (const g of f.fragment.slice(1).split("/")) {
      if (typeof u == "boolean")
        return;
      const k = u[(0, i.unescapeFragment)(g)];
      if (k === void 0)
        return;
      u = k;
      const E = typeof u == "object" && u[this.opts.schemaId];
      !S.has(g) && E && (v = (0, r.resolveUrl)(this.opts.uriResolver, v, E));
    }
    let l;
    if (typeof u != "boolean" && u.$ref && !(0, i.schemaHasRulesButRef)(u, this.RULES)) {
      const g = (0, r.resolveUrl)(this.opts.uriResolver, v, u.$ref);
      l = $.call(this, m, g);
    }
    const { schemaId: d } = this.opts;
    if (l = l || new s({ schema: u, schemaId: d, root: m, baseId: v }), l.schema !== l.root.schema)
      return l;
  }
  return be;
}
const Ts = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", js = "Meta-schema for $data reference (JSON AnySchema extension proposal)", zs = "object", Is = ["$data"], Ds = { $data: { type: "string", anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] } }, qs = !1, Vs = {
  $id: Ts,
  description: js,
  type: zs,
  required: Is,
  properties: Ds,
  additionalProperties: qs
};
var Mt = {}, $t = { exports: {} }, er, ao;
function Li() {
  if (ao) return er;
  ao = 1;
  const e = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu), t = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u), n = RegExp.prototype.test.bind(/^[\da-f]{2}$/iu), r = RegExp.prototype.test.bind(/^[\da-z\-._~]$/iu), i = RegExp.prototype.test.bind(/^[\da-z\-._~!$&'()*+,;=:@/]$/iu);
  function o(l) {
    let d = "", g = 0, k = 0;
    for (k = 0; k < l.length; k++)
      if (g = l[k].charCodeAt(0), g !== 48) {
        if (!(g >= 48 && g <= 57 || g >= 65 && g <= 70 || g >= 97 && g <= 102))
          return "";
        d += l[k];
        break;
      }
    for (k += 1; k < l.length; k++) {
      if (g = l[k].charCodeAt(0), !(g >= 48 && g <= 57 || g >= 65 && g <= 70 || g >= 97 && g <= 102))
        return "";
      d += l[k];
    }
    return d;
  }
  const s = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
  function a(l) {
    return l.length = 0, !0;
  }
  function c(l, d, g) {
    if (l.length) {
      const k = o(l);
      if (k !== "")
        d.push(k);
      else
        return g.error = !0, !1;
      l.length = 0;
    }
    return !0;
  }
  function h(l) {
    let d = 0;
    const g = { error: !1, address: "", zone: "" }, k = [], E = [];
    let P = !1, F = !1, O = c;
    for (let I = 0; I < l.length; I++) {
      const G = l[I];
      if (!(G === "[" || G === "]"))
        if (G === ":") {
          if (P === !0 && (F = !0), !O(E, k, g))
            break;
          if (++d > 7) {
            g.error = !0;
            break;
          }
          I > 0 && l[I - 1] === ":" && (P = !0), k.push(":");
          continue;
        } else if (G === "%") {
          if (!O(E, k, g))
            break;
          O = a;
        } else {
          E.push(G);
          continue;
        }
    }
    return E.length && (O === a ? g.zone = E.join("") : F ? k.push(E.join("")) : k.push(o(E))), g.address = k.join(""), g;
  }
  function p(l) {
    if (b(l, ":") < 2)
      return { host: l, isIPV6: !1 };
    const d = h(l);
    if (d.error)
      return { host: l, isIPV6: !1 };
    {
      let g = d.address, k = d.address;
      return d.zone && (g += "%" + d.zone, k += "%25" + d.zone), { host: g, isIPV6: !0, escapedHost: k };
    }
  }
  function b(l, d) {
    let g = 0;
    for (let k = 0; k < l.length; k++)
      l[k] === d && g++;
    return g;
  }
  function y(l) {
    let d = l;
    const g = [];
    let k = -1, E = 0;
    for (; E = d.length; ) {
      if (E === 1) {
        if (d === ".")
          break;
        if (d === "/") {
          g.push("/");
          break;
        } else {
          g.push(d);
          break;
        }
      } else if (E === 2) {
        if (d[0] === ".") {
          if (d[1] === ".")
            break;
          if (d[1] === "/") {
            d = d.slice(2);
            continue;
          }
        } else if (d[0] === "/" && (d[1] === "." || d[1] === "/")) {
          g.push("/");
          break;
        }
      } else if (E === 3 && d === "/..") {
        g.length !== 0 && g.pop(), g.push("/");
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
          d = d.slice(3), g.length !== 0 && g.pop();
          continue;
        }
      }
      if ((k = d.indexOf("/", 1)) === -1) {
        g.push(d);
        break;
      } else
        g.push(d.slice(0, k)), d = d.slice(k);
    }
    return g.join("");
  }
  const $ = { "@": "%40", "/": "%2F", "?": "%3F", "#": "%23", ":": "%3A" }, S = /[@/?#:]/g, w = /[@/?#]/g;
  function f(l, d) {
    const g = d ? w : S;
    return g.lastIndex = 0, l.replace(g, (k) => $[k]);
  }
  function v(l, d = !1) {
    if (l.indexOf("%") === -1)
      return l;
    let g = "";
    for (let k = 0; k < l.length; k++) {
      if (l[k] === "%" && k + 2 < l.length) {
        const E = l.slice(k + 1, k + 3);
        if (n(E)) {
          const P = E.toUpperCase(), F = String.fromCharCode(parseInt(P, 16));
          d && r(F) ? g += F : g += "%" + P, k += 2;
          continue;
        }
      }
      g += l[k];
    }
    return g;
  }
  function u(l) {
    let d = "";
    for (let g = 0; g < l.length; g++) {
      if (l[g] === "%" && g + 2 < l.length) {
        const k = l.slice(g + 1, g + 3);
        if (n(k)) {
          const E = k.toUpperCase(), P = String.fromCharCode(parseInt(E, 16));
          P !== "." && r(P) ? d += P : d += "%" + E, g += 2;
          continue;
        }
      }
      i(l[g]) ? d += l[g] : d += escape(l[g]);
    }
    return d;
  }
  function m(l) {
    let d = "";
    for (let g = 0; g < l.length; g++) {
      if (l[g] === "%" && g + 2 < l.length) {
        const k = l.slice(g + 1, g + 3);
        if (n(k)) {
          d += "%" + k.toUpperCase(), g += 2;
          continue;
        }
      }
      d += escape(l[g]);
    }
    return d;
  }
  function C(l) {
    const d = [];
    if (l.userinfo !== void 0 && (d.push(l.userinfo), d.push("@")), l.host !== void 0) {
      let g = unescape(l.host);
      if (!t(g)) {
        const k = p(g);
        k.isIPV6 === !0 ? g = `[${k.escapedHost}]` : g = f(g, !1);
      }
      d.push(g);
    }
    return (typeof l.port == "number" || typeof l.port == "string") && (d.push(":"), d.push(String(l.port))), d.length ? d.join("") : void 0;
  }
  return er = {
    nonSimpleDomain: s,
    recomposeAuthority: C,
    reescapeHostDelimiters: f,
    normalizePercentEncoding: v,
    normalizePathEncoding: u,
    escapePreservingEscapes: m,
    removeDotSegments: y,
    isIPv4: t,
    isUUID: e,
    normalizeIPv6: p,
    stringArrayToHexStripped: o
  }, er;
}
var tr, co;
function Ls() {
  if (co) return tr;
  co = 1;
  const { isUUID: e } = Li(), t = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu, n = (
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
  function r(l) {
    return n.indexOf(
      /** @type {*} */
      l
    ) !== -1;
  }
  function i(l) {
    return l.secure === !0 ? !0 : l.secure === !1 ? !1 : l.scheme ? l.scheme.length === 3 && (l.scheme[0] === "w" || l.scheme[0] === "W") && (l.scheme[1] === "s" || l.scheme[1] === "S") && (l.scheme[2] === "s" || l.scheme[2] === "S") : !1;
  }
  function o(l) {
    return l.host || (l.error = l.error || "HTTP URIs must have a host."), l;
  }
  function s(l) {
    const d = String(l.scheme).toLowerCase() === "https";
    return (l.port === (d ? 443 : 80) || l.port === "") && (l.port = void 0), l.path || (l.path = "/"), l;
  }
  function a(l) {
    return l.secure = i(l), l.resourceName = (l.path || "/") + (l.query ? "?" + l.query : ""), l.path = void 0, l.query = void 0, l;
  }
  function c(l) {
    if ((l.port === (i(l) ? 443 : 80) || l.port === "") && (l.port = void 0), typeof l.secure == "boolean" && (l.scheme = l.secure ? "wss" : "ws", l.secure = void 0), l.resourceName) {
      const [d, g] = l.resourceName.split("?");
      l.path = d && d !== "/" ? d : void 0, l.query = g, l.resourceName = void 0;
    }
    return l.fragment = void 0, l;
  }
  function h(l, d) {
    if (!l.path)
      return l.error = "URN can not be parsed", l;
    const g = l.path.match(t);
    if (g) {
      const k = d.scheme || l.scheme || "urn";
      l.nid = g[1].toLowerCase(), l.nss = g[2];
      const E = `${k}:${d.nid || l.nid}`, P = C(E);
      l.path = void 0, P && (l = P.parse(l, d));
    } else
      l.error = l.error || "URN can not be parsed.";
    return l;
  }
  function p(l, d) {
    if (l.nid === void 0)
      throw new Error("URN without nid cannot be serialized");
    const g = d.scheme || l.scheme || "urn", k = l.nid.toLowerCase(), E = `${g}:${d.nid || k}`, P = C(E);
    P && (l = P.serialize(l, d));
    const F = l, O = l.nss;
    return F.path = `${k || d.nid}:${O}`, d.skipEscape = !0, F;
  }
  function b(l, d) {
    const g = l;
    return g.uuid = g.nss, g.nss = void 0, !d.tolerant && (!g.uuid || !e(g.uuid)) && (g.error = g.error || "UUID is not valid."), g;
  }
  function y(l) {
    const d = l;
    return d.nss = (l.uuid || "").toLowerCase(), d;
  }
  const $ = (
    /** @type {SchemeHandler} */
    {
      scheme: "http",
      domainHost: !0,
      parse: o,
      serialize: s
    }
  ), S = (
    /** @type {SchemeHandler} */
    {
      scheme: "https",
      domainHost: $.domainHost,
      parse: o,
      serialize: s
    }
  ), w = (
    /** @type {SchemeHandler} */
    {
      scheme: "ws",
      domainHost: !0,
      parse: a,
      serialize: c
    }
  ), f = (
    /** @type {SchemeHandler} */
    {
      scheme: "wss",
      domainHost: w.domainHost,
      parse: w.parse,
      serialize: w.serialize
    }
  ), m = (
    /** @type {Record<SchemeName, SchemeHandler>} */
    {
      http: $,
      https: S,
      ws: w,
      wss: f,
      urn: (
        /** @type {SchemeHandler} */
        {
          scheme: "urn",
          parse: h,
          serialize: p,
          skipNormalize: !0
        }
      ),
      "urn:uuid": (
        /** @type {SchemeHandler} */
        {
          scheme: "urn:uuid",
          parse: b,
          serialize: y,
          skipNormalize: !0
        }
      )
    }
  );
  Object.setPrototypeOf(m, null);
  function C(l) {
    return l && (m[
      /** @type {SchemeName} */
      l
    ] || m[
      /** @type {SchemeName} */
      l.toLowerCase()
    ]) || void 0;
  }
  return tr = {
    wsIsSecure: i,
    SCHEMES: m,
    isValidSchemeName: r,
    getSchemeHandler: C
  }, tr;
}
var lo;
function Bs() {
  if (lo) return $t.exports;
  lo = 1;
  const { normalizeIPv6: e, removeDotSegments: t, recomposeAuthority: n, normalizePercentEncoding: r, normalizePathEncoding: i, escapePreservingEscapes: o, reescapeHostDelimiters: s, isIPv4: a, nonSimpleDomain: c } = Li(), { SCHEMES: h, getSchemeHandler: p } = Ls();
  function b(E, P) {
    return typeof E == "string" ? E = /** @type {T} */
    l(E, P) : typeof E == "object" && (E = /** @type {T} */
    C(w(E, P), P)), E;
  }
  function y(E, P, F) {
    const O = F ? Object.assign({ scheme: "null" }, F) : { scheme: "null" }, I = $(C(E, O), C(P, O), O, !0);
    return O.skipEscape = !0, w(I, O);
  }
  function $(E, P, F, O) {
    const I = {};
    return O || (E = C(w(E, F), F), P = C(w(P, F), F)), F = F || {}, !F.tolerant && P.scheme ? (I.scheme = P.scheme, I.userinfo = P.userinfo, I.host = P.host, I.port = P.port, I.path = t(P.path || ""), I.query = P.query) : (P.userinfo !== void 0 || P.host !== void 0 || P.port !== void 0 ? (I.userinfo = P.userinfo, I.host = P.host, I.port = P.port, I.path = t(P.path || ""), I.query = P.query) : (P.path ? (P.path[0] === "/" ? I.path = t(P.path) : ((E.userinfo !== void 0 || E.host !== void 0 || E.port !== void 0) && !E.path ? I.path = "/" + P.path : E.path ? I.path = E.path.slice(0, E.path.lastIndexOf("/") + 1) + P.path : I.path = P.path, I.path = t(I.path)), I.query = P.query) : (I.path = E.path, P.query !== void 0 ? I.query = P.query : I.query = E.query), I.userinfo = E.userinfo, I.host = E.host, I.port = E.port), I.scheme = E.scheme), I.fragment = P.fragment, I;
  }
  function S(E, P, F) {
    const O = g(E, F), I = g(P, F);
    return O !== void 0 && I !== void 0 && O.toLowerCase() === I.toLowerCase();
  }
  function w(E, P) {
    const F = {
      host: E.host,
      scheme: E.scheme,
      userinfo: E.userinfo,
      port: E.port,
      path: E.path,
      query: E.query,
      nid: E.nid,
      nss: E.nss,
      uuid: E.uuid,
      fragment: E.fragment,
      reference: E.reference,
      resourceName: E.resourceName,
      secure: E.secure,
      error: ""
    }, O = Object.assign({}, P), I = [], G = p(O.scheme || F.scheme);
    G && G.serialize && G.serialize(F, O), F.path !== void 0 && (O.skipEscape ? F.path = r(F.path) : (F.path = o(F.path), F.scheme !== void 0 && (F.path = F.path.split("%3A").join(":")))), O.reference !== "suffix" && F.scheme && I.push(F.scheme, ":");
    const Q = n(F);
    if (Q !== void 0 && (O.reference !== "suffix" && I.push("//"), I.push(Q), F.path && F.path[0] !== "/" && I.push("/")), F.path !== void 0) {
      let te = F.path;
      !O.absolutePath && (!G || !G.absolutePath) && (te = t(te)), Q === void 0 && te[0] === "/" && te[1] === "/" && (te = "/%2F" + te.slice(2)), I.push(te);
    }
    return F.query !== void 0 && I.push("?", F.query), F.fragment !== void 0 && I.push("#", F.fragment), I.join("");
  }
  const f = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u, v = /^(?:[^#/:?]+:)?\/\/([^/?#]*)/;
  function u(E, P) {
    if (P[2] !== void 0 && E.path && E.path[0] !== "/")
      return 'URI path must start with "/" when authority is present.';
    if (typeof E.port == "number" && (E.port < 0 || E.port > 65535))
      return "URI port is malformed.";
  }
  function m(E, P) {
    const F = Object.assign({}, P), O = {
      scheme: void 0,
      userinfo: void 0,
      host: "",
      port: void 0,
      path: "",
      query: void 0,
      fragment: void 0
    };
    let I = !1, G = !1;
    F.reference === "suffix" && (F.scheme ? E = F.scheme + ":" + E : E = "//" + E);
    const Q = E.match(v);
    Q !== null && Q[1].indexOf("\\") !== -1 && (O.error = "URI authority must not contain a literal backslash.", I = !0);
    const te = E.match(f);
    if (te) {
      O.scheme = te[1], O.userinfo = te[3], O.host = te[4], O.port = parseInt(te[5], 10), O.path = te[6] || "", O.query = te[7], O.fragment = te[8], isNaN(O.port) && (O.port = te[5]);
      const H = u(O, te);
      if (H !== void 0 && (O.error = O.error || H, I = !0), O.host)
        if (a(O.host) === !1) {
          const q = e(O.host);
          O.host = q.host.toLowerCase(), G = q.isIPV6;
        } else
          G = !0;
      O.scheme === void 0 && O.userinfo === void 0 && O.host === void 0 && O.port === void 0 && O.query === void 0 && !O.path ? O.reference = "same-document" : O.scheme === void 0 ? O.reference = "relative" : O.fragment === void 0 ? O.reference = "absolute" : O.reference = "uri", F.reference && F.reference !== "suffix" && F.reference !== O.reference && (O.error = O.error || "URI is not a " + F.reference + " reference.");
      const B = p(F.scheme || O.scheme);
      if (!F.unicodeSupport && (!B || !B.unicodeSupport) && O.host && (F.domainHost || B && B.domainHost) && G === !1 && c(O.host))
        try {
          O.host = new URL("http://" + O.host).hostname;
        } catch (Y) {
          O.error = O.error || "Host's domain name can not be converted to ASCII: " + Y;
        }
      if ((!B || B && !B.skipNormalize) && (E.indexOf("%") !== -1 && (O.scheme !== void 0 && (O.scheme = unescape(O.scheme)), O.host !== void 0 && (O.host = s(unescape(O.host), G))), O.path && (O.path = i(O.path)), O.fragment))
        try {
          O.fragment = encodeURI(decodeURIComponent(O.fragment));
        } catch {
          O.error = O.error || "URI malformed";
        }
      B && B.parse && B.parse(O, F);
    } else
      O.error = O.error || "URI can not be parsed.";
    return { parsed: O, malformedAuthorityOrPort: I };
  }
  function C(E, P) {
    return m(E, P).parsed;
  }
  function l(E, P) {
    return d(E, P).normalized;
  }
  function d(E, P) {
    const { parsed: F, malformedAuthorityOrPort: O } = m(E, P);
    return {
      normalized: O ? E : w(F, P),
      malformedAuthorityOrPort: O
    };
  }
  function g(E, P) {
    if (typeof E == "string") {
      const { normalized: F, malformedAuthorityOrPort: O } = d(E, P);
      return O ? void 0 : F;
    }
    if (typeof E == "object")
      return w(E, P);
  }
  const k = {
    SCHEMES: h,
    normalize: b,
    resolve: y,
    resolveComponent: $,
    equal: S,
    serialize: w,
    parse: C
  };
  return $t.exports = k, $t.exports.default = k, $t.exports.fastUri = k, $t.exports;
}
var uo;
function Us() {
  if (uo) return Mt;
  uo = 1, Object.defineProperty(Mt, "__esModule", { value: !0 });
  const e = Bs();
  return e.code = 'require("ajv/dist/runtime/uri").default', Mt.default = e, Mt;
}
var fo;
function Ks() {
  return fo || (fo = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = void 0;
    var t = /* @__PURE__ */ In();
    Object.defineProperty(e, "KeywordCxt", { enumerable: !0, get: function() {
      return t.KeywordCxt;
    } });
    var n = /* @__PURE__ */ ee();
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
    const r = /* @__PURE__ */ vr(), i = /* @__PURE__ */ Dn(), o = /* @__PURE__ */ Di(), s = /* @__PURE__ */ qn(), a = /* @__PURE__ */ ee(), c = /* @__PURE__ */ zn(), h = /* @__PURE__ */ On(), p = /* @__PURE__ */ oe(), b = Vs, y = /* @__PURE__ */ Us(), $ = (q, A) => new RegExp(q, A);
    $.code = "new RegExp";
    const S = ["removeAdditional", "useDefaults", "coerceTypes"], w = /* @__PURE__ */ new Set([
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
    }, v = {
      ignoreKeywordsWithRef: "",
      jsPropertySyntax: "",
      unicode: '"minLength"/"maxLength" account for unicode characters by default.'
    }, u = 200;
    function m(q) {
      var A, D, R, _, x, z, W, K, Z, ie, N, T, L, U, J, re, ue, Se, ve, $e, fe, Qe, we, Un, Kn;
      const gt = q.strict, Hn = (A = q.code) === null || A === void 0 ? void 0 : A.optimize, Mr = Hn === !0 || Hn === void 0 ? 1 : Hn || 0, Tr = (R = (D = q.code) === null || D === void 0 ? void 0 : D.regExp) !== null && R !== void 0 ? R : $, ls = (_ = q.uriResolver) !== null && _ !== void 0 ? _ : y.default;
      return {
        strictSchema: (z = (x = q.strictSchema) !== null && x !== void 0 ? x : gt) !== null && z !== void 0 ? z : !0,
        strictNumbers: (K = (W = q.strictNumbers) !== null && W !== void 0 ? W : gt) !== null && K !== void 0 ? K : !0,
        strictTypes: (ie = (Z = q.strictTypes) !== null && Z !== void 0 ? Z : gt) !== null && ie !== void 0 ? ie : "log",
        strictTuples: (T = (N = q.strictTuples) !== null && N !== void 0 ? N : gt) !== null && T !== void 0 ? T : "log",
        strictRequired: (U = (L = q.strictRequired) !== null && L !== void 0 ? L : gt) !== null && U !== void 0 ? U : !1,
        code: q.code ? { ...q.code, optimize: Mr, regExp: Tr } : { optimize: Mr, regExp: Tr },
        loopRequired: (J = q.loopRequired) !== null && J !== void 0 ? J : u,
        loopEnum: (re = q.loopEnum) !== null && re !== void 0 ? re : u,
        meta: (ue = q.meta) !== null && ue !== void 0 ? ue : !0,
        messages: (Se = q.messages) !== null && Se !== void 0 ? Se : !0,
        inlineRefs: (ve = q.inlineRefs) !== null && ve !== void 0 ? ve : !0,
        schemaId: ($e = q.schemaId) !== null && $e !== void 0 ? $e : "$id",
        addUsedSchema: (fe = q.addUsedSchema) !== null && fe !== void 0 ? fe : !0,
        validateSchema: (Qe = q.validateSchema) !== null && Qe !== void 0 ? Qe : !0,
        validateFormats: (we = q.validateFormats) !== null && we !== void 0 ? we : !0,
        unicodeRegExp: (Un = q.unicodeRegExp) !== null && Un !== void 0 ? Un : !0,
        int32range: (Kn = q.int32range) !== null && Kn !== void 0 ? Kn : !0,
        uriResolver: ls
      };
    }
    class C {
      constructor(A = {}) {
        this.schemas = {}, this.refs = {}, this.formats = /* @__PURE__ */ Object.create(null), this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), A = this.opts = { ...A, ...m(A) };
        const { es5: D, lines: R } = this.opts.code;
        this.scope = new a.ValueScope({ scope: {}, prefixes: w, es5: D, lines: R }), this.logger = O(A.logger);
        const _ = A.validateFormats;
        A.validateFormats = !1, this.RULES = (0, o.getRules)(), l.call(this, f, A, "NOT SUPPORTED"), l.call(this, v, A, "DEPRECATED", "warn"), this._metaOpts = P.call(this), A.formats && k.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), A.keywords && E.call(this, A.keywords), typeof A.meta == "object" && this.addMetaSchema(A.meta), g.call(this), A.validateFormats = _;
      }
      _addVocabularies() {
        this.addKeyword("$async");
      }
      _addDefaultMetaSchema() {
        const { $data: A, meta: D, schemaId: R } = this.opts;
        let _ = b;
        R === "id" && (_ = { ...b }, _.id = _.$id, delete _.$id), D && A && this.addMetaSchema(_, _[R], !1);
      }
      defaultMeta() {
        const { meta: A, schemaId: D } = this.opts;
        return this.opts.defaultMeta = typeof A == "object" ? A[D] || A : void 0;
      }
      validate(A, D) {
        let R;
        if (typeof A == "string") {
          if (R = this.getSchema(A), !R)
            throw new Error(`no schema with key or ref "${A}"`);
        } else
          R = this.compile(A);
        const _ = R(D);
        return "$async" in R || (this.errors = R.errors), _;
      }
      compile(A, D) {
        const R = this._addSchema(A, D);
        return R.validate || this._compileSchemaEnv(R);
      }
      compileAsync(A, D) {
        if (typeof this.opts.loadSchema != "function")
          throw new Error("options.loadSchema should be a function");
        const { loadSchema: R } = this.opts;
        return _.call(this, A, D);
        async function _(ie, N) {
          await x.call(this, ie.$schema);
          const T = this._addSchema(ie, N);
          return T.validate || z.call(this, T);
        }
        async function x(ie) {
          ie && !this.getSchema(ie) && await _.call(this, { $ref: ie }, !0);
        }
        async function z(ie) {
          try {
            return this._compileSchemaEnv(ie);
          } catch (N) {
            if (!(N instanceof i.default))
              throw N;
            return W.call(this, N), await K.call(this, N.missingSchema), z.call(this, ie);
          }
        }
        function W({ missingSchema: ie, missingRef: N }) {
          if (this.refs[ie])
            throw new Error(`AnySchema ${ie} is loaded but ${N} cannot be resolved`);
        }
        async function K(ie) {
          const N = await Z.call(this, ie);
          this.refs[ie] || await x.call(this, N.$schema), this.refs[ie] || this.addSchema(N, ie, D);
        }
        async function Z(ie) {
          const N = this._loading[ie];
          if (N)
            return N;
          try {
            return await (this._loading[ie] = R(ie));
          } finally {
            delete this._loading[ie];
          }
        }
      }
      // Adds schema to the instance
      addSchema(A, D, R, _ = this.opts.validateSchema) {
        if (Array.isArray(A)) {
          for (const z of A)
            this.addSchema(z, void 0, R, _);
          return this;
        }
        let x;
        if (typeof A == "object") {
          const { schemaId: z } = this.opts;
          if (x = A[z], x !== void 0 && typeof x != "string")
            throw new Error(`schema ${z} must be string`);
        }
        return D = (0, c.normalizeId)(D || x), this._checkUnique(D), this.schemas[D] = this._addSchema(A, R, D, _, !0), this;
      }
      // Add schema that will be used to validate other schemas
      // options in META_IGNORE_OPTIONS are alway set to false
      addMetaSchema(A, D, R = this.opts.validateSchema) {
        return this.addSchema(A, D, !0, R), this;
      }
      //  Validate schema against its meta-schema
      validateSchema(A, D) {
        if (typeof A == "boolean")
          return !0;
        let R;
        if (R = A.$schema, R !== void 0 && typeof R != "string")
          throw new Error("$schema must be a string");
        if (R = R || this.opts.defaultMeta || this.defaultMeta(), !R)
          return this.logger.warn("meta-schema not available"), this.errors = null, !0;
        const _ = this.validate(R, A);
        if (!_ && D) {
          const x = "schema is invalid: " + this.errorsText();
          if (this.opts.validateSchema === "log")
            this.logger.error(x);
          else
            throw new Error(x);
        }
        return _;
      }
      // Get compiled schema by `key` or `ref`.
      // (`key` that was passed to `addSchema` or full schema reference - `schema.$id` or resolved id)
      getSchema(A) {
        let D;
        for (; typeof (D = d.call(this, A)) == "string"; )
          A = D;
        if (D === void 0) {
          const { schemaId: R } = this.opts, _ = new s.SchemaEnv({ schema: {}, schemaId: R });
          if (D = s.resolveSchema.call(this, _, A), !D)
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
            const D = d.call(this, A);
            return typeof D == "object" && this._cache.delete(D.schema), delete this.schemas[A], delete this.refs[A], this;
          }
          case "object": {
            const D = A;
            this._cache.delete(D);
            let R = A[this.opts.schemaId];
            return R && (R = (0, c.normalizeId)(R), delete this.schemas[R], delete this.refs[R]), this;
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
        let R;
        if (typeof A == "string")
          R = A, typeof D == "object" && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), D.keyword = R);
        else if (typeof A == "object" && D === void 0) {
          if (D = A, R = D.keyword, Array.isArray(R) && !R.length)
            throw new Error("addKeywords: keyword must be string or non-empty array");
        } else
          throw new Error("invalid addKeywords parameters");
        if (G.call(this, R, D), !D)
          return (0, p.eachItem)(R, (x) => Q.call(this, x)), this;
        H.call(this, D);
        const _ = {
          ...D,
          type: (0, h.getJSONTypes)(D.type),
          schemaType: (0, h.getJSONTypes)(D.schemaType)
        };
        return (0, p.eachItem)(R, _.type.length === 0 ? (x) => Q.call(this, x, _) : (x) => _.type.forEach((z) => Q.call(this, x, _, z))), this;
      }
      getKeyword(A) {
        const D = this.RULES.all[A];
        return typeof D == "object" ? D.definition : !!D;
      }
      // Remove keyword
      removeKeyword(A) {
        const { RULES: D } = this;
        delete D.keywords[A], delete D.all[A];
        for (const R of D.rules) {
          const _ = R.rules.findIndex((x) => x.keyword === A);
          _ >= 0 && R.rules.splice(_, 1);
        }
        return this;
      }
      // Add format
      addFormat(A, D) {
        return typeof D == "string" && (D = new RegExp(D)), this.formats[A] = D, this;
      }
      errorsText(A = this.errors, { separator: D = ", ", dataVar: R = "data" } = {}) {
        return !A || A.length === 0 ? "No errors" : A.map((_) => `${R}${_.instancePath} ${_.message}`).reduce((_, x) => _ + D + x);
      }
      $dataMetaSchema(A, D) {
        const R = this.RULES.all;
        A = JSON.parse(JSON.stringify(A));
        for (const _ of D) {
          const x = _.split("/").slice(1);
          let z = A;
          for (const W of x)
            z = z[W];
          for (const W in R) {
            const K = R[W];
            if (typeof K != "object")
              continue;
            const { $data: Z } = K.definition, ie = z[W];
            Z && ie && (z[W] = Y(ie));
          }
        }
        return A;
      }
      _removeAllSchemas(A, D) {
        for (const R in A) {
          const _ = A[R];
          (!D || D.test(R)) && (typeof _ == "string" ? delete A[R] : _ && !_.meta && (this._cache.delete(_.schema), delete A[R]));
        }
      }
      _addSchema(A, D, R, _ = this.opts.validateSchema, x = this.opts.addUsedSchema) {
        let z;
        const { schemaId: W } = this.opts;
        if (typeof A == "object")
          z = A[W];
        else {
          if (this.opts.jtd)
            throw new Error("schema must be object");
          if (typeof A != "boolean")
            throw new Error("schema must be object or boolean");
        }
        let K = this._cache.get(A);
        if (K !== void 0)
          return K;
        R = (0, c.normalizeId)(z || R);
        const Z = c.getSchemaRefs.call(this, A, R);
        return K = new s.SchemaEnv({ schema: A, schemaId: W, meta: D, baseId: R, localRefs: Z }), this._cache.set(K.schema, K), x && !R.startsWith("#") && (R && this._checkUnique(R), this.refs[R] = K), _ && this.validateSchema(A, !0), K;
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
        const D = this.opts;
        this.opts = this._metaOpts;
        try {
          s.compileSchema.call(this, A);
        } finally {
          this.opts = D;
        }
      }
    }
    C.ValidationError = r.default, C.MissingRefError = i.default, e.default = C;
    function l(q, A, D, R = "error") {
      for (const _ in q) {
        const x = _;
        x in A && this.logger[R](`${D}: option ${_}. ${q[x]}`);
      }
    }
    function d(q) {
      return q = (0, c.normalizeId)(q), this.schemas[q] || this.refs[q];
    }
    function g() {
      const q = this.opts.schemas;
      if (q)
        if (Array.isArray(q))
          this.addSchema(q);
        else
          for (const A in q)
            this.addSchema(q[A], A);
    }
    function k() {
      for (const q in this.opts.formats) {
        const A = this.opts.formats[q];
        A && this.addFormat(q, A);
      }
    }
    function E(q) {
      if (Array.isArray(q)) {
        this.addVocabulary(q);
        return;
      }
      this.logger.warn("keywords option as map is deprecated, pass array");
      for (const A in q) {
        const D = q[A];
        D.keyword || (D.keyword = A), this.addKeyword(D);
      }
    }
    function P() {
      const q = { ...this.opts };
      for (const A of S)
        delete q[A];
      return q;
    }
    const F = { log() {
    }, warn() {
    }, error() {
    } };
    function O(q) {
      if (q === !1)
        return F;
      if (q === void 0)
        return console;
      if (q.log && q.warn && q.error)
        return q;
      throw new Error("logger must implement log, warn and error methods");
    }
    const I = /^[a-z_$][a-z0-9_$:-]*$/i;
    function G(q, A) {
      const { RULES: D } = this;
      if ((0, p.eachItem)(q, (R) => {
        if (D.keywords[R])
          throw new Error(`Keyword ${R} is already defined`);
        if (!I.test(R))
          throw new Error(`Keyword ${R} has invalid name`);
      }), !!A && A.$data && !("code" in A || "validate" in A))
        throw new Error('$data keyword must have "code" or "validate" function');
    }
    function Q(q, A, D) {
      var R;
      const _ = A?.post;
      if (D && _)
        throw new Error('keyword with "post" flag cannot have "type"');
      const { RULES: x } = this;
      let z = _ ? x.post : x.rules.find(({ type: K }) => K === D);
      if (z || (z = { type: D, rules: [] }, x.rules.push(z)), x.keywords[q] = !0, !A)
        return;
      const W = {
        keyword: q,
        definition: {
          ...A,
          type: (0, h.getJSONTypes)(A.type),
          schemaType: (0, h.getJSONTypes)(A.schemaType)
        }
      };
      A.before ? te.call(this, z, W, A.before) : z.rules.push(W), x.all[q] = W, (R = A.implements) === null || R === void 0 || R.forEach((K) => this.addKeyword(K));
    }
    function te(q, A, D) {
      const R = q.rules.findIndex((_) => _.keyword === D);
      R >= 0 ? q.rules.splice(R, 0, A) : (q.rules.push(A), this.logger.warn(`rule ${D} is not defined`));
    }
    function H(q) {
      let { metaSchema: A } = q;
      A !== void 0 && (q.$data && this.opts.$data && (A = Y(A)), q.validateSchema = this.compile(A, !0));
    }
    const B = {
      $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
    };
    function Y(q) {
      return { anyOf: [q, B] };
    }
  })(Gn)), Gn;
}
var Tt = {}, jt = {}, zt = {}, po;
function Hs() {
  if (po) return zt;
  po = 1, Object.defineProperty(zt, "__esModule", { value: !0 });
  const e = {
    keyword: "id",
    code() {
      throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
    }
  };
  return zt.default = e, zt;
}
var Ve = {}, ho;
function $r() {
  if (ho) return Ve;
  ho = 1, Object.defineProperty(Ve, "__esModule", { value: !0 }), Ve.callRef = Ve.getValidate = void 0;
  const e = /* @__PURE__ */ Dn(), t = /* @__PURE__ */ Ne(), n = /* @__PURE__ */ ee(), r = /* @__PURE__ */ Re(), i = /* @__PURE__ */ qn(), o = /* @__PURE__ */ oe(), s = {
    keyword: "$ref",
    schemaType: "string",
    code(h) {
      const { gen: p, schema: b, it: y } = h, { baseId: $, schemaEnv: S, validateName: w, opts: f, self: v } = y, { root: u } = S;
      if ((b === "#" || b === "#/") && $ === u.baseId)
        return C();
      const m = i.resolveRef.call(v, u, $, b);
      if (m === void 0)
        throw new e.default(y.opts.uriResolver, $, b);
      if (m instanceof i.SchemaEnv)
        return l(m);
      return d(m);
      function C() {
        if (S === u)
          return c(h, w, S, S.$async);
        const g = p.scopeValue("root", { ref: u });
        return c(h, (0, n._)`${g}.validate`, u, u.$async);
      }
      function l(g) {
        const k = a(h, g);
        c(h, k, g, g.$async);
      }
      function d(g) {
        const k = p.scopeValue("schema", f.code.source === !0 ? { ref: g, code: (0, n.stringify)(g) } : { ref: g }), E = p.name("valid"), P = h.subschema({
          schema: g,
          dataTypes: [],
          schemaPath: n.nil,
          topSchemaRef: k,
          errSchemaPath: b
        }, E);
        h.mergeEvaluated(P), h.ok(E);
      }
    }
  };
  function a(h, p) {
    const { gen: b } = h;
    return p.validate ? b.scopeValue("validate", { ref: p.validate }) : (0, n._)`${b.scopeValue("wrapper", { ref: p })}.validate`;
  }
  Ve.getValidate = a;
  function c(h, p, b, y) {
    const { gen: $, it: S } = h, { allErrors: w, schemaEnv: f, opts: v } = S, u = v.passContext ? r.default.this : n.nil;
    y ? m() : C();
    function m() {
      if (!f.$async)
        throw new Error("async schema referenced by sync schema");
      const g = $.let("valid");
      $.try(() => {
        $.code((0, n._)`await ${(0, t.callValidateCode)(h, p, u)}`), d(p), w || $.assign(g, !0);
      }, (k) => {
        $.if((0, n._)`!(${k} instanceof ${S.ValidationError})`, () => $.throw(k)), l(k), w || $.assign(g, !1);
      }), h.ok(g);
    }
    function C() {
      h.result((0, t.callValidateCode)(h, p, u), () => d(p), () => l(p));
    }
    function l(g) {
      const k = (0, n._)`${g}.errors`;
      $.assign(r.default.vErrors, (0, n._)`${r.default.vErrors} === null ? ${k} : ${r.default.vErrors}.concat(${k})`), $.assign(r.default.errors, (0, n._)`${r.default.vErrors}.length`);
    }
    function d(g) {
      var k;
      if (!S.opts.unevaluated)
        return;
      const E = (k = b?.validate) === null || k === void 0 ? void 0 : k.evaluated;
      if (S.props !== !0)
        if (E && !E.dynamicProps)
          E.props !== void 0 && (S.props = o.mergeEvaluated.props($, E.props, S.props));
        else {
          const P = $.var("props", (0, n._)`${g}.evaluated.props`);
          S.props = o.mergeEvaluated.props($, P, S.props, n.Name);
        }
      if (S.items !== !0)
        if (E && !E.dynamicItems)
          E.items !== void 0 && (S.items = o.mergeEvaluated.items($, E.items, S.items));
        else {
          const P = $.var("items", (0, n._)`${g}.evaluated.items`);
          S.items = o.mergeEvaluated.items($, P, S.items, n.Name);
        }
    }
  }
  return Ve.callRef = c, Ve.default = s, Ve;
}
var mo;
function Gs() {
  if (mo) return jt;
  mo = 1, Object.defineProperty(jt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Hs(), t = /* @__PURE__ */ $r(), n = [
    "$schema",
    "$id",
    "$defs",
    "$vocabulary",
    { keyword: "$comment" },
    "definitions",
    e.default,
    t.default
  ];
  return jt.default = n, jt;
}
var It = {}, Dt = {}, go;
function Ws() {
  if (go) return Dt;
  go = 1, Object.defineProperty(Dt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = e.operators, n = {
    maximum: { okStr: "<=", ok: t.LTE, fail: t.GT },
    minimum: { okStr: ">=", ok: t.GTE, fail: t.LT },
    exclusiveMaximum: { okStr: "<", ok: t.LT, fail: t.GTE },
    exclusiveMinimum: { okStr: ">", ok: t.GT, fail: t.LTE }
  }, r = {
    message: ({ keyword: o, schemaCode: s }) => (0, e.str)`must be ${n[o].okStr} ${s}`,
    params: ({ keyword: o, schemaCode: s }) => (0, e._)`{comparison: ${n[o].okStr}, limit: ${s}}`
  }, i = {
    keyword: Object.keys(n),
    type: "number",
    schemaType: "number",
    $data: !0,
    error: r,
    code(o) {
      const { keyword: s, data: a, schemaCode: c } = o;
      o.fail$data((0, e._)`${a} ${n[s].fail} ${c} || isNaN(${a})`);
    }
  };
  return Dt.default = i, Dt;
}
var qt = {}, yo;
function Js() {
  if (yo) return qt;
  yo = 1, Object.defineProperty(qt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), n = {
    keyword: "multipleOf",
    type: "number",
    schemaType: "number",
    $data: !0,
    error: {
      message: ({ schemaCode: r }) => (0, e.str)`must be multiple of ${r}`,
      params: ({ schemaCode: r }) => (0, e._)`{multipleOf: ${r}}`
    },
    code(r) {
      const { gen: i, data: o, schemaCode: s, it: a } = r, c = a.opts.multipleOfPrecision, h = i.let("res"), p = c ? (0, e._)`Math.abs(Math.round(${h}) - ${h}) > 1e-${c}` : (0, e._)`${h} !== parseInt(${h})`;
      r.fail$data((0, e._)`(${s} === 0 || (${h} = ${o}/${s}, ${p}))`);
    }
  };
  return qt.default = n, qt;
}
var Vt = {}, Lt = {}, vo;
function Ys() {
  if (vo) return Lt;
  vo = 1, Object.defineProperty(Lt, "__esModule", { value: !0 });
  function e(t) {
    const n = t.length;
    let r = 0, i = 0, o;
    for (; i < n; )
      r++, o = t.charCodeAt(i++), o >= 55296 && o <= 56319 && i < n && (o = t.charCodeAt(i), (o & 64512) === 56320 && i++);
    return r;
  }
  return Lt.default = e, e.code = 'require("ajv/dist/runtime/ucs2length").default', Lt;
}
var $o;
function Xs() {
  if ($o) return Vt;
  $o = 1, Object.defineProperty(Vt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ oe(), n = /* @__PURE__ */ Ys(), i = {
    keyword: ["maxLength", "minLength"],
    type: "string",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: o, schemaCode: s }) {
        const a = o === "maxLength" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${a} than ${s} characters`;
      },
      params: ({ schemaCode: o }) => (0, e._)`{limit: ${o}}`
    },
    code(o) {
      const { keyword: s, data: a, schemaCode: c, it: h } = o, p = s === "maxLength" ? e.operators.GT : e.operators.LT, b = h.opts.unicode === !1 ? (0, e._)`${a}.length` : (0, e._)`${(0, t.useFunc)(o.gen, n.default)}(${a})`;
      o.fail$data((0, e._)`${b} ${p} ${c}`);
    }
  };
  return Vt.default = i, Vt;
}
var Bt = {}, bo;
function Zs() {
  if (bo) return Bt;
  bo = 1, Object.defineProperty(Bt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ne(), t = /* @__PURE__ */ oe(), n = /* @__PURE__ */ ee(), i = {
    keyword: "pattern",
    type: "string",
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: o }) => (0, n.str)`must match pattern "${o}"`,
      params: ({ schemaCode: o }) => (0, n._)`{pattern: ${o}}`
    },
    code(o) {
      const { gen: s, data: a, $data: c, schema: h, schemaCode: p, it: b } = o, y = b.opts.unicodeRegExp ? "u" : "";
      if (c) {
        const { regExp: $ } = b.opts.code, S = $.code === "new RegExp" ? (0, n._)`new RegExp` : (0, t.useFunc)(s, $), w = s.let("valid");
        s.try(() => s.assign(w, (0, n._)`${S}(${p}, ${y}).test(${a})`), () => s.assign(w, !1)), o.fail$data((0, n._)`!${w}`);
      } else {
        const $ = (0, e.usePattern)(o, h);
        o.fail$data((0, n._)`!${$}.test(${a})`);
      }
    }
  };
  return Bt.default = i, Bt;
}
var Ut = {}, wo;
function Qs() {
  if (wo) return Ut;
  wo = 1, Object.defineProperty(Ut, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), n = {
    keyword: ["maxProperties", "minProperties"],
    type: "object",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: r, schemaCode: i }) {
        const o = r === "maxProperties" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${o} than ${i} properties`;
      },
      params: ({ schemaCode: r }) => (0, e._)`{limit: ${r}}`
    },
    code(r) {
      const { keyword: i, data: o, schemaCode: s } = r, a = i === "maxProperties" ? e.operators.GT : e.operators.LT;
      r.fail$data((0, e._)`Object.keys(${o}).length ${a} ${s}`);
    }
  };
  return Ut.default = n, Ut;
}
var Kt = {}, _o;
function ea() {
  if (_o) return Kt;
  _o = 1, Object.defineProperty(Kt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ne(), t = /* @__PURE__ */ ee(), n = /* @__PURE__ */ oe(), i = {
    keyword: "required",
    type: "object",
    schemaType: "array",
    $data: !0,
    error: {
      message: ({ params: { missingProperty: o } }) => (0, t.str)`must have required property '${o}'`,
      params: ({ params: { missingProperty: o } }) => (0, t._)`{missingProperty: ${o}}`
    },
    code(o) {
      const { gen: s, schema: a, schemaCode: c, data: h, $data: p, it: b } = o, { opts: y } = b;
      if (!p && a.length === 0)
        return;
      const $ = a.length >= y.loopRequired;
      if (b.allErrors ? S() : w(), y.strictRequired) {
        const u = o.parentSchema.properties, { definedProperties: m } = o.it;
        for (const C of a)
          if (u?.[C] === void 0 && !m.has(C)) {
            const l = b.schemaEnv.baseId + b.errSchemaPath, d = `required property "${C}" is not defined at "${l}" (strictRequired)`;
            (0, n.checkStrictMode)(b, d, b.opts.strictRequired);
          }
      }
      function S() {
        if ($ || p)
          o.block$data(t.nil, f);
        else
          for (const u of a)
            (0, e.checkReportMissingProp)(o, u);
      }
      function w() {
        const u = s.let("missing");
        if ($ || p) {
          const m = s.let("valid", !0);
          o.block$data(m, () => v(u, m)), o.ok(m);
        } else
          s.if((0, e.checkMissingProp)(o, a, u)), (0, e.reportMissingProp)(o, u), s.else();
      }
      function f() {
        s.forOf("prop", c, (u) => {
          o.setParams({ missingProperty: u }), s.if((0, e.noPropertyInData)(s, h, u, y.ownProperties), () => o.error());
        });
      }
      function v(u, m) {
        o.setParams({ missingProperty: u }), s.forOf(u, c, () => {
          s.assign(m, (0, e.propertyInData)(s, h, u, y.ownProperties)), s.if((0, t.not)(m), () => {
            o.error(), s.break();
          });
        }, t.nil);
      }
    }
  };
  return Kt.default = i, Kt;
}
var Ht = {}, So;
function ta() {
  if (So) return Ht;
  So = 1, Object.defineProperty(Ht, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), n = {
    keyword: ["maxItems", "minItems"],
    type: "array",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: r, schemaCode: i }) {
        const o = r === "maxItems" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${o} than ${i} items`;
      },
      params: ({ schemaCode: r }) => (0, e._)`{limit: ${r}}`
    },
    code(r) {
      const { keyword: i, data: o, schemaCode: s } = r, a = i === "maxItems" ? e.operators.GT : e.operators.LT;
      r.fail$data((0, e._)`${o}.length ${a} ${s}`);
    }
  };
  return Ht.default = n, Ht;
}
var Gt = {}, Wt = {}, Co;
function br() {
  if (Co) return Wt;
  Co = 1, Object.defineProperty(Wt, "__esModule", { value: !0 });
  const e = Vi();
  return e.code = 'require("ajv/dist/runtime/equal").default', Wt.default = e, Wt;
}
var ko;
function na() {
  if (ko) return Gt;
  ko = 1, Object.defineProperty(Gt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ On(), t = /* @__PURE__ */ ee(), n = /* @__PURE__ */ oe(), r = /* @__PURE__ */ br(), o = {
    keyword: "uniqueItems",
    type: "array",
    schemaType: "boolean",
    $data: !0,
    error: {
      message: ({ params: { i: s, j: a } }) => (0, t.str)`must NOT have duplicate items (items ## ${a} and ${s} are identical)`,
      params: ({ params: { i: s, j: a } }) => (0, t._)`{i: ${s}, j: ${a}}`
    },
    code(s) {
      const { gen: a, data: c, $data: h, schema: p, parentSchema: b, schemaCode: y, it: $ } = s;
      if (!h && !p)
        return;
      const S = a.let("valid"), w = b.items ? (0, e.getSchemaTypes)(b.items) : [];
      s.block$data(S, f, (0, t._)`${y} === false`), s.ok(S);
      function f() {
        const C = a.let("i", (0, t._)`${c}.length`), l = a.let("j");
        s.setParams({ i: C, j: l }), a.assign(S, !0), a.if((0, t._)`${C} > 1`, () => (v() ? u : m)(C, l));
      }
      function v() {
        return w.length > 0 && !w.some((C) => C === "object" || C === "array");
      }
      function u(C, l) {
        const d = a.name("item"), g = (0, e.checkDataTypes)(w, d, $.opts.strictNumbers, e.DataType.Wrong), k = a.const("indices", (0, t._)`{}`);
        a.for((0, t._)`;${C}--;`, () => {
          a.let(d, (0, t._)`${c}[${C}]`), a.if(g, (0, t._)`continue`), w.length > 1 && a.if((0, t._)`typeof ${d} == "string"`, (0, t._)`${d} += "_"`), a.if((0, t._)`typeof ${k}[${d}] == "number"`, () => {
            a.assign(l, (0, t._)`${k}[${d}]`), s.error(), a.assign(S, !1).break();
          }).code((0, t._)`${k}[${d}] = ${C}`);
        });
      }
      function m(C, l) {
        const d = (0, n.useFunc)(a, r.default), g = a.name("outer");
        a.label(g).for((0, t._)`;${C}--;`, () => a.for((0, t._)`${l} = ${C}; ${l}--;`, () => a.if((0, t._)`${d}(${c}[${C}], ${c}[${l}])`, () => {
          s.error(), a.assign(S, !1).break(g);
        })));
      }
    }
  };
  return Gt.default = o, Gt;
}
var Jt = {}, Eo;
function ra() {
  if (Eo) return Jt;
  Eo = 1, Object.defineProperty(Jt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ oe(), n = /* @__PURE__ */ br(), i = {
    keyword: "const",
    $data: !0,
    error: {
      message: "must be equal to constant",
      params: ({ schemaCode: o }) => (0, e._)`{allowedValue: ${o}}`
    },
    code(o) {
      const { gen: s, data: a, $data: c, schemaCode: h, schema: p } = o;
      c || p && typeof p == "object" ? o.fail$data((0, e._)`!${(0, t.useFunc)(s, n.default)}(${a}, ${h})`) : o.fail((0, e._)`${p} !== ${a}`);
    }
  };
  return Jt.default = i, Jt;
}
var Yt = {}, xo;
function oa() {
  if (xo) return Yt;
  xo = 1, Object.defineProperty(Yt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ oe(), n = /* @__PURE__ */ br(), i = {
    keyword: "enum",
    schemaType: "array",
    $data: !0,
    error: {
      message: "must be equal to one of the allowed values",
      params: ({ schemaCode: o }) => (0, e._)`{allowedValues: ${o}}`
    },
    code(o) {
      const { gen: s, data: a, $data: c, schema: h, schemaCode: p, it: b } = o;
      if (!c && h.length === 0)
        throw new Error("enum must have non-empty array");
      const y = h.length >= b.opts.loopEnum;
      let $;
      const S = () => $ ?? ($ = (0, t.useFunc)(s, n.default));
      let w;
      if (y || c)
        w = s.let("valid"), o.block$data(w, f);
      else {
        if (!Array.isArray(h))
          throw new Error("ajv implementation error");
        const u = s.const("vSchema", p);
        w = (0, e.or)(...h.map((m, C) => v(u, C)));
      }
      o.pass(w);
      function f() {
        s.assign(w, !1), s.forOf("v", p, (u) => s.if((0, e._)`${S()}(${a}, ${u})`, () => s.assign(w, !0).break()));
      }
      function v(u, m) {
        const C = h[m];
        return typeof C == "object" && C !== null ? (0, e._)`${S()}(${a}, ${u}[${m}])` : (0, e._)`${a} === ${C}`;
      }
    }
  };
  return Yt.default = i, Yt;
}
var Po;
function ia() {
  if (Po) return It;
  Po = 1, Object.defineProperty(It, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ws(), t = /* @__PURE__ */ Js(), n = /* @__PURE__ */ Xs(), r = /* @__PURE__ */ Zs(), i = /* @__PURE__ */ Qs(), o = /* @__PURE__ */ ea(), s = /* @__PURE__ */ ta(), a = /* @__PURE__ */ na(), c = /* @__PURE__ */ ra(), h = /* @__PURE__ */ oa(), p = [
    // number
    e.default,
    t.default,
    // string
    n.default,
    r.default,
    // object
    i.default,
    o.default,
    // array
    s.default,
    a.default,
    // any
    { keyword: "type", schemaType: ["string", "array"] },
    { keyword: "nullable", schemaType: "boolean" },
    c.default,
    h.default
  ];
  return It.default = p, It;
}
var Xt = {}, et = {}, Ao;
function Bi() {
  if (Ao) return et;
  Ao = 1, Object.defineProperty(et, "__esModule", { value: !0 }), et.validateAdditionalItems = void 0;
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ oe(), r = {
    keyword: "additionalItems",
    type: "array",
    schemaType: ["boolean", "object"],
    before: "uniqueItems",
    error: {
      message: ({ params: { len: o } }) => (0, e.str)`must NOT have more than ${o} items`,
      params: ({ params: { len: o } }) => (0, e._)`{limit: ${o}}`
    },
    code(o) {
      const { parentSchema: s, it: a } = o, { items: c } = s;
      if (!Array.isArray(c)) {
        (0, t.checkStrictMode)(a, '"additionalItems" is ignored when "items" is not an array of schemas');
        return;
      }
      i(o, c);
    }
  };
  function i(o, s) {
    const { gen: a, schema: c, data: h, keyword: p, it: b } = o;
    b.items = !0;
    const y = a.const("len", (0, e._)`${h}.length`);
    if (c === !1)
      o.setParams({ len: s.length }), o.pass((0, e._)`${y} <= ${s.length}`);
    else if (typeof c == "object" && !(0, t.alwaysValidSchema)(b, c)) {
      const S = a.var("valid", (0, e._)`${y} <= ${s.length}`);
      a.if((0, e.not)(S), () => $(S)), o.ok(S);
    }
    function $(S) {
      a.forRange("i", s.length, y, (w) => {
        o.subschema({ keyword: p, dataProp: w, dataPropType: t.Type.Num }, S), b.allErrors || a.if((0, e.not)(S), () => a.break());
      });
    }
  }
  return et.validateAdditionalItems = i, et.default = r, et;
}
var Zt = {}, tt = {}, Ro;
function Ui() {
  if (Ro) return tt;
  Ro = 1, Object.defineProperty(tt, "__esModule", { value: !0 }), tt.validateTuple = void 0;
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ oe(), n = /* @__PURE__ */ Ne(), r = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "array", "boolean"],
    before: "uniqueItems",
    code(o) {
      const { schema: s, it: a } = o;
      if (Array.isArray(s))
        return i(o, "additionalItems", s);
      a.items = !0, !(0, t.alwaysValidSchema)(a, s) && o.ok((0, n.validateArray)(o));
    }
  };
  function i(o, s, a = o.schema) {
    const { gen: c, parentSchema: h, data: p, keyword: b, it: y } = o;
    w(h), y.opts.unevaluated && a.length && y.items !== !0 && (y.items = t.mergeEvaluated.items(c, a.length, y.items));
    const $ = c.name("valid"), S = c.const("len", (0, e._)`${p}.length`);
    a.forEach((f, v) => {
      (0, t.alwaysValidSchema)(y, f) || (c.if((0, e._)`${S} > ${v}`, () => o.subschema({
        keyword: b,
        schemaProp: v,
        dataProp: v
      }, $)), o.ok($));
    });
    function w(f) {
      const { opts: v, errSchemaPath: u } = y, m = a.length, C = m === f.minItems && (m === f.maxItems || f[s] === !1);
      if (v.strictTuples && !C) {
        const l = `"${b}" is ${m}-tuple, but minItems or maxItems/${s} are not specified or different at path "${u}"`;
        (0, t.checkStrictMode)(y, l, v.strictTuples);
      }
    }
  }
  return tt.validateTuple = i, tt.default = r, tt;
}
var No;
function sa() {
  if (No) return Zt;
  No = 1, Object.defineProperty(Zt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ui(), t = {
    keyword: "prefixItems",
    type: "array",
    schemaType: ["array"],
    before: "uniqueItems",
    code: (n) => (0, e.validateTuple)(n, "items")
  };
  return Zt.default = t, Zt;
}
var Qt = {}, Fo;
function aa() {
  if (Fo) return Qt;
  Fo = 1, Object.defineProperty(Qt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ oe(), n = /* @__PURE__ */ Ne(), r = /* @__PURE__ */ Bi(), o = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    error: {
      message: ({ params: { len: s } }) => (0, e.str)`must NOT have more than ${s} items`,
      params: ({ params: { len: s } }) => (0, e._)`{limit: ${s}}`
    },
    code(s) {
      const { schema: a, parentSchema: c, it: h } = s, { prefixItems: p } = c;
      h.items = !0, !(0, t.alwaysValidSchema)(h, a) && (p ? (0, r.validateAdditionalItems)(s, p) : s.ok((0, n.validateArray)(s)));
    }
  };
  return Qt.default = o, Qt;
}
var en = {}, Oo;
function ca() {
  if (Oo) return en;
  Oo = 1, Object.defineProperty(en, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ oe(), r = {
    keyword: "contains",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    trackErrors: !0,
    error: {
      message: ({ params: { min: i, max: o } }) => o === void 0 ? (0, e.str)`must contain at least ${i} valid item(s)` : (0, e.str)`must contain at least ${i} and no more than ${o} valid item(s)`,
      params: ({ params: { min: i, max: o } }) => o === void 0 ? (0, e._)`{minContains: ${i}}` : (0, e._)`{minContains: ${i}, maxContains: ${o}}`
    },
    code(i) {
      const { gen: o, schema: s, parentSchema: a, data: c, it: h } = i;
      let p, b;
      const { minContains: y, maxContains: $ } = a;
      h.opts.next ? (p = y === void 0 ? 1 : y, b = $) : p = 1;
      const S = o.const("len", (0, e._)`${c}.length`);
      if (i.setParams({ min: p, max: b }), b === void 0 && p === 0) {
        (0, t.checkStrictMode)(h, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
        return;
      }
      if (b !== void 0 && p > b) {
        (0, t.checkStrictMode)(h, '"minContains" > "maxContains" is always invalid'), i.fail();
        return;
      }
      if ((0, t.alwaysValidSchema)(h, s)) {
        let m = (0, e._)`${S} >= ${p}`;
        b !== void 0 && (m = (0, e._)`${m} && ${S} <= ${b}`), i.pass(m);
        return;
      }
      h.items = !0;
      const w = o.name("valid");
      b === void 0 && p === 1 ? v(w, () => o.if(w, () => o.break())) : p === 0 ? (o.let(w, !0), b !== void 0 && o.if((0, e._)`${c}.length > 0`, f)) : (o.let(w, !1), f()), i.result(w, () => i.reset());
      function f() {
        const m = o.name("_valid"), C = o.let("count", 0);
        v(m, () => o.if(m, () => u(C)));
      }
      function v(m, C) {
        o.forRange("i", 0, S, (l) => {
          i.subschema({
            keyword: "contains",
            dataProp: l,
            dataPropType: t.Type.Num,
            compositeRule: !0
          }, m), C();
        });
      }
      function u(m) {
        o.code((0, e._)`${m}++`), b === void 0 ? o.if((0, e._)`${m} >= ${p}`, () => o.assign(w, !0).break()) : (o.if((0, e._)`${m} > ${b}`, () => o.assign(w, !1).break()), p === 1 ? o.assign(w, !0) : o.if((0, e._)`${m} >= ${p}`, () => o.assign(w, !0)));
      }
    }
  };
  return en.default = r, en;
}
var nr = {}, Mo;
function wr() {
  return Mo || (Mo = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
    const t = /* @__PURE__ */ ee(), n = /* @__PURE__ */ oe(), r = /* @__PURE__ */ Ne();
    e.error = {
      message: ({ params: { property: c, depsCount: h, deps: p } }) => {
        const b = h === 1 ? "property" : "properties";
        return (0, t.str)`must have ${b} ${p} when property ${c} is present`;
      },
      params: ({ params: { property: c, depsCount: h, deps: p, missingProperty: b } }) => (0, t._)`{property: ${c},
    missingProperty: ${b},
    depsCount: ${h},
    deps: ${p}}`
      // TODO change to reference
    };
    const i = {
      keyword: "dependencies",
      type: "object",
      schemaType: "object",
      error: e.error,
      code(c) {
        const [h, p] = o(c);
        s(c, h), a(c, p);
      }
    };
    function o({ schema: c }) {
      const h = {}, p = {};
      for (const b in c) {
        if (b === "__proto__")
          continue;
        const y = Array.isArray(c[b]) ? h : p;
        y[b] = c[b];
      }
      return [h, p];
    }
    function s(c, h = c.schema) {
      const { gen: p, data: b, it: y } = c;
      if (Object.keys(h).length === 0)
        return;
      const $ = p.let("missing");
      for (const S in h) {
        const w = h[S];
        if (w.length === 0)
          continue;
        const f = (0, r.propertyInData)(p, b, S, y.opts.ownProperties);
        c.setParams({
          property: S,
          depsCount: w.length,
          deps: w.join(", ")
        }), y.allErrors ? p.if(f, () => {
          for (const v of w)
            (0, r.checkReportMissingProp)(c, v);
        }) : (p.if((0, t._)`${f} && (${(0, r.checkMissingProp)(c, w, $)})`), (0, r.reportMissingProp)(c, $), p.else());
      }
    }
    e.validatePropertyDeps = s;
    function a(c, h = c.schema) {
      const { gen: p, data: b, keyword: y, it: $ } = c, S = p.name("valid");
      for (const w in h)
        (0, n.alwaysValidSchema)($, h[w]) || (p.if(
          (0, r.propertyInData)(p, b, w, $.opts.ownProperties),
          () => {
            const f = c.subschema({ keyword: y, schemaProp: w }, S);
            c.mergeValidEvaluated(f, S);
          },
          () => p.var(S, !0)
          // TODO var
        ), c.ok(S));
    }
    e.validateSchemaDeps = a, e.default = i;
  })(nr)), nr;
}
var tn = {}, To;
function la() {
  if (To) return tn;
  To = 1, Object.defineProperty(tn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ oe(), r = {
    keyword: "propertyNames",
    type: "object",
    schemaType: ["object", "boolean"],
    error: {
      message: "property name must be valid",
      params: ({ params: i }) => (0, e._)`{propertyName: ${i.propertyName}}`
    },
    code(i) {
      const { gen: o, schema: s, data: a, it: c } = i;
      if ((0, t.alwaysValidSchema)(c, s))
        return;
      const h = o.name("valid");
      o.forIn("key", a, (p) => {
        i.setParams({ propertyName: p }), i.subschema({
          keyword: "propertyNames",
          data: p,
          dataTypes: ["string"],
          propertyName: p,
          compositeRule: !0
        }, h), o.if((0, e.not)(h), () => {
          i.error(!0), c.allErrors || o.break();
        });
      }), i.ok(h);
    }
  };
  return tn.default = r, tn;
}
var nn = {}, jo;
function Ki() {
  if (jo) return nn;
  jo = 1, Object.defineProperty(nn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ne(), t = /* @__PURE__ */ ee(), n = /* @__PURE__ */ Re(), r = /* @__PURE__ */ oe(), o = {
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
      const { gen: a, schema: c, parentSchema: h, data: p, errsCount: b, it: y } = s;
      if (!b)
        throw new Error("ajv implementation error");
      const { allErrors: $, opts: S } = y;
      if (y.props = !0, S.removeAdditional !== "all" && (0, r.alwaysValidSchema)(y, c))
        return;
      const w = (0, e.allSchemaProperties)(h.properties), f = (0, e.allSchemaProperties)(h.patternProperties);
      v(), s.ok((0, t._)`${b} === ${n.default.errors}`);
      function v() {
        a.forIn("key", p, (d) => {
          !w.length && !f.length ? C(d) : a.if(u(d), () => C(d));
        });
      }
      function u(d) {
        let g;
        if (w.length > 8) {
          const k = (0, r.schemaRefOrVal)(y, h.properties, "properties");
          g = (0, e.isOwnProperty)(a, k, d);
        } else w.length ? g = (0, t.or)(...w.map((k) => (0, t._)`${d} === ${k}`)) : g = t.nil;
        return f.length && (g = (0, t.or)(g, ...f.map((k) => (0, t._)`${(0, e.usePattern)(s, k)}.test(${d})`))), (0, t.not)(g);
      }
      function m(d) {
        a.code((0, t._)`delete ${p}[${d}]`);
      }
      function C(d) {
        if (S.removeAdditional === "all" || S.removeAdditional && c === !1) {
          m(d);
          return;
        }
        if (c === !1) {
          s.setParams({ additionalProperty: d }), s.error(), $ || a.break();
          return;
        }
        if (typeof c == "object" && !(0, r.alwaysValidSchema)(y, c)) {
          const g = a.name("valid");
          S.removeAdditional === "failing" ? (l(d, g, !1), a.if((0, t.not)(g), () => {
            s.reset(), m(d);
          })) : (l(d, g), $ || a.if((0, t.not)(g), () => a.break()));
        }
      }
      function l(d, g, k) {
        const E = {
          keyword: "additionalProperties",
          dataProp: d,
          dataPropType: r.Type.Str
        };
        k === !1 && Object.assign(E, {
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }), s.subschema(E, g);
      }
    }
  };
  return nn.default = o, nn;
}
var rn = {}, zo;
function da() {
  if (zo) return rn;
  zo = 1, Object.defineProperty(rn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ In(), t = /* @__PURE__ */ Ne(), n = /* @__PURE__ */ oe(), r = /* @__PURE__ */ Ki(), i = {
    keyword: "properties",
    type: "object",
    schemaType: "object",
    code(o) {
      const { gen: s, schema: a, parentSchema: c, data: h, it: p } = o;
      p.opts.removeAdditional === "all" && c.additionalProperties === void 0 && r.default.code(new e.KeywordCxt(p, r.default, "additionalProperties"));
      const b = (0, t.allSchemaProperties)(a);
      for (const f of b)
        p.definedProperties.add(f);
      p.opts.unevaluated && b.length && p.props !== !0 && (p.props = n.mergeEvaluated.props(s, (0, n.toHash)(b), p.props));
      const y = b.filter((f) => !(0, n.alwaysValidSchema)(p, a[f]));
      if (y.length === 0)
        return;
      const $ = s.name("valid");
      for (const f of y)
        S(f) ? w(f) : (s.if((0, t.propertyInData)(s, h, f, p.opts.ownProperties)), w(f), p.allErrors || s.else().var($, !0), s.endIf()), o.it.definedProperties.add(f), o.ok($);
      function S(f) {
        return p.opts.useDefaults && !p.compositeRule && a[f].default !== void 0;
      }
      function w(f) {
        o.subschema({
          keyword: "properties",
          schemaProp: f,
          dataProp: f
        }, $);
      }
    }
  };
  return rn.default = i, rn;
}
var on = {}, Io;
function ua() {
  if (Io) return on;
  Io = 1, Object.defineProperty(on, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ne(), t = /* @__PURE__ */ ee(), n = /* @__PURE__ */ oe(), r = /* @__PURE__ */ oe(), i = {
    keyword: "patternProperties",
    type: "object",
    schemaType: "object",
    code(o) {
      const { gen: s, schema: a, data: c, parentSchema: h, it: p } = o, { opts: b } = p, y = (0, e.allSchemaProperties)(a), $ = y.filter((C) => (0, n.alwaysValidSchema)(p, a[C]));
      if (y.length === 0 || $.length === y.length && (!p.opts.unevaluated || p.props === !0))
        return;
      const S = b.strictSchema && !b.allowMatchingProperties && h.properties, w = s.name("valid");
      p.props !== !0 && !(p.props instanceof t.Name) && (p.props = (0, r.evaluatedPropsToName)(s, p.props));
      const { props: f } = p;
      v();
      function v() {
        for (const C of y)
          S && u(C), p.allErrors ? m(C) : (s.var(w, !0), m(C), s.if(w));
      }
      function u(C) {
        for (const l in S)
          new RegExp(C).test(l) && (0, n.checkStrictMode)(p, `property ${l} matches pattern ${C} (use allowMatchingProperties)`);
      }
      function m(C) {
        s.forIn("key", c, (l) => {
          s.if((0, t._)`${(0, e.usePattern)(o, C)}.test(${l})`, () => {
            const d = $.includes(C);
            d || o.subschema({
              keyword: "patternProperties",
              schemaProp: C,
              dataProp: l,
              dataPropType: r.Type.Str
            }, w), p.opts.unevaluated && f !== !0 ? s.assign((0, t._)`${f}[${l}]`, !0) : !d && !p.allErrors && s.if((0, t.not)(w), () => s.break());
          });
        });
      }
    }
  };
  return on.default = i, on;
}
var sn = {}, Do;
function fa() {
  if (Do) return sn;
  Do = 1, Object.defineProperty(sn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ oe(), t = {
    keyword: "not",
    schemaType: ["object", "boolean"],
    trackErrors: !0,
    code(n) {
      const { gen: r, schema: i, it: o } = n;
      if ((0, e.alwaysValidSchema)(o, i)) {
        n.fail();
        return;
      }
      const s = r.name("valid");
      n.subschema({
        keyword: "not",
        compositeRule: !0,
        createErrors: !1,
        allErrors: !1
      }, s), n.failResult(s, () => n.reset(), () => n.error());
    },
    error: { message: "must NOT be valid" }
  };
  return sn.default = t, sn;
}
var an = {}, qo;
function pa() {
  if (qo) return an;
  qo = 1, Object.defineProperty(an, "__esModule", { value: !0 });
  const t = {
    keyword: "anyOf",
    schemaType: "array",
    trackErrors: !0,
    code: (/* @__PURE__ */ Ne()).validateUnion,
    error: { message: "must match a schema in anyOf" }
  };
  return an.default = t, an;
}
var cn = {}, Vo;
function ha() {
  if (Vo) return cn;
  Vo = 1, Object.defineProperty(cn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ oe(), r = {
    keyword: "oneOf",
    schemaType: "array",
    trackErrors: !0,
    error: {
      message: "must match exactly one schema in oneOf",
      params: ({ params: i }) => (0, e._)`{passingSchemas: ${i.passing}}`
    },
    code(i) {
      const { gen: o, schema: s, parentSchema: a, it: c } = i;
      if (!Array.isArray(s))
        throw new Error("ajv implementation error");
      if (c.opts.discriminator && a.discriminator)
        return;
      const h = s, p = o.let("valid", !1), b = o.let("passing", null), y = o.name("_valid");
      i.setParams({ passing: b }), o.block($), i.result(p, () => i.reset(), () => i.error(!0));
      function $() {
        h.forEach((S, w) => {
          let f;
          (0, t.alwaysValidSchema)(c, S) ? o.var(y, !0) : f = i.subschema({
            keyword: "oneOf",
            schemaProp: w,
            compositeRule: !0
          }, y), w > 0 && o.if((0, e._)`${y} && ${p}`).assign(p, !1).assign(b, (0, e._)`[${b}, ${w}]`).else(), o.if(y, () => {
            o.assign(p, !0), o.assign(b, w), f && i.mergeEvaluated(f, e.Name);
          });
        });
      }
    }
  };
  return cn.default = r, cn;
}
var ln = {}, Lo;
function ma() {
  if (Lo) return ln;
  Lo = 1, Object.defineProperty(ln, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ oe(), t = {
    keyword: "allOf",
    schemaType: "array",
    code(n) {
      const { gen: r, schema: i, it: o } = n;
      if (!Array.isArray(i))
        throw new Error("ajv implementation error");
      const s = r.name("valid");
      i.forEach((a, c) => {
        if ((0, e.alwaysValidSchema)(o, a))
          return;
        const h = n.subschema({ keyword: "allOf", schemaProp: c }, s);
        n.ok(s), n.mergeEvaluated(h);
      });
    }
  };
  return ln.default = t, ln;
}
var dn = {}, Bo;
function ga() {
  if (Bo) return dn;
  Bo = 1, Object.defineProperty(dn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ oe(), r = {
    keyword: "if",
    schemaType: ["object", "boolean"],
    trackErrors: !0,
    error: {
      message: ({ params: o }) => (0, e.str)`must match "${o.ifClause}" schema`,
      params: ({ params: o }) => (0, e._)`{failingKeyword: ${o.ifClause}}`
    },
    code(o) {
      const { gen: s, parentSchema: a, it: c } = o;
      a.then === void 0 && a.else === void 0 && (0, t.checkStrictMode)(c, '"if" without "then" and "else" is ignored');
      const h = i(c, "then"), p = i(c, "else");
      if (!h && !p)
        return;
      const b = s.let("valid", !0), y = s.name("_valid");
      if ($(), o.reset(), h && p) {
        const w = s.let("ifClause");
        o.setParams({ ifClause: w }), s.if(y, S("then", w), S("else", w));
      } else h ? s.if(y, S("then")) : s.if((0, e.not)(y), S("else"));
      o.pass(b, () => o.error(!0));
      function $() {
        const w = o.subschema({
          keyword: "if",
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }, y);
        o.mergeEvaluated(w);
      }
      function S(w, f) {
        return () => {
          const v = o.subschema({ keyword: w }, y);
          s.assign(b, y), o.mergeValidEvaluated(v, b), f ? s.assign(f, (0, e._)`${w}`) : o.setParams({ ifClause: w });
        };
      }
    }
  };
  function i(o, s) {
    const a = o.schema[s];
    return a !== void 0 && !(0, t.alwaysValidSchema)(o, a);
  }
  return dn.default = r, dn;
}
var un = {}, Uo;
function ya() {
  if (Uo) return un;
  Uo = 1, Object.defineProperty(un, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ oe(), t = {
    keyword: ["then", "else"],
    schemaType: ["object", "boolean"],
    code({ keyword: n, parentSchema: r, it: i }) {
      r.if === void 0 && (0, e.checkStrictMode)(i, `"${n}" without "if" is ignored`);
    }
  };
  return un.default = t, un;
}
var Ko;
function va() {
  if (Ko) return Xt;
  Ko = 1, Object.defineProperty(Xt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Bi(), t = /* @__PURE__ */ sa(), n = /* @__PURE__ */ Ui(), r = /* @__PURE__ */ aa(), i = /* @__PURE__ */ ca(), o = /* @__PURE__ */ wr(), s = /* @__PURE__ */ la(), a = /* @__PURE__ */ Ki(), c = /* @__PURE__ */ da(), h = /* @__PURE__ */ ua(), p = /* @__PURE__ */ fa(), b = /* @__PURE__ */ pa(), y = /* @__PURE__ */ ha(), $ = /* @__PURE__ */ ma(), S = /* @__PURE__ */ ga(), w = /* @__PURE__ */ ya();
  function f(v = !1) {
    const u = [
      // any
      p.default,
      b.default,
      y.default,
      $.default,
      S.default,
      w.default,
      // object
      s.default,
      a.default,
      o.default,
      c.default,
      h.default
    ];
    return v ? u.push(t.default, r.default) : u.push(e.default, n.default), u.push(i.default), u;
  }
  return Xt.default = f, Xt;
}
var fn = {}, nt = {}, Ho;
function Hi() {
  if (Ho) return nt;
  Ho = 1, Object.defineProperty(nt, "__esModule", { value: !0 }), nt.dynamicAnchor = void 0;
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ Re(), n = /* @__PURE__ */ qn(), r = /* @__PURE__ */ $r(), i = {
    keyword: "$dynamicAnchor",
    schemaType: "string",
    code: (a) => o(a, a.schema)
  };
  function o(a, c) {
    const { gen: h, it: p } = a;
    p.schemaEnv.root.dynamicAnchors[c] = !0;
    const b = (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(c)}`, y = p.errSchemaPath === "#" ? p.validateName : s(a);
    h.if((0, e._)`!${b}`, () => h.assign(b, y));
  }
  nt.dynamicAnchor = o;
  function s(a) {
    const { schemaEnv: c, schema: h, self: p } = a.it, { root: b, baseId: y, localRefs: $, meta: S } = c.root, { schemaId: w } = p.opts, f = new n.SchemaEnv({ schema: h, schemaId: w, root: b, baseId: y, localRefs: $, meta: S });
    return n.compileSchema.call(p, f), (0, r.getValidate)(a, f);
  }
  return nt.default = i, nt;
}
var rt = {}, Go;
function Gi() {
  if (Go) return rt;
  Go = 1, Object.defineProperty(rt, "__esModule", { value: !0 }), rt.dynamicRef = void 0;
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ Re(), n = /* @__PURE__ */ $r(), r = {
    keyword: "$dynamicRef",
    schemaType: "string",
    code: (o) => i(o, o.schema)
  };
  function i(o, s) {
    const { gen: a, keyword: c, it: h } = o;
    if (s[0] !== "#")
      throw new Error(`"${c}" only supports hash fragment reference`);
    const p = s.slice(1);
    if (h.allErrors)
      b();
    else {
      const $ = a.let("valid", !1);
      b($), o.ok($);
    }
    function b($) {
      if (h.schemaEnv.root.dynamicAnchors[p]) {
        const S = a.let("_v", (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(p)}`);
        a.if(S, y(S, $), y(h.validateName, $));
      } else
        y(h.validateName, $)();
    }
    function y($, S) {
      return S ? () => a.block(() => {
        (0, n.callRef)(o, $), a.let(S, !0);
      }) : () => (0, n.callRef)(o, $);
    }
  }
  return rt.dynamicRef = i, rt.default = r, rt;
}
var pn = {}, Wo;
function $a() {
  if (Wo) return pn;
  Wo = 1, Object.defineProperty(pn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Hi(), t = /* @__PURE__ */ oe(), n = {
    keyword: "$recursiveAnchor",
    schemaType: "boolean",
    code(r) {
      r.schema ? (0, e.dynamicAnchor)(r, "") : (0, t.checkStrictMode)(r.it, "$recursiveAnchor: false is ignored");
    }
  };
  return pn.default = n, pn;
}
var hn = {}, Jo;
function ba() {
  if (Jo) return hn;
  Jo = 1, Object.defineProperty(hn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Gi(), t = {
    keyword: "$recursiveRef",
    schemaType: "string",
    code: (n) => (0, e.dynamicRef)(n, n.schema)
  };
  return hn.default = t, hn;
}
var Yo;
function wa() {
  if (Yo) return fn;
  Yo = 1, Object.defineProperty(fn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Hi(), t = /* @__PURE__ */ Gi(), n = /* @__PURE__ */ $a(), r = /* @__PURE__ */ ba(), i = [e.default, t.default, n.default, r.default];
  return fn.default = i, fn;
}
var mn = {}, gn = {}, Xo;
function _a() {
  if (Xo) return gn;
  Xo = 1, Object.defineProperty(gn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ wr(), t = {
    keyword: "dependentRequired",
    type: "object",
    schemaType: "object",
    error: e.error,
    code: (n) => (0, e.validatePropertyDeps)(n)
  };
  return gn.default = t, gn;
}
var yn = {}, Zo;
function Sa() {
  if (Zo) return yn;
  Zo = 1, Object.defineProperty(yn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ wr(), t = {
    keyword: "dependentSchemas",
    type: "object",
    schemaType: "object",
    code: (n) => (0, e.validateSchemaDeps)(n)
  };
  return yn.default = t, yn;
}
var vn = {}, Qo;
function Ca() {
  if (Qo) return vn;
  Qo = 1, Object.defineProperty(vn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ oe(), t = {
    keyword: ["maxContains", "minContains"],
    type: "array",
    schemaType: "number",
    code({ keyword: n, parentSchema: r, it: i }) {
      r.contains === void 0 && (0, e.checkStrictMode)(i, `"${n}" without "contains" is ignored`);
    }
  };
  return vn.default = t, vn;
}
var ei;
function ka() {
  if (ei) return mn;
  ei = 1, Object.defineProperty(mn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ _a(), t = /* @__PURE__ */ Sa(), n = /* @__PURE__ */ Ca(), r = [e.default, t.default, n.default];
  return mn.default = r, mn;
}
var $n = {}, bn = {}, ti;
function Ea() {
  if (ti) return bn;
  ti = 1, Object.defineProperty(bn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ oe(), n = /* @__PURE__ */ Re(), i = {
    keyword: "unevaluatedProperties",
    type: "object",
    schemaType: ["boolean", "object"],
    trackErrors: !0,
    error: {
      message: "must NOT have unevaluated properties",
      params: ({ params: o }) => (0, e._)`{unevaluatedProperty: ${o.unevaluatedProperty}}`
    },
    code(o) {
      const { gen: s, schema: a, data: c, errsCount: h, it: p } = o;
      if (!h)
        throw new Error("ajv implementation error");
      const { allErrors: b, props: y } = p;
      y instanceof e.Name ? s.if((0, e._)`${y} !== true`, () => s.forIn("key", c, (f) => s.if(S(y, f), () => $(f)))) : y !== !0 && s.forIn("key", c, (f) => y === void 0 ? $(f) : s.if(w(y, f), () => $(f))), p.props = !0, o.ok((0, e._)`${h} === ${n.default.errors}`);
      function $(f) {
        if (a === !1) {
          o.setParams({ unevaluatedProperty: f }), o.error(), b || s.break();
          return;
        }
        if (!(0, t.alwaysValidSchema)(p, a)) {
          const v = s.name("valid");
          o.subschema({
            keyword: "unevaluatedProperties",
            dataProp: f,
            dataPropType: t.Type.Str
          }, v), b || s.if((0, e.not)(v), () => s.break());
        }
      }
      function S(f, v) {
        return (0, e._)`!${f} || !${f}[${v}]`;
      }
      function w(f, v) {
        const u = [];
        for (const m in f)
          f[m] === !0 && u.push((0, e._)`${v} !== ${m}`);
        return (0, e.and)(...u);
      }
    }
  };
  return bn.default = i, bn;
}
var wn = {}, ni;
function xa() {
  if (ni) return wn;
  ni = 1, Object.defineProperty(wn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ oe(), r = {
    keyword: "unevaluatedItems",
    type: "array",
    schemaType: ["boolean", "object"],
    error: {
      message: ({ params: { len: i } }) => (0, e.str)`must NOT have more than ${i} items`,
      params: ({ params: { len: i } }) => (0, e._)`{limit: ${i}}`
    },
    code(i) {
      const { gen: o, schema: s, data: a, it: c } = i, h = c.items || 0;
      if (h === !0)
        return;
      const p = o.const("len", (0, e._)`${a}.length`);
      if (s === !1)
        i.setParams({ len: h }), i.fail((0, e._)`${p} > ${h}`);
      else if (typeof s == "object" && !(0, t.alwaysValidSchema)(c, s)) {
        const y = o.var("valid", (0, e._)`${p} <= ${h}`);
        o.if((0, e.not)(y), () => b(y, h)), i.ok(y);
      }
      c.items = !0;
      function b(y, $) {
        o.forRange("i", $, p, (S) => {
          i.subschema({ keyword: "unevaluatedItems", dataProp: S, dataPropType: t.Type.Num }, y), c.allErrors || o.if((0, e.not)(y), () => o.break());
        });
      }
    }
  };
  return wn.default = r, wn;
}
var ri;
function Pa() {
  if (ri) return $n;
  ri = 1, Object.defineProperty($n, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ea(), t = /* @__PURE__ */ xa(), n = [e.default, t.default];
  return $n.default = n, $n;
}
var _n = {}, Sn = {}, oi;
function Aa() {
  if (oi) return Sn;
  oi = 1, Object.defineProperty(Sn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), n = {
    keyword: "format",
    type: ["number", "string"],
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: r }) => (0, e.str)`must match format "${r}"`,
      params: ({ schemaCode: r }) => (0, e._)`{format: ${r}}`
    },
    code(r, i) {
      const { gen: o, data: s, $data: a, schema: c, schemaCode: h, it: p } = r, { opts: b, errSchemaPath: y, schemaEnv: $, self: S } = p;
      if (!b.validateFormats)
        return;
      a ? w() : f();
      function w() {
        const v = o.scopeValue("formats", {
          ref: S.formats,
          code: b.code.formats
        }), u = o.const("fDef", (0, e._)`${v}[${h}]`), m = o.let("fType"), C = o.let("format");
        o.if((0, e._)`typeof ${u} == "object" && !(${u} instanceof RegExp)`, () => o.assign(m, (0, e._)`${u}.type || "string"`).assign(C, (0, e._)`${u}.validate`), () => o.assign(m, (0, e._)`"string"`).assign(C, u)), r.fail$data((0, e.or)(l(), d()));
        function l() {
          return b.strictSchema === !1 ? e.nil : (0, e._)`${h} && !${C}`;
        }
        function d() {
          const g = $.$async ? (0, e._)`(${u}.async ? await ${C}(${s}) : ${C}(${s}))` : (0, e._)`${C}(${s})`, k = (0, e._)`(typeof ${C} == "function" ? ${g} : ${C}.test(${s}))`;
          return (0, e._)`${C} && ${C} !== true && ${m} === ${i} && !${k}`;
        }
      }
      function f() {
        const v = S.formats[c];
        if (!v) {
          l();
          return;
        }
        if (v === !0)
          return;
        const [u, m, C] = d(v);
        u === i && r.pass(g());
        function l() {
          if (b.strictSchema === !1) {
            S.logger.warn(k());
            return;
          }
          throw new Error(k());
          function k() {
            return `unknown format "${c}" ignored in schema at path "${y}"`;
          }
        }
        function d(k) {
          const E = k instanceof RegExp ? (0, e.regexpCode)(k) : b.code.formats ? (0, e._)`${b.code.formats}${(0, e.getProperty)(c)}` : void 0, P = o.scopeValue("formats", { key: c, ref: k, code: E });
          return typeof k == "object" && !(k instanceof RegExp) ? [k.type || "string", k.validate, (0, e._)`${P}.validate`] : ["string", k, P];
        }
        function g() {
          if (typeof v == "object" && !(v instanceof RegExp) && v.async) {
            if (!$.$async)
              throw new Error("async format in sync schema");
            return (0, e._)`await ${C}(${s})`;
          }
          return typeof m == "function" ? (0, e._)`${C}(${s})` : (0, e._)`${C}.test(${s})`;
        }
      }
    }
  };
  return Sn.default = n, Sn;
}
var ii;
function Ra() {
  if (ii) return _n;
  ii = 1, Object.defineProperty(_n, "__esModule", { value: !0 });
  const t = [(/* @__PURE__ */ Aa()).default];
  return _n.default = t, _n;
}
var Ge = {}, si;
function Na() {
  return si || (si = 1, Object.defineProperty(Ge, "__esModule", { value: !0 }), Ge.contentVocabulary = Ge.metadataVocabulary = void 0, Ge.metadataVocabulary = [
    "title",
    "description",
    "default",
    "deprecated",
    "readOnly",
    "writeOnly",
    "examples"
  ], Ge.contentVocabulary = [
    "contentMediaType",
    "contentEncoding",
    "contentSchema"
  ]), Ge;
}
var ai;
function Fa() {
  if (ai) return Tt;
  ai = 1, Object.defineProperty(Tt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Gs(), t = /* @__PURE__ */ ia(), n = /* @__PURE__ */ va(), r = /* @__PURE__ */ wa(), i = /* @__PURE__ */ ka(), o = /* @__PURE__ */ Pa(), s = /* @__PURE__ */ Ra(), a = /* @__PURE__ */ Na(), c = [
    r.default,
    e.default,
    t.default,
    (0, n.default)(!0),
    s.default,
    a.metadataVocabulary,
    a.contentVocabulary,
    i.default,
    o.default
  ];
  return Tt.default = c, Tt;
}
var Cn = {}, bt = {}, ci;
function Oa() {
  if (ci) return bt;
  ci = 1, Object.defineProperty(bt, "__esModule", { value: !0 }), bt.DiscrError = void 0;
  var e;
  return (function(t) {
    t.Tag = "tag", t.Mapping = "mapping";
  })(e || (bt.DiscrError = e = {})), bt;
}
var li;
function Ma() {
  if (li) return Cn;
  li = 1, Object.defineProperty(Cn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ Oa(), n = /* @__PURE__ */ qn(), r = /* @__PURE__ */ Dn(), i = /* @__PURE__ */ oe(), s = {
    keyword: "discriminator",
    type: "object",
    schemaType: "object",
    error: {
      message: ({ params: { discrError: a, tagName: c } }) => a === t.DiscrError.Tag ? `tag "${c}" must be string` : `value of tag "${c}" must be in oneOf`,
      params: ({ params: { discrError: a, tag: c, tagName: h } }) => (0, e._)`{error: ${a}, tag: ${h}, tagValue: ${c}}`
    },
    code(a) {
      const { gen: c, data: h, schema: p, parentSchema: b, it: y } = a, { oneOf: $ } = b;
      if (!y.opts.discriminator)
        throw new Error("discriminator: requires discriminator option");
      const S = p.propertyName;
      if (typeof S != "string")
        throw new Error("discriminator: requires propertyName");
      if (p.mapping)
        throw new Error("discriminator: mapping is not supported");
      if (!$)
        throw new Error("discriminator: requires oneOf keyword");
      const w = c.let("valid", !1), f = c.const("tag", (0, e._)`${h}${(0, e.getProperty)(S)}`);
      c.if((0, e._)`typeof ${f} == "string"`, () => v(), () => a.error(!1, { discrError: t.DiscrError.Tag, tag: f, tagName: S })), a.ok(w);
      function v() {
        const C = m();
        c.if(!1);
        for (const l in C)
          c.elseIf((0, e._)`${f} === ${l}`), c.assign(w, u(C[l]));
        c.else(), a.error(!1, { discrError: t.DiscrError.Mapping, tag: f, tagName: S }), c.endIf();
      }
      function u(C) {
        const l = c.name("valid"), d = a.subschema({ keyword: "oneOf", schemaProp: C }, l);
        return a.mergeEvaluated(d, e.Name), l;
      }
      function m() {
        var C;
        const l = {}, d = k(b);
        let g = !0;
        for (let F = 0; F < $.length; F++) {
          let O = $[F];
          if (O?.$ref && !(0, i.schemaHasRulesButRef)(O, y.self.RULES)) {
            const G = O.$ref;
            if (O = n.resolveRef.call(y.self, y.schemaEnv.root, y.baseId, G), O instanceof n.SchemaEnv && (O = O.schema), O === void 0)
              throw new r.default(y.opts.uriResolver, y.baseId, G);
          }
          const I = (C = O?.properties) === null || C === void 0 ? void 0 : C[S];
          if (typeof I != "object")
            throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${S}"`);
          g = g && (d || k(O)), E(I, F);
        }
        if (!g)
          throw new Error(`discriminator: "${S}" must be required`);
        return l;
        function k({ required: F }) {
          return Array.isArray(F) && F.includes(S);
        }
        function E(F, O) {
          if (F.const)
            P(F.const, O);
          else if (F.enum)
            for (const I of F.enum)
              P(I, O);
          else
            throw new Error(`discriminator: "properties/${S}" must have "const" or "enum"`);
        }
        function P(F, O) {
          if (typeof F != "string" || F in l)
            throw new Error(`discriminator: "${S}" values must be unique strings`);
          l[F] = O;
        }
      }
    }
  };
  return Cn.default = s, Cn;
}
var kn = {};
const Ta = "https://json-schema.org/draft/2020-12/schema", ja = "https://json-schema.org/draft/2020-12/schema", za = { "https://json-schema.org/draft/2020-12/vocab/core": !0, "https://json-schema.org/draft/2020-12/vocab/applicator": !0, "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0, "https://json-schema.org/draft/2020-12/vocab/validation": !0, "https://json-schema.org/draft/2020-12/vocab/meta-data": !0, "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0, "https://json-schema.org/draft/2020-12/vocab/content": !0 }, Ia = "meta", Da = "Core and Validation specifications meta-schema", qa = [{ $ref: "meta/core" }, { $ref: "meta/applicator" }, { $ref: "meta/unevaluated" }, { $ref: "meta/validation" }, { $ref: "meta/meta-data" }, { $ref: "meta/format-annotation" }, { $ref: "meta/content" }], Va = ["object", "boolean"], La = "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.", Ba = { definitions: { $comment: '"definitions" has been replaced by "$defs".', type: "object", additionalProperties: { $dynamicRef: "#meta" }, deprecated: !0, default: {} }, dependencies: { $comment: '"dependencies" has been split and replaced by "dependentSchemas" and "dependentRequired" in order to serve their differing semantics.', type: "object", additionalProperties: { anyOf: [{ $dynamicRef: "#meta" }, { $ref: "meta/validation#/$defs/stringArray" }] }, deprecated: !0, default: {} }, $recursiveAnchor: { $comment: '"$recursiveAnchor" has been replaced by "$dynamicAnchor".', $ref: "meta/core#/$defs/anchorString", deprecated: !0 }, $recursiveRef: { $comment: '"$recursiveRef" has been replaced by "$dynamicRef".', $ref: "meta/core#/$defs/uriReferenceString", deprecated: !0 } }, Ua = {
  $schema: Ta,
  $id: ja,
  $vocabulary: za,
  $dynamicAnchor: Ia,
  title: Da,
  allOf: qa,
  type: Va,
  $comment: La,
  properties: Ba
}, Ka = "https://json-schema.org/draft/2020-12/schema", Ha = "https://json-schema.org/draft/2020-12/meta/applicator", Ga = { "https://json-schema.org/draft/2020-12/vocab/applicator": !0 }, Wa = "meta", Ja = "Applicator vocabulary meta-schema", Ya = ["object", "boolean"], Xa = { prefixItems: { $ref: "#/$defs/schemaArray" }, items: { $dynamicRef: "#meta" }, contains: { $dynamicRef: "#meta" }, additionalProperties: { $dynamicRef: "#meta" }, properties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, propertyNames: { format: "regex" }, default: {} }, dependentSchemas: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, propertyNames: { $dynamicRef: "#meta" }, if: { $dynamicRef: "#meta" }, then: { $dynamicRef: "#meta" }, else: { $dynamicRef: "#meta" }, allOf: { $ref: "#/$defs/schemaArray" }, anyOf: { $ref: "#/$defs/schemaArray" }, oneOf: { $ref: "#/$defs/schemaArray" }, not: { $dynamicRef: "#meta" } }, Za = { schemaArray: { type: "array", minItems: 1, items: { $dynamicRef: "#meta" } } }, Qa = {
  $schema: Ka,
  $id: Ha,
  $vocabulary: Ga,
  $dynamicAnchor: Wa,
  title: Ja,
  type: Ya,
  properties: Xa,
  $defs: Za
}, ec = "https://json-schema.org/draft/2020-12/schema", tc = "https://json-schema.org/draft/2020-12/meta/unevaluated", nc = { "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0 }, rc = "meta", oc = "Unevaluated applicator vocabulary meta-schema", ic = ["object", "boolean"], sc = { unevaluatedItems: { $dynamicRef: "#meta" }, unevaluatedProperties: { $dynamicRef: "#meta" } }, ac = {
  $schema: ec,
  $id: tc,
  $vocabulary: nc,
  $dynamicAnchor: rc,
  title: oc,
  type: ic,
  properties: sc
}, cc = "https://json-schema.org/draft/2020-12/schema", lc = "https://json-schema.org/draft/2020-12/meta/content", dc = { "https://json-schema.org/draft/2020-12/vocab/content": !0 }, uc = "meta", fc = "Content vocabulary meta-schema", pc = ["object", "boolean"], hc = { contentEncoding: { type: "string" }, contentMediaType: { type: "string" }, contentSchema: { $dynamicRef: "#meta" } }, mc = {
  $schema: cc,
  $id: lc,
  $vocabulary: dc,
  $dynamicAnchor: uc,
  title: fc,
  type: pc,
  properties: hc
}, gc = "https://json-schema.org/draft/2020-12/schema", yc = "https://json-schema.org/draft/2020-12/meta/core", vc = { "https://json-schema.org/draft/2020-12/vocab/core": !0 }, $c = "meta", bc = "Core vocabulary meta-schema", wc = ["object", "boolean"], _c = { $id: { $ref: "#/$defs/uriReferenceString", $comment: "Non-empty fragments not allowed.", pattern: "^[^#]*#?$" }, $schema: { $ref: "#/$defs/uriString" }, $ref: { $ref: "#/$defs/uriReferenceString" }, $anchor: { $ref: "#/$defs/anchorString" }, $dynamicRef: { $ref: "#/$defs/uriReferenceString" }, $dynamicAnchor: { $ref: "#/$defs/anchorString" }, $vocabulary: { type: "object", propertyNames: { $ref: "#/$defs/uriString" }, additionalProperties: { type: "boolean" } }, $comment: { type: "string" }, $defs: { type: "object", additionalProperties: { $dynamicRef: "#meta" } } }, Sc = { anchorString: { type: "string", pattern: "^[A-Za-z_][-A-Za-z0-9._]*$" }, uriString: { type: "string", format: "uri" }, uriReferenceString: { type: "string", format: "uri-reference" } }, Cc = {
  $schema: gc,
  $id: yc,
  $vocabulary: vc,
  $dynamicAnchor: $c,
  title: bc,
  type: wc,
  properties: _c,
  $defs: Sc
}, kc = "https://json-schema.org/draft/2020-12/schema", Ec = "https://json-schema.org/draft/2020-12/meta/format-annotation", xc = { "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0 }, Pc = "meta", Ac = "Format vocabulary meta-schema for annotation results", Rc = ["object", "boolean"], Nc = { format: { type: "string" } }, Fc = {
  $schema: kc,
  $id: Ec,
  $vocabulary: xc,
  $dynamicAnchor: Pc,
  title: Ac,
  type: Rc,
  properties: Nc
}, Oc = "https://json-schema.org/draft/2020-12/schema", Mc = "https://json-schema.org/draft/2020-12/meta/meta-data", Tc = { "https://json-schema.org/draft/2020-12/vocab/meta-data": !0 }, jc = "meta", zc = "Meta-data vocabulary meta-schema", Ic = ["object", "boolean"], Dc = { title: { type: "string" }, description: { type: "string" }, default: !0, deprecated: { type: "boolean", default: !1 }, readOnly: { type: "boolean", default: !1 }, writeOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 } }, qc = {
  $schema: Oc,
  $id: Mc,
  $vocabulary: Tc,
  $dynamicAnchor: jc,
  title: zc,
  type: Ic,
  properties: Dc
}, Vc = "https://json-schema.org/draft/2020-12/schema", Lc = "https://json-schema.org/draft/2020-12/meta/validation", Bc = { "https://json-schema.org/draft/2020-12/vocab/validation": !0 }, Uc = "meta", Kc = "Validation vocabulary meta-schema", Hc = ["object", "boolean"], Gc = { type: { anyOf: [{ $ref: "#/$defs/simpleTypes" }, { type: "array", items: { $ref: "#/$defs/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, const: !0, enum: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/$defs/nonNegativeInteger" }, minLength: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, maxItems: { $ref: "#/$defs/nonNegativeInteger" }, minItems: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, maxContains: { $ref: "#/$defs/nonNegativeInteger" }, minContains: { $ref: "#/$defs/nonNegativeInteger", default: 1 }, maxProperties: { $ref: "#/$defs/nonNegativeInteger" }, minProperties: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, required: { $ref: "#/$defs/stringArray" }, dependentRequired: { type: "object", additionalProperties: { $ref: "#/$defs/stringArray" } } }, Wc = { nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { $ref: "#/$defs/nonNegativeInteger", default: 0 }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, Jc = {
  $schema: Vc,
  $id: Lc,
  $vocabulary: Bc,
  $dynamicAnchor: Uc,
  title: Kc,
  type: Hc,
  properties: Gc,
  $defs: Wc
};
var di;
function Yc() {
  if (di) return kn;
  di = 1, Object.defineProperty(kn, "__esModule", { value: !0 });
  const e = Ua, t = Qa, n = ac, r = mc, i = Cc, o = Fc, s = qc, a = Jc, c = ["/properties"];
  function h(p) {
    return [
      e,
      t,
      n,
      r,
      i,
      b(this, o),
      s,
      b(this, a)
    ].forEach((y) => this.addMetaSchema(y, void 0, !1)), this;
    function b(y, $) {
      return p ? y.$dataMetaSchema($, c) : $;
    }
  }
  return kn.default = h, kn;
}
var ui;
function Xc() {
  return ui || (ui = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv2020 = void 0;
    const n = /* @__PURE__ */ Ks(), r = /* @__PURE__ */ Fa(), i = /* @__PURE__ */ Ma(), o = /* @__PURE__ */ Yc(), s = "https://json-schema.org/draft/2020-12/schema";
    class a extends n.default {
      constructor($ = {}) {
        super({
          ...$,
          dynamicRef: !0,
          next: !0,
          unevaluated: !0
        });
      }
      _addVocabularies() {
        super._addVocabularies(), r.default.forEach(($) => this.addVocabulary($)), this.opts.discriminator && this.addKeyword(i.default);
      }
      _addDefaultMetaSchema() {
        super._addDefaultMetaSchema();
        const { $data: $, meta: S } = this.opts;
        S && (o.default.call(this, $), this.refs["http://json-schema.org/schema"] = s);
      }
      defaultMeta() {
        return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(s) ? s : void 0);
      }
    }
    t.Ajv2020 = a, e.exports = t = a, e.exports.Ajv2020 = a, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = a;
    var c = /* @__PURE__ */ In();
    Object.defineProperty(t, "KeywordCxt", { enumerable: !0, get: function() {
      return c.KeywordCxt;
    } });
    var h = /* @__PURE__ */ ee();
    Object.defineProperty(t, "_", { enumerable: !0, get: function() {
      return h._;
    } }), Object.defineProperty(t, "str", { enumerable: !0, get: function() {
      return h.str;
    } }), Object.defineProperty(t, "stringify", { enumerable: !0, get: function() {
      return h.stringify;
    } }), Object.defineProperty(t, "nil", { enumerable: !0, get: function() {
      return h.nil;
    } }), Object.defineProperty(t, "Name", { enumerable: !0, get: function() {
      return h.Name;
    } }), Object.defineProperty(t, "CodeGen", { enumerable: !0, get: function() {
      return h.CodeGen;
    } });
    var p = /* @__PURE__ */ vr();
    Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
      return p.default;
    } });
    var b = /* @__PURE__ */ Dn();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return b.default;
    } });
  })(Rt, Rt.exports)), Rt.exports;
}
var Zc = /* @__PURE__ */ Xc();
const Qc = /* @__PURE__ */ As(Zc), el = "https://json-schema.org/draft/2020-12/schema", tl = "https://raw.githubusercontent.com/omsf-eco-infra/gufe-viz/main/schema/gufe-viz.schema.json", nl = "gufe-viz payload", rl = "Python-to-TypeScript contract bridge for gufe visualizations. Source of truth both languages are downstream of it. This schema is not strictly versioned or published as it is only internally consumed by this codebase. Schema description: one schema object per gufe class: every $def named *Viz is the visualization form of exactly one GufeTokenizable, it carries that object's `gufe-key`. Every reference from one gufe object to another is that object's gufe key, and the objects themselves live in the `registry` on the root payload. So a ligand network's nodes are keys, a chemical system's components and a transformation's protocol are keys and each one resolves to a complete, drawable object. An alchemical network whose forty systems share one protein carries that PDB once and points at it forty times, and the browser can still drill into it, because what it points at is a whole ProteinComponentViz. This is a single-shot dump rather than a conversation with a server, so the registry travels with the payload.", ol = [{ $ref: "#/$defs/SmallMoleculeComponentViz" }, { $ref: "#/$defs/ProteinComponentViz" }, { $ref: "#/$defs/SolvatedPDBComponentViz" }, { $ref: "#/$defs/ProteinMembraneComponentViz" }, { $ref: "#/$defs/SolventComponentViz" }, { $ref: "#/$defs/UnknownComponentViz" }, { $ref: "#/$defs/ProtocolViz" }, { $ref: "#/$defs/LigandAtomMappingViz" }, { $ref: "#/$defs/LigandNetworkViz" }, { $ref: "#/$defs/ChemicalSystemViz" }, { $ref: "#/$defs/TransformationViz" }, { $ref: "#/$defs/AlchemicalNetworkViz" }], il = /* @__PURE__ */ JSON.parse('{"GufeKey":{"title":"GufeKey","description":"A gufe key: the identity of a GufeTokenizable, of the form \'ClassName-<hex digest>\'. It is deterministic and repeatable within a software environment. Only its non-emptiness is checked","type":"string","minLength":1},"ComponentKey":{"title":"ComponentKey","description":"A gufe key naming a ComponentViz in the registry. Identical to GufeKey at validation time: JSON Schema has no way to say \'this string is the gufe-key of an entry in that array, and that entry has this type\', because that is a join across two parts of the document. What the name buys is that the referent\'s type is stated in the contract and carried into the generated TypeScript, instead of living only in a test and a view.","$ref":"#/$defs/GufeKey"},"SmallMoleculeComponentKey":{"title":"SmallMoleculeComponentKey","description":"A gufe key naming a SmallMoleculeComponentViz in the registry. Resolving it yields the whole molecule, SDF included. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ChemicalSystemKey":{"title":"ChemicalSystemKey","description":"A gufe key naming a ChemicalSystemViz in the registry. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ProtocolKey":{"title":"ProtocolKey","description":"A gufe key naming a ProtocolViz in the registry. Every transformation of a network usually names the same one. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"Registry":{"title":"Registry","description":"The pool of gufe objects this payload refers to by key, each a complete payload object in its own right. Entries are unique by `gufe-key` and sorted by (type, gufe-key) so a committed fixture is byte-stable. JSON Schema cannot express \'unique by a property\' or \'every reference resolves\', so both are covered by tests on the Python side and degraded over by the views.","type":"array","items":{"oneOf":[{"$ref":"#/$defs/ComponentViz"},{"$ref":"#/$defs/ProtocolViz"},{"$ref":"#/$defs/ChemicalSystemViz"}]}},"ComponentViz":{"title":"ComponentViz","description":"Any single chemical-system component","oneOf":[{"$ref":"#/$defs/SmallMoleculeComponentViz"},{"$ref":"#/$defs/ProteinComponentViz"},{"$ref":"#/$defs/SolvatedPDBComponentViz"},{"$ref":"#/$defs/ProteinMembraneComponentViz"},{"$ref":"#/$defs/SolventComponentViz"},{"$ref":"#/$defs/UnknownComponentViz"}]},"SmallMoleculeComponentViz":{"title":"SmallMoleculeComponentViz","description":"A small molecule, carried as a complete SDF record.","type":"object","properties":{"type":{"const":"SmallMoleculeComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"sdf":{"type":"string","minLength":1,"description":"Complete inline SDF record, including the conformer."},"smiles":{"type":"string"},"total_charge":{"type":"integer","description":"Net formal charge. Displayed, never recomputed from the SDF."}},"required":["type","gufe-key","name","sdf","smiles","total_charge"],"additionalProperties":false},"ProteinComponentViz":{"title":"ProteinComponentViz","description":"A protein, carried as a complete PDB record.","type":"object","properties":{"type":{"const":"ProteinComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolvatedPDBComponentViz":{"title":"SolvatedPDBComponentViz","description":"A protein with explicit solvent. A distinct type rather than a flag on ProteinComponentViz, because the discriminator is what a view dispatches on and the presence of waters changes what a sensible default representation is.","type":"object","properties":{"type":{"const":"SolvatedPDBComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation, including explicit solvent."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"ProteinMembraneComponentViz":{"title":"ProteinMembraneComponentViz","description":"A protein embedded in a membrane.","type":"object","properties":{"type":{"const":"ProteinMembraneComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation of the protein and membrane system."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolventComponentViz":{"title":"SolventComponentViz","description":"Bulk solvent settings. There is no structure to draw, so these are flat fields suitable for rendering as a settings card.","type":"object","properties":{"type":{"const":"SolventComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"smiles":{"type":"string","minLength":1},"positive_ion":{"type":"string"},"negative_ion":{"type":"string"},"neutralize":{"type":"boolean"},"ion_concentration":{"type":"string","description":"Display-form concentration with units, for example \'0.15 molar\'. A string rather than a number because the unit is part of the value and the view only ever prints it."}},"required":["type","gufe-key","name","smiles","positive_ion","negative_ion","neutralize","ion_concentration"],"additionalProperties":false},"UnknownComponentViz":{"title":"UnknownComponentViz","description":"The graceful fallback for a component type this build does not recognize. gufe supports custom Component subclasses, so meeting one is an expected outcome rather than an error, and the browser answers it with \'sorry, there is no visualization for this\'. This covers an unrecognized type only: a recognized component whose serializer fails is a bug, and raises in Python rather than arriving here wearing a disguise.","type":"object","properties":{"type":{"const":"UnknownComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The gufe class name, so the panel can say which type it could not draw."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ProtocolViz":{"title":"ProtocolViz","description":"A gufe Protocol, named. Every transformation in an alchemical network usually shares one, so this is a registry entry that many edges point at rather than a class name repeated per edge. Settings are deliberately absent for now: they are large, deeply nested, and nothing draws them yet, adding a `settings` field later is additive and breaks nothing.","type":"object","properties":{"type":{"const":"ProtocolViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The Protocol\'s class name, which is what identifies it to a reader, a Protocol has no name of its own, so `name` is usually empty."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ChemicalSystemViz":{"title":"ChemicalSystemViz","description":"A gufe ChemicalSystem: labels mapped to the gufe keys of its components.","type":"object","properties":{"type":{"const":"ChemicalSystemViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"components":{"type":"object","description":"ChemicalSystem labels mapped to the gufe keys of the components in the registry.","additionalProperties":{"$ref":"#/$defs/ComponentKey"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","components"],"additionalProperties":false},"AtomMapping":{"title":"AtomMapping","description":"Atom index correspondence from molecule A to molecule B, as a list of index pairs. A list rather than an object keyed by A\'s index, because JSON object keys can only be strings: keying by index would put decimal strings such as \'12\' in the payload and leave both languages casting them back to integers, and it is Python\'s dict-of-int shape only by resemblance. As a list, both indices stay integers, and \'an entry has a B index for every A index\' becomes a `required` the schema states rather than a convention a reader has to trust. Pairs are ordered by `index_A` so a committed fixture is byte-stable.","type":"array","items":{"type":"object","properties":{"index_A":{"type":"integer","minimum":0,"description":"An atom index in molecule A."},"index_B":{"type":"integer","minimum":0,"description":"The atom index in molecule B that it maps to."}},"required":["index_A","index_B"],"additionalProperties":false}},"Annotations":{"title":"Annotations","description":"Free-form mapping metadata. gufe puts nothing here by design and every mapper picks its own keys, so this is deliberately open. Values are whatever survived being made JSON-safe. Displayed but never interpreted, with the single exception of \'score\'.","type":"object"},"LigandAtomMappingViz":{"title":"LigandAtomMappingViz","description":"One atom mapping between two small molecules. This is also what an edge of a ligand network is because the two endpoints are gufe keys either way: standalone they resolve in this object\'s own registry, and in a network they resolve in the network\'s, where they are the same entries the nodes name. `componentA` and `componentB` are the molecules the two sides of `componentA_to_componentB` index into: an `index_A` is an atom of the SmallMoleculeComponentViz that `componentA` names, and an `index_B` an atom of `componentB`\'s.","type":"object","properties":{"type":{"const":"LigandAtomMappingViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"componentA":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentB":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentA_to_componentB":{"$ref":"#/$defs/AtomMapping"},"score":{"type":["number","null"],"description":"The \'score\' annotation when it is a plain number, otherwise null. This is the one annotation key that is interpreted rather than displayed: it drives the edge colouring and the force layout\'s link distance."},"annotations":{"$ref":"#/$defs/Annotations"},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","componentA","componentB","componentA_to_componentB","score","annotations"],"additionalProperties":false},"LigandNetworkViz":{"title":"LigandNetworkViz","description":"A ligand network: the ligands in the registry, the nodes as keys into it, and the mappings as edges. Deliberately not gufe\'s GraphML: that format embeds a gufe to_json moldict per node, so forwarding it would relocate the decoding problem into the browser rather than avoid it.","type":"object","properties":{"type":{"const":"LigandNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ligand, resolved in `registry`.","items":{"$ref":"#/$defs/SmallMoleculeComponentKey"}},"edges":{"type":"array","description":"The mappings, whose `componentA` and `componentB` name nodes of this network. JSON Schema cannot express that referential constraint, so a Python test covers it, and the view drops a dangling edge with a banner rather than failing.","items":{"$ref":"#/$defs/LigandAtomMappingViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false},"TransformationViz":{"title":"TransformationViz","description":"A transformation between two chemical systems, both named by gufe key, as is its protocol: `stateA` is the system it starts from, `stateB` the one it ends at, and every edge of a network usually names the same protocol. This is also what an edge of an alchemical network is (there is no separate edge type) because `stateA` and `stateB` are keys either way, and in a network they are the keys the nodes name. NonTransformation uses this type too: it exposes the same stateA and stateB properties, both its single system, so it renders as a diff with no differences.","type":"object","properties":{"type":{"const":"TransformationViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"protocol":{"$ref":"#/$defs/ProtocolKey"},"stateA":{"$ref":"#/$defs/ChemicalSystemKey"},"stateB":{"$ref":"#/$defs/ChemicalSystemKey"},"mappings":{"type":"array","items":{"$ref":"#/$defs/LigandAtomMappingViz"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","protocol","stateA","stateB","mappings"],"additionalProperties":false},"AlchemicalNetworkViz":{"title":"AlchemicalNetworkViz","description":"A graph of chemical systems joined by transformations. What repeats here is not the nodes and edges themselves but what they are made of: in practice every system shares one protein and every transformation shares one protocol. Both live in the registry, once, as whole objects so this view can show composition and topology while still letting a reader open a node and see the protein.","type":"object","properties":{"type":{"const":"AlchemicalNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ChemicalSystem, resolved in `registry`.","items":{"$ref":"#/$defs/ChemicalSystemKey"}},"edges":{"type":"array","description":"The transformations, whose `stateA` and `stateB` name nodes of this network.","items":{"$ref":"#/$defs/TransformationViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false}}'), _r = {
  $schema: el,
  $id: tl,
  title: nl,
  description: rl,
  oneOf: ol,
  $defs: il
}, ju = [
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
], Sr = _r.$id, Cr = new Qc({ allErrors: !0, strict: !1 });
Cr.addSchema(_r, Sr);
const fi = Cr.getSchema(Sr), Wi = Object.entries(_r.$defs).filter(
  ([e, t]) => t.properties?.type?.const === e
).map(([e]) => e).sort(), zu = Wi, kr = /* @__PURE__ */ new Map();
for (const e of Wi) {
  const t = Cr.getSchema(`${Sr}#/$defs/${e}`);
  t && kr.set(e, t);
}
const ur = { valid: !0, issues: [] };
function fr(e) {
  return (e ?? []).map((t) => ({
    path: t.instancePath || "",
    message: t.keyword === "additionalProperties" ? `unknown property ${JSON.stringify(t.params.additionalProperty)}` : t.message ?? "is invalid"
  }));
}
function sl(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return {
      valid: !1,
      issues: [{ path: "", message: "must be a JSON object" }]
    };
  const t = e.type, n = typeof t == "string" ? kr.get(t) : void 0;
  return n ? n(e) ? ur : { valid: !1, issues: fr(n.errors) } : fi(e) ? ur : { valid: !1, issues: fr(fi.errors) };
}
function Iu(e, t) {
  const n = kr.get(e);
  return n ? n(t) ? ur : { valid: !1, issues: fr(n.errors) } : {
    valid: !1,
    issues: [
      { path: "", message: `unknown payload type ${JSON.stringify(e)}` }
    ]
  };
}
function al(e, t = 8) {
  const n = e.slice(0, t).map((r) => `${r.path || "(root)"}: ${r.message}`);
  return e.length > t && n.push(`... and ${e.length - t} more`), n.join(`
`);
}
const Er = {
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
function Ji(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return {
      message: "This does not look like a gufe-viz payload (expected a JSON object)."
    };
  const { type: t } = e;
  if (typeof t != "string" || !t)
    return {
      message: "This payload has no `type`, so there is nothing to say what it is."
    };
  if (!Er[t]) return cl(t);
  const { valid: n, issues: r } = sl(e);
  return n ? null : {
    message: `This payload says it is a ${t}, but it does not match the gufe-viz schema.`,
    detail: al(r)
  };
}
function cl(e) {
  const t = Object.keys(Er).sort().join(", ");
  return {
    message: `Sorry, there is no visualization for ${e} yet. This build can draw: ${t}.`
  };
}
function Du(e) {
  return Ji(e)?.message ?? null;
}
class ll extends Pe {
  placeholder() {
    return "Waiting for data...";
  }
  renderView(t, n) {
    xs("payload", n, this);
    const r = Ji(n);
    if (r)
      return t.appendChild(dl(r, n)), {};
    const i = n.type, o = Er[i], s = document.createElement(o);
    return s.style.cssText = "flex:1;min-height:0;min-width:0;", s.payload = n, t.appendChild(s), {
      onResize: () => s.resize?.(),
      // Removing the child fires its own `disconnectedCallback`, which is where
      // its viewers and observers are released
      cleanup: () => s.remove()
    };
  }
}
function dl(e, t) {
  const n = j(
    "div",
    "flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:32px;"
  );
  n.appendChild(le(e.message));
  const r = (o, s) => j(
    "div",
    "max-width:640px;padding:8px 12px;border-radius:6px;font-size:11px;white-space:pre-wrap;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;overflow-wrap:anywhere;" + (s ? `background:${M.warnBg};color:${M.warnFg};border:1px solid ${M.warnBorder};` : `background:${M.panelBg};color:${M.textMuted2};border:1px solid ${M.cardBorder};`),
    o
  );
  e.detail && n.appendChild(r(e.detail, !0));
  const i = ul(t);
  return i && n.appendChild(r(i, !1)), n;
}
function ul(e) {
  if (e == null || typeof e != "object") return null;
  const t = e, n = [];
  typeof t.type == "string" && n.push(`type: ${qe(t.type)}`), typeof t.name == "string" && t.name && n.push(`name: ${qe(t.name)}`);
  const r = Object.keys(e);
  return r.length && n.push(
    `keys: ${r.slice(0, 12).join(", ")}${r.length > 12 ? ", ..." : ""}`
  ), n.length ? n.join(`
`) : null;
}
Ae("gufe-view", ll);
const Te = "gufe-viz:", ft = /* @__PURE__ */ new Map();
let En = null;
function fl() {
  const e = globalThis.localStorage;
  return e || globalThis.window?.localStorage;
}
function Vn() {
  if (En === !1) return null;
  const e = fl();
  if (!e)
    return En = !1, null;
  try {
    const t = `${Te}__probe`;
    return e.setItem(t, "1"), e.removeItem(t), En = !0, e;
  } catch {
    return En = !1, null;
  }
}
function pl(e) {
  const t = Vn();
  if (!t) return ft.get(Te + e) ?? null;
  try {
    return t.getItem(Te + e);
  } catch {
    return null;
  }
}
function hl(e, t) {
  const n = Vn();
  if (!n) {
    ft.set(Te + e, t);
    return;
  }
  try {
    n.setItem(Te + e, t);
  } catch {
    ft.set(Te + e, t);
  }
}
function Ln(e, t, n) {
  return {
    key: e,
    get() {
      const r = pl(e);
      if (r === null) return t;
      try {
        const i = JSON.parse(r);
        return n(i) ? i : t;
      } catch {
        return t;
      }
    },
    set(r) {
      try {
        hl(e, JSON.stringify(r));
      } catch {
      }
    }
  };
}
function pt(e, t, n) {
  return Ln(e, t, (r) => typeof r == "string" && n.includes(r));
}
function Ct(e, t) {
  return Ln(e, t, (n) => typeof n == "boolean");
}
function ml(e, t, n = -1 / 0, r = 1 / 0) {
  return Ln(
    e,
    t,
    (i) => typeof i == "number" && Number.isFinite(i) && i >= n && i <= r
  );
}
function gl(e, t = "") {
  return Ln(e, t, (n) => typeof n == "string");
}
function Yi() {
  const e = {}, t = Vn(), n = t ? Array.from({ length: t.length }, (r, i) => t.key(i)).filter(
    (r) => typeof r == "string"
  ) : Array.from(ft.keys());
  for (const r of n) {
    if (!r.startsWith(Te)) continue;
    const i = t ? t.getItem(r) : ft.get(r) ?? null;
    if (i !== null)
      try {
        e[r.slice(Te.length)] = JSON.parse(i);
      } catch {
        e[r.slice(Te.length)] = i;
      }
  }
  return e;
}
function yl() {
  const e = Vn();
  if (e)
    for (const t of Object.keys(Yi()))
      try {
        e.removeItem(Te + t);
      } catch {
      }
  ft.clear();
}
const xr = {
  threeDmol: "https://3dmol.org/build/3Dmol-min.js",
  rdkit: "https://unpkg.com/@rdkit/rdkit/dist/RDKit_minimal.js",
  d3: "https://cdn.jsdelivr.net/npm/d3@7/+esm"
};
function Pr(e) {
  const t = globalThis.__gufeEngines?.[e];
  return t ? Promise.resolve(t) : null;
}
function Xi(e, t) {
  return new Promise((n, r) => {
    const i = document.createElement("script");
    i.src = e, i.onload = () => n(), i.onerror = () => r(new Error(`Failed to load ${t}`)), document.head.appendChild(i);
  });
}
let Je = null, ot = null;
function Ar() {
  if (ot) return ot;
  const e = Pr("threeDmol");
  return e ? (ot = e.then((t) => Je = t || window.$3Dmol), ot) : (ot = (async () => {
    if (window.$3Dmol) return Je = window.$3Dmol;
    if (await Xi(xr.threeDmol, "3Dmol.js"), !window.$3Dmol) throw new Error("3Dmol.js loaded but $3Dmol is undefined");
    return Je = window.$3Dmol;
  })(), ot);
}
let it = null;
function Rr() {
  if (it) return it;
  const e = Pr("rdkit");
  return e ? (it = e.then((t) => window.RDKit = t), it) : (it = (async () => {
    if (window.RDKit) return window.RDKit;
    if (await Xi(xr.rdkit, "RDKit"), !window.initRDKitModule) throw new Error("RDKit loaded but initRDKitModule is undefined");
    return window.RDKit = await window.initRDKitModule();
  })(), it);
}
let rr = null;
function Zi() {
  if (!rr) {
    const e = xr.d3;
    rr = Pr("d3") ?? import(
      /* @vite-ignore */
      e
    );
  }
  return rr;
}
function Nr(e, t) {
  let n = !1, r = !1;
  const i = () => {
    n = !0;
  }, o = () => {
    n = !1;
  }, s = (a) => {
    a.stopPropagation();
    const c = a.ctrlKey || a.metaKey;
    if (n || c) {
      (t.onZoom(a) !== !1 || c) && a.preventDefault();
      return;
    }
    t.hint && !r && (r = !0, $l(e, t.hint));
  };
  return e.addEventListener("wheel", s, { passive: !1, capture: !0 }), e.addEventListener("pointerdown", i), e.addEventListener("pointerenter", i), e.addEventListener("pointerleave", o), {
    cleanup() {
      e.removeEventListener("wheel", s, { capture: !0 }), e.removeEventListener("pointerdown", i), e.removeEventListener("pointerenter", i), e.removeEventListener("pointerleave", o);
    }
  };
}
const vl = 1600;
function $l(e, t) {
  const n = j(
    "div",
    "position:absolute;bottom:12px;left:50%;transform:translateX(-50%);z-index:30;pointer-events:none;padding:5px 12px;border-radius:6px;font-size:11px;white-space:nowrap;background:rgba(0,0,0,0.72);color:#ffffff;transition:opacity .3s ease;",
    t
  );
  e.appendChild(n), setTimeout(() => {
    n.style.opacity = "0", setTimeout(() => n.remove(), 300);
  }, vl);
}
const bl = { min: 0.25, max: 12 }, wl = 150;
function pi(e) {
  const t = e.getView?.()?.[3];
  return typeof t != "number" || !Number.isFinite(t) ? NaN : (e.CAMERA_Z ?? wl) - t;
}
function _l(e, t = bl) {
  const n = pi(e), r = Number.isFinite(n) && n > 0;
  r && e.setZoomLimits?.(n / t.max, n / t.min);
  let i = 1;
  const o = () => {
    if (!r) return i;
    const s = pi(e);
    return Number.isFinite(s) && s > 0 ? n / s : i;
  };
  return {
    zoomBy(s) {
      const a = o(), c = Math.min(t.max, Math.max(t.min, a * s)), h = c / a;
      return !Number.isFinite(h) || Math.abs(h - 1) < 1e-9 ? !1 : (i = c, e.zoom(h), e.render(), !0);
    },
    reset() {
      i = 1, e.zoomTo(), e.render();
    },
    level: o
  };
}
const Sl = 2e-3;
function Cl(e) {
  return Math.exp(-e.deltaY * Sl);
}
function Qi(e, t, n = {}) {
  const r = _l(t, n.bounds), i = Nr(e, {
    hint: n.hint ?? "Click or hold Ctrl to zoom",
    onZoom: (o) => r.zoomBy(Cl(o))
  });
  return { ...r, cleanup: i.cleanup };
}
function Fr(e, t = "Reset view") {
  const n = j("button", xt, "Reset");
  return n.title = t, n.setAttribute("aria-label", t), n.onclick = e, n;
}
const or = {
  elementChange: "#005AB5",
  uniqueAtom: "#DC3220",
  elementChange3D: "0x005AB5",
  uniqueAtom3D: "0xDC3220"
}, qu = [
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
], Vu = "hsv", V = [0, 0, 0], kl = {
  0: V,
  1: V,
  2: V,
  3: V,
  4: V,
  5: V,
  6: V,
  7: V,
  8: V,
  9: V,
  10: V,
  11: V,
  12: V,
  13: V,
  14: V,
  15: V,
  16: V,
  17: V,
  18: V,
  19: V,
  20: V,
  21: V,
  22: V,
  23: V,
  24: V,
  25: V,
  26: V,
  27: V,
  28: V,
  29: V,
  30: V,
  31: V,
  32: V,
  33: V,
  34: V,
  35: V,
  36: V,
  37: V,
  38: V,
  39: V,
  40: V,
  41: V,
  42: V,
  43: V,
  44: V,
  45: V,
  46: V,
  47: V,
  48: V,
  49: V,
  50: V,
  51: V,
  52: V,
  53: V,
  54: V,
  55: V,
  56: V,
  57: V,
  58: V,
  59: V,
  60: V,
  61: V,
  62: V,
  63: V,
  64: V,
  65: V,
  66: V,
  67: V,
  68: V,
  69: V,
  70: V,
  71: V,
  72: V,
  73: V,
  74: V,
  75: V,
  76: V,
  77: V,
  78: V,
  79: V,
  80: V,
  81: V,
  82: V,
  83: V,
  84: V,
  85: V,
  86: V,
  87: V,
  88: V,
  89: V,
  90: V,
  91: V,
  92: V,
  93: V,
  94: V,
  95: V,
  96: V,
  97: V,
  98: V,
  99: V,
  100: V,
  101: V,
  102: V,
  103: V,
  104: V,
  105: V,
  106: V,
  107: V,
  108: V,
  109: V,
  110: V,
  111: V,
  112: V,
  113: V,
  114: V,
  115: V,
  116: V,
  117: V,
  118: V
}, El = "rdkit", xl = !0, Pl = !0, Al = !0, Rl = !0, Nl = "rdkit", Fl = "filled", Ol = 0.42, Ml = 1.5, Tl = !0, jl = "show", zl = "mono", Il = 0.51, Dl = 0.74, ql = 1.6, Vl = 1.7, Ll = 5, Bl = 0.3, Ul = "#d62828", Kl = "#d62828", Hl = "#015ab5", Gl = !1, Wl = "", Jl = "#7c3aed", Yl = {
  layout: El,
  alignPair: xl,
  atomNumbers: Pl,
  createdDestroyed: Al,
  modified: Rl,
  style: Nl,
  circles: Fl,
  circleRadius: Ol,
  circleStroke: Ml,
  boundary: Tl,
  hydrogens: jl,
  elementColors: zl,
  numScale: Il,
  labelScale: Dl,
  bondWidth: ql,
  markWidth: Vl,
  haloWidth: Ll,
  haloOpacity: Bl,
  destroyedColor: Ul,
  createdColor: Kl,
  modifiedColor: Hl,
  stereo: Gl,
  customSpec: Wl,
  customColor: Jl
}, Xl = {
  version: 1,
  layout: "rdkit",
  alignPair: !0,
  style: "rdkit",
  createdDestroyed: !0,
  modified: !0,
  destroyedColor: or.uniqueAtom,
  createdColor: or.uniqueAtom,
  modifiedColor: or.elementChange,
  boundary: !0,
  circles: "outline",
  circleRadius: 0.3,
  circleStroke: 1.2,
  hydrogens: "show",
  elementColors: "mono",
  atomNumbers: !0,
  stereo: !1,
  numScale: 0.5,
  labelScale: 0.6,
  bondWidth: 2,
  markWidth: 2,
  haloWidth: 10,
  haloOpacity: 0.35,
  customSpec: "",
  customColor: "#7C3AED"
}, Zl = ["rdkit", "coordgen", "conformer"], Ql = ["rdkit", "recolor", "halo"], ed = ["outline", "filled", "off"], td = ["show", "dim", "hide"], nd = ["cpk", "mono"], rd = {
  circleRadius: [0.12, 0.6],
  circleStroke: [0.4, 4],
  numScale: [0.15, 0.9],
  labelScale: [0.3, 0.9],
  bondWidth: [0.5, 5],
  markWidth: [0.5, 6],
  haloWidth: [2, 26],
  haloOpacity: [0.1, 1]
}, od = /^#[0-9a-fA-F]{6}$/;
function wt(e, t, n) {
  return typeof e == "string" && t.includes(e) ? e : n;
}
function Le(e, t, n) {
  if (typeof e != "number" || !isFinite(e)) return n;
  const r = rd[t];
  return r ? Math.min(r[1], Math.max(r[0], e)) : e;
}
const st = (e, t) => typeof e == "boolean" ? e : t, xn = (e, t) => typeof e == "string" && od.test(e) ? e : t;
function id(e) {
  const t = e && typeof e == "object" ? e : {}, n = Xl;
  return {
    version: 1,
    layout: wt(t.layout, Zl, n.layout),
    alignPair: st(t.alignPair, n.alignPair),
    style: wt(t.style, Ql, n.style),
    createdDestroyed: st(t.createdDestroyed, n.createdDestroyed),
    modified: st(t.modified, n.modified),
    destroyedColor: xn(t.destroyedColor, n.destroyedColor),
    createdColor: xn(t.createdColor, n.createdColor),
    modifiedColor: xn(t.modifiedColor, n.modifiedColor),
    boundary: st(t.boundary, n.boundary),
    circles: wt(t.circles, ed, n.circles),
    circleRadius: Le(t.circleRadius, "circleRadius", n.circleRadius),
    circleStroke: Le(t.circleStroke, "circleStroke", n.circleStroke),
    hydrogens: wt(t.hydrogens, td, n.hydrogens),
    elementColors: wt(t.elementColors, nd, n.elementColors),
    atomNumbers: st(t.atomNumbers, n.atomNumbers),
    stereo: st(t.stereo, n.stereo),
    numScale: Le(t.numScale, "numScale", n.numScale),
    labelScale: Le(t.labelScale, "labelScale", n.labelScale),
    bondWidth: Le(t.bondWidth, "bondWidth", n.bondWidth),
    markWidth: Le(t.markWidth, "markWidth", n.markWidth),
    haloWidth: Le(t.haloWidth, "haloWidth", n.haloWidth),
    haloOpacity: Le(t.haloOpacity, "haloOpacity", n.haloOpacity),
    customSpec: typeof t.customSpec == "string" ? t.customSpec : n.customSpec,
    customColor: xn(t.customColor, n.customColor)
  };
}
const dt = id(Yl);
function sd(e) {
  const t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), r = 5e3;
  for (const i of String(e || "").split(/[,\s;]+/).filter(Boolean)) {
    const o = /^([LlRr])[:=](.*)$/.exec(i), s = o ? o[1].toLowerCase() === "l" ? "left" : "right" : "both", a = o ? o[2] : i, c = (p) => {
      s !== "right" && t.add(p), s !== "left" && n.add(p);
    }, h = /^(\d+)-(\d+)$/.exec(a);
    if (h) {
      const p = Math.min(+h[1], +h[2]), b = Math.min(Math.max(+h[1], +h[2]), p + r - 1);
      for (let y = p; y <= b; y++) c(y);
    } else /^\d+$/.test(a) && c(+a);
  }
  return { left: t, right: n };
}
function ir(e, t, n) {
  const r = [];
  for (let i = 0; i < e.bonds.length; i++) {
    const [o, s] = e.bonds[i], a = t.has(o), c = t.has(s);
    (n ? a || c : a && c) && r.push(i);
  }
  return r;
}
function hi(e) {
  const t = e.replace("#", "");
  return [
    parseInt(t.slice(0, 2), 16) / 255,
    parseInt(t.slice(2, 4), 16) / 255,
    parseInt(t.slice(4, 6), 16) / 255
  ];
}
function ad(e, t) {
  return [
    1 - (1 - e[0]) * (1 - t),
    1 - (1 - e[1]) * (1 - t),
    1 - (1 - e[2]) * (1 - t)
  ];
}
function cd(e, t, n) {
  const r = new Set(t.atoms), i = new Set(ir(e, r, !0));
  return {
    deletions: ir(e, r, n),
    changes: ir(e, new Set(t.elements), n).filter((o) => !i.has(o))
  };
}
function ld(e, t, n, r) {
  const i = cd(t, n, e.boundary), o = [];
  return e.createdDestroyed && n.atoms.length && o.push({
    atoms: new Set(n.atoms),
    bonds: i.deletions,
    color: r === "left" ? e.destroyedColor : e.createdColor,
    blackLabelOnFill: !0,
    edgeOnFill: !1
  }), e.modified && n.elements.length && o.push({
    atoms: new Set(n.elements),
    bonds: i.changes,
    color: e.modifiedColor,
    blackLabelOnFill: !1,
    edgeOnFill: !0
  }), o;
}
let at = null;
function dd(e) {
  if (at !== null) return at;
  at = !1;
  let t = null;
  try {
    t = e.get_mol("CC"), t && (at = /class\s*=\s*['"][^'"]*bond-0/.test(t.get_svg(60, 60)));
  } catch {
  } finally {
    if (t)
      try {
        t.delete();
      } catch {
      }
  }
  return at || console.warn("[gufe-viz] this RDKit build emits no bond/atom classes - drawing without bond marking"), at;
}
function ud(e, t) {
  return e.style === "rdkit" ? "rdkit" : dd(t) ? e.style : "rdkit";
}
function fd(e, t, n, r, i, o) {
  const s = {
    width: t,
    height: t,
    addAtomIndices: e.atomNumbers,
    addStereoAnnotation: e.stereo,
    annotationFontScale: e.numScale,
    baseFontSize: e.labelScale,
    bondLineWidth: e.bondWidth,
    scaleBondWidth: !1
  };
  e.elementColors === "mono" && (s.atomColourPalette = kl), i === "rdkit" && (s.continuousHighlight = !1);
  const a = {}, c = {}, h = {};
  for (const $ of n) {
    const S = hi($.color);
    if (i === "rdkit") for (const f of $.bonds) h[f] = S;
    if (i === "recolor" && e.circles === "off") continue;
    const w = i === "recolor" && e.circles === "filled" ? ad(S, 0.7) : S;
    for (const f of $.atoms)
      a[f] = w, c[f] = e.circleRadius;
  }
  const p = hi(e.customColor);
  for (const $ of r)
    $ < o && (a[$] = p, c[$] = e.circleRadius);
  const b = Object.keys(a).map(Number);
  b.length && (s.atoms = b, s.highlightAtomColors = a, s.highlightAtomRadii = c);
  const y = Object.keys(h).map(Number);
  return y.length && (s.bonds = y, s.highlightBondColors = h), s;
}
function pd(e, t, n, r) {
  let i = null;
  try {
    return i = e.get_mol(t, JSON.stringify({ removeHs: !1 })), i ? i.get_svg_with_highlights ? i.get_svg_with_highlights(JSON.stringify(r)) || null : i.get_svg(n, n) || null : null;
  } catch (o) {
    return console.warn("[gufe-viz] depictStyledSVG threw -", he(o)), null;
  } finally {
    if (i)
      try {
        i.delete();
      } catch {
      }
  }
}
const hd = "http://www.w3.org/2000/svg";
function es(e, t) {
  return Array.from(e.querySelectorAll(`[class~="bond-${t}"]`));
}
function Or(e, t, n) {
  const r = [];
  for (const i of Array.from(e.querySelectorAll(`[class~="atom-${t}"]`))) {
    if (/(^|\s)bond-\d+(\s|$)/.test(i.getAttribute("class") || "")) continue;
    const o = i.tagName.toLowerCase();
    (o === "ellipse" || o === "circle" || o === "rect") === n && r.push(i);
  }
  return r;
}
function ts(e) {
  const n = e.style?.fill || e.getAttribute("fill") || "";
  return !!n && n !== "none";
}
function mi(e, t, n, r, i, o) {
  for (const s of r)
    for (const a of es(e, s)) {
      const c = a.style;
      ts(a) ? c.fill = i : (c.stroke = i, c.strokeWidth = `${t.markWidth}px`);
    }
  if (o)
    for (const s of n)
      for (const a of Or(e, s, !1)) a.style.fill = o;
}
function md(e, t, n, r) {
  const i = e.ownerDocument;
  if (!i) return;
  const o = i.createElementNS(hd, "g");
  o.setAttribute("data-gufe-halo", "1"), o.style.opacity = String(t.haloOpacity);
  for (const a of n)
    for (const c of es(e, a)) {
      if (ts(c)) continue;
      const h = c.cloneNode(!0);
      h.removeAttribute("class"), h.style.fill = "none", h.style.stroke = r, h.style.strokeWidth = `${t.haloWidth}px`, h.style.strokeLinecap = "round", h.style.strokeLinejoin = "round", h.style.strokeOpacity = "1", o.appendChild(h);
    }
  if (!o.childNodes.length) return;
  const s = e.querySelector("rect");
  s?.nextSibling ? e.insertBefore(o, s.nextSibling) : s ? e.appendChild(o) : e.insertBefore(o, e.firstChild);
}
function gd(e, t, n, r, i) {
  for (const o of n)
    if (!r.has(o))
      for (const s of Or(e, o, !0)) {
        const a = s.style;
        a.fill = "none", a.stroke = i, a.strokeWidth = `${t.circleStroke}px`;
      }
}
function yd(e, t, n, r, i) {
  for (const o of n)
    if (!r.has(o))
      for (const s of Or(e, o, !0)) {
        const a = s.style;
        a.stroke = i, a.strokeWidth = `${t.circleStroke}px`;
      }
}
function vd(e, t, n) {
  if (n.hydrogens !== "show") {
    for (let r = 0; r < t.symbols.length; r++)
      if (t.symbols[r] === "H")
        for (const i of Array.from(e.querySelectorAll(`[class~="atom-${r}"]`))) {
          const o = i.style;
          n.hydrogens === "hide" ? o.display = "none" : o.opacity = "0.22";
        }
  }
}
function $d(e, t, n, r, i, o) {
  if (o !== "rdkit")
    for (const s of r)
      if (o === "recolor") {
        const a = n.circles === "filled";
        mi(
          e,
          n,
          s.atoms,
          s.bonds,
          s.color,
          a && s.blackLabelOnFill ? "#000000" : s.color
        ), n.circles === "outline" ? gd(e, n, s.atoms, i, s.color) : a && s.edgeOnFill && yd(e, n, s.atoms, i, s.color);
      } else
        md(e, n, s.bonds, s.color), mi(e, n, s.atoms, s.bonds, s.color, null);
  vd(e, t, n);
}
const Bn = `
`, pr = "$$$$";
function hr(e, t) {
  if (!e || !e.trim()) throw new Error("empty SDF");
  const n = e.replace(/\r/g, "").split(Bn);
  if (n.length < 4) throw new Error("SDF too short");
  const r = n[3];
  if (r.indexOf("V3000") !== -1) throw new Error("V3000 molfiles are not supported");
  const i = parseInt(r.substring(0, 3), 10), o = parseInt(r.substring(3, 6), 10);
  if (!isFinite(i) || i <= 0) throw new Error(`bad counts line: ${r}`);
  const s = [], a = [];
  for (let p = 0; p < i; p++) {
    const b = n[4 + p];
    if (b == null) throw new Error("truncated atom block");
    s.push([
      parseFloat(b.substring(0, 10)) || 0,
      parseFloat(b.substring(10, 20)) || 0,
      parseFloat(b.substring(20, 30)) || 0
    ]), a.push(b.substring(31, 34).trim() || "X");
  }
  const c = [];
  for (let p = 0; p < (isFinite(o) ? o : 0); p++) {
    const b = n[4 + i + p];
    if (b == null) break;
    const y = parseInt(b.substring(0, 3), 10), $ = parseInt(b.substring(3, 6), 10), S = parseInt(b.substring(6, 9), 10);
    !isFinite(y) || !isFinite($) || c.push([y - 1, $ - 1, isFinite(S) ? S : 1]);
  }
  return { name: (n[0] || "").trim() || t || "molecule", symbols: a, bonds: c, coords: s };
}
function bd(e) {
  const t = e.symbols.length, n = e.bonds.length, r = [
    e.name || "",
    "  Generated",
    "",
    `${String(t).padStart(3)}${String(n).padStart(3)}  0  0  0  0  0  0  0  0999 V2000`
  ];
  for (let i = 0; i < t; i++) {
    const o = e.coords[i];
    r.push(
      o[0].toFixed(4).padStart(10) + o[1].toFixed(4).padStart(10) + o[2].toFixed(4).padStart(10) + ` ${e.symbols[i].padEnd(3)} 0  0  0  0  0  0  0  0  0  0  0  0`
    );
  }
  for (let i = 0; i < n; i++) {
    const o = e.bonds[i], s = o[2] === 12 ? 4 : o[2];
    r.push(
      String(o[0] + 1).padStart(3) + String(o[1] + 1).padStart(3) + String(s).padStart(3) + "  0  0  0  0"
    );
  }
  return r.push("M  END"), r.join(Bn);
}
const wd = (e) => `${bd(e)}${Bn}${pr}`, _d = (e) => e.indexOf(pr) >= 0 ? e : `${e}${Bn}${pr}`;
function ns(e) {
  const t = String(e).split(/\r?\n/);
  if (t.length < 4) return null;
  const n = parseInt(t[3].slice(0, 3), 10), r = parseInt(t[3].slice(3, 6), 10);
  return isNaN(n) || isNaN(r) ? null : { atoms: n, bonds: r };
}
function rs(e, t, n, r) {
  let i = null;
  try {
    if (i = e.get_mol(t, JSON.stringify({ removeHs: !0 })), !i) return null;
    if (r !== "conformer")
      try {
        i.set_new_coords(r === "coordgen");
      } catch {
      }
    return i.get_svg(n, n) || null;
  } catch (o) {
    return console.warn("[gufe-viz] depictSVG threw -", he(o)), null;
  } finally {
    if (i)
      try {
        i.delete();
      } catch {
      }
  }
}
function os(e, t, n) {
  e.innerHTML = t;
  const r = e.querySelector("svg");
  r && (r.removeAttribute("width"), r.removeAttribute("height"), r.getAttribute("viewBox") || r.setAttribute("viewBox", `0 0 ${n} ${n}`), r.setAttribute("preserveAspectRatio", "xMidYMid meet"), r.setAttribute("style", "width:100%;height:100%;max-width:100%;max-height:100%;"));
}
const gi = [
  { id: "stick", label: "Stick", title: "Sticks only" },
  { id: "ball", label: "Ball+Stick", title: "Ball and stick" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" }
], yi = {
  stick: { stick: { radius: 0.15, colorscheme: "Jmol" } },
  ball: { stick: { radius: 0.12, colorscheme: "Jmol" }, sphere: { scale: 0.28, colorscheme: "Jmol" } },
  sphere: { sphere: { scale: 1, colorscheme: "Jmol" } }
}, vi = 400;
class Sd extends Pe {
  placeholder() {
    return "Waiting for a SmallMoleculeComponent payload...";
  }
  renderView(t, n) {
    const r = n.sdf, i = n.name ?? "", o = n.smiles, s = n.total_charge;
    t.appendChild(Ue(i || "Unnamed molecule"));
    const a = j("div", "flex:1;display:flex;flex-direction:row;overflow:hidden;min-height:0;");
    t.appendChild(a);
    const c = j("div", "flex:1 1 50%;min-width:0;display:flex;flex-direction:column;"), h = j("div", "flex:1 1 50%;min-width:0;display:flex;flex-direction:column;position:relative;");
    a.appendChild(c), a.appendChild(j("div", `width:1px;flex-shrink:0;background:${M.splitBorder};`)), a.appendChild(h);
    const p = (E) => j("div", Et, E);
    c.appendChild(p("2D"));
    const b = j(
      "div",
      `flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:8px;background:${kt.canvas2D};`
    );
    c.appendChild(b), h.appendChild(p("3D"));
    const y = Ii();
    h.appendChild(y.wrap);
    const $ = j(
      "div",
      `flex-shrink:0;display:flex;flex-wrap:wrap;align-items:baseline;gap:6px 20px;padding:8px 16px;font-size:\${FONT.body};background:${M.toolbarBg};border-top:1px solid ${M.toolbarBorder};color:${M.textPrimary};`
    );
    t.appendChild($);
    const S = r ? ns(r) : null, w = [
      ["Name", i || lt, !1],
      ["SMILES", o || lt, !0],
      ["Charge", s == null ? lt : String(s), !1],
      ["Atoms", S ? String(S.atoms) : lt, !1],
      ["Bonds", S ? String(S.bonds) : lt, !1]
    ];
    for (const [E, P, F] of w) {
      const O = j("div", "display:flex;align-items:baseline;gap:6px;min-width:0;");
      O.appendChild(
        j(
          "span",
          `font-size:\${FONT.tiny};font-weight:700;letter-spacing:.08em;text-transform:uppercase;flex-shrink:0;color:${M.textMuted2};`,
          E
        )
      );
      const I = j(
        "span",
        `user-select:text;cursor:text;color:${M.textPrimary}` + (F ? ";font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:${FONT.small};overflow-wrap:anywhere;" : ""),
        P
      );
      I.title = P, O.appendChild(I), $.appendChild(O);
    }
    if (!r || !r.trim())
      return b.appendChild(le("No molecule provided")), y.container.appendChild(le("No molecule provided")), {};
    b.appendChild(le("Loading 2D depiction...")), Rr().then((E) => {
      const P = rs(E, r, vi, dt.layout);
      P ? os(b, P, vi) : b.replaceChildren(le("Failed to parse molecule", !0));
    }).catch((E) => {
      b.replaceChildren(le(`RDKit failed to load: ${he(E)}`, !0));
    });
    let f = null, v = null;
    const u = pt(
      "small-molecule.style",
      "stick",
      gi.map((E) => E.id)
    ), m = Ct("small-molecule.spin", !1);
    let C = u.get(), l = m.get();
    const d = j(
      "div",
      Ti
    );
    d.appendChild(
      Tn(
        gi,
        C,
        (E) => {
          C = E, f && (f.setStyle({}, yi[E]), f.render());
        },
        u
      )
    );
    const g = zi(
      "Spin",
      l,
      (E) => {
        l = E;
        try {
          f?.spin(E ? "y" : !1);
        } catch {
        }
      },
      { title: "Toggle continuous rotation", remember: m }
    );
    g.style.marginLeft = "4px", d.appendChild(g);
    const k = Fr(() => v?.reset());
    return k.style.marginLeft = "4px", d.appendChild(k), h.appendChild(d), y.container.appendChild(le("Loading 3D viewer...")), Ar().then(() => {
      y.container.replaceChildren(), f = Je.createViewer(y.container, { backgroundColor: kt.viewer }), f.addModel(_d(r), "sdf"), f.setStyle({}, yi[C]), f.zoomTo(), f.render(), v = Qi(y.container, f);
    }).catch((E) => {
      y.container.replaceChildren(le(`3D render failed: ${he(E)}`, !0));
    }), {
      onResize() {
        f && (f.resize(), f.render());
      },
      cleanup() {
        if (v?.cleanup(), v = null, !!f) {
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
Ae("gufe-small-molecule", Sd);
const is = ["HOH", "WAT", "SOL", "TIP3"], $i = { hetflag: !1 }, Cd = { hetflag: !0 }, kd = { resn: is }, Be = {
  stick: { radius: 0.15 },
  sphere: { scale: 0.3 },
  hetero: { stickRadius: 0.2, sphereScale: 0.28 },
  water: { stickRadius: 0.05, sphereScale: 0.18 },
  surfaceOpacity: 0.85,
  /** Above this many atoms a surface is slow enough to be worth warning about. */
  surfaceAtomWarn: 4e4
};
function Ed(e) {
  const t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
  let r = 0, i = 0, o = 0, s = 1 / 0, a = -1 / 0;
  for (const c of e.split(/\r?\n/)) {
    const h = c.slice(0, 6);
    if (h === "ENDMDL") break;
    if (h !== "ATOM  " && h !== "HETATM") continue;
    r++, h === "HETATM" && i++;
    const p = c.slice(17, 20).trim(), b = c.slice(21, 22).trim() || "_", y = c.slice(22, 26).trim(), $ = c.slice(26, 27).trim();
    is.indexOf(p) !== -1 && o++, t.add(b), n.add(`${b}|${y}${$}|${p}`);
    const S = parseInt(y, 10);
    isNaN(S) || (S < s && (s = S), S > a && (a = S));
  }
  return {
    chains: t.size,
    residues: n.size,
    atoms: r,
    hetatms: i,
    waters: o,
    heteroNonWater: i - o,
    resiMin: s === 1 / 0 ? 0 : s,
    resiMax: a === -1 / 0 ? 0 : a
  };
}
function xd(e) {
  return `${yt(e.chains)} chains · ${yt(e.residues)} residues · ${yt(e.atoms)} atoms · ${yt(e.hetatms)} HETATM` + (e.waters > 0 ? ` (${yt(e.waters)} water)` : "");
}
function Pd(e, t) {
  return e === "chain" ? { colorscheme: "chain" } : e === "ss" ? { colorscheme: "ssJmol" } : e === "spectrum" && t && t.resiMax > t.resiMin ? { colorscheme: { prop: "resi", gradient: "roygb", min: t.resiMin, max: t.resiMax } } : { colorscheme: "Jmol" };
}
function bi(e, t, n, r) {
  const i = r || (() => {
  }), o = Pd(t.color, n);
  try {
    e.removeAllSurfaces();
  } catch {
  }
  if (e.setStyle({}, {}), e.setStyle(
    $i,
    t.rep === "stick" ? { stick: { radius: Be.stick.radius, ...o } } : t.rep === "sphere" ? { sphere: { scale: Be.sphere.scale, ...o } } : (
      // For 'surface' the shell is added separately; leave the atoms bare so
      // it is not cluttered from the inside.
      t.rep === "surface" ? {} : { cartoon: { ...o } }
    )
  ), e.setStyle(
    Cd,
    t.hetero ? {
      stick: { radius: Be.hetero.stickRadius, colorscheme: "Jmol" },
      sphere: { scale: Be.hetero.sphereScale, colorscheme: "Jmol" }
    } : {}
  ), e.setStyle(
    kd,
    t.waters ? {
      stick: { radius: Be.water.stickRadius, colorscheme: "Jmol" },
      sphere: { scale: Be.water.sphereScale, colorscheme: "Jmol" }
    } : {}
  ), t.rep !== "surface") {
    i(null), e.render();
    return;
  }
  i(
    n && n.atoms > Be.surfaceAtomWarn ? "Computing surface (large structure, this may take a while)..." : "Computing surface..."
  ), e.render(), setTimeout(() => {
    try {
      Promise.resolve(
        e.addSurface(Je.SurfaceType.VDW, { opacity: Be.surfaceOpacity, ...o }, $i)
      ).then(() => {
        i(null), e.render();
      }).catch((s) => i(`Surface failed: ${he(s)}`, "error"));
    } catch (s) {
      i(`Surface failed: ${he(s)}`, "error");
    }
  }, 30);
}
const wi = [
  { id: "cartoon", label: "Cartoon", title: "Ribbon / cartoon backbone" },
  { id: "surface", label: "Surface", title: "Molecular (VDW) surface" },
  { id: "stick", label: "Stick", title: "All-atom sticks" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" }
], _i = [
  { id: "chain", label: "Chain" },
  { id: "spectrum", label: "Spectrum" },
  { id: "ss", label: "Secondary structure" },
  { id: "element", label: "Element" }
];
class Ad extends Pe {
  placeholder() {
    return "Waiting for a ProteinComponent payload...";
  }
  renderView(t, n) {
    const r = n.pdb, i = n.name ?? "", o = n.type !== "ProteinComponentViz", s = pt(
      "protein.representation",
      "cartoon",
      wi.map((k) => k.id)
    ), a = pt(
      "protein.color",
      "chain",
      _i.map((k) => k.id)
    ), c = Ct("protein.waters", o), h = Ct("protein.hetero", !0), p = Ct("protein.spin", !1), b = {
      rep: s.get(),
      color: a.get(),
      waters: c.get(),
      hetero: h.get(),
      spin: p.get()
    };
    let y = null, $ = null, S = null;
    const w = j(
      "div",
      Mi.top
    );
    t.appendChild(w), w.appendChild(
      j("span", `font-weight:700;font-size:${X.heading};letter-spacing:.02em;color:${M.titleColor};`, i || "Protein")
    );
    const f = (k) => j("span", `font-size:${X.small};color:${M.textMuted};`, k);
    w.appendChild(f("Style:")), w.appendChild(
      Tn(
        wi,
        b.rep,
        (k) => {
          b.rep = k, g();
        },
        s
      )
    ), w.appendChild(f("Color:")), w.appendChild(
      yr(
        _i,
        b.color,
        (k) => {
          b.color = k, g();
        },
        a
      )
    );
    const v = j("div", "display:flex;gap:4px;");
    w.appendChild(v);
    const u = [
      ["waters", "Waters", "Show water molecules", c, () => g()],
      ["hetero", "Hetero", "Show hetero atoms / ligands / ions / lipids", h, () => g()],
      ["spin", "Spin", "Rotate the view continuously", p, () => y?.spin(b.spin ? "y" : !1)]
    ];
    for (const [k, E, P, F, O] of u)
      v.appendChild(
        zi(
          E,
          b[k],
          (I) => {
            b[k] = I, O();
          },
          { title: P, remember: F }
        )
      );
    v.appendChild(Fr(() => $?.reset()));
    const m = j("span", `margin-left:auto;font-size:${X.small};white-space:nowrap;color:${M.textMuted2};`);
    w.appendChild(m);
    const C = Ii();
    t.appendChild(C.wrap);
    const l = j(
      "div",
      "position:absolute;top:12px;left:50%;transform:translateX(-50%);padding:6px 14px;border-radius:6px;font-size:${FONT.body};z-index:20;display:none;pointer-events:none;"
    );
    C.wrap.appendChild(l);
    const d = (k, E) => {
      if (k == null) {
        l.style.display = "none";
        return;
      }
      l.textContent = k, l.style.display = "block";
      const P = E === "error";
      l.style.background = P ? M.warnBg : M.toolbarBg, l.style.color = P ? M.warnFg : M.textMuted, l.style.border = `1px solid ${P ? M.warnBorder : M.toolbarBorder}`;
    };
    function g() {
      y && bi(y, b, S, d);
    }
    if (!r || !r.trim())
      return d("No protein data - waiting for a PDB payload."), {};
    try {
      S = Ed(r), m.textContent = xd(S);
    } catch (k) {
      d(`⚠ PDB parse error: ${he(k)}`, "error");
    }
    return d("Loading 3D viewer..."), Ar().then(() => {
      y = Je.createViewer(C.container, { backgroundColor: kt.viewer }), y.addModel(r, "pdb"), bi(y, b, S, d), y.zoomTo(), y.spin(b.spin ? "y" : !1), y.render(), $ = Qi(C.container, y);
    }).catch((k) => {
      d(`⚠ Failed to render structure: ${he(k)}`, "error");
    }), {
      onResize() {
        y && (y.resize(), y.render());
      },
      cleanup() {
        if ($?.cleanup(), $ = null, !!y) {
          try {
            y.spin(!1);
          } catch {
          }
          try {
            y.clear();
          } catch {
          }
          y = null;
        }
      }
    };
  }
}
Ae("gufe-protein", Ad);
const ss = "http://www.w3.org/2000/svg";
function se(e, t = {}) {
  const n = document.createElementNS(ss, e);
  for (const [r, i] of Object.entries(t)) n.setAttribute(r, String(i));
  return n;
}
function Mn(e, t) {
  const n = document.createElementNS(ss, "title");
  return n.textContent = t, e.appendChild(n), e;
}
function At(e) {
  const t = /* @__PURE__ */ new Map();
  return mr(e, t, /* @__PURE__ */ new Set()), t;
}
function mr(e, t, n) {
  if (e == null || typeof e != "object" || n.has(e)) return;
  if (n.add(e), Array.isArray(e)) {
    for (const i of e) mr(i, t, n);
    return;
  }
  const r = e.registry;
  if (Array.isArray(r))
    for (const i of r) {
      const o = i["gufe-key"];
      typeof o == "string" && o && !t.has(o) && t.set(o, i);
    }
  for (const i of Object.values(e)) mr(i, t, n);
}
function Ye(e, t) {
  return t ? e.get(t) : void 0;
}
function je(e, t, n) {
  const r = Ye(e, t);
  return r?.type === n ? r : void 0;
}
function ht(e) {
  return e.name ? e.name : (e["gufe-key"].split("-").pop() ?? e["gufe-key"]).slice(0, 6);
}
function Pn(e, t) {
  const n = new Array(9);
  for (let r = 0; r < 3; r++)
    for (let i = 0; i < 3; i++)
      n[r * 3 + i] = e[r * 3] * t[i] + e[r * 3 + 1] * t[3 + i] + e[r * 3 + 2] * t[6 + i];
  return n;
}
function Si(e) {
  return [e[0], e[3], e[6], e[1], e[4], e[7], e[2], e[5], e[8]];
}
function Rd(e) {
  return e[0] * (e[4] * e[8] - e[5] * e[7]) - e[1] * (e[3] * e[8] - e[5] * e[6]) + e[2] * (e[3] * e[7] - e[4] * e[6]);
}
function Ci(e) {
  const t = e.slice(), n = [1, 0, 0, 0, 1, 0, 0, 0, 1];
  for (let r = 0; r < 50 && !(Math.abs(t[1]) + Math.abs(t[2]) + Math.abs(t[5]) < 1e-12); r++) {
    const o = [[0, 1], [0, 2], [1, 2]];
    for (let s = 0; s < 3; s++) {
      const a = o[s][0], c = o[s][1], h = t[a * 3 + c];
      if (Math.abs(h) < 1e-14) continue;
      const p = t[a * 3 + a], b = t[c * 3 + c], y = (b - p) / (2 * h);
      let $;
      Math.abs(y) > 1e10 ? $ = 1 / (2 * y) : $ = (y >= 0 ? 1 : -1) / (Math.abs(y) + Math.sqrt(y * y + 1));
      const S = 1 / Math.sqrt(1 + $ * $), w = $ * S;
      t[a * 3 + a] = p - $ * h, t[c * 3 + c] = b + $ * h, t[a * 3 + c] = 0, t[c * 3 + a] = 0;
      for (let f = 0; f < 3; f++)
        if (f !== a && f !== c) {
          const v = t[f * 3 + a], u = t[f * 3 + c];
          t[f * 3 + a] = S * v - w * u, t[a * 3 + f] = t[f * 3 + a], t[f * 3 + c] = w * v + S * u, t[c * 3 + f] = t[f * 3 + c];
        }
      for (let f = 0; f < 3; f++) {
        const v = n[f * 3 + a], u = n[f * 3 + c];
        n[f * 3 + a] = S * v - w * u, n[f * 3 + c] = w * v + S * u;
      }
    }
  }
  return { values: [t[0], t[4], t[8]], vectors: n };
}
function Nd(e, t) {
  const n = Math.min(e.length, t.length);
  if (n < 1) return null;
  const r = [0, 0, 0], i = [0, 0, 0];
  for (let m = 0; m < n; m++)
    r[0] += e[m][0], r[1] += e[m][1], r[2] += e[m][2], i[0] += t[m][0], i[1] += t[m][1], i[2] += t[m][2];
  if (r[0] /= n, r[1] /= n, r[2] /= n, i[0] /= n, i[1] /= n, i[2] /= n, n < 3)
    return { R: [1, 0, 0, 0, 1, 0, 0, 0, 1], t: [r[0] - i[0], r[1] - i[1], r[2] - i[2]] };
  const o = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let m = 0; m < n; m++) {
    const C = e[m][0] - r[0], l = e[m][1] - r[1], d = e[m][2] - r[2], g = t[m][0] - i[0], k = t[m][1] - i[1], E = t[m][2] - i[2];
    o[0] += C * g, o[1] += C * k, o[2] += C * E, o[3] += l * g, o[4] += l * k, o[5] += l * E, o[6] += d * g, o[7] += d * k, o[8] += d * E;
  }
  const s = Si(o), a = Pn(s, o), c = Pn(o, s);
  let h = Ci(a), p = Ci(c);
  function b(m) {
    const C = [0, 1, 2].sort((d, g) => m.values[g] - m.values[d]), l = new Array(9);
    for (let d = 0; d < 3; d++) {
      const g = C[d];
      l[d] = m.vectors[g], l[3 + d] = m.vectors[3 + g], l[6 + d] = m.vectors[6 + g];
    }
    return {
      values: [m.values[C[0]], m.values[C[1]], m.values[C[2]]],
      vectors: l
    };
  }
  h = b(h), p = b(p);
  const y = h.vectors, $ = p.vectors;
  for (let m = 0; m < 3; m++) {
    const C = y[m], l = y[3 + m], d = y[6 + m], g = o[0] * C + o[1] * l + o[2] * d, k = o[3] * C + o[4] * l + o[5] * d, E = o[6] * C + o[7] * l + o[8] * d, P = $[m], F = $[3 + m], O = $[6 + m];
    g * P + k * F + E * O < 0 && ($[m] = -P, $[3 + m] = -F, $[6 + m] = -O);
  }
  const S = Si(y);
  let w = Pn($, S);
  Rd(w) < 0 && ($[2] = -$[2], $[5] = -$[5], $[8] = -$[8], w = Pn($, S));
  const f = w[0] * i[0] + w[1] * i[1] + w[2] * i[2], v = w[3] * i[0] + w[4] * i[1] + w[5] * i[2], u = w[6] * i[0] + w[7] * i[1] + w[8] * i[2];
  return { R: w, t: [r[0] - f, r[1] - v, r[2] - u] };
}
function Fd(e, t, n) {
  const r = e[0], i = e[1], o = e[2];
  return [
    t[0] * r + t[1] * i + t[2] * o + n[0],
    t[3] * r + t[4] * i + t[5] * o + n[1],
    t[6] * r + t[7] * i + t[8] * o + n[2]
  ];
}
const ki = `
`, sr = 4;
function Ei(e, t, n) {
  if (n === "conformer") return t;
  let r = null;
  try {
    return r = e.get_mol(t, JSON.stringify({ removeHs: !1 })), !r || !r.get_molblock ? t : (r.set_new_coords(n === "coordgen"), r.get_molblock() || t);
  } catch (i) {
    return console.warn("[gufe-viz] could not lay out a molecule in 2D -", he(i)), t;
  } finally {
    if (r)
      try {
        r.delete();
      } catch {
      }
  }
}
function Od(e, t, n) {
  const r = [], i = [];
  for (const [p, b] of n) {
    const y = e[b], $ = t[p];
    !y || !$ || (r.push(y), i.push($));
  }
  if (r.length < 2) return null;
  const o = (p) => {
    let b = 0, y = 0;
    for (const $ of p)
      b += $[0], y += $[1];
    return [b / p.length, y / p.length];
  }, s = o(r), a = o(i);
  let c = null, h = -1 / 0;
  for (const p of [!1, !0]) {
    let b = 0, y = 0;
    for (let u = 0; u < r.length; u++) {
      const m = (p ? -1 : 1) * (r[u][0] - s[0]), C = r[u][1] - s[1], l = i[u][0] - a[0], d = i[u][1] - a[1];
      b += m * d - C * l, y += m * l + C * d;
    }
    const $ = Math.hypot(b, y);
    if ($ <= h) continue;
    h = $;
    const S = Math.atan2(b, y), w = Math.cos(S), f = Math.sin(S), v = (p ? -1 : 1) * s[0];
    c = {
      cos: w,
      sin: f,
      mirror: p,
      tx: a[0] - (w * v - f * s[1]),
      ty: a[1] - (f * v + w * s[1])
    };
  }
  return c;
}
function Md(e, t) {
  const n = (e.mirror ? -1 : 1) * t[0], r = t[1];
  return [e.cos * n - e.sin * r + e.tx, e.sin * n + e.cos * r + e.ty];
}
function Td(e, t, n) {
  const r = ns(e);
  if (!r) return e;
  const i = e.replace(/\r/g, "").split(ki);
  if (i[3].indexOf("V3000") !== -1) return e;
  for (let o = 0; o < r.atoms; o++) {
    const s = i[sr + o], a = t[o];
    if (s == null || !a) return e;
    i[sr + o] = a[0].toFixed(4).padStart(10) + a[1].toFixed(4).padStart(10) + 0 .toFixed(4).padStart(10) + s.substring(30);
  }
  if (n)
    for (let a = 0; a < r.bonds; a++) {
      const c = sr + r.atoms + a, h = i[c];
      if (h == null) break;
      const p = parseInt(h.substring(9, 12), 10);
      p !== 1 && p !== 6 || (i[c] = h.substring(0, 9) + String(p === 1 ? 6 : 1).padStart(3) + h.substring(12));
    }
  return i.join(ki);
}
function jd(e, t, n) {
  try {
    const r = (s) => hr(s).coords.map((a) => [a[0], a[1]]), i = r(t), o = Od(i, r(e), n);
    return o ? Td(
      t,
      i.map((s) => Md(o, s)),
      o.mirror
    ) : t;
  } catch (r) {
    return console.warn("[gufe-viz] could not align a depiction to its partner -", he(r)), t;
  }
}
function zd(e, t, n, r, i) {
  const o = Ei(e, t, r), s = Ei(e, n, r);
  return !i || r === "conformer" ? { left: o, right: s } : { left: o, right: jd(o, s, i) };
}
const Id = {
  core: "0xaaaaaa",
  uniqueA: "0xff4d4d",
  uniqueB: "0x4dff88",
  pairA: "0xff8888",
  pairB: "0x88ffaa",
  pairLine: "0xffee55",
  overlayA: "0xff6666",
  overlayB: "0x66ff99"
}, Dd = {
  core: "0x888888",
  uniqueA: "0xd62828",
  uniqueB: "0x2a9d4a",
  pairA: "0xd62828",
  pairB: "0x2a9d4a",
  pairLine: "0xd9a300",
  overlayA: "0xd62828",
  overlayB: "0x2a9d4a"
};
function qd() {
  try {
    return globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches ?? !1;
  } catch {
    return !1;
  }
}
const ke = qd() ? Id : Dd, xi = [
  { id: "plain", label: "3D", title: "Plain 3D view" },
  { id: "colored", label: "3D-Map", title: "Colour-coded by mapping" },
  { id: "lines", label: "Pairs", title: "Dashed lines between mapped atoms" },
  { id: "overlay", label: "Overlay", title: "Both molecules superimposed" },
  { id: "2d", label: "2D", title: "2D depictions with highlights" },
  { id: "info", label: "Info", title: "The mapping in numbers" }
], ar = 420, ge = {
  stick: 0.15,
  sphere: 0.25,
  uniqueStick: 0.18,
  uniqueSphere: 0.32,
  pairSphere: 0.22,
  overlayOpacity: 0.7,
  lineRadius: 0.04
}, cr = { gap: 2.5, minLiftFraction: 0.6 };
function Pi(e, t, n) {
  const r = [], i = [], o = [];
  for (let s = 0; s < t.length; s++) {
    const a = e.get(s);
    a === void 0 ? r.push(s) : t[s] !== n[a] ? i.push(s) : o.push(s);
  }
  return { atoms: r, elements: i, mapped: o };
}
function Vd(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e.componentA_to_componentB ?? [])
    Number.isInteger(n?.index_A) && Number.isInteger(n?.index_B) && t.set(n.index_A, n.index_B);
  return t;
}
function as(e, t) {
  const n = je(t, e.componentA, "SmallMoleculeComponentViz"), r = je(t, e.componentB, "SmallMoleculeComponentViz");
  return !n || !r ? null : { ...e, registry: n["gufe-key"] === r["gufe-key"] ? [n] : [n, r] };
}
function Ai(e) {
  const t = [1 / 0, 1 / 0, 1 / 0], n = [-1 / 0, -1 / 0, -1 / 0];
  for (const r of e)
    for (let i = 0; i < 3; i++)
      r[i] < t[i] && (t[i] = r[i]), r[i] > n[i] && (n[i] = r[i]);
  return { min: t, max: n, span: [n[0] - t[0], n[1] - t[1], n[2] - t[2]] };
}
function Ld(e, t) {
  const n = Ai(e), r = Ai(t);
  let i = 0;
  n.span[1] < n.span[i] && (i = 1), n.span[2] < n.span[i] && (i = 2);
  const o = Math.max(n.span[0], n.span[1], n.span[2]), s = n.max[i] - r.min[i] + cr.gap, a = cr.minLiftFraction * o + cr.gap;
  return { axis: i, lift: Math.max(s, a) };
}
class Bd extends Pe {
  placeholder() {
    return "Waiting for a LigandAtomMapping payload...";
  }
  renderView(t, n) {
    const r = At(n), i = je(r, n.componentA, "SmallMoleculeComponentViz"), o = je(r, n.componentB, "SmallMoleculeComponentViz");
    if (!i || !o)
      return t.appendChild(
        le("This mapping names two molecules, and its registry does not hold them.")
      ), {};
    const s = ht(i), a = ht(o), c = Vd(n);
    let h, p;
    try {
      h = hr(i.sdf, s), p = hr(o.sdf, a);
    } catch (H) {
      return t.appendChild(le(`Could not read a molecule: ${he(H)}`, !0)), {};
    }
    const b = /* @__PURE__ */ new Map();
    for (const [H, B] of c) b.set(B, H);
    const y = Pi(c, h.symbols, p.symbols), $ = Pi(b, p.symbols, h.symbols), S = j("div", "position:relative;flex:1;min-height:0;display:flex;flex-direction:column;");
    t.appendChild(S);
    const w = j("div", "flex:1;display:flex;flex-direction:column;min-height:0;");
    S.appendChild(w);
    const f = pt("atom-mapping.mode", "plain", xi.map((H) => H.id));
    let v = f.get();
    const u = j(
      "div",
      Ti
    );
    u.appendChild(
      Tn(
        xi,
        v,
        (H) => {
          v = H, te();
        },
        f
      )
    ), S.appendChild(u);
    let m = [], C = 0, l = !0;
    const d = () => {
      C && cancelAnimationFrame(C), C = 0;
      for (const H of m) {
        H.guard?.cleanup();
        try {
          H.viewer?.clear();
        } catch {
        }
      }
      m = [], w.replaceChildren();
    }, g = (H) => {
      const B = j("div", "flex:1;display:flex;flex-direction:column;position:relative;min-height:0;");
      B.appendChild(
        j(
          "div",
          Et,
          H
        )
      );
      const Y = j("div", "flex:1;position:relative;min-height:0;");
      Y.dataset.gufeViewer = "", B.appendChild(Y), w.appendChild(B);
      const q = { container: Y, viewer: null, guard: null };
      return m.push(q), q;
    }, k = () => {
      if (m.length < 2) return;
      const H = m.map(() => "");
      let B = !1;
      const Y = () => {
        if (l) {
          if (!B)
            for (let q = 0; q < m.length; q++) {
              const A = m[q].viewer;
              if (!A) continue;
              const D = JSON.stringify(A.getView());
              if (D !== H[q]) {
                B = !0;
                for (let R = 0; R < m.length; R++)
                  R !== q && m[R].viewer && (m[R].viewer.setView(A.getView()), m[R].viewer.render()), H[R] = D;
                B = !1;
                break;
              }
            }
          C = requestAnimationFrame(Y);
        }
      };
      C = requestAnimationFrame(Y);
    }, E = (H, B) => {
      const Y = Je.createViewer(H.container, { backgroundColor: kt.viewer });
      for (const { mol: q } of B) Y.addModel(wd(q), "sdf");
      return H.viewer = Y, H.guard = Nr(H.container, {
        hint: "Click or hold Ctrl to zoom",
        onZoom: () => {
        }
      }), Y;
    }, P = () => {
      for (const H of [h, p]) {
        const B = g(H.name), Y = E(B, [{ mol: H }]);
        Y.setStyle(
          {},
          { stick: { radius: ge.stick, colorscheme: "Jmol" }, sphere: { scale: ge.sphere, colorscheme: "Jmol" } }
        ), Y.zoomTo(), Y.render();
      }
      k();
    }, F = () => {
      const H = [
        { mol: h, uniques: y, colour: ke.uniqueA },
        { mol: p, uniques: $, colour: ke.uniqueB }
      ];
      for (const B of H) {
        const Y = g(B.mol.name), q = E(Y, [{ mol: B.mol }]);
        q.setStyle(
          {},
          { stick: { radius: ge.stick, color: ke.core }, sphere: { scale: ge.sphere, color: ke.core } }
        );
        for (const A of B.uniques.atoms)
          q.addStyle(
            { serial: A + 1 },
            {
              stick: { radius: ge.uniqueStick, color: B.colour },
              sphere: { scale: ge.uniqueSphere, color: B.colour }
            }
          );
        q.zoomTo(), q.render();
      }
      k();
    }, O = () => {
      const H = g(`${s} to ${a}  (${c.size} mapped pairs)`), B = [], Y = [];
      for (const [z, W] of c) {
        const K = h.coords[z], Z = p.coords[W];
        K && Z && (B.push(K), Y.push(Z));
      }
      const q = Nd(B, Y), A = p.coords.map((z) => q ? Fd(z, q.R, q.t) : [...z]), { axis: D, lift: R } = Ld(h.coords, A), _ = {
        ...p,
        coords: A.map((z) => {
          const W = [z[0], z[1], z[2]];
          return W[D] += R, W;
        })
      }, x = E(H, [{ mol: h }, { mol: _ }]);
      x.setStyle(
        { model: 0 },
        { stick: { radius: ge.stick, color: ke.pairA }, sphere: { scale: ge.pairSphere, color: ke.pairA } }
      ), x.setStyle(
        { model: 1 },
        { stick: { radius: ge.stick, color: ke.pairB }, sphere: { scale: ge.pairSphere, color: ke.pairB } }
      );
      for (const [z, W] of c) {
        const K = h.coords[z], Z = _.coords[W];
        !K || !Z || x.addCylinder({
          start: { x: K[0], y: K[1], z: K[2] },
          end: { x: Z[0], y: Z[1], z: Z[2] },
          radius: ge.lineRadius,
          dashed: !0,
          fromCap: "round",
          toCap: "round",
          color: ke.pairLine
        });
      }
      x.zoomTo(), D === 2 ? x.rotate(90, "x") : D === 0 && x.rotate(-90, "z"), x.render();
    }, I = () => {
      const H = g(`${s} + ${a}  (overlay)`), B = E(H, [{ mol: h }, { mol: p }]);
      for (const [Y, q] of [
        [0, ke.overlayA],
        [1, ke.overlayB]
      ])
        B.setStyle(
          { model: Y },
          {
            stick: { radius: ge.stick, color: q, opacity: ge.overlayOpacity },
            sphere: { scale: ge.pairSphere, color: q, opacity: ge.overlayOpacity }
          }
        );
      B.zoomTo(), B.render();
    }, G = () => {
      const H = dt, B = sd(H.customSpec), q = [
        { mol: h, uniques: y, side: "left", custom: B.left },
        { mol: p, uniques: $, side: "right", custom: B.right }
      ].map((A) => {
        const D = j("div", "flex:1;display:flex;flex-direction:column;min-height:0;");
        D.appendChild(
          j(
            "div",
            Et,
            A.mol.name
          )
        );
        const R = j(
          "div",
          `flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:8px;background:${kt.canvas2D};`
        );
        return R.appendChild(le("Loading 2D depiction...")), D.appendChild(R), w.appendChild(D), { box: R, side: A };
      });
      Rr().then((A) => {
        const D = ud(H, A), R = zd(A, i.sdf, o.sdf, H.layout, H.alignPair ? c : null);
        for (const { box: _, side: x } of q) {
          const z = ld(H, x.mol, x.uniques, x.side), W = fd(
            H,
            ar,
            z,
            x.custom,
            D,
            x.mol.symbols.length
          ), K = pd(A, x.side === "left" ? R.left : R.right, ar, W);
          if (_.replaceChildren(), !K) {
            _.appendChild(le("Failed to parse molecule", !0));
            continue;
          }
          os(_, K, ar);
          const Z = _.querySelector("svg");
          Z && $d(Z, x.mol, H, z, x.custom, D);
        }
      }).catch((A) => {
        for (const { box: D } of q)
          D.replaceChildren(le(`RDKit failed to load: ${he(A)}`, !0));
      });
    }, Q = () => {
      const H = j("div", "flex:1;min-height:0;overflow:auto;padding:14px;display:flex;flex-direction:column;gap:14px;");
      w.appendChild(H);
      const B = j("div", "display:flex;flex-direction:column;gap:2px;");
      B.appendChild(
        j(
          "div",
          `font-size:${X.title};font-weight:${Ze.bold};color:${Me.title};`,
          n.name || `${s} to ${a}`
        )
      ), B.appendChild(j("div", `font-size:${X.body};color:${Me.faint};`, "LigandAtomMapping")), H.appendChild(B);
      const Y = j("div", `display:flex;flex-wrap:wrap;gap:${ce.lg} 16px;font-size:${X.small};`);
      Y.appendChild(de("mapped atoms", String(c.size))), Y.appendChild(
        de("element changes", String(y.elements.length), dt.modifiedColor)
      ), Y.appendChild(de(`unique to ${s}`, String(y.atoms.length), dt.destroyedColor)), Y.appendChild(de(`unique to ${a}`, String($.atoms.length), dt.createdColor)), Y.appendChild(de(`atoms in ${s}`, String(h.symbols.length))), Y.appendChild(de(`atoms in ${a}`, String(p.symbols.length))), Y.appendChild(de("score", n.score == null ? lt : n.score.toFixed(3))), H.appendChild(Y);
      const q = j("div", Ir, "Correspondence");
      H.appendChild(q);
      const A = j("div", zr);
      A.textContent = c.size ? Array.from(c, ([R, _]) => `${R} -> ${_}`).join("   ") : "This mapping relates no atoms at all.", H.appendChild(A);
      const D = Object.entries(n.annotations ?? {}).filter(([R]) => R !== "score");
      if (D.length) {
        H.appendChild(j("div", Ir, "Annotations"));
        const R = j("div", `${zr}color:${Me.faint};`);
        for (const [_, x] of D)
          R.appendChild(j("div", "", `${_}: ${String(x)}`));
        H.appendChild(R);
      }
      H.appendChild(
        j(
          "div",
          `${hs}overflow-wrap:anywhere;`,
          `gufe key: ${n["gufe-key"]}`
        )
      );
    }, te = () => {
      if (d(), v === "info") {
        Q();
        return;
      }
      if (v === "2d") {
        G();
        return;
      }
      w.appendChild(le("Loading 3D viewer...")), Ar().then(() => {
        l && (w.replaceChildren(), v === "colored" ? F() : v === "lines" ? O() : v === "overlay" ? I() : P());
      }).catch((H) => {
        w.replaceChildren(le(`3D render failed: ${he(H)}`, !0));
      });
    };
    return te(), {
      onResize() {
        for (const H of m)
          H.viewer && (H.viewer.resize(), H.viewer.render());
      },
      cleanup() {
        l = !1, d();
      }
    };
  }
}
Ae("gufe-atom-mapping", Bd);
const Ri = ["Force-directed", "Circular", "Radial"], Xe = 38, An = 200, cs = 4, Ud = 14, Kd = 18, xe = {
  fontSize: 11,
  below: Xe - cs + 12,
  minFontSize: 7,
  insideWidth: (Xe - 6) * 2
}, Ni = 1.5, Hd = 6.5, Gd = 0.9, Wd = 14, lr = { size: 8, clearance: 8 }, Jd = { fontSize: 10 }, Yd = { padding: 4 }, ut = [
  { id: "structures", from: 1.1, disc: !1, structure: !0, name: "below", initials: !1, edgeScores: !0 },
  { id: "names", from: 0.5, disc: !0, structure: !1, name: "inside", initials: !1, edgeScores: !0 },
  { id: "shape", from: 0, disc: !0, structure: !1, name: "none", initials: !0, edgeScores: !1 }
], Xd = (e) => ut.find((t) => e >= t.from) ?? ut[ut.length - 1], Zd = (e) => ut[Math.min(ut.indexOf(e) + 1, ut.length - 1)], Rn = 200, Qd = 24, dr = { node: 0.12, edge: 0.06 }, eu = 1.2, _e = {
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
function tu(e) {
  const t = j(
    "div",
    `position:absolute;z-index:30;pointer-events:none;opacity:0;transition:opacity .12s ease;padding:7px 10px;border-radius:6px;font-size:\${FONT.small};line-height:1.5;max-width:260px;background:${M.tooltipBg};border:1px solid ${M.tooltipBorder};color:${M.textPrimary};box-shadow:0 4px 14px rgba(0,0,0,0.28);`
  );
  return e.appendChild(t), {
    show(n, r, i) {
      t.innerHTML = n, t.style.left = `${r + 14}px`, t.style.top = `${i - 10}px`, t.style.opacity = "1";
    },
    hide() {
      t.style.opacity = "0";
    },
    remove() {
      t.remove();
    }
  };
}
function nu(e) {
  const t = /* @__PURE__ */ new Map();
  return (n) => {
    const r = t.get(n);
    if (r) return r;
    const i = `arrow-${n.replace(/[^a-zA-Z0-9]/g, "")}`;
    t.set(n, i);
    const o = se("marker", {
      id: i,
      viewBox: "0 -5 10 10",
      // Pushes the head back along the line so it stops at the node's edge
      // rather than under it.
      refX: Xe + lr.clearance,
      refY: 0,
      markerUnits: "userSpaceOnUse",
      markerWidth: lr.size,
      markerHeight: lr.size,
      orient: "auto"
    });
    return o.appendChild(se("path", { d: "M0,-5L10,0L0,5", fill: n })), e.appendChild(o), i;
  };
}
function ru(e) {
  const t = parseInt(e.replace("#", ""), 16);
  return [t >> 16 & 255, t >> 8 & 255, t & 255];
}
function ou(e) {
  const [t, n] = M.netEdgeRamp.map(ru), r = Math.max(0, Math.min(1, e ?? 0.5));
  return `rgb(${t.map((o, s) => Math.round(o + (n[s] - o) * r)).join(",")})`;
}
const Fe = ht, iu = (e, t) => e.length > t ? `${e.slice(0, t - 1)}...` : e;
function su(e) {
  const t = /* @__PURE__ */ new Set();
  let n = /* @__PURE__ */ new Set();
  const r = (c, h) => {
    if (t.has(h) || n.has(h)) return;
    const p = e.nodes[h], b = p.sdf && rs(c, p.sdf, An, dt.layout);
    if (!b) {
      n.add(h);
      return;
    }
    const y = new DOMParser().parseFromString(b, "image/svg+xml").documentElement;
    if (!y || y.nodeName.toLowerCase() === "parsererror") {
      n.add(h);
      return;
    }
    const $ = (Xe - cs) * 2 / An, S = e.depictionGroups[h];
    S.setAttribute(
      "transform",
      `translate(${-$ * An / 2},${-$ * An / 2}) scale(${$})`
    );
    let w = 0;
    for (const f of Array.from(y.childNodes)) {
      if (f.nodeType !== 1) continue;
      const v = f.nodeName.toLowerCase();
      if (!(v === "defs" || v === "metadata" || v === "title")) {
        if (v === "rect") {
          const u = (f.getAttribute("fill") ?? "").toLowerCase();
          if (u === "#ffffff" || u === "white" || u === "rgb(255,255,255)") continue;
        }
        S.appendChild(document.importNode(f, !0)), w++;
      }
    }
    w ? t.add(h) : n.add(h);
  }, i = [], o = (c, h) => {
    if (i[c]) return i[c];
    h.setAttribute("font-size", String(xe.fontSize));
    let p = 0;
    try {
      p = h.getBBox().width;
    } catch {
      return xe.fontSize;
    }
    if (!p) return xe.fontSize;
    const b = xe.fontSize * xe.insideWidth / p;
    return i[c] = Math.max(xe.minFontSize, Math.min(xe.fontSize, b)), i[c];
  }, s = (c, h) => {
    const p = h.structure && !t.has(c) ? Zd(h) : h;
    e.depictionGroups[c].setAttribute("display", p.structure ? "inline" : "none");
    const b = e.circles[c];
    b.setAttribute("fill", p.disc ? M.netNodeFill : "none"), b.setAttribute("stroke", p.disc ? M.netNodeStroke : "none"), e.initials[c].setAttribute("display", p.initials ? "inline" : "none");
    const y = e.captions[c];
    if (y.setAttribute("display", p.name === "none" ? "none" : "inline"), p.name === "none") return;
    const $ = p.name === "inside";
    y.setAttribute("y", $ ? "0" : String(xe.below)), y.setAttribute("dominant-baseline", $ ? "middle" : "auto"), y.setAttribute("font-size", String($ ? o(c, y) : xe.fontSize));
  };
  return { apply: (c, h, p) => {
    const b = Xd(c);
    e.stage.setAttribute("data-detail", b.id), e.edgeLabels.setAttribute("display", b.edgeScores ? "inline" : "none");
    for (let w = 0; w < e.nodes.length; w++) s(w, b);
    if (!b.structure) return;
    const { width: y, height: $ } = e.viewport(), S = [];
    e.nodes.forEach((w, f) => {
      if (t.has(f) || n.has(f)) return;
      const v = w.x * c + h, u = w.y * c + p;
      v < -Rn || u < -Rn || v > y + Rn || u > $ + Rn || S.push(f);
    }), S.length && e.rdkit().then((w) => {
      if (w)
        for (const f of S)
          r(w, f), s(f, b);
    }).catch(() => {
    });
  }, drawn: () => t.size };
}
function au(e, t, n, r, i) {
  const o = (s) => i === "keys" ? s["gufe-key"] : Fe(s);
  return r === "ligands" ? e.filter((s) => n.has(s["gufe-key"])).map(o).join(", ") : t.filter((s) => n.has(s.from["gufe-key"]) && n.has(s.to["gufe-key"])).map((s) => `${o(s.from)}, ${o(s.to)}`).join(`
`);
}
function cu(e, t) {
  navigator.clipboard?.writeText(e).catch(() => Fi(e, t)), navigator.clipboard || Fi(e, t);
}
function Fi(e, t) {
  const n = j("textarea", "width:100%;height:80px;font-size:${FONT.small};box-sizing:border-box;");
  n.value = e, n.readOnly = !0, t.appendChild(n), n.select();
}
function lu(e, t) {
  const n = URL.createObjectURL(new Blob([e], { type: "text/plain" })), r = j("a", "display:none;");
  r.href = n, r.download = t, document.body.appendChild(r), r.click(), r.remove(), URL.revokeObjectURL(n);
}
function du(e) {
  const t = gl("ligand-network.query"), n = ml("ligand-network.minScore", 0, 0, 1), r = pt("ligand-network.exportAs", "names", ["names", "keys"]), i = j(
    "div",
    `display:flex;flex-direction:column;gap:8px;width:236px;padding:10px;min-height:0;background:${M.panelBg};border-right:1px solid ${M.splitBorder};`
  ), o = j("input", `${ji}width:100%;box-sizing:border-box;`);
  o.type = "search", o.placeholder = "Search ligands", o.value = t.get(), e.query.text = o.value, o.setAttribute("aria-label", "Search ligands by name, SMILES or gufe key"), i.appendChild(o);
  const s = j("div", `display:flex;align-items:center;gap:8px;font-size:${X.small};color:${M.textMuted};`), a = j("span", `min-width:28px;color:${M.textPrimary};`, "0.00"), c = j("input", "flex:1;");
  c.type = "range", c.min = "0", c.max = "1", c.step = "0.01", c.value = String(n.get()), e.filter.minScore = Number(c.value), c.setAttribute("aria-label", "Hide mappings scoring below this"), s.appendChild(j("span", "", "score >=")), s.appendChild(c), s.appendChild(a), i.appendChild(s);
  const h = j("div", `font-size:${X.small};color:${M.textMuted2};`);
  i.appendChild(h);
  const p = j("div", "flex:1;min-height:0;overflow:auto;display:flex;flex-direction:column;gap:3px;");
  i.appendChild(p);
  const b = j("div", "display:flex;flex-direction:column;gap:6px;"), y = j("div", `display:flex;align-items:center;gap:6px;font-size:${X.small};color:${M.textMuted};`);
  y.appendChild(j("span", "", "copy as"));
  const $ = yr(
    [
      { id: "names", label: "names" },
      { id: "keys", label: "gufe keys" }
    ],
    r.get(),
    () => {
    },
    r
  );
  $.style.flex = "1", y.appendChild($), b.appendChild(y);
  const S = j("div", "display:flex;gap:4px;"), w = [
    ["Ligands", "ligands", "Copy the selected ligand names, comma separated"],
    ["Edges", "edges", "Copy the selected edges, one pair per line"]
  ];
  for (const [m, C, l] of w) {
    const d = j("button", `${xt}flex:1;`, m);
    d.title = l, d.onclick = (g) => {
      const k = $.value, E = au(e.nodes, e.edges, e.selected, C, k);
      E && (g.shiftKey ? lu(E, `selected-${C}.txt`) : cu(E, b));
    }, S.appendChild(d);
  }
  b.appendChild(S), b.appendChild(
    j("div", `font-size:${X.tiny};color:${M.textMuted2};`, "Shift-click to save as a file instead.")
  ), i.appendChild(b);
  const f = j("button", `${xt}width:100%;`, "Clear selection");
  f.onclick = () => {
    e.selected.clear(), u(), e.refresh();
  }, i.appendChild(f);
  const v = (m) => {
    const C = e.query.text.trim().toLowerCase();
    return C ? Fe(m).toLowerCase().includes(C) || (m.smiles ?? "").toLowerCase().includes(C) || m["gufe-key"].toLowerCase().includes(C) : !0;
  }, u = () => {
    p.replaceChildren();
    const m = e.nodes.map((C, l) => ({ node: C, index: l })).filter(({ node: C }) => v(C));
    h.textContent = `${m.length} of ${e.nodes.length} ligands`;
    for (const { node: C, index: l } of m) {
      const d = C["gufe-key"], g = j(
        "button",
        `display:flex;align-items:center;gap:6px;padding:5px 8px;border-radius:6px;text-align:left;font-family:inherit;font-size:\${FONT.small};cursor:pointer;width:100%;min-width:0;border:1px solid ${e.selected.has(d) ? M.cardBorderActive : M.cardBorder};background:${e.selected.has(d) ? M.cardBgActive : M.cardBg};color:${M.textPrimary};`
      ), k = j("span", "flex:1;min-width:0;overflow-wrap:anywhere;", Fe(C));
      k.title = `${Fe(C)}
${C.smiles ?? ""}`, g.appendChild(k), g.onclick = (E) => {
        E.shiftKey || E.metaKey || E.ctrlKey ? e.selected.has(d) ? e.selected.delete(d) : e.selected.add(d) : (e.selected.clear(), e.selected.add(d), e.focus(l)), u(), e.refresh();
      }, p.appendChild(g);
    }
    m.length || p.appendChild(j("div", `font-size:${X.small};padding:8px;color:${M.textMuted2};`, "Nothing matches."));
  };
  return o.oninput = () => {
    e.query.text = o.value, t.set(o.value), u(), e.refresh();
  }, c.oninput = () => {
    e.filter.minScore = Number(c.value), a.textContent = e.filter.minScore.toFixed(2), n.set(e.filter.minScore), e.refresh();
  }, u(), i;
}
class uu extends Pe {
  placeholder() {
    return "Waiting for a LigandNetwork payload...";
  }
  renderView(t, n) {
    const r = At(n), i = [];
    let o = 0;
    for (const B of n.nodes ?? []) {
      const Y = je(r, B, "SmallMoleculeComponentViz");
      if (!Y) {
        o++;
        continue;
      }
      i.push({ ...Y, x: 0, y: 0 });
    }
    const s = new Map(i.map((B) => [B["gufe-key"], B])), a = [];
    let c = 0;
    for (const B of n.edges ?? []) {
      const Y = s.get(B.componentA), q = s.get(B.componentB);
      if (!Y || !q) {
        c++;
        continue;
      }
      a.push({ ...B, index: a.length, from: Y, to: q });
    }
    const h = Ue(n.name || "Ligand network");
    h.statsEl.appendChild(de("ligands", String(i.length))), h.statsEl.appendChild(de("mappings", String(a.length))), t.appendChild(h);
    const p = j("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    t.appendChild(p);
    const b = /* @__PURE__ */ new Set(), y = { minScore: 0 }, $ = { text: "" };
    let S = () => {
    };
    const w = $s(
      h,
      () => du({
        nodes: i,
        edges: a,
        selected: b,
        filter: y,
        query: $,
        refresh: () => S(),
        focus: (B) => k(B)
      }),
      {
        label: "Search, filter and select ligands",
        onToggle: () => H(),
        remember: Ct("ligand-network.menuOpen", !1)
      }
    );
    p.appendChild(w.panel);
    const f = j("div", `flex:1 1 58%;min-width:0;display:flex;flex-direction:column;background:${M.netCanvasBg};`), v = j("div", `flex:1 1 42%;min-width:0;display:flex;flex-direction:column;background:${M.appBg};`);
    p.appendChild(f), p.appendChild(j("div", `width:1px;flex-shrink:0;background:${M.splitBorder};`)), p.appendChild(v);
    const u = j("div", `flex:1;position:relative;overflow:hidden;min-height:0;background:${M.netCanvasBg};`);
    f.appendChild(u);
    const m = pt("ligand-network.layout", "Force-directed", Ri), C = this.#t(
      (B) => H(B),
      () => Q(),
      m
    );
    f.appendChild(C.bar);
    const l = this.#e(v, r);
    if (!i.length)
      return u.appendChild(
        le(
          o ? "None of this network's ligands are in its registry." : "This network has no ligands."
        )
      ), l.message("Nothing to show."), {};
    o && We(
      u,
      `${o} ligand${o === 1 ? "" : "s"} named by this network are not in its registry`
    ), c && We(u, `${c} mapping${c === 1 ? "" : "s"} name a ligand this network does not contain`);
    const d = Rr().catch((B) => (console.warn("[gufe-viz] RDKit failed to load:", he(B)), null)), g = tu(u);
    let k = () => {
    }, E = a.length ? 0 : -1, P = null, F = m.get(), O = !1, I = !0, G = () => {
    }, Q = () => {
    };
    const te = (B) => {
      E = B, l.show(a[B] ?? null), G();
    }, H = (B = F) => {
      F = B, P?.(), P = null, u.querySelector("svg")?.remove();
      const Y = u.clientWidth || 800, q = u.clientHeight || 600;
      fu(i, Y, q, F, a);
      const A = () => {
        if (!I) return;
        const D = this.#r(u, i, a, Y, q, te, d, g);
        G = () => D.setSelected(E), Q = D.reset, P = D.cleanup, k = (R) => D.focusOn(R), S = () => {
          const R = $.text.trim().toLowerCase(), _ = b.size > 0 || R.length > 0, x = /* @__PURE__ */ new Set();
          for (const K of i) {
            const Z = K["gufe-key"], ie = b.has(Z) || R.length > 0 && (Fe(K).toLowerCase().includes(R) || (K.smiles ?? "").toLowerCase().includes(R) || Z.toLowerCase().includes(R));
            (!_ || ie) && x.add(Z);
          }
          const z = /* @__PURE__ */ new Set();
          a.forEach((K, Z) => {
            (K.score ?? 0) < y.minScore || !x.has(K.from["gufe-key"]) || !x.has(K.to["gufe-key"]) || z.add(Z);
          });
          const W = _ || y.minScore > 0;
          D.setEmphasis(W ? x : null, W ? z : null);
        }, G(), S(), D.fit();
      };
      if (F !== "Force-directed" || O) {
        A();
        return;
      }
      pu(i, a, Y, q).then((D) => {
        if (I) {
          if (D) {
            A();
            return;
          }
          O = !0, C.picker.value = "Circular", We(u, "d3 could not be loaded - showing the circular layout instead"), H("Circular");
        }
      }, A);
    };
    return H(), l.show(a[E] ?? null), {
      onResize: () => H(),
      cleanup: () => {
        I = !1, g.remove(), P?.();
      }
    };
  }
  #t(t, n, r) {
    const i = j(
      "div",
      Mi.bottom
    ), o = j("div", `display:flex;align-items:center;gap:6px;font-size:${X.small};color:${M.textMuted};`);
    o.appendChild(j("span", "", "score")), o.appendChild(
      j(
        "span",
        `width:40px;height:4px;border-radius:2px;background:linear-gradient(to right,${M.netEdgeRamp.join(",")});`
      )
    ), o.appendChild(j("span", "", "0 -> 1")), i.appendChild(o), i.appendChild(j("label", `font-size:${X.body};margin-left:auto;color:${M.textMuted};`, "Layout"));
    const s = yr(
      Ri.map((a) => ({ id: a, label: a })),
      r.get(),
      (a) => t(a),
      r
    );
    return i.appendChild(s), i.appendChild(Fr(n, "Reset pan and zoom")), { bar: i, picker: s };
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
    const r = j("div", "flex:1;min-height:0;display:flex;flex-direction:column;");
    t.appendChild(r);
    const i = (s) => r.replaceChildren(le(s));
    return { show: (s) => {
      if (!s) {
        i("Click an edge to see its mapping.");
        return;
      }
      const a = document.createElement("gufe-atom-mapping");
      a.style.cssText = "flex:1;min-width:0;min-height:0;display:flex;", a.payload = as(s, n), r.replaceChildren(a);
    }, message: i };
  }
  /** Build the SVG for the current node positions. Returns the handles the
   * caller needs afterwards: selection, depictions, and teardown. */
  #r(t, n, r, i, o, s, a, c) {
    const h = se("svg", {
      class: "gufe-graph",
      width: i,
      height: o,
      style: "display:block;touch-action:none;"
    }), p = se("g");
    h.appendChild(p), t.appendChild(h);
    const b = se("defs"), y = nu(b);
    h.appendChild(b);
    const $ = [], S = se("g"), w = se("g"), f = se("g", { "pointer-events": "none" }), v = se("g");
    p.append(S, w, f, v);
    for (const P of r) {
      const F = ou(P.score), O = Ni + (P.score ?? 0.5) * (Hd - Ni), I = se("line", {
        stroke: M.netHaloColor,
        // Sized from the edge underneath, so a thick edge does not outgrow its
        // own halo and a thin one is not swamped by it.
        "stroke-width": O + Yd.padding * 2,
        "stroke-linecap": "round",
        opacity: 0,
        "pointer-events": "none"
      }), G = se("line", {
        stroke: F,
        "stroke-width": O,
        "stroke-opacity": Gd,
        // A mapping runs from A to B, and the arrow is what says which is which.
        "marker-end": `url(#${y(F)})`,
        "pointer-events": "none"
      }), Q = se("line", { stroke: "transparent", "stroke-width": Wd, style: "cursor:pointer;" });
      Q.addEventListener("click", (B) => {
        B.stopPropagation(), s(P.index);
      }), Q.addEventListener("mousemove", (B) => {
        c.show(
          `<div style="font-weight:700;color:${M.titleColor};">${qe(Fe(P.from))} -&gt; ${qe(Fe(P.to))}</div>` + (P.score == null ? `<div style="color:${M.textMuted2};">no score</div>` : `<div style="margin-top:4px;">score <b>${P.score.toFixed(3)}</b></div>`) + `<div style="margin-top:4px;font-size:${X.tiny};color:${M.textMuted2};">Click to see the mapping</div>`,
          B.offsetX,
          B.offsetY
        );
      }), Q.addEventListener("mouseleave", () => c.hide()), $.push(I), S.append(I, G), w.appendChild(Q);
      const te = se("text", {
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        "font-size": Jd.fontSize,
        "font-weight": 600,
        fill: M.netEdgeLabel
      });
      te.textContent = P.score == null ? "" : P.score.toFixed(2);
      const H = se("g", { class: "gufe-edge-label" });
      H.appendChild(te), f.appendChild(H);
    }
    const u = [], m = [], C = [], l = [], d = n.map((P) => {
      const F = se("g", { class: "gufe-node", style: "cursor:grab;" });
      F.addEventListener("mousemove", (te) => {
        c.show(
          `<div style="font-weight:700;color:${M.titleColor};">${qe(Fe(P))}</div>` + (P.smiles ? `<div style="margin-top:3px;font-family:ui-monospace,Menlo,monospace;overflow-wrap:anywhere;">${qe(P.smiles)}</div>` : "") + `<div style="margin-top:3px;font-size:${X.tiny};color:${M.textMuted2};overflow-wrap:anywhere;">${qe(P["gufe-key"])}</div>`,
          te.offsetX,
          te.offsetY
        );
      }), F.addEventListener("mouseleave", () => c.hide());
      const O = se("circle", {
        r: Xe,
        fill: M.netNodeFill,
        stroke: M.netNodeStroke,
        "stroke-width": 1.5,
        "pointer-events": "all"
      });
      F.appendChild(O), m.push(O);
      const I = se("g", { class: "gufe-node-depiction", "pointer-events": "none" });
      F.appendChild(I), u.push(I);
      const G = se("text", {
        class: "gufe-node-initials",
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        "font-size": Kd,
        "font-weight": 700,
        fill: M.netInitials,
        "pointer-events": "none"
      });
      G.textContent = Fe(P).slice(0, 2).toUpperCase(), F.appendChild(G), C.push(G);
      const Q = se("text", {
        class: "gufe-node-caption",
        "text-anchor": "middle",
        y: xe.below,
        "font-size": xe.fontSize,
        "font-weight": 600,
        fill: M.netNodeCaption,
        "pointer-events": "none"
      });
      return Q.textContent = iu(Fe(P), Ud), Q.setAttribute("display", "none"), l.push(Q), F.appendChild(Q), v.appendChild(F), F;
    }), g = () => {
      r.forEach((P, F) => {
        for (const I of [$[F], S.children[F * 2 + 1], w.children[F]]) {
          const G = I;
          G.setAttribute("x1", String(P.from.x)), G.setAttribute("y1", String(P.from.y)), G.setAttribute("x2", String(P.to.x)), G.setAttribute("y2", String(P.to.y));
        }
        f.children[F].setAttribute(
          "transform",
          `translate(${(P.from.x + P.to.x) / 2},${(P.from.y + P.to.y) / 2 - 8})`
        );
      }), n.forEach((P, F) => d[F].setAttribute("transform", `translate(${P.x},${P.y})`));
    };
    g();
    const k = su({
      nodes: n,
      circles: m,
      captions: l,
      initials: C,
      depictionGroups: u,
      edgeLabels: f,
      stage: h,
      rdkit: () => a,
      viewport: () => ({ width: i, height: o })
    }), E = this.#n(h, p, n, d, g, k.apply);
    return {
      setSelected(P) {
        $.forEach((F, O) => F.setAttribute("opacity", O === P ? "0.95" : "0"));
      },
      /**
       * Dim what is not emphasised rather than hiding it.
       *
       * Asked for directly: you want to see what is *not* selected too, because
       * a filter that removes the rest answers a different question from one
       * that fades it.
       */
      setEmphasis(P, F) {
        d.forEach((O, I) => {
          const G = !P || P.has(n[I]["gufe-key"]);
          O.setAttribute("opacity", G ? "1" : String(dr.node));
        }), r.forEach((O, I) => {
          const G = !F || F.has(I), Q = G ? "0.9" : String(dr.edge);
          S.children[I * 2 + 1].setAttribute("stroke-opacity", Q), f.children[I].setAttribute("opacity", G ? "1" : String(dr.edge));
        });
      },
      focusOn(P) {
        const F = n[P];
        F && E.centreOn(F.x, F.y);
      },
      setDetail: k.apply,
      depictionsDrawn: () => k.drawn(),
      fit: E.fit,
      reset: E.reset,
      cleanup: E.cleanup
    };
  }
  /** Wheel zoom, background pan, node drag - ~40 lines instead of d3-zoom and
   * d3-drag, and they keep working when d3 is unreachable. */
  #n(t, n, r, i, o, s) {
    let a = 1, c = 0, h = 0;
    const p = () => {
      n.setAttribute("transform", `translate(${c},${h}) scale(${a})`), s(a, c, h);
    }, b = () => {
      const m = t.getBoundingClientRect();
      return {
        width: m.width || Number(t.getAttribute("width")) || t.clientWidth || 800,
        height: m.height || Number(t.getAttribute("height")) || t.clientHeight || 600
      };
    }, y = () => {
      let m = 1 / 0, C = 1 / 0, l = -1 / 0, d = -1 / 0;
      for (const P of r)
        m = Math.min(m, P.x), C = Math.min(C, P.y), l = Math.max(l, P.x), d = Math.max(d, P.y);
      if (a = 1, c = 0, h = 0, !Number.isFinite(m)) {
        p();
        return;
      }
      const g = Xe + Qd, { width: k, height: E } = b();
      a = Math.min(1, k / (l - m + g * 2), E / (d - C + g * 2)), c = k / 2 - (m + l) / 2 * a, h = E / 2 - (C + d) / 2 * a, p();
    }, S = Nr(t, {
      onZoom: (m) => {
        const C = t.getBoundingClientRect(), l = m.clientX - C.left, d = m.clientY - C.top, g = Math.min(5 / a, Math.max(0.15 / a, Math.exp(-m.deltaY * 2e-3)));
        return c = l - (l - c) * g, h = d - (d - h) * g, a *= g, p(), g !== 1;
      },
      hint: "Click the graph or hold Ctrl to zoom"
    });
    let w = null;
    const f = (m) => {
      w = { x: m.clientX - c, y: m.clientY - h };
    }, v = (m) => {
      w && (c = m.clientX - w.x, h = m.clientY - w.y, p());
    }, u = () => {
      w = null;
    };
    return t.addEventListener("pointerdown", f), t.addEventListener("pointermove", v), t.addEventListener("pointerup", u), t.addEventListener("pointercancel", u), t.addEventListener("pointerleave", u), i.forEach((m, C) => {
      let l = null;
      m.addEventListener("pointerdown", (g) => {
        g.stopPropagation(), l = { x: g.clientX - r[C].x * a, y: g.clientY - r[C].y * a }, m.setPointerCapture(g.pointerId);
      }), m.addEventListener("pointermove", (g) => {
        l && (r[C].x = r[C].fx = (g.clientX - l.x) / a, r[C].y = r[C].fy = (g.clientY - l.y) / a, o());
      });
      const d = () => {
        l = null;
      };
      m.addEventListener("pointerup", d), m.addEventListener("pointercancel", d);
    }), {
      fit: y,
      // Back to the view it opened on, which is the framed one. An identity
      // transform would be "reset" only in the sense that a blank canvas is.
      reset: y,
      /** Bring a graph point to the middle, zooming in enough to read it. */
      centreOn(m, C) {
        const { width: l, height: d } = b();
        a = Math.max(a, eu), c = l / 2 - m * a, h = d / 2 - C * a, p();
      },
      cleanup() {
        S.cleanup(), t.removeEventListener("pointerdown", f), t.removeEventListener("pointermove", v), t.removeEventListener("pointerup", u), t.removeEventListener("pointercancel", u), t.removeEventListener("pointerleave", u);
      }
    };
  }
}
function fu(e, t, n, r, i) {
  const o = t / 2, s = n / 2, a = (c, h) => {
    c.forEach((p, b) => {
      const y = 2 * Math.PI * b / Math.max(1, c.length) - Math.PI / 2;
      p.x = o + h * Math.cos(y), p.y = s + h * Math.sin(y), p.fx = r === "Force-directed" ? void 0 : p.x, p.fy = r === "Force-directed" ? void 0 : p.y;
    });
  };
  if (r === "Radial" && e.length) {
    const c = new Map(e.map((w) => [w["gufe-key"], []]));
    for (const w of i)
      c.get(w.from["gufe-key"]).push(w.to["gufe-key"]), c.get(w.to["gufe-key"]).push(w.from["gufe-key"]);
    const h = new Map(e.map((w) => [w["gufe-key"], w])), p = e.reduce(
      (w, f) => c.get(f["gufe-key"]).length > c.get(w["gufe-key"]).length ? f : w
    ), b = /* @__PURE__ */ new Set([p["gufe-key"]]);
    let y = [p["gufe-key"]], $ = 0;
    const S = Math.min(t, n) * 0.18;
    for (; y.length; ) {
      a(
        y.map((f) => h.get(f)),
        $ === 0 ? 0 : $ * S + 40
      );
      const w = [];
      for (const f of y)
        for (const v of c.get(f))
          b.has(v) || (b.add(v), w.push(v));
      y = w, $++;
    }
    a(e.filter((w) => !b.has(w["gufe-key"])), Math.min(t, n) * 0.45);
    return;
  }
  a(e, Math.min(t, n) * 0.34);
}
async function pu(e, t, n, r) {
  let i;
  try {
    if (i = await Zi(), typeof i?.forceSimulation != "function") return !1;
  } catch {
    return !1;
  }
  const o = t.map((c) => ({ source: c.from["gufe-key"], target: c.to["gufe-key"], score: c.score })), s = i.forceSimulation(e).force(
    "link",
    i.forceLink(o).id((c) => c["gufe-key"]).distance((c) => _e.linkBaseDistance + (1 - (c.score ?? 0.5)) * _e.linkScoreBonus).strength(_e.linkStrength)
  ).force(
    "charge",
    i.forceManyBody().strength(_e.chargeStrength).distanceMin(_e.chargeDistanceMin).distanceMax(_e.chargeDistanceMax)
  ).force("center", i.forceCenter(n / 2, r / 2).strength(_e.centerStrength)).force("collision", i.forceCollide(Xe + _e.collisionPadding).iterations(_e.collisionIterations)).force("x", i.forceX(n / 2).strength(_e.drift)).force("y", i.forceY(r / 2).strength(_e.drift)).stop(), a = Math.ceil(Math.log(s.alphaMin()) / Math.log(1 - s.alphaDecay()));
  for (let c = 0; c < a * _e.tickMultiplier; c++) s.tick();
  return !0;
}
Ae("gufe-ligand-network", uu);
const _t = { width: 148, height: 46, radius: 10 }, ct = {
  linkDistance: 220,
  linkStrength: 0.4,
  chargeStrength: -1200,
  collisionRadius: 110,
  collisionIterations: 3,
  tickMultiplier: 2
}, St = ht;
function hu(e, t) {
  return e.length > t ? `${e.slice(0, t - 1)}...` : e;
}
function mu(e, t, n) {
  const r = Math.max(90, Math.min(t, n) * 0.36);
  e.forEach((i, o) => {
    const s = 2 * Math.PI * o / Math.max(1, e.length) - Math.PI / 2;
    i.x = t / 2 + r * Math.cos(s), i.y = n / 2 + r * Math.sin(s);
  });
}
async function gu(e, t, n, r) {
  let i;
  try {
    if (i = await Zi(), typeof i?.forceSimulation != "function") return !1;
  } catch {
    return !1;
  }
  const o = t.map((c) => ({ source: c.from["gufe-key"], target: c.to["gufe-key"] })), s = i.forceSimulation(e).force(
    "link",
    i.forceLink(o).id((c) => c["gufe-key"]).distance(ct.linkDistance).strength(ct.linkStrength)
  ).force("charge", i.forceManyBody().strength(ct.chargeStrength)).force("center", i.forceCenter(n / 2, r / 2)).force("collision", i.forceCollide(ct.collisionRadius).iterations(ct.collisionIterations)).stop(), a = Math.ceil(Math.log(s.alphaMin()) / Math.log(1 - s.alphaDecay()));
  for (let c = 0; c < a * ct.tickMultiplier; c++) s.tick();
  return !0;
}
class yu extends Pe {
  placeholder() {
    return "Waiting for an AlchemicalNetwork payload...";
  }
  renderView(t, n) {
    const r = At(n), i = [];
    let o = 0;
    for (const d of n.nodes ?? []) {
      const g = je(r, d, "ChemicalSystemViz");
      if (!g) {
        o++;
        continue;
      }
      i.push({ ...g, x: 0, y: 0 });
    }
    const s = new Map(i.map((d) => [d["gufe-key"], d])), a = [];
    let c = 0;
    for (const d of n.edges ?? []) {
      const g = s.get(d.stateA), k = s.get(d.stateB);
      if (!g || !k) {
        c++;
        continue;
      }
      a.push({ ...d, index: a.length, from: g, to: k });
    }
    const h = (d) => {
      const g = je(r, d.protocol, "ProtocolViz");
      return g?.gufe_type || g?.name || "";
    }, p = new Set(a.map(h).filter(Boolean)), b = Ue(n.name || "Alchemical network");
    b.statsEl.appendChild(de("systems", String(i.length))), b.statsEl.appendChild(de("transformations", String(a.length))), p.size && b.statsEl.appendChild(de("protocol", [...p].join(", "))), t.appendChild(b);
    const y = j("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    t.appendChild(y);
    const $ = j("div", `flex:1 1 62%;min-width:0;position:relative;overflow:hidden;background:${M.netCanvasBg};`);
    y.appendChild($), y.appendChild(j("div", `width:1px;flex-shrink:0;background:${M.splitBorder};`));
    const S = j("div", `flex:1 1 38%;min-width:0;display:flex;flex-direction:column;background:${M.appBg};`);
    y.appendChild(S);
    const w = this.#t(S, r, h);
    if (!i.length)
      return $.appendChild(
        le(
          o ? "None of this network's chemical systems are in its registry." : "This network has no chemical systems."
        )
      ), w.message("Nothing to show."), {};
    o && We(
      $,
      `${o} chemical system${o === 1 ? "" : "s"} named by this network are not in its registry`
    ), c && We(
      $,
      `${c} transformation${c === 1 ? "" : "s"} name a system this network does not contain`
    );
    let f = !0, v = !1, u = null, m = () => {
    };
    const C = (d, g) => {
      u = { kind: d, index: g }, w.show(d === "node" ? i[g] : a[g], d), m();
    }, l = () => {
      $.querySelector("svg")?.remove();
      const d = $.clientWidth || 800, g = $.clientHeight || 600;
      mu(i, d, g);
      const k = () => {
        if (!f) return;
        const E = this.#e($, i, a, d, g, C);
        m = () => E.setSelected(u), m();
      };
      if (v) {
        k();
        return;
      }
      gu(i, a, d, g).then((E) => {
        f && (E || (v = !0, We($, "d3 could not be loaded - showing the circular layout instead")), k());
      }, k);
    };
    return l(), C("node", 0), {
      onResize: () => l(),
      cleanup: () => {
        f = !1;
      }
    };
  }
  /** The right-hand pane: what the selected system or transformation is. */
  #t(t, n, r) {
    t.appendChild(
      j(
        "div",
        Et,
        "Selected"
      )
    );
    const i = j("div", "flex:1;min-height:0;overflow:auto;display:flex;flex-direction:column;");
    t.appendChild(i);
    const o = (c) => i.replaceChildren(le(c)), s = (c, h) => {
      const p = j(
        "div",
        `padding:10px 14px;border-bottom:1px solid ${M.toolbarBorder};display:flex;flex-direction:column;gap:4px;`
      );
      return p.appendChild(j("div", `font-size:${X.heading};font-weight:600;color:${M.textPrimary};`, c)), p.appendChild(j("div", `font-size:${X.small};color:${M.textMuted2};`, h)), p;
    };
    return { show: (c, h) => {
      if (i.replaceChildren(), h === "node") {
        const y = c;
        i.appendChild(s(St(y), "ChemicalSystem"));
        const $ = j("div", "display:flex;flex-direction:column;gap:6px;padding:12px 14px;"), S = Object.entries(y.components ?? {});
        for (const [w, f] of S) {
          const v = Ye(n, f), u = j(
            "div",
            `display:flex;align-items:center;gap:8px;padding:7px 10px;border-radius:8px;min-width:0;background:${M.cardBg};border:1px solid ${M.cardBorder};`
          );
          u.appendChild(j("span", `font-size:${X.body};font-weight:700;color:${M.textPrimary};`, w)), u.appendChild(
            j(
              "span",
              `font-size:${X.small};color:${M.textMuted};overflow-wrap:anywhere;min-width:0;`,
              v ? v.name || "(unnamed)" : "(not in the registry)"
            )
          );
          const m = Pt(
            v ? v.type === "UnknownComponentViz" ? v.gufe_type : v.type.replace(/Viz$/, "") : "missing"
          );
          m.style.marginLeft = "auto", u.appendChild(m), $.appendChild(u);
        }
        S.length || $.appendChild(j("div", `font-size:${X.body};color:${M.textMuted2};`, "This system lists no components.")), i.appendChild($), i.appendChild(
          j(
            "div",
            `padding:0 14px 12px;font-size:${X.small};font-family:ui-monospace,SFMono-Regular,Menlo,monospace;color:${M.textMuted2};overflow-wrap:anywhere;`,
            y["gufe-key"]
          )
        );
        return;
      }
      const p = c;
      i.appendChild(s(p.name || "Unnamed transformation", "Transformation"));
      const b = j("div", "display:flex;flex-direction:column;gap:8px;padding:12px 14px;");
      for (const [y, $] of [
        ["State A", St(p.from)],
        ["State B", St(p.to)],
        ["Protocol", r(p) || "-"]
      ]) {
        const S = j("div", "display:flex;gap:10px;align-items:baseline;min-width:0;");
        S.appendChild(
          j(
            "span",
            `flex:0 0 76px;font-size:${X.tiny};font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:${M.textMuted2};`,
            y
          )
        ), S.appendChild(j("span", `flex:1;min-width:0;font-size:${X.body};color:${M.textPrimary};overflow-wrap:anywhere;`, $)), b.appendChild(S);
      }
      i.appendChild(b), i.appendChild(
        j(
          "div",
          `padding:0 14px 12px;font-size:${X.small};font-family:ui-monospace,SFMono-Regular,Menlo,monospace;color:${M.textMuted2};overflow-wrap:anywhere;`,
          p["gufe-key"]
        )
      );
    }, message: o };
  }
  /** Build the SVG for the current positions, and hand back the selection hook. */
  #e(t, n, r, i, o, s) {
    const a = se("svg", { width: i, height: o, style: "display:block;" });
    t.appendChild(a);
    const c = se("g"), h = se("g");
    a.append(c, h);
    const p = [];
    r.forEach((y, $) => {
      const S = se("line", {
        x1: y.from.x,
        y1: y.from.y,
        x2: y.to.x,
        y2: y.to.y,
        stroke: M.netEdgeLine,
        "stroke-width": 2,
        "stroke-linecap": "round",
        style: "cursor:pointer;"
      });
      Mn(S, y.name || "transformation"), S.addEventListener("click", () => s("edge", $)), c.appendChild(S), p.push(S);
      const w = se("line", {
        x1: y.from.x,
        y1: y.from.y,
        x2: y.to.x,
        y2: y.to.y,
        stroke: "transparent",
        "stroke-width": 16,
        style: "cursor:pointer;"
      });
      w.addEventListener("click", () => s("edge", $)), c.appendChild(w);
    });
    const b = [];
    return n.forEach((y, $) => {
      const S = se("g", { style: "cursor:pointer;" }), w = se("rect", {
        x: y.x - _t.width / 2,
        y: y.y - _t.height / 2,
        width: _t.width,
        height: _t.height,
        rx: _t.radius,
        fill: M.cardBg,
        stroke: M.cardBorder,
        "stroke-width": 2
      });
      S.appendChild(w), b.push(w);
      const f = se("text", {
        x: y.x,
        y: y.y - 2,
        "text-anchor": "middle",
        fill: M.netNodeLabel,
        "font-size": 12,
        "font-weight": 700,
        "font-family": "ui-sans-serif,system-ui,sans-serif"
      });
      f.textContent = hu(St(y), 20), S.appendChild(f);
      const v = Object.keys(y.components ?? {}).length, u = se("text", {
        x: y.x,
        y: y.y + 14,
        "text-anchor": "middle",
        fill: M.netInitials,
        "font-size": 10,
        "font-family": "ui-sans-serif,system-ui,sans-serif"
      });
      u.textContent = `${v} component${v === 1 ? "" : "s"}`, S.appendChild(u), Mn(S, St(y)), S.addEventListener("click", () => s("node", $)), h.appendChild(S);
    }), {
      setSelected(y) {
        b.forEach(($, S) => {
          const w = y?.kind === "node" && y.index === S;
          $.setAttribute("stroke", w ? M.cardBorderActive : M.cardBorder), $.setAttribute("stroke-width", w ? "3" : "2");
        }), p.forEach(($, S) => {
          const w = y?.kind === "edge" && y.index === S;
          $.setAttribute("stroke", w ? M.netHaloColor : M.netEdgeLine), $.setAttribute("stroke-width", w ? "4" : "2");
        });
      }
    };
  }
}
Ae("gufe-alchemical-network", yu);
function vu(e) {
  return e.name || e.type.replace(/Viz$/, "");
}
function $u(e) {
  return e.type === "UnknownComponentViz" ? e.gufe_type : e.type.replace(/Viz$/, "");
}
class bu extends Pe {
  placeholder() {
    return "Waiting for a ChemicalSystem payload...";
  }
  renderView(t, n) {
    const r = At(n), i = [], o = [];
    for (const [S, w] of Object.entries(n.components ?? {})) {
      const f = Ye(r, w);
      f ? i.push([S, f]) : o.push(S);
    }
    const s = Ue(n.name || "Chemical system");
    if (s.statsEl.appendChild(de("components", String(i.length))), t.appendChild(s), !i.length)
      return t.appendChild(
        le(
          o.length ? "None of this system's components are in its registry." : "This chemical system has no components."
        )
      ), {};
    const a = j("div", "flex:1;min-height:0;position:relative;display:flex;flex-direction:row;");
    t.appendChild(a), o.length && We(
      a,
      `${o.length} component${o.length === 1 ? "" : "s"} named by this system (${o.join(", ")}) are not in its registry`
    );
    const c = j(
      "div",
      `flex:0 0 220px;min-width:0;overflow:auto;display:flex;flex-direction:column;gap:6px;padding:10px;background:${M.panelBg};border-right:1px solid ${M.splitBorder};`
    );
    a.appendChild(c);
    const h = j("div", "flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;");
    a.appendChild(h);
    const p = j("div", "flex:1;min-height:0;display:flex;");
    h.appendChild(p);
    const b = document.createElement("gufe-view");
    b.style.cssText = "flex:1;min-width:0;min-height:0;", p.appendChild(b);
    const y = [], $ = (S) => {
      y.forEach((w, f) => {
        const v = f === S;
        w.style.background = v ? M.cardBgActive : M.cardBg, w.style.borderColor = v ? M.cardBorderActive : M.cardBorder;
      }), b.payload = i[S][1];
    };
    return i.forEach(([S, w], f) => {
      const v = j(
        "button",
        `display:flex;flex-direction:column;align-items:flex-start;gap:4px;padding:8px 10px;text-align:left;border:1px solid ${M.cardBorder};border-radius:8px;background:${M.cardBg};cursor:pointer;font-family:inherit;font-size:\${FONT.body};width:100%;`
      );
      v.appendChild(j("span", `font-weight:700;color:${M.textPrimary};`, S)), v.appendChild(j("span", `font-size:${X.small};color:${M.textMuted};`, vu(w))), v.appendChild(Pt($u(w))), v.onclick = () => $(f), y.push(v), c.appendChild(v);
    }), $(0), {
      onResize: () => b.resize?.(),
      // Removing the nested view fires its own `disconnectedCallback`, which is
      // where whatever it mounted releases its viewers.
      cleanup: () => b.remove()
    };
  }
}
Ae("gufe-chemical-system", bu);
class wu extends Pe {
  placeholder() {
    return "Waiting for a Protocol payload...";
  }
  renderView(t, n) {
    const r = Ue(n.gufe_type || n.name || "Protocol");
    r.statsEl.appendChild(Pt(n.gufe_type)), t.appendChild(r);
    const i = j(
      "div",
      "flex:1;min-height:0;overflow:auto;display:flex;align-items:center;justify-content:center;padding:24px;"
    );
    t.appendChild(i);
    const o = Nn();
    return o.style.maxWidth = "460px", o.appendChild(Oe("gufe class", n.gufe_type, !0)), n.name && o.appendChild(Oe("Name", n.name)), o.appendChild(Oe("gufe key", n["gufe-key"], !0)), o.appendChild(
      j(
        "div",
        `padding-top:10px;font-size:${X.small};line-height:1.6;color:${M.textMuted2};`,
        "A Protocol's settings are not carried in this payload: they are large, deeply nested, and nothing draws them yet."
      )
    ), i.appendChild(o), {};
  }
}
Ae("gufe-protocol", wu);
const Ee = { width: 340, height: 260, padding: 14, radius: 12 }, _u = 150, Su = 40, Cu = 24;
function ku(e) {
  let t = e >>> 0;
  return () => (t = t * 1664525 + 1013904223 >>> 0, t / 4294967296);
}
function Eu(e) {
  const t = /-?\d+(\.\d+)?([eE][-+]?\d+)?/.exec(e ?? "");
  if (!t) return null;
  const n = Number(t[0]);
  return Number.isFinite(n) ? n : null;
}
function xu(e) {
  return e == null || e <= 0 ? 0 : Math.max(1, Math.min(Cu, Math.round(e * Su)));
}
function Pu(e) {
  const t = se("svg", {
    viewBox: `0 0 ${Ee.width} ${Ee.height}`,
    style: "width:100%;height:100%;max-width:100%;",
    role: "img"
  });
  Mn(t, `${e.smiles || "solvent"} box`), t.appendChild(
    se("rect", {
      x: 1,
      y: 1,
      width: Ee.width - 2,
      height: Ee.height - 2,
      rx: Ee.radius,
      fill: M.boxFill,
      stroke: M.boxStroke,
      "stroke-width": 1.5
    })
  );
  const n = ku(1597463007), r = () => ({
    x: Ee.padding + n() * (Ee.width - 2 * Ee.padding),
    y: Ee.padding + n() * (Ee.height - 2 * Ee.padding)
  });
  for (let s = 0; s < _u; s++) {
    const { x: a, y: c } = r();
    t.appendChild(se("circle", { cx: a, cy: c, r: 2.4, fill: M.textMuted2, "fill-opacity": 0.45 }));
  }
  const i = xu(Eu(e.ion_concentration)), o = [
    [e.positive_ion, M.diffAdded],
    [e.negative_ion, M.diffRemoved]
  ];
  for (const [s, a] of o)
    for (let c = 0; c < i; c++) {
      const { x: h, y: p } = r(), b = se("circle", { cx: h, cy: p, r: 5.5, fill: a, "fill-opacity": 0.85 });
      t.appendChild(Mn(b, s));
    }
  return t;
}
class Au extends Pe {
  placeholder() {
    return "Waiting for a SolventComponent payload...";
  }
  renderView(t, n) {
    const r = Ue(n.name || "Solvent");
    r.statsEl.appendChild(de("neutralized", n.neutralize ? "yes" : "no")), r.statsEl.appendChild(de(n.positive_ion, "", M.diffAdded)), r.statsEl.appendChild(de(n.negative_ion, "", M.diffRemoved)), t.appendChild(r);
    const i = j(
      "div",
      "flex:1;min-height:0;display:flex;flex-wrap:wrap;gap:16px;padding:16px;overflow:auto;align-items:flex-start;"
    );
    t.appendChild(i);
    const o = Nn();
    o.style.flex = "1 1 320px", o.appendChild(Oe("SMILES", n.smiles, !0)), o.appendChild(Oe("Positive ion", n.positive_ion)), o.appendChild(Oe("Negative ion", n.negative_ion)), o.appendChild(Oe("Ion concentration", n.ion_concentration)), o.appendChild(Oe("Neutralize", n.neutralize ? "yes" : "no")), i.appendChild(o);
    const s = Nn();
    return s.style.flex = "1 1 340px", s.style.alignItems = "center", s.appendChild(Pu(n)), s.appendChild(
      j(
        "div",
        `padding-top:10px;font-size:${X.small};text-align:center;color:${M.textMuted2};`,
        "Schematic only: the dots show which ions are present, not how many."
      )
    ), i.appendChild(s), {};
  }
}
Ae("gufe-solvent", Au);
const gr = {
  unchanged: M.diffUnchanged,
  changed: M.diffChanged,
  added: M.diffAdded,
  removed: M.diffRemoved
};
function Ru(e, t) {
  return e && !t ? "removed" : !e && t ? "added" : e === t ? "unchanged" : "changed";
}
function Nu(e, t) {
  return [.../* @__PURE__ */ new Set([...Object.keys(e.components ?? {}), ...Object.keys(t.components ?? {})])].sort();
}
function Fu(e) {
  if (!e) return null;
  const t = e.type === "UnknownComponentViz" ? e.gufe_type : e.type.replace(/Viz$/, "");
  return { name: e.name || "(unnamed)", type: t };
}
function Oi(e, t) {
  const n = j(
    "div",
    `flex:1 1 50%;min-width:0;display:flex;flex-direction:column;gap:4px;padding:8px 10px;border-radius:8px;background:${M.cardBg};border:1px solid ${M.cardBorder};`
  ), r = Fu(e);
  return r ? (n.style.borderColor = t === "unchanged" ? M.cardBorder : gr[t], n.appendChild(j("span", `font-size:${X.body};font-weight:600;color:${M.textPrimary};`, r.name)), n.appendChild(Pt(r.type)), n) : (n.style.background = "transparent", n.style.borderStyle = "dashed", n.appendChild(j("span", `font-size:${X.body};color:${M.textMuted2};`, "absent")), n);
}
function Ou(e, t) {
  const n = Ye(t, e.componentA), r = Ye(t, e.componentB);
  return `${n ? ht(n) : "A"} to ${r ? ht(r) : "B"}`;
}
class Mu extends Pe {
  placeholder() {
    return "Waiting for a Transformation payload...";
  }
  renderView(t, n) {
    const r = At(n), i = je(r, n.stateA, "ChemicalSystemViz"), o = je(r, n.stateB, "ChemicalSystemViz"), s = je(r, n.protocol, "ProtocolViz"), a = n.mappings ?? [], c = Ue(n.name || "Transformation");
    if (c.statsEl.appendChild(de("protocol", s?.gufe_type || s?.name || "-")), c.statsEl.appendChild(de("mappings", String(a.length))), t.appendChild(c), !i || !o)
      return t.appendChild(
        le("This transformation names two chemical systems, and its registry does not hold them.")
      ), {};
    const h = Nu(i, o), p = j("div", "flex:0 0 auto;max-height:45%;overflow:auto;padding:12px 14px;");
    t.appendChild(p);
    const b = j("div", "display:flex;gap:10px;padding:0 0 6px 120px;");
    for (const [f, v] of [
      ["State A", i],
      ["State B", o]
    ])
      b.appendChild(
        j(
          "div",
          `flex:1 1 50%;min-width:0;font-size:${X.small};font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:${M.textMuted2};`,
          `${f}${v.name ? ` - ${v.name}` : ""}`
        )
      );
    p.appendChild(b);
    for (const f of h) {
      const v = i.components?.[f], u = o.components?.[f], m = Ru(v, u), C = Ye(r, v), l = Ye(r, u), d = j("div", "display:flex;align-items:stretch;gap:10px;padding:4px 0;"), g = j("div", "flex:0 0 110px;display:flex;align-items:center;gap:6px;min-width:0;");
      g.appendChild(
        j("span", `width:8px;height:8px;border-radius:50%;flex-shrink:0;background:${gr[m]};`)
      );
      const k = j("span", `font-size:${X.body};font-weight:700;color:${M.textPrimary};overflow-wrap:anywhere;`, f);
      k.title = m, g.appendChild(k), d.appendChild(g), d.appendChild(Oi(C, m)), d.appendChild(Oi(l, m)), p.appendChild(d);
    }
    const y = j(
      "div",
      `display:flex;flex-wrap:wrap;gap:12px;padding:8px 0 0;font-size:${X.small};color:${M.textMuted};`
    );
    for (const f of ["unchanged", "changed", "added", "removed"])
      y.appendChild(de(f, "", gr[f]));
    p.appendChild(y);
    const $ = j(
      "div",
      Et,
      "Atom mapping"
    );
    if (t.appendChild($), !a.length)
      return t.appendChild(
        le(
          "This transformation carries no atom mapping - nothing here maps one small molecule onto another."
        )
      ), {};
    const S = document.createElement("gufe-atom-mapping");
    S.style.cssText = "flex:1;min-height:0;min-width:0;";
    const w = (f) => {
      S.payload = as(a[f], r);
    };
    if (w(0), a.length > 1) {
      const f = j(
        "div",
        `display:flex;align-items:center;gap:8px;padding:6px 10px;flex-shrink:0;font-size:\${FONT.small};background:${M.toolbarBg};border-bottom:1px solid ${M.toolbarBorder};color:${M.textMuted};`
      );
      f.appendChild(
        Tn(
          a.map((v, u) => ({
            id: String(u),
            label: v.name || Ou(v, r)
          })),
          "0",
          (v) => w(Number(v))
        )
      ), t.appendChild(f);
    }
    return t.appendChild(S), {
      onResize: () => S.resize?.(),
      cleanup: () => S.remove()
    };
  }
}
Ae("gufe-transformation", Mu);
class Tu extends Pe {
  placeholder() {
    return "Waiting for a component payload...";
  }
  renderView(t, n) {
    const r = Ue(n.name || "Unnamed component");
    r.statsEl.appendChild(Pt(n.gufe_type)), t.appendChild(r);
    const i = j("div", "flex:1;min-height:0;overflow:auto;display:flex;align-items:center;justify-content:center;padding:24px;");
    t.appendChild(i);
    const o = Nn();
    return o.style.maxWidth = "460px", o.appendChild(
      j(
        "div",
        `font-size:${X.heading};font-weight:600;padding-bottom:6px;color:${M.textPrimary};`,
        `There is no visualization for ${n.gufe_type}.`
      )
    ), o.appendChild(
      j(
        "div",
        `font-size:${X.body};line-height:1.6;padding-bottom:10px;color:${M.textMuted};`,
        "gufe lets a project define its own Component subclasses, so this is a component this build has never been taught to draw - not a broken payload. Everything gufe knows about it that survives serialization is below."
      )
    ), o.appendChild(Oe("Name", n.name || "(unnamed)")), o.appendChild(Oe("gufe class", n.gufe_type, !0)), i.appendChild(o), {};
  }
}
Ae("gufe-unknown-component", Tu);
function Lu(e, t) {
  let n = e.querySelector("gufe-view");
  return n || (n = document.createElement("gufe-view"), n.style.cssText = "display:block;width:100%;height:100%;", e.appendChild(n)), t !== void 0 && (n.payload = t), n;
}
typeof globalThis < "u" && (globalThis.gufeViz = { settings: Yi, reset: yl });
export {
  ms as CHROME_OPEN_BY_DEFAULT,
  ws as DEBUG_ATTRIBUTE,
  _s as DEBUG_GLOBAL,
  Xl as DEFAULT_DEPICT_STYLE,
  bl as DEFAULT_ZOOM_BOUNDS,
  dt as DEPICT_STYLE,
  rd as DEPICT_STYLE_RANGES,
  yu as GufeAlchemicalNetwork,
  Bd as GufeAtomMapping,
  bu as GufeChemicalSystem,
  Pe as GufeElement,
  uu as GufeLigandNetwork,
  Ad as GufeProtein,
  wu as GufeProtocol,
  Sd as GufeSmallMolecule,
  Au as GufeSolvent,
  Mu as GufeTransformation,
  Tu as GufeUnknownComponent,
  ll as GufeView,
  or as MAPPING_COLORS,
  qu as MAPPING_RAMP_3D,
  Vu as MAPPING_RAMP_NAME,
  ju as PAYLOAD_TYPES,
  zu as SCHEMA_TYPES,
  Er as VIEW_TAGS,
  Od as align2D,
  jd as alignedToPartner,
  Fd as applyRT,
  Md as applyTurn,
  _l as boundedZoom,
  At as buildRegistry,
  pt as choice,
  $s as chromeMenu,
  ks as debugEnabled,
  Ae as defineElement,
  Ji as describeProblem,
  Ru as diffStatus,
  Du as dispatchProblem,
  ht as entryLabel,
  Ct as flag,
  al as formatIssues,
  Nr as guardWheel,
  Nd as kabsch,
  Ei as laidOut,
  zd as layoutPair,
  Ld as liftFor,
  xs as logPayload,
  Ye as lookup,
  je as lookupOfType,
  as as mappingPayloadFor,
  ld as markGroups,
  ir as markedBonds,
  Lu as mount,
  id as normaliseDepictStyle,
  ml as num,
  sd as parseAtomSpec,
  Eu as parseConcentration,
  Es as payloadJson,
  Fr as resetControl,
  yl as resetSettings,
  au as selectionText,
  Ln as setting,
  Yi as settings,
  gl as textSetting,
  Pi as uniqueAtoms,
  cd as uniqueBonds,
  Iu as validateAs,
  sl as validatePayload,
  Qi as viewerInteraction,
  Cl as wheelFactor,
  Td as withCoords
};
