import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Interceptors: a call stopped at a gate, the gate the mark. From the files set. */
export const InterceptorIcon: Icon = {
  name: "InterceptorIcon",
  node: [
    ["path", { d: "M3.5 12h9M9.5 9l3 3-3 3M19 12h1.5" }],
    ["path", { d: "M16 5v14", ...SOLID_STROKE }],
  ],
};

export default InterceptorIcon;
