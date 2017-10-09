"use strict";
describe("toPrimitive", function () {

    it("If value is null expect null", function () {
        assert.strictEqual(toPrimitive(null, 'number'), null);
    });

    it("If value is undefined expect undefined", function () {
        assert.strictEqual(toPrimitive(undefined, 'string'), undefined);
    });

    it("Boolean to string", function () {
        assert.equal(toPrimitive(false, 'string'), 'false');
    });

    it("Number to string", function () {
        assert.equal(typeof toPrimitive(56, 'string'), 'string');
    });

    it("Any to boolen", function () {
        assert.equal(typeof toPrimitive(null, 'boolean'), 'boolean');
    });

    it("correct value to number", function () {
        assert.equal(typeof toPrimitive(false, 'number'), 'number');
    });

    it("incorrect value to number", function () {
        assert(isNaN(toPrimitive('frs40  ', 'number')));
    });

    it("incorrect type", function () {
        assert.equal(toPrimitive('d', 'fsee'), 'no such type');
    });
});

describe("formatNumber", function () {

    it("elongation dec number", function () {
        assert.strictEqual(formatNumber('1.55', 5), "1.55000");
    });

    it("cutting number", function () {
        assert.strictEqual(formatNumber(1.55056, 3), "1.550");
    });

    it("elongation int number", function () {
        assert.strictEqual(formatNumber(48, '5'), "48.00000");
    });

    it("incorrect data", function () {
        assert.equal(formatNumber(48, 3.445), "be more carefull");
    });
});

describe("isPrime", function () {

    it("131 is prime", function () {
        assert.isTrue(isPrime(131));
    });

    it("5 is prime", function () {
        assert.isTrue(isPrime(5));
    });

    it("2000 is not prime", function () {
        assert.isFalse(isPrime(2000));
    });
});

describe("capitalizeString", function () {

    it("every word", function () {
        assert.equal(capitalizeString("simple text for testing method"), "Simple Text For Testing Method");
    });
});

describe("replaceString", function () {

    it("any strings", function () {
        assert.equal(replaceString("This string is for testing my method", "testing", "checking"), "This string is for checking my method");
    });

    it("any strings", function () {
        assert.equal(replaceString("This string is for testing my method testing", "testing", "checking"), "This string is for checking my method checking");
    });
});

describe("customSlice", function () {

    it("whith positive begin and positive end", function () {
        assert.equal(customSlice("My custom slice method", 3, 7), "cust");
    });

    it("whith negative begin and negative end", function () {
        assert.equal(customSlice("My custom slice method", -7, -3), " met");
    });

    it("whith positive begin and negative end", function () {
        assert.equal(customSlice("My custom slice method", 3, -7), "custom slice");
    });

    it("whith negative begin and positive end", function () {
        assert.equal(customSlice("My custom slice method", -13, 12), " sl");
    });
});