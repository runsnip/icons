import type { Icon } from "../types";
import { SOLID } from "../system";

/** Istanbul (nyc) coverage: a bar filled as far as tests reach, the fill the mark. From the files set. */
export const IstanbulIcon: Icon = {
  name: "IstanbulIcon",
  node: [
    ["rect", { x: 3.5, y: 7.5, width: 17, height: 9, rx: 2 }],
    ["rect", { x: 6, y: 10, width: 8, height: 4, rx: 1, ...SOLID }],
  ],
};

export default IstanbulIcon;
