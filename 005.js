/*
Smallest multiple
Problem 5
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 */
const min = 20;
let multiple = 0;

let current = min;
while (multiple === 0) {
  let isMultiple = true;
  for (let i = min; i > 0 && isMultiple; i--) {
    isMultiple = (current % i === 0);
  }
  if (isMultiple) {
    multiple = current;
  }
  current += min;
}

console.log(`The smallest positive number that is evenly divisible by all of the numbers from 1 to ${min} is ${multiple.toLocaleString()}`);
