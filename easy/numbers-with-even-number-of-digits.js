function findNumbers(nums) {
  return nums.reduce((count, num) => {
    if (countDigits(num) & 1) {
      return count;
    }
    return count + 1;
  }, 0);
}

function countDigits(num) {
  if (num === 0) return 1;

  let count = 0;
  num = Math.abs(num);

  while (num) {
    num = Math.floor(num / 10);
    count++;
  }

  return count;
}
