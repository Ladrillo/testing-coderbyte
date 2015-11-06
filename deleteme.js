function allEqual(array) {
    if (array.length === 1) return true;
    if (array[0] !== array[1]) return false;
    return allEqual(array.slice(1));
}

function acceptableArray(arr) {
    if (!(arr instanceof Array) || arr.length === 0) {
        return false;
    }
    if (arr.some(function (e) {
        return typeof e !== 'number' || e <= 0 || e % 1 !== 0;
    })) {
        return false;
    }
    if (arr.length > 1 && allEqual(arr)) {
        return false;
    }
    return true;
}