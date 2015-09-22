var expect = require('chai').expect;
var infiniteJest = require('./index');

describe('infinitejest-names', function(){
  describe('all', function () {
    it('should be an arrya of strings', function () {
      expect(infiniteJest.all).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(array) {
        return array.every(function(item) {
          return typeof item === 'string' ;
        });
      }
    });

    it('should contain `Hal Incandenza`', function () {
      expect(infiniteJest.all).to.include('Hal Incandenza');
    });
  });
  describe('random', function () {
    it('should return a random item from infiniteJest.all', function () {
      var randomItem = infiniteJest.random();
      expect(infiniteJest.all).to.include(randomItem);
    });
    it('should return an array of random items if passed a number', function () {
      var randomItems = infiniteJest.random(3);
      expect(randomItems).to.have.length(3);
      randomItems.forEach(function(item) {
        expect(infiniteJest.all).to.include(item);
      })
    });
  });
})

