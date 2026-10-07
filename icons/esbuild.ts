import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** esbuild: a ring, its two forward chevrons the mark. From the files set. */
export const EsbuildIcon: Icon = {
  name: "EsbuildIcon",
  node: [
    ["circle", { cx: 12, cy: 12, r: 8.5 }],
    ["path", { d: "M8 8.5l3.5 3.5L8 15.5M12.5 8.5 16 12l-3.5 3.5", ...SOLID_STROKE }],
  ],
};

export default EsbuildIcon;
