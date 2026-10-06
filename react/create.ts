import { createElement, type ReactElement, type SVGProps } from "react";
import { svgAttributes } from "../render";
import type { Icon } from "../types";

/** What a RunSnip icon component takes: an `<svg>`'s props, and the set's own. */
export interface IconProps extends Omit<SVGProps<SVGSVGElement>, "viewBox" | "children"> {
  /** Width and height in px when neither is given. 24 by default. */
  size?: number;
  /** The stroke's colour; wins over `stroke`. currentColor by default. */
  color?: string;
  /** Side of a square viewBox: 16 is "0 0 16 16". */
  viewBox?: number;
}

/** A RunSnip icon as a component: named, so every icon's declaration is one line rather than a copy of an <svg>'s props. */
export type IconComponent = ((props: IconProps) => ReactElement) & { displayName: string };

/* SVG's attribute names as React spells them: stroke-width → strokeWidth; aria-* and data-* stay. */
const reactName = (name: string) => (/^(aria|data)-/.test(name) ? name : name.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase()));
const reactProps = (attributes: Record<string, string | number>) =>
  Object.fromEntries(Object.entries(attributes).map(([k, v]) => [reactName(k), v]));

/**
 * A component for an icon. No hooks and no state: it renders on the server (React Server Components, SSR) as
 * in the browser, and gives the same `<svg>` as `toSvg`.
 */
export function createIcon(icon: Icon): IconComponent {
  const svg = reactProps(svgAttributes(icon));
  const children = icon.node.map(([tag, attributes], i) => createElement(tag, { key: `${tag}-${i}`, ...reactProps(attributes) }));
  const filled = svg.stroke === "none" && svg.fill === "currentColor";
  function Component({ size, color, viewBox, width, height, stroke, ...rest }: IconProps) {
    return createElement("svg", {
      ...svg,
      ...rest,
      ...(viewBox !== undefined ? { viewBox: `0 0 ${viewBox} ${viewBox}` } : {}),
      /* The colour is the stroke's — or, for a mark filled and not stroked, the fill's (as toSvg). */
      ...(filled ? { fill: color ?? rest.fill ?? svg.fill } : {}),
      stroke: filled ? stroke ?? svg.stroke : color ?? stroke ?? svg.stroke,
      width: width ?? size ?? svg.width,
      height: height ?? size ?? svg.height,
    }, children);
  }
  Component.displayName = icon.name;
  return Component;
}

/** Any icon's data as a component, for an icon held as data (from loadIcon, or chosen at run time). */
export function Icon({ icon, ...props }: IconProps & { icon: Icon }) {
  return createElement(createIcon(icon), props);
}
