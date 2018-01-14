/*
10001st prime
Problem 7
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?
*/
const isPrime = require('./util/is-prime.js');

const ordinal = 10001;
const primes = [];
primes.push(2);

let current = 3;
while (primes.length < ordinal) {
  if (isPrime(current)) {
    primes.push(current);
  }
  current += 2;
}

let lastPrime = primes.pop();

console.log(`The ${ordinal.toLocaleString()} prime is ${lastPrime.toLocaleString()}.`);
