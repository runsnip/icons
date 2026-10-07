import { createElement } from "react";
import { icons } from "../browser/names";
import { iconForm, kindColor, resolveIcon, type IconRequest } from "../files";
import type { Icon as IconData } from "../types";
import { componentOf, type IconProps } from "./create";

/**
 * Any icon, by its name or as data, in any of its forms (files.ts):
 *
 *   <Icon name="bold" />                          an icon of the set, by its file name or an alias's
 *   <Icon name="typescript" colored />            a kind's glyph in its own colour
 *   <Icon name="typescript" form="file" />        a page with the glyph in its corner
 *   <Icon file="src/index.ts" />                  the glyph of a file's kind; a page when it has none
 *   <Icon folder="src" open colored />            a folder with its kind's glyph in the corner
 *   <Icon icon={await loadIcon("bold")} />        data held already
 *
 * Hookless, so it renders in Server Components. Drawing by name holds every icon of the set (about the UMD build's
 * weight): an app that draws only a few, by import, takes their components instead.
 */
export function Icon({ icon, name, file, folder, form, open, colored, ...props }: IconProps & IconRequest & { icon?: IconData }) {
  const data = icon
    ? iconForm(icon, { form, open, colored, color: kindColor(icon.name.replace(/Icon$/, "").replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()) })
    : resolveIcon(icons, { name, file, folder, form, open, colored });
  return data ? createElement(componentOf(data), props) : null;
}
