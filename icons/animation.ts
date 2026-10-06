import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A shape with motion lines (a star moving). From the slides set. */
export const AnimationIcon: Icon = {
  name: "AnimationIcon",
  node: [
    ["path", { d: "M14.75 6.6L16.28 10.5L20.46 10.75L17.22 13.4L18.28 17.45L14.75 15.2L11.22 17.45L12.28 13.4L9.04 10.75L13.22 10.5Z" }],
    ["path", { d: "M3.5 8.5h3M3.5 12.5h2M3.5 16.5h3", ...SOLID_STROKE }],
  ],
};

export default AnimationIcon;
