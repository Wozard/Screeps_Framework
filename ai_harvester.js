var constants = require('constants');

module.exports = {
    run: function() { aiTick() }
};

function aiTick() {
    for (var c in Game.creeps) {
        var creep = Game.creeps[c];
        var curCarried = _.sum(creep.carry);
        if (creep.memory.role == constants.unit_harvester()) {
            if (curCarried < creep.carryCapacity) {
                var sources = creep.room.find(FIND_SOURCES);
                for (i = 0; i < sources.length; i++) {
                    if (sources[i].energy > 0) {
                        if (creep.harvest(sources[i]) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(sources[i]);
                        }
                        break;
                    }
                }
            } else {
                var targets = creep.room.find(FIND_STRUCTURES, {
                                            filter: function(structure) {
                                                return (structure.structureType == STRUCTURE_EXTENSION
                                                        || structure.structureType == STRUCTURE_SPAWN)
                                                        && structure.energy < structure.energyCapacity; }
                                            });
                if (targets.length > 0) {
                    if (Game.creeps[c].transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        Game.creeps[c].moveTo(targets[0]);
                    }
                }
            }
        }
    }
}
