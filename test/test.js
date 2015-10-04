'use strict';

var chai = require('chai'),
    expect = chai.expect;

chai.should();




// Using the JavaScript language, have the function firstReverse(str) take the str parameter being passed and return the string in reversed order.

function firstReverse(str) {
    var reversed = [], i;
    for (i = 0; i < str.length; i++) {
        reversed.unshift(str[i]);
    }
    return reversed.join('');
}

describe('firstReverse function', function () {
    it('should return a string', function () {
        expect(firstReverse('pene')).to.be.a('string');
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



// Using the JavaScript language, have the function firstFactorial(num) take the num parameter being passed and return the factorial of it (ie. if num = 4, return (4 * 3 * 2 * 1)). For the test cases, the range will be between 1 and 18.

function firstFactorial(num) {

  // code goes here
  return num;

}