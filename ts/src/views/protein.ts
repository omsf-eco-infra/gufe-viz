/**
 * `<gufe-protein>` — a toolbar and a full-pane 3Dmol viewer.
 *
 * Ported from `code.js` lines 1384–1511; the PDB statistics and styling live in
 * `shared/pdb.ts` (1031–1166) because the chemical-system view will want them
 * too in Phase 4.
 */

import { BTN_CSS, buttonGroup, el, errText, SELECT_CSS, viewerHost } from "../shared/dom.js";
import { defineElement, GufeElement, type ViewHandle } from "../shared/element.js";
import { load3Dmol, ThreeDmol, type ThreeDmolViewer } from "../shared/engines.js";
import {
  applyProteinStyles,
  parsePdbStats,
  proteinStatsText,
  type PdbStats,
  type ProteinColorScheme,
  type ProteinOptions,
  type ProteinRepresentation,
  type StatusFn,
} from "../shared/pdb.js";
import { T } from "../shared/theme.js";
import type { ProteinPayload } from "../schema/types.js";

const PROTEIN_REPS = [
  { id: "cartoon", label: "Cartoon", title: "Ribbon / cartoon backbone" },
  { id: "surface", label: "Surface", title: "Molecular (VDW) surface" },
  { id: "stick", label: "Stick", title: "All-atom sticks" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" },
] as const;

const PROTEIN_COLOR_SCHEMES = [
  { id: "chain", label: "Chain" },
  { id: "spectrum", label: "Spectrum" },
  { id: "ss", label: "Secondary structure" },
  { id: "element", label: "Element" },
] as const;

export class GufeProtein extends GufeElement<ProteinPayload> {
  protected override placeholder(): string {
    return "Waiting for a ProteinComponent payload…";
  }

  protected renderView(host: HTMLDivElement, payload: ProteinPayload): ViewHandle {
    const pdb = payload.data.pdb;
    const name = payload.name ?? "";

    const opts: ProteinOptions = { rep: "cartoon", color: "chain", waters: false, hetero: true };
    let viewer: ThreeDmolViewer | null = null;
    let stats: PdbStats | null = null;

    // ─── toolbar ───
    const toolbar = el(
      "div",
      "display:flex;align-items:center;gap:14px;flex-wrap:wrap;padding:8px 14px;flex-shrink:0;font-size:12px;" +
        `background:${T.toolbarBg};border-bottom:1px solid ${T.toolbarBorder};color:${T.textPrimary};`,
    );
    host.appendChild(toolbar);

    toolbar.appendChild(
      el("span", `font-weight:700;font-size:14px;letter-spacing:.02em;color:${T.titleColor};`, name || "Protein"),
    );

    const groupLabel = (text: string) => el("span", `font-size:11px;color:${T.textMuted};`, text);

    toolbar.appendChild(groupLabel("Style:"));
    toolbar.appendChild(
      buttonGroup(PROTEIN_REPS, opts.rep, (id) => {
        opts.rep = id as ProteinRepresentation;
        restyle();
      }),
    );

    toolbar.appendChild(groupLabel("Color:"));
    const colorSelect = el("select", SELECT_CSS);
    for (const c of PROTEIN_COLOR_SCHEMES) {
      const o = el("option", "", c.label);
      o.value = c.id;
      colorSelect.appendChild(o);
    }
    colorSelect.value = opts.color;
    colorSelect.addEventListener("change", () => {
      opts.color = colorSelect.value as ProteinColorScheme;
      restyle();
    });
    toolbar.appendChild(colorSelect);

    const toggles = el("div", "display:flex;gap:4px;");
    toolbar.appendChild(toggles);
    const toggleSpecs: [keyof ProteinOptions, string, string, () => void][] = [
      ["waters", "Waters", "Show water molecules", () => restyle()],
      ["hetero", "Hetero", "Show hetero atoms / ligands / ions / lipids", () => restyle()],
      ["spin", "Spin", "Rotate the view continuously", () => viewer?.spin(opts.spin ? "y" : false)],
    ];
    for (const [key, label, title, onChange] of toggleSpecs) {
      const btn = el("button", BTN_CSS, label);
      btn.title = title;
      btn.style.background = opts[key] ? T.btnBgActive : T.btnBg;
      btn.onclick = () => {
        (opts[key] as boolean) = !opts[key];
        btn.style.background = opts[key] ? T.btnBgActive : T.btnBg;
        onChange();
      };
      toggles.appendChild(btn);
    }

    const statsEl = el("span", `margin-left:auto;font-size:11px;white-space:nowrap;color:${T.textMuted2};`);
    toolbar.appendChild(statsEl);

    // ─── viewer + status overlay ───
    const pane = viewerHost();
    host.appendChild(pane.wrap);

    const statusEl = el(
      "div",
      "position:absolute;top:12px;left:50%;transform:translateX(-50%);padding:6px 14px;border-radius:6px;" +
        "font-size:12px;z-index:20;display:none;pointer-events:none;",
    );
    pane.wrap.appendChild(statusEl);

    const showStatus: StatusFn = (msg, kind) => {
      if (msg == null) {
        statusEl.style.display = "none";
        return;
      }
      statusEl.textContent = msg;
      statusEl.style.display = "block";
      const isError = kind === "error";
      statusEl.style.background = isError ? T.warnBg : T.toolbarBg;
      statusEl.style.color = isError ? T.warnFg : T.textMuted;
      statusEl.style.border = `1px solid ${isError ? T.warnBorder : T.toolbarBorder}`;
    };

    function restyle(): void {
      if (viewer) applyProteinStyles(viewer, opts, stats, showStatus);
    }

    if (!pdb || !pdb.trim()) {
      showStatus("No protein data — waiting for a PDB payload.");
      return {};
    }

    try {
      stats = parsePdbStats(pdb);
      statsEl.textContent = proteinStatsText(stats);
    } catch (e) {
      showStatus(`⚠ PDB parse error: ${errText(e)}`, "error");
    }

    showStatus("Loading 3D viewer…");
    load3Dmol()
      .then(() => {
        viewer = ThreeDmol!.createViewer(pane.container, { backgroundColor: T.viewerBg });
        viewer.addModel(pdb, "pdb");
        // applyProteinStyles clears the "Loading…" status (or replaces it with
        // the surface-computing message), so there is nothing to hide here.
        applyProteinStyles(viewer, opts, stats, showStatus);
        viewer.zoomTo();
        viewer.spin(opts.spin ? "y" : false);
        viewer.render();
      })
      .catch((e: unknown) => {
        showStatus(`⚠ Failed to render structure: ${errText(e)}`, "error");
      });

    return {
      onResize() {
        if (viewer) {
          viewer.resize();
          viewer.render();
        }
      },
      cleanup() {
        if (!viewer) return;
        try {
          viewer.spin(false);
        } catch {
          /* 3Dmol v1 quirk */
        }
        try {
          viewer.clear();
        } catch {
          /* already gone */
        }
        viewer = null;
      },
    };
  }
}

defineElement("gufe-protein", GufeProtein);
