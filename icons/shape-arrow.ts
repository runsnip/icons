import type { Icon } from "../types";
import { SOLID } from "../system";

/** A block arrow. From the slides set. */
export const ShapeArrowIcon: Icon = {
  name: "ShapeArrowIcon",
  node: [
    ["path", { d: "M5 10h7.5V6.5L19 12l-6.5 5.5V14H5Z" }],
    ["path", { d: "M3.5 5h3v3h-3ZM17.5 16h3v3h-3Z", ...SOLID }],
  ],
};

export default ShapeArrowIcon;
