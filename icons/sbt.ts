import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** sbt: a round with thickened stairs climbing through it. From the files set. */
export const SbtIcon: Icon = {
  name: "SbtIcon",
  node: [
    ["circle", { cx: 12, cy: 12, r: 8.5 }],
    ["path", { d: "M7 15.5h3.5v-3h3v-3H17", ...SOLID_STROKE }],
  ],
};

export default SbtIcon;
