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
    if (typeof num !== 'number') {
        throw "error: this function only works with numbers!"
    }
    else if (num < 0) {
        throw "error: this function doesn't work with negative numbers"
    }
    else {
        if (num === 0 || num === 1) return 1;
        else return num * firstFactorial(num - 1);
    }
}

describe('firstFactorial function', function () {
    it('should return 1 if given 0', function (){
        expect(firstFactorial(0)).to.be.equal(1);
    });

    it('should return 1 if given 1', function (){
        expect(firstFactorial(1)).to.be.equal(1);
    });

    it('should return 2 if given 2', function (){
        expect(firstFactorial(2)).to.be.equal(2);
    });

    it('should return 120 if given 5', function () {
        expect(firstFactorial(5)).to.be.equal(120);
    });
});