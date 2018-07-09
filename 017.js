/*
Number letter counts
Problem 17
If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?


NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.
*/
const ones = ',one,two,three,four,five,six,seven,eight,nine'.split(',');
const teens = 'ten,eleven,twelve,thirteen,fourteen,fifteen,sixteen,seventeen,eighteen,nineteen'.split(',');
const tens = ',ten,twenty,thirty,forty,fifty,sixty,seventy,eighty,ninety'.split(',');

const count = [...Array(1000)].reduce((p, c, i) => p + toEnglish(i+1).length, 0);
console.log(`The letters used in the numbers 1 to 1,000 inclusive written out in words sum to ${count.toLocaleString()}.`);

function toEnglish(num) {
  const words = [];
  if (num % 100 < 11 || num % 100 > 19) {
    if (num % 10 > 0) {
      words.push(ones[Math.floor(num % 10)]);
    }

    if (num % 100 / 10 >= 1) {
      words.push(tens[Math.floor(num % 100 / 10)]);
    }
  } else {
    words.push(teens[num % 10]);
  }

  if (num % 1000 / 100 >= 1) {
    if (num % 100 > 0) {
      words.push('and');
    }
    words.push(ones[Math.floor(num % 1000 / 100)]);
    words.push('hundred');
  }

  if (num / 1000 >= 1) {
    words.push('onethousand');
  }

  return words.reverse().join('');
}