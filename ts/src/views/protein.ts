/**
 * `<gufe-protein>` - a toolbar and a full-pane 3Dmol viewer.
 *
 * The PDB statistics and styling live in `shared/pdb.ts` rather than here,
 * because the chemical-system view will want them too.
 *
 * All three PDB-carrying payload types render through here: a protein, a
 * protein with explicit solvent, and a protein in a membrane are the same
 * picture with different things in it. They stay separate types because the
 * discriminator is what Python dispatches on and what a future view could
 * specialize on; what differs today is where the viewer starts, because hiding
 * the very thing that distinguishes them would make the three
 * indistinguishable on screen.
 */

import { BTN_CSS, buttonGroup, el, errText, SELECT_CSS, viewerHost } from "../shared/dom.js";
import { defineElement, GufeElement, type ViewHandle } from "../shared/element.js";
import { load3Dmol, ThreeDmol, type ThreeDmolViewer } from "../shared/engines.js";
import { resetControl, viewerInteraction, type BoundedZoom, type Interaction } from "../shared/interact.js";
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
import { BUTTON, FONT, SURFACE, TOOLBAR } from "../shared/style.js";
import { T } from "../shared/theme.js";
import type {
  ProteinComponentViz,
  ProteinMembraneComponentViz,
  SolvatedPDBComponentViz,
} from "../schema/types.js";

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

/** Every payload this view draws: one PDB string and a name, three types. */
export type PdbPayload = ProteinComponentViz | SolvatedPDBComponentViz | ProteinMembraneComponentViz;

export class GufeProtein extends GufeElement<PdbPayload> {
  protected override placeholder(): string {
    return "Waiting for a ProteinComponent payload...";
  }

  protected renderView(host: HTMLDivElement, payload: PdbPayload): ViewHandle {
    const pdb = payload.pdb;
    const name = payload.name ?? "";
    // A solvated or membrane system is defined by what surrounds the protein,
    // so it opens with that shown; a bare protein does not, because a few
    // thousand crystallographic waters would bury it.
    const solvated = payload.type !== "ProteinComponentViz";

    const opts: ProteinOptions = { rep: "cartoon", color: "chain", waters: solvated, hetero: true };
    let viewer: ThreeDmolViewer | null = null;
    let interaction: (BoundedZoom & Interaction) | null = null;
    let stats: PdbStats | null = null;

    // --- toolbar ---
    const toolbar = el(
      "div",
      TOOLBAR.top,
    );
    host.appendChild(toolbar);

    toolbar.appendChild(
      el("span", `font-weight:700;font-size:${FONT.heading};letter-spacing:.02em;color:${T.titleColor};`, name || "Protein"),
    );

    const groupLabel = (text: string) => el("span", `font-size:${FONT.small};color:${T.textMuted};`, text);

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
      btn.style.background = opts[key] ? BUTTON.bgActive : BUTTON.bg;
      btn.onclick = () => {
        (opts[key] as boolean) = !opts[key];
        btn.style.background = opts[key] ? BUTTON.bgActive : BUTTON.bg;
        onChange();
      };
      toggles.appendChild(btn);
    }

    toggles.appendChild(resetControl(() => interaction?.reset()));

    const statsEl = el("span", `margin-left:auto;font-size:${FONT.small};white-space:nowrap;color:${T.textMuted2};`);
    toolbar.appendChild(statsEl);

    // --- viewer + status overlay ---
    const pane = viewerHost();
    host.appendChild(pane.wrap);

    const statusEl = el(
      "div",
      "position:absolute;top:12px;left:50%;transform:translateX(-50%);padding:6px 14px;border-radius:6px;" +
        "font-size:${FONT.body};z-index:20;display:none;pointer-events:none;",
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
      showStatus("No protein data - waiting for a PDB payload.");
      return {};
    }

    try {
      stats = parsePdbStats(pdb);
      statsEl.textContent = proteinStatsText(stats);
    } catch (e) {
      showStatus(`⚠ PDB parse error: ${errText(e)}`, "error");
    }

    showStatus("Loading 3D viewer...");
    load3Dmol()
      .then(() => {
        viewer = ThreeDmol!.createViewer(pane.container, { backgroundColor: SURFACE.viewer });
        viewer.addModel(pdb, "pdb");
        // applyProteinStyles clears the "Loading..." status (or replaces it with
        // the surface-computing message), so there is nothing to hide here.
        applyProteinStyles(viewer, opts, stats, showStatus);
        viewer.zoomTo();
        viewer.spin(opts.spin ? "y" : false);
        viewer.render();
        // After zoomTo, so the bound is measured from the opening framing.
        interaction = viewerInteraction(pane.container, viewer);
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
        interaction?.cleanup();
        interaction = null;
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
