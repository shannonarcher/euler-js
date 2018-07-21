/*
Factorial digit sum
Problem 20
n! means n × (n − 1) × ... × 3 × 2 × 1

For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
  and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

Find the sum of the digits in the number 100!

** Cheated a bit here by using BigInt **
*/
const n = 100;

// console.log(factorial(10) === 3628800n);
// console.log(factorial(100) > Number.MAX_SAFE_INTEGER);
// console.log(factorial(100));

const sum = factorial(n)
  .toString()
  .replace(/[\D]+/g, '')
  .split('')
  .reduce((p, c) => Number(p) + Number(c), 0);

console.log(`The factorial of ${n.toLocaleString()} sums to ${sum.toLocaleString()}.`);

function factorial(n) {
  if (n === 1) return 1;
  return BigInt(n) * BigInt(factorial(n-1));
}