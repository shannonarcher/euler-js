const isPrime = function(n) {
  if (n <= 0) return false;
  if (n <= 2) return true; // exit early

  for (let i = 3, s = Math.sqrt(n); i <= s; i += 2) {
    if (n % i === 0) return false;
  }

  return true;
};

module.exports = isPrime;
