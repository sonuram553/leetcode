function smallestRangeI(nums, k) {
  const max = Math.max(...nums) - k;
  const min = Math.min(...nums) + k;
  return max - min > 0 ? max - min : 0;
}
