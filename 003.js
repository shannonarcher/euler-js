/*
Largest prime factor
Problem 3
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/
const isPrime = require('./util/is-prime.js');

const num = 600851475143;
let maxPrimeFactor = 2;

// from 2 til half
for (let i = 2; i <= num / 2; i++) {
  // get factor
  if (num % i === 0) {
    // test primeness
    let factor = num / i;
    if (isPrime(factor)) {
      maxPrimeFactor = factor;
      break;
    }
  }
}

console.log(`The largest prime factor for ${num.toLocaleString()}: ${maxPrimeFactor.toLocaleString()}`);
