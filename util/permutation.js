
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

module.exports = permutation;