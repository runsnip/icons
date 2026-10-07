import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** TypeScript tests: a flask, a T in it the mark. From the files set. */
export const TestTsIcon: Icon = {
  name: "TestTsIcon",
  node: [
    ["path", { d: "M9.5 3.5v6.5L5 18.2A1.5 1.5 0 0 0 6.3 20.5h11.4a1.5 1.5 0 0 0 1.3-2.3L14.5 10V3.5M8 3.5h8" }],
    ["path", { d: "M9.5 13h5M12 13v5", ...SOLID_STROKE }],
  ],
};

export default TestTsIcon;
