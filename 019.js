/*
Counting Sundays
Problem 19
You are given the following information, but you may prefer to do some research for yourself.

1 Jan 1900 was a Monday.
Thirty days has September,
April, June and November.
All the rest have thirty-one,
Saving February alone,
Which has twenty-eight, rain or shine.
And on leap years, twenty-nine.
A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?
*/

const month30 = [3, 5, 8, 10];

// test cases
// console.log('1900 not leap year:', !isLeapYear(1900));
// console.log('1904 is leap year:', isLeapYear(1904));
// console.log('2000 is leap year:', isLeapYear(2000));

// console.log('January has 31 days:', daysInMonth(0, 1900) === 31);
// console.log('April has 30 days:', daysInMonth(3, 1900) === 30);
// console.log('February 1999 has 28 days:', daysInMonth(1, 1999) === 28);
// console.log('February 2000 has 29 days:', daysInMonth(1, 2000) === 29);

// let sunday be 6
let sundays = 0;
let targetDay = 7;
let currentMonth = 0;
let day = 0;
for (let i = 0; i < 101 * 12; i++) {
  currentMonth = i % 12;

  if (i > 11 && !((day + 1) % targetDay)) {
    sundays++;
  }

  day += daysInMonth(currentMonth, 1900 + Math.floor(i / 12));
}

console.log(`Sundays that fall on the first of the month in the 20th century amount to ${sundays.toLocaleString()}.`);


function isLeapYear(year) {
  return Number(year) % 4 === 0 && (Number(year) % 100 !== 0 || Number(year) % 400 === 0);
}

function daysInMonth(month, year) {
  return month === 1 ? (isLeapYear(year) ? 29 : 28) : (~month30.indexOf(month) ? 30 : 31);
}