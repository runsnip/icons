import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Karma: its K, the kicking leg the mark. From the files set. */
export const KarmaIcon: Icon = {
  name: "KarmaIcon",
  node: [
    ["path", { d: "M6.5 4.5v15M18 4.5 6.5 14" }],
    ["path", { d: "M11 10.5l7 9", ...SOLID_STROKE }],
  ],
};

export default KarmaIcon;
