# Colony Protocol: Elysian — identity

**Theme (LOCKED):** Void / skyblock magic teaching — learn to shape what you cannot craft (magic obtains everything).

**Loader:** Minecraft 1.21.1 · NeoForge 21.1.228 (match Verdant).

**Shared stack (soft-pinned from Verdant):** FTB Quests + KubeJS + SpecterRealm Core + Patchouli + Sophisticated Storage (series early stash) + EMI/Jade/IPN lean + Silent Gear (tools soft lean) + client perf. See `mods/*.pw.toml` and series `shared-mod-stack.md`.

## Not in this scaffold

- Full quest chapters (empty `config/ftbquests/` — quest worker owns SNBT)
- Pack pillar mods (Ars / PE / AgriCraft / etc.) — candidates until smoke-test; do not invent final modlists
- Recovery Bay / gem bootstrap KubeJS — design first, then implement
- Full FancyMenu Bridge chrome (buttons / CALIBRATE) — title, drippy, level-loading, and pause backgrounds ship under `config/fancymenu/`

## Design pointers

Project store: docs/elysian-core-mods.md · pack-progression-arcs.md §E · elysian-gem-bootstrap-options.md (KubeJS gem crafts TBD — not in this scaffold).

## How to add mods

```bash
packwiz curseforge add <slug>   # or packwiz modrinth add …
make refresh
```

Pin Soft / candidate jars only after 1.21.1 confirm + smoke-test. Prefer documenting TODOs over guessing pins.

## Recipe viewer defaults

Shipped EMI/JEI configs match Verdant patterns (`index-source = registered`, EMI++ stack groups) with JEI `maxColumns = 12` to target ≤17 item-list pages. Re-smoke page count after merge.
