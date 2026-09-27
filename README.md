# Colony Protocol: Elysian

Void / skyblock **magic** training — learn to shape what you cannot craft. Magic obtains materials; there is no ore-sieve loop here.

**Loader:** NeoForge **1.21.1** (packwiz)  
**Series order:** Pack **2** of Colony Protocol — Verdant → **Elysian** → Influx → Liminal (recommended, not required)  
**Status:** Scaffold / coming soon — shared QoL soft-pinned; pillar mods stay soft until smoke-tested.

**CurseForge:** _Coming soon — project URL TBD_  
*(Separate CF project from Verdant; not crammed onto the Verdant page.)*

## What this is

You start in a **void / skyblock** shell. Spells, essence crops, and spirit labor are how you bootstrap and scale — not mining veins or sieving dirt. Design line: *Learn to shape what you cannot craft.*

**Soft leans (not jar locks yet):** Ars-style spell literacy → Mystical Agriculture–style bulk mats → magic labor / auto-craft. **Botania is not a pillar.** Quests teach and reward; they never hard-gate the pack.

## Install tip (players)

1. Install [Prism Launcher](https://prismlauncher.org/) (or the CurseForge app).
2. Add an instance from this pack’s CurseForge page / downloaded zip when published.
3. Allocate ~6–8 GB RAM (more with shaders).
4. Launch with the NeoForge profile the pack ships.

## Dev quick start (Prism)

1. Create Prism instance `CP-Elysian-Dev` → Minecraft **1.21.1** + NeoForge matching `pack.toml`.
2. `make serve` from this repo (or `packwiz serve`).
3. Instance pre-launch:

   ```text
   "$INST_JAVA" -jar "$INST_MC_DIR/packwiz-installer-bootstrap.jar" --bootstrap-no-update http://localhost:8080/pack.toml
   ```

4. `make setup-dev` once (Prism closed), then launch.

See [docs/workflow.md](docs/workflow.md).

## Series siblings

| Pack | Role | Repo |
|------|------|------|
| [Verdant](https://github.com/MichaelHeaton/minecraft-modpack-cp-verdant) | Pack 1 — overworld, no ore veins, sieve loop | Live CF: [colony-protocol-verdant](https://www.curseforge.com/minecraft/modpacks/colony-protocol-verdant) |
| **Elysian** (this repo) | Pack 2 — void magic | — |
| [Influx](https://github.com/SpecterRealm/minecraft-modpack-cp-influx) | Pack 3 — ship lab / genetics | — |
| [Liminal](https://github.com/SpecterRealm/minecraft-modpack-cp-liminal) | Pack 4 — planetfall reunite | — |

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
