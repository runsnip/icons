/* What npm would publish, checked before it does: every export's JavaScript and declarations, the
   licence and the readme in; sources, tests and the repo's tooling out. `npm pack --dry-run` exits 0
   on a tarball of three files when dist/ was never built — this is what notices. */
import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";

const root = new URL("..", import.meta.url).pathname;
const pkg = JSON.parse(readFileSync(new URL("../package.json", import.meta.url), "utf8"));
const [report] = JSON.parse(execFileSync("npm", ["pack", "--dry-run", "--json", "--ignore-scripts"], { cwd: root, encoding: "utf8" }));
const files = new Set(report.files.map((f) => f.path));
const problems = [];

for (const want of ["package.json", "LICENSE", "README.md"]) if (!files.has(want)) problems.push(`missing ${want}`);
/* The script a CDN serves for the bare package URL (unpkg, jsdelivr): a page's <script src> must find it. */
for (const field of ["unpkg", "jsdelivr"]) {
  const path = pkg[field]?.replace(/^\.\//, "");
  if (path && !files.has(path)) problems.push(`"${field}": ${path} is not in the tarball`);
}
/* A pattern export (./icons/*) is checked for every icon icons.json lists. */
const icons = JSON.parse(readFileSync(new URL("../icons.json", import.meta.url), "utf8")).map((i) => i.file);
for (const [subpath, target] of Object.entries(pkg.exports)) {
  for (const key of ["default", "types"]) {
    const pattern = target[key]?.replace(/^\.\//, "");
    const paths = pattern?.includes("*") ? icons.map((name) => pattern.replace("*", name)) : [pattern];
    for (const path of paths) if (!path || !files.has(path)) problems.push(`export "${subpath}": ${key} ${path ?? "(none)"} is not in the tarball`);
  }
}
for (const path of files) {
  if (path.endsWith(".ts") && !path.endsWith(".d.ts")) problems.push(`a source file would be published: ${path}`);
  if (/(^|\/)tests?\//.test(path) || path.startsWith("scripts/") || path.endsWith(".map")) problems.push(`not for npm: ${path}`);
}

if (problems.length) {
  console.error(`${pkg.name}@${pkg.version}: the tarball is not what should be published:\n  ${problems.join("\n  ")}`);
  process.exit(1);
}
console.log(`${pkg.name}@${pkg.version}: ${files.size} files, every export's JavaScript and declarations present, no sources, tests or tooling.`);
