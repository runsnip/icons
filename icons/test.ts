import type { Icon } from "../types";
import { SOLID } from "../system";

/** Tests: a flask, the liquid in it the mark. From the files set. */
export const TestIcon: Icon = {
  name: "TestIcon",
  node: [
    ["path", { d: "M9.5 3.5v6.5L5 18.2A1.5 1.5 0 0 0 6.3 20.5h11.4a1.5 1.5 0 0 0 1.3-2.3L14.5 10V3.5M8 3.5h8" }],
    ["path", { d: "M9 14.5h6l2.2 4h-10.4Z", ...SOLID }],
  ],
};

export default TestIcon;
