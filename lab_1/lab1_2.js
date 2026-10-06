'use strict';

const items = [
    true, false, 'test', 44, null, -17, 2.71, undefined, { a: 1 }, 1000000, [1, 2, 3], 
    'random', -3.14, Symbol('sym'), function() { return 'hello'; }
];

const typeCounts = {number: 0, string: 0, boolean: 0 };

for (const item of items) {
    const type = typeof item;
    if (type in typeCounts) {
        typeCounts[type]++;
    }
}

console.dir(typeCounts);

const typeCounts2 = {};

for (const item of items) {
    const type = typeof item;
    if (!(type in typeCounts2)) {
        typeCounts2[type] = 0;
    }
    typeCounts2[type]++;
}

console.dir(typeCounts2);