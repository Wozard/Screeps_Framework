var constants = require('constants');
var unit_counts = require('unit_counts');
var unit_spawner = require('unit_spawner');

module.exports = {
    spawn: function(spawn) { spawnHarvester(spawn) }
};

function spawnHarvester(spawn) {
    //get current number of harvesters
    var curHarvestersCount = unit_counts.harvester();
    
    //get the role name for harvesters
    var unitRole = constants.unit_harvester();
    
    //if we have fewer harvesters than we ought to...
    if (curHarvestersCount < constants.min_harvesters_required()) {
        
        //check to see if we can make a tier-3 harvester
        if (spawn.energy >= constants.preset_harvester_3_cost()) {
            //spawn tier-3
            var cName = constants.preset_harvester_3_name(curHarvestersCount + 1);
            unit_spawner.spawn(spawn, constants.preset_harvester_3(), cName, { role: unitRole });
            
        //otherwise, check to see if we can make a tier-2 harvester
        } else if (spawn.energy >= constants.preset_harvester_2_cost() 
                    && spawn.energy < constants.preset_harvester_3_cost()) {
            //spawn tier-2
            var cName = constants.preset_harvester_2_name(curHarvestersCount + 1);
            unit_spawner.spawn(spawn, constants.preset_harvester_3(), cName, { role: unitRole });
            
        //otherwise, check to see if we can make a tier-1 harvester
        } else if (spawn.energy >= constants.preset_harvester_1_cost()
                    && spawn.energy < constants.preset_harvester_2_cost()) {
            //spawn tier-1
            var cName = constants.preset_harvester_1_name(curHarvestersCount + 1);
            unit_spawner.spawn(spawn, constants.preset_harvester_1(), cName, { role: unitRole });
            
        //looks like we couldn't afford to make any harvesters this tick
        } else {
            // console.log('Not enough energy to spawn new Harvester: ' + spawn.energy);
        }
    }
}