/**
 * `<gufe-small-molecule>` - 2D depiction | 3D conformer, with an info bar.
 *
 * RDKit draws the 2D depiction and 3Dmol the 3D conformer; both are loaded
 * lazily, so a page with no small molecule on it never pays for RDKit's wasm.
 */

import { buttonGroup, toggleButton, centredMessage, EM_DASH, el, errText, headerStrip, viewerHost } from "../shared/dom.js";
import { defineElement, GufeElement, type ViewHandle } from "../shared/element.js";
import { choice, flag } from "../shared/settings.js";
import { load3Dmol, loadRDKit, ThreeDmol, type ThreeDmolViewer } from "../shared/engines.js";
import { resetControl, viewerInteraction, type BoundedZoom, type Interaction } from "../shared/interact.js";
import { depictSVG, ensureSDFTerminator, parseCounts, placeDepiction } from "../shared/sdf.js";
import { OVERLAY_CONTROLS, PANE_LABEL, SURFACE } from "../shared/style.js";
import { T } from "../shared/theme.js";
import type { SmallMoleculeComponentViz } from "../schema/types.js";

const SMALL_MOL_STYLES = [
  { id: "stick", label: "Stick", title: "Sticks only" },
  { id: "ball", label: "Ball+Stick", title: "Ball and stick" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" },
] as const;

const SMALL_MOL_SPECS: Record<string, object> = {
  stick: { stick: { radius: 0.15, colorscheme: "Jmol" } },
  ball: { stick: { radius: 0.12, colorscheme: "Jmol" }, sphere: { scale: 0.28, colorscheme: "Jmol" } },
  sphere: { sphere: { scale: 1.0, colorscheme: "Jmol" } },
};

const DEPICT_SIZE = 400;

export class GufeSmallMolecule extends GufeElement<SmallMoleculeComponentViz> {
  protected override placeholder(): string {
    return "Waiting for a SmallMoleculeComponent payload...";
  }

  protected renderView(host: HTMLDivElement, payload: SmallMoleculeComponentViz): ViewHandle {
    const sdf = payload.sdf;
    const name = payload.name ?? "";
    const smiles = payload.smiles;
    const charge = payload.total_charge;

    host.appendChild(headerStrip(name || "Unnamed molecule"));

    const split = el("div", "flex:1;display:flex;flex-direction:row;overflow:hidden;min-height:0;");
    host.appendChild(split);

    const left = el("div", "flex:1 1 50%;min-width:0;display:flex;flex-direction:column;");
    const right = el("div", "flex:1 1 50%;min-width:0;display:flex;flex-direction:column;position:relative;");
    split.appendChild(left);
    split.appendChild(el("div", `width:1px;flex-shrink:0;background:${T.splitBorder};`));
    split.appendChild(right);

    const paneLabel = (text: string) =>
      el("div",PANE_LABEL, text);

    left.appendChild(paneLabel("2D"));
    const depictBox = el(
      "div",
      "flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:8px;" +
        `background:${SURFACE.canvas2D};`,
    );
    left.appendChild(depictBox);

    right.appendChild(paneLabel("3D"));
    const host3D = viewerHost();
    right.appendChild(host3D.wrap);

    // --- info bar ---
    const infoBar = el(
      "div",
      "flex-shrink:0;display:flex;flex-wrap:wrap;align-items:baseline;gap:6px 20px;padding:8px 16px;font-size:${FONT.body};" +
        `background:${T.toolbarBg};border-top:1px solid ${T.toolbarBorder};color:${T.textPrimary};`,
    );
    host.appendChild(infoBar);

    const counts = sdf ? parseCounts(sdf) : null;
    const cells: [string, string, boolean][] = [
      ["Name", name || EM_DASH, false],
      ["SMILES", smiles || EM_DASH, true],
      ["Charge", charge == null ? EM_DASH : String(charge), false],
      ["Atoms", counts ? String(counts.atoms) : EM_DASH, false],
      ["Bonds", counts ? String(counts.bonds) : EM_DASH, false],
    ];
    for (const [label, value, mono] of cells) {
      const cell = el("div", "display:flex;align-items:baseline;gap:6px;min-width:0;");
      cell.appendChild(
        el(
          "span",
          "font-size:${FONT.tiny};font-weight:700;letter-spacing:.08em;text-transform:uppercase;flex-shrink:0;" +
            `color:${T.textMuted2};`,
          label,
        ),
      );
      const v = el(
        "span",
        `user-select:text;cursor:text;color:${T.textPrimary}` +
          (mono ? ";font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:${FONT.small};overflow-wrap:anywhere;" : ""),
        value,
      );
      v.title = value;
      cell.appendChild(v);
      infoBar.appendChild(cell);
    }

    // A schema-valid payload can still carry an empty or unusable SDF; that is a
    // render-degraded state, not an error.
    if (!sdf || !sdf.trim()) {
      depictBox.appendChild(centredMessage("No molecule provided"));
      host3D.container.appendChild(centredMessage("No molecule provided"));
      return {};
    }

    // --- 2D ---
    depictBox.appendChild(centredMessage("Loading 2D depiction..."));
    loadRDKit()
      .then((RDKit) => {
        const svg = depictSVG(RDKit, sdf, DEPICT_SIZE);
        if (svg) {
          placeDepiction(depictBox, svg, DEPICT_SIZE);
        } else {
          depictBox.replaceChildren(centredMessage("Failed to parse molecule", true));
        }
      })
      .catch((err: unknown) => {
        depictBox.replaceChildren(centredMessage(`RDKit failed to load: ${errText(err)}`, true));
      });

    // --- 3D ---
    let viewer: ThreeDmolViewer | null = null;
    let interaction: (BoundedZoom & Interaction) | null = null;
    const styleSetting = choice(
      "small-molecule.style",
      "stick",
      SMALL_MOL_STYLES.map((s) => s.id),
    );
    const spinSetting = flag("small-molecule.spin", false);
    let style: string = styleSetting.get();
    let spinning = spinSetting.get();

    const switcher = el(
      "div",
      OVERLAY_CONTROLS,
    );
    switcher.appendChild(
      buttonGroup(
        SMALL_MOL_STYLES,
        style,
        (id) => {
          style = id;
          if (viewer) {
            viewer.setStyle({}, SMALL_MOL_SPECS[id]);
            viewer.render();
          }
        },
        styleSetting,
      ),
    );
    const spinBtn = toggleButton(
      "Spin",
      spinning,
      (on) => {
        spinning = on;
        try {
          viewer?.spin(on ? "y" : false);
        } catch {
          /* 3Dmol v1 quirk */
        }
      },
      { title: "Toggle continuous rotation", remember: spinSetting },
    );
    spinBtn.style.marginLeft = "4px";
    switcher.appendChild(spinBtn);

    const reset = resetControl(() => interaction?.reset());
    reset.style.marginLeft = "4px";
    switcher.appendChild(reset);
    right.appendChild(switcher);

    host3D.container.appendChild(centredMessage("Loading 3D viewer..."));
    load3Dmol()
      .then(() => {
        host3D.container.replaceChildren();
        viewer = ThreeDmol!.createViewer(host3D.container, { backgroundColor: SURFACE.viewer });
        viewer.addModel(ensureSDFTerminator(sdf), "sdf");
        viewer.setStyle({}, SMALL_MOL_SPECS[style]);
        viewer.zoomTo();
        viewer.render();
        // After zoomTo, so the bound is measured from the opening framing.
        interaction = viewerInteraction(host3D.container, viewer);
      })
      .catch((e: unknown) => {
        host3D.container.replaceChildren(centredMessage(`3D render failed: ${errText(e)}`, true));
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

defineElement("gufe-small-molecule", GufeSmallMolecule);
