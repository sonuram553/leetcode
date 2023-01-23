function selfDividingNumbers(left, right) {
  const result = [];

  for (let i = left; i <= right; i++) {
    if (isSelfDividing(i)) result.push(i);
  }

  return result;
}

function isSelfDividing(num) {
  let temp = num;

  while (temp) {
    const digit = temp % 10;

    if (digit === 0 || num % digit) return false;

    temp = Math.floor(temp / 10);
  }

  return true;
}
