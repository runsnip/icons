import type { Icon } from "../types";
import { SOLID } from "../system";

/** SonarCloud: sonar rings spreading from a corner, the source the mark. From the files set. */
export const SonarcloudIcon: Icon = {
  name: "SonarcloudIcon",
  node: [
    ["path", { d: "M4.5 4.5a15 15 0 0 1 15 15" }],
    ["path", { d: "M4.5 9.5a10 10 0 0 1 10 10" }],
    ["path", { d: "M4.5 19.5v-5a5 5 0 0 1 5 5Z", ...SOLID }],
  ],
};

export default SonarcloudIcon;
