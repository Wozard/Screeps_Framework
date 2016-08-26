var spawn_routines = require('spawn_routines');
var ai_routines = require('ai_routines');
var constants = require('constants');


module.exports.loop = function () {
    spawn_routines.run();
    ai_routines.run();
}
