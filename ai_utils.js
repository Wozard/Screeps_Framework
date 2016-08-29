/*  ----AI UTILITIES----
This module provides several
common AI tasks. Order a creep
to perform a task by passing it
to the appropriate function. */

//TODO: Look into making these creep methods
//Makes more sense to call Creep.mineEnergy than to
//pass some mineEnergy function a creep

module.exports = {
    mineEnergy:      function(minerCreep)    { eMine(minerCreep) },
    storeEnergy:     function(storerCreep)   { eStore(storerCreep) },
    upgradeRoom:     function(upgraderCreep) { uRoom(upgraderCreep) },
    buildStructure:  function(builderCreep)  { build(builderCreep) }
};


function eMine(creep) { //Orders a creep to go mine energy
    //Find energy sources
    var sources = creep.room.find(FIND_SOURCES);

    //Go mine the nearest non-empty source
    for (i = 0; i < sources.length; i++) {
        if (sources[i].energy > 0) {
            if (creep.harvest(sources[i]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[i]);
            }
            break;
        }
    }
}

function eStore(creep) { //Orders a creep to go store energy

    //Get list of storage targets; filters for non-full spawns and extensions
    var targets = creep.room.find(FIND_STRUCTURES, {filter:
        function(structure) {
            return (structure.structureType == STRUCTURE_EXTENSION
                || structure.structureType == STRUCTURE_SPAWN)
                && structure.energy < structure.energyCapacity;
            }
        });

        //Go store energy in the nearest non-full spawn/extension
        if (targets.length > 0) {
            if (creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(targets[0]);
            }
        }
    }


    function uRoom(creep) { //Orders a creep to go upgrade the room controller
        //Go dump energy in room controller
        if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
            creep.moveTo(creep.room.controller);
        }
    }


    function build(creep) { //Orders a creep to go work on a construction site
        var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
        if(targets.length) {
            if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(targets[0]);
            }
        }
    }
