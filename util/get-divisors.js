function getDivisors(n) {
  const divisors = [];
  if (n > 1) {
    divisors.push(1);
  }

  for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
    if (n % i === 0) {
      divisors.push(i);
      n / i !== i && divisors.push(n / i);
    }
  }
  
  return divisors;
};

module.exports = getDivisors;
