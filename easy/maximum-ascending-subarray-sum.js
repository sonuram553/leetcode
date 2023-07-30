function maxAscendingSum(nums) {
  let sum = nums[0];
  let maxSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] < nums[i]) sum += nums[i];
    else {
      maxSum = Math.max(maxSum, sum);
      sum = nums[i];
    }
  }

  return Math.max(maxSum, sum);
}
