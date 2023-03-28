function leftRigthDifference(nums) {
  const n = nums.length;

  for (let i = 1; i < n; i++) {
    nums[i] += nums[i - 1];
  }

  const result = [];

  for (let i = 0; i < n; i++) {
    let leftSum = 0;
    let rightSum = 0;

    if (i > 0) leftSum = nums[i - 1];
    if (i < n - 1) rightSum = nums[n - 1] - nums[i];
    else rightSum = 0;

    result.push(Math.abs(leftSum - rightSum));
  }

  return result;
}
