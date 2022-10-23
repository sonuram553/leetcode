function isHappy(n) {
  const sums = [];

  while (true) {
    let sum = 0;

    while (n) {
      const digit = n % 10;
      sum += digit * digit;
      n = Math.floor(n / 10);
    }

    if (sum === 1) return true;
    if (sums.includes(sum)) return false;

    sums.push(sum);
    n = sum;
  }
}
