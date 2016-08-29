var constants = require('constants');
var unit_counts = require('unit_counts');
var unit_spawner = require('unit_spawner');

module.exports = {
    spawn: function(spawn) { spawnBuilder(spawn) }
};

function spawnBuilder(spawn) {
    //get current number of builders
    var curBuildersCount = unit_counts.builder();

    //get the role name for builders
    var unitRole = constants.unit_builder();

    //if we have fewer builders than we ought to...
    if (curBuildersCount < constants.min_builders_required()) {

        //check to see if we can make a tier-3 builder
        if (spawn.energy >= constants.preset_builder_3_cost()) {
            //spawn tier-3
            var cName = constants.preset_builder_3_name(curBuildersCount + 1);
            unit_spawner.spawn(spawn, constants.preset_builder_3(), cName, { role: unitRole });

            //otherwise, check to see if we can make a tier-2 builder
        } else if (spawn.energy >= constants.preset_builder_2_cost()
        && spawn.energy < constants.preset_builder_3_cost()) {
            //spawn tier-2
            var cName = constants.preset_builder_2_name(curBuildersCount + 1);
            unit_spawner.spawn(spawn, constants.preset_builder_2(), cName, { role: unitRole });

            //otherwise, check to see if we can make a tier-1 builder
        } else if (spawn.energy >= constants.preset_builder_1_cost()
        && spawn.energy < constants.preset_builder_2_cost()) {
            //spawn tier-1
            var cName = constants.preset_builder_1_name(curBuildersCount + 1);
            unit_spawner.spawn(spawn, constants.preset_builder_1(), cName, { role: unitRole });

            //looks like we couldn't afford to make any builders this tick
        } else {
            // console.log('Not enough energy to spawn new Builder: ' + spawn.energy);
        }
    }
}
