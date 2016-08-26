module.exports = {
    spawn: function(spawn, unit_body, unit_name, unit_memory) { spawnUnit(spawn, unit_body, unit_name, unit_memory) }
};

function spawnUnit(spawn, unit_body, unit_name, unit_memory) {
    if (spawn.canCreateCreep(unit_body, unit_name) == OK) {
        console.log('Spawning new creep: ' + unit_name);
        spawn.createCreep(unit_body, unit_name, unit_memory);
    }
}