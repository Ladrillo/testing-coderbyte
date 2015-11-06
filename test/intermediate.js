var chai = require('chai'),
    expect = chai.expect;

chai.should();


module.exports = function () {
    // Using the JavaScript language, have the function primeTime(num) take the num parameter being passed and return true if the parameter is a prime number, otherwise return false. The range will be between 1 and 2^16.

    function primeTime(num) {

        var med = Math.floor(num / 2);
        for (var i = med; i > 1; i--) {
            if (num % i === 0) return false;
        }
        return true;
    }


    describe('function primeTime', function () {
        it('should return false if the number is not prime', function () {
            expect(primeTime(4)).to.equal(false);
            expect(primeTime(9)).to.equal(false);
            expect(primeTime(10638)).to.equal(false);
        });
        it('should return true if the number is prime', function () {
            expect(primeTime(5)).to.equal(true);
            expect(primeTime(10639)).to.equal(true);
        });
    });



    // Using the JavaScript language, have the function runLength(str) take the str parameter being passed and return a compressed version of the string using the Run-length encoding algorithm. This algorithm works by taking the occurrence of each repeating character and outputting that number along with a single character of the repeating sequence. For example: "wwwggopp" would return 3w2g1o2p. The string will not contain any numbers, punctuation, or symbols.

    function runLength(str) {


    }




    xdescribe('function runLength', function () {
        it('should return a lowercase string encoded using the run-length algorithm', function () {
            expect(runLength('aaa')).to.equal('3a');
            expect(runLength('aaabb')).to.equal('3a2b');
            expect(runLength('aaabbcccd')).to.equal('3a2b3c1d');
        });
        it('should return a uppercase string encoded using the run-length algorithm', function () {
            expect(runLength('AAA')).to.equal('3A');
            expect(runLength('AAABB')).to.equal('3A2B');
            expect(runLength('AAABBCCCD')).to.equal('3A2B3C1D');
        });
        it('should return a mixed case string encoded using the run-length algorithm', function () {
            expect(runLength('aaA')).to.equal('2a1A');
            expect(runLength('aABb')).to.equal('1a1A1B1b');
            expect(runLength('AaabbccCd')).to.equal('1A2a2b2c1C1d');
        });
    });


    //Using the JavaScript language, have the function primeMover(num) return the numth prime number. The range will be from 1 to 10^4. For example: if num is 16 the output should be 53 as 53 is the 16th prime number.

    function primeMover(num) {

        if (typeof num !== 'number' || num < 1 || num % 1 !== 0) {
            throw 'error: please pass a positive integer larger than zero'
        }
        var primes = [], i = 2;
        while (primes.length < num) {
            if (primeTime(i)) primes.push(i);
            i += 1;
        }
        return primes[primes.length - 1];
    }

    describe('function primeMover', function () {
        it('should return the nth prime number', function () {
            expect(primeMover(10)).to.equal(29);
            expect(primeMover(20)).to.equal(71);
            expect(primeMover(31)).to.equal(127);
            expect(primeMover(1000)).to.equal(7919);
        });
    });



    // Using the JavaScript language, have the function palindromeTwo(str) take the str parameter being passed and return true if the parameter is a palindrome, (the string is the same forward as it is backward) otherwise return false. The parameter entered may have punctuation and symbols but they should not affect whether the string is in fact a palindrome. For example: "Anne, I vote more cars race Rome-to-Vienna" should return true.

    function stripPunctuation(str) {
        return str.replace(/[^a-z]/gi, '');
    }

    function palindromeTwo(str) {
        if (typeof str !== 'string' || !str) throw 'error: please pass non-empty string'

        var reversed = [];
        str.split('').forEach(function (e) {
            return reversed.unshift(e);
        });
        return str === reversed.join('') ? 'true' : 'false';
    }

    describe('helper function stripPunctuation', function () {
        it('should take a string and return the string but only chars of the alphabet', function () {
            expect(stripPunctuation('  A b. C@c dd1dd ')).to.equal('AbCcdddd');
        });
    });

    describe('function palindromeTwo', function () {
        it('should return true is str is a palindrome', function () {
            expect(palindromeTwo('axa')).to.equal('true');
            expect(palindromeTwo('axaxa')).to.equal('true');
        });

        it('should return false is str is not a palindrome', function () {
            expect(palindromeTwo('axx')).to.equal('false');
        });
    });



    // Using the JavaScript language, have the function division(num1,num2) take both parameters being passed and return the Greatest Common Factor. That is, return the greatest number that evenly goes into both numbers with no remainder. For example: 12 and 16 both are divisible by 1, 2, and 4 so the output should be 4. The range for both parameters will be from 1 to 10^3.

    function division(num1, num2) {
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            throw 'error: please pass numbers';
        }
        if (num1 === 0 || num2 === 0) {
            throw 'error: please don\'t pass zeroes';
        }
        if (num1 < 0 || num2 < 0) {
            throw 'error: please pass positive integers';
        }

        for (var i = num1 >= num2 ? num2 : num1; i > 0; i--) {
            if (num1 % i === 0 && num2 % i === 0) return i;
        }
    }

    describe('function division', function () {
        it('should return largest common denominator', function () {
            expect(division(24, 36)).to.equal(12);
            expect(division(128, 86)).to.equal(2);
            expect(division(127, 86)).to.equal(1);
            expect(division(86, 86)).to.equal(86);
        });

        it('should return the same regardless of order of arguments', function () {
            expect(division(12, 16)).to.equal(4);
            expect(division(16, 12)).to.equal(4);
        });
    });



    // Using the JavaScript language, have the function stringScramble(str1,str2) take both parameters being passed and return true if a portion of str1 characters can be rearranged to match str2, otherwise return false. For example: if str1 is "rkqodlw" and str2 is "world" the output should return true. Punctuation and symbols will not be entered with the parameters.

    function stringScramble(str1, str2) {

        var strSplit1 = str1.split(''),
            strSplit2 = str2.split('');

        return strSplit2.every(function (e) {
            return strSplit1.indexOf(e) !== -1;
        });
    }

    describe('function stringScramble', function () {
        it('should return true if all of the 2nd arg. chars are contained in the 1st', function () {
            expect(stringScramble('rkqodlw', 'world')).to.equal(true);
        });
        it('should return false if not all of the 2nd arg. chars are contained in the 1st', function () {
            expect(stringScramble('rkqodlw', 'worldx')).to.equal(false);
        });
    });





    // Using the JavaScript language, have the function arithGeoII(arr) take the array of numbers stored in arr and return the string "Arithmetic" if the sequence follows an arithmetic pattern or return "Geometric" if it follows a geometric pattern. If the sequence doesn't follow either pattern return -1. An arithmetic sequence is one where the difference between each of the numbers is consistent, where as in a geometric sequence, each term after the first is multiplied by some constant or common ratio. Arithmetic example: [2, 4, 6, 8] and Geometric example: [2, 6, 18, 54]. Negative numbers may be entered as parameters, 0 will not be entered, and no array will contain all the same elements.

    function detectallEqual(arr) {

        if (arr.length === 1) return false;
        else if (arr[0] === arr[1]) detectallEqual(arr.slice(1));
        else return true;
    }

    function arithGeoII(arr) {

        if (!(arr instanceof Array) || arr.length < 3) {
            throw 'error: please pass an Array of at least 3 integers (no zeroes allowed)';
        }
        if (arr.some(function (e) {
            return typeof e !== 'number' || e === 0 || e % 1 !== 0;
        })) {
            throw 'error: please pass an Array of at least 3 integers (no zeroes allowed)';
        }
        if (!detectallEqual(arr)) {
            throw 'error: array elements cannot be all the same';
        }

        var sum = arr[1] - arr[0], mult = arr[1] / arr[0];

        if (arr.slice(0, -1).every(function (e, i, a) {
            return arr[i + 1] - e === sum;
        })) return "Arithmetic";

        if (arr.slice(0, -1).every(function (e, i, a) {
            return arr[i + 1] / e === mult;
        })) return "Geometric";

        else return '-1';
    }

    describe('function arithGeoII', function () {
        it('should detect arithmetic sequences', function () {
            expect(arithGeoII([1, 2, 3, 4])).to.equal("Arithmetic");
            expect(arithGeoII([2, 4, 6, 8])).to.equal("Arithmetic");
            expect(arithGeoII([-1, 2, 5, 8])).to.equal("Arithmetic");
            expect(arithGeoII([1, -2, -5, -8])).to.equal("Arithmetic");
        });
        it('should detect geometric sequences', function () {
            expect(arithGeoII([1, 2, 4, 8])).to.equal("Geometric");
            expect(arithGeoII([1, -2, 4, -8])).to.equal("Geometric");
            expect(arithGeoII([-1, -3, -9, -27])).to.equal("Geometric");
        });
        it('should return -1 if no sequence is detected', function () {
            expect(arithGeoII([1, 2, 6, 4])).to.equal('-1');
        });
    });



    // Using the JavaScript language, have the function arrayAddition(arr) take the array of numbers stored in arr and return the string true if any combination of numbers in the array can be added up to equal the largest number in the array, otherwise return the string false. For example: if arr contains [4, 6, 23, 10, 1, 3] the output should return true because 4 + 6 + 10 + 3 = 23. The array will not be empty, will not contain all the same elements, and may contain negative numbers.

    function makeGroupsOfOne(arr) {
        var first = [];
        for (var i in arr) {
            first.push([arr[i]]);
        }
        return first;
    }

    function addOne(arr) {
        var newArr = [];
        arr.forEach(function (e, i, a) {
            var k = i + 1;
            while (k < arr.length) {
                newArr = newArr.concat([e.concat(arr[k])]);
                k += 1;
            }
        });
        return newArr;
    }

    function extractCombinations(arr) {
        var newArr = arr;
        
    }


    describe('helper function makeGroupsOfOne', function () {
        it('should make groups of 1 element', function () {
            expect(makeGroupsOfOne([1, 2, 3, 4])).to.eql([[1], [2], [3], [4]]);

        });
    });

    describe('helper function addOne', function () {
        it('should create combinations one elem bigger', function () {
            expect(addOne([[1], [2], [3], [4]])).to.eql([[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]]);
        });
    });

    describe('helper function extractCombinations', function () {
        it('should create all combinations from an array of arrays', function () {
            expect(extractCombinations([[1], [2], [3], [4]])).to.eql([[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4], [1, 2, 3], [1, 2, 4], [1, 3, 4], [2, 3, 4], [1, 2, 3, 4]]);
        });
    });

};