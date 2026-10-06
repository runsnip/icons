import type { Icon } from "../types";
import { SOLID } from "../system";

/** A five-point star outline. From the slides set. */
export const ShapeStarIcon: Icon = {
  name: "ShapeStarIcon",
  node: [
    ["path", { d: "M12 5.8L13.7 10.05L18.28 10.36L14.76 13.3L15.88 17.74L12 15.3L8.12 17.74L9.24 13.3L5.72 10.36L10.3 10.05Z" }],
    ["path", { d: "M3.5 5h3v3h-3ZM17.5 16h3v3h-3Z", ...SOLID }],
  ],
};

export default ShapeStarIcon;
