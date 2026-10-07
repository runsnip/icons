import type { Icon } from "../types";
import { SOLID } from "../system";

/** Sponsorship: an open hand, the heart above it the mark. From the files set. */
export const SponsorIcon: Icon = {
  name: "SponsorIcon",
  node: [
    ["path", { d: "M3.5 14.5h3l3 1.5h4a1.5 1.5 0 0 1 0 3H9.5M3.5 20h9.5l6.6-4a1.4 1.4 0 0 0-1.6-2.3L14.5 16" }],
    ["path", { d: "M12 11.5C9.6 10 8 8.6 8 6.9a2 2 0 0 1 4-.4 2 2 0 0 1 4 .4c0 1.7-1.6 3.1-4 4.6Z", ...SOLID }],
  ],
};

export default SponsorIcon;
