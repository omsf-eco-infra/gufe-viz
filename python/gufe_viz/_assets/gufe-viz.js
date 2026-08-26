const Tr = {
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
    netInitials: "#51cbee",
    netEdgeRamp: ["#45455e", "#51cbee"],
    netEdgeLine: "#8f93a6",
    netEdgeLabel: "#f2f3f7",
    netLabelBg: "#33334d",
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
    netInitials: "#4182e4",
    netEdgeRamp: ["#e8eaef", "#4182e4"],
    netEdgeLine: "#999999",
    netEdgeLabel: "#333333",
    netLabelBg: "#ffffff",
    netHaloColor: "#51cbee",
    boxFill: "#e6effc",
    boxStroke: "#cccccc"
  }
};
function ls() {
  try {
    return globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches ?? !1;
  } catch {
    return !1;
  }
}
const O = ls() ? Tr.dark : Tr.light, Z = {
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
}, Ye = {
  bold: "700"
}, ce = {
  xs: "2px",
  sm: "4px",
  md: "6px",
  lg: "8px",
  xl: "10px",
  xxl: "14px"
}, pt = {
  sm: "3px",
  md: "6px",
  xl: "10px"
}, Oe = {
  title: O.titleColor,
  primary: O.textPrimary,
  muted: O.textMuted,
  faint: O.textMuted2,
  error: O.errorFg
}, St = {
  /** Where a 3D engine draws. Interface, not chemistry: it is the paper. */
  viewer: O.viewerBg,
  /** Where a 2D depiction is placed, for the same reason. */
  canvas2D: O.canvas2DBg
}, ye = {
  base: `background:${O.btnBg};color:${O.btnFg};border:1px solid ${O.btnBorder};padding:${ce.sm} 9px;font-size:${Z.small};font-weight:${Ye.bold};border-radius:${pt.sm};cursor:pointer;font-family:inherit;`,
  bg: O.btnBg,
  bgHover: O.btnBgHover,
  bgActive: O.btnBgActive
}, ds = `background:${O.selectBg};color:${O.textPrimary};border:1px solid ${O.selectBorder};border-radius:${pt.md};padding:${ce.sm} ${ce.lg};font-size:${Z.body};cursor:pointer;font-family:inherit;`, us = `display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;padding:9px ${ce.xxl};flex-shrink:0;background:${O.toolbarBg};border-bottom:1px solid ${O.toolbarBorder};`, Mi = {
  top: `display:flex;align-items:center;gap:${ce.xl};flex-wrap:wrap;padding:${ce.lg} ${ce.xxl};flex-shrink:0;font-size:${Z.body};background:${O.toolbarBg};border-bottom:1px solid ${O.toolbarBorder};color:${O.textPrimary};`,
  bottom: `display:flex;align-items:center;gap:${ce.xl};flex-wrap:wrap;padding:${ce.lg} ${ce.xxl};flex-shrink:0;background:${O.toolbarBg};border-top:1px solid ${O.toolbarBorder};`
}, Ct = `flex-shrink:0;padding:${ce.sm} ${ce.xl};font-size:${Z.heading};font-weight:${Ye.bold};color:${O.labelFg};background:${O.labelBg};`, fs = `display:flex;flex-direction:column;gap:${ce.xs};padding:${ce.xxl} 18px;border-radius:${pt.xl};background:${O.cardBg};border:1px solid ${O.cardBorder};`, Ti = `position:absolute;bottom:${ce.xl};right:${ce.xl};display:flex;gap:${ce.sm};padding:${ce.sm};border-radius:${pt.md};z-index:10;background:${O.switcherBg};box-shadow:0 2px 8px rgba(0,0,0,0.25);`, jr = `font-family:${Z.mono};font-size:${Z.small};line-height:1.7;color:${O.textMuted};`, Ir = `font-size:${Z.small};font-weight:${Ye.bold};letter-spacing:.08em;text-transform:uppercase;color:${O.textMuted2};`, ps = `font-size:${Z.small};line-height:1.6;color:${O.textMuted2};`;
function j(e, t, n) {
  const r = document.createElement(e);
  return t && (r.style.cssText = t), n != null && (r.textContent = n), r;
}
function De(e) {
  return String(e ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function he(e) {
  if (e == null) return "unknown error";
  const t = e.message;
  if (typeof t == "string" && t) return t;
  const n = String(e);
  return n === "[object Object]" ? e.name || "unknown error" : n;
}
const mt = (e) => e.toLocaleString("en-US"), at = "-", kt = ye.base, ji = ds;
function On(e, t, n, r) {
  if (r) {
    const s = r.get();
    e.some((a) => a.id === s) && (t = s);
  }
  const i = j("div", "display:flex;gap:4px;"), o = e.map((s) => {
    const a = j("button", kt, s.label);
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
function gr(e, t, n, r) {
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
function Ii(e, t, n, r = {}) {
  let i = r.remember ? r.remember.get() : t;
  const o = j("button", kt, e);
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
  return i.innerHTML = `${De(e)} <b style="color:${Oe.primary};">${De(t)}</b>`, r.appendChild(i), r;
}
function Ge(e, t) {
  const n = j("div", "", `⚠ ${t}`);
  return n.style.cssText = `position:absolute;top:${ce.xl};left:50%;transform:translateX(-50%);max-width:90%;z-index:20;padding:${ce.md} ${ce.xxl};border-radius:${pt.md};font-size:${Z.body};background:${O.warnBg};color:${O.warnFg};border:1px solid ${O.warnBorder};`, e.appendChild(n), n;
}
function le(e, t = !1) {
  return j(
    "div",
    `flex:1;display:flex;align-items:center;justify-content:center;text-align:center;padding:24px;font-size:${Z.heading};color:${t ? Oe.error : Oe.faint};`,
    e
  );
}
function Be(e) {
  const t = j("div", us);
  return t.className = "gufe-header", t.titleEl = j(
    "span",
    `font-weight:${Ye.bold};font-size:${Z.title};color:${Oe.title};letter-spacing:.02em;`,
    e
  ), t.statsEl = j(
    "div",
    `display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-left:auto;font-size:${Z.small};color:${Oe.muted};`
  ), t.toggleEl = j("div", "display:flex;align-items:center;align-self:center;flex-shrink:0;"), t.appendChild(t.toggleEl), t.appendChild(t.titleEl), t.appendChild(t.statsEl), t;
}
function Fe(e, t, n = !1) {
  const r = j("div", "display:flex;gap:12px;align-items:baseline;padding:5px 0;min-width:0;");
  r.appendChild(
    j(
      "span",
      `flex:0 0 128px;font-size:${Z.tiny};font-weight:${Ye.bold};letter-spacing:.08em;text-transform:uppercase;color:${Oe.faint};`,
      e
    )
  );
  const i = j(
    "span",
    `flex:1;min-width:0;user-select:text;cursor:text;overflow-wrap:anywhere;color:${Oe.primary};` + (n ? `font-family:${Z.mono};font-size:${Z.small};` : `font-size:${Z.body};`),
    t
  );
  return i.title = t, r.appendChild(i), r;
}
function Et(e) {
  return j(
    "span",
    `padding:1px 7px;border-radius:${pt.xl};font-size:${Z.tiny};font-weight:${Ye.bold};letter-spacing:.04em;white-space:nowrap;background:${O.badgeBg};color:${O.badgeFg};`,
    e
  );
}
function An() {
  return j("div", fs);
}
function zi() {
  const e = j("div", "flex:1;position:relative;min-height:0;min-width:0;"), t = j("div", "position:absolute;inset:0;");
  return t.dataset.gufeViewer = "", e.appendChild(t), { wrap: e, container: t };
}
const hs = !1;
function ms() {
  const e = j("span", "display:inline-flex;width:14px;height:14px;");
  return e.innerHTML = '<svg viewBox="0 0 748 743" width="14" height="14" aria-hidden="true" focusable="false"><path fill="#8A2283" d="M267.99 102.211C119.99 102.211 0 222.191 0 370.211C0 452.061 36.71 525.321 94.54 574.491L327.37 108.831C308.27 104.501 288.4 102.211 267.99 102.211Z"/><path fill="#00BDAA" d="M515.66 267.67C528.75 299.25 535.99 333.89 535.99 370.21C535.99 512.26 425.47 628.47 285.73 637.6H702.44L380.64 0L63.6396 637.6H267.99V267.67H515.66Z"/><path fill="#8A2283" d="M516.81 267.67L702.08 638.2H267.99V742.06H747.62V267.66H516.81V267.67Z"/></svg>', e;
}
const gs = {
  /** The OpenFE mark, as `docs.openfree.energy` uses it. */
  openFreeEnergy: ms
}, ys = gs.openFreeEnergy;
function vs(e, t, n = {}) {
  let r = n.remember ? n.remember.get() : n.open ?? hs, i = !1;
  const o = j("div", "flex-shrink:0;"), s = j("button", `${ye.base}display:inline-flex;align-items:center;gap:${ce.md};padding:${ce.sm} ${ce.lg};`);
  s.appendChild(ys()), s.setAttribute("aria-label", n.label || "Toggle menu");
  const a = () => {
    r && !i && (i = !0, o.appendChild(t())), o.style.display = r ? "" : "none", s.style.background = r ? ye.bgActive : ye.bg, s.setAttribute("aria-expanded", String(r));
  }, l = (h) => {
    h !== r && (r = h, a(), n.remember?.set(r), n.onToggle?.(r));
  };
  return s.onclick = () => l(!r), s.onmouseover = () => {
    s.style.background = r ? ye.bgActive : ye.bgHover;
  }, s.onmouseout = () => {
    s.style.background = r ? ye.bgActive : ye.bg;
  }, e.toggleEl.style.marginRight = "2px", e.toggleEl.appendChild(s), a(), {
    panel: o,
    isOpen: () => r,
    setOpen: l
  };
}
const $s = ["debug", "gufe-debug"], bs = "debug", ws = "GUFE_VIZ_DEBUG";
function _s() {
  return !!globalThis[ws];
}
function Ss() {
  try {
    const e = globalThis.location?.search;
    if (!e) return !1;
    const t = new URLSearchParams(e);
    return $s.some((n) => t.has(n));
  } catch {
    return !1;
  }
}
function Cs(e) {
  return e?.hasAttribute?.(bs) ? !0 : _s() || Ss();
}
function ks(e) {
  try {
    return JSON.stringify(e, null, 2) ?? String(e);
  } catch (t) {
    return `<could not be stringified: ${he(t)}>`;
  }
}
function Es(e, t, n) {
  if (!Cs(n)) return;
  const r = ks(t), i = t?.type, o = `[gufe-viz] ${e}${typeof i == "string" ? ` ${i}` : ""} (${r.length} chars)`, s = typeof console.groupCollapsed == "function";
  s ? console.groupCollapsed(o) : console.log(o), console.log(r), console.log(t), s && console.groupEnd?.();
}
const xs = 150;
class xe extends HTMLElement {
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
    this.style.display = "block", this.style.width = this.style.width || "100%", this.style.height = this.style.height || "100%", this.style.background = O.appBg, this.style.color = O.textPrimary, this.style.fontFamily = "'Inter',system-ui,sans-serif", typeof ResizeObserver < "u" && !this.#n && (this.#n = new ResizeObserver(() => {
      this.#o && clearTimeout(this.#o), this.#o = setTimeout(() => this.#e?.onResize?.(), xs);
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
      `width:100%;height:100%;display:flex;flex-direction:column;overflow:hidden;background:${O.appBg};`
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
function Pe(e, t) {
  typeof customElements > "u" || customElements.get(e) || customElements.define(e, t);
}
function Ps(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Pt = { exports: {} }, Kn = {}, je = {}, Ue = {}, Hn = {}, Gn = {}, Wn = {}, zr;
function Rn() {
  return zr || (zr = 1, (function(e) {
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
        return (u = this._str) !== null && u !== void 0 ? u : this._str = this._items.reduce((g, C) => `${g}${C}`, "");
      }
      get names() {
        var u;
        return (u = this._names) !== null && u !== void 0 ? u : this._names = this._items.reduce((g, C) => (C instanceof n && (g[C.str] = (g[C.str] || 0) + 1), g), {});
      }
    }
    e._Code = r, e.nil = new r("");
    function i($, ...u) {
      const g = [$[0]];
      let C = 0;
      for (; C < u.length; )
        a(g, u[C]), g.push($[++C]);
      return new r(g);
    }
    e._ = i;
    const o = new r("+");
    function s($, ...u) {
      const g = [v($[0])];
      let C = 0;
      for (; C < u.length; )
        g.push(o), a(g, u[C]), g.push(o, v($[++C]));
      return l(g), new r(g);
    }
    e.str = s;
    function a($, u) {
      u instanceof r ? $.push(...u._items) : u instanceof n ? $.push(u) : $.push(_(u));
    }
    e.addCodeArg = a;
    function l($) {
      let u = 1;
      for (; u < $.length - 1; ) {
        if ($[u] === o) {
          const g = h($[u - 1], $[u + 1]);
          if (g !== void 0) {
            $.splice(u - 1, 3, g);
            continue;
          }
          $[u++] = "+";
        }
        u++;
      }
    }
    function h($, u) {
      if (u === '""')
        return $;
      if ($ === '""')
        return u;
      if (typeof $ == "string")
        return u instanceof n || $[$.length - 1] !== '"' ? void 0 : typeof u != "string" ? `${$.slice(0, -1)}${u}"` : u[0] === '"' ? $.slice(0, -1) + u.slice(1) : void 0;
      if (typeof u == "string" && u[0] === '"' && !($ instanceof n))
        return `"${$}${u.slice(1)}`;
    }
    function p($, u) {
      return u.emptyStr() ? $ : $.emptyStr() ? u : s`${$}${u}`;
    }
    e.strConcat = p;
    function _($) {
      return typeof $ == "number" || typeof $ == "boolean" || $ === null ? $ : v(Array.isArray($) ? $.join(",") : $);
    }
    function y($) {
      return new r(v($));
    }
    e.stringify = y;
    function v($) {
      return JSON.stringify($).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    e.safeStringify = v;
    function S($) {
      return typeof $ == "string" && e.IDENTIFIER.test($) ? new r(`.${$}`) : i`[${$}]`;
    }
    e.getProperty = S;
    function b($) {
      if (typeof $ == "string" && e.IDENTIFIER.test($))
        return new r(`${$}`);
      throw new Error(`CodeGen: invalid export name: ${$}, use explicit $id name mapping`);
    }
    e.getEsmExportName = b;
    function f($) {
      return new r($.toString());
    }
    e.regexpCode = f;
  })(Wn)), Wn;
}
var Jn = {}, Dr;
function qr() {
  return Dr || (Dr = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0;
    const t = /* @__PURE__ */ Rn();
    class n extends Error {
      constructor(h) {
        super(`CodeGen: "code" for ${h} not defined`), this.value = h.value;
      }
    }
    var r;
    (function(l) {
      l[l.Started = 0] = "Started", l[l.Completed = 1] = "Completed";
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
        var p, _;
        if (!((_ = (p = this._parent) === null || p === void 0 ? void 0 : p._prefixes) === null || _ === void 0) && _.has(h) || this._prefixes && !this._prefixes.has(h))
          throw new Error(`CodeGen: prefix "${h}" is not allowed in this scope`);
        return this._names[h] = { prefix: h, index: 0 };
      }
    }
    e.Scope = i;
    class o extends t.Name {
      constructor(h, p) {
        super(p), this.prefix = h;
      }
      setValue(h, { property: p, itemIndex: _ }) {
        this.value = h, this.scopePath = (0, t._)`.${new t.Name(p)}[${_}]`;
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
        var _;
        if (p.ref === void 0)
          throw new Error("CodeGen: ref must be passed in value");
        const y = this.toName(h), { prefix: v } = y, S = (_ = p.key) !== null && _ !== void 0 ? _ : p.ref;
        let b = this._values[v];
        if (b) {
          const u = b.get(S);
          if (u)
            return u;
        } else
          b = this._values[v] = /* @__PURE__ */ new Map();
        b.set(S, y);
        const f = this._scope[v] || (this._scope[v] = []), $ = f.length;
        return f[$] = p.ref, y.setValue(p, { property: v, itemIndex: $ }), y;
      }
      getValue(h, p) {
        const _ = this._values[h];
        if (_)
          return _.get(p);
      }
      scopeRefs(h, p = this._values) {
        return this._reduceValues(p, (_) => {
          if (_.scopePath === void 0)
            throw new Error(`CodeGen: name "${_}" has no value`);
          return (0, t._)`${h}${_.scopePath}`;
        });
      }
      scopeCode(h = this._values, p, _) {
        return this._reduceValues(h, (y) => {
          if (y.value === void 0)
            throw new Error(`CodeGen: name "${y}" has no value`);
          return y.value.code;
        }, p, _);
      }
      _reduceValues(h, p, _ = {}, y) {
        let v = t.nil;
        for (const S in h) {
          const b = h[S];
          if (!b)
            continue;
          const f = _[S] = _[S] || /* @__PURE__ */ new Map();
          b.forEach(($) => {
            if (f.has($))
              return;
            f.set($, r.Started);
            let u = p($);
            if (u) {
              const g = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
              v = (0, t._)`${v}${g} ${$} = ${u};${this.opts._n}`;
            } else if (u = y?.($))
              v = (0, t._)`${v}${u}${this.opts._n}`;
            else
              throw new n($);
            f.set($, r.Completed);
          });
        }
        return v;
      }
    }
    e.ValueScope = a;
  })(Jn)), Jn;
}
var Vr;
function te() {
  return Vr || (Vr = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
    const t = /* @__PURE__ */ Rn(), n = /* @__PURE__ */ qr();
    var r = /* @__PURE__ */ Rn();
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
    var i = /* @__PURE__ */ qr();
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
      optimizeNames(w, x) {
        return this;
      }
    }
    class s extends o {
      constructor(w, x, z) {
        super(), this.varKind = w, this.name = x, this.rhs = z;
      }
      render({ es5: w, _n: x }) {
        const z = w ? n.varKinds.var : this.varKind, W = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
        return `${z} ${this.name}${W};` + x;
      }
      optimizeNames(w, x) {
        if (w[this.name.str])
          return this.rhs && (this.rhs = G(this.rhs, w, x)), this;
      }
      get names() {
        return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
      }
    }
    class a extends o {
      constructor(w, x, z) {
        super(), this.lhs = w, this.rhs = x, this.sideEffects = z;
      }
      render({ _n: w }) {
        return `${this.lhs} = ${this.rhs};` + w;
      }
      optimizeNames(w, x) {
        if (!(this.lhs instanceof t.Name && !w[this.lhs.str] && !this.sideEffects))
          return this.rhs = G(this.rhs, w, x), this;
      }
      get names() {
        const w = this.lhs instanceof t.Name ? {} : { ...this.lhs.names };
        return T(w, this.rhs);
      }
    }
    class l extends a {
      constructor(w, x, z, W) {
        super(w, z, W), this.op = x;
      }
      render({ _n: w }) {
        return `${this.lhs} ${this.op}= ${this.rhs};` + w;
      }
    }
    class h extends o {
      constructor(w) {
        super(), this.label = w, this.names = {};
      }
      render({ _n: w }) {
        return `${this.label}:` + w;
      }
    }
    class p extends o {
      constructor(w) {
        super(), this.label = w, this.names = {};
      }
      render({ _n: w }) {
        return `break${this.label ? ` ${this.label}` : ""};` + w;
      }
    }
    class _ extends o {
      constructor(w) {
        super(), this.error = w;
      }
      render({ _n: w }) {
        return `throw ${this.error};` + w;
      }
      get names() {
        return this.error.names;
      }
    }
    class y extends o {
      constructor(w) {
        super(), this.code = w;
      }
      render({ _n: w }) {
        return `${this.code};` + w;
      }
      optimizeNodes() {
        return `${this.code}` ? this : void 0;
      }
      optimizeNames(w, x) {
        return this.code = G(this.code, w, x), this;
      }
      get names() {
        return this.code instanceof t._CodeOrName ? this.code.names : {};
      }
    }
    class v extends o {
      constructor(w = []) {
        super(), this.nodes = w;
      }
      render(w) {
        return this.nodes.reduce((x, z) => x + z.render(w), "");
      }
      optimizeNodes() {
        const { nodes: w } = this;
        let x = w.length;
        for (; x--; ) {
          const z = w[x].optimizeNodes();
          Array.isArray(z) ? w.splice(x, 1, ...z) : z ? w[x] = z : w.splice(x, 1);
        }
        return w.length > 0 ? this : void 0;
      }
      optimizeNames(w, x) {
        const { nodes: z } = this;
        let W = z.length;
        for (; W--; ) {
          const H = z[W];
          H.optimizeNames(w, x) || (Q(w, H.names), z.splice(W, 1));
        }
        return z.length > 0 ? this : void 0;
      }
      get names() {
        return this.nodes.reduce((w, x) => P(w, x.names), {});
      }
    }
    class S extends v {
      render(w) {
        return "{" + w._n + super.render(w) + "}" + w._n;
      }
    }
    class b extends v {
    }
    class f extends S {
    }
    f.kind = "else";
    class $ extends S {
      constructor(w, x) {
        super(x), this.condition = w;
      }
      render(w) {
        let x = `if(${this.condition})` + super.render(w);
        return this.else && (x += "else " + this.else.render(w)), x;
      }
      optimizeNodes() {
        super.optimizeNodes();
        const w = this.condition;
        if (w === !0)
          return this.nodes;
        let x = this.else;
        if (x) {
          const z = x.optimizeNodes();
          x = this.else = Array.isArray(z) ? new f(z) : z;
        }
        if (x)
          return w === !1 ? x instanceof $ ? x : x.nodes : this.nodes.length ? this : new $(X(w), x instanceof $ ? [x] : x.nodes);
        if (!(w === !1 || !this.nodes.length))
          return this;
      }
      optimizeNames(w, x) {
        var z;
        if (this.else = (z = this.else) === null || z === void 0 ? void 0 : z.optimizeNames(w, x), !!(super.optimizeNames(w, x) || this.else))
          return this.condition = G(this.condition, w, x), this;
      }
      get names() {
        const w = super.names;
        return T(w, this.condition), this.else && P(w, this.else.names), w;
      }
    }
    $.kind = "if";
    class u extends S {
    }
    u.kind = "for";
    class g extends u {
      constructor(w) {
        super(), this.iteration = w;
      }
      render(w) {
        return `for(${this.iteration})` + super.render(w);
      }
      optimizeNames(w, x) {
        if (super.optimizeNames(w, x))
          return this.iteration = G(this.iteration, w, x), this;
      }
      get names() {
        return P(super.names, this.iteration.names);
      }
    }
    class C extends u {
      constructor(w, x, z, W) {
        super(), this.varKind = w, this.name = x, this.from = z, this.to = W;
      }
      render(w) {
        const x = w.es5 ? n.varKinds.var : this.varKind, { name: z, from: W, to: H } = this;
        return `for(${x} ${z}=${W}; ${z}<${H}; ${z}++)` + super.render(w);
      }
      get names() {
        const w = T(super.names, this.from);
        return T(w, this.to);
      }
    }
    class c extends u {
      constructor(w, x, z, W) {
        super(), this.loop = w, this.varKind = x, this.name = z, this.iterable = W;
      }
      render(w) {
        return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(w);
      }
      optimizeNames(w, x) {
        if (super.optimizeNames(w, x))
          return this.iterable = G(this.iterable, w, x), this;
      }
      get names() {
        return P(super.names, this.iterable.names);
      }
    }
    class d extends S {
      constructor(w, x, z) {
        super(), this.name = w, this.args = x, this.async = z;
      }
      render(w) {
        return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(w);
      }
    }
    d.kind = "func";
    class m extends v {
      render(w) {
        return "return " + super.render(w);
      }
    }
    m.kind = "return";
    class k extends S {
      render(w) {
        let x = "try" + super.render(w);
        return this.catch && (x += this.catch.render(w)), this.finally && (x += this.finally.render(w)), x;
      }
      optimizeNodes() {
        var w, x;
        return super.optimizeNodes(), (w = this.catch) === null || w === void 0 || w.optimizeNodes(), (x = this.finally) === null || x === void 0 || x.optimizeNodes(), this;
      }
      optimizeNames(w, x) {
        var z, W;
        return super.optimizeNames(w, x), (z = this.catch) === null || z === void 0 || z.optimizeNames(w, x), (W = this.finally) === null || W === void 0 || W.optimizeNames(w, x), this;
      }
      get names() {
        const w = super.names;
        return this.catch && P(w, this.catch.names), this.finally && P(w, this.finally.names), w;
      }
    }
    class E extends S {
      constructor(w) {
        super(), this.error = w;
      }
      render(w) {
        return `catch(${this.error})` + super.render(w);
      }
    }
    E.kind = "catch";
    class F extends S {
      render(w) {
        return "finally" + super.render(w);
      }
    }
    F.kind = "finally";
    class I {
      constructor(w, x = {}) {
        this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ...x, _n: x.lines ? `
` : "" }, this._extScope = w, this._scope = new n.Scope({ parent: w }), this._nodes = [new b()];
      }
      toString() {
        return this._root.render(this.opts);
      }
      // returns unique name in the internal scope
      name(w) {
        return this._scope.name(w);
      }
      // reserves unique name in the external scope
      scopeName(w) {
        return this._extScope.name(w);
      }
      // reserves unique name in the external scope and assigns value to it
      scopeValue(w, x) {
        const z = this._extScope.value(w, x);
        return (this._values[z.prefix] || (this._values[z.prefix] = /* @__PURE__ */ new Set())).add(z), z;
      }
      getScopeValue(w, x) {
        return this._extScope.getValue(w, x);
      }
      // return code that assigns values in the external scope to the names that are used internally
      // (same names that were returned by gen.scopeName or gen.scopeValue)
      scopeRefs(w) {
        return this._extScope.scopeRefs(w, this._values);
      }
      scopeCode() {
        return this._extScope.scopeCode(this._values);
      }
      _def(w, x, z, W) {
        const H = this._scope.toName(x);
        return z !== void 0 && W && (this._constants[H.str] = z), this._leafNode(new s(w, H, z)), H;
      }
      // `const` declaration (`var` in es5 mode)
      const(w, x, z) {
        return this._def(n.varKinds.const, w, x, z);
      }
      // `let` declaration with optional assignment (`var` in es5 mode)
      let(w, x, z) {
        return this._def(n.varKinds.let, w, x, z);
      }
      // `var` declaration with optional assignment
      var(w, x, z) {
        return this._def(n.varKinds.var, w, x, z);
      }
      // assignment code
      assign(w, x, z) {
        return this._leafNode(new a(w, x, z));
      }
      // `+=` code
      add(w, x) {
        return this._leafNode(new l(w, e.operators.ADD, x));
      }
      // appends passed SafeExpr to code or executes Block
      code(w) {
        return typeof w == "function" ? w() : w !== t.nil && this._leafNode(new y(w)), this;
      }
      // returns code for object literal for the passed argument list of key-value pairs
      object(...w) {
        const x = ["{"];
        for (const [z, W] of w)
          x.length > 1 && x.push(","), x.push(z), (z !== W || this.opts.es5) && (x.push(":"), (0, t.addCodeArg)(x, W));
        return x.push("}"), new t._Code(x);
      }
      // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
      if(w, x, z) {
        if (this._blockNode(new $(w)), x && z)
          this.code(x).else().code(z).endIf();
        else if (x)
          this.code(x).endIf();
        else if (z)
          throw new Error('CodeGen: "else" body without "then" body');
        return this;
      }
      // `else if` clause - invalid without `if` or after `else` clauses
      elseIf(w) {
        return this._elseNode(new $(w));
      }
      // `else` clause - only valid after `if` or `else if` clauses
      else() {
        return this._elseNode(new f());
      }
      // end `if` statement (needed if gen.if was used only with condition)
      endIf() {
        return this._endBlockNode($, f);
      }
      _for(w, x) {
        return this._blockNode(w), x && this.code(x).endFor(), this;
      }
      // a generic `for` clause (or statement if `forBody` is passed)
      for(w, x) {
        return this._for(new g(w), x);
      }
      // `for` statement for a range of values
      forRange(w, x, z, W, H = this.opts.es5 ? n.varKinds.var : n.varKinds.let) {
        const ee = this._scope.toName(w);
        return this._for(new C(H, ee, x, z), () => W(ee));
      }
      // `for-of` statement (in es5 mode replace with a normal for loop)
      forOf(w, x, z, W = n.varKinds.const) {
        const H = this._scope.toName(w);
        if (this.opts.es5) {
          const ee = x instanceof t.Name ? x : this.var("_arr", x);
          return this.forRange("_i", 0, (0, t._)`${ee}.length`, (ie) => {
            this.var(H, (0, t._)`${ee}[${ie}]`), z(H);
          });
        }
        return this._for(new c("of", W, H, x), () => z(H));
      }
      // `for-in` statement.
      // With option `ownProperties` replaced with a `for-of` loop for object keys
      forIn(w, x, z, W = this.opts.es5 ? n.varKinds.var : n.varKinds.const) {
        if (this.opts.ownProperties)
          return this.forOf(w, (0, t._)`Object.keys(${x})`, z);
        const H = this._scope.toName(w);
        return this._for(new c("in", W, H, x), () => z(H));
      }
      // end `for` loop
      endFor() {
        return this._endBlockNode(u);
      }
      // `label` statement
      label(w) {
        return this._leafNode(new h(w));
      }
      // `break` statement
      break(w) {
        return this._leafNode(new p(w));
      }
      // `return` statement
      return(w) {
        const x = new m();
        if (this._blockNode(x), this.code(w), x.nodes.length !== 1)
          throw new Error('CodeGen: "return" should have one node');
        return this._endBlockNode(m);
      }
      // `try` statement
      try(w, x, z) {
        if (!x && !z)
          throw new Error('CodeGen: "try" without "catch" and "finally"');
        const W = new k();
        if (this._blockNode(W), this.code(w), x) {
          const H = this.name("e");
          this._currNode = W.catch = new E(H), x(H);
        }
        return z && (this._currNode = W.finally = new F(), this.code(z)), this._endBlockNode(E, F);
      }
      // `throw` statement
      throw(w) {
        return this._leafNode(new _(w));
      }
      // start self-balancing block
      block(w, x) {
        return this._blockStarts.push(this._nodes.length), w && this.code(w).endBlock(x), this;
      }
      // end the current self-balancing block
      endBlock(w) {
        const x = this._blockStarts.pop();
        if (x === void 0)
          throw new Error("CodeGen: not in self-balancing block");
        const z = this._nodes.length - x;
        if (z < 0 || w !== void 0 && z !== w)
          throw new Error(`CodeGen: wrong number of nodes: ${z} vs ${w} expected`);
        return this._nodes.length = x, this;
      }
      // `function` heading (or definition if funcBody is passed)
      func(w, x = t.nil, z, W) {
        return this._blockNode(new d(w, x, z)), W && this.code(W).endFunc(), this;
      }
      // end function definition
      endFunc() {
        return this._endBlockNode(d);
      }
      optimize(w = 1) {
        for (; w-- > 0; )
          this._root.optimizeNodes(), this._root.optimizeNames(this._root.names, this._constants);
      }
      _leafNode(w) {
        return this._currNode.nodes.push(w), this;
      }
      _blockNode(w) {
        this._currNode.nodes.push(w), this._nodes.push(w);
      }
      _endBlockNode(w, x) {
        const z = this._currNode;
        if (z instanceof w || x && z instanceof x)
          return this._nodes.pop(), this;
        throw new Error(`CodeGen: not in block "${x ? `${w.kind}/${x.kind}` : w.kind}"`);
      }
      _elseNode(w) {
        const x = this._currNode;
        if (!(x instanceof $))
          throw new Error('CodeGen: "else" without "if"');
        return this._currNode = x.else = w, this;
      }
      get _root() {
        return this._nodes[0];
      }
      get _currNode() {
        const w = this._nodes;
        return w[w.length - 1];
      }
      set _currNode(w) {
        const x = this._nodes;
        x[x.length - 1] = w;
      }
    }
    e.CodeGen = I;
    function P(R, w) {
      for (const x in w)
        R[x] = (R[x] || 0) + (w[x] || 0);
      return R;
    }
    function T(R, w) {
      return w instanceof t._CodeOrName ? P(R, w.names) : R;
    }
    function G(R, w, x) {
      if (R instanceof t.Name)
        return z(R);
      if (!W(R))
        return R;
      return new t._Code(R._items.reduce((H, ee) => (ee instanceof t.Name && (ee = z(ee)), ee instanceof t._Code ? H.push(...ee._items) : H.push(ee), H), []));
      function z(H) {
        const ee = x[H.str];
        return ee === void 0 || w[H.str] !== 1 ? H : (delete w[H.str], ee);
      }
      function W(H) {
        return H instanceof t._Code && H._items.some((ee) => ee instanceof t.Name && w[ee.str] === 1 && x[ee.str] !== void 0);
      }
    }
    function Q(R, w) {
      for (const x in w)
        R[x] = (R[x] || 0) - (w[x] || 0);
    }
    function X(R) {
      return typeof R == "boolean" || typeof R == "number" || R === null ? !R : (0, t._)`!${D(R)}`;
    }
    e.not = X;
    const U = A(e.operators.AND);
    function B(...R) {
      return R.reduce(U);
    }
    e.and = B;
    const J = A(e.operators.OR);
    function q(...R) {
      return R.reduce(J);
    }
    e.or = q;
    function A(R) {
      return (w, x) => w === t.nil ? x : x === t.nil ? w : (0, t._)`${D(w)} ${R} ${D(x)}`;
    }
    function D(R) {
      return R instanceof t.Name ? R : (0, t._)`(${R})`;
    }
  })(Gn)), Gn;
}
var ne = {}, Lr;
function oe() {
  if (Lr) return ne;
  Lr = 1, Object.defineProperty(ne, "__esModule", { value: !0 }), ne.checkStrictMode = ne.getErrorPath = ne.Type = ne.useFunc = ne.setEvaluated = ne.evaluatedPropsToName = ne.mergeEvaluated = ne.eachItem = ne.unescapeJsonPointer = ne.escapeJsonPointer = ne.escapeFragment = ne.unescapeFragment = ne.schemaRefOrVal = ne.schemaHasRulesButRef = ne.schemaHasRules = ne.checkUnknownRules = ne.alwaysValidSchema = ne.toHash = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ Rn();
  function n(c) {
    const d = {};
    for (const m of c)
      d[m] = !0;
    return d;
  }
  ne.toHash = n;
  function r(c, d) {
    return typeof d == "boolean" ? d : Object.keys(d).length === 0 ? !0 : (i(c, d), !o(d, c.self.RULES.all));
  }
  ne.alwaysValidSchema = r;
  function i(c, d = c.schema) {
    const { opts: m, self: k } = c;
    if (!m.strictSchema || typeof d == "boolean")
      return;
    const E = k.RULES.keywords;
    for (const F in d)
      E[F] || C(c, `unknown keyword: "${F}"`);
  }
  ne.checkUnknownRules = i;
  function o(c, d) {
    if (typeof c == "boolean")
      return !c;
    for (const m in c)
      if (d[m])
        return !0;
    return !1;
  }
  ne.schemaHasRules = o;
  function s(c, d) {
    if (typeof c == "boolean")
      return !c;
    for (const m in c)
      if (m !== "$ref" && d.all[m])
        return !0;
    return !1;
  }
  ne.schemaHasRulesButRef = s;
  function a({ topSchemaRef: c, schemaPath: d }, m, k, E) {
    if (!E) {
      if (typeof m == "number" || typeof m == "boolean")
        return m;
      if (typeof m == "string")
        return (0, e._)`${m}`;
    }
    return (0, e._)`${c}${d}${(0, e.getProperty)(k)}`;
  }
  ne.schemaRefOrVal = a;
  function l(c) {
    return _(decodeURIComponent(c));
  }
  ne.unescapeFragment = l;
  function h(c) {
    return encodeURIComponent(p(c));
  }
  ne.escapeFragment = h;
  function p(c) {
    return typeof c == "number" ? `${c}` : c.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  ne.escapeJsonPointer = p;
  function _(c) {
    return c.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  ne.unescapeJsonPointer = _;
  function y(c, d) {
    if (Array.isArray(c))
      for (const m of c)
        d(m);
    else
      d(c);
  }
  ne.eachItem = y;
  function v({ mergeNames: c, mergeToName: d, mergeValues: m, resultToName: k }) {
    return (E, F, I, P) => {
      const T = I === void 0 ? F : I instanceof e.Name ? (F instanceof e.Name ? c(E, F, I) : d(E, F, I), I) : F instanceof e.Name ? (d(E, I, F), F) : m(F, I);
      return P === e.Name && !(T instanceof e.Name) ? k(E, T) : T;
    };
  }
  ne.mergeEvaluated = {
    props: v({
      mergeNames: (c, d, m) => c.if((0, e._)`${m} !== true && ${d} !== undefined`, () => {
        c.if((0, e._)`${d} === true`, () => c.assign(m, !0), () => c.assign(m, (0, e._)`${m} || {}`).code((0, e._)`Object.assign(${m}, ${d})`));
      }),
      mergeToName: (c, d, m) => c.if((0, e._)`${m} !== true`, () => {
        d === !0 ? c.assign(m, !0) : (c.assign(m, (0, e._)`${m} || {}`), b(c, m, d));
      }),
      mergeValues: (c, d) => c === !0 ? !0 : { ...c, ...d },
      resultToName: S
    }),
    items: v({
      mergeNames: (c, d, m) => c.if((0, e._)`${m} !== true && ${d} !== undefined`, () => c.assign(m, (0, e._)`${d} === true ? true : ${m} > ${d} ? ${m} : ${d}`)),
      mergeToName: (c, d, m) => c.if((0, e._)`${m} !== true`, () => c.assign(m, d === !0 ? !0 : (0, e._)`${m} > ${d} ? ${m} : ${d}`)),
      mergeValues: (c, d) => c === !0 ? !0 : Math.max(c, d),
      resultToName: (c, d) => c.var("items", d)
    })
  };
  function S(c, d) {
    if (d === !0)
      return c.var("props", !0);
    const m = c.var("props", (0, e._)`{}`);
    return d !== void 0 && b(c, m, d), m;
  }
  ne.evaluatedPropsToName = S;
  function b(c, d, m) {
    Object.keys(m).forEach((k) => c.assign((0, e._)`${d}${(0, e.getProperty)(k)}`, !0));
  }
  ne.setEvaluated = b;
  const f = {};
  function $(c, d) {
    return c.scopeValue("func", {
      ref: d,
      code: f[d.code] || (f[d.code] = new t._Code(d.code))
    });
  }
  ne.useFunc = $;
  var u;
  (function(c) {
    c[c.Num = 0] = "Num", c[c.Str = 1] = "Str";
  })(u || (ne.Type = u = {}));
  function g(c, d, m) {
    if (c instanceof e.Name) {
      const k = d === u.Num;
      return m ? k ? (0, e._)`"[" + ${c} + "]"` : (0, e._)`"['" + ${c} + "']"` : k ? (0, e._)`"/" + ${c}` : (0, e._)`"/" + ${c}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return m ? (0, e.getProperty)(c).toString() : "/" + p(c);
  }
  ne.getErrorPath = g;
  function C(c, d, m = c.opts.strictSchema) {
    if (m) {
      if (d = `strict mode: ${d}`, m === !0)
        throw new Error(d);
      c.self.logger.warn(d);
    }
  }
  return ne.checkStrictMode = C, ne;
}
var At = {}, Br;
function Ae() {
  if (Br) return At;
  Br = 1, Object.defineProperty(At, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = {
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
  return At.default = t, At;
}
var Ur;
function Mn() {
  return Ur || (Ur = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
    const t = /* @__PURE__ */ te(), n = /* @__PURE__ */ oe(), r = /* @__PURE__ */ Ae();
    e.keywordError = {
      message: ({ keyword: f }) => (0, t.str)`must pass "${f}" keyword validation`
    }, e.keyword$DataError = {
      message: ({ keyword: f, schemaType: $ }) => $ ? (0, t.str)`"${f}" keyword must be ${$} ($data)` : (0, t.str)`"${f}" keyword is invalid ($data)`
    };
    function i(f, $ = e.keywordError, u, g) {
      const { it: C } = f, { gen: c, compositeRule: d, allErrors: m } = C, k = _(f, $, u);
      g ?? (d || m) ? l(c, k) : h(C, (0, t._)`[${k}]`);
    }
    e.reportError = i;
    function o(f, $ = e.keywordError, u) {
      const { it: g } = f, { gen: C, compositeRule: c, allErrors: d } = g, m = _(f, $, u);
      l(C, m), c || d || h(g, r.default.vErrors);
    }
    e.reportExtraError = o;
    function s(f, $) {
      f.assign(r.default.errors, $), f.if((0, t._)`${r.default.vErrors} !== null`, () => f.if($, () => f.assign((0, t._)`${r.default.vErrors}.length`, $), () => f.assign(r.default.vErrors, null)));
    }
    e.resetErrorsCount = s;
    function a({ gen: f, keyword: $, schemaValue: u, data: g, errsCount: C, it: c }) {
      if (C === void 0)
        throw new Error("ajv implementation error");
      const d = f.name("err");
      f.forRange("i", C, r.default.errors, (m) => {
        f.const(d, (0, t._)`${r.default.vErrors}[${m}]`), f.if((0, t._)`${d}.instancePath === undefined`, () => f.assign((0, t._)`${d}.instancePath`, (0, t.strConcat)(r.default.instancePath, c.errorPath))), f.assign((0, t._)`${d}.schemaPath`, (0, t.str)`${c.errSchemaPath}/${$}`), c.opts.verbose && (f.assign((0, t._)`${d}.schema`, u), f.assign((0, t._)`${d}.data`, g));
      });
    }
    e.extendErrors = a;
    function l(f, $) {
      const u = f.const("err", $);
      f.if((0, t._)`${r.default.vErrors} === null`, () => f.assign(r.default.vErrors, (0, t._)`[${u}]`), (0, t._)`${r.default.vErrors}.push(${u})`), f.code((0, t._)`${r.default.errors}++`);
    }
    function h(f, $) {
      const { gen: u, validateName: g, schemaEnv: C } = f;
      C.$async ? u.throw((0, t._)`new ${f.ValidationError}(${$})`) : (u.assign((0, t._)`${g}.errors`, $), u.return(!1));
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
    function _(f, $, u) {
      const { createErrors: g } = f.it;
      return g === !1 ? (0, t._)`{}` : y(f, $, u);
    }
    function y(f, $, u = {}) {
      const { gen: g, it: C } = f, c = [
        v(C, u),
        S(f, u)
      ];
      return b(f, $, c), g.object(...c);
    }
    function v({ errorPath: f }, { instancePath: $ }) {
      const u = $ ? (0, t.str)`${f}${(0, n.getErrorPath)($, n.Type.Str)}` : f;
      return [r.default.instancePath, (0, t.strConcat)(r.default.instancePath, u)];
    }
    function S({ keyword: f, it: { errSchemaPath: $ } }, { schemaPath: u, parentSchema: g }) {
      let C = g ? $ : (0, t.str)`${$}/${f}`;
      return u && (C = (0, t.str)`${C}${(0, n.getErrorPath)(u, n.Type.Str)}`), [p.schemaPath, C];
    }
    function b(f, { params: $, message: u }, g) {
      const { keyword: C, data: c, schemaValue: d, it: m } = f, { opts: k, propertyName: E, topSchemaRef: F, schemaPath: I } = m;
      g.push([p.keyword, C], [p.params, typeof $ == "function" ? $(f) : $ || (0, t._)`{}`]), k.messages && g.push([p.message, typeof u == "function" ? u(f) : u]), k.verbose && g.push([p.schema, d], [p.parentSchema, (0, t._)`${F}${I}`], [r.default.data, c]), E && g.push([p.propertyName, E]);
    }
  })(Hn)), Hn;
}
var Kr;
function As() {
  if (Kr) return Ue;
  Kr = 1, Object.defineProperty(Ue, "__esModule", { value: !0 }), Ue.boolOrEmptySchema = Ue.topBoolOrEmptySchema = void 0;
  const e = /* @__PURE__ */ Mn(), t = /* @__PURE__ */ te(), n = /* @__PURE__ */ Ae(), r = {
    message: "boolean schema is false"
  };
  function i(a) {
    const { gen: l, schema: h, validateName: p } = a;
    h === !1 ? s(a, !1) : typeof h == "object" && h.$async === !0 ? l.return(n.default.data) : (l.assign((0, t._)`${p}.errors`, null), l.return(!0));
  }
  Ue.topBoolOrEmptySchema = i;
  function o(a, l) {
    const { gen: h, schema: p } = a;
    p === !1 ? (h.var(l, !1), s(a)) : h.var(l, !0);
  }
  Ue.boolOrEmptySchema = o;
  function s(a, l) {
    const { gen: h, data: p } = a, _ = {
      gen: h,
      keyword: "false schema",
      data: p,
      schema: !1,
      schemaCode: !1,
      schemaValue: !1,
      params: {},
      it: a
    };
    (0, e.reportError)(_, r, void 0, l);
  }
  return Ue;
}
var pe = {}, Ke = {}, Hr;
function Di() {
  if (Hr) return Ke;
  Hr = 1, Object.defineProperty(Ke, "__esModule", { value: !0 }), Ke.getRules = Ke.isJSONType = void 0;
  const e = ["string", "number", "integer", "boolean", "null", "object", "array"], t = new Set(e);
  function n(i) {
    return typeof i == "string" && t.has(i);
  }
  Ke.isJSONType = n;
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
  return Ke.getRules = r, Ke;
}
var Ie = {}, Gr;
function qi() {
  if (Gr) return Ie;
  Gr = 1, Object.defineProperty(Ie, "__esModule", { value: !0 }), Ie.shouldUseRule = Ie.shouldUseGroup = Ie.schemaHasRulesForType = void 0;
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
var Wr;
function Nn() {
  if (Wr) return pe;
  Wr = 1, Object.defineProperty(pe, "__esModule", { value: !0 }), pe.reportTypeError = pe.checkDataTypes = pe.checkDataType = pe.coerceAndCheckDataType = pe.getJSONTypes = pe.getSchemaTypes = pe.DataType = void 0;
  const e = /* @__PURE__ */ Di(), t = /* @__PURE__ */ qi(), n = /* @__PURE__ */ Mn(), r = /* @__PURE__ */ te(), i = /* @__PURE__ */ oe();
  var o;
  (function(u) {
    u[u.Correct = 0] = "Correct", u[u.Wrong = 1] = "Wrong";
  })(o || (pe.DataType = o = {}));
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
  pe.getSchemaTypes = s;
  function a(u) {
    const g = Array.isArray(u) ? u : u ? [u] : [];
    if (g.every(e.isJSONType))
      return g;
    throw new Error("type must be JSONType or JSONType[]: " + g.join(","));
  }
  pe.getJSONTypes = a;
  function l(u, g) {
    const { gen: C, data: c, opts: d } = u, m = p(g, d.coerceTypes), k = g.length > 0 && !(m.length === 0 && g.length === 1 && (0, t.schemaHasRulesForType)(u, g[0]));
    if (k) {
      const E = S(g, c, d.strictNumbers, o.Wrong);
      C.if(E, () => {
        m.length ? _(u, g, m) : f(u);
      });
    }
    return k;
  }
  pe.coerceAndCheckDataType = l;
  const h = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
  function p(u, g) {
    return g ? u.filter((C) => h.has(C) || g === "array" && C === "array") : [];
  }
  function _(u, g, C) {
    const { gen: c, data: d, opts: m } = u, k = c.let("dataType", (0, r._)`typeof ${d}`), E = c.let("coerced", (0, r._)`undefined`);
    m.coerceTypes === "array" && c.if((0, r._)`${k} == 'object' && Array.isArray(${d}) && ${d}.length == 1`, () => c.assign(d, (0, r._)`${d}[0]`).assign(k, (0, r._)`typeof ${d}`).if(S(g, d, m.strictNumbers), () => c.assign(E, d))), c.if((0, r._)`${E} !== undefined`);
    for (const I of C)
      (h.has(I) || I === "array" && m.coerceTypes === "array") && F(I);
    c.else(), f(u), c.endIf(), c.if((0, r._)`${E} !== undefined`, () => {
      c.assign(d, E), y(u, E);
    });
    function F(I) {
      switch (I) {
        case "string":
          c.elseIf((0, r._)`${k} == "number" || ${k} == "boolean"`).assign(E, (0, r._)`"" + ${d}`).elseIf((0, r._)`${d} === null`).assign(E, (0, r._)`""`);
          return;
        case "number":
          c.elseIf((0, r._)`${k} == "boolean" || ${d} === null
              || (${k} == "string" && ${d} && ${d} == +${d})`).assign(E, (0, r._)`+${d}`);
          return;
        case "integer":
          c.elseIf((0, r._)`${k} === "boolean" || ${d} === null
              || (${k} === "string" && ${d} && ${d} == +${d} && !(${d} % 1))`).assign(E, (0, r._)`+${d}`);
          return;
        case "boolean":
          c.elseIf((0, r._)`${d} === "false" || ${d} === 0 || ${d} === null`).assign(E, !1).elseIf((0, r._)`${d} === "true" || ${d} === 1`).assign(E, !0);
          return;
        case "null":
          c.elseIf((0, r._)`${d} === "" || ${d} === 0 || ${d} === false`), c.assign(E, null);
          return;
        case "array":
          c.elseIf((0, r._)`${k} === "string" || ${k} === "number"
              || ${k} === "boolean" || ${d} === null`).assign(E, (0, r._)`[${d}]`);
      }
    }
  }
  function y({ gen: u, parentData: g, parentDataProperty: C }, c) {
    u.if((0, r._)`${g} !== undefined`, () => u.assign((0, r._)`${g}[${C}]`, c));
  }
  function v(u, g, C, c = o.Correct) {
    const d = c === o.Correct ? r.operators.EQ : r.operators.NEQ;
    let m;
    switch (u) {
      case "null":
        return (0, r._)`${g} ${d} null`;
      case "array":
        m = (0, r._)`Array.isArray(${g})`;
        break;
      case "object":
        m = (0, r._)`${g} && typeof ${g} == "object" && !Array.isArray(${g})`;
        break;
      case "integer":
        m = k((0, r._)`!(${g} % 1) && !isNaN(${g})`);
        break;
      case "number":
        m = k();
        break;
      default:
        return (0, r._)`typeof ${g} ${d} ${u}`;
    }
    return c === o.Correct ? m : (0, r.not)(m);
    function k(E = r.nil) {
      return (0, r.and)((0, r._)`typeof ${g} == "number"`, E, C ? (0, r._)`isFinite(${g})` : r.nil);
    }
  }
  pe.checkDataType = v;
  function S(u, g, C, c) {
    if (u.length === 1)
      return v(u[0], g, C, c);
    let d;
    const m = (0, i.toHash)(u);
    if (m.array && m.object) {
      const k = (0, r._)`typeof ${g} != "object"`;
      d = m.null ? k : (0, r._)`!${g} || ${k}`, delete m.null, delete m.array, delete m.object;
    } else
      d = r.nil;
    m.number && delete m.integer;
    for (const k in m)
      d = (0, r.and)(d, v(k, g, C, c));
    return d;
  }
  pe.checkDataTypes = S;
  const b = {
    message: ({ schema: u }) => `must be ${u}`,
    params: ({ schema: u, schemaValue: g }) => typeof u == "string" ? (0, r._)`{type: ${u}}` : (0, r._)`{type: ${g}}`
  };
  function f(u) {
    const g = $(u);
    (0, n.reportError)(g, b);
  }
  pe.reportTypeError = f;
  function $(u) {
    const { gen: g, data: C, schema: c } = u, d = (0, i.schemaRefOrVal)(u, c, "type");
    return {
      gen: g,
      keyword: "type",
      data: C,
      schema: c.type,
      schemaCode: d,
      schemaValue: d,
      parentSchema: c,
      params: {},
      it: u
    };
  }
  return pe;
}
var gt = {}, Jr;
function Rs() {
  if (Jr) return gt;
  Jr = 1, Object.defineProperty(gt, "__esModule", { value: !0 }), gt.assignDefaults = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ oe();
  function n(i, o) {
    const { properties: s, items: a } = i.schema;
    if (o === "object" && s)
      for (const l in s)
        r(i, l, s[l].default);
    else o === "array" && Array.isArray(a) && a.forEach((l, h) => r(i, h, l.default));
  }
  gt.assignDefaults = n;
  function r(i, o, s) {
    const { gen: a, compositeRule: l, data: h, opts: p } = i;
    if (s === void 0)
      return;
    const _ = (0, e._)`${h}${(0, e.getProperty)(o)}`;
    if (l) {
      (0, t.checkStrictMode)(i, `default is ignored for: ${_}`);
      return;
    }
    let y = (0, e._)`${_} === undefined`;
    p.useDefaults === "empty" && (y = (0, e._)`${y} || ${_} === null || ${_} === ""`), a.if(y, (0, e._)`${_} = ${(0, e.stringify)(s)}`);
  }
  return gt;
}
var Ce = {}, ae = {}, Yr;
function Re() {
  if (Yr) return ae;
  Yr = 1, Object.defineProperty(ae, "__esModule", { value: !0 }), ae.validateUnion = ae.validateArray = ae.usePattern = ae.callValidateCode = ae.schemaProperties = ae.allSchemaProperties = ae.noPropertyInData = ae.propertyInData = ae.isOwnProperty = ae.hasPropFunc = ae.reportMissingProp = ae.checkMissingProp = ae.checkReportMissingProp = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ oe(), n = /* @__PURE__ */ Ae(), r = /* @__PURE__ */ oe();
  function i(u, g) {
    const { gen: C, data: c, it: d } = u;
    C.if(p(C, c, g, d.opts.ownProperties), () => {
      u.setParams({ missingProperty: (0, e._)`${g}` }, !0), u.error();
    });
  }
  ae.checkReportMissingProp = i;
  function o({ gen: u, data: g, it: { opts: C } }, c, d) {
    return (0, e.or)(...c.map((m) => (0, e.and)(p(u, g, m, C.ownProperties), (0, e._)`${d} = ${m}`)));
  }
  ae.checkMissingProp = o;
  function s(u, g) {
    u.setParams({ missingProperty: g }, !0), u.error();
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
  function l(u, g, C) {
    return (0, e._)`${a(u)}.call(${g}, ${C})`;
  }
  ae.isOwnProperty = l;
  function h(u, g, C, c) {
    const d = (0, e._)`${g}${(0, e.getProperty)(C)} !== undefined`;
    return c ? (0, e._)`${d} && ${l(u, g, C)}` : d;
  }
  ae.propertyInData = h;
  function p(u, g, C, c) {
    const d = (0, e._)`${g}${(0, e.getProperty)(C)} === undefined`;
    return c ? (0, e.or)(d, (0, e.not)(l(u, g, C))) : d;
  }
  ae.noPropertyInData = p;
  function _(u) {
    return u ? Object.keys(u).filter((g) => g !== "__proto__") : [];
  }
  ae.allSchemaProperties = _;
  function y(u, g) {
    return _(g).filter((C) => !(0, t.alwaysValidSchema)(u, g[C]));
  }
  ae.schemaProperties = y;
  function v({ schemaCode: u, data: g, it: { gen: C, topSchemaRef: c, schemaPath: d, errorPath: m }, it: k }, E, F, I) {
    const P = I ? (0, e._)`${u}, ${g}, ${c}${d}` : g, T = [
      [n.default.instancePath, (0, e.strConcat)(n.default.instancePath, m)],
      [n.default.parentData, k.parentData],
      [n.default.parentDataProperty, k.parentDataProperty],
      [n.default.rootData, n.default.rootData]
    ];
    k.opts.dynamicRef && T.push([n.default.dynamicAnchors, n.default.dynamicAnchors]);
    const G = (0, e._)`${P}, ${C.object(...T)}`;
    return F !== e.nil ? (0, e._)`${E}.call(${F}, ${G})` : (0, e._)`${E}(${G})`;
  }
  ae.callValidateCode = v;
  const S = (0, e._)`new RegExp`;
  function b({ gen: u, it: { opts: g } }, C) {
    const c = g.unicodeRegExp ? "u" : "", { regExp: d } = g.code, m = d(C, c);
    return u.scopeValue("pattern", {
      key: m.toString(),
      ref: m,
      code: (0, e._)`${d.code === "new RegExp" ? S : (0, r.useFunc)(u, d)}(${C}, ${c})`
    });
  }
  ae.usePattern = b;
  function f(u) {
    const { gen: g, data: C, keyword: c, it: d } = u, m = g.name("valid");
    if (d.allErrors) {
      const E = g.let("valid", !0);
      return k(() => g.assign(E, !1)), E;
    }
    return g.var(m, !0), k(() => g.break()), m;
    function k(E) {
      const F = g.const("len", (0, e._)`${C}.length`);
      g.forRange("i", 0, F, (I) => {
        u.subschema({
          keyword: c,
          dataProp: I,
          dataPropType: t.Type.Num
        }, m), g.if((0, e.not)(m), E);
      });
    }
  }
  ae.validateArray = f;
  function $(u) {
    const { gen: g, schema: C, keyword: c, it: d } = u;
    if (!Array.isArray(C))
      throw new Error("ajv implementation error");
    if (C.some((F) => (0, t.alwaysValidSchema)(d, F)) && !d.opts.unevaluated)
      return;
    const k = g.let("valid", !1), E = g.name("_valid");
    g.block(() => C.forEach((F, I) => {
      const P = u.subschema({
        keyword: c,
        schemaProp: I,
        compositeRule: !0
      }, E);
      g.assign(k, (0, e._)`${k} || ${E}`), u.mergeValidEvaluated(P, E) || g.if((0, e.not)(k));
    })), u.result(k, () => u.reset(), () => u.error(!0));
  }
  return ae.validateUnion = $, ae;
}
var Xr;
function Ns() {
  if (Xr) return Ce;
  Xr = 1, Object.defineProperty(Ce, "__esModule", { value: !0 }), Ce.validateKeywordUsage = Ce.validSchemaType = Ce.funcKeywordCode = Ce.macroKeywordCode = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ Ae(), n = /* @__PURE__ */ Re(), r = /* @__PURE__ */ Mn();
  function i(y, v) {
    const { gen: S, keyword: b, schema: f, parentSchema: $, it: u } = y, g = v.macro.call(u.self, f, $, u), C = h(S, b, g);
    u.opts.validateSchema !== !1 && u.self.validateSchema(g, !0);
    const c = S.name("valid");
    y.subschema({
      schema: g,
      schemaPath: e.nil,
      errSchemaPath: `${u.errSchemaPath}/${b}`,
      topSchemaRef: C,
      compositeRule: !0
    }, c), y.pass(c, () => y.error(!0));
  }
  Ce.macroKeywordCode = i;
  function o(y, v) {
    var S;
    const { gen: b, keyword: f, schema: $, parentSchema: u, $data: g, it: C } = y;
    l(C, v);
    const c = !g && v.compile ? v.compile.call(C.self, $, u, C) : v.validate, d = h(b, f, c), m = b.let("valid");
    y.block$data(m, k), y.ok((S = v.valid) !== null && S !== void 0 ? S : m);
    function k() {
      if (v.errors === !1)
        I(), v.modifying && s(y), P(() => y.error());
      else {
        const T = v.async ? E() : F();
        v.modifying && s(y), P(() => a(y, T));
      }
    }
    function E() {
      const T = b.let("ruleErrs", null);
      return b.try(() => I((0, e._)`await `), (G) => b.assign(m, !1).if((0, e._)`${G} instanceof ${C.ValidationError}`, () => b.assign(T, (0, e._)`${G}.errors`), () => b.throw(G))), T;
    }
    function F() {
      const T = (0, e._)`${d}.errors`;
      return b.assign(T, null), I(e.nil), T;
    }
    function I(T = v.async ? (0, e._)`await ` : e.nil) {
      const G = C.opts.passContext ? t.default.this : t.default.self, Q = !("compile" in v && !g || v.schema === !1);
      b.assign(m, (0, e._)`${T}${(0, n.callValidateCode)(y, d, G, Q)}`, v.modifying);
    }
    function P(T) {
      var G;
      b.if((0, e.not)((G = v.valid) !== null && G !== void 0 ? G : m), T);
    }
  }
  Ce.funcKeywordCode = o;
  function s(y) {
    const { gen: v, data: S, it: b } = y;
    v.if(b.parentData, () => v.assign(S, (0, e._)`${b.parentData}[${b.parentDataProperty}]`));
  }
  function a(y, v) {
    const { gen: S } = y;
    S.if((0, e._)`Array.isArray(${v})`, () => {
      S.assign(t.default.vErrors, (0, e._)`${t.default.vErrors} === null ? ${v} : ${t.default.vErrors}.concat(${v})`).assign(t.default.errors, (0, e._)`${t.default.vErrors}.length`), (0, r.extendErrors)(y);
    }, () => y.error());
  }
  function l({ schemaEnv: y }, v) {
    if (v.async && !y.$async)
      throw new Error("async keyword in sync schema");
  }
  function h(y, v, S) {
    if (S === void 0)
      throw new Error(`keyword "${v}" failed to compile`);
    return y.scopeValue("keyword", typeof S == "function" ? { ref: S } : { ref: S, code: (0, e.stringify)(S) });
  }
  function p(y, v, S = !1) {
    return !v.length || v.some((b) => b === "array" ? Array.isArray(y) : b === "object" ? y && typeof y == "object" && !Array.isArray(y) : typeof y == b || S && typeof y > "u");
  }
  Ce.validSchemaType = p;
  function _({ schema: y, opts: v, self: S, errSchemaPath: b }, f, $) {
    if (Array.isArray(f.keyword) ? !f.keyword.includes($) : f.keyword !== $)
      throw new Error("ajv implementation error");
    const u = f.dependencies;
    if (u?.some((g) => !Object.prototype.hasOwnProperty.call(y, g)))
      throw new Error(`parent schema must have dependencies of ${$}: ${u.join(",")}`);
    if (f.validateSchema && !f.validateSchema(y[$])) {
      const C = `keyword "${$}" value is invalid at path "${b}": ` + S.errorsText(f.validateSchema.errors);
      if (v.validateSchema === "log")
        S.logger.error(C);
      else
        throw new Error(C);
    }
  }
  return Ce.validateKeywordUsage = _, Ce;
}
var ze = {}, Zr;
function Fs() {
  if (Zr) return ze;
  Zr = 1, Object.defineProperty(ze, "__esModule", { value: !0 }), ze.extendSubschemaMode = ze.extendSubschemaData = ze.getSubschema = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ oe();
  function n(o, { keyword: s, schemaProp: a, schema: l, schemaPath: h, errSchemaPath: p, topSchemaRef: _ }) {
    if (s !== void 0 && l !== void 0)
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
    if (l !== void 0) {
      if (h === void 0 || p === void 0 || _ === void 0)
        throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
      return {
        schema: l,
        schemaPath: h,
        topSchemaRef: _,
        errSchemaPath: p
      };
    }
    throw new Error('either "keyword" or "schema" must be passed');
  }
  ze.getSubschema = n;
  function r(o, s, { dataProp: a, dataPropType: l, data: h, dataTypes: p, propertyName: _ }) {
    if (h !== void 0 && a !== void 0)
      throw new Error('both "data" and "dataProp" passed, only one allowed');
    const { gen: y } = s;
    if (a !== void 0) {
      const { errorPath: S, dataPathArr: b, opts: f } = s, $ = y.let("data", (0, e._)`${s.data}${(0, e.getProperty)(a)}`, !0);
      v($), o.errorPath = (0, e.str)`${S}${(0, t.getErrorPath)(a, l, f.jsPropertySyntax)}`, o.parentDataProperty = (0, e._)`${a}`, o.dataPathArr = [...b, o.parentDataProperty];
    }
    if (h !== void 0) {
      const S = h instanceof e.Name ? h : y.let("data", h, !0);
      v(S), _ !== void 0 && (o.propertyName = _);
    }
    p && (o.dataTypes = p);
    function v(S) {
      o.data = S, o.dataLevel = s.dataLevel + 1, o.dataTypes = [], s.definedProperties = /* @__PURE__ */ new Set(), o.parentData = s.data, o.dataNames = [...s.dataNames, S];
    }
  }
  ze.extendSubschemaData = r;
  function i(o, { jtdDiscriminator: s, jtdMetadata: a, compositeRule: l, createErrors: h, allErrors: p }) {
    l !== void 0 && (o.compositeRule = l), h !== void 0 && (o.createErrors = h), p !== void 0 && (o.allErrors = p), o.jtdDiscriminator = s, o.jtdMetadata = a;
  }
  return ze.extendSubschemaMode = i, ze;
}
var me = {}, Yn, Qr;
function Vi() {
  return Qr || (Qr = 1, Yn = function e(t, n) {
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
  }), Yn;
}
var Xn = { exports: {} }, eo;
function Os() {
  if (eo) return Xn.exports;
  eo = 1;
  var e = Xn.exports = function(r, i, o) {
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
  function t(r, i, o, s, a, l, h, p, _, y) {
    if (s && typeof s == "object" && !Array.isArray(s)) {
      i(s, a, l, h, p, _, y);
      for (var v in s) {
        var S = s[v];
        if (Array.isArray(S)) {
          if (v in e.arrayKeywords)
            for (var b = 0; b < S.length; b++)
              t(r, i, o, S[b], a + "/" + v + "/" + b, l, a, v, s, b);
        } else if (v in e.propsKeywords) {
          if (S && typeof S == "object")
            for (var f in S)
              t(r, i, o, S[f], a + "/" + v + "/" + n(f), l, a, v, s, f);
        } else (v in e.keywords || r.allKeys && !(v in e.skipKeywords)) && t(r, i, o, S, a + "/" + v, l, a, v, s);
      }
      o(s, a, l, h, p, _, y);
    }
  }
  function n(r) {
    return r.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  return Xn.exports;
}
var to;
function Tn() {
  if (to) return me;
  to = 1, Object.defineProperty(me, "__esModule", { value: !0 }), me.getSchemaRefs = me.resolveUrl = me.normalizeId = me._getFullPath = me.getFullPath = me.inlineRef = void 0;
  const e = /* @__PURE__ */ oe(), t = Vi(), n = Os(), r = /* @__PURE__ */ new Set([
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
  function i(b, f = !0) {
    return typeof b == "boolean" ? !0 : f === !0 ? !s(b) : f ? a(b) <= f : !1;
  }
  me.inlineRef = i;
  const o = /* @__PURE__ */ new Set([
    "$ref",
    "$recursiveRef",
    "$recursiveAnchor",
    "$dynamicRef",
    "$dynamicAnchor"
  ]);
  function s(b) {
    for (const f in b) {
      if (o.has(f))
        return !0;
      const $ = b[f];
      if (Array.isArray($) && $.some(s) || typeof $ == "object" && s($))
        return !0;
    }
    return !1;
  }
  function a(b) {
    let f = 0;
    for (const $ in b) {
      if ($ === "$ref")
        return 1 / 0;
      if (f++, !r.has($) && (typeof b[$] == "object" && (0, e.eachItem)(b[$], (u) => f += a(u)), f === 1 / 0))
        return 1 / 0;
    }
    return f;
  }
  function l(b, f = "", $) {
    $ !== !1 && (f = _(f));
    const u = b.parse(f);
    return h(b, u);
  }
  me.getFullPath = l;
  function h(b, f) {
    return b.serialize(f).split("#")[0] + "#";
  }
  me._getFullPath = h;
  const p = /#\/?$/;
  function _(b) {
    return b ? b.replace(p, "") : "";
  }
  me.normalizeId = _;
  function y(b, f, $) {
    return $ = _($), b.resolve(f, $);
  }
  me.resolveUrl = y;
  const v = /^[a-z_][-a-z0-9._]*$/i;
  function S(b, f) {
    if (typeof b == "boolean")
      return {};
    const { schemaId: $, uriResolver: u } = this.opts, g = _(b[$] || f), C = { "": g }, c = l(u, g, !1), d = {}, m = /* @__PURE__ */ new Set();
    return n(b, { allKeys: !0 }, (F, I, P, T) => {
      if (T === void 0)
        return;
      const G = c + I;
      let Q = C[T];
      typeof F[$] == "string" && (Q = X.call(this, F[$])), U.call(this, F.$anchor), U.call(this, F.$dynamicAnchor), C[I] = Q;
      function X(B) {
        const J = this.opts.uriResolver.resolve;
        if (B = _(Q ? J(Q, B) : B), m.has(B))
          throw E(B);
        m.add(B);
        let q = this.refs[B];
        return typeof q == "string" && (q = this.refs[q]), typeof q == "object" ? k(F, q.schema, B) : B !== _(G) && (B[0] === "#" ? (k(F, d[B], B), d[B] = F) : this.refs[B] = G), B;
      }
      function U(B) {
        if (typeof B == "string") {
          if (!v.test(B))
            throw new Error(`invalid anchor "${B}"`);
          X.call(this, `#${B}`);
        }
      }
    }), d;
    function k(F, I, P) {
      if (I !== void 0 && !t(F, I))
        throw E(P);
    }
    function E(F) {
      return new Error(`reference "${F}" resolves to more than one schema`);
    }
  }
  return me.getSchemaRefs = S, me;
}
var no;
function jn() {
  if (no) return je;
  no = 1, Object.defineProperty(je, "__esModule", { value: !0 }), je.getData = je.KeywordCxt = je.validateFunctionCode = void 0;
  const e = /* @__PURE__ */ As(), t = /* @__PURE__ */ Nn(), n = /* @__PURE__ */ qi(), r = /* @__PURE__ */ Nn(), i = /* @__PURE__ */ Rs(), o = /* @__PURE__ */ Ns(), s = /* @__PURE__ */ Fs(), a = /* @__PURE__ */ te(), l = /* @__PURE__ */ Ae(), h = /* @__PURE__ */ Tn(), p = /* @__PURE__ */ oe(), _ = /* @__PURE__ */ Mn();
  function y(N) {
    if (c(N) && (m(N), C(N))) {
      f(N);
      return;
    }
    v(N, () => (0, e.topBoolOrEmptySchema)(N));
  }
  je.validateFunctionCode = y;
  function v({ gen: N, validateName: M, schema: L, schemaEnv: K, opts: Y }, re) {
    Y.code.es5 ? N.func(M, (0, a._)`${l.default.data}, ${l.default.valCxt}`, K.$async, () => {
      N.code((0, a._)`"use strict"; ${u(L, Y)}`), b(N, Y), N.code(re);
    }) : N.func(M, (0, a._)`${l.default.data}, ${S(Y)}`, K.$async, () => N.code(u(L, Y)).code(re));
  }
  function S(N) {
    return (0, a._)`{${l.default.instancePath}="", ${l.default.parentData}, ${l.default.parentDataProperty}, ${l.default.rootData}=${l.default.data}${N.dynamicRef ? (0, a._)`, ${l.default.dynamicAnchors}={}` : a.nil}}={}`;
  }
  function b(N, M) {
    N.if(l.default.valCxt, () => {
      N.var(l.default.instancePath, (0, a._)`${l.default.valCxt}.${l.default.instancePath}`), N.var(l.default.parentData, (0, a._)`${l.default.valCxt}.${l.default.parentData}`), N.var(l.default.parentDataProperty, (0, a._)`${l.default.valCxt}.${l.default.parentDataProperty}`), N.var(l.default.rootData, (0, a._)`${l.default.valCxt}.${l.default.rootData}`), M.dynamicRef && N.var(l.default.dynamicAnchors, (0, a._)`${l.default.valCxt}.${l.default.dynamicAnchors}`);
    }, () => {
      N.var(l.default.instancePath, (0, a._)`""`), N.var(l.default.parentData, (0, a._)`undefined`), N.var(l.default.parentDataProperty, (0, a._)`undefined`), N.var(l.default.rootData, l.default.data), M.dynamicRef && N.var(l.default.dynamicAnchors, (0, a._)`{}`);
    });
  }
  function f(N) {
    const { schema: M, opts: L, gen: K } = N;
    v(N, () => {
      L.$comment && M.$comment && T(N), F(N), K.let(l.default.vErrors, null), K.let(l.default.errors, 0), L.unevaluated && $(N), k(N), G(N);
    });
  }
  function $(N) {
    const { gen: M, validateName: L } = N;
    N.evaluated = M.const("evaluated", (0, a._)`${L}.evaluated`), M.if((0, a._)`${N.evaluated}.dynamicProps`, () => M.assign((0, a._)`${N.evaluated}.props`, (0, a._)`undefined`)), M.if((0, a._)`${N.evaluated}.dynamicItems`, () => M.assign((0, a._)`${N.evaluated}.items`, (0, a._)`undefined`));
  }
  function u(N, M) {
    const L = typeof N == "object" && N[M.schemaId];
    return L && (M.code.source || M.code.process) ? (0, a._)`/*# sourceURL=${L} */` : a.nil;
  }
  function g(N, M) {
    if (c(N) && (m(N), C(N))) {
      d(N, M);
      return;
    }
    (0, e.boolOrEmptySchema)(N, M);
  }
  function C({ schema: N, self: M }) {
    if (typeof N == "boolean")
      return !N;
    for (const L in N)
      if (M.RULES.all[L])
        return !0;
    return !1;
  }
  function c(N) {
    return typeof N.schema != "boolean";
  }
  function d(N, M) {
    const { schema: L, gen: K, opts: Y } = N;
    Y.$comment && L.$comment && T(N), I(N), P(N);
    const re = K.const("_errs", l.default.errors);
    k(N, re), K.var(M, (0, a._)`${re} === ${l.default.errors}`);
  }
  function m(N) {
    (0, p.checkUnknownRules)(N), E(N);
  }
  function k(N, M) {
    if (N.opts.jtd)
      return X(N, [], !1, M);
    const L = (0, t.getSchemaTypes)(N.schema), K = (0, t.coerceAndCheckDataType)(N, L);
    X(N, L, !K, M);
  }
  function E(N) {
    const { schema: M, errSchemaPath: L, opts: K, self: Y } = N;
    M.$ref && K.ignoreKeywordsWithRef && (0, p.schemaHasRulesButRef)(M, Y.RULES) && Y.logger.warn(`$ref: keywords ignored in schema at path "${L}"`);
  }
  function F(N) {
    const { schema: M, opts: L } = N;
    M.default !== void 0 && L.useDefaults && L.strictSchema && (0, p.checkStrictMode)(N, "default is ignored in the schema root");
  }
  function I(N) {
    const M = N.schema[N.opts.schemaId];
    M && (N.baseId = (0, h.resolveUrl)(N.opts.uriResolver, N.baseId, M));
  }
  function P(N) {
    if (N.schema.$async && !N.schemaEnv.$async)
      throw new Error("async schema in sync schema");
  }
  function T({ gen: N, schemaEnv: M, schema: L, errSchemaPath: K, opts: Y }) {
    const re = L.$comment;
    if (Y.$comment === !0)
      N.code((0, a._)`${l.default.self}.logger.log(${re})`);
    else if (typeof Y.$comment == "function") {
      const ue = (0, a.str)`${K}/$comment`, Se = N.scopeValue("root", { ref: M.root });
      N.code((0, a._)`${l.default.self}.opts.$comment(${re}, ${ue}, ${Se}.schema)`);
    }
  }
  function G(N) {
    const { gen: M, schemaEnv: L, validateName: K, ValidationError: Y, opts: re } = N;
    L.$async ? M.if((0, a._)`${l.default.errors} === 0`, () => M.return(l.default.data), () => M.throw((0, a._)`new ${Y}(${l.default.vErrors})`)) : (M.assign((0, a._)`${K}.errors`, l.default.vErrors), re.unevaluated && Q(N), M.return((0, a._)`${l.default.errors} === 0`));
  }
  function Q({ gen: N, evaluated: M, props: L, items: K }) {
    L instanceof a.Name && N.assign((0, a._)`${M}.props`, L), K instanceof a.Name && N.assign((0, a._)`${M}.items`, K);
  }
  function X(N, M, L, K) {
    const { gen: Y, schema: re, data: ue, allErrors: Se, opts: ve, self: $e } = N, { RULES: fe } = $e;
    if (re.$ref && (ve.ignoreKeywordsWithRef || !(0, p.schemaHasRulesButRef)(re, fe))) {
      Y.block(() => W(N, "$ref", fe.all.$ref.definition));
      return;
    }
    ve.jtd || B(N, M), Y.block(() => {
      for (const we of fe.rules)
        Xe(we);
      Xe(fe.post);
    });
    function Xe(we) {
      (0, n.shouldUseGroup)(re, we) && (we.type ? (Y.if((0, r.checkDataType)(we.type, ue, ve.strictNumbers)), U(N, we), M.length === 1 && M[0] === we.type && L && (Y.else(), (0, r.reportTypeError)(N)), Y.endIf()) : U(N, we), Se || Y.if((0, a._)`${l.default.errors} === ${K || 0}`));
    }
  }
  function U(N, M) {
    const { gen: L, schema: K, opts: { useDefaults: Y } } = N;
    Y && (0, i.assignDefaults)(N, M.type), L.block(() => {
      for (const re of M.rules)
        (0, n.shouldUseRule)(K, re) && W(N, re.keyword, re.definition, M.type);
    });
  }
  function B(N, M) {
    N.schemaEnv.meta || !N.opts.strictTypes || (J(N, M), N.opts.allowUnionTypes || q(N, M), A(N, N.dataTypes));
  }
  function J(N, M) {
    if (M.length) {
      if (!N.dataTypes.length) {
        N.dataTypes = M;
        return;
      }
      M.forEach((L) => {
        R(N.dataTypes, L) || x(N, `type "${L}" not allowed by context "${N.dataTypes.join(",")}"`);
      }), w(N, M);
    }
  }
  function q(N, M) {
    M.length > 1 && !(M.length === 2 && M.includes("null")) && x(N, "use allowUnionTypes to allow union type keyword");
  }
  function A(N, M) {
    const L = N.self.RULES.all;
    for (const K in L) {
      const Y = L[K];
      if (typeof Y == "object" && (0, n.shouldUseRule)(N.schema, Y)) {
        const { type: re } = Y.definition;
        re.length && !re.some((ue) => D(M, ue)) && x(N, `missing type "${re.join(",")}" for keyword "${K}"`);
      }
    }
  }
  function D(N, M) {
    return N.includes(M) || M === "number" && N.includes("integer");
  }
  function R(N, M) {
    return N.includes(M) || M === "integer" && N.includes("number");
  }
  function w(N, M) {
    const L = [];
    for (const K of N.dataTypes)
      R(M, K) ? L.push(K) : M.includes("integer") && K === "number" && L.push("integer");
    N.dataTypes = L;
  }
  function x(N, M) {
    const L = N.schemaEnv.baseId + N.errSchemaPath;
    M += ` at "${L}" (strictTypes)`, (0, p.checkStrictMode)(N, M, N.opts.strictTypes);
  }
  class z {
    constructor(M, L, K) {
      if ((0, o.validateKeywordUsage)(M, L, K), this.gen = M.gen, this.allErrors = M.allErrors, this.keyword = K, this.data = M.data, this.schema = M.schema[K], this.$data = L.$data && M.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, p.schemaRefOrVal)(M, this.schema, K, this.$data), this.schemaType = L.schemaType, this.parentSchema = M.schema, this.params = {}, this.it = M, this.def = L, this.$data)
        this.schemaCode = M.gen.const("vSchema", ie(this.$data, M));
      else if (this.schemaCode = this.schemaValue, !(0, o.validSchemaType)(this.schema, L.schemaType, L.allowUndefined))
        throw new Error(`${K} value must be ${JSON.stringify(L.schemaType)}`);
      ("code" in L ? L.trackErrors : L.errors !== !1) && (this.errsCount = M.gen.const("_errs", l.default.errors));
    }
    result(M, L, K) {
      this.failResult((0, a.not)(M), L, K);
    }
    failResult(M, L, K) {
      this.gen.if(M), K ? K() : this.error(), L ? (this.gen.else(), L(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    pass(M, L) {
      this.failResult((0, a.not)(M), void 0, L);
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
      const { schemaCode: L } = this;
      this.fail((0, a._)`${L} !== undefined && (${(0, a.or)(this.invalid$data(), M)})`);
    }
    error(M, L, K) {
      if (L) {
        this.setParams(L), this._error(M, K), this.setParams({});
        return;
      }
      this._error(M, K);
    }
    _error(M, L) {
      (M ? _.reportExtraError : _.reportError)(this, this.def.error, L);
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
    setParams(M, L) {
      L ? Object.assign(this.params, M) : this.params = M;
    }
    block$data(M, L, K = a.nil) {
      this.gen.block(() => {
        this.check$data(M, K), L();
      });
    }
    check$data(M = a.nil, L = a.nil) {
      if (!this.$data)
        return;
      const { gen: K, schemaCode: Y, schemaType: re, def: ue } = this;
      K.if((0, a.or)((0, a._)`${Y} === undefined`, L)), M !== a.nil && K.assign(M, !0), (re.length || ue.validateSchema) && (K.elseIf(this.invalid$data()), this.$dataError(), M !== a.nil && K.assign(M, !1)), K.else();
    }
    invalid$data() {
      const { gen: M, schemaCode: L, schemaType: K, def: Y, it: re } = this;
      return (0, a.or)(ue(), Se());
      function ue() {
        if (K.length) {
          if (!(L instanceof a.Name))
            throw new Error("ajv implementation error");
          const ve = Array.isArray(K) ? K : [K];
          return (0, a._)`${(0, r.checkDataTypes)(ve, L, re.opts.strictNumbers, r.DataType.Wrong)}`;
        }
        return a.nil;
      }
      function Se() {
        if (Y.validateSchema) {
          const ve = M.scopeValue("validate$data", { ref: Y.validateSchema });
          return (0, a._)`!${ve}(${L})`;
        }
        return a.nil;
      }
    }
    subschema(M, L) {
      const K = (0, s.getSubschema)(this.it, M);
      (0, s.extendSubschemaData)(K, this.it, M), (0, s.extendSubschemaMode)(K, M);
      const Y = { ...this.it, ...K, items: void 0, props: void 0 };
      return g(Y, L), Y;
    }
    mergeEvaluated(M, L) {
      const { it: K, gen: Y } = this;
      K.opts.unevaluated && (K.props !== !0 && M.props !== void 0 && (K.props = p.mergeEvaluated.props(Y, M.props, K.props, L)), K.items !== !0 && M.items !== void 0 && (K.items = p.mergeEvaluated.items(Y, M.items, K.items, L)));
    }
    mergeValidEvaluated(M, L) {
      const { it: K, gen: Y } = this;
      if (K.opts.unevaluated && (K.props !== !0 || K.items !== !0))
        return Y.if(L, () => this.mergeEvaluated(M, a.Name)), !0;
    }
  }
  je.KeywordCxt = z;
  function W(N, M, L, K) {
    const Y = new z(N, L, M);
    "code" in L ? L.code(Y, K) : Y.$data && L.validate ? (0, o.funcKeywordCode)(Y, L) : "macro" in L ? (0, o.macroKeywordCode)(Y, L) : (L.compile || L.validate) && (0, o.funcKeywordCode)(Y, L);
  }
  const H = /^\/(?:[^~]|~0|~1)*$/, ee = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function ie(N, { dataLevel: M, dataNames: L, dataPathArr: K }) {
    let Y, re;
    if (N === "")
      return l.default.rootData;
    if (N[0] === "/") {
      if (!H.test(N))
        throw new Error(`Invalid JSON-pointer: ${N}`);
      Y = N, re = l.default.rootData;
    } else {
      const $e = ee.exec(N);
      if (!$e)
        throw new Error(`Invalid JSON-pointer: ${N}`);
      const fe = +$e[1];
      if (Y = $e[2], Y === "#") {
        if (fe >= M)
          throw new Error(ve("property/index", fe));
        return K[M - fe];
      }
      if (fe > M)
        throw new Error(ve("data", fe));
      if (re = L[M - fe], !Y)
        return re;
    }
    let ue = re;
    const Se = Y.split("/");
    for (const $e of Se)
      $e && (re = (0, a._)`${re}${(0, a.getProperty)((0, p.unescapeJsonPointer)($e))}`, ue = (0, a._)`${ue} && ${re}`);
    return ue;
    function ve($e, fe) {
      return `Cannot access ${$e} ${fe} levels up, current level is ${M}`;
    }
  }
  return je.getData = ie, je;
}
var Rt = {}, ro;
function yr() {
  if (ro) return Rt;
  ro = 1, Object.defineProperty(Rt, "__esModule", { value: !0 });
  class e extends Error {
    constructor(n) {
      super("validation failed"), this.errors = n, this.ajv = this.validation = !0;
    }
  }
  return Rt.default = e, Rt;
}
var Nt = {}, oo;
function In() {
  if (oo) return Nt;
  oo = 1, Object.defineProperty(Nt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Tn();
  class t extends Error {
    constructor(r, i, o, s) {
      super(s || `can't resolve reference ${o} from id ${i}`), this.missingRef = (0, e.resolveUrl)(r, i, o), this.missingSchema = (0, e.normalizeId)((0, e.getFullPath)(r, this.missingRef));
    }
  }
  return Nt.default = t, Nt;
}
var be = {}, io;
function zn() {
  if (io) return be;
  io = 1, Object.defineProperty(be, "__esModule", { value: !0 }), be.resolveSchema = be.getCompilingSchema = be.resolveRef = be.compileSchema = be.SchemaEnv = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ yr(), n = /* @__PURE__ */ Ae(), r = /* @__PURE__ */ Tn(), i = /* @__PURE__ */ oe(), o = /* @__PURE__ */ jn();
  class s {
    constructor($) {
      var u;
      this.refs = {}, this.dynamicAnchors = {};
      let g;
      typeof $.schema == "object" && (g = $.schema), this.schema = $.schema, this.schemaId = $.schemaId, this.root = $.root || this, this.baseId = (u = $.baseId) !== null && u !== void 0 ? u : (0, r.normalizeId)(g?.[$.schemaId || "$id"]), this.schemaPath = $.schemaPath, this.localRefs = $.localRefs, this.meta = $.meta, this.$async = g?.$async, this.refs = {};
    }
  }
  be.SchemaEnv = s;
  function a(f) {
    const $ = p.call(this, f);
    if ($)
      return $;
    const u = (0, r.getFullPath)(this.opts.uriResolver, f.root.baseId), { es5: g, lines: C } = this.opts.code, { ownProperties: c } = this.opts, d = new e.CodeGen(this.scope, { es5: g, lines: C, ownProperties: c });
    let m;
    f.$async && (m = d.scopeValue("Error", {
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
    let F;
    try {
      this._compilations.add(f), (0, o.validateFunctionCode)(E), d.optimize(this.opts.code.optimize);
      const I = d.toString();
      F = `${d.scopeRefs(n.default.scope)}return ${I}`, this.opts.code.process && (F = this.opts.code.process(F, f));
      const T = new Function(`${n.default.self}`, `${n.default.scope}`, F)(this, this.scope.get());
      if (this.scope.value(k, { ref: T }), T.errors = null, T.schema = f.schema, T.schemaEnv = f, f.$async && (T.$async = !0), this.opts.code.source === !0 && (T.source = { validateName: k, validateCode: I, scopeValues: d._values }), this.opts.unevaluated) {
        const { props: G, items: Q } = E;
        T.evaluated = {
          props: G instanceof e.Name ? void 0 : G,
          items: Q instanceof e.Name ? void 0 : Q,
          dynamicProps: G instanceof e.Name,
          dynamicItems: Q instanceof e.Name
        }, T.source && (T.source.evaluated = (0, e.stringify)(T.evaluated));
      }
      return f.validate = T, f;
    } catch (I) {
      throw delete f.validate, delete f.validateName, F && this.logger.error("Error compiling schema, function code:", F), I;
    } finally {
      this._compilations.delete(f);
    }
  }
  be.compileSchema = a;
  function l(f, $, u) {
    var g;
    u = (0, r.resolveUrl)(this.opts.uriResolver, $, u);
    const C = f.refs[u];
    if (C)
      return C;
    let c = y.call(this, f, u);
    if (c === void 0) {
      const d = (g = f.localRefs) === null || g === void 0 ? void 0 : g[u], { schemaId: m } = this.opts;
      d && (c = new s({ schema: d, schemaId: m, root: f, baseId: $ }));
    }
    if (c !== void 0)
      return f.refs[u] = h.call(this, c);
  }
  be.resolveRef = l;
  function h(f) {
    return (0, r.inlineRef)(f.schema, this.opts.inlineRefs) ? f.schema : f.validate ? f : a.call(this, f);
  }
  function p(f) {
    for (const $ of this._compilations)
      if (_($, f))
        return $;
  }
  be.getCompilingSchema = p;
  function _(f, $) {
    return f.schema === $.schema && f.root === $.root && f.baseId === $.baseId;
  }
  function y(f, $) {
    let u;
    for (; typeof (u = this.refs[$]) == "string"; )
      $ = u;
    return u || this.schemas[$] || v.call(this, f, $);
  }
  function v(f, $) {
    const u = this.opts.uriResolver.parse($), g = (0, r._getFullPath)(this.opts.uriResolver, u);
    let C = (0, r.getFullPath)(this.opts.uriResolver, f.baseId, void 0);
    if (Object.keys(f.schema).length > 0 && g === C)
      return b.call(this, u, f);
    const c = (0, r.normalizeId)(g), d = this.refs[c] || this.schemas[c];
    if (typeof d == "string") {
      const m = v.call(this, f, d);
      return typeof m?.schema != "object" ? void 0 : b.call(this, u, m);
    }
    if (typeof d?.schema == "object") {
      if (d.validate || a.call(this, d), c === (0, r.normalizeId)($)) {
        const { schema: m } = d, { schemaId: k } = this.opts, E = m[k];
        return E && (C = (0, r.resolveUrl)(this.opts.uriResolver, C, E)), new s({ schema: m, schemaId: k, root: f, baseId: C });
      }
      return b.call(this, u, d);
    }
  }
  be.resolveSchema = v;
  const S = /* @__PURE__ */ new Set([
    "properties",
    "patternProperties",
    "enum",
    "dependencies",
    "definitions"
  ]);
  function b(f, { baseId: $, schema: u, root: g }) {
    var C;
    if (((C = f.fragment) === null || C === void 0 ? void 0 : C[0]) !== "/")
      return;
    for (const m of f.fragment.slice(1).split("/")) {
      if (typeof u == "boolean")
        return;
      const k = u[(0, i.unescapeFragment)(m)];
      if (k === void 0)
        return;
      u = k;
      const E = typeof u == "object" && u[this.opts.schemaId];
      !S.has(m) && E && ($ = (0, r.resolveUrl)(this.opts.uriResolver, $, E));
    }
    let c;
    if (typeof u != "boolean" && u.$ref && !(0, i.schemaHasRulesButRef)(u, this.RULES)) {
      const m = (0, r.resolveUrl)(this.opts.uriResolver, $, u.$ref);
      c = v.call(this, g, m);
    }
    const { schemaId: d } = this.opts;
    if (c = c || new s({ schema: u, schemaId: d, root: g, baseId: $ }), c.schema !== c.root.schema)
      return c;
  }
  return be;
}
const Ms = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", Ts = "Meta-schema for $data reference (JSON AnySchema extension proposal)", js = "object", Is = ["$data"], zs = { $data: { type: "string", anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] } }, Ds = !1, qs = {
  $id: Ms,
  description: Ts,
  type: js,
  required: Is,
  properties: zs,
  additionalProperties: Ds
};
var Ft = {}, yt = { exports: {} }, Zn, so;
function Li() {
  if (so) return Zn;
  so = 1;
  const e = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu), t = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u), n = RegExp.prototype.test.bind(/^[\da-f]{2}$/iu), r = RegExp.prototype.test.bind(/^[\da-z\-._~]$/iu), i = RegExp.prototype.test.bind(/^[\da-z\-._~!$&'()*+,;=:@/]$/iu);
  function o(c) {
    let d = "", m = 0, k = 0;
    for (k = 0; k < c.length; k++)
      if (m = c[k].charCodeAt(0), m !== 48) {
        if (!(m >= 48 && m <= 57 || m >= 65 && m <= 70 || m >= 97 && m <= 102))
          return "";
        d += c[k];
        break;
      }
    for (k += 1; k < c.length; k++) {
      if (m = c[k].charCodeAt(0), !(m >= 48 && m <= 57 || m >= 65 && m <= 70 || m >= 97 && m <= 102))
        return "";
      d += c[k];
    }
    return d;
  }
  const s = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
  function a(c) {
    return c.length = 0, !0;
  }
  function l(c, d, m) {
    if (c.length) {
      const k = o(c);
      if (k !== "")
        d.push(k);
      else
        return m.error = !0, !1;
      c.length = 0;
    }
    return !0;
  }
  function h(c) {
    let d = 0;
    const m = { error: !1, address: "", zone: "" }, k = [], E = [];
    let F = !1, I = !1, P = l;
    for (let T = 0; T < c.length; T++) {
      const G = c[T];
      if (!(G === "[" || G === "]"))
        if (G === ":") {
          if (F === !0 && (I = !0), !P(E, k, m))
            break;
          if (++d > 7) {
            m.error = !0;
            break;
          }
          T > 0 && c[T - 1] === ":" && (F = !0), k.push(":");
          continue;
        } else if (G === "%") {
          if (!P(E, k, m))
            break;
          P = a;
        } else {
          E.push(G);
          continue;
        }
    }
    return E.length && (P === a ? m.zone = E.join("") : I ? k.push(E.join("")) : k.push(o(E))), m.address = k.join(""), m;
  }
  function p(c) {
    if (_(c, ":") < 2)
      return { host: c, isIPV6: !1 };
    const d = h(c);
    if (d.error)
      return { host: c, isIPV6: !1 };
    {
      let m = d.address, k = d.address;
      return d.zone && (m += "%" + d.zone, k += "%25" + d.zone), { host: m, isIPV6: !0, escapedHost: k };
    }
  }
  function _(c, d) {
    let m = 0;
    for (let k = 0; k < c.length; k++)
      c[k] === d && m++;
    return m;
  }
  function y(c) {
    let d = c;
    const m = [];
    let k = -1, E = 0;
    for (; E = d.length; ) {
      if (E === 1) {
        if (d === ".")
          break;
        if (d === "/") {
          m.push("/");
          break;
        } else {
          m.push(d);
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
          m.push("/");
          break;
        }
      } else if (E === 3 && d === "/..") {
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
      if ((k = d.indexOf("/", 1)) === -1) {
        m.push(d);
        break;
      } else
        m.push(d.slice(0, k)), d = d.slice(k);
    }
    return m.join("");
  }
  const v = { "@": "%40", "/": "%2F", "?": "%3F", "#": "%23", ":": "%3A" }, S = /[@/?#:]/g, b = /[@/?#]/g;
  function f(c, d) {
    const m = d ? b : S;
    return m.lastIndex = 0, c.replace(m, (k) => v[k]);
  }
  function $(c, d = !1) {
    if (c.indexOf("%") === -1)
      return c;
    let m = "";
    for (let k = 0; k < c.length; k++) {
      if (c[k] === "%" && k + 2 < c.length) {
        const E = c.slice(k + 1, k + 3);
        if (n(E)) {
          const F = E.toUpperCase(), I = String.fromCharCode(parseInt(F, 16));
          d && r(I) ? m += I : m += "%" + F, k += 2;
          continue;
        }
      }
      m += c[k];
    }
    return m;
  }
  function u(c) {
    let d = "";
    for (let m = 0; m < c.length; m++) {
      if (c[m] === "%" && m + 2 < c.length) {
        const k = c.slice(m + 1, m + 3);
        if (n(k)) {
          const E = k.toUpperCase(), F = String.fromCharCode(parseInt(E, 16));
          F !== "." && r(F) ? d += F : d += "%" + E, m += 2;
          continue;
        }
      }
      i(c[m]) ? d += c[m] : d += escape(c[m]);
    }
    return d;
  }
  function g(c) {
    let d = "";
    for (let m = 0; m < c.length; m++) {
      if (c[m] === "%" && m + 2 < c.length) {
        const k = c.slice(m + 1, m + 3);
        if (n(k)) {
          d += "%" + k.toUpperCase(), m += 2;
          continue;
        }
      }
      d += escape(c[m]);
    }
    return d;
  }
  function C(c) {
    const d = [];
    if (c.userinfo !== void 0 && (d.push(c.userinfo), d.push("@")), c.host !== void 0) {
      let m = unescape(c.host);
      if (!t(m)) {
        const k = p(m);
        k.isIPV6 === !0 ? m = `[${k.escapedHost}]` : m = f(m, !1);
      }
      d.push(m);
    }
    return (typeof c.port == "number" || typeof c.port == "string") && (d.push(":"), d.push(String(c.port))), d.length ? d.join("") : void 0;
  }
  return Zn = {
    nonSimpleDomain: s,
    recomposeAuthority: C,
    reescapeHostDelimiters: f,
    normalizePercentEncoding: $,
    normalizePathEncoding: u,
    escapePreservingEscapes: g,
    removeDotSegments: y,
    isIPv4: t,
    isUUID: e,
    normalizeIPv6: p,
    stringArrayToHexStripped: o
  }, Zn;
}
var Qn, ao;
function Vs() {
  if (ao) return Qn;
  ao = 1;
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
  function r(c) {
    return n.indexOf(
      /** @type {*} */
      c
    ) !== -1;
  }
  function i(c) {
    return c.secure === !0 ? !0 : c.secure === !1 ? !1 : c.scheme ? c.scheme.length === 3 && (c.scheme[0] === "w" || c.scheme[0] === "W") && (c.scheme[1] === "s" || c.scheme[1] === "S") && (c.scheme[2] === "s" || c.scheme[2] === "S") : !1;
  }
  function o(c) {
    return c.host || (c.error = c.error || "HTTP URIs must have a host."), c;
  }
  function s(c) {
    const d = String(c.scheme).toLowerCase() === "https";
    return (c.port === (d ? 443 : 80) || c.port === "") && (c.port = void 0), c.path || (c.path = "/"), c;
  }
  function a(c) {
    return c.secure = i(c), c.resourceName = (c.path || "/") + (c.query ? "?" + c.query : ""), c.path = void 0, c.query = void 0, c;
  }
  function l(c) {
    if ((c.port === (i(c) ? 443 : 80) || c.port === "") && (c.port = void 0), typeof c.secure == "boolean" && (c.scheme = c.secure ? "wss" : "ws", c.secure = void 0), c.resourceName) {
      const [d, m] = c.resourceName.split("?");
      c.path = d && d !== "/" ? d : void 0, c.query = m, c.resourceName = void 0;
    }
    return c.fragment = void 0, c;
  }
  function h(c, d) {
    if (!c.path)
      return c.error = "URN can not be parsed", c;
    const m = c.path.match(t);
    if (m) {
      const k = d.scheme || c.scheme || "urn";
      c.nid = m[1].toLowerCase(), c.nss = m[2];
      const E = `${k}:${d.nid || c.nid}`, F = C(E);
      c.path = void 0, F && (c = F.parse(c, d));
    } else
      c.error = c.error || "URN can not be parsed.";
    return c;
  }
  function p(c, d) {
    if (c.nid === void 0)
      throw new Error("URN without nid cannot be serialized");
    const m = d.scheme || c.scheme || "urn", k = c.nid.toLowerCase(), E = `${m}:${d.nid || k}`, F = C(E);
    F && (c = F.serialize(c, d));
    const I = c, P = c.nss;
    return I.path = `${k || d.nid}:${P}`, d.skipEscape = !0, I;
  }
  function _(c, d) {
    const m = c;
    return m.uuid = m.nss, m.nss = void 0, !d.tolerant && (!m.uuid || !e(m.uuid)) && (m.error = m.error || "UUID is not valid."), m;
  }
  function y(c) {
    const d = c;
    return d.nss = (c.uuid || "").toLowerCase(), d;
  }
  const v = (
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
      domainHost: v.domainHost,
      parse: o,
      serialize: s
    }
  ), b = (
    /** @type {SchemeHandler} */
    {
      scheme: "ws",
      domainHost: !0,
      parse: a,
      serialize: l
    }
  ), f = (
    /** @type {SchemeHandler} */
    {
      scheme: "wss",
      domainHost: b.domainHost,
      parse: b.parse,
      serialize: b.serialize
    }
  ), g = (
    /** @type {Record<SchemeName, SchemeHandler>} */
    {
      http: v,
      https: S,
      ws: b,
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
          parse: _,
          serialize: y,
          skipNormalize: !0
        }
      )
    }
  );
  Object.setPrototypeOf(g, null);
  function C(c) {
    return c && (g[
      /** @type {SchemeName} */
      c
    ] || g[
      /** @type {SchemeName} */
      c.toLowerCase()
    ]) || void 0;
  }
  return Qn = {
    wsIsSecure: i,
    SCHEMES: g,
    isValidSchemeName: r,
    getSchemeHandler: C
  }, Qn;
}
var co;
function Ls() {
  if (co) return yt.exports;
  co = 1;
  const { normalizeIPv6: e, removeDotSegments: t, recomposeAuthority: n, normalizePercentEncoding: r, normalizePathEncoding: i, escapePreservingEscapes: o, reescapeHostDelimiters: s, isIPv4: a, nonSimpleDomain: l } = Li(), { SCHEMES: h, getSchemeHandler: p } = Vs();
  function _(E, F) {
    return typeof E == "string" ? E = /** @type {T} */
    c(E, F) : typeof E == "object" && (E = /** @type {T} */
    C(b(E, F), F)), E;
  }
  function y(E, F, I) {
    const P = I ? Object.assign({ scheme: "null" }, I) : { scheme: "null" }, T = v(C(E, P), C(F, P), P, !0);
    return P.skipEscape = !0, b(T, P);
  }
  function v(E, F, I, P) {
    const T = {};
    return P || (E = C(b(E, I), I), F = C(b(F, I), I)), I = I || {}, !I.tolerant && F.scheme ? (T.scheme = F.scheme, T.userinfo = F.userinfo, T.host = F.host, T.port = F.port, T.path = t(F.path || ""), T.query = F.query) : (F.userinfo !== void 0 || F.host !== void 0 || F.port !== void 0 ? (T.userinfo = F.userinfo, T.host = F.host, T.port = F.port, T.path = t(F.path || ""), T.query = F.query) : (F.path ? (F.path[0] === "/" ? T.path = t(F.path) : ((E.userinfo !== void 0 || E.host !== void 0 || E.port !== void 0) && !E.path ? T.path = "/" + F.path : E.path ? T.path = E.path.slice(0, E.path.lastIndexOf("/") + 1) + F.path : T.path = F.path, T.path = t(T.path)), T.query = F.query) : (T.path = E.path, F.query !== void 0 ? T.query = F.query : T.query = E.query), T.userinfo = E.userinfo, T.host = E.host, T.port = E.port), T.scheme = E.scheme), T.fragment = F.fragment, T;
  }
  function S(E, F, I) {
    const P = m(E, I), T = m(F, I);
    return P !== void 0 && T !== void 0 && P.toLowerCase() === T.toLowerCase();
  }
  function b(E, F) {
    const I = {
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
    }, P = Object.assign({}, F), T = [], G = p(P.scheme || I.scheme);
    G && G.serialize && G.serialize(I, P), I.path !== void 0 && (P.skipEscape ? I.path = r(I.path) : (I.path = o(I.path), I.scheme !== void 0 && (I.path = I.path.split("%3A").join(":")))), P.reference !== "suffix" && I.scheme && T.push(I.scheme, ":");
    const Q = n(I);
    if (Q !== void 0 && (P.reference !== "suffix" && T.push("//"), T.push(Q), I.path && I.path[0] !== "/" && T.push("/")), I.path !== void 0) {
      let X = I.path;
      !P.absolutePath && (!G || !G.absolutePath) && (X = t(X)), Q === void 0 && X[0] === "/" && X[1] === "/" && (X = "/%2F" + X.slice(2)), T.push(X);
    }
    return I.query !== void 0 && T.push("?", I.query), I.fragment !== void 0 && T.push("#", I.fragment), T.join("");
  }
  const f = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u, $ = /^(?:[^#/:?]+:)?\/\/([^/?#]*)/;
  function u(E, F) {
    if (F[2] !== void 0 && E.path && E.path[0] !== "/")
      return 'URI path must start with "/" when authority is present.';
    if (typeof E.port == "number" && (E.port < 0 || E.port > 65535))
      return "URI port is malformed.";
  }
  function g(E, F) {
    const I = Object.assign({}, F), P = {
      scheme: void 0,
      userinfo: void 0,
      host: "",
      port: void 0,
      path: "",
      query: void 0,
      fragment: void 0
    };
    let T = !1, G = !1;
    I.reference === "suffix" && (I.scheme ? E = I.scheme + ":" + E : E = "//" + E);
    const Q = E.match($);
    Q !== null && Q[1].indexOf("\\") !== -1 && (P.error = "URI authority must not contain a literal backslash.", T = !0);
    const X = E.match(f);
    if (X) {
      P.scheme = X[1], P.userinfo = X[3], P.host = X[4], P.port = parseInt(X[5], 10), P.path = X[6] || "", P.query = X[7], P.fragment = X[8], isNaN(P.port) && (P.port = X[5]);
      const U = u(P, X);
      if (U !== void 0 && (P.error = P.error || U, T = !0), P.host)
        if (a(P.host) === !1) {
          const q = e(P.host);
          P.host = q.host.toLowerCase(), G = q.isIPV6;
        } else
          G = !0;
      P.scheme === void 0 && P.userinfo === void 0 && P.host === void 0 && P.port === void 0 && P.query === void 0 && !P.path ? P.reference = "same-document" : P.scheme === void 0 ? P.reference = "relative" : P.fragment === void 0 ? P.reference = "absolute" : P.reference = "uri", I.reference && I.reference !== "suffix" && I.reference !== P.reference && (P.error = P.error || "URI is not a " + I.reference + " reference.");
      const B = p(I.scheme || P.scheme);
      if (!I.unicodeSupport && (!B || !B.unicodeSupport) && P.host && (I.domainHost || B && B.domainHost) && G === !1 && l(P.host))
        try {
          P.host = new URL("http://" + P.host).hostname;
        } catch (J) {
          P.error = P.error || "Host's domain name can not be converted to ASCII: " + J;
        }
      if ((!B || B && !B.skipNormalize) && (E.indexOf("%") !== -1 && (P.scheme !== void 0 && (P.scheme = unescape(P.scheme)), P.host !== void 0 && (P.host = s(unescape(P.host), G))), P.path && (P.path = i(P.path)), P.fragment))
        try {
          P.fragment = encodeURI(decodeURIComponent(P.fragment));
        } catch {
          P.error = P.error || "URI malformed";
        }
      B && B.parse && B.parse(P, I);
    } else
      P.error = P.error || "URI can not be parsed.";
    return { parsed: P, malformedAuthorityOrPort: T };
  }
  function C(E, F) {
    return g(E, F).parsed;
  }
  function c(E, F) {
    return d(E, F).normalized;
  }
  function d(E, F) {
    const { parsed: I, malformedAuthorityOrPort: P } = g(E, F);
    return {
      normalized: P ? E : b(I, F),
      malformedAuthorityOrPort: P
    };
  }
  function m(E, F) {
    if (typeof E == "string") {
      const { normalized: I, malformedAuthorityOrPort: P } = d(E, F);
      return P ? void 0 : I;
    }
    if (typeof E == "object")
      return b(E, F);
  }
  const k = {
    SCHEMES: h,
    normalize: _,
    resolve: y,
    resolveComponent: v,
    equal: S,
    serialize: b,
    parse: C
  };
  return yt.exports = k, yt.exports.default = k, yt.exports.fastUri = k, yt.exports;
}
var lo;
function Bs() {
  if (lo) return Ft;
  lo = 1, Object.defineProperty(Ft, "__esModule", { value: !0 });
  const e = Ls();
  return e.code = 'require("ajv/dist/runtime/uri").default', Ft.default = e, Ft;
}
var uo;
function Us() {
  return uo || (uo = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = void 0;
    var t = /* @__PURE__ */ jn();
    Object.defineProperty(e, "KeywordCxt", { enumerable: !0, get: function() {
      return t.KeywordCxt;
    } });
    var n = /* @__PURE__ */ te();
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
    const r = /* @__PURE__ */ yr(), i = /* @__PURE__ */ In(), o = /* @__PURE__ */ Di(), s = /* @__PURE__ */ zn(), a = /* @__PURE__ */ te(), l = /* @__PURE__ */ Tn(), h = /* @__PURE__ */ Nn(), p = /* @__PURE__ */ oe(), _ = qs, y = /* @__PURE__ */ Bs(), v = (q, A) => new RegExp(q, A);
    v.code = "new RegExp";
    const S = ["removeAdditional", "useDefaults", "coerceTypes"], b = /* @__PURE__ */ new Set([
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
    }, $ = {
      ignoreKeywordsWithRef: "",
      jsPropertySyntax: "",
      unicode: '"minLength"/"maxLength" account for unicode characters by default.'
    }, u = 200;
    function g(q) {
      var A, D, R, w, x, z, W, H, ee, ie, N, M, L, K, Y, re, ue, Se, ve, $e, fe, Xe, we, Ln, Bn;
      const ht = q.strict, Un = (A = q.code) === null || A === void 0 ? void 0 : A.optimize, Or = Un === !0 || Un === void 0 ? 1 : Un || 0, Mr = (R = (D = q.code) === null || D === void 0 ? void 0 : D.regExp) !== null && R !== void 0 ? R : v, cs = (w = q.uriResolver) !== null && w !== void 0 ? w : y.default;
      return {
        strictSchema: (z = (x = q.strictSchema) !== null && x !== void 0 ? x : ht) !== null && z !== void 0 ? z : !0,
        strictNumbers: (H = (W = q.strictNumbers) !== null && W !== void 0 ? W : ht) !== null && H !== void 0 ? H : !0,
        strictTypes: (ie = (ee = q.strictTypes) !== null && ee !== void 0 ? ee : ht) !== null && ie !== void 0 ? ie : "log",
        strictTuples: (M = (N = q.strictTuples) !== null && N !== void 0 ? N : ht) !== null && M !== void 0 ? M : "log",
        strictRequired: (K = (L = q.strictRequired) !== null && L !== void 0 ? L : ht) !== null && K !== void 0 ? K : !1,
        code: q.code ? { ...q.code, optimize: Or, regExp: Mr } : { optimize: Or, regExp: Mr },
        loopRequired: (Y = q.loopRequired) !== null && Y !== void 0 ? Y : u,
        loopEnum: (re = q.loopEnum) !== null && re !== void 0 ? re : u,
        meta: (ue = q.meta) !== null && ue !== void 0 ? ue : !0,
        messages: (Se = q.messages) !== null && Se !== void 0 ? Se : !0,
        inlineRefs: (ve = q.inlineRefs) !== null && ve !== void 0 ? ve : !0,
        schemaId: ($e = q.schemaId) !== null && $e !== void 0 ? $e : "$id",
        addUsedSchema: (fe = q.addUsedSchema) !== null && fe !== void 0 ? fe : !0,
        validateSchema: (Xe = q.validateSchema) !== null && Xe !== void 0 ? Xe : !0,
        validateFormats: (we = q.validateFormats) !== null && we !== void 0 ? we : !0,
        unicodeRegExp: (Ln = q.unicodeRegExp) !== null && Ln !== void 0 ? Ln : !0,
        int32range: (Bn = q.int32range) !== null && Bn !== void 0 ? Bn : !0,
        uriResolver: cs
      };
    }
    class C {
      constructor(A = {}) {
        this.schemas = {}, this.refs = {}, this.formats = /* @__PURE__ */ Object.create(null), this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), A = this.opts = { ...A, ...g(A) };
        const { es5: D, lines: R } = this.opts.code;
        this.scope = new a.ValueScope({ scope: {}, prefixes: b, es5: D, lines: R }), this.logger = P(A.logger);
        const w = A.validateFormats;
        A.validateFormats = !1, this.RULES = (0, o.getRules)(), c.call(this, f, A, "NOT SUPPORTED"), c.call(this, $, A, "DEPRECATED", "warn"), this._metaOpts = F.call(this), A.formats && k.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), A.keywords && E.call(this, A.keywords), typeof A.meta == "object" && this.addMetaSchema(A.meta), m.call(this), A.validateFormats = w;
      }
      _addVocabularies() {
        this.addKeyword("$async");
      }
      _addDefaultMetaSchema() {
        const { $data: A, meta: D, schemaId: R } = this.opts;
        let w = _;
        R === "id" && (w = { ..._ }, w.id = w.$id, delete w.$id), D && A && this.addMetaSchema(w, w[R], !1);
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
        const w = R(D);
        return "$async" in R || (this.errors = R.errors), w;
      }
      compile(A, D) {
        const R = this._addSchema(A, D);
        return R.validate || this._compileSchemaEnv(R);
      }
      compileAsync(A, D) {
        if (typeof this.opts.loadSchema != "function")
          throw new Error("options.loadSchema should be a function");
        const { loadSchema: R } = this.opts;
        return w.call(this, A, D);
        async function w(ie, N) {
          await x.call(this, ie.$schema);
          const M = this._addSchema(ie, N);
          return M.validate || z.call(this, M);
        }
        async function x(ie) {
          ie && !this.getSchema(ie) && await w.call(this, { $ref: ie }, !0);
        }
        async function z(ie) {
          try {
            return this._compileSchemaEnv(ie);
          } catch (N) {
            if (!(N instanceof i.default))
              throw N;
            return W.call(this, N), await H.call(this, N.missingSchema), z.call(this, ie);
          }
        }
        function W({ missingSchema: ie, missingRef: N }) {
          if (this.refs[ie])
            throw new Error(`AnySchema ${ie} is loaded but ${N} cannot be resolved`);
        }
        async function H(ie) {
          const N = await ee.call(this, ie);
          this.refs[ie] || await x.call(this, N.$schema), this.refs[ie] || this.addSchema(N, ie, D);
        }
        async function ee(ie) {
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
      addSchema(A, D, R, w = this.opts.validateSchema) {
        if (Array.isArray(A)) {
          for (const z of A)
            this.addSchema(z, void 0, R, w);
          return this;
        }
        let x;
        if (typeof A == "object") {
          const { schemaId: z } = this.opts;
          if (x = A[z], x !== void 0 && typeof x != "string")
            throw new Error(`schema ${z} must be string`);
        }
        return D = (0, l.normalizeId)(D || x), this._checkUnique(D), this.schemas[D] = this._addSchema(A, R, D, w, !0), this;
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
        const w = this.validate(R, A);
        if (!w && D) {
          const x = "schema is invalid: " + this.errorsText();
          if (this.opts.validateSchema === "log")
            this.logger.error(x);
          else
            throw new Error(x);
        }
        return w;
      }
      // Get compiled schema by `key` or `ref`.
      // (`key` that was passed to `addSchema` or full schema reference - `schema.$id` or resolved id)
      getSchema(A) {
        let D;
        for (; typeof (D = d.call(this, A)) == "string"; )
          A = D;
        if (D === void 0) {
          const { schemaId: R } = this.opts, w = new s.SchemaEnv({ schema: {}, schemaId: R });
          if (D = s.resolveSchema.call(this, w, A), !D)
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
            return R && (R = (0, l.normalizeId)(R), delete this.schemas[R], delete this.refs[R]), this;
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
        U.call(this, D);
        const w = {
          ...D,
          type: (0, h.getJSONTypes)(D.type),
          schemaType: (0, h.getJSONTypes)(D.schemaType)
        };
        return (0, p.eachItem)(R, w.type.length === 0 ? (x) => Q.call(this, x, w) : (x) => w.type.forEach((z) => Q.call(this, x, w, z))), this;
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
          const w = R.rules.findIndex((x) => x.keyword === A);
          w >= 0 && R.rules.splice(w, 1);
        }
        return this;
      }
      // Add format
      addFormat(A, D) {
        return typeof D == "string" && (D = new RegExp(D)), this.formats[A] = D, this;
      }
      errorsText(A = this.errors, { separator: D = ", ", dataVar: R = "data" } = {}) {
        return !A || A.length === 0 ? "No errors" : A.map((w) => `${R}${w.instancePath} ${w.message}`).reduce((w, x) => w + D + x);
      }
      $dataMetaSchema(A, D) {
        const R = this.RULES.all;
        A = JSON.parse(JSON.stringify(A));
        for (const w of D) {
          const x = w.split("/").slice(1);
          let z = A;
          for (const W of x)
            z = z[W];
          for (const W in R) {
            const H = R[W];
            if (typeof H != "object")
              continue;
            const { $data: ee } = H.definition, ie = z[W];
            ee && ie && (z[W] = J(ie));
          }
        }
        return A;
      }
      _removeAllSchemas(A, D) {
        for (const R in A) {
          const w = A[R];
          (!D || D.test(R)) && (typeof w == "string" ? delete A[R] : w && !w.meta && (this._cache.delete(w.schema), delete A[R]));
        }
      }
      _addSchema(A, D, R, w = this.opts.validateSchema, x = this.opts.addUsedSchema) {
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
        let H = this._cache.get(A);
        if (H !== void 0)
          return H;
        R = (0, l.normalizeId)(z || R);
        const ee = l.getSchemaRefs.call(this, A, R);
        return H = new s.SchemaEnv({ schema: A, schemaId: W, meta: D, baseId: R, localRefs: ee }), this._cache.set(H.schema, H), x && !R.startsWith("#") && (R && this._checkUnique(R), this.refs[R] = H), w && this.validateSchema(A, !0), H;
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
    function c(q, A, D, R = "error") {
      for (const w in q) {
        const x = w;
        x in A && this.logger[R](`${D}: option ${w}. ${q[x]}`);
      }
    }
    function d(q) {
      return q = (0, l.normalizeId)(q), this.schemas[q] || this.refs[q];
    }
    function m() {
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
    function F() {
      const q = { ...this.opts };
      for (const A of S)
        delete q[A];
      return q;
    }
    const I = { log() {
    }, warn() {
    }, error() {
    } };
    function P(q) {
      if (q === !1)
        return I;
      if (q === void 0)
        return console;
      if (q.log && q.warn && q.error)
        return q;
      throw new Error("logger must implement log, warn and error methods");
    }
    const T = /^[a-z_$][a-z0-9_$:-]*$/i;
    function G(q, A) {
      const { RULES: D } = this;
      if ((0, p.eachItem)(q, (R) => {
        if (D.keywords[R])
          throw new Error(`Keyword ${R} is already defined`);
        if (!T.test(R))
          throw new Error(`Keyword ${R} has invalid name`);
      }), !!A && A.$data && !("code" in A || "validate" in A))
        throw new Error('$data keyword must have "code" or "validate" function');
    }
    function Q(q, A, D) {
      var R;
      const w = A?.post;
      if (D && w)
        throw new Error('keyword with "post" flag cannot have "type"');
      const { RULES: x } = this;
      let z = w ? x.post : x.rules.find(({ type: H }) => H === D);
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
      A.before ? X.call(this, z, W, A.before) : z.rules.push(W), x.all[q] = W, (R = A.implements) === null || R === void 0 || R.forEach((H) => this.addKeyword(H));
    }
    function X(q, A, D) {
      const R = q.rules.findIndex((w) => w.keyword === D);
      R >= 0 ? q.rules.splice(R, 0, A) : (q.rules.push(A), this.logger.warn(`rule ${D} is not defined`));
    }
    function U(q) {
      let { metaSchema: A } = q;
      A !== void 0 && (q.$data && this.opts.$data && (A = J(A)), q.validateSchema = this.compile(A, !0));
    }
    const B = {
      $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
    };
    function J(q) {
      return { anyOf: [q, B] };
    }
  })(Kn)), Kn;
}
var Ot = {}, Mt = {}, Tt = {}, fo;
function Ks() {
  if (fo) return Tt;
  fo = 1, Object.defineProperty(Tt, "__esModule", { value: !0 });
  const e = {
    keyword: "id",
    code() {
      throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
    }
  };
  return Tt.default = e, Tt;
}
var qe = {}, po;
function vr() {
  if (po) return qe;
  po = 1, Object.defineProperty(qe, "__esModule", { value: !0 }), qe.callRef = qe.getValidate = void 0;
  const e = /* @__PURE__ */ In(), t = /* @__PURE__ */ Re(), n = /* @__PURE__ */ te(), r = /* @__PURE__ */ Ae(), i = /* @__PURE__ */ zn(), o = /* @__PURE__ */ oe(), s = {
    keyword: "$ref",
    schemaType: "string",
    code(h) {
      const { gen: p, schema: _, it: y } = h, { baseId: v, schemaEnv: S, validateName: b, opts: f, self: $ } = y, { root: u } = S;
      if ((_ === "#" || _ === "#/") && v === u.baseId)
        return C();
      const g = i.resolveRef.call($, u, v, _);
      if (g === void 0)
        throw new e.default(y.opts.uriResolver, v, _);
      if (g instanceof i.SchemaEnv)
        return c(g);
      return d(g);
      function C() {
        if (S === u)
          return l(h, b, S, S.$async);
        const m = p.scopeValue("root", { ref: u });
        return l(h, (0, n._)`${m}.validate`, u, u.$async);
      }
      function c(m) {
        const k = a(h, m);
        l(h, k, m, m.$async);
      }
      function d(m) {
        const k = p.scopeValue("schema", f.code.source === !0 ? { ref: m, code: (0, n.stringify)(m) } : { ref: m }), E = p.name("valid"), F = h.subschema({
          schema: m,
          dataTypes: [],
          schemaPath: n.nil,
          topSchemaRef: k,
          errSchemaPath: _
        }, E);
        h.mergeEvaluated(F), h.ok(E);
      }
    }
  };
  function a(h, p) {
    const { gen: _ } = h;
    return p.validate ? _.scopeValue("validate", { ref: p.validate }) : (0, n._)`${_.scopeValue("wrapper", { ref: p })}.validate`;
  }
  qe.getValidate = a;
  function l(h, p, _, y) {
    const { gen: v, it: S } = h, { allErrors: b, schemaEnv: f, opts: $ } = S, u = $.passContext ? r.default.this : n.nil;
    y ? g() : C();
    function g() {
      if (!f.$async)
        throw new Error("async schema referenced by sync schema");
      const m = v.let("valid");
      v.try(() => {
        v.code((0, n._)`await ${(0, t.callValidateCode)(h, p, u)}`), d(p), b || v.assign(m, !0);
      }, (k) => {
        v.if((0, n._)`!(${k} instanceof ${S.ValidationError})`, () => v.throw(k)), c(k), b || v.assign(m, !1);
      }), h.ok(m);
    }
    function C() {
      h.result((0, t.callValidateCode)(h, p, u), () => d(p), () => c(p));
    }
    function c(m) {
      const k = (0, n._)`${m}.errors`;
      v.assign(r.default.vErrors, (0, n._)`${r.default.vErrors} === null ? ${k} : ${r.default.vErrors}.concat(${k})`), v.assign(r.default.errors, (0, n._)`${r.default.vErrors}.length`);
    }
    function d(m) {
      var k;
      if (!S.opts.unevaluated)
        return;
      const E = (k = _?.validate) === null || k === void 0 ? void 0 : k.evaluated;
      if (S.props !== !0)
        if (E && !E.dynamicProps)
          E.props !== void 0 && (S.props = o.mergeEvaluated.props(v, E.props, S.props));
        else {
          const F = v.var("props", (0, n._)`${m}.evaluated.props`);
          S.props = o.mergeEvaluated.props(v, F, S.props, n.Name);
        }
      if (S.items !== !0)
        if (E && !E.dynamicItems)
          E.items !== void 0 && (S.items = o.mergeEvaluated.items(v, E.items, S.items));
        else {
          const F = v.var("items", (0, n._)`${m}.evaluated.items`);
          S.items = o.mergeEvaluated.items(v, F, S.items, n.Name);
        }
    }
  }
  return qe.callRef = l, qe.default = s, qe;
}
var ho;
function Hs() {
  if (ho) return Mt;
  ho = 1, Object.defineProperty(Mt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ks(), t = /* @__PURE__ */ vr(), n = [
    "$schema",
    "$id",
    "$defs",
    "$vocabulary",
    { keyword: "$comment" },
    "definitions",
    e.default,
    t.default
  ];
  return Mt.default = n, Mt;
}
var jt = {}, It = {}, mo;
function Gs() {
  if (mo) return It;
  mo = 1, Object.defineProperty(It, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = e.operators, n = {
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
      const { keyword: s, data: a, schemaCode: l } = o;
      o.fail$data((0, e._)`${a} ${n[s].fail} ${l} || isNaN(${a})`);
    }
  };
  return It.default = i, It;
}
var zt = {}, go;
function Ws() {
  if (go) return zt;
  go = 1, Object.defineProperty(zt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), n = {
    keyword: "multipleOf",
    type: "number",
    schemaType: "number",
    $data: !0,
    error: {
      message: ({ schemaCode: r }) => (0, e.str)`must be multiple of ${r}`,
      params: ({ schemaCode: r }) => (0, e._)`{multipleOf: ${r}}`
    },
    code(r) {
      const { gen: i, data: o, schemaCode: s, it: a } = r, l = a.opts.multipleOfPrecision, h = i.let("res"), p = l ? (0, e._)`Math.abs(Math.round(${h}) - ${h}) > 1e-${l}` : (0, e._)`${h} !== parseInt(${h})`;
      r.fail$data((0, e._)`(${s} === 0 || (${h} = ${o}/${s}, ${p}))`);
    }
  };
  return zt.default = n, zt;
}
var Dt = {}, qt = {}, yo;
function Js() {
  if (yo) return qt;
  yo = 1, Object.defineProperty(qt, "__esModule", { value: !0 });
  function e(t) {
    const n = t.length;
    let r = 0, i = 0, o;
    for (; i < n; )
      r++, o = t.charCodeAt(i++), o >= 55296 && o <= 56319 && i < n && (o = t.charCodeAt(i), (o & 64512) === 56320 && i++);
    return r;
  }
  return qt.default = e, e.code = 'require("ajv/dist/runtime/ucs2length").default', qt;
}
var vo;
function Ys() {
  if (vo) return Dt;
  vo = 1, Object.defineProperty(Dt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ oe(), n = /* @__PURE__ */ Js(), i = {
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
      const { keyword: s, data: a, schemaCode: l, it: h } = o, p = s === "maxLength" ? e.operators.GT : e.operators.LT, _ = h.opts.unicode === !1 ? (0, e._)`${a}.length` : (0, e._)`${(0, t.useFunc)(o.gen, n.default)}(${a})`;
      o.fail$data((0, e._)`${_} ${p} ${l}`);
    }
  };
  return Dt.default = i, Dt;
}
var Vt = {}, $o;
function Xs() {
  if ($o) return Vt;
  $o = 1, Object.defineProperty(Vt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Re(), t = /* @__PURE__ */ oe(), n = /* @__PURE__ */ te(), i = {
    keyword: "pattern",
    type: "string",
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: o }) => (0, n.str)`must match pattern "${o}"`,
      params: ({ schemaCode: o }) => (0, n._)`{pattern: ${o}}`
    },
    code(o) {
      const { gen: s, data: a, $data: l, schema: h, schemaCode: p, it: _ } = o, y = _.opts.unicodeRegExp ? "u" : "";
      if (l) {
        const { regExp: v } = _.opts.code, S = v.code === "new RegExp" ? (0, n._)`new RegExp` : (0, t.useFunc)(s, v), b = s.let("valid");
        s.try(() => s.assign(b, (0, n._)`${S}(${p}, ${y}).test(${a})`), () => s.assign(b, !1)), o.fail$data((0, n._)`!${b}`);
      } else {
        const v = (0, e.usePattern)(o, h);
        o.fail$data((0, n._)`!${v}.test(${a})`);
      }
    }
  };
  return Vt.default = i, Vt;
}
var Lt = {}, bo;
function Zs() {
  if (bo) return Lt;
  bo = 1, Object.defineProperty(Lt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), n = {
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
  return Lt.default = n, Lt;
}
var Bt = {}, wo;
function Qs() {
  if (wo) return Bt;
  wo = 1, Object.defineProperty(Bt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Re(), t = /* @__PURE__ */ te(), n = /* @__PURE__ */ oe(), i = {
    keyword: "required",
    type: "object",
    schemaType: "array",
    $data: !0,
    error: {
      message: ({ params: { missingProperty: o } }) => (0, t.str)`must have required property '${o}'`,
      params: ({ params: { missingProperty: o } }) => (0, t._)`{missingProperty: ${o}}`
    },
    code(o) {
      const { gen: s, schema: a, schemaCode: l, data: h, $data: p, it: _ } = o, { opts: y } = _;
      if (!p && a.length === 0)
        return;
      const v = a.length >= y.loopRequired;
      if (_.allErrors ? S() : b(), y.strictRequired) {
        const u = o.parentSchema.properties, { definedProperties: g } = o.it;
        for (const C of a)
          if (u?.[C] === void 0 && !g.has(C)) {
            const c = _.schemaEnv.baseId + _.errSchemaPath, d = `required property "${C}" is not defined at "${c}" (strictRequired)`;
            (0, n.checkStrictMode)(_, d, _.opts.strictRequired);
          }
      }
      function S() {
        if (v || p)
          o.block$data(t.nil, f);
        else
          for (const u of a)
            (0, e.checkReportMissingProp)(o, u);
      }
      function b() {
        const u = s.let("missing");
        if (v || p) {
          const g = s.let("valid", !0);
          o.block$data(g, () => $(u, g)), o.ok(g);
        } else
          s.if((0, e.checkMissingProp)(o, a, u)), (0, e.reportMissingProp)(o, u), s.else();
      }
      function f() {
        s.forOf("prop", l, (u) => {
          o.setParams({ missingProperty: u }), s.if((0, e.noPropertyInData)(s, h, u, y.ownProperties), () => o.error());
        });
      }
      function $(u, g) {
        o.setParams({ missingProperty: u }), s.forOf(u, l, () => {
          s.assign(g, (0, e.propertyInData)(s, h, u, y.ownProperties)), s.if((0, t.not)(g), () => {
            o.error(), s.break();
          });
        }, t.nil);
      }
    }
  };
  return Bt.default = i, Bt;
}
var Ut = {}, _o;
function ea() {
  if (_o) return Ut;
  _o = 1, Object.defineProperty(Ut, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), n = {
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
  return Ut.default = n, Ut;
}
var Kt = {}, Ht = {}, So;
function $r() {
  if (So) return Ht;
  So = 1, Object.defineProperty(Ht, "__esModule", { value: !0 });
  const e = Vi();
  return e.code = 'require("ajv/dist/runtime/equal").default', Ht.default = e, Ht;
}
var Co;
function ta() {
  if (Co) return Kt;
  Co = 1, Object.defineProperty(Kt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Nn(), t = /* @__PURE__ */ te(), n = /* @__PURE__ */ oe(), r = /* @__PURE__ */ $r(), o = {
    keyword: "uniqueItems",
    type: "array",
    schemaType: "boolean",
    $data: !0,
    error: {
      message: ({ params: { i: s, j: a } }) => (0, t.str)`must NOT have duplicate items (items ## ${a} and ${s} are identical)`,
      params: ({ params: { i: s, j: a } }) => (0, t._)`{i: ${s}, j: ${a}}`
    },
    code(s) {
      const { gen: a, data: l, $data: h, schema: p, parentSchema: _, schemaCode: y, it: v } = s;
      if (!h && !p)
        return;
      const S = a.let("valid"), b = _.items ? (0, e.getSchemaTypes)(_.items) : [];
      s.block$data(S, f, (0, t._)`${y} === false`), s.ok(S);
      function f() {
        const C = a.let("i", (0, t._)`${l}.length`), c = a.let("j");
        s.setParams({ i: C, j: c }), a.assign(S, !0), a.if((0, t._)`${C} > 1`, () => ($() ? u : g)(C, c));
      }
      function $() {
        return b.length > 0 && !b.some((C) => C === "object" || C === "array");
      }
      function u(C, c) {
        const d = a.name("item"), m = (0, e.checkDataTypes)(b, d, v.opts.strictNumbers, e.DataType.Wrong), k = a.const("indices", (0, t._)`{}`);
        a.for((0, t._)`;${C}--;`, () => {
          a.let(d, (0, t._)`${l}[${C}]`), a.if(m, (0, t._)`continue`), b.length > 1 && a.if((0, t._)`typeof ${d} == "string"`, (0, t._)`${d} += "_"`), a.if((0, t._)`typeof ${k}[${d}] == "number"`, () => {
            a.assign(c, (0, t._)`${k}[${d}]`), s.error(), a.assign(S, !1).break();
          }).code((0, t._)`${k}[${d}] = ${C}`);
        });
      }
      function g(C, c) {
        const d = (0, n.useFunc)(a, r.default), m = a.name("outer");
        a.label(m).for((0, t._)`;${C}--;`, () => a.for((0, t._)`${c} = ${C}; ${c}--;`, () => a.if((0, t._)`${d}(${l}[${C}], ${l}[${c}])`, () => {
          s.error(), a.assign(S, !1).break(m);
        })));
      }
    }
  };
  return Kt.default = o, Kt;
}
var Gt = {}, ko;
function na() {
  if (ko) return Gt;
  ko = 1, Object.defineProperty(Gt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ oe(), n = /* @__PURE__ */ $r(), i = {
    keyword: "const",
    $data: !0,
    error: {
      message: "must be equal to constant",
      params: ({ schemaCode: o }) => (0, e._)`{allowedValue: ${o}}`
    },
    code(o) {
      const { gen: s, data: a, $data: l, schemaCode: h, schema: p } = o;
      l || p && typeof p == "object" ? o.fail$data((0, e._)`!${(0, t.useFunc)(s, n.default)}(${a}, ${h})`) : o.fail((0, e._)`${p} !== ${a}`);
    }
  };
  return Gt.default = i, Gt;
}
var Wt = {}, Eo;
function ra() {
  if (Eo) return Wt;
  Eo = 1, Object.defineProperty(Wt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ oe(), n = /* @__PURE__ */ $r(), i = {
    keyword: "enum",
    schemaType: "array",
    $data: !0,
    error: {
      message: "must be equal to one of the allowed values",
      params: ({ schemaCode: o }) => (0, e._)`{allowedValues: ${o}}`
    },
    code(o) {
      const { gen: s, data: a, $data: l, schema: h, schemaCode: p, it: _ } = o;
      if (!l && h.length === 0)
        throw new Error("enum must have non-empty array");
      const y = h.length >= _.opts.loopEnum;
      let v;
      const S = () => v ?? (v = (0, t.useFunc)(s, n.default));
      let b;
      if (y || l)
        b = s.let("valid"), o.block$data(b, f);
      else {
        if (!Array.isArray(h))
          throw new Error("ajv implementation error");
        const u = s.const("vSchema", p);
        b = (0, e.or)(...h.map((g, C) => $(u, C)));
      }
      o.pass(b);
      function f() {
        s.assign(b, !1), s.forOf("v", p, (u) => s.if((0, e._)`${S()}(${a}, ${u})`, () => s.assign(b, !0).break()));
      }
      function $(u, g) {
        const C = h[g];
        return typeof C == "object" && C !== null ? (0, e._)`${S()}(${a}, ${u}[${g}])` : (0, e._)`${a} === ${C}`;
      }
    }
  };
  return Wt.default = i, Wt;
}
var xo;
function oa() {
  if (xo) return jt;
  xo = 1, Object.defineProperty(jt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Gs(), t = /* @__PURE__ */ Ws(), n = /* @__PURE__ */ Ys(), r = /* @__PURE__ */ Xs(), i = /* @__PURE__ */ Zs(), o = /* @__PURE__ */ Qs(), s = /* @__PURE__ */ ea(), a = /* @__PURE__ */ ta(), l = /* @__PURE__ */ na(), h = /* @__PURE__ */ ra(), p = [
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
    l.default,
    h.default
  ];
  return jt.default = p, jt;
}
var Jt = {}, Ze = {}, Po;
function Bi() {
  if (Po) return Ze;
  Po = 1, Object.defineProperty(Ze, "__esModule", { value: !0 }), Ze.validateAdditionalItems = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ oe(), r = {
    keyword: "additionalItems",
    type: "array",
    schemaType: ["boolean", "object"],
    before: "uniqueItems",
    error: {
      message: ({ params: { len: o } }) => (0, e.str)`must NOT have more than ${o} items`,
      params: ({ params: { len: o } }) => (0, e._)`{limit: ${o}}`
    },
    code(o) {
      const { parentSchema: s, it: a } = o, { items: l } = s;
      if (!Array.isArray(l)) {
        (0, t.checkStrictMode)(a, '"additionalItems" is ignored when "items" is not an array of schemas');
        return;
      }
      i(o, l);
    }
  };
  function i(o, s) {
    const { gen: a, schema: l, data: h, keyword: p, it: _ } = o;
    _.items = !0;
    const y = a.const("len", (0, e._)`${h}.length`);
    if (l === !1)
      o.setParams({ len: s.length }), o.pass((0, e._)`${y} <= ${s.length}`);
    else if (typeof l == "object" && !(0, t.alwaysValidSchema)(_, l)) {
      const S = a.var("valid", (0, e._)`${y} <= ${s.length}`);
      a.if((0, e.not)(S), () => v(S)), o.ok(S);
    }
    function v(S) {
      a.forRange("i", s.length, y, (b) => {
        o.subschema({ keyword: p, dataProp: b, dataPropType: t.Type.Num }, S), _.allErrors || a.if((0, e.not)(S), () => a.break());
      });
    }
  }
  return Ze.validateAdditionalItems = i, Ze.default = r, Ze;
}
var Yt = {}, Qe = {}, Ao;
function Ui() {
  if (Ao) return Qe;
  Ao = 1, Object.defineProperty(Qe, "__esModule", { value: !0 }), Qe.validateTuple = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ oe(), n = /* @__PURE__ */ Re(), r = {
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
    const { gen: l, parentSchema: h, data: p, keyword: _, it: y } = o;
    b(h), y.opts.unevaluated && a.length && y.items !== !0 && (y.items = t.mergeEvaluated.items(l, a.length, y.items));
    const v = l.name("valid"), S = l.const("len", (0, e._)`${p}.length`);
    a.forEach((f, $) => {
      (0, t.alwaysValidSchema)(y, f) || (l.if((0, e._)`${S} > ${$}`, () => o.subschema({
        keyword: _,
        schemaProp: $,
        dataProp: $
      }, v)), o.ok(v));
    });
    function b(f) {
      const { opts: $, errSchemaPath: u } = y, g = a.length, C = g === f.minItems && (g === f.maxItems || f[s] === !1);
      if ($.strictTuples && !C) {
        const c = `"${_}" is ${g}-tuple, but minItems or maxItems/${s} are not specified or different at path "${u}"`;
        (0, t.checkStrictMode)(y, c, $.strictTuples);
      }
    }
  }
  return Qe.validateTuple = i, Qe.default = r, Qe;
}
var Ro;
function ia() {
  if (Ro) return Yt;
  Ro = 1, Object.defineProperty(Yt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ui(), t = {
    keyword: "prefixItems",
    type: "array",
    schemaType: ["array"],
    before: "uniqueItems",
    code: (n) => (0, e.validateTuple)(n, "items")
  };
  return Yt.default = t, Yt;
}
var Xt = {}, No;
function sa() {
  if (No) return Xt;
  No = 1, Object.defineProperty(Xt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ oe(), n = /* @__PURE__ */ Re(), r = /* @__PURE__ */ Bi(), o = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    error: {
      message: ({ params: { len: s } }) => (0, e.str)`must NOT have more than ${s} items`,
      params: ({ params: { len: s } }) => (0, e._)`{limit: ${s}}`
    },
    code(s) {
      const { schema: a, parentSchema: l, it: h } = s, { prefixItems: p } = l;
      h.items = !0, !(0, t.alwaysValidSchema)(h, a) && (p ? (0, r.validateAdditionalItems)(s, p) : s.ok((0, n.validateArray)(s)));
    }
  };
  return Xt.default = o, Xt;
}
var Zt = {}, Fo;
function aa() {
  if (Fo) return Zt;
  Fo = 1, Object.defineProperty(Zt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ oe(), r = {
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
      const { gen: o, schema: s, parentSchema: a, data: l, it: h } = i;
      let p, _;
      const { minContains: y, maxContains: v } = a;
      h.opts.next ? (p = y === void 0 ? 1 : y, _ = v) : p = 1;
      const S = o.const("len", (0, e._)`${l}.length`);
      if (i.setParams({ min: p, max: _ }), _ === void 0 && p === 0) {
        (0, t.checkStrictMode)(h, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
        return;
      }
      if (_ !== void 0 && p > _) {
        (0, t.checkStrictMode)(h, '"minContains" > "maxContains" is always invalid'), i.fail();
        return;
      }
      if ((0, t.alwaysValidSchema)(h, s)) {
        let g = (0, e._)`${S} >= ${p}`;
        _ !== void 0 && (g = (0, e._)`${g} && ${S} <= ${_}`), i.pass(g);
        return;
      }
      h.items = !0;
      const b = o.name("valid");
      _ === void 0 && p === 1 ? $(b, () => o.if(b, () => o.break())) : p === 0 ? (o.let(b, !0), _ !== void 0 && o.if((0, e._)`${l}.length > 0`, f)) : (o.let(b, !1), f()), i.result(b, () => i.reset());
      function f() {
        const g = o.name("_valid"), C = o.let("count", 0);
        $(g, () => o.if(g, () => u(C)));
      }
      function $(g, C) {
        o.forRange("i", 0, S, (c) => {
          i.subschema({
            keyword: "contains",
            dataProp: c,
            dataPropType: t.Type.Num,
            compositeRule: !0
          }, g), C();
        });
      }
      function u(g) {
        o.code((0, e._)`${g}++`), _ === void 0 ? o.if((0, e._)`${g} >= ${p}`, () => o.assign(b, !0).break()) : (o.if((0, e._)`${g} > ${_}`, () => o.assign(b, !1).break()), p === 1 ? o.assign(b, !0) : o.if((0, e._)`${g} >= ${p}`, () => o.assign(b, !0)));
      }
    }
  };
  return Zt.default = r, Zt;
}
var er = {}, Oo;
function br() {
  return Oo || (Oo = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
    const t = /* @__PURE__ */ te(), n = /* @__PURE__ */ oe(), r = /* @__PURE__ */ Re();
    e.error = {
      message: ({ params: { property: l, depsCount: h, deps: p } }) => {
        const _ = h === 1 ? "property" : "properties";
        return (0, t.str)`must have ${_} ${p} when property ${l} is present`;
      },
      params: ({ params: { property: l, depsCount: h, deps: p, missingProperty: _ } }) => (0, t._)`{property: ${l},
    missingProperty: ${_},
    depsCount: ${h},
    deps: ${p}}`
      // TODO change to reference
    };
    const i = {
      keyword: "dependencies",
      type: "object",
      schemaType: "object",
      error: e.error,
      code(l) {
        const [h, p] = o(l);
        s(l, h), a(l, p);
      }
    };
    function o({ schema: l }) {
      const h = {}, p = {};
      for (const _ in l) {
        if (_ === "__proto__")
          continue;
        const y = Array.isArray(l[_]) ? h : p;
        y[_] = l[_];
      }
      return [h, p];
    }
    function s(l, h = l.schema) {
      const { gen: p, data: _, it: y } = l;
      if (Object.keys(h).length === 0)
        return;
      const v = p.let("missing");
      for (const S in h) {
        const b = h[S];
        if (b.length === 0)
          continue;
        const f = (0, r.propertyInData)(p, _, S, y.opts.ownProperties);
        l.setParams({
          property: S,
          depsCount: b.length,
          deps: b.join(", ")
        }), y.allErrors ? p.if(f, () => {
          for (const $ of b)
            (0, r.checkReportMissingProp)(l, $);
        }) : (p.if((0, t._)`${f} && (${(0, r.checkMissingProp)(l, b, v)})`), (0, r.reportMissingProp)(l, v), p.else());
      }
    }
    e.validatePropertyDeps = s;
    function a(l, h = l.schema) {
      const { gen: p, data: _, keyword: y, it: v } = l, S = p.name("valid");
      for (const b in h)
        (0, n.alwaysValidSchema)(v, h[b]) || (p.if(
          (0, r.propertyInData)(p, _, b, v.opts.ownProperties),
          () => {
            const f = l.subschema({ keyword: y, schemaProp: b }, S);
            l.mergeValidEvaluated(f, S);
          },
          () => p.var(S, !0)
          // TODO var
        ), l.ok(S));
    }
    e.validateSchemaDeps = a, e.default = i;
  })(er)), er;
}
var Qt = {}, Mo;
function ca() {
  if (Mo) return Qt;
  Mo = 1, Object.defineProperty(Qt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ oe(), r = {
    keyword: "propertyNames",
    type: "object",
    schemaType: ["object", "boolean"],
    error: {
      message: "property name must be valid",
      params: ({ params: i }) => (0, e._)`{propertyName: ${i.propertyName}}`
    },
    code(i) {
      const { gen: o, schema: s, data: a, it: l } = i;
      if ((0, t.alwaysValidSchema)(l, s))
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
          i.error(!0), l.allErrors || o.break();
        });
      }), i.ok(h);
    }
  };
  return Qt.default = r, Qt;
}
var en = {}, To;
function Ki() {
  if (To) return en;
  To = 1, Object.defineProperty(en, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Re(), t = /* @__PURE__ */ te(), n = /* @__PURE__ */ Ae(), r = /* @__PURE__ */ oe(), o = {
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
      const { gen: a, schema: l, parentSchema: h, data: p, errsCount: _, it: y } = s;
      if (!_)
        throw new Error("ajv implementation error");
      const { allErrors: v, opts: S } = y;
      if (y.props = !0, S.removeAdditional !== "all" && (0, r.alwaysValidSchema)(y, l))
        return;
      const b = (0, e.allSchemaProperties)(h.properties), f = (0, e.allSchemaProperties)(h.patternProperties);
      $(), s.ok((0, t._)`${_} === ${n.default.errors}`);
      function $() {
        a.forIn("key", p, (d) => {
          !b.length && !f.length ? C(d) : a.if(u(d), () => C(d));
        });
      }
      function u(d) {
        let m;
        if (b.length > 8) {
          const k = (0, r.schemaRefOrVal)(y, h.properties, "properties");
          m = (0, e.isOwnProperty)(a, k, d);
        } else b.length ? m = (0, t.or)(...b.map((k) => (0, t._)`${d} === ${k}`)) : m = t.nil;
        return f.length && (m = (0, t.or)(m, ...f.map((k) => (0, t._)`${(0, e.usePattern)(s, k)}.test(${d})`))), (0, t.not)(m);
      }
      function g(d) {
        a.code((0, t._)`delete ${p}[${d}]`);
      }
      function C(d) {
        if (S.removeAdditional === "all" || S.removeAdditional && l === !1) {
          g(d);
          return;
        }
        if (l === !1) {
          s.setParams({ additionalProperty: d }), s.error(), v || a.break();
          return;
        }
        if (typeof l == "object" && !(0, r.alwaysValidSchema)(y, l)) {
          const m = a.name("valid");
          S.removeAdditional === "failing" ? (c(d, m, !1), a.if((0, t.not)(m), () => {
            s.reset(), g(d);
          })) : (c(d, m), v || a.if((0, t.not)(m), () => a.break()));
        }
      }
      function c(d, m, k) {
        const E = {
          keyword: "additionalProperties",
          dataProp: d,
          dataPropType: r.Type.Str
        };
        k === !1 && Object.assign(E, {
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }), s.subschema(E, m);
      }
    }
  };
  return en.default = o, en;
}
var tn = {}, jo;
function la() {
  if (jo) return tn;
  jo = 1, Object.defineProperty(tn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ jn(), t = /* @__PURE__ */ Re(), n = /* @__PURE__ */ oe(), r = /* @__PURE__ */ Ki(), i = {
    keyword: "properties",
    type: "object",
    schemaType: "object",
    code(o) {
      const { gen: s, schema: a, parentSchema: l, data: h, it: p } = o;
      p.opts.removeAdditional === "all" && l.additionalProperties === void 0 && r.default.code(new e.KeywordCxt(p, r.default, "additionalProperties"));
      const _ = (0, t.allSchemaProperties)(a);
      for (const f of _)
        p.definedProperties.add(f);
      p.opts.unevaluated && _.length && p.props !== !0 && (p.props = n.mergeEvaluated.props(s, (0, n.toHash)(_), p.props));
      const y = _.filter((f) => !(0, n.alwaysValidSchema)(p, a[f]));
      if (y.length === 0)
        return;
      const v = s.name("valid");
      for (const f of y)
        S(f) ? b(f) : (s.if((0, t.propertyInData)(s, h, f, p.opts.ownProperties)), b(f), p.allErrors || s.else().var(v, !0), s.endIf()), o.it.definedProperties.add(f), o.ok(v);
      function S(f) {
        return p.opts.useDefaults && !p.compositeRule && a[f].default !== void 0;
      }
      function b(f) {
        o.subschema({
          keyword: "properties",
          schemaProp: f,
          dataProp: f
        }, v);
      }
    }
  };
  return tn.default = i, tn;
}
var nn = {}, Io;
function da() {
  if (Io) return nn;
  Io = 1, Object.defineProperty(nn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Re(), t = /* @__PURE__ */ te(), n = /* @__PURE__ */ oe(), r = /* @__PURE__ */ oe(), i = {
    keyword: "patternProperties",
    type: "object",
    schemaType: "object",
    code(o) {
      const { gen: s, schema: a, data: l, parentSchema: h, it: p } = o, { opts: _ } = p, y = (0, e.allSchemaProperties)(a), v = y.filter((C) => (0, n.alwaysValidSchema)(p, a[C]));
      if (y.length === 0 || v.length === y.length && (!p.opts.unevaluated || p.props === !0))
        return;
      const S = _.strictSchema && !_.allowMatchingProperties && h.properties, b = s.name("valid");
      p.props !== !0 && !(p.props instanceof t.Name) && (p.props = (0, r.evaluatedPropsToName)(s, p.props));
      const { props: f } = p;
      $();
      function $() {
        for (const C of y)
          S && u(C), p.allErrors ? g(C) : (s.var(b, !0), g(C), s.if(b));
      }
      function u(C) {
        for (const c in S)
          new RegExp(C).test(c) && (0, n.checkStrictMode)(p, `property ${c} matches pattern ${C} (use allowMatchingProperties)`);
      }
      function g(C) {
        s.forIn("key", l, (c) => {
          s.if((0, t._)`${(0, e.usePattern)(o, C)}.test(${c})`, () => {
            const d = v.includes(C);
            d || o.subschema({
              keyword: "patternProperties",
              schemaProp: C,
              dataProp: c,
              dataPropType: r.Type.Str
            }, b), p.opts.unevaluated && f !== !0 ? s.assign((0, t._)`${f}[${c}]`, !0) : !d && !p.allErrors && s.if((0, t.not)(b), () => s.break());
          });
        });
      }
    }
  };
  return nn.default = i, nn;
}
var rn = {}, zo;
function ua() {
  if (zo) return rn;
  zo = 1, Object.defineProperty(rn, "__esModule", { value: !0 });
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
  return rn.default = t, rn;
}
var on = {}, Do;
function fa() {
  if (Do) return on;
  Do = 1, Object.defineProperty(on, "__esModule", { value: !0 });
  const t = {
    keyword: "anyOf",
    schemaType: "array",
    trackErrors: !0,
    code: (/* @__PURE__ */ Re()).validateUnion,
    error: { message: "must match a schema in anyOf" }
  };
  return on.default = t, on;
}
var sn = {}, qo;
function pa() {
  if (qo) return sn;
  qo = 1, Object.defineProperty(sn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ oe(), r = {
    keyword: "oneOf",
    schemaType: "array",
    trackErrors: !0,
    error: {
      message: "must match exactly one schema in oneOf",
      params: ({ params: i }) => (0, e._)`{passingSchemas: ${i.passing}}`
    },
    code(i) {
      const { gen: o, schema: s, parentSchema: a, it: l } = i;
      if (!Array.isArray(s))
        throw new Error("ajv implementation error");
      if (l.opts.discriminator && a.discriminator)
        return;
      const h = s, p = o.let("valid", !1), _ = o.let("passing", null), y = o.name("_valid");
      i.setParams({ passing: _ }), o.block(v), i.result(p, () => i.reset(), () => i.error(!0));
      function v() {
        h.forEach((S, b) => {
          let f;
          (0, t.alwaysValidSchema)(l, S) ? o.var(y, !0) : f = i.subschema({
            keyword: "oneOf",
            schemaProp: b,
            compositeRule: !0
          }, y), b > 0 && o.if((0, e._)`${y} && ${p}`).assign(p, !1).assign(_, (0, e._)`[${_}, ${b}]`).else(), o.if(y, () => {
            o.assign(p, !0), o.assign(_, b), f && i.mergeEvaluated(f, e.Name);
          });
        });
      }
    }
  };
  return sn.default = r, sn;
}
var an = {}, Vo;
function ha() {
  if (Vo) return an;
  Vo = 1, Object.defineProperty(an, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ oe(), t = {
    keyword: "allOf",
    schemaType: "array",
    code(n) {
      const { gen: r, schema: i, it: o } = n;
      if (!Array.isArray(i))
        throw new Error("ajv implementation error");
      const s = r.name("valid");
      i.forEach((a, l) => {
        if ((0, e.alwaysValidSchema)(o, a))
          return;
        const h = n.subschema({ keyword: "allOf", schemaProp: l }, s);
        n.ok(s), n.mergeEvaluated(h);
      });
    }
  };
  return an.default = t, an;
}
var cn = {}, Lo;
function ma() {
  if (Lo) return cn;
  Lo = 1, Object.defineProperty(cn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ oe(), r = {
    keyword: "if",
    schemaType: ["object", "boolean"],
    trackErrors: !0,
    error: {
      message: ({ params: o }) => (0, e.str)`must match "${o.ifClause}" schema`,
      params: ({ params: o }) => (0, e._)`{failingKeyword: ${o.ifClause}}`
    },
    code(o) {
      const { gen: s, parentSchema: a, it: l } = o;
      a.then === void 0 && a.else === void 0 && (0, t.checkStrictMode)(l, '"if" without "then" and "else" is ignored');
      const h = i(l, "then"), p = i(l, "else");
      if (!h && !p)
        return;
      const _ = s.let("valid", !0), y = s.name("_valid");
      if (v(), o.reset(), h && p) {
        const b = s.let("ifClause");
        o.setParams({ ifClause: b }), s.if(y, S("then", b), S("else", b));
      } else h ? s.if(y, S("then")) : s.if((0, e.not)(y), S("else"));
      o.pass(_, () => o.error(!0));
      function v() {
        const b = o.subschema({
          keyword: "if",
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }, y);
        o.mergeEvaluated(b);
      }
      function S(b, f) {
        return () => {
          const $ = o.subschema({ keyword: b }, y);
          s.assign(_, y), o.mergeValidEvaluated($, _), f ? s.assign(f, (0, e._)`${b}`) : o.setParams({ ifClause: b });
        };
      }
    }
  };
  function i(o, s) {
    const a = o.schema[s];
    return a !== void 0 && !(0, t.alwaysValidSchema)(o, a);
  }
  return cn.default = r, cn;
}
var ln = {}, Bo;
function ga() {
  if (Bo) return ln;
  Bo = 1, Object.defineProperty(ln, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ oe(), t = {
    keyword: ["then", "else"],
    schemaType: ["object", "boolean"],
    code({ keyword: n, parentSchema: r, it: i }) {
      r.if === void 0 && (0, e.checkStrictMode)(i, `"${n}" without "if" is ignored`);
    }
  };
  return ln.default = t, ln;
}
var Uo;
function ya() {
  if (Uo) return Jt;
  Uo = 1, Object.defineProperty(Jt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Bi(), t = /* @__PURE__ */ ia(), n = /* @__PURE__ */ Ui(), r = /* @__PURE__ */ sa(), i = /* @__PURE__ */ aa(), o = /* @__PURE__ */ br(), s = /* @__PURE__ */ ca(), a = /* @__PURE__ */ Ki(), l = /* @__PURE__ */ la(), h = /* @__PURE__ */ da(), p = /* @__PURE__ */ ua(), _ = /* @__PURE__ */ fa(), y = /* @__PURE__ */ pa(), v = /* @__PURE__ */ ha(), S = /* @__PURE__ */ ma(), b = /* @__PURE__ */ ga();
  function f($ = !1) {
    const u = [
      // any
      p.default,
      _.default,
      y.default,
      v.default,
      S.default,
      b.default,
      // object
      s.default,
      a.default,
      o.default,
      l.default,
      h.default
    ];
    return $ ? u.push(t.default, r.default) : u.push(e.default, n.default), u.push(i.default), u;
  }
  return Jt.default = f, Jt;
}
var dn = {}, et = {}, Ko;
function Hi() {
  if (Ko) return et;
  Ko = 1, Object.defineProperty(et, "__esModule", { value: !0 }), et.dynamicAnchor = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ Ae(), n = /* @__PURE__ */ zn(), r = /* @__PURE__ */ vr(), i = {
    keyword: "$dynamicAnchor",
    schemaType: "string",
    code: (a) => o(a, a.schema)
  };
  function o(a, l) {
    const { gen: h, it: p } = a;
    p.schemaEnv.root.dynamicAnchors[l] = !0;
    const _ = (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(l)}`, y = p.errSchemaPath === "#" ? p.validateName : s(a);
    h.if((0, e._)`!${_}`, () => h.assign(_, y));
  }
  et.dynamicAnchor = o;
  function s(a) {
    const { schemaEnv: l, schema: h, self: p } = a.it, { root: _, baseId: y, localRefs: v, meta: S } = l.root, { schemaId: b } = p.opts, f = new n.SchemaEnv({ schema: h, schemaId: b, root: _, baseId: y, localRefs: v, meta: S });
    return n.compileSchema.call(p, f), (0, r.getValidate)(a, f);
  }
  return et.default = i, et;
}
var tt = {}, Ho;
function Gi() {
  if (Ho) return tt;
  Ho = 1, Object.defineProperty(tt, "__esModule", { value: !0 }), tt.dynamicRef = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ Ae(), n = /* @__PURE__ */ vr(), r = {
    keyword: "$dynamicRef",
    schemaType: "string",
    code: (o) => i(o, o.schema)
  };
  function i(o, s) {
    const { gen: a, keyword: l, it: h } = o;
    if (s[0] !== "#")
      throw new Error(`"${l}" only supports hash fragment reference`);
    const p = s.slice(1);
    if (h.allErrors)
      _();
    else {
      const v = a.let("valid", !1);
      _(v), o.ok(v);
    }
    function _(v) {
      if (h.schemaEnv.root.dynamicAnchors[p]) {
        const S = a.let("_v", (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(p)}`);
        a.if(S, y(S, v), y(h.validateName, v));
      } else
        y(h.validateName, v)();
    }
    function y(v, S) {
      return S ? () => a.block(() => {
        (0, n.callRef)(o, v), a.let(S, !0);
      }) : () => (0, n.callRef)(o, v);
    }
  }
  return tt.dynamicRef = i, tt.default = r, tt;
}
var un = {}, Go;
function va() {
  if (Go) return un;
  Go = 1, Object.defineProperty(un, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Hi(), t = /* @__PURE__ */ oe(), n = {
    keyword: "$recursiveAnchor",
    schemaType: "boolean",
    code(r) {
      r.schema ? (0, e.dynamicAnchor)(r, "") : (0, t.checkStrictMode)(r.it, "$recursiveAnchor: false is ignored");
    }
  };
  return un.default = n, un;
}
var fn = {}, Wo;
function $a() {
  if (Wo) return fn;
  Wo = 1, Object.defineProperty(fn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Gi(), t = {
    keyword: "$recursiveRef",
    schemaType: "string",
    code: (n) => (0, e.dynamicRef)(n, n.schema)
  };
  return fn.default = t, fn;
}
var Jo;
function ba() {
  if (Jo) return dn;
  Jo = 1, Object.defineProperty(dn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Hi(), t = /* @__PURE__ */ Gi(), n = /* @__PURE__ */ va(), r = /* @__PURE__ */ $a(), i = [e.default, t.default, n.default, r.default];
  return dn.default = i, dn;
}
var pn = {}, hn = {}, Yo;
function wa() {
  if (Yo) return hn;
  Yo = 1, Object.defineProperty(hn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ br(), t = {
    keyword: "dependentRequired",
    type: "object",
    schemaType: "object",
    error: e.error,
    code: (n) => (0, e.validatePropertyDeps)(n)
  };
  return hn.default = t, hn;
}
var mn = {}, Xo;
function _a() {
  if (Xo) return mn;
  Xo = 1, Object.defineProperty(mn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ br(), t = {
    keyword: "dependentSchemas",
    type: "object",
    schemaType: "object",
    code: (n) => (0, e.validateSchemaDeps)(n)
  };
  return mn.default = t, mn;
}
var gn = {}, Zo;
function Sa() {
  if (Zo) return gn;
  Zo = 1, Object.defineProperty(gn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ oe(), t = {
    keyword: ["maxContains", "minContains"],
    type: "array",
    schemaType: "number",
    code({ keyword: n, parentSchema: r, it: i }) {
      r.contains === void 0 && (0, e.checkStrictMode)(i, `"${n}" without "contains" is ignored`);
    }
  };
  return gn.default = t, gn;
}
var Qo;
function Ca() {
  if (Qo) return pn;
  Qo = 1, Object.defineProperty(pn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ wa(), t = /* @__PURE__ */ _a(), n = /* @__PURE__ */ Sa(), r = [e.default, t.default, n.default];
  return pn.default = r, pn;
}
var yn = {}, vn = {}, ei;
function ka() {
  if (ei) return vn;
  ei = 1, Object.defineProperty(vn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ oe(), n = /* @__PURE__ */ Ae(), i = {
    keyword: "unevaluatedProperties",
    type: "object",
    schemaType: ["boolean", "object"],
    trackErrors: !0,
    error: {
      message: "must NOT have unevaluated properties",
      params: ({ params: o }) => (0, e._)`{unevaluatedProperty: ${o.unevaluatedProperty}}`
    },
    code(o) {
      const { gen: s, schema: a, data: l, errsCount: h, it: p } = o;
      if (!h)
        throw new Error("ajv implementation error");
      const { allErrors: _, props: y } = p;
      y instanceof e.Name ? s.if((0, e._)`${y} !== true`, () => s.forIn("key", l, (f) => s.if(S(y, f), () => v(f)))) : y !== !0 && s.forIn("key", l, (f) => y === void 0 ? v(f) : s.if(b(y, f), () => v(f))), p.props = !0, o.ok((0, e._)`${h} === ${n.default.errors}`);
      function v(f) {
        if (a === !1) {
          o.setParams({ unevaluatedProperty: f }), o.error(), _ || s.break();
          return;
        }
        if (!(0, t.alwaysValidSchema)(p, a)) {
          const $ = s.name("valid");
          o.subschema({
            keyword: "unevaluatedProperties",
            dataProp: f,
            dataPropType: t.Type.Str
          }, $), _ || s.if((0, e.not)($), () => s.break());
        }
      }
      function S(f, $) {
        return (0, e._)`!${f} || !${f}[${$}]`;
      }
      function b(f, $) {
        const u = [];
        for (const g in f)
          f[g] === !0 && u.push((0, e._)`${$} !== ${g}`);
        return (0, e.and)(...u);
      }
    }
  };
  return vn.default = i, vn;
}
var $n = {}, ti;
function Ea() {
  if (ti) return $n;
  ti = 1, Object.defineProperty($n, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ oe(), r = {
    keyword: "unevaluatedItems",
    type: "array",
    schemaType: ["boolean", "object"],
    error: {
      message: ({ params: { len: i } }) => (0, e.str)`must NOT have more than ${i} items`,
      params: ({ params: { len: i } }) => (0, e._)`{limit: ${i}}`
    },
    code(i) {
      const { gen: o, schema: s, data: a, it: l } = i, h = l.items || 0;
      if (h === !0)
        return;
      const p = o.const("len", (0, e._)`${a}.length`);
      if (s === !1)
        i.setParams({ len: h }), i.fail((0, e._)`${p} > ${h}`);
      else if (typeof s == "object" && !(0, t.alwaysValidSchema)(l, s)) {
        const y = o.var("valid", (0, e._)`${p} <= ${h}`);
        o.if((0, e.not)(y), () => _(y, h)), i.ok(y);
      }
      l.items = !0;
      function _(y, v) {
        o.forRange("i", v, p, (S) => {
          i.subschema({ keyword: "unevaluatedItems", dataProp: S, dataPropType: t.Type.Num }, y), l.allErrors || o.if((0, e.not)(y), () => o.break());
        });
      }
    }
  };
  return $n.default = r, $n;
}
var ni;
function xa() {
  if (ni) return yn;
  ni = 1, Object.defineProperty(yn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ka(), t = /* @__PURE__ */ Ea(), n = [e.default, t.default];
  return yn.default = n, yn;
}
var bn = {}, wn = {}, ri;
function Pa() {
  if (ri) return wn;
  ri = 1, Object.defineProperty(wn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), n = {
    keyword: "format",
    type: ["number", "string"],
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: r }) => (0, e.str)`must match format "${r}"`,
      params: ({ schemaCode: r }) => (0, e._)`{format: ${r}}`
    },
    code(r, i) {
      const { gen: o, data: s, $data: a, schema: l, schemaCode: h, it: p } = r, { opts: _, errSchemaPath: y, schemaEnv: v, self: S } = p;
      if (!_.validateFormats)
        return;
      a ? b() : f();
      function b() {
        const $ = o.scopeValue("formats", {
          ref: S.formats,
          code: _.code.formats
        }), u = o.const("fDef", (0, e._)`${$}[${h}]`), g = o.let("fType"), C = o.let("format");
        o.if((0, e._)`typeof ${u} == "object" && !(${u} instanceof RegExp)`, () => o.assign(g, (0, e._)`${u}.type || "string"`).assign(C, (0, e._)`${u}.validate`), () => o.assign(g, (0, e._)`"string"`).assign(C, u)), r.fail$data((0, e.or)(c(), d()));
        function c() {
          return _.strictSchema === !1 ? e.nil : (0, e._)`${h} && !${C}`;
        }
        function d() {
          const m = v.$async ? (0, e._)`(${u}.async ? await ${C}(${s}) : ${C}(${s}))` : (0, e._)`${C}(${s})`, k = (0, e._)`(typeof ${C} == "function" ? ${m} : ${C}.test(${s}))`;
          return (0, e._)`${C} && ${C} !== true && ${g} === ${i} && !${k}`;
        }
      }
      function f() {
        const $ = S.formats[l];
        if (!$) {
          c();
          return;
        }
        if ($ === !0)
          return;
        const [u, g, C] = d($);
        u === i && r.pass(m());
        function c() {
          if (_.strictSchema === !1) {
            S.logger.warn(k());
            return;
          }
          throw new Error(k());
          function k() {
            return `unknown format "${l}" ignored in schema at path "${y}"`;
          }
        }
        function d(k) {
          const E = k instanceof RegExp ? (0, e.regexpCode)(k) : _.code.formats ? (0, e._)`${_.code.formats}${(0, e.getProperty)(l)}` : void 0, F = o.scopeValue("formats", { key: l, ref: k, code: E });
          return typeof k == "object" && !(k instanceof RegExp) ? [k.type || "string", k.validate, (0, e._)`${F}.validate`] : ["string", k, F];
        }
        function m() {
          if (typeof $ == "object" && !($ instanceof RegExp) && $.async) {
            if (!v.$async)
              throw new Error("async format in sync schema");
            return (0, e._)`await ${C}(${s})`;
          }
          return typeof g == "function" ? (0, e._)`${C}(${s})` : (0, e._)`${C}.test(${s})`;
        }
      }
    }
  };
  return wn.default = n, wn;
}
var oi;
function Aa() {
  if (oi) return bn;
  oi = 1, Object.defineProperty(bn, "__esModule", { value: !0 });
  const t = [(/* @__PURE__ */ Pa()).default];
  return bn.default = t, bn;
}
var He = {}, ii;
function Ra() {
  return ii || (ii = 1, Object.defineProperty(He, "__esModule", { value: !0 }), He.contentVocabulary = He.metadataVocabulary = void 0, He.metadataVocabulary = [
    "title",
    "description",
    "default",
    "deprecated",
    "readOnly",
    "writeOnly",
    "examples"
  ], He.contentVocabulary = [
    "contentMediaType",
    "contentEncoding",
    "contentSchema"
  ]), He;
}
var si;
function Na() {
  if (si) return Ot;
  si = 1, Object.defineProperty(Ot, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Hs(), t = /* @__PURE__ */ oa(), n = /* @__PURE__ */ ya(), r = /* @__PURE__ */ ba(), i = /* @__PURE__ */ Ca(), o = /* @__PURE__ */ xa(), s = /* @__PURE__ */ Aa(), a = /* @__PURE__ */ Ra(), l = [
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
  return Ot.default = l, Ot;
}
var _n = {}, vt = {}, ai;
function Fa() {
  if (ai) return vt;
  ai = 1, Object.defineProperty(vt, "__esModule", { value: !0 }), vt.DiscrError = void 0;
  var e;
  return (function(t) {
    t.Tag = "tag", t.Mapping = "mapping";
  })(e || (vt.DiscrError = e = {})), vt;
}
var ci;
function Oa() {
  if (ci) return _n;
  ci = 1, Object.defineProperty(_n, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ Fa(), n = /* @__PURE__ */ zn(), r = /* @__PURE__ */ In(), i = /* @__PURE__ */ oe(), s = {
    keyword: "discriminator",
    type: "object",
    schemaType: "object",
    error: {
      message: ({ params: { discrError: a, tagName: l } }) => a === t.DiscrError.Tag ? `tag "${l}" must be string` : `value of tag "${l}" must be in oneOf`,
      params: ({ params: { discrError: a, tag: l, tagName: h } }) => (0, e._)`{error: ${a}, tag: ${h}, tagValue: ${l}}`
    },
    code(a) {
      const { gen: l, data: h, schema: p, parentSchema: _, it: y } = a, { oneOf: v } = _;
      if (!y.opts.discriminator)
        throw new Error("discriminator: requires discriminator option");
      const S = p.propertyName;
      if (typeof S != "string")
        throw new Error("discriminator: requires propertyName");
      if (p.mapping)
        throw new Error("discriminator: mapping is not supported");
      if (!v)
        throw new Error("discriminator: requires oneOf keyword");
      const b = l.let("valid", !1), f = l.const("tag", (0, e._)`${h}${(0, e.getProperty)(S)}`);
      l.if((0, e._)`typeof ${f} == "string"`, () => $(), () => a.error(!1, { discrError: t.DiscrError.Tag, tag: f, tagName: S })), a.ok(b);
      function $() {
        const C = g();
        l.if(!1);
        for (const c in C)
          l.elseIf((0, e._)`${f} === ${c}`), l.assign(b, u(C[c]));
        l.else(), a.error(!1, { discrError: t.DiscrError.Mapping, tag: f, tagName: S }), l.endIf();
      }
      function u(C) {
        const c = l.name("valid"), d = a.subschema({ keyword: "oneOf", schemaProp: C }, c);
        return a.mergeEvaluated(d, e.Name), c;
      }
      function g() {
        var C;
        const c = {}, d = k(_);
        let m = !0;
        for (let I = 0; I < v.length; I++) {
          let P = v[I];
          if (P?.$ref && !(0, i.schemaHasRulesButRef)(P, y.self.RULES)) {
            const G = P.$ref;
            if (P = n.resolveRef.call(y.self, y.schemaEnv.root, y.baseId, G), P instanceof n.SchemaEnv && (P = P.schema), P === void 0)
              throw new r.default(y.opts.uriResolver, y.baseId, G);
          }
          const T = (C = P?.properties) === null || C === void 0 ? void 0 : C[S];
          if (typeof T != "object")
            throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${S}"`);
          m = m && (d || k(P)), E(T, I);
        }
        if (!m)
          throw new Error(`discriminator: "${S}" must be required`);
        return c;
        function k({ required: I }) {
          return Array.isArray(I) && I.includes(S);
        }
        function E(I, P) {
          if (I.const)
            F(I.const, P);
          else if (I.enum)
            for (const T of I.enum)
              F(T, P);
          else
            throw new Error(`discriminator: "properties/${S}" must have "const" or "enum"`);
        }
        function F(I, P) {
          if (typeof I != "string" || I in c)
            throw new Error(`discriminator: "${S}" values must be unique strings`);
          c[I] = P;
        }
      }
    }
  };
  return _n.default = s, _n;
}
var Sn = {};
const Ma = "https://json-schema.org/draft/2020-12/schema", Ta = "https://json-schema.org/draft/2020-12/schema", ja = { "https://json-schema.org/draft/2020-12/vocab/core": !0, "https://json-schema.org/draft/2020-12/vocab/applicator": !0, "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0, "https://json-schema.org/draft/2020-12/vocab/validation": !0, "https://json-schema.org/draft/2020-12/vocab/meta-data": !0, "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0, "https://json-schema.org/draft/2020-12/vocab/content": !0 }, Ia = "meta", za = "Core and Validation specifications meta-schema", Da = [{ $ref: "meta/core" }, { $ref: "meta/applicator" }, { $ref: "meta/unevaluated" }, { $ref: "meta/validation" }, { $ref: "meta/meta-data" }, { $ref: "meta/format-annotation" }, { $ref: "meta/content" }], qa = ["object", "boolean"], Va = "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.", La = { definitions: { $comment: '"definitions" has been replaced by "$defs".', type: "object", additionalProperties: { $dynamicRef: "#meta" }, deprecated: !0, default: {} }, dependencies: { $comment: '"dependencies" has been split and replaced by "dependentSchemas" and "dependentRequired" in order to serve their differing semantics.', type: "object", additionalProperties: { anyOf: [{ $dynamicRef: "#meta" }, { $ref: "meta/validation#/$defs/stringArray" }] }, deprecated: !0, default: {} }, $recursiveAnchor: { $comment: '"$recursiveAnchor" has been replaced by "$dynamicAnchor".', $ref: "meta/core#/$defs/anchorString", deprecated: !0 }, $recursiveRef: { $comment: '"$recursiveRef" has been replaced by "$dynamicRef".', $ref: "meta/core#/$defs/uriReferenceString", deprecated: !0 } }, Ba = {
  $schema: Ma,
  $id: Ta,
  $vocabulary: ja,
  $dynamicAnchor: Ia,
  title: za,
  allOf: Da,
  type: qa,
  $comment: Va,
  properties: La
}, Ua = "https://json-schema.org/draft/2020-12/schema", Ka = "https://json-schema.org/draft/2020-12/meta/applicator", Ha = { "https://json-schema.org/draft/2020-12/vocab/applicator": !0 }, Ga = "meta", Wa = "Applicator vocabulary meta-schema", Ja = ["object", "boolean"], Ya = { prefixItems: { $ref: "#/$defs/schemaArray" }, items: { $dynamicRef: "#meta" }, contains: { $dynamicRef: "#meta" }, additionalProperties: { $dynamicRef: "#meta" }, properties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, propertyNames: { format: "regex" }, default: {} }, dependentSchemas: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, propertyNames: { $dynamicRef: "#meta" }, if: { $dynamicRef: "#meta" }, then: { $dynamicRef: "#meta" }, else: { $dynamicRef: "#meta" }, allOf: { $ref: "#/$defs/schemaArray" }, anyOf: { $ref: "#/$defs/schemaArray" }, oneOf: { $ref: "#/$defs/schemaArray" }, not: { $dynamicRef: "#meta" } }, Xa = { schemaArray: { type: "array", minItems: 1, items: { $dynamicRef: "#meta" } } }, Za = {
  $schema: Ua,
  $id: Ka,
  $vocabulary: Ha,
  $dynamicAnchor: Ga,
  title: Wa,
  type: Ja,
  properties: Ya,
  $defs: Xa
}, Qa = "https://json-schema.org/draft/2020-12/schema", ec = "https://json-schema.org/draft/2020-12/meta/unevaluated", tc = { "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0 }, nc = "meta", rc = "Unevaluated applicator vocabulary meta-schema", oc = ["object", "boolean"], ic = { unevaluatedItems: { $dynamicRef: "#meta" }, unevaluatedProperties: { $dynamicRef: "#meta" } }, sc = {
  $schema: Qa,
  $id: ec,
  $vocabulary: tc,
  $dynamicAnchor: nc,
  title: rc,
  type: oc,
  properties: ic
}, ac = "https://json-schema.org/draft/2020-12/schema", cc = "https://json-schema.org/draft/2020-12/meta/content", lc = { "https://json-schema.org/draft/2020-12/vocab/content": !0 }, dc = "meta", uc = "Content vocabulary meta-schema", fc = ["object", "boolean"], pc = { contentEncoding: { type: "string" }, contentMediaType: { type: "string" }, contentSchema: { $dynamicRef: "#meta" } }, hc = {
  $schema: ac,
  $id: cc,
  $vocabulary: lc,
  $dynamicAnchor: dc,
  title: uc,
  type: fc,
  properties: pc
}, mc = "https://json-schema.org/draft/2020-12/schema", gc = "https://json-schema.org/draft/2020-12/meta/core", yc = { "https://json-schema.org/draft/2020-12/vocab/core": !0 }, vc = "meta", $c = "Core vocabulary meta-schema", bc = ["object", "boolean"], wc = { $id: { $ref: "#/$defs/uriReferenceString", $comment: "Non-empty fragments not allowed.", pattern: "^[^#]*#?$" }, $schema: { $ref: "#/$defs/uriString" }, $ref: { $ref: "#/$defs/uriReferenceString" }, $anchor: { $ref: "#/$defs/anchorString" }, $dynamicRef: { $ref: "#/$defs/uriReferenceString" }, $dynamicAnchor: { $ref: "#/$defs/anchorString" }, $vocabulary: { type: "object", propertyNames: { $ref: "#/$defs/uriString" }, additionalProperties: { type: "boolean" } }, $comment: { type: "string" }, $defs: { type: "object", additionalProperties: { $dynamicRef: "#meta" } } }, _c = { anchorString: { type: "string", pattern: "^[A-Za-z_][-A-Za-z0-9._]*$" }, uriString: { type: "string", format: "uri" }, uriReferenceString: { type: "string", format: "uri-reference" } }, Sc = {
  $schema: mc,
  $id: gc,
  $vocabulary: yc,
  $dynamicAnchor: vc,
  title: $c,
  type: bc,
  properties: wc,
  $defs: _c
}, Cc = "https://json-schema.org/draft/2020-12/schema", kc = "https://json-schema.org/draft/2020-12/meta/format-annotation", Ec = { "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0 }, xc = "meta", Pc = "Format vocabulary meta-schema for annotation results", Ac = ["object", "boolean"], Rc = { format: { type: "string" } }, Nc = {
  $schema: Cc,
  $id: kc,
  $vocabulary: Ec,
  $dynamicAnchor: xc,
  title: Pc,
  type: Ac,
  properties: Rc
}, Fc = "https://json-schema.org/draft/2020-12/schema", Oc = "https://json-schema.org/draft/2020-12/meta/meta-data", Mc = { "https://json-schema.org/draft/2020-12/vocab/meta-data": !0 }, Tc = "meta", jc = "Meta-data vocabulary meta-schema", Ic = ["object", "boolean"], zc = { title: { type: "string" }, description: { type: "string" }, default: !0, deprecated: { type: "boolean", default: !1 }, readOnly: { type: "boolean", default: !1 }, writeOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 } }, Dc = {
  $schema: Fc,
  $id: Oc,
  $vocabulary: Mc,
  $dynamicAnchor: Tc,
  title: jc,
  type: Ic,
  properties: zc
}, qc = "https://json-schema.org/draft/2020-12/schema", Vc = "https://json-schema.org/draft/2020-12/meta/validation", Lc = { "https://json-schema.org/draft/2020-12/vocab/validation": !0 }, Bc = "meta", Uc = "Validation vocabulary meta-schema", Kc = ["object", "boolean"], Hc = { type: { anyOf: [{ $ref: "#/$defs/simpleTypes" }, { type: "array", items: { $ref: "#/$defs/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, const: !0, enum: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/$defs/nonNegativeInteger" }, minLength: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, maxItems: { $ref: "#/$defs/nonNegativeInteger" }, minItems: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, maxContains: { $ref: "#/$defs/nonNegativeInteger" }, minContains: { $ref: "#/$defs/nonNegativeInteger", default: 1 }, maxProperties: { $ref: "#/$defs/nonNegativeInteger" }, minProperties: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, required: { $ref: "#/$defs/stringArray" }, dependentRequired: { type: "object", additionalProperties: { $ref: "#/$defs/stringArray" } } }, Gc = { nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { $ref: "#/$defs/nonNegativeInteger", default: 0 }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, Wc = {
  $schema: qc,
  $id: Vc,
  $vocabulary: Lc,
  $dynamicAnchor: Bc,
  title: Uc,
  type: Kc,
  properties: Hc,
  $defs: Gc
};
var li;
function Jc() {
  if (li) return Sn;
  li = 1, Object.defineProperty(Sn, "__esModule", { value: !0 });
  const e = Ba, t = Za, n = sc, r = hc, i = Sc, o = Nc, s = Dc, a = Wc, l = ["/properties"];
  function h(p) {
    return [
      e,
      t,
      n,
      r,
      i,
      _(this, o),
      s,
      _(this, a)
    ].forEach((y) => this.addMetaSchema(y, void 0, !1)), this;
    function _(y, v) {
      return p ? y.$dataMetaSchema(v, l) : v;
    }
  }
  return Sn.default = h, Sn;
}
var di;
function Yc() {
  return di || (di = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv2020 = void 0;
    const n = /* @__PURE__ */ Us(), r = /* @__PURE__ */ Na(), i = /* @__PURE__ */ Oa(), o = /* @__PURE__ */ Jc(), s = "https://json-schema.org/draft/2020-12/schema";
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
        super._addVocabularies(), r.default.forEach((v) => this.addVocabulary(v)), this.opts.discriminator && this.addKeyword(i.default);
      }
      _addDefaultMetaSchema() {
        super._addDefaultMetaSchema();
        const { $data: v, meta: S } = this.opts;
        S && (o.default.call(this, v), this.refs["http://json-schema.org/schema"] = s);
      }
      defaultMeta() {
        return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(s) ? s : void 0);
      }
    }
    t.Ajv2020 = a, e.exports = t = a, e.exports.Ajv2020 = a, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = a;
    var l = /* @__PURE__ */ jn();
    Object.defineProperty(t, "KeywordCxt", { enumerable: !0, get: function() {
      return l.KeywordCxt;
    } });
    var h = /* @__PURE__ */ te();
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
    var p = /* @__PURE__ */ yr();
    Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
      return p.default;
    } });
    var _ = /* @__PURE__ */ In();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return _.default;
    } });
  })(Pt, Pt.exports)), Pt.exports;
}
var Xc = /* @__PURE__ */ Yc();
const Zc = /* @__PURE__ */ Ps(Xc), Qc = "https://json-schema.org/draft/2020-12/schema", el = "https://raw.githubusercontent.com/omsf-eco-infra/gufe-viz/main/schema/gufe-viz.schema.json", tl = "gufe-viz payload", nl = "Python-to-TypeScript contract bridge for gufe visualizations. Source of truth both languages are downstream of it. This schema is not strictly versioned or published as it is only internally consumed by this codebase. Schema description: one schema object per gufe class: every $def named *Viz is the visualization form of exactly one GufeTokenizable, it carries that object's `gufe-key`. Every reference from one gufe object to another is that object's gufe key, and the objects themselves live in the `registry` on the root payload. So a ligand network's nodes are keys, a chemical system's components and a transformation's protocol are keys and each one resolves to a complete, drawable object. An alchemical network whose forty systems share one protein carries that PDB once and points at it forty times, and the browser can still drill into it, because what it points at is a whole ProteinComponentViz. This is a single-shot dump rather than a conversation with a server, so the registry travels with the payload.", rl = [{ $ref: "#/$defs/SmallMoleculeComponentViz" }, { $ref: "#/$defs/ProteinComponentViz" }, { $ref: "#/$defs/SolvatedPDBComponentViz" }, { $ref: "#/$defs/ProteinMembraneComponentViz" }, { $ref: "#/$defs/SolventComponentViz" }, { $ref: "#/$defs/UnknownComponentViz" }, { $ref: "#/$defs/ProtocolViz" }, { $ref: "#/$defs/LigandAtomMappingViz" }, { $ref: "#/$defs/LigandNetworkViz" }, { $ref: "#/$defs/ChemicalSystemViz" }, { $ref: "#/$defs/TransformationViz" }, { $ref: "#/$defs/AlchemicalNetworkViz" }], ol = /* @__PURE__ */ JSON.parse('{"GufeKey":{"title":"GufeKey","description":"A gufe key: the identity of a GufeTokenizable, of the form \'ClassName-<hex digest>\'. It is deterministic and repeatable within a software environment. Only its non-emptiness is checked","type":"string","minLength":1},"ComponentKey":{"title":"ComponentKey","description":"A gufe key naming a ComponentViz in the registry. Identical to GufeKey at validation time: JSON Schema has no way to say \'this string is the gufe-key of an entry in that array, and that entry has this type\', because that is a join across two parts of the document. What the name buys is that the referent\'s type is stated in the contract and carried into the generated TypeScript, instead of living only in a test and a view.","$ref":"#/$defs/GufeKey"},"SmallMoleculeComponentKey":{"title":"SmallMoleculeComponentKey","description":"A gufe key naming a SmallMoleculeComponentViz in the registry. Resolving it yields the whole molecule, SDF included. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ChemicalSystemKey":{"title":"ChemicalSystemKey","description":"A gufe key naming a ChemicalSystemViz in the registry. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ProtocolKey":{"title":"ProtocolKey","description":"A gufe key naming a ProtocolViz in the registry. Every transformation of a network usually names the same one. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"Registry":{"title":"Registry","description":"The pool of gufe objects this payload refers to by key, each a complete payload object in its own right. Entries are unique by `gufe-key` and sorted by (type, gufe-key) so a committed fixture is byte-stable. JSON Schema cannot express \'unique by a property\' or \'every reference resolves\', so both are covered by tests on the Python side and degraded over by the views.","type":"array","items":{"oneOf":[{"$ref":"#/$defs/ComponentViz"},{"$ref":"#/$defs/ProtocolViz"},{"$ref":"#/$defs/ChemicalSystemViz"}]}},"ComponentViz":{"title":"ComponentViz","description":"Any single chemical-system component","oneOf":[{"$ref":"#/$defs/SmallMoleculeComponentViz"},{"$ref":"#/$defs/ProteinComponentViz"},{"$ref":"#/$defs/SolvatedPDBComponentViz"},{"$ref":"#/$defs/ProteinMembraneComponentViz"},{"$ref":"#/$defs/SolventComponentViz"},{"$ref":"#/$defs/UnknownComponentViz"}]},"SmallMoleculeComponentViz":{"title":"SmallMoleculeComponentViz","description":"A small molecule, carried as a complete SDF record.","type":"object","properties":{"type":{"const":"SmallMoleculeComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"sdf":{"type":"string","minLength":1,"description":"Complete inline SDF record, including the conformer."},"smiles":{"type":"string"},"total_charge":{"type":"integer","description":"Net formal charge. Displayed, never recomputed from the SDF."}},"required":["type","gufe-key","name","sdf","smiles","total_charge"],"additionalProperties":false},"ProteinComponentViz":{"title":"ProteinComponentViz","description":"A protein, carried as a complete PDB record.","type":"object","properties":{"type":{"const":"ProteinComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolvatedPDBComponentViz":{"title":"SolvatedPDBComponentViz","description":"A protein with explicit solvent. A distinct type rather than a flag on ProteinComponentViz, because the discriminator is what a view dispatches on and the presence of waters changes what a sensible default representation is.","type":"object","properties":{"type":{"const":"SolvatedPDBComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation, including explicit solvent."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"ProteinMembraneComponentViz":{"title":"ProteinMembraneComponentViz","description":"A protein embedded in a membrane.","type":"object","properties":{"type":{"const":"ProteinMembraneComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation of the protein and membrane system."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolventComponentViz":{"title":"SolventComponentViz","description":"Bulk solvent settings. There is no structure to draw, so these are flat fields suitable for rendering as a settings card.","type":"object","properties":{"type":{"const":"SolventComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"smiles":{"type":"string","minLength":1},"positive_ion":{"type":"string"},"negative_ion":{"type":"string"},"neutralize":{"type":"boolean"},"ion_concentration":{"type":"string","description":"Display-form concentration with units, for example \'0.15 molar\'. A string rather than a number because the unit is part of the value and the view only ever prints it."}},"required":["type","gufe-key","name","smiles","positive_ion","negative_ion","neutralize","ion_concentration"],"additionalProperties":false},"UnknownComponentViz":{"title":"UnknownComponentViz","description":"The graceful fallback for a component type this build does not recognize. gufe supports custom Component subclasses, so meeting one is an expected outcome rather than an error, and the browser answers it with \'sorry, there is no visualization for this\'. This covers an unrecognized type only: a recognized component whose serializer fails is a bug, and raises in Python rather than arriving here wearing a disguise.","type":"object","properties":{"type":{"const":"UnknownComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The gufe class name, so the panel can say which type it could not draw."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ProtocolViz":{"title":"ProtocolViz","description":"A gufe Protocol, named. Every transformation in an alchemical network usually shares one, so this is a registry entry that many edges point at rather than a class name repeated per edge. Settings are deliberately absent for now: they are large, deeply nested, and nothing draws them yet, adding a `settings` field later is additive and breaks nothing.","type":"object","properties":{"type":{"const":"ProtocolViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The Protocol\'s class name, which is what identifies it to a reader, a Protocol has no name of its own, so `name` is usually empty."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ChemicalSystemViz":{"title":"ChemicalSystemViz","description":"A gufe ChemicalSystem: labels mapped to the gufe keys of its components.","type":"object","properties":{"type":{"const":"ChemicalSystemViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"components":{"type":"object","description":"ChemicalSystem labels mapped to the gufe keys of the components in the registry.","additionalProperties":{"$ref":"#/$defs/ComponentKey"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","components"],"additionalProperties":false},"AtomMapping":{"title":"AtomMapping","description":"Atom index correspondence from molecule A to molecule B, as a list of index pairs. A list rather than an object keyed by A\'s index, because JSON object keys can only be strings: keying by index would put decimal strings such as \'12\' in the payload and leave both languages casting them back to integers, and it is Python\'s dict-of-int shape only by resemblance. As a list, both indices stay integers, and \'an entry has a B index for every A index\' becomes a `required` the schema states rather than a convention a reader has to trust. Pairs are ordered by `index_A` so a committed fixture is byte-stable.","type":"array","items":{"type":"object","properties":{"index_A":{"type":"integer","minimum":0,"description":"An atom index in molecule A."},"index_B":{"type":"integer","minimum":0,"description":"The atom index in molecule B that it maps to."}},"required":["index_A","index_B"],"additionalProperties":false}},"Annotations":{"title":"Annotations","description":"Free-form mapping metadata. gufe puts nothing here by design and every mapper picks its own keys, so this is deliberately open. Values are whatever survived being made JSON-safe. Displayed but never interpreted, with the single exception of \'score\'.","type":"object"},"LigandAtomMappingViz":{"title":"LigandAtomMappingViz","description":"One atom mapping between two small molecules. This is also what an edge of a ligand network is because the two endpoints are gufe keys either way: standalone they resolve in this object\'s own registry, and in a network they resolve in the network\'s, where they are the same entries the nodes name. `componentA` and `componentB` are the molecules the two sides of `componentA_to_componentB` index into: an `index_A` is an atom of the SmallMoleculeComponentViz that `componentA` names, and an `index_B` an atom of `componentB`\'s.","type":"object","properties":{"type":{"const":"LigandAtomMappingViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"componentA":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentB":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentA_to_componentB":{"$ref":"#/$defs/AtomMapping"},"score":{"type":["number","null"],"description":"The \'score\' annotation when it is a plain number, otherwise null. This is the one annotation key that is interpreted rather than displayed: it drives the edge colouring and the force layout\'s link distance."},"annotations":{"$ref":"#/$defs/Annotations"},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","componentA","componentB","componentA_to_componentB","score","annotations"],"additionalProperties":false},"LigandNetworkViz":{"title":"LigandNetworkViz","description":"A ligand network: the ligands in the registry, the nodes as keys into it, and the mappings as edges. Deliberately not gufe\'s GraphML: that format embeds a gufe to_json moldict per node, so forwarding it would relocate the decoding problem into the browser rather than avoid it.","type":"object","properties":{"type":{"const":"LigandNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ligand, resolved in `registry`.","items":{"$ref":"#/$defs/SmallMoleculeComponentKey"}},"edges":{"type":"array","description":"The mappings, whose `componentA` and `componentB` name nodes of this network. JSON Schema cannot express that referential constraint, so a Python test covers it, and the view drops a dangling edge with a banner rather than failing.","items":{"$ref":"#/$defs/LigandAtomMappingViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false},"TransformationViz":{"title":"TransformationViz","description":"A transformation between two chemical systems, both named by gufe key, as is its protocol: `stateA` is the system it starts from, `stateB` the one it ends at, and every edge of a network usually names the same protocol. This is also what an edge of an alchemical network is (there is no separate edge type) because `stateA` and `stateB` are keys either way, and in a network they are the keys the nodes name. NonTransformation uses this type too: it exposes the same stateA and stateB properties, both its single system, so it renders as a diff with no differences.","type":"object","properties":{"type":{"const":"TransformationViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"protocol":{"$ref":"#/$defs/ProtocolKey"},"stateA":{"$ref":"#/$defs/ChemicalSystemKey"},"stateB":{"$ref":"#/$defs/ChemicalSystemKey"},"mappings":{"type":"array","items":{"$ref":"#/$defs/LigandAtomMappingViz"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","protocol","stateA","stateB","mappings"],"additionalProperties":false},"AlchemicalNetworkViz":{"title":"AlchemicalNetworkViz","description":"A graph of chemical systems joined by transformations. What repeats here is not the nodes and edges themselves but what they are made of: in practice every system shares one protein and every transformation shares one protocol. Both live in the registry, once, as whole objects so this view can show composition and topology while still letting a reader open a node and see the protein.","type":"object","properties":{"type":{"const":"AlchemicalNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ChemicalSystem, resolved in `registry`.","items":{"$ref":"#/$defs/ChemicalSystemKey"}},"edges":{"type":"array","description":"The transformations, whose `stateA` and `stateB` name nodes of this network.","items":{"$ref":"#/$defs/TransformationViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false}}'), wr = {
  $schema: Qc,
  $id: el,
  title: tl,
  description: nl,
  oneOf: rl,
  $defs: ol
}, Ou = [
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
], _r = wr.$id, Sr = new Zc({ allErrors: !0, strict: !1 });
Sr.addSchema(wr, _r);
const ui = Sr.getSchema(_r), Wi = Object.entries(wr.$defs).filter(
  ([e, t]) => t.properties?.type?.const === e
).map(([e]) => e).sort(), Mu = Wi, Cr = /* @__PURE__ */ new Map();
for (const e of Wi) {
  const t = Sr.getSchema(`${_r}#/$defs/${e}`);
  t && Cr.set(e, t);
}
const dr = { valid: !0, issues: [] };
function ur(e) {
  return (e ?? []).map((t) => ({
    path: t.instancePath || "",
    message: t.keyword === "additionalProperties" ? `unknown property ${JSON.stringify(t.params.additionalProperty)}` : t.message ?? "is invalid"
  }));
}
function il(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return {
      valid: !1,
      issues: [{ path: "", message: "must be a JSON object" }]
    };
  const t = e.type, n = typeof t == "string" ? Cr.get(t) : void 0;
  return n ? n(e) ? dr : { valid: !1, issues: ur(n.errors) } : ui(e) ? dr : { valid: !1, issues: ur(ui.errors) };
}
function Tu(e, t) {
  const n = Cr.get(e);
  return n ? n(t) ? dr : { valid: !1, issues: ur(n.errors) } : {
    valid: !1,
    issues: [
      { path: "", message: `unknown payload type ${JSON.stringify(e)}` }
    ]
  };
}
function sl(e, t = 8) {
  const n = e.slice(0, t).map((r) => `${r.path || "(root)"}: ${r.message}`);
  return e.length > t && n.push(`... and ${e.length - t} more`), n.join(`
`);
}
const kr = {
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
  if (!kr[t]) return al(t);
  const { valid: n, issues: r } = il(e);
  return n ? null : {
    message: `This payload says it is a ${t}, but it does not match the gufe-viz schema.`,
    detail: sl(r)
  };
}
function al(e) {
  const t = Object.keys(kr).sort().join(", ");
  return {
    message: `Sorry, there is no visualization for ${e} yet. This build can draw: ${t}.`
  };
}
function ju(e) {
  return Ji(e)?.message ?? null;
}
class cl extends xe {
  placeholder() {
    return "Waiting for data...";
  }
  renderView(t, n) {
    Es("payload", n, this);
    const r = Ji(n);
    if (r)
      return t.appendChild(ll(r, n)), {};
    const i = n.type, o = kr[i], s = document.createElement(o);
    return s.style.cssText = "flex:1;min-height:0;min-width:0;", s.payload = n, t.appendChild(s), {
      onResize: () => s.resize?.(),
      // Removing the child fires its own `disconnectedCallback`, which is where
      // its viewers and observers are released
      cleanup: () => s.remove()
    };
  }
}
function ll(e, t) {
  const n = j(
    "div",
    "flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:32px;"
  );
  n.appendChild(le(e.message));
  const r = (o, s) => j(
    "div",
    "max-width:640px;padding:8px 12px;border-radius:6px;font-size:11px;white-space:pre-wrap;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;overflow-wrap:anywhere;" + (s ? `background:${O.warnBg};color:${O.warnFg};border:1px solid ${O.warnBorder};` : `background:${O.panelBg};color:${O.textMuted2};border:1px solid ${O.cardBorder};`),
    o
  );
  e.detail && n.appendChild(r(e.detail, !0));
  const i = dl(t);
  return i && n.appendChild(r(i, !1)), n;
}
function dl(e) {
  if (e == null || typeof e != "object") return null;
  const t = e, n = [];
  typeof t.type == "string" && n.push(`type: ${De(t.type)}`), typeof t.name == "string" && t.name && n.push(`name: ${De(t.name)}`);
  const r = Object.keys(e);
  return r.length && n.push(
    `keys: ${r.slice(0, 12).join(", ")}${r.length > 12 ? ", ..." : ""}`
  ), n.length ? n.join(`
`) : null;
}
Pe("gufe-view", cl);
const Me = "gufe-viz:", dt = /* @__PURE__ */ new Map();
let Cn = null;
function ul() {
  const e = globalThis.localStorage;
  return e || globalThis.window?.localStorage;
}
function Dn() {
  if (Cn === !1) return null;
  const e = ul();
  if (!e)
    return Cn = !1, null;
  try {
    const t = `${Me}__probe`;
    return e.setItem(t, "1"), e.removeItem(t), Cn = !0, e;
  } catch {
    return Cn = !1, null;
  }
}
function fl(e) {
  const t = Dn();
  if (!t) return dt.get(Me + e) ?? null;
  try {
    return t.getItem(Me + e);
  } catch {
    return null;
  }
}
function pl(e, t) {
  const n = Dn();
  if (!n) {
    dt.set(Me + e, t);
    return;
  }
  try {
    n.setItem(Me + e, t);
  } catch {
    dt.set(Me + e, t);
  }
}
function qn(e, t, n) {
  return {
    key: e,
    get() {
      const r = fl(e);
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
        pl(e, JSON.stringify(r));
      } catch {
      }
    }
  };
}
function ut(e, t, n) {
  return qn(e, t, (r) => typeof r == "string" && n.includes(r));
}
function _t(e, t) {
  return qn(e, t, (n) => typeof n == "boolean");
}
function hl(e, t, n = -1 / 0, r = 1 / 0) {
  return qn(
    e,
    t,
    (i) => typeof i == "number" && Number.isFinite(i) && i >= n && i <= r
  );
}
function ml(e, t = "") {
  return qn(e, t, (n) => typeof n == "string");
}
function Yi() {
  const e = {}, t = Dn(), n = t ? Array.from({ length: t.length }, (r, i) => t.key(i)).filter(
    (r) => typeof r == "string"
  ) : Array.from(dt.keys());
  for (const r of n) {
    if (!r.startsWith(Me)) continue;
    const i = t ? t.getItem(r) : dt.get(r) ?? null;
    if (i !== null)
      try {
        e[r.slice(Me.length)] = JSON.parse(i);
      } catch {
        e[r.slice(Me.length)] = i;
      }
  }
  return e;
}
function gl() {
  const e = Dn();
  if (e)
    for (const t of Object.keys(Yi()))
      try {
        e.removeItem(Me + t);
      } catch {
      }
  dt.clear();
}
const Er = {
  threeDmol: "https://3dmol.org/build/3Dmol-min.js",
  rdkit: "https://unpkg.com/@rdkit/rdkit/dist/RDKit_minimal.js",
  d3: "https://cdn.jsdelivr.net/npm/d3@7/+esm"
};
function xr(e) {
  const t = globalThis.__gufeEngines?.[e];
  return t ? Promise.resolve(t) : null;
}
function Xi(e, t) {
  return new Promise((n, r) => {
    const i = document.createElement("script");
    i.src = e, i.onload = () => n(), i.onerror = () => r(new Error(`Failed to load ${t}`)), document.head.appendChild(i);
  });
}
let We = null, nt = null;
function Pr() {
  if (nt) return nt;
  const e = xr("threeDmol");
  return e ? (nt = e.then((t) => We = t || window.$3Dmol), nt) : (nt = (async () => {
    if (window.$3Dmol) return We = window.$3Dmol;
    if (await Xi(Er.threeDmol, "3Dmol.js"), !window.$3Dmol) throw new Error("3Dmol.js loaded but $3Dmol is undefined");
    return We = window.$3Dmol;
  })(), nt);
}
let rt = null;
function Ar() {
  if (rt) return rt;
  const e = xr("rdkit");
  return e ? (rt = e.then((t) => window.RDKit = t), rt) : (rt = (async () => {
    if (window.RDKit) return window.RDKit;
    if (await Xi(Er.rdkit, "RDKit"), !window.initRDKitModule) throw new Error("RDKit loaded but initRDKitModule is undefined");
    return window.RDKit = await window.initRDKitModule();
  })(), rt);
}
let tr = null;
function Zi() {
  if (!tr) {
    const e = Er.d3;
    tr = xr("d3") ?? import(
      /* @vite-ignore */
      e
    );
  }
  return tr;
}
function Rr(e, t) {
  let n = !1, r = !1;
  const i = () => {
    n = !0;
  }, o = () => {
    n = !1;
  }, s = (a) => {
    a.stopPropagation();
    const l = a.ctrlKey || a.metaKey;
    if (n || l) {
      (t.onZoom(a) !== !1 || l) && a.preventDefault();
      return;
    }
    t.hint && !r && (r = !0, vl(e, t.hint));
  };
  return e.addEventListener("wheel", s, { passive: !1, capture: !0 }), e.addEventListener("pointerdown", i), e.addEventListener("pointerenter", i), e.addEventListener("pointerleave", o), {
    cleanup() {
      e.removeEventListener("wheel", s, { capture: !0 }), e.removeEventListener("pointerdown", i), e.removeEventListener("pointerenter", i), e.removeEventListener("pointerleave", o);
    }
  };
}
const yl = 1600;
function vl(e, t) {
  const n = j(
    "div",
    "position:absolute;bottom:12px;left:50%;transform:translateX(-50%);z-index:30;pointer-events:none;padding:5px 12px;border-radius:6px;font-size:11px;white-space:nowrap;background:rgba(0,0,0,0.72);color:#ffffff;transition:opacity .3s ease;",
    t
  );
  e.appendChild(n), setTimeout(() => {
    n.style.opacity = "0", setTimeout(() => n.remove(), 300);
  }, yl);
}
const $l = { min: 0.25, max: 12 }, bl = 150;
function fi(e) {
  const t = e.getView?.()?.[3];
  return typeof t != "number" || !Number.isFinite(t) ? NaN : (e.CAMERA_Z ?? bl) - t;
}
function wl(e, t = $l) {
  const n = fi(e), r = Number.isFinite(n) && n > 0;
  r && e.setZoomLimits?.(n / t.max, n / t.min);
  let i = 1;
  const o = () => {
    if (!r) return i;
    const s = fi(e);
    return Number.isFinite(s) && s > 0 ? n / s : i;
  };
  return {
    zoomBy(s) {
      const a = o(), l = Math.min(t.max, Math.max(t.min, a * s)), h = l / a;
      return !Number.isFinite(h) || Math.abs(h - 1) < 1e-9 ? !1 : (i = l, e.zoom(h), e.render(), !0);
    },
    reset() {
      i = 1, e.zoomTo(), e.render();
    },
    level: o
  };
}
const _l = 2e-3;
function Sl(e) {
  return Math.exp(-e.deltaY * _l);
}
function Qi(e, t, n = {}) {
  const r = wl(t, n.bounds), i = Rr(e, {
    hint: n.hint ?? "Click or hold Ctrl to zoom",
    onZoom: (o) => r.zoomBy(Sl(o))
  });
  return { ...r, cleanup: i.cleanup };
}
function Nr(e, t = "Reset view") {
  const n = j("button", kt, "Reset");
  return n.title = t, n.setAttribute("aria-label", t), n.onclick = e, n;
}
const nr = {
  elementChange: "#005AB5",
  uniqueAtom: "#DC3220",
  elementChange3D: "0x005AB5",
  uniqueAtom3D: "0xDC3220"
}, Iu = [
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
], zu = "hsv", V = [0, 0, 0], Cl = {
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
}, kl = "rdkit", El = !0, xl = !0, Pl = !0, Al = !0, Rl = "rdkit", Nl = "filled", Fl = 0.42, Ol = 1.5, Ml = !0, Tl = "show", jl = "mono", Il = 0.51, zl = 0.74, Dl = 1.6, ql = 1.7, Vl = 5, Ll = 0.3, Bl = "#d62828", Ul = "#d62828", Kl = "#015ab5", Hl = !1, Gl = "", Wl = "#7c3aed", Jl = {
  layout: kl,
  alignPair: El,
  atomNumbers: xl,
  createdDestroyed: Pl,
  modified: Al,
  style: Rl,
  circles: Nl,
  circleRadius: Fl,
  circleStroke: Ol,
  boundary: Ml,
  hydrogens: Tl,
  elementColors: jl,
  numScale: Il,
  labelScale: zl,
  bondWidth: Dl,
  markWidth: ql,
  haloWidth: Vl,
  haloOpacity: Ll,
  destroyedColor: Bl,
  createdColor: Ul,
  modifiedColor: Kl,
  stereo: Hl,
  customSpec: Gl,
  customColor: Wl
}, Yl = {
  version: 1,
  layout: "rdkit",
  alignPair: !0,
  style: "rdkit",
  createdDestroyed: !0,
  modified: !0,
  destroyedColor: nr.uniqueAtom,
  createdColor: nr.uniqueAtom,
  modifiedColor: nr.elementChange,
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
}, Xl = ["rdkit", "coordgen", "conformer"], Zl = ["rdkit", "recolor", "halo"], Ql = ["outline", "filled", "off"], ed = ["show", "dim", "hide"], td = ["cpk", "mono"], nd = {
  circleRadius: [0.12, 0.6],
  circleStroke: [0.4, 4],
  numScale: [0.15, 0.9],
  labelScale: [0.3, 0.9],
  bondWidth: [0.5, 5],
  markWidth: [0.5, 6],
  haloWidth: [2, 26],
  haloOpacity: [0.1, 1]
}, rd = /^#[0-9a-fA-F]{6}$/;
function $t(e, t, n) {
  return typeof e == "string" && t.includes(e) ? e : n;
}
function Ve(e, t, n) {
  if (typeof e != "number" || !isFinite(e)) return n;
  const r = nd[t];
  return r ? Math.min(r[1], Math.max(r[0], e)) : e;
}
const ot = (e, t) => typeof e == "boolean" ? e : t, kn = (e, t) => typeof e == "string" && rd.test(e) ? e : t;
function od(e) {
  const t = e && typeof e == "object" ? e : {}, n = Yl;
  return {
    version: 1,
    layout: $t(t.layout, Xl, n.layout),
    alignPair: ot(t.alignPair, n.alignPair),
    style: $t(t.style, Zl, n.style),
    createdDestroyed: ot(t.createdDestroyed, n.createdDestroyed),
    modified: ot(t.modified, n.modified),
    destroyedColor: kn(t.destroyedColor, n.destroyedColor),
    createdColor: kn(t.createdColor, n.createdColor),
    modifiedColor: kn(t.modifiedColor, n.modifiedColor),
    boundary: ot(t.boundary, n.boundary),
    circles: $t(t.circles, Ql, n.circles),
    circleRadius: Ve(t.circleRadius, "circleRadius", n.circleRadius),
    circleStroke: Ve(t.circleStroke, "circleStroke", n.circleStroke),
    hydrogens: $t(t.hydrogens, ed, n.hydrogens),
    elementColors: $t(t.elementColors, td, n.elementColors),
    atomNumbers: ot(t.atomNumbers, n.atomNumbers),
    stereo: ot(t.stereo, n.stereo),
    numScale: Ve(t.numScale, "numScale", n.numScale),
    labelScale: Ve(t.labelScale, "labelScale", n.labelScale),
    bondWidth: Ve(t.bondWidth, "bondWidth", n.bondWidth),
    markWidth: Ve(t.markWidth, "markWidth", n.markWidth),
    haloWidth: Ve(t.haloWidth, "haloWidth", n.haloWidth),
    haloOpacity: Ve(t.haloOpacity, "haloOpacity", n.haloOpacity),
    customSpec: typeof t.customSpec == "string" ? t.customSpec : n.customSpec,
    customColor: kn(t.customColor, n.customColor)
  };
}
const ct = od(Jl);
function id(e) {
  const t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), r = 5e3;
  for (const i of String(e || "").split(/[,\s;]+/).filter(Boolean)) {
    const o = /^([LlRr])[:=](.*)$/.exec(i), s = o ? o[1].toLowerCase() === "l" ? "left" : "right" : "both", a = o ? o[2] : i, l = (p) => {
      s !== "right" && t.add(p), s !== "left" && n.add(p);
    }, h = /^(\d+)-(\d+)$/.exec(a);
    if (h) {
      const p = Math.min(+h[1], +h[2]), _ = Math.min(Math.max(+h[1], +h[2]), p + r - 1);
      for (let y = p; y <= _; y++) l(y);
    } else /^\d+$/.test(a) && l(+a);
  }
  return { left: t, right: n };
}
function rr(e, t, n) {
  const r = [];
  for (let i = 0; i < e.bonds.length; i++) {
    const [o, s] = e.bonds[i], a = t.has(o), l = t.has(s);
    (n ? a || l : a && l) && r.push(i);
  }
  return r;
}
function pi(e) {
  const t = e.replace("#", "");
  return [
    parseInt(t.slice(0, 2), 16) / 255,
    parseInt(t.slice(2, 4), 16) / 255,
    parseInt(t.slice(4, 6), 16) / 255
  ];
}
function sd(e, t) {
  return [
    1 - (1 - e[0]) * (1 - t),
    1 - (1 - e[1]) * (1 - t),
    1 - (1 - e[2]) * (1 - t)
  ];
}
function ad(e, t, n) {
  const r = new Set(t.atoms), i = new Set(rr(e, r, !0));
  return {
    deletions: rr(e, r, n),
    changes: rr(e, new Set(t.elements), n).filter((o) => !i.has(o))
  };
}
function cd(e, t, n, r) {
  const i = ad(t, n, e.boundary), o = [];
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
let it = null;
function ld(e) {
  if (it !== null) return it;
  it = !1;
  let t = null;
  try {
    t = e.get_mol("CC"), t && (it = /class\s*=\s*['"][^'"]*bond-0/.test(t.get_svg(60, 60)));
  } catch {
  } finally {
    if (t)
      try {
        t.delete();
      } catch {
      }
  }
  return it || console.warn("[gufe-viz] this RDKit build emits no bond/atom classes - drawing without bond marking"), it;
}
function dd(e, t) {
  return e.style === "rdkit" ? "rdkit" : ld(t) ? e.style : "rdkit";
}
function ud(e, t, n, r, i, o) {
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
  e.elementColors === "mono" && (s.atomColourPalette = Cl), i === "rdkit" && (s.continuousHighlight = !1);
  const a = {}, l = {}, h = {};
  for (const v of n) {
    const S = pi(v.color);
    if (i === "rdkit") for (const f of v.bonds) h[f] = S;
    if (i === "recolor" && e.circles === "off") continue;
    const b = i === "recolor" && e.circles === "filled" ? sd(S, 0.7) : S;
    for (const f of v.atoms)
      a[f] = b, l[f] = e.circleRadius;
  }
  const p = pi(e.customColor);
  for (const v of r)
    v < o && (a[v] = p, l[v] = e.circleRadius);
  const _ = Object.keys(a).map(Number);
  _.length && (s.atoms = _, s.highlightAtomColors = a, s.highlightAtomRadii = l);
  const y = Object.keys(h).map(Number);
  return y.length && (s.bonds = y, s.highlightBondColors = h), s;
}
function fd(e, t, n, r) {
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
const pd = "http://www.w3.org/2000/svg";
function es(e, t) {
  return Array.from(e.querySelectorAll(`[class~="bond-${t}"]`));
}
function Fr(e, t, n) {
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
function hi(e, t, n, r, i, o) {
  for (const s of r)
    for (const a of es(e, s)) {
      const l = a.style;
      ts(a) ? l.fill = i : (l.stroke = i, l.strokeWidth = `${t.markWidth}px`);
    }
  if (o)
    for (const s of n)
      for (const a of Fr(e, s, !1)) a.style.fill = o;
}
function hd(e, t, n, r) {
  const i = e.ownerDocument;
  if (!i) return;
  const o = i.createElementNS(pd, "g");
  o.setAttribute("data-gufe-halo", "1"), o.style.opacity = String(t.haloOpacity);
  for (const a of n)
    for (const l of es(e, a)) {
      if (ts(l)) continue;
      const h = l.cloneNode(!0);
      h.removeAttribute("class"), h.style.fill = "none", h.style.stroke = r, h.style.strokeWidth = `${t.haloWidth}px`, h.style.strokeLinecap = "round", h.style.strokeLinejoin = "round", h.style.strokeOpacity = "1", o.appendChild(h);
    }
  if (!o.childNodes.length) return;
  const s = e.querySelector("rect");
  s?.nextSibling ? e.insertBefore(o, s.nextSibling) : s ? e.appendChild(o) : e.insertBefore(o, e.firstChild);
}
function md(e, t, n, r, i) {
  for (const o of n)
    if (!r.has(o))
      for (const s of Fr(e, o, !0)) {
        const a = s.style;
        a.fill = "none", a.stroke = i, a.strokeWidth = `${t.circleStroke}px`;
      }
}
function gd(e, t, n, r, i) {
  for (const o of n)
    if (!r.has(o))
      for (const s of Fr(e, o, !0)) {
        const a = s.style;
        a.stroke = i, a.strokeWidth = `${t.circleStroke}px`;
      }
}
function yd(e, t, n) {
  if (n.hydrogens !== "show") {
    for (let r = 0; r < t.symbols.length; r++)
      if (t.symbols[r] === "H")
        for (const i of Array.from(e.querySelectorAll(`[class~="atom-${r}"]`))) {
          const o = i.style;
          n.hydrogens === "hide" ? o.display = "none" : o.opacity = "0.22";
        }
  }
}
function vd(e, t, n, r, i, o) {
  if (o !== "rdkit")
    for (const s of r)
      if (o === "recolor") {
        const a = n.circles === "filled";
        hi(
          e,
          n,
          s.atoms,
          s.bonds,
          s.color,
          a && s.blackLabelOnFill ? "#000000" : s.color
        ), n.circles === "outline" ? md(e, n, s.atoms, i, s.color) : a && s.edgeOnFill && gd(e, n, s.atoms, i, s.color);
      } else
        hd(e, n, s.bonds, s.color), hi(e, n, s.atoms, s.bonds, s.color, null);
  yd(e, t, n);
}
const Vn = `
`, fr = "$$$$";
function pr(e, t) {
  if (!e || !e.trim()) throw new Error("empty SDF");
  const n = e.replace(/\r/g, "").split(Vn);
  if (n.length < 4) throw new Error("SDF too short");
  const r = n[3];
  if (r.indexOf("V3000") !== -1) throw new Error("V3000 molfiles are not supported");
  const i = parseInt(r.substring(0, 3), 10), o = parseInt(r.substring(3, 6), 10);
  if (!isFinite(i) || i <= 0) throw new Error(`bad counts line: ${r}`);
  const s = [], a = [];
  for (let p = 0; p < i; p++) {
    const _ = n[4 + p];
    if (_ == null) throw new Error("truncated atom block");
    s.push([
      parseFloat(_.substring(0, 10)) || 0,
      parseFloat(_.substring(10, 20)) || 0,
      parseFloat(_.substring(20, 30)) || 0
    ]), a.push(_.substring(31, 34).trim() || "X");
  }
  const l = [];
  for (let p = 0; p < (isFinite(o) ? o : 0); p++) {
    const _ = n[4 + i + p];
    if (_ == null) break;
    const y = parseInt(_.substring(0, 3), 10), v = parseInt(_.substring(3, 6), 10), S = parseInt(_.substring(6, 9), 10);
    !isFinite(y) || !isFinite(v) || l.push([y - 1, v - 1, isFinite(S) ? S : 1]);
  }
  return { name: (n[0] || "").trim() || t || "molecule", symbols: a, bonds: l, coords: s };
}
function $d(e) {
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
  return r.push("M  END"), r.join(Vn);
}
const bd = (e) => `${$d(e)}${Vn}${fr}`, wd = (e) => e.indexOf(fr) >= 0 ? e : `${e}${Vn}${fr}`;
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
const mi = [
  { id: "stick", label: "Stick", title: "Sticks only" },
  { id: "ball", label: "Ball+Stick", title: "Ball and stick" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" }
], gi = {
  stick: { stick: { radius: 0.15, colorscheme: "Jmol" } },
  ball: { stick: { radius: 0.12, colorscheme: "Jmol" }, sphere: { scale: 0.28, colorscheme: "Jmol" } },
  sphere: { sphere: { scale: 1, colorscheme: "Jmol" } }
}, yi = 400;
class _d extends xe {
  placeholder() {
    return "Waiting for a SmallMoleculeComponent payload...";
  }
  renderView(t, n) {
    const r = n.sdf, i = n.name ?? "", o = n.smiles, s = n.total_charge;
    t.appendChild(Be(i || "Unnamed molecule"));
    const a = j("div", "flex:1;display:flex;flex-direction:row;overflow:hidden;min-height:0;");
    t.appendChild(a);
    const l = j("div", "flex:1 1 50%;min-width:0;display:flex;flex-direction:column;"), h = j("div", "flex:1 1 50%;min-width:0;display:flex;flex-direction:column;position:relative;");
    a.appendChild(l), a.appendChild(j("div", `width:1px;flex-shrink:0;background:${O.splitBorder};`)), a.appendChild(h);
    const p = (E) => j("div", Ct, E);
    l.appendChild(p("2D"));
    const _ = j(
      "div",
      `flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:8px;background:${St.canvas2D};`
    );
    l.appendChild(_), h.appendChild(p("3D"));
    const y = zi();
    h.appendChild(y.wrap);
    const v = j(
      "div",
      `flex-shrink:0;display:flex;flex-wrap:wrap;align-items:baseline;gap:6px 20px;padding:8px 16px;font-size:\${FONT.body};background:${O.toolbarBg};border-top:1px solid ${O.toolbarBorder};color:${O.textPrimary};`
    );
    t.appendChild(v);
    const S = r ? ns(r) : null, b = [
      ["Name", i || at, !1],
      ["SMILES", o || at, !0],
      ["Charge", s == null ? at : String(s), !1],
      ["Atoms", S ? String(S.atoms) : at, !1],
      ["Bonds", S ? String(S.bonds) : at, !1]
    ];
    for (const [E, F, I] of b) {
      const P = j("div", "display:flex;align-items:baseline;gap:6px;min-width:0;");
      P.appendChild(
        j(
          "span",
          `font-size:\${FONT.tiny};font-weight:700;letter-spacing:.08em;text-transform:uppercase;flex-shrink:0;color:${O.textMuted2};`,
          E
        )
      );
      const T = j(
        "span",
        `user-select:text;cursor:text;color:${O.textPrimary}` + (I ? ";font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:${FONT.small};overflow-wrap:anywhere;" : ""),
        F
      );
      T.title = F, P.appendChild(T), v.appendChild(P);
    }
    if (!r || !r.trim())
      return _.appendChild(le("No molecule provided")), y.container.appendChild(le("No molecule provided")), {};
    _.appendChild(le("Loading 2D depiction...")), Ar().then((E) => {
      const F = rs(E, r, yi, ct.layout);
      F ? os(_, F, yi) : _.replaceChildren(le("Failed to parse molecule", !0));
    }).catch((E) => {
      _.replaceChildren(le(`RDKit failed to load: ${he(E)}`, !0));
    });
    let f = null, $ = null;
    const u = ut(
      "small-molecule.style",
      "stick",
      mi.map((E) => E.id)
    ), g = _t("small-molecule.spin", !1);
    let C = u.get(), c = g.get();
    const d = j(
      "div",
      Ti
    );
    d.appendChild(
      On(
        mi,
        C,
        (E) => {
          C = E, f && (f.setStyle({}, gi[E]), f.render());
        },
        u
      )
    );
    const m = Ii(
      "Spin",
      c,
      (E) => {
        c = E;
        try {
          f?.spin(E ? "y" : !1);
        } catch {
        }
      },
      { title: "Toggle continuous rotation", remember: g }
    );
    m.style.marginLeft = "4px", d.appendChild(m);
    const k = Nr(() => $?.reset());
    return k.style.marginLeft = "4px", d.appendChild(k), h.appendChild(d), y.container.appendChild(le("Loading 3D viewer...")), Pr().then(() => {
      y.container.replaceChildren(), f = We.createViewer(y.container, { backgroundColor: St.viewer }), f.addModel(wd(r), "sdf"), f.setStyle({}, gi[C]), f.zoomTo(), f.render(), $ = Qi(y.container, f);
    }).catch((E) => {
      y.container.replaceChildren(le(`3D render failed: ${he(E)}`, !0));
    }), {
      onResize() {
        f && (f.resize(), f.render());
      },
      cleanup() {
        if ($?.cleanup(), $ = null, !!f) {
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
Pe("gufe-small-molecule", _d);
const is = ["HOH", "WAT", "SOL", "TIP3"], vi = { hetflag: !1 }, Sd = { hetflag: !0 }, Cd = { resn: is }, Le = {
  stick: { radius: 0.15 },
  sphere: { scale: 0.3 },
  hetero: { stickRadius: 0.2, sphereScale: 0.28 },
  water: { stickRadius: 0.05, sphereScale: 0.18 },
  surfaceOpacity: 0.85,
  /** Above this many atoms a surface is slow enough to be worth warning about. */
  surfaceAtomWarn: 4e4
};
function kd(e) {
  const t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
  let r = 0, i = 0, o = 0, s = 1 / 0, a = -1 / 0;
  for (const l of e.split(/\r?\n/)) {
    const h = l.slice(0, 6);
    if (h === "ENDMDL") break;
    if (h !== "ATOM  " && h !== "HETATM") continue;
    r++, h === "HETATM" && i++;
    const p = l.slice(17, 20).trim(), _ = l.slice(21, 22).trim() || "_", y = l.slice(22, 26).trim(), v = l.slice(26, 27).trim();
    is.indexOf(p) !== -1 && o++, t.add(_), n.add(`${_}|${y}${v}|${p}`);
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
function Ed(e) {
  return `${mt(e.chains)} chains · ${mt(e.residues)} residues · ${mt(e.atoms)} atoms · ${mt(e.hetatms)} HETATM` + (e.waters > 0 ? ` (${mt(e.waters)} water)` : "");
}
function xd(e, t) {
  return e === "chain" ? { colorscheme: "chain" } : e === "ss" ? { colorscheme: "ssJmol" } : e === "spectrum" && t && t.resiMax > t.resiMin ? { colorscheme: { prop: "resi", gradient: "roygb", min: t.resiMin, max: t.resiMax } } : { colorscheme: "Jmol" };
}
function $i(e, t, n, r) {
  const i = r || (() => {
  }), o = xd(t.color, n);
  try {
    e.removeAllSurfaces();
  } catch {
  }
  if (e.setStyle({}, {}), e.setStyle(
    vi,
    t.rep === "stick" ? { stick: { radius: Le.stick.radius, ...o } } : t.rep === "sphere" ? { sphere: { scale: Le.sphere.scale, ...o } } : (
      // For 'surface' the shell is added separately; leave the atoms bare so
      // it is not cluttered from the inside.
      t.rep === "surface" ? {} : { cartoon: { ...o } }
    )
  ), e.setStyle(
    Sd,
    t.hetero ? {
      stick: { radius: Le.hetero.stickRadius, colorscheme: "Jmol" },
      sphere: { scale: Le.hetero.sphereScale, colorscheme: "Jmol" }
    } : {}
  ), e.setStyle(
    Cd,
    t.waters ? {
      stick: { radius: Le.water.stickRadius, colorscheme: "Jmol" },
      sphere: { scale: Le.water.sphereScale, colorscheme: "Jmol" }
    } : {}
  ), t.rep !== "surface") {
    i(null), e.render();
    return;
  }
  i(
    n && n.atoms > Le.surfaceAtomWarn ? "Computing surface (large structure, this may take a while)..." : "Computing surface..."
  ), e.render(), setTimeout(() => {
    try {
      Promise.resolve(
        e.addSurface(We.SurfaceType.VDW, { opacity: Le.surfaceOpacity, ...o }, vi)
      ).then(() => {
        i(null), e.render();
      }).catch((s) => i(`Surface failed: ${he(s)}`, "error"));
    } catch (s) {
      i(`Surface failed: ${he(s)}`, "error");
    }
  }, 30);
}
const bi = [
  { id: "cartoon", label: "Cartoon", title: "Ribbon / cartoon backbone" },
  { id: "surface", label: "Surface", title: "Molecular (VDW) surface" },
  { id: "stick", label: "Stick", title: "All-atom sticks" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" }
], wi = [
  { id: "chain", label: "Chain" },
  { id: "spectrum", label: "Spectrum" },
  { id: "ss", label: "Secondary structure" },
  { id: "element", label: "Element" }
];
class Pd extends xe {
  placeholder() {
    return "Waiting for a ProteinComponent payload...";
  }
  renderView(t, n) {
    const r = n.pdb, i = n.name ?? "", o = n.type !== "ProteinComponentViz", s = ut(
      "protein.representation",
      "cartoon",
      bi.map((k) => k.id)
    ), a = ut(
      "protein.color",
      "chain",
      wi.map((k) => k.id)
    ), l = _t("protein.waters", o), h = _t("protein.hetero", !0), p = _t("protein.spin", !1), _ = {
      rep: s.get(),
      color: a.get(),
      waters: l.get(),
      hetero: h.get(),
      spin: p.get()
    };
    let y = null, v = null, S = null;
    const b = j(
      "div",
      Mi.top
    );
    t.appendChild(b), b.appendChild(
      j("span", `font-weight:700;font-size:${Z.heading};letter-spacing:.02em;color:${O.titleColor};`, i || "Protein")
    );
    const f = (k) => j("span", `font-size:${Z.small};color:${O.textMuted};`, k);
    b.appendChild(f("Style:")), b.appendChild(
      On(
        bi,
        _.rep,
        (k) => {
          _.rep = k, m();
        },
        s
      )
    ), b.appendChild(f("Color:")), b.appendChild(
      gr(
        wi,
        _.color,
        (k) => {
          _.color = k, m();
        },
        a
      )
    );
    const $ = j("div", "display:flex;gap:4px;");
    b.appendChild($);
    const u = [
      ["waters", "Waters", "Show water molecules", l, () => m()],
      ["hetero", "Hetero", "Show hetero atoms / ligands / ions / lipids", h, () => m()],
      ["spin", "Spin", "Rotate the view continuously", p, () => y?.spin(_.spin ? "y" : !1)]
    ];
    for (const [k, E, F, I, P] of u)
      $.appendChild(
        Ii(
          E,
          _[k],
          (T) => {
            _[k] = T, P();
          },
          { title: F, remember: I }
        )
      );
    $.appendChild(Nr(() => v?.reset()));
    const g = j("span", `margin-left:auto;font-size:${Z.small};white-space:nowrap;color:${O.textMuted2};`);
    b.appendChild(g);
    const C = zi();
    t.appendChild(C.wrap);
    const c = j(
      "div",
      "position:absolute;top:12px;left:50%;transform:translateX(-50%);padding:6px 14px;border-radius:6px;font-size:${FONT.body};z-index:20;display:none;pointer-events:none;"
    );
    C.wrap.appendChild(c);
    const d = (k, E) => {
      if (k == null) {
        c.style.display = "none";
        return;
      }
      c.textContent = k, c.style.display = "block";
      const F = E === "error";
      c.style.background = F ? O.warnBg : O.toolbarBg, c.style.color = F ? O.warnFg : O.textMuted, c.style.border = `1px solid ${F ? O.warnBorder : O.toolbarBorder}`;
    };
    function m() {
      y && $i(y, _, S, d);
    }
    if (!r || !r.trim())
      return d("No protein data - waiting for a PDB payload."), {};
    try {
      S = kd(r), g.textContent = Ed(S);
    } catch (k) {
      d(`⚠ PDB parse error: ${he(k)}`, "error");
    }
    return d("Loading 3D viewer..."), Pr().then(() => {
      y = We.createViewer(C.container, { backgroundColor: St.viewer }), y.addModel(r, "pdb"), $i(y, _, S, d), y.zoomTo(), y.spin(_.spin ? "y" : !1), y.render(), v = Qi(C.container, y);
    }).catch((k) => {
      d(`⚠ Failed to render structure: ${he(k)}`, "error");
    }), {
      onResize() {
        y && (y.resize(), y.render());
      },
      cleanup() {
        if (v?.cleanup(), v = null, !!y) {
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
Pe("gufe-protein", Pd);
const ss = "http://www.w3.org/2000/svg";
function se(e, t = {}) {
  const n = document.createElementNS(ss, e);
  for (const [r, i] of Object.entries(t)) n.setAttribute(r, String(i));
  return n;
}
function Fn(e, t) {
  const n = document.createElementNS(ss, "title");
  return n.textContent = t, e.appendChild(n), e;
}
function xt(e) {
  const t = /* @__PURE__ */ new Map();
  return hr(e, t, /* @__PURE__ */ new Set()), t;
}
function hr(e, t, n) {
  if (e == null || typeof e != "object" || n.has(e)) return;
  if (n.add(e), Array.isArray(e)) {
    for (const i of e) hr(i, t, n);
    return;
  }
  const r = e.registry;
  if (Array.isArray(r))
    for (const i of r) {
      const o = i["gufe-key"];
      typeof o == "string" && o && !t.has(o) && t.set(o, i);
    }
  for (const i of Object.values(e)) hr(i, t, n);
}
function Je(e, t) {
  return t ? e.get(t) : void 0;
}
function Te(e, t, n) {
  const r = Je(e, t);
  return r?.type === n ? r : void 0;
}
function ft(e) {
  return e.name ? e.name : (e["gufe-key"].split("-").pop() ?? e["gufe-key"]).slice(0, 6);
}
function En(e, t) {
  const n = new Array(9);
  for (let r = 0; r < 3; r++)
    for (let i = 0; i < 3; i++)
      n[r * 3 + i] = e[r * 3] * t[i] + e[r * 3 + 1] * t[3 + i] + e[r * 3 + 2] * t[6 + i];
  return n;
}
function _i(e) {
  return [e[0], e[3], e[6], e[1], e[4], e[7], e[2], e[5], e[8]];
}
function Ad(e) {
  return e[0] * (e[4] * e[8] - e[5] * e[7]) - e[1] * (e[3] * e[8] - e[5] * e[6]) + e[2] * (e[3] * e[7] - e[4] * e[6]);
}
function Si(e) {
  const t = e.slice(), n = [1, 0, 0, 0, 1, 0, 0, 0, 1];
  for (let r = 0; r < 50 && !(Math.abs(t[1]) + Math.abs(t[2]) + Math.abs(t[5]) < 1e-12); r++) {
    const o = [[0, 1], [0, 2], [1, 2]];
    for (let s = 0; s < 3; s++) {
      const a = o[s][0], l = o[s][1], h = t[a * 3 + l];
      if (Math.abs(h) < 1e-14) continue;
      const p = t[a * 3 + a], _ = t[l * 3 + l], y = (_ - p) / (2 * h);
      let v;
      Math.abs(y) > 1e10 ? v = 1 / (2 * y) : v = (y >= 0 ? 1 : -1) / (Math.abs(y) + Math.sqrt(y * y + 1));
      const S = 1 / Math.sqrt(1 + v * v), b = v * S;
      t[a * 3 + a] = p - v * h, t[l * 3 + l] = _ + v * h, t[a * 3 + l] = 0, t[l * 3 + a] = 0;
      for (let f = 0; f < 3; f++)
        if (f !== a && f !== l) {
          const $ = t[f * 3 + a], u = t[f * 3 + l];
          t[f * 3 + a] = S * $ - b * u, t[a * 3 + f] = t[f * 3 + a], t[f * 3 + l] = b * $ + S * u, t[l * 3 + f] = t[f * 3 + l];
        }
      for (let f = 0; f < 3; f++) {
        const $ = n[f * 3 + a], u = n[f * 3 + l];
        n[f * 3 + a] = S * $ - b * u, n[f * 3 + l] = b * $ + S * u;
      }
    }
  }
  return { values: [t[0], t[4], t[8]], vectors: n };
}
function Rd(e, t) {
  const n = Math.min(e.length, t.length);
  if (n < 1) return null;
  const r = [0, 0, 0], i = [0, 0, 0];
  for (let g = 0; g < n; g++)
    r[0] += e[g][0], r[1] += e[g][1], r[2] += e[g][2], i[0] += t[g][0], i[1] += t[g][1], i[2] += t[g][2];
  if (r[0] /= n, r[1] /= n, r[2] /= n, i[0] /= n, i[1] /= n, i[2] /= n, n < 3)
    return { R: [1, 0, 0, 0, 1, 0, 0, 0, 1], t: [r[0] - i[0], r[1] - i[1], r[2] - i[2]] };
  const o = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let g = 0; g < n; g++) {
    const C = e[g][0] - r[0], c = e[g][1] - r[1], d = e[g][2] - r[2], m = t[g][0] - i[0], k = t[g][1] - i[1], E = t[g][2] - i[2];
    o[0] += C * m, o[1] += C * k, o[2] += C * E, o[3] += c * m, o[4] += c * k, o[5] += c * E, o[6] += d * m, o[7] += d * k, o[8] += d * E;
  }
  const s = _i(o), a = En(s, o), l = En(o, s);
  let h = Si(a), p = Si(l);
  function _(g) {
    const C = [0, 1, 2].sort((d, m) => g.values[m] - g.values[d]), c = new Array(9);
    for (let d = 0; d < 3; d++) {
      const m = C[d];
      c[d] = g.vectors[m], c[3 + d] = g.vectors[3 + m], c[6 + d] = g.vectors[6 + m];
    }
    return {
      values: [g.values[C[0]], g.values[C[1]], g.values[C[2]]],
      vectors: c
    };
  }
  h = _(h), p = _(p);
  const y = h.vectors, v = p.vectors;
  for (let g = 0; g < 3; g++) {
    const C = y[g], c = y[3 + g], d = y[6 + g], m = o[0] * C + o[1] * c + o[2] * d, k = o[3] * C + o[4] * c + o[5] * d, E = o[6] * C + o[7] * c + o[8] * d, F = v[g], I = v[3 + g], P = v[6 + g];
    m * F + k * I + E * P < 0 && (v[g] = -F, v[3 + g] = -I, v[6 + g] = -P);
  }
  const S = _i(y);
  let b = En(v, S);
  Ad(b) < 0 && (v[2] = -v[2], v[5] = -v[5], v[8] = -v[8], b = En(v, S));
  const f = b[0] * i[0] + b[1] * i[1] + b[2] * i[2], $ = b[3] * i[0] + b[4] * i[1] + b[5] * i[2], u = b[6] * i[0] + b[7] * i[1] + b[8] * i[2];
  return { R: b, t: [r[0] - f, r[1] - $, r[2] - u] };
}
function Nd(e, t, n) {
  const r = e[0], i = e[1], o = e[2];
  return [
    t[0] * r + t[1] * i + t[2] * o + n[0],
    t[3] * r + t[4] * i + t[5] * o + n[1],
    t[6] * r + t[7] * i + t[8] * o + n[2]
  ];
}
const Ci = `
`, or = 4;
function ki(e, t, n) {
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
function Fd(e, t, n) {
  const r = [], i = [];
  for (const [p, _] of n) {
    const y = e[_], v = t[p];
    !y || !v || (r.push(y), i.push(v));
  }
  if (r.length < 2) return null;
  const o = (p) => {
    let _ = 0, y = 0;
    for (const v of p)
      _ += v[0], y += v[1];
    return [_ / p.length, y / p.length];
  }, s = o(r), a = o(i);
  let l = null, h = -1 / 0;
  for (const p of [!1, !0]) {
    let _ = 0, y = 0;
    for (let u = 0; u < r.length; u++) {
      const g = (p ? -1 : 1) * (r[u][0] - s[0]), C = r[u][1] - s[1], c = i[u][0] - a[0], d = i[u][1] - a[1];
      _ += g * d - C * c, y += g * c + C * d;
    }
    const v = Math.hypot(_, y);
    if (v <= h) continue;
    h = v;
    const S = Math.atan2(_, y), b = Math.cos(S), f = Math.sin(S), $ = (p ? -1 : 1) * s[0];
    l = {
      cos: b,
      sin: f,
      mirror: p,
      tx: a[0] - (b * $ - f * s[1]),
      ty: a[1] - (f * $ + b * s[1])
    };
  }
  return l;
}
function Od(e, t) {
  const n = (e.mirror ? -1 : 1) * t[0], r = t[1];
  return [e.cos * n - e.sin * r + e.tx, e.sin * n + e.cos * r + e.ty];
}
function Md(e, t, n) {
  const r = ns(e);
  if (!r) return e;
  const i = e.replace(/\r/g, "").split(Ci);
  if (i[3].indexOf("V3000") !== -1) return e;
  for (let o = 0; o < r.atoms; o++) {
    const s = i[or + o], a = t[o];
    if (s == null || !a) return e;
    i[or + o] = a[0].toFixed(4).padStart(10) + a[1].toFixed(4).padStart(10) + 0 .toFixed(4).padStart(10) + s.substring(30);
  }
  if (n)
    for (let a = 0; a < r.bonds; a++) {
      const l = or + r.atoms + a, h = i[l];
      if (h == null) break;
      const p = parseInt(h.substring(9, 12), 10);
      p !== 1 && p !== 6 || (i[l] = h.substring(0, 9) + String(p === 1 ? 6 : 1).padStart(3) + h.substring(12));
    }
  return i.join(Ci);
}
function Td(e, t, n) {
  try {
    const r = (s) => pr(s).coords.map((a) => [a[0], a[1]]), i = r(t), o = Fd(i, r(e), n);
    return o ? Md(
      t,
      i.map((s) => Od(o, s)),
      o.mirror
    ) : t;
  } catch (r) {
    return console.warn("[gufe-viz] could not align a depiction to its partner -", he(r)), t;
  }
}
function jd(e, t, n, r, i) {
  const o = ki(e, t, r), s = ki(e, n, r);
  return !i || r === "conformer" ? { left: o, right: s } : { left: o, right: Td(o, s, i) };
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
}, zd = {
  core: "0x888888",
  uniqueA: "0xd62828",
  uniqueB: "0x2a9d4a",
  pairA: "0xd62828",
  pairB: "0x2a9d4a",
  pairLine: "0xd9a300",
  overlayA: "0xd62828",
  overlayB: "0x2a9d4a"
};
function Dd() {
  try {
    return globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches ?? !1;
  } catch {
    return !1;
  }
}
const ke = Dd() ? Id : zd, Ei = [
  { id: "plain", label: "3D", title: "Plain 3D view" },
  { id: "colored", label: "3D-Map", title: "Colour-coded by mapping" },
  { id: "lines", label: "Pairs", title: "Dashed lines between mapped atoms" },
  { id: "overlay", label: "Overlay", title: "Both molecules superimposed" },
  { id: "2d", label: "2D", title: "2D depictions with highlights" },
  { id: "info", label: "Info", title: "The mapping in numbers" }
], ir = 420, ge = {
  stick: 0.15,
  sphere: 0.25,
  uniqueStick: 0.18,
  uniqueSphere: 0.32,
  pairSphere: 0.22,
  overlayOpacity: 0.7,
  lineRadius: 0.04
}, sr = { gap: 2.5, minLiftFraction: 0.6 };
function xi(e, t, n) {
  const r = [], i = [], o = [];
  for (let s = 0; s < t.length; s++) {
    const a = e.get(s);
    a === void 0 ? r.push(s) : t[s] !== n[a] ? i.push(s) : o.push(s);
  }
  return { atoms: r, elements: i, mapped: o };
}
function qd(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e.componentA_to_componentB ?? [])
    Number.isInteger(n?.index_A) && Number.isInteger(n?.index_B) && t.set(n.index_A, n.index_B);
  return t;
}
function as(e, t) {
  const n = Te(t, e.componentA, "SmallMoleculeComponentViz"), r = Te(t, e.componentB, "SmallMoleculeComponentViz");
  return !n || !r ? null : { ...e, registry: n["gufe-key"] === r["gufe-key"] ? [n] : [n, r] };
}
function Pi(e) {
  const t = [1 / 0, 1 / 0, 1 / 0], n = [-1 / 0, -1 / 0, -1 / 0];
  for (const r of e)
    for (let i = 0; i < 3; i++)
      r[i] < t[i] && (t[i] = r[i]), r[i] > n[i] && (n[i] = r[i]);
  return { min: t, max: n, span: [n[0] - t[0], n[1] - t[1], n[2] - t[2]] };
}
function Vd(e, t) {
  const n = Pi(e), r = Pi(t);
  let i = 0;
  n.span[1] < n.span[i] && (i = 1), n.span[2] < n.span[i] && (i = 2);
  const o = Math.max(n.span[0], n.span[1], n.span[2]), s = n.max[i] - r.min[i] + sr.gap, a = sr.minLiftFraction * o + sr.gap;
  return { axis: i, lift: Math.max(s, a) };
}
class Ld extends xe {
  placeholder() {
    return "Waiting for a LigandAtomMapping payload...";
  }
  renderView(t, n) {
    const r = xt(n), i = Te(r, n.componentA, "SmallMoleculeComponentViz"), o = Te(r, n.componentB, "SmallMoleculeComponentViz");
    if (!i || !o)
      return t.appendChild(
        le("This mapping names two molecules, and its registry does not hold them.")
      ), {};
    const s = ft(i), a = ft(o), l = qd(n);
    let h, p;
    try {
      h = pr(i.sdf, s), p = pr(o.sdf, a);
    } catch (U) {
      return t.appendChild(le(`Could not read a molecule: ${he(U)}`, !0)), {};
    }
    const _ = /* @__PURE__ */ new Map();
    for (const [U, B] of l) _.set(B, U);
    const y = xi(l, h.symbols, p.symbols), v = xi(_, p.symbols, h.symbols), S = j("div", "position:relative;flex:1;min-height:0;display:flex;flex-direction:column;");
    t.appendChild(S);
    const b = j("div", "flex:1;display:flex;flex-direction:column;min-height:0;");
    S.appendChild(b);
    const f = ut("atom-mapping.mode", "plain", Ei.map((U) => U.id));
    let $ = f.get();
    const u = j(
      "div",
      Ti
    );
    u.appendChild(
      On(
        Ei,
        $,
        (U) => {
          $ = U, X();
        },
        f
      )
    ), S.appendChild(u);
    let g = [], C = 0, c = !0;
    const d = () => {
      C && cancelAnimationFrame(C), C = 0;
      for (const U of g) {
        U.guard?.cleanup();
        try {
          U.viewer?.clear();
        } catch {
        }
      }
      g = [], b.replaceChildren();
    }, m = (U) => {
      const B = j("div", "flex:1;display:flex;flex-direction:column;position:relative;min-height:0;");
      B.appendChild(
        j(
          "div",
          Ct,
          U
        )
      );
      const J = j("div", "flex:1;position:relative;min-height:0;");
      J.dataset.gufeViewer = "", B.appendChild(J), b.appendChild(B);
      const q = { container: J, viewer: null, guard: null };
      return g.push(q), q;
    }, k = () => {
      if (g.length < 2) return;
      const U = g.map(() => "");
      let B = !1;
      const J = () => {
        if (c) {
          if (!B)
            for (let q = 0; q < g.length; q++) {
              const A = g[q].viewer;
              if (!A) continue;
              const D = JSON.stringify(A.getView());
              if (D !== U[q]) {
                B = !0;
                for (let R = 0; R < g.length; R++)
                  R !== q && g[R].viewer && (g[R].viewer.setView(A.getView()), g[R].viewer.render()), U[R] = D;
                B = !1;
                break;
              }
            }
          C = requestAnimationFrame(J);
        }
      };
      C = requestAnimationFrame(J);
    }, E = (U, B) => {
      const J = We.createViewer(U.container, { backgroundColor: St.viewer });
      for (const { mol: q } of B) J.addModel(bd(q), "sdf");
      return U.viewer = J, U.guard = Rr(U.container, {
        hint: "Click or hold Ctrl to zoom",
        onZoom: () => {
        }
      }), J;
    }, F = () => {
      for (const U of [h, p]) {
        const B = m(U.name), J = E(B, [{ mol: U }]);
        J.setStyle(
          {},
          { stick: { radius: ge.stick, colorscheme: "Jmol" }, sphere: { scale: ge.sphere, colorscheme: "Jmol" } }
        ), J.zoomTo(), J.render();
      }
      k();
    }, I = () => {
      const U = [
        { mol: h, uniques: y, colour: ke.uniqueA },
        { mol: p, uniques: v, colour: ke.uniqueB }
      ];
      for (const B of U) {
        const J = m(B.mol.name), q = E(J, [{ mol: B.mol }]);
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
    }, P = () => {
      const U = m(`${s} to ${a}  (${l.size} mapped pairs)`), B = [], J = [];
      for (const [z, W] of l) {
        const H = h.coords[z], ee = p.coords[W];
        H && ee && (B.push(H), J.push(ee));
      }
      const q = Rd(B, J), A = p.coords.map((z) => q ? Nd(z, q.R, q.t) : [...z]), { axis: D, lift: R } = Vd(h.coords, A), w = {
        ...p,
        coords: A.map((z) => {
          const W = [z[0], z[1], z[2]];
          return W[D] += R, W;
        })
      }, x = E(U, [{ mol: h }, { mol: w }]);
      x.setStyle(
        { model: 0 },
        { stick: { radius: ge.stick, color: ke.pairA }, sphere: { scale: ge.pairSphere, color: ke.pairA } }
      ), x.setStyle(
        { model: 1 },
        { stick: { radius: ge.stick, color: ke.pairB }, sphere: { scale: ge.pairSphere, color: ke.pairB } }
      );
      for (const [z, W] of l) {
        const H = h.coords[z], ee = w.coords[W];
        !H || !ee || x.addCylinder({
          start: { x: H[0], y: H[1], z: H[2] },
          end: { x: ee[0], y: ee[1], z: ee[2] },
          radius: ge.lineRadius,
          dashed: !0,
          fromCap: "round",
          toCap: "round",
          color: ke.pairLine
        });
      }
      x.zoomTo(), D === 2 ? x.rotate(90, "x") : D === 0 && x.rotate(-90, "z"), x.render();
    }, T = () => {
      const U = m(`${s} + ${a}  (overlay)`), B = E(U, [{ mol: h }, { mol: p }]);
      for (const [J, q] of [
        [0, ke.overlayA],
        [1, ke.overlayB]
      ])
        B.setStyle(
          { model: J },
          {
            stick: { radius: ge.stick, color: q, opacity: ge.overlayOpacity },
            sphere: { scale: ge.pairSphere, color: q, opacity: ge.overlayOpacity }
          }
        );
      B.zoomTo(), B.render();
    }, G = () => {
      const U = ct, B = id(U.customSpec), q = [
        { mol: h, uniques: y, side: "left", custom: B.left },
        { mol: p, uniques: v, side: "right", custom: B.right }
      ].map((A) => {
        const D = j("div", "flex:1;display:flex;flex-direction:column;min-height:0;");
        D.appendChild(
          j(
            "div",
            Ct,
            A.mol.name
          )
        );
        const R = j(
          "div",
          `flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:8px;background:${St.canvas2D};`
        );
        return R.appendChild(le("Loading 2D depiction...")), D.appendChild(R), b.appendChild(D), { box: R, side: A };
      });
      Ar().then((A) => {
        const D = dd(U, A), R = jd(A, i.sdf, o.sdf, U.layout, U.alignPair ? l : null);
        for (const { box: w, side: x } of q) {
          const z = cd(U, x.mol, x.uniques, x.side), W = ud(
            U,
            ir,
            z,
            x.custom,
            D,
            x.mol.symbols.length
          ), H = fd(A, x.side === "left" ? R.left : R.right, ir, W);
          if (w.replaceChildren(), !H) {
            w.appendChild(le("Failed to parse molecule", !0));
            continue;
          }
          os(w, H, ir);
          const ee = w.querySelector("svg");
          ee && vd(ee, x.mol, U, z, x.custom, D);
        }
      }).catch((A) => {
        for (const { box: D } of q)
          D.replaceChildren(le(`RDKit failed to load: ${he(A)}`, !0));
      });
    }, Q = () => {
      const U = j("div", "flex:1;min-height:0;overflow:auto;padding:14px;display:flex;flex-direction:column;gap:14px;");
      b.appendChild(U);
      const B = j("div", "display:flex;flex-direction:column;gap:2px;");
      B.appendChild(
        j(
          "div",
          `font-size:${Z.title};font-weight:${Ye.bold};color:${Oe.title};`,
          n.name || `${s} to ${a}`
        )
      ), B.appendChild(j("div", `font-size:${Z.body};color:${Oe.faint};`, "LigandAtomMapping")), U.appendChild(B);
      const J = j("div", `display:flex;flex-wrap:wrap;gap:${ce.lg} 16px;font-size:${Z.small};`);
      J.appendChild(de("mapped atoms", String(l.size))), J.appendChild(
        de("element changes", String(y.elements.length), ct.modifiedColor)
      ), J.appendChild(de(`unique to ${s}`, String(y.atoms.length), ct.destroyedColor)), J.appendChild(de(`unique to ${a}`, String(v.atoms.length), ct.createdColor)), J.appendChild(de(`atoms in ${s}`, String(h.symbols.length))), J.appendChild(de(`atoms in ${a}`, String(p.symbols.length))), J.appendChild(de("score", n.score == null ? at : n.score.toFixed(3))), U.appendChild(J);
      const q = j("div", Ir, "Correspondence");
      U.appendChild(q);
      const A = j("div", jr);
      A.textContent = l.size ? Array.from(l, ([R, w]) => `${R} -> ${w}`).join("   ") : "This mapping relates no atoms at all.", U.appendChild(A);
      const D = Object.entries(n.annotations ?? {}).filter(([R]) => R !== "score");
      if (D.length) {
        U.appendChild(j("div", Ir, "Annotations"));
        const R = j("div", `${jr}color:${Oe.faint};`);
        for (const [w, x] of D)
          R.appendChild(j("div", "", `${w}: ${String(x)}`));
        U.appendChild(R);
      }
      U.appendChild(
        j(
          "div",
          `${ps}overflow-wrap:anywhere;`,
          `gufe key: ${n["gufe-key"]}`
        )
      );
    }, X = () => {
      if (d(), $ === "info") {
        Q();
        return;
      }
      if ($ === "2d") {
        G();
        return;
      }
      b.appendChild(le("Loading 3D viewer...")), Pr().then(() => {
        c && (b.replaceChildren(), $ === "colored" ? I() : $ === "lines" ? P() : $ === "overlay" ? T() : F());
      }).catch((U) => {
        b.replaceChildren(le(`3D render failed: ${he(U)}`, !0));
      });
    };
    return X(), {
      onResize() {
        for (const U of g)
          U.viewer && (U.viewer.resize(), U.viewer.render());
      },
      cleanup() {
        c = !1, d();
      }
    };
  }
}
Pe("gufe-atom-mapping", Ld);
const Ai = ["Force-directed", "Circular", "Radial"], lt = 38, xn = 200, Bd = 4, Ud = 14, Kd = 18, Ri = 1.5, Hd = 6.5, Gd = 0.9, Wd = 14, ar = { size: 8, clearance: 8 }, cr = { fontSize: 10, padding: 3, backgroundOpacity: 0.92 }, Jd = { padding: 4 }, Ni = { captions: 0.5, depictions: 1.1 }, Pn = 200, Yd = 24, lr = { node: 0.12, edge: 0.06 }, Xd = 1.2, _e = {
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
function Zd(e) {
  const t = j(
    "div",
    `position:absolute;z-index:30;pointer-events:none;opacity:0;transition:opacity .12s ease;padding:7px 10px;border-radius:6px;font-size:\${FONT.small};line-height:1.5;max-width:260px;background:${O.tooltipBg};border:1px solid ${O.tooltipBorder};color:${O.textPrimary};box-shadow:0 4px 14px rgba(0,0,0,0.28);`
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
function Qd(e) {
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
      refX: lt + ar.clearance,
      refY: 0,
      markerUnits: "userSpaceOnUse",
      markerWidth: ar.size,
      markerHeight: ar.size,
      orient: "auto"
    });
    return o.appendChild(se("path", { d: "M0,-5L10,0L0,5", fill: n })), e.appendChild(o), i;
  };
}
function eu(e) {
  const t = parseInt(e.replace("#", ""), 16);
  return [t >> 16 & 255, t >> 8 & 255, t & 255];
}
function tu(e) {
  const [t, n] = O.netEdgeRamp.map(eu), r = Math.max(0, Math.min(1, e ?? 0.5));
  return `rgb(${t.map((o, s) => Math.round(o + (n[s] - o) * r)).join(",")})`;
}
const Ne = ft, nu = (e, t) => e.length > t ? `${e.slice(0, t - 1)}...` : e;
function ru(e) {
  const t = /* @__PURE__ */ new Set();
  let n = /* @__PURE__ */ new Set();
  const r = (o, s) => {
    if (t.has(s) || n.has(s)) return;
    const a = e.nodes[s], l = a.sdf && rs(o, a.sdf, xn, ct.layout);
    if (!l) {
      n.add(s);
      return;
    }
    const h = new DOMParser().parseFromString(l, "image/svg+xml").documentElement;
    if (!h || h.nodeName.toLowerCase() === "parsererror") {
      n.add(s);
      return;
    }
    const p = (lt - Bd) * 2 / xn, _ = e.depictionGroups[s];
    _.setAttribute(
      "transform",
      `translate(${-p * xn / 2},${-p * xn / 2}) scale(${p})`
    );
    let y = 0;
    for (const v of Array.from(h.childNodes)) {
      if (v.nodeType !== 1) continue;
      const S = v.nodeName.toLowerCase();
      if (!(S === "defs" || S === "metadata" || S === "title")) {
        if (S === "rect") {
          const b = (v.getAttribute("fill") ?? "").toLowerCase();
          if (b === "#ffffff" || b === "white" || b === "rgb(255,255,255)") continue;
        }
        _.appendChild(document.importNode(v, !0)), y++;
      }
    }
    y ? t.add(s) : n.add(s);
  };
  return { apply: (o, s, a) => {
    const l = o >= Ni.captions;
    for (const v of e.captions)
      v.setAttribute("display", l ? "inline" : "none");
    const h = o >= Ni.depictions;
    for (let v = 0; v < e.nodes.length; v++) {
      const S = h && t.has(v);
      e.depictionGroups[v].setAttribute("display", S ? "inline" : "none"), e.initials[v].setAttribute("display", S ? "none" : "inline");
    }
    if (!h) return;
    const { width: p, height: _ } = e.viewport(), y = [];
    e.nodes.forEach((v, S) => {
      if (t.has(S) || n.has(S)) return;
      const b = v.x * o + s, f = v.y * o + a;
      b < -Pn || f < -Pn || b > p + Pn || f > _ + Pn || y.push(S);
    }), y.length && e.rdkit().then((v) => {
      if (v)
        for (const S of y) {
          r(v, S);
          const b = t.has(S);
          e.depictionGroups[S].setAttribute("display", b ? "inline" : "none"), e.initials[S].setAttribute("display", b ? "none" : "inline");
        }
    }).catch(() => {
    });
  }, drawn: () => t.size };
}
function ou(e, t, n, r, i) {
  const o = (s) => i === "keys" ? s["gufe-key"] : Ne(s);
  return r === "ligands" ? e.filter((s) => n.has(s["gufe-key"])).map(o).join(", ") : t.filter((s) => n.has(s.from["gufe-key"]) && n.has(s.to["gufe-key"])).map((s) => `${o(s.from)}, ${o(s.to)}`).join(`
`);
}
function iu(e, t) {
  navigator.clipboard?.writeText(e).catch(() => Fi(e, t)), navigator.clipboard || Fi(e, t);
}
function Fi(e, t) {
  const n = j("textarea", "width:100%;height:80px;font-size:${FONT.small};box-sizing:border-box;");
  n.value = e, n.readOnly = !0, t.appendChild(n), n.select();
}
function su(e, t) {
  const n = URL.createObjectURL(new Blob([e], { type: "text/plain" })), r = j("a", "display:none;");
  r.href = n, r.download = t, document.body.appendChild(r), r.click(), r.remove(), URL.revokeObjectURL(n);
}
function au(e) {
  const t = ml("ligand-network.query"), n = hl("ligand-network.minScore", 0, 0, 1), r = ut("ligand-network.exportAs", "names", ["names", "keys"]), i = j(
    "div",
    `display:flex;flex-direction:column;gap:8px;width:236px;padding:10px;min-height:0;background:${O.panelBg};border-right:1px solid ${O.splitBorder};`
  ), o = j("input", `${ji}width:100%;box-sizing:border-box;`);
  o.type = "search", o.placeholder = "Search ligands", o.value = t.get(), e.query.text = o.value, o.setAttribute("aria-label", "Search ligands by name, SMILES or gufe key"), i.appendChild(o);
  const s = j("div", `display:flex;align-items:center;gap:8px;font-size:${Z.small};color:${O.textMuted};`), a = j("span", `min-width:28px;color:${O.textPrimary};`, "0.00"), l = j("input", "flex:1;");
  l.type = "range", l.min = "0", l.max = "1", l.step = "0.01", l.value = String(n.get()), e.filter.minScore = Number(l.value), l.setAttribute("aria-label", "Hide mappings scoring below this"), s.appendChild(j("span", "", "score >=")), s.appendChild(l), s.appendChild(a), i.appendChild(s);
  const h = j("div", `font-size:${Z.small};color:${O.textMuted2};`);
  i.appendChild(h);
  const p = j("div", "flex:1;min-height:0;overflow:auto;display:flex;flex-direction:column;gap:3px;");
  i.appendChild(p);
  const _ = j("div", "display:flex;flex-direction:column;gap:6px;"), y = j("div", `display:flex;align-items:center;gap:6px;font-size:${Z.small};color:${O.textMuted};`);
  y.appendChild(j("span", "", "copy as"));
  const v = gr(
    [
      { id: "names", label: "names" },
      { id: "keys", label: "gufe keys" }
    ],
    r.get(),
    () => {
    },
    r
  );
  v.style.flex = "1", y.appendChild(v), _.appendChild(y);
  const S = j("div", "display:flex;gap:4px;"), b = [
    ["Ligands", "ligands", "Copy the selected ligand names, comma separated"],
    ["Edges", "edges", "Copy the selected edges, one pair per line"]
  ];
  for (const [g, C, c] of b) {
    const d = j("button", `${kt}flex:1;`, g);
    d.title = c, d.onclick = (m) => {
      const k = v.value, E = ou(e.nodes, e.edges, e.selected, C, k);
      E && (m.shiftKey ? su(E, `selected-${C}.txt`) : iu(E, _));
    }, S.appendChild(d);
  }
  _.appendChild(S), _.appendChild(
    j("div", `font-size:${Z.tiny};color:${O.textMuted2};`, "Shift-click to save as a file instead.")
  ), i.appendChild(_);
  const f = j("button", `${kt}width:100%;`, "Clear selection");
  f.onclick = () => {
    e.selected.clear(), u(), e.refresh();
  }, i.appendChild(f);
  const $ = (g) => {
    const C = e.query.text.trim().toLowerCase();
    return C ? Ne(g).toLowerCase().includes(C) || (g.smiles ?? "").toLowerCase().includes(C) || g["gufe-key"].toLowerCase().includes(C) : !0;
  }, u = () => {
    p.replaceChildren();
    const g = e.nodes.map((C, c) => ({ node: C, index: c })).filter(({ node: C }) => $(C));
    h.textContent = `${g.length} of ${e.nodes.length} ligands`;
    for (const { node: C, index: c } of g) {
      const d = C["gufe-key"], m = j(
        "button",
        `display:flex;align-items:center;gap:6px;padding:5px 8px;border-radius:6px;text-align:left;font-family:inherit;font-size:\${FONT.small};cursor:pointer;width:100%;min-width:0;border:1px solid ${e.selected.has(d) ? O.cardBorderActive : O.cardBorder};background:${e.selected.has(d) ? O.cardBgActive : O.cardBg};color:${O.textPrimary};`
      ), k = j("span", "flex:1;min-width:0;overflow-wrap:anywhere;", Ne(C));
      k.title = `${Ne(C)}
${C.smiles ?? ""}`, m.appendChild(k), m.onclick = (E) => {
        E.shiftKey || E.metaKey || E.ctrlKey ? e.selected.has(d) ? e.selected.delete(d) : e.selected.add(d) : (e.selected.clear(), e.selected.add(d), e.focus(c)), u(), e.refresh();
      }, p.appendChild(m);
    }
    g.length || p.appendChild(j("div", `font-size:${Z.small};padding:8px;color:${O.textMuted2};`, "Nothing matches."));
  };
  return o.oninput = () => {
    e.query.text = o.value, t.set(o.value), u(), e.refresh();
  }, l.oninput = () => {
    e.filter.minScore = Number(l.value), a.textContent = e.filter.minScore.toFixed(2), n.set(e.filter.minScore), e.refresh();
  }, u(), i;
}
class cu extends xe {
  placeholder() {
    return "Waiting for a LigandNetwork payload...";
  }
  renderView(t, n) {
    const r = xt(n), i = [];
    let o = 0;
    for (const B of n.nodes ?? []) {
      const J = Te(r, B, "SmallMoleculeComponentViz");
      if (!J) {
        o++;
        continue;
      }
      i.push({ ...J, x: 0, y: 0 });
    }
    const s = new Map(i.map((B) => [B["gufe-key"], B])), a = [];
    let l = 0;
    for (const B of n.edges ?? []) {
      const J = s.get(B.componentA), q = s.get(B.componentB);
      if (!J || !q) {
        l++;
        continue;
      }
      a.push({ ...B, index: a.length, from: J, to: q });
    }
    const h = Be(n.name || "Ligand network");
    h.statsEl.appendChild(de("ligands", String(i.length))), h.statsEl.appendChild(de("mappings", String(a.length))), t.appendChild(h);
    const p = j("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    t.appendChild(p);
    const _ = /* @__PURE__ */ new Set(), y = { minScore: 0 }, v = { text: "" };
    let S = () => {
    };
    const b = vs(
      h,
      () => au({
        nodes: i,
        edges: a,
        selected: _,
        filter: y,
        query: v,
        refresh: () => S(),
        focus: (B) => k(B)
      }),
      {
        label: "Search, filter and select ligands",
        onToggle: () => U(),
        remember: _t("ligand-network.menuOpen", !1)
      }
    );
    p.appendChild(b.panel);
    const f = j("div", `flex:1 1 58%;min-width:0;display:flex;flex-direction:column;background:${O.netCanvasBg};`), $ = j("div", `flex:1 1 42%;min-width:0;display:flex;flex-direction:column;background:${O.appBg};`);
    p.appendChild(f), p.appendChild(j("div", `width:1px;flex-shrink:0;background:${O.splitBorder};`)), p.appendChild($);
    const u = j("div", `flex:1;position:relative;overflow:hidden;min-height:0;background:${O.netCanvasBg};`);
    f.appendChild(u);
    const g = ut("ligand-network.layout", "Force-directed", Ai), C = this.#t(
      (B) => U(B),
      () => Q(),
      g
    );
    f.appendChild(C.bar);
    const c = this.#e($, r);
    if (!i.length)
      return u.appendChild(
        le(
          o ? "None of this network's ligands are in its registry." : "This network has no ligands."
        )
      ), c.message("Nothing to show."), {};
    o && Ge(
      u,
      `${o} ligand${o === 1 ? "" : "s"} named by this network are not in its registry`
    ), l && Ge(u, `${l} mapping${l === 1 ? "" : "s"} name a ligand this network does not contain`);
    const d = Ar().catch((B) => (console.warn("[gufe-viz] RDKit failed to load:", he(B)), null)), m = Zd(u);
    let k = () => {
    }, E = a.length ? 0 : -1, F = null, I = g.get(), P = !1, T = !0, G = () => {
    }, Q = () => {
    };
    const X = (B) => {
      E = B, c.show(a[B] ?? null), G();
    }, U = (B = I) => {
      I = B, F?.(), F = null, u.querySelector("svg")?.remove();
      const J = u.clientWidth || 800, q = u.clientHeight || 600;
      lu(i, J, q, I, a);
      const A = () => {
        if (!T) return;
        const D = this.#r(u, i, a, J, q, X, d, m);
        G = () => D.setSelected(E), Q = D.reset, F = D.cleanup, k = (R) => D.focusOn(R), S = () => {
          const R = v.text.trim().toLowerCase(), w = _.size > 0 || R.length > 0, x = /* @__PURE__ */ new Set();
          for (const H of i) {
            const ee = H["gufe-key"], ie = _.has(ee) || R.length > 0 && (Ne(H).toLowerCase().includes(R) || (H.smiles ?? "").toLowerCase().includes(R) || ee.toLowerCase().includes(R));
            (!w || ie) && x.add(ee);
          }
          const z = /* @__PURE__ */ new Set();
          a.forEach((H, ee) => {
            (H.score ?? 0) < y.minScore || !x.has(H.from["gufe-key"]) || !x.has(H.to["gufe-key"]) || z.add(ee);
          });
          const W = w || y.minScore > 0;
          D.setEmphasis(W ? x : null, W ? z : null);
        }, G(), S(), D.fit();
      };
      if (I !== "Force-directed" || P) {
        A();
        return;
      }
      du(i, a, J, q).then((D) => {
        if (T) {
          if (D) {
            A();
            return;
          }
          P = !0, C.picker.value = "Circular", Ge(u, "d3 could not be loaded - showing the circular layout instead"), U("Circular");
        }
      }, A);
    };
    return U(), c.show(a[E] ?? null), {
      onResize: () => U(),
      cleanup: () => {
        T = !1, m.remove(), F?.();
      }
    };
  }
  #t(t, n, r) {
    const i = j(
      "div",
      Mi.bottom
    ), o = j("div", `display:flex;align-items:center;gap:6px;font-size:${Z.small};color:${O.textMuted};`);
    o.appendChild(j("span", "", "score")), o.appendChild(
      j(
        "span",
        `width:40px;height:4px;border-radius:2px;background:linear-gradient(to right,${O.netEdgeRamp.join(",")});`
      )
    ), o.appendChild(j("span", "", "0 -> 1")), i.appendChild(o), i.appendChild(j("label", `font-size:${Z.body};margin-left:auto;color:${O.textMuted};`, "Layout"));
    const s = gr(
      Ai.map((a) => ({ id: a, label: a })),
      r.get(),
      (a) => t(a),
      r
    );
    return i.appendChild(s), i.appendChild(Nr(n, "Reset pan and zoom")), { bar: i, picker: s };
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
  #r(t, n, r, i, o, s, a, l) {
    const h = se("svg", {
      class: "gufe-graph",
      width: i,
      height: o,
      style: "display:block;touch-action:none;"
    }), p = se("g");
    h.appendChild(p), t.appendChild(h);
    const _ = se("defs"), y = Qd(_);
    h.appendChild(_);
    const v = [], S = se("g"), b = se("g"), f = se("g", { "pointer-events": "none" }), $ = [], u = [], g = se("g");
    p.append(S, b, f, g);
    for (const P of r) {
      const T = tu(P.score), G = Ri + (P.score ?? 0.5) * (Hd - Ri), Q = se("line", {
        stroke: O.netHaloColor,
        // Sized from the edge underneath, so a thick edge does not outgrow its
        // own halo and a thin one is not swamped by it.
        "stroke-width": G + Jd.padding * 2,
        "stroke-linecap": "round",
        opacity: 0,
        "pointer-events": "none"
      }), X = se("line", {
        stroke: T,
        "stroke-width": G,
        "stroke-opacity": Gd,
        // A mapping runs from A to B, and the arrow is what says which is which.
        "marker-end": `url(#${y(T)})`,
        "pointer-events": "none"
      }), U = se("line", { stroke: "transparent", "stroke-width": Wd, style: "cursor:pointer;" });
      U.addEventListener("click", (A) => {
        A.stopPropagation(), s(P.index);
      }), U.addEventListener("mousemove", (A) => {
        l.show(
          `<div style="font-weight:700;color:${O.titleColor};">${De(Ne(P.from))} -&gt; ${De(Ne(P.to))}</div>` + (P.score == null ? `<div style="color:${O.textMuted2};">no score</div>` : `<div style="margin-top:4px;">score <b>${P.score.toFixed(3)}</b></div>`) + `<div style="margin-top:4px;font-size:${Z.tiny};color:${O.textMuted2};">Click to see the mapping</div>`,
          A.offsetX,
          A.offsetY
        );
      }), U.addEventListener("mouseleave", () => l.hide()), v.push(Q), S.append(Q, X), b.appendChild(U);
      const B = se("rect", {
        fill: O.netLabelBg,
        opacity: P.score == null ? 0 : cr.backgroundOpacity,
        rx: 3,
        ry: 3
      }), J = se("text", {
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        "font-size": cr.fontSize,
        "font-weight": 600,
        fill: O.netEdgeLabel
      });
      J.textContent = P.score == null ? "" : P.score.toFixed(2);
      const q = se("g", { class: "gufe-edge-label" });
      q.append(B, J), f.appendChild(q), $.push(B), u.push(J);
    }
    const C = [], c = [], d = [], m = n.map((P) => {
      const T = se("g", { class: "gufe-node", style: "cursor:grab;" });
      T.addEventListener("mousemove", (U) => {
        l.show(
          `<div style="font-weight:700;color:${O.titleColor};">${De(Ne(P))}</div>` + (P.smiles ? `<div style="margin-top:3px;font-family:ui-monospace,Menlo,monospace;overflow-wrap:anywhere;">${De(P.smiles)}</div>` : "") + `<div style="margin-top:3px;font-size:${Z.tiny};color:${O.textMuted2};overflow-wrap:anywhere;">${De(P["gufe-key"])}</div>`,
          U.offsetX,
          U.offsetY
        );
      }), T.addEventListener("mouseleave", () => l.hide()), T.appendChild(
        se("circle", {
          r: lt,
          fill: O.netNodeFill,
          stroke: O.netNodeStroke,
          "stroke-width": 1.5
        })
      );
      const G = se("g", { class: "gufe-node-depiction", "pointer-events": "none" });
      T.appendChild(G), C.push(G);
      const Q = se("text", {
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        "font-size": Kd,
        "font-weight": 700,
        fill: O.netInitials,
        "pointer-events": "none"
      });
      Q.textContent = Ne(P).slice(0, 2).toUpperCase(), T.appendChild(Q), c.push(Q);
      const X = se("text", {
        class: "gufe-node-caption",
        "text-anchor": "middle",
        y: lt + 14,
        "font-size": 11,
        "font-weight": 600,
        fill: O.netNodeLabel,
        "pointer-events": "none"
      });
      return X.textContent = nu(Ne(P), Ud), X.setAttribute("display", "none"), d.push(X), T.appendChild(X), g.appendChild(T), T;
    }), k = () => {
      u.forEach((P, T) => {
        if (!P.textContent) return;
        let G;
        try {
          G = P.getBBox();
        } catch {
          return;
        }
        const Q = cr.padding;
        $[T].setAttribute("x", String(G.x - Q)), $[T].setAttribute("y", String(G.y - Q)), $[T].setAttribute("width", String(G.width + Q * 2)), $[T].setAttribute("height", String(G.height + Q * 2));
      });
    }, E = () => {
      r.forEach((P, T) => {
        for (const Q of [v[T], S.children[T * 2 + 1], b.children[T]]) {
          const X = Q;
          X.setAttribute("x1", String(P.from.x)), X.setAttribute("y1", String(P.from.y)), X.setAttribute("x2", String(P.to.x)), X.setAttribute("y2", String(P.to.y));
        }
        f.children[T].setAttribute(
          "transform",
          `translate(${(P.from.x + P.to.x) / 2},${(P.from.y + P.to.y) / 2 - 8})`
        );
      }), n.forEach((P, T) => m[T].setAttribute("transform", `translate(${P.x},${P.y})`));
    };
    E(), k();
    const F = ru({
      nodes: n,
      captions: d,
      initials: c,
      depictionGroups: C,
      rdkit: () => a,
      viewport: () => ({ width: i, height: o })
    }), I = this.#n(h, p, n, m, E, F.apply);
    return {
      setSelected(P) {
        v.forEach((T, G) => T.setAttribute("opacity", G === P ? "0.95" : "0"));
      },
      /**
       * Dim what is not emphasised rather than hiding it.
       *
       * Asked for directly: you want to see what is *not* selected too, because
       * a filter that removes the rest answers a different question from one
       * that fades it.
       */
      setEmphasis(P, T) {
        m.forEach((G, Q) => {
          const X = !P || P.has(n[Q]["gufe-key"]);
          G.setAttribute("opacity", X ? "1" : String(lr.node));
        }), r.forEach((G, Q) => {
          const X = !T || T.has(Q), U = X ? "0.9" : String(lr.edge);
          S.children[Q * 2 + 1].setAttribute("stroke-opacity", U), f.children[Q].setAttribute("opacity", X ? "1" : String(lr.edge));
        });
      },
      focusOn(P) {
        const T = n[P];
        T && I.centreOn(T.x, T.y);
      },
      setDetail: F.apply,
      depictionsDrawn: () => F.drawn(),
      fit: I.fit,
      reset: I.reset,
      cleanup: I.cleanup
    };
  }
  /** Wheel zoom, background pan, node drag - ~40 lines instead of d3-zoom and
   * d3-drag, and they keep working when d3 is unreachable. */
  #n(t, n, r, i, o, s) {
    let a = 1, l = 0, h = 0;
    const p = () => {
      n.setAttribute("transform", `translate(${l},${h}) scale(${a})`), s(a, l, h);
    }, _ = () => {
      const g = t.getBoundingClientRect();
      return {
        width: g.width || Number(t.getAttribute("width")) || t.clientWidth || 800,
        height: g.height || Number(t.getAttribute("height")) || t.clientHeight || 600
      };
    }, y = () => {
      let g = 1 / 0, C = 1 / 0, c = -1 / 0, d = -1 / 0;
      for (const F of r)
        g = Math.min(g, F.x), C = Math.min(C, F.y), c = Math.max(c, F.x), d = Math.max(d, F.y);
      if (a = 1, l = 0, h = 0, !Number.isFinite(g)) {
        p();
        return;
      }
      const m = lt + Yd, { width: k, height: E } = _();
      a = Math.min(1, k / (c - g + m * 2), E / (d - C + m * 2)), l = k / 2 - (g + c) / 2 * a, h = E / 2 - (C + d) / 2 * a, p();
    }, S = Rr(t, {
      onZoom: (g) => {
        const C = t.getBoundingClientRect(), c = g.clientX - C.left, d = g.clientY - C.top, m = Math.min(5 / a, Math.max(0.15 / a, Math.exp(-g.deltaY * 2e-3)));
        return l = c - (c - l) * m, h = d - (d - h) * m, a *= m, p(), m !== 1;
      },
      hint: "Click the graph or hold Ctrl to zoom"
    });
    let b = null;
    const f = (g) => {
      b = { x: g.clientX - l, y: g.clientY - h };
    }, $ = (g) => {
      b && (l = g.clientX - b.x, h = g.clientY - b.y, p());
    }, u = () => {
      b = null;
    };
    return t.addEventListener("pointerdown", f), t.addEventListener("pointermove", $), t.addEventListener("pointerup", u), t.addEventListener("pointercancel", u), t.addEventListener("pointerleave", u), i.forEach((g, C) => {
      let c = null;
      g.addEventListener("pointerdown", (m) => {
        m.stopPropagation(), c = { x: m.clientX - r[C].x * a, y: m.clientY - r[C].y * a }, g.setPointerCapture(m.pointerId);
      }), g.addEventListener("pointermove", (m) => {
        c && (r[C].x = r[C].fx = (m.clientX - c.x) / a, r[C].y = r[C].fy = (m.clientY - c.y) / a, o());
      });
      const d = () => {
        c = null;
      };
      g.addEventListener("pointerup", d), g.addEventListener("pointercancel", d);
    }), {
      fit: y,
      // Back to the view it opened on, which is the framed one. An identity
      // transform would be "reset" only in the sense that a blank canvas is.
      reset: y,
      /** Bring a graph point to the middle, zooming in enough to read it. */
      centreOn(g, C) {
        const { width: c, height: d } = _();
        a = Math.max(a, Xd), l = c / 2 - g * a, h = d / 2 - C * a, p();
      },
      cleanup() {
        S.cleanup(), t.removeEventListener("pointerdown", f), t.removeEventListener("pointermove", $), t.removeEventListener("pointerup", u), t.removeEventListener("pointercancel", u), t.removeEventListener("pointerleave", u);
      }
    };
  }
}
function lu(e, t, n, r, i) {
  const o = t / 2, s = n / 2, a = (l, h) => {
    l.forEach((p, _) => {
      const y = 2 * Math.PI * _ / Math.max(1, l.length) - Math.PI / 2;
      p.x = o + h * Math.cos(y), p.y = s + h * Math.sin(y), p.fx = r === "Force-directed" ? void 0 : p.x, p.fy = r === "Force-directed" ? void 0 : p.y;
    });
  };
  if (r === "Radial" && e.length) {
    const l = new Map(e.map((b) => [b["gufe-key"], []]));
    for (const b of i)
      l.get(b.from["gufe-key"]).push(b.to["gufe-key"]), l.get(b.to["gufe-key"]).push(b.from["gufe-key"]);
    const h = new Map(e.map((b) => [b["gufe-key"], b])), p = e.reduce(
      (b, f) => l.get(f["gufe-key"]).length > l.get(b["gufe-key"]).length ? f : b
    ), _ = /* @__PURE__ */ new Set([p["gufe-key"]]);
    let y = [p["gufe-key"]], v = 0;
    const S = Math.min(t, n) * 0.18;
    for (; y.length; ) {
      a(
        y.map((f) => h.get(f)),
        v === 0 ? 0 : v * S + 40
      );
      const b = [];
      for (const f of y)
        for (const $ of l.get(f))
          _.has($) || (_.add($), b.push($));
      y = b, v++;
    }
    a(e.filter((b) => !_.has(b["gufe-key"])), Math.min(t, n) * 0.45);
    return;
  }
  a(e, Math.min(t, n) * 0.34);
}
async function du(e, t, n, r) {
  let i;
  try {
    if (i = await Zi(), typeof i?.forceSimulation != "function") return !1;
  } catch {
    return !1;
  }
  const o = t.map((l) => ({ source: l.from["gufe-key"], target: l.to["gufe-key"], score: l.score })), s = i.forceSimulation(e).force(
    "link",
    i.forceLink(o).id((l) => l["gufe-key"]).distance((l) => _e.linkBaseDistance + (1 - (l.score ?? 0.5)) * _e.linkScoreBonus).strength(_e.linkStrength)
  ).force(
    "charge",
    i.forceManyBody().strength(_e.chargeStrength).distanceMin(_e.chargeDistanceMin).distanceMax(_e.chargeDistanceMax)
  ).force("center", i.forceCenter(n / 2, r / 2).strength(_e.centerStrength)).force("collision", i.forceCollide(lt + _e.collisionPadding).iterations(_e.collisionIterations)).force("x", i.forceX(n / 2).strength(_e.drift)).force("y", i.forceY(r / 2).strength(_e.drift)).stop(), a = Math.ceil(Math.log(s.alphaMin()) / Math.log(1 - s.alphaDecay()));
  for (let l = 0; l < a * _e.tickMultiplier; l++) s.tick();
  return !0;
}
Pe("gufe-ligand-network", cu);
const bt = { width: 148, height: 46, radius: 10 }, st = {
  linkDistance: 220,
  linkStrength: 0.4,
  chargeStrength: -1200,
  collisionRadius: 110,
  collisionIterations: 3,
  tickMultiplier: 2
}, wt = ft;
function uu(e, t) {
  return e.length > t ? `${e.slice(0, t - 1)}...` : e;
}
function fu(e, t, n) {
  const r = Math.max(90, Math.min(t, n) * 0.36);
  e.forEach((i, o) => {
    const s = 2 * Math.PI * o / Math.max(1, e.length) - Math.PI / 2;
    i.x = t / 2 + r * Math.cos(s), i.y = n / 2 + r * Math.sin(s);
  });
}
async function pu(e, t, n, r) {
  let i;
  try {
    if (i = await Zi(), typeof i?.forceSimulation != "function") return !1;
  } catch {
    return !1;
  }
  const o = t.map((l) => ({ source: l.from["gufe-key"], target: l.to["gufe-key"] })), s = i.forceSimulation(e).force(
    "link",
    i.forceLink(o).id((l) => l["gufe-key"]).distance(st.linkDistance).strength(st.linkStrength)
  ).force("charge", i.forceManyBody().strength(st.chargeStrength)).force("center", i.forceCenter(n / 2, r / 2)).force("collision", i.forceCollide(st.collisionRadius).iterations(st.collisionIterations)).stop(), a = Math.ceil(Math.log(s.alphaMin()) / Math.log(1 - s.alphaDecay()));
  for (let l = 0; l < a * st.tickMultiplier; l++) s.tick();
  return !0;
}
class hu extends xe {
  placeholder() {
    return "Waiting for an AlchemicalNetwork payload...";
  }
  renderView(t, n) {
    const r = xt(n), i = [];
    let o = 0;
    for (const d of n.nodes ?? []) {
      const m = Te(r, d, "ChemicalSystemViz");
      if (!m) {
        o++;
        continue;
      }
      i.push({ ...m, x: 0, y: 0 });
    }
    const s = new Map(i.map((d) => [d["gufe-key"], d])), a = [];
    let l = 0;
    for (const d of n.edges ?? []) {
      const m = s.get(d.stateA), k = s.get(d.stateB);
      if (!m || !k) {
        l++;
        continue;
      }
      a.push({ ...d, index: a.length, from: m, to: k });
    }
    const h = (d) => {
      const m = Te(r, d.protocol, "ProtocolViz");
      return m?.gufe_type || m?.name || "";
    }, p = new Set(a.map(h).filter(Boolean)), _ = Be(n.name || "Alchemical network");
    _.statsEl.appendChild(de("systems", String(i.length))), _.statsEl.appendChild(de("transformations", String(a.length))), p.size && _.statsEl.appendChild(de("protocol", [...p].join(", "))), t.appendChild(_);
    const y = j("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    t.appendChild(y);
    const v = j("div", `flex:1 1 62%;min-width:0;position:relative;overflow:hidden;background:${O.netCanvasBg};`);
    y.appendChild(v), y.appendChild(j("div", `width:1px;flex-shrink:0;background:${O.splitBorder};`));
    const S = j("div", `flex:1 1 38%;min-width:0;display:flex;flex-direction:column;background:${O.appBg};`);
    y.appendChild(S);
    const b = this.#t(S, r, h);
    if (!i.length)
      return v.appendChild(
        le(
          o ? "None of this network's chemical systems are in its registry." : "This network has no chemical systems."
        )
      ), b.message("Nothing to show."), {};
    o && Ge(
      v,
      `${o} chemical system${o === 1 ? "" : "s"} named by this network are not in its registry`
    ), l && Ge(
      v,
      `${l} transformation${l === 1 ? "" : "s"} name a system this network does not contain`
    );
    let f = !0, $ = !1, u = null, g = () => {
    };
    const C = (d, m) => {
      u = { kind: d, index: m }, b.show(d === "node" ? i[m] : a[m], d), g();
    }, c = () => {
      v.querySelector("svg")?.remove();
      const d = v.clientWidth || 800, m = v.clientHeight || 600;
      fu(i, d, m);
      const k = () => {
        if (!f) return;
        const E = this.#e(v, i, a, d, m, C);
        g = () => E.setSelected(u), g();
      };
      if ($) {
        k();
        return;
      }
      pu(i, a, d, m).then((E) => {
        f && (E || ($ = !0, Ge(v, "d3 could not be loaded - showing the circular layout instead")), k());
      }, k);
    };
    return c(), C("node", 0), {
      onResize: () => c(),
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
        Ct,
        "Selected"
      )
    );
    const i = j("div", "flex:1;min-height:0;overflow:auto;display:flex;flex-direction:column;");
    t.appendChild(i);
    const o = (l) => i.replaceChildren(le(l)), s = (l, h) => {
      const p = j(
        "div",
        `padding:10px 14px;border-bottom:1px solid ${O.toolbarBorder};display:flex;flex-direction:column;gap:4px;`
      );
      return p.appendChild(j("div", `font-size:${Z.heading};font-weight:600;color:${O.textPrimary};`, l)), p.appendChild(j("div", `font-size:${Z.small};color:${O.textMuted2};`, h)), p;
    };
    return { show: (l, h) => {
      if (i.replaceChildren(), h === "node") {
        const y = l;
        i.appendChild(s(wt(y), "ChemicalSystem"));
        const v = j("div", "display:flex;flex-direction:column;gap:6px;padding:12px 14px;"), S = Object.entries(y.components ?? {});
        for (const [b, f] of S) {
          const $ = Je(n, f), u = j(
            "div",
            `display:flex;align-items:center;gap:8px;padding:7px 10px;border-radius:8px;min-width:0;background:${O.cardBg};border:1px solid ${O.cardBorder};`
          );
          u.appendChild(j("span", `font-size:${Z.body};font-weight:700;color:${O.textPrimary};`, b)), u.appendChild(
            j(
              "span",
              `font-size:${Z.small};color:${O.textMuted};overflow-wrap:anywhere;min-width:0;`,
              $ ? $.name || "(unnamed)" : "(not in the registry)"
            )
          );
          const g = Et(
            $ ? $.type === "UnknownComponentViz" ? $.gufe_type : $.type.replace(/Viz$/, "") : "missing"
          );
          g.style.marginLeft = "auto", u.appendChild(g), v.appendChild(u);
        }
        S.length || v.appendChild(j("div", `font-size:${Z.body};color:${O.textMuted2};`, "This system lists no components.")), i.appendChild(v), i.appendChild(
          j(
            "div",
            `padding:0 14px 12px;font-size:${Z.small};font-family:ui-monospace,SFMono-Regular,Menlo,monospace;color:${O.textMuted2};overflow-wrap:anywhere;`,
            y["gufe-key"]
          )
        );
        return;
      }
      const p = l;
      i.appendChild(s(p.name || "Unnamed transformation", "Transformation"));
      const _ = j("div", "display:flex;flex-direction:column;gap:8px;padding:12px 14px;");
      for (const [y, v] of [
        ["State A", wt(p.from)],
        ["State B", wt(p.to)],
        ["Protocol", r(p) || "-"]
      ]) {
        const S = j("div", "display:flex;gap:10px;align-items:baseline;min-width:0;");
        S.appendChild(
          j(
            "span",
            `flex:0 0 76px;font-size:${Z.tiny};font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:${O.textMuted2};`,
            y
          )
        ), S.appendChild(j("span", `flex:1;min-width:0;font-size:${Z.body};color:${O.textPrimary};overflow-wrap:anywhere;`, v)), _.appendChild(S);
      }
      i.appendChild(_), i.appendChild(
        j(
          "div",
          `padding:0 14px 12px;font-size:${Z.small};font-family:ui-monospace,SFMono-Regular,Menlo,monospace;color:${O.textMuted2};overflow-wrap:anywhere;`,
          p["gufe-key"]
        )
      );
    }, message: o };
  }
  /** Build the SVG for the current positions, and hand back the selection hook. */
  #e(t, n, r, i, o, s) {
    const a = se("svg", { width: i, height: o, style: "display:block;" });
    t.appendChild(a);
    const l = se("g"), h = se("g");
    a.append(l, h);
    const p = [];
    r.forEach((y, v) => {
      const S = se("line", {
        x1: y.from.x,
        y1: y.from.y,
        x2: y.to.x,
        y2: y.to.y,
        stroke: O.netEdgeLine,
        "stroke-width": 2,
        "stroke-linecap": "round",
        style: "cursor:pointer;"
      });
      Fn(S, y.name || "transformation"), S.addEventListener("click", () => s("edge", v)), l.appendChild(S), p.push(S);
      const b = se("line", {
        x1: y.from.x,
        y1: y.from.y,
        x2: y.to.x,
        y2: y.to.y,
        stroke: "transparent",
        "stroke-width": 16,
        style: "cursor:pointer;"
      });
      b.addEventListener("click", () => s("edge", v)), l.appendChild(b);
    });
    const _ = [];
    return n.forEach((y, v) => {
      const S = se("g", { style: "cursor:pointer;" }), b = se("rect", {
        x: y.x - bt.width / 2,
        y: y.y - bt.height / 2,
        width: bt.width,
        height: bt.height,
        rx: bt.radius,
        fill: O.cardBg,
        stroke: O.cardBorder,
        "stroke-width": 2
      });
      S.appendChild(b), _.push(b);
      const f = se("text", {
        x: y.x,
        y: y.y - 2,
        "text-anchor": "middle",
        fill: O.netNodeLabel,
        "font-size": 12,
        "font-weight": 700,
        "font-family": "ui-sans-serif,system-ui,sans-serif"
      });
      f.textContent = uu(wt(y), 20), S.appendChild(f);
      const $ = Object.keys(y.components ?? {}).length, u = se("text", {
        x: y.x,
        y: y.y + 14,
        "text-anchor": "middle",
        fill: O.netInitials,
        "font-size": 10,
        "font-family": "ui-sans-serif,system-ui,sans-serif"
      });
      u.textContent = `${$} component${$ === 1 ? "" : "s"}`, S.appendChild(u), Fn(S, wt(y)), S.addEventListener("click", () => s("node", v)), h.appendChild(S);
    }), {
      setSelected(y) {
        _.forEach((v, S) => {
          const b = y?.kind === "node" && y.index === S;
          v.setAttribute("stroke", b ? O.cardBorderActive : O.cardBorder), v.setAttribute("stroke-width", b ? "3" : "2");
        }), p.forEach((v, S) => {
          const b = y?.kind === "edge" && y.index === S;
          v.setAttribute("stroke", b ? O.netHaloColor : O.netEdgeLine), v.setAttribute("stroke-width", b ? "4" : "2");
        });
      }
    };
  }
}
Pe("gufe-alchemical-network", hu);
function mu(e) {
  return e.name || e.type.replace(/Viz$/, "");
}
function gu(e) {
  return e.type === "UnknownComponentViz" ? e.gufe_type : e.type.replace(/Viz$/, "");
}
class yu extends xe {
  placeholder() {
    return "Waiting for a ChemicalSystem payload...";
  }
  renderView(t, n) {
    const r = xt(n), i = [], o = [];
    for (const [S, b] of Object.entries(n.components ?? {})) {
      const f = Je(r, b);
      f ? i.push([S, f]) : o.push(S);
    }
    const s = Be(n.name || "Chemical system");
    if (s.statsEl.appendChild(de("components", String(i.length))), t.appendChild(s), !i.length)
      return t.appendChild(
        le(
          o.length ? "None of this system's components are in its registry." : "This chemical system has no components."
        )
      ), {};
    const a = j("div", "flex:1;min-height:0;position:relative;display:flex;flex-direction:row;");
    t.appendChild(a), o.length && Ge(
      a,
      `${o.length} component${o.length === 1 ? "" : "s"} named by this system (${o.join(", ")}) are not in its registry`
    );
    const l = j(
      "div",
      `flex:0 0 220px;min-width:0;overflow:auto;display:flex;flex-direction:column;gap:6px;padding:10px;background:${O.panelBg};border-right:1px solid ${O.splitBorder};`
    );
    a.appendChild(l);
    const h = j("div", "flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;");
    a.appendChild(h);
    const p = j("div", "flex:1;min-height:0;display:flex;");
    h.appendChild(p);
    const _ = document.createElement("gufe-view");
    _.style.cssText = "flex:1;min-width:0;min-height:0;", p.appendChild(_);
    const y = [], v = (S) => {
      y.forEach((b, f) => {
        const $ = f === S;
        b.style.background = $ ? O.cardBgActive : O.cardBg, b.style.borderColor = $ ? O.cardBorderActive : O.cardBorder;
      }), _.payload = i[S][1];
    };
    return i.forEach(([S, b], f) => {
      const $ = j(
        "button",
        `display:flex;flex-direction:column;align-items:flex-start;gap:4px;padding:8px 10px;text-align:left;border:1px solid ${O.cardBorder};border-radius:8px;background:${O.cardBg};cursor:pointer;font-family:inherit;font-size:\${FONT.body};width:100%;`
      );
      $.appendChild(j("span", `font-weight:700;color:${O.textPrimary};`, S)), $.appendChild(j("span", `font-size:${Z.small};color:${O.textMuted};`, mu(b))), $.appendChild(Et(gu(b))), $.onclick = () => v(f), y.push($), l.appendChild($);
    }), v(0), {
      onResize: () => _.resize?.(),
      // Removing the nested view fires its own `disconnectedCallback`, which is
      // where whatever it mounted releases its viewers.
      cleanup: () => _.remove()
    };
  }
}
Pe("gufe-chemical-system", yu);
class vu extends xe {
  placeholder() {
    return "Waiting for a Protocol payload...";
  }
  renderView(t, n) {
    const r = Be(n.gufe_type || n.name || "Protocol");
    r.statsEl.appendChild(Et(n.gufe_type)), t.appendChild(r);
    const i = j(
      "div",
      "flex:1;min-height:0;overflow:auto;display:flex;align-items:center;justify-content:center;padding:24px;"
    );
    t.appendChild(i);
    const o = An();
    return o.style.maxWidth = "460px", o.appendChild(Fe("gufe class", n.gufe_type, !0)), n.name && o.appendChild(Fe("Name", n.name)), o.appendChild(Fe("gufe key", n["gufe-key"], !0)), o.appendChild(
      j(
        "div",
        `padding-top:10px;font-size:${Z.small};line-height:1.6;color:${O.textMuted2};`,
        "A Protocol's settings are not carried in this payload: they are large, deeply nested, and nothing draws them yet."
      )
    ), i.appendChild(o), {};
  }
}
Pe("gufe-protocol", vu);
const Ee = { width: 340, height: 260, padding: 14, radius: 12 }, $u = 150, bu = 40, wu = 24;
function _u(e) {
  let t = e >>> 0;
  return () => (t = t * 1664525 + 1013904223 >>> 0, t / 4294967296);
}
function Su(e) {
  const t = /-?\d+(\.\d+)?([eE][-+]?\d+)?/.exec(e ?? "");
  if (!t) return null;
  const n = Number(t[0]);
  return Number.isFinite(n) ? n : null;
}
function Cu(e) {
  return e == null || e <= 0 ? 0 : Math.max(1, Math.min(wu, Math.round(e * bu)));
}
function ku(e) {
  const t = se("svg", {
    viewBox: `0 0 ${Ee.width} ${Ee.height}`,
    style: "width:100%;height:100%;max-width:100%;",
    role: "img"
  });
  Fn(t, `${e.smiles || "solvent"} box`), t.appendChild(
    se("rect", {
      x: 1,
      y: 1,
      width: Ee.width - 2,
      height: Ee.height - 2,
      rx: Ee.radius,
      fill: O.boxFill,
      stroke: O.boxStroke,
      "stroke-width": 1.5
    })
  );
  const n = _u(1597463007), r = () => ({
    x: Ee.padding + n() * (Ee.width - 2 * Ee.padding),
    y: Ee.padding + n() * (Ee.height - 2 * Ee.padding)
  });
  for (let s = 0; s < $u; s++) {
    const { x: a, y: l } = r();
    t.appendChild(se("circle", { cx: a, cy: l, r: 2.4, fill: O.textMuted2, "fill-opacity": 0.45 }));
  }
  const i = Cu(Su(e.ion_concentration)), o = [
    [e.positive_ion, O.diffAdded],
    [e.negative_ion, O.diffRemoved]
  ];
  for (const [s, a] of o)
    for (let l = 0; l < i; l++) {
      const { x: h, y: p } = r(), _ = se("circle", { cx: h, cy: p, r: 5.5, fill: a, "fill-opacity": 0.85 });
      t.appendChild(Fn(_, s));
    }
  return t;
}
class Eu extends xe {
  placeholder() {
    return "Waiting for a SolventComponent payload...";
  }
  renderView(t, n) {
    const r = Be(n.name || "Solvent");
    r.statsEl.appendChild(de("neutralized", n.neutralize ? "yes" : "no")), r.statsEl.appendChild(de(n.positive_ion, "", O.diffAdded)), r.statsEl.appendChild(de(n.negative_ion, "", O.diffRemoved)), t.appendChild(r);
    const i = j(
      "div",
      "flex:1;min-height:0;display:flex;flex-wrap:wrap;gap:16px;padding:16px;overflow:auto;align-items:flex-start;"
    );
    t.appendChild(i);
    const o = An();
    o.style.flex = "1 1 320px", o.appendChild(Fe("SMILES", n.smiles, !0)), o.appendChild(Fe("Positive ion", n.positive_ion)), o.appendChild(Fe("Negative ion", n.negative_ion)), o.appendChild(Fe("Ion concentration", n.ion_concentration)), o.appendChild(Fe("Neutralize", n.neutralize ? "yes" : "no")), i.appendChild(o);
    const s = An();
    return s.style.flex = "1 1 340px", s.style.alignItems = "center", s.appendChild(ku(n)), s.appendChild(
      j(
        "div",
        `padding-top:10px;font-size:${Z.small};text-align:center;color:${O.textMuted2};`,
        "Schematic only: the dots show which ions are present, not how many."
      )
    ), i.appendChild(s), {};
  }
}
Pe("gufe-solvent", Eu);
const mr = {
  unchanged: O.diffUnchanged,
  changed: O.diffChanged,
  added: O.diffAdded,
  removed: O.diffRemoved
};
function xu(e, t) {
  return e && !t ? "removed" : !e && t ? "added" : e === t ? "unchanged" : "changed";
}
function Pu(e, t) {
  return [.../* @__PURE__ */ new Set([...Object.keys(e.components ?? {}), ...Object.keys(t.components ?? {})])].sort();
}
function Au(e) {
  if (!e) return null;
  const t = e.type === "UnknownComponentViz" ? e.gufe_type : e.type.replace(/Viz$/, "");
  return { name: e.name || "(unnamed)", type: t };
}
function Oi(e, t) {
  const n = j(
    "div",
    `flex:1 1 50%;min-width:0;display:flex;flex-direction:column;gap:4px;padding:8px 10px;border-radius:8px;background:${O.cardBg};border:1px solid ${O.cardBorder};`
  ), r = Au(e);
  return r ? (n.style.borderColor = t === "unchanged" ? O.cardBorder : mr[t], n.appendChild(j("span", `font-size:${Z.body};font-weight:600;color:${O.textPrimary};`, r.name)), n.appendChild(Et(r.type)), n) : (n.style.background = "transparent", n.style.borderStyle = "dashed", n.appendChild(j("span", `font-size:${Z.body};color:${O.textMuted2};`, "absent")), n);
}
function Ru(e, t) {
  const n = Je(t, e.componentA), r = Je(t, e.componentB);
  return `${n ? ft(n) : "A"} to ${r ? ft(r) : "B"}`;
}
class Nu extends xe {
  placeholder() {
    return "Waiting for a Transformation payload...";
  }
  renderView(t, n) {
    const r = xt(n), i = Te(r, n.stateA, "ChemicalSystemViz"), o = Te(r, n.stateB, "ChemicalSystemViz"), s = Te(r, n.protocol, "ProtocolViz"), a = n.mappings ?? [], l = Be(n.name || "Transformation");
    if (l.statsEl.appendChild(de("protocol", s?.gufe_type || s?.name || "-")), l.statsEl.appendChild(de("mappings", String(a.length))), t.appendChild(l), !i || !o)
      return t.appendChild(
        le("This transformation names two chemical systems, and its registry does not hold them.")
      ), {};
    const h = Pu(i, o), p = j("div", "flex:0 0 auto;max-height:45%;overflow:auto;padding:12px 14px;");
    t.appendChild(p);
    const _ = j("div", "display:flex;gap:10px;padding:0 0 6px 120px;");
    for (const [f, $] of [
      ["State A", i],
      ["State B", o]
    ])
      _.appendChild(
        j(
          "div",
          `flex:1 1 50%;min-width:0;font-size:${Z.small};font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:${O.textMuted2};`,
          `${f}${$.name ? ` - ${$.name}` : ""}`
        )
      );
    p.appendChild(_);
    for (const f of h) {
      const $ = i.components?.[f], u = o.components?.[f], g = xu($, u), C = Je(r, $), c = Je(r, u), d = j("div", "display:flex;align-items:stretch;gap:10px;padding:4px 0;"), m = j("div", "flex:0 0 110px;display:flex;align-items:center;gap:6px;min-width:0;");
      m.appendChild(
        j("span", `width:8px;height:8px;border-radius:50%;flex-shrink:0;background:${mr[g]};`)
      );
      const k = j("span", `font-size:${Z.body};font-weight:700;color:${O.textPrimary};overflow-wrap:anywhere;`, f);
      k.title = g, m.appendChild(k), d.appendChild(m), d.appendChild(Oi(C, g)), d.appendChild(Oi(c, g)), p.appendChild(d);
    }
    const y = j(
      "div",
      `display:flex;flex-wrap:wrap;gap:12px;padding:8px 0 0;font-size:${Z.small};color:${O.textMuted};`
    );
    for (const f of ["unchanged", "changed", "added", "removed"])
      y.appendChild(de(f, "", mr[f]));
    p.appendChild(y);
    const v = j(
      "div",
      Ct,
      "Atom mapping"
    );
    if (t.appendChild(v), !a.length)
      return t.appendChild(
        le(
          "This transformation carries no atom mapping - nothing here maps one small molecule onto another."
        )
      ), {};
    const S = document.createElement("gufe-atom-mapping");
    S.style.cssText = "flex:1;min-height:0;min-width:0;";
    const b = (f) => {
      S.payload = as(a[f], r);
    };
    if (b(0), a.length > 1) {
      const f = j(
        "div",
        `display:flex;align-items:center;gap:8px;padding:6px 10px;flex-shrink:0;font-size:\${FONT.small};background:${O.toolbarBg};border-bottom:1px solid ${O.toolbarBorder};color:${O.textMuted};`
      );
      f.appendChild(
        On(
          a.map(($, u) => ({
            id: String(u),
            label: $.name || Ru($, r)
          })),
          "0",
          ($) => b(Number($))
        )
      ), t.appendChild(f);
    }
    return t.appendChild(S), {
      onResize: () => S.resize?.(),
      cleanup: () => S.remove()
    };
  }
}
Pe("gufe-transformation", Nu);
class Fu extends xe {
  placeholder() {
    return "Waiting for a component payload...";
  }
  renderView(t, n) {
    const r = Be(n.name || "Unnamed component");
    r.statsEl.appendChild(Et(n.gufe_type)), t.appendChild(r);
    const i = j("div", "flex:1;min-height:0;overflow:auto;display:flex;align-items:center;justify-content:center;padding:24px;");
    t.appendChild(i);
    const o = An();
    return o.style.maxWidth = "460px", o.appendChild(
      j(
        "div",
        `font-size:${Z.heading};font-weight:600;padding-bottom:6px;color:${O.textPrimary};`,
        `There is no visualization for ${n.gufe_type}.`
      )
    ), o.appendChild(
      j(
        "div",
        `font-size:${Z.body};line-height:1.6;padding-bottom:10px;color:${O.textMuted};`,
        "gufe lets a project define its own Component subclasses, so this is a component this build has never been taught to draw - not a broken payload. Everything gufe knows about it that survives serialization is below."
      )
    ), o.appendChild(Fe("Name", n.name || "(unnamed)")), o.appendChild(Fe("gufe class", n.gufe_type, !0)), i.appendChild(o), {};
  }
}
Pe("gufe-unknown-component", Fu);
function Du(e, t) {
  let n = e.querySelector("gufe-view");
  return n || (n = document.createElement("gufe-view"), n.style.cssText = "display:block;width:100%;height:100%;", e.appendChild(n)), t !== void 0 && (n.payload = t), n;
}
typeof globalThis < "u" && (globalThis.gufeViz = { settings: Yi, reset: gl });
export {
  hs as CHROME_OPEN_BY_DEFAULT,
  bs as DEBUG_ATTRIBUTE,
  ws as DEBUG_GLOBAL,
  Yl as DEFAULT_DEPICT_STYLE,
  $l as DEFAULT_ZOOM_BOUNDS,
  ct as DEPICT_STYLE,
  nd as DEPICT_STYLE_RANGES,
  hu as GufeAlchemicalNetwork,
  Ld as GufeAtomMapping,
  yu as GufeChemicalSystem,
  xe as GufeElement,
  cu as GufeLigandNetwork,
  Pd as GufeProtein,
  vu as GufeProtocol,
  _d as GufeSmallMolecule,
  Eu as GufeSolvent,
  Nu as GufeTransformation,
  Fu as GufeUnknownComponent,
  cl as GufeView,
  nr as MAPPING_COLORS,
  Iu as MAPPING_RAMP_3D,
  zu as MAPPING_RAMP_NAME,
  Ou as PAYLOAD_TYPES,
  Mu as SCHEMA_TYPES,
  kr as VIEW_TAGS,
  Fd as align2D,
  Td as alignedToPartner,
  Nd as applyRT,
  Od as applyTurn,
  wl as boundedZoom,
  xt as buildRegistry,
  ut as choice,
  vs as chromeMenu,
  Cs as debugEnabled,
  Pe as defineElement,
  Ji as describeProblem,
  xu as diffStatus,
  ju as dispatchProblem,
  ft as entryLabel,
  _t as flag,
  sl as formatIssues,
  Rr as guardWheel,
  Rd as kabsch,
  ki as laidOut,
  jd as layoutPair,
  Vd as liftFor,
  Es as logPayload,
  Je as lookup,
  Te as lookupOfType,
  as as mappingPayloadFor,
  cd as markGroups,
  rr as markedBonds,
  Du as mount,
  od as normaliseDepictStyle,
  hl as num,
  id as parseAtomSpec,
  Su as parseConcentration,
  ks as payloadJson,
  Nr as resetControl,
  gl as resetSettings,
  ou as selectionText,
  qn as setting,
  Yi as settings,
  ml as textSetting,
  xi as uniqueAtoms,
  ad as uniqueBonds,
  Tu as validateAs,
  il as validatePayload,
  Qi as viewerInteraction,
  Sl as wheelFactor,
  Md as withCoords
};
