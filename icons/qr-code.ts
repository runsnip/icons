import type { Icon } from "../types";
import { SOLID } from "../system";

/** A QR code: three finder squares at its corners, their centres the mark, and the data's modules in the fourth. From the ui set. */
export const QrCodeIcon: Icon = {
  name: "QrCodeIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 6.5, height: 6.5, rx: 1.5 }],
    ["rect", { x: 14, y: 3.5, width: 6.5, height: 6.5, rx: 1.5 }],
    ["rect", { x: 3.5, y: 14, width: 6.5, height: 6.5, rx: 1.5 }],
    ["rect", { x: 5.75, y: 5.75, width: 2, height: 2, rx: 0.5, ...SOLID }],
    ["rect", { x: 16.25, y: 5.75, width: 2, height: 2, rx: 0.5, ...SOLID }],
    ["rect", { x: 5.75, y: 16.25, width: 2, height: 2, rx: 0.5, ...SOLID }],
    ["path", { d: "M14 14h3.5M20.5 14h0M14 17.5v3M17.5 17.5h3M17.5 20.5h3" }],
  ],
};

export default QrCodeIcon;
