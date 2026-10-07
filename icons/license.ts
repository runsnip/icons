import type { Icon } from "../types";
import { SOLID } from "../system";

/** Licences: a deed under its seal, the seal the mark. From the files set. */
export const LicenseIcon: Icon = {
  name: "LicenseIcon",
  node: [
    ["path", { d: "M12 19.5H5.5a2 2 0 0 1-2-2v-12a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2V9M7 8h7M7 11.5h4" }],
    ["circle", { cx: 16.5, cy: 15.5, r: 3.5, ...SOLID }],
  ],
};

export default LicenseIcon;
