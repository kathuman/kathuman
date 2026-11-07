// Regenerates the two-discipline gallery in README.md (between the GALLERY markers) from the projects site's
// projects.json, so the profile never drifts from https://kathuman.github.io/claude-projects/.
//   - Each column shows its FEATURED projects with a picture and one line, then "Also:" the newest other projects of
//     that discipline (projects.json "discipline": "supply-chain" | "mechanical"), then a link to the filtered site.
//   - Pictures: assets/<slug>.jpg in this repo when there is one (framed by hand), else the site's own thumbnail.
//   - Projects not in projects.json (the Atlas lives on Estay Dynamics) are described here in EXTERNAL.
// Run by .github/workflows/update-projects.yml (daily and on demand); locally: node scripts/update-projects.mjs
import { readFile, writeFile, access } from "node:fs/promises";

const SITE = "https://kathuman.github.io/claude-projects/";
const SOURCE = SITE + "projects.json";
const START = "<!-- GALLERY:START -->", END = "<!-- GALLERY:END -->";
const ALSO = 4;                                         // newest non-featured projects named under each column

const EXTERNAL = {
  "Global Disruption Atlas": { demoUrl: "https://kathuman.github.io/estay-dynamics/atlas/", discipline: "supply-chain" },
};
const COLUMNS = [
  { id: "supply-chain", head: "Supply chain", all: "All supply chain tools →",
    featured: ["Global Disruption Atlas", "Network Stress Test", "Real Options for Network Design", "Supply Pulse"] },
  { id: "mechanical", head: "Mechanical engineering", all: "All mechanical engineering tools →",
    featured: ["Heat Pump Studio", "Turbine Lab", "Cobot Lab", "Tube Flow"] },
];
// one line per featured project (the site's descriptions are paragraphs)
const BLURB = {
  "Global Disruption Atlas": "How long a network survives a closure, and what recovering faster costs.",
  "Network Stress Test": "Load your nodes and lanes and find the single point of failure.",
  "Real Options for Network Design": "What staging, waiting or leasing is worth against one big commitment.",
  "Supply Pulse": "Test a supply policy against a fair baseline, for food and dairy chains.",
  "Heat Pump Studio": "Design a heat pump from the building's heat loss to the compressor.",
  "Turbine Lab": "Pelton, Francis and Kaplan turbines in 3D, with the physics behind them.",
  "Cobot Lab": "Program and simulate a collaborative robot arm, with inverse kinematics and physics.",
  "Tube Flow": "Lattice-Boltzmann CFD of flow past a sphere in a tube, validated against theory.",
};

// hand-framed pictures whose file name is not the title's slug
const IMG = { "Global Disruption Atlas": "assets/disruption-atlas.jpg", "Real Options for Network Design": "assets/real-options.jpg" };

const slug = (t) => t.toLowerCase().split("—")[0].replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const exists = (f) => access(f).then(() => true, () => false);

const res = await fetch(SOURCE, { cache: "no-store" });
if (!res.ok) throw new Error(`fetching ${SOURCE}: ${res.status}`);
const all = (await res.json()).slice().sort((a, b) => (b.date || "").localeCompare(a.date || ""));
const byTitle = new Map(all.map((p) => [p.title, p]));
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
  return `<td><a href="${p.demoUrl}">${img ? `<img src="${img}" width="100%" alt="${t}">` : ""}</a><br>` +
    `<a href="${p.demoUrl}"><strong>${t}</strong></a><br>${BLURB[t] || ""}</td>`;
}

const rows = Math.max(...COLUMNS.map((c) => c.featured.length));
const out = [`<table>`, `  <tr>${COLUMNS.map((c) => `<th width="50%">${c.head}</th>`).join("")}</tr>`];
for (let i = 0; i < rows; i++) out.push(`  <tr>${(await Promise.all(COLUMNS.map((c) => cell(c.featured[i])))).join("")}</tr>`);
out.push(`  <tr>${COLUMNS.map((c) => {
  const mine = all.filter((p) => p.discipline === c.id && p.demoUrl);
  const also = mine.filter((p) => !c.featured.includes(p.title)).slice(0, ALSO).map((p) => `<a href="${p.demoUrl}">${p.title.split(" — ")[0]}</a>`);
  return `<td>${also.length ? `Also: ${also.join(", ")}.<br>` : ""}<a href="${SITE}?cat=${c.id}"><strong>${c.all}</strong></a> (${mine.length})</td>`;
}).join("")}</tr>`);
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
