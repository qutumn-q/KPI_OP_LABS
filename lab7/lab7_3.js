'use strict';

const unique = (array) => {
    const seen = new Set();
    return array.filter(item => {
        if (seen.has(item)) {
            return false;
        }
        seen.add(item);
        return true;
    });
};

const result = unique([2, 1, 1, 3, 2, 4, 5, 3]);
console.log(result); // [2, 1, 3, 4, 5]