import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** The letters Ps, thickened, in a frame: a Photoshop document. From the files set. */
export const PhotoshopIcon: Icon = {
  name: "PhotoshopIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 17, height: 17, rx: 3 }],
    ["path", { d: "M7.2 17V7h2a2.8 2.8 0 0 1 0 5.6H7.2M17.2 11.96A1.9 1.5 0 0 0 15.3 11 1.9 1.5 0 0 0 15.3 14 1.9 1.5 0 0 1 15.3 17 1.9 1.5 0 0 1 13.4 16.04", ...SOLID_STROKE }],
  ],
};

export default PhotoshopIcon;
