import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A section break: two page halves parted by a dotted line. From the insert set. */
export const SectionBreakIcon: Icon = {
  name: "SectionBreakIcon",
  node: [
    ["path", { d: "M5 3.5V8h14V3.5M5 20.5V16h14v4.5" }],
    ["path", { d: "M3.5 12h1M8.83 12h1M14.17 12h1M19.5 12h1", ...SOLID_STROKE }],
  ],
};

export default SectionBreakIcon;
