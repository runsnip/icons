import type { Icon } from "../types";
import { SOLID } from "../system";

/**
 * A gradient fill: a square whose fill fades on the diagonal — a solid corner, then a row of three dots, then one dot,
 * then the empty far corner. A stroke cannot draw a blend, so the blend is drawn as density falling off, dithered on
 * the diagonal so it does not read as columns. ShapeFillIcon's square, the corner the one filled motif. From the slides
 * set.
 */
export const GradientIcon: Icon = {
  name: "GradientIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 17, height: 17, rx: 3 }],
    ["path", { d: "M6.5 6.5H14l-7.5 7.5Z", ...SOLID }],
    ["path", { d: "M8 17h0M12.5 12.5h0M17 8h0M15 15h0" }],
  ],
};

export default GradientIcon;
