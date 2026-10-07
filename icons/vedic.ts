import type { Icon } from "../types";
import { SOLID } from "../system";

/** Vedic: an oil lamp, its flame the mark. From the files set. */
export const VedicIcon: Icon = {
  name: "VedicIcon",
  node: [
    ["path", { d: "M4.5 13h15c0 4-3.4 7-7.5 7s-7.5-3-7.5-7Z" }],
    ["path", { d: "M12 3.5c2 2.5 3 4 3 5.5a3 3 0 0 1-6 0c0-1.5 1-3 3-5.5Z", ...SOLID }],
  ],
};

export default VedicIcon;
