import type { Icon } from "../types";
import { SOLID } from "../system";

/** Tauri: two orbits turning about each other, their cores the mark. From the files set. */
export const TauriIcon: Icon = {
  name: "TauriIcon",
  node: [
    ["path", { d: "M14.3 8.1A5 5 0 1 0 8.1 14.3" }],
    ["path", { d: "M9.7 15.9A5 5 0 1 0 15.9 9.7" }],
    ["circle", { cx: 9.5, cy: 9.5, r: 1.8, ...SOLID }],
    ["circle", { cx: 14.5, cy: 14.5, r: 1.8, ...SOLID }],
  ],
};

export default TauriIcon;
