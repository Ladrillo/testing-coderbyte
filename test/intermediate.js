var chai = require('chai'),
    expect = chai.expect;

chai.should();


module.exports = function () {
    // Using the JavaScript language, have the function primeTime(num) take the num parameter being passed and return true if the parameter is a prime number, otherwise return false. The range will be between 1 and 2^16.

    function primeTime(num) {

        var med = Math.floor(num / 2);
        for (var i = 2; i <= med; i++) {
            if (num % med === 0) return false;
        }
        return true;
    }


    describe('function primeTime', function () {
        it('should return false if the number is not prime', function () {
            expect(primeTime(4)).to.equal(false);
            expect(primeTime(10638)).to.equal(false);
        });
        it('should return true if the number is prime', function () {
            expect(primeTime(5)).to.equal(true);
            expect(primeTime(10639)).to.equal(true);
        });
    });


};