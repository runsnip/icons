import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Django: the letters dj, the j the mark. From the files set. */
export const DjangoIcon: Icon = {
  name: "DjangoIcon",
  node: [
    ["path", { d: "M12 4v14M12 14a3.5 3.5 0 1 0 0 .01" }],
    ["path", { d: "M17 9.5V17a3 3 0 0 1-3 3M17 5.5v0", ...SOLID_STROKE }],
  ],
};

export default DjangoIcon;
