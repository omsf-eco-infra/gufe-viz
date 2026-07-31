/* eslint-disable */
/**
 * GENERATED — do not edit by hand.
 *
 * Source:  schema/gufe-viz.schema.json
 *          (itself generated from python/gufe_viz/schema.py)
 * Command: pixi run types
 *
 * CI rebuilds this file and fails if it differs from what is committed, so an
 * edit here is caught rather than quietly winning over the Pydantic models.
 */

/**
 * The Python-to-TypeScript contract for gufe visualizations, version 1.0. Generated from python/gufe_viz/schema.py — do not edit by hand. Kinds: SmallMoleculeComponent, ProteinComponent, SolventComponent, LigandAtomMapping, LigandNetwork, ChemicalSystem, Transformation, AlchemicalNetwork.
 */
export type GufeVizPayload =
  | SmallMoleculePayload
  | ProteinPayload
  | SolventPayload
  | LigandAtomMappingPayload
  | LigandNetworkPayload
  | ChemicalSystemPayload
  | TransformationPayload
  | AlchemicalNetworkPayload;

export interface SmallMoleculePayload {
  /**
   * Schema version. A reader that does not know this major must refuse the payload rather than render it wrongly.
   */
  schema_version?: string;
  /**
   * The object's name, for the title bar.
   */
  name?: string | null;
  /**
   * Reserved forward-compatibility slot. The only place additional properties are permitted; V1 views ignore its contents entirely.
   */
  extra?: {
    [k: string]: unknown;
  };
  kind: "SmallMoleculeComponent";
  data: SmallMoleculeData;
}
export interface SmallMoleculeData {
  /**
   * SmallMoleculeComponent.to_sdf() output, verbatim.
   */
  sdf: string;
  smiles?: string | null;
  total_charge?: number | null;
}
export interface ProteinPayload {
  /**
   * Schema version. A reader that does not know this major must refuse the payload rather than render it wrongly.
   */
  schema_version?: string;
  /**
   * The object's name, for the title bar.
   */
  name?: string | null;
  /**
   * Reserved forward-compatibility slot. The only place additional properties are permitted; V1 views ignore its contents entirely.
   */
  extra?: {
    [k: string]: unknown;
  };
  kind: "ProteinComponent";
  data: ProteinData;
}
export interface ProteinData {
  /**
   * ProteinComponent.to_pdb_file() output, verbatim.
   */
  pdb: string;
}
export interface SolventPayload {
  /**
   * Schema version. A reader that does not know this major must refuse the payload rather than render it wrongly.
   */
  schema_version?: string;
  /**
   * The object's name, for the title bar.
   */
  name?: string | null;
  /**
   * Reserved forward-compatibility slot. The only place additional properties are permitted; V1 views ignore its contents entirely.
   */
  extra?: {
    [k: string]: unknown;
  };
  kind: "SolventComponent";
  data: SolventData;
}
export interface SolventData {
  smiles?: string;
  positive_ion?: string | null;
  negative_ion?: string | null;
  neutralize?: boolean | null;
  ion_concentration?: string | null;
}
export interface LigandAtomMappingPayload {
  /**
   * Schema version. A reader that does not know this major must refuse the payload rather than render it wrongly.
   */
  schema_version?: string;
  /**
   * The object's name, for the title bar.
   */
  name?: string | null;
  /**
   * Reserved forward-compatibility slot. The only place additional properties are permitted; V1 views ignore its contents entirely.
   */
  extra?: {
    [k: string]: unknown;
  };
  kind: "LigandAtomMapping";
  data: MappingData;
}
/**
 * A :class:`gufe.LigandAtomMapping`: both endpoints plus the index map.
 *
 * Both molecules go over as SDF and the correspondence as a plain
 * ``{str(indexA): indexB}`` map, so the viewer can colour core and unique atoms
 * and draw the lines itself. JSON object keys must be strings, which is why the
 * A-side indices are stringified rather than left as integers.
 */
export interface MappingData {
  molA_sdf: string;
  molB_sdf: string;
  nameA?: string;
  nameB?: string;
  componentA_to_componentB?: {
    [k: string]: number;
  };
  annotations?: {
    [k: string]: unknown;
  };
}
export interface LigandNetworkPayload {
  /**
   * Schema version. A reader that does not know this major must refuse the payload rather than render it wrongly.
   */
  schema_version?: string;
  /**
   * The object's name, for the title bar.
   */
  name?: string | null;
  /**
   * Reserved forward-compatibility slot. The only place additional properties are permitted; V1 views ignore its contents entirely.
   */
  extra?: {
    [k: string]: unknown;
  };
  kind: "LigandNetwork";
  data: LigandNetworkData;
}
/**
 * A ligand network as nodes and edges, not as GraphML.
 *
 * ``LigandNetwork.to_graphml()`` is gufe's canonical serialization and the
 * obvious thing to forward, but its node payloads *are* gufe's ``to_json``
 * moldicts — atomic numbers, bond tuples and a base-1-per-char ``.npy``
 * conformer blob. Forwarding it makes the browser decode all of that to draw
 * anything, which is precisely the "lot of ugly TypeScript to maintain" R8
 * rules out. So Python walks the live network instead and hands over SDF plus
 * flat topology, and the GraphML does not cross the boundary at all.
 */
export interface LigandNetworkData {
  nodes: LigandNetworkNode[];
  edges: LigandNetworkEdge[];
}
/**
 * One ligand in a :class:`gufe.LigandNetwork`.
 *
 * ``id`` is the component's gufe key, which is what the edges reference. It is
 * an identity, not a label: gufe's own network fixtures have unnamed molecules,
 * so the view falls back to a short form of the key when ``name`` is empty.
 */
export interface LigandNetworkNode {
  /**
   * The SmallMoleculeComponent's gufe key.
   */
  id: string;
  name?: string;
  /**
   * SmallMoleculeComponent.to_sdf() output, verbatim.
   */
  sdf: string;
  smiles?: string | null;
}
/**
 * One :class:`gufe.LigandAtomMapping`, as a graph edge.
 *
 * The endpoints are node ``id``s rather than inlined molecules: a network with
 * forty ligands and sixty edges would otherwise carry each SDF twice over. The
 * atom correspondence rides along so the mapping viewer can be handed a
 * :class:`MappingData` assembled from the two endpoint nodes plus this edge —
 * which is how R14's "exact same component" is honoured without duplicating the
 * structures.
 */
export interface LigandNetworkEdge {
  /**
   * Node id of componentA.
   */
  source: string;
  /**
   * Node id of componentB.
   */
  target: string;
  /**
   * The mapping's score annotation, when it has one — usually LOMAP's 0–1.
   */
  score?: number | null;
  componentA_to_componentB?: {
    [k: string]: number;
  };
  annotations?: {
    [k: string]: unknown;
  };
}
export interface ChemicalSystemPayload {
  /**
   * Schema version. A reader that does not know this major must refuse the payload rather than render it wrongly.
   */
  schema_version?: string;
  /**
   * The object's name, for the title bar.
   */
  name?: string | null;
  /**
   * Reserved forward-compatibility slot. The only place additional properties are permitted; V1 views ignore its contents entirely.
   */
  extra?: {
    [k: string]: unknown;
  };
  kind: "ChemicalSystem";
  data: ChemicalSystemData;
}
/**
 * A ChemicalSystem is exactly its labelled components.
 */
export interface ChemicalSystemData {
  name?: string;
  components?: ComponentDescriptor[];
}
/**
 * A summary plus whatever the viz needs to draw the component.
 *
 * Exactly one of ``sdf`` / ``pdb`` / the solvent fields is populated, chosen by
 * what the component can serialize itself as. ``error`` is set instead when a
 * component fails to serialize — one bad component must not take down the whole
 * view.
 */
export interface ComponentDescriptor {
  /**
   * The component's key in its ChemicalSystem.
   */
  label: string;
  /**
   * The gufe class name, e.g. 'SmallMoleculeComponent'.
   */
  type: string;
  name?: string;
  sdf?: string | null;
  smiles?: string | null;
  pdb?: string | null;
  positive_ion?: string | null;
  negative_ion?: string | null;
  neutralize?: boolean | null;
  /**
   * Stringified openff Quantity, e.g. '0.15 molar'.
   */
  ion_concentration?: string | null;
  error?: string | null;
}
export interface TransformationPayload {
  /**
   * Schema version. A reader that does not know this major must refuse the payload rather than render it wrongly.
   */
  schema_version?: string;
  /**
   * The object's name, for the title bar.
   */
  name?: string | null;
  /**
   * Reserved forward-compatibility slot. The only place additional properties are permitted; V1 views ignore its contents entirely.
   */
  extra?: {
    [k: string]: unknown;
  };
  kind: "Transformation";
  data: TransformationData;
}
export interface TransformationData {
  name?: string;
  /**
   * The Protocol's class name.
   */
  protocol?: string;
  stateA: ChemicalSystemFields;
  stateB: ChemicalSystemFields;
  mappings?: MappingData[];
}
/**
 * The inner object shared by the chemical-system and transformation views.
 */
export interface ChemicalSystemFields {
  name?: string;
  components?: ComponentDescriptor[];
}
export interface AlchemicalNetworkPayload {
  /**
   * Schema version. A reader that does not know this major must refuse the payload rather than render it wrongly.
   */
  schema_version?: string;
  /**
   * The object's name, for the title bar.
   */
  name?: string | null;
  /**
   * Reserved forward-compatibility slot. The only place additional properties are permitted; V1 views ignore its contents entirely.
   */
  extra?: {
    [k: string]: unknown;
  };
  kind: "AlchemicalNetwork";
  data: AlchemicalNetworkData;
}
export interface AlchemicalNetworkData {
  name?: string;
  nodes?: AlchemicalNode[];
  edges?: AlchemicalEdge[];
}
export interface AlchemicalNode {
  /**
   * The ChemicalSystem's gufe key.
   */
  id: string;
  name?: string;
  components?: ComponentSummary[];
}
/**
 * What a component *is*, with no structure data — topology only.
 */
export interface ComponentSummary {
  /**
   * The component's key in its ChemicalSystem.
   */
  label: string;
  /**
   * The gufe class name, e.g. 'SmallMoleculeComponent'.
   */
  type: string;
  name?: string;
}
export interface AlchemicalEdge {
  /**
   * The Transformation's gufe key.
   */
  id: string;
  name?: string;
  /**
   * Node id of stateA.
   */
  source: string;
  /**
   * Node id of stateB.
   */
  target: string;
  protocol?: string;
}

/** The root union, under the name the rest of the codebase refers to it by. */
export type Payload = GufeVizPayload;

/**
 * Every declared `kind`, including those whose view has not been built yet.
 * Derived from the schema's `$defs`, so it cannot fall behind the contract.
 */
export type PayloadKind = "AlchemicalNetwork" | "ChemicalSystem" | "LigandAtomMapping" | "LigandNetwork" | "ProteinComponent" | "SmallMoleculeComponent" | "SolventComponent" | "Transformation";

/** The same list at runtime, for validators and dispatch-parity tests. */
export const PAYLOAD_KINDS: readonly PayloadKind[] = ["AlchemicalNetwork", "ChemicalSystem", "LigandAtomMapping", "LigandNetwork", "ProteinComponent", "SmallMoleculeComponent", "SolventComponent", "Transformation"];
