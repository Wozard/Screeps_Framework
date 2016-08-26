var aiHarvester = require('ai_harvester');
var aiBuilder = require('ai_builder');

var ai_routines = [
        aiHarvester.run,
        aiBuilder.run
    ];

module.exports = {
    run: function() { runAI() }
};

function runAI() {
    for (i = 0; i < ai_routines.length; i++) {
        ai_routines[i]();
    }
}

