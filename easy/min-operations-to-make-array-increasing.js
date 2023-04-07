function minOperations(nums) {
  let count = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] >= nums[i]) {
      const add = nums[i - 1] - nums[i] + 1;
      nums[i] += add;
      count += add;
    }
  }

  return count;
}
