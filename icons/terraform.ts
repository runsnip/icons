import type { Icon } from "../types";
import { SOLID } from "../system";

/** Terraform: four staggered blocks, the lone right one the mark. From the files set. */
export const TerraformIcon: Icon = {
  name: "TerraformIcon",
  node: [
    ["rect", { x: 4.5, y: 4.5, width: 4.5, height: 6.5, rx: 0.75 }],
    ["rect", { x: 10.25, y: 7.5, width: 4.5, height: 6.5, rx: 0.75 }],
    ["rect", { x: 10.25, y: 14, width: 4.5, height: 6.5, rx: 0.75 }],
    ["rect", { x: 16, y: 7.5, width: 4.5, height: 6.5, rx: 0.75, ...SOLID }],
  ],
};

export default TerraformIcon;
