import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Credits: a centred roll of names, its title line the mark. From the files set. */
export const CreditsIcon: Icon = {
  name: "CreditsIcon",
  node: [
    ["path", { d: "M8 6h8", ...SOLID_STROKE }],
    ["path", { d: "M4.5 11h15M7 15h10M5.5 19h13" }],
  ],
};

export default CreditsIcon;
