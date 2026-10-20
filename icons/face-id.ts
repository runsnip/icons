import type { Icon } from "../types";
import { SOLID } from "../system";

/** Face recognition: a face inside a viewfinder's corners, its eyes the mark. From the ui set. */
export const FaceIdIcon: Icon = {
  name: "FaceIdIcon",
  node: [
    ["path", { d: "M3.5 8V5.5a2 2 0 0 1 2-2H8M16 3.5h2.5a2 2 0 0 1 2 2V8M20.5 16v2.5a2 2 0 0 1-2 2H16M8 20.5H5.5a2 2 0 0 1-2-2V16" }],
    ["circle", { cx: 9.25, cy: 9.75, r: 1.25, ...SOLID }],
    ["circle", { cx: 14.75, cy: 9.75, r: 1.25, ...SOLID }],
    ["path", { d: "M12 9.5v3.5h-1M9 15.75a4 4 0 0 0 6 0" }],
  ],
};

export default FaceIdIcon;
