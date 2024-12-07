function isUgly(num) {
  if (num <= 0) return false;

  for (const prime of [2, 3, 5]) {
    while (num && num % prime === 0) {
      num = num / prime;
    }

    if (num === 1) return true;
  }

  return false;
}
