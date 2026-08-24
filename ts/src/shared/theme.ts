/**
 * The interface palette: two colour tables, light and dark.
 *
 * This is the raw colour data. Views do not read it directly - they go through
 * `style.ts`, which is the front door and turns these into the buttons, panels
 * and text a view actually asks for. Keeping the palette separate from the
 * component styles means a colour can be retuned without touching a layout, and
 * a layout without touching a colour.
 *
 * Nothing chemical belongs here. The mapping highlights and the pair ramp are
 * mirrored from gufe in `atom-colors.ts`, and the 3D mode colours from the
 * framejs prototype in `molecule-colors.ts`. Those say what a picture means;
 * these only say what it looks like.
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


  // diff palette (transformation view)
  diffUnchanged: string;
  diffChanged: string;
  diffAdded: string;
  diffRemoved: string;

  // graphs (network views)
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

  // solvent schematic
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
 * The choice is made once at load from the host's colour-scheme preference,
 * falling back to light where `matchMedia` is unavailable (jsdom, older
 * embedders). Views read `T` when they build their DOM, so this is fixed for
 * the lifetime of the page; a live theme switch is a later concern.
 */
function prefersDark(): boolean {
  try {
    return globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
  } catch {
    return false;
  }
}

export const T: Theme = prefersDark() ? THEMES.dark : THEMES.light;
