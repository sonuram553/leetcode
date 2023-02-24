function getNoZeroIntegers(n) {
  for (let i = 1; i <= n >>> 1; i++) {
    if (!isContainsZero(i) && !isContainsZero(n - i)) return [i, n - i];
  }
}

function isContainsZero(n) {
  while (n) {
    if (n % 10 === 0) return true;
    n = Math.floor(n / 10);
  }

  return false;
}
