import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Scanning: a viewfinder's corners and the line sweeping across them, the line the mark. From the ui set. */
export const ScanIcon: Icon = {
  name: "ScanIcon",
  node: [
    ["path", { d: "M3.5 8V5.5a2 2 0 0 1 2-2H8M16 3.5h2.5a2 2 0 0 1 2 2V8M20.5 16v2.5a2 2 0 0 1-2 2H16M8 20.5H5.5a2 2 0 0 1-2-2V16" }],
    ["path", { d: "M7.5 12h9", ...SOLID_STROKE }],
  ],
};

export default ScanIcon;
