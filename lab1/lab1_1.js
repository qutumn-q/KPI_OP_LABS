'use strict';

const inc = (n) => n + 1;

const a = 5;
const b = inc(a);
console.dir({ a, b });

const incII = (num) => {
    num.n++;
};

const obj = { n: 5 };
incII(obj);
console.dir({obj});