'use strict';

const matches = (value, type) => typeof value === type.name.toLowerCase();

const contract = (fn, ...types) => {
  const argTypes = types.slice(0, -1);
  const resultType = types[types.length - 1];

  return (...args) => {
    args.forEach((arg, i) => {
      if (!matches(arg, argTypes[i])) {
        throw new TypeError(`Argument ${i} is not ${argTypes[i].name}`);
      }
    });

    const result = fn(...args);

    if (!matches(result, resultType)) {
      throw new TypeError(`Result is not ${resultType.name}`);
    }
    return result;
  };
};

const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
const res = addNumbers(2, 3);
console.dir(res); // 5