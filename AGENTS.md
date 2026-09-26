# Colony Protocol: Elysian — Agent Instructions

Void / skyblock magic teaching — learn to shape what you cannot craft (magic obtains everything).

**Loader:** NeoForge 1.21.1 (match Verdant). **Not** a copy of Verdant quests or world model.

## Canonical paths

| Purpose | Path |
|---------|------|
| Pack repo | repo root |
| Prism | `~/Library/Application Support/PrismLauncher/instances/CP-Elysian-Dev/minecraft/` |
| Quests | `config/ftbquests/` (**quest worker owns SNBT** — scaffolding PRs leave empty) |
| KubeJS | `kubejs/` |
| Mods | `mods/*.pw.toml` |

## Dev loop

1. Edit → `make refresh` → `make serve` → Prism pre-launch pulls `http://localhost:8080/pack.toml`
2. `make help` for exports / config pull
3. Do **not** invent final pillar modlists — soft pins + TODOs only
4. Quests teach; rewards = QoL + Field Manual pages — **never** progression gates

## Design pointers

Project store: docs/elysian-core-mods.md · pack-progression-arcs.md §E · elysian-gem-bootstrap-options.md (KubeJS gem crafts TBD — not in this scaffold).

## GitHub

- Repo: `specterrealm/minecraft-modpack-cp-elysian`
- Do not close code issues until PR merged to `main`
- Do not bump `pack.toml` version in feature PRs (CI blocks)

## What not to copy from Verdant

- Verdant quest chapters / lore SNBT
- Verdant-only pillars (Ex Deorum, Create, Mekanism as V teaching path)
- `pack-content/cpverdant` / `cpverdant:` namespaces — use SpecterRealm Core
