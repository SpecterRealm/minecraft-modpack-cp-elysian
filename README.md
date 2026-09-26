# Colony Protocol: Elysian

Void / skyblock magic teaching — learn to shape what you cannot craft (magic obtains everything).

**Loader:** NeoForge **1.21.1** (packwiz). **Status:** template scaffold — shared QoL stack soft-pinned; pillar mods and quests TBD.

## Quick start (Prism)

1. Create Prism instance `CP-Elysian-Dev` → Minecraft **1.21.1** + **NeoForge 21.1.228** (match `pack.toml`).
2. `make serve` from this repo (or `packwiz serve`).
3. Instance pre-launch:

   ```text
   "$INST_JAVA" -jar "$INST_MC_DIR/packwiz-installer-bootstrap.jar" --bootstrap-no-update http://localhost:8080/pack.toml
   ```

4. `make setup-dev` once (Prism closed), then launch the instance.

See [docs/workflow.md](docs/workflow.md).

## What's ready vs stubbed

| Area | Status |
|------|--------|
| packwiz + Makefile + CI | Ready |
| Shared stack (`mods/*.pw.toml`) | Soft-pinned from Verdant — smoke-test pending |
| `config/ftbquests/` | Empty — quest worker owns SNBT |
| KubeJS | Skeleton + TODOs only |
| Pack pillar mods | Not pinned — see design docs |
| FancyMenu chrome / Field Manual content | Mod pinned; assets TBD |

## Design

Project store: docs/elysian-core-mods.md · pack-progression-arcs.md §E · elysian-gem-bootstrap-options.md (KubeJS gem crafts TBD — not in this scaffold).

Tooling reference: [CP Verdant pack-template](https://github.com/michaelheaton/minecraft-modpack-cp-verdant/blob/main/docs/pack-template.md).
