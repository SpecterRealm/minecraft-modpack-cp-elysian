# Colony Protocol: Elysian

Void / skyblock **magic** training — learn to shape what you cannot craft. Magic obtains materials; there is no ore-sieve loop here.

**Loader:** NeoForge **1.21.1** (packwiz)  
**Series order:** Pack **2** of Colony Protocol — Verdant → **Elysian** → Influx → Liminal (recommended, not required)  
**Status:** Scaffold / coming soon — shared QoL soft-pinned; pillar mods stay soft until smoke-tested.

**CurseForge:** [colony-protocol-elysian](https://www.curseforge.com/minecraft/modpacks/colony-protocol-elysian) (id `1715473`) — public preview / Coming Soon (no zip yet)  
*(Separate CF project from Verdant; not crammed onto the Verdant page.)*

## What this is

You start in a **void / skyblock** shell. Spells, essence crops, and spirit labor are how you bootstrap and scale — not mining veins or sieving dirt. Design line: *Learn to shape what you cannot craft.*

**Soft leans (not jar locks yet):** Ars-style spell literacy → Mystical Agriculture–style bulk mats → magic labor / auto-craft. **Botania is not a pillar.** Quests teach and reward; they never hard-gate the pack.

## Install tip (players)

1. Install [Prism Launcher](https://prismlauncher.org/) (or the CurseForge app).
2. Add an instance from this pack’s CurseForge page / downloaded zip when published.
3. Allocate ~6–8 GB RAM (more with shaders).
4. Launch with the NeoForge profile the pack ships.

## Prism smoke (one terminal)

**One manual step Make cannot do:** create an empty Prism instance named **`CP-Elysian-Dev`** with Minecraft **1.21.1** + NeoForge matching `pack.toml`. Close Prism before step 2.

```bash
cd /Users/michaelheaton/Projects/specterrealm/esport/minecraft-modpack-cp-elysian
make setup-dev          # RAM, window, installer jars, packwiz PreLaunch
make serve-bg           # primary — backgrounds packwiz on :8080
# Launch CP-Elysian-Dev in Prism
make serve-stop         # when done (aliases: make down / make stop)
```

Optional after pack removals (packwiz does not delete leftovers): `make prune-instance-orphans` and/or `make prune-dev-mods`.

See [docs/workflow.md](docs/workflow.md).

## Series siblings

| Pack | Role | CF |
|------|------|-----|
| [Verdant](https://github.com/MichaelHeaton/minecraft-modpack-cp-verdant) | Pack 1 — overworld, no ore veins, sieve loop | [colony-protocol-verdant](https://www.curseforge.com/minecraft/modpacks/colony-protocol-verdant) |
| **Elysian** (this repo) | Pack 2 — void magic | [colony-protocol-elysian](https://www.curseforge.com/minecraft/modpacks/colony-protocol-elysian) (preview) |
| [Influx](https://github.com/SpecterRealm/minecraft-modpack-cp-influx) | Pack 3 — ship lab / genetics | [colony-protocol-influx](https://www.curseforge.com/minecraft/modpacks/colony-protocol-influx) (preview) |
| [Liminal](https://github.com/SpecterRealm/minecraft-modpack-cp-liminal) | Pack 4 — planetfall reunite | [colony-protocol-liminal](https://www.curseforge.com/minecraft/modpacks/colony-protocol-liminal) (preview) |

Shared library: [SpecterRealm Core](https://github.com/SpecterRealm/specterrealm-core) · CF [SpecterRealm Core](https://www.curseforge.com/minecraft/mc-mods/specterrealm-core)

## What's ready vs stubbed

| Area | Status |
|------|--------|
| packwiz + Makefile + CI | Ready |
| Shared stack (`mods/*.pw.toml`) | Soft-pinned — smoke-test pending |
| `config/ftbquests/` | Early/Mid spine + Late stubs |
| KubeJS | Skeleton + TODOs |
| Pack pillar mods | Soft candidates — not locked as shipping features |
| FancyMenu / Field Manual content | Mod pinned; assets TBD |

## Design pointers

Project store: `docs/elysian-core-mods.md` · `pack-progression-arcs.md` §E · `elysian-gem-bootstrap-options.md` (KubeJS gem crafts TBD).

Tooling reference: [Verdant pack-template](https://github.com/MichaelHeaton/minecraft-modpack-cp-verdant/blob/main/docs/pack-template.md).
