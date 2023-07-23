function evenOddBit(n) {
  let i = 0;
  let even = 0;
  let odd = 0;

  while (n) {
    const bit = n % 2;
    if (i & 1) {
      if (bit) odd++;
    } else if (bit) even++;

    i++;
    n = Math.floor(n / 2);
  }

  return [even, odd];
}
