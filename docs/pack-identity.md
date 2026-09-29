# Colony Protocol: Elysian — identity

**Theme (LOCKED):** Void / skyblock magic teaching — learn to shape what you cannot craft (magic obtains everything).

**Loader:** Minecraft 1.21.1 · NeoForge 21.1.228 (series-wide; match `pack.toml`).

**Series context:** Elysian is pack 2. Story, pack roles, and mod ownership are in Liminal's [`docs/series/`](https://github.com/SpecterRealm/minecraft-modpack-cp-liminal/blob/main/docs/series/README.md) — this file covers only what Elysian owns.

## What Elysian owns

- **World:** a void / skyblock shell.
- **Loop:** magic obtains materials. Spells, essence crops, and spirit labor bootstrap and scale the base. **No sieve loop, no mining veins.**
- **Soft leans (not jar locks yet):** Ars Nouveau-style spell literacy → Mystical Agriculture-style bulk materials → magical labor / auto-craft (Occultism, Theurgy); Iron's Spells 'n Spellbooks for combat; Apotheosis and Gateways to Eternity for gear and challenge. The `mods/` folder is authoritative; do not hard-code counts in prose.
- **Botania is not a pillar.**
- **Fiction:** teaches how to *use* the Veil, not what it is — see [`story.md`](story.md) and the [Liminal story](https://github.com/SpecterRealm/minecraft-modpack-cp-liminal/blob/main/docs/series/story.md).
- **Quest chapters:** Welcome, Void Camp, First Source, Grow the Garden, Spirit Labor, Dense Magic, Iron's Combat, Side Quests.

## What Elysian does *not* own

- Sieving, Create, Mekanism, AE2 — Verdant's pillars. Not taught here.
- **Cobblegen Galore** — tech stone generators; Magic obtain covers stone here.
- **Tech-aesthetic mods** — removed: **Charging Gadgets**, **Energy Meter**, **Translocators** (out of Elysian for now — Ars Nouveau's Starbuncles and Ender Storage cover magical item transfer; it lives in Liminal as non-powered transfer), **Mob Grinding Utils**, plus **Building Gadgets 2**. None of them fit a magic-obtains-everything pack and nothing in the pack depended on them.
- **Building Gadgets 2** — removed (tech gadget aesthetic). **Building Wands** is kept (wand / magic-bag build assist). If gaps appear in playtest, candidate add: [Construction Wands Revived](https://modrinth.com/mod/construction-wands-revived) (NeoForge 1.21.1).
- Cross-pack bridges — Liminal.

## Not yet done

- Welcome through Spirit Labor have content; Dense Magic, Iron's Combat, and Side Quests are stubs.
- Pillar mods stay soft until smoke-tested.
- Gem bootstrap KubeJS crafts (early-game gem source) — design first, then implement.
- FancyMenu Bridge chrome — title, drippy, level-loading, and pause backgrounds ship under `config/fancymenu/`; buttons / CALIBRATE TBD.

## How to add mods

```bash
packwiz curseforge add <slug>   # or packwiz modrinth add …
make refresh
```

Pin soft / candidate jars only after 1.21.1 confirm + smoke-test. Prefer documenting TODOs over guessing pins.

## Recipe viewer defaults

Shipped EMI/JEI configs match the series pattern (`index-source = registered`, EMI++ stack groups on, JEI `maxColumns = 12`). Stack groups live in `kubejs/assets/cpelysian/stack_groups/` — Sophisticated Storage barrels/chests/limited barrels (wood variants collapse), backpacks, Silent Gear tools, Comforts, armor slots, filled buckets. Prism check: open the EMI index — barrel tiers should be **one slot per tier**, not pages of wood variants.
