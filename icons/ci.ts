import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Continuous integration: the endless loop of build and ship, its arrowhead the mark. From the files set. */
export const CiIcon: Icon = {
  name: "CiIcon",
  node: [
    ["path", { d: "M12 12c-1.8-2.4-3.2-3.5-5-3.5a3.5 3.5 0 0 0 0 7c1.8 0 3.2-1.1 5-3.5s3.2-3.5 5-3.5a3.5 3.5 0 0 1 0 7c-1.8 0-3.2-1.1-5-3.5Z" }],
    ["path", { d: "M14.8 6.3 17 8.5l-2.2 2.2", ...SOLID_STROKE }],
  ],
};

export default CiIcon;
