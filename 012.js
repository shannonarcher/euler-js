/**
Highly divisible triangular number
Problem 12
The sequence of triangle numbers is generated by adding the natural numbers. So the 7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. The first ten terms would be:

1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...

Let us list the factors of the first seven triangle numbers:

 1: 1
 3: 1,3
 6: 1,2,3,6
10: 1,2,5,10
15: 1,3,5,15
21: 1,3,7,21
28: 1,2,4,7,14,28
We can see that 28 is the first triangle number to have over five divisors.

What is the value of the first triangle number to have over five hundred divisors?
**/
const floor = 500;

const index = findTriangularIndex(floor);
const triangle = (index * (index + 1)) / 2;

console.log(`The value of the first triangle number to have over ${floor.toLocaleString()} divisors is ${triangle.toLocaleString()}.`);

function findTriangularIndex(limit) {
  let n = 1;
  let ln = getNumberOfDivisors(n);
  let rn = getNumberOfDivisors(n + 1);
  while (ln * rn < limit) {
    n += 1;
    ln = rn;
    rn = getNumberOfDivisors(n+1);
  }
  return n;
}

function getNumberOfDivisors(n) {
  if (n % 2 === 0)
    n = n / 2;
  let divisors = 1;
  let count = 0;

  while (n % 2 === 0) {
    count++;
    n /= 2;
  }
  divisors = divisors * (count + 1);

  let p = 3;
  while (n !== 1) {
    count = 0;
    while (n % p === 0) {
      count++;
      n = n / p;
    }
    divisors = divisors * (count + 1);
    p += 2;
  }

  return divisors;
}
