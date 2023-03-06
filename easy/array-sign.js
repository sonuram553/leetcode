function arraySign(nums) {
  let negativeCount = 0;

  for (const num of nums) {
    if (num === 0) return 0;
    if (num < 0) negativeCount++;
  }

  if (negativeCount & 1) return -1;
  return 1;
}
