import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Vagrant: a V with its top bars, the bars the mark. From the files set. */
export const VagrantIcon: Icon = {
  name: "VagrantIcon",
  node: [
    ["path", { d: "M6.5 5.5 12 19l5.5-13.5" }],
    ["path", { d: "M4 5.5h5M15 5.5h5", ...SOLID_STROKE }],
  ],
};

export default VagrantIcon;
