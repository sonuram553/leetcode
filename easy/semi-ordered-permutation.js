function semiOrderedPermutation(nums) {
  const n = nums.length;

  if (nums[0] === 1 && nums[n - 1] === n) return 0;

  let indexOfOne = -1;
  let indexOfN = -1;

  for (let i = 0; i < n; i++) {
    if (nums[i] === 1) indexOfOne = i;
    else if (nums[i] === n) indexOfN = i;

    if (indexOfOne !== -1 && indexOfN !== -1) break;
  }

  return indexOfOne + n - 1 - indexOfN - (indexOfOne > indexOfN ? 1 : 0);
}
