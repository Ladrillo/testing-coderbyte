var chai = require('chai'),
    expect = chai.expect;

chai.should();


module.exports = function () {
    
    // You should write a function stringChunk that takes a string and a positive integer n, splits the string into parts of n length and returns them in an array. It is ok for the last element to have less characters than n. If n is not a valid size(> 0) (or is absent), you should return an empty array. If n is greater than the lenght of the string, you should return an array with the only element being the same string.
    
    function stringChunk(str, n) {
        if (!n || n < 0) return [];        
    }
    
    describe('function stringChunk', function () {
        it('should return empty array when n < 1', function () {
            expect(stringChunk('test', 0)).to.eql([]);
            expect(stringChunk('test', -1)).to.eql([]);
        });
        it('should return empty array when n absent', function () {
            expect(stringChunk('test')).to.eql([]);
        });
    });



};