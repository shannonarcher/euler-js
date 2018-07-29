/*
Quadratic primes
Problem 27
Euler discovered the remarkable quadratic formula:

n2+n+41
It turns out that the formula will produce 40 primes for the consecutive 
integer values 0≤n≤39. However, when n=40,402+40+41=40(40+1)+41 is 
divisible by 41, and certainly when n=41,412+41+41 is clearly divisible by 41.

The incredible formula n2−79n+1601 was discovered, which produces 80 
primes for the consecutive values 0≤n≤79. The product of the coefficients, 
−79 and 1601, is −126479.

Considering quadratics of the form:

n2+an+b, where |a|<1000 and |b|≤1000

where |n| is the modulus/absolute value of n
e.g. |11|=11 and |−4|=4
Find the product of the coefficients, a and b, for the quadratic expression that produces the maximum number of primes for consecutive values of n, starting with n=0.
*/
const isPrime = require('./util/is-prime');

let max = 0, a = 0, b = 0;
// for each million algorithms
for (let i = -999; i <= 1000; i++) {
  for (let j = -1000; j <= 1000; j++) {
    let n = -1;
    let result;
    do {
      n++;
      result = formula(n, i, j);
    } while (isPrime(result));

    // keep going
    if (n > max) {
      a = i;
      b = j;
      max = n;
    }
  }
}

const product = a * b;
console.log(`The product of the 2 coefficients that create the longest consecutive primes is ${product.toLocaleString()}. n^2 + ${a}n + ${b}`);

function formula(n, a, b) {
  return (n * n) + (a * n) + b;
}