import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Qwik: a rounded hexagon struck through, the stroke the mark. From the files set. */
export const QwikIcon: Icon = {
  name: "QwikIcon",
  node: [
    ["path", { d: "M8 4h8l4.5 8-4.5 8H8l-4.5-8Z" }],
    ["path", { d: "M10.5 8l3 4-2 1 3.5 5", ...SOLID_STROKE }],
  ],
};

export default QwikIcon;
