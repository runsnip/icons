import type { Icon } from "../types";
import { SOLID } from "../system";

/** An integral: the integral sign and its term. From the math set. */
export const EqIntegralIcon: Icon = {
  name: "EqIntegralIcon",
  node: [
    ["path", { d: "M14 3.5c-2 0-2.5 1.5-2.5 3.5v10c0 2-.5 3.5-2.5 3.5" }],
    ["rect", { x: 15.5, y: 9.5, width: 5, height: 5, rx: 1, ...SOLID }],
  ],
};

export default EqIntegralIcon;
