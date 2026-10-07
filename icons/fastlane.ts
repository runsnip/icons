import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Fastlane: speed lines behind a forward chevron, the chevron the mark. From the files set. */
export const FastlaneIcon: Icon = {
  name: "FastlaneIcon",
  node: [
    ["path", { d: "M3.5 8h7M3.5 12h9M3.5 16h7" }],
    ["path", { d: "M14.5 6.5 20 12l-5.5 5.5", ...SOLID_STROKE }],
  ],
};

export default FastlaneIcon;
