import type { Icon } from "../types";
import { SOLID } from "../system";

/** Test coverage: a bar, the covered part solid. From the files set. */
export const CoverageIcon: Icon = {
  name: "CoverageIcon",
  node: [
    ["rect", { x: 3.5, y: 7.5, width: 17, height: 9, rx: 2.5 }],
    ["rect", { x: 6.5, y: 10.5, width: 7, height: 3, rx: 1, ...SOLID }],
  ],
};

export default CoverageIcon;
