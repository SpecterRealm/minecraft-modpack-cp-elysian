# Changelog

## [Unreleased]

### Mod stack

- **Removed:** Wooden Shears, Mystical Automation, Apothic Spawners, Ars Elemancy, Ars Controle, Not Enough Glyphs. Mystical Automation needs FE and Elysian has no power system (automation comes from Botany Pots, Occultism spirits and Theurgy); the rest each added a handful of items or overlapped spell and staff mods already in the pack. Wizards (Spell Engine) stays planned for this pack, with Ars for utility and Source, Iron's for combat spells, and Spell Engine for the class kit. Decisions from Liminal `docs/series/items/elysian-review.md`; nothing else depended on them (no quest, KubeJS or config references).
- **Changed:** Essential Mod is now client-only (`side = "client"`), so servers do not install it while players' clients still get it from the pack (friends list, cosmetics, world hosting).
- **Added:** Productive Metalworks (foundry multiblock: melt, alloy, cast) and Silent Gear Metalworks (its bridge; metal gear parts become cast-only). Both go in all four packs (Liminal #42). **Quests and Field Manual text for blueprint/gear crafting still need updating and the early game needs a playtest**; see the ticket for this pack.
- **Removed:** Charging Gadgets, Energy Meter, Mob Grinding Utils — tech-aesthetic mods that do not fit a magic pack (nothing depended on them). **Translocators stays**: non-powered, no-pipe item transfer that suits a magic pack. Removed the MGU bucket from the filled-buckets tag.

### Docs

- Story doc added (`docs/story.md`); Elysian teaches how to use the Veil, not what it is.
- Series content now links to Liminal (`docs/series/`, the source of truth) instead of being copied; removed pointers to design docs that live outside the repos.
- Quest welcome text now says "Module 2 · CP Elysian — Cohort CP-Verdant-S1"; contingency reframed as being met (Liminal-first design).

## [0.1.0]

- Initial packwiz scaffold (NeoForge 1.21.1)
- Soft-pin shared QoL / quest / storage / EMI stack from Verdant pins
- Empty FTB Quests tree + KubeJS skeleton (content TBD)
