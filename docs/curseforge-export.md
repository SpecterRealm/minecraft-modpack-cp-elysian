# CurseForge export — Colony Protocol: Elysian

**CF project:** [colony-protocol-elysian](https://www.curseforge.com/minecraft/modpacks/colony-protocol-elysian) · Authors / project id **`1715473`**  
Set GitHub repo variable `CURSEFORGE_PROJECT_ID=1715473` when upload automation is wired (Verdant `curseforge-upload.md` pattern).

**Default:** `make export-cf` → `dist/Colony-Protocol-Elysian-<version>-curseforge.zip`

## Rules (match Verdant)

| Rule | Why |
|------|-----|
| CF-hosted mods → **`manifest.json` only** | Moderation rejects those JARs in `overrides/mods/` |
| Never add a repo folder named `overrides/` | Produces nested `overrides/overrides/` |
| Pin Sodium/Iris with `--file-id` | Latest alpha breaks Iris pairing |

## NeoForge 1.21.1 pins (from Verdant — already soft-pinned here)

Shared stack includes Sodium + Iris from Verdant `mods/*.pw.toml`. Before first CF upload, re-read Verdant `docs/curseforge-export.md` for current file IDs and `make validate-export`.

**Prefer Verdant `.pw.toml` bytes for shared mods** (provider, filename, `side`, hashes). Do not invent Modrinth pins for mods Verdant already has on CurseForge unless the CF file is API-excluded.

## CurseForge API opt-out (dual-source)

Some CF listings block third-party API downloads (packwiz-installer: *excluded from the CurseForge API*). Match Verdant’s Entity Culling pattern:

1. **`[download].url`** — Modrinth CDN so Prism pre-launch works unattended.
2. **`[update.curseforge]`** — same `project-id` / `file-id` as Verdant so `export-cf` still emits `manifest.json`.

| Slug | Notes |
|------|-------|
| `entityculling` | Byte-identical to Verdant (dual-source) |
| `more-overlays-updated` | Same jar / CF ids as Verdant (`6981252` / `391382`); **dev download = Modrinth** (`Thy5Pqut` / `Kq8xaqKi`). Verdant’s pin is still CF-metadata-only and fails Prism the same way — Elysian applies Verdant’s dual-source *policy* until Verdant is updated. |
| `invtweaks-emu-for-ipn` | Modrinth-only (identical to Verdant) |
| `tough-as-nails-vanilla-pack` | Modrinth-only (identical to Verdant) |

Do **not** use `mode = "metadata:curseforge"` alone for API-excluded file IDs.

## Non-CurseForge JARs

Only approved JARs in `overrides/mods/` (target: SpecterRealm Core). See CurseForge Non-CurseForge mods policy.

## Influx / Liminal (later)

When growing I/L shared QoL, copy Verdant pins byte-for-byte, then apply this dual-source exception for `more-overlays-updated` (and any other API-excluded file Verdant lists in `scripts/check_cf_sourcing.py`).
