var constants = require('constants');

module.exports = {
    harvester:  function() { return countUnitType(constants.unit_harvester) },
    builder:    function() { return countUnitType(constants.unit_builder) },
    list:       function(role) {return listRole(role)}
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

function listRole(role) {
    return _.filter(Game.creeps, function(o) {return o.memory.role == role});
}
