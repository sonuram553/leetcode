function minMaxGame(nums) {
  let n = nums.length;
  let i = 0;

  while (n !== 1) {
    for (let i = 0; i < n / 2; i++) {
      if (i & 1) nums[i] = Math.max(nums[2 * i], nums[2 * i + 1]);
      else nums[i] = Math.min(nums[2 * i], nums[2 * i + 1]);
    }

    n = n / 2;
  }

  return nums[0];
}
