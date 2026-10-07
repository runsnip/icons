import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Meson: two particles and the bond between them, the bond the mark. From the files set. */
export const MesonIcon: Icon = {
  name: "MesonIcon",
  node: [
    ["circle", { cx: 7, cy: 12, r: 3.5 }],
    ["circle", { cx: 17, cy: 12, r: 3.5 }],
    ["path", { d: "M10.5 12h3", ...SOLID_STROKE }],
  ],
};

export default MesonIcon;
