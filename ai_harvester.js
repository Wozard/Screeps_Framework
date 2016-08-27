var constants = require('constants');
var utils = require('ai_utils');
var counts = require('unit_counts');

module.exports = {
    run: function() { harvTick() }
};

function harvTick() {
  //Grab list of active builders
  var harvList = counts.list('harvester');


  for (var creep of harvList) {
    var curCarried = _.sum(creep.carry);

    //Mine until full, store energy in spawns and exts
    if (curCarried < creep.carryCapacity) {
        utils.mineEnergy(creep);
    } else {
        utils.storeEnergy(creep);
    }
  }

}