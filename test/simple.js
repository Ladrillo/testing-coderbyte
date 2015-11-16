var chai = require('chai'),
    expect = chai.expect;

chai.should();


module.exports = function () {
    
    // Using the JavaScript language, have the function firstReverse(str) take the str parameter being passed and return the string in reversed order.

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



    // Using the JavaScript language, have the function firstFactorial(num) take the num parameter being passed and return the factorial of it (ie. if num = 4, return (4 * 3 * 2 * 1)). For the test cases, the range will be between 1 and 18.

    function firstFactorial(num) {
        if (typeof num !== 'number') {
            throw "error: this function only works with numbers!"
        }
        if (num < 0) {
            throw "error: this function doesn't work with negative numbers"
        }

        if (num === 0 || num === 1) return 1;
        else return num * firstFactorial(num - 1);
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
        if (typeof str !== 'string') throw 'error: incorrect argument you stupid fuck';

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
            throw new Error('error: please pass a integer greater than 0');
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

        it('should throw if no argument passed', function () {
            expect(simpleAdding).to.throw(/error: please pass a integer greater than 0/);
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
            expect(letterCapitalize('esto es una mierda')).to.equal('Esto Es Una Mierda');
        });
    });



    // Using the JavaScript language, have the function simpleSymbols(str) take the str parameter being passed and determine if it is an acceptable sequence by either returning the string true or false. The str parameter will be composed of + and = symbols with several letters between them (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a + symbol. So the string to the left would be false. The string will not be empty and will have at least one letter.

    function simpleSymbols(str) {
        if (typeof str !== 'string' || !/[a-zA-Z]/.test(str)) {
            throw 'error: please pass at least one letter of the alphabet';
        }

        var splitStr = str.split('');
        if (/[a-zA-Z]/.test(splitStr[0]) || /[a-zA-Z]/.test(splitStr[splitStr.length - 1])) {
            return 'false';
        }

        var acceptable = splitStr.every(function (e, i, arr) {
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



    // Using the JavaScript language, have the function timeConvert(num) take the num parameter being passed and return the number of hours and minutes the parameter converts to, in the 'digital' format (ie. if num = 63 then the output should be the string 1:03).

    function timeConvert(num) {
        if (typeof num !== 'number' || num % 1 !== 0 || num < 1) {
            throw 'error: please pass a positive integer';
        }

        var hours = Math.floor(num / 60) + "";
        var minutesNumber = num % 60;
        var minutes = minutesNumber > 9 ? minutesNumber + '' : '0' + (minutesNumber + '');

        return hours + ":" + minutes;
    }


    describe('function timeConvert', function () {
        it('should work with less than ten minutes', function () {
            expect(timeConvert(1)).to.equal('0:01');
            expect(timeConvert(7)).to.equal('0:07');
            expect(timeConvert(59)).to.equal('0:59');
        });

        it('should work with more than ten minutes', function () {
            expect(timeConvert(60)).to.equal('1:00');
            expect(timeConvert(90)).to.equal('1:30');
            expect(timeConvert(123)).to.equal('2:03');
        });
    });


    // Using the JavaScript language, have the function alphabetSoup(str) take the str string parameter being passed and return the string with the letters in alphabetical order (ie. hello becomes ehllo). Assume numbers and punctuation symbols will not be included in the string.

    function alphabetSoup(str) {
        if (typeof str !== 'string') {
            throw 'error: please pass a string';
        }
        else if (/[^A-Za-z]/.test(str)) {
            throw 'error: please pass a string with no punctuation or symbols'
        }

        return str.split('').sort().join('');
    }

    describe('function alphabetSoup', function () {
        it('sorts the characters in a lowercase string alphabetically', function () {
            expect(alphabetSoup('czba')).to.equal('abcz');
        });

        it('sorts the characters in a uppercase string alphabetically', function () {
            expect(alphabetSoup('CZBA')).to.equal('ABCZ');
        });
    });



    // Using the JavaScript language, have the function ABCheck(str) take the str parameter being passed and return the string true if the characters a and b, in that order, are separated by exactly 3 places anywhere in the string at least once (ie. "lane borrowed" would result in true because there is exactly three characters -that aren't a or b- between a and b). Otherwise return the string false.

    function ABCheck(str) {
        if (typeof str !== 'string') {
            throw 'error: please pass a string';
        }

        if (str.length < 5) return 'false';

        var splitStr = str.split('');
        for (var i = 0; i < splitStr.length; i++) {
            if (splitStr[i] === 'a' &&
                /[^ab]/.test(splitStr[i + 1]) &&
                /[^ab]/.test(splitStr[i + 2]) &&
                /[^ab]/.test(splitStr[i + 3]) &&
                splitStr[i + 4] === 'b') {
                return 'true';
            }
        }
        return 'false';
    }


    describe('function ABCheck', function () {
        it('should return "false" if str contains less than five chars', function () {
            expect(ABCheck('axxb')).to.equal('false');
        });

        it('should return "true" if str contains "a" and "b" separated by three chars', function () {
            expect(ABCheck('axxxb')).to.equal('true');
        });

        it('should return "false" if str does not contain "a" and "b" separated by three chars', function () {
            expect(ABCheck('axxxxb')).to.equal('false');
        });
    });



    // Using the JavaScript language, have the function vowelCount(str) take the str string parameter being passed and return the number of vowels the string contains (ie. "All cows eat grass" would return 5). Do not count y as a vowel for this challenge.

    function vowelCount(str) {
        if (typeof str !== 'string') {
            throw 'error: please pass a string next time'
        }

        var count = 0,
            splitStr = str.split('');

        splitStr.forEach(function (e) {
            if (/[aeiouAEIOU]/.test(e)) {
                count += 1;
            }
        });
        return count;
    }


    describe('function vowelCount', function () {
        it('should return 0 if there are no vowels in string', function () {
            expect(vowelCount('xxx')).to.equal(0);
        });

        it('should return n if there are n lowercase vowels in string', function () {
            expect(vowelCount('xaxxexioxxu')).to.equal(5);
        });

        it('should return n if there are n uppercase vowels in string', function () {
            expect(vowelCount('xAxxExI')).to.equal(3);
        });

        it('should return n if there are n mixed-case vowels in string', function () {
            expect(vowelCount('xAxxexI')).to.equal(3);
        });
    });


    // Using the JavaScript language, have the function wordCount(str) take the str string parameter being passed and return the number of words the string contains (ie. "Never eat shredded wheat" would return 4). Words will be separated by single spaces.

    function wordCount(str) {
        if (typeof str !== 'string') {
            throw 'error: pass a string next time';
        }

        if (!str) return 0;
        return str.trim().split(/[^A-Za-z0-9]/).join('').length;
    }


    xdescribe('function wordCount', function () {
        it('should return 0 if there are 0 words in a string', function () {
            expect(wordCount('')).to.equal(0);
        });

        it('should return 1 if there is 1 word in a string', function () {
            expect(wordCount('aa')).to.equal(1);
        });

        it('should return n if there are n words in a string', function () {
            expect(wordCount('aa bbb cc')).to.equal(3);
        });
    });



    // Using the JavaScript language, have the function exOh(str) take the str parameter being passed and return the string true if there is an equal number of x's and o's, otherwise return the string false. Only these two letters will be entered in the string, no punctuation or numbers. For example: if str is "xooxxxxooxo" then the output should return false because there are 6 x's and 5 o's.

    function exOh(str) {
        if (typeof str !== 'string' || !str || str.match(/[^ox]/)) {
            throw 'error: please enter a non-empty string with only "o" or "x" chars';
        }
        var xs = 0, os = 0;

        if (str.match(/x/)) xs += str.match(/x/g).length;
        if (str.match(/o/)) os += str.match(/o/g).length;

        return xs === os ? 'true' : 'false';
    }


    describe('function exOh', function () {
        it('should return "true" if there is an aqual number of xs and os', function () {
            expect(exOh('xo')).to.equal('true');
            expect(exOh('xoxo')).to.equal('true');
        });

        it('should return "false" if there is an unequal number of xs and os', function () {
            expect(exOh('oxo')).to.equal('false');
            expect(exOh('xoxox')).to.equal('false');
        });
    });



    // Using the JavaScript language, have the function palindrome(str) take the str parameter being passed and return the string true if the parameter is a palindrome, (the string is the same forward as it is backward) otherwise return the string false. For example: "racecar" is also "racecar" backwards. Punctuation and numbers will not be part of the string.

    function palindrome(str) {
        if (typeof str !== 'string' || !str) throw 'error: please pass non-empty string'

        var reversed = [];
        str.split('').forEach(function (e) {
            return reversed.unshift(e);
        });
        return str === reversed.join('') ? 'true' : 'false';
    }


    describe('function palindrome', function () {
        it('should return true is str is a palindrome', function () {
            expect(palindrome('axa')).to.equal('true');
            expect(palindrome('axaxa')).to.equal('true');
        });

        it('should return false is str is not a palindrome', function () {
            expect(palindrome('axx')).to.equal('false');
        });
    });



    // Using the JavaScript language, have the function arithGeo(arr) take the array of numbers stored in arr and return the string "Arithmetic" if the sequence follows an arithmetic pattern or return "Geometric" if it follows a geometric pattern. If the sequence doesn't follow either pattern return -1. An arithmetic sequence is one where the difference between each of the numbers is consistent, whereas in a geometric sequence, each term after the first is multiplied by some constant or common ratio. Arithmetic example: [2, 4, 6, 8] and Geometric example: [2, 6, 18, 54]. Negative numbers may be entered as parameters, 0 will not be entered, and no array will contain all the same elements.

    function allEqual(array) {
        if (array.length === 1) return true;
        if (array[0] !== array[1]) return false;
        return allEqual(array.slice(1));
    }

    function arith(n, arr) {
        if (arr.length === 1) return true;
        if (arr[1] - arr[0] !== n) return false;
        return arith(n, arr.slice(1));
    }

    function geom(n, arr) {
        if (arr.length === 1) return true;
        if (arr[1] / arr[0] !== n) return false;
        return geom(n, arr.slice(1));
    }

    function arithGeo(arr) {
        if (!(arr instanceof Array)) throw 'error: please pass an array holding at least three numbers';
        if (arr.length < 3) throw 'error: please pass an array holding at least three numbers';
        if (arr.some(function (e) { return e === 0; })) throw 'error: no zeroes allowed';
        if (allEqual(arr)) throw 'error: all array elements can not be equal';

        var inc = arr[1] - arr[0],
            mult = arr[1] / arr[0];

        if (arith(inc, arr)) return 'Arithmetic';
        if (geom(mult, arr)) return 'Geometric';

        return '-1';
    }


    describe('function arithGeo', function () {
        it('should return "Arithmetic" if the array contains numbers in arithmetic progression', function () {
            expect(arithGeo([1, 2, 3])).to.equal('Arithmetic');
            expect(arithGeo([1, 2.5, 4])).to.equal('Arithmetic');
            expect(arithGeo([1, 3, 5])).to.equal('Arithmetic');
            expect(arithGeo([2, 5, 8, 11])).to.equal('Arithmetic');
        });

        it('should return "Geometric" if the array contains numbers in geometric progression', function () {
            expect(arithGeo([1, -2, 4])).to.equal('Geometric');
            expect(arithGeo([1, 1.5, 2.25])).to.equal('Geometric');
            expect(arithGeo([1, 3, 9])).to.equal('Geometric');
            expect(arithGeo([2, -6, 18, -54])).to.equal('Geometric');
        });

        it('should return "-1" if the array contains numbers not in arith or geom progressions', function () {
            expect(arithGeo([1, 2, 3, 5])).to.equal('-1');
            expect(arithGeo([1, 2, 3, 6])).to.equal('-1');
            expect(arithGeo([2, 6, -18, 55])).to.equal('-1');
        });
    });



    // Using the JavaScript language, have the function arrayAdditionI(arr) take the array of numbers stored in arr and return the string true if any combination of numbers in the array can be added up to equal the largest number in the array, otherwise return the string false. For example: if arr contains [4, 6, 23, 10, 1, 3] the output should return true because 4 + 6 + 10 + 3 = 23. The array will not be empty, will not contain all the same elements, and may contain negative numbers.



    function arrayAdditionI(arr) {


    }

    // Using the JavaScript language, have the function letterCountI(str) take the str parameter being passed and return the first word with the greatest number of repeated letters. For example: "Today, is the greatest day ever!" should return greatest because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there are no words with repeating letters return -1. Words will be separated by spaces.

    function StringBreakdown(str) {
        var cleanStr = str.replace(/[^A-Za-z0-9]/g, ''),
            that = this;

        cleanStr.split('').forEach(function (char) {
            if (that.hasOwnProperty(char)) {
                that[char] += 1;
            }
            else {
                that[char] = 1;
            }
        });
    }

    StringBreakdown.prototype = {

        mostFrequentChar: function () {
            var that = this;
            return Object.keys(this).reduce(function (acc, k) {
                return that[acc] >= that[k] ? acc : k;
            });
        },

        leastFrequentChar: function () {
            var that = this;
            return Object.keys(this).reduce(function (acc, k) {
                return that[acc] <= that[k] ? acc : k;
            });
        },

        maxNumberOfRepetitions: function () {
            var reps = [];
            for (var p in this) {
                if (this.hasOwnProperty(p)) {
                    reps.push(this[p]);
                }
            }
            return reps.reduce(function (acc, e) {
                return acc >= e ? acc : e;
            });
        },

        minNumberOfRepetitions: function () {
            var reps = [];
            for (var p in this) {
                if (this.hasOwnProperty(p)) {
                    reps.push(this[p]);
                }
            }
            return reps.reduce(function (acc, e) {
                return acc <= e ? acc : e;
            });
        }
    };


    function letterCountI(str) {
        var splitStr = str.split(' ');

        if (splitStr.every(function (e) {
            var breakdown1 = new StringBreakdown(e);
            return breakdown1.maxNumberOfRepetitions() === 1;
        })) return '-1';

        return splitStr.reduce(function (acc, e, i, arr) {
            var breakDown2 = new StringBreakdown(acc);
            var breakDown3 = new StringBreakdown(e);
            return breakDown2.maxNumberOfRepetitions() >= breakDown3.maxNumberOfRepetitions() ? acc : e;
        });
    }


    describe('letterCountI function ', function () {
        it('should return the first word with a larger repeat index for a char', function () {
            expect(letterCountI('aaxyz aaaxyz xyzaaaa uvwaaaa xyz a')).to.equal('xyzaaaa');
        });

        it('should return "-1" if there are no words with repeated letters', function () {
            expect(letterCountI('xyz mno uvw')).to.equal('-1');
        });
    });



    // Using the JavaScript language, have the function secondGreatLow(arr) take the array of numbers stored in arr and return the second lowest and second greatest numbers, respectively, separated by a space. For example: if arr contains [7, 7, 12, 98, 106] the output should be 12 98. The array will not be empty and will contain at least 2 numbers. It can get tricky if there's just two numbers!

    function sortArray(arr) {
        return arr.sort(function (a, b) {
            if (a < b) return -1;
            if (a > b) return 1;
            return 0;
        });
    }

    function secondGreatLow(arr) {
        var sorted = sortArray(arr);
        return sorted[1] + ' ' + sorted[sorted.length - 2];
    }


    describe('function secondGreatLow', function () {
        it('should return an array with the second lowest and the second greatest numbers', function () {
            expect(secondGreatLow([1, 2, 3, 4, 5])).to.equal('2 4');
        });
    });



    // Using the JavaScript language, have the function divisionStringified(num1,num2) take both parameters being passed, divide num1 by num2, and return the result as a string with properly formatted commas. If an answer is only 3 digits long, return the number with no commas (ie. 2 / 3 should output "1"). For example: if num1 is 123456789 and num2 is 10000 the output should be "12,345".

    function divisionStringified(num1, num2) {
        var numString = Math.floor(num1 / num2) + '';
        if (numString.length > 3) {
            var splitNumString = numString.split('');
            splitNumString.splice(numString.length - 3, 0, ',');
            return splitNumString.join('');
        }
        return numString;
    }

    describe('function divisionString', function () {
        it('should remove decimals from result of division', function () {
            expect(divisionStringified(125, 10)).to.equal('12');
        });

        it('should format comma in the thousands', function () {
            expect(divisionStringified(10000, 10)).to.equal('1,000');
        });
    });



    // Using the JavaScript language, have the function countingMinutesI(str) take the str parameter being passed which will be two times (each properly formatted with a colon and am or pm) separated by a hyphen and return the total number of minutes between the two times. The time will be in a 12 hour clock format. For example: if str is 9:00am-10:00am then the output should be 60. If str is 1:00pm-11:00am the output should be 1320.


    function standardizeTime(str) {
        var standardTime = [],
            splitStr = str.split(/[^0-9]/);
        if (/am/.test(str)) {
            standardTime[0] = Number(splitStr[0]);
            standardTime[1] = Number(splitStr[1]);
        }
        else if (/pm/.test(str)) {
            standardTime[0] = Number(splitStr[0]) + 12;
            standardTime[1] = Number(splitStr[1]);
        }
        return standardTime;
    }

    function minutesSinceMidnight(arr) {
        return arr[0] * 60 + arr[1];
    }

    function countingMinutesI(str) {
        var splitStr = str.split('-'),
            minutes = [];

        minutes[0] = minutesSinceMidnight(standardizeTime(splitStr[0]));
        minutes[1] = minutesSinceMidnight(standardizeTime(splitStr[1]));

        if (minutes[1] > minutes[0]) {
            return minutes[1] - minutes[0];
        }
        return (24 * 60) - (minutes[0] - minutes[1]);
    }



    describe('helper function standardizeTime', function () {
        it('should transform input am times into hours and minutes array with 24h format', function () {
            expect(standardizeTime('1:00am')).to.eql([1, 0]);
            expect(standardizeTime('7:30am')).to.eql([7, 30]);
        });

        it('should transform input pm times into hours and minutes array with 24h format', function () {
            expect(standardizeTime('1:00pm')).to.eql([13, 0]);
            expect(standardizeTime('7:30pm')).to.eql([19, 30]);
        });
    });

    describe('helper function minutesSinceMidnight', function () {
        it('should take a time array in the [h, m] 24h format and return number of minutes since last midnight', function () {
            expect(minutesSinceMidnight([1, 0])).to.equal(60);
            expect(minutesSinceMidnight([13, 1])).to.equal(781);
        });
    });

    describe('function countingMinutesI', function () {
        it('should give the difference in minutes from two formatted times when second time earlier', function () {
            expect(countingMinutesI('1:01pm-11:00am')).to.equal(1319);
            expect(countingMinutesI('1:00pm-11:00am')).to.equal(1320);
            expect(countingMinutesI('1:00pm-11:01am')).to.equal(1321);
        });

        it('should give the difference in minutes from two formatted times when second time larger', function () {
            expect(countingMinutesI('1:00am-2:01am')).to.equal(61);
            expect(countingMinutesI('3:00pm-3:20pm')).to.equal(20);
        });
    });



    // Using the JavaScript language, have the function meanMode(arr) take the array of numbers stored in arr and return 1 if the mode equals the mean, 0 if they don't equal each other (ie. [5, 3, 3, 3, 1] should return 1 because the mode (3) equals the mean (3)). The array will not be empty, will only contain positive integers, and will not contain more than one mode.

    function meanMode(arr) {


    }

    describe('function meanMode', function () {
        xit('should work', function () {
            expect(meanMode([5, 3, 3, 3, 1])).to.equal(1);
        });
    });


    // Using the JavaScript language, have the function dashInsert(str) insert dashes ('-') between each two odd numbers in str. For example: if str is 454793 the output should be 4547-9-3. Don't count zero as an odd number.

    function centerSection(arr) {
        return arr.slice(1, arr.length - 1);
    }

    function dashInsert(str) {
        if (str.length < 3) return str;

        var strSplit = str.split(''),
            centerPartArr = centerSection(strSplit);

        for (var i = 0; i < centerPartArr.length; i++) {
            if (centerPartArr[i] % 2 !== 0) {
                centerPartArr.splice(i, 1, '-' + centerPartArr[i] + '-');
            }
        }

        centerPartArr.unshift(strSplit[0]);
        centerPartArr.push(strSplit[strSplit.length - 1]);

        return centerPartArr.join('').replace('--', '-');
    }


    describe('helper function centerSection', function () {
        it('should return the given array from the second element to the second to last', function () {
            expect(centerSection([1, 2, 3, 4])).to.eql([2, 3]);
        });
    });

    describe('function dashInsert', function () {
        it('should return the string with no changes if it is shorter than 3 chars', function () {
            expect(dashInsert('1')).to.equal('1');
            expect(dashInsert('12')).to.equal('12');
        });

        it('should surround odd numbers in the middle of a number with dashes', function () {
            expect(dashInsert('213')).to.equal('2-1-3');
            expect(dashInsert('223')).to.equal('223');
        });

        it('should prevent two dashes in a row', function () {
            expect(dashInsert('2773')).to.equal('2-7-7-3');
        });
    });



    // Using the JavaScript language, have the function swapCase(str) take the str parameter and swap the case of each character. For example: if str is "Hello World" the output should be hELLO wORLD. Let numbers and symbols stay the way they are.

    function swapCase(str) {
        if (typeof str !== 'string' || !str) throw 'error: please pass a non-empty string';

        if (!/[A-Za-z]/.test(str)) return str;

        var newSplitStr = [];

        str.split('').forEach(function (e) {
            if (/[a-z]/.test(e)) newSplitStr.push(e.toUpperCase());
            else if (/[A-Z]/.test(e)) newSplitStr.push(e.toLowerCase());
        });

        return newSplitStr.join('');
    }


    describe('function swapCase', function () {
        it('should ignore symbols and spaces', function () {
            expect(swapCase('.:3')).to.equal('.:3');
        });

        it('should invert capitalization of chars', function () {
            expect(swapCase('AaBbCc')).to.equal('aAbBcC');
        });
    });



    // Using the JavaScript language, have the function numberSearch(str) take the str parameter, search for all the numbers in the string, add them together, then return that final number. For example: if str is "88Hello 3World!" the output should be 91. You will have to differentiate between single digit numbers and multiple digit numbers like in the example above. So "55Hello" and "5Hello 5" should return two different answers. Each string will contain at least one letter or symbol.


    function extractNumbers(str) {
        var splitStr = str.split(/[^0-9]/),
            onlyNums = splitStr.filter(function (e) {
                return e !== '';
            });

        for (var i in onlyNums) {
            onlyNums[i] = Number(onlyNums[i]);
        }

        return onlyNums;
    }

    function numberSearch(str) {
        return extractNumbers(str).reduce(function (acc, e) {
            return acc + e;
        });
    }

    describe('helper function extractNumbers', function () {
        it('should take a string and return an array of numbers', function () {
            expect(extractNumbers('33')).to.eql([33]);
            expect(extractNumbers('x33x')).to.eql([33]);
            expect(extractNumbers('33x2')).to.eql([33, 2]);
            expect(extractNumbers('x33x2xxx1x')).to.eql([33, 2, 1]);
        });
    });

    describe('function numberSearch', function () {
        it('should add the numbers in a string', function () {
            expect(numberSearch('x1xx11x')).to.equal(12);
            expect(numberSearch('x1xx1x1x')).to.equal(3);
        });
    });



    // Using the JavaScript language, have the function thirdGreatest(strArr) take the array of strings stored in strArr and return the third largest word within in. So for example: if strArr is ["hello", "world", "before", "all"] your output should be world because "before" is 6 letters long, and "hello" and "world" are both 5, but the output should be world because it appeared as the last 5 letter word in the array. If strArr was ["hello", "world", "after", "all"] the output should be after because the first three words are all 5 letters long, so return the last one. The array will have at least three strings and each string will only contain letters.

    function thirdGreatest(arr) {

    }


    xdescribe('function thirdGreatest', function () {
        it('should return the third longest string', function () {
            expect(thirdGreatest(['x', 'y', 'z', 'w'])).to.equal('z');
            expect(thirdGreatest(['x', 'y', 'z', 'ww'])).to.equal('y');
            expect(thirdGreatest(['x', 'yy', 'zzz', 'w'])).to.equal('x');
        });
    });


    // Using the JavaScript language, have the function powersOfTwo(num) take the num parameter being passed which will be an integer and return the string true if it's a power of two. If it's not return the string false. For example if the input is 16 then your program should return the string true but if the input is 22 then the output should be the string false.

    function powersOfTwo(num) {
        if (num === 2) return true;
        else if (num % 2 === 0) return powersOfTwo(num / 2);
        else return false;
    }


    describe('function powersOfTwo', function () {
        it('should return true if fed a number that is a power of two', function () {
            expect(powersOfTwo(2)).to.equal(true);
            expect(powersOfTwo(4)).to.equal(true);
            expect(powersOfTwo(16)).to.equal(true);
        });

        it('should return false if fed a number that is not a power of two', function () {
            expect(powersOfTwo(1)).to.equal(false);
            expect(powersOfTwo(3)).to.equal(false);
            expect(powersOfTwo(9)).to.equal(false);
        });
    });



    // Using the JavaScript language, have the function additivePersistence(num) take the num parameter being passed which will always be a positive integer and return its additive persistence which is the number of times you must add the digits in num until you reach a single digit. For example: if num is 2718 then your program should return 2 because 2 + 7 + 1 + 8 = 18 and 1 + 8 = 9 and you stop at 9.

    function addDigits(num) {
        return String(num).split('').reduce(function (acc, e) {
            return acc + Number(e); }, 0);
    }


    function additivePersistence(acc, num) {
        if (addDigits(num) < 10) return acc;
        else return additivePersistence(++acc, addDigits(num));
    }


    describe('helper function addDigits', function () {
        it('should add up all digits in a number', function () {
            expect(addDigits(1)).to.equal(1);
            expect(addDigits(123)).to.equal(6);
            expect(addDigits(1235)).to.equal(11);
            expect(addDigits(12352)).to.equal(13);
        });
    });


    describe('function additivePersistence', function () {
        it('should return the additive persistence of a number', function () {
            expect(additivePersistence(1, 12)).to.equal(1);
            expect(additivePersistence(1, 128)).to.equal(2);
            expect(additivePersistence(1, 1245)).to.equal(2);
            expect(additivePersistence(1, 12781)).to.equal(3);
            expect(additivePersistence(1, 197892)).to.equal(2);
        });
    });



    // Using the JavaScript language, have the function multiplicativePersistence(num) take the num parameter being passed which will always be a positive integer and return its multiplicative persistence which is the number of times you must multiply the digits in num until you reach a single digit. For example: if num is 39 then your program should return 3 because 3 * 9 = 27 then 2 * 7 = 14 and finally 1 * 4 = 4 and you stop at 4.

    function multiplyDigits(num) {
        return String(num).split('').reduce(function (acc, e) {
            return acc * Number(e); }, 1);
    }

    function multiplicativePersistence(acc, num) {
        if (multiplyDigits(num) < 10) return acc;
        else return multiplicativePersistence(++acc, multiplyDigits(num));
    }


    describe('helper function multiplyDigits', function () {
        it('should multiply digits in a number', function () {
            expect(multiplyDigits(1)).to.equal(1);
            expect(multiplyDigits(12)).to.equal(2);
            expect(multiplyDigits(123)).to.equal(6);
            expect(multiplyDigits(173)).to.equal(21);
        });
    });

    describe('function multiplicativePersistence', function () {
        it('should return the additive persistence of a number', function () {
            expect(multiplicativePersistence(1, 12)).to.equal(1);
            expect(multiplicativePersistence(1, 128)).to.equal(2);
            expect(multiplicativePersistence(1, 1245)).to.equal(2);
            expect(multiplicativePersistence(1, 12781)).to.equal(2);
            expect(multiplicativePersistence(1, 999)).to.equal(4);
        });
    });



    // Using the JavaScript language, have the function OffLineMinimum(strArr) take the strArr parameter being passed which will be an array of integers ranging from 1...n and the letter "E" and return the correct subset based on the following rules. The input will be in the following format: ["I","I","E","I",...,"E",...,"I"] where the I's stand for integers and the E means take out the smallest integer currently in the whole set. When finished, your program should return that new set with integers separated by commas. For example: if strArr is ["5","4","6","E","1","7","E","E","3","2"] then your program should return 4,1,5.


    describe('function offLineMinimum', function () {
        xit('should work dammit', function () {
            expect(offLineMinimum(["5","4","6","E","1","7","E","E","3","2"])).to.equal([4,1,5]);
        });
    });

};