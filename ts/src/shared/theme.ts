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
 * ## Where these came from
 *
 * openfree.energy, so a visualization sitting beside the docs looks like it
 * belongs to them rather than to whoever wrote it. Read from that site's own
 * stylesheet rather than sampled by eye:
 *
 *   #4182e4  the brand blue - its header, its buttons, its hero
 *   #2b2b40  the dark ground its page and footer sit on
 *   #00a4ca  links
 *   #51cbee  focus rings
 *   #333 #666 #999  text, in three weights of emphasis
 *   #eee #ccc  borders and rules
 *
 * Inter is their body face too, which `style.ts` already asked for.
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
  /** A ligand's name under its structure: quieter than the structure itself. */
  netNodeCaption: string;
  netInitials: string;
  netEdgeRamp: [string, string];
  netEdgeLine: string;
  netEdgeLabel: string;
  netHaloColor: string;

  // solvent schematic
  boxFill: string;
  boxStroke: string;
}

export const THEMES: { dark: Theme; light: Theme } = {
  dark: {
    appBg: "#2b2b40",
    panelBg: "#33334d",
    cardBg: "#33334d",
    cardBgHover: "#3d3d5c",
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

    okBg: "#14532d",
    okFg: "#86efac",
    okBorder: "#166534",
    warnBg: "#3b1d1d",
    warnFg: "#ffb4b4",
    warnBorder: "#7f2a2a",
    loadingFg: "#888",
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
    boxStroke: "#45455e",
  },
  light: {
    appBg: "#ffffff",
    panelBg: "#f7f8fa",
    cardBg: "#ffffff",
    cardBgHover: "#f0f4fb",
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
    netNodeStroke: "#cccccc",
    netNodeLabel: "#333333",
    netNodeCaption: "#666666",
    netInitials: "#4182e4",
    netEdgeRamp: ["#e8eaef", "#4182e4"],
    netEdgeLine: "#999999",
    netEdgeLabel: "#333333",
    netHaloColor: "#51cbee",

    boxFill: "#e6effc",
    boxStroke: "#cccccc",
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
