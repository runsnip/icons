import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Layers in outline, the top one the mark: LayersIcon unfilled. From the builder set. */
export const LayersOutlineIcon: Icon = {
  name: "LayersOutlineIcon",
  node: [
    ["path", { d: "M12 3.5 20.5 8 12 12.5 3.5 8Z", ...SOLID_STROKE }],
    ["path", { d: "M3.5 12 12 16.5 20.5 12M3.5 16 12 20.5 20.5 16" }],
  ],
};

export default LayersOutlineIcon;
