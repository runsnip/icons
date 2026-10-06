import type { Icon } from "../types";
import { SOLID } from "../system";

/** Formatting marks: the paragraph mark. From the text set. */
export const PilcrowIcon: Icon = {
  name: "PilcrowIcon",
  node: [["path", { d: "M13 4.5V19.5M17.5 4.5V19.5M13 4.5h6" }], ["path", { d: "M13 4.5h-3a4 4 0 0 0 0 8h3Z", ...SOLID }]],
};

export default PilcrowIcon;
