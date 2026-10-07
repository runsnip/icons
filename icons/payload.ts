import type { Icon } from "../types";
import { SOLID } from "../system";

/** Payload CMS: its slanted panel, the small wedge beside it the mark. From the files set. */
export const PayloadIcon: Icon = {
  name: "PayloadIcon",
  node: [
    ["path", { d: "M10 3.5 20 9v11.5L10 15Z" }],
    ["path", { d: "M4 12.5 8 14.5v6L4 18.5Z", ...SOLID }],
  ],
};

export default PayloadIcon;
