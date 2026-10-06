'use strict';

const inc = (n) => n + 1;

const a = 5;
const b = inc(a);
console.dir({ a, b });

const incByRef = (num) => {
    num.n = num.n + 1
};

const obj = { n: 5 };
incByRef(obj);
console.dir({obj});