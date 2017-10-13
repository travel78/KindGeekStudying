'use strict';

/* task1 */

function isTrueObject(val) {

    if (val instanceof Object && val.__proto__.__proto__ === null) {
        return true;
    }
    return false;
}

/* task2 */

function reverseArray(arr) {
    if (!Array.isArray(arr)) return [];

    var reversedArr = [];
    arr.forEach(val => reversedArr.unshift(val));
    return reversedArr;
}

/* task3 */

function arrayToObject(arr) {
    if (!Array.isArray(arr)) return {};

    return arr.reduce(function (previousValue, currentValue, index) {
        previousValue[String(currentValue)] = index;
        return previousValue;
    }, {});
}

/* task4 */

function customArrMap(arr, func) {
    if (!Array.isArray(arr)) return [];
    if (!func || typeof func !== 'function') return arr;

    var arrResult = [];
    arr.forEach(val => arrResult.push(func(val)));
    return arrResult;
}

/* task5 */

function getSet(arr) {
    if (!Array.isArray(arr)) return [];

    var result = [];
    arr.forEach(function (val) {
        if (!result.includes(val)) {
            result.push(val);
        }
    });
    return result;
}

/* task6 */

var memoArray = [];
function getFibonacciNumber(seqNum) {
    if (!+seqNum || +seqNum < 1) return 0;
    if (+seqNum === 1 || +seqNum === 2) return 1;
    if (memoArray[+seqNum]) return memoArray[+seqNum];
    var currentVal = 1;
    var nextVal = 1;
    for (let i = 1; i < +seqNum; i++) {
        let tempVal = nextVal;
        nextVal += currentVal;
        currentVal = tempVal;
    }
    memoArray[+seqNum] = currentVal;
    return currentVal;
}

/* bonus task */

function arrayToNumber(arr) {
    if (!Array.isArray(arr)) return 0;

    function isNumber(val) {
        if (+val)return true;
        return false;
    }

    if (!arr.every(isNumber)) {
        return 'Whatever you wish';
    }

    return arr.reduce(function (preVal, nextVal) {
        if (Math.abs(preVal) === Math.abs(nextVal))return preVal * nextVal;
        if (preVal < nextVal)return preVal - nextVal;
        if (preVal > nextVal)return preVal + nextVal;
    });

}

/* bonus task version 2 */

function arrayToNumber2(arr) {
    if (!Array.isArray(arr)) return 0;

    function isNumber(val) {
        if (+val)return true;
        return false;
    }

    if (!arr.every(isNumber)) {
        return 'Whatever you wish';
    }
    let result = arr[0];
    arr.reduce(function (preVal, nextVal) {
        if (preVal === nextVal) result *= nextVal;
        if (preVal < nextVal) result -= nextVal;
        if (preVal > nextVal) result += nextVal;
        console.log(result);
        return nextVal;
    });
    return result;
}

