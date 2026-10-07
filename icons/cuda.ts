import type { Icon } from "../types";
import { SOLID } from "../system";

/** CUDA: a GPU chip, its core solid. From the files set. */
export const CudaIcon: Icon = {
  name: "CudaIcon",
  node: [
    ["rect", { x: 7, y: 7, width: 10, height: 10, rx: 1.5 }],
    ["path", { d: "M9.5 3.5V7M14.5 3.5V7M9.5 17v3.5M14.5 17v3.5M3.5 9.5H7M3.5 14.5H7M17 9.5h3.5M17 14.5h3.5" }],
    ["rect", { x: 10, y: 10, width: 4, height: 4, rx: 0.5, ...SOLID }],
  ],
};

export default CudaIcon;
