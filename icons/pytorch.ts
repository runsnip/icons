import type { Icon } from "../types";
import { SOLID } from "../system";

/** PyTorch: its open ring with the flame's stroke, the spark the mark. From the files set. */
export const PytorchIcon: Icon = {
  name: "PytorchIcon",
  node: [
    ["path", { d: "M12 3.5 7.05 8.55A7 7 0 1 0 16.95 8.55" }],
    ["circle", { cx: 17, cy: 5, r: 1.6, ...SOLID }],
  ],
};

export default PytorchIcon;
