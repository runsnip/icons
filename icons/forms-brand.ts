import type { Icon } from "../types";
import { SOLID } from "../system";

/** RunSnip Forms: a question's choices, one of them chosen, in the brand frame. From the brand set. */
export const FormsBrandIcon: Icon = {
  name: "FormsBrandIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 17, height: 17, rx: 4 }],
    ["circle", { cx: 8.5, cy: 15, r: 1.5 }],
    ["path", { d: "M12 9h4.5M12 15h4.5" }],
    ["circle", { cx: 8.5, cy: 9, r: 1.75, ...SOLID }],
  ],
};

export default FormsBrandIcon;
