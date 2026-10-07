import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** The letters Ai, thickened, in a frame: Illustrator artwork. From the files set. */
export const IllustratorIcon: Icon = {
  name: "IllustratorIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 17, height: 17, rx: 3 }],
    ["path", { d: "M7.3 17 10 7 12.7 17M8.38 13.6H11.62M15.8 11V17M15.8 7.5v.1", ...SOLID_STROKE }],
  ],
};

export default IllustratorIcon;
