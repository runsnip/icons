import type { Icon } from "../types";
import { SOLID } from "../system";

/** Buildkite: two kite panels, one filled the mark. From the files set. */
export const BuildkiteIcon: Icon = {
  name: "BuildkiteIcon",
  node: [
    ["path", { d: "M3.5 5v7.5l7.5 3.5V8.5Z" }],
    ["path", { d: "M13 8.5V16l7.5-3.5V5Z", ...SOLID }],
    ["path", { d: "M11 16v4.5l2-1V16" }],
  ],
};

export default BuildkiteIcon;
