function missingNumber(nums) {
  const size = nums.length;
  const totalSum = (size * (size + 1)) / 2;
  const sum = nums.reduce((acc, num) => acc + num);
  return totalSum - sum;
}
