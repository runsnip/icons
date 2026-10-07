import type { Icon } from "../types";
import { SOLID } from "../system";

/** Hex: a hexagon, a smaller one in it the mark. From the files set. */
export const HexIcon: Icon = {
  name: "HexIcon",
  node: [
    ["path", { d: "M20.5 12L16.25 19.36L7.75 19.36L3.5 12L7.75 4.64L16.25 4.64Z" }],
    ["path", { d: "M15.2 12L13.6 14.77L10.4 14.77L8.8 12L10.4 9.23L13.6 9.23Z", ...SOLID }],
  ],
};

export default HexIcon;
