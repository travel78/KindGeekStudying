'use strict';

/* task1 */

function isTrueObject(val) {
    return !!val && val.constructor === {}.constructor;
}

/* task2 */

function reverseArray(arr) {
    if (!arr || !Array.isArray(arr)) return;

    return arr.map(function (val, index, array) {
        return array[array.length - index - 1];
    })
}

/* task3 */

function arrayToObject(arr) {
    if (!Array.isArray(arr)) return;

    return arr.reduce(function (previousValue, currentValue, index) {
        previousValue[String(currentValue)] = index;
        return previousValue;
    }, {});
}

/* task4 */

function customArrMap(arr, func) {
    if (!Array.isArray(arr) || !func || typeof func !== 'function') return;

    var arrResult = [];
    arr.forEach(val => arrResult.push(func(val)));
    return arrResult;
}

/* task5 */

function getSet(arr) {
    if (!Array.isArray(arr)) return;

    return arr.reduce(function (mySet, val) {
        if (!mySet.includes(val)) {
            mySet.push(val);
        }
        return mySet;
    }, []);
}

/* task6 */
// using recursion in this method would make it too slow with big values

let memoArray = [];
function getFibonacciNumber(number) {
    let num = +number;
    if (!num || num < 1) return;
    else if (num === 1 || num === 2) return 1;
    else if (memoArray[num]) return memoArray[num];
    let currentVal = 1;
    let nextVal = 1;
    for (let i = 1; i < num; i++) {
        let tempVal = nextVal;
        nextVal += currentVal;
        currentVal = tempVal;
    }
    memoArray[num] = currentVal;
    return currentVal;
}

/* bonus task */

function arrayToNumber(arr) {
    if (!arr || !Array.isArray(arr) || !arr.every(val => +val || +val === 0)) return;

    return arr.reduce(function (preVal, nextVal) {
        if (Math.abs(preVal) === Math.abs(nextVal))return preVal * nextVal;
        else if (preVal < nextVal)return preVal - nextVal;
        else if (preVal > nextVal)return preVal + nextVal;
    });

}

/* bonus task version 2 */

function arrayToNumber2(arr) {
    if (!arr || !Array.isArray(arr) || !arr.every(val => +val || +val === 0)) return;

    let result = arr[0];
    arr.reduce(function (preVal, nextVal) {
        if (preVal === nextVal) result *= nextVal;
        else if (preVal < nextVal) result -= nextVal;
        else if (preVal > nextVal) result += nextVal;
        return nextVal;
    });
    return result;
}

