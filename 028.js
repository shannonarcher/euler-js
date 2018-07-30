/*
Number spiral diagonals
Problem 28
Starting with the number 1 and moving to the right in a clockwise direction 
a 5 by 5 spiral is formed as follows:

21 22 23 24 25
20  7  8  9 10
19  6  1  2 11
18  5  4  3 12
17 16 15 14 13

It can be verified that the sum of the numbers on the diagonals is 101.

What is the sum of the numbers on the diagonals in a 1001 by 1001 spiral formed in the same way?
*/
// number space is small enough to brute force
const size = 1001;
let sum = 0;
for (let i = 0; i < Math.ceil(size / 2); i++) {
  sum += getSumOfCorners(i);
}

console.log(`The sum of the numbers in the diagonals of a ${size}x${size} grid is ${sum.toLocaleString()}.`);

function getSumOfCorners(i) {
  if (i === 0) return 1;
  return 16 * i ** 2 + 4 * i + 4;
}