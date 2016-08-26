var constants = require('constants');

module.exports = {
    harvester:  function() { return countUnitType(constants.unit_harvester) },
    builder:    function() { return countUnitType(constants.unit_builder) }
};


function countUnitType(unitName) {
    var count = 0;
    for (var c in Game.creeps) {
        if (Game.creeps[c].memory.role == unitName) {
            count++;
        }
    }
    return count;
}