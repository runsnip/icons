import type { Icon } from "../types";
import { SOLID } from "../system";

/** ONNX: a small network, two inputs feeding a filled output. From the files set. */
export const OnnxIcon: Icon = {
  name: "OnnxIcon",
  node: [
    ["circle", { cx: 6, cy: 7, r: 2.5 }],
    ["circle", { cx: 6, cy: 17, r: 2.5 }],
    ["path", { d: "M8.5 8.2l6 2.6M8.5 15.8l6-2.6" }],
    ["circle", { cx: 17.5, cy: 12, r: 3, ...SOLID }],
  ],
};

export default OnnxIcon;
