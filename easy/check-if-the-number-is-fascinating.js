function isFascinating(n) {
  let i = 1;
  let temp = n;
  const set = new Set();

  while (i <= 3) {
    if (temp % 10 === 0) return false;

    while (temp) {
      const digit = temp % 10;
      temp = Math.floor(temp / 10);
      if (digit === 0 || set.has(digit)) return false;
      set.add(digit);
    }

    i++;
    temp = i * n;
  }

  return true;
}
