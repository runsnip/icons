import type { Icon } from "../types";
import { SOLID } from "../system";

/** A dancer: a filled head, open arms and a skirt: Ballerina. From the files set. */
export const BallerinaIcon: Icon = {
  name: "BallerinaIcon",
  node: [
    ["path", { d: "M4.5 11h15M12 8.5V11M6.5 18.5 12 11l5.5 7.5ZM10.5 18.5v2M13.5 18.5v2" }],
    ["circle", { cx: 12, cy: 5.8, r: 2.3, ...SOLID }],
  ],
};

export default BallerinaIcon;
