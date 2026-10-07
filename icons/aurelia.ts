import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Three parallel diagonal bars, the middle thickened: Aurelia. From the files set. */
export const AureliaIcon: Icon = {
  name: "AureliaIcon",
  node: [
    ["path", { d: "M3.5 15 11 5.5M13 18.5 20.5 9" }],
    ["path", { d: "M7.5 18.5l9-13", ...SOLID_STROKE }],
  ],
};

export default AureliaIcon;
