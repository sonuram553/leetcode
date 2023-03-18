function alternateDigitSum(n) {
  const digits = [];

  while (n) {
    digits.push(n % 10);
    n = Math.floor(n / 10);
  }

  digits.reverse();

  let sum = digits[0];

  for (let i = 1; i < digits.length; i++) {
    if (i & 1) sum -= digits[i];
    else sum += digits[i];
  }

  return sum;
}
