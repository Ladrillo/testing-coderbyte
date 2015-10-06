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

    var splitSen = sen.split(/\W/);
    return splitSen.reduce(function (acc, e) {
        return acc.length >= e.length ? acc : e;
    });
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

    var letters = 'abcdefghijklmnñopqrstuvwxyza',
        splitLetters = letters.split(''),
        splitStr = str.toLowerCase().split('');

    for (var i = 0; i < str.length; i++) {
        var idx = splitLetters.indexOf(splitStr[i]);
        if (idx !== -1) {
            splitStr[i] = splitLetters[idx + 1];
        }
        if (splitStr[i].search(/[aeiou]/) !== -1) {
            splitStr[i] = splitStr[i].toUpperCase();
        }
    }
    return splitStr.join('');
}


describe('function letterChanges', function () {
    it('should return a string', function () {
        expect(letterChanges('cosa')).to.be.a('string');
    });

    it('should replace every letter with the following letter in the alphabet', function () {
        expect(letterChanges('Abc')).to.equal('bcd');
    });

    it('should work with the empty string', function () {
        expect(letterChanges('')).to.equal('');
    });

    it('should work on a string with spaces', function () {
        expect(letterChanges('aBc cbA')).to.equal('bcd dcb');
    });

    it('should capitalize vowels', function () {
        expect(letterChanges('z')).to.equal('A');
    });
});



// Using the JavaScript language, have the function simpleAdding(num) add up all the numbers from 1 to num. For the test cases, the parameter num will be any number from 1 to 1000.

function simpleAdding(num) {
    if (typeof num !== 'number' || num < 1 || num % 1 !== 0) {
        throw 'error: please pass a integer greater than 0'
    }

    var numbers = new Array(num);
    for (var i = 0; i < numbers.length; i++) {
        numbers[i] = i + 1;
    }
    return numbers.reduce(function (acc, e) {
        return acc + e;
    });
}


describe('function simpleAdding', function () {
    it('should return a number', function () {
        expect(simpleAdding(5)).to.be.a('number');
    });

    it('should add all the numbers from 1 to the argument', function () {
        expect(simpleAdding(5)).to.equal(15);
    });
});



// Using the JavaScript language, have the function letterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. Words will be separated by only one space.

function letterCapitalize(str) {
    if (typeof str !== 'string') throw 'error: please pass a string';

    var processedWords = [];
    str.split(' ').forEach(function (e) {
        processedWords.push(e[0].toUpperCase() + e.slice(1));
    });
    return processedWords.join(' ');
}


describe('function letterCapitalize', function () {
    it('should capitalize the first letter of each word', function () {
        expect(letterCapitalize('esto es una mierda')).to.equal('Esto Es Una Mierda')
    });
});



// Using the JavaScript language, have the function simpleSymbols(str) take the str parameter being passed and determine if it is an acceptable sequence by either returning the string true or false. The str parameter will be composed of + and = symbols with several letters between them (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a + symbol. So the string to the left would be false. The string will not be empty and will have at least one letter.

function simpleSymbols(str) {
    if (typeof str !== 'string' || !/[a-zA-Z]/.test(str)) {
        throw 'error: please pass at least one letter';
    }

    var splitString = str.split('');
    if (/[a-zA-Z]/.test(splitString[0]) || /[a-zA-Z]/.test(splitString[splitString.length - 1])) {
        return 'false';
    }

    var acceptable = splitString.every(function (e, i, arr) {
        return !/[a-zA-Z]/.test(e) || (/[a-zA-Z]/.test(e) && /\+/.test(arr[i - 1]) && /\+/.test(arr[i + 1]));
    });
    return acceptable ? 'true' : 'false';
}


describe('function simpleSymbols', function () {
    it('should return "false" if the first character is a letter', function () {
        expect(simpleSymbols('a+')).to.equal('false');
    });

    it('should return "false" if the last character is a letter', function () {
        expect(simpleSymbols('+a')).to.equal('false');
    });

    it('should return "true" if all letters are preceded and followed by + signs', function () {
        expect(simpleSymbols('+a+=+a+')).to.equal('true');
    });

    it('should return "false" if all letters are not preceded by + signs', function () {
        expect(simpleSymbols('+a+=a+')).to.equal('false');
    });

    it('should return "false" if all letters are not followed by + signs', function () {
        expect(simpleSymbols('+a=+a+')).to.equal('false');
    });
});



// Using the JavaScript language, have the function checkNums(num1,num2) take both parameters being passed and return the string true if num2 is greater than num1, otherwise return the string false. If the parameter values are equal to each other then return the string -1.

function checkNums(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw 'error: at least one parameter is of incorrect type';
    }
    else if (num1 % 1 !== 0 || num2 % 1 !== 0) {
        throw 'error: at least one parameter is not an integer'
    }

    if (num2 > num1) return 'true';
    else if (num2 < num1) return 'false';
    else if (num2 === num1) return '-1';
}


describe('functin checkNums', function () {
    it('should return the string "true" if num2 > num1', function () {
        expect(checkNums(1, 2)).to.be.equal('true');
    });

    it('should return the string "false" if num2 < num1', function () {
        expect(checkNums(2, 1)).to.be.equal('false');
    });

    it('should return the string "-1" if num2 === num1', function () {
        expect(checkNums(1, 1)).to.be.equal('-1');
    });
});



// Using the JavaScript language, have the function timeConvert(num) take the num parameter being passed and return the number of hours and minutes the parameter converts to (ie. if num = 63 then the output should be 1:3). Separate the number of hours and minutes with a colon.

function timeConvert(num) {
    if (typeof num !== 'number' || num % 1 !== 0) {
        throw 'error: please pass an integer';
    }

    var hours = Math.floor(num / 60) + "";
    var minutes = num % 60 + "";

    return hours + ":" + minutes;
}


describe('function timeConvert', function () {
    it('should convert integers to hours and minutes int the "h:m" format', function () {
        expect(timeConvert(1)).to.equal('0:1');
        expect(timeConvert(60)).to.equal('1:0');
        expect(timeConvert(90)).to.equal('1:30');
        expect(timeConvert(120)).to.equal('2:0');
    });
});