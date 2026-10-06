import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A ticked box. From the pdf set. */
export const FormCheckboxIcon: Icon = {
  name: "FormCheckboxIcon",
  node: [
    ["rect", { x: 4.5, y: 4.5, width: 15, height: 15, rx: 3 }],
    ["path", { d: "M8 12.5l2.8 2.8 5.2-5.8", ...SOLID_STROKE }],
  ],
};

export default FormCheckboxIcon;
