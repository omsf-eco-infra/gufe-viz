/**
 * The two colour tables, ported from the gufe framejs frame's `code.js` (lines
 * 20–182). Every view reads colours from `T` and nothing hard-codes a hex value,
 * which is what makes a theme change one edit rather than thirty.
 *
 * 3Dmol wants `0x`-prefixed colour strings and CSS wants `#`-prefixed ones, so
 * both forms are carried deliberately rather than converted at each call site.
 */

export interface Theme {
  // surfaces
  appBg: string;
  panelBg: string;
  cardBg: string;
  cardBgHover: string;
  cardBgActive: string;
  cardBorder: string;
  cardBorderActive: string;
  splitBorder: string;
  toolbarBg: string;
  toolbarBorder: string;
  tooltipBg: string;
  tooltipBorder: string;

  // text
  titleColor: string;
  textPrimary: string;
  textMuted: string;
  textMuted2: string;

  // controls
  selectBg: string;
  selectBorder: string;
  labelBg: string;
  labelFg: string;
  badgeBg: string;
  badgeFg: string;
  switcherBg: string;
  btnBg: string;
  btnBgHover: string;
  btnBgActive: string;
  btnFg: string;
  btnBorder: string;

  // status
  okBg: string;
  okFg: string;
  okBorder: string;
  warnBg: string;
  warnFg: string;
  warnBorder: string;
  loadingFg: string;
  errorFg: string;

  // 3D viewers (3Dmol wants 0x-prefixed colours)
  viewerBg: string;
  canvas2DBg: string;
  colorCore: string;
  colorUniqueA: string;
  colorUniqueB: string;
  linesMolA: string;
  linesMolB: string;
  linesDash: string;
  overlayMolA: string;
  overlayMolB: string;
  rgbCore: [number, number, number];
  rgbUniqueA: [number, number, number];
  rgbUniqueB: [number, number, number];
  chipCore: string;
  chipUniqueA: string;
  chipUniqueB: string;

  // diff palette (transformation view, Phase 4)
  diffUnchanged: string;
  diffChanged: string;
  diffAdded: string;
  diffRemoved: string;

  // graphs (network views, Phase 4/5)
  netCanvasBg: string;
  netNodeFill: string;
  netNodeStroke: string;
  netNodeLabel: string;
  netInitials: string;
  netEdgeRamp: [string, string];
  netEdgeLine: string;
  netEdgeLabel: string;
  netLabelBg: string;
  netHaloColor: string;

  // solvent schematic (Phase 4)
  boxFill: string;
  boxStroke: string;
}

export const THEMES: { dark: Theme; light: Theme } = {
  dark: {
    appBg: "#1a1a2e",
    panelBg: "#16213e",
    cardBg: "#16213e",
    cardBgHover: "#1a2b4f",
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

    okBg: "#14532d",
    okFg: "#86efac",
    okBorder: "#166534",
    warnBg: "#3b1d1d",
    warnFg: "#ffb4b4",
    warnBorder: "#7f2a2a",
    loadingFg: "#888",
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
    rgbCore: [0.7, 0.7, 0.7],
    rgbUniqueA: [1.0, 0.3, 0.3],
    rgbUniqueB: [0.3, 1.0, 0.5],
    chipCore: "#aaaaaa",
    chipUniqueA: "#ff4d4d",
    chipUniqueB: "#4dff88",

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
    boxStroke: "#2a4a7f",
  },
  light: {
    appBg: "#ffffff",
    panelBg: "#f8fafc",
    cardBg: "#ffffff",
    cardBgHover: "#f1f5f9",
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

    okBg: "#dcfce7",
    okFg: "#166534",
    okBorder: "#bbf7d0",
    warnBg: "#fee2e2",
    warnFg: "#991b1b",
    warnBorder: "#fecaca",
    loadingFg: "#888",
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
    rgbCore: [0.55, 0.55, 0.55],
    rgbUniqueA: [0.84, 0.16, 0.16],
    rgbUniqueB: [0.16, 0.62, 0.29],
    chipCore: "#888888",
    chipUniqueA: "#d62828",
    chipUniqueB: "#2a9d4a",

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
    boxStroke: "#bfdbfe",
  },
};

/**
 * `code.js` had a hand-flipped `DARK_MODE` constant. Here the choice is made
 * once at load from the host's colour-scheme preference, falling back to light
 * where `matchMedia` is unavailable (jsdom, older embedders). Views read `T`
 * when they build their DOM, so this is fixed for the lifetime of the page —
 * a live theme switch is a Phase 4+ concern, not something V1 needs.
 */
function prefersDark(): boolean {
  try {
    return globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
  } catch {
    return false;
  }
}

export const T: Theme = prefersDark() ? THEMES.dark : THEMES.light;
