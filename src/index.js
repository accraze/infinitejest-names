import infiniteJestNames from './infinitejest-names.json';
import uniqueRandomArray from 'unique-random-array';

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