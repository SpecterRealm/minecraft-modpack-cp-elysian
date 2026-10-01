# server_scripts

| Script | Role |
|--------|------|
| `quest_book_login.js` | Give `ftbquests:book` if missing on join + short login tip |
| `starter_animals.js` | Spawn eggs for chicken, cow, sheep, pig and rabbit from Inferium Essence plus the animal's food (void start has no animals; Farming for Blockheads was removed) |

## Recipe viewer (EMI++)

Stack groups live under `kubejs/assets/cpelysian/stack_groups/` (ported from Verdant for pinned mods only: Sophisticated Storage barrels/chests, backpacks, Silent Gear tools, Comforts, armor slots, vanilla filled buckets). Enable via `config/emixx/emixx-client.toml` → `enableStackGroups = true`.

Further pack-specific gates/recipes after pillar smoke. See design: [Liminal `docs/series/pack-architecture.md`](https://github.com/SpecterRealm/minecraft-modpack-cp-liminal/blob/main/docs/series/pack-architecture.md); pack scope in `docs/pack-identity.md`.
