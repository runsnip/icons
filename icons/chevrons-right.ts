import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Go to the end, or expand right: a double chevron right. From the collab set. */
export const ChevronsRightIcon: Icon = {
  name: "ChevronsRightIcon",
  node: [
    ["path", { d: "M12 5.5l6.5 6.5-6.5 6.5M5.5 5.5 12 12l-6.5 6.5", ...SOLID_STROKE }],
  ],
};

export default ChevronsRightIcon;
