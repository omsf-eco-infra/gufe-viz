/* eslint-disable */
/**
 * GENERATED - do not edit by hand.
 *
 * Source:  schema/gufe-viz.schema.json  (the source of truth)
 * Command: pixi run types
 *
 * CI rebuilds this file and fails if it differs from what is committed, so an
 * edit here is caught rather than quietly winning over the schema.
 */

/**
 * The Python-to-TypeScript contract for gufe visualizations. Nothing generates this file, and both languages are downstream of it. A payload is its 'type' plus its own fields, flat, and it is the same object whether it stands alone or is nested inside another. The version lives in $id, not in the payload.
 */
export type GufeVizPayload =
  | SmallMoleculeComponentViz
  | ProteinComponentViz
  | SolvatedPDBComponentViz
  | ProteinMembraneComponentViz
  | SolventComponentViz
  | UnknownComponentViz
  | LigandAtomMappingViz
  | LigandNetworkViz
  | ChemicalSystemViz
  | TransformationViz
  | AlchemicalNetworkViz;
/**
 * Any single chemical-system component
 */
export type ComponentViz =
  | SmallMoleculeComponentViz
  | ProteinComponentViz
  | SolvatedPDBComponentViz
  | ProteinMembraneComponentViz
  | SolventComponentViz
  | UnknownComponentViz;

/**
 * A small molecule, carried as a complete SDF record. The SDF holds the conformer, so nothing downstream reconstructs coordinates.
 */
export interface SmallMoleculeComponentViz {
  type: "SmallMoleculeComponentViz";
  name: string;
  /**
   * Complete inline SDF record, including the conformer.
   */
  sdf: string;
  smiles: string;
  /**
   * Net formal charge. Displayed, never recomputed from the SDF.
   */
  total_charge: number;
}
/**
 * A protein, carried as a complete PDB record.
 */
export interface ProteinComponentViz {
  type: "ProteinComponentViz";
  name: string;
  /**
   * Complete inline PDB representation.
   */
  pdb: string;
}
/**
 * A protein with explicit solvent. A distinct type rather than a flag on ProteinComponentViz, because the discriminator is what a view dispatches on and the presence of waters changes what a sensible default representation is.
 */
export interface SolvatedPDBComponentViz {
  type: "SolvatedPDBComponentViz";
  name: string;
  /**
   * Complete inline PDB representation, including explicit solvent.
   */
  pdb: string;
}
/**
 * A protein embedded in a membrane.
 */
export interface ProteinMembraneComponentViz {
  type: "ProteinMembraneComponentViz";
  name: string;
  /**
   * Complete inline PDB representation of the protein and membrane system.
   */
  pdb: string;
}
/**
 * Bulk solvent settings. There is no structure to draw, so these are flat fields suitable for rendering as a settings card.
 */
export interface SolventComponentViz {
  type: "SolventComponentViz";
  name: string;
  smiles: string;
  positive_ion: string;
  negative_ion: string;
  neutralize: boolean;
  /**
   * Display-form concentration with units, for example '0.15 molar'. A string rather than a number because the unit is part of the value and the view only ever prints it.
   */
  ion_concentration: string;
}
/**
 * The graceful fallback for a component type this build does not recognize. gufe supports custom Component subclasses, so meeting one is an expected outcome rather than an error, and the browser answers it with 'sorry, there is no visualization for this'. This covers an unrecognized type only: a recognized component whose serializer fails is a bug, and raises in Python rather than arriving here wearing a disguise.
 */
export interface UnknownComponentViz {
  type: "UnknownComponentViz";
  name: string;
  /**
   * The gufe class name, so the panel can say which type it could not draw.
   */
  gufe_type: string;
}
/**
 * One atom mapping between two small molecules, standalone. The same object is what the ligand-network view hands to the embedded mapping viewer when an edge is clicked, so there is one mapping shape rather than a standalone one and an in-graph one.
 */
export interface LigandAtomMappingViz {
  type: "LigandAtomMappingViz";
  name: string;
  molA_sdf: string;
  molB_sdf: string;
  nameA: string;
  nameB: string;
  componentA_to_componentB: AtomMapping;
  annotations: Annotations;
}
/**
 * Atom index correspondence from molecule A to molecule B. Keys are A's atom indices as decimal strings, because JSON object keys are always strings; values are B's indices as integers.
 */
export interface AtomMapping {
  [k: string]: number;
}
/**
 * Free-form mapping metadata. gufe puts nothing here by design and every mapper picks its own keys, so this is deliberately open. Values are whatever survived being made JSON-safe. Displayed but never interpreted, with the single exception of 'score'.
 */
export interface Annotations {}
/**
 * A ligand network as ligands plus topology. Deliberately not gufe's GraphML: that format embeds a gufe to_json moldict per node, so forwarding it would relocate the decoding problem into the browser rather than avoid it.
 */
export interface LigandNetworkViz {
  type: "LigandNetworkViz";
  name: string;
  nodes: LigandNetworkNodeViz[];
  edges: LigandNetworkEdgeViz[];
}
/**
 * One ligand in a network. Molecules live here rather than inlined per edge, because a forty-ligand network would otherwise carry each SDF several times over.
 */
export interface LigandNetworkNodeViz {
  /**
   * The gufe key. An identity, not a label: gufe's own network fixtures have unnamed molecules, so the view falls back to a short form of this when name is empty.
   */
  id: string;
  name: string;
  sdf: string;
  smiles: string;
}
/**
 * One mapping in a network, as topology only. Not a standalone payload: source and target name nodes in the same LigandNetworkViz, and the view reassembles a LigandAtomMappingViz from an edge plus its two endpoint nodes. JSON Schema cannot express that referential constraint, so a Python test covers it, and the view drops a dangling edge with a banner rather than failing.
 */
export interface LigandNetworkEdgeViz {
  source: string;
  target: string;
  /**
   * The 'score' annotation when it is a plain number, otherwise null. This is the one annotation key that is interpreted rather than displayed: it drives the edge colouring.
   */
  score: number | null;
  componentA_to_componentB: AtomMapping;
  annotations: Annotations;
}
/**
 * Visualization-only representation of a GUFE 1.12 ChemicalSystem.
 */
export interface ChemicalSystemViz {
  type: "ChemicalSystemViz";
  name: string;
  /**
   * ChemicalSystem labels mapped to component payloads.
   */
  components: {
    [k: string]: ComponentViz;
  };
}
/**
 * A transformation between two chemical systems. NonTransformation uses this type too: it exposes the same stateA and stateB properties, both its single system, so it renders as a diff with no differences.
 */
export interface TransformationViz {
  type: "TransformationViz";
  name: string;
  /**
   * The protocol class name. Named only, never inspected.
   */
  protocol: string;
  stateA: ChemicalSystemViz;
  stateB: ChemicalSystemViz;
  mappings: LigandAtomMappingViz[];
}
/**
 * A graph of chemical systems joined by transformations.
 */
export interface AlchemicalNetworkViz {
  type: "AlchemicalNetworkViz";
  name: string;
  nodes: AlchemicalNetworkNodeViz[];
  edges: AlchemicalNetworkEdgeViz[];
}
/**
 * One ChemicalSystem in an alchemical network, summarized.
 */
export interface AlchemicalNetworkNodeViz {
  /**
   * The ChemicalSystem's gufe key. Edges reference it.
   */
  id: string;
  name: string;
  components: ComponentSummaryViz[];
}
/**
 * A component named but not drawn. This is deliberately not a ComponentViz and must not be mistaken for one: it carries no structure at all, because an alchemical network that inlined every system's SDF and PDB would be enormous, and this view shows composition and topology rather than chemistry.
 */
export interface ComponentSummaryViz {
  label: string;
  gufe_type: string;
  name: string;
}
/**
 * One Transformation in an alchemical network.
 */
export interface AlchemicalNetworkEdgeViz {
  /**
   * The Transformation's gufe key.
   */
  id: string;
  name: string;
  /**
   * Node id of stateA.
   */
  source: string;
  /**
   * Node id of stateB.
   */
  target: string;
  protocol: string;
}

/** The root union, under the name the rest of the codebase refers to it by. */
export type Payload = GufeVizPayload;

/**
 * Every declared `type`, including those whose view has not been built yet.
 * Derived from the schema's `$defs`, so it cannot fall behind the contract.
 */
export type PayloadType = "AlchemicalNetworkViz" | "ChemicalSystemViz" | "LigandAtomMappingViz" | "LigandNetworkViz" | "ProteinComponentViz" | "ProteinMembraneComponentViz" | "SmallMoleculeComponentViz" | "SolvatedPDBComponentViz" | "SolventComponentViz" | "TransformationViz" | "UnknownComponentViz";

/** The same list at runtime, for validators and dispatch-parity tests. */
export const PAYLOAD_TYPES: readonly PayloadType[] = ["AlchemicalNetworkViz", "ChemicalSystemViz", "LigandAtomMappingViz", "LigandNetworkViz", "ProteinComponentViz", "ProteinMembraneComponentViz", "SmallMoleculeComponentViz", "SolvatedPDBComponentViz", "SolventComponentViz", "TransformationViz", "UnknownComponentViz"];
