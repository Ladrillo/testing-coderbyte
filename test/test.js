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
    it('should return 1 if given 0', function () {
        expect(firstFactorial(0)).to.be.equal(1);
    });

    it('should return 1 if given 1', function () {
        expect(firstFactorial(1)).to.be.equal(1);
    });

    it('should return 2 if given 2', function () {
        expect(firstFactorial(2)).to.be.equal(2);
    });

    it('should return 120 if given 5', function () {
        expect(firstFactorial(5)).to.be.equal(120);
    });
});



// Using the JavaScript language, have the function longestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty.

function longestWord(sen) {
    if (typeof sen !== 'string') throw 'error: incorrect argument';
    else if (sen === '') throw 'error: string empty';
    else {
        var splitSen = sen.split(/\W/);
        return splitSen.reduce(function (acc, e) {
            return acc.length >= e.length ? acc : e;
        });
    }
}

describe('longestWord function', function () {
    it('should return a string', function () {
        expect(longestWord('something')).to.be.a('string');
    });

    it('should ignore punctuation', function () {
        expect(longestWord('aaa.')).to.equal('aaa');
        expect(longestWord('aa.. aaa')).to.equal('aaa');
    });

    it('should return the longest word when all words unequal', function () {
        expect(longestWord('a aa aaa')).to.equal('aaa');
        expect(longestWord('aaa aa a')).to.equal('aaa');
        expect(longestWord('a aaa aa')).to.equal('aaa');
    });

    it('should return the first longest word', function () {
        expect(longestWord('aa aaa bbb ccc b')).to.equal('aaa');
    });
});



// Using the JavaScript language, have the function letterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.


function letterChanges(str) {
    if (typeof str !== 'string') throw 'error: incorrect argument';
    else {
        var letters = ['abcdefghijklmnñopqrstuvwxyza'];
        var splitLetters = letters.split('');
        for (var i = 0; i < str.length; i++) {
            


        }
    }
}

describe('function letterChanges', function () {
    it('should return a string', function () {
        expect(letterChanges('cosa')).to.be.a('string');
    });

    it('should replace every letter with the following letter in the alphabet', function () {
        expect(letterChanges('abc')).to.equal('bcd');
    });

    it('should work with the empty string', function () {
        expect(letterChanges('')).to.equal('');
    });

    it('should work with a string with spaces', function () {
        expect(letterChanges('abc cba')).to.equal('bcd dcb');
    });

    it('should capitalize vowels', function () {
        expect(letterChanges('z')).to.equal('A');
    });
});