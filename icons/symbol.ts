import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A symbol: the letter omega, standing on its feet. From the insert set. */
export const SymbolIcon: Icon = {
  name: "SymbolIcon",
  node: [
    ["path", { d: "M9.5 19.5v-1.7A7 7 0 1 1 14.5 17.8v1.7" }],
    ["path", { d: "M4.5 19.5h5M14.5 19.5h5", ...SOLID_STROKE }],
  ],
};

export default SymbolIcon;
