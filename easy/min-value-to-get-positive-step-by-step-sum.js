function minStartValue(nums) {
  let min = nums[0];

  for (let i = 1; i < nums.length; i++) {
    nums[i] += nums[i - 1];
    min = Math.min(min, nums[i]);
  }

  if (min >= 0) return 1;
  return Math.abs(min) + 1;
}
