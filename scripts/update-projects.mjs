// Regenerates the "All projects" table in README.md from the projects site's projects.json, so the
// profile never drifts from https://kathuman.github.io/claude-projects/. Run by
// .github/workflows/update-projects.yml (daily and on demand); locally: node scripts/update-projects.mjs
import { readFile, writeFile } from "node:fs/promises";

const SOURCE = "https://kathuman.github.io/claude-projects/projects.json";
const START = "<!-- PROJECTS:START -->", END = "<!-- PROJECTS:END -->";

// first sentence (or ~150 characters, on a word boundary) of a project's description
function summary(text) {
  const t = (text || "").replace(/\s+/g, " ").trim();
  const m = t.match(/^(.{40,220}?[.!?])\s/);
  let s = m ? m[1] : t;
  if (s.length > 160) s = s.slice(0, 157).replace(/\s+\S*$/, "") + "…";
  return s.replace(/\|/g, "\|");
}

const res = await fetch(SOURCE, { cache: "no-store" });
if (!res.ok) throw new Error(`fetching ${SOURCE}: ${res.status}`);
const projects = (await res.json()).slice().sort((a, b) => (b.date || "").localeCompare(a.date || ""));

const rows = projects.map((p) => {
  const name = p.demoUrl ? `[${p.title}](${p.demoUrl})` : p.title;
  const code = p.repoUrl ? `[code](${p.repoUrl})` : "";
  return `| ${name} | ${summary(p.description)} | ${code} |`;
});
const table = [
  `${projects.length} projects, newest first — generated from the [projects site](https://kathuman.github.io/claude-projects/).`,
  "",
  "| Project | What it is | |",
  "|---|---|---|",
  ...rows,
].join("\n");

const readme = await readFile("README.md", "utf8");
const a = readme.indexOf(START), b = readme.indexOf(END);
if (a < 0 || b < a) throw new Error("README.md is missing the PROJECTS markers");
const next = readme.slice(0, a + START.length) + "\n" + table + "\n" + readme.slice(b);
if (next !== readme) { await writeFile("README.md", next); console.log(`README.md updated: ${projects.length} projects`); }
else console.log("README.md already up to date");
