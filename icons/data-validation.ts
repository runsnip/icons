import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A cell with a tick inside. From the sheets set. */
export const DataValidationIcon: Icon = {
  name: "DataValidationIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 11.5, height: 11.5, rx: 1.5 }],
    ["path", { d: "M9.25 3.5V15M3.5 9.25H15" }],
    ["path", { d: "M13.5 18l2.25 2.25L20.5 15", ...SOLID_STROKE }],
  ],
};

export default DataValidationIcon;
