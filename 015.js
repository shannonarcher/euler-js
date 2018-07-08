/*
Lattice paths
Problem 15
Starting in the top left corner of a 2×2 grid, and 
only being able to move to the right and down, there 
are exactly 6 routes to the bottom right corner.

How many such routes are there through a 20×20 grid?
*/
const size = 20;
const grid = [...Array(size+1)]
  .map(() => (
    [...Array(size+1)].map(() => -1)
  ));

// working backwards, for each point calc paths to end
grid[size][size] = 0;
for (let i = size-1; i >= 0; i--) {
  grid[i][i] = getMoves(i, i);
}

const totalPaths = grid[0][0].toLocaleString();
console.log(`The number of routes through a ${size}x${size} grid is ${totalPaths}`);

function getMoves(x = 0, y = 0) {
  if (x === size && y === size) return 1;
  if (x > size || y > size) return 0;
  
  if (~grid[x][y]) return grid[x][y];

  const h = getMoves(x+1, y);
  const v = getMoves(x, y+1);

  if ((x+1) < size) grid[x+1][y] = h;
  if ((y+1) < size) grid[x][y+1] = v;

  return h + v;
}

// apparently this is a combinatrics problem that works out
// to 2n choose n
// which translates to (2n)! / n!(2n-n)!
function factorial(n) {
  return n === 1 ? n : n * factorial(n-1);
}
const t = factorial(2*size) / (factorial(size) * factorial(size));
console.log(`The number of routes through a ${size}x${size} grid is ${t.toLocaleString()}`);