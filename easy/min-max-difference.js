function minMaxDifference(num) {
  let temp = num;
  const digits = [];

  while (temp) {
    digits.push(temp % 10);
    temp = Math.floor(temp / 10);
  }

  digits.reverse();

  let replace;

  for (const digit of digits) {
    if (digit !== 9) {
      replace = digit;
      break;
    }
  }

  // Calculate max num
  let max = num;

  if (replace !== undefined) {
    max = digits.reduce(
      (num, digit) => num * 10 + (digit === replace ? 9 : digit),
      0
    );
  }

  // Calculate min num
  replace = digits[0];

  const min = digits.reduce(
    (num, digit) => num * 10 + (digit === replace ? 0 : digit),
    0
  );

  return max - min;
}
