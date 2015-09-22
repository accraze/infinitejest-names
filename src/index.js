var infiniteJestNames = require('./infinitejest-names.json');
var uniqueRandomArray = require('unique-random-array');

module.exports = {
  all: infiniteJestNames,
  random: uniqueRandomArray(infiniteJestNames)
};