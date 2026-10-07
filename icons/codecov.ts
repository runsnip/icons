import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Codecov: an umbrella, its handle the mark. From the files set. */
export const CodecovIcon: Icon = {
  name: "CodecovIcon",
  node: [
    ["path", { d: "M3.5 12a8.5 8.5 0 0 1 17 0Z" }],
    ["path", { d: "M12 12v6a2 2 0 0 1-4 0", ...SOLID_STROKE }],
  ],
};

export default CodecovIcon;
