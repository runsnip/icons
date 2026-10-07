import type { Icon } from "../types";
import { SOLID } from "../system";

/** Protocol Buffers: a message of numbered fields, the field numbers the mark. From the files set. */
export const ProtoIcon: Icon = {
  name: "ProtoIcon",
  node: [
    ["rect", { x: 3.5, y: 4.5, width: 17, height: 15, rx: 2.5 }],
    ["path", { d: "M10.5 9h6.5M10.5 12h6.5M10.5 15h4.5" }],
    ["circle", { cx: 7.5, cy: 9, r: 1.3, ...SOLID }],
    ["circle", { cx: 7.5, cy: 12, r: 1.3, ...SOLID }],
    ["circle", { cx: 7.5, cy: 15, r: 1.3, ...SOLID }],
  ],
};

export default ProtoIcon;
