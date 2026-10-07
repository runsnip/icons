import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Semgrep: a lens holding a thickened equals sign. From the files set. */
export const SemgrepIcon: Icon = {
  name: "SemgrepIcon",
  node: [
    ["circle", { cx: 10.5, cy: 10.5, r: 6.5 }],
    ["path", { d: "M15.5 15.5 20.5 20.5" }],
    ["path", { d: "M8 9h5M8 12h5", ...SOLID_STROKE }],
  ],
};

export default SemgrepIcon;
