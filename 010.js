/*
Summation of primes
Problem 10
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.

@NOTE Sieve?
*/
const limit = 2 * (10 ** 6); // 2 million
const sieve = { };

for (let i = 2; i < limit; i++) {
  sieve[i] = true;
}

let i = 2;
while (i * i < limit) {
  for (let j = i * 2; j < limit; j += i) {
    sieve[j] = false;
  }

  // get next
  i++;
  while (sieve[i] === false) i++;
}

let sum = 0;
for (let i = 2; i < limit; i++) {
  if (sieve[i]) {
    sum += i;
  }
}

console.log(`The sum of all primes under ${limit.toLocaleString()} is ${sum.toLocaleString()}.`);
