'use strict';
describe('isTrueObject', function () {

    it('testing with Array', function () {
        assert.equal(isTrueObject([]), false);
    });

    it('testing with usual Object', function () {
        assert.equal(isTrueObject({}), true);
    });

    it('testing with Error', function () {
        assert.equal(isTrueObject(new Error()), false);
    });

    it('testing with primitive', function () {
        assert.equal(isTrueObject('string'), false);
    });

    it('testing with null', function () {
        assert.equal(isTrueObject(null), false);
    });

    it('testing with function', function () {
        assert.equal(isTrueObject(function () {

        }), false);
    });
});

describe('reverseArray', function () {

    it('with null', function () {
        assert.equal(reverseArray(null), undefined);
    });

    it('array of numbers', function () {
        assert.deepEqual(reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9]), [9, 8, 7, 6, 5, 4, 3, 2, 1]);
    });
});

describe('arrayToObject', function () {

    it('any array', function () {
        assert.deepEqual(arrayToObject(['x', 'y', 0]), {x: 0, y: 1, '0': 2});
    });
});

describe('customArrMap', function () {

    it('whith bad array', function () {
        assert.deepEqual(customArrMap(6), undefined);
    });

    it('whith bad func', function () {
        assert.deepEqual(customArrMap([5, 'ff', 45], "df"), undefined);
    });

    it('whith correct data', function () {
        assert.deepEqual(customArrMap([5, 'ff', 45], function (element) {
            return element + ' - new arry';
        }), ['5 - new arry', 'ff - new arry', '45 - new arry']);
    });

    it('whith correct data', function () {
        assert.deepEqual(customArrMap([5, 'ff', 45], function (element) {
            return element * 2;
        }), [10, NaN, 90]);
    });
});

describe('getSet', function () {

    it('array of numbers', function () {
        assert.deepEqual(getSet([1, 2, 2, 2, 3, 3, 3, 6, 7, 1, 2]), [1, 2, 3, 6, 7]);
    });
});

describe('getFibonacciNumber', function () {

    it('find  FibonacciNumber 5', function () {
        assert.equal(getFibonacciNumber(5), 5);
    });

    it('find  FibonacciNumber 50', function () {
        assert.equal(getFibonacciNumber(50), 12586269025);
    });

});

describe('arrayToNumber', function () {

    it('one array', function () {
        assert.equal(arrayToNumber([1, 8, 8, 3]), -18);
    });

    it('another array', function () {
        assert.equal(arrayToNumber([5, 3, 7, 15]), 225);
    });

    it('incorrect data array', function () {
        assert.equal(arrayToNumber([5, 'jj', 7, 15]), undefined);
    });

});

describe('arrayToNumber2', function () {

    it('another array', function () {
        assert.equal(arrayToNumber2([5, 3, 7, 15]), -14);
    });

    it('one array', function () {
        assert.equal(arrayToNumber2([1, 8, 8, 3, 0]), -53);
    });

    it('incorrect data array', function () {
        assert.equal(arrayToNumber2([5, 'jj', 7, 15]), undefined);
    });

});
