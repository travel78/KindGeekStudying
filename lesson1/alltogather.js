'use strict';
/*task 1*/
function toPrimitive(val, type) {
    if (type === 'boolean') return !!val;
    if (val instanceof Object) return null;

    switch (typeof val) {
        case 'object':
            return null;
        case 'undefined':
            return undefined;
    }

    switch (type) {
        case 'number':
            return +val;
        case 'string':
            return String(val);
        default:
            return 'no such type';
    }
}

/*task 2*/
function formatNumber(number, decimalAmount) {

    if (isNaN(+number) || isNaN(+decimalAmount) || String(decimalAmount).includes('.')) {
        return 'be more carefull';
    }
    decimalAmount = +decimalAmount;
    var arr = String(number).split('.');

    if (!arr[1]) return arr[0] + '.' + '0'.repeat(decimalAmount);

    if (arr[1].length > decimalAmount) return arr[0] + '.' + arr[1].substr(0, decimalAmount);

    return arr[0] + '.' + arr[1] + '0'.repeat(decimalAmount - arr[1].length);

}

/*task 3*/
// I took into account that before words can't be any symbols except gap
// So my solution is good enough for correct sentence, but I added extra code to correct it
function capitalizeString(string) {

    return string.replace(/^[a-zа-я]|\s[a-zа-я]|[.,!?;:][a-zа-я]/g, function (match) {
        if (match.startsWith(' ') || match.length === 1) return match.toUpperCase();
        return match[0].concat(' ', match[1].toUpperCase());
    });

}

/*task 4*/
function replaceString(initialString, stringToReplace, replacer) {
    var arr = initialString.split(stringToReplace);
    var result = '';
    var counter = initialString.endsWith(stringToReplace) ? 1 : 0;

    arr.forEach(function (element) {
        counter++;
        result = result.concat(element);
        if (counter !== arr.length) {
            result = result.concat(replacer);
        }
    });

    return result
}

/*task 5*/
function isPrime(number) {
    if (isNaN(+number) || String(number).includes('.') || (+number <= 1)) {
        return false;
    }

    var i = 2;
    for (; i < 10; i++) {
        let temp = +number / i;
        if (!String(temp).includes('.') && +number / i !== 1) {
            return false;
        }
    }
    return true;
}

/*task 6*/
function customSlice(stringToSlice, begin, end) {
    var newBegin = begin < 0 ? stringToSlice.length + begin : begin;
    var newEnd = end < 0 ? stringToSlice.length + end : end;

    return stringToSlice.substring(newBegin, newEnd);
}