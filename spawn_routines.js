var buldSpawn = require('spawner_builder');
var harvSpawn = require('spawner_harvester');
var constants = require('constants')

var spawners = [
        buldSpawn.spawn,
        harvSpawn.spawn
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
    
    for (i = 0; i < spawners.length; i++) {
        spawners[i](spawn);
    }
}
