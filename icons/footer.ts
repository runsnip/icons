import type { Icon } from "../types";
import { SOLID } from "../system";

/** A footer: a page with its bottom band emphasised. From the insert set. */
export const FooterIcon: Icon = {
  name: "FooterIcon",
  node: [
    ["rect", { x: 4.5, y: 3.5, width: 15, height: 17, rx: 2.5 }],
    ["path", { d: "M4.5 18A2.5 2.5 0 0 0 7 20.5h10a2.5 2.5 0 0 0 2.5-2.5v-2.5h-15Z", ...SOLID }],
    ["path", { d: "M8 8h8M8 11.5h5" }],
  ],
};

export default FooterIcon;
