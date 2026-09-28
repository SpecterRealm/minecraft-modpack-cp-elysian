# Colony Protocol: Elysian — Quest reward tables (scaffold)

**Spine:** Ars void bootstrap → MA grow + Occultism labor → Iron's / dense magic (stubs)

**Locks applied:** teach + QoL rewards · never sole progression path · Field Manual topic advancements · flexible progression · learning ladder.

| Chapter | Quest | QoL reward | Field Manual advancement | Notes |
|---------|-------|------------|--------------------------|-------|
| Welcome | Field Manual | patchouli Field Manual | `specterrealm:field_manual/orientation` | Book grant + topic unlock; not sole book path (KubeJS recovery craft later) |
| Void Camp | First Stash | 1× Sophisticated chest | `specterrealm:field_manual/elysian/early_stash` |  |
| Void Camp | Silent Gear Tools | 1× repair kit | `specterrealm:field_manual/elysian/silent_gear` |  |
| First Source | Novice Spell Book | 2× source gem | `specterrealm:field_manual/elysian/ars_basics` |  |
| First Source | Hold Source | 4× magebloom fiber | `specterrealm:field_manual/elysian/source_loop` |  |
| First Source | Source Fluent | xp level | `specterrealm:field_manual/elysian/void_bootstrap` |  |
| Grow the Garden | Infusion Altar | 4× inferium essence | `specterrealm:field_manual/elysian/ma_grow` |  |
| Grow the Garden | Essence Momentum | 8× mystical fertilizer | `specterrealm:field_manual/elysian/essence_math` |  |
| Spirit Labor | Dictionary of Spirits | 4× gold | `specterrealm:field_manual/elysian/spirit_labor` |  |
| Dense Magic | Dense Gardens (stub) | xp | `specterrealm:field_manual/elysian/dense_scale` | Late stub |
| Iron's Combat | Wizard Robes (stub) | xp | `specterrealm:field_manual/elysian/irons_combat` | Late stub |
| Side Quests | Optional Paths (stub) | xp | `specterrealm:field_manual/elysian/side_niches` | Late stub |

## Placeholder Manual topic IDs

- `specterrealm:field_manual/orientation`
- `specterrealm:field_manual/elysian/early_stash`
- `specterrealm:field_manual/elysian/silent_gear`
- `specterrealm:field_manual/elysian/ars_basics`
- `specterrealm:field_manual/elysian/source_loop`
- `specterrealm:field_manual/elysian/void_bootstrap`
- `specterrealm:field_manual/elysian/ma_grow`
- `specterrealm:field_manual/elysian/essence_math`
- `specterrealm:field_manual/elysian/spirit_labor`
- `specterrealm:field_manual/elysian/mid_labor`
- `specterrealm:field_manual/elysian/dense_scale`
- `specterrealm:field_manual/elysian/irons_combat`
- `specterrealm:field_manual/elysian/side_niches`

Advancement JSON + Patchouli entries land in `specterrealm-core` later (see series `field-manual-architecture.md`). Scaffold grants IDs now so quest wiring is ready.

## Starter quest book

FTB Quests does **not** auto-give `ftbquests:book` on NeoForge 1.21.1 (2101.x). Elysian ships `kubejs/server_scripts/quest_book_login.js` to grant the book if missing, plus `options.txt` binding **B** to the quest journal (Verdant pattern).
