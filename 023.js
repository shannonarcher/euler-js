/*
Non-abundant sums
Problem 23
A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. 
For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 
28 is a perfect number.

A number n is called deficient if the sum of its proper divisors is less than n and it is called 
abundant if this sum exceeds n.

As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written 
as the sum of two abundant numbers is 24. By mathematical analysis, it can be shown that all integers 
greater than 28123 can be written as the sum of two abundant numbers. However, this upper limit cannot
be reduced any further by analysis even though it is known that the greatest number that cannot be 
expressed as the sum of two abundant numbers is less than this limit.

Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.
*/
const getDivisors = require('./util/get-divisors');

const lowerLimit = 12;
const upperLimit = 28123;

const abundantNums = [];

// get all abundant numbers
for (let i = lowerLimit; i <= upperLimit; i++) {
  const sumDivisors = getDivisors(i).reduce((p,c) => p+c, 0);
  if (sumDivisors > i) {
    abundantNums.push(i);
  }
}

// generate sieve
const sieve = [];
for (let i = 0; i <= upperLimit; i++) {
  sieve[i] = i;
}

// remove all abundant sums
for (let i = 0; i < abundantNums.length; i++) {
  for (let j = i; j < abundantNums.length; j++) {
    const sum = abundantNums[i] + abundantNums[j];
    if (sum < sieve.length) {
      sieve[sum] = 0;
    }
  }
}

const answer = sieve.reduce((p,c) => p+c, 0).toLocaleString();
console.log(`The sum of all the positive integers which cannot be written as the sum of two abundant numbers is ${answer}.`);