/*
Lexicographic permutations
Problem 24
A permutation is an ordered arrangement of objects. For example, 3124 is one possible 
permutation of the digits 1, 2, 3 and 4. If all of the permutations are listed numerically
or alphabetically, we call it lexicographic order. The lexicographic permutations of 0, 1 and 2 are:

012   021   102   120   201   210

What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9
*/
const nth = 1000000;
const start = '0123456789'.split('');

const sequence = permutation(start);
for (let i = 1; i < nth - 1; i++) sequence.next();

const answer = sequence.next().value;
console.log(Number(answer.join('')).toLocaleString());

// use next permutation algorithm to generate lexicographic permutations
// lexigraphical permutation algorithm
function* permutation(start) {
  let a = start;
  while (true) {
    let i = a.length - 1;
    // identify the pivot by traversing left, selecting the first number that decreases in value 
    while (i > 0 && a[i - 1] >= a[i]) {
      i--;
    }
    // can't find pivot? at last possible permutation
    if (i <= 0) break;

    // find successor to pivot in suffix, i.e. the minimum number that is greater than the pivot
    let j = a.length - 1;
    while (a[j] <= a[i - 1])
      j--;

    // swap the two
    swap(a, i - 1, j);

    // reverse suffix
    j = a.length - 1;
    while (i < j) {
      swap(a, i, j);
      i++;
      j--;
    }
    yield a;
  }
}

function swap(a, x, y) {
  const t = a[x];
  a[x] = a[y];
  a[y] = t;
}
