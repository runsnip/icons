import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Swagger: braces in a circle, the braces the mark. From the files set. */
export const SwaggerIcon: Icon = {
  name: "SwaggerIcon",
  node: [
    ["circle", { cx: 12, cy: 12, r: 8.5 }],
    ["path", { d: "M10 8c-1.3 0-1.8.6-1.8 1.7v.8c0 .8-.4 1.5-1.2 1.5.8 0 1.2.7 1.2 1.5v.8c0 1.1.5 1.7 1.8 1.7M14 8c1.3 0 1.8.6 1.8 1.7v.8c0 .8.4 1.5 1.2 1.5-.8 0-1.2.7-1.2 1.5v.8c0 1.1-.5 1.7-1.8 1.7", ...SOLID_STROKE }],
  ],
};

export default SwaggerIcon;
