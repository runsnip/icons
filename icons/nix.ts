import type { Icon } from "../types";
import { SOLID } from "../system";

/** Nix: a snowflake, six arms round a filled hexagon. From the files set. */
export const NixIcon: Icon = {
  name: "NixIcon",
  node: [
    ["path", { d: "M12 3.5v4.5M12 16v4.5M4.64 7.75l3.9 2.25M15.46 14l3.9 2.25M4.64 16.25l3.9-2.25M15.46 10l3.9-2.25" }],
    ["path", { d: "M12 8.8L14.77 10.4L14.77 13.6L12 15.2L9.23 13.6L9.23 10.4Z", ...SOLID }],
  ],
};

export default NixIcon;
