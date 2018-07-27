/*
Reciprocal cycles
Problem 26
A unit fraction contains 1 in the numerator. The decimal representation of the unit fractions with denominators 2 to 10 are given:

1/2	= 	0.5
1/3	= 	0.(3)
1/4	= 	0.25
1/5	= 	0.2
1/6	= 	0.1(6)
1/7	= 	0.(142857)
1/8	= 	0.125
1/9	= 	0.(1)
1/10	= 	0.1
Where 0.1(6) means 0.166666..., and has a 1-digit recurring cycle. It can be seen that 1/7 has a 6-digit recurring cycle.

Find the value of d < 1000 for which 1/d contains the longest recurring cycle in its decimal fraction part.
*/
const limit = 1000;

// for each fraction, figure out maximum num
let max = 0, maxIndex = 0;
for (let i = 1; i < limit; i++) {
  const recurringLength = recurringCycle(1, i);
  if (Math.max(max, recurringCycle(1, i)) !== max) {
    max = recurringCycle(1, i);
    maxIndex = i;
  }
}

console.log(`Value less than ${limit.toLocaleString()} with longest recurring cycle in its decimal fraction is ${maxIndex.toLocaleString()} with length ${max.toLocaleString()}.`);

// // tests
// console.log(recurringCycle(1, 7) === 6);
// console.log(recurringCycle(1, 6) === 1);
// console.log(recurringCycle(1, 3) === 1);
// console.log(recurringCycle(1, 4) === 0);
// console.log(recurringCycle(1, 5) === 0);
// console.log(recurringCycle(1, 2) === 0);
// console.log(recurringCycle(1, 9) === 1);

// return length of recurring cycle or 0 if non recurring
function recurringCycle(num, den) {
  // use long division to detect recurring cycles
  const divisions = {};
  let length = 0, r = num, digits = '', index = 0;
  // loop will always terminate on a rational number, (all fractions are rational numbers)
  while (true) {
    num = r;
    r = r % den;
    if (!divisions[r]) {
      // cache when we perform a division
      divisions[r] = index;
      digits += parseInt(num / den);
    }
    else {
      // calculate length from last step to the last time we did identical calculation
      length = digits.length - divisions[r];
      // if recurring num is 0, its not recurring
      if (length === 1 && r === 0)
        return 0;
      else 
        return length;
    }
    r *= 10;
    index++;
  }
}