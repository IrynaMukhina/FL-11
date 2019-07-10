function isInteger(value) {
    return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
}

isInteger(5);
isInteger(5.1);