function pivotIndex(nums) {
  const n = nums.length;

  // Store prefix sum in nums array
  for (let i = 1; i < n; i++) {
    nums[i] += nums[i - 1];
  }

  for (let i = 0; i < n; i++) {
    if (i === 0) {
      if (rightSum(1) === 0) return 0;
    } else if (i === n - 1) {
      if (leftSum(i - 1) === 0) return n - 1;
    } else if (leftSum(i - 1) === rightSum(i + 1)) return i;
  }

  function rightSum(start, end = n - 1) {
    return nums[end] - nums[start - 1];
  }

  function leftSum(i) {
    return nums[i];
  }

  return -1;
}
