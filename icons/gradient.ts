import type { Icon } from "../types";
import { SOLID } from "../system";

/**
 * A gradient fill: a square holding a ramp from dense to sparse — a solid band, a line, a row of dots. A stroke cannot
 * draw a blend, so the blend is drawn as density falling off left to right. ShapeFillIcon's square, the band the one
 * filled motif. From the slides set.
 */
export const GradientIcon: Icon = {
  name: "GradientIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 17, height: 17, rx: 3 }],
    ["rect", { x: 6.5, y: 6.5, width: 3, height: 11, rx: 1, ...SOLID }],
    ["path", { d: "M12.5 7.5v9M16.5 7.5h0M16.5 12h0M16.5 16.5h0" }],
  ],
};

export default GradientIcon;
