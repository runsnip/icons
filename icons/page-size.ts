import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Page size: a page with a size arrow pulling out from its corner. From the insert set. */
export const PageSizeIcon: Icon = {
  name: "PageSizeIcon",
  node: [
    ["path", { d: "M10 18.5H6A2.5 2.5 0 0 1 3.5 16V6A2.5 2.5 0 0 1 6 3.5h8A2.5 2.5 0 0 1 16.5 6v4" }],
    ["path", { d: "M12 12l8 8" }],
    ["path", { d: "M20.5 15v5.5H15", ...SOLID_STROKE }],
  ],
};

export default PageSizeIcon;
