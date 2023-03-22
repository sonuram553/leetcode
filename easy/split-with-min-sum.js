function splitNum(num) {
  const digits = [];

  while (num) {
    digits.push(num % 10);
    num = Math.floor(num / 10);
  }

  digits.sort((a, b) => a - b);

  let num1 = 0,
    num2 = 0;

  for (let i = 0; i < digits.length; i++) {
    if (i & 1) num1 = num1 * 10 + digits[i];
    else num2 = num2 * 10 + digits[i];
  }

  return num1 + num2;
}
