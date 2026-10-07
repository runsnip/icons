import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Umi: a bold U monogram. From the files set. */
export const UmiIcon: Icon = {
  name: "UmiIcon",
  node: [
    ["path", { d: "M7 5v7.5a5 5 0 0 0 10 0V5", ...SOLID_STROKE }],
  ],
};

export default UmiIcon;
