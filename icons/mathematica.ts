import type { Icon } from "../types";
import { SOLID } from "../system";

/** Mathematica: a spiked star with a filled heart. From the files set. */
export const MathematicaIcon: Icon = {
  name: "MathematicaIcon",
  node: [
    ["path", { d: "M12 3.5L13.82 8.22L18.65 6.7L16.09 11.07L20.29 13.89L15.28 14.62L15.69 19.66L12 16.2L8.31 19.66L8.72 14.62L3.71 13.89L7.91 11.07L5.35 6.7L10.18 8.22Z" }],
    ["circle", { cx: 12, cy: 12, r: 1.8, ...SOLID }],
  ],
};

export default MathematicaIcon;
