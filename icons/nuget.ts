import type { Icon } from "../types";
import { SOLID } from "../system";

/** NuGet: a tile with a small filled dot and a larger ring. From the files set. */
export const NugetIcon: Icon = {
  name: "NugetIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 17, height: 17, rx: 4 }],
    ["circle", { cx: 14.5, cy: 14.5, r: 3 }],
    ["circle", { cx: 8.5, cy: 8.5, r: 2, ...SOLID }],
  ],
};

export default NugetIcon;
