var buldSpawn = require('spawner_builder');
var harvSpawn = require('spawner_harvester');
var constants = require('constants');
var unit_spawner = require('unit_spawner');
var unit_counts = require('unit_counts');

var spawners = [
    harvSpawn.spawn,
    buldSpawn.spawn
];

module.exports = {
    run: function() { spawnUnits() }
};

function spawnUnits() {
    //clear out memory first
    for(var c in Memory.creeps) {
        if(!Game.creeps[c]) {
            delete Memory.creeps[c];
        }
    }

    //get reference to main spawner (update this for multiple spawners later)
    var spawn = Game.spawns[constants.spawn_main()];


    //Headcount
    var harvList = unit_counts.list('harvester');
    var buldList = unit_counts.list('builder');
    var upgrList = unit_counts.list('upgrader');


    //Do some spawning    TODO: Make spawning more intelligent
    //I want to move the logic of 'what do I spawn next?' to a single module, since
    //answering that question requires knowing what the current creeps are

    if (harvList.length < 2) {
        unit_spawner.spawn(spawn, constants.preset_harvester_1(), numName('harv_'), { role: 'harvester' });
    } else if (upgrList.length < 1) {
        unit_spawner.spawn(spawn, constants.preset_upgrader_1(), numName('upgr_'), {role: 'upgrader'});
    } else if (buldList.length < 1) {
        //unit_spawner.spawn(spawn, constants.preset_builder_1(), numName('buld_'), {role: 'builder'});
    }

    // for (i = 0; i < spawners.length; i++) {
    //     spawners[i](spawn);
    // }
}

//This function provides the closest-to-zero numbered name, given a base (like 'buld_')
function numName(base) {
    var i = 0;
    while(Game.creeps[base + i]) {
        i++;
    }
    return base + i;
}
