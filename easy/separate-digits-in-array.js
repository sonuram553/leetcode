function separateDigits(nums) {
  const digits = [];

  nums.forEach((num) => {
    digits.push(...getDigits(num));
  });

  return digits;
}

function getDigits(num) {
  const digits = [];

  while (num) {
    digits.push(num % 10);
    num = Math.floor(num / 10);
  }

  return digits.reverse();
}
