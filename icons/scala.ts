import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Scala: a column of three thickened twisting bands. From the files set. */
export const ScalaIcon: Icon = {
  name: "ScalaIcon",
  node: [
    ["path", { d: "M7.5 6.5v12M16.5 5.5v12" }],
    ["path", { d: "M7.5 6.5c3 1.5 6 1.5 9-1M7.5 12.5c3 1.5 6 1.5 9-1M7.5 18.5c3 1.5 6 1.5 9-1", ...SOLID_STROKE }],
  ],
};

export default ScalaIcon;
