import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A registry: images kept as boxes on a shelf, one being pulled down from it — the arrow the mark. From the ops set. */
export const RegistryIcon: Icon = {
  name: "RegistryIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 7, height: 7, rx: 1.5 }],
    ["rect", { x: 13.5, y: 3.5, width: 7, height: 7, rx: 1.5 }],
    ["rect", { x: 3.5, y: 13.5, width: 7, height: 7, rx: 1.5 }],
    ["path", { d: "M17 13v7M14.25 17.25 17 20l2.75-2.75", ...SOLID_STROKE }],
  ],
};

export default RegistryIcon;
