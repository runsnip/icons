import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** KCL: a K in configuration brackets, the K the mark. From the files set. */
export const KclIcon: Icon = {
  name: "KclIcon",
  node: [
    ["path", { d: "M7 4.5H4.5v15H7M17 4.5h2.5v15H17" }],
    ["path", { d: "M9.5 7.5v9M14.5 7.5l-5 5 5 4", ...SOLID_STROKE }],
  ],
};

export default KclIcon;
