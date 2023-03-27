function buildArray(nums) {
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    nums[i] = nums[i] + n * (nums[nums[i]] % n);
  }

  return nums.map((num) => Math.floor(num / n));
}
