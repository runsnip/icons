import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Fx. From the sheets set. */
export const FunctionIcon: Icon = {
  name: "FunctionIcon",
  node: [
    ["path", { d: "M11.5 4.5h-.5A2.5 2.5 0 0 0 8.5 7v13.5M5 10.5h6M13.5 11l6 9M19.5 11l-6 9", ...SOLID_STROKE }],
  ],
};

export default FunctionIcon;
