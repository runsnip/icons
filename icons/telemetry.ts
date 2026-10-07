import type { Icon } from "../types";
import { SOLID } from "../system";

/** Telemetry pipeline: three signals gathered, the collector the mark. From the files set. */
export const TelemetryIcon: Icon = {
  name: "TelemetryIcon",
  node: [
    ["path", { d: "M3.5 6.5h4l5 5.5M3.5 12h9M3.5 17.5h4l5-5.5" }],
    ["circle", { cx: 16.5, cy: 12, r: 3.5, ...SOLID }],
  ],
};

export default TelemetryIcon;
