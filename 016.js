/*
Power digit sum
Problem 16
215 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 21000?
*/
const { performance } = require('perf_hooks');

let two = [2];
const power = 1000;

function times2(num) {
  num.forEach((n, i) => {
    num[i] = n * 2;
  });

  num.forEach((n, i) => {
    let r = Math.floor(n / 10);
    if (r > 0) {
      num[i] %= 10;
      if ((i+1) >= num.length) {
        num = [...num, r];
      }
      else {
        num[i+1] += r;
      }
    }
  });

  return num;
}

let start = performance.now();
for (var i = 1; i < power; i++) {
  two = times2(two);
}
let end = performance.now();

const sum = two.reduce((p,c) => p + c, 0);
const diff = Math.round((end - start) * 1000) / 1000;
console.log(`Sum of digits in 2^1000 is ${sum.toLocaleString()} (${diff}ms)`);