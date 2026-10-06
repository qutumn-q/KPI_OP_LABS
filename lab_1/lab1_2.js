'use strict';

const items = [
    true, false, 'test', 42, null, -17, 2.71, undefined, { a: 1 }, [1, 2, 3]
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
    if (!(type in counts2)) {
        typeCounts2[type] = 0;
    }
    typeCounts2[type]++;
}

console.dir(typeCounts2);