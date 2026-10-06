import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Text inside scan corners (OCR). From the pdf set. */
export const ScanTextIcon: Icon = {
  name: "ScanTextIcon",
  node: [
    ["path", { d: "M3.5 8V5.5a2 2 0 0 1 2-2H8M16 3.5h2.5a2 2 0 0 1 2 2V8M20.5 16v2.5a2 2 0 0 1-2 2H16M8 20.5H5.5a2 2 0 0 1-2-2V16" }],
    ["path", { d: "M8 8.5h8", ...SOLID_STROKE }],
    ["path", { d: "M8 12h8M8 15.5h5" }],
  ],
};

export default ScanTextIcon;
