// Renders scripts/banner.html to assets/banner-dark.png and assets/banner-light.png at 2x, with real fonts.
//   node scripts/render-banner.mjs        (Node 22+; uses a local Chrome, CHROME=<path> to choose another)
// No dependencies: it starts Chrome headless and talks to it over the DevTools protocol.
import { spawn } from "node:child_process";
import { mkdtempSync, writeFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const page = pathToFileURL(path.join(here, "banner.html")).href;
const CHROME = process.env.CHROME || (process.platform === "win32" ? "C:/Program Files/Google/Chrome/Application/chrome.exe"
  : process.platform === "darwin" ? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" : "google-chrome");
const port = 9400 + Math.floor(Math.random() * 400), profile = mkdtempSync(path.join(tmpdir(), "banner"));
const chrome = spawn(CHROME, ["--headless=new", "--hide-scrollbars", "--allow-file-access-from-files", `--remote-debugging-port=${port}`, `--user-data-dir=${profile}`, "about:blank"], { stdio: "ignore" });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let target;
for (let i = 0; i < 60 && !target; i++) { await sleep(200); try { target = (await (await fetch(`http://127.0.0.1:${port}/json`)).json()).find((t) => t.type === "page"); } catch {} }
const ws = new WebSocket(target.webSocketDebuggerUrl); await new Promise((r) => ws.addEventListener("open", r));
let id = 0; const pending = new Map();
ws.addEventListener("message", (e) => { const m = JSON.parse(e.data); if (pending.has(m.id)) { pending.get(m.id)(m.result); pending.delete(m.id); } });
const send = (method, params = {}) => new Promise((r) => { const i = ++id; pending.set(i, r); ws.send(JSON.stringify({ id: i, method, params })); });

await send("Emulation.setDeviceMetricsOverride", { width: 1280, height: 340, deviceScaleFactor: 2, mobile: false });
await send("Emulation.setDefaultBackgroundColorOverride", { color: { r: 0, g: 0, b: 0, a: 0 } });
for (const mode of ["dark", "light"]) {
  await send("Page.navigate", { url: page + (mode === "light" ? "?light" : "") });
  await sleep(2500);
  await send("Runtime.evaluate", { expression: "document.fonts.ready.then(() => true)", awaitPromise: true });
  const shot = await send("Page.captureScreenshot", { format: "png", clip: { x: 0, y: 0, width: 1280, height: 340, scale: 1 } });
  writeFileSync(path.join(here, "..", "assets", `banner-${mode}.png`), Buffer.from(shot.data, "base64"));
  console.log("wrote assets/banner-" + mode + ".png");
}
ws.close(); chrome.kill();
try { rmSync(profile, { recursive: true, force: true }); } catch {}
