import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A cube in outline, the Y of its near edges the mark: a 3D model. From the files set. */
export const ThreeDIcon: Icon = {
  name: "ThreeDIcon",
  node: [
    ["path", { d: "M12 3.5 19.5 7.75v8.5L12 20.5l-7.5-4.25v-8.5Z" }],
    ["path", { d: "M4.5 7.75 12 12l7.5-4.25M12 12v8.5", ...SOLID_STROKE }],
  ],
};

export default ThreeDIcon;
