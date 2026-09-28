// Colony Protocol: Elysian — ensure FTB Quests book on join.
// FTB Quests 2101.x does not auto-give ftbquests:book; craft needs book + #c:stones
// (weak on void/skyblock day one). Re-gift if missing so new worlds always start with it.

PlayerEvents.loggedIn((event) => {
  const player = event.player;
  const hasBook = player.inventory.find((item) => item.id === 'ftbquests:book');
  if (!hasBook) {
    player.give('ftbquests:book');
  }

  player.tell(Text.of(''));
  player.tell(Text.lightPurple('[ COLONY PROTOCOL: ELYSIAN ]'));
  player.tell(Text.of('Void training ground online. Magic obtains what stone cannot.'));
  player.tell(Text.of(''));
  player.tell(Text.aqua('Getting started:'));
  player.tell(
    Text.of('  Press §eB§r (or open the §eQuest Book§r in your inventory) for the quest journal.')
  );
  player.tell(Text.of('  Start with §eWelcome§r — Field Manual unlocks at the chapter gate.'));
  player.tell(Text.of(''));
});
