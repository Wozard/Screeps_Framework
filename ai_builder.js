var constants = require('constants');
var utils = require('ai_utils');
var counts = require('unit_counts');

module.exports = {
    run: function() { buldTick() }
};

function buldTick() {
  //Grab list of active builders
  var buldList = counts.list('builder');


  for (var creep of buldList) {
    var curCarried = _.sum(creep.carry);

    //Behavior; currently mimics harvester
    if (curCarried < creep.carryCapacity) {
        utils.mineEnergy(creep);
    } else {
        utils.storeEnergy(creep);
    }
  }
}
