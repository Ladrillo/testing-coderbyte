var chai = require('chai'),
    expect = chai.expect;

chai.should();


module.exports = function () {
    // Using the JavaScript language, have the function primeTime(num) take the num parameter being passed and return true if the parameter is a prime number, otherwise return false. The range will be between 1 and 2^16.

    function firstReverse(str) {
        var reversed = [];
        for (var i = 0; i < str.length; i++) {
            reversed.unshift(str[i]);
        }
        return reversed.join('');
    }


    describe('firstReverse function', function () {
        it('should return a string', function () {
            expect(firstReverse('cosa')).to.be.a('string');
        });

        it('should return as is the zero-length string', function () {
            expect(firstReverse('')).to.equal('');
        });

        it('should return as is the string of length one', function () {
            expect(firstReverse('a')).to.equal('a');
        });

        it('should reverse strings of length > 1', function () {
            expect(firstReverse('abc')).to.equal('cba');
        });

        it('should work with string made of several words', function () {
            expect(firstReverse('hola, idiot')).to.equal('toidi ,aloh');
        });
    });


};