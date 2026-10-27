<picture>
  <source media="(prefers-color-scheme: light)" srcset="assets/banner-light.png?v=5">
  <img src="assets/banner-dark.png?v=5" width="100%" alt="Daniel Sepulveda Estay, PhD. Supply networks are designed for forecasts that will not happen. I build open, interactive models of where they break, what flexibility is worth, and which decisions can wait.">
</picture>

**Research and open decision tools for supply network design, disruption and flexibility.**
Every model here runs in the browser, is tested in CI, and is free to use and inspect.

[![Decision Labs](https://img.shields.io/badge/Decision_Labs-live_tools-7dd3fc?style=for-the-badge&labelColor=0a2f52)](https://kathuman.github.io/claude-projects/)
[![Estay Dynamics](https://img.shields.io/badge/Estay_Dynamics-research_%26_atlas-7dd3fc?style=for-the-badge&labelColor=0a2f52)](https://kathuman.github.io/estay-dynamics/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-connect-7dd3fc?style=for-the-badge&labelColor=0a2f52&logo=linkedin&logoColor=bfe4ff)](https://www.linkedin.com/in/danielsepulvedaestay)

## Rigour you can actually use

Most supply chain analysis is either rigorous and locked in code and journals, or easy to read and impossible to check. These tools aim at the corner in between: models validated against independent references, built so a decision can be explored rather than read off a slide.

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/doors/positioning-dark.svg">
  <img src="assets/doors/positioning-light.svg" width="100%" alt="A two-by-two of validated rigour against ease of exploring: academic models, spreadsheets, dashboards and decks, and validated decision labs, where these tools sit">
</picture>

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/doors/how-i-work-dark.svg">
  <img src="assets/doors/how-i-work-light.svg" width="100%" alt="From a messy question to a model, a validated tool and an explored decision. A typical handover is one slide and one scenario; here it is a sandbox the client can rerun next quarter">
</picture>

## Three ways in

Pick the question closest to yours. Each starts with a tool you can open on a phone in two minutes, then one you can load with your own assumptions.

### 1. How long can your network survive a closure, and what does recovering faster cost?

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/doors/door-survive-dark.svg">
  <img src="assets/doors/door-survive-light.svg" width="100%" alt="Atlas run: daily service level during a 60-day Red Sea closure. With nothing held, service falls to 67% and the event costs $82.0M; with the optimised lever set it stays above 79% and costs $23.3M">
</picture>

On the Atlas sample network, closing the Red Sea for 60 days costs **$82.0M** with nothing held. The lever set the optimiser recommends costs **$18.9M a year**, cuts this event to **$23.3M**, and cuts expected annual loss from **$50.4M to $15.1M**. It does that with contracts, standby capacity and air, not stock, so the first shortfall comes five days *sooner*.

**Try it:** [Global Disruption Atlas](https://kathuman.github.io/estay-dynamics/atlas/) · pick a historical closure and compare time-to-survive with time-to-recover.<br>
**Test your own network:** [Network Stress Test](https://kathuman.github.io/claude-projects/network-stress-test/web/) · load nodes and lanes, run the N-1 scan and find the single point of failure.<br>
**Leads to:** a resilience diagnostic on your own network, with each lever priced.

### 2. What is it worth to stage, wait or lease instead of committing on one forecast?

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/doors/door-flexibility-dark.svg">
  <img src="assets/doors/door-flexibility-light.svg" width="100%" alt="Real Options run: NPV over 20,000 demand paths. Committing the full footprint now has a mean of $21.2M and a 23.7% chance of a loss; building smaller and expanding in steps has a mean of $26.5M and a 4.1% chance of a loss">
</picture>

In the default case, building smaller and expanding in steps is worth **$5.3M more** than committing the full footprint now, and cuts the chance of losing money from **24% to 4%**. Over 20,000 simulated demand paths, the means match the lattice valuation within $0.3M.

**Try it:** [Real Options for Network Design](https://kathuman.github.io/claude-projects/real-options/) · five strategies against the best fixed design, with the demand levels that trigger the next step.<br>
**Test your own case:** [Tierwise](https://kathuman.github.io/claude-projects/tierwise/) · load a multi-tier chain from CSV or Excel and see which site runs out of capacity first, and when.<br>
**Leads to:** an option valuation of one capacity decision you have on the table.

### 3. Why does a commercial move this quarter cost money a year later?

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/doors/door-clocks-dark.svg">
  <img src="assets/doors/door-clocks-light.svg" width="100%" alt="Clockspeed run: when competitors promise faster delivery, matching at once loses 62k against standing still; preparing the supply chain a year earlier and then matching gains 161k, of which 159k comes from moving the two clocks together">
</picture>

When competitors promise faster delivery, matching them at once **loses money** against standing still. Preparing the supply chain a year earlier and then matching **gains 161k**: preparing alone is worth 65k, and 159k comes from moving the two clocks in step.

**Try it:** [Lag Lab](https://kathuman.github.io/claude-projects/lag-lab/) · after a demand step, how much of the overshoot is really forecast error?<br>
**Test your own policy:** [Supply Pulse](https://kathuman.github.io/supply-pulse/) · overtime, faster quality release or a new planning policy, each against a fair baseline.<br>
**Then fly it:** [Clockspeed Balancing](https://kathuman.github.io/claude-projects/clockspeed/) · 20 years of commercial, supply chain and network decisions, and a debrief of which clock made or cost the money.<br>
**Leads to:** a workshop where your team flies its own strategy and sees its own debrief.

<sub>Every figure above is a run of the tool's own engine on its built-in example: the Atlas sample company is fictional (real ports and lanes), the Real Options case is its default, and Clockspeed is in model units. The methods transfer; the numbers are yours to replace.</sub>

## Checked before it is used

[![Atlas tests](https://github.com/kathuman/estay-dynamics/actions/workflows/atlas-ci.yml/badge.svg)](https://github.com/kathuman/estay-dynamics/actions/workflows/atlas-ci.yml) [![Network Stress Test tests](https://github.com/kathuman/claude-projects/actions/workflows/network-stress-test-ci.yml/badge.svg)](https://github.com/kathuman/claude-projects/actions/workflows/network-stress-test-ci.yml) [![Real Options tests](https://github.com/kathuman/claude-projects/actions/workflows/real-options-ci.yml/badge.svg)](https://github.com/kathuman/claude-projects/actions/workflows/real-options-ci.yml) [![Tierwise tests](https://github.com/kathuman/claude-projects/actions/workflows/tierwise-ci.yml/badge.svg)](https://github.com/kathuman/claude-projects/actions/workflows/tierwise-ci.yml) [![Supply Pulse tests](https://github.com/kathuman/supply-pulse/actions/workflows/ci.yml/badge.svg)](https://github.com/kathuman/supply-pulse/actions/workflows/ci.yml) [![Lag Lab tests](https://github.com/kathuman/claude-projects/actions/workflows/lag-lab-ci.yml/badge.svg)](https://github.com/kathuman/claude-projects/actions/workflows/lag-lab-ci.yml) [![Clockspeed tests](https://github.com/kathuman/claude-projects/actions/workflows/clockspeed-ci.yml/badge.svg)](https://github.com/kathuman/claude-projects/actions/workflows/clockspeed-ci.yml)

Each model is tested against something independent of itself: the flow solver against optimality certificates and a second max-flow algorithm, the option lattice against Black–Scholes, delays against their exact solutions, the Atlas against the PortWatch record. The suites run on every change.

**Also in the lab:** [Robot Configurator](https://kathuman.github.io/claude-projects/robot-configurator/), [AI Expectations Gap Map](https://kathuman.github.io/claude-projects/ai-expectations-gap-map/), [Warehouse Model](https://kathuman.github.io/claude-projects/warehouse-model/web/), [Tube Flow](https://kathuman.github.io/claude-projects/tube-flow-sim/), [Cobot Lab](https://kathuman.github.io/claude-projects/cobot-lab/) and more on the [projects site](https://kathuman.github.io/claude-projects/).

---

PhD, Technical University of Denmark · MSc, MIT · Council member, System Dynamics Society · Published in the *Journal of Simulation*, the NATO Science Series and *Computers & Security* · Past sector experience in mining, beverage distribution, healthcare and pharmaceutical manufacturing · Copenhagen

Questions, bugs or ideas about a tool are welcome as [issues](https://github.com/kathuman/claude-projects/issues).

<sub>[Technical depth](https://kathuman.github.io/estay-dynamics/technical-depth.html): validation and test suites, research, the full tool portfolio and the lab.</sub>
