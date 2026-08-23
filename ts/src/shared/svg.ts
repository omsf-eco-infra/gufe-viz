/**
 * The two SVG primitives the graph views share.
 *
 * Both network views draw plain SVG rather than a charting library: d3 is asked
 * for a force layout and nothing else, so the drawing survives d3 being
 * unreachable. That leaves exactly this much shared vocabulary.
 */

const SVG_NS = "http://www.w3.org/2000/svg";

export function svg<K extends keyof SVGElementTagNameMap>(
  tag: K,
  attrs: Record<string, string | number> = {},
): SVGElementTagNameMap[K] {
  const node = document.createElementNS(SVG_NS, tag);
  for (const [name, value] of Object.entries(attrs)) node.setAttribute(name, String(value));
  return node;
}

/** A native SVG tooltip - cheaper and more accessible than a floating div. */
export function titled<E extends SVGElement>(node: E, text: string): E {
  const title = document.createElementNS(SVG_NS, "title");
  title.textContent = text;
  node.appendChild(title);
  return node;
}
