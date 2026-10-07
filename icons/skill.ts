import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A skill: a card with a thickened bolt. From the files set. */
export const SkillIcon: Icon = {
  name: "SkillIcon",
  node: [
    ["rect", { x: 4.5, y: 3.5, width: 15, height: 17, rx: 2.5 }],
    ["path", { d: "M13 7l-3 5h4l-3 5", ...SOLID_STROKE }],
  ],
};

export default SkillIcon;
