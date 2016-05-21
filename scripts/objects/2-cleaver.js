exports.listeners = {
  wield: function (l10n) {
    return function (location, player, players) {
      player.say('You ready the weighty cleaver.');
      player.equip(location, this);
    }
  },
  remove: function (l10n) {
    return function (player) {
      player.say('You place the cleaver in your pack -- handle up.');
    }
  },
};