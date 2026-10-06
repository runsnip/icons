import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** An equation: x over y, the fraction bar telling. From the insert set. */
export const EquationIcon: Icon = {
  name: "EquationIcon",
  node: [
    ["path", { d: "M9.5 3.5l5 5M14.5 3.5l-5 5M9.5 15.5 12 18.5M14.5 15.5 11 20.5" }],
    ["path", { d: "M4.5 12h15", ...SOLID_STROKE }],
  ],
};

export default EquationIcon;
