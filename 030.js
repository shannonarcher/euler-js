/*
Digit fifth powers
Problem 30
Surprisingly there are only three numbers that can be written 
as the sum of fourth powers of their digits:

1634 = 14 + 64 + 34 + 44
8208 = 84 + 24 + 04 + 84
9474 = 94 + 44 + 74 + 44
As 1 = 14 is not a sum it is not included.

The sum of these numbers is 1634 + 8208 + 9474 = 19316.

Find the sum of all the numbers that can be written as the sum 
of fifth powers of their digits.
*/
const {performance} = require('perf_hooks');

const lowerLimit = 2;
const upperLimit = 10 ** 6; // can't be higher than this

const st = performance.now();
let sumOfSums = 0;
for (let i = lowerLimit; i < upperLimit; i++) {
  let x = i;
  let sumOf5 = 0;
  while (x != 0) {
    let y = x % 10;
    sumOf5 += y ** 5;
    x = Math.floor(x / 10);
  }

  if (sumOf5 === i) {
    sumOfSums += i;
  }
}
const et = performance.now();

console.log(`The sum of the numbers that can be written as the sum of fifth powers of their digits is ${sumOfSums.toLocaleString()} (${Math.floor(et - st)}ms).`);
