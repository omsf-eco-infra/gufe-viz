/**
 * SDF in, internal shape out, MOL block back out.
 *
 * Internal molecule shape:
 *   { name, symbols: ['C', ...], bonds: [[i, j, order], ...], coords: [[x,y,z], ...] }
 *
 * Note what is *not* here: nothing in this file reconstructs an SDF from gufe's
 * JSON. Python hands over `to_sdf()` output verbatim and TypeScript only reads
 * it.
 */

import { errText } from "./dom.js";
import type { Layout2D } from "./depict-layout.js";
import type { RDKitModule } from "./engines.js";

export interface Molecule {
  name: string;
  symbols: string[];
  /** `[atomIndexA, atomIndexB, order]`, atom indices 0-based. */
  bonds: [number, number, number][];
  coords: [number, number, number][];
}

const NL = "\n";
const SDF_TERMINATOR = "$$$$";

/**
 * Parse a V2000 SDF/MOL record. Only the counts line, atom block and bond block
 * are read; property and data blocks are ignored.
 */
export function parseSDF(sdfText: string, fallbackName?: string): Molecule {
  if (!sdfText || !sdfText.trim()) throw new Error("empty SDF");
  const lines = sdfText.replace(/\r/g, "").split(NL);
  if (lines.length < 4) throw new Error("SDF too short");

  const countsLine = lines[3];
  if (countsLine.indexOf("V3000") !== -1) throw new Error("V3000 molfiles are not supported");
  const nAtoms = parseInt(countsLine.substring(0, 3), 10);
  const nBonds = parseInt(countsLine.substring(3, 6), 10);
  if (!isFinite(nAtoms) || nAtoms <= 0) throw new Error(`bad counts line: ${countsLine}`);

  const coords: [number, number, number][] = [];
  const symbols: string[] = [];
  for (let i = 0; i < nAtoms; i++) {
    const ln = lines[4 + i];
    if (ln == null) throw new Error("truncated atom block");
    coords.push([
      parseFloat(ln.substring(0, 10)) || 0,
      parseFloat(ln.substring(10, 20)) || 0,
      parseFloat(ln.substring(20, 30)) || 0,
    ]);
    symbols.push(ln.substring(31, 34).trim() || "X");
  }

  const bonds: [number, number, number][] = [];
  for (let j = 0; j < (isFinite(nBonds) ? nBonds : 0); j++) {
    const ln = lines[4 + nAtoms + j];
    if (ln == null) break;
    const a = parseInt(ln.substring(0, 3), 10);
    const b = parseInt(ln.substring(3, 6), 10);
    const order = parseInt(ln.substring(6, 9), 10);
    if (!isFinite(a) || !isFinite(b)) continue;
    bonds.push([a - 1, b - 1, isFinite(order) ? order : 1]);
  }

  const title = (lines[0] || "").trim();
  return { name: title || fallbackName || "molecule", symbols, bonds, coords };
}

/** MOL block (V2000) rebuilt from the internal shape - what RDKit is fed. */
export function buildMolBlock(mol: Molecule): string {
  const nAtoms = mol.symbols.length;
  const nBonds = mol.bonds.length;
  const lines = [
    mol.name || "",
    "  Generated",
    "",
    `${String(nAtoms).padStart(3)}${String(nBonds).padStart(3)}  0  0  0  0  0  0  0  0999 V2000`,
  ];
  for (let i = 0; i < nAtoms; i++) {
    const c = mol.coords[i];
    lines.push(
      c[0].toFixed(4).padStart(10) +
        c[1].toFixed(4).padStart(10) +
        c[2].toFixed(4).padStart(10) +
        ` ${mol.symbols[i].padEnd(3)}` +
        " 0  0  0  0  0  0  0  0  0  0  0  0",
    );
  }
  for (let j = 0; j < nBonds; j++) {
    const b = mol.bonds[j];
    // 12 is RDKit's "aromatic" order; SDF spells that 4.
    const sdfType = b[2] === 12 ? 4 : b[2];
    lines.push(
      String(b[0] + 1).padStart(3) + String(b[1] + 1).padStart(3) + String(sdfType).padStart(3) + "  0  0  0  0",
    );
  }
  lines.push("M  END");
  return lines.join(NL);
}

/** SDF = MOL block + the `$$$$` record terminator that 3Dmol expects. */
export const buildSDF = (mol: Molecule): string => `${buildMolBlock(mol)}${NL}${SDF_TERMINATOR}`;

/** `to_sdf()` usually already terminates its record; make sure of it for 3Dmol. */
export const ensureSDFTerminator = (sdf: string): string =>
  sdf.indexOf(SDF_TERMINATOR) >= 0 ? sdf : `${sdf}${NL}${SDF_TERMINATOR}`;

/** The V2000 counts line is the 4th: `aaabbb...` (3 chars each). */
export function parseCounts(sdf: string): { atoms: number; bonds: number } | null {
  const lines = String(sdf).split(/\r?\n/);
  if (lines.length < 4) return null;
  const atoms = parseInt(lines[3].slice(0, 3), 10);
  const bonds = parseInt(lines[3].slice(3, 6), 10);
  return isNaN(atoms) || isNaN(bonds) ? null : { atoms, bonds };
}

/**
 * 2D depiction SVG from a molblock or a SMILES string.
 *
 * `layout` says where the coordinates come from, and is the style document's
 * `layout` at every call site; it is a parameter rather than a read of the
 * document so that this file stays about SDF and RDKit and knows nothing about
 * anyone's taste. Under `conformer` a molblock keeps the pose it arrived with,
 * which for a `SmallMoleculeComponent` is a real 3D conformer flattened onto
 * the page rather than a drawn structure.
 */
export function depictSVG(RDKit: RDKitModule, source: string, size: number, layout: Layout2D): string | null {
  let rdmol = null;
  try {
    rdmol = RDKit.get_mol(source, JSON.stringify({ removeHs: true }));
    if (!rdmol) return null;
    if (layout !== "conformer") {
      try {
        rdmol.set_new_coords(layout === "coordgen");
      } catch {
        /* SMILES have no coords to replace */
      }
    }
    return rdmol.get_svg(size, size) || null;
  } catch (e) {
    console.warn("[gufe-viz] depictSVG threw -", errText(e));
    return null;
  } finally {
    if (rdmol) {
      try {
        rdmol.delete();
      } catch {
        /* already freed */
      }
    }
  }
}

/** Drop an RDKit SVG into `box`, scaled to fill it. */
export function placeDepiction(box: HTMLElement, svg: string, size: number): void {
  box.innerHTML = svg;
  const svgEl = box.querySelector("svg");
  if (!svgEl) return;
  svgEl.removeAttribute("width");
  svgEl.removeAttribute("height");
  if (!svgEl.getAttribute("viewBox")) svgEl.setAttribute("viewBox", `0 0 ${size} ${size}`);
  svgEl.setAttribute("preserveAspectRatio", "xMidYMid meet");
  svgEl.setAttribute("style", "width:100%;height:100%;max-width:100%;max-height:100%;");
}
