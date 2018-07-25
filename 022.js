/*
Names scores
Problem 22
Using names.txt (right click and 'Save Link/Target As...'), a 46K text file containing over five-thousand first names, begin by sorting it into alphabetical order. Then working out the alphabetical value for each name, multiply this value by its alphabetical position in the list to obtain a name score.

For example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. So, COLIN would obtain a score of 938 × 53 = 49714.

What is the total of all the name scores in the file?
*/
const fs = require('fs');

const filePath = './resources/p022_names.txt';
const fileContents = fs.readFileSync(filePath, 'utf8');

const {performance} = require('perf_hooks');

const names = fileContents.replace(/["]+/g, '').split(',');

const alpha = 'abcdefghijklmnopqrstuvwxyz';
const alphaValue = alpha.split('').reduce((p, c, i) => ({
  ...p, [c]: (i+1)
}), {});

const st = performance.now();
// sort
names.sort();
// sum
const totalScore = names
  .map((name, i) => getAlphabetValue(name.toLowerCase()) * (i+1))
  .reduce((p, c) => p + c, 0);
const et = performance.now();

console.log(`Total score of all the names in the file is ${totalScore.toLocaleString()} (${Math.round(et - st)}ms).`)

function getAlphabetValue(word) {
  return word
    .split('')
    .reduce((p, c) => p + alphaValue[c], 0)
}
