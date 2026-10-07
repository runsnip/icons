import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** VS Code: two crossing strokes held by a heavy upright, the editor's ribbon. From the files set. */
export const VscodeIcon: Icon = {
  name: "VscodeIcon",
  node: [
    ["path", { d: "M17.5 4.5 7.5 13.5 4.5 11M17.5 19.5 7.5 10.5 4.5 13" }],
    ["path", { d: "M17.5 4.5v15", ...SOLID_STROKE }],
  ],
};

export default VscodeIcon;
