/*
Special Pythagorean triplet
Problem 9
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.

@NOTE there exists a formula for this, solve later
 */
const target = 1000;
let a = 0;
let b = 0;
let c = 0;

for (let i = 0; i < target * 0.5; i++) {
  for (let j = 0; j < i; j++) {
    let square = Math.sqrt(i * i + j * j);
    let sum = square + i + j;
    let isTriplet = j < i && i < square;

    if (sum === target && isTriplet) {
      a = j;
      b = i;
      c = square;
    }
  }
}

let product = a * b * c;
console.log(`The product of the Pythagorean triplet where a + b + c = 1000 and a < b < c is ${product.toLocaleString()} where a = ${a}, b = ${b} and c = ${c}.`);
