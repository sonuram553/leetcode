function isMonotonic(nums) {
  let i = 1;
  const n = nums.length;

  // Find second unique num
  while (i < n && nums[i] === nums[i - 1]) i++;

  if (i === n) return true;

  if (nums[i - 1] < nums[i]) {
    // Check for monotonic increasing
    for (let j = i + 1; j < n; j++) {
      if (nums[j] < nums[j - 1]) return false;
    }
  } else {
    // Check for monotonic decreasing
    for (let j = i + 1; j < n; j++) {
      if (nums[j] > nums[j - 1]) return false;
    }
  }

  return true;
}
