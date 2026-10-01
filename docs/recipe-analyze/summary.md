# Recipe analyze summary

Generated: `2026-10-01T16:31:37.205173+00:00`

Regenerate after mod list / KubeJS changes: `make recipe-audit`.

## Recipe dump

- Source: `docs/recipe_data.json`
- Dump generated: `2026-10-01T16:31:36.629317+00:00`
- Items: **4971**
- Mods with result items: **57**

### Namespaces with no installed jar

30 namespaces appear in the dump only because an installed mod ships
compat recipes for them. They are not in the pack; do not count them as mods.

| Namespace | Items |
|-----------|------:|
| `allthemodium` | 23 |
| `alltheores` | 127 |
| `apotheosis` | 32 |
| `apothic_enchanting` | 39 |
| `ars_elemental` | 98 |
| `create` | 14 |
| `create_ironworks` | 12 |
| `everythingcopper` | 2 |
| `ftbmaterials` | 123 |
| `gateways` | 1 |
| `immersiveengineering` | 24 |
| `integrateddynamics` | 6 |
| `irons_jewelry` | 2 |
| `irons_spellbooks` | 160 |
| `magistuarmory` | 3 |
| `mekanism` | 24 |
| `modern_industrialization` | 58 |
| `modonomicon` | 1 |
| `more_tier_upgrade` | 14 |
| `mysticalagradditions` | 10 |
| `occultism` | 278 |
| `pneumaticcraft` | 1 |
| `productivebees` | 4 |
| `productivelib` | 2 |
| `productivemetalworks` | 158 |
| `sauce` | 1 |
| `sgearmetalworks` | 65 |
| `silentgems` | 42 |
| `simplemagnets` | 4 |
| `theurgy` | 358 |

### Per-mod counts (top by items)

| Mod | Items | Jar recipes on results | Seed-like ids |
|-----|------:|-----------------------:|--------------:|
| `minecraft` | 952 | 1654 | 3 |
| `botanypotstiers` | 552 | 1467 | 0 |
| `mysticalagriculture` | 387 | 527 | 136 |
| `ars_nouveau` | 370 | 501 | 0 |
| `theurgy` | 358 | 1485 | 0 |
| `silentgear` | 279 | 572 | 1 |
| `occultism` | 278 | 380 | 0 |
| `botanypots` | 183 | 244 | 0 |
| `irons_spellbooks` | 160 | 195 | 0 |
| `productivemetalworks` | 158 | 557 | 0 |
| `farmersdelight` | 150 | 180 | 2 |
| `alltheores` | 127 | 127 | 0 |
| `sophisticatedstorage` | 124 | 278 | 0 |
| `ftbmaterials` | 123 | 123 | 0 |
| `ars_elemental` | 98 | 100 | 0 |
| `sgearmetalworks` | 65 | 181 | 0 |
| `ars_additions` | 58 | 66 | 0 |
| `modern_industrialization` | 58 | 58 | 0 |
| `sophisticatedbackpacks` | 57 | 92 | 0 |
| `silentgems` | 42 | 42 | 0 |
| `apothic_enchanting` | 39 | 39 | 0 |
| `ars_zero` | 38 | 38 | 0 |
| `comforts` | 33 | 66 | 0 |
| `apotheosis` | 32 | 34 | 0 |
| `toughasnails` | 31 | 31 | 0 |
| `bhc` | 29 | 36 | 0 |
| `immersiveengineering` | 24 | 24 | 0 |
| `mekanism` | 24 | 24 | 0 |
| `allthemodium` | 23 | 50 | 0 |
| `create` | 14 | 14 | 0 |
| `more_tier_upgrade` | 14 | 28 | 0 |
| `create_ironworks` | 12 | 12 | 0 |
| `ars_caelum` | 11 | 11 | 0 |
| `mysticalagradditions` | 10 | 16 | 0 |
| `wands` | 9 | 10 | 0 |
| `ftbquests` | 7 | 7 | 0 |
| `integrateddynamics` | 6 | 12 | 0 |
| `cb_microblock` | 4 | 4 | 0 |
| `productivebees` | 4 | 30 | 0 |
| `simplemagnets` | 4 | 4 | 0 |
| … | (17 more mods in `by-mod/`) | | |

### Farming / resource-crop namespaces

| Namespace | Items | Seed-like |
|-----------|------:|----------:|
| `mysticalagriculture` | 387 | 136 |
| `agricraft` | 0 | 0 |
| `productivefarming` | 0 | 0 |
| `productivetrees` | 0 | 0 |
| `botanypots` | 183 | 0 |

Seed-like lists: `mysticalagriculture-seeds.txt`, `agricraft-seeds.txt`, …
Full per-mod item lists: `by-mod/<mod>.txt`.

## AgriCraft plant datapacks

- Plants found: **0**
- Mods dir: `~/Library/Application Support/PrismLauncher/instances/CP-Elysian-Dev/minecraft/mods`

No plant JSONs found. Install Prism mods (or set `RECIPE_WIKI_MODS_DIR`)
and re-run `make recipe-analyze`.
