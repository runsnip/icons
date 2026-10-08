import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Tobimake: config braces round a T and an L, the letters the mark. From the files set. */
export const TobimakeIcon: Icon = {
  name: "TobimakeIcon",
  node: [
    ["path", { d: "M8 4.5c-2 0-2.5 1-2.5 2.5v2.5c0 1.5-1 3-2 3 1 0 2 1.5 2 3v2.5c0 1.5.5 2.5 2.5 2.5" }],
    ["path", { d: "M16 4.5c2 0 2.5 1 2.5 2.5v2.5c0 1.5 1 3 2 3-1 0-2 1.5-2 3v2.5c0 1.5-.5 2.5-2.5 2.5" }],
    ["path", { d: "M8.5 8.5h3.5M10.25 8.5v7M13.5 8.5v7h2.5", ...SOLID_STROKE }],
  ],
};

export default TobimakeIcon;
