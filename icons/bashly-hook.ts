import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A Bashly hook: a tag carrying an S, the S's stroke the mark. From the files set. */
export const BashlyHookIcon: Icon = {
  name: "BashlyHookIcon",
  node: [
    ["path", { d: "M4 5h11l5 7-5 7H4Z" }],
    ["path", { d: "M12 9c-1.5-.75-4-.5-4 1.1 0 2.4 4.5 1.1 4.5 3.6 0 1.6-2.5 2-4.5 1.1" }],
    ["path", { d: "M10.25 7v10", ...SOLID_STROKE }],
  ],
};

export default BashlyHookIcon;
