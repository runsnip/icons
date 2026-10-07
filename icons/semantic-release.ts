import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** semantic-release: a box with a thickened arrow rising out of it. From the files set. */
export const SemanticReleaseIcon: Icon = {
  name: "SemanticReleaseIcon",
  node: [
    ["path", { d: "M8.5 11h-4v8.5h15V11h-4" }],
    ["path", { d: "M12 15.5V4.5M8.5 8 12 4.5 15.5 8", ...SOLID_STROKE }],
  ],
};

export default SemanticReleaseIcon;
