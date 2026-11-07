// Regenerates the two-discipline gallery in README.md (between the GALLERY markers) from the projects site's
// projects.json, so the profile never drifts from https://kathuman.github.io/claude-projects/.
//   - Each column shows that discipline's flagships (projects.json "flagship": 1, 2, …; "discipline": "supply-chain" |
//     "mechanical") with a picture and one line, then "In the lab:" the newest other projects and a link to the site.
//   - Pictures: assets/<slug>.jpg in this repo when there is one (framed by hand), else the site's own thumbnail.
//   - Projects not in projects.json (the Atlas lives on Estay Dynamics) are described here in EXTERNAL.
// Run by .github/workflows/update-projects.yml (daily and on demand); locally: node scripts/update-projects.mjs
import { readFile, writeFile, access } from "node:fs/promises";

const SITE = "https://kathuman.github.io/claude-projects/";
const SOURCE = SITE + "projects.json";
const START = "<!-- GALLERY:START -->", END = "<!-- GALLERY:END -->";
const ALSO = 4;                                         // newest non-flagship projects named under each column

const EXTERNAL = {
  "Global Disruption Atlas": { demoUrl: "https://kathuman.github.io/estay-dynamics/atlas/", discipline: "supply-chain" },
};
const COLUMNS = [
  { id: "supply-chain", head: "Supply chain", all: "All supply chain tools →" },
  { id: "mechanical", head: "Mechanical engineering", all: "All mechanical engineering tools →" },
];
// The featured projects are the site's flagships (projects.json "flagship": 1, 2, …), so the profile follows the site.
// one line per featured project (the site's descriptions are paragraphs)
const BLURB = {
  "Global Disruption Atlas": "How long a network survives a closure, and what recovering faster costs.",
  "Tierwise": "Plan capacity across a multi-tier supply chain, with every number proved by the solver.",
  "Ripple": "A supply chain ordering game for classes, with Claude as an optional player.",
  "Real Options for Network Design": "What staging, waiting or leasing is worth against one big commitment.",
  "Heat Pump Studio": "Design a heat pump from the building's heat loss to the compressor.",
  "Turbine Lab": "Pelton, Francis and Kaplan turbines in 3D, with the physics behind them.",
  "Tube Flow": "Lattice-Boltzmann CFD of flow past a sphere in a tube, validated against theory.",
};

// hand-framed pictures whose file name is not the title's slug
const IMG = { "Global Disruption Atlas": "assets/disruption-atlas.jpg", "Real Options for Network Design": "assets/real-options.jpg" };

const slug = (t) => t.toLowerCase().split("—")[0].replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const exists = (f) => access(f).then(() => true, () => false);

const res = await fetch(SOURCE, { cache: "no-store" });
if (!res.ok) throw new Error(`fetching ${SOURCE}: ${res.status}`);
const all = (await res.json()).slice().sort((a, b) => (b.date || "").localeCompare(a.date || ""));
const short = (t) => t.split(" — ")[0];
const byTitle = new Map(all.map((p) => [short(p.title), p]));
const find = (t) => byTitle.get(t) || (EXTERNAL[t] && { title: t, ...EXTERNAL[t] });

async function picture(p) {
  const own = IMG[p.title] || `assets/${slug(p.title)}.jpg`;
  if (await exists(own)) return own;
  return p.thumb ? SITE + p.thumb : null;
}
async function cell(t) {
  const p = find(t);
  if (!p || !p.demoUrl) return "<td></td>";
  const img = await picture(p);
  return `<td width="50%"><a href="${p.demoUrl}">${img ? `<img src="${img}" width="100%" alt="${t}">` : ""}</a><br>` +
    `<a href="${p.demoUrl}"><strong>${t}</strong></a><br>${BLURB[t] || ""}</td>`;
}

for (const c of COLUMNS) {
  c.featured = all.filter((p) => p.discipline === c.id && typeof p.flagship === "number" && p.status !== "early")
    .sort((a, b) => a.flagship - b.flagship).map((p) => short(p.title));
  const mine = all.filter((p) => p.discipline === c.id && p.demoUrl);
  const lab = mine.filter((p) => !c.featured.includes(short(p.title))).slice(0, ALSO).map((p) => `<a href="${p.demoUrl}">${short(p.title)}</a>`);
  c.lab = `${lab.length ? `In the lab: ${lab.join(", ")}.<br>` : ""}<a href="${SITE}?cat=${c.id}"><strong>${c.all}</strong></a> (${mine.length})`;
}
// flagships side by side; a column that runs out shows its "In the lab" line in the gap, the rest go in a last row
const out = [`<table>`, `  <tr>${COLUMNS.map((c) => `<th width="50%">${c.head}</th>`).join("")}</tr>`];
const rows = Math.max(...COLUMNS.map((c) => c.featured.length));
const placed = new Set();
for (let i = 0; i < rows; i++) {
  const cells = await Promise.all(COLUMNS.map(async (c) => {
    if (i < c.featured.length) return cell(c.featured[i]);
    if (!placed.has(c.id)) { placed.add(c.id); return `<td width="50%">${c.lab}</td>`; }
    return `<td></td>`;
  }));
  out.push(`  <tr>${cells.join("")}</tr>`);
}
const left = COLUMNS.filter((c) => !placed.has(c.id));
if (left.length === COLUMNS.length) out.push(`  <tr>${left.map((c) => `<td>${c.lab}</td>`).join("")}</tr>`);
else for (const c of left) out.push(`  <tr><td colspan="${COLUMNS.length}"><strong>${c.head}</strong>. ${c.lab}</td></tr>`);
out.push(`</table>`, "");
const others = all.filter((p) => (p.discipline || "other") === "other" && p.demoUrl && p.demoUrl.startsWith(SITE)).slice(0, 4)
  .map((p) => `[${p.title}](${p.demoUrl})`);
out.push(`**Also on the site:** ${others.join(", ")} and [more](${SITE}?cat=other).`);
const gallery = out.join("\n");

const readme = await readFile("README.md", "utf8");
const a = readme.indexOf(START), b = readme.indexOf(END);
if (a < 0 || b < a) throw new Error("README.md is missing the GALLERY markers");
const next = readme.slice(0, a + START.length) + "\n" + gallery + "\n" + readme.slice(b);
if (next !== readme) { await writeFile("README.md", next); console.log(`README.md gallery updated from ${all.length} projects`); }
else console.log("README.md already up to date");
