import type { Icon } from "../types";
import { SOLID } from "../system";

/** Sandbox: a tray with a mound of sand filled. From the files set. */
export const SandboxIcon: Icon = {
  name: "SandboxIcon",
  node: [
    ["path", { d: "M3.5 9.5v8a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-8" }],
    ["path", { d: "M6 16.5a6 5.5 0 0 1 12 0Z", ...SOLID }],
  ],
};

export default SandboxIcon;
