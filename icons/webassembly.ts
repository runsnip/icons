import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** WebAssembly: a square notched at the top, with the letters WA, the letters the mark. From the files set. */
export const WebassemblyIcon: Icon = {
  name: "WebassemblyIcon",
  node: [
    ["path", { d: "M3.5 3.5h5a3.5 3.5 0 0 0 7 0h5v17h-17Z" }],
    ["path", { d: "M6 11l1.1 6 1.65-4.25L10.4 17 11.5 11M13 17l2.25-6 2.25 6M13.8 15h2.9", ...SOLID_STROKE }],
  ],
};

export default WebassemblyIcon;
