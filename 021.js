/*
Amicable numbers
Problem 21
Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

Evaluate the sum of all the amicable numbers under 10000.
*/
const limit = 10000;
const sums = [];
const amicable = [];

// for 10,000 get all numbers proper divisors
for (let i = 1; i < limit; i++) {
  sums[i] = getDivisors(i)
    .reduce((p,c) => p + c, 0);
}
// get all amicable
const amo = {};
for (let i = 1; i < limit; i++) {
  if (sums[i] > 0 && sums[i] < limit && i === sums[sums[i]] && i !== sums[i]) {
    amicable.push(i);
  }
}

// sum amicable
const sumAmicables = amicable.reduce((p,c) => p+c, 0);
console.log(`The sum of all amicable numbers under ${limit.toLocaleString()} is ${sumAmicables.toLocaleString()}.`)

// console.log(getDivisors(1));
// console.log(getDivisors(2));
// console.log(getDivisors(220));
// console.log(getDivisors(284));
// console.log(getDivisors(28));
// console.log(getDivisors(496));

function getDivisors(n) {
  const divisors = [];
  if (n > 1) {
    divisors.push(1);
  }

  for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
    if (n % i === 0) {
      divisors.push(i);
      divisors.push(n / i);
    }
  }
  return divisors;
}


