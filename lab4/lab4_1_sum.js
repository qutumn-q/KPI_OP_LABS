'use strict';

function sumFor(...args) {
    let s = 0;
    for (let i = 0; i < args.length; i++) s += args[i];
    return s;
}

function sumForOf(...args) {
    let s = 0;
    for (const x of args) s += x;
    return s;
}

function sumWhile(...args) {
    let s = 0;
    let i = 0;
    while (i < args.length) {
        s += args[i];
        i++;
    }
    return s;
}

function sumDoWhile(...args) {
    let s = 0;
    let i = 0;
    if (args.length === 0) return 0;
    do {
        s += args[i];
        i++;
    } while (i < args.length);
    return s;
}

function sumReduce(...args) {
    return args.reduce((acc, x) => acc + x, 0);
}

console.log(sumFor(1, 2, 3));
console.log(sumForOf(0));
console.log(sumWhile());
console.log(sumDoWhile(1, -1, 1));
console.log(sumReduce(10, -1, -1, -1));