import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Obsidian: a shard of rock, its facet the mark. From the files set. */
export const ObsidianIcon: Icon = {
  name: "ObsidianIcon",
  node: [
    ["path", { d: "M9.5 3.5 17 7.5l2 7-5.5 6H8.5l-3.5-7Z" }],
    ["path", { d: "M9.5 3.5l2.5 10-3.5 7", ...SOLID_STROKE }],
  ],
};

export default ObsidianIcon;
