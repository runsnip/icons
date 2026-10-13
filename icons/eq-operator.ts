import type { Icon } from "../types";
import { SOLID, SOLID_STROKE } from "../system";

/** An operator: plus over minus, the minus the mark. From the math set. */
export const EqOperatorIcon: Icon = {
  name: "EqOperatorIcon",
  node: [
    ["path", { d: "M12 4v9M7.5 8.5h9" }],
    ["path", { d: "M7.5 18h9", ...SOLID_STROKE }],
  ],
};

export default EqOperatorIcon;
