function createTargetArray(nums, index) {
  const target = [nums[0]];

  for (let i = 1; i < index.length; i++) {
    target.splice(index[i], 0, nums[i]);
  }

  return target;
}
