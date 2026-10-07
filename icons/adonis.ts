import type { Icon } from "../types";
import { SOLID } from "../system";

/** A rounded triangle with a small filled triangle inside: AdonisJS. From the files set. */
export const AdonisIcon: Icon = {
  name: "AdonisIcon",
  node: [
    ["path", { d: "M12 4.5 20 19.5H4Z" }],
    ["path", { d: "M12 11.5l2.8 5.2H9.2Z", ...SOLID }],
  ],
};

export default AdonisIcon;
