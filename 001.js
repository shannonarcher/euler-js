/*
Multiples of 3 and 5
Problem 1
If we list all the natural numbers below 10 that are multiples of 3 or 5,
we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/
const nums = [3, 5];
const ceils = [10, 1000]; // include 10 to test
const sums = [0, 0];

ceils.forEach((ceil, ceilIndex) => {
  for (let j = 1; j < ceil; j++) {
    const add = nums.some(num => j % num === 0); // is a multiple of a num
    sums[ceilIndex] += add ? j : 0;
  }
});

sums.forEach((sum, sumIndex) => {
  console.log(`Sum of ${nums} under ${ceils[sumIndex].toLocaleString()}: ${sum.toLocaleString()}`);
});
