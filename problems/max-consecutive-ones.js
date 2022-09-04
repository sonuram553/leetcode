function findMaxConsecutiveOnes(nums) {
  let count = 0;
  let maxConsecutiveOnes = 0;

  for (const num of nums) {
    if (num === 1) count++;
    else {
      maxConsecutiveOnes = Math.max(maxConsecutiveOnes, count);
      count = 0;
    }
  }

  return Math.max(maxConsecutiveOnes, count);
}
