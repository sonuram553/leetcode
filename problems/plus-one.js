const plusOne = function (digits) {
  const size = digits.length;
  let i = size - 1;

  if (digits[i] !== 9) {
    digits[i] += 1;
    return digits;
  }

  while (digits[i] === 9 && i >= 0) {
    digits[i] = 0;
    i -= 1;
  }

  if (i === -1) digits.unshift(1);
  else digits[i] += 1;

  return digits;
};

plusOne([1,2,3,9]);
