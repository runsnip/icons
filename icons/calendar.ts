import type { Icon } from "../types";
import { SOLID } from "../system";

/** A calendar: a page of days with one marked. From the insert set. */
export const CalendarIcon: Icon = {
  name: "CalendarIcon",
  node: [
    ["rect", { x: 3.5, y: 5, width: 17, height: 15.5, rx: 2.5 }],
    ["path", { d: "M3.5 10h17M8 3.5v3M16 3.5v3" }],
    ["rect", { x: 12.5, y: 13, width: 4.5, height: 4.5, rx: 1, ...SOLID }],
  ],
};

export default CalendarIcon;
