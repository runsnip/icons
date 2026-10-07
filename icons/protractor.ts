import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Protractor: a protractor, its needle the mark. From the files set. */
export const ProtractorIcon: Icon = {
  name: "ProtractorIcon",
  node: [
    ["path", { d: "M3.5 17.5a8.5 8.5 0 0 1 17 0Z" }],
    ["path", { d: "M12 17.5 16 11", ...SOLID_STROKE }],
  ],
};

export default ProtractorIcon;
