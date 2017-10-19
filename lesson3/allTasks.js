'use strict';


/* task1 */

function manipulateObject(obj, func) {

    if (!(obj instanceof Object) || typeof func !== "function") {
        return null;
    }
    return func(obj);
}

/* task2 */

function getFactorial(number) {
    let num = +number;
    if (!num || num < 0) {
        console.log('incorrect data');
        return;
    }
    if (num === 0) return 1;
    return (function innerFunc() {
        return (num !== 1) ? num * innerFunc(--num) : 1;
    })();
}

/* task3 */

function bind(context, func) {
    return function () {
        return func.apply(context, arguments);
    };
}

/* task4 */
// sum(1,2,3) -> sum(1)(2)(3)

function curry(func) {
    let inStr = func.toString();
    let argArr = inStr
        .substring(inStr.indexOf('(') + 1, inStr.indexOf(')'))
        .split(',')
        .map(function (val) {
            return val.trim();
        });
    let content = inStr.substring(inStr.indexOf('{'));

    function builder(counter) {
        if (counter !== 2) {
            return `function(${argArr[argArr.length - counter + 1]}){return ` + builder(counter - 1) + '}';
        }
        return `function(${argArr[argArr.length - counter + 1]} )${content}`;
    }

    let finalString = 'return ' + builder(argArr.length);
    return new Function(argArr[0], finalString);
}
