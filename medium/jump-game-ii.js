function jump(nums) {
  const n = nums.length;
  let left = 0,
    right = 0,
    jumpCount = 0;

  while (right < n - 1) {
    let i = left;
    let farthest = 0;

    while (i <= right) {
      farthest = Math.max(farthest, i + nums[i]);
      i++;
    }

    left = right + 1;
    right = farthest;
    jumpCount++;
  }

  return jumpCount;
}
