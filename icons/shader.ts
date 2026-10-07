import type { Icon } from "../types";
import { SOLID } from "../system";

/** A shader: a sphere, its shaded side filled. From the files set. */
export const ShaderIcon: Icon = {
  name: "ShaderIcon",
  node: [
    ["circle", { cx: 12, cy: 12, r: 8.5 }],
    ["path", { d: "M18.01 5.99A8.5 8.5 0 0 1 5.99 18.01 10 10 0 0 0 18.01 5.99Z", ...SOLID }],
  ],
};

export default ShaderIcon;
