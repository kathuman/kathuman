// Renders scripts/banner.html to assets/banner-dark.png and assets/banner-light.png (2x, real fonts).
//   node scripts/render-banner.mjs            (needs Playwright; CHROME=<chrome.exe> to use a local Chrome)
import pw from "playwright";
const { chromium } = pw;
import { fileURLToPath, pathToFileURL } from "url";
import path from "path";

const here = path.dirname(fileURLToPath(import.meta.url));
const page = pathToFileURL(path.join(here, "banner.html")).href;
const browser = await chromium.launch(process.env.CHROME ? { executablePath: process.env.CHROME } : {});
const tab = await browser.newPage({ viewport: { width: 1280, height: 300 }, deviceScaleFactor: 2 });
for (const mode of ["dark", "light"]) {
  await tab.goto(page + (mode === "light" ? "?light" : ""));
  await tab.evaluate(() => document.fonts.ready);
  await tab.waitForTimeout(300);
  await tab.locator(".banner").screenshot({ path: path.join(here, "..", "assets", `banner-${mode}.png`), omitBackground: true });
  console.log("wrote assets/banner-" + mode + ".png");
}
await browser.close();
