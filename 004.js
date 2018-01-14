/*
Largest palindrome product
Problem 4
A palindromic number reads the same both ways. The largest palindrome made from
the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
 */
const digits = 3;
const max = Math.pow(10, digits) - 1;
const min = Math.pow(10, digits - 1);

let palindrome = 0;

for (let i = max; i >= min; i--) {
  for (let j = i; j >= min; j--) {
    let result = i * j;

    if (result < palindrome) {
      break;
    }

    if (result > palindrome && isPalindrome(result)) {
      palindrome = result;
    }
  }
}

console.log(`The largest palindrome made from the product of two 3-digit numbers is ${palindrome.toLocaleString()}`)

function isPalindrome(num) {
  return num.toString() === num.toString().split('').reverse().join('');
}
