import type { Icon } from "../types";
import { SOLID } from "../system";

/**
 * Animation painter: FormatPainterIcon's roller with a four-point star burst beside its handle — copies one shape's
 * animation onto another. The roller is drawn in outline and the star is the one filled motif, so the mark reads apart
 * from the plain format painter (whose roller is the filled part) down to 15 px. From the slides set.
 */
export const AnimationPainterIcon: Icon = {
  name: "AnimationPainterIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 13, height: 5.5, rx: 1.5 }],
    ["path", { d: "M16.5 6.25h3.5v5.5h-7.5v8" }],
    ["path", { d: "M7 12l1.2 2.8L10.5 16l-2.3 1.2L7 20l-1.2-2.8L3.5 16l2.3-1.2Z", ...SOLID }],
  ],
};

export default AnimationPainterIcon;
