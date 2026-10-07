import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** JavaScript tests: a flask, a J in it the mark. From the files set. */
export const TestJsIcon: Icon = {
  name: "TestJsIcon",
  node: [
    ["path", { d: "M9.5 3.5v6.5L5 18.2A1.5 1.5 0 0 0 6.3 20.5h11.4a1.5 1.5 0 0 0 1.3-2.3L14.5 10V3.5M8 3.5h8" }],
    ["path", { d: "M13.5 12.5v3.5a1.75 1.75 0 0 1-3.5 0", ...SOLID_STROKE }],
  ],
};

export default TestJsIcon;
