var unit_counts = require('unit_counts');
var utils = require('ai_utils');

module.exports = {
    run: function() { aiTick() }
};

function aiTick() {
    var upgrList = unit_counts.list('upgrader');

    for (var creep of upgrList) {
        var curCarried = _.sum(creep.carry);

        //Check if switching between mining and upgrading this tick
        if(creep.memory.upgrading && creep.carry.energy == 0) {
            creep.memory.upgrading = false;
            creep.say('harvesting');
        }
        if(!creep.memory.upgrading && creep.carry.energy == creep.carryCapacity) {
            creep.memory.upgrading = true;
            creep.say('upgrading');
        }

        //Mine until full, store energy in room controller
        if (creep.memory.upgrading) {
            utils.upgradeRoom(creep);
        } else {
            utils.mineEnergy(creep);
        }
    }
}
