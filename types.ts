/**
 * An icon is its drawing and nothing else: the elements inside its `<svg>`, as `[tag, attributes]` pairs with SVG's
 * own attribute names. How it is drawn — an SVG string, a DOM element, a React component — is decided by whoever
 * draws it (./render, ./react), never by the icon.
 */

/** One element of an icon: its tag, then its attributes as SVG names them (`stroke-width`, not `strokeWidth`). */
export type IconElement = [tag: string, attributes: Record<string, string | number>];
export type IconNode = IconElement[];

export interface Icon {
  /** The name it is exported by: `BoldIcon`. */
  name: string;
  node: IconNode;
  /**
   * The `<svg>` element's own attributes where this icon differs from the set's (another viewBox, filled rather than
   * stroked); null removes one, as the wordmark's size, which its height in CSS gives.
   */
  svg?: Record<string, string | number | null>;
}

export interface IconOptions {
  /** Width and height in px, 24 by default. For a mark wider than it is tall (the wordmark), the height: the width
   *  follows its viewBox. */
  size?: number;
  /** The stroke's colour; currentColor by default. */
  color?: string;
  strokeWidth?: number;
  /** Any other attribute on the `<svg>`: class, aria-label… */
  attributes?: Record<string, string | number | boolean | null | undefined>;
}
