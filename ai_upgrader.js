var unit_counts = require('unit_counts');

module.exports = {
    run: function() { aiTick() }
};

function aiTick() {
  upgrList = unit_counts.list('upgrader');

  for (var upgrCreep of upgrList) {
    
  }
}
