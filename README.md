# Daniel Sepulveda Estay, PhD

**Supply chain resilience and network design — system dynamics, optimisation and simulation, built into tools people can use.**

PhD, Technical University of Denmark (DTU) · MSc, MIT · Council member, System Dynamics Society · Copenhagen

[![Estay Dynamics](https://img.shields.io/badge/Estay_Dynamics-consulting-0b6e99)](https://kathuman.github.io/estay-dynamics/)
[![Projects](https://img.shields.io/badge/Projects-live_tools-c15f3c)](https://kathuman.github.io/claude-projects/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-connect-0a66c2)](https://www.linkedin.com/in/danielsepulvedaestay)

I help organisations understand how disruptions travel through their supply networks and design networks
that absorb them — and I build the models as interactive tools, so decisions can be explored rather than
read off a slide.

## What I work on

- **[System dynamics](https://kathuman.github.io/estay-dynamics/expertise/system-dynamics.html)** — causal loop diagrams, stock-and-flow simulation, group model building
- **[Systemic risk analysis](https://kathuman.github.io/estay-dynamics/expertise/systemic-risk-analysis.html)** — how disruptions propagate through network structure, not just how likely they are
- **[Real options](https://kathuman.github.io/estay-dynamics/expertise/real-options.html)** — the value of deferring, staging or abandoning a network decision under uncertainty
- **[Network design optimisation](https://kathuman.github.io/estay-dynamics/expertise/network-design-optimization.html)** — MILP and stochastic programming, Monte Carlo stress tests for facility, sourcing and capacity decisions

## Flagship tools

<table>
<tr>
<td width="50%" valign="top">
<a href="https://kathuman.github.io/estay-dynamics/atlas/"><img src="assets/disruption-atlas.jpg" alt="Global Disruption Atlas: a 3D globe of a supply network with live chokepoint conditions"></a>
<b><a href="https://kathuman.github.io/estay-dynamics/atlas/">Global Disruption Atlas</a></b> — a disruption decision lab on a 3D globe:
live chokepoint conditions, historical and hypothetical disruptions, and response levers (safety stock,
second sources, air bridges) priced against time-to-survive and time-to-recover. A companion to
<i>Engineering Flexibility in Supply Chain Design</i>.
</td>
<td width="50%" valign="top">
<a href="https://kathuman.github.io/claude-projects/network-stress-test/web/"><img src="assets/network-stress-test.jpg" alt="Network Stress Test: a global production, warehouse and consumer network on a world map"></a>
<b><a href="https://kathuman.github.io/claude-projects/network-stress-test/web/">Network Stress Test</a></b> — a supply-network resilience sandbox:
hundreds of editable nodes, a min-cost-flow solver, N-1 contingency scans, Monte Carlo stress tests and
adversarial worst-case search.
</td>
</tr>
<tr>
<td width="50%" valign="top">
<a href="https://kathuman.github.io/claude-projects/warehouse-model/web/"><img src="assets/warehouse-model.jpg" alt="Warehouse Model: a parametric warehouse in 3D with its key results"></a>
<b><a href="https://kathuman.github.io/claude-projects/warehouse-model/web/">Warehouse Model</a></b> — warehouse design from first principles:
a parametric FreeCAD model and an analytical model share one layout (proved identical on 400 designs),
with simulation, total cost of ownership, an optimiser, and IFC / DXF / glTF export.
</td>
<td width="50%" valign="top">
<a href="https://kathuman.github.io/pharma-sim/"><img src="assets/pharma-sim.jpg" alt="PharmaSim: profit, fill rate, bullwhip and waste, with demand against production"></a>
<b><a href="https://kathuman.github.io/pharma-sim/">PharmaSim</a></b> — a system-dynamics simulator of a pharmaceutical supply chain:
the bullwhip effect, multi-echelon amplification, QA quarantine and expiry, and policy levers with their
trade-offs, measured against a baseline.
</td>
</tr>
<tr>
<td width="50%" valign="top">
<a href="https://kathuman.github.io/claude-projects/tube-flow-sim/"><img src="assets/tube-flow.jpg" alt="Tube Flow: vorticity around a NACA 4412 wing section at 8 degrees"></a>
<b><a href="https://kathuman.github.io/claude-projects/tube-flow-sim/">Tube Flow</a></b> — 3D lattice-Boltzmann CFD on the GPU: spheres, STL
shapes and wing sections, validated against exact solutions and published data, with a grid-convergence
study in its <a href="https://kathuman.github.io/claude-projects/tube-flow-sim/validation.html">validation report</a>.
</td>
<td width="50%" valign="top">
<a href="https://kathuman.github.io/claude-projects/cobot-lab/"><img src="assets/cobot-lab.jpg" alt="Cobot Lab: a UR5e arm with its tool frame, joint sliders and motor loads"></a>
<b><a href="https://kathuman.github.io/claude-projects/cobot-lab/">Cobot Lab</a></b> — Universal Robots arms from their published parameters:
inverse kinematics, timed motion, path planning around obstacles, physics with pick &amp; place, URScript
export and a ROS bridge.
</td>
</tr>
</table>

## Built to be trusted

The models are tested, not just drawn: the CFD solver against Hagen–Poiseuille flow, the Haberman–Sayre
wall-corrected Stokes drag and Johnson &amp; Patel's sphere wakes; the robot kinematics on 1,600+ checks;
the warehouse layout against an independent FreeCAD model. The suites run in CI:

[![Tube Flow tests](https://github.com/kathuman/claude-projects/actions/workflows/tube-flow-ci.yml/badge.svg)](https://github.com/kathuman/claude-projects/actions/workflows/tube-flow-ci.yml)
[![Cobot Lab tests](https://github.com/kathuman/claude-projects/actions/workflows/cobot-lab-ci.yml/badge.svg)](https://github.com/kathuman/claude-projects/actions/workflows/cobot-lab-ci.yml)
[![Warehouse Model tests](https://github.com/kathuman/claude-projects/actions/workflows/warehouse-model-ci.yml/badge.svg)](https://github.com/kathuman/claude-projects/actions/workflows/warehouse-model-ci.yml)

## Research and consulting

- **[Estay Dynamics](https://kathuman.github.io/estay-dynamics/)** — my consulting practice: system dynamics and network optimisation for supply chains ([repo](https://github.com/kathuman/estay-dynamics))
- **[DDRA — dynamic cyber-risk model](https://kathuman.github.io/estay-dynamics/ddra/)** — a five-stock system-dynamics model of the attack–defence loop in a ship's cyber-physical ballast system: detection delay decides containment or failure
- **[Flexibility in Supply Chain](https://kathuman.github.io/Book-Flexibility-in-SC/)** — companion tools for the book ([repo](https://github.com/kathuman/Book-Flexibility-in-SC))
- **[Supply Chain Digital Twin](https://github.com/kathuman/supply-chain-digital-twin)** — capacity under a months-on-hand stock policy and end-to-end lead time across a multi-tier network (Streamlit)
- **[Pharma supply chain ABM](https://github.com/kathuman/pharma-supply-chain-abm)** — an agent-based model of material through a CMO chain (Mesa, Streamlit)
- **[System dynamics models](https://github.com/kathuman/Vensim-Experiments)** — Vensim models in public health, epidemiology and cyber-resilience

## All projects

<!-- PROJECTS:START -->
17 projects, newest first — generated from the [projects site](https://kathuman.github.io/claude-projects/).

| Project | What it is | |
|---|---|---|
| [Plumb](https://kathuman.github.io/claude-projects/balancebot-sim/) | A parametrized 3D simulator for a two-wheeled, single-axis balancing robot. | [code](https://github.com/kathuman/claude-projects/tree/main/balancebot-sim) |
| [Xiangqi](https://kathuman.github.io/claude-projects/xiangqi/) | Xiangqi (Chinese chess) against a friend on one screen, or against the open-source Fairy-Stockfish engine — one of the strongest Xiangqi engines, compiled… | [code](https://github.com/kathuman/claude-projects/tree/main/xiangqi) |
| [Network Stress Test](https://kathuman.github.io/claude-projects/network-stress-test/web/) | A supply-network resilience sandbox: build or generate a production/warehouse/consumer network (hundreds of editable nodes) connected by air/sea/road lanes… | [code](https://github.com/kathuman/claude-projects/tree/main/network-stress-test) |
| [Face Morph](https://kathuman.github.io/claude-projects/face-morph/) | Live face-landmark detection and triangulated face morphing, entirely on-device. | [code](https://github.com/kathuman/claude-projects/tree/main/face-morph) |
| [Warehouse Model](https://kathuman.github.io/claude-projects/warehouse-model/web/) | An interactive engineering reasoning environment for warehouse design — not a CAD viewer. | [code](https://github.com/kathuman/claude-projects/tree/main/warehouse-model) |
| [Tube Flow](https://kathuman.github.io/claude-projects/tube-flow-sim/) | A validated 3D lattice-Boltzmann flow lab on the GPU: spheres, STL shapes and NACA wing sections in a tube, in real fluids and units. | [code](https://github.com/kathuman/claude-projects/tree/main/tube-flow-sim) |
| [Cobot Lab](https://kathuman.github.io/claude-projects/cobot-lab/) | A browser simulator of the Universal Robots e-Series cobots — UR3e, UR5e, UR10e and UR16e, each from its published Denavit–Hartenberg and dynamics… | [code](https://github.com/kathuman/claude-projects/tree/main/cobot-lab) |
| [Network Design Visuals](https://kathuman.github.io/claude-projects/supply-chain-viz/) | A browsable library of 17 supply-chain network-design visualizations, ordered simple → advanced: demand bars, cost-to-serve stacks, O–D flow maps, an… | [code](https://github.com/kathuman/claude-projects/tree/main/supply-chain-viz) |
| [Scientific Calculator](https://kathuman.github.io/claude-projects/scientific-calculator/) | A keyboard-friendly scientific calculator with a real recursive-descent expression parser (no eval), DEG/RAD/GRAD modes, memory, inverse trig via a 2nd key,… | [code](https://github.com/kathuman/claude-projects/tree/main/scientific-calculator) |
| [Chess](https://kathuman.github.io/claude-projects/chess/) | Play chess against a friend on one screen, or against the open-source Stockfish 18 engine (WebAssembly, runs in your browser) at eight strength levels from… | [code](https://github.com/kathuman/claude-projects/tree/main/chess) |
| Problem Log (Android) | A native Android app that turns a spoken or typed problem description into a structured record — title, summary, category, short-term mitigation, long-term… | [code](https://github.com/kathuman/claude-projects/tree/8b96c8b66ac28f037989d78b0b1d251bbae5e5c3/problemlog-android) |
| Othello (Android) | A native Android port of the Othello sub-app below — the same rules engine and negamax AI (four strengths, full endgame solve), rebuilt from JavaScript to… | [code](https://github.com/kathuman/claude-projects/tree/main/othello-android) |
| [Go](https://kathuman.github.io/claude-projects/go/) | Play Go (Baduk / Weiqi) against the computer or a friend on one screen. | [code](https://github.com/kathuman/claude-projects/tree/main/go) |
| [Othello](https://kathuman.github.io/claude-projects/othello/) | Play Othello (Reversi) against the computer or a friend on one screen. | [code](https://github.com/kathuman/claude-projects/tree/main/othello) |
| [Real Options for Network Design](https://kathuman.github.io/claude-projects/real-options/) | An interactive explainer for real options applied to supply chain network design. | [code](https://github.com/kathuman/claude-projects/tree/main/real-options) |
| [Cube Studio](https://kathuman.github.io/claude-projects/rubiks-cube/) | View a Rubik's Cube in 3D (drag to orbit) and as a 2D unfolded schematic, scramble it, then watch a near-optimal Kociemba two-phase solution play out move… | [code](https://github.com/kathuman/claude-projects/tree/main/rubiks-cube) |
| [Snake](https://claude.ai/code/artifact/3a0966c2-17c0-4024-ab90-540b14857d46) | A classic grid-based Snake game built with Python's Tkinter — pause/resume, increasing speed, and a game-over overlay. |  |
<!-- PROJECTS:END -->

---

Open to consulting engagements — [get in touch](https://kathuman.github.io/estay-dynamics/contact.html).
