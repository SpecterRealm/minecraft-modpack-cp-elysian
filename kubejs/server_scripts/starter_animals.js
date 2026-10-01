// CP Elysian — starter animals
//
// A void start has no animals, and the class armor and gear need leather, wool and
// rabbit hide (string still has no source). Farming for Blockheads (nests and
// troughs) was removed from all packs, so the first animals come from a recipe:
// an Inferium Essence (the Mystical Agriculture starter) plus the animal's food
// makes its spawn egg. After the first pair the player breeds normally.
//
// Costs are a first guess, not played. They are meant to be a small early milestone,
// not free: the essence count is the lever (2 for a chicken, 4 for the rest).
// To tune, change the counts below.

ServerEvents.recipes((event) => {
  const essence = 'mysticalagriculture:inferium_essence';

  event.shapeless('minecraft:chicken_spawn_egg', [essence, essence, 'minecraft:wheat_seeds']);
  event.shapeless('minecraft:cow_spawn_egg', [essence, essence, essence, essence, 'minecraft:wheat']);
  event.shapeless('minecraft:sheep_spawn_egg', [essence, essence, essence, essence, 'minecraft:wheat']);
  event.shapeless('minecraft:pig_spawn_egg', [essence, essence, essence, essence, 'minecraft:carrot']);
  event.shapeless('minecraft:rabbit_spawn_egg', [essence, essence, essence, essence, 'minecraft:carrot']);

  console.log('[CPE] Starter animal recipes registered.');
});
