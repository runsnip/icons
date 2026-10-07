import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Lottie: a frame with the animation's swoosh through it. From the files set. */
export const LottieIcon: Icon = {
  name: "LottieIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 17, height: 17, rx: 4 }],
    ["path", { d: "M7.5 16c2.5 0 3-3.5 4.5-4s2-4 4.5-4", ...SOLID_STROKE }],
  ],
};

export default LottieIcon;
