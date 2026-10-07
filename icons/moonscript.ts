import type { Icon } from "../types";
import { SOLID } from "../system";

/** MoonScript: a crescent with a dot of light, the dot the mark. From the files set. */
export const MoonscriptIcon: Icon = {
  name: "MoonscriptIcon",
  node: [
    ["path", { d: "M11.11 4.52A8 8 0 1 0 19.49 12.89A6 6 0 0 1 11.11 4.52Z" }],
    ["circle", { cx: 17.5, cy: 6.5, r: 2, ...SOLID }],
  ],
};

export default MoonscriptIcon;
