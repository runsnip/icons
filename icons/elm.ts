import type { Icon } from "../types";
import { SOLID } from "../system";

/** Elm: the tangram square, one piece solid. From the files set. */
export const ElmIcon: Icon = {
  name: "ElmIcon",
  node: [
    ["polygon", { points: "12,3.5 20.5,12 12,20.5 3.5,12" }],
    ["path", { d: "M7.75 7.75 16.25 16.25M12 12l4.25-4.25" }],
    ["polygon", { points: "12,5.2 15.1,8.3 8.9,8.3", ...SOLID }],
  ],
};

export default ElmIcon;
