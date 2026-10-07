import type { Icon } from "../types";
import { SOLID } from "../system";

/** A shopping cart, its wheels the mark. From the files set. */
export const CartIcon: Icon = {
  name: "CartIcon",
  node: [
    ["path", { d: "M3.5 5h2.5l2 10h10l2-7.5H7" }],
    ["circle", { cx: 9, cy: 18.5, r: 1.8, ...SOLID }],
    ["circle", { cx: 17, cy: 18.5, r: 1.8, ...SOLID }],
  ],
};

export default CartIcon;
