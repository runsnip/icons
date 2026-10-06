import type { Icon } from "../types";
import { SOLID } from "../system";

/** RunSnip Story: a message that plays, the play the mark, in the brand frame. From the brand set. */
export const StoryBrandIcon: Icon = {
  name: "StoryBrandIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 17, height: 17, rx: 4 }],
    ["path", { d: "M7 7h10v7.5h-5.5L8.5 17v-2.5H7Z" }],
    ["path", { d: "M10.75 8.75v4l3.25-2Z", ...SOLID }],
  ],
};

export default StoryBrandIcon;
