var infiniteJestNames = require('./infinitejest-names.json');
var uniqueRandomArray = require('unique-random-array');
var getRandomItem = uniqueRandomArray(infiniteJestNames);

module.exports = {
  all: infiniteJestNames,
  random: random
};

function random(num) {
  if (num === undefined) {
    return getRandomItem();
  } else {
    var randomItems = [];
    for (var i = 0; i < num; i++) {
      randomItems.push(getRandomItem());
    }
    return randomItems;
  }
}