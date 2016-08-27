module.exports = {
  mineEnergy: function(minerCreep)  { eMine(minerCreep) },
  storeEnergy: function(storerCreep) {eStore(storerCreep)}
};

function eMine(minerCreep) {
  var sources = minerCreep.room.find(FIND_SOURCES);
  for (i = 0; i < sources.length; i++) {
      if (sources[i].energy > 0) {
          if (minerCreep.harvest(sources[i]) == ERR_NOT_IN_RANGE) {
              minerCreep.moveTo(sources[i]);
          }
          break;
      }
  }
}

function eStore(storerCreep) {
    console.log(storerCreep);
  var targets = storerCreep.room.find(FIND_STRUCTURES, {
                              filter: function(structure) {
                                  return (structure.structureType == STRUCTURE_EXTENSION
                                          || structure.structureType == STRUCTURE_SPAWN)
                                          && structure.energy < structure.energyCapacity; }
                              });
  if (targets.length > 0) {
      if (storerCreep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
          storerCreep.moveTo(targets[0]);
      }
  }
}
