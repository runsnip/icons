import type { Icon } from "../types";
import { SOLID } from "../system";

/** A directive: a signpost, the board that points the mark. From the files set. */
export const DirectiveIcon: Icon = {
  name: "DirectiveIcon",
  node: [
    ["path", { d: "M10.5 3.5v17" }],
    ["polygon", { points: "10.5,5 17,5 20,8 17,11 10.5,11", ...SOLID }],
    ["path", { d: "M10.5 13.5h-4l-3 2.75 3 2.75h4" }],
  ],
};

export default DirectiveIcon;
