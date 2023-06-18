function applyOperations(nums) {
  const n = nums.length;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      nums[i] *= 2;
      nums[i + 1] = 0;
    }
  }

  let i = 0;
  let j = null;

  while (i < n) {
    if (nums[i] === 0) {
      if (j === null) j = i + 1;
      while (j < n && nums[j] === 0) {
        j++;
      }

      if (j === n) break;
      nums[i] = nums[j];
      nums[j] = 0;
    }
    i++;
  }

  return nums;
}
