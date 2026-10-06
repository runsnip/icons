import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Go to the start, or collapse left: a double chevron left. From the collab set. */
export const ChevronsLeftIcon: Icon = {
  name: "ChevronsLeftIcon",
  node: [
    ["path", { d: "M12 5.5 5.5 12l6.5 6.5M18.5 5.5 12 12l6.5 6.5", ...SOLID_STROKE }],
  ],
};

export default ChevronsLeftIcon;
