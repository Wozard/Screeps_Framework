var unit_counts = require('unit_counts');
var utils = require('ai_utils');

module.exports = {
    run: function() { aiTick() }
};

function aiTick() {
  upgrList = unit_counts.list('upgrader');

  for (var upgrCreep of upgrList) {
    var curCarried = _.sum(upgrCreep.carry);

    //Mine until full, store energy in room controller
    if (curCarried < upgrCreep.carryCapacity) {
        utils.mineEnergy(upgrCreep);
    } else {
        utils.upgradeRoom(upgrCreep);
    }
  }
}
