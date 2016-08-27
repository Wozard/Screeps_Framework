const HARVESTER_T1_BODY = [WORK, MOVE, CARRY];
const HARVESTER_T2_BODY = [WORK, WORK, MOVE, MOVE, CARRY, CARRY];
const HARVESTER_T3_BODY = [WORK, WORK, WORK, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY];
const BUILDER_T1_BODY   = [WORK, MOVE, CARRY];
const BUILDER_T2_BODY   = [WORK, WORK, MOVE, MOVE, CARRY, CARRY];
const BUILDER_T3_BODY   = [WORK, WORK, WORK, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY];
const UPGRADER_T1_BODY = [WORK, MOVE, CARRY];

module.exports = {
    //unit names
    unit_harvester:          function() { return 'harvester'},
    unit_builder:            function() { return 'builder' },
    
    //building names
    spawn_main:              function() { return 'Spawn1' },
    
    //minimum unit counts
    min_harvesters_required: function() { return 5 },
    min_builders_required:   function() { return 3 },
    
    //unit stat presets
    
    /*----------HARVESTERS----------*/
    //Tier 1
    preset_harvester_1:      function() { return HARVESTER_T1_BODY },
    preset_harvester_1_cost: function() { return getCost(HARVESTER_T1_BODY) },
    preset_harvester_1_name: function(_id) { return 'harvester_1_' + _id },
    //Tier 2
    preset_harvester_2:      function() { return HARVESTER_T2_BODY },
    preset_harvester_2_cost: function() { return getCost(HARVESTER_T2_BODY) },
    preset_harvester_2_name: function(_id) { return 'harvester_2_' + _id },
    //Tier 3
    preset_harvester_3:      function() { return HARVESTER_T3_BODY },
    preset_harvester_3_cost: function() { return getCost(HARVESTER_T3_BODY) },
    preset_harvester_3_name: function(_id) { return 'harvester_3_' + _id },
    
    /*----------BUILDERS----------*/
    //Tier 1
    preset_builder_1:      function() { return BUILDER_T1_BODY },
    preset_builder_1_cost: function() { return getCost(BUILDER_T1_BODY) },
    preset_builder_1_name: function(_id) { return 'builder_1_' + _id },
    //Tier 2
    preset_builder_2:      function() { return BUILDER_T2_BODY },
    preset_builder_2_cost: function() { return getCost(BUILDER_T2_BODY) },
    preset_builder_2_name: function(_id) { return 'builder_2_' + _id },
    //Tier 3
    preset_builder_3:      function() { return BUILDER_T3_BODY },
    preset_builder_3_cost: function() { return getCost(BUILDER_T3_BODY) },
    preset_builder_3_name: function(_id) { return 'builder_3_' + _id },
    
    /*---------UPGRADERS----------*/
    preset_upgrader_1:     function() { return UPGRADER_T1_BODY}
};

//Utilities

function getCost(bodyparts) {
    var total = 0;
    for (i = 0; i < bodyparts.length; i++)
    {
        total += BODYPART_COST[bodyparts[i]];
    }
    return total;
}










