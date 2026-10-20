import type { Icon } from "../types";
import { SOLID } from "../system";

/** A camera: the body with its raised top, the lens the mark. From the ui set. */
export const CameraIcon: Icon = {
  name: "CameraIcon",
  node: [
    ["path", { d: "M3.5 9.5a2 2 0 0 1 2-2h2.4l1.5-2.5h5.2l1.5 2.5h2.4a2 2 0 0 1 2 2V18a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2Z" }],
    ["circle", { cx: 12, cy: 13.5, r: 3, ...SOLID }],
  ],
};

export default CameraIcon;
