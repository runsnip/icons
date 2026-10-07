import type { Icon } from "../types";
import { SOLID } from "../system";

/** Varnish: a cache's cylinder struck by a bolt, the bolt the mark. From the files set. */
export const VarnishIcon: Icon = {
  name: "VarnishIcon",
  node: [
    ["ellipse", { cx: 12, cy: 6.5, rx: 7, ry: 3 }],
    ["path", { d: "M5 6.5v11c0 1.7 3.1 3 7 3s7-1.3 7-3v-11" }],
    ["polygon", { points: "13.5,10 9,15 12,15 10.5,19 15,13.5 12,13.5", ...SOLID }],
  ],
};

export default VarnishIcon;
