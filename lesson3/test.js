'use strict';

describe('getFactorial', function () {

    it('testing with 7', function () {
        assert.equal(getFactorial(7), 5040);
    });

    it('testing with 20', function () {
        assert.equal(getFactorial(20), 2432902008176640000);
    });
});

describe('bind', function () {
    var obj = {
        x: 7,
        y: 8,
        multiply: function () {
            return this.x * this.y;
        }
    };
    var mul = obj.multiply;
    var newFunc = bind(obj, mul);

    it('testing custom bind', function () {
        assert.equal(newFunc(), 56);
    });

});

describe('curry', function () {
    function toConvert(a, b, c, d) {
        return a * b * c * d;
    };

    it('my converter is working', function () {
        assert.equal(curry(toConvert)(4)(2)(5)(2), 80);
    });
});

describe('manipulateObject', function () {

    it('with correct data', function () {
        assert.equal(manipulateObject({},function () {
            return 5;
        }), 5);
    });

    it('with bad object', function () {
        assert.equal(manipulateObject(5,function () {
            return 5;
        }), null);
    });

    it('with bad function', function () {
        assert.equal(manipulateObject({},{}), null);
    });
});

